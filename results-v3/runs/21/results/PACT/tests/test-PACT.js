const PACT = artifacts.require("PACT");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('PACT', (accounts) => {
	it('test for PACT', async () => {
		const PACTJNK9fk5 = await PACT.new({from: accounts[0]});
		const uintyfbq6sJ = BigInt("436")
		const addressORWOxiH = accounts[2]
		const addressGFntQ6j = accounts[2]
		const uintAqLpNhq = BigInt("113")
		const addressuXBqqM6 = accounts[2]
		const bool9kHy6G = await PACTJNK9fk5.transferFrom.call(addressGFntQ6j, addressORWOxiH, uintyfbq6sJ, {from: accounts[4]});
		const boolBI1x2Wb = await PACTJNK9fk5.burn.call(addressuXBqqM6, uintAqLpNhq, {from: accounts[1]});
		const uint8ALCCVxM = await PACTJNK9fk5.decimals.call({from: accounts[3]});

		await expect(PACTJNK9fk5.transferFrom.call(addressGFntQ6j, addressORWOxiH, uintyfbq6sJ, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTRCfP9mm = await PACT.new({from: accounts[3]});
		const addressHX1YOEz = accounts[1]
		const addressgslZ0VL = accounts[2]
		const uintE7RHtDN = BigInt("64")
		const addresssY1NwY = accounts[2]
		const uintCMjAXTG = await PACTRCfP9mm.balanceOf.call(addressHX1YOEz, {from: accounts[3]});
		const boolQis6rkg = await PACTRCfP9mm.setupTeam.call(addressgslZ0VL, {from: accounts[1]});
		const uintPsfQdbY = await PACTRCfP9mm.totalSupply.call({from: accounts[0]});
		const boolSMsw15s = await PACTRCfP9mm.approve.call(addresssY1NwY, uintE7RHtDN, {from: accounts[4]});

		assert.equal(uintCMjAXTG, BigInt("0"))
		await expect(PACTRCfP9mm.setupTeam.call(addressgslZ0VL, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTmxpyVyj = await PACT.new({from: accounts[3]});
		const uint3heHLp = await PACTmxpyVyj.totalSupply.call({from: accounts[1]});
		const uintSwvIDUu = await PACTmxpyVyj.totalSupply.call({from: accounts[0]});

		assert.equal(uint3heHLp, BigInt("1000000000000000000000000000"))
		assert.equal(uintSwvIDUu, BigInt("1000000000000000000000000000"))
	});

	it('test for PACT', async () => {
		const PACTe9ZHsnw = await PACT.new({from: accounts[1]});
		const addressWIr7PJO = accounts[2]
		const addressMz9wE4Y = accounts[1]
		const boolL5RQtvV = await PACTe9ZHsnw.setupRewards.call(addressWIr7PJO, {from: accounts[1]});
		const uint8t5kTPna = await PACTe9ZHsnw.decimals.call({from: accounts[3]});
		const boolmUS4zoU = await PACTe9ZHsnw.setupReserve.call(addressMz9wE4Y, {from: accounts[2]});

		await expect(PACTe9ZHsnw.setupRewards.call(addressWIr7PJO, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTeSxkARz = await PACT.new({from: accounts[3]});
		const addressiRe7Jus = accounts[4]
		const addressVp1CFY4 = accounts[0]
		const string60mftf = await PACTeSxkARz.symbol.call({from: accounts[0]});
		const uintHKp6k1K = await PACTeSxkARz.allowance.call(addressVp1CFY4, addressiRe7Jus, {from: accounts[4]});

		assert.equal(string60mftf, "PACT")
		assert.equal(uintHKp6k1K, BigInt("0"))
	});

	it('test for PACT', async () => {
		const PACTHmmcGn = await PACT.new({from: accounts[5]});
		const uintOSpZti4 = BigInt("1314")
		const addressMDaadHs = accounts[0]
		const uintU5smhE = BigInt("1237")
		const address5Pxz7u = "0x0000000000000000000000000000000000000001"
		const addressCkftk4x = accounts[1]
		const addressCLxmK1D = accounts[2]
		const boolQNjLX2o = await PACTHmmcGn.burn.call(addressMDaadHs, uintOSpZti4, {from: accounts[1]});
		const boolfwVoRBY = await PACTHmmcGn.transfer.call(address5Pxz7u, uintU5smhE, {from: accounts[5]});
		const booleySnvT = await PACTHmmcGn.setupReserve.call(addressCkftk4x, {from: accounts[4]});
		const boolwN25NEU = await PACTHmmcGn.setupTeam.call(addressCLxmK1D, {from: accounts[2]});

		await expect(PACTHmmcGn.burn.call(addressMDaadHs, uintOSpZti4, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTeHtyCO6 = await PACT.new({from: accounts[0]});
		const addressZ2gvh9e = accounts[4]
		const addressC4YztAW = accounts[3]
		const addressHU9C1ra = accounts[4]
		const uintZAbXag = BigInt("1884")
		const addressAYJs5dz = "0x0000000000000000000000000000000000000001"
		const stringTek0hZA = await PACTeHtyCO6.name.call({from: accounts[0]});
		const boolU55QSmq = await PACTeHtyCO6.setupRewards.call(addressZ2gvh9e, {from: accounts[1]});
		const uintBQKkyHA = await PACTeHtyCO6.allowance.call(addressHU9C1ra, addressC4YztAW, {from: accounts[2]});
		const boolAVEtApK = await PACTeHtyCO6.transfer.call(addressAYJs5dz, uintZAbXag, {from: accounts[2]});

		assert.equal(stringTek0hZA, "P2PB2B community token")
		await expect(PACTeHtyCO6.setupRewards.call(addressZ2gvh9e, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTIDlXupn = await PACT.new({from: accounts[3]});
		const addressmYnKU3 = accounts[4]
		const addresszWbGnDO = accounts[1]
		const uintqmP8Wt = BigInt("1806")
		const addressdDLyCi = accounts[0]
		const boolirlnTZJ = await PACTIDlXupn.setupBasePool.call(addressmYnKU3, {from: accounts[4]});
		const uint8dLJ0c0C = await PACTIDlXupn.decimals.call({from: accounts[3]});
		const boola219qM = await PACTIDlXupn.setupBasePool.call(addresszWbGnDO, {from: accounts[3]});
		const booll37aFG9 = await PACTIDlXupn.approve.call(addressdDLyCi, uintqmP8Wt, {from: accounts[2]});
		const stringlvVn24S = await PACTIDlXupn.symbol.call({from: accounts[2]});

		await expect(PACTIDlXupn.setupBasePool.call(addressmYnKU3, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTh36kXzY = await PACT.new({from: accounts[3]});
		const addressVS0mCCL = accounts[2]
		const addressE3STWOr = accounts[0]
		const addressiioUwyF = accounts[1]
		const addressG8ytOn = "0x0000000000000000000000000000000000000001"
		const stringKmkq5WQ = await PACTh36kXzY.symbol.call({from: accounts[3]});
		const boolWmaHNe0 = await PACTh36kXzY.setupFarming.call(addressVS0mCCL, {from: accounts[1]});
		const uintMNX6kem = await PACTh36kXzY.allowance.call(addressiioUwyF, addressE3STWOr, {from: accounts[2]});
		const boola2mpcSD = await PACTh36kXzY.setupBasePool.call(addressG8ytOn, {from: accounts[2]});

		assert.equal(stringKmkq5WQ, "PACT")
		await expect(PACTh36kXzY.setupFarming.call(addressVS0mCCL, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTrCcehCd = await PACT.new({from: accounts[3]});
		const uintDiEeRGM = BigInt("1926")
		const addressz4tMtJI = accounts[2]
		const boolaTRRg48 = await PACTrCcehCd.approve.call(addressz4tMtJI, uintDiEeRGM, {from: accounts[3]});
		const uintMnbdJXb = await PACTrCcehCd.totalSupply.call({from: accounts[0]});
		const uintUU81ICU = await PACTrCcehCd.totalSupply.call({from: accounts[3]});
		const uint8Xm0KCBG = await PACTrCcehCd.decimals.call({from: accounts[1]});

		assert.equal(boolaTRRg48, true)
		assert.equal(uint8Xm0KCBG, BigInt("18"))
		assert.equal(uintMnbdJXb, BigInt("1000000000000000000000000000"))
		assert.equal(uintUU81ICU, BigInt("1000000000000000000000000000"))
	});

	it('test for PACT', async () => {
		const PACTJNK9fk5 = await PACT.new({from: accounts[0]});
		const addressK6ekJIE = "0x0000000000000000000000000000000000000001"
		const addressqyIGdjH = accounts[0]
		const addressZBLxgAH = accounts[3]
		const boolnxMo2rI = await PACTJNK9fk5.setupReserve.call(addressK6ekJIE, {from: accounts[4]});
		const uint8ALCCVxM = await PACTJNK9fk5.decimals.call({from: accounts[3]});
		const uintU6beJYc = await PACTJNK9fk5.allowance.call(addressZBLxgAH, addressqyIGdjH, {from: accounts[4]});

		await expect(PACTJNK9fk5.setupReserve.call(addressK6ekJIE, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTHmmcGn = await PACT.new({from: accounts[5]});
		const uintap7Gql9 = BigInt("278")
		const addressAdkGaKl = "0x0000000000000000000000000000000000000001"
		const uintcsllqgs = BigInt("1314")
		const addressdHiUZw6 = accounts[0]
		const addressY3ovwnp = accounts[1]
		const addressvlsOJ5O = accounts[2]
		const boolurd0Bas = await PACTHmmcGn.transfer.call(addressAdkGaKl, uintap7Gql9, {from: accounts[3]});
		const boolQNjLX2o = await PACTHmmcGn.burn.call(addressdHiUZw6, uintcsllqgs, {from: accounts[1]});
		const booleySnvT = await PACTHmmcGn.setupReserve.call(addressY3ovwnp, {from: accounts[4]});
		const boolwN25NEU = await PACTHmmcGn.setupTeam.call(addressvlsOJ5O, {from: accounts[2]});

		await expect(PACTHmmcGn.transfer.call(addressAdkGaKl, uintap7Gql9, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACThjxIhiY = await PACT.new({from: "0x0000000000000000000000000000000000000001"});
		const uintp7SWKSZ = BigInt("1948")
		const addresswDW8KMK = accounts[4]
		const addressUoEnA8i = accounts[1]
		const addresstfXx8N = accounts[4]
		const uintPjawyC = BigInt("1631")
		const addresszNLVu1I = accounts[0]
		const addresszyiRXrn = "0x0000000000000000000000000000000000000001"
		const booldXVNx9P = await PACThjxIhiY.burn.call(addresswDW8KMK, uintp7SWKSZ, {from: accounts[0]});
		const uintelWqEKc = await PACThjxIhiY.allowance.call(addresstfXx8N, addressUoEnA8i, {from: accounts[2]});
		const boolwk381u = await PACThjxIhiY.transferFrom.call(addresszyiRXrn, addresszNLVu1I, uintPjawyC, {from: accounts[1]});
		const stringMDjHHDs = await PACThjxIhiY.name.call({from: accounts[2]});
	});

	it('test for PACT', async () => {
		const PACTJNK9fk5 = await PACT.new({from: accounts[0]});
		const uintzIGj347 = BigInt("0")
		const addressOfVkTbg = accounts[5]
		const uintyUgnNkN = BigInt("1416")
		const addressTNeL8WH = accounts[0]
		const boolAtn8U7h = await PACTJNK9fk5.transfer.call(addressOfVkTbg, uintzIGj347, {from: accounts[0]});
		const bool9DLlff = await PACTJNK9fk5.burn.call(addressTNeL8WH, uintyUgnNkN, {from: accounts[4]});
		const uintKYTYfa8 = await PACTJNK9fk5.totalSupply.call({from: accounts[0]});

		assert.equal(boolAtn8U7h, true)
		await expect(PACTJNK9fk5.burn.call(addressTNeL8WH, uintyUgnNkN, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})