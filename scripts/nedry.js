
	


$.fn.wrongAnswer = function(){

	

	$("#submit").on('click', function(e){
		e.preventDefault();
		// Prevent the default function


var nedryImageMarkup = '<img id="dNedry" style="display: none" src="images/nedryLarge.png" />'
			
	var input = $("#searchAudio").val();
	// create variable to hold value entered into the input 

	console.log("Input is equal to:" + input);

      	if 	(input == ''){

      		// This "set's it off." if there is nothing
      		// entered into the input field the audio file will play

      		// console.log("Input.text is equal to:" + input);
      			
      		var audio = $('#nedry')[0];
			audio.play()
			// This will play the audio and is connected to the
			// ID of the audio file in your HTML
      	
      	// ********************************************************
      	// Image
      	
    // Animation complete
    $('.theGuy').fadeIn('slow', function(){
    	('.theGuy').delay(5000).fadeOut('slow');
    });





// console.log('no info');

			
		

      	};  // End of if statement

     
		
	})   // End of this.on('submit')
     

};    // end of fn.WrongAnswer









      		
      			