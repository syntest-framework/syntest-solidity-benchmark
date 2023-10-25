const ERC721Metadata = artifacts.require("ERC721Metadata");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC721Metadata', (accounts) => {
	it('test for ERC721Metadata', async () => {
		const namey0aPZu9 = "E4Vhv7SC9dzHkRvMdBJRU7QnrX4C9RWgyXJhBTBrdXzVSUsqttL"
		const symbolFzHU9ZY = "mDYygAQVNFPmDtutTPQVCvyqUjw4aEK54AIDhaaBV02PoLuUerA6ctR8n"
		const contractneOnUWm = await ERC721Metadata.new(namey0aPZu9, symbolFzHU9ZY, {from: accounts[1]});
		const nullVdwBWVq = await contractneOnUWm.name.call({from: "0x0000000000000000000000000000000000000001"});
		const nullAHkiH5O = await contractneOnUWm.symbol.call({from: accounts[4]});
		const nulleu1MNj = await contractneOnUWm.symbol.call({from: accounts[2]});
		const nullIl4i0Kg = await contractneOnUWm.name.call({from: accounts[4]});
		const nullbw5Ejft = await contractneOnUWm.symbol.call({from: accounts[4]});
	});
})