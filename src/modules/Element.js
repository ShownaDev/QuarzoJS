export default class QuarzoElement{
    setStyle(elem, propertyObject){
        for (var property in propertyObject){
            elem.style[property] = propertyObject[property];
        }
    }

    getElement(objId){
        var element = document.getElementById(objId);
        return element;
    }
}