import Element from './Element';

export default class Row extends Element{
    constructor(elements){
        super();
        this.elements = elements;
    }

    pushElements(container){
        for(var i = 0; i < this.elements.length; i++){
            this.elements[i].content.style.gridArea = this.elements[i].area;

            container.appendChild(this.elements[i].content);
        }
    }
}   