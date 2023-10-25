const ERC721 = artifacts.require("ERC721");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC721', (accounts) => {
	it('test for ERC721', async () => {
		const contractIEUpFV9 = await ERC721.new({from: accounts[0]});
		const ownerLLzPSZM = accounts[0]
		const tokenIdWh3MjkO = BigInt("1771")
		const tooDJtaqJ = accounts[5]
		const fromPf8OX2S = "0x0000000000000000000000000000000000000001"
		const tokenIdRMReCnD = BigInt("1364")
		const nulldFs4995 = await contractIEUpFV9.balanceOf.call(ownerLLzPSZM, {from: accounts[3]});
		await contractIEUpFV9.transferFrom.call(fromPf8OX2S, tooDJtaqJ, tokenIdWh3MjkO, {from: accounts[1]});
		const nullmBz0YI = await contractIEUpFV9.ownerOf.call(tokenIdRMReCnD, {from: accounts[4]});

		assert.equal(nulldFs4995, 0)
		await expect(contractIEUpFV9.transferFrom.call(fromPf8OX2S, tooDJtaqJ, tokenIdWh3MjkO, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractIpWW0sF = await ERC721.new({from: accounts[2]});
		const operatorIpgALJH = "0x0000000000000000000000000000000000000001"
		const ownerdxDr8Nl = accounts[3]
		const tokenIdZMdHYXz = BigInt("1296")
		const tof3v3J25 = "0x0000000000000000000000000000000000000001"
		const tokenIdXRgl7D = BigInt("1791")
		const toB9H2PI = accounts[4]
		const tokenIdRCiBUg8 = BigInt("249")
		const tokenIdOgflHN = BigInt("846")
		const tokenIdH6CsG6j = BigInt("1168")
		const nullxoAfcjL = await contractIpWW0sF.isApprovedForAll.call(ownerdxDr8Nl, operatorIpgALJH, {from: accounts[1]});
		await contractIpWW0sF.approve.call(tof3v3J25, tokenIdZMdHYXz, {from: accounts[4]});
		await contractIpWW0sF.approve.call(toB9H2PI, tokenIdXRgl7D, {from: accounts[1]});
		const nullgveNTvb = await contractIpWW0sF.ownerOf.call(tokenIdRCiBUg8, {from: "0x0000000000000000000000000000000000000001"});
		const nullBZxNNA2 = await contractIpWW0sF.ownerOf.call(tokenIdOgflHN, {from: accounts[0]});
		const nullfjp4yhz = await contractIpWW0sF.getApproved.call(tokenIdH6CsG6j, {from: accounts[4]});

		assert.equal(nullxoAfcjL, false)
		await expect(contractIpWW0sF.approve.call(tof3v3J25, tokenIdZMdHYXz, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractXFvW5QG = await ERC721.new({from: accounts[3]});
		const approvedXObVLye = true
		const toXK2Zd8c = accounts[1]
		const _datanogKYu = "0x0e1c1208131e0415010308071e19151c"
		const tokenIdDwcG5o = BigInt("404")
		const toQL03K03 = accounts[0]
		const fromtLRjq97 = accounts[1]
		await contractXFvW5QG.setApprovalForAll.call(toXK2Zd8c, approvedXObVLye, {from: accounts[1]});
		await contractXFvW5QG.safeTransferFrom.call(fromtLRjq97, toQL03K03, tokenIdDwcG5o, _datanogKYu, {from: accounts[2]});

		await expect(contractXFvW5QG.setApprovalForAll.call(toXK2Zd8c, approvedXObVLye, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractR0lROOQ = await ERC721.new({from: "0x0000000000000000000000000000000000000001"});
		const tokenIdTqmwf8e = BigInt("1248")
		const tokenIdH6QqSLM = BigInt("1374")
		const nullj7MF3R = await contractR0lROOQ.getApproved.call(tokenIdTqmwf8e, {from: accounts[4]});
		const nullL97Sxbi = await contractR0lROOQ.ownerOf.call(tokenIdH6QqSLM, {from: accounts[2]});
	});

	it('test for ERC721', async () => {
		const contract8NsU93 = await ERC721.new({from: accounts[3]});
		const approvedY52DIDY = true
		const toHPl2QuH = accounts[2]
		const tokenIdGXPZw4Z = BigInt("1768")
		const _dataNvPBsYd = "0x0e1c1208131e0415010308071e19151c"
		const tokenIdkKE3Qkv = BigInt("404")
		const togypYcuW = accounts[0]
		const fromfNusJfs = accounts[1]
		await contract8NsU93.setApprovalForAll.call(toHPl2QuH, approvedY52DIDY, {from: accounts[1]});
		const nullUARFNH4 = await contract8NsU93.getApproved.call(tokenIdGXPZw4Z, {from: "0x0000000000000000000000000000000000000001"});
		await contract8NsU93.safeTransferFrom.call(fromfNusJfs, togypYcuW, tokenIdkKE3Qkv, _dataNvPBsYd, {from: accounts[2]});

		await expect(contract8NsU93.setApprovalForAll.call(toHPl2QuH, approvedY52DIDY, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})