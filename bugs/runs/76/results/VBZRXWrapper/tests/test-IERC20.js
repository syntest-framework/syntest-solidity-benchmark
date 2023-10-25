const IERC20 = artifacts.require("IERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC20', (accounts) => {
	it('test for IERC20', async () => {
		const contracti9FM1Kw = await IERC20.new({from: "0x0000000000000000000000000000000000000001"});
		const _whoMWLcIjF = accounts[3]
		const _valuetxe8Bu0 = BigInt("820")
		const _tot3F1DZ6 = accounts[2]
		const _valueBMO0Zyv = BigInt("539")
		const _tocV2flie = accounts[1]
		const _valueAX3HWZ = BigInt("58")
		const _togc7MqfO = accounts[3]
		const nullyCsYCug = await contracti9FM1Kw.balanceOf.call(_whoMWLcIjF, {from: accounts[3]});
		const nullggpAzpQ = await contracti9FM1Kw.transfer.call(_tot3F1DZ6, _valuetxe8Bu0, {from: accounts[1]});
		const nulldLaV3tm = await contracti9FM1Kw.transfer.call(_tocV2flie, _valueBMO0Zyv, {from: accounts[1]});
		const nullicnm7Dc = await contracti9FM1Kw.transfer.call(_togc7MqfO, _valueAX3HWZ, {from: accounts[1]});
	});
})