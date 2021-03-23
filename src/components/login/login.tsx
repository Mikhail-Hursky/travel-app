import React, {useContext} from 'react';
import {Context} from '../context/context';
import { useSelector } from "react-redux";
import { State } from "../../redux/stateInterface";

import "./../../Normalize.css";
import "./login.scss";

function Login() {
  const lang: string = useSelector((state: State) => state.lang.lang);
  const {changeModal} = useContext(Context);
  return (
    <div className="login">
      <button onClick={()=>changeModal('login')}>{lang === 'en' ? 'LOG IN' : lang === 'ru' ? 'Вход' : 'Entrer'}</button>
    </div>
  )
}

export default Login;
