const ERC165 = artifacts.require("ERC165");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC165', (accounts) => {
	it('test for ERC165', async () => {
		const contractQsbuuz = await ERC165.new({from: accounts[1]});
		const interfaceIdqUMeAOc = "0x0607020a"
		const interfaceIdDJU1Lg = "0x191e1711"
		const interfaceIdT7EP4zZ = "0x0b0a0104"
		const interfaceIdaYFBhu7 = "0x1a010611"
		const interfaceIdTkaZ3o = "0x0c071716"
		const interfaceIdFCW5tYP = "0x1a08170c"
		const nullrO0H1N = await contractQsbuuz.supportsInterface.call(interfaceIdqUMeAOc, {from: accounts[1]});
		const nullTtfv0q7 = await contractQsbuuz.supportsInterface.call(interfaceIdDJU1Lg, {from: accounts[0]});
		const nullHAhsR5l = await contractQsbuuz.supportsInterface.call(interfaceIdT7EP4zZ, {from: "0x0000000000000000000000000000000000000001"});
		const nullNioVFKZ = await contractQsbuuz.supportsInterface.call(interfaceIdaYFBhu7, {from: accounts[1]});
		const nullrLa3Ohh = await contractQsbuuz.supportsInterface.call(interfaceIdTkaZ3o, {from: accounts[1]});
		const nullO9WbmEb = await contractQsbuuz.supportsInterface.call(interfaceIdFCW5tYP, {from: accounts[3]});
	});
})