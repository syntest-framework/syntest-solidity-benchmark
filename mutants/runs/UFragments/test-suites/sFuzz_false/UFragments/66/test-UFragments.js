const UFragments = artifacts.require("UFragments");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('UFragments', (accounts) => {
	it('test for UFragments', async () => {
		const UFragmentsdsmcS1Q = await UFragments.new({from: accounts[3]});
		const uintBgux33V = BigInt("127")
		const addressEiTgFO = accounts[4]
		const addressov9Bkh = accounts[3]
		const boolLqpHjK4 = await UFragmentsdsmcS1Q.approve.call(addressEiTgFO, uintBgux33V, {from: accounts[0]});
		const uint256OQsz3JC = await UFragmentsdsmcS1Q.calRebase.call({from: accounts[1]});
		const addressM1I95K = await UFragmentsdsmcS1Q.transferOwnership.call(addressov9Bkh, {from: accounts[0]});

		assert.equal(boolLqpHjK4, true)
		await expect(UFragmentsdsmcS1Q.calRebase.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsn8e0X5w = await UFragments.new({from: accounts[2]});
		const uintY6wv7F6 = BigInt("39")
		const stringyHKbIl3 = "LwKInj6wknCgzaQFNUdVV9j2nkTfPfzmzQ80GV96I2anvgfprgU7JRvZxwHFJXkzDE5RR66ysisfPVu2OWrGUq0U6xE1c6mg83"
		const stringZYfsMuo = "X0GPqYgwmE1y8WKLdhWGsiDu"
		const addressPlm8sSE = accounts[4]
		const addressnnnym3b = "0x0000000000000000000000000000000000000001"
		await UFragmentsn8e0X5w.onlyOwner.call({from: accounts[5]});
		const stringkfdGLal = await UFragmentsn8e0X5w.initialize.call(stringZYfsMuo, stringyHKbIl3, uintY6wv7F6, {from: accounts[2]});
		const uint256QMd6v8j = await UFragmentsn8e0X5w.allowance.call(addressnnnym3b, addressPlm8sSE, {from: accounts[0]});

		await expect(UFragmentsn8e0X5w.onlyOwner.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsHfccFyw = await UFragments.new({from: accounts[4]});
		const addressXLyNlRw = accounts[2]
		const intgL7bobA = BigInt("-1459")
		const intau8ePXa = BigInt("1321")
		const uint256w7HKY0c = await UFragmentsHfccFyw.balanceOf.call(addressXLyNlRw, {from: accounts[0]});
		const int256Usm2cP = await UFragmentsHfccFyw.div.call(intau8ePXa, intgL7bobA, {from: accounts[4]});

		assert.equal(uint256w7HKY0c, BigInt("0"))
		await expect(UFragmentsHfccFyw.div.call(intau8ePXa, intgL7bobA, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsoITtWM = await UFragments.new({from: accounts[4]});
		const uintr5DgTi = BigInt("80")
		const addressev6qYgo = accounts[0]
		const stringbULmCoD = await UFragmentsoITtWM.symbol.call({from: accounts[1]});
		const uint8V2Off8D = await UFragmentsoITtWM.decimals.call({from: accounts[4]});
		const uint256XuImr8 = await UFragmentsoITtWM.calRebase.call({from: accounts[4]});
		await UFragmentsoITtWM.onlyOwner.call({from: accounts[3]});
		const addressksdXK19 = await UFragmentsoITtWM.initRebase.call(addressev6qYgo, uintr5DgTi, {from: accounts[4]});

		assert.equal(stringbULmCoD, "")
		assert.equal(uint8V2Off8D, BigInt("0"))
		await expect(UFragmentsoITtWM.calRebase.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsiCA6buk = await UFragments.new({from: accounts[1]});
		const uintpVRiJNd = BigInt("684")
		const addressDUQIrKH = accounts[2]
		const intyBWo2F = BigInt("-261")
		const intsgZ3EVP = BigInt("1386")
		const addresst21gjDn = await UFragmentsiCA6buk.owner.call({from: accounts[4]});
		const addressygZG81 = await UFragmentsiCA6buk.initRebase.call(addressDUQIrKH, uintpVRiJNd, {from: accounts[2]});
		const int256L8ruAf = await UFragmentsiCA6buk.mul.call(intsgZ3EVP, intyBWo2F, {from: accounts[2]});
		await UFragmentsiCA6buk.initializer.call({from: accounts[1]});

		assert.equal(addresst21gjDn, 0x0000000000000000000000000000000000000000)
		await expect(UFragmentsiCA6buk.initRebase.call(addressDUQIrKH, uintpVRiJNd, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsN5MGmW6 = await UFragments.new({from: accounts[2]});
		const addressTWbwyEh = accounts[4]
		const intfeLBhCj = BigInt("-36")
		const intUY3ni6B = BigInt("409")
		const addresshG55UrH = accounts[3]
		const addresswJeSfMN = await UFragmentsN5MGmW6.initialize.call(addressTWbwyEh, {from: accounts[3]});
		const int256yKQpAVA = await UFragmentsN5MGmW6.div.call(intUY3ni6B, intfeLBhCj, {from: accounts[4]});
		const addressXxAgUbi = await UFragmentsN5MGmW6.transferOwnership.call(addresshG55UrH, {from: accounts[2]});

		await expect(UFragmentsN5MGmW6.initialize.call(addressTWbwyEh, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsHfccFyw = await UFragments.new({from: accounts[4]});
		const uintXVNtyQu = BigInt("56")
		const stringKJIRGBG = "6wuhNJMupHv2UaFAvpcgnHMV"
		const stringL7DfDEf = "i5qaqBPrbIhEcJidignhdxlDnyko1AptkhKCN5BTg1zxH"
		const intnt3LrHL = BigInt("-1459")
		const intx9Eij1t = BigInt("1267")
		const stringhb9UxOM = await UFragmentsHfccFyw.initialize.call(stringL7DfDEf, stringKJIRGBG, uintXVNtyQu, {from: accounts[3]});
		const int256Usm2cP = await UFragmentsHfccFyw.div.call(intx9Eij1t, intnt3LrHL, {from: accounts[4]});
		const boolPdwSrY7 = await UFragmentsHfccFyw.rebaseTimeInfo.call({from: accounts[1]});

		await expect(UFragmentsHfccFyw.div.call(intx9Eij1t, intnt3LrHL, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsHfccFyw = await UFragments.new({from: accounts[4]});
		const uintpK0L2pK = BigInt("1476")
		const addressp9epZcd = accounts[2]
		const addressXPjbKbJ = accounts[1]
		const intX5cuqSc = BigInt("698")
		const intOAe9eCT = BigInt("1290")
		const boolBHKzr3y = await UFragmentsHfccFyw.transferFrom.call(addressXPjbKbJ, addressp9epZcd, uintpK0L2pK, {from: accounts[2]});
		const int256Usm2cP = await UFragmentsHfccFyw.div.call(intOAe9eCT, intX5cuqSc, {from: accounts[4]});

		await expect(UFragmentsHfccFyw.transferFrom.call(addressXPjbKbJ, addressp9epZcd, uintpK0L2pK, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsscPDuw = await UFragments.new({from: "0x0000000000000000000000000000000000000001"});
		const intPAAhtpY = BigInt("-781")
		const intSCNWwYZ = BigInt("-886")
		const uintAwiSXTC = BigInt("1979")
		const addressCHOhOVR = accounts[5]
		await UFragmentsscPDuw.renounceOwnership.call({from: accounts[1]});
		const int256QXsAHC = await UFragmentsscPDuw.add.call(intSCNWwYZ, intPAAhtpY, {from: accounts[4]});
		const boolxBxSbZK = await UFragmentsscPDuw.approve.call(addressCHOhOVR, uintAwiSXTC, {from: "0x0000000000000000000000000000000000000001"});
		const uint256LTM2mMv = await UFragmentsscPDuw.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for UFragments', async () => {
		const UFragmentsHfccFyw = await UFragments.new({from: accounts[4]});
		const addressRvusnP2 = accounts[3]
		const uint256w7HKY0c = await UFragmentsHfccFyw.balanceOf.call(addressRvusnP2, {from: accounts[0]});
		const uint256zRiPD2C = await UFragmentsHfccFyw.totalSupply.call({from: accounts[2]});

		assert.equal(uint256w7HKY0c, BigInt("0"))
		assert.equal(uint256zRiPD2C, BigInt("0"))
	});

	it('test for UFragments', async () => {
		const UFragmentso8ACy28 = await UFragments.new({from: accounts[2]});
		const addressF6Aho2P = accounts[2]
		const addresspvtnWKG = accounts[2]
		const addressfnD4x4x = accounts[0]
		const uint8EGKuWOc = await UFragmentso8ACy28.decimals.call({from: accounts[0]});
		const uint256TOHyb80 = await UFragmentso8ACy28.allowance.call(addresspvtnWKG, addressF6Aho2P, {from: "0x0000000000000000000000000000000000000001"});
		const addresshimkggD = await UFragmentso8ACy28.transferOwnership.call(addressfnD4x4x, {from: "0x0000000000000000000000000000000000000001"});
		const stringCuBDNZN = await UFragmentso8ACy28.symbol.call({from: accounts[3]});

		assert.equal(uint256TOHyb80, BigInt("0"))
		assert.equal(uint8EGKuWOc, BigInt("0"))
		await expect(UFragmentso8ACy28.transferOwnership.call(addressfnD4x4x, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsHfccFyw = await UFragments.new({from: accounts[4]});
		const intgEz07vS = BigInt("-1459")
		const intZkM4qrk = BigInt("1333")
		const intqjKN6hG = BigInt("-717")
		const intym5jdEc = BigInt("-1979")
		const stringqJUgCsY = await UFragmentsHfccFyw.name.call({from: accounts[3]});
		const int256Usm2cP = await UFragmentsHfccFyw.div.call(intZkM4qrk, intgEz07vS, {from: accounts[4]});
		const int256d3DiOOY = await UFragmentsHfccFyw.div.call(intym5jdEc, intqjKN6hG, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(stringqJUgCsY, "")
		await expect(UFragmentsHfccFyw.div.call(intZkM4qrk, intgEz07vS, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsHfccFyw = await UFragments.new({from: accounts[4]});
		const uintPIUevc4 = BigInt("1419")
		const addresskizKBFQ = accounts[1]
		const intONGESwC = BigInt("-1456")
		const intKrij2qo = BigInt("1290")
		const addressJqcCLCb = accounts[4]
		const addresskr4Pp5C = accounts[0]
		const boolmQiLtP = await UFragmentsHfccFyw.transfer.call(addresskizKBFQ, uintPIUevc4, {from: "0x0000000000000000000000000000000000000001"});
		const int256Usm2cP = await UFragmentsHfccFyw.div.call(intKrij2qo, intONGESwC, {from: accounts[4]});
		const uint256keu8K9L = await UFragmentsHfccFyw.allowance.call(addresskr4Pp5C, addressJqcCLCb, {from: accounts[4]});

		await expect(UFragmentsHfccFyw.transfer.call(addresskizKBFQ, uintPIUevc4, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsHfccFyw = await UFragments.new({from: accounts[4]});
		const addressvpyFva8 = accounts[5]
		const addressJx8zahx = accounts[4]
		const intxtFWC6M = BigInt("-1442")
		const intUMnGrIJ = BigInt("1290")
		const boolXdV10WH = await UFragmentsHfccFyw.rebaseTimeInfo.call({from: accounts[3]});
		const uint256db8pKO8 = await UFragmentsHfccFyw.allowance.call(addressJx8zahx, addressvpyFva8, {from: accounts[1]});
		const int256Usm2cP = await UFragmentsHfccFyw.div.call(intUMnGrIJ, intxtFWC6M, {from: accounts[4]});

		assert.equal(uint256db8pKO8, BigInt("0"))
		await expect(UFragmentsHfccFyw.div.call(intUMnGrIJ, intxtFWC6M, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})