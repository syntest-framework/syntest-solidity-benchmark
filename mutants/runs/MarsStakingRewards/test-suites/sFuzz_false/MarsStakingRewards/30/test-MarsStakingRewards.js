const MarsStakingRewards = artifacts.require("MarsStakingRewards");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MarsStakingRewards', (accounts) => {
	it('test for MarsStakingRewards', async () => {
		const addressKHeViqQ = accounts[4]
		const addresso9WXf6P = accounts[4]
		const addressh7cqWzj = accounts[1]
		const MarsStakingRewardsIY5jn7r = await MarsStakingRewards.new(addressKHeViqQ, addresso9WXf6P, addressh7cqWzj, {from: accounts[2]});
		await MarsStakingRewardsIY5jn7r.nonReentrant.call({from: "0x0000000000000000000000000000000000000001"});
		await MarsStakingRewardsIY5jn7r.nonReentrant.call({from: accounts[4]});

		await expect(MarsStakingRewardsIY5jn7r.nonReentrant.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressME1CRhJ = accounts[0]
		const addresskQ50PuI = accounts[5]
		const addressqvGyGwk = accounts[4]
		const MarsStakingRewardsIXerqD = await MarsStakingRewards.new(addressME1CRhJ, addresskQ50PuI, addressqvGyGwk, {from: accounts[0]});
		const uintFFo6MLk = BigInt("4")
		const uintAvhZi1T = BigInt("440")
		const uintVFQOJm = BigInt("1053")
		const addressaBHcFFm = accounts[5]
		const addressUzdOWny = accounts[0]
		const uint256EWEokqp = await MarsStakingRewardsIXerqD.withdraw.call(uintFFo6MLk, {from: accounts[2]});
		const uint256Ekrd1M3 = await MarsStakingRewardsIXerqD.notifyRewardAmount.call(uintVFQOJm, uintAvhZi1T, {from: accounts[3]});
		const addressYI0c3ki = await MarsStakingRewardsIXerqD.transferOwnership.call(addressaBHcFFm, {from: accounts[2]});
		await MarsStakingRewardsIXerqD.renounceOwnership.call({from: accounts[1]});
		const uint256N9hKWrC = await MarsStakingRewardsIXerqD.balanceOf.call(addressUzdOWny, {from: accounts[4]});

		await expect(MarsStakingRewardsIXerqD.withdraw.call(uintFFo6MLk, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressGaSBeRi = accounts[2]
		const addressWA5FuDF = "0x0000000000000000000000000000000000000001"
		const addressogFiIW1 = accounts[0]
		const MarsStakingRewardsKVpgfd = await MarsStakingRewards.new(addressGaSBeRi, addressWA5FuDF, addressogFiIW1, {from: accounts[4]});
		const addressA8oWeiZ = accounts[1]
		const addressHxUdMfu = accounts[1]
		const uint256fP8aJPi = await MarsStakingRewardsKVpgfd.totalSupply.call({from: accounts[3]});
		await MarsStakingRewardsKVpgfd.exit.call({from: accounts[4]});
		const uint256hXkGWO4 = await MarsStakingRewardsKVpgfd.earned.call(addressA8oWeiZ, {from: accounts[2]});
		const uint256IiZo6rQ = await MarsStakingRewardsKVpgfd.earned.call(addressHxUdMfu, {from: accounts[3]});

		assert.equal(uint256fP8aJPi, BigInt("0"))
		await expect(MarsStakingRewardsKVpgfd.exit.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressIm3gOC0 = accounts[3]
		const addressAqtTy7k = accounts[1]
		const addressrucH0v = accounts[3]
		const MarsStakingRewardsw5VVv1F = await MarsStakingRewards.new(addressIm3gOC0, addressAqtTy7k, addressrucH0v, {from: accounts[0]});
		await MarsStakingRewardsw5VVv1F.renounceOwnership.call({from: accounts[0]});
		const boolllADLl9 = await MarsStakingRewardsw5VVv1F.isOwner.call({from: accounts[4]});
		const boolskKZXbF = await MarsStakingRewardsw5VVv1F.isOwner.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(MarsStakingRewardsw5VVv1F.renounceOwnership.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressniOjECD = accounts[0]
		const addressmJNq1a = accounts[5]
		const addressLQvysi2 = accounts[1]
		const MarsStakingRewardsVWmU0gA = await MarsStakingRewards.new(addressniOjECD, addressmJNq1a, addressLQvysi2, {from: accounts[3]});
		const addressbhy1Yg7 = accounts[3]
		const addressK2C5L0f = "0x0000000000000000000000000000000000000001"
		const uint1GzIEy = BigInt("1647")
		const uint256heCzCJN = await MarsStakingRewardsVWmU0gA.earned.call(addressbhy1Yg7, {from: accounts[1]});
		const uint256VeyGbTM = await MarsStakingRewardsVWmU0gA.earned.call(addressK2C5L0f, {from: accounts[2]});
		await MarsStakingRewardsVWmU0gA.getReward.call({from: accounts[3]});
		await MarsStakingRewardsVWmU0gA.nonReentrant.call({from: accounts[0]});
		const uint256MhX3hHB = await MarsStakingRewardsVWmU0gA.withdraw.call(uint1GzIEy, {from: accounts[1]});
		const uint256i0kd67W = await MarsStakingRewardsVWmU0gA.rewardPerToken.call({from: accounts[4]});

		assert.equal(uint256VeyGbTM, BigInt("0"))
		assert.equal(uint256heCzCJN, BigInt("0"))
		await expect(MarsStakingRewardsVWmU0gA.getReward.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressoL2mv02 = accounts[4]
		const addressFEC8Hvd = accounts[2]
		const addressZUodJVT = accounts[3]
		const MarsStakingRewardsiZdXVUs = await MarsStakingRewards.new(addressoL2mv02, addressFEC8Hvd, addressZUodJVT, {from: accounts[2]});
		const uintAsdVVPE = BigInt("1565")
		const addressEaTs6c = accounts[0]
		const addressX2n2won = await MarsStakingRewardsiZdXVUs.inCaseTokensGetStuck.call(addressEaTs6c, uintAsdVVPE, {from: accounts[2]});
		await MarsStakingRewardsiZdXVUs.exit.call({from: accounts[2]});
		await MarsStakingRewardsiZdXVUs.renounceOwnership.call({from: accounts[1]});

		await expect(MarsStakingRewardsiZdXVUs.inCaseTokensGetStuck.call(addressEaTs6c, uintAsdVVPE, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressf6BaWo0 = accounts[1]
		const addressYuV8fPn = accounts[1]
		const addressbeFk7R = accounts[2]
		const MarsStakingRewardsoLAyO6 = await MarsStakingRewards.new(addressf6BaWo0, addressYuV8fPn, addressbeFk7R, {from: accounts[2]});
		const uintVEBqbAZ = BigInt("718")
		const uintTXL4914 = BigInt("558")
		const addressv0jO0Zb = accounts[3]
		const uint256S8SPQZW = await MarsStakingRewardsoLAyO6.notifyRewardAmount.call(uintTXL4914, uintVEBqbAZ, {from: accounts[4]});
		const uint256Q4sNYVe = await MarsStakingRewardsoLAyO6.earned.call(addressv0jO0Zb, {from: accounts[3]});
		const boolbfmZaNt = await MarsStakingRewardsoLAyO6.isOwner.call({from: accounts[2]});

		await expect(MarsStakingRewardsoLAyO6.notifyRewardAmount.call(uintTXL4914, uintVEBqbAZ, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressBcUpgj = accounts[2]
		const addressvacKXpi = accounts[0]
		const addressXkKKjsy = accounts[5]
		const MarsStakingRewardsPzDaUt = await MarsStakingRewards.new(addressBcUpgj, addressvacKXpi, addressXkKKjsy, {from: accounts[4]});
		const addressqPHLeqW = accounts[4]
		const addressTYmWyFD = accounts[5]
		const uintAocR7Ln = BigInt("1936")
		const addressywPOG1n = accounts[0]
		const uintrFvFU8u = BigInt("1766")
		const uinterCaQQs = BigInt("2037")
		const uint93dsbc = BigInt("27")
		const uintoBGUAMM = BigInt("844")
		const uint256fqLdWrc = await MarsStakingRewardsPzDaUt.earned.call(addressqPHLeqW, {from: accounts[1]});
		const uint256tiIRCR1 = await MarsStakingRewardsPzDaUt.balanceOf.call(addressTYmWyFD, {from: accounts[3]});
		const uint256OljA185 = await MarsStakingRewardsPzDaUt.withdraw.call(uintAocR7Ln, {from: accounts[3]});
		const addressxR6hqHl = await MarsStakingRewardsPzDaUt.setRewardsDistribution.call(addressywPOG1n, {from: accounts[3]});
		const uint256Z57lNx7 = await MarsStakingRewardsPzDaUt.notifyRewardAmount.call(uinterCaQQs, uintrFvFU8u, {from: accounts[3]});
		const uint256cBxaExL = await MarsStakingRewardsPzDaUt.notifyRewardAmount.call(uintoBGUAMM, uint93dsbc, {from: accounts[2]});

		assert.equal(uint256fqLdWrc, BigInt("0"))
		assert.equal(uint256tiIRCR1, BigInt("0"))
		await expect(MarsStakingRewardsPzDaUt.withdraw.call(uintAocR7Ln, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressrg4QQ09 = "0x0000000000000000000000000000000000000001"
		const addressLSY9iZ = accounts[0]
		const addressYB5QpKj = accounts[1]
		const MarsStakingRewardsTGAfdnE = await MarsStakingRewards.new(addressrg4QQ09, addressLSY9iZ, addressYB5QpKj, {from: accounts[0]});
		const addressgk4hyfI = accounts[5]
		const addressDdJpA6p = accounts[4]
		const uintkxPxw2x = BigInt("738")
		const uint3GKYjr = BigInt("1887")
		const addressBFNgKrq = accounts[2]
		const addressR4luZ97 = await MarsStakingRewardsTGAfdnE.transferOwnership.call(addressgk4hyfI, {from: accounts[1]});
		const uint256DKXHev = await MarsStakingRewardsTGAfdnE.earned.call(addressDdJpA6p, {from: accounts[0]});
		const uint256DocMlHp = await MarsStakingRewardsTGAfdnE.stake.call(uintkxPxw2x, {from: accounts[1]});
		const uint256aFqTGtu = await MarsStakingRewardsTGAfdnE.lastTimeRewardApplicable.call({from: accounts[5]});
		const addressXvAMqoA = await MarsStakingRewardsTGAfdnE.inCaseTokensGetStuck.call(addressBFNgKrq, uint3GKYjr, {from: accounts[3]});

		await expect(MarsStakingRewardsTGAfdnE.transferOwnership.call(addressgk4hyfI, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addresspropiS1 = accounts[2]
		const addressRbjbMd8 = accounts[0]
		const addressqhP7Rit = accounts[5]
		const MarsStakingRewardsPzDaUt = await MarsStakingRewards.new(addresspropiS1, addressRbjbMd8, addressqhP7Rit, {from: accounts[4]});
		const addressJgBHTI8 = accounts[0]
		const uintkTsAwB = BigInt("1936")
		const uinttSbkcQ6 = BigInt("27")
		const uintH7fXqSn = BigInt("834")
		const uint256PMaNCWB = await MarsStakingRewardsPzDaUt.lastTimeRewardApplicable.call({from: accounts[4]});
		const uint256fqLdWrc = await MarsStakingRewardsPzDaUt.earned.call(addressJgBHTI8, {from: accounts[1]});
		const uint256OljA185 = await MarsStakingRewardsPzDaUt.withdraw.call(uintkTsAwB, {from: accounts[3]});
		const uint256cBxaExL = await MarsStakingRewardsPzDaUt.notifyRewardAmount.call(uintH7fXqSn, uinttSbkcQ6, {from: accounts[2]});

		assert.equal(uint256PMaNCWB, BigInt("0"))
		assert.equal(uint256fqLdWrc, BigInt("0"))
		await expect(MarsStakingRewardsPzDaUt.withdraw.call(uintkTsAwB, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressvt0dR6 = accounts[1]
		const addresslMwr9K = accounts[1]
		const addressP4o9rj8 = accounts[4]
		const MarsStakingRewards5CElnH = await MarsStakingRewards.new(addressvt0dR6, addresslMwr9K, addressP4o9rj8, {from: "0x0000000000000000000000000000000000000001"});
		const addressYxNbYeU = accounts[5]
		const uintE8Z5Hu = BigInt("1726")
		const uintY55WqTr = BigInt("527")
		const addressg6Rcogp = accounts[4]
		const uintOYH35Y = BigInt("491")
		const uintHsPcVn = BigInt("1719")
		const uint256X6bZfhq = await MarsStakingRewards5CElnH.earned.call(addressYxNbYeU, {from: accounts[2]});
		const uint256SQG0hf = await MarsStakingRewards5CElnH.stake.call(uintE8Z5Hu, {from: accounts[1]});
		const addressjgZ6acn = await MarsStakingRewards5CElnH.inCaseTokensGetStuck.call(addressg6Rcogp, uintY55WqTr, {from: "0x0000000000000000000000000000000000000001"});
		await MarsStakingRewards5CElnH.onlyOwner.call({from: accounts[2]});
		const uint256rx9Q02U = await MarsStakingRewards5CElnH.notifyRewardAmount.call(uintHsPcVn, uintOYH35Y, {from: accounts[3]});
	});

	it('test for MarsStakingRewards', async () => {
		const addressKV3C3fV = accounts[2]
		const addressLVvRwyo = accounts[0]
		const addressXEx831b = accounts[5]
		const MarsStakingRewardsPzDaUt = await MarsStakingRewards.new(addressKV3C3fV, addressLVvRwyo, addressXEx831b, {from: accounts[4]});
		const addresshmcNPDN = accounts[4]
		const bytegbfgms = "0x0e1c06011b06011a18031f09101f140519021f0f0e120a1906171c050d181709"
		const byteQCz5x7b = "0x0d021601010216010c0d0a0e0f181e120413040215151b1a0713081e060d0507"
		const uint15roa6 = BigInt("166")
		const uintYridF84 = BigInt("1084")
		const uintmIgkgY = BigInt("1374")
		const uintzPymDIX = BigInt("1891")
		const addressIXGw3X3 = accounts[2]
		const uintmB3Gg7r = BigInt("27")
		const uintSdn7R9V = BigInt("654")
		const uint256fqLdWrc = await MarsStakingRewardsPzDaUt.earned.call(addresshmcNPDN, {from: accounts[1]});
		const uint256g7IdzE7 = await MarsStakingRewardsPzDaUt.rewardPerToken.call({from: accounts[5]});
		const uint256ffxBKby = await MarsStakingRewardsPzDaUt.getRewardForDuration.call({from: accounts[1]});
		await MarsStakingRewardsPzDaUt.renounceOwnership.call({from: accounts[0]});
		const uint256BW7OOKU = await MarsStakingRewardsPzDaUt.stakeWithPermit.call(uintmIgkgY, uintYridF84, uint15roa6, byteQCz5x7b, bytegbfgms, {from: "0x0000000000000000000000000000000000000001"});
		const uint256OljA185 = await MarsStakingRewardsPzDaUt.withdraw.call(uintzPymDIX, {from: accounts[3]});
		const addressBzDYNK = await MarsStakingRewardsPzDaUt.transferOwnership.call(addressIXGw3X3, {from: accounts[1]});
		const uint256cBxaExL = await MarsStakingRewardsPzDaUt.notifyRewardAmount.call(uintSdn7R9V, uintmB3Gg7r, {from: accounts[2]});

		assert.equal(uint256ffxBKby, BigInt("0"))
		assert.equal(uint256fqLdWrc, BigInt("0"))
		assert.equal(uint256g7IdzE7, BigInt("0"))
		await expect(MarsStakingRewardsPzDaUt.renounceOwnership.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressDg9kSlt = accounts[2]
		const addressQVdBCTE = accounts[0]
		const addressXQgKLVo = accounts[5]
		const MarsStakingRewardsPzDaUt = await MarsStakingRewards.new(addressDg9kSlt, addressQVdBCTE, addressXQgKLVo, {from: accounts[4]});
		const addressRJ2HQxJ = accounts[0]
		const uintAPnu7qB = BigInt("27")
		const uintoXmXBU7 = BigInt("834")
		const uint256fqLdWrc = await MarsStakingRewardsPzDaUt.earned.call(addressRJ2HQxJ, {from: accounts[1]});
		const uint256cBxaExL = await MarsStakingRewardsPzDaUt.notifyRewardAmount.call(uintoXmXBU7, uintAPnu7qB, {from: accounts[2]});

		assert.equal(uint256fqLdWrc, BigInt("0"))
		await expect(MarsStakingRewardsPzDaUt.notifyRewardAmount.call(uintoXmXBU7, uintAPnu7qB, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressYDY8YLh = accounts[4]
		const addressveDrd5F = accounts[2]
		const addresst7InRR = accounts[3]
		const MarsStakingRewardsiZdXVUs = await MarsStakingRewards.new(addressYDY8YLh, addressveDrd5F, addresst7InRR, {from: accounts[2]});
		const addressAHuPfvp = accounts[5]
		const addressBgZRQKI = await MarsStakingRewardsiZdXVUs.transferOwnership.call(addressAHuPfvp, {from: accounts[2]});
		await MarsStakingRewardsiZdXVUs.exit.call({from: accounts[2]});

		await expect(MarsStakingRewardsiZdXVUs.exit.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressgaYOqL4 = accounts[3]
		const addressKKzqfJk = accounts[0]
		const addressfpwsaiX = accounts[1]
		const MarsStakingRewardsiaJnzVs = await MarsStakingRewards.new(addressgaYOqL4, addressKKzqfJk, addressfpwsaiX, {from: accounts[4]});
		const addressmflg6ZC = accounts[3]
		const uintvIes9o3 = BigInt("1056")
		const addressqsc7mB3 = await MarsStakingRewardsiaJnzVs.setRewardsDistribution.call(addressmflg6ZC, {from: accounts[4]});
		const uint256yHXGj8a = await MarsStakingRewardsiaJnzVs.totalSupply.call({from: accounts[0]});
		const uint256carbPY = await MarsStakingRewardsiaJnzVs.stake.call(uintvIes9o3, {from: accounts[3]});
		await MarsStakingRewardsiaJnzVs.nonReentrant.call({from: accounts[1]});
		const uint256SioojuH = await MarsStakingRewardsiaJnzVs.rewardPerToken.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256yHXGj8a, BigInt("0"))
		await expect(MarsStakingRewardsiaJnzVs.stake.call(uintvIes9o3, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})