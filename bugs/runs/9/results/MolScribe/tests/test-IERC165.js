const IERC165 = artifacts.require("IERC165");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC165', (accounts) => {
	it('test for IERC165', async () => {
		const contractyNNzbWh = await IERC165.new({from: accounts[3]});
		const interfaceIdLZsjLBo = "0x081d091e"
		const interfaceIdHqs8fMf = "0x08020c0f"
		const interfaceIdkLZ6xjw = "0x0e111a02"
		const interfaceIdICl6DX4 = "0x1d0f071c"
		const interfaceIdXah7BE6 = "0x071e0e09"
		const nullaSakRj9 = await contractyNNzbWh.supportsInterface.call(interfaceIdLZsjLBo, {from: accounts[5]});
		const nullSrkwxXi = await contractyNNzbWh.supportsInterface.call(interfaceIdHqs8fMf, {from: accounts[0]});
		const nullZILrXl5 = await contractyNNzbWh.supportsInterface.call(interfaceIdkLZ6xjw, {from: accounts[2]});
		const nullgNfRic7 = await contractyNNzbWh.supportsInterface.call(interfaceIdICl6DX4, {from: accounts[0]});
		const nullaYjL6m6 = await contractyNNzbWh.supportsInterface.call(interfaceIdXah7BE6, {from: accounts[1]});
	});
})