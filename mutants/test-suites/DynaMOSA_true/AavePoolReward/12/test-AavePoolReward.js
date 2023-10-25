const AavePoolReward = artifacts.require("AavePoolReward");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('AavePoolReward', (accounts) => {
	it('test for AavePoolReward', async () => {
		const AavePoolRewardhdz3ZNb = await AavePoolReward.new({from: accounts[1]});
		const uintALYu50Z = BigInt("109")
		const uintLRuhPkU = BigInt("10")
		const addressVIs59ko = accounts[3]
//		await AavePoolRewardhdz3ZNb.exit.call({from: accounts[3]});
//		const uint256krZEMCH = await AavePoolRewardhdz3ZNb.stake.call(uintALYu50Z, {from: accounts[4]});
//		const uint256ytUNoxQ = await AavePoolRewardhdz3ZNb.notifyRewardAmount.call(uintLRuhPkU, {from: accounts[5]});
//		const addressEl4iinA = await AavePoolRewardhdz3ZNb.updateReward.call(addressVIs59ko, {from: accounts[2]});

		await expect(AavePoolRewardhdz3ZNb.exit.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardbqYVZQf = await AavePoolReward.new({from: accounts[2]});
		const uintuZzaAVK = BigInt("1071")
		const addressAhQasPA = accounts[2]
//		const uint256B7rXHJ5 = await AavePoolRewardbqYVZQf.stake.call(uintuZzaAVK, {from: accounts[0]});
//		const uint256DZu3ryH = await AavePoolRewardbqYVZQf.earned.call(addressAhQasPA, {from: accounts[3]});

		await expect(AavePoolRewardbqYVZQf.stake.call(uintuZzaAVK, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardMqXtIQS = await AavePoolReward.new({from: "0x0000000000000000000000000000000000000001"});
		const addressKPuKlqj = accounts[3]
		const addressv0iIszp = "0x0000000000000000000000000000000000000001"
		const addressS6pQgJH = accounts[3]
		await AavePoolRewardMqXtIQS.getReward.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256fkNuI8r = await AavePoolRewardMqXtIQS.rewardPerToken.call({from: accounts[2]});
		const uint256kTmQ3jp = await AavePoolRewardMqXtIQS.earned.call(addressKPuKlqj, {from: accounts[1]});
		const uint256E1geEt3 = await AavePoolRewardMqXtIQS.earned.call(addressv0iIszp, {from: "0x0000000000000000000000000000000000000001"});
		const addressqyW1GbB = await AavePoolRewardMqXtIQS.dev.call(addressS6pQgJH, {from: accounts[4]});
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardQ6W4c9b = await AavePoolReward.new({from: accounts[5]});
		const addressGWPNC0q = "0x0000000000000000000000000000000000000001"
		const addresskGH2yNU = accounts[5]
		const uint256s6CENsH = await AavePoolRewardQ6W4c9b.lastTimeRewardApplicable.call({from: accounts[1]});
//		const addressYwrvD3L = await AavePoolRewardQ6W4c9b.updateReward.call(addressGWPNC0q, {from: accounts[5]});
//		await AavePoolRewardQ6W4c9b.getReward.call({from: accounts[3]});
//		const uint256vhwwTwJ = await AavePoolRewardQ6W4c9b.earned.call(addresskGH2yNU, {from: accounts[1]});
//		const uint256rkIJ8bV = await AavePoolRewardQ6W4c9b.rewardPerToken.call({from: accounts[2]});

		assert.equal(uint256s6CENsH, BigInt("0"))
		await expect(AavePoolRewardQ6W4c9b.updateReward.call(addressGWPNC0q, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardQtUmfDJ = await AavePoolReward.new({from: accounts[0]});
		const uintfCZsRAL = BigInt("1295")
		const addresszMcQSVH = accounts[0]
		const uint256JIfiAlb = await AavePoolRewardQtUmfDJ.rewardPerToken.call({from: accounts[4]});
//		const uint256OdMHuD9 = await AavePoolRewardQtUmfDJ.notifyRewardAmount.call(uintfCZsRAL, {from: accounts[3]});
//		const uint256UCT5H7r = await AavePoolRewardQtUmfDJ.earned.call(addresszMcQSVH, {from: accounts[4]});
//		const uint256Wp6VJT4 = await AavePoolRewardQtUmfDJ.lastTimeRewardApplicable.call({from: accounts[2]});

		assert.equal(uint256JIfiAlb, BigInt("0"))
		await expect(AavePoolRewardQtUmfDJ.notifyRewardAmount.call(uintfCZsRAL, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardkiOVIHt = await AavePoolReward.new({from: accounts[0]});
		const uintAhxdlRu = BigInt("298")
		const uintEDTIYw = BigInt("1535")
		const uinteIGcQQp = BigInt("528")
		const addressN0YqIY = accounts[5]
		const addressdXPLzEy = "0x0000000000000000000000000000000000000001"
//		const uint256evMBloR = await AavePoolRewardkiOVIHt.withdraw.call(uintAhxdlRu, {from: accounts[3]});
//		const uint256vUzljnt = await AavePoolRewardkiOVIHt.stake.call(uintEDTIYw, {from: accounts[0]});
//		const uint256IxBEAO = await AavePoolRewardkiOVIHt.stake.call(uinteIGcQQp, {from: accounts[5]});
//		const addressByhnDT = await AavePoolRewardkiOVIHt.dev.call(addressN0YqIY, {from: accounts[0]});
//		const uint256xg8eq28 = await AavePoolRewardkiOVIHt.earned.call(addressdXPLzEy, {from: accounts[0]});

		await expect(AavePoolRewardkiOVIHt.withdraw.call(uintAhxdlRu, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardqf2VGG = await AavePoolReward.new({from: accounts[2]});
		const addressmgU3SHt = "0x0000000000000000000000000000000000000001"
//		await AavePoolRewardqf2VGG.getReward.call({from: accounts[3]});
//		await AavePoolRewardqf2VGG.getReward.call({from: accounts[2]});
//		const addressuNESUa5 = await AavePoolRewardqf2VGG.dev.call(addressmgU3SHt, {from: accounts[1]});

		await expect(AavePoolRewardqf2VGG.getReward.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardqf2VGG = await AavePoolReward.new({from: accounts[2]});
		const addressAqT0d6h = "0x00000000000000000000000000000000000000-1"
		const uintWKJBqPr = BigInt("549")
//		await AavePoolRewardqf2VGG.getReward.call({from: accounts[3]});
//		const addressuNESUa5 = await AavePoolRewardqf2VGG.dev.call(addressAqT0d6h, {from: accounts[1]});
//		const uint256WivYN0h = await AavePoolRewardqf2VGG.stake.call(uintWKJBqPr, {from: accounts[0]});

		await expect(AavePoolRewardqf2VGG.getReward.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardkCJVexu = await AavePoolReward.new({from: accounts[4]});
		const uintV0jNsG = BigInt("1517")
		const uintTTIjPKG = BigInt("1548")
		const uintMzkR34A = BigInt("436")
		const uint256mEq9ziZ = await AavePoolRewardkCJVexu.notifyRewardAmount.call(uintV0jNsG, {from: accounts[4]});
		const uint256OX8wAV = await AavePoolRewardkCJVexu.notifyRewardAmount.call(uintTTIjPKG, {from: accounts[4]});
//		const uint256mhFn6Y = await AavePoolRewardkCJVexu.notifyRewardAmount.call(uintMzkR34A, {from: accounts[2]});

		await expect(AavePoolRewardkCJVexu.notifyRewardAmount.call(uintMzkR34A, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardqf2VGG = await AavePoolReward.new({from: accounts[2]});
		const addresszPkgneB = accounts[1]
		const addressV98Jff = "0x0000000000000000000000000000000000000001"
		const uinteVOOBgV = BigInt("648")
		const uintWHN6nj9 = BigInt("549")
		const addressq8FYEQH = accounts[5]
//		await AavePoolRewardqf2VGG.getReward.call({from: accounts[3]});
//		const addressxvusgwf = await AavePoolRewardqf2VGG.dev.call(addresszPkgneB, {from: accounts[2]});
//		const addressuNESUa5 = await AavePoolRewardqf2VGG.dev.call(addressV98Jff, {from: accounts[1]});
//		const uint256I6AoLeg = await AavePoolRewardqf2VGG.stake.call(uinteVOOBgV, {from: accounts[0]});
//		const uint256WivYN0h = await AavePoolRewardqf2VGG.stake.call(uintWHN6nj9, {from: accounts[0]});
//		const uint256WfeY8I = await AavePoolRewardqf2VGG.earned.call(addressq8FYEQH, {from: accounts[0]});

		await expect(AavePoolRewardqf2VGG.getReward.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});
})