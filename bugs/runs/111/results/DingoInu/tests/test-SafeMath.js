const SafeMath = artifacts.require("SafeMath");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('SafeMath', (accounts) => {
	it('test for SafeMath', async () => {
		const contractkaLmpi2 = await SafeMath.new({from: accounts[2]});
		const bZxBYtfa = BigInt("1307")
		const aNfEVEr = BigInt("1285")
		const blVE4rKK = BigInt("1026")
		const aNgjU9tb = BigInt("413")
		const bLe5xZ97 = BigInt("1895")
		const akk72lFm = BigInt("490")
		const bhHALx9y = BigInt("368")
		const aMqJTYM4 = BigInt("1228")
		const bbnFDLp = BigInt("67")
		const aZFs8yAL = BigInt("1344")
		const cxexPxBB = await contractkaLmpi2.safeDiv.call(aNfEVEr, bZxBYtfa, {from: accounts[1]});
		const cNZZmzfR = await contractkaLmpi2.safeSub.call(aNgjU9tb, blVE4rKK, {from: accounts[2]});
		const cm7JIozo = await contractkaLmpi2.safeDiv.call(akk72lFm, bLe5xZ97, {from: accounts[3]});
		const coOMeH6n = await contractkaLmpi2.safeDiv.call(aMqJTYM4, bhHALx9y, {from: accounts[1]});
		const cnJiThBk = await contractkaLmpi2.safeMul.call(aZFs8yAL, bbnFDLp, {from: accounts[4]});

		assert.equal(cxexPxBB, 0)
		await expect(contractkaLmpi2.safeSub.call(aNgjU9tb, blVE4rKK, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for SafeMath', async () => {
		const contractB2XrW1I = await SafeMath.new({from: "0x0000000000000000000000000000000000000001"});
		const bcIUn6FC = BigInt("1631")
		const anMVx5EM = BigInt("742")
		const bup8Vw1S = BigInt("2000")
		const ayPKL8TT = BigInt("1985")
		const bR013Cib = BigInt("1147")
		const aJVi2xR = BigInt("917")
		const bFQtrSST = BigInt("1170")
		const ah1nvr5Z = BigInt("1411")
		const cVixgtvG = await contractB2XrW1I.safeAdd.call(anMVx5EM, bcIUn6FC, {from: accounts[2]});
		const ciu0Oify = await contractB2XrW1I.safeAdd.call(ayPKL8TT, bup8Vw1S, {from: accounts[4]});
		const cGuduyuO = await contractB2XrW1I.safeSub.call(aJVi2xR, bR013Cib, {from: accounts[4]});
		const cC7LmfJ = await contractB2XrW1I.safeDiv.call(ah1nvr5Z, bFQtrSST, {from: accounts[2]});
	});
})