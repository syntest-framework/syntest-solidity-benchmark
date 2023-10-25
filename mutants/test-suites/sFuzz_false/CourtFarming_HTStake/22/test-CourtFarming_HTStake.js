const CourtFarming_HTStake = artifacts.require("CourtFarming_HTStake");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('CourtFarming_HTStake', (accounts) => {
	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeKscfvq = await CourtFarming_HTStake.new({from: accounts[4]});
		const addressTSKjIZK = accounts[0]
		const addressKdA6FZg = accounts[4]
		const addressPDpcgLH = accounts[3]
		const addressvSstlqo = await CourtFarming_HTStakeKscfvq.getBeneficiaryInfo.call(addressTSKjIZK, {from: accounts[4]});
		const uint256I8U7YGX = await CourtFarming_HTStakeKscfvq.rewards.call(addressKdA6FZg, {from: accounts[4]});
		const uint256O4SVPdd = await CourtFarming_HTStakeKscfvq.rewards.call(addressPDpcgLH, {from: accounts[4]});
		const uint256R7y0q0m = await CourtFarming_HTStakeKscfvq.incvRewardClaim.call({from: accounts[2]});

		assert.equal(uint256R7y0q0m, BigInt("0"))
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeVvqYHj3 = await CourtFarming_HTStake.new({from: accounts[4]});
		const uintX4iDdoQ = BigInt("854")
		const uintrey9NRb = BigInt("1727")
		const uintnkTg2Qd = BigInt("1020")
		const uintpvvFZRb = BigInt("1780")
//		await CourtFarming_HTStakeVvqYHj3.changeStakeParameters.call(uintnkTg2Qd, uintrey9NRb, uintX4iDdoQ, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256msWFZo = await CourtFarming_HTStakeVvqYHj3.expectedRewardsToday.call(uintpvvFZRb, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256nFpfmXW = await CourtFarming_HTStakeVvqYHj3.incvRewardInfo.call({from: accounts[2]});

		await expect(CourtFarming_HTStakeVvqYHj3.changeStakeParameters.call(uintnkTg2Qd, uintrey9NRb, uintX4iDdoQ, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeMHGDCW = await CourtFarming_HTStake.new({from: accounts[1]});
		const uintIpY0Ha7 = BigInt("1271")
		const addressgMdGQhY = accounts[4]
		const uintJNuboon = BigInt("1538")
		const uintVuSnll0 = BigInt("480")
		const uintDbKVxFh = BigInt("618")
		const uintVDt9sLv = BigInt("389")
		const uintTXTjci9 = BigInt("1493")
		const uintJWCsPkp = BigInt("1844")
		const uintfKLKD4c = BigInt("502")
//		const uint256AqlpTnH = await CourtFarming_HTStakeMHGDCW.stake.call(uintIpY0Ha7, {from: accounts[3]});
//		const addressGLl0wkB = await CourtFarming_HTStakeMHGDCW.getBeneficiaryInfo.call(addressgMdGQhY, {from: accounts[4]});
//		const uint256yKz6D5 = await CourtFarming_HTStakeMHGDCW.blockNumber.call({from: accounts[0]});
//		await CourtFarming_HTStakeMHGDCW.changeStakeParameters.call(uintDbKVxFh, uintVuSnll0, uintJNuboon, {from: accounts[1]});
//		const uint256SwNn8n = await CourtFarming_HTStakeMHGDCW.expectedRewardsToday.call(uintVDt9sLv, {from: accounts[5]});
//		await CourtFarming_HTStakeMHGDCW.changeStakeParameters.call(uintfKLKD4c, uintJWCsPkp, uintTXTjci9, {from: accounts[1]});

		await expect(CourtFarming_HTStakeMHGDCW.stake.call(uintIpY0Ha7, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeuDR9z6m = await CourtFarming_HTStake.new({from: accounts[0]});
		const addresspDRg7ef = "0x0000000000000000000000000000000000000001"
		const uintM9uy9pn = BigInt("6")
		const uintcrJDjg0 = BigInt("1675")
		const uintM6OBaQt = BigInt("2020")
		const uintaUxm2nm = BigInt("1293")
		const uint256x8gj72w = await CourtFarming_HTStakeuDR9z6m.lastUpdateBlock.call({from: accounts[4]});
//		const addressMCFqsFT = await CourtFarming_HTStakeuDR9z6m.setCourtStake.call(addresspDRg7ef, {from: accounts[3]});
//		await CourtFarming_HTStakeuDR9z6m.changeStakeParameters.call(uintM6OBaQt, uintcrJDjg0, uintM9uy9pn, {from: accounts[2]});
//		const booldJzDefG = await CourtFarming_HTStakeuDR9z6m.stakeIncvRewards.call(uintaUxm2nm, {from: accounts[3]});
//		const uint256rxCXjRc = await CourtFarming_HTStakeuDR9z6m.incvRewardClaim.call({from: accounts[4]});

		assert.equal(uint256x8gj72w, BigInt("1720"))
		await expect(CourtFarming_HTStakeuDR9z6m.setCourtStake.call(addresspDRg7ef, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakewVLDhU = await CourtFarming_HTStake.new({from: accounts[2]});
		const addressMWStwx5 = accounts[4]
		const boolxHvUKUX = false
		const uintgc23xeG = BigInt("579")
		const uint256Qgwn8Vw = await CourtFarming_HTStakewVLDhU.lastUpdateBlock.call({from: accounts[2]});
		const uint256qCzwtwL = await CourtFarming_HTStakewVLDhU.balanceOf.call(addressMWStwx5, {from: accounts[4]});
//		const uint256B7QS1R = await CourtFarming_HTStakewVLDhU.unstake.call(uintgc23xeG, boolxHvUKUX, {from: accounts[1]});
//		const uint256zpon2n = await CourtFarming_HTStakewVLDhU.getCurrentTime.call({from: accounts[4]});
//		const uint256UcRxyFt = await CourtFarming_HTStakewVLDhU.incvRewardInfo.call({from: accounts[1]});

		assert.equal(uint256Qgwn8Vw, BigInt("1720"))
		assert.equal(uint256qCzwtwL, BigInt("0"))
		await expect(CourtFarming_HTStakewVLDhU.unstake.call(uintgc23xeG, boolxHvUKUX, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeSwrRUqT = await CourtFarming_HTStake.new({from: "0x0000000000000000000000000000000000000001"});
		const addresssBT6wPg = accounts[4]
		const addressUVUJvsv = accounts[4]
		const uint256AoH9o9Z = await CourtFarming_HTStakeSwrRUqT.blockNumber.call({from: accounts[2]});
		const uint256BuS8lr = await CourtFarming_HTStakeSwrRUqT.blockNumber.call({from: accounts[2]});
		const uint256q7pjV9c = await CourtFarming_HTStakeSwrRUqT.balanceOf.call(addresssBT6wPg, {from: accounts[1]});
		const addressATRp0kq = await CourtFarming_HTStakeSwrRUqT.setCourtStake.call(addressUVUJvsv, {from: accounts[3]});
		const uint256K7vkDJN = await CourtFarming_HTStakeSwrRUqT.totalStaked.call({from: accounts[3]});
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStaketbodMxK = await CourtFarming_HTStake.new({from: accounts[3]});
		const addressWmZtVv = accounts[2]
		const addressly4Kutt = accounts[1]
		const uint256HYo68sz = await CourtFarming_HTStaketbodMxK.rewards.call(addressWmZtVv, {from: accounts[0]});
		const addressoCqotqN = await CourtFarming_HTStaketbodMxK.updateReward.call(addressly4Kutt, {from: accounts[3]});
		const uint256gt56Ld4 = await CourtFarming_HTStaketbodMxK.getCurrentTime.call({from: accounts[5]});
		const uint256yKncWmx = await CourtFarming_HTStaketbodMxK.incvRewardInfo.call({from: accounts[2]});

		assert.equal(uint256gt56Ld4, BigInt("1630201421"))
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakewVLDhU = await CourtFarming_HTStake.new({from: accounts[2]});
		const addressROa22HO = accounts[4]
		const uintcCUMZ5X = BigInt("1358")
		const uintYRE5Meu = BigInt("1285")
		const boolxHvUKUX = false
		const uintG0ofuf4 = BigInt("579")
		const addressNHKB5ZA = accounts[4]
		const uint256Qgwn8Vw = await CourtFarming_HTStakewVLDhU.lastUpdateBlock.call({from: accounts[2]});
		const uint256qCzwtwL = await CourtFarming_HTStakewVLDhU.balanceOf.call(addressROa22HO, {from: accounts[4]});
		const boolcbBowt = await CourtFarming_HTStakewVLDhU.stakeIncvRewards.call(uintcCUMZ5X, {from: accounts[3]});
		const boolj9fgOec = await CourtFarming_HTStakewVLDhU.stakeIncvRewards.call(uintYRE5Meu, {from: accounts[3]});
//		const uint256B7QS1R = await CourtFarming_HTStakewVLDhU.unstake.call(uintG0ofuf4, boolxHvUKUX, {from: accounts[1]});
//		const addressQTMGSuR = await CourtFarming_HTStakewVLDhU.updateReward.call(addressNHKB5ZA, {from: accounts[2]});
//		const uint256zpon2n = await CourtFarming_HTStakewVLDhU.getCurrentTime.call({from: accounts[4]});
//		const uint256UcRxyFt = await CourtFarming_HTStakewVLDhU.incvRewardInfo.call({from: accounts[1]});

		assert.equal(boolcbBowt, false)
		assert.equal(boolj9fgOec, false)
		assert.equal(uint256Qgwn8Vw, BigInt("1720"))
		assert.equal(uint256qCzwtwL, BigInt("0"))
		await expect(CourtFarming_HTStakewVLDhU.unstake.call(uintG0ofuf4, boolxHvUKUX, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeVvqYHj3 = await CourtFarming_HTStake.new({from: accounts[4]});
		const uintkr70qeA = BigInt("1780")
		const uint256msWFZo = await CourtFarming_HTStakeVvqYHj3.expectedRewardsToday.call(uintkr70qeA, {from: "0x0000000000000000000000000000000000000001"});
		const uint256nFpfmXW = await CourtFarming_HTStakeVvqYHj3.incvRewardInfo.call({from: accounts[2]});
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeKscfvq = await CourtFarming_HTStake.new({from: accounts[4]});
		const addressFZxJQt4 = accounts[0]
		const addresszaHFXOW = accounts[4]
		const addressbdqyzgI = accounts[3]
		const uintmJzYqWh = BigInt("622")
		const addressvSstlqo = await CourtFarming_HTStakeKscfvq.getBeneficiaryInfo.call(addressFZxJQt4, {from: accounts[4]});
		const uint256LhL8Av2 = await CourtFarming_HTStakeKscfvq.totalStaked.call({from: accounts[3]});
		const uint256I8U7YGX = await CourtFarming_HTStakeKscfvq.rewards.call(addresszaHFXOW, {from: accounts[4]});
		const uint256O4SVPdd = await CourtFarming_HTStakeKscfvq.rewards.call(addressbdqyzgI, {from: accounts[4]});
		const uint256R7y0q0m = await CourtFarming_HTStakeKscfvq.incvRewardClaim.call({from: accounts[2]});
		const boolWxGnEDO = await CourtFarming_HTStakeKscfvq.stakeIncvRewards.call(uintmJzYqWh, {from: accounts[5]});

		assert.equal(boolWxGnEDO, false)
		assert.equal(uint256LhL8Av2, BigInt("0"))
		assert.equal(uint256R7y0q0m, BigInt("0"))
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeHTKrRaR = await CourtFarming_HTStake.new({from: accounts[0]});
		const addresshIskZ8H = accounts[0]
		const uintyOW4OPy = BigInt("0")
		const uintOYQOi03 = BigInt("370")
		const uintEehjztG = BigInt("1937")
		const uintG5EveD8 = BigInt("681")
		const uint256Krf9Dkl = await CourtFarming_HTStakeHTKrRaR.balanceOf.call(addresshIskZ8H, {from: accounts[0]});
		const uint256kh6RI5E = await CourtFarming_HTStakeHTKrRaR.stake.call(uintyOW4OPy, {from: "0x0000000000000000000000000000000000000001"});
//		await CourtFarming_HTStakeHTKrRaR.changeStakeParameters.call(uintG5EveD8, uintEehjztG, uintOYQOi03, {from: accounts[0]});

		assert.equal(uint256Krf9Dkl, BigInt("0"))
		await expect(CourtFarming_HTStakeHTKrRaR.changeStakeParameters.call(uintG5EveD8, uintEehjztG, uintOYQOi03, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeKscfvq = await CourtFarming_HTStake.new({from: accounts[4]});
		const addressRmKetR = accounts[1]
		const addresssK022e = accounts[4]
		const addressAmsKCnZ = accounts[3]
		const uintQdBnRjS = BigInt("1996")
		const uintF93EWt = BigInt("1719")
		const uintsFfI3p2 = BigInt("1002")
		const addressvSstlqo = await CourtFarming_HTStakeKscfvq.getBeneficiaryInfo.call(addressRmKetR, {from: accounts[4]});
		const uint256I8U7YGX = await CourtFarming_HTStakeKscfvq.rewards.call(addresssK022e, {from: accounts[4]});
		const uint256O4SVPdd = await CourtFarming_HTStakeKscfvq.rewards.call(addressAmsKCnZ, {from: accounts[4]});
//		const uint256S6E5koR = await CourtFarming_HTStakeKscfvq._stakeParametrsCalculation.call(uintsFfI3p2, uintF93EWt, uintQdBnRjS, {from: accounts[2]});
//		const uint256R7y0q0m = await CourtFarming_HTStakeKscfvq.incvRewardClaim.call({from: accounts[2]});

		await expect(CourtFarming_HTStakeKscfvq._stakeParametrsCalculation.call(uintsFfI3p2, uintF93EWt, uintQdBnRjS, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeVvqYHj3 = await CourtFarming_HTStake.new({from: accounts[4]});
		const uintppbPTQ5 = BigInt("1780")
		const addressYtEa6b8 = accounts[5]
		const uint256msWFZo = await CourtFarming_HTStakeVvqYHj3.expectedRewardsToday.call(uintppbPTQ5, {from: "0x0000000000000000000000000000000000000001"});
		const uint256UCuJ0t4 = await CourtFarming_HTStakeVvqYHj3.getCurrentTime.call({from: "0x0000000000000000000000000000000000000001"});
//		const addressQt4wNFe = await CourtFarming_HTStakeVvqYHj3.setCourtStake.call(addressYtEa6b8, {from: accounts[4]});
//		const uint256jmEx11x = await CourtFarming_HTStakeVvqYHj3.getCurrentTime.call({from: accounts[1]});
//		const uint256nFpfmXW = await CourtFarming_HTStakeVvqYHj3.incvRewardInfo.call({from: accounts[2]});

		assert.equal(uint256UCuJ0t4, BigInt("1630201420"))
		await expect(CourtFarming_HTStakeVvqYHj3.setCourtStake.call(addressYtEa6b8, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakewVLDhU = await CourtFarming_HTStake.new({from: accounts[2]});
		const boolxHvUKUX = true
		const uintBAxHSZc = BigInt("0")
		const uintTrDSDE = BigInt("233")
		const uint256B7QS1R = await CourtFarming_HTStakewVLDhU.unstake.call(uintBAxHSZc, boolxHvUKUX, {from: accounts[1]});
//		const uint256h1bMIx = await CourtFarming_HTStakewVLDhU.stake.call(uintTrDSDE, {from: accounts[4]});

		await expect(CourtFarming_HTStakewVLDhU.stake.call(uintTrDSDE, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeKscfvq = await CourtFarming_HTStake.new({from: accounts[4]});
		const uintIPaASSb = BigInt("0")
		const uintSNQaXrN = BigInt("1502")
		const boolm1gxElg = await CourtFarming_HTStakeKscfvq.stakeIncvRewards.call(uintIPaASSb, {from: accounts[0]});
		const boolCwnjSB = await CourtFarming_HTStakeKscfvq.stakeIncvRewards.call(uintSNQaXrN, {from: accounts[4]});

		assert.equal(boolCwnjSB, false)
		assert.equal(boolm1gxElg, false)
	});
})