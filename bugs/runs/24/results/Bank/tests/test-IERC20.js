const IERC20 = artifacts.require("IERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC20', (accounts) => {
	it('test for IERC20', async () => {
		const contractALJogmm = await IERC20.new({from: accounts[0]});
		const valueX7Me8e = BigInt("480")
		const spender03Mp7U = accounts[5]
		const whoMVThUe2 = accounts[1]
		const spenderzQZH4Bj = accounts[4]
		const owneriZq3OxR = accounts[1]
		const valueZONMPmK = BigInt("1301")
		const toOoUXXk9 = accounts[4]
		const spenderNVjcaJW = accounts[3]
		const ownertE2tkYP = accounts[3]
		const nulleHF3BOo = await contractALJogmm.approve.call(spender03Mp7U, valueX7Me8e, {from: accounts[3]});
		const nulldlC0DLH = await contractALJogmm.balanceOf.call(whoMVThUe2, {from: accounts[4]});
		const nullDIhChuv = await contractALJogmm.allowance.call(owneriZq3OxR, spenderzQZH4Bj, {from: accounts[2]});
		const nullFCs4xtL = await contractALJogmm.transfer.call(toOoUXXk9, valueZONMPmK, {from: accounts[3]});
		const nullM0XS5Am = await contractALJogmm.allowance.call(ownertE2tkYP, spenderNVjcaJW, {from: accounts[4]});
	});
})