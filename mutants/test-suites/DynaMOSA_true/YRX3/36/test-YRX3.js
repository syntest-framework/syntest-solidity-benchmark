const YRX3 = artifacts.require("YRX3");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('YRX3', (accounts) => {
	it('test for YRX3', async () => {
		const YRX3wmjR8YP = await YRX3.new({from: "0x0000000000000000000000000000000000000001"});
		const addressfUvce7 = accounts[2]
		const uintjNDZd5U = BigInt("542")
		const uint256ipC9BBr = await YRX3wmjR8YP.rewardPerToken.call({from: accounts[4]});
		const addresspzn6Gxe = await YRX3wmjR8YP.toPayable.call(addressfUvce7, {from: accounts[4]});
		const uint256rVebyR6 = await YRX3wmjR8YP.withdraw.call(uintjNDZd5U, {from: accounts[1]});
	});

	it('test for YRX3', async () => {
		const YRX3hPbb1MI = await YRX3.new({from: accounts[3]});
		const addressdKCvVx = accounts[4]
		const addresszy1VK7y = accounts[1]
		const addressDVWusSX = accounts[5]
//		const addressNFoDZHQ = await YRX3hPbb1MI.toPayable.call(addressdKCvVx, {from: accounts[1]});
//		const addressauGYq0H = await YRX3hPbb1MI.toPayable.call(addresszy1VK7y, {from: accounts[1]});
//		const uint256bsKCgLN = await YRX3hPbb1MI.earned.call(addressDVWusSX, {from: accounts[1]});
//		const uint256HZu5COM = await YRX3hPbb1MI.totalSupply.call({from: accounts[0]});

		await expect(YRX3hPbb1MI.toPayable.call(addressdKCvVx, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3RkWOu3Q = await YRX3.new({from: accounts[4]});
		const uint31MYEa = BigInt("317")
		const addressD757L41 = await YRX3RkWOu3Q.owner.call({from: accounts[2]});
//		await YRX3RkWOu3Q.onlyOwner.call({from: accounts[1]});
//		const boolfbp0xmo = await YRX3RkWOu3Q.isOwner.call({from: accounts[1]});
//		const uint256Rc9r0B7 = await YRX3RkWOu3Q.stake.call(uint31MYEa, {from: accounts[5]});

		assert.equal(addressD757L41, 0x848D1C36c778ACf06f5Bb68d312D59D13fd09bd4)
		await expect(YRX3RkWOu3Q.onlyOwner.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3ZgG4uc = await YRX3.new({from: accounts[3]});
		const uintgbu3B5g = BigInt("602")
		const addressy5IOmbJ = accounts[3]
		const addressp928EI4 = accounts[2]
//		const uint256SvFLIq7 = await YRX3ZgG4uc.stake.call(uintgbu3B5g, {from: accounts[3]});
//		const addressneWe7Y = await YRX3ZgG4uc.toPayable.call(addressy5IOmbJ, {from: accounts[2]});
//		await YRX3ZgG4uc.getReward.call({from: accounts[2]});
//		const addressWIXa4rn = await YRX3ZgG4uc.updateReward.call(addressp928EI4, {from: accounts[0]});

		await expect(YRX3ZgG4uc.stake.call(uintgbu3B5g, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3am6JkZL = await YRX3.new({from: accounts[1]});
		const addressZf6iGya = accounts[1]
		const address0JTT26 = accounts[4]
//		await YRX3am6JkZL.renounceOwnership.call({from: accounts[5]});
//		const addressf3jcGsR = await YRX3am6JkZL.toPayable.call(addressZf6iGya, {from: accounts[4]});
//		const uint256EwL3awB = await YRX3am6JkZL.lastTimeRewardApplicable.call({from: accounts[2]});
//		const uint25691Ue57 = await YRX3am6JkZL.totalSupply.call({from: accounts[3]});
//		await YRX3am6JkZL.notifyRewardAmount.call({from: accounts[4]});
//		const addressZW0DxQe = await YRX3am6JkZL.setRewardDistribution.call(address0JTT26, {from: accounts[3]});

		await expect(YRX3am6JkZL.renounceOwnership.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3nWuVvDo = await YRX3.new({from: accounts[2]});
		const uintKVpQHD = BigInt("1994")
		const uintdtgzzRq = BigInt("1388")
		const uintSZJLE8W = BigInt("1618")
		const uintTd049T2 = BigInt("584")
//		const uint256iRLEDjW = await YRX3nWuVvDo.withdraw.call(uintKVpQHD, {from: accounts[0]});
//		const uint256Kab2mcS = await YRX3nWuVvDo.stake.call(uintdtgzzRq, {from: accounts[0]});
//		const uint256cSZqUrD = await YRX3nWuVvDo.stake.call(uintSZJLE8W, {from: accounts[4]});
//		const uint256etBx2Pl = await YRX3nWuVvDo.withdraw.call(uintTd049T2, {from: "0x0000000000000000000000000000000000000001"});

		await expect(YRX3nWuVvDo.withdraw.call(uintKVpQHD, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3TdOSGu7 = await YRX3.new({from: accounts[5]});
		const addressk572YO = accounts[3]
		const addressvZQld2x = accounts[5]
		const uint256haNWrD = await YRX3TdOSGu7.earned.call(addressk572YO, {from: accounts[3]});
		const addressqzUZIgF = await YRX3TdOSGu7.owner.call({from: accounts[1]});
//		const addressDkXRG2o = await YRX3TdOSGu7.emergencyDrain.call(addressvZQld2x, {from: accounts[4]});

		assert.equal(addressqzUZIgF, 0xC1F06cC14CC2F79d0A74266fF67749ed1eB735D7)
		assert.equal(uint256haNWrD, BigInt("0"))
		await expect(YRX3TdOSGu7.emergencyDrain.call(addressvZQld2x, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3TdOSGu7 = await YRX3.new({from: accounts[5]});
//		await YRX3TdOSGu7.exit.call({from: accounts[3]});
//		const addressqzUZIgF = await YRX3TdOSGu7.owner.call({from: accounts[1]});

		await expect(YRX3TdOSGu7.exit.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3ZgG4uc = await YRX3.new({from: accounts[3]});
		const uintrNu8JZ = BigInt("602")
		const addressPe8ckfd = accounts[4]
		const addressL46I7rV = accounts[3]
		const addressx80ksVM = accounts[4]
//		await YRX3ZgG4uc.getReward.call({from: accounts[3]});
//		const uint256SvFLIq7 = await YRX3ZgG4uc.stake.call(uintrNu8JZ, {from: accounts[3]});
//		const addressDt6dfPf = await YRX3ZgG4uc.transferOwnership.call(addressPe8ckfd, {from: accounts[5]});
//		const addressneWe7Y = await YRX3ZgG4uc.toPayable.call(addressL46I7rV, {from: accounts[2]});
//		await YRX3ZgG4uc.getReward.call({from: accounts[2]});
//		const addressWIXa4rn = await YRX3ZgG4uc.updateReward.call(addressx80ksVM, {from: accounts[0]});
//		await YRX3ZgG4uc.renounceOwnership.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(YRX3ZgG4uc.getReward.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3Y1CjNzb = await YRX3.new({from: accounts[0]});
		const addressAdGi0k = accounts[2]
		const addressicWPGs = await YRX3Y1CjNzb.transferOwnership.call(addressAdGi0k, {from: accounts[0]});
//		await YRX3Y1CjNzb.renounceOwnership.call({from: accounts[4]});

		await expect(YRX3Y1CjNzb.renounceOwnership.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3ZgG4uc = await YRX3.new({from: accounts[3]});
		const addresspbclV0j = accounts[0]
//		await YRX3ZgG4uc.getReward.call({from: accounts[3]});
//		const uint256lzjVbfq = await YRX3ZgG4uc.earned.call(addresspbclV0j, {from: accounts[1]});
//		await YRX3ZgG4uc.renounceOwnership.call({from: accounts[3]});

		await expect(YRX3ZgG4uc.getReward.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3ZgG4uc = await YRX3.new({from: accounts[3]});
		const addressFGV5OGj = accounts[0]
		const uintgcHHdQ = BigInt("602")
		const addressd9A1ikc = accounts[4]
		const addresszff6HyC = accounts[4]
//		await YRX3ZgG4uc.getReward.call({from: accounts[3]});
//		const uint256Hh0mK68 = await YRX3ZgG4uc.lastTimeRewardApplicable.call({from: accounts[0]});
//		const addresskNW61cf = await YRX3ZgG4uc.setRewardDistribution.call(addressFGV5OGj, {from: accounts[3]});
//		await YRX3ZgG4uc.notifyRewardAmount.call({from: accounts[1]});
//		const uint256SvFLIq7 = await YRX3ZgG4uc.stake.call(uintgcHHdQ, {from: accounts[3]});
//		const addressDt6dfPf = await YRX3ZgG4uc.transferOwnership.call(addressd9A1ikc, {from: accounts[5]});
//		const addressWIXa4rn = await YRX3ZgG4uc.updateReward.call(addresszff6HyC, {from: accounts[0]});

		await expect(YRX3ZgG4uc.getReward.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});
})