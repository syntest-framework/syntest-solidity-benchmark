const Final = artifacts.require("Final");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Final', (accounts) => {
	it('test for Final', async () => {
		const stringVqOpAk1 = "MLJXsRMP2uW95E95bPchES9pYpc5Jw8t4I94hdjo7KBsx5lRsmYME6ci2Ntfh8hPPu48qjfY5w5a"
		const stringbrHq5zq = "zhNURpgOVDgfk98msEpbETj"
		const uintKl5O0bE = BigInt("432")
		const FinalNzjPE1 = await Final.new(stringVqOpAk1, stringbrHq5zq, uintKl5O0bE, {from: accounts[1]});
		const addressrwY9F99 = accounts[3]
		const addresst6TGm5U = accounts[2]
		const uintb04aTv = BigInt("542")
		const addressbvTjIio = accounts[1]
		const uintOtSylPh = await FinalNzjPE1.allowance.call(addresst6TGm5U, addressrwY9F99, {from: accounts[2]});
		const uint8aOzUiuw = await FinalNzjPE1.decimals.call({from: accounts[0]});
		const boolSelvq5O = await FinalNzjPE1.approveAndCall.call(addressbvTjIio, uintb04aTv, {from: accounts[0]});

		assert.equal(uint8aOzUiuw, BigInt("18"))
		assert.equal(uintOtSylPh, BigInt("0"))
		await expect(FinalNzjPE1.approveAndCall.call(addressbvTjIio, uintb04aTv, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Final', async () => {
		const stringTQMpwoS = "ABHnNj3gdod8OwW7DCgSI1zoN4I1EVmP0YNiOA2dhaCPJ66j1VXL6za8XmtmMWpQy6MPg42R"
		const stringHyfzScK = "y6CStnt"
		const uintHCH9Fl = BigInt("1631")
		const FinalJQQSBLA = await Final.new(stringTQMpwoS, stringHyfzScK, uintHCH9Fl, {from: accounts[4]});
		const uintPRGYSIj = BigInt("1226")
		const addressMOGChD = accounts[1]
		const uintxqLOG4j = BigInt("382")
		const addressPwP8SL4 = accounts[4]
		const addressykLvMEt = "0x0000000000000000000000000000000000000001"
		const boolbaIICyW = await FinalJQQSBLA.approve.call(addressMOGChD, uintPRGYSIj, {from: accounts[2]});
		const boolN0a9ik = await FinalJQQSBLA.approve.call(addressPwP8SL4, uintxqLOG4j, {from: accounts[1]});
		const boolDrykssA = await FinalJQQSBLA.transferownership.call(addressykLvMEt, {from: accounts[1]});
		const uint8hDP15D6 = await FinalJQQSBLA.decimals.call({from: accounts[2]});
		const uint8ymDR43u = await FinalJQQSBLA.decimals.call({from: accounts[3]});

		assert.equal(boolN0a9ik, true)
		assert.equal(boolbaIICyW, true)
		await expect(FinalJQQSBLA.transferownership.call(addressykLvMEt, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Final', async () => {
		const stringk4KXMaa = "gzOop7BemJhYrV4e8vugDCIp87Vn5PTkh"
		const stringc6j8ntY = "io1u70iwyjvowIEfTSjiNjd94"
		const uintyTRCv04 = BigInt("953")
		const Finalf0MMUK1 = await Final.new(stringk4KXMaa, stringc6j8ntY, uintyTRCv04, {from: accounts[1]});
		const uintde4C6fv = BigInt("1607")
		const addressIF6DtuL = accounts[2]
		const addresswagUugs = accounts[3]
		const uintiaG3d58 = BigInt("1832")
		const addressf0qwDV = accounts[3]
		const uintnAdSs4q = BigInt("89")
		const addressLsZvNKE = accounts[1]
		const addressrnTAdt = accounts[1]
		const stringgrc2ybN = await Finalf0MMUK1.symbol.call({from: accounts[5]});
		const uint8aLDJKe = await Finalf0MMUK1.decimals.call({from: accounts[4]});
		const boolGhkwhuI = await Finalf0MMUK1.transferFrom.call(addresswagUugs, addressIF6DtuL, uintde4C6fv, {from: accounts[5]});
		const boolEfpv6Y = await Finalf0MMUK1.decreaseAllowance.call(addressf0qwDV, uintiaG3d58, {from: accounts[4]});
		const boolryx1rAa = await Finalf0MMUK1.transferFrom.call(addressrnTAdt, addressLsZvNKE, uintnAdSs4q, {from: accounts[4]});

		assert.equal(stringgrc2ybN, "io1u70iwyjvowIEfTSjiNjd94")
		assert.equal(uint8aLDJKe, BigInt("18"))
		await expect(Finalf0MMUK1.transferFrom.call(addresswagUugs, addressIF6DtuL, uintde4C6fv, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Final', async () => {
		const stringxXnE7Rp = "vbGCHjllJ65UPHAIlijDKJJC5G458VHVkg8LhVfd3cO4mHVhvBYtJtax7NGm3nYwLhTPKwJcHiCP55knDROiQXGdjFH"
		const stringoLL3sHG = "H7mAMJgT5oMlsCrwTQfZQSN3RtrB2Wy7g9qyZOnPEUE2XJOBAntVbcgNkWODZeO7MH65BDK6i4"
		const uintcrwZVyt = BigInt("839")
		const FinalnBVPo84 = await Final.new(stringxXnE7Rp, stringoLL3sHG, uintcrwZVyt, {from: accounts[4]});
		const addressk3RfUU = accounts[4]
		const addressKUbLumG = "0x0000000000000000000000000000000000000001"
		const uintVK40yGF = BigInt("1429")
		const addressinM5Af = accounts[2]
		const uint8OFN0R = BigInt("83")
		const addressYbvupRw = accounts[2]
		const addressNdsGEta = accounts[2]
		const addressi4vqjc5 = accounts[2]
		const uintKZD9H6n = await FinalnBVPo84.allowance.call(addressKUbLumG, addressk3RfUU, {from: accounts[5]});
		const boolXVCaHgG = await FinalnBVPo84.transfer.call(addressinM5Af, uintVK40yGF, {from: accounts[4]});
		const stringmbfX5ZN = await FinalnBVPo84.symbol.call({from: accounts[1]});
		const boolcfCz2cl = await FinalnBVPo84.transferFrom.call(addressNdsGEta, addressYbvupRw, uint8OFN0R, {from: accounts[4]});
		const uintRgQw5bv = await FinalnBVPo84.balanceOf.call(addressi4vqjc5, {from: accounts[3]});

		assert.equal(boolXVCaHgG, true)
		assert.equal(stringmbfX5ZN, "H7mAMJgT5oMlsCrwTQfZQSN3RtrB2Wy7g9qyZOnPEUE2XJOBAntVbcgNkWODZeO7MH65BDK6i4")
		assert.equal(uintKZD9H6n, BigInt("0"))
		await expect(FinalnBVPo84.transferFrom.call(addressNdsGEta, addressYbvupRw, uint8OFN0R, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Final', async () => {
		const stringVqOpAk1 = "MLJXsRMP2uW95E95bPchES9pYpc5Jw8t4I94hdjo7KBsx5lRsmYME6ci2Ntfh8hPPu48qjfY5w5a"
		const stringbrHq5zq = "zhNURpgOVDgfk98msEpbETj"
		const uintHmAH4cw = BigInt("432")
		const FinalNzjPE1 = await Final.new(stringVqOpAk1, stringbrHq5zq, uintHmAH4cw, {from: accounts[1]});
		const addressE4da2k = accounts[3]
		const addressPv7oRLa = accounts[2]
		const uintuk5NYDO = BigInt("1834")
		const addressSqSYwI0 = accounts[3]
		const uintByRqwyQ = BigInt("532")
		const addressX8wYto = accounts[1]
		const uintOtSylPh = await FinalNzjPE1.allowance.call(addressPv7oRLa, addressE4da2k, {from: accounts[2]});
		const boolhWlDhvx = await FinalNzjPE1.transfer.call(addressSqSYwI0, uintuk5NYDO, {from: accounts[2]});
		const uint8aOzUiuw = await FinalNzjPE1.decimals.call({from: accounts[0]});
		const boolSelvq5O = await FinalNzjPE1.approveAndCall.call(addressX8wYto, uintByRqwyQ, {from: accounts[0]});

		assert.equal(uintOtSylPh, BigInt("0"))
		await expect(FinalNzjPE1.transfer.call(addressSqSYwI0, uintuk5NYDO, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Final', async () => {
		const stringxXnE7Rp = "vbGCHjllJ65UPHAIlijDKJJC5G458VHVkg8LhVfd3cO4mHVhvBYtJtax7NGm3nYwLhTPKwJcHiCP55knDROiQXGdjFH"
		const stringoLL3sHG = "H7mAMJgT5oMlsCrwTQfZQSN3RtrB2Wy7g9qyZOnPEUE2XJOBAntVbcgNkWODZeO7MH65BDK6i4"
		const uintzzRn1Ld = BigInt("839")
		const FinalnBVPo84 = await Final.new(stringxXnE7Rp, stringoLL3sHG, uintzzRn1Ld, {from: accounts[4]});
		const uintfcoZz2N = BigInt("1165")
		const addressOuErD3E = accounts[0]
		const addressPotrGca = accounts[4]
		const addressEpyoZrT = "0x0000000000000000000000000000000000000001"
		const uinttXaEAv1 = BigInt("1429")
		const addresswJULoYW = accounts[2]
		const uintdGuBBle = BigInt("83")
		const addressHCoJujb = accounts[2]
		const addressGR8KQZU = accounts[2]
		const addressVPkws9e = accounts[2]
		const boolgv0rCZ = await FinalnBVPo84.increaseAllowance.call(addressOuErD3E, uintfcoZz2N, {from: accounts[5]});
		const uintKZD9H6n = await FinalnBVPo84.allowance.call(addressEpyoZrT, addressPotrGca, {from: accounts[5]});
		const boolXVCaHgG = await FinalnBVPo84.transfer.call(addresswJULoYW, uinttXaEAv1, {from: accounts[4]});
		const stringmbfX5ZN = await FinalnBVPo84.symbol.call({from: accounts[1]});
		const boolcfCz2cl = await FinalnBVPo84.transferFrom.call(addressGR8KQZU, addressHCoJujb, uintdGuBBle, {from: accounts[4]});
		const uintRgQw5bv = await FinalnBVPo84.balanceOf.call(addressVPkws9e, {from: accounts[3]});

		await expect(FinalnBVPo84.increaseAllowance.call(addressOuErD3E, uintfcoZz2N, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Final', async () => {
		const stringO4pKovI = "nIRXVYklHb6wTDu1hbyg0ClJmAcDvM2k81ptMgBEDnFifKMAlrGusvTRclGpZfl9dLbDozer"
		const stringb9BmbLl = "mP2cGc6aRLXUzdtGL9mvyRTD82Wt89YbxBdwwXt5gcQl1Tcj6OY4hlFYGmotOwMejnBd6CRroBjig"
		const uintrS62nP2 = BigInt("226")
		const FinalGRY46II = await Final.new(stringO4pKovI, stringb9BmbLl, uintrS62nP2, {from: "0x0000000000000000000000000000000000000001"});
		const uintG3dJqdn = BigInt("377")
		const addressinFxS4i = "0x0000000000000000000000000000000000000001"
		const uintC000E9q = BigInt("1980")
		const addressYrtdkyn = accounts[4]
		const uintfK638SK = BigInt("1271")
		const addresscKyarIp = accounts[1]
		const boolXpUCz3R = await FinalGRY46II.transfer.call(addressinFxS4i, uintG3dJqdn, {from: accounts[5]});
		const uint8DYnR0j = await FinalGRY46II.decimals.call({from: accounts[3]});
		const boolAVnn2A = await FinalGRY46II.transfer.call(addressYrtdkyn, uintC000E9q, {from: accounts[3]});
		const uint8bpKvRrN = await FinalGRY46II.decimals.call({from: accounts[2]});
		const boolwA4Uh0q = await FinalGRY46II.approveAndCall.call(addresscKyarIp, uintfK638SK, {from: accounts[2]});
	});

	it('test for Final', async () => {
		const stringsgYPZpi = "zGxAvvEj838WRzjBPflxqeWi7BD916zLX2jkxBBYyYgkoOyfWOu4bscLqiBs2nxUKI5"
		const stringcO7FuhN = "dBxJOBC7jxDmRhWaW2D9hTlXu2kJoX4pUe8Ng2QfINklEnDFReo3gJed19R2YOqUQHehjWh5Xh3pKYJpxwkYbPMmOhArRqa"
		const uintKmVqrt = BigInt("109")
		const FinalT9U0C4f = await Final.new(stringsgYPZpi, stringcO7FuhN, uintKmVqrt, {from: accounts[5]});
		const uintGYpgdlC = BigInt("0")
		const addressMA1aHiY = accounts[3]
		const uintF3rdK7d = BigInt("1236")
		const addressuUWjcnb = accounts[4]
		const uintINzcPfZ = BigInt("1473")
		const addressxuVZNp = accounts[5]
		const addressX8TxuEw = accounts[4]
		const boolIg0seRM = await FinalT9U0C4f.transfer.call(addressMA1aHiY, uintGYpgdlC, {from: accounts[0]});
		const boolsnmyVMt = await FinalT9U0C4f.transfer.call(addressuUWjcnb, uintF3rdK7d, {from: accounts[3]});
		const boolC9MdVtp = await FinalT9U0C4f.transferFrom.call(addressX8TxuEw, addressxuVZNp, uintINzcPfZ, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolIg0seRM, true)
		await expect(FinalT9U0C4f.transfer.call(addressuUWjcnb, uintF3rdK7d, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Final', async () => {
		const stringsgYPZpi = "zGxAvvEj838WRzjBPflxqeWi7BD916zLX2jkxBBYyYgkoOyfWOu4bscLqiBs2nxUKI5"
		const stringcO7FuhN = "dBxJOBC7jxDmRhWaW2D9hTlXu2kJoX4pUe8Ng2QfINklEnDFReo3gJed19R2YOqUQHehjWh5Xh3pKYJpxwkYbPMmOhArRqa"
		const uintMIJ26ZN = BigInt("109")
		const FinalT9U0C4f = await Final.new(stringsgYPZpi, stringcO7FuhN, uintMIJ26ZN, {from: accounts[5]});
		const uintlzF5iaf = BigInt("1126")
		const addressF1xaLgA = accounts[4]
		const uintoa6Eouy = BigInt("49")
		const addressIisxpQf = accounts[4]
		const boolVBM9mQw = await FinalT9U0C4f.approveAndCall.call(addressF1xaLgA, uintlzF5iaf, {from: accounts[5]});
		const boolIg0seRM = await FinalT9U0C4f.transfer.call(addressIisxpQf, uintoa6Eouy, {from: accounts[0]});

		assert.equal(boolVBM9mQw, true)
		await expect(FinalT9U0C4f.transfer.call(addressIisxpQf, uintoa6Eouy, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})