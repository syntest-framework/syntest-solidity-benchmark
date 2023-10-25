const Final = artifacts.require("Final");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Final', (accounts) => {
	it('test for Final', async () => {
		const stringJICV1fo = "34ZERBSXaJFrxgjXt8ypAl84OfhdUd4Bl3m31GTJFMMFsDvlz9RrtlSgpuD3TwcSc31TYbk9NVTGC3qN1lbDNf0BuYnZ6j"
		const stringaJYcrJo = "Ysli5edbs0GwyCLoyWOxMu3MzGIfeCrU4TwUruqHOs83dyLJZX0Mi"
		const uintWkdbRie = BigInt("1869")
		const FinalyVZ05q = await Final.new(stringJICV1fo, stringaJYcrJo, uintWkdbRie, {from: accounts[0]});
		const uintsALqJsN = BigInt("1711")
		const addressRA5af7K = accounts[3]
		const addressUkKSPya = accounts[5]
		const uintUvT98Lr = BigInt("195")
		const addressjgme3Po = accounts[2]
		const uint1hPTtj = BigInt("1050")
		const addressn06dggD = accounts[1]
		const uintM8q6mjN = BigInt("684")
		const addressW8iU1iY = accounts[4]
		const addressful3cP = accounts[0]
		const booljelJGWg = await FinalyVZ05q.transferFrom.call(addressUkKSPya, addressRA5af7K, uintsALqJsN, {from: accounts[3]});
		const boolty1mie = await FinalyVZ05q.decreaseAllowance.call(addressjgme3Po, uintUvT98Lr, {from: accounts[4]});
		const uint8Y4mnjNz = await FinalyVZ05q.decimals.call({from: accounts[1]});
		const boolG7aZ4g2 = await FinalyVZ05q.increaseAllowance.call(addressn06dggD, uint1hPTtj, {from: accounts[1]});
		const boolyxojrx5 = await FinalyVZ05q.transferFrom.call(addressful3cP, addressW8iU1iY, uintM8q6mjN, {from: "0x0000000000000000000000000000000000000001"});

		await expect(FinalyVZ05q.transferFrom.call(addressUkKSPya, addressRA5af7K, uintsALqJsN, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Final', async () => {
		const stringNhqWISl = "Vf8R1azcbe57Qelo1y5kH5rpjnvqnhgMeVj5v6vVUv57u8epmQYleQDPIA1p8yelGr1xkNsXv5UYa8aJuKNpt"
		const stringtzaDAR6 = "MzvLzMkeHspCE1t3FNbxmoQJmFCpXh6vhpq6TCYRdTSJdyOt2uqar13elXFdvabbssQABA9sxq"
		const uintMB5SmqG = BigInt("209")
		const FinalfzA953C = await Final.new(stringNhqWISl, stringtzaDAR6, uintMB5SmqG, {from: accounts[4]});
		const uintGfx9zPD = BigInt("1830")
		const addressSpAtSPe = "0x0000000000000000000000000000000000000001"
		const uintYJZgwAE = BigInt("1181")
		const addressiBYeev = accounts[1]
		const addressSb5FUUz = accounts[0]
		const addressAShmzWD = accounts[5]
		const boolNkV241v = await FinalfzA953C.increaseAllowance.call(addressSpAtSPe, uintGfx9zPD, {from: accounts[5]});
		const boolGAmd0g9 = await FinalfzA953C.increaseAllowance.call(addressiBYeev, uintYJZgwAE, {from: accounts[2]});
		const uintILFpWxM = await FinalfzA953C.allowance.call(addressAShmzWD, addressSb5FUUz, {from: accounts[2]});

		await expect(FinalfzA953C.increaseAllowance.call(addressSpAtSPe, uintGfx9zPD, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Final', async () => {
		const stringGqLf8Mt = "OThiJyx8q8fik6jGsK6LEddNYFynjo4jAqdC8Wbg8WpnzExat42W9A1IgeOd"
		const stringhXFhn8v = "Rw6iJ02svzDH70WEwxikzeLUnJvkId3yPZA7OytNEA62QGFtLJ97vsqNDBNBNNLWIMHGXKUHTknx8k3"
		const uint1CiCIu = BigInt("562")
		const FinalgGDKDzd = await Final.new(stringGqLf8Mt, stringhXFhn8v, uint1CiCIu, {from: accounts[3]});
		const addressxHIR9WX = accounts[0]
		const uintMriVo3O = BigInt("811")
		const addressgkQD0HN = accounts[0]
		const addressxUfM3jf = accounts[3]
		const uintIqSKI64 = BigInt("1742")
		const addressXSK9uO8 = accounts[1]
		const addressDGqYj44 = accounts[4]
		const uintvTjaafV = await FinalgGDKDzd.balanceOf.call(addressxHIR9WX, {from: accounts[1]});
		const boolkszeaQE = await FinalgGDKDzd.transfer.call(addressgkQD0HN, uintMriVo3O, {from: accounts[1]});
		const uint8elbLVdc = await FinalgGDKDzd.decimals.call({from: accounts[3]});
		const uintfSzLJsm = await FinalgGDKDzd.balanceOf.call(addressxUfM3jf, {from: accounts[4]});
		const boold8x90a = await FinalgGDKDzd.transferFrom.call(addressDGqYj44, addressXSK9uO8, uintIqSKI64, {from: accounts[0]});

		assert.equal(uintvTjaafV, BigInt("0"))
		await expect(FinalgGDKDzd.transfer.call(addressgkQD0HN, uintMriVo3O, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Final', async () => {
		const stringd6G2xsO = "KXvX85CDoUMkgkV7kxickP5GibJHSlK2xeVStM614qn2VGMvAfgRQlYoVmRiYQFUWC1"
		const stringc2fuqt = "GMzqgnKO4PhrQzEr7DVzaBxxqkSdOGVuGpaEDA8bWTr9GNlb0K5iMkT6E4Tn9DJvebXEnIBGubzzc9gGc"
		const uintxgrYYF = BigInt("195")
		const FinaltPyoNbx = await Final.new(stringd6G2xsO, stringc2fuqt, uintxgrYYF, {from: accounts[3]});
		const uintlzfRtF9 = BigInt("154")
		const addresspXdc7WN = accounts[3]
		const uintrriBxtF = BigInt("888")
		const addressWWH24H = accounts[0]
		const uintQKO61pD = BigInt("520")
		const addressow8CKv6 = accounts[0]
		const addressVxkNo70 = accounts[4]
		const boolvduTR4z = await FinaltPyoNbx.approve.call(addresspXdc7WN, uintlzfRtF9, {from: accounts[4]});
		const stringUrMBHt0 = await FinaltPyoNbx.symbol.call({from: accounts[2]});
		const booldgolLvo = await FinaltPyoNbx.approve.call(addressWWH24H, uintrriBxtF, {from: accounts[3]});
		const boolC6Zm9uI = await FinaltPyoNbx.transfer.call(addressow8CKv6, uintQKO61pD, {from: accounts[0]});
		const boolEyp7ez1 = await FinaltPyoNbx.transferownership.call(addressVxkNo70, {from: "0x0000000000000000000000000000000000000001"});
		const uint8OukTbO = await FinaltPyoNbx.decimals.call({from: accounts[4]});

		assert.equal(booldgolLvo, true)
		assert.equal(boolvduTR4z, true)
		assert.equal(stringUrMBHt0, "GMzqgnKO4PhrQzEr7DVzaBxxqkSdOGVuGpaEDA8bWTr9GNlb0K5iMkT6E4Tn9DJvebXEnIBGubzzc9gGc")
		await expect(FinaltPyoNbx.transfer.call(addressow8CKv6, uintQKO61pD, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Final', async () => {
		const stringWvwSeH0 = "hJyVmfnJ5ISP8duE0rejLyVT1TNIh7kM8BPNNVyAjeGYX2daBBfBwN6aNhuFJKdvMSgxZedP8z"
		const stringv1xGirS = "sD1tjHXxUijcUKP5YZIK7VfkSmqhtP"
		const uintVvYaE57 = BigInt("84")
		const FinalINYZCj = await Final.new(stringWvwSeH0, stringv1xGirS, uintVvYaE57, {from: accounts[0]});
		const uintCsORumz = BigInt("77")
		const addressrLxCpzF = accounts[0]
		const uintpkW2D6g = BigInt("1206")
		const addressGu7Auys = accounts[3]
		const uint8eleORok = await FinalINYZCj.decimals.call({from: "0x0000000000000000000000000000000000000001"});
		const boolNONTR8w = await FinalINYZCj.transfer.call(addressrLxCpzF, uintCsORumz, {from: accounts[4]});
		const uint8AHBokk1 = await FinalINYZCj.decimals.call({from: accounts[3]});
		const boolpzirfoO = await FinalINYZCj.transfer.call(addressGu7Auys, uintpkW2D6g, {from: accounts[0]});

		assert.equal(uint8eleORok, BigInt("18"))
		await expect(FinalINYZCj.transfer.call(addressrLxCpzF, uintCsORumz, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Final', async () => {
		const stringDZaK2VR = "LtkkJyDeQnYY52A9Pk7QDxSryb21HudMPlr8OUCLieFVX51fYC7Tu6FWuTtfWGKbqzf6ZTH1IgBA9GThS05"
		const stringe93sMNe = "3QAusFryinnVuAiYVrpbVG6wdk8E4kToWJpoXJAHj2GpE2SLOEhovcfi"
		const uintipkiqpt = BigInt("1880")
		const FinallDClM6T = await Final.new(stringDZaK2VR, stringe93sMNe, uintipkiqpt, {from: "0x0000000000000000000000000000000000000001"});
		const addressFVs7kuA = "0x0000000000000000000000000000000000000001"
		const uintHrpzHk = BigInt("1723")
		const addresskpWx18I = accounts[1]
		const address5bEayP = accounts[2]
		const uintBkGxx6Y = BigInt("1583")
		const addresscYuGBTt = "0x0000000000000000000000000000000000000001"
		const address1LPvFT = accounts[0]
		const addressBUwDsCf = accounts[0]
		const addressdPRpWa = accounts[2]
		const uintOZ7L2Rm = BigInt("197")
		const addressttNbSk2 = accounts[4]
		const uintGuoebot = BigInt("1941")
		const addressASSnKRh = accounts[4]
		const addressAz5zl92 = accounts[0]
		const uintI3J3o7g = await FinallDClM6T.balanceOf.call(addressFVs7kuA, {from: accounts[1]});
		const boolZ415cN = await FinallDClM6T.transferFrom.call(address5bEayP, addresskpWx18I, uintHrpzHk, {from: accounts[3]});
		const boolzGxeLak = await FinallDClM6T.transferFrom.call(address1LPvFT, addresscYuGBTt, uintBkGxx6Y, {from: accounts[5]});
		const uintibWKxZ = await FinallDClM6T.allowance.call(addressdPRpWa, addressBUwDsCf, {from: accounts[5]});
		const boolEeI1ZTy = await FinallDClM6T.increaseAllowance.call(addressttNbSk2, uintOZ7L2Rm, {from: accounts[4]});
		const boolPwqpifC = await FinallDClM6T.transferFrom.call(addressAz5zl92, addressASSnKRh, uintGuoebot, {from: accounts[4]});
	});

	it('test for Final', async () => {
		const stringwM0AorS = "xak7ylq94UPq6utDHwDRr2biMKOxr8908VcWMcQspIz2sNzLNERsJG69zbMnwJ0DHxXCzixA9UXfzGR"
		const stringR4lyFSF = "assiYDgGXaUJlYGSyClfDuQB"
		const uintgLgeSIm = BigInt("185")
		const FinalsyDvJJw = await Final.new(stringwM0AorS, stringR4lyFSF, uintgLgeSIm, {from: accounts[2]});
		const uintIHPh9G3 = BigInt("1582")
		const addressuoOz6gv = accounts[2]
		const uintKHMq5we = BigInt("1730")
		const addressUX6Bv98 = "0x0000000000000000000000000000000000000001"
		const uintat27M7O = BigInt("399")
		const addresslWd5pod = accounts[1]
		const boolVZKvES8 = await FinalsyDvJJw.approveAndCall.call(addressuoOz6gv, uintIHPh9G3, {from: "0x0000000000000000000000000000000000000001"});
		const boolvMHdKh = await FinalsyDvJJw.increaseAllowance.call(addressUX6Bv98, uintKHMq5we, {from: accounts[4]});
		const uint8KRLIxjH = await FinalsyDvJJw.decimals.call({from: accounts[4]});
		const booliLqlc54 = await FinalsyDvJJw.transfer.call(addresslWd5pod, uintat27M7O, {from: accounts[1]});

		await expect(FinalsyDvJJw.approveAndCall.call(addressuoOz6gv, uintIHPh9G3, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Final', async () => {
		const stringBpkNaus = "ulD4vYpvBChatzz7yOkxkyTbTycqOQhYuxmapOFEt9jEIhEmdPG"
		const stringHmA9UEx = "GsBeCN6eagD4tmXThu8tClcJsKlVY3m2YDDYcrQURBRPWYmsvBnygRk5tC8CHzg3GKUCrkRwlnMX7LMouSJM7AxqyngxTL"
		const uinteQ2zRao = BigInt("248")
		const FinalAU2FUQc = await Final.new(stringBpkNaus, stringHmA9UEx, uinteQ2zRao, {from: accounts[2]});
		const addressOOdO7k4 = "0x0000000000000000000000000000000000000001"
		const uintxarKfLG = BigInt("1356")
		const addressWQUHCz6 = "0x0000000000000000000000000000000000000001"
		const addressr5zhS5D = accounts[0]
		const uintKtzIsgt = BigInt("59")
		const addressq1XMRXw = accounts[5]
		const addressZuPbZx = accounts[1]
		const boolzPicWdi = await FinalAU2FUQc.transferownership.call(addressOOdO7k4, {from: accounts[1]});
		const string6T2nNP = await FinalAU2FUQc.symbol.call({from: accounts[1]});
		const boolbzcRFga = await FinalAU2FUQc.transferFrom.call(addressr5zhS5D, addressWQUHCz6, uintxarKfLG, {from: accounts[1]});
		const boolX24y1DD = await FinalAU2FUQc.transferFrom.call(addressZuPbZx, addressq1XMRXw, uintKtzIsgt, {from: accounts[3]});

		await expect(FinalAU2FUQc.transferownership.call(addressOOdO7k4, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Final', async () => {
		const stringfG4FptE = "QPmMi"
		const stringv4OpiIy = "7Fcf1L4Vt2K1K4d3oQg8dLINvDGpWnHjQvNHIKd1kwxr3jpP46m0YQBre8UluD1OFUNpJlNbvNQ60HfWFol4VBQK"
		const uintAQjnP2y = BigInt("1714")
		const FinalMdvcmSg = await Final.new(stringfG4FptE, stringv4OpiIy, uintAQjnP2y, {from: accounts[0]});
		const uintWDxSxad = BigInt("0")
		const addressHjKHx78 = accounts[4]
		const boolZEA2iqI = await FinalMdvcmSg.transfer.call(addressHjKHx78, uintWDxSxad, {from: accounts[5]});

		assert.equal(boolZEA2iqI, true)
	});

	it('test for Final', async () => {
		const stringmxCoZ8w = "SNpCOysGzSnCvORSnVdJusRTxsA1lvLap9Xw5nBXs6yEaWvyOG17ggOWQ635yWTcoEDSFHvmc"
		const stringyboXFFC = "OQIIppt7eofpxK9GBtsV6leiELCSh9p304TatGld38s5nbtvnnoeDgrq1uvh71QTHy1p9v0axb9utKCCCd"
		const uintT5jaml = BigInt("39")
		const FinalRx7WNd2 = await Final.new(stringmxCoZ8w, stringyboXFFC, uintT5jaml, {from: accounts[1]});
		const uintMvVRqBp = BigInt("1140")
		const addressrFE0SAh = accounts[0]
		const uintdRv2h4D = BigInt("351")
		const addressmwLnMF = accounts[0]
		const uintO3I5pNn = BigInt("1003")
		const addressMcYGOvt = accounts[0]
		const addressSPAzxJ = accounts[5]
		const addressOqtiwjM = accounts[4]
		const booltY4xlts = await FinalRx7WNd2.approveAndCall.call(addressrFE0SAh, uintMvVRqBp, {from: accounts[1]});
		const boolZJ8MVU0 = await FinalRx7WNd2.approveAndCall.call(addressmwLnMF, uintdRv2h4D, {from: accounts[5]});
		const boolUPmT3zv = await FinalRx7WNd2.approve.call(addressMcYGOvt, uintO3I5pNn, {from: accounts[1]});
		const uintSVyLJes = await FinalRx7WNd2.allowance.call(addressOqtiwjM, addressSPAzxJ, {from: accounts[0]});

		assert.equal(booltY4xlts, true)
		await expect(FinalRx7WNd2.approveAndCall.call(addressmwLnMF, uintdRv2h4D, {from: accounts[5]})).to.be.rejectedWith(Error);
	});
})