const IERC20 = artifacts.require("IERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC20', (accounts) => {
	it('test for IERC20', async () => {
		const contractEbAcrEX = await IERC20.new({from: accounts[5]});
		const valuepGq1Dsl = BigInt("1367")
		const spenderIDPo5Au = accounts[1]
		const valueZP873P9 = BigInt("1101")
		const fromtRyVujD = accounts[1]
		const nullxkG8gwM = await contractEbAcrEX.approve.call(spenderIDPo5Au, valuepGq1Dsl, {from: accounts[4]});
		await contractEbAcrEX.burnFrom.call(fromtRyVujD, valueZP873P9, {from: accounts[3]});
	});
})