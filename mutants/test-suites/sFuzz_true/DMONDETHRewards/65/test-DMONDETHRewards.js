const DMONDETHRewards = artifacts.require("DMONDETHRewards");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('DMONDETHRewards', (accounts) => {
	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsjuzVPo = await DMONDETHRewards.new({from: accounts[1]});
//		await DMONDETHRewardsjuzVPo.exit.call({from: accounts[0]});
//		await DMONDETHRewardsjuzVPo.getReward.call({from: accounts[2]});

		await expect(DMONDETHRewardsjuzVPo.exit.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsI7QUotq = await DMONDETHRewards.new({from: accounts[5]});
		const uintiPFXd0g = BigInt("1433")
		const uint256RkNs6Dd = await DMONDETHRewardsI7QUotq.totalSupply.call({from: accounts[3]});
		const uint256UXa7JWQ = await DMONDETHRewardsI7QUotq.lastTimeRewardApplicable.call({from: accounts[1]});
//		const uint256Tr7Y60p = await DMONDETHRewardsI7QUotq.withdraw.call(uintiPFXd0g, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256RkNs6Dd, BigInt("0"))
		assert.equal(uint256UXa7JWQ, BigInt("0"))
		await expect(DMONDETHRewardsI7QUotq.withdraw.call(uintiPFXd0g, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsIOKCgXE = await DMONDETHRewards.new({from: accounts[1]});
		const uintY18TemX = BigInt("1906")
		const uintewsfHt = BigInt("1410")
		const uint3DGnhz = BigInt("529")
//		const uint256koxSbM9 = await DMONDETHRewardsIOKCgXE.stake.call(uintY18TemX, {from: accounts[4]});
//		const uint256sg9md8v = await DMONDETHRewardsIOKCgXE.remainingReward.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256ltxVs4U = await DMONDETHRewardsIOKCgXE.stake.call(uintewsfHt, {from: accounts[3]});
//		const uint256iGkbGXF = await DMONDETHRewardsIOKCgXE.rewardPerToken.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256xhVWWdC = await DMONDETHRewardsIOKCgXE.notifyRewardAmount.call(uint3DGnhz, {from: accounts[2]});
//		await DMONDETHRewardsIOKCgXE.checkStart.call({from: accounts[2]});

		await expect(DMONDETHRewardsIOKCgXE.stake.call(uintY18TemX, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsLecKEB2 = await DMONDETHRewards.new({from: accounts[3]});
		const uintDbwZSdD = BigInt("1296")
		const uintlXFADKM = BigInt("1712")
		const addressquG0fGA = accounts[5]
		const booll6yb8YM = await DMONDETHRewardsLecKEB2.isOwner.call({from: accounts[3]});
//		const uint256twd0xV2 = await DMONDETHRewardsLecKEB2.withdraw.call(uintDbwZSdD, {from: accounts[4]});
//		const uint256zk6yDiW = await DMONDETHRewardsLecKEB2.setStartTime.call(uintlXFADKM, {from: accounts[0]});
//		const addressAa51aRW = await DMONDETHRewardsLecKEB2.setRewardDistribution.call(addressquG0fGA, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256YHs8i9w = await DMONDETHRewardsLecKEB2.lastTimeRewardApplicable.call({from: accounts[2]});

		assert.equal(booll6yb8YM, true)
		await expect(DMONDETHRewardsLecKEB2.withdraw.call(uintDbwZSdD, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardselV7BbY = await DMONDETHRewards.new({from: accounts[2]});
		const addressCRp3BTW = accounts[3]
		const uintTpOIhtO = BigInt("1445")
		const uintfVOJnpZ = BigInt("1639")
		const uinttT2zO78 = BigInt("1668")
		const uintvo7QH78 = BigInt("578")
//		const addressWM4mT1b = await DMONDETHRewardselV7BbY.transferOwnership.call(addressCRp3BTW, {from: accounts[1]});
//		const uint256oJW33T = await DMONDETHRewardselV7BbY.stake.call(uintTpOIhtO, {from: accounts[4]});
//		const uint256Rx63H4E = await DMONDETHRewardselV7BbY.stake.call(uintfVOJnpZ, {from: accounts[4]});
//		const uint256Kx2WanS = await DMONDETHRewardselV7BbY.stake.call(uinttT2zO78, {from: accounts[4]});
//		const uint256mRmjdPc = await DMONDETHRewardselV7BbY.withdraw.call(uintvo7QH78, {from: accounts[1]});

		await expect(DMONDETHRewardselV7BbY.transferOwnership.call(addressCRp3BTW, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsurKjzCe = await DMONDETHRewards.new({from: accounts[5]});
		const addressod8jzd = accounts[5]
		const addressxdbWgqf = accounts[3]
		const uintuOmqJu8 = BigInt("264")
		const addresseteNW5F = await DMONDETHRewardsurKjzCe.owner.call({from: accounts[2]});
//		const addressf62Mn8Z = await DMONDETHRewardsurKjzCe.setStakeAddress.call(addressod8jzd, {from: "0x0000000000000000000000000000000000000001"});
//		await DMONDETHRewardsurKjzCe.exit.call({from: accounts[1]});
//		const uint256CGvxpgV = await DMONDETHRewardsurKjzCe.earned.call(addressxdbWgqf, {from: accounts[0]});
//		const uint256iqQFPy = await DMONDETHRewardsurKjzCe.withdraw.call(uintuOmqJu8, {from: accounts[0]});

		assert.equal(addresseteNW5F, 0xc45Ac8f2df8C797815e539e0c4C6b069F1749208)
		await expect(DMONDETHRewardsurKjzCe.setStakeAddress.call(addressod8jzd, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsjuzVPo = await DMONDETHRewards.new({from: accounts[1]});
//		await DMONDETHRewardsjuzVPo.getReward.call({from: accounts[2]});
//		const uint256pMPcATS = await DMONDETHRewardsjuzVPo.rewardPerToken.call({from: accounts[4]});

		await expect(DMONDETHRewardsjuzVPo.getReward.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsjuzVPo = await DMONDETHRewards.new({from: accounts[1]});
		const addressBcvyfT6 = accounts[0]
//		await DMONDETHRewardsjuzVPo.onlyRewardDistribution.call({from: accounts[2]});
//		await DMONDETHRewardsjuzVPo.exit.call({from: accounts[0]});
//		const uint256a4oBktm = await DMONDETHRewardsjuzVPo.rewardPerToken.call({from: accounts[5]});
//		const addressKSfHjZT = await DMONDETHRewardsjuzVPo.transferOwnership.call(addressBcvyfT6, {from: accounts[5]});
//		await DMONDETHRewardsjuzVPo.getReward.call({from: accounts[2]});

		await expect(DMONDETHRewardsjuzVPo.onlyRewardDistribution.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsu8fKEUx = await DMONDETHRewards.new({from: accounts[2]});
//		const uint256PnzRipg = await DMONDETHRewardsu8fKEUx.remainingReward.call({from: accounts[2]});
//		await DMONDETHRewardsu8fKEUx.onlyRewardDistribution.call({from: accounts[4]});

		await expect(DMONDETHRewardsu8fKEUx.remainingReward.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsjuzVPo = await DMONDETHRewards.new({from: accounts[1]});
		const uintcXHBemo = BigInt("1640")
		const addressqNxXDo4 = accounts[3]
//		const uint256gRWY4V = await DMONDETHRewardsjuzVPo.notifyRewardAmount.call(uintcXHBemo, {from: accounts[4]});
//		const addressYaLxo1P = await DMONDETHRewardsjuzVPo.setStakeAddress.call(addressqNxXDo4, {from: accounts[0]});
//		await DMONDETHRewardsjuzVPo.exit.call({from: accounts[0]});

		await expect(DMONDETHRewardsjuzVPo.notifyRewardAmount.call(uintcXHBemo, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardslUkL3lR = await DMONDETHRewards.new({from: "0x0000000000000000000000000000000000000001"});
		const addressTaBokU0 = accounts[1]
		const uint256tRIjlg9 = await DMONDETHRewardslUkL3lR.totalSupply.call({from: accounts[1]});
		await DMONDETHRewardslUkL3lR.onlyOwner.call({from: accounts[3]});
		const addressfEgSvaY = await DMONDETHRewardslUkL3lR.updateReward.call(addressTaBokU0, {from: accounts[3]});
		await DMONDETHRewardslUkL3lR.exit.call({from: accounts[1]});
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsjuzVPo = await DMONDETHRewards.new({from: accounts[1]});
		const addressFLZCgi7 = accounts[0]
		const uint256yrn8CsX = await DMONDETHRewardsjuzVPo.lastTimeRewardApplicable.call({from: accounts[0]});
		const addressrWAsqvx = await DMONDETHRewardsjuzVPo.transferOwnership.call(addressFLZCgi7, {from: accounts[1]});
//		await DMONDETHRewardsjuzVPo.exit.call({from: accounts[0]});

		assert.equal(uint256yrn8CsX, BigInt("0"))
		await expect(DMONDETHRewardsjuzVPo.exit.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsjuzVPo = await DMONDETHRewards.new({from: accounts[1]});
		const uintd5ftWBO = BigInt("1124")
		const addresss1cIxFH = accounts[0]
		const uint256MuC8MKA = await DMONDETHRewardsjuzVPo.notifyRewardAmount.call(uintd5ftWBO, {from: accounts[1]});
		const uint256uejORn9 = await DMONDETHRewardsjuzVPo.balanceOf.call(addresss1cIxFH, {from: accounts[0]});
//		await DMONDETHRewardsjuzVPo.exit.call({from: accounts[0]});

		assert.equal(uint256uejORn9, BigInt("0"))
		await expect(DMONDETHRewardsjuzVPo.exit.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsjuzVPo = await DMONDETHRewards.new({from: accounts[1]});
		const uintLCKQ4xn = BigInt("781")
		const address77U3GT = accounts[4]
//		await DMONDETHRewardsjuzVPo.getReward.call({from: accounts[2]});
//		const uint256NEcKFIV = await DMONDETHRewardsjuzVPo.setStartTime.call(uintLCKQ4xn, {from: accounts[1]});
//		const uint256h0bnEX = await DMONDETHRewardsjuzVPo.earned.call(address77U3GT, {from: accounts[0]});

		await expect(DMONDETHRewardsjuzVPo.getReward.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsjuzVPo = await DMONDETHRewards.new({from: accounts[1]});
		const addresssC0wUXT = accounts[3]
		const addressyS3LgW8 = await DMONDETHRewardsjuzVPo.setStakeAddress.call(addresssC0wUXT, {from: accounts[1]});
//		await DMONDETHRewardsjuzVPo.getReward.call({from: accounts[2]});

		await expect(DMONDETHRewardsjuzVPo.getReward.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsjuzVPo = await DMONDETHRewards.new({from: accounts[1]});
		const addressWi2xq7N = accounts[1]
		const addressrtuRO4x = await DMONDETHRewardsjuzVPo.setRewardDistribution.call(addressWi2xq7N, {from: accounts[1]});
//		await DMONDETHRewardsjuzVPo.getReward.call({from: accounts[2]});
//		await DMONDETHRewardsjuzVPo.checkStart.call({from: accounts[1]});

		await expect(DMONDETHRewardsjuzVPo.getReward.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});
})