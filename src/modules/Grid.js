import Element from './Element';
import Row from './Row';

export default class Grid extends Element{
    constructor(container, element, areas){
        super();
        this.container = container;
        this.element = element;
        this.areas = areas;
        this.createGrid();
    }

    createGrid(){
        this.container.style.display = 'grid';

        for(var i = 0; i < 12; i++){
            if(i == 0){
                this.container.style.gridTemplateColumns = '1fr';
            } else {
                this.container.style.gridTemplateColumns += ' 1fr';
            }
        }
    }

    createRow(elements){

        var row = new Row(elements);
        var areaString = "";

        for(var i = 0; i < elements.length; i++){
            for(var j = 0; j < elements[i].numberColumns; j++){
                if(j == 0){
                    areaString += elements[i].area;
                } else if(j == elements[i].numberColumns - 1 && i < elements.length - 1) {
                    areaString += " " + elements[i].area + " ";
                } else {
                    areaString += " " + elements[i].area;
                }
            }
        }

        this.updateAreas(areaString);
        
        row.pushElements(this.container);
    }

    updateAreas(contentString){
        this.areas.push(contentString);
        var areas = this.areas;
        let contentAreas = '';

        areas.forEach((el, index) => {
            if(index == 0){
                contentAreas += `"${el}"`;
                contentAreas += " ";
            } else {
                contentAreas += `"${el}"`;
            }
        });

        this.container.style.gridTemplateAreas = `${contentAreas}`;
    }
}   