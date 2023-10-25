const IUSDT = artifacts.require("IUSDT");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IUSDT', (accounts) => {
	it('test for IUSDT', async () => {
		const contractdXqPu0O = await IUSDT.new({from: accounts[1]});
		const spendercegjIsO = accounts[1]
		const ownerByaDm36 = accounts[0]
		const amountDKzGmm = BigInt("1681")
		const recipientHmih6SS = accounts[1]
		const nullFYvFPwm = await contractdXqPu0O.totalSupply.call({from: accounts[4]});
		const nullvEZ1dPi = await contractdXqPu0O.allowance.call(ownerByaDm36, spendercegjIsO, {from: accounts[1]});
		await contractdXqPu0O.transfer.call(recipientHmih6SS, amountDKzGmm, {from: accounts[1]});
	});
})