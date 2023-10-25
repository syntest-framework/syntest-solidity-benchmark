const IERC20 = artifacts.require("IERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC20', (accounts) => {
	it('test for IERC20', async () => {
		const contracttDWBfWX = await IERC20.new({from: accounts[1]});
		const valueiWwdD7r = BigInt("16")
		const toJkxPiFw = accounts[2]
		const fromgWFPBP2 = accounts[0]
		const valueG1xGbu = BigInt("104")
		const tovpJO91 = "0x0000000000000000000000000000000000000001"
		const frombW7NOYy = accounts[2]
		const valuefzRVIj = BigInt("665")
		const toL5T4ko = accounts[2]
		const fromNtgqy3z = accounts[2]
		const nullJB1D6RO = await contracttDWBfWX.transferFrom.call(fromgWFPBP2, toJkxPiFw, valueiWwdD7r, {from: accounts[1]});
		const nullcRDvrUT = await contracttDWBfWX.totalSupply.call({from: accounts[2]});
		const nullRxZ39W = await contracttDWBfWX.transferFrom.call(frombW7NOYy, tovpJO91, valueG1xGbu, {from: accounts[3]});
		const nullACZvLMh = await contracttDWBfWX.transferFrom.call(fromNtgqy3z, toL5T4ko, valuefzRVIj, {from: "0x0000000000000000000000000000000000000001"});
	});
})