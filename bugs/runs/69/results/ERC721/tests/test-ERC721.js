const ERC721 = artifacts.require("ERC721");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC721', (accounts) => {
	it('test for ERC721', async () => {
		const contractqfVC3t3 = await ERC721.new({from: accounts[2]});
		const tokenIdkzbVX4H = BigInt("1648")
		const tooF5puuF = accounts[2]
		const fromOFEPJl2 = accounts[0]
		const tokenIdW0TyqZh = BigInt("34")
		const tokenIddt7zAYP = BigInt("368")
		const operatorNEaNM66 = accounts[0]
		const ownerE0LhFtJ = accounts[3]
		const _datamtzj5w = "0x1e130e02051d0b1f1b1311130e190f19030f090603081109200812"
		const tokenIdyiwCM7 = BigInt("1567")
		const toqV8H0VA = "0x0000000000000000000000000000000000000001"
		const fromcIfIYM = accounts[0]
		await contractqfVC3t3.safeTransferFrom.call(fromOFEPJl2, tooF5puuF, tokenIdkzbVX4H, {from: "0x0000000000000000000000000000000000000001"});
		const nulllL7u8A5 = await contractqfVC3t3.ownerOf.call(tokenIdW0TyqZh, {from: accounts[2]});
		const nullegq9I9Z = await contractqfVC3t3.ownerOf.call(tokenIddt7zAYP, {from: accounts[2]});
		const nulltYgFlru = await contractqfVC3t3.isApprovedForAll.call(ownerE0LhFtJ, operatorNEaNM66, {from: "0x0000000000000000000000000000000000000001"});
		await contractqfVC3t3.safeTransferFrom.call(fromcIfIYM, toqV8H0VA, tokenIdyiwCM7, _datamtzj5w, {from: accounts[4]});

		await expect(contractqfVC3t3.safeTransferFrom.call(fromOFEPJl2, tooF5puuF, tokenIdkzbVX4H, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractXaZaDcQ = await ERC721.new({from: accounts[1]});
		const ownerbThR5aL = accounts[3]
		const tokenIdKtm7WxK = BigInt("53")
		const toqW3b07X = accounts[3]
		const fromtdvV8Fp = accounts[1]
		const tokenIdhWzjl24 = BigInt("369")
		const tokenIdSKx2qBj = BigInt("1595")
		const toAIgntS = accounts[3]
		const frombfKGV6I = accounts[0]
		const approvedFGWaGkw = false
		const toNAYPhOc = "0x0000000000000000000000000000000000000001"
		const operatorwOcvfO = accounts[4]
		const ownerHRGkF2j = accounts[3]
		const nullcR2a57E = await contractXaZaDcQ.balanceOf.call(ownerbThR5aL, {from: accounts[2]});
		await contractXaZaDcQ.safeTransferFrom.call(fromtdvV8Fp, toqW3b07X, tokenIdKtm7WxK, {from: accounts[4]});
		const nullo9E2N8 = await contractXaZaDcQ.ownerOf.call(tokenIdhWzjl24, {from: accounts[1]});
		await contractXaZaDcQ.safeTransferFrom.call(frombfKGV6I, toAIgntS, tokenIdSKx2qBj, {from: "0x0000000000000000000000000000000000000001"});
		await contractXaZaDcQ.setApprovalForAll.call(toNAYPhOc, approvedFGWaGkw, {from: accounts[4]});
		const nullSCCAmp = await contractXaZaDcQ.isApprovedForAll.call(ownerHRGkF2j, operatorwOcvfO, {from: accounts[2]});

		assert.equal(nullcR2a57E, 0)
		await expect(contractXaZaDcQ.safeTransferFrom.call(fromtdvV8Fp, toqW3b07X, tokenIdKtm7WxK, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractspjgw75 = await ERC721.new({from: accounts[0]});
		const operatorptt37cy = accounts[3]
		const ownerUfUxwpP = "0x0000000000000000000000000000000000000001"
		const tokenIddpLq6PP = BigInt("1657")
		const ownerleOKXOr = accounts[5]
		const tokenIdgNXxGR0 = BigInt("1397")
		const tojxigCgc = accounts[1]
		const ownerS9b4AqM = accounts[5]
		const tokenIdIrO60wV = BigInt("1082")
		const toGuaMmSp = accounts[4]
		const nullCZvAeF = await contractspjgw75.isApprovedForAll.call(ownerUfUxwpP, operatorptt37cy, {from: accounts[0]});
		const nullHvG7RHi = await contractspjgw75.ownerOf.call(tokenIddpLq6PP, {from: accounts[2]});
		const nulln8XFY3 = await contractspjgw75.balanceOf.call(ownerleOKXOr, {from: accounts[1]});
		await contractspjgw75.approve.call(tojxigCgc, tokenIdgNXxGR0, {from: accounts[5]});
		const nullAQAs2P6 = await contractspjgw75.balanceOf.call(ownerS9b4AqM, {from: accounts[1]});
		await contractspjgw75.approve.call(toGuaMmSp, tokenIdIrO60wV, {from: accounts[5]});

		assert.equal(nullCZvAeF, false)
		await expect(contractspjgw75.ownerOf.call(tokenIddpLq6PP, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractGyfh9KO = await ERC721.new({from: accounts[1]});
		const approvedlBOGoDI = true
		const toohKEC1C = accounts[4]
		const tokenIdMbjEGpJ = BigInt("839")
		const approvedXSFJQ0V = true
		const toNMa0TUP = accounts[3]
		const ownerSKe1Edg = accounts[1]
		await contractGyfh9KO.setApprovalForAll.call(toohKEC1C, approvedlBOGoDI, {from: "0x0000000000000000000000000000000000000001"});
		const nullSgOUTTU = await contractGyfh9KO.ownerOf.call(tokenIdMbjEGpJ, {from: accounts[0]});
		await contractGyfh9KO.setApprovalForAll.call(toNMa0TUP, approvedXSFJQ0V, {from: accounts[1]});
		const nullZvdHiVG = await contractGyfh9KO.balanceOf.call(ownerSKe1Edg, {from: accounts[0]});

		await expect(contractGyfh9KO.setApprovalForAll.call(toohKEC1C, approvedlBOGoDI, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractNPy6GYr = await ERC721.new({from: "0x0000000000000000000000000000000000000001"});
		const operatorLOeUHrB = accounts[4]
		const ownercFnjqC = accounts[0]
		const tokenIdFocTSOR = BigInt("1756")
		const tokenIddiFzEEe = BigInt("165")
		const nullHP9q6SD = await contractNPy6GYr.isApprovedForAll.call(ownercFnjqC, operatorLOeUHrB, {from: accounts[0]});
		const nullcRCMapJ = await contractNPy6GYr.ownerOf.call(tokenIdFocTSOR, {from: accounts[5]});
		const nullHOBVxzq = await contractNPy6GYr.ownerOf.call(tokenIddiFzEEe, {from: accounts[3]});
	});

	it('test for ERC721', async () => {
		const contractAfZmeYs = await ERC721.new({from: accounts[0]});
		const tokenIdcXblU58 = BigInt("1610")
		const operatorDRgfe9v = accounts[1]
		const ownerwn70S7A = accounts[4]
		const operatorloIKgUp = accounts[2]
		const ownerzjwuMt = accounts[3]
		const _dataT0twLUC = "0x0e0b14080f0d1614010416061b0f0a1d010712111b0e0f091c"
		const tokenIdWbKhAkF = BigInt("121")
		const toC7aq0Wx = accounts[1]
		const fromhE9RzkN = accounts[4]
		const tokenIdWpjCrV8 = BigInt("2042")
		const nullgq01TMm = await contractAfZmeYs.getApproved.call(tokenIdcXblU58, {from: accounts[3]});
		const nulltyXIshC = await contractAfZmeYs.isApprovedForAll.call(ownerwn70S7A, operatorDRgfe9v, {from: accounts[3]});
		const nullUUCHxC4 = await contractAfZmeYs.isApprovedForAll.call(ownerzjwuMt, operatorloIKgUp, {from: accounts[2]});
		await contractAfZmeYs.safeTransferFrom.call(fromhE9RzkN, toC7aq0Wx, tokenIdWbKhAkF, _dataT0twLUC, {from: accounts[1]});
		const nullQ4Nbt8u = await contractAfZmeYs.ownerOf.call(tokenIdWpjCrV8, {from: accounts[0]});

		await expect(contractAfZmeYs.getApproved.call(tokenIdcXblU58, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractSLWnAW4 = await ERC721.new({from: accounts[2]});
		const approvedVle0Zwr = true
		const toRaLWr4i = accounts[4]
		const approvedHFUzQ1g = true
		const tooGvuaNd = accounts[2]
		const tokenIddWfboc = BigInt("207")
		const topxPFQbJ = accounts[3]
		await contractSLWnAW4.setApprovalForAll.call(toRaLWr4i, approvedVle0Zwr, {from: accounts[0]});
		await contractSLWnAW4.setApprovalForAll.call(tooGvuaNd, approvedHFUzQ1g, {from: accounts[1]});
		await contractSLWnAW4.approve.call(topxPFQbJ, tokenIddWfboc, {from: accounts[2]});

		await expect(contractSLWnAW4.setApprovalForAll.call(toRaLWr4i, approvedVle0Zwr, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractyHbNE0w = await ERC721.new({from: accounts[2]});
		const tokenIdpKlJKIV = BigInt("1204")
		const toP9Y28FT = "0x0000000000000000000000000000000000000001"
		const fromz4upsc = accounts[2]
		const approvedOvrZHjZ = false
		const tosD7lTbC = accounts[0]
		const approvedOPXKRJe = true
		const torzaD43W = accounts[2]
		await contractyHbNE0w.transferFrom.call(fromz4upsc, toP9Y28FT, tokenIdpKlJKIV, {from: accounts[3]});
		await contractyHbNE0w.setApprovalForAll.call(tosD7lTbC, approvedOvrZHjZ, {from: accounts[2]});
		await contractyHbNE0w.setApprovalForAll.call(torzaD43W, approvedOPXKRJe, {from: accounts[1]});

		await expect(contractyHbNE0w.transferFrom.call(fromz4upsc, toP9Y28FT, tokenIdpKlJKIV, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractXhCUnD2 = await ERC721.new({from: accounts[0]});
		const operatorJ9y58M = accounts[4]
		const ownerOktaHJZ = accounts[4]
		const operatorAsIQ0To = accounts[0]
		const ownerL21xqZ = accounts[0]
		const approvedtLtt30h = false
		const toEzlHyYj = accounts[2]
		const approvedpuC6xGb = true
		const torSPEGpd = accounts[1]
		const tokenIdNL4DiGK = BigInt("1993")
		const toBKmJ3LH = accounts[2]
		const approvedZx6yKWY = false
		const toemIKCa = accounts[2]
		const nullEBxXfSl = await contractXhCUnD2.isApprovedForAll.call(ownerOktaHJZ, operatorJ9y58M, {from: accounts[0]});
		const nullgieEwSx = await contractXhCUnD2.isApprovedForAll.call(ownerL21xqZ, operatorAsIQ0To, {from: accounts[1]});
		await contractXhCUnD2.setApprovalForAll.call(toEzlHyYj, approvedtLtt30h, {from: accounts[4]});
		await contractXhCUnD2.setApprovalForAll.call(torSPEGpd, approvedpuC6xGb, {from: accounts[1]});
		await contractXhCUnD2.approve.call(toBKmJ3LH, tokenIdNL4DiGK, {from: accounts[1]});
		await contractXhCUnD2.setApprovalForAll.call(toemIKCa, approvedZx6yKWY, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(nullEBxXfSl, false)
		assert.equal(nullgieEwSx, false)
		await expect(contractXhCUnD2.setApprovalForAll.call(toEzlHyYj, approvedtLtt30h, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})