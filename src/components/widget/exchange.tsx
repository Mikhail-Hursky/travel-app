import React, {useEffect, useState} from 'react';
import axios from "axios";
import Loader from "../loader/Loader";
import { useSelector } from "react-redux";
import { State } from "../../redux/stateInterface";
import { ExchangeI } from "../../interfaces/Country";


const apiKey = '4c35b494485e3affe20481c1';
function Usd(props: any) {
 const [ratesUSD, setRatesUSD] = useState<ExchangeI[]>([]);
 const lang = useSelector((state: State) => state.lang.lang);

 function translate(str:any) {
  if (str === 'INR') {
    return lang === 'en' ? 'INR' : lang === 'ru' ? 'Инд.Рупия' : 'INR';
  }
  if (str === 'EUR') {
    return lang === 'en' ? 'EUR' : lang === 'ru' ? 'Евро' : 'EUR';
  }
  if (str === 'JPY') {
    return lang === 'en' ? 'JPY' : lang === 'ru' ? 'Йена' : 'JPY';
  }
}

useEffect(() => {
 axios.get(`https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`).then((response) => {
   const dataUSD: any[] = [];
   if (response.data) {
       dataUSD.push({
         rates: response.data.conversion_rates
       });
     setRatesUSD(dataUSD);
   }
 });
}, [setRatesUSD]);

return (
 (ratesUSD.length !== 0) && (ratesUSD[0].rates !== undefined) ? <div className="exchange-usd curr">1 {lang === 'en' ? 'USD' : lang === 'ru' ? 'ДОЛ' : 'USD'} -&gt; {ratesUSD[0].rates[props.currency]} {translate(props.currency)}</div> : <Loader />
)
}

function Eur(props:any) {
 const [ratesEUR, setRatesEUR] = useState<ExchangeI[]>([]);

  function translate(str:any) {
      if (str === 'INR') {
        return lang === 'en' ? 'INR' : lang === 'ru' ? 'Инд.Рупия' : 'INR';
      }
      if (str === 'EUR') {
        return lang === 'en' ? 'EUR' : lang === 'ru' ? 'Евро' : 'EUR';
      }
      if (str === 'JPY') {
        return lang === 'en' ? 'JPY' : lang === 'ru' ? 'Йена' : 'JPY';
      }
  }

 const lang = useSelector((state: State) => state.lang.lang);
    useEffect(() => {
     axios.get(`https://v6.exchangerate-api.com/v6/${apiKey}/latest/BYN`).then((response) => {
       const dataEUR: any[] = [];
       if (response.data) {
           dataEUR.push({
             rates: response.data.conversion_rates
           });
         setRatesEUR(dataEUR);
       }
     });
   }, [setRatesEUR]);
return (
 (ratesEUR.length !== 0) && (ratesEUR[0].rates !== undefined) ? <div className="exchange-eur curr">1 {lang === 'en' ? 'BYN' : lang === 'ru' ? 'Бел.Рубль' : 'BYN'} -&gt; {ratesEUR[0].rates[props.currency]} {translate(props.currency)}</div> : <Loader />
)
}

function Exchange(props:any) {
const lang:string = useSelector((state: State) => state.lang.lang);
const title:any = {'en': 'Exchange Rates', 'ru': 'Обменные курсы', 'fr': "Taux d'échange"};
 return (
  <div className="exchange">
          <h2 className="exchange-title">{title[lang]}</h2>
                                                                
          <Usd currency={props.currency}/>
          <Eur currency={props.currency}/>
          </div>
 )
}

export default Exchange;