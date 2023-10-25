const ERC721 = artifacts.require("ERC721");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC721', (accounts) => {
	it('test for ERC721', async () => {
		const contractMRDRjHg = await ERC721.new({from: accounts[1]});
		const operatorXqmNMfd = accounts[1]
		const owneros3LQ5j = accounts[2]
		const ownerCEi2r6Y = accounts[3]
		const tokenIdfPuQOU = BigInt("1262")
		const tond2SGak = "0x0000000000000000000000000000000000000001"
		const fromzn1A119 = accounts[4]
		const operatoreG8fcdN = "0x0000000000000000000000000000000000000001"
		const ownervMl3k2G = accounts[1]
		const nullMtGoDBF = await contractMRDRjHg.isApprovedForAll.call(owneros3LQ5j, operatorXqmNMfd, {from: accounts[2]});
		const nullWFkKrf7 = await contractMRDRjHg.balanceOf.call(ownerCEi2r6Y, {from: accounts[4]});
		await contractMRDRjHg.safeTransferFrom.call(fromzn1A119, tond2SGak, tokenIdfPuQOU, {from: accounts[3]});
		const nullQncS2C7 = await contractMRDRjHg.isApprovedForAll.call(ownervMl3k2G, operatoreG8fcdN, {from: accounts[3]});

		assert.equal(nullMtGoDBF, false)
		assert.equal(nullWFkKrf7, 0)
		await expect(contractMRDRjHg.safeTransferFrom.call(fromzn1A119, tond2SGak, tokenIdfPuQOU, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractGJgJJ8E = await ERC721.new({from: "0x0000000000000000000000000000000000000001"});
		const tokenIdpi12EmA = BigInt("458")
		const toctgIhB6 = accounts[0]
		const fromBAJ4w2 = accounts[1]
		const tokenIdRMXJz46 = BigInt("1765")
		const tokenIdAGcpIE = BigInt("1632")
		const toh1BF9Io = accounts[4]
		const fromnvCr6NR = accounts[0]
		const tokenIdQQ4GPmf = BigInt("1406")
		await contractGJgJJ8E.transferFrom.call(fromBAJ4w2, toctgIhB6, tokenIdpi12EmA, {from: accounts[2]});
		const nullXSc8a5 = await contractGJgJJ8E.getApproved.call(tokenIdRMXJz46, {from: accounts[1]});
		await contractGJgJJ8E.safeTransferFrom.call(fromnvCr6NR, toh1BF9Io, tokenIdAGcpIE, {from: accounts[3]});
		const nullXz6FJcU = await contractGJgJJ8E.ownerOf.call(tokenIdQQ4GPmf, {from: accounts[4]});
	});

	it('test for ERC721', async () => {
		const contractohZgTtb = await ERC721.new({from: accounts[3]});
		const tokenIdin5zXzh = BigInt("571")
		const toYVXr3l = accounts[3]
		const ownereCoufxK = accounts[4]
		const tokenIdMNgAbZF = BigInt("1304")
		const tovp0yjDR = accounts[0]
		const fromqdSBSd2 = accounts[1]
		const ownerkaxusER = accounts[1]
		const _dataVlZxxdR = "0x1816150c0704160012070f0c0b17130405011e1a190f1d1a18"
		const tokenIduluZI6 = BigInt("773")
		const toFFkVy1x = accounts[1]
		const fromHpNari6 = accounts[1]
		await contractohZgTtb.approve.call(toYVXr3l, tokenIdin5zXzh, {from: accounts[1]});
		const nulliCwDQdY = await contractohZgTtb.balanceOf.call(ownereCoufxK, {from: "0x0000000000000000000000000000000000000001"});
		await contractohZgTtb.safeTransferFrom.call(fromqdSBSd2, tovp0yjDR, tokenIdMNgAbZF, {from: accounts[2]});
		const nullIgY2huO = await contractohZgTtb.balanceOf.call(ownerkaxusER, {from: accounts[3]});
		await contractohZgTtb.safeTransferFrom.call(fromHpNari6, toFFkVy1x, tokenIduluZI6, _dataVlZxxdR, {from: accounts[2]});

		await expect(contractohZgTtb.approve.call(toYVXr3l, tokenIdin5zXzh, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractXPFwpXU = await ERC721.new({from: accounts[2]});
		const tokenIdOv3pIa8 = BigInt("622")
		const tokenIdepb9Rh6 = BigInt("2043")
		const nullN2HZn6G = await contractXPFwpXU.getApproved.call(tokenIdOv3pIa8, {from: accounts[0]});
		const nullXLZ3c4V = await contractXPFwpXU.getApproved.call(tokenIdepb9Rh6, {from: accounts[2]});

		await expect(contractXPFwpXU.getApproved.call(tokenIdOv3pIa8, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractWMhWj91 = await ERC721.new({from: accounts[1]});
		const tokenIdSz5zJes = BigInt("1943")
		const touciGr0e = accounts[1]
		const fromFVFyqWo = accounts[2]
		const tokenIdY65jhCO = BigInt("1430")
		const toSV55tB2 = accounts[2]
		const tokenIdqNQv3I = BigInt("1610")
		await contractWMhWj91.transferFrom.call(fromFVFyqWo, touciGr0e, tokenIdSz5zJes, {from: "0x0000000000000000000000000000000000000001"});
		await contractWMhWj91.approve.call(toSV55tB2, tokenIdY65jhCO, {from: accounts[4]});
		const nulldHrpRn0 = await contractWMhWj91.getApproved.call(tokenIdqNQv3I, {from: accounts[4]});

		await expect(contractWMhWj91.transferFrom.call(fromFVFyqWo, touciGr0e, tokenIdSz5zJes, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractDJUtboq = await ERC721.new({from: accounts[2]});
		const approvedDIAXkUM = false
		const toPEIOL9c = accounts[2]
		const tokenIddb0Nhf4 = BigInt("468")
		const tov9L5mN = accounts[0]
		const tokenIdzQzHHr = BigInt("1824")
		const approvedbiYVtc7 = false
		const toZVSdYs = "0x0000000000000000000000000000000000000001"
		const operatorb4hG2xt = accounts[1]
		const ownerskOnZsG = "0x0000000000000000000000000000000000000001"
		await contractDJUtboq.setApprovalForAll.call(toPEIOL9c, approvedDIAXkUM, {from: accounts[1]});
		await contractDJUtboq.approve.call(tov9L5mN, tokenIddb0Nhf4, {from: accounts[0]});
		const nullcgGq2ch = await contractDJUtboq.ownerOf.call(tokenIdzQzHHr, {from: accounts[2]});
		await contractDJUtboq.setApprovalForAll.call(toZVSdYs, approvedbiYVtc7, {from: accounts[1]});
		const nullCUEKG7S = await contractDJUtboq.isApprovedForAll.call(ownerskOnZsG, operatorb4hG2xt, {from: accounts[4]});

		await expect(contractDJUtboq.setApprovalForAll.call(toPEIOL9c, approvedDIAXkUM, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractFghDdXG = await ERC721.new({from: accounts[2]});
		const operatorrAIeiLP = accounts[0]
		const ownerxlgtHCd = accounts[3]
		const approveduVtnKST = true
		const toot5yIa3 = accounts[3]
		const tokenIdTbZy48h = BigInt("622")
		const nullWvKaNup = await contractFghDdXG.isApprovedForAll.call(ownerxlgtHCd, operatorrAIeiLP, {from: accounts[1]});
		await contractFghDdXG.setApprovalForAll.call(toot5yIa3, approveduVtnKST, {from: accounts[3]});
		const nullu97rs8W = await contractFghDdXG.getApproved.call(tokenIdTbZy48h, {from: accounts[0]});

		assert.equal(nullWvKaNup, false)
		await expect(contractFghDdXG.setApprovalForAll.call(toot5yIa3, approveduVtnKST, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})