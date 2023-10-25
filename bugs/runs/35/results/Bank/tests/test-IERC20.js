const IERC20 = artifacts.require("IERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC20', (accounts) => {
	it('test for IERC20', async () => {
		const contractbUNn0e6 = await IERC20.new({from: accounts[1]});
		const spenderZACksr = accounts[3]
		const ownerBA83hQm = accounts[1]
		const valueEFG9FJH = BigInt("938")
		const spendergO3JuC = accounts[1]
		const spenderat0YH20 = accounts[5]
		const owner9hOAB2 = accounts[3]
		const valueZqzUuAg = BigInt("1359")
		const tosdHpfR1 = accounts[3]
		const valueB4IzuKI = BigInt("1277")
		const spenderBfsBmuQ = accounts[0]
		const nullsrINZu7 = await contractbUNn0e6.allowance.call(ownerBA83hQm, spenderZACksr, {from: accounts[2]});
		const nullo5Wa5Pp = await contractbUNn0e6.approve.call(spendergO3JuC, valueEFG9FJH, {from: "0x0000000000000000000000000000000000000001"});
		const nulloGai7mh = await contractbUNn0e6.allowance.call(owner9hOAB2, spenderat0YH20, {from: accounts[1]});
		const nullJkHMnS0 = await contractbUNn0e6.transfer.call(tosdHpfR1, valueZqzUuAg, {from: accounts[1]});
		const null38pu8P = await contractbUNn0e6.approve.call(spenderBfsBmuQ, valueB4IzuKI, {from: accounts[2]});
	});
})