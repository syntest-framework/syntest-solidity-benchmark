const REXUNIFINANCE = artifacts.require("REXUNIFINANCE");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('REXUNIFINANCE', (accounts) => {
	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCEAeH3wwl = await REXUNIFINANCE.new({from: accounts[2]});
		const uintUKltNqa = BigInt("963")
		const addressZEWbJt = accounts[3]
		const uinta7luCZ0 = BigInt("522")
		const addressycqrPLP = "0x0000000000000000000000000000000000000001"
		const uintcgc8zzO = BigInt("1117")
		const addresszyFQVsP = "0x0000000000000000000000000000000000000001"
		const addressxDcDyJ0 = "0x0000000000000000000000000000000000000001"
//		const boolvKfI3ip = await REXUNIFINANCEAeH3wwl.transfer.call(addressZEWbJt, uintUKltNqa, {from: accounts[5]});
//		const boolbGLIOwQ = await REXUNIFINANCEAeH3wwl.approve.call(addressycqrPLP, uinta7luCZ0, {from: accounts[1]});
//		const boolFvWnSJH = await REXUNIFINANCEAeH3wwl.transferFrom.call(addressxDcDyJ0, addresszyFQVsP, uintcgc8zzO, {from: accounts[0]});

		await expect(REXUNIFINANCEAeH3wwl.transfer.call(addressZEWbJt, uintUKltNqa, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCEr2lGQHi = await REXUNIFINANCE.new({from: accounts[4]});
		const addressfQ6rSnN = accounts[3]
		const uintr4xnM9L = BigInt("1221")
		const addresssnst0jv = accounts[3]
		const uintQgiGmLK = BigInt("902")
		const addressiP4zMUl = accounts[2]
		const uintZdJ52tz = BigInt("1977")
		const addressmJEvcYl = accounts[0]
		const addressvuJWxda = accounts[0]
		const uintVeWcOoj = BigInt("668")
		const addressZOXyjpu = accounts[5]
		const addressRKIYKWF = accounts[4]
		const uint256UmIeEFq = await REXUNIFINANCEr2lGQHi.balanceOf.call(addressfQ6rSnN, {from: accounts[2]});
		const boolMJKl9y = await REXUNIFINANCEr2lGQHi.approve.call(addresssnst0jv, uintr4xnM9L, {from: accounts[4]});
//		const boolP0vnsu1 = await REXUNIFINANCEr2lGQHi.increaseApproval.call(addressiP4zMUl, uintQgiGmLK, {from: accounts[2]});
//		const boolQV9Tylm = await REXUNIFINANCEr2lGQHi.transferFrom.call(addressvuJWxda, addressmJEvcYl, uintZdJ52tz, {from: accounts[0]});
//		const bool8zcWaZ = await REXUNIFINANCEr2lGQHi.transferFrom.call(addressRKIYKWF, addressZOXyjpu, uintVeWcOoj, {from: accounts[3]});

		assert.equal(boolMJKl9y, true)
		assert.equal(uint256UmIeEFq, BigInt("0"))
		await expect(REXUNIFINANCEr2lGQHi.increaseApproval.call(addressiP4zMUl, uintQgiGmLK, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCEIQGNGP = await REXUNIFINANCE.new({from: accounts[0]});
		const addresscmVvYVU = accounts[0]
		const uintHLydOHL = BigInt("882")
		const addressRrKVPdr = accounts[3]
		const addresspNPy5a = accounts[3]
		const uint256HZQAglL = await REXUNIFINANCEIQGNGP.balanceOf.call(addresscmVvYVU, {from: accounts[3]});
//		const booll1RkTN = await REXUNIFINANCEIQGNGP.transferFrom.call(addresspNPy5a, addressRrKVPdr, uintHLydOHL, {from: accounts[0]});

		assert.equal(uint256HZQAglL, BigInt("0"))
		await expect(REXUNIFINANCEIQGNGP.transferFrom.call(addresspNPy5a, addressRrKVPdr, uintHLydOHL, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCEBakfTS = await REXUNIFINANCE.new({from: accounts[2]});
		const uint2DNdb3 = BigInt("472")
		const addressBKkiYzR = accounts[4]
		const addresstMF4C62 = accounts[1]
		const uintqMcamf3 = BigInt("1470")
		const addressshL0wgC = accounts[1]
		const addressCJr3Gbr = accounts[2]
		const addressXFM8NF4 = accounts[5]
		const boolB6yRT4l = await REXUNIFINANCEBakfTS.approve.call(addressBKkiYzR, uint2DNdb3, {from: accounts[1]});
		const uint256djSu0m7 = await REXUNIFINANCEBakfTS.transferableTokens.call(addresstMF4C62, {from: accounts[3]});
//		const boolPWJsAo = await REXUNIFINANCEBakfTS.transferFrom.call(addressCJr3Gbr, addressshL0wgC, uintqMcamf3, {from: accounts[1]});
//		const addressR9ZUkE = await REXUNIFINANCEBakfTS.transferOwnership.call(addressXFM8NF4, {from: accounts[2]});

		assert.equal(boolB6yRT4l, true)
		assert.equal(uint256djSu0m7, BigInt("0"))
		await expect(REXUNIFINANCEBakfTS.transferFrom.call(addressCJr3Gbr, addressshL0wgC, uintqMcamf3, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCEyyRfhcG = await REXUNIFINANCE.new({from: accounts[4]});
		const uintxr7TueP = BigInt("40")
		const addressY7Eqij1 = accounts[5]
		const uintlMXvTMY = BigInt("1079")
		const addressCi8vDM = accounts[4]
		const uintn7PEaKh = BigInt("770")
		const addressT0NdEqS = accounts[4]
		const boolO9YhlDu = await REXUNIFINANCEyyRfhcG.decreaseApproval.call(addressY7Eqij1, uintxr7TueP, {from: accounts[0]});
		const boolCosQpXg = await REXUNIFINANCEyyRfhcG.increaseApproval.call(addressCi8vDM, uintlMXvTMY, {from: accounts[3]});
		const boolkwV9XR = await REXUNIFINANCEyyRfhcG.decreaseApproval.call(addressT0NdEqS, uintn7PEaKh, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolCosQpXg, true)
		assert.equal(boolO9YhlDu, true)
		assert.equal(boolkwV9XR, true)
	});

	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCEQVZAeFm = await REXUNIFINANCE.new({from: "0x0000000000000000000000000000000000000001"});
		const uintfJurXZt = BigInt("16")
		const addressf5f1mzO = accounts[5]
		const uintPzkWf4B = BigInt("879")
		const addressIp7B69i = accounts[0]
		const addressPa8LxSQ = accounts[3]
		const boolqZ6vHNn = await REXUNIFINANCEQVZAeFm.increaseApproval.call(addressf5f1mzO, uintfJurXZt, {from: accounts[4]});
		const booltZcNhWk = await REXUNIFINANCEQVZAeFm.transferFrom.call(addressPa8LxSQ, addressIp7B69i, uintPzkWf4B, {from: accounts[1]});
	});

	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCEPMvMpRz = await REXUNIFINANCE.new({from: accounts[0]});
		const uintWpM1jCH = BigInt("339")
		const addressZ9LLiCH = accounts[4]
		const uintmQJlkkC = BigInt("151")
		const addressIQDmiZH = accounts[0]
		const uintE22JBd = BigInt("2019")
		const addressuFV7NAr = accounts[1]
		const addressYFzQfZN = accounts[1]
		const addressvI44ldK = accounts[2]
		const boolNAuloL3 = await REXUNIFINANCEPMvMpRz.approve.call(addressZ9LLiCH, uintWpM1jCH, {from: accounts[2]});
		const booldua065m = await REXUNIFINANCEPMvMpRz.increaseApproval.call(addressIQDmiZH, uintmQJlkkC, {from: accounts[4]});
		const boolAynSGEs = await REXUNIFINANCEPMvMpRz.decreaseApproval.call(addressuFV7NAr, uintE22JBd, {from: "0x0000000000000000000000000000000000000001"});
		const uint256LyEIJvo = await REXUNIFINANCEPMvMpRz.balanceOf.call(addressYFzQfZN, {from: accounts[1]});
//		const addresse8Be3a1 = await REXUNIFINANCEPMvMpRz.transferOwnership.call(addressvI44ldK, {from: accounts[3]});

		assert.equal(boolAynSGEs, true)
		assert.equal(boolNAuloL3, true)
		assert.equal(booldua065m, true)
		assert.equal(uint256LyEIJvo, BigInt("0"))
		await expect(REXUNIFINANCEPMvMpRz.transferOwnership.call(addressvI44ldK, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCEyyRfhcG = await REXUNIFINANCE.new({from: accounts[4]});
		const uintEdYubYA = BigInt("40")
		const addressVvMJ1eX = accounts[5]
		const addressZIyiTq = accounts[0]
		const address7AUSPX = accounts[2]
		const uint14l505 = BigInt("770")
		const addressTYW2nkv = accounts[4]
		const addressRl249Tm = accounts[4]
		const boolO9YhlDu = await REXUNIFINANCEyyRfhcG.decreaseApproval.call(addressVvMJ1eX, uintEdYubYA, {from: accounts[0]});
		const uint2561c3pfh = await REXUNIFINANCEyyRfhcG.allowance.call(address7AUSPX, addressZIyiTq, {from: accounts[0]});
		const boolkwV9XR = await REXUNIFINANCEyyRfhcG.decreaseApproval.call(addressTYW2nkv, uint14l505, {from: "0x0000000000000000000000000000000000000001"});
		const uint256VB4RYSP = await REXUNIFINANCEyyRfhcG.balanceOf.call(addressRl249Tm, {from: accounts[1]});

		assert.equal(boolO9YhlDu, true)
		assert.equal(boolkwV9XR, true)
		assert.equal(uint2561c3pfh, BigInt("0"))
		assert.equal(uint256VB4RYSP, BigInt("0"))
	});
})