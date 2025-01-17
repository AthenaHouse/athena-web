import { useTranslation } from 'react-i18next';
import $Navigation, { $Link, Container, AnimationOverlay, Triangle } from './Navigation.styles.jsx';
import NavigationItem from './NavigationItem/NavigationItem.jsx';
import { IoCodeSlash, IoFolderOpenOutline, IoInformationCircleOutline, IoPersonOutline, IoSchoolOutline } from "react-icons/io5";
import { shuffleArray } from './Navigation.utils.js';

export default function Navigation () {

    const { t } = useTranslation();

    const triangles = []; 
    const rows = 5; 
    const cols = 28; 
    let delay = 1;

    const delays = [];
    for (let i = 0; i < rows * cols; i++) { 
        delays.push(delay); delay += 0.0115; 
    } 
    shuffleArray(delays);

    for (let i = 0; i < rows; i++) { 
        for (let j = 0; j < cols; j++) { 
            triangles.push( <Triangle key={`${i}-${j}`} delay={delays.pop()} isFlipped={(i + j) % 2 === 0} /> ); 
        } 
    }

    return (
        <Container>
            <$Navigation>
                <$Link to="/home">
                    <NavigationItem title={t('menu_home')}><IoInformationCircleOutline /></ NavigationItem>
                </$Link>
                <$Link to="/academy">
                    <NavigationItem title={t('menu_academy')}><IoSchoolOutline /></ NavigationItem>
                </$Link>
                <$Link to="/software">
                    <NavigationItem title={t('menu_software')}><IoCodeSlash /></ NavigationItem>
                </$Link>
                <$Link to='/projects'>
                    <NavigationItem title={t('menu_projects')}><IoFolderOpenOutline /></ NavigationItem>
                </$Link>
                <$Link to='/contact'>
                    <NavigationItem title={t('menu_contact')}><IoPersonOutline /></ NavigationItem>
                </$Link>
            </$Navigation>
            <AnimationOverlay> 
                {triangles}
            </AnimationOverlay>
        </Container>
    )
}