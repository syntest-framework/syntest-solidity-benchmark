const IERC20 = artifacts.require("IERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC20', (accounts) => {
	it('test for IERC20', async () => {
		const contractn5CHqyV = await IERC20.new({from: accounts[0]});
		const amountK0GtgJ4 = BigInt("733")
		const recipientmxZaPi3 = "0x0000000000000000000000000000000000000001"
		const amountDbRF4Jx = BigInt("1102")
		const recipientHLsnv8 = accounts[2]
		const senderi8kc7q3 = accounts[0]
		const amountj3D03Hi = BigInt("1058")
		const recipientAV72HvW = accounts[1]
		const nullTjcDbtD = await contractn5CHqyV.transfer.call(recipientmxZaPi3, amountK0GtgJ4, {from: accounts[5]});
		const nullpGS5BA = await contractn5CHqyV.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
		const nullojqnjJC = await contractn5CHqyV.transferFrom.call(senderi8kc7q3, recipientHLsnv8, amountDbRF4Jx, {from: accounts[0]});
		const nullXBIuBq6 = await contractn5CHqyV.transfer.call(recipientAV72HvW, amountj3D03Hi, {from: accounts[0]});
	});
})