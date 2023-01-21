huskylens.initI2c()
huskylens.initMode(protocolAlgorithm.OBJECTCLASSIFICATION)
huskylens.clearOSD()
huskylens.writeOSD("Remote Control", 92, 30)
basic.showIcon(IconNames.StickFigure)
basic.forever(function () {
	
})
