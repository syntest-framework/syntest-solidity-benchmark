const ERC721 = artifacts.require("ERC721");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC721', (accounts) => {
	it('test for ERC721', async () => {
		const contractD5IbpB = await ERC721.new({from: accounts[3]});
		const _dataQVrXmX7 = "0x0d041d1217"
		const tokenIdHbKlAJ = BigInt("2017")
		const towUppZX2 = accounts[4]
		const frommTL9NJX = accounts[2]
		const tokenIdOMWnTas = BigInt("1585")
		const tomd7bF9 = accounts[1]
		const fromfYURzUe = accounts[4]
		const _dataBTB8hDu = "0x0e0c00030103121b1616141902040514050a0b"
		const tokenIdCfTisSb = BigInt("47")
		const toD2LQpVQ = accounts[3]
		const fromoDpqJ0k = accounts[2]
		const operatorqlR2o2f = accounts[3]
		const ownerqblkyIB = accounts[2]
		await contractD5IbpB.safeTransferFrom.call(frommTL9NJX, towUppZX2, tokenIdHbKlAJ, _dataQVrXmX7, {from: accounts[1]});
		await contractD5IbpB.transferFrom.call(fromfYURzUe, tomd7bF9, tokenIdOMWnTas, {from: accounts[2]});
		await contractD5IbpB.safeTransferFrom.call(fromoDpqJ0k, toD2LQpVQ, tokenIdCfTisSb, _dataBTB8hDu, {from: accounts[3]});
		const nullPRlm4dN = await contractD5IbpB.isApprovedForAll.call(ownerqblkyIB, operatorqlR2o2f, {from: accounts[0]});

		await expect(contractD5IbpB.safeTransferFrom.call(frommTL9NJX, towUppZX2, tokenIdHbKlAJ, _dataQVrXmX7, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractnByXEmL = await ERC721.new({from: accounts[0]});
		const tokenIdDir69CO = BigInt("1015")
		const operatorPclVFgH = accounts[2]
		const ownerr0oItt0 = accounts[2]
		const tokenIdhJauhhJ = BigInt("1331")
		const toifd4YEN = accounts[2]
		const nullMr5x6L = await contractnByXEmL.getApproved.call(tokenIdDir69CO, {from: accounts[1]});
		const nullsQXp0AX = await contractnByXEmL.isApprovedForAll.call(ownerr0oItt0, operatorPclVFgH, {from: accounts[3]});
		await contractnByXEmL.approve.call(toifd4YEN, tokenIdhJauhhJ, {from: accounts[1]});

		await expect(contractnByXEmL.getApproved.call(tokenIdDir69CO, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractxj0YO90 = await ERC721.new({from: accounts[0]});
		const approvedX4MlxE = false
		const toV2pjKzS = accounts[1]
		const tokenIdZ2tr9g8 = BigInt("1201")
		await contractxj0YO90.setApprovalForAll.call(toV2pjKzS, approvedX4MlxE, {from: accounts[2]});
		const nullgeHuhgE = await contractxj0YO90.ownerOf.call(tokenIdZ2tr9g8, {from: accounts[5]});

		await expect(contractxj0YO90.setApprovalForAll.call(toV2pjKzS, approvedX4MlxE, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractjBHCU04 = await ERC721.new({from: "0x0000000000000000000000000000000000000001"});
		const tokenIdo2yn3tK = BigInt("1349")
		const tokenIdqVdhDUr = BigInt("518")
		const approvedRcbgFjC = false
		const tohJq9VEh = accounts[4]
		const tokenIdrB2G21K = BigInt("1551")
		const tokenIdpJGNtu = BigInt("1563")
		const tou6yUYOZ = accounts[2]
		const fromIS12dYM = accounts[4]
		const nulldSTGbHK = await contractjBHCU04.ownerOf.call(tokenIdo2yn3tK, {from: accounts[1]});
		const nullYo0KhCH = await contractjBHCU04.getApproved.call(tokenIdqVdhDUr, {from: accounts[2]});
		await contractjBHCU04.setApprovalForAll.call(tohJq9VEh, approvedRcbgFjC, {from: accounts[2]});
		const nullEXMdEuJ = await contractjBHCU04.ownerOf.call(tokenIdrB2G21K, {from: accounts[3]});
		await contractjBHCU04.transferFrom.call(fromIS12dYM, tou6yUYOZ, tokenIdpJGNtu, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for ERC721', async () => {
		const contractduIBdnZ = await ERC721.new({from: accounts[4]});
		const tokenIdxeNV4uC = BigInt("45")
		const toVVhnTRi = accounts[3]
		const fromWa5Sls7 = "0x0000000000000000000000000000000000000001"
		const tokenIdswwv2dt = BigInt("1259")
		const toL4q4gO2 = accounts[2]
		const fromDOXjO1b = accounts[1]
		const tokenIdIVAiEeI = BigInt("1034")
		const toal12Qgd = accounts[0]
		await contractduIBdnZ.safeTransferFrom.call(fromWa5Sls7, toVVhnTRi, tokenIdxeNV4uC, {from: "0x0000000000000000000000000000000000000001"});
		await contractduIBdnZ.transferFrom.call(fromDOXjO1b, toL4q4gO2, tokenIdswwv2dt, {from: accounts[3]});
		await contractduIBdnZ.approve.call(toal12Qgd, tokenIdIVAiEeI, {from: accounts[2]});

		await expect(contractduIBdnZ.safeTransferFrom.call(fromWa5Sls7, toVVhnTRi, tokenIdxeNV4uC, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractQMWvcQ9 = await ERC721.new({from: accounts[1]});
		const operatorC0V4aaF = accounts[1]
		const ownertEaP90x = accounts[0]
		const tokenIdV9I9ee7 = BigInt("456")
		const tokenIdk1pNefn = BigInt("1878")
		const top5uuqis = accounts[1]
		const tokenIdTrV63Bk = BigInt("2002")
		const operatorHNKiRxj = accounts[1]
		const owneruXjyQYE = accounts[0]
		const tokenIdRrAD4hf = BigInt("677")
		const touTtp91J = accounts[4]
		const fromxqS25S1 = accounts[4]
		const nullOUwWJe8 = await contractQMWvcQ9.isApprovedForAll.call(ownertEaP90x, operatorC0V4aaF, {from: accounts[5]});
		const nullNq9Kp20 = await contractQMWvcQ9.getApproved.call(tokenIdV9I9ee7, {from: accounts[2]});
		await contractQMWvcQ9.approve.call(top5uuqis, tokenIdk1pNefn, {from: accounts[0]});
		const nullrKuMWKt = await contractQMWvcQ9.ownerOf.call(tokenIdTrV63Bk, {from: accounts[5]});
		const nullnwm4pGW = await contractQMWvcQ9.isApprovedForAll.call(owneruXjyQYE, operatorHNKiRxj, {from: accounts[0]});
		await contractQMWvcQ9.safeTransferFrom.call(fromxqS25S1, touTtp91J, tokenIdRrAD4hf, {from: accounts[2]});

		assert.equal(nullOUwWJe8, false)
		await expect(contractQMWvcQ9.getApproved.call(tokenIdV9I9ee7, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractp3jYWgj = await ERC721.new({from: accounts[0]});
		const tokenIdgPfpEM8 = BigInt("1570")
		const torLef08B = accounts[1]
		const fromd25nUuy = accounts[2]
		const approvedfVLJCUK = false
		const toaynWWpk = accounts[1]
		const tokenIdvPOaK4Q = BigInt("1190")
		await contractp3jYWgj.transferFrom.call(fromd25nUuy, torLef08B, tokenIdgPfpEM8, {from: accounts[0]});
		await contractp3jYWgj.setApprovalForAll.call(toaynWWpk, approvedfVLJCUK, {from: accounts[2]});
		const nulligi9szG = await contractp3jYWgj.ownerOf.call(tokenIdvPOaK4Q, {from: accounts[5]});

		await expect(contractp3jYWgj.transferFrom.call(fromd25nUuy, torLef08B, tokenIdgPfpEM8, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractkf9lunU = await ERC721.new({from: accounts[3]});
		const owneraSexmxe = accounts[1]
		const _dataxtdRyCH = "0x0d041d1217"
		const tokenIdMZ3zVX1 = BigInt("2017")
		const toGGtm5mv = accounts[4]
		const fromaPC400k = accounts[2]
		const tokenIdW76A7SQ = BigInt("1585")
		const toHIlJr62 = accounts[1]
		const fromYj2Fasg = accounts[4]
		const approvedXi8Ad7o = false
		const toLuDvlSl = accounts[1]
		const _datao77zMY2 = "0x0e0c00030103121b1616141902040514050a0b"
		const tokenIdffCDjAj = BigInt("47")
		const toB4ZOPZ = accounts[3]
		const fromBvKo2Gz = accounts[3]
		const tokenIdcnmSRRN = BigInt("455")
		const toKXMIcog = accounts[3]
		const fromMDywYmg = accounts[2]
		const operator1oombc = accounts[3]
		const ownerOIlQ0WD = accounts[2]
		const nullOIBKMes = await contractkf9lunU.balanceOf.call(owneraSexmxe, {from: accounts[0]});
		await contractkf9lunU.safeTransferFrom.call(fromaPC400k, toGGtm5mv, tokenIdMZ3zVX1, _dataxtdRyCH, {from: accounts[1]});
		await contractkf9lunU.transferFrom.call(fromYj2Fasg, toHIlJr62, tokenIdW76A7SQ, {from: accounts[2]});
		await contractkf9lunU.setApprovalForAll.call(toLuDvlSl, approvedXi8Ad7o, {from: accounts[5]});
		await contractkf9lunU.safeTransferFrom.call(fromBvKo2Gz, toB4ZOPZ, tokenIdffCDjAj, _datao77zMY2, {from: accounts[3]});
		await contractkf9lunU.safeTransferFrom.call(fromMDywYmg, toKXMIcog, tokenIdcnmSRRN, {from: accounts[2]});
		const nullGOKmmmW = await contractkf9lunU.isApprovedForAll.call(ownerOIlQ0WD, operator1oombc, {from: accounts[0]});

		assert.equal(nullOIBKMes, 0)
		await expect(contractkf9lunU.safeTransferFrom.call(fromaPC400k, toGGtm5mv, tokenIdMZ3zVX1, _dataxtdRyCH, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractSxvQ0p = await ERC721.new({from: accounts[0]});
		const tokenIdgygiLc = BigInt("521")
		const tobSudtwL = accounts[3]
		const approvedslexsx8 = false
		const tojEn5XiS = accounts[2]
		const tokenIdSvWUcdC = BigInt("1201")
		await contractSxvQ0p.approve.call(tobSudtwL, tokenIdgygiLc, {from: accounts[1]});
		await contractSxvQ0p.setApprovalForAll.call(tojEn5XiS, approvedslexsx8, {from: accounts[2]});
		const nullNQRP3yK = await contractSxvQ0p.ownerOf.call(tokenIdSvWUcdC, {from: accounts[5]});

		await expect(contractSxvQ0p.approve.call(tobSudtwL, tokenIdgygiLc, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractGO6wdRe = await ERC721.new({from: accounts[0]});
		const approvedBXEY1u0 = false
		const toTxRK6ec = accounts[2]
		const _datavzJKwo3 = "0x180f1a1708040401"
		const tokenIdoJ4X4ue = BigInt("1750")
		const toSKZ6OUD = accounts[2]
		const fromvAtMHK7 = accounts[1]
		const tokenIdc5p5uji = BigInt("1886")
		const toYGIK5ju = accounts[4]
		const fromXQFssfl = accounts[5]
		await contractGO6wdRe.setApprovalForAll.call(toTxRK6ec, approvedBXEY1u0, {from: accounts[2]});
		await contractGO6wdRe.safeTransferFrom.call(fromvAtMHK7, toSKZ6OUD, tokenIdoJ4X4ue, _datavzJKwo3, {from: accounts[3]});
		await contractGO6wdRe.transferFrom.call(fromXQFssfl, toYGIK5ju, tokenIdc5p5uji, {from: accounts[1]});

		await expect(contractGO6wdRe.setApprovalForAll.call(toTxRK6ec, approvedBXEY1u0, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})