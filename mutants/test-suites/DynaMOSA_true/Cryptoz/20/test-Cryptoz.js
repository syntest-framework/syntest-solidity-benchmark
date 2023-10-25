const Cryptoz = artifacts.require("Cryptoz");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Cryptoz', (accounts) => {
	it('test for Cryptoz', async () => {
		const CryptozjDjxQTR = await Cryptoz.new({from: accounts[2]});
		const uintwkOJ7eK = BigInt("387")
		const uintM8cODYv = BigInt("1529")
		const addressjF4jmsT = accounts[4]
//		const uint256ocdCyO1 = await CryptozjDjxQTR.tokenByIndex.call(uintwkOJ7eK, {from: accounts[4]});
//		await CryptozjDjxQTR.getBonusBoosters.call({from: accounts[1]});
//		await CryptozjDjxQTR.getOwnedCard.call(uintM8cODYv, {from: accounts[4]});
//		const uintxko6G4l = await CryptozjDjxQTR.getTimeToDailyBonus.call(addressjF4jmsT, {from: accounts[2]});
//		await CryptozjDjxQTR.getTokensByRarity.call({from: accounts[1]});

		await expect(CryptozjDjxQTR.tokenByIndex.call(uintwkOJ7eK, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozYhVVLag = await Cryptoz.new({from: accounts[2]});
		const uintA5TvNlG = BigInt("942")
		const addressS8zclMR = accounts[5]
		const addressNIdgtw = accounts[1]
		const addressSawX2j1 = accounts[2]
		const addresslvoxpJ6 = accounts[4]
		const uintp16wk6o = BigInt("1069")
		const address0pOlOS = accounts[5]
		const uintYlDjO60 = BigInt("246")
		const uintx9b6LlZ = BigInt("1799")
		const uintWlNickL = BigInt("116")
		const uintFF0dSZ8 = BigInt("172")
		const uintShUbhSG = BigInt("159")
		const uintuHceiFI = BigInt("131")
		const stringy1M6blW = "IgJgoe"
		const stringByuzHAV = "I5RDraiIHwKvTlNPZKKfDa2St7SH5VbGE4T948M8rWgnT7tZaJYbNBezvrpTcBzW5MIDnVo1W7mmUEH5PrQp6"
		const uintA8qutl = BigInt("73")
//		const addresslxSBJ82 = await CryptozYhVVLag.transferFrom.call(addressNIdgtw, addressS8zclMR, uintA5TvNlG, {from: accounts[4]});
//		const uints4mNt0l = await CryptozYhVVLag.getTimeToDailyBonus.call(addressSawX2j1, {from: accounts[4]});
//		const uint256arraygEvYtO = await CryptozYhVVLag.tokensOfOwner.call(addresslvoxpJ6, {from: accounts[2]});
//		const boolRiPBMrR = await CryptozYhVVLag.buyBoosterCard.call(uintp16wk6o, {from: accounts[5]});
//		const uintsRMPFo5 = await CryptozYhVVLag.getTimeToDailyBonus.call(address0pOlOS, {from: accounts[0]});
//		const boole19kye = await CryptozYhVVLag.loadNewCardType.call(uintA8qutl, stringByuzHAV, stringy1M6blW, uintuHceiFI, uintShUbhSG, uintFF0dSZ8, uintWlNickL, uintx9b6LlZ, uintYlDjO60, {from: accounts[2]});

		await expect(CryptozYhVVLag.transferFrom.call(addressNIdgtw, addressS8zclMR, uintA5TvNlG, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptoztXtjF1x = await Cryptoz.new({from: "0x0000000000000000000000000000000000000001"});
		const addressU7kPfrD = accounts[0]
		const uintSYuOoOD = BigInt("226")
		const uintzEoDXe2 = BigInt("338")
		const uintsE6KoCk = BigInt("813")
		const uintm8E5iSP = BigInt("193")
		const uintkODfUPE = BigInt("54")
		const uintbVvugON = BigInt("111")
		const stringle0zKei = "vm2"
		const stringG7Chl2x = "jrkxDZ3Kt0xWVUyCfAXgulREzR"
		const uintq18fiDC = BigInt("163")
		const addresslwEwJoE = accounts[4]
		const uintew8BC2E = BigInt("963")
		const addressAv9mSaA = accounts[4]
		const addressbAHNRr0 = accounts[0]
		const addressr2AjG22 = await CryptoztXtjF1x.initialize.call(addressU7kPfrD, {from: accounts[0]});
		const boolPvAYfJ = await CryptoztXtjF1x.loadNewCardType.call(uintq18fiDC, stringG7Chl2x, stringle0zKei, uintbVvugON, uintkODfUPE, uintm8E5iSP, uintsE6KoCk, uintzEoDXe2, uintSYuOoOD, {from: "0x0000000000000000000000000000000000000001"});
		const uintTmoLsr = await CryptoztXtjF1x.getTimeToDailyBonus.call(addresslwEwJoE, {from: accounts[3]});
		await CryptoztXtjF1x.getOwnedCard.call(uintew8BC2E, {from: accounts[4]});
		const addressPh6HU2c = await CryptoztXtjF1x.initialize.call(addressAv9mSaA, {from: accounts[2]});
		const uint256arrayMA0AoP = await CryptoztXtjF1x.tokensOfOwner.call(addressbAHNRr0, {from: accounts[2]});
	});

	it('test for Cryptoz', async () => {
		const CryptozyhIIh7y = await Cryptoz.new({from: accounts[1]});
		const uintdcaLcNE = BigInt("924")
		const uintZh1njaS = BigInt("639")
		const uintEirdwGs = BigInt("161")
		const uintmyFokpd = BigInt("127")
		const uintqF5Fg2 = BigInt("373")
		const uintIoLyAJe = BigInt("1425")
		const uintqxKPkmT = BigInt("1192")
//		const uint256FJYbYQT = await CryptozyhIIh7y.sacrifice.call(uintdcaLcNE, {from: accounts[2]});
//		await CryptozyhIIh7y.buyBoosterCardAndOpen.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256LYrdyZg = await CryptozyhIIh7y.tokenByIndex.call(uintZh1njaS, {from: accounts[2]});
//		const boolTew67DN = await CryptozyhIIh7y.addTocardType.call(uintqxKPkmT, uintIoLyAJe, uintqF5Fg2, uintmyFokpd, uintEirdwGs, {from: accounts[1]});
//		await CryptozyhIIh7y.getBonusBoosters.call({from: accounts[1]});
//		const uint256RRX0OuF = await CryptozyhIIh7y.totalSupply.call({from: accounts[3]});

		await expect(CryptozyhIIh7y.sacrifice.call(uintdcaLcNE, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const Cryptoze3dfTZS = await Cryptoz.new({from: accounts[5]});
		const addressE8XQkC5 = accounts[5]
		const uintuYSNwsH = BigInt("2014")
		const uintdTrUFHJ = BigInt("638")
		const uintolCTHfA = BigInt("1197")
//		const addressI1KTtzl = await Cryptoze3dfTZS.linkMySponsor.call(addressE8XQkC5, {from: accounts[2]});
//		const boollGYAqx3 = await Cryptoze3dfTZS.buyCard.call(uintuYSNwsH, {from: accounts[5]});
//		const uint32JPXr756 = await Cryptoze3dfTZS.getFreeCard.call(uintdTrUFHJ, {from: accounts[2]});
//		await Cryptoze3dfTZS.f.call({from: accounts[1]});
//		const uint256MQhQU1k = await Cryptoze3dfTZS.sacrifice.call(uintolCTHfA, {from: accounts[1]});

		await expect(Cryptoze3dfTZS.linkMySponsor.call(addressE8XQkC5, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const Cryptozx0h4WBz = await Cryptoz.new({from: accounts[0]});
		const addressyS5RP09 = "0x0000000000000000000000000000000000000001"
		const uintTValwj3 = BigInt("1451")
		const uinteNaNNCP = BigInt("134")
		const uintYD1hdsh = await Cryptozx0h4WBz.getTimeToDailyBonus.call(addressyS5RP09, {from: accounts[5]});
//		const uint32MeoXRu7 = await Cryptozx0h4WBz.isValidCard.call(uintTValwj3, {from: accounts[5]});
//		const uint256nodATS7 = await Cryptozx0h4WBz.tokenByIndex.call(uinteNaNNCP, {from: accounts[3]});
//		await Cryptozx0h4WBz.getBonusBoosters.call({from: accounts[0]});

		assert.equal(uintYD1hdsh, BigInt("1630204771"))
		await expect(Cryptozx0h4WBz.isValidCard.call(uintTValwj3, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozC2Oa97n = await Cryptoz.new({from: accounts[4]});
		const uintb6vFmrV = BigInt("101")
		const uintcLq0LmB = BigInt("964")
		const uintca53YN = BigInt("779")
		const uintTsFHRkf = BigInt("199")
		const uintGTsfxKy = BigInt("1942")
		const addresspQxeD6q = accounts[4]
		const uintPo4Ayd = BigInt("1036")
//		const boolevZlcV = await CryptozC2Oa97n.addTocardType.call(uintGTsfxKy, uintTsFHRkf, uintca53YN, uintcLq0LmB, uintb6vFmrV, {from: "0x0000000000000000000000000000000000000001"});
//		const uint25678phvl = await CryptozC2Oa97n.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256arrayGhGMvJr = await CryptozC2Oa97n.tokensOfOwner.call(addresspQxeD6q, {from: accounts[2]});
//		const stringLGnH72P = await CryptozC2Oa97n.symbol.call({from: accounts[1]});
//		const uint256DSG8sr = await CryptozC2Oa97n.sacrifice.call(uintPo4Ayd, {from: accounts[3]});

		await expect(CryptozC2Oa97n.addTocardType.call(uintGTsfxKy, uintTsFHRkf, uintca53YN, uintcLq0LmB, uintb6vFmrV, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptoztGQvFTn = await Cryptoz.new({from: accounts[3]});
		const addressqRdYXQX = accounts[4]
		const uintUH36ZB1 = BigInt("598")
		const addressPeCANwh = accounts[1]
		const uintgbS7fes = BigInt("802")
		const uintuadXZJL = await CryptoztGQvFTn.getTimeToDailyBonus.call(addressqRdYXQX, {from: accounts[3]});
//		const uint256FSXtRrp = await CryptoztGQvFTn.tokenOfOwnerByIndex.call(addressPeCANwh, uintUH36ZB1, {from: "0x0000000000000000000000000000000000000001"});
//		await CryptoztGQvFTn.buyBoosterCardAndOpen.call({from: accounts[1]});
//		await CryptoztGQvFTn.getOwnedCard.call(uintgbS7fes, {from: accounts[4]});
//		await CryptoztGQvFTn.buyBoosterCardAndOpen.call({from: accounts[3]});

		assert.equal(uintuadXZJL, BigInt("1630204761"))
		await expect(CryptoztGQvFTn.tokenOfOwnerByIndex.call(addressPeCANwh, uintUH36ZB1, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozH8FUp9F = await Cryptoz.new({from: accounts[5]});
		const addressLkGRtUi = accounts[5]
		const uintcDqt2CQ = BigInt("1381")
//		await CryptozH8FUp9F.getBonusBoosters.call({from: accounts[2]});
//		const addressxwFezey = await CryptozH8FUp9F.linkMySponsor.call(addressLkGRtUi, {from: accounts[0]});
//		await CryptozH8FUp9F.getTokensByRarity.call({from: accounts[2]});
//		await CryptozH8FUp9F.getOwnedCard.call(uintcDqt2CQ, {from: accounts[1]});

		await expect(CryptozH8FUp9F.getBonusBoosters.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozUpZ81v6 = await Cryptoz.new({from: accounts[3]});
		const uintrLMNpB = BigInt("555")
		const uintTwLGwa5 = BigInt("443")
//		await CryptozUpZ81v6.getTokensByRarity.call({from: accounts[3]});
//		const uint32syJLo4 = await CryptozUpZ81v6.isValidCard.call(uintrLMNpB, {from: accounts[3]});
//		const stringJarOREw = await CryptozUpZ81v6.symbol.call({from: accounts[1]});
//		const uint32A0NlOLX = await CryptozUpZ81v6.getFreeCard.call(uintTwLGwa5, {from: accounts[5]});

		await expect(CryptozUpZ81v6.getTokensByRarity.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptoztGQvFTn = await Cryptoz.new({from: accounts[3]});
		const addresstcI22Ls = accounts[4]
		const uintZPUAJZ4 = BigInt("802")
		const addressnHL3cus = accounts[5]
		const uintuadXZJL = await CryptoztGQvFTn.getTimeToDailyBonus.call(addresstcI22Ls, {from: accounts[3]});
//		await CryptoztGQvFTn.buyBoosterCardAndOpen.call({from: accounts[1]});
//		await CryptoztGQvFTn.getOwnedCard.call(uintZPUAJZ4, {from: accounts[4]});
//		await CryptoztGQvFTn.buyBoosterCardAndOpen.call({from: accounts[3]});
//		const uint256arrayhTUMIfC = await CryptoztGQvFTn.tokensOfOwner.call(addressnHL3cus, {from: accounts[1]});

		assert.equal(uintuadXZJL, BigInt("1630204752"))
		await expect(CryptoztGQvFTn.buyBoosterCardAndOpen.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const Cryptozx0h4WBz = await Cryptoz.new({from: accounts[0]});
		const addresst4P1cok = "0x0000000000000000000000000000000000000001"
		const uintkF00pq = BigInt("214")
		const uintFaZVZni = BigInt("808")
		const uintlYbDXxT = BigInt("1364")
		const uintVjhLwr6 = BigInt("1668")
		const uintyQbuSS = BigInt("40")
		const uintPrv8ieO = BigInt("1451")
		const uintv6asYib = BigInt("134")
		const uintYD1hdsh = await Cryptozx0h4WBz.getTimeToDailyBonus.call(addresst4P1cok, {from: accounts[5]});
//		const boolnEYEKzD = await Cryptozx0h4WBz.addTocardType.call(uintyQbuSS, uintVjhLwr6, uintlYbDXxT, uintFaZVZni, uintkF00pq, {from: accounts[0]});
//		const uint32MeoXRu7 = await Cryptozx0h4WBz.isValidCard.call(uintPrv8ieO, {from: accounts[5]});
//		const uint256nodATS7 = await Cryptozx0h4WBz.tokenByIndex.call(uintv6asYib, {from: accounts[3]});
//		await Cryptozx0h4WBz.getBonusBoosters.call({from: accounts[0]});

		assert.equal(uintYD1hdsh, BigInt("1630204778"))
		await expect(Cryptozx0h4WBz.addTocardType.call(uintyQbuSS, uintVjhLwr6, uintlYbDXxT, uintFaZVZni, uintkF00pq, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozTCRsFEl = await Cryptoz.new({from: accounts[4]});
		const uinteej9mRh = BigInt("1333")
		const uint7rmZgY = BigInt("1406")
		const uinta4gZ619 = BigInt("1922")
//		await CryptozTCRsFEl.getOwnedCard.call(uinteej9mRh, {from: accounts[1]});
//		const uint32Ep7qnXT = await CryptozTCRsFEl.getFreeCard.call(uint7rmZgY, {from: accounts[4]});
//		const boolUjuMGd = await CryptozTCRsFEl.buyCard.call(uinta4gZ619, {from: accounts[4]});

		await expect(CryptozTCRsFEl.getOwnedCard.call(uinteej9mRh, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozjDjxQTR = await Cryptoz.new({from: accounts[2]});
		const addressAn3jrxr = accounts[0]
		const uintX9Ig7p = BigInt("387")
		const addressZuAbPQH = accounts[1]
		const uintKKIv6WR = BigInt("1529")
		const uinte0wzpIl = BigInt("1183")
		const addressmHgUkZ = accounts[4]
//		await CryptozjDjxQTR.f.call({from: accounts[1]});
//		const uintIbojZuj = await CryptozjDjxQTR.getTimeToDailyBonus.call(addressAn3jrxr, {from: accounts[2]});
//		const uint256ocdCyO1 = await CryptozjDjxQTR.tokenByIndex.call(uintX9Ig7p, {from: accounts[4]});
//		const addressLD9a3S2 = await CryptozjDjxQTR.initialize.call(addressZuAbPQH, {from: accounts[0]});
//		await CryptozjDjxQTR.getOwnedCard.call(uintKKIv6WR, {from: accounts[4]});
//		const uint256mztNM6A = await CryptozjDjxQTR.tokenOfOwnerByIndex.call(addressmHgUkZ, uinte0wzpIl, {from: accounts[1]});
//		await CryptozjDjxQTR.getBonusBoosters.call({from: accounts[3]});
//		await CryptozjDjxQTR.getTokensByRarity.call({from: accounts[1]});

		await expect(CryptozjDjxQTR.f.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozjDjxQTR = await Cryptoz.new({from: accounts[2]});
		const uints2jtacM = BigInt("543")
		const addressNA5VmIy = accounts[5]
//		await CryptozjDjxQTR.withdraw.call({from: accounts[2]});
//		const uint256ocdCyO1 = await CryptozjDjxQTR.tokenByIndex.call(uints2jtacM, {from: accounts[4]});
//		const uintxko6G4l = await CryptozjDjxQTR.getTimeToDailyBonus.call(addressNA5VmIy, {from: accounts[2]});
//		await CryptozjDjxQTR.getTokensByRarity.call({from: accounts[1]});

		await expect(CryptozjDjxQTR.withdraw.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozwlPXFzO = await Cryptoz.new({from: accounts[3]});
		const uintMQbEnYt = BigInt("403")
		const stringqUooFAw = await CryptozwlPXFzO.name.call({from: accounts[3]});
//		const uint32si8C0D4 = await CryptozwlPXFzO.getFreeCard.call(uintMQbEnYt, {from: accounts[2]});

		assert.equal(stringqUooFAw, "Cryptoz Cards")
		await expect(CryptozwlPXFzO.getFreeCard.call(uintMQbEnYt, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptoztGQvFTn = await Cryptoz.new({from: accounts[3]});
		const addressvoJSyQ = accounts[4]
		const uintdmwq8gX = BigInt("598")
		const addresspJGEej = accounts[1]
		const uintsHDP4OZ = BigInt("18")
		const uintNKU9NG5 = BigInt("528")
		const uintBMoQLm = BigInt("6")
		const uintkeBYw6U = BigInt("1716")
		const uintuHO8Aaa = BigInt("1121")
		const uintpnuf1MO = BigInt("897")
		const uintiY52dSx = BigInt("1498")
		const addressWHs7wRc = accounts[5]
		const uintvAJ6pFV = BigInt("1342")
		const uintzH5wriM = BigInt("491")
		const uintuadXZJL = await CryptoztGQvFTn.getTimeToDailyBonus.call(addressvoJSyQ, {from: accounts[3]});
		const stringtUNh1ij = await CryptoztGQvFTn.symbol.call({from: accounts[1]});
//		const uint256FSXtRrp = await CryptoztGQvFTn.tokenOfOwnerByIndex.call(addresspJGEej, uintdmwq8gX, {from: "0x0000000000000000000000000000000000000001"});
//		await CryptoztGQvFTn.buyBoosterCardAndOpen.call({from: accounts[1]});
//		const booleUIpnBo = await CryptoztGQvFTn.buyCard.call(uintsHDP4OZ, {from: accounts[4]});
//		const boolZ0knE3e = await CryptoztGQvFTn.openBoosterCard.call(uintNKU9NG5, {from: accounts[3]});
//		const bool6MXGph = await CryptoztGQvFTn.addTocardType.call(uintiY52dSx, uintpnuf1MO, uintuHO8Aaa, uintkeBYw6U, uintBMoQLm, {from: accounts[2]});
//		const addressVqIep3 = await CryptoztGQvFTn.initialize.call(addressWHs7wRc, {from: accounts[5]});
//		const boolKLZuCT5 = await CryptoztGQvFTn.buyCard.call(uintvAJ6pFV, {from: accounts[2]});
//		const boolclo4Lee = await CryptoztGQvFTn.buyCard.call(uintzH5wriM, {from: accounts[0]});
//		await CryptoztGQvFTn.getTokensByRarity.call({from: accounts[0]});
//		await CryptoztGQvFTn.f.call({from: accounts[1]});
//		await CryptoztGQvFTn.buyBoosterCardAndOpen.call({from: accounts[3]});

		assert.equal(stringtUNh1ij, "Cryptoz")
		assert.equal(uintuadXZJL, BigInt("1630204772"))
		await expect(CryptoztGQvFTn.tokenOfOwnerByIndex.call(addresspJGEej, uintdmwq8gX, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozYhVVLag = await Cryptoz.new({from: accounts[2]});
		const uintjliCUZ = BigInt("1345")
		const uinteBWIx81 = BigInt("942")
		const addresslwmeNNq = accounts[6]
		const addressIUGOik9 = accounts[2]
//		const boolZ9yBJSH = await CryptozYhVVLag.buyBoosterCard.call(uintjliCUZ, {from: accounts[0]});
//		const addresslxSBJ82 = await CryptozYhVVLag.transferFrom.call(addressIUGOik9, addresslwmeNNq, uinteBWIx81, {from: accounts[4]});

		await expect(CryptozYhVVLag.buyBoosterCard.call(uintjliCUZ, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptoztGQvFTn = await Cryptoz.new({from: accounts[3]});
		const uintjfaNacY = BigInt("1731")
		const addressoMZSfLq = accounts[2]
		const stringmvkKitm = await CryptoztGQvFTn.tokenURI.call(uintjfaNacY, {from: accounts[4]});
//		await CryptoztGQvFTn.buyBoosterCardAndOpen.call({from: accounts[3]});
//		const uintWACIbb9 = await CryptoztGQvFTn.getTimeToDailyBonus.call(addressoMZSfLq, {from: accounts[3]});

		assert.equal(stringmvkKitm, "https://cryptoz.cards/data/1731")
		await expect(CryptoztGQvFTn.buyBoosterCardAndOpen.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozYhVVLag = await Cryptoz.new({from: accounts[2]});
		const uintlsIfEc6 = BigInt("792")
		const uintd5yvcHk = BigInt("652")
		const uintYG5SPtm = BigInt("942")
		const addressTvvd6H4 = accounts[5]
		const addressobz0B2 = accounts[3]
//		const booloeI64ci = await CryptozYhVVLag.openBoosterCard.call(uintlsIfEc6, {from: accounts[4]});
//		const stringyo8PNu = await CryptozYhVVLag.tokenURI.call(uintd5yvcHk, {from: accounts[0]});
//		const addresslxSBJ82 = await CryptozYhVVLag.transferFrom.call(addressobz0B2, addressTvvd6H4, uintYG5SPtm, {from: accounts[4]});

		await expect(CryptozYhVVLag.openBoosterCard.call(uintlsIfEc6, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozjQrhcIT = await Cryptoz.new({from: accounts[3]});
		const addressjztgA35 = accounts[3]
		const uintqQG4YUk = BigInt("138")
		const uintRPdJxtZ = BigInt("1")
		const uintmzSl90S = BigInt("391")
		const uintyOiGRbf = BigInt("90")
		const uintH4Ac1gk = BigInt("233")
		const uintaETBfmt = BigInt("86")
		const stringlxBeWfL = "9r8uGhlTSfahxd6WpsWcqVzSky7ABt4IIHWy9Mxmljgpm5oTKZmzw"
		const stringMEpvs4b = "E312QrP0uCiVAmPSPdg8a5Krl6QwTzGjfB57n1iOB68maX6ERNLa"
		const uintFmf7ugF = BigInt("128")
		const addressz048KkS = "0x0000000000000000000000000000000000000001"
		const uint256arraypJfhAP = await CryptozjQrhcIT.tokensOfOwner.call(addressjztgA35, {from: accounts[2]});
		const bool9NysiX = await CryptozjQrhcIT.loadNewCardType.call(uintFmf7ugF, stringMEpvs4b, stringlxBeWfL, uintaETBfmt, uintH4Ac1gk, uintyOiGRbf, uintmzSl90S, uintRPdJxtZ, uintqQG4YUk, {from: accounts[3]});
//		const addressOc43rmR = await CryptozjQrhcIT.initialize.call(addressz048KkS, {from: accounts[2]});
//		await CryptozjQrhcIT.getTokensByRarity.call({from: accounts[4]});

		assert.equal(bool9NysiX, true)
		assert.equal(uint256arraypJfhAP, BigInt(""))
		await expect(CryptozjQrhcIT.initialize.call(addressz048KkS, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})