const Final = artifacts.require("Final");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Final', (accounts) => {
	it('test for Final', async () => {
		const stringojqyCOQ = "YaiNPITLYl3jJ5QJxdzkKBphd70gOez"
		const stringQWLwONf = "oi9Qe3CONpj0koHOLVCVwPogdFsnboDlxEzy6y5HQyuDIKE4pFun9Phuw7GKEN2OlGlCCoRcOP19VocDPtUYnWRjjw6m4N5"
		const uintVyzSkFa = BigInt("180")
		const FinalVNHDsDd = await Final.new(stringojqyCOQ, stringQWLwONf, uintVyzSkFa, {from: accounts[3]});
		const uint9oRK4a = BigInt("1225")
		const addressP4P7juI = accounts[1]
		const addresscLc002 = accounts[3]
		const uintNfH0oY5 = BigInt("1331")
		const addressrjqt05u = accounts[1]
		const uinttgrfT44 = BigInt("721")
		const addressiGH2uD = accounts[1]
		const boolm3Pp0lW = await FinalVNHDsDd.approveAndCall.call(addressP4P7juI, uint9oRK4a, {from: accounts[0]});
		const uintGr6xn1P = await FinalVNHDsDd.balanceOf.call(addresscLc002, {from: accounts[5]});
		const boolSV7mk9T = await FinalVNHDsDd.approve.call(addressrjqt05u, uintNfH0oY5, {from: accounts[4]});
		const boolG3aZfi5 = await FinalVNHDsDd.decreaseAllowance.call(addressiGH2uD, uinttgrfT44, {from: accounts[2]});

		await expect(FinalVNHDsDd.approveAndCall.call(addressP4P7juI, uint9oRK4a, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Final', async () => {
		const stringE7Y0JDI = "49XtPtsq7ACl88rkpmfWMG44q3nrKxB"
		const stringLZAPpY = "nvilpjO3vbkxNDG7eQ7aDOTKIOztBiAr0XTeI"
		const uintRIfdVdm = BigInt("477")
		const FinalGJ8Eve9 = await Final.new(stringE7Y0JDI, stringLZAPpY, uintRIfdVdm, {from: accounts[4]});
		const addressdItyJXH = accounts[4]
		const addressNzF26mz = accounts[2]
		const uintY5UaaQ6 = BigInt("767")
		const addresseLSoxxZ = accounts[1]
		const addressVacJyZ7 = "0x0000000000000000000000000000000000000001"
		const addressDj5TiX4 = accounts[3]
		const uintjaOEwtC = BigInt("1964")
		const addressczz3ZMb = accounts[2]
		const uintMaihZbg = await FinalGJ8Eve9.allowance.call(addressNzF26mz, addressdItyJXH, {from: accounts[3]});
		const boolRveSWjR = await FinalGJ8Eve9.approve.call(addresseLSoxxZ, uintY5UaaQ6, {from: accounts[5]});
		const stringJ5LZNpn = await FinalGJ8Eve9.symbol.call({from: accounts[0]});
		const uintfHRDIC = await FinalGJ8Eve9.allowance.call(addressDj5TiX4, addressVacJyZ7, {from: "0x0000000000000000000000000000000000000001"});
		const boolNOnoqrc = await FinalGJ8Eve9.approveAndCall.call(addressczz3ZMb, uintjaOEwtC, {from: accounts[5]});

		assert.equal(boolRveSWjR, true)
		assert.equal(stringJ5LZNpn, "nvilpjO3vbkxNDG7eQ7aDOTKIOztBiAr0XTeI")
		assert.equal(uintMaihZbg, BigInt("0"))
		assert.equal(uintfHRDIC, BigInt("0"))
		await expect(FinalGJ8Eve9.approveAndCall.call(addressczz3ZMb, uintjaOEwtC, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Final', async () => {
		const stringa83xBTA = "CoKRx4fF"
		const stringG5dWgaA = "w5t4JbeX5VHPtX"
		const uintJWnkT0I = BigInt("106")
		const FinaleLX76D2 = await Final.new(stringa83xBTA, stringG5dWgaA, uintJWnkT0I, {from: "0x0000000000000000000000000000000000000001"});
		const addresskeY4bK7 = accounts[3]
		const uintsXCz9N2 = BigInt("984")
		const addressG7JxcKK = "0x0000000000000000000000000000000000000001"
		const addressQWoPStH = accounts[0]
		const uinthOYP56U = BigInt("1035")
		const addressVuxmn7 = accounts[0]
		const addressxQFUmf4 = accounts[1]
		const uintNcadP6S = BigInt("1214")
		const addressc5boHZ = accounts[3]
		const uintnDqFsc = await FinaleLX76D2.balanceOf.call(addresskeY4bK7, {from: accounts[5]});
		const boolAgFgrdU = await FinaleLX76D2.transferFrom.call(addressQWoPStH, addressG7JxcKK, uintsXCz9N2, {from: accounts[3]});
		const boolKyoNI80 = await FinaleLX76D2.transferFrom.call(addressxQFUmf4, addressVuxmn7, uinthOYP56U, {from: accounts[4]});
		const boolrKCPRNB = await FinaleLX76D2.increaseAllowance.call(addressc5boHZ, uintNcadP6S, {from: accounts[4]});
	});

	it('test for Final', async () => {
		const stringVDXQ5n3 = "ureBO2BZsjQ3hqRl0CFgsrLQ7D689NySvdy8a6E47zdARPOpIkrPhRTfYXn6WkMbFdT8GPybhkqET3r"
		const stringkecCurl = "YpBhM2M5qGZA5jy3rhXFTzamLd"
		const uintJK9wj4W = BigInt("1231")
		const FinalfgRH5ya = await Final.new(stringVDXQ5n3, stringkecCurl, uintJK9wj4W, {from: accounts[1]});
		const uintC47bipj = BigInt("992")
		const addresss2u6FH = accounts[4]
		const uintkId6flB = BigInt("1309")
		const addressKpeqqzD = accounts[3]
		const addressVjQHDAf = accounts[3]
		const uintB9ryzJB = BigInt("1202")
		const addressU2qErD0 = accounts[3]
		const boolkeydx5C = await FinalfgRH5ya.decreaseAllowance.call(addresss2u6FH, uintC47bipj, {from: accounts[0]});
		const boolsqWfFZp = await FinalfgRH5ya.transferFrom.call(addressVjQHDAf, addressKpeqqzD, uintkId6flB, {from: accounts[0]});
		const boolSJrF5cI = await FinalfgRH5ya.increaseAllowance.call(addressU2qErD0, uintB9ryzJB, {from: accounts[3]});

		await expect(FinalfgRH5ya.decreaseAllowance.call(addresss2u6FH, uintC47bipj, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Final', async () => {
		const stringnoWD8xq = "wJdxPAMmJhLCGpajvjjflWiVSetGPtleqWdTmtr9rWaOJJXnfAKhlTyite"
		const stringkN1S1B = "jZWR"
		const uintSXZeBT3 = BigInt("1355")
		const Finaly5MWCGy = await Final.new(stringnoWD8xq, stringkN1S1B, uintSXZeBT3, {from: accounts[2]});
		const uinthg2jTOG = BigInt("1719")
		const addressc1nPKt2 = accounts[4]
		const addressP7dyBvg = accounts[3]
		const uintXj8XsSs = BigInt("1657")
		const addresshqbOcav = accounts[1]
		const boolRrbV7P = await Finaly5MWCGy.transferFrom.call(addressP7dyBvg, addressc1nPKt2, uinthg2jTOG, {from: accounts[2]});
		const uint8yFpnX2F = await Finaly5MWCGy.decimals.call({from: accounts[5]});
		const boolCbxvA4 = await Finaly5MWCGy.decreaseAllowance.call(addresshqbOcav, uintXj8XsSs, {from: accounts[1]});
		const uint8IetHv3 = await Finaly5MWCGy.decimals.call({from: accounts[1]});
		const stringLvUsIJh = await Finaly5MWCGy.symbol.call({from: accounts[1]});

		await expect(Finaly5MWCGy.transferFrom.call(addressP7dyBvg, addressc1nPKt2, uinthg2jTOG, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Final', async () => {
		const string66iX0i = "1gnoS6gv5a5td8eQYUYrllNysgsc5xIXJ9am53549LnyMRzPxq"
		const stringU0OWpBv = "341TnWHcEryweeDAHESPallu9jHVav7ouQFuDA6CdBTdaDf5lLevIkFR2kIYe6otuG"
		const uintzcsvqZx = BigInt("241")
		const Finalr5GmMz2 = await Final.new(string66iX0i, stringU0OWpBv, uintzcsvqZx, {from: accounts[5]});
		const uintrtv7dan = BigInt("1917")
		const addressNKoLOH7 = accounts[1]
		const uintkiCGJPp = BigInt("1430")
		const addresshybG2C1 = accounts[2]
		const uintXiCKaU = BigInt("921")
		const addresstQOykt7 = accounts[3]
		const addressdOZJuMa = accounts[5]
		const bool455RdN = await Finalr5GmMz2.transfer.call(addressNKoLOH7, uintrtv7dan, {from: accounts[0]});
		const boolRqsQo4i = await Finalr5GmMz2.approveAndCall.call(addresshybG2C1, uintkiCGJPp, {from: accounts[3]});
		const boolOOPE3CX = await Finalr5GmMz2.approveAndCall.call(addresstQOykt7, uintXiCKaU, {from: "0x0000000000000000000000000000000000000001"});
		const uintJZDGyUO = await Finalr5GmMz2.balanceOf.call(addressdOZJuMa, {from: accounts[2]});

		await expect(Finalr5GmMz2.transfer.call(addressNKoLOH7, uintrtv7dan, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Final', async () => {
		const stringBX2GALH = "e4zpXXoBL1B85lLxPtHwMUrz5S5rlb5dPxFjB"
		const string4xzQge = "Lmgphpn96DVIKcBoYmtPxigunaMV7z"
		const uintEhIrNY = BigInt("1987")
		const FinalFNWhBW = await Final.new(stringBX2GALH, string4xzQge, uintEhIrNY, {from: accounts[5]});
		const address1PuCgq = accounts[1]
		const addressM2NyXbx = "0x0000000000000000000000000000000000000001"
		const uintkXA6LmL = BigInt("970")
		const addressHoQ7as8 = "0x0000000000000000000000000000000000000001"
		const addresskvevTO0 = accounts[2]
		const uintlRaKxNz = BigInt("234")
		const addressTIzU6hC = "0x0000000000000000000000000000000000000001"
		const addressS93ZGk3 = accounts[4]
		const uintd466jlY = BigInt("1490")
		const addresscaQnWbH = accounts[3]
		const boolgaHcs8F = await FinalFNWhBW.transferownership.call(address1PuCgq, {from: accounts[4]});
		const uintQzLs89A = await FinalFNWhBW.balanceOf.call(addressM2NyXbx, {from: accounts[0]});
		const boolD0vbGY = await FinalFNWhBW.transferFrom.call(addresskvevTO0, addressHoQ7as8, uintkXA6LmL, {from: accounts[1]});
		const booldpsQfv = await FinalFNWhBW.transferFrom.call(addressS93ZGk3, addressTIzU6hC, uintlRaKxNz, {from: accounts[4]});
		const boolpmTTqm = await FinalFNWhBW.transfer.call(addresscaQnWbH, uintd466jlY, {from: accounts[5]});
		const uint8pQ0MYj9 = await FinalFNWhBW.decimals.call({from: accounts[5]});

		await expect(FinalFNWhBW.transferownership.call(address1PuCgq, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Final', async () => {
		const stringuNqBZYf = "RNDejC"
		const stringWm2HAH8 = "a5bPV6h5OIptPmS"
		const uintvi2ICf = BigInt("23")
		const Finals4szP1J = await Final.new(stringuNqBZYf, stringWm2HAH8, uintvi2ICf, {from: accounts[0]});
		const uintGMfhP7t = BigInt("1029")
		const addressnc00xUY = accounts[4]
		const addressRbkkpg5 = accounts[5]
		const boolw17MLXH = await Finals4szP1J.transfer.call(addressnc00xUY, uintGMfhP7t, {from: accounts[0]});
		const uintuqmzSK6 = await Finals4szP1J.balanceOf.call(addressRbkkpg5, {from: accounts[2]});

		assert.equal(boolw17MLXH, true)
		assert.equal(uintuqmzSK6, BigInt("0"))
	});

	it('test for Final', async () => {
		const stringNkYhrI = "KpsBdDFigffmP47eSSXzzsx9SgrCvRlmdNd2eiUdu93RH3cUqjr0n1sD7Afo5cpUSN5jTVwE2Sz5qsjfC3tGH0H6m0"
		const stringWAZ07HV = "bBqsrmBQblRrEtMyHM2pU4M1NLAq5qAbQxB3U5KKozR4kfSE73VjGmRez4pthcbaGQQvHj2c4m"
		const uintTWQwXY = BigInt("139")
		const FinalyBOHyd = await Final.new(stringNkYhrI, stringWAZ07HV, uintTWQwXY, {from: accounts[3]});
		const uint3UhU19 = BigInt("949")
		const addressAYrlvSf = accounts[3]
		const uintFsw2DbJ = BigInt("1812")
		const addresshSTueWE = accounts[1]
		const address10y5VW = accounts[2]
		const boolQps9m0p = await FinalyBOHyd.approveAndCall.call(addressAYrlvSf, uint3UhU19, {from: accounts[3]});
		const boolX9VbHfA = await FinalyBOHyd.approveAndCall.call(addresshSTueWE, uintFsw2DbJ, {from: accounts[1]});
		const uintM9SqNV1 = await FinalyBOHyd.balanceOf.call(address10y5VW, {from: accounts[4]});

		assert.equal(boolQps9m0p, true)
		await expect(FinalyBOHyd.approveAndCall.call(addresshSTueWE, uintFsw2DbJ, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Final', async () => {
		const stringfIP85KF = "YOfLGUDzv75ctpNeNcJ1VY0xqfUSMuKKdDAGLkfEaGRA51UOkmAqdPRUjFI4SE01Dv35qIrL49CBAUonNlgqrbJp"
		const stringTS8ovlO = "CsaTdyYdAScbk7U6WzkwyWq1viUMkqghzzh6jnyrKCbUdEVaLTLWguma6p3DcDVUtZC0GyxtbWVdJFhU2bO5HMbSspcE"
		const uintDUFBTFb = BigInt("1108")
		const FinalL3kM7KS = await Final.new(stringfIP85KF, stringTS8ovlO, uintDUFBTFb, {from: accounts[4]});
		const uintjr6WEMz = BigInt("464")
		const addressUQvfvA9 = accounts[0]
		const addressgBvCDI = accounts[2]
		const uintlqIugOP = BigInt("1730")
		const addressQ4i8Lkj = accounts[0]
		const stringaQJxCUb = await FinalL3kM7KS.symbol.call({from: accounts[4]});
		const boolCrhttP8 = await FinalL3kM7KS.approve.call(addressUQvfvA9, uintjr6WEMz, {from: accounts[3]});
		const booldqhfzVe = await FinalL3kM7KS.transferownership.call(addressgBvCDI, {from: accounts[4]});
		const boolGYr0bE5 = await FinalL3kM7KS.approve.call(addressQ4i8Lkj, uintlqIugOP, {from: accounts[1]});

		assert.equal(boolCrhttP8, true)
		assert.equal(boolGYr0bE5, true)
		assert.equal(booldqhfzVe, true)
		assert.equal(stringaQJxCUb, "CsaTdyYdAScbk7U6WzkwyWq1viUMkqghzzh6jnyrKCbUdEVaLTLWguma6p3DcDVUtZC0GyxtbWVdJFhU2bO5HMbSspcE")
	});

	it('test for Final', async () => {
		const stringNkYhrI = "KpsBdDFigffmP47eSSXzzsx9SgrCvRlmdNd2eiUdu93RH3cUqjr0n1sD7Afo5cpUSN5jTVwE2Sz5qsjfC3tGH0H6m0"
		const stringWAZ07HV = "bBqsrmBQblRrEtMyHM2pU4M1NLAq5qAbQxB3U5KKozR4kfSE73VjGmRez4pthcbaGQQvHj2c4m"
		const uintBqmWGCa = BigInt("139")
		const FinalyBOHyd = await Final.new(stringNkYhrI, stringWAZ07HV, uintBqmWGCa, {from: accounts[3]});
		const uintfgnqXBu = BigInt("0")
		const addressVwMrXmi = accounts[3]
		const addressmrRloi = "0x0000000000000000000000000000000000000001"
		const boolXbKAJcP = await FinalyBOHyd.transferFrom.call(addressmrRloi, addressVwMrXmi, uintfgnqXBu, {from: accounts[4]});

		assert.equal(boolXbKAJcP, true)
	});

	it('test for Final', async () => {
		const stringNkYhrI = "KpsBdDFigffmP47eSSXzzsx9SgrCvRlmdNd2eiUdu93RH3cUqjr0n1sD7Afo5cpUSN5jTVwE2Sz5qsjfC3tGH0H6m0"
		const stringWAZ07HV = "bBqsrmBQblRrEtMyHM2pU4M1NLAq5qAbQxB3U5KKozR4kfSE73VjGmRez4pthcbaGQQvHj2c4m"
		const uintxvPPCEg = BigInt("139")
		const FinalyBOHyd = await Final.new(stringNkYhrI, stringWAZ07HV, uintxvPPCEg, {from: accounts[3]});
		const addresshbtlGRr = accounts[2]
		const uintfgdireP = BigInt("1997")
		const addressCXZILBR = accounts[4]
		const addressdMGdi8T = "0x00000000000000000000000000000000000000-1"
		const addressIsoiQRt = accounts[3]
		const uintGh9PkJ = BigInt("13")
		const addressSshjR50 = accounts[4]
		const addressaCDLXps = accounts[1]
		const uintWQ3RDK6 = BigInt("1146")
		const addressKjfkPFO = "0x0000000000000000000000000000000000000001"
		const uint8cd7Rhwu = await FinalyBOHyd.decimals.call({from: accounts[1]});
		const uintNzrYkZ = await FinalyBOHyd.balanceOf.call(addresshbtlGRr, {from: accounts[3]});
		const boolvzlWlM5 = await FinalyBOHyd.transfer.call(addressCXZILBR, uintfgdireP, {from: accounts[3]});
		const uinty9PODo4 = await FinalyBOHyd.allowance.call(addressIsoiQRt, addressdMGdi8T, {from: accounts[3]});
		const boolQps9m0p = await FinalyBOHyd.approveAndCall.call(addressSshjR50, uintGh9PkJ, {from: accounts[3]});
		const uintzF7s3rU = await FinalyBOHyd.balanceOf.call(addressaCDLXps, {from: "0x0000000000000000000000000000000000000001"});
		const uintL9w6PX3 = await FinalyBOHyd.totalSupply.call({from: accounts[1]});
		const boolhtbzH8 = await FinalyBOHyd.transfer.call(addressKjfkPFO, uintWQ3RDK6, {from: accounts[0]});
		const stringx1pkvRy = await FinalyBOHyd.symbol.call({from: accounts[1]});

		assert.equal(boolvzlWlM5, true)
		assert.equal(uint8cd7Rhwu, BigInt("18"))
		assert.equal(uintNzrYkZ, BigInt("0"))
		await expect(FinalyBOHyd.allowance.call(addressIsoiQRt, addressdMGdi8T, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})