const IERC20 = artifacts.require("IERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC20', (accounts) => {
	it('test for IERC20', async () => {
		const contractY9Wq81o = await IERC20.new({from: accounts[4]});
		const _valueesFBcEk = BigInt("1856")
		const _togrHXh8i = accounts[0]
		const _fromeeNOpT0 = accounts[2]
		const _spenderoRhUFsM = accounts[0]
		const _ownerYhFQhsZ = accounts[4]
		const _valueBibOkYo = BigInt("793")
		const _too1iUelW = accounts[3]
		const _fromTW3UIYY = accounts[3]
		const _valueo8GxbWb = BigInt("1474")
		const _towqjpfoK = accounts[5]
		const _fromZ5S0D7H = accounts[4]
		const nullnZ0WpHS = await contractY9Wq81o.transferFrom.call(_fromeeNOpT0, _togrHXh8i, _valueesFBcEk, {from: accounts[0]});
		const nullV91xYoo = await contractY9Wq81o.allowance.call(_ownerYhFQhsZ, _spenderoRhUFsM, {from: accounts[5]});
		const nullQMvKmvY = await contractY9Wq81o.transferFrom.call(_fromTW3UIYY, _too1iUelW, _valueBibOkYo, {from: accounts[0]});
		const nullVk0wqfb = await contractY9Wq81o.transferFrom.call(_fromZ5S0D7H, _towqjpfoK, _valueo8GxbWb, {from: accounts[0]});
	});
})