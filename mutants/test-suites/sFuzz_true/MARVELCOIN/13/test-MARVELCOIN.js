const MARVELCOIN = artifacts.require("MARVELCOIN");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MARVELCOIN', (accounts) => {
	it('test for MARVELCOIN', async () => {
		const uintUuJktZu = BigInt("902")
		const stringI3w1LlU = "MpgpWOm38XMtuwM4OJajMlHNcQa9xPRwPM7zn1ndgz4QE85Sklh7FqCI4IrLSri"
		const stringxhDRAIQ = "RfFRk20cjGYsmuonebZm9zmQnPuIuJYVJSDOvDAhiE1UoxOInaob8fvLdlCvtu6CVLm"
		const MARVELCOINSpAJDiK = await MARVELCOIN.new(uintUuJktZu, stringI3w1LlU, stringxhDRAIQ, {from: accounts[1]});
		const uintWqDpUAR = BigInt("1909")
		const addressUR7IXZr = accounts[0]
		const uintQvxLqiU = BigInt("1885")
		const addressIGrdDl3 = accounts[1]
		const bytelB5PvuK = "0x000c01160e0f11021607"
		const uinthjoqn3n = BigInt("518")
		const addressOmgFE7F = accounts[5]
//		const boolBpeR7FO = await MARVELCOINSpAJDiK.burnFrom.call(addressUR7IXZr, uintWqDpUAR, {from: accounts[4]});
//		const boolDI7txu2 = await MARVELCOINSpAJDiK.approve.call(addressIGrdDl3, uintQvxLqiU, {from: accounts[4]});
//		const boolQ22wY8 = await MARVELCOINSpAJDiK.approveAndCall.call(addressOmgFE7F, uinthjoqn3n, bytelB5PvuK, {from: accounts[0]});

		await expect(MARVELCOINSpAJDiK.burnFrom.call(addressUR7IXZr, uintWqDpUAR, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for MARVELCOIN', async () => {
		const uintUO3mgrP = BigInt("1647")
		const stringmS2bv5g = "o7qv6CqJQFCQLyT4tTxk"
		const stringAg0tXP = "5K9wxVk5AlXd6zoruG8JNxXgghxiAyzBuhP2ymSkP72lylYhlCi2JSjf2kEoYVOjf1dAV4iHvjiHThFNkE1ra"
		const MARVELCOINIsCXRdr = await MARVELCOIN.new(uintUO3mgrP, stringmS2bv5g, stringAg0tXP, {from: "0x0000000000000000000000000000000000000001"});
		const uintUzXVr8C = BigInt("1327")
		const addresscIAiha = accounts[0]
		const uintKLbK6lH = BigInt("887")
		const addressfkyo6Ho = accounts[1]
		const addressIzxbY86 = accounts[3]
		const boolPbSpdz1 = await MARVELCOINIsCXRdr.burnFrom.call(addresscIAiha, uintUzXVr8C, {from: accounts[4]});
		const boolvsuxJ9L = await MARVELCOINIsCXRdr.transferFrom.call(addressIzxbY86, addressfkyo6Ho, uintKLbK6lH, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for MARVELCOIN', async () => {
		const uintfZlZk7v = BigInt("815")
		const stringO1i9M33 = "TXSgbLQ0BkBe7iHk5TwLCrgBbbuVVuTELr7MzscQnIqHnafb3bfiMQzJILSGaqdthSyrkzXT"
		const stringIw1ECYf = "rrfgPfih73E1pV66"
		const MARVELCOINf99aAPr = await MARVELCOIN.new(uintfZlZk7v, stringO1i9M33, stringIw1ECYf, {from: accounts[4]});
		const byteHIwqtje = "0x040e190d020e11150e0807150b04161e0517051a19141c121202090c0005"
		const uintTcdg8j = BigInt("1116")
		const addressRVZlWD = accounts[5]
		const uintBODZYIG = BigInt("497")
		const addressm5cypT5 = accounts[2]
		const uinthPzWcjk = BigInt("170")
		const addressAzBIc9I = accounts[0]
		const uintqxg6B5h = BigInt("1579")
		const addressEb1kH73 = accounts[0]
		const addressWXxePwo = accounts[1]
		const uintjMlI8yv = BigInt("1661")
//		const boolVhdusc = await MARVELCOINf99aAPr.approveAndCall.call(addressRVZlWD, uintTcdg8j, byteHIwqtje, {from: "0x0000000000000000000000000000000000000001"});
//		const booldQDeRRF = await MARVELCOINf99aAPr.approve.call(addressm5cypT5, uintBODZYIG, {from: accounts[3]});
//		const boolbGVQdRx = await MARVELCOINf99aAPr.burnFrom.call(addressAzBIc9I, uinthPzWcjk, {from: accounts[4]});
//		const booloEqsc96 = await MARVELCOINf99aAPr.transferFrom.call(addressWXxePwo, addressEb1kH73, uintqxg6B5h, {from: accounts[2]});
//		const boolqbC5W15 = await MARVELCOINf99aAPr.burn.call(uintjMlI8yv, {from: accounts[3]});

		await expect(MARVELCOINf99aAPr.approveAndCall.call(addressRVZlWD, uintTcdg8j, byteHIwqtje, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for MARVELCOIN', async () => {
		const uintDxoUKF6 = BigInt("1559")
		const stringnxC806Q = "trvycmwczauWc226XrExodnIWG1L6PzLQeTC9SCDbXqEVmtvzjH5ApDhzvBWiMosQiVlAeB4eBsdOOekAFnX5"
		const stringRY2FQZK = "dJjHvxiejHmvUd45OSN6LKDWyy0mgjFb4ICATiWHgWHhkkW061grCRzzFRBB8Xnv1a1rkbWWsc1PBTXnF2NLj3PU3op0ua2"
		const MARVELCOINQPcuKvh = await MARVELCOIN.new(uintDxoUKF6, stringnxC806Q, stringRY2FQZK, {from: accounts[0]});
		const uintWoTdbfZ = BigInt("1383")
		const addressbzLBgf6 = "0x0000000000000000000000000000000000000001"
		const addressM6kJuhG = accounts[3]
		const uintdx7J2Sf = BigInt("87")
		const byteuaL9jY = "0x1b1d1714161b0d1a09140e0b140e180f0e"
		const uintdHyQJD5 = BigInt("836")
		const addressJKPDsvI = "0x0000000000000000000000000000000000000001"
		const bytewtSDZzo = "0x190f07180f0c0d0117181c1213170f10020c050d0714121307071e18"
		const uintAUK4w17 = BigInt("1758")
		const addresscGCRDu = accounts[3]
//		const boolfLJjd6E = await MARVELCOINQPcuKvh.transferFrom.call(addressM6kJuhG, addressbzLBgf6, uintWoTdbfZ, {from: accounts[1]});
//		const boolr4xTSPD = await MARVELCOINQPcuKvh.burn.call(uintdx7J2Sf, {from: accounts[0]});
//		const boolMJU56ju = await MARVELCOINQPcuKvh.approveAndCall.call(addressJKPDsvI, uintdHyQJD5, byteuaL9jY, {from: accounts[0]});
//		const boolX0nHZO7 = await MARVELCOINQPcuKvh.approveAndCall.call(addresscGCRDu, uintAUK4w17, bytewtSDZzo, {from: accounts[0]});

		await expect(MARVELCOINQPcuKvh.transferFrom.call(addressM6kJuhG, addressbzLBgf6, uintWoTdbfZ, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for MARVELCOIN', async () => {
		const uintmcq3hKK = BigInt("387")
		const stringrGCGNH = "zJ6F"
		const stringbAcZk50 = "vt73ktx1nebdfHVpPv5MmEnEOh2s5N1E8hWjIXaDvfVOzF1kD0DLcpqIv"
		const MARVELCOIN3EhmaK = await MARVELCOIN.new(uintmcq3hKK, stringrGCGNH, stringbAcZk50, {from: accounts[2]});
		const uintVmB06N5 = BigInt("1780")
		const addressBg67sdv = accounts[5]
		const uintKg3FRhe = BigInt("1876")
		const bytedleo0VJ = "0x13051b191c06170f080d0d0a1a07021b"
		const uintJxngWN = BigInt("608")
		const addressuj9HuWx = accounts[0]
		const bytegTfxJEA = "0x18110d161719121a1010041803031a0e1b080915140c1f"
		const uintYEOhcSy = BigInt("132")
		const addressHNPMH1Z = accounts[0]
		const byteWeNlSLL = "0x1c040d02"
		const uintIFIhCmn = BigInt("1582")
		const addresspjfGbo3 = accounts[1]
		const byteCSLofRl = "0x180f0f160519120b0b0c08191e0a0c1d041e1908"
		const uinttVvALp2 = BigInt("1524")
		const addressuiSfZWF = accounts[4]
		const booleX9BOM7 = await MARVELCOIN3EhmaK.approve.call(addressBg67sdv, uintVmB06N5, {from: accounts[0]});
//		const booloj52vm = await MARVELCOIN3EhmaK.burn.call(uintKg3FRhe, {from: accounts[1]});
//		const boolUCcd794 = await MARVELCOIN3EhmaK.approveAndCall.call(addressuj9HuWx, uintJxngWN, bytedleo0VJ, {from: accounts[1]});
//		const boolEUDS4eU = await MARVELCOIN3EhmaK.approveAndCall.call(addressHNPMH1Z, uintYEOhcSy, bytegTfxJEA, {from: accounts[1]});
//		const boolrbArpxS = await MARVELCOIN3EhmaK.approveAndCall.call(addresspjfGbo3, uintIFIhCmn, byteWeNlSLL, {from: accounts[2]});
//		const booluqN03tx = await MARVELCOIN3EhmaK.approveAndCall.call(addressuiSfZWF, uinttVvALp2, byteCSLofRl, {from: accounts[0]});

		assert.equal(booleX9BOM7, true)
		await expect(MARVELCOIN3EhmaK.burn.call(uintKg3FRhe, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for MARVELCOIN', async () => {
		const uintV91c71a = BigInt("902")
		const stringI3w1LlU = "MpgpWOm38XMtuwM4OJajMlHNcQa9xPRwPM7zn1ndgz4QE85Sklh7FqCI4IrLSri"
		const stringxhDRAIQ = "RfFRk20cjGYsmuonebZm9zmQnPuIuJYVJSDOvDAhiE1UoxOInaob8fvLdlCvtu6CVLm"
		const MARVELCOINSpAJDiK = await MARVELCOIN.new(uintV91c71a, stringI3w1LlU, stringxhDRAIQ, {from: accounts[1]});
		const uintsFCCJir = BigInt("1909")
		const addressTZrN2Br = accounts[1]
		const uintAcMOaXP = BigInt("1636")
		const addressyctcJr = accounts[3]
		const addressdlAQtfJ = accounts[1]
		const uintUlAdB4l = BigInt("1885")
		const addressRYDq9GL = accounts[1]
//		const boolBpeR7FO = await MARVELCOINSpAJDiK.burnFrom.call(addressTZrN2Br, uintsFCCJir, {from: accounts[4]});
//		const boolu0jvrBC = await MARVELCOINSpAJDiK.transferFrom.call(addressdlAQtfJ, addressyctcJr, uintAcMOaXP, {from: accounts[3]});
//		const boolDI7txu2 = await MARVELCOINSpAJDiK.approve.call(addressRYDq9GL, uintUlAdB4l, {from: accounts[4]});

		await expect(MARVELCOINSpAJDiK.burnFrom.call(addressTZrN2Br, uintsFCCJir, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for MARVELCOIN', async () => {
		const uintRb0arLb = BigInt("1559")
		const stringnxC806Q = "trvycmwczauWc226XrExodnIWG1L6PzLQeTC9SCDbXqEVmtvzjH5ApDhzvBWiMosQiVlAeB4eBsdOOekAFnX5"
		const stringRY2FQZK = "dJjHvxiejHmvUd45OSN6LKDWyy0mgjFb4ICATiWHgWHhkkW061grCRzzFRBB8Xnv1a1rkbWWsc1PBTXnF2NLj3PU3op0ua2"
		const MARVELCOINQPcuKvh = await MARVELCOIN.new(uintRb0arLb, stringnxC806Q, stringRY2FQZK, {from: accounts[0]});
		const uintH42Nulr = BigInt("1563")
		const addressyXpOGKi = accounts[1]
		const byte2PCD9X = "0x1f0d06121a131b05141115131d1a131515"
		const uintErOtcBk = BigInt("1019")
		const addressU78i2Zl = "0x0000000000000000000000000000000000000001"
		const uintD7jkfMe = BigInt("1383")
		const addressChJQLsF = "0x00000000000000000000000000000000000000-1"
		const addressbD0uBxo = accounts[3]
//		const booldPvPAkp = await MARVELCOINQPcuKvh.transfer.call(addressyXpOGKi, uintH42Nulr, {from: accounts[2]});
//		const boolj19ChPa = await MARVELCOINQPcuKvh.approveAndCall.call(addressU78i2Zl, uintErOtcBk, byte2PCD9X, {from: "0x0000000000000000000000000000000000000001"});
//		const boolfLJjd6E = await MARVELCOINQPcuKvh.transferFrom.call(addressbD0uBxo, addressChJQLsF, uintD7jkfMe, {from: accounts[1]});

		await expect(MARVELCOINQPcuKvh.transfer.call(addressyXpOGKi, uintH42Nulr, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for MARVELCOIN', async () => {
		const uintoK0j3bt = BigInt("240")
		const stringtnx8gw = "dw1rnVEAyPpPjbVR"
		const stringLvbQb6L = "b789BeAbzcwZs5"
		const MARVELCOINkv2tnmL = await MARVELCOIN.new(uintoK0j3bt, stringtnx8gw, stringLvbQb6L, {from: accounts[3]});
		const uintPrcg1li = BigInt("152")
		const addressUnLH9hG = accounts[2]
		const uintdV6YYGa = BigInt("1971")
		const byterlToLg = "0x14161b0c1907"
		const uintq4Mzhip = BigInt("1696")
		const addressez6hJn7 = accounts[2]
		const uintFvXpin = BigInt("1217")
		const boolzfRZvQ = await MARVELCOINkv2tnmL.transfer.call(addressUnLH9hG, uintPrcg1li, {from: accounts[3]});
//		const boolFxMC4wG = await MARVELCOINkv2tnmL.burn.call(uintdV6YYGa, {from: accounts[4]});
//		const boolQWu4GXx = await MARVELCOINkv2tnmL.approveAndCall.call(addressez6hJn7, uintq4Mzhip, byterlToLg, {from: accounts[2]});
//		const boolylsl0N2 = await MARVELCOINkv2tnmL.burn.call(uintFvXpin, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolzfRZvQ, true)
		await expect(MARVELCOINkv2tnmL.burn.call(uintdV6YYGa, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for MARVELCOIN', async () => {
		const uintQSQUP7P = BigInt("1559")
		const stringnxC806Q = "trvycmwczauWc226XrExodnIWG1L6PzLQeTC9SCDbXqEVmtvzjH5ApDhzvBWiMosQiVlAeB4eBsdOOekAFnX5"
		const stringRY2FQZK = "dJjHvxiejHmvUd45OSN6LKDWyy0mgjFb4ICATiWHgWHhkkW061grCRzzFRBB8Xnv1a1rkbWWsc1PBTXnF2NLj3PU3op0ua2"
		const MARVELCOINQPcuKvh = await MARVELCOIN.new(uintQSQUP7P, stringnxC806Q, stringRY2FQZK, {from: accounts[0]});
		const uinthall8Bj = BigInt("1383")
		const addressjUx2FX2 = "0x00000000000000000000000000000000000000-1"
		const addressSMPMpKe = accounts[3]
//		const boolfLJjd6E = await MARVELCOINQPcuKvh.transferFrom.call(addressSMPMpKe, addressjUx2FX2, uinthall8Bj, {from: accounts[1]});

		await expect(MARVELCOINQPcuKvh.transferFrom.call(addressSMPMpKe, addressjUx2FX2, uinthall8Bj, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for MARVELCOIN', async () => {
		const uinthopERdk = BigInt("240")
		const stringtnx8gw = "dw1rnVEAyPpPjbVR"
		const stringLvbQb6L = "b789BeAbzcwZs5"
		const MARVELCOINkv2tnmL = await MARVELCOIN.new(uinthopERdk, stringtnx8gw, stringLvbQb6L, {from: accounts[3]});
		const uintoVynUui = BigInt("812")
		const addressYVTzdre = accounts[3]
		const uintWak1oMZ = BigInt("1400")
		const uintk2bv2t = BigInt("1215")
		const boolj5320I = await MARVELCOINkv2tnmL.approve.call(addressYVTzdre, uintoVynUui, {from: accounts[1]});
		const boolNjEFII = await MARVELCOINkv2tnmL.burn.call(uintWak1oMZ, {from: accounts[3]});
//		const boolylsl0N2 = await MARVELCOINkv2tnmL.burn.call(uintk2bv2t, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolNjEFII, true)
		assert.equal(boolj5320I, true)
		await expect(MARVELCOINkv2tnmL.burn.call(uintk2bv2t, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});
})