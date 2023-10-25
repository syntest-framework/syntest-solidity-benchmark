const IERC20 = artifacts.require("IERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC20', (accounts) => {
	it('test for IERC20', async () => {
		const contractcHVhXs0 = await IERC20.new({from: accounts[1]});
		const valuep6mKsPn = BigInt("465")
		const spenderLkBRUV = accounts[1]
		const valueawL2VU6 = BigInt("763")
		const tomKH8xre = accounts[0]
		const nullPucOdnM = await contractcHVhXs0.approve.call(spenderLkBRUV, valuep6mKsPn, {from: accounts[3]});
		const nullPnf5X7 = await contractcHVhXs0.totalSupply.call({from: accounts[4]});
		const nullzRlrOZD = await contractcHVhXs0.mint.call(tomKH8xre, valueawL2VU6, {from: accounts[5]});
	});
})