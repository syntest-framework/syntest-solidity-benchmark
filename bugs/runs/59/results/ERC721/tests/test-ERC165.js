const ERC165 = artifacts.require("ERC165");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC165', (accounts) => {
	it('test for ERC165', async () => {
		const contractsXb9TwQ = await ERC165.new({from: accounts[4]});
		const interfaceIdGbJLA7k = "0x1a0a150f"
		const interfaceIdFL5FtYJ = "0x1d0a0409"
		const nullqUiwAfE = await contractsXb9TwQ.supportsInterface.call(interfaceIdGbJLA7k, {from: accounts[0]});
		const nullIue5qJp = await contractsXb9TwQ.supportsInterface.call(interfaceIdFL5FtYJ, {from: accounts[2]});
	});
})