const GreenMarkTrust = artifacts.require("GreenMarkTrust");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('GreenMarkTrust', (accounts) => {
	it('test for GreenMarkTrust', async () => {
		const uintnUhDzVj = BigInt("632")
		const stringVgaRjqN = "H2FIdYpWsG"
		const stringqYIBL0j = "exsWHIYjvjkjk8SXKApYFKzfQ7WdIt9aShznniGEOOXVWKA3a"
		const GreenMarkTrustdQpDxO0 = await GreenMarkTrust.new(uintnUhDzVj, stringVgaRjqN, stringqYIBL0j, {from: "0x0000000000000000000000000000000000000001"});
		const uintWgONs7R = BigInt("1268")
		const addressvE0vI4A = accounts[2]
		const addressetgehI = "0x0000000000000000000000000000000000000001"
		const bytenHxm3D = "0x071212150a171c0511060f0d0f1913081316120905061c0801171d070d"
		const uintDA912F = BigInt("1586")
		const addresswzAtDS7 = "0x0000000000000000000000000000000000000001"
		const uintPZmJTY = BigInt("252")
		const addresshKrBEuu = accounts[4]
		const addresshJL8HoS = accounts[5]
		const uintaHQqqh = BigInt("388")
		const addressNmeC20J = accounts[1]
		const uintZq6e5Nc = BigInt("1617")
		const addressaI6VA5G = accounts[3]
		const boolX7ktD9H = await GreenMarkTrustdQpDxO0.transferFrom.call(addressetgehI, addressvE0vI4A, uintWgONs7R, {from: accounts[2]});
		const boolU0gVkCj = await GreenMarkTrustdQpDxO0.approveAndCall.call(addresswzAtDS7, uintDA912F, bytenHxm3D, {from: accounts[1]});
		const boolSuKkgHz = await GreenMarkTrustdQpDxO0.transferFrom.call(addresshJL8HoS, addresshKrBEuu, uintPZmJTY, {from: accounts[0]});
		const boolOTGk87D = await GreenMarkTrustdQpDxO0.transfer.call(addressNmeC20J, uintaHQqqh, {from: accounts[1]});
		const boolm69zPJ = await GreenMarkTrustdQpDxO0.burnFrom.call(addressaI6VA5G, uintZq6e5Nc, {from: accounts[5]});
	});

	it('test for GreenMarkTrust', async () => {
		const uintxx2YEja = BigInt("47")
		const stringnGWasye = "qzbuAQNqZxQ6Sa3P101nrhxTUPyYWgoRBJF5LfUC"
		const stringOUPZWct = "bGhzBUFhsqZndnBaBnd9tedQYsfgC4"
		const GreenMarkTrustGLKu5I5 = await GreenMarkTrust.new(uintxx2YEja, stringnGWasye, stringOUPZWct, {from: accounts[0]});
		const byteehCfvHx = "0x15121a030c0404180f030c0c1c0b111b031509"
		const uintUXrpApr = BigInt("870")
		const addressqVdW0h5 = accounts[0]
		const uintML8y0lq = BigInt("1604")
		const addresswWjq96H = accounts[2]
		const addressNYOaeF = accounts[3]
		const uintLcy2Boq = BigInt("835")
		const addressz0ZFzSI = accounts[2]
		const addressGDfXxv = accounts[3]
		const uinttB7Vah3 = BigInt("1143")
		const addressSuCgncU = accounts[3]
		const boolJUrFeck = await GreenMarkTrustGLKu5I5.approveAndCall.call(addressqVdW0h5, uintUXrpApr, byteehCfvHx, {from: accounts[1]});
		const boolHCn5coV = await GreenMarkTrustGLKu5I5.transferFrom.call(addressNYOaeF, addresswWjq96H, uintML8y0lq, {from: accounts[1]});
		const boolQAnmD3 = await GreenMarkTrustGLKu5I5.transferFrom.call(addressGDfXxv, addressz0ZFzSI, uintLcy2Boq, {from: accounts[5]});
		const boolxPMAAT = await GreenMarkTrustGLKu5I5.transfer.call(addressSuCgncU, uinttB7Vah3, {from: accounts[2]});

		await expect(GreenMarkTrustGLKu5I5.approveAndCall.call(addressqVdW0h5, uintUXrpApr, byteehCfvHx, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GreenMarkTrust', async () => {
		const uintvrwsG9N = BigInt("484")
		const stringEZt7o3K = "HLHXYP7Vw3y2osPVXSBPsIPERyj"
		const stringkeu8Yd3 = "G1BnIHrYEycW9pWSoy0k4AzzNv6o9MJ3VIvuR3kVfM9sGsTPAXnzzLd8L79xXe"
		const GreenMarkTrustzwj5JVZ = await GreenMarkTrust.new(uintvrwsG9N, stringEZt7o3K, stringkeu8Yd3, {from: accounts[4]});
		const uintBcnD8x = BigInt("31")
		const addressviQ3AeL = accounts[3]
		const uintlP5AQGP = BigInt("1864")
		const addressQMYBdX = accounts[5]
		const booloFwc8X = await GreenMarkTrustzwj5JVZ.approve.call(addressviQ3AeL, uintBcnD8x, {from: accounts[2]});
		const boolpri7lVo = await GreenMarkTrustzwj5JVZ.transfer.call(addressQMYBdX, uintlP5AQGP, {from: accounts[1]});

		assert.equal(booloFwc8X, true)
		await expect(GreenMarkTrustzwj5JVZ.transfer.call(addressQMYBdX, uintlP5AQGP, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GreenMarkTrust', async () => {
		const uintp4hRk5t = BigInt("766")
		const stringjq2kKT7 = "cEI1T9scjCt1izZp53kP26i3XAwUQzTwTmdbecKkxPVb6A4RE"
		const stringP5bdQy6 = "1f27Gt3WXFiDLiF3MIS2TWsbyXULnnJwPgGnaUSUpHEo1kSmmQaw1KW3bnxaLuBkeYEoFQjDecqCPaCo4"
		const GreenMarkTrustGmy4NzN = await GreenMarkTrust.new(uintp4hRk5t, stringjq2kKT7, stringP5bdQy6, {from: accounts[2]});
		const uintFB5kiUg = BigInt("2044")
		const addressZ4JghPi = accounts[3]
		const byteqcYFSr = "0x1d071c120a0d0d0e160d070515"
		const uinttBGcGC = BigInt("1886")
		const addressZ5xNWr5 = accounts[3]
		const uintBs5ZmpO = BigInt("725")
		const addressz5lPB0d = accounts[3]
		const bytebeoMajH = "0x0a18150b07061f0801"
		const uintScOHui = BigInt("1189")
		const addressknaEnmx = accounts[1]
		const boolD3Ef77M = await GreenMarkTrustGmy4NzN.burnFrom.call(addressZ4JghPi, uintFB5kiUg, {from: accounts[2]});
		const boolRurLTNW = await GreenMarkTrustGmy4NzN.approveAndCall.call(addressZ5xNWr5, uinttBGcGC, byteqcYFSr, {from: accounts[3]});
		const boolQuEbn07 = await GreenMarkTrustGmy4NzN.transfer.call(addressz5lPB0d, uintBs5ZmpO, {from: "0x0000000000000000000000000000000000000001"});
		const boolf8adwJC = await GreenMarkTrustGmy4NzN.approveAndCall.call(addressknaEnmx, uintScOHui, bytebeoMajH, {from: accounts[3]});

		await expect(GreenMarkTrustGmy4NzN.burnFrom.call(addressZ4JghPi, uintFB5kiUg, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GreenMarkTrust', async () => {
		const uintGDTyBVs = BigInt("1071")
		const stringExuZGwm = "7OcjAs6B1Uj8rEkVZb93ORmijPAv68xbHsFM1YgTQDImKcLkEkaMokXR0Wg9LW4CPLzKgPsk1QRKs1N8foPbWeYSQpqOza"
		const stringRcylOtB = "8P05NdT7WBo9bAPoMiiZ1fORcPvT371ec2JyWhQdXcaJAUEEWQwjnKHqifV"
		const GreenMarkTrustb4gQVVi = await GreenMarkTrust.new(uintGDTyBVs, stringExuZGwm, stringRcylOtB, {from: accounts[4]});
		const uintYUmSiKY = BigInt("1677")
		const addressOHWc4dK = accounts[3]
		const addresstYQGje = accounts[3]
		const uintwwn7v0y = BigInt("1774")
		const addressMNzjLHS = accounts[2]
		const byteMBzftSs = "0x1403170e06120e1a151f0802110015100b101c"
		const uintfXAh3M = BigInt("254")
		const addressOTVV5PB = accounts[1]
		const byteSPXN2E7 = "0x141e070504051c03"
		const uintfcAizsa = BigInt("1811")
		const addressXYJxmfm = accounts[4]
		const uintNaKWnj3 = BigInt("1591")
		const addressQltp7aJ = accounts[2]
		const addressWsrkr8Q = accounts[5]
		const booljv5XjEI = await GreenMarkTrustb4gQVVi.transferFrom.call(addresstYQGje, addressOHWc4dK, uintYUmSiKY, {from: accounts[4]});
		const boolDb1Eba = await GreenMarkTrustb4gQVVi.transfer.call(addressMNzjLHS, uintwwn7v0y, {from: accounts[2]});
		const boolsZR6rmV = await GreenMarkTrustb4gQVVi.approveAndCall.call(addressOTVV5PB, uintfXAh3M, byteMBzftSs, {from: accounts[3]});
		const boolDLwzudE = await GreenMarkTrustb4gQVVi.approveAndCall.call(addressXYJxmfm, uintfcAizsa, byteSPXN2E7, {from: "0x0000000000000000000000000000000000000001"});
		const boolfMoPee = await GreenMarkTrustb4gQVVi.transferFrom.call(addressWsrkr8Q, addressQltp7aJ, uintNaKWnj3, {from: accounts[3]});

		await expect(GreenMarkTrustb4gQVVi.transferFrom.call(addresstYQGje, addressOHWc4dK, uintYUmSiKY, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for GreenMarkTrust', async () => {
		const uintT74WfDn = BigInt("484")
		const stringEZt7o3K = "HLHXYP7Vw3y2osPVXSBPsIPERyj"
		const stringkeu8Yd3 = "G1BnIHrYEycW9pWSoy0k4AzzNv6o9MJ3VIvuR3kVfM9sGsTPAXnzzLd8L79xXe"
		const GreenMarkTrustzwj5JVZ = await GreenMarkTrust.new(uintT74WfDn, stringEZt7o3K, stringkeu8Yd3, {from: accounts[4]});
		const uintyjK2cUf = BigInt("31")
		const addressNcnYX4 = accounts[3]
		const uintj2tR6X5 = BigInt("1950")
		const uintfTBTVj = BigInt("1864")
		const addressgqN3Vyc = accounts[5]
		const booloFwc8X = await GreenMarkTrustzwj5JVZ.approve.call(addressNcnYX4, uintyjK2cUf, {from: accounts[2]});
		const boolBXGdWho = await GreenMarkTrustzwj5JVZ.burn.call(uintj2tR6X5, {from: accounts[1]});
		const boolpri7lVo = await GreenMarkTrustzwj5JVZ.transfer.call(addressgqN3Vyc, uintfTBTVj, {from: accounts[1]});

		assert.equal(booloFwc8X, true)
		await expect(GreenMarkTrustzwj5JVZ.burn.call(uintj2tR6X5, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GreenMarkTrust', async () => {
		const uintMPwCVjz = BigInt("1498")
		const stringH1lXS54 = "crXvgRgI6fOctLvQnQiepiSo8ITKntBXCRvxRxggIRAzxxUApe1Em3rQPS69tTGUHoLXBRYg"
		const stringHri0T9M = "OSKmtr7m6UMKKvfnqiuDclNkFbbZsJat6cPeThXUesAKsovcKENrBebYaePf1fBmW"
		const GreenMarkTrustMWwoSy5 = await GreenMarkTrust.new(uintMPwCVjz, stringH1lXS54, stringHri0T9M, {from: accounts[1]});
		const uintaoWkEoB = BigInt("1742")
		const addressQGFprw5 = accounts[1]
		const uintsLEme34 = BigInt("126")
		const addresshQRMcmZ = "0x0000000000000000000000000000000000000001"
		const bytefglWpB = "0x0713010c181c07120e04181807181d0704041f0d141c1a0c101a1c1b0b"
		const uintrl4X3Q = BigInt("937")
		const addressFMyeHc8 = accounts[2]
		const boolHNhz77h = await GreenMarkTrustMWwoSy5.transfer.call(addressQGFprw5, uintaoWkEoB, {from: accounts[1]});
		const boolyK6DZKz = await GreenMarkTrustMWwoSy5.approve.call(addresshQRMcmZ, uintsLEme34, {from: accounts[1]});
		const boolrqvQlfV = await GreenMarkTrustMWwoSy5.approveAndCall.call(addressFMyeHc8, uintrl4X3Q, bytefglWpB, {from: accounts[4]});

		assert.equal(boolHNhz77h, true)
		assert.equal(boolyK6DZKz, true)
		await expect(GreenMarkTrustMWwoSy5.approveAndCall.call(addressFMyeHc8, uintrl4X3Q, bytefglWpB, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for GreenMarkTrust', async () => {
		const uintw8pKvjT = BigInt("1467")
		const stringfvfGQBY = "vuY6rtYOHJQfNxWv2gOKBWSgHMMxMLpc"
		const stringzNTl9b = "wthiXcVMw7M2Q8lEhsb6foeVC8e09HFEQBrK6z"
		const GreenMarkTrustJBueFqc = await GreenMarkTrust.new(uintw8pKvjT, stringfvfGQBY, stringzNTl9b, {from: accounts[1]});
		const uintAGWoI2e = BigInt("313")
		const addressUvtgkzN = accounts[1]
		const uintxO2kQqC = BigInt("1813")
		const addressuDe9L9E = accounts[1]
		const uinthojpXgX = BigInt("1002")
		const boolVbMF0P6 = await GreenMarkTrustJBueFqc.approve.call(addressUvtgkzN, uintAGWoI2e, {from: accounts[1]});
		const boolZjX5AID = await GreenMarkTrustJBueFqc.burnFrom.call(addressuDe9L9E, uintxO2kQqC, {from: accounts[4]});
		const boolMQUvPzp = await GreenMarkTrustJBueFqc.burn.call(uinthojpXgX, {from: accounts[3]});

		assert.equal(boolVbMF0P6, true)
		await expect(GreenMarkTrustJBueFqc.burnFrom.call(addressuDe9L9E, uintxO2kQqC, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for GreenMarkTrust', async () => {
		const uinttvpwMlA = BigInt("457")
		const stringYyustXE = "zNB2LGgyTrTKJu2vgJ3JtMl4H4SiMgXnHAJrrKL9jUSPts9I3uM3chLgV3KJkwAiXqiJEy4z"
		const stringCQLSkiS = "2g1cX4hsE7uBsTcW0Iy6nItDEPBxG1SgWkos6Kd0sVVY9SHoMoPQIR7yMW8nyYH7NA8QbQiIBEB3NpNj5iEKDQfPt2j"
		const GreenMarkTrustMAkZtUv = await GreenMarkTrust.new(uinttvpwMlA, stringYyustXE, stringCQLSkiS, {from: accounts[5]});
		const uintG2ZNBA = BigInt("749")
		const bytewhke5U = "0x110405041f201b1409101a1c1c04181a04070c131d0220011b1a02180d"
		const uintjXI4LX = BigInt("1110")
		const addresszRb2w32 = accounts[4]
		const uintkjBcOx9 = BigInt("422")
		const address39TPif = accounts[0]
		const addressNOHC815 = accounts[4]
		const uintp3CdheL = BigInt("710")
		const uintnTgIIbb = BigInt("817")
		const addressK6Jn2ho = "0x0000000000000000000000000000000000000001"
		const addressRWVhsDH = accounts[5]
		const uintgvm1ePI = BigInt("1275")
		const addressvXWFX59 = accounts[1]
		const addresszpHTZGO = accounts[0]
		const booljP8IyJ3 = await GreenMarkTrustMAkZtUv.burn.call(uintG2ZNBA, {from: accounts[5]});
		const boolh5yBBc = await GreenMarkTrustMAkZtUv.approveAndCall.call(addresszRb2w32, uintjXI4LX, bytewhke5U, {from: accounts[2]});
		const boolAARoxiZ = await GreenMarkTrustMAkZtUv.transferFrom.call(addressNOHC815, address39TPif, uintkjBcOx9, {from: accounts[1]});
		const booliz4vusW = await GreenMarkTrustMAkZtUv.burn.call(uintp3CdheL, {from: accounts[5]});
		const booltzW2I4M = await GreenMarkTrustMAkZtUv.transferFrom.call(addressRWVhsDH, addressK6Jn2ho, uintnTgIIbb, {from: "0x0000000000000000000000000000000000000001"});
		const boolbAVB9N1 = await GreenMarkTrustMAkZtUv.transferFrom.call(addresszpHTZGO, addressvXWFX59, uintgvm1ePI, {from: accounts[0]});

		assert.equal(booljP8IyJ3, true)
		await expect(GreenMarkTrustMAkZtUv.approveAndCall.call(addresszRb2w32, uintjXI4LX, bytewhke5U, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})