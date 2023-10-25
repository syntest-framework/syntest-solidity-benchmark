const BACMARSLPTOKENPool = artifacts.require("BACMARSLPTOKENPool");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('BACMARSLPTOKENPool', (accounts) => {
	it('test for BACMARSLPTOKENPool', async () => {
		const addressvDSSscd = accounts[1]
		const addressza5TuPV = accounts[1]
		const addressD5tzuNl = accounts[2]
		const BACMARSLPTOKENPoolvJ01sWr = await BACMARSLPTOKENPool.new(addressvDSSscd, addressza5TuPV, addressD5tzuNl, {from: accounts[4]});
		const addressXXqpqo6 = accounts[0]
		await BACMARSLPTOKENPoolvJ01sWr.onlyRewardsDistribution.call({from: accounts[3]});
		const uint256QcjIMVj = await BACMARSLPTOKENPoolvJ01sWr.earned.call(addressXXqpqo6, {from: accounts[2]});

		await expect(BACMARSLPTOKENPoolvJ01sWr.onlyRewardsDistribution.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringXlTUNJs = "sTa3Cvo6DnuLR06KU4c6oG3sYtHykcwQbasIqcewEiYAPYj85x"
		const stringZzeoi0x = "M92UjlColW8B3jLbhwxqjFPiAk8RxGHBjrgIeHL07fOqCsQTaUVP1snA6igeI"
		const uintXybQ9dl = BigInt("201")
		const BACMARSLPTOKENPooll4llJf = await BACMARSLPTOKENPool.new(stringXlTUNJs, stringZzeoi0x, uintXybQ9dl, {from: accounts[0]});
		const uinttCCPpEO = BigInt("1400")
		const uintXVyJQ2J = BigInt("1322")
		const uint256j60YeO7 = await BACMARSLPTOKENPooll4llJf.notifyRewardAmount.call(uinttCCPpEO, {from: accounts[1]});
		const uint256jqOX093 = await BACMARSLPTOKENPooll4llJf.notifyRewardAmount.call(uintXVyJQ2J, {from: accounts[3]});
		await BACMARSLPTOKENPooll4llJf.exit.call({from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const string1zwOFx = "65174nUDPMOJ1fIL6VZGLf7jnHJxJIPnqMHv7mcgSCbEgNk2NeBriVtpWnnx9lLrqv6qlzSiMocr2PInidsXA"
		const string9LgEUB = "UH96YEnNQpa44wN7kOGobckB7HLp3DRpTCeXgnC62Kjoj0SdZlEQDPQOh9DS50rJjRmPLjPnLVD4h3PYqb6LR7CPBWlInRn"
		const uinti60PPZI = BigInt("60")
		const BACMARSLPTOKENPoolG3KrjZq = await BACMARSLPTOKENPool.new(string1zwOFx, string9LgEUB, uinti60PPZI, {from: accounts[2]});
		await BACMARSLPTOKENPoolG3KrjZq.exit.call({from: accounts[4]});
		await BACMARSLPTOKENPoolG3KrjZq.onlyRewardsDistribution.call({from: "0x0000000000000000000000000000000000000001"});
		const uint8ZhDdql1 = await BACMARSLPTOKENPoolG3KrjZq.decimals.call({from: accounts[5]});
		await BACMARSLPTOKENPoolG3KrjZq.exit.call({from: accounts[3]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const string51tyg4 = "ExlIA8OngWGOoGP2TqT96oBsWgXRcQ"
		const string7kgBr0 = "mDX3lbLnTmPAF6L4qUdG2OE1AVOsjlaCtP6P6ar1W4kgfUrdeWyyiRXooG9AOVnlCh5Rb2"
		const uintOpUFvmb = BigInt("205")
		const BACMARSLPTOKENPoolKcSdVp = await BACMARSLPTOKENPool.new(string51tyg4, string7kgBr0, uintOpUFvmb, {from: accounts[5]});
		const uintUTa5eAa = BigInt("1064")
		const uintyM9AGaQ = BigInt("619")
		await BACMARSLPTOKENPoolKcSdVp.exit.call({from: accounts[4]});
		const uint256DEcOGc7 = await BACMARSLPTOKENPoolKcSdVp.stake.call(uintUTa5eAa, {from: accounts[4]});
		const uint256KQ5P1mC = await BACMARSLPTOKENPoolKcSdVp.withdraw.call(uintyM9AGaQ, {from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressYPU0Zax = accounts[4]
		const addressNEyqGh = accounts[3]
		const addressIEj7oPo = accounts[4]
		const BACMARSLPTOKENPoolpPkx3ta = await BACMARSLPTOKENPool.new(addressYPU0Zax, addressNEyqGh, addressIEj7oPo, {from: accounts[4]});
		const uintdnKXjV = BigInt("284")
		const uint256mI9GRRJ = await BACMARSLPTOKENPoolpPkx3ta.lastTimeRewardApplicable.call({from: accounts[3]});
		await BACMARSLPTOKENPoolpPkx3ta.nonReentrant.call({from: accounts[0]});
		const uint256INHKpPZ = await BACMARSLPTOKENPoolpPkx3ta.stake.call(uintdnKXjV, {from: accounts[4]});
		await BACMARSLPTOKENPoolpPkx3ta.nonReentrant.call({from: accounts[3]});

		assert.equal(uint256mI9GRRJ, BigInt("0"))
		await expect(BACMARSLPTOKENPoolpPkx3ta.nonReentrant.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressuigZbJf = accounts[3]
		const addressGBP86rO = accounts[0]
		const addressu9MbitR = accounts[2]
		const BACMARSLPTOKENPoolgkZ6xW = await BACMARSLPTOKENPool.new(addressuigZbJf, addressGBP86rO, addressu9MbitR, {from: accounts[2]});
		const byteIWmHVrD = "0x120f1a0813021411071314060e15120a021e0b140a02151e06061613120b1205"
		const byteREQL6j4 = "0x0911100614051f180706130307021603011c0918120b1f1f131a170f171a021c"
		const uintLUnGTvS = BigInt("228")
		const uintP2JQJC = BigInt("1286")
		const uintOGSgTf4 = BigInt("355")
		const uintqrqE8c4 = BigInt("562")
		const uint256khAerOz = await BACMARSLPTOKENPoolgkZ6xW.stakeWithPermit.call(uintOGSgTf4, uintP2JQJC, uintLUnGTvS, byteREQL6j4, byteIWmHVrD, {from: accounts[5]});
		await BACMARSLPTOKENPoolgkZ6xW.onlyRewardsDistribution.call({from: accounts[1]});
		const uint8PP8ODkl = await BACMARSLPTOKENPoolgkZ6xW.decimals.call({from: accounts[1]});
		const uint256WO5vgoB = await BACMARSLPTOKENPoolgkZ6xW.notifyRewardAmount.call(uintqrqE8c4, {from: accounts[1]});

		await expect(BACMARSLPTOKENPoolgkZ6xW.stakeWithPermit.call(uintOGSgTf4, uintP2JQJC, uintLUnGTvS, byteREQL6j4, byteIWmHVrD, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringPsdJbfG = "9uzTNcOtY31z5vqTn1lPDq3kyuIMefUoMzMY2B3tLSmpw1bZmmfOArhUJbpQMEWqhKgvwO2PplUIkAMvP6TxuEG"
		const stringJXBi8y = "wUUISv2Bhwq"
		const uintNGRyEVq = BigInt("121")
		const BACMARSLPTOKENPoolhdNvQzn = await BACMARSLPTOKENPool.new(stringPsdJbfG, stringJXBi8y, uintNGRyEVq, {from: accounts[0]});
		const uintEEHZ3Rl = BigInt("486")
		const addressfWviIR3 = accounts[2]
		const uint256uste3zU = await BACMARSLPTOKENPoolhdNvQzn.stake.call(uintEEHZ3Rl, {from: accounts[4]});
		await BACMARSLPTOKENPoolhdNvQzn.exit.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256umsk66 = await BACMARSLPTOKENPoolhdNvQzn.totalSupply.call({from: accounts[0]});
		const uint256bnmpiGf = await BACMARSLPTOKENPoolhdNvQzn.earned.call(addressfWviIR3, {from: accounts[3]});
		await BACMARSLPTOKENPoolhdNvQzn.nonReentrant.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressteY477T = accounts[0]
		const addressIjDZGqb = "0x0000000000000000000000000000000000000001"
		const addressI7xedoC = accounts[5]
		const BACMARSLPTOKENPoolfsB1XIV = await BACMARSLPTOKENPool.new(addressteY477T, addressIjDZGqb, addressI7xedoC, {from: accounts[2]});
		await BACMARSLPTOKENPoolfsB1XIV.getReward.call({from: accounts[4]});
		const uint256bu5TS3p = await BACMARSLPTOKENPoolfsB1XIV.rewardPerToken.call({from: accounts[5]});
		const uint256JdDssm = await BACMARSLPTOKENPoolfsB1XIV.lastTimeRewardApplicable.call({from: accounts[3]});

		await expect(BACMARSLPTOKENPoolfsB1XIV.getReward.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringr1iFW5X = "NV3r8pIGvnUtjaNRX5a52sVOg9PELlCRehh1kabOOlrN9ffnulV4Ou8bxNPjcI2pvWLuBxtJklYoADkwBHsld"
		const stringTIp9Ek4 = "OAEJ1h96OTUTqPvH7HgOfYIwPrXAnIvWoNfB9W"
		const uintseAL1kf = BigInt("82")
		const BACMARSLPTOKENPoolP9xmHnq = await BACMARSLPTOKENPool.new(stringr1iFW5X, stringTIp9Ek4, uintseAL1kf, {from: accounts[3]});
		const addressg7yJBe7 = accounts[2]
		const uint256IdOjAtP = await BACMARSLPTOKENPoolP9xmHnq.totalSupply.call({from: accounts[3]});
		const uint256cQBdKhu = await BACMARSLPTOKENPoolP9xmHnq.earned.call(addressg7yJBe7, {from: accounts[5]});
		const uint8cJha3gW = await BACMARSLPTOKENPoolP9xmHnq.decimals.call({from: accounts[4]});
		await BACMARSLPTOKENPoolP9xmHnq.onlyRewardsDistribution.call({from: accounts[0]});
		const uint256PQ0meO0 = await BACMARSLPTOKENPoolP9xmHnq.getRewardForDuration.call({from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressMvS5OT = accounts[0]
		const addressjFG3N9 = "0x0000000000000000000000000000000000000001"
		const addressI7rDaNw = accounts[5]
		const BACMARSLPTOKENPoolfsB1XIV = await BACMARSLPTOKENPool.new(addressMvS5OT, addressjFG3N9, addressI7rDaNw, {from: accounts[2]});
		await BACMARSLPTOKENPoolfsB1XIV.getReward.call({from: accounts[4]});
		const uint256yNwa5Yj = await BACMARSLPTOKENPoolfsB1XIV.totalSupply.call({from: accounts[2]});
		const uint256bu5TS3p = await BACMARSLPTOKENPoolfsB1XIV.rewardPerToken.call({from: accounts[5]});
		const uint256JdDssm = await BACMARSLPTOKENPoolfsB1XIV.lastTimeRewardApplicable.call({from: accounts[3]});

		await expect(BACMARSLPTOKENPoolfsB1XIV.getReward.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressmJMXRo6 = accounts[3]
		const addressscyQ8Vc = accounts[0]
		const addressdZkE5oz = accounts[2]
		const BACMARSLPTOKENPoolgkZ6xW = await BACMARSLPTOKENPool.new(addressmJMXRo6, addressscyQ8Vc, addressdZkE5oz, {from: accounts[2]});
		const byteQBgRwTJ = "0x120f1a0813021411071314060e15120a021e0b140a02151e06061613120b1205"
		const bytei8hePdl = "0x0911100614051f180706130307021603011c0918120b1f1f131a170f171a021c"
		const uintFQYtDSa = BigInt("228")
		const uintJ2AkPe5 = BigInt("1286")
		const uintE0WtNlS = BigInt("355")
		const uinteRpyULH = BigInt("562")
		await BACMARSLPTOKENPoolgkZ6xW.exit.call({from: accounts[0]});
		const uint256khAerOz = await BACMARSLPTOKENPoolgkZ6xW.stakeWithPermit.call(uintE0WtNlS, uintJ2AkPe5, uintFQYtDSa, bytei8hePdl, byteQBgRwTJ, {from: accounts[5]});
		await BACMARSLPTOKENPoolgkZ6xW.onlyRewardsDistribution.call({from: accounts[1]});
		const uint8PP8ODkl = await BACMARSLPTOKENPoolgkZ6xW.decimals.call({from: accounts[1]});
		const uint256WO5vgoB = await BACMARSLPTOKENPoolgkZ6xW.notifyRewardAmount.call(uinteRpyULH, {from: accounts[1]});

		await expect(BACMARSLPTOKENPoolgkZ6xW.exit.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressNCr5NnD = accounts[0]
		const addressqa3tAh3 = "0x0000000000000000000000000000000000000001"
		const addressenEACHR = accounts[5]
		const BACMARSLPTOKENPoolfsB1XIV = await BACMARSLPTOKENPool.new(addressNCr5NnD, addressqa3tAh3, addressenEACHR, {from: accounts[2]});
		await BACMARSLPTOKENPoolfsB1XIV.getReward.call({from: accounts[4]});
		const uint256JdDssm = await BACMARSLPTOKENPoolfsB1XIV.lastTimeRewardApplicable.call({from: accounts[3]});

		await expect(BACMARSLPTOKENPoolfsB1XIV.getReward.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addresszAC0nIJ = accounts[0]
		const addressRftKjRk = "0x0000000000000000000000000000000000000001"
		const addressrUrE6O7 = accounts[5]
		const BACMARSLPTOKENPoolfsB1XIV = await BACMARSLPTOKENPool.new(addresszAC0nIJ, addressRftKjRk, addressrUrE6O7, {from: accounts[2]});
		const uintrL20Amr = BigInt("1635")
		const uintYTgx3PU = BigInt("113")
		await BACMARSLPTOKENPoolfsB1XIV.getReward.call({from: accounts[4]});
		const uint256bu5TS3p = await BACMARSLPTOKENPoolfsB1XIV.rewardPerToken.call({from: accounts[5]});
		const uint256fLy2R8K = await BACMARSLPTOKENPoolfsB1XIV.notifyRewardAmount.call(uintrL20Amr, {from: accounts[2]});
		const uint256vJMYLW9 = await BACMARSLPTOKENPoolfsB1XIV.notifyRewardAmount.call(uintYTgx3PU, {from: "0x0000000000000000000000000000000000000001"});
		const uint256JdDssm = await BACMARSLPTOKENPoolfsB1XIV.lastTimeRewardApplicable.call({from: accounts[3]});

		await expect(BACMARSLPTOKENPoolfsB1XIV.getReward.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressRrPMQ6v = accounts[1]
		const addressQZCs42B = accounts[1]
		const addressLEHz2h = accounts[0]
		const BACMARSLPTOKENPoolF2Nj8kC = await BACMARSLPTOKENPool.new(addressRrPMQ6v, addressQZCs42B, addressLEHz2h, {from: accounts[1]});
		const addressOyZ9Rw3 = accounts[5]
		const addressD3pAxi = accounts[0]
		const bytePYRMIdo = "0x1d051a021c091509051d0d101015150b08040e1a181c1e0d0e15091106020410"
		const byteJXlTH2t = "0x0b1a12080c080b1705190a06041801101815010813191c0a071a0c10041e110a"
		const uintKo7PgDZ = BigInt("50")
		const uinthgene0r = BigInt("1187")
		const uintYGRKQzt = BigInt("1308")
		const uintdRaugRq = BigInt("1418")
		const uint256sTLsGV0 = await BACMARSLPTOKENPoolF2Nj8kC.getRewardForDuration.call({from: accounts[1]});
		const addressI4p5bjG = await BACMARSLPTOKENPoolF2Nj8kC.updateReward.call(addressOyZ9Rw3, {from: accounts[0]});
		const uint256YmAHROP = await BACMARSLPTOKENPoolF2Nj8kC.earned.call(addressD3pAxi, {from: accounts[1]});
		const uint256UVjHEBL = await BACMARSLPTOKENPoolF2Nj8kC.stakeWithPermit.call(uintYGRKQzt, uinthgene0r, uintKo7PgDZ, byteJXlTH2t, bytePYRMIdo, {from: accounts[1]});
		const uint256WPbI65P = await BACMARSLPTOKENPoolF2Nj8kC.stake.call(uintdRaugRq, {from: accounts[5]});
		await BACMARSLPTOKENPoolF2Nj8kC.nonReentrant.call({from: accounts[4]});

		assert.equal(uint256sTLsGV0, BigInt("0"))
		await expect(BACMARSLPTOKENPoolF2Nj8kC.updateReward.call(addressOyZ9Rw3, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addresspWyquJ9 = accounts[3]
		const addresstXRvFxY = accounts[0]
		const addressDDj7ZQR = accounts[2]
		const BACMARSLPTOKENPoolgkZ6xW = await BACMARSLPTOKENPool.new(addresspWyquJ9, addresstXRvFxY, addressDDj7ZQR, {from: accounts[2]});
		const byteMx03KvZ = "0x120f1a0813021411071314060e15120a021e0b140a02151e06061613120b1205"
		const byteQ561oN6 = "0x0911100614051f180706130307021603011c0918120b1f1f131a170f171a021c"
		const uintvqHkF4 = BigInt("228")
		const uintJIgDkAN = BigInt("1286")
		const uintT6fJSlB = BigInt("355")
		const uintkiZCjvB = BigInt("562")
		await BACMARSLPTOKENPoolgkZ6xW.exit.call({from: accounts[0]});
		const uint256khAerOz = await BACMARSLPTOKENPoolgkZ6xW.stakeWithPermit.call(uintT6fJSlB, uintJIgDkAN, uintvqHkF4, byteQ561oN6, byteMx03KvZ, {from: accounts[5]});
		await BACMARSLPTOKENPoolgkZ6xW.onlyRewardsDistribution.call({from: accounts[1]});
		const uint8PP8ODkl = await BACMARSLPTOKENPoolgkZ6xW.decimals.call({from: accounts[1]});
		const uint256WO5vgoB = await BACMARSLPTOKENPoolgkZ6xW.notifyRewardAmount.call(uintkiZCjvB, {from: accounts[1]});
		await BACMARSLPTOKENPoolgkZ6xW.onlyRewardsDistribution.call({from: accounts[2]});

		await expect(BACMARSLPTOKENPoolgkZ6xW.exit.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressA8ALlF1 = accounts[1]
		const addressyYmIiP = accounts[1]
		const addressaateWha = accounts[2]
		const BACMARSLPTOKENPoolvJ01sWr = await BACMARSLPTOKENPool.new(addressA8ALlF1, addressyYmIiP, addressaateWha, {from: accounts[4]});
		const byteCuBd5ds = "0x181e110a1818170906061a0c13050c0411050b0a190f1a160c0c0a1e0f131817"
		const byteU4iy0Q3 = "0x1b1b051b17031704200d01111c03200a1e1a090100071b0c1d12081b0f0e040c"
		const uintC22MJPN = BigInt("32")
		const uintvUsHqiH = BigInt("1242")
		const uintByVHZfw = BigInt("1905")
		const addresspxNO2Q = accounts[1]
		const uint256cTMWzFe = await BACMARSLPTOKENPoolvJ01sWr.rewardPerToken.call({from: accounts[0]});
		const uint256yhrZtM = await BACMARSLPTOKENPoolvJ01sWr.stakeWithPermit.call(uintByVHZfw, uintvUsHqiH, uintC22MJPN, byteU4iy0Q3, byteCuBd5ds, {from: "0x0000000000000000000000000000000000000001"});
		await BACMARSLPTOKENPoolvJ01sWr.onlyRewardsDistribution.call({from: accounts[3]});
		const uint256QcjIMVj = await BACMARSLPTOKENPoolvJ01sWr.earned.call(addresspxNO2Q, {from: accounts[2]});

		assert.equal(uint256cTMWzFe, BigInt("0"))
		await expect(BACMARSLPTOKENPoolvJ01sWr.stakeWithPermit.call(uintByVHZfw, uintvUsHqiH, uintC22MJPN, byteU4iy0Q3, byteCuBd5ds, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressxwcchWJ = accounts[0]
		const addressQjfHHU = "0x0000000000000000000000000000000000000001"
		const addresskBmKwAq = accounts[5]
		const BACMARSLPTOKENPoolfsB1XIV = await BACMARSLPTOKENPool.new(addressxwcchWJ, addressQjfHHU, addresskBmKwAq, {from: accounts[2]});
		const uintTILg2R7 = BigInt("1684")
		const uint256wlSs1N = await BACMARSLPTOKENPoolfsB1XIV.withdraw.call(uintTILg2R7, {from: accounts[2]});
		const uint256Ptd012W = await BACMARSLPTOKENPoolfsB1XIV.getRewardForDuration.call({from: accounts[1]});
		await BACMARSLPTOKENPoolfsB1XIV.getReward.call({from: accounts[4]});

		await expect(BACMARSLPTOKENPoolfsB1XIV.withdraw.call(uintTILg2R7, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringy9pJEw2 = "TVkZ179nzsxAjpfUtQ3aEwLhQmF07SEyLfUGFAfOt4P5Agpn2uGLDhHTsM9WzDVj1qb7JzY1cP4mgbI8alXoHpj28Apd"
		const stringyKkHsmR = "Rn7ASBckVcaisNoDLrCHd74owRMeGCIMj"
		const uintYJWA6cr = BigInt("66")
		const BACMARSLPTOKENPoolfA034N = await BACMARSLPTOKENPool.new(stringy9pJEw2, stringyKkHsmR, uintYJWA6cr, {from: accounts[2]});
		const uintevy8kqN = BigInt("1222")
		const uintP0qRsyD = BigInt("1023")
		await BACMARSLPTOKENPoolfA034N.nonReentrant.call({from: accounts[4]});
		const uint256Z1hhsSs = await BACMARSLPTOKENPoolfA034N.withdraw.call(uintevy8kqN, {from: "0x0000000000000000000000000000000000000001"});
		const uint256a3YPR2L = await BACMARSLPTOKENPoolfA034N.withdraw.call(uintP0qRsyD, {from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressTHtwGgr = accounts[0]
		const addresslS8Ylfs = "0x0000000000000000000000000000000000000001"
		const addressXe0mID1 = accounts[5]
		const BACMARSLPTOKENPoolfsB1XIV = await BACMARSLPTOKENPool.new(addressTHtwGgr, addresslS8Ylfs, addressXe0mID1, {from: accounts[2]});
		const uintmVGbef = BigInt("465")
		const bytecIyAwA4 = "0x0b0f070e0d191b0b121614071408011009030b121b14111d0a12190717091418"
		const byteJRPeNsk = "0x171812091f130e090d18111f0c0c1c1e0a1a070a0c1d091d0306141510001502"
		const uintaRCnWrz = BigInt("206")
		const uintlTAWaOY = BigInt("293")
		const uintX30zVMZ = BigInt("1176")
		await BACMARSLPTOKENPoolfsB1XIV.getReward.call({from: accounts[4]});
		const uint256G9oW73I = await BACMARSLPTOKENPoolfsB1XIV.stake.call(uintmVGbef, {from: accounts[2]});
		const uint256r0IEmE = await BACMARSLPTOKENPoolfsB1XIV.stakeWithPermit.call(uintX30zVMZ, uintlTAWaOY, uintaRCnWrz, byteJRPeNsk, bytecIyAwA4, {from: accounts[0]});
		await BACMARSLPTOKENPoolfsB1XIV.nonReentrant.call({from: accounts[4]});

		await expect(BACMARSLPTOKENPoolfsB1XIV.getReward.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringeNYBy43 = "OotUaH7XnXaAfjipeeQPb64SpJjaV"
		const stringcE7FJqb = "ugukCei1UwAD6jc4fJ32hYT75wveixxSpAMbKYNvj16O5EG3Nw3738oMJu3Sv4zQtAQRY731Fu9W21g0W"
		const uinti1qpexL = BigInt("16")
		const BACMARSLPTOKENPooldDInmzT = await BACMARSLPTOKENPool.new(stringeNYBy43, stringcE7FJqb, uinti1qpexL, {from: accounts[1]});
		const uintYrmLQDd = BigInt("73")
		const uint256XzPBsyB = await BACMARSLPTOKENPooldDInmzT.stake.call(uintYrmLQDd, {from: accounts[3]});
		const uint256NRbXhbN = await BACMARSLPTOKENPooldDInmzT.rewardPerToken.call({from: accounts[1]});
		const uint8OlVSzbu = await BACMARSLPTOKENPooldDInmzT.decimals.call({from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addresslYRYBuF = accounts[0]
		const addressyxbt9Aq = "0x0000000000000000000000000000000000000001"
		const addressxmzdFF = accounts[5]
		const BACMARSLPTOKENPoolfsB1XIV = await BACMARSLPTOKENPool.new(addresslYRYBuF, addressyxbt9Aq, addressxmzdFF, {from: accounts[2]});
		const addressNraaFSA = accounts[4]
		const uintIw90KZr = BigInt("1845")
		const uint256NN8zZFS = await BACMARSLPTOKENPoolfsB1XIV.getRewardForDuration.call({from: accounts[3]});
		const uint256l8cmH9w = await BACMARSLPTOKENPoolfsB1XIV.balanceOf.call(addressNraaFSA, {from: accounts[2]});
		const uint256chNQek = await BACMARSLPTOKENPoolfsB1XIV.stake.call(uintIw90KZr, {from: accounts[0]});

		assert.equal(uint256NN8zZFS, BigInt("0"))
		assert.equal(uint256l8cmH9w, BigInt("0"))
		await expect(BACMARSLPTOKENPoolfsB1XIV.stake.call(uintIw90KZr, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringoRUNyqU = "baAGPxFDbV3iaazUREGD94MQbcfuRgk92LjAJXZVT7Mi1JUIenEFFRAJZzQQPXDlMmSRuraSFvef"
		const stringAhVl7oo = "ND2B4jlMNBPcl3rPXie0t6sLgzr8IbzBQyrBLIeOA4sWvPRU3udYYWGSxwCRXgU5x1S97n1Khv"
		const uints5mBAOf = BigInt("114")
		const BACMARSLPTOKENPooltgJ4iq7 = await BACMARSLPTOKENPool.new(stringoRUNyqU, stringAhVl7oo, uints5mBAOf, {from: accounts[1]});
		const addressjMJGXqx = accounts[1]
		const uint256NvgCW3r = await BACMARSLPTOKENPooltgJ4iq7.earned.call(addressjMJGXqx, {from: accounts[3]});
		const uint8aANCDF = await BACMARSLPTOKENPooltgJ4iq7.decimals.call({from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringCUciE8 = "Ef0B5T1dUFQFSaY0FzspsJbUrfEA0ki6mxwgfeHbTuKJmJBsaOT6WCu5mUuOgk5L60Jjd2E6NWHvI"
		const stringsjEP8yX = "7WPBjCzi9clmMtwCQrYX71kZxja9U76zpWYtfPaf4AgxceQm3hPRHBi7cs12R1qv"
		const uintOxOcQw = BigInt("249")
		const BACMARSLPTOKENPoolsOsblXn = await BACMARSLPTOKENPool.new(stringCUciE8, stringsjEP8yX, uintOxOcQw, {from: accounts[0]});
		const addressgddisAX = "0x0000000000000000000000000000000000000001"
		const addressrEGno7x = "0x0000000000000000000000000000000000000001"
		const uint256AQBrhx7 = await BACMARSLPTOKENPoolsOsblXn.balanceOf.call(addressgddisAX, {from: accounts[1]});
		const stringEvqb26 = await BACMARSLPTOKENPoolsOsblXn.symbol.call({from: accounts[3]});
		const uint256z0QUCHq = await BACMARSLPTOKENPoolsOsblXn.balanceOf.call(addressrEGno7x, {from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringS1mYLAg = "07ZnKez3uPOjV7g5E3wGVEfEbNrPyCjbAHtdBkHNMlE5rWaWhkudWy3WZowYJWQ8zrLJLE8bHFT16HJK9VQbs7OQQ4"
		const stringQoSrGNR = "ADiivivBjSlLeWEQPiywoATtOWWF6yRnTAlqPTcVMTpP6Ts3olp01ev8ZMhn28"
		const uintG6GaOcB = BigInt("66")
		const BACMARSLPTOKENPoolOhY3qET = await BACMARSLPTOKENPool.new(stringS1mYLAg, stringQoSrGNR, uintG6GaOcB, {from: accounts[5]});
		const uint4Utsvp = BigInt("1051")
		const addressVedQy94 = accounts[2]
		const uint256f59tYXm = await BACMARSLPTOKENPoolOhY3qET.stake.call(uint4Utsvp, {from: accounts[2]});
		const stringwnOyJAB = await BACMARSLPTOKENPoolOhY3qET.symbol.call({from: accounts[2]});
		const uint256zq0Xlta = await BACMARSLPTOKENPoolOhY3qET.earned.call(addressVedQy94, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addresswDoeFV2 = accounts[0]
		const addressyo6LWif = "0x0000000000000000000000000000000000000001"
		const addressYtELkA = accounts[5]
		const BACMARSLPTOKENPoolfsB1XIV = await BACMARSLPTOKENPool.new(addresswDoeFV2, addressyo6LWif, addressYtELkA, {from: accounts[2]});
		const uinttZU8ElA = BigInt("1108")
		const uintGrnE6He = BigInt("1883")
		const uint256RTg4aRH = await BACMARSLPTOKENPoolfsB1XIV.notifyRewardAmount.call(uinttZU8ElA, {from: accounts[0]});
		const uint256chNQek = await BACMARSLPTOKENPoolfsB1XIV.stake.call(uintGrnE6He, {from: accounts[0]});

		await expect(BACMARSLPTOKENPoolfsB1XIV.notifyRewardAmount.call(uinttZU8ElA, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringh6sONwr = "fNxzDRwiL0pc2ALl"
		const stringPnwxZrD = "UbgbpJdHXXFrOOe"
		const uintJXhLngH = BigInt("207")
		const BACMARSLPTOKENPoolCklRJrs = await BACMARSLPTOKENPool.new(stringh6sONwr, stringPnwxZrD, uintJXhLngH, {from: accounts[1]});
		const uintnmdGb1B = BigInt("1186")
		const uint256r6NW9lV = await BACMARSLPTOKENPoolCklRJrs.lastTimeRewardApplicable.call({from: accounts[3]});
		await BACMARSLPTOKENPoolCklRJrs.getReward.call({from: accounts[4]});
		const stringbmytFxH = await BACMARSLPTOKENPoolCklRJrs.name.call({from: accounts[4]});
		await BACMARSLPTOKENPoolCklRJrs.getReward.call({from: accounts[3]});
		const uint256xZQOF92 = await BACMARSLPTOKENPoolCklRJrs.stake.call(uintnmdGb1B, {from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringchIksJX = "IJ"
		const stringzcPeDA = "cw77Kr"
		const uintRpC9m93 = BigInt("103")
		const BACMARSLPTOKENPoolFJ8t2RU = await BACMARSLPTOKENPool.new(stringchIksJX, stringzcPeDA, uintRpC9m93, {from: accounts[2]});
		const addressRRa2XW = accounts[3]
		const addressrqaPcRo = accounts[1]
		const bytekMVc9Z3 = "0x0d1d020d131310111c151f1117190105040b0e1e160418011f1708020b1e1e00"
		const byteymsKR3z = "0x0919121c0b1f030d181912040703071c15100009171d19061a1d120f1b1d1516"
		const uintTtYo5A1 = BigInt("131")
		const uinthYJ4DB2 = BigInt("602")
		const uinttLR6ZA = BigInt("1749")
		const addressdR7oGxQ = accounts[0]
		const uintHDsBkmi = BigInt("405")
		const uint256vkGRjYR = await BACMARSLPTOKENPoolFJ8t2RU.earned.call(addressRRa2XW, {from: accounts[2]});
		const uint256hfUSRBS = await BACMARSLPTOKENPoolFJ8t2RU.balanceOf.call(addressrqaPcRo, {from: accounts[1]});
		const uint256Y6J01jd = await BACMARSLPTOKENPoolFJ8t2RU.stakeWithPermit.call(uinttLR6ZA, uinthYJ4DB2, uintTtYo5A1, byteymsKR3z, bytekMVc9Z3, {from: accounts[4]});
		const addressRHSMw4u = await BACMARSLPTOKENPoolFJ8t2RU.updateReward.call(addressdR7oGxQ, {from: accounts[4]});
		const uint256o4TjgeV = await BACMARSLPTOKENPoolFJ8t2RU.stake.call(uintHDsBkmi, {from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringBFodoc = "2J2Vm8voxFH5PssCmoKcDe7qP5HcbydWxk7KrIy4oQVeH8v6fcciH285nF8lV35VQSWI2bQuh2qKGEql8"
		const stringFnOu1D = "YwsRY53nkQziCBnIR1RVCzUTQPvkcLsQIr778W5pCQminO2m7ySvkWzyHBti4sMSCkKTNSEW59D7sIrIWGKc3FYS2H3IbMqD1s"
		const uintsgcuxAb = BigInt("80")
		const BACMARSLPTOKENPoolDZJFIA2 = await BACMARSLPTOKENPool.new(stringBFodoc, stringFnOu1D, uintsgcuxAb, {from: accounts[0]});
		const uint256lEbqrR = await BACMARSLPTOKENPoolDZJFIA2.totalSupply.call({from: accounts[0]});
		const uint256VgUYrxw = await BACMARSLPTOKENPoolDZJFIA2.lastTimeRewardApplicable.call({from: accounts[5]});
		const uint8JDJyQI = await BACMARSLPTOKENPoolDZJFIA2.decimals.call({from: accounts[1]});
		const stringh0uX6a5 = await BACMARSLPTOKENPoolDZJFIA2.symbol.call({from: accounts[5]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringd2YhjF0 = "AjUyztJMwYvRtDxNvNV"
		const stringlHpSLp = "1fHlUbKlsQUidNhr4mxaAaxOftT3UlSRE5eZ2EmACPXWSV7y1u1BULmMDfgqSaKk5Uuv"
		const uintTJMdaJc = BigInt("18")
		const BACMARSLPTOKENPoolVoyG7VV = await BACMARSLPTOKENPool.new(stringd2YhjF0, stringlHpSLp, uintTJMdaJc, {from: "0x0000000000000000000000000000000000000001"});
		const byteT8HI2XE = "0x17160d180605011f1412030b110a04200819081b170e0f0713031a1b1b191c1a"
		const byteCWDixta = "0x08080018050b14151f03191a0e0e1a1007101a110a0a1b0b0117111206130819"
		const uintQ43YeuQ = BigInt("54")
		const uintUxKnJ1F = BigInt("35")
		const uintf9pk8rc = BigInt("1058")
		const uint8bztT6sb = await BACMARSLPTOKENPoolVoyG7VV.decimals.call({from: accounts[5]});
		const uint256yTerYjs = await BACMARSLPTOKENPoolVoyG7VV.stakeWithPermit.call(uintf9pk8rc, uintUxKnJ1F, uintQ43YeuQ, byteCWDixta, byteT8HI2XE, {from: accounts[3]});
		const uint8iPkM9EB = await BACMARSLPTOKENPoolVoyG7VV.decimals.call({from: accounts[1]});
		const uint256cJlfiPe = await BACMARSLPTOKENPoolVoyG7VV.totalSupply.call({from: accounts[3]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringigr7dQ = "XZEevTQp7qOHTWwA68mZzbZocdEqFOp1xeVa5bIpQ55l8yyvup4saASfrVZrBKgebhR53p4FtMhtzAeGamlj3"
		const stringNBpTWul = "kekTtGN8xZxrnIwwUaA1GpcuFjxUQw1tajlfrFwPl1AeMWaBCsDC1LVo2kKFD2Y92YQ9nIiVIdHF"
		const uintTgUjPAU = BigInt("59")
		const BACMARSLPTOKENPoolqpL107r = await BACMARSLPTOKENPool.new(stringigr7dQ, stringNBpTWul, uintTgUjPAU, {from: accounts[4]});
		const uintqETkwmS = BigInt("2040")
		const addressW3ZDxr = accounts[3]
		const uintBMhtMV0 = BigInt("1224")
		const uint256reKhUEx = await BACMARSLPTOKENPoolqpL107r.withdraw.call(uintqETkwmS, {from: accounts[3]});
		const addressMWXsp5l = await BACMARSLPTOKENPoolqpL107r.updateReward.call(addressW3ZDxr, {from: accounts[0]});
		const uint256P7EkPiB = await BACMARSLPTOKENPoolqpL107r.withdraw.call(uintBMhtMV0, {from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const address7and8z = accounts[3]
		const addresslmzdz5n = accounts[1]
		const addressSrw9ubt = accounts[1]
		const BACMARSLPTOKENPooltRehMc = await BACMARSLPTOKENPool.new(address7and8z, addresslmzdz5n, addressSrw9ubt, {from: "0x0000000000000000000000000000000000000001"});
		const addressj5NnV5Z = accounts[1]
		const addressb5Kox7l = accounts[0]
		const addressjj0GCIa = accounts[0]
		const uint256HAsv9Uy = await BACMARSLPTOKENPooltRehMc.balanceOf.call(addressj5NnV5Z, {from: accounts[5]});
		await BACMARSLPTOKENPooltRehMc.onlyRewardsDistribution.call({from: accounts[3]});
		const uint256zk4wh9A = await BACMARSLPTOKENPooltRehMc.balanceOf.call(addressb5Kox7l, {from: accounts[3]});
		const addressHOt1IV = await BACMARSLPTOKENPooltRehMc.updateReward.call(addressjj0GCIa, {from: accounts[0]});
		const uint256Q2Qmnh = await BACMARSLPTOKENPooltRehMc.totalSupply.call({from: accounts[3]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringspt3hhF = "H9qBKo4puR9QSHLNL4uUkW82kq7NKGrgwx7LVLkHSGLT98AIMmZC"
		const stringx8DY6Pq = "9C4kuLBlUGP8DR4VRBRoTZ"
		const uintCl5BB9W = BigInt("208")
		const BACMARSLPTOKENPoolCDi85v = await BACMARSLPTOKENPool.new(stringspt3hhF, stringx8DY6Pq, uintCl5BB9W, {from: accounts[3]});
		const uintqi2LxDA = BigInt("1720")
		const uintbh30f66 = BigInt("884")
		const bytegoEu8r = "0x1a16160e1212031404081c1d1a150f171a020501140f0a1c13150e1405150d1f"
		const byteCgnnzW7 = "0x1710040a150d06180d161d0416100713120e010c12170d1406050a09070d0a0a"
		const uintYZm4qr7 = BigInt("70")
		const uintShqtLg4 = BigInt("354")
		const uinth1o3rWt = BigInt("132")
		const uint256W8amUH = await BACMARSLPTOKENPoolCDi85v.stake.call(uintqi2LxDA, {from: accounts[5]});
		const uint256j07PGS = await BACMARSLPTOKENPoolCDi85v.notifyRewardAmount.call(uintbh30f66, {from: accounts[4]});
		const uint256a6F9OMv = await BACMARSLPTOKENPoolCDi85v.stakeWithPermit.call(uinth1o3rWt, uintShqtLg4, uintYZm4qr7, byteCgnnzW7, bytegoEu8r, {from: accounts[0]});
		await BACMARSLPTOKENPoolCDi85v.nonReentrant.call({from: accounts[4]});
		const uint256bpHRWIZ = await BACMARSLPTOKENPoolCDi85v.rewardPerToken.call({from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringsj5OLpq = "Z6gH3V9i5UyMme5xbOXcjYwb9MqBrJzQxaR17c94miao3dTw9AW1W9xOdUHSaxnAmrcacLmXPuaEJnXG7JI962M"
		const stringIiwSU2F = "GX4SaMIAiPNmdgOYUBtgiySF1henp51iOLv6LonnPUc5TRPEaFxl9ew2flgmnsYorcBqfjKl4LCv1ku8Ya4jP6WAL1w"
		const uintOzHr98O = BigInt("223")
		const BACMARSLPTOKENPoolTa8N96 = await BACMARSLPTOKENPool.new(stringsj5OLpq, stringIiwSU2F, uintOzHr98O, {from: accounts[5]});
		const uintzSVuFos = BigInt("342")
		const uint8iS2O9Lx = await BACMARSLPTOKENPoolTa8N96.decimals.call({from: accounts[2]});
		const uint256jfhtU2s = await BACMARSLPTOKENPoolTa8N96.withdraw.call(uintzSVuFos, {from: accounts[2]});
		await BACMARSLPTOKENPoolTa8N96.onlyRewardsDistribution.call({from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringsvuodtK = "t82GpDianmXO35M3YOhtMUQ7gSfnOK6RyqARLSYXX5Cj2sVck68YEV4TphPGFTSSq9"
		const stringtOFnPy = "iCKwS"
		const uintnQbdjZA = BigInt("161")
		const BACMARSLPTOKENPooltzMfreh = await BACMARSLPTOKENPool.new(stringsvuodtK, stringtOFnPy, uintnQbdjZA, {from: accounts[3]});
		const uintD4zzqHi = BigInt("556")
		const addresszYcNudN = accounts[4]
		const uint256MsO2GN0 = await BACMARSLPTOKENPooltzMfreh.notifyRewardAmount.call(uintD4zzqHi, {from: accounts[0]});
		const uint256VNepaCj = await BACMARSLPTOKENPooltzMfreh.totalSupply.call({from: accounts[0]});
		const uint256tCUMfxg = await BACMARSLPTOKENPooltzMfreh.balanceOf.call(addresszYcNudN, {from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringhyuHMzH = "9seBKH76CwySwfYjxYivbIIPgyngd0qDRYPf3It5H4"
		const stringL33dQss = "gfEtxNL6372TTg5QoTFkBmxys6P0xnX4G6NUtHij7Fxe29ZDTteoQRDJ5EBW6eZ"
		const uintlUyuo1V = BigInt("80")
		const BACMARSLPTOKENPoolBqHU1AP = await BACMARSLPTOKENPool.new(stringhyuHMzH, stringL33dQss, uintlUyuo1V, {from: accounts[5]});
		const uintkcCHZot = BigInt("289")
		const addressobaHHaC = accounts[4]
		const uintFvtzkAT = BigInt("800")
		const uint256phJAhdt = await BACMARSLPTOKENPoolBqHU1AP.withdraw.call(uintkcCHZot, {from: accounts[0]});
		const addressX36eX5R = await BACMARSLPTOKENPoolBqHU1AP.updateReward.call(addressobaHHaC, {from: accounts[2]});
		const stringpeyhR44 = await BACMARSLPTOKENPoolBqHU1AP.symbol.call({from: accounts[2]});
		const uint256BFiXTbv = await BACMARSLPTOKENPoolBqHU1AP.getRewardForDuration.call({from: accounts[2]});
		const uint256EIVvOl6 = await BACMARSLPTOKENPoolBqHU1AP.withdraw.call(uintFvtzkAT, {from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringPSPKzEm = "0TIC5bqprUqaKRDILxjFjJ2EKmeFUnMVR8ACDq9U3rT8UBvzKSW2YyaWoaffFvo4ejd"
		const string2WTsuU = "dwKjmByxgN1fdAAZrc18y8iEQtdZtpAylUtBeO3zxNi2vGRr"
		const uintMD5imEE = BigInt("174")
		const BACMARSLPTOKENPoolEUlC8vY = await BACMARSLPTOKENPool.new(stringPSPKzEm, string2WTsuU, uintMD5imEE, {from: accounts[3]});
		const uintvkz4lp4 = BigInt("1925")
		const uintSBxxHX3 = BigInt("268")
		const addressUIsDGy = accounts[2]
		const uint256teSAgJk = await BACMARSLPTOKENPoolEUlC8vY.notifyRewardAmount.call(uintvkz4lp4, {from: accounts[0]});
		await BACMARSLPTOKENPoolEUlC8vY.getReward.call({from: accounts[1]});
		const uint256RWE6AkS = await BACMARSLPTOKENPoolEUlC8vY.lastTimeRewardApplicable.call({from: accounts[4]});
		const uint256sj0C9z7 = await BACMARSLPTOKENPoolEUlC8vY.stake.call(uintSBxxHX3, {from: accounts[1]});
		const uint256Gk6Ey2V = await BACMARSLPTOKENPoolEUlC8vY.balanceOf.call(addressUIsDGy, {from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringaFXPOSU = "B7deHuJvopE6ouX0F2UvfiRkrD15SyeDMvUe8WwPpWdwiR4xIKwAIn7NVh9ODZkcV2MLTAoWp1VOYAvlFxL81FBqMnjvi2K"
		const stringFZXzutE = "AdjimeLpacABY9j8mP7sC9oxRW3CboM8KglDnpwYJTvUxaemNOeR7BKc"
		const uintQN4Gr86 = BigInt("77")
		const BACMARSLPTOKENPoolTWdAB2 = await BACMARSLPTOKENPool.new(stringaFXPOSU, stringFZXzutE, uintQN4Gr86, {from: accounts[5]});
		const bytehTBolgH = "0x1710030e15050f1f1e20181408041f1009180a16081206102010110b020e0419"
		const byteKlnVmWp = "0x0b1d18021a150c10080011101f16082012091a09030815171b150017100b1b0a"
		const uintfDcF9X6 = BigInt("119")
		const uintfTyrkrT = BigInt("1899")
		const uintBs0AYU0 = BigInt("128")
		const uintbB8Zge = BigInt("83")
		await BACMARSLPTOKENPoolTWdAB2.onlyRewardsDistribution.call({from: accounts[2]});
		await BACMARSLPTOKENPoolTWdAB2.nonReentrant.call({from: accounts[1]});
		const uint256viHIkfp = await BACMARSLPTOKENPoolTWdAB2.stakeWithPermit.call(uintBs0AYU0, uintfTyrkrT, uintfDcF9X6, byteKlnVmWp, bytehTBolgH, {from: accounts[4]});
		const uint256G5OqhiW = await BACMARSLPTOKENPoolTWdAB2.notifyRewardAmount.call(uintbB8Zge, {from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringYVR0Vox = "E99cL2KysO12RhUEy3MXEt3hLdoeNDEWKQmc"
		const stringE9TnD7V = "RwzHOmLWiDy454NaPiAOhFMOjUzRq3LUMBibkgooNr"
		const uintN6o3Cx = BigInt("94")
		const BACMARSLPTOKENPoolOyVsOfo = await BACMARSLPTOKENPool.new(stringYVR0Vox, stringE9TnD7V, uintN6o3Cx, {from: accounts[4]});
		const byteueZ66Ea = "0x041f01191f1805111b17170d0a111e00190508141c1e02180c10080a131e171a"
		const byteprBXyLb = "0x0e0905110c0a0707151b1b04190d131902170c13070400190d0a040014050a14"
		const uintZc1vJx5 = BigInt("232")
		const uintDx1RCyV = BigInt("714")
		const uintG84G9x4 = BigInt("1989")
		const uintwEvwho3 = BigInt("1334")
		const uint256y8DEUlg = await BACMARSLPTOKENPoolOyVsOfo.rewardPerToken.call({from: accounts[5]});
		const uint256iIqpnso = await BACMARSLPTOKENPoolOyVsOfo.stakeWithPermit.call(uintG84G9x4, uintDx1RCyV, uintZc1vJx5, byteprBXyLb, byteueZ66Ea, {from: accounts[1]});
		await BACMARSLPTOKENPoolOyVsOfo.onlyRewardsDistribution.call({from: accounts[3]});
		const uint256zmwDiQ9 = await BACMARSLPTOKENPoolOyVsOfo.stake.call(uintwEvwho3, {from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringv3NhuPD = "wSBPX3ST5JkTgh2lr62bTb3SFOj2"
		const stringmaM6jKQ = "9DAr3OunhFTqeakAqNMmUnEQiNsjUaIXUC5lt1jeSmqVky6gy1IJykSSOcryA4NH1M63nbHdP2cztk54exJ08eAacOt"
		const uinton2M2X = BigInt("184")
		const BACMARSLPTOKENPoollJCFtaj = await BACMARSLPTOKENPool.new(stringv3NhuPD, stringmaM6jKQ, uinton2M2X, {from: accounts[2]});
		const byteqbrFn4n = "0x13121e2010061e18161e0915070317150a080c0415071e0f1d19081516091116"
		const byteRNCipwg = "0x0e080e170f0b16061f181d1113151b0a0213171d0f07080d141d0c171a061b1b"
		const uintpxUw596 = BigInt("105")
		const uintnjl9cU3 = BigInt("1935")
		const uintsgoffq5 = BigInt("487")
		const addressii1Oqnx = accounts[4]
		const uint256pIDVxjn = await BACMARSLPTOKENPoollJCFtaj.getRewardForDuration.call({from: accounts[4]});
		const uint256c9UJk7u = await BACMARSLPTOKENPoollJCFtaj.stakeWithPermit.call(uintsgoffq5, uintnjl9cU3, uintpxUw596, byteRNCipwg, byteqbrFn4n, {from: accounts[0]});
		const uint256rJyiEl3 = await BACMARSLPTOKENPoollJCFtaj.lastTimeRewardApplicable.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256ol1noto = await BACMARSLPTOKENPoollJCFtaj.earned.call(addressii1Oqnx, {from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringVLJPLME = "V1d5OQaXcSfI4NOonZ4H"
		const stringHunRRZu = "t64DRAfGpD7ZoL8DCxM"
		const uinteR0TbXw = BigInt("91")
		const BACMARSLPTOKENPoolYMvqUJ = await BACMARSLPTOKENPool.new(stringVLJPLME, stringHunRRZu, uinteR0TbXw, {from: accounts[4]});
		await BACMARSLPTOKENPoolYMvqUJ.exit.call({from: accounts[3]});
		const uint256qO8GRhC = await BACMARSLPTOKENPoolYMvqUJ.rewardPerToken.call({from: accounts[0]});
		await BACMARSLPTOKENPoolYMvqUJ.onlyRewardsDistribution.call({from: accounts[1]});
		const stringTAb0ARj = await BACMARSLPTOKENPoolYMvqUJ.name.call({from: accounts[2]});
		const uint256gNdsLnO = await BACMARSLPTOKENPoolYMvqUJ.rewardPerToken.call({from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringX0rSdRV = "Kna5YgUPS2I5thL2VpN2tuRbYkEVAXrdG"
		const stringaCyYbXz = "hRrEl1JzQWGzw8BQ5TPLgBK7o4Wf7UQpzEs3z9a3aX36QBCy4wvhur8nTIM7nxWwHznFB4le4F43tip"
		const uintxUGpdfA = BigInt("77")
		const BACMARSLPTOKENPoolpo2qvuT = await BACMARSLPTOKENPool.new(stringX0rSdRV, stringaCyYbXz, uintxUGpdfA, {from: accounts[3]});
		const uint256bcNs4GQ = await BACMARSLPTOKENPoolpo2qvuT.rewardPerToken.call({from: accounts[4]});
		const uint256RTj5uBd = await BACMARSLPTOKENPoolpo2qvuT.lastTimeRewardApplicable.call({from: accounts[3]});
		await BACMARSLPTOKENPoolpo2qvuT.getReward.call({from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringh49lwKy = "Hby6EobQ2tk3TVZXgCxjxud8ejTLAbi9VWMK76GzePCDMxRWv"
		const stringPIhXwe = "BuJV8e1EeM1Hrhl9olMUT3SrnayNFKBcO1IixElKCdMdyuExIezDdiQ95GbQe4oK3roS"
		const uintSCDLWOr = BigInt("181")
		const BACMARSLPTOKENPooloWJZmBW = await BACMARSLPTOKENPool.new(stringh49lwKy, stringPIhXwe, uintSCDLWOr, {from: accounts[5]});
		const bytePhMOMgQ = "0x060a0701051a1a1a0105180b0b0e1f0400100d1e0e14171211070902101e1813"
		const byteuh0Y2TV = "0x071e0f1c0d200115090503180c080f0617050719150b1f020c1b18150f0d0504"
		const uintE7Y1q1v = BigInt("246")
		const uintOGRP4LS = BigInt("1461")
		const uinth1fPRPH = BigInt("73")
		const uintZZhjimY = BigInt("1146")
		const uint256MPrEwgd = await BACMARSLPTOKENPooloWJZmBW.stakeWithPermit.call(uinth1fPRPH, uintOGRP4LS, uintE7Y1q1v, byteuh0Y2TV, bytePhMOMgQ, {from: accounts[1]});
		const uint256mZE5A9j = await BACMARSLPTOKENPooloWJZmBW.stake.call(uintZZhjimY, {from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringTFLrn5v = "YbQrVKCU0owNvmYvbbILFGeKezjKIFKmV5NQ8ZocyXbUi2cGcTyQNhrPlhOLiZFtOLlUGO"
		const stringgFyN2Ez = "BHYQPa3SRLQji2mQ3kz6FCUQAUNR6Y3vZzstr4Pn850fIrl8SBIFmNG4w8QUFxuLtUJgkbFFFQCq7Sgowq56jplInC"
		const uintOhBiE9s = BigInt("28")
		const BACMARSLPTOKENPoolyUEAHr1 = await BACMARSLPTOKENPool.new(stringTFLrn5v, stringgFyN2Ez, uintOhBiE9s, {from: accounts[5]});
		const uint256wAtie9 = await BACMARSLPTOKENPoolyUEAHr1.getRewardForDuration.call({from: accounts[2]});
		const uint256CpLbxwD = await BACMARSLPTOKENPoolyUEAHr1.totalSupply.call({from: accounts[2]});
		const uint256hj2zQ5 = await BACMARSLPTOKENPoolyUEAHr1.getRewardForDuration.call({from: accounts[0]});
		await BACMARSLPTOKENPoolyUEAHr1.onlyRewardsDistribution.call({from: accounts[2]});
		const uint8FYuFU0b = await BACMARSLPTOKENPoolyUEAHr1.decimals.call({from: accounts[3]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringmT1dbR = "AWTS8XzclrElbQNtSSqnYsUvN07QXi6VbX"
		const stringQ6waDBi = "XEb4icJsr31uluxwcFyNnRqXoi"
		const uintwPpl9st = BigInt("47")
		const BACMARSLPTOKENPoolqjuGqlF = await BACMARSLPTOKENPool.new(stringmT1dbR, stringQ6waDBi, uintwPpl9st, {from: accounts[5]});
		const addressCkZVEk8 = accounts[3]
		const uint256FGPmHym = await BACMARSLPTOKENPoolqjuGqlF.balanceOf.call(addressCkZVEk8, {from: accounts[1]});
		const uint8nmgzlGe = await BACMARSLPTOKENPoolqjuGqlF.decimals.call({from: "0x0000000000000000000000000000000000000001"});
		const stringnKjhrnD = await BACMARSLPTOKENPoolqjuGqlF.symbol.call({from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringO5LKnPC = "DnUqw4pbaEJqEo5vQgT95dMSxS3PcSAEau7uozQIX3JTekvujncsqK1aA7CO3L4503auEG3XpGXVH1SfuGHiRQz2t"
		const stringy6oYsWW = "s6IgKdfYHrS9Kw6MA8z11jrGWEiHfbTXqfqnjsyzhSsaCYzUDSTWCI1lsHTy9jTxxtes3n"
		const uintFyJuHXP = BigInt("135")
		const BACMARSLPTOKENPoolv4r8qm = await BACMARSLPTOKENPool.new(stringO5LKnPC, stringy6oYsWW, uintFyJuHXP, {from: accounts[2]});
		const uintuHroNu3 = BigInt("488")
		const addressdX0XZNF = accounts[4]
		await BACMARSLPTOKENPoolv4r8qm.onlyRewardsDistribution.call({from: accounts[5]});
		const uint256epjP3bN = await BACMARSLPTOKENPoolv4r8qm.stake.call(uintuHroNu3, {from: accounts[3]});
		await BACMARSLPTOKENPoolv4r8qm.nonReentrant.call({from: accounts[0]});
		await BACMARSLPTOKENPoolv4r8qm.getReward.call({from: accounts[2]});
		const uint256TX7kg9A = await BACMARSLPTOKENPoolv4r8qm.balanceOf.call(addressdX0XZNF, {from: accounts[0]});
		await BACMARSLPTOKENPoolv4r8qm.onlyRewardsDistribution.call({from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringlpk3hc7 = "dp2YIMPJlFkN7fLHBzyKgaOxmS"
		const stringQCUEYF2 = "pYibhQ3VhO4lHepAT6pr9rHtN5RoTpdpMRh6MSja1wkPleYR6rfTiP4gr0"
		const uintQajGvs = BigInt("121")
		const BACMARSLPTOKENPooltD1IRzv = await BACMARSLPTOKENPool.new(stringlpk3hc7, stringQCUEYF2, uintQajGvs, {from: accounts[5]});
		const uinto2wZnxt = BigInt("1838")
		const addressCBcB9TX = accounts[2]
		await BACMARSLPTOKENPooltD1IRzv.onlyRewardsDistribution.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256ivoIypW = await BACMARSLPTOKENPooltD1IRzv.withdraw.call(uinto2wZnxt, {from: accounts[0]});
		const uint256TNTqjdp = await BACMARSLPTOKENPooltD1IRzv.earned.call(addressCBcB9TX, {from: accounts[1]});
		const uint256Hm6SCnz = await BACMARSLPTOKENPooltD1IRzv.getRewardForDuration.call({from: accounts[2]});
		const uint256rC9xAEi = await BACMARSLPTOKENPooltD1IRzv.lastTimeRewardApplicable.call({from: accounts[5]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringSSqv2Lw = "XeiD9qnH4LyvzHajdE19BbBBX5fubbN6wYUL5BCNqGGdRxUk4EybrgsEw4iaNGyT1qLtaXw2dhyYSkxrYHiJTlce1p5J"
		const stringbQqI6m9 = "MTNcPe4UJ9800IBZmhFjIVwivnS"
		const uintTqJvo56 = BigInt("26")
		const BACMARSLPTOKENPoolMiiNYiU = await BACMARSLPTOKENPool.new(stringSSqv2Lw, stringbQqI6m9, uintTqJvo56, {from: "0x0000000000000000000000000000000000000001"});
		const uintzXMK60 = BigInt("1390")
		const uintkvRUGFM = BigInt("1914")
		const uintH0ZiUHT = BigInt("392")
		const uint256VgWSwpY = await BACMARSLPTOKENPoolMiiNYiU.stake.call(uintzXMK60, {from: "0x0000000000000000000000000000000000000001"});
		await BACMARSLPTOKENPoolMiiNYiU.nonReentrant.call({from: accounts[5]});
		const uint256t1ZIhHB = await BACMARSLPTOKENPoolMiiNYiU.withdraw.call(uintkvRUGFM, {from: accounts[4]});
		const uint256ZOglAzG = await BACMARSLPTOKENPoolMiiNYiU.stake.call(uintH0ZiUHT, {from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringtLKhJoz = "MXLs7KN7sjkEpggxtMkUUnLOGSpfnOXaWxT98iepvVDwmg8oPTmuDpoBfIdSYoF9UGRsvtbNr5ca5P0IGMUVg4ad"
		const stringUmDbfKH = "ailydMqnIxfJtHCup"
		const uintt1TzUYb = BigInt("231")
		const BACMARSLPTOKENPoolnb6nHIG = await BACMARSLPTOKENPool.new(stringtLKhJoz, stringUmDbfKH, uintt1TzUYb, {from: accounts[1]});
		const addressJoTHj22 = accounts[1]
		const bytefqlCuRk = "0x0b160f1818160a1c16150405050f19100b0718131a140b021e0f1a051d0c0e0f"
		const bytevDvSbyQ = "0x0611161706071d0e131718010b021d1000081a09111e1f18051f16140205150f"
		const uintlEXWwc = BigInt("19")
		const uintszZWhrS = BigInt("1855")
		const uintoH8dHNI = BigInt("1423")
		const addressulHZb20 = await BACMARSLPTOKENPoolnb6nHIG.updateReward.call(addressJoTHj22, {from: accounts[5]});
		const uint256KZNXC2 = await BACMARSLPTOKENPoolnb6nHIG.stakeWithPermit.call(uintoH8dHNI, uintszZWhrS, uintlEXWwc, bytevDvSbyQ, bytefqlCuRk, {from: accounts[2]});
		const uint8z2Ohxu8 = await BACMARSLPTOKENPoolnb6nHIG.decimals.call({from: accounts[4]});
		const stringWPhldNI = await BACMARSLPTOKENPoolnb6nHIG.symbol.call({from: accounts[0]});
		await BACMARSLPTOKENPoolnb6nHIG.getReward.call({from: accounts[5]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringGn3e0dZ = "s8p1womqil"
		const stringStAYY0J = "HJWWrhYYsHE2ctOyeejf2L6T692XvbxcNenk2sWbjXT9J5uhYtw3a"
		const uint2STiwJ = BigInt("69")
		const BACMARSLPTOKENPoolpx0lr02 = await BACMARSLPTOKENPool.new(stringGn3e0dZ, stringStAYY0J, uint2STiwJ, {from: accounts[0]});
		const addressvmMKf2 = accounts[1]
		const byteuyHHRsy = "0x01120d09010a070b102020141b141c151a0506121c020c1b1e161a18061c1d1e"
		const byteqA25oQp = "0x1b0109191e200e0b040e04101915190b0e061a150e191d0209111a170c131b19"
		const uintYS8lml = BigInt("116")
		const uintfyThIZD = BigInt("1457")
		const uintGmvKke2 = BigInt("1412")
		const addressxykErkk = accounts[4]
		const uint8VvgqjA = await BACMARSLPTOKENPoolpx0lr02.decimals.call({from: accounts[3]});
		const uint256PjeWEht = await BACMARSLPTOKENPoolpx0lr02.getRewardForDuration.call({from: accounts[1]});
		const uint256DSFS6YV = await BACMARSLPTOKENPoolpx0lr02.balanceOf.call(addressvmMKf2, {from: accounts[4]});
		const uint256VVbkkiN = await BACMARSLPTOKENPoolpx0lr02.stakeWithPermit.call(uintGmvKke2, uintfyThIZD, uintYS8lml, byteqA25oQp, byteuyHHRsy, {from: accounts[2]});
		const uint256gmTEJ4r = await BACMARSLPTOKENPoolpx0lr02.balanceOf.call(addressxykErkk, {from: accounts[3]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringZCoyqj6 = "uwiIiGW"
		const stringrhN7sQx = "e4rZ5BgcaupILZVpLjXQBulspQ"
		const uint6IS8xa = BigInt("10")
		const BACMARSLPTOKENPoolCQlmOAl = await BACMARSLPTOKENPool.new(stringZCoyqj6, stringrhN7sQx, uint6IS8xa, {from: accounts[1]});
		const uintC3aJrFP = BigInt("1479")
		const uintFeAQeRm = BigInt("391")
		const addressTIZCqj = accounts[4]
		const addressB81zHhj = accounts[4]
		const addressSUokSts = "0x0000000000000000000000000000000000000001"
		const uint256Z5RIupa = await BACMARSLPTOKENPoolCQlmOAl.getRewardForDuration.call({from: accounts[0]});
		const uint256rI21otu = await BACMARSLPTOKENPoolCQlmOAl.withdraw.call(uintC3aJrFP, {from: accounts[2]});
		const uint256QZvxsAz = await BACMARSLPTOKENPoolCQlmOAl.stake.call(uintFeAQeRm, {from: accounts[0]});
		const uint256fPMQSgr = await BACMARSLPTOKENPoolCQlmOAl.balanceOf.call(addressTIZCqj, {from: "0x0000000000000000000000000000000000000001"});
		const uint256t5rJpft = await BACMARSLPTOKENPoolCQlmOAl.earned.call(addressB81zHhj, {from: accounts[5]});
		const uint256aYJ4hky = await BACMARSLPTOKENPoolCQlmOAl.balanceOf.call(addressSUokSts, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringxVU3Jy3 = "AOYwOBefqzNwJtXh9JbiFa7dbzhqnxhN1VHuBCSUCVI2bCmA2OLdgHzqMgR5nyhJ6ztD3PYs9"
		const stringGcXeF2W = "cywpdc3YhCHr9MipUbqiJEhXHlbstzSPrc"
		const uintkCyUnVs = BigInt("213")
		const BACMARSLPTOKENPoolMum4ixp = await BACMARSLPTOKENPool.new(stringxVU3Jy3, stringGcXeF2W, uintkCyUnVs, {from: accounts[5]});
		const byteh1nzS8p = "0x1213070f0c15110616171e1a160f160f191b110f1d0c16080d1317130b150409"
		const byteVnv3Kq6 = "0x012011030604061f0a1104131c16081f0e040e02011a121e17050f04080b0c14"
		const uintgkBGjKA = BigInt("105")
		const uintxaS1D0 = BigInt("1294")
		const uintuGdO3UN = BigInt("1672")
		const uint256e5GVytC = await BACMARSLPTOKENPoolMum4ixp.stakeWithPermit.call(uintuGdO3UN, uintxaS1D0, uintgkBGjKA, byteVnv3Kq6, byteh1nzS8p, {from: "0x0000000000000000000000000000000000000001"});
		const uint256bamMUT = await BACMARSLPTOKENPoolMum4ixp.rewardPerToken.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringyEr0iHF = "Ceo9C5aF1XGoxw"
		const stringzYpuqPN = "iunFs7xVNrYpeTSNgGU1vthbmkqR6ZWBcn9zBENYbqoRekERzqF79S7LRWFUsNM2PzuswgVhlYprkofhfZ"
		const uintnDySIRQ = BigInt("173")
		const BACMARSLPTOKENPoolNpFRXqd = await BACMARSLPTOKENPool.new(stringyEr0iHF, stringzYpuqPN, uintnDySIRQ, {from: accounts[1]});
		const addressCFSp0pA = accounts[5]
		const uintI3kYhvR = BigInt("1402")
		const uintv4BqMNl = BigInt("1891")
		const uint8tt1heCC = await BACMARSLPTOKENPoolNpFRXqd.decimals.call({from: accounts[2]});
		await BACMARSLPTOKENPoolNpFRXqd.getReward.call({from: accounts[0]});
		const uint256RJSUJiC = await BACMARSLPTOKENPoolNpFRXqd.balanceOf.call(addressCFSp0pA, {from: accounts[3]});
		const uint256miDcQl = await BACMARSLPTOKENPoolNpFRXqd.stake.call(uintI3kYhvR, {from: accounts[3]});
		const uint256b7eecdt = await BACMARSLPTOKENPoolNpFRXqd.notifyRewardAmount.call(uintv4BqMNl, {from: accounts[3]});
		const uint256V7SjwZl = await BACMARSLPTOKENPoolNpFRXqd.lastTimeRewardApplicable.call({from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringM0XDoev = "uDnKN0AMajyVUGXQ1zFchvgbWkQn"
		const stringkuAwJJr = "IQHAELrAYE9BDY6hQsT09buklztmCtqpRMMJ"
		const uintcZmVbw = BigInt("71")
		const BACMARSLPTOKENPoolcFktei7 = await BACMARSLPTOKENPool.new(stringM0XDoev, stringkuAwJJr, uintcZmVbw, {from: accounts[0]});
		const byteinMxYGO = "0x161b0d1e091d0a100e030217030a12121c1e0e0a0d13061812190e19131e0407"
		const byteNm0Vgbw = "0x10171b1b13091a0a02171f0e14150e0808071119051a0c1f1b04181d180a0718"
		const uintH5S44xZ = BigInt("2")
		const uintuwpYsw = BigInt("497")
		const uintNKQpcZf = BigInt("1776")
		const uint256g3dMhtP = await BACMARSLPTOKENPoolcFktei7.stakeWithPermit.call(uintNKQpcZf, uintuwpYsw, uintH5S44xZ, byteNm0Vgbw, byteinMxYGO, {from: accounts[3]});
		const uint256NDgflsO = await BACMARSLPTOKENPoolcFktei7.totalSupply.call({from: accounts[0]});
		const stringfv9hGr = await BACMARSLPTOKENPoolcFktei7.symbol.call({from: accounts[2]});
		await BACMARSLPTOKENPoolcFktei7.onlyRewardsDistribution.call({from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringq8702Lf = "j4EjrWNn35MfepJFtJ7kJeIhoSn"
		const stringwXdEy4H = "46Rfj2AlOwhMU7Ckdady5gpXS3vXnYlUrN53qNPHx3u2n43SiDswsWQKxW8GoCmBr2WXYW"
		const uintWMHXXKg = BigInt("67")
		const BACMARSLPTOKENPoolfb56W3P = await BACMARSLPTOKENPool.new(stringq8702Lf, stringwXdEy4H, uintWMHXXKg, {from: accounts[2]});
		const uintMUd9aUD = BigInt("1621")
		const addressomIUSk = accounts[2]
		const uint8hYpWKRO = await BACMARSLPTOKENPoolfb56W3P.decimals.call({from: accounts[1]});
		const uint256DtEJ0Z9 = await BACMARSLPTOKENPoolfb56W3P.notifyRewardAmount.call(uintMUd9aUD, {from: accounts[1]});
		await BACMARSLPTOKENPoolfb56W3P.getReward.call({from: accounts[2]});
		const addressQLdA4xN = await BACMARSLPTOKENPoolfb56W3P.updateReward.call(addressomIUSk, {from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringVqZ6nxV = ""
		const stringcgTEo9l = "v6tSUWRCqsdkLBftI95nyuOzFxRAHWYCtx4ACVqsxIuMTCT5TTGb3TSMUWeYXjzQvox"
		const uintBweeeee = BigInt("174")
		const BACMARSLPTOKENPoolBz4oZeJ = await BACMARSLPTOKENPool.new(stringVqZ6nxV, stringcgTEo9l, uintBweeeee, {from: accounts[5]});
		await BACMARSLPTOKENPoolBz4oZeJ.exit.call({from: accounts[4]});
		const uint8ocsUTba = await BACMARSLPTOKENPoolBz4oZeJ.decimals.call({from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringXULXShL = "xEpYhnXx5Y"
		const stringrr81SYt = "UwAzEMeIPrA7iqZ2PNmqJQylW3klW3plRkmCJeQkXSySeUixXcDQC2GYWsIOYlmOhhy6lBJbaSJaSavRLazLzwTBxGSgTM0jl"
		const uintQZ8O5sD = BigInt("179")
		const BACMARSLPTOKENPoolnJrp1Pw = await BACMARSLPTOKENPool.new(stringXULXShL, stringrr81SYt, uintQZ8O5sD, {from: accounts[3]});
		const uinthlOMoYy = BigInt("1373")
		await BACMARSLPTOKENPoolnJrp1Pw.exit.call({from: accounts[1]});
		await BACMARSLPTOKENPoolnJrp1Pw.onlyRewardsDistribution.call({from: accounts[4]});
		const string4HosXQ = await BACMARSLPTOKENPoolnJrp1Pw.name.call({from: accounts[0]});
		const uint256swInnY = await BACMARSLPTOKENPoolnJrp1Pw.notifyRewardAmount.call(uinthlOMoYy, {from: accounts[4]});
		const uint256KasrWGl = await BACMARSLPTOKENPoolnJrp1Pw.lastTimeRewardApplicable.call({from: accounts[1]});
		await BACMARSLPTOKENPoolnJrp1Pw.onlyRewardsDistribution.call({from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringGSgVJP6 = "yff3Ro0sLaGRrhIuvr1SejNr0xUI1LjraGQXcVyRVGlxeeK2fzJKaR4rQGLgOfCdFqcyFyYebfHu0ZvTvp7EpMw"
		const stringpnCHlh8 = "rcydo1U8Y1OqK0ElHQd6ybsCdUPrpR3Z501BSqB8cHUxpHgNJbwiSou8YJ8pNsnmUGRKmA1FYrUVXmr6b1boVLinGsJ41IX"
		const uintYn5XEGX = BigInt("174")
		const BACMARSLPTOKENPoolCIX7f8H = await BACMARSLPTOKENPool.new(stringGSgVJP6, stringpnCHlh8, uintYn5XEGX, {from: accounts[0]});
		await BACMARSLPTOKENPoolCIX7f8H.nonReentrant.call({from: accounts[2]});
		const uint256rkknKM = await BACMARSLPTOKENPoolCIX7f8H.totalSupply.call({from: accounts[3]});
		await BACMARSLPTOKENPoolCIX7f8H.onlyRewardsDistribution.call({from: accounts[1]});
		const uint256RrI7ZhZ = await BACMARSLPTOKENPoolCIX7f8H.rewardPerToken.call({from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringaN1BcBw = "05MmWXyOERW19jR2Qslc6l6zVQ3zGAQnGrYtbXjJYVAtt9USKY"
		const stringcv7RjA5 = "C7JLhw08U85FabJy6Nj4"
		const uinteCbGOI3 = BigInt("31")
		const BACMARSLPTOKENPoolZUzUwAB = await BACMARSLPTOKENPool.new(stringaN1BcBw, stringcv7RjA5, uinteCbGOI3, {from: accounts[1]});
		const uint256IZlg4Ul = await BACMARSLPTOKENPoolZUzUwAB.totalSupply.call({from: accounts[0]});
		const uint8R89BgW3 = await BACMARSLPTOKENPoolZUzUwAB.decimals.call({from: accounts[0]});
		const uint256UxWYmr = await BACMARSLPTOKENPoolZUzUwAB.lastTimeRewardApplicable.call({from: accounts[4]});
		const uint256iUQjj8f = await BACMARSLPTOKENPoolZUzUwAB.lastTimeRewardApplicable.call({from: accounts[3]});
		const uint256gPj7DWs = await BACMARSLPTOKENPoolZUzUwAB.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringjh4RrX3 = "jRyxcuGfm"
		const stringVvYz88 = ""
		const uintlDwRnr = BigInt("104")
		const BACMARSLPTOKENPooldDHaAni = await BACMARSLPTOKENPool.new(stringjh4RrX3, stringVvYz88, uintlDwRnr, {from: accounts[3]});
		const bytexhv8UQU = "0x111e1c0d0f02070b0a1f0c18000c1b0e0d090c03031b190c080b160d1c0d1814"
		const byten0HwNLq = "0x1f06170a160c071f160e0f000e15031917110d170c140d010c1d041b18091a1c"
		const uintrhTdQIB = BigInt("94")
		const uintLfRrJTi = BigInt("844")
		const uinttaQ9sU2 = BigInt("1957")
		const uintRgwMONq = BigInt("816")
		const uintS14VEhC = BigInt("1282")
		const stringP6w2Q2U = await BACMARSLPTOKENPooldDHaAni.symbol.call({from: accounts[2]});
		const uint256J3K25X0 = await BACMARSLPTOKENPooldDHaAni.stakeWithPermit.call(uinttaQ9sU2, uintLfRrJTi, uintrhTdQIB, byten0HwNLq, bytexhv8UQU, {from: accounts[0]});
		const uint256soHV5vh = await BACMARSLPTOKENPooldDHaAni.withdraw.call(uintRgwMONq, {from: accounts[4]});
		const uint256BlGcN6e = await BACMARSLPTOKENPooldDHaAni.stake.call(uintS14VEhC, {from: accounts[2]});
		await BACMARSLPTOKENPooldDHaAni.nonReentrant.call({from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringCzttDVQ = "pxsaVEZq8cRw6mQeC7VQopbu02wNAwqnmAsI1UcGK6u5UofLzY5N7v2LgowgmjdAjYgc4dxI5Vcshcy7yMZ9QtmotO7mTP"
		const stringPmjKLoh = "b8JT4oaRiJ6qU3UaZST4wTT1D8Y8QGKiWxQ4AWEHTCN9a8sQiofWp1AI4AedA4l1P6rVAuuJGYKqc4H"
		const uintNZganya = BigInt("113")
		const BACMARSLPTOKENPooldVB6gmn = await BACMARSLPTOKENPool.new(stringCzttDVQ, stringPmjKLoh, uintNZganya, {from: accounts[4]});
		const uintREU9WXI = BigInt("135")
		const byteR4WKkWa = "0x140b1b05171f1a110b0c0e0408140c131208191d0a1216040d1f0b12190a051a"
		const bytehIFFJ4Y = "0x1c06181302140501130d0a1a1c0914131f020213150504180a17021d1b071a0c"
		const uintZutwUJm = BigInt("217")
		const uintn6xKHq5 = BigInt("788")
		const uintKN0eqpD = BigInt("93")
		const uintMSJm4ZH = BigInt("271")
		const uint256o79jTQH = await BACMARSLPTOKENPooldVB6gmn.withdraw.call(uintREU9WXI, {from: accounts[1]});
		const uint256pWGvDl = await BACMARSLPTOKENPooldVB6gmn.stakeWithPermit.call(uintKN0eqpD, uintn6xKHq5, uintZutwUJm, bytehIFFJ4Y, byteR4WKkWa, {from: accounts[4]});
		const uint256n82JoDr = await BACMARSLPTOKENPooldVB6gmn.notifyRewardAmount.call(uintMSJm4ZH, {from: accounts[0]});
		await BACMARSLPTOKENPooldVB6gmn.onlyRewardsDistribution.call({from: accounts[2]});
		await BACMARSLPTOKENPooldVB6gmn.exit.call({from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringIJaBKT = "sGmB7J3cuFbEIcqSjTAVuVhQRpNeYPe5F683Hb9ntdKI"
		const stringqhaOkrH = "9FopVa1"
		const uintuhn1sf = BigInt("191")
		const BACMARSLPTOKENPoolZKxu3J6 = await BACMARSLPTOKENPool.new(stringIJaBKT, stringqhaOkrH, uintuhn1sf, {from: accounts[4]});
		const addressRRlYTKJ = accounts[0]
		const addressNpSMnrd = accounts[0]
		const addressmueNB6J = await BACMARSLPTOKENPoolZKxu3J6.updateReward.call(addressRRlYTKJ, {from: accounts[3]});
		const stringGPa6xIX = await BACMARSLPTOKENPoolZKxu3J6.symbol.call({from: accounts[3]});
		const uint256Gf6qlY1 = await BACMARSLPTOKENPoolZKxu3J6.balanceOf.call(addressNpSMnrd, {from: accounts[5]});
		const uint256k8YDDp = await BACMARSLPTOKENPoolZKxu3J6.getRewardForDuration.call({from: accounts[4]});
		const stringNidnPE5 = await BACMARSLPTOKENPoolZKxu3J6.symbol.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256xi6hTa2 = await BACMARSLPTOKENPoolZKxu3J6.rewardPerToken.call({from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringV89d42 = "JO0OMqrlL72SM5h6U9ZYCKs4sKjSLp9pHIoQDGcoHurQQXn3S7qH5CdNMqX8smbfBS9e"
		const stringxyYO0ne = "6OCoCfkigJ7nCYZkInoEdYyOANRvfvBH4VNgw29wlF918tWlWA7gJ4E1fpAPTF4XPCn1IzAwjJ4"
		const uintTHW1ZdH = BigInt("22")
		const BACMARSLPTOKENPooleiS6KIs = await BACMARSLPTOKENPool.new(stringV89d42, stringxyYO0ne, uintTHW1ZdH, {from: accounts[0]});
		const uint256u6WVEH = await BACMARSLPTOKENPooleiS6KIs.rewardPerToken.call({from: accounts[2]});
		const stringK88bNsW = await BACMARSLPTOKENPooleiS6KIs.symbol.call({from: accounts[5]});
		await BACMARSLPTOKENPooleiS6KIs.nonReentrant.call({from: "0x0000000000000000000000000000000000000001"});
	});
})