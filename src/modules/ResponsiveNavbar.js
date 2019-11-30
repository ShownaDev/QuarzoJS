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

        const styles = {
            'position': fixedOrNot,
            'backgroundColor': this.element.color,
            'height' : this.element.height
        }

        this.setStyle(navbarContainer, styles);
        this.setPagesLinks(navbarContainer);

        navbarContainer.className = 'quarzo-responsive-navbar';
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
}