const IERC20 = artifacts.require("IERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC20', (accounts) => {
	it('test for IERC20', async () => {
		const contractviCMh0a = await IERC20.new({from: "0x0000000000000000000000000000000000000001"});
		const amounteFoszBC = BigInt("1040")
		const recipientbdkZGa = "0x0000000000000000000000000000000000000001"
		const accountbn0AJcK = accounts[4]
		const amountxUqM0JB = BigInt("1268")
		const recipientcGAsrOs = accounts[5]
		const senderQ3u2KL7 = accounts[3]
		const nullNbl46vl = await contractviCMh0a.transfer.call(recipientbdkZGa, amounteFoszBC, {from: accounts[2]});
		const nullsxPaYx8 = await contractviCMh0a.balanceOf.call(accountbn0AJcK, {from: accounts[1]});
		const nullyxso166 = await contractviCMh0a.transferFrom.call(senderQ3u2KL7, recipientcGAsrOs, amountxUqM0JB, {from: accounts[5]});
	});
})