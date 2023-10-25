const IERC20 = artifacts.require("IERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC20', (accounts) => {
	it('test for IERC20', async () => {
		const contractkTHzDFV = await IERC20.new({from: accounts[0]});
		const _valueGWSwLZF = BigInt("1274")
		const _toiRui4hN = accounts[0]
		const _valueydpOsBG = BigInt("675")
		const _tovhIajeP = "0x0000000000000000000000000000000000000001"
		const _valuedBEHIWW = BigInt("119")
		const _tozvf6EzU = "0x0000000000000000000000000000000000000001"
		const _fromr6hToAv = "0x0000000000000000000000000000000000000001"
		const nullH8wpDrV = await contractkTHzDFV.transfer.call(_toiRui4hN, _valueGWSwLZF, {from: accounts[0]});
		const nullbW9CePB = await contractkTHzDFV.transfer.call(_tovhIajeP, _valueydpOsBG, {from: "0x0000000000000000000000000000000000000001"});
		const nullU81vTzd = await contractkTHzDFV.transferFrom.call(_fromr6hToAv, _tozvf6EzU, _valuedBEHIWW, {from: accounts[3]});
	});
})