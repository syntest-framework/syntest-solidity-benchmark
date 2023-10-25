const IERC721Metadata = artifacts.require("IERC721Metadata");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721Metadata', (accounts) => {
	it('test for IERC721Metadata', async () => {
		const contractuUJaP7i = await IERC721Metadata.new({from: accounts[3]});
		const nullCBNxWyg = await contractuUJaP7i.symbol.call({from: accounts[4]});
		const nulluYrTCs = await contractuUJaP7i.symbol.call({from: accounts[4]});
		const nullhdGvNQX = await contractuUJaP7i.symbol.call({from: "0x0000000000000000000000000000000000000001"});
		const nullPZ73niN = await contractuUJaP7i.symbol.call({from: accounts[0]});
		const nullgW4aYGW = await contractuUJaP7i.name.call({from: accounts[3]});
		const nullDjQOmN = await contractuUJaP7i.symbol.call({from: accounts[2]});
	});
})