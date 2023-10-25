const IERC721Metadata = artifacts.require("IERC721Metadata");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721Metadata', (accounts) => {
	it('test for IERC721Metadata', async () => {
		const contractW0fIXa = await IERC721Metadata.new({from: "0x0000000000000000000000000000000000000001"});
		const nullcHcJrb0 = await contractW0fIXa.name.call({from: accounts[5]});
		const nullFiNkidp = await contractW0fIXa.name.call({from: accounts[5]});
	});
})