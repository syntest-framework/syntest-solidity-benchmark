const ERC20Interface = artifacts.require("ERC20Interface");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC20Interface', (accounts) => {
	it('test for ERC20Interface', async () => {
		const contractbND3nf0 = await ERC20Interface.new({from: accounts[4]});
		const tokensHw2AHdY = BigInt("822")
		const tohyKg86C = accounts[3]
		const tokensf5ZjCcE = BigInt("864")
		const spendertq64EXn = accounts[0]
		const tokensUJgb9e0 = BigInt("471")
		const spenderuEKSHLD = accounts[2]
		const tokenOwnermTSAnB = accounts[0]
		const successgJJT5DC = await contractbND3nf0.transfer.call(tohyKg86C, tokensHw2AHdY, {from: accounts[4]});
		const successj5heAB = await contractbND3nf0.approve.call(spendertq64EXn, tokensf5ZjCcE, {from: accounts[1]});
		const successhAc3m5O = await contractbND3nf0.approve.call(spenderuEKSHLD, tokensUJgb9e0, {from: accounts[4]});
		const balancefcRTRWt = await contractbND3nf0.balanceOf.call(tokenOwnermTSAnB, {from: accounts[4]});
	});
})