const JGNRewards = artifacts.require("JGNRewards");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('JGNRewards', (accounts) => {
	it('test for JGNRewards', async () => {
		const JGNRewardsBpkrO11 = await JGNRewards.new({from: accounts[3]});
		const addresscSF6sE = accounts[2]
		const uintZFWHcY = BigInt("738")
		const uint256qSpFLG = await JGNRewardsBpkrO11.balanceOf.call(addresscSF6sE, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256hhgqYL = await JGNRewardsBpkrO11.notifyRewardAmount.call(uintZFWHcY, {from: accounts[0]});

		assert.equal(uint256qSpFLG, BigInt("0"))
		await expect(JGNRewardsBpkrO11.notifyRewardAmount.call(uintZFWHcY, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for JGNRewards', async () => {
		const JGNRewardson7cJJs = await JGNRewards.new({from: accounts[1]});
		const uintby3QNtk = BigInt("381")
		const addressIFnj0sx = accounts[0]
		const addressXAqcF37 = accounts[3]
//		const uint256q4Levm = await JGNRewardson7cJJs.stake.call(uintby3QNtk, {from: accounts[4]});
//		const uint256o0vdyS = await JGNRewardson7cJJs.balanceOf.call(addressIFnj0sx, {from: accounts[3]});
//		const uint256X4ZcLyL = await JGNRewardson7cJJs.rewardPerToken.call({from: accounts[2]});
//		const uint256ylQ1lfc = await JGNRewardson7cJJs.earned.call(addressXAqcF37, {from: accounts[0]});

		await expect(JGNRewardson7cJJs.stake.call(uintby3QNtk, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for JGNRewards', async () => {
		const JGNRewardsYttxvqI = await JGNRewards.new({from: accounts[1]});
		const uintP3AUeVD = BigInt("534")
		const uintzkesNG8 = BigInt("1051")
		const addressQwLnkWY = "0x0000000000000000000000000000000000000001"
//		const uint256SGYxrnt = await JGNRewardsYttxvqI.withdraw.call(uintP3AUeVD, {from: accounts[1]});
//		const uint256jz3PPX8 = await JGNRewardsYttxvqI.stake.call(uintzkesNG8, {from: accounts[2]});
//		const uint256KC4RAuT = await JGNRewardsYttxvqI.earned.call(addressQwLnkWY, {from: "0x0000000000000000000000000000000000000001"});

		await expect(JGNRewardsYttxvqI.withdraw.call(uintP3AUeVD, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for JGNRewards', async () => {
		const JGNRewardsIq72KR = await JGNRewards.new({from: accounts[4]});
		const uintXzktih = BigInt("650")
//		await JGNRewardsIq72KR.checkStart.call({from: accounts[3]});
//		const uint2566MOO55 = await JGNRewardsIq72KR.lastTimeRewardApplicable.call({from: accounts[3]});
//		const uint256N1vy83w = await JGNRewardsIq72KR.rewardPerToken.call({from: accounts[4]});
//		const uint256TyDPz4x = await JGNRewardsIq72KR.stake.call(uintXzktih, {from: accounts[3]});

		await expect(JGNRewardsIq72KR.checkStart.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for JGNRewards', async () => {
		const JGNRewardsDe2zM0 = await JGNRewards.new({from: accounts[4]});
		const uint256nt6KIn = await JGNRewardsDe2zM0.totalSupply.call({from: accounts[4]});
		const uint256eSFzBwX = await JGNRewardsDe2zM0.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
//		await JGNRewardsDe2zM0.exit.call({from: accounts[1]});

		assert.equal(uint256eSFzBwX, BigInt("0"))
		assert.equal(uint256nt6KIn, BigInt("0"))
		await expect(JGNRewardsDe2zM0.exit.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for JGNRewards', async () => {
		const JGNRewardswoPBqPV = await JGNRewards.new({from: "0x0000000000000000000000000000000000000001"});
		const uintDMjyjac = BigInt("1657")
		const addressOBFgRa = accounts[2]
		const uinti0JJFLX = BigInt("1512")
		await JGNRewardswoPBqPV.exit.call({from: accounts[2]});
		const uint256WwlFeAB = await JGNRewardswoPBqPV.notifyRewardAmount.call(uintDMjyjac, {from: accounts[4]});
		await JGNRewardswoPBqPV.checkStart.call({from: accounts[0]});
		const uint256s7PAgDk = await JGNRewardswoPBqPV.earned.call(addressOBFgRa, {from: accounts[3]});
		const uint256L84vVQf = await JGNRewardswoPBqPV.withdraw.call(uinti0JJFLX, {from: accounts[1]});
	});

	it('test for JGNRewards', async () => {
		const JGNRewardszlXI1w3 = await JGNRewards.new({from: accounts[1]});
		const uintTO1oQsq = BigInt("184")
//		await JGNRewardszlXI1w3.getReward.call({from: accounts[1]});
//		const uint256EbStCO1 = await JGNRewardszlXI1w3.withdraw.call(uintTO1oQsq, {from: accounts[3]});

		await expect(JGNRewardszlXI1w3.getReward.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});
})