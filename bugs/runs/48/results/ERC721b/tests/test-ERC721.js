const ERC721 = artifacts.require("ERC721");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC721', (accounts) => {
	it('test for ERC721', async () => {
		const contractgejhjEP = await ERC721.new({from: accounts[0]});
		const tokenIdNB7st63 = BigInt("1541")
		const toI9xW90x = accounts[3]
		const fromzvzMgRu = accounts[2]
		const approvedOmfE4MN = true
		const toQHkpaSb = accounts[4]
		const tokenIdiGhJ6Gb = BigInt("1092")
		const toutlPCh = accounts[2]
		const froml13ac8j = accounts[2]
		const operatorby5xTWz = accounts[3]
		const ownerffWrhrV = "0x0000000000000000000000000000000000000001"
		await contractgejhjEP.safeTransferFrom.call(fromzvzMgRu, toI9xW90x, tokenIdNB7st63, {from: "0x0000000000000000000000000000000000000001"});
		await contractgejhjEP.setApprovalForAll.call(toQHkpaSb, approvedOmfE4MN, {from: accounts[4]});
		await contractgejhjEP.safeTransferFrom.call(froml13ac8j, toutlPCh, tokenIdiGhJ6Gb, {from: accounts[0]});
		const nulliuOt4SO = await contractgejhjEP.isApprovedForAll.call(ownerffWrhrV, operatorby5xTWz, {from: accounts[1]});

		await expect(contractgejhjEP.safeTransferFrom.call(fromzvzMgRu, toI9xW90x, tokenIdNB7st63, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractlnwfr55 = await ERC721.new({from: accounts[2]});
		const approvedzrl6y6n = true
		const toVsTatrn = accounts[0]
		const operator6qDFtM = accounts[1]
		const ownerXGYpyRG = accounts[4]
		const tokenIdQqU7RZT = BigInt("632")
		const toRcO2FPU = accounts[2]
		const frombbVhYpP = accounts[3]
		await contractlnwfr55.setApprovalForAll.call(toVsTatrn, approvedzrl6y6n, {from: accounts[4]});
		const nullbZQjQ2D = await contractlnwfr55.isApprovedForAll.call(ownerXGYpyRG, operator6qDFtM, {from: accounts[0]});
		await contractlnwfr55.transferFrom.call(frombbVhYpP, toRcO2FPU, tokenIdQqU7RZT, {from: accounts[3]});

		assert.equal(nullbZQjQ2D, false)
		await expect(contractlnwfr55.isApprovedForAll.call(ownerXGYpyRG, operator6qDFtM, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractW6PDkGW = await ERC721.new({from: accounts[4]});
		const approvedQtJRHZW = true
		const top35Cc3j = "0x0000000000000000000000000000000000000001"
		const approveddk9jk32 = true
		const toTrFREwR = accounts[2]
		const approvedRGmVE1Z = true
		const tocmJ1pMr = accounts[2]
		await contractW6PDkGW.setApprovalForAll.call(top35Cc3j, approvedQtJRHZW, {from: accounts[3]});
		await contractW6PDkGW.setApprovalForAll.call(toTrFREwR, approveddk9jk32, {from: accounts[4]});
		await contractW6PDkGW.setApprovalForAll.call(tocmJ1pMr, approvedRGmVE1Z, {from: accounts[2]});

		await expect(contractW6PDkGW.setApprovalForAll.call(top35Cc3j, approvedQtJRHZW, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractJXR7PrG = await ERC721.new({from: accounts[4]});
		const tokenIdFxR4twR = BigInt("1715")
		const tokenIdImHPCon = BigInt("1076")
		const toLE0WRAV = accounts[3]
		const fromeZ87gyV = accounts[2]
		const approvedXUNsyxZ = true
		const too62u6Ow = accounts[1]
		const tokenIdEgHEy1s = BigInt("1598")
		const toYytImbA = accounts[1]
		const null2VpUzM = await contractJXR7PrG.getApproved.call(tokenIdFxR4twR, {from: accounts[4]});
		await contractJXR7PrG.safeTransferFrom.call(fromeZ87gyV, toLE0WRAV, tokenIdImHPCon, {from: accounts[2]});
		await contractJXR7PrG.setApprovalForAll.call(too62u6Ow, approvedXUNsyxZ, {from: accounts[4]});
		await contractJXR7PrG.approve.call(toYytImbA, tokenIdEgHEy1s, {from: accounts[2]});

		await expect(contractJXR7PrG.getApproved.call(tokenIdFxR4twR, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractHc63rhe = await ERC721.new({from: accounts[1]});
		const approvedC6slDOD = false
		const toc4YSlz6 = accounts[4]
		const tokenIdZQLbg4k = BigInt("292")
		const operatorTwZaoMF = "0x0000000000000000000000000000000000000001"
		const ownerjmRQdKF = accounts[2]
		await contractHc63rhe.setApprovalForAll.call(toc4YSlz6, approvedC6slDOD, {from: "0x0000000000000000000000000000000000000001"});
		const nullXSylMk6 = await contractHc63rhe.ownerOf.call(tokenIdZQLbg4k, {from: "0x0000000000000000000000000000000000000001"});
		const nullhysnOP9 = await contractHc63rhe.isApprovedForAll.call(ownerjmRQdKF, operatorTwZaoMF, {from: accounts[1]});

		await expect(contractHc63rhe.setApprovalForAll.call(toc4YSlz6, approvedC6slDOD, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractE8EY2y9 = await ERC721.new({from: accounts[1]});
		const tokenIdfDgGvnQ = BigInt("442")
		const toFcgYWuA = accounts[2]
		const tokenIdWKrNCqR = BigInt("1274")
		const approvedtL9PGfW = true
		const toFX9OTIh = accounts[4]
		const tokenIdrLBnqvE = BigInt("1163")
		const toGHJ15RP = accounts[0]
		const approvedwnFyEu = true
		const toNpyeXnK = accounts[5]
		const tokenIdPvEUOL8 = BigInt("385")
		const toGFw4U8h = accounts[2]
		const fromOEdECkZ = accounts[4]
		await contractE8EY2y9.approve.call(toFcgYWuA, tokenIdfDgGvnQ, {from: accounts[4]});
		const nullzkjCJ7W = await contractE8EY2y9.ownerOf.call(tokenIdWKrNCqR, {from: accounts[0]});
		await contractE8EY2y9.setApprovalForAll.call(toFX9OTIh, approvedtL9PGfW, {from: accounts[4]});
		await contractE8EY2y9.approve.call(toGHJ15RP, tokenIdrLBnqvE, {from: accounts[2]});
		await contractE8EY2y9.setApprovalForAll.call(toNpyeXnK, approvedwnFyEu, {from: accounts[3]});
		await contractE8EY2y9.safeTransferFrom.call(fromOEdECkZ, toGFw4U8h, tokenIdPvEUOL8, {from: accounts[3]});

		await expect(contractE8EY2y9.approve.call(toFcgYWuA, tokenIdfDgGvnQ, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractlcNU4r2 = await ERC721.new({from: accounts[2]});
		const approvedJcZwfqy = true
		const towvNBW19 = accounts[0]
		const ownerrJhYmej = accounts[4]
		const tokenIdpwkbBLV = BigInt("632")
		const toweKGua = accounts[3]
		const fromjcmo9L = accounts[3]
		await contractlcNU4r2.setApprovalForAll.call(towvNBW19, approvedJcZwfqy, {from: accounts[4]});
		const nullCRCa2be = await contractlcNU4r2.balanceOf.call(ownerrJhYmej, {from: accounts[2]});
		await contractlcNU4r2.transferFrom.call(fromjcmo9L, toweKGua, tokenIdpwkbBLV, {from: accounts[3]});

		assert.equal(nullCRCa2be, 0)
		await expect(contractlcNU4r2.balanceOf.call(ownerrJhYmej, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractkfpfWCs = await ERC721.new({from: "0x0000000000000000000000000000000000000001"});
		const ownersIzvi0K = accounts[1]
		const tokenIdxrjOtam = BigInt("1971")
		const toOFLFmCe = accounts[3]
		const tokenIdb9mzLyW = BigInt("129")
		const toSOpThMu = accounts[4]
		const fromZ7yDJxO = accounts[0]
		const tokenIdhm2NrQL = BigInt("1902")
		const toRg7gTWj = accounts[1]
		const fromJU2p0a4 = accounts[1]
		const nulleFN4FMi = await contractkfpfWCs.balanceOf.call(ownersIzvi0K, {from: accounts[1]});
		await contractkfpfWCs.approve.call(toOFLFmCe, tokenIdxrjOtam, {from: accounts[4]});
		await contractkfpfWCs.safeTransferFrom.call(fromZ7yDJxO, toSOpThMu, tokenIdb9mzLyW, {from: accounts[1]});
		await contractkfpfWCs.safeTransferFrom.call(fromJU2p0a4, toRg7gTWj, tokenIdhm2NrQL, {from: accounts[2]});
	});
})