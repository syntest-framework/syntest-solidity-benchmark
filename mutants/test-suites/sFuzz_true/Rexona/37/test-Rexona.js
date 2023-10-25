const Rexona = artifacts.require("Rexona");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Rexona', (accounts) => {
	it('test for Rexona', async () => {
		const stringUBveluJ = "a48Ze5BUG6cTC6IXk6Pydi9"
		const stringgIVpYA5 = "xqWfIMf8YulE1jJWfKNj1MeRJje8aGKe8aBEF5FzFcRbiKoGKk4jCajNIDuXBPytFMouzn1X2K6ewC5k"
		const uintkZGSBnj = BigInt("1570")
		const RexonavEo8Cp = await Rexona.new(stringUBveluJ, stringgIVpYA5, uintkZGSBnj, {from: accounts[0]});
		const uintPP2ys5x = BigInt("1696")
		const addressNDfgvVp = accounts[2]
		const addressONQxRH9 = accounts[4]
		const uinticNikq8 = BigInt("1258")
		const addresso59WBPg = accounts[0]
		const addressKxC6rvW = accounts[2]
		const uintIpI1Wf8 = BigInt("713")
		const addressolRyVns = accounts[2]
		const addressOA69FrN = accounts[1]
//		const boolUIONfN = await RexonavEo8Cp.transferFrom.call(addressONQxRH9, addressNDfgvVp, uintPP2ys5x, {from: accounts[3]});
//		const boolHbLcLzD = await RexonavEo8Cp.transferFrom.call(addressKxC6rvW, addresso59WBPg, uinticNikq8, {from: accounts[0]});
//		const bool5surRL = await RexonavEo8Cp.transferFrom.call(addressOA69FrN, addressolRyVns, uintIpI1Wf8, {from: accounts[3]});

		await expect(RexonavEo8Cp.transferFrom.call(addressONQxRH9, addressNDfgvVp, uintPP2ys5x, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Rexona', async () => {
		const stringbH6NwI0 = "QqyNY1LT"
		const stringCGTbI4i = "vuATaJOnnRRPALG4nay7bII3yUWsB43EReky4mcwIsdaxqDsi5wzsLLDGdwyDDBod"
		const uintgP4oLmB = BigInt("1036")
		const RexonasoNbV7E = await Rexona.new(stringbH6NwI0, stringCGTbI4i, uintgP4oLmB, {from: accounts[4]});
		const uintxlchKFv = BigInt("621")
		const addressgFesfFE = accounts[3]
		const address3AYcj7 = accounts[4]
		const uintQMcHSE = BigInt("387")
		const addressJB0Kffu = accounts[1]
		const uintdghwm93 = BigInt("1435")
		const addressGkhZpfd = accounts[1]
		const uintjMTNtz0 = BigInt("940")
		const addressSSwVHyg = accounts[2]
		const addressq3eT7IX = accounts[5]
//		const booltSR50rD = await RexonasoNbV7E.approveAndCall.call(addressgFesfFE, uintxlchKFv, {from: accounts[2]});
//		const boolXiesIoD = await RexonasoNbV7E.transferownership.call(address3AYcj7, {from: accounts[4]});
//		const booltJcPKHx = await RexonasoNbV7E.transfer.call(addressJB0Kffu, uintQMcHSE, {from: accounts[2]});
//		const boolgnYmf6 = await RexonasoNbV7E.approve.call(addressGkhZpfd, uintdghwm93, {from: accounts[4]});
//		const boolDj8wfNI = await RexonasoNbV7E.transferFrom.call(addressq3eT7IX, addressSSwVHyg, uintjMTNtz0, {from: accounts[5]});

		await expect(RexonasoNbV7E.approveAndCall.call(addressgFesfFE, uintxlchKFv, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Rexona', async () => {
		const stringBUE2yIH = "nr13AJr"
		const stringAGY9GKK = "q6XQZOT3jmIOqDuxH1XwS"
		const uintaw0M5K = BigInt("608")
		const RexonaVluHfyk = await Rexona.new(stringBUE2yIH, stringAGY9GKK, uintaw0M5K, {from: accounts[0]});
		const addressnCeaPhD = accounts[3]
		const uintmDxw0fK = BigInt("435")
		const addressQ4cFaA4 = accounts[3]
		const addressrWHe0r2 = accounts[2]
		const uintkl1lNKK = BigInt("1438")
		const addressbW7bAJC = accounts[3]
//		const boolKLKOddt = await RexonaVluHfyk.transferownership.call(addressnCeaPhD, {from: "0x0000000000000000000000000000000000000001"});
//		const boolIgFQFuV = await RexonaVluHfyk.transferFrom.call(addressrWHe0r2, addressQ4cFaA4, uintmDxw0fK, {from: accounts[0]});
//		const boolkS5Fqvo = await RexonaVluHfyk.approve.call(addressbW7bAJC, uintkl1lNKK, {from: "0x0000000000000000000000000000000000000001"});

		await expect(RexonaVluHfyk.transferownership.call(addressnCeaPhD, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Rexona', async () => {
		const stringQIgXpvK = "pOs1t01PS1UMr2qI6br23URuAlBoP6zqkcbjlCB"
		const stringqmSaGCA = "82muG1rRACPCys3EQ0DCg2Gwreh7dMKGtUssnFSGQjCyzGipCncOHLeTdFfYFce5gSuVpEUE"
		const uintJxUZ4Ng = BigInt("1918")
		const RexonauVSSsZ9 = await Rexona.new(stringQIgXpvK, stringqmSaGCA, uintJxUZ4Ng, {from: accounts[0]});
		const uintEwRaBg7 = BigInt("121")
		const addressphezH1X = accounts[2]
		const uintpJzg2u9 = BigInt("1864")
		const addressre5alkU = "0x0000000000000000000000000000000000000001"
		const addressfCJoGUb = accounts[0]
		const uintL9BMVD = BigInt("1480")
		const addressiONnKg = accounts[3]
		const uinti9Ba4j0 = BigInt("324")
		const addressJVKQyCd = accounts[3]
		const uintv8xORyh = BigInt("1464")
		const addressajbHO2 = "0x0000000000000000000000000000000000000001"
		const uintDr7KKM = BigInt("494")
		const addresstNh1cwh = "0x0000000000000000000000000000000000000001"
		const boolvtKllR4 = await RexonauVSSsZ9.approve.call(addressphezH1X, uintEwRaBg7, {from: accounts[2]});
//		const boolb8kvj6 = await RexonauVSSsZ9.transferFrom.call(addressfCJoGUb, addressre5alkU, uintpJzg2u9, {from: accounts[2]});
//		const booln1wif4D = await RexonauVSSsZ9.approve.call(addressiONnKg, uintL9BMVD, {from: accounts[2]});
//		const boolMc7QIK0 = await RexonauVSSsZ9.approveAndCall.call(addressJVKQyCd, uinti9Ba4j0, {from: accounts[4]});
//		const boolhdLW949 = await RexonauVSSsZ9.approveAndCall.call(addressajbHO2, uintv8xORyh, {from: accounts[5]});
//		const boolywKvtP = await RexonauVSSsZ9.approveAndCall.call(addresstNh1cwh, uintDr7KKM, {from: accounts[1]});

		assert.equal(boolvtKllR4, true)
		await expect(RexonauVSSsZ9.transferFrom.call(addressfCJoGUb, addressre5alkU, uintpJzg2u9, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Rexona', async () => {
		const stringJRd5iQv = "Uvb3CdTFn8Vl"
		const stringTAEaiuX = "dwsViFNm2BHi2KMTheJ45YgT6Q5xycpGSg0jBe3ZeTaUmi"
		const uintMPsYRh = BigInt("847")
		const RexonaCWXdD6g = await Rexona.new(stringJRd5iQv, stringTAEaiuX, uintMPsYRh, {from: accounts[4]});
		const uintGc6efk = BigInt("909")
		const addresspOsZTQV = accounts[2]
		const addressApYXVf = accounts[5]
		const uintfigrkKf = BigInt("1845")
		const addresschqeom = accounts[2]
		const uinthqi6w0 = BigInt("1823")
		const addressR8QdMOy = accounts[1]
		const addressf8iIO0T = accounts[4]
		const addressrVQy8h = accounts[4]
//		const boolUKnk08R = await RexonaCWXdD6g.transferFrom.call(addressApYXVf, addresspOsZTQV, uintGc6efk, {from: accounts[5]});
//		const boolfZwnNP4 = await RexonaCWXdD6g.approve.call(addresschqeom, uintfigrkKf, {from: accounts[0]});
//		const boolGlZ1rbd = await RexonaCWXdD6g.transferFrom.call(addressf8iIO0T, addressR8QdMOy, uinthqi6w0, {from: accounts[2]});
//		const boolkaGPuih = await RexonaCWXdD6g.transferownership.call(addressrVQy8h, {from: accounts[0]});

		await expect(RexonaCWXdD6g.transferFrom.call(addressApYXVf, addresspOsZTQV, uintGc6efk, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Rexona', async () => {
		const stringOm4FRZ = "e"
		const stringk2bkcCp = "zhnLNFfKWbT7Xq"
		const uintvA7lysV = BigInt("1377")
		const RexonaTVzwX07 = await Rexona.new(stringOm4FRZ, stringk2bkcCp, uintvA7lysV, {from: "0x0000000000000000000000000000000000000001"});
		const uintLb7Fvck = BigInt("1925")
		const addressdc4RGh = accounts[0]
		const addresskkErYP2 = accounts[4]
		const uintbElhZIi = BigInt("1405")
		const addressjxiI8j = accounts[4]
		const addressPgx55Zw = accounts[2]
		const uintpM4dGwT = BigInt("1159")
		const addresscGRBHJB = "0x0000000000000000000000000000000000000001"
		const uintsklgsYH = BigInt("1738")
		const address3lxh1e = accounts[5]
		const booloM7bHy = await RexonaTVzwX07.transferFrom.call(addresskkErYP2, addressdc4RGh, uintLb7Fvck, {from: "0x0000000000000000000000000000000000000001"});
		const bool5PwOdc = await RexonaTVzwX07.transferFrom.call(addressPgx55Zw, addressjxiI8j, uintbElhZIi, {from: accounts[3]});
		const boolMNjS45X = await RexonaTVzwX07.transfer.call(addresscGRBHJB, uintpM4dGwT, {from: accounts[2]});
		const boolSvjL23o = await RexonaTVzwX07.approveAndCall.call(address3lxh1e, uintsklgsYH, {from: accounts[3]});
	});

	it('test for Rexona', async () => {
		const stringr6EWgkl = "XWYjwqjRUig4rPrmYECgFR818QcKjhPWSVJSmVxqKp2FixTPVI3o4wobeskcAjAoUvrEO5UvUUA"
		const stringjkYAAoa = "DTgRrVhzx1ZqPNk2DSMYqkbPGIJxxeAohc5jxqCU1E02ft4tiGFqJnxDaq"
		const uint9kqLbB = BigInt("1183")
		const RexonaTmjy3nk = await Rexona.new(stringr6EWgkl, stringjkYAAoa, uint9kqLbB, {from: accounts[2]});
		const uintyEBUtd = BigInt("969")
		const addressGr3ZcOC = "0x0000000000000000000000000000000000000002"
//		const boolyyUThg0 = await RexonaTmjy3nk.transfer.call(addressGr3ZcOC, uintyEBUtd, {from: accounts[0]});

		await expect(RexonaTmjy3nk.transfer.call(addressGr3ZcOC, uintyEBUtd, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Rexona', async () => {
		const stringr6EWgkl = "XWYjwqjRUig4rPrmYECgFR818QcKjhPWSVJSmVxqKp2FixTPVI3o4wobeskcAjAoUvrEO5UvUUA"
		const stringjkYAAoa = "DTgRrVhzx1ZqPNk2DSMYqkbPGIJxxeAohc5jxqCU1E02ft4tiGFqJnxDaq"
		const uintfDdMQQK = BigInt("1183")
		const RexonaTmjy3nk = await Rexona.new(stringr6EWgkl, stringjkYAAoa, uintfDdMQQK, {from: accounts[2]});
		const uintFKQc8WJ = BigInt("630")
		const addressLc6Vmgh = accounts[4]
		const uintRlUVyUJ = BigInt("2008")
		const addressxJiGwDd = accounts[2]
		const uinthnaWQE = BigInt("987")
		const addressInsXcJb = "0x0000000000000000000000000000000000000002"
		const boolNeOh8AL = await RexonaTmjy3nk.approveAndCall.call(addressLc6Vmgh, uintFKQc8WJ, {from: accounts[2]});
//		const boolkZo92gm = await RexonaTmjy3nk.transfer.call(addressxJiGwDd, uintRlUVyUJ, {from: accounts[3]});
//		const boolyyUThg0 = await RexonaTmjy3nk.transfer.call(addressInsXcJb, uinthnaWQE, {from: accounts[0]});

		assert.equal(boolNeOh8AL, true)
		await expect(RexonaTmjy3nk.transfer.call(addressxJiGwDd, uintRlUVyUJ, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Rexona', async () => {
		const stringr6EWgkl = "XWYjwqjRUig4rPrmYECgFR818QcKjhPWSVJSmVxqKp2FixTPVI3o4wobeskcAjAoUvrEO5UvUUA"
		const stringjkYAAoa = "DTgRrVhzx1ZqPNk2DSMYqkbPGIJxxeAohc5jxqCU1E02ft4tiGFqJnxDaq"
		const uintjwi7wGD = BigInt("1183")
		const RexonaTmjy3nk = await Rexona.new(stringr6EWgkl, stringjkYAAoa, uintjwi7wGD, {from: accounts[2]});
		const addresstM0osO2 = accounts[5]
		const uintzoiqvCm = BigInt("92")
		const addresssUotJQ = accounts[3]
		const uintxMv7V4 = BigInt("245")
		const addressbPoh6FF = accounts[2]
		const boolyNq3t7 = await RexonaTmjy3nk.transferownership.call(addresstM0osO2, {from: accounts[2]});
//		const boolUYBTVQl = await RexonaTmjy3nk.approveAndCall.call(addresssUotJQ, uintzoiqvCm, {from: accounts[3]});
//		const boolSmVm1MR = await RexonaTmjy3nk.approveAndCall.call(addressbPoh6FF, uintxMv7V4, {from: accounts[0]});

		assert.equal(boolyNq3t7, true)
		await expect(RexonaTmjy3nk.approveAndCall.call(addresssUotJQ, uintzoiqvCm, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Rexona', async () => {
		const stringr6EWgkl = "XWYjwqjRUig4rPrmYECgFR818QcKjhPWSVJSmVxqKp2FixTPVI3o4wobeskcAjAoUvrEO5UvUUA"
		const stringjkYAAoa = "DTgRrVhzx1ZqPNk2DSMYqkbPGIJxxeAohc5jxqCU1E02ft4tiGFqJnxDaq"
		const uintueCFwG2 = BigInt("1183")
		const RexonaTmjy3nk = await Rexona.new(stringr6EWgkl, stringjkYAAoa, uintueCFwG2, {from: accounts[2]});
		const uintxCi0kE7 = BigInt("0")
		const addressCCOH1TT = accounts[4]
		const addresstB7nAEE = accounts[1]
		const uinttD4S7ol = BigInt("140")
		const addressnueX66c = accounts[0]
		const addresskeddtrs = accounts[5]
		const uintkyTzMI0 = BigInt("1886")
		const addressOV57wl0 = accounts[5]
		const bool6k4TaD = await RexonaTmjy3nk.transferFrom.call(addresstB7nAEE, addressCCOH1TT, uintxCi0kE7, {from: accounts[0]});
//		const boolc2LjNlu = await RexonaTmjy3nk.transferFrom.call(addresskeddtrs, addressnueX66c, uinttD4S7ol, {from: accounts[4]});
//		const boolK5koaIX = await RexonaTmjy3nk.approve.call(addressOV57wl0, uintkyTzMI0, {from: accounts[1]});

		assert.equal(bool6k4TaD, true)
		await expect(RexonaTmjy3nk.transferFrom.call(addresskeddtrs, addressnueX66c, uinttD4S7ol, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Rexona', async () => {
		const stringr6EWgkl = "XWYjwqjRUig4rPrmYECgFR818QcKjhPWSVJSmVxqKp2FixTPVI3o4wobeskcAjAoUvrEO5UvUUA"
		const stringjkYAAoa = "DTgRrVhzx1ZqPNk2DSMYqkbPGIJxxeAohc5jxqCU1E02ft4tiGFqJnxDaq"
		const uintvcl1CCb = BigInt("1183")
		const RexonaTmjy3nk = await Rexona.new(stringr6EWgkl, stringjkYAAoa, uintvcl1CCb, {from: accounts[2]});
		const uintX8K1qzs = BigInt("0")
		const addressnHlUUC5 = accounts[3]
		const uintKmQVTUd = BigInt("1532")
		const addressG1V4ui9 = accounts[3]
		const addressQpQTC3Q = accounts[0]
		const boolqC7YAR = await RexonaTmjy3nk.approveAndCall.call(addressnHlUUC5, uintX8K1qzs, {from: accounts[2]});
		const booloU9Hh4n = await RexonaTmjy3nk.approve.call(addressG1V4ui9, uintKmQVTUd, {from: accounts[0]});
//		const boolnmrre3 = await RexonaTmjy3nk.transferownership.call(addressQpQTC3Q, {from: accounts[1]});

		assert.equal(booloU9Hh4n, true)
		assert.equal(boolqC7YAR, true)
		await expect(RexonaTmjy3nk.transferownership.call(addressQpQTC3Q, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})