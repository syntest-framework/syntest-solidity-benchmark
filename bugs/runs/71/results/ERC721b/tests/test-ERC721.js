const ERC721 = artifacts.require("ERC721");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC721', (accounts) => {
	it('test for ERC721', async () => {
		const contractGsTX4B1 = await ERC721.new({from: accounts[3]});
		const tokenIdGecaf8P = BigInt("32")
		const toODTx5DY = accounts[4]
		const approvedCT9iASR = false
		const tobrgWFNV = accounts[2]
		const tokenIdY09HCek = BigInt("724")
		await contractGsTX4B1.approve.call(toODTx5DY, tokenIdGecaf8P, {from: accounts[4]});
		await contractGsTX4B1.setApprovalForAll.call(tobrgWFNV, approvedCT9iASR, {from: accounts[5]});
		const nullqDE2OK = await contractGsTX4B1.ownerOf.call(tokenIdY09HCek, {from: accounts[2]});

		await expect(contractGsTX4B1.approve.call(toODTx5DY, tokenIdGecaf8P, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractniwoIjU = await ERC721.new({from: accounts[0]});
		const tokenIdU8qqxDn = BigInt("1340")
		const toDYJyneU = accounts[4]
		const fromuxsNouT = accounts[3]
		const operatoruWKXR3f = "0x0000000000000000000000000000000000000001"
		const ownerKyc7FYT = accounts[4]
		const approvedgKmTsWB = true
		const toFeOOulJ = accounts[4]
		const tokenIdrLmMHLd = BigInt("649")
		const toFzIb0O = accounts[1]
		const fromuTGlkLh = accounts[4]
		await contractniwoIjU.safeTransferFrom.call(fromuxsNouT, toDYJyneU, tokenIdU8qqxDn, {from: accounts[4]});
		const nullI98zV1 = await contractniwoIjU.isApprovedForAll.call(ownerKyc7FYT, operatoruWKXR3f, {from: accounts[5]});
		await contractniwoIjU.setApprovalForAll.call(toFeOOulJ, approvedgKmTsWB, {from: accounts[3]});
		await contractniwoIjU.transferFrom.call(fromuTGlkLh, toFzIb0O, tokenIdrLmMHLd, {from: accounts[5]});

		await expect(contractniwoIjU.safeTransferFrom.call(fromuxsNouT, toDYJyneU, tokenIdU8qqxDn, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractPfEEimg = await ERC721.new({from: "0x0000000000000000000000000000000000000001"});
		const operatoriuQ0Yv = accounts[4]
		const ownerkpddh01 = accounts[0]
		const tokenIdOjYmmd3 = BigInt("1918")
		const tokenIdlvje9L = BigInt("711")
		const toNJ0frC9 = accounts[1]
		const fromTkPNAM1 = accounts[0]
		const tokenIdQu35cTD = BigInt("2023")
		const toYhiZJ7c = accounts[3]
		const nullHyt0sP4 = await contractPfEEimg.isApprovedForAll.call(ownerkpddh01, operatoriuQ0Yv, {from: accounts[1]});
		const nullF1i1vR0 = await contractPfEEimg.getApproved.call(tokenIdOjYmmd3, {from: accounts[1]});
		await contractPfEEimg.safeTransferFrom.call(fromTkPNAM1, toNJ0frC9, tokenIdlvje9L, {from: accounts[2]});
		await contractPfEEimg.approve.call(toYhiZJ7c, tokenIdQu35cTD, {from: accounts[3]});
	});

	it('test for ERC721', async () => {
		const contractdVG1tyT = await ERC721.new({from: accounts[2]});
		const approvedujS7clM = true
		const toq4gUDU = accounts[2]
		const tokenIdw00Lwap = BigInt("1349")
		const toPAEu7vL = accounts[2]
		const frome87e29H = accounts[4]
		const tokenIdZ6b8TCY = BigInt("522")
		const toRtmzi3t = accounts[4]
		const tokenIdTlfBejC = BigInt("114")
		const toNtqNDm = accounts[1]
		const tokenIdyrjD6uU = BigInt("1867")
		const _dataIgMGvYp = "0x18160415090c080318001f181104"
		const tokenIdyeP2GlO = BigInt("843")
		const toWHvvWd4 = accounts[0]
		const fromazDG5gG = accounts[0]
		await contractdVG1tyT.setApprovalForAll.call(toq4gUDU, approvedujS7clM, {from: accounts[2]});
		await contractdVG1tyT.safeTransferFrom.call(frome87e29H, toPAEu7vL, tokenIdw00Lwap, {from: "0x0000000000000000000000000000000000000001"});
		await contractdVG1tyT.approve.call(toRtmzi3t, tokenIdZ6b8TCY, {from: accounts[2]});
		await contractdVG1tyT.approve.call(toNtqNDm, tokenIdTlfBejC, {from: accounts[0]});
		const nullgbIFrb = await contractdVG1tyT.ownerOf.call(tokenIdyrjD6uU, {from: accounts[5]});
		await contractdVG1tyT.safeTransferFrom.call(fromazDG5gG, toWHvvWd4, tokenIdyeP2GlO, _dataIgMGvYp, {from: "0x0000000000000000000000000000000000000001"});

		await expect(contractdVG1tyT.setApprovalForAll.call(toq4gUDU, approvedujS7clM, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractGbOfnJ1 = await ERC721.new({from: accounts[3]});
		const approvedO28Yqx5 = true
		const toCaDAk2 = accounts[0]
		const tokenIdgE4n1Y = BigInt("683")
		const toowj041c = accounts[1]
		const fromAxo1dvU = accounts[3]
		const tokenIdtnF2JMq = BigInt("395")
		await contractGbOfnJ1.setApprovalForAll.call(toCaDAk2, approvedO28Yqx5, {from: accounts[3]});
		await contractGbOfnJ1.transferFrom.call(fromAxo1dvU, toowj041c, tokenIdgE4n1Y, {from: accounts[1]});
		const nulleioEZZN = await contractGbOfnJ1.getApproved.call(tokenIdtnF2JMq, {from: accounts[3]});

		await expect(contractGbOfnJ1.setApprovalForAll.call(toCaDAk2, approvedO28Yqx5, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractd4bAhfx = await ERC721.new({from: accounts[3]});
		const operatorj8NlEM6 = accounts[2]
		const ownere0TzT60 = accounts[1]
		const tokenIddBeUu2M = BigInt("810")
		const tokenIdVJret3v = BigInt("550")
		const tobghP8fW = accounts[3]
		const fromYquRKEv = accounts[3]
		const operatormYE6PZM = accounts[1]
		const ownerK91Uu4O = accounts[2]
		const tokenIdl74B2ND = BigInt("1681")
		const tobImslhL = accounts[3]
		const fromCq9phm4 = accounts[5]
		const nullpu3MnIH = await contractd4bAhfx.isApprovedForAll.call(ownere0TzT60, operatorj8NlEM6, {from: accounts[0]});
		const nullpvEE8RO = await contractd4bAhfx.getApproved.call(tokenIddBeUu2M, {from: accounts[4]});
		await contractd4bAhfx.safeTransferFrom.call(fromYquRKEv, tobghP8fW, tokenIdVJret3v, {from: accounts[4]});
		const nullwqWrJrs = await contractd4bAhfx.isApprovedForAll.call(ownerK91Uu4O, operatormYE6PZM, {from: accounts[2]});
		await contractd4bAhfx.safeTransferFrom.call(fromCq9phm4, tobImslhL, tokenIdl74B2ND, {from: accounts[2]});

		assert.equal(nullpu3MnIH, false)
		await expect(contractd4bAhfx.getApproved.call(tokenIddBeUu2M, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contract5EJ6c5 = await ERC721.new({from: accounts[3]});
		const approvedxgCV6Ga = false
		const towU6faX9 = accounts[0]
		const ownerlK3ArH = accounts[4]
		const tokenIdOKSVSw8 = BigInt("1769")
		const toLZaaKy = accounts[1]
		const fromLghofYp = accounts[1]
		await contract5EJ6c5.setApprovalForAll.call(towU6faX9, approvedxgCV6Ga, {from: accounts[3]});
		const nullPgK3CZD = await contract5EJ6c5.balanceOf.call(ownerlK3ArH, {from: accounts[1]});
		await contract5EJ6c5.transferFrom.call(fromLghofYp, toLZaaKy, tokenIdOKSVSw8, {from: accounts[5]});

		assert.equal(nullPgK3CZD, 0)
		await expect(contract5EJ6c5.balanceOf.call(ownerlK3ArH, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})