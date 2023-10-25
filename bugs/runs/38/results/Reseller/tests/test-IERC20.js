const IERC20 = artifacts.require("IERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC20', (accounts) => {
	it('test for IERC20', async () => {
		const contractA1ns59e = await IERC20.new({from: accounts[0]});
		const valueY4ib4cY = BigInt("808")
		const toMsJG95j = accounts[2]
		const valueaADQyHh = BigInt("90")
		const fromQuiUY5P = accounts[3]
		const valueSpnqqIC = BigInt("859")
		const spenderz8UFKI = accounts[3]
		const whoHPCTNrJ = accounts[3]
		const nullFb9fRet = await contractA1ns59e.mint.call(toMsJG95j, valueY4ib4cY, {from: accounts[1]});
		const nullEzhs783 = await contractA1ns59e.totalSupply.call({from: accounts[0]});
		await contractA1ns59e.burnFrom.call(fromQuiUY5P, valueaADQyHh, {from: accounts[5]});
		const nullg95aEF = await contractA1ns59e.approve.call(spenderz8UFKI, valueSpnqqIC, {from: "0x0000000000000000000000000000000000000001"});
		const nullZizF7OW = await contractA1ns59e.balanceOf.call(whoHPCTNrJ, {from: accounts[3]});
	});
})