const YRX3 = artifacts.require("YRX3");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('YRX3', (accounts) => {
	it('test for YRX3', async () => {
		const YRX3rm3sOjS = await YRX3.new({from: accounts[2]});
		const address6XUHdA = accounts[0]
		const addressElhJAql = await YRX3rm3sOjS.owner.call({from: accounts[5]});
//		await YRX3rm3sOjS.onlyRewardDistribution.call({from: accounts[3]});
//		const addressMEEmQDi = await YRX3rm3sOjS.setRewardDistribution.call(address6XUHdA, {from: accounts[3]});
//		const uint256ZIym6fF = await YRX3rm3sOjS.totalSupply.call({from: accounts[1]});
//		await YRX3rm3sOjS.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(addressElhJAql, 0x63610536266F287e7C37667a58eb45004d54A7a0)
		await expect(YRX3rm3sOjS.onlyRewardDistribution.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3OTNHtXf = await YRX3.new({from: accounts[0]});
		const addressmv2b1be = accounts[3]
		const uintf9PCfo = BigInt("1256")
//		await YRX3OTNHtXf.renounceOwnership.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256hj4MZEQ = await YRX3OTNHtXf.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
//		await YRX3OTNHtXf.checkNextEpoch.call({from: "0x0000000000000000000000000000000000000001"});
//		const addresshPMQA2M = await YRX3OTNHtXf.transferOwnership.call(addressmv2b1be, {from: accounts[1]});
//		const uint256Cxen6K = await YRX3OTNHtXf.stake.call(uintf9PCfo, {from: accounts[3]});

		await expect(YRX3OTNHtXf.renounceOwnership.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3OfuWKN = await YRX3.new({from: accounts[0]});
		const uintlOXJGty = BigInt("1197")
		const addressO9tSvxr = accounts[2]
//		const uint256IcrKC55 = await YRX3OfuWKN.stake.call(uintlOXJGty, {from: "0x0000000000000000000000000000000000000001"});
//		const addressXHFiAYX = await YRX3OfuWKN.emergencyDrain.call(addressO9tSvxr, {from: accounts[0]});

		await expect(YRX3OfuWKN.stake.call(uintlOXJGty, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3pYMLR4 = await YRX3.new({from: accounts[3]});
		const uintMDZ3Xzk = BigInt("761")
		const addressQMeH31X = "0x0000000000000000000000000000000000000001"
		const uintZq3Fpzp = BigInt("263")
//		await YRX3pYMLR4.renounceOwnership.call({from: accounts[3]});
//		const uint256g6xUMMy = await YRX3pYMLR4.stake.call(uintMDZ3Xzk, {from: accounts[0]});
//		const uint256lRSwyzd = await YRX3pYMLR4.balanceOf.call(addressQMeH31X, {from: accounts[0]});
//		const uint256I6gjdho = await YRX3pYMLR4.rewardPerToken.call({from: accounts[3]});
//		const uint256haT8ueu = await YRX3pYMLR4.withdraw.call(uintZq3Fpzp, {from: accounts[1]});

		await expect(YRX3pYMLR4.renounceOwnership.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3KTesFk0 = await YRX3.new({from: "0x0000000000000000000000000000000000000001"});
		const addressxrSSV9G = accounts[5]
		const addresspwO4IXI = accounts[4]
		const uint256RUhfT6Q = await YRX3KTesFk0.earned.call(addressxrSSV9G, {from: accounts[2]});
		await YRX3KTesFk0.onlyRewardDistribution.call({from: accounts[4]});
		const addressFrbAmDc = await YRX3KTesFk0.transferOwnership.call(addresspwO4IXI, {from: accounts[2]});
		await YRX3KTesFk0.getReward.call({from: accounts[2]});
		await YRX3KTesFk0.renounceOwnership.call({from: accounts[3]});
	});

	it('test for YRX3', async () => {
		const YRX3OfuWKN = await YRX3.new({from: accounts[0]});
		const addressbMpF70u = accounts[2]
//		const addressXHFiAYX = await YRX3OfuWKN.emergencyDrain.call(addressbMpF70u, {from: accounts[0]});

		await expect(YRX3OfuWKN.emergencyDrain.call(addressbMpF70u, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3pYMLR4 = await YRX3.new({from: accounts[3]});
		const addressH6ntEZ9 = "0x0000000000000000000000000000000000000001"
		const uintbj3D6EG = BigInt("263")
//		await YRX3pYMLR4.renounceOwnership.call({from: accounts[3]});
//		const uint256lRSwyzd = await YRX3pYMLR4.balanceOf.call(addressH6ntEZ9, {from: accounts[0]});
//		const uint256I6gjdho = await YRX3pYMLR4.rewardPerToken.call({from: accounts[3]});
//		const uint256haT8ueu = await YRX3pYMLR4.withdraw.call(uintbj3D6EG, {from: accounts[1]});

		await expect(YRX3pYMLR4.renounceOwnership.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3kqtDo08 = await YRX3.new({from: accounts[2]});
		const addressjTfJayT = accounts[2]
		const uint256nbpreUS = await YRX3kqtDo08.earned.call(addressjTfJayT, {from: accounts[3]});
//		await YRX3kqtDo08.exit.call({from: accounts[2]});

		assert.equal(uint256nbpreUS, BigInt("0"))
		await expect(YRX3kqtDo08.exit.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3OfuWKN = await YRX3.new({from: accounts[0]});
		const addresslDZQaOk = accounts[5]
		const addressM5GJqvn = accounts[5]
		const uintcS8RD6K = BigInt("1937")
		const addressaTZT2uy = await YRX3OfuWKN.transferOwnership.call(addresslDZQaOk, {from: accounts[0]});
//		const addresshYdSGf7 = await YRX3OfuWKN.setRewardDistribution.call(addressM5GJqvn, {from: accounts[1]});
//		const uint256IcrKC55 = await YRX3OfuWKN.stake.call(uintcS8RD6K, {from: "0x0000000000000000000000000000000000000001"});

		await expect(YRX3OfuWKN.setRewardDistribution.call(addressM5GJqvn, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3OfuWKN = await YRX3.new({from: accounts[0]});
		const addressJydsDzY = "0x0000000000000000000000000000000000000001"
		const addressB1tWUlz = accounts[3]
		const addressYVtupgW = accounts[2]
		const uint256TyG0Tjr = await YRX3OfuWKN.balanceOf.call(addressJydsDzY, {from: accounts[1]});
		const addressTejpdci = await YRX3OfuWKN.setRewardDistribution.call(addressB1tWUlz, {from: accounts[0]});
//		const addressXHFiAYX = await YRX3OfuWKN.emergencyDrain.call(addressYVtupgW, {from: accounts[0]});

		assert.equal(uint256TyG0Tjr, BigInt("0"))
		await expect(YRX3OfuWKN.emergencyDrain.call(addressYVtupgW, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3MjfMupw = await YRX3.new({from: accounts[2]});
		const addressGQETddk = accounts[1]
		const uintA7Ki48O = BigInt("1677")
//		await YRX3MjfMupw.getReward.call({from: accounts[5]});
//		const addressXCML50Y = await YRX3MjfMupw.transferOwnership.call(addressGQETddk, {from: accounts[3]});
//		const uint256v5tyuV = await YRX3MjfMupw.stake.call(uintA7Ki48O, {from: "0x0000000000000000000000000000000000000001"});

		await expect(YRX3MjfMupw.getReward.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});
})