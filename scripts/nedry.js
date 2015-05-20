

$.fn.wrongAnswer = function(){

// $('submitButton').submit(function(e){
// 		e.preventDefault();

	
	this.on('submit', function(e){
		e.preventDefault();

			
	var input= $(this).find('input[type=search]')

      	if 	(input.text() ==''){

      		console.log('no info')
      	};

		
	})  
      


};




 // function play(){
 //       var audio = document.getElementById("audio");
 //       audio.play();
 //                 }


 // .alertSound.play('audio.src')