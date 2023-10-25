const GreenMarkTrust = artifacts.require("GreenMarkTrust");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('GreenMarkTrust', (accounts) => {
	it('test for GreenMarkTrust', async () => {
		const uinteVrfz1R = BigInt("1978")
		const stringE2dln0M = "yJHagHv3aTdqSjvQ0gLZvnXHblKasn0DOcolCYfhxI623EAkoYv3vQuiJXIfOIpyvN5I08Od6mVXV"
		const stringJIwa06j = "uMaE5acnqCuTi0y8H3WRz7bkb5hXKCO9bwp5JWGSIMEsYj"
		const GreenMarkTrustca2VUN8 = await GreenMarkTrust.new(uinteVrfz1R, stringE2dln0M, stringJIwa06j, {from: accounts[3]});
		const uintJBo4KJC = BigInt("952")
		const addressbKeNH0Z = accounts[3]
		const addressuliGctp = accounts[5]
		const uintLXcmVe2 = BigInt("1965")
		const addressIPN5t7b = accounts[1]
		const uintCpRknsK = BigInt("693")
		const addressmEUUPlx = accounts[0]
		const uintGeu9iMa = BigInt("521")
		const addressUeQQTZ = accounts[3]
		const uintq0UWjO1 = BigInt("862")
		const addressiTOHTNU = accounts[2]
		const boolhwiQPm = await GreenMarkTrustca2VUN8.transferFrom.call(addressuliGctp, addressbKeNH0Z, uintJBo4KJC, {from: accounts[5]});
		const boolDWTJRog = await GreenMarkTrustca2VUN8.approve.call(addressIPN5t7b, uintLXcmVe2, {from: accounts[4]});
		const booluMLbAq = await GreenMarkTrustca2VUN8.burnFrom.call(addressmEUUPlx, uintCpRknsK, {from: accounts[3]});
		const boolQPvf5t = await GreenMarkTrustca2VUN8.burnFrom.call(addressUeQQTZ, uintGeu9iMa, {from: accounts[4]});
		const boolhq6P5l4 = await GreenMarkTrustca2VUN8.burnFrom.call(addressiTOHTNU, uintq0UWjO1, {from: accounts[4]});

		await expect(GreenMarkTrustca2VUN8.transferFrom.call(addressuliGctp, addressbKeNH0Z, uintJBo4KJC, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for GreenMarkTrust', async () => {
		const uintukIs5Qg = BigInt("2023")
		const stringTIMWY1Q = "aOlKuEb970uBm1u6o1BT"
		const stringVrfLawE = "Dbd7r7CqgWvjkvbklOQGxJpFCxOS4Sa0LPqdvznhp1TRW9kVASWNLWpHvK7hykpqm3lLVWhCOhmrG9aOActI"
		const GreenMarkTrustiC2kAM1 = await GreenMarkTrust.new(uintukIs5Qg, stringTIMWY1Q, stringVrfLawE, {from: accounts[2]});
		const uintTuDpB0I = BigInt("1844")
		const addressHvxho9l = accounts[3]
		const uintcp6NiN0 = BigInt("1726")
		const addressZGQ2wYR = accounts[2]
		const uintNmdhibn = BigInt("1247")
		const uintFV9u4m = BigInt("1207")
		const addressmr2Wjkv = accounts[0]
		const boolYlkiiSX = await GreenMarkTrustiC2kAM1.burnFrom.call(addressHvxho9l, uintTuDpB0I, {from: accounts[5]});
		const boolBEcBfhd = await GreenMarkTrustiC2kAM1.burnFrom.call(addressZGQ2wYR, uintcp6NiN0, {from: "0x0000000000000000000000000000000000000001"});
		const boolsCDJ5qj = await GreenMarkTrustiC2kAM1.burn.call(uintNmdhibn, {from: accounts[3]});
		const boolWlprhcA = await GreenMarkTrustiC2kAM1.approve.call(addressmr2Wjkv, uintFV9u4m, {from: accounts[0]});

		await expect(GreenMarkTrustiC2kAM1.burnFrom.call(addressHvxho9l, uintTuDpB0I, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for GreenMarkTrust', async () => {
		const uintr0wkyps = BigInt("1316")
		const stringR3cO1xn = "juzzh2ZEVi2Glk79koNFad2ObAyOcwkLd5Is8KeWqeAjoTDeyHywAHEVy4L76xUjlTfdk6mcOLeCcZI"
		const stringuy0Lut8 = "UWsVwtUH31SPP4GVE2eGrwb17P"
		const GreenMarkTrustttLoefh = await GreenMarkTrust.new(uintr0wkyps, stringR3cO1xn, stringuy0Lut8, {from: accounts[0]});
		const byteecdw5T = "0x1f1c160e0e20141919100b02050f1416180a13110711001a1d011a1a1f"
		const uintRJbg7Ly = BigInt("589")
		const addressXRP8Yd0 = accounts[1]
		const uintanmdj1F = BigInt("24")
		const addressCWirvax = accounts[5]
		const addressLZWB4us = accounts[2]
		const uintJkDAUgP = BigInt("1786")
		const addressKSRAiZ = accounts[4]
		const uint1WwuKl = BigInt("2019")
		const addressoj6BvWO = accounts[4]
		const uintgrKAgTe = BigInt("907")
		const addressTXcsvhZ = accounts[4]
		const boolQAQ5Ztz = await GreenMarkTrustttLoefh.approveAndCall.call(addressXRP8Yd0, uintRJbg7Ly, byteecdw5T, {from: accounts[4]});
		const boolGN9Nci = await GreenMarkTrustttLoefh.transferFrom.call(addressLZWB4us, addressCWirvax, uintanmdj1F, {from: accounts[1]});
		const boolJ7eygeJ = await GreenMarkTrustttLoefh.approve.call(addressKSRAiZ, uintJkDAUgP, {from: accounts[0]});
		const boolkFATxq = await GreenMarkTrustttLoefh.burnFrom.call(addressoj6BvWO, uint1WwuKl, {from: accounts[5]});
		const boolqhDFyJT = await GreenMarkTrustttLoefh.approve.call(addressTXcsvhZ, uintgrKAgTe, {from: accounts[2]});

		await expect(GreenMarkTrustttLoefh.approveAndCall.call(addressXRP8Yd0, uintRJbg7Ly, byteecdw5T, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for GreenMarkTrust', async () => {
		const uintaqzoTmj = BigInt("1956")
		const stringGZxGAVs = "feDlhOAW3Be"
		const stringOh9MgTy = "U1tOrH4EMbktBLS5Yfcu5zaD6B"
		const GreenMarkTrustir6XSDs = await GreenMarkTrust.new(uintaqzoTmj, stringGZxGAVs, stringOh9MgTy, {from: "0x0000000000000000000000000000000000000001"});
		const uintF5ML7VZ = BigInt("279")
		const address9Gg5ZF = accounts[2]
		const uinth1SHNNw = BigInt("1841")
		const addressamiYgg = accounts[2]
		const boolQk4PnFK = await GreenMarkTrustir6XSDs.approve.call(address9Gg5ZF, uintF5ML7VZ, {from: accounts[4]});
		const boolEsC26F = await GreenMarkTrustir6XSDs.transfer.call(addressamiYgg, uinth1SHNNw, {from: accounts[5]});
	});

	it('test for GreenMarkTrust', async () => {
		const uintybmdC6V = BigInt("218")
		const stringDvI6vc9 = "CpyGjSatHefK4GDxga6"
		const stringZiQkFMH = "D4DAXKpZmVwjlbEnBZWkK"
		const GreenMarkTrustpiz3Th1 = await GreenMarkTrust.new(uintybmdC6V, stringDvI6vc9, stringZiQkFMH, {from: accounts[1]});
		const uintAlxq2SR = BigInt("941")
		const uintpkRI5KF = BigInt("1009")
		const addressNMsM0yX = accounts[4]
		const addressLatixzU = accounts[5]
		const uintVGHr0PQ = BigInt("494")
		const addressn4Lp6wC = accounts[2]
		const uintz89XbNR = BigInt("719")
		const addressVQUOag = accounts[1]
		const boolISe5XJF = await GreenMarkTrustpiz3Th1.burn.call(uintAlxq2SR, {from: accounts[0]});
		const boolqprNeCG = await GreenMarkTrustpiz3Th1.transferFrom.call(addressLatixzU, addressNMsM0yX, uintpkRI5KF, {from: accounts[3]});
		const boolkiP0wzg = await GreenMarkTrustpiz3Th1.transfer.call(addressn4Lp6wC, uintVGHr0PQ, {from: accounts[0]});
		const boolGLeQ4CF = await GreenMarkTrustpiz3Th1.transfer.call(addressVQUOag, uintz89XbNR, {from: accounts[2]});

		await expect(GreenMarkTrustpiz3Th1.burn.call(uintAlxq2SR, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GreenMarkTrust', async () => {
		const uintYqrlbvE = BigInt("1583")
		const stringIWyyhAV = "dm9EMoIwfVyP5LMBcEKwdsElmpW25M2AD5VyKR30PnlurO3stg"
		const stringiqm4KZs = "6zsMwArbiblYgMwghhopkSamDL61YgFbjjZSU64"
		const GreenMarkTrustCVjv9ps = await GreenMarkTrust.new(uintYqrlbvE, stringIWyyhAV, stringiqm4KZs, {from: accounts[5]});
		const uintjXhlE6 = BigInt("193")
		const addressMQwbIbk = accounts[3]
		const uintVZmFVRM = BigInt("1232")
		const uintNIXx0dR = BigInt("1181")
		const boolxwWMqD = await GreenMarkTrustCVjv9ps.transfer.call(addressMQwbIbk, uintjXhlE6, {from: accounts[3]});
		const boolaFkrbb = await GreenMarkTrustCVjv9ps.burn.call(uintVZmFVRM, {from: accounts[3]});
		const boolrfRiIk0 = await GreenMarkTrustCVjv9ps.burn.call(uintNIXx0dR, {from: accounts[4]});

		await expect(GreenMarkTrustCVjv9ps.transfer.call(addressMQwbIbk, uintjXhlE6, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GreenMarkTrust', async () => {
		const uintn97VOlS = BigInt("743")
		const stringfUWWgHt = "2Tk77JCTc3GrvERwTzVcYv0bhljK6YUhQLf3WK"
		const stringrHbMFL = "dgeMEvJqhpql8wcokIvKkCLieaO4YH1xtNTq4NykkpaYQfpaB7NGt"
		const GreenMarkTrustfOE1M4M = await GreenMarkTrust.new(uintn97VOlS, stringfUWWgHt, stringrHbMFL, {from: accounts[3]});
		const uintbxj4bG = BigInt("1016")
		const addressFfR2Rc1 = accounts[3]
		const uinto0PU3T3 = BigInt("1456")
		const addressd0xMQoP = accounts[3]
		const byteyrrLEp = "0x0e03150c0f04131418050e08181d"
		const uint8L4n52 = BigInt("1089")
		const addresspoBe9z = accounts[5]
		const boolyWbdV5q = await GreenMarkTrustfOE1M4M.transfer.call(addressFfR2Rc1, uintbxj4bG, {from: accounts[3]});
		const boolIDKTarG = await GreenMarkTrustfOE1M4M.transfer.call(addressd0xMQoP, uinto0PU3T3, {from: "0x0000000000000000000000000000000000000001"});
		const boolgVuXXFV = await GreenMarkTrustfOE1M4M.approveAndCall.call(addresspoBe9z, uint8L4n52, byteyrrLEp, {from: accounts[0]});

		assert.equal(boolyWbdV5q, true)
		await expect(GreenMarkTrustfOE1M4M.transfer.call(addressd0xMQoP, uinto0PU3T3, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for GreenMarkTrust', async () => {
		const uintcxKIC9 = BigInt("2023")
		const stringTIMWY1Q = "aOlKuEb970uBm1u6o1BT"
		const stringVrfLawE = "Dbd7r7CqgWvjkvbklOQGxJpFCxOS4Sa0LPqdvznhp1TRW9kVASWNLWpHvK7hykpqm3lLVWhCOhmrG9aOActI"
		const GreenMarkTrustiC2kAM1 = await GreenMarkTrust.new(uintcxKIC9, stringTIMWY1Q, stringVrfLawE, {from: accounts[2]});
		const uintYiF7QNL = BigInt("1844")
		const addresseoknYs = accounts[2]
		const uintsMUIAMQ = BigInt("1979")
		const addresskJwOMiL = accounts[2]
		const boolYlkiiSX = await GreenMarkTrustiC2kAM1.burnFrom.call(addresseoknYs, uintYiF7QNL, {from: accounts[5]});
		const boolSIl1o9c = await GreenMarkTrustiC2kAM1.approve.call(addresskJwOMiL, uintsMUIAMQ, {from: accounts[4]});

		await expect(GreenMarkTrustiC2kAM1.burnFrom.call(addresseoknYs, uintYiF7QNL, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for GreenMarkTrust', async () => {
		const uintOboUZP0 = BigInt("366")
		const stringCJREHb7 = "uC1TTI"
		const stringCgAW6WZ = "dFfM6jFVUie9qGEpXk2LjAFshI5tmBh22xkPbq8R933smTIPaaIcDfXG0e1YHMQjxZ"
		const GreenMarkTrustioKcF2c = await GreenMarkTrust.new(uintOboUZP0, stringCJREHb7, stringCgAW6WZ, {from: accounts[2]});
		const uintbdghkaO = BigInt("1954")
		const uintsfiKSoi = BigInt("1512")
		const addressPtbAc1C = accounts[5]
		const addressT3bBkMA = accounts[4]
		const uintgotWtnW = BigInt("2028")
		const addressQes2gPu = accounts[0]
		const boolLdX6xvz = await GreenMarkTrustioKcF2c.burn.call(uintbdghkaO, {from: accounts[2]});
		const boolVUOVrBE = await GreenMarkTrustioKcF2c.transferFrom.call(addressT3bBkMA, addressPtbAc1C, uintsfiKSoi, {from: accounts[3]});
		const boolmvm9TAy = await GreenMarkTrustioKcF2c.transfer.call(addressQes2gPu, uintgotWtnW, {from: accounts[2]});

		assert.equal(boolLdX6xvz, true)
		await expect(GreenMarkTrustioKcF2c.transferFrom.call(addressT3bBkMA, addressPtbAc1C, uintsfiKSoi, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})