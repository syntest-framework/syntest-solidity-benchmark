const Cryptoz = artifacts.require("Cryptoz");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Cryptoz', (accounts) => {
	it('test for Cryptoz', async () => {
		const Cryptozxqe7iyO = await Cryptoz.new({from: accounts[0]});
		const uintLt0PuA = BigInt("1015")
		const uintCLpvmmS = BigInt("978")
		const addressiSPz8KL = accounts[3]
		const uintKA2AB9N = BigInt("203")
		const stringwgT0fu6 = await Cryptozxqe7iyO.name.call({from: accounts[4]});
//		const uint32Q1x5XgY = await Cryptozxqe7iyO.getFreeCard.call(uintLt0PuA, {from: accounts[4]});
//		const uint256xZvVoid = await Cryptozxqe7iyO.tokenOfOwnerByIndex.call(addressiSPz8KL, uintCLpvmmS, {from: accounts[5]});
//		const boolLNY6BgJ = await Cryptozxqe7iyO.openBoosterCard.call(uintKA2AB9N, {from: accounts[0]});

		assert.equal(stringwgT0fu6, "Cryptoz Cards")
		await expect(Cryptozxqe7iyO.getFreeCard.call(uintLt0PuA, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const Cryptozwo9hz7S = await Cryptoz.new({from: "0x0000000000000000000000000000000000000001"});
		const uintbLC6xQ1 = BigInt("1593")
		const uintvkMtSLE = BigInt("88")
		const addressE3nybPB = accounts[1]
		const stringh21gaE0 = await Cryptozwo9hz7S.tokenURI.call(uintbLC6xQ1, {from: accounts[4]});
		const uint2565MP0Oz = await Cryptozwo9hz7S.tokenOfOwnerByIndex.call(addressE3nybPB, uintvkMtSLE, {from: accounts[3]});
		await Cryptozwo9hz7S.withdraw.call({from: accounts[0]});
	});

	it('test for Cryptoz', async () => {
		const CryptozjiV3pH = await Cryptoz.new({from: accounts[0]});
		const uintBwbzS35 = BigInt("641")
		const uintrEvKKZ3 = BigInt("665")
		const uintgU8fFG = BigInt("1987")
		const uintR2NQTt = BigInt("1470")
		const uintqu3b5Hs = BigInt("86")
		const uintD2p0JZY = BigInt("243")
		const uintlSht36p = BigInt("106")
		const stringGpcLnHt = "ALBh9tsSULhQU0xVGw9qyWvLDBSb6pncpRbpQ5cXVRtcCxV81lsOuJptmMX9P9boBuoEFKqq7zhWo8dL70g"
		const stringGhWv0eX = "H5UR01Pm68hPPT5UsdZP47Rbz7HbBOmNa0FHFuN7ddeayxidgVytrybDxFmQX4FsJR6ubW"
		const uintSg6Wuhe = BigInt("197")
		const uintPpmuFhW = BigInt("1549")
		const uintgPWaZw = BigInt("1553")
		const addressrs7q6Dg = accounts[0]
		const uintMQmovO8 = BigInt("239")
		const uintffJcs08 = BigInt("1739")
		const uintE75UrsX = BigInt("1325")
		const uintMTUZ0Uz = BigInt("954")
		const uinteTFm1qQ = BigInt("733")
//		const boolSgKv6a1 = await CryptozjiV3pH.openBoosterCard.call(uintBwbzS35, {from: accounts[4]});
//		const boolshRvBep = await CryptozjiV3pH.loadNewCardType.call(uintSg6Wuhe, stringGhWv0eX, stringGpcLnHt, uintlSht36p, uintD2p0JZY, uintqu3b5Hs, uintR2NQTt, uintgU8fFG, uintrEvKKZ3, {from: accounts[1]});
//		const boolfLm5BWr = await CryptozjiV3pH.buyBoosterCard.call(uintPpmuFhW, {from: accounts[5]});
//		const uint256Kpm1buu = await CryptozjiV3pH.tokenOfOwnerByIndex.call(addressrs7q6Dg, uintgPWaZw, {from: accounts[3]});
//		const boolVRkkCB8 = await CryptozjiV3pH.addTocardType.call(uinteTFm1qQ, uintMTUZ0Uz, uintE75UrsX, uintffJcs08, uintMQmovO8, {from: accounts[2]});

		await expect(CryptozjiV3pH.openBoosterCard.call(uintBwbzS35, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozLDDXoTN = await Cryptoz.new({from: accounts[4]});
		const uintLYEDP69 = BigInt("1706")
		const addressJX1sN4g = accounts[5]
		const addressH9ln9SK = accounts[2]
		const addresspIocXqg = accounts[4]
		const uintFAAzQoz = BigInt("1211")
		const addressMoNXUmp = accounts[4]
		const addressPRyXyoU = accounts[1]
//		const uint256uW4ErrZ = await CryptozLDDXoTN.tokenOfOwnerByIndex.call(addressJX1sN4g, uintLYEDP69, {from: accounts[5]});
//		const uintr088hHh = await CryptozLDDXoTN.getTimeToDailyBonus.call(addressH9ln9SK, {from: accounts[1]});
//		const uintdJAFzN = await CryptozLDDXoTN.getTimeToDailyBonus.call(addresspIocXqg, {from: accounts[3]});
//		const addressTfFRJWp = await CryptozLDDXoTN.transferFrom.call(addressPRyXyoU, addressMoNXUmp, uintFAAzQoz, {from: accounts[1]});

		await expect(CryptozLDDXoTN.tokenOfOwnerByIndex.call(addressJX1sN4g, uintLYEDP69, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozbocbAXA = await Cryptoz.new({from: accounts[3]});
		const uintMDjNjnh = BigInt("1801")
		const addressPKfe2J7 = accounts[1]
		const stringO6lrPnq = await CryptozbocbAXA.tokenURI.call(uintMDjNjnh, {from: accounts[0]});
//		const addressmSd2f4f = await CryptozbocbAXA.initialize.call(addressPKfe2J7, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(stringO6lrPnq, "https://cryptoz.cards/data/1801")
		await expect(CryptozbocbAXA.initialize.call(addressPKfe2J7, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptoziiJYZfN = await Cryptoz.new({from: accounts[1]});
		const addressaILU7gU = accounts[4]
		const uintXBtfy6C = BigInt("1191")
//		const addressDdUvMYD = await CryptoziiJYZfN.linkMySponsor.call(addressaILU7gU, {from: accounts[3]});
//		await CryptoziiJYZfN.getTokensByRarity.call({from: accounts[4]});
//		const uint256PFhAb11 = await CryptoziiJYZfN.sacrifice.call(uintXBtfy6C, {from: accounts[4]});

		await expect(CryptoziiJYZfN.linkMySponsor.call(addressaILU7gU, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozA2sdv7k = await Cryptoz.new({from: accounts[3]});
		const uintdoxSylF = BigInt("391")
		const uintpvYBcVv = BigInt("375")
//		await CryptozA2sdv7k.getTokensByRarity.call({from: accounts[0]});
//		await CryptozA2sdv7k.getOwnedCard.call(uintdoxSylF, {from: accounts[4]});
//		const boolQBdr0Xm = await CryptozA2sdv7k.buyCard.call(uintpvYBcVv, {from: accounts[5]});
//		const stringBmoQtH = await CryptozA2sdv7k.symbol.call({from: accounts[1]});

		await expect(CryptozA2sdv7k.getTokensByRarity.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozWUjTndp = await Cryptoz.new({from: accounts[0]});
		const uintzt6oWjt = BigInt("333")
		const addressOxrDFFc = accounts[1]
		const uintAC31QEB = BigInt("1348")
//		const uint32B8trp0D = await CryptozWUjTndp.isValidCard.call(uintzt6oWjt, {from: accounts[4]});
//		const uint256arrayU2Zl4gj = await CryptozWUjTndp.tokensOfOwner.call(addressOxrDFFc, {from: accounts[2]});
//		const boolLMGY8WY = await CryptozWUjTndp.openBoosterCard.call(uintAC31QEB, {from: accounts[1]});
//		const stringAfid8vJ = await CryptozWUjTndp.name.call({from: accounts[3]});

		await expect(CryptozWUjTndp.isValidCard.call(uintzt6oWjt, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozjiV3pH = await Cryptoz.new({from: accounts[0]});
		const uintiAo8J2 = BigInt("859")
		const uintbcn9iUI = BigInt("667")
		const addressBZ2joC = accounts[4]
		const uintTjZ2Swn = BigInt("665")
		const uintcOWVXpN = BigInt("1987")
		const uinte8GNGN9 = BigInt("1470")
		const uintVFTBZ3b = BigInt("86")
		const uintdQBllep = BigInt("243")
		const uintpArbMAB = BigInt("106")
		const stringGpcLnHt = "ALBh9tsSULhQU0xVGw9qyWvLDBSb6pncpRbpQ5cXVRtcCxV81lsOuJptmMX9P9boBuoEFKqq7zhWo8dL70g"
		const stringGhWv0eX = "H5UR01Pm68hPPT5UsdZP47Rbz7HbBOmNa0FHFuN7ddeayxidgVytrybDxFmQX4FsJR6ubW"
		const uintIdnuYE = BigInt("197")
		const uintMfME7RJ = BigInt("1549")
		const uinttfGnLlC = BigInt("1553")
		const addressc2prQOB = accounts[0]
		const uintsp2IuUR = BigInt("239")
		const uintWU35jaE = BigInt("1739")
		const uintqmmkjRO = BigInt("1325")
		const uintWl7NfYm = BigInt("954")
		const uintBZnF42T = BigInt("733")
//		const uint256RNpp1B6 = await CryptozjiV3pH.sacrifice.call(uintiAo8J2, {from: accounts[0]});
//		const boolSgKv6a1 = await CryptozjiV3pH.openBoosterCard.call(uintbcn9iUI, {from: accounts[4]});
//		const uint256arrayLPkJ9Ex = await CryptozjiV3pH.tokensOfOwner.call(addressBZ2joC, {from: accounts[0]});
//		const boolshRvBep = await CryptozjiV3pH.loadNewCardType.call(uintIdnuYE, stringGhWv0eX, stringGpcLnHt, uintpArbMAB, uintdQBllep, uintVFTBZ3b, uinte8GNGN9, uintcOWVXpN, uintTjZ2Swn, {from: accounts[1]});
//		const boolfLm5BWr = await CryptozjiV3pH.buyBoosterCard.call(uintMfME7RJ, {from: accounts[5]});
//		const uint256Kpm1buu = await CryptozjiV3pH.tokenOfOwnerByIndex.call(addressc2prQOB, uinttfGnLlC, {from: accounts[3]});
//		const boolVRkkCB8 = await CryptozjiV3pH.addTocardType.call(uintBZnF42T, uintWl7NfYm, uintqmmkjRO, uintWU35jaE, uintsp2IuUR, {from: accounts[2]});

		await expect(CryptozjiV3pH.sacrifice.call(uintiAo8J2, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozbocbAXA = await Cryptoz.new({from: accounts[3]});
		const uintg9SzLX = BigInt("1421")
		const uintVo1Gnb = BigInt("36")
		const addressXN4iqg = accounts[1]
//		await CryptozbocbAXA.getBonusBoosters.call({from: accounts[0]});
//		const stringO6lrPnq = await CryptozbocbAXA.tokenURI.call(uintg9SzLX, {from: accounts[0]});
//		const booltE6TnNq = await CryptozbocbAXA.buyBoosterCard.call(uintVo1Gnb, {from: accounts[0]});
//		const addressmSd2f4f = await CryptozbocbAXA.initialize.call(addressXN4iqg, {from: "0x0000000000000000000000000000000000000001"});

		await expect(CryptozbocbAXA.getBonusBoosters.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozbocbAXA = await Cryptoz.new({from: accounts[3]});
		const uint256NitswFf = await CryptozbocbAXA.totalSupply.call({from: accounts[4]});
//		await CryptozbocbAXA.getBonusBoosters.call({from: accounts[1]});

		assert.equal(uint256NitswFf, BigInt("0"))
		await expect(CryptozbocbAXA.getBonusBoosters.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozbocbAXA = await Cryptoz.new({from: accounts[3]});
		const uintgodYyQb = BigInt("362")
		const addressg2DZ7m = accounts[5]
		const addresszkCeTpY = "0x0000000000000000000000000000000000000001"
		const addressw1YJ0GH = accounts[3]
//		const addresseYtLjL2 = await CryptozbocbAXA.transferFrom.call(addresszkCeTpY, addressg2DZ7m, uintgodYyQb, {from: accounts[4]});
//		const addressmSd2f4f = await CryptozbocbAXA.initialize.call(addressw1YJ0GH, {from: "0x0000000000000000000000000000000000000001"});

		await expect(CryptozbocbAXA.transferFrom.call(addresszkCeTpY, addressg2DZ7m, uintgodYyQb, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozbocbAXA = await Cryptoz.new({from: accounts[3]});
		const uintOrNgO5V = BigInt("668")
		const addressLZTvBZw = accounts[2]
		const addressRvMwBAH = accounts[3]
		const uintHyVinP = BigInt("1614")
//		await CryptozbocbAXA.getBonusBoosters.call({from: accounts[1]});
//		const stringaQL5CQM = await CryptozbocbAXA.tokenURI.call(uintOrNgO5V, {from: accounts[2]});
//		const uint256arrayIHb1B3L = await CryptozbocbAXA.tokensOfOwner.call(addressLZTvBZw, {from: accounts[3]});
//		const addressmSd2f4f = await CryptozbocbAXA.initialize.call(addressRvMwBAH, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256u3z3yKl = await CryptozbocbAXA.sacrifice.call(uintHyVinP, {from: accounts[0]});

		await expect(CryptozbocbAXA.getBonusBoosters.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozbocbAXA = await Cryptoz.new({from: accounts[3]});
		const uintj6KpjI = BigInt("1472")
		const addressLHoEU2V = accounts[3]
//		const uint256vPY7DP = await CryptozbocbAXA.tokenByIndex.call(uintj6KpjI, {from: accounts[3]});
//		const addressmSd2f4f = await CryptozbocbAXA.initialize.call(addressLHoEU2V, {from: "0x0000000000000000000000000000000000000001"});

		await expect(CryptozbocbAXA.tokenByIndex.call(uintj6KpjI, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozffpYOM9 = await Cryptoz.new({from: accounts[2]});
		const uintFLtILpD = BigInt("335")
		const uintvJ6fmYs = BigInt("1862")
		const uintvxys8H7 = BigInt("1580")
		const uint92iZNd = BigInt("1154")
		const addressvDtV7QX = accounts[0]
		const addresslPLhtff = accounts[2]
		const stringWNbPiU = await CryptozffpYOM9.tokenURI.call(uintFLtILpD, {from: accounts[2]});
		const stringnZG0Xer = await CryptozffpYOM9.symbol.call({from: accounts[3]});
//		const boolDEvOQEP = await CryptozffpYOM9.buyCard.call(uintvJ6fmYs, {from: accounts[4]});
//		const uint32TIFMaLn = await CryptozffpYOM9.getFreeCard.call(uintvxys8H7, {from: accounts[2]});
//		const addressM6LXUKQ = await CryptozffpYOM9.transferFrom.call(addresslPLhtff, addressvDtV7QX, uint92iZNd, {from: accounts[1]});

		assert.equal(stringWNbPiU, "https://cryptoz.cards/data/335")
		assert.equal(stringnZG0Xer, "Cryptoz")
		await expect(CryptozffpYOM9.buyCard.call(uintvJ6fmYs, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozbocbAXA = await Cryptoz.new({from: accounts[3]});
//		await CryptozbocbAXA.getBonusBoosters.call({from: accounts[1]});
//		await CryptozbocbAXA.f.call({from: accounts[3]});

		await expect(CryptozbocbAXA.getBonusBoosters.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozbocbAXA = await Cryptoz.new({from: accounts[3]});
		const uint9mGBf6 = BigInt("215")
		const uintoCxXx7 = BigInt("22")
		const uintG9zLv6J = BigInt("1490")
		const uintyjp3zt = BigInt("1551")
		const uintjwQOMbv = BigInt("85")
		const uintMajSGoD = BigInt("1082")
		const uintpqgbu5h = BigInt("1237")
		const uintrrXJ4gT = BigInt("1483")
		const uintQsdL1IR = BigInt("122")
		const uintGsjxkC6 = BigInt("86")
		const uintoPWTqGp = BigInt("7")
		const stringw8I8tmh = "eQYsKRSgjN7mzWXGdY90ep7qWCkFDrRUane0UFOMfLL5n6TkFrS7dR8rNVhls5OGL5VuSfaBIcxO3caE"
		const string7ysUnv = "xoBCkdDjdAYanteP3ZZVyOI8QEQfRcM3EeM9s5BKPkhg9zzto6ASTKfYzXa5qr"
		const uintm52p4Po = BigInt("160")
//		const boolZAAMUt0 = await CryptozbocbAXA.addTocardType.call(uintjwQOMbv, uintyjp3zt, uintG9zLv6J, uintoCxXx7, uint9mGBf6, {from: accounts[3]});
//		const booleSDcdJO = await CryptozbocbAXA.loadNewCardType.call(uintm52p4Po, string7ysUnv, stringw8I8tmh, uintoPWTqGp, uintGsjxkC6, uintQsdL1IR, uintrrXJ4gT, uintpqgbu5h, uintMajSGoD, {from: accounts[3]});
//		await CryptozbocbAXA.getBonusBoosters.call({from: accounts[1]});

		await expect(CryptozbocbAXA.addTocardType.call(uintjwQOMbv, uintyjp3zt, uintG9zLv6J, uintoCxXx7, uint9mGBf6, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozjiV3pH = await Cryptoz.new({from: accounts[0]});
		const uintZNdNkrE = BigInt("671")
//		await CryptozjiV3pH.buyBoosterCardAndOpen.call({from: accounts[0]});
//		const boolSgKv6a1 = await CryptozjiV3pH.openBoosterCard.call(uintZNdNkrE, {from: accounts[4]});

		await expect(CryptozjiV3pH.buyBoosterCardAndOpen.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozjiV3pH = await Cryptoz.new({from: accounts[0]});
		const uintY1OuYl0 = BigInt("1406")
		const uintioXDiLT = BigInt("1216")
		const uint2o4ZeE = BigInt("1848")
		const uintGwAZHQs = BigInt("146")
		const uintASEucIu = BigInt("30")
		const uintclEIvjP = BigInt("112")
		const stringevaRGfd = "QCplFoyEVyYlkRBEKrnrMfRtbncyJykNNG5FmV5mWi3tz2uRDaxEyekkkujmwF1spo7fURRMIYAJS9asQlXEYDvgqzm7d"
		const stringr3VlIFK = "nX88mAvTo55o9o5Y0eAxXshELCHo"
		const uintpD2fhAE = BigInt("145")
		const uinteSN2kv = BigInt("375")
		const uintvc6YsSt = BigInt("671")
		const boolEJ7WtTF = await CryptozjiV3pH.loadNewCardType.call(uintpD2fhAE, stringr3VlIFK, stringevaRGfd, uintclEIvjP, uintASEucIu, uintGwAZHQs, uint2o4ZeE, uintioXDiLT, uintY1OuYl0, {from: accounts[0]});
//		const boolNUCP39u = await CryptozjiV3pH.buyCard.call(uinteSN2kv, {from: "0x0000000000000000000000000000000000000001"});
//		const boolSgKv6a1 = await CryptozjiV3pH.openBoosterCard.call(uintvc6YsSt, {from: accounts[4]});

		assert.equal(boolEJ7WtTF, true)
		await expect(CryptozjiV3pH.buyCard.call(uinteSN2kv, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozbocbAXA = await Cryptoz.new({from: accounts[3]});
		const uintUg2ACqD = BigInt("685")
		const addresswTqMdbK = "0x0000000000000000000000000000000000000001"
		const uintpk6XA7z = BigInt("1268")
//		await CryptozbocbAXA.withdraw.call({from: accounts[3]});
//		const uint256DGpvWA = await CryptozbocbAXA.tokenOfOwnerByIndex.call(addresswTqMdbK, uintUg2ACqD, {from: accounts[2]});
//		await CryptozbocbAXA.withdraw.call({from: accounts[4]});
//		await CryptozbocbAXA.getBonusBoosters.call({from: accounts[1]});
//		await CryptozbocbAXA.getOwnedCard.call(uintpk6XA7z, {from: accounts[2]});

		await expect(CryptozbocbAXA.withdraw.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozbocbAXA = await Cryptoz.new({from: accounts[3]});
		const uintR8mfKq = BigInt("685")
		const addressSEvfdmi = "0x0000000000000000000000000000000000000000"
		const uintCH26U2t = BigInt("1268")
//		await CryptozbocbAXA.withdraw.call({from: accounts[3]});
//		const uint256DGpvWA = await CryptozbocbAXA.tokenOfOwnerByIndex.call(addressSEvfdmi, uintR8mfKq, {from: accounts[2]});
//		await CryptozbocbAXA.buyBoosterCardAndOpen.call({from: accounts[4]});
//		await CryptozbocbAXA.getOwnedCard.call(uintCH26U2t, {from: accounts[2]});

		await expect(CryptozbocbAXA.withdraw.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozbocbAXA = await Cryptoz.new({from: accounts[3]});
		const addresswKtEnEd = accounts[0]
		const uintz9FTz7W = BigInt("695")
		const addressc39ewKM = "0x0000000000000000000000000000000000000001"
		const uintI2CkPDb = BigInt("1268")
		const addressxmgY5xy = await CryptozbocbAXA.initialize.call(addresswKtEnEd, {from: accounts[3]});
//		const uint256DGpvWA = await CryptozbocbAXA.tokenOfOwnerByIndex.call(addressc39ewKM, uintz9FTz7W, {from: accounts[2]});
//		await CryptozbocbAXA.getOwnedCard.call(uintI2CkPDb, {from: accounts[2]});

		await expect(CryptozbocbAXA.tokenOfOwnerByIndex.call(addressc39ewKM, uintz9FTz7W, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})