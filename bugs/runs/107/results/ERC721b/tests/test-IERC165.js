const IERC165 = artifacts.require("IERC165");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC165', (accounts) => {
	it('test for IERC165', async () => {
		const contractNwllk5g = await IERC165.new({from: accounts[3]});
		const interfaceIdGOLdPO8 = "0x180a1e03"
		const interfaceIdoTTJkAI = "0x14180f0a"
		const interfaceIdU2hO45 = "0x1e1c1718"
		const interfaceIdA0aa6lf = "0x04062006"
		const interfaceIdgSGEuyi = "0x091a1d18"
		const null8h0Y6u = await contractNwllk5g.supportsInterface.call(interfaceIdGOLdPO8, {from: accounts[3]});
		const nullFZ4CryV = await contractNwllk5g.supportsInterface.call(interfaceIdoTTJkAI, {from: accounts[3]});
		const nullESZf0lP = await contractNwllk5g.supportsInterface.call(interfaceIdU2hO45, {from: "0x0000000000000000000000000000000000000001"});
		const nullc9znI61 = await contractNwllk5g.supportsInterface.call(interfaceIdA0aa6lf, {from: accounts[4]});
		const nullrjJdD1o = await contractNwllk5g.supportsInterface.call(interfaceIdgSGEuyi, {from: accounts[4]});
	});
})