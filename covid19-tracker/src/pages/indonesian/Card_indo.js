import React, {useEffect, useState } from 'react';
import axios from "axios"
import NumberFormat from "react-number-format";

const Card_indo = () => {
  const [Case, setCase] = useState("");
  const [Dead, setDead] = useState("");
  const [Cured, setCured] = useState("");
  useEffect(() => {
    axios 
     .get("https://indonesia-covid-19.mathdro.id/api")
     .then((response) => { 
     setCase(response.data.jumlahKasus);
     setDead(response.data.meninggal);
     setCured(response.data.sembuh);
    })  
 }, []);
  return(
        <>
            <tr>
                <th>
                    <h1 className="card1">
                        <p>Positif</p>
                        <NumberFormat value={Case} thousandSeparator={true} displayType={'text'}/>
                    </h1>
                </th>
                <th>
                    <h1 className="card2">
                        <p>Sembuh</p>
                        <NumberFormat value={Cured} thousandSeparator={true} displayType={'text'}/>
                    </h1>
                </th>
                <th>
                    <h1 className="card3">
                        <p>Meninggal</p>
                        <NumberFormat value={Dead} thousandSeparator={true} displayType={'text'}/>
                    </h1>
                </th>
            </tr>
        </>
  ); 
};

export default Card_indo;