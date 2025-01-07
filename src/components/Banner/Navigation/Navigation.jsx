import $Navigation, { $Link } from './Navigation.styles.jsx';
import NavigationItem from './NavigationItem/NavigationItem.jsx';
import { IoCodeSlash, IoFolderOpenOutline, IoInformationCircleOutline, IoPersonOutline, IoSchoolOutline } from "react-icons/io5";

export default function Navigation () {

    return (
        <$Navigation>
            <$Link to="/home">
                <NavigationItem title='About'><IoInformationCircleOutline /></ NavigationItem>
            </$Link>
            <$Link to="/academy">
                <NavigationItem title='Academy'><IoSchoolOutline /></ NavigationItem>
            </$Link>
            <$Link to="/software">
                <NavigationItem title='Software'><IoCodeSlash /></ NavigationItem>
            </$Link>
            <$Link to='/projects'>
                <NavigationItem title='Projects'><IoFolderOpenOutline /></ NavigationItem>
            </$Link>
            <$Link to='/contact'>
                <NavigationItem title='Contact'><IoPersonOutline /></ NavigationItem>
            </$Link>
        </$Navigation>
    )
}