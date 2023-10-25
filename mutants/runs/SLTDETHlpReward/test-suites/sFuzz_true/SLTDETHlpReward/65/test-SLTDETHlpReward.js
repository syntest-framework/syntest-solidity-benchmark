const SLTDETHlpReward = artifacts.require("SLTDETHlpReward");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('SLTDETHlpReward', (accounts) => {
	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardv8m5nCs = await SLTDETHlpReward.new({from: accounts[3]});
		const addressxTz0p3F = accounts[4]
		const addressi5x5olR = accounts[1]
		const uintdvJAjL0 = BigInt("307")
		await SLTDETHlpRewardv8m5nCs.getReward.call({from: accounts[0]});
		const boolw80bskz = await SLTDETHlpRewardv8m5nCs.isOwner.call({from: accounts[5]});
		await SLTDETHlpRewardv8m5nCs.onlyRewardDistribution.call({from: accounts[1]});
		const addressrdRTFp = await SLTDETHlpRewardv8m5nCs.transferOwnership.call(addressxTz0p3F, {from: accounts[4]});
		const addressWpbEOPa = await SLTDETHlpRewardv8m5nCs.setStakeAddress.call(addressi5x5olR, {from: accounts[5]});
		const uint2560QjW0i = await SLTDETHlpRewardv8m5nCs.stake.call(uintdvJAjL0, {from: accounts[4]});

		await expect(SLTDETHlpRewardv8m5nCs.getReward.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardhrZtFyc = await SLTDETHlpReward.new({from: accounts[0]});
		const uintCN9Bl0j = BigInt("1287")
		const addressSsEnNsW = "0x0000000000000000000000000000000000000001"
		const uint256xNVyR0x = await SLTDETHlpRewardhrZtFyc.notifyRewardAmount.call(uintCN9Bl0j, {from: accounts[0]});
		const addressdXGUE0O = await SLTDETHlpRewardhrZtFyc.setStakeAddress.call(addressSsEnNsW, {from: accounts[4]});

		await expect(SLTDETHlpRewardhrZtFyc.setStakeAddress.call(addressSsEnNsW, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardnPg4lXu = await SLTDETHlpReward.new({from: accounts[2]});
		const uinti9ip2nT = BigInt("440")
		const uintJ5e80VC = BigInt("1448")
		const uinthl4RHig = BigInt("454")
		const uint256SnTau1o = await SLTDETHlpRewardnPg4lXu.stake.call(uinti9ip2nT, {from: accounts[3]});
		const boolHBvkCxE = await SLTDETHlpRewardnPg4lXu.isOwner.call({from: accounts[1]});
		const uint256iAjalu = await SLTDETHlpRewardnPg4lXu.notifyRewardAmount.call(uintJ5e80VC, {from: accounts[2]});
		await SLTDETHlpRewardnPg4lXu.checkStart.call({from: accounts[1]});
		const uint256pEjXX4w = await SLTDETHlpRewardnPg4lXu.notifyRewardAmount.call(uinthl4RHig, {from: accounts[0]});

		await expect(SLTDETHlpRewardnPg4lXu.stake.call(uinti9ip2nT, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardyXcbo9W = await SLTDETHlpReward.new({from: accounts[4]});
		const addressdE6Axkt = accounts[0]
		const uintQZcVt6Q = BigInt("1960")
		const uint256nqsPvA = await SLTDETHlpRewardyXcbo9W.remainingReward.call({from: accounts[1]});
		await SLTDETHlpRewardyXcbo9W.getReward.call({from: accounts[3]});
		const uint256YwTYpZ = await SLTDETHlpRewardyXcbo9W.earned.call(addressdE6Axkt, {from: "0x0000000000000000000000000000000000000001"});
		const boolzmTmewE = await SLTDETHlpRewardyXcbo9W.isOwner.call({from: accounts[2]});
		const uint256Qfv4XFk = await SLTDETHlpRewardyXcbo9W.notifyRewardAmount.call(uintQZcVt6Q, {from: accounts[4]});

		await expect(SLTDETHlpRewardyXcbo9W.remainingReward.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardPj7J3YS = await SLTDETHlpReward.new({from: accounts[1]});
		const addressjwlblM = accounts[3]
		const uintYaTBv6F = BigInt("1709")
		const addressRYXubGr = "0x0000000000000000000000000000000000000001"
		const uintjk8CR5b = BigInt("362")
		const uint256H6jTC70 = await SLTDETHlpRewardPj7J3YS.earned.call(addressjwlblM, {from: accounts[1]});
		const uint256eVMYDH4 = await SLTDETHlpRewardPj7J3YS.withdraw.call(uintYaTBv6F, {from: accounts[2]});
		const addresslhSSvUJ = await SLTDETHlpRewardPj7J3YS.updateReward.call(addressRYXubGr, {from: accounts[1]});
		const uint256GXAgsz6 = await SLTDETHlpRewardPj7J3YS.notifyRewardAmount.call(uintjk8CR5b, {from: accounts[3]});

		assert.equal(uint256H6jTC70, BigInt("0"))
		await expect(SLTDETHlpRewardPj7J3YS.withdraw.call(uintYaTBv6F, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardBPgRcmq = await SLTDETHlpReward.new({from: "0x0000000000000000000000000000000000000001"});
		const addressizyB29 = "0x0000000000000000000000000000000000000001"
		await SLTDETHlpRewardBPgRcmq.getReward.call({from: accounts[4]});
		const uint256Tc7jFNX = await SLTDETHlpRewardBPgRcmq.earned.call(addressizyB29, {from: accounts[5]});
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardb6F88rh = await SLTDETHlpReward.new({from: accounts[0]});
		const addressYDgcr9L = accounts[3]
		await SLTDETHlpRewardb6F88rh.renounceOwnership.call({from: accounts[0]});
		const boolqDEPHtt = await SLTDETHlpRewardb6F88rh.isOwner.call({from: accounts[3]});
		const addressxmKnU5g = await SLTDETHlpRewardb6F88rh.transferOwnership.call(addressYDgcr9L, {from: accounts[0]});
		await SLTDETHlpRewardb6F88rh.checkStart.call({from: accounts[5]});

		await expect(SLTDETHlpRewardb6F88rh.renounceOwnership.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardXakay3K = await SLTDETHlpReward.new({from: accounts[1]});
		const addressBnCzwiL = accounts[3]
		const addressND5dZnC = accounts[4]
		const uintvbFtgB4 = BigInt("1680")
		const addressZSBilZv = await SLTDETHlpRewardXakay3K.transferOwnership.call(addressBnCzwiL, {from: accounts[1]});
		const addressehHQ66L = await SLTDETHlpRewardXakay3K.transferOwnership.call(addressND5dZnC, {from: accounts[1]});
		const uint256Ymf1q5F = await SLTDETHlpRewardXakay3K.notifyRewardAmount.call(uintvbFtgB4, {from: accounts[0]});

		await expect(SLTDETHlpRewardXakay3K.notifyRewardAmount.call(uintvbFtgB4, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardhrZtFyc = await SLTDETHlpReward.new({from: accounts[0]});
		const uintwy3gSO = BigInt("1272")
		await SLTDETHlpRewardhrZtFyc.exit.call({from: accounts[5]});
		const boolVjzHjki = await SLTDETHlpRewardhrZtFyc.isOwner.call({from: accounts[1]});
		const uint256xNVyR0x = await SLTDETHlpRewardhrZtFyc.notifyRewardAmount.call(uintwy3gSO, {from: accounts[0]});

		await expect(SLTDETHlpRewardhrZtFyc.exit.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardhrZtFyc = await SLTDETHlpReward.new({from: accounts[0]});
		const addresszfqr5Wm = accounts[1]
		const uintDV35V3 = BigInt("1013")
		const addresshzx9MGW = "0x0000000000000000000000000000000000000000"
		const uint256B46Kqae = await SLTDETHlpRewardhrZtFyc.earned.call(addresszfqr5Wm, {from: accounts[0]});
		const uint256JuNka25 = await SLTDETHlpRewardhrZtFyc.setStartTime.call(uintDV35V3, {from: accounts[0]});
		const addressdXGUE0O = await SLTDETHlpRewardhrZtFyc.setStakeAddress.call(addresshzx9MGW, {from: accounts[4]});

		assert.equal(uint256B46Kqae, BigInt("0"))
		await expect(SLTDETHlpRewardhrZtFyc.setStakeAddress.call(addresshzx9MGW, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardhrZtFyc = await SLTDETHlpReward.new({from: accounts[0]});
		const addressWkN5mL = "0x0000000000000000000000000000000000000001"
		const uint256iZMISUO = await SLTDETHlpRewardhrZtFyc.rewardPerToken.call({from: accounts[5]});
		const uint256cUHTbOa = await SLTDETHlpRewardhrZtFyc.rewardPerToken.call({from: accounts[3]});
		const addressta7QcL5 = await SLTDETHlpRewardhrZtFyc.owner.call({from: accounts[3]});
		const addressdXGUE0O = await SLTDETHlpRewardhrZtFyc.setStakeAddress.call(addressWkN5mL, {from: accounts[4]});

		assert.equal(addressta7QcL5, 0x5ba7Cf3C15610A8bb1ad6B84245FDd3483327084)
		assert.equal(uint256cUHTbOa, BigInt("0"))
		assert.equal(uint256iZMISUO, BigInt("0"))
		await expect(SLTDETHlpRewardhrZtFyc.setStakeAddress.call(addressWkN5mL, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardhrZtFyc = await SLTDETHlpReward.new({from: accounts[0]});
		const uint1dqZI0 = BigInt("1290")
		const addressIN9IJka = accounts[1]
		const uint256xNVyR0x = await SLTDETHlpRewardhrZtFyc.notifyRewardAmount.call(uint1dqZI0, {from: accounts[0]});
		const addressFK44cnh = await SLTDETHlpRewardhrZtFyc.setRewardDistribution.call(addressIN9IJka, {from: accounts[0]});
		await SLTDETHlpRewardhrZtFyc.onlyRewardDistribution.call({from: accounts[3]});

		await expect(SLTDETHlpRewardhrZtFyc.onlyRewardDistribution.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardZTxWBK = await SLTDETHlpReward.new({from: accounts[4]});
		const addressvD7WjHx = accounts[2]
		const addressl5Y3Qng = await SLTDETHlpRewardZTxWBK.setStakeAddress.call(addressvD7WjHx, {from: accounts[4]});
		await SLTDETHlpRewardZTxWBK.getReward.call({from: accounts[0]});

		await expect(SLTDETHlpRewardZTxWBK.getReward.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});
})