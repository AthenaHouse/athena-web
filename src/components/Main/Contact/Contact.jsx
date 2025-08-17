import Info from "./Info/Info.jsx"
import Form from "./Form/Form.jsx"
import { $Contact } from "./Contact.styles.jsx";

/* eslint-disable react/jsx-pascal-case */
export default function Contact() {

    return (<$Contact><Info></Info><Form></Form></$Contact>);
}