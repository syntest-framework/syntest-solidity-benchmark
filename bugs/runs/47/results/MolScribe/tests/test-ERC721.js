const ERC721 = artifacts.require("ERC721");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC721', (accounts) => {
	it('test for ERC721', async () => {
		const contracteZMbs4c = await ERC721.new({from: accounts[4]});
		const tokenIdBqlKTF = BigInt("1631")
		const toZiLjgqJ = accounts[0]
		const tokenIdTIC6JRo = BigInt("423")
		const ton4KmozG = accounts[1]
		const tokenIdu97WuXc = BigInt("1333")
		const toVQrfFYd = accounts[1]
		const fromgS9TKL = accounts[0]
		await contracteZMbs4c.approve.call(toZiLjgqJ, tokenIdBqlKTF, {from: accounts[0]});
		await contracteZMbs4c.approve.call(ton4KmozG, tokenIdTIC6JRo, {from: accounts[0]});
		await contracteZMbs4c.safeTransferFrom.call(fromgS9TKL, toVQrfFYd, tokenIdu97WuXc, {from: accounts[0]});

		await expect(contracteZMbs4c.approve.call(toZiLjgqJ, tokenIdBqlKTF, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractNCLvvJS = await ERC721.new({from: accounts[5]});
		const _dataZZxFJ7I = "0x180209160207031b150a1c0f1a10"
		const tokenIdDPgLqNh = BigInt("871")
		const tosyPWBu8 = accounts[4]
		const from80LdqR = accounts[1]
		const tokenIdIFo9iy = BigInt("640")
		const totQMFIEu = accounts[3]
		const operatorTninM7 = accounts[4]
		const ownerFvhc6lp = accounts[2]
		const tokenIdtz8kPGI = BigInt("1688")
		const tokenIdWyX1XG = BigInt("1766")
		const toHCJme1A = accounts[1]
		const tokenIdogRxWlm = BigInt("1605")
		const tobLWAOr3 = accounts[3]
		const fromprzstyO = accounts[2]
		await contractNCLvvJS.safeTransferFrom.call(from80LdqR, tosyPWBu8, tokenIdDPgLqNh, _dataZZxFJ7I, {from: accounts[0]});
		await contractNCLvvJS.approve.call(totQMFIEu, tokenIdIFo9iy, {from: accounts[4]});
		const nullzS75FRZ = await contractNCLvvJS.isApprovedForAll.call(ownerFvhc6lp, operatorTninM7, {from: "0x0000000000000000000000000000000000000001"});
		const nulllZWFILz = await contractNCLvvJS.getApproved.call(tokenIdtz8kPGI, {from: accounts[3]});
		await contractNCLvvJS.approve.call(toHCJme1A, tokenIdWyX1XG, {from: accounts[3]});
		await contractNCLvvJS.transferFrom.call(fromprzstyO, tobLWAOr3, tokenIdogRxWlm, {from: accounts[0]});

		await expect(contractNCLvvJS.safeTransferFrom.call(from80LdqR, tosyPWBu8, tokenIdDPgLqNh, _dataZZxFJ7I, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractZCy9mRy = await ERC721.new({from: "0x0000000000000000000000000000000000000001"});
		const tokenIdvgjCFnA = BigInt("299")
		const tokenIdxZAwEzp = BigInt("1147")
		const toPIDEl1I = accounts[4]
		const nullGJGmXpm = await contractZCy9mRy.ownerOf.call(tokenIdvgjCFnA, {from: accounts[4]});
		await contractZCy9mRy.approve.call(toPIDEl1I, tokenIdxZAwEzp, {from: accounts[1]});
	});

	it('test for ERC721', async () => {
		const contractCp7TgC9 = await ERC721.new({from: accounts[2]});
		const operatorWTQM9KJ = accounts[3]
		const ownerOhHIHxW = accounts[0]
		const tokenIdDmAxWo = BigInt("1968")
		const tokenIdsI5BKts = BigInt("844")
		const todFxJe5K = accounts[0]
		const fromYrVlHET = accounts[1]
		const operatornv3JRp7 = accounts[2]
		const ownerkcOXbCO = "0x0000000000000000000000000000000000000001"
		const nullmfeWw99 = await contractCp7TgC9.isApprovedForAll.call(ownerOhHIHxW, operatorWTQM9KJ, {from: accounts[5]});
		const nullfyBCYg5 = await contractCp7TgC9.getApproved.call(tokenIdDmAxWo, {from: "0x0000000000000000000000000000000000000001"});
		await contractCp7TgC9.transferFrom.call(fromYrVlHET, todFxJe5K, tokenIdsI5BKts, {from: accounts[0]});
		const nullicW1hCV = await contractCp7TgC9.isApprovedForAll.call(ownerkcOXbCO, operatornv3JRp7, {from: accounts[1]});

		assert.equal(nullmfeWw99, false)
		await expect(contractCp7TgC9.getApproved.call(tokenIdDmAxWo, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractxtI130 = await ERC721.new({from: accounts[2]});
		const operatorWUqfXZ9 = accounts[2]
		const ownerAc7WIvC = "0x0000000000000000000000000000000000000002"
		const approvedAV0n1QP = false
		const toeM8yHvU = accounts[1]
		const operatorkxB3h6K = "0x0000000000000000000000000000000000000001"
		const ownera56bkDN = accounts[4]
		const nullTseAyPT = await contractxtI130.isApprovedForAll.call(ownerAc7WIvC, operatorWUqfXZ9, {from: accounts[1]});
		await contractxtI130.setApprovalForAll.call(toeM8yHvU, approvedAV0n1QP, {from: accounts[1]});
		const null4spP8S = await contractxtI130.isApprovedForAll.call(ownera56bkDN, operatorkxB3h6K, {from: accounts[1]});

		assert.equal(nullTseAyPT, false)
		await expect(contractxtI130.setApprovalForAll.call(toeM8yHvU, approvedAV0n1QP, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})