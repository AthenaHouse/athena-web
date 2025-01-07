import { $Icon, $NavigationItem } from './NavigationItem.styles.jsx';

export default function NavigationItem ({ children, title }) {

    return (
        <$NavigationItem>
            <$Icon>{children}</$Icon>
            {title}
        </$NavigationItem>
    )
}