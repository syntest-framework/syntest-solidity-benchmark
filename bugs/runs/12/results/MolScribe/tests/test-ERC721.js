const ERC721 = artifacts.require("ERC721");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC721', (accounts) => {
	it('test for ERC721', async () => {
		const contractbwDYltr = await ERC721.new({from: accounts[3]});
		const tokenIdfOsyotM = BigInt("1647")
		const toJHGCByA = "0x0000000000000000000000000000000000000001"
		const fromsleRdkN = accounts[4]
		const tokenIdSbc1Mkm = BigInt("1311")
		const toCU2SyHU = accounts[4]
		const fromn9qdcl0 = accounts[1]
		const tokenIdVRMVo4a = BigInt("1889")
		const toITT3kpA = accounts[2]
		const fromql3NgeO = "0x0000000000000000000000000000000000000001"
		await contractbwDYltr.safeTransferFrom.call(fromsleRdkN, toJHGCByA, tokenIdfOsyotM, {from: accounts[2]});
		await contractbwDYltr.safeTransferFrom.call(fromn9qdcl0, toCU2SyHU, tokenIdSbc1Mkm, {from: accounts[0]});
		await contractbwDYltr.safeTransferFrom.call(fromql3NgeO, toITT3kpA, tokenIdVRMVo4a, {from: accounts[0]});

		await expect(contractbwDYltr.safeTransferFrom.call(fromsleRdkN, toJHGCByA, tokenIdfOsyotM, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractAojOH3N = await ERC721.new({from: accounts[0]});
		const operatorkB4qt5 = accounts[2]
		const ownerLhnlBQ3 = accounts[5]
		const tokenIdCgZcD6 = BigInt("1788")
		const operatorzILQk0E = "0x0000000000000000000000000000000000000001"
		const ownernRQPvna = accounts[2]
		const operatoreolhciG = accounts[5]
		const ownertaBTUK9 = accounts[5]
		const tokenIdIzSzAeP = BigInt("1591")
		const tokenIdwe9uqip = BigInt("1258")
		const toDSj1yaG = accounts[0]
		const fromDJftrFf = accounts[2]
		const nullIBtDkZU = await contractAojOH3N.isApprovedForAll.call(ownerLhnlBQ3, operatorkB4qt5, {from: accounts[1]});
		const nullFJq3S27 = await contractAojOH3N.ownerOf.call(tokenIdCgZcD6, {from: accounts[0]});
		const nullR1uWdbj = await contractAojOH3N.isApprovedForAll.call(ownernRQPvna, operatorzILQk0E, {from: accounts[3]});
		const null1bZsOH = await contractAojOH3N.isApprovedForAll.call(ownertaBTUK9, operatoreolhciG, {from: "0x0000000000000000000000000000000000000001"});
		const nullLlTOhVE = await contractAojOH3N.getApproved.call(tokenIdIzSzAeP, {from: accounts[1]});
		await contractAojOH3N.safeTransferFrom.call(fromDJftrFf, toDSj1yaG, tokenIdwe9uqip, {from: accounts[4]});

		assert.equal(nullIBtDkZU, false)
		await expect(contractAojOH3N.ownerOf.call(tokenIdCgZcD6, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractcsdrpI = await ERC721.new({from: accounts[0]});
		const approvedvJmTMcw = true
		const tocZDpdeW = "0x0000000000000000000000000000000000000001"
		const ownerZC3ODZ = accounts[1]
		const tokenIddW4wkaX = BigInt("1549")
		const tokenIdLMdCY23 = BigInt("790")
		const toEMviA5d = accounts[1]
		const fromGEtz3dN = accounts[2]
		const _dataITouR7C = "0x15061718"
		const tokenIdQPNjrI = BigInt("67")
		const toAlzNY5G = accounts[3]
		const fromKTky6D = "0x0000000000000000000000000000000000000001"
		const tokenIdMNLQ0Zs = BigInt("1169")
		const tohMT1p0q = "0x0000000000000000000000000000000000000001"
		const fromb1NWxr8 = accounts[0]
		await contractcsdrpI.setApprovalForAll.call(tocZDpdeW, approvedvJmTMcw, {from: accounts[1]});
		const nullRAnKvnM = await contractcsdrpI.balanceOf.call(ownerZC3ODZ, {from: accounts[0]});
		const nullqjLZB0m = await contractcsdrpI.getApproved.call(tokenIddW4wkaX, {from: accounts[4]});
		await contractcsdrpI.safeTransferFrom.call(fromGEtz3dN, toEMviA5d, tokenIdLMdCY23, {from: "0x0000000000000000000000000000000000000001"});
		await contractcsdrpI.safeTransferFrom.call(fromKTky6D, toAlzNY5G, tokenIdQPNjrI, _dataITouR7C, {from: "0x0000000000000000000000000000000000000001"});
		await contractcsdrpI.safeTransferFrom.call(fromb1NWxr8, tohMT1p0q, tokenIdMNLQ0Zs, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(nullRAnKvnM, 0)
		await expect(contractcsdrpI.balanceOf.call(ownerZC3ODZ, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractqV3Pc2g = await ERC721.new({from: accounts[3]});
		const approvedQGZURFt = false
		const toFGLzTHu = accounts[4]
		const approvedtYB8GLS = false
		const toE5LPhiW = accounts[5]
		await contractqV3Pc2g.setApprovalForAll.call(toFGLzTHu, approvedQGZURFt, {from: accounts[3]});
		await contractqV3Pc2g.setApprovalForAll.call(toE5LPhiW, approvedtYB8GLS, {from: accounts[5]});

		await expect(contractqV3Pc2g.setApprovalForAll.call(toFGLzTHu, approvedQGZURFt, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractXCVWSqP = await ERC721.new({from: "0x0000000000000000000000000000000000000001"});
		const tokenIdbRrUhqJ = BigInt("970")
		const operatorxLri8IC = accounts[0]
		const ownerZ0o7Z2A = accounts[2]
		const operatorRKM6DWJ = accounts[4]
		const ownerna3wmWI = accounts[3]
		const tokenIdvQoFDoN = BigInt("1858")
		const nullbLVOxKN = await contractXCVWSqP.ownerOf.call(tokenIdbRrUhqJ, {from: accounts[3]});
		const nullsVoHieC = await contractXCVWSqP.isApprovedForAll.call(ownerZ0o7Z2A, operatorxLri8IC, {from: accounts[3]});
		const nullFNx7Ql2 = await contractXCVWSqP.isApprovedForAll.call(ownerna3wmWI, operatorRKM6DWJ, {from: accounts[5]});
		const nullY3EalkK = await contractXCVWSqP.ownerOf.call(tokenIdvQoFDoN, {from: accounts[1]});
	});
})