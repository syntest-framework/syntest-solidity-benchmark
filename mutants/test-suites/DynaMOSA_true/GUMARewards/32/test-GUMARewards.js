const GUMARewards = artifacts.require("GUMARewards");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('GUMARewards', (accounts) => {
	it('test for GUMARewards', async () => {
		const GUMARewardszgtfTRW = await GUMARewards.new({from: accounts[3]});
//		await GUMARewardszgtfTRW.onlyOwner.call({from: accounts[0]});
//		const booly2lr1A = await GUMARewardszgtfTRW.isOwner.call({from: accounts[1]});

		await expect(GUMARewardszgtfTRW.onlyOwner.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardshalijSP = await GUMARewards.new({from: accounts[1]});
		const addressV1vJDed = accounts[5]
		const addressdw25PNF = accounts[5]
		const uint3yBokd = BigInt("231")
		const addressgkqQUCa = accounts[0]
		const boolbpzq3JG = await GUMARewardshalijSP.isOwner.call({from: accounts[1]});
//		const addressP6fOPJn = await GUMARewardshalijSP.setGUMA.call(addressdw25PNF, addressV1vJDed, {from: accounts[0]});
//		await GUMARewardshalijSP.onlyRewardDistribution.call({from: accounts[2]});
//		const uint256VpHdxz = await GUMARewardshalijSP.stake.call(uint3yBokd, {from: accounts[0]});
//		const address9YMXH6 = await GUMARewardshalijSP.updateReward.call(addressgkqQUCa, {from: accounts[0]});
//		const uint256UZgpBPk = await GUMARewardshalijSP.lastTimeRewardApplicable.call({from: accounts[1]});

		assert.equal(boolbpzq3JG, true)
		await expect(GUMARewardshalijSP.setGUMA.call(addressdw25PNF, addressV1vJDed, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsuRzSSDu = await GUMARewards.new({from: accounts[4]});
		const addressrSwGJ1r = accounts[0]
		const addressXfJr1N = accounts[2]
		const addresseyc6Vk = accounts[1]
		const uint256WjqwlWy = await GUMARewardsuRzSSDu.rewardPerToken.call({from: accounts[2]});
		const uint256eWBtbx5 = await GUMARewardsuRzSSDu.totalSupply.call({from: accounts[4]});
//		const addressiYPP27Q = await GUMARewardsuRzSSDu.transferOwnership.call(addressrSwGJ1r, {from: accounts[3]});
//		const addressbQE0tsX = await GUMARewardsuRzSSDu.updateReward.call(addressXfJr1N, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256ewm3QXm = await GUMARewardsuRzSSDu.earned.call(addresseyc6Vk, {from: accounts[3]});

		assert.equal(uint256WjqwlWy, BigInt("0"))
		assert.equal(uint256eWBtbx5, BigInt("0"))
		await expect(GUMARewardsuRzSSDu.transferOwnership.call(addressrSwGJ1r, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsfySHwE3 = await GUMARewards.new({from: accounts[5]});
		const uintNaFuEu6 = BigInt("586")
		const addressu1ZPy0H = "0x0000000000000000000000000000000000000001"
//		const uint256ZI2hJQ9 = await GUMARewardsfySHwE3.stake.call(uintNaFuEu6, {from: accounts[0]});
//		const addressKHPJHMl = await GUMARewardsfySHwE3.transferOwnership.call(addressu1ZPy0H, {from: accounts[3]});

		await expect(GUMARewardsfySHwE3.stake.call(uintNaFuEu6, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsDiWKxQB = await GUMARewards.new({from: "0x0000000000000000000000000000000000000001"});
		await GUMARewardsDiWKxQB.onlyOwner.call({from: accounts[1]});
		const uint256r3adpFl = await GUMARewardsDiWKxQB.totalSupply.call({from: accounts[2]});
		await GUMARewardsDiWKxQB.getReward.call({from: accounts[0]});
		await GUMARewardsDiWKxQB.getReward.call({from: accounts[0]});
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsOL0F19P = await GUMARewards.new({from: accounts[4]});
		const addressH7SjXIR = accounts[0]
		const addressDty0eva = accounts[2]
		const addresst4LaQ1 = accounts[4]
		const addresstMdRT0c = accounts[3]
		const addressAIpLpFV = await GUMARewardsOL0F19P.setRewardDistribution.call(addressH7SjXIR, {from: accounts[4]});
//		const addressKo9D6qq = await GUMARewardsOL0F19P.updateReward.call(addressDty0eva, {from: accounts[5]});
//		const addressK1NRfB = await GUMARewardsOL0F19P.setRewardDistribution.call(addresst4LaQ1, {from: accounts[0]});
//		const addressUo1w0R1 = await GUMARewardsOL0F19P.setRewardDistribution.call(addresstMdRT0c, {from: accounts[4]});

		await expect(GUMARewardsOL0F19P.updateReward.call(addressDty0eva, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsfccZi0e = await GUMARewards.new({from: accounts[0]});
		const addressHUEJ7QT = "0x0000000000000000000000000000000000000001"
		const addressi3VpFfD = accounts[4]
		const addressQmQbd8d = accounts[1]
		const addressEkjXlnQ = accounts[4]
		const addressePlamu = accounts[3]
		const uintcISVMAN = BigInt("1076")
		const uintmUzkDP = BigInt("33")
		const uint256eKbTqB = await GUMARewardsfccZi0e.balanceOf.call(addressHUEJ7QT, {from: accounts[4]});
//		await GUMARewardsfccZi0e.getReward.call({from: accounts[2]});
//		const addressxNxpqJ3 = await GUMARewardsfccZi0e.setGUMA.call(addressQmQbd8d, addressi3VpFfD, {from: accounts[2]});
//		const addressDUk8OH = await GUMARewardsfccZi0e.setGUMA.call(addressePlamu, addressEkjXlnQ, {from: accounts[0]});
//		const uint256ZRDheXf = await GUMARewardsfccZi0e.stake.call(uintcISVMAN, {from: accounts[3]});
//		const uint256PfndpM3 = await GUMARewardsfccZi0e.stake.call(uintmUzkDP, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256eKbTqB, BigInt("0"))
		await expect(GUMARewardsfccZi0e.getReward.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsfySHwE3 = await GUMARewards.new({from: accounts[5]});
		const addresswSbhfZ = "0x0000000000000000000000000000000000000001"
		const addressV5wzpAR = await GUMARewardsfySHwE3.owner.call({from: accounts[4]});
//		const addressKHPJHMl = await GUMARewardsfySHwE3.transferOwnership.call(addresswSbhfZ, {from: accounts[3]});

		assert.equal(addressV5wzpAR, 0x65599ee351903eF463C7E29fE755AbA38Df11D20)
		await expect(GUMARewardsfySHwE3.transferOwnership.call(addresswSbhfZ, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsfySHwE3 = await GUMARewards.new({from: accounts[5]});
		const uintigsud5z = BigInt("1570")
		const addresspedfiF1 = "0x0000000000000000000000000000000000000002"
//		await GUMARewardsfySHwE3.getReward.call({from: accounts[2]});
//		await GUMARewardsfySHwE3.renounceOwnership.call({from: accounts[5]});
//		const uint256tcIdyz = await GUMARewardsfySHwE3.stake.call(uintigsud5z, {from: accounts[3]});
//		const addressKHPJHMl = await GUMARewardsfySHwE3.transferOwnership.call(addresspedfiF1, {from: accounts[3]});

		await expect(GUMARewardsfySHwE3.getReward.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsfySHwE3 = await GUMARewards.new({from: accounts[5]});
		const addressRXuTuxo = accounts[0]
		const uintmgIaaLw = BigInt("1721")
		const addressUm3MFYL = accounts[2]
//		await GUMARewardsfySHwE3.getReward.call({from: accounts[2]});
//		const addressAHvcry5 = await GUMARewardsfySHwE3.transferOwnership.call(addressRXuTuxo, {from: accounts[5]});
//		const uint256ZI2hJQ9 = await GUMARewardsfySHwE3.stake.call(uintmgIaaLw, {from: accounts[0]});
//		await GUMARewardsfySHwE3.onlyRewardDistribution.call({from: accounts[2]});
//		const addressGiO5OnH = await GUMARewardsfySHwE3.updateReward.call(addressUm3MFYL, {from: accounts[1]});
//		const uint256WKM0RL = await GUMARewardsfySHwE3.lastTimeRewardApplicable.call({from: accounts[5]});

		await expect(GUMARewardsfySHwE3.getReward.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});
})