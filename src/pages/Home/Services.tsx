import ServiceCard from "../../components/Card/ServiceCard";

const services = [
  {
    title: "Mobil Uygulama",
    description: "İş ihtiyaçlarınıza göre uyarlanmış mobil uygulama çözümleri",
  },
  {
    title: "Web Geliştirme",
    description:
      "Sanal görünürlüğünüzü arttırmak için sürdürülebilir web siteleri , İşletmenizi rahatlatmak için özel web uygulamaları ve müşterilerinizle etkileşimi artırmak için özelleştirilmiş çözümler",
  },
  {
    title: "FiveM Script",
    description:
      "FiveM için özelleştirilmiş scriptlerle sunucunuzu güçlendirin . Eğlenceli ve benzersiz oyun deneyimi için özgün içerikler , FiveM topluluğunun ihtiyaçlarına uygun çözümler",
  },
];

const Services = () => {
  return (
    <section id="services">
      <div className="flex mb-5">
        <h3 className="text-2xl lg:text-4xl font-semibold ">Hizmetler</h3>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {services.map(({ title, description }, index) => (
          <ServiceCard
            key={index}
            title={title}
            description={description}
            className="w-full bg-zinc-800 p-5 rounded-md min-h-60 flex flex-col gap-10 justify-stretch shadow-inner shadow-black"
          />
        ))}
      </div>
    </section>
  );
};

export default Services;
