const IERC165 = artifacts.require("IERC165");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC165', (accounts) => {
	it('test for IERC165', async () => {
		const contracty3lIlAw = await IERC165.new({from: accounts[0]});
		const interfaceIdOAFG2EX = "0x1e0b0e0c"
		const interfaceIdqEldcC = "0x1e091a17"
		const interfaceIdneW4ADk = "0x081d0c18"
		const nullQEx7nnk = await contracty3lIlAw.supportsInterface.call(interfaceIdOAFG2EX, {from: accounts[0]});
		const nullMCP398G = await contracty3lIlAw.supportsInterface.call(interfaceIdqEldcC, {from: accounts[0]});
		const nullbe0N1dq = await contracty3lIlAw.supportsInterface.call(interfaceIdneW4ADk, {from: accounts[5]});
	});
})