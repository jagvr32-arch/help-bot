input.onButtonPressed(Button.A, function () {
    Bearing = input.compassHeading()
    if (Bearing < 45 || Bearing > 315) {
        basic.showLeds(`
            # . . . #
            # # . . #
            # . # . #
            # . . # #
            # . . . #
            `)
    } else if (Bearing < 135) {
        basic.showLeds(`
            # # # # #
            # . . . .
            # # # . .
            # . . . .
            # # # # #
            `)
    } else if (Bearing < 225) {
        basic.showLeds(`
            # # # # #
            # . . . .
            # # # # #
            . . . . #
            # # # # #
            `)
    } else if (false) {
    	
    } else {
        basic.showLeds(`
            # . . . #
            # . . . #
            # . # . #
            # # . # #
            # . . . #
            `)
    }
})
input.onGesture(Gesture.ScreenDown, function () {
    music.play(music.builtinPlayableSoundEffect(soundExpression.yawn), music.PlaybackMode.UntilDone)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . #
        # # # # #
        # . . . #
        `)
    basic.showLeds(`
        # # # # #
        . . . # .
        . . # . .
        . # . . .
        # # # # #
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . #
        # # # # #
        # . . . #
        `)
    basic.showLeds(`
        # # # # #
        . . . # .
        . . # . .
        . # . . .
        # # # # #
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . #
        # # # # #
        # . . . #
        `)
    basic.showLeds(`
        # # # # #
        . . . # .
        . . # . .
        . # . . .
        # # # # #
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . #
        # # # # #
        # . . . #
        `)
})
input.onButtonPressed(Button.B, function () {
    music.play(music.stringPlayable("C5 - C5 - C5 - C5 C5 ", 200), music.PlaybackMode.UntilDone)
    music.play(music.stringPlayable("C5 - C5 C5 C5 - C5 C5 ", 200), music.PlaybackMode.UntilDone)
    music.play(music.stringPlayable("C5 - C5 C5 C5 - C5 - ", 200), music.PlaybackMode.UntilDone)
    music.play(music.stringPlayable("C5 - C5 - C5 - - - ", 200), music.PlaybackMode.UntilDone)
    music.play(music.stringPlayable("C5 - C5 - C5 - C5 C5 ", 200), music.PlaybackMode.UntilDone)
    music.play(music.stringPlayable("C5 - C5 C5 C5 - C5 C5 ", 200), music.PlaybackMode.UntilDone)
    music.play(music.stringPlayable("C5 - C5 C5 C5 - C5 - ", 200), music.PlaybackMode.UntilDone)
    music.play(music.stringPlayable("C5 - C5 - C5 - - - ", 200), music.PlaybackMode.UntilDone)
    basic.showLeds(`
        # # # # #
        . . . . #
        # # # # #
        # . . . .
        # # # # #
        `)
    basic.showLeds(`
        # # # # #
        # . . . #
        # . . . #
        # . . . #
        # # # # #
        `)
    basic.showLeds(`
        # # # # #
        . . . . #
        # # # # #
        # . . . .
        # # # # #
        `)
    basic.showLeds(`
        . . # . .
        . . # . .
        . . # . .
        . . . . .
        . . # . .
        `)
    music.play(music.stringPlayable("C5 - C5 - C5 - C5 C5 ", 200), music.PlaybackMode.UntilDone)
    music.play(music.stringPlayable("C5 - C5 C5 C5 - C5 C5 ", 200), music.PlaybackMode.UntilDone)
    music.play(music.stringPlayable("C5 - C5 C5 C5 - C5 - ", 200), music.PlaybackMode.UntilDone)
    music.play(music.stringPlayable("C5 - C5 - C5 - - - ", 200), music.PlaybackMode.UntilDone)
})
input.onGesture(Gesture.LogoDown, function () {
    basic.showLeds(`
        . . . . .
        . # . # .
        # . . . #
        . # # # .
        . . . . .
        `)
    basic.showLeds(`
        . # . # .
        . . . . #
        # . . # .
        . . # . .
        . # . . .
        `)
    basic.showLeds(`
        . . # . .
        . # . # .
        . . . # .
        . # . # .
        . . # . .
        `)
    basic.showLeds(`
        . . . . .
        . # # . .
        . . . # .
        # . . # .
        . . # . .
        `)
    basic.showLeds(`
        . . . . .
        . # # # .
        # . . . #
        . # . # .
        . . . . .
        `)
})
let Bearing = 0
music.setVolume(255)
led.setBrightness(255)
basic.showString("Help bot V2 ")
music.play(music.stringPlayable("D C5 E F A E A F ", 156), music.PlaybackMode.InBackground)
basic.showIcon(IconNames.Diamond)
basic.showIcon(IconNames.SmallDiamond)
basic.showLeds(`
    . . . . .
    . . . . .
    . . # . .
    . . . . .
    . . . . .
    `)
basic.showIcon(IconNames.SmallDiamond)
basic.showIcon(IconNames.Diamond)
basic.showLeds(`
    # . # . #
    . # . # .
    # . # . #
    . # . # .
    # . # . #
    `)
music.play(music.stringPlayable("E F C5 C5 G E F G ", 156), music.PlaybackMode.InBackground)
basic.showString("loading complete")
music.play(music.builtinPlayableSoundEffect(soundExpression.giggle), music.PlaybackMode.UntilDone)
basic.showString("Hello! please press the A button for the compass or B for sos A + B TO CALIBRATE")
basic.forever(function () {
	
})
