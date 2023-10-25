const ERC165 = artifacts.require("ERC165");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC165', (accounts) => {
	it('test for ERC165', async () => {
		const contractuShaAu5 = await ERC165.new({from: accounts[2]});
		const interfaceIdNXnJneB = "0x0d01170d"
		const interfaceIdEWNqqP7 = "0x06150705"
		const interfaceIdyL3tL2o = "0x0a1f1120"
		const nullabHlBae = await contractuShaAu5.supportsInterface.call(interfaceIdNXnJneB, {from: accounts[3]});
		const nulli7O6taa = await contractuShaAu5.supportsInterface.call(interfaceIdEWNqqP7, {from: accounts[4]});
		const nullUo7WunL = await contractuShaAu5.supportsInterface.call(interfaceIdyL3tL2o, {from: accounts[0]});
	});
})