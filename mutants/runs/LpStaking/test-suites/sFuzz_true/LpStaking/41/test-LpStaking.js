const LpStaking = artifacts.require("LpStaking");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('LpStaking', (accounts) => {
	it('test for LpStaking', async () => {
		const LpStakingSaRfwNP = await LpStaking.new({from: accounts[5]});
		const addressPzqAGZ7 = accounts[1]
		const addressQAbxZg5 = accounts[0]
		const addressIEBFeet = accounts[4]
		const addresskz0tdoe = accounts[3]
		const uintKuBiUws = BigInt("1637")
		const boolh4ITOdB = false
		const addressGFnMPPi = await LpStakingSaRfwNP.initialize.call(addresskz0tdoe, addressIEBFeet, addressQAbxZg5, addressPzqAGZ7, {from: accounts[4]});
		await LpStakingSaRfwNP.lpRewardRateChanged.call({from: accounts[4]});
		const uint256FPdFD6f = await LpStakingSaRfwNP.stake.call(uintKuBiUws, {from: accounts[2]});
		const boolVHdGb5 = await LpStakingSaRfwNP.setEmergencyStop.call(boolh4ITOdB, {from: accounts[2]});

		await expect(LpStakingSaRfwNP.lpRewardRateChanged.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingeNd9UaG = await LpStaking.new({from: accounts[0]});
		const uintUd5NhVH = BigInt("195")
		const uintAMJ9NQl = BigInt("1053")
		const addressLT0XhYm = accounts[5]
		await LpStakingeNd9UaG.getIncome.call({from: accounts[2]});
		const uint256ojb5oT7 = await LpStakingeNd9UaG.lastTimeRewardApplicable.call({from: accounts[4]});
		const uint256p5ROMZD = await LpStakingeNd9UaG.weiToSatoshi.call(uintUd5NhVH, {from: accounts[2]});
		const uint256TTxIGIo = await LpStakingeNd9UaG.incomePerToken.call({from: accounts[1]});
		await LpStakingeNd9UaG.exit.call({from: accounts[2]});
		const addressg9qJCzq = await LpStakingeNd9UaG.inCaseTokensGetStuck.call(addressLT0XhYm, uintAMJ9NQl, {from: accounts[3]});

		await expect(LpStakingeNd9UaG.getIncome.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingHi6ykM = await LpStaking.new({from: accounts[2]});
		const addressCGXziNA = accounts[1]
		const addressMeM2oQn = accounts[2]
		const uintqwlyXHF = BigInt("820")
		const uint256sOy9Qu = await LpStakingHi6ykM.getUserAccumulatedWithdrawIncome.call(addressCGXziNA, {from: accounts[1]});
		await LpStakingHi6ykM.getReward.call({from: accounts[2]});
		const uint256fmmKlts = await LpStakingHi6ykM.rewardEarned.call(addressMeM2oQn, {from: accounts[0]});
		const uint256coMppFA = await LpStakingHi6ykM.lastTimeRewardApplicable.call({from: accounts[0]});
		const uint256iy6rxTp = await LpStakingHi6ykM.weiToSatoshi.call(uintqwlyXHF, {from: accounts[2]});
		await LpStakingHi6ykM.lpIncomeRateChanged.call({from: accounts[0]});

		assert.equal(uint256sOy9Qu, BigInt("0"))
		await expect(LpStakingHi6ykM.getReward.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingiXeTDlC = await LpStaking.new({from: accounts[1]});
		const addresscjoXgn7 = accounts[3]
		const addressjjBhxbx = await LpStakingiXeTDlC.updateIncome.call(addresscjoXgn7, {from: accounts[2]});
		await LpStakingiXeTDlC.lpRewardRateChanged.call({from: accounts[2]});

		await expect(LpStakingiXeTDlC.updateIncome.call(addresscjoXgn7, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingT7cSGwq = await LpStaking.new({from: "0x0000000000000000000000000000000000000001"});
		const addresswvHYKaP = accounts[0]
		const addresstQltpKX = "0x0000000000000000000000000000000000000001"
		const addressgUfGwPf = accounts[3]
		const booljXJLscX = false
		const uint256Dih1L5f = await LpStakingT7cSGwq.incomeEarned.call(addresswvHYKaP, {from: accounts[4]});
		const addressNArNf5A = await LpStakingT7cSGwq.updateIncome.call(addresstQltpKX, {from: accounts[1]});
		const addressa8bbjrv = await LpStakingT7cSGwq.transferOwnership.call(addressgUfGwPf, {from: accounts[1]});
		const uint256M3iIhMQ = await LpStakingT7cSGwq.lastTimeRewardApplicable.call({from: accounts[5]});
		const boolIvyguH9 = await LpStakingT7cSGwq.setEmergencyStop.call(booljXJLscX, {from: accounts[1]});
	});

	it('test for LpStaking', async () => {
		const LpStakingAzda4xr = await LpStaking.new({from: accounts[1]});
		const uintDIEiEWL = BigInt("1630")
		const addressT08Y66v = accounts[4]
		const uint256P0AuNXZ = await LpStakingAzda4xr.weiToSatoshi.call(uintDIEiEWL, {from: accounts[0]});
		const uint256UNuwI7I = await LpStakingAzda4xr.incomeEarned.call(addressT08Y66v, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256P0AuNXZ, BigInt("0"))
		await expect(LpStakingAzda4xr.incomeEarned.call(addressT08Y66v, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakinguZMl31b = await LpStaking.new({from: accounts[3]});
		const addressWmbn955 = accounts[5]
		const uintMoqJ3Km = BigInt("264")
		const addressUStTtYV = accounts[1]
		const uint2567vhb3c = await LpStakinguZMl31b.rewardEarned.call(addressWmbn955, {from: accounts[4]});
		const uint256fqymXsi = await LpStakinguZMl31b.withdraw.call(uintMoqJ3Km, {from: accounts[0]});
		const uint256Jn9Bcmm = await LpStakinguZMl31b.getUserAccumulatedWithdrawIncome.call(addressUStTtYV, {from: accounts[5]});
		await LpStakinguZMl31b.nonEmergencyStop.call({from: accounts[2]});

		assert.equal(uint2567vhb3c, BigInt("0"))
		await expect(LpStakinguZMl31b.withdraw.call(uintMoqJ3Km, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakinggoXaIfw = await LpStaking.new({from: accounts[0]});
		const addressWZJ07wh = accounts[4]
		const addressiK1D8f6 = accounts[1]
		const boolQz3ct1Y = true
		const addresslxLSwwy = await LpStakinggoXaIfw.transferOwnership.call(addressWZJ07wh, {from: accounts[1]});
		const addressJSa1TkW = await LpStakinggoXaIfw.updateIncome.call(addressiK1D8f6, {from: "0x0000000000000000000000000000000000000001"});
		const uint256dXzalY = await LpStakinggoXaIfw.rewardPerToken.call({from: accounts[0]});
		const boolKXDaSe = await LpStakinggoXaIfw.setEmergencyStop.call(boolQz3ct1Y, {from: accounts[3]});

		await expect(LpStakinggoXaIfw.transferOwnership.call(addressWZJ07wh, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingYylxOks = await LpStaking.new({from: accounts[0]});
		const addressndd9Cw7 = accounts[2]
		const uint256qjmufD = await LpStakingYylxOks.getCurIncomeRate.call({from: accounts[5]});
		await LpStakingYylxOks.exit.call({from: accounts[1]});
		const addressZOnIGWN = await LpStakingYylxOks.transferOwnership.call(addressndd9Cw7, {from: accounts[2]});

		await expect(LpStakingYylxOks.getCurIncomeRate.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakinguZMl31b = await LpStaking.new({from: accounts[3]});
		const addressJcDnzb6 = accounts[5]
		const uintvKBb4qC = BigInt("264")
		await LpStakinguZMl31b.exit.call({from: accounts[1]});
		const uint2567vhb3c = await LpStakinguZMl31b.rewardEarned.call(addressJcDnzb6, {from: accounts[4]});
		const uint256fqymXsi = await LpStakinguZMl31b.withdraw.call(uintvKBb4qC, {from: accounts[0]});

		await expect(LpStakinguZMl31b.exit.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});
})