const LpStaking = artifacts.require("LpStaking");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('LpStaking', (accounts) => {
	it('test for LpStaking', async () => {
		const LpStakingTGfQGmY = await LpStaking.new({from: accounts[4]});
		const uintlUXip4m = BigInt("1372")
		const addressLDrCGLv = accounts[0]
//		await LpStakingTGfQGmY.nonEmergencyStop.call({from: accounts[4]});
//		const uint256RFc4tlf = await LpStakingTGfQGmY.weiToSatoshi.call(uintlUXip4m, {from: accounts[1]});
//		const uint256y4oYZdC = await LpStakingTGfQGmY.rewardEarned.call(addressLDrCGLv, {from: "0x0000000000000000000000000000000000000001"});
//		await LpStakingTGfQGmY.lpRewardRateChanged.call({from: accounts[4]});

		await expect(LpStakingTGfQGmY.nonEmergencyStop.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingkRTPtUy = await LpStaking.new({from: accounts[3]});
//		await LpStakingkRTPtUy.getReward.call({from: accounts[4]});
//		await LpStakingkRTPtUy.nonReentrant.call({from: accounts[2]});

		await expect(LpStakingkRTPtUy.getReward.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingbqto6kP = await LpStaking.new({from: accounts[1]});
		const addresshTBtVVg = accounts[3]
		const addressTvATtws = accounts[1]
		const addressQdMQejp = "0x0000000000000000000000000000000000000001"
		const addressJVzn2b = accounts[5]
		const addressivjGhkr = accounts[0]
		const uintngloEwR = BigInt("362")
		const addressrFTbjwj = accounts[4]
//		const addressQw2Ja8p = await LpStakingbqto6kP.transferOwnership.call(addresshTBtVVg, {from: accounts[1]});
//		await LpStakingbqto6kP.getIncome.call({from: accounts[0]});
//		const addressjFvcTHk = await LpStakingbqto6kP.initialize.call(addressivjGhkr, addressJVzn2b, addressQdMQejp, addressTvATtws, {from: accounts[4]});
//		const uint256Fv7Qmva = await LpStakingbqto6kP.weiToSatoshi.call(uintngloEwR, {from: accounts[2]});
//		const uint256zfubmAf = await LpStakingbqto6kP.incomeEarned.call(addressrFTbjwj, {from: accounts[3]});

		await expect(LpStakingbqto6kP.transferOwnership.call(addresshTBtVVg, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingVJPFOjQ = await LpStaking.new({from: "0x0000000000000000000000000000000000000001"});
		const byteMHVXvKV = "0x01021f13191e031d161d081d18081d13090e0d0b09050e0e090d01081f161e14"
		const bytekSqgQim = "0x03100d1105050c0b1010121d0b081d100c01170f1f1b13011e081809040c0c1f"
		const uintPP3P0zT = BigInt("34")
		const uintG6UnsEy = BigInt("1975")
		const uintwbVJ6m = BigInt("737")
		const uint256MaJO6vQ = await LpStakingVJPFOjQ.stakeWithPermit.call(uintwbVJ6m, uintG6UnsEy, uintPP3P0zT, bytekSqgQim, byteMHVXvKV, {from: accounts[3]});
		const uint256P2pQHlE = await LpStakingVJPFOjQ.rewardPerToken.call({from: accounts[4]});
	});

	it('test for LpStaking', async () => {
		const LpStakingBcK3lnB = await LpStaking.new({from: accounts[3]});
		const addressTbBkpAM = "0x0000000000000000000000000000000000000001"
		const addressFf4prb = accounts[3]
		const byteZsSOjsG = "0x17090715021d021a09131e09080510190709111a100a00130c070a1e06160414"
		const byteuOP8MEi = "0x1407140b1f1a08150d03031710091107130817100e1d19161900111802100616"
		const uintV9GGRbW = BigInt("47")
		const uintH4l6Izd = BigInt("1110")
		const uintu38s1eL = BigInt("297")
		const boolVxn7U38 = false
//		const uint256J45s9ug = await LpStakingBcK3lnB.incomeEarned.call(addressTbBkpAM, {from: accounts[3]});
//		const uint256jHQhZAX = await LpStakingBcK3lnB.incomePerToken.call({from: accounts[1]});
//		const uint256EptqkQS = await LpStakingBcK3lnB.getUserAccumulatedWithdrawIncome.call(addressFf4prb, {from: accounts[4]});
//		const uint256CibW5cF = await LpStakingBcK3lnB.stakeWithPermit.call(uintu38s1eL, uintH4l6Izd, uintV9GGRbW, byteuOP8MEi, byteZsSOjsG, {from: accounts[4]});
//		const booliWUuYzo = await LpStakingBcK3lnB.setEmergencyStop.call(boolVxn7U38, {from: accounts[4]});

		await expect(LpStakingBcK3lnB.incomeEarned.call(addressTbBkpAM, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingsYFUffq = await LpStaking.new({from: accounts[2]});
		const uintyMq6Haz = BigInt("492")
		const uint256IuvbkR8 = await LpStakingsYFUffq.rewardPerToken.call({from: accounts[0]});
		const uint256qxFx7TN = await LpStakingsYFUffq.weiToSatoshi.call(uintyMq6Haz, {from: accounts[1]});

		assert.equal(uint256IuvbkR8, BigInt("0"))
		assert.equal(uint256qxFx7TN, BigInt("0"))
	});

	it('test for LpStaking', async () => {
		const LpStakingsYFUffq = await LpStaking.new({from: accounts[2]});
		const addressZlHf8JS = accounts[3]
		const uintAmaZxng = BigInt("492")
		const uint256sSKoNKq = await LpStakingsYFUffq.getUserAccumulatedWithdrawIncome.call(addressZlHf8JS, {from: accounts[3]});
//		await LpStakingsYFUffq.getIncome.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256IuvbkR8 = await LpStakingsYFUffq.rewardPerToken.call({from: accounts[0]});
//		const uint256qxFx7TN = await LpStakingsYFUffq.weiToSatoshi.call(uintAmaZxng, {from: accounts[1]});

		assert.equal(uint256sSKoNKq, BigInt("0"))
		await expect(LpStakingsYFUffq.getIncome.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingsYFUffq = await LpStaking.new({from: accounts[2]});
		const uintA1tZ6Fl = BigInt("492")
		const addressONI8xKi = "0x0000000000000000000000000000000000000001"
		const uint256IuvbkR8 = await LpStakingsYFUffq.rewardPerToken.call({from: accounts[0]});
//		await LpStakingsYFUffq.exit.call({from: accounts[3]});
//		const uint256qxFx7TN = await LpStakingsYFUffq.weiToSatoshi.call(uintA1tZ6Fl, {from: accounts[1]});
//		const addressc4rnMUK = await LpStakingsYFUffq.transferOwnership.call(addressONI8xKi, {from: accounts[2]});

		assert.equal(uint256IuvbkR8, BigInt("0"))
		await expect(LpStakingsYFUffq.exit.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingsYFUffq = await LpStaking.new({from: accounts[2]});
		const addresscUCeNJA = accounts[0]
		const addressLs7NKIG = accounts[2]
		const addressiJz9ukz = accounts[3]
		const addresscziBbdP = accounts[2]
		const uintF6Svw2 = BigInt("492")
		const uint256IuvbkR8 = await LpStakingsYFUffq.rewardPerToken.call({from: accounts[0]});
		const uint256e8H8sFT = await LpStakingsYFUffq.rewardPerToken.call({from: accounts[4]});
		const addressQqYJjPc = await LpStakingsYFUffq.initialize.call(addresscziBbdP, addressiJz9ukz, addressLs7NKIG, addresscUCeNJA, {from: accounts[4]});
		const uint256qxFx7TN = await LpStakingsYFUffq.weiToSatoshi.call(uintF6Svw2, {from: accounts[1]});

		assert.equal(uint256IuvbkR8, BigInt("0"))
		assert.equal(uint256e8H8sFT, BigInt("0"))
		assert.equal(uint256qxFx7TN, BigInt("0"))
	});

	it('test for LpStaking', async () => {
		const LpStakingsYFUffq = await LpStaking.new({from: accounts[2]});
		const uint256IuvbkR8 = await LpStakingsYFUffq.rewardPerToken.call({from: accounts[0]});
//		const uint256My9M932 = await LpStakingsYFUffq.getCurIncomeRate.call({from: accounts[1]});

		assert.equal(uint256IuvbkR8, BigInt("0"))
		await expect(LpStakingsYFUffq.getCurIncomeRate.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakinguMzBz4z = await LpStaking.new({from: accounts[4]});
		const addresspkgjUYe = accounts[1]
		const uint256QHJXf1S = await LpStakinguMzBz4z.rewardEarned.call(addresspkgjUYe, {from: accounts[4]});
//		const uint256e56cgdU = await LpStakinguMzBz4z.incomePerToken.call({from: accounts[3]});

		assert.equal(uint256QHJXf1S, BigInt("0"))
		await expect(LpStakinguMzBz4z.incomePerToken.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakinguMzBz4z = await LpStaking.new({from: accounts[4]});
		const addressb3X7qsw = accounts[2]
		const address4e5eLb = accounts[3]
		const addressn1InYMS = "0x0000000000000000000000000000000000000001"
		const addresssrrsrkn = accounts[4]
		const addressxmKMlaQ = accounts[4]
		const addressiiw0ThA = accounts[3]
		const uint256QHJXf1S = await LpStakinguMzBz4z.rewardEarned.call(addressb3X7qsw, {from: accounts[4]});
//		await LpStakinguMzBz4z.lpRewardRateChanged.call({from: accounts[2]});
//		const addressD8qY4Co = await LpStakinguMzBz4z.updateIncome.call(address4e5eLb, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256e56cgdU = await LpStakinguMzBz4z.incomePerToken.call({from: accounts[3]});
//		const addressi29nFEo = await LpStakinguMzBz4z.initialize.call(addressiiw0ThA, addressxmKMlaQ, addresssrrsrkn, addressn1InYMS, {from: accounts[4]});

		assert.equal(uint256QHJXf1S, BigInt("0"))
		await expect(LpStakinguMzBz4z.lpRewardRateChanged.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});
})