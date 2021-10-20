import { Switch, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import Header from "./Components/shared/Header/Header";
import Footer from "./Components/shared/Footer/Footer";
import GetAll from "./Pages/GetAll/GetAll";
import GetOne from "./Pages/GetOne/GetOne";
import Create from "./Pages/Create/Create";
import Delete from "./Pages/Delete/Delete";
/* import DeleteAll from './Pages/DeleteAll/DeleteAll'; */
import UpdateOne from "./Pages/UpdateOne/UpdateOne";
import Sobre from "./Pages/Sobre/Sobre";
import { lightTheme, darkTheme } from "./Components/structure/Theme/styled";
import GlobalTheme from "./Components/structure/Global/globals";
import ThemeButton from "./Components/structure/ThemeButton/styled";

export default function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    if (theme === "light") {
      window.localStorage.setItem("theme", "dark");
      setTheme("dark");
    } else {
      window.localStorage.setItem("theme", "light");
      setTheme("light");
    }
  };
  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme");
    localTheme && setTheme(localTheme);
  }, []);

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalTheme />
      <Header />
      <Switch>
        <Route path="/" exact={true} component={GetAll} />
        <Route path="/create" component={Create} />
        <Route path="/getOne/:id" component={GetOne} />
        <Route path="/delete/:id" component={Delete} />
        {/*   <Route path="/deleteAll" component={DeleteAll}/> */}
        <Route path="/updateOne/:id" component={UpdateOne} />
        <Route path="/sobre" component={Sobre} />
      </Switch>
      <Footer />
      <ThemeButton
        className="im im-light-bulb"
        onClick={toggleTheme}
      ></ThemeButton>
    </ThemeProvider>
  );
}
