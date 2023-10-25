const IERC721 = artifacts.require("IERC721");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721', (accounts) => {
	it('test for IERC721', async () => {
		const contractu3VNd7 = await IERC721.new({from: accounts[0]});
		const ownerh5Fvfiw = accounts[4]
		const tokenIdqu0grAQ = BigInt("1784")
		const toPriBidI = accounts[4]
		const tokenIdU2lUQuy = BigInt("1189")
		const balancec8MAaFP = await contractu3VNd7.balanceOf.call(ownerh5Fvfiw, {from: accounts[2]});
		await contractu3VNd7.approve.call(toPriBidI, tokenIdqu0grAQ, {from: accounts[1]});
		const operatorLOLSIhi = await contractu3VNd7.getApproved.call(tokenIdU2lUQuy, {from: accounts[1]});
	});
})