const IERC20 = artifacts.require("IERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC20', (accounts) => {
	it('test for IERC20', async () => {
		const contractpl6lHF = await IERC20.new({from: accounts[0]});
		const whokkT0KSy = accounts[1]
		const valueJzcHToX = BigInt("1797")
		const toOR03J89 = accounts[2]
		const fromTTNPwhn = accounts[3]
		const valueiksIOuN = BigInt("1250")
		const toqz2EmKf = accounts[1]
		const fromt3cOS3F = accounts[2]
		const nullTZDv7Vi = await contractpl6lHF.balanceOf.call(whokkT0KSy, {from: accounts[5]});
		const nulljQ0TSA = await contractpl6lHF.transferFrom.call(fromTTNPwhn, toOR03J89, valueJzcHToX, {from: accounts[4]});
		const nullPtOzFsT = await contractpl6lHF.transferFrom.call(fromt3cOS3F, toqz2EmKf, valueiksIOuN, {from: accounts[1]});
	});
})