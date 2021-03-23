import React from 'react';
import { useSelector } from "react-redux";
import { State } from "../../redux/stateInterface";

import Logo from './../logo/logo';
import Toolbar from './../toolbar/toolbar';

import "./../../Normalize.css";
import "./header-country.scss";

function HeaderCountry() {
  const lang = useSelector((state: State) => state.lang.lang);
  return (
    <header className="country">
      <Logo />
      <div className="toolbar-country">
        <Toolbar />
      </div>
      <p className="description">{lang === 'en' ? 'halcyon days' : lang === 'ru' ? 'безмятежные дни' : 'jours heureux'}</p>
    </header>
  )
}

export default HeaderCountry;
