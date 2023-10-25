const MarsStakingRewards = artifacts.require("MarsStakingRewards");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MarsStakingRewards', (accounts) => {
	it('test for MarsStakingRewards', async () => {
		const addresshG7isZz = accounts[1]
		const addressJegoia = accounts[3]
		const addressJYYSudl = accounts[1]
		const MarsStakingRewardsuBpfET = await MarsStakingRewards.new(addresshG7isZz, addressJegoia, addressJYYSudl, {from: accounts[2]});
		const byteOhZYEOb = "0x170d0f16141d1e0b0c121a070b1c031517071c03051c14071e1f1d0e111f1f08"
		const bytehQnQag4 = "0x201a1214010604100c19200d061309070107191702021f1e16031718171d020d"
		const uintYUHtsbV = BigInt("113")
		const uintUCr9ipZ = BigInt("1432")
		const uintcQhiidm = BigInt("992")
		const uinthdsDs0C = BigInt("1665")
		const addressEnc4Ck3 = accounts[2]
		const uintizreWAr = BigInt("1235")
//		const uint256VU63DZO = await MarsStakingRewardsuBpfET.stakeWithPermit.call(uintcQhiidm, uintUCr9ipZ, uintYUHtsbV, bytehQnQag4, byteOhZYEOb, {from: accounts[2]});
//		await MarsStakingRewardsuBpfET.getReward.call({from: accounts[1]});
//		const uint256xnvQvga = await MarsStakingRewardsuBpfET.stake.call(uinthdsDs0C, {from: accounts[4]});
//		const uint256ud3Ysuc = await MarsStakingRewardsuBpfET.rewardPerToken.call({from: accounts[0]});
//		const uint256O5wyBJ = await MarsStakingRewardsuBpfET.balanceOf.call(addressEnc4Ck3, {from: accounts[5]});
//		const uint256rEZBuFa = await MarsStakingRewardsuBpfET.stake.call(uintizreWAr, {from: accounts[1]});

		await expect(MarsStakingRewardsuBpfET.stakeWithPermit.call(uintcQhiidm, uintUCr9ipZ, uintYUHtsbV, bytehQnQag4, byteOhZYEOb, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressfnpa9o = "0x0000000000000000000000000000000000000001"
		const addresskhJCO2R = accounts[2]
		const addresssRcbqjg = accounts[1]
		const MarsStakingRewardsdtVHZyi = await MarsStakingRewards.new(addressfnpa9o, addresskhJCO2R, addresssRcbqjg, {from: accounts[3]});
		const byteR5HpfYY = "0x1e0f0f020d041912160a1a080f1e070b021f090d171b0b1319130b082020130a"
		const bytelerFse7 = "0x1c150a100d090f1c11111c151b05151a0d1a180e181b0b190f03091b201e1a12"
		const uintIM9XRf2 = BigInt("243")
		const uint3g2enq = BigInt("1737")
		const uintDKctZ3 = BigInt("691")
		const uints1Ok3uf = BigInt("722")
//		await MarsStakingRewardsdtVHZyi.exit.call({from: accounts[3]});
//		await MarsStakingRewardsdtVHZyi.nonReentrant.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256zJOs2K7 = await MarsStakingRewardsdtVHZyi.stakeWithPermit.call(uintDKctZ3, uint3g2enq, uintIM9XRf2, bytelerFse7, byteR5HpfYY, {from: accounts[5]});
//		const uint256nThY8oI = await MarsStakingRewardsdtVHZyi.withdraw.call(uints1Ok3uf, {from: accounts[4]});

		await expect(MarsStakingRewardsdtVHZyi.exit.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressLkQ40qH = accounts[5]
		const addressn5MGV2n = accounts[2]
		const addressXpcFmw9 = accounts[2]
		const MarsStakingRewardsiidZK7u = await MarsStakingRewards.new(addressLkQ40qH, addressn5MGV2n, addressXpcFmw9, {from: accounts[2]});
		const addresscHGnUr = accounts[3]
//		await MarsStakingRewardsiidZK7u.onlyOwner.call({from: accounts[3]});
//		const uint256RD89JvT = await MarsStakingRewardsiidZK7u.lastTimeRewardApplicable.call({from: accounts[5]});
//		const booliSnHZy3 = await MarsStakingRewardsiidZK7u.isOwner.call({from: accounts[4]});
//		const uint256o8qKluU = await MarsStakingRewardsiidZK7u.totalSupply.call({from: accounts[2]});
//		const uint256LifA94a = await MarsStakingRewardsiidZK7u.earned.call(addresscHGnUr, {from: "0x0000000000000000000000000000000000000001"});

		await expect(MarsStakingRewardsiidZK7u.onlyOwner.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressRhzN4Wh = accounts[0]
		const addresspn8Jrhj = accounts[5]
		const addressIDLgs6 = accounts[1]
		const MarsStakingRewardsGzCdjUR = await MarsStakingRewards.new(addressRhzN4Wh, addresspn8Jrhj, addressIDLgs6, {from: accounts[0]});
		const uint256y1X1rb = await MarsStakingRewardsGzCdjUR.rewardPerToken.call({from: accounts[5]});
//		await MarsStakingRewardsGzCdjUR.getReward.call({from: accounts[4]});
//		const boolRgbQPcf = await MarsStakingRewardsGzCdjUR.isOwner.call({from: accounts[2]});

		assert.equal(uint256y1X1rb, BigInt("0"))
		await expect(MarsStakingRewardsGzCdjUR.getReward.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const address18NR6C = accounts[4]
		const addresshN5OUQw = accounts[0]
		const addressMi6iR7H = accounts[1]
		const MarsStakingRewardsJcDMGiU = await MarsStakingRewards.new(address18NR6C, addresshN5OUQw, addressMi6iR7H, {from: accounts[3]});
		const addressoQIeKLB = accounts[0]
		const addressQbWMJeR = accounts[3]
		const uint256AsNKGh = await MarsStakingRewardsJcDMGiU.earned.call(addressoQIeKLB, {from: accounts[0]});
		const uint256m18HqJZ = await MarsStakingRewardsJcDMGiU.lastTimeRewardApplicable.call({from: accounts[5]});
		const uint256orFB8cz = await MarsStakingRewardsJcDMGiU.earned.call(addressQbWMJeR, {from: accounts[0]});

		assert.equal(uint256AsNKGh, BigInt("0"))
		assert.equal(uint256m18HqJZ, BigInt("0"))
		assert.equal(uint256orFB8cz, BigInt("0"))
	});

	it('test for MarsStakingRewards', async () => {
		const addressp0G32UQ = accounts[0]
		const addressi7cfph2 = accounts[5]
		const addressAhPMHIL = accounts[1]
		const MarsStakingRewardsGzCdjUR = await MarsStakingRewards.new(addressp0G32UQ, addressi7cfph2, addressAhPMHIL, {from: accounts[0]});
		const uintfbWYANY = BigInt("660")
		const addressBzh7hu = accounts[3]
		const uint256y1X1rb = await MarsStakingRewardsGzCdjUR.rewardPerToken.call({from: accounts[5]});
		const addressGeh1gl0 = await MarsStakingRewardsGzCdjUR.owner.call({from: accounts[0]});
//		const addressZHgjaou = await MarsStakingRewardsGzCdjUR.inCaseTokensGetStuck.call(addressBzh7hu, uintfbWYANY, {from: accounts[4]});
//		await MarsStakingRewardsGzCdjUR.getReward.call({from: accounts[4]});
//		const boolRgbQPcf = await MarsStakingRewardsGzCdjUR.isOwner.call({from: accounts[2]});

		assert.equal(addressGeh1gl0, 0xd2f9866f11fF0F75a17C6f94308dE7bcFec12D62)
		assert.equal(uint256y1X1rb, BigInt("0"))
		await expect(MarsStakingRewardsGzCdjUR.inCaseTokensGetStuck.call(addressBzh7hu, uintfbWYANY, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressUYuhkPs = accounts[4]
		const addressbzzZxsO = accounts[0]
		const addressrzXK7hU = accounts[1]
		const MarsStakingRewardsJcDMGiU = await MarsStakingRewards.new(addressUYuhkPs, addressbzzZxsO, addressrzXK7hU, {from: accounts[3]});
		const addressgO7WE1g = accounts[0]
		const addressJx6QQb = accounts[1]
		const addressXWuPTgA = accounts[3]
		const uint256NCa1C4q = await MarsStakingRewardsJcDMGiU.balanceOf.call(addressgO7WE1g, {from: accounts[3]});
		const uint256AsNKGh = await MarsStakingRewardsJcDMGiU.earned.call(addressJx6QQb, {from: accounts[0]});
		const uint256m18HqJZ = await MarsStakingRewardsJcDMGiU.lastTimeRewardApplicable.call({from: accounts[5]});
		const uint256orFB8cz = await MarsStakingRewardsJcDMGiU.earned.call(addressXWuPTgA, {from: accounts[0]});
//		await MarsStakingRewardsJcDMGiU.onlyRewardsDistribution.call({from: accounts[0]});

		assert.equal(uint256AsNKGh, BigInt("0"))
		assert.equal(uint256NCa1C4q, BigInt("0"))
		assert.equal(uint256m18HqJZ, BigInt("0"))
		assert.equal(uint256orFB8cz, BigInt("0"))
		await expect(MarsStakingRewardsJcDMGiU.onlyRewardsDistribution.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addresskQxyxK = accounts[1]
		const addressEQr2hly = "0x0000000000000000000000000000000000000001"
		const addressOlfXxiL = "0x0000000000000000000000000000000000000001"
		const MarsStakingRewardsJeC7ktP = await MarsStakingRewards.new(addresskQxyxK, addressEQr2hly, addressOlfXxiL, {from: accounts[0]});
		const uintHiIELH = BigInt("1169")
		const uint256E0h6DHr = await MarsStakingRewardsJeC7ktP.getRewardForDuration.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256lA8tBVA = await MarsStakingRewardsJeC7ktP.withdraw.call(uintHiIELH, {from: accounts[0]});
//		const uint256U7a5CaH = await MarsStakingRewardsJeC7ktP.getRewardForDuration.call({from: accounts[4]});
//		const uint256uochtx = await MarsStakingRewardsJeC7ktP.getRewardForDuration.call({from: accounts[5]});
//		await MarsStakingRewardsJeC7ktP.nonReentrant.call({from: accounts[0]});

		assert.equal(uint256E0h6DHr, BigInt("0"))
		await expect(MarsStakingRewardsJeC7ktP.withdraw.call(uintHiIELH, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressfQDhdzu = accounts[4]
		const addressrGIZRUn = accounts[0]
		const addresst7s1EO1 = accounts[1]
		const MarsStakingRewardsJcDMGiU = await MarsStakingRewards.new(addressfQDhdzu, addressrGIZRUn, addresst7s1EO1, {from: accounts[3]});
		const addresstkeO83y = accounts[2]
		const addressT3ycDPd = accounts[1]
		const uintjjh8bib = BigInt("275")
		const addressSwyZQ8X = accounts[3]
		const addressv3FbiJ1 = await MarsStakingRewardsJcDMGiU.setRewardsDistribution.call(addresstkeO83y, {from: accounts[3]});
		const uint256AsNKGh = await MarsStakingRewardsJcDMGiU.earned.call(addressT3ycDPd, {from: accounts[0]});
//		const uint256OFfcvIv = await MarsStakingRewardsJcDMGiU.withdraw.call(uintjjh8bib, {from: accounts[1]});
//		const uint256m18HqJZ = await MarsStakingRewardsJcDMGiU.lastTimeRewardApplicable.call({from: accounts[5]});
//		const uint256orFB8cz = await MarsStakingRewardsJcDMGiU.earned.call(addressSwyZQ8X, {from: accounts[0]});

		assert.equal(uint256AsNKGh, BigInt("0"))
		await expect(MarsStakingRewardsJcDMGiU.withdraw.call(uintjjh8bib, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressOvQFq9e = accounts[0]
		const addressjivm9dp = accounts[2]
		const addressEqpOHXd = accounts[0]
		const MarsStakingRewardsuAhpqgq = await MarsStakingRewards.new(addressOvQFq9e, addressjivm9dp, addressEqpOHXd, {from: accounts[3]});
		const addresszc2jg6o = "0x0000000000000000000000000000000000000001"
		const byteDHEZbx = "0x001e0e11181e1c0d1c04111f1b09111014000d0a071d191d131807160b101212"
		const byteVR9mrVL = "0x050e0c0311090e061213060616050f0b181601081c0a171e041d06061b0c1f04"
		const uintRPre47e = BigInt("59")
		const uintsKYCDLF = BigInt("1200")
		const uintLKrgzi9 = BigInt("1343")
		const addresslQWxn8 = accounts[5]
		const uint256dT1awEp = await MarsStakingRewardsuAhpqgq.lastTimeRewardApplicable.call({from: accounts[2]});
		const addressQIgcAhj = await MarsStakingRewardsuAhpqgq.transferOwnership.call(addresszc2jg6o, {from: accounts[3]});
//		await MarsStakingRewardsuAhpqgq.nonReentrant.call({from: accounts[5]});
//		const boolRgQtGy = await MarsStakingRewardsuAhpqgq.isOwner.call({from: accounts[3]});
//		const uint256i7QH4CR = await MarsStakingRewardsuAhpqgq.stakeWithPermit.call(uintLKrgzi9, uintsKYCDLF, uintRPre47e, byteVR9mrVL, byteDHEZbx, {from: accounts[0]});
//		const uint256HNmD3EI = await MarsStakingRewardsuAhpqgq.earned.call(addresslQWxn8, {from: accounts[4]});

		assert.equal(uint256dT1awEp, BigInt("0"))
		await expect(MarsStakingRewardsuAhpqgq.nonReentrant.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const address1OPSkk = accounts[4]
		const address1RikJM = accounts[0]
		const addressLhIuT8U = accounts[1]
		const MarsStakingRewardsJcDMGiU = await MarsStakingRewards.new(address1OPSkk, address1RikJM, addressLhIuT8U, {from: accounts[3]});
		const addressv3sqQFg = accounts[1]
		const addressfzCMr0S = accounts[1]
		const uint256AsNKGh = await MarsStakingRewardsJcDMGiU.earned.call(addressv3sqQFg, {from: accounts[0]});
		const uint256JeIIUYb = await MarsStakingRewardsJcDMGiU.totalSupply.call({from: accounts[3]});
		const uint256KVJPBN = await MarsStakingRewardsJcDMGiU.getRewardForDuration.call({from: accounts[3]});
//		await MarsStakingRewardsJcDMGiU.exit.call({from: accounts[5]});
//		const uint256orFB8cz = await MarsStakingRewardsJcDMGiU.earned.call(addressfzCMr0S, {from: accounts[0]});

		assert.equal(uint256AsNKGh, BigInt("0"))
		assert.equal(uint256JeIIUYb, BigInt("0"))
		assert.equal(uint256KVJPBN, BigInt("0"))
		await expect(MarsStakingRewardsJcDMGiU.exit.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addresslfpmll4 = accounts[4]
		const addressZnIehXL = accounts[0]
		const addressuCMLemN = accounts[1]
		const MarsStakingRewardsJcDMGiU = await MarsStakingRewards.new(addresslfpmll4, addressZnIehXL, addressuCMLemN, {from: accounts[3]});
		const uintweqfRaF = BigInt("1161")
		const uintfqJNzsu = BigInt("1468")
		const addressz5Hivwi = accounts[5]
		const uint256m18HqJZ = await MarsStakingRewardsJcDMGiU.lastTimeRewardApplicable.call({from: accounts[5]});
//		const uint256huAcYUX = await MarsStakingRewardsJcDMGiU.notifyRewardAmount.call(uintfqJNzsu, uintweqfRaF, {from: accounts[1]});
//		const uint256orFB8cz = await MarsStakingRewardsJcDMGiU.earned.call(addressz5Hivwi, {from: accounts[0]});

		assert.equal(uint256m18HqJZ, BigInt("0"))
		await expect(MarsStakingRewardsJcDMGiU.notifyRewardAmount.call(uintfqJNzsu, uintweqfRaF, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressoi0JHL = accounts[5]
		const addressdI47x3 = accounts[2]
		const addressVrpy5z = accounts[0]
		const MarsStakingRewardsGQKe6ce = await MarsStakingRewards.new(addressoi0JHL, addressdI47x3, addressVrpy5z, {from: accounts[0]});
		const uintI0eKJpI = BigInt("869")
		const uintagwjHyZ = BigInt("998")
		const addressq0nSrel = accounts[4]
		const uintJ6VTwBq = BigInt("1610")
		const addresse8BH1l1 = accounts[3]
		const addressIKsNDR = "0x0000000000000000000000000000000000000001"
//		const uint256JcuGeNx = await MarsStakingRewardsGQKe6ce.notifyRewardAmount.call(uintagwjHyZ, uintI0eKJpI, {from: accounts[5]});
//		const addressK3XKLlK = await MarsStakingRewardsGQKe6ce.updateReward.call(addressq0nSrel, {from: "0x0000000000000000000000000000000000000001"});
//		const addresshRkr1Bl = await MarsStakingRewardsGQKe6ce.inCaseTokensGetStuck.call(addresse8BH1l1, uintJ6VTwBq, {from: accounts[5]});
//		const addressFN7cy3 = await MarsStakingRewardsGQKe6ce.setRewardsDistribution.call(addressIKsNDR, {from: "0x0000000000000000000000000000000000000001"});

		await expect(MarsStakingRewardsGQKe6ce.notifyRewardAmount.call(uintagwjHyZ, uintI0eKJpI, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressLDuCcfl = accounts[4]
		const addressjDi7wzF = accounts[0]
		const addressv3RD0NQ = accounts[1]
		const MarsStakingRewardsJcDMGiU = await MarsStakingRewards.new(addressLDuCcfl, addressjDi7wzF, addressv3RD0NQ, {from: accounts[3]});
		const addressxeYDML = accounts[0]
		const addressmbtCHw = accounts[4]
		const uint256AsNKGh = await MarsStakingRewardsJcDMGiU.earned.call(addressxeYDML, {from: accounts[0]});
		const uint256m18HqJZ = await MarsStakingRewardsJcDMGiU.lastTimeRewardApplicable.call({from: accounts[5]});
		const uint256orFB8cz = await MarsStakingRewardsJcDMGiU.earned.call(addressmbtCHw, {from: accounts[0]});
//		await MarsStakingRewardsJcDMGiU.renounceOwnership.call({from: accounts[3]});
//		await MarsStakingRewardsJcDMGiU.exit.call({from: accounts[3]});

		assert.equal(uint256AsNKGh, BigInt("0"))
		assert.equal(uint256m18HqJZ, BigInt("0"))
		assert.equal(uint256orFB8cz, BigInt("0"))
		await expect(MarsStakingRewardsJcDMGiU.renounceOwnership.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressbucae0F = accounts[1]
		const addressVZt30XG = accounts[3]
		const addressbFrzKb6 = accounts[0]
		const MarsStakingRewardsL6D7lFs = await MarsStakingRewards.new(addressbucae0F, addressVZt30XG, addressbFrzKb6, {from: "0x0000000000000000000000000000000000000001"});
		const uintKTJ7Lx8 = BigInt("369")
		const addresszwTIQrQ = accounts[0]
		const uintK1GMCt1 = BigInt("1855")
		const uintvf8OOjq = BigInt("1564")
		const uintBEBhzU = BigInt("87")
		await MarsStakingRewardsL6D7lFs.exit.call({from: accounts[2]});
		const addressddQPSNu = await MarsStakingRewardsL6D7lFs.inCaseTokensGetStuck.call(addresszwTIQrQ, uintKTJ7Lx8, {from: accounts[1]});
		const uint256upq2grN = await MarsStakingRewardsL6D7lFs.stake.call(uintK1GMCt1, {from: accounts[3]});
		await MarsStakingRewardsL6D7lFs.nonReentrant.call({from: accounts[4]});
		const uint256kLR9nDR = await MarsStakingRewardsL6D7lFs.lastTimeRewardApplicable.call({from: accounts[4]});
		const uint256ziKEV9j = await MarsStakingRewardsL6D7lFs.notifyRewardAmount.call(uintBEBhzU, uintvf8OOjq, {from: accounts[2]});
	});

	it('test for MarsStakingRewards', async () => {
		const addressWEQl1X6 = accounts[4]
		const addresslk94HKx = accounts[0]
		const addressiM4gWBQ = accounts[1]
		const MarsStakingRewardsJcDMGiU = await MarsStakingRewards.new(addressWEQl1X6, addresslk94HKx, addressiM4gWBQ, {from: accounts[3]});
		const addressjpSqjcQ = accounts[0]
		const uintuTb3K95 = BigInt("2000")
		const addressvvq1x2s = accounts[3]
		const addressFiyTniS = accounts[4]
		const uint256AsNKGh = await MarsStakingRewardsJcDMGiU.earned.call(addressjpSqjcQ, {from: accounts[0]});
		const uint256zOUGs5 = await MarsStakingRewardsJcDMGiU.totalSupply.call({from: accounts[2]});
//		const addressq1SJfyb = await MarsStakingRewardsJcDMGiU.inCaseTokensGetStuck.call(addressvvq1x2s, uintuTb3K95, {from: accounts[3]});
//		await MarsStakingRewardsJcDMGiU.exit.call({from: accounts[0]});
//		const addressw6ef5u9 = await MarsStakingRewardsJcDMGiU.updateReward.call(addressFiyTniS, {from: accounts[3]});
//		const uint256m18HqJZ = await MarsStakingRewardsJcDMGiU.lastTimeRewardApplicable.call({from: accounts[5]});

		assert.equal(uint256AsNKGh, BigInt("0"))
		assert.equal(uint256zOUGs5, BigInt("0"))
		await expect(MarsStakingRewardsJcDMGiU.inCaseTokensGetStuck.call(addressvvq1x2s, uintuTb3K95, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressubzbrXv = accounts[4]
		const addresszM37tjp = accounts[0]
		const addressKtgPMGh = accounts[1]
		const MarsStakingRewardsJcDMGiU = await MarsStakingRewards.new(addressubzbrXv, addresszM37tjp, addressKtgPMGh, {from: accounts[3]});
		const addressboonkT = accounts[0]
		const uintilFCZkp = BigInt("2000")
		const addressasMJxD0 = accounts[1]
		const addressTUgv9Hb = accounts[3]
		const uint256AsNKGh = await MarsStakingRewardsJcDMGiU.earned.call(addressboonkT, {from: accounts[0]});
		const uint256zOUGs5 = await MarsStakingRewardsJcDMGiU.totalSupply.call({from: accounts[2]});
//		const addressq1SJfyb = await MarsStakingRewardsJcDMGiU.inCaseTokensGetStuck.call(addressasMJxD0, uintilFCZkp, {from: accounts[3]});
//		await MarsStakingRewardsJcDMGiU.exit.call({from: accounts[0]});
//		const addressw6ef5u9 = await MarsStakingRewardsJcDMGiU.updateReward.call(addressTUgv9Hb, {from: accounts[3]});
//		const uint256m18HqJZ = await MarsStakingRewardsJcDMGiU.lastTimeRewardApplicable.call({from: accounts[5]});

		assert.equal(uint256AsNKGh, BigInt("0"))
		assert.equal(uint256zOUGs5, BigInt("0"))
		await expect(MarsStakingRewardsJcDMGiU.inCaseTokensGetStuck.call(addressasMJxD0, uintilFCZkp, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})