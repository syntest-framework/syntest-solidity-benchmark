const Token50X100 = artifacts.require("Token50X100");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Token50X100', (accounts) => {
	it('test for Token50X100', async () => {
		const Token50X100MiYJ9k4 = await Token50X100.new({from: accounts[4]});
		const uintLGgrEmv = BigInt("787")
		const uintDXI1rfQ = BigInt("1817")
		const addressUV7ePXI = accounts[0]
		const uintpyZCp8G = BigInt("630")
		const uintEavwUj = BigInt("902")
		const addressmgpWXHE = accounts[4]
		const addressqjuylIG = accounts[4]
		const booltxt6Im2 = await Token50X100MiYJ9k4.setMaxLockPeriod.call(uintLGgrEmv, {from: accounts[2]});
		const boolmEdbEZ = await Token50X100MiYJ9k4.transfer.call(addressUV7ePXI, uintDXI1rfQ, {from: accounts[5]});
		const boolKgaLUhq = await Token50X100MiYJ9k4._transfer.call(addressqjuylIG, addressmgpWXHE, uintEavwUj, uintpyZCp8G, {from: accounts[3]});

		assert.equal(booltxt6Im2, false)
		await expect(Token50X100MiYJ9k4.transfer.call(addressUV7ePXI, uintDXI1rfQ, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100USOQXCi = await Token50X100.new({from: accounts[0]});
		const uintAf4D8ET = BigInt("526")
		const uintpEF1sUw = BigInt("1051")
		const uintEKIlcgg = BigInt("1586")
		const addressMPfr9nc = accounts[2]
		const uintVzkzOE8 = BigInt("193")
		const stringl4aQ7GG = "p5CFBd3bYqlYZIpDkNSWleylmEcCM7rwercQFQnDDXLObeEHaTmKDucLmpYzr93VII6LFpzKQWF7iDffB87Dc8tDufl2gOYy3f"
		const stringRjFhAVJ = "h26r1KfzE4psVM2ak"
		const uintu0rOm9r = BigInt("1796")
		const addresslxqV4Iq = accounts[1]
		const addressqV9IlJ6 = accounts[2]
		const booloXJmQOX = await Token50X100USOQXCi.safeLock.call(uintpEF1sUw, uintAf4D8ET, {from: accounts[1]});
		const boolM9vG65w = await Token50X100USOQXCi.transfer.call(addressMPfr9nc, uintEKIlcgg, {from: accounts[1]});
		const boolpaHUBJW = await Token50X100USOQXCi.setSymbolNameDecimals.call(stringRjFhAVJ, stringl4aQ7GG, uintVzkzOE8, {from: accounts[3]});
		const boolkXuac2e = await Token50X100USOQXCi.transferFrom.call(addressqV9IlJ6, addresslxqV4Iq, uintu0rOm9r, {from: accounts[5]});

		await expect(Token50X100USOQXCi.safeLock.call(uintpEF1sUw, uintAf4D8ET, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100GpKh4Q = await Token50X100.new({from: accounts[0]});
		const uintincmdgE = BigInt("1264")
		const uintIQ0Fb3p = BigInt("1948")
		const addressUQQRBw1 = accounts[2]
		const uintvSijOlu = BigInt("1601")
		const addressQkgO0hl = accounts[0]
		const addressTxJsnuQ = accounts[1]
		const addressHF2oQnc = accounts[3]
		const addressX64QZTo = accounts[0]
		const boolqgdoAgC = await Token50X100GpKh4Q.setVesting.call(addressUQQRBw1, uintIQ0Fb3p, uintincmdgE, {from: accounts[0]});
		const boolLnbpnCe = await Token50X100GpKh4Q.transferFrom.call(addressTxJsnuQ, addressQkgO0hl, uintvSijOlu, {from: accounts[3]});
		await Token50X100GpKh4Q.onlyOwner.call({from: accounts[5]});
		await Token50X100GpKh4Q.setLinkingAddresses.call(addressX64QZTo, addressHF2oQnc, {from: accounts[1]});

		assert.equal(boolqgdoAgC, true)
		await expect(Token50X100GpKh4Q.transferFrom.call(addressTxJsnuQ, addressQkgO0hl, uintvSijOlu, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100lGruf1v = await Token50X100.new({from: accounts[4]});
		const uintLosYt26 = BigInt("1610")
		const addressGqHqoUR = accounts[3]
		const uintfRADVuG = BigInt("219")
		const addressZw9vvRD = accounts[4]
		const addressH446Ry = accounts[1]
		const uintWZPq5tc = BigInt("246")
		const uintDqLHxB3 = BigInt("1125")
		const uintliNESMW = BigInt("367")
		const addresslnk6N2G = accounts[4]
		const boolnIc56Zb = await Token50X100lGruf1v.approve.call(addressGqHqoUR, uintLosYt26, {from: accounts[4]});
		const boolsc9SIR7 = await Token50X100lGruf1v.increaseApproval.call(addressZw9vvRD, uintfRADVuG, {from: accounts[0]});
		await Token50X100lGruf1v.setTokenContract.call(addressH446Ry, {from: accounts[1]});
		const boolfKqWrBK = await Token50X100lGruf1v.safeLock.call(uintDqLHxB3, uintWZPq5tc, {from: accounts[4]});
		const boolCnyWnlT = await Token50X100lGruf1v.transfer.call(addresslnk6N2G, uintliNESMW, {from: accounts[4]});

		assert.equal(boolnIc56Zb, true)
		assert.equal(boolsc9SIR7, true)
		await expect(Token50X100lGruf1v.setTokenContract.call(addressH446Ry, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100oOAaNp3 = await Token50X100.new({from: accounts[0]});
		const uintUIlpMlf = BigInt("552")
		const addressDfbvEfX = accounts[3]
		const address07ttjg = accounts[2]
		const uintluQGpZ = BigInt("76")
		const addressahxJeyH = accounts[1]
		const addressTM3r4E = "0x0000000000000000000000000000000000000001"
		const addressfCPGEm0 = accounts[5]
		const addressy8NINKO = accounts[1]
		const boolIbsKnn = await Token50X100oOAaNp3.increaseApproval.call(addressDfbvEfX, uintUIlpMlf, {from: accounts[0]});
		const uint256nnKq5WR = await Token50X100oOAaNp3.balanceOf.call(address07ttjg, {from: accounts[2]});
		const boolPq3ndF0 = await Token50X100oOAaNp3.transferFrom.call(addressTM3r4E, addressahxJeyH, uintluQGpZ, {from: accounts[4]});
		const uint256Uy0Jqd = await Token50X100oOAaNp3.allowance.call(addressy8NINKO, addressfCPGEm0, {from: accounts[2]});

		assert.equal(boolIbsKnn, true)
		assert.equal(uint256nnKq5WR, BigInt("0"))
		await expect(Token50X100oOAaNp3.transferFrom.call(addressTM3r4E, addressahxJeyH, uintluQGpZ, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100TlXfxVZ = await Token50X100.new({from: accounts[0]});
		const addressby95hw8 = accounts[4]
		const addressZO8GV3 = accounts[1]
		const addressSpNaa3p = accounts[4]
		await Token50X100TlXfxVZ.lock.call({from: accounts[0]});
		await Token50X100TlXfxVZ.lock.call({from: accounts[3]});
		await Token50X100TlXfxVZ.setLinkingAddresses.call(addressZO8GV3, addressby95hw8, {from: accounts[2]});
		const addressyrU2MBC = await Token50X100TlXfxVZ.setOriginalContract.call(addressSpNaa3p, {from: accounts[0]});

		await expect(Token50X100TlXfxVZ.lock.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100mXDRls1 = await Token50X100.new({from: "0x0000000000000000000000000000000000000001"});
		const uintxXR9v4 = BigInt("499")
		const addressqSKAEs = accounts[4]
		const addressR53UD0G = accounts[2]
		const uintAcnBalh = BigInt("76")
		const uintDGPQO6t = BigInt("1144")
		const addressRJA5WDZ = accounts[4]
		const addressPkaeXI = accounts[3]
		const boolqnqPOi = await Token50X100mXDRls1.transferFrom.call(addressR53UD0G, addressqSKAEs, uintxXR9v4, {from: accounts[2]});
		const boolf0JHekl = await Token50X100mXDRls1.safeLock.call(uintDGPQO6t, uintAcnBalh, {from: accounts[3]});
		const uint256R60rNc6 = await Token50X100mXDRls1.allowance.call(addressPkaeXI, addressRJA5WDZ, {from: accounts[0]});
	});

	it('test for Token50X100', async () => {
		const Token50X100ya8Tard = await Token50X100.new({from: accounts[4]});
		const uintwwu68L1 = BigInt("1044")
		const addressPxs6DHO = accounts[3]
		const addresshWWzDj = accounts[4]
		const uint256W0uAdjX = await Token50X100ya8Tard.totalSupply.call({from: accounts[2]});
		await Token50X100ya8Tard.lock.call({from: accounts[2]});
		await Token50X100ya8Tard.release.call({from: accounts[4]});
		const boolBAlDO3v = await Token50X100ya8Tard.transferFrom.call(addresshWWzDj, addressPxs6DHO, uintwwu68L1, {from: accounts[2]});

		assert.equal(uint256W0uAdjX, BigInt("4714285714285710"))
		await expect(Token50X100ya8Tard.lock.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100MiYJ9k4 = await Token50X100.new({from: accounts[4]});
		const uintcfP7WOK = BigInt("787")
		const uintCWpqYUA = BigInt("1817")
		const addressQ62zwwF = accounts[1]
		const uintAXYL5Dm = BigInt("945")
		const uintUoscmqY = BigInt("967")
		const uintxxodfVC = BigInt("630")
		const uintqIDeUkz = BigInt("902")
		const addressF9i1VuD = accounts[4]
		const addressZnMel0s = accounts[4]
		const booltxt6Im2 = await Token50X100MiYJ9k4.setMaxLockPeriod.call(uintcfP7WOK, {from: accounts[2]});
		await Token50X100MiYJ9k4.onlyOwner.call({from: accounts[0]});
		const boolmEdbEZ = await Token50X100MiYJ9k4.transfer.call(addressQ62zwwF, uintCWpqYUA, {from: accounts[5]});
		const boolXOCt490 = await Token50X100MiYJ9k4.safeLock.call(uintUoscmqY, uintAXYL5Dm, {from: accounts[2]});
		const boolKgaLUhq = await Token50X100MiYJ9k4._transfer.call(addressZnMel0s, addressF9i1VuD, uintqIDeUkz, uintxxodfVC, {from: accounts[3]});

		assert.equal(booltxt6Im2, false)
		await expect(Token50X100MiYJ9k4.onlyOwner.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100eaiaClp = await Token50X100.new({from: accounts[4]});
		const uintBPnUkl = BigInt("875")
		const addresslFpLzXp = accounts[2]
		const uint9eDkyv = BigInt("1802")
		const addressnj7RRt = accounts[3]
		const uintaiGq7eC = BigInt("1123")
		const uintPIoqxzh = BigInt("1440")
		const addresspCHOBvo = accounts[2]
		const addresstdZJWBp = accounts[1]
		const uintWbcsR19 = BigInt("279")
		const uintwhcL3uI = BigInt("1897")
		const boolhfIfA17 = await Token50X100eaiaClp.decreaseApproval.call(addresslFpLzXp, uintBPnUkl, {from: accounts[0]});
		const boolfHaMnPz = await Token50X100eaiaClp.transfer.call(addressnj7RRt, uint9eDkyv, {from: accounts[4]});
		const boolHAcemUe = await Token50X100eaiaClp._transfer.call(addresstdZJWBp, addresspCHOBvo, uintPIoqxzh, uintaiGq7eC, {from: accounts[5]});
		const boolfOb73jT = await Token50X100eaiaClp.safeLock.call(uintwhcL3uI, uintWbcsR19, {from: accounts[4]});

		assert.equal(boolhfIfA17, true)
		await expect(Token50X100eaiaClp.transfer.call(addressnj7RRt, uint9eDkyv, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100eaiaClp = await Token50X100.new({from: accounts[4]});
		const uintDS1YtCE = BigInt("866")
		const addressoFQ4A7v = accounts[2]
		const uintpGWcZht = BigInt("726")
		const addressMKNiZfO = "0x0000000000000000000000000000000000000000"
		const uintjf68r46 = BigInt("1209")
		const addressRO8WGRa = accounts[4]
		const uintPZ8MlaA = BigInt("1802")
		const addressSEefRmk = accounts[3]
		const uintaHE3Njf = BigInt("279")
		const uintoPu6N4t = BigInt("1897")
		const uintdzkELvN = BigInt("1947")
		const addressgAa2ZD = accounts[3]
		const boolhfIfA17 = await Token50X100eaiaClp.decreaseApproval.call(addressoFQ4A7v, uintDS1YtCE, {from: accounts[0]});
		const boolhJVv1UU = await Token50X100eaiaClp.transfer.call(addressMKNiZfO, uintpGWcZht, {from: accounts[5]});
		const boolx6Guq8N = await Token50X100eaiaClp.transfer.call(addressRO8WGRa, uintjf68r46, {from: accounts[5]});
		const boolfHaMnPz = await Token50X100eaiaClp.transfer.call(addressSEefRmk, uintPZ8MlaA, {from: accounts[4]});
		const boolfOb73jT = await Token50X100eaiaClp.safeLock.call(uintoPu6N4t, uintaHE3Njf, {from: accounts[4]});
		const boolzcNoX9K = await Token50X100eaiaClp.transfer.call(addressgAa2ZD, uintdzkELvN, {from: accounts[1]});

		assert.equal(boolhfIfA17, true)
		await expect(Token50X100eaiaClp.transfer.call(addressMKNiZfO, uintpGWcZht, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100NPjnyhG = await Token50X100.new({from: accounts[2]});
		const addressRTEFvov = accounts[3]
		const addressX6HhVuA = accounts[4]
		const addressuCKMrge = accounts[3]
		const uintt1W53e = BigInt("1425")
		const addressL9QjEaz = accounts[3]
		const uint2560T2GZR = await Token50X100NPjnyhG.allowance.call(addressX6HhVuA, addressRTEFvov, {from: accounts[0]});
		const addressWBRvHCx = await Token50X100NPjnyhG.transferOwnership.call(addressuCKMrge, {from: accounts[0]});
		const boolDkASRzw = await Token50X100NPjnyhG.decreaseApproval.call(addressL9QjEaz, uintt1W53e, {from: accounts[3]});

		assert.equal(uint2560T2GZR, BigInt("0"))
		await expect(Token50X100NPjnyhG.transferOwnership.call(addressuCKMrge, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100MiYJ9k4 = await Token50X100.new({from: accounts[4]});
		const uintjkM5PPP = BigInt("1661")
		const uintgFU5P0o = BigInt("425")
		const addressiI1S3gl = accounts[2]
		const addressx8hCa1d = accounts[1]
		const uintek6T1tg = BigInt("1817")
		const addressn7maNak = accounts[0]
		const boolysfcHFa = await Token50X100MiYJ9k4._transfer.call(addressx8hCa1d, addressiI1S3gl, uintgFU5P0o, uintjkM5PPP, {from: accounts[4]});
		const boolmEdbEZ = await Token50X100MiYJ9k4.transfer.call(addressn7maNak, uintek6T1tg, {from: accounts[5]});

		await expect(Token50X100MiYJ9k4._transfer.call(addressx8hCa1d, addressiI1S3gl, uintgFU5P0o, uintjkM5PPP, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100RwNvq6 = await Token50X100.new({from: accounts[1]});
		const addressw7zOAHJ = accounts[0]
		const addressuVdSdQY = accounts[1]
		const uintWxxZp5 = BigInt("78")
		const stringifImiiI = "Gns1u5J"
		const stringNNMfjAf = "Et"
		const uintMVk7xXb = BigInt("92")
		const uintKEj3Weh = BigInt("1491")
		const addressOCmLYlF = accounts[2]
		const addressbCh39m = accounts[4]
		const uinttWdqpqq = BigInt("1892")
		const addressaVauEFb = "0x0000000000000000000000000000000000000001"
		const uintxA1jZtn = BigInt("738")
		const addressCcPm8O = accounts[2]
		const addressVcyIoSZ = accounts[0]
		const uintaS74FAM = BigInt("1790")
		const uintWT3xbI3 = BigInt("957")
		const addressTBFNcpH = accounts[1]
		const addressPO91Idm = accounts[3]
		const uint2565KhWEp = await Token50X100RwNvq6.allowance.call(addressuVdSdQY, addressw7zOAHJ, {from: accounts[0]});
		await Token50X100RwNvq6.setSymbolNameDecimals.call(stringNNMfjAf, stringifImiiI, uintWxxZp5, {from: accounts[1]});
		const boolJS9zvvb = await Token50X100RwNvq6._transfer.call(addressbCh39m, addressOCmLYlF, uintKEj3Weh, uintMVk7xXb, {from: accounts[3]});
		const boolOgtwqDp = await Token50X100RwNvq6.transfer.call(addressaVauEFb, uinttWdqpqq, {from: accounts[0]});
		const boolOmn7upY = await Token50X100RwNvq6.issueTokens.call(addressVcyIoSZ, addressCcPm8O, uintxA1jZtn, {from: accounts[5]});
		const boolD6ViSFE = await Token50X100RwNvq6._transfer.call(addressPO91Idm, addressTBFNcpH, uintWT3xbI3, uintaS74FAM, {from: accounts[3]});

		assert.equal(uint2565KhWEp, BigInt("0"))
		await expect(Token50X100RwNvq6.setSymbolNameDecimals.call(stringNNMfjAf, stringifImiiI, uintWxxZp5, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100eaiaClp = await Token50X100.new({from: accounts[4]});
		const uintJbDEaFq = BigInt("701")
		const addressG1Xzg5u = "0x00000000000000000000000000000000000000-1"
		const uintESszVL6 = BigInt("279")
		const uintd9llrfR = BigInt("1897")
		const uintLzdAPxe = BigInt("1947")
		const addressU5sr077 = accounts[3]
		const uintCD5aieL = BigInt("1403")
		const addressjxmzfQJ = accounts[0]
		const boolhJVv1UU = await Token50X100eaiaClp.transfer.call(addressG1Xzg5u, uintJbDEaFq, {from: accounts[5]});
		const boolfOb73jT = await Token50X100eaiaClp.safeLock.call(uintd9llrfR, uintESszVL6, {from: accounts[4]});
		const boolzcNoX9K = await Token50X100eaiaClp.transfer.call(addressU5sr077, uintLzdAPxe, {from: accounts[1]});
		const boolK0zF7Qs = await Token50X100eaiaClp.transfer.call(addressjxmzfQJ, uintCD5aieL, {from: accounts[1]});

		await expect(Token50X100eaiaClp.transfer.call(addressG1Xzg5u, uintJbDEaFq, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100MiYJ9k4 = await Token50X100.new({from: accounts[4]});
		const boolj5EYRwC = true
		const addressJUPRUNz = accounts[0]
		const uintsjNrkCV = BigInt("1891")
		const uintEo4JEvP = BigInt("1849")
		const addressrPpbEWr = accounts[5]
		const addresszMWaZp8 = accounts[3]
		const uintiUaKVfB = BigInt("1817")
		const addresshwx8MBN = accounts[0]
		await Token50X100MiYJ9k4.setWhiteList.call(addressJUPRUNz, boolj5EYRwC, {from: accounts[4]});
		const boolLtDnds2 = await Token50X100MiYJ9k4.setVesting.call(addressrPpbEWr, uintEo4JEvP, uintsjNrkCV, {from: accounts[2]});
		await Token50X100MiYJ9k4.setTokenContract.call(addresszMWaZp8, {from: accounts[1]});
		const boolmEdbEZ = await Token50X100MiYJ9k4.transfer.call(addresshwx8MBN, uintiUaKVfB, {from: accounts[5]});

		await expect(Token50X100MiYJ9k4.setWhiteList.call(addressJUPRUNz, boolj5EYRwC, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100snGuNLV = await Token50X100.new({from: accounts[2]});
		const addressWAPLF8A = accounts[3]
		const uintNc0kIMu = BigInt("1107")
		const uintFpXWjOF = BigInt("1080")
		const uintxS31to = BigInt("1289")
		const uint5N741D = BigInt("622")
		const addressnMN2BB = accounts[4]
		const addressWcBHQcG = accounts[4]
		const uintJWSecre = BigInt("490")
		const uintM99qQi = BigInt("122")
		const addressrppWQhD = await Token50X100snGuNLV.transferOwnership.call(addressWAPLF8A, {from: accounts[2]});
		await Token50X100snGuNLV.lock.call({from: accounts[4]});
		const boolRFAV7S = await Token50X100snGuNLV.safeLock.call(uintFpXWjOF, uintNc0kIMu, {from: accounts[1]});
		const boolz8z717g = await Token50X100snGuNLV._transfer.call(addressWcBHQcG, addressnMN2BB, uint5N741D, uintxS31to, {from: accounts[4]});
		const booleIv2t73 = await Token50X100snGuNLV.safeLock.call(uintM99qQi, uintJWSecre, {from: accounts[3]});

		await expect(Token50X100snGuNLV.lock.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100MiYJ9k4 = await Token50X100.new({from: accounts[4]});
		const addressEYlp0hq = accounts[1]
		const uintHi8kwWx = BigInt("1388")
		const uintW3Odq6r = BigInt("538")
		const uintPZih0C4 = BigInt("1457")
		const addressai4LvzU = accounts[5]
		const addressqDTgy3 = accounts[3]
		await Token50X100MiYJ9k4.setTokenContract.call(addressEYlp0hq, {from: accounts[4]});
		const boolNrj68mJ = await Token50X100MiYJ9k4.safeLock.call(uintW3Odq6r, uintHi8kwWx, {from: accounts[2]});
		const booln7awlB7 = await Token50X100MiYJ9k4.transferFrom.call(addressqDTgy3, addressai4LvzU, uintPZih0C4, {from: accounts[1]});

		await expect(Token50X100MiYJ9k4.setTokenContract.call(addressEYlp0hq, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})