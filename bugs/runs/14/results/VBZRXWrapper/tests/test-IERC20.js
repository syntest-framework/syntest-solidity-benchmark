const IERC20 = artifacts.require("IERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC20', (accounts) => {
	it('test for IERC20', async () => {
		const contractWvu37I2 = await IERC20.new({from: accounts[0]});
		const _valueQiKWPrt = BigInt("509")
		const _toSMVclts = accounts[2]
		const _whoZP0jWta = accounts[1]
		const _valueF2woRuj = BigInt("155")
		const _spenderNSeG2jU = accounts[1]
		const nullNjZL7pg = await contractWvu37I2.transfer.call(_toSMVclts, _valueQiKWPrt, {from: accounts[1]});
		const nullN7G6Z8u = await contractWvu37I2.balanceOf.call(_whoZP0jWta, {from: "0x0000000000000000000000000000000000000001"});
		const nullX02NrlF = await contractWvu37I2.approve.call(_spenderNSeG2jU, _valueF2woRuj, {from: accounts[4]});
	});
})