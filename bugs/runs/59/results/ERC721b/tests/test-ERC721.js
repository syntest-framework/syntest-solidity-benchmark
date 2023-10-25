const ERC721 = artifacts.require("ERC721");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC721', (accounts) => {
	it('test for ERC721', async () => {
		const contractbYgHQDQ = await ERC721.new({from: accounts[3]});
		const operatorxlTZaIu = accounts[3]
		const ownerDwwLg0 = accounts[2]
		const tokenIdenNY2q1 = BigInt("1700")
		const to7ppWi5 = accounts[1]
		const fromyEO8bmD = accounts[3]
		const tokenIdxgZCHdm = BigInt("73")
		const tojFa8SQl = accounts[2]
		const nullwnwZWyg = await contractbYgHQDQ.isApprovedForAll.call(ownerDwwLg0, operatorxlTZaIu, {from: accounts[3]});
		await contractbYgHQDQ.transferFrom.call(fromyEO8bmD, to7ppWi5, tokenIdenNY2q1, {from: accounts[3]});
		await contractbYgHQDQ.approve.call(tojFa8SQl, tokenIdxgZCHdm, {from: accounts[4]});

		assert.equal(nullwnwZWyg, false)
		await expect(contractbYgHQDQ.transferFrom.call(fromyEO8bmD, to7ppWi5, tokenIdenNY2q1, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contracthTYakV = await ERC721.new({from: accounts[1]});
		const tokenIdFaFuct = BigInt("0")
		const tofgm9foF = accounts[2]
		const tokenIdffAoLPQ = BigInt("575")
		const tovSOth54 = accounts[1]
		const fromNuG2CY = accounts[0]
		await contracthTYakV.approve.call(tofgm9foF, tokenIdFaFuct, {from: "0x0000000000000000000000000000000000000001"});
		await contracthTYakV.transferFrom.call(fromNuG2CY, tovSOth54, tokenIdffAoLPQ, {from: accounts[1]});

		await expect(contracthTYakV.approve.call(tofgm9foF, tokenIdFaFuct, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractR8OzpWB = await ERC721.new({from: accounts[4]});
		const _dataUoLVWDB = "0x041e09130b06020916202020030505"
		const tokenIdkCbaUs = BigInt("821")
		const toAbtt30 = accounts[4]
		const from2wkTVJ = accounts[4]
		const tokenIduwgdnQH = BigInt("415")
		const toBAHinh4 = accounts[2]
		const tokenIdrX5iP4Q = BigInt("1991")
		const toAjOqrOt = accounts[4]
		const fromjsvWYY = accounts[5]
		const approvedQyYonWB = true
		const toKaZzaUT = accounts[4]
		await contractR8OzpWB.safeTransferFrom.call(from2wkTVJ, toAbtt30, tokenIdkCbaUs, _dataUoLVWDB, {from: "0x0000000000000000000000000000000000000001"});
		await contractR8OzpWB.approve.call(toBAHinh4, tokenIduwgdnQH, {from: accounts[4]});
		await contractR8OzpWB.transferFrom.call(fromjsvWYY, toAjOqrOt, tokenIdrX5iP4Q, {from: accounts[4]});
		await contractR8OzpWB.setApprovalForAll.call(toKaZzaUT, approvedQyYonWB, {from: accounts[0]});

		await expect(contractR8OzpWB.safeTransferFrom.call(from2wkTVJ, toAbtt30, tokenIdkCbaUs, _dataUoLVWDB, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractITmnZ9v = await ERC721.new({from: accounts[0]});
		const operatori6VJT2i = accounts[2]
		const ownerRGZSz7F = accounts[2]
		const tokenIdAShLoUw = BigInt("1150")
		const tofVhqCpe = accounts[4]
		const from143Yw3 = accounts[2]
		const nullOnM3X1u = await contractITmnZ9v.isApprovedForAll.call(ownerRGZSz7F, operatori6VJT2i, {from: accounts[3]});
		await contractITmnZ9v.safeTransferFrom.call(from143Yw3, tofVhqCpe, tokenIdAShLoUw, {from: accounts[4]});

		assert.equal(nullOnM3X1u, false)
		await expect(contractITmnZ9v.safeTransferFrom.call(from143Yw3, tofVhqCpe, tokenIdAShLoUw, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractiI4NsOb = await ERC721.new({from: accounts[1]});
		const tokenIdRc5GpZ9 = BigInt("1230")
		const tokenIdIsxxZ2m = BigInt("536")
		const nullECDxBAe = await contractiI4NsOb.getApproved.call(tokenIdRc5GpZ9, {from: accounts[2]});
		const nullesmSOJ = await contractiI4NsOb.ownerOf.call(tokenIdIsxxZ2m, {from: accounts[4]});

		await expect(contractiI4NsOb.getApproved.call(tokenIdRc5GpZ9, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractaayiOAi = await ERC721.new({from: accounts[3]});
		const approvedT2GZ78L = true
		const toIa3fQvT = "0x0000000000000000000000000000000000000001"
		const operatorwrGAarU = accounts[1]
		const ownerpd21NC9 = accounts[1]
		const tokenIdFzR67il = BigInt("416")
		const toNyIk1el = "0x0000000000000000000000000000000000000001"
		const fromCvOl2ST = accounts[0]
		await contractaayiOAi.setApprovalForAll.call(toIa3fQvT, approvedT2GZ78L, {from: accounts[0]});
		const nullhBTFvpa = await contractaayiOAi.isApprovedForAll.call(ownerpd21NC9, operatorwrGAarU, {from: accounts[5]});
		await contractaayiOAi.safeTransferFrom.call(fromCvOl2ST, toNyIk1el, tokenIdFzR67il, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(nullhBTFvpa, false)
		await expect(contractaayiOAi.isApprovedForAll.call(ownerpd21NC9, operatorwrGAarU, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractMUzB3K8 = await ERC721.new({from: "0x0000000000000000000000000000000000000001"});
		const approvedM3ZT11n = true
		const togqfKtB8 = accounts[2]
		const tokenIdu8zCGJE = BigInt("474")
		const toVZd7JO8 = "0x0000000000000000000000000000000000000001"
		const operatordW6AMqq = accounts[3]
		const ownerBtsboi = accounts[4]
		const _dataumQX1Ba = "0x040f0713"
		const tokenIdjhm9vW = BigInt("929")
		const tokarjA9H = accounts[4]
		const fromWkO8KKt = accounts[0]
		const tokenIdZyzZyZN = BigInt("643")
		await contractMUzB3K8.setApprovalForAll.call(togqfKtB8, approvedM3ZT11n, {from: accounts[0]});
		await contractMUzB3K8.approve.call(toVZd7JO8, tokenIdu8zCGJE, {from: accounts[2]});
		const nullHnhOwxS = await contractMUzB3K8.isApprovedForAll.call(ownerBtsboi, operatordW6AMqq, {from: accounts[5]});
		await contractMUzB3K8.safeTransferFrom.call(fromWkO8KKt, tokarjA9H, tokenIdjhm9vW, _dataumQX1Ba, {from: accounts[5]});
		const nulltJlyPyT = await contractMUzB3K8.ownerOf.call(tokenIdZyzZyZN, {from: accounts[0]});
	});

	it('test for ERC721', async () => {
		const contractFhEXWtv = await ERC721.new({from: accounts[1]});
		const ownerigQIJRG = accounts[0]
		const approvedapbDmKW = true
		const toYUbn69v = accounts[4]
		const tokenIddTc3sDo = BigInt("0")
		const totT4bcl2 = accounts[3]
		const nullpe8Bo3e = await contractFhEXWtv.balanceOf.call(ownerigQIJRG, {from: accounts[3]});
		await contractFhEXWtv.setApprovalForAll.call(toYUbn69v, approvedapbDmKW, {from: accounts[1]});
		await contractFhEXWtv.approve.call(totT4bcl2, tokenIddTc3sDo, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(nullpe8Bo3e, 0)
		await expect(contractFhEXWtv.setApprovalForAll.call(toYUbn69v, approvedapbDmKW, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractcPNDEt7 = await ERC721.new({from: accounts[1]});
		const approvedpZqUM44 = false
		const toFsYg1jn = accounts[0]
		const approvedCrPF1pC = false
		const to9jzfgt = accounts[0]
		const tokenIdiZRKFf2 = BigInt("827")
		const toruMVlwh = accounts[2]
		const fromZEBXu3z = "0x0000000000000000000000000000000000000001"
		const tokenIdxAJLh9t = BigInt("0")
		const toYiP7zIZ = accounts[2]
		await contractcPNDEt7.setApprovalForAll.call(toFsYg1jn, approvedpZqUM44, {from: accounts[0]});
		await contractcPNDEt7.setApprovalForAll.call(to9jzfgt, approvedCrPF1pC, {from: accounts[2]});
		await contractcPNDEt7.transferFrom.call(fromZEBXu3z, toruMVlwh, tokenIdiZRKFf2, {from: "0x0000000000000000000000000000000000000001"});
		await contractcPNDEt7.approve.call(toYiP7zIZ, tokenIdxAJLh9t, {from: "0x0000000000000000000000000000000000000001"});

		await expect(contractcPNDEt7.setApprovalForAll.call(toFsYg1jn, approvedpZqUM44, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})