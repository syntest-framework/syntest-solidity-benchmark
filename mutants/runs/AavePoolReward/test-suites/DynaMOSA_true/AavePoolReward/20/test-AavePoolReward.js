const AavePoolReward = artifacts.require("AavePoolReward");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('AavePoolReward', (accounts) => {
	it('test for AavePoolReward', async () => {
		const AavePoolRewardhoZwSe = await AavePoolReward.new({from: accounts[4]});
		const addressA8BZXqt = accounts[1]
		const addressNkiy37R = accounts[3]
		const uintbfUPRmo = BigInt("1847")
		const uint256H91HUuM = await AavePoolRewardhoZwSe.earned.call(addressA8BZXqt, {from: accounts[4]});
		const uint256YosoIKL = await AavePoolRewardhoZwSe.rewardPerToken.call({from: accounts[3]});
		await AavePoolRewardhoZwSe.exit.call({from: "0x0000000000000000000000000000000000000001"});
		const addresszifylj = await AavePoolRewardhoZwSe.updateReward.call(addressNkiy37R, {from: "0x0000000000000000000000000000000000000001"});
		const uint256NZTnHhu = await AavePoolRewardhoZwSe.withdraw.call(uintbfUPRmo, {from: accounts[1]});
		await AavePoolRewardhoZwSe.exit.call({from: accounts[1]});

		assert.equal(uint256H91HUuM, BigInt("0"))
		assert.equal(uint256YosoIKL, BigInt("0"))
		await expect(AavePoolRewardhoZwSe.exit.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardLE9GAa1 = await AavePoolReward.new({from: accounts[1]});
		const uintBJDui5t = BigInt("1602")
		await AavePoolRewardLE9GAa1.getReward.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256z833LoM = await AavePoolRewardLE9GAa1.notifyRewardAmount.call(uintBJDui5t, {from: accounts[2]});

		await expect(AavePoolRewardLE9GAa1.getReward.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardlcqaV8L = await AavePoolReward.new({from: accounts[4]});
		const uintrTKDcee = BigInt("1811")
		const uintbOqJguR = BigInt("77")
		const addressfveNQ1f = accounts[1]
		const uintGxdX0TX = BigInt("344")
		const uintLj1qNf = BigInt("418")
		const uint256e92LVqv = await AavePoolRewardlcqaV8L.stake.call(uintrTKDcee, {from: accounts[0]});
		const uint256E9STCdX = await AavePoolRewardlcqaV8L.withdraw.call(uintbOqJguR, {from: accounts[3]});
		const uint256rZ6Tfg = await AavePoolRewardlcqaV8L.rewardPerToken.call({from: accounts[1]});
		const uint2561hi5ou = await AavePoolRewardlcqaV8L.earned.call(addressfveNQ1f, {from: accounts[0]});
		const uint256YKZEAR3 = await AavePoolRewardlcqaV8L.withdraw.call(uintGxdX0TX, {from: accounts[2]});
		const uint256jbJVhqJ = await AavePoolRewardlcqaV8L.notifyRewardAmount.call(uintLj1qNf, {from: accounts[2]});

		await expect(AavePoolRewardlcqaV8L.stake.call(uintrTKDcee, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardrvf5h3a = await AavePoolReward.new({from: accounts[0]});
		const uintUNqz4tx = BigInt("308")
		const uinty1azcPC = BigInt("922")
		const uintHkRoK6C = BigInt("1155")
		const uint256CrnZ1E = await AavePoolRewardrvf5h3a.withdraw.call(uintUNqz4tx, {from: accounts[1]});
		const uint256ljFV6UD = await AavePoolRewardrvf5h3a.notifyRewardAmount.call(uinty1azcPC, {from: "0x0000000000000000000000000000000000000001"});
		const uint256fUGmpbS = await AavePoolRewardrvf5h3a.rewardPerToken.call({from: accounts[2]});
		const uint256SSpVT0e = await AavePoolRewardrvf5h3a.stake.call(uintHkRoK6C, {from: accounts[0]});

		await expect(AavePoolRewardrvf5h3a.withdraw.call(uintUNqz4tx, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardQcSWejK = await AavePoolReward.new({from: "0x0000000000000000000000000000000000000001"});
		const uintH42Leun = BigInt("1576")
		const uint256FogUAjS = await AavePoolRewardQcSWejK.lastTimeRewardApplicable.call({from: accounts[4]});
		const uint256OvpZVyb = await AavePoolRewardQcSWejK.stake.call(uintH42Leun, {from: accounts[5]});
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardQsTZLCx = await AavePoolReward.new({from: accounts[0]});
		const addressKFtiE7S = accounts[0]
		const addressSgcxdNC = accounts[5]
		const uint256q7lfgr1 = await AavePoolRewardQsTZLCx.rewardPerToken.call({from: accounts[2]});
		const uint256fm2jgVi = await AavePoolRewardQsTZLCx.earned.call(addressKFtiE7S, {from: accounts[4]});
		const addresshcoTm7 = await AavePoolRewardQsTZLCx.updateReward.call(addressSgcxdNC, {from: accounts[1]});
		await AavePoolRewardQsTZLCx.getReward.call({from: accounts[0]});
		await AavePoolRewardQsTZLCx.getReward.call({from: accounts[2]});

		assert.equal(uint256fm2jgVi, BigInt("0"))
		assert.equal(uint256q7lfgr1, BigInt("0"))
		await expect(AavePoolRewardQsTZLCx.updateReward.call(addressSgcxdNC, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardQsTZLCx = await AavePoolReward.new({from: accounts[0]});
		const address3Spm44 = accounts[0]
		const uintswZN0Yj = BigInt("179")
		const addressLNAFy2d = accounts[5]
		const uint256q7lfgr1 = await AavePoolRewardQsTZLCx.rewardPerToken.call({from: accounts[2]});
		const uint256fm2jgVi = await AavePoolRewardQsTZLCx.earned.call(address3Spm44, {from: accounts[4]});
		const uint256ZcXrl4s = await AavePoolRewardQsTZLCx.notifyRewardAmount.call(uintswZN0Yj, {from: accounts[0]});
		const addresshcoTm7 = await AavePoolRewardQsTZLCx.updateReward.call(addressLNAFy2d, {from: accounts[1]});
		const uint256hzybPoN = await AavePoolRewardQsTZLCx.lastTimeRewardApplicable.call({from: accounts[4]});
		await AavePoolRewardQsTZLCx.getReward.call({from: accounts[0]});
		await AavePoolRewardQsTZLCx.getReward.call({from: accounts[2]});

		assert.equal(uint256fm2jgVi, BigInt("0"))
		assert.equal(uint256q7lfgr1, BigInt("0"))
		await expect(AavePoolRewardQsTZLCx.updateReward.call(addressLNAFy2d, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardYDq6wya = await AavePoolReward.new({from: accounts[0]});
		const addressDryRuN = accounts[3]
		const uintuk4AAEE = BigInt("1293")
		const uint25698T5Je = await AavePoolRewardYDq6wya.lastTimeRewardApplicable.call({from: accounts[0]});
		const addressOwvUItu = await AavePoolRewardYDq6wya.dev.call(addressDryRuN, {from: accounts[3]});
		const uint256BCQLiIj = await AavePoolRewardYDq6wya.withdraw.call(uintuk4AAEE, {from: accounts[1]});

		assert.equal(uint25698T5Je, BigInt("0"))
		await expect(AavePoolRewardYDq6wya.dev.call(addressDryRuN, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardLE9GAa1 = await AavePoolReward.new({from: accounts[1]});
		const addressLqWL79U = accounts[3]
		const addresslKokh7v = accounts[5]
		const uinto5pK6hK = BigInt("1602")
		await AavePoolRewardLE9GAa1.getReward.call({from: "0x0000000000000000000000000000000000000001"});
		const addresskKUA9l2 = await AavePoolRewardLE9GAa1.dev.call(addressLqWL79U, {from: accounts[1]});
		const uint256PbJ098p = await AavePoolRewardLE9GAa1.earned.call(addresslKokh7v, {from: accounts[3]});
		const uint256z833LoM = await AavePoolRewardLE9GAa1.notifyRewardAmount.call(uinto5pK6hK, {from: accounts[2]});

		await expect(AavePoolRewardLE9GAa1.getReward.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});
})