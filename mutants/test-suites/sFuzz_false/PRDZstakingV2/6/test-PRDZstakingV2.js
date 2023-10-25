const PRDZstakingV2 = artifacts.require("PRDZstakingV2");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('PRDZstakingV2', (accounts) => {
	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2FW8D0px = await PRDZstakingV2.new({from: accounts[1]});
		const addressyPUmzfE = accounts[4]
		const addressEhJhpYu = "0x0000000000000000000000000000000000000001"
//		const addressBCQa5aU = await PRDZstakingV2FW8D0px.transferOwnership.call(addressyPUmzfE, {from: accounts[3]});
//		const address68nM3o = await PRDZstakingV2FW8D0px.transferOwnership.call(addressEhJhpYu, {from: accounts[0]});

		await expect(PRDZstakingV2FW8D0px.transferOwnership.call(addressyPUmzfE, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2ycF8zfM = await PRDZstakingV2.new({from: accounts[1]});
		const addressnODyC1D = accounts[2]
//		await PRDZstakingV2ycF8zfM.claimReward.call({from: accounts[0]});
//		const uint9vaNhM = await PRDZstakingV2ycF8zfM.getStakingScore.call(addressnODyC1D, {from: accounts[2]});

		await expect(PRDZstakingV2ycF8zfM.claimReward.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2lb0TMMW = await PRDZstakingV2.new({from: accounts[5]});
		const uintNr7if9E = BigInt("1282")
		const addressX5xicHH = accounts[0]
		const uintfWGUUT1 = BigInt("522")
		const addresswTU2V6X = accounts[3]
		const uintiK7HLot = await PRDZstakingV2lb0TMMW.getTotalFeeCollected.call({from: accounts[0]});
//		const uintYYKXLyj = await PRDZstakingV2lb0TMMW.unstake.call(uintNr7if9E, {from: "0x0000000000000000000000000000000000000001"});
//		const addressn0Shydo = await PRDZstakingV2lb0TMMW.transferOwnership.call(addressX5xicHH, {from: accounts[3]});
//		const uintzDw0SBj = await PRDZstakingV2lb0TMMW.updateScoreEth.call(uintfWGUUT1, {from: accounts[1]});
//		const addresslPeubL7 = await PRDZstakingV2lb0TMMW.transferOwnership.call(addresswTU2V6X, {from: accounts[4]});
//		await PRDZstakingV2lb0TMMW.onlyOwner.call({from: accounts[4]});

		assert.equal(uintiK7HLot, BigInt("0"))
		await expect(PRDZstakingV2lb0TMMW.unstake.call(uintNr7if9E, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2RSvpCLB = await PRDZstakingV2.new({from: "0x0000000000000000000000000000000000000001"});
		const uintnaqaddP = BigInt("1932")
		const uintvv11kT8 = await PRDZstakingV2RSvpCLB.stake.call(uintnaqaddP, {from: accounts[5]});
		await PRDZstakingV2RSvpCLB.deposit.call({from: accounts[0]});
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2w4ShroL = await PRDZstakingV2.new({from: accounts[1]});
		const uintpqNycNl = BigInt("1715")
		const addresshAY0lpv = "0x0000000000000000000000000000000000000001"
//		const uintOSn6z5d = await PRDZstakingV2w4ShroL.stake.call(uintpqNycNl, {from: accounts[2]});
//		const uintQrhklF = await PRDZstakingV2w4ShroL.getStakingScore.call(addresshAY0lpv, {from: "0x0000000000000000000000000000000000000001"});
//		const uintsR558lh = await PRDZstakingV2w4ShroL.getTotalClaimed.call({from: accounts[0]});

		await expect(PRDZstakingV2w4ShroL.stake.call(uintpqNycNl, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV23J1E26 = await PRDZstakingV2.new({from: accounts[0]});
		const addressNbYV1l = "0x0000000000000000000000000000000000000001"
		const uintogjkeLt = BigInt("814")
		const uintEbjhb8I = await PRDZstakingV23J1E26.getScoreEth.call(addressNbYV1l, {from: accounts[4]});
//		await PRDZstakingV23J1E26.claimScoreEth.call({from: accounts[3]});
//		await PRDZstakingV23J1E26.deposit.call({from: accounts[2]});
//		const uintizhewhb = await PRDZstakingV23J1E26.updateScoreEth.call(uintogjkeLt, {from: accounts[3]});

		assert.equal(uintEbjhb8I, BigInt("0"))
		await expect(PRDZstakingV23J1E26.claimScoreEth.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2HTvKE4W = await PRDZstakingV2.new({from: accounts[3]});
//		await PRDZstakingV2HTvKE4W.claimScoreEth.call({from: accounts[5]});
//		const uintzoyTqAY = await PRDZstakingV2HTvKE4W.getTotalFeeCollected.call({from: "0x0000000000000000000000000000000000000001"});
//		const uintod3V7YA = await PRDZstakingV2HTvKE4W.getNumberOfHolders.call({from: accounts[0]});
//		const uintaHaVA2 = await PRDZstakingV2HTvKE4W.getTotalUnStaked.call({from: accounts[3]});
//		await PRDZstakingV2HTvKE4W.onlyOwner.call({from: accounts[4]});

		await expect(PRDZstakingV2HTvKE4W.claimScoreEth.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2w4ShroL = await PRDZstakingV2.new({from: accounts[1]});
		const addressAYDOeOQ = "0x0000000000000000000000000000000000000002"
		const uintQrhklF = await PRDZstakingV2w4ShroL.getStakingScore.call(addressAYDOeOQ, {from: "0x0000000000000000000000000000000000000001"});
		const uintsR558lh = await PRDZstakingV2w4ShroL.getTotalClaimed.call({from: accounts[0]});

		assert.equal(uintQrhklF, BigInt("0"))
		assert.equal(uintsR558lh, BigInt("0"))
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2ycF8zfM = await PRDZstakingV2.new({from: accounts[1]});
		const addressEC2Jmh = accounts[2]
//		await PRDZstakingV2ycF8zfM.claimReward.call({from: accounts[0]});
//		await PRDZstakingV2ycF8zfM.claimReward.call({from: accounts[2]});
//		const uint9vaNhM = await PRDZstakingV2ycF8zfM.getStakingScore.call(addressEC2Jmh, {from: accounts[2]});
//		const uintQ84HtHh = await PRDZstakingV2ycF8zfM.getTotalStaked.call({from: accounts[4]});

		await expect(PRDZstakingV2ycF8zfM.claimReward.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2w4ShroL = await PRDZstakingV2.new({from: accounts[1]});
		const addressJepp6sc = "0x0000000000000000000000000000000000000001"
		const uintSIGoB3l = BigInt("450")
		const uintZeEVPhg = BigInt("1960")
		const uintdOjD2rv = await PRDZstakingV2w4ShroL.getTotalUnStaked.call({from: accounts[2]});
		const uintQrhklF = await PRDZstakingV2w4ShroL.getStakingScore.call(addressJepp6sc, {from: "0x0000000000000000000000000000000000000001"});
		const uinttR43AFR = await PRDZstakingV2w4ShroL.updateOffer.call(uintZeEVPhg, uintSIGoB3l, {from: accounts[1]});

		assert.equal(uintQrhklF, BigInt("0"))
		assert.equal(uintdOjD2rv, BigInt("0"))
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2ycF8zfM = await PRDZstakingV2.new({from: accounts[1]});
		const addressCPcsilU = accounts[3]
		const address7Dws7g = accounts[0]
		const uint9vaNhM = await PRDZstakingV2ycF8zfM.getStakingScore.call(addressCPcsilU, {from: accounts[2]});
		const addressylrYA9 = await PRDZstakingV2ycF8zfM.transferOwnership.call(address7Dws7g, {from: accounts[1]});

		assert.equal(uint9vaNhM, BigInt("0"))
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2ycF8zfM = await PRDZstakingV2.new({from: accounts[1]});
		const addressJFBt4sJ = accounts[1]
		const uintL8wYubI = BigInt("528")
		const addressj1GrWty = accounts[3]
		const uintlsYZ5O = await PRDZstakingV2ycF8zfM.getStakingScore.call(addressJFBt4sJ, {from: accounts[4]});
		const uintyMfjuu = await PRDZstakingV2ycF8zfM.updateScoreEth.call(uintL8wYubI, {from: accounts[1]});
		const uint25Lc4b = await PRDZstakingV2ycF8zfM.getScoreEth.call(addressj1GrWty, {from: accounts[3]});

		assert.equal(uint25Lc4b, BigInt("0"))
		assert.equal(uintlsYZ5O, BigInt("0"))
	});
})