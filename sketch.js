
function setup(one) {
	createCanvas(windowWidth, windowHeight)
	background(100)
	
	// The big gray rect
	fill(209)
	rect(500, 30, 350, 250)
	fill('white')
     //The window frame
    rect(518, 47, 315, 215)

	
	line(833, 262, 850, 280)
	line(500, 30, 518, 47)
	line(850, 30, 833, 47)

	fill('rgb(240,248,255)')
	// Top window
    rect(533, 58, 285, 40)
    // Left window
    rect(533, 108, 100, 143)
    // Right window
	rect(650, 108, 167, 143)
	// Green building
	fill('rgb(154,205,50)')
	rect(533, 150, 70, 100)
	fill('rgb(0,100,0)')
    rect(533, 150, 20, 100)
	rect(583, 150, 20, 100)
	fill('rgb(25,25,112)')
	triangle(568, 170, 555, 190, 580, 190)
	fill('rgb(70,130,180)')
	// Blue building
	rect(670, 135, 120, 116)
	rect(700, 130, 56, 5)
	fill('white')
	circle(783, 320, 25)
	//window lines
	line(690, 135, 690, 250)
	line(710, 135, 710, 250)
	line(730, 135, 730, 250)
	line(750, 135, 750, 250)
	line(770, 135, 770, 250)
	line(670, 165, 790, 165)
	line(670, 195, 790, 195)
	line(670, 225, 790, 225)
	//let w = 10
	//let l = 20
	// Little windows
	
	line(533, 160, 633, 160)
	line(533, 190, 633, 190)
	line(533, 220, 633, 220)
	line(533, 130, 633, 130)
	fill('rgb(222,184,135)')
	rect(500, 260, 180, 100)
	fill('white')
	rect(680, 300, 100, 60)
	rect(680, 300, 100, 20)
	let y = 300
	let y2 = 320
	line(680, y, 682, y2)
	line(690, y, 692, y2)
	line(700, y, 702, y2)
	line(710, y, 712, y2)		
	line(720, y, 722, y2)
	line(730, y, 732, y2)
	line(740, y, 742, y2)		
	line(750, y, 752, y2)
	line(760, y, 762, y2)
	line(770, y, 772, y2)
	line(780, y, 780, 318)
	
	

 
}
function draw(){
	let w = 10
	let l = 20
	let windows = 1*sin(mouseY)
	let windowss = 1*cos(mouseX)
	
	// little windows
	//fill('white')
	fill(200, mouseX%200, mouseY%200)
	rect(695 + windows, 170 + windowss, w, l)
	rect(755 + windows, 140 + windowss, w, l)
	rect(587 + windows, 225 + windowss, w, l)
	fill(700, mouseY%100, mouseX%100)
	rect(695 + windows, 140 + windowss, w, l)
	rect(755 + windows, 200 + windowss, w, l)
	fill(50, mouseX%100, mouseY%200)
	rect(695 + windows, 200 + windowss, w, l)
	fill(500, mouseX%400, mouseY%400)
	rect(695 + windows, 230 + windowss, w, l)
	rect(755 + windows, 170 + windowss, w, l)
	rect(587 + windows, 195 + windowss, w, l)
	fill(100, mouseY%800, mouseX%800)
	rect(587 + windows, 165 + windowss, w, l)
	rect(755 + windows, 230 + windowss, w, l)
  }
  
