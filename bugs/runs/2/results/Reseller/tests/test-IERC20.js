const IERC20 = artifacts.require("IERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC20', (accounts) => {
	it('test for IERC20', async () => {
		const contractOUghrDC = await IERC20.new({from: "0x0000000000000000000000000000000000000001"});
		const whojWCY6Dj = accounts[3]
		const whovKdjJto = accounts[2]
		const nullE31ZPMo = await contractOUghrDC.balanceOf.call(whojWCY6Dj, {from: accounts[1]});
		const nullEFGpeZi = await contractOUghrDC.balanceOf.call(whovKdjJto, {from: accounts[2]});
	});
})