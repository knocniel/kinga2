input.onButtonPressed(Button.A, function () {
    PIXEL_ARRAY.range(0, 2).showColor(neopixel.colors(NeoPixelColors.Green))
    PIXEL_ARRAY.range(3, 2).showColor(neopixel.colors(NeoPixelColors.Green))
    pins.servoWritePin(AnalogPin.P1, 0)
    pins.servoWritePin(AnalogPin.P2, 180)
})
input.onButtonPressed(Button.AB, function () {
    pins.servoWritePin(AnalogPin.P1, 90)
    pins.servoWritePin(AnalogPin.P2, 90)
})
input.onButtonPressed(Button.B, function () {
    PIXEL_ARRAY.range(0, 2).showColor(neopixel.colors(NeoPixelColors.Red))
    PIXEL_ARRAY.range(3, 2).showColor(neopixel.colors(NeoPixelColors.Red))
    pins.servoWritePin(AnalogPin.P1, 180)
    pins.servoWritePin(AnalogPin.P2, 0)
})
let PIXEL_ARRAY: neopixel.Strip = null
PIXEL_ARRAY = neopixel.create(DigitalPin.P0, 5, NeoPixelMode.RGB)
