let x_position = 0
let y_position = 0 
let x_direction = "right"
let y_direction = "down"
let speed = 30
let diameter = 30
let angle = 0 

//Command option f = find and replace


function setup() {

	createCanvas(640, 480)
	x_position = random(0, width)
	y_position = random(0, height)

}

function draw() {
	// draw executes 30 frames per second 

	//background(255)

	
	//translate(x_position, y_position)

	strokeWeight(1.5)
	stroke(2)
	ellipse(x_position, y_position, diameter, diameter)
	// arc(x_position, y_position, diameter, diameter, angle, angle+1, PIE)
	// angle += 10

	push()

	fill(random(0, 255), random(0, 255), random(0, 255))
	ellipse(x_position, y_position, diameter, diameter/2.5)
	//fill(random(0, 255), random(0, 255), random(0, 255))
	fill(237, 255, 33)
	ellipse(x_position, y_position, diameter/3, diameter/3)
	//fill(0)
	ellipse(x_position, y_position, diameter/5, diameter/5)
	pop()

		//movement 
		if (x_direction == "right") {
			x_position = x_position + speed
		}

		if (x_direction == "left") {
			x_position = x_position - speed 
		}

		if (y_direction == "down") {
			y_position += speed
		}

		if(y_direction == "up") {
			y_position -= speed
		}

		//right wall
		if (x_position >= width - diameter/2) {
			x_direction = "left"
			stroke(random(0, 255), random(0, 255), random(0, 255))
			fill(random(0, 255), random(0, 255), random(0, 255))

		}

		//left wall
		if (x_position <= 0 + diameter/2) {
			x_direction = "right"
			stroke(random(0, 255), random(0, 255), random(0, 255))
			fill(random(0, 255), random(0, 255), random(0, 255))

		}

		//bottom wall
		if (y_position >= height - diameter/2) {
			y_direction = "up"
			stroke(random(0, 255), random(0, 255), random(0, 255))
			fill(random(0, 255), random(0, 255), random(0, 255))

		}

		//top wall
		if (y_position <= 0 + diameter/2) {
			y_direction = "down"
			stroke(random(0, 255), random(0, 255), random(0, 255))
			fill(random(0, 255), random(0, 255), random(0, 255))
		}

		push()
		strokeWeight(5)
		noFill()
		rect(0, 0, width, height)
		pop()

		
		}


