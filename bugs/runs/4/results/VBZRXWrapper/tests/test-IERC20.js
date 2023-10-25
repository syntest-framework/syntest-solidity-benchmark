const IERC20 = artifacts.require("IERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC20', (accounts) => {
	it('test for IERC20', async () => {
		const contractGevAcZ = await IERC20.new({from: accounts[3]});
		const _valuetpbQAF8 = BigInt("1836")
		const _spenderP4eCWg8 = accounts[0]
		const _valueOCsoV1m = BigInt("1302")
		const _tonGszw7Y = accounts[4]
		const _whowu53Q5S = accounts[3]
		const _valueTYziq6o = BigInt("90")
		const _touyzpqoj = accounts[2]
		const _fromSbxzgFM = accounts[4]
		const nullnI47777 = await contractGevAcZ.approve.call(_spenderP4eCWg8, _valuetpbQAF8, {from: accounts[1]});
		const nullLj00ScX = await contractGevAcZ.transfer.call(_tonGszw7Y, _valueOCsoV1m, {from: accounts[2]});
		const nullxoiJ8g0 = await contractGevAcZ.balanceOf.call(_whowu53Q5S, {from: accounts[1]});
		const nullE93QNc = await contractGevAcZ.totalSupply.call({from: accounts[5]});
		const nullq8ibOjw = await contractGevAcZ.transferFrom.call(_fromSbxzgFM, _touyzpqoj, _valueTYziq6o, {from: accounts[4]});
	});
})