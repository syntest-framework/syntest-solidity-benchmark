const ERC165 = artifacts.require("ERC165");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC165', (accounts) => {
	it('test for ERC165', async () => {
		const contracteEtNaX = await ERC165.new({from: accounts[0]});
		const interfaceIdbNOEyNc = "0x17171e0b"
		const interfaceIdXE3tkN2 = "0x2009020a"
		const interfaceIdaLAJ971 = "0x1c081318"
		const nullxq2vC7u = await contracteEtNaX.supportsInterface.call(interfaceIdbNOEyNc, {from: accounts[3]});
		const nullJGgEalA = await contracteEtNaX.supportsInterface.call(interfaceIdXE3tkN2, {from: "0x0000000000000000000000000000000000000001"});
		const nulln96RUku = await contracteEtNaX.supportsInterface.call(interfaceIdaLAJ971, {from: accounts[1]});
	});
})