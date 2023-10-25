const ERC165 = artifacts.require("ERC165");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC165', (accounts) => {
	it('test for ERC165', async () => {
		const contractmCeerlQ = await ERC165.new({from: accounts[0]});
		const interfaceIdaImyj4k = "0x08101b05"
		const interfaceId7VGGK8 = "0x0c170a04"
		const interfaceIdUUSDv53 = "0x021d0d1e"
		const nullJyY68m = await contractmCeerlQ.supportsInterface.call(interfaceIdaImyj4k, {from: accounts[4]});
		const nullPYIGFtV = await contractmCeerlQ.supportsInterface.call(interfaceId7VGGK8, {from: accounts[2]});
		const nullR9gBQ6v = await contractmCeerlQ.supportsInterface.call(interfaceIdUUSDv53, {from: accounts[4]});
	});
})