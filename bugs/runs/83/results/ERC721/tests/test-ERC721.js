const ERC721 = artifacts.require("ERC721");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC721', (accounts) => {
	it('test for ERC721', async () => {
		const contracterb5fD = await ERC721.new({from: accounts[3]});
		const tokenIdvv9A8JT = BigInt("227")
		const tovgqvIB = accounts[2]
		const tokenIdI8s82vG = BigInt("108")
		const toBCF6rt7 = accounts[2]
		const tokenIdoNmn2x = BigInt("962")
		const toLs0fqt6 = "0x0000000000000000000000000000000000000001"
		const fromen7BxA = accounts[0]
		const tokenIdbAsD2jz = BigInt("719")
		await contracterb5fD.approve.call(tovgqvIB, tokenIdvv9A8JT, {from: accounts[1]});
		await contracterb5fD.approve.call(toBCF6rt7, tokenIdI8s82vG, {from: accounts[0]});
		await contracterb5fD.safeTransferFrom.call(fromen7BxA, toLs0fqt6, tokenIdoNmn2x, {from: accounts[4]});
		const nullpNO7s1C = await contracterb5fD.getApproved.call(tokenIdbAsD2jz, {from: accounts[0]});

		await expect(contracterb5fD.approve.call(tovgqvIB, tokenIdvv9A8JT, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractmMtX9aj = await ERC721.new({from: accounts[3]});
		const operators9l6PDL = accounts[3]
		const ownerwVpEfEu = accounts[0]
		const operatort4EQKV = accounts[1]
		const owneriKFkp8y = accounts[0]
		const tokenIdkWjLGI9 = BigInt("1416")
		const toAdh7wD6 = "0x0000000000000000000000000000000000000001"
		const fromJVpie5l = accounts[0]
		const nulloCB1fmk = await contractmMtX9aj.isApprovedForAll.call(ownerwVpEfEu, operators9l6PDL, {from: accounts[1]});
		const nulluEEBjNr = await contractmMtX9aj.isApprovedForAll.call(owneriKFkp8y, operatort4EQKV, {from: "0x0000000000000000000000000000000000000001"});
		await contractmMtX9aj.safeTransferFrom.call(fromJVpie5l, toAdh7wD6, tokenIdkWjLGI9, {from: accounts[4]});

		assert.equal(nulloCB1fmk, false)
		assert.equal(nulluEEBjNr, false)
		await expect(contractmMtX9aj.safeTransferFrom.call(fromJVpie5l, toAdh7wD6, tokenIdkWjLGI9, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractbgPhySm = await ERC721.new({from: accounts[2]});
		const approvedbwjcFTq = false
		const tojgVfm9n = accounts[2]
		const tokenIdYKJdka4 = BigInt("1781")
		const toEwXCkWO = "0x0000000000000000000000000000000000000001"
		const fromOAS2nMr = accounts[2]
		const operatorXfeSU95 = accounts[2]
		const owneruxiHae7 = accounts[4]
		await contractbgPhySm.setApprovalForAll.call(tojgVfm9n, approvedbwjcFTq, {from: accounts[1]});
		await contractbgPhySm.transferFrom.call(fromOAS2nMr, toEwXCkWO, tokenIdYKJdka4, {from: accounts[2]});
		const nullm5rrlk6 = await contractbgPhySm.isApprovedForAll.call(owneruxiHae7, operatorXfeSU95, {from: accounts[1]});

		await expect(contractbgPhySm.setApprovalForAll.call(tojgVfm9n, approvedbwjcFTq, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractRTyWXGM = await ERC721.new({from: accounts[1]});
		const owner56VYbZ = "0x0000000000000000000000000000000000000001"
		const approvedZyu2YgX = true
		const toFcndyOz = accounts[2]
		const approvedJUmQ8h = false
		const toItfuXUV = accounts[4]
		const tokenIdZ2oFegt = BigInt("1005")
		const tokenIdxWXqKmB = BigInt("1720")
		const nullrkph8d = await contractRTyWXGM.balanceOf.call(owner56VYbZ, {from: accounts[1]});
		await contractRTyWXGM.setApprovalForAll.call(toFcndyOz, approvedZyu2YgX, {from: accounts[4]});
		await contractRTyWXGM.setApprovalForAll.call(toItfuXUV, approvedJUmQ8h, {from: accounts[0]});
		const nullc6WwZlA = await contractRTyWXGM.getApproved.call(tokenIdZ2oFegt, {from: accounts[4]});
		const nullkelR2Mk = await contractRTyWXGM.getApproved.call(tokenIdxWXqKmB, {from: accounts[3]});

		assert.equal(nullrkph8d, 0)
		await expect(contractRTyWXGM.setApprovalForAll.call(toFcndyOz, approvedZyu2YgX, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractVhQtqVO = await ERC721.new({from: "0x0000000000000000000000000000000000000001"});
		const tokenIdl5YbcqH = BigInt("825")
		const to1SQsO1 = accounts[4]
		const fromGVORneZ = accounts[2]
		const tokenIdI9ZC3kX = BigInt("213")
		const tok4vM4J = accounts[4]
		const fromgNisYh3 = accounts[3]
		const tokenIdL3mYwx0 = BigInt("1581")
		const toi3k7NM6 = accounts[1]
		const fromStyHvga = accounts[3]
		const approvedrpYvNmf = false
		const toHjF4dJl = accounts[1]
		const approvedPxj3hWn = false
		const tochhif4H = accounts[0]
		const tokenIdgc29dT = BigInt("771")
		await contractVhQtqVO.transferFrom.call(fromGVORneZ, to1SQsO1, tokenIdl5YbcqH, {from: accounts[5]});
		await contractVhQtqVO.safeTransferFrom.call(fromgNisYh3, tok4vM4J, tokenIdI9ZC3kX, {from: accounts[2]});
		await contractVhQtqVO.safeTransferFrom.call(fromStyHvga, toi3k7NM6, tokenIdL3mYwx0, {from: accounts[3]});
		await contractVhQtqVO.setApprovalForAll.call(toHjF4dJl, approvedrpYvNmf, {from: accounts[1]});
		await contractVhQtqVO.setApprovalForAll.call(tochhif4H, approvedPxj3hWn, {from: accounts[1]});
		const nulljK7trAl = await contractVhQtqVO.ownerOf.call(tokenIdgc29dT, {from: accounts[2]});
	});

	it('test for ERC721', async () => {
		const contractep6lIlq = await ERC721.new({from: accounts[0]});
		const approvedwjxh2Vy = false
		const todjeZ1cU = accounts[4]
		const approvedD0h8tb4 = false
		const toagtbCXR = accounts[3]
		const tokenIdbxURywY = BigInt("485")
		const toXKntiwu = accounts[3]
		const _datame7IorA = "0x1117020e05060d17"
		const tokenIdhLIaDqY = BigInt("529")
		const tomKCnbg7 = accounts[0]
		const frommUVgprP = accounts[1]
		const tokenIdPj06Hpz = BigInt("1729")
		const toy4I07D5 = accounts[4]
		const fromzqUgo1I = "0x0000000000000000000000000000000000000001"
		const tokenIdlCAfCT = BigInt("784")
		await contractep6lIlq.setApprovalForAll.call(todjeZ1cU, approvedwjxh2Vy, {from: accounts[4]});
		await contractep6lIlq.setApprovalForAll.call(toagtbCXR, approvedD0h8tb4, {from: accounts[3]});
		await contractep6lIlq.approve.call(toXKntiwu, tokenIdbxURywY, {from: accounts[4]});
		await contractep6lIlq.safeTransferFrom.call(frommUVgprP, tomKCnbg7, tokenIdhLIaDqY, _datame7IorA, {from: accounts[5]});
		await contractep6lIlq.transferFrom.call(fromzqUgo1I, toy4I07D5, tokenIdPj06Hpz, {from: accounts[1]});
		const nullifVrjQH = await contractep6lIlq.getApproved.call(tokenIdlCAfCT, {from: accounts[1]});

		await expect(contractep6lIlq.setApprovalForAll.call(todjeZ1cU, approvedwjxh2Vy, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})