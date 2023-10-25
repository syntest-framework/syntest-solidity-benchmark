const DatrixoEquityToken = artifacts.require("DatrixoEquityToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('DatrixoEquityToken', (accounts) => {
	it('test for DatrixoEquityToken', async () => {
		const addressrGKHwm = accounts[2]
		const uintwxSeVYL = BigInt("596")
		const DatrixoEquityTokenFc4iIrJ = await DatrixoEquityToken.new(addressrGKHwm, uintwxSeVYL, {from: accounts[4]});
		const addressfQUwMlS = accounts[5]
		const uintTWG1O7e = BigInt("1711")
		const addressVC9MMpK = accounts[2]
		const addresscesUPl1 = accounts[1]
//		const boolWYWuA6 = await DatrixoEquityTokenFc4iIrJ.removeShareholder.call(addressfQUwMlS, {from: accounts[0]});
//		const boolZTE4SZq = await DatrixoEquityTokenFc4iIrJ.transfer.call(addressVC9MMpK, uintTWG1O7e, {from: accounts[5]});
//		const bool7U866F = await DatrixoEquityTokenFc4iIrJ.removeShareholder.call(addresscesUPl1, {from: accounts[3]});

		await expect(DatrixoEquityTokenFc4iIrJ.removeShareholder.call(addressfQUwMlS, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addressuAU0KPX = accounts[4]
		const uintkqk62s8 = BigInt("1868")
		const DatrixoEquityTokendyfnovq = await DatrixoEquityToken.new(addressuAU0KPX, uintkqk62s8, {from: accounts[4]});
		const uintQS1CJ9T = BigInt("514")
		const addresspX8jUn3 = accounts[2]
		const addressQF7A4ax = accounts[0]
		const uintxHu1apI = BigInt("488")
		const addressxtPNiyj = accounts[2]
		const uinti5BVo6R = BigInt("356")
		const addressV76L9B = accounts[0]
		const addressPvxrKlk = accounts[1]
		const uintpc2rZEa = BigInt("1975")
		const addresswm4JtM = accounts[3]
		const addressF6W2W9m = accounts[4]
		const addressHlyJ7nv = accounts[2]
//		const boolQsdMad2 = await DatrixoEquityTokendyfnovq.transferFrom.call(addressQF7A4ax, addresspX8jUn3, uintQS1CJ9T, {from: accounts[4]});
//		const boolrZaoIdu = await DatrixoEquityTokendyfnovq.transfer.call(addressxtPNiyj, uintxHu1apI, {from: accounts[5]});
//		const addressarrayy44J8w = await DatrixoEquityTokendyfnovq.getShareholdersArray.call({from: accounts[2]});
//		const booli9850ie = await DatrixoEquityTokendyfnovq.transferFrom.call(addressPvxrKlk, addressV76L9B, uinti5BVo6R, {from: accounts[3]});
//		const boolDBFVpzg = await DatrixoEquityTokendyfnovq.transferFrom.call(addressF6W2W9m, addresswm4JtM, uintpc2rZEa, {from: accounts[4]});
//		const booliGO0zal = await DatrixoEquityTokendyfnovq.removeShareholder.call(addressHlyJ7nv, {from: accounts[5]});

		await expect(DatrixoEquityTokendyfnovq.transferFrom.call(addressQF7A4ax, addresspX8jUn3, uintQS1CJ9T, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addressD9uID7p = accounts[2]
		const uintHpILudY = BigInt("1252")
		const DatrixoEquityTokenKQelNWN = await DatrixoEquityToken.new(addressD9uID7p, uintHpILudY, {from: accounts[2]});
		const uintzRTTRTO = BigInt("1319")
		const addressYVdLYF4 = accounts[4]
		const addressiwbp1Ga = "0x0000000000000000000000000000000000000001"
		const uintRfFzI1O = BigInt("1328")
		const addresslXXNBAg = accounts[3]
//		await DatrixoEquityTokenKQelNWN.afterStartTime.call({from: accounts[1]});
//		await DatrixoEquityTokenKQelNWN.afterStartTime.call({from: accounts[3]});
//		const bool56tJ5l = await DatrixoEquityTokenKQelNWN.transferFrom.call(addressiwbp1Ga, addressYVdLYF4, uintzRTTRTO, {from: accounts[3]});
//		const boolFKJluQo = await DatrixoEquityTokenKQelNWN.transfer.call(addresslXXNBAg, uintRfFzI1O, {from: accounts[3]});

		await expect(DatrixoEquityTokenKQelNWN.afterStartTime.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addressUl9M1ev = accounts[2]
		const uintoWKhfFI = BigInt("129")
		const DatrixoEquityTokenHAjeAI9 = await DatrixoEquityToken.new(addressUl9M1ev, uintoWKhfFI, {from: accounts[3]});
		const uintz5Ld1Y1 = BigInt("222")
		const addressPG7Mj5a = accounts[3]
		const addresssS4MJrI = accounts[4]
		const uintTYBwZZy = BigInt("1486")
		const addressWcYcJXK = accounts[4]
		const addresseFW5YR = accounts[2]
		const addressarraynLwihvZ = await DatrixoEquityTokenHAjeAI9.getShareholdersArray.call({from: accounts[1]});
//		const boolgFCg1TJ = await DatrixoEquityTokenHAjeAI9.transferFrom.call(addresssS4MJrI, addressPG7Mj5a, uintz5Ld1Y1, {from: accounts[0]});
//		const bool1aoBrR = await DatrixoEquityTokenHAjeAI9.transferFrom.call(addresseFW5YR, addressWcYcJXK, uintTYBwZZy, {from: accounts[1]});
//		await DatrixoEquityTokenHAjeAI9.afterStartTime.call({from: accounts[0]});

		assert.equal(addressarraynLwihvZ, )
		await expect(DatrixoEquityTokenHAjeAI9.transferFrom.call(addresssS4MJrI, addressPG7Mj5a, uintz5Ld1Y1, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addressH4sYOj = accounts[3]
		const uintwbdAczV = BigInt("1691")
		const DatrixoEquityTokenVDbDOP = await DatrixoEquityToken.new(addressH4sYOj, uintwbdAczV, {from: accounts[0]});
		const uintPzz1HLM = BigInt("2003")
		const addressQJ4TIIy = accounts[5]
		const addressp87w92O = accounts[4]
		const uintvDDGWGT = BigInt("1388")
		const boolG5sYO2d = await DatrixoEquityTokenVDbDOP.transfer.call(addressQJ4TIIy, uintPzz1HLM, {from: accounts[3]});
//		const boolqy0Uy3r = await DatrixoEquityTokenVDbDOP.removeShareholder.call(addressp87w92O, {from: accounts[4]});
//		const uintTSfZck = await DatrixoEquityTokenVDbDOP.setStart.call(uintvDDGWGT, {from: accounts[4]});

		assert.equal(boolG5sYO2d, true)
		await expect(DatrixoEquityTokenVDbDOP.removeShareholder.call(addressp87w92O, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addressPdr8RNx = accounts[3]
		const uinto30g2xD = BigInt("586")
		const DatrixoEquityTokenih4rcz6 = await DatrixoEquityToken.new(addressPdr8RNx, uinto30g2xD, {from: "0x0000000000000000000000000000000000000001"});
		const addressGsOJOPv = accounts[1]
		const boolZkuFxx = await DatrixoEquityTokenih4rcz6.removeShareholder.call(addressGsOJOPv, {from: accounts[0]});
		await DatrixoEquityTokenih4rcz6.afterStartTime.call({from: accounts[1]});
		const addressarraynN74VHh = await DatrixoEquityTokenih4rcz6.getShareholdersArray.call({from: accounts[2]});
		await DatrixoEquityTokenih4rcz6.onlyOwner.call({from: accounts[4]});
	});

	it('test for DatrixoEquityToken', async () => {
		const addressCl2JGf = accounts[3]
		const uintTdsxLg = BigInt("1691")
		const DatrixoEquityTokenVDbDOP = await DatrixoEquityToken.new(addressCl2JGf, uintTdsxLg, {from: accounts[0]});
		const uintBt7h2Hp = BigInt("2003")
		const addressgrB5Wg = accounts[3]
		const addressjEXAR1P = accounts[1]
		const addresshaqeAi7 = accounts[5]
		const uint5lSgUP = BigInt("674")
		const addressU7FI4IS = accounts[3]
		const uintVM1v4Ta = BigInt("1388")
		const uintttkOwVX = BigInt("1298")
		const addressyq44vwy = accounts[4]
		const addressPFvbmyj = accounts[0]
//		const boolG5sYO2d = await DatrixoEquityTokenVDbDOP.transfer.call(addressgrB5Wg, uintBt7h2Hp, {from: accounts[3]});
//		await DatrixoEquityTokenVDbDOP.afterStartTime.call({from: accounts[1]});
//		await DatrixoEquityTokenVDbDOP.onlyOwner.call({from: accounts[3]});
//		await DatrixoEquityTokenVDbDOP.afterStartTime.call({from: accounts[5]});
//		const boolU23yMXZ = await DatrixoEquityTokenVDbDOP.removeShareholder.call(addressjEXAR1P, {from: accounts[0]});
//		const boolqy0Uy3r = await DatrixoEquityTokenVDbDOP.removeShareholder.call(addresshaqeAi7, {from: accounts[4]});
//		await DatrixoEquityTokenVDbDOP.onlyOwner.call({from: accounts[3]});
//		const boolXby6wBT = await DatrixoEquityTokenVDbDOP.transfer.call(addressU7FI4IS, uint5lSgUP, {from: accounts[3]});
//		const uintTSfZck = await DatrixoEquityTokenVDbDOP.setStart.call(uintVM1v4Ta, {from: accounts[4]});
//		const boolhhnMlxE = await DatrixoEquityTokenVDbDOP.transferFrom.call(addressPFvbmyj, addressyq44vwy, uintttkOwVX, {from: accounts[5]});

		await expect(DatrixoEquityTokenVDbDOP.transfer.call(addressgrB5Wg, uintBt7h2Hp, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addressf8QYWnC = accounts[3]
		const uintx5f5Opv = BigInt("1691")
		const DatrixoEquityTokenVDbDOP = await DatrixoEquityToken.new(addressf8QYWnC, uintx5f5Opv, {from: accounts[0]});
		const uintsuRaUE = BigInt("2003")
		const addressUjbhBPU = accounts[6]
		const uintbZ30cK9 = BigInt("1255")
		const addresstTcF5Ym = "0x0000000000000000000000000000000000000001"
		const addressXwRmA3j = accounts[3]
		const addresstul2ln = accounts[3]
		const uintMPUJci = BigInt("674")
		const addresspat8Rh5 = accounts[1]
		const uintTBssnN1 = BigInt("1388")
		const boolG5sYO2d = await DatrixoEquityTokenVDbDOP.transfer.call(addressUjbhBPU, uintsuRaUE, {from: accounts[3]});
		const boolgfABjQ1 = await DatrixoEquityTokenVDbDOP.transferFrom.call(addressXwRmA3j, addresstTcF5Ym, uintbZ30cK9, {from: accounts[3]});
//		const boolqy0Uy3r = await DatrixoEquityTokenVDbDOP.removeShareholder.call(addresstul2ln, {from: accounts[4]});
//		const addressarrayF3JVkEH = await DatrixoEquityTokenVDbDOP.getShareholdersArray.call({from: accounts[4]});
//		const boolXby6wBT = await DatrixoEquityTokenVDbDOP.transfer.call(addresspat8Rh5, uintMPUJci, {from: accounts[3]});
//		const uintTSfZck = await DatrixoEquityTokenVDbDOP.setStart.call(uintTBssnN1, {from: accounts[4]});

		assert.equal(boolG5sYO2d, true)
		assert.equal(boolgfABjQ1, true)
		await expect(DatrixoEquityTokenVDbDOP.removeShareholder.call(addresstul2ln, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addressMDg38BV = accounts[3]
		const uintEVVU4QA = BigInt("1691")
		const DatrixoEquityTokenVDbDOP = await DatrixoEquityToken.new(addressMDg38BV, uintEVVU4QA, {from: accounts[0]});
		const uint3jqtAg = BigInt("1711")
		const uintvdANkP = BigInt("2003")
		const addressGS2sdW = accounts[5]
		const addressMOt0Au = accounts[4]
		const uintIgTgQF2 = BigInt("1388")
		const addressarrayMSJ4uxq = await DatrixoEquityTokenVDbDOP.getShareholdersArray.call({from: accounts[2]});
//		const uintmdEYL52 = await DatrixoEquityTokenVDbDOP.setStart.call(uint3jqtAg, {from: accounts[3]});
//		const boolG5sYO2d = await DatrixoEquityTokenVDbDOP.transfer.call(addressGS2sdW, uintvdANkP, {from: accounts[3]});
//		const boolqy0Uy3r = await DatrixoEquityTokenVDbDOP.removeShareholder.call(addressMOt0Au, {from: accounts[4]});
//		const uintTSfZck = await DatrixoEquityTokenVDbDOP.setStart.call(uintIgTgQF2, {from: accounts[4]});

		assert.equal(addressarrayMSJ4uxq, )
		await expect(DatrixoEquityTokenVDbDOP.setStart.call(uint3jqtAg, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addressNHxbFrN = accounts[3]
		const uintgLyee94 = BigInt("1691")
		const DatrixoEquityTokenVDbDOP = await DatrixoEquityToken.new(addressNHxbFrN, uintgLyee94, {from: accounts[0]});
		const addressVTtuw7b = accounts[4]
		const uintkjzFVWV = BigInt("1362")
		const addressarrayCSvjSdc = await DatrixoEquityTokenVDbDOP.getShareholdersArray.call({from: accounts[0]});
//		const booltOLuDHn = await DatrixoEquityTokenVDbDOP.removeShareholder.call(addressVTtuw7b, {from: accounts[3]});
//		const uintTSfZck = await DatrixoEquityTokenVDbDOP.setStart.call(uintkjzFVWV, {from: accounts[4]});

		assert.equal(addressarrayCSvjSdc, )
		await expect(DatrixoEquityTokenVDbDOP.removeShareholder.call(addressVTtuw7b, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addresspsFxMUy = accounts[3]
		const uintxZP65uv = BigInt("1691")
		const DatrixoEquityTokenVDbDOP = await DatrixoEquityToken.new(addresspsFxMUy, uintxZP65uv, {from: accounts[0]});
		const uintKj2Ak6T = BigInt("1255")
		const addressn55cDIa = "0x00000000000000000000000000000000000000-1"
		const addressx7Xf18t = accounts[3]
		const addressKXIm1d5 = "0x0000000000000000000000000000000000000001"
		const addressXJ70coY = "0x0000000000000000000000000000000000000002"
		const uintT3DU5T = BigInt("663")
		const addressAGDdqdC = accounts[3]
		const addressVJFdLFO = accounts[1]
//		const boolgfABjQ1 = await DatrixoEquityTokenVDbDOP.transferFrom.call(addressx7Xf18t, addressn55cDIa, uintKj2Ak6T, {from: accounts[3]});
//		const boolTFPue3n = await DatrixoEquityTokenVDbDOP.removeShareholder.call(addressKXIm1d5, {from: accounts[3]});
//		const boolbolsBNw = await DatrixoEquityTokenVDbDOP.removeShareholder.call(addressXJ70coY, {from: accounts[0]});
//		await DatrixoEquityTokenVDbDOP.afterStartTime.call({from: accounts[2]});
//		await DatrixoEquityTokenVDbDOP.afterStartTime.call({from: accounts[3]});
//		const addressarraymqkSi6 = await DatrixoEquityTokenVDbDOP.getShareholdersArray.call({from: accounts[4]});
//		const boolApqcLz9 = await DatrixoEquityTokenVDbDOP.transferFrom.call(addressVJFdLFO, addressAGDdqdC, uintT3DU5T, {from: accounts[1]});
//		await DatrixoEquityTokenVDbDOP.afterStartTime.call({from: accounts[2]});

		await expect(DatrixoEquityTokenVDbDOP.transferFrom.call(addressx7Xf18t, addressn55cDIa, uintKj2Ak6T, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addressR4xND9g = accounts[3]
		const uintNcwN52D = BigInt("1691")
		const DatrixoEquityTokenVDbDOP = await DatrixoEquityToken.new(addressR4xND9g, uintNcwN52D, {from: accounts[0]});
		const uintXwJ4f6c = BigInt("1255")
		const addressDSz0au7 = "0x0000000000000000000000000000000000000000"
		const addressfISJeR4 = accounts[3]
		const addressFArEqU = "0x0000000000000000000000000000000000000000"
		const uintznDjiV = BigInt("663")
		const addressohIxCW = accounts[3]
		const addressZPO5oHk = accounts[1]
		const boolgfABjQ1 = await DatrixoEquityTokenVDbDOP.transferFrom.call(addressfISJeR4, addressDSz0au7, uintXwJ4f6c, {from: accounts[3]});
		const addressarrayF7M4Cq = await DatrixoEquityTokenVDbDOP.getShareholdersArray.call({from: accounts[2]});
//		const boolTFPue3n = await DatrixoEquityTokenVDbDOP.removeShareholder.call(addressFArEqU, {from: accounts[3]});
//		await DatrixoEquityTokenVDbDOP.afterStartTime.call({from: accounts[2]});
//		const addressarraymqkSi6 = await DatrixoEquityTokenVDbDOP.getShareholdersArray.call({from: accounts[4]});
//		await DatrixoEquityTokenVDbDOP.afterStartTime.call({from: accounts[0]});
//		const boolApqcLz9 = await DatrixoEquityTokenVDbDOP.transferFrom.call(addressZPO5oHk, addressohIxCW, uintznDjiV, {from: accounts[1]});
//		await DatrixoEquityTokenVDbDOP.afterStartTime.call({from: accounts[2]});

		assert.equal(addressarrayF7M4Cq, )
		assert.equal(boolgfABjQ1, true)
		await expect(DatrixoEquityTokenVDbDOP.removeShareholder.call(addressFArEqU, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})