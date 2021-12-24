let co2 = 0
airQuality.appStart()
basic.showString("ID:" + airQuality.hardwareID())
basic.showString("St:" + airQuality.readStatus())
basic.showString("Err:" + airQuality.readError())
basic.forever(function () {
    co2 = airQuality.readCo2()
    basic.showString("" + (co2))
    pins.digitalWritePin(DigitalPin.P0, 0)
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P2, 0)
    if (co2 <= 499) {
        pins.digitalWritePin(DigitalPin.P0, 1)
    } else if (co2 <= 999) {
        pins.digitalWritePin(DigitalPin.P1, 1)
        pins.digitalWritePin(DigitalPin.P4, 1)
        basic.pause(500)
        pins.digitalWritePin(DigitalPin.P4, 0)
    } else {
        pins.digitalWritePin(DigitalPin.P2, 1)
        pins.digitalWritePin(DigitalPin.P4, 1)
        basic.pause(5000)
        pins.digitalWritePin(DigitalPin.P4, 0)
    }
    basic.pause(5000)
})
