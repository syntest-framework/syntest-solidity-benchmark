const ERC721 = artifacts.require("ERC721");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC721', (accounts) => {
	it('test for ERC721', async () => {
		const contractV8BLPsY = await ERC721.new({from: accounts[2]});
		const ownerVzQ5aUE = "0x0000000000000000000000000000000000000001"
		const tokenIdibBYMo = BigInt("355")
		const tokenIdNBeKk5M = BigInt("606")
		const toI4c2QeE = accounts[3]
		const fromV9vLZg = accounts[3]
		const nullhOWbDKt = await contractV8BLPsY.balanceOf.call(ownerVzQ5aUE, {from: accounts[4]});
		const nullUKspSjL = await contractV8BLPsY.ownerOf.call(tokenIdibBYMo, {from: accounts[3]});
		await contractV8BLPsY.safeTransferFrom.call(fromV9vLZg, toI4c2QeE, tokenIdNBeKk5M, {from: accounts[1]});

		assert.equal(nullhOWbDKt, 0)
		await expect(contractV8BLPsY.ownerOf.call(tokenIdibBYMo, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractDUqNOAk = await ERC721.new({from: accounts[3]});
		const approvedzWOHhSD = false
		const topsq4Ddx = accounts[3]
		const operatorclnHZ9k = accounts[1]
		const ownerhcYCLhj = accounts[1]
		const approvedSZywlBX = false
		const torzH2lZ5 = "0x0000000000000000000000000000000000000001"
		await contractDUqNOAk.setApprovalForAll.call(topsq4Ddx, approvedzWOHhSD, {from: accounts[2]});
		const nulltxk5UAM = await contractDUqNOAk.isApprovedForAll.call(ownerhcYCLhj, operatorclnHZ9k, {from: accounts[1]});
		await contractDUqNOAk.setApprovalForAll.call(torzH2lZ5, approvedSZywlBX, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(nulltxk5UAM, false)
		await expect(contractDUqNOAk.isApprovedForAll.call(ownerhcYCLhj, operatorclnHZ9k, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractWC9jaic = await ERC721.new({from: accounts[1]});
		const approvedrsIrWJP = true
		const toQXgmLk3 = accounts[0]
		const tokenIdbQZewp = BigInt("849")
		const tokenIdSzUtpUV = BigInt("223")
		const tokenIdocpzqQp = BigInt("906")
		const toB3qkbRC = accounts[5]
		const tokenIddNeo7ly = BigInt("426")
		const to1OpcDT = accounts[3]
		const fromdEClKNl = accounts[3]
		await contractWC9jaic.setApprovalForAll.call(toQXgmLk3, approvedrsIrWJP, {from: accounts[4]});
		const nullDKfC0SZ = await contractWC9jaic.getApproved.call(tokenIdbQZewp, {from: accounts[1]});
		const nullYIdLbIT = await contractWC9jaic.ownerOf.call(tokenIdSzUtpUV, {from: accounts[3]});
		await contractWC9jaic.approve.call(toB3qkbRC, tokenIdocpzqQp, {from: accounts[2]});
		await contractWC9jaic.safeTransferFrom.call(fromdEClKNl, to1OpcDT, tokenIddNeo7ly, {from: accounts[4]});

		await expect(contractWC9jaic.setApprovalForAll.call(toQXgmLk3, approvedrsIrWJP, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contract0joVlP = await ERC721.new({from: accounts[4]});
		const approvedt4InpUk = false
		const tooMnpcX = accounts[5]
		const _dataDceeqqY = "0x1f14191b"
		const tokenIdp2rZwK = BigInt("619")
		const tojN35aKr = accounts[5]
		const fromJneHtZq = accounts[5]
		const owneru1jQ56f = accounts[3]
		const operatorcgQdaBJ = "0x0000000000000000000000000000000000000001"
		const ownerFFLYcF = "0x0000000000000000000000000000000000000001"
		await contract0joVlP.setApprovalForAll.call(tooMnpcX, approvedt4InpUk, {from: accounts[0]});
		await contract0joVlP.safeTransferFrom.call(fromJneHtZq, tojN35aKr, tokenIdp2rZwK, _dataDceeqqY, {from: accounts[3]});
		const nullEbEsO5 = await contract0joVlP.balanceOf.call(owneru1jQ56f, {from: accounts[3]});
		const nullkVfnYSb = await contract0joVlP.isApprovedForAll.call(ownerFFLYcF, operatorcgQdaBJ, {from: accounts[3]});

		await expect(contract0joVlP.setApprovalForAll.call(tooMnpcX, approvedt4InpUk, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractxxaYZI5 = await ERC721.new({from: "0x0000000000000000000000000000000000000001"});
		const tokenIdvhRpH9u = BigInt("1188")
		const tokenIdLHMKBZT = BigInt("821")
		const topaBz8Sq = accounts[1]
		const tokenIdQzMIKaG = BigInt("1631")
		const toXbgOmN = accounts[1]
		const nullVmpxZ26 = await contractxxaYZI5.getApproved.call(tokenIdvhRpH9u, {from: accounts[0]});
		await contractxxaYZI5.approve.call(topaBz8Sq, tokenIdLHMKBZT, {from: accounts[2]});
		await contractxxaYZI5.approve.call(toXbgOmN, tokenIdQzMIKaG, {from: accounts[3]});
	});
})