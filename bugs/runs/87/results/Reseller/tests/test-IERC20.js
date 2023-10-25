const IERC20 = artifacts.require("IERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC20', (accounts) => {
	it('test for IERC20', async () => {
		const contractVVApO1G = await IERC20.new({from: accounts[2]});
		const valueHHAMmwm = BigInt("1790")
		const tog3fpAT8 = accounts[0]
		const valueaT5gzdk = BigInt("826")
		const from8Wblxb = accounts[2]
		const periodg2SYDU1 = BigInt("1581")
		const amountSACYvY = BigInt("1147")
		const recipient2qCh3T = accounts[3]
		const valueHcDJ0Vb = BigInt("1088")
		const tohy00eZS = accounts[0]
		const spenderJJGMvms = "0x0000000000000000000000000000000000000001"
		const ownerpNbf3cW = accounts[5]
		const whokyUQORU = accounts[4]
		const nullX7nLpUn = await contractVVApO1G.mint.call(tog3fpAT8, valueHHAMmwm, {from: accounts[1]});
		await contractVVApO1G.burnFrom.call(from8Wblxb, valueaT5gzdk, {from: accounts[4]});
		await contractVVApO1G.freezeAndTransfer.call(recipient2qCh3T, amountSACYvY, periodg2SYDU1, {from: accounts[2]});
		const nullfNcsAlL = await contractVVApO1G.transfer.call(tohy00eZS, valueHcDJ0Vb, {from: accounts[0]});
		const nullEGenis4 = await contractVVApO1G.allowance.call(ownerpNbf3cW, spenderJJGMvms, {from: accounts[4]});
		const nullxht0tvn = await contractVVApO1G.balanceOf.call(whokyUQORU, {from: accounts[2]});
	});
})