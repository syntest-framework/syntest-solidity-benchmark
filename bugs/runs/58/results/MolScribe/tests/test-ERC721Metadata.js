const ERC721Metadata = artifacts.require("ERC721Metadata");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC721Metadata', (accounts) => {
	it('test for ERC721Metadata', async () => {
		const nameNU8vMhr = "pWlqjdMlv7Ld2IB1JfAjfsuFMdKkPkh5dyOrFyXB"
		const symboleYHCue = "lx4QByMU5qLDs9ajhhBh6mJ15qyNfHz7jWXWjv5HSDC"
		const contractZqcdxG = await ERC721Metadata.new(nameNU8vMhr, symboleYHCue, {from: accounts[1]});
		const nullSk3FsUD = await contractZqcdxG.name.call({from: accounts[1]});
		const nulldweDxBn = await contractZqcdxG.symbol.call({from: accounts[0]});
		const nullCy1kC4e = await contractZqcdxG.symbol.call({from: accounts[4]});
	});
})