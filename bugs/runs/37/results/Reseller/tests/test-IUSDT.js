const IUSDT = artifacts.require("IUSDT");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IUSDT', (accounts) => {
	it('test for IUSDT', async () => {
		const contractzqErCG = await IUSDT.new({from: accounts[5]});
		const amountQghOVJQ = BigInt("965")
		const spenderJvsThC3 = "0x0000000000000000000000000000000000000001"
		const amountt5wrgHo = BigInt("1918")
		const spenderZApWbkE = accounts[0]
		const accountTd7hre = accounts[3]
		const nullWCMaC76 = await contractzqErCG.decimals.call({from: accounts[0]});
		await contractzqErCG.approve.call(spenderJvsThC3, amountQghOVJQ, {from: "0x0000000000000000000000000000000000000001"});
		await contractzqErCG.approve.call(spenderZApWbkE, amountt5wrgHo, {from: accounts[4]});
		const nullYiZeRc8 = await contractzqErCG.decimals.call({from: accounts[3]});
		const nullDx0OthQ = await contractzqErCG.decimals.call({from: accounts[5]});
		const nullYQB7tQ = await contractzqErCG.balanceOf.call(accountTd7hre, {from: "0x0000000000000000000000000000000000000001"});
	});
})