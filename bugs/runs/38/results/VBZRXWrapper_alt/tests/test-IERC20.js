const IERC20 = artifacts.require("IERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC20', (accounts) => {
	it('test for IERC20', async () => {
		const contractTyXFv3L = await IERC20.new({from: accounts[4]});
		const accountwd9gUe = accounts[1]
		const spendersZN5GTw = accounts[4]
		const ownerS3TfEfP = accounts[2]
		const nullJrTPtmA = await contractTyXFv3L.balanceOf.call(accountwd9gUe, {from: accounts[2]});
		const nullnGTPvtj = await contractTyXFv3L.allowance.call(ownerS3TfEfP, spendersZN5GTw, {from: accounts[2]});
	});
})