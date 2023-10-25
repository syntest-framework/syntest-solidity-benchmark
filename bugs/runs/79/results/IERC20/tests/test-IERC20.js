const IERC20 = artifacts.require("IERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC20', (accounts) => {
	it('test for IERC20', async () => {
		const contractyv07p6V = await IERC20.new({from: accounts[2]});
		const spenderZRTw4xZ = accounts[5]
		const ownerfETJTgE = accounts[3]
		const spenderpsT0ALe = accounts[4]
		const ownergEZ2aXl = accounts[1]
		const valueJmq1bFh = BigInt("1091")
		const toaRqLH5 = accounts[1]
		const valuekdrOIN3 = BigInt("1488")
		const spenderlCIEQS = accounts[3]
		const nullL4tUl8m = await contractyv07p6V.allowance.call(ownerfETJTgE, spenderZRTw4xZ, {from: accounts[4]});
		const nullVfNxqO = await contractyv07p6V.allowance.call(ownergEZ2aXl, spenderpsT0ALe, {from: "0x0000000000000000000000000000000000000001"});
		const nullsTULuV2 = await contractyv07p6V.transfer.call(toaRqLH5, valueJmq1bFh, {from: accounts[2]});
		const nullkiONkaX = await contractyv07p6V.approve.call(spenderlCIEQS, valuekdrOIN3, {from: accounts[2]});
	});
})