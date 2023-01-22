input.onButtonPressed(Button.B, function () {
    if (huskylens.isAppear(1, HUSKYLENSResultType_t.HUSKYLENSResultBlock)) {
        radio.sendNumber(1)
    } else if (huskylens.isAppear(2, HUSKYLENSResultType_t.HUSKYLENSResultBlock)) {
        radio.sendNumber(2)
    } else if (huskylens.isAppear(3, HUSKYLENSResultType_t.HUSKYLENSResultBlock)) {
        radio.sendNumber(3)
    } else if (huskylens.isAppear(4, HUSKYLENSResultType_t.HUSKYLENSResultBlock)) {
        radio.sendNumber(4)
    } else if (huskylens.isAppear(5, HUSKYLENSResultType_t.HUSKYLENSResultBlock)) {
        radio.sendNumber(5)
    } else if (huskylens.isAppear(6, HUSKYLENSResultType_t.HUSKYLENSResultBlock)) {
        radio.sendNumber(6)
    } else {
        radio.sendNumber(0)
    }
})
radio.setGroup(1)
huskylens.initI2c()
huskylens.initMode(protocolAlgorithm.OBJECTCLASSIFICATION)
huskylens.clearOSD()
huskylens.writeOSD("Remote Control", 92, 30)
basic.showIcon(IconNames.Happy)
basic.forever(function () {
    huskylens.request()
})
