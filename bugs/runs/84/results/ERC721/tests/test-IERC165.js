const IERC165 = artifacts.require("IERC165");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC165', (accounts) => {
	it('test for IERC165', async () => {
		const contractfR7Duq0 = await IERC165.new({from: accounts[1]});
		const interfaceIdjqG96zv = "0x1508141a"
		const interfaceIdotGdgda = "0x14111c16"
		const interfaceIdA1DGWbt = "0x0d191f08"
		const interfaceIdasPoTEs = "0x05170312"
		const nullcCqRohp = await contractfR7Duq0.supportsInterface.call(interfaceIdjqG96zv, {from: accounts[3]});
		const nullxRBMOM7 = await contractfR7Duq0.supportsInterface.call(interfaceIdotGdgda, {from: "0x0000000000000000000000000000000000000001"});
		const nullTnNumq2 = await contractfR7Duq0.supportsInterface.call(interfaceIdA1DGWbt, {from: accounts[3]});
		const null4OS6Fp = await contractfR7Duq0.supportsInterface.call(interfaceIdasPoTEs, {from: accounts[5]});
	});
})