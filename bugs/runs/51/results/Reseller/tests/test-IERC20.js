const IERC20 = artifacts.require("IERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC20', (accounts) => {
	it('test for IERC20', async () => {
		const contractb5ONcnh = await IERC20.new({from: accounts[3]});
		const valueGBsvWNn = BigInt("1483")
		const fromlLN6n1z = accounts[3]
		const valuevFZWipA = BigInt("979")
		const fromHquOH2W = accounts[3]
		const spenderd9ehEkE = accounts[2]
		const ownerWqWiODh = accounts[4]
		const valuebwYT4kH = BigInt("1110")
		const spenderWY90cb3 = accounts[0]
		await contractb5ONcnh.burnFrom.call(fromlLN6n1z, valueGBsvWNn, {from: accounts[0]});
		await contractb5ONcnh.burnFrom.call(fromHquOH2W, valuevFZWipA, {from: "0x0000000000000000000000000000000000000001"});
		const null1Q1MJY = await contractb5ONcnh.allowance.call(ownerWqWiODh, spenderd9ehEkE, {from: accounts[1]});
		const nulld2ojtA = await contractb5ONcnh.approve.call(spenderWY90cb3, valuebwYT4kH, {from: accounts[2]});
	});
})