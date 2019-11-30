import ResponsiveNavbar from './modules/ResponsiveNavbar';
//Styles
import './css/style.css';
import './css/ResponsiveNavbar.css';

const mainMenu = new ResponsiveNavbar({
    elementId: 'navbar',
    fixed: true,
    height: '60px',
    color: 'green',
    links: [
        {name: 'Inicio', url: '#'},
        {name: 'Sobre Nosotros', url: '#'}
    ],
    colorLink: '#fff',
    colorLinkHover: 'grey'
});

mainMenu.createContainer();