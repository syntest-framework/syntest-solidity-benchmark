const SLTDStaking = artifacts.require("SLTDStaking");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('SLTDStaking', (accounts) => {
	it('test for SLTDStaking', async () => {
		const SLTDStakingGa2Phgu = await SLTDStaking.new({from: accounts[0]});
		const uinteP12FND = BigInt("1017")
		const uintg2r86ov = BigInt("740")
		const addressPWtzPYJ = accounts[0]
		const uinticX8lu3 = BigInt("1795")
//		await SLTDStakingGa2Phgu.getReward.call({from: accounts[4]});
//		const addressFEuWOi = await SLTDStakingGa2Phgu.owner.call({from: accounts[2]});
//		const uint256Jgtk7V2 = await SLTDStakingGa2Phgu.withdraw.call(uinteP12FND, {from: accounts[1]});
//		const uint256EEj8sIQ = await SLTDStakingGa2Phgu.withdraw.call(uintg2r86ov, {from: accounts[0]});
//		const uint256snYsNGe = await SLTDStakingGa2Phgu.earned.call(addressPWtzPYJ, {from: accounts[4]});
//		const uint256nFDV3YE = await SLTDStakingGa2Phgu.notifyRewardAmount.call(uinticX8lu3, {from: "0x0000000000000000000000000000000000000001"});

		await expect(SLTDStakingGa2Phgu.getReward.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingWgsOSrI = await SLTDStaking.new({from: accounts[2]});
		const addressuU1m1i = accounts[2]
		const uintJGq4PE5 = BigInt("636")
		const uint256B8Iy3dM = await SLTDStakingWgsOSrI.balanceOf.call(addressuU1m1i, {from: accounts[3]});
//		const uint256yHi80rX = await SLTDStakingWgsOSrI.notifyRewardAmount.call(uintJGq4PE5, {from: accounts[0]});

		assert.equal(uint256B8Iy3dM, BigInt("0"))
		await expect(SLTDStakingWgsOSrI.notifyRewardAmount.call(uintJGq4PE5, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingXRjCXw = await SLTDStaking.new({from: accounts[5]});
		const uintxSBqic = BigInt("570")
		const uintZVkhN8d = BigInt("1295")
		const boolxz5K8yP = await SLTDStakingXRjCXw.isOwner.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256qIbghla = await SLTDStakingXRjCXw.withdraw.call(uintxSBqic, {from: accounts[2]});
//		const uint256jyYgI49 = await SLTDStakingXRjCXw.withdraw.call(uintZVkhN8d, {from: accounts[1]});
//		await SLTDStakingXRjCXw.exit.call({from: accounts[0]});

		assert.equal(boolxz5K8yP, false)
		await expect(SLTDStakingXRjCXw.withdraw.call(uintxSBqic, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingYjONagS = await SLTDStaking.new({from: accounts[1]});
		const uintoqwQdJ7 = BigInt("999")
		const uintOyujuTT = BigInt("472")
		const addressDMk5Wk = accounts[0]
		const uintqEaVt7v = BigInt("1515")
		const addressOgxRq3k = accounts[0]
		const address7Wlbkz = await SLTDStakingYjONagS.owner.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256EAxwrMq = await SLTDStakingYjONagS.stake.call(uintoqwQdJ7, {from: accounts[2]});
//		const uint256JcZSQg2 = await SLTDStakingYjONagS.stake.call(uintOyujuTT, {from: accounts[0]});
//		const addressvy13L3Z = await SLTDStakingYjONagS.transferOwnership.call(addressDMk5Wk, {from: accounts[3]});
//		const uint256PRO6hG6 = await SLTDStakingYjONagS.withdraw.call(uintqEaVt7v, {from: accounts[2]});
//		const addresspCnbosT = await SLTDStakingYjONagS.updateReward.call(addressOgxRq3k, {from: accounts[1]});

		assert.equal(address7Wlbkz, 0x7e00a96B563294b739bA6AE5EadB8097BF2394c0)
		await expect(SLTDStakingYjONagS.stake.call(uintoqwQdJ7, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingOiIcNl = await SLTDStaking.new({from: accounts[3]});
		const addressEEJ9fEY = accounts[1]
		const addressJfwkAi = accounts[2]
		const uintlz0hNGe = BigInt("1714")
		const uintLhFV8e8 = BigInt("1183")
//		await SLTDStakingOiIcNl.onlyRewardDistribution.call({from: accounts[2]});
//		const addressoFAD596 = await SLTDStakingOiIcNl.setSLTD.call(addressJfwkAi, addressEEJ9fEY, {from: accounts[0]});
//		const uint256OIHyvMo = await SLTDStakingOiIcNl.notifyRewardAmount.call(uintlz0hNGe, {from: accounts[2]});
//		await SLTDStakingOiIcNl.onlyOwner.call({from: accounts[2]});
//		const uint25607EWE0 = await SLTDStakingOiIcNl.withdraw.call(uintLhFV8e8, {from: accounts[1]});

		await expect(SLTDStakingOiIcNl.onlyRewardDistribution.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingW4PLBXR = await SLTDStaking.new({from: "0x0000000000000000000000000000000000000001"});
		const addressHD4nJro = accounts[2]
		const addresskQSXKYs = accounts[4]
		const address2wy5mT = accounts[0]
		const uint256COQFvEU = await SLTDStakingW4PLBXR.lastTimeRewardApplicable.call({from: accounts[2]});
		const uint256RFh1aJI = await SLTDStakingW4PLBXR.balanceOf.call(addressHD4nJro, {from: accounts[0]});
		const uint256HysdzIA = await SLTDStakingW4PLBXR.rewardPerToken.call({from: accounts[5]});
		const addressv4gfQhs = await SLTDStakingW4PLBXR.setRewardDistribution.call(addresskQSXKYs, {from: accounts[5]});
		const uint256pp07Ooj = await SLTDStakingW4PLBXR.balanceOf.call(address2wy5mT, {from: accounts[4]});
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakinghJEDCA = await SLTDStaking.new({from: accounts[2]});
		const addressZKXrr0Q = accounts[0]
//		const addressMDqPjzr = await SLTDStakinghJEDCA.transferOwnership.call(addressZKXrr0Q, {from: accounts[0]});
//		const boolfwCTzlN = await SLTDStakinghJEDCA.isOwner.call({from: accounts[5]});
//		const uint256UkKCb7Y = await SLTDStakinghJEDCA.lastTimeRewardApplicable.call({from: accounts[5]});
//		const uint256cLMcuI = await SLTDStakinghJEDCA.totalSupply.call({from: accounts[0]});

		await expect(SLTDStakinghJEDCA.transferOwnership.call(addressZKXrr0Q, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingWgsOSrI = await SLTDStaking.new({from: accounts[2]});
		const addressVVi7hy6 = accounts[3]
		const addressbVe07ca = accounts[2]
//		await SLTDStakingWgsOSrI.exit.call({from: accounts[1]});
//		const addressQgsXcTD = await SLTDStakingWgsOSrI.transferOwnership.call(addressVVi7hy6, {from: accounts[5]});
//		const uint256B8Iy3dM = await SLTDStakingWgsOSrI.balanceOf.call(addressbVe07ca, {from: accounts[3]});

		await expect(SLTDStakingWgsOSrI.exit.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingWgsOSrI = await SLTDStaking.new({from: accounts[2]});
		const addresso0X26oh = accounts[4]
		const addressnewUBud = accounts[3]
		const addressLd1cBPo = await SLTDStakingWgsOSrI.transferOwnership.call(addresso0X26oh, {from: accounts[2]});
		const uint256mh85LnH = await SLTDStakingWgsOSrI.rewardPerToken.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256B8Iy3dM = await SLTDStakingWgsOSrI.balanceOf.call(addressnewUBud, {from: accounts[3]});

		assert.equal(uint256B8Iy3dM, BigInt("0"))
		assert.equal(uint256mh85LnH, BigInt("0"))
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingxy0dlrs = await SLTDStaking.new({from: accounts[1]});
		const addresslfGOhh5 = accounts[0]
		const addresscXlEIu3 = accounts[2]
		const uintMlpqMw8 = BigInt("1097")
		const uint256njEvvIz = await SLTDStakingxy0dlrs.lastTimeRewardApplicable.call({from: accounts[1]});
		const addressxyu4du9 = await SLTDStakingxy0dlrs.setRewardDistribution.call(addresslfGOhh5, {from: accounts[1]});
		const uint256fz5PW7j = await SLTDStakingxy0dlrs.earned.call(addresscXlEIu3, {from: accounts[3]});
//		const uint256KIca5y8 = await SLTDStakingxy0dlrs.stake.call(uintMlpqMw8, {from: accounts[1]});

		assert.equal(uint256fz5PW7j, BigInt("0"))
		assert.equal(uint256njEvvIz, BigInt("0"))
		await expect(SLTDStakingxy0dlrs.stake.call(uintMlpqMw8, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingxy0dlrs = await SLTDStaking.new({from: accounts[1]});
		const addressWaQKGBb = accounts[2]
//		await SLTDStakingxy0dlrs.getReward.call({from: "0x0000000000000000000000000000000000000001"});
//		await SLTDStakingxy0dlrs.renounceOwnership.call({from: accounts[1]});
//		const addressohpT1gL = await SLTDStakingxy0dlrs.setRewardDistribution.call(addressWaQKGBb, {from: "0x0000000000000000000000000000000000000001"});

		await expect(SLTDStakingxy0dlrs.getReward.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});
})