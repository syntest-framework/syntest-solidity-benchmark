const IERC20 = artifacts.require("IERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC20', (accounts) => {
	it('test for IERC20', async () => {
		const contractieRxUng = await IERC20.new({from: accounts[1]});
		const valueT7lbq0E = BigInt("1688")
		const spenderuBfMONI = "0x0000000000000000000000000000000000000001"
		const spenderDDSIuYU = accounts[0]
		const ownerdFE88wX = accounts[3]
		const valuevfuMMtx = BigInt("48")
		const toe7AK5mF = accounts[3]
		const valueQRktRf = BigInt("1168")
		const toQQyy0aC = accounts[0]
		const fromfSFqvuw = accounts[1]
		const valueJJp181M = BigInt("1047")
		const toyO4hXES = accounts[2]
		const valuexPtT56j = BigInt("1238")
		const tosBz9aE1 = accounts[5]
		const null2zDt2C = await contractieRxUng.approve.call(spenderuBfMONI, valueT7lbq0E, {from: accounts[1]});
		const null0gE80a = await contractieRxUng.allowance.call(ownerdFE88wX, spenderDDSIuYU, {from: accounts[0]});
		const nullquitXF = await contractieRxUng.transfer.call(toe7AK5mF, valuevfuMMtx, {from: accounts[4]});
		const nullGqQPJR5 = await contractieRxUng.transferFrom.call(fromfSFqvuw, toQQyy0aC, valueQRktRf, {from: accounts[1]});
		const nullRrMGpAl = await contractieRxUng.transfer.call(toyO4hXES, valueJJp181M, {from: accounts[4]});
		const nullMOKkE0f = await contractieRxUng.transfer.call(tosBz9aE1, valuexPtT56j, {from: accounts[1]});
	});
})