const JGNRewards = artifacts.require("JGNRewards");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('JGNRewards', (accounts) => {
	it('test for JGNRewards', async () => {
		const JGNRewardssLxB7Dm = await JGNRewards.new({from: accounts[5]});
		const addressqAdeTZy = accounts[1]
		await JGNRewardssLxB7Dm.exit.call({from: accounts[3]});
		const uint256XSVTQoW = await JGNRewardssLxB7Dm.balanceOf.call(addressqAdeTZy, {from: accounts[4]});

		await expect(JGNRewardssLxB7Dm.exit.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for JGNRewards', async () => {
		const JGNRewardso075iFS = await JGNRewards.new({from: accounts[2]});
		const uintPHAGBOe = BigInt("33")
		const uintYepk8qz = BigInt("1760")
		const uint256y0m0jpG = await JGNRewardso075iFS.stake.call(uintPHAGBOe, {from: accounts[0]});
		const uint256vcWTB5L = await JGNRewardso075iFS.stake.call(uintYepk8qz, {from: accounts[0]});
		await JGNRewardso075iFS.exit.call({from: accounts[3]});

		await expect(JGNRewardso075iFS.stake.call(uintPHAGBOe, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for JGNRewards', async () => {
		const JGNRewardsLxtCdt = await JGNRewards.new({from: accounts[0]});
		const uints8N1JR = BigInt("1559")
		const uint256LJQznzN = await JGNRewardsLxtCdt.lastTimeRewardApplicable.call({from: accounts[4]});
		const uint256G1B9APe = await JGNRewardsLxtCdt.rewardPerToken.call({from: accounts[4]});
		await JGNRewardsLxtCdt.checkStart.call({from: accounts[0]});
		const uint256ZYkyufX = await JGNRewardsLxtCdt.withdraw.call(uints8N1JR, {from: accounts[2]});

		assert.equal(uint256G1B9APe, BigInt("0"))
		assert.equal(uint256LJQznzN, BigInt("0"))
		await expect(JGNRewardsLxtCdt.checkStart.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for JGNRewards', async () => {
		const JGNRewardsmjEOFJV = await JGNRewards.new({from: accounts[2]});
		const uintXtKxpsQ = BigInt("1153")
		const uintGWbhhZY = BigInt("1168")
		await JGNRewardsmjEOFJV.getReward.call({from: accounts[5]});
		const uint256gcPXpdG = await JGNRewardsmjEOFJV.stake.call(uintXtKxpsQ, {from: accounts[4]});
		const uint256BcTDuqM = await JGNRewardsmjEOFJV.withdraw.call(uintGWbhhZY, {from: accounts[3]});

		await expect(JGNRewardsmjEOFJV.getReward.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for JGNRewards', async () => {
		const JGNRewardsgGx0nvo = await JGNRewards.new({from: "0x0000000000000000000000000000000000000001"});
		const uint8jrSPl = BigInt("1592")
		const uintQ46ZQ38 = BigInt("790")
		const uint256HhzbYi = await JGNRewardsgGx0nvo.notifyRewardAmount.call(uint8jrSPl, {from: accounts[1]});
		const uint2564wzOIX = await JGNRewardsgGx0nvo.withdraw.call(uintQ46ZQ38, {from: accounts[4]});
	});

	it('test for JGNRewards', async () => {
		const JGNRewardsupEa6Qu = await JGNRewards.new({from: accounts[2]});
		const uintQRjybYK = BigInt("1542")
		const uint256oWsKqn2 = await JGNRewardsupEa6Qu.withdraw.call(uintQRjybYK, {from: accounts[0]});
		await JGNRewardsupEa6Qu.getReward.call({from: accounts[0]});

		await expect(JGNRewardsupEa6Qu.withdraw.call(uintQRjybYK, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for JGNRewards', async () => {
		const JGNRewardsmjEOFJV = await JGNRewards.new({from: accounts[2]});
		const uintg9rHXVz = BigInt("230")
		const uint256TdrEyhJ = await JGNRewardsmjEOFJV.notifyRewardAmount.call(uintg9rHXVz, {from: accounts[1]});
		await JGNRewardsmjEOFJV.getReward.call({from: accounts[5]});
		await JGNRewardsmjEOFJV.exit.call({from: accounts[4]});

		await expect(JGNRewardsmjEOFJV.notifyRewardAmount.call(uintg9rHXVz, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})