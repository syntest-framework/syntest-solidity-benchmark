const IERC20 = artifacts.require("IERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC20', (accounts) => {
	it('test for IERC20', async () => {
		const contractVil15NQ = await IERC20.new({from: accounts[4]});
		const _valueR2OU9dS = BigInt("1160")
		const _spenderGvLintD = accounts[2]
		const _whoh6GFnyF = accounts[2]
		const _valuezQyVSue = BigInt("619")
		const _spenderK4PCSbG = accounts[3]
		const _value3fQ59A = BigInt("431")
		const _toDb8iKTg = accounts[3]
		const _spenderVnybk7t = "0x0000000000000000000000000000000000000001"
		const _ownerz2gwvu0 = accounts[0]
		const nullrgiibjs = await contractVil15NQ.approve.call(_spenderGvLintD, _valueR2OU9dS, {from: accounts[0]});
		const nullOIn2MOp = await contractVil15NQ.balanceOf.call(_whoh6GFnyF, {from: accounts[0]});
		const nullz8yZ8lJ = await contractVil15NQ.approve.call(_spenderK4PCSbG, _valuezQyVSue, {from: accounts[5]});
		const nullPefdZX3 = await contractVil15NQ.totalSupply.call({from: accounts[4]});
		const nullyxuC0U = await contractVil15NQ.transfer.call(_toDb8iKTg, _value3fQ59A, {from: accounts[0]});
		const nullgj5Bkwi = await contractVil15NQ.allowance.call(_ownerz2gwvu0, _spenderVnybk7t, {from: accounts[3]});
	});
})