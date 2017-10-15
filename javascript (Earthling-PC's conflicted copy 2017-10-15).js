var $leftButton=$("#leftButton");
var $rightButton=$("#rightButton");
var $titleButton= $('<input type="button" id="titleButton" value=">">');
var $navButtons=$('.navbuttons');
var $slider= $('<div id="slider"><</div>');
var $titlePage=$('.titlePage');
var $coverImage =$('<img src="img/LightyCover-FirstDraft.png"/>');
var $book=$(".book");
var $leftPage=$("<div id='leftPage'></div>");
var $rightPage=$(".rightPage");
var $assetsImages=$("<img class='assetsImages' id='0' src='img/BreadAsset.png' alt='Bread'/><img class='assetsImages' id='1' src='img/CarrotAsset.png' alt='Carrot'/><img class='assetsImages' src='img/ChocolateAsset.png'/><img src='img/GrapesAsset.png'/><img src='img/IcecreamAsset.png'/><img src='img/LollipopAsset.png'/><img src='img/PizzaAsset.png'/>");
var $assets=[];

$book.append($titleButton);
$titlePage.append($coverImage);
$rightPage.hide();
$leftButton.hide();
$rightButton.hide();

$book.on("click",nextPage,false);
$book.on("click",grow,false);

$titleButton.on("click",nextPage);

function nextPage(){
	$titleButton.hide();
	$coverImage.hide();
	$titlePage.css('width','22em').css('height','29em').css('margin-left',"26.5em").css('margin-right',"0");
	appendButtons();
	appendSlider();
	$rightPage.show().css('margin-right','26.75em').css('margin-top','2em');
}

function appendButtons(){
	$leftButton.show();
	$rightButton.show();
}

function appendSlider(){
	$book.append($slider);
}

$slider.on("click",grow);

function grow(){
	var $slider_width=$slider.width();
	if($slider_width<24){
	$slider.css('width','35em');
	putAssets();
	}
	if($slider_width>24){
		$slider.css('width','3em');
	}
}


function putAssets(){
	
	for(i=0;i<$assetsImages.length;i++){
		$assets.push($assetsImages[i]);
	}
	for(i=0;i<$assets.length;i++){
	$slider.append($assets);
	}
}