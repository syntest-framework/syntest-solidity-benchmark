const ERC721 = artifacts.require("ERC721");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC721', (accounts) => {
	it('test for ERC721', async () => {
		const contractLHDyORN = await ERC721.new({from: accounts[4]});
		const tokenIdpwnft15 = BigInt("1936")
		const towa6PheK = accounts[0]
		const fromUlJGWgp = "0x0000000000000000000000000000000000000001"
		const operatoryLrFBty = accounts[2]
		const ownerKRbftgm = accounts[0]
		const tokenIdF1hPTt = BigInt("1085")
		const totKpCPLa = accounts[5]
		const fromyq6mjNU = accounts[2]
		const tokenIdHie4IyV = BigInt("920")
		const toxAwSkJY = accounts[2]
		const fromW4bearz = accounts[3]
		const tokenIdzFTTICV = BigInt("773")
		const tokenIdL3PZenC = BigInt("957")
		const toutpwxpc = "0x0000000000000000000000000000000000000001"
		await contractLHDyORN.safeTransferFrom.call(fromUlJGWgp, towa6PheK, tokenIdpwnft15, {from: accounts[0]});
		const nullRA5af7K = await contractLHDyORN.isApprovedForAll.call(ownerKRbftgm, operatoryLrFBty, {from: accounts[3]});
		await contractLHDyORN.safeTransferFrom.call(fromyq6mjNU, totKpCPLa, tokenIdF1hPTt, {from: accounts[2]});
		await contractLHDyORN.transferFrom.call(fromW4bearz, toxAwSkJY, tokenIdHie4IyV, {from: accounts[4]});
		const nullphweDwj = await contractLHDyORN.ownerOf.call(tokenIdzFTTICV, {from: accounts[1]});
		await contractLHDyORN.approve.call(toutpwxpc, tokenIdL3PZenC, {from: accounts[4]});

		await expect(contractLHDyORN.safeTransferFrom.call(fromUlJGWgp, towa6PheK, tokenIdpwnft15, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contracthUxc7f = await ERC721.new({from: accounts[1]});
		const approvedQ3zaDAR = false
		const tofNfKLKc = accounts[2]
		const tokenIdMY1tWpm = BigInt("1124")
		const tomUOrcZm = accounts[1]
		const fromPdXhqWI = accounts[5]
		await contracthUxc7f.setApprovalForAll.call(tofNfKLKc, approvedQ3zaDAR, {from: accounts[0]});
		await contracthUxc7f.safeTransferFrom.call(fromPdXhqWI, tomUOrcZm, tokenIdMY1tWpm, {from: accounts[2]});

		await expect(contracthUxc7f.setApprovalForAll.call(tofNfKLKc, approvedQ3zaDAR, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractliJZgwA = await ERC721.new({from: "0x0000000000000000000000000000000000000001"});
		const tokenIdbz4RRti = BigInt("1711")
		const operatorUQfx9zP = accounts[1]
		const ownerXpMS7J0 = accounts[1]
		const nullJXDTlZM = await contractliJZgwA.getApproved.call(tokenIdbz4RRti, {from: accounts[0]});
		const nulleg3g1n1 = await contractliJZgwA.isApprovedForAll.call(ownerXpMS7J0, operatorUQfx9zP, {from: accounts[4]});
	});

	it('test for ERC721', async () => {
		const contracterHA7og = await ERC721.new({from: accounts[2]});
		const tokenId98usOq = BigInt("1504")
		const _dataA7HIR9W = "0x151e1e011706161308021b04070c17120b151d080d18171b100e09020a1a"
		const tokenIdBVdcs9D = BigInt("898")
		const tosmvfln = accounts[0]
		const fromiRDk7Uf = accounts[4]
		const tokenIdM1NGqYj = BigInt("1571")
		const toDKDzdm = accounts[4]
		const fromNFhn8vH = accounts[4]
		const tokenIdC0qpdv = BigInt("1221")
		const toKsNDiz9 = accounts[1]
		const nullqSLts3 = await contracterHA7og.ownerOf.call(tokenId98usOq, {from: accounts[3]});
		await contracterHA7og.safeTransferFrom.call(fromiRDk7Uf, tosmvfln, tokenIdBVdcs9D, _dataA7HIR9W, {from: accounts[1]});
		await contracterHA7og.transferFrom.call(fromNFhn8vH, toDKDzdm, tokenIdM1NGqYj, {from: accounts[4]});
		await contracterHA7og.approve.call(toKsNDiz9, tokenIdC0qpdv, {from: accounts[3]});

		await expect(contracterHA7og.ownerOf.call(tokenId98usOq, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractiOyqwja = await ERC721.new({from: accounts[1]});
		const tokenIde70Oyp7 = BigInt("449")
		const toE29aOyn = accounts[5]
		const from1O29dT = accounts[4]
		const tokenIdNJntfOL = BigInt("1847")
		const tokenIdebGn6jK = BigInt("1168")
		await contractiOyqwja.transferFrom.call(from1O29dT, toE29aOyn, tokenIde70Oyp7, {from: accounts[5]});
		const nullxgrYYF = await contractiOyqwja.ownerOf.call(tokenIdNJntfOL, {from: accounts[0]});
		const nullqxVKAv = await contractiOyqwja.getApproved.call(tokenIdebGn6jK, {from: accounts[4]});

		await expect(contractiOyqwja.transferFrom.call(from1O29dT, toE29aOyn, tokenIde70Oyp7, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractloqbpJB = await ERC721.new({from: accounts[4]});
		const approved42YLuC = false
		const toKZR32mB = accounts[2]
		const tokenIdtZbHw9p = BigInt("860")
		const tokenIdqbAQ8RI = BigInt("1489")
		await contractloqbpJB.setApprovalForAll.call(toKZR32mB, approved42YLuC, {from: accounts[4]});
		const nullbou9FQS = await contractloqbpJB.getApproved.call(tokenIdtZbHw9p, {from: accounts[4]});
		const nullJR4zwuj = await contractloqbpJB.ownerOf.call(tokenIdqbAQ8RI, {from: accounts[2]});

		await expect(contractloqbpJB.setApprovalForAll.call(toKZR32mB, approved42YLuC, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractOaE57UG = await ERC721.new({from: accounts[4]});
		const tokenIdUcnrgn1 = BigInt("216")
		const toxhKUHi = accounts[0]
		const tokenIdvcnoleO = BigInt("2011")
		const topCXONTR = accounts[4]
		const fromAI1LxCp = accounts[3]
		const tokenIdaW2D6gk = BigInt("1704")
		const toPxrhts = accounts[1]
		await contractOaE57UG.approve.call(toxhKUHi, tokenIdUcnrgn1, {from: accounts[2]});
		await contractOaE57UG.safeTransferFrom.call(fromAI1LxCp, topCXONTR, tokenIdvcnoleO, {from: "0x0000000000000000000000000000000000000001"});
		await contractOaE57UG.approve.call(toPxrhts, tokenIdaW2D6gk, {from: accounts[0]});

		await expect(contractOaE57UG.approve.call(toxhKUHi, tokenIdUcnrgn1, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractIPKccS9 = await ERC721.new({from: accounts[2]});
		const ownerE4WfooR = accounts[3]
		const tokenIdGtwn2v = BigInt("1516")
		const toJ1tmBD = "0x0000000000000000000000000000000000000001"
		const fromxhPbfiX = accounts[4]
		const tokenIdEC1ME8C = BigInt("224")
		const toMZLJSA = accounts[1]
		const fromoyu6Fso = accounts[5]
		const tokenIdA8zMsLq = BigInt("388")
		const tokenId5DrydV = BigInt("598")
		const tosjnVPne = accounts[3]
		const nullD1SKl3K = await contractIPKccS9.balanceOf.call(ownerE4WfooR, {from: accounts[1]});
		await contractIPKccS9.transferFrom.call(fromxhPbfiX, toJ1tmBD, tokenIdGtwn2v, {from: accounts[0]});
		await contractIPKccS9.safeTransferFrom.call(fromoyu6Fso, toMZLJSA, tokenIdEC1ME8C, {from: accounts[4]});
		const nulleiooxM3 = await contractIPKccS9.ownerOf.call(tokenIdA8zMsLq, {from: accounts[0]});
		await contractIPKccS9.approve.call(tosjnVPne, tokenId5DrydV, {from: accounts[0]});

		assert.equal(nullD1SKl3K, 0)
		await expect(contractIPKccS9.transferFrom.call(fromxhPbfiX, toJ1tmBD, tokenIdGtwn2v, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractTB7NCj = await ERC721.new({from: accounts[1]});
		const operatordAlSNsy = accounts[4]
		const ownerh7BZjbZ = accounts[0]
		const approvedeVmEPRG = false
		const toXoTVV6G = accounts[3]
		const tokenIdt1iWV0v = BigInt("1124")
		const tosfVkCw6 = accounts[1]
		const fromad13UW3 = accounts[5]
		const tokenIdKqG3Cfg = BigInt("656")
		const toRO9afLy = accounts[4]
		const nullzqGRhC1 = await contractTB7NCj.isApprovedForAll.call(ownerh7BZjbZ, operatordAlSNsy, {from: "0x0000000000000000000000000000000000000001"});
		await contractTB7NCj.setApprovalForAll.call(toXoTVV6G, approvedeVmEPRG, {from: accounts[0]});
		await contractTB7NCj.safeTransferFrom.call(fromad13UW3, tosfVkCw6, tokenIdt1iWV0v, {from: accounts[2]});
		await contractTB7NCj.approve.call(toRO9afLy, tokenIdKqG3Cfg, {from: accounts[2]});

		assert.equal(nullzqGRhC1, false)
		await expect(contractTB7NCj.setApprovalForAll.call(toXoTVV6G, approvedeVmEPRG, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractcHj2f47 = await ERC721.new({from: accounts[1]});
		const approvedPtEHiOJ = true
		const tokdKaZo = accounts[2]
		const approvedHcSIml = false
		const toKlTzGaR = accounts[2]
		const tokenIdIBLW1jM = BigInt("817")
		const toAgMNdR2 = accounts[0]
		const fromH1RzetE = accounts[4]
		await contractcHj2f47.setApprovalForAll.call(tokdKaZo, approvedPtEHiOJ, {from: accounts[0]});
		await contractcHj2f47.setApprovalForAll.call(toKlTzGaR, approvedHcSIml, {from: accounts[2]});
		await contractcHj2f47.safeTransferFrom.call(fromH1RzetE, toAgMNdR2, tokenIdIBLW1jM, {from: accounts[3]});

		await expect(contractcHj2f47.setApprovalForAll.call(tokdKaZo, approvedPtEHiOJ, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})