const IERC20 = artifacts.require("IERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC20', (accounts) => {
	it('test for IERC20', async () => {
		const contractxXx0lMj = await IERC20.new({from: accounts[1]});
		const valueGrzsg1t = BigInt("843")
		const spendertTeVRwr = "0x0000000000000000000000000000000000000001"
		const whoKWEpt9c = accounts[4]
		const nulldkfBLYO = await contractxXx0lMj.approve.call(spendertTeVRwr, valueGrzsg1t, {from: accounts[0]});
		const nullINCHkkS = await contractxXx0lMj.balanceOf.call(whoKWEpt9c, {from: "0x0000000000000000000000000000000000000001"});
	});
})