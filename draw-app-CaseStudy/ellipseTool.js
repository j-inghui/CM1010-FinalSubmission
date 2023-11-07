function EllipseTool(){

    this.icon = "assets/ellipse.jpg";
	this.name = "ellipse";

    var previousMouseX = -1;
    var previousMouseY = -1;
    var firstMouseX = -1;
    var firstMouseY = -1;

    this.draw = function(){
        // console.log("draw an ellipse");

        //only draw when mouse is clicked
        if(mouseIsPressed){
            //if it's the start of drawing an ellipse 
            if(previousMouseX == -1){
                previousMouseX = mouseX;
                previousMouseY = mouseY;
                firstMouseX = mouseX;
                firstMouseY = mouseY;
            }

            else{
                //erase old ellipse and redraw
                updatePixels();
                var ellipseLength = (mouseX - firstMouseX);
                var ellipseWidth = (mouseY - firstMouseY);
                
                push();
                noStroke();
                ellipseMode(CORNER);
                ellipse(firstMouseX, firstMouseY, ellipseLength, ellipseWidth);
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
    };
        
}