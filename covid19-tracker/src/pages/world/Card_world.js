import React, {useEffect, useState } from 'react';
import axios from "axios"
import NumberFormat from "react-number-format";

const Card_world = () => {
  const [Case, setCase] = useState("");
  const [Dead, setDead] = useState("");
  const [Cured, setCured] = useState("");
  useEffect(() => {
    axios 
     .get("https://covid19.mathdro.id/api")
     .then((response) => { 
     setCase(response.data.confirmed.value);
     setDead(response.data.deaths.value);
     setCured(response.data.recovered.value);
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

export default Card_world;