const IERC20 = artifacts.require("IERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC20', (accounts) => {
	it('test for IERC20', async () => {
		const contracttEF73ys = await IERC20.new({from: accounts[3]});
		const spenderSKEbMNe = accounts[3]
		const ownerWl5E5je = accounts[3]
		const valueBHzwI9 = BigInt("405")
		const too0qcMqe = "0x0000000000000000000000000000000000000001"
		const valuedUAUwgX = BigInt("1941")
		const spender7ncxCz = accounts[3]
		const nullSf5jN5 = await contracttEF73ys.allowance.call(ownerWl5E5je, spenderSKEbMNe, {from: accounts[0]});
		const nullJbRrhtN = await contracttEF73ys.transfer.call(too0qcMqe, valueBHzwI9, {from: accounts[3]});
		const nullZ6OYa6Q = await contracttEF73ys.approve.call(spender7ncxCz, valuedUAUwgX, {from: accounts[3]});
	});
})