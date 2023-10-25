const IERC20 = artifacts.require("IERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC20', (accounts) => {
	it('test for IERC20', async () => {
		const contractCl3iOja = await IERC20.new({from: accounts[2]});
		const _whodeNHjwr = accounts[0]
		const _valueM8OXVM0 = BigInt("53")
		const _toqQHO7mn = accounts[4]
		const nullUcSmJnU = await contractCl3iOja.balanceOf.call(_whodeNHjwr, {from: accounts[4]});
		const nullT2xY3iu = await contractCl3iOja.transfer.call(_toqQHO7mn, _valueM8OXVM0, {from: accounts[2]});
	});
})