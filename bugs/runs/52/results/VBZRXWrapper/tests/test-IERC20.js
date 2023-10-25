const IERC20 = artifacts.require("IERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC20', (accounts) => {
	it('test for IERC20', async () => {
		const contractr0eF8pU = await IERC20.new({from: "0x0000000000000000000000000000000000000001"});
		const _valueZF8lCG4 = BigInt("315")
		const _toJ9Nh85g = accounts[1]
		const _fromsVJP7Lq = accounts[4]
		const _spenderGFp7c3J = accounts[0]
		const _ownerJQwNg62 = accounts[1]
		const nullvIFAfrr = await contractr0eF8pU.transferFrom.call(_fromsVJP7Lq, _toJ9Nh85g, _valueZF8lCG4, {from: accounts[3]});
		const nullkY6cwcc = await contractr0eF8pU.totalSupply.call({from: accounts[0]});
		const nulljJ4U2Z9 = await contractr0eF8pU.allowance.call(_ownerJQwNg62, _spenderGFp7c3J, {from: accounts[3]});
	});
})