const IERC20 = artifacts.require("IERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC20', (accounts) => {
	it('test for IERC20', async () => {
		const contractNngYNCt = await IERC20.new({from: accounts[4]});
		const valueKL7KTXc = BigInt("1861")
		const toP8Rqk8d = accounts[1]
		const fromVWPZNEa = accounts[0]
		const periodrrYZlvi = BigInt("1283")
		const amountmhf2NmL = BigInt("712")
		const recipientou4p7fc = accounts[2]
		const nullENv6Ck5 = await contractNngYNCt.transferFrom.call(fromVWPZNEa, toP8Rqk8d, valueKL7KTXc, {from: accounts[3]});
		await contractNngYNCt.freezeAndTransfer.call(recipientou4p7fc, amountmhf2NmL, periodrrYZlvi, {from: accounts[0]});
		const nullZtW1kz4 = await contractNngYNCt.totalSupply.call({from: accounts[2]});
	});
})