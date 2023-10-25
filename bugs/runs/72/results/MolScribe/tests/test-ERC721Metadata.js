const ERC721Metadata = artifacts.require("ERC721Metadata");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC721Metadata', (accounts) => {
	it('test for ERC721Metadata', async () => {
		const name9oKURT = "vKquN1IQeRKd2OxXGi3p9vr7ck4jwgjkyEjzCNVc1TwEPXQNQaHJavpUj3W5U1sdsQCN4J7"
		const symbolu1vB3hC = "LQNKjSMBvveOHbJ5"
		const contractJaR2eG = await ERC721Metadata.new(name9oKURT, symbolu1vB3hC, {from: accounts[0]});
		const nullmctLEIp = await contractJaR2eG.name.call({from: "0x0000000000000000000000000000000000000001"});
		const nullyY2gOxl = await contractJaR2eG.name.call({from: accounts[0]});
		const nullLclE6fW = await contractJaR2eG.symbol.call({from: accounts[2]});
	});
})