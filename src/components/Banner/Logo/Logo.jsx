import { Link } from "react-router-dom"
import $Logo from './Logo.styles.jsx';
import logo from '../../../assets/athena_logo.jpg';

/* eslint-disable react/jsx-pascal-case */
export default function Logo() {
    return (
        <Link to="/home" style={{ display: 'inline-block' }}>
            <$Logo src={logo} alt="Carbon Tracker" />
        </Link>
    );
}