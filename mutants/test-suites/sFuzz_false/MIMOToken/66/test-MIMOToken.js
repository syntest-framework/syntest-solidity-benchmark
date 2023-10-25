const MIMOToken = artifacts.require("MIMOToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MIMOToken', (accounts) => {
	it('test for MIMOToken', async () => {
		const MIMOTokenXEuetL3 = await MIMOToken.new({from: accounts[1]});
		const addressiq4Q8Yh = "0x0000000000000000000000000000000000000001"
		const addressnhSTA8L = accounts[3]
		const addressPPUtBS1 = accounts[1]
		const uintvNr2C7c = BigInt("1727")
		const uintO5txDC = BigInt("443")
		const addressMGXRxAw = accounts[0]
		const addressOO7tzS8 = accounts[4]
		const addressXyO1Ep9 = accounts[3]
		const uintOlRDee0 = await MIMOTokenXEuetL3.allowance.call(addressnhSTA8L, addressiq4Q8Yh, {from: accounts[1]});
		const uintvWaFvoQ = await MIMOTokenXEuetL3.balanceOf.call(addressPPUtBS1, {from: accounts[4]});
		const uint256psfIL0s = await MIMOTokenXEuetL3.setFeeRate.call(uintvNr2C7c, {from: accounts[4]});
//		const boolELgylsL = await MIMOTokenXEuetL3.transfer.call(addressMGXRxAw, uintO5txDC, {from: accounts[2]});
//		const uintzoT5hfp = await MIMOTokenXEuetL3.allowance.call(addressXyO1Ep9, addressOO7tzS8, {from: accounts[3]});

		assert.equal(uintOlRDee0, BigInt("0"))
		assert.equal(uintvWaFvoQ, BigInt("0"))
		await expect(MIMOTokenXEuetL3.transfer.call(addressMGXRxAw, uintO5txDC, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for MIMOToken', async () => {
		const MIMOTokenRK5aXTv = await MIMOToken.new({from: accounts[0]});
		const uintvZRZ4VF = BigInt("495")
		const addressdit2niq = accounts[0]
		const addressnvr7WU = accounts[1]
		const addresslSbJYyo = accounts[2]
//		const boolVPu9Rjm = await MIMOTokenRK5aXTv.transferFrom.call(addressnvr7WU, addressdit2niq, uintvZRZ4VF, {from: accounts[2]});
//		const uintpjgbIql = await MIMOTokenRK5aXTv.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
//		const uintRKVqtX3 = await MIMOTokenRK5aXTv.balanceOf.call(addresslSbJYyo, {from: accounts[2]});

		await expect(MIMOTokenRK5aXTv.transferFrom.call(addressnvr7WU, addressdit2niq, uintvZRZ4VF, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for MIMOToken', async () => {
		const MIMOTokenGlPWj6X = await MIMOToken.new({from: accounts[3]});
		const uintrtgHw3T = BigInt("1441")
		const uintJSBe8B = BigInt("1373")
		const uint256HScU1J3 = await MIMOTokenGlPWj6X.getFee.call(uintrtgHw3T, {from: accounts[0]});
		const uint256tmMzk6r = await MIMOTokenGlPWj6X.getFee.call(uintJSBe8B, {from: accounts[1]});

		assert.equal(uint256HScU1J3, BigInt("50000000000000000"))
		assert.equal(uint256tmMzk6r, BigInt("50000000000000000"))
	});

	it('test for MIMOToken', async () => {
		const MIMOTokenubuJZLO = await MIMOToken.new({from: accounts[1]});
		const uintXB39nsS = BigInt("709")
		const address41I6R0 = accounts[3]
		const uintYYne8S4 = BigInt("1460")
		const uintfKbbUkV = await MIMOTokenubuJZLO.totalSupply.call({from: accounts[1]});
//		const boolLGQElbk = await MIMOTokenubuJZLO.transfer.call(address41I6R0, uintXB39nsS, {from: accounts[3]});
//		const uint256vO5p0sg = await MIMOTokenubuJZLO.setMinFee.call(uintYYne8S4, {from: accounts[2]});

		assert.equal(uintfKbbUkV, BigInt("16000000000000000000000000"))
		await expect(MIMOTokenubuJZLO.transfer.call(address41I6R0, uintXB39nsS, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for MIMOToken', async () => {
		const MIMOTokenGlPWj6X = await MIMOToken.new({from: accounts[3]});
		const uintJsbcVEG = BigInt("890")
		const uintlqvhP4M = BigInt("1373")
		const addressP8Nl58 = accounts[0]
		const address1AqLaf = accounts[5]
		const uintx2XKS4k = BigInt("1081")
		const addressUjIB55v = accounts[1]
		const uint256HScU1J3 = await MIMOTokenGlPWj6X.getFee.call(uintJsbcVEG, {from: accounts[0]});
		const uint256tmMzk6r = await MIMOTokenGlPWj6X.getFee.call(uintlqvhP4M, {from: accounts[1]});
		const uintvG2MF6r = await MIMOTokenGlPWj6X.allowance.call(address1AqLaf, addressP8Nl58, {from: accounts[5]});
		const boolZpCoe21 = await MIMOTokenGlPWj6X.approve.call(addressUjIB55v, uintx2XKS4k, {from: accounts[5]});

		assert.equal(boolZpCoe21, true)
		assert.equal(uint256HScU1J3, BigInt("50000000000000000"))
		assert.equal(uint256tmMzk6r, BigInt("50000000000000000"))
		assert.equal(uintvG2MF6r, BigInt("0"))
	});

	it('test for MIMOToken', async () => {
		const MIMOTokenGlPWj6X = await MIMOToken.new({from: accounts[3]});
		const uintF8fyUr1 = BigInt("390")
		const uintCp1AAoM = BigInt("484")
		const uint256tmMzk6r = await MIMOTokenGlPWj6X.getFee.call(uintF8fyUr1, {from: accounts[1]});
		const uint256AFUEf6R = await MIMOTokenGlPWj6X.setMinFee.call(uintCp1AAoM, {from: accounts[2]});

		assert.equal(uint256tmMzk6r, BigInt("50000000000000000"))
	});
})