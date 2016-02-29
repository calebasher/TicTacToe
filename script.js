$(document).ready(function(){

	var you;
	var computer;
	var game = function() {
		$('.box').click(function(){
			$(this).html('<p>'+you+'</p>')
		})
	};	

	//modal code

	$('#newGame').click(function(){ 
		$("#myModal").modal();
	})

	$('#chooseX').click(function(){
		$('.box').empty();
		you = "X";
		computer = "O";
		game();
	})

	$('#chooseO').click(function(){
		$('.box').empty();
		you = "O";
		computer = "X";
		game();
	})

});