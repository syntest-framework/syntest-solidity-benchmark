const ERC165 = artifacts.require("ERC165");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC165', (accounts) => {
	it('test for ERC165', async () => {
		const contracte9xJGKV = await ERC165.new({from: accounts[3]});
		const interfaceIdqauRBsB = "0x160c0717"
		const interfaceIdR3yPR7l = "0x0d090802"
		const interfaceIdTBcy23h = "0x1a201519"
		const nullymJO533 = await contracte9xJGKV.supportsInterface.call(interfaceIdqauRBsB, {from: accounts[1]});
		const nullDVdxhrD = await contracte9xJGKV.supportsInterface.call(interfaceIdR3yPR7l, {from: accounts[1]});
		const nullyZnrxLl = await contracte9xJGKV.supportsInterface.call(interfaceIdTBcy23h, {from: "0x0000000000000000000000000000000000000001"});
	});
})