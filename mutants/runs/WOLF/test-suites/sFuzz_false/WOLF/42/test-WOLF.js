const WOLF = artifacts.require("WOLF");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('WOLF', (accounts) => {
	it('test for WOLF', async () => {
		const stringOLVVbH1 = "jHQuyz1oHsuRRnX9hz1vmktoNkiJmnTjFhVXiDPU4QDj"
		const stringxPcqA0 = "1daHIbIbVIzUQVxb1PcagAt"
		const uintbfwwuts = BigInt("1753")
		const WOLFAqoVTsi = await WOLF.new(stringOLVVbH1, stringxPcqA0, uintbfwwuts, {from: accounts[0]});
		const uintVvTo0NT = BigInt("840")
		const addressxBVHlWt = accounts[5]
		const addressBGJkX9B = accounts[2]
		const uintS09a5Jf = BigInt("1884")
		const addressnOU65tk = accounts[1]
		const uintmcyMGaU = BigInt("789")
		const addressTBBbeY = accounts[0]
		const boolLaPGRNI = await WOLFAqoVTsi.transferFrom.call(addressBGJkX9B, addressxBVHlWt, uintVvTo0NT, {from: accounts[4]});
		const boolde3beAc = await WOLFAqoVTsi.approve.call(addressnOU65tk, uintS09a5Jf, {from: "0x0000000000000000000000000000000000000001"});
		const boolFIHTOVU = await WOLFAqoVTsi.approveAndCall.call(addressTBBbeY, uintmcyMGaU, {from: "0x0000000000000000000000000000000000000001"});

		await expect(WOLFAqoVTsi.transferFrom.call(addressBGJkX9B, addressxBVHlWt, uintVvTo0NT, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for WOLF', async () => {
		const stringmuV0RQM = "mKG4P7YYxY2zcKx06IBFhTnYQjEYeYTTfpaxlqwNmMFUjvBbUPezZug"
		const stringOccIgqN = "HUlQiXALOxztlUqe2"
		const uintJ4WSZOB = BigInt("1574")
		const WOLFB8tC9Fp = await WOLF.new(stringmuV0RQM, stringOccIgqN, uintJ4WSZOB, {from: accounts[5]});
		const uintHBzfsfc = BigInt("1268")
		const address1XVwBv = "0x0000000000000000000000000000000000000001"
		const addressmz7ZYf = accounts[1]
		const uintXgR5pKu = BigInt("1389")
		const addressiSPaG96 = accounts[1]
		const uintkIa2Q8 = BigInt("1203")
		const addressL5omL06 = accounts[0]
		const uintVlIj89O = BigInt("448")
		const addressBqrBbPt = accounts[3]
		const uintKpgGfx = BigInt("527")
		const addressziTA8VG = accounts[0]
		const boolWHmkRve = await WOLFB8tC9Fp.transferFrom.call(addressmz7ZYf, address1XVwBv, uintHBzfsfc, {from: accounts[1]});
		const boolNXcWsA = await WOLFB8tC9Fp.approve.call(addressiSPaG96, uintXgR5pKu, {from: accounts[1]});
		const boolkcPMek7 = await WOLFB8tC9Fp.approve.call(addressL5omL06, uintkIa2Q8, {from: accounts[1]});
		const boolK6HoEP9 = await WOLFB8tC9Fp.approve.call(addressBqrBbPt, uintVlIj89O, {from: accounts[1]});
		const boolPYnueq2 = await WOLFB8tC9Fp.approve.call(addressziTA8VG, uintKpgGfx, {from: accounts[1]});

		await expect(WOLFB8tC9Fp.transferFrom.call(addressmz7ZYf, address1XVwBv, uintHBzfsfc, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for WOLF', async () => {
		const stringUbgaccn = "Ph7WiLfBFrfjHx28vE"
		const stringSDAu3ig = "llrHCuE3VtAUbvwVHs7BSZwl3HhOL"
		const uintOcobnXK = BigInt("1227")
		const WOLFwsvpSe0 = await WOLF.new(stringUbgaccn, stringSDAu3ig, uintOcobnXK, {from: accounts[4]});
		const uintvmEno0V = BigInt("428")
		const addressQgkbPBO = accounts[5]
		const uintMlygSIy = BigInt("1456")
		const addresskYILNg = accounts[1]
		const uintkbFsLgR = BigInt("685")
		const addressEkvSIWd = accounts[5]
		const addressqqgwI3o = accounts[2]
		const uintUuNIAGQ = BigInt("1826")
		const addressHxump5G = "0x0000000000000000000000000000000000000001"
		const booloNzegsq = await WOLFwsvpSe0.approveAndCall.call(addressQgkbPBO, uintvmEno0V, {from: accounts[2]});
		const boolyGUNRAD = await WOLFwsvpSe0.approve.call(addresskYILNg, uintMlygSIy, {from: accounts[2]});
		const boolW5ftvJ = await WOLFwsvpSe0.transferFrom.call(addressqqgwI3o, addressEkvSIWd, uintkbFsLgR, {from: accounts[4]});
		const boolVYGqS8P = await WOLFwsvpSe0.transfer.call(addressHxump5G, uintUuNIAGQ, {from: accounts[4]});

		await expect(WOLFwsvpSe0.approveAndCall.call(addressQgkbPBO, uintvmEno0V, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for WOLF', async () => {
		const stringszRbWgP = "PGnqff6E3Q62MNdnxP4PTbzZkCwHFaULLSY2RlZog72RSHYNm2XhHyOsI9b6FMTAfNMgcMowHV48sfrtRpvofi362Q"
		const stringuZuQ16W = "XODI6gM5osQXlnvPRMCBry9fA"
		const uintaajlMhb = BigInt("365")
		const WOLFCpMEq5x = await WOLF.new(stringszRbWgP, stringuZuQ16W, uintaajlMhb, {from: accounts[1]});
		const uintWmY2jL5 = BigInt("930")
		const addressqX09oSa = accounts[1]
		const uintzfNJ53H = BigInt("886")
		const addressXexfZeh = accounts[2]
		const uintXKWAokO = BigInt("507")
		const addressEYH7iKN = accounts[0]
		const address3y81IR = accounts[4]
		const bool2XQUgN = await WOLFCpMEq5x.approve.call(addressqX09oSa, uintWmY2jL5, {from: accounts[3]});
		const boolEex2FzX = await WOLFCpMEq5x.approveAndCall.call(addressXexfZeh, uintzfNJ53H, {from: accounts[0]});
		const boolg0PUcD6 = await WOLFCpMEq5x.transferFrom.call(address3y81IR, addressEYH7iKN, uintXKWAokO, {from: accounts[2]});

		assert.equal(bool2XQUgN, true)
		await expect(WOLFCpMEq5x.approveAndCall.call(addressXexfZeh, uintzfNJ53H, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for WOLF', async () => {
		const stringc7vflpd = "U4ousmoucK6bXHdXcfKuNizKs26f4YCFumhXkI7K93ngLemqmcIU2MCK8OsPkB2HITHhxLKJZSIy3vAsOHBDKtkhgP"
		const stringBrKBBZp = "j4sr5izlHYq491uKsxN4nF98rKH98T"
		const uintNJlibv3 = BigInt("880")
		const WOLFInPitJM = await WOLF.new(stringc7vflpd, stringBrKBBZp, uintNJlibv3, {from: accounts[0]});
		const addressmAxG8xL = accounts[4]
		const uintjkBhoIN = BigInt("1303")
		const addressu2CeNC2 = accounts[3]
		const uintcMrSWA = BigInt("2032")
		const addressUa3ta7q = accounts[5]
		const addressnlYTTdV = accounts[2]
		const boolVwXWQyy = await WOLFInPitJM.transferownership.call(addressmAxG8xL, {from: accounts[2]});
		const boolRTggOrS = await WOLFInPitJM.approveAndCall.call(addressu2CeNC2, uintjkBhoIN, {from: accounts[1]});
		const boolVL91kPO = await WOLFInPitJM.transferFrom.call(addressnlYTTdV, addressUa3ta7q, uintcMrSWA, {from: accounts[0]});

		await expect(WOLFInPitJM.transferownership.call(addressmAxG8xL, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for WOLF', async () => {
		const stringszRbWgP = "PGnqff6E3Q62MNdnxP4PTbzZkCwHFaULLSY2RlZog72RSHYNm2XhHyOsI9b6FMTAfNMgcMowHV48sfrtRpvofi362Q"
		const stringuZuQ16W = "XODI6gM5osQXlnvPRMCBry9fA"
		const uintFhMv2UP = BigInt("365")
		const WOLFCpMEq5x = await WOLF.new(stringszRbWgP, stringuZuQ16W, uintFhMv2UP, {from: accounts[1]});
		const uintSNSIV6w = BigInt("930")
		const addressxn7cba6 = accounts[1]
		const uinttKQJ0Dt = BigInt("1210")
		const addressPHDj3Te = accounts[1]
		const uintFxsDz2H = BigInt("886")
		const addressXs8WNZQ = accounts[2]
		const uintV3WBWnU = BigInt("935")
		const addresszYCYyHB = accounts[0]
		const uintYFvcKfT = BigInt("507")
		const addressbW45ixt = accounts[1]
		const addressLFqfmqz = accounts[4]
		const bool2XQUgN = await WOLFCpMEq5x.approve.call(addressxn7cba6, uintSNSIV6w, {from: accounts[3]});
		const boolckSfdo2 = await WOLFCpMEq5x.transfer.call(addressPHDj3Te, uinttKQJ0Dt, {from: accounts[4]});
		const boolEex2FzX = await WOLFCpMEq5x.approveAndCall.call(addressXs8WNZQ, uintFxsDz2H, {from: accounts[0]});
		const boolA1HmLEY = await WOLFCpMEq5x.approveAndCall.call(addresszYCYyHB, uintV3WBWnU, {from: accounts[3]});
		const boolg0PUcD6 = await WOLFCpMEq5x.transferFrom.call(addressLFqfmqz, addressbW45ixt, uintYFvcKfT, {from: accounts[2]});

		assert.equal(bool2XQUgN, true)
		await expect(WOLFCpMEq5x.transfer.call(addressPHDj3Te, uinttKQJ0Dt, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for WOLF', async () => {
		const stringirip0O = "YCG1Raj9WNoX9KigIih8mFzF7FX9BEO6RQDwGPvGn5IRC9FXcsPgAxyBXREVEuWsqgvP8eSd1B"
		const stringGlg3fU6 = "MYFgm521QFl3FYCXGcgNhI4L3QirkD5nOmkamAy1i2i8IER2wJBTjPHUwfhaGN7cFOlibXMClUV4pIY89O"
		const uintAGmjtRk = BigInt("590")
		const WOLFe6ukupK = await WOLF.new(stringirip0O, stringGlg3fU6, uintAGmjtRk, {from: accounts[1]});
		const uintIMZ5Yi6 = BigInt("1909")
		const addressiANlAlQ = accounts[1]
		const uintjJehC6V = BigInt("1377")
		const addresstExI2zb = accounts[2]
		const uintkAvwRM5 = BigInt("1594")
		const addressP0atghZ = accounts[4]
		const addressAQne1Nu = "0x0000000000000000000000000000000000000001"
		const boolGXnGnX1 = await WOLFe6ukupK.approveAndCall.call(addressiANlAlQ, uintIMZ5Yi6, {from: accounts[1]});
		const boolKqjv3nF = await WOLFe6ukupK.approveAndCall.call(addresstExI2zb, uintjJehC6V, {from: accounts[0]});
		const boolbH8RyiG = await WOLFe6ukupK.approveAndCall.call(addressP0atghZ, uintkAvwRM5, {from: accounts[5]});
		const boolttBDTb6 = await WOLFe6ukupK.transferownership.call(addressAQne1Nu, {from: accounts[0]});

		assert.equal(boolGXnGnX1, true)
		await expect(WOLFe6ukupK.approveAndCall.call(addresstExI2zb, uintjJehC6V, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for WOLF', async () => {
		const stringYoGPhA1 = "DL4HYQOutG5YwMlHSPAtQ7cyb"
		const stringyv67qAB = "oqGVstgsawm3wimf99OHZRzws7fE3WdmaqgwK5PFIOYhKLcOp72RH1AtZFopiv1sTPpg"
		const uintmBQ8yKx = BigInt("1354")
		const WOLFMn9tfcF = await WOLF.new(stringYoGPhA1, stringyv67qAB, uintmBQ8yKx, {from: "0x0000000000000000000000000000000000000001"});
		const uintIhao6n = BigInt("448")
		const addressrg2K07g = accounts[2]
		const uintVTNeSvA = BigInt("340")
		const addressoCf89g = accounts[5]
		const boolXHnTGTy = await WOLFMn9tfcF.approveAndCall.call(addressrg2K07g, uintIhao6n, {from: accounts[0]});
		const boolHevj7VQ = await WOLFMn9tfcF.approveAndCall.call(addressoCf89g, uintVTNeSvA, {from: accounts[1]});
	});

	it('test for WOLF', async () => {
		const stringmuV0RQM = "mKG4P7YYxY2zcKx06IBFhTnYQjEYeYTTfpaxlqwNmMFUjvBbUPezZug"
		const stringOccIgqN = "HUlQiXALOxztlUqe2"
		const uintUxRmbCQ = BigInt("1574")
		const WOLFB8tC9Fp = await WOLF.new(stringmuV0RQM, stringOccIgqN, uintUxRmbCQ, {from: accounts[5]});
		const uintjico3SI = BigInt("0")
		const addressfwjhWgy = accounts[4]
		const addressGYxvHfJ = accounts[4]
		const uinttfpfKV0 = BigInt("52")
		const addressW3bDFMe = "0x0000000000000000000000000000000000000001"
		const addressa9DzZJk = accounts[0]
		const uintISvSFYe = BigInt("111")
		const addressfBARI76 = accounts[3]
		const boolkt7VgXM = await WOLFB8tC9Fp.transferFrom.call(addressGYxvHfJ, addressfwjhWgy, uintjico3SI, {from: accounts[3]});
		const boolJERnGw1 = await WOLFB8tC9Fp.transferFrom.call(addressa9DzZJk, addressW3bDFMe, uinttfpfKV0, {from: accounts[3]});
		const boolnTlqPA4 = await WOLFB8tC9Fp.approveAndCall.call(addressfBARI76, uintISvSFYe, {from: accounts[4]});

		assert.equal(boolkt7VgXM, true)
		await expect(WOLFB8tC9Fp.transferFrom.call(addressa9DzZJk, addressW3bDFMe, uinttfpfKV0, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for WOLF', async () => {
		const stringmuV0RQM = "mKG4P7YYxY2zcKx06IBFhTnYQjEYeYTTfpaxlqwNmMFUjvBbUPezZug"
		const stringOccIgqN = "HUlQiXALOxztlUqe2"
		const uintjiBUtrg = BigInt("1574")
		const WOLFB8tC9Fp = await WOLF.new(stringmuV0RQM, stringOccIgqN, uintjiBUtrg, {from: accounts[5]});
		const uintOnqB3b8 = BigInt("149")
		const addressurk3my5 = accounts[1]
		const uintvNJbFyW = BigInt("1268")
		const addressTktuaK5 = "0x00000000000000000000000000000000000000-1"
		const addressoQjAC7q = accounts[1]
		const boolehP5BNJ = await WOLFB8tC9Fp.approveAndCall.call(addressurk3my5, uintOnqB3b8, {from: accounts[5]});
		const boolWHmkRve = await WOLFB8tC9Fp.transferFrom.call(addressoQjAC7q, addressTktuaK5, uintvNJbFyW, {from: accounts[1]});

		assert.equal(boolehP5BNJ, true)
		await expect(WOLFB8tC9Fp.transferFrom.call(addressoQjAC7q, addressTktuaK5, uintvNJbFyW, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for WOLF', async () => {
		const stringmuV0RQM = "mKG4P7YYxY2zcKx06IBFhTnYQjEYeYTTfpaxlqwNmMFUjvBbUPezZug"
		const stringOccIgqN = "HUlQiXALOxztlUqe2"
		const uintAJtD78X = BigInt("1574")
		const WOLFB8tC9Fp = await WOLF.new(stringmuV0RQM, stringOccIgqN, uintAJtD78X, {from: accounts[5]});
		const uintVGm57D7 = BigInt("2020")
		const addressMYQw0ap = accounts[1]
		const uintqJDZ7T3 = BigInt("0")
		const addressUUXHOjP = accounts[7]
		const boolDtFpHlA = await WOLFB8tC9Fp.approve.call(addressMYQw0ap, uintVGm57D7, {from: accounts[3]});
		const boole8upKq4 = await WOLFB8tC9Fp.approveAndCall.call(addressUUXHOjP, uintqJDZ7T3, {from: accounts[5]});

		assert.equal(boolDtFpHlA, true)
		assert.equal(boole8upKq4, true)
	});
})