const BACMARSLPTOKENPool = artifacts.require("BACMARSLPTOKENPool");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('BACMARSLPTOKENPool', (accounts) => {
	it('test for BACMARSLPTOKENPool', async () => {
		const addressinACGNh = accounts[2]
		const addressw8eZFD = accounts[0]
		const addresst2p888G = accounts[0]
		const BACMARSLPTOKENPoolr0mHJRj = await BACMARSLPTOKENPool.new(addressinACGNh, addressw8eZFD, addresst2p888G, {from: "0x0000000000000000000000000000000000000001"});
		const stringYKcutvf = await BACMARSLPTOKENPoolr0mHJRj.name.call({from: accounts[5]});
		const uint256pFGB8n9 = await BACMARSLPTOKENPoolr0mHJRj.lastTimeRewardApplicable.call({from: accounts[4]});
		const uint8SQC0Qd = await BACMARSLPTOKENPoolr0mHJRj.decimals.call({from: accounts[1]});
		const uint256IifzwwJ = await BACMARSLPTOKENPoolr0mHJRj.totalSupply.call({from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringYtJoq85 = "xUwuc9Q4SViBoxn4KLRVTs8sGGp1mZqwxDny5AEzFIDvhZ9DqGIL7VQ9IBss2hg3zBb3QkBF38a8pLUdSpvxKYq4nd"
		const stringZd8JGrb = "zQMGDgVJEMmdqDb6UUdIsoMNS09"
		const uintkLkhLUP = BigInt("209")
		const BACMARSLPTOKENPoolbC2xZi0 = await BACMARSLPTOKENPool.new(stringYtJoq85, stringZd8JGrb, uintkLkhLUP, {from: accounts[4]});
		const uintfGu0bcL = BigInt("1220")
		const addressTVnVVD = accounts[2]
		const uint256GuskOfF = await BACMARSLPTOKENPoolbC2xZi0.stake.call(uintfGu0bcL, {from: accounts[5]});
		await BACMARSLPTOKENPoolbC2xZi0.nonReentrant.call({from: accounts[0]});
		const uint256UltjDDv = await BACMARSLPTOKENPoolbC2xZi0.balanceOf.call(addressTVnVVD, {from: accounts[4]});
		const uint256BtfX4fG = await BACMARSLPTOKENPoolbC2xZi0.lastTimeRewardApplicable.call({from: accounts[3]});
		await BACMARSLPTOKENPoolbC2xZi0.exit.call({from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringnzGkxP = "RHNZDAlnR9vUeTkEpYpNeftxjqCaUPtBCjP64WaBIy5wOATn"
		const stringg26Z49O = "BzUdrwrHnugcxVdA9Y2Xz1HWGRnAVIR0RhgVdAFPwdOlKIuKNGordmTHWnG6zU6O7744xBpNakX31FYPelw9IwVErKYQ"
		const uintEbBGivL = BigInt("252")
		const BACMARSLPTOKENPooljG3Yq1 = await BACMARSLPTOKENPool.new(stringnzGkxP, stringg26Z49O, uintEbBGivL, {from: accounts[1]});
		const uintVzQ6Yyn = BigInt("1114")
		const addressdAolxlf = accounts[0]
		const uint256tOD0FIB = await BACMARSLPTOKENPooljG3Yq1.withdraw.call(uintVzQ6Yyn, {from: accounts[3]});
		const uint2564ftXtg = await BACMARSLPTOKENPooljG3Yq1.balanceOf.call(addressdAolxlf, {from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressz9TsnyF = accounts[1]
		const addresswFbPzeD = accounts[1]
		const addresscfSlGvp = accounts[1]
		const BACMARSLPTOKENPoolmO0EAp = await BACMARSLPTOKENPool.new(addressz9TsnyF, addresswFbPzeD, addresscfSlGvp, {from: accounts[3]});
		const uintirLCyWA = BigInt("1600")
		await BACMARSLPTOKENPoolmO0EAp.nonReentrant.call({from: accounts[4]});
		const uint256UBq9rzK = await BACMARSLPTOKENPoolmO0EAp.withdraw.call(uintirLCyWA, {from: accounts[3]});
		await BACMARSLPTOKENPoolmO0EAp.exit.call({from: accounts[2]});

		await expect(BACMARSLPTOKENPoolmO0EAp.nonReentrant.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringypRdw3p = "ffDhHpUaiyzCqW9adDSyK4Dv9WRuEgX6hUaWH3ob1Qtss5SCARd66qC2knTrp3ycronAdgVjcbrGhKpOSY3C"
		const stringR75kWkA = "OexMOvAggr"
		const uintW8vSX98 = BigInt("228")
		const BACMARSLPTOKENPooleqd0v1 = await BACMARSLPTOKENPool.new(stringypRdw3p, stringR75kWkA, uintW8vSX98, {from: accounts[4]});
		const addressuE8b12W = accounts[2]
		const uintkTl42rd = BigInt("354")
		const addresss69ns5G = accounts[2]
		await BACMARSLPTOKENPooleqd0v1.nonReentrant.call({from: accounts[2]});
		const uint256nKlpxhg = await BACMARSLPTOKENPooleqd0v1.earned.call(addressuE8b12W, {from: accounts[4]});
		const uint8BaskGqe = await BACMARSLPTOKENPooleqd0v1.decimals.call({from: accounts[3]});
		const uint256kSrc9VV = await BACMARSLPTOKENPooleqd0v1.notifyRewardAmount.call(uintkTl42rd, {from: accounts[4]});
		const stringAUZxCe = await BACMARSLPTOKENPooleqd0v1.symbol.call({from: accounts[0]});
		const addressehsCu4 = await BACMARSLPTOKENPooleqd0v1.updateReward.call(addresss69ns5G, {from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addresscivysKq = accounts[2]
		const addressKg7LPQU = accounts[4]
		const addressr9a513g = accounts[2]
		const BACMARSLPTOKENPooluY972LK = await BACMARSLPTOKENPool.new(addresscivysKq, addressKg7LPQU, addressr9a513g, {from: accounts[4]});
		const addresswr6zh0z = accounts[2]
		const uintNN9zOdZ = BigInt("1086")
		const uintvwYlpJ = BigInt("866")
		const uinte4AEB31 = BigInt("1739")
		const uint256WB6Jy74 = await BACMARSLPTOKENPooluY972LK.earned.call(addresswr6zh0z, {from: accounts[1]});
		await BACMARSLPTOKENPooluY972LK.onlyRewardsDistribution.call({from: accounts[1]});
		await BACMARSLPTOKENPooluY972LK.nonReentrant.call({from: accounts[1]});
		const uint256axBKxIG = await BACMARSLPTOKENPooluY972LK.notifyRewardAmount.call(uintNN9zOdZ, {from: "0x0000000000000000000000000000000000000001"});
		const uint256S5Knvf = await BACMARSLPTOKENPooluY972LK.stake.call(uintvwYlpJ, {from: accounts[2]});
		const uint256iIoGG7Z = await BACMARSLPTOKENPooluY972LK.withdraw.call(uinte4AEB31, {from: accounts[5]});

		assert.equal(uint256WB6Jy74, BigInt("0"))
		await expect(BACMARSLPTOKENPooluY972LK.onlyRewardsDistribution.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringT3kgAz = "2iRolvTWlNgZOX0J4vWiunedpwU5oGVMZKQf74wBhqhLov1BS7xi48BdLxL8OmNOzjDF3d4QvtvtnE"
		const stringN2EMTzQ = "nsOnctfYm3ctWYryh5Ggku4VQG3CWpYgGeIGFojJ2mnKoljX"
		const uintoHzeCOx = BigInt("50")
		const BACMARSLPTOKENPoolprBrkRE = await BACMARSLPTOKENPool.new(stringT3kgAz, stringN2EMTzQ, uintoHzeCOx, {from: accounts[5]});
		const uintdF1r5rK = BigInt("754")
		const uint256FI8YdYn = await BACMARSLPTOKENPoolprBrkRE.withdraw.call(uintdF1r5rK, {from: accounts[3]});
		await BACMARSLPTOKENPoolprBrkRE.exit.call({from: accounts[4]});
		await BACMARSLPTOKENPoolprBrkRE.onlyRewardsDistribution.call({from: accounts[1]});
		await BACMARSLPTOKENPoolprBrkRE.onlyRewardsDistribution.call({from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressJ63mcyZ = accounts[1]
		const addressY7RzYUB = accounts[0]
		const addressH4k1HYo = accounts[1]
		const BACMARSLPTOKENPoolafybKjl = await BACMARSLPTOKENPool.new(addressJ63mcyZ, addressY7RzYUB, addressH4k1HYo, {from: accounts[2]});
		const addressHzpAFkt = accounts[3]
		const addressIj67YQ = accounts[1]
		const uint256DSuVzVE = await BACMARSLPTOKENPoolafybKjl.balanceOf.call(addressHzpAFkt, {from: accounts[2]});
		const uint256pafJxx = await BACMARSLPTOKENPoolafybKjl.rewardPerToken.call({from: accounts[2]});
		const uint256fSnZ0e7 = await BACMARSLPTOKENPoolafybKjl.balanceOf.call(addressIj67YQ, {from: accounts[3]});
		await BACMARSLPTOKENPoolafybKjl.onlyRewardsDistribution.call({from: accounts[0]});
		await BACMARSLPTOKENPoolafybKjl.onlyRewardsDistribution.call({from: accounts[3]});

		assert.equal(uint256DSuVzVE, BigInt("0"))
		assert.equal(uint256fSnZ0e7, BigInt("0"))
		assert.equal(uint256pafJxx, BigInt("0"))
		await expect(BACMARSLPTOKENPoolafybKjl.onlyRewardsDistribution.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressexhMSBW = accounts[2]
		const addressLV679ci = accounts[4]
		const addressNoSBFxM = accounts[2]
		const BACMARSLPTOKENPooluY972LK = await BACMARSLPTOKENPool.new(addressexhMSBW, addressLV679ci, addressNoSBFxM, {from: accounts[4]});
		const addressi1jJTJ9 = accounts[2]
		const bytepR5BpbM = "0x1b161514031617061c161e0f1e151e1f0f160807142020181f100608150e0d0b"
		const byteGoiUnUx = "0x180a07091d17000312141f0e14000d1f1f0d05120f1f061a201808021c000104"
		const uintCoTGZIv = BigInt("25")
		const uintDWnPYJe = BigInt("871")
		const uintXmun31P = BigInt("967")
		const uintwiqhcGo = BigInt("1063")
		const uintLzmEIL9 = BigInt("1739")
		const uint256WB6Jy74 = await BACMARSLPTOKENPooluY972LK.earned.call(addressi1jJTJ9, {from: accounts[1]});
		const uint256jLXYpLW = await BACMARSLPTOKENPooluY972LK.stakeWithPermit.call(uintXmun31P, uintDWnPYJe, uintCoTGZIv, byteGoiUnUx, bytepR5BpbM, {from: accounts[3]});
		await BACMARSLPTOKENPooluY972LK.onlyRewardsDistribution.call({from: accounts[1]});
		await BACMARSLPTOKENPooluY972LK.nonReentrant.call({from: accounts[1]});
		const uint256axBKxIG = await BACMARSLPTOKENPooluY972LK.notifyRewardAmount.call(uintwiqhcGo, {from: "0x0000000000000000000000000000000000000001"});
		const uint256iIoGG7Z = await BACMARSLPTOKENPooluY972LK.withdraw.call(uintLzmEIL9, {from: accounts[5]});

		assert.equal(uint256WB6Jy74, BigInt("0"))
		await expect(BACMARSLPTOKENPooluY972LK.stakeWithPermit.call(uintXmun31P, uintDWnPYJe, uintCoTGZIv, byteGoiUnUx, bytepR5BpbM, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressOE978ZU = accounts[2]
		const addressiYwFypA = accounts[4]
		const addressmoKPptB = accounts[2]
		const BACMARSLPTOKENPooluY972LK = await BACMARSLPTOKENPool.new(addressOE978ZU, addressiYwFypA, addressmoKPptB, {from: accounts[4]});
		const addressuINBhdS = accounts[2]
		const uintVNTNuW1 = BigInt("1092")
		const uintFmq0ELq = BigInt("1086")
		const uintQXIQ43Y = BigInt("1739")
		const uint256WB6Jy74 = await BACMARSLPTOKENPooluY972LK.earned.call(addressuINBhdS, {from: accounts[1]});
		const uint256zMVO36n = await BACMARSLPTOKENPooluY972LK.stake.call(uintVNTNuW1, {from: accounts[3]});
		await BACMARSLPTOKENPooluY972LK.onlyRewardsDistribution.call({from: accounts[1]});
		await BACMARSLPTOKENPooluY972LK.nonReentrant.call({from: accounts[1]});
		const uint256axBKxIG = await BACMARSLPTOKENPooluY972LK.notifyRewardAmount.call(uintFmq0ELq, {from: "0x0000000000000000000000000000000000000001"});
		const uint256iIoGG7Z = await BACMARSLPTOKENPooluY972LK.withdraw.call(uintQXIQ43Y, {from: accounts[5]});

		assert.equal(uint256WB6Jy74, BigInt("0"))
		await expect(BACMARSLPTOKENPooluY972LK.stake.call(uintVNTNuW1, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressPuApidW = accounts[2]
		const addressr3V8ZAE = accounts[4]
		const addressv2q5eW = accounts[2]
		const BACMARSLPTOKENPooluY972LK = await BACMARSLPTOKENPool.new(addressPuApidW, addressr3V8ZAE, addressv2q5eW, {from: accounts[4]});
		const addressYUd9dV4 = accounts[2]
		const addressGaN8E97 = accounts[3]
		const uintTbFRbzz = BigInt("1888")
		const uintVyxJmdR = BigInt("1086")
		const uintEjUKB9T = BigInt("1739")
		const uint256WB6Jy74 = await BACMARSLPTOKENPooluY972LK.earned.call(addressYUd9dV4, {from: accounts[1]});
		const uint256zjpZpFz = await BACMARSLPTOKENPooluY972LK.earned.call(addressGaN8E97, {from: accounts[2]});
		const uint256Lrqo7FM = await BACMARSLPTOKENPooluY972LK.notifyRewardAmount.call(uintTbFRbzz, {from: accounts[1]});
		await BACMARSLPTOKENPooluY972LK.onlyRewardsDistribution.call({from: accounts[1]});
		await BACMARSLPTOKENPooluY972LK.nonReentrant.call({from: accounts[1]});
		const uint256axBKxIG = await BACMARSLPTOKENPooluY972LK.notifyRewardAmount.call(uintVyxJmdR, {from: "0x0000000000000000000000000000000000000001"});
		const uint256iIoGG7Z = await BACMARSLPTOKENPooluY972LK.withdraw.call(uintEjUKB9T, {from: accounts[5]});

		assert.equal(uint256WB6Jy74, BigInt("0"))
		assert.equal(uint256zjpZpFz, BigInt("0"))
		await expect(BACMARSLPTOKENPooluY972LK.notifyRewardAmount.call(uintTbFRbzz, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringjeWNW1Q = "XRMQTWdEIII54l88UM2a9CQWsGySUt"
		const stringpEZxaLU = "oniP1vPy4nIMMOytJjj4a35TUA6wzgoztedus2IApOwSTXmwW6Kj8k5xvYZrMow4dSFvNDanA8ErviyYa04LmbqS"
		const uintf4rpKwN = BigInt("86")
		const BACMARSLPTOKENPoolhM5iUh = await BACMARSLPTOKENPool.new(stringjeWNW1Q, stringpEZxaLU, uintf4rpKwN, {from: accounts[2]});
		const uintNRKop4 = BigInt("305")
		const uint256IgNooQB = await BACMARSLPTOKENPoolhM5iUh.notifyRewardAmount.call(uintNRKop4, {from: accounts[0]});
		const uint8blerHn = await BACMARSLPTOKENPoolhM5iUh.decimals.call({from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringLhjbSb8 = "BNzDPM4anvLuX88AKCrkHz8B5czZhVflfU6EiAP8xpuA3BpDL7Fb9pY"
		const stringhQMvUpO = "L55KwWGl1Ur2iEFhgAIGLLlBDUYhU4rQGmIuT7egD"
		const uintUoZZ1vg = BigInt("244")
		const BACMARSLPTOKENPoolwwJiFAC = await BACMARSLPTOKENPool.new(stringLhjbSb8, stringhQMvUpO, uintUoZZ1vg, {from: accounts[3]});
		const uintIIUylY4 = BigInt("1621")
		const uintMZc9LK = BigInt("1553")
		const uint256Q6zaU1Z = await BACMARSLPTOKENPoolwwJiFAC.notifyRewardAmount.call(uintIIUylY4, {from: accounts[1]});
		await BACMARSLPTOKENPoolwwJiFAC.getReward.call({from: accounts[2]});
		const uint256g7jzRCn = await BACMARSLPTOKENPoolwwJiFAC.stake.call(uintMZc9LK, {from: accounts[5]});
		await BACMARSLPTOKENPoolwwJiFAC.onlyRewardsDistribution.call({from: accounts[3]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressamR8lTM = accounts[2]
		const addressctnp68x = accounts[4]
		const addressicYOC5 = accounts[2]
		const BACMARSLPTOKENPooluY972LK = await BACMARSLPTOKENPool.new(addressamR8lTM, addressctnp68x, addressicYOC5, {from: accounts[4]});
		const addresswDYhHwE = accounts[4]
		const uint256WB6Jy74 = await BACMARSLPTOKENPooluY972LK.earned.call(addresswDYhHwE, {from: accounts[1]});
		const uint256PWtUFX = await BACMARSLPTOKENPooluY972LK.totalSupply.call({from: accounts[1]});
		await BACMARSLPTOKENPooluY972LK.onlyRewardsDistribution.call({from: accounts[1]});
		await BACMARSLPTOKENPooluY972LK.nonReentrant.call({from: accounts[1]});

		assert.equal(uint256PWtUFX, BigInt("0"))
		assert.equal(uint256WB6Jy74, BigInt("0"))
		await expect(BACMARSLPTOKENPooluY972LK.onlyRewardsDistribution.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressLGowW9Z = accounts[2]
		const addressAKqtrjQ = accounts[4]
		const addressvKks3Wb = accounts[2]
		const BACMARSLPTOKENPooluY972LK = await BACMARSLPTOKENPool.new(addressLGowW9Z, addressAKqtrjQ, addressvKks3Wb, {from: accounts[4]});
		const addresspCOK21B = accounts[3]
		const uint256WB6Jy74 = await BACMARSLPTOKENPooluY972LK.earned.call(addresspCOK21B, {from: accounts[1]});
		const uint256UcdDPYP = await BACMARSLPTOKENPooluY972LK.totalSupply.call({from: accounts[2]});
		await BACMARSLPTOKENPooluY972LK.getReward.call({from: accounts[3]});
		await BACMARSLPTOKENPooluY972LK.onlyRewardsDistribution.call({from: accounts[1]});

		assert.equal(uint256UcdDPYP, BigInt("0"))
		assert.equal(uint256WB6Jy74, BigInt("0"))
		await expect(BACMARSLPTOKENPooluY972LK.getReward.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringwAilQBB = "SsIxIXm5EnXZ8BWjWgLyfnc9tGk4rDK4zzo8wwJaMyzykup5Wow1XnU5bp"
		const stringXa2St3X = "8f397pS6u0Asjlz2OVRA5CdDqNBaJKk8GTRmD3gwO5BmFj5ZKLkvYnjMQ3lqYHJO2TEiLLpWNEOKcrv4PNkgAWHVzw"
		const uintAUWOVUH = BigInt("196")
		const BACMARSLPTOKENPoolgmc4gVf = await BACMARSLPTOKENPool.new(stringwAilQBB, stringXa2St3X, uintAUWOVUH, {from: accounts[4]});
		const addressyoYKjKw = accounts[1]
		const uint256z3kbIzU = await BACMARSLPTOKENPoolgmc4gVf.balanceOf.call(addressyoYKjKw, {from: "0x0000000000000000000000000000000000000001"});
		const uint256CLchjz4 = await BACMARSLPTOKENPoolgmc4gVf.getRewardForDuration.call({from: accounts[0]});
		const uint256AacmxH1 = await BACMARSLPTOKENPoolgmc4gVf.getRewardForDuration.call({from: accounts[4]});
		const stringRyLdG9m = await BACMARSLPTOKENPoolgmc4gVf.symbol.call({from: accounts[2]});
		const uint256qezBU2B = await BACMARSLPTOKENPoolgmc4gVf.getRewardForDuration.call({from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringu8gQa1f = "DVxnm7YNKNHBWJFISFCm1T8Ne9PnjtSQ3LvsgBUhdfsN27vxQBJhiNjGHuynj8upx48uSTHeO9yr"
		const stringsMpuAqu = "c7doNi7omqBLwuMesWkQ9AN4XeBWSEuJ4rBIr3KGi5UhSb4zWAy1lHGAk4ZVUK5Yuv9zwNmuzWM9ebihBppzNcpySRcx"
		const uintdL9i6VI = BigInt("173")
		const BACMARSLPTOKENPoolz6t6j4 = await BACMARSLPTOKENPool.new(stringu8gQa1f, stringsMpuAqu, uintdL9i6VI, {from: accounts[3]});
		const uinthYIWHd = BigInt("564")
		const uint2560FT4qY = await BACMARSLPTOKENPoolz6t6j4.notifyRewardAmount.call(uinthYIWHd, {from: accounts[0]});
		const uint256IzmMm0h = await BACMARSLPTOKENPoolz6t6j4.lastTimeRewardApplicable.call({from: accounts[4]});
		const uint256CkccdYC = await BACMARSLPTOKENPoolz6t6j4.getRewardForDuration.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressw709QqV = accounts[2]
		const addressAGlFxrI = accounts[4]
		const addresslN5zpSk = accounts[2]
		const BACMARSLPTOKENPooluY972LK = await BACMARSLPTOKENPool.new(addressw709QqV, addressAGlFxrI, addresslN5zpSk, {from: accounts[4]});
		const addressB7nYkKa = accounts[3]
		const uint256WB6Jy74 = await BACMARSLPTOKENPooluY972LK.earned.call(addressB7nYkKa, {from: accounts[1]});
		const uint256EwMQpPT = await BACMARSLPTOKENPooluY972LK.getRewardForDuration.call({from: accounts[2]});
		await BACMARSLPTOKENPooluY972LK.onlyRewardsDistribution.call({from: accounts[2]});

		assert.equal(uint256EwMQpPT, BigInt("0"))
		assert.equal(uint256WB6Jy74, BigInt("0"))
		await expect(BACMARSLPTOKENPooluY972LK.onlyRewardsDistribution.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressjje6gX = accounts[2]
		const addressXlzwqVi = accounts[4]
		const addressvmog9b0 = accounts[2]
		const BACMARSLPTOKENPooluY972LK = await BACMARSLPTOKENPool.new(addressjje6gX, addressXlzwqVi, addressvmog9b0, {from: accounts[4]});
		const addressHm0iLWW = accounts[1]
		const address7feLpp = accounts[5]
		await BACMARSLPTOKENPooluY972LK.exit.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256JxEchna = await BACMARSLPTOKENPooluY972LK.balanceOf.call(addressHm0iLWW, {from: accounts[0]});
		const uint256WB6Jy74 = await BACMARSLPTOKENPooluY972LK.earned.call(address7feLpp, {from: accounts[1]});

		await expect(BACMARSLPTOKENPooluY972LK.exit.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressDzfbueo = accounts[2]
		const addressZfiDxKq = accounts[4]
		const addresstplTuDy = accounts[2]
		const BACMARSLPTOKENPooluY972LK = await BACMARSLPTOKENPool.new(addressDzfbueo, addressZfiDxKq, addresstplTuDy, {from: accounts[4]});
		const addressTdmHy3 = accounts[3]
		const uintWiFV68O = BigInt("1321")
		const uint256WB6Jy74 = await BACMARSLPTOKENPooluY972LK.earned.call(addressTdmHy3, {from: accounts[1]});
		const uint256LSCnhEj = await BACMARSLPTOKENPooluY972LK.withdraw.call(uintWiFV68O, {from: accounts[1]});
		const uint256X68RDWT = await BACMARSLPTOKENPooluY972LK.getRewardForDuration.call({from: accounts[2]});

		assert.equal(uint256WB6Jy74, BigInt("0"))
		await expect(BACMARSLPTOKENPooluY972LK.withdraw.call(uintWiFV68O, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringMfIA08w = "WRZg3VXwupm2Z6qVYxKVd5QgkiFpCqimlGR9yK0PnjUgKptoc6kVym8vE40ypYLBIlLRYiHrMlHb28"
		const stringJ36GM1Y = "3G0hTFkRzxit8WXyFcooekd6GEnY3F562PW1GnByBwGvlFTleBGsxhpMrHdvjTK1NB"
		const uintKNgTXE = BigInt("148")
		const BACMARSLPTOKENPoolARRCFm = await BACMARSLPTOKENPool.new(stringMfIA08w, stringJ36GM1Y, uintKNgTXE, {from: accounts[1]});
		const uintfVmkE71 = BigInt("1917")
		await BACMARSLPTOKENPoolARRCFm.getReward.call({from: accounts[2]});
		const uint256ymmhql7 = await BACMARSLPTOKENPoolARRCFm.notifyRewardAmount.call(uintfVmkE71, {from: accounts[0]});
		const uint8RAfLNAs = await BACMARSLPTOKENPoolARRCFm.decimals.call({from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringNUiq9oo = "ogcPJ5Xql9"
		const stringrzYK1SZ = "JbVwmhBKMuNu6IgfjYzIEKUYNU3aG21vMKJ9lIGcTtpdcnPNy"
		const uintS7sY96i = BigInt("164")
		const BACMARSLPTOKENPoolePnKpLK = await BACMARSLPTOKENPool.new(stringNUiq9oo, stringrzYK1SZ, uintS7sY96i, {from: accounts[0]});
		const addressp5kTtib = accounts[3]
		const addressI7BwJgC = accounts[3]
		const uint256c1XYPge = await BACMARSLPTOKENPoolePnKpLK.earned.call(addressp5kTtib, {from: accounts[0]});
		const uint256epxzWif = await BACMARSLPTOKENPoolePnKpLK.getRewardForDuration.call({from: accounts[0]});
		const uint256CPN99Wu = await BACMARSLPTOKENPoolePnKpLK.balanceOf.call(addressI7BwJgC, {from: "0x0000000000000000000000000000000000000001"});
		await BACMARSLPTOKENPoolePnKpLK.onlyRewardsDistribution.call({from: accounts[4]});
		await BACMARSLPTOKENPoolePnKpLK.onlyRewardsDistribution.call({from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringDO2zQyk = "T56urcLx9adv1khUBH7Zw7j7lpws3ztHoB3bNe3k3EKm23sqIxKf5vCo"
		const stringlyIpZRU = "7L2"
		const uintUub0Yea = BigInt("46")
		const BACMARSLPTOKENPoolk4t7yup = await BACMARSLPTOKENPool.new(stringDO2zQyk, stringlyIpZRU, uintUub0Yea, {from: accounts[3]});
		const uintpL2d0mi = BigInt("1497")
		const addressAJ3v5ZL = accounts[1]
		const addressXr35RDO = "0x0000000000000000000000000000000000000001"
		const uint256YZMbk50 = await BACMARSLPTOKENPoolk4t7yup.stake.call(uintpL2d0mi, {from: accounts[2]});
		const uint256d1qQwqY = await BACMARSLPTOKENPoolk4t7yup.balanceOf.call(addressAJ3v5ZL, {from: accounts[4]});
		const address7kyuRq = await BACMARSLPTOKENPoolk4t7yup.updateReward.call(addressXr35RDO, {from: accounts[3]});
		await BACMARSLPTOKENPoolk4t7yup.onlyRewardsDistribution.call({from: accounts[4]});
		const uint256e8yKGWY = await BACMARSLPTOKENPoolk4t7yup.lastTimeRewardApplicable.call({from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringRIhxbv = "JChQcygxGoAkRHfdwifUpkTKKR0M4zdKWJZKAz0IQiei3YTCqAj"
		const stringNIo0t1p = "pBCCy62CiFwVKIpTEQfm"
		const uintX2sF5nI = BigInt("207")
		const BACMARSLPTOKENPoolitPqiuR = await BACMARSLPTOKENPool.new(stringRIhxbv, stringNIo0t1p, uintX2sF5nI, {from: accounts[4]});
		const uintfRO2A4F = BigInt("2043")
		const addressSF1VHXp = accounts[5]
		const uint256PSHDAhF = await BACMARSLPTOKENPoolitPqiuR.withdraw.call(uintfRO2A4F, {from: accounts[5]});
		await BACMARSLPTOKENPoolitPqiuR.exit.call({from: accounts[3]});
		const uint256F0GunPl = await BACMARSLPTOKENPoolitPqiuR.rewardPerToken.call({from: accounts[4]});
		const uint256FDjFYYz = await BACMARSLPTOKENPoolitPqiuR.earned.call(addressSF1VHXp, {from: accounts[4]});
		await BACMARSLPTOKENPoolitPqiuR.nonReentrant.call({from: accounts[3]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringy3Oz3Dn = "5b2at8Ui1XsitKuAXyudKgutnqi2R5zs8adRHn91Xl3XJGyOJDisnS817ErxP7QjLYELCpcgCLdh0pcuQGtzvc4WzYbleSaw"
		const stringkplx14l = "IXwEHG5kLQIxwEG1c3d2hzdj8GIcDnjBlqLBtgjHdAg1WEnpDHmGsMK876tm24egkJtnqanNQvTosdVQBmkWUZvoi8YvI73eqt"
		const uintGuI6d51 = BigInt("6")
		const BACMARSLPTOKENPoolBZbuL8J = await BACMARSLPTOKENPool.new(stringy3Oz3Dn, stringkplx14l, uintGuI6d51, {from: accounts[1]});
		const byteRsudJaq = "0x130b160b161107110119070e070511171e0e110f170f0c0c09050a1c0d010d1b"
		const byteUvZQA6N = "0x031f1c13041501031b0b0e15020b18080101080511171c0c071b06160312031d"
		const uintMwIQUGS = BigInt("130")
		const uintuWSX8vc = BigInt("29")
		const uintarMfG4R = BigInt("821")
		const uintyJUx5ZE = BigInt("1606")
		const uint256m6awyy = await BACMARSLPTOKENPoolBZbuL8J.stakeWithPermit.call(uintarMfG4R, uintuWSX8vc, uintMwIQUGS, byteUvZQA6N, byteRsudJaq, {from: accounts[4]});
		const uint256rjiVqwM = await BACMARSLPTOKENPoolBZbuL8J.notifyRewardAmount.call(uintyJUx5ZE, {from: accounts[0]});
		await BACMARSLPTOKENPoolBZbuL8J.getReward.call({from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringQikFZq0 = "SGzSAW9i5m7yH5z7s8"
		const stringloAU9ZH = "f18HqUGLgz4mDGRF4gUHz4ptO"
		const uintos4nMZv = BigInt("166")
		const BACMARSLPTOKENPoolkGQRzrc = await BACMARSLPTOKENPool.new(stringQikFZq0, stringloAU9ZH, uintos4nMZv, {from: accounts[3]});
		const uintsBZWEyg = BigInt("1936")
		const uintxhJjIM0 = BigInt("1055")
		const addresscUoo15q = accounts[5]
		await BACMARSLPTOKENPoolkGQRzrc.getReward.call({from: accounts[1]});
		const uint256ZKqi2sq = await BACMARSLPTOKENPoolkGQRzrc.withdraw.call(uintsBZWEyg, {from: accounts[2]});
		const uint256o1DfUpL = await BACMARSLPTOKENPoolkGQRzrc.notifyRewardAmount.call(uintxhJjIM0, {from: accounts[4]});
		const uint256iR4y5C = await BACMARSLPTOKENPoolkGQRzrc.earned.call(addresscUoo15q, {from: accounts[3]});
		await BACMARSLPTOKENPoolkGQRzrc.exit.call({from: accounts[0]});
		await BACMARSLPTOKENPoolkGQRzrc.onlyRewardsDistribution.call({from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringktxvkzs = "BwqVD7deDVTMig7Vw1BRTlRaCoKpiYwEDp"
		const stringz1PGO0P = "V7Grq9Lu78fHxD07GM2ZURydMXm1I5k3CJ8J23H1nDQzNvrjJnWPH01le2qN6Pet7CrkEF"
		const uintTNWRVK = BigInt("236")
		const BACMARSLPTOKENPoolwg1Xysv = await BACMARSLPTOKENPool.new(stringktxvkzs, stringz1PGO0P, uintTNWRVK, {from: accounts[4]});
		const uintmObANcw = BigInt("217")
		await BACMARSLPTOKENPoolwg1Xysv.getReward.call({from: accounts[5]});
		const uint256OJOBOyK = await BACMARSLPTOKENPoolwg1Xysv.getRewardForDuration.call({from: accounts[1]});
		const uint256CSZVnR0 = await BACMARSLPTOKENPoolwg1Xysv.stake.call(uintmObANcw, {from: accounts[1]});
		const uint256Nj7Hr4p = await BACMARSLPTOKENPoolwg1Xysv.getRewardForDuration.call({from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringWUXkzCQ = "Mnd0g1eI2B0kKepAIWAaG4OAfOjro6X5NasHOfMx"
		const stringCTcVvMk = "uWeJkjeJii7NLF6jFl0hlWaVMgmegzlvkvhjzyd0todygp8cjXWkDIzcVTH6GmerDSl48pPFFADchr42aAIo4Luk8f"
		const uintVj6lMxl = BigInt("138")
		const BACMARSLPTOKENPool8fcrVi = await BACMARSLPTOKENPool.new(stringWUXkzCQ, stringCTcVvMk, uintVj6lMxl, {from: accounts[3]});
		await BACMARSLPTOKENPool8fcrVi.getReward.call({from: accounts[2]});
		await BACMARSLPTOKENPool8fcrVi.nonReentrant.call({from: accounts[5]});
		await BACMARSLPTOKENPool8fcrVi.exit.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256BL8X1Ko = await BACMARSLPTOKENPool8fcrVi.rewardPerToken.call({from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringWKstaW8 = "8fih1lbH8jVVsMUMrDVNxrA1fWu1A7G3W1LLnTc8Nlk5TQahPldA4"
		const stringK6u1YXR = "On7LVp68HKONY5R6"
		const uint9m2TXf = BigInt("117")
		const BACMARSLPTOKENPoolvOTcbOL = await BACMARSLPTOKENPool.new(stringWKstaW8, stringK6u1YXR, uint9m2TXf, {from: accounts[1]});
		const addressfe0O1Up = accounts[1]
		await BACMARSLPTOKENPoolvOTcbOL.exit.call({from: accounts[2]});
		const uint256ZqYcA9 = await BACMARSLPTOKENPoolvOTcbOL.earned.call(addressfe0O1Up, {from: accounts[2]});
		const uint256Ipp206T = await BACMARSLPTOKENPoolvOTcbOL.totalSupply.call({from: accounts[0]});
		const stringhzMErNo = await BACMARSLPTOKENPoolvOTcbOL.symbol.call({from: accounts[4]});
		const stringK2qzwX = await BACMARSLPTOKENPoolvOTcbOL.name.call({from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringKWR4cmr = "I1U2gvAkCBGyIWacmJrGfHOdWSajqwIscJYBqhQ81qTWVzeRsrbv3X8lkjtI54xY2OWcr7t8sJXm"
		const stringwJqTztc = "40WH8rM4A8hXVRq7bVtTAUnMifmsKS0ObI27beNxThSLceP2D2dBNnvHBSfJjEqDRazqDEnaDHELbOmKGW9Igp8hw"
		const uintQzHEvN = BigInt("161")
		const BACMARSLPTOKENPoolnPEVacg = await BACMARSLPTOKENPool.new(stringKWR4cmr, stringwJqTztc, uintQzHEvN, {from: accounts[2]});
		const byteJlyhWzI = "0x1a1d0b1d10111605160714151b07161017121e160918081f011e061d1d131903"
		const bytea1NyvU7 = "0x140002021a10121b14040d0f0e0d16070a160e012002100e1e1911140f170819"
		const uintne39iTe = BigInt("56")
		const uintWMtkPu6 = BigInt("2013")
		const uintzSjHUub = BigInt("311")
		const addresscEFcoqw = accounts[4]
		const addresspCwhTZe = accounts[4]
		const uint2561EROdf = await BACMARSLPTOKENPoolnPEVacg.stakeWithPermit.call(uintzSjHUub, uintWMtkPu6, uintne39iTe, bytea1NyvU7, byteJlyhWzI, {from: "0x0000000000000000000000000000000000000001"});
		const uint256AE3EXtW = await BACMARSLPTOKENPoolnPEVacg.earned.call(addresscEFcoqw, {from: accounts[2]});
		const uint256M3V0JhQ = await BACMARSLPTOKENPoolnPEVacg.rewardPerToken.call({from: accounts[3]});
		const uint256lak25Aa = await BACMARSLPTOKENPoolnPEVacg.balanceOf.call(addresspCwhTZe, {from: accounts[0]});
		const uint256gmNA6X = await BACMARSLPTOKENPoolnPEVacg.lastTimeRewardApplicable.call({from: accounts[3]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressSwP56DG = accounts[2]
		const addressqPxfkhQ = accounts[4]
		const addressjJBLBHc = accounts[2]
		const BACMARSLPTOKENPooluY972LK = await BACMARSLPTOKENPool.new(addressSwP56DG, addressqPxfkhQ, addressjJBLBHc, {from: accounts[4]});
		const addressmU0l6VX = accounts[4]
		const uintrgO0eBU = BigInt("1057")
		const uint256WB6Jy74 = await BACMARSLPTOKENPooluY972LK.earned.call(addressmU0l6VX, {from: accounts[1]});
		const uint256tsqmX8I = await BACMARSLPTOKENPooluY972LK.notifyRewardAmount.call(uintrgO0eBU, {from: accounts[2]});

		assert.equal(uint256WB6Jy74, BigInt("0"))
		await expect(BACMARSLPTOKENPooluY972LK.notifyRewardAmount.call(uintrgO0eBU, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringBpPquBb = "k8Ec3pIvaKR342RLJ7HnjDP7gPo41yn2qLplxn1ya0mUKoRexilW6pYiqzJxTUFj3Wq5ueIODr6spmicO7dXdBZ"
		const stringj4rNZFG = "Fw6saeuCLmFnyQ8cpOvYo0J"
		const uintmZVAOTk = BigInt("173")
		const BACMARSLPTOKENPoolO3GN606 = await BACMARSLPTOKENPool.new(stringBpPquBb, stringj4rNZFG, uintmZVAOTk, {from: "0x0000000000000000000000000000000000000001"});
		const uinteSWVvV = BigInt("1591")
		const addressK4dD6L4 = accounts[2]
		const uint8WvInr7E = await BACMARSLPTOKENPoolO3GN606.decimals.call({from: accounts[0]});
		const uint256F8557P = await BACMARSLPTOKENPoolO3GN606.stake.call(uinteSWVvV, {from: accounts[3]});
		const uint256KHxRrFY = await BACMARSLPTOKENPoolO3GN606.lastTimeRewardApplicable.call({from: accounts[0]});
		const uint256njMQjA2 = await BACMARSLPTOKENPoolO3GN606.lastTimeRewardApplicable.call({from: accounts[3]});
		await BACMARSLPTOKENPoolO3GN606.onlyRewardsDistribution.call({from: accounts[4]});
		const uint256h5c3BY = await BACMARSLPTOKENPoolO3GN606.earned.call(addressK4dD6L4, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringq2O3bb8 = "KPmPTRhY335KvvBLYsBoVPhFf0uoasSjF7i4i45Pb9e6wuWaiOVapOup7ZO1nUM9HLvxtNd"
		const stringPeA1n5R = "guH4FfAJD7uX2Ost8SB8lzlVR3QjtLufiWludG7F2LyXhvz9HAQMr1VJ55FEx4MAv7P1BD6bM6TULR7RDMXf2dn"
		const uintPqqNzRk = BigInt("150")
		const BACMARSLPTOKENPoolUww3KA2 = await BACMARSLPTOKENPool.new(stringq2O3bb8, stringPeA1n5R, uintPqqNzRk, {from: accounts[2]});
		const addressMylYpf = "0x0000000000000000000000000000000000000001"
		const uint8hyH7CaT = await BACMARSLPTOKENPoolUww3KA2.decimals.call({from: accounts[2]});
		const uint256gza9th = await BACMARSLPTOKENPoolUww3KA2.earned.call(addressMylYpf, {from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringnPfz7xy = "FMbOxw7OjmdPdNqDRHubVx3zYXmRfkhJKtJYxueqJxMp9NdSbenJ5mie9AHltvVrCNX1l2IuPUvNQMzL69ptJt93HSS8UexH"
		const stringgTLd7cE = "MdbMJsReoQCytQx5vl69kQ9Fu6iCRRaG78Kx97vLpXG9XJhgIGDQmItKr6H2"
		const uintnwpIYu6 = BigInt("67")
		const BACMARSLPTOKENPooliBQVqz0 = await BACMARSLPTOKENPool.new(stringnPfz7xy, stringgTLd7cE, uintnwpIYu6, {from: accounts[2]});
		const byteAW7k5SM = "0x14060b1304051e170b1b0b1602010f030918060f0b1e1311041a01001003161e"
		const byteFybB6Fx = "0x010903040a180d080b1b1e111a1f0718030813130a13040304081d031a20110d"
		const uintqffceDC = BigInt("54")
		const uintQYYkhX = BigInt("384")
		const uintrqP7gb9 = BigInt("160")
		const addressQ7zLSqt = accounts[1]
		const uint256liDWLtt = await BACMARSLPTOKENPooliBQVqz0.stakeWithPermit.call(uintrqP7gb9, uintQYYkhX, uintqffceDC, byteFybB6Fx, byteAW7k5SM, {from: accounts[1]});
		const stringvFOXLvz = await BACMARSLPTOKENPooliBQVqz0.symbol.call({from: accounts[3]});
		const uint256fMQVvc4 = await BACMARSLPTOKENPooliBQVqz0.lastTimeRewardApplicable.call({from: accounts[4]});
		await BACMARSLPTOKENPooliBQVqz0.onlyRewardsDistribution.call({from: accounts[0]});
		const addressS3enTS = await BACMARSLPTOKENPooliBQVqz0.updateReward.call(addressQ7zLSqt, {from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringM0tUVws = "RjkmIHMEp"
		const stringUQhtyrd = "uuqNqeuzCz0mes3PsqS7aKtDUMu1a4YFKEqqjV0aHdJFrK2ZXuqMT9glPFzGy5heVkxoWv21xiPDWGWhfPcH1PPQxYH"
		const uintvr00gPd = BigInt("48")
		const BACMARSLPTOKENPoolEi1gyyR = await BACMARSLPTOKENPool.new(stringM0tUVws, stringUQhtyrd, uintvr00gPd, {from: accounts[4]});
		const uintyj8uSms = BigInt("264")
		await BACMARSLPTOKENPoolEi1gyyR.exit.call({from: accounts[3]});
		const uint256FCSDJKY = await BACMARSLPTOKENPoolEi1gyyR.withdraw.call(uintyj8uSms, {from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringQcP7YOC = "uJhbGE3oaR5IMM8nkbSYHzeeuiXDSSUfUDP1PrMUiSfI3WGDeJMCEXiD"
		const stringeaJBM27 = "YMmyMNrws49G24srdSKYX1bO"
		const uintetdUqV = BigInt("215")
		const BACMARSLPTOKENPoolh6x8t64 = await BACMARSLPTOKENPool.new(stringQcP7YOC, stringeaJBM27, uintetdUqV, {from: "0x0000000000000000000000000000000000000001"});
		const uintc451l3k = BigInt("179")
		const byteiGRSAi1 = "0x1c1a0d16130f161e1603140c0411120a191e041a0e161906021a110d1b010601"
		const bytefl3HEVI = "0x010f191701101505110e03130c12021c1c1b181a160c081710200d0504011c13"
		const uintSfJoJJl = BigInt("121")
		const uintkIaxN5 = BigInt("1436")
		const uinttGr1QEU = BigInt("1240")
		const uint256Zjj3Sp = await BACMARSLPTOKENPoolh6x8t64.stake.call(uintc451l3k, {from: "0x0000000000000000000000000000000000000001"});
		await BACMARSLPTOKENPoolh6x8t64.exit.call({from: accounts[4]});
		const uint256QY9empy = await BACMARSLPTOKENPoolh6x8t64.stakeWithPermit.call(uinttGr1QEU, uintkIaxN5, uintSfJoJJl, bytefl3HEVI, byteiGRSAi1, {from: accounts[1]});
		const stringGE8MrPu = await BACMARSLPTOKENPoolh6x8t64.name.call({from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringiV0NH7M = "1jlruLOTwdqBT6KyQL9HdRMX63Xbrsu7QERk"
		const stringG1aI5mU = "YODSbf4nkMYPWRVcl4Ekg0aMdLHj6jUpY2kV7u8AFc7dkbReoJgo6V8h"
		const uintJakWzPU = BigInt("120")
		const BACMARSLPTOKENPoolOZN2781 = await BACMARSLPTOKENPool.new(stringiV0NH7M, stringG1aI5mU, uintJakWzPU, {from: accounts[5]});
		const byteVXCbjTc = "0x080f0d0a13131d0e141d01110119150f0219092009050705042009060b06070f"
		const byteE3fo02W = "0x0c191c071f061d10030501161f0f0d0b0a171a011d140106130913101f1d0102"
		const uintqzjra4t = BigInt("61")
		const uintvSafKcS = BigInt("620")
		const uintPXmu2K = BigInt("1427")
		await BACMARSLPTOKENPoolOZN2781.getReward.call({from: accounts[2]});
		const uint256Q5IUzHP = await BACMARSLPTOKENPoolOZN2781.lastTimeRewardApplicable.call({from: accounts[0]});
		const stringlSRdTfM = await BACMARSLPTOKENPoolOZN2781.name.call({from: accounts[2]});
		const uint256O4PHhFO = await BACMARSLPTOKENPoolOZN2781.stakeWithPermit.call(uintPXmu2K, uintvSafKcS, uintqzjra4t, byteE3fo02W, byteVXCbjTc, {from: accounts[1]});
		await BACMARSLPTOKENPoolOZN2781.onlyRewardsDistribution.call({from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringegEi4Ws = "TAfLczVsOmbbUPfoF6BkMS88pdzGlvVjsGYLuz0GcQ8zMbdEU9Yipr9Tvq14t8cBqpI"
		const stringk8GWhj9 = "jHaq95G8PkTbrCcGnvLDRBAyT6KIpPZvTNV32"
		const uintgsBic7H = BigInt("95")
		const BACMARSLPTOKENPoolB5NP4uA = await BACMARSLPTOKENPool.new(stringegEi4Ws, stringk8GWhj9, uintgsBic7H, {from: accounts[4]});
		const addressd5IAcGM = accounts[4]
		const addressVSFEdfT = accounts[4]
		await BACMARSLPTOKENPoolB5NP4uA.getReward.call({from: "0x0000000000000000000000000000000000000001"});
		await BACMARSLPTOKENPoolB5NP4uA.getReward.call({from: accounts[1]});
		const uint256tI6gfr4 = await BACMARSLPTOKENPoolB5NP4uA.earned.call(addressd5IAcGM, {from: accounts[3]});
		const uint256kCr0YL2 = await BACMARSLPTOKENPoolB5NP4uA.getRewardForDuration.call({from: accounts[2]});
		await BACMARSLPTOKENPoolB5NP4uA.nonReentrant.call({from: accounts[4]});
		const uint256B2lqAKx = await BACMARSLPTOKENPoolB5NP4uA.balanceOf.call(addressVSFEdfT, {from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringYJA4ugH = "qavbN83GA"
		const stringIj6jEm = "fKtvQ8u3sS0pmBaZ6bwci1yL6b8NSljEF73n"
		const uintmIyj0cJ = BigInt("22")
		const BACMARSLPTOKENPoolaAdp7Qv = await BACMARSLPTOKENPool.new(stringYJA4ugH, stringIj6jEm, uintmIyj0cJ, {from: "0x0000000000000000000000000000000000000001"});
		const uint256ZPlLC7R = await BACMARSLPTOKENPoolaAdp7Qv.rewardPerToken.call({from: accounts[3]});
		await BACMARSLPTOKENPoolaAdp7Qv.getReward.call({from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringhg3LX9y = "hEbdJfUiK7HPhGp3BCcIOB6x3U68HsFkzjypVSBXTAp4DcMD6wHr0mQJs2e"
		const stringqyrPsqL = "s3yGrXlDy0x3GTk4FI2SFThHGr1eooFrCJqxnsFynCRkvu7h"
		const uintXNScsI = BigInt("197")
		const BACMARSLPTOKENPoolyCH5dbT = await BACMARSLPTOKENPool.new(stringhg3LX9y, stringqyrPsqL, uintXNScsI, {from: accounts[1]});
		const addressoMQqZw = accounts[4]
		const uintQZXMQAh = BigInt("1251")
		const addressGw8563u = await BACMARSLPTOKENPoolyCH5dbT.updateReward.call(addressoMQqZw, {from: accounts[3]});
		await BACMARSLPTOKENPoolyCH5dbT.exit.call({from: accounts[1]});
		await BACMARSLPTOKENPoolyCH5dbT.exit.call({from: accounts[5]});
		const uint256u0bXfiR = await BACMARSLPTOKENPoolyCH5dbT.notifyRewardAmount.call(uintQZXMQAh, {from: accounts[2]});
		const uint256JKyRxGD = await BACMARSLPTOKENPoolyCH5dbT.lastTimeRewardApplicable.call({from: accounts[3]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringAzm4tTH = "eT3e6ApiHPhDFetReTAEX7RmOIRPKEc4NFWazGzsTrhpBgSndDmI4dukpL56DR4Q"
		const stringgjpkFQ = "uN6ulFI2fhts2ugxKiummA2bG8FWmyfezzmCPRTGWYOd1hDKf69dsG6swPqNrt0mQKdb"
		const uintu5uVgkf = BigInt("22")
		const BACMARSLPTOKENPoolVj51xh8 = await BACMARSLPTOKENPool.new(stringAzm4tTH, stringgjpkFQ, uintu5uVgkf, {from: accounts[0]});
		const addressMCggWDP = accounts[0]
		await BACMARSLPTOKENPoolVj51xh8.getReward.call({from: accounts[0]});
		await BACMARSLPTOKENPoolVj51xh8.nonReentrant.call({from: accounts[5]});
		const uint256EXZWef9 = await BACMARSLPTOKENPoolVj51xh8.earned.call(addressMCggWDP, {from: accounts[5]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringL2HqLFM = "VJSBRdkM6CkxGoeawAJCCeW86PjGFDGzcY6GM1AP46HnZu77kka"
		const stringXpcagfj = "EsFL3JJFee6AfzigGiFRsCM1VXKS8GjbqDZbmiL5QTTcYwL2uYjhtcB2x8ho1nCG8HR8DBBuNw2YWdr12Vvwuo7y"
		const uintDm12ofc = BigInt("213")
		const BACMARSLPTOKENPoollhGeqB9 = await BACMARSLPTOKENPool.new(stringL2HqLFM, stringXpcagfj, uintDm12ofc, {from: accounts[2]});
		const byteSKSKJYR = "0x0b0a010d1715121914061a1316110b071a0b131e0a1504041a090e011a1d1502"
		const bytepvdVJ3 = "0x1c200114021404140f0a15061d00180b0b04011d15131c07001d1c09100f1416"
		const uintUFWxoOa = BigInt("248")
		const uintgOwXapm = BigInt("1933")
		const uintf7VYwpo = BigInt("999")
		const addressd8UD1ny = accounts[4]
		const stringPFTcH36 = await BACMARSLPTOKENPoollhGeqB9.name.call({from: accounts[4]});
		await BACMARSLPTOKENPoollhGeqB9.getReward.call({from: accounts[0]});
		const uint256Z98r20N = await BACMARSLPTOKENPoollhGeqB9.rewardPerToken.call({from: accounts[4]});
		const uint256W8hXJEb = await BACMARSLPTOKENPoollhGeqB9.stakeWithPermit.call(uintf7VYwpo, uintgOwXapm, uintUFWxoOa, bytepvdVJ3, byteSKSKJYR, {from: accounts[3]});
		const stringWcxCsIH = await BACMARSLPTOKENPoollhGeqB9.symbol.call({from: accounts[2]});
		const uint256sGem0oU = await BACMARSLPTOKENPoollhGeqB9.balanceOf.call(addressd8UD1ny, {from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringAG8dqJ1 = "ADFmjV5pfp7NM2Q3euQ5NDQjn2XaqIKzar9x0kPX1dNyRxUfGGVrQEuW7ca7eBS3z3jiU7Zhp9IGEnHzKD2T5v"
		const stringmxHiOH5 = "eit5xBS2oLEeF3adRfUjLvtiqbCQrVwgsDVhDcR2siKLE2pys2TRTd3XAgwC3cCCp3KJUrM2c8B7b7e1UltiSvvkbJNo50"
		const uintxzRYVS0 = BigInt("250")
		const BACMARSLPTOKENPoolF61Ijby = await BACMARSLPTOKENPool.new(stringAG8dqJ1, stringmxHiOH5, uintxzRYVS0, {from: accounts[4]});
		const addressBa6THvr = accounts[4]
		const uintptUAzdY = BigInt("487")
		const uint256L3C71yj = await BACMARSLPTOKENPoolF61Ijby.lastTimeRewardApplicable.call({from: accounts[3]});
		const uint256h9oWbrb = await BACMARSLPTOKENPoolF61Ijby.balanceOf.call(addressBa6THvr, {from: accounts[4]});
		const uint256vf2WTWz = await BACMARSLPTOKENPoolF61Ijby.stake.call(uintptUAzdY, {from: accounts[4]});
		const uint256dJxveJ5 = await BACMARSLPTOKENPoolF61Ijby.totalSupply.call({from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringzFRybu6 = "KzzNmWYnjhUWfDBUot81lruv"
		const stringkiKaWp = "uzjRl6f"
		const uintEHuDE8R = BigInt("53")
		const BACMARSLPTOKENPoolBuw4qlM = await BACMARSLPTOKENPool.new(stringzFRybu6, stringkiKaWp, uintEHuDE8R, {from: "0x0000000000000000000000000000000000000001"});
		const byteX9A7UEL = "0x051f071501021c1f1a0c1d1e1f130a1c161a08091a0a0e18061e17060f0b020e"
		const bytefj6Zk2e = "0x1f07060e1c0918051a131c1d06191f1f170d1706130f190c0e19140902151609"
		const uintF8jQXW = BigInt("53")
		const uintBtm36K = BigInt("675")
		const uintspxsQpd = BigInt("1791")
		const uintaDt01Tt = BigInt("225")
		const addressVP141Kq = accounts[2]
		const uintpKY0N5q = BigInt("1434")
		await BACMARSLPTOKENPoolBuw4qlM.getReward.call({from: accounts[1]});
		const uint256RwFZOJL = await BACMARSLPTOKENPoolBuw4qlM.stakeWithPermit.call(uintspxsQpd, uintBtm36K, uintF8jQXW, bytefj6Zk2e, byteX9A7UEL, {from: accounts[4]});
		const uint256AcwXFtr = await BACMARSLPTOKENPoolBuw4qlM.notifyRewardAmount.call(uintaDt01Tt, {from: accounts[0]});
		const addressWpcWPT3 = await BACMARSLPTOKENPoolBuw4qlM.updateReward.call(addressVP141Kq, {from: accounts[0]});
		const uint256ZDTNsV = await BACMARSLPTOKENPoolBuw4qlM.withdraw.call(uintpKY0N5q, {from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringuSTIqmD = "JzcmS2FVRridD0kMFjK72PfDn81LFmAw"
		const stringVSIfAR9 = "Odtzcm6F682H24y14eHxMrBODTgApQ7tETAuwfYRsY2uPxIaCfa"
		const uinth1yMjUJ = BigInt("158")
		const BACMARSLPTOKENPoolLxmgQ2D = await BACMARSLPTOKENPool.new(stringuSTIqmD, stringVSIfAR9, uinth1yMjUJ, {from: accounts[2]});
		const uintsVhhIwp = BigInt("934")
		const uint256U08i04D = await BACMARSLPTOKENPoolLxmgQ2D.withdraw.call(uintsVhhIwp, {from: "0x0000000000000000000000000000000000000001"});
		await BACMARSLPTOKENPoolLxmgQ2D.getReward.call({from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringu97yvBA = "gGB2XttnyXuTv9tW8rsayr4TrmQgrQhAqe9HnkDwcSwuL32uW5wqHoXVDBwnlQUNztEHpsIyXsfQVxiG21T"
		const stringTSSVnWN = "WF1kDF2EjAkTvWtZzT7LUwXadMHB3SzISm00vM9YXm2AcKmAYqaGPViA8dVNFM0xdVffwgA7j4zMsyro5A57VTcjLa5vlL"
		const uintOnEZAn = BigInt("54")
		const BACMARSLPTOKENPooltbU2KNJ = await BACMARSLPTOKENPool.new(stringu97yvBA, stringTSSVnWN, uintOnEZAn, {from: accounts[1]});
		const uintP0yhxx = BigInt("2011")
		const addresscDokuXJ = "0x0000000000000000000000000000000000000001"
		const uintnXdu37B = BigInt("1600")
		const addressVZEzp7J = accounts[1]
		const uint256W5tHZnP = await BACMARSLPTOKENPooltbU2KNJ.stake.call(uintP0yhxx, {from: accounts[5]});
		const uint256y66FsHR = await BACMARSLPTOKENPooltbU2KNJ.balanceOf.call(addresscDokuXJ, {from: accounts[3]});
		const uint256Y6nMAN2 = await BACMARSLPTOKENPooltbU2KNJ.stake.call(uintnXdu37B, {from: accounts[0]});
		const uint256KQcuFth = await BACMARSLPTOKENPooltbU2KNJ.earned.call(addressVZEzp7J, {from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringefsGnOa = "CBSixnKmKVMd4sebsdqiwuRJFsfqDlgzTzLNNEjP11iCbfdSiHEyARptbuebWm2pHsNR1HAW8J9ebtcchqIKtArO1dPVWUSCzI"
		const stringPk4FxC6 = "iUmLTsyLrs4HlPCrcH4mcNsVH0BhylFpaoKF49mWicMSqesDE39UkPIN"
		const uintfymKu2N = BigInt("173")
		const BACMARSLPTOKENPoolIphc57q = await BACMARSLPTOKENPool.new(stringefsGnOa, stringPk4FxC6, uintfymKu2N, {from: accounts[5]});
		const uint256MIHEZXM = await BACMARSLPTOKENPoolIphc57q.rewardPerToken.call({from: accounts[3]});
		const uint256WwhbtrX = await BACMARSLPTOKENPoolIphc57q.rewardPerToken.call({from: accounts[3]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringgPNEpdc = "1zX6KCi8ig0Tgg2A21ntzHbd8sFrCfBY8zi4"
		const stringjVp8wyL = "MBvCzkC4s78dGTrmujgmwmx"
		const uintDqSTJr = BigInt("144")
		const BACMARSLPTOKENPooluEqszlx = await BACMARSLPTOKENPool.new(stringgPNEpdc, stringjVp8wyL, uintDqSTJr, {from: accounts[4]});
		const bytenq56NWZ = "0x021212040c03070c1c04200d0a201012091d020d1e1e170317041d1f1018201f"
		const byte3dzwpA = "0x10181b111f0d1f091118061e2001130c1b0d02061717190d080c15140d200f0c"
		const uintlFLBAbY = BigInt("62")
		const uintvUmLOFq = BigInt("978")
		const uinth38IxhG = BigInt("591")
		const uint2560Abgoc = await BACMARSLPTOKENPooluEqszlx.stakeWithPermit.call(uinth38IxhG, uintvUmLOFq, uintlFLBAbY, byte3dzwpA, bytenq56NWZ, {from: accounts[0]});
		await BACMARSLPTOKENPooluEqszlx.getReward.call({from: accounts[2]});
		await BACMARSLPTOKENPooluEqszlx.getReward.call({from: accounts[0]});
		await BACMARSLPTOKENPooluEqszlx.exit.call({from: accounts[0]});
		const uint256Dgw2VJ4 = await BACMARSLPTOKENPooluEqszlx.getRewardForDuration.call({from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringboT85ep = "69B96HSi6cMg4xsKODZ2HNgEMH1iWd"
		const stringmyNGRJi = "6RXWPBpno"
		const uintNdBP3G = BigInt("227")
		const BACMARSLPTOKENPoolYBKSgr = await BACMARSLPTOKENPool.new(stringboT85ep, stringmyNGRJi, uintNdBP3G, {from: accounts[3]});
		const uintrrxeF3c = BigInt("1463")
		const address3R7y1N = accounts[4]
		const uint256uc3hu4Y = await BACMARSLPTOKENPoolYBKSgr.totalSupply.call({from: accounts[3]});
		await BACMARSLPTOKENPoolYBKSgr.getReward.call({from: accounts[2]});
		const uint256gYp6gTA = await BACMARSLPTOKENPoolYBKSgr.notifyRewardAmount.call(uintrrxeF3c, {from: accounts[0]});
		const uint256gzAbKQ7 = await BACMARSLPTOKENPoolYBKSgr.balanceOf.call(address3R7y1N, {from: accounts[4]});
		await BACMARSLPTOKENPoolYBKSgr.exit.call({from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringZPjbxsB = "aIOYgqLOFoCD9PkVkKgB8szKk44BhlK1q38dgmBJ0INfUNpKLzj4yQauE54bb"
		const stringVsqvoTH = "drsJmvhR7XAmNMpWPM4oi3iHXjbZE1W3FXS3J6d85T7tfymdYS4g82wLedG7RXkPr5M1mtzWVVzRJ4nAPuyOFWWvzlORYa3Dq"
		const uintlgzwOxR = BigInt("231")
		const BACMARSLPTOKENPooleAwI2Jj = await BACMARSLPTOKENPool.new(stringZPjbxsB, stringVsqvoTH, uintlgzwOxR, {from: accounts[2]});
		const addressJ1azdFZ = accounts[0]
		const uint256CUHbI4i = await BACMARSLPTOKENPooleAwI2Jj.balanceOf.call(addressJ1azdFZ, {from: accounts[3]});
		const uint256s7qumyM = await BACMARSLPTOKENPooleAwI2Jj.totalSupply.call({from: accounts[4]});
		const uint256JAGxjB = await BACMARSLPTOKENPooleAwI2Jj.rewardPerToken.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const strings46HUW = "zcGcHc8Npv7I9tFJRXCBW0ObonPWFX2kjl7PcCjTWzUcRr7J5ili4cSsBHeyW1lTxnjbcBTnxdLKZ9BpgpLLIn78u"
		const stringgxX9lUU = "lsPYXWY0h53iYTw1QgVt8fQ3Qt8jnzFeakjZnI7T996wmEFLIrhRGNgccf9p4b78EUg1FW52pvY"
		const uintE7e5wb = BigInt("35")
		const BACMARSLPTOKENPoolLaKiPH0 = await BACMARSLPTOKENPool.new(strings46HUW, stringgxX9lUU, uintE7e5wb, {from: accounts[1]});
		const addressALqrIam = accounts[2]
		const uint0QQlBF = BigInt("303")
		const uintL4qzJdB = BigInt("1394")
		const uint256W7pqxU = await BACMARSLPTOKENPoolLaKiPH0.balanceOf.call(addressALqrIam, {from: accounts[1]});
		const uint8rQo9qP9 = await BACMARSLPTOKENPoolLaKiPH0.decimals.call({from: accounts[3]});
		const uint2563GVK4a = await BACMARSLPTOKENPoolLaKiPH0.withdraw.call(uint0QQlBF, {from: accounts[5]});
		const uint256rKog6ZU = await BACMARSLPTOKENPoolLaKiPH0.stake.call(uintL4qzJdB, {from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const string8Ab4QP = "pH78BEIsdixQgv6x4"
		const stringnOzNJRx = "JP12dPS3BPzSY0KcC9KHEiay2ByGjbOmg5nRvz9QWTeXEsZ9fNLer93muNQIUU0R6eS5s65n2ErbqMgtNqpnVibIb4ko"
		const uintN1ph3JA = BigInt("157")
		const BACMARSLPTOKENPoolHmjZp7J = await BACMARSLPTOKENPool.new(string8Ab4QP, stringnOzNJRx, uintN1ph3JA, {from: accounts[1]});
		const addressdky8zu = accounts[2]
		const addressiGwavuf = accounts[1]
		const uintZLRMtR9 = BigInt("356")
		const uint256k6pxmUt = await BACMARSLPTOKENPoolHmjZp7J.lastTimeRewardApplicable.call({from: accounts[4]});
		const uint256CXeLlTD = await BACMARSLPTOKENPoolHmjZp7J.earned.call(addressdky8zu, {from: accounts[0]});
		const uint256cFPTAju = await BACMARSLPTOKENPoolHmjZp7J.earned.call(addressiGwavuf, {from: accounts[2]});
		await BACMARSLPTOKENPoolHmjZp7J.getReward.call({from: accounts[1]});
		const uint256KrLyLTJ = await BACMARSLPTOKENPoolHmjZp7J.notifyRewardAmount.call(uintZLRMtR9, {from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringxpM9htT = "pzqCN7xSmQr1w0bGwF3lTV9TsG7oNgKGATyX"
		const stringxAi510G = "Wtsphig"
		const uinthAk0ZG = BigInt("191")
		const BACMARSLPTOKENPoolmDoWjfe = await BACMARSLPTOKENPool.new(stringxpM9htT, stringxAi510G, uinthAk0ZG, {from: accounts[3]});
		const uints8NIP6O = BigInt("1788")
		const uintIhlx01w = BigInt("817")
		const uint256Mj9ThAo = await BACMARSLPTOKENPoolmDoWjfe.totalSupply.call({from: accounts[1]});
		const uint256oHXRiHh = await BACMARSLPTOKENPoolmDoWjfe.lastTimeRewardApplicable.call({from: accounts[0]});
		const uint256dHWqIOy = await BACMARSLPTOKENPoolmDoWjfe.stake.call(uints8NIP6O, {from: accounts[3]});
		const uint256BxHU6Js = await BACMARSLPTOKENPoolmDoWjfe.rewardPerToken.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256m5NMT6 = await BACMARSLPTOKENPoolmDoWjfe.stake.call(uintIhlx01w, {from: "0x0000000000000000000000000000000000000001"});
		const uint8N93fte = await BACMARSLPTOKENPoolmDoWjfe.decimals.call({from: accounts[5]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringaN36jWk = "HQvuM6e9hKZcOI7iHea9NPdqb"
		const string6WSGqJ = "aLAzlxxiDTEmHKH36gru1"
		const uintQzbzgIH = BigInt("95")
		const BACMARSLPTOKENPoolEaGF0Ar = await BACMARSLPTOKENPool.new(stringaN36jWk, string6WSGqJ, uintQzbzgIH, {from: accounts[3]});
		const uintAsoEsJC = BigInt("1420")
		await BACMARSLPTOKENPoolEaGF0Ar.exit.call({from: accounts[5]});
		const stringFACkFfF = await BACMARSLPTOKENPoolEaGF0Ar.name.call({from: accounts[4]});
		const uint256WCtV8pb = await BACMARSLPTOKENPoolEaGF0Ar.stake.call(uintAsoEsJC, {from: accounts[1]});
		await BACMARSLPTOKENPoolEaGF0Ar.exit.call({from: accounts[3]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringE2h0sD = "FA6wtt9uvejWeKHDPMwLC1ZWn5sHXS4kh0JyHLChVrLuPbJAGDxJG2WTyZCu7w3HFvuJ7JWolBWRxWiqQl78nILXfb3bnbf"
		const stringfkxkBjr = "lE4rABiLHpknJRslKqVdiRvj4YAG1ww5ZDwavJH"
		const uintGkP4Vbf = BigInt("61")
		const BACMARSLPTOKENPoolzjnDZAW = await BACMARSLPTOKENPool.new(stringE2h0sD, stringfkxkBjr, uintGkP4Vbf, {from: accounts[0]});
		const uint256mTizVzL = await BACMARSLPTOKENPoolzjnDZAW.totalSupply.call({from: accounts[0]});
		await BACMARSLPTOKENPoolzjnDZAW.onlyRewardsDistribution.call({from: accounts[0]});
		const uint256bhO3qI = await BACMARSLPTOKENPoolzjnDZAW.getRewardForDuration.call({from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringMGVKaYy = "mWbAhSXpN5EIjlTT9uWwQCApAxshE8mus3pEO9QpdrwZDj"
		const stringq1koy5 = "CHWwEwXdFEbTKlwYdUoTKIYW1Bde4Z6rvb34dF8V8GJH1AAoLpKgNcSl7n3lSEMVj13j"
		const uintZSvXSzN = BigInt("195")
		const BACMARSLPTOKENPoolV8dAWpQ = await BACMARSLPTOKENPool.new(stringMGVKaYy, stringq1koy5, uintZSvXSzN, {from: accounts[0]});
		const addressyL4sZC = accounts[1]
		const bytePbdUGgo = "0x17190313001e16161f16150b05100d0c030c1b0306191e1c021108060a020b03"
		const bytexcAmih2 = "0x180b02171c0305081e040f1405191c19131901181313061e0f0e011a041e0d10"
		const uintQAm4sxu = BigInt("6")
		const uintgkTPyNP = BigInt("2008")
		const uintuXAcuPQ = BigInt("457")
		const uintCY6I7ox = BigInt("1989")
		const uint8cwilKOB = await BACMARSLPTOKENPoolV8dAWpQ.decimals.call({from: accounts[5]});
		const uint2566ZxkAE = await BACMARSLPTOKENPoolV8dAWpQ.balanceOf.call(addressyL4sZC, {from: accounts[1]});
		const uint256Sp5Y6Vm = await BACMARSLPTOKENPoolV8dAWpQ.stakeWithPermit.call(uintuXAcuPQ, uintgkTPyNP, uintQAm4sxu, bytexcAmih2, bytePbdUGgo, {from: accounts[2]});
		const uint256vLztzcg = await BACMARSLPTOKENPoolV8dAWpQ.rewardPerToken.call({from: accounts[1]});
		const uint256dDrVrbD = await BACMARSLPTOKENPoolV8dAWpQ.notifyRewardAmount.call(uintCY6I7ox, {from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringXae0PJ = "L7m4dcCIGWd8dhMdWJEg3tyl3x6LQicKy4"
		const stringqEoT546 = "lrQ5H3jWxqyHw2f99i2tMqy4lhSqBgmFS36q9q6ejD1m"
		const uintQCFjp3Q = BigInt("197")
		const BACMARSLPTOKENPoolwllIa8A = await BACMARSLPTOKENPool.new(stringXae0PJ, stringqEoT546, uintQCFjp3Q, {from: accounts[1]});
		const uintZQ5T9v5 = BigInt("898")
		const bytezeKbgDQ = "0x09020f1a160d1e0d1f0d01011c0c06011f0f0e06041b030012151d1718040c07"
		const byteVQynXJI = "0x1520040c05021d200908171811090a081a160705151c091705150b07150d0e11"
		const uintHUe56kH = BigInt("59")
		const uinteUPtkEV = BigInt("776")
		const uintmp08Ht5 = BigInt("685")
		await BACMARSLPTOKENPoolwllIa8A.exit.call({from: accounts[5]});
		const stringTZORrcZ = await BACMARSLPTOKENPoolwllIa8A.symbol.call({from: accounts[0]});
		await BACMARSLPTOKENPoolwllIa8A.getReward.call({from: accounts[4]});
		const uint256S0pwYNN = await BACMARSLPTOKENPoolwllIa8A.withdraw.call(uintZQ5T9v5, {from: accounts[5]});
		await BACMARSLPTOKENPoolwllIa8A.nonReentrant.call({from: accounts[3]});
		const uint256xgv4iRV = await BACMARSLPTOKENPoolwllIa8A.stakeWithPermit.call(uintmp08Ht5, uinteUPtkEV, uintHUe56kH, byteVQynXJI, bytezeKbgDQ, {from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringu6aQupw = "6GOKnjE4eih1UW54uHBvcTJIVdT6gtm9suLdNOMjTylwTRvKxiTvaVyKKwQ"
		const stringS5FwUUA = "XiAzm"
		const uintdLccJ2E = BigInt("244")
		const BACMARSLPTOKENPoolxOll4SF = await BACMARSLPTOKENPool.new(stringu6aQupw, stringS5FwUUA, uintdLccJ2E, {from: accounts[4]});
		await BACMARSLPTOKENPoolxOll4SF.getReward.call({from: accounts[3]});
		await BACMARSLPTOKENPoolxOll4SF.nonReentrant.call({from: accounts[2]});
		const uint256n7D7lDb = await BACMARSLPTOKENPoolxOll4SF.rewardPerToken.call({from: accounts[2]});
		const uint8OvJBhEt = await BACMARSLPTOKENPoolxOll4SF.decimals.call({from: accounts[4]});
		await BACMARSLPTOKENPoolxOll4SF.getReward.call({from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringLGj05XK = "SecaeNXCIAUZ4Vy5c4UuKQ7KiO8BO2ijJKQsQTsQOiEPLpdoqnuyw7wN94240JVmcV5jMCeqlXuO3cNp0Ho1FxOoYiMcdX2Y"
		const stringQin5d5G = "7Fh1pJceiPbfxpA9zK8EtKjwEvSCyNvk6uV75Um"
		const uintSe6s2Xj = BigInt("31")
		const BACMARSLPTOKENPoolQ98Uc4B = await BACMARSLPTOKENPool.new(stringLGj05XK, stringQin5d5G, uintSe6s2Xj, {from: accounts[4]});
		const byteivhC5GO = "0x1d1d051f0c161e0106091d13100c060c15031e1f1211041316101f031a1f0807"
		const bytedORKnQr = "0x15111c1a201d1c15121319031c09090e0f100315081b170505080715050d1b15"
		const uintW0tF0h8 = BigInt("210")
		const uintnXS67b = BigInt("995")
		const uintyVhCE4r = BigInt("637")
		const addressKGPoUqG = accounts[3]
		const uint256y96K9V8 = await BACMARSLPTOKENPoolQ98Uc4B.stakeWithPermit.call(uintyVhCE4r, uintnXS67b, uintW0tF0h8, bytedORKnQr, byteivhC5GO, {from: accounts[5]});
		const addressZsflqTm = await BACMARSLPTOKENPoolQ98Uc4B.updateReward.call(addressKGPoUqG, {from: accounts[2]});
		await BACMARSLPTOKENPoolQ98Uc4B.onlyRewardsDistribution.call({from: accounts[0]});
		const stringaRpThwH = await BACMARSLPTOKENPoolQ98Uc4B.symbol.call({from: accounts[5]});
		await BACMARSLPTOKENPoolQ98Uc4B.onlyRewardsDistribution.call({from: accounts[3]});
		await BACMARSLPTOKENPoolQ98Uc4B.exit.call({from: accounts[3]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringqovhrxz = "KrHYjSECTinF8mWCCOLtifyn9C12ITWIIYsepEXyjHjxrFmvrJxvhlSlnDtndBWCsbidzVxaWz8OkvGjWeTT"
		const stringKLCAuHn = "hWYuit1zgUGgyxyG16DjggAAX1v6m8MibIXlit8yprvyBnYXaPiC"
		const uintldNiQAA = BigInt("172")
		const BACMARSLPTOKENPoolHQimIZF = await BACMARSLPTOKENPool.new(stringqovhrxz, stringKLCAuHn, uintldNiQAA, {from: accounts[0]});
		const addressLMvoS36 = accounts[2]
		const uintl7260hP = BigInt("401")
		const uint256nfxwfV0 = await BACMARSLPTOKENPoolHQimIZF.rewardPerToken.call({from: "0x0000000000000000000000000000000000000001"});
		const addressyoTpUSH = await BACMARSLPTOKENPoolHQimIZF.updateReward.call(addressLMvoS36, {from: accounts[0]});
		const uint256MXJveVv = await BACMARSLPTOKENPoolHQimIZF.stake.call(uintl7260hP, {from: accounts[3]});
		const uint8PJcqcz9 = await BACMARSLPTOKENPoolHQimIZF.decimals.call({from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringoZ0eCHc = "zu7KFReFP98MSY"
		const stringTfBlFyh = "tUM1nwGhwqe67zP8zwGKUveYe8sUQgcRsbDdJpCvHMEo9gEEK2uCGOqmWU"
		const uintaE7JSDB = BigInt("36")
		const BACMARSLPTOKENPoollalwHm7 = await BACMARSLPTOKENPool.new(stringoZ0eCHc, stringTfBlFyh, uintaE7JSDB, {from: accounts[2]});
		const addressMBtoZqQ = accounts[0]
		const stringv11oJB2 = await BACMARSLPTOKENPoollalwHm7.symbol.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256t5cUnyd = await BACMARSLPTOKENPoollalwHm7.earned.call(addressMBtoZqQ, {from: accounts[0]});
		const stringFDoK0X5 = await BACMARSLPTOKENPoollalwHm7.name.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256UyW7yWc = await BACMARSLPTOKENPoollalwHm7.rewardPerToken.call({from: accounts[4]});
		const uint256JrQVOJH = await BACMARSLPTOKENPoollalwHm7.totalSupply.call({from: accounts[4]});
		const uint256ilT3032 = await BACMARSLPTOKENPoollalwHm7.getRewardForDuration.call({from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringL8Ut4aV = "biJ8qjEpT3ew6P3eOWCbjiIWIrRSaQWtPE6cmFL4EmP"
		const stringWA0XrKT = "6u3bNYdaK14zYVyR17OSjqgtFUCxJ3mOKIPw97"
		const uintcF0tl9r = BigInt("173")
		const BACMARSLPTOKENPoolZrxYLGK = await BACMARSLPTOKENPool.new(stringL8Ut4aV, stringWA0XrKT, uintcF0tl9r, {from: "0x0000000000000000000000000000000000000001"});
		const uintZbZ5Mtf = BigInt("829")
		const uintA4qD3kG = BigInt("198")
		const addressVdMN7Xw = accounts[3]
		const uint256kt9hxyF = await BACMARSLPTOKENPoolZrxYLGK.withdraw.call(uintZbZ5Mtf, {from: accounts[1]});
		await BACMARSLPTOKENPoolZrxYLGK.getReward.call({from: accounts[2]});
		const uint256mMruLEI = await BACMARSLPTOKENPoolZrxYLGK.notifyRewardAmount.call(uintA4qD3kG, {from: accounts[4]});
		const string3boQVs = await BACMARSLPTOKENPoolZrxYLGK.name.call({from: accounts[1]});
		const addressWVagm7 = await BACMARSLPTOKENPoolZrxYLGK.updateReward.call(addressVdMN7Xw, {from: accounts[3]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringogSHTCl = "rOMrPJUm4tvU4qHhOqfIoJ6vTxGBChxGPBJ9G1qBqGcEOrovVbjcnW7WlLqI5gyMTbbLdH996Zp9s3rPGG"
		const stringijqM6O = "qn6upugIc76TIHAgFJHF8BytmEbBgbaaFDbI6xbRx9aTlvmRYFTYmy0I8O"
		const uintS03M9L = BigInt("1")
		const BACMARSLPTOKENPoolpJ2vZVY = await BACMARSLPTOKENPool.new(stringogSHTCl, stringijqM6O, uintS03M9L, {from: accounts[4]});
		const uinteQGXqdf = BigInt("1435")
		const byteRWWyA6p = "0x07001503040a01041d0a121a0a1c1217001508120e05021c03151619040a1509"
		const byteP4Ise66 = "0x1418190e03131e00030a0b0d170819020d200a180e1416030b131d121b0a1116"
		const uintDyLICvg = BigInt("250")
		const uintCf0q5Sp = BigInt("1801")
		const uintyOV04F = BigInt("1031")
		const uintwqaOPmz = BigInt("784")
		const uint256HnRoJPr = await BACMARSLPTOKENPoolpJ2vZVY.withdraw.call(uinteQGXqdf, {from: accounts[3]});
		const uint256TrWP7G5 = await BACMARSLPTOKENPoolpJ2vZVY.stakeWithPermit.call(uintyOV04F, uintCf0q5Sp, uintDyLICvg, byteP4Ise66, byteRWWyA6p, {from: accounts[0]});
		const uint256HXaxJ17 = await BACMARSLPTOKENPoolpJ2vZVY.notifyRewardAmount.call(uintwqaOPmz, {from: accounts[1]});
	});
})