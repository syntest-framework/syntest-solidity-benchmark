const SSTRewards = artifacts.require("SSTRewards");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('SSTRewards', (accounts) => {
	it('test for SSTRewards', async () => {
		const SSTRewardsFaFJu2D = await SSTRewards.new({from: accounts[0]});
		const uintp17umSC = BigInt("385")
//		const uint256NEaSQol = await SSTRewardsFaFJu2D.stake.call(uintp17umSC, {from: accounts[5]});
//		const uint256GVpX8gz = await SSTRewardsFaFJu2D.lastTimeRewardApplicable.call({from: accounts[4]});
//		const uint256bbXiJnA = await SSTRewardsFaFJu2D.lastTimeRewardApplicable.call({from: accounts[4]});

		await expect(SSTRewardsFaFJu2D.stake.call(uintp17umSC, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for SSTRewards', async () => {
		const SSTRewardsw8Dv0s = await SSTRewards.new({from: accounts[2]});
//		await SSTRewardsw8Dv0s.getReward.call({from: accounts[2]});
//		const uint256yF01IYQ = await SSTRewardsw8Dv0s.lastTimeRewardApplicable.call({from: accounts[2]});

		await expect(SSTRewardsw8Dv0s.getReward.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for SSTRewards', async () => {
		const SSTRewardsWzH3Eg = await SSTRewards.new({from: accounts[4]});
		const addressHVXGTDA = accounts[3]
		const addresssISJ9O7 = accounts[0]
		const addressRv6BgQ = accounts[4]
//		const addresshjg6CM2 = await SSTRewardsWzH3Eg.updateReward.call(addressHVXGTDA, {from: accounts[2]});
//		const uint256GkexEsk = await SSTRewardsWzH3Eg.earned.call(addresssISJ9O7, {from: accounts[2]});
//		const uint256DRgOug = await SSTRewardsWzH3Eg.balanceOf.call(addressRv6BgQ, {from: accounts[2]});
//		const uint256jVieuqk = await SSTRewardsWzH3Eg.totalSupply.call({from: accounts[4]});
//		await SSTRewardsWzH3Eg.getReward.call({from: accounts[5]});

		await expect(SSTRewardsWzH3Eg.updateReward.call(addressHVXGTDA, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for SSTRewards', async () => {
		const SSTRewardsHhy5TqY = await SSTRewards.new({from: accounts[0]});
		const uintQOiLfiD = BigInt("1336")
		const addresso62fDMi = accounts[3]
//		const uint256xIppGh = await SSTRewardsHhy5TqY.withdraw.call(uintQOiLfiD, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256kOKmueE = await SSTRewardsHhy5TqY.balanceOf.call(addresso62fDMi, {from: accounts[1]});

		await expect(SSTRewardsHhy5TqY.withdraw.call(uintQOiLfiD, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for SSTRewards', async () => {
		const SSTRewardsU5kAyi = await SSTRewards.new({from: accounts[0]});
//		await SSTRewardsU5kAyi.exit.call({from: accounts[4]});
//		await SSTRewardsU5kAyi.exit.call({from: accounts[0]});
//		const uint256vkTUW5g = await SSTRewardsU5kAyi.totalSupply.call({from: accounts[3]});

		await expect(SSTRewardsU5kAyi.exit.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for SSTRewards', async () => {
		const SSTRewardsw8Dv0s = await SSTRewards.new({from: accounts[2]});
		const uintzAMWNzB = BigInt("1617")
		const address42az4j = accounts[1]
//		await SSTRewardsw8Dv0s.getReward.call({from: accounts[2]});
//		const uint256yF01IYQ = await SSTRewardsw8Dv0s.lastTimeRewardApplicable.call({from: accounts[2]});
//		const uint256HB2ssvF = await SSTRewardsw8Dv0s.notifyRewardAmount.call(uintzAMWNzB, {from: accounts[5]});
//		const addressN6J6WKA = await SSTRewardsw8Dv0s.updateReward.call(address42az4j, {from: accounts[2]});
//		await SSTRewardsw8Dv0s.checkStart.call({from: accounts[1]});

		await expect(SSTRewardsw8Dv0s.getReward.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for SSTRewards', async () => {
		const SSTRewardsZAUaQhu = await SSTRewards.new({from: "0x0000000000000000000000000000000000000001"});
		const uintJv6MVa6 = BigInt("503")
		const uintJCtddm = BigInt("1136")
		const uint256KzynQio = await SSTRewardsZAUaQhu.rewardPerToken.call({from: accounts[4]});
		await SSTRewardsZAUaQhu.getReward.call({from: accounts[1]});
		const uint256NSmh1Ix = await SSTRewardsZAUaQhu.withdraw.call(uintJv6MVa6, {from: accounts[0]});
		const uint256wWmHGJ = await SSTRewardsZAUaQhu.stake.call(uintJCtddm, {from: accounts[1]});
	});
})