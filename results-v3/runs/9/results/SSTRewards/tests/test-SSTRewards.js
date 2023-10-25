const SSTRewards = artifacts.require("SSTRewards");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('SSTRewards', (accounts) => {
	it('test for SSTRewards', async () => {
		const SSTRewardsOnjX7a = await SSTRewards.new({from: accounts[3]});
		const uintzYQIEeO = BigInt("2007")
		const uintWQ1ox2Q = BigInt("1297")
		const uint256dEqx27E = await SSTRewardsOnjX7a.lastTimeRewardApplicable.call({from: accounts[1]});
		const uint256wf8Ta8q = await SSTRewardsOnjX7a.rewardPerToken.call({from: accounts[4]});
		const uint256ltJJ84o = await SSTRewardsOnjX7a.stake.call(uintzYQIEeO, {from: accounts[4]});
		const uint256lGG6xf3 = await SSTRewardsOnjX7a.stake.call(uintWQ1ox2Q, {from: accounts[0]});

		assert.equal(uint256dEqx27E, BigInt("0"))
		assert.equal(uint256wf8Ta8q, BigInt("0"))
		await expect(SSTRewardsOnjX7a.stake.call(uintzYQIEeO, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for SSTRewards', async () => {
		const SSTRewards1RP0QD = await SSTRewards.new({from: accounts[1]});
		const addresslSICtNh = accounts[4]
		const addressRgYEsDK = accounts[5]
		await SSTRewards1RP0QD.exit.call({from: accounts[1]});
		await SSTRewards1RP0QD.checkStart.call({from: accounts[3]});
		const uint256WEaSWHf = await SSTRewards1RP0QD.balanceOf.call(addresslSICtNh, {from: accounts[4]});
		const addressvMDRIyV = await SSTRewards1RP0QD.updateReward.call(addressRgYEsDK, {from: accounts[2]});

		await expect(SSTRewards1RP0QD.exit.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for SSTRewards', async () => {
		const SSTRewardsjPBiux = await SSTRewards.new({from: accounts[2]});
		const addresszAfJt5N = accounts[5]
		const addressy9LHOWZ = accounts[2]
		const uintzWZ4plN = BigInt("1955")
		const addressuKlETGN = accounts[1]
		const uint256Dr9ywI8 = await SSTRewardsjPBiux.earned.call(addresszAfJt5N, {from: accounts[5]});
		const uint256ThzFnY = await SSTRewardsjPBiux.earned.call(addressy9LHOWZ, {from: accounts[4]});
		await SSTRewardsjPBiux.checkStart.call({from: accounts[3]});
		await SSTRewardsjPBiux.exit.call({from: accounts[0]});
		const uint256rfEZQ4A = await SSTRewardsjPBiux.withdraw.call(uintzWZ4plN, {from: "0x0000000000000000000000000000000000000001"});
		const addressIfPp8zE = await SSTRewardsjPBiux.updateReward.call(addressuKlETGN, {from: accounts[2]});

		assert.equal(uint256Dr9ywI8, BigInt("0"))
		assert.equal(uint256ThzFnY, BigInt("0"))
		await expect(SSTRewardsjPBiux.checkStart.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for SSTRewards', async () => {
		const SSTRewardszZKA940 = await SSTRewards.new({from: "0x0000000000000000000000000000000000000001"});
		const addressdrLQee = accounts[0]
		const uintU7rhoNV = BigInt("1657")
		const addressIhbu2jq = accounts[2]
		const addressrYNve5 = await SSTRewardszZKA940.updateReward.call(addressdrLQee, {from: accounts[4]});
		await SSTRewardszZKA940.checkStart.call({from: accounts[1]});
		const uint256sR9lrC = await SSTRewardszZKA940.stake.call(uintU7rhoNV, {from: accounts[3]});
		const uint256iR4S5C7 = await SSTRewardszZKA940.balanceOf.call(addressIhbu2jq, {from: accounts[1]});
	});

	it('test for SSTRewards', async () => {
		const SSTRewardsej6UacF = await SSTRewards.new({from: accounts[0]});
		const uinth7CA1AL = BigInt("239")
		const uintbjQ5DtT = BigInt("310")
		const uintOwGU5It = BigInt("1252")
		const uint256IJfUEeL = await SSTRewardsej6UacF.withdraw.call(uinth7CA1AL, {from: accounts[4]});
		const uint256p24v3mq = await SSTRewardsej6UacF.rewardPerToken.call({from: accounts[0]});
		const uint256kcZ4vrr = await SSTRewardsej6UacF.withdraw.call(uintbjQ5DtT, {from: accounts[2]});
		const uint256uvxs82t = await SSTRewardsej6UacF.notifyRewardAmount.call(uintOwGU5It, {from: accounts[0]});

		await expect(SSTRewardsej6UacF.withdraw.call(uinth7CA1AL, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for SSTRewards', async () => {
		const SSTRewardsH7KNk3E = await SSTRewards.new({from: accounts[1]});
		const addressxAuwTrJ = accounts[4]
		await SSTRewardsH7KNk3E.getReward.call({from: accounts[3]});
		const uint2569kyrKL = await SSTRewardsH7KNk3E.lastTimeRewardApplicable.call({from: accounts[1]});
		const uint256t37STou = await SSTRewardsH7KNk3E.rewardPerToken.call({from: accounts[0]});
		const addresst9Uv647 = await SSTRewardsH7KNk3E.updateReward.call(addressxAuwTrJ, {from: accounts[3]});
		await SSTRewardsH7KNk3E.getReward.call({from: accounts[1]});

		await expect(SSTRewardsH7KNk3E.getReward.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for SSTRewards', async () => {
		const SSTRewardsrWesu0h = await SSTRewards.new({from: accounts[3]});
		const uintl7fwjUd = BigInt("662")
		const uintIco51Pq = BigInt("1796")
		const uint256EETwiwj = await SSTRewardsrWesu0h.notifyRewardAmount.call(uintl7fwjUd, {from: accounts[1]});
		await SSTRewardsrWesu0h.checkStart.call({from: accounts[2]});
		const uint256bgWxXFW = await SSTRewardsrWesu0h.stake.call(uintIco51Pq, {from: accounts[3]});

		await expect(SSTRewardsrWesu0h.notifyRewardAmount.call(uintl7fwjUd, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})