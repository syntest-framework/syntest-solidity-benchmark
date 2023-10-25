const UFragments = artifacts.require("UFragments");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('UFragments', (accounts) => {
	it('test for UFragments', async () => {
		const UFragmentsLKeH3ww = await UFragments.new({from: accounts[3]});
		const addressFvWnSJH = accounts[2]
		const addresscgc8zzO = accounts[0]
		const boolFk7luCZ = await UFragmentsLKeH3ww.isOwner.call({from: accounts[4]});
		const uint256DgUQlAu = await UFragmentsLKeH3ww.allowance.call(addresscgc8zzO, addressFvWnSJH, {from: accounts[1]});
//		await UFragmentsLKeH3ww.onlyOwner.call({from: accounts[0]});

		assert.equal(boolFk7luCZ, false)
		assert.equal(uint256DgUQlAu, BigInt("0"))
		await expect(UFragmentsLKeH3ww.onlyOwner.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsbtNqad5 = await UFragments.new({from: accounts[0]});
		const addressKA8zcWa = accounts[2]
		const intfvzbKIY = BigInt("-1374")
		const intk1pcrtz = BigInt("590")
		const uintHqVRuLI = BigInt("483")
		const addressxhnCFBL = accounts[1]
//		const addressPsVuygQ = await UFragmentsbtNqad5.initialize.call(addressKA8zcWa, {from: accounts[3]});
//		const int256MF6jOXy = await UFragmentsbtNqad5.add.call(intk1pcrtz, intfvzbKIY, {from: accounts[2]});
//		const boolSPiDaeN = await UFragmentsbtNqad5.approve.call(addressxhnCFBL, uintHqVRuLI, {from: accounts[5]});

		await expect(UFragmentsbtNqad5.initialize.call(addressKA8zcWa, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsl1RkTN = await UFragments.new({from: accounts[0]});
		const uint256Ps6AGky = await UFragmentsl1RkTN.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
		const boolLyxeTrg = await UFragmentsl1RkTN.isOwner.call({from: accounts[0]});
//		await UFragmentsl1RkTN.onlyOwner.call({from: accounts[1]});

		assert.equal(boolLyxeTrg, false)
		assert.equal(uint256Ps6AGky, BigInt("0"))
		await expect(UFragmentsl1RkTN.onlyOwner.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsl8Ouux = await UFragments.new({from: accounts[0]});
		const addressSLWyJh0 = accounts[4]
		const uintsIjZsE9 = BigInt("240")
		const addressdHqcCJA = accounts[5]
		const uintDWO1TF9 = BigInt("582")
		const addressd9uwETI = accounts[2]
		const addressuJq8R73 = accounts[3]
		const uint8BBHRZCW = await UFragmentsl8Ouux.decimals.call({from: accounts[1]});
//		await UFragmentsl8Ouux.onlyOwner.call({from: accounts[4]});
//		const addressqsdmrXY = await UFragmentsl8Ouux.initialize.call(addressSLWyJh0, {from: accounts[4]});
//		const boolijyYgKR = await UFragmentsl8Ouux.transfer.call(addressdHqcCJA, uintsIjZsE9, {from: accounts[0]});
//		const boolPWLVzuN = await UFragmentsl8Ouux.transferFrom.call(addressuJq8R73, addressd9uwETI, uintDWO1TF9, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint8BBHRZCW, BigInt("0"))
		await expect(UFragmentsl8Ouux.onlyOwner.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsTJ7bUJK = await UFragments.new({from: accounts[4]});
		const uinta7RokRO = BigInt("1639")
		const addressIFNk8aH = accounts[2]
//		await UFragmentsTJ7bUJK.renounceOwnership.call({from: accounts[3]});
//		const stringlnrOOLn = await UFragmentsTJ7bUJK.symbol.call({from: accounts[1]});
//		await UFragmentsTJ7bUJK.onlyOwner.call({from: accounts[0]});
//		const boolj18sHNq = await UFragmentsTJ7bUJK.transfer.call(addressIFNk8aH, uinta7RokRO, {from: accounts[4]});
//		const uint8mrtQGYT = await UFragmentsTJ7bUJK.decimals.call({from: accounts[1]});

		await expect(UFragmentsTJ7bUJK.renounceOwnership.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsTEqSx7P = await UFragments.new({from: "0x0000000000000000000000000000000000000001"});
		const uint256NgnN0Og = await UFragmentsTEqSx7P.totalSupply.call({from: accounts[4]});
		const uint256lDMvMXv = await UFragmentsTEqSx7P.calRebase.call({from: accounts[1]});
		const boolNRCcewI = await UFragmentsTEqSx7P.rebaseTimeInfo.call({from: accounts[1]});
	});

	it('test for UFragments', async () => {
		const UFragmentsU9p5f1m = await UFragments.new({from: accounts[4]});
		const uintaq8u5qt = BigInt("98")
		const stringY8E0dCk = "lr9swyeT2JZYKyNsEyHb"
		const stringeFuRTtc = "o9vTAMyybWJzksoYEOdvibYXLlwyqQj4F"
		const addressP5dvgDb = accounts[0]
		const intXtJ1VVA = BigInt("76")
		const intKRQhYs = BigInt("-837")
		const stringrAxBNxl = await UFragmentsU9p5f1m.initialize.call(stringeFuRTtc, stringY8E0dCk, uintaq8u5qt, {from: accounts[2]});
//		const addressfdcXz9v = await UFragmentsU9p5f1m.initialize.call(addressP5dvgDb, {from: accounts[3]});
//		const stringIpmlSae = await UFragmentsU9p5f1m.name.call({from: accounts[1]});
//		const int256cO2ldxv = await UFragmentsU9p5f1m.mul.call(intKRQhYs, intXtJ1VVA, {from: accounts[5]});
//		await UFragmentsU9p5f1m.initializer.call({from: accounts[4]});

		await expect(UFragmentsU9p5f1m.initialize.call(addressP5dvgDb, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsC0s8iEt = await UFragments.new({from: accounts[0]});
		const addressBhWAUuY = accounts[3]
		const uintNebF8ms = BigInt("1050")
		const addressh4XKbSW = accounts[5]
		const addressqohwIHt = accounts[4]
//		const uint256nIDu3jn = await UFragmentsC0s8iEt.calRebase.call({from: "0x0000000000000000000000000000000000000001"});
//		const addressNm2ja6h = await UFragmentsC0s8iEt.initialize.call(addressBhWAUuY, {from: accounts[2]});
//		await UFragmentsC0s8iEt.onlyOwner.call({from: accounts[2]});
//		const boolOSJvRiD = await UFragmentsC0s8iEt.transferFrom.call(addressqohwIHt, addressh4XKbSW, uintNebF8ms, {from: accounts[1]});
//		await UFragmentsC0s8iEt.renounceOwnership.call({from: accounts[0]});

		await expect(UFragmentsC0s8iEt.calRebase.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsrwhRzk8 = await UFragments.new({from: accounts[1]});
		const uintQy1jU8J = BigInt("1710")
		const addresslKk3yEM = accounts[4]
		const intR7Yt0fW = BigInt("-1343")
		const intA34YZl = BigInt("-815")
//		const boolcYfY4IN = await UFragmentsrwhRzk8.transfer.call(addresslKk3yEM, uintQy1jU8J, {from: accounts[2]});
//		await UFragmentsrwhRzk8.renounceOwnership.call({from: accounts[0]});
//		const int256MSeyPtk = await UFragmentsrwhRzk8.add.call(intA34YZl, intR7Yt0fW, {from: accounts[2]});

		await expect(UFragmentsrwhRzk8.transfer.call(addresslKk3yEM, uintQy1jU8J, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsrwhRzk8 = await UFragments.new({from: accounts[1]});
		const uintPVO1euO = BigInt("480")
		const addressHs52C8 = accounts[3]
		const addressmTL4S8r = accounts[0]
		const uinthVDCkks = BigInt("1369")
		const address9YnvHO = accounts[2]
//		const boolY72QRhq = await UFragmentsrwhRzk8.transferFrom.call(addressmTL4S8r, addressHs52C8, uintPVO1euO, {from: accounts[3]});
//		await UFragmentsrwhRzk8.renounceOwnership.call({from: accounts[0]});
//		const addresspHdDAAx = await UFragmentsrwhRzk8.initRebase.call(address9YnvHO, uinthVDCkks, {from: accounts[4]});

		await expect(UFragmentsrwhRzk8.transferFrom.call(addressmTL4S8r, addressHs52C8, uintPVO1euO, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsrwhRzk8 = await UFragments.new({from: accounts[1]});
		const stringIBZ9Ivt = await UFragmentsrwhRzk8.name.call({from: accounts[2]});
//		await UFragmentsrwhRzk8.renounceOwnership.call({from: accounts[0]});

		assert.equal(stringIBZ9Ivt, "")
		await expect(UFragmentsrwhRzk8.renounceOwnership.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentslHw7RL = await UFragments.new({from: accounts[5]});
		const uintuRTHA11 = BigInt("1214")
		const addressmx0g6W8 = accounts[2]
		const intnQbqGsU = BigInt("-817")
		const intz0J2t4A = BigInt("-938")
		const addressITsHvs = accounts[4]
		const stringKJU97MG = await UFragmentslHw7RL.symbol.call({from: accounts[2]});
		const uint8d1ij5J2 = await UFragmentslHw7RL.decimals.call({from: accounts[3]});
//		const boolu1zBniX = await UFragmentslHw7RL.transfer.call(addressmx0g6W8, uintuRTHA11, {from: "0x0000000000000000000000000000000000000001"});
//		const int256f20mWKO = await UFragmentslHw7RL.div.call(intz0J2t4A, intnQbqGsU, {from: accounts[3]});
//		const addressWRsMMh8 = await UFragmentslHw7RL.transferOwnership.call(addressITsHvs, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(stringKJU97MG, "")
		assert.equal(uint8d1ij5J2, BigInt("0"))
		await expect(UFragmentslHw7RL.transfer.call(addressmx0g6W8, uintuRTHA11, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsrwhRzk8 = await UFragments.new({from: accounts[1]});
		const addresskPGrOr4 = await UFragmentsrwhRzk8.owner.call({from: accounts[1]});
		const stringIBZ9Ivt = await UFragmentsrwhRzk8.name.call({from: accounts[2]});

		assert.equal(addresskPGrOr4, 0x0000000000000000000000000000000000000000)
		assert.equal(stringIBZ9Ivt, "")
	});

	it('test for UFragments', async () => {
		const UFragmentsrwhRzk8 = await UFragments.new({from: accounts[1]});
		const uinteklMdNf = BigInt("441")
		const addresstvAA7v = accounts[2]
		const stringIBZ9Ivt = await UFragmentsrwhRzk8.name.call({from: accounts[2]});
		const boolcfR0Tje = await UFragmentsrwhRzk8.approve.call(addresstvAA7v, uinteklMdNf, {from: accounts[4]});

		assert.equal(boolcfR0Tje, true)
		assert.equal(stringIBZ9Ivt, "")
	});

	it('test for UFragments', async () => {
		const UFragmentsrwhRzk8 = await UFragments.new({from: accounts[1]});
		const uintdMnJWwk = BigInt("1530")
		const addressi0Bne5o = accounts[1]
		const stringIBZ9Ivt = await UFragmentsrwhRzk8.name.call({from: accounts[2]});
		const booliUqYM6Q = await UFragmentsrwhRzk8.rebaseTimeInfo.call({from: accounts[4]});
//		const booluJaNrWB = await UFragmentsrwhRzk8.transfer.call(addressi0Bne5o, uintdMnJWwk, {from: accounts[4]});

		assert.equal(stringIBZ9Ivt, "")
		await expect(UFragmentsrwhRzk8.transfer.call(addressi0Bne5o, uintdMnJWwk, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})