const ERC20Interface = artifacts.require("ERC20Interface");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC20Interface', (accounts) => {
	it('test for ERC20Interface', async () => {
		const contractf9r2Bfq = await ERC20Interface.new({from: accounts[0]});
		const tokensGznH27f = BigInt("718")
		const toAmFvKwk = accounts[0]
		const fromvjBL60P = accounts[2]
		const tokenssTgcIyy = BigInt("1571")
		const to92iKw3 = accounts[1]
		const fromIJ6IQl = accounts[2]
		const spenderoz8xdaK = "0x0000000000000000000000000000000000000001"
		const tokenOwnerUT68EKk = accounts[2]
		const successqma0Rr9 = await contractf9r2Bfq.transferFrom.call(fromvjBL60P, toAmFvKwk, tokensGznH27f, {from: accounts[0]});
		const successQLOSJSD = await contractf9r2Bfq.transferFrom.call(fromIJ6IQl, to92iKw3, tokenssTgcIyy, {from: accounts[3]});
		const remainingFpuPKC = await contractf9r2Bfq.allowance.call(tokenOwnerUT68EKk, spenderoz8xdaK, {from: accounts[0]});
	});
})