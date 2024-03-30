def on_button_pressed_a():
    PIXEL_ARRAY.set_pixel_color(0, neopixel.colors(NeoPixelColors.RED))
    PIXEL_ARRAY.set_pixel_color(1, neopixel.colors(NeoPixelColors.YELLOW))
    PIXEL_ARRAY.set_pixel_color(2, neopixel.colors(NeoPixelColors.GREEN))
    PIXEL_ARRAY.set_pixel_color(3, neopixel.colors(NeoPixelColors.BLUE))
    PIXEL_ARRAY.set_pixel_color(4, neopixel.colors(NeoPixelColors.PURPLE))
    PIXEL_ARRAY.show()
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    PIXEL_ARRAY.clear()
    PIXEL_ARRAY.show()
input.on_button_pressed(Button.B, on_button_pressed_b)

PIXEL_ARRAY: neopixel.Strip = None
PIXEL_ARRAY = neopixel.create(DigitalPin.P0, 5, NeoPixelMode.RGB)

def on_forever():
    basic.pause(100)
    PIXEL_ARRAY.rotate(1)
    PIXEL_ARRAY.show()
basic.forever(on_forever)
