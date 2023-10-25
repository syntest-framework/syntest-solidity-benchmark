const IERC20 = artifacts.require("IERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC20', (accounts) => {
	it('test for IERC20', async () => {
		const contractayjSnhQ = await IERC20.new({from: accounts[4]});
		const amountaXzrKIO = BigInt("497")
		const recipientMl6ugjW = accounts[5]
		const senderZ45vl8s = accounts[1]
		const accountsKlWfcJ = accounts[1]
		const accountm1KM5wW = accounts[1]
		const nullYbpPkB6 = await contractayjSnhQ.transferFrom.call(senderZ45vl8s, recipientMl6ugjW, amountaXzrKIO, {from: "0x0000000000000000000000000000000000000001"});
		const nullYvlQUSI = await contractayjSnhQ.balanceOf.call(accountsKlWfcJ, {from: accounts[2]});
		const nullkZXSzrI = await contractayjSnhQ.balanceOf.call(accountm1KM5wW, {from: accounts[1]});
	});
})