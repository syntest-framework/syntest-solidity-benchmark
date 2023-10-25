const BACMARSLPTOKENPool = artifacts.require("BACMARSLPTOKENPool");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('BACMARSLPTOKENPool', (accounts) => {
	it('test for BACMARSLPTOKENPool', async () => {
		const stringRwA4PSf = "aHbEbJON"
		const stringEMf9WL = "r1zTy9e6eD8kazEh4STGE7JFP8wjy9r7GOQhnineQaiVwzM1UBALeGhzpC4a8Ba0SriOq6uMyjextF3cGxUlLhVUV"
		const uintwEsUXcC = BigInt("97")
		const BACMARSLPTOKENPoola5RVoJg = await BACMARSLPTOKENPool.new(stringRwA4PSf, stringEMf9WL, uintwEsUXcC, {from: accounts[0]});
		const uintkCeOiuX = BigInt("1470")
		const string7QlRR6 = await BACMARSLPTOKENPoola5RVoJg.symbol.call({from: accounts[4]});
		const uint256b6K5zBW = await BACMARSLPTOKENPoola5RVoJg.withdraw.call(uintkCeOiuX, {from: accounts[4]});
		await BACMARSLPTOKENPoola5RVoJg.nonReentrant.call({from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressES5VrUs = accounts[2]
		const addresslpS1xWs = "0x0000000000000000000000000000000000000001"
		const addressxLuNkey = accounts[0]
		const BACMARSLPTOKENPoolkO6CBD = await BACMARSLPTOKENPool.new(addressES5VrUs, addresslpS1xWs, addressxLuNkey, {from: accounts[4]});
		const uintAzpt09a = BigInt("1373")
		const uint256OFBlesJ = await BACMARSLPTOKENPoolkO6CBD.getRewardForDuration.call({from: accounts[4]});
		const uint256AzdBKXk = await BACMARSLPTOKENPoolkO6CBD.rewardPerToken.call({from: accounts[4]});
		const uint256h60fShX = await BACMARSLPTOKENPoolkO6CBD.totalSupply.call({from: accounts[3]});
		const uint256EAXdYOJ = await BACMARSLPTOKENPoolkO6CBD.notifyRewardAmount.call(uintAzpt09a, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256AzdBKXk, BigInt("0"))
		assert.equal(uint256OFBlesJ, BigInt("0"))
		assert.equal(uint256h60fShX, BigInt("0"))
		await expect(BACMARSLPTOKENPoolkO6CBD.notifyRewardAmount.call(uintAzpt09a, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressjoao34N = accounts[1]
		const addresstwsZkCt = accounts[1]
		const address7rSJbM = accounts[5]
		const BACMARSLPTOKENPooltw5qOGu = await BACMARSLPTOKENPool.new(addressjoao34N, addresstwsZkCt, address7rSJbM, {from: accounts[0]});
		const addressiLLDn6 = accounts[4]
		const addressWVMZm3 = accounts[3]
		const uint256XWjMM61 = await BACMARSLPTOKENPooltw5qOGu.getRewardForDuration.call({from: accounts[4]});
		const uint256b9LoYP8 = await BACMARSLPTOKENPooltw5qOGu.balanceOf.call(addressiLLDn6, {from: accounts[1]});
		const uint256vpnSHZ2 = await BACMARSLPTOKENPooltw5qOGu.totalSupply.call({from: accounts[3]});
		const uint256DlcOO8K = await BACMARSLPTOKENPooltw5qOGu.balanceOf.call(addressWVMZm3, {from: accounts[1]});

		assert.equal(uint256DlcOO8K, BigInt("0"))
		assert.equal(uint256XWjMM61, BigInt("0"))
		assert.equal(uint256b9LoYP8, BigInt("0"))
		assert.equal(uint256vpnSHZ2, BigInt("0"))
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressKREYgZz = accounts[5]
		const addressNfhAWNq = accounts[2]
		const addressTwaNfAo = accounts[3]
		const BACMARSLPTOKENPoolQhNj50A = await BACMARSLPTOKENPool.new(addressKREYgZz, addressNfhAWNq, addressTwaNfAo, {from: accounts[0]});
		const uint256qnv80F = await BACMARSLPTOKENPoolQhNj50A.getRewardForDuration.call({from: accounts[4]});
		await BACMARSLPTOKENPoolQhNj50A.exit.call({from: accounts[5]});
		const uint8SMgCYA = await BACMARSLPTOKENPoolQhNj50A.decimals.call({from: accounts[2]});

		assert.equal(uint256qnv80F, BigInt("0"))
		await expect(BACMARSLPTOKENPoolQhNj50A.exit.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressCjb5ZzA = accounts[1]
		const addressYjGGMpd = accounts[3]
		const addresswPopdZ = "0x0000000000000000000000000000000000000001"
		const BACMARSLPTOKENPoolP56wXez = await BACMARSLPTOKENPool.new(addressCjb5ZzA, addressYjGGMpd, addresswPopdZ, {from: accounts[2]});
		const uintWFQwEru = BigInt("1340")
		const stringMyT6NVO = await BACMARSLPTOKENPoolP56wXez.symbol.call({from: accounts[1]});
		const uint256YKcELbZ = await BACMARSLPTOKENPoolP56wXez.stake.call(uintWFQwEru, {from: accounts[0]});
		await BACMARSLPTOKENPoolP56wXez.nonReentrant.call({from: accounts[4]});
		await BACMARSLPTOKENPoolP56wXez.nonReentrant.call({from: accounts[2]});

		await expect(BACMARSLPTOKENPoolP56wXez.symbol.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressfNKf3x5 = accounts[1]
		const addressKRe33ny = "0x0000000000000000000000000000000000000001"
		const addressnDzjJa1 = accounts[1]
		const BACMARSLPTOKENPoolbrqDf80 = await BACMARSLPTOKENPool.new(addressfNKf3x5, addressKRe33ny, addressnDzjJa1, {from: "0x0000000000000000000000000000000000000001"});
		const addressRHpriD6 = accounts[0]
		const uintL8gcwyc = BigInt("1277")
		await BACMARSLPTOKENPoolbrqDf80.getReward.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256oOeFMlM = await BACMARSLPTOKENPoolbrqDf80.getRewardForDuration.call({from: accounts[3]});
		const uint256ZP1UMPZ = await BACMARSLPTOKENPoolbrqDf80.balanceOf.call(addressRHpriD6, {from: "0x0000000000000000000000000000000000000001"});
		const uint256vHAY4eB = await BACMARSLPTOKENPoolbrqDf80.stake.call(uintL8gcwyc, {from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addresscZ8XlCX = accounts[3]
		const addressAPCbOZw = accounts[0]
		const addressC5d4Ggo = accounts[0]
		const BACMARSLPTOKENPoolYClSbNG = await BACMARSLPTOKENPool.new(addresscZ8XlCX, addressAPCbOZw, addressC5d4Ggo, {from: accounts[1]});
		const addressgmwfqQo = "0x0000000000000000000000000000000000000001"
		const bytegwOVn5 = "0x08100e080d070c131804001a1d0f1f01100916180201061f1c031d020f100a0a"
		const byteSNgXrgx = "0x020617000c011615091809181e171c0d1a0e1c1e06011c1919170c1e0c090f03"
		const uintEqsFQX = BigInt("176")
		const uintkiCQpKV = BigInt("194")
		const uintsTZ39je = BigInt("413")
		const bytecXM9xL4 = "0x121c031f15171003180001180d040a131b051004130e061e06050f11021b0f07"
		const byteHF4kDbV = "0x090b0f0a160c1308010b130104171c1c170e121e1c190b0a080d13111a1f0f12"
		const uintBVG599 = BigInt("203")
		const uintkh9R1fx = BigInt("1460")
		const uintotgK7G7 = BigInt("1166")
		const uint256pIE726r = await BACMARSLPTOKENPoolYClSbNG.earned.call(addressgmwfqQo, {from: accounts[1]});
		const uint256byEatZv = await BACMARSLPTOKENPoolYClSbNG.stakeWithPermit.call(uintsTZ39je, uintkiCQpKV, uintEqsFQX, byteSNgXrgx, bytegwOVn5, {from: accounts[3]});
		const uint256Qw1EIF4 = await BACMARSLPTOKENPoolYClSbNG.rewardPerToken.call({from: accounts[1]});
		const uint256MBhkguT = await BACMARSLPTOKENPoolYClSbNG.getRewardForDuration.call({from: accounts[3]});
		await BACMARSLPTOKENPoolYClSbNG.exit.call({from: accounts[3]});
		const uint256pAliw9W = await BACMARSLPTOKENPoolYClSbNG.stakeWithPermit.call(uintotgK7G7, uintkh9R1fx, uintBVG599, byteHF4kDbV, bytecXM9xL4, {from: accounts[3]});

		assert.equal(uint256pIE726r, BigInt("0"))
		await expect(BACMARSLPTOKENPoolYClSbNG.stakeWithPermit.call(uintsTZ39je, uintkiCQpKV, uintEqsFQX, byteSNgXrgx, bytegwOVn5, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressXf4cVXo = accounts[5]
		const addressX9bYtiP = accounts[2]
		const addressgXSampi = accounts[3]
		const BACMARSLPTOKENPoolQhNj50A = await BACMARSLPTOKENPool.new(addressXf4cVXo, addressX9bYtiP, addressgXSampi, {from: accounts[0]});
		const uintjVpu5yI = BigInt("534")
		const uintbolNdZ2 = BigInt("1635")
		const uint256qnv80F = await BACMARSLPTOKENPoolQhNj50A.getRewardForDuration.call({from: accounts[4]});
		const uint256DT3jQds = await BACMARSLPTOKENPoolQhNj50A.stake.call(uintjVpu5yI, {from: accounts[0]});
		const uint256bvXDg6L = await BACMARSLPTOKENPoolQhNj50A.stake.call(uintbolNdZ2, {from: accounts[2]});
		const uint8SMgCYA = await BACMARSLPTOKENPoolQhNj50A.decimals.call({from: accounts[2]});

		assert.equal(uint256qnv80F, BigInt("0"))
		await expect(BACMARSLPTOKENPoolQhNj50A.stake.call(uintjVpu5yI, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressUL0PehQ = accounts[5]
		const addressZPewV23 = accounts[2]
		const addressCg1GFq = accounts[3]
		const BACMARSLPTOKENPoolQhNj50A = await BACMARSLPTOKENPool.new(addressUL0PehQ, addressZPewV23, addressCg1GFq, {from: accounts[0]});
		const uintTYEgNoi = BigInt("190")
		const uintYCvXn1d = BigInt("534")
		const uintjS4Zv51 = BigInt("1633")
		const uint256yT0WUW = await BACMARSLPTOKENPoolQhNj50A.withdraw.call(uintTYEgNoi, {from: accounts[1]});
		const uint256qnv80F = await BACMARSLPTOKENPoolQhNj50A.getRewardForDuration.call({from: accounts[4]});
		const uint256DT3jQds = await BACMARSLPTOKENPoolQhNj50A.stake.call(uintYCvXn1d, {from: accounts[0]});
		const uint256bvXDg6L = await BACMARSLPTOKENPoolQhNj50A.stake.call(uintjS4Zv51, {from: accounts[2]});
		const uint8SMgCYA = await BACMARSLPTOKENPoolQhNj50A.decimals.call({from: accounts[2]});

		await expect(BACMARSLPTOKENPoolQhNj50A.withdraw.call(uintTYEgNoi, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressdVxcQxG = accounts[5]
		const addressN3cKdsC = accounts[5]
		const addressMXxVfaQ = accounts[4]
		const BACMARSLPTOKENPoolZ4BWvKx = await BACMARSLPTOKENPool.new(addressdVxcQxG, addressN3cKdsC, addressMXxVfaQ, {from: accounts[5]});
		const uint256Acq6Rla = await BACMARSLPTOKENPoolZ4BWvKx.rewardPerToken.call({from: accounts[4]});
		await BACMARSLPTOKENPoolZ4BWvKx.getReward.call({from: accounts[3]});
		const uint256zPNhoWO = await BACMARSLPTOKENPoolZ4BWvKx.lastTimeRewardApplicable.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256PDsCsmh = await BACMARSLPTOKENPoolZ4BWvKx.lastTimeRewardApplicable.call({from: accounts[1]});

		assert.equal(uint256Acq6Rla, BigInt("0"))
		await expect(BACMARSLPTOKENPoolZ4BWvKx.getReward.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressyjvfMbX = accounts[5]
		const address622HNN = accounts[2]
		const addressKMovCG7 = accounts[3]
		const BACMARSLPTOKENPoolQhNj50A = await BACMARSLPTOKENPool.new(addressyjvfMbX, address622HNN, addressKMovCG7, {from: accounts[0]});
		const uintq7R0N3C = BigInt("190")
		const uinthij0U74 = BigInt("534")
		const uintQgtbCXp = BigInt("1633")
		const uint256yT0WUW = await BACMARSLPTOKENPoolQhNj50A.withdraw.call(uintq7R0N3C, {from: accounts[1]});
		const uint256qnv80F = await BACMARSLPTOKENPoolQhNj50A.getRewardForDuration.call({from: accounts[4]});
		const uint256DT3jQds = await BACMARSLPTOKENPoolQhNj50A.stake.call(uinthij0U74, {from: accounts[0]});
		const uint256bvXDg6L = await BACMARSLPTOKENPoolQhNj50A.stake.call(uintQgtbCXp, {from: accounts[2]});
		const uint256gAv0StS = await BACMARSLPTOKENPoolQhNj50A.totalSupply.call({from: accounts[1]});
		const uint8SMgCYA = await BACMARSLPTOKENPoolQhNj50A.decimals.call({from: accounts[2]});

		await expect(BACMARSLPTOKENPoolQhNj50A.withdraw.call(uintq7R0N3C, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressO8Ad0yQ = accounts[3]
		const addressBuv4lD = accounts[0]
		const addressayrbDqD = accounts[0]
		const BACMARSLPTOKENPoolYClSbNG = await BACMARSLPTOKENPool.new(addressO8Ad0yQ, addressBuv4lD, addressayrbDqD, {from: accounts[1]});
		const byteB4NDq6L = "0x08100e080d070c131804001a1d0f1f01100916180201061f1c031d020f100a0a"
		const bytety2EQc2 = "0x020617000c011615091809181e171c0d1a0e1c1e06011c1919170c1e0c090f03"
		const uintJI4m9wF = BigInt("176")
		const uintjIdJXhP = BigInt("194")
		const uinta48yNiy = BigInt("413")
		const uintIRv9HLX = BigInt("1516")
		const byteWMhSIbQ = "0x121c031f15171003180001180d040a131b051004130e061e06050f11021b0f07"
		const byteMoIvKnW = "0x090b0f0a160c1308010b130104171c1c170e121e1c190b0a080d13111a1f0f12"
		const uintNPAbwBf = BigInt("203")
		const uintBtsntdV = BigInt("1460")
		const uintJ5LZelt = BigInt("1166")
		const uint256byEatZv = await BACMARSLPTOKENPoolYClSbNG.stakeWithPermit.call(uinta48yNiy, uintjIdJXhP, uintJI4m9wF, bytety2EQc2, byteB4NDq6L, {from: accounts[3]});
		const uint256Qw1EIF4 = await BACMARSLPTOKENPoolYClSbNG.rewardPerToken.call({from: accounts[1]});
		await BACMARSLPTOKENPoolYClSbNG.exit.call({from: accounts[3]});
		const uint256AIkfCGH = await BACMARSLPTOKENPoolYClSbNG.notifyRewardAmount.call(uintIRv9HLX, {from: accounts[4]});
		const uint256pAliw9W = await BACMARSLPTOKENPoolYClSbNG.stakeWithPermit.call(uintJ5LZelt, uintBtsntdV, uintNPAbwBf, byteMoIvKnW, byteWMhSIbQ, {from: accounts[3]});

		await expect(BACMARSLPTOKENPoolYClSbNG.stakeWithPermit.call(uinta48yNiy, uintjIdJXhP, uintJI4m9wF, bytety2EQc2, byteB4NDq6L, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressV6ypRE5 = accounts[5]
		const addressFpaHI6 = accounts[2]
		const addressyemnwVH = accounts[3]
		const BACMARSLPTOKENPoolQhNj50A = await BACMARSLPTOKENPool.new(addressV6ypRE5, addressFpaHI6, addressyemnwVH, {from: accounts[0]});
		const uintT6MjKvN = BigInt("571")
		const uintcFPxYjH = BigInt("526")
		const uintxdpIgx6 = BigInt("1840")
		const uintCtuhIVZ = BigInt("1635")
		const uint256qnv80F = await BACMARSLPTOKENPoolQhNj50A.getRewardForDuration.call({from: accounts[4]});
		const uint256PoNMyAi = await BACMARSLPTOKENPoolQhNj50A.stake.call(uintT6MjKvN, {from: accounts[0]});
		const uint256DT3jQds = await BACMARSLPTOKENPoolQhNj50A.stake.call(uintcFPxYjH, {from: accounts[0]});
		const uint256mQgpB7T = await BACMARSLPTOKENPoolQhNj50A.notifyRewardAmount.call(uintxdpIgx6, {from: accounts[2]});
		const uint256bvXDg6L = await BACMARSLPTOKENPoolQhNj50A.stake.call(uintCtuhIVZ, {from: accounts[2]});
		const uint8SMgCYA = await BACMARSLPTOKENPoolQhNj50A.decimals.call({from: accounts[2]});

		assert.equal(uint256qnv80F, BigInt("0"))
		await expect(BACMARSLPTOKENPoolQhNj50A.stake.call(uintT6MjKvN, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringJBwzy0 = "gKkfNFKPdMlpmb6NJ4BCNQzPZQ1wFUbq6bfFstUpGr5vcbWbX2wIofoqcy626CussnPetwXRPqdNDVP3Dcw4"
		const stringgzETZRV = "yYMB0lr8GCvrldMr3GswrhSzC5E7VN"
		const uintR3WOOBA = BigInt("27")
		const BACMARSLPTOKENPoolR4XD1ax = await BACMARSLPTOKENPool.new(stringJBwzy0, stringgzETZRV, uintR3WOOBA, {from: accounts[2]});
		await BACMARSLPTOKENPoolR4XD1ax.onlyRewardsDistribution.call({from: accounts[2]});
		await BACMARSLPTOKENPoolR4XD1ax.onlyRewardsDistribution.call({from: accounts[4]});
		const uint256Qw3ClnK = await BACMARSLPTOKENPoolR4XD1ax.rewardPerToken.call({from: accounts[3]});
		const uint8Wm9mszQ = await BACMARSLPTOKENPoolR4XD1ax.decimals.call({from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringDVaNBP = "TzpgGiR2ak0AHXPJBYhL1ihnhGskPiqiJFDjcCCh3tWChTx3X99GzIHp"
		const stringtV3aAsp = "OC1dGDzBudwGy8bosGHNyOlIfGwJyqdULUeEO"
		const uintgIVHXUM = BigInt("209")
		const BACMARSLPTOKENPoolER8H3uH = await BACMARSLPTOKENPool.new(stringDVaNBP, stringtV3aAsp, uintgIVHXUM, {from: accounts[0]});
		const uintxHOYZ8y = BigInt("656")
		const uint256Pxol8LN = await BACMARSLPTOKENPoolER8H3uH.withdraw.call(uintxHOYZ8y, {from: accounts[4]});
		await BACMARSLPTOKENPoolER8H3uH.nonReentrant.call({from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringo2ROC4k = "BsTyVChvbzjODGyf3kkZzYUuKAuptOP2fcJ7Tm2hseO4TeaMvApF3moHKeaa3Qz2D"
		const stringxB0ygX = "oL1jD7cXfCLLfpqzYsKWwY"
		const uintVVR0Mh = BigInt("93")
		const BACMARSLPTOKENPoolzvcGpXd = await BACMARSLPTOKENPool.new(stringo2ROC4k, stringxB0ygX, uintVVR0Mh, {from: accounts[3]});
		const byteiJn52Tb = "0x011b050804131e0b1504021c080f081f000102031014020700050912050c0f00"
		const byteohgCr7I = "0x1c09041c0b191705191018121f0c171b0e111314120e17021b131b1415161810"
		const uintF7I8pyI = BigInt("93")
		const uintvqqrgg = BigInt("33")
		const uintv3tdRZw = BigInt("1329")
		const address98GYdQ = accounts[5]
		const uint256RSr4H5G = await BACMARSLPTOKENPoolzvcGpXd.stakeWithPermit.call(uintv3tdRZw, uintvqqrgg, uintF7I8pyI, byteohgCr7I, byteiJn52Tb, {from: accounts[5]});
		const uint256Uot5Vkf = await BACMARSLPTOKENPoolzvcGpXd.balanceOf.call(address98GYdQ, {from: accounts[3]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringo2vknCd = "S2hN2osDgEDe0xA4cdsJeHQJY7WR5yhirPHSnEWNa3Sxus9"
		const stringaw0S6B2 = "naMZj7gSTEHzmcgbLF0vNekla7pzC4NG1nQuFsOpQoNpehEe4HsS9GrFKDo4VWpVXjp4"
		const uintVpfhdd3 = BigInt("230")
		const BACMARSLPTOKENPoolFHoR61J = await BACMARSLPTOKENPool.new(stringo2vknCd, stringaw0S6B2, uintVpfhdd3, {from: accounts[3]});
		const uintoyL29p = BigInt("147")
		const uintzymcI6q = BigInt("1982")
		const uintnXZ011 = BigInt("1312")
		const bytexqwVvJ8 = "0x1a1f170815190a181a0a1a010f1018180d0f20000e0e1e090e061d1b0f01170c"
		const bytenD3G037 = "0x0f041c120d040a07081e1d0a0b0d110113010f04151b170f0812090b1e1c1615"
		const uintTkUFZHu = BigInt("8")
		const uintaTtYNzL = BigInt("1167")
		const uintG092qUg = BigInt("510")
		const uint256lv865vn = await BACMARSLPTOKENPoolFHoR61J.withdraw.call(uintoyL29p, {from: accounts[0]});
		const uint256g2iwqtJ = await BACMARSLPTOKENPoolFHoR61J.rewardPerToken.call({from: accounts[3]});
		const uint256WkzoGr8 = await BACMARSLPTOKENPoolFHoR61J.withdraw.call(uintzymcI6q, {from: accounts[5]});
		const uint256iYIkhOk = await BACMARSLPTOKENPoolFHoR61J.withdraw.call(uintnXZ011, {from: accounts[4]});
		const uint256CI75Pay = await BACMARSLPTOKENPoolFHoR61J.stakeWithPermit.call(uintG092qUg, uintaTtYNzL, uintTkUFZHu, bytenD3G037, bytexqwVvJ8, {from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringkCHMt6Z = "odWbl4q"
		const stringm8Mpfv = "VJQ2aMxTsB2QbKql3anEr747tWvkyWBz0M"
		const uintFwaGIEy = BigInt("5")
		const BACMARSLPTOKENPoolKmIhzUP = await BACMARSLPTOKENPool.new(stringkCHMt6Z, stringm8Mpfv, uintFwaGIEy, {from: accounts[3]});
		const uint256GRP6Dzo = await BACMARSLPTOKENPoolKmIhzUP.totalSupply.call({from: accounts[2]});
		const uint256WTJKE07 = await BACMARSLPTOKENPoolKmIhzUP.getRewardForDuration.call({from: accounts[1]});
		await BACMARSLPTOKENPoolKmIhzUP.onlyRewardsDistribution.call({from: "0x0000000000000000000000000000000000000001"});
		const uint8MOlT0nr = await BACMARSLPTOKENPoolKmIhzUP.decimals.call({from: accounts[5]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringTrLxEMm = "wiikBHGlUPpd0jNpSa9zDYticz8PABykS8QGtA2V4XXb1bTOGgoB0kjAs1d7cwivLtp4rXi85Np6DMzaLJe"
		const stringfGnnhP9 = "iIaeQTHQN4hX8fzkfEWAQjT2lHjSUtt2a6VaW9CREcwstJV7MYdHnepM2WGeKbL2L"
		const uintgH7jFEZ = BigInt("172")
		const BACMARSLPTOKENPoolJeJXLky = await BACMARSLPTOKENPool.new(stringTrLxEMm, stringfGnnhP9, uintgH7jFEZ, {from: accounts[1]});
		const byteolYEiU = "0x0f170411012014060d04120b1a0a00090e0f090400180a1d1201050c0b07180e"
		const byteY4I9ouT = "0x0b191a181b0c081a0a051c0810201512110120130b1b1a0904061c1f14050303"
		const uintxanl6mZ = BigInt("71")
		const uintKuw0xNb = BigInt("1341")
		const uintxPWdYtx = BigInt("1333")
		const addressGuZz8Ti = accounts[1]
		const addressBwjWuP = accounts[2]
		await BACMARSLPTOKENPoolJeJXLky.exit.call({from: accounts[2]});
		const uint256C2YtHHH = await BACMARSLPTOKENPoolJeJXLky.stakeWithPermit.call(uintxPWdYtx, uintKuw0xNb, uintxanl6mZ, byteY4I9ouT, byteolYEiU, {from: accounts[3]});
		const uint256vRpJaeI = await BACMARSLPTOKENPoolJeJXLky.earned.call(addressGuZz8Ti, {from: accounts[1]});
		const uint256d68mA2 = await BACMARSLPTOKENPoolJeJXLky.balanceOf.call(addressBwjWuP, {from: accounts[4]});
		await BACMARSLPTOKENPoolJeJXLky.onlyRewardsDistribution.call({from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const string1XnIeG = "c8zT83pdogkMLZFlpsU3iKiv5IpNF2iWZbYLxypCSf7Ss4wBLiOylJ3b7PJaLpLSa2x8ikGBXawUY"
		const stringKeSs2NJ = "9yUcENi2guYMeGKi"
		const uintJe2jCPf = BigInt("81")
		const BACMARSLPTOKENPoolItzAIJn = await BACMARSLPTOKENPool.new(string1XnIeG, stringKeSs2NJ, uintJe2jCPf, {from: accounts[2]});
		const uint256jMJgBep = await BACMARSLPTOKENPoolItzAIJn.getRewardForDuration.call({from: accounts[4]});
		const uint8VUp4sFp = await BACMARSLPTOKENPoolItzAIJn.decimals.call({from: accounts[0]});
		await BACMARSLPTOKENPoolItzAIJn.getReward.call({from: accounts[1]});
		const uint256FBkkAaH = await BACMARSLPTOKENPoolItzAIJn.lastTimeRewardApplicable.call({from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const string2kiXkU = "UissTUFdHRBCt7QNBd1pbxq54sCGjkUmdjhPcqWYt4HK5lrViKqXrc8MitB6EZ"
		const stringX3LLQkv = "kJDdaSqXXivAY9cQUwLZ5a5LmkhqylENQAoQyr5RgafdOUjSQ2AHQGNtqf1QqTYN7UL5"
		const uintcSbY10d = BigInt("85")
		const BACMARSLPTOKENPoolhfY2KJh = await BACMARSLPTOKENPool.new(string2kiXkU, stringX3LLQkv, uintcSbY10d, {from: accounts[1]});
		const byte2FLoUH = "0x181420181303201a07171c15120d150d180315190314111c0414030a11071e0e"
		const bytekfuLIAO = "0x1a1606170d1a00141e120d120e03041b0b100316070d18021911061916031308"
		const uintkn2Lsql = BigInt("95")
		const uinthgXOhMm = BigInt("1706")
		const uinttSMeSUY = BigInt("257")
		const byteJb0fq9C = "0x1a170d1c0817081d1f0d07191a0d0e161d0013091b081a1b0301051f191f1e0f"
		const byteHWXZf9S = "0x1e1310010f0c091f18051a0c18151d171b05171e051607191d160707051c1915"
		const uinterOarWk = BigInt("88")
		const uint2gDhVo = BigInt("1053")
		const uintJpOGm46 = BigInt("1840")
		const uint256wnesxFv = await BACMARSLPTOKENPoolhfY2KJh.stakeWithPermit.call(uinttSMeSUY, uinthgXOhMm, uintkn2Lsql, bytekfuLIAO, byte2FLoUH, {from: accounts[1]});
		const uint256HLFy204 = await BACMARSLPTOKENPoolhfY2KJh.stakeWithPermit.call(uintJpOGm46, uint2gDhVo, uinterOarWk, byteHWXZf9S, byteJb0fq9C, {from: accounts[4]});
		const uint256xFbGcFO = await BACMARSLPTOKENPoolhfY2KJh.rewardPerToken.call({from: accounts[3]});
		const uint256lVEgphy = await BACMARSLPTOKENPoolhfY2KJh.lastTimeRewardApplicable.call({from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringnTbjqe6 = "FKQLs6wkcGNONB36RwkhlQak15"
		const stringUMMGUu = "Le62JEBhSjnHlsKVaKXqQl639up5sUQjTADuL6gLTxAl"
		const uintrEz57Dy = BigInt("183")
		const BACMARSLPTOKENPoolp13PNIj = await BACMARSLPTOKENPool.new(stringnTbjqe6, stringUMMGUu, uintrEz57Dy, {from: accounts[0]});
		await BACMARSLPTOKENPoolp13PNIj.nonReentrant.call({from: accounts[3]});
		const stringKx5miTl = await BACMARSLPTOKENPoolp13PNIj.symbol.call({from: accounts[0]});
		const uint256JuAMky8 = await BACMARSLPTOKENPoolp13PNIj.getRewardForDuration.call({from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringjbLq86C = "HYuSWhoHKs9ds43E4tqpO4NEptg045vMxj2OVSIhNIKUulpAEf"
		const stringODs5t05 = "I9hSg0hmzTG8uTM"
		const uintQBhveh7 = BigInt("213")
		const BACMARSLPTOKENPooligUNTMw = await BACMARSLPTOKENPool.new(stringjbLq86C, stringODs5t05, uintQBhveh7, {from: accounts[0]});
		const uint2560r7Q27 = await BACMARSLPTOKENPooligUNTMw.getRewardForDuration.call({from: accounts[4]});
		const uint256FO3AkS = await BACMARSLPTOKENPooligUNTMw.getRewardForDuration.call({from: accounts[0]});
		await BACMARSLPTOKENPooligUNTMw.nonReentrant.call({from: accounts[1]});
		const uint256HehwDOu = await BACMARSLPTOKENPooligUNTMw.totalSupply.call({from: accounts[2]});
		await BACMARSLPTOKENPooligUNTMw.onlyRewardsDistribution.call({from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringEcW7wFK = "LdYTzAxsXH0IrWxr0Sn4A7aMLbpyAXpEbC9HB4PrJMhj8L94mnqz8ft5Y1KA2aIdwmswZztGQgOdOHmLW"
		const stringo6knIf = "I"
		const uintruoyKfT = BigInt("198")
		const BACMARSLPTOKENPoolIZ7uPQr = await BACMARSLPTOKENPool.new(stringEcW7wFK, stringo6knIf, uintruoyKfT, {from: accounts[4]});
		const addressKBluHPe = accounts[3]
		const uintSfS9KW1 = BigInt("275")
		const uint8EoDRSnw = await BACMARSLPTOKENPoolIZ7uPQr.decimals.call({from: accounts[2]});
		await BACMARSLPTOKENPoolIZ7uPQr.onlyRewardsDistribution.call({from: accounts[0]});
		await BACMARSLPTOKENPoolIZ7uPQr.onlyRewardsDistribution.call({from: accounts[5]});
		const uint256FCY65Zb = await BACMARSLPTOKENPoolIZ7uPQr.balanceOf.call(addressKBluHPe, {from: accounts[1]});
		const uint256gxNwazQ = await BACMARSLPTOKENPoolIZ7uPQr.withdraw.call(uintSfS9KW1, {from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringMlinlop = "geHfs4cCYw18elc5IxqatcYyK42dBtiaQpJoVRezTRogC1jwfNaP9LpPkkYRodnsLwDC2JIIN"
		const stringJ5RrKDR = "pB1qlWXw"
		const uintSS1f4j = BigInt("39")
		const BACMARSLPTOKENPoolxkxZmnb = await BACMARSLPTOKENPool.new(stringMlinlop, stringJ5RrKDR, uintSS1f4j, {from: accounts[1]});
		const uint256d9MyAfQ = await BACMARSLPTOKENPoolxkxZmnb.getRewardForDuration.call({from: accounts[3]});
		const uint8etv7XbR = await BACMARSLPTOKENPoolxkxZmnb.decimals.call({from: accounts[4]});
		await BACMARSLPTOKENPoolxkxZmnb.getReward.call({from: accounts[3]});
		const uint256oyAHlSV = await BACMARSLPTOKENPoolxkxZmnb.lastTimeRewardApplicable.call({from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringRvgPSuO = "GIgWsx"
		const stringGhkFm1D = "P"
		const uintHRCAnZw = BigInt("111")
		const BACMARSLPTOKENPoolGeIW6nQ = await BACMARSLPTOKENPool.new(stringRvgPSuO, stringGhkFm1D, uintHRCAnZw, {from: accounts[3]});
		const addressxjaBhUK = accounts[0]
		const uint256eXN9j1X = await BACMARSLPTOKENPoolGeIW6nQ.totalSupply.call({from: accounts[0]});
		const uint256gT1vgZ2 = await BACMARSLPTOKENPoolGeIW6nQ.earned.call(addressxjaBhUK, {from: accounts[1]});
		const uint256eRVpUt8 = await BACMARSLPTOKENPoolGeIW6nQ.getRewardForDuration.call({from: accounts[2]});
		const uint256ccvIoxd = await BACMARSLPTOKENPoolGeIW6nQ.rewardPerToken.call({from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringp4DmntU = "c5gVYffjFu19udbAZ6xLZ7QHe6gS2onljv2B9"
		const stringZx7RG36 = "fXtejEGHT2Dsi9WdEBmmpAwjBtex4tY3UYOe8fw9BVjmJufb4KWuzKkmygaI7M7XjAvYcxrq7G273GklPPEM"
		const uintIJflhh2 = BigInt("174")
		const BACMARSLPTOKENPoolkfdR6fD = await BACMARSLPTOKENPool.new(stringp4DmntU, stringZx7RG36, uintIJflhh2, {from: accounts[2]});
		const address4CgcO2 = accounts[3]
		const uint256n5RYqzH = await BACMARSLPTOKENPoolkfdR6fD.balanceOf.call(address4CgcO2, {from: accounts[0]});
		const uint256yLSgUSD = await BACMARSLPTOKENPoolkfdR6fD.totalSupply.call({from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringCHC1Csd = "IlcpdXBqO8S8izmsso8WSs9YHdMypnnf9L4QoWWjPMPog66JDYnDhnyWQmT4"
		const stringJG6wKB = "MYNq51ZrJnuQ9Ur4QJQ"
		const uintmzJVLm = BigInt("35")
		const BACMARSLPTOKENPoolHQVKWun = await BACMARSLPTOKENPool.new(stringCHC1Csd, stringJG6wKB, uintmzJVLm, {from: accounts[3]});
		const addressQnmER2X = accounts[4]
		await BACMARSLPTOKENPoolHQVKWun.exit.call({from: accounts[3]});
		const addresszQY0kmI = await BACMARSLPTOKENPoolHQVKWun.updateReward.call(addressQnmER2X, {from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringLDW8BwY = "wozliNvSDGwbKiof8QIpVKtRIxH"
		const stringfPZBjbS = "pJIKYbsocmyABzLrZM391PbDhQG3T8ht"
		const uint6SclkY = BigInt("116")
		const BACMARSLPTOKENPoolLB4LZ9O = await BACMARSLPTOKENPool.new(stringLDW8BwY, stringfPZBjbS, uint6SclkY, {from: accounts[0]});
		const addressuJPjIMr = accounts[4]
		const byteaIqResH = "0x090a19040e1914081416190b030907130f170c160d06131d090f0e150c1a1b1d"
		const byteTXMKdjv = "0x0b0a070b131705021416031a151a1d0f171f140b060717060403071204010b08"
		const uintFJbRcuJ = BigInt("128")
		const uintRD9AwZ = BigInt("260")
		const uintdKcUpZv = BigInt("258")
		await BACMARSLPTOKENPoolLB4LZ9O.onlyRewardsDistribution.call({from: accounts[2]});
		const uint256tJFsdnA = await BACMARSLPTOKENPoolLB4LZ9O.balanceOf.call(addressuJPjIMr, {from: accounts[1]});
		await BACMARSLPTOKENPoolLB4LZ9O.nonReentrant.call({from: accounts[3]});
		const uint8K4HAofS = await BACMARSLPTOKENPoolLB4LZ9O.decimals.call({from: accounts[2]});
		const uint256oZs1eib = await BACMARSLPTOKENPoolLB4LZ9O.stakeWithPermit.call(uintdKcUpZv, uintRD9AwZ, uintFJbRcuJ, byteTXMKdjv, byteaIqResH, {from: accounts[2]});
		await BACMARSLPTOKENPoolLB4LZ9O.getReward.call({from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringwzoVsCN = "fI51"
		const stringfg1TVev = "GxxhNoYK8TgLjiUfgDKiA0WjFodasMR71gDVIfsSKlasW35m6KKkVMcEk"
		const uintNAYcTwU = BigInt("96")
		const BACMARSLPTOKENPoolWooimbB = await BACMARSLPTOKENPool.new(stringwzoVsCN, stringfg1TVev, uintNAYcTwU, {from: accounts[3]});
		const uintH8d0pQa = BigInt("304")
		const addressPJu4Dw7 = "0x0000000000000000000000000000000000000001"
		const uintoRYEu7z = BigInt("428")
		const uint256Nzi2oDy = await BACMARSLPTOKENPoolWooimbB.notifyRewardAmount.call(uintH8d0pQa, {from: "0x0000000000000000000000000000000000000001"});
		const uint8bGVdXKq = await BACMARSLPTOKENPoolWooimbB.decimals.call({from: accounts[2]});
		const uint256UCzWSae = await BACMARSLPTOKENPoolWooimbB.earned.call(addressPJu4Dw7, {from: accounts[0]});
		const uint256Y0Q3Q6 = await BACMARSLPTOKENPoolWooimbB.withdraw.call(uintoRYEu7z, {from: accounts[1]});
		await BACMARSLPTOKENPoolWooimbB.getReward.call({from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringT8UTp68 = "sguhFl6dX8imlpt3JqZtqafNvdc8ALqRwD2OVQKBTOmklIrvttcfffIkJbl5JegyAaOZWoYH9CB5kaFmeYjddZ"
		const stringsAlZNb = "mtX7zl9mUb3rRAWhHzqFmeGR"
		const uintwAzNCF7 = BigInt("241")
		const BACMARSLPTOKENPoolFaTqHRd = await BACMARSLPTOKENPool.new(stringT8UTp68, stringsAlZNb, uintwAzNCF7, {from: accounts[1]});
		const addressM0mCvxT = accounts[4]
		const uintSGwFxyn = BigInt("26")
		await BACMARSLPTOKENPoolFaTqHRd.onlyRewardsDistribution.call({from: accounts[0]});
		const stringbg9rK0Z = await BACMARSLPTOKENPoolFaTqHRd.symbol.call({from: accounts[1]});
		const uint256XVrvpbv = await BACMARSLPTOKENPoolFaTqHRd.earned.call(addressM0mCvxT, {from: accounts[4]});
		const uint256VIWAfZd = await BACMARSLPTOKENPoolFaTqHRd.notifyRewardAmount.call(uintSGwFxyn, {from: accounts[5]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressWtiIZ2a = accounts[5]
		const addressVkVBR4L = accounts[5]
		const addressxQQLXE1 = accounts[4]
		const BACMARSLPTOKENPoolZ4BWvKx = await BACMARSLPTOKENPool.new(addressWtiIZ2a, addressVkVBR4L, addressxQQLXE1, {from: accounts[5]});
		const uintJVwYuCw = BigInt("1439")
		await BACMARSLPTOKENPoolZ4BWvKx.getReward.call({from: accounts[3]});
		const uint256gpHcv4w = await BACMARSLPTOKENPoolZ4BWvKx.notifyRewardAmount.call(uintJVwYuCw, {from: accounts[5]});

		await expect(BACMARSLPTOKENPoolZ4BWvKx.getReward.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringgM3xHtk = "njMgdJOplUmXEj4BWOLSG63Nwuj4Ii4XOqCjM21WUTuTOFCcdLxJ5XURBtP3I3kmcVb83x"
		const stringnWucy3W = "HhmMqTXLqYS2PAFqdDgDUkY6QmoNw4QYklak0uNzfuVwB7fmSz"
		const uintMs6Pl0 = BigInt("251")
		const BACMARSLPTOKENPoolfSSyZdq = await BACMARSLPTOKENPool.new(stringgM3xHtk, stringnWucy3W, uintMs6Pl0, {from: accounts[1]});
		const uintFZSZke8 = BigInt("1523")
		const uint256peZ4YeC = await BACMARSLPTOKENPoolfSSyZdq.totalSupply.call({from: accounts[4]});
		const uint256ZP1hvNK = await BACMARSLPTOKENPoolfSSyZdq.withdraw.call(uintFZSZke8, {from: "0x0000000000000000000000000000000000000001"});
		await BACMARSLPTOKENPoolfSSyZdq.onlyRewardsDistribution.call({from: accounts[2]});
		await BACMARSLPTOKENPoolfSSyZdq.getReward.call({from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringiWkWaRN = "O6VmPDHqoNRflebVd"
		const stringxRZNiYd = "ad47FT7ZssnHKkoKhs6fngnfsSZ5rTOneah8zCku0QkFiDG7bTK"
		const uintFUeCiPH = BigInt("223")
		const BACMARSLPTOKENPool7t847d = await BACMARSLPTOKENPool.new(stringiWkWaRN, stringxRZNiYd, uintFUeCiPH, {from: accounts[1]});
		const uint256cq7y0gR = await BACMARSLPTOKENPool7t847d.lastTimeRewardApplicable.call({from: accounts[0]});
		const uint8CcYbMUz = await BACMARSLPTOKENPool7t847d.decimals.call({from: accounts[2]});
		await BACMARSLPTOKENPool7t847d.onlyRewardsDistribution.call({from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringIuS3Psl = "0ci4Yiii8CSfeXBD8aDgVEOYBItdlnsel1afJN8e8JEB4m3ofKrVhthQAxpYDa6PQIgpvyHC6O"
		const stringD7MB1q = "srBfIbnQ9OaMMbDlxujTNb"
		const uintZ3KOJ89 = BigInt("151")
		const BACMARSLPTOKENPoolB51lDkt = await BACMARSLPTOKENPool.new(stringIuS3Psl, stringD7MB1q, uintZ3KOJ89, {from: accounts[0]});
		const byteY5XnER6 = "0x17091f0b050f091a0819040f0412200a181d071a11200f131e141908191e041d"
		const byteR4NnzAX = "0x0204201215190105171d0c03100e1c110b0218020809011a1514030d1c1b050e"
		const uintofAuoeV = BigInt("234")
		const uinti487yN5 = BigInt("421")
		const uintVhPbl30 = BigInt("1854")
		const stringoMXeuzT = await BACMARSLPTOKENPoolB51lDkt.symbol.call({from: accounts[0]});
		const uint256cvBpGfv = await BACMARSLPTOKENPoolB51lDkt.lastTimeRewardApplicable.call({from: accounts[0]});
		const uint256R1Gbyee = await BACMARSLPTOKENPoolB51lDkt.stakeWithPermit.call(uintVhPbl30, uinti487yN5, uintofAuoeV, byteR4NnzAX, byteY5XnER6, {from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringxIFg1dt = "vSMlgjgpUUDdXWkzwkEyCrBD3JMGQD2UrnQ9yrzf89etqFPnuCF8CZL7Y1UGRKcxBlXGUri"
		const stringB4DoX3T = "RQmIbMp4gBLRsOxn8XKrf3XysC2CCj2HYVTHAXCjcinQg93ialQK5b2TMaqQBtrwEed14gXk5VIEDnGO1g1PN"
		const uintPAAYAw2 = BigInt("172")
		const BACMARSLPTOKENPoolg6KVgsO = await BACMARSLPTOKENPool.new(stringxIFg1dt, stringB4DoX3T, uintPAAYAw2, {from: accounts[3]});
		const uintnnaTE5E = BigInt("1044")
		const uint256vC6Q4cq = await BACMARSLPTOKENPoolg6KVgsO.totalSupply.call({from: accounts[0]});
		const uint256T3N6bX0 = await BACMARSLPTOKENPoolg6KVgsO.withdraw.call(uintnnaTE5E, {from: accounts[3]});
		await BACMARSLPTOKENPoolg6KVgsO.exit.call({from: accounts[1]});
		const uint8mSIeOEd = await BACMARSLPTOKENPoolg6KVgsO.decimals.call({from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringVDboUYJ = "3qZFYWHQ5N96O1xRwPen9p1g5myvjSPTZ1qeo8rdYfHd1Qv5ty4OC7Ac6QuVdSoCmIiMBHVimuYJJgrXLl"
		const stringXVZAx0I = "REIH8xVgi6wKWdIIQ2iGV"
		const uintToRQlU5 = BigInt("207")
		const BACMARSLPTOKENPoolPu0cV2V = await BACMARSLPTOKENPool.new(stringVDboUYJ, stringXVZAx0I, uintToRQlU5, {from: accounts[0]});
		await BACMARSLPTOKENPoolPu0cV2V.getReward.call({from: accounts[3]});
		await BACMARSLPTOKENPoolPu0cV2V.exit.call({from: accounts[3]});
		await BACMARSLPTOKENPoolPu0cV2V.getReward.call({from: accounts[2]});
		const uint256noykgqJ = await BACMARSLPTOKENPoolPu0cV2V.lastTimeRewardApplicable.call({from: accounts[4]});
		await BACMARSLPTOKENPoolPu0cV2V.getReward.call({from: accounts[5]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringBWzmxRZ = "31tSN8LyN8P7nwXH3IPKcs1yLxHLU3ol7azcjlDaXkVkDR"
		const stringjo28Tq6 = "Qp2lNTO1GemppxsziVbMRFiOHV4m8LKNPel28q4AiTTMHFTeYsOBIqVKv6lbjjbdpFwifVXIK0qyJ57K"
		const uintHW05oP = BigInt("112")
		const BACMARSLPTOKENPoolGhRtDvf = await BACMARSLPTOKENPool.new(stringBWzmxRZ, stringjo28Tq6, uintHW05oP, {from: accounts[3]});
		const addressOsGMedM = accounts[3]
		const uint256Pf6Gz7K = await BACMARSLPTOKENPoolGhRtDvf.balanceOf.call(addressOsGMedM, {from: accounts[0]});
		const uint256fx2SJij = await BACMARSLPTOKENPoolGhRtDvf.getRewardForDuration.call({from: accounts[5]});
		await BACMARSLPTOKENPoolGhRtDvf.getReward.call({from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringC8Y5nw0 = "GK5k0wZ1iYkH59Y4ntPED81b1WOn8W"
		const stringnmZuCB3 = "2Ev47bO0xTH9lxYPYhuASR6eEyN99Qmk9x8MQ5TIiD9Vtez83lTUkbZIBsCHt"
		const uintsb3Seun = BigInt("94")
		const BACMARSLPTOKENPooloPllbX = await BACMARSLPTOKENPool.new(stringC8Y5nw0, stringnmZuCB3, uintsb3Seun, {from: accounts[2]});
		const bytetqmXbQ = "0x1c131d0d010a1518041c0a0c001e0f191b121a0f0e0f18071f151f13080f1503"
		const byteMuhsNVI = "0x0b090f17041c041c150a0d0203091f0c0811051a0f08001b091b13190d080820"
		const uintesFJFr3 = BigInt("105")
		const uintbxQSiWs = BigInt("1638")
		const uinttF4v06x = BigInt("1497")
		const uint256ARGQy9w = await BACMARSLPTOKENPooloPllbX.lastTimeRewardApplicable.call({from: accounts[2]});
		const uint256v9Xh2XV = await BACMARSLPTOKENPooloPllbX.stakeWithPermit.call(uinttF4v06x, uintbxQSiWs, uintesFJFr3, byteMuhsNVI, bytetqmXbQ, {from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringUPuFX4K = "VhUQTerL4iJ9nD9blXTwOrtkeXbnY6gSMIqKyFaFogkWxjcFV6TcSvYiduWcGEp"
		const stringfXec4Dz = "C4qDk3qMud0sDaoXn4IyW1xFwHx6tyumNce9AfAiktAOTJsNVaDSVKAe4yGXzNz3hfzHcrPmmgFqGlscxIN8"
		const uintDQGc6Ol = BigInt("220")
		const BACMARSLPTOKENPool2XagRR = await BACMARSLPTOKENPool.new(stringUPuFX4K, stringfXec4Dz, uintDQGc6Ol, {from: "0x0000000000000000000000000000000000000001"});
		const uint256rVZvMCt = await BACMARSLPTOKENPool2XagRR.lastTimeRewardApplicable.call({from: accounts[3]});
		await BACMARSLPTOKENPool2XagRR.nonReentrant.call({from: accounts[0]});
		const uint256pVQ7ysj = await BACMARSLPTOKENPool2XagRR.getRewardForDuration.call({from: accounts[5]});
		await BACMARSLPTOKENPool2XagRR.exit.call({from: accounts[4]});
		const uint256fJ2oWCh = await BACMARSLPTOKENPool2XagRR.rewardPerToken.call({from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringWbKIrBG = "XN5NwLHbctd8FdNB1djhkBsizLhKqjnzq8ECLlPvgPLnmadm5moy5nfuQqEygNoXi3B9Nf5J2cyC2csuzgiAyCxeh8"
		const stringeCUcC5F = "fhyX"
		const uintvBkTIBu = BigInt("72")
		const BACMARSLPTOKENPooltXfeLz = await BACMARSLPTOKENPool.new(stringWbKIrBG, stringeCUcC5F, uintvBkTIBu, {from: accounts[2]});
		const uintG2aBfi4 = BigInt("900")
		await BACMARSLPTOKENPooltXfeLz.getReward.call({from: accounts[0]});
		const uint256kaH4RkR = await BACMARSLPTOKENPooltXfeLz.getRewardForDuration.call({from: accounts[3]});
		const uint256bvkKzpB = await BACMARSLPTOKENPooltXfeLz.notifyRewardAmount.call(uintG2aBfi4, {from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringd47fKPE = "zoK9ruPEEupGvbQsJzsHMeIPVdU7x9Qb4bggTnrY2ajCHLNXvZl1tST2F56os37dzBrdukCXjmApJPSf"
		const stringLSmdHo = "02EmV8Cqwv7Yi5AvJM"
		const uintUL70CnV = BigInt("127")
		const BACMARSLPTOKENPoolEURe5xe = await BACMARSLPTOKENPool.new(stringd47fKPE, stringLSmdHo, uintUL70CnV, {from: accounts[2]});
		const uint256kcqUFh = await BACMARSLPTOKENPoolEURe5xe.lastTimeRewardApplicable.call({from: accounts[2]});
		const uint256KP5XSRJ = await BACMARSLPTOKENPoolEURe5xe.rewardPerToken.call({from: accounts[3]});
		const uint8xO20InO = await BACMARSLPTOKENPoolEURe5xe.decimals.call({from: accounts[1]});
		await BACMARSLPTOKENPoolEURe5xe.exit.call({from: accounts[0]});
		await BACMARSLPTOKENPoolEURe5xe.onlyRewardsDistribution.call({from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringgQbJE2 = "64EtqM5qarVRsYolv4eVXSqq5ocwVOnEjY89TB3vtP6cGy2x2bBOyXdLitHcWxaXb7uhSJwmUy"
		const stringmnjkoHY = "4JYr5U1qSP6ro9TXW81KUSKRAhz9Gqg9u5n91P75kqdHNOmJKerURetaow"
		const uintYUN7zrM = BigInt("159")
		const BACMARSLPTOKENPool9bHL34 = await BACMARSLPTOKENPool.new(stringgQbJE2, stringmnjkoHY, uintYUN7zrM, {from: accounts[5]});
		const uintVbjFWyA = BigInt("1720")
		const uintrmOhB3i = BigInt("1319")
		const uint2566xFekA = await BACMARSLPTOKENPool9bHL34.rewardPerToken.call({from: accounts[3]});
		const uint8XCD3IYR = await BACMARSLPTOKENPool9bHL34.decimals.call({from: accounts[0]});
		const uint256GL7LSzC = await BACMARSLPTOKENPool9bHL34.withdraw.call(uintVbjFWyA, {from: accounts[3]});
		await BACMARSLPTOKENPool9bHL34.exit.call({from: accounts[1]});
		const uint256jrvKgTc = await BACMARSLPTOKENPool9bHL34.notifyRewardAmount.call(uintrmOhB3i, {from: accounts[3]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringsZ2IwyJ = "IHULjnY4"
		const stringXFQG3mf = "hrafEt9LhfdKFA7UKR9CTWWUdFcO2xsHHqqsO7NznTjxSvHlYXYb"
		const uintduayTFr = BigInt("186")
		const BACMARSLPTOKENPoolcYpGwB3 = await BACMARSLPTOKENPool.new(stringsZ2IwyJ, stringXFQG3mf, uintduayTFr, {from: accounts[4]});
		const uintyjhS202 = BigInt("18")
		const uint256hso6z5 = await BACMARSLPTOKENPoolcYpGwB3.withdraw.call(uintyjhS202, {from: accounts[3]});
		await BACMARSLPTOKENPoolcYpGwB3.exit.call({from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringNi1QnGu = "43tvzuaK86V24S18z"
		const stringhQlW7g = "ZFBxhouyrY3HAlKJAILuX4vjI820SQFAaxEoUdoYkb7zcsAFceR"
		const uinty8zqYJK = BigInt("2")
		const BACMARSLPTOKENPoolWO0OtNb = await BACMARSLPTOKENPool.new(stringNi1QnGu, stringhQlW7g, uinty8zqYJK, {from: accounts[5]});
		const stringss3FiJ = await BACMARSLPTOKENPoolWO0OtNb.symbol.call({from: accounts[2]});
		const uint8eilyJXQ = await BACMARSLPTOKENPoolWO0OtNb.decimals.call({from: accounts[4]});
		await BACMARSLPTOKENPoolWO0OtNb.exit.call({from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringJ00k41 = "gCjWxtEI042ySjB1hTvTcu1BQVGuUrQb892HLJFIcn10WHj1EfAFTFdkFkKdYaVrmdW5nI37u"
		const stringOt7sVNK = "wh2LPRNUg9BE7uXv75QMKejqH1osXwuiFvbfbFfltJdChFuqALOK9nabeJE0DfmeU0"
		const uintDyKIual = BigInt("134")
		const BACMARSLPTOKENPools8co3oP = await BACMARSLPTOKENPool.new(stringJ00k41, stringOt7sVNK, uintDyKIual, {from: accounts[3]});
		const byteudhPiAR = "0x0a0d110714141f081c06160b0d1f0301121403030504121306181b0a0117170c"
		const bytetEBQlVb = "0x1e12150b051f060e08040f13141e04041e041c03011608031913090103040a0a"
		const uintbKGYMr2 = BigInt("39")
		const uintSp6jaS3 = BigInt("683")
		const uintuzew5b = BigInt("709")
		const uintHccR4hd = BigInt("1523")
		const uint256cfPqg5o = await BACMARSLPTOKENPools8co3oP.stakeWithPermit.call(uintuzew5b, uintSp6jaS3, uintbKGYMr2, bytetEBQlVb, byteudhPiAR, {from: accounts[0]});
		const uint2566BSWgf = await BACMARSLPTOKENPools8co3oP.notifyRewardAmount.call(uintHccR4hd, {from: accounts[0]});
		const stringMInmjXV = await BACMARSLPTOKENPools8co3oP.name.call({from: accounts[2]});
		const stringNsEENy8 = await BACMARSLPTOKENPools8co3oP.name.call({from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringUzkqlAL = "AD5s7b8G3EHVlRY8bIlQlHROz8Kn4w4jx12toeno5HE0nvdRXMaAosoHoL"
		const stringvcaFkYT = "VtzLDJaNCk8STsIbm9lfN4zek3FjwdxjW3dAUkwSiCPcBMzDE5JyXeN6ZcFGEtWAe5dFhz9"
		const uintZr44mLe = BigInt("170")
		const BACMARSLPTOKENPool4ySS4V = await BACMARSLPTOKENPool.new(stringUzkqlAL, stringvcaFkYT, uintZr44mLe, {from: accounts[0]});
		const addressiEOdeLz = "0x0000000000000000000000000000000000000001"
		const uintBWBKExU = BigInt("426")
		const addresshMVPn8m = await BACMARSLPTOKENPool4ySS4V.updateReward.call(addressiEOdeLz, {from: accounts[2]});
		const uint256xtWU4da = await BACMARSLPTOKENPool4ySS4V.notifyRewardAmount.call(uintBWBKExU, {from: accounts[5]});
		const stringlPMKra4 = await BACMARSLPTOKENPool4ySS4V.symbol.call({from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringNAs6w57 = "4rTWOjw8eV3Wf1ayet8WtJrr2PQFhg3QHFzIqoWbxso0KOSyfFMbU"
		const stringI4j4WR4 = "1Kt2945"
		const uintbikNQ9E = BigInt("36")
		const BACMARSLPTOKENPoolS4vBJP = await BACMARSLPTOKENPool.new(stringNAs6w57, stringI4j4WR4, uintbikNQ9E, {from: accounts[4]});
		const uint2OCrUC = BigInt("1509")
		const uintQn9nneR = BigInt("122")
		const uint256yine41z = await BACMARSLPTOKENPoolS4vBJP.stake.call(uint2OCrUC, {from: accounts[4]});
		await BACMARSLPTOKENPoolS4vBJP.getReward.call({from: accounts[5]});
		const uint256Y3U1gDC = await BACMARSLPTOKENPoolS4vBJP.notifyRewardAmount.call(uintQn9nneR, {from: accounts[0]});
		await BACMARSLPTOKENPoolS4vBJP.exit.call({from: accounts[0]});
	});
})