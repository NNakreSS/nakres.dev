import { useEffect, useRef, useState } from "react";
import classNames from "classnames";
// icons
import { IoLanguage } from "react-icons/io5";
import { MdLightMode, MdModeNight } from "react-icons/md";
// localization
import { useTranslation } from "react-i18next";
// redux
import { useDispatch, useSelector } from "react-redux";
import { themeSelector, toggleDarkMode } from "../../redux/slicers/themeSlice";
// component
import { AnimatePresence, motion } from "framer-motion";

// languages folder name
const languages = ["tr", "en"];

//animate
const menuVariant = {
  initial: {
    scaleY: 0,
    opacity: 0,
  },
  animate: {
    scaleY: 1,
    opacity: 1,
    transition: {
      duration: 0.2,
      ease: [0.12, 0, 0.39, 0],
    },
  },
  exit: {
    scaleY: 0,
    opacity: 0,
    transition: {
      duration: 0.3,
      ease: [0.22, 0, 0.36, 1],
    },
  },
};

const Settings = () => {
  // localization
  const { i18n } = useTranslation();
  // redux
  const dispatch = useDispatch();
  const { darkMode } = useSelector(themeSelector);

  // states
  const [isDrop, setIsDrop] = useState<boolean>(false);
  // refs
  const languageButtonRef = useRef<HTMLDivElement | null>(null);
  const languageDropBoxRef = useRef<HTMLDivElement | null>(null);

  // toggle dark mode button action
  const toggleMode = () => dispatch(toggleDarkMode());
  // toggle language button action
  const toggleLanguage = (lang: string) => i18n.changeLanguage(lang);
  // toggle language dropdown menu action
  const setDropLanguageMenu = (drop: boolean) => setIsDrop(drop);

  // window click listener handle
  const clickHandleWindows = (e: any) => {
    if (
      !languageButtonRef.current?.contains(e.target) &&
      !languageDropBoxRef.current?.contains(e.target)
    ) {
      setDropLanguageMenu(false);
    }
  };

  useEffect(() => {
    if (isDrop) {
      window.addEventListener("click", clickHandleWindows);
    } else {
      window.removeEventListener("click", clickHandleWindows);
    }
    return () => window.removeEventListener("click", clickHandleWindows);
  }, [isDrop]);

  return (
    <div className="grid grid-cols-2 gap-4 relative">
      {/* theme mod button */}
      <div
        id="dark-mode-toggle"
        className="cursor-pointer text-3xl"
        onClick={toggleMode}
      >
        {darkMode ? <MdLightMode /> : <MdModeNight />}
      </div>
      {/* theme mod button end */}

      {/* language button */}
      <div id="lang" className="cursor-pointer text-3xl relative">
        <div ref={languageButtonRef} onClick={() => setDropLanguageMenu(true)}>
          <span>
            <IoLanguage />
          </span>
        </div>
        {/* language dropdown */}
        <AnimatePresence>
          {isDrop && (
            <motion.div
              variants={menuVariant}
              initial="initial"
              animate="animate"
              exit="exit"
              ref={languageDropBoxRef}
              className={classNames(
                "flex justify-center items-center bg-card p-5 px-10 rounded-md text-2xl font-semibold dropdown before:bg-card before:border-text-main before:border-t-2 before:border-l-2 border-text-main border-2 absolute -left-10 top-12 origin-top",
                { "opacity-0": !isDrop }
              )}
            >
              <ul className="flex flex-col gap-2">
                {languages.map((lang: string) => (
                  <li
                    key={lang}
                    className={classNames({
                      "text-warning": i18n.language.startsWith(lang),
                    })}
                    onClick={() => toggleLanguage(lang)}
                  >
                    {lang.toUpperCase()}
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
        {/* language dropdown end */}
      </div>
      {/* language button  end*/}
    </div>
  );
};

export default Settings;
