const IERC20 = artifacts.require("IERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC20', (accounts) => {
	it('test for IERC20', async () => {
		const contractZiEGRMZ = await IERC20.new({from: accounts[0]});
		const accountzbS9etL = accounts[0]
		const accountvo3vQLO = accounts[3]
		const amounteHCk4QN = BigInt("1086")
		const recipientVi0FGnX = accounts[0]
		const spenderKBR34Zm = accounts[3]
		const ownerBQKmUX8 = accounts[2]
		const amountTS4S1wR = BigInt("752")
		const recipientI0V6xX9 = accounts[1]
		const nullsiuBbnn = await contractZiEGRMZ.totalSupply.call({from: accounts[2]});
		const null1qGP0P = await contractZiEGRMZ.balanceOf.call(accountzbS9etL, {from: accounts[1]});
		const nullhcI41UL = await contractZiEGRMZ.balanceOf.call(accountvo3vQLO, {from: accounts[3]});
		const nullwkbeXw = await contractZiEGRMZ.transfer.call(recipientVi0FGnX, amounteHCk4QN, {from: accounts[4]});
		const nulli0pk1P = await contractZiEGRMZ.allowance.call(ownerBQKmUX8, spenderKBR34Zm, {from: accounts[1]});
		const nulle3WiZ83 = await contractZiEGRMZ.transfer.call(recipientI0V6xX9, amountTS4S1wR, {from: accounts[2]});
	});
})