import { Link } from "react-router-dom"
import $Logo from './Logo.styles.jsx';
import logo from '../../../assets/athena_logo.jpg';

export default function Logo() {
    return (
        <Link to="/home">
            <$Logo src={logo} alt="Carbon Tracker" />
        </Link>
    );
}