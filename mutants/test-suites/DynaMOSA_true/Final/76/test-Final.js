const Final = artifacts.require("Final");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Final', (accounts) => {
	it('test for Final', async () => {
		const stringqnodNQU = "1DGyKV81gWQV2p9x3cV68JgiXgn8QfXXtqeCjI0rcsfBkh7xDk5oVvFHATJF"
		const stringACkgvCW = "pIBnpyKGJMks39cq8G"
		const uintTSJOoUp = BigInt("1983")
		const FinalQ26hX1S = await Final.new(stringqnodNQU, stringACkgvCW, uintTSJOoUp, {from: accounts[4]});
		const addresswqAOTw = accounts[1]
		const uintxx1TBlW = BigInt("1239")
		const addresstDDxYFJ = accounts[3]
		const uint8fEQKuil = await FinalQ26hX1S.decimals.call({from: accounts[2]});
		const uintAHecRoO = await FinalQ26hX1S.balanceOf.call(addresswqAOTw, {from: accounts[5]});
		const boolUOhYe8j = await FinalQ26hX1S.approve.call(addresstDDxYFJ, uintxx1TBlW, {from: accounts[4]});
		const uint8LNKCMHh = await FinalQ26hX1S.decimals.call({from: accounts[0]});

		assert.equal(boolUOhYe8j, true)
		assert.equal(uint8LNKCMHh, BigInt("18"))
		assert.equal(uint8fEQKuil, BigInt("18"))
		assert.equal(uintAHecRoO, BigInt("0"))
	});

	it('test for Final', async () => {
		const stringb0TfIHp = "T4zeQhypHu2Yy6W8E8ql8SHYy4JJXibMGNEfdPcGVTx2OXMir7j5luHTFcVLyDjwnsgL2ICP"
		const stringqTKXkWv = "2Q"
		const uintWSP0P73 = BigInt("1766")
		const FinalKRwn1Bv = await Final.new(stringb0TfIHp, stringqTKXkWv, uintWSP0P73, {from: accounts[0]});
		const uintBsxUs3U = BigInt("128")
		const address6z8Iov = accounts[2]
		const addressAjy09Oy = accounts[0]
		const addressYeanRKu = accounts[3]
		const addressgSaEW2n = accounts[5]
//		const boolOJ2hgVR = await FinalKRwn1Bv.transferFrom.call(addressAjy09Oy, address6z8Iov, uintBsxUs3U, {from: accounts[2]});
//		const uint8EoQWeKz = await FinalKRwn1Bv.decimals.call({from: accounts[0]});
//		const uint8SXEYkRM = await FinalKRwn1Bv.decimals.call({from: accounts[1]});
//		const uintOYyPxDK = await FinalKRwn1Bv.allowance.call(addressgSaEW2n, addressYeanRKu, {from: accounts[0]});
//		const stringjsz0ZrV = await FinalKRwn1Bv.name.call({from: accounts[0]});

		await expect(FinalKRwn1Bv.transferFrom.call(addressAjy09Oy, address6z8Iov, uintBsxUs3U, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Final', async () => {
		const stringdLbqvDk = "r6r29YIptcW5gjGkBWtnFmut"
		const stringqw3XIGC = "n91jMUsp6bneI6nQHcevH6riJS5kEF1C2sw1y5i96V8tr1KyAOTznkQ9J0BD8DCpFrta7ghtk27RNcKHHoah53v33Ka6Mmoo"
		const uintMpXILm = BigInt("95")
		const Final2acGTn = await Final.new(stringdLbqvDk, stringqw3XIGC, uintMpXILm, {from: "0x0000000000000000000000000000000000000001"});
		const uintzfNKy5Q = BigInt("881")
		const addressKdh3ilB = accounts[3]
		const addressqamCkSR = accounts[2]
		const addressR4AftAT = accounts[4]
		const addressSyILCu = accounts[0]
		const uintTUmd8hU = BigInt("2030")
		const addressWjuSyH7 = accounts[2]
		const uintCxBMV38 = BigInt("635")
		const addresseO1OfDA = accounts[4]
		const addressObpEp1n = accounts[3]
		const boolBO2SCf3 = await Final2acGTn.transferFrom.call(addressqamCkSR, addressKdh3ilB, uintzfNKy5Q, {from: accounts[3]});
		const uintVjhC15S = await Final2acGTn.allowance.call(addressSyILCu, addressR4AftAT, {from: accounts[1]});
		const booluaDCbFl = await Final2acGTn.approve.call(addressWjuSyH7, uintTUmd8hU, {from: accounts[3]});
		const boolkEjjDbS = await Final2acGTn.transferFrom.call(addressObpEp1n, addresseO1OfDA, uintCxBMV38, {from: accounts[0]});
		const uint8VbD6cXQ = await Final2acGTn.decimals.call({from: accounts[4]});
	});

	it('test for Final', async () => {
		const stringqWNPr37 = "GwkvjhXfd3w3G47OXdWUPl3gc"
		const stringktmQ8Oh = "MN7uBSHKscdT9COj7QHbzSyCbD9AfiHqkPcofWXgKDUxDK9jb65NCYrp2VvfqJcauTiXl8oTVv7VCTPQSph0BWdCB58esbcjJE9"
		const uintqsewngc = BigInt("69")
		const FinaliGS92uJ = await Final.new(stringqWNPr37, stringktmQ8Oh, uintqsewngc, {from: accounts[3]});
		const uintf2M4R6v = BigInt("1113")
		const addressHEbSsiq = accounts[4]
		const addressDFKe1Li = accounts[2]
		const uintCRHG3qc = BigInt("1032")
		const addressmV2cbRb = accounts[2]
//		const boolTZSiFHc = await FinaliGS92uJ.transfer.call(addressHEbSsiq, uintf2M4R6v, {from: accounts[4]});
//		const stringI3rl2Se = await FinaliGS92uJ.symbol.call({from: accounts[1]});
//		const uintRvL8zOr = await FinaliGS92uJ.balanceOf.call(addressDFKe1Li, {from: accounts[0]});
//		const boolvw309eu = await FinaliGS92uJ.approveAndCall.call(addressmV2cbRb, uintCRHG3qc, {from: accounts[0]});

		await expect(FinaliGS92uJ.transfer.call(addressHEbSsiq, uintf2M4R6v, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Final', async () => {
		const stringt5PuGM5 = "Adt2LgGLhqaGhhJkN1xmzKI2ppMlbavrWxkvSW0pjmiHn2UBnoEoelx6O23GmvmLBmOVEeEjB"
		const stringI0PaR9N = "uztFMIFClh19znf9M8JwSxtfppNmiRpNnIH1UmkaW2N8cMqWOMxKgaUpCaoQlzGOKqxPi"
		const uints3Id91s = BigInt("27")
		const FinalEAMqyL = await Final.new(stringt5PuGM5, stringI0PaR9N, uints3Id91s, {from: accounts[1]});
		const uintfQW1MPc = BigInt("86")
		const addresscJ8ViQZ = accounts[1]
		const uinth8dh08 = BigInt("500")
		const addressejzJDL9 = accounts[4]
		const uintBIL6foJ = BigInt("1752")
		const addressX4fU2Tc = accounts[0]
		const addresskIxcYtt = accounts[2]
		const boolDEq8dkr = await FinalEAMqyL.approve.call(addresscJ8ViQZ, uintfQW1MPc, {from: accounts[0]});
//		const boolGwbCJXb = await FinalEAMqyL.increaseAllowance.call(addressejzJDL9, uinth8dh08, {from: accounts[4]});
//		const boolsAjsho0 = await FinalEAMqyL.transferFrom.call(addresskIxcYtt, addressX4fU2Tc, uintBIL6foJ, {from: accounts[0]});

		assert.equal(boolDEq8dkr, true)
		await expect(FinalEAMqyL.increaseAllowance.call(addressejzJDL9, uinth8dh08, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Final', async () => {
		const stringQ4F4Y7T = "9rg4e6re8Wp8Jzs7a85F7J0oOGzRYJKQPwZrfomYLzRpnSYyIVGyIgMcMui9shBnv9NAMOOi6WwOWalIzAzu7ISC"
		const stringC95ykrz = "sQTPyHBFdFOYm"
		const uintvg5P6Om = BigInt("1361")
		const FinalQ1sXa6 = await Final.new(stringQ4F4Y7T, stringC95ykrz, uintvg5P6Om, {from: accounts[2]});
		const addressA6ZC5HZ = accounts[0]
		const uintExg7FGI = BigInt("748")
		const addressdnjeUpp = accounts[2]
		const uintVlNv6X6 = BigInt("2011")
		const addressreGXf02 = accounts[2]
		const addressAPnPN8B = accounts[4]
//		const boolzDiRRza = await FinalQ1sXa6.transferownership.call(addressA6ZC5HZ, {from: accounts[0]});
//		const boolLJe3zRV = await FinalQ1sXa6.increaseAllowance.call(addressdnjeUpp, uintExg7FGI, {from: accounts[2]});
//		const boolF1NIQel = await FinalQ1sXa6.transferFrom.call(addressAPnPN8B, addressreGXf02, uintVlNv6X6, {from: accounts[1]});

		await expect(FinalQ1sXa6.transferownership.call(addressA6ZC5HZ, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Final', async () => {
		const stringNFoIrKg = "bXYxBI4tSdPGMbh5hrvznHhQfsgMFb0sgPqdW8vG7OrE7LEcQyD6UrNwpUtUM5jBHkGQiqmcCrrOLH1kAz4M6Nu3EvK1A"
		const stringZGqDbbf = "P3FyiOOSzGu5zsLz"
		const uintCtBaGJ6 = BigInt("687")
		const FinalYCXFQQB = await Final.new(stringNFoIrKg, stringZGqDbbf, uintCtBaGJ6, {from: accounts[1]});
		const uintbFraduZ = BigInt("179")
		const addressT33RJ3 = accounts[2]
		const addresspu956fC = accounts[4]
		const addressYW0JKHS = accounts[2]
		const addressOTpGmQB = accounts[5]
		const addressxdVPbmX = "0x0000000000000000000000000000000000000001"
		const uintqWVdvyC = BigInt("1401")
		const addressgjrz4hf = accounts[5]
		const addressHK2rdAV = accounts[2]
		const boolimIORRv = await FinalYCXFQQB.approveAndCall.call(addressT33RJ3, uintbFraduZ, {from: accounts[1]});
		const uintQ5rIefR = await FinalYCXFQQB.allowance.call(addressYW0JKHS, addresspu956fC, {from: accounts[3]});
		const uintWn3vsxj = await FinalYCXFQQB.allowance.call(addressxdVPbmX, addressOTpGmQB, {from: "0x0000000000000000000000000000000000000001"});
//		const boolcigjyL = await FinalYCXFQQB.transferFrom.call(addressHK2rdAV, addressgjrz4hf, uintqWVdvyC, {from: accounts[2]});

		assert.equal(boolimIORRv, true)
		assert.equal(uintQ5rIefR, BigInt("0"))
		assert.equal(uintWn3vsxj, BigInt("0"))
		await expect(FinalYCXFQQB.transferFrom.call(addressHK2rdAV, addressgjrz4hf, uintqWVdvyC, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Final', async () => {
		const stringeAUW6Zt = "svvEj9c9LwkiwM6Co1QOSwD1HSKQ"
		const stringm9YnEj = "wRrViOaIK"
		const uintr738ZKe = BigInt("64")
		const FinalylMoxgQ = await Final.new(stringeAUW6Zt, stringm9YnEj, uintr738ZKe, {from: accounts[4]});
		const uintVu6AtBc = BigInt("51")
		const addresswjjvTOQ = "0x0000000000000000000000000000000000000001"
		const uintectShKW = BigInt("852")
		const addressGmwkHqT = accounts[1]
		const uintdlAbCEg = BigInt("702")
		const addresstYKZyO3 = accounts[0]
		const boolP80knod = await FinalylMoxgQ.approve.call(addresswjjvTOQ, uintVu6AtBc, {from: accounts[4]});
		const boolFrM1MWg = await FinalylMoxgQ.transfer.call(addressGmwkHqT, uintectShKW, {from: accounts[4]});
		const stringk6f3LX5 = await FinalylMoxgQ.symbol.call({from: "0x0000000000000000000000000000000000000001"});
		const stringjRoNOYJ = await FinalylMoxgQ.symbol.call({from: accounts[5]});
//		const boolDTBfcyZ = await FinalylMoxgQ.transfer.call(addresstYKZyO3, uintdlAbCEg, {from: accounts[2]});

		assert.equal(boolFrM1MWg, true)
		assert.equal(boolP80knod, true)
		assert.equal(stringjRoNOYJ, "wRrViOaIK")
		assert.equal(stringk6f3LX5, "wRrViOaIK")
		await expect(FinalylMoxgQ.transfer.call(addresstYKZyO3, uintdlAbCEg, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Final', async () => {
		const stringQ4F4Y7T = "9rg4e6re8Wp8Jzs7a85F7J0oOGzRYJKQPwZrfomYLzRpnSYyIVGyIgMcMui9shBnv9NAMOOi6WwOWalIzAzu7ISC"
		const stringC95ykrz = "sQTPyHBFdFOYm"
		const uintlQ9S8f9 = BigInt("1361")
		const FinalQ1sXa6 = await Final.new(stringQ4F4Y7T, stringC95ykrz, uintlQ9S8f9, {from: accounts[2]});
		const addressvkXjvEL = accounts[0]
		const uintmFWkjcV = BigInt("2002")
		const addressATOJZSU = accounts[4]
		const addressnMWb3Eo = accounts[4]
		const boole0okMMC = await FinalQ1sXa6.transferownership.call(addressvkXjvEL, {from: accounts[2]});
//		const boolF1NIQel = await FinalQ1sXa6.transferFrom.call(addressnMWb3Eo, addressATOJZSU, uintmFWkjcV, {from: accounts[1]});

		assert.equal(boole0okMMC, true)
		await expect(FinalQ1sXa6.transferFrom.call(addressnMWb3Eo, addressATOJZSU, uintmFWkjcV, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Final', async () => {
		const stringeAUW6Zt = "svvEj9c9LwkiwM6Co1QOSwD1HSKQ"
		const stringm9YnEj = "wRrViOaIK"
		const uintRlJsbRw = BigInt("64")
		const FinalylMoxgQ = await Final.new(stringeAUW6Zt, stringm9YnEj, uintRlJsbRw, {from: accounts[4]});
		const uintSSgbAVE = BigInt("0")
		const address0MfJOv = accounts[0]
		const addressaWNK4b = accounts[3]
		const boolVkdURY6 = await FinalylMoxgQ.transferFrom.call(addressaWNK4b, address0MfJOv, uintSSgbAVE, {from: accounts[3]});
		const stringjRoNOYJ = await FinalylMoxgQ.symbol.call({from: accounts[5]});

		assert.equal(boolVkdURY6, true)
		assert.equal(stringjRoNOYJ, "wRrViOaIK")
	});
})