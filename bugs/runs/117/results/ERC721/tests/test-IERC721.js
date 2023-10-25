const IERC721 = artifacts.require("IERC721");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721', (accounts) => {
	it('test for IERC721', async () => {
		const contractm6jLSBf = await IERC721.new({from: accounts[4]});
		const dataRZLnffR = "0x10"
		const tokenIdLdNn99O = BigInt("680")
		const toUV4AK38 = accounts[1]
		const fromKwlYYU5 = accounts[1]
		const tokenIdVsZv2dc = BigInt("1608")
		const toWHQHBWE = "0x0000000000000000000000000000000000000001"
		const fromkRmPGiM = accounts[1]
		const tokenIdAmLj2bE = BigInt("1856")
		const toxdmOWpU = accounts[5]
		const tokenIdXcheBrZ = BigInt("1752")
		const toG1sHYkh = accounts[1]
		const fromSAO94wk = accounts[4]
		const tokenIdGX9Rq8o = BigInt("1988")
		const tokulvf5x = accounts[4]
		const operatorY1Ivscr = accounts[0]
		const ownerN3JP6Ue = "0x0000000000000000000000000000000000000001"
		await contractm6jLSBf.safeTransferFrom.call(fromKwlYYU5, toUV4AK38, tokenIdLdNn99O, dataRZLnffR, {from: accounts[1]});
		await contractm6jLSBf.safeTransferFrom.call(fromkRmPGiM, toWHQHBWE, tokenIdVsZv2dc, {from: accounts[2]});
		await contractm6jLSBf.approve.call(toxdmOWpU, tokenIdAmLj2bE, {from: "0x0000000000000000000000000000000000000001"});
		await contractm6jLSBf.safeTransferFrom.call(fromSAO94wk, toG1sHYkh, tokenIdXcheBrZ, {from: "0x0000000000000000000000000000000000000001"});
		await contractm6jLSBf.approve.call(tokulvf5x, tokenIdGX9Rq8o, {from: "0x0000000000000000000000000000000000000001"});
		const nullu6EMCJ = await contractm6jLSBf.isApprovedForAll.call(ownerN3JP6Ue, operatorY1Ivscr, {from: accounts[2]});
	});
})