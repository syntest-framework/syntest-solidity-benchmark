const ERC721 = artifacts.require("ERC721");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC721', (accounts) => {
	it('test for ERC721', async () => {
		const contractaSJlau5 = await ERC721.new({from: accounts[0]});
		const operatorIj7lyzd = accounts[1]
		const ownerxJoSBaq = accounts[2]
		const tokenIdAHE2WJe = BigInt("732")
		const tokenIdJ0DlkEA = BigInt("1096")
		const toxssDLwB = accounts[2]
		const operatorcGxksi = accounts[0]
		const ownerBYDfsyR = "0x0000000000000000000000000000000000000001"
		const nulljcInr3 = await contractaSJlau5.isApprovedForAll.call(ownerxJoSBaq, operatorIj7lyzd, {from: accounts[3]});
		const nulliYugmAA = await contractaSJlau5.ownerOf.call(tokenIdAHE2WJe, {from: accounts[3]});
		await contractaSJlau5.approve.call(toxssDLwB, tokenIdJ0DlkEA, {from: accounts[2]});
		const nullkBtWSox = await contractaSJlau5.isApprovedForAll.call(ownerBYDfsyR, operatorcGxksi, {from: accounts[0]});

		assert.equal(nulljcInr3, false)
		await expect(contractaSJlau5.ownerOf.call(tokenIdAHE2WJe, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractMxt5qkZ = await ERC721.new({from: accounts[0]});
		const ownerAW5NIb = "0x0000000000000000000000000000000000000001"
		const tokenIdHZRwkGt = BigInt("1030")
		const tokenIdKLPjOYX = BigInt("1703")
		const ownerl8lCmtV = accounts[4]
		const tokenIdy3QCX5 = BigInt("2025")
		const tokenIdmXCex4p = BigInt("670")
		const totXq2DMl = accounts[4]
		const fromMeTl14B = accounts[1]
		const nullESvxiD5 = await contractMxt5qkZ.balanceOf.call(ownerAW5NIb, {from: "0x0000000000000000000000000000000000000001"});
		const nullMDkrp9 = await contractMxt5qkZ.getApproved.call(tokenIdHZRwkGt, {from: accounts[2]});
		const nullVY8b7R6 = await contractMxt5qkZ.ownerOf.call(tokenIdKLPjOYX, {from: "0x0000000000000000000000000000000000000001"});
		const nullSc8nN9N = await contractMxt5qkZ.balanceOf.call(ownerl8lCmtV, {from: accounts[1]});
		const nullzIJ9DPY = await contractMxt5qkZ.getApproved.call(tokenIdy3QCX5, {from: accounts[2]});
		await contractMxt5qkZ.safeTransferFrom.call(fromMeTl14B, totXq2DMl, tokenIdmXCex4p, {from: accounts[2]});

		assert.equal(nullESvxiD5, 0)
		await expect(contractMxt5qkZ.getApproved.call(tokenIdHZRwkGt, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractVxR0XZ = await ERC721.new({from: accounts[5]});
		const tokenIdavCxEO = BigInt("1293")
		const toEmRSt5v = accounts[2]
		const approvedGI55zuN = true
		const togxSOYV = accounts[1]
		const tokenId2Y0axy = BigInt("1049")
		const approvedawrq4U = true
		const toP2cED06 = accounts[2]
		await contractVxR0XZ.approve.call(toEmRSt5v, tokenIdavCxEO, {from: accounts[4]});
		await contractVxR0XZ.setApprovalForAll.call(togxSOYV, approvedGI55zuN, {from: accounts[1]});
		const nullDjD8d4D = await contractVxR0XZ.getApproved.call(tokenId2Y0axy, {from: "0x0000000000000000000000000000000000000001"});
		await contractVxR0XZ.setApprovalForAll.call(toP2cED06, approvedawrq4U, {from: accounts[2]});

		await expect(contractVxR0XZ.approve.call(toEmRSt5v, tokenIdavCxEO, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractAfjcft4 = await ERC721.new({from: accounts[5]});
		const approvedJ5MTeH7 = true
		const torMyIfn7 = accounts[1]
		const tokenIdkm5YDyx = BigInt("1049")
		const approvedDfnNVCG = true
		const toMPsxdx2 = accounts[2]
		await contractAfjcft4.setApprovalForAll.call(torMyIfn7, approvedJ5MTeH7, {from: accounts[1]});
		const nullvUzuxC = await contractAfjcft4.getApproved.call(tokenIdkm5YDyx, {from: "0x0000000000000000000000000000000000000001"});
		await contractAfjcft4.setApprovalForAll.call(toMPsxdx2, approvedDfnNVCG, {from: accounts[2]});

		await expect(contractAfjcft4.setApprovalForAll.call(torMyIfn7, approvedJ5MTeH7, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractBYokBx = await ERC721.new({from: accounts[1]});
		const operatorLTQz1lP = "0x0000000000000000000000000000000000000001"
		const ownerHU7oRc2 = accounts[2]
		const tokenIdFKTPwen = BigInt("1095")
		const torqugS5I = accounts[1]
		const fromJZtxTRQ = accounts[1]
		const tokenIdVbgWgit = BigInt("1253")
		const nullVojTESi = await contractBYokBx.isApprovedForAll.call(ownerHU7oRc2, operatorLTQz1lP, {from: accounts[1]});
		await contractBYokBx.safeTransferFrom.call(fromJZtxTRQ, torqugS5I, tokenIdFKTPwen, {from: accounts[0]});
		const nullM14i96e = await contractBYokBx.ownerOf.call(tokenIdVbgWgit, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(nullVojTESi, false)
		await expect(contractBYokBx.safeTransferFrom.call(fromJZtxTRQ, torqugS5I, tokenIdFKTPwen, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractGWE4HfX = await ERC721.new({from: "0x0000000000000000000000000000000000000001"});
		const operatorvvdGZ0I = accounts[2]
		const ownerPYe7dk5 = accounts[3]
		const tokenIdx0rTCBy = BigInt("811")
		const toTrt7DQu = accounts[1]
		const fromqWF7xot = accounts[4]
		const tokenIdL7Qiaep = BigInt("653")
		const toVdzVkn = accounts[5]
		const nullT9GNUrr = await contractGWE4HfX.isApprovedForAll.call(ownerPYe7dk5, operatorvvdGZ0I, {from: accounts[4]});
		await contractGWE4HfX.transferFrom.call(fromqWF7xot, toTrt7DQu, tokenIdx0rTCBy, {from: accounts[4]});
		await contractGWE4HfX.approve.call(toVdzVkn, tokenIdL7Qiaep, {from: accounts[5]});
	});

	it('test for ERC721', async () => {
		const contractNsApTvW = await ERC721.new({from: accounts[1]});
		const tokenIdoIgD4t5 = BigInt("85")
		const toJuoPShe = accounts[0]
		const fromO63gM0W = accounts[2]
		const tokenIdoMXbENV = BigInt("227")
		const toW5139NR = accounts[1]
		const fromdNyLSxl = accounts[1]
		const tokenIdO9uF2f7 = BigInt("1820")
		const toc0Vj0rE = accounts[0]
		const froms0WHMDO = accounts[2]
		const approvedovSeyro = false
		const toLXUkKcl = accounts[2]
		const operatorNEkBKYZ = accounts[0]
		const ownerkt3Rz0 = accounts[1]
		await contractNsApTvW.transferFrom.call(fromO63gM0W, toJuoPShe, tokenIdoIgD4t5, {from: "0x0000000000000000000000000000000000000001"});
		await contractNsApTvW.safeTransferFrom.call(fromdNyLSxl, toW5139NR, tokenIdoMXbENV, {from: accounts[1]});
		await contractNsApTvW.transferFrom.call(froms0WHMDO, toc0Vj0rE, tokenIdO9uF2f7, {from: accounts[1]});
		await contractNsApTvW.setApprovalForAll.call(toLXUkKcl, approvedovSeyro, {from: accounts[4]});
		const nullEZhWoPP = await contractNsApTvW.isApprovedForAll.call(ownerkt3Rz0, operatorNEkBKYZ, {from: accounts[3]});

		await expect(contractNsApTvW.transferFrom.call(fromO63gM0W, toJuoPShe, tokenIdoIgD4t5, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contract2eZVbV = await ERC721.new({from: accounts[2]});
		const approvedanVEexk = true
		const toReCfGIa = accounts[2]
		const tokenIdlVTabKT = BigInt("508")
		const toVKaXjLL = accounts[4]
		await contract2eZVbV.setApprovalForAll.call(toReCfGIa, approvedanVEexk, {from: accounts[5]});
		await contract2eZVbV.approve.call(toVKaXjLL, tokenIdlVTabKT, {from: accounts[3]});

		await expect(contract2eZVbV.setApprovalForAll.call(toReCfGIa, approvedanVEexk, {from: accounts[5]})).to.be.rejectedWith(Error);
	});
})