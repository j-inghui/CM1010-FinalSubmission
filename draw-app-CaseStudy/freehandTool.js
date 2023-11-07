function FreehandTool(){

	//set an icon and a name for the object
	this.icon = "assets/freehand.jpg";
	this.name = "freehand";

	var brushSlider;
	
	//The following values store the locations from the last frame.
	//Set previous mouse to -1, as we have yet to start drawing.
	var previousMouseX = -1;
	var previousMouseY = -1;

	//Draw a line from the previous mouse location to the current mouse location. 
	this.draw = function(){
		
		//if the mouse is pressed
		if(mouseIsPressed){

			//check if they previousX and Y are -1. set them to the current
			//mouse X and Y if they are.
			if (previousMouseX == -1){
				previousMouseX = mouseX;
				previousMouseY = mouseY;
			}
			//if we already have values for previousX and Y we can draw a line from 
			//there to the current mouse location
			else{
				
				push();
				//thickness of the line is affected by slider
				strokeWeight(brushSlider.value());
				line(previousMouseX, previousMouseY, mouseX, mouseY);
				pop();

				previousMouseX = mouseX;
				previousMouseY = mouseY;
			}
		}
		//if the user has released the mouse we want to set the previousMouse values 
		//back to -1.
		else{
			previousMouseX = -1;
			previousMouseY = -1;
			loadPixels();
		}
	};

	//when the tool is deselected, clear options
	this.unselectTool = function() {
		
		//clear options
		select(".options").html("");
		updatePixels();
	};

	//adds a slider to the options area
	//When slide thickness of the strokeweight changes
	this.sliderOptions = function() {

		var brushSizeSlider = select(".options");

		select(".options").html(
			"Brush size :");
		brushSlider = createSlider(1, 50,5);
		brushSlider.parent(brushSizeSlider);

	}
}