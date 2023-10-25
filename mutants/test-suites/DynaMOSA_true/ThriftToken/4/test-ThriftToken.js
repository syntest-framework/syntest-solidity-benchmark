const ThriftToken = artifacts.require("ThriftToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ThriftToken', (accounts) => {
	it('test for ThriftToken', async () => {
		const ThriftTokenEimSKm7 = await ThriftToken.new({from: accounts[1]});
		const uintKnBBYI0 = BigInt("1192")
		const addressG05S8vI = accounts[4]
		const addressKz3LK5o = accounts[0]
		const uintpgXQPCa = BigInt("1438")
		const addresssifMlkn = accounts[0]
		const addressCf7Tjhc = "0x0000000000000000000000000000000000000001"
		const uintSHsUIKW = BigInt("1481")
		const addressvsbxBoU = accounts[1]
		const addressIVvR0uE = accounts[1]
//		const boolu9usZCX = await ThriftTokenEimSKm7.decreaseApproval.call(addressG05S8vI, uintKnBBYI0, {from: accounts[4]});
//		const uint256cC7Uli = await ThriftTokenEimSKm7.balanceOf.call(addressKz3LK5o, {from: accounts[5]});
//		const boolV8gLSkw = await ThriftTokenEimSKm7.transferFrom.call(addressCf7Tjhc, addresssifMlkn, uintpgXQPCa, {from: accounts[0]});
//		const boolxhQMeEG = await ThriftTokenEimSKm7.transferFrom.call(addressIVvR0uE, addressvsbxBoU, uintSHsUIKW, {from: "0x0000000000000000000000000000000000000001"});

		await expect(ThriftTokenEimSKm7.decreaseApproval.call(addressG05S8vI, uintKnBBYI0, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ThriftToken', async () => {
		const ThriftTokenYmfOr8g = await ThriftToken.new({from: accounts[4]});
		const addressj6kp0B2 = accounts[2]
		const addresse4spbEN = accounts[1]
		const uintah1vPV = BigInt("558")
		const addressrvlmS4J = accounts[3]
		const addressNBNvGMv = accounts[4]
		const addressCMxW1Mm = accounts[0]
		const addressoFCee76 = accounts[5]
		const addressRCrboki = accounts[3]
		const uint256nCFcU2O = await ThriftTokenYmfOr8g.allowance.call(addresse4spbEN, addressj6kp0B2, {from: accounts[4]});
//		const boolNTMUYBd = await ThriftTokenYmfOr8g.transfer.call(addressrvlmS4J, uintah1vPV, {from: accounts[5]});
//		const uint256JuxwKCw = await ThriftTokenYmfOr8g.balanceOf.call(addressNBNvGMv, {from: accounts[2]});
//		const uint256k0Yh08 = await ThriftTokenYmfOr8g.balanceOf.call(addressCMxW1Mm, {from: accounts[3]});
//		const uint256WHRlifR = await ThriftTokenYmfOr8g.allowance.call(addressRCrboki, addressoFCee76, {from: accounts[5]});

		assert.equal(uint256nCFcU2O, BigInt("0"))
		await expect(ThriftTokenYmfOr8g.transfer.call(addressrvlmS4J, uintah1vPV, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for ThriftToken', async () => {
		const ThriftTokenxhsRYa0 = await ThriftToken.new({from: "0x0000000000000000000000000000000000000001"});
		const addressahLOekX = accounts[2]
		const addressM0CJY3j = accounts[1]
		const addressm8E6c3r = accounts[4]
		const uintPb9RE9H = BigInt("553")
		const addressQLFMNzB = accounts[2]
		const uint256Pv4hiEf = await ThriftTokenxhsRYa0.transferableTokens.call(addressahLOekX, {from: accounts[5]});
		const uint256B4DuvpB = await ThriftTokenxhsRYa0.balanceOf.call(addressM0CJY3j, {from: accounts[4]});
		const addressNpTzKU8 = await ThriftTokenxhsRYa0.transferOwnership.call(addressm8E6c3r, {from: accounts[2]});
		const boolQQhwPz9 = await ThriftTokenxhsRYa0.approve.call(addressQLFMNzB, uintPb9RE9H, {from: accounts[1]});
	});

	it('test for ThriftToken', async () => {
		const ThriftTokenzOve0j0 = await ThriftToken.new({from: accounts[5]});
		const uintVehVbj = BigInt("515")
		const addresscZaVzMl = accounts[4]
		const addressun781zt = accounts[2]
		const uintiN9Cmpw = BigInt("1507")
		const addressFfpl0Jj = accounts[3]
		const uintJtldDta = BigInt("670")
		const addresskTjwKZM = accounts[3]
//		const boolExLIdza = await ThriftTokenzOve0j0.transferFrom.call(addressun781zt, addresscZaVzMl, uintVehVbj, {from: accounts[2]});
//		const boolZCFDZGM = await ThriftTokenzOve0j0.transfer.call(addressFfpl0Jj, uintiN9Cmpw, {from: accounts[5]});
//		const boolNFFIR9N = await ThriftTokenzOve0j0.transfer.call(addresskTjwKZM, uintJtldDta, {from: accounts[1]});

		await expect(ThriftTokenzOve0j0.transferFrom.call(addressun781zt, addresscZaVzMl, uintVehVbj, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ThriftToken', async () => {
		const ThriftTokenGWOHYoW = await ThriftToken.new({from: accounts[1]});
		const address9TLOuN = accounts[2]
		const uintFBbLECg = BigInt("882")
		const addressCn70iY = accounts[2]
		const uintRwbyIkI = BigInt("1663")
		const addressubAcxYf = accounts[2]
		const addresshCwK2CF = accounts[4]
		const uintbk2hSRZ = BigInt("891")
		const addressvYH06v = accounts[1]
		const uintt1r59Do = BigInt("255")
		const addressIKPeYhn = accounts[5]
		const addressQdhOqiT = accounts[2]
//		const addressZ6YP7Cy = await ThriftTokenGWOHYoW.transferOwnership.call(address9TLOuN, {from: accounts[3]});
//		const boolcswZo9K = await ThriftTokenGWOHYoW.transfer.call(addressCn70iY, uintFBbLECg, {from: accounts[3]});
//		const boolhepHyNb = await ThriftTokenGWOHYoW.transferFrom.call(addresshCwK2CF, addressubAcxYf, uintRwbyIkI, {from: accounts[1]});
//		const boolvqjGZh = await ThriftTokenGWOHYoW.transfer.call(addressvYH06v, uintbk2hSRZ, {from: accounts[3]});
//		const bool2dOr9L = await ThriftTokenGWOHYoW.transferFrom.call(addressQdhOqiT, addressIKPeYhn, uintt1r59Do, {from: accounts[0]});

		await expect(ThriftTokenGWOHYoW.transferOwnership.call(address9TLOuN, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ThriftToken', async () => {
		const ThriftTokenW1vmEbx = await ThriftToken.new({from: accounts[3]});
		const uintcvSmiTi = BigInt("263")
		const addressnvbtg9h = "0x0000000000000000000000000000000000000001"
		const uintHl0woCr = BigInt("129")
		const addresssFFnvmv = "0x0000000000000000000000000000000000000001"
		const uintvvGwqfk = BigInt("1898")
		const addressqtjdbru = accounts[4]
		const boolHcgpvO9 = await ThriftTokenW1vmEbx.increaseApproval.call(addressnvbtg9h, uintcvSmiTi, {from: accounts[4]});
		const boolQTPXEmV = await ThriftTokenW1vmEbx.increaseApproval.call(addresssFFnvmv, uintHl0woCr, {from: accounts[2]});
		const boolxlY5NQ8 = await ThriftTokenW1vmEbx.decreaseApproval.call(addressqtjdbru, uintvvGwqfk, {from: accounts[1]});

		assert.equal(boolHcgpvO9, true)
		assert.equal(boolQTPXEmV, true)
		assert.equal(boolxlY5NQ8, true)
	});

	it('test for ThriftToken', async () => {
		const ThriftTokenp2sgqV4 = await ThriftToken.new({from: accounts[3]});
		const uintIMkVxy = BigInt("1684")
		const addressYWnKMr = accounts[1]
		const uintx9ErIM = BigInt("1411")
		const addressjGzhby2 = "0x0000000000000000000000000000000000000001"
		const addressVYVMmaW = accounts[1]
		const uintLThRQSH = BigInt("1316")
		const addresswmpoD1U = accounts[0]
		const boolMfl4etj = await ThriftTokenp2sgqV4.decreaseApproval.call(addressYWnKMr, uintIMkVxy, {from: accounts[2]});
		const booltSHHBSZ = await ThriftTokenp2sgqV4.approve.call(addressjGzhby2, uintx9ErIM, {from: accounts[3]});
		const uint256PYu3Z05 = await ThriftTokenp2sgqV4.transferableTokens.call(addressVYVMmaW, {from: accounts[2]});
		const boolqLUOofT = await ThriftTokenp2sgqV4.approve.call(addresswmpoD1U, uintLThRQSH, {from: accounts[2]});

		assert.equal(boolMfl4etj, true)
		assert.equal(boolqLUOofT, true)
		assert.equal(booltSHHBSZ, true)
		assert.equal(uint256PYu3Z05, BigInt("0"))
	});

	it('test for ThriftToken', async () => {
		const ThriftTokenW1vmEbx = await ThriftToken.new({from: accounts[3]});
		const uintmfHe5Gp = BigInt("263")
		const addressZlUqSGu = "0x00000000000000000000000000000000000000-1"
		const uintAHQqoWe = BigInt("1898")
		const addressoiL9JPE = accounts[4]
		const addressymbQtPc = accounts[3]
//		const boolHcgpvO9 = await ThriftTokenW1vmEbx.increaseApproval.call(addressZlUqSGu, uintmfHe5Gp, {from: accounts[4]});
//		const boolxlY5NQ8 = await ThriftTokenW1vmEbx.decreaseApproval.call(addressoiL9JPE, uintAHQqoWe, {from: accounts[1]});
//		const addressLrpLjtm = await ThriftTokenW1vmEbx.transferOwnership.call(addressymbQtPc, {from: accounts[1]});

		await expect(ThriftTokenW1vmEbx.increaseApproval.call(addressZlUqSGu, uintmfHe5Gp, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ThriftToken', async () => {
		const ThriftTokenu2XiygM = await ThriftToken.new({from: accounts[0]});
		const addresssCqGi5n = accounts[1]
		const uintpaLqKb = BigInt("106")
		const addressrB4YxQV = accounts[2]
		const addressWKbcQLg = accounts[4]
		const addressou5zaOm = await ThriftTokenu2XiygM.transferOwnership.call(addresssCqGi5n, {from: accounts[0]});
//		const boolCJcKYlT = await ThriftTokenu2XiygM.transferFrom.call(addressWKbcQLg, addressrB4YxQV, uintpaLqKb, {from: accounts[1]});

		await expect(ThriftTokenu2XiygM.transferFrom.call(addressWKbcQLg, addressrB4YxQV, uintpaLqKb, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})