const IERC20 = artifacts.require("IERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC20', (accounts) => {
	it('test for IERC20', async () => {
		const contractHY28ln = await IERC20.new({from: accounts[2]});
		const _whoe9zB1cA = accounts[1]
		const _valueqBCMuio = BigInt("1540")
		const _toLVSa0sY = accounts[2]
		const nullTBcba3m = await contractHY28ln.balanceOf.call(_whoe9zB1cA, {from: accounts[2]});
		const nullaQcq0fI = await contractHY28ln.transfer.call(_toLVSa0sY, _valueqBCMuio, {from: accounts[4]});
	});
})