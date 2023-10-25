const Cryptoz = artifacts.require("Cryptoz");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Cryptoz', (accounts) => {
	it('test for Cryptoz', async () => {
		const CryptozdsUSEGg = await Cryptoz.new({from: accounts[5]});
		const uinttBbUeFn = BigInt("1749")
		const addressGFqj7vi = accounts[5]
		const addressQDFFLM = accounts[1]
//		const uint256ZpjGkTO = await CryptozdsUSEGg.tokenOfOwnerByIndex.call(addressGFqj7vi, uinttBbUeFn, {from: accounts[4]});
//		const stringcyhy6a = await CryptozdsUSEGg.symbol.call({from: accounts[2]});
//		await CryptozdsUSEGg.buyBoosterCardAndOpen.call({from: accounts[1]});
//		const uint256arrayEUyk2a4 = await CryptozdsUSEGg.tokensOfOwner.call(addressQDFFLM, {from: accounts[1]});

		await expect(CryptozdsUSEGg.tokenOfOwnerByIndex.call(addressGFqj7vi, uinttBbUeFn, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozVU0XjLO = await Cryptoz.new({from: accounts[3]});
		const uintUKnGKRE = BigInt("1363")
		const uintHqgHBoL = BigInt("1277")
//		await CryptozVU0XjLO.getTokensByRarity.call({from: accounts[2]});
//		const stringQibEdU = await CryptozVU0XjLO.tokenURI.call(uintUKnGKRE, {from: accounts[3]});
//		const stringME55k6v = await CryptozVU0XjLO.tokenURI.call(uintHqgHBoL, {from: accounts[1]});
//		await CryptozVU0XjLO.f.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(CryptozVU0XjLO.getTokensByRarity.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozfQtH72C = await Cryptoz.new({from: accounts[2]});
		const uintQg68svd = BigInt("1881")
		const stringnry4Kpg = await CryptozfQtH72C.symbol.call({from: accounts[2]});
//		await CryptozfQtH72C.getBonusBoosters.call({from: accounts[3]});
//		const boolSNIKt2M = await CryptozfQtH72C.openBoosterCard.call(uintQg68svd, {from: accounts[0]});
//		await CryptozfQtH72C.getTokensByRarity.call({from: accounts[0]});

		assert.equal(stringnry4Kpg, "Cryptoz")
		await expect(CryptozfQtH72C.getBonusBoosters.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const Cryptozb0wZYqI = await Cryptoz.new({from: "0x0000000000000000000000000000000000000001"});
		const uintnxMlgBE = BigInt("1578")
		const uintpcr5kVf = BigInt("1338")
		const addressNo7KN2n = accounts[1]
		const addresslmzQpIH = accounts[2]
		const uintxLs6ZAG = BigInt("1884")
		const string3Ra6rC = await Cryptozb0wZYqI.tokenURI.call(uintnxMlgBE, {from: accounts[3]});
		const uint256DvT3FzK = await Cryptozb0wZYqI.tokenOfOwnerByIndex.call(addressNo7KN2n, uintpcr5kVf, {from: accounts[3]});
		const address2DsnPL = await Cryptozb0wZYqI.linkMySponsor.call(addresslmzQpIH, {from: accounts[1]});
		const uint32vBBbCO8 = await Cryptozb0wZYqI.isValidCard.call(uintxLs6ZAG, {from: accounts[2]});
	});

	it('test for Cryptoz', async () => {
		const CryptozNBiZr9T = await Cryptoz.new({from: accounts[3]});
		const uintu5HGyI6 = BigInt("1825")
		const addressLWUVrTJ = accounts[2]
//		const uint32fAggsL1 = await CryptozNBiZr9T.isValidCard.call(uintu5HGyI6, {from: accounts[2]});
//		const uint256arrayNkXys58 = await CryptozNBiZr9T.tokensOfOwner.call(addressLWUVrTJ, {from: accounts[0]});
//		const stringhXbHmDz = await CryptozNBiZr9T.symbol.call({from: accounts[0]});

		await expect(CryptozNBiZr9T.isValidCard.call(uintu5HGyI6, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozxEEiIi2 = await Cryptoz.new({from: accounts[0]});
		const uintZJtiXUB = BigInt("56")
		const uintg4H1lyw = BigInt("383")
		const stringohUMCBl = await CryptozxEEiIi2.name.call({from: accounts[0]});
//		await CryptozxEEiIi2.getTokensByRarity.call({from: accounts[2]});
//		await CryptozxEEiIi2.getOwnedCard.call(uintZJtiXUB, {from: accounts[2]});
//		await CryptozxEEiIi2.getOwnedCard.call(uintg4H1lyw, {from: "0x0000000000000000000000000000000000000001"});
//		await CryptozxEEiIi2.withdraw.call({from: accounts[4]});

		assert.equal(stringohUMCBl, "Cryptoz Cards")
		await expect(CryptozxEEiIi2.getTokensByRarity.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozZ6ho3rZ = await Cryptoz.new({from: accounts[2]});
		const uintvd4p1qt = BigInt("721")
		const addressUoR9nOV = "0x0000000000000000000000000000000000000001"
		const uintgvRFCyp = BigInt("1134")
		const uintrQW7vIv = BigInt("135")
//		await CryptozZ6ho3rZ.getTokensByRarity.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256dyJjd3J = await CryptozZ6ho3rZ.tokenByIndex.call(uintvd4p1qt, {from: accounts[5]});
//		const addressQ4cJgFg = await CryptozZ6ho3rZ.initialize.call(addressUoR9nOV, {from: accounts[3]});
//		const string520aRC = await CryptozZ6ho3rZ.tokenURI.call(uintgvRFCyp, {from: accounts[2]});
//		const boolGAjPyaT = await CryptozZ6ho3rZ.openBoosterCard.call(uintrQW7vIv, {from: accounts[4]});

		await expect(CryptozZ6ho3rZ.getTokensByRarity.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozyL7FfJ4 = await Cryptoz.new({from: accounts[4]});
		const addressAonXOtM = accounts[1]
		const addressXpEa5aw = accounts[3]
		const uintBsuDRm = BigInt("75")
		const uintnheheb = BigInt("951")
		const uintDmc7sXR = BigInt("391")
		const uintZS80tM0 = BigInt("1649")
		const uint1fzcWk = BigInt("1572")
		const uinthRm8q0 = BigInt("997")
		const uintzfbzbo = BigInt("883")
		const uintdL6qOB5 = BigInt("493")
		const uintHFr0Za6 = BigInt("96")
		const uintYJiFgUf = BigInt("189")
		const uintgYAEkDG = BigInt("235")
		const stringTsXtS52 = "sUluh1to3ipPnt9jCcUT4FK9BeaDA9OgQScx3rNfIvAnXPgDDp9tPT2fgtwUwBMIAwcqveooH"
		const stringJr6fHU = "ImRSGWMJanynS3ilu1kfEPC33Fym2qGJBLmHz2Cfi8etvIFX4F"
		const uintOfJI329 = BigInt("92")
//		const addressocRwCOd = await CryptozyL7FfJ4.initialize.call(addressAonXOtM, {from: "0x0000000000000000000000000000000000000001"});
//		await CryptozyL7FfJ4.f.call({from: "0x0000000000000000000000000000000000000001"});
//		const uintgfN4TVU = await CryptozyL7FfJ4.getTimeToDailyBonus.call(addressXpEa5aw, {from: accounts[3]});
//		const boolMgj2awR = await CryptozyL7FfJ4.addTocardType.call(uint1fzcWk, uintZS80tM0, uintDmc7sXR, uintnheheb, uintBsuDRm, {from: accounts[3]});
//		await CryptozyL7FfJ4.buyBoosterCardAndOpen.call({from: accounts[2]});
//		const boolxMB4y0Q = await CryptozyL7FfJ4.loadNewCardType.call(uintOfJI329, stringJr6fHU, stringTsXtS52, uintgYAEkDG, uintYJiFgUf, uintHFr0Za6, uintdL6qOB5, uintzfbzbo, uinthRm8q0, {from: accounts[0]});

		await expect(CryptozyL7FfJ4.initialize.call(addressAonXOtM, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozfQtH72C = await Cryptoz.new({from: accounts[2]});
		const uintxTSG98O = BigInt("2016")
		const uintfvBuL16 = BigInt("304")
		const uintc42PQK0 = BigInt("1881")
		const stringnry4Kpg = await CryptozfQtH72C.symbol.call({from: accounts[2]});
//		await CryptozfQtH72C.getBonusBoosters.call({from: accounts[3]});
//		const boolgAHoqnV = await CryptozfQtH72C.buyBoosterCard.call(uintxTSG98O, {from: accounts[2]});
//		const boolzU3erR = await CryptozfQtH72C.buyCard.call(uintfvBuL16, {from: accounts[4]});
//		const boolSNIKt2M = await CryptozfQtH72C.openBoosterCard.call(uintc42PQK0, {from: accounts[0]});

		assert.equal(stringnry4Kpg, "Cryptoz")
		await expect(CryptozfQtH72C.getBonusBoosters.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozZ6ho3rZ = await Cryptoz.new({from: accounts[2]});
		const uintVryZYT = BigInt("696")
		const addressgibLkIS = "0x0000000000000000000000000000000000000001"
		const uintyiWVUA5 = BigInt("1141")
		const uintwm4WAA7 = BigInt("135")
//		await CryptozZ6ho3rZ.getTokensByRarity.call({from: "0x0000000000000000000000000000000000000001"});
//		await CryptozZ6ho3rZ.getTokensByRarity.call({from: accounts[1]});
//		const uint256mDtCKx = await CryptozZ6ho3rZ.sacrifice.call(uintVryZYT, {from: accounts[4]});
//		const addressQ4cJgFg = await CryptozZ6ho3rZ.initialize.call(addressgibLkIS, {from: accounts[3]});
//		const string520aRC = await CryptozZ6ho3rZ.tokenURI.call(uintyiWVUA5, {from: accounts[2]});
//		const boolGAjPyaT = await CryptozZ6ho3rZ.openBoosterCard.call(uintwm4WAA7, {from: accounts[4]});

		await expect(CryptozZ6ho3rZ.getTokensByRarity.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozaBsIbux = await Cryptoz.new({from: accounts[0]});
		const uintQ9PjfEr = BigInt("1004")
		const addressNHgMP9V = accounts[4]
		const addressspoHxC = "0x0000000000000000000000000000000000000001"
		const uinty622xdS = BigInt("1900")
		const addressQJVib4G = accounts[2]
		const uintGBKZ03v = BigInt("955")
		const addressTlHGZkC = accounts[4]
		const addressW8zp7gH = "0x0000000000000000000000000000000000000001"
		const uinteBINB7E = BigInt("1368")
		const addresshQwJbFE = accounts[5]
//		const addressmJe9WAG = await CryptozaBsIbux.transferFrom.call(addressspoHxC, addressNHgMP9V, uintQ9PjfEr, {from: accounts[3]});
//		const uint256HHtFu9 = await CryptozaBsIbux.tokenOfOwnerByIndex.call(addressQJVib4G, uinty622xdS, {from: accounts[2]});
//		const addressNyth11r = await CryptozaBsIbux.transferFrom.call(addressW8zp7gH, addressTlHGZkC, uintGBKZ03v, {from: accounts[4]});
//		const uint256GVgvtIO = await CryptozaBsIbux.tokenOfOwnerByIndex.call(addresshQwJbFE, uinteBINB7E, {from: accounts[5]});

		await expect(CryptozaBsIbux.transferFrom.call(addressspoHxC, addressNHgMP9V, uintQ9PjfEr, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozfQtH72C = await Cryptoz.new({from: accounts[2]});
		const uintvHBSDvF = BigInt("45")
		const addressKnUDwu0 = accounts[5]
		const addressfuHCxj5 = accounts[4]
		const uintVARj4iT = BigInt("1209")
		const uintKBBPT6y = BigInt("1661")
		const uint3MmEvJ = BigInt("1881")
//		await CryptozfQtH72C.buyBoosterCardAndOpen.call({from: accounts[2]});
//		const stringnry4Kpg = await CryptozfQtH72C.symbol.call({from: accounts[2]});
//		const addressFceqXPe = await CryptozfQtH72C.transferFrom.call(addressfuHCxj5, addressKnUDwu0, uintvHBSDvF, {from: accounts[2]});
//		await CryptozfQtH72C.getBonusBoosters.call({from: accounts[3]});
//		const string5CaCqB = await CryptozfQtH72C.tokenURI.call(uintVARj4iT, {from: accounts[1]});
//		const uint256QFYcWT = await CryptozfQtH72C.sacrifice.call(uintKBBPT6y, {from: "0x0000000000000000000000000000000000000001"});
//		const boolSNIKt2M = await CryptozfQtH72C.openBoosterCard.call(uint3MmEvJ, {from: accounts[0]});

		await expect(CryptozfQtH72C.buyBoosterCardAndOpen.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozcXFiRAq = await Cryptoz.new({from: accounts[1]});
		const addressuqGwoJp = accounts[2]
		const addressAGSdoBG = accounts[2]
		const uintVOdbxjo = BigInt("101")
		const addresswAKSOu = "0x0000000000000000000000000000000000000001"
		const address5nVTPk = accounts[4]
		const uintV8ANhJX = BigInt("1407")
		const uint256arrayWOFOaL5 = await CryptozcXFiRAq.tokensOfOwner.call(addressuqGwoJp, {from: accounts[2]});
		const stringAlvrVel = await CryptozcXFiRAq.symbol.call({from: accounts[3]});
//		const addressq2amsBN = await CryptozcXFiRAq.linkMySponsor.call(addressAGSdoBG, {from: accounts[1]});
//		const addressWNemAif = await CryptozcXFiRAq.transferFrom.call(address5nVTPk, addresswAKSOu, uintVOdbxjo, {from: accounts[2]});
//		const boolXdW9Mtl = await CryptozcXFiRAq.buyCard.call(uintV8ANhJX, {from: accounts[0]});

		assert.equal(stringAlvrVel, "Cryptoz")
		assert.equal(uint256arrayWOFOaL5, BigInt(""))
		await expect(CryptozcXFiRAq.linkMySponsor.call(addressAGSdoBG, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozR7rsxnc = await Cryptoz.new({from: accounts[3]});
		const uintXf6izpC = BigInt("55")
		const uintwRLfl2h = BigInt("237")
		const uinttitEaY = BigInt("230")
		const uintXAw0zIz = BigInt("786")
		const uintxCwjVqb = BigInt("1424")
		const uintTkI3E5 = BigInt("522")
		const addressHP3WDPS = accounts[1]
//		const boolrzMA3nS = await CryptozR7rsxnc.addTocardType.call(uintxCwjVqb, uintXAw0zIz, uinttitEaY, uintwRLfl2h, uintXf6izpC, {from: accounts[3]});
//		const uint32nyqdt2r = await CryptozR7rsxnc.getFreeCard.call(uintTkI3E5, {from: accounts[2]});
//		const uintdNGKnID = await CryptozR7rsxnc.getTimeToDailyBonus.call(addressHP3WDPS, {from: accounts[0]});

		await expect(CryptozR7rsxnc.addTocardType.call(uintxCwjVqb, uintXAw0zIz, uinttitEaY, uintwRLfl2h, uintXf6izpC, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozV3CAgHa = await Cryptoz.new({from: accounts[0]});
		const addressmkR8cwW = "0x0000000000000000000000000000000000000001"
		const uinta0HT2HS = BigInt("1710")
		const addressZLn83lw = accounts[4]
		const addressIxHMKz4 = accounts[3]
		const addressbxHBcdg = await CryptozV3CAgHa.initialize.call(addressmkR8cwW, {from: accounts[0]});
//		const addressUEtF3JX = await CryptozV3CAgHa.transferFrom.call(addressIxHMKz4, addressZLn83lw, uinta0HT2HS, {from: accounts[2]});

		await expect(CryptozV3CAgHa.transferFrom.call(addressIxHMKz4, addressZLn83lw, uinta0HT2HS, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozmRPFnfd = await Cryptoz.new({from: accounts[4]});
		const uintXdgTfS5 = BigInt("2008")
		const uintZVNtJ6n = BigInt("1974")
		const uintnacGbUi = BigInt("1490")
//		await CryptozmRPFnfd.withdraw.call({from: accounts[4]});
//		const boolRp8Npis = await CryptozmRPFnfd.buyCard.call(uintXdgTfS5, {from: accounts[4]});
//		const uint32A7aLwyQ = await CryptozmRPFnfd.isValidCard.call(uintZVNtJ6n, {from: accounts[4]});
//		const uint256WdE4HHN = await CryptozmRPFnfd.tokenByIndex.call(uintnacGbUi, {from: accounts[4]});

		await expect(CryptozmRPFnfd.withdraw.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});
})