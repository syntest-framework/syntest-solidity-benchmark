const ERC721 = artifacts.require("ERC721");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC721', (accounts) => {
	it('test for ERC721', async () => {
		const contractL1nQA40 = await ERC721.new({from: accounts[0]});
		const tokenIdveErAE3 = BigInt("1349")
		const tokenIdYfuZWxG = BigInt("931")
		const tosIxibyP = accounts[2]
		const fromcoA1rP1 = accounts[2]
		const nullJluBmxa = await contractL1nQA40.ownerOf.call(tokenIdveErAE3, {from: accounts[1]});
		await contractL1nQA40.transferFrom.call(fromcoA1rP1, tosIxibyP, tokenIdYfuZWxG, {from: accounts[3]});

		await expect(contractL1nQA40.ownerOf.call(tokenIdveErAE3, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractVGpJzKX = await ERC721.new({from: accounts[1]});
		const tokenIdFN5EsUZ = BigInt("506")
		const totJHyYEr = accounts[2]
		const fromLdCYlQE = accounts[2]
		const tokenIdfbJmvaD = BigInt("1500")
		const toMOE6iGg = "0x0000000000000000000000000000000000000001"
		const fromAcmXYzD = accounts[5]
		const approvedsNJyH8u = true
		const tohp4vkk0 = accounts[1]
		const tokenIdtnXjP1f = BigInt("1551")
		const toYsgPrF2 = accounts[0]
		const fromksVgWRZ = accounts[3]
		await contractVGpJzKX.transferFrom.call(fromLdCYlQE, totJHyYEr, tokenIdFN5EsUZ, {from: accounts[0]});
		await contractVGpJzKX.transferFrom.call(fromAcmXYzD, toMOE6iGg, tokenIdfbJmvaD, {from: accounts[0]});
		await contractVGpJzKX.setApprovalForAll.call(tohp4vkk0, approvedsNJyH8u, {from: accounts[3]});
		await contractVGpJzKX.transferFrom.call(fromksVgWRZ, toYsgPrF2, tokenIdtnXjP1f, {from: accounts[1]});

		await expect(contractVGpJzKX.transferFrom.call(fromLdCYlQE, totJHyYEr, tokenIdFN5EsUZ, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractSTzYRNH = await ERC721.new({from: accounts[1]});
		const tokenIdGqayjeT = BigInt("1417")
		const tokenIdwPPRV7V = BigInt("59")
		const toKFEoBkn = accounts[4]
		const tokenIdfqYRjry = BigInt("41")
		const nullmqaQ7C5 = await contractSTzYRNH.getApproved.call(tokenIdGqayjeT, {from: accounts[2]});
		await contractSTzYRNH.approve.call(toKFEoBkn, tokenIdwPPRV7V, {from: accounts[0]});
		const nullLxf06Mv = await contractSTzYRNH.getApproved.call(tokenIdfqYRjry, {from: accounts[2]});

		await expect(contractSTzYRNH.getApproved.call(tokenIdGqayjeT, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractZZ9rQVw = await ERC721.new({from: accounts[0]});
		const approvedwYkVrbw = false
		const topH73gd3 = accounts[2]
		const ownerGOCjsY2 = accounts[0]
		const tokenIdpXAuLEL = BigInt("1330")
		const tokenIdC2S50T3 = BigInt("574")
		const tokenIdEMOgWSd = BigInt("244")
		await contractZZ9rQVw.setApprovalForAll.call(topH73gd3, approvedwYkVrbw, {from: accounts[2]});
		const nulljGZU2Ei = await contractZZ9rQVw.balanceOf.call(ownerGOCjsY2, {from: "0x0000000000000000000000000000000000000001"});
		const nulloQF8SW = await contractZZ9rQVw.ownerOf.call(tokenIdpXAuLEL, {from: accounts[1]});
		const nullvCjADw6 = await contractZZ9rQVw.ownerOf.call(tokenIdC2S50T3, {from: accounts[2]});
		const nullXK8kkgw = await contractZZ9rQVw.ownerOf.call(tokenIdEMOgWSd, {from: accounts[4]});

		await expect(contractZZ9rQVw.setApprovalForAll.call(topH73gd3, approvedwYkVrbw, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractC42QOS0 = await ERC721.new({from: "0x0000000000000000000000000000000000000001"});
		const tokenId65gu1L = BigInt("888")
		const toKdrUebY = accounts[1]
		const fromb9auvTc = accounts[3]
		const approvedHaotmwT = true
		const tog8rj5BZ = accounts[2]
		const tokenIdysQPWg = BigInt("438")
		const toaimWol = accounts[4]
		const approvedmfoudJF = true
		const toVg7ALg = "0x0000000000000000000000000000000000000001"
		const tokenIdNlZBsV0 = BigInt("606")
		const toFiGpgQx = accounts[0]
		const fromEGyYehL = accounts[5]
		await contractC42QOS0.safeTransferFrom.call(fromb9auvTc, toKdrUebY, tokenId65gu1L, {from: accounts[4]});
		await contractC42QOS0.setApprovalForAll.call(tog8rj5BZ, approvedHaotmwT, {from: accounts[5]});
		await contractC42QOS0.approve.call(toaimWol, tokenIdysQPWg, {from: accounts[3]});
		await contractC42QOS0.setApprovalForAll.call(toVg7ALg, approvedmfoudJF, {from: accounts[1]});
		await contractC42QOS0.transferFrom.call(fromEGyYehL, toFiGpgQx, tokenIdNlZBsV0, {from: accounts[5]});
	});
})