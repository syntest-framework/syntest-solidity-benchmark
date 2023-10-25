const IERC20 = artifacts.require("IERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC20', (accounts) => {
	it('test for IERC20', async () => {
		const contractgB5qm0V = await IERC20.new({from: accounts[5]});
		const _valueFBgBOKs = BigInt("1715")
		const _spenderZbkFSvm = accounts[2]
		const _spenderQMYl85L = "0x0000000000000000000000000000000000000001"
		const _ownermbA67ih = accounts[5]
		const nullT7DeP6n = await contractgB5qm0V.approve.call(_spenderZbkFSvm, _valueFBgBOKs, {from: accounts[0]});
		const nullFDY2fSG = await contractgB5qm0V.allowance.call(_ownermbA67ih, _spenderQMYl85L, {from: accounts[4]});
	});
})