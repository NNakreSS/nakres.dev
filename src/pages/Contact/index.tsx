import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Button from "../../components/Button";
import axios from "axios";
import { Helmet } from "react-helmet";

const Contact: React.FC = () => {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await axios.post(import.meta.env.VITE_CONTACT_WEBHOOK, {
      embeds: [
        {
          title: "Yeni İletişim Formu",
          color: 0x00ff00, // Renk kodu (Yeşil)
          fields: [
            {
              name: "Ad",
              value: formData.name,
            },
            {
              name: "E-posta",
              value: formData.email,
            },
            {
              name: "Mesaj",
              value: formData.message,
            },
          ],
        },
      ],
    });
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <section>
      <Helmet>
        <title>{t("pages.contact")}</title>
        <meta name="description" content={t("descriptions.contact")} />
      </Helmet>
      <h1 className="text-text-main text-4xl font-semibold">
        {t("pages.contact").toUpperCase()}
      </h1>
      <div className="mx-auto w-full md:w-6/12 text-text-main mt-4">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium">
              {t("name")}
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 p-2 block w-full border-border rounded-md shadow-sm sm:text-sm bg-card"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium ">
              {t("email")}
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 p-2 block w-full rounded-md shadow-sm  sm:text-sm bg-card"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium ">
              {t("message")}
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className="mt-1 p-2 block w-full rounded-md shadow-sm sm:text-sm bg-card"
              required
            />
          </div>
          <div>
            <Button
              type="primary"
              variant="filled"
              className="w-full !text-white"
            >
              {t("send")}
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
