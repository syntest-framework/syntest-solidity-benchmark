const AavePoolReward = artifacts.require("AavePoolReward");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('AavePoolReward', (accounts) => {
	it('test for AavePoolReward', async () => {
		const AavePoolRewardZsnACGN = await AavePoolReward.new({from: accounts[2]});
//		await AavePoolRewardZsnACGN.exit.call({from: accounts[1]});
//		const uint256t2p888G = await AavePoolRewardZsnACGN.lastTimeRewardApplicable.call({from: accounts[4]});

		await expect(AavePoolRewardZsnACGN.exit.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardBjCXzFG = await AavePoolReward.new({from: "0x0000000000000000000000000000000000000001"});
		const uintgqZAV9a = BigInt("1071")
		const uint256XnXiFko = await AavePoolRewardBjCXzFG.stake.call(uintgqZAV9a, {from: accounts[2]});
		const uint256s6SlYhW = await AavePoolRewardBjCXzFG.lastTimeRewardApplicable.call({from: "0x0000000000000000000000000000000000000001"});
		await AavePoolRewardBjCXzFG.getReward.call({from: accounts[4]});
		const uint256VPnbLKV = await AavePoolRewardBjCXzFG.rewardPerToken.call({from: accounts[0]});
		await AavePoolRewardBjCXzFG.exit.call({from: accounts[3]});
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardqUlpDIK = await AavePoolReward.new({from: accounts[0]});
//		await AavePoolRewardqUlpDIK.getReward.call({from: accounts[3]});
//		const uint256icYwy2A = await AavePoolRewardqUlpDIK.rewardPerToken.call({from: accounts[0]});
//		await AavePoolRewardqUlpDIK.getReward.call({from: accounts[1]});
//		await AavePoolRewardqUlpDIK.getReward.call({from: accounts[0]});

		await expect(AavePoolRewardqUlpDIK.getReward.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardGWYLtf = await AavePoolReward.new({from: accounts[1]});
		const uint3Fg3dt = BigInt("713")
//		const uint256jqrpGu0 = await AavePoolRewardGWYLtf.notifyRewardAmount.call(uint3Fg3dt, {from: accounts[2]});
//		const uint256v3l4us = await AavePoolRewardGWYLtf.lastTimeRewardApplicable.call({from: accounts[3]});
//		const uint256MUUbETV = await AavePoolRewardGWYLtf.rewardPerToken.call({from: accounts[3]});

		await expect(AavePoolRewardGWYLtf.notifyRewardAmount.call(uint3Fg3dt, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardPTixQHm = await AavePoolReward.new({from: accounts[4]});
		const uintr7q1Wl = BigInt("1909")
		const uintnP5lj5M = BigInt("921")
//		await AavePoolRewardPTixQHm.getReward.call({from: accounts[0]});
//		const uint256i1A2RQ6 = await AavePoolRewardPTixQHm.withdraw.call(uintr7q1Wl, {from: accounts[0]});
//		const uint256WbrXePM = await AavePoolRewardPTixQHm.withdraw.call(uintnP5lj5M, {from: accounts[2]});
//		const uint256wKlsiFg = await AavePoolRewardPTixQHm.lastTimeRewardApplicable.call({from: accounts[4]});
//		const uint256FdhTamK = await AavePoolRewardPTixQHm.rewardPerToken.call({from: accounts[5]});
//		await AavePoolRewardPTixQHm.exit.call({from: accounts[0]});

		await expect(AavePoolRewardPTixQHm.getReward.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardLgIsg5o = await AavePoolReward.new({from: accounts[2]});
		const addressRPzeDXm = accounts[0]
		const uintaYnE9Rh = BigInt("1220")
		const uintXFnAol = BigInt("1639")
		const addressEbBGivL = accounts[0]
//		const addressVSlGvpF = await AavePoolRewardLgIsg5o.dev.call(addressRPzeDXm, {from: accounts[3]});
//		const uint256dBmhm8R = await AavePoolRewardLgIsg5o.withdraw.call(uintaYnE9Rh, {from: accounts[5]});
//		const uint256kx3NLW = await AavePoolRewardLgIsg5o.lastTimeRewardApplicable.call({from: accounts[3]});
//		const uint256VwfzQ6Y = await AavePoolRewardLgIsg5o.lastTimeRewardApplicable.call({from: accounts[4]});
//		const uint256bfC4ftX = await AavePoolRewardLgIsg5o.withdraw.call(uintXFnAol, {from: accounts[3]});
//		const addresszDjG3Yq = await AavePoolRewardLgIsg5o.dev.call(addressEbBGivL, {from: accounts[4]});

		await expect(AavePoolRewardLgIsg5o.dev.call(addressRPzeDXm, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardqUlpDIK = await AavePoolReward.new({from: accounts[0]});
		const uintDFsoG4 = BigInt("1497")
		const addressATfgwb = accounts[3]
		const addresslcvDEXX = accounts[0]
//		await AavePoolRewardqUlpDIK.getReward.call({from: accounts[3]});
//		const uint256icYwy2A = await AavePoolRewardqUlpDIK.rewardPerToken.call({from: accounts[0]});
//		await AavePoolRewardqUlpDIK.getReward.call({from: accounts[1]});
//		const uint256BhsJaF1 = await AavePoolRewardqUlpDIK.stake.call(uintDFsoG4, {from: accounts[2]});
//		const uint2569bPsw4 = await AavePoolRewardqUlpDIK.earned.call(addressATfgwb, {from: accounts[5]});
//		await AavePoolRewardqUlpDIK.getReward.call({from: accounts[0]});
//		const addressDFIu27q = await AavePoolRewardqUlpDIK.dev.call(addresslcvDEXX, {from: accounts[0]});

		await expect(AavePoolRewardqUlpDIK.getReward.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardqUlpDIK = await AavePoolReward.new({from: accounts[0]});
		const uintRooUUfF = BigInt("1643")
//		await AavePoolRewardqUlpDIK.getReward.call({from: accounts[3]});
//		const uint256QVNxZak = await AavePoolRewardqUlpDIK.notifyRewardAmount.call(uintRooUUfF, {from: accounts[0]});
//		const uint256icYwy2A = await AavePoolRewardqUlpDIK.rewardPerToken.call({from: accounts[0]});
//		await AavePoolRewardqUlpDIK.getReward.call({from: accounts[0]});

		await expect(AavePoolRewardqUlpDIK.getReward.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardqUlpDIK = await AavePoolReward.new({from: accounts[0]});
		const addressrLsiK6 = accounts[3]
//		await AavePoolRewardqUlpDIK.getReward.call({from: accounts[3]});
//		const addressDcBSgRz = await AavePoolRewardqUlpDIK.updateReward.call(addressrLsiK6, {from: accounts[2]});

		await expect(AavePoolRewardqUlpDIK.getReward.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});
})