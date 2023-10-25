const SLTDETHlpReward = artifacts.require("SLTDETHlpReward");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('SLTDETHlpReward', (accounts) => {
	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardEVThIcg = await SLTDETHlpReward.new({from: accounts[4]});
		const uintHwrR5U5 = BigInt("2003")
		await SLTDETHlpRewardEVThIcg.getReward.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256u4dYPxH = await SLTDETHlpRewardEVThIcg.lastTimeRewardApplicable.call({from: accounts[1]});
		const uint256v0YKaZr = await SLTDETHlpRewardEVThIcg.stake.call(uintHwrR5U5, {from: accounts[1]});
		const boolAZVgP4J = await SLTDETHlpRewardEVThIcg.isOwner.call({from: accounts[4]});

		await expect(SLTDETHlpRewardEVThIcg.getReward.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardnw0ZKXo = await SLTDETHlpReward.new({from: accounts[0]});
		const addressNN8WpkT = accounts[4]
		const addressg5vuYsC = accounts[3]
		const uintBfxGQvf = BigInt("712")
		await SLTDETHlpRewardnw0ZKXo.exit.call({from: accounts[5]});
		const addressVAFubmH = await SLTDETHlpRewardnw0ZKXo.setStakeAddress.call(addressNN8WpkT, {from: accounts[0]});
		const addressrXOJ1dh = await SLTDETHlpRewardnw0ZKXo.setStakeAddress.call(addressg5vuYsC, {from: accounts[2]});
		const uint256r3Vu8Sb = await SLTDETHlpRewardnw0ZKXo.withdraw.call(uintBfxGQvf, {from: accounts[4]});

		await expect(SLTDETHlpRewardnw0ZKXo.exit.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardbNHaBtG = await SLTDETHlpReward.new({from: accounts[3]});
		const addressE43G2dS = accounts[0]
		const uint256c1KJl0 = await SLTDETHlpRewardbNHaBtG.remainingReward.call({from: accounts[3]});
		await SLTDETHlpRewardbNHaBtG.onlyRewardDistribution.call({from: accounts[4]});
		const addressudkD2BG = await SLTDETHlpRewardbNHaBtG.transferOwnership.call(addressE43G2dS, {from: accounts[0]});
		await SLTDETHlpRewardbNHaBtG.exit.call({from: accounts[2]});
		await SLTDETHlpRewardbNHaBtG.onlyRewardDistribution.call({from: accounts[0]});
		const uint256Va7VsxZ = await SLTDETHlpRewardbNHaBtG.totalSupply.call({from: accounts[1]});

		await expect(SLTDETHlpRewardbNHaBtG.remainingReward.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardhYOq5of = await SLTDETHlpReward.new({from: accounts[5]});
		const uint6DSs4h = BigInt("1880")
		const uintabLjUNC = BigInt("1685")
		const addressEdb4xdc = "0x0000000000000000000000000000000000000001"
		const uint256V7JzZMZ = await SLTDETHlpRewardhYOq5of.notifyRewardAmount.call(uint6DSs4h, {from: accounts[4]});
		const boolv5wMRDS = await SLTDETHlpRewardhYOq5of.isOwner.call({from: accounts[5]});
		await SLTDETHlpRewardhYOq5of.getReward.call({from: accounts[0]});
		const uint256vdlH2Lh = await SLTDETHlpRewardhYOq5of.notifyRewardAmount.call(uintabLjUNC, {from: accounts[1]});
		const uint256MmFbDm = await SLTDETHlpRewardhYOq5of.earned.call(addressEdb4xdc, {from: accounts[2]});

		await expect(SLTDETHlpRewardhYOq5of.notifyRewardAmount.call(uint6DSs4h, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardMn89vOL = await SLTDETHlpReward.new({from: accounts[5]});
		const uintv5GwX9k = BigInt("1834")
		const addressOBz8tj3 = accounts[0]
		const addressXXhuaOs = accounts[0]
		const uint256P08fuCK = await SLTDETHlpRewardMn89vOL.setStartTime.call(uintv5GwX9k, {from: accounts[5]});
		await SLTDETHlpRewardMn89vOL.checkStart.call({from: "0x0000000000000000000000000000000000000001"});
		await SLTDETHlpRewardMn89vOL.getReward.call({from: accounts[3]});
		const addressTuIQAJk = await SLTDETHlpRewardMn89vOL.setRewardDistribution.call(addressOBz8tj3, {from: accounts[4]});
		const address7SC4vS = await SLTDETHlpRewardMn89vOL.setRewardDistribution.call(addressXXhuaOs, {from: accounts[0]});

		await expect(SLTDETHlpRewardMn89vOL.checkStart.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardJPBBs3U = await SLTDETHlpReward.new({from: "0x0000000000000000000000000000000000000001"});
		const address7Lp7FV = accounts[1]
		const uintB3HcsEK = BigInt("485")
		const uint256l9OULr = await SLTDETHlpRewardJPBBs3U.totalSupply.call({from: accounts[0]});
		const addressIR2CaXv = await SLTDETHlpRewardJPBBs3U.setRewardDistribution.call(address7Lp7FV, {from: accounts[4]});
		const uint256V7qQlhy = await SLTDETHlpRewardJPBBs3U.withdraw.call(uintB3HcsEK, {from: accounts[1]});
		const uint256fvIXlvE = await SLTDETHlpRewardJPBBs3U.rewardPerToken.call({from: accounts[2]});
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardPnf0NGZ = await SLTDETHlpReward.new({from: accounts[1]});
		const uintRbhQa4L = BigInt("38")
		const uint256tapqvbU = await SLTDETHlpRewardPnf0NGZ.totalSupply.call({from: accounts[2]});
		const uint256yMuKsJ9 = await SLTDETHlpRewardPnf0NGZ.setStartTime.call(uintRbhQa4L, {from: accounts[2]});

		assert.equal(uint256tapqvbU, BigInt("0"))
		await expect(SLTDETHlpRewardPnf0NGZ.setStartTime.call(uintRbhQa4L, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardPnf0NGZ = await SLTDETHlpReward.new({from: accounts[1]});
		const uintZ4SPE4x = BigInt("703")
		const uintMCjSsSB = BigInt("1014")
		const uintTaqSXZF = BigInt("38")
		const uint256xK5OtjG = await SLTDETHlpRewardPnf0NGZ.rewardPerToken.call({from: accounts[1]});
		const uint256nV9OP7V = await SLTDETHlpRewardPnf0NGZ.withdraw.call(uintZ4SPE4x, {from: accounts[3]});
		const uint256hI1wPaa = await SLTDETHlpRewardPnf0NGZ.stake.call(uintMCjSsSB, {from: accounts[0]});
		const uint256yMuKsJ9 = await SLTDETHlpRewardPnf0NGZ.setStartTime.call(uintTaqSXZF, {from: accounts[2]});

		assert.equal(uint256xK5OtjG, BigInt("0"))
		await expect(SLTDETHlpRewardPnf0NGZ.withdraw.call(uintZ4SPE4x, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardj5l40Wa = await SLTDETHlpReward.new({from: accounts[1]});
		const uintXVXBZHf = BigInt("213")
		const addressjm9ZnY9 = accounts[0]
		const uintNtuSXa3 = BigInt("1299")
		const addresspU97di = accounts[4]
		const addressI3tKXfN = await SLTDETHlpRewardj5l40Wa.owner.call({from: accounts[2]});
		const uint256VuCNSCc = await SLTDETHlpRewardj5l40Wa.stake.call(uintXVXBZHf, {from: accounts[4]});
		const addressJ9Bnfib = await SLTDETHlpRewardj5l40Wa.updateReward.call(addressjm9ZnY9, {from: accounts[5]});
		const uint256mn25jBM = await SLTDETHlpRewardj5l40Wa.stake.call(uintNtuSXa3, {from: accounts[0]});
		const boolBXLq22G = await SLTDETHlpRewardj5l40Wa.isOwner.call({from: accounts[1]});
		const addressoaDaCqz = await SLTDETHlpRewardj5l40Wa.transferOwnership.call(addresspU97di, {from: accounts[5]});

		assert.equal(addressI3tKXfN, 0xE921a0c34F469baf060d71Ac0444F319ede935B7)
		await expect(SLTDETHlpRewardj5l40Wa.stake.call(uintXVXBZHf, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardEVThIcg = await SLTDETHlpReward.new({from: accounts[4]});
		const addressZaxgczn = accounts[3]
		const boolbV0Wx1o = await SLTDETHlpRewardEVThIcg.isOwner.call({from: accounts[2]});
		await SLTDETHlpRewardEVThIcg.getReward.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256muCdSyz = await SLTDETHlpRewardEVThIcg.totalSupply.call({from: accounts[0]});
		const addressSKeZ8OJ = await SLTDETHlpRewardEVThIcg.transferOwnership.call(addressZaxgczn, {from: accounts[4]});

		assert.equal(boolbV0Wx1o, false)
		await expect(SLTDETHlpRewardEVThIcg.getReward.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardEVThIcg = await SLTDETHlpReward.new({from: accounts[4]});
		const addressGCnLcQK = accounts[0]
		await SLTDETHlpRewardEVThIcg.getReward.call({from: "0x0000000000000000000000000000000000000001"});
		const addressMnUmLe = await SLTDETHlpRewardEVThIcg.setRewardDistribution.call(addressGCnLcQK, {from: accounts[4]});

		await expect(SLTDETHlpRewardEVThIcg.getReward.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardQpddcjv = await SLTDETHlpReward.new({from: accounts[5]});
		const addressVox7QSO = accounts[4]
		const uint256MvlSeEc = await SLTDETHlpRewardQpddcjv.lastTimeRewardApplicable.call({from: accounts[1]});
		const addressZBEqa6Z = await SLTDETHlpRewardQpddcjv.setStakeAddress.call(addressVox7QSO, {from: accounts[5]});
		const uint256tLg258N = await SLTDETHlpRewardQpddcjv.remainingReward.call({from: accounts[1]});
		await SLTDETHlpRewardQpddcjv.renounceOwnership.call({from: accounts[2]});
		const boolNpHqCCX = await SLTDETHlpRewardQpddcjv.isOwner.call({from: accounts[1]});

		assert.equal(uint256MvlSeEc, BigInt("0"))
		await expect(SLTDETHlpRewardQpddcjv.remainingReward.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardEVThIcg = await SLTDETHlpReward.new({from: accounts[4]});
		const uintQWh6kfp = BigInt("94")
		const uintaa4GWzx = BigInt("2003")
		const uint256oxLEoVl = await SLTDETHlpRewardEVThIcg.notifyRewardAmount.call(uintQWh6kfp, {from: accounts[4]});
		await SLTDETHlpRewardEVThIcg.getReward.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256TCJwWCt = await SLTDETHlpRewardEVThIcg.remainingReward.call({from: accounts[3]});
		const uint256u4dYPxH = await SLTDETHlpRewardEVThIcg.lastTimeRewardApplicable.call({from: accounts[1]});
		const uint256v0YKaZr = await SLTDETHlpRewardEVThIcg.stake.call(uintaa4GWzx, {from: accounts[1]});
		const boolAZVgP4J = await SLTDETHlpRewardEVThIcg.isOwner.call({from: accounts[4]});
		await SLTDETHlpRewardEVThIcg.renounceOwnership.call({from: accounts[2]});

		await expect(SLTDETHlpRewardEVThIcg.getReward.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardEVThIcg = await SLTDETHlpReward.new({from: accounts[4]});
		const uintqGjQs6C = BigInt("1862")
		const uint1CJZHt = BigInt("2038")
		const addressJSLbgBT = accounts[2]
		const uintux3PYPO = BigInt("1758")
		await SLTDETHlpRewardEVThIcg.getReward.call({from: "0x0000000000000000000000000000000000000001"});
		await SLTDETHlpRewardEVThIcg.renounceOwnership.call({from: accounts[4]});
		const uint256u4dYPxH = await SLTDETHlpRewardEVThIcg.lastTimeRewardApplicable.call({from: accounts[1]});
		await SLTDETHlpRewardEVThIcg.onlyOwner.call({from: accounts[3]});
		const uint256wPuvbY7 = await SLTDETHlpRewardEVThIcg.withdraw.call(uintqGjQs6C, {from: accounts[5]});
		const uint256v0YKaZr = await SLTDETHlpRewardEVThIcg.stake.call(uint1CJZHt, {from: accounts[1]});
		const uint256xvnOEv7 = await SLTDETHlpRewardEVThIcg.rewardPerToken.call({from: accounts[4]});
		const addressF8iIQuZ = await SLTDETHlpRewardEVThIcg.transferOwnership.call(addressJSLbgBT, {from: accounts[1]});
		const uint256kjega2H = await SLTDETHlpRewardEVThIcg.withdraw.call(uintux3PYPO, {from: accounts[2]});
		const boolAZVgP4J = await SLTDETHlpRewardEVThIcg.isOwner.call({from: accounts[4]});

		await expect(SLTDETHlpRewardEVThIcg.getReward.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardEVThIcg = await SLTDETHlpReward.new({from: accounts[4]});
		const uintrpYtBDI = BigInt("0")
		const uintnOIEEAO = BigInt("2003")
		const uint256uR2boTd = await SLTDETHlpRewardEVThIcg.stake.call(uintrpYtBDI, {from: accounts[5]});
		await SLTDETHlpRewardEVThIcg.getReward.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256TCJwWCt = await SLTDETHlpRewardEVThIcg.remainingReward.call({from: accounts[3]});
		const uint256u4dYPxH = await SLTDETHlpRewardEVThIcg.lastTimeRewardApplicable.call({from: accounts[1]});
		const uint256v0YKaZr = await SLTDETHlpRewardEVThIcg.stake.call(uintnOIEEAO, {from: accounts[1]});
		const boolAZVgP4J = await SLTDETHlpRewardEVThIcg.isOwner.call({from: accounts[4]});
		await SLTDETHlpRewardEVThIcg.renounceOwnership.call({from: accounts[2]});

		await expect(SLTDETHlpRewardEVThIcg.stake.call(uintrpYtBDI, {from: accounts[5]})).to.be.rejectedWith(Error);
	});
})