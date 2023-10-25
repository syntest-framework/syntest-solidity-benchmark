const ERC20Interface = artifacts.require("ERC20Interface");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC20Interface', (accounts) => {
	it('test for ERC20Interface', async () => {
		const contractH2IioqL = await ERC20Interface.new({from: accounts[5]});
		const spenderMMiw4oB = accounts[1]
		const tokenOwnerUg2SY0p = accounts[3]
		const tokensYWCmAJ = BigInt("1870")
		const tosq41er = accounts[1]
		const tokensn37vh8D = BigInt("1215")
		const spenderPbUCB1n = accounts[1]
		const remaininguln2QUX = await contractH2IioqL.allowance.call(tokenOwnerUg2SY0p, spenderMMiw4oB, {from: accounts[0]});
		const successKoX2m3n = await contractH2IioqL.transfer.call(tosq41er, tokensYWCmAJ, {from: accounts[4]});
		const successKaMef1h = await contractH2IioqL.approve.call(spenderPbUCB1n, tokensn37vh8D, {from: accounts[4]});
		const nullPBde8O = await contractH2IioqL.totalSupply.call({from: accounts[3]});
	});
})