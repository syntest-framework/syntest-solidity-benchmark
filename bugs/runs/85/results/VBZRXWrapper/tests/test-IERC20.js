const IERC20 = artifacts.require("IERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC20', (accounts) => {
	it('test for IERC20', async () => {
		const contractK67saqQ = await IERC20.new({from: accounts[4]});
		const _values1yPE9e = BigInt("1220")
		const _toGUbaiql = accounts[5]
		const _valuejAOWYX = BigInt("252")
		const _to8VFkt4 = accounts[0]
		const _valueIspcBZE = BigInt("404")
		const _toDI9ivze = accounts[3]
		const null2CySoG = await contractK67saqQ.transfer.call(_toGUbaiql, _values1yPE9e, {from: "0x0000000000000000000000000000000000000001"});
		const null21eC7x = await contractK67saqQ.transfer.call(_to8VFkt4, _valuejAOWYX, {from: accounts[2]});
		const nullDMctxCp = await contractK67saqQ.totalSupply.call({from: accounts[4]});
		const nullrWaFLSo = await contractK67saqQ.transfer.call(_toDI9ivze, _valueIspcBZE, {from: accounts[0]});
	});
})