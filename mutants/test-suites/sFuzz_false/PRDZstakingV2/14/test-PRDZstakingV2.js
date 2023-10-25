const PRDZstakingV2 = artifacts.require("PRDZstakingV2");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('PRDZstakingV2', (accounts) => {
	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2zk3najE = await PRDZstakingV2.new({from: accounts[2]});
		const address3595Dj = accounts[1]
		const addressVzeqm1n = accounts[5]
		const uintBj3jfQw = await PRDZstakingV2zk3najE.getTotalFeeCollected.call({from: accounts[1]});
		const uintKV3BX9M = await PRDZstakingV2zk3najE.getTotalStaked.call({from: "0x0000000000000000000000000000000000000001"});
//		await PRDZstakingV2zk3najE.claimReward.call({from: accounts[5]});
//		const uintb1HQ00s = await PRDZstakingV2zk3najE.getStakingScore.call(address3595Dj, {from: accounts[5]});
//		const uintOgQWJhY = await PRDZstakingV2zk3najE.getPendingReward.call(addressVzeqm1n, {from: accounts[0]});

		assert.equal(uintBj3jfQw, BigInt("0"))
		assert.equal(uintKV3BX9M, BigInt("0"))
		await expect(PRDZstakingV2zk3najE.claimReward.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV236kjdO = await PRDZstakingV2.new({from: accounts[0]});
		const uintkXCIrkn = BigInt("132")
//		const uintj2zs46u = await PRDZstakingV236kjdO.stake.call(uintkXCIrkn, {from: accounts[5]});
//		const uintEXcfvv = await PRDZstakingV236kjdO.getTotalFeeCollected.call({from: accounts[0]});
//		await PRDZstakingV236kjdO.claimReward.call({from: accounts[1]});

		await expect(PRDZstakingV236kjdO.stake.call(uintkXCIrkn, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2XSJGdBB = await PRDZstakingV2.new({from: accounts[5]});
		const uinthuvdIJF = BigInt("199")
		const uintrDVpe1d = BigInt("1072")
		const addressTO3B9Rk = accounts[4]
//		const uintCgwopMo = await PRDZstakingV2XSJGdBB.unstake.call(uinthuvdIJF, {from: accounts[1]});
//		const uint3C4tdC = await PRDZstakingV2XSJGdBB.updateScoreEth.call(uintrDVpe1d, {from: accounts[2]});
//		const uinto8cvMn8 = await PRDZstakingV2XSJGdBB.getScoreEth.call(addressTO3B9Rk, {from: accounts[4]});

		await expect(PRDZstakingV2XSJGdBB.unstake.call(uinthuvdIJF, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2YrlQYUr = await PRDZstakingV2.new({from: accounts[3]});
		const uintfCQIBdy = BigInt("819")
		const uintm7eo5R = await PRDZstakingV2YrlQYUr.getTotalFeeCollected.call({from: accounts[3]});
//		await PRDZstakingV2YrlQYUr.onlyOwner.call({from: accounts[4]});
//		const uintOJLTiBh = await PRDZstakingV2YrlQYUr.updateScoreEth.call(uintfCQIBdy, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uintm7eo5R, BigInt("0"))
		await expect(PRDZstakingV2YrlQYUr.onlyOwner.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2OoKPYab = await PRDZstakingV2.new({from: accounts[3]});
		const uinth4FQbQi = BigInt("1224")
		const uintBag6vtW = await PRDZstakingV2OoKPYab.getNumberOfHolders.call({from: accounts[3]});
//		const uintcvvuUVw = await PRDZstakingV2OoKPYab.unstake.call(uinth4FQbQi, {from: accounts[3]});

		assert.equal(uintBag6vtW, BigInt("0"))
		await expect(PRDZstakingV2OoKPYab.unstake.call(uinth4FQbQi, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2Q4prrV = await PRDZstakingV2.new({from: accounts[4]});
		const addressstbqn7z = accounts[0]
		const uintY6vlc8c = await PRDZstakingV2Q4prrV.getTotalStaked.call({from: accounts[3]});
		const uintKkRDumt = await PRDZstakingV2Q4prrV.getTotalUnStaked.call({from: accounts[0]});
		const uintEQrI34 = await PRDZstakingV2Q4prrV.getNumberOfHolders.call({from: accounts[4]});
		const uintm9N1mZy = await PRDZstakingV2Q4prrV.getPendingReward.call(addressstbqn7z, {from: accounts[0]});

		assert.equal(uintEQrI34, BigInt("0"))
		assert.equal(uintKkRDumt, BigInt("0"))
		assert.equal(uintY6vlc8c, BigInt("0"))
		assert.equal(uintm9N1mZy, BigInt("0"))
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2zk3najE = await PRDZstakingV2.new({from: accounts[2]});
		const addresstXtInBn = accounts[1]
		const addresszurFCF1 = accounts[5]
		const uintBj3jfQw = await PRDZstakingV2zk3najE.getTotalFeeCollected.call({from: accounts[1]});
		const uintKV3BX9M = await PRDZstakingV2zk3najE.getTotalStaked.call({from: "0x0000000000000000000000000000000000000001"});
//		await PRDZstakingV2zk3najE.claimReward.call({from: accounts[5]});
//		await PRDZstakingV2zk3najE.deposit.call({from: "0x0000000000000000000000000000000000000001"});
//		const uintb1HQ00s = await PRDZstakingV2zk3najE.getStakingScore.call(addresstXtInBn, {from: accounts[5]});
//		await PRDZstakingV2zk3najE.deposit.call({from: accounts[2]});
//		const uintOgQWJhY = await PRDZstakingV2zk3najE.getPendingReward.call(addresszurFCF1, {from: accounts[0]});

		assert.equal(uintBj3jfQw, BigInt("0"))
		assert.equal(uintKV3BX9M, BigInt("0"))
		await expect(PRDZstakingV2zk3najE.claimReward.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2OoKPYab = await PRDZstakingV2.new({from: accounts[3]});
		const addressbZecIh = accounts[0]
		const uintm9K7mjG = await PRDZstakingV2OoKPYab.getScoreEth.call(addressbZecIh, {from: accounts[1]});
		const uintBag6vtW = await PRDZstakingV2OoKPYab.getNumberOfHolders.call({from: accounts[3]});
		const uintOsBhkdD = await PRDZstakingV2OoKPYab.getTotalClaimed.call({from: accounts[1]});

		assert.equal(uintBag6vtW, BigInt("0"))
		assert.equal(uintOsBhkdD, BigInt("0"))
		assert.equal(uintm9K7mjG, BigInt("0"))
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2zVWbmPv = await PRDZstakingV2.new({from: accounts[0]});
//		await PRDZstakingV2zVWbmPv.claimReward.call({from: accounts[2]});
//		await PRDZstakingV2zVWbmPv.claimScoreEth.call({from: accounts[0]});
//		const uintOpIYB23 = await PRDZstakingV2zVWbmPv.getNumberOfHolders.call({from: accounts[2]});
//		const uintbG7EFQK = await PRDZstakingV2zVWbmPv.getTotalUnStaked.call({from: accounts[2]});
//		await PRDZstakingV2zVWbmPv.deposit.call({from: accounts[3]});
//		await PRDZstakingV2zVWbmPv.claimReward.call({from: accounts[5]});

		await expect(PRDZstakingV2zVWbmPv.claimReward.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2jMtLigy = await PRDZstakingV2.new({from: accounts[2]});
		const uintHIwXBR0 = BigInt("901")
		const uintHDVGU8f = BigInt("1632")
		const addressWMjWDwr = accounts[3]
		const uinttjc6waQ = await PRDZstakingV2jMtLigy.getNumberOfHolders.call({from: accounts[2]});
//		await PRDZstakingV2jMtLigy.deposit.call({from: accounts[1]});
//		const uintvrMitfD = await PRDZstakingV2jMtLigy.updateOffer.call(uintHDVGU8f, uintHIwXBR0, {from: accounts[2]});
//		const uintG9IFMb5 = await PRDZstakingV2jMtLigy.getScoreEth.call(addressWMjWDwr, {from: accounts[1]});
//		await PRDZstakingV2jMtLigy.claimScoreEth.call({from: accounts[4]});

		assert.equal(uinttjc6waQ, BigInt("0"))
		await expect(PRDZstakingV2jMtLigy.deposit.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2VXsg6B = await PRDZstakingV2.new({from: "0x0000000000000000000000000000000000000001"});
		const addressdcHbfRo = "0x0000000000000000000000000000000000000001"
		const uintBOkf1n = BigInt("779")
		const uintpIH6KSB = BigInt("1944")
		const uintMR7hWIn = BigInt("1508")
		const uintdNU0dfj = await PRDZstakingV2VXsg6B.getStakingScore.call(addressdcHbfRo, {from: accounts[5]});
		const uintaSRWVD = await PRDZstakingV2VXsg6B.updateOffer.call(uintpIH6KSB, uintBOkf1n, {from: accounts[4]});
		const uintrsfWGBQ = await PRDZstakingV2VXsg6B.getTotalFeeCollected.call({from: accounts[1]});
		const uintWUPBpS3 = await PRDZstakingV2VXsg6B.unstake.call(uintMR7hWIn, {from: accounts[3]});
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2zk3najE = await PRDZstakingV2.new({from: accounts[2]});
		const addresseueWcxs = accounts[2]
		const addressX5lzHCH = accounts[3]
		const addressc18bn0 = accounts[0]
		const uintb1HQ00s = await PRDZstakingV2zk3najE.getStakingScore.call(addresseueWcxs, {from: accounts[5]});
		const addressOeFHDub = await PRDZstakingV2zk3najE.transferOwnership.call(addressX5lzHCH, {from: accounts[2]});
//		await PRDZstakingV2zk3najE.claimReward.call({from: accounts[3]});
//		const uintJx9LaFo = await PRDZstakingV2zk3najE.getNumberOfHolders.call({from: accounts[0]});
//		const uintwwYTnAU = await PRDZstakingV2zk3najE.getPendingReward.call(addressc18bn0, {from: accounts[2]});

		assert.equal(uintb1HQ00s, BigInt("0"))
		await expect(PRDZstakingV2zk3najE.claimReward.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2jeKja3C = await PRDZstakingV2.new({from: accounts[4]});
		const uintu4CuGs = BigInt("1535")
		const uintWLSykqi = await PRDZstakingV2jeKja3C.getNumberOfHolders.call({from: accounts[0]});
		const uintf3B1dB0 = await PRDZstakingV2jeKja3C.updateScoreEth.call(uintu4CuGs, {from: accounts[4]});
//		await PRDZstakingV2jeKja3C.claimReward.call({from: accounts[4]});

		assert.equal(uintWLSykqi, BigInt("0"))
		await expect(PRDZstakingV2jeKja3C.claimReward.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});
})