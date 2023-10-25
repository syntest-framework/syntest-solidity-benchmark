const XenoFelix = artifacts.require("XenoFelix");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('XenoFelix', (accounts) => {
	it('test for XenoFelix', async () => {
		const XenoFelixtmG6mql = await XenoFelix.new({from: "0x0000000000000000000000000000000000000001"});
		const uintSUESuk = BigInt("18")
		const addressswHlF4 = accounts[4]
		const addresswTAYgb = accounts[0]
		const uintx6h18TM = BigInt("895")
		const boolQPiEJH8 = await XenoFelixtmG6mql.transfer.call(addressswHlF4, uintSUESuk, {from: accounts[3]});
		const boolg8DzSPt = await XenoFelixtmG6mql.isOwner.call(addresswTAYgb, {from: accounts[1]});
		const uint256fvRORxl = await XenoFelixtmG6mql.burn.call(uintx6h18TM, {from: accounts[4]});
	});

	it('test for XenoFelix', async () => {
		const stringc6euVVk = "hcngIaBWIqZq2NfD2EYQMQ2fSMgV7"
		const stringjl7t7aY = "8A7pO"
		const uintc3e3DWC = BigInt("132")
		const XenoFelixWBGJAu7 = await XenoFelix.new(stringc6euVVk, stringjl7t7aY, uintc3e3DWC, {from: accounts[2]});
		const uinthjwHUgF = BigInt("1832")
		const uintKtR5w7 = BigInt("587")
		const addressomesUYf = accounts[4]
		const addresssqPQyoJ = accounts[0]
		const uinttEwme1T = BigInt("1093")
		const addresshwUoWZi = accounts[4]
		const boolOgPKo7T = await XenoFelixWBGJAu7.transferWithLock.call(addressomesUYf, uintKtR5w7, uinthjwHUgF, {from: accounts[5]});
		const boolAkofpJj = await XenoFelixWBGJAu7.freezeAccount.call(addresssqPQyoJ, {from: accounts[2]});
		const boolXZdntec = await XenoFelixWBGJAu7.burnOwner.call(addresshwUoWZi, uinttEwme1T, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for XenoFelix', async () => {
		const stringLsw8JHo = "zB06ngWWqSORvKeTL8X"
		const stringiRt6tUc = "eq7XkeZP"
		const uintyvCeXE5 = BigInt("1605")
		const uintaZ1LkEe = BigInt("221")
		const XenoFelixA3jn74F = await XenoFelix.new(stringLsw8JHo, stringiRt6tUc, uintyvCeXE5, uintaZ1LkEe, {from: accounts[1]});
		const addressfR1mEj = accounts[5]
		const addressBrhswNl = accounts[5]
		const addressxEaClQY = accounts[0]
		const boolMyCnfJL = await XenoFelixA3jn74F.isOwner.call(addressfR1mEj, {from: accounts[2]});
//		await XenoFelixA3jn74F.onlyPauser.call({from: accounts[4]});
//		const addressM4rqNs = await XenoFelixA3jn74F.transferOwnership.call(addressBrhswNl, {from: accounts[2]});
//		await XenoFelixA3jn74F.onlyNewOwner.call({from: accounts[1]});
//		const address4qTXVY = await XenoFelixA3jn74F.notFrozen.call(addressxEaClQY, {from: accounts[4]});

		assert.equal(boolMyCnfJL, false)
		await expect(XenoFelixA3jn74F.onlyPauser.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringfGUvZbH = "CdHvX6rEjhAiClJF2r8CtcB2zbE6UWn4sKiRbX"
		const stringvyUyFHO = "5hgCjk2I7xQAzHSOdmWFhidPm5JaYlrChmopoCu5BoXChsm7"
		const uint5Amk5p = BigInt("193")
		const XenoFelixInfud9l = await XenoFelix.new(stringfGUvZbH, stringvyUyFHO, uint5Amk5p, {from: accounts[0]});
		const addresslf6f7Tw = accounts[1]
		const addresscc0DLdT = accounts[1]
		const uintlyTAtoL = BigInt("1820")
		const addresskDPdMk2 = accounts[3]
		await XenoFelixInfud9l.whenNotPaused.call({from: accounts[3]});
		const addressKFFLp0F = await XenoFelixInfud9l.notFrozen.call(addresslf6f7Tw, {from: "0x0000000000000000000000000000000000000001"});
		const addressWsvD1I = await XenoFelixInfud9l.addPauser.call(addresscc0DLdT, {from: accounts[5]});
		const boolaukXOW = await XenoFelixInfud9l.unlock.call(addresskDPdMk2, uintlyTAtoL, {from: accounts[0]});
	});

	it('test for XenoFelix', async () => {
		const stringoKIw0Lq = "PjbNBu25gNFbS4ctL0OgQsDMjl7NqUuz"
		const stringxHStxXq = "VldDxqTgRj5TvpzLAytNF35BeaklCxG"
		const uintagkBtXU = BigInt("741")
		const uintp2M08z = BigInt("214")
		const XenoFelixxJ17WcK = await XenoFelix.new(stringoKIw0Lq, stringxHStxXq, uintagkBtXU, uintp2M08z, {from: accounts[1]});
		const uintK1X3uu = BigInt("1774")
		const addressDWkCIS = accounts[0]
		const uintrw43yvi = BigInt("119")
		const uint43hUsx = BigInt("108")
		const addressJUAEX7X = accounts[0]
		const uintp5VKE8Y = BigInt("1052")
		const addressDChmnar = accounts[0]
		const addressz8Akdd9 = accounts[4]
//		const boolmUIMYJn = await XenoFelixxJ17WcK.transfer.call(addressDWkCIS, uintK1X3uu, {from: accounts[5]});
//		const boolE5ZHgqq = await XenoFelixxJ17WcK.lock.call(addressJUAEX7X, uint43hUsx, uintrw43yvi, {from: accounts[2]});
//		await XenoFelixxJ17WcK.whenPaused.call({from: "0x0000000000000000000000000000000000000001"});
//		const boolHpOTkg8 = await XenoFelixxJ17WcK.transferFrom.call(addressz8Akdd9, addressDChmnar, uintp5VKE8Y, {from: accounts[1]});
//		const stringbZLYsW = await XenoFelixxJ17WcK.name.call({from: accounts[0]});

		await expect(XenoFelixxJ17WcK.transfer.call(addressDWkCIS, uintK1X3uu, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringzD8bBOM = "Cq6C7d4UjVlIM5mlgFyIUuv7rV6yqmKOM9K7gONs6l5sFM16G7TEf8Rgszfvbfail"
		const stringnhCI4Af = "eGdMxht5Cig39AMQv7J3Ez2H"
		const uintTND4ZFF = BigInt("171")
		const XenoFelixoxonbR = await XenoFelix.new(stringzD8bBOM, stringnhCI4Af, uintTND4ZFF, {from: accounts[1]});
		const uintTFQi0eb = BigInt("1399")
		const addressTDQCgYC = accounts[3]
		const addressPqbFTiU = accounts[2]
		const uintH5ZlSV6 = BigInt("780")
		const addressNB2v0r6 = accounts[3]
		const uinttbULrCH = BigInt("79")
		const addressQ4iG3yq = accounts[0]
		const boolFetFEo5 = await XenoFelixoxonbR.transferFrom.call(addressPqbFTiU, addressTDQCgYC, uintTFQi0eb, {from: accounts[5]});
		const addressa3hkty = await XenoFelixoxonbR.burnFrom.call(addressNB2v0r6, uintH5ZlSV6, {from: "0x0000000000000000000000000000000000000001"});
		const boolWzGJq7k = await XenoFelixoxonbR.approve.call(addressQ4iG3yq, uinttbULrCH, {from: accounts[0]});
	});

	it('test for XenoFelix', async () => {
		const stringoKIw0Lq = "PjbNBu25gNFbS4ctL0OgQsDMjl7NqUuz"
		const stringxHStxXq = "VldDxqTgRj5TvpzLAytNF35BeaklCxG"
		const uintN3SODkl = BigInt("741")
		const uintJeVXTi = BigInt("214")
		const XenoFelixxJ17WcK = await XenoFelix.new(stringoKIw0Lq, stringxHStxXq, uintN3SODkl, uintJeVXTi, {from: accounts[1]});
		const uintKki5NOg = BigInt("1052")
		const addressqXpHv2 = accounts[0]
		const addressoDD710G = accounts[5]
//		const boolHpOTkg8 = await XenoFelixxJ17WcK.transferFrom.call(addressoDD710G, addressqXpHv2, uintKki5NOg, {from: accounts[1]});

		await expect(XenoFelixxJ17WcK.transferFrom.call(addressoDD710G, addressqXpHv2, uintKki5NOg, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringoKIw0Lq = "PjbNBu25gNFbS4ctL0OgQsDMjl7NqUuz"
		const stringxHStxXq = "VldDxqTgRj5TvpzLAytNF35BeaklCxG"
		const uintDUE6Hzv = BigInt("741")
		const uintvUFCUFa = BigInt("214")
		const XenoFelixxJ17WcK = await XenoFelix.new(stringoKIw0Lq, stringxHStxXq, uintDUE6Hzv, uintvUFCUFa, {from: accounts[1]});
		const addressURIDpR = accounts[1]
		const uintQsk1PC3 = BigInt("1233")
		const addresspKW3K2 = accounts[0]
		const uintdPHozpr = BigInt("1052")
		const addressVMcbE5s = accounts[0]
		const addresskmeBJYd = accounts[5]
//		const boolXOiw8c = await XenoFelixxJ17WcK.freezeAccount.call(addressURIDpR, {from: accounts[0]});
//		const boolmUIMYJn = await XenoFelixxJ17WcK.transfer.call(addresspKW3K2, uintQsk1PC3, {from: accounts[5]});
//		const boolHpOTkg8 = await XenoFelixxJ17WcK.transferFrom.call(addresskmeBJYd, addressVMcbE5s, uintdPHozpr, {from: accounts[1]});

		await expect(XenoFelixxJ17WcK.freezeAccount.call(addressURIDpR, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringg9Wklzu = "QilmarFTWgMyCJQZqYStkhqynGFRVPJqws9hVbEcrf7qiYGLQGrMVUlKqMiP"
		const stringJITV1sk = "X8dtEkQ"
		const uintMclcCtZ = BigInt("1255")
		const uintsaBPoF5 = BigInt("136")
		const XenoFelixPP2ZfC8 = await XenoFelix.new(stringg9Wklzu, stringJITV1sk, uintMclcCtZ, uintsaBPoF5, {from: "0x0000000000000000000000000000000000000001"});
		const addressH4abNIi = accounts[3]
		const addressZuuI0lL = accounts[2]
		const addressZkhbgGP = accounts[1]
		const addressOtDIiZO = await XenoFelixPP2ZfC8.addPauser.call(addressH4abNIi, {from: accounts[5]});
		await XenoFelixPP2ZfC8.pause.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256J3QslX9 = await XenoFelixPP2ZfC8.allowance.call(addressZkhbgGP, addressZuuI0lL, {from: accounts[2]});
	});

	it('test for XenoFelix', async () => {
		const stringoKIw0Lq = "PjbNBu25gNFbS4ctL0OgQsDMjl7NqUuz"
		const stringxHStxXq = "VldDxqTgRj5TvpzLAytNF35BeaklCxG"
		const uintXxs0NQH = BigInt("741")
		const uintrYv0IHu = BigInt("214")
		const XenoFelixxJ17WcK = await XenoFelix.new(stringoKIw0Lq, stringxHStxXq, uintXxs0NQH, uintrYv0IHu, {from: accounts[1]});
		const uint0rQAgd = BigInt("1052")
		const addressePFHbaR = accounts[0]
		const addressjHR8los = accounts[5]
//		await XenoFelixxJ17WcK.renouncePauser.call({from: accounts[0]});
//		const boolHpOTkg8 = await XenoFelixxJ17WcK.transferFrom.call(addressjHR8los, addressePFHbaR, uint0rQAgd, {from: accounts[1]});
//		await XenoFelixxJ17WcK.unpause.call({from: accounts[2]});

		await expect(XenoFelixxJ17WcK.renouncePauser.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringoKIw0Lq = "PjbNBu25gNFbS4ctL0OgQsDMjl7NqUuz"
		const stringxHStxXq = "VldDxqTgRj5TvpzLAytNF35BeaklCxG"
		const uintE9dWbM = BigInt("741")
		const uintARcz5hN = BigInt("214")
		const XenoFelixxJ17WcK = await XenoFelix.new(stringoKIw0Lq, stringxHStxXq, uintE9dWbM, uintARcz5hN, {from: accounts[1]});
		const uintFPZpwdk = BigInt("1895")
		const addressp3z3x5H = accounts[2]
		const uinttKm3yC = BigInt("1743")
		const addressFFaFmKv = accounts[0]
		const boolkS9DIwm = await XenoFelixxJ17WcK.transfer.call(addressp3z3x5H, uintFPZpwdk, {from: accounts[1]});
//		const boolmUIMYJn = await XenoFelixxJ17WcK.transfer.call(addressFFaFmKv, uinttKm3yC, {from: accounts[5]});

		assert.equal(boolkS9DIwm, true)
		await expect(XenoFelixxJ17WcK.transfer.call(addressFFaFmKv, uinttKm3yC, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringFSsp5LT = "QkaCpQ8LqqnZge93uN5NLVQd40u9ingbAvfzVicoRIsQBOsvrcP2MNfCqgNh5pa2"
		const stringurQnCLs = "wHJWAQ9o57EEcGNbwJYyAQlA52DFcB9SROPg36jXjbuJmMrDw7iqmTNFvNIWmyLpBrykPOPzuJDjZeCEEqd9rQrr8f"
		const uintAg4tCOQ = BigInt("1065")
		const uintCDdTAPy = BigInt("143")
		const XenoFelixlVsUSPu = await XenoFelix.new(stringFSsp5LT, stringurQnCLs, uintAg4tCOQ, uintCDdTAPy, {from: accounts[3]});
		const addressmV7omsN = accounts[0]
		const addressceyy3ps = accounts[0]
		const stringnoHUD1t = await XenoFelixlVsUSPu.name.call({from: accounts[3]});
//		const addressawkOde = await XenoFelixlVsUSPu.notFrozenAndTransaction.call(addressceyy3ps, addressmV7omsN, {from: accounts[2]});
//		await XenoFelixlVsUSPu.renouncePauser.call({from: accounts[4]});

		assert.equal(stringnoHUD1t, "QkaCpQ8LqqnZge93uN5NLVQd40u9ingbAvfzVicoRIsQBOsvrcP2MNfCqgNh5pa2")
		await expect(XenoFelixlVsUSPu.notFrozenAndTransaction.call(addressceyy3ps, addressmV7omsN, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringacOxdi1 = "L"
		const stringiM34yMU = "LHtXsCPKudtL8m923PlrecwCIHr8iuRBkGECxG"
		const uintncziaSZ = BigInt("113")
		const XenoFelixYeKbETa = await XenoFelix.new(stringacOxdi1, stringiM34yMU, uintncziaSZ, {from: accounts[3]});
		const addressh9vL5K = accounts[5]
		const uintT0poeEv = BigInt("746")
		const addressaBZvZSs = accounts[3]
		const uintG6xIttQ = BigInt("257")
		const uinteWHBuNd = BigInt("614")
		const addresszoOlAs = accounts[5]
		const uintx7SUyvL = BigInt("161")
		const addressJNg3ONS = accounts[4]
		const booleM6sNWh = await XenoFelixYeKbETa.freezeAccount.call(addressh9vL5K, {from: accounts[1]});
		const stringtRFDYeD = await XenoFelixYeKbETa.symbol.call({from: accounts[1]});
		const boolO5HfCl2 = await XenoFelixYeKbETa.transfer.call(addressaBZvZSs, uintT0poeEv, {from: accounts[1]});
		const boolhDKX7K1 = await XenoFelixYeKbETa.lock.call(addresszoOlAs, uinteWHBuNd, uintG6xIttQ, {from: accounts[2]});
		const booloPXwAln = await XenoFelixYeKbETa.decreaseAllowance.call(addressJNg3ONS, uintx7SUyvL, {from: accounts[3]});
		await XenoFelixYeKbETa.pause.call({from: accounts[1]});
	});

	it('test for XenoFelix', async () => {
		const stringoKIw0Lq = "PjbNBu25gNFbS4ctL0OgQsDMjl7NqUuz"
		const stringxHStxXq = "VldDxqTgRj5TvpzLAytNF35BeaklCxG"
		const uintwCkoaQO = BigInt("741")
		const uint9qZidS = BigInt("214")
		const XenoFelixxJ17WcK = await XenoFelix.new(stringoKIw0Lq, stringxHStxXq, uintwCkoaQO, uint9qZidS, {from: accounts[1]});
		const uintEHv8eZR = BigInt("1369")
		const addressqyaFsEK = accounts[1]
		const uintEQHgs0 = BigInt("312")
		const addressXJ6MB3R = accounts[4]
		const addresspJs3CiH = accounts[5]
		const uinttaWkPAf = BigInt("1052")
		const addressD1jwlq = accounts[0]
		const addressi7eVB2H = accounts[5]
//		const boolk9AChEu = await XenoFelixxJ17WcK.decreaseAllowance.call(addressqyaFsEK, uintEHv8eZR, {from: accounts[3]});
//		const booloW6xU4d = await XenoFelixxJ17WcK.transferFrom.call(addresspJs3CiH, addressXJ6MB3R, uintEQHgs0, {from: accounts[2]});
//		const boolHpOTkg8 = await XenoFelixxJ17WcK.transferFrom.call(addressi7eVB2H, addressD1jwlq, uinttaWkPAf, {from: accounts[1]});

		await expect(XenoFelixxJ17WcK.decreaseAllowance.call(addressqyaFsEK, uintEHv8eZR, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringoKIw0Lq = "PjbNBu25gNFbS4ctL0OgQsDMjl7NqUuz"
		const stringxHStxXq = "VldDxqTgRj5TvpzLAytNF35BeaklCxG"
		const uintDRAzu8 = BigInt("741")
		const uintzV4ExCd = BigInt("214")
		const XenoFelixxJ17WcK = await XenoFelix.new(stringoKIw0Lq, stringxHStxXq, uintDRAzu8, uintzV4ExCd, {from: accounts[1]});
		const addressjONOUpD = accounts[0]
		const uintkdZPgT3 = BigInt("1052")
		const addressAGp9Fc = accounts[0]
		const addressg99I881 = accounts[5]
		const uint8nYzhV9 = await XenoFelixxJ17WcK.decimals.call({from: accounts[1]});
		const boolRCITqKx = await XenoFelixxJ17WcK.isOwner.call(addressjONOUpD, {from: accounts[3]});
//		const boolHpOTkg8 = await XenoFelixxJ17WcK.transferFrom.call(addressg99I881, addressAGp9Fc, uintkdZPgT3, {from: accounts[1]});

		assert.equal(boolRCITqKx, false)
		assert.equal(uint8nYzhV9, BigInt("214"))
		await expect(XenoFelixxJ17WcK.transferFrom.call(addressg99I881, addressAGp9Fc, uintkdZPgT3, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringoKIw0Lq = "PjbNBu25gNFbS4ctL0OgQsDMjl7NqUuz"
		const stringxHStxXq = "VldDxqTgRj5TvpzLAytNF35BeaklCxG"
		const uintflgUU42 = BigInt("741")
		const uintqz5hc8b = BigInt("214")
		const XenoFelixxJ17WcK = await XenoFelix.new(stringoKIw0Lq, stringxHStxXq, uintflgUU42, uintqz5hc8b, {from: accounts[1]});
		const uintWSdQXvf = BigInt("1774")
		const addressfgSgsB = accounts[1]
		const uintC7xuBcV = BigInt("1052")
		const addressVtHO6WE = accounts[0]
		const addressKJW9M05 = accounts[5]
		const uint256HL1bZs = await XenoFelixxJ17WcK.totalSupply.call({from: accounts[1]});
//		const boolmUIMYJn = await XenoFelixxJ17WcK.transfer.call(addressfgSgsB, uintWSdQXvf, {from: accounts[5]});
//		const boolHpOTkg8 = await XenoFelixxJ17WcK.transferFrom.call(addressKJW9M05, addressVtHO6WE, uintC7xuBcV, {from: accounts[1]});

		assert.equal(uint256HL1bZs, BigInt("112174511395897575868748022981388315121132558444333518574463358162109712039936"))
		await expect(XenoFelixxJ17WcK.transfer.call(addressfgSgsB, uintWSdQXvf, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringoKIw0Lq = "PjbNBu25gNFbS4ctL0OgQsDMjl7NqUuz"
		const stringxHStxXq = "VldDxqTgRj5TvpzLAytNF35BeaklCxG"
		const uintffYiyDK = BigInt("741")
		const uintjZgNCGg = BigInt("214")
		const XenoFelixxJ17WcK = await XenoFelix.new(stringoKIw0Lq, stringxHStxXq, uintffYiyDK, uintjZgNCGg, {from: accounts[1]});
		const uintKmg4IMa = BigInt("1319")
		const addressrycuNzE = accounts[2]
		const uintCScd0dj = BigInt("1912")
		const addressXMQeNsM = accounts[0]
		const addressrsSihnu = accounts[5]
		const uintxtUfwIH = BigInt("1306")
		const uintWAAEL7p = BigInt("502")
		const addressx8rRVAl = accounts[4]
		const uintlOyfU7t = BigInt("1052")
		const addressa5OWD0 = accounts[0]
		const addressL6YZUK3 = accounts[5]
//		const addressmS9ehMT = await XenoFelixxJ17WcK.burnFrom.call(addressrycuNzE, uintKmg4IMa, {from: accounts[3]});
//		const boolSg42x0f = await XenoFelixxJ17WcK.transferFrom.call(addressrsSihnu, addressXMQeNsM, uintCScd0dj, {from: accounts[2]});
//		const boolauWayNt = await XenoFelixxJ17WcK.transferWithLock.call(addressx8rRVAl, uintWAAEL7p, uintxtUfwIH, {from: accounts[2]});
//		const boolHpOTkg8 = await XenoFelixxJ17WcK.transferFrom.call(addressL6YZUK3, addressa5OWD0, uintlOyfU7t, {from: accounts[1]});

		await expect(XenoFelixxJ17WcK.burnFrom.call(addressrycuNzE, uintKmg4IMa, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringoKIw0Lq = "PjbNBu25gNFbS4ctL0OgQsDMjl7NqUuz"
		const stringxHStxXq = "VldDxqTgRj5TvpzLAytNF35BeaklCxG"
		const uintmGJJ0QB = BigInt("741")
		const uint2sNtDE = BigInt("214")
		const XenoFelixxJ17WcK = await XenoFelix.new(stringoKIw0Lq, stringxHStxXq, uintmGJJ0QB, uint2sNtDE, {from: accounts[1]});
		const uinteSDGTEV = BigInt("1729")
		const addressU4CmOl1 = accounts[0]
		const booluOLhlbr = await XenoFelixxJ17WcK.paused.call({from: accounts[1]});
//		const boolmUIMYJn = await XenoFelixxJ17WcK.transfer.call(addressU4CmOl1, uinteSDGTEV, {from: accounts[5]});

		assert.equal(booluOLhlbr, false)
		await expect(XenoFelixxJ17WcK.transfer.call(addressU4CmOl1, uinteSDGTEV, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringhxOf7GO = "mFBHuji3UgPB3jg2Yb1yMXbvWo6qm"
		const stringz9Zk7fd = "pGeWABxYFoqkcFlJTKMFdz5KBymdGMjIx"
		const uintOh8CXC9 = BigInt("633")
		const uintvpRC1kJ = BigInt("24")
		const XenoFelixH1Sfeiw = await XenoFelix.new(stringhxOf7GO, stringz9Zk7fd, uintOh8CXC9, uintvpRC1kJ, {from: accounts[5]});
		const uintlaCjDYa = BigInt("1877")
		const uintaezQe9M = BigInt("141")
		const addressvGroRG = accounts[2]
		const uintJp6oJ81 = BigInt("1048")
		const addressLfusJ2 = accounts[1]
		const uintwXImhBo = BigInt("1895")
		const addressUJ3WAnC = accounts[4]
		const addressBGgKhSS = accounts[2]
		const addressBdrBYqI = "0x0000000000000000000000000000000000000001"
//		const uint256GWhQg4V = await XenoFelixH1Sfeiw.burn.call(uintlaCjDYa, {from: accounts[0]});
//		const boolwcRpeXU = await XenoFelixH1Sfeiw.increaseAllowance.call(addressvGroRG, uintaezQe9M, {from: accounts[1]});
//		const boolv4uu5Uq = await XenoFelixH1Sfeiw.decreaseAllowance.call(addressLfusJ2, uintJp6oJ81, {from: accounts[4]});
//		const boolj49TeDj = await XenoFelixH1Sfeiw.burnOwner.call(addressUJ3WAnC, uintwXImhBo, {from: accounts[1]});
//		const address8bzXCO = await XenoFelixH1Sfeiw.notFrozenAndTransaction.call(addressBdrBYqI, addressBGgKhSS, {from: accounts[1]});
//		await XenoFelixH1Sfeiw.whenPaused.call({from: accounts[3]});

		await expect(XenoFelixH1Sfeiw.burn.call(uintlaCjDYa, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringoKIw0Lq = "PjbNBu25gNFbS4ctL0OgQsDMjl7NqUuz"
		const stringxHStxXq = "VldDxqTgRj5TvpzLAytNF35BeaklCxG"
		const uintSsn0fwp = BigInt("741")
		const uintmU6lPng = BigInt("214")
		const XenoFelixxJ17WcK = await XenoFelix.new(stringoKIw0Lq, stringxHStxXq, uintSsn0fwp, uintmU6lPng, {from: accounts[1]});
		const addressf6IvXrd = accounts[4]
		const uintzRzyG20 = BigInt("1052")
		const addresslBcJyM = accounts[0]
		const addressKVUrrN5 = accounts[6]
		const uint256WlXk2U = await XenoFelixxJ17WcK.balanceOf.call(addressf6IvXrd, {from: accounts[4]});
//		await XenoFelixxJ17WcK.renouncePauser.call({from: accounts[4]});
//		const boolHpOTkg8 = await XenoFelixxJ17WcK.transferFrom.call(addressKVUrrN5, addresslBcJyM, uintzRzyG20, {from: accounts[1]});

		assert.equal(uint256WlXk2U, BigInt("0"))
		await expect(XenoFelixxJ17WcK.renouncePauser.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringoKIw0Lq = "PjbNBu25gNFbS4ctL0OgQsDMjl7NqUuz"
		const stringxHStxXq = "VldDxqTgRj5TvpzLAytNF35BeaklCxG"
		const uintkfyXlk2 = BigInt("741")
		const uintkPv7HU = BigInt("214")
		const XenoFelixxJ17WcK = await XenoFelix.new(stringoKIw0Lq, stringxHStxXq, uintkfyXlk2, uintkPv7HU, {from: accounts[1]});
		const uintf6rgBQQ = BigInt("1738")
		const addressaG9z5G7 = accounts[0]
		const uintI70wHw = BigInt("201")
		const stringob3tEg = await XenoFelixxJ17WcK.symbol.call({from: accounts[3]});
//		const boolCSUBPnI = await XenoFelixxJ17WcK.acceptOwnership.call({from: accounts[3]});
//		const boolmUIMYJn = await XenoFelixxJ17WcK.transfer.call(addressaG9z5G7, uintf6rgBQQ, {from: accounts[5]});
//		const uint256hx76MkK = await XenoFelixxJ17WcK.burn.call(uintI70wHw, {from: accounts[0]});

		assert.equal(stringob3tEg, "VldDxqTgRj5TvpzLAytNF35BeaklCxG")
		await expect(XenoFelixxJ17WcK.acceptOwnership.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringoKIw0Lq = "PjbNBu25gNFbS4ctL0OgQsDMjl7NqUuz"
		const stringxHStxXq = "VldDxqTgRj5TvpzLAytNF35BeaklCxG"
		const uintPkbf22m = BigInt("741")
		const uintIrArUsS = BigInt("214")
		const XenoFelixxJ17WcK = await XenoFelix.new(stringoKIw0Lq, stringxHStxXq, uintPkbf22m, uintIrArUsS, {from: accounts[1]});
		const uintpDyQX3q = BigInt("129")
		const addressV9nSZxo = "0x0000000000000000000000000000000000000001"
		const uintO0jjdTp = BigInt("1052")
		const addressFGHiNsd = accounts[0]
		const addressXHSs7ej = accounts[6]
		const boolFMgJc4i = await XenoFelixxJ17WcK.increaseAllowance.call(addressV9nSZxo, uintpDyQX3q, {from: accounts[0]});
//		const boolHpOTkg8 = await XenoFelixxJ17WcK.transferFrom.call(addressXHSs7ej, addressFGHiNsd, uintO0jjdTp, {from: accounts[1]});

		assert.equal(boolFMgJc4i, true)
		await expect(XenoFelixxJ17WcK.transferFrom.call(addressXHSs7ej, addressFGHiNsd, uintO0jjdTp, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringovVfOvj = "Ovmc"
		const stringpB7KggD = "HMfPFuvGHP8IlKMXTK3SZhkiOBGDkFWkM3lOGLf3ZpUZp3UQSyp2hrnCsQSCcFUESj6R7ks6OVpWE4ZYfbANR5UkQzEBKFcooq"
		const uinto3zGxV5 = BigInt("9")
		const XenoFelixjwnrHd9 = await XenoFelix.new(stringovVfOvj, stringpB7KggD, uinto3zGxV5, {from: accounts[5]});
		const addressayP9nbZ = accounts[0]
		const addressIpsi8x7 = accounts[0]
		const addressLh2p3bj = accounts[0]
		const addressbu8xwLv = await XenoFelixjwnrHd9.transferOwnership.call(addressayP9nbZ, {from: accounts[2]});
		const addressIr0FY0E = await XenoFelixjwnrHd9.notFrozenAndTransaction.call(addressLh2p3bj, addressIpsi8x7, {from: accounts[3]});
		await XenoFelixjwnrHd9.renouncePauser.call({from: accounts[5]});
	});

	it('test for XenoFelix', async () => {
		const stringoKIw0Lq = "PjbNBu25gNFbS4ctL0OgQsDMjl7NqUuz"
		const stringxHStxXq = "VldDxqTgRj5TvpzLAytNF35BeaklCxG"
		const uintVnTQVM6 = BigInt("741")
		const uintnvCI2lA = BigInt("214")
		const XenoFelixxJ17WcK = await XenoFelix.new(stringoKIw0Lq, stringxHStxXq, uintVnTQVM6, uintnvCI2lA, {from: accounts[1]});
		const addressuQfpavT = accounts[0]
		const addressmvB9bNW = accounts[1]
		const uintx5HBNau = BigInt("1795")
		const addressPl0gGD2 = accounts[1]
		const uint256CxlSTFf = await XenoFelixxJ17WcK.allowance.call(addressmvB9bNW, addressuQfpavT, {from: accounts[4]});
//		const boolmUIMYJn = await XenoFelixxJ17WcK.transfer.call(addressPl0gGD2, uintx5HBNau, {from: accounts[5]});

		assert.equal(uint256CxlSTFf, BigInt("0"))
		await expect(XenoFelixxJ17WcK.transfer.call(addressPl0gGD2, uintx5HBNau, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringoKIw0Lq = "PjbNBu25gNFbS4ctL0OgQsDMjl7NqUuz"
		const stringxHStxXq = "VldDxqTgRj5TvpzLAytNF35BeaklCxG"
		const uintmCmQkoO = BigInt("741")
		const uintWH1l5ff = BigInt("214")
		const XenoFelixxJ17WcK = await XenoFelix.new(stringoKIw0Lq, stringxHStxXq, uintmCmQkoO, uintWH1l5ff, {from: accounts[1]});
		const addressagyS2Z = accounts[4]
		const uintM6BalKL = BigInt("671")
		const uint9VQ7uE = BigInt("1566")
		const addressQVsO4q0 = accounts[2]
		const uintkJJieH6 = BigInt("168")
		const addressS0bKU7P = accounts[1]
		const uint8yslo1 = BigInt("1052")
		const addressWrSKKG6 = accounts[0]
		const addressWnx337 = accounts[6]
		const uint256WlXk2U = await XenoFelixxJ17WcK.balanceOf.call(addressagyS2Z, {from: accounts[4]});
		const boolq3MPJVd = await XenoFelixxJ17WcK.transferWithLock.call(addressQVsO4q0, uint9VQ7uE, uintM6BalKL, {from: accounts[1]});
//		const boolSPpgHyl = await XenoFelixxJ17WcK.transfer.call(addressS0bKU7P, uintkJJieH6, {from: accounts[0]});
//		const boolHpOTkg8 = await XenoFelixxJ17WcK.transferFrom.call(addressWnx337, addressWrSKKG6, uint8yslo1, {from: accounts[1]});

		assert.equal(boolq3MPJVd, true)
		assert.equal(uint256WlXk2U, BigInt("0"))
		await expect(XenoFelixxJ17WcK.transfer.call(addressS0bKU7P, uintkJJieH6, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringoKIw0Lq = "PjbNBu25gNFbS4ctL0OgQsDMjl7NqUuz"
		const stringxHStxXq = "VldDxqTgRj5TvpzLAytNF35BeaklCxG"
		const uintdiNf3rY = BigInt("741")
		const uint6ZijDo = BigInt("214")
		const XenoFelixxJ17WcK = await XenoFelix.new(stringoKIw0Lq, stringxHStxXq, uintdiNf3rY, uint6ZijDo, {from: accounts[1]});
		const addressOyRK4ax = accounts[4]
		const addressvHt2tu2 = accounts[2]
		const uintH5MdVI9 = BigInt("1052")
		const addressVP6hyM0 = accounts[0]
		const addresseiThrVe = accounts[6]
		const uint256WlXk2U = await XenoFelixxJ17WcK.balanceOf.call(addressOyRK4ax, {from: accounts[4]});
		const addressduLLPVp = await XenoFelixxJ17WcK.transferOwnership.call(addressvHt2tu2, {from: accounts[1]});
//		const boolHpOTkg8 = await XenoFelixxJ17WcK.transferFrom.call(addresseiThrVe, addressVP6hyM0, uintH5MdVI9, {from: accounts[1]});

		assert.equal(uint256WlXk2U, BigInt("0"))
		await expect(XenoFelixxJ17WcK.transferFrom.call(addresseiThrVe, addressVP6hyM0, uintH5MdVI9, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringcF4jq9 = "S7YqNKjwzgvSCEcTIOyyt7"
		const stringnN3gPsO = "f4JwoVG3vs04zRcRMjbktLW"
		const uintpYS0Zij = BigInt("17")
		const XenoFelixdLPJa0 = await XenoFelix.new(stringcF4jq9, stringnN3gPsO, uintpYS0Zij, {from: accounts[4]});
		const uintcthDTd = BigInt("1890")
		const addressI9MpUoR = accounts[3]
		const uintHKfGaK3 = BigInt("1461")
		const uints4dlEEB = BigInt("744")
		const addressnRN6Phw = accounts[4]
		await XenoFelixdLPJa0.renouncePauser.call({from: accounts[1]});
		await XenoFelixdLPJa0.pause.call({from: accounts[3]});
		await XenoFelixdLPJa0.onlyPauser.call({from: accounts[3]});
		const boolkjn37F = await XenoFelixdLPJa0.unlock.call(addressI9MpUoR, uintcthDTd, {from: accounts[4]});
		const boolYXeudl = await XenoFelixdLPJa0.lock.call(addressnRN6Phw, uints4dlEEB, uintHKfGaK3, {from: accounts[3]});
	});

	it('test for XenoFelix', async () => {
		const stringoKIw0Lq = "PjbNBu25gNFbS4ctL0OgQsDMjl7NqUuz"
		const stringxHStxXq = "VldDxqTgRj5TvpzLAytNF35BeaklCxG"
		const uintyRdZeko = BigInt("741")
		const uintswn9LGn = BigInt("214")
		const XenoFelixxJ17WcK = await XenoFelix.new(stringoKIw0Lq, stringxHStxXq, uintyRdZeko, uintswn9LGn, {from: accounts[1]});
		const uintAHIRBJY = BigInt("1770")
		const addressfEtFwla = accounts[1]
//		await XenoFelixxJ17WcK.pause.call({from: accounts[1]});
//		const boolmUIMYJn = await XenoFelixxJ17WcK.transfer.call(addressfEtFwla, uintAHIRBJY, {from: accounts[5]});

		await expect(XenoFelixxJ17WcK.pause.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringhrwpBVd = "X9e7HIukmrQZrsUZk7D4jQgjRzfN3osxa3Jv8rQsvDWFcFFeMXwB0lDjXpT2DHaokjWoyYHm"
		const stringyvlTZC0 = "4PsH5SgkRRkVBOWycAZIP3xJ"
		const uintg7m4Y02 = BigInt("195")
		const XenoFelixudpOYFc = await XenoFelix.new(stringhrwpBVd, stringyvlTZC0, uintg7m4Y02, {from: "0x0000000000000000000000000000000000000001"});
		const uintqxUoUO5 = BigInt("1767")
		const addressiHWBj3O = accounts[3]
		const uints5afZ3J = BigInt("1363")
		const addressAuUn554 = accounts[0]
		const addressWOzwoLN = accounts[1]
		const address9tiime = accounts[3]
		const uintiHXvQhj = BigInt("618")
		const addresswa3wFk = accounts[4]
		await XenoFelixudpOYFc.whenNotPaused.call({from: accounts[2]});
		await XenoFelixudpOYFc.whenNotPaused.call({from: accounts[1]});
		const boolfzu4GKO = await XenoFelixudpOYFc.transfer.call(addressiHWBj3O, uintqxUoUO5, {from: accounts[5]});
		const boolbgdiIrW = await XenoFelixudpOYFc.transferFrom.call(addressWOzwoLN, addressAuUn554, uints5afZ3J, {from: accounts[3]});
		const uint256Dno7fvA = await XenoFelixudpOYFc.balanceOf.call(address9tiime, {from: accounts[0]});
		const boolbLMr1Dp = await XenoFelixudpOYFc.transfer.call(addresswa3wFk, uintiHXvQhj, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for XenoFelix', async () => {
		const stringN3FXA1e = "tFhVoaQUoO3X33Fjf2ctQyJnFwcgYhnsy6m51NWCsL2"
		const stringUF3dfsy = "nQ4omGds75R21IuOUQAgMUsuWedNiFQqnn"
		const uintQT4iiCF = BigInt("260")
		const uintPKGqZQu = BigInt("170")
		const XenoFelixYxKike5 = await XenoFelix.new(stringN3FXA1e, stringUF3dfsy, uintQT4iiCF, uintPKGqZQu, {from: accounts[5]});
		const uintdek1V2N = BigInt("1148")
		const addressNUKVGFz = accounts[2]
		const uintrW75Hys = BigInt("103")
		const addressT17lQ6 = "0x0000000000000000000000000000000000000001"
		const boolRo1lEWL = await XenoFelixYxKike5.approve.call(addressNUKVGFz, uintdek1V2N, {from: accounts[3]});
//		await XenoFelixYxKike5.onlyPauser.call({from: accounts[1]});
//		const uint256cEd0VUS = await XenoFelixYxKike5.totalSupply.call({from: accounts[2]});
//		const boolfNdVA1O = await XenoFelixYxKike5.acceptOwnership.call({from: accounts[3]});
//		const addressSEd2tUY = await XenoFelixYxKike5.burnFrom.call(addressT17lQ6, uintrW75Hys, {from: "0x0000000000000000000000000000000000000001"});
//		const stringhkLPywK = await XenoFelixYxKike5.symbol.call({from: accounts[5]});

		assert.equal(boolRo1lEWL, true)
		await expect(XenoFelixYxKike5.onlyPauser.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringoKIw0Lq = "PjbNBu25gNFbS4ctL0OgQsDMjl7NqUuz"
		const stringxHStxXq = "VldDxqTgRj5TvpzLAytNF35BeaklCxG"
		const uintYjyfJvt = BigInt("741")
		const uintYnD9PBP = BigInt("214")
		const XenoFelixxJ17WcK = await XenoFelix.new(stringoKIw0Lq, stringxHStxXq, uintYjyfJvt, uintYnD9PBP, {from: accounts[1]});
		const uintfJpAgOQ = BigInt("365")
		const addresswDuLrdG = accounts[5]
		const addressFsTRkMP = accounts[5]
		const addressGCgOvoV = accounts[1]
		const boolBhy704B = await XenoFelixxJ17WcK.increaseAllowance.call(addresswDuLrdG, uintfJpAgOQ, {from: accounts[4]});
		const uint256WlXk2U = await XenoFelixxJ17WcK.balanceOf.call(addressFsTRkMP, {from: accounts[4]});
		const boolGdgFm1h = await XenoFelixxJ17WcK.freezeAccount.call(addressGCgOvoV, {from: accounts[1]});

		assert.equal(boolBhy704B, true)
		assert.equal(boolGdgFm1h, true)
		assert.equal(uint256WlXk2U, BigInt("0"))
	});

	it('test for XenoFelix', async () => {
		const stringoKIw0Lq = "PjbNBu25gNFbS4ctL0OgQsDMjl7NqUuz"
		const stringxHStxXq = "VldDxqTgRj5TvpzLAytNF35BeaklCxG"
		const uintFfku6Qi = BigInt("741")
		const uintyxC3yyy = BigInt("214")
		const XenoFelixxJ17WcK = await XenoFelix.new(stringoKIw0Lq, stringxHStxXq, uintFfku6Qi, uintyxC3yyy, {from: accounts[1]});
		const addressiJwfXU2 = accounts[1]
		const uintIYfZ5eW = BigInt("1770")
		const addressskAAym1 = accounts[2]
//		const addressS1zKp2f = await XenoFelixxJ17WcK.addPauser.call(addressiJwfXU2, {from: accounts[1]});
//		const boolmUIMYJn = await XenoFelixxJ17WcK.transfer.call(addressskAAym1, uintIYfZ5eW, {from: accounts[5]});

		await expect(XenoFelixxJ17WcK.addPauser.call(addressiJwfXU2, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})