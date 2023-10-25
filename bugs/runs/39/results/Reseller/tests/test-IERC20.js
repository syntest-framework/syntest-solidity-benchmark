const IERC20 = artifacts.require("IERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC20', (accounts) => {
	it('test for IERC20', async () => {
		const contractRyko8v = await IERC20.new({from: accounts[3]});
		const valueLupegKX = BigInt("1108")
		const toDlvW77Z = accounts[1]
		const fromiLnxys = accounts[5]
		const valuemvGqJjO = BigInt("1568")
		const toQmGTLfk = accounts[5]
		const fromy4XRm7L = "0x0000000000000000000000000000000000000001"
		const nullZRTkju = await contractRyko8v.transferFrom.call(fromiLnxys, toDlvW77Z, valueLupegKX, {from: accounts[1]});
		const nullGMdvBGF = await contractRyko8v.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
		const nullQF98qNL = await contractRyko8v.transferFrom.call(fromy4XRm7L, toQmGTLfk, valuemvGqJjO, {from: accounts[4]});
	});
})