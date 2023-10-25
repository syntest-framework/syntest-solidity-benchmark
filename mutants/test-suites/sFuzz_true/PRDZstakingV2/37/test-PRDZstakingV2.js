const PRDZstakingV2 = artifacts.require("PRDZstakingV2");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('PRDZstakingV2', (accounts) => {
	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2MJTPxfx = await PRDZstakingV2.new({from: accounts[4]});
		const addressNeaSf0S = accounts[0]
		const uintm0dFFz3 = await PRDZstakingV2MJTPxfx.getTotalStaked.call({from: accounts[5]});
		const uinta3WsZHi = await PRDZstakingV2MJTPxfx.getTotalClaimed.call({from: accounts[1]});
		const uint67TAQA = await PRDZstakingV2MJTPxfx.getPendingReward.call(addressNeaSf0S, {from: accounts[1]});
//		await PRDZstakingV2MJTPxfx.claimScoreEth.call({from: accounts[4]});

		assert.equal(uint67TAQA, BigInt("0"))
		assert.equal(uinta3WsZHi, BigInt("0"))
		assert.equal(uintm0dFFz3, BigInt("0"))
		await expect(PRDZstakingV2MJTPxfx.claimScoreEth.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2gzaYiCN = await PRDZstakingV2.new({from: accounts[1]});
		const addressSSjNZlx = "0x0000000000000000000000000000000000000001"
		const addressREJidcQ = accounts[4]
		const addresszSlRbZS = accounts[2]
		const uintTXPsYVY = await PRDZstakingV2gzaYiCN.getScoreEth.call(addressSSjNZlx, {from: accounts[1]});
		const uintxCNxEqN = await PRDZstakingV2gzaYiCN.getScoreEth.call(addressREJidcQ, {from: accounts[3]});
		const uintK40DdPu = await PRDZstakingV2gzaYiCN.getTotalStaked.call({from: "0x0000000000000000000000000000000000000001"});
		const uintNEtd15R = await PRDZstakingV2gzaYiCN.getScoreEth.call(addresszSlRbZS, {from: accounts[0]});
		const uintrb0a8vW = await PRDZstakingV2gzaYiCN.getTotalStaked.call({from: accounts[2]});

		assert.equal(uintK40DdPu, BigInt("0"))
		assert.equal(uintNEtd15R, BigInt("0"))
		assert.equal(uintTXPsYVY, BigInt("0"))
		assert.equal(uintrb0a8vW, BigInt("0"))
		assert.equal(uintxCNxEqN, BigInt("0"))
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2S1hdaou = await PRDZstakingV2.new({from: accounts[0]});
		const addressVjcY71b = accounts[5]
		const addressUHuD1lx = accounts[4]
//		const addressxCxf5OX = await PRDZstakingV2S1hdaou.transferOwnership.call(addressVjcY71b, {from: accounts[3]});
//		const addressgdv9QVy = await PRDZstakingV2S1hdaou.transferOwnership.call(addressUHuD1lx, {from: accounts[4]});

		await expect(PRDZstakingV2S1hdaou.transferOwnership.call(addressVjcY71b, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2gp2bkiw = await PRDZstakingV2.new({from: accounts[1]});
		const addresshYwBH6E = accounts[0]
		const addressWxI18yS = accounts[1]
		const addresscbA1VAb = await PRDZstakingV2gp2bkiw.transferOwnership.call(addresshYwBH6E, {from: accounts[1]});
		const uintZe2JV9t = await PRDZstakingV2gp2bkiw.getScoreEth.call(addressWxI18yS, {from: accounts[1]});
		const uintgxowyp6 = await PRDZstakingV2gp2bkiw.getTotalStaked.call({from: accounts[0]});

		assert.equal(uintZe2JV9t, BigInt("0"))
		assert.equal(uintgxowyp6, BigInt("0"))
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2sORE4AZ = await PRDZstakingV2.new({from: accounts[2]});
		const addressPuxFa25 = accounts[0]
		const addressTkYhjdO = accounts[0]
		const uintDSzTGIZ = BigInt("324")
		const uintvGMq91K = await PRDZstakingV2sORE4AZ.getTotalStaked.call({from: accounts[5]});
		const uintYxgckBR = await PRDZstakingV2sORE4AZ.getTotalFeeCollected.call({from: accounts[2]});
		const uintEda1mFy = await PRDZstakingV2sORE4AZ.getPendingReward.call(addressPuxFa25, {from: accounts[1]});
		const uintM4bsbL = await PRDZstakingV2sORE4AZ.getTotalFeeCollected.call({from: accounts[1]});
		const uintCoCVDNM = await PRDZstakingV2sORE4AZ.getScoreEth.call(addressTkYhjdO, {from: accounts[0]});
//		const uintEqtrc3 = await PRDZstakingV2sORE4AZ.unstake.call(uintDSzTGIZ, {from: accounts[4]});

		assert.equal(uintCoCVDNM, BigInt("0"))
		assert.equal(uintEda1mFy, BigInt("0"))
		assert.equal(uintM4bsbL, BigInt("0"))
		assert.equal(uintYxgckBR, BigInt("0"))
		assert.equal(uintvGMq91K, BigInt("0"))
		await expect(PRDZstakingV2sORE4AZ.unstake.call(uintDSzTGIZ, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2jDSdjM2 = await PRDZstakingV2.new({from: accounts[3]});
//		await PRDZstakingV2jDSdjM2.claimReward.call({from: accounts[0]});
//		const uintSkI0uiT = await PRDZstakingV2jDSdjM2.getTotalUnStaked.call({from: accounts[4]});
//		const uintvTwAMz = await PRDZstakingV2jDSdjM2.getTotalUnStaked.call({from: accounts[1]});
//		await PRDZstakingV2jDSdjM2.claimReward.call({from: accounts[3]});

		await expect(PRDZstakingV2jDSdjM2.claimReward.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2WvhOL5r = await PRDZstakingV2.new({from: accounts[3]});
		const uintuwegRt = BigInt("243")
		const uinttSVl5M = BigInt("1293")
		const uintvwxmFyA = await PRDZstakingV2WvhOL5r.getNumberOfHolders.call({from: accounts[3]});
		const uintabw7fV0 = await PRDZstakingV2WvhOL5r.getTotalFeeCollected.call({from: accounts[2]});
		const uintnKwBZS3 = await PRDZstakingV2WvhOL5r.getTotalClaimed.call({from: accounts[5]});
//		const uintmXCqr1F = await PRDZstakingV2WvhOL5r.updateScoreEth.call(uintuwegRt, {from: accounts[4]});
//		const uintXs71taA = await PRDZstakingV2WvhOL5r.unstake.call(uinttSVl5M, {from: accounts[1]});

		assert.equal(uintabw7fV0, BigInt("0"))
		assert.equal(uintnKwBZS3, BigInt("0"))
		assert.equal(uintvwxmFyA, BigInt("0"))
		await expect(PRDZstakingV2WvhOL5r.updateScoreEth.call(uintuwegRt, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2CmIqtsA = await PRDZstakingV2.new({from: accounts[4]});
//		await PRDZstakingV2CmIqtsA.deposit.call({from: accounts[4]});
//		const uinttWjloui = await PRDZstakingV2CmIqtsA.getTotalStaked.call({from: accounts[2]});
//		const uintpSReH1f = await PRDZstakingV2CmIqtsA.getTotalUnStaked.call({from: accounts[1]});
//		await PRDZstakingV2CmIqtsA.claimReward.call({from: accounts[4]});

		await expect(PRDZstakingV2CmIqtsA.deposit.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2gp2bkiw = await PRDZstakingV2.new({from: accounts[1]});
		const addressHpJSB2V = accounts[1]
		const uintBOcHCX3 = BigInt("1720")
		const addressnIboE29 = accounts[1]
		const addresscbA1VAb = await PRDZstakingV2gp2bkiw.transferOwnership.call(addressHpJSB2V, {from: accounts[1]});
		const uintaqHxpY = await PRDZstakingV2gp2bkiw.updateScoreEth.call(uintBOcHCX3, {from: accounts[1]});
		const uintZe2JV9t = await PRDZstakingV2gp2bkiw.getScoreEth.call(addressnIboE29, {from: accounts[1]});
		const uintgxowyp6 = await PRDZstakingV2gp2bkiw.getTotalStaked.call({from: accounts[0]});
//		await PRDZstakingV2gp2bkiw.claimReward.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uintZe2JV9t, BigInt("0"))
		assert.equal(uintgxowyp6, BigInt("0"))
		await expect(PRDZstakingV2gp2bkiw.claimReward.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2gp2bkiw = await PRDZstakingV2.new({from: accounts[1]});
		const addressFQtOa8N = accounts[4]
		const addressnQlHzw = accounts[2]
		const uintOFbWooD = BigInt("1085")
		const addressK8zIQ1 = accounts[3]
		const uintXPkhKUg = await PRDZstakingV2gp2bkiw.getStakingScore.call(addressFQtOa8N, {from: "0x0000000000000000000000000000000000000001"});
		const uintZe2JV9t = await PRDZstakingV2gp2bkiw.getScoreEth.call(addressnQlHzw, {from: accounts[1]});
//		const uintsrqMV8j = await PRDZstakingV2gp2bkiw.unstake.call(uintOFbWooD, {from: accounts[0]});
//		const uintlI4xRpq = await PRDZstakingV2gp2bkiw.getScoreEth.call(addressK8zIQ1, {from: accounts[1]});
//		const uintgxowyp6 = await PRDZstakingV2gp2bkiw.getTotalStaked.call({from: accounts[0]});

		assert.equal(uintXPkhKUg, BigInt("0"))
		assert.equal(uintZe2JV9t, BigInt("0"))
		await expect(PRDZstakingV2gp2bkiw.unstake.call(uintOFbWooD, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2OnrOK5 = await PRDZstakingV2.new({from: "0x0000000000000000000000000000000000000001"});
		const uinttpdjEcv = await PRDZstakingV2OnrOK5.getTotalUnStaked.call({from: accounts[4]});
		const uintjuBh1k = await PRDZstakingV2OnrOK5.getNumberOfHolders.call({from: accounts[0]});
		await PRDZstakingV2OnrOK5.claimScoreEth.call({from: accounts[4]});
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2MJTPxfx = await PRDZstakingV2.new({from: accounts[4]});
		const uinttCOrz55 = BigInt("339")
		const uintm0dFFz3 = await PRDZstakingV2MJTPxfx.getTotalStaked.call({from: accounts[5]});
		const uinta3WsZHi = await PRDZstakingV2MJTPxfx.getTotalClaimed.call({from: accounts[1]});
//		await PRDZstakingV2MJTPxfx.claimScoreEth.call({from: accounts[4]});
//		const uintyxNCU33 = await PRDZstakingV2MJTPxfx.stake.call(uinttCOrz55, {from: accounts[2]});

		assert.equal(uinta3WsZHi, BigInt("0"))
		assert.equal(uintm0dFFz3, BigInt("0"))
		await expect(PRDZstakingV2MJTPxfx.claimScoreEth.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2Mdd4ol = await PRDZstakingV2.new({from: accounts[5]});
		const uintiw4c283 = BigInt("1076")
		const uintXzJVq6i = BigInt("1406")
//		await PRDZstakingV2Mdd4ol.claimScoreEth.call({from: accounts[2]});
//		await PRDZstakingV2Mdd4ol.deposit.call({from: accounts[5]});
//		const uintBsh7UoI = await PRDZstakingV2Mdd4ol.updateOffer.call(uintXzJVq6i, uintiw4c283, {from: accounts[5]});

		await expect(PRDZstakingV2Mdd4ol.claimScoreEth.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2mJNTZQ = await PRDZstakingV2.new({from: accounts[0]});
		const uintUnM7yOt = BigInt("801")
		const addressYteEVht = accounts[1]
//		await PRDZstakingV2mJNTZQ.claimReward.call({from: accounts[3]});
//		await PRDZstakingV2mJNTZQ.onlyOwner.call({from: accounts[1]});
//		const uintl6hcvnX = await PRDZstakingV2mJNTZQ.updateScoreEth.call(uintUnM7yOt, {from: accounts[2]});
//		const uinttSwwMFZ = await PRDZstakingV2mJNTZQ.getPendingReward.call(addressYteEVht, {from: accounts[0]});

		await expect(PRDZstakingV2mJNTZQ.claimReward.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});
})