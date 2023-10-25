const IERC20 = artifacts.require("IERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC20', (accounts) => {
	it('test for IERC20', async () => {
		const contractTyUWP5 = await IERC20.new({from: accounts[4]});
		const spenderG9d7cnD = accounts[2]
		const owneryGun4TW = accounts[1]
		const valueSiiriRQ = BigInt("211")
		const toqG6qZ2Z = accounts[1]
		const fromILcjtyM = accounts[2]
		const whoAGFZ0oo = accounts[3]
		const nullHMBJ2r = await contractTyUWP5.allowance.call(owneryGun4TW, spenderG9d7cnD, {from: accounts[2]});
		const nullgxvLl5o = await contractTyUWP5.transferFrom.call(fromILcjtyM, toqG6qZ2Z, valueSiiriRQ, {from: accounts[0]});
		const nullxtmLS9r = await contractTyUWP5.balanceOf.call(whoAGFZ0oo, {from: "0x0000000000000000000000000000000000000001"});
	});
})