const ERC165 = artifacts.require("ERC165");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC165', (accounts) => {
	it('test for ERC165', async () => {
		const contractQtD8CxT = await ERC165.new({from: accounts[3]});
		const interfaceIdYTnfd0H = "0x0b061813"
		const interfaceIdG3ZJVfb = "0x08051b05"
		const interfaceIdPq2JoXG = "0x040f0101"
		const interfaceIdY8PIPIA = "0x17111203"
		const nulllkKWfjQ = await contractQtD8CxT.supportsInterface.call(interfaceIdYTnfd0H, {from: accounts[4]});
		const nulli59qjqw = await contractQtD8CxT.supportsInterface.call(interfaceIdG3ZJVfb, {from: accounts[2]});
		const nulll64sueP = await contractQtD8CxT.supportsInterface.call(interfaceIdPq2JoXG, {from: accounts[4]});
		const nullj4WIRoA = await contractQtD8CxT.supportsInterface.call(interfaceIdY8PIPIA, {from: accounts[0]});
	});
})