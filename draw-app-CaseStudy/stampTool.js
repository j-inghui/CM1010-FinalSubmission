function StampTool (){
    //set an icon and a name for the object
	this.icon = "assets/stamp.jpg";
	this.name = "stamp";

	this.draw = function(){
		console.log("stamp here");

        if(mouseIsPressed){
            console.log(mouseY);
            //to prevent out of the canvas click
            if(mouseX>30 && mouseY<490){
                updatePixels();
                if(fillMode=="fill"){
                    // updatePixels();
                    drawStampFill(mouseX,mouseY);
                }                    
                else{
                    drawStampNoFill(mouseX,mouseY);
                }
            }
		}
		else{
            loadPixels();
		}
	};
    
    var drawStampNoFill = function(mx,my){
        
        push();
        
        translate(mx,my);     
        strokeWeight(1);
        fill(255);
        ellipseMode(CENTER);

        var duck_x = 45;
        var duck_y = 137;
        
        //legs
        rect(duck_x-7.5,duck_y - 15, 5,10)
        rect(duck_x+2.5,duck_y - 15, 5,10)
        
        //body
        ellipse(duck_x, duck_y - 25,35,30);
        ellipse(duck_x, duck_y - 45,30);
        
        arc(duck_x-10,duck_y-25,15,20,PI/4, PI + PI/4);
        arc(duck_x+10,duck_y-25,15,20,TWO_PI - PI/4, PI - PI/4);
        
        //feet
        arc(duck_x-5, duck_y -5,10,10,PI, TWO_PI);
        arc(duck_x+5, duck_y -5,10,10,PI, TWO_PI);
        
        //mouth
        ellipse(duck_x, duck_y -40,15, 10);
        arc(duck_x,duck_y-40,13,8,0, PI)
        
        //eyes
        ellipse(duck_x-5, duck_y -50,5);
        ellipse(duck_x+5, duck_y -50,5);
        pop();
    };

    var drawStampFill = function(mx,my){
        
        push();
        translate(mx,my);
        var duck_x = 45;
        var duck_y = 137;
        strokeWeight(1);
        stroke(0);
        ellipseMode(CENTER);
        
        //legs
        rect(duck_x-7.5,duck_y - 15, 5,10)
        rect(duck_x+2.5,duck_y - 15, 5,10)
        
        //body
        ellipse(duck_x, duck_y - 25,35,30);
        ellipse(duck_x, duck_y - 45,30);
        arc(duck_x-10,duck_y-25,15,20,PI/4, PI + PI/4);
        arc(duck_x+10,duck_y-25,15,20,TWO_PI - PI/4, PI - PI/4);
        
        //feet
        arc(duck_x-5, duck_y -5,10,10,PI, TWO_PI);
        arc(duck_x+5, duck_y -5,10,10,PI, TWO_PI);
        
        //mouth
        ellipse(duck_x, duck_y -40,15, 10);
        arc(duck_x,duck_y-40,13,8,0, PI)
        
        //eyes
        ellipse(duck_x-5, duck_y -50,5);
        ellipse(duck_x+5, duck_y -50,5);
        fill(0);

        pop();
    };
    
    
    
    //when the tool is deselected update the pixels to just show the drawing. Also clear options
	this.unselectTool = function() {
		updatePixels();
		//clear options
		select(".options").html("");

        if(fillMode == "nofill")
		{
			//warn user cutting tool will be exited if the process is not complete
			alert("Change back to fill mode");
			//revert selectMode to 0, image will not be paste when selecting other function
			fillMode = "fill";
		}
		
	};

	//adds a button and click handler to the options area. When clicked
	//toggle between fill and no fill
	this.populateOptions = function() {
        
        fillMode = "fill";

		select(".options").html(
			"<button id='fillButton'>No Fill</button>");
		//click handler
		select("#fillButton").mouseClicked(function() {
			var button = select("#" + this.elt.id);
			if (fillMode == "fill") {
				fillMode = "nofill";
				button.html('Fill');
			} else {
				fillMode = "fill";
				button.html('No Fill');
			}
		});
	};



}