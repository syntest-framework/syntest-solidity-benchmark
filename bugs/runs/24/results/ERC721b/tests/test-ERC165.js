const ERC165 = artifacts.require("ERC165");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC165', (accounts) => {
	it('test for ERC165', async () => {
		const contractTFhEhUS = await ERC165.new({from: accounts[2]});
		const interfaceIdQkDDuqZ = "0x020c181a"
		const interfaceIdsvlaaP = "0x1b0d1415"
		const interfaceId8Azcqz = "0x151f1f03"
		const interfaceIdmZcQbON = "0x0d191605"
		const interfaceIdhdz4OIx = "0x061b1d0a"
		const nullkkFBL0N = await contractTFhEhUS.supportsInterface.call(interfaceIdQkDDuqZ, {from: accounts[4]});
		const nullwtX5Qhl = await contractTFhEhUS.supportsInterface.call(interfaceIdsvlaaP, {from: accounts[5]});
		const null8yQ6ju = await contractTFhEhUS.supportsInterface.call(interfaceId8Azcqz, {from: accounts[3]});
		const nullwYMWFLn = await contractTFhEhUS.supportsInterface.call(interfaceIdmZcQbON, {from: accounts[0]});
		const nullqJRQSNf = await contractTFhEhUS.supportsInterface.call(interfaceIdhdz4OIx, {from: accounts[3]});
	});
})