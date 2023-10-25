const INS = artifacts.require("INS");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('INS', (accounts) => {
	it('test for INS', async () => {
		const uinthoZwSe = BigInt("1651")
		const stringJBznMCV = "y9JxI8YEquHDnf2ggVOVf1dyBvkfhCDTnpjD7xKmlpBSRWh3HnAyNTWh4PyvOBz4kdWKHLHHE96ghPh3JWiUGxcfyEHD9abJ8"
		const stringYMPGU7Y = "aX2poGJiZQ8kKdSN6dPijqDgilqrlWSDUi6"
		const INShVE9GAa = await INS.new(uinthoZwSe, stringJBznMCV, stringYMPGU7Y, {from: accounts[4]});
		const byteOBceKY = "0x16041f1b17101f0a08071a0c1c1513"
		const uintUEe2RDd = BigInt("1592")
		const addressrrVbT8J = accounts[2]
		const byteRh0w3jE = "0x17081f1307170a13010f200d010a0d1b0b18131411141e0e0709181c1411"
		const uintj4VQGLi = BigInt("1640")
		const addressFJbyeAm = accounts[2]
		const uint2OLBbc = BigInt("202")
		const uintm9833Lo = BigInt("401")
		const addressBJDui5t = accounts[4]
//		const boolGhnEpvc = await INShVE9GAa.approveAndCall.call(addressrrVbT8J, uintUEe2RDd, byteOBceKY, {from: accounts[3]});
//		const booluZNdfUo = await INShVE9GAa.approveAndCall.call(addressFJbyeAm, uintj4VQGLi, byteRh0w3jE, {from: accounts[3]});
//		const boolA16Nnf3 = await INShVE9GAa.burn.call(uint2OLBbc, {from: accounts[3]});
//		const boolZ2vj2Fo = await INShVE9GAa.transfer.call(addressBJDui5t, uintm9833Lo, {from: accounts[4]});

		await expect(INShVE9GAa.approveAndCall.call(addressrrVbT8J, uintUEe2RDd, byteOBceKY, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for INS', async () => {
		const uinteiotpU = BigInt("746")
		const stringHJZPOS4 = "zgNtnQjnaybp41hTzwDux2OHmkEKudgQv8RxyVDKd"
		const stringzSTCdXm = "3HpVjvwksfGu1efxBeGawKh2e"
		const INSjUboSQR = await INS.new(uinteiotpU, stringHJZPOS4, stringzSTCdXm, {from: accounts[1]});
		const uintFN4LQfk = BigInt("1158")
		const addresslvLSxE9 = accounts[0]
		const addresswhqK3yp = accounts[1]
		const uintIqFao3 = BigInt("408")
		const addressC7cpBg = accounts[3]
		const addressFmdRIv = accounts[2]
		const uintHCrnZ1 = BigInt("135")
		const addressUNqz4tx = accounts[2]
		const uintw81azcP = BigInt("85")
		const addressyn6FOIf = accounts[2]
		const uintYcSpVT0 = BigInt("1004")
		const addressHkRoK6C = accounts[2]
		const byteOA0X8EZ = "0x150d0f0211120a1d192010"
		const uintkQoyi0S = BigInt("1423")
		const addresssLVqvHm = accounts[5]
//		const boolld5fvN = await INSjUboSQR.transferFrom.call(addresswhqK3yp, addresslvLSxE9, uintFN4LQfk, {from: accounts[1]});
//		const boolsoJZ7Yl = await INSjUboSQR.transferFrom.call(addressFmdRIv, addressC7cpBg, uintIqFao3, {from: accounts[2]});
//		const boolLnqM5ia = await INSjUboSQR.approve.call(addressUNqz4tx, uintHCrnZ1, {from: "0x0000000000000000000000000000000000000001"});
//		const boolRvjFV6U = await INSjUboSQR.approve.call(addressyn6FOIf, uintw81azcP, {from: "0x0000000000000000000000000000000000000001"});
//		const boolEsw5sy8 = await INSjUboSQR.approve.call(addressHkRoK6C, uintYcSpVT0, {from: accounts[1]});
//		const boolrvf5h3a = await INSjUboSQR.approveAndCall.call(addresssLVqvHm, uintkQoyi0S, byteOA0X8EZ, {from: accounts[0]});

		await expect(INSjUboSQR.transferFrom.call(addresswhqK3yp, addresslvLSxE9, uintFN4LQfk, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for INS', async () => {
		const uinteO9I5Yp = BigInt("1412")
		const stringQmactzZ = "w68dqrzguuksM5FHBbdU2mTnWOBfqJYohmYylj3Sv"
		const stringEaJyjM7 = "k1YjhoE7b77T4dD0BZAXAmAvuHijdbQeOBRNCnjmbpfb4YvcfvrkDJBm"
		const INSkeRH7u3 = await INS.new(uinteO9I5Yp, stringQmactzZ, stringEaJyjM7, {from: accounts[2]});
		const uintbBaLmXf = BigInt("1458")
		const uintCXE4p9z = BigInt("817")
		const uintw3uueyA = BigInt("1875")
		const addressHJC51p = accounts[4]
//		const boolrLkFcp = await INSkeRH7u3.burn.call(uintbBaLmXf, {from: accounts[4]});
//		const booltgMSbQy = await INSkeRH7u3.burn.call(uintCXE4p9z, {from: accounts[5]});
//		const boolzhPumB0 = await INSkeRH7u3.approve.call(addressHJC51p, uintw3uueyA, {from: accounts[5]});

		await expect(INSkeRH7u3.burn.call(uintbBaLmXf, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for INS', async () => {
		const uintSNleNXU = BigInt("10")
		const stringkCFfseQ = "FQonxm7KwC9Vx3Gmv5DQnhxQNuZEa0FEpnu"
		const string0RAuoP = "mGvnGMlK5i5EAoMr48M0ypM0"
		const INS2b1lnQ = await INS.new(uintSNleNXU, stringkCFfseQ, string0RAuoP, {from: accounts[4]});
		const uintVBAeZyR = BigInt("377")
		const addressTruNPya = accounts[3]
		const uintXXOwWmy = BigInt("801")
		const addressOhdk5PV = accounts[1]
		const addressVdhhRju = accounts[2]
		const uinthD2DtDa = BigInt("1925")
		const uintfQDno64 = BigInt("75")
		const addresslPs1Lce = accounts[5]
//		const boolFRaevuY = await INS2b1lnQ.transfer.call(addressTruNPya, uintVBAeZyR, {from: accounts[3]});
//		const boolRgpwYJ = await INS2b1lnQ.transferFrom.call(addressVdhhRju, addressOhdk5PV, uintXXOwWmy, {from: accounts[5]});
//		const boolnzpAVMX = await INS2b1lnQ.burn.call(uinthD2DtDa, {from: accounts[0]});
//		const boolIon0Hyh = await INS2b1lnQ.burnFrom.call(addresslPs1Lce, uintfQDno64, {from: accounts[2]});

		await expect(INS2b1lnQ.transfer.call(addressTruNPya, uintVBAeZyR, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for INS', async () => {
		const uintiQja9Vh = BigInt("1504")
		const stringb2eCCTU = "Lmugnaj12kfX9cixUsVIjfpwiZogWM71M2XciLpYI8DsNd3vlLbJNYAFYusuUJ6nYYEWnJt5pactsBo1bDdlPe14tlAbG"
		const stringUPNa5sw = "QcHbw"
		const INShfypU7 = await INS.new(uintiQja9Vh, stringb2eCCTU, stringUPNa5sw, {from: accounts[1]});
		const uintAQ1qdKD = BigInt("1413")
		const uintmFoVXna = BigInt("1746")
		const addressBSkL8gi = accounts[4]
		const uintpA1MAfy = BigInt("1515")
		const boolUggdUA = await INShfypU7.burn.call(uintAQ1qdKD, {from: accounts[1]});
		const boolZM370W9 = await INShfypU7.approve.call(addressBSkL8gi, uintmFoVXna, {from: accounts[2]});
//		const boolmFGqshj = await INShfypU7.burn.call(uintpA1MAfy, {from: accounts[5]});

		assert.equal(boolUggdUA, true)
		assert.equal(boolZM370W9, true)
		await expect(INShfypU7.burn.call(uintpA1MAfy, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for INS', async () => {
		const uintzyv5PLY = BigInt("10")
		const stringkCFfseQ = "FQonxm7KwC9Vx3Gmv5DQnhxQNuZEa0FEpnu"
		const string0RAuoP = "mGvnGMlK5i5EAoMr48M0ypM0"
		const INS2b1lnQ = await INS.new(uintzyv5PLY, stringkCFfseQ, string0RAuoP, {from: accounts[4]});
		const uintHaSgbbH = BigInt("2041")
		const addressAnT3HRS = "0x0000000000000000000000000000000000000001"
		const uintEHW9puJ = BigInt("801")
		const addressQkhDKH9 = accounts[1]
		const addressy2z8Puo = accounts[2]
		const uintJH8q5kf = BigInt("1925")
		const uintO1ZratA = BigInt("22")
		const addressbFV7JqB = accounts[4]
		const uintgFkq3l6 = BigInt("423")
		const addressVPH64N5 = accounts[4]
		const addressOp5yFVc = accounts[0]
		const boolND5LCIk = await INS2b1lnQ.transfer.call(addressAnT3HRS, uintHaSgbbH, {from: accounts[4]});
//		const boolRgpwYJ = await INS2b1lnQ.transferFrom.call(addressy2z8Puo, addressQkhDKH9, uintEHW9puJ, {from: accounts[5]});
//		const boolnzpAVMX = await INS2b1lnQ.burn.call(uintJH8q5kf, {from: accounts[0]});
//		const boolIon0Hyh = await INS2b1lnQ.burnFrom.call(addressbFV7JqB, uintO1ZratA, {from: accounts[2]});
//		const booloSGgTWK = await INS2b1lnQ.transferFrom.call(addressOp5yFVc, addressVPH64N5, uintgFkq3l6, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolND5LCIk, true)
		await expect(INS2b1lnQ.transferFrom.call(addressy2z8Puo, addressQkhDKH9, uintEHW9puJ, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for INS', async () => {
		const uint4HevDl = BigInt("1504")
		const stringb2eCCTU = "Lmugnaj12kfX9cixUsVIjfpwiZogWM71M2XciLpYI8DsNd3vlLbJNYAFYusuUJ6nYYEWnJt5pactsBo1bDdlPe14tlAbG"
		const stringUPNa5sw = "QcHbw"
		const INShfypU7 = await INS.new(uint4HevDl, stringb2eCCTU, stringUPNa5sw, {from: accounts[1]});
		const uintClumFzj = BigInt("1420")
		const addressGNE7ji2 = accounts[3]
		const uintXrc2xoe = BigInt("504")
		const addressFhHMfSk = accounts[3]
		const uintpQ0481x = BigInt("1869")
		const addressMmU4P6R = accounts[0]
		const uintzSnq5yI = BigInt("1538")
//		const boollpQc2I1 = await INShfypU7.burnFrom.call(addressGNE7ji2, uintClumFzj, {from: accounts[0]});
//		const boolfvMmCOY = await INShfypU7.burnFrom.call(addressFhHMfSk, uintXrc2xoe, {from: accounts[4]});
//		const boolUxb5i0 = await INShfypU7.transfer.call(addressMmU4P6R, uintpQ0481x, {from: "0x0000000000000000000000000000000000000001"});
//		const boolmFGqshj = await INShfypU7.burn.call(uintzSnq5yI, {from: accounts[5]});

		await expect(INShfypU7.burnFrom.call(addressGNE7ji2, uintClumFzj, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for INS', async () => {
		const uintTw9JuVK = BigInt("1105")
		const stringUIBqXu = "0gmcVtdEjWOko39w4JWyFrOIfppWELc9wMQN9Ofoupmvs"
		const stringbRGJKkz = "rJBenbe2cl"
		const INSJCGI93z = await INS.new(uintTw9JuVK, stringUIBqXu, stringbRGJKkz, {from: "0x0000000000000000000000000000000000000001"});
		const uintdoThMFq = BigInt("1543")
		const addressqkcNbdB = accounts[3]
		const bytefTAkbv = "0x040209"
		const uintBUM7Rr = BigInt("309")
		const addressQUknPQq = accounts[4]
		const uintgmHF86 = BigInt("929")
		const addressOSjIiRu = accounts[4]
		const uintfyIAf46 = BigInt("1300")
		const boolbNs2ZFC = await INSJCGI93z.approve.call(addressqkcNbdB, uintdoThMFq, {from: accounts[4]});
		const boolsmjyk7Z = await INSJCGI93z.approveAndCall.call(addressQUknPQq, uintBUM7Rr, bytefTAkbv, {from: accounts[3]});
		const boolzXm44Z = await INSJCGI93z.approve.call(addressOSjIiRu, uintgmHF86, {from: accounts[3]});
		const boola7vXB2E = await INSJCGI93z.burn.call(uintfyIAf46, {from: accounts[2]});
	});

	it('test for INS', async () => {
		const uintI7vyK7s = BigInt("775")
		const stringvirQaui = "SaqqdxTxEciD1eulfgKd0TS2k5NHTs8UOBrWl8xMrJlBdlPl9GJi0QEg"
		const stringSP34R82 = "aRyqR6jYMwRH2jWPcX889Udu7aVeZOmidH9LDMQVN7l"
		const INSAgzIfsi = await INS.new(uintI7vyK7s, stringvirQaui, stringSP34R82, {from: accounts[2]});
		const uintNXjJjpH = BigInt("345")
		const addressNMShbc3 = accounts[2]
		const byteIG6mAAZ = "0x08010e1e1a0b041c"
		const uintiWEunJG = BigInt("438")
		const addressALtaJxW = accounts[3]
		const uintTwM7Ux = BigInt("186")
		const addressg60hvz6 = accounts[3]
		const addressW7XfOF2 = "0x0000000000000000000000000000000000000001"
		const uintRhXeuW3 = BigInt("620")
		const addressTWzMqnD = accounts[4]
		const byteKhCOz0E = "0x0511"
		const uintj6q7N0d = BigInt("1158")
		const addressf6kYPF3 = accounts[1]
//		const booluI31h5H = await INSAgzIfsi.burnFrom.call(addressNMShbc3, uintNXjJjpH, {from: accounts[0]});
//		const boolcQP0kQI = await INSAgzIfsi.approveAndCall.call(addressALtaJxW, uintiWEunJG, byteIG6mAAZ, {from: accounts[2]});
//		const boolaGFVi3S = await INSAgzIfsi.transferFrom.call(addressW7XfOF2, addressg60hvz6, uintTwM7Ux, {from: accounts[2]});
//		const boolLxKTkF7 = await INSAgzIfsi.approve.call(addressTWzMqnD, uintRhXeuW3, {from: accounts[5]});
//		const boolIDK2XxC = await INSAgzIfsi.approveAndCall.call(addressf6kYPF3, uintj6q7N0d, byteKhCOz0E, {from: accounts[4]});

		await expect(INSAgzIfsi.burnFrom.call(addressNMShbc3, uintNXjJjpH, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})