const MarsStakingRewards = artifacts.require("MarsStakingRewards");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MarsStakingRewards', (accounts) => {
	it('test for MarsStakingRewards', async () => {
		const addressqQzKXqX = accounts[5]
		const address8V7tyX = accounts[3]
		const addresshghFfIG = accounts[0]
		const MarsStakingRewardsaCyWbae = await MarsStakingRewards.new(addressqQzKXqX, address8V7tyX, addresshghFfIG, {from: accounts[3]});
		const uintfbGzLwq = BigInt("1809")
		const uinthv0gUDn = BigInt("898")
		const addressQSGulo = accounts[2]
		const addressWmmPrz8 = accounts[1]
//		const uint256O31YI3D = await MarsStakingRewardsaCyWbae.notifyRewardAmount.call(uinthv0gUDn, uintfbGzLwq, {from: accounts[0]});
//		const uint256M5lDSgI = await MarsStakingRewardsaCyWbae.earned.call(addressQSGulo, {from: accounts[2]});
//		const addresszX1mHli = await MarsStakingRewardsaCyWbae.owner.call({from: "0x0000000000000000000000000000000000000001"});
//		const addressaKhXuIR = await MarsStakingRewardsaCyWbae.updateReward.call(addressWmmPrz8, {from: accounts[0]});

		await expect(MarsStakingRewardsaCyWbae.notifyRewardAmount.call(uinthv0gUDn, uintfbGzLwq, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addresshFRCZgA = accounts[1]
		const addressnHiilgC = accounts[5]
		const addressSH32p14 = accounts[0]
		const MarsStakingRewardsAvksy7f = await MarsStakingRewards.new(addresshFRCZgA, addressnHiilgC, addressSH32p14, {from: accounts[3]});
		const addresstdZdIAO = accounts[5]
//		await MarsStakingRewardsAvksy7f.onlyOwner.call({from: accounts[3]});
//		const addressPNwUarE = await MarsStakingRewardsAvksy7f.owner.call({from: accounts[0]});
//		const uint256kWztnwd = await MarsStakingRewardsAvksy7f.rewardPerToken.call({from: accounts[0]});
//		const addressP6mLXFn = await MarsStakingRewardsAvksy7f.transferOwnership.call(addresstdZdIAO, {from: accounts[3]});

		await expect(MarsStakingRewardsAvksy7f.onlyOwner.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressKr4XCOo = "0x0000000000000000000000000000000000000001"
		const addressTBDBpX = accounts[3]
		const address7WXfi0 = accounts[4]
		const MarsStakingRewardsBZRwCKG = await MarsStakingRewards.new(addressKr4XCOo, addressTBDBpX, address7WXfi0, {from: accounts[2]});
		const uintzb8HfjF = BigInt("1632")
		const uint256T3wArN1 = await MarsStakingRewardsBZRwCKG.totalSupply.call({from: accounts[2]});
		const uint256KNwSkRx = await MarsStakingRewardsBZRwCKG.lastTimeRewardApplicable.call({from: "0x0000000000000000000000000000000000000001"});
//		await MarsStakingRewardsBZRwCKG.nonReentrant.call({from: accounts[3]});
//		const uint256HDOfGIo = await MarsStakingRewardsBZRwCKG.withdraw.call(uintzb8HfjF, {from: accounts[0]});
//		const uint256P9pZQxX = await MarsStakingRewardsBZRwCKG.totalSupply.call({from: accounts[3]});

		assert.equal(uint256KNwSkRx, BigInt("0"))
		assert.equal(uint256T3wArN1, BigInt("0"))
		await expect(MarsStakingRewardsBZRwCKG.nonReentrant.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addresskmBXir = accounts[4]
		const addresshbxtS5H = "0x0000000000000000000000000000000000000001"
		const addressRxbQUTH = accounts[3]
		const MarsStakingRewardsm8ZVNoR = await MarsStakingRewards.new(addresskmBXir, addresshbxtS5H, addressRxbQUTH, {from: accounts[0]});
		const uintwOXuw9k = BigInt("1659")
		const addressEgmJ9YM = accounts[2]
		const uintTtYJJ6R = BigInt("945")
		const addressCmmjiIM = "0x0000000000000000000000000000000000000001"
		const uintq0XrZ9n = BigInt("289")
//		const uint256Rp6MCm4 = await MarsStakingRewardsm8ZVNoR.stake.call(uintwOXuw9k, {from: accounts[0]});
//		const uint256iF3AZ5m = await MarsStakingRewardsm8ZVNoR.lastTimeRewardApplicable.call({from: accounts[1]});
//		const addressKsADIxF = await MarsStakingRewardsm8ZVNoR.setRewardsDistribution.call(addressEgmJ9YM, {from: accounts[0]});
//		const addressMKU45t6 = await MarsStakingRewardsm8ZVNoR.inCaseTokensGetStuck.call(addressCmmjiIM, uintTtYJJ6R, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256uGGVJRn = await MarsStakingRewardsm8ZVNoR.withdraw.call(uintq0XrZ9n, {from: accounts[4]});

		await expect(MarsStakingRewardsm8ZVNoR.stake.call(uintwOXuw9k, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressP88ng2 = "0x0000000000000000000000000000000000000001"
		const addressvAp57nm = accounts[1]
		const addressn5vatS0 = accounts[2]
		const MarsStakingRewardsk23p5w = await MarsStakingRewards.new(addressP88ng2, addressvAp57nm, addressn5vatS0, {from: accounts[0]});
		const uintNQ4Mv9z = BigInt("1341")
		const addressR22F4HG = "0x0000000000000000000000000000000000000001"
		const addressqSAGLMf = accounts[0]
//		await MarsStakingRewardsk23p5w.renounceOwnership.call({from: accounts[4]});
//		const uint256Xe4ZQ65 = await MarsStakingRewardsk23p5w.lastTimeRewardApplicable.call({from: accounts[2]});
//		const uint256ZgJ71u = await MarsStakingRewardsk23p5w.stake.call(uintNQ4Mv9z, {from: accounts[3]});
//		const uint256eKPdzFh = await MarsStakingRewardsk23p5w.totalSupply.call({from: accounts[1]});
//		const addressdq7orSl = await MarsStakingRewardsk23p5w.setRewardsDistribution.call(addressR22F4HG, {from: accounts[1]});
//		const addressuDS7UkX = await MarsStakingRewardsk23p5w.transferOwnership.call(addressqSAGLMf, {from: accounts[4]});

		await expect(MarsStakingRewardsk23p5w.renounceOwnership.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressckXZmOm = accounts[3]
		const addressF0itISx = accounts[2]
		const addressasHpyQG = accounts[2]
		const MarsStakingRewardsHcamBL7 = await MarsStakingRewards.new(addressckXZmOm, addressF0itISx, addressasHpyQG, {from: "0x0000000000000000000000000000000000000001"});
		const addressOx7cuV2 = accounts[2]
		const addressLOEUI3o = accounts[5]
		const uintS79deL = BigInt("799")
		const addressnPvFlNw = "0x0000000000000000000000000000000000000001"
		const uint256GncI4PP = await MarsStakingRewardsHcamBL7.rewardPerToken.call({from: accounts[4]});
		const addressFK1tr60 = await MarsStakingRewardsHcamBL7.setRewardsDistribution.call(addressOx7cuV2, {from: "0x0000000000000000000000000000000000000001"});
		const addresskX4SjZv = await MarsStakingRewardsHcamBL7.updateReward.call(addressLOEUI3o, {from: accounts[0]});
		const addresswLhRqut = await MarsStakingRewardsHcamBL7.inCaseTokensGetStuck.call(addressnPvFlNw, uintS79deL, {from: accounts[0]});
	});

	it('test for MarsStakingRewards', async () => {
		const addresszM1MiWL = accounts[1]
		const addresswwggKsD = accounts[4]
		const addresshfyu6c = accounts[5]
		const MarsStakingRewardsNljcAfM = await MarsStakingRewards.new(addresszM1MiWL, addresswwggKsD, addresshfyu6c, {from: accounts[5]});
		const uintQgGKl4f = BigInt("1348")
		const addressDRPYC1q = accounts[5]
		const uint256u1al4Rl = await MarsStakingRewardsNljcAfM.getRewardForDuration.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256sjaaDx0 = await MarsStakingRewardsNljcAfM.withdraw.call(uintQgGKl4f, {from: "0x0000000000000000000000000000000000000001"});
//		const addressZJQP70A = await MarsStakingRewardsNljcAfM.updateReward.call(addressDRPYC1q, {from: accounts[2]});

		assert.equal(uint256u1al4Rl, BigInt("0"))
		await expect(MarsStakingRewardsNljcAfM.withdraw.call(uintQgGKl4f, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressqD8MuY9 = accounts[1]
		const addressn5nABFn = accounts[4]
		const addressCKG5NAH = accounts[5]
		const MarsStakingRewardsNljcAfM = await MarsStakingRewards.new(addressqD8MuY9, addressn5nABFn, addressCKG5NAH, {from: accounts[5]});
		const uintliopQ94 = BigInt("1855")
		const addressLMvkIbJ = accounts[4]
//		await MarsStakingRewardsNljcAfM.exit.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256sjaaDx0 = await MarsStakingRewardsNljcAfM.withdraw.call(uintliopQ94, {from: "0x0000000000000000000000000000000000000001"});
//		await MarsStakingRewardsNljcAfM.getReward.call({from: accounts[4]});
//		const addressZJQP70A = await MarsStakingRewardsNljcAfM.updateReward.call(addressLMvkIbJ, {from: accounts[2]});

		await expect(MarsStakingRewardsNljcAfM.exit.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressppa0uXt = accounts[1]
		const addressrCDJsHm = accounts[4]
		const addressjLYc6Ee = accounts[5]
		const MarsStakingRewardsNljcAfM = await MarsStakingRewards.new(addressppa0uXt, addressrCDJsHm, addressjLYc6Ee, {from: accounts[5]});
		const addressGmdaG0s = accounts[0]
		const addressU1Rd4gH = accounts[5]
		const addressKJSrULk = accounts[1]
		const uint256LJS4piU = await MarsStakingRewardsNljcAfM.earned.call(addressGmdaG0s, {from: accounts[2]});
//		const addressZJQP70A = await MarsStakingRewardsNljcAfM.updateReward.call(addressU1Rd4gH, {from: accounts[2]});
//		const addressBQV8Oz = await MarsStakingRewardsNljcAfM.setRewardsDistribution.call(addressKJSrULk, {from: accounts[0]});

		assert.equal(uint256LJS4piU, BigInt("0"))
		await expect(MarsStakingRewardsNljcAfM.updateReward.call(addressU1Rd4gH, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressjrqN4xZ = accounts[0]
		const addressKEahnp = accounts[0]
		const addressBwAJMdn = accounts[4]
		const MarsStakingRewardsf7Czw4E = await MarsStakingRewards.new(addressjrqN4xZ, addressKEahnp, addressBwAJMdn, {from: accounts[1]});
		const addressWHpilpm = accounts[2]
		const uintWWCe9qN = BigInt("941")
		const address8TIHIv = accounts[1]
		const uintwqfRe6 = BigInt("1224")
		const addressIk8kBb3 = await MarsStakingRewardsf7Czw4E.transferOwnership.call(addressWHpilpm, {from: accounts[1]});
//		await MarsStakingRewardsf7Czw4E.exit.call({from: accounts[2]});
//		const uint256zSnhZZN = await MarsStakingRewardsf7Czw4E.totalSupply.call({from: accounts[2]});
//		const uint256Kqj4fIp = await MarsStakingRewardsf7Czw4E.stake.call(uintWWCe9qN, {from: accounts[3]});
//		const addressm4rjF9 = await MarsStakingRewardsf7Czw4E.transferOwnership.call(address8TIHIv, {from: accounts[3]});
//		const uint256kKEheUK = await MarsStakingRewardsf7Czw4E.stake.call(uintwqfRe6, {from: "0x0000000000000000000000000000000000000001"});

		await expect(MarsStakingRewardsf7Czw4E.exit.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressenoPUG7 = accounts[1]
		const addressQaGSmTl = accounts[4]
		const addressnhzYyJO = accounts[5]
		const MarsStakingRewardsNljcAfM = await MarsStakingRewards.new(addressenoPUG7, addressQaGSmTl, addressnhzYyJO, {from: accounts[5]});
		const addressMGTblf9 = accounts[0]
		const addressNoGDszi = accounts[6]
		const addressgofAQD7 = accounts[1]
		const addressEt8b4mz = accounts[4]
		const addresswDSsxWu = await MarsStakingRewardsNljcAfM.owner.call({from: accounts[2]});
		const uint256LJS4piU = await MarsStakingRewardsNljcAfM.earned.call(addressMGTblf9, {from: accounts[2]});
//		const addressZJQP70A = await MarsStakingRewardsNljcAfM.updateReward.call(addressNoGDszi, {from: accounts[2]});
//		const addressBQV8Oz = await MarsStakingRewardsNljcAfM.setRewardsDistribution.call(addressgofAQD7, {from: accounts[0]});
//		const addressAm1t1rD = await MarsStakingRewardsNljcAfM.setRewardsDistribution.call(addressEt8b4mz, {from: accounts[3]});

		assert.equal(addresswDSsxWu, 0xf864f00018D7d918cb4949d8458cb17b4e6e66F3)
		assert.equal(uint256LJS4piU, BigInt("0"))
		await expect(MarsStakingRewardsNljcAfM.updateReward.call(addressNoGDszi, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressYaqaeDH = accounts[1]
		const addresssAkcXc = accounts[4]
		const addressEkceI5w = accounts[5]
		const MarsStakingRewardsNljcAfM = await MarsStakingRewards.new(addressYaqaeDH, addresssAkcXc, addressEkceI5w, {from: accounts[5]});
		const addressxtc0zQT = accounts[2]
		const uint256CtOEqT = await MarsStakingRewardsNljcAfM.getRewardForDuration.call({from: accounts[3]});
		const uint256tciOv2D = await MarsStakingRewardsNljcAfM.balanceOf.call(addressxtc0zQT, {from: accounts[0]});
		const uint256u1al4Rl = await MarsStakingRewardsNljcAfM.getRewardForDuration.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256CtOEqT, BigInt("0"))
		assert.equal(uint256tciOv2D, BigInt("0"))
		assert.equal(uint256u1al4Rl, BigInt("0"))
	});

	it('test for MarsStakingRewards', async () => {
		const addressOn6OExT = accounts[1]
		const addressu7FAfuf = accounts[4]
		const addressiDx0AuA = accounts[5]
		const MarsStakingRewardsNljcAfM = await MarsStakingRewards.new(addressOn6OExT, addressu7FAfuf, addressiDx0AuA, {from: accounts[5]});
		const uintyTGYdw = BigInt("394")
		const uintRmHXPqj = BigInt("1603")
		const uint2563T01oG = await MarsStakingRewardsNljcAfM.totalSupply.call({from: accounts[1]});
		const uint256u1al4Rl = await MarsStakingRewardsNljcAfM.getRewardForDuration.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256fHK8bEI = await MarsStakingRewardsNljcAfM.notifyRewardAmount.call(uintRmHXPqj, uintyTGYdw, {from: accounts[1]});

		assert.equal(uint2563T01oG, BigInt("0"))
		assert.equal(uint256u1al4Rl, BigInt("0"))
		await expect(MarsStakingRewardsNljcAfM.notifyRewardAmount.call(uintRmHXPqj, uintyTGYdw, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressUpVwm1H = accounts[1]
		const addresskGr5nBv = accounts[4]
		const addressCXYXqja = accounts[5]
		const MarsStakingRewardsNljcAfM = await MarsStakingRewards.new(addressUpVwm1H, addresskGr5nBv, addressCXYXqja, {from: accounts[5]});
		const boolqC52T6p = await MarsStakingRewardsNljcAfM.isOwner.call({from: accounts[2]});
//		await MarsStakingRewardsNljcAfM.renounceOwnership.call({from: accounts[5]});
//		const uint256u1al4Rl = await MarsStakingRewardsNljcAfM.getRewardForDuration.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolqC52T6p, false)
		await expect(MarsStakingRewardsNljcAfM.renounceOwnership.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressoT0yVwz = "0x0000000000000000000000000000000000000001"
		const addressGlpZw1H = accounts[0]
		const addressXQG08KJ = accounts[3]
		const MarsStakingRewardsqglhBoJ = await MarsStakingRewards.new(addressoT0yVwz, addressGlpZw1H, addressXQG08KJ, {from: accounts[2]});
		const addressLTxwqcI = accounts[0]
		const addressDZOxv8p = accounts[1]
		const addressy2sjDcX = "0x0000000000000000000000000000000000000001"
		const uint256E0WvUO = await MarsStakingRewardsqglhBoJ.getRewardForDuration.call({from: accounts[0]});
		const uint256XET9nrT = await MarsStakingRewardsqglhBoJ.earned.call(addressLTxwqcI, {from: accounts[3]});
		const addressPGIxaVe = await MarsStakingRewardsqglhBoJ.setRewardsDistribution.call(addressDZOxv8p, {from: accounts[2]});
		const addressi4vrR4D = await MarsStakingRewardsqglhBoJ.setRewardsDistribution.call(addressy2sjDcX, {from: accounts[2]});
		const boolKVSbyR = await MarsStakingRewardsqglhBoJ.isOwner.call({from: accounts[1]});

		assert.equal(boolKVSbyR, false)
		assert.equal(uint256E0WvUO, BigInt("0"))
		assert.equal(uint256XET9nrT, BigInt("0"))
	});

	it('test for MarsStakingRewards', async () => {
		const addressc9HJB9F = accounts[1]
		const addressZ3In4kC = accounts[4]
		const addresstVNJj5T = accounts[5]
		const MarsStakingRewardsNljcAfM = await MarsStakingRewards.new(addressc9HJB9F, addressZ3In4kC, addresstVNJj5T, {from: accounts[5]});
		const uintI2XCxdU = BigInt("1994")
		const address4YtpZy = accounts[5]
		const addressrSFjhQ0 = accounts[4]
		const addressQIW5u9q = accounts[4]
//		const addressL29shcd = await MarsStakingRewardsNljcAfM.inCaseTokensGetStuck.call(address4YtpZy, uintI2XCxdU, {from: accounts[5]});
//		const uint256tfTLzek = await MarsStakingRewardsNljcAfM.balanceOf.call(addressrSFjhQ0, {from: accounts[0]});
//		const uint256LJS4piU = await MarsStakingRewardsNljcAfM.earned.call(addressQIW5u9q, {from: accounts[2]});

		await expect(MarsStakingRewardsNljcAfM.inCaseTokensGetStuck.call(address4YtpZy, uintI2XCxdU, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressfnMqv9p = accounts[5]
		const addresst8ZhEF = accounts[3]
		const addressxli2s3M = accounts[2]
		const MarsStakingRewardsZKOHczF = await MarsStakingRewards.new(addressfnMqv9p, addresst8ZhEF, addressxli2s3M, {from: accounts[5]});
		const addressLxRj6s = accounts[4]
		const addressdoXDB4r = accounts[2]
		const uintfAhs6gP = BigInt("943")
		const addresst7d1WCY = "0x0000000000000000000000000000000000000001"
		const uintQalI11t = BigInt("226")
		const uintgq7YoEL = BigInt("638")
		const uint256XSFfszM = await MarsStakingRewardsZKOHczF.earned.call(addressLxRj6s, {from: accounts[0]});
		const uint256PmM18m = await MarsStakingRewardsZKOHczF.earned.call(addressdoXDB4r, {from: accounts[2]});
//		const addressuVlVOS = await MarsStakingRewardsZKOHczF.inCaseTokensGetStuck.call(addresst7d1WCY, uintfAhs6gP, {from: accounts[5]});
//		const uint256rb2KQNz = await MarsStakingRewardsZKOHczF.notifyRewardAmount.call(uintgq7YoEL, uintQalI11t, {from: accounts[0]});
//		await MarsStakingRewardsZKOHczF.nonReentrant.call({from: accounts[2]});

		assert.equal(uint256PmM18m, BigInt("0"))
		assert.equal(uint256XSFfszM, BigInt("0"))
		await expect(MarsStakingRewardsZKOHczF.inCaseTokensGetStuck.call(addresst7d1WCY, uintfAhs6gP, {from: accounts[5]})).to.be.rejectedWith(Error);
	});
})