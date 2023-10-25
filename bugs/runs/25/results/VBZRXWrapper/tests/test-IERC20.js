const IERC20 = artifacts.require("IERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC20', (accounts) => {
	it('test for IERC20', async () => {
		const contract2Ee6nV = await IERC20.new({from: accounts[2]});
		const _whoIyubvAa = accounts[3]
		const _valueWhgrN2b = BigInt("1728")
		const _toDaen93O = accounts[1]
		const _valueKTywUUV = BigInt("1860")
		const _tomK4aPc = accounts[4]
		const _whoPjLXhkE = accounts[5]
		const _spenderO0Wprew = accounts[1]
		const _ownerm2xUH6 = accounts[1]
		const _whof7efnh0 = accounts[0]
		const nullKduI7OM = await contract2Ee6nV.balanceOf.call(_whoIyubvAa, {from: accounts[5]});
		const nulliLNwX7T = await contract2Ee6nV.transfer.call(_toDaen93O, _valueWhgrN2b, {from: accounts[3]});
		const nullrBwmVqf = await contract2Ee6nV.transfer.call(_tomK4aPc, _valueKTywUUV, {from: accounts[3]});
		const nullu3DBkiV = await contract2Ee6nV.balanceOf.call(_whoPjLXhkE, {from: accounts[1]});
		const nullLL8YPHk = await contract2Ee6nV.allowance.call(_ownerm2xUH6, _spenderO0Wprew, {from: accounts[4]});
		const nullYmANyr5 = await contract2Ee6nV.balanceOf.call(_whof7efnh0, {from: accounts[4]});
	});
})