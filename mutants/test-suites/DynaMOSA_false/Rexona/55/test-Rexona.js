const Rexona = artifacts.require("Rexona");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Rexona', (accounts) => {
	it('test for Rexona', async () => {
		const stringDPxQSC = "M4dFg9AE2eU5j2es5tpucJn4txHdwIqeLnsHSvxs"
		const stringkj80aVe = "2KeKOD1G1u37UNDWyE0vhTtC9v9gHbKvUadlJgn6oya8tSA54cmV1ryz3AHPSqju"
		const uintENluoWY = BigInt("982")
		const RexonaB69MTbm = await Rexona.new(stringDPxQSC, stringkj80aVe, uintENluoWY, {from: accounts[2]});
		const uintdh3oxZi = BigInt("552")
		const addressWOMZlSN = accounts[3]
		const uintrTQ3qPw = BigInt("831")
		const addresscwjarPK = "0x0000000000000000000000000000000000000001"
		const addresskWpZz8 = "0x0000000000000000000000000000000000000001"
		const uintx8gPT0F = BigInt("1662")
		const addressuZIimps = "0x0000000000000000000000000000000000000001"
		const boolnLBENLB = await RexonaB69MTbm.approve.call(addressWOMZlSN, uintdh3oxZi, {from: accounts[3]});
//		const boolKo7ijjR = await RexonaB69MTbm.transferFrom.call(addresskWpZz8, addresscwjarPK, uintrTQ3qPw, {from: accounts[3]});
//		const boolQBzVKy = await RexonaB69MTbm.approve.call(addressuZIimps, uintx8gPT0F, {from: accounts[3]});

		assert.equal(boolnLBENLB, true)
		await expect(RexonaB69MTbm.transferFrom.call(addresskWpZz8, addresscwjarPK, uintrTQ3qPw, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Rexona', async () => {
		const stringOP1Td2u = "Wc"
		const stringUctZ6w = "4DHMTX7groqxOnaBUMLR1m4l7U9Ed12MF3I1kf4ehSjhaIV4KbG3cd"
		const uintt3qPsXI = BigInt("1672")
		const RexonaGG80bbX = await Rexona.new(stringOP1Td2u, stringUctZ6w, uintt3qPsXI, {from: accounts[4]});
		const uintAhw0T0Y = BigInt("1672")
		const addressnrgySWR = accounts[1]
		const uintAYvwS0o = BigInt("2043")
		const addressc62KiRK = accounts[2]
		const uintn7KQFrF = BigInt("1342")
		const addressavluRCg = accounts[1]
		const uintdQTFVs5 = BigInt("1119")
		const addressQ9Xofrx = accounts[0]
		const addressjmP4AeA = accounts[2]
		const boolylpleVr = await RexonaGG80bbX.approve.call(addressnrgySWR, uintAhw0T0Y, {from: accounts[2]});
//		const boolsiTy8FG = await RexonaGG80bbX.approveAndCall.call(addressc62KiRK, uintAYvwS0o, {from: "0x0000000000000000000000000000000000000001"});
//		const boolZpOT4BV = await RexonaGG80bbX.approve.call(addressavluRCg, uintn7KQFrF, {from: accounts[2]});
//		const boolvgDd9Oe = await RexonaGG80bbX.transferFrom.call(addressjmP4AeA, addressQ9Xofrx, uintdQTFVs5, {from: accounts[2]});

		assert.equal(boolylpleVr, true)
		await expect(RexonaGG80bbX.approveAndCall.call(addressc62KiRK, uintAYvwS0o, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Rexona', async () => {
		const stringwtfAOpy = "udOGnWpgCwCQWEpFuHOAiWrd0PfKtC"
		const stringnEH042d = "RQWX9dcwyj5skoUTim2EH8b4weOpmi2EsWJPUHdxuhEVONWwHTLjSKtgkMFkwL4UaY4kOjzS6Y2rIqWeJkGULOUsYEtmR"
		const uinte88833k = BigInt("933")
		const RexonaUrAbOZr = await Rexona.new(stringwtfAOpy, stringnEH042d, uinte88833k, {from: accounts[2]});
		const uintatNsWtZ = BigInt("464")
		const addressNhJ2JhE = accounts[4]
		const uintDKMDKG = BigInt("1063")
		const addressHH3fYvC = accounts[3]
		const addressgW2rfWM = "0x0000000000000000000000000000000000000001"
		const boolViHNfWb = await RexonaUrAbOZr.approve.call(addressNhJ2JhE, uintatNsWtZ, {from: accounts[0]});
		const boolgC48Em = await RexonaUrAbOZr.approve.call(addressHH3fYvC, uintDKMDKG, {from: accounts[4]});
//		const booloPhyg8 = await RexonaUrAbOZr.transferownership.call(addressgW2rfWM, {from: accounts[1]});

		assert.equal(boolViHNfWb, true)
		assert.equal(boolgC48Em, true)
		await expect(RexonaUrAbOZr.transferownership.call(addressgW2rfWM, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Rexona', async () => {
		const stringhSLiMOp = "FfNxA5TCRBaH8QFM6QYKVoOX8nCF4xaoe"
		const stringyQd8hGk = "3RfMlMCWttA5YzfCEcBnG5SMs80oq5mdMDSP2svk3fNRj7t27ntrp6LtceJMMPV67tVEpJl"
		const uintof697hq = BigInt("155")
		const RexonaEMEBG2X = await Rexona.new(stringhSLiMOp, stringyQd8hGk, uintof697hq, {from: "0x0000000000000000000000000000000000000001"});
		const uinth5rnyDt = BigInt("173")
		const addressU5PMNt1 = accounts[4]
		const uintjwNLQGZ = BigInt("1851")
		const addressrM94k5Y = accounts[0]
		const addressXaMEUUr = accounts[4]
		const addressIlqJPC3 = accounts[4]
		const uintIh2aW2b = BigInt("270")
		const addressQxTmGNP = accounts[3]
		const uintyDXpsNy = BigInt("953")
		const addresswcmYXM4 = accounts[3]
		const uintvcE74T = BigInt("1103")
		const addressKwTGwc = accounts[1]
		const addresstEtLhiy = accounts[1]
		const boolSmmNP94 = await RexonaEMEBG2X.approve.call(addressU5PMNt1, uinth5rnyDt, {from: accounts[4]});
		const boolkfr1O8X = await RexonaEMEBG2X.transferFrom.call(addressXaMEUUr, addressrM94k5Y, uintjwNLQGZ, {from: accounts[1]});
		const boolxHeveWt = await RexonaEMEBG2X.transferownership.call(addressIlqJPC3, {from: accounts[1]});
		const boolNYwWmJY = await RexonaEMEBG2X.transfer.call(addressQxTmGNP, uintIh2aW2b, {from: "0x0000000000000000000000000000000000000001"});
		const boolkpMJT0B = await RexonaEMEBG2X.approve.call(addresswcmYXM4, uintyDXpsNy, {from: accounts[0]});
		const booleluObUY = await RexonaEMEBG2X.transferFrom.call(addresstEtLhiy, addressKwTGwc, uintvcE74T, {from: accounts[3]});
	});

	it('test for Rexona', async () => {
		const stringHnjRpUr = "Vex6cEPxmrAxb9kVKwyaYj2yiswYTny6xRdAwN7sTwyCh9LmSzRL8YWdmM1GoVCcjQkl"
		const stringkkG44c6 = "4iGbEN947Uo4mcR6Y1Xg7MfFbtwl9CoGZZP9axIXIX7fw2W99h7hbHOXLqk0MWCGjo6tgsvkw90hYbPj9LMnnng"
		const uintYhdm5bL = BigInt("1319")
		const RexonaMH9o40X = await Rexona.new(stringHnjRpUr, stringkkG44c6, uintYhdm5bL, {from: accounts[5]});
		const uintBNRZ2B7 = BigInt("829")
		const addresshMD7QK7 = accounts[2]
		const uintWqi2FBn = BigInt("559")
		const addressTAVKE5 = accounts[2]
		const uintmUnjrkF = BigInt("1236")
		const addressSsVyFDy = accounts[1]
		const boolYvtsoJv = await RexonaMH9o40X.transfer.call(addresshMD7QK7, uintBNRZ2B7, {from: accounts[5]});
//		const boolvuboviw = await RexonaMH9o40X.transfer.call(addressTAVKE5, uintWqi2FBn, {from: accounts[0]});
//		const boolMVEOZ9w = await RexonaMH9o40X.approve.call(addressSsVyFDy, uintmUnjrkF, {from: accounts[0]});

		assert.equal(boolYvtsoJv, true)
		await expect(RexonaMH9o40X.transfer.call(addressTAVKE5, uintWqi2FBn, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Rexona', async () => {
		const stringHnjRpUr = "Vex6cEPxmrAxb9kVKwyaYj2yiswYTny6xRdAwN7sTwyCh9LmSzRL8YWdmM1GoVCcjQkl"
		const stringkkG44c6 = "4iGbEN947Uo4mcR6Y1Xg7MfFbtwl9CoGZZP9axIXIX7fw2W99h7hbHOXLqk0MWCGjo6tgsvkw90hYbPj9LMnnng"
		const uintfQRk130 = BigInt("1319")
		const RexonaMH9o40X = await Rexona.new(stringHnjRpUr, stringkkG44c6, uintfQRk130, {from: accounts[5]});
		const uintguP4tzb = BigInt("829")
		const addresseTllVNi = accounts[2]
		const uintpGIHX0o = BigInt("492")
		const addressizsGYGN = accounts[5]
		const uintZyY5yGq = BigInt("551")
		const addressvFQYQEG = accounts[2]
		const uintAc0d9Pl = BigInt("1236")
		const addressYUM88iw = accounts[1]
		const boolYvtsoJv = await RexonaMH9o40X.transfer.call(addresseTllVNi, uintguP4tzb, {from: accounts[5]});
		const boolQveJ6w = await RexonaMH9o40X.approveAndCall.call(addressizsGYGN, uintpGIHX0o, {from: accounts[5]});
//		const boolvuboviw = await RexonaMH9o40X.transfer.call(addressvFQYQEG, uintZyY5yGq, {from: accounts[0]});
//		const boolMVEOZ9w = await RexonaMH9o40X.approve.call(addressYUM88iw, uintAc0d9Pl, {from: accounts[0]});

		assert.equal(boolQveJ6w, true)
		assert.equal(boolYvtsoJv, true)
		await expect(RexonaMH9o40X.transfer.call(addressvFQYQEG, uintZyY5yGq, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Rexona', async () => {
		const stringHnjRpUr = "Vex6cEPxmrAxb9kVKwyaYj2yiswYTny6xRdAwN7sTwyCh9LmSzRL8YWdmM1GoVCcjQkl"
		const stringkkG44c6 = "4iGbEN947Uo4mcR6Y1Xg7MfFbtwl9CoGZZP9axIXIX7fw2W99h7hbHOXLqk0MWCGjo6tgsvkw90hYbPj9LMnnng"
		const uintOJWzSh6 = BigInt("1319")
		const RexonaMH9o40X = await Rexona.new(stringHnjRpUr, stringkkG44c6, uintOJWzSh6, {from: accounts[5]});
		const uintrPsS5MZ = BigInt("0")
		const addressmabZbvt = accounts[3]
		const addressinbnHJn = accounts[2]
		const boolMJozvaA = await RexonaMH9o40X.transferFrom.call(addressinbnHJn, addressmabZbvt, uintrPsS5MZ, {from: accounts[0]});

		assert.equal(boolMJozvaA, true)
	});

	it('test for Rexona', async () => {
		const stringHnjRpUr = "Vex6cEPxmrAxb9kVKwyaYj2yiswYTny6xRdAwN7sTwyCh9LmSzRL8YWdmM1GoVCcjQkl"
		const stringkkG44c6 = "4iGbEN947Uo4mcR6Y1Xg7MfFbtwl9CoGZZP9axIXIX7fw2W99h7hbHOXLqk0MWCGjo6tgsvkw90hYbPj9LMnnng"
		const uintoWQ0d8r = BigInt("1319")
		const RexonaMH9o40X = await Rexona.new(stringHnjRpUr, stringkkG44c6, uintoWQ0d8r, {from: accounts[5]});
		const uintbpANGca = BigInt("0")
		const addressPvo50WW = accounts[7]
		const uintd4ZucV = BigInt("120")
		const addressUMgF2P7 = accounts[5]
		const uintS0ssOck = BigInt("388")
		const addressOahh2ia = accounts[4]
		const addressD83Zpa = accounts[4]
		const boolQveJ6w = await RexonaMH9o40X.approveAndCall.call(addressPvo50WW, uintbpANGca, {from: accounts[5]});
//		const boolsy6bwkK = await RexonaMH9o40X.transfer.call(addressUMgF2P7, uintd4ZucV, {from: accounts[2]});
//		const boolV31moik = await RexonaMH9o40X.transferFrom.call(addressD83Zpa, addressOahh2ia, uintS0ssOck, {from: accounts[4]});

		assert.equal(boolQveJ6w, true)
		await expect(RexonaMH9o40X.transfer.call(addressUMgF2P7, uintd4ZucV, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})