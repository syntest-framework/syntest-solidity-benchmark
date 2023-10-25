const ERC721Metadata = artifacts.require("ERC721Metadata");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC721Metadata', (accounts) => {
	it('test for ERC721Metadata', async () => {
		const nameUBptIq = "rnQIne8kvl3hPSQyTzetLHJg47lrBlj"
		const symbolxgcPoyg = "baoxr74e2mDKPGWWjgA86oYt6I71n8h6tVfCdr8iyhdQVaOhC49J242VC4KbC"
		const contracto6nc6Q5 = await ERC721Metadata.new(nameUBptIq, symbolxgcPoyg, {from: "0x0000000000000000000000000000000000000001"});
		const nullwxldwf7 = await contracto6nc6Q5.symbol.call({from: accounts[3]});
		const nullW9Oj27v = await contracto6nc6Q5.name.call({from: accounts[5]});
	});
})