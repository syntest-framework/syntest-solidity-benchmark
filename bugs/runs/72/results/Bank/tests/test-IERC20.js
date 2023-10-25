const IERC20 = artifacts.require("IERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC20', (accounts) => {
	it('test for IERC20', async () => {
		const contractpfNrd4V = await IERC20.new({from: accounts[3]});
		const whoWcosHVL = accounts[2]
		const whoE1ZJozY = accounts[1]
		const valueYR89BR = BigInt("1283")
		const toLfO4Xx9 = accounts[2]
		const valuemRL5MZn = BigInt("1256")
		const spender1yLbob = accounts[2]
		const nullk3gjHTd = await contractpfNrd4V.balanceOf.call(whoWcosHVL, {from: accounts[4]});
		const nullSThPxHo = await contractpfNrd4V.balanceOf.call(whoE1ZJozY, {from: accounts[4]});
		const nullJlKXdU7 = await contractpfNrd4V.transfer.call(toLfO4Xx9, valueYR89BR, {from: accounts[4]});
		const nullESAup1r = await contractpfNrd4V.approve.call(spender1yLbob, valuemRL5MZn, {from: accounts[2]});
	});
})