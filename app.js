Array.prototype.shuffle = function() {
    var s = [];
    while (this.length) s.push(this.splice(Math.random() * this.length, 1));
    while (s.length) this.push(s.pop());
    return this;
}
//preload the images
var picData = [
    ['./img/8x10-untitled-bonin-install-tone.jpg','hello','artist 1'],
    ['./img/8x10-works_decapgrgice-lrg.jpg','t-shirt 2','artist 2'],
    // ['./img/8x19-getin-3.jpg','t-shirt 3','artist 3'],
    // ['./img/8x10-untitled-bonin-install-tone.jpg','t-shirt 4','artist 4'],
    // ['./img/8x10-works_decapgrgice-lrg.jpg','t-shirt 5','artist 5'],
    ['./img/8x19-getin-3.jpg','t-shirt 6','artist 6']];
picO = new Array();
randIndex = new Array();  //array of random indexes
for(i=0; i < picData.length; i++){
    picO[i] = new Image();
    picO[i].src = picData[i][0];
    randIndex.push(i);
}
randIndex.shuffle();
window.onload=function(){
    var mainImgs = document.getElementById('main_image').getElementsByTagName('img');
    var otherImgs = document.getElementById('other_image').getElementsByTagName('img');
    var tshirtDivs = getElementsByClassName(document, 'div', 'tshirtName');
    var artistDivs = getElementsByClassName(document, 'div', 'artistName');
    //assign the main image data
    for(i=0; i < mainImgs.length; i++){
        mainImgs[i].src = picO[randIndex[i]].src; //assign a random image
        tshirtDivs[i].innerHTML = picData[randIndex[i]][1];
        artistDivs[i].innerHTML = picData[randIndex[i]][2];
    }
    //assign the other image data
    for(i=mainImgs.length; i < otherImgs.length+mainImgs.length; i++){
        otherImgs[i-mainImgs.length].src = picO[randIndex[i]].src;
        tshirtDivs[i].innerHTML = picData[randIndex[i]][1];
        artistDivs[i].innerHTML = picData[randIndex[i]][2];
    }
}
//-------------------------------------------------------------------------
function getElementsByClassName(oElm, strTagName, strClassName){
    var arrElements = (strTagName == "*" && oElm.all)? oElm.all : oElm.getElementsByTagName(strTagName);
    var arrReturnElements = new Array();
    strClassName = strClassName.replace(/\-/g, "\\-");
    var oRegExp = new RegExp("(^|\\s)" + strClassName + "(\\s|$)");
    var oElement;
    for(var i=0; i<arrElements.length; i++){
        oElement = arrElements[i];
        if(oRegExp.test(oElement.className)){
            arrReturnElements.push(oElement);
        }
    }
    return (arrReturnElements)
}