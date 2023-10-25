const YRX3 = artifacts.require("YRX3");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('YRX3', (accounts) => {
	it('test for YRX3', async () => {
		const YRX3UjgdHsd = await YRX3.new({from: accounts[1]});
		const addressD7IP5yz = "0x0000000000000000000000000000000000000001"
		const addressj0jRwIw = await YRX3UjgdHsd.updateReward.call(addressD7IP5yz, {from: accounts[2]});
		const uint256LXVhoqB = await YRX3UjgdHsd.lastTimeRewardApplicable.call({from: accounts[1]});
		await YRX3UjgdHsd.getReward.call({from: accounts[0]});

		await expect(YRX3UjgdHsd.updateReward.call(addressD7IP5yz, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3ZvoQJBs = await YRX3.new({from: accounts[0]});
		const uintE8dZWGT = BigInt("197")
		const addressAXIbd9 = accounts[2]
		const addressV2ibvRH = accounts[0]
		const uintTmBnOK = BigInt("1073")
		const boolZL7n8ot = await YRX3ZvoQJBs.isOwner.call({from: accounts[4]});
		const uint256gd5VtLa = await YRX3ZvoQJBs.withdraw.call(uintE8dZWGT, {from: accounts[1]});
		const uint256DcvGRMY = await YRX3ZvoQJBs.earned.call(addressAXIbd9, {from: accounts[0]});
		const uint256ZiORGVo = await YRX3ZvoQJBs.earned.call(addressV2ibvRH, {from: accounts[2]});
		const uint256KDWkDJ7 = await YRX3ZvoQJBs.withdraw.call(uintTmBnOK, {from: accounts[2]});

		assert.equal(boolZL7n8ot, false)
		await expect(YRX3ZvoQJBs.withdraw.call(uintE8dZWGT, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3zqPrOPF = await YRX3.new({from: accounts[4]});
		const addressJQ48007 = accounts[2]
		const addressF1Itqvr = "0x0000000000000000000000000000000000000001"
		const uint7FwE10 = BigInt("1182")
		const uint256P1nfhw = await YRX3zqPrOPF.balanceOf.call(addressJQ48007, {from: accounts[3]});
		const uint256kJARkDx = await YRX3zqPrOPF.earned.call(addressF1Itqvr, {from: accounts[0]});
		const uint256WTCr6Pa = await YRX3zqPrOPF.stake.call(uint7FwE10, {from: accounts[1]});
		await YRX3zqPrOPF.checkStart.call({from: accounts[5]});
		await YRX3zqPrOPF.onlyRewardDistribution.call({from: accounts[3]});

		assert.equal(uint256P1nfhw, BigInt("0"))
		assert.equal(uint256kJARkDx, BigInt("0"))
		await expect(YRX3zqPrOPF.stake.call(uint7FwE10, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3rKhtj2U = await YRX3.new({from: accounts[2]});
		const addressoYhksY4 = accounts[4]
		const uintVfEiDSR = BigInt("1190")
		const address3Lj0Hj = await YRX3rKhtj2U.transferOwnership.call(addressoYhksY4, {from: accounts[2]});
		const uint256uHCToW = await YRX3rKhtj2U.lastTimeRewardApplicable.call({from: accounts[0]});
		await YRX3rKhtj2U.notifyRewardAmount.call({from: accounts[5]});
		const uint256tTfm3j = await YRX3rKhtj2U.stake.call(uintVfEiDSR, {from: accounts[3]});
		await YRX3rKhtj2U.exit.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256uHCToW, BigInt("0"))
		await expect(YRX3rKhtj2U.notifyRewardAmount.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3A5wwEYZ = await YRX3.new({from: accounts[4]});
		const uintab6EA15 = BigInt("1931")
		const uint256y0NoAQp = await YRX3A5wwEYZ.rewardPerToken.call({from: accounts[1]});
		await YRX3A5wwEYZ.exit.call({from: "0x0000000000000000000000000000000000000001"});
		const uint2569529C9 = await YRX3A5wwEYZ.stake.call(uintab6EA15, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256y0NoAQp, BigInt("0"))
		await expect(YRX3A5wwEYZ.exit.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3tJA0x3m = await YRX3.new({from: accounts[4]});
		await YRX3tJA0x3m.renounceOwnership.call({from: accounts[3]});
		await YRX3tJA0x3m.renounceOwnership.call({from: accounts[2]});

		await expect(YRX3tJA0x3m.renounceOwnership.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3uVgo84l = await YRX3.new({from: accounts[4]});
		const addressSQPk4Gp = accounts[0]
		await YRX3uVgo84l.getReward.call({from: accounts[2]});
		await YRX3uVgo84l.onlyRewardDistribution.call({from: accounts[3]});
		const uint256OzkA1XP = await YRX3uVgo84l.earned.call(addressSQPk4Gp, {from: accounts[4]});

		await expect(YRX3uVgo84l.getReward.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3C9TfLz0 = await YRX3.new({from: "0x0000000000000000000000000000000000000001"});
		const addressXyHfvf = accounts[1]
		const addressfsy9ybP = accounts[1]
		const uint256F2W7MPr = await YRX3C9TfLz0.totalSupply.call({from: accounts[0]});
		const addressqJPnrFa = await YRX3C9TfLz0.emergencyDrain.call(addressXyHfvf, {from: accounts[3]});
		const boolegUIiKT = await YRX3C9TfLz0.isOwner.call({from: accounts[1]});
		const uint256rXSUflh = await YRX3C9TfLz0.balanceOf.call(addressfsy9ybP, {from: accounts[1]});
	});

	it('test for YRX3', async () => {
		const YRX3tJA0x3m = await YRX3.new({from: accounts[4]});
		const uintgO6gMAy = BigInt("81")
		const uintoiUK5ir = BigInt("501")
		const addressVmcVQeZ = accounts[5]
		const addressrpSrt2j = accounts[4]
		const uint256GIgXyWM = await YRX3tJA0x3m.lastTimeRewardApplicable.call({from: accounts[3]});
		const addressqOlbgO = await YRX3tJA0x3m.owner.call({from: accounts[2]});
		const uint256nCJzr35 = await YRX3tJA0x3m.stake.call(uintgO6gMAy, {from: "0x0000000000000000000000000000000000000001"});
		const uint256twCQs3D = await YRX3tJA0x3m.withdraw.call(uintoiUK5ir, {from: "0x0000000000000000000000000000000000000001"});
		const addressJ3DwXf4 = await YRX3tJA0x3m.updateReward.call(addressVmcVQeZ, {from: accounts[4]});
		const addresszyqLiYs = await YRX3tJA0x3m.setRewardDistribution.call(addressrpSrt2j, {from: accounts[2]});
		await YRX3tJA0x3m.renounceOwnership.call({from: accounts[0]});
		await YRX3tJA0x3m.renounceOwnership.call({from: accounts[2]});

		assert.equal(addressqOlbgO, 0x5B851082F11cCadD19bDE6732802b6558359FDe6)
		assert.equal(uint256GIgXyWM, BigInt("0"))
		await expect(YRX3tJA0x3m.stake.call(uintgO6gMAy, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3tJA0x3m = await YRX3.new({from: accounts[4]});
		const addressE06nRqG = accounts[6]
		const addressejSVd7i = accounts[2]
		const uintckkLUNW = BigInt("41")
		await YRX3tJA0x3m.getReward.call({from: accounts[1]});
		await YRX3tJA0x3m.renounceOwnership.call({from: accounts[4]});
		const uint256ox6BRds = await YRX3tJA0x3m.earned.call(addressE06nRqG, {from: accounts[1]});
		const addressBTkWUDp = await YRX3tJA0x3m.emergencyDrain.call(addressejSVd7i, {from: accounts[4]});
		const uint256hofHgKs = await YRX3tJA0x3m.lastTimeRewardApplicable.call({from: accounts[2]});
		const uint256U8IW9j = await YRX3tJA0x3m.stake.call(uintckkLUNW, {from: accounts[2]});

		await expect(YRX3tJA0x3m.getReward.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3O6EMflr = await YRX3.new({from: accounts[1]});
		const addressjMBvGVl = accounts[4]
		const addressMc2pdTh = accounts[4]
		const uintt4U1Vw5 = BigInt("1089")
		const addressZiVEEaS = await YRX3O6EMflr.setRewardDistribution.call(addressjMBvGVl, {from: accounts[1]});
		await YRX3O6EMflr.onlyRewardDistribution.call({from: accounts[1]});
		const uint256SIZctL7 = await YRX3O6EMflr.earned.call(addressMc2pdTh, {from: accounts[2]});
		const uint256C2LEiqC = await YRX3O6EMflr.stake.call(uintt4U1Vw5, {from: accounts[2]});
		await YRX3O6EMflr.getReward.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256CJXuo6 = await YRX3O6EMflr.totalSupply.call({from: accounts[1]});

		await expect(YRX3O6EMflr.onlyRewardDistribution.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3tJA0x3m = await YRX3.new({from: accounts[4]});
		const uinte11TXDM = BigInt("0")
		const uint256SlkVtqO = await YRX3tJA0x3m.stake.call(uinte11TXDM, {from: "0x0000000000000000000000000000000000000001"});

		await expect(YRX3tJA0x3m.stake.call(uinte11TXDM, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});
})