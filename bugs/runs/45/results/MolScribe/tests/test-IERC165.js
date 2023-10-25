const IERC165 = artifacts.require("IERC165");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC165', (accounts) => {
	it('test for IERC165', async () => {
		const contractplECqP = await IERC165.new({from: accounts[2]});
		const interfaceIdban64Vf = "0x07040a1a"
		const interfaceIdRaVJnzd = "0x06190f0a"
		const interfaceIdpppg1qN = "0x1f1c141f"
		const interfaceIdMsY4W3 = "0x1104070a"
		const interfaceIda34Y5gK = "0x1d0c1e06"
		const nullt72svf = await contractplECqP.supportsInterface.call(interfaceIdban64Vf, {from: accounts[0]});
		const nullVbuMHPj = await contractplECqP.supportsInterface.call(interfaceIdRaVJnzd, {from: accounts[3]});
		const nullAa0OAMx = await contractplECqP.supportsInterface.call(interfaceIdpppg1qN, {from: "0x0000000000000000000000000000000000000001"});
		const nulltCCnLUv = await contractplECqP.supportsInterface.call(interfaceIdMsY4W3, {from: accounts[3]});
		const nullHuwAF2b = await contractplECqP.supportsInterface.call(interfaceIda34Y5gK, {from: accounts[3]});
	});
})