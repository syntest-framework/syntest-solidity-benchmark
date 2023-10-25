const IERC20 = artifacts.require("IERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC20', (accounts) => {
	it('test for IERC20', async () => {
		const contractlrlheX = await IERC20.new({from: accounts[5]});
		const valueTUxXWOK = BigInt("82")
		const spenderjLW3csj = accounts[0]
		const valueXwDe5PT = BigInt("1803")
		const toTAGSHf = accounts[3]
		const fromRsCnxu = accounts[2]
		const whokaxPCq8 = accounts[2]
		const nullmXVCmkf = await contractlrlheX.approve.call(spenderjLW3csj, valueTUxXWOK, {from: accounts[4]});
		const nullDcnzFoM = await contractlrlheX.transferFrom.call(fromRsCnxu, toTAGSHf, valueXwDe5PT, {from: accounts[2]});
		const nullJihD5F = await contractlrlheX.balanceOf.call(whokaxPCq8, {from: accounts[4]});
	});
})