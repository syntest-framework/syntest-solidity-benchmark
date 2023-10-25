const IERC20 = artifacts.require("IERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC20', (accounts) => {
	it('test for IERC20', async () => {
		const contracti1gpbAK = await IERC20.new({from: "0x0000000000000000000000000000000000000001"});
		const _spenderkD3pWiI = accounts[1]
		const _ownerhxvezIH = accounts[5]
		const _whoqTMsl7q = accounts[1]
		const nullYRloyPY = await contracti1gpbAK.allowance.call(_ownerhxvezIH, _spenderkD3pWiI, {from: accounts[4]});
		const nullxS0gv5g = await contracti1gpbAK.balanceOf.call(_whoqTMsl7q, {from: accounts[4]});
	});
})