const IERC20 = artifacts.require("IERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC20', (accounts) => {
	it('test for IERC20', async () => {
		const contractp9zYol = await IERC20.new({from: accounts[4]});
		const spenderYupbknI = accounts[3]
		const ownerdbiXGDS = accounts[0]
		const valueMECAQk3 = BigInt("1822")
		const fromYw1OMu = accounts[2]
		const nulljQGyYj = await contractp9zYol.allowance.call(ownerdbiXGDS, spenderYupbknI, {from: accounts[0]});
		await contractp9zYol.burnFrom.call(fromYw1OMu, valueMECAQk3, {from: accounts[2]});
	});
})