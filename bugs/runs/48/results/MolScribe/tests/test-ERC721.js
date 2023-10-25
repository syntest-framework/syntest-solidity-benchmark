const ERC721 = artifacts.require("ERC721");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC721', (accounts) => {
	it('test for ERC721', async () => {
		const contractd23dX4X = await ERC721.new({from: "0x0000000000000000000000000000000000000001"});
		const tokenIdemq1cnH = BigInt("565")
		const toOJr72mN = accounts[1]
		const fromrXYefwu = accounts[5]
		const tokenIdiAbQrWi = BigInt("89")
		const touVDVQpq = accounts[1]
		const operatorddI77FN = accounts[2]
		const ownerhpXUWYP = accounts[3]
		await contractd23dX4X.safeTransferFrom.call(fromrXYefwu, toOJr72mN, tokenIdemq1cnH, {from: accounts[1]});
		await contractd23dX4X.approve.call(touVDVQpq, tokenIdiAbQrWi, {from: accounts[4]});
		const nullBLbRDXl = await contractd23dX4X.isApprovedForAll.call(ownerhpXUWYP, operatorddI77FN, {from: accounts[1]});
	});

	it('test for ERC721', async () => {
		const contractSZgPOCD = await ERC721.new({from: accounts[1]});
		const tokenIdy6L97K2 = BigInt("112")
		const _dataFspxnC0 = "0x100b130e"
		const tokenIdWyvEYe9 = BigInt("1426")
		const torYLSVxQ = accounts[4]
		const fromKz7JUpk = accounts[3]
		const tokenIdavMRym = BigInt("1543")
		const tooD9aC9 = accounts[2]
		const nullxIWbMct = await contractSZgPOCD.getApproved.call(tokenIdy6L97K2, {from: accounts[1]});
		await contractSZgPOCD.safeTransferFrom.call(fromKz7JUpk, torYLSVxQ, tokenIdWyvEYe9, _dataFspxnC0, {from: accounts[5]});
		await contractSZgPOCD.approve.call(tooD9aC9, tokenIdavMRym, {from: accounts[3]});

		await expect(contractSZgPOCD.getApproved.call(tokenIdy6L97K2, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractYrhWqYN = await ERC721.new({from: accounts[5]});
		const tokenIdlJ7u74Y = BigInt("68")
		const totQ7s4dI = accounts[1]
		const operatora215Nq2 = accounts[1]
		const ownerx92bJt8 = accounts[4]
		const tokenIdgMvFr2 = BigInt("1611")
		const tobkMUfYI = accounts[1]
		const fromoaiM71L = accounts[2]
		await contractYrhWqYN.approve.call(totQ7s4dI, tokenIdlJ7u74Y, {from: accounts[3]});
		const nullNFQHFL = await contractYrhWqYN.isApprovedForAll.call(ownerx92bJt8, operatora215Nq2, {from: accounts[2]});
		await contractYrhWqYN.safeTransferFrom.call(fromoaiM71L, tobkMUfYI, tokenIdgMvFr2, {from: accounts[1]});

		await expect(contractYrhWqYN.approve.call(totQ7s4dI, tokenIdlJ7u74Y, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contracthTwl1Bz = await ERC721.new({from: accounts[4]});
		const _dataNbss6A = "0x171110050513090d1107050808"
		const tokenIdDAd8W4C = BigInt("1372")
		const ton2mdpZ = accounts[1]
		const fromf9fQoe1 = accounts[0]
		const tokenIdFB1xjuJ = BigInt("1611")
		const todHBrgH = accounts[4]
		const tokenIdCRzRkqB = BigInt("1422")
		const approvedY0ooV4a = true
		const toHZsp4at = accounts[1]
		const tokenIdgRcOSe = BigInt("1749")
		const toyFCJ5hn = accounts[1]
		const froma9YI6G = accounts[2]
		await contracthTwl1Bz.safeTransferFrom.call(fromf9fQoe1, ton2mdpZ, tokenIdDAd8W4C, _dataNbss6A, {from: accounts[0]});
		await contracthTwl1Bz.approve.call(todHBrgH, tokenIdFB1xjuJ, {from: "0x0000000000000000000000000000000000000001"});
		const nullMyJhqY = await contracthTwl1Bz.ownerOf.call(tokenIdCRzRkqB, {from: accounts[3]});
		await contracthTwl1Bz.setApprovalForAll.call(toHZsp4at, approvedY0ooV4a, {from: "0x0000000000000000000000000000000000000001"});
		await contracthTwl1Bz.transferFrom.call(froma9YI6G, toyFCJ5hn, tokenIdgRcOSe, {from: accounts[1]});

		await expect(contracthTwl1Bz.safeTransferFrom.call(fromf9fQoe1, ton2mdpZ, tokenIdDAd8W4C, _dataNbss6A, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractQ8dq2k9 = await ERC721.new({from: accounts[3]});
		const approvedvxvVBk = false
		const tocpVyBpe = accounts[0]
		const tokenIdqOOmQ77 = BigInt("689")
		const approvedjksZtBo = false
		const toh7xkxkn = accounts[4]
		const tokenIdZQkHqeu = BigInt("1634")
		const toY8YG5c = accounts[0]
		const fromF9sNRos = accounts[0]
		const tokenIdrWngmz = BigInt("801")
		const tokuoHFcL = accounts[6]
		const fromgsNERu8 = accounts[5]
		await contractQ8dq2k9.setApprovalForAll.call(tocpVyBpe, approvedvxvVBk, {from: accounts[0]});
		const nullY8mhi1f = await contractQ8dq2k9.ownerOf.call(tokenIdqOOmQ77, {from: accounts[4]});
		await contractQ8dq2k9.setApprovalForAll.call(toh7xkxkn, approvedjksZtBo, {from: accounts[0]});
		await contractQ8dq2k9.transferFrom.call(fromF9sNRos, toY8YG5c, tokenIdZQkHqeu, {from: accounts[5]});
		await contractQ8dq2k9.transferFrom.call(fromgsNERu8, tokuoHFcL, tokenIdrWngmz, {from: accounts[1]});

		await expect(contractQ8dq2k9.setApprovalForAll.call(tocpVyBpe, approvedvxvVBk, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})