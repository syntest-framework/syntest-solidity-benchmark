const IUSDT = artifacts.require("IUSDT");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IUSDT', (accounts) => {
	it('test for IUSDT', async () => {
		const contractACyZ4u = await IUSDT.new({from: accounts[0]});
		const spenderTxgnFpj = accounts[2]
		const ownerxDkqV7 = accounts[0]
		const spenderYiI9IbS = accounts[4]
		const owner2ittf9 = accounts[3]
		const nullHDoeXPn = await contractACyZ4u.allowance.call(ownerxDkqV7, spenderTxgnFpj, {from: accounts[2]});
		const nullVQ3ShB = await contractACyZ4u.allowance.call(owner2ittf9, spenderYiI9IbS, {from: accounts[1]});
	});
})