const IERC20 = artifacts.require("IERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC20', (accounts) => {
	it('test for IERC20', async () => {
		const contractltSaIpD = await IERC20.new({from: "0x0000000000000000000000000000000000000001"});
		const valuepy99bn = BigInt("1805")
		const toP7e3bi8 = accounts[1]
		const valuekFGuxg = BigInt("551")
		const spenderlct38KU = accounts[1]
		const valueuo9cp5 = BigInt("1031")
		const toqgcmtxi = accounts[2]
		const valueb1WiVZw = BigInt("1187")
		const toun558cG = accounts[4]
		const valuecNVkrJ = BigInt("1409")
		const toNTcTaQo = accounts[5]
		const fromEj2j8KH = accounts[0]
		const nullrT4iN5v = await contractltSaIpD.transfer.call(toP7e3bi8, valuepy99bn, {from: "0x0000000000000000000000000000000000000001"});
		const nullMMLoWXt = await contractltSaIpD.approve.call(spenderlct38KU, valuekFGuxg, {from: accounts[3]});
		const nullyNfSgo9 = await contractltSaIpD.transfer.call(toqgcmtxi, valueuo9cp5, {from: accounts[0]});
		const null68nZnI = await contractltSaIpD.transfer.call(toun558cG, valueb1WiVZw, {from: accounts[3]});
		const nullLLmBGMh = await contractltSaIpD.transferFrom.call(fromEj2j8KH, toNTcTaQo, valuecNVkrJ, {from: accounts[2]});
	});
})