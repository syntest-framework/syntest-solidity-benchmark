const AavePoolReward = artifacts.require("AavePoolReward");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('AavePoolReward', (accounts) => {
	it('test for AavePoolReward', async () => {
		const AavePoolRewardXtelwcd = await AavePoolReward.new({from: accounts[1]});
		const uintG44pemw = BigInt("371")
		const uintLXGo0t5 = BigInt("1418")
		const uint256qXVEeMj = await AavePoolRewardXtelwcd.stake.call(uintG44pemw, {from: accounts[4]});
		const uint256FxjZW0m = await AavePoolRewardXtelwcd.lastTimeRewardApplicable.call({from: accounts[0]});
		const uint256MpMU1JA = await AavePoolRewardXtelwcd.stake.call(uintLXGo0t5, {from: accounts[1]});

		await expect(AavePoolRewardXtelwcd.stake.call(uintG44pemw, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardU74RDKu = await AavePoolReward.new({from: accounts[3]});
		const addressPZQ2C5C = accounts[1]
		const uintcnFl5Ar = BigInt("418")
		const addressA2MNoU = accounts[2]
		const addresseIHcSdI = accounts[0]
		const uint256SvJxoa = await AavePoolRewardU74RDKu.rewardPerToken.call({from: "0x0000000000000000000000000000000000000001"});
		const addressrCXkH7P = await AavePoolRewardU74RDKu.dev.call(addressPZQ2C5C, {from: accounts[3]});
		const uint256s1fpcHF = await AavePoolRewardU74RDKu.notifyRewardAmount.call(uintcnFl5Ar, {from: "0x0000000000000000000000000000000000000001"});
		const uint256jwUnlqX = await AavePoolRewardU74RDKu.earned.call(addressA2MNoU, {from: accounts[4]});
		await AavePoolRewardU74RDKu.getReward.call({from: accounts[0]});
		const uint256SdJHnP5 = await AavePoolRewardU74RDKu.earned.call(addresseIHcSdI, {from: accounts[3]});

		assert.equal(uint256SvJxoa, BigInt("0"))
		await expect(AavePoolRewardU74RDKu.notifyRewardAmount.call(uintcnFl5Ar, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardcGSx5EF = await AavePoolReward.new({from: accounts[2]});
		const uintSUulCt = BigInt("813")
		await AavePoolRewardcGSx5EF.exit.call({from: accounts[3]});
		const uint256NrfOcw1 = await AavePoolRewardcGSx5EF.rewardPerToken.call({from: accounts[2]});
		await AavePoolRewardcGSx5EF.exit.call({from: accounts[2]});
		const uint256BmRweK = await AavePoolRewardcGSx5EF.stake.call(uintSUulCt, {from: accounts[2]});

		await expect(AavePoolRewardcGSx5EF.exit.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardOlHUu85 = await AavePoolReward.new({from: accounts[1]});
		const addressByD9wKx = "0x0000000000000000000000000000000000000001"
		const uint256LZ7dHz = await AavePoolRewardOlHUu85.rewardPerToken.call({from: accounts[5]});
		const uint256oWfZO5 = await AavePoolRewardOlHUu85.lastTimeRewardApplicable.call({from: accounts[1]});
		await AavePoolRewardOlHUu85.getReward.call({from: "0x0000000000000000000000000000000000000001"});
		const addressbaAKJu = await AavePoolRewardOlHUu85.dev.call(addressByD9wKx, {from: accounts[3]});

		assert.equal(uint256LZ7dHz, BigInt("0"))
		assert.equal(uint256oWfZO5, BigInt("0"))
		await expect(AavePoolRewardOlHUu85.getReward.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardcXZDpZI = await AavePoolReward.new({from: accounts[1]});
		const uint5wqBy7 = BigInt("860")
		const uintDYheHMw = BigInt("890")
		const uintiugVMnJ = BigInt("697")
		const uint2563PedAu = await AavePoolRewardcXZDpZI.rewardPerToken.call({from: accounts[4]});
		const uint256MjbCZiw = await AavePoolRewardcXZDpZI.withdraw.call(uint5wqBy7, {from: accounts[4]});
		const uint256ODgyIYa = await AavePoolRewardcXZDpZI.stake.call(uintDYheHMw, {from: "0x0000000000000000000000000000000000000001"});
		const uint256ZtTvuWO = await AavePoolRewardcXZDpZI.stake.call(uintiugVMnJ, {from: accounts[3]});

		assert.equal(uint2563PedAu, BigInt("0"))
		await expect(AavePoolRewardcXZDpZI.withdraw.call(uint5wqBy7, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardFfpf0dO = await AavePoolReward.new({from: accounts[0]});
		const uintfjvK96G = BigInt("1400")
		const uintPatTR0A = BigInt("53")
		const uinto26vbwm = BigInt("633")
		const addresswNNlZVU = accounts[2]
		const uintkvdvqfR = BigInt("47")
		const uint256hO7pERG = await AavePoolRewardFfpf0dO.notifyRewardAmount.call(uintfjvK96G, {from: accounts[0]});
		const uint256v0V1Zn = await AavePoolRewardFfpf0dO.stake.call(uintPatTR0A, {from: accounts[2]});
		const uint256yYaLIZc = await AavePoolRewardFfpf0dO.notifyRewardAmount.call(uinto26vbwm, {from: accounts[1]});
		const uint256n9rGWt = await AavePoolRewardFfpf0dO.earned.call(addresswNNlZVU, {from: accounts[1]});
		const uint256gRKLy7 = await AavePoolRewardFfpf0dO.rewardPerToken.call({from: accounts[0]});
		const uint256f3aLcOP = await AavePoolRewardFfpf0dO.rewardPerToken.call({from: accounts[0]});
		const uint2564FlBZh = await AavePoolRewardFfpf0dO.withdraw.call(uintkvdvqfR, {from: accounts[0]});
		const uint256mkgj4dM = await AavePoolRewardFfpf0dO.lastTimeRewardApplicable.call({from: accounts[4]});

		await expect(AavePoolRewardFfpf0dO.stake.call(uintPatTR0A, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardcXZDpZI = await AavePoolReward.new({from: accounts[1]});
		const addressIPgryYC = accounts[2]
		const uint2563PedAu = await AavePoolRewardcXZDpZI.rewardPerToken.call({from: accounts[4]});
		const addresshbVUdar = await AavePoolRewardcXZDpZI.updateReward.call(addressIPgryYC, {from: accounts[0]});

		assert.equal(uint2563PedAu, BigInt("0"))
		await expect(AavePoolRewardcXZDpZI.updateReward.call(addressIPgryYC, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardkzlNtNI = await AavePoolReward.new({from: "0x0000000000000000000000000000000000000001"});
		const addresspA4fhdl = accounts[2]
		const uintFn9kLdg = BigInt("583")
		const uint256Z8bv9Wj = await AavePoolRewardkzlNtNI.earned.call(addresspA4fhdl, {from: accounts[1]});
		await AavePoolRewardkzlNtNI.getReward.call({from: accounts[1]});
		const uint256e1gU1Y = await AavePoolRewardkzlNtNI.lastTimeRewardApplicable.call({from: accounts[0]});
		await AavePoolRewardkzlNtNI.getReward.call({from: accounts[4]});
		const uint256oAMHdgA = await AavePoolRewardkzlNtNI.withdraw.call(uintFn9kLdg, {from: accounts[5]});
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardJItElEE = await AavePoolReward.new({from: accounts[3]});
		const uintyjf0yL4 = BigInt("0")
		const addressTEVrtYq = accounts[4]
		const addressL7uYLwJ = accounts[2]
		const uint2560DCibd = await AavePoolRewardJItElEE.stake.call(uintyjf0yL4, {from: "0x0000000000000000000000000000000000000001"});
		const uint256ooO2Lt3 = await AavePoolRewardJItElEE.earned.call(addressTEVrtYq, {from: "0x0000000000000000000000000000000000000001"});
		const uint256bMRTzhU = await AavePoolRewardJItElEE.lastTimeRewardApplicable.call({from: accounts[5]});
		const uint256Y46iSaP = await AavePoolRewardJItElEE.rewardPerToken.call({from: accounts[4]});
		const addressxKwzbEe = await AavePoolRewardJItElEE.dev.call(addressL7uYLwJ, {from: accounts[4]});

		await expect(AavePoolRewardJItElEE.stake.call(uintyjf0yL4, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});
})