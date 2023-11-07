function CurveTool(){
	this.icon = "assets/curve.jpg";
	this.name = "curve";

	var startMouseX = -1;
	var startMouseY = -1;
	var drawing = false;

	var curveMode;
	var midpointX;
	var midpointY;

	var quarterX;
	var quarterY;

	var threequarterX;
	var threequarterY;

	var endX;
	var endY;

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
				this.drawline();
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

	this.drawline = function()
	{
		if(curveMode == 0)
		{

			midpointX = (mouseX-startMouseX)/2 + startMouseX;
			midpointY = (mouseY-startMouseY)/2 + startMouseY;

			quarterX = (mouseX-startMouseX)/4 + startMouseX;
			quarterY = (mouseY-startMouseY)/4 + startMouseY;

			threequarterX = 3*(mouseX-startMouseX)/4 + startMouseX;
			threequarterY = 3*(mouseY-startMouseY)/4 + startMouseY;

			line(startMouseX,startMouseY,mouseX,mouseY);
			ellipse(startMouseX,startMouseY,5);
			ellipse(quarterX, quarterY,5);
			ellipse(threequarterX, threequarterY,5);
			ellipse(mouseX, mouseY,5);
			
			endX = mouseX;
			endY = mouseY;
			
		}
		else if (curveMode == 1)
		{
			quarterX = mouseX;
			quarterY = mouseY;

			push();
			fill();
			ellipse(quarterX, quarterY,5);
			
			bezier(startMouseX,startMouseY,
					quarterX, quarterY,
					threequarterX, threequarterY,
					endX, endY);

			pop();
		}
	}

	this.unselectTool = function() {		
		updatePixels();

		//clear options
		select(".options").html("");

		if(!curveMode == 0)
		{
			//warn user curve tool will be exited if the process is not complete
			alert("Exit Curve Tool!");
			//revert selectMode to 0, image will not be paste when selecting other function
			curveMode = 0;
		}
	};

	this.populateOptions = function() {
		
		curveMode = 0;

		select(".options").html(
			"<button id='curveModeButton'>Adjust Point</button>");
		//click handler
		select("#curveModeButton").mousePressed(function() {
			var curveButton = select("#" + this.elt.id);
			if (curveMode == 0) 
            {
                curveMode += 1;
				curveButton.html('Finish');
				
			} 
            else if(curveMode == 1)
            {
                curveMode = 0;
				loadPixels();
                curveButton.html('Adjust Point');
			}

		});
	};
	


}
