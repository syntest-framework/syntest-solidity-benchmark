const ERC721 = artifacts.require("ERC721");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC721', (accounts) => {
	it('test for ERC721', async () => {
		const contracti9OrxmG = await ERC721.new({from: accounts[2]});
		const tokenIdMxkJEdW = BigInt("1940")
		const tolSMC35e = accounts[0]
		const fromTeCPQ3m = accounts[2]
		const tokenIdBz0ADOT = BigInt("887")
		const tolU1L6nf = accounts[0]
		const fromKNLNBd5 = "0x0000000000000000000000000000000000000001"
		const tokenIdlnbMnp7 = BigInt("854")
		const toSNyyBtw = accounts[0]
		const tokenIdF5LmKjG = BigInt("1192")
		const toKTl6CMQ = accounts[2]
		const fromf5n9kA1 = accounts[2]
		await contracti9OrxmG.transferFrom.call(fromTeCPQ3m, tolSMC35e, tokenIdMxkJEdW, {from: accounts[0]});
		await contracti9OrxmG.transferFrom.call(fromKNLNBd5, tolU1L6nf, tokenIdBz0ADOT, {from: accounts[0]});
		await contracti9OrxmG.approve.call(toSNyyBtw, tokenIdlnbMnp7, {from: accounts[5]});
		await contracti9OrxmG.transferFrom.call(fromf5n9kA1, toKTl6CMQ, tokenIdF5LmKjG, {from: accounts[2]});

		await expect(contracti9OrxmG.transferFrom.call(fromTeCPQ3m, tolSMC35e, tokenIdMxkJEdW, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractFeJ0Yof = await ERC721.new({from: accounts[1]});
		const tokenIdPW5L2DY = BigInt("794")
		const tokenIdZpf9yQ8 = BigInt("1003")
		const tokenIdK7Kxj4V = BigInt("1997")
		const toOpnojI0 = accounts[0]
		const fromSI7jAXQ = accounts[4]
		const ownerqMkU92S = "0x0000000000000000000000000000000000000001"
		const nullF5EBkZk = await contractFeJ0Yof.getApproved.call(tokenIdPW5L2DY, {from: accounts[0]});
		const nullyhQnaDa = await contractFeJ0Yof.getApproved.call(tokenIdZpf9yQ8, {from: accounts[2]});
		await contractFeJ0Yof.transferFrom.call(fromSI7jAXQ, toOpnojI0, tokenIdK7Kxj4V, {from: accounts[4]});
		const nullSEnfcOz = await contractFeJ0Yof.balanceOf.call(ownerqMkU92S, {from: accounts[3]});

		await expect(contractFeJ0Yof.getApproved.call(tokenIdPW5L2DY, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractooGZ0yF = await ERC721.new({from: accounts[2]});
		const approvedounxPVT = true
		const toq7WeXJ = accounts[4]
		const tokenIdmnOKvfQ = BigInt("955")
		const toiYNQ2O = accounts[1]
		const fromrjnZQQy = accounts[3]
		const approvedYyPxXym = true
		const toSy3hH2p = accounts[4]
		const tokenIduUshyLw = BigInt("1858")
		const toNeVqNIb = accounts[4]
		const fromFukQXL = "0x0000000000000000000000000000000000000001"
		const operatorbYDafnA = accounts[3]
		const ownerxFckdv = accounts[3]
		const approvedGzKj8d5 = true
		const toUGhS0Gr = "0x0000000000000000000000000000000000000001"
		await contractooGZ0yF.setApprovalForAll.call(toq7WeXJ, approvedounxPVT, {from: accounts[2]});
		await contractooGZ0yF.transferFrom.call(fromrjnZQQy, toiYNQ2O, tokenIdmnOKvfQ, {from: accounts[5]});
		await contractooGZ0yF.setApprovalForAll.call(toSy3hH2p, approvedYyPxXym, {from: accounts[3]});
		await contractooGZ0yF.transferFrom.call(fromFukQXL, toNeVqNIb, tokenIduUshyLw, {from: "0x0000000000000000000000000000000000000001"});
		const nullN31LZIT = await contractooGZ0yF.isApprovedForAll.call(ownerxFckdv, operatorbYDafnA, {from: accounts[2]});
		await contractooGZ0yF.setApprovalForAll.call(toUGhS0Gr, approvedGzKj8d5, {from: "0x0000000000000000000000000000000000000001"});

		await expect(contractooGZ0yF.setApprovalForAll.call(toq7WeXJ, approvedounxPVT, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractIAhqNVY = await ERC721.new({from: accounts[2]});
		const ownerGj60zhH = accounts[2]
		const approvedKcLBNaE = true
		const toDAWFqcv = accounts[3]
		const tokenIdJK8X2J4 = BigInt("37")
		const toZm04dqj = accounts[1]
		const tokenIdSezEYZC = BigInt("71")
		const toFayuqha = accounts[4]
		const fromh2QWUJY = accounts[5]
		const tokenIdovG5AVg = BigInt("67")
		const toVKlde8V = accounts[0]
		const nullIDoAKdH = await contractIAhqNVY.balanceOf.call(ownerGj60zhH, {from: "0x0000000000000000000000000000000000000001"});
		await contractIAhqNVY.setApprovalForAll.call(toDAWFqcv, approvedKcLBNaE, {from: accounts[5]});
		await contractIAhqNVY.approve.call(toZm04dqj, tokenIdJK8X2J4, {from: accounts[0]});
		await contractIAhqNVY.safeTransferFrom.call(fromh2QWUJY, toFayuqha, tokenIdSezEYZC, {from: accounts[3]});
		await contractIAhqNVY.approve.call(toVKlde8V, tokenIdovG5AVg, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(nullIDoAKdH, 0)
		await expect(contractIAhqNVY.setApprovalForAll.call(toDAWFqcv, approvedKcLBNaE, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractRVjJQSS = await ERC721.new({from: accounts[0]});
		const operatordhjgUZ = accounts[3]
		const ownerg9dIlo2 = accounts[1]
		const operatorv8hENqe = accounts[2]
		const ownerRNI8Tfa = accounts[0]
		const tokenIdDw6dnb = BigInt("1250")
		const towwbCX7S = accounts[2]
		const fromgmRPWfq = accounts[0]
		const tokenIdDA9ZrRu = BigInt("1217")
		const nullUX1YXuz = await contractRVjJQSS.isApprovedForAll.call(ownerg9dIlo2, operatordhjgUZ, {from: accounts[4]});
		const nullXiD0k9 = await contractRVjJQSS.isApprovedForAll.call(ownerRNI8Tfa, operatorv8hENqe, {from: accounts[3]});
		await contractRVjJQSS.safeTransferFrom.call(fromgmRPWfq, towwbCX7S, tokenIdDw6dnb, {from: accounts[0]});
		const nullsNYwCyS = await contractRVjJQSS.ownerOf.call(tokenIdDA9ZrRu, {from: accounts[0]});

		assert.equal(nullUX1YXuz, false)
		assert.equal(nullXiD0k9, false)
		await expect(contractRVjJQSS.safeTransferFrom.call(fromgmRPWfq, towwbCX7S, tokenIdDw6dnb, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractgFJKH2h = await ERC721.new({from: "0x0000000000000000000000000000000000000001"});
		const tokenIdqN4IyzU = BigInt("549")
		const toh5NlOeR = accounts[1]
		const fromMd208EA = accounts[5]
		const tokenIdhnhkmdP = BigInt("1890")
		const toOlq8T0E = accounts[0]
		const from0zN17R = accounts[0]
		const approvedw70cenN = true
		const toF6Cnhy = accounts[4]
		const tokenIdUiqF1c8 = BigInt("1883")
		const tos845H5c = accounts[0]
		await contractgFJKH2h.safeTransferFrom.call(fromMd208EA, toh5NlOeR, tokenIdqN4IyzU, {from: accounts[4]});
		await contractgFJKH2h.transferFrom.call(from0zN17R, toOlq8T0E, tokenIdhnhkmdP, {from: accounts[1]});
		await contractgFJKH2h.setApprovalForAll.call(toF6Cnhy, approvedw70cenN, {from: accounts[2]});
		await contractgFJKH2h.approve.call(tos845H5c, tokenIdUiqF1c8, {from: accounts[4]});
	});

	it('test for ERC721', async () => {
		const contractxb6ujeN = await ERC721.new({from: accounts[2]});
		const approvedzHcqmK = true
		const totBfTqqq = accounts[4]
		const tokenIdoSerbrD = BigInt("1033")
		const toiBsHwOO = accounts[2]
		await contractxb6ujeN.setApprovalForAll.call(totBfTqqq, approvedzHcqmK, {from: accounts[4]});
		await contractxb6ujeN.approve.call(toiBsHwOO, tokenIdoSerbrD, {from: accounts[4]});

		await expect(contractxb6ujeN.setApprovalForAll.call(totBfTqqq, approvedzHcqmK, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})