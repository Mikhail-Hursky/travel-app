import React from 'react';
import { useSelector } from "react-redux";
import { State } from "../../redux/stateInterface";

import "./../../Normalize.css";
import "./wrap-title.scss";

function WrapTitle() {
  const lang: string = useSelector((state: State) => state.lang.lang);

  return (
    <div className="wrap-description">
      <p>{lang === 'en' ? 'ready for your' : lang === 'ru' ? 'Ты готов' : 'prêt pour votre'}</p>
      <p>{lang === 'en' ? 'next trip?' : lang === 'ru' ? 'к путешествию?' : 'prochain voyage?'}</p>
    </div>
  )
}

export default WrapTitle;
