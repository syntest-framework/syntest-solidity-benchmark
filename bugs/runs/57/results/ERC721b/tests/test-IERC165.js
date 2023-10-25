const IERC165 = artifacts.require("IERC165");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC165', (accounts) => {
	it('test for IERC165', async () => {
		const contractH1CcsWh = await IERC165.new({from: accounts[3]});
		const interfaceIdixIGREf = "0x16001118"
		const interfaceIducwpDaY = "0x05031204"
		const interfaceIdaL4dxP = "0x09080516"
		const interfaceIdAwSK0W = "0x1108031a"
		const interfaceIdkSnYkVs = "0x1b1a0404"
		const interfaceIdbQNqjte = "0x0a0d140c"
		const nullzglhgsK = await contractH1CcsWh.supportsInterface.call(interfaceIdixIGREf, {from: accounts[1]});
		const nullTckZaiG = await contractH1CcsWh.supportsInterface.call(interfaceIducwpDaY, {from: accounts[2]});
		const nullmT3ypVi = await contractH1CcsWh.supportsInterface.call(interfaceIdaL4dxP, {from: accounts[3]});
		const nullmeqDHm = await contractH1CcsWh.supportsInterface.call(interfaceIdAwSK0W, {from: "0x0000000000000000000000000000000000000001"});
		const nullHksRNm9 = await contractH1CcsWh.supportsInterface.call(interfaceIdkSnYkVs, {from: accounts[0]});
		const nullXZBhCy = await contractH1CcsWh.supportsInterface.call(interfaceIdbQNqjte, {from: accounts[2]});
	});
})