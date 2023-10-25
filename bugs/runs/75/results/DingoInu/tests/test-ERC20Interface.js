const ERC20Interface = artifacts.require("ERC20Interface");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC20Interface', (accounts) => {
	it('test for ERC20Interface', async () => {
		const contractCHeZJBX = await ERC20Interface.new({from: accounts[3]});
		const tokensyCJ4twN = BigInt("1699")
		const topBivcMz = accounts[2]
		const fromluN1v09 = accounts[0]
		const tokensxTLh9b6 = BigInt("1655")
		const toQyZTeFy = accounts[4]
		const tokensV0bxMs = BigInt("832")
		const spenderyOYvfZh = accounts[1]
		const tokenOwnertVL1tH = accounts[5]
		const tokenOwnernP5FNG = accounts[4]
		const nullLVkLucJ = await contractCHeZJBX.totalSupply.call({from: accounts[2]});
		const successPAquCW = await contractCHeZJBX.transferFrom.call(fromluN1v09, topBivcMz, tokensyCJ4twN, {from: "0x0000000000000000000000000000000000000001"});
		const successtPRaxxZ = await contractCHeZJBX.transfer.call(toQyZTeFy, tokensxTLh9b6, {from: accounts[0]});
		const successn2F78RX = await contractCHeZJBX.approve.call(spenderyOYvfZh, tokensV0bxMs, {from: accounts[2]});
		const balancewQbwLUC = await contractCHeZJBX.balanceOf.call(tokenOwnertVL1tH, {from: accounts[2]});
		const balanceUSBd4Dr = await contractCHeZJBX.balanceOf.call(tokenOwnernP5FNG, {from: accounts[4]});
	});
})