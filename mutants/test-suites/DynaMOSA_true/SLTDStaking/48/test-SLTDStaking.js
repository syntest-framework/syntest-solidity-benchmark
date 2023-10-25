const SLTDStaking = artifacts.require("SLTDStaking");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('SLTDStaking', (accounts) => {
	it('test for SLTDStaking', async () => {
		const SLTDStakingcxjn3Y = await SLTDStaking.new({from: accounts[3]});
		const addressPh0zXP = accounts[0]
		const addressWhCTT90 = accounts[1]
//		await SLTDStakingcxjn3Y.exit.call({from: accounts[3]});
//		const addressJZ6pAMU = await SLTDStakingcxjn3Y.updateReward.call(addressPh0zXP, {from: accounts[2]});
//		await SLTDStakingcxjn3Y.onlyRewardDistribution.call({from: accounts[2]});
//		const addressmFAGHrg = await SLTDStakingcxjn3Y.setRewardDistribution.call(addressWhCTT90, {from: accounts[0]});
//		const boolVCl1AE9 = await SLTDStakingcxjn3Y.isOwner.call({from: accounts[2]});

		await expect(SLTDStakingcxjn3Y.exit.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingM69wOQ = await SLTDStaking.new({from: accounts[3]});
		const uintBJyRc7R = BigInt("1167")
//		await SLTDStakingM69wOQ.getReward.call({from: accounts[2]});
//		const uint256Ol5W8K7 = await SLTDStakingM69wOQ.totalSupply.call({from: accounts[5]});
//		await SLTDStakingM69wOQ.renounceOwnership.call({from: accounts[5]});
//		const uint256jZtitsG = await SLTDStakingM69wOQ.stake.call(uintBJyRc7R, {from: accounts[4]});

		await expect(SLTDStakingM69wOQ.getReward.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingbPzlO7r = await SLTDStaking.new({from: accounts[0]});
		const addressAMJslZF = accounts[2]
		const addressv2V767 = accounts[4]
//		const addressbuaTkr3 = await SLTDStakingbPzlO7r.updateReward.call(addressAMJslZF, {from: accounts[3]});
//		const uint256e2LqKE3 = await SLTDStakingbPzlO7r.rewardPerToken.call({from: accounts[5]});
//		const addressRaMIyqU = await SLTDStakingbPzlO7r.setRewardDistribution.call(addressv2V767, {from: accounts[4]});

		await expect(SLTDStakingbPzlO7r.updateReward.call(addressAMJslZF, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingm59QCkj = await SLTDStaking.new({from: accounts[4]});
		const uintvXGvSLd = BigInt("655")
		const addressjOlefj = accounts[0]
		const uintdNuhP6q = BigInt("1816")
		const addressE40WuVK = accounts[5]
//		const uint256AatXWxE = await SLTDStakingm59QCkj.withdraw.call(uintvXGvSLd, {from: accounts[4]});
//		await SLTDStakingm59QCkj.exit.call({from: accounts[0]});
//		const uint256o9iNhKE = await SLTDStakingm59QCkj.earned.call(addressjOlefj, {from: accounts[0]});
//		const uint256HGwqLAn = await SLTDStakingm59QCkj.stake.call(uintdNuhP6q, {from: accounts[3]});
//		const addressoBi3boY = await SLTDStakingm59QCkj.transferOwnership.call(addressE40WuVK, {from: accounts[1]});

		await expect(SLTDStakingm59QCkj.withdraw.call(uintvXGvSLd, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingQr5PXn5 = await SLTDStaking.new({from: accounts[5]});
		const uintQVUof6z = BigInt("316")
		const addressNLscQb = accounts[5]
//		const uint256owQaQlm = await SLTDStakingQr5PXn5.stake.call(uintQVUof6z, {from: accounts[3]});
//		const uint256Iuo6M3o = await SLTDStakingQr5PXn5.earned.call(addressNLscQb, {from: accounts[0]});
//		const uint256G1NQf4t = await SLTDStakingQr5PXn5.lastTimeRewardApplicable.call({from: accounts[2]});

		await expect(SLTDStakingQr5PXn5.stake.call(uintQVUof6z, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingbbPvn2V = await SLTDStaking.new({from: "0x0000000000000000000000000000000000000001"});
		const addressulqRz8C = accounts[1]
		const addressY9e84fg = accounts[4]
		const addressiZgke17 = accounts[4]
		const addressFSvyJC5 = accounts[0]
		const uintM10qkMC = BigInt("915")
		await SLTDStakingbbPvn2V.onlyRewardDistribution.call({from: accounts[4]});
		const uint256VArhsj = await SLTDStakingbbPvn2V.totalSupply.call({from: accounts[0]});
		const addresswqm8QP2 = await SLTDStakingbbPvn2V.setRewardDistribution.call(addressulqRz8C, {from: accounts[4]});
		const addressHE86DD9 = await SLTDStakingbbPvn2V.setSLTD.call(addressiZgke17, addressY9e84fg, {from: accounts[1]});
		const addresszZ2doGb = await SLTDStakingbbPvn2V.updateReward.call(addressFSvyJC5, {from: accounts[0]});
		const uint256iWkl9LD = await SLTDStakingbbPvn2V.withdraw.call(uintM10qkMC, {from: accounts[3]});
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingM69wOQ = await SLTDStaking.new({from: accounts[3]});
		const addressPHXmQAD = accounts[0]
		const uintkZ4O8fO = BigInt("177")
		const uintRKjXifw = BigInt("1167")
		const addresso82x9Qh = await SLTDStakingM69wOQ.transferOwnership.call(addressPHXmQAD, {from: accounts[3]});
//		await SLTDStakingM69wOQ.getReward.call({from: accounts[2]});
//		const uint256Ol5W8K7 = await SLTDStakingM69wOQ.totalSupply.call({from: accounts[5]});
//		const uint256UfXK5kT = await SLTDStakingM69wOQ.stake.call(uintkZ4O8fO, {from: accounts[3]});
//		await SLTDStakingM69wOQ.renounceOwnership.call({from: accounts[5]});
//		const uint256jZtitsG = await SLTDStakingM69wOQ.stake.call(uintRKjXifw, {from: accounts[4]});

		await expect(SLTDStakingM69wOQ.getReward.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingYgSJQxL = await SLTDStaking.new({from: accounts[3]});
		const addressiKm2TnO = accounts[3]
		const addressxWApHf = accounts[1]
		const uintZIkTKkt = BigInt("1087")
		const boolXH0c9nX = await SLTDStakingYgSJQxL.isOwner.call({from: accounts[0]});
//		const addressB3NBVwq = await SLTDStakingYgSJQxL.setSLTD.call(addressxWApHf, addressiKm2TnO, {from: accounts[0]});
//		const uint256L8vDSlw = await SLTDStakingYgSJQxL.stake.call(uintZIkTKkt, {from: accounts[4]});

		assert.equal(boolXH0c9nX, false)
		await expect(SLTDStakingYgSJQxL.setSLTD.call(addressxWApHf, addressiKm2TnO, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingM69wOQ = await SLTDStaking.new({from: accounts[3]});
		const addressNbNeFCa = "0x0000000000000000000000000000000000000001"
		const addressgKA47Mh = await SLTDStakingM69wOQ.setRewardDistribution.call(addressNbNeFCa, {from: accounts[3]});
//		await SLTDStakingM69wOQ.getReward.call({from: accounts[2]});

		await expect(SLTDStakingM69wOQ.getReward.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingM69wOQ = await SLTDStaking.new({from: accounts[3]});
		const uintyfriQnu = BigInt("499")
//		await SLTDStakingM69wOQ.getReward.call({from: accounts[2]});
//		const addressZwPbwuj = await SLTDStakingM69wOQ.owner.call({from: accounts[3]});
//		const uint256UxlTIC0 = await SLTDStakingM69wOQ.withdraw.call(uintyfriQnu, {from: accounts[0]});

		await expect(SLTDStakingM69wOQ.getReward.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingM69wOQ = await SLTDStaking.new({from: accounts[3]});
		const addressJyx3ePs = accounts[4]
		const uintuK1c6F2 = BigInt("1220")
		const address5d20mF = accounts[4]
//		await SLTDStakingM69wOQ.renounceOwnership.call({from: accounts[3]});
//		await SLTDStakingM69wOQ.getReward.call({from: accounts[2]});
//		const uint256GemG2Sz = await SLTDStakingM69wOQ.earned.call(addressJyx3ePs, {from: accounts[3]});
//		const uint256Ol5W8K7 = await SLTDStakingM69wOQ.totalSupply.call({from: accounts[5]});
//		const uint256vikUWT1 = await SLTDStakingM69wOQ.rewardPerToken.call({from: "0x0000000000000000000000000000000000000001"});
//		await SLTDStakingM69wOQ.renounceOwnership.call({from: accounts[5]});
//		const uint256jZtitsG = await SLTDStakingM69wOQ.stake.call(uintuK1c6F2, {from: accounts[4]});
//		const uint256CRAy7zI = await SLTDStakingM69wOQ.rewardPerToken.call({from: "0x0000000000000000000000000000000000000001"});
//		const addressn1CbUOY = await SLTDStakingM69wOQ.updateReward.call(address5d20mF, {from: accounts[4]});

		await expect(SLTDStakingM69wOQ.renounceOwnership.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});
})