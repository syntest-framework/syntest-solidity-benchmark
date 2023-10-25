const IERC20 = artifacts.require("IERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC20', (accounts) => {
	it('test for IERC20', async () => {
		const contractpdrvoLk = await IERC20.new({from: "0x0000000000000000000000000000000000000001"});
		const whomqsWxa = accounts[0]
		const valueIexBvNw = BigInt("923")
		const tof87Icmu = accounts[4]
		const valueX0sFRDs = BigInt("1792")
		const tor2bnr8d = accounts[4]
		const spendermx9BFw = "0x0000000000000000000000000000000000000001"
		const ownerMhzUwYy = accounts[1]
		const spender9ooP8f = accounts[1]
		const ownerBm7ebOE = accounts[5]
		const nullQ2iOLRs = await contractpdrvoLk.balanceOf.call(whomqsWxa, {from: accounts[1]});
		const nullGBgjsc = await contractpdrvoLk.transfer.call(tof87Icmu, valueIexBvNw, {from: accounts[1]});
		const nullyY7KHkO = await contractpdrvoLk.transfer.call(tor2bnr8d, valueX0sFRDs, {from: accounts[1]});
		const nullo8shrgp = await contractpdrvoLk.allowance.call(ownerMhzUwYy, spendermx9BFw, {from: "0x0000000000000000000000000000000000000001"});
		const nullF1pp74E = await contractpdrvoLk.totalSupply.call({from: accounts[5]});
		const nullaSwkOZ = await contractpdrvoLk.allowance.call(ownerBm7ebOE, spender9ooP8f, {from: accounts[1]});
	});
})