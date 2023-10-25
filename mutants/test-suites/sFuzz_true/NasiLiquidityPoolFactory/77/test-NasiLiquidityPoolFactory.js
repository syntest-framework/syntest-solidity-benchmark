const NasiLiquidityPoolFactory = artifacts.require("NasiLiquidityPoolFactory");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('NasiLiquidityPoolFactory', (accounts) => {
	it('test for NasiLiquidityPoolFactory', async () => {
		const stringxYqvOQx = "fCIlXXQwjyKiR1RhgCsVkCNjwj2e8mmnUiQTnLXRB8EAkPBc8"
		const stringTbeFDw = "R3m160C3odADnKEC8pr5MrkvuRXXD8uvXwRrR27ZRyOKOnntcyC12IxcKzlT4WZ"
		const uintLS4prL = BigInt("189")
		const NasiLiquidityPoolFactorywx1kYVu = await NasiLiquidityPoolFactory.new(stringxYqvOQx, stringTbeFDw, uintLS4prL, {from: accounts[2]});
		const uintkN2ycIT = BigInt("1189")
		const stringSiVbP5d = await NasiLiquidityPoolFactorywx1kYVu.symbol.call({from: accounts[3]});
		const uint256kQmsbEX = await NasiLiquidityPoolFactorywx1kYVu.burn.call(uintkN2ycIT, {from: accounts[0]});
		await NasiLiquidityPoolFactorywx1kYVu.onlyPauser.call({from: accounts[4]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addressyH1gq6k = accounts[4]
		const addressHzzgsU5 = accounts[3]
		const uintGUCL1Jn = BigInt("132")
		const uintgqdcRVd = BigInt("2045")
		const NasiLiquidityPoolFactoryfvENEQM = await NasiLiquidityPoolFactory.new(addressyH1gq6k, addressHzzgsU5, uintGUCL1Jn, uintgqdcRVd, {from: "0x0000000000000000000000000000000000000001"});
		const addressMElzTPk = accounts[2]
		const uintQfgCk7E = BigInt("565")
		const addressOLBy6ji = accounts[2]
		const uint256enwtLkT = await NasiLiquidityPoolFactoryfvENEQM.getCurrentVotes.call(addressMElzTPk, {from: accounts[0]});
		const boolPwwXtou = await NasiLiquidityPoolFactoryfvENEQM.increaseAllowance.call(addressOLBy6ji, uintQfgCk7E, {from: accounts[4]});
		await NasiLiquidityPoolFactoryfvENEQM.onlyOwner.call({from: accounts[4]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringRLETbyb = "36SAMDq5YCdu4XpGXm4G38jkdwxx38HbVGVxcldTAsJY5DMdPHF5mfX8RcaopKugXocdTM4u1MsjhvhWsclSdr"
		const stringBSlQTrP = "lowhekTzhBIOZrme5FTRbHSJAOyhTG8y9bqugj5yF4Uhq4P7yJuvb85GjYUTuvOdLGlnDLcFmAqHfPVfAvSxb7pj8TkaLxVW"
		const uintbScR0rf = BigInt("222")
		const NasiLiquidityPoolFactory4OUd7M = await NasiLiquidityPoolFactory.new(stringRLETbyb, stringBSlQTrP, uintbScR0rf, {from: accounts[0]});
		const addresso5aLxBe = accounts[4]
		const uintHYcFrlc = BigInt("1966")
		const addressUnjCY2q = accounts[3]
		const uintTpwZ6i2 = BigInt("135")
		const addressT9430fi = accounts[5]
		const uintGZcOsf5 = BigInt("1142")
		const addresstzulx1 = accounts[4]
		const addressng5pf52 = await NasiLiquidityPoolFactory4OUd7M.transferOwnership.call(addresso5aLxBe, {from: accounts[1]});
		const boolaHJ0NEL = await NasiLiquidityPoolFactory4OUd7M.approve.call(addressUnjCY2q, uintHYcFrlc, {from: accounts[4]});
		const uint256pBGjV2H = await NasiLiquidityPoolFactory4OUd7M.migrate.call(uintTpwZ6i2, {from: accounts[4]});
		const uint256r8mrrQG = await NasiLiquidityPoolFactory4OUd7M.balanceOf.call(addressT9430fi, {from: accounts[2]});
		const boolhV5zzra = await NasiLiquidityPoolFactory4OUd7M.approve.call(addresstzulx1, uintGZcOsf5, {from: accounts[0]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringUk19VHo = "aOk3ymhX2TCEg57Wdr57l25WJV7g"
		const stringgb6NuV6 = "y63fijThxNDJsqPYsopeDBvYkXaKiHiRjOo4S3PsF2OR4Bva6Z4Y1kJhKVs4X4J2i"
		const uintHsXkWmv = BigInt("9")
		const NasiLiquidityPoolFactorydhptRyw = await NasiLiquidityPoolFactory.new(stringUk19VHo, stringgb6NuV6, uintHsXkWmv, {from: accounts[1]});
		const uintGn3He5f = BigInt("983")
		const addressTscpDJ2 = accounts[5]
		const addressLftQz3d = accounts[4]
		await NasiLiquidityPoolFactorydhptRyw.onlyMinter.call({from: accounts[4]});
		const boolHYqKpVg = await NasiLiquidityPoolFactorydhptRyw.decreaseAllowance.call(addressTscpDJ2, uintGn3He5f, {from: accounts[0]});
		const addressnPiAEB7 = await NasiLiquidityPoolFactorydhptRyw.setMigrator.call(addressLftQz3d, {from: accounts[0]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addressWxKsC7 = accounts[0]
		const addressg2mKExy = accounts[2]
		const uintpjNxxr4 = BigInt("2011")
		const uintYROrbc = BigInt("878")
		const NasiLiquidityPoolFactoryrPWioOV = await NasiLiquidityPoolFactory.new(addressWxKsC7, addressg2mKExy, uintpjNxxr4, uintYROrbc, {from: accounts[3]});
//		const uint256lA1uU63 = await NasiLiquidityPoolFactoryrPWioOV.totalSupply.call({from: accounts[0]});
//		await NasiLiquidityPoolFactoryrPWioOV.renouncePauser.call({from: accounts[3]});

		await expect(NasiLiquidityPoolFactoryrPWioOV.totalSupply.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringrEA0bDD = ""
		const stringS6n2qI = "hakL3bKJoNgUUHoP2qPPyPiMxYPCOjF2RYS762OOli9gYsarQXzBwl6OIasVcTCmC3k8i8aL5CaXnQVB"
		const uintMuobsb8 = BigInt("131")
		const NasiLiquidityPoolFactoryPscD9N6 = await NasiLiquidityPoolFactory.new(stringrEA0bDD, stringS6n2qI, uintMuobsb8, {from: accounts[2]});
		const uintwAqHBfo = BigInt("278")
		const addressbrJ9u3x = accounts[4]
		const boolmtJksAp = await NasiLiquidityPoolFactoryPscD9N6.mint.call(addressbrJ9u3x, uintwAqHBfo, {from: accounts[1]});
		const addressO6n4gC = await NasiLiquidityPoolFactoryPscD9N6.owner.call({from: accounts[4]});
		const stringVnmr5UR = await NasiLiquidityPoolFactoryPscD9N6.symbol.call({from: accounts[0]});
		const bool0d2FMI = await NasiLiquidityPoolFactoryPscD9N6.isOwner.call({from: accounts[3]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringmicnN6Z = "zRaJp9K"
		const stringAwba3Sn = "VAzPQlFqREWNAEUp"
		const uintDVxKVNF = BigInt("12")
		const NasiLiquidityPoolFactoryS2bp3AJ = await NasiLiquidityPoolFactory.new(stringmicnN6Z, stringAwba3Sn, uintDVxKVNF, {from: accounts[1]});
		const uintIsO3etl = BigInt("337")
		const addressxDmlIwN = accounts[4]
		const address9vLBIH = accounts[2]
		const addressKDgNEwI = accounts[5]
		const addressHiC3KyM = accounts[5]
		const uintRuSqUuo = BigInt("498")
		const stringTqQ1Q2e = await NasiLiquidityPoolFactoryS2bp3AJ.name.call({from: accounts[1]});
		const uint256c4vrtwT = await NasiLiquidityPoolFactoryS2bp3AJ.getPriorVotes.call(addressxDmlIwN, uintIsO3etl, {from: accounts[2]});
		const addressidcFS1w = await NasiLiquidityPoolFactoryS2bp3AJ.delegate.call(address9vLBIH, {from: accounts[3]});
		const addresszA9wDhU = await NasiLiquidityPoolFactoryS2bp3AJ._delegate.call(addressHiC3KyM, addressKDgNEwI, {from: accounts[1]});
		const uint256OEnQL2r = await NasiLiquidityPoolFactoryS2bp3AJ.migrate.call(uintRuSqUuo, {from: accounts[4]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringP7yq86Z = "XGtvAk0OslFAp3ld2RntqiQn"
		const stringKMMAReG = "bZI6fpuUFr1do48mlNF4j"
		const uintbcBHD1O = BigInt("174")
		const NasiLiquidityPoolFactoryNrB3WOk = await NasiLiquidityPoolFactory.new(stringP7yq86Z, stringKMMAReG, uintbcBHD1O, {from: "0x0000000000000000000000000000000000000001"});
		const uintPMaRI2q = BigInt("442")
		const address8Od66N = accounts[0]
		const uintdHoIsOO = BigInt("858")
		const uintBDYhPzs = BigInt("1615")
		const addressm3JLiD6 = accounts[0]
		const booltceJLlD = false
		const uintY13DBEv = BigInt("1460")
		const uintMEHQIvf = BigInt("762")
		const boolbaK3bFg = await NasiLiquidityPoolFactoryNrB3WOk.decreaseAllowance.call(address8Od66N, uintPMaRI2q, {from: accounts[5]});
		const uint256FqJDZZW = await NasiLiquidityPoolFactoryNrB3WOk.burn.call(uintdHoIsOO, {from: accounts[3]});
		const boolqm0uUS1 = await NasiLiquidityPoolFactoryNrB3WOk.paused.call({from: accounts[2]});
		const boolRPaQOKN = await NasiLiquidityPoolFactoryNrB3WOk.mint.call(addressm3JLiD6, uintBDYhPzs, {from: "0x0000000000000000000000000000000000000001"});
		const uint256ZFESh4g = await NasiLiquidityPoolFactoryNrB3WOk.setAllocationPoint.call(uintMEHQIvf, uintY13DBEv, booltceJLlD, {from: accounts[0]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringNuhdAaS = "WRTz"
		const stringpUN53k5 = "4mj"
		const uintwbcDA6U = BigInt("75")
		const NasiLiquidityPoolFactoryHC05UAU = await NasiLiquidityPoolFactory.new(stringNuhdAaS, stringpUN53k5, uintwbcDA6U, {from: accounts[3]});
		const uintWOrUNuJ = BigInt("986")
		const uintQVN599V = BigInt("1419")
		const addressXDpLeym = accounts[4]
		const uint256b70uCjT = await NasiLiquidityPoolFactoryHC05UAU.updatePool.call(uintWOrUNuJ, {from: accounts[1]});
		await NasiLiquidityPoolFactoryHC05UAU.onlyPauser.call({from: accounts[4]});
		await NasiLiquidityPoolFactoryHC05UAU.onlyPauser.call({from: "0x0000000000000000000000000000000000000001"});
		const addressuJxgiSC = await NasiLiquidityPoolFactoryHC05UAU.burnFrom.call(addressXDpLeym, uintQVN599V, {from: accounts[3]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addressKjqoazM = accounts[0]
		const addressFgW1Y33 = accounts[2]
		const uintX0oa9Ig = BigInt("2011")
		const uinte9IhY89 = BigInt("878")
		const NasiLiquidityPoolFactoryrPWioOV = await NasiLiquidityPoolFactory.new(addressKjqoazM, addressFgW1Y33, uintX0oa9Ig, uinte9IhY89, {from: accounts[3]});
		const uintkNeDuyA = BigInt("1492")
		const addressX8UrWuf = accounts[4]
//		const uint256AWK0qH7 = await NasiLiquidityPoolFactoryrPWioOV.updatePool.call(uintkNeDuyA, {from: accounts[2]});
//		const addressJvVuyx9 = await NasiLiquidityPoolFactoryrPWioOV.delegate.call(addressX8UrWuf, {from: accounts[4]});
//		const uint256lA1uU63 = await NasiLiquidityPoolFactoryrPWioOV.totalSupply.call({from: accounts[0]});

		await expect(NasiLiquidityPoolFactoryrPWioOV.updatePool.call(uintkNeDuyA, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringYgLrPay = "v97Bcp22AmyC19OOzvclV03WkM6YR2afEJ8zMMzjXK3DZvUYQghJqqiKRNh9weORYbeOA05nKkFYvT7kUVJlkP1YSIKk3Ae9gbm"
		const stringpQIcMzJ = "eCh5830thWpjwjPDYtqmsbPCzLqZBebVF76bhafnDIRfmlW2IexlYcjVYiPWWOjOsjRJPwgSc4xa6k"
		const uintM4AMdNq = BigInt("228")
		const NasiLiquidityPoolFactoryPJREmrI = await NasiLiquidityPoolFactory.new(stringYgLrPay, stringpQIcMzJ, uintM4AMdNq, {from: accounts[5]});
		const uintS9ngXZv = BigInt("505")
		const addressqbzknHC = accounts[1]
		const uintKV4Y6eP = BigInt("354")
		const addressU7iVlfI = accounts[4]
		await NasiLiquidityPoolFactoryPJREmrI.onlyOwner.call({from: accounts[5]});
		const uint8VVb612h = await NasiLiquidityPoolFactoryPJREmrI.decimals.call({from: accounts[1]});
		const addressvGnRMR2 = await NasiLiquidityPoolFactoryPJREmrI.burnFrom.call(addressqbzknHC, uintS9ngXZv, {from: accounts[3]});
		const boolBcC34Zg = await NasiLiquidityPoolFactoryPJREmrI.approve.call(addressU7iVlfI, uintKV4Y6eP, {from: accounts[0]});
		const boolbnrLGnD = await NasiLiquidityPoolFactoryPJREmrI.paused.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addressRMmTdZ = accounts[0]
		const addressdJUNVnG = accounts[2]
		const uintaRfWyLM = BigInt("2011")
		const uintOAoTzFc = BigInt("878")
		const NasiLiquidityPoolFactoryrPWioOV = await NasiLiquidityPoolFactory.new(addressRMmTdZ, addressdJUNVnG, uintaRfWyLM, uintOAoTzFc, {from: accounts[3]});
//		await NasiLiquidityPoolFactoryrPWioOV.renounceOwnership.call({from: accounts[2]});

		await expect(NasiLiquidityPoolFactoryrPWioOV.renounceOwnership.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringaHqywcG = "PCIIGuRRAN2PmlC9INSxm2Pznny9y9cugCwSNR9"
		const stringp8dii1k = "oJWqdCPnSzqpRTYKwJGdfVMVpFoFGBScPEneW61PLp1DobTNxY5IH94"
		const uintdN9wUYL = BigInt("220")
		const NasiLiquidityPoolFactorySyBbmwJ = await NasiLiquidityPoolFactory.new(stringaHqywcG, stringp8dii1k, uintdN9wUYL, {from: accounts[2]});
		const addressUZ4Nwaa = accounts[4]
		const addresscihfmBi = accounts[1]
		const addresswxbYwtV = accounts[4]
		const uintXvhwyTc = BigInt("720")
		const addressBmaQTu = accounts[2]
		await NasiLiquidityPoolFactorySyBbmwJ.onlyMinter.call({from: accounts[1]});
		const addressDElxbaX = await NasiLiquidityPoolFactorySyBbmwJ.delegate.call(addressUZ4Nwaa, {from: accounts[1]});
		const addressNhV4GQI = await NasiLiquidityPoolFactorySyBbmwJ._delegate.call(addresswxbYwtV, addresscihfmBi, {from: accounts[3]});
		const boolCih1eL = await NasiLiquidityPoolFactorySyBbmwJ.decreaseAllowance.call(addressBmaQTu, uintXvhwyTc, {from: accounts[1]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addresssbEJVxy = accounts[0]
		const address5CVh24 = accounts[2]
		const uint9Xmwq2 = BigInt("2011")
		const uintYDIFkiN = BigInt("878")
		const NasiLiquidityPoolFactoryrPWioOV = await NasiLiquidityPoolFactory.new(addresssbEJVxy, address5CVh24, uint9Xmwq2, uintYDIFkiN, {from: accounts[3]});
		const uintiSHcUcI = BigInt("973")
		const uintOduA0J = BigInt("398")
//		const uint256XZAP6LB = await NasiLiquidityPoolFactoryrPWioOV.deposit.call(uintOduA0J, uintiSHcUcI, {from: accounts[4]});
//		await NasiLiquidityPoolFactoryrPWioOV.whenPaused.call({from: accounts[4]});
//		const uint256lA1uU63 = await NasiLiquidityPoolFactoryrPWioOV.totalSupply.call({from: accounts[0]});

		await expect(NasiLiquidityPoolFactoryrPWioOV.deposit.call(uintOduA0J, uintiSHcUcI, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addressXX8Fl6 = accounts[0]
		const addressn7i3ixx = accounts[2]
		const uintzPMfzaf = BigInt("2011")
		const uintEtWkgYS = BigInt("878")
		const NasiLiquidityPoolFactoryrPWioOV = await NasiLiquidityPoolFactory.new(addressXX8Fl6, addressn7i3ixx, uintzPMfzaf, uintEtWkgYS, {from: accounts[3]});
		const addressN162Xwh = await NasiLiquidityPoolFactoryrPWioOV.owner.call({from: accounts[0]});
//		const uint256lA1uU63 = await NasiLiquidityPoolFactoryrPWioOV.totalSupply.call({from: accounts[0]});

		assert.equal(addressN162Xwh, 0x91b8Fb8d05D0D7c09E7Ea1B0749c605Cad074324)
		await expect(NasiLiquidityPoolFactoryrPWioOV.totalSupply.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addressBF3GaLI = accounts[0]
		const addressHP8TzE = accounts[2]
		const uintrte7Q8l = BigInt("2011")
		const uintgABMT9J = BigInt("878")
		const NasiLiquidityPoolFactoryrPWioOV = await NasiLiquidityPoolFactory.new(addressBF3GaLI, addressHP8TzE, uintrte7Q8l, uintgABMT9J, {from: accounts[3]});
		const uintv4HwZWV = BigInt("49")
//		const uint256poSMKUY = await NasiLiquidityPoolFactoryrPWioOV.leaveStaking.call(uintv4HwZWV, {from: accounts[2]});
//		const uint256lA1uU63 = await NasiLiquidityPoolFactoryrPWioOV.totalSupply.call({from: accounts[0]});

		await expect(NasiLiquidityPoolFactoryrPWioOV.leaveStaking.call(uintv4HwZWV, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringnQSCzhs = "wGu3CltC9M16CvJQUGaOLfRoG6vwrzRgSrjaSOBNhSbhEKfFbBiDRr1zE4E7VV3Uq3PPxMAIeHQj"
		const stringXpmO0an = "ObBgSjOogsHGXgEo1d4k7tvlGOnV6"
		const uintLOYToW = BigInt("172")
		const NasiLiquidityPoolFactoryELc3UyE = await NasiLiquidityPoolFactory.new(stringnQSCzhs, stringXpmO0an, uintLOYToW, {from: accounts[1]});
		const uintPfjkLP = BigInt("910")
		const addresss0J4gER = accounts[4]
		const uintsZEu0LU = BigInt("695")
		const addressTvPNPF6 = accounts[4]
		await NasiLiquidityPoolFactoryELc3UyE.pause.call({from: accounts[3]});
		const booloB6z2V2 = await NasiLiquidityPoolFactoryELc3UyE.increaseAllowance.call(addresss0J4gER, uintPfjkLP, {from: accounts[4]});
		const boolO0ZLdFF = await NasiLiquidityPoolFactoryELc3UyE.mint.call(addressTvPNPF6, uintsZEu0LU, {from: accounts[2]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringG4dzfe = "maXvzp7XtTrBCsxF0Ta4kK5xZvToNH5mxulTCNPOUGvvuKcZNPjwOCF2AJSg9cfE"
		const stringntXT7u4 = "db9P9aL1cFJowf5g1UKGh181gY2LZwJ5UkRTRQGx8TCY"
		const uintLNNvBT8 = BigInt("64")
		const NasiLiquidityPoolFactoryBMztK3 = await NasiLiquidityPoolFactory.new(stringG4dzfe, stringntXT7u4, uintLNNvBT8, {from: accounts[5]});
		const uintgut6k1V = BigInt("371")
		const uintHP8FYov = BigInt("481")
		const uintv70d6D = BigInt("1753")
		const uint256ILp8E3B = await NasiLiquidityPoolFactoryBMztK3.leaveStaking.call(uintgut6k1V, {from: accounts[4]});
		const uint256RzQHB6l = await NasiLiquidityPoolFactoryBMztK3.getBonusMultiplier.call(uintv70d6D, uintHP8FYov, {from: accounts[4]});
		await NasiLiquidityPoolFactoryBMztK3.renouncePauser.call({from: accounts[4]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringkW91SiK = "LtmEq5Iun4eYqLcOZFJx5w7A9viW45kPz26HLP"
		const stringXas6zil = "ZS3"
		const uintKRlnCLl = BigInt("152")
		const NasiLiquidityPoolFactoryxLHWxOU = await NasiLiquidityPoolFactory.new(stringkW91SiK, stringXas6zil, uintKRlnCLl, {from: accounts[5]});
		const addressArHgzfM = accounts[5]
		const uintbZ0m8On = BigInt("1829")
		const uintOfEBIKX = BigInt("489")
		const uintv0uNUZ0 = BigInt("81")
		const addressgLCTTAp = await NasiLiquidityPoolFactoryxLHWxOU.setMigrator.call(addressArHgzfM, {from: accounts[1]});
		const stringold70zp = await NasiLiquidityPoolFactoryxLHWxOU.name.call({from: accounts[4]});
		const uint256M53SrFY = await NasiLiquidityPoolFactoryxLHWxOU.leaveStaking.call(uintbZ0m8On, {from: accounts[2]});
		const uint256NSDyY3l = await NasiLiquidityPoolFactoryxLHWxOU.deposit.call(uintv0uNUZ0, uintOfEBIKX, {from: accounts[3]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addressYIO2rwZ = accounts[0]
		const addresso9uZiZn = accounts[2]
		const uintLvVDwDJ = BigInt("2011")
		const uintuJFcrkM = BigInt("878")
		const NasiLiquidityPoolFactoryrPWioOV = await NasiLiquidityPoolFactory.new(addressYIO2rwZ, addresso9uZiZn, uintLvVDwDJ, uintuJFcrkM, {from: accounts[3]});
		const addressdiSpngT = accounts[0]
		const uintSLgs7a = BigInt("88")
		const addressYjJTAGE = accounts[3]
		const uintcbWbzms = BigInt("937")
//		const uint256rj0HVh = await NasiLiquidityPoolFactoryrPWioOV.pendingNasi.call(uintSLgs7a, addressdiSpngT, {from: accounts[1]});
//		const uint256FvKnGPF = await NasiLiquidityPoolFactoryrPWioOV.pendingNasi.call(uintcbWbzms, addressYjJTAGE, {from: accounts[0]});

		await expect(NasiLiquidityPoolFactoryrPWioOV.pendingNasi.call(uintSLgs7a, addressdiSpngT, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringC0k5mrh = "4AbQfHNoIiLFFDLvYI3RES11vvL98lqxQf30UbRPRNQAtns5IZ5F4Sw"
		const stringe5KYbCF = "sw5v7eUpr0Yda1cPyDKcbmi6cyZGYPYfey"
		const uintwup4gem = BigInt("121")
		const NasiLiquidityPoolFactorytO4FN90 = await NasiLiquidityPoolFactory.new(stringC0k5mrh, stringe5KYbCF, uintwup4gem, {from: accounts[1]});
		const uintLvsSSwt = BigInt("228")
		const addressqDVdca = "0x0000000000000000000000000000000000000001"
		const addressNMlcktm = accounts[1]
		const addressE85EA8n = accounts[0]
		const uint256kImOQO9 = await NasiLiquidityPoolFactorytO4FN90.emergencyWithdraw.call(uintLvsSSwt, {from: accounts[2]});
		await NasiLiquidityPoolFactorytO4FN90.massUpdatePools.call({from: "0x0000000000000000000000000000000000000001"});
		const addressU7mfjoa = await NasiLiquidityPoolFactorytO4FN90.transferOwnership.call(addressqDVdca, {from: accounts[1]});
		const uint256TDqKGV = await NasiLiquidityPoolFactorytO4FN90.allowance.call(addressE85EA8n, addressNMlcktm, {from: "0x0000000000000000000000000000000000000001"});
		await NasiLiquidityPoolFactorytO4FN90.renouncePauser.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addressGWXVxCa = accounts[0]
		const addressq9WcGpT = accounts[2]
		const uintbbIXqL3 = BigInt("2011")
		const uintI3MOn5 = BigInt("878")
		const NasiLiquidityPoolFactoryrPWioOV = await NasiLiquidityPoolFactory.new(addressGWXVxCa, addressq9WcGpT, uintbbIXqL3, uintI3MOn5, {from: accounts[3]});
//		await NasiLiquidityPoolFactoryrPWioOV.massUpdatePools.call({from: accounts[2]});
//		const uint256lA1uU63 = await NasiLiquidityPoolFactoryrPWioOV.totalSupply.call({from: accounts[0]});

		await expect(NasiLiquidityPoolFactoryrPWioOV.massUpdatePools.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addressMOH8eKy = accounts[0]
		const addressv4Wiump = accounts[2]
		const uintsXGt7K9 = BigInt("2011")
		const uintTM9bOuV = BigInt("878")
		const NasiLiquidityPoolFactoryrPWioOV = await NasiLiquidityPoolFactory.new(addressMOH8eKy, addressv4Wiump, uintsXGt7K9, uintTM9bOuV, {from: accounts[3]});
		const uintBhK7joH = BigInt("1537")
		const uintQVyB7ki = BigInt("313")
		const uintQal93p = BigInt("920")
		const addressblDDnlM = accounts[5]
//		const uint256mSllEp = await NasiLiquidityPoolFactoryrPWioOV.withdraw.call(uintQVyB7ki, uintBhK7joH, {from: accounts[5]});
//		const bool05fahi = await NasiLiquidityPoolFactoryrPWioOV.decreaseAllowance.call(addressblDDnlM, uintQal93p, {from: accounts[2]});
//		const uint256lA1uU63 = await NasiLiquidityPoolFactoryrPWioOV.totalSupply.call({from: accounts[0]});

		await expect(NasiLiquidityPoolFactoryrPWioOV.withdraw.call(uintQVyB7ki, uintBhK7joH, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringnBq2Nj6 = "8HYxeAfaiXp2TspVQGRgw81d7IdLyrzKrcHOyPaFLbzQMzsSBIpcjqwrsj0LaKvFBLnwPH7nbomBXviOlh9FSCngj"
		const stringZROUg70 = "i"
		const uintn1ygq95 = BigInt("180")
		const NasiLiquidityPoolFactorynJym2qY = await NasiLiquidityPoolFactory.new(stringnBq2Nj6, stringZROUg70, uintn1ygq95, {from: accounts[0]});
		const uintFyPdpS6 = BigInt("663")
		const uintzIyl1s = BigInt("857")
		const addressIf1XEz = accounts[5]
		const uintUrkO9mz = BigInt("1539")
		const addressC0R451G = accounts[3]
		const uint256IlRQTdl = await NasiLiquidityPoolFactorynJym2qY.withdraw.call(uintzIyl1s, uintFyPdpS6, {from: accounts[2]});
		const uint256BG6zT2E = await NasiLiquidityPoolFactorynJym2qY.balanceOf.call(addressIf1XEz, {from: accounts[2]});
		const boolSxR0goy = await NasiLiquidityPoolFactorynJym2qY.increaseAllowance.call(addressC0R451G, uintUrkO9mz, {from: accounts[3]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringwHYf1Ph = "WEYeLG4f0vUlDvTW8NGuvgsUMsNfGP3vaPSQDvo5FY"
		const stringtBe0h2N = "KSO6PYMADgSvvaNM6lOy"
		const uintJcYCA9Z = BigInt("39")
		const NasiLiquidityPoolFactoryeDF5Pkw = await NasiLiquidityPoolFactory.new(stringwHYf1Ph, stringtBe0h2N, uintJcYCA9Z, {from: accounts[2]});
		const uintgmltwkl = BigInt("484")
		const addressEsQUHYt = accounts[3]
		const boolO7vkLXy = true
		const uintYFt738 = BigInt("1238")
		const uintE3Ngymj = BigInt("467")
		const uintPKsGNC9 = BigInt("290")
		const uintzfDw7ss = BigInt("1265")
		const addressjOXMqB = accounts[3]
		const boolBa2gtC9 = await NasiLiquidityPoolFactoryeDF5Pkw.decreaseAllowance.call(addressEsQUHYt, uintgmltwkl, {from: "0x0000000000000000000000000000000000000001"});
		const uint256Pq0QT0I = await NasiLiquidityPoolFactoryeDF5Pkw.setAllocationPoint.call(uintE3Ngymj, uintYFt738, boolO7vkLXy, {from: accounts[0]});
		const uint256VFyUnzi = await NasiLiquidityPoolFactoryeDF5Pkw.getBonusMultiplier.call(uintzfDw7ss, uintPKsGNC9, {from: accounts[1]});
		const addressMnMuSpd = await NasiLiquidityPoolFactoryeDF5Pkw.delegate.call(addressjOXMqB, {from: accounts[1]});
		await NasiLiquidityPoolFactoryeDF5Pkw.massUpdatePools.call({from: accounts[1]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addressrXh0PCl = accounts[0]
		const addressIgMsBbi = accounts[2]
		const uintvAqt4x = BigInt("2011")
		const uintfTXbBqX = BigInt("878")
		const NasiLiquidityPoolFactoryrPWioOV = await NasiLiquidityPoolFactory.new(addressrXh0PCl, addressIgMsBbi, uintvAqt4x, uintfTXbBqX, {from: accounts[3]});
		const uintltyQXZ6 = BigInt("418")
		const uintte58YJM = BigInt("25")
//		const uint256IZtv45 = await NasiLiquidityPoolFactoryrPWioOV.enterStaking.call(uintltyQXZ6, {from: accounts[0]});
//		const uint256poSMKUY = await NasiLiquidityPoolFactoryrPWioOV.leaveStaking.call(uintte58YJM, {from: accounts[2]});

		await expect(NasiLiquidityPoolFactoryrPWioOV.enterStaking.call(uintltyQXZ6, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})