const ERC20Interface = artifacts.require("ERC20Interface");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC20Interface', (accounts) => {
	it('test for ERC20Interface', async () => {
		const contractYZoGVFo = await ERC20Interface.new({from: accounts[5]});
		const spenderux12BVR = accounts[2]
		const tokenOwnerRevuPRx = accounts[5]
		const tokensTkVXeZJ = BigInt("1485")
		const spenderAAteXf6 = accounts[0]
		const tokensBMLzOu5 = BigInt("1119")
		const spenderyFG7oZu = accounts[1]
		const remaining5aQ0Px = await contractYZoGVFo.allowance.call(tokenOwnerRevuPRx, spenderux12BVR, {from: accounts[3]});
		const successVBLHL6l = await contractYZoGVFo.approve.call(spenderAAteXf6, tokensTkVXeZJ, {from: accounts[0]});
		const successs7Va3O = await contractYZoGVFo.approve.call(spenderyFG7oZu, tokensBMLzOu5, {from: accounts[1]});
	});
})