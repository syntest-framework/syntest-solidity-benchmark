const JGNRewards = artifacts.require("JGNRewards");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('JGNRewards', (accounts) => {
	it('test for JGNRewards', async () => {
		const JGNRewardsI2PUExm = await JGNRewards.new({from: accounts[3]});
		const addressMLWC8zs = accounts[1]
		const addressWjRREg4 = accounts[2]
		const uint256GQzyiSs = await JGNRewardsI2PUExm.lastTimeRewardApplicable.call({from: accounts[3]});
		const uint256TqWjdS0 = await JGNRewardsI2PUExm.balanceOf.call(addressMLWC8zs, {from: accounts[3]});
		const uint256j1fWSHD = await JGNRewardsI2PUExm.lastTimeRewardApplicable.call({from: accounts[0]});
		const uint256lS0oBhB = await JGNRewardsI2PUExm.balanceOf.call(addressWjRREg4, {from: accounts[2]});

		assert.equal(uint256GQzyiSs, BigInt("0"))
		assert.equal(uint256TqWjdS0, BigInt("0"))
		assert.equal(uint256j1fWSHD, BigInt("0"))
		assert.equal(uint256lS0oBhB, BigInt("0"))
	});

	it('test for JGNRewards', async () => {
		const JGNRewardsHBoD8rG = await JGNRewards.new({from: accounts[3]});
		const addressm6kONaF = accounts[0]
		await JGNRewardsHBoD8rG.exit.call({from: accounts[4]});
		const addressN3yIB0u = await JGNRewardsHBoD8rG.updateReward.call(addressm6kONaF, {from: accounts[2]});

		await expect(JGNRewardsHBoD8rG.exit.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for JGNRewards', async () => {
		const JGNRewardsaPQXvLZ = await JGNRewards.new({from: accounts[2]});
		const uintMl9DNGG = BigInt("1445")
		const uintWGzRkQp = BigInt("866")
		const addressukNaFgy = "0x0000000000000000000000000000000000000001"
		await JGNRewardsaPQXvLZ.getReward.call({from: accounts[3]});
		const uint256JVjFJtH = await JGNRewardsaPQXvLZ.withdraw.call(uintMl9DNGG, {from: accounts[0]});
		await JGNRewardsaPQXvLZ.exit.call({from: accounts[1]});
		const uint256aJ3CULP = await JGNRewardsaPQXvLZ.stake.call(uintWGzRkQp, {from: accounts[4]});
		const uint256fxzcFHU = await JGNRewardsaPQXvLZ.balanceOf.call(addressukNaFgy, {from: accounts[5]});

		await expect(JGNRewardsaPQXvLZ.getReward.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for JGNRewards', async () => {
		const JGNRewardsN9ABzj = await JGNRewards.new({from: accounts[2]});
		const addressAFKPhon = accounts[3]
		const uintDjM4jBn = BigInt("541")
		const uintCeiHVVt = BigInt("112")
		const addressEwqAofc = await JGNRewardsN9ABzj.updateReward.call(addressAFKPhon, {from: accounts[1]});
		const uint256S0QOBME = await JGNRewardsN9ABzj.withdraw.call(uintDjM4jBn, {from: accounts[1]});
		const uint256Aw39Xmf = await JGNRewardsN9ABzj.withdraw.call(uintCeiHVVt, {from: accounts[2]});

		await expect(JGNRewardsN9ABzj.updateReward.call(addressAFKPhon, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for JGNRewards', async () => {
		const JGNRewardsPcfaKlT = await JGNRewards.new({from: accounts[2]});
		const addresslRvBG4T = accounts[2]
		const uintUVUqBCe = BigInt("293")
		await JGNRewardsPcfaKlT.getReward.call({from: accounts[2]});
		const uint256SBlnOnD = await JGNRewardsPcfaKlT.earned.call(addresslRvBG4T, {from: accounts[1]});
		await JGNRewardsPcfaKlT.getReward.call({from: accounts[4]});
		const uint256URzHovW = await JGNRewardsPcfaKlT.stake.call(uintUVUqBCe, {from: accounts[2]});

		await expect(JGNRewardsPcfaKlT.getReward.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for JGNRewards', async () => {
		const JGNRewardsjp3q8Dq = await JGNRewards.new({from: accounts[0]});
		const uintQrmiUAD = BigInt("902")
		await JGNRewardsjp3q8Dq.getReward.call({from: accounts[3]});
		const uint256oMksMqm = await JGNRewardsjp3q8Dq.notifyRewardAmount.call(uintQrmiUAD, {from: accounts[2]});
		await JGNRewardsjp3q8Dq.exit.call({from: accounts[2]});

		await expect(JGNRewardsjp3q8Dq.getReward.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for JGNRewards', async () => {
		const JGNRewardsUV4NnrE = await JGNRewards.new({from: "0x0000000000000000000000000000000000000001"});
		const uintcqEi9Qq = BigInt("1250")
		const uintxANQjro = BigInt("113")
		const uint256IwNd9EZ = await JGNRewardsUV4NnrE.withdraw.call(uintcqEi9Qq, {from: accounts[2]});
		await JGNRewardsUV4NnrE.checkStart.call({from: accounts[4]});
		const uint256FI7DeD = await JGNRewardsUV4NnrE.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256ApvLkZX = await JGNRewardsUV4NnrE.withdraw.call(uintxANQjro, {from: accounts[2]});
		await JGNRewardsUV4NnrE.getReward.call({from: "0x0000000000000000000000000000000000000001"});
		await JGNRewardsUV4NnrE.getReward.call({from: accounts[4]});
	});
})