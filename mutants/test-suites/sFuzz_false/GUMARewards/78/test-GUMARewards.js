const GUMARewards = artifacts.require("GUMARewards");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('GUMARewards', (accounts) => {
	it('test for GUMARewards', async () => {
		const GUMARewardsIcJu4cd = await GUMARewards.new({from: accounts[3]});
		const addressGGkqQzl = accounts[1]
		const addressnJwKN8x = accounts[3]
		const addressnTngPTm = accounts[0]
		const addressS5RlwVe = accounts[1]
//		await GUMARewardsIcJu4cd.onlyOwner.call({from: accounts[0]});
//		const addressUmmkf6Y = await GUMARewardsIcJu4cd.updateReward.call(addressGGkqQzl, {from: accounts[2]});
//		const addressCDezC78 = await GUMARewardsIcJu4cd.transferOwnership.call(addressnJwKN8x, {from: accounts[4]});
//		const addressleBGDbW = await GUMARewardsIcJu4cd.setGUMA.call(addressS5RlwVe, addressnTngPTm, {from: accounts[1]});

		await expect(GUMARewardsIcJu4cd.onlyOwner.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsiNqokXd = await GUMARewards.new({from: accounts[1]});
		const uintrpbwIeW = BigInt("1160")
		const addressGywEPc5 = accounts[0]
		const addresspcZzbrg = accounts[2]
		const addressYsqk9uE = accounts[1]
//		const uint256a2znmKa = await GUMARewardsiNqokXd.notifyRewardAmount.call(uintrpbwIeW, {from: accounts[2]});
//		const addressdQNikfU = await GUMARewardsiNqokXd.setRewardDistribution.call(addressGywEPc5, {from: accounts[3]});
//		const addressWCLyKA = await GUMARewardsiNqokXd.owner.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256pbxWs4 = await GUMARewardsiNqokXd.earned.call(addresspcZzbrg, {from: accounts[5]});
//		const addressv1IreGW = await GUMARewardsiNqokXd.transferOwnership.call(addressYsqk9uE, {from: accounts[4]});

		await expect(GUMARewardsiNqokXd.notifyRewardAmount.call(uintrpbwIeW, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsfY7px6E = await GUMARewards.new({from: accounts[3]});
		const uintNQrtNLQ = BigInt("695")
		const addressKisaDIM = accounts[0]
		const uintPN1TvmN = BigInt("1450")
		const addressM69NzpV = accounts[0]
//		const uint256XZsS9Kw = await GUMARewardsfY7px6E.stake.call(uintNQrtNLQ, {from: "0x0000000000000000000000000000000000000001"});
//		const addressiU2MiYJ = await GUMARewardsfY7px6E.setRewardDistribution.call(addressKisaDIM, {from: accounts[0]});
//		const uint256RYhERkA = await GUMARewardsfY7px6E.stake.call(uintPN1TvmN, {from: accounts[0]});
//		const uint256ashAoIs = await GUMARewardsfY7px6E.earned.call(addressM69NzpV, {from: accounts[2]});
//		const uint256crPuRDN = await GUMARewardsfY7px6E.totalSupply.call({from: accounts[1]});

		await expect(GUMARewardsfY7px6E.stake.call(uintNQrtNLQ, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsKMztoVC = await GUMARewards.new({from: "0x0000000000000000000000000000000000000001"});
		const uintgxTruY2 = BigInt("415")
		const addressKCjaKv0 = accounts[2]
		const uint256sFBJZXl = await GUMARewardsKMztoVC.stake.call(uintgxTruY2, {from: accounts[3]});
		const addressQA3tuAo = await GUMARewardsKMztoVC.updateReward.call(addressKCjaKv0, {from: accounts[2]});
		const boolDpU2cHx = await GUMARewardsKMztoVC.isOwner.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsnjqQLsd = await GUMARewards.new({from: accounts[4]});
		const addressH3Emte = accounts[4]
		const addressLbY3ocX = accounts[4]
		const addressv0FLfSJ = accounts[2]
		const addressjOPJXF = accounts[4]
		const uint256ow05nnA = await GUMARewardsnjqQLsd.balanceOf.call(addressH3Emte, {from: "0x0000000000000000000000000000000000000001"});
//		const addressPFx2T8 = await GUMARewardsnjqQLsd.setRewardDistribution.call(addressLbY3ocX, {from: accounts[0]});
//		const uint256pgMPpS = await GUMARewardsnjqQLsd.earned.call(addressv0FLfSJ, {from: accounts[0]});
//		const addressejfE0hO = await GUMARewardsnjqQLsd.updateReward.call(addressjOPJXF, {from: accounts[2]});

		assert.equal(uint256ow05nnA, BigInt("0"))
		await expect(GUMARewardsnjqQLsd.setRewardDistribution.call(addressLbY3ocX, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsBHhTOmS = await GUMARewards.new({from: accounts[2]});
		const addressHsWRFfB = "0x0000000000000000000000000000000000000001"
		const uint256F1siPfS = await GUMARewardsBHhTOmS.earned.call(addressHsWRFfB, {from: accounts[4]});
		const boolKyrd9OV = await GUMARewardsBHhTOmS.isOwner.call({from: accounts[1]});
		const addressL2IfjRp = await GUMARewardsBHhTOmS.owner.call({from: accounts[4]});

		assert.equal(addressL2IfjRp, 0xd8649Ab2c819369ad4422E75a86Ce0Ee0d34c10A)
		assert.equal(boolKyrd9OV, false)
		assert.equal(uint256F1siPfS, BigInt("0"))
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsBHhTOmS = await GUMARewards.new({from: accounts[2]});
		const addresslSWqpE = "0x0000000000000000000000000000000000000000"
		const uint256F1siPfS = await GUMARewardsBHhTOmS.earned.call(addresslSWqpE, {from: accounts[4]});
//		await GUMARewardsBHhTOmS.getReward.call({from: accounts[4]});

		assert.equal(uint256F1siPfS, BigInt("0"))
		await expect(GUMARewardsBHhTOmS.getReward.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardstUANtlQ = await GUMARewards.new({from: accounts[4]});
		const addressYS0uU9h = accounts[5]
		const addressTqEiBBv = accounts[5]
		const addressVmyW4Zd = accounts[4]
		const addressri4kgzP = await GUMARewardstUANtlQ.setRewardDistribution.call(addressYS0uU9h, {from: accounts[4]});
		const boolcuoS4vU = await GUMARewardstUANtlQ.isOwner.call({from: accounts[0]});
		const uint256QGe36U = await GUMARewardstUANtlQ.earned.call(addressTqEiBBv, {from: accounts[1]});
//		const addressiGssRZ5 = await GUMARewardstUANtlQ.transferOwnership.call(addressVmyW4Zd, {from: accounts[2]});
//		const uint256CNoA5XL = await GUMARewardstUANtlQ.rewardPerToken.call({from: accounts[0]});
//		const uint256oe9j91 = await GUMARewardstUANtlQ.rewardPerToken.call({from: accounts[0]});

		assert.equal(boolcuoS4vU, false)
		assert.equal(uint256QGe36U, BigInt("0"))
		await expect(GUMARewardstUANtlQ.transferOwnership.call(addressVmyW4Zd, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsdXbF9av = await GUMARewards.new({from: accounts[4]});
		const addressAcmWYqz = accounts[0]
		const addresstUS4zS = accounts[0]
		const addressaPrlqlG = accounts[3]
		const addressSUw5Bkp = accounts[1]
		const uint256qGXeYp3 = await GUMARewardsdXbF9av.earned.call(addressAcmWYqz, {from: accounts[1]});
		const uint256NS5dayz = await GUMARewardsdXbF9av.balanceOf.call(addresstUS4zS, {from: accounts[0]});
		const addressGlEKqgy = await GUMARewardsdXbF9av.transferOwnership.call(addressaPrlqlG, {from: accounts[4]});
		const uint256h7TCWK = await GUMARewardsdXbF9av.earned.call(addressSUw5Bkp, {from: accounts[0]});

		assert.equal(uint256NS5dayz, BigInt("0"))
		assert.equal(uint256h7TCWK, BigInt("0"))
		assert.equal(uint256qGXeYp3, BigInt("0"))
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsBHhTOmS = await GUMARewards.new({from: accounts[2]});
		const addressKTNHtit = "0x0000000000000000000000000000000000000000"
		const addressT06GvUR = accounts[0]
//		await GUMARewardsBHhTOmS.renounceOwnership.call({from: accounts[2]});
//		const uint256F1siPfS = await GUMARewardsBHhTOmS.earned.call(addressKTNHtit, {from: accounts[4]});
//		const uint256KsW48di = await GUMARewardsBHhTOmS.balanceOf.call(addressT06GvUR, {from: accounts[3]});

		await expect(GUMARewardsBHhTOmS.renounceOwnership.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});
})