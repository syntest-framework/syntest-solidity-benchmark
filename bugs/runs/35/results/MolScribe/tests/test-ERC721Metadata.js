const ERC721Metadata = artifacts.require("ERC721Metadata");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC721Metadata', (accounts) => {
	it('test for ERC721Metadata', async () => {
		const nameFdtYA0y = "3WNrRLWNmZoYYqXBknggMQb5sCNggscsOvOywUJqWCNMjdja6kurm9Cy63FI1c"
		const symbolewmxfNE = "8V71sB"
		const contractXR1ZGqK = await ERC721Metadata.new(nameFdtYA0y, symbolewmxfNE, {from: accounts[2]});
		const nullFGrEW0s = await contractXR1ZGqK.name.call({from: accounts[2]});
		const nullUNaccwr = await contractXR1ZGqK.name.call({from: accounts[2]});
		const nulluHkzpSA = await contractXR1ZGqK.name.call({from: accounts[2]});
	});
})