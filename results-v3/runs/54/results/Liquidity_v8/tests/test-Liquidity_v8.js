const Liquidity_v8 = artifacts.require("Liquidity_v8");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Liquidity_v8', (accounts) => {
	it('test for Liquidity_v8', async () => {
		const stringAqXTmED = "QLNeIwBIoHsk5dcpqbDx3NG3px5iyzoZIl6GBxFHlkNSF1"
		const addressHWNmnM = accounts[0]
		const addresssLFJvht = accounts[0]
		const uintkQOPLMW = BigInt("1082")
		const uintMcOR2X = BigInt("2016")
		const Liquidity_v8tMxiGXc = await Liquidity_v8.new(stringAqXTmED, addressHWNmnM, addresssLFJvht, uintkQOPLMW, uintMcOR2X, {from: accounts[3]});
		const addressNlOBUKO = accounts[1]
		const uintlPPno61 = BigInt("1692")
		await Liquidity_v8tMxiGXc.onlyOwner.call({from: accounts[3]});
		await Liquidity_v8tMxiGXc.onlyOwner.call({from: accounts[2]});
		const 
bOkJna = await Liquidity_v8tMxiGXc.userDeposits.call(addressNlOBUKO, {from: accounts[4]});
		const uint256Noeyci = await Liquidity_v8tMxiGXc.changeLockDuration.call(uintlPPno61, {from: accounts[0]});
	});

	it('test for Liquidity_v8', async () => {
		const stringXZHvA33 = "iAUBYWEx13AdiuSXFSa3sEvcWCC0yp"
		const addressTXUqxk6 = accounts[2]
		const addressWjf5cEo = accounts[0]
		const uintuecH1Ry = BigInt("631")
		const uintmV5X6bC = BigInt("1937")
		const Liquidity_v8syDq1Te = await Liquidity_v8.new(stringXZHvA33, addressTXUqxk6, addressWjf5cEo, uintuecH1Ry, uintmV5X6bC, {from: accounts[3]});
		const uintdyQRhdl = BigInt("1833")
		const addressaeyTKIh = accounts[2]
		const uintAECjIpq = BigInt("1304")
		const uintgJz2Rf6 = BigInt("123")
		const boolD9qbNox = await Liquidity_v8syDq1Te.addReward.call(uintdyQRhdl, {from: accounts[2]});
		const uint256L7dT7LJ = await Liquidity_v8syDq1Te.calculate.call(addressaeyTKIh, {from: accounts[0]});
		const uint64aPOEhvP = await Liquidity_v8syDq1Te.setRate.call(uintAECjIpq, {from: accounts[3]});
		await Liquidity_v8syDq1Te.onlyOwner.call({from: accounts[0]});
		const boolnB27EAo = await Liquidity_v8syDq1Te.stake.call(uintgJz2Rf6, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for Liquidity_v8', async () => {
		const string9jUutY = "ElwWTa5fguwPKsbBuF41Y9crN9JDyInxuudepBOrT5Ywez25s8d1SB92R7NBv6p3tYcJiWYoRDpl835ENl"
		const addresszcu6GIo = accounts[0]
		const addressNI0xOmp = accounts[1]
		const uintS48eVIC = BigInt("310")
		const uintj9EKSrc = BigInt("352")
		const Liquidity_v8zr6ofe2 = await Liquidity_v8.new(string9jUutY, addresszcu6GIo, addressNI0xOmp, uintS48eVIC, uintj9EKSrc, {from: accounts[3]});
		const addressDClHEks = accounts[2]
		const uintjoiEgX1 = BigInt("745")
		const uintrYC1TAV = BigInt("1461")
		const uintPnR0w0y = BigInt("1205")
		const uintnHLho9E = BigInt("1378")
		const addressPUfiDV = await Liquidity_v8zr6ofe2.transferOwnership.call(addressDClHEks, {from: accounts[2]});
		await Liquidity_v8zr6ofe2.renounceOwnership.call({from: accounts[2]});
		const boolCHKutxj = await Liquidity_v8zr6ofe2.stake.call(uintjoiEgX1, {from: accounts[0]});
		const uint256cuK3yZa = await Liquidity_v8zr6ofe2.changeLockDuration.call(uintrYC1TAV, {from: accounts[5]});
		const boolZTasVTq = await Liquidity_v8zr6ofe2.addReward.call(uintPnR0w0y, {from: "0x0000000000000000000000000000000000000001"});
		const boolsPWPZpv = await Liquidity_v8zr6ofe2.addReward.call(uintnHLho9E, {from: accounts[0]});
	});

	it('test for Liquidity_v8', async () => {
		const stringD8PCETM = "DG2PSciQqesR"
		const addresswea8wsc = accounts[1]
		const addressRBDUepE = accounts[2]
		const uintlXwPOx6 = BigInt("1852")
		const uintXbDUCml = BigInt("183")
		const Liquidity_v8kGd8XsC = await Liquidity_v8.new(stringD8PCETM, addresswea8wsc, addressRBDUepE, uintlXwPOx6, uintXbDUCml, {from: accounts[5]});
		const addressJc3pRNt = accounts[2]
		const uint256z4shdy3 = await Liquidity_v8kGd8XsC.calculate.call(addressJc3pRNt, {from: accounts[4]});
		await Liquidity_v8kGd8XsC.onlyOwner.call({from: accounts[1]});
		const boolRTZDIyA = await Liquidity_v8kGd8XsC.isOwner.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for Liquidity_v8', async () => {
		const stringrtBI5B3 = "OqSRPh29AlxrNvXuBFJZdcEsRzMvHC3VU5ZArNczPMR4p43ObJJlWyIafrGNsiKbMUx7SLsMfJto4aobwkQpAsKiN"
		const addressuYhhHx = accounts[5]
		const addressoySqtk = accounts[3]
		const uintHUt5oI = BigInt("1170")
		const uintfXQKnDj = BigInt("240")
		const Liquidity_v8u24Kkig = await Liquidity_v8.new(stringrtBI5B3, addressuYhhHx, addressoySqtk, uintHUt5oI, uintfXQKnDj, {from: accounts[3]});
		const boolDtfF0WN = await Liquidity_v8u24Kkig.withdraw.call({from: accounts[3]});
	});

	it('test for Liquidity_v8', async () => {
		const stringqsDXB1 = "JjkFwbSRhLw0ZzwjwfP1BEi9tAb8sdadtIfodIyEfySdqaQ9lgfgcr0Xlbo3H3P"
		const addressgQHfTJ0 = accounts[0]
		const addressFxxxmvk = accounts[4]
		const uint7MaOAv = BigInt("404")
		const uintx5F85sF = BigInt("1022")
		const Liquidity_v8OzwSoHo = await Liquidity_v8.new(stringqsDXB1, addressgQHfTJ0, addressFxxxmvk, uint7MaOAv, uintx5F85sF, {from: accounts[2]});
		const address0fidyA = accounts[3]
		const uintExFIQSt = BigInt("736")
		await Liquidity_v8OzwSoHo.renounceOwnership.call({from: accounts[2]});
		const uint256UBnfOB = await Liquidity_v8OzwSoHo.calculate.call(address0fidyA, {from: accounts[3]});
		const uint256s9Mmh7P = await Liquidity_v8OzwSoHo.changeLockDuration.call(uintExFIQSt, {from: accounts[5]});
	});

	it('test for Liquidity_v8', async () => {
		const stringrtBI5B3 = "OqSRPh29AlxrNvXuBFJZdcEsRzMvHC3VU5ZArNczPMR4p43ObJJlWyIafrGNsiKbMUx7SLsMfJto4aobwkQpAsKiN"
		const addressGlA2aDb = accounts[5]
		const addressfS3sVuH = accounts[3]
		const uintDvB6Zfi = BigInt("1170")
		const uintKhPUrCW = BigInt("240")
		const Liquidity_v8u24Kkig = await Liquidity_v8.new(stringrtBI5B3, addressGlA2aDb, addressfS3sVuH, uintDvB6Zfi, uintKhPUrCW, {from: accounts[3]});
		const addresstu6Qgbv = accounts[1]
		const addressEoRHKrn = accounts[1]
		const uintSlU2gJc = BigInt("1951")
		const addressIxFDnJr = accounts[3]
		const 
Myv9q1H = await Liquidity_v8u24Kkig.userDeposits.call(addresstu6Qgbv, {from: accounts[0]});
		const 
WzEySiC = await Liquidity_v8u24Kkig._hasAllowance.call(addressIxFDnJr, uintSlU2gJc, addressEoRHKrn, {from: accounts[1]});
		const boolDtfF0WN = await Liquidity_v8u24Kkig.withdraw.call({from: accounts[3]});
	});

	it('test for Liquidity_v8', async () => {
		const stringrtBI5B3 = "OqSRPh29AlxrNvXuBFJZdcEsRzMvHC3VU5ZArNczPMR4p43ObJJlWyIafrGNsiKbMUx7SLsMfJto4aobwkQpAsKiN"
		const addressQCl3W3f = accounts[5]
		const addressTzCjTkn = accounts[3]
		const uintUbxE8Dm = BigInt("1170")
		const uintYWsl1e9 = BigInt("240")
		const Liquidity_v8u24Kkig = await Liquidity_v8.new(stringrtBI5B3, addressQCl3W3f, addressTzCjTkn, uintUbxE8Dm, uintYWsl1e9, {from: accounts[3]});
		const address6Debv3 = accounts[1]
		const 
iE7P5r = await Liquidity_v8u24Kkig.userDeposits.call(address6Debv3, {from: accounts[5]});
		const boolVL2Yhsx = await Liquidity_v8u24Kkig.emergencyWithdraw.call({from: accounts[4]});
		const boolDtfF0WN = await Liquidity_v8u24Kkig.withdraw.call({from: accounts[3]});
	});

	it('test for Liquidity_v8', async () => {
		const stringrtBI5B3 = "OqSRPh29AlxrNvXuBFJZdcEsRzMvHC3VU5ZArNczPMR4p43ObJJlWyIafrGNsiKbMUx7SLsMfJto4aobwkQpAsKiN"
		const addresskjJWRmg = accounts[5]
		const addressnUllGi8 = accounts[3]
		const uintzmzmnfU = BigInt("1170")
		const uintz3ZMSgU = BigInt("240")
		const Liquidity_v8u24Kkig = await Liquidity_v8.new(stringrtBI5B3, addresskjJWRmg, addressnUllGi8, uintzmzmnfU, uintz3ZMSgU, {from: accounts[3]});
		const addressofyLwQ = accounts[3]
		const addressuagFbmI = accounts[2]
		const 
Wn6dwEJ = await Liquidity_v8u24Kkig.userDeposits.call(addressofyLwQ, {from: accounts[1]});
		const addressXZYGI17 = await Liquidity_v8u24Kkig.owner.call({from: accounts[4]});
		const 
Myv9q1H = await Liquidity_v8u24Kkig.userDeposits.call(addressuagFbmI, {from: accounts[0]});
	});

	it('test for Liquidity_v8', async () => {
		const stringrtBI5B3 = "OqSRPh29AlxrNvXuBFJZdcEsRzMvHC3VU5ZArNczPMR4p43ObJJlWyIafrGNsiKbMUx7SLsMfJto4aobwkQpAsKiN"
		const address9X1MvP = accounts[5]
		const addressneyFWHR = accounts[3]
		const uintrH5KYtF = BigInt("1170")
		const uintwuuXnwG = BigInt("240")
		const Liquidity_v8u24Kkig = await Liquidity_v8.new(stringrtBI5B3, address9X1MvP, addressneyFWHR, uintrH5KYtF, uintwuuXnwG, {from: accounts[3]});
		const uinteT6lWww = BigInt("287")
		const addressrf6m7V = accounts[2]
		const uint64TedAqN = await Liquidity_v8u24Kkig.setRate.call(uinteT6lWww, {from: accounts[3]});
		const 
Myv9q1H = await Liquidity_v8u24Kkig.userDeposits.call(addressrf6m7V, {from: accounts[0]});
	});

	it('test for Liquidity_v8', async () => {
		const stringrtBI5B3 = "OqSRPh29AlxrNvXuBFJZdcEsRzMvHC3VU5ZArNczPMR4p43ObJJlWyIafrGNsiKbMUx7SLsMfJto4aobwkQpAsKiN"
		const address4LGHCQ = accounts[5]
		const addressPxDhbtN = accounts[3]
		const uintz87WETu = BigInt("1170")
		const uintWfHvjaW = BigInt("240")
		const Liquidity_v8u24Kkig = await Liquidity_v8.new(stringrtBI5B3, address4LGHCQ, addressPxDhbtN, uintz87WETu, uintWfHvjaW, {from: accounts[3]});
		const uintREm9nn = BigInt("1409")
		const uintRGcsjs0 = BigInt("1068")
		const addressH90qSuv = accounts[2]
		const addressW4zXDH = accounts[4]
		const uintlbRf5MW = BigInt("742")
		const addressvm7GGQB = "0x0000000000000000000000000000000000000001"
		const uint256pnGIZbc = await Liquidity_v8u24Kkig.changeLockDuration.call(uintREm9nn, {from: accounts[3]});
		const boolcHagDAq = await Liquidity_v8u24Kkig.addReward.call(uintRGcsjs0, {from: "0x0000000000000000000000000000000000000001"});
		const 
Myv9q1H = await Liquidity_v8u24Kkig.userDeposits.call(addressH90qSuv, {from: accounts[0]});
		const 
loWFD31 = await Liquidity_v8u24Kkig._hasAllowance.call(addressvm7GGQB, uintlbRf5MW, addressW4zXDH, {from: accounts[2]});
	});

	it('test for Liquidity_v8', async () => {
		const stringrtBI5B3 = "OqSRPh29AlxrNvXuBFJZdcEsRzMvHC3VU5ZArNczPMR4p43ObJJlWyIafrGNsiKbMUx7SLsMfJto4aobwkQpAsKiN"
		const addressRYaWoPV = accounts[5]
		const addressPOT1y8J = accounts[3]
		const uintJihsvRe = BigInt("1170")
		const uintPvrJBCb = BigInt("240")
		const Liquidity_v8u24Kkig = await Liquidity_v8.new(stringrtBI5B3, addressRYaWoPV, addressPOT1y8J, uintJihsvRe, uintPvrJBCb, {from: accounts[3]});
		const addresszbX9azf = accounts[2]
		const addressQEFcHr1 = await Liquidity_v8u24Kkig.transferOwnership.call(addresszbX9azf, {from: accounts[3]});
		const boolDtfF0WN = await Liquidity_v8u24Kkig.withdraw.call({from: accounts[3]});
	});

	it('test for Liquidity_v8', async () => {
		const stringBNo2oto = "3GSULaw0QOG4bxRZeZyuMGBWZYvLotpd2c1RnSgXK9afCju1uylNbDKfGIp"
		const addresseUGPbT = accounts[3]
		const address9pyVmf = accounts[0]
		const uintnkhcXY9 = BigInt("1564")
		const uint4Uf3bF = BigInt("1454")
		const Liquidity_v8i7kFg9T = await Liquidity_v8.new(stringBNo2oto, addresseUGPbT, address9pyVmf, uintnkhcXY9, uint4Uf3bF, {from: "0x0000000000000000000000000000000000000001"});
		const address4nZ21j = accounts[1]
		const uintJbJx80z = BigInt("1179")
		const addressunqqG7f = accounts[3]
		const uintpIwF2NN = BigInt("1308")
		const addressn28Azh8 = "0x0000000000000000000000000000000000000001"
		await Liquidity_v8i7kFg9T.renounceOwnership.call({from: accounts[5]});
		const addressBurI351 = await Liquidity_v8i7kFg9T.owner.call({from: accounts[0]});
		const 
N9Rdpr8 = await Liquidity_v8i7kFg9T.userDeposits.call(address4nZ21j, {from: accounts[5]});
		await Liquidity_v8i7kFg9T.renounceOwnership.call({from: accounts[0]});
		const boolo1G9eai = await Liquidity_v8i7kFg9T.stake.call(uintJbJx80z, {from: accounts[5]});
		const 
Pokm5Jn = await Liquidity_v8i7kFg9T._hasAllowance.call(addressn28Azh8, uintpIwF2NN, addressunqqG7f, {from: accounts[5]});
	});
})