const JGNRewards = artifacts.require("JGNRewards");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('JGNRewards', (accounts) => {
	it('test for JGNRewards', async () => {
		const JGNRewards6iIoqF = await JGNRewards.new({from: accounts[4]});
		const uintGIpsaQq = BigInt("33")
		const uintGno2SQx = BigInt("1338")
		const uint256ezDJfD2 = await JGNRewards6iIoqF.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256TmEDqqX = await JGNRewards6iIoqF.totalSupply.call({from: accounts[4]});
//		await JGNRewards6iIoqF.checkStart.call({from: accounts[5]});
//		const uint256YMMSlEI = await JGNRewards6iIoqF.withdraw.call(uintGIpsaQq, {from: accounts[2]});
//		const uint256s28qimx = await JGNRewards6iIoqF.stake.call(uintGno2SQx, {from: accounts[1]});

		assert.equal(uint256TmEDqqX, BigInt("0"))
		assert.equal(uint256ezDJfD2, BigInt("0"))
		await expect(JGNRewards6iIoqF.checkStart.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for JGNRewards', async () => {
		const JGNRewardsLeoh50S = await JGNRewards.new({from: accounts[0]});
		const uintHeHUk2H = BigInt("1625")
		const uintHP5ISH = BigInt("262")
		const addressAXAyeWS = accounts[0]
//		await JGNRewardsLeoh50S.getReward.call({from: accounts[0]});
//		const uint256tFN69I = await JGNRewardsLeoh50S.withdraw.call(uintHeHUk2H, {from: accounts[0]});
//		const uint256yHGrrdy = await JGNRewardsLeoh50S.stake.call(uintHP5ISH, {from: accounts[0]});
//		const addressOG2JCBz = await JGNRewardsLeoh50S.updateReward.call(addressAXAyeWS, {from: accounts[1]});

		await expect(JGNRewardsLeoh50S.getReward.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for JGNRewards', async () => {
		const JGNRewardsW19mHM = await JGNRewards.new({from: accounts[4]});
		const uintELg2buk = BigInt("91")
		const uintQN2ZXqm = BigInt("1131")
		const uintTyWA9J = BigInt("5")
		const uintJpyTLW = BigInt("1854")
		const uintO014GG2 = BigInt("1988")
		const uintpzuR3h7 = BigInt("1385")
//		const uint256vWUrvag = await JGNRewardsW19mHM.stake.call(uintELg2buk, {from: accounts[4]});
//		const uint256daTdT0Z = await JGNRewardsW19mHM.withdraw.call(uintQN2ZXqm, {from: accounts[0]});
//		const uint256ORmo0Z6 = await JGNRewardsW19mHM.stake.call(uintTyWA9J, {from: accounts[4]});
//		const uint256L0AlNjp = await JGNRewardsW19mHM.withdraw.call(uintJpyTLW, {from: accounts[1]});
//		const uint256K6oKniN = await JGNRewardsW19mHM.stake.call(uintO014GG2, {from: accounts[0]});
//		const uint256P9YUWzo = await JGNRewardsW19mHM.notifyRewardAmount.call(uintpzuR3h7, {from: "0x0000000000000000000000000000000000000001"});

		await expect(JGNRewardsW19mHM.stake.call(uintELg2buk, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for JGNRewards', async () => {
		const JGNRewardsSBeoPrO = await JGNRewards.new({from: accounts[1]});
		const uintQit6wb = BigInt("493")
		const addressACzrL1T = accounts[0]
		const addressG0MxpZJ = accounts[4]
//		const uint256twA3O8k = await JGNRewardsSBeoPrO.notifyRewardAmount.call(uintQit6wb, {from: accounts[0]});
//		const uint256hZKuZRF = await JGNRewardsSBeoPrO.lastTimeRewardApplicable.call({from: accounts[4]});
//		await JGNRewardsSBeoPrO.checkStart.call({from: accounts[2]});
//		const uint256UyBPgo = await JGNRewardsSBeoPrO.balanceOf.call(addressACzrL1T, {from: accounts[2]});
//		const uint256qaegNoY = await JGNRewardsSBeoPrO.balanceOf.call(addressG0MxpZJ, {from: accounts[2]});

		await expect(JGNRewardsSBeoPrO.notifyRewardAmount.call(uintQit6wb, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for JGNRewards', async () => {
		const JGNRewardsLeoh50S = await JGNRewards.new({from: accounts[0]});
		const addressThPFW7j = accounts[0]
//		await JGNRewardsLeoh50S.exit.call({from: accounts[2]});
//		await JGNRewardsLeoh50S.getReward.call({from: accounts[0]});
//		const uint256RtY9sR9 = await JGNRewardsLeoh50S.totalSupply.call({from: accounts[0]});
//		const addressOG2JCBz = await JGNRewardsLeoh50S.updateReward.call(addressThPFW7j, {from: accounts[1]});

		await expect(JGNRewardsLeoh50S.exit.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for JGNRewards', async () => {
		const JGNRewardsMB5nIRK = await JGNRewards.new({from: "0x0000000000000000000000000000000000000001"});
		const uintzeWVIXP = BigInt("1723")
		const uintjil3cX2 = BigInt("542")
		const uint256BRofBBE = await JGNRewardsMB5nIRK.stake.call(uintzeWVIXP, {from: accounts[4]});
		const uint256QDQcOS = await JGNRewardsMB5nIRK.rewardPerToken.call({from: accounts[3]});
		await JGNRewardsMB5nIRK.checkStart.call({from: accounts[1]});
		const uint256ejEqeck = await JGNRewardsMB5nIRK.withdraw.call(uintjil3cX2, {from: accounts[0]});
	});
})