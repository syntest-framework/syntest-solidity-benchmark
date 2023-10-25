const IERC20 = artifacts.require("IERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC20', (accounts) => {
	it('test for IERC20', async () => {
		const contractTLAvDn3 = await IERC20.new({from: accounts[4]});
		const spenderseLHD0r = accounts[1]
		const ownerIrnt9Bk = accounts[0]
		const valuebV5CkI9 = BigInt("837")
		const tobEKNoou = accounts[1]
		const fromB6p8Ia = "0x0000000000000000000000000000000000000001"
		const valuegwywjPm = BigInt("770")
		const toTHVikD0 = "0x0000000000000000000000000000000000000001"
		const frommsfXAC = accounts[2]
		const nulljeocBPK = await contractTLAvDn3.allowance.call(ownerIrnt9Bk, spenderseLHD0r, {from: accounts[0]});
		const nulle4czxR = await contractTLAvDn3.transferFrom.call(fromB6p8Ia, tobEKNoou, valuebV5CkI9, {from: accounts[0]});
		const nullYMeoYBv = await contractTLAvDn3.transferFrom.call(frommsfXAC, toTHVikD0, valuegwywjPm, {from: accounts[3]});
	});
})