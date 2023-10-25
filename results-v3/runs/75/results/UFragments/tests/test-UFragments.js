const UFragments = artifacts.require("UFragments");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('UFragments', (accounts) => {
	it('test for UFragments', async () => {
		const UFragments3gfUfr = await UFragments.new({from: accounts[1]});
		const addressw5D99Af = accounts[3]
		const addressUCfy9ng = accounts[5]
		const intBvMMQNb = BigInt("-1645")
		const intDgmnTLz = BigInt("-1450")
		const boolFlWjmR4 = await UFragments3gfUfr.isOwner.call({from: accounts[3]});
		const uint256So0EpkN = await UFragments3gfUfr.allowance.call(addressUCfy9ng, addressw5D99Af, {from: accounts[4]});
		const int256QfNbye3 = await UFragments3gfUfr.add.call(intDgmnTLz, intBvMMQNb, {from: "0x0000000000000000000000000000000000000001"});
		const addresspxTE0DX = await UFragments3gfUfr.owner.call({from: accounts[3]});
		const uint8vJTer8O = await UFragments3gfUfr.decimals.call({from: accounts[2]});

		assert.equal(boolFlWjmR4, false)
		assert.equal(uint256So0EpkN, BigInt("0"))
		await expect(UFragments3gfUfr.add.call(intDgmnTLz, intBvMMQNb, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsIIkjlw = await UFragments.new({from: accounts[2]});
		const addressBLYqBSq = accounts[2]
		const addressfK7mEf = accounts[2]
		const uint256F8Emnte = await UFragmentsIIkjlw.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256PgTAY1h = await UFragmentsIIkjlw.allowance.call(addressfK7mEf, addressBLYqBSq, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256F8Emnte, BigInt("0"))
		assert.equal(uint256PgTAY1h, BigInt("0"))
	});

	it('test for UFragments', async () => {
		const UFragmentsadTCZQz = await UFragments.new({from: accounts[1]});
		const addressxdVLw6 = accounts[5]
		const address3jwx3B = await UFragmentsadTCZQz.initialize.call(addressxdVLw6, {from: accounts[1]});
		await UFragmentsadTCZQz.renounceOwnership.call({from: accounts[2]});
		const boolB90IPao = await UFragmentsadTCZQz.isOwner.call({from: accounts[3]});
		await UFragmentsadTCZQz.initializer.call({from: accounts[3]});

		await expect(UFragmentsadTCZQz.initialize.call(addressxdVLw6, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentssDqvezZ = await UFragments.new({from: accounts[2]});
		const addressehEERkC = await UFragmentssDqvezZ.owner.call({from: accounts[2]});
		await UFragmentssDqvezZ.initializer.call({from: accounts[3]});

		assert.equal(addressehEERkC, 0x0000000000000000000000000000000000000000)
		await expect(UFragmentssDqvezZ.initializer.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsXLiEMOO = await UFragments.new({from: accounts[3]});
		const uintyWpICyw = BigInt("1931")
		const addresstPy2MA2 = accounts[2]
		const intdTUqMBL = BigInt("-474")
		const intvdZoapo = BigInt("-369")
		const inttO2lcHX = BigInt("-1805")
		const intJvlctoi = BigInt("880")
		const boolhBsOY7y = await UFragmentsXLiEMOO.transfer.call(addresstPy2MA2, uintyWpICyw, {from: "0x0000000000000000000000000000000000000001"});
		const int256XXOayDf = await UFragmentsXLiEMOO.mul.call(intvdZoapo, intdTUqMBL, {from: accounts[3]});
		const uint256P0Jq3B = await UFragmentsXLiEMOO.calRebase.call({from: accounts[1]});
		await UFragmentsXLiEMOO.initializer.call({from: accounts[3]});
		const int256sQtWcEm = await UFragmentsXLiEMOO.add.call(intJvlctoi, inttO2lcHX, {from: accounts[0]});
		await UFragmentsXLiEMOO.initializer.call({from: accounts[5]});

		await expect(UFragmentsXLiEMOO.transfer.call(addresstPy2MA2, uintyWpICyw, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsknoBMO = await UFragments.new({from: accounts[2]});
		const uintcc2kt54 = BigInt("252")
		const addressFbQ85Yx = accounts[0]
		const booloOK2v30 = await UFragmentsknoBMO.approve.call(addressFbQ85Yx, uintcc2kt54, {from: accounts[0]});
		const stringXH4EPx5 = await UFragmentsknoBMO.name.call({from: accounts[2]});
		await UFragmentsknoBMO.renounceOwnership.call({from: accounts[1]});
		const boolf9QrPsB = await UFragmentsknoBMO.isOwner.call({from: accounts[5]});

		assert.equal(booloOK2v30, true)
		assert.equal(stringXH4EPx5, "")
		await expect(UFragmentsknoBMO.renounceOwnership.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsqnTEZPe = await UFragments.new({from: accounts[1]});
		const addressy89izKG = accounts[3]
		const addressvZ504R2 = accounts[0]
		const uint256hw5nCGM = await UFragmentsqnTEZPe.allowance.call(addressvZ504R2, addressy89izKG, {from: accounts[2]});
		const boolmsqSj2A = await UFragmentsqnTEZPe.rebaseTimeInfo.call({from: accounts[0]});
		const uint256ycRYqHj = await UFragmentsqnTEZPe.totalSupply.call({from: accounts[5]});

		assert.equal(uint256hw5nCGM, BigInt("0"))
		assert.equal(uint256ycRYqHj, BigInt("0"))
	});

	it('test for UFragments', async () => {
		const UFragmentsAZElJI = await UFragments.new({from: accounts[1]});
		const addressUJzrF0Q = accounts[4]
		const addressdCaBBGC = accounts[2]
		const uint256zis4HPS = await UFragmentsAZElJI.allowance.call(addressdCaBBGC, addressUJzrF0Q, {from: accounts[4]});
		const uint256Fq5xYrK = await UFragmentsAZElJI.calRebase.call({from: accounts[1]});

		assert.equal(uint256zis4HPS, BigInt("0"))
		await expect(UFragmentsAZElJI.calRebase.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentshy1jxg8 = await UFragments.new({from: accounts[0]});
		const uintXqww1gg = BigInt("111")
		const stringvVOTxNr = "ss8gsBKa7eQ9w2uSmB5"
		const stringacaCzE5 = "yJAHFLWsNhqhGFkJOaybtTtpXhdNFmm2BJp324mXbOJeyn5noXfWPsJFIvHKssXzIDVQyv9p"
		const uintukt9ysw = BigInt("659")
		const addressL0JYdGE = accounts[1]
		const boolNPVrBCf = await UFragmentshy1jxg8.rebaseTimeInfo.call({from: accounts[0]});
		const stringW3QJT8u = await UFragmentshy1jxg8.initialize.call(stringacaCzE5, stringvVOTxNr, uintXqww1gg, {from: accounts[4]});
		await UFragmentshy1jxg8.onlyOwner.call({from: accounts[4]});
		const boollZb3F2o = await UFragmentshy1jxg8.transfer.call(addressL0JYdGE, uintukt9ysw, {from: accounts[4]});

		await expect(UFragmentshy1jxg8.onlyOwner.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsAZElJI = await UFragments.new({from: accounts[1]});
		const addressUazdkfg = accounts[4]
		const addresspF4UQOs = accounts[3]
		const uintzKPT5BE = BigInt("1688")
		const addressXKWhVq = accounts[2]
		const uint256zis4HPS = await UFragmentsAZElJI.allowance.call(addresspF4UQOs, addressUazdkfg, {from: accounts[4]});
		const boolNtBOPBg = await UFragmentsAZElJI.approve.call(addressXKWhVq, uintzKPT5BE, {from: accounts[1]});
		const uint8lqauvHE = await UFragmentsAZElJI.decimals.call({from: accounts[3]});
		const uint256Fq5xYrK = await UFragmentsAZElJI.calRebase.call({from: accounts[1]});

		assert.equal(boolNtBOPBg, true)
		assert.equal(uint256zis4HPS, BigInt("0"))
		assert.equal(uint8lqauvHE, BigInt("0"))
		await expect(UFragmentsAZElJI.calRebase.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsAZElJI = await UFragments.new({from: accounts[1]});
		const addressPsbmMsa = accounts[4]
		const addresseaRAtvo = accounts[2]
		const uintG2F6HR6 = BigInt("1592")
		const addressjNNzjFv = accounts[3]
		const addresstwmzgvd = accounts[4]
		const uintyjcEvKE = BigInt("1283")
		const addressf1pRMv = "0x0000000000000000000000000000000000000001"
		const uintUaLvJ3u = BigInt("217")
		const addresshKPpDbH = accounts[4]
		const uint256zis4HPS = await UFragmentsAZElJI.allowance.call(addresseaRAtvo, addressPsbmMsa, {from: accounts[4]});
		const boolZd8BIAr = await UFragmentsAZElJI.transferFrom.call(addresstwmzgvd, addressjNNzjFv, uintG2F6HR6, {from: "0x0000000000000000000000000000000000000001"});
		const boolSagHW42 = await UFragmentsAZElJI.approve.call(addressf1pRMv, uintyjcEvKE, {from: accounts[5]});
		const boolnD00N10 = await UFragmentsAZElJI.approve.call(addresshKPpDbH, uintUaLvJ3u, {from: accounts[1]});
		const uint256Fq5xYrK = await UFragmentsAZElJI.calRebase.call({from: accounts[1]});

		assert.equal(uint256zis4HPS, BigInt("0"))
		await expect(UFragmentsAZElJI.transferFrom.call(addresstwmzgvd, addressjNNzjFv, uintG2F6HR6, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsAZElJI = await UFragments.new({from: accounts[1]});
		const addressQLQC3LF = accounts[3]
		const stringqUhYDwk = await UFragmentsAZElJI.symbol.call({from: accounts[1]});
		const addressR4NwHfQ = await UFragmentsAZElJI.initialize.call(addressQLQC3LF, {from: accounts[2]});
		await UFragmentsAZElJI.renounceOwnership.call({from: accounts[2]});
		const addressOE2xvIs = await UFragmentsAZElJI.owner.call({from: accounts[3]});
		const uint256Fq5xYrK = await UFragmentsAZElJI.calRebase.call({from: accounts[1]});
		const uint256ZtEWJp1 = await UFragmentsAZElJI.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(stringqUhYDwk, "")
		await expect(UFragmentsAZElJI.initialize.call(addressQLQC3LF, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsASN8am = await UFragments.new({from: "0x0000000000000000000000000000000000000001"});
		const addresskFM7USF = accounts[1]
		const uintdGUoxR = BigInt("176")
		const addressQ1LatG = accounts[2]
		const addressJCBVq8i = accounts[0]
		const stringAQ12ieV = await UFragmentsASN8am.name.call({from: accounts[1]});
		const addressPF6UkW = await UFragmentsASN8am.initialize.call(addresskFM7USF, {from: accounts[0]});
		const boolFBjPvHt = await UFragmentsASN8am.transferFrom.call(addressJCBVq8i, addressQ1LatG, uintdGUoxR, {from: accounts[1]});
		await UFragmentsASN8am.renounceOwnership.call({from: accounts[3]});
	});
})