$(document).ready(function(){

	var yourIcon;
	var computerIcon;
	var yourTurn;
	var computerChoice;
	var won=0;
	var lost =0;
	var tied = 0;
	var moves = 0;
	var winnerFound = false;

	function updateScore(){
		$('#won').html("Won: "+won);
		$('#lost').html("Lost: "+lost);
		$('#tied').html("Tied: "+tied);
	}

	function whoStarts() {
		var number = Math.random();
		number > 0.5 ? yourTurn = true : yourTurn = false;
	}

	function startGame() {
		if (yourTurn !== true) {	
			computerGoes();
		}
	}

    $('.box').click(function(){
    	if ($(this).is(':empty')) {
	    	if (yourIcon !== undefined && $('#status').is(':empty') && winnerFound !== true) {
	    		$.playSound("http://www.freesfx.co.uk/rx2/mp3s/6/6715_1342441037");
		        $(this).html('<p>'+yourIcon+'</p>');
		        moves ++; 
		        checkForWinner(yourIcon);
		        computerGoes();
		    }
		}    
    })        

    function computerGoes(){

    	if (winnerFound !== true) {
	            computerChoice =  Math.floor((Math.random() * 9) + 1);
	            if ($('#box'+computerChoice+'').is(':empty')) {
	                $('#box'+computerChoice+'').html('<p>'+computerIcon+'</p>');
	                moves ++;
	                checkForWinner(computerIcon);   
	            }
	            else if ($('#box'+computerChoice+'').is(':empty') === false && moves == 9) {            
	                checkForWinner(yourIcon);
	            }  
	            else if ($('#box'+computerChoice+'').is(':empty') === false) {            
	                computerGoes();
	            }   
	    }                            
    }

    function flash(){
    	$('#box'+winningArray[i][0]+' p').effect("pulsate", { times:3 }, 2000);
		$('#box'+winningArray[i][1]+' p').effect("pulsate", { times:3 }, 2000);
		$('#box'+winningArray[i][2]+' p').effect("pulsate", { times:3 }, 2000);
    }

    function checkForWinner(icon) {
		var currentIcon = icon;
		winningArray = [[1,2,3], [4,5,6], [7,8,9], [1,4,7], [2,5,8], [3,6,9], [1,5,9], [3,5,7]];

			for (i=0; i<winningArray.length; i++) {
				if ($('#box'+winningArray[i][0]+'').text() == currentIcon && 
					$('#box'+winningArray[i][1]+'').text() == currentIcon && 
					$('#box'+winningArray[i][2]+'').text() == currentIcon) {

					if (icon == computerIcon) {
						flash();
						$('#status').hide().html('You Lost').fadeIn(2500);
						lost ++;
						updateScore();
						winnerFound = true;
						break;
					}
					else if (icon == yourIcon) {
						flash();
						$('#status').hide().html('You Won!').fadeIn(2500);
						won ++;
						updateScore();
						winnerFound = true;
						break;
					}
				}
				
			}
			if (moves == 9 && winnerFound === false) {
						$('#status').hide().html('It\'s a Tie').fadeIn(2500);
						tied++;
						updateScore();
						winnerFound = true;
					}	
	}

	//modal code

	$('#newGame').click(function(){ 
		$("#myModal").modal();
	})

	$('#chooseX').click(function(){
		$('.box').empty();
		$('#status').empty();
		winnerFound = false;
		yourIcon = "X";
		computerIcon = "O";
		moves = 0;
		whoStarts();
		startGame();	
	})

	$('#chooseO').click(function(){
		$('.box').empty();
		$('#status').empty();
		winnerFound = false;
		yourIcon = "O";
		computerIcon = "X";
		moves = 0;
		whoStarts();
		startGame();	
	})

});