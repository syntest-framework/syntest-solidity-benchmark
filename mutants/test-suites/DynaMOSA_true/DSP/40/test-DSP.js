const DSP = artifacts.require("DSP");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('DSP', (accounts) => {
	it('test for DSP', async () => {
		const stringATq7B0q = "VRDb2JU5I3fM9DTheZk4W52z9T6tqOprePNiyCyvGk2LAzyZtDHuzNYcILu3AKiQ6buCL0gL4f1r9BWWaChV5S"
		const stringNISXMn = "ch3sUmeRjwDcc1kkYGY2QlG6ss9WsorVuHvTpSFGYuh3HcosH5gmA7PBCN4hQJz2xCRQ8P6NHBhc2Od7AQiJ3zivaVv"
		const uintmwnhZA1 = BigInt("153")
		const DSPZXvOPkH = await DSP.new(stringATq7B0q, stringNISXMn, uintmwnhZA1, {from: accounts[0]});
		const uintJZydIwT = BigInt("2014")
		const addresstOg3QOK = "0x0000000000000000000000000000000000000001"
		const uintlzGrvjI = BigInt("39")
		const uintkmKQeTm = BigInt("1111")
		const addressBWJlCg7 = accounts[4]
		const addressIS4m15x = accounts[2]
		const boolMY7hg3x = await DSPZXvOPkH.approve.call(addresstOg3QOK, uintJZydIwT, {from: accounts[5]});
		const boolCVEpA15 = await DSPZXvOPkH.transferWithLock.call(addressBWJlCg7, uintkmKQeTm, uintlzGrvjI, {from: accounts[2]});
		const boolyAikpo2 = await DSPZXvOPkH.freezeAccount.call(addressIS4m15x, {from: accounts[5]});
	});

	it('test for DSP', async () => {
		const DSPdtmrsO7 = await DSP.new({from: accounts[1]});
		const addressueeDKy = accounts[1]
//		const addressZQsXwo = await DSPdtmrsO7.addPauser.call(addressueeDKy, {from: accounts[3]});
//		await DSPdtmrsO7.whenNotPaused.call({from: accounts[4]});

		await expect(DSPdtmrsO7.addPauser.call(addressueeDKy, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPP7p5wy = await DSP.new({from: accounts[0]});
		const addresscynev3s = "0x0000000000000000000000000000000000000001"
		const addressMs9T2Vn = accounts[2]
		const addressDynU1rL = accounts[3]
		const uintUeM6Ku3 = BigInt("1838")
		const addressT57jjGC = accounts[0]
		const boolYeautm0 = await DSPP7p5wy.isPauser.call(addresscynev3s, {from: accounts[3]});
		const booltyrZslf = await DSPP7p5wy.isOwner.call(addressMs9T2Vn, {from: accounts[0]});
		const uint2565HnWrR = await DSPP7p5wy.balanceOf.call(addressDynU1rL, {from: accounts[3]});
		const stringAUOAXaZ = await DSPP7p5wy.symbol.call({from: accounts[2]});
//		await DSPP7p5wy.whenPaused.call({from: "0x0000000000000000000000000000000000000001"});
//		const boolLknbYo5 = await DSPP7p5wy.increaseAllowance.call(addressT57jjGC, uintUeM6Ku3, {from: accounts[1]});

		assert.equal(boolYeautm0, false)
		assert.equal(booltyrZslf, false)
		assert.equal(stringAUOAXaZ, "DSP")
		assert.equal(uint2565HnWrR, BigInt("0"))
		await expect(DSPP7p5wy.whenPaused.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPP7p5wy = await DSP.new({from: accounts[0]});
		const addresssvDOgsd = "0x0000000000000000000000000000000000000002"
		const addressIix1dj9 = accounts[2]
		const addressFHWAY8 = accounts[3]
		const uintZ2xdhNd = BigInt("992")
		const addressIo4wWR7 = accounts[3]
		const uintSM1BFS = BigInt("1838")
		const addressDAgKrNJ = accounts[0]
		const boolYeautm0 = await DSPP7p5wy.isPauser.call(addresssvDOgsd, {from: accounts[3]});
		const booltyrZslf = await DSPP7p5wy.isOwner.call(addressIix1dj9, {from: accounts[0]});
		const uint2565HnWrR = await DSPP7p5wy.balanceOf.call(addressFHWAY8, {from: accounts[3]});
		const stringAUOAXaZ = await DSPP7p5wy.symbol.call({from: accounts[2]});
//		const booldp0PdTX = await DSPP7p5wy.transfer.call(addressIo4wWR7, uintZ2xdhNd, {from: accounts[2]});
//		await DSPP7p5wy.whenPaused.call({from: "0x0000000000000000000000000000000000000001"});
//		const stringyUgeh9U = await DSPP7p5wy.symbol.call({from: accounts[2]});
//		const boolLknbYo5 = await DSPP7p5wy.increaseAllowance.call(addressDAgKrNJ, uintSM1BFS, {from: accounts[1]});

		assert.equal(boolYeautm0, false)
		assert.equal(booltyrZslf, false)
		assert.equal(stringAUOAXaZ, "DSP")
		assert.equal(uint2565HnWrR, BigInt("0"))
		await expect(DSPP7p5wy.transfer.call(addressIo4wWR7, uintZ2xdhNd, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPP7p5wy = await DSP.new({from: accounts[0]});
		const addressu9zqHCt = "0x0000000000000000000000000000000000000001"
		const uintpSGxkMj = BigInt("914")
		const addressvY4UXAM = accounts[4]
		const address9BtkVl = accounts[3]
		const addressv2Zq20P = accounts[2]
		const uintW6qmR2M = BigInt("1838")
		const addressH8Yl73S = accounts[0]
		const boolYeautm0 = await DSPP7p5wy.isPauser.call(addressu9zqHCt, {from: accounts[3]});
		const bool6Zv7bs = await DSPP7p5wy.approve.call(addressvY4UXAM, uintpSGxkMj, {from: accounts[2]});
		const uint2565HnWrR = await DSPP7p5wy.balanceOf.call(address9BtkVl, {from: accounts[3]});
		const uint256YoWMXj7 = await DSPP7p5wy.balanceOf.call(addressv2Zq20P, {from: accounts[3]});
		const stringAUOAXaZ = await DSPP7p5wy.symbol.call({from: accounts[2]});
//		await DSPP7p5wy.whenPaused.call({from: "0x0000000000000000000000000000000000000001"});
//		const boolLknbYo5 = await DSPP7p5wy.increaseAllowance.call(addressH8Yl73S, uintW6qmR2M, {from: accounts[1]});

		assert.equal(bool6Zv7bs, true)
		assert.equal(boolYeautm0, false)
		assert.equal(stringAUOAXaZ, "DSP")
		assert.equal(uint2565HnWrR, BigInt("0"))
		assert.equal(uint256YoWMXj7, BigInt("0"))
		await expect(DSPP7p5wy.whenPaused.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPP7p5wy = await DSP.new({from: accounts[0]});
		const addresseoMAU8R = "0x0000000000000000000000000000000000000002"
		const addressQ4QsLcq = accounts[2]
		const uintRGuxv7W = BigInt("1467")
		const addresstYxMSFc = accounts[3]
		const addresscytjWmS = accounts[3]
		const addresskRYb7X1 = accounts[3]
		const uintV4YMzI7 = BigInt("992")
		const addressViT8lxq = accounts[3]
		const uintabBPINC = BigInt("1838")
		const addressYVrGyZA = accounts[0]
		const boolYeautm0 = await DSPP7p5wy.isPauser.call(addresseoMAU8R, {from: accounts[3]});
		const uint256YhqYQfC = await DSPP7p5wy.totalSupply.call({from: accounts[0]});
		const booltyrZslf = await DSPP7p5wy.isOwner.call(addressQ4QsLcq, {from: accounts[0]});
//		const booltVoUXw = await DSPP7p5wy.transferFrom.call(addresscytjWmS, addresstYxMSFc, uintRGuxv7W, {from: accounts[0]});
//		const uint2565HnWrR = await DSPP7p5wy.balanceOf.call(addresskRYb7X1, {from: accounts[3]});
//		const stringAUOAXaZ = await DSPP7p5wy.symbol.call({from: accounts[2]});
//		const booldp0PdTX = await DSPP7p5wy.transfer.call(addressViT8lxq, uintV4YMzI7, {from: accounts[2]});
//		await DSPP7p5wy.whenPaused.call({from: "0x0000000000000000000000000000000000000001"});
//		const boolLknbYo5 = await DSPP7p5wy.increaseAllowance.call(addressYVrGyZA, uintabBPINC, {from: accounts[1]});

		assert.equal(boolYeautm0, false)
		assert.equal(booltyrZslf, false)
		assert.equal(uint256YhqYQfC, BigInt("100000000000000000000000000000"))
		await expect(DSPP7p5wy.transferFrom.call(addresscytjWmS, addresstYxMSFc, uintRGuxv7W, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPP7p5wy = await DSP.new({from: accounts[0]});
		const addressAQtuEIN = "0x0000000000000000000000000000000000000001"
		const addressCpgFcqR = accounts[3]
		const uintO0PAfHq = BigInt("1838")
		const addressnJeQDnS = accounts[1]
		const boolYeautm0 = await DSPP7p5wy.isPauser.call(addressAQtuEIN, {from: accounts[3]});
		const uint2565HnWrR = await DSPP7p5wy.balanceOf.call(addressCpgFcqR, {from: accounts[3]});
		const stringAUOAXaZ = await DSPP7p5wy.symbol.call({from: accounts[2]});
		const boolWGqAc3u = await DSPP7p5wy.paused.call({from: accounts[1]});
//		await DSPP7p5wy.whenPaused.call({from: "0x0000000000000000000000000000000000000001"});
//		const boolLknbYo5 = await DSPP7p5wy.increaseAllowance.call(addressnJeQDnS, uintO0PAfHq, {from: accounts[1]});

		assert.equal(boolWGqAc3u, false)
		assert.equal(boolYeautm0, false)
		assert.equal(stringAUOAXaZ, "DSP")
		assert.equal(uint2565HnWrR, BigInt("0"))
		await expect(DSPP7p5wy.whenPaused.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPdtmrsO7 = await DSP.new({from: accounts[1]});
		const addressQqDF1YL = accounts[3]
		const stringvDDPxFP = await DSPdtmrsO7.name.call({from: accounts[1]});
//		const addressZQsXwo = await DSPdtmrsO7.addPauser.call(addressQqDF1YL, {from: accounts[3]});
//		const stringOCcxeGP = await DSPdtmrsO7.symbol.call({from: accounts[3]});

		assert.equal(stringvDDPxFP, "DSP")
		await expect(DSPdtmrsO7.addPauser.call(addressQqDF1YL, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPdtmrsO7 = await DSP.new({from: accounts[1]});
		const uintcpManw = BigInt("2015")
		const addresspGQUPIE = accounts[2]
		const addresscwrfwkq = accounts[3]
		const addressOiSAXwB = accounts[3]
//		const boolBYK7Yh5 = await DSPdtmrsO7.decreaseAllowance.call(addresspGQUPIE, uintcpManw, {from: accounts[2]});
//		const addressZQsXwo = await DSPdtmrsO7.addPauser.call(addresscwrfwkq, {from: accounts[3]});
//		const boolEORhYl3 = await DSPdtmrsO7.freezeAccount.call(addressOiSAXwB, {from: accounts[4]});

		await expect(DSPdtmrsO7.decreaseAllowance.call(addresspGQUPIE, uintcpManw, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPP7p5wy = await DSP.new({from: accounts[0]});
		const addressidph8X = "0x0000000000000000000000000000000000000001"
		const addressGJY2SuI = accounts[3]
		const uintJakDuD = BigInt("1838")
		const addressUtm47Dc = accounts[0]
		const boolYeautm0 = await DSPP7p5wy.isPauser.call(addressidph8X, {from: accounts[3]});
		const uint2565HnWrR = await DSPP7p5wy.balanceOf.call(addressGJY2SuI, {from: accounts[3]});
		const stringAUOAXaZ = await DSPP7p5wy.symbol.call({from: accounts[2]});
		const boolLknbYo5 = await DSPP7p5wy.increaseAllowance.call(addressUtm47Dc, uintJakDuD, {from: accounts[1]});

		assert.equal(boolLknbYo5, true)
		assert.equal(boolYeautm0, false)
		assert.equal(stringAUOAXaZ, "DSP")
		assert.equal(uint2565HnWrR, BigInt("0"))
	});

	it('test for DSP', async () => {
		const DSPdtmrsO7 = await DSP.new({from: accounts[1]});
		const uintJIMo4fH = BigInt("32")
		const addresst8154ga = accounts[2]
		const uintqoa8Lmi = BigInt("20")
		const addresshWbkVL1 = accounts[3]
		const addressiSmEMdP = accounts[1]
		const uintlwQ9eNH = BigInt("31")
		const addressCOY4WK = accounts[0]
		const addressRro58U7 = accounts[0]
		const boolHFV0YZO = await DSPdtmrsO7.mint.call(addresst8154ga, uintJIMo4fH, {from: accounts[1]});
//		const boolq0QsgQ8 = await DSPdtmrsO7.transferFrom.call(addressiSmEMdP, addresshWbkVL1, uintqoa8Lmi, {from: accounts[2]});
//		const boolnOep0DZ = await DSPdtmrsO7.transferFrom.call(addressRro58U7, addressCOY4WK, uintlwQ9eNH, {from: accounts[3]});

		assert.equal(boolHFV0YZO, true)
		await expect(DSPdtmrsO7.transferFrom.call(addressiSmEMdP, addresshWbkVL1, uintqoa8Lmi, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPdtmrsO7 = await DSP.new({from: accounts[1]});
		const addressUlc91Cv = "0x0000000000000000000000000000000000000001"
		const addressjsHWkf0 = accounts[1]
		const addressFq0PA9P = accounts[3]
		const uintujFU0wM = BigInt("20")
		const addressCupRLNi = accounts[3]
		const addresswPiIade = accounts[1]
		const addresscCKcckp = accounts[4]
		const uint256dSsQkqt = await DSPdtmrsO7.allowance.call(addressjsHWkf0, addressUlc91Cv, {from: accounts[4]});
		const boolsaogs2v = await DSPdtmrsO7.isPauser.call(addressFq0PA9P, {from: accounts[1]});
//		const boolq0QsgQ8 = await DSPdtmrsO7.transferFrom.call(addresswPiIade, addressCupRLNi, uintujFU0wM, {from: accounts[2]});
//		const addressZQsXwo = await DSPdtmrsO7.addPauser.call(addresscCKcckp, {from: accounts[3]});

		assert.equal(boolsaogs2v, false)
		assert.equal(uint256dSsQkqt, BigInt("0"))
		await expect(DSPdtmrsO7.transferFrom.call(addresswPiIade, addressCupRLNi, uintujFU0wM, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPdtmrsO7 = await DSP.new({from: accounts[1]});
		const address2Vw88W = accounts[3]
//		await DSPdtmrsO7.renouncePauser.call({from: accounts[3]});
//		const uint256tG0Nn7d = await DSPdtmrsO7.balanceOf.call(address2Vw88W, {from: accounts[2]});

		await expect(DSPdtmrsO7.renouncePauser.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPP7p5wy = await DSP.new({from: accounts[0]});
		const uintaU3R6E = BigInt("992")
		const addressjmqPm8R = accounts[5]
//		await DSPP7p5wy.renouncePauser.call({from: accounts[0]});
//		const booldp0PdTX = await DSPP7p5wy.transfer.call(addressjmqPm8R, uintaU3R6E, {from: accounts[2]});

		await expect(DSPP7p5wy.renouncePauser.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPbTVf187 = await DSP.new({from: accounts[0]});
		const addressQuxWhJ = "0x0000000000000000000000000000000000000001"
		const addressHSUvFG9 = accounts[1]
		const uint256wcutlQy = await DSPbTVf187.totalSupply.call({from: accounts[2]});
//		await DSPbTVf187.f.call({from: accounts[2]});
//		const addressLsZd2wM = await DSPbTVf187.addPauser.call(addressQuxWhJ, {from: accounts[2]});
//		const booljhEd9tr = await DSPbTVf187.isOwner.call(addressHSUvFG9, {from: accounts[3]});

		assert.equal(uint256wcutlQy, BigInt("100000000000000000000000000000"))
		await expect(DSPbTVf187.f.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPP7p5wy = await DSP.new({from: accounts[0]});
		const addressEBV3yxT = accounts[3]
		const uinthqJLiTs = BigInt("992")
		const addressCcdP22M = accounts[5]
		const addressy0SZJDe = await DSPP7p5wy.upgradeTo.call(addressEBV3yxT, {from: accounts[0]});
//		const booldp0PdTX = await DSPP7p5wy.transfer.call(addressCcdP22M, uinthqJLiTs, {from: accounts[2]});

		await expect(DSPP7p5wy.transfer.call(addressCcdP22M, uinthqJLiTs, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPdtmrsO7 = await DSP.new({from: accounts[1]});
		const uintFAo4m5K = BigInt("564")
		const addressF3XuDP = accounts[0]
		const addressFsXPqFR = accounts[3]
		const uintOhcYxMV = BigInt("1408")
		const addressshN3Kn = accounts[3]
		const boolq1wEEBV = await DSPdtmrsO7.transfer.call(addressF3XuDP, uintFAo4m5K, {from: accounts[1]});
//		const addressZQsXwo = await DSPdtmrsO7.addPauser.call(addressFsXPqFR, {from: accounts[3]});
//		const boolrWGES3W = await DSPdtmrsO7.transfer.call(addressshN3Kn, uintOhcYxMV, {from: accounts[3]});

		assert.equal(boolq1wEEBV, true)
		await expect(DSPdtmrsO7.addPauser.call(addressFsXPqFR, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPdtmrsO7 = await DSP.new({from: accounts[1]});
		const addressSIDIR8 = accounts[1]
		const addressCSts6Nl = accounts[2]
		const addressSZE4cD0 = accounts[3]
		const booljx9j3x3 = await DSPdtmrsO7.isOwner.call(addressSIDIR8, {from: accounts[3]});
		const uint256Hm3UDWw = await DSPdtmrsO7.balanceOf.call(addressCSts6Nl, {from: accounts[5]});
//		const addressZQsXwo = await DSPdtmrsO7.addPauser.call(addressSZE4cD0, {from: accounts[3]});

		assert.equal(booljx9j3x3, true)
		assert.equal(uint256Hm3UDWw, BigInt("0"))
		await expect(DSPdtmrsO7.addPauser.call(addressSZE4cD0, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPdtmrsO7 = await DSP.new({from: accounts[1]});
		const uintS4wNmuF = BigInt("1019")
		const uintPh2Ii1P = BigInt("1205")
		const addressCBVhStv = accounts[0]
		const addressSIShaR8 = accounts[2]
//		const boolsxXAnjC = await DSPdtmrsO7.lock.call(addressCBVhStv, uintPh2Ii1P, uintS4wNmuF, {from: accounts[1]});
//		const boolvEMiOms = await DSPdtmrsO7.paused.call({from: accounts[4]});
//		const uint256tG0Nn7d = await DSPdtmrsO7.balanceOf.call(addressSIShaR8, {from: accounts[2]});

		await expect(DSPdtmrsO7.lock.call(addressCBVhStv, uintPh2Ii1P, uintS4wNmuF, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPdtmrsO7 = await DSP.new({from: accounts[1]});
		const addressEdKCRv7 = accounts[2]
		const uintCgzCWb4 = BigInt("1766")
		const addressY0dpuFW = accounts[2]
		const addressPqESAFh = "0x0000000000000000000000000000000000000001"
		const uintVJREoG = BigInt("1668")
		const addressPJV04GR = accounts[3]
		const uint256tG0Nn7d = await DSPdtmrsO7.balanceOf.call(addressEdKCRv7, {from: accounts[2]});
		const stringYVZuESt = await DSPdtmrsO7.name.call({from: accounts[1]});
//		const boolYDaEbFZ = await DSPdtmrsO7.burnFrombyOwner.call(addressY0dpuFW, uintCgzCWb4, {from: accounts[1]});
//		const boolXNb3gvS = await DSPdtmrsO7.freezeAccount.call(addressPqESAFh, {from: accounts[5]});
//		const booltxUwKUi = await DSPdtmrsO7.transfer.call(addressPJV04GR, uintVJREoG, {from: accounts[1]});

		assert.equal(stringYVZuESt, "DSP")
		assert.equal(uint256tG0Nn7d, BigInt("0"))
		await expect(DSPdtmrsO7.burnFrombyOwner.call(addressY0dpuFW, uintCgzCWb4, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPQM2d7Vx = await DSP.new({from: "0x0000000000000000000000000000000000000001"});
		const addressxcuvl9 = accounts[0]
		const addressuBlSBPl = accounts[4]
		const addresshPbYjbF = accounts[1]
		const addressOL8ph3w = accounts[0]
		const uint8PpsHcEk = await DSPQM2d7Vx.decimals.call({from: accounts[3]});
		const uint256FlxcHiU = await DSPQM2d7Vx.allowance.call(addressuBlSBPl, addressxcuvl9, {from: accounts[1]});
		const boolZrVUlqM = await DSPQM2d7Vx.acceptOwnership.call({from: accounts[2]});
		const addressznKZVAq = await DSPQM2d7Vx.addPauser.call(addresshPbYjbF, {from: accounts[3]});
		const boolzK9Uhhy = await DSPQM2d7Vx.isOwner.call(addressOL8ph3w, {from: accounts[3]});
		await DSPQM2d7Vx.onlyOwner.call({from: accounts[1]});
	});

	it('test for DSP', async () => {
		const DSPdtmrsO7 = await DSP.new({from: accounts[1]});
		const addressjA2Ve3r = accounts[0]
		const uintPJOltD8 = BigInt("1019")
		const uintC6TvI7 = BigInt("1480")
		const addressajkTAEv = accounts[0]
		const addressQg4fjXR = await DSPdtmrsO7.addPauser.call(addressjA2Ve3r, {from: accounts[1]});
//		const boolsxXAnjC = await DSPdtmrsO7.lock.call(addressajkTAEv, uintC6TvI7, uintPJOltD8, {from: accounts[1]});

		await expect(DSPdtmrsO7.lock.call(addressajkTAEv, uintC6TvI7, uintPJOltD8, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPdtmrsO7 = await DSP.new({from: accounts[1]});
		const uintolGv2r = BigInt("1423")
		const addresskZblxRI = accounts[2]
		const addressO50lR11 = accounts[0]
		const addressxJpRNlb = accounts[5]
		const addressTxIrCFA = accounts[0]
		const uintWkMDUoe = BigInt("1019")
		const uintnOaYRfM = BigInt("1480")
		const addressKfA35GE = accounts[1]
		const boolYYbSpCm = await DSPdtmrsO7.approve.call(addresskZblxRI, uintolGv2r, {from: "0x0000000000000000000000000000000000000001"});
		const addressQg4fjXR = await DSPdtmrsO7.addPauser.call(addressO50lR11, {from: accounts[1]});
		const uint256eef4ze2 = await DSPdtmrsO7.allowance.call(addressTxIrCFA, addressxJpRNlb, {from: accounts[4]});
		const boolsxXAnjC = await DSPdtmrsO7.lock.call(addressKfA35GE, uintnOaYRfM, uintWkMDUoe, {from: accounts[1]});
		const boolgIwHGu2 = await DSPdtmrsO7.paused.call({from: accounts[2]});

		assert.equal(boolYYbSpCm, true)
		assert.equal(boolgIwHGu2, false)
		assert.equal(boolsxXAnjC, true)
		assert.equal(uint256eef4ze2, BigInt("0"))
	});

	it('test for DSP', async () => {
		const DSPdtmrsO7 = await DSP.new({from: accounts[1]});
		const addressWRqa0Ia = accounts[3]
		const uint256tG0Nn7d = await DSPdtmrsO7.balanceOf.call(addressWRqa0Ia, {from: accounts[2]});
		const uint8Oq54kA = await DSPdtmrsO7.decimals.call({from: accounts[0]});
//		await DSPdtmrsO7.whenNotPaused.call({from: accounts[5]});

		assert.equal(uint256tG0Nn7d, BigInt("0"))
		assert.equal(uint8Oq54kA, BigInt("18"))
		await expect(DSPdtmrsO7.whenNotPaused.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPdtmrsO7 = await DSP.new({from: accounts[1]});
		const uinttlDXDs2 = BigInt("1088")
		const addressHj8stO = accounts[0]
		const addressKN0Vesm = accounts[3]
		const uintHBY0OKv = BigInt("1455")
		const addressil4w4x3 = accounts[2]
		const boolv5Jl0az = await DSPdtmrsO7.increaseAllowance.call(addressHj8stO, uinttlDXDs2, {from: accounts[2]});
//		await DSPdtmrsO7.pause.call({from: accounts[1]});
//		const uint256tG0Nn7d = await DSPdtmrsO7.balanceOf.call(addressKN0Vesm, {from: accounts[2]});
//		const boolAA3ejHX = await DSPdtmrsO7.increaseAllowance.call(addressil4w4x3, uintHBY0OKv, {from: accounts[1]});

		assert.equal(boolv5Jl0az, true)
		await expect(DSPdtmrsO7.pause.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});
})