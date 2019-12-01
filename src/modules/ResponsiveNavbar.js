import Element from './Element';

export default class ResponsiveNavbar extends Element{
    constructor(element){
        super();
        this.element = element;
        this.createContainer();
    }

    createContainer() {
        const navbarContainer = document.getElementById(this.element.elementId);

        var fixedOrNot = (this.element.fixed) ? 'fixed' : 'relative';
        const icon = this.createDefaultIcon();

        const styles = {
            'position': fixedOrNot,
            'backgroundColor': this.element.color,
            'height' : this.element.height
        }

        this.setStyle(navbarContainer, styles);
        this.setPagesLinks(navbarContainer);

        navbarContainer.className = 'quarzo-responsive-navbar';
        navbarContainer.appendChild(icon);

        icon.addEventListener('click', this.createSubMenuResponsive());
    }

    setPagesLinks(container){
        var pagesLinks = this.element.links;

        pagesLinks.forEach(link => {
            var linkTag = document.createElement("a");
            var colorHover = this.element.colorLinkHover;
            var colorLink = this.element.colorLink;

            linkTag.innerHTML = link.name;

            linkTag.className = 'quarzo-link-navbar';
            linkTag.style.color = colorLink;

            linkTag.addEventListener('mouseenter', function(e){
                e.target.style.color = colorHover;
                e.target.style.transitionDuration = '200ms';
                e.target.style.transitionTimingFunction = 'ease-in-out';
            });

            linkTag.addEventListener('mouseleave', function(e){
                e.target.style.color = colorLink;
            });

            linkTag.setAttribute('href', link.url);

            container.appendChild(linkTag);
        });
    }

    createDefaultIcon(){
        var iconContainer = document.createElement("div");
        iconContainer.className = 'quarzo-menu-icon-container';
        iconContainer.setAttribute('id', 'quarzo-menu-icon-container');
        for(var i = 0; i < 3; i++){
            var iconDiv = document.createElement("div");
            iconDiv.className = 'quarzo-default-menu-icon';
            iconContainer.appendChild(iconDiv);
        }

        return iconContainer;
    }

    createSubMenuResponsive(){
        console.log("XD");
        var widthSubMenu = this.element.widthSubMenu;
        var colorSubMenu = this.element.colorSubMenu;

        const styles = {
            'width': widthSubMenu,
            'backgroundColor': colorSubMenu,
            'marginTop': this.element.height,
        }

        const subMenuContainer = document.createElement("div");
        subMenuContainer.setAttribute('id', 'submenu-container-responsive');
        subMenuContainer.className += "submenu-container-responsive";

        this.setStyle(subMenuContainer, styles);
        this.setPagesLinks(subMenuContainer);
    }
}