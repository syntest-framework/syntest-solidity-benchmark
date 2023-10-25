const IERC165 = artifacts.require("IERC165");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC165', (accounts) => {
	it('test for IERC165', async () => {
		const contractZSAb9xR = await IERC165.new({from: accounts[2]});
		const interfaceIdzEacTAK = "0x160a0b12"
		const interfaceIdTcTHaz6 = "0x04010202"
		const interfaceIdkRrJReb = "0x0c0a0517"
		const interfaceIdLzh5Snz = "0x0a131214"
		const interfaceIdrgjjnZQ = "0x1d1e1808"
		const interfaceIdAfsXO4q = "0x04150d06"
		const nullBzROLFp = await contractZSAb9xR.supportsInterface.call(interfaceIdzEacTAK, {from: accounts[4]});
		const nullBC2JTEZ = await contractZSAb9xR.supportsInterface.call(interfaceIdTcTHaz6, {from: accounts[1]});
		const nullGIRWdOa = await contractZSAb9xR.supportsInterface.call(interfaceIdkRrJReb, {from: accounts[1]});
		const nullQwySLr = await contractZSAb9xR.supportsInterface.call(interfaceIdLzh5Snz, {from: accounts[0]});
		const nullgt6oG4 = await contractZSAb9xR.supportsInterface.call(interfaceIdrgjjnZQ, {from: accounts[3]});
		const nulle8fKkhe = await contractZSAb9xR.supportsInterface.call(interfaceIdAfsXO4q, {from: accounts[2]});
	});
})