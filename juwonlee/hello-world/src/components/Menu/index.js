import  './Menu.css'

const Menu = ({ title, url }) => {
    return (
        <a class="menu-item" href={ url } target="_blank">{ title }</a>
    );
}

export default Menu;
