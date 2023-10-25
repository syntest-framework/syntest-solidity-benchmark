const ERC721Metadata = artifacts.require("ERC721Metadata");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC721Metadata', (accounts) => {
	it('test for ERC721Metadata', async () => {
		const namefhMn6ox = "GJJfSENnAIPU4OXEmQpxCzuOGPPvxD7GTOIKcvoqQxqoPgZfOXqqZI7fxNQKYzbFpuxkUKryQui5"
		const symbolKIq6M9m = "4ciRelDEX"
		const contractbMt5o7n = await ERC721Metadata.new(namefhMn6ox, symbolKIq6M9m, {from: "0x0000000000000000000000000000000000000001"});
		const nulldtoNGO6 = await contractbMt5o7n.symbol.call({from: accounts[0]});
		const nullSqySWc = await contractbMt5o7n.name.call({from: accounts[4]});
		const nulljI8ncIg = await contractbMt5o7n.symbol.call({from: accounts[4]});
		const nullkupEUyi = await contractbMt5o7n.symbol.call({from: accounts[3]});
	});
})