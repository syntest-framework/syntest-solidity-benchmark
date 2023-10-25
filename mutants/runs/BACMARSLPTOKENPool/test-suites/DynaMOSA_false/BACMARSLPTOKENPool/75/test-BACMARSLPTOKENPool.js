const BACMARSLPTOKENPool = artifacts.require("BACMARSLPTOKENPool");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('BACMARSLPTOKENPool', (accounts) => {
	it('test for BACMARSLPTOKENPool', async () => {
		const addressa4Ha3y = accounts[3]
		const addressvuhrrc9 = accounts[4]
		const addresstbYgVW = accounts[0]
		const BACMARSLPTOKENPoolgm5zEwc = await BACMARSLPTOKENPool.new(addressa4Ha3y, addressvuhrrc9, addresstbYgVW, {from: accounts[2]});
		const addressOZJMUBF = accounts[1]
		const addressJA0qNV5 = accounts[2]
		const uint8YCIwTpk = await BACMARSLPTOKENPoolgm5zEwc.decimals.call({from: accounts[3]});
		const uint256lfh78Qe = await BACMARSLPTOKENPoolgm5zEwc.earned.call(addressOZJMUBF, {from: accounts[0]});
		const uint256vfGDas0 = await BACMARSLPTOKENPoolgm5zEwc.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256Nn4jvqt = await BACMARSLPTOKENPoolgm5zEwc.earned.call(addressJA0qNV5, {from: accounts[2]});
		const uint256kL8fIFV = await BACMARSLPTOKENPoolgm5zEwc.getRewardForDuration.call({from: accounts[2]});

		await expect(BACMARSLPTOKENPoolgm5zEwc.decimals.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressVv6BwDJ = accounts[0]
		const addressz7mFG1S = accounts[0]
		const addressB1bdZBX = accounts[4]
		const BACMARSLPTOKENPoolVWM3FC6 = await BACMARSLPTOKENPool.new(addressVv6BwDJ, addressz7mFG1S, addressB1bdZBX, {from: accounts[0]});
		const uintFgxa4yR = BigInt("58")
		const addresssAmYeCZ = accounts[1]
		const addressB11C6zl = accounts[1]
		const uint256iQOKTFK = await BACMARSLPTOKENPoolVWM3FC6.notifyRewardAmount.call(uintFgxa4yR, {from: accounts[5]});
		const uint256bRdcNW3 = await BACMARSLPTOKENPoolVWM3FC6.getRewardForDuration.call({from: accounts[4]});
		const uint256R0w09ws = await BACMARSLPTOKENPoolVWM3FC6.earned.call(addresssAmYeCZ, {from: accounts[5]});
		const stringGsVnwxE = await BACMARSLPTOKENPoolVWM3FC6.symbol.call({from: "0x0000000000000000000000000000000000000001"});
		await BACMARSLPTOKENPoolVWM3FC6.nonReentrant.call({from: accounts[1]});
		const uint256Kiy72zT = await BACMARSLPTOKENPoolVWM3FC6.earned.call(addressB11C6zl, {from: accounts[3]});

		await expect(BACMARSLPTOKENPoolVWM3FC6.notifyRewardAmount.call(uintFgxa4yR, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringSKiuHHv = "y60O2wr373FL72AO2bAXq9xC5ttBC8i1oA2wu1Uxpglv"
		const stringr74gek6 = "50LyqV53xJLgoBXBoNY4pc4JC9r6odYht7LMiOu32bJq8x54IbfPWz53kjmwqnhMYiRDctusu8p9e9wFOHhTiSqZDK"
		const uintIIVHEP0 = BigInt("91")
		const BACMARSLPTOKENPoolLv1z11o = await BACMARSLPTOKENPool.new(stringSKiuHHv, stringr74gek6, uintIIVHEP0, {from: accounts[2]});
		const uintVWNoG46 = BigInt("957")
		const addresssP3nxOU = accounts[2]
		const uint256osWAouw = await BACMARSLPTOKENPoolLv1z11o.notifyRewardAmount.call(uintVWNoG46, {from: accounts[5]});
		const uint256ssxPZKT = await BACMARSLPTOKENPoolLv1z11o.balanceOf.call(addresssP3nxOU, {from: accounts[3]});
		await BACMARSLPTOKENPoolLv1z11o.getReward.call({from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressNmGiWI4 = accounts[1]
		const addressDo3Eclu = accounts[3]
		const addressRHPzx0z = accounts[2]
		const BACMARSLPTOKENPoolm2JySf = await BACMARSLPTOKENPool.new(addressNmGiWI4, addressDo3Eclu, addressRHPzx0z, {from: accounts[4]});
		const uintXLWU3WE = BigInt("814")
		const uint256dngkwg = await BACMARSLPTOKENPoolm2JySf.stake.call(uintXLWU3WE, {from: accounts[5]});
		const uint256OYSHg8L = await BACMARSLPTOKENPoolm2JySf.getRewardForDuration.call({from: accounts[4]});
		await BACMARSLPTOKENPoolm2JySf.exit.call({from: accounts[1]});

		await expect(BACMARSLPTOKENPoolm2JySf.stake.call(uintXLWU3WE, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const string6uYZFT = "IzYwBqleT2f5yuEuA26q6N5UsNkhU1pEXDqR8jvmNn6O0dc5Yh39tqK7v"
		const stringW3udzvM = "qvwiVWLfB13Od4k2xmMcyNjs6BJ1ewoK9BNP3Jx"
		const uintRNr8Pdn = BigInt("108")
		const BACMARSLPTOKENPoolM6ko6mp = await BACMARSLPTOKENPool.new(string6uYZFT, stringW3udzvM, uintRNr8Pdn, {from: accounts[3]});
		const addressQyyjzS = accounts[4]
		const addressVmmNWub = accounts[4]
		const uint256TNDLqlg = await BACMARSLPTOKENPoolM6ko6mp.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
		const addressUsoHwr = await BACMARSLPTOKENPoolM6ko6mp.updateReward.call(addressQyyjzS, {from: accounts[0]});
		await BACMARSLPTOKENPoolM6ko6mp.exit.call({from: accounts[4]});
		const uint256FoeO4kM = await BACMARSLPTOKENPoolM6ko6mp.balanceOf.call(addressVmmNWub, {from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressCAUkKUG = "0x0000000000000000000000000000000000000001"
		const addressEsuE8K3 = accounts[3]
		const addressUEkGip = accounts[0]
		const BACMARSLPTOKENPooluCWIJEr = await BACMARSLPTOKENPool.new(addressCAUkKUG, addressEsuE8K3, addressUEkGip, {from: accounts[3]});
		const addressB1DHvkl = accounts[0]
		const uintr3f0Gaj = BigInt("1336")
		const addresswdQo3Dx = accounts[3]
		const uintENl7AqJ = BigInt("1389")
		const uint256ZcPbAyr = await BACMARSLPTOKENPooluCWIJEr.balanceOf.call(addressB1DHvkl, {from: accounts[3]});
		const uint256Ar87Q1R = await BACMARSLPTOKENPooluCWIJEr.stake.call(uintr3f0Gaj, {from: accounts[5]});
		const addressVT5RB2i = await BACMARSLPTOKENPooluCWIJEr.updateReward.call(addresswdQo3Dx, {from: accounts[0]});
		const uint8UGzShWk = await BACMARSLPTOKENPooluCWIJEr.decimals.call({from: accounts[1]});
		const uint256DrP1mO = await BACMARSLPTOKENPooluCWIJEr.withdraw.call(uintENl7AqJ, {from: accounts[0]});

		assert.equal(uint256ZcPbAyr, BigInt("0"))
		await expect(BACMARSLPTOKENPooluCWIJEr.stake.call(uintr3f0Gaj, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringa6dPstm = "1"
		const stringA3aGqWf = "rxy5SVtDEgLRN95tXEcV6v"
		const uintuQoak9a = BigInt("3")
		const BACMARSLPTOKENPoolKHKOm4 = await BACMARSLPTOKENPool.new(stringa6dPstm, stringA3aGqWf, uintuQoak9a, {from: accounts[2]});
		const uintg3dwyG = BigInt("177")
		const uintQ2DTCO9 = BigInt("1141")
		const uint256veLiMps = await BACMARSLPTOKENPoolKHKOm4.stake.call(uintg3dwyG, {from: accounts[3]});
		await BACMARSLPTOKENPoolKHKOm4.getReward.call({from: accounts[3]});
		const uint256fTQOMHM = await BACMARSLPTOKENPoolKHKOm4.stake.call(uintQ2DTCO9, {from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressgtUvC2j = accounts[1]
		const addressa1ylMzh = accounts[1]
		const addressmzRzADI = accounts[0]
		const BACMARSLPTOKENPoolxvgr7Yh = await BACMARSLPTOKENPool.new(addressgtUvC2j, addressa1ylMzh, addressmzRzADI, {from: accounts[0]});
		const uintrgphOEF = BigInt("1720")
		const uintwx9TMiU = BigInt("483")
		await BACMARSLPTOKENPoolxvgr7Yh.exit.call({from: accounts[2]});
		const uint256UZuSGiD = await BACMARSLPTOKENPoolxvgr7Yh.notifyRewardAmount.call(uintrgphOEF, {from: accounts[3]});
		const uint256zJ2Hztj = await BACMARSLPTOKENPoolxvgr7Yh.notifyRewardAmount.call(uintwx9TMiU, {from: accounts[5]});

		await expect(BACMARSLPTOKENPoolxvgr7Yh.exit.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const string2ldL4Z = "xRBYXSI8W8yN2da97JjFYlnOqSMvIWGMWXtXsm7GS3M5b9ameHI"
		const stringSWzyl7r = "nI1BSjYTDkWfr12XjVKeiI8ysIXshAQglMPb9cFMtJZClY8Q67ye0Za8tJxhF5Rrg2B7pyBllm3zM6gUpJKoc"
		const uintwmXatxb = BigInt("205")
		const BACMARSLPTOKENPoolUXDss5m = await BACMARSLPTOKENPool.new(string2ldL4Z, stringSWzyl7r, uintwmXatxb, {from: accounts[2]});
		await BACMARSLPTOKENPoolUXDss5m.onlyRewardsDistribution.call({from: accounts[0]});
		await BACMARSLPTOKENPoolUXDss5m.exit.call({from: accounts[3]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringOTeUIp9 = "eRf5fAqcGRTvm13eKGjfi"
		const stringOm9Hlqa = "RyuK7Oe2ILbsFogSIWyPi6MQjZM7N3iyyEhd6fSt6sR49CcKo923lqKXUBgBUxsYlrqxQ71waiSJrRwywd5vje2XtiyJjQk"
		const uintU5Kh4IE = BigInt("68")
		const BACMARSLPTOKENPoolTZ47bct = await BACMARSLPTOKENPool.new(stringOTeUIp9, stringOm9Hlqa, uintU5Kh4IE, {from: accounts[1]});
		const addressLKaqI5N = accounts[1]
		await BACMARSLPTOKENPoolTZ47bct.nonReentrant.call({from: accounts[2]});
		await BACMARSLPTOKENPoolTZ47bct.onlyRewardsDistribution.call({from: accounts[1]});
		const uint256IPzJHky = await BACMARSLPTOKENPoolTZ47bct.balanceOf.call(addressLKaqI5N, {from: accounts[3]});
		const stringPE3xhcf = await BACMARSLPTOKENPoolTZ47bct.symbol.call({from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringLLlB3nR = "1FxjkzjmPwXPWaoWLMrjmVfPs"
		const stringKQLlgU4 = "U11VJz2c2CQMCsYouolPDo"
		const uintSb6YlLE = BigInt("13")
		const BACMARSLPTOKENPoolVsfOUVG = await BACMARSLPTOKENPool.new(stringLLlB3nR, stringKQLlgU4, uintSb6YlLE, {from: accounts[4]});
		const addressw5ox5A = accounts[4]
		const bytegk4OXxE = "0x0a0b1119071a12151e060f130d0c191c151913160c0c191d1e160d0f160e161d"
		const byteJaXImkF = "0x04161b190b1c02131210011d011e0d071107060b0d0a1f1607111d0b02001701"
		const uintqNaF33s = BigInt("215")
		const uintOqXZzW8 = BigInt("1584")
		const uintyXbwP1T = BigInt("1727")
		const uint256S3CBvV = await BACMARSLPTOKENPoolVsfOUVG.balanceOf.call(addressw5ox5A, {from: accounts[0]});
		const uint256OkMMPY = await BACMARSLPTOKENPoolVsfOUVG.stakeWithPermit.call(uintyXbwP1T, uintOqXZzW8, uintqNaF33s, byteJaXImkF, bytegk4OXxE, {from: accounts[0]});
		const uint8HwjicQD = await BACMARSLPTOKENPoolVsfOUVG.decimals.call({from: accounts[3]});
		const uint256Atv7tbK = await BACMARSLPTOKENPoolVsfOUVG.rewardPerToken.call({from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addresscyYbG4t = accounts[1]
		const addressOJRBQoq = accounts[3]
		const addressJJAPaKG = accounts[2]
		const BACMARSLPTOKENPoolm2JySf = await BACMARSLPTOKENPool.new(addresscyYbG4t, addressOJRBQoq, addressJJAPaKG, {from: accounts[4]});
		const uintwANgtXS = BigInt("817")
		const addressqJDMCF = accounts[2]
		await BACMARSLPTOKENPoolm2JySf.getReward.call({from: accounts[1]});
		const uint256dngkwg = await BACMARSLPTOKENPoolm2JySf.stake.call(uintwANgtXS, {from: accounts[5]});
		const uint256JP6HM93 = await BACMARSLPTOKENPoolm2JySf.earned.call(addressqJDMCF, {from: accounts[4]});
		await BACMARSLPTOKENPoolm2JySf.exit.call({from: accounts[1]});

		await expect(BACMARSLPTOKENPoolm2JySf.getReward.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringhJdwKDP = "CMsf0tX8CAn2RjsepNlkA6DtJSayWYhMnUriMNmqutLRVjhixdZ72H0usf5irCbCgJ0WirdyvgLT2mbj5UbtWr5DoqW2"
		const stringswBB1C = "zw1KxIn1JDppNRpidNJsWaVe4QdpWIgGRFeofINGJT8KYkzfiAWHOJBwEt8k4ww6NNTkyR"
		const uintCCBBDEA = BigInt("22")
		const BACMARSLPTOKENPools2PHl8p = await BACMARSLPTOKENPool.new(stringhJdwKDP, stringswBB1C, uintCCBBDEA, {from: accounts[1]});
		const uintTTtnUwB = BigInt("203")
		const uint256lx70Msd = await BACMARSLPTOKENPools2PHl8p.stake.call(uintTTtnUwB, {from: accounts[2]});
		const uint256I2XmuCF = await BACMARSLPTOKENPools2PHl8p.getRewardForDuration.call({from: "0x0000000000000000000000000000000000000001"});
		await BACMARSLPTOKENPools2PHl8p.onlyRewardsDistribution.call({from: accounts[2]});
		await BACMARSLPTOKENPools2PHl8p.exit.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringE8q8Seg = "Q9J7WFy5MvG2x4FZRR1rnyaMoEQ3onaV0uhvpEKjH66H6cnlcTiVO3CJdI7xufOFoJrgla4G7lEI"
		const stringvilQiCD = "6FJurJoHd6rage2aMR3RxWf71JCu9DTM"
		const uintIKEyWcr = BigInt("185")
		const BACMARSLPTOKENPoolozoBhVv = await BACMARSLPTOKENPool.new(stringE8q8Seg, stringvilQiCD, uintIKEyWcr, {from: accounts[3]});
		const addressVH20kgL = accounts[4]
		const uintKMDEETK = BigInt("839")
		const uintIloSJ8Y = BigInt("1338")
		const uint256zLA6JLm = await BACMARSLPTOKENPoolozoBhVv.earned.call(addressVH20kgL, {from: accounts[3]});
		const uint256yXGK72 = await BACMARSLPTOKENPoolozoBhVv.rewardPerToken.call({from: accounts[0]});
		const uint256PdcXvSk = await BACMARSLPTOKENPoolozoBhVv.stake.call(uintKMDEETK, {from: accounts[5]});
		const stringeQzmhCC = await BACMARSLPTOKENPoolozoBhVv.symbol.call({from: accounts[3]});
		await BACMARSLPTOKENPoolozoBhVv.onlyRewardsDistribution.call({from: accounts[1]});
		const uint256AgZqF7D = await BACMARSLPTOKENPoolozoBhVv.withdraw.call(uintIloSJ8Y, {from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressHRhIkws = accounts[1]
		const addressxvHlP0L = accounts[3]
		const addressNdz3RBJ = accounts[2]
		const BACMARSLPTOKENPoolm2JySf = await BACMARSLPTOKENPool.new(addressHRhIkws, addressxvHlP0L, addressNdz3RBJ, {from: accounts[4]});
		const byteokZrejb = "0x1a0f0e171a15081b1f1f0908151a01040e070d151f15191708131014101b1e1a"
		const bytef01DxY2 = "0x1109160e19160212041c18060a140c0c1c051c132018180d1c040e0d09040202"
		const uintfcuNVgL = BigInt("49")
		const uintJYjwi3b = BigInt("611")
		const uintHQjgcCn = BigInt("526")
		const uintTTJY2e = BigInt("817")
		const addressmF4Z34L = accounts[2]
		const uint256dQUJrIh = await BACMARSLPTOKENPoolm2JySf.stakeWithPermit.call(uintHQjgcCn, uintJYjwi3b, uintfcuNVgL, bytef01DxY2, byteokZrejb, {from: accounts[0]});
		await BACMARSLPTOKENPoolm2JySf.getReward.call({from: accounts[1]});
		const uint256AlbOW7R = await BACMARSLPTOKENPoolm2JySf.totalSupply.call({from: accounts[4]});
		await BACMARSLPTOKENPoolm2JySf.getReward.call({from: accounts[1]});
		const uint256dngkwg = await BACMARSLPTOKENPoolm2JySf.stake.call(uintTTJY2e, {from: accounts[5]});
		const uint256JP6HM93 = await BACMARSLPTOKENPoolm2JySf.earned.call(addressmF4Z34L, {from: accounts[4]});
		await BACMARSLPTOKENPoolm2JySf.exit.call({from: accounts[1]});

		await expect(BACMARSLPTOKENPoolm2JySf.stakeWithPermit.call(uintHQjgcCn, uintJYjwi3b, uintfcuNVgL, bytef01DxY2, byteokZrejb, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringFNMjiBy = "WL1mLU6rS5f9H4lNVzWmG6QTA3lYQcVyQmAqmgQ1X58IUYM198ovaVnJb"
		const stringaggmX3 = "L1XZPHPRMN4Xl8rFr9lEKII8CeOpRw4x6mLMcq8C3F5QaEFTq8UG3vaMwDIjmNU0jRxDPSYu8mlYmhCHi90UuHvS85M2Qd"
		const uintNhfDmME = BigInt("92")
		const BACMARSLPTOKENPooloRnDfpY = await BACMARSLPTOKENPool.new(stringFNMjiBy, stringaggmX3, uintNhfDmME, {from: accounts[0]});
		await BACMARSLPTOKENPooloRnDfpY.getReward.call({from: accounts[3]});
		const uint256OgLQTCk = await BACMARSLPTOKENPooloRnDfpY.totalSupply.call({from: accounts[4]});
		const stringC6p9YCr = await BACMARSLPTOKENPooloRnDfpY.name.call({from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addresso2bPAWt = accounts[1]
		const addressoI8FkwK = accounts[3]
		const addressaT6sNb5 = accounts[2]
		const BACMARSLPTOKENPoolm2JySf = await BACMARSLPTOKENPool.new(addresso2bPAWt, addressoI8FkwK, addressaT6sNb5, {from: accounts[4]});
		const uinti5jEYdX = BigInt("14")
		const uintMxjrAhr = BigInt("814")
		await BACMARSLPTOKENPoolm2JySf.getReward.call({from: accounts[1]});
		const uint2564KJvAo = await BACMARSLPTOKENPoolm2JySf.withdraw.call(uinti5jEYdX, {from: accounts[4]});
		const uint256eymrBUA = await BACMARSLPTOKENPoolm2JySf.rewardPerToken.call({from: accounts[0]});
		const uint256dngkwg = await BACMARSLPTOKENPoolm2JySf.stake.call(uintMxjrAhr, {from: accounts[5]});
		await BACMARSLPTOKENPoolm2JySf.exit.call({from: accounts[1]});

		await expect(BACMARSLPTOKENPoolm2JySf.getReward.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressnyDz1Uy = accounts[1]
		const addressrd1F7Od = accounts[3]
		const addressA8Mht4Q = accounts[2]
		const BACMARSLPTOKENPoolm2JySf = await BACMARSLPTOKENPool.new(addressnyDz1Uy, addressrd1F7Od, addressA8Mht4Q, {from: accounts[4]});
		const uintUwlMxsS = BigInt("814")
		const uint256mWcGevL = await BACMARSLPTOKENPoolm2JySf.totalSupply.call({from: accounts[1]});
		await BACMARSLPTOKENPoolm2JySf.getReward.call({from: accounts[1]});
		const uint256eymrBUA = await BACMARSLPTOKENPoolm2JySf.rewardPerToken.call({from: accounts[0]});
		const uint256dngkwg = await BACMARSLPTOKENPoolm2JySf.stake.call(uintUwlMxsS, {from: accounts[5]});
		await BACMARSLPTOKENPoolm2JySf.exit.call({from: accounts[1]});

		assert.equal(uint256mWcGevL, BigInt("0"))
		await expect(BACMARSLPTOKENPoolm2JySf.getReward.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringR0qeMux = "YUjS99oP1gJb8Jp6POWiL7Ur7ep2Jg9cIQalxB1OOWeM9qodjju63qTWQooTIUbnD6C6sbDcvT"
		const stringzBuk3V = "XKa9J1BgtOBad0bfbaXgIqU1yBniFSOM85Xl"
		const uintZmw6i1X = BigInt("113")
		const BACMARSLPTOKENPoolQ4XyIzj = await BACMARSLPTOKENPool.new(stringR0qeMux, stringzBuk3V, uintZmw6i1X, {from: "0x0000000000000000000000000000000000000001"});
		const uint256yWhAppt = await BACMARSLPTOKENPoolQ4XyIzj.lastTimeRewardApplicable.call({from: accounts[3]});
		const uint8CdlE2hS = await BACMARSLPTOKENPoolQ4XyIzj.decimals.call({from: accounts[4]});
		await BACMARSLPTOKENPoolQ4XyIzj.nonReentrant.call({from: accounts[2]});
		await BACMARSLPTOKENPoolQ4XyIzj.exit.call({from: accounts[3]});
		await BACMARSLPTOKENPoolQ4XyIzj.getReward.call({from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringWSBvDvs = "JBGmnMQvBPCQ62JF8ytSpsewpCcCC944Ax1zm5JW1WijIgVf4x9MlhB1dpQtMyfaggIbeGRMzLo9Ed"
		const stringSQaChdv = "hHqoeMdBbWTcl6wmE1mSMfIRbp4S1uhwcanMlkGTAaGMgsoDGY4eu14HKIAV1tjE2comFES4OSAprBRtnFKKvbe3"
		const uintEcFww2g = BigInt("135")
		const BACMARSLPTOKENPoolzIOzzbv = await BACMARSLPTOKENPool.new(stringWSBvDvs, stringSQaChdv, uintEcFww2g, {from: accounts[0]});
		const uintinFJ1u8 = BigInt("868")
		await BACMARSLPTOKENPoolzIOzzbv.nonReentrant.call({from: accounts[4]});
		await BACMARSLPTOKENPoolzIOzzbv.nonReentrant.call({from: accounts[0]});
		const uint256BV9ykE = await BACMARSLPTOKENPoolzIOzzbv.stake.call(uintinFJ1u8, {from: accounts[5]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressDis1vMq = accounts[1]
		const addressmhZtwvI = accounts[3]
		const addresstuf1nv = accounts[2]
		const BACMARSLPTOKENPoolm2JySf = await BACMARSLPTOKENPool.new(addressDis1vMq, addressmhZtwvI, addresstuf1nv, {from: accounts[4]});
		const uintISkYcY = BigInt("814")
		await BACMARSLPTOKENPoolm2JySf.getReward.call({from: accounts[1]});
		const uint256ED8XQiQ = await BACMARSLPTOKENPoolm2JySf.rewardPerToken.call({from: accounts[4]});
		const uint256nhtO2nr = await BACMARSLPTOKENPoolm2JySf.getRewardForDuration.call({from: accounts[1]});
		const uint256dngkwg = await BACMARSLPTOKENPoolm2JySf.stake.call(uintISkYcY, {from: accounts[5]});
		await BACMARSLPTOKENPoolm2JySf.exit.call({from: accounts[1]});

		await expect(BACMARSLPTOKENPoolm2JySf.getReward.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringMCLQWpH = "HgmqX9eEIosy9JDU6XxUGAzG8XB4iRc90QoSDJfvc7a1GKOD5sXs9vnLIAEutiSstekz2s2iy4is"
		const stringoShSocK = "6SifoOSG5esNPWRr9SVMdlXXWPXhcwIoPniQU1Wjo"
		const uintIh8KQP = BigInt("61")
		const BACMARSLPTOKENPoolKCmrTlT = await BACMARSLPTOKENPool.new(stringMCLQWpH, stringoShSocK, uintIh8KQP, {from: accounts[4]});
		const uintVrIXLvm = BigInt("955")
		const byteSZZFuc = "0x080c080514110b1c12180f141d201004030d110b091b071e12191d0c010b0207"
		const bytejlXMZlk = "0x15030419090204051e161b05040e1c001d1c050005020315100d1e0c1d010308"
		const uintQJVNRR9 = BigInt("68")
		const uintCG8DtuT = BigInt("1556")
		const uintkYafAcF = BigInt("1840")
		const uint256B3TjHqX = await BACMARSLPTOKENPoolKCmrTlT.lastTimeRewardApplicable.call({from: accounts[0]});
		const uint256R92mzsA = await BACMARSLPTOKENPoolKCmrTlT.notifyRewardAmount.call(uintVrIXLvm, {from: accounts[1]});
		const uint256QYTr9Yl = await BACMARSLPTOKENPoolKCmrTlT.rewardPerToken.call({from: accounts[2]});
		const uint256ECvCj1 = await BACMARSLPTOKENPoolKCmrTlT.stakeWithPermit.call(uintkYafAcF, uintCG8DtuT, uintQJVNRR9, bytejlXMZlk, byteSZZFuc, {from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringXzd8hbF = "qrjNRuVfXQ7mgpMfRDHdm5Wo4sRnry2p2iLHC1SXOb4c226XaS6z6qkIf4PEFCjyL1vc34glI0Tp961DpNhcHI6W4BIy"
		const stringHXvm4v0 = "SBxnjb9oJIDjUKqHq5AoTxbz5RavMLtHwbMhOvqFlU97jyf19Fg6icXcezYo37yL2JuNig06ugFEd0jvrEHa9owwNw7pBqbYW"
		const uintgolW1gU = BigInt("61")
		const BACMARSLPTOKENPoolzznAF3w = await BACMARSLPTOKENPool.new(stringXzd8hbF, stringHXvm4v0, uintgolW1gU, {from: accounts[3]});
		const uint8vkOr6 = BigInt("194")
		const uintFckmbSB = BigInt("677")
		const uint256xIjG52W = await BACMARSLPTOKENPoolzznAF3w.notifyRewardAmount.call(uint8vkOr6, {from: accounts[2]});
		const uint2563NpMtK = await BACMARSLPTOKENPoolzznAF3w.stake.call(uintFckmbSB, {from: accounts[3]});
		await BACMARSLPTOKENPoolzznAF3w.exit.call({from: accounts[3]});
		const stringLFix84o = await BACMARSLPTOKENPoolzznAF3w.symbol.call({from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringV8P1xE9 = "t47IndtCazDSsD5vAUJJzFxFqwryqEOjcWTwxImOyO9lFRuAba"
		const stringPG9teXb = "6RT"
		const uintXj2r4Ah = BigInt("17")
		const BACMARSLPTOKENPool418o25 = await BACMARSLPTOKENPool.new(stringV8P1xE9, stringPG9teXb, uintXj2r4Ah, {from: accounts[4]});
		const byteE5kxTLi = "0x140e0d061d0a031709150e1f160e180f16150b0304031b05011c10040412020c"
		const byteJ26tTrX = "0x131e1a041719021f031d001e0509020a0c190d0d1a061d0f0f180e07140a1219"
		const uinthFWKJ6K = BigInt("70")
		const uintSQuGeFn = BigInt("1640")
		const uintOJdA7Jz = BigInt("1294")
		const bytezfKBSL = "0x07170d0c011c0d1d0e031b1616051020141f1d1b0f1f180c0c1e061a070e1813"
		const bytejgPpXpg = "0x1e050c190b060517041e091e100a0d020f121d0a1815181e0702101e040c0c04"
		const uintcGPCgTB = BigInt("230")
		const uintMnrAmK = BigInt("1360")
		const uintCaOYNVX = BigInt("1322")
		const uint256dpN9Ukl = await BACMARSLPTOKENPool418o25.getRewardForDuration.call({from: accounts[3]});
		await BACMARSLPTOKENPool418o25.onlyRewardsDistribution.call({from: accounts[4]});
		const uint256xpu40U0 = await BACMARSLPTOKENPool418o25.stakeWithPermit.call(uintOJdA7Jz, uintSQuGeFn, uinthFWKJ6K, byteJ26tTrX, byteE5kxTLi, {from: accounts[2]});
		const uint256XB1Hdk2 = await BACMARSLPTOKENPool418o25.stakeWithPermit.call(uintCaOYNVX, uintMnrAmK, uintcGPCgTB, bytejgPpXpg, bytezfKBSL, {from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressGEmzlq4 = accounts[1]
		const addressuIQzntO = accounts[3]
		const addresszILRrf3 = accounts[2]
		const BACMARSLPTOKENPoolm2JySf = await BACMARSLPTOKENPool.new(addressGEmzlq4, addressuIQzntO, addresszILRrf3, {from: accounts[4]});
		const uint072YIH = BigInt("819")
		const uintYSQAWst = BigInt("843")
		const uint256EnAvGb3 = await BACMARSLPTOKENPoolm2JySf.notifyRewardAmount.call(uint072YIH, {from: accounts[1]});
		const uint256dngkwg = await BACMARSLPTOKENPoolm2JySf.stake.call(uintYSQAWst, {from: accounts[5]});
		const uint256mx2ze3Y = await BACMARSLPTOKENPoolm2JySf.totalSupply.call({from: accounts[0]});

		await expect(BACMARSLPTOKENPoolm2JySf.notifyRewardAmount.call(uint072YIH, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringeyQ9vB = "nOciwwwdaT"
		const stringV90URNY = "NDGfKK7Xq373qywcwm0c2rrObdybwuLTFU5oM5kXSeFYxOz1WckyvxAKX"
		const uintrkqeHzG = BigInt("150")
		const BACMARSLPTOKENPoolUllQnPA = await BACMARSLPTOKENPool.new(stringeyQ9vB, stringV90URNY, uintrkqeHzG, {from: accounts[3]});
		const uintoVPpW0H = BigInt("966")
		const addressUcGLaoC = accounts[5]
		const uint256Gj4ez9I = await BACMARSLPTOKENPoolUllQnPA.stake.call(uintoVPpW0H, {from: accounts[3]});
		const uint256X4bzlj = await BACMARSLPTOKENPoolUllQnPA.lastTimeRewardApplicable.call({from: accounts[4]});
		const uint256ByHgmYJ = await BACMARSLPTOKENPoolUllQnPA.earned.call(addressUcGLaoC, {from: accounts[5]});
		await BACMARSLPTOKENPoolUllQnPA.nonReentrant.call({from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringjhv69mc = "GgvIvK4XX39tjq3zf6bYBA2Kdco3vGg"
		const stringZePU6Ah = "o1APQCTwQWRu2wGMaj4XMCrq0p7B2BN5JQqadxxJOiRLSc9hJBW495s5xpvWuvMfeUE"
		const uintMwec7Z = BigInt("146")
		const BACMARSLPTOKENPoolPKrNFnv = await BACMARSLPTOKENPool.new(stringjhv69mc, stringZePU6Ah, uintMwec7Z, {from: accounts[0]});
		const uintroFcNT9 = BigInt("1050")
		const uintv1XAz2X = BigInt("1382")
		const uint256YQc6DB = await BACMARSLPTOKENPoolPKrNFnv.notifyRewardAmount.call(uintroFcNT9, {from: accounts[4]});
		const uint256fwbKBQX = await BACMARSLPTOKENPoolPKrNFnv.getRewardForDuration.call({from: accounts[3]});
		const stringOCWZqkG = await BACMARSLPTOKENPoolPKrNFnv.name.call({from: accounts[3]});
		const uint256xjBfyjm = await BACMARSLPTOKENPoolPKrNFnv.totalSupply.call({from: accounts[1]});
		const uint256wkjN6jQ = await BACMARSLPTOKENPoolPKrNFnv.stake.call(uintv1XAz2X, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringvf396wI = "YWJX3WnGivf6nwwfrotshLWHhP3PfD9ai9cdjYC5uxr87PSfrE3z3vaLJxI3aCnO6hvEHxuCeeDat"
		const stringWtnMbTw = "XAnNxJ7hVOah6T9emIMksW"
		const uintHbOqrzJ = BigInt("231")
		const BACMARSLPTOKENPoolRCSoK5F = await BACMARSLPTOKENPool.new(stringvf396wI, stringWtnMbTw, uintHbOqrzJ, {from: accounts[3]});
		const uint256FzDA1Hj = await BACMARSLPTOKENPoolRCSoK5F.rewardPerToken.call({from: accounts[0]});
		const uint256PkCygs5 = await BACMARSLPTOKENPoolRCSoK5F.totalSupply.call({from: accounts[3]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringRU0XP0 = "FvTByIVgk4zwgRdmucmerujP"
		const stringmGw3KD = "N8ryEyfolFo8J5ulqMFrxkOdjCbU7PsLgVfetX3uBHXCfYnnGKFh4dGt"
		const uintBu5jbA4 = BigInt("125")
		const BACMARSLPTOKENPoolGeIVm2w = await BACMARSLPTOKENPool.new(stringRU0XP0, stringmGw3KD, uintBu5jbA4, {from: accounts[4]});
		const addresssB1J110 = accounts[0]
		const uint5dTyWS = BigInt("1091")
		const uint256Cuo9Ywo = await BACMARSLPTOKENPoolGeIVm2w.balanceOf.call(addresssB1J110, {from: accounts[5]});
		const uint256KSUdKC = await BACMARSLPTOKENPoolGeIVm2w.notifyRewardAmount.call(uint5dTyWS, {from: "0x0000000000000000000000000000000000000001"});
		const uint256UWhxtXa = await BACMARSLPTOKENPoolGeIVm2w.totalSupply.call({from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringz9IV9Ox = "X63rTrqj"
		const stringiURLLi8 = "laKyWRa4tn31sBPfxDtzvBptPvx"
		const uintnV90ozZ = BigInt("112")
		const BACMARSLPTOKENPoolF5QkM20 = await BACMARSLPTOKENPool.new(stringz9IV9Ox, stringiURLLi8, uintnV90ozZ, {from: accounts[4]});
		const addresszPlCl4L = accounts[5]
		const uint256FDpEHMG = await BACMARSLPTOKENPoolF5QkM20.getRewardForDuration.call({from: accounts[5]});
		const uint256M6mD4Xz = await BACMARSLPTOKENPoolF5QkM20.lastTimeRewardApplicable.call({from: accounts[0]});
		const uint256IEbKlX = await BACMARSLPTOKENPoolF5QkM20.balanceOf.call(addresszPlCl4L, {from: accounts[3]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringyHCQMli = "VBjSDNIlEzn"
		const stringrJl6Oxe = "gz5dj8Mi4qfy91KL3bC5g6UDXoIRcaXQzXTfL"
		const uintKpX5lKR = BigInt("16")
		const BACMARSLPTOKENPooljLlBBk = await BACMARSLPTOKENPool.new(stringyHCQMli, stringrJl6Oxe, uintKpX5lKR, {from: accounts[4]});
		const uintlt1bGJ4 = BigInt("843")
		const uintg1D38qk = BigInt("158")
		const uint256FZpYEpl = await BACMARSLPTOKENPooljLlBBk.stake.call(uintlt1bGJ4, {from: accounts[2]});
		const uint256FPCrjXn = await BACMARSLPTOKENPooljLlBBk.stake.call(uintg1D38qk, {from: accounts[3]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringJbi6vTU = "j7OVoVzBtXD6Tziy5ZcmV"
		const stringa0vMwQ2 = "QAlY9LR2XoUDXm8isgQ6Fety8bQjXCutkIHxYGBJasG"
		const uintsWJrEVq = BigInt("55")
		const BACMARSLPTOKENPoolVIpqiK3 = await BACMARSLPTOKENPool.new(stringJbi6vTU, stringa0vMwQ2, uintsWJrEVq, {from: accounts[3]});
		const addressrVrrabu = accounts[1]
		const addressj1zcm1U = accounts[0]
		await BACMARSLPTOKENPoolVIpqiK3.exit.call({from: accounts[4]});
		const uint256Ei7QZAA = await BACMARSLPTOKENPoolVIpqiK3.balanceOf.call(addressrVrrabu, {from: accounts[2]});
		const uint256qLwRrqP = await BACMARSLPTOKENPoolVIpqiK3.balanceOf.call(addressj1zcm1U, {from: accounts[1]});
		await BACMARSLPTOKENPoolVIpqiK3.exit.call({from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringjs0ADE1 = "q62sGkVNAziVQ3kfUfW3jrRk3DH0wOMrwk9X5OYtSnH"
		const stringxArUcp = "kptlfWpsMRToMTioxY4Dvo3EJ5pzBT13EUipgOJFfFQB41yMAt13YYCwHVXtgv5L5CZiwRpimhCmvXl2J51slDEdJ5BLlEqDH"
		const uint4Int6x = BigInt("239")
		const BACMARSLPTOKENPoolwUC3LU7 = await BACMARSLPTOKENPool.new(stringjs0ADE1, stringxArUcp, uint4Int6x, {from: accounts[1]});
		const uint256sXUDDYd = await BACMARSLPTOKENPoolwUC3LU7.rewardPerToken.call({from: accounts[2]});
		const uint8MzPiVcS = await BACMARSLPTOKENPoolwUC3LU7.decimals.call({from: accounts[5]});
		await BACMARSLPTOKENPoolwUC3LU7.exit.call({from: accounts[4]});
		const uint256wFa47c = await BACMARSLPTOKENPoolwUC3LU7.rewardPerToken.call({from: accounts[1]});
		const uint8QTCuo6P = await BACMARSLPTOKENPoolwUC3LU7.decimals.call({from: accounts[3]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringWgv3ePW = "hdzugcwGnQT4QLpY8nWmJDA8JSEzdQ08AvZOiz32ISVWCf1L4SNeN6lsA1HK4"
		const stringoVMoqXU = "7DWVljqXux2HAKeRKG4jNhS0aUd1yjAo2N2SUIkOmzVkWL"
		const uintWNKwjC = BigInt("54")
		const BACMARSLPTOKENPoolE7nsCw = await BACMARSLPTOKENPool.new(stringWgv3ePW, stringoVMoqXU, uintWNKwjC, {from: "0x0000000000000000000000000000000000000001"});
		const byteaYONTp = "0x161718100c1e200e1c0d051413140316191d0a000b01180a0e071502180b100d"
		const bytemkdJuST = "0x08061e16010e1619021f1f0d0e15200c1813071e191119021a08050716091b0f"
		const uinteJq7D2y = BigInt("165")
		const uint1kxJ1d = BigInt("1839")
		const uinttNgFrCN = BigInt("188")
		const uintJzMpUZB = BigInt("845")
		const uint256JUAMQhJ = await BACMARSLPTOKENPoolE7nsCw.stakeWithPermit.call(uinttNgFrCN, uint1kxJ1d, uinteJq7D2y, bytemkdJuST, byteaYONTp, {from: accounts[4]});
		const uint256VrWUxk8 = await BACMARSLPTOKENPoolE7nsCw.stake.call(uintJzMpUZB, {from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringNWM8kIU = "wMn9PTfGbgSbbrLQfqjxIXYRQ6BnAeV7118h0bCvLwlJjAQW"
		const stringp1JVhx = "jHY3Y3i7IpDDu7ckUL"
		const uintQUKRHfD = BigInt("65")
		const BACMARSLPTOKENPoolNowfOZB = await BACMARSLPTOKENPool.new(stringNWM8kIU, stringp1JVhx, uintQUKRHfD, {from: "0x0000000000000000000000000000000000000001"});
		const stringAMDN83m = await BACMARSLPTOKENPoolNowfOZB.symbol.call({from: accounts[2]});
		await BACMARSLPTOKENPoolNowfOZB.getReward.call({from: accounts[2]});
		const uint256gJKNMVF = await BACMARSLPTOKENPoolNowfOZB.rewardPerToken.call({from: accounts[0]});
		await BACMARSLPTOKENPoolNowfOZB.onlyRewardsDistribution.call({from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringTlybdw = "rfCrPcC9yAUwzqgDM3ZMeJ"
		const stringQ1X4vFN = "XOOVX9nzTr3rVlEANS9RJ1sNwQ6AeXn251F4N4sTZqmhTEcQN2FiTY4fO4cAUZhOgUJhPaUrr3oEyOjaQ6qOXgvs4"
		const uintw5rq0z = BigInt("69")
		const BACMARSLPTOKENPooliUUCWqd = await BACMARSLPTOKENPool.new(stringTlybdw, stringQ1X4vFN, uintw5rq0z, {from: accounts[3]});
		const bytereVd3oS = "0x0d1a0120170c1d0c060408130c0b1e12120216121801111f190d0a0d0a111f0d"
		const bytejH54sGR = "0x0e1600161a0605151408100c01131f180914151f130d0a0d201515161c071e06"
		const uintFqbPqbt = BigInt("241")
		const uintTJ3sp6 = BigInt("761")
		const uintby8aXQ4 = BigInt("1701")
		const uintCyznhwQ = BigInt("1152")
		const uintskZjWa = BigInt("1380")
		await BACMARSLPTOKENPooliUUCWqd.exit.call({from: accounts[4]});
		const uint256kqnDrnC = await BACMARSLPTOKENPooliUUCWqd.stakeWithPermit.call(uintby8aXQ4, uintTJ3sp6, uintFqbPqbt, bytejH54sGR, bytereVd3oS, {from: accounts[2]});
		const uint256NTBnnZ = await BACMARSLPTOKENPooliUUCWqd.stake.call(uintCyznhwQ, {from: accounts[2]});
		const uint256maV12z = await BACMARSLPTOKENPooliUUCWqd.stake.call(uintskZjWa, {from: accounts[2]});
		const stringOdmfJAk = await BACMARSLPTOKENPooliUUCWqd.symbol.call({from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringsf2fQ9l = "gtL38UMLr4VCnTRtCXksmwjgFwGTp6KXIhgHYMuK4XTy9JvehlMOltZpqdUBuncTWs56IuaXasHyzOYsd"
		const stringQf4D1PN = "IFjVqiB7m6uEYUm3M79IZplaItRSVEPh9gOJxf4YnDLBMuR8fRkg7it3lB7LGYu2H5NItQ47bUU0diMzTj"
		const uintF8vcgPu = BigInt("37")
		const BACMARSLPTOKENPoolHJP7t1W = await BACMARSLPTOKENPool.new(stringsf2fQ9l, stringQf4D1PN, uintF8vcgPu, {from: accounts[0]});
		const addressDcGNDzm = accounts[2]
		const uint8ckmaNQq = await BACMARSLPTOKENPoolHJP7t1W.decimals.call({from: accounts[2]});
		await BACMARSLPTOKENPoolHJP7t1W.nonReentrant.call({from: accounts[4]});
		const addressD6sWwAs = await BACMARSLPTOKENPoolHJP7t1W.updateReward.call(addressDcGNDzm, {from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringSMO3znG = "YkqMi6woMFSdOJjRnKi6MYxkajRWP8ahs3BnV2eiAree5VKXlhk"
		const stringOhSSsrv = "iU7U3Xktl5knriBR25zmz5y3PSdl8TSIBhQKiKPehuW8zxbETK1AYguIiAhie"
		const uintcwEydt7 = BigInt("231")
		const BACMARSLPTOKENPool8t5nBf = await BACMARSLPTOKENPool.new(stringSMO3znG, stringOhSSsrv, uintcwEydt7, {from: accounts[3]});
		const addressZxNY1z = accounts[0]
		const byteRdo7DU8 = "0x150412130d1803020a1b11090209121015101f10121f09191c0d0d1a10170216"
		const byteBqHwXKU = "0x15160611021412141f1f1c1109091c16130b070d09091a09161203161c160e04"
		const uintM0htLVo = BigInt("201")
		const uintiKmqp3B = BigInt("1154")
		const uintq4GtSqz = BigInt("556")
		const uintNNq6rN = BigInt("1944")
		await BACMARSLPTOKENPool8t5nBf.exit.call({from: accounts[0]});
		const addressfyIzMxr = await BACMARSLPTOKENPool8t5nBf.updateReward.call(addressZxNY1z, {from: accounts[3]});
		const uint256flkjKx = await BACMARSLPTOKENPool8t5nBf.stakeWithPermit.call(uintq4GtSqz, uintiKmqp3B, uintM0htLVo, byteBqHwXKU, byteRdo7DU8, {from: accounts[2]});
		await BACMARSLPTOKENPool8t5nBf.getReward.call({from: accounts[2]});
		const uint256q131no = await BACMARSLPTOKENPool8t5nBf.notifyRewardAmount.call(uintNNq6rN, {from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringDPPQszQ = "AXimjQw97uF5ANlprcO"
		const stringwGyfj7 = "x4TjWv"
		const uintVZziZ3 = BigInt("213")
		const BACMARSLPTOKENPooljQ2bPOU = await BACMARSLPTOKENPool.new(stringDPPQszQ, stringwGyfj7, uintVZziZ3, {from: accounts[2]});
		const uint256ZoIER3K = await BACMARSLPTOKENPooljQ2bPOU.lastTimeRewardApplicable.call({from: accounts[3]});
		await BACMARSLPTOKENPooljQ2bPOU.onlyRewardsDistribution.call({from: accounts[1]});
		const stringeokTzVb = await BACMARSLPTOKENPooljQ2bPOU.name.call({from: accounts[0]});
		const uint256Z2ZtHQR = await BACMARSLPTOKENPooljQ2bPOU.lastTimeRewardApplicable.call({from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringqdbWjr1 = "QkY63ViJWMeE55uBuFmE1NrxnWMSAhjPAg"
		const stringUbY4iki = "QS9PRB2QvIx2"
		const uintmPckptC = BigInt("146")
		const BACMARSLPTOKENPoolAy5uaI = await BACMARSLPTOKENPool.new(stringqdbWjr1, stringUbY4iki, uintmPckptC, {from: accounts[0]});
		const addressewIYnqB = accounts[5]
		const addressXLwXvj2 = accounts[4]
		const uintvgCHJdd = BigInt("1511")
		const uint256vfGXTfh = await BACMARSLPTOKENPoolAy5uaI.getRewardForDuration.call({from: accounts[0]});
		const uint256Ir9YX4 = await BACMARSLPTOKENPoolAy5uaI.earned.call(addressewIYnqB, {from: accounts[1]});
		const uint256A2d50CK = await BACMARSLPTOKENPoolAy5uaI.earned.call(addressXLwXvj2, {from: accounts[4]});
		const uint256a76tjO6 = await BACMARSLPTOKENPoolAy5uaI.stake.call(uintvgCHJdd, {from: accounts[1]});
		const stringEI2BzZN = await BACMARSLPTOKENPoolAy5uaI.name.call({from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringYXOYmW6 = "Ms2JqJpP9vx0HHVcvk2P7sUV65zkhhgjMALBXjVNzvDj4uLIsemmzsaYStyBPaa8l2Wh71mm7tmmVw3Aup2RhqXQeCBiPru"
		const stringNVSXdhU = "jdrUwrrJC5p2yOXUk9o1pNNPClUlSlVLyPqTBjQjYilNPcAcbquUGWpRfsurVpBeE9NoFtiJQRj12guEN1x"
		const uintxTE7muu = BigInt("243")
		const BACMARSLPTOKENPoolOQCnftK = await BACMARSLPTOKENPool.new(stringYXOYmW6, stringNVSXdhU, uintxTE7muu, {from: accounts[3]});
		const uint8VDeZ29d = await BACMARSLPTOKENPoolOQCnftK.decimals.call({from: accounts[3]});
		const stringlJBtwa = await BACMARSLPTOKENPoolOQCnftK.name.call({from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringMu9mBtZ = "tV5edlIPjOqJlGzh7ilO51MK16apdMZnTSilCtQzaM"
		const stringA4ztGnR = "ESpLHQSjn6DMZNt142tUDkScz5uNiSx8YfS7uCnTKoRfmQm8pyZfDGaN6jjJI6p75CX4dm4tIUXJ9JwG4"
		const uintO6t4MUn = BigInt("46")
		const BACMARSLPTOKENPoolyFTwNiR = await BACMARSLPTOKENPool.new(stringMu9mBtZ, stringA4ztGnR, uintO6t4MUn, {from: accounts[0]});
		const uintbO1x1Xt = BigInt("502")
		const uint256XhwSbyc = await BACMARSLPTOKENPoolyFTwNiR.totalSupply.call({from: accounts[5]});
		const uint256PF0dqdP = await BACMARSLPTOKENPoolyFTwNiR.stake.call(uintbO1x1Xt, {from: accounts[1]});
		const stringoO3T7bW = await BACMARSLPTOKENPoolyFTwNiR.symbol.call({from: accounts[1]});
		const uint8sE50dZK = await BACMARSLPTOKENPoolyFTwNiR.decimals.call({from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringHI5Ulh = "lM6GmN4E3TI0T0ruDNSS1IGHHXmlzQ3v"
		const stringql4OFBt = "YSQ7TmqmKfkVUGHHt0QUiPJtfTRZ7WNPuiDNXVgpmlByFFB3HOhqime4vsPvSSKa3MWfXzg0cRxZVvvibD74rUMoWY"
		const uintwVZEgjT = BigInt("179")
		const BACMARSLPTOKENPoolxIZjnd = await BACMARSLPTOKENPool.new(stringHI5Ulh, stringql4OFBt, uintwVZEgjT, {from: accounts[2]});
		const uintQUBtxGL = BigInt("959")
		const uint8wAoTK5X = await BACMARSLPTOKENPoolxIZjnd.decimals.call({from: accounts[4]});
		const uint256Oyc460 = await BACMARSLPTOKENPoolxIZjnd.totalSupply.call({from: accounts[0]});
		const uint8FzEMfHo = await BACMARSLPTOKENPoolxIZjnd.decimals.call({from: accounts[4]});
		const uint256flk7R4X = await BACMARSLPTOKENPoolxIZjnd.notifyRewardAmount.call(uintQUBtxGL, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringMxDKLiN = "aDMGJnXltVO4ifYWnjEELQmXIS0xvKFQXixHeg39nER4vAXRqGHXbCztJC7pDt"
		const stringezvGk2x = "w3binn517oJ3BYlUThw3zGcSk5qVz8AlKSY4YIKt99N4sfMiflPpg98ST3252Ep8Bj"
		const uintyU19uf = BigInt("125")
		const BACMARSLPTOKENPoolVm6xZg4 = await BACMARSLPTOKENPool.new(stringMxDKLiN, stringezvGk2x, uintyU19uf, {from: accounts[3]});
		const addresslYWfqWu = accounts[4]
		const uint8xkJyZEx = await BACMARSLPTOKENPoolVm6xZg4.decimals.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256llsOLW = await BACMARSLPTOKENPoolVm6xZg4.balanceOf.call(addresslYWfqWu, {from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringTIzt1ef = "O6wTkSxl4RVgHFEm1qJ7tO94u2vAaHCjTfp2PGDeVUB3Dj5pOcO1"
		const stringmu0l6s = "15L3UifS2PROgrCWauSwgrjwoYBm7Qe8yR4I2dSfvjIzW813iACg63qVWWEGfuZnU"
		const uintGAwgfKf = BigInt("133")
		const BACMARSLPTOKENPoolrQon0Qq = await BACMARSLPTOKENPool.new(stringTIzt1ef, stringmu0l6s, uintGAwgfKf, {from: accounts[0]});
		const byteb1CGjfg = "0x190309050409151e1b091001030f1214101301030e160718161a160c1f0e1001"
		const bytepo9UPQj = "0x1d0a12100d171e0d12100e18061613160b1613081d0e0a18050c110104011005"
		const uinthUj0LSQ = BigInt("243")
		const uinttWVYkXc = BigInt("717")
		const uintt9n1mEw = BigInt("348")
		const uintuz3EYiV = BigInt("2030")
		const uintq8ZZN68 = BigInt("224")
		const uint256l0Hv3sO = await BACMARSLPTOKENPoolrQon0Qq.stakeWithPermit.call(uintt9n1mEw, uinttWVYkXc, uinthUj0LSQ, bytepo9UPQj, byteb1CGjfg, {from: accounts[0]});
		const uint256uO4dW6 = await BACMARSLPTOKENPoolrQon0Qq.stake.call(uintuz3EYiV, {from: "0x0000000000000000000000000000000000000001"});
		const uint256WOAq6ht = await BACMARSLPTOKENPoolrQon0Qq.notifyRewardAmount.call(uintq8ZZN68, {from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringnjVQ1un = "8ayMAIhRqIbS28xdQYoEMSl8oCzazhZ465qQNF7t9SqPj325QROmtYe7FycRHo6LG"
		const stringoHGeKH2 = "Yd9Elnrj4lpYCSU3oGYA1QefBPjxv8VKuC5Tbxq68p10d1VjK72Md"
		const uintsuKnfGs = BigInt("14")
		const BACMARSLPTOKENPooluwVnyM6 = await BACMARSLPTOKENPool.new(stringnjVQ1un, stringoHGeKH2, uintsuKnfGs, {from: accounts[5]});
		const uint256NuqjKcl = await BACMARSLPTOKENPooluwVnyM6.rewardPerToken.call({from: accounts[5]});
		const stringYq36sBV = await BACMARSLPTOKENPooluwVnyM6.symbol.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringBIooJHC = "sVsx5jXyYGmWnbGoXbOrIREhqydplE8Ix7Ddv2HQNcOCMVx2O192S1znSQIf"
		const stringwGBsOqB = "IFkuWtvi5aaNdMqfFRJnNXNlnCj"
		const uintszMD6ZT = BigInt("12")
		const BACMARSLPTOKENPoolwKCUCy7 = await BACMARSLPTOKENPool.new(stringBIooJHC, stringwGBsOqB, uintszMD6ZT, {from: accounts[5]});
		const uintUk0pneh = BigInt("1614")
		const uintCoMMKtC = BigInt("1869")
		const uintKY9IODS = BigInt("219")
		const uint8ropLaBw = await BACMARSLPTOKENPoolwKCUCy7.decimals.call({from: accounts[2]});
		const uint256l7fVbKw = await BACMARSLPTOKENPoolwKCUCy7.stake.call(uintUk0pneh, {from: accounts[3]});
		const uint256Zf1X3kR = await BACMARSLPTOKENPoolwKCUCy7.notifyRewardAmount.call(uintCoMMKtC, {from: accounts[3]});
		const uint256hr3aufc = await BACMARSLPTOKENPoolwKCUCy7.notifyRewardAmount.call(uintKY9IODS, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringM0vICH8 = "swsBym"
		const stringdF8FmkP = "8ALABvgG3DHVzNS47g4UpJWiNBcaP0P1S76C29WVAm1gBdWti54INClJYO1mY20BcP6hWOkBptEICiWdBsf4lEzE3XvL9ML2"
		const uintT8FN4D = BigInt("6")
		const BACMARSLPTOKENPoolhYd24ng = await BACMARSLPTOKENPool.new(stringM0vICH8, stringdF8FmkP, uintT8FN4D, {from: accounts[2]});
		const addressccr3JZr = accounts[3]
		const addresskkFtrpZ = accounts[5]
		const uint256FUtcvOd = await BACMARSLPTOKENPoolhYd24ng.getRewardForDuration.call({from: accounts[1]});
		const stringcKEIigi = await BACMARSLPTOKENPoolhYd24ng.symbol.call({from: accounts[4]});
		const uint256n0L74Uh = await BACMARSLPTOKENPoolhYd24ng.balanceOf.call(addressccr3JZr, {from: accounts[0]});
		const uint256Cm4rhO = await BACMARSLPTOKENPoolhYd24ng.earned.call(addresskkFtrpZ, {from: accounts[2]});
		const uint256tJ8HhyF = await BACMARSLPTOKENPoolhYd24ng.lastTimeRewardApplicable.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringlOS2n87 = "snru2mUqnNu"
		const stringmpBWAhQ = "Ruk5Pofs5"
		const uintoix1Lmg = BigInt("193")
		const BACMARSLPTOKENPooljEO6JxW = await BACMARSLPTOKENPool.new(stringlOS2n87, stringmpBWAhQ, uintoix1Lmg, {from: accounts[1]});
		const addressAxP7M6 = accounts[0]
		const byteAnVIEM9 = "0x1c0f1b121c060318041f201308111a19160a0f110a0517121f0f151712091307"
		const bytewegZhiR = "0x1a041706081d181a1a10090f10151b001a0a181f0f0902140c0b2011151d1f12"
		const uintFxs4x9c = BigInt("71")
		const uintRgITahk = BigInt("1311")
		const uintMdwOciQ = BigInt("1145")
		const uint256U05lxVZ = await BACMARSLPTOKENPooljEO6JxW.earned.call(addressAxP7M6, {from: "0x0000000000000000000000000000000000000001"});
		const uint8otVsrd = await BACMARSLPTOKENPooljEO6JxW.decimals.call({from: accounts[4]});
		const uint256ajBcqU = await BACMARSLPTOKENPooljEO6JxW.stakeWithPermit.call(uintMdwOciQ, uintRgITahk, uintFxs4x9c, bytewegZhiR, byteAnVIEM9, {from: accounts[0]});
		await BACMARSLPTOKENPooljEO6JxW.exit.call({from: accounts[3]});
		const stringQetkHft = await BACMARSLPTOKENPooljEO6JxW.symbol.call({from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressinPwipp = accounts[2]
		const addressOvo6a6U = accounts[5]
		const addressHhG598U = accounts[0]
		const BACMARSLPTOKENPoolJ1OVVSL = await BACMARSLPTOKENPool.new(addressinPwipp, addressOvo6a6U, addressHhG598U, {from: "0x0000000000000000000000000000000000000001"});
		const uintIjoB0oj = BigInt("1232")
		const uintteSyNkm = BigInt("784")
		const uint256ea4X2yQ = await BACMARSLPTOKENPoolJ1OVVSL.withdraw.call(uintIjoB0oj, {from: accounts[2]});
		const uint256DllDkYd = await BACMARSLPTOKENPoolJ1OVVSL.getRewardForDuration.call({from: accounts[0]});
		const uint256QNGmjQa = await BACMARSLPTOKENPoolJ1OVVSL.getRewardForDuration.call({from: accounts[3]});
		const uint256SuNQgmL = await BACMARSLPTOKENPoolJ1OVVSL.lastTimeRewardApplicable.call({from: accounts[0]});
		const uint256zRq4Uwu = await BACMARSLPTOKENPoolJ1OVVSL.withdraw.call(uintteSyNkm, {from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringtEUL0lH = "FDuoF8E7yPGdvpyk4l2FvsCA9sib9rqN7DiegdHOeZy99U11TnYwZChdE6wrDFi4PKAa5ISHVotLJyqDRxe2axniVhxiUXcDNc"
		const stringJDE4eJv = "6Qi5paOEWtU3hFd9OQQkA0W5SXnAzpxPihnfAjjremTOSx8x23omo7S8jH3hM5eHzctilppmyIpe7H73XGGJ7Ad"
		const uintqyX3vhi = BigInt("30")
		const BACMARSLPTOKENPoolsoiY79K = await BACMARSLPTOKENPool.new(stringtEUL0lH, stringJDE4eJv, uintqyX3vhi, {from: accounts[0]});
		const uinte7PSS3Q = BigInt("1947")
		const uintLlvz0Us = BigInt("1340")
		const uint256pYSAyHj = await BACMARSLPTOKENPoolsoiY79K.notifyRewardAmount.call(uinte7PSS3Q, {from: accounts[5]});
		const uint256oDTjbZ5 = await BACMARSLPTOKENPoolsoiY79K.notifyRewardAmount.call(uintLlvz0Us, {from: accounts[4]});
		const uint256RMfGmnh = await BACMARSLPTOKENPoolsoiY79K.rewardPerToken.call({from: accounts[2]});
		await BACMARSLPTOKENPoolsoiY79K.exit.call({from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringQq8Ve5Y = "Ush9EA7yS0m6sK7u"
		const stringa4fWxW9 = "jyRQ66t339I1eEayFudKjoTo18lDqf9ahD8hNCr8PoTl1Qvc00jOSCVISkFkRIPDXREENvvk1ilJ"
		const uintYknGDhE = BigInt("123")
		const BACMARSLPTOKENPoolQaf6HrG = await BACMARSLPTOKENPool.new(stringQq8Ve5Y, stringa4fWxW9, uintYknGDhE, {from: accounts[0]});
		const addressOYHxThG = accounts[2]
		const uint2560WzbrB = await BACMARSLPTOKENPoolQaf6HrG.getRewardForDuration.call({from: accounts[4]});
		await BACMARSLPTOKENPoolQaf6HrG.onlyRewardsDistribution.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256WdbIgeP = await BACMARSLPTOKENPoolQaf6HrG.earned.call(addressOYHxThG, {from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringVhXX8fj = "qFMAqQ8sc3AwftoxbTumZnwDGtbpkME2e7aBbWo0oTvDzO"
		const stringWBBHvz = "FJeAPpssg4yj9oYdNo52m4MBwq6Xi4AEnVtnrE0Fz9Mszi7z65bxybV58jWRXWpLbQSqTdMPrk"
		const uintG4FZfPd = BigInt("49")
		const BACMARSLPTOKENPoolUMkaZhi = await BACMARSLPTOKENPool.new(stringVhXX8fj, stringWBBHvz, uintG4FZfPd, {from: accounts[2]});
		const uint2AiGLB = BigInt("754")
		const uint256aydFNEI = await BACMARSLPTOKENPoolUMkaZhi.lastTimeRewardApplicable.call({from: "0x0000000000000000000000000000000000000001"});
		const uint8I4GNJVn = await BACMARSLPTOKENPoolUMkaZhi.decimals.call({from: accounts[1]});
		await BACMARSLPTOKENPoolUMkaZhi.exit.call({from: accounts[1]});
		await BACMARSLPTOKENPoolUMkaZhi.onlyRewardsDistribution.call({from: accounts[1]});
		const uint256GsuKbD4 = await BACMARSLPTOKENPoolUMkaZhi.stake.call(uint2AiGLB, {from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringaK70Z5a = "LqWQlAeaOJD76xbOE3jIk7IVOQBay7boWHqLs7boOykynO23RKxzsi81cjTyIKk"
		const stringACxTxlA = "msDuVbow8Eo6gf8JNWCMh7SCoIocemaM4Nh7TilrLRQJfljhgqcMtpQm3BgxK"
		const uintUWWWa8e = BigInt("159")
		const BACMARSLPTOKENPooldxhRT5 = await BACMARSLPTOKENPool.new(stringaK70Z5a, stringACxTxlA, uintUWWWa8e, {from: accounts[3]});
		const uintSdMHUOs = BigInt("961")
		const addressw2ioVH = accounts[1]
		const stringGHfaAA5 = await BACMARSLPTOKENPooldxhRT5.symbol.call({from: accounts[1]});
		const uint256RAk4HuT = await BACMARSLPTOKENPooldxhRT5.withdraw.call(uintSdMHUOs, {from: accounts[3]});
		await BACMARSLPTOKENPooldxhRT5.nonReentrant.call({from: accounts[1]});
		const uint256vjcYJ8 = await BACMARSLPTOKENPooldxhRT5.balanceOf.call(addressw2ioVH, {from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringTJNhyzB = "lO7uXdUyCgMaknk49knI3cgpOKFdEt6KIeLUpLFDtjxuOciKqnXsq50R6qGLKJ3ZbYUsNBY5St4"
		const stringzZfz3Ig = "p31dlaloOTLNmQ4DTpzouJIlPwhIwrd9qvhL7NS4R9LTCSvEv4iCuzwhjnVkx5KsnAgAhbmlet35WEiwT"
		const uintXRK5h2I = BigInt("195")
		const BACMARSLPTOKENPoolDcEMe9Z = await BACMARSLPTOKENPool.new(stringTJNhyzB, stringzZfz3Ig, uintXRK5h2I, {from: accounts[2]});
		const byteOUrQZIt = "0x160f040309071e001710040e101c20030218011b0d08181d181302101d130415"
		const byteHJNmT8L = "0x1d0a09091712011f18170414161f0c08101b0b1e1b1a171e1b1d060a190e0e1d"
		const uintvXOIUEK = BigInt("242")
		const uint29Q29S = BigInt("1003")
		const uinteTRNts3 = BigInt("698")
		const addressvkTSwPe = accounts[0]
		const uint256rqzUrmx = await BACMARSLPTOKENPoolDcEMe9Z.stakeWithPermit.call(uinteTRNts3, uint29Q29S, uintvXOIUEK, byteHJNmT8L, byteOUrQZIt, {from: accounts[2]});
		await BACMARSLPTOKENPoolDcEMe9Z.exit.call({from: accounts[2]});
		const uint256ggI2ru = await BACMARSLPTOKENPoolDcEMe9Z.earned.call(addressvkTSwPe, {from: accounts[4]});
		const uint256sPcjxwn = await BACMARSLPTOKENPoolDcEMe9Z.lastTimeRewardApplicable.call({from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringtmSd6Wa = "SuHiwcaArfxLe57exgd8DqwIU3RMMgb4gLbOGYnr81GZ2Kgzyc0PgeFs88bOVemLTEpCiH14nnzYQROXUjY8jC1mV1mzf"
		const stringuCMMYXD = "UkFNz5gp1RgaMBn6fZWx75U5zBhbtjGl4wD"
		const uintIcAYn97 = BigInt("142")
		const BACMARSLPTOKENPoolHaZNeG7 = await BACMARSLPTOKENPool.new(stringtmSd6Wa, stringuCMMYXD, uintIcAYn97, {from: accounts[2]});
		const addressPFiTC2I = accounts[4]
		const uintVo8pOx2 = BigInt("291")
		const uint256BCvgfhd = await BACMARSLPTOKENPoolHaZNeG7.rewardPerToken.call({from: accounts[0]});
		const uint256smczw7Q = await BACMARSLPTOKENPoolHaZNeG7.balanceOf.call(addressPFiTC2I, {from: accounts[5]});
		const uint256qb2mzz = await BACMARSLPTOKENPoolHaZNeG7.notifyRewardAmount.call(uintVo8pOx2, {from: accounts[1]});
		await BACMARSLPTOKENPoolHaZNeG7.exit.call({from: "0x0000000000000000000000000000000000000001"});
	});
})