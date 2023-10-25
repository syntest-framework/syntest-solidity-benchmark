const SafeMath = artifacts.require("SafeMath");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('SafeMath', (accounts) => {
	it('test for SafeMath', async () => {
		const contractBae85z = await SafeMath.new({from: accounts[3]});
		const bADC8JUc = BigInt("594")
		const aZhprHWc = BigInt("1663")
		const bUtQQu68 = BigInt("460")
		const aXkTGx1s = BigInt("391")
		const bXY1KJE = BigInt("1835")
		const aYYo3f5 = BigInt("1067")
		const cyH6iVrH = await contractBae85z.safeSub.call(aZhprHWc, bADC8JUc, {from: accounts[2]});
		const cTTO0Owt = await contractBae85z.safeSub.call(aXkTGx1s, bUtQQu68, {from: accounts[5]});
		const cfvMUoD = await contractBae85z.safeSub.call(aYYo3f5, bXY1KJE, {from: accounts[3]});

		assert.equal(cyH6iVrH, 1069)
		await expect(contractBae85z.safeSub.call(aXkTGx1s, bUtQQu68, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for SafeMath', async () => {
		const contractgcuAx4x = await SafeMath.new({from: "0x0000000000000000000000000000000000000001"});
		const bP8IxZ4N = BigInt("458")
		const aCnAUy2j = BigInt("108")
		const bK1x6P0m = BigInt("2029")
		const aBKziWuo = BigInt("193")
		const bMdhdsS = BigInt("139")
		const arsHYKvw = BigInt("626")
		const brNYPNi = BigInt("1607")
		const ad9LliFk = BigInt("352")
		const ctplJAKO = await contractgcuAx4x.safeSub.call(aCnAUy2j, bP8IxZ4N, {from: accounts[2]});
		const cVSH4mof = await contractgcuAx4x.safeAdd.call(aBKziWuo, bK1x6P0m, {from: accounts[3]});
		const cCa5Tx2s = await contractgcuAx4x.safeMul.call(arsHYKvw, bMdhdsS, {from: accounts[4]});
		const cxPTflA7 = await contractgcuAx4x.safeSub.call(ad9LliFk, brNYPNi, {from: accounts[1]});
	});
})