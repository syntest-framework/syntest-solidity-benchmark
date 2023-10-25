const Dipex = artifacts.require("Dipex");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Dipex', (accounts) => {
	it('test for Dipex', async () => {
		const stringm9C9wD = "G1TxU18jvGGwxS"
		const stringmUi9Wzo = "Xz0Xi8nYXrLo"
		const uintJxydrip = BigInt("1228")
		const DipexqM4BPIs = await Dipex.new(stringm9C9wD, stringmUi9Wzo, uintJxydrip, {from: "0x0000000000000000000000000000000000000001"});
		const uintviG1YUP = BigInt("844")
		const addressfV7gM7N = accounts[4]
		const uintFSS7nru = BigInt("173")
		const addressIHMyFuE = "0x0000000000000000000000000000000000000001"
		const addressjaBSzAd = accounts[5]
		const uintXv85Udb = BigInt("968")
		const addressOJWC7AW = accounts[2]
		const uintlHZT9lW = BigInt("1086")
		const addressvMnRKgU = accounts[0]
		const boolWVKyRGi = await DipexqM4BPIs.approve.call(addressfV7gM7N, uintviG1YUP, {from: accounts[1]});
		const boolsihjV1b = await DipexqM4BPIs.transferFrom.call(addressjaBSzAd, addressIHMyFuE, uintFSS7nru, {from: accounts[5]});
		const boolTdBdWwM = await DipexqM4BPIs.approveAndCall.call(addressOJWC7AW, uintXv85Udb, {from: accounts[4]});
		const boolfBdfQDR = await DipexqM4BPIs.approveAndCall.call(addressvMnRKgU, uintlHZT9lW, {from: accounts[2]});
	});

	it('test for Dipex', async () => {
		const stringemPEVH = "7Ebb318JXSKYbPsxDjvmHaP9ysS7TUwhFkT2flqIBK"
		const stringUZ6VNka = "kshfdqjQ1q8V75jdlL5jePmcp29E7OvJU"
		const uint3WkAJa = BigInt("1724")
		const DipexzlRJoop = await Dipex.new(stringemPEVH, stringUZ6VNka, uint3WkAJa, {from: accounts[3]});
		const uintFH5W49d = BigInt("273")
		const addresslayLwA8 = accounts[2]
		const uintIYxaLW7 = BigInt("220")
		const addressrmC1U2e = accounts[2]
		const addressXrSFo63 = "0x0000000000000000000000000000000000000001"
		const uintDJpAiHA = BigInt("487")
		const addressFKM86MD = accounts[3]
		const addressh9EzCnu = accounts[5]
		const uintlIcuezt = BigInt("144")
		const addressZNbxBf9 = accounts[2]
		const address842lvw = accounts[4]
		const boolvNQPZB = await DipexzlRJoop.approve.call(addresslayLwA8, uintFH5W49d, {from: accounts[3]});
		const boollN4faDH = await DipexzlRJoop.transferFrom.call(addressXrSFo63, addressrmC1U2e, uintIYxaLW7, {from: accounts[5]});
		const boolo87woJb = await DipexzlRJoop.transferFrom.call(addressh9EzCnu, addressFKM86MD, uintDJpAiHA, {from: accounts[2]});
		const boolJs2ithe = await DipexzlRJoop.transferFrom.call(address842lvw, addressZNbxBf9, uintlIcuezt, {from: accounts[5]});

		assert.equal(boolvNQPZB, true)
		await expect(DipexzlRJoop.transferFrom.call(addressXrSFo63, addressrmC1U2e, uintIYxaLW7, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const stringiAS612 = "7H1NdpfgNbC4T54Cco273vxGBPLqF7rNVt"
		const stringoC81s2b = "kyLR4nltj4HMgU1Gk6YnAIZmNgc2Aubij3eLDwgH"
		const uintFyVpAy7 = BigInt("329")
		const DipexvqyqMab = await Dipex.new(stringiAS612, stringoC81s2b, uintFyVpAy7, {from: accounts[0]});
		const uintRaw7Y2D = BigInt("854")
		const addressea1yTp = accounts[5]
		const uintMHCC5ll = BigInt("186")
		const addresszgLVa3m = accounts[2]
		const addressjJnQNr = accounts[2]
		const uintxzssS9 = BigInt("1829")
		const addressp1jzl3 = accounts[1]
		const uintuEfsJza = BigInt("1192")
		const addressfAjV66P = accounts[5]
		const uintDGZltgC = BigInt("1128")
		const addressylWSxcO = accounts[3]
		const boolwodC4kL = await DipexvqyqMab.approveAndCall.call(addressea1yTp, uintRaw7Y2D, {from: accounts[3]});
		const boolFUYBsJy = await DipexvqyqMab.transferFrom.call(addressjJnQNr, addresszgLVa3m, uintMHCC5ll, {from: accounts[2]});
		const boolYCFuT42 = await DipexvqyqMab.transfer.call(addressp1jzl3, uintxzssS9, {from: accounts[4]});
		const boolvYOIcOz = await DipexvqyqMab.transfer.call(addressfAjV66P, uintuEfsJza, {from: accounts[1]});
		const boolyezZqS4 = await DipexvqyqMab.approveAndCall.call(addressylWSxcO, uintDGZltgC, {from: accounts[4]});

		await expect(DipexvqyqMab.approveAndCall.call(addressea1yTp, uintRaw7Y2D, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const stringydZbiBX = "nsgsMMbqRMjvV4fnBdH7bjEMUXibsBQczV3Y9dXlgcABJMDO3ntIzuOAGkjX7f9mLGeNicpW1uQpm51pDzSAPrFLGD"
		const stringjVVBYZu = "t3TXquXMax8a4acP5W7dGBeYP2LbntUzqCZ1K3bjp2dXxygObX6Vo2uD4p9nsUeSe9ia9rmcGbZ7bEmmyNS02ATVA8ydR"
		const uintUhMqRHo = BigInt("1749")
		const Dipex0hS4Sj = await Dipex.new(stringydZbiBX, stringjVVBYZu, uintUhMqRHo, {from: accounts[2]});
		const uintOrX4LQP = BigInt("1302")
		const addressHoWbBDO = accounts[3]
		const uintAw8ueOA = BigInt("1955")
		const addressAyLSVWi = accounts[3]
		const addressiN8HUv8 = accounts[4]
		const uintJmjWufr = BigInt("1310")
		const addressBssYNbd = accounts[1]
		const uintdMPa2Ly = BigInt("1192")
		const addressxSVPXEb = accounts[5]
		const addressoaQY8r3 = accounts[1]
		const boolQDoA5wC = await Dipex0hS4Sj.transfer.call(addressHoWbBDO, uintOrX4LQP, {from: accounts[0]});
		const boolDQB9luv = await Dipex0hS4Sj.transferFrom.call(addressiN8HUv8, addressAyLSVWi, uintAw8ueOA, {from: "0x0000000000000000000000000000000000000001"});
		const boolJN8qNB3 = await Dipex0hS4Sj.approveAndCall.call(addressBssYNbd, uintJmjWufr, {from: accounts[1]});
		const boolcQDC6Ds = await Dipex0hS4Sj.transferFrom.call(addressoaQY8r3, addressxSVPXEb, uintdMPa2Ly, {from: accounts[5]});

		await expect(Dipex0hS4Sj.transfer.call(addressHoWbBDO, uintOrX4LQP, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const stringrWdv8ge = "wcszBsrtDhmZAGOtYjjeTQviiBPinnsHjTU1wBLNfcjGpMi0HzkPhDafTNu3CrL2vF4QdlbPqOiidxw0vQaTFGBlu9WXtWMx"
		const stringhe4A918 = "G3sJBGTeSfrkinShxLlpMaAG9NIJFpY"
		const uintcElNzQ = BigInt("618")
		const DipexUvZMWAr = await Dipex.new(stringrWdv8ge, stringhe4A918, uintcElNzQ, {from: accounts[4]});
		const uintY05NYVv = BigInt("448")
		const addressM60TBOR = accounts[4]
		const uintRmTlpOg = BigInt("1973")
		const addresssELCqpW = accounts[1]
		const uintkkviSu = BigInt("141")
		const addressXZp5jfl = accounts[2]
		const addresskJQ14rq = accounts[3]
		const uintruu5NUU = BigInt("952")
		const addressb4U7rEN = accounts[5]
		const boolJdWUOA8 = await DipexUvZMWAr.approveAndCall.call(addressM60TBOR, uintY05NYVv, {from: accounts[4]});
		const boole5ULkxF = await DipexUvZMWAr.approve.call(addresssELCqpW, uintRmTlpOg, {from: accounts[1]});
		const boolFLRrd9E = await DipexUvZMWAr.transferFrom.call(addresskJQ14rq, addressXZp5jfl, uintkkviSu, {from: accounts[2]});
		const boolAJSYsX2 = await DipexUvZMWAr.approve.call(addressb4U7rEN, uintruu5NUU, {from: accounts[5]});

		assert.equal(boolJdWUOA8, true)
		assert.equal(boole5ULkxF, true)
		await expect(DipexUvZMWAr.transferFrom.call(addresskJQ14rq, addressXZp5jfl, uintkkviSu, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const stringxBlrz4w = "uw1YzIdeL2G1"
		const stringY60ESP3 = ""
		const uintO2amdES = BigInt("1547")
		const DipexJYkkJV = await Dipex.new(stringxBlrz4w, stringY60ESP3, uintO2amdES, {from: accounts[1]});
		const uintD7CEdxk = BigInt("915")
		const addressUv69IrL = accounts[4]
		const addressVCmiJnX = accounts[1]
		const addressSPYEfuf = accounts[2]
		const uintkASIo9S = BigInt("871")
		const addressw6utRYU = accounts[3]
		const uinttQhmjj2 = BigInt("1135")
		const addressJRXlOkq = accounts[1]
		const boolMpqtt4 = await DipexJYkkJV.approve.call(addressUv69IrL, uintD7CEdxk, {from: accounts[0]});
		const boolYxni8uk = await DipexJYkkJV.transferownership.call(addressVCmiJnX, {from: accounts[2]});
		const boolbrRb7o = await DipexJYkkJV.transferownership.call(addressSPYEfuf, {from: "0x0000000000000000000000000000000000000001"});
		const boolTAAWrJw = await DipexJYkkJV.approve.call(addressw6utRYU, uintkASIo9S, {from: accounts[2]});
		const booldDwnsjX = await DipexJYkkJV.transfer.call(addressJRXlOkq, uinttQhmjj2, {from: accounts[0]});

		assert.equal(boolMpqtt4, true)
		await expect(DipexJYkkJV.transferownership.call(addressVCmiJnX, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const stringrWdv8ge = "wcszBsrtDhmZAGOtYjjeTQviiBPinnsHjTU1wBLNfcjGpMi0HzkPhDafTNu3CrL2vF4QdlbPqOiidxw0vQaTFGBlu9WXtWMx"
		const stringhe4A918 = "G3sJBGTeSfrkinShxLlpMaAG9NIJFpY"
		const uintZ65RhRf = BigInt("618")
		const DipexUvZMWAr = await Dipex.new(stringrWdv8ge, stringhe4A918, uintZ65RhRf, {from: accounts[4]});
		const uintAwJNxFu = BigInt("485")
		const addressxmdG4gn = accounts[2]
		const uintxB6izLf = BigInt("462")
		const addressNa9Xd41 = accounts[4]
		const addressyecd6u = accounts[0]
		const uinteB3f5c2 = BigInt("1973")
		const addressi0GmrUp = accounts[1]
		const addressgaVr10Z = accounts[0]
		const uintGrembXS = BigInt("952")
		const addressEX9dEer = accounts[5]
		const boolkAvHw3 = await DipexUvZMWAr.transfer.call(addressxmdG4gn, uintAwJNxFu, {from: accounts[4]});
		const boolJdWUOA8 = await DipexUvZMWAr.approveAndCall.call(addressNa9Xd41, uintxB6izLf, {from: accounts[4]});
		const boolme3kDGt = await DipexUvZMWAr.transferownership.call(addressyecd6u, {from: accounts[1]});
		const boole5ULkxF = await DipexUvZMWAr.approve.call(addressi0GmrUp, uinteB3f5c2, {from: accounts[1]});
		const boold749r9r = await DipexUvZMWAr.transferownership.call(addressgaVr10Z, {from: accounts[4]});
		const boolAJSYsX2 = await DipexUvZMWAr.approve.call(addressEX9dEer, uintGrembXS, {from: accounts[5]});

		assert.equal(boolJdWUOA8, true)
		assert.equal(boolkAvHw3, true)
		await expect(DipexUvZMWAr.transferownership.call(addressyecd6u, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const stringlipHVsm = "FIDYH5HNzq6C6Vplc7InqevSz53QKlzc4oXXvw3jnee1nhSElcGNmMOOdmWrR8Ps"
		const stringNZ32u7Q = "BU8wHM9wTStpg29TqiXj5Y2F"
		const uintmpvTO2 = BigInt("1013")
		const Dipexwc0Z4ra = await Dipex.new(stringlipHVsm, stringNZ32u7Q, uintmpvTO2, {from: accounts[4]});
		const addressj4TA4Uh = accounts[4]
		const uintyBHPCDU = BigInt("0")
		const addressFuE4A7y = accounts[1]
		const uintUA3oaFP = BigInt("1210")
		const addressmuOX5Xl = accounts[5]
		const uintxrS6PA0 = BigInt("1320")
		const addressGPDXUaD = accounts[0]
		const addressUxVp1b6 = accounts[2]
		const uintA1masuL = BigInt("1098")
		const addresstLQ9VCd = accounts[4]
		const booln6gnzJ = await Dipexwc0Z4ra.transferownership.call(addressj4TA4Uh, {from: accounts[4]});
		const boolbtpzeGv = await Dipexwc0Z4ra.approveAndCall.call(addressFuE4A7y, uintyBHPCDU, {from: accounts[4]});
		const boolDNluTn = await Dipexwc0Z4ra.approve.call(addressmuOX5Xl, uintUA3oaFP, {from: accounts[0]});
		const boolLnIFLli = await Dipexwc0Z4ra.transferFrom.call(addressUxVp1b6, addressGPDXUaD, uintxrS6PA0, {from: "0x0000000000000000000000000000000000000001"});
		const boolwwYIn2 = await Dipexwc0Z4ra.approve.call(addresstLQ9VCd, uintA1masuL, {from: accounts[1]});

		assert.equal(boolDNluTn, true)
		assert.equal(boolbtpzeGv, true)
		assert.equal(booln6gnzJ, true)
		await expect(Dipexwc0Z4ra.transferFrom.call(addressUxVp1b6, addressGPDXUaD, uintxrS6PA0, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const stringrWdv8ge = "wcszBsrtDhmZAGOtYjjeTQviiBPinnsHjTU1wBLNfcjGpMi0HzkPhDafTNu3CrL2vF4QdlbPqOiidxw0vQaTFGBlu9WXtWMx"
		const stringhe4A918 = "G3sJBGTeSfrkinShxLlpMaAG9NIJFpY"
		const uintMuclWyF = BigInt("618")
		const DipexUvZMWAr = await Dipex.new(stringrWdv8ge, stringhe4A918, uintMuclWyF, {from: accounts[4]});
		const uintZcx6Gw = BigInt("0")
		const addressSKAWp7v = accounts[0]
		const addresszpkOdR = accounts[1]
		const uintRefsmkM = BigInt("81")
		const addresstbuNeA4 = accounts[1]
		const addressDH5VOKD = "0x0000000000000000000000000000000000000001"
		const boolxuDimje = await DipexUvZMWAr.transferFrom.call(addresszpkOdR, addressSKAWp7v, uintZcx6Gw, {from: accounts[2]});
		const boolvTL2KgE = await DipexUvZMWAr.transferFrom.call(addressDH5VOKD, addresstbuNeA4, uintRefsmkM, {from: accounts[2]});

		assert.equal(boolxuDimje, true)
		await expect(DipexUvZMWAr.transferFrom.call(addressDH5VOKD, addresstbuNeA4, uintRefsmkM, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})