const ERC721Metadata = artifacts.require("ERC721Metadata");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC721Metadata', (accounts) => {
	it('test for ERC721Metadata', async () => {
		const nameoB2oxVx = "QySx2JE9NwN3AW1RPWJotMQOvN6Gmsk7JGjEzqMM37uPIW3u"
		const symbolsOv5KXR = "oaXDUPPjcTKmY9l1967g6BgKVHiWHKLo0FJvKbjXuyoQM3"
		const contractHF2MEA = await ERC721Metadata.new(nameoB2oxVx, symbolsOv5KXR, {from: "0x0000000000000000000000000000000000000001"});
		const nullBr7YWj = await contractHF2MEA.name.call({from: accounts[0]});
		const nullQZEdw91 = await contractHF2MEA.symbol.call({from: accounts[0]});
		const nullyolsPzK = await contractHF2MEA.symbol.call({from: accounts[1]});
		const nullE2mdqui = await contractHF2MEA.symbol.call({from: accounts[4]});
		const nullEQVHjOd = await contractHF2MEA.name.call({from: accounts[5]});
	});
})