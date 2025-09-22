import { useEffect } from "react";
import { useTranslation } from "react-i18next";

export function useDirection() {
  const { i18n } = useTranslation();

  useEffect(() => {
    if (i18n.language === "fa") {
      document.documentElement.setAttribute("dir", "rtl");
    } else {
      document.documentElement.setAttribute("dir", "ltr");
    }
  }, [i18n.language]);
}
