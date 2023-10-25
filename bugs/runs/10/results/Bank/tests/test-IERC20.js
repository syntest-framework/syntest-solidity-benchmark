const IERC20 = artifacts.require("IERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC20', (accounts) => {
	it('test for IERC20', async () => {
		const contractT4kNnuW = await IERC20.new({from: "0x0000000000000000000000000000000000000001"});
		const whoJh2W7A = accounts[0]
		const spenderSS3DLP = accounts[0]
		const ownerENZjNnj = accounts[2]
		const valueapwc2lF = BigInt("1171")
		const spendertWc8Nvl = accounts[0]
		const spenderdmzcrnz = accounts[0]
		const ownerVT93zEV = accounts[3]
		const nullC7eKBhq = await contractT4kNnuW.balanceOf.call(whoJh2W7A, {from: accounts[1]});
		const nullZX9iJii = await contractT4kNnuW.allowance.call(ownerENZjNnj, spenderSS3DLP, {from: "0x0000000000000000000000000000000000000001"});
		const nullv4InR1t = await contractT4kNnuW.approve.call(spendertWc8Nvl, valueapwc2lF, {from: accounts[3]});
		const nullR4GlIKz = await contractT4kNnuW.allowance.call(ownerVT93zEV, spenderdmzcrnz, {from: accounts[4]});
	});
})