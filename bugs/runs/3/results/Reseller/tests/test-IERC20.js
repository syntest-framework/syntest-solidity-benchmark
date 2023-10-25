const IERC20 = artifacts.require("IERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC20', (accounts) => {
	it('test for IERC20', async () => {
		const contractiWbeoXB = await IERC20.new({from: accounts[1]});
		const periodRvUoWJi = BigInt("1205")
		const amountabJ4rYz = BigInt("1916")
		const recipientGqrH5Fg = accounts[2]
		const valueRJV0kfw = BigInt("1676")
		const tohkM00zr = accounts[0]
		const fromQm2b6e8 = "0x0000000000000000000000000000000000000001"
		const valueGcMccvt = BigInt("1896")
		const spenderauMmjVx = accounts[1]
		await contractiWbeoXB.freezeAndTransfer.call(recipientGqrH5Fg, amountabJ4rYz, periodRvUoWJi, {from: accounts[2]});
		const nullHo7fa54 = await contractiWbeoXB.transferFrom.call(fromQm2b6e8, tohkM00zr, valueRJV0kfw, {from: accounts[5]});
		const nullaIz6hCY = await contractiWbeoXB.approve.call(spenderauMmjVx, valueGcMccvt, {from: accounts[3]});
	});
})