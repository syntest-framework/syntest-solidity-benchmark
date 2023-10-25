const IERC20 = artifacts.require("IERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC20', (accounts) => {
	it('test for IERC20', async () => {
		const contractZXna55f = await IERC20.new({from: accounts[4]});
		const valueEGEuEp = BigInt("61")
		const fromA2c2IY6 = accounts[0]
		const valueQAWMp0 = BigInt("805")
		const fromfi3GZz3 = accounts[2]
		const valueBLQryhA = BigInt("1569")
		const toy9vRmIG = accounts[3]
		const valueh8O1TLY = BigInt("1972")
		const tombzIeAr = accounts[0]
		const fromf7nUHf3 = accounts[3]
		const whou8FliH = accounts[0]
		await contractZXna55f.burnFrom.call(fromA2c2IY6, valueEGEuEp, {from: accounts[1]});
		await contractZXna55f.burnFrom.call(fromfi3GZz3, valueQAWMp0, {from: accounts[3]});
		const nullk3wvzV = await contractZXna55f.mint.call(toy9vRmIG, valueBLQryhA, {from: accounts[1]});
		const nullEOjEIp0 = await contractZXna55f.totalSupply.call({from: accounts[3]});
		const nullj1Tud5T = await contractZXna55f.transferFrom.call(fromf7nUHf3, tombzIeAr, valueh8O1TLY, {from: accounts[4]});
		const nullFKtA3nd = await contractZXna55f.balanceOf.call(whou8FliH, {from: accounts[1]});
	});
})