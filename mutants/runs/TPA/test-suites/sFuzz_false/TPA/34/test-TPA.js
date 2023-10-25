const TPA = artifacts.require("TPA");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('TPA', (accounts) => {
	it('test for TPA', async () => {
		const stringeHZUNxr = "NASfklxrU2Pl4I7EWHwstOcGx56jcbKlHfr"
		const stringmQuyZVE = "R8EoLXQUmB"
		const uintcyyYWrW = BigInt("68")
		const TPANX3abKO = await TPA.new(stringeHZUNxr, stringmQuyZVE, uintcyyYWrW, {from: accounts[2]});
		const uintIF6CJgw = BigInt("1674")
		const addressSj9FfnT = accounts[4]
		const addresswMcSU43 = accounts[3]
		const stringRNLG8pQ = await TPANX3abKO.name.call({from: accounts[1]});
		const boolRAoamOJ = await TPANX3abKO.transferFrom.call(addresswMcSU43, addressSj9FfnT, uintIF6CJgw, {from: accounts[2]});
	});

	it('test for TPA', async () => {
		const TPAUXYmnoY = await TPA.new({from: accounts[0]});
		const uintFpK61RS = BigInt("1473")
		const uintsioaB7Y = BigInt("90")
		const addressL2wCSzd = accounts[1]
		const uinte8rQOD = BigInt("1989")
		const addressVyx80N = accounts[5]
		const uintDgnE0vB = BigInt("1434")
		const addressZwcvQNN = accounts[3]
		const uintrskKaq7 = BigInt("1120")
		const addressM22OtXV = accounts[3]
		const addressN4OuHDP = accounts[0]
		const uint256j4bhCIS = await TPAUXYmnoY.totalSupply.call({from: accounts[5]});
		const boolIwDkZF = await TPAUXYmnoY.lock.call(addressL2wCSzd, uintsioaB7Y, uintFpK61RS, {from: accounts[4]});
		const booldcmjc7o = await TPAUXYmnoY.transfer.call(addressVyx80N, uinte8rQOD, {from: accounts[2]});
		const boolaIN7uDT = await TPAUXYmnoY.approve.call(addressZwcvQNN, uintDgnE0vB, {from: accounts[2]});
		const booliVxWhX = await TPAUXYmnoY.transfer.call(addressM22OtXV, uintrskKaq7, {from: accounts[3]});
		const addressxvMBBoP = await TPAUXYmnoY.transferOwnership.call(addressN4OuHDP, {from: accounts[5]});

		assert.equal(uint256j4bhCIS, BigInt("10000000000000000000000000000"))
		await expect(TPAUXYmnoY.lock.call(addressL2wCSzd, uintsioaB7Y, uintFpK61RS, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAXowLWJ = await TPA.new({from: accounts[0]});
		const uintF7yz8yW = BigInt("1820")
		const addressz3AwvIR = accounts[2]
		const uintWnw2K9e = BigInt("493")
		const addressrMyuoko = accounts[1]
		const uintCToBuZ = BigInt("1441")
		const addressfiQKrW3 = accounts[2]
		const uintjGuNSqQ = BigInt("495")
		const addresscojBAzt = accounts[4]
		const addressYWxa1co = "0x0000000000000000000000000000000000000001"
		const uintqlt55I6 = BigInt("1424")
		const addresssWrOWU = accounts[4]
		await TPAXowLWJ.whenPaused.call({from: accounts[3]});
		const boolBufTnU9 = await TPAXowLWJ.transfer.call(addressz3AwvIR, uintF7yz8yW, {from: accounts[1]});
		const boolXLJVuKw = await TPAXowLWJ.increaseAllowance.call(addressrMyuoko, uintWnw2K9e, {from: accounts[3]});
		const boolU0GUsMb = await TPAXowLWJ.approve.call(addressfiQKrW3, uintCToBuZ, {from: accounts[1]});
		const boolaL2lWeL = await TPAXowLWJ.transferFrom.call(addressYWxa1co, addresscojBAzt, uintjGuNSqQ, {from: accounts[0]});
		const boolztOFxYU = await TPAXowLWJ.transfer.call(addresssWrOWU, uintqlt55I6, {from: accounts[4]});

		await expect(TPAXowLWJ.whenPaused.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPANmts8QL = await TPA.new({from: accounts[1]});
		const addresslsYohCM = "0x0000000000000000000000000000000000000001"
		const addresszYr1ZUu = accounts[0]
		const addressQx5fJh = accounts[2]
		const uint256idb9cJS = await TPANmts8QL.balanceOf.call(addresslsYohCM, {from: accounts[2]});
		const boolVJ09Zn3 = await TPANmts8QL.unfreezeAccount.call(addresszYr1ZUu, {from: accounts[4]});
		const uint256hjM3n0h = await TPANmts8QL.balanceOf.call(addressQx5fJh, {from: accounts[0]});

		assert.equal(uint256idb9cJS, BigInt("0"))
		await expect(TPANmts8QL.unfreezeAccount.call(addresszYr1ZUu, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAn9iiyoy = await TPA.new({from: "0x0000000000000000000000000000000000000001"});
		const uintikVAkwQ = BigInt("1516")
		const addressIfX0N9Z = accounts[1]
		const addressjgCVyJy = accounts[2]
		const addressCR84bk3 = "0x0000000000000000000000000000000000000001"
		const boolOoNDo9i = await TPAn9iiyoy.increaseAllowance.call(addressIfX0N9Z, uintikVAkwQ, {from: "0x0000000000000000000000000000000000000001"});
		await TPAn9iiyoy.renounceAdmin.call({from: accounts[5]});
		const addressRkz7hP4 = await TPAn9iiyoy.transferOwnership.call(addressjgCVyJy, {from: accounts[1]});
		const addressaWJcD9N = await TPAn9iiyoy.removeAdmin.call(addressCR84bk3, {from: accounts[3]});
	});

	it('test for TPA', async () => {
		const TPANmts8QL = await TPA.new({from: accounts[1]});
		const addresstfRgETG = "0x0000000000000000000000000000000000000001"
		const uintX8AbQei = BigInt("555")
		const addressPVUzSDq = accounts[2]
		const addressQRPktlA = accounts[0]
		const uintdc41z8v = BigInt("248")
		const addressplzZEbN = accounts[2]
		const addressZfZWDaZ = accounts[2]
		const uint256idb9cJS = await TPANmts8QL.balanceOf.call(addresstfRgETG, {from: accounts[2]});
		const boolTqE6BL = await TPANmts8QL.decreaseAllowance.call(addressPVUzSDq, uintX8AbQei, {from: accounts[2]});
		await TPANmts8QL.unpause.call({from: accounts[5]});
		const boolVJ09Zn3 = await TPANmts8QL.unfreezeAccount.call(addressQRPktlA, {from: accounts[4]});
		const addressBcjGJMr = await TPANmts8QL.burnFrom.call(addressplzZEbN, uintdc41z8v, {from: accounts[5]});
		const uint256hjM3n0h = await TPANmts8QL.balanceOf.call(addressZfZWDaZ, {from: accounts[0]});

		assert.equal(uint256idb9cJS, BigInt("0"))
		await expect(TPANmts8QL.decreaseAllowance.call(addressPVUzSDq, uintX8AbQei, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPANmts8QL = await TPA.new({from: accounts[1]});
		const addressYcZmva0 = "0x0000000000000000000000000000000000000001"
		const addressXb2TqXG = accounts[3]
		const addressHcQenSW = accounts[1]
		const addresscjgUd36 = accounts[2]
		const uint256idb9cJS = await TPANmts8QL.balanceOf.call(addressYcZmva0, {from: accounts[2]});
		const boolB0rCen = await TPANmts8QL.unfreezeAccount.call(addressXb2TqXG, {from: accounts[1]});
		const boolVJ09Zn3 = await TPANmts8QL.unfreezeAccount.call(addressHcQenSW, {from: accounts[4]});
		const uint256hjM3n0h = await TPANmts8QL.balanceOf.call(addresscjgUd36, {from: accounts[0]});

		assert.equal(uint256idb9cJS, BigInt("0"))
		await expect(TPANmts8QL.unfreezeAccount.call(addressXb2TqXG, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPANmts8QL = await TPA.new({from: accounts[1]});
		const addressVKkdV17 = "0x0000000000000000000000000000000000000001"
		const addressJ29rFma = accounts[0]
		const uintGkqVRIr = BigInt("933")
		const addressJV2VLN7 = accounts[5]
		const addressHvAgyG = accounts[2]
		await TPANmts8QL.renounceAdmin.call({from: accounts[4]});
		const uint256idb9cJS = await TPANmts8QL.balanceOf.call(addressVKkdV17, {from: accounts[2]});
		const boolVJ09Zn3 = await TPANmts8QL.unfreezeAccount.call(addressJ29rFma, {from: accounts[4]});
		const uint256w45wVyy = await TPANmts8QL.burn.call(uintGkqVRIr, {from: accounts[2]});
		const boolPSTrpEt = await TPANmts8QL.isAdmin.call(addressJV2VLN7, {from: accounts[1]});
		const uint256hjM3n0h = await TPANmts8QL.balanceOf.call(addressHvAgyG, {from: accounts[0]});

		await expect(TPANmts8QL.renounceAdmin.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAAyxUWyc = await TPA.new({from: accounts[3]});
		const uintBR8j3GG = BigInt("173")
		const uint256reTFH2P = await TPAAyxUWyc.burn.call(uintBR8j3GG, {from: accounts[3]});
		await TPAAyxUWyc.whenPaused.call({from: accounts[2]});
		await TPAAyxUWyc.whenNotPaused.call({from: accounts[2]});

		await expect(TPAAyxUWyc.whenPaused.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPANmts8QL = await TPA.new({from: accounts[1]});
		const addressqySubJ = "0x0000000000000000000000000000000000000001"
		const address1TzP0t = "0x0000000000000000000000000000000000000001"
		const addresshbqNQQb = accounts[1]
		const addressQy6fwS = accounts[0]
		const uint256idb9cJS = await TPANmts8QL.balanceOf.call(addressqySubJ, {from: accounts[2]});
		const uint256q2PISSR = await TPANmts8QL.allowance.call(addresshbqNQQb, address1TzP0t, {from: accounts[0]});
		const boolVJ09Zn3 = await TPANmts8QL.unfreezeAccount.call(addressQy6fwS, {from: accounts[4]});

		assert.equal(uint256idb9cJS, BigInt("0"))
		assert.equal(uint256q2PISSR, BigInt("0"))
		await expect(TPANmts8QL.unfreezeAccount.call(addressQy6fwS, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPASPEVnge = await TPA.new({from: accounts[5]});
		const uintDIAh8Ei = BigInt("101")
		const addressMgjHoiG = accounts[5]
		const addresstgoGIg = accounts[3]
		const addresssp9jXdH = accounts[3]
		const boolgGcYMmX = await TPASPEVnge.transfer.call(addressMgjHoiG, uintDIAh8Ei, {from: accounts[2]});
		const uint256tzco9nh = await TPASPEVnge.balanceOf.call(addresstgoGIg, {from: accounts[2]});
		const uint256k25FENA = await TPASPEVnge.balanceOf.call(addresssp9jXdH, {from: accounts[4]});

		await expect(TPASPEVnge.transfer.call(addressMgjHoiG, uintDIAh8Ei, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPANmts8QL = await TPA.new({from: accounts[1]});
		const addressNsXs3l = "0x0000000000000000000000000000000000000001"
		const addressV0P06p3 = accounts[0]
		const uint256idb9cJS = await TPANmts8QL.balanceOf.call(addressNsXs3l, {from: accounts[2]});
		const uint8Po1Pqg3 = await TPANmts8QL.decimals.call({from: accounts[0]});
		const boolVJ09Zn3 = await TPANmts8QL.unfreezeAccount.call(addressV0P06p3, {from: accounts[4]});

		assert.equal(uint256idb9cJS, BigInt("0"))
		assert.equal(uint8Po1Pqg3, BigInt("18"))
		await expect(TPANmts8QL.unfreezeAccount.call(addressV0P06p3, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPANmts8QL = await TPA.new({from: accounts[1]});
		const addressldUknzz = "0x0000000000000000000000000000000000000001"
		const uintZIKDcvG = BigInt("1783")
		const addressCe4jLru = accounts[3]
		const addressBKGxwY5 = "0x0000000000000000000000000000000000000001"
		const addressyxqsqcZ = accounts[1]
		const addresswbmAmh = await TPANmts8QL.transferOwnership.call(addressldUknzz, {from: accounts[1]});
		const boolC9tbL2 = await TPANmts8QL.approve.call(addressCe4jLru, uintZIKDcvG, {from: accounts[2]});
		const uint256idb9cJS = await TPANmts8QL.balanceOf.call(addressBKGxwY5, {from: accounts[2]});
		const boolVJ09Zn3 = await TPANmts8QL.unfreezeAccount.call(addressyxqsqcZ, {from: accounts[4]});

		assert.equal(boolC9tbL2, true)
		assert.equal(uint256idb9cJS, BigInt("0"))
		await expect(TPANmts8QL.unfreezeAccount.call(addressyxqsqcZ, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPANmts8QL = await TPA.new({from: accounts[1]});
		const address87Ph1k = "0x0000000000000000000000000000000000000000"
		const addressiJxmhgH = accounts[4]
		const uintjFDMKSY = BigInt("185")
		const addressSjZUZW7 = accounts[5]
		const addresstuQ0tOH = accounts[1]
		const addressRBWy3mp = accounts[0]
		const uint256idb9cJS = await TPANmts8QL.balanceOf.call(address87Ph1k, {from: accounts[2]});
		const boolkmkSTa2 = await TPANmts8QL.freezeAccount.call(addressiJxmhgH, {from: accounts[1]});
		const stringCOb0rCc = await TPANmts8QL.symbol.call({from: accounts[3]});
		const boolQnIrrF = await TPANmts8QL.transferFrom.call(addresstuQ0tOH, addressSjZUZW7, uintjFDMKSY, {from: accounts[0]});
		const boolVJ09Zn3 = await TPANmts8QL.unfreezeAccount.call(addressRBWy3mp, {from: accounts[4]});

		assert.equal(boolkmkSTa2, true)
		assert.equal(stringCOb0rCc, "TPA")
		assert.equal(uint256idb9cJS, BigInt("0"))
		await expect(TPANmts8QL.transferFrom.call(addresstuQ0tOH, addressSjZUZW7, uintjFDMKSY, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPANmts8QL = await TPA.new({from: accounts[1]});
		const addressGJ0iY5r = "0x0000000000000000000000000000000000000000"
		const addressfSTQ9Uz = accounts[4]
		const uintO257XN = BigInt("56")
		const addressnLiU6YL = accounts[1]
		const addressUfSbt4 = accounts[0]
		const uintXgvm1Ip = BigInt("1689")
		const addressZ5JExIc = accounts[5]
		const uintmkbv6AX = BigInt("185")
		const addressGQOnfsZ = accounts[5]
		const addressoPRDpuz = accounts[1]
		const address3B1LIJ = accounts[0]
		const uint256idb9cJS = await TPANmts8QL.balanceOf.call(addressGJ0iY5r, {from: accounts[2]});
		const boolkmkSTa2 = await TPANmts8QL.freezeAccount.call(addressfSTQ9Uz, {from: accounts[1]});
		const addressyo1Mzmy = await TPANmts8QL.burnFrom.call(addressnLiU6YL, uintO257XN, {from: accounts[1]});
		const addressyVWKPRd = await TPANmts8QL.notFrozen.call(addressUfSbt4, {from: accounts[4]});
		const stringCOb0rCc = await TPANmts8QL.symbol.call({from: accounts[3]});
		const boolOTpfp4B = await TPANmts8QL.decreaseAllowance.call(addressZ5JExIc, uintXgvm1Ip, {from: accounts[5]});
		const boolQnIrrF = await TPANmts8QL.transferFrom.call(addressoPRDpuz, addressGQOnfsZ, uintmkbv6AX, {from: accounts[0]});
		const boolVJ09Zn3 = await TPANmts8QL.unfreezeAccount.call(address3B1LIJ, {from: accounts[4]});

		assert.equal(boolkmkSTa2, true)
		assert.equal(uint256idb9cJS, BigInt("0"))
		await expect(TPANmts8QL.burnFrom.call(addressnLiU6YL, uintO257XN, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPANmts8QL = await TPA.new({from: accounts[1]});
		const addresspD41W4H = "0x0000000000000000000000000000000000000001"
		const uint256idb9cJS = await TPANmts8QL.balanceOf.call(addresspD41W4H, {from: accounts[2]});
		const boolEhiyaRb = await TPANmts8QL.paused.call({from: accounts[0]});
		const boolv7QC0lq = await TPANmts8QL.paused.call({from: accounts[1]});

		assert.equal(boolEhiyaRb, false)
		assert.equal(boolv7QC0lq, false)
		assert.equal(uint256idb9cJS, BigInt("0"))
	});

	it('test for TPA', async () => {
		const TPASPEVnge = await TPA.new({from: accounts[5]});
		const uintyEd8PsV = BigInt("1335")
		const addressD7bJoVR = accounts[5]
		const uintQAqH40c = BigInt("368")
		const addressTQLQdFI = accounts[2]
		const addressiaGtwUf = accounts[1]
		const boolv4bgDs4 = await TPASPEVnge.increaseAllowance.call(addressD7bJoVR, uintyEd8PsV, {from: accounts[2]});
		const boolXqEUszL = await TPASPEVnge.transferFrom.call(addressiaGtwUf, addressTQLQdFI, uintQAqH40c, {from: accounts[3]});
		await TPASPEVnge.onlyAdmin.call({from: accounts[1]});

		assert.equal(boolv4bgDs4, true)
		await expect(TPASPEVnge.transferFrom.call(addressiaGtwUf, addressTQLQdFI, uintQAqH40c, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPASPEVnge = await TPA.new({from: accounts[5]});
		const uintKAxmxmL = BigInt("1861")
		const addressRScJO6K = accounts[1]
		const uintjn05iaY = BigInt("101")
		const addressIR2ADJB = accounts[7]
		const stringquFdz8 = await TPASPEVnge.name.call({from: "0x0000000000000000000000000000000000000001"});
		const boolqN8YXF = await TPASPEVnge.decreaseAllowance.call(addressRScJO6K, uintKAxmxmL, {from: accounts[1]});
		const boolgGcYMmX = await TPASPEVnge.transfer.call(addressIR2ADJB, uintjn05iaY, {from: accounts[2]});

		assert.equal(stringquFdz8, "TPA")
		await expect(TPASPEVnge.decreaseAllowance.call(addressRScJO6K, uintKAxmxmL, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPANmts8QL = await TPA.new({from: accounts[1]});
		const addressoYxVFMV = "0x0000000000000000000000000000000000000002"
		const addresswHHw8g4 = accounts[1]
		const uint256idb9cJS = await TPANmts8QL.balanceOf.call(addressoYxVFMV, {from: accounts[2]});
		const addressnflwBGf = await TPANmts8QL.removeAdmin.call(addresswHHw8g4, {from: accounts[1]});
		const bool6mWU71 = await TPANmts8QL.paused.call({from: accounts[4]});

		assert.equal(bool6mWU71, false)
		assert.equal(uint256idb9cJS, BigInt("0"))
	});

	it('test for TPA', async () => {
		const TPANmts8QL = await TPA.new({from: accounts[1]});
		const addresszV7apEf = accounts[1]
		const uintDni0mUc = BigInt("699")
		const addressBKldtGT = accounts[1]
		const addressane1pIT = "0x0000000000000000000000000000000000000002"
		const uintX9tlhy4 = BigInt("1560")
		const addressS0MT7Sz = accounts[4]
		const addresstkFsynv = await TPANmts8QL.addAdmin.call(addresszV7apEf, {from: accounts[1]});
		const boolVHLM5Qm = await TPANmts8QL.unlock.call(addressBKldtGT, uintDni0mUc, {from: accounts[5]});
		const uint256idb9cJS = await TPANmts8QL.balanceOf.call(addressane1pIT, {from: accounts[2]});
		const boolf5JtPtj = await TPANmts8QL.increaseAllowance.call(addressS0MT7Sz, uintX9tlhy4, {from: accounts[3]});

		await expect(TPANmts8QL.addAdmin.call(addresszV7apEf, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPASPEVnge = await TPA.new({from: accounts[5]});
		const addressPIAuWOZ = accounts[4]
		const addresstXwtuhG = accounts[4]
		const uintEcgztph = BigInt("1451")
		const uintoVd4CSO = BigInt("70")
		const addresswH9WUVO = accounts[4]
		const uintvUYb76j = BigInt("208")
		const addressJ4ncCw3 = accounts[6]
		const uint256VDJ4fgH = await TPASPEVnge.allowance.call(addresstXwtuhG, addressPIAuWOZ, {from: accounts[1]});
		const booltxNS8MZ = await TPASPEVnge.lock.call(addresswH9WUVO, uintoVd4CSO, uintEcgztph, {from: accounts[5]});
		const boolgGcYMmX = await TPASPEVnge.transfer.call(addressJ4ncCw3, uintvUYb76j, {from: accounts[2]});

		assert.equal(uint256VDJ4fgH, BigInt("0"))
		await expect(TPASPEVnge.lock.call(addresswH9WUVO, uintoVd4CSO, uintEcgztph, {from: accounts[5]})).to.be.rejectedWith(Error);
	});
})