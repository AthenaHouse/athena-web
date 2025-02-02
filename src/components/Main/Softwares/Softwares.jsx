import { useEffect, useState } from 'react';

import Software from "./Software/Software.jsx";
import softwareData from './Softwares.data.js';
import { $Line, $Softwares } from "./Softwares.styles.jsx";

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
      {/* https://athena-web-bucket.s3.eu-west-1.amazonaws.com/test_case_file_manager/test_case_file_manager_v106_setup.exe
      <br />
      https://athena-web-bucket.s3.eu-west-1.amazonaws.com/test_case_file_manager/tcfm_user_documentation.pdf */}
    </$Softwares>
  );
}
