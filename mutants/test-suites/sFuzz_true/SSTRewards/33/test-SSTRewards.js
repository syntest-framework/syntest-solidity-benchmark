const SSTRewards = artifacts.require("SSTRewards");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('SSTRewards', (accounts) => {
	it('test for SSTRewards', async () => {
		const SSTRewardsgFLJj3P = await SSTRewards.new({from: accounts[3]});
		const uintSOPqJVV = BigInt("1002")
		const addressL7X3qUS = "0x0000000000000000000000000000000000000001"
		const uintnsxHTVV = BigInt("40")
//		const uint256InPTTj5 = await SSTRewardsgFLJj3P.stake.call(uintSOPqJVV, {from: accounts[0]});
//		const uint256MatfP2C = await SSTRewardsgFLJj3P.earned.call(addressL7X3qUS, {from: accounts[0]});
//		await SSTRewardsgFLJj3P.getReward.call({from: accounts[1]});
//		const uint256zDOncrk = await SSTRewardsgFLJj3P.stake.call(uintnsxHTVV, {from: accounts[5]});
//		await SSTRewardsgFLJj3P.checkStart.call({from: accounts[0]});

		await expect(SSTRewardsgFLJj3P.stake.call(uintSOPqJVV, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SSTRewards', async () => {
		const SSTRewardseREX5wu = await SSTRewards.new({from: accounts[3]});
		const addressxerVTR = accounts[2]
		const addressS21SUK2 = accounts[0]
		const addressQB33QmQ = accounts[1]
		const uintgoPCu6N = BigInt("1505")
		const uint256l4kK9T8 = await SSTRewardseREX5wu.earned.call(addressxerVTR, {from: "0x0000000000000000000000000000000000000001"});
		const uint256RHvcfOH = await SSTRewardseREX5wu.rewardPerToken.call({from: accounts[3]});
		const uint256hfzv9ec = await SSTRewardseREX5wu.balanceOf.call(addressS21SUK2, {from: "0x0000000000000000000000000000000000000001"});
//		const addressHi0rrQa = await SSTRewardseREX5wu.updateReward.call(addressQB33QmQ, {from: accounts[1]});
//		await SSTRewardseREX5wu.exit.call({from: accounts[1]});
//		const uint256ps2WHLC = await SSTRewardseREX5wu.stake.call(uintgoPCu6N, {from: accounts[1]});

		assert.equal(uint256RHvcfOH, BigInt("0"))
		assert.equal(uint256hfzv9ec, BigInt("0"))
		assert.equal(uint256l4kK9T8, BigInt("0"))
		await expect(SSTRewardseREX5wu.updateReward.call(addressQB33QmQ, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for SSTRewards', async () => {
		const SSTRewards5mqb1v = await SSTRewards.new({from: accounts[1]});
		const addressXPsfjo2 = accounts[0]
		const uint256Lfcka7y = await SSTRewards5mqb1v.balanceOf.call(addressXPsfjo2, {from: accounts[1]});
//		await SSTRewards5mqb1v.exit.call({from: accounts[2]});

		assert.equal(uint256Lfcka7y, BigInt("0"))
		await expect(SSTRewards5mqb1v.exit.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for SSTRewards', async () => {
		const SSTRewardshJVXTs = await SSTRewards.new({from: accounts[1]});
		const uintuZlUkOV = BigInt("1282")
		const addressN5G05SQ = accounts[0]
		const addressqsEaRgI = accounts[3]
//		const uint256qsu0GP = await SSTRewardshJVXTs.withdraw.call(uintuZlUkOV, {from: accounts[3]});
//		const uint256y7pK3E = await SSTRewardshJVXTs.balanceOf.call(addressN5G05SQ, {from: accounts[1]});
//		const uint256EHvOgl1 = await SSTRewardshJVXTs.rewardPerToken.call({from: accounts[2]});
//		const uint2563HLrTF = await SSTRewardshJVXTs.totalSupply.call({from: accounts[2]});
//		const uint256gS9iYdM = await SSTRewardshJVXTs.earned.call(addressqsEaRgI, {from: accounts[0]});

		await expect(SSTRewardshJVXTs.withdraw.call(uintuZlUkOV, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for SSTRewards', async () => {
		const SSTRewardsV0kUZNI = await SSTRewards.new({from: accounts[5]});
		const addressVgOatvb = accounts[3]
		const addresstf5AX9d = accounts[1]
		const uintBCzHbq6 = BigInt("1183")
//		await SSTRewardsV0kUZNI.getReward.call({from: accounts[2]});
//		const uint256v68CFOA = await SSTRewardsV0kUZNI.balanceOf.call(addressVgOatvb, {from: accounts[3]});
//		const uint256JHhPiIn = await SSTRewardsV0kUZNI.earned.call(addresstf5AX9d, {from: accounts[3]});
//		await SSTRewardsV0kUZNI.exit.call({from: accounts[1]});
//		const uint256AwVytC = await SSTRewardsV0kUZNI.stake.call(uintBCzHbq6, {from: accounts[1]});

		await expect(SSTRewardsV0kUZNI.getReward.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for SSTRewards', async () => {
		const SSTRewardsQIGJdG6 = await SSTRewards.new({from: "0x0000000000000000000000000000000000000001"});
		const addresskmVgAiV = accounts[5]
		const uintTKKqjdk = BigInt("294")
		const addresszommih7 = accounts[4]
		const addresspfPxPGw = await SSTRewardsQIGJdG6.updateReward.call(addresskmVgAiV, {from: accounts[4]});
		const uint256KuCU7d8 = await SSTRewardsQIGJdG6.stake.call(uintTKKqjdk, {from: accounts[2]});
		await SSTRewardsQIGJdG6.getReward.call({from: accounts[2]});
		const uint256kZJqMzI = await SSTRewardsQIGJdG6.lastTimeRewardApplicable.call({from: accounts[1]});
		const addressczQWkLM = await SSTRewardsQIGJdG6.updateReward.call(addresszommih7, {from: accounts[2]});
		await SSTRewardsQIGJdG6.checkStart.call({from: accounts[4]});
	});

	it('test for SSTRewards', async () => {
		const SSTRewardsoPmH9d3 = await SSTRewards.new({from: accounts[4]});
		const uintNA7aAMP = BigInt("1258")
		const uintzub8ap = BigInt("1123")
//		await SSTRewardsoPmH9d3.getReward.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256mhRb3IH = await SSTRewardsoPmH9d3.notifyRewardAmount.call(uintNA7aAMP, {from: accounts[2]});
//		const uint256e0jBrft = await SSTRewardsoPmH9d3.stake.call(uintzub8ap, {from: accounts[2]});

		await expect(SSTRewardsoPmH9d3.getReward.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});
})