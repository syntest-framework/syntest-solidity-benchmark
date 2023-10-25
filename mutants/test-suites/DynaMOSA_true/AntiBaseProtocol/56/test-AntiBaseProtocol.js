const AntiBaseProtocol = artifacts.require("AntiBaseProtocol");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('AntiBaseProtocol', (accounts) => {
	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolSxjn3Yq = await AntiBaseProtocol.new({from: accounts[2]});
		const addressFlSsvQT = "0x0000000000000000000000000000000000000001"
		const addressI8GVrSU = accounts[1]
		const addressb1AE9g8 = "0x0000000000000000000000000000000000000001"
//		const addressl0pqOSe = await AntiBaseProtocolSxjn3Yq.transferOwnership.call(addressFlSsvQT, {from: accounts[1]});
//		const uint256WhCTT90 = await AntiBaseProtocolSxjn3Yq.allowance.call(addressb1AE9g8, addressI8GVrSU, {from: accounts[4]});

		await expect(AntiBaseProtocolSxjn3Yq.transferOwnership.call(addressFlSsvQT, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolw324jP = await AntiBaseProtocol.new({from: accounts[0]});
		const uintzwOQocR = BigInt("1786")
		const address8rXJM6 = accounts[0]
		const boolWO36eyL = await AntiBaseProtocolw324jP.approve.call(address8rXJM6, uintzwOQocR, {from: accounts[0]});
		const stringhvMs5dF = await AntiBaseProtocolw324jP.symbol.call({from: accounts[3]});

		assert.equal(boolWO36eyL, true)
		assert.equal(stringhvMs5dF, "ABASE")
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolb9ogJkP = await AntiBaseProtocol.new({from: accounts[4]});
		const addressoqU1eOo = accounts[0]
		const uintE7rGCiU = BigInt("594")
		const addresso9lPzl = accounts[4]
		const uintVMizScz = BigInt("1934")
		const addressmIynXmn = accounts[5]
		const addresslS5Rowp = accounts[5]
//		const addressoqB3ro2 = await AntiBaseProtocolb9ogJkP._transferOwnership.call(addressoqU1eOo, {from: accounts[0]});
//		const boolBKZTUzJ = await AntiBaseProtocolb9ogJkP.decreaseAllowance.call(addresso9lPzl, uintE7rGCiU, {from: accounts[4]});
//		const addressa3C3Elx = await AntiBaseProtocolb9ogJkP._approve.call(addresslS5Rowp, addressmIynXmn, uintVMizScz, {from: "0x0000000000000000000000000000000000000001"});

		await expect(AntiBaseProtocolb9ogJkP._transferOwnership.call(addressoqU1eOo, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolbsMt2Zm = await AntiBaseProtocol.new({from: accounts[0]});
		const uintPcnbnNu = BigInt("1115")
		const addresseYPxWUU = accounts[2]
		const uintajyba6T = BigInt("597")
		const addressOHw59QC = accounts[4]
		const addressB8nzaA = accounts[5]
		const uint8QSuHEj = await AntiBaseProtocolbsMt2Zm.decimals.call({from: accounts[0]});
//		const addressF6q2RGw = await AntiBaseProtocolbsMt2Zm._burn.call(addresseYPxWUU, uintPcnbnNu, {from: accounts[3]});
//		const addressNyuL8O4 = await AntiBaseProtocolbsMt2Zm._approve.call(addressB8nzaA, addressOHw59QC, uintajyba6T, {from: accounts[4]});

		assert.equal(uint8QSuHEj, BigInt("18"))
		await expect(AntiBaseProtocolbsMt2Zm._burn.call(addresseYPxWUU, uintPcnbnNu, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocol2ORflJ = await AntiBaseProtocol.new({from: accounts[2]});
		const uintPf5Ur9r = BigInt("1997")
		const addressbEeKOxB = accounts[4]
		const uintF2utgdn = BigInt("1815")
		const addressPCZr5bK = accounts[0]
		const addressERCnaVY = accounts[1]
		const addressjXWxExM = accounts[2]
//		const boolBxkctos = await AntiBaseProtocol2ORflJ.transfer.call(addressbEeKOxB, uintPf5Ur9r, {from: accounts[0]});
//		const addressdbuAXlJ = await AntiBaseProtocol2ORflJ._approve.call(addressERCnaVY, addressPCZr5bK, uintF2utgdn, {from: accounts[4]});
//		const addresstzTKMxL = await AntiBaseProtocol2ORflJ.transferOwnership.call(addressjXWxExM, {from: accounts[5]});

		await expect(AntiBaseProtocol2ORflJ.transfer.call(addressbEeKOxB, uintPf5Ur9r, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const stringzWqeR1k = "uRdCKAaj3f8Mal5FpDJHCS1GPmnIvEm9A9"
		const stringDP7xLr = "9VxCacVcurGYv6Jb4Aqbc0oWj5U7Huxqhc3wN4gmTVhx2vt4spcaWZXg8lATWPzuadiWw8d2Bhqf88SNJfHg4oa6O"
		const uintgaOh9RV = BigInt("220")
		const AntiBaseProtocolmyJgsg6 = await AntiBaseProtocol.new(stringzWqeR1k, stringDP7xLr, uintgaOh9RV, {from: accounts[4]});
		const uintMlX7m7Q = BigInt("1827")
		const uintkC2GTW8 = BigInt("1845")
		const addressi3A96qw = accounts[4]
		const uintjQHofgm = BigInt("2031")
		const addressftXN5de = accounts[2]
		const addressbY3zoEQ = accounts[3]
		const uint256WAySCjW = await AntiBaseProtocolmyJgsg6.findRewardFee.call(uintMlX7m7Q, {from: accounts[3]});
		const addresscXbKBPD = await AntiBaseProtocolmyJgsg6.burnFrom.call(addressi3A96qw, uintkC2GTW8, {from: accounts[0]});
		const boolxtqjnRV = await AntiBaseProtocolmyJgsg6.transferFrom.call(addressbY3zoEQ, addressftXN5de, uintjQHofgm, {from: accounts[3]});
		const stringelSLejt = await AntiBaseProtocolmyJgsg6.symbol.call({from: "0x0000000000000000000000000000000000000001"});
		await AntiBaseProtocolmyJgsg6.onlyOwner.call({from: accounts[1]});
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocol6qm8QP = await AntiBaseProtocol.new({from: accounts[4]});
		const uintJuivLB7 = BigInt("1332")
		const addressn5MZlrH = accounts[3]
		const addressXxq1mxL = accounts[3]
		const uintWVmwa2x = BigInt("1051")
//		const boolvxqFMec = await AntiBaseProtocol6qm8QP.transferFrom.call(addressXxq1mxL, addressn5MZlrH, uintJuivLB7, {from: accounts[4]});
//		const uint256ZYl9EJi = await AntiBaseProtocol6qm8QP.findRewardFee.call(uintWVmwa2x, {from: accounts[5]});
//		const stringoZsyRUm = await AntiBaseProtocol6qm8QP.symbol.call({from: accounts[3]});
//		const stringkbcq01r = await AntiBaseProtocol6qm8QP.name.call({from: accounts[4]});
//		const uint8VArhsj = await AntiBaseProtocol6qm8QP.decimals.call({from: accounts[0]});

		await expect(AntiBaseProtocol6qm8QP.transferFrom.call(addressXxq1mxL, addressn5MZlrH, uintJuivLB7, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocol6qm8QP = await AntiBaseProtocol.new({from: accounts[4]});
		const uintfFaUlGt = BigInt("1051")
		const uint256ZYl9EJi = await AntiBaseProtocol6qm8QP.findRewardFee.call(uintfFaUlGt, {from: accounts[5]});
		const stringoZsyRUm = await AntiBaseProtocol6qm8QP.symbol.call({from: accounts[3]});
//		await AntiBaseProtocol6qm8QP.onlyOwner.call({from: accounts[5]});
//		const stringkbcq01r = await AntiBaseProtocol6qm8QP.name.call({from: accounts[4]});
//		const uint8VArhsj = await AntiBaseProtocol6qm8QP.decimals.call({from: accounts[0]});

		assert.equal(stringoZsyRUm, "ABASE")
		assert.equal(uint256ZYl9EJi, BigInt("55"))
		await expect(AntiBaseProtocol6qm8QP.onlyOwner.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolb9ogJkP = await AntiBaseProtocol.new({from: accounts[4]});
		const uintJ1AFVnz = BigInt("577")
		const addressXr5ikUW = accounts[4]
		const uintWIT068T = BigInt("1510")
		const addressXOMd70F = accounts[2]
		const addressgevmJEh = accounts[2]
		const uintPLpoRt = BigInt("1872")
		const uintcRlfK6I = BigInt("1301")
		const uintTSVUid4 = BigInt("1934")
		const addressyd6nou8 = accounts[5]
		const addresskpigAEG = accounts[5]
		const uintup7AMhw = BigInt("710")
//		const boolBKZTUzJ = await AntiBaseProtocolb9ogJkP.decreaseAllowance.call(addressXr5ikUW, uintJ1AFVnz, {from: accounts[4]});
//		const addressyRo9684 = await AntiBaseProtocolb9ogJkP._approve.call(addressgevmJEh, addressXOMd70F, uintWIT068T, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256xUCPlrd = await AntiBaseProtocolb9ogJkP.findBurnFee.call(uintPLpoRt, {from: accounts[2]});
//		const uint256Fk0IN13 = await AntiBaseProtocolb9ogJkP.findRewardFee.call(uintcRlfK6I, {from: accounts[3]});
//		const addressa3C3Elx = await AntiBaseProtocolb9ogJkP._approve.call(addresskpigAEG, addressyd6nou8, uintTSVUid4, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256PS2aFH = await AntiBaseProtocolb9ogJkP.burn.call(uintup7AMhw, {from: accounts[0]});

		await expect(AntiBaseProtocolb9ogJkP.decreaseAllowance.call(addressXr5ikUW, uintJ1AFVnz, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocol2ORflJ = await AntiBaseProtocol.new({from: accounts[2]});
		const addressy8tzVfs = "0x0000000000000000000000000000000000000001"
		const addressX565rbo = "0x0000000000000000000000000000000000000001"
		const uintFdJegHh = BigInt("1997")
		const addressI9G5jYL = accounts[4]
		const uintBUMmKd1 = BigInt("1815")
		const addressE5MIIPC = accounts[0]
		const addressi7GUT6g = accounts[1]
		const addressb0tO84U = accounts[3]
		const uint256Cf6YpF = await AntiBaseProtocol2ORflJ.allowance.call(addressX565rbo, addressy8tzVfs, {from: accounts[0]});
//		const boolBxkctos = await AntiBaseProtocol2ORflJ.transfer.call(addressI9G5jYL, uintFdJegHh, {from: accounts[0]});
//		const addressdbuAXlJ = await AntiBaseProtocol2ORflJ._approve.call(addressi7GUT6g, addressE5MIIPC, uintBUMmKd1, {from: accounts[4]});
//		const addresstzTKMxL = await AntiBaseProtocol2ORflJ.transferOwnership.call(addressb0tO84U, {from: accounts[5]});

		assert.equal(uint256Cf6YpF, BigInt("0"))
		await expect(AntiBaseProtocol2ORflJ.transfer.call(addressI9G5jYL, uintFdJegHh, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocol2ORflJ = await AntiBaseProtocol.new({from: accounts[2]});
		const uintUCYbBpj = BigInt("1046")
		const addresscggr3HK = accounts[3]
		const uintTCrIlPG = BigInt("1985")
		const addressUEAcy8q = accounts[4]
		const uintANJu9Y = BigInt("1815")
		const addressH5Jke0j = accounts[0]
		const addressGhmbzk7 = accounts[1]
		const addressnLwc5CK = accounts[2]
		const boolpaavOF = await AntiBaseProtocol2ORflJ.increaseAllowance.call(addresscggr3HK, uintUCYbBpj, {from: accounts[2]});
//		const boolBxkctos = await AntiBaseProtocol2ORflJ.transfer.call(addressUEAcy8q, uintTCrIlPG, {from: accounts[0]});
//		const addressdbuAXlJ = await AntiBaseProtocol2ORflJ._approve.call(addressGhmbzk7, addressH5Jke0j, uintANJu9Y, {from: accounts[4]});
//		const addresstzTKMxL = await AntiBaseProtocol2ORflJ.transferOwnership.call(addressnLwc5CK, {from: accounts[5]});

		assert.equal(boolpaavOF, true)
		await expect(AntiBaseProtocol2ORflJ.transfer.call(addressUEAcy8q, uintTCrIlPG, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolcv3zUZ = await AntiBaseProtocol.new({from: accounts[5]});
		const addressEDC6N3g = accounts[5]
		const uintbFZXjD = BigInt("1713")
		const addressDuY1Fny = accounts[2]
		const uintdddOR8c = BigInt("124")
		const addressq1IW3f = "0x0000000000000000000000000000000000000001"
		const uint256OrTHpRJ = await AntiBaseProtocolcv3zUZ.balanceOf.call(addressEDC6N3g, {from: accounts[0]});
//		const boolKfdf4hC = await AntiBaseProtocolcv3zUZ.transfer.call(addressDuY1Fny, uintbFZXjD, {from: accounts[1]});
//		const boolsKWjm83 = await AntiBaseProtocolcv3zUZ.transfer.call(addressq1IW3f, uintdddOR8c, {from: accounts[4]});
//		await AntiBaseProtocolcv3zUZ.onlyOwner.call({from: accounts[0]});
//		const uint256uH0je3X = await AntiBaseProtocolcv3zUZ.totalSupply.call({from: accounts[2]});

		assert.equal(uint256OrTHpRJ, BigInt("31250000000000000000"))
		await expect(AntiBaseProtocolcv3zUZ.transfer.call(addressDuY1Fny, uintbFZXjD, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocol6qm8QP = await AntiBaseProtocol.new({from: accounts[4]});
		const uintWnClI2k = BigInt("1332")
		const addresszIKwSgh = accounts[3]
		const addressWOcWFY9 = accounts[4]
		const uintSoIvfR5 = BigInt("1051")
		const uintM6oNibp = BigInt("107")
		const addressUtzM1GQ = accounts[1]
		const addressN6fijHQ = accounts[3]
		const uintKul6Rz = BigInt("91")
		const addressbtlvJre = "0x0000000000000000000000000000000000000001"
//		const boolvxqFMec = await AntiBaseProtocol6qm8QP.transferFrom.call(addressWOcWFY9, addresszIKwSgh, uintWnClI2k, {from: accounts[4]});
//		const uint256ZYl9EJi = await AntiBaseProtocol6qm8QP.findRewardFee.call(uintSoIvfR5, {from: accounts[5]});
//		const addressRMhrJXB = await AntiBaseProtocol6qm8QP._burn.call(addressUtzM1GQ, uintM6oNibp, {from: accounts[4]});
//		const addressmc5pG4 = await AntiBaseProtocol6qm8QP._transferOwnership.call(addressN6fijHQ, {from: accounts[2]});
//		const addressB0iiQRZ = await AntiBaseProtocol6qm8QP.burnFrom.call(addressbtlvJre, uintKul6Rz, {from: accounts[4]});
//		const stringoZsyRUm = await AntiBaseProtocol6qm8QP.symbol.call({from: accounts[3]});
//		const stringkbcq01r = await AntiBaseProtocol6qm8QP.name.call({from: accounts[4]});
//		const uint8VArhsj = await AntiBaseProtocol6qm8QP.decimals.call({from: accounts[0]});

		await expect(AntiBaseProtocol6qm8QP.transferFrom.call(addressWOcWFY9, addresszIKwSgh, uintWnClI2k, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocol6qm8QP = await AntiBaseProtocol.new({from: accounts[4]});
		const uintXYSosjW = BigInt("1051")
		const uintHRZyABt = BigInt("1167")
		const addressVbe8Ac = accounts[1]
		const uint256ZYl9EJi = await AntiBaseProtocol6qm8QP.findRewardFee.call(uintXYSosjW, {from: accounts[5]});
//		const addressOEkwcgZ = await AntiBaseProtocol6qm8QP.burnFrom.call(addressVbe8Ac, uintHRZyABt, {from: accounts[3]});
//		const stringoZsyRUm = await AntiBaseProtocol6qm8QP.symbol.call({from: accounts[3]});
//		await AntiBaseProtocol6qm8QP.onlyOwner.call({from: accounts[5]});
//		const uint8VArhsj = await AntiBaseProtocol6qm8QP.decimals.call({from: accounts[0]});

		assert.equal(uint256ZYl9EJi, BigInt("55"))
		await expect(AntiBaseProtocol6qm8QP.burnFrom.call(addressVbe8Ac, uintHRZyABt, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolUk0UsOc = await AntiBaseProtocol.new({from: accounts[0]});
		const uintI7PG0LI = BigInt("972")
		const addressxSTZgy = accounts[5]
//		await AntiBaseProtocolUk0UsOc.renounceOwnership.call({from: accounts[0]});
//		const boolsgcJB38 = await AntiBaseProtocolUk0UsOc.increaseAllowance.call(addressxSTZgy, uintI7PG0LI, {from: accounts[1]});
//		const booluULBdJR = await AntiBaseProtocolUk0UsOc.isOwner.call({from: accounts[5]});

		await expect(AntiBaseProtocolUk0UsOc.renounceOwnership.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocol6qm8QP = await AntiBaseProtocol.new({from: accounts[4]});
		const uintYdHvhQw = BigInt("1051")
		const addresstGHduaF = accounts[1]
		const addressxV3O0NJ = accounts[3]
		const uint256ZYl9EJi = await AntiBaseProtocol6qm8QP.findRewardFee.call(uintYdHvhQw, {from: accounts[5]});
		const stringH8hBBVj = await AntiBaseProtocol6qm8QP.name.call({from: "0x0000000000000000000000000000000000000001"});
		const stringoZsyRUm = await AntiBaseProtocol6qm8QP.symbol.call({from: accounts[3]});
		const uint8VArhsj = await AntiBaseProtocol6qm8QP.decimals.call({from: accounts[0]});
		const uint256pTHgDOm = await AntiBaseProtocol6qm8QP.allowance.call(addressxV3O0NJ, addresstGHduaF, {from: accounts[1]});

		assert.equal(stringH8hBBVj, "https://t.me/antibaseprotocol")
		assert.equal(stringoZsyRUm, "ABASE")
		assert.equal(uint256ZYl9EJi, BigInt("55"))
		assert.equal(uint256pTHgDOm, BigInt("0"))
		assert.equal(uint8VArhsj, BigInt("18"))
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocol2ORflJ = await AntiBaseProtocol.new({from: accounts[2]});
		const addressGTp1sfx = accounts[2]
		const uintaAlMEym = BigInt("1367")
		const uintQHkKSX9 = BigInt("44")
		const uintXotAAdo = BigInt("1997")
		const addressNWPKzop = accounts[5]
		const uintXFHjglz = BigInt("1815")
		const addressBIqkt0 = accounts[0]
		const addressqx7h426 = accounts[1]
		const uint256fAiPzU1 = await AntiBaseProtocol2ORflJ.balanceOf.call(addressGTp1sfx, {from: accounts[3]});
		const uint256urTAIR7 = await AntiBaseProtocol2ORflJ.findRewardFee.call(uintaAlMEym, {from: accounts[4]});
//		const uint256nbJruNe = await AntiBaseProtocol2ORflJ.burn.call(uintQHkKSX9, {from: accounts[0]});
//		const boolBxkctos = await AntiBaseProtocol2ORflJ.transfer.call(addressNWPKzop, uintXotAAdo, {from: accounts[0]});
//		const addressdbuAXlJ = await AntiBaseProtocol2ORflJ._approve.call(addressqx7h426, addressBIqkt0, uintXFHjglz, {from: accounts[4]});

		assert.equal(uint256fAiPzU1, BigInt("31250000000000000000"))
		assert.equal(uint256urTAIR7, BigInt("70"))
		await expect(AntiBaseProtocol2ORflJ.burn.call(uintQHkKSX9, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolZ92IbHs = await AntiBaseProtocol.new({from: accounts[4]});
		const stringi5tNLW8 = await AntiBaseProtocolZ92IbHs.name.call({from: accounts[0]});
		const uint256P9nkvQY = await AntiBaseProtocolZ92IbHs.totalSupply.call({from: accounts[2]});
		const strings50NmaS = await AntiBaseProtocolZ92IbHs.name.call({from: accounts[1]});

		assert.equal(stringi5tNLW8, "https://t.me/antibaseprotocol")
		assert.equal(strings50NmaS, "https://t.me/antibaseprotocol")
		assert.equal(uint256P9nkvQY, BigInt("31250000000000000000"))
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolSxjn3Yq = await AntiBaseProtocol.new({from: accounts[2]});
		const addressLE7rM94 = accounts[1]
		const addresssExpbxw = "0x0000000000000000000000000000000000000002"
		const uint256WhCTT90 = await AntiBaseProtocolSxjn3Yq.allowance.call(addresssExpbxw, addressLE7rM94, {from: accounts[4]});
		const address6Ey803 = await AntiBaseProtocolSxjn3Yq.owner.call({from: accounts[1]});

		assert.equal(address6Ey803, 0xCd405eE31B87ff3251eaafD74Cb0FD8A0a38Bb8b)
		assert.equal(uint256WhCTT90, BigInt("0"))
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolSxjn3Yq = await AntiBaseProtocol.new({from: accounts[2]});
		const uintJqEgibk = BigInt("6")
		const addressJQxbBPV = accounts[1]
		const addressIuivWnL = accounts[1]
		const addressWNH1NJu = "0x0000000000000000000000000000000000000002"
		const uintYJm54OX = BigInt("1296")
		const addresswr41T6d = accounts[1]
//		const booldHdPza = await AntiBaseProtocolSxjn3Yq.transfer.call(addressJQxbBPV, uintJqEgibk, {from: accounts[2]});
//		const uint256WhCTT90 = await AntiBaseProtocolSxjn3Yq.allowance.call(addressWNH1NJu, addressIuivWnL, {from: accounts[4]});
//		const addressQnBgSO = await AntiBaseProtocolSxjn3Yq.burnFrom.call(addresswr41T6d, uintYJm54OX, {from: accounts[4]});

		await expect(AntiBaseProtocolSxjn3Yq.transfer.call(addressJQxbBPV, uintJqEgibk, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolSxjn3Yq = await AntiBaseProtocol.new({from: accounts[2]});
		const addressv67SJf = accounts[4]
		const addressw3jJvfC = accounts[1]
		const addressNdgePso = "0x0000000000000000000000000000000000000001"
		const uintXBlXgu = BigInt("1603")
		const addressOQnL0k = await AntiBaseProtocolSxjn3Yq.transferOwnership.call(addressv67SJf, {from: accounts[2]});
		const uint256WhCTT90 = await AntiBaseProtocolSxjn3Yq.allowance.call(addressNdgePso, addressw3jJvfC, {from: accounts[4]});
		const uint256P4Lrf1 = await AntiBaseProtocolSxjn3Yq.findRewardFee.call(uintXBlXgu, {from: accounts[3]});

		assert.equal(uint256P4Lrf1, BigInt("85"))
		assert.equal(uint256WhCTT90, BigInt("0"))
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolSxjn3Yq = await AntiBaseProtocol.new({from: accounts[2]});
		const uintKI4TC6K = BigInt("0")
		const addressNLCZzGt = accounts[1]
		const uintKB4xGw = BigInt("1296")
		const addressay3HVN6 = accounts[1]
		const booldHdPza = await AntiBaseProtocolSxjn3Yq.transfer.call(addressNLCZzGt, uintKI4TC6K, {from: accounts[2]});
//		const addressQnBgSO = await AntiBaseProtocolSxjn3Yq.burnFrom.call(addressay3HVN6, uintKB4xGw, {from: accounts[4]});
//		const stringnj0RKXq = await AntiBaseProtocolSxjn3Yq.symbol.call({from: accounts[0]});

		assert.equal(booldHdPza, true)
		await expect(AntiBaseProtocolSxjn3Yq.burnFrom.call(addressay3HVN6, uintKB4xGw, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolSxjn3Yq = await AntiBaseProtocol.new({from: accounts[2]});
		const uintvm2WhzN = BigInt("0")
		const addressNTal0js = accounts[1]
		const uinth5OhMG = BigInt("1613")
		const uintVwcQsjE = BigInt("1296")
		const addressk7l4lcI = accounts[2]
		const uint8DxQQsyC = await AntiBaseProtocolSxjn3Yq.decimals.call({from: accounts[4]});
		const booldHdPza = await AntiBaseProtocolSxjn3Yq.transfer.call(addressNTal0js, uintvm2WhzN, {from: accounts[2]});
		const uint256Kh43FQ = await AntiBaseProtocolSxjn3Yq.findBurnFee.call(uinth5OhMG, {from: "0x0000000000000000000000000000000000000001"});
//		const addressQnBgSO = await AntiBaseProtocolSxjn3Yq.burnFrom.call(addressk7l4lcI, uintVwcQsjE, {from: accounts[4]});

		assert.equal(booldHdPza, true)
		assert.equal(uint256Kh43FQ, BigInt("255"))
		assert.equal(uint8DxQQsyC, BigInt("18"))
		await expect(AntiBaseProtocolSxjn3Yq.burnFrom.call(addressk7l4lcI, uintVwcQsjE, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocol2ORflJ = await AntiBaseProtocol.new({from: accounts[2]});
		const uinthBhjUTp = BigInt("375")
		const uintpMUxG8b = BigInt("980")
		const addressn7XfsVn = "0x00000000000000000000000000000000000000-1"
		const uint256DHujBFm = await AntiBaseProtocol2ORflJ.totalSupply.call({from: accounts[5]});
		const uint256vuVsb97 = await AntiBaseProtocol2ORflJ.findBurnFee.call(uinthBhjUTp, {from: accounts[5]});
//		const boolkfnNfJh = await AntiBaseProtocol2ORflJ.transfer.call(addressn7XfsVn, uintpMUxG8b, {from: accounts[1]});

		assert.equal(uint256DHujBFm, BigInt("31250000000000000000"))
		assert.equal(uint256vuVsb97, BigInt("60"))
		await expect(AntiBaseProtocol2ORflJ.transfer.call(addressn7XfsVn, uintpMUxG8b, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolVlY6yNr = await AntiBaseProtocol.new({from: "0x0000000000000000000000000000000000000001"});
		const addressfLwvgCY = accounts[4]
		const uintBbSuKCO = BigInt("1175")
		const addressERjIvv8 = accounts[3]
		const stringAaNMfn4 = await AntiBaseProtocolVlY6yNr.symbol.call({from: accounts[0]});
		const uint256uL5WGvE = await AntiBaseProtocolVlY6yNr.balanceOf.call(addressfLwvgCY, {from: accounts[2]});
		const boolZrO7yyx = await AntiBaseProtocolVlY6yNr.decreaseAllowance.call(addressERjIvv8, uintBbSuKCO, {from: accounts[3]});
		await AntiBaseProtocolVlY6yNr.renounceOwnership.call({from: accounts[3]});
	});
})