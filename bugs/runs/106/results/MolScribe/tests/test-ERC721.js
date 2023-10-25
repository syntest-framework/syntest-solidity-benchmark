const ERC721 = artifacts.require("ERC721");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC721', (accounts) => {
	it('test for ERC721', async () => {
		const contractVH4uyA = await ERC721.new({from: accounts[5]});
		const tokenIdLJuMTT2 = BigInt("1527")
		const ownerNaR5sZ5 = accounts[1]
		const nullSVXKHcl = await contractVH4uyA.ownerOf.call(tokenIdLJuMTT2, {from: accounts[1]});
		const nullFGlxPs8 = await contractVH4uyA.balanceOf.call(ownerNaR5sZ5, {from: accounts[4]});

		await expect(contractVH4uyA.ownerOf.call(tokenIdLJuMTT2, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractfnOkDDi = await ERC721.new({from: accounts[0]});
		const tokenIdb0yIB1r = BigInt("649")
		const toDa0hDNz = accounts[3]
		const fromBfZpx0z = accounts[0]
		const tokenIdC6D44KC = BigInt("2004")
		const tokenIdsYPxVlt = BigInt("837")
		const tokenIdDnJ6ETf = BigInt("122")
		const toBNP9z56 = accounts[4]
		const tokenIdbAJoemK = BigInt("622")
		const tos4jPmvU = accounts[2]
		const tokenIdSqiguh = BigInt("790")
		const toYWH7FG = "0x0000000000000000000000000000000000000001"
		const fromqm8PqZA = accounts[2]
		await contractfnOkDDi.safeTransferFrom.call(fromBfZpx0z, toDa0hDNz, tokenIdb0yIB1r, {from: accounts[4]});
		const nullgXOXnYB = await contractfnOkDDi.ownerOf.call(tokenIdC6D44KC, {from: accounts[1]});
		const nullsI2tcUc = await contractfnOkDDi.ownerOf.call(tokenIdsYPxVlt, {from: accounts[1]});
		await contractfnOkDDi.approve.call(toBNP9z56, tokenIdDnJ6ETf, {from: accounts[1]});
		await contractfnOkDDi.approve.call(tos4jPmvU, tokenIdbAJoemK, {from: "0x0000000000000000000000000000000000000001"});
		await contractfnOkDDi.safeTransferFrom.call(fromqm8PqZA, toYWH7FG, tokenIdSqiguh, {from: accounts[2]});

		await expect(contractfnOkDDi.safeTransferFrom.call(fromBfZpx0z, toDa0hDNz, tokenIdb0yIB1r, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractEcAqhrP = await ERC721.new({from: "0x0000000000000000000000000000000000000001"});
		const tokenIdlFNpB80 = BigInt("645")
		const operatorix0hc2t = accounts[4]
		const ownerlePbGaO = accounts[3]
		const tokenIdjW9zNA = BigInt("1030")
		const toLCsJDbV = accounts[2]
		const fromJRhFp82 = accounts[0]
		const _data1tiIRM = "0x150d020f02011a1c0119"
		const tokenId2pc2EF = BigInt("441")
		const toiVd0L7o = accounts[3]
		const fromgOhNHpp = accounts[0]
		const ownersHofU6c = accounts[4]
		const nullPKec2Ek = await contractEcAqhrP.getApproved.call(tokenIdlFNpB80, {from: accounts[2]});
		const nullsGqH28F = await contractEcAqhrP.isApprovedForAll.call(ownerlePbGaO, operatorix0hc2t, {from: "0x0000000000000000000000000000000000000001"});
		await contractEcAqhrP.safeTransferFrom.call(fromJRhFp82, toLCsJDbV, tokenIdjW9zNA, {from: accounts[0]});
		await contractEcAqhrP.safeTransferFrom.call(fromgOhNHpp, toiVd0L7o, tokenId2pc2EF, _data1tiIRM, {from: accounts[5]});
		const nullL4rKSPy = await contractEcAqhrP.balanceOf.call(ownersHofU6c, {from: accounts[4]});
	});

	it('test for ERC721', async () => {
		const contractBOBOoFn = await ERC721.new({from: accounts[3]});
		const tokenIdBPiBcg7 = BigInt("343")
		const tokenIdXO6UCZl = BigInt("1811")
		const toeRAXlHQ = accounts[2]
		const fromrp13R3h = accounts[5]
		const tokenIdixRPAH8 = BigInt("1411")
		const tohld8eF = accounts[3]
		const fromfne8cNv = accounts[3]
		const approvedSD3XUBC = false
		const tonYz3hLa = "0x0000000000000000000000000000000000000001"
		const approvedDicKk6 = false
		const tozLzXyUC = "0x0000000000000000000000000000000000000001"
		const tokenIdLae3tG9 = BigInt("705")
		const toboNWMjg = accounts[3]
		const nullRAtpyLh = await contractBOBOoFn.getApproved.call(tokenIdBPiBcg7, {from: accounts[2]});
		await contractBOBOoFn.transferFrom.call(fromrp13R3h, toeRAXlHQ, tokenIdXO6UCZl, {from: accounts[5]});
		await contractBOBOoFn.safeTransferFrom.call(fromfne8cNv, tohld8eF, tokenIdixRPAH8, {from: accounts[1]});
		await contractBOBOoFn.setApprovalForAll.call(tonYz3hLa, approvedSD3XUBC, {from: "0x0000000000000000000000000000000000000001"});
		await contractBOBOoFn.setApprovalForAll.call(tozLzXyUC, approvedDicKk6, {from: accounts[2]});
		await contractBOBOoFn.approve.call(toboNWMjg, tokenIdLae3tG9, {from: accounts[1]});

		await expect(contractBOBOoFn.getApproved.call(tokenIdBPiBcg7, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractDQNMTud = await ERC721.new({from: accounts[3]});
		const approvedF9mixdN = false
		const toWZd0mTr = accounts[4]
		const _datatFx31w4 = "0x1d0201090203091919101d1c100f"
		const tokenIdhxwVdWB = BigInt("1569")
		const toNQe2Ehs = accounts[4]
		const frommmPRQb = accounts[4]
		const tokenIdRbRuTbk = BigInt("1944")
		const tozolecuf = accounts[1]
		const fromlXGFaf = accounts[3]
		await contractDQNMTud.setApprovalForAll.call(toWZd0mTr, approvedF9mixdN, {from: accounts[4]});
		await contractDQNMTud.safeTransferFrom.call(frommmPRQb, toNQe2Ehs, tokenIdhxwVdWB, _datatFx31w4, {from: accounts[0]});
		await contractDQNMTud.transferFrom.call(fromlXGFaf, tozolecuf, tokenIdRbRuTbk, {from: accounts[3]});

		await expect(contractDQNMTud.setApprovalForAll.call(toWZd0mTr, approvedF9mixdN, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})