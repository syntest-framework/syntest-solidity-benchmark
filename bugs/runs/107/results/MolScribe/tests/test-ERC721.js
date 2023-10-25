const ERC721 = artifacts.require("ERC721");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC721', (accounts) => {
	it('test for ERC721', async () => {
		const contractGHh08Wz = await ERC721.new({from: accounts[1]});
		const tokenIdimZC0ct = BigInt("78")
		const approvedTUB3NJB = true
		const toeVxTURP = accounts[2]
		const nullsyp35C = await contractGHh08Wz.ownerOf.call(tokenIdimZC0ct, {from: accounts[3]});
		await contractGHh08Wz.setApprovalForAll.call(toeVxTURP, approvedTUB3NJB, {from: accounts[4]});

		await expect(contractGHh08Wz.ownerOf.call(tokenIdimZC0ct, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractAypqXCK = await ERC721.new({from: accounts[3]});
		const tokenIdm1Fz7Vx = BigInt("1405")
		const toSsKV4Sm = accounts[0]
		const fromTRi2sHK = accounts[4]
		const tokenIdRgk8x4x = BigInt("266")
		const toAFBfLs = accounts[5]
		const fromhWfTa38 = accounts[2]
		const tokenIdLmZYIwo = BigInt("133")
		const tor2B0KBf = accounts[4]
		const fromjzEuiWf = accounts[1]
		await contractAypqXCK.transferFrom.call(fromTRi2sHK, toSsKV4Sm, tokenIdm1Fz7Vx, {from: accounts[1]});
		await contractAypqXCK.safeTransferFrom.call(fromhWfTa38, toAFBfLs, tokenIdRgk8x4x, {from: accounts[2]});
		await contractAypqXCK.transferFrom.call(fromjzEuiWf, tor2B0KBf, tokenIdLmZYIwo, {from: accounts[4]});

		await expect(contractAypqXCK.transferFrom.call(fromTRi2sHK, toSsKV4Sm, tokenIdm1Fz7Vx, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractUuxVP13 = await ERC721.new({from: accounts[5]});
		const tokenIdBxxZ91J = BigInt("1299")
		const tokenIdKHGKxB9 = BigInt("304")
		const to9H81SJ = accounts[0]
		const _datadcKAcIL = "0x0a0711090b1a0a021410140b060413051d130606"
		const tokenIdLL7s7KA = BigInt("148")
		const toNEmFhlP = accounts[3]
		const fromAj0E2O = accounts[3]
		const operatorU6KoVEq = accounts[0]
		const owneri0gsfH = accounts[3]
		const tokenIdoRBuAOp = BigInt("554")
		const toYTq7Ky = accounts[1]
		const fromGtODYHI = accounts[3]
		const nullwGu9eWK = await contractUuxVP13.getApproved.call(tokenIdBxxZ91J, {from: "0x0000000000000000000000000000000000000001"});
		await contractUuxVP13.approve.call(to9H81SJ, tokenIdKHGKxB9, {from: accounts[2]});
		await contractUuxVP13.safeTransferFrom.call(fromAj0E2O, toNEmFhlP, tokenIdLL7s7KA, _datadcKAcIL, {from: accounts[1]});
		const nullLbbjwTm = await contractUuxVP13.isApprovedForAll.call(owneri0gsfH, operatorU6KoVEq, {from: accounts[3]});
		await contractUuxVP13.transferFrom.call(fromGtODYHI, toYTq7Ky, tokenIdoRBuAOp, {from: accounts[0]});

		await expect(contractUuxVP13.getApproved.call(tokenIdBxxZ91J, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractfKiL3B = await ERC721.new({from: accounts[4]});
		const approvedEXOnxg6 = false
		const toyOz1dhf = accounts[2]
		const tokenIdYMbFQbG = BigInt("818")
		const toDe7OScV = accounts[5]
		const fromtWECxlh = accounts[1]
		const tokenIdWe0clzJ = BigInt("1827")
		const toLkAEumG = accounts[4]
		const fromNhKnuDa = accounts[3]
		const approved3ETwlv = true
		const toG9DbNzs = accounts[3]
		await contractfKiL3B.setApprovalForAll.call(toyOz1dhf, approvedEXOnxg6, {from: accounts[2]});
		await contractfKiL3B.transferFrom.call(fromtWECxlh, toDe7OScV, tokenIdYMbFQbG, {from: "0x0000000000000000000000000000000000000001"});
		await contractfKiL3B.transferFrom.call(fromNhKnuDa, toLkAEumG, tokenIdWe0clzJ, {from: accounts[0]});
		await contractfKiL3B.setApprovalForAll.call(toG9DbNzs, approved3ETwlv, {from: accounts[4]});

		await expect(contractfKiL3B.setApprovalForAll.call(toyOz1dhf, approvedEXOnxg6, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractfMn45jm = await ERC721.new({from: "0x0000000000000000000000000000000000000001"});
		const operatorWev9zvK = accounts[3]
		const ownerk3hWAoE = accounts[3]
		const operatorISZzBNn = accounts[1]
		const ownerheXk67z = accounts[1]
		const approvedCoWDBjt = true
		const toeHjn92m = accounts[2]
		const nullbAszGs4 = await contractfMn45jm.isApprovedForAll.call(ownerk3hWAoE, operatorWev9zvK, {from: "0x0000000000000000000000000000000000000001"});
		const nullPIpWllO = await contractfMn45jm.isApprovedForAll.call(ownerheXk67z, operatorISZzBNn, {from: "0x0000000000000000000000000000000000000001"});
		await contractfMn45jm.setApprovalForAll.call(toeHjn92m, approvedCoWDBjt, {from: accounts[4]});
	});
})