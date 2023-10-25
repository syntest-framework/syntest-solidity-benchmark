const IERC20 = artifacts.require("IERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC20', (accounts) => {
	it('test for IERC20', async () => {
		const contracteTMbymI = await IERC20.new({from: accounts[5]});
		const valueGa6AzG0 = BigInt("447")
		const spenderfIRqMrP = accounts[4]
		const valueJCOD3cx = BigInt("1444")
		const toErqk1kG = accounts[2]
		const fromJWhcXQZ = accounts[3]
		const spenderOS10Z53 = accounts[0]
		const owneryxYBq2c = accounts[3]
		const nullLgwuzD = await contracteTMbymI.approve.call(spenderfIRqMrP, valueGa6AzG0, {from: "0x0000000000000000000000000000000000000001"});
		const nullLlwrTHC = await contracteTMbymI.transferFrom.call(fromJWhcXQZ, toErqk1kG, valueJCOD3cx, {from: accounts[2]});
		const nullnJ2BmHP = await contracteTMbymI.allowance.call(owneryxYBq2c, spenderOS10Z53, {from: accounts[4]});
	});
})