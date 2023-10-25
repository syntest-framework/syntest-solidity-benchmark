const ERC721Metadata = artifacts.require("ERC721Metadata");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC721Metadata', (accounts) => {
	it('test for ERC721Metadata', async () => {
		const nameZSnG0VW = "735lavN2eW4U4WEDR4kJJ0WhkgeDOGThm4PwwTwsCih63h8UYYwaF6q04XLoKxoCKG8aZawzrB6QB0iaSYNe3mgqMvFX75y"
		const symboltxIMfnK = "7OVK2ZpCDpAVYcxnpc4QmWljtaEsCJXm3VLu4PbOUKTBAc3TKqgDwaXGVdU3Q3nG1Ce1yR2EoR6wVsqPmdyFbk7F0oO"
		const contractI5J8eXT = await ERC721Metadata.new(nameZSnG0VW, symboltxIMfnK, {from: accounts[2]});
		const nullNfgLDse = await contractI5J8eXT.symbol.call({from: accounts[3]});
		const nullMW9NZTq = await contractI5J8eXT.name.call({from: accounts[1]});
		const nullfNQwBQu = await contractI5J8eXT.symbol.call({from: "0x0000000000000000000000000000000000000001"});
		const nullD0oDDWb = await contractI5J8eXT.name.call({from: accounts[2]});
		const nullHZrlDp = await contractI5J8eXT.symbol.call({from: accounts[5]});
	});
})