const IERC20 = artifacts.require("IERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC20', (accounts) => {
	it('test for IERC20', async () => {
		const contractTWReAos = await IERC20.new({from: accounts[4]});
		const spenderfRMYDlX = accounts[2]
		const ownerT4mOoBf = "0x0000000000000000000000000000000000000001"
		const valuejfvVd5D = BigInt("1045")
		const spenderhJHLLDY = accounts[3]
		const valuePzxHvfm = BigInt("332")
		const spenderEvbZWx = accounts[4]
		const whowaN16DD = accounts[4]
		const nullNt8wLMh = await contractTWReAos.allowance.call(ownerT4mOoBf, spenderfRMYDlX, {from: accounts[2]});
		const nullLx40KRQ = await contractTWReAos.approve.call(spenderhJHLLDY, valuejfvVd5D, {from: accounts[3]});
		const nullE7m9ogT = await contractTWReAos.approve.call(spenderEvbZWx, valuePzxHvfm, {from: accounts[3]});
		const nullgX0yhFC = await contractTWReAos.totalSupply.call({from: accounts[3]});
		const nullzoMRMMw = await contractTWReAos.balanceOf.call(whowaN16DD, {from: accounts[0]});
	});
})