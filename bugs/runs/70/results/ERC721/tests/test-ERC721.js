const ERC721 = artifacts.require("ERC721");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC721', (accounts) => {
	it('test for ERC721', async () => {
		const contractu7AOUI2 = await ERC721.new({from: accounts[1]});
		const tokenIdfdbLxBo = BigInt("238")
		const tokenIdAlgmngt = BigInt("653")
		const tokenIdg0iKWYQ = BigInt("1559")
		const toFeXHmpH = accounts[2]
		const fromM11klzW = accounts[3]
		const tokenIdsoPQv3Z = BigInt("2015")
		const toSyCigq = accounts[4]
		const fromOZ4CTFM = accounts[0]
		const _dataokDkFi = "0x05141e1106160b1c000f1a021100030614200a"
		const tokenIduNFLJRK = BigInt("214")
		const topnx2Nnt = accounts[2]
		const fromqtscXmP = accounts[1]
		const nullYvMYx0r = await contractu7AOUI2.getApproved.call(tokenIdfdbLxBo, {from: accounts[2]});
		const nullX6b7hv = await contractu7AOUI2.getApproved.call(tokenIdAlgmngt, {from: accounts[1]});
		await contractu7AOUI2.transferFrom.call(fromM11klzW, toFeXHmpH, tokenIdg0iKWYQ, {from: "0x0000000000000000000000000000000000000001"});
		await contractu7AOUI2.transferFrom.call(fromOZ4CTFM, toSyCigq, tokenIdsoPQv3Z, {from: accounts[2]});
		await contractu7AOUI2.safeTransferFrom.call(fromqtscXmP, topnx2Nnt, tokenIduNFLJRK, _dataokDkFi, {from: accounts[2]});

		await expect(contractu7AOUI2.getApproved.call(tokenIdfdbLxBo, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractgvd08hP = await ERC721.new({from: accounts[1]});
		const tokenIdP2824x = BigInt("1098")
		const toYLZApqX = accounts[1]
		const tokenIdIWnUCJe = BigInt("347")
		const totm01w6W = accounts[4]
		const fromYxZsI95 = accounts[0]
		const tokenIdeyyKs2a = BigInt("1552")
		const toYkZjDje = accounts[5]
		const fromlN2CLkM = accounts[0]
		const tokenIdKN6j4nZ = BigInt("1314")
		const toYgw5LfI = accounts[3]
		const fromEjuQYnw = accounts[2]
		await contractgvd08hP.approve.call(toYLZApqX, tokenIdP2824x, {from: accounts[2]});
		await contractgvd08hP.safeTransferFrom.call(fromYxZsI95, totm01w6W, tokenIdIWnUCJe, {from: accounts[3]});
		await contractgvd08hP.safeTransferFrom.call(fromlN2CLkM, toYkZjDje, tokenIdeyyKs2a, {from: accounts[3]});
		await contractgvd08hP.safeTransferFrom.call(fromEjuQYnw, toYgw5LfI, tokenIdKN6j4nZ, {from: accounts[3]});

		await expect(contractgvd08hP.approve.call(toYLZApqX, tokenIdP2824x, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractqQ8PGgL = await ERC721.new({from: accounts[3]});
		const tokenIdUdS5vDf = BigInt("1449")
		const topGzQPGH = accounts[1]
		const frommTnMkmX = accounts[5]
		const tokenIdOnhz4pu = BigInt("1687")
		const tokenIdmJWQKzu = BigInt("1045")
		const tocbYxtn3 = accounts[0]
		const fromv2njb0 = accounts[5]
		const tokenIdeGiUJGk = BigInt("350")
		await contractqQ8PGgL.transferFrom.call(frommTnMkmX, topGzQPGH, tokenIdUdS5vDf, {from: accounts[5]});
		const nullSLLqkrF = await contractqQ8PGgL.ownerOf.call(tokenIdOnhz4pu, {from: accounts[1]});
		await contractqQ8PGgL.safeTransferFrom.call(fromv2njb0, tocbYxtn3, tokenIdmJWQKzu, {from: accounts[5]});
		const nullFsKvRbP = await contractqQ8PGgL.ownerOf.call(tokenIdeGiUJGk, {from: accounts[3]});

		await expect(contractqQ8PGgL.transferFrom.call(frommTnMkmX, topGzQPGH, tokenIdUdS5vDf, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractGhiSLUt = await ERC721.new({from: accounts[3]});
		const tokenIdXL1Pxmz = BigInt("407")
		const toFBEzdho = accounts[3]
		const fromrBVj0X1 = accounts[4]
		const approvedskaXuL1 = true
		const toh03xobx = accounts[1]
		await contractGhiSLUt.safeTransferFrom.call(fromrBVj0X1, toFBEzdho, tokenIdXL1Pxmz, {from: accounts[0]});
		await contractGhiSLUt.setApprovalForAll.call(toh03xobx, approvedskaXuL1, {from: accounts[4]});

		await expect(contractGhiSLUt.safeTransferFrom.call(fromrBVj0X1, toFBEzdho, tokenIdXL1Pxmz, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractXwHjwYU = await ERC721.new({from: accounts[0]});
		const approvedPdP5FoK = false
		const tonemq6lY = accounts[3]
		const tokenIdJNkSlA = BigInt("1696")
		const tokenIdQE9Zije = BigInt("858")
		const tockrU6PN = accounts[0]
		const tokenIdZMbpT9N = BigInt("2040")
		const todhITyU = accounts[3]
		const fromWtHWMKb = accounts[3]
		await contractXwHjwYU.setApprovalForAll.call(tonemq6lY, approvedPdP5FoK, {from: accounts[4]});
		const nullo8zvxV = await contractXwHjwYU.ownerOf.call(tokenIdJNkSlA, {from: accounts[0]});
		await contractXwHjwYU.approve.call(tockrU6PN, tokenIdQE9Zije, {from: accounts[3]});
		await contractXwHjwYU.transferFrom.call(fromWtHWMKb, todhITyU, tokenIdZMbpT9N, {from: accounts[3]});

		await expect(contractXwHjwYU.setApprovalForAll.call(tonemq6lY, approvedPdP5FoK, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contracty4WHAE6 = await ERC721.new({from: accounts[1]});
		const ownerX2sFq50 = accounts[3]
		const _dataW9aGifo = "0x100b09100e111a18031c1b0b06131e010c14"
		const tokenIdBz41t8X = BigInt("523")
		const torUL97XN = accounts[4]
		const fromf7R4CbH = accounts[3]
		const tokenIdNsEfBLL = BigInt("1098")
		const toU2I71PE = accounts[1]
		const tokenIdFJZOKjk = BigInt("347")
		const touggS66X = accounts[5]
		const fromldP8jS0 = accounts[0]
		const tokenIdfSgcdYR = BigInt("1314")
		const toR7Dt9Mm = accounts[3]
		const fromKPd4ZpT = accounts[2]
		const null7IGXsb = await contracty4WHAE6.balanceOf.call(ownerX2sFq50, {from: "0x0000000000000000000000000000000000000001"});
		await contracty4WHAE6.safeTransferFrom.call(fromf7R4CbH, torUL97XN, tokenIdBz41t8X, _dataW9aGifo, {from: accounts[2]});
		await contracty4WHAE6.approve.call(toU2I71PE, tokenIdNsEfBLL, {from: accounts[2]});
		await contracty4WHAE6.safeTransferFrom.call(fromldP8jS0, touggS66X, tokenIdFJZOKjk, {from: accounts[3]});
		await contracty4WHAE6.safeTransferFrom.call(fromKPd4ZpT, toR7Dt9Mm, tokenIdfSgcdYR, {from: accounts[3]});

		assert.equal(null7IGXsb, 0)
		await expect(contracty4WHAE6.safeTransferFrom.call(fromf7R4CbH, torUL97XN, tokenIdBz41t8X, _dataW9aGifo, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contracti9MRA8d = await ERC721.new({from: accounts[4]});
		const operator74OIxY = accounts[2]
		const owneroBzpLEi = accounts[0]
		const tokenIdyXBKjaL = BigInt("225")
		const tokenIdXwdrUE = BigInt("1657")
		const toqFRtjei = accounts[1]
		const ownertuyledY = accounts[0]
		const tokenIdYlgo4Tc = BigInt("1152")
		const toALAEBfm = accounts[4]
		const fromvL7QRXm = "0x0000000000000000000000000000000000000001"
		const null1O35tj = await contracti9MRA8d.isApprovedForAll.call(owneroBzpLEi, operator74OIxY, {from: accounts[4]});
		const nullzUq5uFG = await contracti9MRA8d.ownerOf.call(tokenIdyXBKjaL, {from: accounts[5]});
		await contracti9MRA8d.approve.call(toqFRtjei, tokenIdXwdrUE, {from: accounts[3]});
		const nullhsJZtzU = await contracti9MRA8d.balanceOf.call(ownertuyledY, {from: accounts[3]});
		await contracti9MRA8d.transferFrom.call(fromvL7QRXm, toALAEBfm, tokenIdYlgo4Tc, {from: accounts[4]});

		assert.equal(null1O35tj, false)
		await expect(contracti9MRA8d.ownerOf.call(tokenIdyXBKjaL, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractMkiKPpr = await ERC721.new({from: "0x0000000000000000000000000000000000000001"});
		const tokenIdpSafyGG = BigInt("1672")
		const toyIRfHF = accounts[4]
		const fromMz58x6D = accounts[3]
		const operatorwlF60wI = accounts[1]
		const owneryK8amID = accounts[0]
		const tokenIdpFzHSoI = BigInt("2039")
		const tof2X7fop = "0x0000000000000000000000000000000000000001"
		const fromJnqWgI = accounts[5]
		const operator6XilD5 = accounts[1]
		const ownerSPcPmPU = accounts[1]
		const tokenIdTiaAK2P = BigInt("410")
		await contractMkiKPpr.transferFrom.call(fromMz58x6D, toyIRfHF, tokenIdpSafyGG, {from: accounts[3]});
		const nullBBLe5wl = await contractMkiKPpr.isApprovedForAll.call(owneryK8amID, operatorwlF60wI, {from: accounts[1]});
		await contractMkiKPpr.safeTransferFrom.call(fromJnqWgI, tof2X7fop, tokenIdpFzHSoI, {from: accounts[3]});
		const nullo4vOhZ = await contractMkiKPpr.isApprovedForAll.call(ownerSPcPmPU, operator6XilD5, {from: accounts[4]});
		const nullcy7OBxn = await contractMkiKPpr.getApproved.call(tokenIdTiaAK2P, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for ERC721', async () => {
		const contractIDe1OSw = await ERC721.new({from: accounts[0]});
		const approvednW7kRzj = false
		const tovpYQyNG = accounts[4]
		const tokenIdTsiVNO = BigInt("1696")
		const tokenIdGPB6T9J = BigInt("858")
		const toZsOwAih = accounts[0]
		const tokenIdxQP70TU = BigInt("2040")
		const tocn8kmm = accounts[3]
		const fromeliGC5j = accounts[3]
		await contractIDe1OSw.setApprovalForAll.call(tovpYQyNG, approvednW7kRzj, {from: accounts[4]});
		const nullt3LeQI = await contractIDe1OSw.ownerOf.call(tokenIdTsiVNO, {from: accounts[0]});
		await contractIDe1OSw.approve.call(toZsOwAih, tokenIdGPB6T9J, {from: accounts[3]});
		await contractIDe1OSw.transferFrom.call(fromeliGC5j, tocn8kmm, tokenIdxQP70TU, {from: accounts[3]});

		await expect(contractIDe1OSw.setApprovalForAll.call(tovpYQyNG, approvednW7kRzj, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})