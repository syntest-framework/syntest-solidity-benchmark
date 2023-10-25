const AavePoolReward = artifacts.require("AavePoolReward");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('AavePoolReward', (accounts) => {
	it('test for AavePoolReward', async () => {
		const AavePoolRewardyWPFEjw = await AavePoolReward.new({from: accounts[4]});
//		await AavePoolRewardyWPFEjw.exit.call({from: accounts[4]});
//		await AavePoolRewardyWPFEjw.getReward.call({from: accounts[0]});
//		const uint256eq6C9Xv = await AavePoolRewardyWPFEjw.rewardPerToken.call({from: accounts[0]});
//		const uint256ozi6yJf = await AavePoolRewardyWPFEjw.lastTimeRewardApplicable.call({from: accounts[1]});

		await expect(AavePoolRewardyWPFEjw.exit.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardz8OHRz2 = await AavePoolReward.new({from: "0x0000000000000000000000000000000000000001"});
		const addressXd5TYh = accounts[2]
		const addressGsvhMD = accounts[4]
		const uintbggRWng = BigInt("856")
		const addressv9ugi2U = await AavePoolRewardz8OHRz2.updateReward.call(addressXd5TYh, {from: accounts[3]});
		const addressmCTzTPW = await AavePoolRewardz8OHRz2.updateReward.call(addressGsvhMD, {from: accounts[4]});
		const uint256Zz0f3x = await AavePoolRewardz8OHRz2.notifyRewardAmount.call(uintbggRWng, {from: accounts[3]});
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardYbWBvqR = await AavePoolReward.new({from: accounts[3]});
		const uintPNl396l = BigInt("1572")
		const addressiokVeQt = accounts[2]
		const uintqqBftoS = BigInt("424")
		const uintU2A8XJa = BigInt("1836")
		const uintmJMKjMg = BigInt("82")
//		const uint256dG2c8fc = await AavePoolRewardYbWBvqR.stake.call(uintPNl396l, {from: accounts[4]});
//		const uint256fkxnwbH = await AavePoolRewardYbWBvqR.rewardPerToken.call({from: accounts[1]});
//		const uint256zXNm2v = await AavePoolRewardYbWBvqR.earned.call(addressiokVeQt, {from: accounts[5]});
//		const uint256yYZtmfM = await AavePoolRewardYbWBvqR.stake.call(uintqqBftoS, {from: accounts[1]});
//		const uint256D6Gd6IZ = await AavePoolRewardYbWBvqR.stake.call(uintU2A8XJa, {from: "0x0000000000000000000000000000000000000001"});
//		const uint2565KF1u8 = await AavePoolRewardYbWBvqR.notifyRewardAmount.call(uintmJMKjMg, {from: accounts[4]});

		await expect(AavePoolRewardYbWBvqR.stake.call(uintPNl396l, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardJJCzqli = await AavePoolReward.new({from: accounts[2]});
		const uinteKR9Et = BigInt("1860")
		const uintUotFfz = BigInt("834")
		const uintUen0GlA = BigInt("1481")
		const uint256JvzxG93 = await AavePoolRewardJJCzqli.lastTimeRewardApplicable.call({from: accounts[4]});
//		const uint256Z58FNKx = await AavePoolRewardJJCzqli.withdraw.call(uinteKR9Et, {from: accounts[1]});
//		const uint256x5P3tVe = await AavePoolRewardJJCzqli.withdraw.call(uintUotFfz, {from: accounts[5]});
//		const uint256FHM7D9w = await AavePoolRewardJJCzqli.stake.call(uintUen0GlA, {from: accounts[0]});
//		await AavePoolRewardJJCzqli.getReward.call({from: accounts[1]});

		assert.equal(uint256JvzxG93, BigInt("0"))
		await expect(AavePoolRewardJJCzqli.withdraw.call(uinteKR9Et, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardt0Indeo = await AavePoolReward.new({from: accounts[1]});
		const addressTNosEDe = "0x0000000000000000000000000000000000000001"
		const uint256W4ITvWI = await AavePoolRewardt0Indeo.rewardPerToken.call({from: accounts[2]});
//		const addressIELQ9ov = await AavePoolRewardt0Indeo.updateReward.call(addressTNosEDe, {from: accounts[4]});

		assert.equal(uint256W4ITvWI, BigInt("0"))
		await expect(AavePoolRewardt0Indeo.updateReward.call(addressTNosEDe, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardduk5oEz = await AavePoolReward.new({from: accounts[5]});
		const addressCEIN8BJ = accounts[1]
		const uintK3X0Dy0 = BigInt("928")
		const uintJn1ctfi = BigInt("1649")
//		const addressY2tPDFl = await AavePoolRewardduk5oEz.dev.call(addressCEIN8BJ, {from: accounts[3]});
//		const uint256qt8Vvjv = await AavePoolRewardduk5oEz.notifyRewardAmount.call(uintK3X0Dy0, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256XjEkbBS = await AavePoolRewardduk5oEz.notifyRewardAmount.call(uintJn1ctfi, {from: accounts[3]});

		await expect(AavePoolRewardduk5oEz.dev.call(addressCEIN8BJ, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardC5cits3 = await AavePoolReward.new({from: accounts[5]});
		const uintEMltKV3 = BigInt("1189")
		const uintCURrv7U = BigInt("2002")
//		const uint256a8YSP3H = await AavePoolRewardC5cits3.notifyRewardAmount.call(uintEMltKV3, {from: accounts[4]});
//		const uint256gv6s7wU = await AavePoolRewardC5cits3.rewardPerToken.call({from: accounts[0]});
//		const uint256viu91SS = await AavePoolRewardC5cits3.stake.call(uintCURrv7U, {from: accounts[3]});

		await expect(AavePoolRewardC5cits3.notifyRewardAmount.call(uintEMltKV3, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardA7kDgV4 = await AavePoolReward.new({from: accounts[4]});
		const uintKabokXQ = BigInt("534")
		const address62wPly = accounts[1]
//		await AavePoolRewardA7kDgV4.getReward.call({from: accounts[0]});
//		const uint256vpitji1 = await AavePoolRewardA7kDgV4.lastTimeRewardApplicable.call({from: accounts[3]});
//		const uint256Aksb6N = await AavePoolRewardA7kDgV4.notifyRewardAmount.call(uintKabokXQ, {from: accounts[4]});
//		const addressX7ALtdW = await AavePoolRewardA7kDgV4.updateReward.call(address62wPly, {from: accounts[3]});

		await expect(AavePoolRewardA7kDgV4.getReward.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardynsH38W = await AavePoolReward.new({from: accounts[0]});
		const addressnE3Y7iN = accounts[4]
		const addressnCrP5t = accounts[1]
		const uintPfGSpVP = BigInt("777")
//		await AavePoolRewardynsH38W.getReward.call({from: accounts[0]});
//		const addressKDBypgD = await AavePoolRewardynsH38W.dev.call(addressnE3Y7iN, {from: accounts[0]});
//		const addressLqY1soN = await AavePoolRewardynsH38W.dev.call(addressnCrP5t, {from: accounts[3]});
//		const uint256pVJ9bJJ = await AavePoolRewardynsH38W.withdraw.call(uintPfGSpVP, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256aGrtKpq = await AavePoolRewardynsH38W.rewardPerToken.call({from: accounts[2]});

		await expect(AavePoolRewardynsH38W.getReward.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});
})