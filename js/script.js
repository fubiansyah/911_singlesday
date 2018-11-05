$( document ).ready(function() {

var imgc = 0;


var images = [
    "images/sequence/00.png",
    "images/sequence/01.png",
    "images/sequence/02.png",
    "images/sequence/03.png",
    "images/sequence/04.png",
    "images/sequence/05.png",
    "images/sequence/06.png",
    "images/sequence/07.png",
    "images/sequence/08.png",
    "images/sequence/09.png",
    "images/sequence/10.png",
    "images/sequence/11.png",
    "images/sequence/12.png",
    "images/sequence/13.png",
    "images/sequence/14.png",
    "images/sequence/15.png",
    "images/sequence/16.png",
    "images/sequence/17.png",
    "images/sequence/18.png",
    "images/sequence/19.png",
    "images/sequence/20.png",
    "images/sequence/21.png",
    "images/sequence/22.png",
    "images/sequence/23.png",
    "images/sequence/24.png",
    "images/sequence/25.png",
    "images/sequence/26.png",
    "images/sequence/27.png",
    "images/sequence/28.png",
    "images/sequence/29.png",
    "images/sequence/30.png",
    "images/sequence/31.png",
    "images/sequence/32.png",
    ];

$(".sequence").html("<img src='" +images[0] +"'>").show();

var doclick = false;
$( '#triger-hover' ).hover( function()
{
    if ( ! doclick ) {
        setTimeout(setImage, 1000);
        doclick = true;
    }
});


var index = 1;
var count = images.length;
function setImage()
{
    var next=new Image()
    images.push(images.shift())
    next.onload=function(){
        $(".sequence img").attr("src", this.src)
    }
    next.src= images[0];

    index++;
    if ( index < count ) {
        setTimeout(setImage, 80);
    }

};

});
