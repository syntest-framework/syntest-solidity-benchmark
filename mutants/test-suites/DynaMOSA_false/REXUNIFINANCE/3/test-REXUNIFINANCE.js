const REXUNIFINANCE = artifacts.require("REXUNIFINANCE");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('REXUNIFINANCE', (accounts) => {
	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCEYl9n5jc = await REXUNIFINANCE.new({from: accounts[3]});
		const addressMbtXKAM = accounts[1]
		const uintF9oQJP = BigInt("397")
		const addressgC6TbUD = accounts[3]
		const uintlmhwKyf = BigInt("1083")
		const addressqXcbcWs = accounts[1]
		const addressdiQoPFw = await REXUNIFINANCEYl9n5jc.transferOwnership.call(addressMbtXKAM, {from: accounts[3]});
//		const boolcdlOJoT = await REXUNIFINANCEYl9n5jc.transfer.call(addressgC6TbUD, uintF9oQJP, {from: accounts[2]});
//		const boolOPDkypV = await REXUNIFINANCEYl9n5jc.increaseApproval.call(addressqXcbcWs, uintlmhwKyf, {from: accounts[2]});

		await expect(REXUNIFINANCEYl9n5jc.transfer.call(addressgC6TbUD, uintF9oQJP, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCEfGgY1MD = await REXUNIFINANCE.new({from: accounts[4]});
		const uintcHye5rY = BigInt("40")
		const addresssBDS3gA = accounts[4]
		const uintZEZIjE1 = BigInt("1239")
		const addressJBRRm0S = accounts[4]
		const addresssZh3NEe = accounts[1]
		const uintviUnGNr = BigInt("157")
		const addressDDkVc8e = accounts[0]
		const addressmNxDalc = accounts[2]
		const boolNsZkyot = await REXUNIFINANCEfGgY1MD.decreaseApproval.call(addresssBDS3gA, uintcHye5rY, {from: accounts[0]});
//		const booltSYw7kX = await REXUNIFINANCEfGgY1MD.transfer.call(addressJBRRm0S, uintZEZIjE1, {from: accounts[3]});
//		const uint256k3fDslM = await REXUNIFINANCEfGgY1MD.transferableTokens.call(addresssZh3NEe, {from: accounts[5]});
//		const boolkO3TPET = await REXUNIFINANCEfGgY1MD.transferFrom.call(addressmNxDalc, addressDDkVc8e, uintviUnGNr, {from: accounts[1]});

		assert.equal(boolNsZkyot, true)
		await expect(REXUNIFINANCEfGgY1MD.transfer.call(addressJBRRm0S, uintZEZIjE1, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCEMeeybM8 = await REXUNIFINANCE.new({from: accounts[5]});
		const uintF3EUIfb = BigInt("260")
		const addressB25ueY5 = accounts[3]
		const uintRy9wvdk = BigInt("576")
		const addressHiLV9Uw = accounts[1]
		const boolMbrj443 = await REXUNIFINANCEMeeybM8.increaseApproval.call(addressB25ueY5, uintF3EUIfb, {from: accounts[1]});
//		const boolIA17Fjs = await REXUNIFINANCEMeeybM8.transfer.call(addressHiLV9Uw, uintRy9wvdk, {from: accounts[2]});

		assert.equal(boolMbrj443, true)
		await expect(REXUNIFINANCEMeeybM8.transfer.call(addressHiLV9Uw, uintRy9wvdk, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCEDs6DuAf = await REXUNIFINANCE.new({from: accounts[2]});
		const addressI6yHFOx = accounts[1]
		const addressDn9e6rM = accounts[2]
		const uintCcmSi0o = BigInt("1968")
		const addressS9Qeu0k = accounts[4]
		const uintORkFYoE = BigInt("1576")
		const addressT2JgMnO = "0x0000000000000000000000000000000000000001"
		const addressPc4kWwg = accounts[4]
		const uint256bhU7Opv = await REXUNIFINANCEDs6DuAf.transferableTokens.call(addressI6yHFOx, {from: accounts[2]});
		const uint256aNEBzCH = await REXUNIFINANCEDs6DuAf.transferableTokens.call(addressDn9e6rM, {from: accounts[4]});
		const boolsmX1kvT = await REXUNIFINANCEDs6DuAf.decreaseApproval.call(addressS9Qeu0k, uintCcmSi0o, {from: accounts[3]});
		const boolabndi9 = await REXUNIFINANCEDs6DuAf.decreaseApproval.call(addressT2JgMnO, uintORkFYoE, {from: accounts[1]});
		const uint256m9YK6VT = await REXUNIFINANCEDs6DuAf.balanceOf.call(addressPc4kWwg, {from: accounts[4]});

		assert.equal(boolabndi9, true)
		assert.equal(boolsmX1kvT, true)
		assert.equal(uint256aNEBzCH, BigInt("0"))
		assert.equal(uint256bhU7Opv, BigInt("0"))
		assert.equal(uint256m9YK6VT, BigInt("0"))
	});

	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCEs7zmCvo = await REXUNIFINANCE.new({from: accounts[4]});
		const addressy8DSvGp = accounts[0]
		const addressxxw4qfk = accounts[2]
		const uintu3hlKZ2 = BigInt("1398")
		const addresstGXs8uW = accounts[1]
		const uintCF2ERQI = BigInt("1923")
		const addressFgDTj6d = "0x0000000000000000000000000000000000000001"
		const addressWPWnQG = "0x0000000000000000000000000000000000000001"
		const addressZakvzJY = accounts[0]
		const uint256cgSQGnr = await REXUNIFINANCEs7zmCvo.allowance.call(addressxxw4qfk, addressy8DSvGp, {from: accounts[2]});
		const boolGImtMy = await REXUNIFINANCEs7zmCvo.increaseApproval.call(addresstGXs8uW, uintu3hlKZ2, {from: accounts[5]});
//		const booldG3qQkn = await REXUNIFINANCEs7zmCvo.transferFrom.call(addressWPWnQG, addressFgDTj6d, uintCF2ERQI, {from: accounts[3]});
//		const uint256S7O8CJE = await REXUNIFINANCEs7zmCvo.balanceOf.call(addressZakvzJY, {from: accounts[4]});

		assert.equal(boolGImtMy, true)
		assert.equal(uint256cgSQGnr, BigInt("0"))
		await expect(REXUNIFINANCEs7zmCvo.transferFrom.call(addressWPWnQG, addressFgDTj6d, uintCF2ERQI, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCEDs6DuAf = await REXUNIFINANCE.new({from: accounts[2]});
		const addressuMzhyrn = accounts[1]
		const addressJw4uHh = accounts[2]
		const uintuW4BtJ = BigInt("156")
		const addressisBifDv = accounts[2]
		const uintNZWROK1 = BigInt("1978")
		const addressHISWpNv = accounts[4]
		const uintmoCkqx = BigInt("1576")
		const addressro8zXde = "0x0000000000000000000000000000000000000001"
		const addressR1x9lhh = "0x0000000000000000000000000000000000000001"
		const addressJEbQYBI = accounts[4]
		const addressDSLPXyu = accounts[4]
		const uint256bhU7Opv = await REXUNIFINANCEDs6DuAf.transferableTokens.call(addressuMzhyrn, {from: accounts[2]});
		const uint256aNEBzCH = await REXUNIFINANCEDs6DuAf.transferableTokens.call(addressJw4uHh, {from: accounts[4]});
		const bool6AmZBt = await REXUNIFINANCEDs6DuAf.approve.call(addressisBifDv, uintuW4BtJ, {from: accounts[3]});
		const boolsmX1kvT = await REXUNIFINANCEDs6DuAf.decreaseApproval.call(addressHISWpNv, uintNZWROK1, {from: accounts[3]});
		const boolabndi9 = await REXUNIFINANCEDs6DuAf.decreaseApproval.call(addressro8zXde, uintmoCkqx, {from: accounts[1]});
		const uint256VEm7T4F = await REXUNIFINANCEDs6DuAf.allowance.call(addressJEbQYBI, addressR1x9lhh, {from: accounts[0]});
		const uint256m9YK6VT = await REXUNIFINANCEDs6DuAf.balanceOf.call(addressDSLPXyu, {from: accounts[4]});

		assert.equal(bool6AmZBt, true)
		assert.equal(boolabndi9, true)
		assert.equal(boolsmX1kvT, true)
		assert.equal(uint256VEm7T4F, BigInt("0"))
		assert.equal(uint256aNEBzCH, BigInt("0"))
		assert.equal(uint256bhU7Opv, BigInt("0"))
		assert.equal(uint256m9YK6VT, BigInt("0"))
	});

	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCEbsQrXtX = await REXUNIFINANCE.new({from: "0x0000000000000000000000000000000000000001"});
		const addressSHaCGKb = accounts[2]
		const addressi1Dfucj = accounts[0]
		const addressHN2IYrD = accounts[0]
		const addressHBylNsC = accounts[3]
		const addressDhU1b95 = accounts[1]
		const uintUOVidaf = BigInt("482")
		const addresshKV5naA = accounts[4]
		const uint256wTY2nvg = await REXUNIFINANCEbsQrXtX.allowance.call(addressi1Dfucj, addressSHaCGKb, {from: accounts[2]});
		const uint256WRLVAKr = await REXUNIFINANCEbsQrXtX.allowance.call(addressHBylNsC, addressHN2IYrD, {from: accounts[2]});
		const uint256q4gSZeM = await REXUNIFINANCEbsQrXtX.transferableTokens.call(addressDhU1b95, {from: accounts[5]});
		const boolQyhHwMB = await REXUNIFINANCEbsQrXtX.decreaseApproval.call(addresshKV5naA, uintUOVidaf, {from: accounts[4]});
	});
})