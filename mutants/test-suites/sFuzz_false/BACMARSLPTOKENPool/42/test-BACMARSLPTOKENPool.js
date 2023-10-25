const BACMARSLPTOKENPool = artifacts.require("BACMARSLPTOKENPool");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('BACMARSLPTOKENPool', (accounts) => {
	it('test for BACMARSLPTOKENPool', async () => {
		const addressbwddVy4 = accounts[4]
		const addressiLYMyaW = accounts[4]
		const address5TjUqH = accounts[2]
		const BACMARSLPTOKENPoolryFJbfN = await BACMARSLPTOKENPool.new(addressbwddVy4, addressiLYMyaW, address5TjUqH, {from: accounts[5]});
//		await BACMARSLPTOKENPoolryFJbfN.getReward.call({from: accounts[3]});
//		await BACMARSLPTOKENPoolryFJbfN.exit.call({from: accounts[2]});
//		const uint256KkMe2o = await BACMARSLPTOKENPoolryFJbfN.getRewardForDuration.call({from: accounts[5]});

		await expect(BACMARSLPTOKENPoolryFJbfN.getReward.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringhWmj9ZS = "XsbNHtKs1nPn4EbFWFJfAwlhRVXLBe"
		const stringbqb21d8 = "eRYbOd0QcBpheLJpf12zMqCo1tlBdVeDY"
		const uintMs16eLa = BigInt("241")
		const BACMARSLPTOKENPoolkd5y5On = await BACMARSLPTOKENPool.new(stringhWmj9ZS, stringbqb21d8, uintMs16eLa, {from: accounts[2]});
		const uintsVK1f7U = BigInt("1864")
		const stringO4njDml = await BACMARSLPTOKENPoolkd5y5On.name.call({from: accounts[1]});
		const uint256DAfjnfZ = await BACMARSLPTOKENPoolkd5y5On.notifyRewardAmount.call(uintsVK1f7U, {from: "0x0000000000000000000000000000000000000001"});
		const uint8wjtvYT = await BACMARSLPTOKENPoolkd5y5On.decimals.call({from: accounts[3]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressNxZGYx7 = accounts[1]
		const addressbX7FW4P = "0x0000000000000000000000000000000000000001"
		const addressFP2pzee = accounts[3]
		const BACMARSLPTOKENPoolJY5CC6A = await BACMARSLPTOKENPool.new(addressNxZGYx7, addressbX7FW4P, addressFP2pzee, {from: accounts[5]});
		const uintWtmFko = BigInt("361")
		const uintxg6fvJK = BigInt("163")
//		const uint256hCvV7rF = await BACMARSLPTOKENPoolJY5CC6A.stake.call(uintWtmFko, {from: accounts[0]});
//		const uint256W0KJIDq = await BACMARSLPTOKENPoolJY5CC6A.withdraw.call(uintxg6fvJK, {from: accounts[3]});

		await expect(BACMARSLPTOKENPoolJY5CC6A.stake.call(uintWtmFko, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringaoca7CA = "Z91m5Y"
		const stringOy94G6 = "9CEiprPxd7dasWfcO7VcXafCWX7d4VeqMoF56MXc95LHziHyK"
		const uintMk3CWy8 = BigInt("87")
		const BACMARSLPTOKENPoolVlQkfC7 = await BACMARSLPTOKENPool.new(stringaoca7CA, stringOy94G6, uintMk3CWy8, {from: "0x0000000000000000000000000000000000000001"});
		const uintXhhe5Xx = BigInt("2034")
		const uint256vRiHaRw = await BACMARSLPTOKENPoolVlQkfC7.getRewardForDuration.call({from: accounts[1]});
		await BACMARSLPTOKENPoolVlQkfC7.exit.call({from: accounts[3]});
		const stringwSuVdOI = await BACMARSLPTOKENPoolVlQkfC7.name.call({from: accounts[3]});
		const uint256OJozL7L = await BACMARSLPTOKENPoolVlQkfC7.withdraw.call(uintXhhe5Xx, {from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressV2UKQIj = accounts[0]
		const address45CZ6k = accounts[0]
		const addressDLRDUS0 = accounts[0]
		const BACMARSLPTOKENPools8XAcpx = await BACMARSLPTOKENPool.new(addressV2UKQIj, address45CZ6k, addressDLRDUS0, {from: "0x0000000000000000000000000000000000000001"});
		const uintXQQbRz9 = BigInt("422")
		const uint256IbwbKqf = await BACMARSLPTOKENPools8XAcpx.notifyRewardAmount.call(uintXQQbRz9, {from: "0x0000000000000000000000000000000000000001"});
		await BACMARSLPTOKENPools8XAcpx.onlyRewardsDistribution.call({from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressucxN84I = accounts[0]
		const addressd4pUDuW = "0x0000000000000000000000000000000000000001"
		const address59rSAo = accounts[1]
		const BACMARSLPTOKENPoolBPZUp0B = await BACMARSLPTOKENPool.new(addressucxN84I, addressd4pUDuW, address59rSAo, {from: accounts[4]});
		const bytebtf9Mzk = "0x1211141a020f0208080e1a1c1605001e071e02030e19171400061909171c0b0a"
		const byteU9DjN3u = "0x0a090b1e0b01011d011a0420000705040811190709091509040e091f1c1c1004"
		const uintS5YLafF = BigInt("1")
		const uintAKuWeuv = BigInt("300")
		const uintHMvpI8p = BigInt("2042")
//		const uint256btD2N3t = await BACMARSLPTOKENPoolBPZUp0B.stakeWithPermit.call(uintHMvpI8p, uintAKuWeuv, uintS5YLafF, byteU9DjN3u, bytebtf9Mzk, {from: accounts[1]});
//		await BACMARSLPTOKENPoolBPZUp0B.onlyRewardsDistribution.call({from: accounts[5]});
//		await BACMARSLPTOKENPoolBPZUp0B.getReward.call({from: "0x0000000000000000000000000000000000000001"});
//		const stringf11YKVw = await BACMARSLPTOKENPoolBPZUp0B.symbol.call({from: accounts[1]});
//		await BACMARSLPTOKENPoolBPZUp0B.nonReentrant.call({from: accounts[5]});

		await expect(BACMARSLPTOKENPoolBPZUp0B.stakeWithPermit.call(uintHMvpI8p, uintAKuWeuv, uintS5YLafF, byteU9DjN3u, bytebtf9Mzk, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addresspGk6je5 = accounts[3]
		const addressuudVhn = accounts[0]
		const addressIk6lFfD = accounts[0]
		const BACMARSLPTOKENPoolRhm4Nmw = await BACMARSLPTOKENPool.new(addresspGk6je5, addressuudVhn, addressIk6lFfD, {from: accounts[4]});
		const addresscAC8DRi = accounts[2]
		const addressoH8YQzx = accounts[1]
		const uint256X6AF17E = await BACMARSLPTOKENPoolRhm4Nmw.totalSupply.call({from: accounts[1]});
		const uint256Q4ReBCL = await BACMARSLPTOKENPoolRhm4Nmw.balanceOf.call(addresscAC8DRi, {from: "0x0000000000000000000000000000000000000001"});
		const uint256cgOXq2q = await BACMARSLPTOKENPoolRhm4Nmw.totalSupply.call({from: accounts[3]});
		const uint256xZfwcYP = await BACMARSLPTOKENPoolRhm4Nmw.balanceOf.call(addressoH8YQzx, {from: accounts[1]});
//		await BACMARSLPTOKENPoolRhm4Nmw.nonReentrant.call({from: accounts[1]});

		assert.equal(uint256Q4ReBCL, BigInt("0"))
		assert.equal(uint256X6AF17E, BigInt("0"))
		assert.equal(uint256cgOXq2q, BigInt("0"))
		assert.equal(uint256xZfwcYP, BigInt("0"))
		await expect(BACMARSLPTOKENPoolRhm4Nmw.nonReentrant.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressjgSNpud = accounts[4]
		const addressgYFe3Ey = accounts[4]
		const addressSPtiyV8 = accounts[2]
		const BACMARSLPTOKENPoolryFJbfN = await BACMARSLPTOKENPool.new(addressjgSNpud, addressgYFe3Ey, addressSPtiyV8, {from: accounts[5]});
//		await BACMARSLPTOKENPoolryFJbfN.getReward.call({from: accounts[3]});
//		const uint256KkMe2o = await BACMARSLPTOKENPoolryFJbfN.getRewardForDuration.call({from: accounts[5]});

		await expect(BACMARSLPTOKENPoolryFJbfN.getReward.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressgJVaEZU = accounts[4]
		const addressTFH7iys = accounts[4]
		const addressUJZaFse = accounts[2]
		const BACMARSLPTOKENPoolryFJbfN = await BACMARSLPTOKENPool.new(addressgJVaEZU, addressTFH7iys, addressUJZaFse, {from: accounts[5]});
		const uintOpnU1VI = BigInt("1389")
//		const uint256TDKlW5a = await BACMARSLPTOKENPoolryFJbfN.notifyRewardAmount.call(uintOpnU1VI, {from: accounts[1]});
//		await BACMARSLPTOKENPoolryFJbfN.getReward.call({from: accounts[3]});
//		const uint256KkMe2o = await BACMARSLPTOKENPoolryFJbfN.getRewardForDuration.call({from: accounts[5]});
//		const uint8YDGmS98 = await BACMARSLPTOKENPoolryFJbfN.decimals.call({from: accounts[3]});

		await expect(BACMARSLPTOKENPoolryFJbfN.notifyRewardAmount.call(uintOpnU1VI, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressmKe0K8u = accounts[4]
		const addressDMsPz55 = accounts[4]
		const addresscB6RCN8 = accounts[2]
		const BACMARSLPTOKENPoolryFJbfN = await BACMARSLPTOKENPool.new(addressmKe0K8u, addressDMsPz55, addresscB6RCN8, {from: accounts[5]});
		const uintoYdEV3B = BigInt("1458")
		const uintwrAlfRs = BigInt("1682")
//		await BACMARSLPTOKENPoolryFJbfN.getReward.call({from: accounts[3]});
//		const uint256caE8Z3D = await BACMARSLPTOKENPoolryFJbfN.withdraw.call(uintoYdEV3B, {from: accounts[0]});
//		const uint256KkMe2o = await BACMARSLPTOKENPoolryFJbfN.getRewardForDuration.call({from: accounts[5]});
//		const uint256n9HzlNP = await BACMARSLPTOKENPoolryFJbfN.withdraw.call(uintwrAlfRs, {from: accounts[3]});

		await expect(BACMARSLPTOKENPoolryFJbfN.getReward.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringeNUneyX = "67jTXoM2rW6nlrTxbsxmbp7zegGohmILmjDr8gczycIueeBBXmEBiFo1X6spnVFpaGnqVUJXvXaQOlSU7"
		const stringgZJREKH = "RGoLAUwBHEJlrWqglsPb2wGwDzR3GA6KAFgHIRwSBMP5Pi4QdTNaH3vzDwCRc9wmvJFxt1ADYPT39ICJt48b5K"
		const uintIGmnH1 = BigInt("49")
		const BACMARSLPTOKENPoolfhyIG3u = await BACMARSLPTOKENPool.new(stringeNUneyX, stringgZJREKH, uintIGmnH1, {from: accounts[0]});
		const addresswr3qcM = accounts[3]
		const uintBDnjFyz = BigInt("1236")
		const uint256yVIvSr9 = await BACMARSLPTOKENPoolfhyIG3u.getRewardForDuration.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256PIfSAbI = await BACMARSLPTOKENPoolfhyIG3u.balanceOf.call(addresswr3qcM, {from: accounts[3]});
		const uint256nO0NAha = await BACMARSLPTOKENPoolfhyIG3u.stake.call(uintBDnjFyz, {from: accounts[4]});
		const uint256Mkebvkb = await BACMARSLPTOKENPoolfhyIG3u.getRewardForDuration.call({from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringG0eJZ9E = "PFESCpRfEFRg"
		const stringyby48CU = "UCLgWwci8ApdiKqsrwonk9d4bDY2il3SawjY8CQHbv35H4aUcFj7l9d8nwvYDOn5CiAZvVELv8ZJ"
		const uintYHDwH4i = BigInt("235")
		const BACMARSLPTOKENPoolB6gNANR = await BACMARSLPTOKENPool.new(stringG0eJZ9E, stringyby48CU, uintYHDwH4i, {from: accounts[3]});
		const uint256j9peN0W = await BACMARSLPTOKENPoolB6gNANR.lastTimeRewardApplicable.call({from: accounts[1]});
		await BACMARSLPTOKENPoolB6gNANR.exit.call({from: accounts[3]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringj3T5uBu = "OhcB3HDns4v5bX0aCWbnYA7F5iaeCI3pWUIvp"
		const stringNzPsf1R = "z5tebhAiAXUWzejp25em6YkN3V5U7w9YK0OQk2hZ6mY4fHOHKHwoL5bHaMvGWnVRNn2a8sGN4nFnAdrrqz"
		const uintcXG0sZj = BigInt("169")
		const BACMARSLPTOKENPoolEjIy21J = await BACMARSLPTOKENPool.new(stringj3T5uBu, stringNzPsf1R, uintcXG0sZj, {from: accounts[5]});
		const stringn6hJETK = await BACMARSLPTOKENPoolEjIy21J.name.call({from: "0x0000000000000000000000000000000000000001"});
		const stringMEFim72 = await BACMARSLPTOKENPoolEjIy21J.name.call({from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressjJq5E11 = accounts[4]
		const addressMDaX8Vd = accounts[4]
		const addresssAPp4p4 = accounts[2]
		const BACMARSLPTOKENPoolryFJbfN = await BACMARSLPTOKENPool.new(addressjJq5E11, addressMDaX8Vd, addresssAPp4p4, {from: accounts[5]});
		const uintajli9a = BigInt("1543")
		const uint256EABcdlC = await BACMARSLPTOKENPoolryFJbfN.totalSupply.call({from: accounts[4]});
		const uint256NwIBJum = await BACMARSLPTOKENPoolryFJbfN.lastTimeRewardApplicable.call({from: accounts[1]});
//		await BACMARSLPTOKENPoolryFJbfN.getReward.call({from: accounts[3]});
//		const uint256WC1s5T6 = await BACMARSLPTOKENPoolryFJbfN.notifyRewardAmount.call(uintajli9a, {from: accounts[4]});

		assert.equal(uint256EABcdlC, BigInt("0"))
		assert.equal(uint256NwIBJum, BigInt("0"))
		await expect(BACMARSLPTOKENPoolryFJbfN.getReward.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringEQVx2xn = "TPLxTnrVHxi4IDAzUhYx7JyYWconLnho9nLG77TwWBieXaPVD5Zqzr8OQQZtvsdo"
		const stringxPLCuuA = "tF8GQbvBfCbRhX8t477sfLnLfrpTdRoPdNP39OllPANXdLHf7bmxptdfPlTz9sdD2RA3rgyoBzV2az5lnw"
		const uintdZG5yjK = BigInt("122")
		const BACMARSLPTOKENPoolt2JVnTr = await BACMARSLPTOKENPool.new(stringEQVx2xn, stringxPLCuuA, uintdZG5yjK, {from: accounts[1]});
		const uintLcuyIzN = BigInt("300")
		const addressF4zysuX = accounts[3]
		const addressdzffGus = accounts[3]
		const uint256ZH6V99H = await BACMARSLPTOKENPoolt2JVnTr.rewardPerToken.call({from: accounts[2]});
		await BACMARSLPTOKENPoolt2JVnTr.getReward.call({from: accounts[4]});
		const uint256KpXUw0U = await BACMARSLPTOKENPoolt2JVnTr.withdraw.call(uintLcuyIzN, {from: accounts[4]});
		const stringMWai0WE = await BACMARSLPTOKENPoolt2JVnTr.name.call({from: accounts[0]});
		const uint256r2wGQMU = await BACMARSLPTOKENPoolt2JVnTr.balanceOf.call(addressF4zysuX, {from: accounts[4]});
		const addressBuSHOdP = await BACMARSLPTOKENPoolt2JVnTr.updateReward.call(addressdzffGus, {from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringFSsYkUO = "D9jY4brzbTQzuEVu5xX8hMzq7zo1I2Ygrpg9X8fM2SINTtMNkI3JLVzuF3dzvGwEZLal7Uis3wk2"
		const stringB3XNSqZ = "hgVoWWDaoy8XO3EC1NUBd6uRkNj4YSOknVmNdkO5r4cjKAmrFDsLhEGNKZa"
		const uintUhhnzyr = BigInt("29")
		const BACMARSLPTOKENPoolizEMh5L = await BACMARSLPTOKENPool.new(stringFSsYkUO, stringB3XNSqZ, uintUhhnzyr, {from: accounts[1]});
		const byteCbzbdsb = "0x060220031e0f101f1617051d0e1e0a0d151c16011408131204000c170f0c091f"
		const bytegKmpkr1 = "0x0a1a0f1803030b1c0b06171d00151d0d0b1b12060b0203010c01100002120e09"
		const uints3AhGLs = BigInt("234")
		const uintk9iYtUn = BigInt("1443")
		const uintBit5Dr = BigInt("1966")
		const uint256BNI3Et7 = await BACMARSLPTOKENPoolizEMh5L.totalSupply.call({from: accounts[4]});
		const uint256yqOoBJH = await BACMARSLPTOKENPoolizEMh5L.stakeWithPermit.call(uintBit5Dr, uintk9iYtUn, uints3AhGLs, bytegKmpkr1, byteCbzbdsb, {from: accounts[3]});
		await BACMARSLPTOKENPoolizEMh5L.nonReentrant.call({from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringvkTlHNG = "fhtBBHyEAYCE8w4rHvYBtEl0bWVrPSvMqGOLVKAGDS3hmqHDkoVYX9UWPmiPwdKv3D"
		const stringUsf6hTU = "MvYKwh9kD10BjjBkgwYbcqDUjn87wSCax7sy47voGZtDNP474Y2cBGdDviZwRldBFkk8wSnEWNrv"
		const uintD9M4DU = BigInt("139")
		const BACMARSLPTOKENPoolRtGCyYx = await BACMARSLPTOKENPool.new(stringvkTlHNG, stringUsf6hTU, uintD9M4DU, {from: accounts[1]});
		const uintnWXBuC7 = BigInt("125")
		const addressjASSQ1y = accounts[1]
		const uint256BYHCEK = await BACMARSLPTOKENPoolRtGCyYx.notifyRewardAmount.call(uintnWXBuC7, {from: accounts[5]});
		const uint256dZF5MYc = await BACMARSLPTOKENPoolRtGCyYx.lastTimeRewardApplicable.call({from: accounts[3]});
		await BACMARSLPTOKENPoolRtGCyYx.getReward.call({from: accounts[4]});
		await BACMARSLPTOKENPoolRtGCyYx.onlyRewardsDistribution.call({from: accounts[5]});
		const uint256smfxeqT = await BACMARSLPTOKENPoolRtGCyYx.balanceOf.call(addressjASSQ1y, {from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const string9WtIT7 = "w"
		const stringXb9WGy = "tk"
		const uintyAyw8Q = BigInt("76")
		const BACMARSLPTOKENPoolPyhJgfF = await BACMARSLPTOKENPool.new(string9WtIT7, stringXb9WGy, uintyAyw8Q, {from: accounts[2]});
		const uintt1FuPKC = BigInt("508")
		await BACMARSLPTOKENPoolPyhJgfF.nonReentrant.call({from: accounts[2]});
		await BACMARSLPTOKENPoolPyhJgfF.getReward.call({from: accounts[0]});
		const uint256T0TT0E7 = await BACMARSLPTOKENPoolPyhJgfF.withdraw.call(uintt1FuPKC, {from: accounts[1]});
		const stringGesJGCm = await BACMARSLPTOKENPoolPyhJgfF.symbol.call({from: accounts[4]});
		const uint256N85y3Z0 = await BACMARSLPTOKENPoolPyhJgfF.rewardPerToken.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringd7hmryp = "H1l9FJwwmjTMilVY8DtpOheuGOlgSVXW0WR69UhwRL9S4HvhkMXIdDHO6QeMORWOUBTqsXDv8OT"
		const stringYbg2eM4 = "VJPaoJaIIPYleRfMsmFaqq4fzUwRAqyQFJoKOI42CVx247Y110jW1iqxq91eCHuy"
		const uintCuGKjiD = BigInt("144")
		const BACMARSLPTOKENPoolpEoeMk = await BACMARSLPTOKENPool.new(stringd7hmryp, stringYbg2eM4, uintCuGKjiD, {from: accounts[2]});
		const uint256PPI1Oby = await BACMARSLPTOKENPoolpEoeMk.rewardPerToken.call({from: accounts[3]});
		const uint256kbnXftt = await BACMARSLPTOKENPoolpEoeMk.rewardPerToken.call({from: accounts[5]});
		const uint256HYFRLDK = await BACMARSLPTOKENPoolpEoeMk.lastTimeRewardApplicable.call({from: accounts[0]});
		const stringEWmgLn = await BACMARSLPTOKENPoolpEoeMk.symbol.call({from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringqIFSHb9 = "agSnWuTS8JIcAKF3AOW3b5Y1XyhE6KMdQb7yk12tVnn200DxeFPPXDkmS17UHwkqP"
		const stringJJaCFlo = "lDjzVpkbYmRYR"
		const uintLDf0Ab = BigInt("159")
		const BACMARSLPTOKENPoolB58dvWU = await BACMARSLPTOKENPool.new(stringqIFSHb9, stringJJaCFlo, uintLDf0Ab, {from: accounts[3]});
		const uint256Wc2oFY8 = await BACMARSLPTOKENPoolB58dvWU.lastTimeRewardApplicable.call({from: accounts[1]});
		await BACMARSLPTOKENPoolB58dvWU.onlyRewardsDistribution.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256knfA2e2 = await BACMARSLPTOKENPoolB58dvWU.totalSupply.call({from: accounts[1]});
		await BACMARSLPTOKENPoolB58dvWU.onlyRewardsDistribution.call({from: "0x0000000000000000000000000000000000000001"});
		await BACMARSLPTOKENPoolB58dvWU.onlyRewardsDistribution.call({from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringzsVPxSh = "M8RsaWVeytkOWjZv7ewgrZdSKgQLjotmkAtk7B8bWSTftVEykxpYwV7IxAT4rEanOm1xpQj3f2epfi8vDaefm"
		const stringbtHGbVP = "pnYusIG5MHYB5BLDkLWeYLwqCOUwtkNszInLI45p6vMYs8whTEt66xDqoXyD8fzXQP4Zxea"
		const uintTn3y5zg = BigInt("176")
		const BACMARSLPTOKENPoolzzWuaw5 = await BACMARSLPTOKENPool.new(stringzsVPxSh, stringbtHGbVP, uintTn3y5zg, {from: "0x0000000000000000000000000000000000000001"});
		const uinte8INkAF = BigInt("79")
		const stringEFqDMPM = await BACMARSLPTOKENPoolzzWuaw5.symbol.call({from: accounts[2]});
		const uint256GOB3lS = await BACMARSLPTOKENPoolzzWuaw5.stake.call(uinte8INkAF, {from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringnGGgTlD = "it7QgCYYfhuAFZRt6PopU3DVwFko48GWy1ejNp6"
		const stringMjyBM7M = "Fqj8nPa3FYNwL2OwR4YG9Dq7e18dPw5NEcuFrdOUTjhC6amkK3b4hr6Dnc9lD8Y749xXCA1clRxm5hy48m2PIDRfYdk9tqVC"
		const uinttgJ812O = BigInt("69")
		const BACMARSLPTOKENPoolUyjX0h = await BACMARSLPTOKENPool.new(stringnGGgTlD, stringMjyBM7M, uinttgJ812O, {from: accounts[0]});
		const bytemzAciq = "0x151f090f120417060d0d01090e1914201a061b180a050b181b20151d191b0a14"
		const byteJNJaovd = "0x0b1a11090603071c0f0d071e1b1c101b13031f13170f1d020e0a081608061a06"
		const uintMr7ZBM7 = BigInt("101")
		const uintnQNw7Qo = BigInt("1043")
		const uintnoplidg = BigInt("450")
		const addressdyafL5K = accounts[3]
		const uintuWwRX5x = BigInt("603")
		const uint256kypw8GE = await BACMARSLPTOKENPoolUyjX0h.stakeWithPermit.call(uintnoplidg, uintnQNw7Qo, uintMr7ZBM7, byteJNJaovd, bytemzAciq, {from: accounts[5]});
		const addresslgCS2y = await BACMARSLPTOKENPoolUyjX0h.updateReward.call(addressdyafL5K, {from: accounts[3]});
		const uint256qjAlAyk = await BACMARSLPTOKENPoolUyjX0h.notifyRewardAmount.call(uintuWwRX5x, {from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringrnQgBwk = "oTCndIEOLXZXDi9s"
		const string6qzhZs = "BKiAhOFYpM4hvXOUWH7XlSCVoeyurJ2gpA16jEEtjNUgBmgyrEX6wnRyJt4LUAG8p8IJWjSVX5i0"
		const uintGmAngyM = BigInt("251")
		const BACMARSLPTOKENPoolDTDB4RK = await BACMARSLPTOKENPool.new(stringrnQgBwk, string6qzhZs, uintGmAngyM, {from: accounts[3]});
		const uintaaxTD1M = BigInt("375")
		const addressUK6skMj = accounts[0]
		const uint256VC78ok = await BACMARSLPTOKENPoolDTDB4RK.stake.call(uintaaxTD1M, {from: accounts[2]});
		const uint256lim7UZ4 = await BACMARSLPTOKENPoolDTDB4RK.rewardPerToken.call({from: accounts[3]});
		await BACMARSLPTOKENPoolDTDB4RK.exit.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256Z3KvzQp = await BACMARSLPTOKENPoolDTDB4RK.rewardPerToken.call({from: accounts[2]});
		const uint256zagWuL = await BACMARSLPTOKENPoolDTDB4RK.balanceOf.call(addressUK6skMj, {from: accounts[4]});
		const uint256TDimRl = await BACMARSLPTOKENPoolDTDB4RK.totalSupply.call({from: accounts[3]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringV9G7dGh = "F6er2Od93A3tE2cgAc"
		const stringgnkxE9c = "jmWkM9LFplwcwt41"
		const uinteIT5o18 = BigInt("234")
		const BACMARSLPTOKENPoolSaW5oND = await BACMARSLPTOKENPool.new(stringV9G7dGh, stringgnkxE9c, uinteIT5o18, {from: accounts[4]});
		const uintG9WbTM2 = BigInt("778")
		const addressy24xbgs = accounts[4]
		const uint256tr9LNX = await BACMARSLPTOKENPoolSaW5oND.getRewardForDuration.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256UhmWGi2 = await BACMARSLPTOKENPoolSaW5oND.rewardPerToken.call({from: accounts[4]});
		const uint256AgrYYuc = await BACMARSLPTOKENPoolSaW5oND.withdraw.call(uintG9WbTM2, {from: "0x0000000000000000000000000000000000000001"});
		const uint256sMhiBpA = await BACMARSLPTOKENPoolSaW5oND.getRewardForDuration.call({from: accounts[3]});
		const uint256Tma0lf = await BACMARSLPTOKENPoolSaW5oND.balanceOf.call(addressy24xbgs, {from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringNyYfdkw = "BJwtHzoJ"
		const stringC2tBZNO = "9meG2rdE4Ub9O2WjOjk44l46"
		const uintZ9WTrv4 = BigInt("38")
		const BACMARSLPTOKENPoolwwbwjD = await BACMARSLPTOKENPool.new(stringNyYfdkw, stringC2tBZNO, uintZ9WTrv4, {from: accounts[5]});
		const addressTj6oT2Z = accounts[3]
		const addresspOJLDpg = accounts[2]
		const uint256NYmUCYx = await BACMARSLPTOKENPoolwwbwjD.earned.call(addressTj6oT2Z, {from: accounts[0]});
		await BACMARSLPTOKENPoolwwbwjD.getReward.call({from: accounts[0]});
		await BACMARSLPTOKENPoolwwbwjD.onlyRewardsDistribution.call({from: accounts[5]});
		const uint256s7msWH9 = await BACMARSLPTOKENPoolwwbwjD.balanceOf.call(addresspOJLDpg, {from: accounts[0]});
		const uint256uy107TD = await BACMARSLPTOKENPoolwwbwjD.getRewardForDuration.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringx9qCeEB = "kxcUnPD0l9xp4YaGU54SXsWldxnhy76ZOxFWKnqfipPU3KVxgkMasbrQ2flumE6wsQob5nxESgw9btdKTbGWLqfz4mfxxBniVG"
		const stringrWCgTv5 = "J4coNpwU8Twp47qvPidMZ5LAMrrHYVGwQohL2CzESjI5M2bITew"
		const uintGCVJbao = BigInt("243")
		const BACMARSLPTOKENPoolr1sPHVA = await BACMARSLPTOKENPool.new(stringx9qCeEB, stringrWCgTv5, uintGCVJbao, {from: accounts[5]});
		const uinthGcq6wc = BigInt("827")
		const uint8bsVmGbd = await BACMARSLPTOKENPoolr1sPHVA.decimals.call({from: accounts[1]});
		await BACMARSLPTOKENPoolr1sPHVA.exit.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256xMY4fX = await BACMARSLPTOKENPoolr1sPHVA.stake.call(uinthGcq6wc, {from: accounts[0]});
		const uint256VD31QG = await BACMARSLPTOKENPoolr1sPHVA.totalSupply.call({from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringhAvyDDO = "ErvedwUTgBLUDs"
		const stringOVOrDI = "wzFTCZqlECF2"
		const uints5bveov = BigInt("236")
		const BACMARSLPTOKENPoolpu53yEg = await BACMARSLPTOKENPool.new(stringhAvyDDO, stringOVOrDI, uints5bveov, {from: accounts[4]});
		const uintXoTyEFH = BigInt("2011")
		const stringlKG3I0C = await BACMARSLPTOKENPoolpu53yEg.symbol.call({from: accounts[0]});
		const uint256aaukOro = await BACMARSLPTOKENPoolpu53yEg.withdraw.call(uintXoTyEFH, {from: accounts[3]});
		const uint256h0r6kCF = await BACMARSLPTOKENPoolpu53yEg.rewardPerToken.call({from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringLsTsAZF = "JJO2uQaTyl"
		const stringySeUvni = "hqm8fh0s7LCjinWNbO2VYeueX2Oq4Rb3yhIhSdngKEJ4fUPyirfWU3jRUV3JodXBYqgXRzlkAJmqZj7R"
		const uintGRlaHG = BigInt("237")
		const BACMARSLPTOKENPoolXK8JEyh = await BACMARSLPTOKENPool.new(stringLsTsAZF, stringySeUvni, uintGRlaHG, {from: accounts[4]});
		const uint8hOSow8 = await BACMARSLPTOKENPoolXK8JEyh.decimals.call({from: "0x0000000000000000000000000000000000000001"});
		await BACMARSLPTOKENPoolXK8JEyh.exit.call({from: accounts[2]});
		const uint256FJx8bra = await BACMARSLPTOKENPoolXK8JEyh.getRewardForDuration.call({from: accounts[3]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringDbEWq8 = "MNOSdl4Lcq3RL8d"
		const stringXjIWLBU = "Ie8sSsOO"
		const uintJooDptf = BigInt("155")
		const BACMARSLPTOKENPoolPzyot1n = await BACMARSLPTOKENPool.new(stringDbEWq8, stringXjIWLBU, uintJooDptf, {from: accounts[4]});
		await BACMARSLPTOKENPoolPzyot1n.onlyRewardsDistribution.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256YDefEPf = await BACMARSLPTOKENPoolPzyot1n.getRewardForDuration.call({from: accounts[2]});
		const uint256FuVmKrY = await BACMARSLPTOKENPoolPzyot1n.lastTimeRewardApplicable.call({from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringwFFYUxX = "fjEhzNuT"
		const stringOW6Hpgl = "ximihgVOGsoWm6DcQNYlVPbXa8CPldiLxTEv9B2Yj2IdDPyNnxgXWdDawAGnHQmHkX7pSf6rBlL74SSGW"
		const uintCtjmec = BigInt("48")
		const BACMARSLPTOKENPoolwMBreOq = await BACMARSLPTOKENPool.new(stringwFFYUxX, stringOW6Hpgl, uintCtjmec, {from: accounts[0]});
		const addressvRuGwGX = accounts[2]
		const uintQXfhFA8 = BigInt("359")
		const uint256o43HARu = await BACMARSLPTOKENPoolwMBreOq.balanceOf.call(addressvRuGwGX, {from: accounts[0]});
		const uint256GugJUQP = await BACMARSLPTOKENPoolwMBreOq.withdraw.call(uintQXfhFA8, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringSulvsSR = "orIjQet4"
		const stringGcc8UZj = "GtIt5wsyUif75BjkDDxuWRMaBqdHxZbCdpOAj2YfHa4n6"
		const uintHZFstJ5 = BigInt("252")
		const BACMARSLPTOKENPoolyOkUro3 = await BACMARSLPTOKENPool.new(stringSulvsSR, stringGcc8UZj, uintHZFstJ5, {from: accounts[0]});
		const uintgpXCrtQ = BigInt("2029")
		const addressuO4qklm = accounts[2]
		const addressRBfy0fK = accounts[2]
		const uint256Wa269cm = await BACMARSLPTOKENPoolyOkUro3.withdraw.call(uintgpXCrtQ, {from: accounts[2]});
		const uint256ArgdvOr = await BACMARSLPTOKENPoolyOkUro3.earned.call(addressuO4qklm, {from: accounts[4]});
		const uint256sn1VnEP = await BACMARSLPTOKENPoolyOkUro3.earned.call(addressRBfy0fK, {from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringTkP7sh = "pRyyI8dpCsNWfgSyRzgTOkrsoKA7QLx6UQHnAPaU7NZuChRLLkvuM8nfZV6zIBbzemV2mc73r7tck3GOByXwLr2UM"
		const stringBTj97kL = "Gk3dInwa8mPSEiZxRDXLk3m9tQsH26khw2DKZmWS5OL3P8CLK1"
		const uintwlzvH1t = BigInt("189")
		const BACMARSLPTOKENPoolqtE3Fyt = await BACMARSLPTOKENPool.new(stringTkP7sh, stringBTj97kL, uintwlzvH1t, {from: "0x0000000000000000000000000000000000000001"});
		const uintQz1w07F = BigInt("432")
		const addresswXhgwA8 = accounts[0]
		const uintPcsJFIw = BigInt("905")
		const uint256TzZhYHi = await BACMARSLPTOKENPoolqtE3Fyt.stake.call(uintQz1w07F, {from: accounts[1]});
		const uint256JLc5RhD = await BACMARSLPTOKENPoolqtE3Fyt.earned.call(addresswXhgwA8, {from: accounts[5]});
		const uint256XzgOVKR = await BACMARSLPTOKENPoolqtE3Fyt.stake.call(uintPcsJFIw, {from: accounts[3]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringsDHumi3 = "cfSeq"
		const stringZnWkPbA = "6H7iHZL6H5F1ih2NzAjCk2T4RecJDkzNDdYgGcVb3d5tC11jDZ6wqK2fUoV8mXFerh1s5sQF1LM3fFggL4"
		const uintt4j924o = BigInt("138")
		const BACMARSLPTOKENPoolMRdFWTg = await BACMARSLPTOKENPool.new(stringsDHumi3, stringZnWkPbA, uintt4j924o, {from: "0x0000000000000000000000000000000000000001"});
		const bytepEMmyyx = "0x15190f1a0a14031b0009080a0d1f09090e1e1b1a1f041e1c12031203030a1b05"
		const byteapOk6bV = "0x110d190f190a150e0f0907110d001513170d05081f1f090c011510200612060f"
		const uintsOeuFy = BigInt("99")
		const uintDwijjWu = BigInt("998")
		const uintosi0ob = BigInt("259")
		const uint256pybc1Zp = await BACMARSLPTOKENPoolMRdFWTg.lastTimeRewardApplicable.call({from: accounts[1]});
		const uint256A9L7g7U = await BACMARSLPTOKENPoolMRdFWTg.stakeWithPermit.call(uintosi0ob, uintDwijjWu, uintsOeuFy, byteapOk6bV, bytepEMmyyx, {from: accounts[2]});
		await BACMARSLPTOKENPoolMRdFWTg.exit.call({from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringGU3C5ny = "wKcRBjF4uqhRGfJVEXfmbFm43utNuOMAgOLSsLsGEHcBI7PuIcTR8Lsi6"
		const stringP9vCK95 = "8LsYvSUFk6JS5zIPFhAZW1fjYvrOGwkfW8IK"
		const uintiNT0cfl = BigInt("28")
		const BACMARSLPTOKENPoolHGAtIxV = await BACMARSLPTOKENPool.new(stringGU3C5ny, stringP9vCK95, uintiNT0cfl, {from: accounts[2]});
		const uintxZcT0YC = BigInt("1238")
		const uint256iCdTwp7 = await BACMARSLPTOKENPoolHGAtIxV.withdraw.call(uintxZcT0YC, {from: accounts[1]});
		await BACMARSLPTOKENPoolHGAtIxV.onlyRewardsDistribution.call({from: accounts[1]});
		await BACMARSLPTOKENPoolHGAtIxV.onlyRewardsDistribution.call({from: accounts[1]});
		const uint256ncYhywf = await BACMARSLPTOKENPoolHGAtIxV.getRewardForDuration.call({from: accounts[4]});
		const uint256i92Y7cd = await BACMARSLPTOKENPoolHGAtIxV.totalSupply.call({from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringuaI7Msc = "pyPETBdkt5WkL3LFHRBd8W3dFAP2oB826VoUcIyBt"
		const stringNKF9S0j = "r1a4jU4s"
		const uintxNdMqA0 = BigInt("63")
		const BACMARSLPTOKENPoolDZyv3EA = await BACMARSLPTOKENPool.new(stringuaI7Msc, stringNKF9S0j, uintxNdMqA0, {from: accounts[0]});
		const uint256l3fO9jP = await BACMARSLPTOKENPoolDZyv3EA.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
		await BACMARSLPTOKENPoolDZyv3EA.getReward.call({from: accounts[4]});
		const uint8el4G5sF = await BACMARSLPTOKENPoolDZyv3EA.decimals.call({from: "0x0000000000000000000000000000000000000001"});
		await BACMARSLPTOKENPoolDZyv3EA.onlyRewardsDistribution.call({from: accounts[4]});
		await BACMARSLPTOKENPoolDZyv3EA.exit.call({from: accounts[5]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringv1Q7e6T = "IUxaEokuuGCx3Iruq7xystTYkE0larNlT2I3KD8RPfWE3grhezWFaeSuVPn"
		const stringuUNxhbq = "CvzxPAa"
		const uintL2HN9Nn = BigInt("167")
		const BACMARSLPTOKENPoolxek24M4 = await BACMARSLPTOKENPool.new(stringv1Q7e6T, stringuUNxhbq, uintL2HN9Nn, {from: accounts[2]});
		const uints02XPBd = BigInt("622")
		const uint256hc2WkoG = await BACMARSLPTOKENPoolxek24M4.withdraw.call(uints02XPBd, {from: accounts[2]});
		const uint256SDtyBfG = await BACMARSLPTOKENPoolxek24M4.rewardPerToken.call({from: accounts[0]});
		const uint256sO9Qze0 = await BACMARSLPTOKENPoolxek24M4.rewardPerToken.call({from: accounts[0]});
		const stringiail5df = await BACMARSLPTOKENPoolxek24M4.name.call({from: accounts[4]});
		await BACMARSLPTOKENPoolxek24M4.nonReentrant.call({from: accounts[2]});
		await BACMARSLPTOKENPoolxek24M4.getReward.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringztPvXS7 = "BjCGTYutvdk66CuYgoHMGUWclSxUougGLKL"
		const stringMgq03pQ = "AVC2f7N57oMOl9r1LISST5z8mttKe1"
		const uintzW8zZCx = BigInt("31")
		const BACMARSLPTOKENPoolSzXUTId = await BACMARSLPTOKENPool.new(stringztPvXS7, stringMgq03pQ, uintzW8zZCx, {from: accounts[4]});
		const uintKZuVYW7 = BigInt("1360")
		const addressbsuCVUQ = accounts[3]
		await BACMARSLPTOKENPoolSzXUTId.onlyRewardsDistribution.call({from: accounts[2]});
		const uint256rF1q8xA = await BACMARSLPTOKENPoolSzXUTId.stake.call(uintKZuVYW7, {from: "0x0000000000000000000000000000000000000001"});
		const uint256SXWE1c1 = await BACMARSLPTOKENPoolSzXUTId.getRewardForDuration.call({from: accounts[1]});
		const addresspBDkzdS = await BACMARSLPTOKENPoolSzXUTId.updateReward.call(addressbsuCVUQ, {from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringBAqwure = "uTfWCRSva85mSrL0WCttbNlzyfl"
		const stringWb7qS8B = "73BKwTgT562WYl3uRLNbdbGEQWPtYUDGG4IL4z8Rgc75dSd6gurFdNaSKIDZYACglYDBvxFX6kuvsJmCl3H6LGwtk"
		const uintktnVr5b = BigInt("32")
		const BACMARSLPTOKENPoolHeOXL1S = await BACMARSLPTOKENPool.new(stringBAqwure, stringWb7qS8B, uintktnVr5b, {from: accounts[1]});
		const addressPnlNEiI = accounts[1]
		const byte5VXMJO = "0x141004050e20100e0416110f051b1b030a0e121e101a1b070d20161c010a0311"
		const byteoSxqZiz = "0x101810090e1d01160b1f0b0712100e051f1c0e0b0c0801080b11011f0106130c"
		const uinthhs7be = BigInt("188")
		const uint5uykAK = BigInt("219")
		const uintTVpPfi5 = BigInt("1422")
		const uint256H3LqfLb = await BACMARSLPTOKENPoolHeOXL1S.earned.call(addressPnlNEiI, {from: "0x0000000000000000000000000000000000000001"});
		const uint256MPubOAb = await BACMARSLPTOKENPoolHeOXL1S.getRewardForDuration.call({from: accounts[4]});
		const uint2566hh4pl = await BACMARSLPTOKENPoolHeOXL1S.stakeWithPermit.call(uintTVpPfi5, uint5uykAK, uinthhs7be, byteoSxqZiz, byte5VXMJO, {from: accounts[1]});
		await BACMARSLPTOKENPoolHeOXL1S.getReward.call({from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringhzouYkC = "MTt88z8zWXeaWJ"
		const stringHrwO4gb = "cHyJq2SbD3AyEufSpvrQtmMEX1LRNV5oeq3nynJqyJ8u9jCgPJvJtKWw3nvggrxv6sabpDgcglgQUKXz96Vy3"
		const uintiWgvJM4 = BigInt("244")
		const BACMARSLPTOKENPoolG0xg1T6 = await BACMARSLPTOKENPool.new(stringhzouYkC, stringHrwO4gb, uintiWgvJM4, {from: accounts[4]});
		const addressU1ZpqUn = accounts[2]
		await BACMARSLPTOKENPoolG0xg1T6.exit.call({from: accounts[5]});
		await BACMARSLPTOKENPoolG0xg1T6.exit.call({from: accounts[2]});
		const addressttEwE6 = await BACMARSLPTOKENPoolG0xg1T6.updateReward.call(addressU1ZpqUn, {from: accounts[5]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const string5MO9Yv = "lKVYcNGS5YBmRdr1vPesiQej8ZaMj5g54qYue4yIX4t3P5PB3"
		const stringJIgyISf = "4DpFgeFiyXhMr2aQXIyA6we4fyNS6nP0nroWYstkhHHgAi13Wxy4vlFcHFNRbE2zpvF5PTqQ1nJusfvyIlg9LMq5"
		const uintQgBgYwK = BigInt("67")
		const BACMARSLPTOKENPoolwqKaDQN = await BACMARSLPTOKENPool.new(string5MO9Yv, stringJIgyISf, uintQgBgYwK, {from: accounts[3]});
		const uintcoUEjO1 = BigInt("864")
		const byteVfNVbRl = "0x121b19100a041b0c1b1a0618140d0601090c1a01070f140803160102141d1011"
		const byteaFyEjnf = "0x0b0c1e0a1313121e131c1e161906020c03131a1617160a1d141119151f162008"
		const uinttJtpRSx = BigInt("167")
		const uintgKByW1O = BigInt("1531")
		const uintkoMMbvD = BigInt("351")
		const uint256JAUlCWo = await BACMARSLPTOKENPoolwqKaDQN.withdraw.call(uintcoUEjO1, {from: accounts[1]});
		const stringSEGxks = await BACMARSLPTOKENPoolwqKaDQN.symbol.call({from: accounts[4]});
		const uint256o1j18J = await BACMARSLPTOKENPoolwqKaDQN.stakeWithPermit.call(uintkoMMbvD, uintgKByW1O, uinttJtpRSx, byteaFyEjnf, byteVfNVbRl, {from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringnri4FeM = "BC6jMnQvx4Ld12s"
		const stringp1lfkyW = "g338"
		const uintv5WBVi1 = BigInt("169")
		const BACMARSLPTOKENPoolpXhLKoZ = await BACMARSLPTOKENPool.new(stringnri4FeM, stringp1lfkyW, uintv5WBVi1, {from: accounts[4]});
		const addressG1ciDOD = "0x0000000000000000000000000000000000000001"
		await BACMARSLPTOKENPoolpXhLKoZ.getReward.call({from: accounts[3]});
		const uint256nzq99f0 = await BACMARSLPTOKENPoolpXhLKoZ.balanceOf.call(addressG1ciDOD, {from: accounts[2]});
		const uint256iWCeTVL = await BACMARSLPTOKENPoolpXhLKoZ.lastTimeRewardApplicable.call({from: accounts[0]});
		const uint256DyNPDsA = await BACMARSLPTOKENPoolpXhLKoZ.totalSupply.call({from: accounts[3]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringrxBeIkI = "GmuOgy9I1EVh8YYpNNdV8jit8iF0abwrNXa4bm0U8yKFFTEAdvFlw7WpUkCdJ8kDAAHT4dm5dgn6ThYy"
		const stringpiUJ2Od = "6gPajBlaSDNakripO6tK8gt5QCm8OODIL0gfa1XCvGGFc7kbNIpUlwtWbnRIZ1NSj6GWGE42kXzyGTNZb"
		const uintRg2gMGa = BigInt("255")
		const BACMARSLPTOKENPoolCJPrh6b = await BACMARSLPTOKENPool.new(stringrxBeIkI, stringpiUJ2Od, uintRg2gMGa, {from: accounts[2]});
		const byteAIYNc2A = "0x1213160909121e1d141a141c05141400030314100f1002031519180d140d0b1c"
		const byteQE34Xda = "0x1907070715131701050214020d16150d1905060f131b081a0b170f0c141f1904"
		const uintEp26Jd = BigInt("4")
		const uintVcoi3mw = BigInt("1583")
		const uintgnyPiJ8 = BigInt("1201")
		const uintrJpyNk = BigInt("241")
		const addressL1EX7qw = "0x0000000000000000000000000000000000000001"
		const uint256Q18QdjF = await BACMARSLPTOKENPoolCJPrh6b.stakeWithPermit.call(uintgnyPiJ8, uintVcoi3mw, uintEp26Jd, byteQE34Xda, byteAIYNc2A, {from: accounts[0]});
		const uint256yVBUDjv = await BACMARSLPTOKENPoolCJPrh6b.getRewardForDuration.call({from: accounts[1]});
		await BACMARSLPTOKENPoolCJPrh6b.exit.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256mGxCO56 = await BACMARSLPTOKENPoolCJPrh6b.notifyRewardAmount.call(uintrJpyNk, {from: accounts[2]});
		const addressdcCx3jL = await BACMARSLPTOKENPoolCJPrh6b.updateReward.call(addressL1EX7qw, {from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringPu0cBj3 = "RzCQVc7"
		const stringpvUwury = "6lLNOXNnDZoshot1LPRqw8fGu"
		const uintM9queh1 = BigInt("148")
		const BACMARSLPTOKENPoolVzCWnb2 = await BACMARSLPTOKENPool.new(stringPu0cBj3, stringpvUwury, uintM9queh1, {from: accounts[3]});
		await BACMARSLPTOKENPoolVzCWnb2.onlyRewardsDistribution.call({from: accounts[0]});
		const uint256oGgFLlX = await BACMARSLPTOKENPoolVzCWnb2.getRewardForDuration.call({from: accounts[2]});
		const stringOO27Zf5 = await BACMARSLPTOKENPoolVzCWnb2.name.call({from: accounts[0]});
		const stringZHK80Ak = await BACMARSLPTOKENPoolVzCWnb2.symbol.call({from: accounts[4]});
		await BACMARSLPTOKENPoolVzCWnb2.exit.call({from: accounts[3]});
		const uint256WmTJLkX = await BACMARSLPTOKENPoolVzCWnb2.lastTimeRewardApplicable.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringmXxh5FK = "e63xlaHG2QdUeoCR2VGMdEszOub2gkYFGZqjAN5Wh"
		const stringdBAUqa = "LZFUdw27h9vR3gLh2xwHXtkY7MzdFMx8yaStAsRf1K2CwBSJguxO4mXeCrbsoJBDoDEvVRKBEWUadOTrIffww4ISt7DjcGR"
		const uintC2unLaN = BigInt("156")
		const BACMARSLPTOKENPoolv7r8h2 = await BACMARSLPTOKENPool.new(stringmXxh5FK, stringdBAUqa, uintC2unLaN, {from: accounts[5]});
		const addressKWUU0y = accounts[1]
		const byteHiJSE6h = "0x1b04130a1116160e1712051f010b1b0e0a1f08001a0a011602110b041708141f"
		const bytegpv2ujY = "0x1b09190116121108090508171a050c1c1f0c11050d181e060601081f0a120e1e"
		const uintDyPEPIB = BigInt("65")
		const uintzjqM6Pm = BigInt("1712")
		const uintkSmaTB7 = BigInt("181")
		await BACMARSLPTOKENPoolv7r8h2.getReward.call({from: accounts[0]});
		const uint256DlgAXFB = await BACMARSLPTOKENPoolv7r8h2.totalSupply.call({from: accounts[5]});
		await BACMARSLPTOKENPoolv7r8h2.exit.call({from: accounts[3]});
		const uint256AGcHeW4 = await BACMARSLPTOKENPoolv7r8h2.balanceOf.call(addressKWUU0y, {from: accounts[0]});
		const uint256NYk48Bp = await BACMARSLPTOKENPoolv7r8h2.stakeWithPermit.call(uintkSmaTB7, uintzjqM6Pm, uintDyPEPIB, bytegpv2ujY, byteHiJSE6h, {from: accounts[1]});
	});
})