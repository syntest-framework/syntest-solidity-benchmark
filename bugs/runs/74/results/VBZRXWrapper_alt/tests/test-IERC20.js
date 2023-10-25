const IERC20 = artifacts.require("IERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC20', (accounts) => {
	it('test for IERC20', async () => {
		const contractUCZIQN5 = await IERC20.new({from: accounts[1]});
		const amountjABTtdg = BigInt("1742")
		const recipient03ELA0 = accounts[3]
		const senderjsm4alF = accounts[4]
		const amountKx3E59X = BigInt("583")
		const recipienth03e09s = accounts[0]
		const senderZJxyjjs = accounts[4]
		const accountpVakD1P = accounts[3]
		const accountroEKwSu = accounts[0]
		const nullFLe0xqF = await contractUCZIQN5.transferFrom.call(senderjsm4alF, recipient03ELA0, amountjABTtdg, {from: accounts[3]});
		const nullR3d7INW = await contractUCZIQN5.transferFrom.call(senderZJxyjjs, recipienth03e09s, amountKx3E59X, {from: accounts[2]});
		const nullUXA4r9G = await contractUCZIQN5.balanceOf.call(accountpVakD1P, {from: accounts[4]});
		const nulluiVTCRS = await contractUCZIQN5.balanceOf.call(accountroEKwSu, {from: accounts[2]});
	});
})