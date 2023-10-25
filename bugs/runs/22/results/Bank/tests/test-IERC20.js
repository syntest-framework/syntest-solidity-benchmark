const IERC20 = artifacts.require("IERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC20', (accounts) => {
	it('test for IERC20', async () => {
		const contractLJ9HP5W = await IERC20.new({from: accounts[2]});
		const valuejPpE80w = BigInt("845")
		const toDokeD6d = accounts[3]
		const fromHlwhlRo = accounts[5]
		const whotkfr5tD = accounts[4]
		const whoyRosNe = accounts[4]
		const valuekd89QXy = BigInt("288")
		const tobtv5HwK = accounts[4]
		const whoadm8YWe = accounts[0]
		const valueEuBIYAl = BigInt("353")
		const toSnSNEAC = accounts[4]
		const nullcaRKfUv = await contractLJ9HP5W.transferFrom.call(fromHlwhlRo, toDokeD6d, valuejPpE80w, {from: accounts[3]});
		const nullUtQEjRI = await contractLJ9HP5W.balanceOf.call(whotkfr5tD, {from: accounts[2]});
		const nullKjN2zO = await contractLJ9HP5W.balanceOf.call(whoyRosNe, {from: accounts[1]});
		const nullLqOSLjW = await contractLJ9HP5W.transfer.call(tobtv5HwK, valuekd89QXy, {from: accounts[3]});
		const nullY5f8qd2 = await contractLJ9HP5W.balanceOf.call(whoadm8YWe, {from: accounts[2]});
		const nullm64oBvZ = await contractLJ9HP5W.transfer.call(toSnSNEAC, valueEuBIYAl, {from: accounts[0]});
	});
})