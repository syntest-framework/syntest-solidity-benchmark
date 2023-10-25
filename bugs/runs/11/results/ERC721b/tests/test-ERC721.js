const ERC721 = artifacts.require("ERC721");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC721', (accounts) => {
	it('test for ERC721', async () => {
		const contractf8Qw0uF = await ERC721.new({from: accounts[4]});
		const tokenIdXVyQQ42 = BigInt("449")
		const toixSaOci = accounts[3]
		const tokenIdXqb8uOA = BigInt("138")
		const tozyu7Imb = accounts[3]
		const fromLOL8K7g = accounts[5]
		const approvedXzw7er7 = true
		const tokksun64 = accounts[4]
		const _dataEdb0DL6 = "0x1a1610110e1116020f1e1a0b08171e10090b0b0c0c161a0f2011080b1c0c"
		const tokenIdO2aT0qz = BigInt("1991")
		const toWjS1pRU = accounts[2]
		const fromseT7wnP = accounts[4]
		const tokenIdDIedBlj = BigInt("1950")
		const toz56B62j = "0x0000000000000000000000000000000000000001"
		await contractf8Qw0uF.approve.call(toixSaOci, tokenIdXVyQQ42, {from: accounts[4]});
		await contractf8Qw0uF.transferFrom.call(fromLOL8K7g, tozyu7Imb, tokenIdXqb8uOA, {from: accounts[3]});
		await contractf8Qw0uF.setApprovalForAll.call(tokksun64, approvedXzw7er7, {from: accounts[3]});
		await contractf8Qw0uF.safeTransferFrom.call(fromseT7wnP, toWjS1pRU, tokenIdO2aT0qz, _dataEdb0DL6, {from: accounts[1]});
		await contractf8Qw0uF.approve.call(toz56B62j, tokenIdDIedBlj, {from: accounts[1]});

		await expect(contractf8Qw0uF.approve.call(toixSaOci, tokenIdXVyQQ42, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractKMYFWIV = await ERC721.new({from: accounts[2]});
		const _datasTHIj3E = "0x060e16081d12"
		const tokenIdnbMJYEr = BigInt("1654")
		const toUEEoeD = accounts[0]
		const fromcPKAiCR = accounts[0]
		const tokenIduZISXr = BigInt("1971")
		const toWQs9uY1 = accounts[4]
		const from2spO3h = accounts[4]
		const tokenIdGIQsR9M = BigInt("1523")
		const toTIobyBn = accounts[4]
		const fromllO2CgX = accounts[0]
		const tokenIdOvTJvY = BigInt("290")
		const toFtlrDfD = accounts[1]
		const fromtO0X1pq = accounts[0]
		await contractKMYFWIV.safeTransferFrom.call(fromcPKAiCR, toUEEoeD, tokenIdnbMJYEr, _datasTHIj3E, {from: accounts[5]});
		await contractKMYFWIV.transferFrom.call(from2spO3h, toWQs9uY1, tokenIduZISXr, {from: accounts[3]});
		await contractKMYFWIV.transferFrom.call(fromllO2CgX, toTIobyBn, tokenIdGIQsR9M, {from: accounts[3]});
		await contractKMYFWIV.transferFrom.call(fromtO0X1pq, toFtlrDfD, tokenIdOvTJvY, {from: accounts[1]});

		await expect(contractKMYFWIV.safeTransferFrom.call(fromcPKAiCR, toUEEoeD, tokenIdnbMJYEr, _datasTHIj3E, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractKnwp99G = await ERC721.new({from: accounts[3]});
		const tokenIduMfjJV8 = BigInt("277")
		const toaxnctnv = accounts[5]
		const from3mPoz6 = accounts[2]
		const operatorMxyaxOO = accounts[2]
		const ownerflRfpke = "0x0000000000000000000000000000000000000001"
		const tokenIdM8KbWnU = BigInt("1436")
		const toAdnry9s = accounts[3]
		const fromAoO5WnR = accounts[3]
		const tokenIdFsiz60n = BigInt("369")
		const tooJrpfhx = accounts[1]
		const fromoZCQS1t = accounts[4]
		await contractKnwp99G.transferFrom.call(from3mPoz6, toaxnctnv, tokenIduMfjJV8, {from: accounts[0]});
		const nulllKRt6CU = await contractKnwp99G.isApprovedForAll.call(ownerflRfpke, operatorMxyaxOO, {from: accounts[0]});
		await contractKnwp99G.safeTransferFrom.call(fromAoO5WnR, toAdnry9s, tokenIdM8KbWnU, {from: accounts[3]});
		await contractKnwp99G.transferFrom.call(fromoZCQS1t, tooJrpfhx, tokenIdFsiz60n, {from: accounts[2]});

		await expect(contractKnwp99G.transferFrom.call(from3mPoz6, toaxnctnv, tokenIduMfjJV8, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractbYLOat0 = await ERC721.new({from: "0x0000000000000000000000000000000000000001"});
		const ownerxp0jwTu = accounts[2]
		const operatorkr10tYU = accounts[3]
		const ownerkfs4qFF = accounts[5]
		const operatorZQtKCSi = accounts[2]
		const ownerjwMGsSd = accounts[0]
		const tokenIdNENotS7 = BigInt("176")
		const tomLsR7re = accounts[3]
		const fromVWGSGdM = accounts[2]
		const approvedwIL98Sh = false
		const togTpKfqJ = accounts[0]
		const nullLmuxsQ = await contractbYLOat0.balanceOf.call(ownerxp0jwTu, {from: accounts[2]});
		const nullxYFCCUs = await contractbYLOat0.isApprovedForAll.call(ownerkfs4qFF, operatorkr10tYU, {from: accounts[2]});
		const nullxCClCoq = await contractbYLOat0.isApprovedForAll.call(ownerjwMGsSd, operatorZQtKCSi, {from: "0x0000000000000000000000000000000000000001"});
		await contractbYLOat0.safeTransferFrom.call(fromVWGSGdM, tomLsR7re, tokenIdNENotS7, {from: accounts[4]});
		await contractbYLOat0.setApprovalForAll.call(togTpKfqJ, approvedwIL98Sh, {from: accounts[4]});
	});

	it('test for ERC721', async () => {
		const contractNtkLQB = await ERC721.new({from: accounts[4]});
		const tokenIdJC7EsWW = BigInt("2016")
		const tokenIdbAKMDv = BigInt("503")
		const tokenIddD6lSG = BigInt("814")
		const todXOsIqI = accounts[0]
		const fromu4VgDdF = "0x0000000000000000000000000000000000000001"
		const nullv8hQbmh = await contractNtkLQB.getApproved.call(tokenIdJC7EsWW, {from: accounts[0]});
		const nullr2fja8j = await contractNtkLQB.getApproved.call(tokenIdbAKMDv, {from: accounts[3]});
		await contractNtkLQB.transferFrom.call(fromu4VgDdF, todXOsIqI, tokenIddD6lSG, {from: accounts[4]});

		await expect(contractNtkLQB.getApproved.call(tokenIdJC7EsWW, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractQYbonRG = await ERC721.new({from: accounts[4]});
		const operatorbmcxSw5 = accounts[5]
		const ownerYaBNHUj = "0x0000000000000000000000000000000000000001"
		const tokenIdeX6F3ZW = BigInt("510")
		const nullXlFhCpP = await contractQYbonRG.isApprovedForAll.call(ownerYaBNHUj, operatorbmcxSw5, {from: accounts[3]});
		const null4FqiEy = await contractQYbonRG.getApproved.call(tokenIdeX6F3ZW, {from: accounts[3]});

		assert.equal(nullXlFhCpP, false)
		await expect(contractQYbonRG.getApproved.call(tokenIdeX6F3ZW, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractZJpZiIs = await ERC721.new({from: accounts[4]});
		const approvednm5nd6E = false
		const touWZHwzD = accounts[5]
		const tokenIdSXVMKxA = BigInt("623")
		await contractZJpZiIs.setApprovalForAll.call(touWZHwzD, approvednm5nd6E, {from: accounts[1]});
		const nulletqKhUm = await contractZJpZiIs.getApproved.call(tokenIdSXVMKxA, {from: accounts[3]});

		await expect(contractZJpZiIs.setApprovalForAll.call(touWZHwzD, approvednm5nd6E, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractpnzqTeE = await ERC721.new({from: accounts[3]});
		const tokenIdZ9iz4tw = BigInt("1012")
		const tov5NVunU = accounts[2]
		const fromsNWI2qb = accounts[0]
		const tokenIda1UoQr4 = BigInt("1723")
		const operatorIDuQ5mn = accounts[4]
		const owneryVBxcif = accounts[5]
		const tokenIdZsOfWU = BigInt("421")
		const toReiuIM1 = accounts[0]
		const frompGGbVLZ = accounts[2]
		await contractpnzqTeE.safeTransferFrom.call(fromsNWI2qb, tov5NVunU, tokenIdZ9iz4tw, {from: accounts[1]});
		const nullW8qcGpb = await contractpnzqTeE.ownerOf.call(tokenIda1UoQr4, {from: accounts[1]});
		const nullwjuUIta = await contractpnzqTeE.isApprovedForAll.call(owneryVBxcif, operatorIDuQ5mn, {from: accounts[4]});
		await contractpnzqTeE.safeTransferFrom.call(frompGGbVLZ, toReiuIM1, tokenIdZsOfWU, {from: accounts[3]});

		await expect(contractpnzqTeE.safeTransferFrom.call(fromsNWI2qb, tov5NVunU, tokenIdZ9iz4tw, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contract5p7ctY = await ERC721.new({from: accounts[3]});
		const ownerRaXGA3k = accounts[3]
		const _databKmjrRd = "0x0b03140a15110402060a141f140b120e0e01"
		const tokenIdRkeDSI5 = BigInt("151")
		const toNJK7jN0 = accounts[3]
		const fromFad4ivD = accounts[3]
		const tokenIdLGvW3EX = BigInt("1914")
		const nullqbNCCU = await contract5p7ctY.balanceOf.call(ownerRaXGA3k, {from: accounts[0]});
		await contract5p7ctY.safeTransferFrom.call(fromFad4ivD, toNJK7jN0, tokenIdRkeDSI5, _databKmjrRd, {from: accounts[2]});
		const nullQSSVBcR = await contract5p7ctY.ownerOf.call(tokenIdLGvW3EX, {from: accounts[1]});

		assert.equal(nullqbNCCU, 0)
		await expect(contract5p7ctY.safeTransferFrom.call(fromFad4ivD, toNJK7jN0, tokenIdRkeDSI5, _databKmjrRd, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractbUcxKhB = await ERC721.new({from: accounts[3]});
		const approvedWhWF94D = false
		const toZS4TyV = accounts[0]
		const tokenIdDjifpj = BigInt("331")
		await contractbUcxKhB.setApprovalForAll.call(toZS4TyV, approvedWhWF94D, {from: accounts[0]});
		const nullXhSYnnx = await contractbUcxKhB.ownerOf.call(tokenIdDjifpj, {from: accounts[1]});

		await expect(contractbUcxKhB.setApprovalForAll.call(toZS4TyV, approvedWhWF94D, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})