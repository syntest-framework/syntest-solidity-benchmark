const IERC20 = artifacts.require("IERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC20', (accounts) => {
	it('test for IERC20', async () => {
		const contractA621wGT = await IERC20.new({from: accounts[2]});
		const accountQ3ebGC = accounts[3]
		const nullaFaKntS = await contractA621wGT.balanceOf.call(accountQ3ebGC, {from: "0x0000000000000000000000000000000000000001"});
		const nullzQPfWEE = await contractA621wGT.totalSupply.call({from: accounts[4]});
	});
})