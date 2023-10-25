const ERC721 = artifacts.require("ERC721");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC721', (accounts) => {
	it('test for ERC721', async () => {
		const contractwcq2OK = await ERC721.new({from: accounts[1]});
		const ownerBaJ5WvU = accounts[4]
		const operatorfFO4zE = accounts[0]
		const ownerfqVjyC7 = accounts[3]
		const tokenIdbLSiw3Y = BigInt("1124")
		const tozoSfP36 = accounts[3]
		const operatorOSM0PXw = accounts[3]
		const ownermaJIjBf = accounts[4]
		const tokenId5Pd6oR = BigInt("176")
		const nullvWTZ5HO = await contractwcq2OK.balanceOf.call(ownerBaJ5WvU, {from: accounts[2]});
		const nullCnY1SGE = await contractwcq2OK.isApprovedForAll.call(ownerfqVjyC7, operatorfFO4zE, {from: accounts[4]});
		await contractwcq2OK.approve.call(tozoSfP36, tokenIdbLSiw3Y, {from: accounts[1]});
		const nullDPbadQz = await contractwcq2OK.isApprovedForAll.call(ownermaJIjBf, operatorOSM0PXw, {from: accounts[1]});
		const nullWEGvPdK = await contractwcq2OK.ownerOf.call(tokenId5Pd6oR, {from: accounts[2]});

		assert.equal(nullCnY1SGE, false)
		assert.equal(nullvWTZ5HO, 0)
		await expect(contractwcq2OK.approve.call(tozoSfP36, tokenIdbLSiw3Y, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractdCVCwlF = await ERC721.new({from: accounts[2]});
		const approvedqDfSxW8 = false
		const toHOqAMsb = accounts[3]
		const operatorZnbOSBN = accounts[4]
		const ownerXemDipn = accounts[0]
		const tokenIdnP9qa7W = BigInt("1715")
		await contractdCVCwlF.setApprovalForAll.call(toHOqAMsb, approvedqDfSxW8, {from: accounts[3]});
		const nullJ7qj9UA = await contractdCVCwlF.isApprovedForAll.call(ownerXemDipn, operatorZnbOSBN, {from: accounts[0]});
		const nullnuJqe5w = await contractdCVCwlF.ownerOf.call(tokenIdnP9qa7W, {from: accounts[3]});

		await expect(contractdCVCwlF.setApprovalForAll.call(toHOqAMsb, approvedqDfSxW8, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractJJSi3cr = await ERC721.new({from: accounts[1]});
		const tokenIdfL7Dz8j = BigInt("1734")
		const toQ0dSYsV = accounts[2]
		const fromHM6CLE = accounts[4]
		const tokenIdS68Gbsb = BigInt("1189")
		const toxdpFS8M = accounts[2]
		const fromuegbPg = accounts[3]
		const _datavZXzSoX = "0x1818041a1c0a180b17021e"
		const tokenIdO7Wh11T = BigInt("942")
		const toHPH27R = accounts[1]
		const from3RhBk8 = accounts[0]
		const tokenIdekhzwtC = BigInt("1012")
		const tomHQZvb = accounts[3]
		const fromp7WAQOc = "0x0000000000000000000000000000000000000001"
		await contractJJSi3cr.safeTransferFrom.call(fromHM6CLE, toQ0dSYsV, tokenIdfL7Dz8j, {from: "0x0000000000000000000000000000000000000001"});
		await contractJJSi3cr.transferFrom.call(fromuegbPg, toxdpFS8M, tokenIdS68Gbsb, {from: accounts[1]});
		await contractJJSi3cr.safeTransferFrom.call(from3RhBk8, toHPH27R, tokenIdO7Wh11T, _datavZXzSoX, {from: accounts[1]});
		await contractJJSi3cr.safeTransferFrom.call(fromp7WAQOc, tomHQZvb, tokenIdekhzwtC, {from: accounts[4]});

		await expect(contractJJSi3cr.safeTransferFrom.call(fromHM6CLE, toQ0dSYsV, tokenIdfL7Dz8j, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractPQ2xBGx = await ERC721.new({from: accounts[3]});
		const tokenIdqgguBti = BigInt("1163")
		const tokenIdvhpaBYf = BigInt("1952")
		const toaRkYrBl = accounts[4]
		const fromc9VRXI = accounts[3]
		const operatoruZ4haE4 = accounts[3]
		const owner2xnIBi = accounts[5]
		const tokenIdpjgMF1w = BigInt("626")
		const operatorMeqfjAz = accounts[0]
		const ownerQA6FwGR = accounts[1]
		const nullnq2gbq = await contractPQ2xBGx.getApproved.call(tokenIdqgguBti, {from: accounts[0]});
		await contractPQ2xBGx.safeTransferFrom.call(fromc9VRXI, toaRkYrBl, tokenIdvhpaBYf, {from: "0x0000000000000000000000000000000000000001"});
		const nullIfDHnz = await contractPQ2xBGx.isApprovedForAll.call(owner2xnIBi, operatoruZ4haE4, {from: accounts[3]});
		const nullVerA9LG = await contractPQ2xBGx.ownerOf.call(tokenIdpjgMF1w, {from: accounts[3]});
		const nullAZKwYUl = await contractPQ2xBGx.isApprovedForAll.call(ownerQA6FwGR, operatorMeqfjAz, {from: accounts[1]});

		await expect(contractPQ2xBGx.getApproved.call(tokenIdqgguBti, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractq2rQvcr = await ERC721.new({from: "0x0000000000000000000000000000000000000001"});
		const tokenIdFFmhkhG = BigInt("267")
		const toRsdbYkr = accounts[4]
		const fromiuGxcHm = accounts[2]
		const tokenIdw9qodTf = BigInt("380")
		const tomsb1yNP = "0x0000000000000000000000000000000000000001"
		await contractq2rQvcr.safeTransferFrom.call(fromiuGxcHm, toRsdbYkr, tokenIdFFmhkhG, {from: accounts[1]});
		await contractq2rQvcr.approve.call(tomsb1yNP, tokenIdw9qodTf, {from: accounts[4]});
	});

	it('test for ERC721', async () => {
		const contractMZJ4UN = await ERC721.new({from: accounts[0]});
		const tokenIdSvwJox = BigInt("1049")
		const toJ0PEPZH = accounts[2]
		const fromT73sVgZ = accounts[4]
		const operator8XCWNQ = accounts[3]
		const ownern7DdbAO = "0x0000000000000000000000000000000000000001"
		const tokenIdA1JdYwf = BigInt("1404")
		const tokenIdzojY329 = BigInt("1795")
		const toigFl3jE = accounts[2]
		const fromU8prxWC = accounts[3]
		const tokenIdWgIxh4X = BigInt("1206")
		const toRipWHi7 = accounts[2]
		await contractMZJ4UN.transferFrom.call(fromT73sVgZ, toJ0PEPZH, tokenIdSvwJox, {from: accounts[4]});
		const nullXeIYetP = await contractMZJ4UN.isApprovedForAll.call(ownern7DdbAO, operator8XCWNQ, {from: accounts[3]});
		const nullazqHQRQ = await contractMZJ4UN.ownerOf.call(tokenIdA1JdYwf, {from: accounts[4]});
		await contractMZJ4UN.transferFrom.call(fromU8prxWC, toigFl3jE, tokenIdzojY329, {from: accounts[4]});
		await contractMZJ4UN.approve.call(toRipWHi7, tokenIdWgIxh4X, {from: accounts[0]});

		await expect(contractMZJ4UN.transferFrom.call(fromT73sVgZ, toJ0PEPZH, tokenIdSvwJox, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})