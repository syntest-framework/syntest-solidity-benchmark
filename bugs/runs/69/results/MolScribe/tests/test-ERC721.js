const ERC721 = artifacts.require("ERC721");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC721', (accounts) => {
	it('test for ERC721', async () => {
		const contractwCCq6gO = await ERC721.new({from: accounts[0]});
		const tokenIdi79j520 = BigInt("1697")
		const towMnW6wd = accounts[5]
		const tokenIdopiV0ph = BigInt("348")
		const tokenIdWagInkX = BigInt("1000")
		const tovntJbvD = accounts[5]
		const ownerwqXSZcB = accounts[1]
		await contractwCCq6gO.approve.call(towMnW6wd, tokenIdi79j520, {from: "0x0000000000000000000000000000000000000001"});
		const nulljpyO5Tk = await contractwCCq6gO.ownerOf.call(tokenIdopiV0ph, {from: accounts[4]});
		await contractwCCq6gO.approve.call(tovntJbvD, tokenIdWagInkX, {from: accounts[4]});
		const nullrIQ039p = await contractwCCq6gO.balanceOf.call(ownerwqXSZcB, {from: accounts[3]});

		await expect(contractwCCq6gO.approve.call(towMnW6wd, tokenIdi79j520, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractbuLSKv = await ERC721.new({from: accounts[0]});
		const tokenIdVXbPYTP = BigInt("1557")
		const tovbZdmlh = accounts[3]
		const fromfPtemeG = accounts[3]
		const approvedB6ij91e = true
		const toB3SEsPn = accounts[2]
		await contractbuLSKv.safeTransferFrom.call(fromfPtemeG, tovbZdmlh, tokenIdVXbPYTP, {from: accounts[2]});
		await contractbuLSKv.setApprovalForAll.call(toB3SEsPn, approvedB6ij91e, {from: accounts[2]});

		await expect(contractbuLSKv.safeTransferFrom.call(fromfPtemeG, tovbZdmlh, tokenIdVXbPYTP, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractXuWCOz = await ERC721.new({from: accounts[0]});
		const approvedKqN3ZkM = true
		const toWcLSJlg = accounts[3]
		const operatorl29dMRC = accounts[1]
		const ownerZCRwuaq = accounts[2]
		const _datamF7Wox6 = "0x10030e15140d121a201a0c1f15031f1d1b1b181617"
		const tokenIdluJvHh = BigInt("1253")
		const toFphlGv4 = accounts[0]
		const fromDrffe0 = accounts[4]
		await contractXuWCOz.setApprovalForAll.call(toWcLSJlg, approvedKqN3ZkM, {from: accounts[3]});
		const nullk8RM1bP = await contractXuWCOz.isApprovedForAll.call(ownerZCRwuaq, operatorl29dMRC, {from: accounts[3]});
		await contractXuWCOz.safeTransferFrom.call(fromDrffe0, toFphlGv4, tokenIdluJvHh, _datamF7Wox6, {from: accounts[0]});

		await expect(contractXuWCOz.setApprovalForAll.call(toWcLSJlg, approvedKqN3ZkM, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractoOqSQ0Z = await ERC721.new({from: accounts[3]});
		const tokenIdiORSq4 = BigInt("1540")
		const tokenIdJhhAWr0 = BigInt("1671")
		const to8b4GL6 = accounts[4]
		const operatorZKwit41 = accounts[2]
		const owner3rsQbM = accounts[1]
		const nullLGSLcYr = await contractoOqSQ0Z.getApproved.call(tokenIdiORSq4, {from: accounts[4]});
		await contractoOqSQ0Z.approve.call(to8b4GL6, tokenIdJhhAWr0, {from: accounts[0]});
		const nulldC9tddL = await contractoOqSQ0Z.isApprovedForAll.call(owner3rsQbM, operatorZKwit41, {from: accounts[3]});

		await expect(contractoOqSQ0Z.getApproved.call(tokenIdiORSq4, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractNsiBIJ = await ERC721.new({from: "0x0000000000000000000000000000000000000001"});
		const _dataCUSmca9 = "0x12170b18180c130b1d0a120a051d160a0c00060915041f19191a0f191901"
		const tokenIdmzzSpRx = BigInt("1969")
		const toYFwS47a = accounts[4]
		const fromvH66ZDq = accounts[2]
		const operatormGQydxQ = accounts[2]
		const ownerXFGML1x = accounts[4]
		await contractNsiBIJ.safeTransferFrom.call(fromvH66ZDq, toYFwS47a, tokenIdmzzSpRx, _dataCUSmca9, {from: accounts[3]});
		const nullFouODZU = await contractNsiBIJ.isApprovedForAll.call(ownerXFGML1x, operatormGQydxQ, {from: accounts[3]});
	});
})