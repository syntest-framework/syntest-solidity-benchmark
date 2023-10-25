const YRX3 = artifacts.require("YRX3");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('YRX3', (accounts) => {
	it('test for YRX3', async () => {
		const YRX3TIEupQC = await YRX3.new({from: accounts[2]});
		const uintxEEjfet = BigInt("471")
		const addresshObmfBl = accounts[4]
		const addressXtaQcRW = accounts[2]
		const addressR87JX6o = accounts[2]
		const uintA9ecTxl = BigInt("909")
//		const uint256q2CWPDk = await YRX3TIEupQC.withdraw.call(uintxEEjfet, {from: accounts[4]});
//		const addresslqt5beE = await YRX3TIEupQC.emergencyDrain.call(addresshObmfBl, {from: accounts[1]});
//		const uint256VrvxzzS = await YRX3TIEupQC.earned.call(addressXtaQcRW, {from: accounts[1]});
//		const addresscJggvWr = await YRX3TIEupQC.updateReward.call(addressR87JX6o, {from: accounts[3]});
//		const uint256uszADL = await YRX3TIEupQC.stake.call(uintA9ecTxl, {from: accounts[2]});

		await expect(YRX3TIEupQC.withdraw.call(uintxEEjfet, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3BAVAjVh = await YRX3.new({from: accounts[2]});
		const uintZobd9VR = BigInt("1420")
		const addressOtQJLJ = accounts[0]
//		const uint256V7cF4yn = await YRX3BAVAjVh.stake.call(uintZobd9VR, {from: accounts[3]});
//		const addressdnK35LM = await YRX3BAVAjVh.transferOwnership.call(addressOtQJLJ, {from: "0x0000000000000000000000000000000000000001"});
//		await YRX3BAVAjVh.renounceOwnership.call({from: accounts[4]});
//		await YRX3BAVAjVh.checkStart.call({from: accounts[4]});

		await expect(YRX3BAVAjVh.stake.call(uintZobd9VR, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3OtyyXTM = await YRX3.new({from: accounts[4]});
		const addressbraJD7R = accounts[3]
//		await YRX3OtyyXTM.checkNextEpoch.call({from: accounts[2]});
//		const uint256fXVShdE = await YRX3OtyyXTM.balanceOf.call(addressbraJD7R, {from: accounts[4]});

		await expect(YRX3OtyyXTM.checkNextEpoch.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3Rqg6d6y = await YRX3.new({from: "0x0000000000000000000000000000000000000001"});
		const uintVAhfI9Q = BigInt("1553")
		const addressKqzlxF = accounts[3]
		const uint256PlDmqWy = await YRX3Rqg6d6y.withdraw.call(uintVAhfI9Q, {from: accounts[5]});
		await YRX3Rqg6d6y.checkStart.call({from: accounts[2]});
		const uint256joGkCMo = await YRX3Rqg6d6y.earned.call(addressKqzlxF, {from: accounts[0]});
	});

	it('test for YRX3', async () => {
		const YRX3wQyQe1t = await YRX3.new({from: accounts[3]});
		const uintQyo675W = BigInt("838")
		const addressphm0Qat = accounts[5]
		const addressPvpFPg = accounts[4]
		const uint2562djPIA = await YRX3wQyQe1t.lastTimeRewardApplicable.call({from: accounts[4]});
//		await YRX3wQyQe1t.getReward.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256NC4h4nb = await YRX3wQyQe1t.withdraw.call(uintQyo675W, {from: accounts[1]});
//		const addressGanj1W3 = await YRX3wQyQe1t.transferOwnership.call(addressphm0Qat, {from: accounts[2]});
//		const addressBl04Mli = await YRX3wQyQe1t.transferOwnership.call(addressPvpFPg, {from: accounts[1]});

		assert.equal(uint2562djPIA, BigInt("0"))
		await expect(YRX3wQyQe1t.getReward.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3BAVAjVh = await YRX3.new({from: accounts[2]});
		const addressOA6gb8f = accounts[0]
		const addressdRJiW32 = accounts[2]
//		const addressdnK35LM = await YRX3BAVAjVh.transferOwnership.call(addressOA6gb8f, {from: "0x0000000000000000000000000000000000000001"});
//		await YRX3BAVAjVh.renounceOwnership.call({from: accounts[4]});
//		const addressrSYAaYK = await YRX3BAVAjVh.transferOwnership.call(addressdRJiW32, {from: accounts[3]});
//		const boolSFn0M2D = await YRX3BAVAjVh.isOwner.call({from: accounts[1]});
//		await YRX3BAVAjVh.checkStart.call({from: accounts[4]});
//		await YRX3BAVAjVh.exit.call({from: accounts[5]});

		await expect(YRX3BAVAjVh.transferOwnership.call(addressOA6gb8f, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3uaRwge = await YRX3.new({from: accounts[2]});
//		await YRX3uaRwge.exit.call({from: accounts[2]});

		await expect(YRX3uaRwge.exit.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3uaRwge = await YRX3.new({from: accounts[2]});
		const addresslV2KxNV = accounts[3]
		const addressb7mDDqr = await YRX3uaRwge.setRewardDistribution.call(addresslV2KxNV, {from: accounts[2]});
//		await YRX3uaRwge.exit.call({from: accounts[2]});

		await expect(YRX3uaRwge.exit.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3uaRwge = await YRX3.new({from: accounts[2]});
		const addresslnqVSW = accounts[1]
		const uintjbGibkY = BigInt("1525")
//		const addressF2cEsiy = await YRX3uaRwge.emergencyDrain.call(addresslnqVSW, {from: accounts[4]});
//		const uint256Jfb0mwZ = await YRX3uaRwge.stake.call(uintjbGibkY, {from: accounts[4]});
//		await YRX3uaRwge.exit.call({from: accounts[2]});

		await expect(YRX3uaRwge.emergencyDrain.call(addresslnqVSW, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3uaRwge = await YRX3.new({from: accounts[2]});
		const addressGRayE6U = await YRX3uaRwge.owner.call({from: accounts[3]});
//		await YRX3uaRwge.exit.call({from: accounts[2]});

		assert.equal(addressGRayE6U, 0xc2b7EAD3C7d402979615e21e7162d49e7D8DeFbE)
		await expect(YRX3uaRwge.exit.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3uaRwge = await YRX3.new({from: accounts[2]});
		const uintOptGKzL = BigInt("1389")
//		await YRX3uaRwge.renounceOwnership.call({from: accounts[2]});
//		await YRX3uaRwge.getReward.call({from: accounts[4]});
//		await YRX3uaRwge.checkStart.call({from: accounts[5]});
//		const uint256MOuQl2m = await YRX3uaRwge.stake.call(uintOptGKzL, {from: accounts[1]});

		await expect(YRX3uaRwge.renounceOwnership.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3uaRwge = await YRX3.new({from: accounts[2]});
		const addressFEnV7GF = accounts[1]
		const addressXJ1QkBv = accounts[1]
		const uint256BjMtIv = await YRX3uaRwge.balanceOf.call(addressFEnV7GF, {from: accounts[5]});
		const addressSQwkQZT = await YRX3uaRwge.transferOwnership.call(addressXJ1QkBv, {from: accounts[2]});
//		await YRX3uaRwge.getReward.call({from: accounts[4]});

		assert.equal(uint256BjMtIv, BigInt("0"))
		await expect(YRX3uaRwge.getReward.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});
})