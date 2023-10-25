const FrogDAOGovernanceRewards = artifacts.require("FrogDAOGovernanceRewards");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('FrogDAOGovernanceRewards', (accounts) => {
	it('test for FrogDAOGovernanceRewards', async () => {
		const addressQ23bV3X = accounts[0]
		const FrogDAOGovernanceRewardszPrSdPO = await FrogDAOGovernanceRewards.new(addressQ23bV3X, {from: accounts[1]});
		const addressm2d0Cc1 = accounts[0]
		const uint256H6sHnje = await FrogDAOGovernanceRewardszPrSdPO.rewardPerToken.call({from: accounts[2]});
		await FrogDAOGovernanceRewardszPrSdPO.checkhalve.call({from: accounts[2]});
		const addressJfD8eFw = await FrogDAOGovernanceRewardszPrSdPO.transferDevAddr.call(addressm2d0Cc1, {from: "0x0000000000000000000000000000000000000001"});
		await FrogDAOGovernanceRewardszPrSdPO.getReward.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256rJh2lQM = await FrogDAOGovernanceRewardszPrSdPO.rewardPerToken.call({from: accounts[3]});

		assert.equal(uint256H6sHnje, BigInt("0"))
		await expect(FrogDAOGovernanceRewardszPrSdPO.checkhalve.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressFyl1TBa = accounts[4]
		const FrogDAOGovernanceRewardsZSkxitn = await FrogDAOGovernanceRewards.new(addressFyl1TBa, {from: accounts[2]});
		const uintPvSVrz = BigInt("1869")
		const addressZZ6kzby = accounts[0]
		const uint256yTvupB = await FrogDAOGovernanceRewardsZSkxitn.stake.call(uintPvSVrz, {from: accounts[4]});
		const uint2560ZrbLs = await FrogDAOGovernanceRewardsZSkxitn.earned.call(addressZZ6kzby, {from: "0x0000000000000000000000000000000000000001"});

		await expect(FrogDAOGovernanceRewardsZSkxitn.stake.call(uintPvSVrz, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressJgskVPf = accounts[4]
		const FrogDAOGovernanceRewardsVKkBj7V = await FrogDAOGovernanceRewards.new(addressJgskVPf, {from: accounts[3]});
		const uint256iiqKMQD = await FrogDAOGovernanceRewardsVKkBj7V.lastTimeRewardApplicable.call({from: accounts[0]});
		const uint256uDO8hb = await FrogDAOGovernanceRewardsVKkBj7V.lastTimeRewardApplicable.call({from: accounts[1]});
		await FrogDAOGovernanceRewardsVKkBj7V.renounceDevAddr.call({from: accounts[5]});

		assert.equal(uint256iiqKMQD, BigInt("0"))
		assert.equal(uint256uDO8hb, BigInt("0"))
		await expect(FrogDAOGovernanceRewardsVKkBj7V.renounceDevAddr.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressI7u7FED = accounts[0]
		const FrogDAOGovernanceRewardsJlDFTaj = await FrogDAOGovernanceRewards.new(addressI7u7FED, {from: accounts[2]});
		const uintSDq8i5J = BigInt("960")
		const uintaL3N29 = BigInt("227")
		const uint256dsJ2fuE = await FrogDAOGovernanceRewardsJlDFTaj.withdraw.call(uintSDq8i5J, {from: accounts[3]});
		const uint256skBiZNc = await FrogDAOGovernanceRewardsJlDFTaj.notifyRewardAmount.call(uintaL3N29, {from: accounts[0]});

		await expect(FrogDAOGovernanceRewardsJlDFTaj.withdraw.call(uintSDq8i5J, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressQZgtV28 = accounts[5]
		const FrogDAOGovernanceRewardss17TLp = await FrogDAOGovernanceRewards.new(addressQZgtV28, {from: accounts[3]});
		const uintx5gECU = BigInt("937")
		const uintrZzRUOQ = BigInt("492")
		const addressmLdGABj = "0x0000000000000000000000000000000000000001"
		const uintIJBOlxh = BigInt("1067")
		const uint256RK6n3o7 = await FrogDAOGovernanceRewardss17TLp.notifyRewardAmount.call(uintx5gECU, {from: "0x0000000000000000000000000000000000000001"});
		const uint256LCA1Msu = await FrogDAOGovernanceRewardss17TLp.stake.call(uintrZzRUOQ, {from: accounts[2]});
		const addressqRwbYnU = await FrogDAOGovernanceRewardss17TLp.updateReward.call(addressmLdGABj, {from: accounts[5]});
		const uint256UgKr6Ek = await FrogDAOGovernanceRewardss17TLp.stake.call(uintIJBOlxh, {from: accounts[5]});

		await expect(FrogDAOGovernanceRewardss17TLp.notifyRewardAmount.call(uintx5gECU, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressAEzs7U7 = accounts[0]
		const FrogDAOGovernanceRewardst65pNQw = await FrogDAOGovernanceRewards.new(addressAEzs7U7, {from: accounts[1]});
		const addressMSBHGka = accounts[4]
		const addressXl3gnFC = await FrogDAOGovernanceRewardst65pNQw.transferDevAddr.call(addressMSBHGka, {from: accounts[5]});
		await FrogDAOGovernanceRewardst65pNQw.checkhalve.call({from: accounts[2]});
		const uint256prRBhdF = await FrogDAOGovernanceRewardst65pNQw.lastTimeRewardApplicable.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(FrogDAOGovernanceRewardst65pNQw.transferDevAddr.call(addressMSBHGka, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressCODRNqa = accounts[4]
		const FrogDAOGovernanceRewardsZSkxitn = await FrogDAOGovernanceRewards.new(addressCODRNqa, {from: accounts[2]});
		const uintLh4LqBl = BigInt("1914")
		await FrogDAOGovernanceRewardsZSkxitn.exit.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256yTvupB = await FrogDAOGovernanceRewardsZSkxitn.stake.call(uintLh4LqBl, {from: accounts[4]});

		await expect(FrogDAOGovernanceRewardsZSkxitn.exit.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressTTIBzGd = accounts[4]
		const FrogDAOGovernanceRewardsZSkxitn = await FrogDAOGovernanceRewards.new(addressTTIBzGd, {from: accounts[2]});
		const uintzfK9yhi = BigInt("749")
		const uinttb3SJuS = BigInt("1869")
		const uint25693Ffov = await FrogDAOGovernanceRewardsZSkxitn.withdrawDevFund.call(uintzfK9yhi, {from: accounts[1]});
		const uint256yTvupB = await FrogDAOGovernanceRewardsZSkxitn.stake.call(uinttb3SJuS, {from: accounts[4]});

		await expect(FrogDAOGovernanceRewardsZSkxitn.withdrawDevFund.call(uintzfK9yhi, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressqQJ9prD = accounts[1]
		const FrogDAOGovernanceRewardsFxdFLuS = await FrogDAOGovernanceRewards.new(addressqQJ9prD, {from: accounts[5]});
		const uint256cjFUurG = await FrogDAOGovernanceRewardsFxdFLuS.devFundAvailable.call({from: accounts[4]});
		const uint256AXkRuNc = await FrogDAOGovernanceRewardsFxdFLuS.lastTimeRewardApplicable.call({from: accounts[4]});

		assert.equal(uint256AXkRuNc, BigInt("0"))
		assert.equal(uint256cjFUurG, BigInt("0"))
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressSJpWgIo = accounts[0]
		const FrogDAOGovernanceRewardshcY77J = await FrogDAOGovernanceRewards.new(addressSJpWgIo, {from: "0x0000000000000000000000000000000000000001"});
		const addressGkEiaCu = "0x0000000000000000000000000000000000000001"
		await FrogDAOGovernanceRewardshcY77J.renounceDevAddr.call({from: accounts[3]});
		const addressQ6WcuM = await FrogDAOGovernanceRewardshcY77J.updateReward.call(addressGkEiaCu, {from: "0x0000000000000000000000000000000000000001"});
		await FrogDAOGovernanceRewardshcY77J.checkStart.call({from: accounts[4]});
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressYMR8H1c = accounts[4]
		const FrogDAOGovernanceRewardsZSkxitn = await FrogDAOGovernanceRewards.new(addressYMR8H1c, {from: accounts[2]});
		const uintDhVrqWR = BigInt("1095")
		const uinteEuROuW = BigInt("1877")
		const addressK6UU2EJ = accounts[0]
		const uint256eut3bCA = await FrogDAOGovernanceRewardsZSkxitn.notifyRewardAmount.call(uintDhVrqWR, {from: accounts[2]});
		const uint2564KD6GK = await FrogDAOGovernanceRewardsZSkxitn.devFundAvailable.call({from: accounts[2]});
		const uint256yTvupB = await FrogDAOGovernanceRewardsZSkxitn.stake.call(uinteEuROuW, {from: accounts[4]});
		const uint256AaHlpf = await FrogDAOGovernanceRewardsZSkxitn.earned.call(addressK6UU2EJ, {from: accounts[3]});

		await expect(FrogDAOGovernanceRewardsZSkxitn.notifyRewardAmount.call(uintDhVrqWR, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressVKcIlcH = accounts[3]
		const FrogDAOGovernanceRewardsGs4fPQg = await FrogDAOGovernanceRewards.new(addressVKcIlcH, {from: accounts[4]});
		const uintZrYvNxW = BigInt("745")
		const address9zYrsp = accounts[0]
		const addressWfzkKOC = accounts[3]
		const uint256GkfB7Zl = await FrogDAOGovernanceRewardsGs4fPQg.withdrawDevFund.call(uintZrYvNxW, {from: accounts[3]});
		const uint256Ov1w04 = await FrogDAOGovernanceRewardsGs4fPQg.rewardPerToken.call({from: accounts[0]});
		const uint256d8nljdE = await FrogDAOGovernanceRewardsGs4fPQg.earned.call(address9zYrsp, {from: accounts[2]});
		const uint256Qdg2bv = await FrogDAOGovernanceRewardsGs4fPQg.earned.call(addressWfzkKOC, {from: accounts[1]});
		await FrogDAOGovernanceRewardsGs4fPQg.checkStart.call({from: accounts[0]});

		await expect(FrogDAOGovernanceRewardsGs4fPQg.withdrawDevFund.call(uintZrYvNxW, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})