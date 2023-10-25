const ERC721 = artifacts.require("ERC721");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC721', (accounts) => {
	it('test for ERC721', async () => {
		const contractN18rmxQ = await ERC721.new({from: accounts[1]});
		const tokenIdl9j3lTn = BigInt("1854")
		const toEB1EOxW = accounts[3]
		const fromgMG4Gv5 = accounts[0]
		const tokenIdBqNSPSq = BigInt("1689")
		const tokenIdwCaBwLA = BigInt("643")
		const tokenIdPfz7fSL = BigInt("362")
		const toD4IuqRo = accounts[0]
		const fromXgdAkZM = accounts[4]
		await contractN18rmxQ.safeTransferFrom.call(fromgMG4Gv5, toEB1EOxW, tokenIdl9j3lTn, {from: "0x0000000000000000000000000000000000000001"});
		const nullNo7sQpO = await contractN18rmxQ.ownerOf.call(tokenIdBqNSPSq, {from: "0x0000000000000000000000000000000000000001"});
		const nullXxFOGaO = await contractN18rmxQ.ownerOf.call(tokenIdwCaBwLA, {from: accounts[5]});
		await contractN18rmxQ.transferFrom.call(fromXgdAkZM, toD4IuqRo, tokenIdPfz7fSL, {from: accounts[4]});

		await expect(contractN18rmxQ.safeTransferFrom.call(fromgMG4Gv5, toEB1EOxW, tokenIdl9j3lTn, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contract0UkZ7Z = await ERC721.new({from: accounts[1]});
		const tokenIdeuFwpso = BigInt("636")
		const operatorVhmShS3 = accounts[2]
		const ownerQHEXWx = accounts[2]
		const ownerZbBEMxh = accounts[5]
		const nullngUZL6X = await contract0UkZ7Z.getApproved.call(tokenIdeuFwpso, {from: accounts[3]});
		const nullN58l7n = await contract0UkZ7Z.isApprovedForAll.call(ownerQHEXWx, operatorVhmShS3, {from: accounts[3]});
		const nullLb9jI2i = await contract0UkZ7Z.balanceOf.call(ownerZbBEMxh, {from: accounts[1]});

		await expect(contract0UkZ7Z.getApproved.call(tokenIdeuFwpso, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractlvMJ5Bz = await ERC721.new({from: accounts[0]});
		const tokenId29fHPf = BigInt("220")
		const toS7JQPja = accounts[2]
		const frompwAZqdT = accounts[4]
		const operatorWpwRL01 = accounts[1]
		const ownerJPikW3n = accounts[0]
		const tokenIdk4WZzsO = BigInt("1538")
		const toXmzTJiO = "0x0000000000000000000000000000000000000001"
		const fromRP9UTL4 = accounts[4]
		await contractlvMJ5Bz.transferFrom.call(frompwAZqdT, toS7JQPja, tokenId29fHPf, {from: accounts[1]});
		const nullr38Lwm = await contractlvMJ5Bz.isApprovedForAll.call(ownerJPikW3n, operatorWpwRL01, {from: accounts[4]});
		await contractlvMJ5Bz.transferFrom.call(fromRP9UTL4, toXmzTJiO, tokenIdk4WZzsO, {from: accounts[3]});

		await expect(contractlvMJ5Bz.transferFrom.call(frompwAZqdT, toS7JQPja, tokenId29fHPf, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractX5CzmoG = await ERC721.new({from: accounts[0]});
		const owneryY7sVfy = accounts[4]
		const ownerG0l7nrV = accounts[3]
		const tokenId4XzuTV = BigInt("1295")
		const approvedk9xJMY = false
		const toW5vTkC = accounts[2]
		const operatorpf9Zjbn = accounts[4]
		const ownerTKJ3Qio = accounts[3]
		const nullRr9TLHt = await contractX5CzmoG.balanceOf.call(owneryY7sVfy, {from: accounts[0]});
		const nullBnK32Z9 = await contractX5CzmoG.balanceOf.call(ownerG0l7nrV, {from: accounts[1]});
		const nullujoO23t = await contractX5CzmoG.ownerOf.call(tokenId4XzuTV, {from: accounts[1]});
		await contractX5CzmoG.setApprovalForAll.call(toW5vTkC, approvedk9xJMY, {from: accounts[0]});
		const nullagCrTJl = await contractX5CzmoG.isApprovedForAll.call(ownerTKJ3Qio, operatorpf9Zjbn, {from: accounts[3]});

		assert.equal(nullBnK32Z9, 0)
		assert.equal(nullRr9TLHt, 0)
		await expect(contractX5CzmoG.ownerOf.call(tokenId4XzuTV, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractet7IE34 = await ERC721.new({from: accounts[5]});
		const approvedFzU8hnT = false
		const toWgpX2rI = accounts[2]
		const _datalLHVgBJ = "0x0607121f161f151b1f1c0c071f021812001d1a0b1411060e1017111706"
		const tokenIdyi424wV = BigInt("542")
		const toh6omO4H = "0x0000000000000000000000000000000000000001"
		const fromAs7sQWL = accounts[5]
		await contractet7IE34.setApprovalForAll.call(toWgpX2rI, approvedFzU8hnT, {from: accounts[0]});
		await contractet7IE34.safeTransferFrom.call(fromAs7sQWL, toh6omO4H, tokenIdyi424wV, _datalLHVgBJ, {from: "0x0000000000000000000000000000000000000001"});

		await expect(contractet7IE34.setApprovalForAll.call(toWgpX2rI, approvedFzU8hnT, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractRflln5h = await ERC721.new({from: accounts[0]});
		const tokenIdrpN3hEi = BigInt("1315")
		const toUlKS0js = "0x0000000000000000000000000000000000000001"
		const ownerZUI9kB7 = accounts[4]
		const ownerjFrKyZN = accounts[4]
		const tokenIdbzM0cyy = BigInt("1295")
		const approvedhtGgGXH = false
		const toS2QuDkH = accounts[2]
		const operatorLarhL3P = accounts[4]
		const ownerZECrnrg = accounts[3]
		await contractRflln5h.approve.call(toUlKS0js, tokenIdrpN3hEi, {from: accounts[2]});
		const nullqSHAD35 = await contractRflln5h.balanceOf.call(ownerZUI9kB7, {from: accounts[0]});
		const nullSRs6bQ0 = await contractRflln5h.balanceOf.call(ownerjFrKyZN, {from: accounts[1]});
		const null7UM9hb = await contractRflln5h.ownerOf.call(tokenIdbzM0cyy, {from: accounts[1]});
		await contractRflln5h.setApprovalForAll.call(toS2QuDkH, approvedhtGgGXH, {from: accounts[0]});
		const nullwD3DV22 = await contractRflln5h.isApprovedForAll.call(ownerZECrnrg, operatorLarhL3P, {from: accounts[3]});

		await expect(contractRflln5h.approve.call(toUlKS0js, tokenIdrpN3hEi, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractMsWflCU = await ERC721.new({from: accounts[2]});
		const operatorr9tQsIB = accounts[4]
		const ownerpVNRuFI = accounts[0]
		const tokenIdTiwrZzM = BigInt("1376")
		const torM94rxU = accounts[0]
		const fromLj5G76F = "0x0000000000000000000000000000000000000001"
		const tokenIdbHw6Gy = BigInt("385")
		const toT993Fh6 = accounts[4]
		const from7i3ZVJ = accounts[3]
		const nullJmqoPFl = await contractMsWflCU.isApprovedForAll.call(ownerpVNRuFI, operatorr9tQsIB, {from: accounts[3]});
		await contractMsWflCU.safeTransferFrom.call(fromLj5G76F, torM94rxU, tokenIdTiwrZzM, {from: accounts[0]});
		await contractMsWflCU.transferFrom.call(from7i3ZVJ, toT993Fh6, tokenIdbHw6Gy, {from: accounts[3]});

		assert.equal(nullJmqoPFl, false)
		await expect(contractMsWflCU.safeTransferFrom.call(fromLj5G76F, torM94rxU, tokenIdTiwrZzM, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractvLSBRPd = await ERC721.new({from: accounts[2]});
		const approvedxc4rN1Z = true
		const tovf3Ju4f = accounts[2]
		const tokenIdUeKVbrZ = BigInt("2")
		const torXtR62 = accounts[3]
		const operatorJGFLARE = "0x0000000000000000000000000000000000000001"
		const owneryyLa0OF = accounts[3]
		const tokenIdZ2rE3zv = BigInt("385")
		const tohqtHwCA = accounts[4]
		const fromWzlc7J1 = accounts[3]
		await contractvLSBRPd.setApprovalForAll.call(tovf3Ju4f, approvedxc4rN1Z, {from: accounts[2]});
		await contractvLSBRPd.approve.call(torXtR62, tokenIdUeKVbrZ, {from: accounts[0]});
		const nullIkLHQkl = await contractvLSBRPd.isApprovedForAll.call(owneryyLa0OF, operatorJGFLARE, {from: accounts[5]});
		await contractvLSBRPd.transferFrom.call(fromWzlc7J1, tohqtHwCA, tokenIdZ2rE3zv, {from: accounts[3]});

		await expect(contractvLSBRPd.setApprovalForAll.call(tovf3Ju4f, approvedxc4rN1Z, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractasGo6Wq = await ERC721.new({from: "0x0000000000000000000000000000000000000001"});
		const tokenIdz9LMMWP = BigInt("204")
		const tokenIdwk9kxDv = BigInt("448")
		const toWB7zk7g = accounts[1]
		const fromfqZzBwV = accounts[5]
		const nullFXRUVYa = await contractasGo6Wq.ownerOf.call(tokenIdz9LMMWP, {from: accounts[4]});
		await contractasGo6Wq.safeTransferFrom.call(fromfqZzBwV, toWB7zk7g, tokenIdwk9kxDv, {from: accounts[2]});
	});

	it('test for ERC721', async () => {
		const contractyfZ6vnr = await ERC721.new({from: accounts[2]});
		const _datay6Bseuq = "0x01021b1b111b12021e"
		const tokenIdFWh5ka = BigInt("1238")
		const toUjZYkS = "0x00000000000000000000000000000000000000-1"
		const fromw9wXh5F = accounts[1]
		const tokenIdVI4M1NK = BigInt("783")
		const tolVPBMkA = accounts[3]
		await contractyfZ6vnr.safeTransferFrom.call(fromw9wXh5F, toUjZYkS, tokenIdFWh5ka, _datay6Bseuq, {from: accounts[0]});
		await contractyfZ6vnr.approve.call(tolVPBMkA, tokenIdVI4M1NK, {from: accounts[5]});

		await expect(contractyfZ6vnr.safeTransferFrom.call(fromw9wXh5F, toUjZYkS, tokenIdFWh5ka, _datay6Bseuq, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractEhk6Spp = await ERC721.new({from: accounts[4]});
		const approvedF1Ykya1 = true
		const tom2ma74 = accounts[1]
		const operator22MmtS = accounts[0]
		const ownerBuUSLr3 = accounts[1]
		const operatorkPlrIl2 = accounts[0]
		const ownerwy0lDKR = accounts[2]
		const ownerarAgq6N = "0x0000000000000000000000000000000000000000"
		const tokenIdNpPyd8p = BigInt("383")
		const toUh4BexA = accounts[4]
		const tokenIdsfa5osj = BigInt("1006")
		const tomFCOD0C = accounts[4]
		const fromLn7zQp0 = accounts[4]
		await contractEhk6Spp.setApprovalForAll.call(tom2ma74, approvedF1Ykya1, {from: accounts[3]});
		const nullwUOTbMZ = await contractEhk6Spp.isApprovedForAll.call(ownerBuUSLr3, operator22MmtS, {from: accounts[2]});
		const nullSc44Qwa = await contractEhk6Spp.isApprovedForAll.call(ownerwy0lDKR, operatorkPlrIl2, {from: accounts[2]});
		const nullSM5IPom = await contractEhk6Spp.balanceOf.call(ownerarAgq6N, {from: accounts[2]});
		await contractEhk6Spp.approve.call(toUh4BexA, tokenIdNpPyd8p, {from: accounts[3]});
		await contractEhk6Spp.transferFrom.call(fromLn7zQp0, tomFCOD0C, tokenIdsfa5osj, {from: accounts[2]});

		assert.equal(nullSc44Qwa, false)
		assert.equal(nullwUOTbMZ, false)
		await expect(contractEhk6Spp.isApprovedForAll.call(ownerwy0lDKR, operatorkPlrIl2, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})