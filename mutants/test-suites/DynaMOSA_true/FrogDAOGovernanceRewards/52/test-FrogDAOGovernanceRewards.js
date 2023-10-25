const FrogDAOGovernanceRewards = artifacts.require("FrogDAOGovernanceRewards");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('FrogDAOGovernanceRewards', (accounts) => {
	it('test for FrogDAOGovernanceRewards', async () => {
		const addressp0s3G1y = accounts[3]
		const FrogDAOGovernanceRewardsyj5u9EE = await FrogDAOGovernanceRewards.new(addressp0s3G1y, {from: accounts[1]});
		const addressRK11Kej = accounts[0]
		const uinthg79Wzx = BigInt("170")
		const addresshrW9Zxv = accounts[0]
//		const addressGVOuB7P = await FrogDAOGovernanceRewardsyj5u9EE.updateReward.call(addressRK11Kej, {from: accounts[0]});
//		const uint256CXbEbFT = await FrogDAOGovernanceRewardsyj5u9EE.stake.call(uinthg79Wzx, {from: accounts[5]});
//		const uint256UmMeUjh = await FrogDAOGovernanceRewardsyj5u9EE.earned.call(addresshrW9Zxv, {from: accounts[2]});
//		const uint256qtarYh3 = await FrogDAOGovernanceRewardsyj5u9EE.devFundAvailable.call({from: accounts[0]});

		await expect(FrogDAOGovernanceRewardsyj5u9EE.updateReward.call(addressRK11Kej, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addresshDUXgbe = "0x0000000000000000000000000000000000000001"
		const FrogDAOGovernanceRewardsD5mUlL1 = await FrogDAOGovernanceRewards.new(addresshDUXgbe, {from: accounts[4]});
		const addressjiIxeUW = accounts[5]
		const uintHQ44qoH = BigInt("1316")
//		await FrogDAOGovernanceRewardsD5mUlL1.getReward.call({from: accounts[3]});
//		const uint256lwlmbob = await FrogDAOGovernanceRewardsD5mUlL1.earned.call(addressjiIxeUW, {from: accounts[3]});
//		await FrogDAOGovernanceRewardsD5mUlL1.checkhalve.call({from: accounts[4]});
//		const uint256IQ8Kw8D = await FrogDAOGovernanceRewardsD5mUlL1.notifyRewardAmount.call(uintHQ44qoH, {from: accounts[0]});
//		const uint256SLIBDDG = await FrogDAOGovernanceRewardsD5mUlL1.rewardPerToken.call({from: accounts[4]});

		await expect(FrogDAOGovernanceRewardsD5mUlL1.getReward.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressnCgrVxF = accounts[2]
		const FrogDAOGovernanceRewardsvgwHRqq = await FrogDAOGovernanceRewards.new(addressnCgrVxF, {from: accounts[2]});
		const addressrhmzwD = accounts[0]
//		await FrogDAOGovernanceRewardsvgwHRqq.exit.call({from: accounts[0]});
//		const uint256HDHfS7L = await FrogDAOGovernanceRewardsvgwHRqq.devFundAvailable.call({from: accounts[2]});
//		const uint256VWCyMdV = await FrogDAOGovernanceRewardsvgwHRqq.lastTimeRewardApplicable.call({from: accounts[3]});
//		await FrogDAOGovernanceRewardsvgwHRqq.exit.call({from: accounts[5]});
//		const addresscIycY98 = await FrogDAOGovernanceRewardsvgwHRqq.transferDevAddr.call(addressrhmzwD, {from: accounts[2]});

		await expect(FrogDAOGovernanceRewardsvgwHRqq.exit.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addresseWCEkMz = accounts[2]
		const FrogDAOGovernanceRewardsmJgqXHy = await FrogDAOGovernanceRewards.new(addresseWCEkMz, {from: accounts[3]});
		const uint256QxR5O5f = await FrogDAOGovernanceRewardsmJgqXHy.lastTimeRewardApplicable.call({from: "0x0000000000000000000000000000000000000001"});
//		await FrogDAOGovernanceRewardsmJgqXHy.renounceDevAddr.call({from: accounts[0]});

		assert.equal(uint256QxR5O5f, BigInt("0"))
		await expect(FrogDAOGovernanceRewardsmJgqXHy.renounceDevAddr.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addresspV0BLQ3 = accounts[0]
		const FrogDAOGovernanceRewardsdQoMJxh = await FrogDAOGovernanceRewards.new(addresspV0BLQ3, {from: "0x0000000000000000000000000000000000000001"});
		const uint256LBMQZT = await FrogDAOGovernanceRewardsdQoMJxh.lastTimeRewardApplicable.call({from: accounts[4]});
		const uint256cAtPvPz = await FrogDAOGovernanceRewardsdQoMJxh.rewardPerToken.call({from: accounts[1]});
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressPKw4bb = accounts[2]
		const FrogDAOGovernanceRewardsmJgqXHy = await FrogDAOGovernanceRewards.new(addressPKw4bb, {from: accounts[3]});
		const uintYrp1QXv = BigInt("709")
		const uint256QxR5O5f = await FrogDAOGovernanceRewardsmJgqXHy.lastTimeRewardApplicable.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256wPSxf7i = await FrogDAOGovernanceRewardsmJgqXHy.notifyRewardAmount.call(uintYrp1QXv, {from: accounts[5]});
//		await FrogDAOGovernanceRewardsmJgqXHy.renounceDevAddr.call({from: accounts[0]});

		assert.equal(uint256QxR5O5f, BigInt("0"))
		await expect(FrogDAOGovernanceRewardsmJgqXHy.notifyRewardAmount.call(uintYrp1QXv, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressoogualU = accounts[4]
		const FrogDAOGovernanceRewardsXpngICQ = await FrogDAOGovernanceRewards.new(addressoogualU, {from: accounts[4]});
		const addressiGsWqPU = accounts[0]
		const uintpAFYHc2 = BigInt("891")
		const addressQ2TgRgP = accounts[3]
//		const addressiAInXnx = await FrogDAOGovernanceRewardsXpngICQ.transferDevAddr.call(addressiGsWqPU, {from: accounts[2]});
//		const uint256XcwhWX = await FrogDAOGovernanceRewardsXpngICQ.stake.call(uintpAFYHc2, {from: accounts[4]});
//		const addressqlA6DHG = await FrogDAOGovernanceRewardsXpngICQ.updateReward.call(addressQ2TgRgP, {from: accounts[2]});

		await expect(FrogDAOGovernanceRewardsXpngICQ.transferDevAddr.call(addressiGsWqPU, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressfZYvld1 = accounts[2]
		const FrogDAOGovernanceRewardsmJgqXHy = await FrogDAOGovernanceRewards.new(addressfZYvld1, {from: accounts[3]});
		const uintgmoOib = BigInt("2005")
//		const uint256o2rED24 = await FrogDAOGovernanceRewardsmJgqXHy.withdraw.call(uintgmoOib, {from: accounts[5]});
//		const uint256ye7oO9s = await FrogDAOGovernanceRewardsmJgqXHy.rewardPerToken.call({from: accounts[2]});
//		const uint256QxR5O5f = await FrogDAOGovernanceRewardsmJgqXHy.lastTimeRewardApplicable.call({from: "0x0000000000000000000000000000000000000001"});
//		await FrogDAOGovernanceRewardsmJgqXHy.renounceDevAddr.call({from: "0x0000000000000000000000000000000000000001"});
//		await FrogDAOGovernanceRewardsmJgqXHy.renounceDevAddr.call({from: accounts[0]});

		await expect(FrogDAOGovernanceRewardsmJgqXHy.withdraw.call(uintgmoOib, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressz0akqQB = accounts[1]
		const FrogDAOGovernanceRewardszadwFzW = await FrogDAOGovernanceRewards.new(addressz0akqQB, {from: accounts[2]});
		const addressPk9xyUp = accounts[3]
		const uint256M6aUsp2 = await FrogDAOGovernanceRewardszadwFzW.lastTimeRewardApplicable.call({from: accounts[1]});
		const uint256T8Ho1Tw = await FrogDAOGovernanceRewardszadwFzW.devFundAvailable.call({from: accounts[0]});
		const uint256Bsh7QRy = await FrogDAOGovernanceRewardszadwFzW.earned.call(addressPk9xyUp, {from: accounts[2]});

		assert.equal(uint256Bsh7QRy, BigInt("0"))
		assert.equal(uint256M6aUsp2, BigInt("0"))
		assert.equal(uint256T8Ho1Tw, BigInt("0"))
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressfmLq8YZ = accounts[0]
		const FrogDAOGovernanceRewardsXCYfCBE = await FrogDAOGovernanceRewards.new(addressfmLq8YZ, {from: accounts[5]});
		const uintlw7rXge = BigInt("1219")
		const addresshHwVtOb = "0x0000000000000000000000000000000000000001"
		const addresszkSWgEZ = "0x0000000000000000000000000000000000000001"
//		const uint256tUxe3F9 = await FrogDAOGovernanceRewardsXCYfCBE.notifyRewardAmount.call(uintlw7rXge, {from: accounts[5]});
//		await FrogDAOGovernanceRewardsXCYfCBE.exit.call({from: "0x0000000000000000000000000000000000000001"});
//		const addressN6nRPGN = await FrogDAOGovernanceRewardsXCYfCBE.transferDevAddr.call(addresshHwVtOb, {from: "0x0000000000000000000000000000000000000001"});
//		await FrogDAOGovernanceRewardsXCYfCBE.exit.call({from: accounts[0]});
//		const uint256AsTgIiy = await FrogDAOGovernanceRewardsXCYfCBE.earned.call(addresszkSWgEZ, {from: accounts[1]});

		await expect(FrogDAOGovernanceRewardsXCYfCBE.notifyRewardAmount.call(uintlw7rXge, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressDE6WJYy = accounts[4]
		const FrogDAOGovernanceRewardsXpngICQ = await FrogDAOGovernanceRewards.new(addressDE6WJYy, {from: accounts[4]});
		const uintjJi5QEr = BigInt("900")
		const addressl1Z24b = accounts[5]
		const uintJmbZsA = BigInt("1732")
		const addresswj5vowh = accounts[4]
		const uint256VyXHshm = await FrogDAOGovernanceRewardsXpngICQ.devFundAvailable.call({from: accounts[2]});
//		const uint256oPH70Dx = await FrogDAOGovernanceRewardsXpngICQ.withdrawDevFund.call(uintjJi5QEr, {from: accounts[1]});
//		const uint256kNT5mpl = await FrogDAOGovernanceRewardsXpngICQ.rewardPerToken.call({from: accounts[0]});
//		const uint256XI1aC0 = await FrogDAOGovernanceRewardsXpngICQ.lastTimeRewardApplicable.call({from: accounts[0]});
//		const addressiAInXnx = await FrogDAOGovernanceRewardsXpngICQ.transferDevAddr.call(addressl1Z24b, {from: accounts[2]});
//		const uint256srxI2oC = await FrogDAOGovernanceRewardsXpngICQ.withdraw.call(uintJmbZsA, {from: accounts[2]});
//		await FrogDAOGovernanceRewardsXpngICQ.exit.call({from: accounts[2]});
//		await FrogDAOGovernanceRewardsXpngICQ.checkhalve.call({from: accounts[1]});
//		const addressqlA6DHG = await FrogDAOGovernanceRewardsXpngICQ.updateReward.call(addresswj5vowh, {from: accounts[2]});

		assert.equal(uint256VyXHshm, BigInt("0"))
		await expect(FrogDAOGovernanceRewardsXpngICQ.withdrawDevFund.call(uintjJi5QEr, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressT2g96Br = accounts[0]
		const FrogDAOGovernanceRewardsPuqMMrs = await FrogDAOGovernanceRewards.new(addressT2g96Br, {from: accounts[5]});
		const addresslMmwqt7 = accounts[4]
		const uintnh9TEnG = BigInt("954")
		const addressOUsExcG = await FrogDAOGovernanceRewardsPuqMMrs.transferDevAddr.call(addresslMmwqt7, {from: accounts[0]});
//		await FrogDAOGovernanceRewardsPuqMMrs.checkhalve.call({from: accounts[2]});
//		await FrogDAOGovernanceRewardsPuqMMrs.exit.call({from: accounts[3]});
//		const uint256FT2jqAJ = await FrogDAOGovernanceRewardsPuqMMrs.stake.call(uintnh9TEnG, {from: accounts[4]});

		await expect(FrogDAOGovernanceRewardsPuqMMrs.checkhalve.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressRJW8moz = accounts[4]
		const FrogDAOGovernanceRewardsXpngICQ = await FrogDAOGovernanceRewards.new(addressRJW8moz, {from: accounts[4]});
		const uintYoOubZT = BigInt("301")
		const uintyvAUfPe = BigInt("910")
		const addressdM5fNp = accounts[5]
		const uintP39CB9r = BigInt("1732")
		const uint256E7hir9 = await FrogDAOGovernanceRewardsXpngICQ.rewardPerToken.call({from: accounts[5]});
//		const uint256TgqzFeq = await FrogDAOGovernanceRewardsXpngICQ.withdrawDevFund.call(uintYoOubZT, {from: accounts[4]});
//		const uint256oPH70Dx = await FrogDAOGovernanceRewardsXpngICQ.withdrawDevFund.call(uintyvAUfPe, {from: accounts[1]});
//		const addressiAInXnx = await FrogDAOGovernanceRewardsXpngICQ.transferDevAddr.call(addressdM5fNp, {from: accounts[2]});
//		const uint256srxI2oC = await FrogDAOGovernanceRewardsXpngICQ.withdraw.call(uintP39CB9r, {from: accounts[2]});
//		const uint256fNMj1TX = await FrogDAOGovernanceRewardsXpngICQ.rewardPerToken.call({from: accounts[0]});
//		await FrogDAOGovernanceRewardsXpngICQ.exit.call({from: accounts[2]});
//		await FrogDAOGovernanceRewardsXpngICQ.checkhalve.call({from: accounts[1]});

		assert.equal(uint256E7hir9, BigInt("0"))
		await expect(FrogDAOGovernanceRewardsXpngICQ.withdrawDevFund.call(uintYoOubZT, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})