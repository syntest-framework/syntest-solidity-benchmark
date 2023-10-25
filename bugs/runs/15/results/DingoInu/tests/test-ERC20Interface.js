const ERC20Interface = artifacts.require("ERC20Interface");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC20Interface', (accounts) => {
	it('test for ERC20Interface', async () => {
		const contractFlYgHQD = await ERC20Interface.new({from: accounts[3]});
		const spenderxuFDwwL = accounts[3]
		const tokenOwnerzx3vgC = accounts[2]
		const tokensVoTjN7 = BigInt("1280")
		const tokqhUrri = accounts[0]
		const tokenOwnerbtFa8SQ = accounts[0]
		const remainingrpg5b5 = await contractFlYgHQD.allowance.call(tokenOwnerzx3vgC, spenderxuFDwwL, {from: accounts[1]});
		const successg173K48 = await contractFlYgHQD.transfer.call(tokqhUrri, tokensVoTjN7, {from: accounts[2]});
		const balanceizWj71O = await contractFlYgHQD.balanceOf.call(tokenOwnerbtFa8SQ, {from: accounts[2]});
	});
})