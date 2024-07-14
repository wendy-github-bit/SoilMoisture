let reading = 0
led.setBrightness(64)
OLED.init(128, 64)
pins.digitalWritePin(DigitalPin.P2, 1)
basic.pause(100)
pins.digitalWritePin(DigitalPin.P2, 0)
loops.everyInterval(1000, function () {
    OLED.clear()
})
basic.forever(function () {
    pins.analogWritePin(AnalogPin.P1, 1023)
    reading = pins.analogReadPin(AnalogPin.P0)
    pins.analogWritePin(AnalogPin.P1, 0)
    led.plotBarGraph(
    reading,
    1023
    )
    OLED.writeNumNewLine(reading)
})
loops.everyInterval(3600000, function () {
    if (reading < 1) {
        for (let index = 0; index < 3; index++) {
            pins.digitalWritePin(DigitalPin.P2, 1)
            basic.pause(100)
            pins.digitalWritePin(DigitalPin.P2, 0)
            basic.pause(100)
        }
    }
})
