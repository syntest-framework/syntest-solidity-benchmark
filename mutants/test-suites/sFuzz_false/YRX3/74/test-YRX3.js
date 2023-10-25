const YRX3 = artifacts.require("YRX3");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('YRX3', (accounts) => {
	it('test for YRX3', async () => {
		const YRX3FD9WHCg = await YRX3.new({from: accounts[1]});
		const addressvS84KD = accounts[3]
		const uint256nIQvThq = await YRX3FD9WHCg.totalSupply.call({from: accounts[3]});
		const boolAv0V4em = await YRX3FD9WHCg.isOwner.call({from: "0x0000000000000000000000000000000000000001"});
//		await YRX3FD9WHCg.checkNextEpoch.call({from: accounts[4]});
//		await YRX3FD9WHCg.onlyRewardDistribution.call({from: accounts[1]});
//		const addressj6sli89 = await YRX3FD9WHCg.transferOwnership.call(addressvS84KD, {from: accounts[1]});
//		await YRX3FD9WHCg.notifyRewardAmount.call({from: accounts[0]});

		assert.equal(boolAv0V4em, false)
		assert.equal(uint256nIQvThq, BigInt("0"))
		await expect(YRX3FD9WHCg.checkNextEpoch.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3owQILQ1 = await YRX3.new({from: "0x0000000000000000000000000000000000000001"});
		const uintMHUdXLa = BigInt("1443")
		const addressXmLOCg = accounts[5]
		await YRX3owQILQ1.renounceOwnership.call({from: accounts[0]});
		const uint256ScNpRhu = await YRX3owQILQ1.stake.call(uintMHUdXLa, {from: accounts[2]});
		const uint256oaGSt8J = await YRX3owQILQ1.totalSupply.call({from: accounts[5]});
		const uint256eIoktnF = await YRX3owQILQ1.earned.call(addressXmLOCg, {from: accounts[0]});
	});

	it('test for YRX3', async () => {
		const YRX3JCbjxpY = await YRX3.new({from: accounts[1]});
		const addressL2KNQxC = accounts[1]
		const addressXKv7W6a = accounts[3]
		const uint256j92P8FG = await YRX3JCbjxpY.earned.call(addressL2KNQxC, {from: accounts[3]});
//		await YRX3JCbjxpY.getReward.call({from: accounts[1]});
//		const addressZYxNMVo = await YRX3JCbjxpY.owner.call({from: accounts[2]});
//		const addressDe7rXz9 = await YRX3JCbjxpY.emergencyDrain.call(addressXKv7W6a, {from: accounts[3]});

		assert.equal(uint256j92P8FG, BigInt("0"))
		await expect(YRX3JCbjxpY.getReward.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3laNRo7 = await YRX3.new({from: accounts[4]});
		const uintl7MUvMU = BigInt("871")
		const uintHLatXmB = BigInt("587")
//		const uint256ytyiBUD = await YRX3laNRo7.stake.call(uintl7MUvMU, {from: accounts[2]});
//		const uint256qyc2FDG = await YRX3laNRo7.withdraw.call(uintHLatXmB, {from: "0x0000000000000000000000000000000000000001"});
//		await YRX3laNRo7.renounceOwnership.call({from: accounts[1]});

		await expect(YRX3laNRo7.stake.call(uintl7MUvMU, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3h478wdB = await YRX3.new({from: accounts[0]});
		const addressvaSZzDZ = accounts[4]
//		const addresshAksQfC = await YRX3h478wdB.setRewardDistribution.call(addressvaSZzDZ, {from: accounts[4]});
//		await YRX3h478wdB.getReward.call({from: accounts[3]});

		await expect(YRX3h478wdB.setRewardDistribution.call(addressvaSZzDZ, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3haYII1M = await YRX3.new({from: accounts[4]});
		const addressOrjgEsE = accounts[2]
		const uintyALHjM7 = BigInt("615")
		const addressrzl0jVL = accounts[0]
		const addressEkHurN7 = accounts[4]
		const uint256TMiFdQH = await YRX3haYII1M.earned.call(addressOrjgEsE, {from: accounts[0]});
//		const uint256fawbqOw = await YRX3haYII1M.withdraw.call(uintyALHjM7, {from: accounts[4]});
//		const uint256wb2lVsv = await YRX3haYII1M.earned.call(addressrzl0jVL, {from: accounts[0]});
//		const addressgs97qQO = await YRX3haYII1M.toPayable.call(addressEkHurN7, {from: accounts[1]});

		assert.equal(uint256TMiFdQH, BigInt("0"))
		await expect(YRX3haYII1M.withdraw.call(uintyALHjM7, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3h478wdB = await YRX3.new({from: accounts[0]});
		const addressQG0Xzcx = accounts[5]
//		await YRX3h478wdB.exit.call({from: accounts[1]});
//		const addresshAksQfC = await YRX3h478wdB.setRewardDistribution.call(addressQG0Xzcx, {from: accounts[4]});

		await expect(YRX3h478wdB.exit.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3h478wdB = await YRX3.new({from: accounts[0]});
//		await YRX3h478wdB.getReward.call({from: accounts[3]});
//		await YRX3h478wdB.renounceOwnership.call({from: accounts[0]});

		await expect(YRX3h478wdB.getReward.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3h478wdB = await YRX3.new({from: accounts[0]});
		const addressF4AePwr = accounts[2]
		const address5Tgcem = accounts[4]
		const address1vljHk = accounts[3]
		const addressnE99G9v = await YRX3h478wdB.setRewardDistribution.call(addressF4AePwr, {from: accounts[0]});
		const uint256HXsiAYT = await YRX3h478wdB.earned.call(address5Tgcem, {from: "0x0000000000000000000000000000000000000001"});
//		await YRX3h478wdB.getReward.call({from: accounts[3]});
//		const uint256krTY1NP = await YRX3h478wdB.earned.call(address1vljHk, {from: accounts[3]});

		assert.equal(uint256HXsiAYT, BigInt("0"))
		await expect(YRX3h478wdB.getReward.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3h478wdB = await YRX3.new({from: accounts[0]});
		const addressZlpKdCw = accounts[1]
		const addressciUASA = accounts[6]
		const addressz9NdoXq = accounts[1]
		const addressBmKMmdj = await YRX3h478wdB.transferOwnership.call(addressZlpKdCw, {from: accounts[0]});
//		const addresshAksQfC = await YRX3h478wdB.setRewardDistribution.call(addressciUASA, {from: accounts[4]});
//		const addressAIP1jOu = await YRX3h478wdB.updateReward.call(addressz9NdoXq, {from: accounts[2]});

		await expect(YRX3h478wdB.setRewardDistribution.call(addressciUASA, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})