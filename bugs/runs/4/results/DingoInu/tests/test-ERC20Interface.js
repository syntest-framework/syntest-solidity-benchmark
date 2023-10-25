const ERC20Interface = artifacts.require("ERC20Interface");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC20Interface', (accounts) => {
	it('test for ERC20Interface', async () => {
		const contractchzgkA2 = await ERC20Interface.new({from: accounts[4]});
		const tokenshHlzEsK = BigInt("1757")
		const spenderOqr9Hwq = accounts[3]
		const spenderaTbGkSI = accounts[3]
		const tokenOwnertjIHn3 = accounts[2]
		const tokensYyXCBQf = BigInt("952")
		const toXp4xvKv = accounts[4]
		const spenderZ09tEVZ = accounts[5]
		const tokenOwnerJFhLDdp = accounts[0]
		const tokens43vJO7 = BigInt("840")
		const toVCwsNdD = accounts[3]
		const successIMtr586 = await contractchzgkA2.approve.call(spenderOqr9Hwq, tokenshHlzEsK, {from: accounts[3]});
		const remainingU0Vx26z = await contractchzgkA2.allowance.call(tokenOwnertjIHn3, spenderaTbGkSI, {from: accounts[1]});
		const successIstGCGH = await contractchzgkA2.transfer.call(toXp4xvKv, tokensYyXCBQf, {from: accounts[1]});
		const remainingeoRfX0S = await contractchzgkA2.allowance.call(tokenOwnerJFhLDdp, spenderZ09tEVZ, {from: accounts[1]});
		const successCJYt3e = await contractchzgkA2.transfer.call(toVCwsNdD, tokens43vJO7, {from: accounts[0]});
	});
})