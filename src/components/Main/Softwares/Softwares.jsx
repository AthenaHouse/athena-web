import { useEffect, useState } from 'react';

import Software from "./Software/Software.jsx";
import softwareData from './Softwares.data.js';
import { $Line, $Softwares } from "./Softwares.styles.jsx";

/* eslint-disable react/jsx-pascal-case */
export default function Softwares() {
  const [data, setData] = useState([]);

  useEffect(() => {
    console.log("dsfdsfsdf", softwareData);
    setData(_prevData => softwareData);
  }, []);

  return (
    <$Softwares>
      <$Line />
      {data.map(soft => <><Software key={soft.id} softName={soft.name}/><$Line /></>)}
    </$Softwares>
  );
}
