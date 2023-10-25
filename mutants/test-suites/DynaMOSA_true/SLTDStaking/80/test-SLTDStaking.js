const SLTDStaking = artifacts.require("SLTDStaking");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('SLTDStaking', (accounts) => {
	it('test for SLTDStaking', async () => {
		const SLTDStakingfQ1CR98 = await SLTDStaking.new({from: accounts[4]});
		const addressrSaQMSq = accounts[1]
		const addressiQSlI8S = accounts[1]
//		await SLTDStakingfQ1CR98.onlyOwner.call({from: accounts[0]});
//		const uint256fdoMqyE = await SLTDStakingfQ1CR98.totalSupply.call({from: accounts[0]});
//		const addressTcfXSfM = await SLTDStakingfQ1CR98.setRewardDistribution.call(addressrSaQMSq, {from: accounts[0]});
//		const addressw1jifmT = await SLTDStakingfQ1CR98.setRewardDistribution.call(addressiQSlI8S, {from: accounts[3]});
//		const uint256XILOh7 = await SLTDStakingfQ1CR98.rewardPerToken.call({from: accounts[2]});
//		await SLTDStakingfQ1CR98.onlyRewardDistribution.call({from: accounts[1]});

		await expect(SLTDStakingfQ1CR98.onlyOwner.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingd4cYuNf = await SLTDStaking.new({from: accounts[5]});
		const uintAvKMi6v = BigInt("810")
		const addressi75apJ7 = accounts[1]
		const addressYSgh2Eq = accounts[5]
//		const uint256lt63cz2 = await SLTDStakingd4cYuNf.stake.call(uintAvKMi6v, {from: accounts[5]});
//		const addressbm3BSKf = await SLTDStakingd4cYuNf.updateReward.call(addressi75apJ7, {from: accounts[2]});
//		const addresstt5I47L = await SLTDStakingd4cYuNf.transferOwnership.call(addressYSgh2Eq, {from: accounts[1]});

		await expect(SLTDStakingd4cYuNf.stake.call(uintAvKMi6v, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingnLsfIgV = await SLTDStaking.new({from: accounts[2]});
		const uintKB4Z37 = BigInt("1788")
		const uintu2fIOET = BigInt("934")
//		const uint256rPy54AJ = await SLTDStakingnLsfIgV.withdraw.call(uintKB4Z37, {from: accounts[4]});
//		const uint256s2NYXmc = await SLTDStakingnLsfIgV.notifyRewardAmount.call(uintu2fIOET, {from: accounts[1]});
//		const boolIVIrfKT = await SLTDStakingnLsfIgV.isOwner.call({from: accounts[3]});

		await expect(SLTDStakingnLsfIgV.withdraw.call(uintKB4Z37, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingQX6hiKj = await SLTDStaking.new({from: "0x0000000000000000000000000000000000000001"});
		const addressG04RbLL = accounts[2]
		await SLTDStakingQX6hiKj.onlyOwner.call({from: accounts[5]});
		await SLTDStakingQX6hiKj.renounceOwnership.call({from: accounts[4]});
		const uint256KoQtnJv = await SLTDStakingQX6hiKj.earned.call(addressG04RbLL, {from: accounts[0]});
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingctQ8KZ = await SLTDStaking.new({from: accounts[5]});
		const address7rh8mh = accounts[0]
		const addressTXH7h1R = accounts[2]
		const addressFpsheBs = accounts[5]
		const addressya6Acu = accounts[1]
		const addresslpVX0VO = accounts[0]
		const addressDZVkwWg = accounts[1]
		const addressETDkwFp = accounts[3]
//		const addressNMZdpCN = await SLTDStakingctQ8KZ.transferOwnership.call(address7rh8mh, {from: accounts[0]});
//		const addressJBuM6TP = await SLTDStakingctQ8KZ.setSLTD.call(addressFpsheBs, addressTXH7h1R, {from: accounts[4]});
//		const addresswRL84x = await SLTDStakingctQ8KZ.setSLTD.call(addresslpVX0VO, addressya6Acu, {from: accounts[1]});
//		const addressbZAQAMg = await SLTDStakingctQ8KZ.setSLTD.call(addressETDkwFp, addressDZVkwWg, {from: accounts[1]});
//		await SLTDStakingctQ8KZ.onlyOwner.call({from: accounts[3]});
//		await SLTDStakingctQ8KZ.getReward.call({from: accounts[0]});

		await expect(SLTDStakingctQ8KZ.transferOwnership.call(address7rh8mh, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingijnFFxs = await SLTDStaking.new({from: accounts[3]});
		const addresstFyhkkV = accounts[0]
		const addressCzlQmPq = "0x0000000000000000000000000000000000000001"
		const uintdp2jFcn = BigInt("192")
		const addressNATxpqV = accounts[2]
		const uinthdKLVn = BigInt("623")
		const uint256z08QZ8x = await SLTDStakingijnFFxs.earned.call(addresstFyhkkV, {from: accounts[2]});
//		await SLTDStakingijnFFxs.renounceOwnership.call({from: accounts[3]});
//		const uint256tH9PVZH = await SLTDStakingijnFFxs.earned.call(addressCzlQmPq, {from: accounts[3]});
//		const uint256d0T2cDS = await SLTDStakingijnFFxs.lastTimeRewardApplicable.call({from: accounts[2]});
//		const uint256izYqfHQ = await SLTDStakingijnFFxs.notifyRewardAmount.call(uintdp2jFcn, {from: accounts[2]});
//		const uint25676WFcD = await SLTDStakingijnFFxs.earned.call(addressNATxpqV, {from: accounts[3]});
//		const uint256rYwJ5UK = await SLTDStakingijnFFxs.withdraw.call(uinthdKLVn, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256z08QZ8x, BigInt("0"))
		await expect(SLTDStakingijnFFxs.renounceOwnership.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingijnFFxs = await SLTDStaking.new({from: accounts[3]});
		const addresssm47xbO = accounts[0]
		const addressMLKT3vY = "0x0000000000000000000000000000000000000001"
		const addressVyIMgdO = accounts[2]
		const uintr7sCM4j = BigInt("623")
		const uint256z08QZ8x = await SLTDStakingijnFFxs.earned.call(addresssm47xbO, {from: accounts[2]});
		const uint256tH9PVZH = await SLTDStakingijnFFxs.earned.call(addressMLKT3vY, {from: accounts[3]});
		const uint256d0T2cDS = await SLTDStakingijnFFxs.lastTimeRewardApplicable.call({from: accounts[2]});
		const uint25676WFcD = await SLTDStakingijnFFxs.earned.call(addressVyIMgdO, {from: accounts[3]});
//		await SLTDStakingijnFFxs.exit.call({from: accounts[3]});
//		const uint256rYwJ5UK = await SLTDStakingijnFFxs.withdraw.call(uintr7sCM4j, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint25676WFcD, BigInt("0"))
		assert.equal(uint256d0T2cDS, BigInt("0"))
		assert.equal(uint256tH9PVZH, BigInt("0"))
		assert.equal(uint256z08QZ8x, BigInt("0"))
		await expect(SLTDStakingijnFFxs.exit.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingsUJ3Buh = await SLTDStaking.new({from: accounts[2]});
		const addressg4HKQPd = accounts[0]
		const uintmDu4xs1 = BigInt("399")
		const addressn6kkVOg = accounts[6]
		const addressvwmnJGg = accounts[3]
		const addressMuxLYXa = await SLTDStakingsUJ3Buh.transferOwnership.call(addressg4HKQPd, {from: accounts[2]});
//		const uint256SXGQlOI = await SLTDStakingsUJ3Buh.stake.call(uintmDu4xs1, {from: accounts[1]});
//		const addressgjaOISf = await SLTDStakingsUJ3Buh.updateReward.call(addressn6kkVOg, {from: "0x0000000000000000000000000000000000000001"});
//		const addresssibpN74 = await SLTDStakingsUJ3Buh.updateReward.call(addressvwmnJGg, {from: accounts[4]});

		await expect(SLTDStakingsUJ3Buh.stake.call(uintmDu4xs1, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingsUJ3Buh = await SLTDStaking.new({from: accounts[2]});
		const uinteH3Jqk = BigInt("399")
		const addressCzrAD4j = accounts[6]
//		await SLTDStakingsUJ3Buh.getReward.call({from: accounts[4]});
//		const uint256SXGQlOI = await SLTDStakingsUJ3Buh.stake.call(uinteH3Jqk, {from: accounts[1]});
//		const addressgjaOISf = await SLTDStakingsUJ3Buh.updateReward.call(addressCzrAD4j, {from: "0x0000000000000000000000000000000000000001"});

		await expect(SLTDStakingsUJ3Buh.getReward.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingsUJ3Buh = await SLTDStaking.new({from: accounts[2]});
		const uintiEqWFMy = BigInt("411")
		const addressSKAFVhG = await SLTDStakingsUJ3Buh.owner.call({from: accounts[4]});
//		await SLTDStakingsUJ3Buh.getReward.call({from: accounts[4]});
//		const uint256SXGQlOI = await SLTDStakingsUJ3Buh.stake.call(uintiEqWFMy, {from: accounts[1]});
//		const booljWWPNYs = await SLTDStakingsUJ3Buh.isOwner.call({from: accounts[3]});
//		await SLTDStakingsUJ3Buh.onlyOwner.call({from: accounts[1]});
//		const uint256oBim6wd = await SLTDStakingsUJ3Buh.rewardPerToken.call({from: accounts[2]});
//		await SLTDStakingsUJ3Buh.renounceOwnership.call({from: accounts[0]});

		assert.equal(addressSKAFVhG, 0xAdEabD0d438E34e63AaC8ccae674f449CEeaFd99)
		await expect(SLTDStakingsUJ3Buh.getReward.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingsUJ3Buh = await SLTDStaking.new({from: accounts[2]});
		const addressuBfiN5a = accounts[1]
//		await SLTDStakingsUJ3Buh.getReward.call({from: accounts[4]});
//		const addressPLbTFc = await SLTDStakingsUJ3Buh.setRewardDistribution.call(addressuBfiN5a, {from: accounts[2]});

		await expect(SLTDStakingsUJ3Buh.getReward.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});
})