const WOLF = artifacts.require("WOLF");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('WOLF', (accounts) => {
	it('test for WOLF', async () => {
		const stringVqOpAk1 = "MLJXsRMP2uW95E95bPchES9pYpc5Jw8t4I94hdjo7KBsx5lRsmYME6ci2Ntfh8hPPu48qjfY5w5a"
		const stringbrHq5zq = "zhNURpgOVDgfk98msEpbETj"
		const uintKl5O0bE = BigInt("432")
		const WOLFNzjPE1 = await WOLF.new(stringVqOpAk1, stringbrHq5zq, uintKl5O0bE, {from: accounts[1]});
		const uintHmARAC = BigInt("1301")
		const addressjSylPhb = accounts[1]
		const addressrwY9F99 = accounts[3]
		const uintaOzUiuw = BigInt("462")
		const addressYrtYJfn = accounts[1]
		const addressbvTjIio = accounts[1]
//		const boolT3m3AMs = await WOLFNzjPE1.transferFrom.call(addressrwY9F99, addressjSylPhb, uintHmARAC, {from: accounts[2]});
//		const boolh55CbJ = await WOLFNzjPE1.transfer.call(addressYrtYJfn, uintaOzUiuw, {from: accounts[0]});
//		const boolb04aTv = await WOLFNzjPE1.transferownership.call(addressbvTjIio, {from: accounts[1]});

		await expect(WOLFNzjPE1.transferFrom.call(addressrwY9F99, addressjSylPhb, uintHmARAC, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for WOLF', async () => {
		const stringo6W0A9 = "DCgSI1zoN4I"
		const stringpHH1o8m = "iOA2dhaCPJ66j1VXL6za8XmtmMWpQy6MPg42RtgdFMEi4y6CStnthOvOjsb6737Y6ANjghj1b1MzLw2"
		const uintR43uq0 = BigInt("1432")
		const WOLF7I4vrr = await WOLF.new(stringo6W0A9, stringpHH1o8m, uintR43uq0, {from: "0x0000000000000000000000000000000000000001"});
		const uintioP32TR = BigInt("1638")
		const addressIgiTfYg = "0x0000000000000000000000000000000000000001"
		const addressQPSYAeH = accounts[2]
		const uintNIfePn = BigInt("1261")
		const addressEVtR8b5 = accounts[3]
		const uintpFTTQYB = BigInt("1655")
		const addressiTehLsm = "0x0000000000000000000000000000000000000001"
		const addressyWapPS = accounts[0]
		const uintXBm0YC = BigInt("399")
		const addresszikSXUe = accounts[2]
		const address4jLIN0 = accounts[0]
		const uintassAX3d = BigInt("1995")
		const addresslMEtNry = accounts[0]
		const addressoxb9A8k = accounts[1]
		const boolINJDm6j = await WOLF7I4vrr.transferFrom.call(addressQPSYAeH, addressIgiTfYg, uintioP32TR, {from: accounts[5]});
		const booliZHH5XF = await WOLF7I4vrr.transfer.call(addressEVtR8b5, uintNIfePn, {from: accounts[4]});
		const boolGG13S2I = await WOLF7I4vrr.transferFrom.call(addressyWapPS, addressiTehLsm, uintpFTTQYB, {from: accounts[2]});
		const boolEGChDZR = await WOLF7I4vrr.transferFrom.call(address4jLIN0, addresszikSXUe, uintXBm0YC, {from: accounts[0]});
		const boolscXsS3Z = await WOLF7I4vrr.transferFrom.call(addressoxb9A8k, addresslMEtNry, uintassAX3d, {from: accounts[4]});
	});

	it('test for WOLF', async () => {
		const stringtAJwomn = "6HDk0tJgmIpLda5N1tiHUG3ROMRH0q"
		const stringtuLne4 = "rB6vQGM4lIq6StVYT14vFLVoML4oTbFUMBWqwkKwIvi5W"
		const uint6fvwQh = BigInt("1191")
		const WOLFmhuI7r2 = await WOLF.new(stringtAJwomn, stringtuLne4, uint6fvwQh, {from: accounts[3]});
		const uintU35VMQ = BigInt("1931")
		const addressyBpnHv7 = accounts[0]
		const uintN5pmEEa = BigInt("730")
		const addresscBxAKH = accounts[1]
		const uintAaLjqrc = BigInt("1804")
		const addressAew2rGO = accounts[0]
//		const boolZoq27NB = await WOLFmhuI7r2.approveAndCall.call(addressyBpnHv7, uintU35VMQ, {from: accounts[5]});
//		const boolPcVFGR = await WOLFmhuI7r2.transfer.call(addresscBxAKH, uintN5pmEEa, {from: accounts[4]});
//		const boolobN7BnR = await WOLFmhuI7r2.transfer.call(addressAew2rGO, uintAaLjqrc, {from: accounts[4]});

		await expect(WOLFmhuI7r2.approveAndCall.call(addressyBpnHv7, uintU35VMQ, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for WOLF', async () => {
		const stringNEhGOxM = "eQlhYYm61MfKP3mfojVrEtnj35pRJMTMulnOst7LtkFFc6bAIDSlQBUc1attBBg"
		const stringPMeeqzR = "baHaJuqDvGjDS6IcIaqRIyZKUK1IABTwbp3imLsagK7"
		const uintdc4SfKg = BigInt("752")
		const WOLFJGc26km = await WOLF.new(stringNEhGOxM, stringPMeeqzR, uintdc4SfKg, {from: accounts[1]});
		const uintLNO8MPh = BigInt("1340")
		const addressUxlGnjx = accounts[1]
		const uintljAzpG = BigInt("778")
		const addressC1cq1Vm = accounts[1]
		const uintiKEGhxx = BigInt("222")
		const addressjebOaC = accounts[1]
		const addresseRvyfX5 = accounts[3]
		const boolXXRbsc0 = await WOLFJGc26km.approve.call(addressUxlGnjx, uintLNO8MPh, {from: accounts[4]});
		const bool4Rt8kc = await WOLFJGc26km.approve.call(addressC1cq1Vm, uintljAzpG, {from: accounts[4]});
//		const boolT4MkrH2 = await WOLFJGc26km.transferFrom.call(addresseRvyfX5, addressjebOaC, uintiKEGhxx, {from: accounts[4]});

		assert.equal(bool4Rt8kc, true)
		assert.equal(boolXXRbsc0, true)
		await expect(WOLFJGc26km.transferFrom.call(addresseRvyfX5, addressjebOaC, uintiKEGhxx, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for WOLF', async () => {
		const stringP0NM6A1 = "uuvVt6O5aRg9tToOPubPUjD1u376fl14"
		const stringCJTv05D = "AE3zEbz2trYNXvaKk6lOQJmkW6KrHfoHc0kOHrBTEJ3jbwT34trrPRdUmgxFc9pmKoQcEZqhnRiSMJw"
		const uintKixZSlO = BigInt("377")
		const WOLFEZZJYbu = await WOLF.new(stringP0NM6A1, stringCJTv05D, uintKixZSlO, {from: accounts[4]});
		const uintsllbls4 = BigInt("1911")
		const addressWF7uzHZ = accounts[1]
		const uintLZDP9i4 = BigInt("774")
		const addressMkVHzis = accounts[1]
		const uinttRQtRdN = BigInt("1752")
		const addressJFsLnkc = accounts[3]
		const addressvJSYCXQ = accounts[1]
		const boolnfZMUGo = await WOLFEZZJYbu.transfer.call(addressWF7uzHZ, uintsllbls4, {from: accounts[4]});
		const boolqwwNcqZ = await WOLFEZZJYbu.transfer.call(addressMkVHzis, uintLZDP9i4, {from: accounts[4]});
		const boolNNYK8Yl = await WOLFEZZJYbu.approve.call(addressJFsLnkc, uinttRQtRdN, {from: "0x0000000000000000000000000000000000000001"});
//		const boolgPPcwHs = await WOLFEZZJYbu.transferownership.call(addressvJSYCXQ, {from: accounts[3]});

		assert.equal(boolNNYK8Yl, true)
		assert.equal(boolnfZMUGo, true)
		assert.equal(boolqwwNcqZ, true)
		await expect(WOLFEZZJYbu.transferownership.call(addressvJSYCXQ, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for WOLF', async () => {
		const stringX4qZDRv = "cBXb5gjCbbKYOuvpSi7grzmwIcVSLTKbcgXVJIdv1b0neS9aI8kR00tWVohpgh414h8bpLU78mf4Jq3a"
		const stringstrF9Ey = "cikAvyOv2Vnii8aLrtP6XAq8dhIKz2Jv5BMJPprPVyhaVRPbGo0sznVLqHIOe1urc"
		const uintci0dEm7 = BigInt("68")
		const WOLFE1AmgTU = await WOLF.new(stringX4qZDRv, stringstrF9Ey, uintci0dEm7, {from: accounts[4]});
		const uintAE5FAoD = BigInt("741")
		const addressOBDCdD7 = accounts[5]
		const uintlADweZu = BigInt("616")
		const addressf4nrIhR = accounts[3]
		const addressp6QUymN = accounts[3]
		const uintUY1Uoei = BigInt("1841")
		const addresszfh7Bsv = accounts[2]
		const addressajfqtp8 = accounts[4]
		const uintadfjajX = BigInt("312")
		const addressvZNLMef = accounts[0]
		const booll8vZIqQ = await WOLFE1AmgTU.approve.call(addressOBDCdD7, uintAE5FAoD, {from: accounts[0]});
//		const booluizn3CO = await WOLFE1AmgTU.transfer.call(addressf4nrIhR, uintlADweZu, {from: "0x0000000000000000000000000000000000000001"});
//		const boolbHkvffR = await WOLFE1AmgTU.transferownership.call(addressp6QUymN, {from: "0x0000000000000000000000000000000000000001"});
//		const boolaAdpOi9 = await WOLFE1AmgTU.transferFrom.call(addressajfqtp8, addresszfh7Bsv, uintUY1Uoei, {from: accounts[4]});
//		const boolF0jDMbT = await WOLFE1AmgTU.approveAndCall.call(addressvZNLMef, uintadfjajX, {from: accounts[3]});

		assert.equal(booll8vZIqQ, true)
		await expect(WOLFE1AmgTU.transfer.call(addressf4nrIhR, uintlADweZu, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for WOLF', async () => {
		const stringX4qZDRv = "cBXb5gjCbbKYOuvpSi7grzmwIcVSLTKbcgXVJIdv1b0neS9aI8kR00tWVohpgh414h8bpLU78mf4Jq3a"
		const stringstrF9Ey = "cikAvyOv2Vnii8aLrtP6XAq8dhIKz2Jv5BMJPprPVyhaVRPbGo0sznVLqHIOe1urc"
		const uintCEkKYdK = BigInt("68")
		const WOLFE1AmgTU = await WOLF.new(stringX4qZDRv, stringstrF9Ey, uintCEkKYdK, {from: accounts[4]});
		const uintuuRHAFY = BigInt("817")
		const addressQ157r4z = accounts[4]
		const uintgCFMd8w = BigInt("295")
		const addressV5YJZtx = accounts[0]
		const boolRDblvvL = await WOLFE1AmgTU.approveAndCall.call(addressQ157r4z, uintuuRHAFY, {from: accounts[4]});
//		const boolF0jDMbT = await WOLFE1AmgTU.approveAndCall.call(addressV5YJZtx, uintgCFMd8w, {from: accounts[3]});

		assert.equal(boolRDblvvL, true)
		await expect(WOLFE1AmgTU.approveAndCall.call(addressV5YJZtx, uintgCFMd8w, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for WOLF', async () => {
		const stringNEhGOxM = "eQlhYYm61MfKP3mfojVrEtnj35pRJMTMulnOst7LtkFFc6bAIDSlQBUc1attBBg"
		const stringPMeeqzR = "baHaJuqDvGjDS6IcIaqRIyZKUK1IABTwbp3imLsagK7"
		const uintlqTiXd2 = BigInt("752")
		const WOLFJGc26km = await WOLF.new(stringNEhGOxM, stringPMeeqzR, uintlqTiXd2, {from: accounts[1]});
		const uintUJ8wZIo = BigInt("1340")
		const addressNffI0Ql = accounts[1]
		const addressimNgtQ2 = accounts[2]
		const uintAlbvnJ = BigInt("222")
		const addressdAwzjTT = accounts[1]
		const addressBQ6V3b5 = accounts[4]
		const boolXXRbsc0 = await WOLFJGc26km.approve.call(addressNffI0Ql, uintUJ8wZIo, {from: accounts[4]});
		const boolurstQJE = await WOLFJGc26km.transferownership.call(addressimNgtQ2, {from: accounts[1]});
//		const boolT4MkrH2 = await WOLFJGc26km.transferFrom.call(addressBQ6V3b5, addressdAwzjTT, uintAlbvnJ, {from: accounts[4]});

		assert.equal(boolXXRbsc0, true)
		assert.equal(boolurstQJE, true)
		await expect(WOLFJGc26km.transferFrom.call(addressBQ6V3b5, addressdAwzjTT, uintAlbvnJ, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for WOLF', async () => {
		const stringIvnRAyF = "mydm77uNnATZzk7UbcMsijidz7YR7m7uBbxrK2TW3wRmNYuSKnjffb9aDNLyJnnDtA3xtsdTrdnVfXjOjtYi"
		const stringcPfAt5x = "uS1u7jNq6rDiMu8t8z2pqvRifQJF"
		const uinttRXDVHr = BigInt("868")
		const WOLFBd6TPLw = await WOLF.new(stringIvnRAyF, stringcPfAt5x, uinttRXDVHr, {from: accounts[0]});
		const uintqNyKCna = BigInt("1262")
		const addressxhiidu3 = accounts[3]
		const uintryklC1y = BigInt("0")
		const addressa3LA9C5 = accounts[3]
		const uintVmj5YUY = BigInt("870")
		const addressBK5dTxH = accounts[0]
		const addressVvilcQm = accounts[5]
		const addressLBwzN9a = accounts[2]
		const uintHOEO7wX = BigInt("449")
		const addressHsNDYpR = accounts[3]
		const boolnl2Cjyi = await WOLFBd6TPLw.approve.call(addressxhiidu3, uintqNyKCna, {from: accounts[0]});
		const boolkvgmDzp = await WOLFBd6TPLw.transfer.call(addressa3LA9C5, uintryklC1y, {from: accounts[1]});
//		const boolG7CGQSq = await WOLFBd6TPLw.transferFrom.call(addressVvilcQm, addressBK5dTxH, uintVmj5YUY, {from: accounts[0]});
//		const boolluAwW90 = await WOLFBd6TPLw.transferownership.call(addressLBwzN9a, {from: accounts[0]});
//		const boolCGCFFOJ = await WOLFBd6TPLw.approveAndCall.call(addressHsNDYpR, uintHOEO7wX, {from: accounts[2]});

		assert.equal(boolkvgmDzp, true)
		assert.equal(boolnl2Cjyi, true)
		await expect(WOLFBd6TPLw.transferFrom.call(addressVvilcQm, addressBK5dTxH, uintVmj5YUY, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for WOLF', async () => {
		const stringX4qZDRv = "cBXb5gjCbbKYOuvpSi7grzmwIcVSLTKbcgXVJIdv1b0neS9aI8kR00tWVohpgh414h8bpLU78mf4Jq3a"
		const stringstrF9Ey = "cikAvyOv2Vnii8aLrtP6XAq8dhIKz2Jv5BMJPprPVyhaVRPbGo0sznVLqHIOe1urc"
		const uintZtnRWe = BigInt("68")
		const WOLFE1AmgTU = await WOLF.new(stringX4qZDRv, stringstrF9Ey, uintZtnRWe, {from: accounts[4]});
		const uinteDlAL5l = BigInt("1307")
		const addressszBJ5bi = accounts[3]
		const uintQT85JgX = BigInt("1869")
		const addressJi5iTOs = accounts[2]
		const uintsNW0Anx = BigInt("41")
		const addressrzyGMF = accounts[4]
		const uintXsyQyAH = BigInt("1715")
		const addressjXUTpJ = "0x0000000000000000000000000000000000000001"
		const addressgcVhCBz = accounts[2]
		const uintCPWfP2j = BigInt("438")
		const addressJM810Pd = "0x00000000000000000000000000000000000000-1"
		const uintSrro7w3 = BigInt("1340")
		const addressn2PGbzz = accounts[4]
		const boolMAVMbJd = await WOLFE1AmgTU.approve.call(addressszBJ5bi, uinteDlAL5l, {from: accounts[0]});
		const boolreCQVkt = await WOLFE1AmgTU.approve.call(addressJi5iTOs, uintQT85JgX, {from: accounts[5]});
		const boolYknf2u = await WOLFE1AmgTU.approveAndCall.call(addressrzyGMF, uintsNW0Anx, {from: accounts[4]});
		const boolVkOANT2 = await WOLFE1AmgTU.approve.call(addressjXUTpJ, uintXsyQyAH, {from: accounts[3]});
		const boolqUyzVg3 = await WOLFE1AmgTU.transferownership.call(addressgcVhCBz, {from: accounts[4]});
//		const boolnjRNIMB = await WOLFE1AmgTU.approve.call(addressJM810Pd, uintCPWfP2j, {from: accounts[3]});
//		const boolmrT2XnA = await WOLFE1AmgTU.approveAndCall.call(addressn2PGbzz, uintSrro7w3, {from: accounts[3]});

		assert.equal(boolMAVMbJd, true)
		assert.equal(boolVkOANT2, true)
		assert.equal(boolYknf2u, true)
		assert.equal(boolqUyzVg3, true)
		assert.equal(boolreCQVkt, true)
		await expect(WOLFE1AmgTU.approve.call(addressJM810Pd, uintCPWfP2j, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})