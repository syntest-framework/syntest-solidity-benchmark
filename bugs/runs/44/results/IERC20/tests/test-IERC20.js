const IERC20 = artifacts.require("IERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC20', (accounts) => {
	it('test for IERC20', async () => {
		const contractSBf8NPx = await IERC20.new({from: accounts[1]});
		const valueEnSHbT = BigInt("126")
		const toNyZU7VM = accounts[2]
		const nulld5SrDVc = await contractSBf8NPx.totalSupply.call({from: accounts[0]});
		const nullqwd9jaf = await contractSBf8NPx.transfer.call(toNyZU7VM, valueEnSHbT, {from: accounts[0]});
		const nullxM8CaPO = await contractSBf8NPx.totalSupply.call({from: accounts[4]});
	});
})