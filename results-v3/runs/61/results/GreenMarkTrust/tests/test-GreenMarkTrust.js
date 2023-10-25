const GreenMarkTrust = artifacts.require("GreenMarkTrust");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('GreenMarkTrust', (accounts) => {
	it('test for GreenMarkTrust', async () => {
		const uintYZ1zoa1 = BigInt("270")
		const stringZm83OUk = "2Lc2VvFiH8RxOcBNvSryyUGitQ5bb7vvGm9qx7jod1UyWdU54o9PkpdML3cDP1GR9Q3YXpc2GQqfLkx16HvmKU"
		const stringI8vol1O = "YQq4sui2cT0wqfx2TnWvt4yWuF8p"
		const GreenMarkTrustDo2hqP7 = await GreenMarkTrust.new(uintYZ1zoa1, stringZm83OUk, stringI8vol1O, {from: accounts[3]});
		const byteIPzZi6z = "0x1c13051804150d161116200b051d13170a050b141e14181f0815"
		const uintY69VDlE = BigInt("835")
		const addressWZiktHL = accounts[4]
		const uintWWaosEw = BigInt("641")
		const addressuf55fK = "0x0000000000000000000000000000000000000001"
		const addressFCHlHNK = accounts[0]
		const uintjUCdl5 = BigInt("157")
		const addressZMOsTVH = accounts[4]
		const uinto8DzJUh = BigInt("639")
		const addressn3LMkoZ = accounts[0]
		const addressfBMZoGB = accounts[1]
		const uintDgm7NzO = BigInt("1416")
		const addressyyYPl47 = accounts[0]
		const uintgXT5OZW = BigInt("118")
		const addressftyWX92 = accounts[4]
		const address8iJc0F = accounts[2]
		const boolIr98ESO = await GreenMarkTrustDo2hqP7.approveAndCall.call(addressWZiktHL, uintY69VDlE, byteIPzZi6z, {from: accounts[2]});
		const boolsvG1yvP = await GreenMarkTrustDo2hqP7.transferFrom.call(addressFCHlHNK, addressuf55fK, uintWWaosEw, {from: accounts[0]});
		const booliStdo5e = await GreenMarkTrustDo2hqP7.approve.call(addressZMOsTVH, uintjUCdl5, {from: accounts[3]});
		const boolJd5pSqe = await GreenMarkTrustDo2hqP7.transferFrom.call(addressfBMZoGB, addressn3LMkoZ, uinto8DzJUh, {from: "0x0000000000000000000000000000000000000001"});
		const boolHYROAYd = await GreenMarkTrustDo2hqP7.approve.call(addressyyYPl47, uintDgm7NzO, {from: accounts[2]});
		const boolRZ23G1j = await GreenMarkTrustDo2hqP7.transferFrom.call(address8iJc0F, addressftyWX92, uintgXT5OZW, {from: accounts[3]});

		await expect(GreenMarkTrustDo2hqP7.approveAndCall.call(addressWZiktHL, uintY69VDlE, byteIPzZi6z, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GreenMarkTrust', async () => {
		const uintLh7Jb1n = BigInt("1220")
		const stringPze6GRP = "m8nhSflTvYwehMqxEVpZzfKGwVYh2TV7orQmx"
		const stringJ1Rs03w = "TeMky9FiRqBmlrHheJNxxpXU7huQNO376x7MaeClo3xtrbqjQX9QPwR"
		const GreenMarkTrustu55anro = await GreenMarkTrust.new(uintLh7Jb1n, stringPze6GRP, stringJ1Rs03w, {from: accounts[3]});
		const uintkfhoU4 = BigInt("1860")
		const addressUPTwUbV = accounts[0]
		const addressh2VbAs = accounts[3]
		const uintAma0CJt = BigInt("289")
		const addressP9nfbph = "0x0000000000000000000000000000000000000001"
		const addressS6gk9J5 = accounts[4]
		const boolnlFJpx8 = await GreenMarkTrustu55anro.transferFrom.call(addressh2VbAs, addressUPTwUbV, uintkfhoU4, {from: accounts[2]});
		const boolIEevv4 = await GreenMarkTrustu55anro.transferFrom.call(addressS6gk9J5, addressP9nfbph, uintAma0CJt, {from: accounts[1]});

		await expect(GreenMarkTrustu55anro.transferFrom.call(addressh2VbAs, addressUPTwUbV, uintkfhoU4, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GreenMarkTrust', async () => {
		const uintdVeMO1C = BigInt("1892")
		const stringSERlew = "ObjUHz5CtCC7eMDhPYRP9pank8"
		const stringkK7m0F9 = "BnvoDBwmLFmXmMb6ysevMqdd8Y5vIlm5L2ZTvznWJFRzQVItKWARNqlhzCmZSHtfYXO9TQhK4XnvGgnjGvT1hO"
		const GreenMarkTrustx4iptrK = await GreenMarkTrust.new(uintdVeMO1C, stringSERlew, stringkK7m0F9, {from: accounts[3]});
		const uintOPshjjv = BigInt("1634")
		const uintSFaFDpM = BigInt("173")
		const addressJWUvzpw = accounts[2]
		const byteEx702WS = "0x1c1c0b150c040d1405160d1d1a08051116011113011a070a060e070b0b0c11"
		const uintRiueArr = BigInt("1779")
		const addressoFZdfxL = accounts[1]
		const uintmgUCPTM = BigInt("1145")
		const boolhQ8lx8i = await GreenMarkTrustx4iptrK.burn.call(uintOPshjjv, {from: accounts[2]});
		const boolbVfxn9o = await GreenMarkTrustx4iptrK.approve.call(addressJWUvzpw, uintSFaFDpM, {from: accounts[2]});
		const boolwIWfTno = await GreenMarkTrustx4iptrK.approveAndCall.call(addressoFZdfxL, uintRiueArr, byteEx702WS, {from: accounts[4]});
		const boolrIknUis = await GreenMarkTrustx4iptrK.burn.call(uintmgUCPTM, {from: accounts[1]});

		await expect(GreenMarkTrustx4iptrK.burn.call(uintOPshjjv, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GreenMarkTrust', async () => {
		const uintBtd3syv = BigInt("332")
		const stringVZdkOVD = "AcYsFg44MIDkxwbNC3Cpg88bO3eB2PVvFtQgNr7Bn4aNKwPD3vAhkiLq"
		const stringgGJPLuI = "zzYgKFOh7hspQ80b8TVF67ZEXfOMhL5XTp5a21eTm"
		const GreenMarkTrustRMsAKJ8 = await GreenMarkTrust.new(uintBtd3syv, stringVZdkOVD, stringgGJPLuI, {from: "0x0000000000000000000000000000000000000001"});
		const uintWR2EM5 = BigInt("953")
		const addressTN1Kxhk = accounts[5]
		const uintt17pKe8 = BigInt("578")
		const uintUhUDTLt = BigInt("822")
		const addressghDVx5X = accounts[4]
		const addressedkGLa = accounts[1]
		const uinttG8LJzz = BigInt("343")
		const addressgRxUgG = accounts[2]
		const byteVyGzCDm = "0x111c0f0b080718070c121d1a020b06151e0d0117081f15000f0b151d000b1f"
		const uintuZf9fYh = BigInt("1689")
		const addressYnUhk0 = accounts[4]
		const booliRePEc2 = await GreenMarkTrustRMsAKJ8.burnFrom.call(addressTN1Kxhk, uintWR2EM5, {from: accounts[2]});
		const boolPjdl4Uy = await GreenMarkTrustRMsAKJ8.burn.call(uintt17pKe8, {from: accounts[3]});
		const boolL4At9zH = await GreenMarkTrustRMsAKJ8.transferFrom.call(addressedkGLa, addressghDVx5X, uintUhUDTLt, {from: accounts[3]});
		const boolBnd30W5 = await GreenMarkTrustRMsAKJ8.approve.call(addressgRxUgG, uinttG8LJzz, {from: "0x0000000000000000000000000000000000000001"});
		const boolLzTbHVn = await GreenMarkTrustRMsAKJ8.approveAndCall.call(addressYnUhk0, uintuZf9fYh, byteVyGzCDm, {from: accounts[2]});
	});

	it('test for GreenMarkTrust', async () => {
		const uintE8wlt51 = BigInt("825")
		const stringcIVvjkL = "BszjfwYJxfBI0GEMw4Jjv"
		const stringcI6nNmI = "bOR2NKVTEJVUXHUr8cBGvnP3rmEYBqALfUBEJdWREymsPagg7N"
		const GreenMarkTrustc8YzSjn = await GreenMarkTrust.new(uintE8wlt51, stringcIVvjkL, stringcI6nNmI, {from: accounts[2]});
		const uints35dN6x = BigInt("1747")
		const addresstGQFABr = accounts[2]
		const uintCDd1mAN = BigInt("126")
		const uintJOQwc7w = BigInt("1455")
		const addressD6kYvS4 = accounts[5]
		const bytedmoGjJZ = "0x1b080215081f150e0f170603"
		const uintmaRPlm5 = BigInt("1950")
		const addressW5IBflR = accounts[5]
		const boollar2Lt = await GreenMarkTrustc8YzSjn.burnFrom.call(addresstGQFABr, uints35dN6x, {from: accounts[2]});
		const boolcC7cdny = await GreenMarkTrustc8YzSjn.burn.call(uintCDd1mAN, {from: accounts[2]});
		const boolkcvcKLg = await GreenMarkTrustc8YzSjn.approve.call(addressD6kYvS4, uintJOQwc7w, {from: accounts[2]});
		const boolIl3ec1P = await GreenMarkTrustc8YzSjn.approveAndCall.call(addressW5IBflR, uintmaRPlm5, bytedmoGjJZ, {from: accounts[4]});

		await expect(GreenMarkTrustc8YzSjn.burnFrom.call(addresstGQFABr, uints35dN6x, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GreenMarkTrust', async () => {
		const uintElaGYR1 = BigInt("349")
		const stringFAhvITp = "rCxH07Ch6NeWsoNukhkoF"
		const stringU4dLiUR = "t5oKjyFPJXlCLQhHeMWYV7GkNWMxlHehSyiHuw7BZbbyLzxbgx8WdEcAOs3hRK6JAFcLMQvMIaXHw9Iiu"
		const GreenMarkTrustl9bBzHK = await GreenMarkTrust.new(uintElaGYR1, stringFAhvITp, stringU4dLiUR, {from: accounts[2]});
		const uintZu4WCzT = BigInt("340")
		const addresscnL3GSZ = accounts[4]
		const uintKWCnaHl = BigInt("1199")
		const addressMMLgVnV = accounts[0]
		const boolVavPRbs = await GreenMarkTrustl9bBzHK.transfer.call(addresscnL3GSZ, uintZu4WCzT, {from: accounts[3]});
		const boolfcosSDm = await GreenMarkTrustl9bBzHK.approve.call(addressMMLgVnV, uintKWCnaHl, {from: accounts[3]});

		await expect(GreenMarkTrustl9bBzHK.transfer.call(addresscnL3GSZ, uintZu4WCzT, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GreenMarkTrust', async () => {
		const uintLQPjZ36 = BigInt("1220")
		const stringPze6GRP = "m8nhSflTvYwehMqxEVpZzfKGwVYh2TV7orQmx"
		const stringJ1Rs03w = "TeMky9FiRqBmlrHheJNxxpXU7huQNO376x7MaeClo3xtrbqjQX9QPwR"
		const GreenMarkTrustu55anro = await GreenMarkTrust.new(uintLQPjZ36, stringPze6GRP, stringJ1Rs03w, {from: accounts[3]});
		const uintGxIVLTS = BigInt("1627")
		const uint4gFxpd = BigInt("1860")
		const addressXq8sHOo = accounts[1]
		const addressiwEBaRx = accounts[3]
		const booljnPh0Go = await GreenMarkTrustu55anro.burn.call(uintGxIVLTS, {from: accounts[3]});
		const boolnlFJpx8 = await GreenMarkTrustu55anro.transferFrom.call(addressiwEBaRx, addressXq8sHOo, uint4gFxpd, {from: accounts[2]});

		assert.equal(booljnPh0Go, true)
		await expect(GreenMarkTrustu55anro.transferFrom.call(addressiwEBaRx, addressXq8sHOo, uint4gFxpd, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GreenMarkTrust', async () => {
		const uint8m1CcC = BigInt("1278")
		const stringfW4eUjH = "CA2oNV9H5ZHtISm9GaI7s5nt3waWucJxfekKoFVf487zIBRmr1DlXvRyTPL1V1PWmcJanv8TUfxs7E4PXHP2OH3qArDLoIrjGi"
		const stringg5ap4FK = "rIcyE9uaXKrEGIni7g5X1UUzQvxhdEojJijR88Pz21wth3olACBiDxaDcWR07pWfuSzaI2Qr1B9rYVS5HWPgExyov"
		const GreenMarkTrustFzwPemb = await GreenMarkTrust.new(uint8m1CcC, stringfW4eUjH, stringg5ap4FK, {from: accounts[2]});
		const uintbqIhAOb = BigInt("1284")
		const addressV01FOi = accounts[3]
		const uintgMCDzZ9 = BigInt("410")
		const addressXDXgNv9 = accounts[4]
		const uintdRNT2U = BigInt("1550")
		const addressogNiFQm = accounts[4]
		const addresslBEdVcr = accounts[3]
		const uintzR5k0DX = BigInt("2017")
		const addressHZlKic = accounts[0]
		const boolSXVbTE1 = await GreenMarkTrustFzwPemb.transfer.call(addressV01FOi, uintbqIhAOb, {from: accounts[2]});
		const boolG474UJ0 = await GreenMarkTrustFzwPemb.approve.call(addressXDXgNv9, uintgMCDzZ9, {from: accounts[0]});
		const boolMbFslZh = await GreenMarkTrustFzwPemb.transferFrom.call(addresslBEdVcr, addressogNiFQm, uintdRNT2U, {from: accounts[4]});
		const boolqHWwNZ = await GreenMarkTrustFzwPemb.approve.call(addressHZlKic, uintzR5k0DX, {from: accounts[3]});

		assert.equal(boolG474UJ0, true)
		assert.equal(boolSXVbTE1, true)
		await expect(GreenMarkTrustFzwPemb.transferFrom.call(addresslBEdVcr, addressogNiFQm, uintdRNT2U, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})