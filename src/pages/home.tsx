import ChangeLanguage from "@/components/common/ChangeLanguage";
import ToggleDarkMode from "@/components/common/ToggleDarkMode";
import { useTranslation } from "react-i18next";

const Home = () => {
    const { t } = useTranslation("common");
    return <div className="bg-primary-500  text-white  ">{t("hello")}
    <ToggleDarkMode/>
    <ChangeLanguage />
    </div>;
};

export default Home;
