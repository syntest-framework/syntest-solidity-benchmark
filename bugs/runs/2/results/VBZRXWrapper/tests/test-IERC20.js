const IERC20 = artifacts.require("IERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC20', (accounts) => {
	it('test for IERC20', async () => {
		const contractMa6hlGf = await IERC20.new({from: accounts[3]});
		const _spenderM3QDpVT = accounts[0]
		const _ownerW9f0xna = accounts[4]
		const _valueVx2qrJg = BigInt("1042")
		const _tofUcuhjG = accounts[1]
		const nullpDMdOP6 = await contractMa6hlGf.allowance.call(_ownerW9f0xna, _spenderM3QDpVT, {from: accounts[0]});
		const nullkkLq5Bu = await contractMa6hlGf.transfer.call(_tofUcuhjG, _valueVx2qrJg, {from: accounts[3]});
	});
})