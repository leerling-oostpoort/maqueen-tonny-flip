let strip = neopixel.create(DigitalPin.P15, 4, NeoPixelMode.RGB)
basic.forever(function () {
    strip.showColor(neopixel.colors(NeoPixelColors.Green))
    strip.show()
    basic.pause(100)
    strip.showColor(neopixel.colors(NeoPixelColors.Yellow))
    basic.pause(100)
    strip.showColor(neopixel.colors(NeoPixelColors.Indigo))
    basic.pause(100)
    strip.showColor(neopixel.colors(NeoPixelColors.Orange))
    basic.pause(100)
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 100)
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 100)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 100)
    basic.showLeds(`
        # # # # #
        . # . # .
        . # # # #
        . # . # .
        . # . # .
        `)
})
