const ERC165 = artifacts.require("ERC165");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC165', (accounts) => {
	it('test for ERC165', async () => {
		const contractnMj83yR = await ERC165.new({from: accounts[0]});
		const interfaceIdVbtVWYH = "0x05190507"
		const interfaceIdjUyfJDi = "0x06151e08"
		const interfaceIdh5bIDn9 = "0x0b110314"
		const interfaceIdwyuZmJz = "0x1b110807"
		const interfaceIdAdCWsOM = "0x15080a1d"
		const nullLX7r9s = await contractnMj83yR.supportsInterface.call(interfaceIdVbtVWYH, {from: accounts[2]});
		const nullMso5MR = await contractnMj83yR.supportsInterface.call(interfaceIdjUyfJDi, {from: accounts[0]});
		const nulljOEhwiT = await contractnMj83yR.supportsInterface.call(interfaceIdh5bIDn9, {from: "0x0000000000000000000000000000000000000001"});
		const nullrf8Usqe = await contractnMj83yR.supportsInterface.call(interfaceIdwyuZmJz, {from: accounts[1]});
		const nullsPUZiV7 = await contractnMj83yR.supportsInterface.call(interfaceIdAdCWsOM, {from: accounts[0]});
	});
})