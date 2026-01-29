def on_button_pressed_a():
    global Bearing
    Bearing = input.compass_heading()
    if Bearing < 45 or Bearing > 315:
        basic.show_leds("""
            # . . . #
            # # . . #
            # . # . #
            # . . # #
            # . . . #
            """)
    elif Bearing < 135:
        basic.show_leds("""
            # # # # #
            # . . . .
            # # # . .
            # . . . .
            # # # # #
            """)
    elif Bearing < 225:
        basic.show_leds("""
            # # # # #
            # . . . .
            # # # # #
            . . . . #
            # # # # #
            """)
    else:
        basic.show_leds("""
            # . . . #
            # . . . #
            # . # . #
            # # . # #
            # . . . #
            """)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_ab():
    music.play(music.string_playable("C5 B C5 B C5 B C5 B ", 1250),
        music.PlaybackMode.UNTIL_DONE)
    music.play(music.string_playable("C5 B A G F E D C ", 120),
        music.PlaybackMode.UNTIL_DONE)
    music.play(music.string_playable("C D E F G A B C5 ", 120),
        music.PlaybackMode.UNTIL_DONE)
    music.play(music.string_playable("C5 C C5 C C5 C C5 C ", 120),
        music.PlaybackMode.UNTIL_DONE)
    basic.show_leds("""
        . # . # .
        . . # . .
        . . # . .
        # . . . #
        . # # # .
        """)
    basic.show_string("Test complete")
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    music.play(music.string_playable("C5 - C5 - C5 - C5 C5 ", 200),
        music.PlaybackMode.UNTIL_DONE)
    music.play(music.string_playable("C5 - C5 C5 C5 - C5 C5 ", 200),
        music.PlaybackMode.UNTIL_DONE)
    music.play(music.string_playable("C5 - C5 C5 C5 - C5 - ", 200),
        music.PlaybackMode.UNTIL_DONE)
    music.play(music.string_playable("C5 - C5 - C5 - - - ", 200),
        music.PlaybackMode.UNTIL_DONE)
    music.play(music.string_playable("C5 - C5 - C5 - C5 C5 ", 200),
        music.PlaybackMode.UNTIL_DONE)
    music.play(music.string_playable("C5 - C5 C5 C5 - C5 C5 ", 200),
        music.PlaybackMode.UNTIL_DONE)
    music.play(music.string_playable("C5 - C5 C5 C5 - C5 - ", 200),
        music.PlaybackMode.UNTIL_DONE)
    music.play(music.string_playable("C5 - C5 - C5 - - - ", 200),
        music.PlaybackMode.UNTIL_DONE)
    basic.show_leds("""
        # # # # #
        . . . . #
        # # # # #
        # . . . .
        # # # # #
        """)
    basic.show_leds("""
        # # # # #
        # . . . #
        # . . . #
        # . . . #
        # # # # #
        """)
    basic.show_leds("""
        # # # # #
        . . . . #
        # # # # #
        # . . . .
        # # # # #
        """)
    basic.show_leds("""
        . . # . .
        . . # . .
        . . # . .
        . . . . .
        . . # . .
        """)
    music.play(music.string_playable("C5 - C5 - C5 - C5 C5 ", 200),
        music.PlaybackMode.UNTIL_DONE)
    music.play(music.string_playable("C5 - C5 C5 C5 - C5 C5 ", 200),
        music.PlaybackMode.UNTIL_DONE)
    music.play(music.string_playable("C5 - C5 C5 C5 - C5 - ", 200),
        music.PlaybackMode.UNTIL_DONE)
    music.play(music.string_playable("C5 - C5 - C5 - - - ", 200),
        music.PlaybackMode.UNTIL_DONE)
input.on_button_pressed(Button.B, on_button_pressed_b)

Bearing = 0
music.set_volume(255)
led.set_brightness(255)
basic.show_string("loading please wait...")
music.play(music.string_playable("D C5 E F A E A F ", 156),
    music.PlaybackMode.IN_BACKGROUND)
basic.show_leds("""
    . # . . .
    . . # . .
    . . . # .
    . # # # .
    . . . . .
    """)
basic.show_leds("""
    . . # . .
    . . # . .
    . . . # .
    . # # # .
    . . . . .
    """)
basic.show_leds("""
    . . . . .
    . . # . .
    . . # # .
    . # # # .
    . . . . .
    """)
basic.show_leds("""
    . . . . .
    . . . . .
    . # # # .
    . # # # .
    . . . . .
    """)
basic.show_leds("""
    . . . # .
    . . . # .
    . # # # .
    . # # # .
    . . . . .
    """)
basic.show_leds("""
    . # . . .
    . . # # .
    . # # # .
    . # # # .
    . . . . .
    """)
basic.show_leds("""
    . . . . .
    . # # # .
    . # # # .
    . # # # .
    . . . . .
    """)
music.play(music.string_playable("E F C5 C5 G E F G ", 156),
    music.PlaybackMode.IN_BACKGROUND)
basic.show_string("loading complete")
music.play(music.builtin_playable_sound_effect(soundExpression.giggle),
    music.PlaybackMode.UNTIL_DONE)
basic.show_string("Hello! please press the A button for the compass or A + B for test mode or B for sos")

def on_forever():
    pass
basic.forever(on_forever)
