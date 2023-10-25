const GreenMarkTrust = artifacts.require("GreenMarkTrust");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('GreenMarkTrust', (accounts) => {
	it('test for GreenMarkTrust', async () => {
		const uintJiLIFC6 = BigInt("182")
		const stringwAbfNa9 = "CTDf5No"
		const stringpE00pMO = "spSTnodqpGUNUgoOVjv86AQkjRheUF1QZDUIMf6aagYLRjQ9X02qVd6O6DZcD2tqyt8cjsUDzd1QSy7GxDd8THBnckdlurdzE7"
		const GreenMarkTrustbZKddlk = await GreenMarkTrust.new(uintJiLIFC6, stringwAbfNa9, stringpE00pMO, {from: accounts[3]});
		const uintNPjSlrA = BigInt("1627")
		const uintNCczVkC = BigInt("1407")
		const uintDdIWNwI = BigInt("642")
		const addressot8ACo = "0x0000000000000000000000000000000000000001"
		const uintsALi8IN = BigInt("832")
		const uintj5malIA = BigInt("581")
		const addressa10gjkh = accounts[4]
		const boolNxYJL6h = await GreenMarkTrustbZKddlk.burn.call(uintNPjSlrA, {from: accounts[3]});
//		const boolvZ1w4Zn = await GreenMarkTrustbZKddlk.burn.call(uintNCczVkC, {from: accounts[4]});
//		const boolJTg9xhv = await GreenMarkTrustbZKddlk.approve.call(addressot8ACo, uintDdIWNwI, {from: accounts[1]});
//		const boolwFuUkmY = await GreenMarkTrustbZKddlk.burn.call(uintsALi8IN, {from: accounts[1]});
//		const boolbMO91O8 = await GreenMarkTrustbZKddlk.approve.call(addressa10gjkh, uintj5malIA, {from: accounts[5]});

		assert.equal(boolNxYJL6h, true)
		await expect(GreenMarkTrustbZKddlk.burn.call(uintNCczVkC, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for GreenMarkTrust', async () => {
		const uintOMGr5Wi = BigInt("1276")
		const stringDeKFkRh = "CYfPURxZoAcdTPM6fzuf16RfPanStiOUXdHaSfR5AnYl4VGtxXjMcixhcSQfsY9P9AZOFi7WyFNCapvGlA2ww6PhuO"
		const stringheUXa4s = "QlJ9v2RKhFhKI9fQ2pScEqIk5Tr4liyaEb3wDDSr2Y"
		const GreenMarkTrustcLHFvJ6 = await GreenMarkTrust.new(uintOMGr5Wi, stringDeKFkRh, stringheUXa4s, {from: accounts[0]});
		const uintR0CJzJZ = BigInt("1523")
		const addressi4rNz97 = accounts[4]
		const addressuR0bXZj = accounts[5]
		const uintPGk04hZ = BigInt("453")
		const bytegLSqZ0x = "0x03191b16041706081d13131e05071b041216040f010f0e"
		const uintfKXeeWF = BigInt("1335")
		const addressTq3tZR8 = "0x0000000000000000000000000000000000000001"
		const uintAzIkdxC = BigInt("1814")
//		const boolSKLkAh5 = await GreenMarkTrustcLHFvJ6.transferFrom.call(addressuR0bXZj, addressi4rNz97, uintR0CJzJZ, {from: accounts[2]});
//		const boolBpi7A9h = await GreenMarkTrustcLHFvJ6.burn.call(uintPGk04hZ, {from: accounts[0]});
//		const boolDGDUeBp = await GreenMarkTrustcLHFvJ6.approveAndCall.call(addressTq3tZR8, uintfKXeeWF, bytegLSqZ0x, {from: accounts[4]});
//		const boolNm4AYM = await GreenMarkTrustcLHFvJ6.burn.call(uintAzIkdxC, {from: accounts[3]});

		await expect(GreenMarkTrustcLHFvJ6.transferFrom.call(addressuR0bXZj, addressi4rNz97, uintR0CJzJZ, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GreenMarkTrust', async () => {
		const uintilDDYxe = BigInt("222")
		const stringKjzlChI = "YPWM1Tj9viVouqzRJcXneryNZTtMgsF"
		const stringUwFa2wJ = "17rd1DsweRvFGuTPN76kLNlP5kQWso0lz45K8An6DrqpYXyDl2Atzxi21KXEKt3qoWyfulMzIQi"
		const GreenMarkTrustb2sfEAO = await GreenMarkTrust.new(uintilDDYxe, stringKjzlChI, stringUwFa2wJ, {from: accounts[4]});
		const uintiPLluI3 = BigInt("1361")
		const addressBWGjiSc = accounts[1]
		const byte9W8DqD = "0x101613"
		const uintPsbMrow = BigInt("718")
		const addresskbjRZbp = accounts[0]
		const boolwKelGv = await GreenMarkTrustb2sfEAO.approve.call(addressBWGjiSc, uintiPLluI3, {from: accounts[1]});
//		const boolxOYSZ9 = await GreenMarkTrustb2sfEAO.approveAndCall.call(addresskbjRZbp, uintPsbMrow, byte9W8DqD, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolwKelGv, true)
		await expect(GreenMarkTrustb2sfEAO.approveAndCall.call(addresskbjRZbp, uintPsbMrow, byte9W8DqD, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for GreenMarkTrust', async () => {
		const uintR1EFwAM = BigInt("1764")
		const stringIaVvgbr = "4ywtPK48ZRBYbLkbaiigKGsMKvnlBhaaihU71Fqbxurq7R3KipwidxlIMZWd"
		const stringyqlT8hx = "gIVCCmzySKtvsgjhkRKzcx1HdrNyskT3jnO0HPRV5RVz"
		const GreenMarkTrustPqJRvdy = await GreenMarkTrust.new(uintR1EFwAM, stringIaVvgbr, stringyqlT8hx, {from: accounts[4]});
		const uintlvJjDYa = BigInt("789")
		const addressXMbWPAb = accounts[1]
		const uintvf9TPI8 = BigInt("1350")
		const addressZB79nTY = accounts[0]
		const uintG7BjSzg = BigInt("954")
		const booloBQTqQJ = await GreenMarkTrustPqJRvdy.transfer.call(addressXMbWPAb, uintlvJjDYa, {from: accounts[4]});
//		const boolKUmKESA = await GreenMarkTrustPqJRvdy.transfer.call(addressZB79nTY, uintvf9TPI8, {from: accounts[5]});
//		const boolXWqQNVC = await GreenMarkTrustPqJRvdy.burn.call(uintG7BjSzg, {from: accounts[0]});

		assert.equal(booloBQTqQJ, true)
		await expect(GreenMarkTrustPqJRvdy.transfer.call(addressZB79nTY, uintvf9TPI8, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for GreenMarkTrust', async () => {
		const uintC41pXzo = BigInt("1866")
		const stringbxmmALC = "Az6"
		const stringeZBxIRZ = "Y27AGUAJ3aQpYhTCpruBz0Gw1v3pSdPH18WSBM4sCE46bslx3T6cvoWW1K2jgfg2Sg388BJVBfJSb3gTWyUXgguTVb"
		const GreenMarkTrustRAoz8OT = await GreenMarkTrust.new(uintC41pXzo, stringbxmmALC, stringeZBxIRZ, {from: "0x0000000000000000000000000000000000000001"});
		const uintH9AOPiK = BigInt("1216")
		const uintyKkj72K = BigInt("1414")
		const addressEFgQ9dP = accounts[2]
		const addresslk0CAmQ = accounts[0]
		const uintbDA4EIR = BigInt("40")
		const addresszcJ6juB = accounts[3]
		const uintHSj3tnJ = BigInt("638")
		const addressYUv0vjm = accounts[3]
		const bytemaUogjk = "0x180b010c1c05100411050f000a1a"
		const uintEbrAidl = BigInt("1184")
		const addresslCHmkHX = accounts[5]
		const boolYfDV63Q = await GreenMarkTrustRAoz8OT.burn.call(uintH9AOPiK, {from: accounts[1]});
		const booleRE64JM = await GreenMarkTrustRAoz8OT.transferFrom.call(addresslk0CAmQ, addressEFgQ9dP, uintyKkj72K, {from: accounts[3]});
		const boolEofQedw = await GreenMarkTrustRAoz8OT.approve.call(addresszcJ6juB, uintbDA4EIR, {from: accounts[3]});
		const boolBNKyxj5 = await GreenMarkTrustRAoz8OT.approve.call(addressYUv0vjm, uintHSj3tnJ, {from: accounts[2]});
		const boolV7DdaqT = await GreenMarkTrustRAoz8OT.approveAndCall.call(addresslCHmkHX, uintEbrAidl, bytemaUogjk, {from: accounts[3]});
	});

	it('test for GreenMarkTrust', async () => {
		const uintBzf2Xtk = BigInt("1971")
		const stringeZhPWnH = "fVTfm"
		const stringHaKX9JO = "EQmqb7eLEDwS7RntyXoQOpxMdTVI1uTtW5At4mIaI9mXAljXkitehUea29lqcVYJdR0gpnN0YTxcNeM1KANVzgDSPnTc"
		const GreenMarkTrustJmUhatM = await GreenMarkTrust.new(uintBzf2Xtk, stringeZhPWnH, stringHaKX9JO, {from: accounts[1]});
		const uintgGOSEC = BigInt("2034")
		const addressDE0voKf = accounts[4]
		const uintU3KTra7 = BigInt("1059")
		const addressuGXP2U = accounts[4]
		const uintPwTa1SB = BigInt("1918")
		const addressRyBB82k = accounts[4]
		const addressPvfuJ3q = accounts[3]
		const byteN4wyuDa = "0x0812120d1604121b1c0a1b190d1b0d19130f15"
		const uintqB0XbMg = BigInt("590")
		const addressine2FtL = accounts[2]
//		const boolNNeBWM = await GreenMarkTrustJmUhatM.burnFrom.call(addressDE0voKf, uintgGOSEC, {from: "0x0000000000000000000000000000000000000001"});
//		const booleso8oh9 = await GreenMarkTrustJmUhatM.burnFrom.call(addressuGXP2U, uintU3KTra7, {from: accounts[2]});
//		const boolUggRfO1 = await GreenMarkTrustJmUhatM.transferFrom.call(addressPvfuJ3q, addressRyBB82k, uintPwTa1SB, {from: accounts[3]});
//		const booldbjPHZy = await GreenMarkTrustJmUhatM.approveAndCall.call(addressine2FtL, uintqB0XbMg, byteN4wyuDa, {from: accounts[5]});

		await expect(GreenMarkTrustJmUhatM.burnFrom.call(addressDE0voKf, uintgGOSEC, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});
})