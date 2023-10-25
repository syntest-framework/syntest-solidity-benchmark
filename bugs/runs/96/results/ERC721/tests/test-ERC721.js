const ERC721 = artifacts.require("ERC721");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC721', (accounts) => {
	it('test for ERC721', async () => {
		const contractlT5oEd9 = await ERC721.new({from: accounts[4]});
		const tokenIdkpAo1kT = BigInt("16")
		const _dataqespndH = "0x190310110a17"
		const tokenIdDpfgVod = BigInt("1268")
		const todDnHJfS = accounts[3]
		const fromlOutX6 = accounts[4]
		const tokenIdsRKrxR = BigInt("463")
		const toRKP7bdd = accounts[2]
		const fromdduQagx = accounts[1]
		const approvedfWU1ouf = true
		const toKmRRZBF = accounts[5]
		const ownermqiN01 = accounts[1]
		const tokenIdaR1C5ii = BigInt("335")
		const toKOONzWC = accounts[3]
		const fromwsETATu = accounts[4]
		const nullJ1hn8qV = await contractlT5oEd9.getApproved.call(tokenIdkpAo1kT, {from: accounts[4]});
		await contractlT5oEd9.safeTransferFrom.call(fromlOutX6, todDnHJfS, tokenIdDpfgVod, _dataqespndH, {from: accounts[4]});
		await contractlT5oEd9.safeTransferFrom.call(fromdduQagx, toRKP7bdd, tokenIdsRKrxR, {from: accounts[4]});
		await contractlT5oEd9.setApprovalForAll.call(toKmRRZBF, approvedfWU1ouf, {from: accounts[4]});
		const nullGyXcFGo = await contractlT5oEd9.balanceOf.call(ownermqiN01, {from: accounts[2]});
		await contractlT5oEd9.safeTransferFrom.call(fromwsETATu, toKOONzWC, tokenIdaR1C5ii, {from: accounts[4]});

		await expect(contractlT5oEd9.getApproved.call(tokenIdkpAo1kT, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractVNocq4 = await ERC721.new({from: accounts[4]});
		const tokenIdFy8gQpC = BigInt("1993")
		const tokenIdnkhF7ng = BigInt("400")
		const nullnYE4zKg = await contractVNocq4.ownerOf.call(tokenIdFy8gQpC, {from: accounts[1]});
		const nullIIB37Er = await contractVNocq4.getApproved.call(tokenIdnkhF7ng, {from: accounts[4]});

		await expect(contractVNocq4.ownerOf.call(tokenIdFy8gQpC, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractBD8gQEZ = await ERC721.new({from: accounts[0]});
		const tokenIdIHwAF8z = BigInt("1737")
		const towglhtlI = accounts[2]
		const _datamhRLUG6 = "0x1b071010060a201511190905"
		const tokenId5rzCQR = BigInt("1811")
		const toQHegtAJ = accounts[3]
		const fromOZy5aoZ = accounts[2]
		const ownerR10nWyd = accounts[0]
		const tokenIdl5H9h2x = BigInt("1105")
		const toqvVM7Tx = accounts[5]
		const fromR1LAtia = "0x0000000000000000000000000000000000000001"
		const tokenIdqFkPZfj = BigInt("1550")
		const toztxiUSq = accounts[4]
		const fromErEGQc = "0x0000000000000000000000000000000000000001"
		await contractBD8gQEZ.approve.call(towglhtlI, tokenIdIHwAF8z, {from: accounts[4]});
		await contractBD8gQEZ.safeTransferFrom.call(fromOZy5aoZ, toQHegtAJ, tokenId5rzCQR, _datamhRLUG6, {from: accounts[2]});
		const nullbPOQ7ZN = await contractBD8gQEZ.balanceOf.call(ownerR10nWyd, {from: "0x0000000000000000000000000000000000000001"});
		await contractBD8gQEZ.transferFrom.call(fromR1LAtia, toqvVM7Tx, tokenIdl5H9h2x, {from: accounts[1]});
		await contractBD8gQEZ.transferFrom.call(fromErEGQc, toztxiUSq, tokenIdqFkPZfj, {from: accounts[0]});

		await expect(contractBD8gQEZ.approve.call(towglhtlI, tokenIdIHwAF8z, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractpPvBSBg = await ERC721.new({from: accounts[3]});
		const _dataI80WiTz = "0x0a04021114190b"
		const tokenIdGSt6L8 = BigInt("1188")
		const toVd8Qs8j = "0x0000000000000000000000000000000000000001"
		const fromvtbrArk = accounts[2]
		const tokenIdclMkMbx = BigInt("1284")
		const tokenIdYKJ5RkB = BigInt("327")
		const top6J8vT3 = "0x0000000000000000000000000000000000000001"
		const fromIGUQnZq = accounts[5]
		const tokenIda7xYqI5 = BigInt("214")
		const toGCrBbTG = accounts[3]
		const fromCDKs27L = accounts[5]
		await contractpPvBSBg.safeTransferFrom.call(fromvtbrArk, toVd8Qs8j, tokenIdGSt6L8, _dataI80WiTz, {from: accounts[0]});
		const nulluuGk6SZ = await contractpPvBSBg.ownerOf.call(tokenIdclMkMbx, {from: accounts[4]});
		await contractpPvBSBg.safeTransferFrom.call(fromIGUQnZq, top6J8vT3, tokenIdYKJ5RkB, {from: accounts[1]});
		await contractpPvBSBg.safeTransferFrom.call(fromCDKs27L, toGCrBbTG, tokenIda7xYqI5, {from: accounts[2]});

		await expect(contractpPvBSBg.safeTransferFrom.call(fromvtbrArk, toVd8Qs8j, tokenIdGSt6L8, _dataI80WiTz, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractyNBHQmY = await ERC721.new({from: "0x0000000000000000000000000000000000000001"});
		const tokenIdzQGNIM9 = BigInt("740")
		const todPByCuz = accounts[4]
		const tokenIdI6hdWfx = BigInt("254")
		const tokenIdHqRjy5O = BigInt("226")
		const _dataCBIbbfW = "0x09140214090e03"
		const tokenIdn6THVXF = BigInt("1221")
		const toO6LL1S0 = accounts[1]
		const fromG1Sc0gZ = accounts[5]
		await contractyNBHQmY.approve.call(todPByCuz, tokenIdzQGNIM9, {from: accounts[5]});
		const nullmgrJlGB = await contractyNBHQmY.ownerOf.call(tokenIdI6hdWfx, {from: "0x0000000000000000000000000000000000000001"});
		const nullOtEnjmV = await contractyNBHQmY.getApproved.call(tokenIdHqRjy5O, {from: accounts[2]});
		await contractyNBHQmY.safeTransferFrom.call(fromG1Sc0gZ, toO6LL1S0, tokenIdn6THVXF, _dataCBIbbfW, {from: accounts[1]});
	});

	it('test for ERC721', async () => {
		const contractvBNl4O2 = await ERC721.new({from: accounts[4]});
		const tokenIdntk8oH0 = BigInt("1564")
		const to5DKXkX = accounts[0]
		const fromZJd1UJR = accounts[0]
		const tokenIdO1NF17h = BigInt("94")
		const tooJGpkm = "0x0000000000000000000000000000000000000001"
		const fromdZIRGH = accounts[0]
		const owneriKpBYtX = accounts[4]
		const _dataJygfesg = "0x06120d1b0711101204181d19"
		const tokenIdNdSJ6J = BigInt("1993")
		const to3xLSve = accounts[2]
		const fromszFU329 = "0x0000000000000000000000000000000000000001"
		const tokenIdwLJOt5 = BigInt("1313")
		const toa8y85Ie = accounts[1]
		const fromJzPi9i3 = accounts[1]
		await contractvBNl4O2.transferFrom.call(fromZJd1UJR, to5DKXkX, tokenIdntk8oH0, {from: accounts[1]});
		await contractvBNl4O2.transferFrom.call(fromdZIRGH, tooJGpkm, tokenIdO1NF17h, {from: accounts[2]});
		const nulleeldadd = await contractvBNl4O2.balanceOf.call(owneriKpBYtX, {from: accounts[1]});
		await contractvBNl4O2.safeTransferFrom.call(fromszFU329, to3xLSve, tokenIdNdSJ6J, _dataJygfesg, {from: accounts[2]});
		await contractvBNl4O2.safeTransferFrom.call(fromJzPi9i3, toa8y85Ie, tokenIdwLJOt5, {from: accounts[1]});

		await expect(contractvBNl4O2.transferFrom.call(fromZJd1UJR, to5DKXkX, tokenIdntk8oH0, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractW2eAA8i = await ERC721.new({from: accounts[4]});
		const approvedjbK6jeB = false
		const tob8yvNOw = accounts[3]
		const approvedQzRvqcv = false
		const toucdX8Xx = accounts[3]
		const ownerQciPru = accounts[0]
		const ownerDdWo2Tg = accounts[5]
		const approvedNxLnb6s = true
		const tojOucYSq = accounts[1]
		const _datahTnloGJ = "0x060f1804120e07140401"
		const tokenIdYJo8YO5 = BigInt("730")
		const toCzajcmL = accounts[1]
		const fromTfqsfF3 = accounts[4]
		await contractW2eAA8i.setApprovalForAll.call(tob8yvNOw, approvedjbK6jeB, {from: accounts[4]});
		await contractW2eAA8i.setApprovalForAll.call(toucdX8Xx, approvedQzRvqcv, {from: accounts[1]});
		const nulllSK713 = await contractW2eAA8i.balanceOf.call(ownerQciPru, {from: accounts[0]});
		const nullaNijJq = await contractW2eAA8i.balanceOf.call(ownerDdWo2Tg, {from: accounts[0]});
		await contractW2eAA8i.setApprovalForAll.call(tojOucYSq, approvedNxLnb6s, {from: accounts[3]});
		await contractW2eAA8i.safeTransferFrom.call(fromTfqsfF3, toCzajcmL, tokenIdYJo8YO5, _datahTnloGJ, {from: accounts[0]});

		assert.equal(nullaNijJq, 0)
		assert.equal(nulllSK713, 0)
		await expect(contractW2eAA8i.balanceOf.call(ownerQciPru, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractMAuAUEs = await ERC721.new({from: accounts[4]});
		const approvedmUsvX94 = false
		const toVfTBMD8 = accounts[3]
		const approvedcKVC0kG = false
		const toStSF0U6 = accounts[3]
		const operatorhAwWN02 = accounts[4]
		const ownerrCHTPp9 = accounts[4]
		const ownerIGjCFkS = accounts[1]
		const ownerjxTeiS = accounts[5]
		const tokenIdshXIt0G = BigInt("1907")
		const approvedrDjUW9o = true
		const toz6Ycqu5 = accounts[1]
		const _dataFcEekph = "0x060f1804120e07140401"
		const tokenIdrALq1jZ = BigInt("730")
		const toZK0HjG7 = accounts[1]
		const fromDPDtjVI = accounts[4]
		await contractMAuAUEs.setApprovalForAll.call(toVfTBMD8, approvedmUsvX94, {from: accounts[4]});
		await contractMAuAUEs.setApprovalForAll.call(toStSF0U6, approvedcKVC0kG, {from: accounts[1]});
		const nulltI1OYs8 = await contractMAuAUEs.isApprovedForAll.call(ownerrCHTPp9, operatorhAwWN02, {from: accounts[4]});
		const nullghWHlZ2 = await contractMAuAUEs.balanceOf.call(ownerIGjCFkS, {from: accounts[0]});
		const nullVhGXEdu = await contractMAuAUEs.balanceOf.call(ownerjxTeiS, {from: accounts[0]});
		const nullDAx5n3j = await contractMAuAUEs.ownerOf.call(tokenIdshXIt0G, {from: accounts[3]});
		await contractMAuAUEs.setApprovalForAll.call(toz6Ycqu5, approvedrDjUW9o, {from: accounts[3]});
		await contractMAuAUEs.safeTransferFrom.call(fromDPDtjVI, toZK0HjG7, tokenIdrALq1jZ, _dataFcEekph, {from: accounts[0]});

		assert.equal(nullVhGXEdu, 0)
		assert.equal(nullghWHlZ2, 0)
		assert.equal(nulltI1OYs8, false)
		await expect(contractMAuAUEs.balanceOf.call(ownerIGjCFkS, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractKVhPOal = await ERC721.new({from: accounts[4]});
		const operatorWv3yByS = accounts[1]
		const ownerYAAG82P = accounts[5]
		const approvedoxRVUGf = false
		const toiSK8GBS = accounts[4]
		const approvedUQHW9fU = false
		const toAhWzxKt = accounts[3]
		const ownerns5khU7 = accounts[6]
		const approved8j7vrt = true
		const toELb32bq = accounts[1]
		const _datacJxmupY = "0x060f1804120e07140401"
		const tokenIdTg5ZZ6N = BigInt("730")
		const tootgJAp = accounts[1]
		const fromyTZee6q = accounts[4]
		const nullFM2DolP = await contractKVhPOal.isApprovedForAll.call(ownerYAAG82P, operatorWv3yByS, {from: accounts[3]});
		await contractKVhPOal.setApprovalForAll.call(toiSK8GBS, approvedoxRVUGf, {from: accounts[4]});
		await contractKVhPOal.setApprovalForAll.call(toAhWzxKt, approvedUQHW9fU, {from: accounts[1]});
		const nullRr9QxSv = await contractKVhPOal.balanceOf.call(ownerns5khU7, {from: accounts[0]});
		await contractKVhPOal.setApprovalForAll.call(toELb32bq, approved8j7vrt, {from: accounts[3]});
		await contractKVhPOal.safeTransferFrom.call(fromyTZee6q, tootgJAp, tokenIdTg5ZZ6N, _datacJxmupY, {from: accounts[0]});

		assert.equal(nullFM2DolP, false)
		await expect(contractKVhPOal.setApprovalForAll.call(toiSK8GBS, approvedoxRVUGf, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractHu1hsD = await ERC721.new({from: accounts[5]});
		const operatorSTTXZ57 = accounts[0]
		const ownerqgE4g18 = "0x0000000000000000000000000000000000000001"
		const tokenId0iBXZP = BigInt("1751")
		const toQpTJK1o = accounts[4]
		const fromknqFJm = accounts[5]
		const operatorsVgisNO = "0x0000000000000000000000000000000000000001"
		const ownerAJRLRBe = accounts[5]
		const tokenIdVASRH7p = BigInt("1464")
		const todbrjNoQ = accounts[4]
		const fromFXQjn9W = accounts[3]
		const nullYvpmZBq = await contractHu1hsD.isApprovedForAll.call(ownerqgE4g18, operatorSTTXZ57, {from: "0x0000000000000000000000000000000000000001"});
		await contractHu1hsD.safeTransferFrom.call(fromknqFJm, toQpTJK1o, tokenId0iBXZP, {from: accounts[4]});
		const nulla69UyEr = await contractHu1hsD.isApprovedForAll.call(ownerAJRLRBe, operatorsVgisNO, {from: accounts[2]});
		await contractHu1hsD.transferFrom.call(fromFXQjn9W, todbrjNoQ, tokenIdVASRH7p, {from: accounts[4]});

		assert.equal(nullYvpmZBq, false)
		await expect(contractHu1hsD.safeTransferFrom.call(fromknqFJm, toQpTJK1o, tokenId0iBXZP, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})