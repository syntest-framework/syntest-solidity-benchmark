const NasiLiquidityPoolFactory = artifacts.require("NasiLiquidityPoolFactory");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('NasiLiquidityPoolFactory', (accounts) => {
	it('test for NasiLiquidityPoolFactory', async () => {
		const addressUwRcJfb = accounts[4]
		const addressXfz1S7N = accounts[4]
		const uintzXoFkte = BigInt("428")
		const uintlZjePeq = BigInt("123")
		const NasiLiquidityPoolFactoryWhfyqFg = await NasiLiquidityPoolFactory.new(addressUwRcJfb, addressXfz1S7N, uintzXoFkte, uintlZjePeq, {from: accounts[4]});
		const uintkF6zepW = BigInt("1303")
		const uint9W5Pn9 = BigInt("589")
		const uintgyZ51uf = BigInt("706")
		const addresswd0SDq = accounts[0]
		const uintoWwTGeY = BigInt("969")
		const uintD2LBYmb = BigInt("2009")
		const uintn0URITn = BigInt("1597")
		const addressNMDjrku = accounts[2]
		const addressBlVDK7O = accounts[1]
		const uint256DuKx1M = await NasiLiquidityPoolFactoryWhfyqFg.deposit.call(uint9W5Pn9, uintkF6zepW, {from: accounts[0]});
		await NasiLiquidityPoolFactoryWhfyqFg.unpause.call({from: accounts[1]});
		const boolPB2gnUh = await NasiLiquidityPoolFactoryWhfyqFg.decreaseAllowance.call(addresswd0SDq, uintgyZ51uf, {from: accounts[5]});
		const 
N9Y27E = await NasiLiquidityPoolFactoryWhfyqFg._writeCheckpoint.call(addressNMDjrku, uintn0URITn, uintD2LBYmb, uintoWwTGeY, {from: accounts[0]});
		const uint256nar5VyL = await NasiLiquidityPoolFactoryWhfyqFg.balanceOf.call(addressBlVDK7O, {from: accounts[4]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addressBGWSE5I = accounts[2]
		const addressekmE039 = accounts[3]
		const uintS9jWaXY = BigInt("1668")
		const uintIW6pf8 = BigInt("118")
		const NasiLiquidityPoolFactoryEiXbGqJ = await NasiLiquidityPoolFactory.new(addressBGWSE5I, addressekmE039, uintS9jWaXY, uintIW6pf8, {from: accounts[1]});
		const uintOK3ngRW = BigInt("1953")
		const addressOTW7ECx = accounts[3]
		const uintRrOaMYs = BigInt("1038")
		const uintbgl6LYS = BigInt("420")
		const uintrUaH6Af = BigInt("1547")
		const address6tTV2v = accounts[3]
		const boolenc1zbl = await NasiLiquidityPoolFactoryEiXbGqJ.approve.call(addressOTW7ECx, uintOK3ngRW, {from: accounts[3]});
		const uint256ctxJFTB = await NasiLiquidityPoolFactoryEiXbGqJ.withdraw.call(uintbgl6LYS, uintRrOaMYs, {from: accounts[4]});
		const uint256geB4k7 = await NasiLiquidityPoolFactoryEiXbGqJ.getPriorVotes.call(address6tTV2v, uintrUaH6Af, {from: accounts[1]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringTz9NRxK = "UyeS3JH0VSAXH5gxf9YBsGPYWY6SEYbAFrv4BBgeI8wvwBQuqqwTHMiOmrr0vP8mQDXKq2f8XBEjtd6a3U"
		const stringD6R6Lno = "wKNGw5oD2PqKQUEAX4ArCg5VqTorUSqjIN3gMUg2saFRzS8rXIxrpYJuJVBV4yOzWXIAfY"
		const uintjTOfav = BigInt("210")
		const NasiLiquidityPoolFactoryS0ufyGP = await NasiLiquidityPoolFactory.new(stringTz9NRxK, stringD6R6Lno, uintjTOfav, {from: accounts[4]});
		const stringnQdM91T = await NasiLiquidityPoolFactoryS0ufyGP.symbol.call({from: accounts[3]});
		await NasiLiquidityPoolFactoryS0ufyGP.onlyOwner.call({from: accounts[0]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringJGr0WVw = "SIwmnVHsOcbFbIUGotjYY3AVorSlnLG4romTtqIX9DhlCcCepgbjFNUCe"
		const stringxYksgSU = "TyC1FB8Pl6wMjVkq3hOL6gLV91qOabgo4OZHF1D2VHbXkBoUKaC58h2UXFzqqCvd0UedRE3V"
		const uintlmXmmF = BigInt("68")
		const NasiLiquidityPoolFactoryOSRezXu = await NasiLiquidityPoolFactory.new(stringJGr0WVw, stringxYksgSU, uintlmXmmF, {from: accounts[0]});
		const boolufLgrE = true
		const uintPWcfDYr = BigInt("1811")
		const uintfI6TM3n = BigInt("42")
		const uint256sklVbhn = await NasiLiquidityPoolFactoryOSRezXu.setAllocationPoint.call(uintfI6TM3n, uintPWcfDYr, boolufLgrE, {from: accounts[2]});
		const stringXGJm3A3 = await NasiLiquidityPoolFactoryOSRezXu.name.call({from: accounts[0]});
		const uint8rWu5Wpx = await NasiLiquidityPoolFactoryOSRezXu.decimals.call({from: accounts[0]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addressn77xSh5 = accounts[0]
		const addressQrcVBBk = accounts[1]
		const uintcgPlFkE = BigInt("1136")
		const uintwHt7bm = BigInt("1519")
		const NasiLiquidityPoolFactorywnaqCCR = await NasiLiquidityPoolFactory.new(addressn77xSh5, addressQrcVBBk, uintcgPlFkE, uintwHt7bm, {from: "0x0000000000000000000000000000000000000001"});
		const uintzmD8yzc = BigInt("132")
		const uintisTfNvh = BigInt("1812")
		const addressKAZ5hJi = "0x0000000000000000000000000000000000000001"
		const uint256i1E7m8k = await NasiLiquidityPoolFactorywnaqCCR.burn.call(uintzmD8yzc, {from: "0x0000000000000000000000000000000000000001"});
		await NasiLiquidityPoolFactorywnaqCCR.onlyPauser.call({from: accounts[2]});
		const boolyfT4qda = await NasiLiquidityPoolFactorywnaqCCR.decreaseAllowance.call(addressKAZ5hJi, uintisTfNvh, {from: accounts[1]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringSVTnY6P = "e0ci9RoMDjAXkqzYW0slK4w"
		const stringB9CbBb7 = "pRuZPolbShYkpByMLXUCOmmgazs1seyJEsFBT94uB8xKVq8hApF134Ifl"
		const uintFDOupHV = BigInt("202")
		const NasiLiquidityPoolFactorypQG8w8A = await NasiLiquidityPoolFactory.new(stringSVTnY6P, stringB9CbBb7, uintFDOupHV, {from: accounts[2]});
		const uintTkdD6RM = BigInt("1665")
		const addressoY86yjv = accounts[1]
		const addresszubl4ak = accounts[4]
		const uintM9jKEq = BigInt("513")
		const addresscbWtThp = accounts[4]
		const addressl1FzrGF = accounts[2]
		const uint256nPjKOaQ = await NasiLiquidityPoolFactorypQG8w8A.enterStaking.call(uintTkdD6RM, {from: accounts[4]});
		await NasiLiquidityPoolFactorypQG8w8A.massUpdatePools.call({from: "0x0000000000000000000000000000000000000001"});
		const addressdgH8bI5 = await NasiLiquidityPoolFactorypQG8w8A._delegate.call(addresszubl4ak, addressoY86yjv, {from: accounts[2]});
		const boolKxVkRFX = await NasiLiquidityPoolFactorypQG8w8A.transferFrom.call(addressl1FzrGF, addresscbWtThp, uintM9jKEq, {from: accounts[4]});
		const stringMFWS64L = await NasiLiquidityPoolFactorypQG8w8A.name.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringoGJY2ZV = "ZIaVqph5m2EWWIOBBzqzs0NRrJPyPeF"
		const stringgnKjKyj = "gvH1W"
		const uintu4R9OKM = BigInt("173")
		const NasiLiquidityPoolFactoryFG4KTyB = await NasiLiquidityPoolFactory.new(stringoGJY2ZV, stringgnKjKyj, uintu4R9OKM, {from: accounts[3]});
		const uintYnWnna7 = BigInt("836")
		const uintkNn9fZL = BigInt("1515")
		const uintBgn3oxD = BigInt("128")
		const addressVy3jUDj = accounts[2]
		const uintXcBzAYW = BigInt("1479")
		const uintfduJDcj = BigInt("961")
		const addressVhA5FiH = accounts[0]
		const uintRRvXuj4 = BigInt("1604")
		const addresshZJN7QT = accounts[2]
		const 
JqCis3U = await NasiLiquidityPoolFactoryFG4KTyB._writeCheckpoint.call(addressVy3jUDj, uintBgn3oxD, uintkNn9fZL, uintYnWnna7, {from: accounts[1]});
		const uint256v6rzkWj = await NasiLiquidityPoolFactoryFG4KTyB.enterStaking.call(uintXcBzAYW, {from: accounts[3]});
		const boolbIRSlvY = await NasiLiquidityPoolFactoryFG4KTyB.approve.call(addressVhA5FiH, uintfduJDcj, {from: accounts[0]});
		const boolz7L94QY = await NasiLiquidityPoolFactoryFG4KTyB.increaseAllowance.call(addresshZJN7QT, uintRRvXuj4, {from: accounts[4]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addressvOBpCeK = accounts[2]
		const addressonNTrgK = accounts[4]
		const uintrImTRsD = BigInt("1589")
		const uintc7DFPQ = BigInt("1826")
		const NasiLiquidityPoolFactoryb8KWgkX = await NasiLiquidityPoolFactory.new(addressvOBpCeK, addressonNTrgK, uintrImTRsD, uintc7DFPQ, {from: accounts[4]});
		const boolqALsEU = false
		const addresscoXQwim = accounts[1]
		const uintUGKwvTv = BigInt("961")
		const addressyWXWA9 = accounts[3]
		const uint256tJdAGO = await NasiLiquidityPoolFactoryb8KWgkX.addLpToken.call(uintUGKwvTv, addresscoXQwim, boolqALsEU, {from: accounts[1]});
		await NasiLiquidityPoolFactoryb8KWgkX.onlyOwner.call({from: accounts[0]});
		const addressJEF5wOl = await NasiLiquidityPoolFactoryb8KWgkX.addPauser.call(addressyWXWA9, {from: "0x0000000000000000000000000000000000000001"});
		const uint256oDDw6mI = await NasiLiquidityPoolFactoryb8KWgkX.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringM4yxFiq = "v55NyKs8p8Vj9Gi83f9mnEoDwvnSCQ7X5Ya8qAJ7rXQa6HozOmbgqRIgfkmYUwJz1lx5oTFln8fCOu6R"
		const stringGQPhh2x = "D1o5iqCdzgoPTzLu0C3iGAKFiawORbx57lD5QcjDF4WuUU4oiyetWVdU2ddUlplFjk3ktWgs23tFQQ6hfltnoU7"
		const uintDHrHnRA = BigInt("88")
		const NasiLiquidityPoolFactoryYoSjNxJ = await NasiLiquidityPoolFactory.new(stringM4yxFiq, stringGQPhh2x, uintDHrHnRA, {from: accounts[3]});
		const bytewXMcPNz = "0x1a1d150c0705120a191220061e04091e20090304060c07150c0909040a0b1505"
		const byte8VCXSF = "0x081a1d1d011707181f051b10101a0709021f07160a051d101915080215121108"
		const uintmpYVtbc = BigInt("163")
		const uintitxotiH = BigInt("1042")
		const uintz81qaL = BigInt("1149")
		const addressDjzMCE2 = "0x0000000000000000000000000000000000000001"
		await NasiLiquidityPoolFactoryYoSjNxJ.massUpdatePools.call({from: accounts[2]});
		const 
JLP94ve = await NasiLiquidityPoolFactoryYoSjNxJ.delegateBySig.call(addressDjzMCE2, uintz81qaL, uintitxotiH, uintmpYVtbc, byte8VCXSF, bytewXMcPNz, {from: accounts[4]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringyErZYoj = "cwaleWeAv2Ojp9c9B1kYPNXCTrFEOOfGkv1uRO"
		const stringUqHpF4V = "uDuMcos7JmMcjdlgURt8Jz5gFgLNBgsMv0rRmnbzEafEMpyp8mydggKxRXVMA5KeJE1o39"
		const uintqz7Mzpv = BigInt("159")
		const NasiLiquidityPoolFactoryPEbEYbG = await NasiLiquidityPoolFactory.new(stringyErZYoj, stringUqHpF4V, uintqz7Mzpv, {from: accounts[3]});
		const uintB69r7N8 = BigInt("885")
		const addressGnktYXF = accounts[0]
		const addressTUldGVq = "0x0000000000000000000000000000000000000001"
		const addresstC8HfZ = accounts[2]
		const addressIhm8Ij1 = accounts[1]
		const booldvUBsox = await NasiLiquidityPoolFactoryPEbEYbG.transfer.call(addressGnktYXF, uintB69r7N8, {from: "0x0000000000000000000000000000000000000001"});
		await NasiLiquidityPoolFactoryPEbEYbG.onlyOwner.call({from: accounts[2]});
		const addressiKJMtDv = await NasiLiquidityPoolFactoryPEbEYbG.setMigrator.call(addressTUldGVq, {from: accounts[3]});
		const uint256X8CSjBZ = await NasiLiquidityPoolFactoryPEbEYbG.allowance.call(addressIhm8Ij1, addresstC8HfZ, {from: accounts[1]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addressGUW3o38 = accounts[4]
		const addressPLu969T = accounts[4]
		const uintG7O4xMD = BigInt("428")
		const uintsknXT1E = BigInt("123")
		const NasiLiquidityPoolFactoryWhfyqFg = await NasiLiquidityPoolFactory.new(addressGUW3o38, addressPLu969T, uintG7O4xMD, uintsknXT1E, {from: accounts[4]});
		const uintyUwi255 = BigInt("1248")
		await NasiLiquidityPoolFactoryWhfyqFg.massUpdatePools.call({from: accounts[3]});
		const uint2566EJmSG = await NasiLiquidityPoolFactoryWhfyqFg.enterStaking.call(uintyUwi255, {from: accounts[0]});
		await NasiLiquidityPoolFactoryWhfyqFg.unpause.call({from: accounts[1]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringSr9b4jc = "WXKObpHTRqR3tESJETVQNrN1tzJfq0u1LGj1VmBh3WdipelvaYWNWAGxLPgcTEAVfJJqmkjSVpzEuHbS"
		const stringCBAGwcb = "6rykaqpcLikDclb5JQHZNd5KSTzh37g3tc9C"
		const uintDaLMVgJ = BigInt("13")
		const NasiLiquidityPoolFactorycPzfDEy = await NasiLiquidityPoolFactory.new(stringSr9b4jc, stringCBAGwcb, uintDaLMVgJ, {from: accounts[4]});
		const addresswj2zHqa = accounts[4]
		const uintqeflj41 = BigInt("411")
		const boolHmwi1kX = await NasiLiquidityPoolFactorycPzfDEy.isPauser.call(addresswj2zHqa, {from: accounts[3]});
		const uint256FwARknK = await NasiLiquidityPoolFactorycPzfDEy.leaveStaking.call(uintqeflj41, {from: accounts[4]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringv8Tsgig = "gaJTcZOyHKtglvOhSRpxTG"
		const stringhBqqIjI = "Ei27zdFvJyE4acnCsqtCpe5gj2ychRl1na3j22gMqYjgnHG41XKshxB6UB8QTpj"
		const uintz0mx4N2 = BigInt("77")
		const NasiLiquidityPoolFactorykvrlD7y = await NasiLiquidityPoolFactory.new(stringv8Tsgig, stringhBqqIjI, uintz0mx4N2, {from: accounts[2]});
		const uintDOsCihb = BigInt("1250")
		const uintmYmojEy = BigInt("368")
		const addresstPbjsOx = accounts[3]
		const uint256dw8F1s4 = await NasiLiquidityPoolFactorykvrlD7y.emergencyWithdraw.call(uintDOsCihb, {from: accounts[3]});
		const boolRzwAon3 = await NasiLiquidityPoolFactorykvrlD7y.decreaseAllowance.call(addresstPbjsOx, uintmYmojEy, {from: accounts[5]});
		await NasiLiquidityPoolFactorykvrlD7y.massUpdatePools.call({from: accounts[4]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addressGrzkLyb = accounts[4]
		const addressH5y1NBB = accounts[4]
		const uintAus91vE = BigInt("428")
		const uintyeCa5y = BigInt("123")
		const NasiLiquidityPoolFactoryWhfyqFg = await NasiLiquidityPoolFactory.new(addressGrzkLyb, addressH5y1NBB, uintAus91vE, uintyeCa5y, {from: accounts[4]});
		const addressQewu8eu = accounts[4]
		const addressFdOdUbf = await NasiLiquidityPoolFactoryWhfyqFg.dev.call(addressQewu8eu, {from: accounts[4]});
		await NasiLiquidityPoolFactoryWhfyqFg.unpause.call({from: accounts[1]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringfMRQGuT = "KMG5cupyIX"
		const stringbam3afs = "hArRxDm2"
		const uintmp4uayH = BigInt("32")
		const NasiLiquidityPoolFactorymzbGdmY = await NasiLiquidityPoolFactory.new(stringfMRQGuT, stringbam3afs, uintmp4uayH, {from: "0x0000000000000000000000000000000000000001"});
		const uint3GVkCe = BigInt("1240")
		const addressuZWICld = accounts[3]
		const addressyScaO2I = accounts[3]
		const addressJja7KYY = accounts[5]
		const addressOXUIuK6 = accounts[0]
		const uintrFNl7Lt = BigInt("1348")
		const addressQwyodbq = accounts[2]
		const boolNaOBXQT = await NasiLiquidityPoolFactorymzbGdmY.transferFrom.call(addressyScaO2I, addressuZWICld, uint3GVkCe, {from: accounts[2]});
		const uint256Wi4cLrd = await NasiLiquidityPoolFactorymzbGdmY.allowance.call(addressOXUIuK6, addressJja7KYY, {from: accounts[5]});
		const boolKxhAYVa = await NasiLiquidityPoolFactorymzbGdmY.mint.call(addressQwyodbq, uintrFNl7Lt, {from: accounts[4]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addressxKWFrei = accounts[4]
		const addressDOb3R6K = accounts[4]
		const uinttJp4Uxy = BigInt("428")
		const uintORZNOOy = BigInt("123")
		const NasiLiquidityPoolFactoryWhfyqFg = await NasiLiquidityPoolFactory.new(addressxKWFrei, addressDOb3R6K, uinttJp4Uxy, uintORZNOOy, {from: accounts[4]});
		const uintrCZTDZH = BigInt("971")
		const uint256omwsUq = await NasiLiquidityPoolFactoryWhfyqFg.migrate.call(uintrCZTDZH, {from: accounts[1]});
		await NasiLiquidityPoolFactoryWhfyqFg.unpause.call({from: accounts[1]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addressj9BljjR = accounts[4]
		const addressExEyFlZ = accounts[4]
		const uintst90BWo = BigInt("428")
		const uintGC7mamZ = BigInt("123")
		const NasiLiquidityPoolFactoryWhfyqFg = await NasiLiquidityPoolFactory.new(addressj9BljjR, addressExEyFlZ, uintst90BWo, uintGC7mamZ, {from: accounts[4]});
		const uint2Jrc08 = BigInt("1775")
		const uintnsNvoCu = BigInt("2027")
		const uint256uZMrN3 = await NasiLiquidityPoolFactoryWhfyqFg.withdraw.call(uintnsNvoCu, uint2Jrc08, {from: accounts[5]});
		await NasiLiquidityPoolFactoryWhfyqFg.renounceOwnership.call({from: accounts[0]});
		await NasiLiquidityPoolFactoryWhfyqFg.whenNotPaused.call({from: accounts[4]});
	});
})