const IERC20 = artifacts.require("IERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC20', (accounts) => {
	it('test for IERC20', async () => {
		const contractj4ARIrM = await IERC20.new({from: "0x0000000000000000000000000000000000000001"});
		const _whot8HIqqN = "0x0000000000000000000000000000000000000001"
		const _valueIIULPJ2 = BigInt("532")
		const _tooa1cDA0 = accounts[1]
		const _valueqdsXsnh = BigInt("345")
		const _tozWbf1ls = accounts[2]
		const _valueIE1Y9eS = BigInt("1327")
		const _toqZVRmY = accounts[0]
		const nullwysgzeS = await contractj4ARIrM.balanceOf.call(_whot8HIqqN, {from: accounts[0]});
		const nullEWyo4ph = await contractj4ARIrM.totalSupply.call({from: accounts[2]});
		const nullarOWnnf = await contractj4ARIrM.transfer.call(_tooa1cDA0, _valueIIULPJ2, {from: accounts[2]});
		const nullKdWuHm8 = await contractj4ARIrM.transfer.call(_tozWbf1ls, _valueqdsXsnh, {from: accounts[4]});
		const nullrr1PLWw = await contractj4ARIrM.transfer.call(_toqZVRmY, _valueIE1Y9eS, {from: accounts[5]});
	});
})