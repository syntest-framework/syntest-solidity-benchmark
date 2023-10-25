const IERC165 = artifacts.require("IERC165");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC165', (accounts) => {
	it('test for IERC165', async () => {
		const contractuLAj5K = await IERC165.new({from: accounts[1]});
		const interfaceIdNXQr3U9 = "0x1d151018"
		const interfaceIdU3hLTRr = "0x140b1c04"
		const nullGSnt7Bu = await contractuLAj5K.supportsInterface.call(interfaceIdNXQr3U9, {from: accounts[2]});
		const nullCUUpOsS = await contractuLAj5K.supportsInterface.call(interfaceIdU3hLTRr, {from: accounts[1]});
	});
})