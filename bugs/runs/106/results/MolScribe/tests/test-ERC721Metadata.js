const ERC721Metadata = artifacts.require("ERC721Metadata");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC721Metadata', (accounts) => {
	it('test for ERC721Metadata', async () => {
		const nameteegQnS = "qWx7KXBBnSsQce5e8PKKFzSqIKoxb372yemu2WHFu3"
		const symbolyJNc59t = "1WXXUxJDubwZoPTAhtRfiJ7ssiBESA5r5"
		const contractIlc6Dm2 = await ERC721Metadata.new(nameteegQnS, symbolyJNc59t, {from: accounts[0]});
		const nullmnsneaS = await contractIlc6Dm2.symbol.call({from: accounts[0]});
		const nullzwMtbP = await contractIlc6Dm2.symbol.call({from: accounts[0]});
		const nullGTAajsK = await contractIlc6Dm2.name.call({from: accounts[5]});
		const nullYZhY9xD = await contractIlc6Dm2.name.call({from: accounts[4]});
		const nullA9iJqwV = await contractIlc6Dm2.symbol.call({from: accounts[4]});
		const null1p2gGh = await contractIlc6Dm2.name.call({from: accounts[5]});
	});
})