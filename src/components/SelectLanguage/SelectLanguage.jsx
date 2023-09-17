import { useTranslation } from "react-i18next";
import { Select } from "./SelectLanguage.styled";
import { useEffect, useState } from "react";

export const SelectLanguage = () => {
  const [language, setLanguage] = useState(localStorage.getItem('lang') || 'en');
  const { t, i18n } = useTranslation();

  useEffect(() => {
    changeLanguage(language);
  }, [language]);

  const handleLanguageChange = (e) => {
    const lang = e.target.value;
    localStorage.setItem('lang', lang);
    setLanguage(lang);
    changeLanguage(lang);
  };

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
      <Select value={language} onChange={(e) => handleLanguageChange(e)}>
        <option value="ua">ua</option>
        <option value="en">en</option>
      </Select>
  );
};
