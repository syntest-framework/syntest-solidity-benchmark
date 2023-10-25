const AavePoolReward = artifacts.require("AavePoolReward");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('AavePoolReward', (accounts) => {
	it('test for AavePoolReward', async () => {
		const AavePoolRewardK9lyxVp = await AavePoolReward.new({from: accounts[0]});
		const uintfpLjBn0 = BigInt("1038")
		const addressyz3NTj6 = accounts[1]
		const addressYZvTwOn = accounts[4]
//		const uint256tlkzgET = await AavePoolRewardK9lyxVp.stake.call(uintfpLjBn0, {from: accounts[3]});
//		const addressK2Q4zH = await AavePoolRewardK9lyxVp.updateReward.call(addressyz3NTj6, {from: accounts[1]});
//		const uint256AjeUIVv = await AavePoolRewardK9lyxVp.earned.call(addressYZvTwOn, {from: accounts[3]});
//		await AavePoolRewardK9lyxVp.exit.call({from: accounts[3]});
//		await AavePoolRewardK9lyxVp.exit.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(AavePoolRewardK9lyxVp.stake.call(uintfpLjBn0, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardctgaU9r = await AavePoolReward.new({from: accounts[3]});
		const addresswY0x22n = accounts[2]
		const addressPwTZelo = accounts[2]
		const uintAizWCL7 = BigInt("463")
		const uintvzKR0Nm = BigInt("342")
		const addressMmspCzf = await AavePoolRewardctgaU9r.dev.call(addresswY0x22n, {from: accounts[3]});
		const addressSriYdgF = await AavePoolRewardctgaU9r.dev.call(addressPwTZelo, {from: accounts[3]});
//		const uint256zoZyvaQ = await AavePoolRewardctgaU9r.withdraw.call(uintAizWCL7, {from: accounts[5]});
//		await AavePoolRewardctgaU9r.getReward.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256GlNwwx6 = await AavePoolRewardctgaU9r.notifyRewardAmount.call(uintvzKR0Nm, {from: accounts[4]});
//		await AavePoolRewardctgaU9r.getReward.call({from: accounts[0]});

		await expect(AavePoolRewardctgaU9r.withdraw.call(uintAizWCL7, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardy2WEaPW = await AavePoolReward.new({from: accounts[3]});
		const addressBvBqwzh = accounts[0]
//		await AavePoolRewardy2WEaPW.exit.call({from: accounts[2]});
//		const uint256bLGcH9s = await AavePoolRewardy2WEaPW.earned.call(addressBvBqwzh, {from: accounts[1]});
//		await AavePoolRewardy2WEaPW.exit.call({from: accounts[5]});

		await expect(AavePoolRewardy2WEaPW.exit.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardomJPbmW = await AavePoolReward.new({from: accounts[5]});
		const addressdEblelk = accounts[3]
		const address7GT1b1 = accounts[0]
		const addressiv63oG4 = accounts[4]
//		const addressZKQ2Hja = await AavePoolRewardomJPbmW.updateReward.call(addressdEblelk, {from: accounts[2]});
//		const uint256T27ihlH = await AavePoolRewardomJPbmW.earned.call(address7GT1b1, {from: accounts[2]});
//		const uint25628GIBQ = await AavePoolRewardomJPbmW.rewardPerToken.call({from: accounts[3]});
//		const uint256A8tQlxN = await AavePoolRewardomJPbmW.earned.call(addressiv63oG4, {from: "0x0000000000000000000000000000000000000001"});

		await expect(AavePoolRewardomJPbmW.updateReward.call(addressdEblelk, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardDXeIaf5 = await AavePoolReward.new({from: accounts[3]});
		const uintlRJbt9y = BigInt("1841")
		const uintfiqcL8J = BigInt("631")
		const uinti7oltLV = BigInt("2006")
		const uint256uMnTSUc = await AavePoolRewardDXeIaf5.rewardPerToken.call({from: accounts[5]});
		const uint256dxtkxJ9 = await AavePoolRewardDXeIaf5.lastTimeRewardApplicable.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256Ojgudf = await AavePoolRewardDXeIaf5.notifyRewardAmount.call(uintlRJbt9y, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256k63Slru = await AavePoolRewardDXeIaf5.lastTimeRewardApplicable.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256HYthoe0 = await AavePoolRewardDXeIaf5.stake.call(uintfiqcL8J, {from: accounts[2]});
//		const uint256JLrtLyL = await AavePoolRewardDXeIaf5.stake.call(uinti7oltLV, {from: accounts[1]});

		assert.equal(uint256dxtkxJ9, BigInt("0"))
		assert.equal(uint256uMnTSUc, BigInt("0"))
		await expect(AavePoolRewardDXeIaf5.notifyRewardAmount.call(uintlRJbt9y, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardDXeIaf5 = await AavePoolReward.new({from: accounts[3]});
		const addressuS40zJ6 = accounts[4]
		const addressg6yrF9N = accounts[4]
		const uintEmZsHZE = BigInt("631")
		const uint256cJAorU5 = await AavePoolRewardDXeIaf5.earned.call(addressuS40zJ6, {from: accounts[3]});
		const uint256uMnTSUc = await AavePoolRewardDXeIaf5.rewardPerToken.call({from: accounts[5]});
//		const addressFQd9QYE = await AavePoolRewardDXeIaf5.dev.call(addressg6yrF9N, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256dxtkxJ9 = await AavePoolRewardDXeIaf5.lastTimeRewardApplicable.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256HYthoe0 = await AavePoolRewardDXeIaf5.stake.call(uintEmZsHZE, {from: accounts[2]});

		assert.equal(uint256cJAorU5, BigInt("0"))
		assert.equal(uint256uMnTSUc, BigInt("0"))
		await expect(AavePoolRewardDXeIaf5.dev.call(addressg6yrF9N, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardDXeIaf5 = await AavePoolReward.new({from: accounts[3]});
		const uintrgIT240 = BigInt("409")
		const uint256wRS6Gw = await AavePoolRewardDXeIaf5.notifyRewardAmount.call(uintrgIT240, {from: accounts[3]});
		const uint256s7NJp4E = await AavePoolRewardDXeIaf5.rewardPerToken.call({from: accounts[1]});
		const uint256uMnTSUc = await AavePoolRewardDXeIaf5.rewardPerToken.call({from: accounts[5]});

		assert.equal(uint256s7NJp4E, BigInt("0"))
		assert.equal(uint256uMnTSUc, BigInt("0"))
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardxGRQkbE = await AavePoolReward.new({from: "0x0000000000000000000000000000000000000001"});
		const addressArY8baH = accounts[3]
		const uintQgRvzQj = BigInt("1870")
		const uint256GjcGfn = await AavePoolRewardxGRQkbE.earned.call(addressArY8baH, {from: accounts[2]});
		await AavePoolRewardxGRQkbE.exit.call({from: accounts[2]});
		const uint256D7HrcBq = await AavePoolRewardxGRQkbE.lastTimeRewardApplicable.call({from: accounts[5]});
		await AavePoolRewardxGRQkbE.getReward.call({from: accounts[4]});
		const uint256haNjKAM = await AavePoolRewardxGRQkbE.withdraw.call(uintQgRvzQj, {from: accounts[3]});
		await AavePoolRewardxGRQkbE.getReward.call({from: accounts[4]});
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardDXeIaf5 = await AavePoolReward.new({from: accounts[3]});
		const uintnv2O7nv = BigInt("0")
		const uint256uMnTSUc = await AavePoolRewardDXeIaf5.rewardPerToken.call({from: accounts[5]});
//		const uint256Ru95Law = await AavePoolRewardDXeIaf5.stake.call(uintnv2O7nv, {from: accounts[3]});

		assert.equal(uint256uMnTSUc, BigInt("0"))
		await expect(AavePoolRewardDXeIaf5.stake.call(uintnv2O7nv, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})