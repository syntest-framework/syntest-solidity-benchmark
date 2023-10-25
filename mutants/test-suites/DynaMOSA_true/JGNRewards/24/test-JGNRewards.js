const JGNRewards = artifacts.require("JGNRewards");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('JGNRewards', (accounts) => {
	it('test for JGNRewards', async () => {
		const JGNRewardsDFzwiyM = await JGNRewards.new({from: accounts[4]});
		const addressg1KDJnp = "0x0000000000000000000000000000000000000001"
//		const addressFeSHxk = await JGNRewardsDFzwiyM.updateReward.call(addressg1KDJnp, {from: accounts[4]});
//		const uint256TnldnKH = await JGNRewardsDFzwiyM.lastTimeRewardApplicable.call({from: accounts[4]});

		await expect(JGNRewardsDFzwiyM.updateReward.call(addressg1KDJnp, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for JGNRewards', async () => {
		const JGNRewardsW41hMvG = await JGNRewards.new({from: accounts[5]});
		const addressmxzM5uD = accounts[0]
		const uintybmVqMY = BigInt("655")
		const uintv6KEZYh = BigInt("282")
		const uint256m37e4GH = await JGNRewardsW41hMvG.earned.call(addressmxzM5uD, {from: accounts[3]});
//		const uint256TmhknTN = await JGNRewardsW41hMvG.withdraw.call(uintybmVqMY, {from: accounts[3]});
//		const uint256LTdsccQ = await JGNRewardsW41hMvG.withdraw.call(uintv6KEZYh, {from: accounts[3]});
//		await JGNRewardsW41hMvG.exit.call({from: accounts[3]});

		assert.equal(uint256m37e4GH, BigInt("0"))
		await expect(JGNRewardsW41hMvG.withdraw.call(uintybmVqMY, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for JGNRewards', async () => {
		const JGNRewardsxHwkjnq = await JGNRewards.new({from: accounts[0]});
		const uintzvrBCfv = BigInt("113")
//		await JGNRewardsxHwkjnq.getReward.call({from: accounts[2]});
//		const uint256z6IG2aG = await JGNRewardsxHwkjnq.stake.call(uintzvrBCfv, {from: "0x0000000000000000000000000000000000000001"});

		await expect(JGNRewardsxHwkjnq.getReward.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for JGNRewards', async () => {
		const JGNRewardsJKjV69S = await JGNRewards.new({from: accounts[2]});
		const uintQeEH8lG = BigInt("824")
		const uintYott2N9 = BigInt("1122")
		const addressHS5kBQ3 = accounts[0]
		const addressIorZPLV = accounts[4]
		const uintGeZi9vE = BigInt("29")
//		const uint256zDE2pA = await JGNRewardsJKjV69S.notifyRewardAmount.call(uintQeEH8lG, {from: accounts[3]});
//		const uint256B6ZKem5 = await JGNRewardsJKjV69S.withdraw.call(uintYott2N9, {from: accounts[1]});
//		const uint256O44B8Y = await JGNRewardsJKjV69S.balanceOf.call(addressHS5kBQ3, {from: accounts[1]});
//		const addresscX6USSV = await JGNRewardsJKjV69S.updateReward.call(addressIorZPLV, {from: accounts[5]});
//		const uint256eng0UMl = await JGNRewardsJKjV69S.stake.call(uintGeZi9vE, {from: accounts[0]});
//		await JGNRewardsJKjV69S.getReward.call({from: accounts[3]});

		await expect(JGNRewardsJKjV69S.notifyRewardAmount.call(uintQeEH8lG, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for JGNRewards', async () => {
		const JGNRewardsyt9eIhR = await JGNRewards.new({from: accounts[5]});
		const addresssBWjIV = accounts[4]
//		await JGNRewardsyt9eIhR.exit.call({from: accounts[1]});
//		const uint256Fwf59mj = await JGNRewardsyt9eIhR.balanceOf.call(addresssBWjIV, {from: accounts[3]});

		await expect(JGNRewardsyt9eIhR.exit.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for JGNRewards', async () => {
		const JGNRewardsrlaN3x2 = await JGNRewards.new({from: "0x0000000000000000000000000000000000000001"});
		const uintahLFMMz = BigInt("289")
		await JGNRewardsrlaN3x2.exit.call({from: accounts[2]});
		const uint2561H1eWE = await JGNRewardsrlaN3x2.stake.call(uintahLFMMz, {from: accounts[3]});
		await JGNRewardsrlaN3x2.checkStart.call({from: accounts[2]});
	});
})