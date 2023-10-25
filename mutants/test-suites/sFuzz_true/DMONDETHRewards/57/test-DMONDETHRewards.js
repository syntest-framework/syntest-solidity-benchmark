const DMONDETHRewards = artifacts.require("DMONDETHRewards");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('DMONDETHRewards', (accounts) => {
	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsRl2gY41 = await DMONDETHRewards.new({from: accounts[3]});
		const addressjX0joVE = accounts[2]
		const uintNEW5Lzi = BigInt("494")
		const addressjbBeuay = accounts[2]
		const uint256jIqLRvd = await DMONDETHRewardsRl2gY41.balanceOf.call(addressjX0joVE, {from: accounts[3]});
//		const uint256lzfu57W = await DMONDETHRewardsRl2gY41.withdraw.call(uintNEW5Lzi, {from: accounts[3]});
//		const addresskSQrYEA = await DMONDETHRewardsRl2gY41.updateReward.call(addressjbBeuay, {from: accounts[1]});

		assert.equal(uint256jIqLRvd, BigInt("0"))
		await expect(DMONDETHRewardsRl2gY41.withdraw.call(uintNEW5Lzi, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsT5kSe4V = await DMONDETHRewards.new({from: accounts[1]});
		const addressZkftz2O = accounts[3]
		const uinttCwKdn = BigInt("2037")
//		const addressw95qrmX = await DMONDETHRewardsT5kSe4V.transferOwnership.call(addressZkftz2O, {from: accounts[4]});
//		const uint256NeqIZkx = await DMONDETHRewardsT5kSe4V.withdraw.call(uinttCwKdn, {from: accounts[0]});

		await expect(DMONDETHRewardsT5kSe4V.transferOwnership.call(addressZkftz2O, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsXFGJxmV = await DMONDETHRewards.new({from: "0x0000000000000000000000000000000000000001"});
		const uintSUnQxtf = BigInt("622")
		const addresss2nebKL = accounts[0]
		const uint256w36kwJI = await DMONDETHRewardsXFGJxmV.stake.call(uintSUnQxtf, {from: accounts[4]});
		const uint256WH9sJX = await DMONDETHRewardsXFGJxmV.remainingReward.call({from: accounts[4]});
		const addressiSJuL9Q = await DMONDETHRewardsXFGJxmV.setStakeAddress.call(addresss2nebKL, {from: accounts[4]});
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardseaKAlpQ = await DMONDETHRewards.new({from: accounts[4]});
		const addressaZllo2u = accounts[2]
		const addresspnw1NB6 = accounts[2]
		const uint256Wg1UYsS = await DMONDETHRewardseaKAlpQ.balanceOf.call(addressaZllo2u, {from: accounts[2]});
//		await DMONDETHRewardseaKAlpQ.onlyOwner.call({from: accounts[1]});
//		const uint256T1H5N2x = await DMONDETHRewardseaKAlpQ.remainingReward.call({from: accounts[4]});
//		const uint256C3OCKyW = await DMONDETHRewardseaKAlpQ.balanceOf.call(addresspnw1NB6, {from: accounts[4]});

		assert.equal(uint256Wg1UYsS, BigInt("0"))
		await expect(DMONDETHRewardseaKAlpQ.onlyOwner.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardshxaIe2n = await DMONDETHRewards.new({from: accounts[0]});
		const addressHkgZkJt = accounts[1]
		const uint256vvfDYHB = await DMONDETHRewardshxaIe2n.earned.call(addressHkgZkJt, {from: accounts[3]});
		const boolpCtc4Kq = await DMONDETHRewardshxaIe2n.isOwner.call({from: accounts[2]});
//		await DMONDETHRewardshxaIe2n.getReward.call({from: accounts[2]});
//		await DMONDETHRewardshxaIe2n.exit.call({from: accounts[3]});

		assert.equal(boolpCtc4Kq, false)
		assert.equal(uint256vvfDYHB, BigInt("0"))
		await expect(DMONDETHRewardshxaIe2n.getReward.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsT6FyNKu = await DMONDETHRewards.new({from: accounts[1]});
		const uintNrtCoN5 = BigInt("1640")
		const addressVr07xLD = "0x0000000000000000000000000000000000000001"
//		const uint256UIPw41q = await DMONDETHRewardsT6FyNKu.stake.call(uintNrtCoN5, {from: accounts[2]});
//		await DMONDETHRewardsT6FyNKu.onlyOwner.call({from: accounts[1]});
//		const addressxmrw0Cu = await DMONDETHRewardsT6FyNKu.setStakeAddress.call(addressVr07xLD, {from: accounts[1]});
//		await DMONDETHRewardsT6FyNKu.getReward.call({from: accounts[0]});

		await expect(DMONDETHRewardsT6FyNKu.stake.call(uintNrtCoN5, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsL693zK2 = await DMONDETHRewards.new({from: accounts[5]});
		const addressqOsQ6MB = accounts[0]
		const addressViPyTn8 = accounts[5]
//		const uint256x1WHVX = await DMONDETHRewardsL693zK2.remainingReward.call({from: accounts[3]});
//		await DMONDETHRewardsL693zK2.exit.call({from: accounts[1]});
//		const addressSWMhykk = await DMONDETHRewardsL693zK2.updateReward.call(addressqOsQ6MB, {from: accounts[0]});
//		const addressZu4CEmj = await DMONDETHRewardsL693zK2.transferOwnership.call(addressViPyTn8, {from: accounts[3]});
//		const boolDugCogG = await DMONDETHRewardsL693zK2.isOwner.call({from: accounts[3]});

		await expect(DMONDETHRewardsL693zK2.remainingReward.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsM7UotDm = await DMONDETHRewards.new({from: accounts[4]});
		const uintampVjtc = BigInt("484")
		const addressqJNRntN = accounts[2]
		const uint256ie9AXgJ = await DMONDETHRewardsM7UotDm.setStartTime.call(uintampVjtc, {from: accounts[4]});
		const uint256VgRrY7r = await DMONDETHRewardsM7UotDm.earned.call(addressqJNRntN, {from: accounts[3]});
//		await DMONDETHRewardsM7UotDm.renounceOwnership.call({from: accounts[1]});

		assert.equal(uint256VgRrY7r, BigInt("0"))
		await expect(DMONDETHRewardsM7UotDm.renounceOwnership.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardshxaIe2n = await DMONDETHRewards.new({from: accounts[0]});
		const addressaJL6KJa = "0x0000000000000000000000000000000000000001"
		const boolpCtc4Kq = await DMONDETHRewardshxaIe2n.isOwner.call({from: accounts[2]});
		const addressFYKT6Uf = await DMONDETHRewardshxaIe2n.transferOwnership.call(addressaJL6KJa, {from: accounts[0]});
//		await DMONDETHRewardshxaIe2n.onlyRewardDistribution.call({from: accounts[1]});
//		await DMONDETHRewardshxaIe2n.getReward.call({from: accounts[2]});

		assert.equal(boolpCtc4Kq, false)
		await expect(DMONDETHRewardshxaIe2n.onlyRewardDistribution.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardshxaIe2n = await DMONDETHRewards.new({from: accounts[0]});
		const addressF0lH20r = accounts[2]
		const addressLCSp8Mh = accounts[0]
		const addressBCMfpaM = await DMONDETHRewardshxaIe2n.setRewardDistribution.call(addressF0lH20r, {from: accounts[0]});
		const uint256H1zotnq = await DMONDETHRewardshxaIe2n.earned.call(addressLCSp8Mh, {from: accounts[1]});
//		await DMONDETHRewardshxaIe2n.getReward.call({from: accounts[2]});

		assert.equal(uint256H1zotnq, BigInt("0"))
		await expect(DMONDETHRewardshxaIe2n.getReward.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsRl2gY41 = await DMONDETHRewards.new({from: accounts[3]});
		const uintTKtyJI = BigInt("5")
		const addressv83NBv = "0x0000000000000000000000000000000000000001"
		const uintFkAdtmK = BigInt("523")
//		const uint256bVMgShm = await DMONDETHRewardsRl2gY41.notifyRewardAmount.call(uintTKtyJI, {from: accounts[4]});
//		const addressSID9aQX = await DMONDETHRewardsRl2gY41.setStakeAddress.call(addressv83NBv, {from: accounts[1]});
//		const uint256J5Q1YV = await DMONDETHRewardsRl2gY41.lastTimeRewardApplicable.call({from: accounts[1]});
//		const uint256lzfu57W = await DMONDETHRewardsRl2gY41.withdraw.call(uintFkAdtmK, {from: accounts[3]});

		await expect(DMONDETHRewardsRl2gY41.notifyRewardAmount.call(uintTKtyJI, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsRl2gY41 = await DMONDETHRewards.new({from: accounts[3]});
		const addressKhDHzyR = accounts[3]
		const uintvqqeVBw = BigInt("494")
		const addressXe4AZwi = await DMONDETHRewardsRl2gY41.owner.call({from: accounts[0]});
//		const addressAECX2E6 = await DMONDETHRewardsRl2gY41.setRewardDistribution.call(addressKhDHzyR, {from: accounts[2]});
//		const uint256lzfu57W = await DMONDETHRewardsRl2gY41.withdraw.call(uintvqqeVBw, {from: accounts[3]});

		assert.equal(addressXe4AZwi, 0xa71285692B703AeFa19E41785282d3D30f6dD716)
		await expect(DMONDETHRewardsRl2gY41.setRewardDistribution.call(addressKhDHzyR, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsRl2gY41 = await DMONDETHRewards.new({from: accounts[3]});
		const uintBVWQr7m = BigInt("921")
		const uintIeus1L = BigInt("456")
		const uint256Kc5oX9m = await DMONDETHRewardsRl2gY41.notifyRewardAmount.call(uintBVWQr7m, {from: accounts[3]});
//		const uint256lzfu57W = await DMONDETHRewardsRl2gY41.withdraw.call(uintIeus1L, {from: accounts[3]});

		await expect(DMONDETHRewardsRl2gY41.withdraw.call(uintIeus1L, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsT5kSe4V = await DMONDETHRewards.new({from: accounts[1]});
		const addressm7gf2Vr = accounts[1]
		const addressKk6kHz0 = accounts[4]
		const addressNQpMBJr = "0x0000000000000000000000000000000000000001"
		const addressV4PEuGO = await DMONDETHRewardsT5kSe4V.setStakeAddress.call(addressm7gf2Vr, {from: accounts[1]});
//		const addressw95qrmX = await DMONDETHRewardsT5kSe4V.transferOwnership.call(addressKk6kHz0, {from: accounts[4]});
//		const addresskt06gcS = await DMONDETHRewardsT5kSe4V.updateReward.call(addressNQpMBJr, {from: accounts[4]});

		await expect(DMONDETHRewardsT5kSe4V.transferOwnership.call(addressKk6kHz0, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardswPevi9 = await DMONDETHRewards.new({from: accounts[1]});
		const uinto9xe8o = BigInt("303")
//		await DMONDETHRewardswPevi9.renounceOwnership.call({from: accounts[1]});
//		const uint256KfZXrEB = await DMONDETHRewardswPevi9.lastTimeRewardApplicable.call({from: accounts[4]});
//		const uint256X1m5yeg = await DMONDETHRewardswPevi9.withdraw.call(uinto9xe8o, {from: accounts[0]});
//		const uint256iweyOb = await DMONDETHRewardswPevi9.rewardPerToken.call({from: accounts[1]});

		await expect(DMONDETHRewardswPevi9.renounceOwnership.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});
})