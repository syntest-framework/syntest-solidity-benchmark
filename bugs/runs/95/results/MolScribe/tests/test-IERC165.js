const IERC165 = artifacts.require("IERC165");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC165', (accounts) => {
	it('test for IERC165', async () => {
		const contractwcrNVVv = await IERC165.new({from: accounts[4]});
		const interfaceIdhV2BeYd = "0x20020e11"
		const interfaceIducRvnin = "0x05001808"
		const nullxjcdfdz = await contractwcrNVVv.supportsInterface.call(interfaceIdhV2BeYd, {from: accounts[4]});
		const nullPkqOV4R = await contractwcrNVVv.supportsInterface.call(interfaceIducRvnin, {from: accounts[3]});
	});
})