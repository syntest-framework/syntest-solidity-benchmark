const SLTDStaking = artifacts.require("SLTDStaking");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('SLTDStaking', (accounts) => {
	it('test for SLTDStaking', async () => {
		const SLTDStakingX6TrxNH = await SLTDStaking.new({from: accounts[0]});
		const uinteMepb0e = BigInt("1966")
		const addressHYfCvDd = accounts[3]
		await SLTDStakingX6TrxNH.getReward.call({from: accounts[0]});
		const uint256QjFk3g9 = await SLTDStakingX6TrxNH.withdraw.call(uinteMepb0e, {from: accounts[0]});
		await SLTDStakingX6TrxNH.getReward.call({from: accounts[0]});
		await SLTDStakingX6TrxNH.renounceOwnership.call({from: accounts[5]});
		await SLTDStakingX6TrxNH.exit.call({from: accounts[0]});
		const addresstkgnCCK = await SLTDStakingX6TrxNH.setRewardDistribution.call(addressHYfCvDd, {from: accounts[3]});

		await expect(SLTDStakingX6TrxNH.getReward.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingZUUVm5I = await SLTDStaking.new({from: accounts[2]});
		const uintUiM6u7X = BigInt("922")
		const addressZC9Nw5q = accounts[3]
		await SLTDStakingZUUVm5I.onlyRewardDistribution.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256VtucGK7 = await SLTDStakingZUUVm5I.totalSupply.call({from: accounts[4]});
		const uint256RglTlrR = await SLTDStakingZUUVm5I.notifyRewardAmount.call(uintUiM6u7X, {from: accounts[3]});
		const uint256udFfJ5J = await SLTDStakingZUUVm5I.balanceOf.call(addressZC9Nw5q, {from: accounts[4]});
		const uint256QEgaq1R = await SLTDStakingZUUVm5I.lastTimeRewardApplicable.call({from: accounts[0]});

		await expect(SLTDStakingZUUVm5I.onlyRewardDistribution.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingnvtKeCI = await SLTDStaking.new({from: "0x0000000000000000000000000000000000000001"});
		const addressJr1AqAz = accounts[4]
		const addresssh6a8OM = accounts[3]
		const addressyG5vYkr = accounts[0]
		const uint256QOWcmtv = await SLTDStakingnvtKeCI.lastTimeRewardApplicable.call({from: accounts[3]});
		const addressMHuD28f = await SLTDStakingnvtKeCI.updateReward.call(addressJr1AqAz, {from: accounts[3]});
		const addressUvsc4bn = await SLTDStakingnvtKeCI.setSLTD.call(addressyG5vYkr, addresssh6a8OM, {from: accounts[4]});
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingSo0YNs = await SLTDStaking.new({from: accounts[4]});
		const uintwfZw8e = BigInt("758")
		const uintxeAvFg9 = BigInt("1498")
		const uint256LSoOFH = await SLTDStakingSo0YNs.stake.call(uintwfZw8e, {from: accounts[0]});
		const uint256BQAq9Ln = await SLTDStakingSo0YNs.withdraw.call(uintxeAvFg9, {from: accounts[0]});
		const boolBAA9anX = await SLTDStakingSo0YNs.isOwner.call({from: accounts[2]});

		await expect(SLTDStakingSo0YNs.stake.call(uintwfZw8e, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingE2gWiJM = await SLTDStaking.new({from: accounts[0]});
		const boolY283vhn = await SLTDStakingE2gWiJM.isOwner.call({from: accounts[3]});
		const boolulwDTKo = await SLTDStakingE2gWiJM.isOwner.call({from: accounts[3]});
		await SLTDStakingE2gWiJM.exit.call({from: "0x0000000000000000000000000000000000000001"});
		const addressmZ9Kb2S = await SLTDStakingE2gWiJM.owner.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolY283vhn, false)
		assert.equal(boolulwDTKo, false)
		await expect(SLTDStakingE2gWiJM.exit.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakinglT5RUi3 = await SLTDStaking.new({from: accounts[2]});
		const addressbN74Cgf = accounts[3]
		const addressiHpgkEn = accounts[1]
		const uintZl5c5wQ = BigInt("1838")
		const addressUWaONjP = await SLTDStakinglT5RUi3.setSLTD.call(addressiHpgkEn, addressbN74Cgf, {from: accounts[2]});
		const uint256zpD96jM = await SLTDStakinglT5RUi3.totalSupply.call({from: accounts[3]});
		const uint256puGQdqy = await SLTDStakinglT5RUi3.notifyRewardAmount.call(uintZl5c5wQ, {from: accounts[2]});

		await expect(SLTDStakinglT5RUi3.setSLTD.call(addressiHpgkEn, addressbN74Cgf, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingSo0YNs = await SLTDStaking.new({from: accounts[4]});
		const addressAzP5tIQ = accounts[0]
		const uintlOI71wr = BigInt("758")
		const addressyqMxS6Z = await SLTDStakingSo0YNs.setRewardDistribution.call(addressAzP5tIQ, {from: accounts[2]});
		const uint256LSoOFH = await SLTDStakingSo0YNs.stake.call(uintlOI71wr, {from: accounts[0]});
		const boolBAA9anX = await SLTDStakingSo0YNs.isOwner.call({from: accounts[2]});

		await expect(SLTDStakingSo0YNs.setRewardDistribution.call(addressAzP5tIQ, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingSo0YNs = await SLTDStaking.new({from: accounts[4]});
		const uintnWLuZQK = BigInt("741")
		await SLTDStakingSo0YNs.renounceOwnership.call({from: accounts[4]});
		const uint256LSoOFH = await SLTDStakingSo0YNs.stake.call(uintnWLuZQK, {from: accounts[0]});

		await expect(SLTDStakingSo0YNs.renounceOwnership.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingX6TrxNH = await SLTDStaking.new({from: accounts[0]});
		const uintZvKhf1W = BigInt("1966")
		const addressW0mYTIb = accounts[3]
		const addressZkdXXto = await SLTDStakingX6TrxNH.owner.call({from: accounts[5]});
		await SLTDStakingX6TrxNH.getReward.call({from: accounts[0]});
		const uint256QjFk3g9 = await SLTDStakingX6TrxNH.withdraw.call(uintZvKhf1W, {from: accounts[0]});
		await SLTDStakingX6TrxNH.renounceOwnership.call({from: accounts[5]});
		await SLTDStakingX6TrxNH.exit.call({from: accounts[0]});
		const addresstkgnCCK = await SLTDStakingX6TrxNH.setRewardDistribution.call(addressW0mYTIb, {from: accounts[3]});

		assert.equal(addressZkdXXto, 0x0f26464b1DC37FE2d8FC9811aA4bD12894909F9C)
		await expect(SLTDStakingX6TrxNH.getReward.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingSo0YNs = await SLTDStaking.new({from: accounts[4]});
		const addresse6jNpF2 = accounts[1]
		const uintLJe6psT = BigInt("769")
		const addressatFaGA0 = await SLTDStakingSo0YNs.setRewardDistribution.call(addresse6jNpF2, {from: accounts[4]});
		const uint256i3ccHp4 = await SLTDStakingSo0YNs.lastTimeRewardApplicable.call({from: accounts[1]});
		const uint256LSoOFH = await SLTDStakingSo0YNs.stake.call(uintLJe6psT, {from: accounts[0]});

		assert.equal(uint256i3ccHp4, BigInt("0"))
		await expect(SLTDStakingSo0YNs.stake.call(uintLJe6psT, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingGtn11L = await SLTDStaking.new({from: accounts[4]});
		const addressYkK5Wxz = accounts[3]
		const addressmA0LHpG = accounts[5]
		const addressotabGTm = "0x0000000000000000000000000000000000000001"
		const uint256abBZok = await SLTDStakingGtn11L.earned.call(addressYkK5Wxz, {from: accounts[2]});
		const addressW1fLpbn = await SLTDStakingGtn11L.transferOwnership.call(addressmA0LHpG, {from: accounts[4]});
		const uint256vvUYJaa = await SLTDStakingGtn11L.lastTimeRewardApplicable.call({from: accounts[5]});
		await SLTDStakingGtn11L.onlyOwner.call({from: accounts[4]});
		const uint256y9eSjXw = await SLTDStakingGtn11L.rewardPerToken.call({from: accounts[3]});
		const uint256Stm5rnk = await SLTDStakingGtn11L.earned.call(addressotabGTm, {from: accounts[2]});

		assert.equal(uint256abBZok, BigInt("0"))
		assert.equal(uint256vvUYJaa, BigInt("0"))
		await expect(SLTDStakingGtn11L.onlyOwner.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});
})