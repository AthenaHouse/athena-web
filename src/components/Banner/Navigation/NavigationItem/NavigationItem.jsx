import { $Icon, $NavigationItem } from './NavigationItem.styles.jsx';

/* eslint-disable react/jsx-pascal-case */
export default function NavigationItem ({ children, title }) {

    return (
        <$NavigationItem>
            <$Icon>{children}</$Icon>
            {title}
        </$NavigationItem>
    )
}