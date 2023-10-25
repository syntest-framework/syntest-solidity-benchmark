const SSTRewards = artifacts.require("SSTRewards");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('SSTRewards', (accounts) => {
	it('test for SSTRewards', async () => {
		const SSTRewardsOivSWq = await SSTRewards.new({from: accounts[5]});
		const uinto7papD = BigInt("1717")
		const uint256TsFi4eN = await SSTRewardsOivSWq.rewardPerToken.call({from: accounts[1]});
		const uint256ppXBdUu = await SSTRewardsOivSWq.stake.call(uinto7papD, {from: accounts[1]});

		assert.equal(uint256TsFi4eN, BigInt("0"))
		await expect(SSTRewardsOivSWq.stake.call(uinto7papD, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for SSTRewards', async () => {
		const SSTRewardsVym1FoR = await SSTRewards.new({from: "0x0000000000000000000000000000000000000001"});
		const addressDco3J5A = accounts[4]
		const uintSjb5Y7 = BigInt("1586")
		const addressTaeytm = accounts[4]
		const uint256UtaFRCS = await SSTRewardsVym1FoR.balanceOf.call(addressDco3J5A, {from: accounts[1]});
		const uint256fsyiOhe = await SSTRewardsVym1FoR.stake.call(uintSjb5Y7, {from: accounts[4]});
		const uint256kW9qeMP = await SSTRewardsVym1FoR.rewardPerToken.call({from: accounts[1]});
		const uint256P6eFA70 = await SSTRewardsVym1FoR.balanceOf.call(addressTaeytm, {from: accounts[2]});
	});

	it('test for SSTRewards', async () => {
		const SSTRewardstU04sTo = await SSTRewards.new({from: accounts[3]});
		const uintPnicaGI = BigInt("1768")
		const uintKmxYtxE = BigInt("247")
		const addresskOnMWcZ = accounts[4]
		await SSTRewardstU04sTo.checkStart.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256kOT3RyT = await SSTRewardstU04sTo.stake.call(uintPnicaGI, {from: accounts[2]});
		await SSTRewardstU04sTo.checkStart.call({from: accounts[3]});
		const uint256fG1sgK = await SSTRewardstU04sTo.withdraw.call(uintKmxYtxE, {from: accounts[3]});
		const uint2565yYkLU = await SSTRewardstU04sTo.earned.call(addresskOnMWcZ, {from: accounts[1]});

		await expect(SSTRewardstU04sTo.checkStart.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for SSTRewards', async () => {
		const SSTRewardsZy4dDJn = await SSTRewards.new({from: accounts[0]});
		const addressMoInyp8 = accounts[2]
		const uintbwKvEfA = BigInt("1601")
		const addressNeW28Zu = accounts[2]
		const addressNeZNkbF = accounts[3]
		const addresst2bKRY3 = "0x0000000000000000000000000000000000000001"
		const uint256Tb3OM4v = await SSTRewardsZy4dDJn.earned.call(addressMoInyp8, {from: accounts[4]});
		await SSTRewardsZy4dDJn.getReward.call({from: accounts[3]});
		const uint256swkXZ3O = await SSTRewardsZy4dDJn.withdraw.call(uintbwKvEfA, {from: accounts[4]});
		const addresskBNfJ9C = await SSTRewardsZy4dDJn.updateReward.call(addressNeW28Zu, {from: accounts[2]});
		const uint256fQzCIeM = await SSTRewardsZy4dDJn.earned.call(addressNeZNkbF, {from: accounts[2]});
		const uint256oXjssyQ = await SSTRewardsZy4dDJn.earned.call(addresst2bKRY3, {from: accounts[2]});

		assert.equal(uint256Tb3OM4v, BigInt("0"))
		await expect(SSTRewardsZy4dDJn.getReward.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for SSTRewards', async () => {
		const SSTRewardsYaM8QL6 = await SSTRewards.new({from: accounts[3]});
		const uintTGngtaj = BigInt("1999")
		const addressyCIr5SJ = accounts[1]
		const uint256gW02JL = await SSTRewardsYaM8QL6.notifyRewardAmount.call(uintTGngtaj, {from: accounts[3]});
		await SSTRewardsYaM8QL6.getReward.call({from: accounts[3]});
		await SSTRewardsYaM8QL6.checkStart.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256AQt9MHg = await SSTRewardsYaM8QL6.balanceOf.call(addressyCIr5SJ, {from: accounts[2]});

		await expect(SSTRewardsYaM8QL6.notifyRewardAmount.call(uintTGngtaj, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for SSTRewards', async () => {
		const SSTRewardsnsTLftM = await SSTRewards.new({from: accounts[3]});
		await SSTRewardsnsTLftM.exit.call({from: accounts[1]});
		const uint256eH3PKNi = await SSTRewardsnsTLftM.rewardPerToken.call({from: accounts[2]});
		await SSTRewardsnsTLftM.getReward.call({from: accounts[1]});
		await SSTRewardsnsTLftM.exit.call({from: accounts[1]});
		await SSTRewardsnsTLftM.getReward.call({from: accounts[1]});
		const uint256m5AOBj = await SSTRewardsnsTLftM.rewardPerToken.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(SSTRewardsnsTLftM.exit.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});
})