const IERC20 = artifacts.require("IERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC20', (accounts) => {
	it('test for IERC20', async () => {
		const contractylcdhA2 = await IERC20.new({from: accounts[5]});
		const valueHNmK40N = BigInt("1961")
		const spenderyjql0jL = accounts[1]
		const value5t0z5B = BigInt("400")
		const toUbAV7Rh = "0x0000000000000000000000000000000000000001"
		const fromxV5JOKC = "0x0000000000000000000000000000000000000001"
		const valuek5hFfbp = BigInt("1733")
		const totjGw4tt = accounts[3]
		const spenderHULsnQM = accounts[4]
		const ownerM9hBSHv = accounts[1]
		const spenderCevv5j9 = accounts[0]
		const ownerymUE120 = accounts[2]
		const spenderSeFOQx = accounts[2]
		const ownerrsPFY2X = accounts[2]
		const nullNFDiZ72 = await contractylcdhA2.approve.call(spenderyjql0jL, valueHNmK40N, {from: accounts[2]});
		const nullzzUzThu = await contractylcdhA2.transferFrom.call(fromxV5JOKC, toUbAV7Rh, value5t0z5B, {from: accounts[3]});
		const nulldzmLlnD = await contractylcdhA2.transfer.call(totjGw4tt, valuek5hFfbp, {from: accounts[0]});
		const nullgywKIEc = await contractylcdhA2.allowance.call(ownerM9hBSHv, spenderHULsnQM, {from: accounts[3]});
		const nullTE57iE = await contractylcdhA2.allowance.call(ownerymUE120, spenderCevv5j9, {from: accounts[0]});
		const nullKMmyZBn = await contractylcdhA2.allowance.call(ownerrsPFY2X, spenderSeFOQx, {from: accounts[2]});
	});
})