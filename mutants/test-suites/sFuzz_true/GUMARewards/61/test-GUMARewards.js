const GUMARewards = artifacts.require("GUMARewards");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('GUMARewards', (accounts) => {
	it('test for GUMARewards', async () => {
		const GUMARewardsEHP0nWe = await GUMARewards.new({from: accounts[2]});
		const uintPYgdWAf = BigInt("983")
		const addressii9dYjd = accounts[5]
		const addresso52wwUM = accounts[0]
		const addressZRwfua = accounts[1]
		const addresskce22iv = "0x0000000000000000000000000000000000000001"
//		const uint256bUlrOr7 = await GUMARewardsEHP0nWe.stake.call(uintPYgdWAf, {from: accounts[3]});
//		const addressRwIdNX = await GUMARewardsEHP0nWe.updateReward.call(addressii9dYjd, {from: accounts[3]});
//		const addressUhcy8xd = await GUMARewardsEHP0nWe.updateReward.call(addresso52wwUM, {from: accounts[4]});
//		await GUMARewardsEHP0nWe.onlyRewardDistribution.call({from: accounts[2]});
//		const addresskW43xX = await GUMARewardsEHP0nWe.transferOwnership.call(addressZRwfua, {from: accounts[0]});
//		const addressEREX7C0 = await GUMARewardsEHP0nWe.updateReward.call(addresskce22iv, {from: accounts[2]});

		await expect(GUMARewardsEHP0nWe.stake.call(uintPYgdWAf, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardszM1LLzi = await GUMARewards.new({from: accounts[5]});
		const addresssiJanKF = accounts[4]
		const uintbrw2jYs = BigInt("2033")
		const addressVcy2cak = accounts[2]
		const addressY53uUH = accounts[2]
		const uint256oAeyhTe = await GUMARewardszM1LLzi.lastTimeRewardApplicable.call({from: accounts[0]});
		const uint256EZmKzti = await GUMARewardszM1LLzi.lastTimeRewardApplicable.call({from: accounts[5]});
//		const addressGhDFZrU = await GUMARewardszM1LLzi.transferOwnership.call(addresssiJanKF, {from: accounts[0]});
//		const uint256vpo17um = await GUMARewardszM1LLzi.notifyRewardAmount.call(uintbrw2jYs, {from: accounts[4]});
//		const addressF61JUX4 = await GUMARewardszM1LLzi.setGUMA.call(addressY53uUH, addressVcy2cak, {from: accounts[1]});
//		const uint256uQ2uSb = await GUMARewardszM1LLzi.totalSupply.call({from: accounts[2]});

		assert.equal(uint256EZmKzti, BigInt("0"))
		assert.equal(uint256oAeyhTe, BigInt("0"))
		await expect(GUMARewardszM1LLzi.transferOwnership.call(addresssiJanKF, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsWTLO3tD = await GUMARewards.new({from: accounts[4]});
		const addresszTx1BIa = accounts[3]
//		await GUMARewardsWTLO3tD.getReward.call({from: accounts[0]});
//		await GUMARewardsWTLO3tD.getReward.call({from: accounts[1]});
//		await GUMARewardsWTLO3tD.onlyOwner.call({from: accounts[4]});
//		const uint256AnhMSKa = await GUMARewardsWTLO3tD.balanceOf.call(addresszTx1BIa, {from: accounts[1]});

		await expect(GUMARewardsWTLO3tD.getReward.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsFE0eQu5 = await GUMARewards.new({from: "0x0000000000000000000000000000000000000001"});
		const uintmI9epUg = BigInt("1308")
		const addressPpeu4uQ = accounts[4]
		const addresswJ5ZUi = accounts[5]
		const uint256oHTSy8H = await GUMARewardsFE0eQu5.stake.call(uintmI9epUg, {from: accounts[0]});
		const addressV4nbSb7 = await GUMARewardsFE0eQu5.setRewardDistribution.call(addressPpeu4uQ, {from: accounts[3]});
		const uint256yxygVOz = await GUMARewardsFE0eQu5.earned.call(addresswJ5ZUi, {from: accounts[0]});
		await GUMARewardsFE0eQu5.onlyRewardDistribution.call({from: accounts[3]});
		const uint256vGdrwqN = await GUMARewardsFE0eQu5.lastTimeRewardApplicable.call({from: accounts[1]});
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsqWdwtya = await GUMARewards.new({from: accounts[0]});
		const addressNqZtWI0 = accounts[2]
		const uintnM8VGrb = BigInt("745")
//		await GUMARewardsqWdwtya.getReward.call({from: accounts[4]});
//		await GUMARewardsqWdwtya.renounceOwnership.call({from: accounts[0]});
//		const addressMbCvWh = await GUMARewardsqWdwtya.setRewardDistribution.call(addressNqZtWI0, {from: accounts[1]});
//		const uint256HwnPAb = await GUMARewardsqWdwtya.stake.call(uintnM8VGrb, {from: accounts[2]});

		await expect(GUMARewardsqWdwtya.getReward.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsqWdwtya = await GUMARewards.new({from: accounts[0]});
		const addressluybRep = accounts[1]
		const addresskrJOfC = accounts[5]
		const uintko53mUp = BigInt("229")
//		const addressIhXJyJg = await GUMARewardsqWdwtya.setGUMA.call(addresskrJOfC, addressluybRep, {from: accounts[2]});
//		const uint256HwnPAb = await GUMARewardsqWdwtya.stake.call(uintko53mUp, {from: accounts[2]});

		await expect(GUMARewardsqWdwtya.setGUMA.call(addresskrJOfC, addressluybRep, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsVIDjO7X = await GUMARewards.new({from: accounts[1]});
		const addressIFYGYBW = accounts[1]
		const addressIukWEv3 = await GUMARewardsVIDjO7X.owner.call({from: accounts[4]});
//		const addressWUmgnWB = await GUMARewardsVIDjO7X.setRewardDistribution.call(addressIFYGYBW, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(addressIukWEv3, 0x58CA8d6847fD4F52D19886929860F71e1aFf1e91)
		await expect(GUMARewardsVIDjO7X.setRewardDistribution.call(addressIFYGYBW, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsWTLO3tD = await GUMARewards.new({from: accounts[4]});
		const addressaNdw88h = accounts[0]
//		await GUMARewardsWTLO3tD.getReward.call({from: accounts[0]});
//		const addresscjEtccN = await GUMARewardsWTLO3tD.transferOwnership.call(addressaNdw88h, {from: accounts[4]});

		await expect(GUMARewardsWTLO3tD.getReward.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsWTLO3tD = await GUMARewards.new({from: accounts[4]});
		const addressWvicNSZ = accounts[2]
//		await GUMARewardsWTLO3tD.getReward.call({from: accounts[0]});
//		const address2l0Uka = await GUMARewardsWTLO3tD.setRewardDistribution.call(addressWvicNSZ, {from: accounts[4]});

		await expect(GUMARewardsWTLO3tD.getReward.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});
})