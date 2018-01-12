function getArea(array){
    var lato1 = array[0];
    var lato2 = array[1];

    var area = 0;

    if(Number.isInteger(lato1) && Number.isInteger(lato2) && lato1 >= 0 && lato2 >=0){
        area = lato1 * lato2;
    }else{
        area = -1;
    }

    return area;
}

module.exports = getArea;