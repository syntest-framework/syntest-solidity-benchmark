const IERC165 = artifacts.require("IERC165");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC165', (accounts) => {
	it('test for IERC165', async () => {
		const contractKEw7ph = await IERC165.new({from: accounts[3]});
		const interfaceIdgaN7ig5 = "0x1a0c071f"
		const interfaceIdfSe2W9l = "0x0b050f16"
		const interfaceIdXjCWhx0 = "0x05151a1a"
		const interfaceIdpxmCTVf = "0x011f1a0e"
		const nullevay3Mq = await contractKEw7ph.supportsInterface.call(interfaceIdgaN7ig5, {from: accounts[4]});
		const nullSNph2PK = await contractKEw7ph.supportsInterface.call(interfaceIdfSe2W9l, {from: accounts[1]});
		const nullFYqpC9y = await contractKEw7ph.supportsInterface.call(interfaceIdXjCWhx0, {from: accounts[3]});
		const nullricbZ5D = await contractKEw7ph.supportsInterface.call(interfaceIdpxmCTVf, {from: "0x0000000000000000000000000000000000000001"});
	});
})