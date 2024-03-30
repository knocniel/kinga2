input.onButtonPressed(Button.A, function () {
    PIXEL_ARRAY.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
    PIXEL_ARRAY.setPixelColor(1, neopixel.colors(NeoPixelColors.Yellow))
    PIXEL_ARRAY.setPixelColor(2, neopixel.colors(NeoPixelColors.Green))
    PIXEL_ARRAY.setPixelColor(3, neopixel.colors(NeoPixelColors.Blue))
    PIXEL_ARRAY.setPixelColor(4, neopixel.colors(NeoPixelColors.Purple))
    PIXEL_ARRAY.show()
})
input.onButtonPressed(Button.B, function () {
    PIXEL_ARRAY.clear()
    PIXEL_ARRAY.show()
})
let PIXEL_ARRAY: neopixel.Strip = null
PIXEL_ARRAY = neopixel.create(DigitalPin.P0, 5, NeoPixelMode.RGB)
basic.forever(function () {
    basic.pause(100)
    PIXEL_ARRAY.rotate(1)
    PIXEL_ARRAY.show()
})
