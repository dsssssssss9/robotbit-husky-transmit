/**
 * Send Number ( command ) based on what the Husky sees
 * 
 * The Husky will need to be "trained" to recognise your objects before this will work 
 * 
 * In my demo video i have trained it to recognise the letter F, B , L , R, S , W
 * 
 * You could use any letter / icon / object as well as increase / decrease the number of them depending on the number of "commands" your project needs
 */
// When Button B is pressed check Husky ID from current result & send appropriate number " command " to receiver
// 
// These number & commands are arbitrary & can be changed / expanded to suit your particular setup 
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
// Set Radio Group - bpth transmitter & receiver will need to be on same group
// 
// Initiaklise & test link from MicroBit to Husky
// 
// Set Husky to Object Classification " mode
// 
// Dsiplay " Remote Control " on Husky Screen
radio.setGroup(1)
huskylens.initI2c()
huskylens.initMode(protocolAlgorithm.OBJECTCLASSIFICATION)
huskylens.clearOSD()
huskylens.writeOSD("Remote Control", 92, 30)
basic.showIcon(IconNames.Chessboard)
// Get latest result from Husky
basic.forever(function () {
    huskylens.request()
})
