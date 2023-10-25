const ERC20Interface = artifacts.require("ERC20Interface");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC20Interface', (accounts) => {
	it('test for ERC20Interface', async () => {
		const contractuSaVDAJ = await ERC20Interface.new({from: accounts[1]});
		const tokenOwnergWPaolw = accounts[4]
		const tokensSae7W37 = BigInt("1986")
		const toGtkJFwZ = accounts[4]
		const tokenOwnercp6EqX = "0x0000000000000000000000000000000000000001"
		const tokens4USQO5 = BigInt("963")
		const toTg36GGS = accounts[5]
		const tokenszeUQhck = BigInt("116")
		const tohWhZVvy = accounts[3]
		const fromeqUnFz = accounts[2]
		const balanceNMG2pOc = await contractuSaVDAJ.balanceOf.call(tokenOwnergWPaolw, {from: accounts[4]});
		const successpJmN1f = await contractuSaVDAJ.transfer.call(toGtkJFwZ, tokensSae7W37, {from: accounts[3]});
		const balanceWXcI51y = await contractuSaVDAJ.balanceOf.call(tokenOwnercp6EqX, {from: accounts[1]});
		const successRRBBERL = await contractuSaVDAJ.transfer.call(toTg36GGS, tokens4USQO5, {from: accounts[2]});
		const successWR5RIf = await contractuSaVDAJ.transferFrom.call(fromeqUnFz, tohWhZVvy, tokenszeUQhck, {from: accounts[1]});
	});
})