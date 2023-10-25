const ERC721 = artifacts.require("ERC721");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC721', (accounts) => {
	it('test for ERC721', async () => {
		const contractPPchkBw = await ERC721.new({from: accounts[1]});
		const tokenIdomMdEcH = BigInt("1869")
		const tour4VPsC = accounts[0]
		const fromPMyqhp6 = accounts[3]
		const approvedcgxMi5Z = false
		const toDWB3KUS = accounts[0]
		const tokenIdvT9V4lk = BigInt("386")
		const to5cWfDD = accounts[0]
		const fromfsVUxtJ = accounts[2]
		const operatorJU4rqF0 = accounts[0]
		const ownerWdvGn8n = accounts[3]
		const approvedBux3jRi = false
		const togdmFHLB = accounts[2]
		await contractPPchkBw.safeTransferFrom.call(fromPMyqhp6, tour4VPsC, tokenIdomMdEcH, {from: accounts[4]});
		await contractPPchkBw.setApprovalForAll.call(toDWB3KUS, approvedcgxMi5Z, {from: accounts[1]});
		await contractPPchkBw.safeTransferFrom.call(fromfsVUxtJ, to5cWfDD, tokenIdvT9V4lk, {from: accounts[2]});
		const nullAy4ElRr = await contractPPchkBw.isApprovedForAll.call(ownerWdvGn8n, operatorJU4rqF0, {from: accounts[4]});
		await contractPPchkBw.setApprovalForAll.call(togdmFHLB, approvedBux3jRi, {from: accounts[5]});

		await expect(contractPPchkBw.safeTransferFrom.call(fromPMyqhp6, tour4VPsC, tokenIdomMdEcH, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractPu63iS8 = await ERC721.new({from: accounts[1]});
		const tokenIdOZJncDF = BigInt("751")
		const tokenIdothFQL = BigInt("2041")
		const tokenId2Yuode = BigInt("1146")
		const owneriChD8CJ = accounts[4]
		const tokenIdfvRy4Hr = BigInt("965")
		const toZoNc5bE = accounts[5]
		const nullXEh5uRf = await contractPu63iS8.getApproved.call(tokenIdOZJncDF, {from: accounts[1]});
		const nullk6J91iy = await contractPu63iS8.ownerOf.call(tokenIdothFQL, {from: accounts[2]});
		const nullieXLWjR = await contractPu63iS8.ownerOf.call(tokenId2Yuode, {from: accounts[2]});
		const nullKiX7o4i = await contractPu63iS8.balanceOf.call(owneriChD8CJ, {from: accounts[2]});
		await contractPu63iS8.approve.call(toZoNc5bE, tokenIdfvRy4Hr, {from: accounts[4]});

		await expect(contractPu63iS8.getApproved.call(tokenIdOZJncDF, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractnBPcLBm = await ERC721.new({from: accounts[1]});
		const tokenIdvUINLW9 = BigInt("2007")
		const toxEGwHSQ = "0x0000000000000000000000000000000000000001"
		const ownernUuSLpa = accounts[0]
		const approvedVApVUNR = false
		const toixHOQyh = accounts[0]
		const tokenIdKgyIYto = BigInt("1147")
		const toFQcOpv = accounts[3]
		const fromt75utVd = accounts[5]
		const tokenIdPrSum1H = BigInt("1076")
		const toADKJcK6 = "0x0000000000000000000000000000000000000001"
		await contractnBPcLBm.approve.call(toxEGwHSQ, tokenIdvUINLW9, {from: accounts[2]});
		const null05GPj3 = await contractnBPcLBm.balanceOf.call(ownernUuSLpa, {from: "0x0000000000000000000000000000000000000001"});
		await contractnBPcLBm.setApprovalForAll.call(toixHOQyh, approvedVApVUNR, {from: "0x0000000000000000000000000000000000000001"});
		await contractnBPcLBm.safeTransferFrom.call(fromt75utVd, toFQcOpv, tokenIdKgyIYto, {from: accounts[3]});
		await contractnBPcLBm.approve.call(toADKJcK6, tokenIdPrSum1H, {from: accounts[0]});

		await expect(contractnBPcLBm.approve.call(toxEGwHSQ, tokenIdvUINLW9, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ERC721', async () => {
		const contractFYsp6R6 = await ERC721.new({from: "0x0000000000000000000000000000000000000001"});
		const tokenIdVmsE3Z = BigInt("1359")
		const operatorGfVb8c = accounts[5]
		const ownerEq6KbpK = accounts[2]
		const approvedJUnds5P = false
		const tod8dHMb0 = accounts[3]
		const tokenIdySL8AvC = BigInt("101")
		const nullRRbVROP = await contractFYsp6R6.ownerOf.call(tokenIdVmsE3Z, {from: accounts[1]});
		const nullKWuKCpX = await contractFYsp6R6.isApprovedForAll.call(ownerEq6KbpK, operatorGfVb8c, {from: "0x0000000000000000000000000000000000000001"});
		await contractFYsp6R6.setApprovalForAll.call(tod8dHMb0, approvedJUnds5P, {from: accounts[0]});
		const nullteFy0U = await contractFYsp6R6.getApproved.call(tokenIdySL8AvC, {from: accounts[2]});
	});

	it('test for ERC721', async () => {
		const contractm3Mws06 = await ERC721.new({from: accounts[4]});
		const ownerMEmu5Fn = accounts[1]
		const approvedbGJL8v = false
		const tofTOzfWa = accounts[1]
		const operatoruRjKjCk = "0x0000000000000000000000000000000000000001"
		const owneruj7NsYm = accounts[5]
		const nullhObSL2m = await contractm3Mws06.balanceOf.call(ownerMEmu5Fn, {from: accounts[2]});
		await contractm3Mws06.setApprovalForAll.call(tofTOzfWa, approvedbGJL8v, {from: accounts[1]});
		const nullobgTD6 = await contractm3Mws06.isApprovedForAll.call(owneruj7NsYm, operatoruRjKjCk, {from: accounts[5]});

		assert.equal(nullhObSL2m, 0)
		await expect(contractm3Mws06.setApprovalForAll.call(tofTOzfWa, approvedbGJL8v, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})