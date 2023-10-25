const IERC20 = artifacts.require("IERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC20', (accounts) => {
	it('test for IERC20', async () => {
		const contractm1B39co = await IERC20.new({from: accounts[4]});
		const _spendervChiwKt = accounts[2]
		const _ownerwDKw2LY = accounts[2]
		const _spendertkNmm9R = accounts[1]
		const _ownero4xuONh = accounts[2]
		const _valueQ7feQH0 = BigInt("276")
		const _tortO9BUo = accounts[4]
		const _frompftkjV1 = accounts[1]
		const _valuejmYOCGc = BigInt("251")
		const _touaa6Nwm = accounts[4]
		const _fromUkf1YLb = accounts[1]
		const nulltLVltAH = await contractm1B39co.totalSupply.call({from: accounts[1]});
		const nullfG1sPJI = await contractm1B39co.allowance.call(_ownerwDKw2LY, _spendervChiwKt, {from: accounts[1]});
		const nullnsfMnPm = await contractm1B39co.allowance.call(_ownero4xuONh, _spendertkNmm9R, {from: accounts[5]});
		const nulljWiYqlA = await contractm1B39co.transferFrom.call(_frompftkjV1, _tortO9BUo, _valueQ7feQH0, {from: accounts[5]});
		const nullZJWCXkk = await contractm1B39co.transferFrom.call(_fromUkf1YLb, _touaa6Nwm, _valuejmYOCGc, {from: accounts[0]});
	});
})