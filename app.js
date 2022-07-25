Array.prototype.shuffle = function() {
    var s = [];
    while (this.length) s.push(this.splice(Math.random() * this.length, 1));
    while (s.length) this.push(s.pop());
    return this;
}
//preload the images
var picData = [
    ['./img/brian-kennon-untitled-bonin-index-1.jpg','Untitled (Bonin)','Inkjet on book page / 11 . 9.25" / 2017'],
    ['./img/8x10-works_decapgrgice-lrg.jpg','Richard Hawkins Decapitated Head (Ben, Ice)','archival inkjet / 48 x 36" / 2007'],
    ['./img/brian-kennon-new-partners-index-1.jpg','Get In','photograph / 17 x 13" / 2011'],
    ['./img/brian-kennon-2nd-cannons-zine-index-1.jpg','2nd Cannons Zine (Matias Faldbakken) ','Zine / 2021'],
    ['./img/brian-kennon-pages-benedict-bonin-index-2.jpg','Pages (Benedict, Bonin) ','Collage / 2018'],
    ['./img/brian-kennon-with-trockel-index-1.jpg','With Rosemarie Trockel','Collage / 2021'],
    ['./img/brian-kennon-with-wool-index-1.jpg', 'With Christopher Wool','Collage / 2019']];
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
    var tshirtDivs = getElementsByClassName(document, 'div', 'imageTitle');
    var artistDivs = getElementsByClassName(document, 'div', 'description');
    //assign the main image data
    for(i=0; i < mainImgs.length; i++){
        mainImgs[i].src = picO[randIndex[i]].src; //assign a random image
        tshirtDivs[i].innerHTML = picData[randIndex[i]][1];
        artistDivs[i].innerHTML = picData[randIndex[i]][2];
    }
    //assign the other image data
    for(i=mainImgs.length; i < mainImgs.length; i++){
        [i-mainImgs.length].src = picO[randIndex[i]].src;
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