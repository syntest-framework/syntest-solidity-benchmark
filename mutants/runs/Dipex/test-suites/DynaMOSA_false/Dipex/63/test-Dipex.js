const Dipex = artifacts.require("Dipex");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Dipex', (accounts) => {
	it('test for Dipex', async () => {
		const stringYdRx07I = "Z3F4C180nalbt395"
		const stringxbtV4aV = "SMTYEUd7rrmQVL"
		const uintvST0tcp = BigInt("42")
		const DipexrOcsULC = await Dipex.new(stringYdRx07I, stringxbtV4aV, uintvST0tcp, {from: accounts[3]});
		const uintXW6CerR = BigInt("1378")
		const address5tV9Bh = accounts[3]
		const addressASjZEOk = accounts[3]
		const uinthSwjFYz = BigInt("780")
		const addressVS3vpSY = accounts[0]
		const uintsvvPq5a = BigInt("771")
		const addressn5Iepht = accounts[0]
		const addressiREb0kc = accounts[3]
		const uintrnrloFg = BigInt("498")
		const addressvDGLFp1 = "0x0000000000000000000000000000000000000001"
		const uinteTqRmTD = BigInt("1819")
		const addressJEtq12O = accounts[3]
		const boolRIw947D = await DipexrOcsULC.transferFrom.call(addressASjZEOk, address5tV9Bh, uintXW6CerR, {from: accounts[0]});
		const boolYd60z4g = await DipexrOcsULC.approveAndCall.call(addressVS3vpSY, uinthSwjFYz, {from: accounts[2]});
		const booleBBJiJc = await DipexrOcsULC.transferFrom.call(addressiREb0kc, addressn5Iepht, uintsvvPq5a, {from: accounts[5]});
		const boolIB9058 = await DipexrOcsULC.approve.call(addressvDGLFp1, uintrnrloFg, {from: accounts[2]});
		const boolploC7m8 = await DipexrOcsULC.transfer.call(addressJEtq12O, uinteTqRmTD, {from: accounts[4]});

		await expect(DipexrOcsULC.transferFrom.call(addressASjZEOk, address5tV9Bh, uintXW6CerR, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const stringpktKliS = "FTu9LQmFfGMHc73fbmTFI14DwcENxPxWDFbrEyDVGV"
		const stringRTLzX77 = "bLOgSXK3y6NckhY9kH09a7HEuBlPzpI5Rr9"
		const uintNJmDfx = BigInt("1260")
		const DipexDeXWDRj = await Dipex.new(stringpktKliS, stringRTLzX77, uintNJmDfx, {from: "0x0000000000000000000000000000000000000001"});
		const uintPvHfWWF = BigInt("720")
		const addresswuymaFc = accounts[2]
		const uintCuCGym = BigInt("1810")
		const addresspU1hLIn = accounts[4]
		const boolvrsdqai = await DipexDeXWDRj.approveAndCall.call(addresswuymaFc, uintPvHfWWF, {from: accounts[4]});
		const boolnbI91Y0 = await DipexDeXWDRj.approve.call(addresspU1hLIn, uintCuCGym, {from: accounts[5]});
	});

	it('test for Dipex', async () => {
		const stringNmm9mun = "gHqD8pxdB6JlsJV7Sv3mnjSIwTQQOICzKXkodbA8LUKGCUdvNUisp7NoOgH56M"
		const stringU6zGhBd = "TVaGrrtut3A3YSLQaklUlWCv4oaJrfiZxuElW8P8F0IRMAtNXla9yHjQWYdt84nX7sqicCierDOPMVyT2h03JcYdoy"
		const uintoPnzQbz = BigInt("1817")
		const Dipexowg3dP = await Dipex.new(stringNmm9mun, stringU6zGhBd, uintoPnzQbz, {from: accounts[4]});
		const address5CzBMW = accounts[3]
		const addressxL0z9l = accounts[0]
		const uintzlV2lZt = BigInt("1546")
		const addressKRqvGF3 = accounts[3]
		const addresstvyZx2 = accounts[0]
		const addressi7JNve9 = accounts[3]
		const boolaIO0SLV = await Dipexowg3dP.transferownership.call(address5CzBMW, {from: "0x0000000000000000000000000000000000000001"});
		const boolEjw24UV = await Dipexowg3dP.transferownership.call(addressxL0z9l, {from: accounts[1]});
		const boolooZ1IFI = await Dipexowg3dP.transfer.call(addressKRqvGF3, uintzlV2lZt, {from: accounts[3]});
		const boolQ3djrLg = await Dipexowg3dP.transferownership.call(addresstvyZx2, {from: accounts[0]});
		const boolLDH2V4 = await Dipexowg3dP.transferownership.call(addressi7JNve9, {from: accounts[4]});

		await expect(Dipexowg3dP.transferownership.call(address5CzBMW, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const stringXQl6QP9 = "T7XIyt7GpvMzs1x1vdzx5IEIasbXbNMm1IfpvHX9Wh1vfiGSnOn3Yqn7G6azXqjRH"
		const stringT2DfBlF = "j3oEyzwcDhuBsObdFSLLBNAiE3z5y7RQliR4b49se3Q8E4fX2zfeICUlbC3haDPViDhKQUBfHf3HmpQtFTDNb3o4Hxey4ErLlm"
		const uintlqrIaG = BigInt("1429")
		const DipexLTLU9WT = await Dipex.new(stringXQl6QP9, stringT2DfBlF, uintlqrIaG, {from: accounts[2]});
		const uintjqVFohS = BigInt("1506")
		const addressI4euxFO = accounts[1]
		const uintrIoQJV6 = BigInt("1438")
		const addresswXyeGrS = accounts[4]
		const uintc4EJUK = BigInt("2012")
		const addressSTTTrr9 = accounts[4]
		const addressNBHWx27 = accounts[0]
		const boolvepsjMX = await DipexLTLU9WT.approve.call(addressI4euxFO, uintjqVFohS, {from: accounts[0]});
		const boolzs6u7jU = await DipexLTLU9WT.approve.call(addresswXyeGrS, uintrIoQJV6, {from: "0x0000000000000000000000000000000000000001"});
		const boollkFmuhs = await DipexLTLU9WT.transferFrom.call(addressNBHWx27, addressSTTTrr9, uintc4EJUK, {from: accounts[3]});

		assert.equal(boolvepsjMX, true)
		assert.equal(boolzs6u7jU, true)
		await expect(DipexLTLU9WT.transferFrom.call(addressNBHWx27, addressSTTTrr9, uintc4EJUK, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const stringK5hJyyx = "KM93VsUXVjfoNv1Go0F3d"
		const stringHldHGtV = "FG5YR9c7CSNR9OAi6FyYrUWV3DJKwBKITfLTIaeSDB"
		const uintONk2QOE = BigInt("17")
		const DipexM43Bgd3 = await Dipex.new(stringK5hJyyx, stringHldHGtV, uintONk2QOE, {from: accounts[1]});
		const uintxzjsoZ4 = BigInt("1093")
		const addressgoW4naj = accounts[1]
		const uintNssCY9 = BigInt("918")
		const addressVvUjDQz = accounts[4]
		const uintVKTNLaj = BigInt("1928")
		const addressD2XCcjC = accounts[4]
		const uintlwPbGv6 = BigInt("1780")
		const addressibmXZjR = accounts[5]
		const uintQpDl1XN = BigInt("1245")
		const addressggwc2fh = accounts[2]
		const uintQaGAaoD = BigInt("1120")
		const addressY6iMuF = accounts[1]
		const boolPIBt1wf = await DipexM43Bgd3.transfer.call(addressgoW4naj, uintxzjsoZ4, {from: "0x0000000000000000000000000000000000000001"});
		const boolbxUORS = await DipexM43Bgd3.approveAndCall.call(addressVvUjDQz, uintNssCY9, {from: accounts[5]});
		const boolbli1Rf = await DipexM43Bgd3.approve.call(addressD2XCcjC, uintVKTNLaj, {from: accounts[0]});
		const boolmlEoliL = await DipexM43Bgd3.transfer.call(addressibmXZjR, uintlwPbGv6, {from: accounts[1]});
		const boolCIu5ln1 = await DipexM43Bgd3.transfer.call(addressggwc2fh, uintQpDl1XN, {from: "0x0000000000000000000000000000000000000001"});
		const boolZpkUv0 = await DipexM43Bgd3.approve.call(addressY6iMuF, uintQaGAaoD, {from: accounts[3]});

		await expect(DipexM43Bgd3.transfer.call(addressgoW4naj, uintxzjsoZ4, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const stringNfyTYyY = "Az2ZOSKUrOJfr2P3YfpT1hyzqB2ZCKKgSPkUFLK6JNyAliZSf6pxOIQe0LDtqtye"
		const stringeAoyCM3 = "ClUsVQvat5BdhhLvB2zdyYUz1L95upPxmRpHgBEFMaxcsHho"
		const uintYYa5PSz = BigInt("1948")
		const Dipexc9ymYCw = await Dipex.new(stringNfyTYyY, stringeAoyCM3, uintYYa5PSz, {from: accounts[4]});
		const uinttop2yTT = BigInt("1005")
		const addressHkPRwQ = accounts[0]
		const uintV1thL7 = BigInt("536")
		const addressdigjlUc = accounts[3]
		const uintvBc3I2N = BigInt("1123")
		const addressVm4GZWH = accounts[2]
		const addressPUJlKdn = accounts[4]
		const uintUFWhOR8 = BigInt("86")
		const addressNK8ZMQa = accounts[4]
		const addresssX2eXo6 = "0x0000000000000000000000000000000000000001"
		const boolsun2Jp6 = await Dipexc9ymYCw.approveAndCall.call(addressHkPRwQ, uinttop2yTT, {from: accounts[5]});
		const boolIfjNW4t = await Dipexc9ymYCw.approveAndCall.call(addressdigjlUc, uintV1thL7, {from: accounts[2]});
		const boolqluLQP8 = await Dipexc9ymYCw.transferFrom.call(addressPUJlKdn, addressVm4GZWH, uintvBc3I2N, {from: accounts[5]});
		const boolnEq3xrr = await Dipexc9ymYCw.transferFrom.call(addresssX2eXo6, addressNK8ZMQa, uintUFWhOR8, {from: accounts[3]});

		await expect(Dipexc9ymYCw.approveAndCall.call(addressHkPRwQ, uinttop2yTT, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const stringSkaZ0q = "CQyTiOpIXDMaHxbj1a9njPGxxjuhyJuo"
		const stringu0AJX4v = "cdcvOxUgkXS4Q1Xb3tq3WrPukek8R6lEsDp6wtyBWVQ9mmCkwLc9UZkVGjnQlRJdms2P0KS0Pv80fgsd"
		const uintkkvR9r = BigInt("286")
		const DipexWWXl9a3 = await Dipex.new(stringSkaZ0q, stringu0AJX4v, uintkkvR9r, {from: accounts[4]});
		const uintOGAQAyn = BigInt("779")
		const addressOpBkjJ5 = accounts[1]
		const addressAtbSdcf = accounts[1]
		const uintGpfvZLa = BigInt("860")
		const addressbx4jjVX = accounts[1]
		const uintXO5mW5P = BigInt("1386")
		const addresssu6jAb7 = accounts[2]
		const uinte8Vx7bN = BigInt("1664")
		const addressI5NXebc = accounts[1]
		const uinteDmgACx = BigInt("2006")
		const addressi51WBol = accounts[2]
		const addressmTsecf = accounts[4]
		const boolOfOFRyR = await DipexWWXl9a3.transferFrom.call(addressAtbSdcf, addressOpBkjJ5, uintOGAQAyn, {from: accounts[1]});
		const boolZOvsoAL = await DipexWWXl9a3.approve.call(addressbx4jjVX, uintGpfvZLa, {from: accounts[1]});
		const boolcIYtV00 = await DipexWWXl9a3.approve.call(addresssu6jAb7, uintXO5mW5P, {from: accounts[3]});
		const boolX8ROUQ = await DipexWWXl9a3.approve.call(addressI5NXebc, uinte8Vx7bN, {from: accounts[2]});
		const boolOl3RD0s = await DipexWWXl9a3.transferFrom.call(addressmTsecf, addressi51WBol, uinteDmgACx, {from: accounts[1]});

		await expect(DipexWWXl9a3.transferFrom.call(addressAtbSdcf, addressOpBkjJ5, uintOGAQAyn, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const stringNfyTYyY = "Az2ZOSKUrOJfr2P3YfpT1hyzqB2ZCKKgSPkUFLK6JNyAliZSf6pxOIQe0LDtqtye"
		const stringeAoyCM3 = "ClUsVQvat5BdhhLvB2zdyYUz1L95upPxmRpHgBEFMaxcsHho"
		const uinthFBJ3E1 = BigInt("1948")
		const Dipexc9ymYCw = await Dipex.new(stringNfyTYyY, stringeAoyCM3, uinthFBJ3E1, {from: accounts[4]});
		const uintWVD3uU8 = BigInt("113")
		const addressMtqUbDw = "0x0000000000000000000000000000000000000001"
		const addressmBIkd6B = accounts[4]
		const uinttUjQ6F = BigInt("1152")
		const addressqq3uxZF = accounts[1]
		const uintiWyIkDL = BigInt("965")
		const addresscey5rPr = "0x0000000000000000000000000000000000000001"
		const uintLsqCfag = BigInt("82")
		const addressDSIkxHn = accounts[4]
		const addressunUwPyv = "0x0000000000000000000000000000000000000000"
		const bool6Zcs0l = await Dipexc9ymYCw.transferFrom.call(addressmBIkd6B, addressMtqUbDw, uintWVD3uU8, {from: accounts[4]});
		const boolhkH7vcj = await Dipexc9ymYCw.transfer.call(addressqq3uxZF, uinttUjQ6F, {from: accounts[4]});
		const boolA9fk5n7 = await Dipexc9ymYCw.approveAndCall.call(addresscey5rPr, uintiWyIkDL, {from: accounts[4]});
		const boolnEq3xrr = await Dipexc9ymYCw.transferFrom.call(addressunUwPyv, addressDSIkxHn, uintLsqCfag, {from: accounts[3]});

		assert.equal(bool6Zcs0l, true)
		assert.equal(boolA9fk5n7, true)
		assert.equal(boolhkH7vcj, true)
		await expect(Dipexc9ymYCw.transferFrom.call(addressunUwPyv, addressDSIkxHn, uintLsqCfag, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const stringNfyTYyY = "Az2ZOSKUrOJfr2P3YfpT1hyzqB2ZCKKgSPkUFLK6JNyAliZSf6pxOIQe0LDtqtye"
		const stringeAoyCM3 = "ClUsVQvat5BdhhLvB2zdyYUz1L95upPxmRpHgBEFMaxcsHho"
		const uintJKLW9Yj = BigInt("1948")
		const Dipexc9ymYCw = await Dipex.new(stringNfyTYyY, stringeAoyCM3, uintJKLW9Yj, {from: accounts[4]});
		const uintwQttAUS = BigInt("86")
		const addressDtPlEi = accounts[4]
		const addressu7qwrIt = "0x00000000000000000000000000000000000000-1"
		const uintNK22w1R = BigInt("828")
		const addressCe38xQ = accounts[4]
		const boolnEq3xrr = await Dipexc9ymYCw.transferFrom.call(addressu7qwrIt, addressDtPlEi, uintwQttAUS, {from: accounts[3]});
		const boolzdxphcF = await Dipexc9ymYCw.approve.call(addressCe38xQ, uintNK22w1R, {from: accounts[5]});

		await expect(Dipexc9ymYCw.transferFrom.call(addressu7qwrIt, addressDtPlEi, uintwQttAUS, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const stringlPVHuh = "937eQHesZ2xv1L5wwW4trHG1Xg8S2SwFFbRDBK8cJPn3ct877j6PGqkmfXzpCg34kzllv1KDW4gTh8uGybGH2kGE"
		const stringZssr5ec = "vUJsymTvEfutEaQZXyUFwe1aP4PHKPWxnDRxG6B3dBJDqiaLqgHlC3NDSorOISDLMrZ1Vt9vpCjV"
		const uintfx2aO3X = BigInt("115")
		const Dipexhd3lt2 = await Dipex.new(stringlPVHuh, stringZssr5ec, uintfx2aO3X, {from: accounts[4]});
		const uintQJ8ymLJ = BigInt("0")
		const addressUzc3TKN = accounts[2]
		const addressiKplC7D = accounts[2]
		const boolWfmObIk = await Dipexhd3lt2.transferFrom.call(addressiKplC7D, addressUzc3TKN, uintQJ8ymLJ, {from: accounts[3]});

		assert.equal(boolWfmObIk, true)
	});

	it('test for Dipex', async () => {
		const stringNfyTYyY = "Az2ZOSKUrOJfr2P3YfpT1hyzqB2ZCKKgSPkUFLK6JNyAliZSf6pxOIQe0LDtqtye"
		const stringeAoyCM3 = "ClUsVQvat5BdhhLvB2zdyYUz1L95upPxmRpHgBEFMaxcsHho"
		const uintmee6uth = BigInt("1948")
		const Dipexc9ymYCw = await Dipex.new(stringNfyTYyY, stringeAoyCM3, uintmee6uth, {from: accounts[4]});
		const uintbEZthb1 = BigInt("1971")
		const addressA8UpHqR = accounts[1]
		const uintEGBxpEG = BigInt("9")
		const addressQ7dwNsj = "0x00000000000000000000000000000000000000-1"
		const uintViK04K = BigInt("659")
		const addressiqrKDIQ = accounts[0]
		const addressskv4mPc = accounts[3]
		const uintygPKWx = BigInt("1785")
		const addressXXSz6L3 = accounts[5]
		const uintZzgE5Pn = BigInt("1369")
		const addressRUGsYk0 = accounts[1]
		const booln1K5vFD = await Dipexc9ymYCw.approve.call(addressA8UpHqR, uintbEZthb1, {from: accounts[1]});
		const boolA9fk5n7 = await Dipexc9ymYCw.approveAndCall.call(addressQ7dwNsj, uintEGBxpEG, {from: accounts[4]});
		const boolON9pnsA = await Dipexc9ymYCw.transferFrom.call(addressskv4mPc, addressiqrKDIQ, uintViK04K, {from: accounts[3]});
		const boolwwW2t5R = await Dipexc9ymYCw.transfer.call(addressXXSz6L3, uintygPKWx, {from: accounts[2]});
		const boolmWpHmPG = await Dipexc9ymYCw.transfer.call(addressRUGsYk0, uintZzgE5Pn, {from: accounts[0]});

		assert.equal(booln1K5vFD, true)
		await expect(Dipexc9ymYCw.approveAndCall.call(addressQ7dwNsj, uintEGBxpEG, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const stringNfyTYyY = "Az2ZOSKUrOJfr2P3YfpT1hyzqB2ZCKKgSPkUFLK6JNyAliZSf6pxOIQe0LDtqtye"
		const stringeAoyCM3 = "ClUsVQvat5BdhhLvB2zdyYUz1L95upPxmRpHgBEFMaxcsHho"
		const uintO7a7lLI = BigInt("1948")
		const Dipexc9ymYCw = await Dipex.new(stringNfyTYyY, stringeAoyCM3, uintO7a7lLI, {from: accounts[4]});
		const uintRHbc8c = BigInt("1971")
		const addressw8WOY79 = accounts[1]
		const uintcDzSAck = BigInt("0")
		const addressOxHG5SW = "0x0000000000000000000000000000000000000001"
		const uinttctNqH = BigInt("712")
		const address1vxvZ0 = accounts[6]
		const uinttLNU9kJ = BigInt("168")
		const addressrMPbutk = accounts[0]
		const uintQN5g8D = BigInt("1785")
		const addresskYa2ZQX = accounts[5]
		const uintxJbqUGl = BigInt("1751")
		const addressYvS7nTM = accounts[2]
		const uintf2tuDnI = BigInt("658")
		const addresswQtbfRq = accounts[0]
		const uintMdQb9YM = BigInt("1369")
		const addressq5khF4B = accounts[1]
		const booln1K5vFD = await Dipexc9ymYCw.approve.call(addressw8WOY79, uintRHbc8c, {from: accounts[1]});
		const boolA9fk5n7 = await Dipexc9ymYCw.approveAndCall.call(addressOxHG5SW, uintcDzSAck, {from: accounts[4]});
		const boolp4knPEy = await Dipexc9ymYCw.approve.call(address1vxvZ0, uinttctNqH, {from: accounts[1]});
		const boolUTy0S9y = await Dipexc9ymYCw.approveAndCall.call(addressrMPbutk, uinttLNU9kJ, {from: accounts[4]});
		const boolwwW2t5R = await Dipexc9ymYCw.transfer.call(addresskYa2ZQX, uintQN5g8D, {from: accounts[2]});
		const boolVyP7L4Y = await Dipexc9ymYCw.approve.call(addressYvS7nTM, uintxJbqUGl, {from: accounts[3]});
		const boolZLxzxg = await Dipexc9ymYCw.approveAndCall.call(addresswQtbfRq, uintf2tuDnI, {from: accounts[4]});
		const boolmWpHmPG = await Dipexc9ymYCw.transfer.call(addressq5khF4B, uintMdQb9YM, {from: accounts[0]});

		assert.equal(boolA9fk5n7, true)
		assert.equal(boolUTy0S9y, true)
		assert.equal(booln1K5vFD, true)
		assert.equal(boolp4knPEy, true)
		await expect(Dipexc9ymYCw.transfer.call(addresskYa2ZQX, uintQN5g8D, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})