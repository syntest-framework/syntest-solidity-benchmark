const IERC20 = artifacts.require("IERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC20', (accounts) => {
	it('test for IERC20', async () => {
		const contractHB1XIzF = await IERC20.new({from: accounts[5]});
		const spenderb1a8R6B = accounts[1]
		const ownerYXEHuD = accounts[0]
		const spenderGtwisVk = accounts[3]
		const ownere8qL9Pn = accounts[1]
		const nullerh6vR2 = await contractHB1XIzF.allowance.call(ownerYXEHuD, spenderb1a8R6B, {from: accounts[2]});
		const nullcNW9KCy = await contractHB1XIzF.allowance.call(ownere8qL9Pn, spenderGtwisVk, {from: accounts[0]});
	});
})