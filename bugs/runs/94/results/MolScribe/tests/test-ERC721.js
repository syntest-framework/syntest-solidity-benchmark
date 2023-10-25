const ERC721 = artifacts.require("ERC721");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC721', (accounts) => {
	it('test for ERC721', async () => {
		const contractbo9M7sC = await ERC721.new({from: accounts[1]});
		const tokenIdPg6dp26 = BigInt("258")
		const _dataPeAfrCE = "0x1e14"
		const tokenIdj6H08n = BigInt("44")
		const toMhIBxF = accounts[3]
		const fromuKuH82S = accounts[1]
		const tokenIdSURNh6M = BigInt("1669")
		const nullkwNRGd2 = await contractbo9M7sC.getApproved.call(tokenIdPg6dp26, {from: accounts[0]});
		await contractbo9M7sC.safeTransferFrom.call(fromuKuH82S, toMhIBxF, tokenIdj6H08n, _dataPeAfrCE, {from: accounts[4]});
		const nullRRhybwb = await contractbo9M7sC.ownerOf.call(tokenIdSURNh6M, {from: accounts[1]});

		await expect(contractbo9M7sC.getApproved.call(tokenIdPg6dp26, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractYYfjyxg = await ERC721.new({from: accounts[1]});
		const operatorCHswjT = accounts[0]
		const ownerovfaA5 = accounts[0]
		const tokenIdmVXgw18 = BigInt("1402")
		const toDugXLo = accounts[4]
		const fromuGCChEy = accounts[0]
		const approvedZhQOc6 = false
		const toXFNixf = accounts[2]
		const _datarB99h7Q = "0x0508191c191001170a0401000c1203081e1f051c"
		const tokenIdDHJwl8 = BigInt("759")
		const tok2JEnI7 = accounts[1]
		const fromqV8CIg = accounts[1]
		const nulltg5PVFd = await contractYYfjyxg.isApprovedForAll.call(ownerovfaA5, operatorCHswjT, {from: accounts[2]});
		await contractYYfjyxg.transferFrom.call(fromuGCChEy, toDugXLo, tokenIdmVXgw18, {from: accounts[4]});
		await contractYYfjyxg.setApprovalForAll.call(toXFNixf, approvedZhQOc6, {from: "0x0000000000000000000000000000000000000001"});
		await contractYYfjyxg.safeTransferFrom.call(fromqV8CIg, tok2JEnI7, tokenIdDHJwl8, _datarB99h7Q, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(nulltg5PVFd, false)
		await expect(contractYYfjyxg.transferFrom.call(fromuGCChEy, toDugXLo, tokenIdmVXgw18, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractg9DllQe = await ERC721.new({from: accounts[1]});
		const approvedmJDPLS = false
		const toMe5ebl8 = accounts[2]
		const operatorFoE4Zgu = accounts[0]
		const ownerpRCrN7 = accounts[0]
		const tokenIdZwz2cFw = BigInt("816")
		await contractg9DllQe.setApprovalForAll.call(toMe5ebl8, approvedmJDPLS, {from: accounts[4]});
		const null4Co2pR = await contractg9DllQe.isApprovedForAll.call(ownerpRCrN7, operatorFoE4Zgu, {from: accounts[3]});
		const nullc35kDEK = await contractg9DllQe.ownerOf.call(tokenIdZwz2cFw, {from: accounts[3]});

		assert.equal(null4Co2pR, false)
		await expect(contractg9DllQe.isApprovedForAll.call(ownerpRCrN7, operatorFoE4Zgu, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractoaRo3WB = await ERC721.new({from: "0x0000000000000000000000000000000000000001"});
		const tokenIdmtoechR = BigInt("51")
		const tokenIdiKdre42 = BigInt("108")
		const tokenIdT3ewLLZ = BigInt("577")
		const toS7nqiSi = accounts[0]
		const fromUsayaL5 = accounts[0]
		const approvedeATcSN = true
		const tocGKTgQe = accounts[1]
		const tokenIdMfXILqv = BigInt("974")
		const toDGdJ03u = accounts[3]
		const fromn3BHPsu = accounts[3]
		const nullITZsHbD = await contractoaRo3WB.getApproved.call(tokenIdmtoechR, {from: accounts[5]});
		const nullxd1P8Qi = await contractoaRo3WB.getApproved.call(tokenIdiKdre42, {from: accounts[5]});
		await contractoaRo3WB.transferFrom.call(fromUsayaL5, toS7nqiSi, tokenIdT3ewLLZ, {from: accounts[2]});
		await contractoaRo3WB.setApprovalForAll.call(tocGKTgQe, approvedeATcSN, {from: accounts[3]});
		await contractoaRo3WB.safeTransferFrom.call(fromn3BHPsu, toDGdJ03u, tokenIdMfXILqv, {from: accounts[2]});
	});

	it('test for ERC721', async () => {
		const contractke70qDH = await ERC721.new({from: accounts[1]});
		const approvedTiJ2kfw = false
		const toPiLvj9a = "0x0000000000000000000000000000000000000001"
		const tokenIdzb3Cgc1 = BigInt("258")
		const _dataRhdfDPf = "0x1e14"
		const tokenIdwoz0EXM = BigInt("44")
		const toQk19F6C = accounts[4]
		const fromDbY41dj = accounts[1]
		const tokenIdVajQjuG = BigInt("1669")
		await contractke70qDH.setApprovalForAll.call(toPiLvj9a, approvedTiJ2kfw, {from: "0x0000000000000000000000000000000000000001"});
		const nullmPcnSV2 = await contractke70qDH.getApproved.call(tokenIdzb3Cgc1, {from: accounts[0]});
		await contractke70qDH.safeTransferFrom.call(fromDbY41dj, toQk19F6C, tokenIdwoz0EXM, _dataRhdfDPf, {from: accounts[4]});
		const nulleZnh6Ya = await contractke70qDH.ownerOf.call(tokenIdVajQjuG, {from: accounts[1]});

		await expect(contractke70qDH.setApprovalForAll.call(toPiLvj9a, approvedTiJ2kfw, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});
})