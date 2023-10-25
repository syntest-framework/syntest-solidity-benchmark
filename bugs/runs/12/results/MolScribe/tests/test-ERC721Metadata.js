const ERC721Metadata = artifacts.require("ERC721Metadata");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC721Metadata', (accounts) => {
	it('test for ERC721Metadata', async () => {
		const nameNeup4q0 = "DVwwQBRpXrAIYIUsFGuUUjTieSNeAqkoS8i7Ik4eWH293WS4OsN1Rqys"
		const symbolb9KUV4 = "McRf7dui1v1GwmatOnN1bHCSb9YL45WZ2qBfmXS72sQm1PD3jLgVvfn"
		const contractJswUzf = await ERC721Metadata.new(nameNeup4q0, symbolb9KUV4, {from: accounts[4]});
		const nullfFf1Ig = await contractJswUzf.symbol.call({from: accounts[4]});
		const nullOeXesRd = await contractJswUzf.name.call({from: "0x0000000000000000000000000000000000000001"});
		const nullBKCTlK2 = await contractJswUzf.name.call({from: accounts[2]});
	});
})