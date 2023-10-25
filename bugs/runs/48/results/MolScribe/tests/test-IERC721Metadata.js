const IERC721Metadata = artifacts.require("IERC721Metadata");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721Metadata', (accounts) => {
	it('test for IERC721Metadata', async () => {
		const contractdN8wzUH = await IERC721Metadata.new({from: accounts[3]});
		const nullY4i25N = await contractdN8wzUH.symbol.call({from: accounts[5]});
		const nullB4PsCMK = await contractdN8wzUH.symbol.call({from: accounts[2]});
	});
})