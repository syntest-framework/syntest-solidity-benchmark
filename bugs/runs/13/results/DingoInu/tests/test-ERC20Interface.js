const ERC20Interface = artifacts.require("ERC20Interface");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC20Interface', (accounts) => {
	it('test for ERC20Interface', async () => {
		const contractPFTZxpu = await ERC20Interface.new({from: "0x0000000000000000000000000000000000000001"});
		const tokensjzrs7iD = BigInt("1164")
		const toqH4kUeq = accounts[0]
		const tokenskaMJEBJ = BigInt("1411")
		const toswIsw6j = accounts[0]
		const successLcG492N = await contractPFTZxpu.transfer.call(toqH4kUeq, tokensjzrs7iD, {from: accounts[1]});
		const successt5OjPDE = await contractPFTZxpu.transfer.call(toswIsw6j, tokenskaMJEBJ, {from: accounts[4]});
	});
})