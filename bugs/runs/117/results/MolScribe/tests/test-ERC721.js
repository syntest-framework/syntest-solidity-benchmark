const ERC721 = artifacts.require("ERC721");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC721', (accounts) => {
	it('test for ERC721', async () => {
		const contractH0f1Aae = await ERC721.new({from: accounts[0]});
		const tokenIdhnWnv5j = BigInt("308")
		const tokenIdaNa60Oi = BigInt("59")
		const toeUxk6b = "0x0000000000000000000000000000000000000001"
		const nullVByhTq = await contractH0f1Aae.ownerOf.call(tokenIdhnWnv5j, {from: accounts[0]});
		await contractH0f1Aae.approve.call(toeUxk6b, tokenIdaNa60Oi, {from: "0x0000000000000000000000000000000000000001"});

		await expect(contractH0f1Aae.ownerOf.call(tokenIdhnWnv5j, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractr3DVIUp = await ERC721.new({from: accounts[0]});
		const tokenIdqy0eFO = BigInt("1043")
		const tocjFy9g1 = "0x0000000000000000000000000000000000000001"
		const fromfYwAO73 = accounts[0]
		const tokenIdXadlxgl = BigInt("999")
		const toAlwG2vk = accounts[3]
		const tokenIdvLKRip0 = BigInt("388")
		const toobwjBfp = "0x0000000000000000000000000000000000000001"
		const fromCENBH9R = "0x0000000000000000000000000000000000000001"
		const tokenIddagQMM9 = BigInt("268")
		const approvedODcZYPP = true
		const tobSw2HyI = "0x0000000000000000000000000000000000000001"
		const tokenId7alZpu = BigInt("1208")
		const toh2FxEtt = accounts[1]
		await contractr3DVIUp.safeTransferFrom.call(fromfYwAO73, tocjFy9g1, tokenIdqy0eFO, {from: accounts[3]});
		await contractr3DVIUp.approve.call(toAlwG2vk, tokenIdXadlxgl, {from: accounts[3]});
		await contractr3DVIUp.transferFrom.call(fromCENBH9R, toobwjBfp, tokenIdvLKRip0, {from: "0x0000000000000000000000000000000000000001"});
		const nullsVFUvn = await contractr3DVIUp.getApproved.call(tokenIddagQMM9, {from: accounts[1]});
		await contractr3DVIUp.setApprovalForAll.call(tobSw2HyI, approvedODcZYPP, {from: "0x0000000000000000000000000000000000000001"});
		await contractr3DVIUp.approve.call(toh2FxEtt, tokenId7alZpu, {from: accounts[5]});

		await expect(contractr3DVIUp.safeTransferFrom.call(fromfYwAO73, tocjFy9g1, tokenIdqy0eFO, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractNNthly4 = await ERC721.new({from: "0x0000000000000000000000000000000000000001"});
		const ownereqEGifE = accounts[5]
		const tokenIdCT9wUv = BigInt("1885")
		const tokenIda3cIf9X = BigInt("1896")
		const toAzewjl6 = "0x0000000000000000000000000000000000000001"
		const froma7ehsm = accounts[3]
		const tokenIdbTtaEfg = BigInt("126")
		const toptx18h8 = accounts[1]
		const fromfU7yvgj = accounts[0]
		const tokenIdcvTmXlD = BigInt("429")
		const tocOGoEQO = accounts[0]
		const fromVpgLtzT = "0x0000000000000000000000000000000000000001"
		const nullWSCaWb = await contractNNthly4.balanceOf.call(ownereqEGifE, {from: accounts[0]});
		const nullmVYpYdk = await contractNNthly4.getApproved.call(tokenIdCT9wUv, {from: accounts[0]});
		await contractNNthly4.transferFrom.call(froma7ehsm, toAzewjl6, tokenIda3cIf9X, {from: accounts[1]});
		await contractNNthly4.safeTransferFrom.call(fromfU7yvgj, toptx18h8, tokenIdbTtaEfg, {from: accounts[2]});
		await contractNNthly4.transferFrom.call(fromVpgLtzT, tocOGoEQO, tokenIdcvTmXlD, {from: accounts[4]});
	});

	it('test for ERC721', async () => {
		const contractgKMEDLJ = await ERC721.new({from: accounts[0]});
		const tokenIdVopTG8 = BigInt("392")
		const ownerAsrayc9 = accounts[3]
		const tokenIdC7br8Qb = BigInt("46")
		const toijJw9Eo = "0x0000000000000000000000000000000000000001"
		const nullIT18QHK = await contractgKMEDLJ.getApproved.call(tokenIdVopTG8, {from: accounts[3]});
		const nullUgerPR2 = await contractgKMEDLJ.balanceOf.call(ownerAsrayc9, {from: accounts[0]});
		await contractgKMEDLJ.approve.call(toijJw9Eo, tokenIdC7br8Qb, {from: "0x0000000000000000000000000000000000000001"});

		await expect(contractgKMEDLJ.getApproved.call(tokenIdVopTG8, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractCYH01Am = await ERC721.new({from: accounts[0]});
		const approvedSjJiTTw = false
		const toI4JEd3g = accounts[3]
		const tokenIdbrDya2 = BigInt("301")
		await contractCYH01Am.setApprovalForAll.call(toI4JEd3g, approvedSjJiTTw, {from: accounts[3]});
		const nullYleUIU4 = await contractCYH01Am.ownerOf.call(tokenIdbrDya2, {from: accounts[0]});

		await expect(contractCYH01Am.setApprovalForAll.call(toI4JEd3g, approvedSjJiTTw, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})