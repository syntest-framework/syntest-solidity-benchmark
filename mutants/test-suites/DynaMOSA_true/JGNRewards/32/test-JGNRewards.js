const JGNRewards = artifacts.require("JGNRewards");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('JGNRewards', (accounts) => {
	it('test for JGNRewards', async () => {
		const JGNRewardsVbqbpRh = await JGNRewards.new({from: accounts[1]});
		const uintXdosu7k = BigInt("1141")
		const addressRZX9kA = accounts[4]
		const uintCHHHhM9 = BigInt("229")
//		const uint256O0k2KNV = await JGNRewardsVbqbpRh.stake.call(uintXdosu7k, {from: accounts[1]});
//		await JGNRewardsVbqbpRh.checkStart.call({from: accounts[4]});
//		await JGNRewardsVbqbpRh.getReward.call({from: accounts[1]});
//		const uint256H9e5I32 = await JGNRewardsVbqbpRh.balanceOf.call(addressRZX9kA, {from: accounts[2]});
//		await JGNRewardsVbqbpRh.getReward.call({from: accounts[5]});
//		const uint256D7Q4R8e = await JGNRewardsVbqbpRh.notifyRewardAmount.call(uintCHHHhM9, {from: accounts[1]});

		await expect(JGNRewardsVbqbpRh.stake.call(uintXdosu7k, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for JGNRewards', async () => {
		const JGNRewardsqKwiqBw = await JGNRewards.new({from: accounts[0]});
		const uintS3UwhqH = BigInt("367")
		const uintOq7RBqy = BigInt("945")
		const addressJMzlvvr = accounts[2]
		const uintHW4oFy4 = BigInt("1463")
		const addressBx8lbpc = accounts[0]
//		const uint256auJe8RR = await JGNRewardsqKwiqBw.withdraw.call(uintS3UwhqH, {from: accounts[2]});
//		const uint256qdfwQ6b = await JGNRewardsqKwiqBw.withdraw.call(uintOq7RBqy, {from: accounts[4]});
//		const uint256NTIyYY = await JGNRewardsqKwiqBw.earned.call(addressJMzlvvr, {from: accounts[3]});
//		const uint256nodB3wr = await JGNRewardsqKwiqBw.stake.call(uintHW4oFy4, {from: accounts[0]});
//		const uint256SJJ4ozh = await JGNRewardsqKwiqBw.earned.call(addressBx8lbpc, {from: accounts[5]});

		await expect(JGNRewardsqKwiqBw.withdraw.call(uintS3UwhqH, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for JGNRewards', async () => {
		const JGNRewardsBBlQar2 = await JGNRewards.new({from: accounts[4]});
		const addresssRz0o96 = accounts[4]
		const uint256dq9OkyA = await JGNRewardsBBlQar2.balanceOf.call(addresssRz0o96, {from: accounts[0]});
//		await JGNRewardsBBlQar2.getReward.call({from: accounts[1]});
//		await JGNRewardsBBlQar2.checkStart.call({from: accounts[0]});
//		await JGNRewardsBBlQar2.exit.call({from: accounts[0]});
//		await JGNRewardsBBlQar2.getReward.call({from: accounts[2]});

		assert.equal(uint256dq9OkyA, BigInt("0"))
		await expect(JGNRewardsBBlQar2.getReward.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for JGNRewards', async () => {
		const JGNRewardshMrQcC = await JGNRewards.new({from: "0x0000000000000000000000000000000000000001"});
		const addressO52JIMY = accounts[4]
		const addressuHPEbWd = await JGNRewardshMrQcC.updateReward.call(addressO52JIMY, {from: accounts[3]});
		const uint256R01oFNK = await JGNRewardshMrQcC.totalSupply.call({from: accounts[0]});
	});

	it('test for JGNRewards', async () => {
		const JGNRewardspfrz595 = await JGNRewards.new({from: accounts[2]});
		const addressWqwfcjn = accounts[6]
		const uintd1aIH9o = BigInt("530")
		const uintSgj7oF4 = BigInt("114")
		const uint256bHKEV0w = await JGNRewardspfrz595.balanceOf.call(addressWqwfcjn, {from: accounts[1]});
//		const uint256JPmwu7l = await JGNRewardspfrz595.notifyRewardAmount.call(uintd1aIH9o, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256g1ZhF48 = await JGNRewardspfrz595.stake.call(uintSgj7oF4, {from: "0x0000000000000000000000000000000000000001"});
//		await JGNRewardspfrz595.checkStart.call({from: accounts[2]});

		assert.equal(uint256bHKEV0w, BigInt("0"))
		await expect(JGNRewardspfrz595.notifyRewardAmount.call(uintd1aIH9o, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for JGNRewards', async () => {
		const JGNRewardsBBlQar2 = await JGNRewards.new({from: accounts[4]});
		const addressQzc5obd = accounts[4]
		const addressaUI5A3b = accounts[0]
		const uint256dq9OkyA = await JGNRewardsBBlQar2.balanceOf.call(addressQzc5obd, {from: accounts[0]});
//		await JGNRewardsBBlQar2.getReward.call({from: accounts[1]});
//		const uint256BiFskz6 = await JGNRewardsBBlQar2.earned.call(addressaUI5A3b, {from: accounts[1]});
//		await JGNRewardsBBlQar2.exit.call({from: accounts[3]});
//		await JGNRewardsBBlQar2.checkStart.call({from: accounts[0]});
//		await JGNRewardsBBlQar2.exit.call({from: accounts[0]});
//		await JGNRewardsBBlQar2.getReward.call({from: accounts[2]});

		assert.equal(uint256dq9OkyA, BigInt("0"))
		await expect(JGNRewardsBBlQar2.getReward.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});
})