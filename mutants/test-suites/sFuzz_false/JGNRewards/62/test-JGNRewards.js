const JGNRewards = artifacts.require("JGNRewards");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('JGNRewards', (accounts) => {
	it('test for JGNRewards', async () => {
		const JGNRewardsQOKV35 = await JGNRewards.new({from: accounts[0]});
		const uintug31FKC = BigInt("1169")
		const uintXcEJIaN = BigInt("494")
//		const uint256B3v9AY5 = await JGNRewardsQOKV35.stake.call(uintug31FKC, {from: accounts[0]});
//		const uint256paV81Se = await JGNRewardsQOKV35.stake.call(uintXcEJIaN, {from: accounts[4]});
//		await JGNRewardsQOKV35.exit.call({from: accounts[2]});
//		await JGNRewardsQOKV35.exit.call({from: accounts[4]});

		await expect(JGNRewardsQOKV35.stake.call(uintug31FKC, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for JGNRewards', async () => {
		const JGNRewardsZLjfzax = await JGNRewards.new({from: "0x0000000000000000000000000000000000000001"});
		const uintHtOL9r0 = BigInt("689")
		const uintf0OK3uq = BigInt("1024")
		const uint256AJzZ3fV = await JGNRewardsZLjfzax.stake.call(uintHtOL9r0, {from: accounts[0]});
		const uint256kLBxX4I = await JGNRewardsZLjfzax.rewardPerToken.call({from: accounts[3]});
		await JGNRewardsZLjfzax.checkStart.call({from: accounts[2]});
		const uint256mp65rI2 = await JGNRewardsZLjfzax.withdraw.call(uintf0OK3uq, {from: accounts[2]});
	});

	it('test for JGNRewards', async () => {
		const JGNRewardsbJB9dY5 = await JGNRewards.new({from: accounts[4]});
		const uintMrGikHS = BigInt("1818")
		const uintkZ4hnFr = BigInt("877")
//		await JGNRewardsbJB9dY5.checkStart.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256n9plLhl = await JGNRewardsbJB9dY5.stake.call(uintMrGikHS, {from: accounts[0]});
//		await JGNRewardsbJB9dY5.checkStart.call({from: accounts[0]});
//		const uint256MNaldSo = await JGNRewardsbJB9dY5.lastTimeRewardApplicable.call({from: accounts[0]});
//		const uint256kJBF5xE = await JGNRewardsbJB9dY5.withdraw.call(uintkZ4hnFr, {from: accounts[3]});

		await expect(JGNRewardsbJB9dY5.checkStart.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for JGNRewards', async () => {
		const JGNRewardsBkIGXNQ = await JGNRewards.new({from: accounts[3]});
		const uintue1zI87 = BigInt("573")
		const addresseCDtI6 = accounts[3]
		const uintdv8gSmg = BigInt("422")
//		const uint256znBaySr = await JGNRewardsBkIGXNQ.withdraw.call(uintue1zI87, {from: accounts[4]});
//		const uint256bN9JGVz = await JGNRewardsBkIGXNQ.balanceOf.call(addresseCDtI6, {from: accounts[5]});
//		const uint256wax4Eze = await JGNRewardsBkIGXNQ.withdraw.call(uintdv8gSmg, {from: accounts[4]});

		await expect(JGNRewardsBkIGXNQ.withdraw.call(uintue1zI87, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for JGNRewards', async () => {
		const JGNRewardsdgvxnqx = await JGNRewards.new({from: accounts[0]});
		const addressTEQGS4T = accounts[4]
		const uintzbSGhih = BigInt("1083")
		const uintqKx6OFC = BigInt("121")
		const uint256KKjLnFP = await JGNRewardsdgvxnqx.earned.call(addressTEQGS4T, {from: accounts[2]});
//		const uint256NkUYQfE = await JGNRewardsdgvxnqx.notifyRewardAmount.call(uintzbSGhih, {from: accounts[1]});
//		const uint256r2kd7ox = await JGNRewardsdgvxnqx.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256sEf6KWO = await JGNRewardsdgvxnqx.rewardPerToken.call({from: accounts[3]});
//		const uint256BZpVjuZ = await JGNRewardsdgvxnqx.stake.call(uintqKx6OFC, {from: accounts[0]});

		assert.equal(uint256KKjLnFP, BigInt("0"))
		await expect(JGNRewardsdgvxnqx.notifyRewardAmount.call(uintzbSGhih, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for JGNRewards', async () => {
		const JGNRewardsdgvxnqx = await JGNRewards.new({from: accounts[0]});
		const addressCq0sOiC = accounts[5]
		const uintNvcEdZm = BigInt("162")
//		await JGNRewardsdgvxnqx.exit.call({from: accounts[4]});
//		const uint256KKjLnFP = await JGNRewardsdgvxnqx.earned.call(addressCq0sOiC, {from: accounts[2]});
//		const uint256BZpVjuZ = await JGNRewardsdgvxnqx.stake.call(uintNvcEdZm, {from: accounts[0]});

		await expect(JGNRewardsdgvxnqx.exit.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for JGNRewards', async () => {
		const JGNRewardsdgvxnqx = await JGNRewards.new({from: accounts[0]});
		const addresstd1tCo8 = accounts[6]
//		await JGNRewardsdgvxnqx.getReward.call({from: accounts[2]});
//		const uint256mKceHzY = await JGNRewardsdgvxnqx.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256KKjLnFP = await JGNRewardsdgvxnqx.earned.call(addresstd1tCo8, {from: accounts[2]});

		await expect(JGNRewardsdgvxnqx.getReward.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});
})