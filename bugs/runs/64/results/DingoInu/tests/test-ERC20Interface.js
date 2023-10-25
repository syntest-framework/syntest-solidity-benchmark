const ERC20Interface = artifacts.require("ERC20Interface");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC20Interface', (accounts) => {
	it('test for ERC20Interface', async () => {
		const contractAfhxrKA = await ERC20Interface.new({from: accounts[1]});
		const tokenOwnerMVwNDlC = accounts[2]
		const tokensQ7u82A0 = BigInt("1681")
		const torW6kEEW = "0x0000000000000000000000000000000000000001"
		const fromV13ub2 = accounts[0]
		const tokensPCbDsal = BigInt("560")
		const spenderJxyorzH = accounts[2]
		const spenderaLSdSZv = accounts[3]
		const tokenOwneruw4AXuR = accounts[3]
		const spenderJ8AOzZz = "0x0000000000000000000000000000000000000001"
		const tokenOwnerk1muog = accounts[2]
		const balanceyXMlc1 = await contractAfhxrKA.balanceOf.call(tokenOwnerMVwNDlC, {from: accounts[4]});
		const successpRagAj5 = await contractAfhxrKA.transferFrom.call(fromV13ub2, torW6kEEW, tokensQ7u82A0, {from: accounts[1]});
		const successOmyvzEq = await contractAfhxrKA.approve.call(spenderJxyorzH, tokensPCbDsal, {from: accounts[2]});
		const remainingb3ry3XG = await contractAfhxrKA.allowance.call(tokenOwneruw4AXuR, spenderaLSdSZv, {from: accounts[2]});
		const remainingjfIlxMs = await contractAfhxrKA.allowance.call(tokenOwnerk1muog, spenderJ8AOzZz, {from: accounts[4]});
	});
})