const IERC20 = artifacts.require("IERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC20', (accounts) => {
	it('test for IERC20', async () => {
		const contractOIBuvrT = await IERC20.new({from: accounts[2]});
		const accountDRRHcq = accounts[1]
		const accountG3Kj1Ok = accounts[0]
		const spenderiyUzpBo = accounts[0]
		const ownerpMuveht = accounts[3]
		const accountvZ5Ptks = "0x0000000000000000000000000000000000000001"
		const nulljJdEse = await contractOIBuvrT.balanceOf.call(accountDRRHcq, {from: accounts[1]});
		const nulli1l6qbc = await contractOIBuvrT.balanceOf.call(accountG3Kj1Ok, {from: accounts[2]});
		const nullU0f2so = await contractOIBuvrT.allowance.call(ownerpMuveht, spenderiyUzpBo, {from: accounts[4]});
		const nullmAztf2u = await contractOIBuvrT.balanceOf.call(accountvZ5Ptks, {from: accounts[5]});
	});
})