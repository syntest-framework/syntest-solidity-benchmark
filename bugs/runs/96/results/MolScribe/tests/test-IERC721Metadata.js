const IERC721Metadata = artifacts.require("IERC721Metadata");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721Metadata', (accounts) => {
	it('test for IERC721Metadata', async () => {
		const contractEiG2LtK = await IERC721Metadata.new({from: accounts[5]});
		const nully8EgO3k = await contractEiG2LtK.symbol.call({from: accounts[0]});
		const nullLLxHthB = await contractEiG2LtK.symbol.call({from: accounts[5]});
		const nullPDG5iQb = await contractEiG2LtK.symbol.call({from: "0x0000000000000000000000000000000000000001"});
	});
})