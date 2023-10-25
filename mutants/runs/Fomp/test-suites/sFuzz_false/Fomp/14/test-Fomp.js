const Fomp = artifacts.require("Fomp");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Fomp', (accounts) => {
	it('test for Fomp', async () => {
		const addresssPhguNa = accounts[2]
		const FompH6WDl3 = await Fomp.new(addresssPhguNa, {from: accounts[5]});
		const addressDagSXuF = accounts[0]
		const uintd1m3NW = BigInt("218")
		const addressFEi64o1 = accounts[4]
		const uintYcR0Ibg = BigInt("1096")
		const addressyeIxSBq = accounts[5]
		const addressL0jVkhN = accounts[3]
		const bytexXAJSK9 = "0x1e070c111d0a081e110c161f1d1a06051c150814150f021202010c0912010c19"
		const byteo3dMoi5 = "0x1d08021d0a1f04121f1b160c030a0b0b021307110d1302180a1c141c12061f04"
		const uintKgB8TG = BigInt("174")
		const uintIrIe7fo = BigInt("1317")
		const uintnKjIggs = BigInt("469")
		const addressRvob3TN = accounts[4]
		const byteQIhDLIE = "0x0a1118131f0b1c091d17171a080a0d00010302180c07120e0b10010f1a121f1e"
		const byteF12FNDe = "0x0c0f0a0313011c161c171f1e15180c0802121f170509070a1616151108051015"
		const uintdYsNGev = BigInt("164")
		const uintPWtzPYJ = BigInt("1812")
		const uintWTazTTv = BigInt("220")
		const addressV3YEAs = accounts[0]
		const addresshrYM18j = await FompH6WDl3.delegate.call(addressDagSXuF, {from: accounts[0]});
		const uint96LeXH49r = await FompH6WDl3.getPriorVotes.call(addressFEi64o1, uintd1m3NW, {from: accounts[4]});
		const boolbaaCpS9 = await FompH6WDl3.approve.call(addressyeIxSBq, uintYcR0Ibg, {from: accounts[5]});
		const addressydntyYg = await FompH6WDl3.delegate.call(addressL0jVkhN, {from: accounts[0]});
		const addressl3OoOo = await FompH6WDl3.delegateBySig.call(addressRvob3TN, uintnKjIggs, uintIrIe7fo, uintKgB8TG, byteo3dMoi5, bytexXAJSK9, {from: accounts[4]});
		const addressr3PYE6u = await FompH6WDl3.delegateBySig.call(addressV3YEAs, uintWTazTTv, uintPWtzPYJ, uintdYsNGev, byteF12FNDe, byteQIhDLIE, {from: accounts[1]});

		assert.equal(boolbaaCpS9, true)
		assert.equal(uint96LeXH49r, BigInt("0"))
		await expect(FompH6WDl3.delegateBySig.call(addressRvob3TN, uintnKjIggs, uintIrIe7fo, uintKgB8TG, byteo3dMoi5, bytexXAJSK9, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Fomp', async () => {
		const addressltZRO6h = accounts[5]
		const Fomp6gQIv0 = await Fomp.new(addressltZRO6h, {from: accounts[1]});
		const byteJfwkAi = "0x13121d0a181220181b1b120703101b0d04041a1806150d02060512061f06130e"
		const byteNGeCiw = "0x0c01012016100b11030b1f101f12031b1f020c021b0b001e020c001c03020c18"
		const uintcNlri7 = BigInt("27")
		const uintmoefJO = BigInt("1141")
		const uintVLxsrP = BigInt("1805")
		const addresswyoeTqa = accounts[2]
		const addressW4iengX = accounts[3]
		const uintsKtXgRF = BigInt("1786")
		const addressETcZSQg = accounts[1]
		const addressa5y13L3 = accounts[1]
		const addressJOEJ9fE = await Fomp6gQIv0.delegateBySig.call(addresswyoeTqa, uintVLxsrP, uintmoefJO, uintcNlri7, byteNGeCiw, byteJfwkAi, {from: accounts[1]});
		const uintBH7Wlb = await Fomp6gQIv0.balanceOf.call(addressW4iengX, {from: accounts[2]});
		const boolcyqwQd = await Fomp6gQIv0.transfer.call(addressETcZSQg, uintsKtXgRF, {from: accounts[0]});
		const uint96PkdEIRg = await Fomp6gQIv0.getCurrentVotes.call(addressa5y13L3, {from: accounts[2]});

		await expect(Fomp6gQIv0.delegateBySig.call(addresswyoeTqa, uintVLxsrP, uintmoefJO, uintcNlri7, byteNGeCiw, byteJfwkAi, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Fomp', async () => {
		const addressZsPDHVB = accounts[2]
		const FompvDNvUgb = await Fomp.new(addressZsPDHVB, {from: "0x0000000000000000000000000000000000000001"});
		const uinteekKCb7 = BigInt("801")
		const addressu5dYTm5 = accounts[0]
		const addresscLMcuI = accounts[1]
		const addressDXQggWo = accounts[4]
		const uintvEUZ8E = BigInt("307")
		const addresswunMOQ = accounts[4]
		const addressQJIFFVR = accounts[4]
		const uintTzIA8ZJ = BigInt("141")
		const addresshvLqRys = accounts[4]
		const addressGhs7mI7 = accounts[2]
		const byteEojvpu0 = "0x0c1218111d0806010c090203081a0a0d1e1c1b0d03041c191a1d140a1a161b1f"
		const byteFmFh5gf = "0x12100f16131b100b050f0e1e1a1f0b021401031f0211101d0405030b181f021e"
		const uintNZcQq8a = BigInt("23")
		const uintZlNuSo = BigInt("910")
		const uintyzdeYki = BigInt("1082")
		const addressV75wwYv = accounts[4]
		const addressTlrsTh0 = accounts[4]
		const boolzmVYXpc = await FompvDNvUgb.transferFrom.call(addresscLMcuI, addressu5dYTm5, uinteekKCb7, {from: accounts[0]});
		const addresshJEDCA = await FompvDNvUgb.delegate.call(addressDXQggWo, {from: accounts[2]});
		const boolpAn64Px = await FompvDNvUgb.transferFrom.call(addressQJIFFVR, addresswunMOQ, uintvEUZ8E, {from: accounts[1]});
		const boolKyvcYdR = await FompvDNvUgb.transferFrom.call(addressGhs7mI7, addresshvLqRys, uintTzIA8ZJ, {from: "0x0000000000000000000000000000000000000001"});
		const addresscUDoRuu = await FompvDNvUgb.delegateBySig.call(addressV75wwYv, uintyzdeYki, uintZlNuSo, uintNZcQq8a, byteFmFh5gf, byteEojvpu0, {from: accounts[1]});
		const uint96faOqrJ8 = await FompvDNvUgb.getCurrentVotes.call(addressTlrsTh0, {from: accounts[0]});
	});

	it('test for Fomp', async () => {
		const addressZzrJSHD = accounts[0]
		const FompvUa1hUF = await Fomp.new(addressZzrJSHD, {from: accounts[2]});
		const byteWZB7rI = "0x1013100f05041701160019061e0e040307140814160b070901111a1716111c14"
		const byteQ7bHKvY = "0x081a001818062009071404110105161c02130c1a13060b0e1a19011f0f051a10"
		const uintXYrwoHy = BigInt("39")
		const uintCDKg0bM = BigInt("1476")
		const uintUiLirij = BigInt("1613")
		const addressnH35adY = accounts[5]
		const bytefEmztdD = "0x01121e020312100e01141a1c11081c1f021d08120e1806120405041106121016"
		const byteKdELOIo = "0x141a1220040115081f1e111c0e051e16200c090314201905151400130708131f"
		const uintJRVddyu = BigInt("145")
		const uintOahCW8J = BigInt("1063")
		const uintH1I5IYG = BigInt("736")
		const addressuRuMuCF = accounts[0]
		const uintbb8lAMO = BigInt("1057")
		const addressfy6wx4H = accounts[3]
		const addressWceJVWv = accounts[5]
		const uintOdRJEDp = BigInt("1712")
		const addressh2t8iK8 = accounts[1]
		const byteojChty = "0x0d170c0f081318201901091d141c1b120b161a18190d0a020d1b0e1d0e010016"
		const byteHSHd5aT = "0x1108021e03170a0e201a09030e0a021b0e120502030c0e0710021409110e0519"
		const uintGqoyhQA = BigInt("99")
		const uintNN5Kocf = BigInt("592")
		const uintpgP8RUt = BigInt("2004")
		const addresseOfWQGA = accounts[4]
		const addressKoeX2VS = "0x0000000000000000000000000000000000000001"
		const addressvV8gv65 = await FompvUa1hUF.delegateBySig.call(addressnH35adY, uintUiLirij, uintCDKg0bM, uintXYrwoHy, byteQ7bHKvY, byteWZB7rI, {from: "0x0000000000000000000000000000000000000001"});
		const addresshLq21zG = await FompvUa1hUF.delegateBySig.call(addressuRuMuCF, uintH1I5IYG, uintOahCW8J, uintJRVddyu, byteKdELOIo, bytefEmztdD, {from: accounts[4]});
		const boolOzkpj8L = await FompvUa1hUF.transferFrom.call(addressWceJVWv, addressfy6wx4H, uintbb8lAMO, {from: accounts[4]});
		const uint96rUZKWRd = await FompvUa1hUF.getPriorVotes.call(addressh2t8iK8, uintOdRJEDp, {from: accounts[3]});
		const addressBQJ83bg = await FompvUa1hUF.delegateBySig.call(addresseOfWQGA, uintpgP8RUt, uintNN5Kocf, uintGqoyhQA, byteHSHd5aT, byteojChty, {from: accounts[4]});
		const uint96YA3N04z = await FompvUa1hUF.getCurrentVotes.call(addressKoeX2VS, {from: accounts[4]});

		await expect(FompvUa1hUF.delegateBySig.call(addressnH35adY, uintUiLirij, uintCDKg0bM, uintXYrwoHy, byteQ7bHKvY, byteWZB7rI, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Fomp', async () => {
		const addressz5wZAsD = accounts[2]
		const FompXuKW1T = await Fomp.new(addressz5wZAsD, {from: accounts[5]});
		const uint6J0et4 = BigInt("383")
		const addressWVHPLQL = accounts[0]
		const addresskeVmHRB = accounts[3]
		const addressagRjIvP = accounts[3]
		const uintMwb4GPH = BigInt("62")
		const addressabIMH2M = accounts[3]
		const uintJ7b2Av2 = BigInt("1324")
		const addressNkeenFl = accounts[4]
		const addressjnClRoX = accounts[1]
		const boolrorPt5P = await FompXuKW1T.transferFrom.call(addresskeVmHRB, addressWVHPLQL, uint6J0et4, {from: accounts[4]});
		const uintWzKeYt3 = await FompXuKW1T.balanceOf.call(addressagRjIvP, {from: "0x0000000000000000000000000000000000000001"});
		const boolmT18lCu = await FompXuKW1T.approve.call(addressabIMH2M, uintMwb4GPH, {from: accounts[5]});
		const boolCL6Psp = await FompXuKW1T.approve.call(addressNkeenFl, uintJ7b2Av2, {from: accounts[3]});
		const uint96FDImjJ3 = await FompXuKW1T.getCurrentVotes.call(addressjnClRoX, {from: accounts[4]});

		await expect(FompXuKW1T.transferFrom.call(addresskeVmHRB, addressWVHPLQL, uint6J0et4, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Fomp', async () => {
		const addressWg6dfdt = accounts[2]
		const FompCm8o3xi = await Fomp.new(addressWg6dfdt, {from: accounts[2]});
		const uintXtsC0ZC = BigInt("1303")
		const addressr3LKQx4 = accounts[1]
		const uintZjGSvih = BigInt("1979")
		const addressAUSimU = accounts[0]
		const addresswHwAAK3 = accounts[5]
		const booldUCnuKk = await FompCm8o3xi.transfer.call(addressr3LKQx4, uintXtsC0ZC, {from: accounts[2]});
		const boolqIiyF6 = await FompCm8o3xi.transferFrom.call(addresswHwAAK3, addressAUSimU, uintZjGSvih, {from: accounts[3]});

		assert.equal(booldUCnuKk, true)
		await expect(FompCm8o3xi.transferFrom.call(addresswHwAAK3, addressAUSimU, uintZjGSvih, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Fomp', async () => {
		const addressR3YnLux = accounts[0]
		const FompmyPQv98 = await Fomp.new(addressR3YnLux, {from: accounts[4]});
		const uintlMUSMp = BigInt("1005")
		const addressroHfRDZ = accounts[1]
		const addressIcJWL8 = accounts[1]
		const uint2uamB5 = BigInt("1349")
		const addressWTpF56H = accounts[0]
		const addressWgqqpAR = accounts[1]
		const boolw8ARVqo = await FompmyPQv98.transfer.call(addressroHfRDZ, uintlMUSMp, {from: accounts[1]});
		const uint96Zki6BQf = await FompmyPQv98.getCurrentVotes.call(addressIcJWL8, {from: accounts[5]});
		const boola7kLrZK = await FompmyPQv98.transferFrom.call(addressWgqqpAR, addressWTpF56H, uint2uamB5, {from: accounts[1]});

		await expect(FompmyPQv98.transfer.call(addressroHfRDZ, uintlMUSMp, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Fomp', async () => {
		const addressnslAU8G = accounts[0]
		const FompdBK2Mjk = await Fomp.new(addressnslAU8G, {from: accounts[0]});
		const uintLpdPhM4 = BigInt("1931")
		const addressTccIp4 = accounts[2]
		const addresstWLidXZ = accounts[0]
		const addressBpWZjUh = accounts[2]
		const boolXplM7ag = await FompdBK2Mjk.approve.call(addressTccIp4, uintLpdPhM4, {from: accounts[5]});
		const addressao7MvH3 = await FompdBK2Mjk.delegate.call(addresstWLidXZ, {from: accounts[5]});
		const addressYC1TEcQ = await FompdBK2Mjk.delegate.call(addressBpWZjUh, {from: accounts[4]});

		assert.equal(boolXplM7ag, true)
	});

	it('test for Fomp', async () => {
		const addressTqRmkl9 = accounts[2]
		const FompCm8o3xi = await Fomp.new(addressTqRmkl9, {from: accounts[2]});
		const addressG3km5xb = accounts[3]
		const uintBZ2oCd3 = BigInt("141")
		const addressWXB5IIf = accounts[1]
		const addressUCx44ez = accounts[2]
		const uint9z08sc = BigInt("1303")
		const addressSzSF1D = accounts[2]
		const uintTuKvhLh = await FompCm8o3xi.balanceOf.call(addressG3km5xb, {from: accounts[4]});
		const boolINsXqow = await FompCm8o3xi.transferFrom.call(addressUCx44ez, addressWXB5IIf, uintBZ2oCd3, {from: "0x0000000000000000000000000000000000000001"});
		const booldUCnuKk = await FompCm8o3xi.transfer.call(addressSzSF1D, uint9z08sc, {from: accounts[2]});

		assert.equal(uintTuKvhLh, BigInt("0"))
		await expect(FompCm8o3xi.transferFrom.call(addressUCx44ez, addressWXB5IIf, uintBZ2oCd3, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Fomp', async () => {
		const addressN9jmff7 = accounts[0]
		const FompdBK2Mjk = await Fomp.new(addressN9jmff7, {from: accounts[0]});
		const uintsn61kCy = BigInt("1931")
		const addressXdetZHs = accounts[2]
		const addresskCWCLwE = "0x0000000000000000000000000000000000000001"
		const byteYDGnUI6 = "0x1c0f1500071010180d0e031c1516130b041b0a14110714090c010d03191b0314"
		const byteMtqdygO = "0x0b0e0a0a150a131b061d140605040d10170a001a0e1e08131a171311160b081c"
		const uintbMyyjjV = BigInt("120")
		const uintbaFYg5J = BigInt("1239")
		const uintfm6sAci = BigInt("446")
		const address7kX4Ev = accounts[4]
		const addressRHh5kK2 = accounts[4]
		const addressyh0x1d = accounts[2]
		const boolXplM7ag = await FompdBK2Mjk.approve.call(addressXdetZHs, uintsn61kCy, {from: accounts[5]});
		const addressslut5hS = await FompdBK2Mjk.delegate.call(addresskCWCLwE, {from: accounts[0]});
		const addresscpU6Up0 = await FompdBK2Mjk.delegateBySig.call(address7kX4Ev, uintfm6sAci, uintbaFYg5J, uintbMyyjjV, byteMtqdygO, byteYDGnUI6, {from: accounts[1]});
		const uint96LMIIL9W = await FompdBK2Mjk.getCurrentVotes.call(addressRHh5kK2, {from: accounts[3]});
		const addressYC1TEcQ = await FompdBK2Mjk.delegate.call(addressyh0x1d, {from: accounts[4]});

		assert.equal(boolXplM7ag, true)
		await expect(FompdBK2Mjk.delegateBySig.call(address7kX4Ev, uintfm6sAci, uintbaFYg5J, uintbMyyjjV, byteMtqdygO, byteYDGnUI6, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Fomp', async () => {
		const addressE9l0wFP = accounts[0]
		const FompdBK2Mjk = await Fomp.new(addressE9l0wFP, {from: accounts[0]});
		const addressxlmLE50 = accounts[4]
		const addresskiGHcwp = accounts[5]
		const uint1fX0Wc = BigInt("1931")
		const addressy1F8H3d = accounts[2]
		const addressiXEyfgt = accounts[0]
		const addresshXkuwOu = accounts[2]
		const uintYbQ0xao = await FompdBK2Mjk.allowance.call(addresskiGHcwp, addressxlmLE50, {from: accounts[2]});
		const boolXplM7ag = await FompdBK2Mjk.approve.call(addressy1F8H3d, uint1fX0Wc, {from: accounts[5]});
		const addressao7MvH3 = await FompdBK2Mjk.delegate.call(addressiXEyfgt, {from: accounts[5]});
		const addressYC1TEcQ = await FompdBK2Mjk.delegate.call(addresshXkuwOu, {from: accounts[4]});

		assert.equal(boolXplM7ag, true)
		assert.equal(uintYbQ0xao, BigInt("0"))
	});

	it('test for Fomp', async () => {
		const addressRPKX2GJ = accounts[0]
		const FompdBK2Mjk = await Fomp.new(addressRPKX2GJ, {from: accounts[0]});
		const uintmn1oUEK = BigInt("1931")
		const addressRjC3wZI = accounts[2]
		const addresskt9lOIi = accounts[4]
		const uintFx70cUX = BigInt("387")
		const addressiAxHc7O = accounts[2]
		const addresswud70TO = accounts[1]
		const addresscgrIkWC = accounts[2]
		const boolXplM7ag = await FompdBK2Mjk.approve.call(addressRjC3wZI, uintmn1oUEK, {from: accounts[5]});
		const uint96FsJ4Osb = await FompdBK2Mjk.getCurrentVotes.call(addresskt9lOIi, {from: accounts[3]});
		const uint96sNJ1lM0 = await FompdBK2Mjk.getPriorVotes.call(addressiAxHc7O, uintFx70cUX, {from: accounts[5]});
		const addressao7MvH3 = await FompdBK2Mjk.delegate.call(addresswud70TO, {from: accounts[5]});
		const addressYC1TEcQ = await FompdBK2Mjk.delegate.call(addresscgrIkWC, {from: accounts[4]});

		assert.equal(boolXplM7ag, true)
		assert.equal(uint96FsJ4Osb, BigInt("0"))
		assert.equal(uint96sNJ1lM0, BigInt("0"))
	});

	it('test for Fomp', async () => {
		const addresso1qX8UL = accounts[2]
		const FompCm8o3xi = await Fomp.new(addresso1qX8UL, {from: accounts[2]});
		const uintufpfKMD = BigInt("0")
		const addressXhghJOA = accounts[4]
		const uintNc7CRWp = BigInt("217")
		const addressSGO8eLM = accounts[0]
		const uintriqi5E = BigInt("1089")
		const addressU8wYaMA = accounts[3]
		const addressapBpLBc = accounts[3]
		const boolheZd6pa = await FompCm8o3xi.approve.call(addressXhghJOA, uintufpfKMD, {from: accounts[0]});
		const uint96odX8XsS = await FompCm8o3xi.getPriorVotes.call(addressSGO8eLM, uintNc7CRWp, {from: accounts[4]});
		const bool80DZy6 = await FompCm8o3xi.transferFrom.call(addressapBpLBc, addressU8wYaMA, uintriqi5E, {from: accounts[4]});

		assert.equal(boolheZd6pa, true)
		assert.equal(uint96odX8XsS, BigInt("0"))
		await expect(FompCm8o3xi.transferFrom.call(addressapBpLBc, addressU8wYaMA, uintriqi5E, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Fomp', async () => {
		const addressA3YKYds = accounts[2]
		const FompCm8o3xi = await Fomp.new(addressA3YKYds, {from: accounts[2]});
		const addresshCtCyLB = "0x00000000000000000000000000000000000000-1"
		const addresshOUtQDC = await FompCm8o3xi.delegate.call(addresshCtCyLB, {from: accounts[2]});

		await expect(FompCm8o3xi.delegate.call(addresshCtCyLB, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})