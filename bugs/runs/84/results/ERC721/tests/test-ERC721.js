const ERC721 = artifacts.require("ERC721");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC721', (accounts) => {
	it('test for ERC721', async () => {
		const contractk3qqiYZ = await ERC721.new({from: accounts[2]});
		const approvedoQ0gerI = false
		const togiSvIJy = accounts[4]
		const tokenIdVoeS0d = BigInt("1491")
		const toD9odjW0 = accounts[0]
		const fromEMj6jl = accounts[1]
		const tokenIdxJ9ywqN = BigInt("801")
		const toOfNhMdX = accounts[4]
		const fromIioxAZ4 = accounts[1]
		const tokenIdW4bcnAB = BigInt("251")
		const toy4stUvf = accounts[3]
		const tokenIdSJGlugo = BigInt("1026")
		const toe07Ugna = accounts[0]
		const fromXJxPGsM = accounts[3]
		const tokenIdrsW9DZw = BigInt("553")
		const toQyUYXl9 = accounts[2]
		const fromRing8cT = accounts[4]
		await contractk3qqiYZ.setApprovalForAll.call(togiSvIJy, approvedoQ0gerI, {from: accounts[4]});
		await contractk3qqiYZ.safeTransferFrom.call(fromEMj6jl, toD9odjW0, tokenIdVoeS0d, {from: accounts[1]});
		await contractk3qqiYZ.transferFrom.call(fromIioxAZ4, toOfNhMdX, tokenIdxJ9ywqN, {from: accounts[2]});
		await contractk3qqiYZ.approve.call(toy4stUvf, tokenIdW4bcnAB, {from: accounts[5]});
		await contractk3qqiYZ.safeTransferFrom.call(fromXJxPGsM, toe07Ugna, tokenIdSJGlugo, {from: accounts[3]});
		await contractk3qqiYZ.safeTransferFrom.call(fromRing8cT, toQyUYXl9, tokenIdrsW9DZw, {from: accounts[3]});

		await expect(contractk3qqiYZ.setApprovalForAll.call(togiSvIJy, approvedoQ0gerI, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractbHYesss = await ERC721.new({from: accounts[4]});
		const tokenIdmFCSp3D = BigInt("1543")
		const toV1ECqgE = "0x0000000000000000000000000000000000000001"
		const fromYXixcvf = "0x0000000000000000000000000000000000000001"
		const tokenIdMUzMY8 = BigInt("444")
		const tokenIdx2GE7hL = BigInt("485")
		const toJFluHj = accounts[3]
		const fromfWkjiJK = accounts[2]
		await contractbHYesss.safeTransferFrom.call(fromYXixcvf, toV1ECqgE, tokenIdmFCSp3D, {from: accounts[4]});
		const nullZirDKH = await contractbHYesss.getApproved.call(tokenIdMUzMY8, {from: accounts[0]});
		await contractbHYesss.transferFrom.call(fromfWkjiJK, toJFluHj, tokenIdx2GE7hL, {from: accounts[1]});

		await expect(contractbHYesss.safeTransferFrom.call(fromYXixcvf, toV1ECqgE, tokenIdmFCSp3D, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractKEZsaN2 = await ERC721.new({from: accounts[5]});
		const approvedtACgkkk = true
		const toqX5g2JU = accounts[4]
		const tokenIdNFnIMqq = BigInt("959")
		const operatorv8gfOtE = accounts[2]
		const ownergbSMei = accounts[4]
		const tokenIdiV7vTj = BigInt("1294")
		const tokkSl0si = accounts[2]
		const from2fsR5u = accounts[3]
		const tokenIdSJI7MQz = BigInt("249")
		await contractKEZsaN2.setApprovalForAll.call(toqX5g2JU, approvedtACgkkk, {from: "0x0000000000000000000000000000000000000001"});
		const nullfdtfg91 = await contractKEZsaN2.getApproved.call(tokenIdNFnIMqq, {from: accounts[2]});
		const nullIaV5iZ = await contractKEZsaN2.isApprovedForAll.call(ownergbSMei, operatorv8gfOtE, {from: accounts[2]});
		await contractKEZsaN2.transferFrom.call(from2fsR5u, tokkSl0si, tokenIdiV7vTj, {from: accounts[3]});
		const nullTn74ujW = await contractKEZsaN2.ownerOf.call(tokenIdSJI7MQz, {from: accounts[1]});

		await expect(contractKEZsaN2.setApprovalForAll.call(toqX5g2JU, approvedtACgkkk, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractclV5lqc = await ERC721.new({from: "0x0000000000000000000000000000000000000001"});
		const tokenIdk2m2cMq = BigInt("1670")
		const toqmyQr5L = accounts[0]
		const from2ciRZ9 = "0x0000000000000000000000000000000000000001"
		const tokenIdBonTjE9 = BigInt("37")
		const approvedxj1V53 = true
		const to4hPX4g = accounts[1]
		const tokenIdrcGwJFB = BigInt("298")
		const toJTL0hkO = accounts[4]
		const fromJraLbKG = accounts[1]
		await contractclV5lqc.transferFrom.call(from2ciRZ9, toqmyQr5L, tokenIdk2m2cMq, {from: accounts[4]});
		const nullRpOsGII = await contractclV5lqc.getApproved.call(tokenIdBonTjE9, {from: accounts[2]});
		await contractclV5lqc.setApprovalForAll.call(to4hPX4g, approvedxj1V53, {from: accounts[3]});
		await contractclV5lqc.transferFrom.call(fromJraLbKG, toJTL0hkO, tokenIdrcGwJFB, {from: accounts[4]});
	});

	it('test for ERC721', async () => {
		const contractmzayIH = await ERC721.new({from: accounts[3]});
		const tokenIdRteBjbE = BigInt("333")
		const toarzU0G9 = accounts[5]
		const tokenIdu4xYEXU = BigInt("919")
		const to2P6ka5 = accounts[4]
		const fromMMAJl5l = accounts[2]
		const tokenIdZr3A3JX = BigInt("1671")
		const tondOkSEh = accounts[4]
		const fromSCqQpZe = accounts[1]
		await contractmzayIH.approve.call(toarzU0G9, tokenIdRteBjbE, {from: accounts[0]});
		await contractmzayIH.safeTransferFrom.call(fromMMAJl5l, to2P6ka5, tokenIdu4xYEXU, {from: accounts[3]});
		await contractmzayIH.transferFrom.call(fromSCqQpZe, tondOkSEh, tokenIdZr3A3JX, {from: accounts[1]});

		await expect(contractmzayIH.approve.call(toarzU0G9, tokenIdRteBjbE, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractlzejpGU = await ERC721.new({from: accounts[4]});
		const tokenIdHH3horQ = BigInt("440")
		const toAy5L7oS = accounts[2]
		const fromSTYJmK = accounts[2]
		const tokenIdUzgcG8c = BigInt("1862")
		const torHmKS9n = accounts[2]
		const ownerpjwInge = accounts[2]
		await contractlzejpGU.transferFrom.call(fromSTYJmK, toAy5L7oS, tokenIdHH3horQ, {from: accounts[3]});
		await contractlzejpGU.approve.call(torHmKS9n, tokenIdUzgcG8c, {from: accounts[4]});
		const nullSrmA5UK = await contractlzejpGU.balanceOf.call(ownerpjwInge, {from: accounts[1]});

		await expect(contractlzejpGU.transferFrom.call(fromSTYJmK, toAy5L7oS, tokenIdHH3horQ, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractMjP0cN = await ERC721.new({from: accounts[1]});
		const ownerWKfMRjk = accounts[3]
		const tokenIdNFttV0d = BigInt("1654")
		const toryo5keB = accounts[3]
		const fromSYiRKn1 = accounts[5]
		const tokenIdU3ZG9Lm = BigInt("891")
		const toWv6Z7o7 = accounts[5]
		const fromVzFth0c = accounts[5]
		const approvedkcC8spq = true
		const toKIPdLKQ = accounts[4]
		const tokenIdJDPJsP0 = BigInt("1387")
		const toXuc69Xv = accounts[4]
		const fromnn7NTPv = accounts[1]
		const nullZQ8nluM = await contractMjP0cN.balanceOf.call(ownerWKfMRjk, {from: accounts[2]});
		await contractMjP0cN.transferFrom.call(fromSYiRKn1, toryo5keB, tokenIdNFttV0d, {from: accounts[5]});
		await contractMjP0cN.safeTransferFrom.call(fromVzFth0c, toWv6Z7o7, tokenIdU3ZG9Lm, {from: accounts[1]});
		await contractMjP0cN.setApprovalForAll.call(toKIPdLKQ, approvedkcC8spq, {from: accounts[4]});
		await contractMjP0cN.safeTransferFrom.call(fromnn7NTPv, toXuc69Xv, tokenIdJDPJsP0, {from: accounts[2]});

		assert.equal(nullZQ8nluM, 0)
		await expect(contractMjP0cN.transferFrom.call(fromSYiRKn1, toryo5keB, tokenIdNFttV0d, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contract8SvCCR = await ERC721.new({from: accounts[1]});
		const operatorBYtuDlI = accounts[0]
		const owneromHhsmb = accounts[4]
		const operatorzo897D0 = accounts[1]
		const owneruCr7AFr = accounts[5]
		const tokenIdzUVZcT9 = BigInt("929")
		const toiS114PS = accounts[4]
		const nullDVof7D = await contract8SvCCR.isApprovedForAll.call(owneromHhsmb, operatorBYtuDlI, {from: accounts[1]});
		const nullDjxKqzx = await contract8SvCCR.isApprovedForAll.call(owneruCr7AFr, operatorzo897D0, {from: accounts[0]});
		await contract8SvCCR.approve.call(toiS114PS, tokenIdzUVZcT9, {from: accounts[2]});

		assert.equal(nullDVof7D, false)
		assert.equal(nullDjxKqzx, false)
		await expect(contract8SvCCR.approve.call(toiS114PS, tokenIdzUVZcT9, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})