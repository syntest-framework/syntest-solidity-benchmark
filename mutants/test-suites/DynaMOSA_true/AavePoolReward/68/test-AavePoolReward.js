const AavePoolReward = artifacts.require("AavePoolReward");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('AavePoolReward', (accounts) => {
	it('test for AavePoolReward', async () => {
		const AavePoolRewardSMswuJ = await AavePoolReward.new({from: accounts[4]});
		const uintz08oJkt = BigInt("334")
//		await AavePoolRewardSMswuJ.exit.call({from: accounts[4]});
//		const uint256Qov1LmA = await AavePoolRewardSMswuJ.notifyRewardAmount.call(uintz08oJkt, {from: accounts[0]});
//		await AavePoolRewardSMswuJ.exit.call({from: accounts[2]});

		await expect(AavePoolRewardSMswuJ.exit.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardhSpe6x2 = await AavePoolReward.new({from: accounts[4]});
		const uinteekvUII = BigInt("1314")
		const uintT43L24U = BigInt("54")
		const uintEQcQa7y = BigInt("694")
		const uintfHGtzq9 = BigInt("342")
//		const uint256aRDJYZD = await AavePoolRewardhSpe6x2.notifyRewardAmount.call(uinteekvUII, {from: accounts[0]});
//		const uint256jz50tBg = await AavePoolRewardhSpe6x2.stake.call(uintT43L24U, {from: accounts[5]});
//		await AavePoolRewardhSpe6x2.exit.call({from: accounts[2]});
//		await AavePoolRewardhSpe6x2.getReward.call({from: accounts[0]});
//		const uint256qDq5awo = await AavePoolRewardhSpe6x2.withdraw.call(uintEQcQa7y, {from: accounts[2]});
//		const uint256LRJ6WCi = await AavePoolRewardhSpe6x2.stake.call(uintfHGtzq9, {from: accounts[1]});

		await expect(AavePoolRewardhSpe6x2.notifyRewardAmount.call(uinteekvUII, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardemeNwbW = await AavePoolReward.new({from: accounts[0]});
		const uintr145jsB = BigInt("851")
		const addressmmtKu1r = accounts[5]
		const addressL2eJXAa = accounts[1]
		const uintirCwjJH = BigInt("1795")
//		const uint256utqmGt1 = await AavePoolRewardemeNwbW.withdraw.call(uintr145jsB, {from: accounts[4]});
//		const uint256iHSTYuU = await AavePoolRewardemeNwbW.rewardPerToken.call({from: "0x0000000000000000000000000000000000000001"});
//		await AavePoolRewardemeNwbW.getReward.call({from: "0x0000000000000000000000000000000000000001"});
//		const addressXAfmDdg = await AavePoolRewardemeNwbW.updateReward.call(addressmmtKu1r, {from: accounts[3]});
//		const uint256JYjZ6xf = await AavePoolRewardemeNwbW.earned.call(addressL2eJXAa, {from: accounts[3]});
//		const uint256xnmNzv = await AavePoolRewardemeNwbW.stake.call(uintirCwjJH, {from: accounts[4]});

		await expect(AavePoolRewardemeNwbW.withdraw.call(uintr145jsB, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardygwGMxM = await AavePoolReward.new({from: accounts[3]});
		const addressZIfVgxh = accounts[4]
		const uint256KRKIxE = await AavePoolRewardygwGMxM.lastTimeRewardApplicable.call({from: accounts[2]});
		const uint256fxVTyIz = await AavePoolRewardygwGMxM.rewardPerToken.call({from: accounts[0]});
//		await AavePoolRewardygwGMxM.getReward.call({from: accounts[0]});
//		const addressg1fiS8b = await AavePoolRewardygwGMxM.dev.call(addressZIfVgxh, {from: accounts[0]});
//		await AavePoolRewardygwGMxM.getReward.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256KRKIxE, BigInt("0"))
		assert.equal(uint256fxVTyIz, BigInt("0"))
		await expect(AavePoolRewardygwGMxM.getReward.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardygwGMxM = await AavePoolReward.new({from: accounts[3]});
		const addressdd6joPN = accounts[2]
		const addressQ6unFM = accounts[4]
		const uint256fxVTyIz = await AavePoolRewardygwGMxM.rewardPerToken.call({from: accounts[0]});
//		await AavePoolRewardygwGMxM.getReward.call({from: accounts[0]});
//		const addressSyU5Dzw = await AavePoolRewardygwGMxM.updateReward.call(addressdd6joPN, {from: accounts[0]});
//		const addressg1fiS8b = await AavePoolRewardygwGMxM.dev.call(addressQ6unFM, {from: accounts[0]});
//		await AavePoolRewardygwGMxM.getReward.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256fxVTyIz, BigInt("0"))
		await expect(AavePoolRewardygwGMxM.getReward.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardMGuIEot = await AavePoolReward.new({from: accounts[0]});
		const uintw4TGQ3n = BigInt("717")
//		const uint256yk1XS2w = await AavePoolRewardMGuIEot.stake.call(uintw4TGQ3n, {from: accounts[4]});
//		const uint256Vkx0K7J = await AavePoolRewardMGuIEot.rewardPerToken.call({from: accounts[0]});
//		const uint256BiCcUD = await AavePoolRewardMGuIEot.lastTimeRewardApplicable.call({from: accounts[1]});
//		await AavePoolRewardMGuIEot.exit.call({from: accounts[0]});

		await expect(AavePoolRewardMGuIEot.stake.call(uintw4TGQ3n, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewarddyDmvi = await AavePoolReward.new({from: accounts[3]});
		const addressMwQcpKX = accounts[1]
		const uintQjRjAAF = BigInt("206")
		const addressWfDZFJ6 = await AavePoolRewarddyDmvi.dev.call(addressMwQcpKX, {from: accounts[3]});
//		const uint256PwTCjl6 = await AavePoolRewarddyDmvi.withdraw.call(uintQjRjAAF, {from: accounts[0]});

		await expect(AavePoolRewarddyDmvi.withdraw.call(uintQjRjAAF, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardygwGMxM = await AavePoolReward.new({from: accounts[3]});
		const uintGokMavz = BigInt("1771")
		const addressfXa5nZ0 = accounts[4]
		const uint256CIpk3Gl = await AavePoolRewardygwGMxM.notifyRewardAmount.call(uintGokMavz, {from: accounts[3]});
//		await AavePoolRewardygwGMxM.exit.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256KRKIxE = await AavePoolRewardygwGMxM.lastTimeRewardApplicable.call({from: accounts[2]});
//		await AavePoolRewardygwGMxM.getReward.call({from: accounts[0]});
//		const addressg1fiS8b = await AavePoolRewardygwGMxM.dev.call(addressfXa5nZ0, {from: accounts[0]});
//		await AavePoolRewardygwGMxM.getReward.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(AavePoolRewardygwGMxM.exit.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardaP6X85F = await AavePoolReward.new({from: "0x0000000000000000000000000000000000000001"});
		const uintNNk31vz = BigInt("1619")
		const uintHanuhOL = BigInt("1762")
		const uintToeOkb9 = BigInt("1530")
		const addressWSRkP2m = accounts[0]
		await AavePoolRewardaP6X85F.exit.call({from: accounts[3]});
		const uint256awzPRF9 = await AavePoolRewardaP6X85F.withdraw.call(uintNNk31vz, {from: accounts[0]});
		const uint256wo6TmEw = await AavePoolRewardaP6X85F.stake.call(uintHanuhOL, {from: accounts[2]});
		const uint2569Vy9RR = await AavePoolRewardaP6X85F.stake.call(uintToeOkb9, {from: accounts[1]});
		const uint256PleawJA = await AavePoolRewardaP6X85F.earned.call(addressWSRkP2m, {from: accounts[2]});
	});
})