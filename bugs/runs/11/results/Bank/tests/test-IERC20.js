const IERC20 = artifacts.require("IERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC20', (accounts) => {
	it('test for IERC20', async () => {
		const contractspH6Qns = await IERC20.new({from: accounts[2]});
		const valueGV7v4Q4 = BigInt("105")
		const spenderBhl2aLm = accounts[2]
		const valuenmJDDAh = BigInt("1283")
		const tos8GXfRM = accounts[4]
		const fromkhfTP74 = accounts[0]
		const nullIkga3dR = await contractspH6Qns.approve.call(spenderBhl2aLm, valueGV7v4Q4, {from: accounts[0]});
		const nullwQh04GH = await contractspH6Qns.transferFrom.call(fromkhfTP74, tos8GXfRM, valuenmJDDAh, {from: accounts[1]});
		const nullbP9ucKW = await contractspH6Qns.totalSupply.call({from: accounts[0]});
	});
})