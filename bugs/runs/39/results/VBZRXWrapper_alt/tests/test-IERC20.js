const IERC20 = artifacts.require("IERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC20', (accounts) => {
	it('test for IERC20', async () => {
		const contracteLkhmy6 = await IERC20.new({from: accounts[4]});
		const amountsTedEad = BigInt("182")
		const recipientW2cq43Y = accounts[1]
		const accountarcWWpw = accounts[2]
		const amountYwmXc4H = BigInt("1077")
		const recipientLgASLJj = accounts[5]
		const nullQJsnKtu = await contracteLkhmy6.transfer.call(recipientW2cq43Y, amountsTedEad, {from: "0x0000000000000000000000000000000000000001"});
		const nullHigBRF = await contracteLkhmy6.balanceOf.call(accountarcWWpw, {from: accounts[1]});
		const nullad6K6NX = await contracteLkhmy6.transfer.call(recipientLgASLJj, amountYwmXc4H, {from: accounts[4]});
	});
})