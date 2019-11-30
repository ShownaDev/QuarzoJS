//Welcome to QuarzoJS
import ResponsiveNavbar from './modules/ResponsiveNavbar';
//Styles
import './css/style.css';
import './css/ResponsiveNavbar.css';

//Here we create the main menu :-)
const mainMenu = new ResponsiveNavbar({
    elementId: 'navbar',
    fixed: true,
    height: '60px',
    color: 'black',
    links: [
        {name: 'Home', url: '#'},
        {name: 'About us', url: '#'},
        {name: 'Services', url: '#'}
    ],
    colorLink: '#fff',
    colorLinkHover: '#eee'
});