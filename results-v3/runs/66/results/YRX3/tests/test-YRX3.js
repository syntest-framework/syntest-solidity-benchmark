const YRX3 = artifacts.require("YRX3");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('YRX3', (accounts) => {
	it('test for YRX3', async () => {
		const YRX3ag3Txg7 = await YRX3.new({from: accounts[1]});
		const addresstLTZZof = accounts[3]
		const addressBwqB3I2 = accounts[2]
		const addressUa1eTHW = await YRX3ag3Txg7.toPayable.call(addresstLTZZof, {from: "0x0000000000000000000000000000000000000001"});
		const addressWetyvNL = await YRX3ag3Txg7.toPayable.call(addressBwqB3I2, {from: accounts[0]});
		const uint256UI47Zhj = await YRX3ag3Txg7.lastTimeRewardApplicable.call({from: accounts[2]});
		await YRX3ag3Txg7.notifyRewardAmount.call({from: accounts[2]});

		await expect(YRX3ag3Txg7.toPayable.call(addresstLTZZof, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3wdDESBz = await YRX3.new({from: accounts[1]});
		const addresss8QKVgj = "0x0000000000000000000000000000000000000001"
		await YRX3wdDESBz.notifyRewardAmount.call({from: accounts[2]});
		const addresscFNG9WV = await YRX3wdDESBz.emergencyDrain.call(addresss8QKVgj, {from: accounts[2]});
		await YRX3wdDESBz.exit.call({from: accounts[3]});
		await YRX3wdDESBz.renounceOwnership.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(YRX3wdDESBz.notifyRewardAmount.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3ygGSb7J = await YRX3.new({from: accounts[2]});
		const addresswQTYSrH = accounts[0]
		const uint256Pacbod2 = await YRX3ygGSb7J.earned.call(addresswQTYSrH, {from: accounts[2]});
		const uint256NCXYiNe = await YRX3ygGSb7J.rewardPerToken.call({from: accounts[0]});
		await YRX3ygGSb7J.checkNextEpoch.call({from: accounts[4]});
		const addressUqbQwCC = await YRX3ygGSb7J.owner.call({from: accounts[0]});
		await YRX3ygGSb7J.getReward.call({from: accounts[0]});

		assert.equal(uint256NCXYiNe, BigInt("0"))
		assert.equal(uint256Pacbod2, BigInt("0"))
		await expect(YRX3ygGSb7J.checkNextEpoch.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3WBvFfkO = await YRX3.new({from: accounts[1]});
		const uintLgHj7R4 = BigInt("1266")
		const addresssTG92D = accounts[0]
		const addresshIVbJxy = accounts[2]
		const uint256YehwbP = await YRX3WBvFfkO.stake.call(uintLgHj7R4, {from: accounts[2]});
		const addressso1nS02 = await YRX3WBvFfkO.transferOwnership.call(addresssTG92D, {from: accounts[0]});
		const addresseanZnL = await YRX3WBvFfkO.transferOwnership.call(addresshIVbJxy, {from: accounts[3]});
		await YRX3WBvFfkO.onlyRewardDistribution.call({from: accounts[5]});
		await YRX3WBvFfkO.checkStart.call({from: accounts[4]});

		await expect(YRX3WBvFfkO.stake.call(uintLgHj7R4, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3jM7Bwku = await YRX3.new({from: accounts[4]});
		const uintl6XpUUG = BigInt("1717")
		await YRX3jM7Bwku.exit.call({from: accounts[0]});
		const uint256toy0jw = await YRX3jM7Bwku.withdraw.call(uintl6XpUUG, {from: accounts[3]});
		await YRX3jM7Bwku.renounceOwnership.call({from: accounts[0]});
		await YRX3jM7Bwku.renounceOwnership.call({from: accounts[1]});

		await expect(YRX3jM7Bwku.exit.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3SGsD2F = await YRX3.new({from: "0x0000000000000000000000000000000000000001"});
		await YRX3SGsD2F.exit.call({from: accounts[4]});
		await YRX3SGsD2F.notifyRewardAmount.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for YRX3', async () => {
		const YRX3anmgHna = await YRX3.new({from: accounts[0]});
		const uintx4ajcD = BigInt("273")
		const uintzmjVOjc = BigInt("216")
		const uint256sNNS2ff = await YRX3anmgHna.lastTimeRewardApplicable.call({from: accounts[1]});
		const uint256cfcWFW = await YRX3anmgHna.withdraw.call(uintx4ajcD, {from: accounts[4]});
		const uint256SklhVc = await YRX3anmgHna.stake.call(uintzmjVOjc, {from: accounts[0]});

		assert.equal(uint256sNNS2ff, BigInt("0"))
		await expect(YRX3anmgHna.withdraw.call(uintx4ajcD, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3RkMoZQV = await YRX3.new({from: accounts[1]});
		await YRX3RkMoZQV.renounceOwnership.call({from: accounts[1]});
		const uint256ASqWaWk = await YRX3RkMoZQV.totalSupply.call({from: accounts[5]});
		await YRX3RkMoZQV.checkStart.call({from: accounts[1]});

		await expect(YRX3RkMoZQV.renounceOwnership.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3lUZxSJX = await YRX3.new({from: accounts[2]});
		const addressiizpL2S = accounts[5]
		const addressRfGiI52 = accounts[3]
		const addressUEs2AOR = await YRX3lUZxSJX.owner.call({from: accounts[1]});
		const addressaqERiFY = await YRX3lUZxSJX.updateReward.call(addressiizpL2S, {from: accounts[2]});
		await YRX3lUZxSJX.getReward.call({from: accounts[4]});
		const addressfg1Li0i = await YRX3lUZxSJX.toPayable.call(addressRfGiI52, {from: accounts[1]});
		const uint256lSEuivU = await YRX3lUZxSJX.lastTimeRewardApplicable.call({from: "0x0000000000000000000000000000000000000001"});
		await YRX3lUZxSJX.getReward.call({from: accounts[4]});

		assert.equal(addressUEs2AOR, 0xa20cf73A5ffb007123499d15603bEFEd4F2D11c0)
		await expect(YRX3lUZxSJX.updateReward.call(addressiizpL2S, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3RkMoZQV = await YRX3.new({from: accounts[1]});
		const addressLWcCPrr = accounts[4]
		const uintgItwovp = BigInt("437")
		const addresspSP7Brk = accounts[4]
		const addressaPNzVrk = await YRX3RkMoZQV.transferOwnership.call(addressLWcCPrr, {from: accounts[3]});
		const uint256PCUWrEK = await YRX3RkMoZQV.stake.call(uintgItwovp, {from: accounts[0]});
		const addressmiRPFXg = await YRX3RkMoZQV.toPayable.call(addresspSP7Brk, {from: accounts[3]});
		await YRX3RkMoZQV.checkStart.call({from: accounts[1]});

		await expect(YRX3RkMoZQV.transferOwnership.call(addressLWcCPrr, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3RkMoZQV = await YRX3.new({from: accounts[1]});
		const uinttMJfi9C = BigInt("441")
		await YRX3RkMoZQV.getReward.call({from: accounts[2]});
		const uint256PCUWrEK = await YRX3RkMoZQV.stake.call(uinttMJfi9C, {from: accounts[0]});

		await expect(YRX3RkMoZQV.getReward.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3w2e1MXp = await YRX3.new({from: accounts[2]});
		const addressb6ovST5 = accounts[1]
		const addressUFBNKMI = accounts[3]
		const addressaw9c3kF = await YRX3w2e1MXp.transferOwnership.call(addressb6ovST5, {from: accounts[2]});
		await YRX3w2e1MXp.renounceOwnership.call({from: accounts[4]});
		const uint256X8dQmIp = await YRX3w2e1MXp.earned.call(addressUFBNKMI, {from: accounts[4]});
		const uint256P9HYRO2 = await YRX3w2e1MXp.lastTimeRewardApplicable.call({from: accounts[4]});

		await expect(YRX3w2e1MXp.renounceOwnership.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3RkMoZQV = await YRX3.new({from: accounts[1]});
		const addressvXIEYo = accounts[2]
		const addressJ1P1EPe = await YRX3RkMoZQV.setRewardDistribution.call(addressvXIEYo, {from: accounts[1]});
		await YRX3RkMoZQV.getReward.call({from: accounts[2]});

		await expect(YRX3RkMoZQV.getReward.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});
})