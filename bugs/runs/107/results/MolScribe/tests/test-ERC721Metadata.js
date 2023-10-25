const ERC721Metadata = artifacts.require("ERC721Metadata");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC721Metadata', (accounts) => {
	it('test for ERC721Metadata', async () => {
		const namet8GrVv = "2cGzbg6CvrnyeVxRreEYm6gKxLOqMbfvaJ6V"
		const symbolkPD18Yc = "WXqeM2Nv9I8XO2Y14FOYpiK5ApN86z"
		const contractICJQlo = await ERC721Metadata.new(namet8GrVv, symbolkPD18Yc, {from: accounts[5]});
		const nullGmnYIK = await contractICJQlo.name.call({from: accounts[4]});
		const nullS4vv2un = await contractICJQlo.name.call({from: "0x0000000000000000000000000000000000000001"});
		const nullicqkJXs = await contractICJQlo.name.call({from: accounts[4]});
		const nullKcyeaPX = await contractICJQlo.name.call({from: accounts[2]});
	});
})