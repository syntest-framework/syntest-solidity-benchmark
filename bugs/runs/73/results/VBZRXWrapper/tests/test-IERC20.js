const IERC20 = artifacts.require("IERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC20', (accounts) => {
	it('test for IERC20', async () => {
		const contractK8kaZ3L = await IERC20.new({from: accounts[4]});
		const _whotnM9FOs = accounts[5]
		const _valueINaG0xh = BigInt("1250")
		const _spendergCw68JC = accounts[2]
		const nullpdoMAiB = await contractK8kaZ3L.balanceOf.call(_whotnM9FOs, {from: accounts[0]});
		const nullCfdqM2q = await contractK8kaZ3L.approve.call(_spendergCw68JC, _valueINaG0xh, {from: accounts[3]});
	});
})