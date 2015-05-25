
	


$.fn.wrongAnswer = function(options){

	var settings = $.extend({
    

  }, options);

	// return this.css({ });

	
	var element = $(this);
	element.find('input[type=submit]').on('click', function(e){
		e.preventDefault();
		// Prevent the default function



			
	var input = $("#ahAhah").val();
	// create variable to hold value entered into the input 
	// Target this field's Id.
	console.log("Input is equal to:" + input);

      	if 	(input == ''){

      		// This "set's it off." if there is nothing
      		// entered into the input field of the form the audio file will play

      		// console.log("Input.text is equal to:" + input);
      			
			
		
	

			element.append('<audio src="assets/nedry.mp3" id="nedry"></audio><img src="assets/newman.gif" class="theGuy" id="dnedry"/>');
  			
  			// append the mp3 file and moving gif into the html via java script.
  			// Use ID of "nedry" for the mp3 file and ID of theGuy for the gif file.
  			

    		$('#nedry')[0].play()
    			// This makes the audio file play

   			$('.theGuy').fadeIn('slow').delay(2000).fadeOut(1500);
   				// This makes the gif fade in and out.


// console.log('no info');

			
		

      	};  // End of if statement

     
		
	})   // End of element.find on.click function    

};    // end of fn.WrongAnswer









      		
      			