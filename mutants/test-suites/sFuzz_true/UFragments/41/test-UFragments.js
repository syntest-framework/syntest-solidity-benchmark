const UFragments = artifacts.require("UFragments");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('UFragments', (accounts) => {
	it('test for UFragments', async () => {
		const UFragmentsBtPgCeW = await UFragments.new({from: accounts[0]});
		const addresscEq3qs0 = "0x0000000000000000000000000000000000000001"
		const addressAD5SMaW = accounts[4]
		const uint256oph5sS3 = await UFragmentsBtPgCeW.allowance.call(addressAD5SMaW, addresscEq3qs0, {from: accounts[3]});
//		await UFragmentsBtPgCeW.renounceOwnership.call({from: accounts[3]});
//		await UFragmentsBtPgCeW.renounceOwnership.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256oph5sS3, BigInt("0"))
		await expect(UFragmentsBtPgCeW.renounceOwnership.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsNP6nbWw = await UFragments.new({from: accounts[1]});
		const intcVgRZqr = BigInt("-1458")
		const intJInBdvp = BigInt("373")
		const intXwBnkHS = BigInt("333")
		const intZFMVGN = BigInt("941")
		const intQ67CLZE = BigInt("1468")
		const intso1Wngu = BigInt("-2020")
//		const int256BQazTVu = await UFragmentsNP6nbWw.add.call(intJInBdvp, intcVgRZqr, {from: accounts[1]});
//		await UFragmentsNP6nbWw.renounceOwnership.call({from: accounts[3]});
//		const stringXku2oOI = await UFragmentsNP6nbWw.symbol.call({from: accounts[3]});
//		const int256pTNRg35 = await UFragmentsNP6nbWw.div.call(intZFMVGN, intXwBnkHS, {from: accounts[4]});
//		const int256n3Ow4A = await UFragmentsNP6nbWw.div.call(intso1Wngu, intQ67CLZE, {from: accounts[0]});

		await expect(UFragmentsNP6nbWw.add.call(intJInBdvp, intcVgRZqr, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsb0Tx25 = await UFragments.new({from: "0x0000000000000000000000000000000000000001"});
		const intiB4Xwn = BigInt("-839")
		const intRvpBAn = BigInt("643")
		const int256X8dhlM = await UFragmentsb0Tx25.mul.call(intRvpBAn, intiB4Xwn, {from: accounts[3]});
		await UFragmentsb0Tx25.renounceOwnership.call({from: accounts[1]});
	});

	it('test for UFragments', async () => {
		const UFragmentsfapGu67 = await UFragments.new({from: accounts[5]});
		const addressXTUjLX8 = accounts[2]
		const addressOJtKAgC = accounts[2]
		const uintFxnYogo = BigInt("562")
		const addressGYOtOoy = accounts[0]
		const intUTUO4Bj = BigInt("59")
		const addressToWlhrN = accounts[5]
		const uint256fOuxcp = await UFragmentsfapGu67.allowance.call(addressOJtKAgC, addressXTUjLX8, {from: accounts[0]});
		const uint8yAM07t3 = await UFragmentsfapGu67.decimals.call({from: accounts[1]});
//		const addressGoKU2Zh = await UFragmentsfapGu67.initRebase.call(addressGYOtOoy, uintFxnYogo, {from: accounts[3]});
//		const int256pdYXEbT = await UFragmentsfapGu67.abs.call(intUTUO4Bj, {from: accounts[2]});
//		await UFragmentsfapGu67.renounceOwnership.call({from: accounts[3]});
//		const addressTMsKq5V = await UFragmentsfapGu67.transferOwnership.call(addressToWlhrN, {from: accounts[5]});

		assert.equal(uint256fOuxcp, BigInt("0"))
		assert.equal(uint8yAM07t3, BigInt("0"))
		await expect(UFragmentsfapGu67.initRebase.call(addressGYOtOoy, uintFxnYogo, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsh5qplzz = await UFragments.new({from: accounts[3]});
		const uintCrZhGc1 = BigInt("1972")
		const addressstWLXc = accounts[5]
		const uint7UluB0 = BigInt("218")
		const stringvnPCsxK = "TJRl892xY92yUeo5JCbgqgaHTo4kxp6XaklzzccmcAWU74x2uyipvnk9"
		const stringtTwtzB4 = "AaE0uBa6PbwcQjYHAH8sHfFgVEWYzo3wKOkrOUemk8krTNN8gH2hRUyI"
		const inthTwMCTk = BigInt("1971")
		const intf3QcFSg = BigInt("-243")
//		const boolxqVjx9H = await UFragmentsh5qplzz.transfer.call(addressstWLXc, uintCrZhGc1, {from: accounts[1]});
//		const stringYBuIc5P = await UFragmentsh5qplzz.initialize.call(stringtTwtzB4, stringvnPCsxK, uint7UluB0, {from: accounts[0]});
//		const int256VMCIqj = await UFragmentsh5qplzz.div.call(intf3QcFSg, inthTwMCTk, {from: "0x0000000000000000000000000000000000000001"});

		await expect(UFragmentsh5qplzz.transfer.call(addressstWLXc, uintCrZhGc1, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsegepZXQ = await UFragments.new({from: accounts[4]});
		const uintQuhZSW = BigInt("1039")
		const addressa3qu73P = accounts[2]
		const addressELWleJZ = accounts[3]
		const intaddlzi = BigInt("783")
		const boolpDt2y2V = await UFragmentsegepZXQ.approve.call(addressa3qu73P, uintQuhZSW, {from: accounts[4]});
//		const addresse43AZ69 = await UFragmentsegepZXQ.transferOwnership.call(addressELWleJZ, {from: accounts[3]});
//		const stringsj2UVeO = await UFragmentsegepZXQ.name.call({from: accounts[0]});
//		const boolQVx6zvI = await UFragmentsegepZXQ.isOwner.call({from: accounts[3]});
//		const int256iepoBT9 = await UFragmentsegepZXQ.abs.call(intaddlzi, {from: accounts[5]});

		assert.equal(boolpDt2y2V, true)
		await expect(UFragmentsegepZXQ.transferOwnership.call(addressELWleJZ, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsnKvR6z0 = await UFragments.new({from: accounts[2]});
		const uintykgg3kB = BigInt("195")
		const stringxY3nmoW = "kQYo8vtlSLbcnQYGTCTHalKxHVW1gVUrf142GahXGRXiVvy1LMcmByNlgPkGZ7Rl1cnddmhFHP2lE8AxgyH"
		const stringOCl5hh = "ECDPOeT60"
		const uinte6FM1D8 = BigInt("997")
		const addressovrS6pl = accounts[4]
		const intnusZNtd = BigInt("451")
		const intACmAPuF = BigInt("1761")
		const stringOWlBRy = await UFragmentsnKvR6z0.initialize.call(stringOCl5hh, stringxY3nmoW, uintykgg3kB, {from: accounts[1]});
		const boolRE2Kc4B = await UFragmentsnKvR6z0.approve.call(addressovrS6pl, uinte6FM1D8, {from: accounts[3]});
//		const int256Fk9jIKz = await UFragmentsnKvR6z0.add.call(intACmAPuF, intnusZNtd, {from: accounts[0]});

		assert.equal(boolRE2Kc4B, true)
		await expect(UFragmentsnKvR6z0.add.call(intACmAPuF, intnusZNtd, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentseWKpKqW = await UFragments.new({from: accounts[0]});
		const intPCoj4MT = BigInt("-1750")
		const intV78uhoj = BigInt("472")
		const uintO65ikU = BigInt("130")
		const address22mId1 = accounts[4]
		const boolDlgb8SO = await UFragmentseWKpKqW.isOwner.call({from: "0x0000000000000000000000000000000000000001"});
		const stringoeW84qN = await UFragmentseWKpKqW.symbol.call({from: accounts[1]});
//		const int256jLko1uB = await UFragmentseWKpKqW.div.call(intV78uhoj, intPCoj4MT, {from: accounts[3]});
//		const uint8DQRAWVh = await UFragmentseWKpKqW.decimals.call({from: accounts[2]});
//		const addressdWJ56Cn = await UFragmentseWKpKqW.initRebase.call(address22mId1, uintO65ikU, {from: accounts[3]});

		assert.equal(boolDlgb8SO, false)
		assert.equal(stringoeW84qN, "")
		await expect(UFragmentseWKpKqW.div.call(intV78uhoj, intPCoj4MT, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsFpm4wIL = await UFragments.new({from: accounts[3]});
		const addresstPdfCjZ = accounts[2]
		const addressUk7bCXB = "0x0000000000000000000000000000000000000001"
		const stringULqtiEA = await UFragmentsFpm4wIL.name.call({from: accounts[2]});
		const stringR6vZZ08 = await UFragmentsFpm4wIL.name.call({from: accounts[2]});
		const uint256yQKNPX2 = await UFragmentsFpm4wIL.allowance.call(addressUk7bCXB, addresstPdfCjZ, {from: accounts[4]});
		const stringPhFvRdF = await UFragmentsFpm4wIL.symbol.call({from: accounts[1]});

		assert.equal(stringPhFvRdF, "")
		assert.equal(stringR6vZZ08, "")
		assert.equal(stringULqtiEA, "")
		assert.equal(uint256yQKNPX2, BigInt("0"))
	});

	it('test for UFragments', async () => {
		const UFragmentsh5qplzz = await UFragments.new({from: accounts[3]});
		const uintRYGgMGD = BigInt("1972")
		const addressOPvCY6t = accounts[5]
		const uintd41TbnG = BigInt("967")
		const addressdJRD2m6 = accounts[0]
		const intKTxZDAm = BigInt("1973")
		const intRepYLH = BigInt("-243")
		const uint256eVC26MD = await UFragmentsh5qplzz.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
//		const boolxqVjx9H = await UFragmentsh5qplzz.transfer.call(addressOPvCY6t, uintRYGgMGD, {from: accounts[1]});
//		const boolr7lBF1B = await UFragmentsh5qplzz.transfer.call(addressdJRD2m6, uintd41TbnG, {from: accounts[3]});
//		const int256VMCIqj = await UFragmentsh5qplzz.div.call(intRepYLH, intKTxZDAm, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256eVC26MD, BigInt("0"))
		await expect(UFragmentsh5qplzz.transfer.call(addressOPvCY6t, uintRYGgMGD, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsEJYkgYb = await UFragments.new({from: accounts[2]});
		const uintJz87Lpf = BigInt("1056")
		const addresslTkvNgZ = accounts[4]
		const addressaxlq3kH = accounts[4]
//		const booldoHUpm6 = await UFragmentsEJYkgYb.transferFrom.call(addressaxlq3kH, addresslTkvNgZ, uintJz87Lpf, {from: accounts[5]});
//		await UFragmentsEJYkgYb.onlyOwner.call({from: accounts[4]});
//		const stringAjXLrE8 = await UFragmentsEJYkgYb.name.call({from: accounts[4]});

		await expect(UFragmentsEJYkgYb.transferFrom.call(addressaxlq3kH, addresslTkvNgZ, uintJz87Lpf, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsh5qplzz = await UFragments.new({from: accounts[3]});
		const uintnyU95gg = BigInt("0")
		const addressKEW9El = accounts[6]
		const boolxqVjx9H = await UFragmentsh5qplzz.transfer.call(addressKEW9El, uintnyU95gg, {from: accounts[1]});
//		await UFragmentsh5qplzz.initializer.call({from: accounts[4]});

		assert.equal(boolxqVjx9H, true)
		await expect(UFragmentsh5qplzz.initializer.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsvpT7bYq = await UFragments.new({from: accounts[0]});
		const addressyRmTlu6 = accounts[1]
		const uintV41lPqn = BigInt("36")
		const stringEdOVSYz = "BICpKw3diq5jdtpy4OPzxDeLqORtIss2CEXnEePTgITmqqj4rMbSKv9qEO17fAWUVI1WpgbDO"
		const stringjRlauFa = "2QxxBxzoLMmFx4GMNCCWARqrgdK03bnU2gHvuYnD6JaeS6kSkUNwnzPHC3loLOpHUM64b2qNXsraDoLJpNRG5d"
//		const addressaqyLqW7 = await UFragmentsvpT7bYq.initialize.call(addressyRmTlu6, {from: accounts[0]});
//		const stringmfvzot1 = await UFragmentsvpT7bYq.initialize.call(stringjRlauFa, stringEdOVSYz, uintV41lPqn, {from: accounts[4]});
//		const stringFNndtYk = await UFragmentsvpT7bYq.symbol.call({from: accounts[0]});

		await expect(UFragmentsvpT7bYq.initialize.call(addressyRmTlu6, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsh5qplzz = await UFragments.new({from: accounts[3]});
		const uintaTu7Hxk = BigInt("1972")
		const addressh8wgIHe = accounts[6]
//		const uint256zGEL2SC = await UFragmentsh5qplzz.calRebase.call({from: accounts[2]});
//		const boolxqVjx9H = await UFragmentsh5qplzz.transfer.call(addressh8wgIHe, uintaTu7Hxk, {from: accounts[1]});

		await expect(UFragmentsh5qplzz.calRebase.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsXN4LCJ = await UFragments.new({from: accounts[0]});
		const intOnXN9PN = BigInt("-271")
		const intA0VSZd = BigInt("-1082")
		const intmxW8dWO = BigInt("-1244")
		const intcAYancc = BigInt("1807")
		const addressYOByIXX = await UFragmentsXN4LCJ.owner.call({from: accounts[1]});
		const boolhRIfiCC = await UFragmentsXN4LCJ.isOwner.call({from: accounts[4]});
//		const int256PsYx2x9 = await UFragmentsXN4LCJ.add.call(intA0VSZd, intOnXN9PN, {from: accounts[4]});
//		const int256LXKOndp = await UFragmentsXN4LCJ.sub.call(intcAYancc, intmxW8dWO, {from: accounts[1]});

		assert.equal(addressYOByIXX, 0x0000000000000000000000000000000000000000)
		assert.equal(boolhRIfiCC, false)
		await expect(UFragmentsXN4LCJ.add.call(intA0VSZd, intOnXN9PN, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsh5qplzz = await UFragments.new({from: accounts[3]});
		const uintLKq86UU = BigInt("1838")
		const addressqB2Zvn2 = accounts[4]
		const uintudN7lg = BigInt("1972")
		const addressXBKWJi7 = accounts[7]
		const boolld1yYOt = await UFragmentsh5qplzz.rebaseTimeInfo.call({from: accounts[4]});
		const boolO4hcCuT = await UFragmentsh5qplzz.approve.call(addressqB2Zvn2, uintLKq86UU, {from: accounts[3]});
//		const boolxqVjx9H = await UFragmentsh5qplzz.transfer.call(addressXBKWJi7, uintudN7lg, {from: accounts[1]});

		assert.equal(boolO4hcCuT, true)
		await expect(UFragmentsh5qplzz.transfer.call(addressXBKWJi7, uintudN7lg, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})