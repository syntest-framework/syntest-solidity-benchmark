const GUMARewards = artifacts.require("GUMARewards");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('GUMARewards', (accounts) => {
	it('test for GUMARewards', async () => {
		const GUMARewardsHC0XAev = await GUMARewards.new({from: accounts[3]});
		const addressxd4xyMA = accounts[0]
		const addressSoalXM3 = accounts[2]
		const uint256o8obrpm = await GUMARewardsHC0XAev.earned.call(addressxd4xyMA, {from: accounts[2]});
		await GUMARewardsHC0XAev.onlyRewardDistribution.call({from: accounts[5]});
		const addressv3LbW8D = await GUMARewardsHC0XAev.setRewardDistribution.call(addressSoalXM3, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256o8obrpm, BigInt("0"))
		await expect(GUMARewardsHC0XAev.onlyRewardDistribution.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsQY4PS67 = await GUMARewards.new({from: accounts[3]});
		const addressGctpSbZ = accounts[4]
		const addressblUEZD6 = accounts[0]
		const addresstHaEv2I = accounts[2]
		const addressWwLthc6 = await GUMARewardsQY4PS67.transferOwnership.call(addressGctpSbZ, {from: accounts[3]});
		const addressMASaI2 = await GUMARewardsQY4PS67.updateReward.call(addressblUEZD6, {from: accounts[0]});
		const uint256Qj37TIr = await GUMARewardsQY4PS67.totalSupply.call({from: accounts[5]});
		const boolGsg8Yuq = await GUMARewardsQY4PS67.isOwner.call({from: accounts[3]});
		const addresslZWCQ7o = await GUMARewardsQY4PS67.updateReward.call(addresstHaEv2I, {from: accounts[5]});

		await expect(GUMARewardsQY4PS67.updateReward.call(addressblUEZD6, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsiOfcX7a = await GUMARewards.new({from: accounts[0]});
		const addressbeXRdXV = accounts[5]
		const addressGVUzwf = accounts[3]
		const uintWGv8d2b = BigInt("198")
		const addressAOu3Msz = accounts[0]
		const addressunGM0bj = accounts[3]
		const uint256CQnM9r = await GUMARewardsiOfcX7a.rewardPerToken.call({from: accounts[3]});
		const addressNFT0bDK = await GUMARewardsiOfcX7a.setGUMA.call(addressGVUzwf, addressbeXRdXV, {from: accounts[3]});
		const uint256fJwKdZK = await GUMARewardsiOfcX7a.stake.call(uintWGv8d2b, {from: accounts[3]});
		const addressmtViETx = await GUMARewardsiOfcX7a.setGUMA.call(addressunGM0bj, addressAOu3Msz, {from: "0x0000000000000000000000000000000000000001"});
		const boolBPZeiRK = await GUMARewardsiOfcX7a.isOwner.call({from: accounts[5]});
		await GUMARewardsiOfcX7a.renounceOwnership.call({from: accounts[4]});

		assert.equal(uint256CQnM9r, BigInt("0"))
		await expect(GUMARewardsiOfcX7a.setGUMA.call(addressGVUzwf, addressbeXRdXV, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsysJiqmW = await GUMARewards.new({from: accounts[4]});
		const addressbNyRGw2 = accounts[1]
		const uint256nD1BOn = await GUMARewardsysJiqmW.balanceOf.call(addressbNyRGw2, {from: accounts[1]});
		await GUMARewardsysJiqmW.getReward.call({from: accounts[3]});

		assert.equal(uint256nD1BOn, BigInt("0"))
		await expect(GUMARewardsysJiqmW.getReward.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsB1F2N1y = await GUMARewards.new({from: "0x0000000000000000000000000000000000000001"});
		const addresstmx1Y5A = accounts[3]
		const addressJ6lT85 = accounts[3]
		const uintgpbWvGf = BigInt("237")
		await GUMARewardsB1F2N1y.onlyRewardDistribution.call({from: accounts[1]});
		const addressyRa8PlU = await GUMARewardsB1F2N1y.setGUMA.call(addressJ6lT85, addresstmx1Y5A, {from: accounts[3]});
		const uint256UfcKtJ9 = await GUMARewardsB1F2N1y.stake.call(uintgpbWvGf, {from: accounts[4]});
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsamaLPaC = await GUMARewards.new({from: accounts[4]});
		const uintZsQnhKj = BigInt("1734")
		const addressVWmZHfY = accounts[4]
		const uint256zQy5k3i = await GUMARewardsamaLPaC.rewardPerToken.call({from: accounts[1]});
		await GUMARewardsamaLPaC.getReward.call({from: accounts[4]});
		const uint256jRSNpen = await GUMARewardsamaLPaC.stake.call(uintZsQnhKj, {from: accounts[3]});
		const uint256c6yCPp1 = await GUMARewardsamaLPaC.earned.call(addressVWmZHfY, {from: accounts[2]});

		assert.equal(uint256zQy5k3i, BigInt("0"))
		await expect(GUMARewardsamaLPaC.getReward.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsamaLPaC = await GUMARewards.new({from: accounts[4]});
		const addressIuyHwuO = accounts[0]
		const addressMnG2l6 = accounts[4]
		const uintkLVUfRQ = BigInt("1718")
		const addressYeBlwG4 = accounts[4]
		const addressSaGsJLp = await GUMARewardsamaLPaC.transferOwnership.call(addressIuyHwuO, {from: accounts[0]});
		const addressTGP8n0X = await GUMARewardsamaLPaC.updateReward.call(addressMnG2l6, {from: accounts[2]});
		await GUMARewardsamaLPaC.getReward.call({from: accounts[4]});
		const uint256jRSNpen = await GUMARewardsamaLPaC.stake.call(uintkLVUfRQ, {from: accounts[3]});
		const uint256c6yCPp1 = await GUMARewardsamaLPaC.earned.call(addressYeBlwG4, {from: accounts[2]});

		await expect(GUMARewardsamaLPaC.transferOwnership.call(addressIuyHwuO, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsysJiqmW = await GUMARewards.new({from: accounts[4]});
		const addressFCev7Q5 = accounts[2]
		const addressOhg5CAC = await GUMARewardsysJiqmW.owner.call({from: accounts[0]});
		const uint256nD1BOn = await GUMARewardsysJiqmW.balanceOf.call(addressFCev7Q5, {from: accounts[1]});

		assert.equal(addressOhg5CAC, 0x7f65da35589710F5b03362AaEf239Cf7f6886905)
		assert.equal(uint256nD1BOn, BigInt("0"))
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsysJiqmW = await GUMARewards.new({from: accounts[4]});
		const addressA1ualZ = accounts[1]
		await GUMARewardsysJiqmW.renounceOwnership.call({from: accounts[4]});
		const uint256nD1BOn = await GUMARewardsysJiqmW.balanceOf.call(addressA1ualZ, {from: accounts[1]});

		await expect(GUMARewardsysJiqmW.renounceOwnership.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsysJiqmW = await GUMARewards.new({from: accounts[4]});
		const addressXeRyoA5 = accounts[4]
		const addresscgGVL7J = await GUMARewardsysJiqmW.setRewardDistribution.call(addressXeRyoA5, {from: accounts[4]});
		await GUMARewardsysJiqmW.getReward.call({from: accounts[3]});

		await expect(GUMARewardsysJiqmW.getReward.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});
})