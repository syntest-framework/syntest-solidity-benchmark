const IERC165 = artifacts.require("IERC165");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC165', (accounts) => {
	it('test for IERC165', async () => {
		const contractv3HhP8 = await IERC165.new({from: accounts[1]});
		const interfaceIdL7VqnTU = "0x1c071a02"
		const interfaceIdHSjaFEC = "0x1b021e09"
		const nullGhWlXp = await contractv3HhP8.supportsInterface.call(interfaceIdL7VqnTU, {from: accounts[2]});
		const nullCpMsQHR = await contractv3HhP8.supportsInterface.call(interfaceIdHSjaFEC, {from: accounts[2]});
	});
})