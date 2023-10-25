const ERC20 = artifacts.require("ERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC20', (accounts) => {
	it('test for ERC20', async () => {
		const contracttsvimpe = await ERC20.new({from: accounts[2]});
		const valueCyLe75 = BigInt("494")
		const spenderFFTTwiH = accounts[2]
		const addedValueZOSJqYG = BigInt("1979")
		const spenderZTKPta0 = accounts[2]
		const spenderxJiAZ6u = accounts[3]
		const ownergOXsei1 = accounts[1]
		const nullM46JFD = await contracttsvimpe.approve.call(spenderFFTTwiH, valueCyLe75, {from: "0x0000000000000000000000000000000000000001"});
		const nullVYTBxU5 = await contracttsvimpe.increaseAllowance.call(spenderZTKPta0, addedValueZOSJqYG, {from: accounts[4]});
		const nullfDLrKEL = await contracttsvimpe.allowance.call(ownergOXsei1, spenderxJiAZ6u, {from: accounts[2]});

		assert.equal(nullM46JFD, true)
		assert.equal(nullVYTBxU5, true)
		assert.equal(nullfDLrKEL, 0)
	});

	it('test for ERC20', async () => {
		const contractMkOlBPx = await ERC20.new({from: accounts[0]});
		const valueEz2b8g2 = BigInt("1950")
		const spendere068Fc = accounts[4]
		const addedValuejKTpmyv = BigInt("1465")
		const spenderA963D9Q = accounts[3]
		const subtractedValueLBWlmDF = BigInt("846")
		const spenderGknQleu = accounts[1]
		const subtractedValuelercuFC = BigInt("288")
		const spenderLh6x1AK = "0x0000000000000000000000000000000000000001"
		const subtractedValueqsxS9OO = BigInt("1600")
		const spenderogLOdwZ = accounts[2]
		const valuex0La43c = BigInt("1374")
		const tozBTDAg3 = accounts[4]
		const frompK6BR1b = accounts[1]
		const nullH8NwSox = await contractMkOlBPx.approve.call(spendere068Fc, valueEz2b8g2, {from: accounts[3]});
		const nullgm0dSFt = await contractMkOlBPx.increaseAllowance.call(spenderA963D9Q, addedValuejKTpmyv, {from: accounts[3]});
		const nullNoZD7pj = await contractMkOlBPx.decreaseAllowance.call(spenderGknQleu, subtractedValueLBWlmDF, {from: accounts[2]});
		const nullNq3QwVF = await contractMkOlBPx.decreaseAllowance.call(spenderLh6x1AK, subtractedValuelercuFC, {from: accounts[3]});
		const null8okslY = await contractMkOlBPx.decreaseAllowance.call(spenderogLOdwZ, subtractedValueqsxS9OO, {from: accounts[0]});
		const nullcpeupx9 = await contractMkOlBPx.transferFrom.call(frompK6BR1b, tozBTDAg3, valuex0La43c, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(nullH8NwSox, true)
		assert.equal(nullgm0dSFt, true)
		await expect(contractMkOlBPx.decreaseAllowance.call(spenderGknQleu, subtractedValueLBWlmDF, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contractZ4n0TMP = await ERC20.new({from: accounts[5]});
		const spenderAarSgAk = accounts[4]
		const owner1pwhpo = accounts[1]
		const spenderuXuYos0 = accounts[2]
		const owner3jFwsq = accounts[2]
		const valueIievI8 = BigInt("985")
		const todYGjGsc = accounts[1]
		const fromc67BBYF = accounts[0]
		const spenderFeWtM3B = accounts[0]
		const ownersedVil2 = accounts[4]
		const nullbXfEn0 = await contractZ4n0TMP.allowance.call(owner1pwhpo, spenderAarSgAk, {from: accounts[0]});
		const nullfnAv2Fp = await contractZ4n0TMP.allowance.call(owner3jFwsq, spenderuXuYos0, {from: accounts[1]});
		const nullrr8UFz = await contractZ4n0TMP.transferFrom.call(fromc67BBYF, todYGjGsc, valueIievI8, {from: accounts[5]});
		const nullZp87ndX = await contractZ4n0TMP.totalSupply.call({from: accounts[4]});
		const nullkiidXDJ = await contractZ4n0TMP.allowance.call(ownersedVil2, spenderFeWtM3B, {from: accounts[5]});

		assert.equal(nullbXfEn0, 0)
		assert.equal(nullfnAv2Fp, 0)
		await expect(contractZ4n0TMP.transferFrom.call(fromc67BBYF, todYGjGsc, valueIievI8, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contractNtmkLkk = await ERC20.new({from: accounts[3]});
		const values4wEpEA = BigInt("224")
		const toGr6oxu = accounts[5]
		const subtractedValuemjWGiO = BigInt("182")
		const spenderkAhVhx4 = "0x0000000000000000000000000000000000000001"
		const nullJlws3z = await contractNtmkLkk.transfer.call(toGr6oxu, values4wEpEA, {from: "0x0000000000000000000000000000000000000001"});
		const nullMbbJIAF = await contractNtmkLkk.decreaseAllowance.call(spenderkAhVhx4, subtractedValuemjWGiO, {from: accounts[3]});

		await expect(contractNtmkLkk.transfer.call(toGr6oxu, values4wEpEA, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contractDEcBNqJ = await ERC20.new({from: accounts[3]});
		const valueSOyzSk = BigInt("887")
		const spenderJD9INtS = accounts[1]
		const ownerR04zSsv = accounts[1]
		const addedValuezcFrnW2 = BigInt("647")
		const spendersgaVx9e = accounts[4]
		const spendertgm49if = accounts[3]
		const ownerJ5k2is = accounts[0]
		const valueFNjDHct = BigInt("960")
		const toGCIjchR = accounts[0]
		const valuedWU4mu3 = BigInt("47")
		const spenderbeUv8ss = accounts[3]
		const nullH5NPmif = await contractDEcBNqJ.approve.call(spenderJD9INtS, valueSOyzSk, {from: accounts[4]});
		const nullQGwZ3Tq = await contractDEcBNqJ.balanceOf.call(ownerR04zSsv, {from: accounts[4]});
		const nullZngGXib = await contractDEcBNqJ.increaseAllowance.call(spendersgaVx9e, addedValuezcFrnW2, {from: accounts[4]});
		const nullfqpFFUy = await contractDEcBNqJ.allowance.call(ownerJ5k2is, spendertgm49if, {from: accounts[0]});
		const nullYgKvTnL = await contractDEcBNqJ.transfer.call(toGCIjchR, valueFNjDHct, {from: accounts[2]});
		const nullOrBup9j = await contractDEcBNqJ.approve.call(spenderbeUv8ss, valuedWU4mu3, {from: accounts[4]});

		assert.equal(nullH5NPmif, true)
		assert.equal(nullQGwZ3Tq, 0)
		assert.equal(nullZngGXib, true)
		assert.equal(nullfqpFFUy, 0)
		await expect(contractDEcBNqJ.transfer.call(toGCIjchR, valueFNjDHct, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contractJfijoGy = await ERC20.new({from: accounts[1]});
		const valueid3llQH = BigInt("1930")
		const spenderj4ZMi8J = accounts[2]
		const addedValueOtTnYtw = BigInt("1401")
		const spenderN5rSxO = accounts[5]
		const nullWJHMcaZ = await contractJfijoGy.approve.call(spenderj4ZMi8J, valueid3llQH, {from: accounts[0]});
		const nullx1e0u3 = await contractJfijoGy.totalSupply.call({from: accounts[3]});
		const nullmAwj8pR = await contractJfijoGy.increaseAllowance.call(spenderN5rSxO, addedValueOtTnYtw, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(nullWJHMcaZ, true)
		assert.equal(nullmAwj8pR, true)
		assert.equal(nullx1e0u3, 0)
	});

	it('test for ERC20', async () => {
		const contractCPsZS2E = await ERC20.new({from: "0x0000000000000000000000000000000000000001"});
		const addedValueFZeiQbe = BigInt("1486")
		const spendervWpy2gJ = accounts[4]
		const valueweR8aUk = BigInt("1395")
		const tob0oB4T = accounts[1]
		const fromVt3vLTp = accounts[4]
		const spenderAPCDKgr = accounts[2]
		const ownerQ9OhTJ = accounts[0]
		const addedValueedTS9kH = BigInt("325")
		const spenderrNGGFg7 = accounts[1]
		const value6ORkH1 = BigInt("1085")
		const spenderWboo3Ln = accounts[0]
		const nullfCvbCMa = await contractCPsZS2E.increaseAllowance.call(spendervWpy2gJ, addedValueFZeiQbe, {from: accounts[4]});
		const nullE9GGkrD = await contractCPsZS2E.transferFrom.call(fromVt3vLTp, tob0oB4T, valueweR8aUk, {from: accounts[1]});
		const nullvYUGuiU = await contractCPsZS2E.allowance.call(ownerQ9OhTJ, spenderAPCDKgr, {from: accounts[4]});
		const nullKGhHmgk = await contractCPsZS2E.increaseAllowance.call(spenderrNGGFg7, addedValueedTS9kH, {from: "0x0000000000000000000000000000000000000001"});
		const nullAJaXIM = await contractCPsZS2E.approve.call(spenderWboo3Ln, value6ORkH1, {from: accounts[0]});
	});
})