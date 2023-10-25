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
		const addressUNjMYbx = "0x0000000000000000000000000000000000000001"
		const uinttVgIxib = BigInt("1887")
		const addressG1zqnMF = accounts[2]
		const addressb4lKmCg = accounts[0]
		const uint256idb9cJS = await TPANmts8QL.balanceOf.call(addressUNjMYbx, {from: accounts[2]});
		const boolEiYYwZQ = await TPANmts8QL.increaseAllowance.call(addressG1zqnMF, uinttVgIxib, {from: accounts[3]});
		const boolVJ09Zn3 = await TPANmts8QL.unfreezeAccount.call(addressb4lKmCg, {from: accounts[4]});

		assert.equal(boolEiYYwZQ, true)
		assert.equal(uint256idb9cJS, BigInt("0"))
		await expect(TPANmts8QL.unfreezeAccount.call(addressb4lKmCg, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPANmts8QL = await TPA.new({from: accounts[1]});
		const uintIvVH1jf = BigInt("756")
		const addressseMf48x = accounts[3]
		const uintLDbB9hP = BigInt("1162")
		const addressD1rKGP = accounts[2]
		const addressJXMDsYq = "0x0000000000000000000000000000000000000001"
		const addresswGPlJLB = accounts[2]
		const addressHZF3DsC = accounts[1]
		const boolO7X3BzL = await TPANmts8QL.increaseAllowance.call(addressseMf48x, uintIvVH1jf, {from: accounts[0]});
		const bool9Cqy9k = await TPANmts8QL.transfer.call(addressD1rKGP, uintLDbB9hP, {from: accounts[4]});
		const uint256idb9cJS = await TPANmts8QL.balanceOf.call(addressJXMDsYq, {from: accounts[2]});
		const booljQsDjUH = await TPANmts8QL.unfreezeAccount.call(addresswGPlJLB, {from: accounts[0]});
		const boolVJ09Zn3 = await TPANmts8QL.unfreezeAccount.call(addressHZF3DsC, {from: accounts[4]});

		assert.equal(boolO7X3BzL, true)
		await expect(TPANmts8QL.transfer.call(addressD1rKGP, uintLDbB9hP, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPANmts8QL = await TPA.new({from: accounts[1]});
		const addresseqzSmxB = "0x0000000000000000000000000000000000000001"
		const uintu4PqR6y = BigInt("271")
		const uintJaU1jIS = BigInt("380")
		const addresseHjfx5a = "0x0000000000000000000000000000000000000001"
		const addressYaevsJR = accounts[2]
		const addressjxkkdUW = accounts[0]
		const uint256idb9cJS = await TPANmts8QL.balanceOf.call(addresseqzSmxB, {from: accounts[2]});
		const boolaYpzHSk = await TPANmts8QL.transferWithLock.call(addresseHjfx5a, uintJaU1jIS, uintu4PqR6y, {from: accounts[1]});
		const uint256vx8gxcT = await TPANmts8QL.balanceOf.call(addressYaevsJR, {from: accounts[0]});
		const boolVJ09Zn3 = await TPANmts8QL.unfreezeAccount.call(addressjxkkdUW, {from: accounts[4]});

		assert.equal(boolaYpzHSk, true)
		assert.equal(uint256idb9cJS, BigInt("0"))
		assert.equal(uint256vx8gxcT, BigInt("0"))
		await expect(TPANmts8QL.unfreezeAccount.call(addressjxkkdUW, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAYVwToUb = await TPA.new({from: accounts[1]});
		const uintJK30L01 = BigInt("402")
		const addressqgg4JH = accounts[0]
		const uintQGN2lmb = BigInt("1752")
		const addressmSHqS7 = accounts[1]
		const uintWaSM8XO = BigInt("1024")
		const uintoVerJ5 = BigInt("240")
		const addresspzAR3Th = accounts[3]
		const boolKSf2xSD = await TPAYVwToUb.approve.call(addressqgg4JH, uintJK30L01, {from: accounts[1]});
		const boolRRXvWh = await TPAYVwToUb.approve.call(addressmSHqS7, uintQGN2lmb, {from: accounts[2]});
		const boolMiB9TR6 = await TPAYVwToUb.transferWithLock.call(addresspzAR3Th, uintoVerJ5, uintWaSM8XO, {from: accounts[4]});

		assert.equal(boolKSf2xSD, true)
		assert.equal(boolRRXvWh, true)
		await expect(TPAYVwToUb.transferWithLock.call(addresspzAR3Th, uintoVerJ5, uintWaSM8XO, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPANmts8QL = await TPA.new({from: accounts[1]});
		const addressj8j07TU = "0x0000000000000000000000000000000000000001"
		const uintFv6PXCu = BigInt("1197")
		const addressLx85V2O = accounts[4]
		const uintiaDpUu = BigInt("271")
		const uinti5r5l5Y = BigInt("380")
		const addressXx1Nmmb = "0x0000000000000000000000000000000000000001"
		const addressHa5Invb = accounts[0]
		const uint256idb9cJS = await TPANmts8QL.balanceOf.call(addressj8j07TU, {from: accounts[2]});
		const uint8dwyQJW = await TPANmts8QL.decimals.call({from: accounts[0]});
		const boolsrF9VGs = await TPANmts8QL.transfer.call(addressLx85V2O, uintFv6PXCu, {from: accounts[0]});
		const boolaYpzHSk = await TPANmts8QL.transferWithLock.call(addressXx1Nmmb, uinti5r5l5Y, uintiaDpUu, {from: accounts[1]});
		const boolVJ09Zn3 = await TPANmts8QL.unfreezeAccount.call(addressHa5Invb, {from: accounts[4]});
		const stringVwiK1gE = await TPANmts8QL.symbol.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256idb9cJS, BigInt("0"))
		assert.equal(uint8dwyQJW, BigInt("18"))
		await expect(TPANmts8QL.transfer.call(addressLx85V2O, uintFv6PXCu, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPANmts8QL = await TPA.new({from: accounts[1]});
		const addresscKqGgx5 = accounts[2]
		const uintNazdD3I = BigInt("1921")
		const addressT4pzMJc = accounts[1]
		const addressFB1l2O = accounts[2]
		const addressA4aC8Hn = "0x0000000000000000000000000000000000000001"
		const boolAypvpW = await TPANmts8QL.isAdmin.call(addresscKqGgx5, {from: accounts[1]});
		const boolyx3BMpQ = await TPANmts8QL.transferFrom.call(addressFB1l2O, addressT4pzMJc, uintNazdD3I, {from: accounts[4]});
		const uint256idb9cJS = await TPANmts8QL.balanceOf.call(addressA4aC8Hn, {from: accounts[2]});

		assert.equal(boolAypvpW, false)
		await expect(TPANmts8QL.transferFrom.call(addressFB1l2O, addressT4pzMJc, uintNazdD3I, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPANmts8QL = await TPA.new({from: accounts[1]});
		const addressem7xmdx = accounts[1]
		const addressfkWZhZi = accounts[2]
		const addressQ6SKC5u = "0x0000000000000000000000000000000000000001"
		const uint256gEhEIy1 = await TPANmts8QL.allowance.call(addressfkWZhZi, addressem7xmdx, {from: accounts[4]});
		const uint256idb9cJS = await TPANmts8QL.balanceOf.call(addressQ6SKC5u, {from: accounts[2]});

		assert.equal(uint256gEhEIy1, BigInt("0"))
		assert.equal(uint256idb9cJS, BigInt("0"))
	});

	it('test for TPA', async () => {
		const TPANmts8QL = await TPA.new({from: accounts[1]});
		const addressY3ykttW = "0x0000000000000000000000000000000000000000"
		const uintGcMzPWE = BigInt("1911")
		const addresssEgduOb = accounts[0]
		const uint256idb9cJS = await TPANmts8QL.balanceOf.call(addressY3ykttW, {from: accounts[2]});
		const stringxgkNCIa = await TPANmts8QL.name.call({from: accounts[1]});
		const boolu7ItGxU = await TPANmts8QL.decreaseAllowance.call(addresssEgduOb, uintGcMzPWE, {from: accounts[4]});

		assert.equal(stringxgkNCIa, "TPA")
		assert.equal(uint256idb9cJS, BigInt("0"))
		await expect(TPANmts8QL.decreaseAllowance.call(addresssEgduOb, uintGcMzPWE, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPANmts8QL = await TPA.new({from: accounts[1]});
		const addressVaepFxi = accounts[2]
		const uintqkynHuF = BigInt("992")
		const addressdtX7aog = accounts[1]
		const uintI2gRKtO = BigInt("1921")
		const addressLdmJUSW = accounts[1]
		const addressn3CSwWJ = accounts[2]
		const boolAypvpW = await TPANmts8QL.isAdmin.call(addressVaepFxi, {from: accounts[1]});
		const boolf8HC4Yq = await TPANmts8QL.unlock.call(addressdtX7aog, uintqkynHuF, {from: accounts[1]});
		const boolyx3BMpQ = await TPANmts8QL.transferFrom.call(addressn3CSwWJ, addressLdmJUSW, uintI2gRKtO, {from: accounts[4]});
		await TPANmts8QL.whenNotPaused.call({from: accounts[3]});

		assert.equal(boolAypvpW, false)
		await expect(TPANmts8QL.unlock.call(addressdtX7aog, uintqkynHuF, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPANmts8QL = await TPA.new({from: accounts[1]});
		const addressW9DWA6i = accounts[2]
		const uintIZrFH2B = BigInt("1921")
		const addressQoRJO9s = accounts[1]
		const addressiqN5woR = accounts[2]
		const addressuhzs6aI = "0x0000000000000000000000000000000000000001"
		const boolcLvnRNM = await TPANmts8QL.paused.call({from: accounts[1]});
		const boolAypvpW = await TPANmts8QL.isAdmin.call(addressW9DWA6i, {from: accounts[1]});
		const boolyx3BMpQ = await TPANmts8QL.transferFrom.call(addressiqN5woR, addressQoRJO9s, uintIZrFH2B, {from: accounts[4]});
		const uint256idb9cJS = await TPANmts8QL.balanceOf.call(addressuhzs6aI, {from: accounts[2]});

		assert.equal(boolAypvpW, false)
		assert.equal(boolcLvnRNM, false)
		await expect(TPANmts8QL.transferFrom.call(addressiqN5woR, addressQoRJO9s, uintIZrFH2B, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPANmts8QL = await TPA.new({from: accounts[1]});
		const addressh0CP5Zk = "0x0000000000000000000000000000000000000000"
		const uintuknmSnN = BigInt("1906")
		await TPANmts8QL.pause.call({from: accounts[1]});
		const uint256idb9cJS = await TPANmts8QL.balanceOf.call(addressh0CP5Zk, {from: accounts[2]});
		const uint256X4wZELx = await TPANmts8QL.burn.call(uintuknmSnN, {from: accounts[2]});

		await expect(TPANmts8QL.pause.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPANmts8QL = await TPA.new({from: accounts[1]});
		const addresscDX9p4E = "0x0000000000000000000000000000000000000001"
		const uintk9OHvky = BigInt("719")
		const address1JocX3 = accounts[5]
		const uint256idb9cJS = await TPANmts8QL.balanceOf.call(addresscDX9p4E, {from: accounts[2]});
		const addressjsbrzCy = await TPANmts8QL.burnFrom.call(address1JocX3, uintk9OHvky, {from: accounts[1]});

		assert.equal(uint256idb9cJS, BigInt("0"))
		await expect(TPANmts8QL.burnFrom.call(address1JocX3, uintk9OHvky, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPANmts8QL = await TPA.new({from: accounts[1]});
		const addressXziHuCI = accounts[1]
		const uintDZ6RkwS = BigInt("518")
		const addressSgw4fzy = accounts[4]
		const address8HS3zg = accounts[3]
		const uintwwLM9uQ = BigInt("222")
		const addressQJtQ9kC = accounts[2]
		const boolhEgV9Dx = await TPANmts8QL.isOwner.call(addressXziHuCI, {from: accounts[0]});
		const boolXWoKoRZ = await TPANmts8QL.transferFrom.call(address8HS3zg, addressSgw4fzy, uintDZ6RkwS, {from: accounts[4]});
		const boolS6bgNRU = await TPANmts8QL.transfer.call(addressQJtQ9kC, uintwwLM9uQ, {from: accounts[3]});

		assert.equal(boolhEgV9Dx, true)
		await expect(TPANmts8QL.transferFrom.call(address8HS3zg, addressSgw4fzy, uintDZ6RkwS, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPANmts8QL = await TPA.new({from: accounts[1]});
		const addresspBTh8CC = "0x0000000000000000000000000000000000000001"
		const addresscUFE094 = accounts[3]
		const uint256idb9cJS = await TPANmts8QL.balanceOf.call(addresspBTh8CC, {from: accounts[2]});
		const addressjAcFKZq = await TPANmts8QL.upgradeTo.call(addresscUFE094, {from: accounts[1]});

		assert.equal(uint256idb9cJS, BigInt("0"))
	});

	it('test for TPA', async () => {
		const TPANmts8QL = await TPA.new({from: accounts[1]});
		const addresslHcV8TG = accounts[4]
		const addressEg2hNQg = "0x0000000000000000000000000000000000000002"
		const addressH9zWQ3M = await TPANmts8QL.transferOwnership.call(addresslHcV8TG, {from: accounts[1]});
		const uint256idb9cJS = await TPANmts8QL.balanceOf.call(addressEg2hNQg, {from: accounts[2]});

		assert.equal(uint256idb9cJS, BigInt("0"))
	});

	it('test for TPA', async () => {
		const TPANmts8QL = await TPA.new({from: accounts[1]});
		const uintMt3IIS9 = BigInt("254")
		const addressf4wMsK = accounts[3]
		await TPANmts8QL.renounceAdmin.call({from: accounts[1]});
		const boolS6bgNRU = await TPANmts8QL.transfer.call(addressf4wMsK, uintMt3IIS9, {from: accounts[3]});

		await expect(TPANmts8QL.renounceAdmin.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPANmts8QL = await TPA.new({from: accounts[1]});
		const addressYwzXFfP = accounts[1]
		const uintonrrC5f = BigInt("259")
		const addressib2bNc = accounts[2]
		const addressoU3aYMh = await TPANmts8QL.removeAdmin.call(addressYwzXFfP, {from: accounts[1]});
		const uint256qNgE1qz = await TPANmts8QL.totalSupply.call({from: accounts[5]});
		const boolS6bgNRU = await TPANmts8QL.transfer.call(addressib2bNc, uintonrrC5f, {from: accounts[3]});

		assert.equal(uint256qNgE1qz, BigInt("10000000000000000000000000000"))
		await expect(TPANmts8QL.transfer.call(addressib2bNc, uintonrrC5f, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPANmts8QL = await TPA.new({from: accounts[1]});
		const addressjJ03JWr = "0x0000000000000000000000000000000000000000"
		const stringBjGWU8W = await TPANmts8QL.symbol.call({from: accounts[4]});
		const uint256idb9cJS = await TPANmts8QL.balanceOf.call(addressjJ03JWr, {from: accounts[2]});

		assert.equal(stringBjGWU8W, "TPA")
		assert.equal(uint256idb9cJS, BigInt("0"))
	});

	it('test for TPA', async () => {
		const TPANmts8QL = await TPA.new({from: accounts[1]});
		const addresszV7apEf = accounts[1]
		const uintDni0mUc = BigInt("699")
		const addressBKldtGT = accounts[1]
		const addressane1pIT = "0x0000000000000000000000000000000000000001"
		const uintX9tlhy4 = BigInt("1560")
		const addressS0MT7Sz = accounts[4]
		const addresstkFsynv = await TPANmts8QL.addAdmin.call(addresszV7apEf, {from: accounts[1]});
		const boolVHLM5Qm = await TPANmts8QL.unlock.call(addressBKldtGT, uintDni0mUc, {from: accounts[5]});
		const uint256idb9cJS = await TPANmts8QL.balanceOf.call(addressane1pIT, {from: accounts[2]});
		const boolf5JtPtj = await TPANmts8QL.increaseAllowance.call(addressS0MT7Sz, uintX9tlhy4, {from: accounts[3]});

		await expect(TPANmts8QL.addAdmin.call(addresszV7apEf, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPATmpMcw4 = await TPA.new({from: accounts[4]});
		const uintOIWdrcY = BigInt("408")
		const addressXIu05VM = accounts[0]
		const uint5IUL4V = BigInt("1565")
		const uinthj7phr = BigInt("118")
		const addresswuzl69P = accounts[1]
		const uintZ3wI19f = BigInt("5")
		const addressYjiWdMk = accounts[1]
		const addressmbs3ohU = accounts[2]
		const boolwcVIjc = await TPATmpMcw4.approve.call(addressXIu05VM, uintOIWdrcY, {from: "0x0000000000000000000000000000000000000001"});
		const boolaPx8753 = await TPATmpMcw4.lock.call(addresswuzl69P, uinthj7phr, uint5IUL4V, {from: accounts[4]});
		const uint256mVOrUQt = await TPATmpMcw4.burn.call(uintZ3wI19f, {from: accounts[5]});
		const addressAZF0j6l = await TPATmpMcw4.notFrozen.call(addressYjiWdMk, {from: accounts[4]});
		const booldpamsGQ = await TPATmpMcw4.isOwner.call(addressmbs3ohU, {from: accounts[4]});

		assert.equal(boolwcVIjc, true)
		await expect(TPATmpMcw4.lock.call(addresswuzl69P, uinthj7phr, uint5IUL4V, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})