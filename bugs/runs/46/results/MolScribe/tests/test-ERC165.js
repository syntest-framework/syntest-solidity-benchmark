const ERC165 = artifacts.require("ERC165");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC165', (accounts) => {
	it('test for ERC165', async () => {
		const contractq2xz6xw = await ERC165.new({from: accounts[3]});
		const interfaceIdFiOZHH7 = "0x02140c13"
		const interfaceIdqrCwLdX = "0x1a140705"
		const nullYmlehXE = await contractq2xz6xw.supportsInterface.call(interfaceIdFiOZHH7, {from: accounts[4]});
		const nullCe5MaDF = await contractq2xz6xw.supportsInterface.call(interfaceIdqrCwLdX, {from: "0x0000000000000000000000000000000000000001"});
	});
})