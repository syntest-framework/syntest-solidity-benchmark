const ERC20Interface = artifacts.require("ERC20Interface");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC20Interface', (accounts) => {
	it('test for ERC20Interface', async () => {
		const contractPmqMbHR = await ERC20Interface.new({from: accounts[1]});
		const tokensCravqUM = BigInt("1008")
		const spenderQQ0iJOu = accounts[1]
		const tokenOwnergjbrVUq = accounts[0]
		const tokenOwnerCnhEwWk = accounts[3]
		const successIm0lvKW = await contractPmqMbHR.approve.call(spenderQQ0iJOu, tokensCravqUM, {from: accounts[1]});
		const balancezeanbE = await contractPmqMbHR.balanceOf.call(tokenOwnergjbrVUq, {from: accounts[4]});
		const balanceOQzVAa = await contractPmqMbHR.balanceOf.call(tokenOwnerCnhEwWk, {from: accounts[3]});
	});
})