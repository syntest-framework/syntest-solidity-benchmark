const ERC165 = artifacts.require("ERC165");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC165', (accounts) => {
	it('test for ERC165', async () => {
		const contractduMGCWk = await ERC165.new({from: accounts[1]});
		const interfaceIdZRnJp0T = "0x060f1418"
		const interfaceIdnSicSPO = "0x1104040f"
		const interfaceIdlHzK5FV = "0x15070d00"
		const interfaceIdCFR3WDm = "0x0c13180a"
		const interfaceIdyY9yBnj = "0x0a0d040e"
		const nulljlsbr9s = await contractduMGCWk.supportsInterface.call(interfaceIdZRnJp0T, {from: accounts[2]});
		const nullcugoHoA = await contractduMGCWk.supportsInterface.call(interfaceIdnSicSPO, {from: accounts[5]});
		const nullEaCipl = await contractduMGCWk.supportsInterface.call(interfaceIdlHzK5FV, {from: accounts[3]});
		const nullQppLHdX = await contractduMGCWk.supportsInterface.call(interfaceIdCFR3WDm, {from: accounts[0]});
		const nullUaaBtr = await contractduMGCWk.supportsInterface.call(interfaceIdyY9yBnj, {from: accounts[2]});
	});
})