const NasiLiquidityPoolFactory = artifacts.require("NasiLiquidityPoolFactory");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('NasiLiquidityPoolFactory', (accounts) => {
	it('test for NasiLiquidityPoolFactory', async () => {
		const addressBD9qzaK = accounts[0]
		const addressQUmMRU = accounts[4]
		const uintlqHQ7pI = BigInt("1976")
		const uintLH6lmy5 = BigInt("457")
		const NasiLiquidityPoolFactoryM8mrVW = await NasiLiquidityPoolFactory.new(addressBD9qzaK, addressQUmMRU, uintlqHQ7pI, uintLH6lmy5, {from: accounts[1]});
		const bytegZzFQ8 = "0x171d031f0d141f1d1f141b1515051f171a0b0c1415050719160212191a17111d"
		const byterNRUbEk = "0x09080c180a1304101a15020d150a0f080b14091213011a04141d02101c0d061a"
		const uintiBWeEa = BigInt("50")
		const uintolB660B = BigInt("1685")
		const uintDfLLSn9 = BigInt("1834")
		const addressg6Yts2n = accounts[1]
		const uintVy2Tli9 = BigInt("1280")
		const addressivgJt1d = accounts[1]
		const address9wERIS = accounts[3]
		const addressN1aiOnk = accounts[0]
		const 
xpvk36 = await NasiLiquidityPoolFactoryM8mrVW.delegateBySig.call(addressg6Yts2n, uintDfLLSn9, uintolB660B, uintiBWeEa, byterNRUbEk, bytegZzFQ8, {from: accounts[1]});
		const uint256ScQjK8 = await NasiLiquidityPoolFactoryM8mrVW.migrate.call(uintVy2Tli9, {from: accounts[4]});
		const uint256IDRT91g = await NasiLiquidityPoolFactoryM8mrVW.allowance.call(address9wERIS, addressivgJt1d, {from: accounts[1]});
		const addressFe6cNu = await NasiLiquidityPoolFactoryM8mrVW.setMigrator.call(addressN1aiOnk, {from: accounts[1]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringUl4paeP = "LC5qHkGkdWauFoFpnumR4LxuUnsgegduP1UP6kWJofx221rE1bPQSs4b6TnLXSlP9AW3BTKovfIjO3b2XJNSop"
		const stringF2iLibW = "4hTtVfihhQOe4vLRc85ddd"
		const uintQLKmo04 = BigInt("210")
		const NasiLiquidityPoolFactoryjFlKXmu = await NasiLiquidityPoolFactory.new(stringUl4paeP, stringF2iLibW, uintQLKmo04, {from: accounts[5]});
		const uintzbWNVE = BigInt("105")
		const uintE47LkJ1 = BigInt("71")
		const byteTUqAyWi = "0x041f151b15171b1113170314061a1f041714171a0c0e040d12031a0519060b06"
		const byteecd3n7f = "0x100e1a09040d171d0f111c0a100215120a06181f15161d06120e100013050912"
		const uintyeQMPcU = BigInt("230")
		const uintCVSB6Z7 = BigInt("59")
		const uintZZ4RzBl = BigInt("1784")
		const addressBymMMTO = accounts[5]
		const addressrobXkfq = accounts[4]
		const uint256IPKGUyc = await NasiLiquidityPoolFactoryjFlKXmu.withdraw.call(uintE47LkJ1, uintzbWNVE, {from: accounts[0]});
		const 
Te1awg7 = await NasiLiquidityPoolFactoryjFlKXmu.delegateBySig.call(addressBymMMTO, uintZZ4RzBl, uintCVSB6Z7, uintyeQMPcU, byteecd3n7f, byteTUqAyWi, {from: accounts[0]});
		const uint256qCLb4HO = await NasiLiquidityPoolFactoryjFlKXmu.getCurrentVotes.call(addressrobXkfq, {from: accounts[4]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringRaKBX4F = "iO7h7FPWyND2YP"
		const stringrM1uh3E = "NSukvAURpfZMWlmkEtAVH7a5AX81x8QiPY7ectoanBoY3U24XM6tmer"
		const uintDqLJBb8 = BigInt("31")
		const NasiLiquidityPoolFactoryORYoot9 = await NasiLiquidityPoolFactory.new(stringRaKBX4F, stringrM1uh3E, uintDqLJBb8, {from: accounts[0]});
		const uintjzsXvR = BigInt("40")
		const addressEUH1C9g = accounts[2]
		const addressjFUiknK = "0x0000000000000000000000000000000000000001"
		const uintKWuGqSH = BigInt("444")
		const boolQXnul17 = true
		const addressst1fMCg = accounts[1]
		const uintwtOhJ9I = BigInt("535")
		const boolZPjcYBv = await NasiLiquidityPoolFactoryORYoot9.transfer.call(addressEUH1C9g, uintjzsXvR, {from: accounts[4]});
		const uint256Ad8DusT = await NasiLiquidityPoolFactoryORYoot9.pendingNasi.call(uintKWuGqSH, addressjFUiknK, {from: accounts[2]});
		const uint256hhW4nOd = await NasiLiquidityPoolFactoryORYoot9.addLpToken.call(uintwtOhJ9I, addressst1fMCg, boolQXnul17, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringzFiyWzi = "lIS4BCIu5PAfeWlzgVcevNhKPrZu4"
		const stringMfzsPkP = "8DlsWM9sTu7MLgXXf2ue6tRRNuNeAINcPz7oFHLB5wNSXL0NsUVGt92sY6Y1F0wLJb5TRqknbZq35JApV9"
		const uintwS4Mmou = BigInt("149")
		const NasiLiquidityPoolFactoryItSOmff = await NasiLiquidityPoolFactory.new(stringzFiyWzi, stringMfzsPkP, uintwS4Mmou, {from: accounts[4]});
		const bytecSSV0Sq = "0x1d0d090c020518051b1d0e0607160e0901130f07130d0f190207021b14091301"
		const bytewfoz2tt = "0x13001f110e1b02100b11161e1d17060e09010e06131908121606051b0f1a0901"
		const uintazbhRRa = BigInt("103")
		const uintrfuT5a = BigInt("1759")
		const uintOnm14I = BigInt("1301")
		const addressDRcb2NL = accounts[5]
		const addresskpDf0J5 = accounts[2]
		const addressER4eDoA = accounts[5]
		const 
q746lo = await NasiLiquidityPoolFactoryItSOmff.delegateBySig.call(addressDRcb2NL, uintOnm14I, uintrfuT5a, uintazbhRRa, bytewfoz2tt, bytecSSV0Sq, {from: accounts[2]});
		const uint256hS0AMT8 = await NasiLiquidityPoolFactoryItSOmff.getCurrentVotes.call(addresskpDf0J5, {from: accounts[1]});
		const addressZim4xfA = await NasiLiquidityPoolFactoryItSOmff.addMinter.call(addressER4eDoA, {from: accounts[3]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringY737v6 = "YVhgNJPLCq5iZov3rhsuPFa6hizFClQ40LBgAxpmXwXVL9X"
		const stringhL3bXhG = "4AjU3VOheGMNBDzYXhuh4BIdcOxKui4qHFQPnS9IgvlMAvpglnTwiyK1vDszjcp8JOWOE1Z"
		const uintrEnIyZH = BigInt("196")
		const NasiLiquidityPoolFactoryofse10s = await NasiLiquidityPoolFactory.new(stringY737v6, stringhL3bXhG, uintrEnIyZH, {from: accounts[4]});
		const uintikhADCy = BigInt("599")
		const uint0Cds1c = BigInt("264")
		const uint256AX42s2v = await NasiLiquidityPoolFactoryofse10s.burn.call(uintikhADCy, {from: accounts[1]});
		await NasiLiquidityPoolFactoryofse10s.renounceOwnership.call({from: accounts[2]});
		const uint256RI5Wyk4 = await NasiLiquidityPoolFactoryofse10s.burn.call(uint0Cds1c, {from: accounts[3]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringDclgiOk = ""
		const stringB4271vh = "2Cp5PvUhBxS3sjXwVhB8FkK4s9bL26HgzrYy"
		const uintDtsIi3 = BigInt("137")
		const NasiLiquidityPoolFactorytm3f9KU = await NasiLiquidityPoolFactory.new(stringDclgiOk, stringB4271vh, uintDtsIi3, {from: accounts[1]});
		const addressF1AoRCH = accounts[4]
		const uintuCpy5m0 = BigInt("544")
		const addressdaAZ3QE = accounts[1]
		const addressbEXUxN = accounts[1]
		const uint256Zjv88l9 = await NasiLiquidityPoolFactorytm3f9KU.getCurrentVotes.call(addressF1AoRCH, {from: accounts[1]});
		const boolmbz4m71 = await NasiLiquidityPoolFactorytm3f9KU.mint.call(addressdaAZ3QE, uintuCpy5m0, {from: accounts[0]});
		const stringvpjfOh = await NasiLiquidityPoolFactorytm3f9KU.symbol.call({from: accounts[1]});
		const addressehWsyMa = await NasiLiquidityPoolFactorytm3f9KU.addMinter.call(addressbEXUxN, {from: accounts[5]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringZDvczc4 = "uLwshDUurvMVxGpajKr9bcP9BnMCBHgSnvzfU8Rq"
		const stringJ4uM9Kw = "PmSlVeokjHzBmYWtWE3qUddmZBJRhe"
		const uintRFwc9ZT = BigInt("219")
		const NasiLiquidityPoolFactoryR1iU95p = await NasiLiquidityPoolFactory.new(stringZDvczc4, stringJ4uM9Kw, uintRFwc9ZT, {from: "0x0000000000000000000000000000000000000001"});
		const uinteAhgDk = BigInt("1433")
		const uintGWs35yc = BigInt("749")
		const uintlA2tx9s = BigInt("129")
		const addresshsqxLvP = accounts[5]
		const uintDCWPtM = BigInt("1198")
		const addressxRdbbaG = accounts[2]
		const uint71TZMB = BigInt("1055")
		const uintFbnIiPo = BigInt("1130")
		const addressiiXjuX = accounts[0]
		const 
jqkbD2 = await NasiLiquidityPoolFactoryR1iU95p._writeCheckpoint.call(addresshsqxLvP, uintlA2tx9s, uintGWs35yc, uinteAhgDk, {from: "0x0000000000000000000000000000000000000001"});
		const boolbAj2DO8 = await NasiLiquidityPoolFactoryR1iU95p.isOwner.call({from: accounts[4]});
		const uint256VssHLy6 = await NasiLiquidityPoolFactoryR1iU95p.getPriorVotes.call(addressxRdbbaG, uintDCWPtM, {from: accounts[4]});
		const uint256tSuFc1u = await NasiLiquidityPoolFactoryR1iU95p.getBonusMultiplier.call(uintFbnIiPo, uint71TZMB, {from: accounts[3]});
		const boolSQ2wNil = await NasiLiquidityPoolFactoryR1iU95p.isMinter.call(addressiiXjuX, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringsSpthRx = "M43uFVRFuBv3DU9U4sbvScjvnsMY5mNuGOZMaXz7T9VX99a1K0"
		const stringuVpNsj = ""
		const uintE2EjTPr = BigInt("192")
		const NasiLiquidityPoolFactoryLwfuYO = await NasiLiquidityPoolFactory.new(stringsSpthRx, stringuVpNsj, uintE2EjTPr, {from: accounts[4]});
		const uintZzHeW1K = BigInt("1404")
		const addressXXSlc6l = accounts[0]
		const addressnNsMFS = accounts[0]
		const uintQ9h79YW = BigInt("503")
		const addressJ3cght9 = "0x0000000000000000000000000000000000000001"
		const uint256RveG0Im = await NasiLiquidityPoolFactoryLwfuYO.migrate.call(uintZzHeW1K, {from: accounts[1]});
		const uint256nNtcbBj = await NasiLiquidityPoolFactoryLwfuYO.getCurrentVotes.call(addressXXSlc6l, {from: accounts[0]});
		const uint256Ht6jiJy = await NasiLiquidityPoolFactoryLwfuYO.pendingNasi.call(uintQ9h79YW, addressnNsMFS, {from: accounts[2]});
		const addressC76dBqc = await NasiLiquidityPoolFactoryLwfuYO.setMigrator.call(addressJ3cght9, {from: accounts[5]});
		const uint8LjJkxyM = await NasiLiquidityPoolFactoryLwfuYO.decimals.call({from: accounts[0]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addressaBI5Muf = accounts[3]
		const addresstss8Kt9 = accounts[0]
		const uintjbQjHBL = BigInt("871")
		const uint6IfQvo = BigInt("548")
		const NasiLiquidityPoolFactorytzMXdoN = await NasiLiquidityPoolFactory.new(addressaBI5Muf, addresstss8Kt9, uintjbQjHBL, uint6IfQvo, {from: "0x0000000000000000000000000000000000000001"});
		const booln9utrWc = false
		const uintoggYCK5 = BigInt("1449")
		const uintkseXseo = BigInt("176")
		const uintNfAGKfJ = BigInt("880")
		const addressks5KTMZ = accounts[4]
		const uintyWEDU06 = BigInt("33")
		const addressxEZbu4 = accounts[2]
		const uint256gy0tgds = await NasiLiquidityPoolFactorytzMXdoN.setAllocationPoint.call(uintkseXseo, uintoggYCK5, booln9utrWc, {from: accounts[4]});
		const boolrmqleKs = await NasiLiquidityPoolFactorytzMXdoN.approve.call(addressks5KTMZ, uintNfAGKfJ, {from: accounts[0]});
		const boolyElhYzw = await NasiLiquidityPoolFactorytzMXdoN.transfer.call(addressxEZbu4, uintyWEDU06, {from: accounts[3]});
		await NasiLiquidityPoolFactorytzMXdoN.whenNotPaused.call({from: accounts[5]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addressM3v7NQ = accounts[3]
		const addressyo9N0xS = accounts[4]
		const uintgvigQyH = BigInt("1484")
		const uint0XdYal = BigInt("17")
		const NasiLiquidityPoolFactoryrc8OA0Y = await NasiLiquidityPoolFactory.new(addressM3v7NQ, addressyo9N0xS, uintgvigQyH, uint0XdYal, {from: accounts[1]});
		const addressLN2jeR2 = "0x0000000000000000000000000000000000000001"
		const uintmJCXWFs = BigInt("907")
		const addressLa3I9YB = accounts[3]
		const uintGU00LG9 = BigInt("1730")
		const addressrsMRhpm = accounts[3]
		const addressFWkwT9t = accounts[2]
		const boolOWyaSVX = true
		const addressrsutqHH = "0x0000000000000000000000000000000000000001"
		const uintOH4Ihw6 = BigInt("622")
		const addressO7xZzLg = await NasiLiquidityPoolFactoryrc8OA0Y.dev.call(addressLN2jeR2, {from: accounts[5]});
		const boole6yhlef = await NasiLiquidityPoolFactoryrc8OA0Y.increaseAllowance.call(addressLa3I9YB, uintmJCXWFs, {from: accounts[1]});
		const uint256dXlnKbS = await NasiLiquidityPoolFactoryrc8OA0Y.totalSupply.call({from: accounts[5]});
		await NasiLiquidityPoolFactoryrc8OA0Y.whenNotPaused.call({from: accounts[3]});
		const boolF6tE9Ta = await NasiLiquidityPoolFactoryrc8OA0Y.mint.call(addressrsMRhpm, uintGU00LG9, {from: accounts[4]});
		const address4k8eOC = await NasiLiquidityPoolFactoryrc8OA0Y.addPauser.call(addressFWkwT9t, {from: accounts[1]});
		const uint256o9xxC7 = await NasiLiquidityPoolFactoryrc8OA0Y.addLpToken.call(uintOH4Ihw6, addressrsutqHH, boolOWyaSVX, {from: accounts[2]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addressbPKDVRY = "0x0000000000000000000000000000000000000001"
		const addressUQeR9w6 = accounts[1]
		const uintrN9fXhV = BigInt("1852")
		const uintVo9fJ0i = BigInt("1667")
		const NasiLiquidityPoolFactoryZA3HBzA = await NasiLiquidityPoolFactory.new(addressbPKDVRY, addressUQeR9w6, uintrN9fXhV, uintVo9fJ0i, {from: accounts[5]});
		const addressOgvwpBB = accounts[5]
		const uintCZs5Z5o = BigInt("1439")
		const uintgdiRdMR = BigInt("1736")
		const addressaJe983E = accounts[5]
		const uintI1rg0BE = BigInt("579")
		const addressDtpCn0L = accounts[4]
		const uint256W1fYiW = await NasiLiquidityPoolFactoryZA3HBzA.pendingNasi.call(uintCZs5Z5o, addressOgvwpBB, {from: accounts[1]});
		const boolVm4bI1a = await NasiLiquidityPoolFactoryZA3HBzA.increaseAllowance.call(addressaJe983E, uintgdiRdMR, {from: accounts[0]});
		await NasiLiquidityPoolFactoryZA3HBzA.renounceMinter.call({from: "0x0000000000000000000000000000000000000001"});
		const booltTnbj5 = await NasiLiquidityPoolFactoryZA3HBzA.mint.call(addressDtpCn0L, uintI1rg0BE, {from: accounts[3]});
		const stringMKYHlxQ = await NasiLiquidityPoolFactoryZA3HBzA.symbol.call({from: accounts[0]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringkpCRMQi = "5b3WwKksjq5jjgfpOMbLq8kTSwhNHIgYX4bY7SZWCIyGe"
		const stringEHwVBaI = "MsC9amIqM78VtgiaszHiLaWjie7olKBTIKqcwsCbUJW2qB1qbrb9Kds6L"
		const uintM7umjRu = BigInt("7")
		const NasiLiquidityPoolFactory10H3Ad = await NasiLiquidityPoolFactory.new(stringkpCRMQi, stringEHwVBaI, uintM7umjRu, {from: accounts[3]});
		const uinthwmvNqe = BigInt("94")
		const addressCwhoJoq = "0x0000000000000000000000000000000000000001"
		await NasiLiquidityPoolFactory10H3Ad.renounceOwnership.call({from: accounts[1]});
		const uint256lRtScGg = await NasiLiquidityPoolFactory10H3Ad.getPriorVotes.call(addressCwhoJoq, uinthwmvNqe, {from: accounts[1]});
		await NasiLiquidityPoolFactory10H3Ad.onlyPauser.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addresskPXuyzZ = "0x0000000000000000000000000000000000000001"
		const addressMMMfY7Z = accounts[1]
		const uintUMT4jw5 = BigInt("1852")
		const uintVYgzr8 = BigInt("1667")
		const NasiLiquidityPoolFactoryZA3HBzA = await NasiLiquidityPoolFactory.new(addresskPXuyzZ, addressMMMfY7Z, uintUMT4jw5, uintVYgzr8, {from: accounts[5]});
		const boolriAvSCe = true
		const addressGpC0XbK = accounts[1]
		const uintK6QzCYG = BigInt("239")
		const uintYq6yJnH = BigInt("11")
		const addressia4W0c6 = accounts[4]
		const uint256EMxRToa = await NasiLiquidityPoolFactoryZA3HBzA.addLpToken.call(uintK6QzCYG, addressGpC0XbK, boolriAvSCe, {from: accounts[3]});
		await NasiLiquidityPoolFactoryZA3HBzA.onlyMinter.call({from: accounts[4]});
		const booltTnbj5 = await NasiLiquidityPoolFactoryZA3HBzA.mint.call(addressia4W0c6, uintYq6yJnH, {from: accounts[3]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringaIba9G = "7E3NTDJxvfmImg7umTNPBeHoHb6J6G37Tv7u5m"
		const stringamQuxK2 = "3DF566KRF"
		const uintQXGnGOw = BigInt("223")
		const NasiLiquidityPoolFactorysKCnOg4 = await NasiLiquidityPoolFactory.new(stringaIba9G, stringamQuxK2, uintQXGnGOw, {from: accounts[1]});
		const uint5yAXR9 = BigInt("239")
		const addresswxx5XNq = "0x0000000000000000000000000000000000000001"
		const boola9oSRyY = true
		const uintSH4hWxD = BigInt("437")
		const uintVny6ixg = BigInt("174")
		const addressKrsmkNM = accounts[2]
		const addressFna8g1e = accounts[4]
		const uintfmLjehW = BigInt("576")
		const address34vjbQ = accounts[4]
		await NasiLiquidityPoolFactorysKCnOg4.whenPaused.call({from: accounts[2]});
		const addressB19Aj7s = await NasiLiquidityPoolFactorysKCnOg4.burnFrom.call(addresswxx5XNq, uint5yAXR9, {from: accounts[0]});
		const uint256zV593zY = await NasiLiquidityPoolFactorysKCnOg4.setAllocationPoint.call(uintVny6ixg, uintSH4hWxD, boola9oSRyY, {from: accounts[1]});
		const addressNMS1bVz = await NasiLiquidityPoolFactorysKCnOg4.delegate.call(addressKrsmkNM, {from: accounts[4]});
		const booluUJ9QYZ = await NasiLiquidityPoolFactorysKCnOg4.isPauser.call(addressFna8g1e, {from: accounts[2]});
		const booldkipY8r = await NasiLiquidityPoolFactorysKCnOg4.approve.call(address34vjbQ, uintfmLjehW, {from: accounts[1]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringtDp4dAM = "s6KFhwC1uXbcFqp6cMxPKlLSEARxlQ7qvrdtXuKfROkI3STfgqgRr9YYHIuhuLibErSCM3hAmP7tFOO"
		const stringP9Ki0J = "V8KmPpNADWaqQ5yk9ZfZeLl2QKCT4aTqTNpioVKpChsv7tSYq5ovwGG"
		const uinthfrzllX = BigInt("83")
		const NasiLiquidityPoolFactoryO2qnb0 = await NasiLiquidityPoolFactory.new(stringtDp4dAM, stringP9Ki0J, uinthfrzllX, {from: accounts[2]});
		const addresswKadfw7 = accounts[1]
		const uintMqTisS = BigInt("125")
		const addressNfQCSdb = accounts[3]
		const addresspCQcGbh = await NasiLiquidityPoolFactoryO2qnb0.addMinter.call(addresswKadfw7, {from: accounts[4]});
		const booleKwEp5D = await NasiLiquidityPoolFactoryO2qnb0.decreaseAllowance.call(addressNfQCSdb, uintMqTisS, {from: accounts[3]});
		await NasiLiquidityPoolFactoryO2qnb0.massUpdatePools.call({from: accounts[1]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringikFn8ft = "9sNbZrpwJzgG7ePhRdNvT4DcYeAO16OE7iGj"
		const stringFyihqyy = "oFTAqjqN8fVA6EFzSNDRKmH2nqnyYjIcdujc4oXuwtNPaD"
		const uintFyganz7 = BigInt("103")
		const NasiLiquidityPoolFactoryKsjqJKM = await NasiLiquidityPoolFactory.new(stringikFn8ft, stringFyihqyy, uintFyganz7, {from: accounts[2]});
		const uintxCIUtDf = BigInt("767")
		const addressEpXmCOR = accounts[1]
		const uintw3VZa80 = BigInt("193")
		const addressB1Wpaoo = accounts[0]
		const uintkH2jwA2 = BigInt("1288")
		const addressyVrZHGv = accounts[1]
		const uintqrGd09P = BigInt("1840")
		const uintNMaTlt9 = BigInt("1104")
		const boolXgd9tqA = await NasiLiquidityPoolFactoryKsjqJKM.transfer.call(addressEpXmCOR, uintxCIUtDf, {from: accounts[3]});
		const boolJah7rTt = await NasiLiquidityPoolFactoryKsjqJKM.mint.call(addressB1Wpaoo, uintw3VZa80, {from: accounts[3]});
		const uint256p1pDSB4 = await NasiLiquidityPoolFactoryKsjqJKM.emergencyWithdraw.call(uintkH2jwA2, {from: accounts[4]});
		const addresse8N51E = await NasiLiquidityPoolFactoryKsjqJKM.transferOwnership.call(addressyVrZHGv, {from: accounts[3]});
		const uint256Sh0mzL6 = await NasiLiquidityPoolFactoryKsjqJKM.withdraw.call(uintNMaTlt9, uintqrGd09P, {from: accounts[1]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addresspnUS2XZ = accounts[3]
		const addressHRLIqki = accounts[4]
		const uintUkFRIS9 = BigInt("1484")
		const uintJtzrSYz = BigInt("17")
		const NasiLiquidityPoolFactoryrc8OA0Y = await NasiLiquidityPoolFactory.new(addresspnUS2XZ, addressHRLIqki, uintUkFRIS9, uintJtzrSYz, {from: accounts[1]});
		const uintmcJUBhS = BigInt("198")
		const addressChKpe2 = "0x0000000000000000000000000000000000000001"
		const boolOWyaSVX = true
		const addressVqdD633 = "0x0000000000000000000000000000000000000001"
		const uintoSsgIgk = BigInt("622")
		const uint256AGlZqe7 = await NasiLiquidityPoolFactoryrc8OA0Y.migrate.call(uintmcJUBhS, {from: "0x0000000000000000000000000000000000000001"});
		const addressO7xZzLg = await NasiLiquidityPoolFactoryrc8OA0Y.dev.call(addressChKpe2, {from: accounts[5]});
		const uint256dXlnKbS = await NasiLiquidityPoolFactoryrc8OA0Y.totalSupply.call({from: accounts[5]});
		await NasiLiquidityPoolFactoryrc8OA0Y.whenNotPaused.call({from: accounts[3]});
		const uint256o9xxC7 = await NasiLiquidityPoolFactoryrc8OA0Y.addLpToken.call(uintoSsgIgk, addressVqdD633, boolOWyaSVX, {from: accounts[2]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addressEQ5evXt = "0x0000000000000000000000000000000000000001"
		const addressXM0Clkt = accounts[1]
		const uintlJCzRxI = BigInt("1852")
		const uintV7M5nK = BigInt("1667")
		const NasiLiquidityPoolFactoryZA3HBzA = await NasiLiquidityPoolFactory.new(addressEQ5evXt, addressXM0Clkt, uintlJCzRxI, uintV7M5nK, {from: accounts[5]});
		const uintIk8BqHs = BigInt("278")
		const addresseRVwg7 = accounts[5]
		const uintvAlr4iS = BigInt("1439")
		const uintwSWGtll = BigInt("579")
		const addressnPhAop = accounts[4]
		const uint256Di7sXx = await NasiLiquidityPoolFactoryZA3HBzA.emergencyWithdraw.call(uintIk8BqHs, {from: accounts[2]});
		const uint256W1fYiW = await NasiLiquidityPoolFactoryZA3HBzA.pendingNasi.call(uintvAlr4iS, addresseRVwg7, {from: accounts[1]});
		await NasiLiquidityPoolFactoryZA3HBzA.renouncePauser.call({from: accounts[1]});
		const booltTnbj5 = await NasiLiquidityPoolFactoryZA3HBzA.mint.call(addressnPhAop, uintwSWGtll, {from: accounts[3]});
		const stringMKYHlxQ = await NasiLiquidityPoolFactoryZA3HBzA.symbol.call({from: accounts[0]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addressXoMj3Bh = accounts[1]
		const addressuiDuA0S = accounts[0]
		const uintWuLpER5 = BigInt("68")
		const uintICp4BRX = BigInt("1083")
		const NasiLiquidityPoolFactoryR9un1hp = await NasiLiquidityPoolFactory.new(addressXoMj3Bh, addressuiDuA0S, uintWuLpER5, uintICp4BRX, {from: accounts[2]});
		const uinttBR75uC = BigInt("224")
		const boolRcOVrc0 = false
		const uintYmr0pLN = BigInt("563")
		const uintD2FztY0 = BigInt("753")
		const addressFAWHASt = accounts[4]
		const addresshHs3Yq8 = accounts[1]
		const boolAsEFhA = true
		const addressgu4noB = accounts[1]
		const uintDRZQCAu = BigInt("1761")
		const uinti6pZqq4 = BigInt("938")
		const uint256AmhXqbe = await NasiLiquidityPoolFactoryR9un1hp.leaveStaking.call(uinttBR75uC, {from: accounts[3]});
		const uint256dAMkaoU = await NasiLiquidityPoolFactoryR9un1hp.setAllocationPoint.call(uintD2FztY0, uintYmr0pLN, boolRcOVrc0, {from: accounts[4]});
		const uint256Yzejxxb = await NasiLiquidityPoolFactoryR9un1hp.allowance.call(addresshHs3Yq8, addressFAWHASt, {from: accounts[0]});
		const uint256WkgjPZn = await NasiLiquidityPoolFactoryR9un1hp.addLpToken.call(uintDRZQCAu, addressgu4noB, boolAsEFhA, {from: accounts[0]});
		const uint256kHvGZ1 = await NasiLiquidityPoolFactoryR9un1hp.enterStaking.call(uinti6pZqq4, {from: accounts[1]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringc7h0KgC = "FqlMwmP3vWKn5jrNKiQcbutFglng7xM9PXXVkacggoqFjEC8gIbqcNC7BYYvxPvqpEb4AE"
		const stringzEEyog6 = "YUwVE4Z9Hr2vKgvCUmm5zconk3DXLjLqK2I47zis"
		const uintM1hh6QT = BigInt("111")
		const NasiLiquidityPoolFactoryI1g6Oy = await NasiLiquidityPoolFactory.new(stringc7h0KgC, stringzEEyog6, uintM1hh6QT, {from: accounts[0]});
		const uintfWYCRAH = BigInt("34")
		const addressVQdfVqv = accounts[2]
		const uinteBrkRnS = BigInt("123")
		const addressj9MWSbt = accounts[0]
		const addressJs5qJ41 = accounts[4]
		const addressiBIUbl = accounts[0]
		const uint256mGM84Hc = await NasiLiquidityPoolFactoryI1g6Oy.totalSupply.call({from: accounts[0]});
		await NasiLiquidityPoolFactoryI1g6Oy.onlyMinter.call({from: accounts[4]});
		const boolE336zYp = await NasiLiquidityPoolFactoryI1g6Oy.decreaseAllowance.call(addressVQdfVqv, uintfWYCRAH, {from: accounts[0]});
		const stringRaaiWcZ = await NasiLiquidityPoolFactoryI1g6Oy.name.call({from: accounts[0]});
		const boolAZMmH6K = await NasiLiquidityPoolFactoryI1g6Oy.increaseAllowance.call(addressj9MWSbt, uinteBrkRnS, {from: "0x0000000000000000000000000000000000000001"});
		const uint256ivTW3Pq = await NasiLiquidityPoolFactoryI1g6Oy.allowance.call(addressiBIUbl, addressJs5qJ41, {from: accounts[5]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringnTefuv = "FoLNjkuqewi9bKbvuIFpeVu3IRtJbDWLMn"
		const stringFZv6LjP = "v82qWIrSQWGPFfI"
		const uintWR3TRh = BigInt("3")
		const NasiLiquidityPoolFactoryfV07X10 = await NasiLiquidityPoolFactory.new(stringnTefuv, stringFZv6LjP, uintWR3TRh, {from: accounts[4]});
		const uintvniJcgA = BigInt("1019")
		const addressGgV9QgX = accounts[0]
		const addressiuoAPJm = accounts[1]
		const addressCtSRSjp = accounts[5]
		const uintfX1d6w2 = BigInt("1984")
		await NasiLiquidityPoolFactoryfV07X10.onlyOwner.call({from: accounts[4]});
		await NasiLiquidityPoolFactoryfV07X10.whenNotPaused.call({from: accounts[0]});
		const boolzvkILSJ = await NasiLiquidityPoolFactoryfV07X10.transferFrom.call(addressiuoAPJm, addressGgV9QgX, uintvniJcgA, {from: accounts[3]});
		const uint256uaK0fTx = await NasiLiquidityPoolFactoryfV07X10.pendingNasi.call(uintfX1d6w2, addressCtSRSjp, {from: accounts[2]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addressRP6iqX = accounts[2]
		const addressCQyGJ31 = accounts[2]
		const uintu9neZ9V = BigInt("1674")
		const uintr9D9OEk = BigInt("436")
		const NasiLiquidityPoolFactorynJ8n3FT = await NasiLiquidityPoolFactory.new(addressRP6iqX, addressCQyGJ31, uintu9neZ9V, uintr9D9OEk, {from: accounts[4]});
		const addressDyddy3w = accounts[2]
		const addressWqN2gVU = accounts[3]
		const addressSkEyENC = accounts[4]
		const boolvdllKzd = false
		const addressf9sCM4u = accounts[4]
		const uintsTcYMXM = BigInt("893")
		await NasiLiquidityPoolFactorynJ8n3FT.massUpdatePools.call({from: accounts[2]});
		const boolrsywOuB = await NasiLiquidityPoolFactorynJ8n3FT.isMinter.call(addressDyddy3w, {from: accounts[2]});
		const addressJRQVz6z = await NasiLiquidityPoolFactorynJ8n3FT._delegate.call(addressSkEyENC, addressWqN2gVU, {from: accounts[0]});
		const uint256blnAk1R = await NasiLiquidityPoolFactorynJ8n3FT.addLpToken.call(uintsTcYMXM, addressf9sCM4u, boolvdllKzd, {from: accounts[0]});
		await NasiLiquidityPoolFactorynJ8n3FT.onlyPauser.call({from: accounts[4]});
	});
})