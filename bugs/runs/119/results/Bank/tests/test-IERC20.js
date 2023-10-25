const IERC20 = artifacts.require("IERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC20', (accounts) => {
	it('test for IERC20', async () => {
		const contractCdT3BMV = await IERC20.new({from: accounts[3]});
		const valueLj5kHrO = BigInt("241")
		const spenderg4LCAha = accounts[5]
		const spenderL2mexc6 = "0x0000000000000000000000000000000000000001"
		const ownera3BRc4q = accounts[5]
		const spenderZi5bv5P = accounts[2]
		const owneromHGYN1 = accounts[3]
		const valuedLRXfGa = BigInt("1676")
		const toheCOX0O = accounts[1]
		const valueSl0HjPd = BigInt("726")
		const toa37yEl = accounts[2]
		const fromM85vrRp = accounts[0]
		const nullRcY5k72 = await contractCdT3BMV.approve.call(spenderg4LCAha, valueLj5kHrO, {from: accounts[2]});
		const nullaC4gWVU = await contractCdT3BMV.allowance.call(ownera3BRc4q, spenderL2mexc6, {from: accounts[4]});
		const nullN4uXKoo = await contractCdT3BMV.allowance.call(owneromHGYN1, spenderZi5bv5P, {from: accounts[0]});
		const nullelEJKE = await contractCdT3BMV.transfer.call(toheCOX0O, valuedLRXfGa, {from: accounts[0]});
		const nullMHJO1M3 = await contractCdT3BMV.transferFrom.call(fromM85vrRp, toa37yEl, valueSl0HjPd, {from: accounts[1]});
	});
})