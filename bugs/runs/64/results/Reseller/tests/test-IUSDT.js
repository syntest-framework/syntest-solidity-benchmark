const IUSDT = artifacts.require("IUSDT");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IUSDT', (accounts) => {
	it('test for IUSDT', async () => {
		const contractYGKBRnw = await IUSDT.new({from: accounts[3]});
		const accountIcU5mwG = accounts[2]
		const accountoLF2CdV = accounts[2]
		const amountDYis3Dm = BigInt("334")
		const spenderN1N8wut = accounts[0]
		const nullOzwV1ND = await contractYGKBRnw.balanceOf.call(accountIcU5mwG, {from: accounts[1]});
		const nullRdYf0XH = await contractYGKBRnw.balanceOf.call(accountoLF2CdV, {from: accounts[4]});
		await contractYGKBRnw.approve.call(spenderN1N8wut, amountDYis3Dm, {from: accounts[2]});
	});
})