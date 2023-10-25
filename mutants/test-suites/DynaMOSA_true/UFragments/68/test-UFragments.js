const UFragments = artifacts.require("UFragments");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('UFragments', (accounts) => {
	it('test for UFragments', async () => {
		const UFragmentsKVy7y6 = await UFragments.new({from: accounts[3]});
		const uintmqviXrF = BigInt("2038")
		const addressMx14wMo = "0x0000000000000000000000000000000000000001"
		const stringf8oC2Og = await UFragmentsKVy7y6.name.call({from: accounts[2]});
		const stringamazlT8 = await UFragmentsKVy7y6.symbol.call({from: accounts[3]});
		const uint8TCSyE6 = await UFragmentsKVy7y6.decimals.call({from: accounts[3]});
//		const addressGD8eUu = await UFragmentsKVy7y6.initRebase.call(addressMx14wMo, uintmqviXrF, {from: accounts[1]});

		assert.equal(stringamazlT8, "")
		assert.equal(stringf8oC2Og, "")
		assert.equal(uint8TCSyE6, BigInt("0"))
		await expect(UFragmentsKVy7y6.initRebase.call(addressMx14wMo, uintmqviXrF, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentss1GaUEl = await UFragments.new({from: accounts[0]});
		const uintgRMfBH = BigInt("1727")
		const addressb1WhJeY = accounts[2]
		const addressS8OdLrs = accounts[0]
		const uintMDkTok7 = BigInt("481")
		const addressTxfYmqr = accounts[1]
//		const boolhlhhcC4 = await UFragmentss1GaUEl.transferFrom.call(addressS8OdLrs, addressb1WhJeY, uintgRMfBH, {from: accounts[4]});
//		const uint256KuspMJD = await UFragmentss1GaUEl.totalSupply.call({from: accounts[1]});
//		const uint8UMcQlqW = await UFragmentss1GaUEl.decimals.call({from: accounts[4]});
//		const booloNQNdoI = await UFragmentss1GaUEl.transfer.call(addressTxfYmqr, uintMDkTok7, {from: accounts[4]});

		await expect(UFragmentss1GaUEl.transferFrom.call(addressS8OdLrs, addressb1WhJeY, uintgRMfBH, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsy4w4iNA = await UFragments.new({from: accounts[0]});
		const addresssyzipt3 = accounts[3]
		const boolSFRp5xF = await UFragmentsy4w4iNA.rebaseTimeInfo.call({from: accounts[4]});
//		const addressfsOYyin = await UFragmentsy4w4iNA.initialize.call(addresssyzipt3, {from: accounts[1]});

		await expect(UFragmentsy4w4iNA.initialize.call(addresssyzipt3, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsPKTGNuG = await UFragments.new({from: accounts[0]});
		const uint8Kxi3Adn = await UFragmentsPKTGNuG.decimals.call({from: accounts[0]});
//		await UFragmentsPKTGNuG.initializer.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256WYLq6FC = await UFragmentsPKTGNuG.calRebase.call({from: accounts[3]});
//		await UFragmentsPKTGNuG.initializer.call({from: accounts[2]});

		assert.equal(uint8Kxi3Adn, BigInt("0"))
		await expect(UFragmentsPKTGNuG.initializer.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsMbdmGt6 = await UFragments.new({from: accounts[1]});
		const uinth6UB7JS = BigInt("34")
		const stringCuKoass = "LkMk6KgaBWk2Fx88tN5mOS6dssVyEVv6ugYthGi983IgUz"
		const stringMGhFEk = "dDJGYcqF1u1SdItdLBFBvx4clcCBmDBMm0"
		const int5ctiTS = BigInt("-505")
		const addressbGXkxO7 = accounts[0]
		const addressq1W4nNR = accounts[0]
		const addressCMfouxA = accounts[4]
		const stringJcPrOoW = await UFragmentsMbdmGt6.initialize.call(stringMGhFEk, stringCuKoass, uinth6UB7JS, {from: accounts[2]});
//		const int256Tqm9xQO = await UFragmentsMbdmGt6.abs.call(int5ctiTS, {from: accounts[0]});
//		const addressi4ujCXY = await UFragmentsMbdmGt6.initialize.call(addressbGXkxO7, {from: accounts[2]});
//		const uint256u6101sR = await UFragmentsMbdmGt6.allowance.call(addressCMfouxA, addressq1W4nNR, {from: accounts[3]});

		await expect(UFragmentsMbdmGt6.abs.call(int5ctiTS, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsTJlRAQ = await UFragments.new({from: accounts[0]});
		const addressd0HmftH = accounts[4]
		const addressfCRnJlH = accounts[0]
		const addressafop28S = accounts[3]
		const addressOVNAns = accounts[4]
		const uint256Jailgy8 = await UFragmentsTJlRAQ.allowance.call(addressfCRnJlH, addressd0HmftH, {from: accounts[3]});
//		const addresskbqeFSp = await UFragmentsTJlRAQ.initialize.call(addressafop28S, {from: "0x0000000000000000000000000000000000000001"});
//		await UFragmentsTJlRAQ.renounceOwnership.call({from: accounts[2]});
//		const uint256gVTtJh4 = await UFragmentsTJlRAQ.balanceOf.call(addressOVNAns, {from: accounts[3]});

		assert.equal(uint256Jailgy8, BigInt("0"))
		await expect(UFragmentsTJlRAQ.initialize.call(addressafop28S, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsO8Sxmx = await UFragments.new({from: accounts[4]});
		const uintrgLjZNw = BigInt("1384")
		const addressYQMNvPB = accounts[3]
		const uintpCd0JTx = BigInt("55")
		const addressyxS2Ad4 = accounts[1]
		const boolPSDwkgC = await UFragmentsO8Sxmx.isOwner.call({from: accounts[4]});
		const boolKrUJEsn = await UFragmentsO8Sxmx.approve.call(addressYQMNvPB, uintrgLjZNw, {from: accounts[4]});
		const addressx7U6xlU = await UFragmentsO8Sxmx.owner.call({from: accounts[2]});
//		await UFragmentsO8Sxmx.onlyOwner.call({from: accounts[3]});
//		const uint256JTeEbm = await UFragmentsO8Sxmx.totalSupply.call({from: accounts[4]});
//		const boolSUN3yB = await UFragmentsO8Sxmx.approve.call(addressyxS2Ad4, uintpCd0JTx, {from: accounts[2]});

		assert.equal(addressx7U6xlU, 0x0000000000000000000000000000000000000000)
		assert.equal(boolKrUJEsn, true)
		assert.equal(boolPSDwkgC, false)
		await expect(UFragmentsO8Sxmx.onlyOwner.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentss10tkLS = await UFragments.new({from: "0x0000000000000000000000000000000000000001"});
		const addressRZ5QhaS = accounts[4]
		const addressOSOni2H = accounts[4]
		const stringKpj6KFW = await UFragmentss10tkLS.symbol.call({from: accounts[3]});
		const uint256JNvhLa = await UFragmentss10tkLS.allowance.call(addressOSOni2H, addressRZ5QhaS, {from: accounts[0]});
		const boolEjAxrAR = await UFragmentss10tkLS.isOwner.call({from: accounts[4]});
		const stringPSGq5IH = await UFragmentss10tkLS.symbol.call({from: accounts[1]});
	});

	it('test for UFragments', async () => {
		const UFragmentss1GaUEl = await UFragments.new({from: accounts[0]});
		const uintJDE8tsB = BigInt("1368")
		const addressyK47cKL = accounts[0]
		const uintezp0rnN = BigInt("1726")
		const addressqQddoz0 = accounts[2]
		const addressNuF4RS7 = accounts[0]
		const stringze4cccv = await UFragmentss1GaUEl.symbol.call({from: accounts[0]});
		const uint8pFqdmxX = await UFragmentss1GaUEl.decimals.call({from: accounts[4]});
//		const boolkpOxlZH = await UFragmentss1GaUEl.transfer.call(addressyK47cKL, uintJDE8tsB, {from: accounts[0]});
//		const boolhlhhcC4 = await UFragmentss1GaUEl.transferFrom.call(addressNuF4RS7, addressqQddoz0, uintezp0rnN, {from: accounts[4]});
//		const uint256KuspMJD = await UFragmentss1GaUEl.totalSupply.call({from: accounts[1]});
//		await UFragmentss1GaUEl.onlyOwner.call({from: accounts[2]});
//		const uint8UMcQlqW = await UFragmentss1GaUEl.decimals.call({from: accounts[4]});

		assert.equal(stringze4cccv, "")
		assert.equal(uint8pFqdmxX, BigInt("0"))
		await expect(UFragmentss1GaUEl.transfer.call(addressyK47cKL, uintJDE8tsB, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsy4w4iNA = await UFragments.new({from: accounts[0]});
		const addressf7BvuX7 = accounts[3]
//		const uint256CyGzbbd = await UFragmentsy4w4iNA.calRebase.call({from: accounts[1]});
//		const addressfsOYyin = await UFragmentsy4w4iNA.initialize.call(addressf7BvuX7, {from: accounts[1]});

		await expect(UFragmentsy4w4iNA.calRebase.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentss1GaUEl = await UFragments.new({from: accounts[0]});
		const uintgNfsl3K = BigInt("481")
		const addressuNYatHC = accounts[1]
		const uint256KuspMJD = await UFragmentss1GaUEl.totalSupply.call({from: accounts[1]});
//		const booloNQNdoI = await UFragmentss1GaUEl.transfer.call(addressuNYatHC, uintgNfsl3K, {from: accounts[4]});

		assert.equal(uint256KuspMJD, BigInt("0"))
		await expect(UFragmentss1GaUEl.transfer.call(addressuNYatHC, uintgNfsl3K, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})