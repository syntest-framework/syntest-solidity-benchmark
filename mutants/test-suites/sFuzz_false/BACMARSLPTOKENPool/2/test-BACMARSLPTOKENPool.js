const BACMARSLPTOKENPool = artifacts.require("BACMARSLPTOKENPool");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('BACMARSLPTOKENPool', (accounts) => {
	it('test for BACMARSLPTOKENPool', async () => {
		const addressLBRK52 = accounts[2]
		const addresswHOpqV = accounts[0]
		const addressrBjnrO7 = accounts[1]
		const BACMARSLPTOKENPooltuG1qER = await BACMARSLPTOKENPool.new(addressLBRK52, addresswHOpqV, addressrBjnrO7, {from: accounts[1]});
		const addressBjICY7R = accounts[2]
		const uint256M3LWtkL = await BACMARSLPTOKENPooltuG1qER.earned.call(addressBjICY7R, {from: accounts[1]});
		const uint256TTnJabc = await BACMARSLPTOKENPooltuG1qER.rewardPerToken.call({from: accounts[0]});
		const uint256YEPcLXS = await BACMARSLPTOKENPooltuG1qER.lastTimeRewardApplicable.call({from: accounts[1]});
		const uint256TVqoP2Q = await BACMARSLPTOKENPooltuG1qER.totalSupply.call({from: accounts[2]});
//		await BACMARSLPTOKENPooltuG1qER.nonReentrant.call({from: accounts[0]});

		assert.equal(uint256M3LWtkL, BigInt("0"))
		assert.equal(uint256TTnJabc, BigInt("0"))
		assert.equal(uint256TVqoP2Q, BigInt("0"))
		assert.equal(uint256YEPcLXS, BigInt("0"))
		await expect(BACMARSLPTOKENPooltuG1qER.nonReentrant.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringSyPl7FD = "uDiHifG2mRSj7bF51nAeqL3VUphj6P2nlXc8OqRMlUF15sC1Y2e1PDjkLblY46IeGyQbJ1acFDPn28OUHRxJA1Hs1"
		const stringVWs9VBG = "8Aa9rO2grOmYixxanYTXMqO9LyXzJ7gHv2y1k1wWmKYtfwvEXxIUWiJE5LyOwrHqJMkF8lpHXWCKqxyb9rXMXsNRheVcOdHmJ7"
		const uintHlpT8rB = BigInt("25")
		const BACMARSLPTOKENPoolj7csM7G = await BACMARSLPTOKENPool.new(stringSyPl7FD, stringVWs9VBG, uintHlpT8rB, {from: accounts[3]});
		const addressqsXTWZK = accounts[2]
		const uintKr86Xf7 = BigInt("583")
		const uintiUHE31D = BigInt("775")
		const uint256A8a29qy = await BACMARSLPTOKENPoolj7csM7G.balanceOf.call(addressqsXTWZK, {from: accounts[1]});
		const uint256Enpoeyl = await BACMARSLPTOKENPoolj7csM7G.stake.call(uintKr86Xf7, {from: accounts[4]});
		const uint256KNsV2Ay = await BACMARSLPTOKENPoolj7csM7G.notifyRewardAmount.call(uintiUHE31D, {from: accounts[3]});
		await BACMARSLPTOKENPoolj7csM7G.getReward.call({from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringRICjSdv = "JL4AGHsabHDQh"
		const stringZ5phE5v = "rCWKSq2mUQJ5UCvUJJFYU3fcqiGKMq9OD7TebLA7Uf02PryswDrJ2voXs1wUFmvzzrj0fWuPlaJqwCTfyxAe82qVBGNYvj36X9"
		const uintsR9097K = BigInt("111")
		const BACMARSLPTOKENPoolK1Yf4e5 = await BACMARSLPTOKENPool.new(stringRICjSdv, stringZ5phE5v, uintsR9097K, {from: accounts[3]});
		const uintpUKoR9F = BigInt("1742")
		const uintUP9hLm = BigInt("1961")
		const uint256cL3NGtT = await BACMARSLPTOKENPoolK1Yf4e5.totalSupply.call({from: accounts[0]});
		const uint256fb98rZK = await BACMARSLPTOKENPoolK1Yf4e5.notifyRewardAmount.call(uintpUKoR9F, {from: accounts[4]});
		await BACMARSLPTOKENPoolK1Yf4e5.getReward.call({from: accounts[3]});
		const uint256MWaVLCy = await BACMARSLPTOKENPoolK1Yf4e5.withdraw.call(uintUP9hLm, {from: accounts[3]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressZZwV9HD = accounts[1]
		const addressUDLSVqp = accounts[1]
		const addressSpK5JnE = "0x0000000000000000000000000000000000000001"
		const BACMARSLPTOKENPoolWa8RoC1 = await BACMARSLPTOKENPool.new(addressZZwV9HD, addressUDLSVqp, addressSpK5JnE, {from: accounts[1]});
		const addresssRCF24X = accounts[3]
		const uint256upUtkrp = await BACMARSLPTOKENPoolWa8RoC1.rewardPerToken.call({from: accounts[2]});
		const uint256OXNm5PT = await BACMARSLPTOKENPoolWa8RoC1.lastTimeRewardApplicable.call({from: accounts[3]});
		const uint256dkVSclF = await BACMARSLPTOKENPoolWa8RoC1.balanceOf.call(addresssRCF24X, {from: accounts[0]});
//		const uint8FnNZtP = await BACMARSLPTOKENPoolWa8RoC1.decimals.call({from: accounts[2]});

		assert.equal(uint256OXNm5PT, BigInt("0"))
		assert.equal(uint256dkVSclF, BigInt("0"))
		assert.equal(uint256upUtkrp, BigInt("0"))
		await expect(BACMARSLPTOKENPoolWa8RoC1.decimals.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringEqyCtIy = "7GGLJ97PckxXi1JQyhl"
		const stringWRG4rTN = "OfderF1TPBObcwbkjS8"
		const uintytstvD = BigInt("64")
		const BACMARSLPTOKENPoolWzsgTBr = await BACMARSLPTOKENPool.new(stringEqyCtIy, stringWRG4rTN, uintytstvD, {from: accounts[2]});
		const uinty70VG39 = BigInt("1919")
		const uint256S6HDAXJ = await BACMARSLPTOKENPoolWzsgTBr.totalSupply.call({from: accounts[2]});
		const uint256vMztLtg = await BACMARSLPTOKENPoolWzsgTBr.withdraw.call(uinty70VG39, {from: accounts[5]});
		const uint256MtgMnEd = await BACMARSLPTOKENPoolWzsgTBr.getRewardForDuration.call({from: accounts[2]});
		await BACMARSLPTOKENPoolWzsgTBr.exit.call({from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringXopOekj = "LAk3PpMTQtIwJe1"
		const stringmOeoMGp = "xqftX5Aqd1KCEiWhk5TOtVKY1U21BzI474Ymarv1oRsUKwTdB7TRlHPk54wtEU3Vmiq3G4SRDnvoXxkXLbtJ1aNrovfy"
		const uintBeL5v4x = BigInt("133")
		const BACMARSLPTOKENPoolSZZJqe = await BACMARSLPTOKENPool.new(stringXopOekj, stringmOeoMGp, uintBeL5v4x, {from: accounts[1]});
		const uintzNcjo82 = BigInt("1238")
		const uintfFbvz3q = BigInt("629")
		const uintUmoJ4pK = BigInt("849")
		await BACMARSLPTOKENPoolSZZJqe.nonReentrant.call({from: accounts[0]});
		const uint256oWVjdM = await BACMARSLPTOKENPoolSZZJqe.stake.call(uintzNcjo82, {from: accounts[2]});
		const uint256twrpTBv = await BACMARSLPTOKENPoolSZZJqe.notifyRewardAmount.call(uintfFbvz3q, {from: accounts[2]});
		const uint8NaOW5at = await BACMARSLPTOKENPoolSZZJqe.decimals.call({from: accounts[1]});
		const uint256AJJnIED = await BACMARSLPTOKENPoolSZZJqe.stake.call(uintUmoJ4pK, {from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressv66TmPb = accounts[1]
		const addressWuSJwyC = "0x0000000000000000000000000000000000000001"
		const addressvTCet6T = accounts[0]
		const BACMARSLPTOKENPoolXndzHrz = await BACMARSLPTOKENPool.new(addressv66TmPb, addressWuSJwyC, addressvTCet6T, {from: accounts[0]});
//		await BACMARSLPTOKENPoolXndzHrz.exit.call({from: accounts[0]});
//		await BACMARSLPTOKENPoolXndzHrz.onlyRewardsDistribution.call({from: "0x0000000000000000000000000000000000000001"});
//		await BACMARSLPTOKENPoolXndzHrz.exit.call({from: accounts[5]});
//		await BACMARSLPTOKENPoolXndzHrz.nonReentrant.call({from: accounts[1]});
//		const uint256ljJ0Ea = await BACMARSLPTOKENPoolXndzHrz.lastTimeRewardApplicable.call({from: accounts[5]});

		await expect(BACMARSLPTOKENPoolXndzHrz.exit.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringtPHSsc1 = "7xrlu4G0BrQHD7mGRvb29QbuGtdv9zRGmiLzLBB8G"
		const stringAPQPnyg = "gULKiHa4jMfcS36cA5U8JrR"
		const uintzn4ppJV = BigInt("185")
		const BACMARSLPTOKENPooliLluM1Q = await BACMARSLPTOKENPool.new(stringtPHSsc1, stringAPQPnyg, uintzn4ppJV, {from: accounts[0]});
		const uintMzivfc = BigInt("1099")
		const addressvArVwfY = accounts[3]
		await BACMARSLPTOKENPooliLluM1Q.onlyRewardsDistribution.call({from: accounts[4]});
		await BACMARSLPTOKENPooliLluM1Q.nonReentrant.call({from: accounts[1]});
		const uint256ERNASMB = await BACMARSLPTOKENPooliLluM1Q.notifyRewardAmount.call(uintMzivfc, {from: accounts[1]});
		const uint256W6M8szp = await BACMARSLPTOKENPooliLluM1Q.earned.call(addressvArVwfY, {from: accounts[4]});
		const uint8ScCvOI = await BACMARSLPTOKENPooliLluM1Q.decimals.call({from: accounts[3]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressCVcKOjF = accounts[4]
		const addressmTlOMB2 = accounts[2]
		const addressqAAOM7 = "0x0000000000000000000000000000000000000001"
		const BACMARSLPTOKENPoolzWVNQzw = await BACMARSLPTOKENPool.new(addressCVcKOjF, addressmTlOMB2, addressqAAOM7, {from: accounts[0]});
		const byteIACOHJu = "0x1e1d151617040b0d200f1012060605191203190e18161e0215100f1908130709"
		const bytey89KrI = "0x0518140c1b1114121908011a000b170e101116180f14081a0a1f1e19051f0101"
		const uintN0zfocv = BigInt("25")
		const uintDP67VGn = BigInt("1905")
		const uintj5Pw6me = BigInt("347")
		const addressKhq7eZk = accounts[0]
		const addressLNtzYPF = accounts[2]
//		const uint256lur3bLc = await BACMARSLPTOKENPoolzWVNQzw.stakeWithPermit.call(uintj5Pw6me, uintDP67VGn, uintN0zfocv, bytey89KrI, byteIACOHJu, {from: accounts[4]});
//		await BACMARSLPTOKENPoolzWVNQzw.exit.call({from: accounts[1]});
//		const uint256c1Fp7u6 = await BACMARSLPTOKENPoolzWVNQzw.balanceOf.call(addressKhq7eZk, {from: accounts[0]});
//		const uint256Xa2H1nA = await BACMARSLPTOKENPoolzWVNQzw.earned.call(addressLNtzYPF, {from: accounts[4]});
//		const uint256MzU3QdE = await BACMARSLPTOKENPoolzWVNQzw.getRewardForDuration.call({from: accounts[0]});
//		await BACMARSLPTOKENPoolzWVNQzw.exit.call({from: accounts[0]});

		await expect(BACMARSLPTOKENPoolzWVNQzw.stakeWithPermit.call(uintj5Pw6me, uintDP67VGn, uintN0zfocv, bytey89KrI, byteIACOHJu, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressqOARt8c = accounts[4]
		const addressSZsIyMF = accounts[2]
		const addressADCJHeQ = "0x0000000000000000000000000000000000000001"
		const BACMARSLPTOKENPoolzWVNQzw = await BACMARSLPTOKENPool.new(addressqOARt8c, addressSZsIyMF, addressADCJHeQ, {from: accounts[0]});
		const uintUs7wBb = BigInt("800")
		const addresso5q3dYe = accounts[2]
		const uintP6tjurr = BigInt("1462")
//		const uint256dqX8eoU = await BACMARSLPTOKENPoolzWVNQzw.stake.call(uintUs7wBb, {from: accounts[1]});
//		await BACMARSLPTOKENPoolzWVNQzw.exit.call({from: accounts[1]});
//		const uint256c1Fp7u6 = await BACMARSLPTOKENPoolzWVNQzw.balanceOf.call(addresso5q3dYe, {from: accounts[0]});
//		await BACMARSLPTOKENPoolzWVNQzw.exit.call({from: accounts[0]});
//		const uint256sKiAbOX = await BACMARSLPTOKENPoolzWVNQzw.totalSupply.call({from: accounts[4]});
//		const uint256DkvQG1t = await BACMARSLPTOKENPoolzWVNQzw.stake.call(uintP6tjurr, {from: accounts[0]});
//		await BACMARSLPTOKENPoolzWVNQzw.getReward.call({from: accounts[4]});
//		await BACMARSLPTOKENPoolzWVNQzw.nonReentrant.call({from: accounts[3]});

		await expect(BACMARSLPTOKENPoolzWVNQzw.stake.call(uintUs7wBb, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressZ5DNZGc = accounts[4]
		const address0lxbm9 = accounts[2]
		const addresskhByC4M = "0x0000000000000000000000000000000000000001"
		const BACMARSLPTOKENPoolzWVNQzw = await BACMARSLPTOKENPool.new(addressZ5DNZGc, address0lxbm9, addresskhByC4M, {from: accounts[0]});
		const uint256fftWiwJ = await BACMARSLPTOKENPoolzWVNQzw.getRewardForDuration.call({from: accounts[2]});
//		await BACMARSLPTOKENPoolzWVNQzw.exit.call({from: accounts[1]});
//		await BACMARSLPTOKENPoolzWVNQzw.exit.call({from: accounts[0]});

		assert.equal(uint256fftWiwJ, BigInt("0"))
		await expect(BACMARSLPTOKENPoolzWVNQzw.exit.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringHuSu11Z = "P2yCF37KsI0Wrgfifzih22LL0Ml8m61qt7ujYM2gYfSf"
		const stringF5MhryT = "V8vkoI72yLFgDKLWXN5qfNxXTFn4F1atqjHQdhMpF7XXRHDbdGIUzhzo09EHChE2vehs5IeRv7e3U1YaOTjf"
		const uintNUZsQS = BigInt("5")
		const BACMARSLPTOKENPoolyfZCxjD = await BACMARSLPTOKENPool.new(stringHuSu11Z, stringF5MhryT, uintNUZsQS, {from: accounts[4]});
		const uinteLVreZV = BigInt("2002")
		const uint256qRwmxQ = await BACMARSLPTOKENPoolyfZCxjD.stake.call(uinteLVreZV, {from: accounts[1]});
		const uint8VcCVA5 = await BACMARSLPTOKENPoolyfZCxjD.decimals.call({from: accounts[2]});
		const stringFXjQ9G = await BACMARSLPTOKENPoolyfZCxjD.symbol.call({from: accounts[5]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addresst26RKHV = accounts[4]
		const addresspJhKm2S = accounts[2]
		const addressjK74v21 = "0x0000000000000000000000000000000000000001"
		const BACMARSLPTOKENPoolzWVNQzw = await BACMARSLPTOKENPool.new(addresst26RKHV, addresspJhKm2S, addressjK74v21, {from: accounts[0]});
		const address6QEW2J = accounts[2]
//		await BACMARSLPTOKENPoolzWVNQzw.getReward.call({from: accounts[1]});
//		await BACMARSLPTOKENPoolzWVNQzw.exit.call({from: accounts[1]});
//		const uint256c1Fp7u6 = await BACMARSLPTOKENPoolzWVNQzw.balanceOf.call(address6QEW2J, {from: accounts[0]});
//		await BACMARSLPTOKENPoolzWVNQzw.exit.call({from: accounts[0]});

		await expect(BACMARSLPTOKENPoolzWVNQzw.getReward.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressLXHmi1f = accounts[3]
		const addressCw3wnd3 = accounts[4]
		const addressYz04VVU = accounts[0]
		const BACMARSLPTOKENPoolcykcdAQ = await BACMARSLPTOKENPool.new(addressLXHmi1f, addressCw3wnd3, addressYz04VVU, {from: accounts[0]});
		const uintTfo4T7a = BigInt("1406")
		const uint256NJxn4ig = await BACMARSLPTOKENPoolcykcdAQ.rewardPerToken.call({from: accounts[2]});
//		const uint256lE0tW6d = await BACMARSLPTOKENPoolcykcdAQ.notifyRewardAmount.call(uintTfo4T7a, {from: accounts[5]});
//		await BACMARSLPTOKENPoolcykcdAQ.onlyRewardsDistribution.call({from: accounts[4]});
//		const uint256M1NFS2m = await BACMARSLPTOKENPoolcykcdAQ.lastTimeRewardApplicable.call({from: accounts[3]});

		assert.equal(uint256NJxn4ig, BigInt("0"))
		await expect(BACMARSLPTOKENPoolcykcdAQ.notifyRewardAmount.call(uintTfo4T7a, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addresst7pKB7n = accounts[4]
		const addressKozKUW6 = accounts[2]
		const addressuRRCszE = "0x0000000000000000000000000000000000000001"
		const BACMARSLPTOKENPoolzWVNQzw = await BACMARSLPTOKENPool.new(addresst7pKB7n, addressKozKUW6, addressuRRCszE, {from: accounts[0]});
		const uintidL93yI = BigInt("1730")
		const addressSslsuOs = accounts[2]
//		const uint256LYpo1yd = await BACMARSLPTOKENPoolzWVNQzw.withdraw.call(uintidL93yI, {from: "0x0000000000000000000000000000000000000001"});
//		await BACMARSLPTOKENPoolzWVNQzw.getReward.call({from: accounts[1]});
//		await BACMARSLPTOKENPoolzWVNQzw.exit.call({from: accounts[1]});
//		await BACMARSLPTOKENPoolzWVNQzw.nonReentrant.call({from: accounts[2]});
//		const uint256c1Fp7u6 = await BACMARSLPTOKENPoolzWVNQzw.balanceOf.call(addressSslsuOs, {from: accounts[0]});
//		await BACMARSLPTOKENPoolzWVNQzw.exit.call({from: accounts[0]});

		await expect(BACMARSLPTOKENPoolzWVNQzw.withdraw.call(uintidL93yI, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressupOjI4x = accounts[1]
		const addressTSBhCi = accounts[1]
		const addressbEbkBRr = accounts[4]
		const BACMARSLPTOKENPoolMbtaEWh = await BACMARSLPTOKENPool.new(addressupOjI4x, addressTSBhCi, addressbEbkBRr, {from: accounts[1]});
		const uintUHSIxNX = BigInt("218")
		const uint256GH6dd4g = await BACMARSLPTOKENPoolMbtaEWh.rewardPerToken.call({from: accounts[1]});
//		const uint256RPHDYp = await BACMARSLPTOKENPoolMbtaEWh.notifyRewardAmount.call(uintUHSIxNX, {from: accounts[1]});
//		await BACMARSLPTOKENPoolMbtaEWh.exit.call({from: accounts[3]});

		assert.equal(uint256GH6dd4g, BigInt("0"))
		await expect(BACMARSLPTOKENPoolMbtaEWh.notifyRewardAmount.call(uintUHSIxNX, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringOdYGDCJ = "KnTC9bn2Bn95LcMN9ROqLK5Gi1JzKwdoLzL9iSdxM61Khq76bDcndfTbpYOTFwRl7gaCMsLUPT1VW2Q"
		const stringCqLqQBS = "MAihELu5OVVs57XkbAEGNhXOU8TUmVoszIQdMLTMDNVxphtDp9t8D5clBsh5E"
		const uintNZf4SA = BigInt("58")
		const BACMARSLPTOKENPoolwIPul1m = await BACMARSLPTOKENPool.new(stringOdYGDCJ, stringCqLqQBS, uintNZf4SA, {from: accounts[5]});
		const uintDrm1VdQ = BigInt("1782")
		await BACMARSLPTOKENPoolwIPul1m.getReward.call({from: accounts[3]});
		const uint256fPL0bLc = await BACMARSLPTOKENPoolwIPul1m.rewardPerToken.call({from: accounts[2]});
		const stringQt7Hlc9 = await BACMARSLPTOKENPoolwIPul1m.symbol.call({from: accounts[0]});
		const uint256mVOcsB = await BACMARSLPTOKENPoolwIPul1m.stake.call(uintDrm1VdQ, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringKNxz7c2 = "BgiW3nK8kMbVSMl5AvtlVIr1WwhLM3ukFUfGJxwiyJJzvVZa98eYNFKX5"
		const stringfm5jf8B = "IxkhB760OiuyW5rQYNxlHXcycC6sK2ETj49Rqf3LSFnZ8ANNNjQi3lEBkWy8hUvhUAOW"
		const uintScDe9u0 = BigInt("87")
		const BACMARSLPTOKENPoolROgMKhW = await BACMARSLPTOKENPool.new(stringKNxz7c2, stringfm5jf8B, uintScDe9u0, {from: accounts[2]});
		const uint8PDkGndW = await BACMARSLPTOKENPoolROgMKhW.decimals.call({from: accounts[5]});
		await BACMARSLPTOKENPoolROgMKhW.getReward.call({from: accounts[2]});
		const uint2565gGA1B = await BACMARSLPTOKENPoolROgMKhW.lastTimeRewardApplicable.call({from: accounts[0]});
		await BACMARSLPTOKENPoolROgMKhW.exit.call({from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringfBhv4bH = "aWZxpqUx6G2AcygbssrvDxf28FaMrVdYHC7EBUY1xwZ4XXqVGwL7PlY2WlNhAh9dwD6ts9xjViVsJCo9pSWM"
		const stringFJ2zu1M = "w4oqLxIpmkpaPTwwj3LRN5L4o78giidCVAOnqG9fi2h6ph1hz5PgWKJOg9Aye5"
		const uintDbqImuL = BigInt("242")
		const BACMARSLPTOKENPoolOaUqAB = await BACMARSLPTOKENPool.new(stringfBhv4bH, stringFJ2zu1M, uintDbqImuL, {from: accounts[4]});
		const addressC0wD5PT = accounts[1]
		await BACMARSLPTOKENPoolOaUqAB.exit.call({from: accounts[2]});
		const stringBwyMnEn = await BACMARSLPTOKENPoolOaUqAB.symbol.call({from: accounts[0]});
		const stringT5C8ROW = await BACMARSLPTOKENPoolOaUqAB.name.call({from: accounts[4]});
		const uint256BW9biyJ = await BACMARSLPTOKENPoolOaUqAB.earned.call(addressC0wD5PT, {from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringLOpoxgd = "oldxtq6EfNntIUl4VUOR1YvpXJ72fREGY9bhU1qIKN8qQ"
		const stringwgZWQUx = "UnVtk1SuLF3sW9gje1NDXmbt8YXFydQlj2L3is"
		const uintvGpotNK = BigInt("112")
		const BACMARSLPTOKENPoolk7gyVzv = await BACMARSLPTOKENPool.new(stringLOpoxgd, stringwgZWQUx, uintvGpotNK, {from: accounts[3]});
		const byteJRRRjZV = "0x2005181c0e0211160d1f0e1d081d01190d04070f0f1e141d0a200b0420131b05"
		const bytex5JcPJw = "0x0c03131c1e0a1e1f1b021610171b1f0c021e150c01010e020604180c160f0509"
		const uintu30HKbK = BigInt("137")
		const uintNuP4ErY = BigInt("1484")
		const uintwKOdndB = BigInt("572")
		const uintN3BWTJc = BigInt("1635")
		const byte6br3nc = "0x0d060f1e151803090e2019121a1d1c00131b0c0a160409151d1404140c120e02"
		const byteJ3PsMYc = "0x120c1e1518030714171c0b07021f091b160d1e1b1718031a040f080e16080b1c"
		const uint6DkS0I = BigInt("84")
		const uintsA7R9DC = BigInt("1866")
		const uintSnPrryH = BigInt("533")
		const uint256Zelu9EY = await BACMARSLPTOKENPoolk7gyVzv.stakeWithPermit.call(uintwKOdndB, uintNuP4ErY, uintu30HKbK, bytex5JcPJw, byteJRRRjZV, {from: accounts[2]});
		const uint256oHlipxe = await BACMARSLPTOKENPoolk7gyVzv.withdraw.call(uintN3BWTJc, {from: accounts[0]});
		const uint256u0Jzd0n = await BACMARSLPTOKENPoolk7gyVzv.stakeWithPermit.call(uintSnPrryH, uintsA7R9DC, uint6DkS0I, byteJ3PsMYc, byte6br3nc, {from: accounts[0]});
		const uint8UR7dONG = await BACMARSLPTOKENPoolk7gyVzv.decimals.call({from: accounts[3]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringg9KNwSl = "RVfJ7U4epB6Xv5H21IYKwTteSiUpzTBu5fMUW8usNXy4yuIKB"
		const string8JtYb7 = "R6XC2x0nlJscBRQCe7El3Cm2dKDs"
		const uintwYudni2 = BigInt("94")
		const BACMARSLPTOKENPoolKO67rQ2 = await BACMARSLPTOKENPool.new(stringg9KNwSl, string8JtYb7, uintwYudni2, {from: accounts[1]});
		const addressAC8CSau = accounts[1]
		const address3wON7j = accounts[4]
		const uint8SVBZ3c = await BACMARSLPTOKENPoolKO67rQ2.decimals.call({from: accounts[1]});
		const addressAJ9kjcI = await BACMARSLPTOKENPoolKO67rQ2.updateReward.call(addressAC8CSau, {from: "0x0000000000000000000000000000000000000001"});
		const uint256CuVsX2x = await BACMARSLPTOKENPoolKO67rQ2.earned.call(address3wON7j, {from: accounts[3]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringBN6cnq6 = "MLIF28eRL"
		const stringZuEvDAg = "OCChnpttGUSqrxRD8xctlj"
		const uintsDzDMW2 = BigInt("191")
		const BACMARSLPTOKENPoolm0jzFg8 = await BACMARSLPTOKENPool.new(stringBN6cnq6, stringZuEvDAg, uintsDzDMW2, {from: accounts[2]});
		const uinthGicfi = BigInt("1620")
		const uintcnlWeJW = BigInt("646")
		const uint8a7R2Jl0 = await BACMARSLPTOKENPoolm0jzFg8.decimals.call({from: accounts[4]});
		await BACMARSLPTOKENPoolm0jzFg8.exit.call({from: accounts[2]});
		const uint256OJvfu5F = await BACMARSLPTOKENPoolm0jzFg8.stake.call(uinthGicfi, {from: accounts[3]});
		const uint256amqlWEG = await BACMARSLPTOKENPoolm0jzFg8.lastTimeRewardApplicable.call({from: accounts[3]});
		const uint256tvVKvxA = await BACMARSLPTOKENPoolm0jzFg8.notifyRewardAmount.call(uintcnlWeJW, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringgzcGPzX = "kidZsvuQkBbC8w1rw4UyO7R8w"
		const stringlUR50N = "WnJShO"
		const uintYeaMo5s = BigInt("147")
		const BACMARSLPTOKENPoolNQhAED2 = await BACMARSLPTOKENPool.new(stringgzcGPzX, stringlUR50N, uintYeaMo5s, {from: accounts[2]});
		const uintXXoBmF = BigInt("11")
		await BACMARSLPTOKENPoolNQhAED2.getReward.call({from: accounts[0]});
		const uint256cI75EM2 = await BACMARSLPTOKENPoolNQhAED2.notifyRewardAmount.call(uintXXoBmF, {from: accounts[2]});
		const stringvAOOZWb = await BACMARSLPTOKENPoolNQhAED2.symbol.call({from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringIOJ7yT = "4UAuRfLTOG0ffcc9CBU8Cvo"
		const stringWL1qH4q = "bGYSNPWjWKILvgsb45sU8JgBwEo4l9eDd3LWPutGO8keEDdUYLKdQEjy79SZvS"
		const uintFmZEbkq = BigInt("167")
		const BACMARSLPTOKENPoolHIJlOCw = await BACMARSLPTOKENPool.new(stringIOJ7yT, stringWL1qH4q, uintFmZEbkq, {from: accounts[4]});
		const uintoDXnOxl = BigInt("368")
		const uintwF3ow59 = BigInt("1618")
		const uint256ckjC0t0 = await BACMARSLPTOKENPoolHIJlOCw.rewardPerToken.call({from: accounts[0]});
		const uint256RmhzHM = await BACMARSLPTOKENPoolHIJlOCw.rewardPerToken.call({from: accounts[4]});
		const uint256N4hyOJS = await BACMARSLPTOKENPoolHIJlOCw.notifyRewardAmount.call(uintoDXnOxl, {from: accounts[5]});
		const uint256knzg4el = await BACMARSLPTOKENPoolHIJlOCw.notifyRewardAmount.call(uintwF3ow59, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringGP7BwsT = "qo3vu"
		const stringylTZQfR = "ifTPjQdvUtVpIu3AMjrx3PEGNrNKxuQXfOTfHqBzQ6hfMBWT1yHY"
		const uintuIFU7IP = BigInt("123")
		const BACMARSLPTOKENPoolMCUyKqg = await BACMARSLPTOKENPool.new(stringGP7BwsT, stringylTZQfR, uintuIFU7IP, {from: accounts[3]});
		await BACMARSLPTOKENPoolMCUyKqg.nonReentrant.call({from: accounts[1]});
		const uint256rR4r31d = await BACMARSLPTOKENPoolMCUyKqg.lastTimeRewardApplicable.call({from: accounts[0]});
		const uint256znVLKw9 = await BACMARSLPTOKENPoolMCUyKqg.rewardPerToken.call({from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringM2cIpc0 = "RhOisvwaGJ9YYAeXGBrac0TKuETXXVkXkVauRCr9Ksb"
		const stringgWJMomU = "rrF063JQcgJXYglcEo8wt"
		const uinttQUGHW = BigInt("26")
		const BACMARSLPTOKENPooluMlR9oP = await BACMARSLPTOKENPool.new(stringM2cIpc0, stringgWJMomU, uinttQUGHW, {from: accounts[5]});
		const addressgrewNUL = accounts[3]
		const uintpKHyz6G = BigInt("86")
		const uintJU0bXB6 = BigInt("834")
		const uint256cePloaZ = await BACMARSLPTOKENPooluMlR9oP.lastTimeRewardApplicable.call({from: accounts[2]});
		const uint256ydFxiSw = await BACMARSLPTOKENPooluMlR9oP.balanceOf.call(addressgrewNUL, {from: accounts[0]});
		const uint256Fvmqyb4 = await BACMARSLPTOKENPooluMlR9oP.withdraw.call(uintpKHyz6G, {from: accounts[4]});
		const uint256vUCxvHV = await BACMARSLPTOKENPooluMlR9oP.stake.call(uintJU0bXB6, {from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringMViYTwO = "uh5jQOC6xJGMsrZT4Im"
		const stringbD9ofn = "A5heyNM6rT3Jd"
		const uintCXDxrmi = BigInt("195")
		const BACMARSLPTOKENPooloX0ad84 = await BACMARSLPTOKENPool.new(stringMViYTwO, stringbD9ofn, uintCXDxrmi, {from: accounts[4]});
		const uintDk62gp = BigInt("292")
		const uintj0PqYA = BigInt("1548")
		const addresssSPjATu = accounts[0]
		const uint256lDLeW4O = await BACMARSLPTOKENPooloX0ad84.stake.call(uintDk62gp, {from: accounts[5]});
		const uint256Aj6kENA = await BACMARSLPTOKENPooloX0ad84.withdraw.call(uintj0PqYA, {from: accounts[4]});
		const address9LuG4v = await BACMARSLPTOKENPooloX0ad84.updateReward.call(addresssSPjATu, {from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const string5MdPpg = "C"
		const stringAxL21Yq = "NrcXezOqH7bM1CKbm1RrviirxBzr1n"
		const uintOCYJwr = BigInt("196")
		const BACMARSLPTOKENPoolPS8acGl = await BACMARSLPTOKENPool.new(string5MdPpg, stringAxL21Yq, uintOCYJwr, {from: accounts[1]});
		const addressHO7x1Ub = accounts[3]
		const uintDxJX9zl = BigInt("1096")
		const uint256PE2tGf = await BACMARSLPTOKENPoolPS8acGl.earned.call(addressHO7x1Ub, {from: accounts[3]});
		const stringTF0OPjU = await BACMARSLPTOKENPoolPS8acGl.symbol.call({from: accounts[3]});
		const uint256pQOJSN6 = await BACMARSLPTOKENPoolPS8acGl.withdraw.call(uintDxJX9zl, {from: accounts[1]});
		await BACMARSLPTOKENPoolPS8acGl.nonReentrant.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringylVCPeK = "1ln3JdE4eoDrm5sKwQj2dH6MAjxd9CV"
		const stringjaiEiEq = "p4S9iKxSXEoqgET17yhEqkUfUelAbmfXeEkLB9vcIgyy9vKGG5vOtyGHn"
		const uintZU2k2No = BigInt("51")
		const BACMARSLPTOKENPoolcb9yIB = await BACMARSLPTOKENPool.new(stringylVCPeK, stringjaiEiEq, uintZU2k2No, {from: accounts[4]});
		const addressA9U7wjA = accounts[1]
		const uint256t72gDbN = await BACMARSLPTOKENPoolcb9yIB.earned.call(addressA9U7wjA, {from: "0x0000000000000000000000000000000000000001"});
		const uint256PKB1SAw = await BACMARSLPTOKENPoolcb9yIB.totalSupply.call({from: accounts[3]});
		const uint256hfE2XLb = await BACMARSLPTOKENPoolcb9yIB.rewardPerToken.call({from: accounts[0]});
		await BACMARSLPTOKENPoolcb9yIB.onlyRewardsDistribution.call({from: "0x0000000000000000000000000000000000000001"});
		await BACMARSLPTOKENPoolcb9yIB.getReward.call({from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringzEUQy70 = "cZjEnFvv18tz4GJi8MWgcdwgywiRWtphCFKe09SJaGj1ONiMByrc0"
		const stringnl5I6OE = "16QyaNsoyho3LBiVnP76kFT7IbnSnMywWQXypp"
		const uintzVmOv63 = BigInt("39")
		const BACMARSLPTOKENPoolVyLtybL = await BACMARSLPTOKENPool.new(stringzEUQy70, stringnl5I6OE, uintzVmOv63, {from: accounts[2]});
		const uintaaCWCaa = BigInt("196")
		await BACMARSLPTOKENPoolVyLtybL.nonReentrant.call({from: accounts[1]});
		const uint256npVa9a6 = await BACMARSLPTOKENPoolVyLtybL.lastTimeRewardApplicable.call({from: accounts[3]});
		await BACMARSLPTOKENPoolVyLtybL.getReward.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256ulVQeE = await BACMARSLPTOKENPoolVyLtybL.notifyRewardAmount.call(uintaaCWCaa, {from: accounts[1]});
		await BACMARSLPTOKENPoolVyLtybL.onlyRewardsDistribution.call({from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringyHcbbp = "dfp2Y4L2ozeiRwIPh"
		const stringzHgYFcf = "dsL8lBYTA3spw9Qa3NX99JPrp6P1KsuM3AtCvlx40eJv"
		const uintVXWfukn = BigInt("175")
		const BACMARSLPTOKENPoolNWH4djJ = await BACMARSLPTOKENPool.new(stringyHcbbp, stringzHgYFcf, uintVXWfukn, {from: accounts[1]});
		const uint256WTSNtvz = await BACMARSLPTOKENPoolNWH4djJ.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
		const stringrFF23ne = await BACMARSLPTOKENPoolNWH4djJ.symbol.call({from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringbO74Hou = "DhH61auwnCPQpj18u9Q1nJLMHQoZ9IR55kjQSrnLJfG46sgOSC4iHJRFzZgJhwddVh2o3Q1kuyPpdSB"
		const stringwLXjqoE = "F1QDuh0pkLgTbxXUdoPb5hp"
		const uintN3U2Dlm = BigInt("65")
		const BACMARSLPTOKENPoolMNeMv2N = await BACMARSLPTOKENPool.new(stringbO74Hou, stringwLXjqoE, uintN3U2Dlm, {from: accounts[4]});
		const address7dDWvm = accounts[0]
		const addressAiwMYS3 = accounts[3]
		const uint256EigiJJn = await BACMARSLPTOKENPoolMNeMv2N.balanceOf.call(address7dDWvm, {from: accounts[0]});
		const uint256iKvlm5y = await BACMARSLPTOKENPoolMNeMv2N.earned.call(addressAiwMYS3, {from: accounts[5]});
		const uint256dmAvbO2 = await BACMARSLPTOKENPoolMNeMv2N.lastTimeRewardApplicable.call({from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringhAwzuJl = "mJHsIjiLoyjixcTWQBikEvNykzSL2WoJV8l3zews9QsimmzEwBs7m1Uq8wDvqSygffLS"
		const stringU0QwrE2 = "NdfLaAga7nLtf3MueVpgrGhFE2N1a9er4gHckEILaPHReDAyUCEIc82u5iyVcqUpMhVEHeyHuOo4G0JkLuRNAV5eYsjOT"
		const uintVCnHR7Z = BigInt("201")
		const BACMARSLPTOKENPoolOj6ydY = await BACMARSLPTOKENPool.new(stringhAwzuJl, stringU0QwrE2, uintVCnHR7Z, {from: accounts[0]});
		const addressvawa3D7 = accounts[4]
		const addressVhQdCDu = accounts[3]
		const addressRCCfYT = accounts[5]
		const uint256KTAjaFz = await BACMARSLPTOKENPoolOj6ydY.rewardPerToken.call({from: accounts[2]});
		await BACMARSLPTOKENPoolOj6ydY.getReward.call({from: accounts[0]});
		const uint256sakPJZf = await BACMARSLPTOKENPoolOj6ydY.balanceOf.call(addressvawa3D7, {from: accounts[3]});
		const uint256HzOomqP = await BACMARSLPTOKENPoolOj6ydY.balanceOf.call(addressVhQdCDu, {from: "0x0000000000000000000000000000000000000001"});
		const uint256PCpOIC = await BACMARSLPTOKENPoolOj6ydY.balanceOf.call(addressRCCfYT, {from: accounts[1]});
		const uint256rACotZc = await BACMARSLPTOKENPoolOj6ydY.getRewardForDuration.call({from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringeIF2HuI = "lxDmwJWH0Wbqv7r62lSNbyeBKUFLWIgbEPAsCkpm3i"
		const stringPYb8KDL = "H0fLKldEnlP1pssf8jD14XfN4GEw5i1Vw"
		const uinteSZDJFr = BigInt("31")
		const BACMARSLPTOKENPoolHCAkcxV = await BACMARSLPTOKENPool.new(stringeIF2HuI, stringPYb8KDL, uinteSZDJFr, {from: "0x0000000000000000000000000000000000000001"});
		const uinteTZxKbd = BigInt("1853")
		const uintpQDvpV4 = BigInt("1263")
		const byteOcij9O3 = "0x1513091a010704130c0802021a121b031b1f061c02090b1a020d1a040a131e11"
		const byteJmRJ7sU = "0x05001a0c1a19050c000a190614081420171b1d0a0e161415001b021502110714"
		const uintBLTQSJm = BigInt("116")
		const uintqeJbnDk = BigInt("745")
		const uintNtstmwM = BigInt("905")
		const uint256F7ieT6B = await BACMARSLPTOKENPoolHCAkcxV.notifyRewardAmount.call(uinteTZxKbd, {from: accounts[0]});
		await BACMARSLPTOKENPoolHCAkcxV.nonReentrant.call({from: accounts[1]});
		const stringFU8uggz = await BACMARSLPTOKENPoolHCAkcxV.symbol.call({from: accounts[4]});
		const uint256GwQdPEz = await BACMARSLPTOKENPoolHCAkcxV.withdraw.call(uintpQDvpV4, {from: accounts[2]});
		const uint256QEoijUJ = await BACMARSLPTOKENPoolHCAkcxV.stakeWithPermit.call(uintNtstmwM, uintqeJbnDk, uintBLTQSJm, byteJmRJ7sU, byteOcij9O3, {from: accounts[3]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringoeD26k = "jrMXSKJFF2G"
		const stringEOVFHvw = "FygI9RYUbsHjo8ceIBTTYXg8ih6UPdyPKi199MlJpx2uKUK9bshsgVWtMP9cnnVVFTkE8zQQnuPuwhY"
		const uints47H85a = BigInt("46")
		const BACMARSLPTOKENPoolixv8QS = await BACMARSLPTOKENPool.new(stringoeD26k, stringEOVFHvw, uints47H85a, {from: accounts[1]});
		const uintFonMzlw = BigInt("33")
		const uintAOePdSj = BigInt("776")
		const address8thTO0 = accounts[4]
		const byteeEGq2TP = "0x1c200f051c0f08091c0c071c06081b1410191c190c180603010f1c191d12090e"
		const byteztJrQh = "0x1018110201141a0116141e0a1808190d1f1c141f0a0a130b1211141302180701"
		const uintmNukIE9 = BigInt("126")
		const uintvuULZu = BigInt("672")
		const uintP9mEYQg = BigInt("1011")
		const uint256RrQt1Jd = await BACMARSLPTOKENPoolixv8QS.stake.call(uintFonMzlw, {from: accounts[0]});
		const uint256W39Ai9j = await BACMARSLPTOKENPoolixv8QS.rewardPerToken.call({from: accounts[2]});
		const uint256chRQObD = await BACMARSLPTOKENPoolixv8QS.stake.call(uintAOePdSj, {from: accounts[1]});
		const uint256lwvUGZq = await BACMARSLPTOKENPoolixv8QS.earned.call(address8thTO0, {from: "0x0000000000000000000000000000000000000001"});
		const uint256F6cYodu = await BACMARSLPTOKENPoolixv8QS.stakeWithPermit.call(uintP9mEYQg, uintvuULZu, uintmNukIE9, byteztJrQh, byteeEGq2TP, {from: accounts[4]});
		await BACMARSLPTOKENPoolixv8QS.onlyRewardsDistribution.call({from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringi9Wdu1r = "QNSYtKdE4ZfwzLp6RqfTzJ"
		const stringqAjoMOx = "DcNGCermhT9GCvct5OQtxAde8vTUGHBtVaWGI3feFeu2pvS9AlHdr1kX1H8cmQgyUr3OCipvlAyOHiUQeXig0B3t1"
		const uintf4JkOUp = BigInt("186")
		const BACMARSLPTOKENPoolA53iQJb = await BACMARSLPTOKENPool.new(stringi9Wdu1r, stringqAjoMOx, uintf4JkOUp, {from: "0x0000000000000000000000000000000000000001"});
		const addressobyoJYz = accounts[3]
		const uint256dK8WCEX = await BACMARSLPTOKENPoolA53iQJb.earned.call(addressobyoJYz, {from: accounts[1]});
		const uint256txWUbYf = await BACMARSLPTOKENPoolA53iQJb.getRewardForDuration.call({from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringFa4bAel = "juyh6CZHKASuqgc2wO1onPmOLqIJLXXjLfHv0qhpOl5WbrPKpfDlfVHUT8aE1z"
		const stringb6pMNso = "2ci3hRY3lsBo3qp45X87CcL8A4GGj"
		const uintxwYozLA = BigInt("44")
		const BACMARSLPTOKENPoolHx4g8q6 = await BACMARSLPTOKENPool.new(stringFa4bAel, stringb6pMNso, uintxwYozLA, {from: accounts[4]});
		const uint256igFz7LI = await BACMARSLPTOKENPoolHx4g8q6.totalSupply.call({from: accounts[3]});
		const stringfrym5zn = await BACMARSLPTOKENPoolHx4g8q6.symbol.call({from: accounts[5]});
		const stringbuASawL = await BACMARSLPTOKENPoolHx4g8q6.name.call({from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressV0iqmUS = accounts[3]
		const addressfuRvMlm = accounts[2]
		const addressUGZVvlf = accounts[2]
		const BACMARSLPTOKENPoolqa9Ru96 = await BACMARSLPTOKENPool.new(addressV0iqmUS, addressfuRvMlm, addressUGZVvlf, {from: "0x0000000000000000000000000000000000000001"});
		const uintc2izun3 = BigInt("22")
		await BACMARSLPTOKENPoolqa9Ru96.getReward.call({from: accounts[1]});
		const uint256JdLUTg = await BACMARSLPTOKENPoolqa9Ru96.notifyRewardAmount.call(uintc2izun3, {from: "0x0000000000000000000000000000000000000001"});
		const uint2561eirc6 = await BACMARSLPTOKENPoolqa9Ru96.getRewardForDuration.call({from: accounts[3]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringFIW76f = "YfDjBpn6pqakXQAKBqStVa2J1hWD9hzu4G9hIJaODCRzVNwOFmYJluzQpvFZRR6Po7w84r6wNeK88SXVb14Gz9hxRRUy"
		const stringq6BvU9 = "ODuaFTxh6vDlKmvjjxm"
		const uintkKsYRsV = BigInt("223")
		const BACMARSLPTOKENPoolIDYkwww = await BACMARSLPTOKENPool.new(stringFIW76f, stringq6BvU9, uintkKsYRsV, {from: "0x0000000000000000000000000000000000000001"});
		const addressTHEMTCa = accounts[3]
		await BACMARSLPTOKENPoolIDYkwww.onlyRewardsDistribution.call({from: accounts[2]});
		await BACMARSLPTOKENPoolIDYkwww.onlyRewardsDistribution.call({from: accounts[1]});
		const uint256r6NA2Is = await BACMARSLPTOKENPoolIDYkwww.balanceOf.call(addressTHEMTCa, {from: accounts[5]});
		const uint8vnkzWY = await BACMARSLPTOKENPoolIDYkwww.decimals.call({from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringMLA1loF = "WpbAGM237SjXGG"
		const stringHwcXm7Y = "8tqSxEsQD8eB"
		const uintstzsOjb = BigInt("83")
		const BACMARSLPTOKENPoollf4GwhR = await BACMARSLPTOKENPool.new(stringMLA1loF, stringHwcXm7Y, uintstzsOjb, {from: accounts[5]});
		const uintBSqZGSc = BigInt("101")
		const addressi8znrkt = accounts[0]
		const byteVgc9yeB = "0x1807150d16180e1a11060c06100d16130a07041e16071e070c1b180002091a0b"
		const byteVp5Cyhn = "0x140d0e150b171719081d010a02080a1d16041d1c110e0c0c08071e0f0a041d19"
		const uintABdOUki = BigInt("180")
		const uintcx6Umml = BigInt("1428")
		const uintU1nH7w = BigInt("761")
		const addressFKxnrKA = accounts[2]
		const uint256tdfkCV = await BACMARSLPTOKENPoollf4GwhR.getRewardForDuration.call({from: accounts[3]});
		const uint256E5oMXxx = await BACMARSLPTOKENPoollf4GwhR.notifyRewardAmount.call(uintBSqZGSc, {from: accounts[1]});
		const uint256LLEsXMq = await BACMARSLPTOKENPoollf4GwhR.lastTimeRewardApplicable.call({from: accounts[3]});
		const uint256Uifwqn = await BACMARSLPTOKENPoollf4GwhR.balanceOf.call(addressi8znrkt, {from: accounts[5]});
		const uint256pexeFtp = await BACMARSLPTOKENPoollf4GwhR.stakeWithPermit.call(uintU1nH7w, uintcx6Umml, uintABdOUki, byteVp5Cyhn, byteVgc9yeB, {from: accounts[4]});
		const uint256nJDKopN = await BACMARSLPTOKENPoollf4GwhR.balanceOf.call(addressFKxnrKA, {from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringdLMWcoS = "y7K92dQteYLE60DrffdJ"
		const stringJg2jrfi = "FQgkk7OWWci3Od3NNNnnENSKR4IzheODmvzoWxX1Qqvs6ABv3OWLLr1So"
		const uintlyNdvY = BigInt("131")
		const BACMARSLPTOKENPoolZvoled9 = await BACMARSLPTOKENPool.new(stringdLMWcoS, stringJg2jrfi, uintlyNdvY, {from: accounts[2]});
		const addressuhfPZ8b = accounts[0]
		const uint256hGPHsO5 = await BACMARSLPTOKENPoolZvoled9.rewardPerToken.call({from: accounts[0]});
		const uint256howZI2B = await BACMARSLPTOKENPoolZvoled9.earned.call(addressuhfPZ8b, {from: accounts[0]});
		const uint256sgW6HGI = await BACMARSLPTOKENPoolZvoled9.totalSupply.call({from: accounts[3]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringzMRsLbg = "EGsJ4PlBFTKoA8rTrMgaJmKUDSNWSNHR47oi8uydztXZs5ulNTyPaG5dbOtzX7FjOduIBLyZ"
		const stringaplxzbQ = "cEsiShhFPyVXr9q9bCPsb1FUM7TSqtFcufTVfS34COpSNVGHdY9AMkkBk5Kute7VL5CqgmzIX9dT"
		const uintltF0GyC = BigInt("138")
		const BACMARSLPTOKENPoolwD3S32I = await BACMARSLPTOKENPool.new(stringzMRsLbg, stringaplxzbQ, uintltF0GyC, {from: accounts[3]});
		const uint256Xd0Ru0 = await BACMARSLPTOKENPoolwD3S32I.totalSupply.call({from: accounts[0]});
		const uint8po8ap2a = await BACMARSLPTOKENPoolwD3S32I.decimals.call({from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringioao8Wp = "V2jV3R4Vd6U8fr0Ob6WgK71T"
		const stringPugA3s = "gWcvcSSm7TVKkhZOX7LtFABcRSlmWcT3vetcipuOPV4rmdKgULItvFVThsXq3mxucWu1bSOJzjlubZvzOMTLmkgozx"
		const uintOgnCV3V = BigInt("98")
		const BACMARSLPTOKENPooljLpk23j = await BACMARSLPTOKENPool.new(stringioao8Wp, stringPugA3s, uintOgnCV3V, {from: accounts[3]});
		const addressCcZo8r = accounts[1]
		const uinteY1KzpD = BigInt("1423")
		const uint8ax9Ekq3 = await BACMARSLPTOKENPooljLpk23j.decimals.call({from: accounts[0]});
		const addressfykQSC8 = await BACMARSLPTOKENPooljLpk23j.updateReward.call(addressCcZo8r, {from: accounts[2]});
		await BACMARSLPTOKENPooljLpk23j.onlyRewardsDistribution.call({from: accounts[3]});
		const uint256OgjaDLa = await BACMARSLPTOKENPooljLpk23j.stake.call(uinteY1KzpD, {from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringVCpHor = "AB29WJwyvrQwFCUJV9r5UaaXVfu6m69Q"
		const stringu16A5A4 = "MQo4xTZtTBRRoyHnn4nRLmq87EW3JuEWnx"
		const uinttt2768i = BigInt("36")
		const BACMARSLPTOKENPoolOgTtqOb = await BACMARSLPTOKENPool.new(stringVCpHor, stringu16A5A4, uinttt2768i, {from: accounts[5]});
		const uintH1tk7v = BigInt("535")
		const addressskoblD = accounts[2]
		const uint256TT4zSCL = await BACMARSLPTOKENPoolOgTtqOb.getRewardForDuration.call({from: accounts[2]});
		const uint8lfEoQNI = await BACMARSLPTOKENPoolOgTtqOb.decimals.call({from: accounts[2]});
		const uint256lei7CsU = await BACMARSLPTOKENPoolOgTtqOb.notifyRewardAmount.call(uintH1tk7v, {from: accounts[1]});
		const uint256Z0utZYW = await BACMARSLPTOKENPoolOgTtqOb.balanceOf.call(addressskoblD, {from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringSo7p1nv = "7IydrVkEjB2W54HxlYG2vxk6WgOlLxH4X9sZmkLCZFLNRw9bnjHCIpIwervqSKluVNo44m9VwxBLbFwtu2q0Nng6aEjhTh4W"
		const stringfPi70Nu = "65jrfAenXDB8LF"
		const uintD99Gmbt = BigInt("137")
		const BACMARSLPTOKENPoolc0knt75 = await BACMARSLPTOKENPool.new(stringSo7p1nv, stringfPi70Nu, uintD99Gmbt, {from: accounts[2]});
		const addressHn6NRzl = accounts[3]
		await BACMARSLPTOKENPoolc0knt75.nonReentrant.call({from: accounts[4]});
		const uint256cUfN8cK = await BACMARSLPTOKENPoolc0knt75.balanceOf.call(addressHn6NRzl, {from: accounts[1]});
		const uint8CYpqq8u = await BACMARSLPTOKENPoolc0knt75.decimals.call({from: accounts[2]});
		await BACMARSLPTOKENPoolc0knt75.nonReentrant.call({from: accounts[0]});
		const uint256yqapwvc = await BACMARSLPTOKENPoolc0knt75.lastTimeRewardApplicable.call({from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringJ6Mt8fW = "FsDT3X3A3UmTsXPnlEMpEwQWyw9kgkRpmBwSoCEEeaWyoHL8pfu8"
		const stringAGXDpWV = "1TxU3Ry49DatMwx3NLjvcjzzVQuFbZomOxl1DN1KcKrNmF0T6a6veiwGtmconmXOY5xnz4q7c9dEo7FGOteAT8F59tT"
		const uintiTb5uQU = BigInt("28")
		const BACMARSLPTOKENPoolfvsjZoa = await BACMARSLPTOKENPool.new(stringJ6Mt8fW, stringAGXDpWV, uintiTb5uQU, {from: accounts[3]});
		const addressLxsFUEw = accounts[1]
		const uint256tfSZZ26 = await BACMARSLPTOKENPoolfvsjZoa.lastTimeRewardApplicable.call({from: "0x0000000000000000000000000000000000000001"});
		const addressRupTrM = await BACMARSLPTOKENPoolfvsjZoa.updateReward.call(addressLxsFUEw, {from: accounts[4]});
		const stringoD82mRv = await BACMARSLPTOKENPoolfvsjZoa.symbol.call({from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringkPn98KS = "nJAHbXOaiEreWO8LjFiHKOr7d5RrESHkG2Ste24xW7h9KtcMDkHxM3FMs"
		const stringmIqK0yy = "QdiJCrVbxQOs6sxxV3zkYStEW3snj3QUb"
		const uintl7h8v9P = BigInt("206")
		const BACMARSLPTOKENPoolvFWaZrc = await BACMARSLPTOKENPool.new(stringkPn98KS, stringmIqK0yy, uintl7h8v9P, {from: accounts[3]});
		const byteRpvro6X = "0x0b071a181107141c0b0a1e09161a05171715010d051d1e1b1c1d1319011b1319"
		const byteZxBYRfw = "0x1417160b0a031514201b0c1b041402180e0207070111000c0b12161700150b1f"
		const uintR3vfBww = BigInt("190")
		const uintajpGuma = BigInt("1927")
		const uint7Ec0hu = BigInt("1009")
		const addressmIvAua = accounts[1]
		const addressTY9X3KL = accounts[4]
		const uintTDn4K3e = BigInt("193")
		const uint256F4fPsgE = await BACMARSLPTOKENPoolvFWaZrc.stakeWithPermit.call(uint7Ec0hu, uintajpGuma, uintR3vfBww, byteZxBYRfw, byteRpvro6X, {from: accounts[0]});
		const uint256exkCt5p = await BACMARSLPTOKENPoolvFWaZrc.balanceOf.call(addressmIvAua, {from: accounts[2]});
		const uint256YxclnAU = await BACMARSLPTOKENPoolvFWaZrc.balanceOf.call(addressTY9X3KL, {from: accounts[0]});
		const uint256pUx7FNG = await BACMARSLPTOKENPoolvFWaZrc.rewardPerToken.call({from: accounts[0]});
		const uint256mwnEw8f = await BACMARSLPTOKENPoolvFWaZrc.stake.call(uintTDn4K3e, {from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringuKZohKE = "cfaEtfwYHnzl5Nqvm7CTUeHY5qpWRqVaqQxs6OBzf8HKKrU68UbWUjIOKReyMTnXEyoEP3abBkW95C9ro5TCbvNsCmhy8r13"
		const stringSg53Doy = "XrNVpSg3YiLfFKac1TPcPJFQuLMkN6RdMmDNgWGucXv55iHQEcnU1eRcsvdJKH5stq8lIRbIKwh419te2Ymc"
		const uintyQFSDpq = BigInt("172")
		const BACMARSLPTOKENPoolMBph3f2 = await BACMARSLPTOKENPool.new(stringuKZohKE, stringSg53Doy, uintyQFSDpq, {from: accounts[3]});
		const uintq8hnn81 = BigInt("33")
		const uintLmcVmpy = BigInt("579")
		const uint256JzbCfAi = await BACMARSLPTOKENPoolMBph3f2.lastTimeRewardApplicable.call({from: accounts[4]});
		await BACMARSLPTOKENPoolMBph3f2.onlyRewardsDistribution.call({from: accounts[0]});
		const uint256kOkGCUs = await BACMARSLPTOKENPoolMBph3f2.stake.call(uintq8hnn81, {from: accounts[0]});
		const uint256jsvK8G4 = await BACMARSLPTOKENPoolMBph3f2.withdraw.call(uintLmcVmpy, {from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringuCBPWKg = "aZPiKIVMMdU3rvxVIG5LWk9BzwI5ZfTodSFBIMJpH7phmpU7RKvM9kizp1SW"
		const stringj5XJjkh = "9b0GMIsW7W7TpL7"
		const uintEvC7wBE = BigInt("133")
		const BACMARSLPTOKENPoolSHVAlig = await BACMARSLPTOKENPool.new(stringuCBPWKg, stringj5XJjkh, uintEvC7wBE, {from: accounts[4]});
		const uintmElAyeJ = BigInt("1404")
		const uintXrwwfl = BigInt("1575")
		const uintspnHJAm = BigInt("1740")
		const uint256F57Haqd = await BACMARSLPTOKENPoolSHVAlig.getRewardForDuration.call({from: accounts[4]});
		const uint256FNq2DhW = await BACMARSLPTOKENPoolSHVAlig.withdraw.call(uintmElAyeJ, {from: "0x0000000000000000000000000000000000000001"});
		await BACMARSLPTOKENPoolSHVAlig.getReward.call({from: accounts[1]});
		const uint256QB5h60v = await BACMARSLPTOKENPoolSHVAlig.withdraw.call(uintXrwwfl, {from: accounts[0]});
		const uint256gqMnB4q = await BACMARSLPTOKENPoolSHVAlig.getRewardForDuration.call({from: accounts[5]});
		const uint256Hf8ssce = await BACMARSLPTOKENPoolSHVAlig.notifyRewardAmount.call(uintspnHJAm, {from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringx59wkhO = "p6MNQhhLywV8dV9slYkUP1SxeUNKI1XQGCYVdYsNCjrAlInkGE4D48URMUwmqYqQmiiIByJGOG9YF"
		const stringyGAR6o = "9b8VFEqNZLI4yXeKRKChnIktYBblpCOdI2x91IAQ7Yf6PlM2CifrrPERqnwUgz2zXz"
		const uintJWkHlo = BigInt("144")
		const BACMARSLPTOKENPoolUF5DJLe = await BACMARSLPTOKENPool.new(stringx59wkhO, stringyGAR6o, uintJWkHlo, {from: accounts[3]});
		const addressEsHgi3q = accounts[3]
		const stringQIifFK2 = await BACMARSLPTOKENPoolUF5DJLe.symbol.call({from: accounts[2]});
		await BACMARSLPTOKENPoolUF5DJLe.getReward.call({from: accounts[3]});
		const uint8pYLkRFb = await BACMARSLPTOKENPoolUF5DJLe.decimals.call({from: accounts[3]});
		const uint256HQ1djZU = await BACMARSLPTOKENPoolUF5DJLe.earned.call(addressEsHgi3q, {from: accounts[2]});
		const uint256Meryszg = await BACMARSLPTOKENPoolUF5DJLe.lastTimeRewardApplicable.call({from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringdqmaBiq = "KNjT92yeEaeYyGuuDu6R07Mb1Ap"
		const stringYqUnZDE = "kEMS"
		const uintdu3MXwq = BigInt("112")
		const BACMARSLPTOKENPoolWlz9ZYf = await BACMARSLPTOKENPool.new(stringdqmaBiq, stringYqUnZDE, uintdu3MXwq, {from: accounts[2]});
		const uintBWV2tIP = BigInt("826")
		const addressTlNUrbD = accounts[3]
		const uint256ZTeyaKB = await BACMARSLPTOKENPoolWlz9ZYf.notifyRewardAmount.call(uintBWV2tIP, {from: accounts[1]});
		await BACMARSLPTOKENPoolWlz9ZYf.getReward.call({from: "0x0000000000000000000000000000000000000001"});
		await BACMARSLPTOKENPoolWlz9ZYf.onlyRewardsDistribution.call({from: accounts[4]});
		const uint256JDdRO8Q = await BACMARSLPTOKENPoolWlz9ZYf.balanceOf.call(addressTlNUrbD, {from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringAPQZ9PZ = "3VICieuJjwHlXxkOItq7XbNlwWdeTfAJW6QK67G7O28pNS7clJomjlSPGq"
		const stringAzb3aqm = "L2ufVJFKqfvdJxDn8yqrRWGShJjG9kEgdq2an9OSAh02O8ETNWhdWZwuAL7T13UIoWWZnxwVUMc2D3l6cnwF7HmbSnlgZG"
		const uintbCxcB9G = BigInt("5")
		const BACMARSLPTOKENPoolovtl8Ro = await BACMARSLPTOKENPool.new(stringAPQZ9PZ, stringAzb3aqm, uintbCxcB9G, {from: accounts[2]});
		const byteQ6yatuV = "0x1e0d0c06061b0b1a1c03150909120d0508140c121e141b200e17021b051b0b1e"
		const byteFJNravw = "0x170a1a1205091e031704150b1613021915130c1d1117051a08031d0c09050c10"
		const uintorMur4 = BigInt("218")
		const uinteFf9jNS = BigInt("1316")
		const uintjDTxv9c = BigInt("2046")
		const uint256r8gPKN = await BACMARSLPTOKENPoolovtl8Ro.stakeWithPermit.call(uintjDTxv9c, uinteFf9jNS, uintorMur4, byteFJNravw, byteQ6yatuV, {from: accounts[3]});
		await BACMARSLPTOKENPoolovtl8Ro.exit.call({from: accounts[3]});
		const uint256OEmOZxz = await BACMARSLPTOKENPoolovtl8Ro.lastTimeRewardApplicable.call({from: accounts[4]});
		const stringgPhKoP1 = await BACMARSLPTOKENPoolovtl8Ro.symbol.call({from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringy0p63cL = "98wBwp1VCOp3q2oISt5sc95g5LX3tswFljIrWXj0hTtgrvI"
		const stringKqG1HyJ = "YVoLIWzz3o98fBnsvR87PF8XpOJ4I4zBIcJakM2xI"
		const uinte9f1fWp = BigInt("133")
		const BACMARSLPTOKENPoolJJl1tJ = await BACMARSLPTOKENPool.new(stringy0p63cL, stringKqG1HyJ, uinte9f1fWp, {from: accounts[3]});
		const uintqG8HCI = BigInt("938")
		const uintLCwfIpf = BigInt("1724")
		const uint256Ix7tbxd = await BACMARSLPTOKENPoolJJl1tJ.withdraw.call(uintqG8HCI, {from: accounts[0]});
		const stringkoMAO37 = await BACMARSLPTOKENPoolJJl1tJ.symbol.call({from: accounts[4]});
		const uint256AxqzzWu = await BACMARSLPTOKENPoolJJl1tJ.rewardPerToken.call({from: accounts[1]});
		const uint256Bo50IB = await BACMARSLPTOKENPoolJJl1tJ.stake.call(uintLCwfIpf, {from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringOuWWYl = "A79hpDlX5jd77mhbB8moW0QFDBjcj2vAtFwR5BGnIq"
		const stringSabRtpq = "FT97AirfMOWP55NO9RornRdRhhi2GTeUK5U1X9JcZuTROiUoGV2tY0A9ojsW8ilU2a4VEDtpDPfs3NfsBg1G0zpqihUbt"
		const uintUR4udc5 = BigInt("128")
		const BACMARSLPTOKENPoolThGw2Z = await BACMARSLPTOKENPool.new(stringOuWWYl, stringSabRtpq, uintUR4udc5, {from: accounts[5]});
		const uintoYMMjw = BigInt("1479")
		const stringhqmdaxp = await BACMARSLPTOKENPoolThGw2Z.symbol.call({from: accounts[1]});
		await BACMARSLPTOKENPoolThGw2Z.getReward.call({from: accounts[4]});
		const uint256exFr0C3 = await BACMARSLPTOKENPoolThGw2Z.notifyRewardAmount.call(uintoYMMjw, {from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringb5O64VD = "VWqzWHhAaGgzbo0GHYJ2MbvAsxUgWNyk"
		const stringGiZfREG = "9C6"
		const uintz4KMnvj = BigInt("141")
		const BACMARSLPTOKENPoolu3LFG4g = await BACMARSLPTOKENPool.new(stringb5O64VD, stringGiZfREG, uintz4KMnvj, {from: "0x0000000000000000000000000000000000000001"});
		const uintsRDBTyG = BigInt("1169")
		const uint256avLrSDz = await BACMARSLPTOKENPoolu3LFG4g.notifyRewardAmount.call(uintsRDBTyG, {from: accounts[3]});
		await BACMARSLPTOKENPoolu3LFG4g.getReward.call({from: accounts[4]});
		await BACMARSLPTOKENPoolu3LFG4g.onlyRewardsDistribution.call({from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringsnvatIO = "SByXkoSr6pefawHlOrosqll7x5CKvOUXl9z5FU20oVboNHYt7R5whGmUyiXtITSQcKe4qLKW01vcby"
		const stringTAqpVHE = "2f5jFQ6dc5anMsFf"
		const uinta4Dz76L = BigInt("113")
		const BACMARSLPTOKENPoolt4YbEMs = await BACMARSLPTOKENPool.new(stringsnvatIO, stringTAqpVHE, uinta4Dz76L, {from: accounts[2]});
		const string0dxk5G = await BACMARSLPTOKENPoolt4YbEMs.symbol.call({from: accounts[0]});
		await BACMARSLPTOKENPoolt4YbEMs.getReward.call({from: accounts[0]});
		await BACMARSLPTOKENPoolt4YbEMs.nonReentrant.call({from: accounts[2]});
		const uint8s5fkaNw = await BACMARSLPTOKENPoolt4YbEMs.decimals.call({from: accounts[0]});
		const uint256WhQzoG0 = await BACMARSLPTOKENPoolt4YbEMs.rewardPerToken.call({from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringUZ950E = "3bcfqg3PIFoPUb8wrneZHkldvjb9zHsbzx5UR309l7AEW6atTX9xitMu7iJdDJD59rdRREyhH"
		const stringqnJSDVY = "CHByryMdaNJ0P4uiBDZpVoTPnXvX4fKv4fgLKbAzQ2Y6ZQhat1JCP"
		const uintgf21Ard = BigInt("248")
		const BACMARSLPTOKENPoolpFypTMI = await BACMARSLPTOKENPool.new(stringUZ950E, stringqnJSDVY, uintgf21Ard, {from: accounts[2]});
		const addressWUsOuhy = accounts[1]
		const uintOWFtavy = BigInt("7")
		const uint256dHyNfJ8 = await BACMARSLPTOKENPoolpFypTMI.rewardPerToken.call({from: accounts[0]});
		const addressAXzbDn1 = await BACMARSLPTOKENPoolpFypTMI.updateReward.call(addressWUsOuhy, {from: accounts[3]});
		const uint256MdlicaO = await BACMARSLPTOKENPoolpFypTMI.stake.call(uintOWFtavy, {from: accounts[5]});
	});
})