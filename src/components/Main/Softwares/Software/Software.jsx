import { useState } from "react";
import { useTranslation } from "react-i18next";
import { CSSTransition } from "react-transition-group";
import { FaMinusSquare, FaPlusSquare } from "react-icons/fa";
import {
  $Description,
  $Details,
  $DropdownWrapper,
  $Expand,
  $Img,
  $ImgWrapper,
  $Name,
  $Software,
} from "./Software.styles.jsx";
import { formatLocale, formatName } from "./Software.utils.js";

export default function Software({ softName }) {
  const logo = require(`./assets/${softName}/logo.jpg`);
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();

  function toggleDropdown() {
    console.log(isOpen);
    setIsOpen((_prevIsOpen) => !_prevIsOpen);
  }

  return (
    <$DropdownWrapper>
      <$Software>
        <$ImgWrapper>
          <$Img src={logo} alt="logo" />
        </$ImgWrapper>
        <$Name>
          <h4>{formatName(softName)}</h4>
        </$Name>
        <$Description>{t(formatLocale(softName))}</$Description>
        <$Expand onClick={toggleDropdown}>{isOpen ? <FaMinusSquare /> : <FaPlusSquare />}</$Expand>
      </$Software>
      <CSSTransition
        in={isOpen}
        timeout={300}
        classNames="dropdown"
        unmountOnExit
        key={softName}
      >
        <$Details className="dropdown">zzz</$Details>
      </CSSTransition>
    </$DropdownWrapper>
  );
}
