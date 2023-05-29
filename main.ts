let x = 0
let y = 0
let speed = 0
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    x = 0
    y = 0
    speed = 500
    while (!(input.buttonIsPressed(Button.AB))) {
        if (x != 4 && y == 0) {
            x += 1
            led.plot(x, y)
            music.playTone(262, music.beat(BeatFraction.Sixteenth))
            basic.pause(speed)
            basic.clearScreen()
        }
        if (x == 4 && y != 4) {
            y += 1
            led.plot(x, y)
            music.playTone(262, music.beat(BeatFraction.Sixteenth))
            basic.pause(speed)
            basic.clearScreen()
        }
        if (x != 0 && y == 4) {
            x += -1
            led.plot(x, y)
            music.playTone(262, music.beat(BeatFraction.Sixteenth))
            basic.pause(speed)
            basic.clearScreen()
        }
        if (x == 0 && y != 0) {
            y += -1
            led.plot(x, y)
            music.playTone(262, music.beat(BeatFraction.Sixteenth))
            basic.pause(speed)
            basic.clearScreen()
        }
    }
})
input.onButtonPressed(Button.A, function () {
    speed += -50
})
input.onButtonPressed(Button.B, function () {
    speed += 10
})
