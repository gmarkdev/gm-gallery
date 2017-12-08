/*
	GMark Gallery

	Version 0.1
	Author GMark
	Date of version: 21.11.2017
*/



var size = 0;
var counter = 0;


//START
$(function() {

	size = $('div#gm-gallery > img').length;

	$('div#gm-gallery > img').each(function(i, obj) {
		$(obj).attr('gm-iterate', i);
		initIcon(obj);
	});

	$('div#gm-gallery > img').click(function() {
		counter = $(this).attr('gm-iterate');
		generateOpen(this);
	});

	//ARROWS KEY
	$(document).keydown(function(e) {
		console.log(2);
		if(e.keyCode == 39) {
			next();
		}
		if(e.which == 37) {
			prev();
		}
	});
});


function initIcon(obj) {
	//ICON
	var iconSize = $(obj).attr('gm-icon-size');

	var checkIconSizePercent = iconSize.substr(-1);

	if(checkIconSizePercent == '%') {
		$(obj).attr('width', iconSize + '%')

	}
	else {
		$(obj).addClass('iconSize' + iconSize);
	}
}

function generateOpen(obj) {

	//OPEN IMG
	var src = $(obj).attr('src');
	var openSize = $(obj).attr('gm-open-size');

	var checkOpenSizePercent = openSize.substr(-1);
	var openSizePercent = '';

	if(checkOpenSizePercent == '%') {
		openSizePercent = 'width="' + openSize + '"';
		openSize = '';
	}
	else {
		openSize = 'openSize' + openSize;
	}

	var bg = $(obj).attr('gm-bg');


	var buttons = '<div id="next"><div>></div></div><div id="prev"><div><</div></div>';
	var create = '<div id="gm-parent">' + buttons + '<div id="gm-gallery-bg" class="' + bg + '"><div><div><img src="' + src + '" class="' + openSize + '" ' + openSizePercent + '></div></div></div></div>';

	$('div#gm-gallery').append(create);

	$('div#gm-parent').show();

	if(bg == 'dark') {
		$('div#prev, div#next').addClass('light-arrows');
	}
	else {
		$('div#prev, div#next').addClass('dark-arrows');
	}


	//NEXT BTN
	$('div#next').click(function() {
		next();
	});

	//PREV BTN
	$('div#prev').click(function() {
		prev();
	});

	//HIDE ARROWS
	var gallery = $('div#gm-gallery');

	if(gallery.attr('gm-arrows') != 'true') {
		$('div#next, div#prev').hide();
	}

	generateClose();
}

function next() {
	$('div#gm-parent').remove();

	counter++;

	if(counter >= size) {
		counter = 0;
	}

	generateOpen($('div#gm-gallery > img[gm-iterate=' + counter + ']'));
}

function prev() {
	$('div#gm-parent').remove();;

	counter--;

	if(counter < 0) {
		counter = size-1;
	}

	generateOpen($('div#gm-gallery > img[gm-iterate=' + counter + ']'));
}

function generateClose() {
	$('div#gm-gallery-bg').click(function() {
		$('div#gm-parent').remove();
	});

}