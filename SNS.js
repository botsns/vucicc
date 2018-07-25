var b = $('.btn');
var b1 = $('.btn1')
var c = 10;
var e = 20;
var hh = $('.hh')


$(function(){

	b.mouseenter(function(){
	if (c == 10) {
		b.css('margin', e)
		 e += 50;

	}
})

b1.on('click', function(){
	$(hh).css('visibility','visible').css('margin-top', '-300px').css('color','white')
})
})