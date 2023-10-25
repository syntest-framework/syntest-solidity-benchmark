const IERC20 = artifacts.require("IERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC20', (accounts) => {
	it('test for IERC20', async () => {
		const contractUQ78lgt = await IERC20.new({from: accounts[2]});
		const _spenderDNIrFkd = accounts[3]
		const _ownerp89S0Us = accounts[0]
		const nullE9qSOJO = await contractUQ78lgt.allowance.call(_ownerp89S0Us, _spenderDNIrFkd, {from: accounts[0]});
		const nullDefQdrU = await contractUQ78lgt.totalSupply.call({from: accounts[3]});
		const nullNdcUV1w = await contractUQ78lgt.totalSupply.call({from: accounts[4]});
		const nullWkaiQqQ = await contractUQ78lgt.totalSupply.call({from: accounts[0]});
	});
})