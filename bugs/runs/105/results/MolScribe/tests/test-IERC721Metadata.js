const IERC721Metadata = artifacts.require("IERC721Metadata");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721Metadata', (accounts) => {
	it('test for IERC721Metadata', async () => {
		const contractoMP3oZ = await IERC721Metadata.new({from: accounts[2]});
		const nullZllzidv = await contractoMP3oZ.symbol.call({from: accounts[5]});
		const nullm4jTJCT = await contractoMP3oZ.symbol.call({from: accounts[3]});
		const nullwFyOEQ = await contractoMP3oZ.symbol.call({from: accounts[0]});
		const nullGKCmNEW = await contractoMP3oZ.name.call({from: accounts[0]});
	});
})