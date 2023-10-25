const OnXFinance = artifacts.require("OnXFinance");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('OnXFinance', (accounts) => {
	it('test for OnXFinance', async () => {
		const stringnP59Gpm = "LGrlmrtTUXlpHp48WNTP8WRtBO1VOsaiOJ0DMQGdlW7T"
		const stringtyf3FF3 = "unVGrZxE4ufbzSiLgea0zBMleCeOsfjuFOoAIaY9G5c7wa0YWbl4X132sixQIfXpQx7mqCWbRmU5nJRXfNznb5ESa"
		const uintdLa2Ar = BigInt("301")
		const OnXFinancecsME8H = await OnXFinance.new(stringnP59Gpm, stringtyf3FF3, uintdLa2Ar, {from: accounts[3]});
		const addressGSCA7VC = "0x0000000000000000000000000000000000000001"
		const uintXmvqIR = BigInt("1852")
		const addressZYbmpmQ = accounts[3]
		const uintuBP72t0 = BigInt("1034")
		const addressFZDcJ5I = accounts[3]
//		const boole5JsWKi = await OnXFinancecsME8H.transferownership.call(addressGSCA7VC, {from: accounts[2]});
//		const uintY2wQ2ll = await OnXFinancecsME8H.totalSupply.call({from: accounts[3]});
//		const boolFAUdBVK = await OnXFinancecsME8H.increaseAllowance.call(addressZYbmpmQ, uintXmvqIR, {from: accounts[2]});
//		const uint8WUtHwd3 = await OnXFinancecsME8H.decimals.call({from: "0x0000000000000000000000000000000000000001"});
//		const boolAU2dQ8d = await OnXFinancecsME8H.approveAndCall.call(addressFZDcJ5I, uintuBP72t0, {from: "0x0000000000000000000000000000000000000001"});

		await expect(OnXFinancecsME8H.transferownership.call(addressGSCA7VC, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for OnXFinance', async () => {
		const stringlkvzt2 = "o9ICkDVTqjvWIVVuodRDqArFbtIFzJuhqPmK8f5pm5ydOWIUOSszHLvHHPRodQUK9C2WAMAIGrhc7ebNyK8"
		const stringNslAtIO = "Cx1vx"
		const uintvUmRZ6s = BigInt("30")
		const OnXFinanceogVpCbB = await OnXFinance.new(stringlkvzt2, stringNslAtIO, uintvUmRZ6s, {from: accounts[5]});
		const uintYHW1XqN = BigInt("508")
		const addressF3sh7VG = accounts[5]
		const addressFdmNHHQ = accounts[4]
		const addressA1mEFZ3 = accounts[3]
		const uintuwOf35t = BigInt("1793")
		const addressYMqMO75 = accounts[2]
		const uinthTHPXbm = BigInt("780")
		const addressMiLxdW8 = accounts[4]
//		const boola7oCZeN = await OnXFinanceogVpCbB.transfer.call(addressF3sh7VG, uintYHW1XqN, {from: accounts[0]});
//		const uintE3Mf1Kr = await OnXFinanceogVpCbB.allowance.call(addressA1mEFZ3, addressFdmNHHQ, {from: accounts[2]});
//		const boolVLMHNT = await OnXFinanceogVpCbB.approveAndCall.call(addressYMqMO75, uintuwOf35t, {from: accounts[0]});
//		const stringlHVFnv1 = await OnXFinanceogVpCbB.symbol.call({from: accounts[2]});
//		const boolyvxomF = await OnXFinanceogVpCbB.approveAndCall.call(addressMiLxdW8, uinthTHPXbm, {from: accounts[0]});

		await expect(OnXFinanceogVpCbB.transfer.call(addressF3sh7VG, uintYHW1XqN, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for OnXFinance', async () => {
		const stringEVLgMbd = "yfpbufiD1h3E7EPQkkE7EEvtu5NPJ"
		const stringURqt2AS = "JnXXoMLo3sXpiBMPTxp0kSzzfnJ4RUAs8tmgfxHHBaYaCWY"
		const uintzn1pT84 = BigInt("137")
		const OnXFinanceVTJokbK = await OnXFinance.new(stringEVLgMbd, stringURqt2AS, uintzn1pT84, {from: accounts[3]});
		const uintN7TLrtP = BigInt("13")
		const addressuUyUIdj = accounts[1]
		const uintOCTnlIB = BigInt("611")
		const addressZIIV7t0 = accounts[4]
		const addressBDbCxZ = accounts[4]
		const uintgniM1CD = BigInt("1043")
		const addressa9kVoOw = accounts[2]
//		const boolFDTnKaC = await OnXFinanceVTJokbK.transfer.call(addressuUyUIdj, uintN7TLrtP, {from: accounts[2]});
//		const stringM4c60Kz = await OnXFinanceVTJokbK.symbol.call({from: accounts[0]});
//		const boolD8LGC7R = await OnXFinanceVTJokbK.transferFrom.call(addressBDbCxZ, addressZIIV7t0, uintOCTnlIB, {from: accounts[1]});
//		const booldESD4VA = await OnXFinanceVTJokbK.approveAndCall.call(addressa9kVoOw, uintgniM1CD, {from: "0x0000000000000000000000000000000000000001"});

		await expect(OnXFinanceVTJokbK.transfer.call(addressuUyUIdj, uintN7TLrtP, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for OnXFinance', async () => {
		const stringlD8WuP = "Dv20fAoGNgsO4kW334"
		const stringcnDiLbK = "06G8abRqHO"
		const uintK8d15l = BigInt("1544")
		const OnXFinanceI5Ubb11 = await OnXFinance.new(stringlD8WuP, stringcnDiLbK, uintK8d15l, {from: accounts[3]});
		const uintbppMHqR = BigInt("870")
		const addressQEOTutu = accounts[2]
		const uintO30tE3P = BigInt("1542")
		const addressGWPW06a = accounts[0]
		const addressMREuWQB = accounts[0]
		const addressR1WVsc5 = accounts[4]
		const uintnzXwRf = await OnXFinanceI5Ubb11.totalSupply.call({from: accounts[0]});
//		const boolVjJVNYc = await OnXFinanceI5Ubb11.approveAndCall.call(addressQEOTutu, uintbppMHqR, {from: accounts[4]});
//		const boolmccKaXY = await OnXFinanceI5Ubb11.transfer.call(addressGWPW06a, uintO30tE3P, {from: accounts[0]});
//		const uintf8ufmPX = await OnXFinanceI5Ubb11.allowance.call(addressR1WVsc5, addressMREuWQB, {from: accounts[3]});
//		const stringaOYXFkw = await OnXFinanceI5Ubb11.symbol.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uintnzXwRf, BigInt("1544000000000000000000"))
		await expect(OnXFinanceI5Ubb11.approveAndCall.call(addressQEOTutu, uintbppMHqR, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for OnXFinance', async () => {
		const stringdsRHQS = "6Z92"
		const stringedEQWUt = "3kbjFvcc1LQTTtO8gtAKDVqqJepdAiXako0QjF7KiaPWY1Uj4R1KlKRLmIBAFNHAWjhOoSXpqlBhSKB1CLpsiJv6Rn"
		const uintO5L7ivw = BigInt("209")
		const OnXFinanceZDJ9nEk = await OnXFinance.new(stringdsRHQS, stringedEQWUt, uintO5L7ivw, {from: accounts[1]});
		const uintjrd9BoR = BigInt("1191")
		const addressS86gruz = accounts[4]
		const uintPFouroi = BigInt("1785")
		const addressIPfaRK0 = accounts[0]
//		const boolsteQro2 = await OnXFinanceZDJ9nEk.increaseAllowance.call(addressS86gruz, uintjrd9BoR, {from: accounts[0]});
//		const stringz6urv3h = await OnXFinanceZDJ9nEk.symbol.call({from: accounts[5]});
//		const boolEfePwV = await OnXFinanceZDJ9nEk.decreaseAllowance.call(addressIPfaRK0, uintPFouroi, {from: accounts[0]});

		await expect(OnXFinanceZDJ9nEk.increaseAllowance.call(addressS86gruz, uintjrd9BoR, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for OnXFinance', async () => {
		const stringPgSGqZP = "3Ezp"
		const stringB5oVeJx = "CEXq"
		const uintJj5SSXa = BigInt("181")
		const OnXFinancekxoCPJV = await OnXFinance.new(stringPgSGqZP, stringB5oVeJx, uintJj5SSXa, {from: accounts[0]});
		const addressyE5cTZI = accounts[5]
		const uintbM5sPGQ = BigInt("502")
		const addressKEqFsLW = accounts[4]
		const addressBzrMW9 = accounts[3]
		const uintK5OrIB = BigInt("653")
		const addressterCwl = accounts[0]
		const uintshXZywB = BigInt("889")
		const addressryuxwzx = accounts[3]
		const uintHMhSso = BigInt("1259")
		const addressy0uuOyF = accounts[4]
		const addressvYY7hjn = accounts[4]
		const uintKgZIkW3 = BigInt("391")
		const addressCtjjTaJ = accounts[2]
		const uintpMbfZ3g = await OnXFinancekxoCPJV.balanceOf.call(addressyE5cTZI, {from: accounts[3]});
//		const boolzMuURH5 = await OnXFinancekxoCPJV.transferFrom.call(addressBzrMW9, addressKEqFsLW, uintbM5sPGQ, {from: "0x0000000000000000000000000000000000000001"});
//		const boolBH5FkuR = await OnXFinancekxoCPJV.approve.call(addressterCwl, uintK5OrIB, {from: accounts[2]});
//		const boollSPzaS = await OnXFinancekxoCPJV.transfer.call(addressryuxwzx, uintshXZywB, {from: accounts[2]});
//		const boolEEvLU32 = await OnXFinancekxoCPJV.transferFrom.call(addressvYY7hjn, addressy0uuOyF, uintHMhSso, {from: accounts[0]});
//		const boolEFHloik = await OnXFinancekxoCPJV.approve.call(addressCtjjTaJ, uintKgZIkW3, {from: accounts[0]});

		assert.equal(uintpMbfZ3g, BigInt("0"))
		await expect(OnXFinancekxoCPJV.transferFrom.call(addressBzrMW9, addressKEqFsLW, uintbM5sPGQ, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for OnXFinance', async () => {
		const stringlD8WuP = "Dv20fAoGNgsO4kW334"
		const stringcnDiLbK = "06G8abRqHO"
		const uintM3Yrgy = BigInt("1544")
		const OnXFinanceI5Ubb11 = await OnXFinance.new(stringlD8WuP, stringcnDiLbK, uintM3Yrgy, {from: accounts[3]});
		const uintByXmmLB = BigInt("1256")
		const addressJpBRhby = accounts[2]
		const uintEAJOmb = BigInt("870")
		const addresskQzPQu3 = accounts[2]
		const uintIPMT3xa = BigInt("1542")
		const addressImiCUge = accounts[0]
		const uintqWemZPh = BigInt("627")
		const addressmYTrbH0 = accounts[4]
		const addressVYkhXv2 = accounts[0]
		const addresszMItDuD = accounts[0]
		const addressuj6Cz64 = accounts[4]
		const uintnzXwRf = await OnXFinanceI5Ubb11.totalSupply.call({from: accounts[0]});
		const boolCnDxyU3 = await OnXFinanceI5Ubb11.approve.call(addressJpBRhby, uintByXmmLB, {from: "0x0000000000000000000000000000000000000001"});
//		const boolVjJVNYc = await OnXFinanceI5Ubb11.approveAndCall.call(addresskQzPQu3, uintEAJOmb, {from: accounts[4]});
//		const boolmccKaXY = await OnXFinanceI5Ubb11.transfer.call(addressImiCUge, uintIPMT3xa, {from: accounts[0]});
//		const boolNgeVDRh = await OnXFinanceI5Ubb11.transferFrom.call(addressVYkhXv2, addressmYTrbH0, uintqWemZPh, {from: accounts[2]});
//		const stringI5PEQt4 = await OnXFinanceI5Ubb11.name.call({from: accounts[4]});
//		const uintf8ufmPX = await OnXFinanceI5Ubb11.allowance.call(addressuj6Cz64, addresszMItDuD, {from: accounts[3]});
//		const stringaOYXFkw = await OnXFinanceI5Ubb11.symbol.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolCnDxyU3, true)
		assert.equal(uintnzXwRf, BigInt("1544000000000000000000"))
		await expect(OnXFinanceI5Ubb11.approveAndCall.call(addresskQzPQu3, uintEAJOmb, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for OnXFinance', async () => {
		const stringEVLgMbd = "yfpbufiD1h3E7EPQkkE7EEvtu5NPJ"
		const stringURqt2AS = "JnXXoMLo3sXpiBMPTxp0kSzzfnJ4RUAs8tmgfxHHBaYaCWY"
		const uinttLLaTd4 = BigInt("137")
		const OnXFinanceVTJokbK = await OnXFinance.new(stringEVLgMbd, stringURqt2AS, uinttLLaTd4, {from: accounts[3]});
		const uintzaSBAY = BigInt("0")
		const addressbi0vKTp = accounts[1]
		const uintZIUPUP7 = BigInt("1138")
		const addressCzBPotd = accounts[4]
		const addressbparlCj = accounts[4]
		const uintCLWvgJk = BigInt("1043")
		const addressjM29VYu = accounts[2]
		const boolFDTnKaC = await OnXFinanceVTJokbK.transfer.call(addressbi0vKTp, uintzaSBAY, {from: accounts[2]});
//		const bool9PSTQv = await OnXFinanceVTJokbK.transferFrom.call(addressbparlCj, addressCzBPotd, uintZIUPUP7, {from: accounts[4]});
//		const booldESD4VA = await OnXFinanceVTJokbK.approveAndCall.call(addressjM29VYu, uintCLWvgJk, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolFDTnKaC, true)
		await expect(OnXFinanceVTJokbK.transferFrom.call(addressbparlCj, addressCzBPotd, uintZIUPUP7, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for OnXFinance', async () => {
		const stringyvsMH3f = "s298MwHu3R6VWzus"
		const stringrFND5kp = "aL9kO7"
		const uintF7ei4D = BigInt("609")
		const OnXFinanceGzBy9v5 = await OnXFinance.new(stringyvsMH3f, stringrFND5kp, uintF7ei4D, {from: "0x0000000000000000000000000000000000000001"});
		const addressvVvRkiI = accounts[1]
		const uintYhNYyyL = BigInt("587")
		const addressKo9GEPA = accounts[4]
		const addresszFpGxSE = accounts[1]
		const uintoV4X0K = await OnXFinanceGzBy9v5.balanceOf.call(addressvVvRkiI, {from: accounts[1]});
		const stringy5s8G9t = await OnXFinanceGzBy9v5.name.call({from: accounts[5]});
		const boolF6JFEM = await OnXFinanceGzBy9v5.transfer.call(addressKo9GEPA, uintYhNYyyL, {from: accounts[4]});
		const uintkMXmawG = await OnXFinanceGzBy9v5.balanceOf.call(addresszFpGxSE, {from: accounts[0]});
	});

	it('test for OnXFinance', async () => {
		const stringEVLgMbd = "yfpbufiD1h3E7EPQkkE7EEvtu5NPJ"
		const stringURqt2AS = "JnXXoMLo3sXpiBMPTxp0kSzzfnJ4RUAs8tmgfxHHBaYaCWY"
		const uintTL2qyRm = BigInt("137")
		const OnXFinanceVTJokbK = await OnXFinance.new(stringEVLgMbd, stringURqt2AS, uintTL2qyRm, {from: accounts[3]});
		const addressx1qM88k = accounts[4]
		const boolrBeamIR = await OnXFinanceVTJokbK.transferownership.call(addressx1qM88k, {from: accounts[3]});

		assert.equal(boolrBeamIR, true)
	});

	it('test for OnXFinance', async () => {
		const stringEVLgMbd = "yfpbufiD1h3E7EPQkkE7EEvtu5NPJ"
		const stringURqt2AS = "JnXXoMLo3sXpiBMPTxp0kSzzfnJ4RUAs8tmgfxHHBaYaCWY"
		const uintKenRdPK = BigInt("137")
		const OnXFinanceVTJokbK = await OnXFinance.new(stringEVLgMbd, stringURqt2AS, uintKenRdPK, {from: accounts[3]});
		const uintLGx8vsu = BigInt("171")
		const addressQ9MAq7n = accounts[3]
		const uintD6v2LYV = BigInt("326")
		const addresscUgGF3V = accounts[2]
		const addressvBf4GFF = accounts[3]
		const uintwsIacEy = BigInt("1715")
		const addressXAhb37n = accounts[3]
		const addressGlPbc4J = accounts[5]
		const boolsoF1w94 = await OnXFinanceVTJokbK.approveAndCall.call(addressQ9MAq7n, uintLGx8vsu, {from: accounts[3]});
//		const boolD2gKF1C = await OnXFinanceVTJokbK.transferFrom.call(addressvBf4GFF, addresscUgGF3V, uintD6v2LYV, {from: "0x0000000000000000000000000000000000000001"});
//		const boolRqnvUBg = await OnXFinanceVTJokbK.transferFrom.call(addressGlPbc4J, addressXAhb37n, uintwsIacEy, {from: accounts[1]});

		assert.equal(boolsoF1w94, true)
		await expect(OnXFinanceVTJokbK.transferFrom.call(addressvBf4GFF, addresscUgGF3V, uintD6v2LYV, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});
})