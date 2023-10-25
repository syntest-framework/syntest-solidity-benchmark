const IERC20 = artifacts.require("IERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC20', (accounts) => {
	it('test for IERC20', async () => {
		const contractxjxozw8 = await IERC20.new({from: accounts[1]});
		const valueRbaIZwk = BigInt("728")
		const spenderh07eXL = accounts[4]
		const valueLmZaMJF = BigInt("136")
		const tofzAHJ8 = accounts[0]
		const nullSmua0V9 = await contractxjxozw8.totalSupply.call({from: accounts[4]});
		const nulljKVxl1F = await contractxjxozw8.approve.call(spenderh07eXL, valueRbaIZwk, {from: accounts[3]});
		const nulle5UYeRo = await contractxjxozw8.transfer.call(tofzAHJ8, valueLmZaMJF, {from: accounts[4]});
	});
})