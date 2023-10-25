const IERC721Receiver = artifacts.require("IERC721Receiver");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721Receiver', (accounts) => {
	it('test for IERC721Receiver', async () => {
		const contractg2KieVp = await IERC721Receiver.new({from: accounts[0]});
		const dataY5q6z9m = "0x081d0a0a0306"
		const tokenIdnA5h8Kf = BigInt("1673")
		const fromFS1ibPY = accounts[4]
		const operatorUln750A = accounts[4]
		const dataBwrC3qY = "0x1810061e0c1813"
		const tokenIduQZU7V = BigInt("341")
		const fromdZ6A4tS = accounts[1]
		const operatorcH3mwC7 = accounts[5]
		const dataxcZcWE = "0x1b1c14131f0202050d1f0d141f18111e19"
		const tokenIdDlgHxnl = BigInt("1011")
		const fromctBTgLd = accounts[0]
		const operatorcU1h145 = accounts[1]
		const datadIhBnFG = "0x17071b081a1808140e07011a13171609"
		const tokenIdNwsmVEf = BigInt("619")
		const fromiH4Jzwa = accounts[5]
		const operatorHxzj24J = "0x0000000000000000000000000000000000000001"
		const nulleNGkUt3 = await contractg2KieVp.onERC721Received.call(operatorUln750A, fromFS1ibPY, tokenIdnA5h8Kf, dataY5q6z9m, {from: accounts[0]});
		const nullqfUuA8 = await contractg2KieVp.onERC721Received.call(operatorcH3mwC7, fromdZ6A4tS, tokenIduQZU7V, dataBwrC3qY, {from: accounts[3]});
		const nulljnR6GMp = await contractg2KieVp.onERC721Received.call(operatorcU1h145, fromctBTgLd, tokenIdDlgHxnl, dataxcZcWE, {from: accounts[2]});
		const nullw4jq7c = await contractg2KieVp.onERC721Received.call(operatorHxzj24J, fromiH4Jzwa, tokenIdNwsmVEf, datadIhBnFG, {from: accounts[1]});
	});
})