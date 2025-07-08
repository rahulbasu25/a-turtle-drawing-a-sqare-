input.onButtonPressed(Button.A, function () {
    for (let index = 0; index <= 4; index++) {
        turtle.forward(2)
        turtle.turnRight()
        turtle.pen(TurtlePenMode.Down)
    }
})
basic.forever(function () {
	
})
