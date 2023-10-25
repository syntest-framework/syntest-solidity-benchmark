const IERC20 = artifacts.require("IERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC20', (accounts) => {
	it('test for IERC20', async () => {
		const contractgKumbD = await IERC20.new({from: accounts[4]});
		const _spenderUmBCTwY = accounts[4]
		const _ownern26FCQR = accounts[1]
		const _valuezjLhz7b = BigInt("513")
		const _tordMdWFC = accounts[1]
		const _fromCH1S3h = accounts[2]
		const _whoio6Kui = accounts[5]
		const _spenderaWZrS7L = accounts[1]
		const _ownerAFOujTM = "0x0000000000000000000000000000000000000001"
		const nullVJqOE9l = await contractgKumbD.allowance.call(_ownern26FCQR, _spenderUmBCTwY, {from: accounts[1]});
		const nullhm1aaMz = await contractgKumbD.transferFrom.call(_fromCH1S3h, _tordMdWFC, _valuezjLhz7b, {from: accounts[4]});
		const nullzNue8s2 = await contractgKumbD.balanceOf.call(_whoio6Kui, {from: accounts[5]});
		const nully2fFJYO = await contractgKumbD.allowance.call(_ownerAFOujTM, _spenderaWZrS7L, {from: accounts[1]});
		const nullcwRiSfy = await contractgKumbD.totalSupply.call({from: accounts[2]});
	});
})