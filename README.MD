#Dennis Nedry Alert

a Jurrasic Park Inspired Alert Function

#Usage
"Hold onto your butts...." the Denis Nedry Alert provides an engaging experience for your visitors that acts as both an unmistakable alert function and a classic inside joke for all Jurrasic Park fans.

If the user forgets to fill in a required field and clicks the submit input a sound clip of Denis Nedry will play and a moving gif of the legend himself will appear from the bottom of the screen. Denis Nedry will continue to troll your user until the required input text field has been filled in.

#Getting Started
Simply include nedry.js  in your scripts folder and the nedryAssets folder in your main project folder.

all the main function in your main.js:

```
		$(function(){
				$('form').wrongAnswer();

				}); 

```
Now add a ID of "ahAhah" to the required text input type of your choice in your HTML.

```
input type="text" id="ahAhah" class="password" placeholder="Enter Password" required

```

#How It Works
The plugin can be added to any text input type within a form that has a required attribute. Instead of a alert box appearing telling the user the field is required Denis Nedry will appear and a sound will play once the submit button has been clicked.





