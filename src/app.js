//Welcome to QuarzoJS
import ResponsiveNavbar from './modules/ResponsiveNavbar';
import Grid from './modules/Grid';
//Styles
import './css/style.css';
import './css/ResponsiveNavbar.css';

//Setting the main grid
const mainGridContainer = document.getElementById('main'); //We take the container of the grid

//Creating the grid
const mainGrid = new Grid(mainGridContainer, {
    gap: '20px'
}, []);

console.log(mainGrid.getElement('main').style.gridTemplateAreas);

//Ends the Grid

//Here we create the main menu :-)
const mainMenu = new ResponsiveNavbar({
    elementId: 'navbar',
    fixed: true,
    height: '60px',
    color: '#2c2c2c',
    links: [
        {name: 'Home', url: '#'},
        {name: 'About us', url: '#'},
        {name: 'Services', url: '#'}
    ],
    colorLink: '#fff',
    colorLinkHover: 'red',
    colorLinkSubMenu: 'black',
    colorLinkHoverSubMenu: 'green',
    widthSubMenu: '80%',
    colorSubMenu: '#eee'
});
//Ends the navbar

//We create the Row for push navbar

mainGrid.createRow([
    {content: mainMenu.getElement('navbar'), numberColumns: 12, area: "navbar"}
]);
//Ends creating the row for navbar

//Test of other double row
mainGrid.createRow([
    {content: document.getElementById('uno'), numberColumns: 6, area: "rojo"},
    {content: document.getElementById('dos'), numberColumns: 6, area: "amarillo"}
]);


mainGrid.createRow([
    {content: document.getElementById('tres'), numberColumns: 12, area: "azul"}
]);