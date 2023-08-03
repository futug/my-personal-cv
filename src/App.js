import React from "react";
import "./App.css";
import Main from "./components/Main";
import Header from "./components/Header";
import { useTranslation } from "react-i18next";
import i18n from "./18n";
import { useTheme } from "./utils/hooks/useTheme";

function App() {
    const { theme, setTheme } = useTheme();
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };
    const { t } = useTranslation();
    return (
        <div className="App">
            <Header changeLanguage={changeLanguage} />
            <Main />
        </div>
    );
}

export default App;
