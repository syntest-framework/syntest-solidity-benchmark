const ERC20Interface = artifacts.require("ERC20Interface");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC20Interface', (accounts) => {
	it('test for ERC20Interface', async () => {
		const contractQ3OeWc9 = await ERC20Interface.new({from: accounts[5]});
		const tokenOwnervAzEUyV = accounts[2]
		const tokenOwneryya8NF = accounts[1]
		const tokenOwnerMSWNfUm = "0x0000000000000000000000000000000000000001"
		const balancemSl3YCQ = await contractQ3OeWc9.balanceOf.call(tokenOwnervAzEUyV, {from: "0x0000000000000000000000000000000000000001"});
		const balanceCh5w2zE = await contractQ3OeWc9.balanceOf.call(tokenOwneryya8NF, {from: accounts[0]});
		const balancefk0PP6R = await contractQ3OeWc9.balanceOf.call(tokenOwnerMSWNfUm, {from: accounts[1]});
	});
})