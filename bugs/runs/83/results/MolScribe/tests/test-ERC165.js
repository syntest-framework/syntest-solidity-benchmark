const ERC165 = artifacts.require("ERC165");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC165', (accounts) => {
	it('test for ERC165', async () => {
		const contractwF0OGG = await ERC165.new({from: accounts[1]});
		const interfaceIdON1YdTA = "0x1b001217"
		const interfaceIdsSbwMTc = "0x0a1e1b06"
		const interfaceIdCj2XhHU = "0x0f16021e"
		const interfaceIdgfdxswg = "0x1603161c"
		const nullf8tgKYy = await contractwF0OGG.supportsInterface.call(interfaceIdON1YdTA, {from: accounts[0]});
		const nulli5CvsVD = await contractwF0OGG.supportsInterface.call(interfaceIdsSbwMTc, {from: accounts[4]});
		const nullqZudjbL = await contractwF0OGG.supportsInterface.call(interfaceIdCj2XhHU, {from: accounts[3]});
		const nullRdNbYv8 = await contractwF0OGG.supportsInterface.call(interfaceIdgfdxswg, {from: accounts[3]});
	});
})