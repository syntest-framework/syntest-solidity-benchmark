const IERC721 = artifacts.require("IERC721");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721', (accounts) => {
	it('test for IERC721', async () => {
		const contractEjaq1sb = await IERC721.new({from: accounts[2]});
		const _approvedaYIygT1 = false
		const operatorRERIzG = accounts[1]
		const ownerVHrJfRh = "0x0000000000000000000000000000000000000001"
		const tokenIdijhW0oH = BigInt("1524")
		const tokenIdJ53QwJo = BigInt("1845")
		const tokenIdvfxGdd3 = BigInt("1555")
		const toFiRKUw5 = accounts[5]
		const from5M6zz2 = "0x0000000000000000000000000000000000000001"
		const ownerJc11hMU = accounts[1]
		await contractEjaq1sb.setApprovalForAll.call(operatorRERIzG, _approvedaYIygT1, {from: accounts[0]});
		const balancethsiSdK = await contractEjaq1sb.balanceOf.call(ownerVHrJfRh, {from: accounts[2]});
		const operatorI2r9TC = await contractEjaq1sb.getApproved.call(tokenIdijhW0oH, {from: accounts[3]});
		const ownerPGMZWFZ = await contractEjaq1sb.ownerOf.call(tokenIdJ53QwJo, {from: accounts[5]});
		await contractEjaq1sb.transferFrom.call(from5M6zz2, toFiRKUw5, tokenIdvfxGdd3, {from: accounts[2]});
		const balanceQMB0wLs = await contractEjaq1sb.balanceOf.call(ownerJc11hMU, {from: accounts[4]});
	});
})