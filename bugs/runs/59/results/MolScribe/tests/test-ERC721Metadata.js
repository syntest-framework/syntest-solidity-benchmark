const ERC721Metadata = artifacts.require("ERC721Metadata");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC721Metadata', (accounts) => {
	it('test for ERC721Metadata', async () => {
		const nameQPmlU7a = "L8FCp5vU7RcDPZgxV7g5zU"
		const symbolu8P6jot = "atGccXPzE1Q7g59LfDHumME4OrK"
		const contractQ9ug7R4 = await ERC721Metadata.new(nameQPmlU7a, symbolu8P6jot, {from: accounts[4]});
		const nullF2Jkipl = await contractQ9ug7R4.symbol.call({from: accounts[4]});
		const nullPmxVUg = await contractQ9ug7R4.name.call({from: accounts[4]});
	});
})