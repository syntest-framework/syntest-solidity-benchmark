const ERC20Interface = artifacts.require("ERC20Interface");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC20Interface', (accounts) => {
	it('test for ERC20Interface', async () => {
		const contractH0uES5s = await ERC20Interface.new({from: accounts[5]});
		const tokensOh08qub = BigInt("1728")
		const toC28QLMM = accounts[2]
		const spenderYmfOr8g = accounts[0]
		const tokenOwner53W2Bv = accounts[3]
		const tokensBxrG3zA = BigInt("1945")
		const toKz3LK5o = accounts[0]
		const tokensHpCqEMf = BigInt("1169")
		const spenderAWs7hQM = "0x0000000000000000000000000000000000000001"
		const successW1U0n5u = await contractH0uES5s.transfer.call(toC28QLMM, tokensOh08qub, {from: accounts[1]});
		const remainingUe76gHR = await contractH0uES5s.allowance.call(tokenOwner53W2Bv, spenderYmfOr8g, {from: accounts[4]});
		const successX2wyoj = await contractH0uES5s.transfer.call(toKz3LK5o, tokensBxrG3zA, {from: accounts[4]});
		const successygLSkwK = await contractH0uES5s.approve.call(spenderAWs7hQM, tokensHpCqEMf, {from: accounts[2]});
	});
})