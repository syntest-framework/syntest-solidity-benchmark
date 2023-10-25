const IERC20 = artifacts.require("IERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC20', (accounts) => {
	it('test for IERC20', async () => {
		const contractXkoElms = await IERC20.new({from: accounts[5]});
		const whoXrZvzFW = accounts[3]
		const whozUkiy5m = accounts[4]
		const valueubnQ9lF = BigInt("931")
		const spenderDdoignz = accounts[4]
		const valueW4IT8F0 = BigInt("1205")
		const toKZg0stR = accounts[0]
		const fromTbfYyDS = "0x0000000000000000000000000000000000000001"
		const valuedH4Ty2S = BigInt("1747")
		const toe24sbCE = accounts[0]
		const nullDr0Fc4J = await contractXkoElms.balanceOf.call(whoXrZvzFW, {from: accounts[0]});
		const nullgdscAzl = await contractXkoElms.balanceOf.call(whozUkiy5m, {from: accounts[0]});
		const nullOnXlER = await contractXkoElms.approve.call(spenderDdoignz, valueubnQ9lF, {from: accounts[2]});
		const nullTKMd5xi = await contractXkoElms.transferFrom.call(fromTbfYyDS, toKZg0stR, valueW4IT8F0, {from: accounts[2]});
		const nullqoRvX7 = await contractXkoElms.transfer.call(toe24sbCE, valuedH4Ty2S, {from: "0x0000000000000000000000000000000000000001"});
	});
})