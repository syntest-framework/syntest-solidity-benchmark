const IERC20 = artifacts.require("IERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC20', (accounts) => {
	it('test for IERC20', async () => {
		const contractLp2vaZ = await IERC20.new({from: accounts[1]});
		const spenderNiRf6I0 = accounts[3]
		const ownerATkt9hq = "0x0000000000000000000000000000000000000001"
		const valuetVIp2tq = BigInt("469")
		const spenderblfFaKn = accounts[0]
		const whopnBCNJH = "0x0000000000000000000000000000000000000001"
		const valueksrPbS9 = BigInt("1128")
		const toJw97rQs = accounts[3]
		const fromDxzsHY4 = accounts[0]
		const nulls40OSc4 = await contractLp2vaZ.allowance.call(ownerATkt9hq, spenderNiRf6I0, {from: accounts[2]});
		const nulleS77MS = await contractLp2vaZ.totalSupply.call({from: accounts[1]});
		const nullLMR6dWC = await contractLp2vaZ.approve.call(spenderblfFaKn, valuetVIp2tq, {from: "0x0000000000000000000000000000000000000001"});
		const nullVLD1qjp = await contractLp2vaZ.balanceOf.call(whopnBCNJH, {from: accounts[1]});
		const nullQBKOSyC = await contractLp2vaZ.transferFrom.call(fromDxzsHY4, toJw97rQs, valueksrPbS9, {from: accounts[0]});
	});
})