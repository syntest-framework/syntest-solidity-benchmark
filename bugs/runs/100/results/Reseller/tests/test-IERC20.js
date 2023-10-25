const IERC20 = artifacts.require("IERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC20', (accounts) => {
	it('test for IERC20', async () => {
		const contractSj2Vw6b = await IERC20.new({from: accounts[4]});
		const valueHz8Lnt = BigInt("775")
		const spender2e5KAJ = accounts[3]
		const whoyMVAIvx = accounts[4]
		const valueTTtNqLu = BigInt("1682")
		const toSjnX9hd = accounts[3]
		const nullXPoPEC2 = await contractSj2Vw6b.totalSupply.call({from: accounts[0]});
		const nullSr9Ut11 = await contractSj2Vw6b.approve.call(spender2e5KAJ, valueHz8Lnt, {from: accounts[0]});
		const nullIKhpv1N = await contractSj2Vw6b.balanceOf.call(whoyMVAIvx, {from: accounts[0]});
		const nulluzBn8Tm = await contractSj2Vw6b.mint.call(toSjnX9hd, valueTTtNqLu, {from: accounts[0]});
	});
})