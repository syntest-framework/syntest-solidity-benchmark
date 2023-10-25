const ERC165 = artifacts.require("ERC165");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC165', (accounts) => {
	it('test for ERC165', async () => {
		const contractfCV9fR = await ERC165.new({from: "0x0000000000000000000000000000000000000001"});
		const interfaceIdsgN8Wg5 = "0x09191d11"
		const interfaceIdkkvAEkU = "0x0c030f1c"
		const interfaceIdDvIdrXm = "0x05040c17"
		const interfaceIdagdH9Mq = "0x15070819"
		const interfaceIdDGWWJlC = "0x12071f01"
		const interfaceIdW19L9fT = "0x1c0b0116"
		const nullRFTouPa = await contractfCV9fR.supportsInterface.call(interfaceIdsgN8Wg5, {from: accounts[4]});
		const nullUovbMlI = await contractfCV9fR.supportsInterface.call(interfaceIdkkvAEkU, {from: "0x0000000000000000000000000000000000000001"});
		const nullpnkOSSY = await contractfCV9fR.supportsInterface.call(interfaceIdDvIdrXm, {from: accounts[0]});
		const nulluulR6rw = await contractfCV9fR.supportsInterface.call(interfaceIdagdH9Mq, {from: accounts[3]});
		const nulln488M0G = await contractfCV9fR.supportsInterface.call(interfaceIdDGWWJlC, {from: accounts[5]});
		const nullUqs0mAS = await contractfCV9fR.supportsInterface.call(interfaceIdW19L9fT, {from: accounts[2]});
	});
})