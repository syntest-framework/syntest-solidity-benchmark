const Rexona = artifacts.require("Rexona");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Rexona', (accounts) => {
	it('test for Rexona', async () => {
		const stringXVNRI0V = "VoOjUFp7umzjclUWVUaWm55sNDu9JebuL8lM41KlPsu1c8VYzkjWNJ"
		const stringTwrC1Du = "SJTQFPVyWJ9FQacCNpFXLVTLAInC6ihYUQJExgEEyeHQdf"
		const uinthiHWk1 = BigInt("1468")
		const RexonauBaDKQ4 = await Rexona.new(stringXVNRI0V, stringTwrC1Du, uinthiHWk1, {from: accounts[1]});
		const uintieG5Ov2 = BigInt("357")
		const addressCgXXB5L = accounts[0]
		const addressiddDRFJ = accounts[4]
		const uinttEYCT2g = BigInt("329")
		const addressqNLf85 = accounts[1]
		const uint66ChTh = BigInt("651")
		const addresswjyG60E = accounts[3]
//		const boolKy17ouq = await RexonauBaDKQ4.transferFrom.call(addressiddDRFJ, addressCgXXB5L, uintieG5Ov2, {from: accounts[1]});
//		const booltDxgoVb = await RexonauBaDKQ4.approveAndCall.call(addressqNLf85, uinttEYCT2g, {from: accounts[3]});
//		const boolichYf5w = await RexonauBaDKQ4.approveAndCall.call(addresswjyG60E, uint66ChTh, {from: accounts[2]});

		await expect(RexonauBaDKQ4.transferFrom.call(addressiddDRFJ, addressCgXXB5L, uintieG5Ov2, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Rexona', async () => {
		const stringkRftH5 = "upfQNeR1mvcL1XN6c5pVgdlcmZh4juXKb8zdq7guA7jEoPYqS7ge4sTSHt"
		const stringf6BhoWK = "uQ8U"
		const uintv9eqOWe = BigInt("618")
		const RexonahLggjqB = await Rexona.new(stringkRftH5, stringf6BhoWK, uintv9eqOWe, {from: accounts[4]});
		const uintKWkh3dF = BigInt("338")
		const addressM5uqy7C = accounts[0]
		const uintIezbcqL = BigInt("261")
		const addressrIAT7Vm = accounts[5]
		const uintPNzXMly = BigInt("1060")
		const addressuqUDgyz = "0x0000000000000000000000000000000000000001"
		const addressvTVdOvO = accounts[1]
		const uintnOqP1g1 = BigInt("445")
		const addressjrSnZPO = "0x0000000000000000000000000000000000000001"
		const uintypanEys = BigInt("2020")
		const addressfCQoNZv = "0x0000000000000000000000000000000000000001"
		const boolCx2IC8L = await RexonahLggjqB.approveAndCall.call(addressM5uqy7C, uintKWkh3dF, {from: accounts[4]});
		const boolX5vuRdR = await RexonahLggjqB.approve.call(addressrIAT7Vm, uintIezbcqL, {from: accounts[1]});
//		const boolNPqjwGw = await RexonahLggjqB.transferFrom.call(addressvTVdOvO, addressuqUDgyz, uintPNzXMly, {from: accounts[0]});
//		const boolHLmKUQD = await RexonahLggjqB.approve.call(addressjrSnZPO, uintnOqP1g1, {from: accounts[4]});
//		const boolF6WMmE4 = await RexonahLggjqB.approve.call(addressfCQoNZv, uintypanEys, {from: accounts[1]});

		assert.equal(boolCx2IC8L, true)
		assert.equal(boolX5vuRdR, true)
		await expect(RexonahLggjqB.transferFrom.call(addressvTVdOvO, addressuqUDgyz, uintPNzXMly, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Rexona', async () => {
		const stringMDQf8TB = "UKApiCv2ek9WjR4AskaLVizB9kfga923AnX65"
		const stringLW987li = "gPVdGCoSDtRMMojfXUOiVpKPghTx7AzuTCTDCq95gl4diZi1NNgmdw"
		const uintq5bUyfX = BigInt("4")
		const RexonaEsuEzW9 = await Rexona.new(stringMDQf8TB, stringLW987li, uintq5bUyfX, {from: accounts[3]});
		const uintI13tVTW = BigInt("1181")
		const addressRdNtf0R = accounts[4]
		const uintLrkcl0N = BigInt("185")
		const address1mv2Xt = accounts[4]
		const addressQGcqlE = accounts[2]
		const uintV3jNhOt = BigInt("1195")
		const addresssZO2X21 = accounts[4]
		const uintTvY4H3G = BigInt("1441")
		const addressuFjL54 = "0x0000000000000000000000000000000000000001"
//		const boolMmJa46F = await RexonaEsuEzW9.transfer.call(addressRdNtf0R, uintI13tVTW, {from: "0x0000000000000000000000000000000000000001"});
//		const boolODtYq7n = await RexonaEsuEzW9.transferFrom.call(addressQGcqlE, address1mv2Xt, uintLrkcl0N, {from: accounts[4]});
//		const boolUejoLuT = await RexonaEsuEzW9.approveAndCall.call(addresssZO2X21, uintV3jNhOt, {from: accounts[5]});
//		const boolnrm2GC2 = await RexonaEsuEzW9.approveAndCall.call(addressuFjL54, uintTvY4H3G, {from: accounts[5]});

		await expect(RexonaEsuEzW9.transfer.call(addressRdNtf0R, uintI13tVTW, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Rexona', async () => {
		const stringSMD8Pj = "V5adt5QOBbMmtI7AXXSatRACUyGfJKsvCoocfAdcE5OzMP3diT1vt46ZWAayynij6iejysUEGF8"
		const stringNonoSJ = "2g4np3lwQ6DylbtubNOmFwrozWKR8me"
		const uinttGKjuM = BigInt("410")
		const RexonaHT6yniX = await Rexona.new(stringSMD8Pj, stringNonoSJ, uinttGKjuM, {from: accounts[3]});
		const uintwVMRB3H = BigInt("1529")
		const addressfbrdzrx = accounts[1]
		const addressJjuYkhx = accounts[0]
		const uintTRZ2lh = BigInt("1759")
		const addressp8wixMp = "0x0000000000000000000000000000000000000001"
		const uintTvdVLlE = BigInt("1527")
		const addressqpAM1d = accounts[0]
		const uintdqHT2No = BigInt("199")
		const addressaRqOt40 = accounts[2]
		const uintl0yo46h = BigInt("35")
		const addresszHex94u = accounts[2]
		const boolR1aznsT = await RexonaHT6yniX.approve.call(addressfbrdzrx, uintwVMRB3H, {from: "0x0000000000000000000000000000000000000001"});
//		const boolNEfmyLg = await RexonaHT6yniX.transferownership.call(addressJjuYkhx, {from: accounts[1]});
//		const boolc6P3234 = await RexonaHT6yniX.approve.call(addressp8wixMp, uintTRZ2lh, {from: accounts[5]});
//		const boolgTUNJoN = await RexonaHT6yniX.approve.call(addressqpAM1d, uintTvdVLlE, {from: accounts[0]});
//		const boolpmW2zoZ = await RexonaHT6yniX.approve.call(addressaRqOt40, uintdqHT2No, {from: accounts[3]});
//		const booldnTPiKY = await RexonaHT6yniX.approve.call(addresszHex94u, uintl0yo46h, {from: accounts[3]});

		assert.equal(boolR1aznsT, true)
		await expect(RexonaHT6yniX.transferownership.call(addressJjuYkhx, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Rexona', async () => {
		const stringXiK0po = "xKRaxZEedTlVvApy9v9kPOxa5utG1223he2FjQV3A5xgSGipoo9unhLATmkg20Gc6UDNzgy"
		const stringTnuzbo9 = "e8Knd9dOcKPpN31vUWNt5Vxn"
		const uintTgsvTV0 = BigInt("1132")
		const RexonaBbBNO9 = await Rexona.new(stringXiK0po, stringTnuzbo9, uintTgsvTV0, {from: "0x0000000000000000000000000000000000000001"});
		const addressQd23rk = accounts[1]
		const uint4hC2Kb = BigInt("204")
		const addressuvUgSyf = accounts[5]
		const uintEX7htf9 = BigInt("1486")
		const addressXifoC7V = accounts[2]
		const boolFCLqwpm = await RexonaBbBNO9.transferownership.call(addressQd23rk, {from: accounts[0]});
		const boolE2lICxh = await RexonaBbBNO9.transfer.call(addressuvUgSyf, uint4hC2Kb, {from: accounts[5]});
		const boolWLzCNiT = await RexonaBbBNO9.approve.call(addressXifoC7V, uintEX7htf9, {from: accounts[3]});
	});

	it('test for Rexona', async () => {
		const string1peMvV = "Js6qlmkTSxxl9W217eu0Bqf4WUNW5aMpQgB5f1RrBx5T2vr2mplOj8nwoTImwkTFtsEiQNJ2M"
		const stringFZNHVT5 = "HaQ1RGYOAFRq8ioV5paZlLDgb4kyhARNgy7WXsAP3EOz73PlVjGlQugTIBTvADLYoaqpcWPTbQ8wR6MeBC"
		const uintL47dbPZ = BigInt("2042")
		const RexonaAqpg5mO = await Rexona.new(string1peMvV, stringFZNHVT5, uintL47dbPZ, {from: accounts[1]});
		const uintV4lxSQM = BigInt("1238")
		const addressxbC8HHm = accounts[2]
		const uintPyX8pZV = BigInt("531")
		const addressYn7JzIe = accounts[1]
		const uintWXU7HkB = BigInt("606")
		const addressme0lTHX = accounts[2]
		const addressAViiyTC = "0x0000000000000000000000000000000000000001"
		const uintFDNbB90 = BigInt("450")
		const addressjJcJhoa = accounts[3]
		const uintnlhyudn = BigInt("1478")
		const addressy9wwjz2 = "0x0000000000000000000000000000000000000001"
		const uintI3h5TNf = BigInt("619")
		const addressTlTnuMm = accounts[2]
		const addressNG5Mx8z = accounts[1]
		const boolkPQlehy = await RexonaAqpg5mO.approve.call(addressxbC8HHm, uintV4lxSQM, {from: accounts[2]});
//		const booln2i8zSz = await RexonaAqpg5mO.transfer.call(addressYn7JzIe, uintPyX8pZV, {from: accounts[0]});
//		const boolfwKLFKg = await RexonaAqpg5mO.transferFrom.call(addressAViiyTC, addressme0lTHX, uintWXU7HkB, {from: accounts[2]});
//		const boolkYip8cz = await RexonaAqpg5mO.approve.call(addressjJcJhoa, uintFDNbB90, {from: accounts[2]});
//		const boolilFqBJi = await RexonaAqpg5mO.transfer.call(addressy9wwjz2, uintnlhyudn, {from: accounts[1]});
//		const boolRbnlRGY = await RexonaAqpg5mO.approveAndCall.call(addressTlTnuMm, uintI3h5TNf, {from: accounts[1]});
//		const boola27LBXo = await RexonaAqpg5mO.transferownership.call(addressNG5Mx8z, {from: accounts[0]});

		assert.equal(boolkPQlehy, true)
		await expect(RexonaAqpg5mO.transfer.call(addressYn7JzIe, uintPyX8pZV, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Rexona', async () => {
		const stringIiw8tmq = "wUc7GRDnQcbNDdVZExLwnYTcMG5HN3j1mqqqryR5mQjOHryksvBVlYNShkYjdkqWA1XEpkJUzCETyNgT3CZxPfWYKB1"
		const string5LxOlM = "Jm9yQoBBP3CVOfMmDsnK9fKgmiQqVpmPtX9anfRs4Uc09OsKioS454juEUHNEZT"
		const uintZYuYwVt = BigInt("616")
		const RexonaRFXl0nc = await Rexona.new(stringIiw8tmq, string5LxOlM, uintZYuYwVt, {from: accounts[0]});
		const addressfMqLZUU = accounts[0]
		const uintbOpAuWC = BigInt("754")
		const addressDgj5q6Y = accounts[2]
		const addressybJzxBT = "0x0000000000000000000000000000000000000001"
		const boolWtf6Y4h = await RexonaRFXl0nc.transferownership.call(addressfMqLZUU, {from: accounts[0]});
//		const boolexIb9Vt = await RexonaRFXl0nc.transferFrom.call(addressybJzxBT, addressDgj5q6Y, uintbOpAuWC, {from: accounts[5]});

		assert.equal(boolWtf6Y4h, true)
		await expect(RexonaRFXl0nc.transferFrom.call(addressybJzxBT, addressDgj5q6Y, uintbOpAuWC, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Rexona', async () => {
		const stringkRftH5 = "upfQNeR1mvcL1XN6c5pVgdlcmZh4juXKb8zdq7guA7jEoPYqS7ge4sTSHt"
		const stringf6BhoWK = "uQ8U"
		const uintRL7a37U = BigInt("618")
		const RexonahLggjqB = await Rexona.new(stringkRftH5, stringf6BhoWK, uintRL7a37U, {from: accounts[4]});
		const uintT79JqRx = BigInt("0")
		const addresssBz3HdV = accounts[0]
		const uintUuPtAfg = BigInt("244")
		const addressXFXKHM = accounts[0]
		const uintcgciKk4 = BigInt("2020")
		const addressPer6Ghv = "0x0000000000000000000000000000000000000001"
		const uintCnpZ0bE = BigInt("852")
		const addressW7fd0FR = accounts[3]
		const uintwNSKNbe = BigInt("2028")
		const addressj1TpVXW = accounts[0]
		const addresst7nARb1 = accounts[0]
		const boolCx2IC8L = await RexonahLggjqB.approveAndCall.call(addresssBz3HdV, uintT79JqRx, {from: accounts[4]});
		const booll5ujbc1 = await RexonahLggjqB.approve.call(addressXFXKHM, uintUuPtAfg, {from: accounts[2]});
		const boolF6WMmE4 = await RexonahLggjqB.approve.call(addressPer6Ghv, uintcgciKk4, {from: accounts[1]});
//		const booliYVeVzQ = await RexonahLggjqB.approveAndCall.call(addressW7fd0FR, uintCnpZ0bE, {from: accounts[2]});
//		const boolqGiQgSj = await RexonahLggjqB.transferFrom.call(addresst7nARb1, addressj1TpVXW, uintwNSKNbe, {from: accounts[1]});

		assert.equal(boolCx2IC8L, true)
		assert.equal(boolF6WMmE4, true)
		assert.equal(booll5ujbc1, true)
		await expect(RexonahLggjqB.approveAndCall.call(addressW7fd0FR, uintCnpZ0bE, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Rexona', async () => {
		const stringMtm5xVd = "x4lF"
		const stringxdUcEPb = "mrnUDCteXpaK56mhpqwGLRRwfUuTxS"
		const uintP5Yc6FY = BigInt("2047")
		const RexonaDurAiJW = await Rexona.new(stringMtm5xVd, stringxdUcEPb, uintP5Yc6FY, {from: accounts[0]});
		const addressCj57Fud = accounts[2]
		const uintHQoHaWX = BigInt("459")
		const addresshmAvKzO = accounts[3]
		const uintxN7K0Z = BigInt("1672")
		const addresska8Y1P4 = accounts[1]
		const uintKXqDoMf = BigInt("0")
		const addressHGBb6gM = accounts[1]
		const uintDXBVnoL = BigInt("268")
		const addressfnQMujL = accounts[3]
		const addressxzS1dJi = accounts[2]
		const uintDgr3EN1 = BigInt("1407")
		const addresscp0kE2m = accounts[0]
		const addressAFOIF8s = accounts[0]
		const uintGM3L6IY = BigInt("199")
		const addressSRgIabs = accounts[4]
		const boolDOtyjSi = await RexonaDurAiJW.transferownership.call(addressCj57Fud, {from: accounts[0]});
		const boolIElV2zo = await RexonaDurAiJW.approve.call(addresshmAvKzO, uintHQoHaWX, {from: accounts[4]});
		const bool0e4k2q = await RexonaDurAiJW.approveAndCall.call(addresska8Y1P4, uintxN7K0Z, {from: accounts[0]});
		const boolljUypqt = await RexonaDurAiJW.transfer.call(addressHGBb6gM, uintKXqDoMf, {from: accounts[3]});
//		const boolhKKLEDE = await RexonaDurAiJW.transferFrom.call(addressxzS1dJi, addressfnQMujL, uintDXBVnoL, {from: accounts[3]});
//		const boolNfIk7Qj = await RexonaDurAiJW.transferFrom.call(addressAFOIF8s, addresscp0kE2m, uintDgr3EN1, {from: accounts[1]});
//		const boolydq2X0Q = await RexonaDurAiJW.approveAndCall.call(addressSRgIabs, uintGM3L6IY, {from: accounts[4]});

		assert.equal(bool0e4k2q, true)
		assert.equal(boolDOtyjSi, true)
		assert.equal(boolIElV2zo, true)
		assert.equal(boolljUypqt, true)
		await expect(RexonaDurAiJW.transferFrom.call(addressxzS1dJi, addressfnQMujL, uintDXBVnoL, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})