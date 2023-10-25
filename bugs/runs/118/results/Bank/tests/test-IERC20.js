const IERC20 = artifacts.require("IERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC20', (accounts) => {
	it('test for IERC20', async () => {
		const contractD8NR43e = await IERC20.new({from: accounts[2]});
		const valuelXJaUzK = BigInt("1178")
		const tokRTuOib = accounts[2]
		const whoZDCw7Y = accounts[1]
		const valueNWudnHo = BigInt("1683")
		const tokaKtDob = accounts[1]
		const whoDIQoZ6Y = accounts[1]
		const nullwZhyiFs = await contractD8NR43e.transfer.call(tokRTuOib, valuelXJaUzK, {from: accounts[3]});
		const nullBRsMHS = await contractD8NR43e.balanceOf.call(whoZDCw7Y, {from: accounts[1]});
		const nullJu4c36V = await contractD8NR43e.transfer.call(tokaKtDob, valueNWudnHo, {from: accounts[3]});
		const nullNUMejg = await contractD8NR43e.balanceOf.call(whoDIQoZ6Y, {from: accounts[2]});
	});
})