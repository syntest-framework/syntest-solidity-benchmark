const SSTRewards = artifacts.require("SSTRewards");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('SSTRewards', (accounts) => {
	it('test for SSTRewards', async () => {
		const SSTRewardsm8tZHGE = await SSTRewards.new({from: accounts[3]});
		const uintXSTtrym = BigInt("145")
		const addressG85RYUS = accounts[0]
		const addresspIht1Bo = accounts[2]
//		const uint256Psb3CE = await SSTRewardsm8tZHGE.stake.call(uintXSTtrym, {from: "0x0000000000000000000000000000000000000001"});
//		const addressegv5akw = await SSTRewardsm8tZHGE.updateReward.call(addressG85RYUS, {from: accounts[3]});
//		const uint256pwLKYBw = await SSTRewardsm8tZHGE.totalSupply.call({from: accounts[2]});
//		const uint256YK7PJui = await SSTRewardsm8tZHGE.lastTimeRewardApplicable.call({from: accounts[0]});
//		const uint256iY3pps = await SSTRewardsm8tZHGE.balanceOf.call(addresspIht1Bo, {from: accounts[1]});

		await expect(SSTRewardsm8tZHGE.stake.call(uintXSTtrym, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for SSTRewards', async () => {
		const SSTRewardsFtI4MXs = await SSTRewards.new({from: accounts[1]});
		const uint256IBstLGr = await SSTRewardsFtI4MXs.lastTimeRewardApplicable.call({from: accounts[4]});
//		await SSTRewardsFtI4MXs.exit.call({from: accounts[4]});

		assert.equal(uint256IBstLGr, BigInt("0"))
		await expect(SSTRewardsFtI4MXs.exit.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for SSTRewards', async () => {
		const SSTRewardsF2PNEQ0 = await SSTRewards.new({from: accounts[4]});
		const uintN5Eji8V = BigInt("981")
//		await SSTRewardsF2PNEQ0.checkStart.call({from: accounts[0]});
//		const uint256BrjJ4J = await SSTRewardsF2PNEQ0.lastTimeRewardApplicable.call({from: accounts[3]});
//		const uint256zx9DxV9 = await SSTRewardsF2PNEQ0.withdraw.call(uintN5Eji8V, {from: "0x0000000000000000000000000000000000000001"});

		await expect(SSTRewardsF2PNEQ0.checkStart.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SSTRewards', async () => {
		const SSTRewardsCljYL6k = await SSTRewards.new({from: accounts[3]});
		const uintVY30sF9 = BigInt("1526")
		const uintfm0CK5W = BigInt("1111")
		const uintzW2sECP = BigInt("421")
//		const uint256XvXQIO = await SSTRewardsCljYL6k.withdraw.call(uintVY30sF9, {from: accounts[2]});
//		const uint256XGIKHYq = await SSTRewardsCljYL6k.stake.call(uintfm0CK5W, {from: accounts[2]});
//		const uint256pL4uGey = await SSTRewardsCljYL6k.lastTimeRewardApplicable.call({from: accounts[4]});
//		const uint256KAERzJC = await SSTRewardsCljYL6k.stake.call(uintzW2sECP, {from: accounts[3]});

		await expect(SSTRewardsCljYL6k.withdraw.call(uintVY30sF9, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for SSTRewards', async () => {
		const SSTRewardsnwLobpf = await SSTRewards.new({from: "0x0000000000000000000000000000000000000001"});
		const addressuRONeQw = accounts[2]
		const addressaIcS8lJ = accounts[1]
		await SSTRewardsnwLobpf.exit.call({from: accounts[4]});
		const uint256CAt0BNw = await SSTRewardsnwLobpf.earned.call(addressuRONeQw, {from: accounts[4]});
		const uint256UP7tXCm = await SSTRewardsnwLobpf.balanceOf.call(addressaIcS8lJ, {from: accounts[3]});
		await SSTRewardsnwLobpf.checkStart.call({from: accounts[3]});
		await SSTRewardsnwLobpf.exit.call({from: accounts[0]});
	});

	it('test for SSTRewards', async () => {
		const SSTRewardsdJ2EeLn = await SSTRewards.new({from: accounts[3]});
		const addressprvJNq = accounts[5]
		const uintJGiOMK0 = BigInt("432")
		const addressaavSNzf = accounts[3]
		const addressKjQdMGN = accounts[3]
//		await SSTRewardsdJ2EeLn.getReward.call({from: accounts[0]});
//		const uint256Bx6rJ0 = await SSTRewardsdJ2EeLn.earned.call(addressprvJNq, {from: accounts[2]});
//		const uint256R5Ndqkt = await SSTRewardsdJ2EeLn.withdraw.call(uintJGiOMK0, {from: accounts[1]});
//		const uint256DKzjO9 = await SSTRewardsdJ2EeLn.earned.call(addressaavSNzf, {from: accounts[2]});
//		const addresso1rYsRt = await SSTRewardsdJ2EeLn.updateReward.call(addressKjQdMGN, {from: accounts[3]});

		await expect(SSTRewardsdJ2EeLn.getReward.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SSTRewards', async () => {
		const SSTRewardsdJ2EeLn = await SSTRewards.new({from: accounts[3]});
		const uintiCla8a1 = BigInt("617")
		const addressZqmNyuk = accounts[6]
		const uintCzVFCd6 = BigInt("432")
		const addressNwz07GN = accounts[3]
		const addresssGfzK1T = accounts[3]
//		await SSTRewardsdJ2EeLn.getReward.call({from: accounts[0]});
//		const uint256flt9jGe = await SSTRewardsdJ2EeLn.notifyRewardAmount.call(uintiCla8a1, {from: accounts[5]});
//		const uint256Bx6rJ0 = await SSTRewardsdJ2EeLn.earned.call(addressZqmNyuk, {from: accounts[2]});
//		const uint256R5Ndqkt = await SSTRewardsdJ2EeLn.withdraw.call(uintCzVFCd6, {from: accounts[1]});
//		const uint256DKzjO9 = await SSTRewardsdJ2EeLn.earned.call(addressNwz07GN, {from: accounts[2]});
//		const addresso1rYsRt = await SSTRewardsdJ2EeLn.updateReward.call(addresssGfzK1T, {from: accounts[3]});

		await expect(SSTRewardsdJ2EeLn.getReward.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});
})