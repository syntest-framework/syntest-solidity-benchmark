const ERC721 = artifacts.require("ERC721");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC721', (accounts) => {
	it('test for ERC721', async () => {
		const contractzo0M2GI = await ERC721.new({from: accounts[0]});
		const ownerPQFnhqd = accounts[0]
		const tokenIdj4PturS = BigInt("1515")
		const tomuEjQXd = "0x0000000000000000000000000000000000000001"
		const fromWa0lRQv = accounts[1]
		const tokenIdWa0Ofbd = BigInt("553")
		const operatorvw2z0T2 = accounts[0]
		const ownerNNGHERA = accounts[1]
		const nullZHacA0P = await contractzo0M2GI.balanceOf.call(ownerPQFnhqd, {from: accounts[1]});
		await contractzo0M2GI.safeTransferFrom.call(fromWa0lRQv, tomuEjQXd, tokenIdj4PturS, {from: accounts[2]});
		const nullmKK2SX2 = await contractzo0M2GI.ownerOf.call(tokenIdWa0Ofbd, {from: accounts[1]});
		const nullrehKTe = await contractzo0M2GI.isApprovedForAll.call(ownerNNGHERA, operatorvw2z0T2, {from: accounts[4]});

		assert.equal(nullZHacA0P, 0)
		await expect(contractzo0M2GI.safeTransferFrom.call(fromWa0lRQv, tomuEjQXd, tokenIdj4PturS, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractZIE1rQI = await ERC721.new({from: accounts[4]});
		const tokenIdQon8CEq = BigInt("762")
		const tohbS6seQ = accounts[3]
		const owner9ObghH = accounts[0]
		const _dataWwWJQuO = "0x1e131004"
		const tokenIduwhjInh = BigInt("1877")
		const tocLwb4rD = accounts[5]
		const fromsnZXHHE = accounts[2]
		const tokenIdNmfYkNY = BigInt("1368")
		await contractZIE1rQI.approve.call(tohbS6seQ, tokenIdQon8CEq, {from: accounts[2]});
		const nullDGPd0LG = await contractZIE1rQI.balanceOf.call(owner9ObghH, {from: accounts[1]});
		await contractZIE1rQI.safeTransferFrom.call(fromsnZXHHE, tocLwb4rD, tokenIduwhjInh, _dataWwWJQuO, {from: accounts[0]});
		const nullo6kdt4 = await contractZIE1rQI.getApproved.call(tokenIdNmfYkNY, {from: accounts[3]});

		await expect(contractZIE1rQI.approve.call(tohbS6seQ, tokenIdQon8CEq, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractkBAvJ1 = await ERC721.new({from: "0x0000000000000000000000000000000000000001"});
		const ownerfBDm45v = accounts[1]
		const operatorHJaBznq = accounts[4]
		const ownerAWHGrki = accounts[1]
		const approved5BOJnu = true
		const tow7jvKF = accounts[2]
		const null3XjwTH = await contractkBAvJ1.balanceOf.call(ownerfBDm45v, {from: accounts[3]});
		const nullsdCJgs = await contractkBAvJ1.isApprovedForAll.call(ownerAWHGrki, operatorHJaBznq, {from: accounts[4]});
		await contractkBAvJ1.setApprovalForAll.call(tow7jvKF, approved5BOJnu, {from: accounts[2]});
	});

	it('test for ERC721', async () => {
		const contractsJZwv0q = await ERC721.new({from: accounts[3]});
		const tokenIdGVkgdBA = BigInt("426")
		const tokenIdct1bwzk = BigInt("893")
		const toYdCvrS = accounts[2]
		const fromDwqJpeK = "0x0000000000000000000000000000000000000001"
		const owneryalNaK8 = accounts[3]
		const tokenIdYA5O9Wl = BigInt("1086")
		const toGPdMhPo = accounts[1]
		const nullJfaNcSU = await contractsJZwv0q.getApproved.call(tokenIdGVkgdBA, {from: "0x0000000000000000000000000000000000000001"});
		await contractsJZwv0q.safeTransferFrom.call(fromDwqJpeK, toYdCvrS, tokenIdct1bwzk, {from: accounts[1]});
		const nullq11wwn3 = await contractsJZwv0q.balanceOf.call(owneryalNaK8, {from: accounts[3]});
		await contractsJZwv0q.approve.call(toGPdMhPo, tokenIdYA5O9Wl, {from: accounts[3]});

		await expect(contractsJZwv0q.getApproved.call(tokenIdGVkgdBA, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractXHiysR6 = await ERC721.new({from: accounts[2]});
		const approvedFIMcOCe = true
		const tooPVtNr6 = accounts[1]
		const approvedgylNhmP = false
		const tozSlxpg = accounts[2]
		const operatorNTHHr3r = accounts[5]
		const ownerpMf9cNg = accounts[5]
		const tokenIdwxfnlUA = BigInt("1794")
		const tokenIdnM513n = BigInt("803")
		const tokenIdrx9f1bD = BigInt("1336")
		await contractXHiysR6.setApprovalForAll.call(tooPVtNr6, approvedFIMcOCe, {from: accounts[4]});
		await contractXHiysR6.setApprovalForAll.call(tozSlxpg, approvedgylNhmP, {from: accounts[2]});
		const null8czqP5 = await contractXHiysR6.isApprovedForAll.call(ownerpMf9cNg, operatorNTHHr3r, {from: accounts[4]});
		const nulljXZZQnz = await contractXHiysR6.getApproved.call(tokenIdwxfnlUA, {from: "0x0000000000000000000000000000000000000001"});
		const nulljA4ZVZB = await contractXHiysR6.ownerOf.call(tokenIdnM513n, {from: accounts[3]});
		const nullDbGolEU = await contractXHiysR6.ownerOf.call(tokenIdrx9f1bD, {from: accounts[4]});

		await expect(contractXHiysR6.setApprovalForAll.call(tooPVtNr6, approvedFIMcOCe, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})