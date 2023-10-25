const IERC20 = artifacts.require("IERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC20', (accounts) => {
	it('test for IERC20', async () => {
		const contractUnquO8Q = await IERC20.new({from: accounts[4]});
		const valueU1QpLZ = BigInt("570")
		const spenderhxMIBvT = accounts[3]
		const valuexKDpdn8 = BigInt("303")
		const tosU0zZdw = "0x0000000000000000000000000000000000000001"
		const whosipLpNM = accounts[5]
		const valueIzgyJXz = BigInt("305")
		const spendercpAaQBz = accounts[2]
		const nullJVgvWw = await contractUnquO8Q.approve.call(spenderhxMIBvT, valueU1QpLZ, {from: accounts[2]});
		const nullrIrD7C3 = await contractUnquO8Q.transfer.call(tosU0zZdw, valuexKDpdn8, {from: accounts[5]});
		const nullwiFDxgO = await contractUnquO8Q.balanceOf.call(whosipLpNM, {from: accounts[1]});
		const nullfBLSJYs = await contractUnquO8Q.approve.call(spendercpAaQBz, valueIzgyJXz, {from: "0x0000000000000000000000000000000000000001"});
		const nullHzifcd6 = await contractUnquO8Q.totalSupply.call({from: accounts[3]});
	});
})