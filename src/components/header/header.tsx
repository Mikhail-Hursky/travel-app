import React from 'react';
import { useSelector } from "react-redux";
import { State } from "../../redux/stateInterface";

import Logo from './../logo/logo';
import { Search } from './../search/search.js';

import "./../../Normalize.css";
import "./header.scss";

function Header() {
  const lang = useSelector((state: State) => state.lang.lang);
  return (
    <header>
      <Logo />
      <Search />
      <p className="description">{lang === 'en' ? 'halcyon days' : lang === 'ru' ? 'безмятежные дни' : 'jours heureux'}</p>

    </header>
  )
}

export default Header;
