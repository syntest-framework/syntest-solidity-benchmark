const IERC20 = artifacts.require("IERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC20', (accounts) => {
	it('test for IERC20', async () => {
		const contractdGTAEUz = await IERC20.new({from: accounts[1]});
		const amountaEm4IKr = BigInt("1157")
		const recipientTgWOMdL = accounts[3]
		const amountHI3VtwC = BigInt("297")
		const recipientkcnWsX = accounts[2]
		const amountbXYElXZ = BigInt("174")
		const recipientIqxsgVM = accounts[4]
		const senderm1cS3vt = accounts[4]
		const amountNmqvIys = BigInt("1778")
		const recipientuZ6MKqv = accounts[2]
		const nullilkRonl = await contractdGTAEUz.transfer.call(recipientTgWOMdL, amountaEm4IKr, {from: accounts[3]});
		const nullerUty4Z = await contractdGTAEUz.transfer.call(recipientkcnWsX, amountHI3VtwC, {from: accounts[1]});
		const null4GxLor = await contractdGTAEUz.transferFrom.call(senderm1cS3vt, recipientIqxsgVM, amountbXYElXZ, {from: "0x0000000000000000000000000000000000000001"});
		const nulllRbRdC0 = await contractdGTAEUz.transfer.call(recipientuZ6MKqv, amountNmqvIys, {from: "0x0000000000000000000000000000000000000001"});
	});
})