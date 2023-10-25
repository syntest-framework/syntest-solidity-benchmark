const IERC20 = artifacts.require("IERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC20', (accounts) => {
	it('test for IERC20', async () => {
		const contractR2w1xvn = await IERC20.new({from: accounts[4]});
		const _value2nmHrL = BigInt("1632")
		const _spenderr4hPaPH = accounts[0]
		const _valueSGfJe5p = BigInt("994")
		const _toR7JQACp = accounts[5]
		const _valueLiCbfPz = BigInt("807")
		const _spenderuu7vclV = accounts[0]
		const _valueNYlIlBB = BigInt("873")
		const _toBgp8Z1D = accounts[2]
		const _spenderpclY3Th = accounts[0]
		const _ownerFXSF6M3 = accounts[1]
		const nullL3wPB8G = await contractR2w1xvn.approve.call(_spenderr4hPaPH, _value2nmHrL, {from: accounts[2]});
		const nullOWCv10M = await contractR2w1xvn.transfer.call(_toR7JQACp, _valueSGfJe5p, {from: accounts[1]});
		const nullVIkqjcE = await contractR2w1xvn.totalSupply.call({from: accounts[5]});
		const nullVSgml3 = await contractR2w1xvn.approve.call(_spenderuu7vclV, _valueLiCbfPz, {from: accounts[3]});
		const nullHDKVKd = await contractR2w1xvn.transfer.call(_toBgp8Z1D, _valueNYlIlBB, {from: accounts[1]});
		const nullib3ixiz = await contractR2w1xvn.allowance.call(_ownerFXSF6M3, _spenderpclY3Th, {from: accounts[2]});
	});
})