const IERC20 = artifacts.require("IERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC20', (accounts) => {
	it('test for IERC20', async () => {
		const contractcM2o2Yf = await IERC20.new({from: accounts[1]});
		const valueM7oogin = BigInt("1483")
		const toYxa6VXo = accounts[5]
		const spendersPn29iD = accounts[1]
		const ownernFfgOag = accounts[2]
		const valueOIF5iWF = BigInt("1807")
		const togwnsNsT = accounts[0]
		const spenderZfJCZQT = accounts[5]
		const ownerfdrytGb = accounts[4]
		const whovZDCIv7 = "0x0000000000000000000000000000000000000001"
		const valueIJGxCu = BigInt("588")
		const tobpbRZi8 = accounts[0]
		const nullquerFxG = await contractcM2o2Yf.transfer.call(toYxa6VXo, valueM7oogin, {from: accounts[4]});
		const nullTUwg0Su = await contractcM2o2Yf.allowance.call(ownernFfgOag, spendersPn29iD, {from: accounts[1]});
		const nulltiSALpT = await contractcM2o2Yf.transfer.call(togwnsNsT, valueOIF5iWF, {from: accounts[0]});
		const nullH15G0Xw = await contractcM2o2Yf.allowance.call(ownerfdrytGb, spenderZfJCZQT, {from: accounts[4]});
		const nullueFlMY7 = await contractcM2o2Yf.balanceOf.call(whovZDCIv7, {from: accounts[3]});
		const nullxHrkJND = await contractcM2o2Yf.transfer.call(tobpbRZi8, valueIJGxCu, {from: accounts[3]});
	});
})