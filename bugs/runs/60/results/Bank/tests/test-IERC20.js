const IERC20 = artifacts.require("IERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC20', (accounts) => {
	it('test for IERC20', async () => {
		const contractFkiLIHx = await IERC20.new({from: "0x0000000000000000000000000000000000000001"});
		const value5zdHOg = BigInt("959")
		const spenderbCRdUOC = "0x0000000000000000000000000000000000000001"
		const whoRVj1Qvr = accounts[2]
		const whoaDXHvzn = accounts[3]
		const nullEc6J6u = await contractFkiLIHx.approve.call(spenderbCRdUOC, value5zdHOg, {from: accounts[0]});
		const nullB2CyBwl = await contractFkiLIHx.balanceOf.call(whoRVj1Qvr, {from: accounts[4]});
		const nulluztdoA = await contractFkiLIHx.balanceOf.call(whoaDXHvzn, {from: accounts[2]});
	});
})