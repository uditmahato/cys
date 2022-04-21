

$(function(){
	let start=0;
	let end=$(".counta").html();
	let speed=10;

	setInterval(function(){
		if(start<end){
			start++;
		}
		$(".counta").html(start);
	},speed);

});

$(function(){
	let start=0;
	let end=$(".countb").html();
	let speed=20;

	setInterval(function(){
		if(start<end){
			start++;
		}
		$(".countb").html(start);
	},speed);

});

$(function(){
	let start=0;
	let end=$(".countc").html();
	let speed=50;

	setInterval(function(){
		if(start<end){
			start++;
		}
		$(".countc").html(start);
	},speed);

});

$(function(){
	let start=0;
	let end=$(".countd").html();
	let speed=125;

	setInterval(function(){
		if(start<end){
			start++;
		}
		$(".countd").html(start);
	},speed);

});