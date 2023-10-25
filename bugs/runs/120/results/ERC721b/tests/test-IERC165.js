const IERC165 = artifacts.require("IERC165");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC165', (accounts) => {
	it('test for IERC165', async () => {
		const contractMTRW92q = await IERC165.new({from: accounts[5]});
		const interfaceIdHbeUScv = "0x111b0807"
		const interfaceIdfB8zr7 = "0x0d0d151c"
		const interfaceIdk4r2jLj = "0x06081604"
		const interfaceIdOzSxyi8 = "0x071d0001"
		const interfaceIdEtv4IGx = "0x1a011f0b"
		const nullKRrW10i = await contractMTRW92q.supportsInterface.call(interfaceIdHbeUScv, {from: accounts[4]});
		const nullYiGYokw = await contractMTRW92q.supportsInterface.call(interfaceIdfB8zr7, {from: accounts[1]});
		const nullkFjuT90 = await contractMTRW92q.supportsInterface.call(interfaceIdk4r2jLj, {from: accounts[0]});
		const nullqs6nU3m = await contractMTRW92q.supportsInterface.call(interfaceIdOzSxyi8, {from: accounts[5]});
		const nulliEPuA3W = await contractMTRW92q.supportsInterface.call(interfaceIdEtv4IGx, {from: accounts[1]});
	});
})