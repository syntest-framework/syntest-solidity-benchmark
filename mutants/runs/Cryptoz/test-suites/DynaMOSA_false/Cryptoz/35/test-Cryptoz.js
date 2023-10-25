const Cryptoz = artifacts.require("Cryptoz");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Cryptoz', (accounts) => {
	it('test for Cryptoz', async () => {
		const Cryptozce3EG2d = await Cryptoz.new({from: accounts[5]});
		const uintDPLkzcv = BigInt("41")
		const uintPWkfdk6 = BigInt("1688")
		const uint3IS7JA = BigInt("973")
		const uintqrao7p0 = BigInt("1282")
		const uintyLw5g7r = BigInt("1664")
		const uintRckWGDV = BigInt("1855")
		const uintdOlUulG = BigInt("904")
		const uinteBru5Kr = BigInt("1164")
		const uintIzfWMiw = BigInt("233")
		const uintO0pZgww = BigInt("150")
		const uint69jeg2 = BigInt("78")
		const stringtnToXHQ = "kEnRC"
		const stringeJOFSK = "Qn7VArdKxOgB2UTkqduvQxviLj3T4FK4HGURuHYvLKE6wU3on3B09LC8jPaHQ21EpAd"
		const uintyD6oasY = BigInt("179")
		const addressgwPZbUC = accounts[0]
		const uintYoqLhBu = BigInt("1527")
		const addressJOfIR2I = "0x0000000000000000000000000000000000000001"
		const boolCYSQw5j = await Cryptozce3EG2d.addTocardType.call(uintyLw5g7r, uintqrao7p0, uint3IS7JA, uintPWkfdk6, uintDPLkzcv, {from: accounts[4]});
		const booluln2QUX = await Cryptozce3EG2d.loadNewCardType.call(uintyD6oasY, stringeJOFSK, stringtnToXHQ, uint69jeg2, uintO0pZgww, uintIzfWMiw, uinteBru5Kr, uintdOlUulG, uintRckWGDV, {from: "0x0000000000000000000000000000000000000001"});
		const address1npkOx = await Cryptozce3EG2d.initialize.call(addressgwPZbUC, {from: accounts[2]});
		const uint256a8b0IPB = await Cryptozce3EG2d.totalSupply.call({from: accounts[2]});
		const uint256i8SPpS = await Cryptozce3EG2d.tokenOfOwnerByIndex.call(addressJOfIR2I, uintYoqLhBu, {from: accounts[3]});

		await expect(Cryptozce3EG2d.addTocardType.call(uintyLw5g7r, uintqrao7p0, uint3IS7JA, uintPWkfdk6, uintDPLkzcv, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozhRkoJr4 = await Cryptoz.new({from: accounts[1]});
		const uintTpd5SYp = BigInt("453")
		const uintPGB7DE2 = BigInt("1799")
		const uintbV0DsP = BigInt("1800")
		const stringfBfu7xh = await CryptozhRkoJr4.tokenURI.call(uintTpd5SYp, {from: accounts[1]});
		await CryptozhRkoJr4.getTokensByRarity.call({from: accounts[3]});
		const bool62VW6t = await CryptozhRkoJr4.openBoosterCard.call(uintPGB7DE2, {from: "0x0000000000000000000000000000000000000001"});
		await CryptozhRkoJr4.getTokensByRarity.call({from: accounts[2]});
		const boolmb3dm8N = await CryptozhRkoJr4.buyBoosterCard.call(uintbV0DsP, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(stringfBfu7xh, "https://cryptoz.cards/data/453")
		await expect(CryptozhRkoJr4.getTokensByRarity.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const Cryptozur6qvDB = await Cryptoz.new({from: accounts[3]});
		const addressCcowEUK = accounts[1]
		const uint256arrayIb9R7sh = await Cryptozur6qvDB.tokensOfOwner.call(addressCcowEUK, {from: accounts[5]});
		await Cryptozur6qvDB.getBonusBoosters.call({from: accounts[3]});

		assert.equal(uint256arrayIb9R7sh, BigInt(""))
		await expect(Cryptozur6qvDB.getBonusBoosters.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozKxTKOum = await Cryptoz.new({from: accounts[1]});
		const uintpkYTF52 = BigInt("110")
		const uintBLpteaV = BigInt("2005")
		const uintrGzazIc = BigInt("1170")
		const uintNBGL1qz = BigInt("1035")
		const uintxCn1XVp = BigInt("1224")
		const uintT57dUHz = BigInt("186")
		const boolYfFmHwQ = await CryptozKxTKOum.addTocardType.call(uintxCn1XVp, uintNBGL1qz, uintrGzazIc, uintBLpteaV, uintpkYTF52, {from: accounts[1]});
		const bool3catvg = await CryptozKxTKOum.openBoosterCard.call(uintT57dUHz, {from: accounts[5]});
		await CryptozKxTKOum.getBonusBoosters.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(CryptozKxTKOum.addTocardType.call(uintxCn1XVp, uintNBGL1qz, uintrGzazIc, uintBLpteaV, uintpkYTF52, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozywMfxFz = await Cryptoz.new({from: accounts[5]});
		const uintVTRYYqD = BigInt("808")
		const uintmWIEk5V = BigInt("831")
		const addressagz1Dhy = accounts[5]
		const addresstz9ZUwZ = "0x0000000000000000000000000000000000000001"
		await CryptozywMfxFz.getBonusBoosters.call({from: accounts[5]});
		const boolY7lB40 = await CryptozywMfxFz.buyBoosterCard.call(uintVTRYYqD, {from: accounts[0]});
		await CryptozywMfxFz.withdraw.call({from: accounts[4]});
		const uint256kuCOcjb = await CryptozywMfxFz.totalSupply.call({from: accounts[1]});
		const addressx3Vdlxz = await CryptozywMfxFz.transferFrom.call(addresstz9ZUwZ, addressagz1Dhy, uintmWIEk5V, {from: accounts[5]});

		await expect(CryptozywMfxFz.getBonusBoosters.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozuG7vh9Z = await Cryptoz.new({from: accounts[3]});
		const addressBLfG3SL = accounts[2]
		const uinth6bbYcV = BigInt("332")
		const uintLTfhvmg = BigInt("1642")
		const addressvk5JNwx = accounts[4]
		const addressOWF2z4l = accounts[0]
		const addressT82f2LC = await CryptozuG7vh9Z.linkMySponsor.call(addressBLfG3SL, {from: accounts[3]});
		await CryptozuG7vh9Z.f.call({from: accounts[3]});
		const boolMdt4ZGZ = await CryptozuG7vh9Z.openBoosterCard.call(uinth6bbYcV, {from: accounts[2]});
		const addressu3X3IbK = await CryptozuG7vh9Z.transferFrom.call(addressOWF2z4l, addressvk5JNwx, uintLTfhvmg, {from: accounts[3]});

		await expect(CryptozuG7vh9Z.linkMySponsor.call(addressBLfG3SL, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozKZVCsOr = await Cryptoz.new({from: accounts[4]});
		const uintzUzwZ7x = BigInt("1457")
		const uintYlI3so5 = BigInt("309")
		const addressBSd6hrI = accounts[3]
		const addressYICZjRH = accounts[1]
		const uintg7soWBv = BigInt("1695")
		await CryptozKZVCsOr.getOwnedCard.call(uintzUzwZ7x, {from: accounts[4]});
		const uint256IwrWPbQ = await CryptozKZVCsOr.tokenByIndex.call(uintYlI3so5, {from: accounts[1]});
		const uintwAc8rgt = await CryptozKZVCsOr.getTimeToDailyBonus.call(addressBSd6hrI, {from: accounts[1]});
		const uint256arrayBg329Gk = await CryptozKZVCsOr.tokensOfOwner.call(addressYICZjRH, {from: accounts[0]});
		await CryptozKZVCsOr.getTokensByRarity.call({from: accounts[5]});
		const uint256HuQQv5f = await CryptozKZVCsOr.sacrifice.call(uintg7soWBv, {from: accounts[2]});

		await expect(CryptozKZVCsOr.getOwnedCard.call(uintzUzwZ7x, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const Cryptozur6qvDB = await Cryptoz.new({from: accounts[3]});
		const addressNeTrmCx = accounts[1]
		const uintuTceAaV = BigInt("271")
		const uint256arrayIb9R7sh = await Cryptozur6qvDB.tokensOfOwner.call(addressNeTrmCx, {from: accounts[5]});
		await Cryptozur6qvDB.getBonusBoosters.call({from: accounts[3]});
		await Cryptozur6qvDB.buyBoosterCardAndOpen.call({from: accounts[0]});
		const uint256eahL0kY = await Cryptozur6qvDB.sacrifice.call(uintuTceAaV, {from: accounts[3]});

		assert.equal(uint256arrayIb9R7sh, BigInt(""))
		await expect(Cryptozur6qvDB.getBonusBoosters.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const Cryptozur6qvDB = await Cryptoz.new({from: accounts[3]});
		const addresskBRNoHW = accounts[2]
		const uint256arrayIb9R7sh = await Cryptozur6qvDB.tokensOfOwner.call(addresskBRNoHW, {from: accounts[5]});
		await Cryptozur6qvDB.getBonusBoosters.call({from: accounts[3]});
		const stringHPNgcMN = await Cryptozur6qvDB.symbol.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256arrayIb9R7sh, BigInt(""))
		await expect(Cryptozur6qvDB.getBonusBoosters.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const Cryptozur6qvDB = await Cryptoz.new({from: accounts[3]});
		const uintGZeNwrT = BigInt("1951")
		const addressZIwZGDW = accounts[3]
		const uintVZroI2C = BigInt("1458")
		const uintLGgqGKV = BigInt("385")
		const uintIQTu3XW = BigInt("1895")
		const uintOPTxNRZ = BigInt("144")
		const uintVEjvSz8 = BigInt("17")
		const uintQX2fIqx = BigInt("72")
		const stringkvCl5tA = "qBW"
		const stringBIDu4dn = "Il9MhayIK2oSm2Htkc52AKR5iRi8yXCpnwxRiIYp9nWkS9xU3HBAWSvvt65km4AugKwlAS3jyLiXxmLKyrwhf2mwh"
		const uintktrz1A4 = BigInt("155")
		const uint32IJG5U8u = await Cryptozur6qvDB.isValidCard.call(uintGZeNwrT, {from: accounts[1]});
		await Cryptozur6qvDB.getTokensByRarity.call({from: accounts[4]});
		const uint256arrayIb9R7sh = await Cryptozur6qvDB.tokensOfOwner.call(addressZIwZGDW, {from: accounts[5]});
		await Cryptozur6qvDB.getBonusBoosters.call({from: accounts[3]});
		const boolQDtHhF2 = await Cryptozur6qvDB.loadNewCardType.call(uintktrz1A4, stringBIDu4dn, stringkvCl5tA, uintQX2fIqx, uintVEjvSz8, uintOPTxNRZ, uintIQTu3XW, uintLGgqGKV, uintVZroI2C, {from: accounts[4]});

		await expect(Cryptozur6qvDB.isValidCard.call(uintGZeNwrT, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const Cryptozur6qvDB = await Cryptoz.new({from: accounts[3]});
		const addressgiJN6bH = accounts[1]
		const uintNys95XI = BigInt("1600")
		const uint256arrayIb9R7sh = await Cryptozur6qvDB.tokensOfOwner.call(addressgiJN6bH, {from: accounts[5]});
		await Cryptozur6qvDB.getBonusBoosters.call({from: accounts[3]});
		const uint256OxKfNCo = await Cryptozur6qvDB.tokenByIndex.call(uintNys95XI, {from: accounts[2]});

		assert.equal(uint256arrayIb9R7sh, BigInt(""))
		await expect(Cryptozur6qvDB.getBonusBoosters.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozyT6Yssk = await Cryptoz.new({from: "0x0000000000000000000000000000000000000001"});
		const uinthsezYL = BigInt("1646")
		const uintsrGFyS4 = BigInt("1117")
		const uintdCtrbaC = BigInt("25")
		const uintKuY8u8M = BigInt("981")
		const uinth4HXVz0 = BigInt("862")
		const uintadxveO0 = BigInt("1652")
		const uintHnkQ0wa = BigInt("385")
		const boolN2Nl0f8 = await CryptozyT6Yssk.buyCard.call(uinthsezYL, {from: accounts[0]});
		const bool31mBgb = await CryptozyT6Yssk.buyBoosterCard.call(uintsrGFyS4, {from: "0x0000000000000000000000000000000000000001"});
		await CryptozyT6Yssk.withdraw.call({from: accounts[1]});
		const boolmb1Oow = await CryptozyT6Yssk.addTocardType.call(uintHnkQ0wa, uintadxveO0, uinth4HXVz0, uintKuY8u8M, uintdCtrbaC, {from: accounts[4]});
	});

	it('test for Cryptoz', async () => {
		const Cryptozur6qvDB = await Cryptoz.new({from: accounts[3]});
		const addressmtvkYCY = accounts[2]
		const uintOhDxhTN = BigInt("517")
		const uint256arrayIb9R7sh = await Cryptozur6qvDB.tokensOfOwner.call(addressmtvkYCY, {from: accounts[5]});
		const uint256Q5N40N9 = await Cryptozur6qvDB.sacrifice.call(uintOhDxhTN, {from: accounts[2]});

		assert.equal(uint256arrayIb9R7sh, BigInt(""))
		await expect(Cryptozur6qvDB.sacrifice.call(uintOhDxhTN, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozQ2O8QKH = await Cryptoz.new({from: accounts[4]});
		const uintDr83OnQ = BigInt("412")
		const address4sdGZZ = accounts[0]
		const addressCCcSSW2 = accounts[1]
		const uintidK0JH = BigInt("186")
		const addressyYbWsWb = await CryptozQ2O8QKH.transferFrom.call(addressCCcSSW2, address4sdGZZ, uintDr83OnQ, {from: accounts[0]});
		const stringkEQYbAN = await CryptozQ2O8QKH.name.call({from: accounts[3]});
		await CryptozQ2O8QKH.buyBoosterCardAndOpen.call({from: accounts[2]});
		const uint256VfUAfSt = await CryptozQ2O8QKH.totalSupply.call({from: accounts[5]});
		await CryptozQ2O8QKH.getTokensByRarity.call({from: accounts[4]});
		const stringqiv8Fbr = await CryptozQ2O8QKH.tokenURI.call(uintidK0JH, {from: accounts[1]});

		await expect(CryptozQ2O8QKH.transferFrom.call(addressCCcSSW2, address4sdGZZ, uintDr83OnQ, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const Cryptozt1UmE26 = await Cryptoz.new({from: accounts[1]});
		const addressTVrrgHD = "0x0000000000000000000000000000000000000001"
		const addressJb1mR1 = accounts[1]
		const uintOaNCQnx = BigInt("443")
		const uintsqzUs8R = BigInt("1613")
		const uintaA6zyoK = BigInt("1400")
		const uintsgml1JA = BigInt("8")
		const uintnfmKK2U = BigInt("83")
		const uintCcZ5jQm = BigInt("125")
		const stringEvy0MxC = "aItP6NSau4foPXIMAy1hz5Vq9MnRPoxIDtq"
		const stringbH1w69 = "9ooK8Y3oPNMe51Llkqlh43H4d4l"
		const uintJzqZDm = BigInt("208")
		const uintXPxtg2n = BigInt("891")
		const uintaZ25aOa = BigInt("1007")
		const uintRmssRXS = BigInt("1863")
		const stringpPG6y0q = await Cryptozt1UmE26.symbol.call({from: accounts[1]});
		const addresslljhGI = await Cryptozt1UmE26.initialize.call(addressTVrrgHD, {from: accounts[1]});
		const uintTWtjaW4 = await Cryptozt1UmE26.getTimeToDailyBonus.call(addressJb1mR1, {from: accounts[4]});
		const booldQaHXg = await Cryptozt1UmE26.loadNewCardType.call(uintJzqZDm, stringbH1w69, stringEvy0MxC, uintCcZ5jQm, uintnfmKK2U, uintsgml1JA, uintaA6zyoK, uintsqzUs8R, uintOaNCQnx, {from: accounts[4]});
		const uint256LEB1h8V = await Cryptozt1UmE26.sacrifice.call(uintXPxtg2n, {from: "0x0000000000000000000000000000000000000001"});
		const stringbQMdRgO = await Cryptozt1UmE26.name.call({from: accounts[4]});
		const boolNrYLFhL = await Cryptozt1UmE26.openBoosterCard.call(uintaZ25aOa, {from: "0x0000000000000000000000000000000000000001"});
		const uint32KluyfbQ = await Cryptozt1UmE26.isValidCard.call(uintRmssRXS, {from: accounts[5]});

		assert.equal(stringpPG6y0q, "Cryptoz")
		assert.equal(uintTWtjaW4, BigInt("1630205341"))
		await expect(Cryptozt1UmE26.loadNewCardType.call(uintJzqZDm, stringbH1w69, stringEvy0MxC, uintCcZ5jQm, uintnfmKK2U, uintsgml1JA, uintaA6zyoK, uintsqzUs8R, uintOaNCQnx, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const Cryptozt1UmE26 = await Cryptoz.new({from: accounts[1]});
		const addresssg2GaH = "0x00000000000000000000000000000000000000-1"
		const addressTPio81z = accounts[1]
		const uintT8VFYG0 = BigInt("304")
		const uintpdZoEAm = BigInt("443")
		const uintC7MC53Q = BigInt("1613")
		const uintSAQNVup = BigInt("1400")
		const uintw3tF5to = BigInt("8")
		const uintatXeT11 = BigInt("83")
		const uintVGtClp = BigInt("125")
		const stringEvy0MxC = "aItP6NSau4foPXIMAy1hz5Vq9MnRPoxIDtq"
		const stringbH1w69 = "9ooK8Y3oPNMe51Llkqlh43H4d4l"
		const uintcRTmQhW = BigInt("208")
		const uintDwm86IG = BigInt("891")
		const uintz6WNh2A = BigInt("1026")
		const uintminkGZh = BigInt("1863")
		const stringpPG6y0q = await Cryptozt1UmE26.symbol.call({from: accounts[1]});
		const addresslljhGI = await Cryptozt1UmE26.initialize.call(addresssg2GaH, {from: accounts[1]});
		const uintTWtjaW4 = await Cryptozt1UmE26.getTimeToDailyBonus.call(addressTPio81z, {from: accounts[4]});
		const uint256OXa5wIH = await Cryptozt1UmE26.sacrifice.call(uintT8VFYG0, {from: accounts[4]});
		const booldQaHXg = await Cryptozt1UmE26.loadNewCardType.call(uintcRTmQhW, stringbH1w69, stringEvy0MxC, uintVGtClp, uintatXeT11, uintw3tF5to, uintSAQNVup, uintC7MC53Q, uintpdZoEAm, {from: accounts[4]});
		const uint256LEB1h8V = await Cryptozt1UmE26.sacrifice.call(uintDwm86IG, {from: "0x0000000000000000000000000000000000000001"});
		const stringbQMdRgO = await Cryptozt1UmE26.name.call({from: accounts[4]});
		const boolNrYLFhL = await Cryptozt1UmE26.openBoosterCard.call(uintz6WNh2A, {from: "0x0000000000000000000000000000000000000001"});
		const uint32KluyfbQ = await Cryptozt1UmE26.isValidCard.call(uintminkGZh, {from: accounts[5]});

		assert.equal(stringpPG6y0q, "Cryptoz")
		await expect(Cryptozt1UmE26.initialize.call(addresssg2GaH, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const Cryptozur6qvDB = await Cryptoz.new({from: accounts[3]});
		const addressAATpwm = accounts[2]
		const uintJkCWtU2 = BigInt("540")
		const addressQGMGucO = accounts[4]
		const uintfvvvKfy = BigInt("523")
		const uint256arrayIb9R7sh = await Cryptozur6qvDB.tokensOfOwner.call(addressAATpwm, {from: accounts[5]});
		const uint256SZc2Rc3 = await Cryptozur6qvDB.tokenOfOwnerByIndex.call(addressQGMGucO, uintJkCWtU2, {from: "0x0000000000000000000000000000000000000001"});
		const uint256Q5N40N9 = await Cryptozur6qvDB.sacrifice.call(uintfvvvKfy, {from: accounts[2]});

		assert.equal(uint256arrayIb9R7sh, BigInt(""))
		await expect(Cryptozur6qvDB.tokenOfOwnerByIndex.call(addressQGMGucO, uintJkCWtU2, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozURNbjK8 = await Cryptoz.new({from: accounts[4]});
		const uintI8ErYVQ = BigInt("1589")
		const addressTZYYXN9 = accounts[1]
		const uintsiIFavf = BigInt("1393")
		await CryptozURNbjK8.f.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256JkXPnOK = await CryptozURNbjK8.tokenByIndex.call(uintI8ErYVQ, {from: accounts[0]});
		const uintEOfxoHo = await CryptozURNbjK8.getTimeToDailyBonus.call(addressTZYYXN9, {from: "0x0000000000000000000000000000000000000001"});
		const uint32dAxdqiU = await CryptozURNbjK8.isValidCard.call(uintsiIFavf, {from: "0x0000000000000000000000000000000000000001"});

		await expect(CryptozURNbjK8.f.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const Cryptozt1UmE26 = await Cryptoz.new({from: accounts[1]});
		const addressYButFEU = "0x0000000000000000000000000000000000000000"
		const addressIWjuYXX = accounts[2]
		const uintmFsciDS = BigInt("304")
		const addressp3p1C1g = accounts[2]
		const uintbjFei41 = BigInt("443")
		const uintBHDNDDX = BigInt("1613")
		const uinteOCoZuy = BigInt("1400")
		const uintKI1USOp = BigInt("8")
		const uintDJDgwux = BigInt("83")
		const uintssrTuf = BigInt("125")
		const stringEvy0MxC = "aItP6NSau4foPXIMAy1hz5Vq9MnRPoxIDtq"
		const stringbH1w69 = "9ooK8Y3oPNMe51Llkqlh43H4d4l"
		const uintbikdcpH = BigInt("208")
		const uintsfMToc = BigInt("891")
		const uintM0OpMHn = BigInt("1026")
		const uintOLV1IY = BigInt("1863")
		const stringpPG6y0q = await Cryptozt1UmE26.symbol.call({from: accounts[1]});
		const addresslljhGI = await Cryptozt1UmE26.initialize.call(addressYButFEU, {from: accounts[1]});
		const uintTWtjaW4 = await Cryptozt1UmE26.getTimeToDailyBonus.call(addressIWjuYXX, {from: accounts[4]});
		const stringkzWyu0K = await Cryptozt1UmE26.name.call({from: accounts[2]});
		await Cryptozt1UmE26.getBonusBoosters.call({from: accounts[1]});
		const uint256OXa5wIH = await Cryptozt1UmE26.sacrifice.call(uintmFsciDS, {from: accounts[4]});
		const uintlBfPMb7 = await Cryptozt1UmE26.getTimeToDailyBonus.call(addressp3p1C1g, {from: accounts[1]});
		const booldQaHXg = await Cryptozt1UmE26.loadNewCardType.call(uintbikdcpH, stringbH1w69, stringEvy0MxC, uintssrTuf, uintDJDgwux, uintKI1USOp, uinteOCoZuy, uintBHDNDDX, uintbjFei41, {from: accounts[4]});
		const uint256LEB1h8V = await Cryptozt1UmE26.sacrifice.call(uintsfMToc, {from: "0x0000000000000000000000000000000000000001"});
		const stringbQMdRgO = await Cryptozt1UmE26.name.call({from: accounts[4]});
		const boolNrYLFhL = await Cryptozt1UmE26.openBoosterCard.call(uintM0OpMHn, {from: "0x0000000000000000000000000000000000000001"});
		const uint32KluyfbQ = await Cryptozt1UmE26.isValidCard.call(uintOLV1IY, {from: accounts[5]});

		assert.equal(stringkzWyu0K, "Cryptoz Cards")
		assert.equal(stringpPG6y0q, "Cryptoz")
		assert.equal(uintTWtjaW4, BigInt("1630205337"))
		await expect(Cryptozt1UmE26.getBonusBoosters.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});
})