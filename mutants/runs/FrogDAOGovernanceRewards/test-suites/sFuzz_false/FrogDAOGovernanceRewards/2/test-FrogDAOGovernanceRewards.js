const FrogDAOGovernanceRewards = artifacts.require("FrogDAOGovernanceRewards");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('FrogDAOGovernanceRewards', (accounts) => {
	it('test for FrogDAOGovernanceRewards', async () => {
		const addressC9xWNME = accounts[2]
		const FrogDAOGovernanceRewardsRGzK85h = await FrogDAOGovernanceRewards.new(addressC9xWNME, {from: accounts[4]});
		const uintDh5ahnB = BigInt("1834")
		const uint256Cp1Db8l = await FrogDAOGovernanceRewardsRGzK85h.lastTimeRewardApplicable.call({from: accounts[2]});
		await FrogDAOGovernanceRewardsRGzK85h.getReward.call({from: accounts[1]});
		const uint256FgZ8qB = await FrogDAOGovernanceRewardsRGzK85h.withdraw.call(uintDh5ahnB, {from: accounts[4]});

		assert.equal(uint256Cp1Db8l, BigInt("0"))
		await expect(FrogDAOGovernanceRewardsRGzK85h.getReward.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressBo3etHc = "0x0000000000000000000000000000000000000001"
		const FrogDAOGovernanceRewardsv2NVVqd = await FrogDAOGovernanceRewards.new(addressBo3etHc, {from: "0x0000000000000000000000000000000000000001"});
		const uint256boqNaaM = await FrogDAOGovernanceRewardsv2NVVqd.devFundAvailable.call({from: accounts[3]});
		await FrogDAOGovernanceRewardsv2NVVqd.getReward.call({from: accounts[3]});
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressvr5ouGA = accounts[0]
		const FrogDAOGovernanceRewardsnJdUW5C = await FrogDAOGovernanceRewards.new(addressvr5ouGA, {from: accounts[4]});
		await FrogDAOGovernanceRewardsnJdUW5C.checkStart.call({from: accounts[0]});
		await FrogDAOGovernanceRewardsnJdUW5C.exit.call({from: accounts[0]});
		const uint256xmW32bM = await FrogDAOGovernanceRewardsnJdUW5C.devFundAvailable.call({from: accounts[2]});
		const uint256BsW2f3k = await FrogDAOGovernanceRewardsnJdUW5C.lastTimeRewardApplicable.call({from: accounts[3]});

		await expect(FrogDAOGovernanceRewardsnJdUW5C.checkStart.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressBEJ0Fgd = accounts[1]
		const FrogDAOGovernanceRewardsSSPg6ol = await FrogDAOGovernanceRewards.new(addressBEJ0Fgd, {from: accounts[4]});
		const uintLwr7ijP = BigInt("1714")
		const uintRq61wMJ = BigInt("198")
		const uint256H4Cgdt6 = await FrogDAOGovernanceRewardsSSPg6ol.notifyRewardAmount.call(uintLwr7ijP, {from: accounts[5]});
		const uint256uZrfppr = await FrogDAOGovernanceRewardsSSPg6ol.stake.call(uintRq61wMJ, {from: accounts[4]});

		await expect(FrogDAOGovernanceRewardsSSPg6ol.notifyRewardAmount.call(uintLwr7ijP, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addresscTjSCx = accounts[1]
		const FrogDAOGovernanceRewardspRiatnc = await FrogDAOGovernanceRewards.new(addresscTjSCx, {from: accounts[5]});
		const uintdJDajhZ = BigInt("1664")
		const uintW8RRa0l = BigInt("1568")
		const uintITh7Thp = BigInt("778")
		const uint2568RM6PG = await FrogDAOGovernanceRewardspRiatnc.withdraw.call(uintdJDajhZ, {from: accounts[3]});
		const uint256zBm5kA0 = await FrogDAOGovernanceRewardspRiatnc.withdrawDevFund.call(uintW8RRa0l, {from: accounts[0]});
		const uint256SSgSNiN = await FrogDAOGovernanceRewardspRiatnc.lastTimeRewardApplicable.call({from: accounts[4]});
		const uint256LI0t397 = await FrogDAOGovernanceRewardspRiatnc.withdraw.call(uintITh7Thp, {from: accounts[2]});
		const uint256y9euPHv = await FrogDAOGovernanceRewardspRiatnc.lastTimeRewardApplicable.call({from: accounts[0]});

		await expect(FrogDAOGovernanceRewardspRiatnc.withdraw.call(uintdJDajhZ, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addresshzdxjd5 = accounts[1]
		const FrogDAOGovernanceRewardsjBMkHrs = await FrogDAOGovernanceRewards.new(addresshzdxjd5, {from: accounts[1]});
		const uinttLFB97 = BigInt("1329")
		const uint256m8w9cIM = await FrogDAOGovernanceRewardsjBMkHrs.withdrawDevFund.call(uinttLFB97, {from: "0x0000000000000000000000000000000000000001"});
		await FrogDAOGovernanceRewardsjBMkHrs.renounceDevAddr.call({from: accounts[0]});

		await expect(FrogDAOGovernanceRewardsjBMkHrs.withdrawDevFund.call(uinttLFB97, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addresscNvVH74 = accounts[1]
		const FrogDAOGovernanceRewardsYwmpC0 = await FrogDAOGovernanceRewards.new(addresscNvVH74, {from: accounts[1]});
		const addressdHdwxjU = accounts[3]
		const uintneq1Zv = BigInt("1096")
		const uintSEVr9YV = BigInt("1885")
		const addressIyvuEm7 = await FrogDAOGovernanceRewardsYwmpC0.transferDevAddr.call(addressdHdwxjU, {from: accounts[4]});
		const uint256pSFCDhf = await FrogDAOGovernanceRewardsYwmpC0.stake.call(uintneq1Zv, {from: accounts[3]});
		await FrogDAOGovernanceRewardsYwmpC0.checkhalve.call({from: accounts[2]});
		const uint256VYcLfGi = await FrogDAOGovernanceRewardsYwmpC0.withdrawDevFund.call(uintSEVr9YV, {from: accounts[2]});
		await FrogDAOGovernanceRewardsYwmpC0.exit.call({from: accounts[4]});

		await expect(FrogDAOGovernanceRewardsYwmpC0.transferDevAddr.call(addressdHdwxjU, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressod9tYr0 = accounts[2]
		const FrogDAOGovernanceRewardsRGzK85h = await FrogDAOGovernanceRewards.new(addressod9tYr0, {from: accounts[4]});
		const uintYnyJkS5 = BigInt("1962")
		const uintPAkeD4A = BigInt("1834")
		const uint256Cp1Db8l = await FrogDAOGovernanceRewardsRGzK85h.lastTimeRewardApplicable.call({from: accounts[2]});
		const uint256x0a5qlM = await FrogDAOGovernanceRewardsRGzK85h.devFundAvailable.call({from: accounts[0]});
		const uint256io5ZAYW = await FrogDAOGovernanceRewardsRGzK85h.notifyRewardAmount.call(uintYnyJkS5, {from: accounts[4]});
		const uint256umsM4N6 = await FrogDAOGovernanceRewardsRGzK85h.rewardPerToken.call({from: accounts[0]});
		const uint256FgZ8qB = await FrogDAOGovernanceRewardsRGzK85h.withdraw.call(uintPAkeD4A, {from: accounts[4]});

		assert.equal(uint256Cp1Db8l, BigInt("0"))
		assert.equal(uint256x0a5qlM, BigInt("0"))
		await expect(FrogDAOGovernanceRewardsRGzK85h.notifyRewardAmount.call(uintYnyJkS5, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressVxww6WJ = accounts[1]
		const FrogDAOGovernanceRewardsuzTP7IC = await FrogDAOGovernanceRewards.new(addressVxww6WJ, {from: accounts[0]});
		const uintwnw8X7g = BigInt("634")
		await FrogDAOGovernanceRewardsuzTP7IC.exit.call({from: accounts[3]});
		await FrogDAOGovernanceRewardsuzTP7IC.checkhalve.call({from: accounts[5]});
		const uint256mqkLq9q = await FrogDAOGovernanceRewardsuzTP7IC.withdraw.call(uintwnw8X7g, {from: accounts[3]});
		await FrogDAOGovernanceRewardsuzTP7IC.checkStart.call({from: accounts[3]});
		await FrogDAOGovernanceRewardsuzTP7IC.exit.call({from: accounts[3]});

		await expect(FrogDAOGovernanceRewardsuzTP7IC.exit.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressQJ8EpqM = accounts[5]
		const FrogDAOGovernanceRewardsIOtvYtp = await FrogDAOGovernanceRewards.new(addressQJ8EpqM, {from: accounts[3]});
		const uintoDh0XPW = BigInt("709")
		const uintgBTLOh7 = BigInt("1617")
		const uint256g8LrGmR = await FrogDAOGovernanceRewardsIOtvYtp.rewardPerToken.call({from: accounts[4]});
		await FrogDAOGovernanceRewardsIOtvYtp.renounceDevAddr.call({from: accounts[2]});
		const uint256jjul3iC = await FrogDAOGovernanceRewardsIOtvYtp.withdrawDevFund.call(uintoDh0XPW, {from: "0x0000000000000000000000000000000000000001"});
		const uint256JECrFEE = await FrogDAOGovernanceRewardsIOtvYtp.withdraw.call(uintgBTLOh7, {from: accounts[3]});
		const uint256jii5mX = await FrogDAOGovernanceRewardsIOtvYtp.rewardPerToken.call({from: accounts[2]});

		assert.equal(uint256g8LrGmR, BigInt("0"))
		await expect(FrogDAOGovernanceRewardsIOtvYtp.renounceDevAddr.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressep5827k = accounts[2]
		const FrogDAOGovernanceRewardsRGzK85h = await FrogDAOGovernanceRewards.new(addressep5827k, {from: accounts[4]});
		const uintUnihq6 = BigInt("176")
		const uintH59tNst = BigInt("1829")
		const uint256AkvWpdc = await FrogDAOGovernanceRewardsRGzK85h.withdrawDevFund.call(uintUnihq6, {from: accounts[2]});
		await FrogDAOGovernanceRewardsRGzK85h.getReward.call({from: accounts[4]});
		const uint256FgZ8qB = await FrogDAOGovernanceRewardsRGzK85h.withdraw.call(uintH59tNst, {from: accounts[4]});

		await expect(FrogDAOGovernanceRewardsRGzK85h.withdrawDevFund.call(uintUnihq6, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})