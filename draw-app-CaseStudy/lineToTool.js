function LineToTool(){
	this.icon = "assets/lineTo.jpg";
	this.name = "lineto";

	var startMouseX = -1;
	var startMouseY = -1;
	var drawing = false;

	//draws the line to the screen
	this.draw = function(){
		
		//only draw when mouse is clicked
		if(mouseIsPressed){
			//if it's the start of drawing a new line
			if(startMouseX == -1){
				startMouseX = mouseX;
				startMouseY = mouseY;
				drawing = true;
				//save the current pixel Array
				loadPixels();
			}

			else{
				//update the screen with the saved pixels to hide any previous 
				//line between mouse pressed and released
				updatePixels();
				//draw the line
				line(startMouseX, startMouseY, mouseX, mouseY);
			}

		}

		else if(drawing){
			//save the pixels with the most recent line and reset the 
			//drawing bool and start functions
			drawing = false;
			startMouseX = -1;
			startMouseY = -1;
		}
	};


}
