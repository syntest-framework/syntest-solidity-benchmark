const IERC165 = artifacts.require("IERC165");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC165', (accounts) => {
	it('test for IERC165', async () => {
		const contractu862xJO = await IERC165.new({from: accounts[1]});
		const interfaceIdJIsEtlv = "0x0801040d"
		const interfaceIdOW7kYwW = "0x141d070e"
		const interfaceIdfUnWpBA = "0x03131312"
		const nullxSbyoHC = await contractu862xJO.supportsInterface.call(interfaceIdJIsEtlv, {from: accounts[0]});
		const nullaMzC56z = await contractu862xJO.supportsInterface.call(interfaceIdOW7kYwW, {from: accounts[0]});
		const nullJQV4bAw = await contractu862xJO.supportsInterface.call(interfaceIdfUnWpBA, {from: accounts[0]});
	});
})