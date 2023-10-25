const ERC721Metadata = artifacts.require("ERC721Metadata");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC721Metadata', (accounts) => {
	it('test for ERC721Metadata', async () => {
		const nameAriFU6s = "7k3bPzdWDqZgsXbvsKdEUEN"
		const symbolsCKdnYL = "y3n4Dea3Os7cMfUHKoVM0JsN6gjearfQMpoK4TastIuKSCaTsPasQEnKtzdq21G7ip"
		const contractkbGFdTi = await ERC721Metadata.new(nameAriFU6s, symbolsCKdnYL, {from: accounts[4]});
		const nullBayOB6M = await contractkbGFdTi.name.call({from: accounts[4]});
		const nulluFnktP = await contractkbGFdTi.symbol.call({from: accounts[2]});
	});
})