function RectangleTool(){
	this.icon = "assets/rectangle.jpg";
	this.name = "rectangle";

    var previousMouseX = -1;
    var previousMouseY = -1;
    var firstMouseX = -1;
    var firstMouseY = -1;

	this.draw = function(){
        // console.log("draw a rect");
            
            //only draw when mouse is clicked
            if(mouseIsPressed){
                //if it's the start of drawing a rect 
                if(previousMouseX == -1){
                    previousMouseX = mouseX;
                    previousMouseY = mouseY;
                    firstMouseX = mouseX;
                    firstMouseY = mouseY;
                }

                else{
                    //erase old rect and redraw
                    updatePixels();
                    var rectLength = (mouseX - firstMouseX);
                    var rectWidth = (mouseY - firstMouseY);

                    push();
                    noStroke();
                    rect(firstMouseX, firstMouseY, rectLength, rectWidth);
                    previousMouseX = mouseX;
                    previousMouseY = mouseY;
                    pop();
                }
            }

            //if the user has released the mouse , set the previousMouse values back to -1
            else{
                previousMouseX = -1;
                previousMouseY = -1;
                loadPixels();
            }
    }
}
