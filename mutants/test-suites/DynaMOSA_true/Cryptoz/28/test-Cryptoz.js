const Cryptoz = artifacts.require("Cryptoz");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Cryptoz', (accounts) => {
	it('test for Cryptoz', async () => {
		const CryptoztzKrn07 = await Cryptoz.new({from: accounts[5]});
		const uintHapqcnQ = BigInt("1432")
		const addresssSACwkT = accounts[2]
		const addressj7yEpA7 = accounts[4]
		const address4qO4d4 = "0x0000000000000000000000000000000000000001"
		const uintuQGfr7e = BigInt("1898")
//		const addressAG4jCAD = await CryptoztzKrn07.transferFrom.call(addressj7yEpA7, addresssSACwkT, uintHapqcnQ, {from: accounts[3]});
//		const stringKy0UcDA = await CryptoztzKrn07.name.call({from: accounts[3]});
//		const uint256arrayILxdC6 = await CryptoztzKrn07.tokensOfOwner.call(address4qO4d4, {from: accounts[2]});
//		const uint256ruSYLpP = await CryptoztzKrn07.sacrifice.call(uintuQGfr7e, {from: accounts[0]});

		await expect(CryptoztzKrn07.transferFrom.call(addressj7yEpA7, addresssSACwkT, uintHapqcnQ, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozIV2nnXw = await Cryptoz.new({from: accounts[3]});
		const uintxzQ4PXj = BigInt("863")
		const addressKoImcmP = accounts[1]
//		const uint3274jCab = await CryptozIV2nnXw.getFreeCard.call(uintxzQ4PXj, {from: accounts[4]});
//		const addressM8yz7k9 = await CryptozIV2nnXw.initialize.call(addressKoImcmP, {from: "0x0000000000000000000000000000000000000001"});

		await expect(CryptozIV2nnXw.getFreeCard.call(uintxzQ4PXj, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozDXdAho7 = await Cryptoz.new({from: accounts[4]});
//		await CryptozDXdAho7.buyBoosterCardAndOpen.call({from: accounts[2]});
//		await CryptozDXdAho7.f.call({from: accounts[1]});

		await expect(CryptozDXdAho7.buyBoosterCardAndOpen.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozKnGsdq = await Cryptoz.new({from: accounts[4]});
		const addressmN7QV0 = accounts[3]
		const uintTsle2UW = BigInt("479")
		const addressOS6mS4i = accounts[4]
		const addresszm9Z16g = accounts[4]
		const uint4no5LC = BigInt("1765")
		const uinthdIFGcX = BigInt("1985")
//		const addresswVMd56C = await CryptozKnGsdq.initialize.call(addressmN7QV0, {from: accounts[2]});
//		const addressOhtxZ9P = await CryptozKnGsdq.transferFrom.call(addresszm9Z16g, addressOS6mS4i, uintTsle2UW, {from: accounts[5]});
//		const uint256vqtbiXj = await CryptozKnGsdq.tokenByIndex.call(uint4no5LC, {from: accounts[3]});
//		await CryptozKnGsdq.getTokensByRarity.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint32WetKKay = await CryptozKnGsdq.isValidCard.call(uinthdIFGcX, {from: accounts[4]});

		await expect(CryptozKnGsdq.initialize.call(addressmN7QV0, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozUesNN8s = await Cryptoz.new({from: accounts[3]});
		const uintZHO4UCz = BigInt("283")
		const uintWMR7MK = BigInt("740")
		const uintNn6Ggmw = BigInt("2010")
//		await CryptozUesNN8s.f.call({from: "0x0000000000000000000000000000000000000001"});
//		const boolPp01rSM = await CryptozUesNN8s.buyCard.call(uintZHO4UCz, {from: "0x0000000000000000000000000000000000000001"});
//		const boolSnWPKzx = await CryptozUesNN8s.openBoosterCard.call(uintWMR7MK, {from: accounts[1]});
//		const boolDQeZQ2y = await CryptozUesNN8s.openBoosterCard.call(uintNn6Ggmw, {from: accounts[2]});

		await expect(CryptozUesNN8s.f.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozRSEg2s = await Cryptoz.new({from: accounts[1]});
		const addresscAFHO9a = accounts[4]
		const uintccg3cfk = BigInt("1059")
		const addresskgcuSTS = accounts[4]
		const uintvkWCS7O = BigInt("402")
		const addressMS2tn62 = accounts[3]
		const addressGojhY2y = accounts[2]
		const addressL0ZsRZy = accounts[2]
		const uint256arraylMH0EKw = await CryptozRSEg2s.tokensOfOwner.call(addresscAFHO9a, {from: accounts[0]});
//		const uint256LdTmTiO = await CryptozRSEg2s.tokenOfOwnerByIndex.call(addresskgcuSTS, uintccg3cfk, {from: accounts[1]});
//		const uint256mdFc7N3 = await CryptozRSEg2s.tokenOfOwnerByIndex.call(addressMS2tn62, uintvkWCS7O, {from: accounts[4]});
//		const uintOhYIccE = await CryptozRSEg2s.getTimeToDailyBonus.call(addressGojhY2y, {from: accounts[1]});
//		const addresszegD4OR = await CryptozRSEg2s.initialize.call(addressL0ZsRZy, {from: accounts[4]});

		assert.equal(uint256arraylMH0EKw, BigInt(""))
		await expect(CryptozRSEg2s.tokenOfOwnerByIndex.call(addresskgcuSTS, uintccg3cfk, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozCOp273 = await Cryptoz.new({from: accounts[0]});
		const uintPSMUIjV = BigInt("173")
		const uintcdmiGu1 = BigInt("1937")
		const uintXKB0Q5s = BigInt("895")
		const addressXWUc9G = accounts[3]
//		const booleSbMUE5 = await CryptozCOp273.openBoosterCard.call(uintPSMUIjV, {from: accounts[3]});
//		await CryptozCOp273.getOwnedCard.call(uintcdmiGu1, {from: accounts[4]});
//		const uint32vEDUw7z = await CryptozCOp273.getFreeCard.call(uintXKB0Q5s, {from: accounts[1]});
//		await CryptozCOp273.getBonusBoosters.call({from: accounts[2]});
//		const addressbYlMwm3 = await CryptozCOp273.linkMySponsor.call(addressXWUc9G, {from: accounts[0]});

		await expect(CryptozCOp273.openBoosterCard.call(uintPSMUIjV, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozwbuXd1 = await Cryptoz.new({from: accounts[4]});
//		await CryptozwbuXd1.getBonusBoosters.call({from: accounts[4]});
//		const stringqLOhaPk = await CryptozwbuXd1.symbol.call({from: accounts[4]});

		await expect(CryptozwbuXd1.getBonusBoosters.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptoztzKrn07 = await Cryptoz.new({from: accounts[5]});
		const address08kqEw = "0x0000000000000000000000000000000000000002"
		const uintWWOk7SV = BigInt("1898")
		const stringKy0UcDA = await CryptoztzKrn07.name.call({from: accounts[3]});
		const uint256arrayILxdC6 = await CryptoztzKrn07.tokensOfOwner.call(address08kqEw, {from: accounts[2]});
//		const uint256ruSYLpP = await CryptoztzKrn07.sacrifice.call(uintWWOk7SV, {from: accounts[0]});

		assert.equal(stringKy0UcDA, "Cryptoz Cards")
		assert.equal(uint256arrayILxdC6, BigInt(""))
		await expect(CryptoztzKrn07.sacrifice.call(uintWWOk7SV, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozIV2nnXw = await Cryptoz.new({from: accounts[3]});
		const uintEmbe0An = BigInt("1604")
		const uintQ8r6Ble = BigInt("1085")
		const uintbmOH0G = BigInt("874")
		const addressmycRYeo = accounts[1]
		const stringzeYjP0T = await CryptozIV2nnXw.tokenURI.call(uintEmbe0An, {from: accounts[4]});
//		await CryptozIV2nnXw.getOwnedCard.call(uintQ8r6Ble, {from: accounts[2]});
//		await CryptozIV2nnXw.buyBoosterCardAndOpen.call({from: accounts[2]});
//		const uint3274jCab = await CryptozIV2nnXw.getFreeCard.call(uintbmOH0G, {from: accounts[4]});
//		const addressM8yz7k9 = await CryptozIV2nnXw.initialize.call(addressmycRYeo, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(stringzeYjP0T, "https://cryptoz.cards/data/1604")
		await expect(CryptozIV2nnXw.getOwnedCard.call(uintQ8r6Ble, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozwbuXd1 = await Cryptoz.new({from: accounts[4]});
		const uintmx36rfR = BigInt("771")
		const uintVInbqzH = BigInt("1751")
		const uint3VF187 = BigInt("1437")
		const uintOJowaH = BigInt("1005")
		const uintkNg0RE2 = BigInt("222")
		const uintA3HQpXm = BigInt("26")
		const uintUdQO3wB = BigInt("19")
		const stringexoBbWQ = "c9EMsKqgCLRCUFGqVfWLPaH39GiP"
		const stringa27z0J1 = "uexoDJDqeDOvF7TKEyXqUYN8UIzXtMkLIkza5oHQw7Ezyj7me4tHQudJvqmsFf8FV"
		const uintayx1o2n = BigInt("148")
//		await CryptozwbuXd1.getBonusBoosters.call({from: accounts[4]});
//		const uint32k22jBjt = await CryptozwbuXd1.isValidCard.call(uintmx36rfR, {from: accounts[5]});
//		await CryptozwbuXd1.f.call({from: accounts[0]});
//		const stringqLOhaPk = await CryptozwbuXd1.symbol.call({from: accounts[4]});
//		const boolbNuOmt2 = await CryptozwbuXd1.loadNewCardType.call(uintayx1o2n, stringa27z0J1, stringexoBbWQ, uintUdQO3wB, uintA3HQpXm, uintkNg0RE2, uintOJowaH, uint3VF187, uintVInbqzH, {from: accounts[3]});

		await expect(CryptozwbuXd1.getBonusBoosters.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptoziXQtHJD = await Cryptoz.new({from: accounts[4]});
		const uintbTdHt0B = BigInt("243")
		const uintATpbGjK = BigInt("1851")
		const uintY0dKKcB = BigInt("1612")
		const uintFGjpaY2 = BigInt("20")
		const uintLTx3WoI = BigInt("1752")
		const uintdPklt3U = BigInt("1774")
		const addressQn06uJ = accounts[4]
		const uintoSSNRHT = BigInt("2039")
		const uint256nMtRC3e = await CryptoziXQtHJD.totalSupply.call({from: accounts[3]});
//		const boolEeo7Ik = await CryptoziXQtHJD.addTocardType.call(uintLTx3WoI, uintFGjpaY2, uintY0dKKcB, uintATpbGjK, uintbTdHt0B, {from: accounts[0]});
//		const stringLH196PE = await CryptoziXQtHJD.tokenURI.call(uintdPklt3U, {from: accounts[1]});
//		const uintBtbQ4jJ = await CryptoziXQtHJD.getTimeToDailyBonus.call(addressQn06uJ, {from: accounts[5]});
//		const uint256M7OU934 = await CryptoziXQtHJD.tokenByIndex.call(uintoSSNRHT, {from: accounts[1]});

		assert.equal(uint256nMtRC3e, BigInt("0"))
		await expect(CryptoziXQtHJD.addTocardType.call(uintLTx3WoI, uintFGjpaY2, uintY0dKKcB, uintATpbGjK, uintbTdHt0B, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozwbuXd1 = await Cryptoz.new({from: accounts[4]});
		const addressBgI6Gjl = accounts[1]
//		await CryptozwbuXd1.getBonusBoosters.call({from: accounts[4]});
//		const address56xZeg = await CryptozwbuXd1.linkMySponsor.call(addressBgI6Gjl, {from: accounts[2]});
//		const stringqLOhaPk = await CryptozwbuXd1.symbol.call({from: accounts[4]});
//		await CryptozwbuXd1.getBonusBoosters.call({from: accounts[3]});
//		await CryptozwbuXd1.f.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(CryptozwbuXd1.getBonusBoosters.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptoztzKrn07 = await Cryptoz.new({from: accounts[5]});
		const addressjAHwtlq = "0x0000000000000000000000000000000000000002"
		const addressSq91NVC = accounts[4]
		const uintH54Wod8 = BigInt("536")
		const uint256arrayILxdC6 = await CryptoztzKrn07.tokensOfOwner.call(addressjAHwtlq, {from: accounts[2]});
		const addressPIbJM43 = await CryptoztzKrn07.initialize.call(addressSq91NVC, {from: accounts[5]});
//		const uint256ruSYLpP = await CryptoztzKrn07.sacrifice.call(uintH54Wod8, {from: accounts[0]});

		assert.equal(uint256arrayILxdC6, BigInt(""))
		await expect(CryptoztzKrn07.sacrifice.call(uintH54Wod8, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozwbuXd1 = await Cryptoz.new({from: accounts[4]});
		const uintKDZMui7 = BigInt("600")
		const stringqLOhaPk = await CryptozwbuXd1.symbol.call({from: accounts[4]});
//		const uint256WV7SAdp = await CryptozwbuXd1.tokenByIndex.call(uintKDZMui7, {from: accounts[1]});

		assert.equal(stringqLOhaPk, "Cryptoz")
		await expect(CryptozwbuXd1.tokenByIndex.call(uintKDZMui7, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozwbuXd1 = await Cryptoz.new({from: accounts[4]});
		const uintHNFkxHN = BigInt("1669")
//		await CryptozwbuXd1.getTokensByRarity.call({from: accounts[0]});
//		const uint32vHjdAfx = await CryptozwbuXd1.isValidCard.call(uintHNFkxHN, {from: accounts[2]});
//		const stringqLOhaPk = await CryptozwbuXd1.symbol.call({from: accounts[4]});

		await expect(CryptozwbuXd1.getTokensByRarity.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptoztzKrn07 = await Cryptoz.new({from: accounts[5]});
		const uintofzjRjx = BigInt("594")
		const uintUi0e25p = BigInt("1898")
		const stringKy0UcDA = await CryptoztzKrn07.name.call({from: accounts[3]});
		const uint256V2Mwa6E = await CryptoztzKrn07.totalSupply.call({from: accounts[1]});
//		const booljjYM0X3 = await CryptoztzKrn07.buyBoosterCard.call(uintofzjRjx, {from: accounts[4]});
//		const uint256ruSYLpP = await CryptoztzKrn07.sacrifice.call(uintUi0e25p, {from: accounts[0]});

		assert.equal(stringKy0UcDA, "Cryptoz Cards")
		assert.equal(uint256V2Mwa6E, BigInt("0"))
		await expect(CryptoztzKrn07.buyBoosterCard.call(uintofzjRjx, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozR2KQuht = await Cryptoz.new({from: accounts[0]});
		const uintGp4CT3i = BigInt("745")
		const uintCRJ1gjr = BigInt("1598")
		const uintTOgwv1e = BigInt("1757")
		const uintbl9KLo7 = BigInt("181")
		const uintCsy3Cwc = BigInt("60")
		const uintg9nVMjj = BigInt("228")
		const stringXkv1v87 = "cuY2WjaZcI"
		const stringDkIcWm6 = "OjRfeIQmGEqR4m2xqF0yYe687pg4P58exWfzCeK66sfDBOFsdY7TvyVaAG7uBkJrYP3MTzqBy11m4WGIkplV9zjPJHdNBd"
		const uintp7tuHRy = BigInt("46")
		const uintkgwv3Hk = BigInt("1011")
		const uintH5zwhni = BigInt("1597")
		const addressfcZGawX = accounts[0]
		const boolTPl5mbU = await CryptozR2KQuht.loadNewCardType.call(uintp7tuHRy, stringDkIcWm6, stringXkv1v87, uintg9nVMjj, uintCsy3Cwc, uintbl9KLo7, uintTOgwv1e, uintCRJ1gjr, uintGp4CT3i, {from: accounts[0]});
		const stringHCeLYTS = await CryptozR2KQuht.tokenURI.call(uintkgwv3Hk, {from: accounts[4]});
//		const uint256AlVqZFm = await CryptozR2KQuht.tokenByIndex.call(uintH5zwhni, {from: accounts[2]});
//		const uint256arrayCD97Rno = await CryptozR2KQuht.tokensOfOwner.call(addressfcZGawX, {from: accounts[3]});
//		const stringyld2YSB = await CryptozR2KQuht.symbol.call({from: accounts[4]});

		assert.equal(boolTPl5mbU, true)
		assert.equal(stringHCeLYTS, "https://cryptoz.cards/data/1011")
		await expect(CryptozR2KQuht.tokenByIndex.call(uintH5zwhni, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozD18oAqG = await Cryptoz.new({from: "0x0000000000000000000000000000000000000001"});
		const uintWu0YX6s = BigInt("120")
		const addressNWsJSzA = accounts[5]
		const uintgpEQpTv = BigInt("1739")
		const addressiWWELRl = accounts[5]
		const boolVMfOOe8 = await CryptozD18oAqG.buyCard.call(uintWu0YX6s, {from: accounts[0]});
		const addressqyuRqtv = await CryptozD18oAqG.initialize.call(addressNWsJSzA, {from: accounts[4]});
		const uint256Wv9mG6h = await CryptozD18oAqG.tokenOfOwnerByIndex.call(addressiWWELRl, uintgpEQpTv, {from: accounts[3]});
		const stringyK29S4Q = await CryptozD18oAqG.symbol.call({from: accounts[4]});
	});

	it('test for Cryptoz', async () => {
		const CryptozIIWm3R9 = await Cryptoz.new({from: accounts[1]});
		const uintlkL7TYw = BigInt("1945")
		const addressaogxAAm = accounts[1]
		const stringeJl6ZLz = await CryptozIIWm3R9.name.call({from: accounts[2]});
//		await CryptozIIWm3R9.withdraw.call({from: accounts[1]});
//		const uint256svUpksZ = await CryptozIIWm3R9.tokenOfOwnerByIndex.call(addressaogxAAm, uintlkL7TYw, {from: accounts[4]});

		assert.equal(stringeJl6ZLz, "Cryptoz Cards")
		await expect(CryptozIIWm3R9.withdraw.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozPIVAugX = await Cryptoz.new({from: accounts[3]});
		const uintmw9KbKU = BigInt("210")
		const uinthm8nB7 = BigInt("1103")
		const uintUXt7UI = BigInt("1575")
		const uinte0aco5M = BigInt("932")
		const uintqvr0js = BigInt("1903")
		const uinte0R4QuY = BigInt("1311")
		const addressbFrSJcF = accounts[4]
		const addressOrbWbya = accounts[2]
//		const boolLaNJG3L = await CryptozPIVAugX.addTocardType.call(uintqvr0js, uinte0aco5M, uintUXt7UI, uinthm8nB7, uintmw9KbKU, {from: accounts[3]});
//		await CryptozPIVAugX.f.call({from: accounts[2]});
//		const addressFZ87ue = await CryptozPIVAugX.transferFrom.call(addressOrbWbya, addressbFrSJcF, uinte0R4QuY, {from: accounts[2]});

		await expect(CryptozPIVAugX.addTocardType.call(uintqvr0js, uinte0aco5M, uintUXt7UI, uinthm8nB7, uintmw9KbKU, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})