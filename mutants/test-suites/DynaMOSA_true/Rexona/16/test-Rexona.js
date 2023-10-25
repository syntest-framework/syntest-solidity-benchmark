const Rexona = artifacts.require("Rexona");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Rexona', (accounts) => {
	it('test for Rexona', async () => {
		const stringTnwN2L = "uMhs9vrPxvORiWdZnE5AJudKpzufuG4wwvNG5wKVrT4hf5H6nbBl3aXeMqHUlNbSj34YCdUKtnd4zHAKNQkh"
		const stringyyWwTGe = "oCr"
		const uintOdJN9Y2 = BigInt("1952")
		const RexonaLixhkW = await Rexona.new(stringTnwN2L, stringyyWwTGe, uintOdJN9Y2, {from: accounts[1]});
		const uintGSjCAmI = BigInt("889")
		const addressZTyXwq2 = accounts[3]
		const addressSlQP02d = accounts[0]
		const uinttB9W5Pn = BigInt("2033")
		const addressRePp7Bk = accounts[1]
		const uintLZB2gnU = BigInt("1100")
		const addressgyZ51uf = accounts[3]
//		const boolXn9j2iL = await RexonaLixhkW.transferFrom.call(addressSlQP02d, addressZTyXwq2, uintGSjCAmI, {from: accounts[0]});
//		const boolHuF6zep = await RexonaLixhkW.approve.call(addressRePp7Bk, uinttB9W5Pn, {from: accounts[1]});
//		const boolz09Ok7I = await RexonaLixhkW.transfer.call(addressgyZ51uf, uintLZB2gnU, {from: accounts[4]});

		await expect(RexonaLixhkW.transferFrom.call(addressSlQP02d, addressZTyXwq2, uintGSjCAmI, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Rexona', async () => {
		const stringXiVlys = "eynr7G"
		const stringIMbrOaM = "EiJC8VJklSLRkr7V0vK6wu1UAXoSGnew4EUAwBVco"
		const uintOsfmtxJ = BigInt("173")
		const RexonaJB3s3iX = await Rexona.new(stringXiVlys, stringIMbrOaM, uintOsfmtxJ, {from: accounts[0]});
		const uintJsxDQw4 = BigInt("539")
		const addressQ3Yb52a = accounts[5]
		const uinthguxqgF = BigInt("815")
		const addressTz9NRxK = accounts[4]
		const uintRbAfzIW = BigInt("1736")
		const addressW4rwSyW = accounts[2]
		const address3p9Lkp = accounts[5]
		const uintYO2CtrA = BigInt("1903")
		const addressW3F2Sz4 = accounts[0]
		const addressPNK2EcK = accounts[1]
		const uintM7onc1z = BigInt("905")
		const addressnYK3ngR = "0x0000000000000000000000000000000000000001"
		const boolcKp2j3 = await RexonaJB3s3iX.transfer.call(addressQ3Yb52a, uintJsxDQw4, {from: accounts[0]});
//		const booldC0au15 = await RexonaJB3s3iX.transfer.call(addressTz9NRxK, uinthguxqgF, {from: accounts[3]});
//		const boold7uaCPH = await RexonaJB3s3iX.approve.call(addressW4rwSyW, uintRbAfzIW, {from: accounts[5]});
//		const boolRfEllQN = await RexonaJB3s3iX.transferownership.call(address3p9Lkp, {from: accounts[3]});
//		const boolsk8rFPh = await RexonaJB3s3iX.transferFrom.call(addressPNK2EcK, addressW3F2Sz4, uintYO2CtrA, {from: accounts[0]});
//		const boolbkGCiut = await RexonaJB3s3iX.transfer.call(addressnYK3ngR, uintM7onc1z, {from: accounts[3]});

		assert.equal(boolcKp2j3, true)
		await expect(RexonaJB3s3iX.transfer.call(addressTz9NRxK, uinthguxqgF, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Rexona', async () => {
		const stringOr2BufL = "vex69CS1Tcoqn0UeKYF8WjdTD1pmsv4"
		const stringkmgPlF = "H4sSABlrxCrd303HERanVQcupZY5r546WoJtm0w9NXWMixUoqHsl2"
		const uintaEiCwHt = BigInt("1979")
		const RexonaRmt6naq = await Rexona.new(stringOr2BufL, stringkmgPlF, uintaEiCwHt, {from: "0x0000000000000000000000000000000000000001"});
		const uinthv6aHR = BigInt("1205")
		const addressgm4IEel = accounts[2]
		const addresszUZljww = accounts[1]
		const addresscVvEhc = accounts[5]
		const uintup6PhcD = BigInt("478")
		const addressBbn5ll = accounts[5]
		const addresshh9z4hk = "0x0000000000000000000000000000000000000001"
		const uintdEk9mD8 = BigInt("1659")
		const addresspj1eCs1 = accounts[5]
		const addressQuegmb = accounts[2]
		const uintXJissTf = BigInt("437")
		const addressJMCUAZ5 = accounts[1]
		const boolOpBDDsP = await RexonaRmt6naq.approveAndCall.call(addressgm4IEel, uinthv6aHR, {from: accounts[1]});
		const booly5myWWP = await RexonaRmt6naq.transferownership.call(addresszUZljww, {from: accounts[0]});
		const boolLTnY6Pj = await RexonaRmt6naq.transferownership.call(addresscVvEhc, {from: accounts[2]});
		const boolEALRJ2Y = await RexonaRmt6naq.transferFrom.call(addresshh9z4hk, addressBbn5ll, uintup6PhcD, {from: accounts[4]});
		const boolpcDs1E7 = await RexonaRmt6naq.transferFrom.call(addressQuegmb, addresspj1eCs1, uintdEk9mD8, {from: accounts[3]});
		const boollh28fT4 = await RexonaRmt6naq.transfer.call(addressJMCUAZ5, uintXJissTf, {from: accounts[3]});
	});

	it('test for Rexona', async () => {
		const stringZvngH8b = "mEem5miWUb4qQJf92naqKR5PG66NCrmIjxF0cZzb5GfkNlAh6nP1RLdGrPJQYKrBUqAnOpXVO"
		const stringLvZ3CeT = "Vx8aMQimiOxzp"
		const uintHadbj5d = BigInt("1216")
		const RexonaTD6RMyx = await Rexona.new(stringZvngH8b, stringLvZ3CeT, uintHadbj5d, {from: accounts[1]});
		const uinthzkWjtB = BigInt("1701")
		const addresspAYWs56 = "0x0000000000000000000000000000000000000001"
		const uintkJDcjdl = BigInt("280")
		const address5FiHpd = accounts[2]
		const uintlXuj4w9 = BigInt("1965")
		const addressN7QTbR = accounts[1]
		const uintzOKMqPG = BigInt("1870")
		const addressZKyj44R = accounts[0]
		const addressFgsB6qn = "0x0000000000000000000000000000000000000001"
		const uintolljajc = BigInt("11")
		const addressVBo67s = accounts[1]
		const uintBY2NvS = BigInt("1416")
		const addressCbC1CO3 = accounts[0]
		const booldf2nzuf = await RexonaTD6RMyx.approve.call(addresspAYWs56, uinthzkWjtB, {from: accounts[2]});
		const boolHSlvYH1 = await RexonaTD6RMyx.approve.call(address5FiHpd, uintkJDcjdl, {from: "0x0000000000000000000000000000000000000001"});
//		const boolB94QYwA = await RexonaTD6RMyx.approveAndCall.call(addressN7QTbR, uintlXuj4w9, {from: accounts[0]});
//		const boolATyBu3M = await RexonaTD6RMyx.transferFrom.call(addressFgsB6qn, addressZKyj44R, uintzOKMqPG, {from: accounts[1]});
//		const booln2btzi0 = await RexonaTD6RMyx.approve.call(addressVBo67s, uintolljajc, {from: accounts[0]});
//		const boolnm5HR3v = await RexonaTD6RMyx.approve.call(addressCbC1CO3, uintBY2NvS, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolHSlvYH1, true)
		assert.equal(booldf2nzuf, true)
		await expect(RexonaTD6RMyx.approveAndCall.call(addressN7QTbR, uintlXuj4w9, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Rexona', async () => {
		const string3Bipki = "z8XOo1q4Hlscf0YlEmfkN"
		const stringJHffoye = "17Epc127sqC875WiXbOo8dzk1ca"
		const uinthNvRGZT = BigInt("1564")
		const Rexonaj3uywaw = await Rexona.new(string3Bipki, stringJHffoye, uinthNvRGZT, {from: accounts[3]});
		const uintN40D5o = BigInt("826")
		const addressh44smT = accounts[3]
		const addressmnSicks = accounts[3]
		const uinttmafN10 = BigInt("897")
		const addresstWvbuYf = accounts[1]
		const addressJAaKWXk = accounts[2]
//		const boolZ206Xmk = await Rexonaj3uywaw.transferFrom.call(addressmnSicks, addressh44smT, uintN40D5o, {from: accounts[2]});
//		const boolAA9YePP = await Rexonaj3uywaw.approveAndCall.call(addresstWvbuYf, uinttmafN10, {from: "0x0000000000000000000000000000000000000001"});
//		const boolYbfYY1o = await Rexonaj3uywaw.transferownership.call(addressJAaKWXk, {from: accounts[0]});

		await expect(Rexonaj3uywaw.transferFrom.call(addressmnSicks, addressh44smT, uintN40D5o, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Rexona', async () => {
		const stringTnwN2L = "uMhs9vrPxvORiWdZnE5AJudKpzufuG4wwvNG5wKVrT4hf5H6nbBl3aXeMqHUlNbSj34YCdUKtnd4zHAKNQkh"
		const stringyyWwTGe = "oCr"
		const uintFVkIe8I = BigInt("1952")
		const RexonaLixhkW = await Rexona.new(stringTnwN2L, stringyyWwTGe, uintFVkIe8I, {from: accounts[1]});
		const addressuRb0xD = accounts[0]
		const uinteQyiqvY = BigInt("889")
		const addresssf2wGrL = accounts[3]
		const addressqeXFle2 = accounts[0]
		const uintkt9pX5 = BigInt("2033")
		const addressOi1xFeN = accounts[1]
		const uintxSE0V0U = BigInt("1100")
		const addressQsquVLG = accounts[3]
//		const boolIJbbSs5 = await RexonaLixhkW.transferownership.call(addressuRb0xD, {from: accounts[2]});
//		const boolXn9j2iL = await RexonaLixhkW.transferFrom.call(addressqeXFle2, addresssf2wGrL, uinteQyiqvY, {from: accounts[0]});
//		const boolHuF6zep = await RexonaLixhkW.approve.call(addressOi1xFeN, uintkt9pX5, {from: accounts[1]});
//		const boolz09Ok7I = await RexonaLixhkW.transfer.call(addressQsquVLG, uintxSE0V0U, {from: accounts[4]});

		await expect(RexonaLixhkW.transferownership.call(addressuRb0xD, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Rexona', async () => {
		const string5a9U8W = "LG3FqgPj1IsIjgP"
		const stringvF0FyFl = "BsNEvZsByLbSDm"
		const uintRc6RZC = BigInt("243")
		const RexonazC3bRt3 = await Rexona.new(string5a9U8W, stringvF0FyFl, uintRc6RZC, {from: accounts[3]});
		const addresswMfqXFm = accounts[0]
		const addressQfDoPg8 = accounts[0]
		const uintw39HlR5 = BigInt("1507")
		const addressuvcFkyr = accounts[3]
		const booluPfk0tq = await RexonazC3bRt3.transferownership.call(addresswMfqXFm, {from: accounts[3]});
		const boolUjBmS2i = await RexonazC3bRt3.transferownership.call(addressQfDoPg8, {from: accounts[3]});
//		const boolKJd8SR = await RexonazC3bRt3.approveAndCall.call(addressuvcFkyr, uintw39HlR5, {from: accounts[2]});

		assert.equal(boolUjBmS2i, true)
		assert.equal(booluPfk0tq, true)
		await expect(RexonazC3bRt3.approveAndCall.call(addressuvcFkyr, uintw39HlR5, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Rexona', async () => {
		const string3Bipki = "z8XOo1q4Hlscf0YlEmfkN"
		const stringJHffoye = "17Epc127sqC875WiXbOo8dzk1ca"
		const uintTQ4k3K = BigInt("1564")
		const Rexonaj3uywaw = await Rexona.new(string3Bipki, stringJHffoye, uintTQ4k3K, {from: accounts[3]});
		const uintKCSkbIU = BigInt("1175")
		const addressH8XWBz = accounts[4]
		const uintR6ku73x = BigInt("897")
		const addressZ9wtu8D = accounts[2]
		const boolU0A5Bma = await Rexonaj3uywaw.approveAndCall.call(addressH8XWBz, uintKCSkbIU, {from: accounts[3]});
//		const boolAA9YePP = await Rexonaj3uywaw.approveAndCall.call(addressZ9wtu8D, uintR6ku73x, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolU0A5Bma, true)
		await expect(Rexonaj3uywaw.approveAndCall.call(addressZ9wtu8D, uintR6ku73x, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Rexona', async () => {
		const stringhqUQb7n = "C3zz7rwNfWmMwvlzSuENw5jg1k8mwyhuvj9ywv8LlapNjoLfk"
		const stringRy90zCJ = "FKjRKofCz3GtmkeComIFn946496jkhhqEIXVA"
		const uintzgoKVmr = BigInt("1473")
		const RexonabfJCxoh = await Rexona.new(stringhqUQb7n, stringRy90zCJ, uintzgoKVmr, {from: accounts[0]});
		const uintw2rn4iO = BigInt("0")
		const addressBambLlJ = accounts[1]
		const boolRu1Zbh = await RexonabfJCxoh.transfer.call(addressBambLlJ, uintw2rn4iO, {from: accounts[5]});

		assert.equal(boolRu1Zbh, true)
	});

	it('test for Rexona', async () => {
		const stringhqUQb7n = "C3zz7rwNfWmMwvlzSuENw5jg1k8mwyhuvj9ywv8LlapNjoLfk"
		const stringRy90zCJ = "FKjRKofCz3GtmkeComIFn946496jkhhqEIXVA"
		const uintNFLijdR = BigInt("1473")
		const RexonabfJCxoh = await Rexona.new(stringhqUQb7n, stringRy90zCJ, uintNFLijdR, {from: accounts[0]});
		const uintoFEFMOn = BigInt("26")
		const addressZqHAQC7 = accounts[1]
		const uintokVE34K = BigInt("128")
		const addresstsZl470 = accounts[2]
		const addressIjPDaud = accounts[3]
		const uinttjrsv3f = BigInt("606")
		const addressL3ENoEl = accounts[1]
		const uintX3J6dm2 = BigInt("1169")
		const addressPRllLIu = "0x00000000000000000000000000000000000000-1"
		const uintBgDkXyV = BigInt("1270")
		const addressM64odoA = accounts[1]
		const uintL3l102 = BigInt("1489")
		const addressXExB22a = "0x0000000000000000000000000000000000000002"
		const uintWs3Jao2 = BigInt("1419")
		const addressHEQFGNW = accounts[0]
		const uintHv8S5u = BigInt("16")
		const addressQNWXMpR = accounts[2]
		const uintpDk4nx = BigInt("260")
		const addressH5HHg8O = accounts[1]
		const uintAqm04H0 = BigInt("2044")
		const addressYvwgG2r = accounts[5]
		const uintlz4yMDc = BigInt("181")
		const addressvRNBW2W = accounts[5]
		const uintWLRIftb = BigInt("159")
		const addressVioGsmc = accounts[2]
		const uintVhtGLiQ = BigInt("1414")
		const addressbeMiWuF = accounts[1]
		const boolqMczMz4 = await RexonabfJCxoh.approveAndCall.call(addressZqHAQC7, uintoFEFMOn, {from: accounts[0]});
		const boolO3q3P0r = await RexonabfJCxoh.transfer.call(addresstsZl470, uintokVE34K, {from: accounts[0]});
		const boolp1GSQfU = await RexonabfJCxoh.transferownership.call(addressIjPDaud, {from: accounts[0]});
		const boolaA9TtKL = await RexonabfJCxoh.approveAndCall.call(addressL3ENoEl, uinttjrsv3f, {from: accounts[0]});
//		const boolIAXrBjU = await RexonabfJCxoh.approve.call(addressPRllLIu, uintX3J6dm2, {from: accounts[1]});
//		const boolkJXROxu = await RexonabfJCxoh.transfer.call(addressM64odoA, uintBgDkXyV, {from: "0x0000000000000000000000000000000000000001"});
//		const boolZmuhP8 = await RexonabfJCxoh.approveAndCall.call(addressXExB22a, uintL3l102, {from: accounts[3]});
//		const boola2fZoDA = await RexonabfJCxoh.approveAndCall.call(addressHEQFGNW, uintWs3Jao2, {from: accounts[3]});
//		const boolRu1Zbh = await RexonabfJCxoh.transfer.call(addressQNWXMpR, uintHv8S5u, {from: accounts[5]});
//		const booldVrYYYw = await RexonabfJCxoh.approveAndCall.call(addressH5HHg8O, uintpDk4nx, {from: accounts[3]});
//		const boolPF2yQxY = await RexonabfJCxoh.approve.call(addressYvwgG2r, uintAqm04H0, {from: accounts[5]});
//		const boolyzhmDvV = await RexonabfJCxoh.approve.call(addressvRNBW2W, uintlz4yMDc, {from: "0x0000000000000000000000000000000000000001"});
//		const boolH3PHxia = await RexonabfJCxoh.approve.call(addressVioGsmc, uintWLRIftb, {from: "0x0000000000000000000000000000000000000001"});
//		const boolBgGDCo1 = await RexonabfJCxoh.transfer.call(addressbeMiWuF, uintVhtGLiQ, {from: accounts[4]});

		assert.equal(boolO3q3P0r, true)
		assert.equal(boolaA9TtKL, true)
		assert.equal(boolp1GSQfU, true)
		assert.equal(boolqMczMz4, true)
		await expect(RexonabfJCxoh.approve.call(addressPRllLIu, uintX3J6dm2, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})