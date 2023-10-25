const Rexona = artifacts.require("Rexona");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Rexona', (accounts) => {
	it('test for Rexona', async () => {
		const stringn3hZof5 = "Tg9saSMRq0pHX64f5fiD7KbI4Ia4MgzVSdmm0arKu21jBFag"
		const stringJ34So5b = "7mGkhWNgLX9fDTMQyyM6JN6VaVzWgv9k7I"
		const uintrjgvvWF = BigInt("670")
		const RexonaUydzjfT = await Rexona.new(stringn3hZof5, stringJ34So5b, uintrjgvvWF, {from: accounts[3]});
		const uintlfG5HfP = BigInt("1898")
		const addressirnNm6o = accounts[0]
		const uintlAtn1Lt = BigInt("1980")
		const addressGwGTVrU = accounts[4]
		const uintIqWFRNw = BigInt("2010")
		const addressZgMO46J = accounts[1]
		const addressk6USkqT = accounts[3]
		const boolDixTOyQ = await RexonaUydzjfT.approve.call(addressirnNm6o, uintlfG5HfP, {from: "0x0000000000000000000000000000000000000001"});
		const boolFoNITr = await RexonaUydzjfT.approve.call(addressGwGTVrU, uintlAtn1Lt, {from: accounts[1]});
		const boolcRw1Mwl = await RexonaUydzjfT.approveAndCall.call(addressZgMO46J, uintIqWFRNw, {from: accounts[5]});
		const boolSkXN2TA = await RexonaUydzjfT.transferownership.call(addressk6USkqT, {from: accounts[0]});

		assert.equal(boolDixTOyQ, true)
		assert.equal(boolFoNITr, true)
		await expect(RexonaUydzjfT.approveAndCall.call(addressZgMO46J, uintIqWFRNw, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Rexona', async () => {
		const stringSwYPRi = "i0Q1OkPgwCMiL5UPc"
		const stringJOORem = "UpkR0TXh2T558n1f6lyJ4X2KwxfJmtyBpFAII7nY"
		const uintaSOmxV = BigInt("1685")
		const RexonavwgRyV = await Rexona.new(stringSwYPRi, stringJOORem, uintaSOmxV, {from: accounts[4]});
		const addressuta1hri = "0x0000000000000000000000000000000000000001"
		const addressXF5qUf2 = accounts[4]
		const uintPNXIWe0 = BigInt("842")
		const addressfrMX0I = accounts[4]
		const addressSB1f1nb = accounts[4]
		const uintp8YgN8i = BigInt("503")
		const addressXdefrIR = accounts[4]
		const addressoZXeUR9 = accounts[2]
		const uintaN4Et7r = BigInt("1866")
		const addresspivgb9o = accounts[2]
		const boolRTbry1U = await RexonavwgRyV.transferownership.call(addressuta1hri, {from: accounts[1]});
		const boolCGZusql = await RexonavwgRyV.transferownership.call(addressXF5qUf2, {from: accounts[0]});
		const booltCCd2P = await RexonavwgRyV.transferFrom.call(addressSB1f1nb, addressfrMX0I, uintPNXIWe0, {from: accounts[1]});
		const boolBckwnXs = await RexonavwgRyV.transferFrom.call(addressoZXeUR9, addressXdefrIR, uintp8YgN8i, {from: accounts[3]});
		const boolRzSSJVB = await RexonavwgRyV.approve.call(addresspivgb9o, uintaN4Et7r, {from: accounts[0]});

		await expect(RexonavwgRyV.transferownership.call(addressuta1hri, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Rexona', async () => {
		const stringf3Hs99J = "oTo1YUP0Fs7TI6I6k8QDnfMxjRVClCd0FOqEN91f"
		const stringYO2t74 = "ataendxPo"
		const uintuQ7BSIk = BigInt("941")
		const RexonaljNrcs = await Rexona.new(stringf3Hs99J, stringYO2t74, uintuQ7BSIk, {from: accounts[3]});
		const uintusJSXEg = BigInt("1207")
		const addressOfBBVV7 = accounts[0]
		const uintzsYKRZF = BigInt("1510")
		const addressmpJEpN = accounts[4]
		const uintBF3OLNo = BigInt("1458")
		const addressBsOcT2p = accounts[5]
		const uintgZE2NIS = BigInt("1649")
		const addressoQz5hQ6 = accounts[3]
		const addressQa2sLS0 = accounts[2]
		const uinth34KatW = BigInt("214")
		const addressqKTJg5F = accounts[1]
		const boolMu8328Y = await RexonaljNrcs.approve.call(addressOfBBVV7, uintusJSXEg, {from: accounts[0]});
		const booluiMZub = await RexonaljNrcs.approve.call(addressmpJEpN, uintzsYKRZF, {from: accounts[2]});
		const boolgBVVkG4 = await RexonaljNrcs.approveAndCall.call(addressBsOcT2p, uintBF3OLNo, {from: accounts[3]});
		const booltcSl1Qc = await RexonaljNrcs.transferFrom.call(addressQa2sLS0, addressoQz5hQ6, uintgZE2NIS, {from: accounts[3]});
		const boolHpPk41u = await RexonaljNrcs.approve.call(addressqKTJg5F, uinth34KatW, {from: accounts[2]});

		assert.equal(boolMu8328Y, true)
		assert.equal(boolgBVVkG4, true)
		assert.equal(booluiMZub, true)
		await expect(RexonaljNrcs.transferFrom.call(addressQa2sLS0, addressoQz5hQ6, uintgZE2NIS, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Rexona', async () => {
		const stringiLAqkKH = "1C7dX6ekwDUz8A2upy9otOPFKWXHxRDoOy5alb"
		const stringVFtKl6i = "ul6joJKkJrlT6mMPKPFC5Jwfv1f1z9B4nVj1Keqo8Gr4suJCldcFOnCnlUeTYUOmp"
		const uintbAn5VYW = BigInt("817")
		const RexonagLdUt8z = await Rexona.new(stringiLAqkKH, stringVFtKl6i, uintbAn5VYW, {from: accounts[2]});
		const uintVc0rksj = BigInt("584")
		const addressEWfPEa = accounts[5]
		const uintFWp4bKV = BigInt("1872")
		const addressK4zXXkM = accounts[3]
		const addressuRGI85d = accounts[2]
		const uintF6Sh9vk = BigInt("611")
		const addressrx5afg = accounts[4]
		const uintjH26oa9 = BigInt("823")
		const addressWPlo2Ol = "0x0000000000000000000000000000000000000001"
		const boolvyxxEdQ = await RexonagLdUt8z.approve.call(addressEWfPEa, uintVc0rksj, {from: accounts[0]});
		const boolM5KhWEv = await RexonagLdUt8z.transfer.call(addressK4zXXkM, uintFWp4bKV, {from: accounts[3]});
		const boolfOeLyae = await RexonagLdUt8z.transferownership.call(addressuRGI85d, {from: accounts[3]});
		const booliQiUN9 = await RexonagLdUt8z.approveAndCall.call(addressrx5afg, uintF6Sh9vk, {from: accounts[1]});
		const boolpzfalAm = await RexonagLdUt8z.approveAndCall.call(addressWPlo2Ol, uintjH26oa9, {from: accounts[5]});

		assert.equal(boolvyxxEdQ, true)
		await expect(RexonagLdUt8z.transfer.call(addressK4zXXkM, uintFWp4bKV, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Rexona', async () => {
		const stringhVcrE2J = "YuH1eAU82gjMozcxrAIkhUCkvLvDEzFvPysP35aoEpOTq6u1fCF7n"
		const stringaXwILNB = "jgJKiE54Ue3jATO6dPTp2nyb3nHpvsdowjxAltQNKriUnwQofXN9ttH2K7fkYsChTyx3Rs2qO1"
		const uintLSkqGid = BigInt("1995")
		const RexonaNGhDaVZ = await Rexona.new(stringhVcrE2J, stringaXwILNB, uintLSkqGid, {from: accounts[1]});
		const uintn1dfgC5 = BigInt("1360")
		const addressAtf7kG = accounts[1]
		const uintZzg1xSr = BigInt("617")
		const addressqlDVYIT = accounts[0]
		const addressMIMpHqQ = accounts[0]
		const boolFjcwy6j = await RexonaNGhDaVZ.transfer.call(addressAtf7kG, uintn1dfgC5, {from: accounts[3]});
		const boolfVxOmEW = await RexonaNGhDaVZ.transferFrom.call(addressMIMpHqQ, addressqlDVYIT, uintZzg1xSr, {from: accounts[3]});

		await expect(RexonaNGhDaVZ.transfer.call(addressAtf7kG, uintn1dfgC5, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Rexona', async () => {
		const stringEKcW1fz = "dy2B34E6ENtiC6dCHNZCmM14Ukmj27adFfd64lXMWKoE7BW93Qj9z4VFo2tdb6OvePwsEssvVbS2CAnOygtRcW"
		const stringC55xGiu = "O"
		const uintrCSWxQb = BigInt("1557")
		const RexonajVC6oLK = await Rexona.new(stringEKcW1fz, stringC55xGiu, uintrCSWxQb, {from: "0x0000000000000000000000000000000000000001"});
		const addressZ1Nvu33 = accounts[1]
		const uintPA7ziST = BigInt("43")
		const addressaysJ4I5 = accounts[1]
		const uintEcEKgxf = BigInt("1799")
		const addressQOlYTD = "0x0000000000000000000000000000000000000001"
		const boolZoh0Kog = await RexonajVC6oLK.transferownership.call(addressZ1Nvu33, {from: "0x0000000000000000000000000000000000000001"});
		const boolfCoJUcC = await RexonajVC6oLK.transfer.call(addressaysJ4I5, uintPA7ziST, {from: accounts[1]});
		const booliuLNjxc = await RexonajVC6oLK.approveAndCall.call(addressQOlYTD, uintEcEKgxf, {from: accounts[0]});
	});

	it('test for Rexona', async () => {
		const stringMDgH2S4 = "ScQIF5JIHNwYUaE0bp93kg6bVuYbSU4W95GeZkjW"
		const stringfuaaxI = "iVausXlvnDEUUiKuKFHCyNJXIBRl3o9VhqVicfTkKuaqVHFzoCFmaR"
		const uintA4mDd4 = BigInt("1133")
		const RexonaBg1fp3M = await Rexona.new(stringMDgH2S4, stringfuaaxI, uintA4mDd4, {from: accounts[1]});
		const uintDMvmvaE = BigInt("0")
		const addresszyq9Qa0 = accounts[0]
		const uintJivwypE = BigInt("1759")
		const addressp3v1xX7 = accounts[2]
		const uintBMhn1zO = BigInt("1256")
		const addressyvsT9Da = accounts[0]
		const boolRyzsa3s = await RexonaBg1fp3M.transfer.call(addresszyq9Qa0, uintDMvmvaE, {from: accounts[2]});
		const boolLTe221K = await RexonaBg1fp3M.approveAndCall.call(addressp3v1xX7, uintJivwypE, {from: accounts[0]});
		const boolYi9wXo4 = await RexonaBg1fp3M.approveAndCall.call(addressyvsT9Da, uintBMhn1zO, {from: accounts[2]});

		assert.equal(boolRyzsa3s, true)
		await expect(RexonaBg1fp3M.approveAndCall.call(addressp3v1xX7, uintJivwypE, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Rexona', async () => {
		const stringYAk41zW = "ClBLhcSTu3iZrhVdiRkGAfpcRJurDELMe1WBD8bQj2SjjjjzEj9AJBNyD9iIQ4C3iIJIAK5DvYrjLOW4"
		const stringVX7b364 = "uhndUnZ3BC4TafGRKBtftivBtPiMGhcmKnGX2VIJyNm"
		const uintULIwHbZ = BigInt("1464")
		const RexonagGqNnOx = await Rexona.new(stringYAk41zW, stringVX7b364, uintULIwHbZ, {from: accounts[4]});
		const uintjDInXfL = BigInt("0")
		const addresscrhxwj = accounts[3]
		const uintPXUs2c = BigInt("1330")
		const addressGZdvkr5 = accounts[1]
		const uintnQ1PN8 = BigInt("1967")
		const addressiFvvVwr = accounts[5]
		const boolomJuGDV = await RexonagGqNnOx.approveAndCall.call(addresscrhxwj, uintjDInXfL, {from: accounts[4]});
		const booljTTaaps = await RexonagGqNnOx.approveAndCall.call(addressGZdvkr5, uintPXUs2c, {from: accounts[5]});
		const boolwewsQPt = await RexonagGqNnOx.approve.call(addressiFvvVwr, uintnQ1PN8, {from: accounts[3]});

		assert.equal(boolomJuGDV, true)
		await expect(RexonagGqNnOx.approveAndCall.call(addressGZdvkr5, uintPXUs2c, {from: accounts[5]})).to.be.rejectedWith(Error);
	});
})