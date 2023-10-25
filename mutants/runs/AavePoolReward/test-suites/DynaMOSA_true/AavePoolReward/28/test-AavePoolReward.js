const AavePoolReward = artifacts.require("AavePoolReward");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('AavePoolReward', (accounts) => {
	it('test for AavePoolReward', async () => {
		const AavePoolRewardhDjkWqY = await AavePoolReward.new({from: accounts[5]});
		const addressXlMpKuY = accounts[4]
		const uintPs0K3Ml = BigInt("1312")
		const uintDpkWZ2q = BigInt("1611")
		const addressbXOp1ae = accounts[0]
		const addresspbsHBCa = await AavePoolRewardhDjkWqY.dev.call(addressXlMpKuY, {from: accounts[0]});
		const uint256K74WDMx = await AavePoolRewardhDjkWqY.withdraw.call(uintPs0K3Ml, {from: accounts[3]});
		const uint256pYCGS2 = await AavePoolRewardhDjkWqY.withdraw.call(uintDpkWZ2q, {from: accounts[0]});
		const addressLZ5q8aA = await AavePoolRewardhDjkWqY.dev.call(addressbXOp1ae, {from: accounts[2]});

		await expect(AavePoolRewardhDjkWqY.dev.call(addressXlMpKuY, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardOYOsBZ5 = await AavePoolReward.new({from: accounts[1]});
		const uintAW4eA2y = BigInt("699")
		const addressJKgrXAw = accounts[3]
		const uintETGAIQk = BigInt("82")
		const uintGRezLV = BigInt("1788")
		const addresssTnlFlr = accounts[1]
		const uint256gIEFUxZ = await AavePoolRewardOYOsBZ5.withdraw.call(uintAW4eA2y, {from: accounts[2]});
		const uint256MxzunP7 = await AavePoolRewardOYOsBZ5.earned.call(addressJKgrXAw, {from: accounts[0]});
		const uint256APBIBp9 = await AavePoolRewardOYOsBZ5.stake.call(uintETGAIQk, {from: accounts[4]});
		const uint256TzWlZU9 = await AavePoolRewardOYOsBZ5.notifyRewardAmount.call(uintGRezLV, {from: accounts[3]});
		const addressqpmGTS = await AavePoolRewardOYOsBZ5.dev.call(addresssTnlFlr, {from: accounts[3]});
		await AavePoolRewardOYOsBZ5.getReward.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(AavePoolRewardOYOsBZ5.withdraw.call(uintAW4eA2y, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardr9pVuqR = await AavePoolReward.new({from: accounts[1]});
		const uintO16YsuD = BigInt("240")
		const uintHamnUmQ = BigInt("2018")
		const uintfZegCAQ = BigInt("1767")
		const uint256kKFp7N = await AavePoolRewardr9pVuqR.notifyRewardAmount.call(uintO16YsuD, {from: accounts[5]});
		await AavePoolRewardr9pVuqR.getReward.call({from: accounts[2]});
		const uint256auYwKsU = await AavePoolRewardr9pVuqR.notifyRewardAmount.call(uintHamnUmQ, {from: accounts[3]});
		const uint256F0nVCfR = await AavePoolRewardr9pVuqR.withdraw.call(uintfZegCAQ, {from: accounts[1]});

		await expect(AavePoolRewardr9pVuqR.notifyRewardAmount.call(uintO16YsuD, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardBwvIEkY = await AavePoolReward.new({from: accounts[5]});
		const uintSjRTxK = BigInt("291")
		const uint256fMywMC = await AavePoolRewardBwvIEkY.stake.call(uintSjRTxK, {from: accounts[5]});
		const uint256c0tccoN = await AavePoolRewardBwvIEkY.lastTimeRewardApplicable.call({from: accounts[3]});
		const uint256wTSNXIb = await AavePoolRewardBwvIEkY.lastTimeRewardApplicable.call({from: accounts[1]});

		await expect(AavePoolRewardBwvIEkY.stake.call(uintSjRTxK, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardtwRoCIm = await AavePoolReward.new({from: accounts[5]});
		const addressxcCu4d = accounts[6]
		const uint256HTP84lc = await AavePoolRewardtwRoCIm.rewardPerToken.call({from: accounts[0]});
		await AavePoolRewardtwRoCIm.exit.call({from: accounts[3]});
		const uint256UnNk99y = await AavePoolRewardtwRoCIm.earned.call(addressxcCu4d, {from: accounts[1]});

		assert.equal(uint256HTP84lc, BigInt("0"))
		await expect(AavePoolRewardtwRoCIm.exit.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardhDjkWqY = await AavePoolReward.new({from: accounts[5]});
		const addressxza3xIh = accounts[0]
		const addressbDArxc9 = accounts[1]
		const uintOtlUSo0 = BigInt("135")
		const uintue0yvl6 = BigInt("1611")
		const addressoEW2LFg = accounts[1]
		await AavePoolRewardhDjkWqY.getReward.call({from: accounts[2]});
		const addressSOTju7c = await AavePoolRewardhDjkWqY.updateReward.call(addressxza3xIh, {from: accounts[3]});
		const uint256dmruNoW = await AavePoolRewardhDjkWqY.earned.call(addressbDArxc9, {from: accounts[2]});
		const uint256K74WDMx = await AavePoolRewardhDjkWqY.withdraw.call(uintOtlUSo0, {from: accounts[3]});
		const uint256pYCGS2 = await AavePoolRewardhDjkWqY.withdraw.call(uintue0yvl6, {from: accounts[0]});
		const addressLZ5q8aA = await AavePoolRewardhDjkWqY.dev.call(addressoEW2LFg, {from: accounts[2]});

		await expect(AavePoolRewardhDjkWqY.getReward.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardVBfwUYG = await AavePoolReward.new({from: "0x0000000000000000000000000000000000000001"});
		const addressV87TwR = "0x0000000000000000000000000000000000000001"
		const uintB4LXUmz = BigInt("1209")
		const uint256Z0arFX = await AavePoolRewardVBfwUYG.rewardPerToken.call({from: accounts[4]});
		const addressNzgG7Vl = await AavePoolRewardVBfwUYG.dev.call(addressV87TwR, {from: accounts[5]});
		await AavePoolRewardVBfwUYG.getReward.call({from: accounts[4]});
		const uint256dJvVdzT = await AavePoolRewardVBfwUYG.stake.call(uintB4LXUmz, {from: accounts[2]});
		const uint256ML1waP = await AavePoolRewardVBfwUYG.rewardPerToken.call({from: accounts[4]});
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewards2HZFAK = await AavePoolReward.new({from: accounts[5]});
		const uintsrTwzFR = BigInt("242")
		const address7uWntN = accounts[0]
		const uintyrlTdQ = BigInt("1812")
		await AavePoolRewards2HZFAK.getReward.call({from: accounts[3]});
		const uint256nZt3xZH = await AavePoolRewards2HZFAK.notifyRewardAmount.call(uintsrTwzFR, {from: accounts[5]});
		const addressrpTzm0G = await AavePoolRewards2HZFAK.dev.call(address7uWntN, {from: accounts[0]});
		const uint256wDJDFDM = await AavePoolRewards2HZFAK.notifyRewardAmount.call(uintyrlTdQ, {from: accounts[0]});
		const uint256QRtRJCs = await AavePoolRewards2HZFAK.lastTimeRewardApplicable.call({from: accounts[1]});

		await expect(AavePoolRewards2HZFAK.getReward.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardW8Wizjd = await AavePoolReward.new({from: accounts[0]});
		const addresscOUNlfl = accounts[1]
		const addressYaenjv = accounts[1]
		const addresslH1sNYD = accounts[2]
		const addressg0gkzh = accounts[0]
		await AavePoolRewardW8Wizjd.getReward.call({from: accounts[3]});
		const uint256UG09EG2 = await AavePoolRewardW8Wizjd.earned.call(addresscOUNlfl, {from: accounts[0]});
		const addressCaU3vHI = await AavePoolRewardW8Wizjd.dev.call(addressYaenjv, {from: accounts[0]});
		const uint256TBrYi3U = await AavePoolRewardW8Wizjd.rewardPerToken.call({from: accounts[1]});
		const uint256Mvy6Ypr = await AavePoolRewardW8Wizjd.earned.call(addresslH1sNYD, {from: accounts[2]});
		const addressI0ZQKT = await AavePoolRewardW8Wizjd.dev.call(addressg0gkzh, {from: accounts[4]});
		const uint256YplTEpy = await AavePoolRewardW8Wizjd.lastTimeRewardApplicable.call({from: accounts[1]});

		await expect(AavePoolRewardW8Wizjd.getReward.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});
})