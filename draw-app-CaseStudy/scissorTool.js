function ScissorTool(){
	this.icon = "assets/scissors.jpg";
	this.name = "scissor";

    var selectMode;
	
    var selectedArea;
    var selectedPixels;
	

    this.draw = function()
    {
        if(mouseIsPressed)
		{
			
			
		}
		else
		{
			//if the user has released the mouse we want to set the previousMouse values 
			//back to -1.
			previousMouseX = -1;
			previousMouseY = -1;
		}
		
    };

    /*When mousePressed*/
	mousePressed = function() {
		if (selectMode == 0)
        {
            selectedArea.x = mouseX;
            selectedArea.y = mouseY;
        }
        else if (selectMode == 1)
        {
            image(selectedPixels, mouseX, mouseY)
        }
	};

	/*When mouseDragged*/
	mouseDragged = function()
	{
		if (selectMode == 0)
		{
			var w = mouseX - selectedArea.x;
			var h = mouseY - selectedArea.y;

			selectedArea.w = w;
			selectedArea.h = h;

			push();
				updatePixels();
				
				stroke(0,0,0,100);
				noFill();
				rect(selectedArea.x, selectedArea.y, selectedArea.w, selectedArea.h);
				pop();

			console.log(selectedArea);
		}
	};


	//when the tool is deselected, clear options
	//when the tool is deselected and cutting and paste is incomplete, revert drawing.
	this.unselectTool = function() {		
		updatePixels();

		//clear options
		select(".options").html("");

		if(!selectMode == 0)
		{
			//warn user cutting tool will be exited if the process is not complete
			alert("Exit cutting and the changes will not be saved!");
			//revert selectMode to 0, image will not be paste when selecting other function
			selectMode = 0;
		}
	};

	//adds a button and click handler to the options area. When clicked
	//toggles between the different select mode
	this.populateOptions = function() {
		
		selectMode = 0;
		selectedArea = {x: 0, y:0, w:100, h:100};

		select(".options").html(
			"<button id='switchModeButton'>Cut</button>");
		// 	//click handler
		select("#switchModeButton").mousePressed(function() {
			var cutButton = select("#" + this.elt.id);
			if (selectMode == 0) 
            {
                selectMode += 1;
				cutButton.html('Finish');
				
				//refresh the screen
				updatePixels();
				
				//store the pixels
				selectedPixels = get(selectedArea.x, selectedArea.y, selectedArea.w, selectedArea.h);
				
				//draw a rectangle over it
				push();
				fill(255);
				noStroke();
				rect(selectedArea.x, selectedArea.y, selectedArea.w, selectedArea.h);
				pop();
			} 
            else if(selectMode == 1)
            {
                selectMode = 0;
				loadPixels();
            	selectedArea = {x:0, y:0, w:100, h:100};
                cutButton.html('Cut');
			}

		});
	};


}
