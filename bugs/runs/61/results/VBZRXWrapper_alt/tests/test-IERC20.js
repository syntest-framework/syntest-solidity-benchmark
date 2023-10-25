const IERC20 = artifacts.require("IERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC20', (accounts) => {
	it('test for IERC20', async () => {
		const contractG4MsUpI = await IERC20.new({from: accounts[2]});
		const accountBF8XHso = accounts[4]
		const amountnGR6eAk = BigInt("1057")
		const recipientjsTtYEW = accounts[4]
		const amountVCbjZb0 = BigInt("844")
		const recipientnnUViL6 = accounts[1]
		const amountaoselhG = BigInt("247")
		const recipientnJCdzzb = accounts[1]
		const nulld6fmSDZ = await contractG4MsUpI.totalSupply.call({from: accounts[2]});
		const nullM6a1rR5 = await contractG4MsUpI.balanceOf.call(accountBF8XHso, {from: accounts[3]});
		const nullCIVhuEf = await contractG4MsUpI.transfer.call(recipientjsTtYEW, amountnGR6eAk, {from: accounts[0]});
		const nullB2xk2lW = await contractG4MsUpI.transfer.call(recipientnnUViL6, amountVCbjZb0, {from: "0x0000000000000000000000000000000000000001"});
		const nullByZX9mj = await contractG4MsUpI.transfer.call(recipientnJCdzzb, amountaoselhG, {from: accounts[0]});
	});
})