const ERC721Metadata = artifacts.require("ERC721Metadata");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC721Metadata', (accounts) => {
	it('test for ERC721Metadata', async () => {
		const namerBl26e = "GBCCimYCck3bcKD6"
		const symbolKId5uUo = "gwqw9uhYUsfGhQQdqb4SCRhh2EKr6HR8y8jbkBNI6kIY4yCL7UHr4oc2YjrJvX79XUiitjFMjoQVAeO3shl"
		const contractBmtDnWb = await ERC721Metadata.new(namerBl26e, symbolKId5uUo, {from: accounts[5]});
		const nullqM4M65c = await contractBmtDnWb.name.call({from: accounts[2]});
		const nulllCtsMFo = await contractBmtDnWb.symbol.call({from: accounts[3]});
	});
})