import $Banner from './Banner.styles.jsx';
import Language from './Language/Language.jsx';
import Logo from './Logo/Logo.jsx';
import Navigation from './Navigation/Navigation.jsx';

/* eslint-disable react/jsx-pascal-case */
export default function Banner () {

    return (
        <$Banner>
            <Logo />
            <Language />
            <Navigation />
        </$Banner>
    )
}