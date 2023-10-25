const UFragments = artifacts.require("UFragments");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('UFragments', (accounts) => {
	it('test for UFragments', async () => {
		const UFragmentskKb1UlA = await UFragments.new({from: accounts[0]});
		const uintlCaZVD5 = BigInt("220")
		const addresssrEDs15 = accounts[3]
		const addressENNQOxg = accounts[4]
		const intiQnW89Q = BigInt("-1023")
		const intBRioaVI = BigInt("504")
		const addressDcFvWiu = accounts[2]
		const uintn9Km3WK = BigInt("1677")
		const addressJCWHdBR = accounts[4]
		const addresskgUUwR = accounts[0]
		const boolyboPlec = await UFragmentskKb1UlA.transferFrom.call(addressENNQOxg, addresssrEDs15, uintlCaZVD5, {from: accounts[1]});
		const int256icjmkXP = await UFragmentskKb1UlA.div.call(intBRioaVI, intiQnW89Q, {from: "0x0000000000000000000000000000000000000001"});
		await UFragmentskKb1UlA.renounceOwnership.call({from: accounts[3]});
		const addressXRUTSIr = await UFragmentskKb1UlA.transferOwnership.call(addressDcFvWiu, {from: accounts[3]});
		const boolBJWZsa8 = await UFragmentskKb1UlA.transferFrom.call(addresskgUUwR, addressJCWHdBR, uintn9Km3WK, {from: accounts[3]});

		await expect(UFragmentskKb1UlA.transferFrom.call(addressENNQOxg, addresssrEDs15, uintlCaZVD5, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsXXpGo0h = await UFragments.new({from: accounts[3]});
		const uintiMHmt4x = BigInt("111")
		const stringrg4obI = "5pj22XWDtk4Nd7ScWt3B2NEG5MNk1tS2krQWld4eR1zf86vXhLatgY1OrjDjjvTucMlz1l9NBCiSTzUI6QoUCzRFnGbd7CRUYwm"
		const stringVG8nrji = "PghWeq8BqxtDROW72QS8HqkGCMevsDXRDJ82CzdCGsIT2FKU"
		const addressWwGGdme = accounts[4]
		const uintqX0RV6G = BigInt("201")
		const addresslp1HWHS = accounts[3]
		const addressqLMVIA8 = accounts[3]
		const addressf5eSnwB = accounts[3]
		const uint8HbNSc3P = await UFragmentsXXpGo0h.decimals.call({from: accounts[1]});
		const stringtRRuCxr = await UFragmentsXXpGo0h.initialize.call(stringVG8nrji, stringrg4obI, uintiMHmt4x, {from: accounts[3]});
		const addressucQOKbp = await UFragmentsXXpGo0h.initialize.call(addressWwGGdme, {from: accounts[4]});
		const boolkzePkPc = await UFragmentsXXpGo0h.transferFrom.call(addressqLMVIA8, addresslp1HWHS, uintqX0RV6G, {from: accounts[2]});
		const addressaQu0Bb = await UFragmentsXXpGo0h.transferOwnership.call(addressf5eSnwB, {from: accounts[1]});

		assert.equal(uint8HbNSc3P, BigInt("0"))
		await expect(UFragmentsXXpGo0h.initialize.call(addressWwGGdme, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsFcJ2D3U = await UFragments.new({from: accounts[0]});
		const uintEZLbLYZ = BigInt("1080")
		const addressqpRWWOf = accounts[5]
		const addressWjNzAI3 = accounts[0]
		const intR9SETYK = BigInt("-1502")
		const intUXRZSlf = BigInt("-448")
		const uintf7AtWij = BigInt("1458")
		const addressXOkAGO = accounts[1]
		const boolCgDnfcl = await UFragmentsFcJ2D3U.approve.call(addressqpRWWOf, uintEZLbLYZ, {from: accounts[1]});
		const addressXoLXMST = await UFragmentsFcJ2D3U.transferOwnership.call(addressWjNzAI3, {from: accounts[1]});
		const int256eKY5FuB = await UFragmentsFcJ2D3U.sub.call(intUXRZSlf, intR9SETYK, {from: accounts[3]});
		const boolWAzAiNk = await UFragmentsFcJ2D3U.transfer.call(addressXOkAGO, uintf7AtWij, {from: accounts[4]});

		assert.equal(boolCgDnfcl, true)
		await expect(UFragmentsFcJ2D3U.transferOwnership.call(addressWjNzAI3, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsNjbK5q = await UFragments.new({from: accounts[0]});
		const intiyVwp8R = BigInt("-1499")
		const intK2Nb9jQ = BigInt("-119")
		const int2561mbHOD = await UFragmentsNjbK5q.div.call(intK2Nb9jQ, intiyVwp8R, {from: accounts[0]});
		const string5RtrO5 = await UFragmentsNjbK5q.name.call({from: accounts[1]});
		const uint256UQNbP2G = await UFragmentsNjbK5q.totalSupply.call({from: accounts[5]});
		await UFragmentsNjbK5q.initializer.call({from: "0x0000000000000000000000000000000000000001"});
		await UFragmentsNjbK5q.renounceOwnership.call({from: accounts[0]});

		await expect(UFragmentsNjbK5q.div.call(intK2Nb9jQ, intiyVwp8R, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsgQ1UsR5 = await UFragments.new({from: accounts[5]});
		const stringdxMHKKL = await UFragmentsgQ1UsR5.name.call({from: accounts[5]});
		const boolLIAMWIG = await UFragmentsgQ1UsR5.isOwner.call({from: accounts[4]});
		await UFragmentsgQ1UsR5.onlyOwner.call({from: accounts[4]});

		assert.equal(boolLIAMWIG, false)
		assert.equal(stringdxMHKKL, "")
		await expect(UFragmentsgQ1UsR5.onlyOwner.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsDyiP0W = await UFragments.new({from: accounts[0]});
		const addresskCcAE1 = accounts[1]
		const addressv0qAjKf = "0x0000000000000000000000000000000000000001"
		const uintuXbtcO0 = BigInt("1520")
		const addressTD9D9Rj = accounts[1]
		const addressYLN9zzZ = accounts[3]
		const addresscCPCPiH = accounts[0]
		const uint256zX9lkcw = await UFragmentsDyiP0W.allowance.call(addressv0qAjKf, addresskCcAE1, {from: accounts[1]});
		const bool8B64e8 = await UFragmentsDyiP0W.transferFrom.call(addressYLN9zzZ, addressTD9D9Rj, uintuXbtcO0, {from: "0x0000000000000000000000000000000000000001"});
		const stringop7Ld9w = await UFragmentsDyiP0W.name.call({from: accounts[4]});
		const addressJMaKnVl = await UFragmentsDyiP0W.initialize.call(addresscCPCPiH, {from: accounts[1]});

		assert.equal(uint256zX9lkcw, BigInt("0"))
		await expect(UFragmentsDyiP0W.transferFrom.call(addressYLN9zzZ, addressTD9D9Rj, uintuXbtcO0, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsXXpGo0h = await UFragments.new({from: accounts[3]});
		const uintJmOecl = BigInt("111")
		const stringrg4obI = "5pj22XWDtk4Nd7ScWt3B2NEG5MNk1tS2krQWld4eR1zf86vXhLatgY1OrjDjjvTucMlz1l9NBCiSTzUI6QoUCzRFnGbd7CRUYwm"
		const stringVG8nrji = "PghWeq8BqxtDROW72QS8HqkGCMevsDXRDJ82CzdCGsIT2FKU"
		const address4Os02r = accounts[4]
		const uintZm03Gwz = BigInt("221")
		const addressvOLeMRM = accounts[3]
		const addressRqSW4ga = accounts[3]
		const addressTDVbqA4 = accounts[3]
		const uint8HbNSc3P = await UFragmentsXXpGo0h.decimals.call({from: accounts[1]});
		const addressnM4apVG = await UFragmentsXXpGo0h.owner.call({from: accounts[3]});
		const stringtRRuCxr = await UFragmentsXXpGo0h.initialize.call(stringVG8nrji, stringrg4obI, uintJmOecl, {from: accounts[3]});
		const addressucQOKbp = await UFragmentsXXpGo0h.initialize.call(address4Os02r, {from: accounts[4]});
		const boolkzePkPc = await UFragmentsXXpGo0h.transferFrom.call(addressRqSW4ga, addressvOLeMRM, uintZm03Gwz, {from: accounts[2]});
		const addressaQu0Bb = await UFragmentsXXpGo0h.transferOwnership.call(addressTDVbqA4, {from: accounts[1]});

		assert.equal(addressnM4apVG, 0x0000000000000000000000000000000000000000)
		assert.equal(uint8HbNSc3P, BigInt("0"))
		await expect(UFragmentsXXpGo0h.initialize.call(address4Os02r, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsmZMpz2O = await UFragments.new({from: accounts[0]});
		const uint21yqDd = BigInt("81")
		const addressub6IL9t = accounts[0]
		const addressWodwctP = accounts[4]
		const uintAvXaK0l = BigInt("1759")
		const addressXjTfxCa = "0x0000000000000000000000000000000000000001"
		const int8YpIEL = BigInt("730")
		const uint256Fz2q9FL = await UFragmentsmZMpz2O.calRebase.call({from: accounts[1]});
		const boolzPi47Xq = await UFragmentsmZMpz2O.transferFrom.call(addressWodwctP, addressub6IL9t, uint21yqDd, {from: accounts[5]});
		const addressnmoLs0x = await UFragmentsmZMpz2O.initRebase.call(addressXjTfxCa, uintAvXaK0l, {from: accounts[1]});
		const int256Inb7Wk1 = await UFragmentsmZMpz2O.abs.call(int8YpIEL, {from: accounts[1]});

		await expect(UFragmentsmZMpz2O.calRebase.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsNjbK5q = await UFragments.new({from: accounts[0]});
		const string5RtrO5 = await UFragmentsNjbK5q.name.call({from: accounts[1]});
		const boolQZps2UU = await UFragmentsNjbK5q.isOwner.call({from: accounts[2]});
		const boolIcor5y = await UFragmentsNjbK5q.isOwner.call({from: accounts[1]});
		const uint256UQNbP2G = await UFragmentsNjbK5q.totalSupply.call({from: accounts[5]});
		await UFragmentsNjbK5q.initializer.call({from: "0x0000000000000000000000000000000000000001"});
		await UFragmentsNjbK5q.renounceOwnership.call({from: accounts[0]});

		assert.equal(boolIcor5y, false)
		assert.equal(boolQZps2UU, false)
		assert.equal(string5RtrO5, "")
		assert.equal(uint256UQNbP2G, BigInt("0"))
		await expect(UFragmentsNjbK5q.initializer.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsDyiP0W = await UFragments.new({from: accounts[0]});
		const addressbOeR2RO = accounts[1]
		const addressBdsk4hC = "0x0000000000000000000000000000000000000001"
		const addressOgqmxCo = accounts[0]
		const uint256zX9lkcw = await UFragmentsDyiP0W.allowance.call(addressBdsk4hC, addressbOeR2RO, {from: accounts[1]});
		const stringop7Ld9w = await UFragmentsDyiP0W.name.call({from: accounts[4]});
		const stringLXr7Rxe = await UFragmentsDyiP0W.symbol.call({from: accounts[5]});
		await UFragmentsDyiP0W.renounceOwnership.call({from: accounts[2]});
		const addressJMaKnVl = await UFragmentsDyiP0W.initialize.call(addressOgqmxCo, {from: accounts[1]});

		assert.equal(stringLXr7Rxe, "")
		assert.equal(stringop7Ld9w, "")
		assert.equal(uint256zX9lkcw, BigInt("0"))
		await expect(UFragmentsDyiP0W.renounceOwnership.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsEVhId5m = await UFragments.new({from: accounts[2]});
		const uintoimFKxC = BigInt("848")
		const addressVh0HsoL = accounts[1]
		const addresstjmDnTD = accounts[0]
		const addressODb9xN2 = accounts[3]
		const boolgaYWlf9 = await UFragmentsEVhId5m.transfer.call(addressVh0HsoL, uintoimFKxC, {from: accounts[0]});
		const stringF4MXcKg = await UFragmentsEVhId5m.symbol.call({from: accounts[1]});
		const addressNvxjpkg = await UFragmentsEVhId5m.transferOwnership.call(addresstjmDnTD, {from: "0x0000000000000000000000000000000000000001"});
		const addressRdGlQMz = await UFragmentsEVhId5m.transferOwnership.call(addressODb9xN2, {from: "0x0000000000000000000000000000000000000001"});

		await expect(UFragmentsEVhId5m.transfer.call(addressVh0HsoL, uintoimFKxC, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsOytEcwO = await UFragments.new({from: "0x0000000000000000000000000000000000000001"});
		const addresss8pmeU9 = accounts[4]
		const intbw4EFZI = BigInt("-1030")
		const addressZ76Xm2W = accounts[2]
		const uint8tVsA0jd = await UFragmentsOytEcwO.decimals.call({from: accounts[2]});
		const uint256SiWKhU1 = await UFragmentsOytEcwO.balanceOf.call(addresss8pmeU9, {from: accounts[3]});
		const int2566m9eFQ = await UFragmentsOytEcwO.abs.call(intbw4EFZI, {from: accounts[4]});
		await UFragmentsOytEcwO.initializer.call({from: accounts[2]});
		const addressnpNBywm = await UFragmentsOytEcwO.initialize.call(addressZ76Xm2W, {from: accounts[5]});
	});

	it('test for UFragments', async () => {
		const UFragmentsM9puRLt = await UFragments.new({from: accounts[4]});
		const intBdtwZF9 = BigInt("-358")
		const intIpioane = BigInt("-1568")
		const stringSXJfUiC = await UFragmentsM9puRLt.name.call({from: accounts[2]});
		const booloLyfLqS = await UFragmentsM9puRLt.rebaseTimeInfo.call({from: accounts[0]});
		const int256KgPDJjQ = await UFragmentsM9puRLt.div.call(intIpioane, intBdtwZF9, {from: accounts[1]});

		assert.equal(stringSXJfUiC, "")
		await expect(UFragmentsM9puRLt.div.call(intIpioane, intBdtwZF9, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})