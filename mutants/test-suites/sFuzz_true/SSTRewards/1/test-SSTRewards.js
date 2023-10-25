const SSTRewards = artifacts.require("SSTRewards");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('SSTRewards', (accounts) => {
	it('test for SSTRewards', async () => {
		const SSTRewardsYgDF4J4 = await SSTRewards.new({from: accounts[2]});
		const addressrgmUGRw = accounts[0]
		const uintSJ4M8P = BigInt("1834")
		const uintHlgvR2t = BigInt("253")
		const uint256cUjuiBF = await SSTRewardsYgDF4J4.balanceOf.call(addressrgmUGRw, {from: accounts[2]});
//		const uint256o2Y6pPG = await SSTRewardsYgDF4J4.notifyRewardAmount.call(uintSJ4M8P, {from: accounts[2]});
//		const uint256VcjsYbP = await SSTRewardsYgDF4J4.withdraw.call(uintHlgvR2t, {from: accounts[3]});

		assert.equal(uint256cUjuiBF, BigInt("0"))
		await expect(SSTRewardsYgDF4J4.notifyRewardAmount.call(uintSJ4M8P, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for SSTRewards', async () => {
		const SSTRewardsODiYDKq = await SSTRewards.new({from: "0x0000000000000000000000000000000000000001"});
		const uintdZXRAka = BigInt("1996")
		const uintRjSt6s = BigInt("422")
		const uintGCVhTJ = BigInt("1059")
		const uintveCLEDJ = BigInt("196")
		const uint256uEjuT8X = await SSTRewardsODiYDKq.notifyRewardAmount.call(uintdZXRAka, {from: accounts[2]});
		const uint256CGqpGw9 = await SSTRewardsODiYDKq.stake.call(uintRjSt6s, {from: accounts[0]});
		const uint256sjhcmIE = await SSTRewardsODiYDKq.stake.call(uintGCVhTJ, {from: "0x0000000000000000000000000000000000000001"});
		const uint256i2lz6MM = await SSTRewardsODiYDKq.notifyRewardAmount.call(uintveCLEDJ, {from: accounts[2]});
	});

	it('test for SSTRewards', async () => {
		const SSTRewardsTRjPwf = await SSTRewards.new({from: accounts[1]});
		const uintupoY1Gm = BigInt("1167")
		const addressKr3iJ88 = accounts[1]
		const addressp6whCR2 = accounts[3]
		const uint256gPtKP9 = await SSTRewardsTRjPwf.totalSupply.call({from: accounts[4]});
		const uint256tA8e70j = await SSTRewardsTRjPwf.totalSupply.call({from: accounts[4]});
//		const uint256lye9jET = await SSTRewardsTRjPwf.stake.call(uintupoY1Gm, {from: accounts[3]});
//		const uint256bB37rJe = await SSTRewardsTRjPwf.balanceOf.call(addressKr3iJ88, {from: accounts[0]});
//		const uint256RP7aggP = await SSTRewardsTRjPwf.lastTimeRewardApplicable.call({from: accounts[4]});
//		const uint256IchFTv = await SSTRewardsTRjPwf.balanceOf.call(addressp6whCR2, {from: accounts[1]});

		assert.equal(uint256gPtKP9, BigInt("0"))
		assert.equal(uint256tA8e70j, BigInt("0"))
		await expect(SSTRewardsTRjPwf.stake.call(uintupoY1Gm, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for SSTRewards', async () => {
		const SSTRewardskaUjLwK = await SSTRewards.new({from: accounts[1]});
		const uintqKj2ohb = BigInt("1771")
		const uintSsdKZQV = BigInt("1187")
//		await SSTRewardskaUjLwK.checkStart.call({from: accounts[2]});
//		const uint256pxw3KaH = await SSTRewardskaUjLwK.withdraw.call(uintqKj2ohb, {from: accounts[3]});
//		const uint256fAlthuE = await SSTRewardskaUjLwK.withdraw.call(uintSsdKZQV, {from: accounts[2]});
//		await SSTRewardskaUjLwK.exit.call({from: accounts[4]});

		await expect(SSTRewardskaUjLwK.checkStart.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for SSTRewards', async () => {
		const SSTRewardsM5VN5Zm = await SSTRewards.new({from: accounts[3]});
		const uintdR00dng = BigInt("653")
		const addressalmYefL = accounts[0]
//		await SSTRewardsM5VN5Zm.getReward.call({from: accounts[4]});
//		const uint256ySMafWK = await SSTRewardsM5VN5Zm.withdraw.call(uintdR00dng, {from: accounts[4]});
//		const uint256aQiOYDH = await SSTRewardsM5VN5Zm.balanceOf.call(addressalmYefL, {from: accounts[0]});
//		const uint256dtVR61U = await SSTRewardsM5VN5Zm.rewardPerToken.call({from: accounts[5]});
//		await SSTRewardsM5VN5Zm.checkStart.call({from: accounts[0]});
//		const uint256ircp8VS = await SSTRewardsM5VN5Zm.rewardPerToken.call({from: accounts[2]});

		await expect(SSTRewardsM5VN5Zm.getReward.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for SSTRewards', async () => {
		const SSTRewardsy6SKt0n = await SSTRewards.new({from: accounts[2]});
		const addressdutlJiG = accounts[1]
		const addressvacPP97 = accounts[0]
		const uint256UFzQKRu = await SSTRewardsy6SKt0n.balanceOf.call(addressdutlJiG, {from: accounts[3]});
//		await SSTRewardsy6SKt0n.exit.call({from: accounts[3]});
//		const addressVOtFyUd = await SSTRewardsy6SKt0n.updateReward.call(addressvacPP97, {from: accounts[4]});

		assert.equal(uint256UFzQKRu, BigInt("0"))
		await expect(SSTRewardsy6SKt0n.exit.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});
})