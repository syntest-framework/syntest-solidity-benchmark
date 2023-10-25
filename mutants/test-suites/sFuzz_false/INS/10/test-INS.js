const INS = artifacts.require("INS");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('INS', (accounts) => {
	it('test for INS', async () => {
		const uintUuJktZu = BigInt("902")
		const stringI3w1LlU = "MpgpWOm38XMtuwM4OJajMlHNcQa9xPRwPM7zn1ndgz4QE85Sklh7FqCI4IrLSri"
		const stringxhDRAIQ = "RfFRk20cjGYsmuonebZm9zmQnPuIuJYVJSDOvDAhiE1UoxOInaob8fvLdlCvtu6CVLm"
		const INSSpAJDiK = await INS.new(uintUuJktZu, stringI3w1LlU, stringxhDRAIQ, {from: accounts[1]});
		const uintWqDpUAR = BigInt("1909")
		const addressUR7IXZr = accounts[0]
		const uintQvxLqiU = BigInt("1885")
		const addressIGrdDl3 = accounts[1]
		const bytelB5PvuK = "0x000c01160e0f11021607"
		const uinthjoqn3n = BigInt("518")
		const addressOmgFE7F = accounts[5]
//		const boolBpeR7FO = await INSSpAJDiK.burnFrom.call(addressUR7IXZr, uintWqDpUAR, {from: accounts[4]});
//		const boolDI7txu2 = await INSSpAJDiK.approve.call(addressIGrdDl3, uintQvxLqiU, {from: accounts[4]});
//		const boolQ22wY8 = await INSSpAJDiK.approveAndCall.call(addressOmgFE7F, uinthjoqn3n, bytelB5PvuK, {from: accounts[0]});

		await expect(INSSpAJDiK.burnFrom.call(addressUR7IXZr, uintWqDpUAR, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for INS', async () => {
		const uintUO3mgrP = BigInt("1647")
		const stringmS2bv5g = "o7qv6CqJQFCQLyT4tTxk"
		const stringAg0tXP = "5K9wxVk5AlXd6zoruG8JNxXgghxiAyzBuhP2ymSkP72lylYhlCi2JSjf2kEoYVOjf1dAV4iHvjiHThFNkE1ra"
		const INSIsCXRdr = await INS.new(uintUO3mgrP, stringmS2bv5g, stringAg0tXP, {from: "0x0000000000000000000000000000000000000001"});
		const uintUzXVr8C = BigInt("1327")
		const addresscIAiha = accounts[0]
		const uintKLbK6lH = BigInt("887")
		const addressfkyo6Ho = accounts[1]
		const addressIzxbY86 = accounts[3]
		const boolPbSpdz1 = await INSIsCXRdr.burnFrom.call(addresscIAiha, uintUzXVr8C, {from: accounts[4]});
		const boolvsuxJ9L = await INSIsCXRdr.transferFrom.call(addressIzxbY86, addressfkyo6Ho, uintKLbK6lH, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for INS', async () => {
		const uintfZlZk7v = BigInt("815")
		const stringO1i9M33 = "TXSgbLQ0BkBe7iHk5TwLCrgBbbuVVuTELr7MzscQnIqHnafb3bfiMQzJILSGaqdthSyrkzXT"
		const stringIw1ECYf = "rrfgPfih73E1pV66"
		const INSf99aAPr = await INS.new(uintfZlZk7v, stringO1i9M33, stringIw1ECYf, {from: accounts[4]});
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
//		const boolVhdusc = await INSf99aAPr.approveAndCall.call(addressRVZlWD, uintTcdg8j, byteHIwqtje, {from: "0x0000000000000000000000000000000000000001"});
//		const booldQDeRRF = await INSf99aAPr.approve.call(addressm5cypT5, uintBODZYIG, {from: accounts[3]});
//		const boolbGVQdRx = await INSf99aAPr.burnFrom.call(addressAzBIc9I, uinthPzWcjk, {from: accounts[4]});
//		const booloEqsc96 = await INSf99aAPr.transferFrom.call(addressWXxePwo, addressEb1kH73, uintqxg6B5h, {from: accounts[2]});
//		const boolqbC5W15 = await INSf99aAPr.burn.call(uintjMlI8yv, {from: accounts[3]});

		await expect(INSf99aAPr.approveAndCall.call(addressRVZlWD, uintTcdg8j, byteHIwqtje, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for INS', async () => {
		const uintDxoUKF6 = BigInt("1559")
		const stringnxC806Q = "trvycmwczauWc226XrExodnIWG1L6PzLQeTC9SCDbXqEVmtvzjH5ApDhzvBWiMosQiVlAeB4eBsdOOekAFnX5"
		const stringRY2FQZK = "dJjHvxiejHmvUd45OSN6LKDWyy0mgjFb4ICATiWHgWHhkkW061grCRzzFRBB8Xnv1a1rkbWWsc1PBTXnF2NLj3PU3op0ua2"
		const INSQPcuKvh = await INS.new(uintDxoUKF6, stringnxC806Q, stringRY2FQZK, {from: accounts[0]});
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
//		const boolfLJjd6E = await INSQPcuKvh.transferFrom.call(addressM6kJuhG, addressbzLBgf6, uintWoTdbfZ, {from: accounts[1]});
//		const boolr4xTSPD = await INSQPcuKvh.burn.call(uintdx7J2Sf, {from: accounts[0]});
//		const boolMJU56ju = await INSQPcuKvh.approveAndCall.call(addressJKPDsvI, uintdHyQJD5, byteuaL9jY, {from: accounts[0]});
//		const boolX0nHZO7 = await INSQPcuKvh.approveAndCall.call(addresscGCRDu, uintAUK4w17, bytewtSDZzo, {from: accounts[0]});

		await expect(INSQPcuKvh.transferFrom.call(addressM6kJuhG, addressbzLBgf6, uintWoTdbfZ, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for INS', async () => {
		const uintmcq3hKK = BigInt("387")
		const stringrGCGNH = "zJ6F"
		const stringbAcZk50 = "vt73ktx1nebdfHVpPv5MmEnEOh2s5N1E8hWjIXaDvfVOzF1kD0DLcpqIv"
		const INS3EhmaK = await INS.new(uintmcq3hKK, stringrGCGNH, stringbAcZk50, {from: accounts[2]});
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
		const booleX9BOM7 = await INS3EhmaK.approve.call(addressBg67sdv, uintVmB06N5, {from: accounts[0]});
//		const booloj52vm = await INS3EhmaK.burn.call(uintKg3FRhe, {from: accounts[1]});
//		const boolUCcd794 = await INS3EhmaK.approveAndCall.call(addressuj9HuWx, uintJxngWN, bytedleo0VJ, {from: accounts[1]});
//		const boolEUDS4eU = await INS3EhmaK.approveAndCall.call(addressHNPMH1Z, uintYEOhcSy, bytegTfxJEA, {from: accounts[1]});
//		const boolrbArpxS = await INS3EhmaK.approveAndCall.call(addresspjfGbo3, uintIFIhCmn, byteWeNlSLL, {from: accounts[2]});
//		const booluqN03tx = await INS3EhmaK.approveAndCall.call(addressuiSfZWF, uinttVvALp2, byteCSLofRl, {from: accounts[0]});

		assert.equal(booleX9BOM7, true)
		await expect(INS3EhmaK.burn.call(uintKg3FRhe, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for INS', async () => {
		const uintyc1vdTq = BigInt("1596")
		const stringeeoY1zm = "nKx4N63Pk3miTxdUMLB3y8VIEH9lxWBNpkDzzmkNFj4oyRLPmJTatQYX9uNJb4Ck84a3CWy3EExefyWoQgyIvR"
		const stringpnD7nUu = "GwNm9x2Uz8RU2XRdpxdA1YfWAYWu4z8BArnRE974GHNCuOUdR"
		const INSuBY26r = await INS.new(uintyc1vdTq, stringeeoY1zm, stringpnD7nUu, {from: accounts[1]});
		const uintKkZDGlU = BigInt("511")
		const addressVUAG9x3 = "0x0000000000000000000000000000000000000001"
		const uintRb6ptqh = BigInt("1479")
		const uintKlCdIb4 = BigInt("1109")
		const address2h6k48 = accounts[2]
		const uintQJyxwZU = BigInt("1469")
		const addressU4WoXQ = accounts[0]
//		const boolvjanvbS = await INSuBY26r.transfer.call(addressVUAG9x3, uintKkZDGlU, {from: accounts[4]});
//		const bool9NUepW = await INSuBY26r.burn.call(uintRb6ptqh, {from: accounts[4]});
//		const boolncMUiio = await INSuBY26r.burnFrom.call(address2h6k48, uintKlCdIb4, {from: "0x0000000000000000000000000000000000000001"});
//		const boolkV73iVp = await INSuBY26r.approve.call(addressU4WoXQ, uintQJyxwZU, {from: accounts[0]});

		await expect(INSuBY26r.transfer.call(addressVUAG9x3, uintKkZDGlU, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})