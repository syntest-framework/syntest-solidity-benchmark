const IERC20 = artifacts.require("IERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC20', (accounts) => {
	it('test for IERC20', async () => {
		const contracttRPUTRJ = await IERC20.new({from: accounts[0]});
		const _whoUDlf9OG = accounts[5]
		const _valueT822Gk = BigInt("1762")
		const _toIZZTqbV = accounts[1]
		const _valuedOD01SS = BigInt("1678")
		const _toz2RflL7 = accounts[3]
		const nullihtOtzk = await contracttRPUTRJ.balanceOf.call(_whoUDlf9OG, {from: "0x0000000000000000000000000000000000000001"});
		const nullMicg5LF = await contracttRPUTRJ.transfer.call(_toIZZTqbV, _valueT822Gk, {from: accounts[1]});
		const nullkTDE8G6 = await contracttRPUTRJ.transfer.call(_toz2RflL7, _valuedOD01SS, {from: accounts[3]});
		const nullXIhxG7s = await contracttRPUTRJ.totalSupply.call({from: accounts[3]});
	});
})