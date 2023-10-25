const GUMARewards = artifacts.require("GUMARewards");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('GUMARewards', (accounts) => {
	it('test for GUMARewards', async () => {
		const GUMARewardsRYsrLX = await GUMARewards.new({from: accounts[0]});
		const addresscVaXn8 = accounts[0]
		const addressMiysnSJ = accounts[1]
		const uintnWQTRh = BigInt("2019")
		const addressbOFq3oj = accounts[4]
		const addresskst4rLx = accounts[2]
		const uint256z3KvZMO = await GUMARewardsRYsrLX.balanceOf.call(addresscVaXn8, {from: accounts[4]});
		const uint256NUsOi64 = await GUMARewardsRYsrLX.balanceOf.call(addressMiysnSJ, {from: "0x0000000000000000000000000000000000000001"});
		const uint256OKw4oVA = await GUMARewardsRYsrLX.rewardPerToken.call({from: accounts[2]});
//		const uint256AssQUNW = await GUMARewardsRYsrLX.stake.call(uintnWQTRh, {from: accounts[2]});
//		const addressxo2Xsh = await GUMARewardsRYsrLX.setGUMA.call(addresskst4rLx, addressbOFq3oj, {from: accounts[4]});

		assert.equal(uint256NUsOi64, BigInt("0"))
		assert.equal(uint256OKw4oVA, BigInt("0"))
		assert.equal(uint256z3KvZMO, BigInt("0"))
		await expect(GUMARewardsRYsrLX.stake.call(uintnWQTRh, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsXCrAY23 = await GUMARewards.new({from: accounts[1]});
		const addressl5ucXMd = accounts[0]
		const uintjVaUf74 = BigInt("263")
//		await GUMARewardsXCrAY23.onlyRewardDistribution.call({from: accounts[3]});
//		const addressSMdF6bx = await GUMARewardsXCrAY23.setRewardDistribution.call(addressl5ucXMd, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256pWsHEIV = await GUMARewardsXCrAY23.stake.call(uintjVaUf74, {from: accounts[5]});

		await expect(GUMARewardsXCrAY23.onlyRewardDistribution.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsDl0Su1 = await GUMARewards.new({from: accounts[5]});
		const addressJxRuU2l = accounts[2]
		const addressqbYFKsP = await GUMARewardsDl0Su1.transferOwnership.call(addressJxRuU2l, {from: accounts[5]});
//		await GUMARewardsDl0Su1.onlyOwner.call({from: accounts[0]});
//		await GUMARewardsDl0Su1.onlyRewardDistribution.call({from: accounts[4]});

		await expect(GUMARewardsDl0Su1.onlyOwner.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsL5Wuxt = await GUMARewards.new({from: accounts[1]});
		const uint256KGDjtit = await GUMARewardsL5Wuxt.lastTimeRewardApplicable.call({from: accounts[4]});
//		await GUMARewardsL5Wuxt.renounceOwnership.call({from: accounts[4]});

		assert.equal(uint256KGDjtit, BigInt("0"))
		await expect(GUMARewardsL5Wuxt.renounceOwnership.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsLKTh2PO = await GUMARewards.new({from: accounts[1]});
		const addresshdJz35g = accounts[3]
		const addresstsWbLcE = await GUMARewardsLKTh2PO.setRewardDistribution.call(addresshdJz35g, {from: accounts[1]});
		const uint256Mnf9phI = await GUMARewardsLKTh2PO.rewardPerToken.call({from: accounts[4]});

		assert.equal(uint256Mnf9phI, BigInt("0"))
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsmIlNgOX = await GUMARewards.new({from: "0x0000000000000000000000000000000000000001"});
		const addressrKuQTy0 = accounts[3]
		const addressrFZ54V2 = accounts[3]
		const uintdyrrOyO = BigInt("1934")
		const uint256n4fJZjd = await GUMARewardsmIlNgOX.lastTimeRewardApplicable.call({from: accounts[3]});
		const uint2560vRMDy = await GUMARewardsmIlNgOX.earned.call(addressrKuQTy0, {from: accounts[0]});
		const addressVXHFDx = await GUMARewardsmIlNgOX.transferOwnership.call(addressrFZ54V2, {from: accounts[2]});
		await GUMARewardsmIlNgOX.renounceOwnership.call({from: accounts[2]});
		const uint256pPdMCE4 = await GUMARewardsmIlNgOX.stake.call(uintdyrrOyO, {from: accounts[2]});
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsLKTh2PO = await GUMARewards.new({from: accounts[1]});
		const addressuKg9cmR = accounts[3]
		const addresstsWbLcE = await GUMARewardsLKTh2PO.setRewardDistribution.call(addressuKg9cmR, {from: accounts[1]});
//		await GUMARewardsLKTh2PO.getReward.call({from: accounts[2]});
//		const uint256Mnf9phI = await GUMARewardsLKTh2PO.rewardPerToken.call({from: accounts[4]});

		await expect(GUMARewardsLKTh2PO.getReward.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsL5Wuxt = await GUMARewards.new({from: accounts[1]});
		const addresswPr0iH = accounts[3]
		const addressTF06gYp = accounts[0]
		const boolMWIGgX = await GUMARewardsL5Wuxt.isOwner.call({from: accounts[3]});
//		const addresstEuOk7D = await GUMARewardsL5Wuxt.setGUMA.call(addressTF06gYp, addresswPr0iH, {from: accounts[2]});
//		await GUMARewardsL5Wuxt.renounceOwnership.call({from: "0x0000000000000000000000000000000000000001"});
//		await GUMARewardsL5Wuxt.renounceOwnership.call({from: accounts[4]});

		assert.equal(boolMWIGgX, false)
		await expect(GUMARewardsL5Wuxt.setGUMA.call(addressTF06gYp, addresswPr0iH, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsL5Wuxt = await GUMARewards.new({from: accounts[1]});
		const uintlGAoqrN = BigInt("1296")
		const addressCbCryI = accounts[3]
		const addressD55liXZ = await GUMARewardsL5Wuxt.owner.call({from: accounts[1]});
//		const uint256m4hHW8I = await GUMARewardsL5Wuxt.stake.call(uintlGAoqrN, {from: accounts[3]});
//		const addresstBpHaF0 = await GUMARewardsL5Wuxt.setRewardDistribution.call(addressCbCryI, {from: "0x0000000000000000000000000000000000000001"});
//		await GUMARewardsL5Wuxt.renounceOwnership.call({from: accounts[4]});

		assert.equal(addressD55liXZ, 0x5Cae86da8d0DdE60cEE4647b7d267992Ea5A4aBE)
		await expect(GUMARewardsL5Wuxt.stake.call(uintlGAoqrN, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsLKTh2PO = await GUMARewards.new({from: accounts[1]});
//		await GUMARewardsLKTh2PO.renounceOwnership.call({from: accounts[1]});
//		await GUMARewardsLKTh2PO.getReward.call({from: accounts[2]});

		await expect(GUMARewardsLKTh2PO.renounceOwnership.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});
})