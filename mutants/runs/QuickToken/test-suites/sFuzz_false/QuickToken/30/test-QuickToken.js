const QuickToken = artifacts.require("QuickToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('QuickToken', (accounts) => {
	it('test for QuickToken', async () => {
		const addressdkz8CEH = accounts[2]
		const address7wmGYa = accounts[0]
		const QuickTokenh9echnD = await QuickToken.new(addressdkz8CEH, address7wmGYa, {from: accounts[0]});
		const addressQMEDO1M = accounts[2]
		const addressXqmEfSN = accounts[1]
		const addressciDgGY = accounts[1]
		const addressRUlwD5c = accounts[2]
		const addressszaSLp2 = accounts[1]
		const addressOe9Wqsf = accounts[1]
		const addressex51PdP = accounts[1]
		const uintxgtkEKd = await QuickTokenh9echnD.allowance.call(addressXqmEfSN, addressQMEDO1M, {from: accounts[1]});
		const uintgzeEPr = await QuickTokenh9echnD.allowance.call(addressRUlwD5c, addressciDgGY, {from: accounts[0]});
		const uintYfT07T = await QuickTokenh9echnD.allowance.call(addressOe9Wqsf, addressszaSLp2, {from: accounts[3]});
		const uintKDsyzhQ = await QuickTokenh9echnD.balanceOf.call(addressex51PdP, {from: accounts[1]});

		assert.equal(uintKDsyzhQ, BigInt("0"))
		assert.equal(uintYfT07T, BigInt("0"))
		assert.equal(uintgzeEPr, BigInt("0"))
		assert.equal(uintxgtkEKd, BigInt("0"))
	});

	it('test for QuickToken', async () => {
		const addressxaWRN5H = accounts[3]
		const addresshpL2FO = accounts[4]
		const QuickTokenyThBqmp = await QuickToken.new(addressxaWRN5H, addresshpL2FO, {from: accounts[2]});
		const addressIwkMgIY = accounts[2]
		const addressPetJhsB = accounts[0]
		const uintYrAnavr = BigInt("1112")
		const addresssx4z8pJ = accounts[1]
		const addresssaN39uu = accounts[4]
		const addressnNjLQSF = accounts[5]
		const uintrU5Uc8c = BigInt("1048")
		const addressEd15zbe = accounts[4]
		const addressi3shaeo = accounts[4]
		const addressjMwJUo = accounts[2]
		const addressCeaD23 = accounts[2]
		const uint1KBfJZ = await QuickTokenyThBqmp.allowance.call(addressPetJhsB, addressIwkMgIY, {from: accounts[3]});
		const boolK9LK2zT = await QuickTokenyThBqmp.approve.call(addresssx4z8pJ, uintYrAnavr, {from: accounts[2]});
		const uintP5zrWPf = await QuickTokenyThBqmp.allowance.call(addressnNjLQSF, addresssaN39uu, {from: accounts[4]});
		const boolhwkiLeP = await QuickTokenyThBqmp.transferFrom.call(addressi3shaeo, addressEd15zbe, uintrU5Uc8c, {from: accounts[0]});
		const uintjPfjJvR = await QuickTokenyThBqmp.allowance.call(addressCeaD23, addressjMwJUo, {from: accounts[2]});

		assert.equal(boolK9LK2zT, true)
		assert.equal(uint1KBfJZ, BigInt("0"))
		assert.equal(uintP5zrWPf, BigInt("0"))
		await expect(QuickTokenyThBqmp.transferFrom.call(addressi3shaeo, addressEd15zbe, uintrU5Uc8c, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for QuickToken', async () => {
		const addressTdO6IHb = accounts[5]
		const addressfzmkWEu = accounts[1]
		const QuickTokenKkuck2X = await QuickToken.new(addressTdO6IHb, addressfzmkWEu, {from: accounts[5]});
		const addressL3LELgA = accounts[1]
		const uintqsiIuDH = BigInt("353")
		const addressN0pfq4B = accounts[0]
		const uintgapsC6Z = BigInt("1782")
		const addressvI9FqxL = accounts[1]
		const uintjJs108n = BigInt("1413")
		const addressdqfUTtU = accounts[4]
		const addressoITSIkl = accounts[0]
		const addressgRijBz7 = accounts[2]
		const uintAhTIKib = await QuickTokenKkuck2X.balanceOf.call(addressL3LELgA, {from: accounts[0]});
		const boolOeem1y8 = await QuickTokenKkuck2X.approve.call(addressN0pfq4B, uintqsiIuDH, {from: accounts[4]});
		const addressRW0v8pD = await QuickTokenKkuck2X.mint.call(addressvI9FqxL, uintgapsC6Z, {from: accounts[3]});
		const booldBQnKu6 = await QuickTokenKkuck2X.transferFrom.call(addressoITSIkl, addressdqfUTtU, uintjJs108n, {from: accounts[4]});
		const addressX8lShkO = await QuickTokenKkuck2X.setMinter.call(addressgRijBz7, {from: accounts[3]});

		assert.equal(boolOeem1y8, true)
		assert.equal(uintAhTIKib, BigInt("0"))
		await expect(QuickTokenKkuck2X.mint.call(addressvI9FqxL, uintgapsC6Z, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for QuickToken', async () => {
		const addressAgLW8oX = accounts[0]
		const addressxFz2yOm = accounts[4]
		const QuickTokenLsd0Zd = await QuickToken.new(addressAgLW8oX, addressxFz2yOm, {from: accounts[2]});
		const uintIaGvwi9 = BigInt("758")
		const addresscvcK6Y5 = accounts[3]
		const uintLsLOnVI = BigInt("672")
		const addressuVLonBJ = "0x0000000000000000000000000000000000000001"
		const uintUYEBqn = BigInt("1506")
		const addressEXhn8e2 = accounts[1]
		const addressYR5b6ua = accounts[3]
		const booli9CDDC3 = await QuickTokenLsd0Zd.approve.call(addresscvcK6Y5, uintIaGvwi9, {from: accounts[0]});
		const boolxwPsdd = await QuickTokenLsd0Zd.approve.call(addressuVLonBJ, uintLsLOnVI, {from: accounts[4]});
		const boolHQU9HJB = await QuickTokenLsd0Zd.transfer.call(addressEXhn8e2, uintUYEBqn, {from: accounts[0]});
		const addresslu4cOSl = await QuickTokenLsd0Zd.setMinter.call(addressYR5b6ua, {from: accounts[4]});

		assert.equal(boolHQU9HJB, true)
		assert.equal(booli9CDDC3, true)
		assert.equal(boolxwPsdd, true)
	});

	it('test for QuickToken', async () => {
		const addressDmrdJo = accounts[1]
		const addressa9Sndpn = accounts[1]
		const QuickTokenseB2Kj = await QuickToken.new(addressDmrdJo, addressa9Sndpn, {from: accounts[3]});
		const uintrjCUknn = BigInt("1548")
		const addressbFYyZM0 = accounts[2]
		const uintrgHd5b6 = BigInt("1105")
		const addressRo3uJp = accounts[4]
		const uintNkA4WbD = BigInt("745")
		const addressnRq4eb0 = accounts[0]
		const boolLY1YcQe = await QuickTokenseB2Kj.transfer.call(addressbFYyZM0, uintrjCUknn, {from: accounts[5]});
		const boolwf2ck3 = await QuickTokenseB2Kj.approve.call(addressRo3uJp, uintrgHd5b6, {from: accounts[2]});
		const boolQSBx59W = await QuickTokenseB2Kj.transfer.call(addressnRq4eb0, uintNkA4WbD, {from: "0x0000000000000000000000000000000000000001"});

		await expect(QuickTokenseB2Kj.transfer.call(addressbFYyZM0, uintrjCUknn, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for QuickToken', async () => {
		const addressCncI81 = accounts[5]
		const addresshi4ShaM = accounts[2]
		const QuickTokenpzOizGj = await QuickToken.new(addressCncI81, addresshi4ShaM, {from: accounts[1]});
		const addressDpbr5wi = accounts[2]
		const addressXXuuBck = accounts[0]
		const uintdMnDp29 = BigInt("1845")
		const addressOoaTH8A = accounts[4]
		const uintYDR4A42 = BigInt("1152")
		const addresspuisdpc = accounts[3]
		const addressNCYUASD = accounts[5]
		const addressOmipJHv = accounts[4]
		const uintrhUvLo0 = await QuickTokenpzOizGj.balanceOf.call(addressDpbr5wi, {from: accounts[3]});
		const addressS1pCalB = await QuickTokenpzOizGj.setMinter.call(addressXXuuBck, {from: accounts[4]});
		const booloKKtjZQ = await QuickTokenpzOizGj.transfer.call(addressOoaTH8A, uintdMnDp29, {from: accounts[3]});
		const addressOdAFXc2 = await QuickTokenpzOizGj.mint.call(addresspuisdpc, uintYDR4A42, {from: accounts[1]});
		const uintKiel40 = await QuickTokenpzOizGj.allowance.call(addressOmipJHv, addressNCYUASD, {from: accounts[2]});

		assert.equal(uintrhUvLo0, BigInt("0"))
		await expect(QuickTokenpzOizGj.setMinter.call(addressXXuuBck, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for QuickToken', async () => {
		const addressxzrWFio = accounts[5]
		const addressDTq3u7k = accounts[2]
		const QuickTokenpzOizGj = await QuickToken.new(addressxzrWFio, addressDTq3u7k, {from: accounts[1]});
		const uintTN824I1 = BigInt("1907")
		const addressNQw6EAS = accounts[5]
		const addresszMBO06Q = accounts[5]
		const addressPz7JX3e = accounts[2]
		const addressGzEN0h = await QuickTokenpzOizGj.mint.call(addressNQw6EAS, uintTN824I1, {from: accounts[2]});
		const uintKiel40 = await QuickTokenpzOizGj.allowance.call(addressPz7JX3e, addresszMBO06Q, {from: accounts[2]});

		assert.equal(uintKiel40, BigInt("0"))
	});

	it('test for QuickToken', async () => {
		const addressHi4KeDU = accounts[1]
		const addressKat3gWe = accounts[3]
		const QuickTokena3UM9i = await QuickToken.new(addressHi4KeDU, addressKat3gWe, {from: "0x0000000000000000000000000000000000000001"});
		const addressosQJ2Xm = accounts[3]
		const addresslhOyHKk = accounts[4]
		const addressb0TTTZ = "0x0000000000000000000000000000000000000001"
		const uintieBgR9M = BigInt("125")
		const addressQSzgWvw = accounts[4]
		const uint89ZNia = await QuickTokena3UM9i.balanceOf.call(addressosQJ2Xm, {from: accounts[3]});
		const uintKa3XuQN = await QuickTokena3UM9i.allowance.call(addressb0TTTZ, addresslhOyHKk, {from: accounts[0]});
		const boolM1lsiu3 = await QuickTokena3UM9i.transfer.call(addressQSzgWvw, uintieBgR9M, {from: accounts[0]});
	});
})