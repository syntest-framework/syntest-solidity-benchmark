const GreenMarkTrust = artifacts.require("GreenMarkTrust");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('GreenMarkTrust', (accounts) => {
	it('test for GreenMarkTrust', async () => {
		const uintvikQQk4 = BigInt("2041")
		const stringfSJ2lMc = "cTrnCC2W7rzq731fM4Sg8rKthAslQboUfNs66D6fvGYAYy2wlFIUohCd2SjqmXr8TbRPHBh"
		const stringcXNy7X = "aQz4nBbyltE9T83U"
		const GreenMarkTrusttDLbVaB = await GreenMarkTrust.new(uintvikQQk4, stringfSJ2lMc, stringcXNy7X, {from: accounts[1]});
		const byteNm83D7h = "0x1020"
		const uinteZmNaOJ = BigInt("518")
		const addressLfTTkeD = accounts[0]
		const uinty6o6PJI = BigInt("44")
		const uintHpMloqL = BigInt("434")
		const addresssLxpAfW = accounts[2]
		const uintObK3oj3 = BigInt("603")
		const addressW5vrZbM = accounts[2]
		const uintSq9474U = BigInt("1016")
		const addressKEJYSuE = accounts[1]
		const addressdEzM2tu = "0x0000000000000000000000000000000000000001"
//		const boolDBogkad = await GreenMarkTrusttDLbVaB.approveAndCall.call(addressLfTTkeD, uinteZmNaOJ, byteNm83D7h, {from: accounts[3]});
//		const boolG5ozE5 = await GreenMarkTrusttDLbVaB.burn.call(uinty6o6PJI, {from: accounts[2]});
//		const boolNSnwNVQ = await GreenMarkTrusttDLbVaB.burnFrom.call(addresssLxpAfW, uintHpMloqL, {from: accounts[5]});
//		const bool1vpmnH = await GreenMarkTrusttDLbVaB.burnFrom.call(addressW5vrZbM, uintObK3oj3, {from: accounts[4]});
//		const boolNizICYa = await GreenMarkTrusttDLbVaB.transferFrom.call(addressdEzM2tu, addressKEJYSuE, uintSq9474U, {from: accounts[1]});

		await expect(GreenMarkTrusttDLbVaB.approveAndCall.call(addressLfTTkeD, uinteZmNaOJ, byteNm83D7h, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GreenMarkTrust', async () => {
		const uintNmlIR8T = BigInt("1269")
		const stringVsbJidI = "A12kJSwkTqUuVKiXyKGuft1fdHTv7NXJJWybfxx"
		const stringB5QzqK7 = "yKowecyUp3Y8N3tVMAs8vBGQ6Cnx3FHOfoBg32xhq4aoqrelaVwutbJ0Nu1AnhLH"
		const GreenMarkTrustFvsl8km = await GreenMarkTrust.new(uintNmlIR8T, stringVsbJidI, stringB5QzqK7, {from: accounts[5]});
		const uintpbRXlFG = BigInt("1095")
		const addressHJADOv = accounts[4]
		const addressjE7itWB = accounts[1]
		const uintGFiQ5ia = BigInt("173")
		const uintOn59d8f = BigInt("1215")
		const addressQ9yjYw = accounts[4]
		const uintxKQkPtu = BigInt("298")
//		const boolzKakg74 = await GreenMarkTrustFvsl8km.transferFrom.call(addressjE7itWB, addressHJADOv, uintpbRXlFG, {from: accounts[4]});
//		const boolpMKVCOb = await GreenMarkTrustFvsl8km.burn.call(uintGFiQ5ia, {from: accounts[4]});
//		const bool0EVEG5 = await GreenMarkTrustFvsl8km.approve.call(addressQ9yjYw, uintOn59d8f, {from: accounts[2]});
//		const boolPippIO = await GreenMarkTrustFvsl8km.burn.call(uintxKQkPtu, {from: "0x0000000000000000000000000000000000000001"});

		await expect(GreenMarkTrustFvsl8km.transferFrom.call(addressjE7itWB, addressHJADOv, uintpbRXlFG, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for GreenMarkTrust', async () => {
		const uintnei5iY0 = BigInt("903")
		const stringPC7RdgI = "RPeQocKhDDrh7G"
		const stringI5ME9l = "n6PRk6WVP2lkIOR9qU4clKgIKoIlb0LJhGeHcCJ5b6NPfPB6WbuViacussLvqyLqYDKXKPIZjdli"
		const GreenMarkTrustX4BHw0N = await GreenMarkTrust.new(uintnei5iY0, stringPC7RdgI, stringI5ME9l, {from: "0x0000000000000000000000000000000000000001"});
		const uintfwioyhe = BigInt("1811")
		const byteCbOMbg = "0x09"
		const uintL0Qx3TL = BigInt("1976")
		const addresswmkuXi = "0x0000000000000000000000000000000000000001"
		const uintG8W3Q98 = BigInt("912")
		const addressWnSt1aB = accounts[2]
		const uintwP65YtL = BigInt("1457")
		const boolLXYIe5 = await GreenMarkTrustX4BHw0N.burn.call(uintfwioyhe, {from: accounts[0]});
		const booldONwH97 = await GreenMarkTrustX4BHw0N.approveAndCall.call(addresswmkuXi, uintL0Qx3TL, byteCbOMbg, {from: accounts[4]});
		const boolyhkx5wa = await GreenMarkTrustX4BHw0N.burnFrom.call(addressWnSt1aB, uintG8W3Q98, {from: accounts[1]});
		const booli7lOmhQ = await GreenMarkTrustX4BHw0N.burn.call(uintwP65YtL, {from: accounts[0]});
	});

	it('test for GreenMarkTrust', async () => {
		const uintuHT41C = BigInt("1098")
		const stringWPE9Gat = "GJwM5JAVHX7RDjTGEAKd8r4UR5d3RC6J5ed2vPGeW75TIZDCRqIOR5e"
		const stringm5B4gb = "i7trE1PlrKOJAnGSM2aRmXgejgmVovwyr1m86P1F7Jf5I7QZjLy8ZCCPksPspSnT"
		const GreenMarkTrustULn5dg = await GreenMarkTrust.new(uintuHT41C, stringWPE9Gat, stringm5B4gb, {from: accounts[0]});
		const uintk9Hh5B5 = BigInt("413")
		const addresszX9ico = accounts[1]
		const byteZCmBHbl = "0x061317141d1a160e0217191b0812101a1c05011f190c02190b030e05140d"
		const uintZrrx7Mv = BigInt("698")
		const addressU4GPqhG = accounts[1]
//		const boolMzXnuWt = await GreenMarkTrustULn5dg.burnFrom.call(addresszX9ico, uintk9Hh5B5, {from: accounts[3]});
//		const booldIQa79f = await GreenMarkTrustULn5dg.approveAndCall.call(addressU4GPqhG, uintZrrx7Mv, byteZCmBHbl, {from: accounts[0]});

		await expect(GreenMarkTrustULn5dg.burnFrom.call(addresszX9ico, uintk9Hh5B5, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GreenMarkTrust', async () => {
		const uintVJeW57 = BigInt("1098")
		const stringWPE9Gat = "GJwM5JAVHX7RDjTGEAKd8r4UR5d3RC6J5ed2vPGeW75TIZDCRqIOR5e"
		const stringm5B4gb = "i7trE1PlrKOJAnGSM2aRmXgejgmVovwyr1m86P1F7Jf5I7QZjLy8ZCCPksPspSnT"
		const GreenMarkTrustULn5dg = await GreenMarkTrust.new(uintVJeW57, stringWPE9Gat, stringm5B4gb, {from: accounts[0]});
		const uinteEzXAcX = BigInt("342")
		const uintq6yDrs = BigInt("1293")
		const addresstYW36Uw = accounts[3]
		const addressy7KWA7q = accounts[3]
		const uintRwGktmE = BigInt("413")
		const addressbWHVmq6 = accounts[1]
		const bytege21OEK = "0x061317141d1a160e0217191b0812101a1c05011f190c02190b030e05140d"
		const uintyzavyh = BigInt("698")
		const addressbqN9Lnf = accounts[1]
//		const boolrUDKN0K = await GreenMarkTrustULn5dg.burn.call(uinteEzXAcX, {from: accounts[1]});
//		const boolAhMJVS = await GreenMarkTrustULn5dg.transferFrom.call(addressy7KWA7q, addresstYW36Uw, uintq6yDrs, {from: accounts[4]});
//		const boolMzXnuWt = await GreenMarkTrustULn5dg.burnFrom.call(addressbWHVmq6, uintRwGktmE, {from: accounts[3]});
//		const booldIQa79f = await GreenMarkTrustULn5dg.approveAndCall.call(addressbqN9Lnf, uintyzavyh, bytege21OEK, {from: accounts[0]});

		await expect(GreenMarkTrustULn5dg.burn.call(uinteEzXAcX, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GreenMarkTrust', async () => {
		const uintnFosQSo = BigInt("187")
		const stringC5itqO6 = "9HOKVURKR7hxwT2Dsu8GqdJgniukLDmxuxnzjs171MCAqO93Y8S1LR1sTHpVVuzoLqr1QWnsZvokGBIvk4YP96c34u"
		const stringtL3jlJb = "g98ZE6z6bmexhhbr6RzwC6avcBYXPIYwUGBxnOiF0ZY6qvA3m760F2cJmjWWPG8T3KJbp6z8ZbSwtFY"
		const GreenMarkTrustUdw06ei = await GreenMarkTrust.new(uintnFosQSo, stringC5itqO6, stringtL3jlJb, {from: accounts[4]});
		const uintTP2Vwgs = BigInt("1272")
		const addressUmTKet = accounts[4]
		const uintzjWrf8s = BigInt("988")
		const addressIBoXzXd = accounts[1]
		const uintf3n3zwb = BigInt("285")
		const addressA5nyLaG = "0x0000000000000000000000000000000000000001"
		const addressl39YR4Q = accounts[2]
		const uintPgau0Ga = BigInt("448")
		const addressyaNsg9S = accounts[1]
		const addressv0eLj9O = accounts[3]
		const boolLGbfM2q = await GreenMarkTrustUdw06ei.approve.call(addressUmTKet, uintTP2Vwgs, {from: accounts[3]});
//		const boolwfjq22H = await GreenMarkTrustUdw06ei.transfer.call(addressIBoXzXd, uintzjWrf8s, {from: "0x0000000000000000000000000000000000000001"});
//		const boolKQM4IAr = await GreenMarkTrustUdw06ei.transferFrom.call(addressl39YR4Q, addressA5nyLaG, uintf3n3zwb, {from: accounts[4]});
//		const boolsyKDkY = await GreenMarkTrustUdw06ei.transferFrom.call(addressv0eLj9O, addressyaNsg9S, uintPgau0Ga, {from: accounts[2]});

		assert.equal(boolLGbfM2q, true)
		await expect(GreenMarkTrustUdw06ei.transfer.call(addressIBoXzXd, uintzjWrf8s, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for GreenMarkTrust', async () => {
		const uintfU1nfKO = BigInt("1370")
		const stringThz65bM = "V7jxldUis7xjSuAzckkoqubCkCFxabdDDucxTAmVqL4KNTYoOoBB3t132Dms9XR0a4c0T3GBRHu8NIr51dVzhfO"
		const stringbzZgOsf = "Edz2VY6XohwR8lXYvK2R35dn4DS3JIWHod2aksxe129A77j0tQKjRsxTJQN"
		const GreenMarkTrust3y3M4N = await GreenMarkTrust.new(uintfU1nfKO, stringThz65bM, stringbzZgOsf, {from: accounts[0]});
		const uintSxZgc3u = BigInt("227")
		const addressLb39IQE = accounts[2]
		const uintH1YVbGz = BigInt("804")
		const addressZ9OHwGr = accounts[1]
		const uinth8wPQTl = BigInt("839")
		const uintjV2Metg = BigInt("764")
		const address951TRO = accounts[1]
		const boolKYjaw9s = await GreenMarkTrust3y3M4N.approve.call(addressLb39IQE, uintSxZgc3u, {from: accounts[1]});
		const boolt989amU = await GreenMarkTrust3y3M4N.transfer.call(addressZ9OHwGr, uintH1YVbGz, {from: accounts[0]});
//		const boolK30HsRN = await GreenMarkTrust3y3M4N.burn.call(uinth8wPQTl, {from: accounts[5]});
//		const boolDHAMOw = await GreenMarkTrust3y3M4N.burnFrom.call(address951TRO, uintjV2Metg, {from: accounts[1]});

		assert.equal(boolKYjaw9s, true)
		assert.equal(boolt989amU, true)
		await expect(GreenMarkTrust3y3M4N.burn.call(uinth8wPQTl, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for GreenMarkTrust', async () => {
		const uintDPCoKgG = BigInt("1098")
		const stringWPE9Gat = "GJwM5JAVHX7RDjTGEAKd8r4UR5d3RC6J5ed2vPGeW75TIZDCRqIOR5e"
		const stringm5B4gb = "i7trE1PlrKOJAnGSM2aRmXgejgmVovwyr1m86P1F7Jf5I7QZjLy8ZCCPksPspSnT"
		const GreenMarkTrustULn5dg = await GreenMarkTrust.new(uintDPCoKgG, stringWPE9Gat, stringm5B4gb, {from: accounts[0]});
		const uintVAMuulw = BigInt("721")
		const byteXGzKgwz = "0x061317141d1a160e0217191b0812101a1c05011f190c02190b030e05140d"
		const uintcqlgVv = BigInt("697")
		const addressaNDrxCZ = accounts[1]
		const boolu9wQ4Vk = await GreenMarkTrustULn5dg.burn.call(uintVAMuulw, {from: accounts[0]});
//		const booldIQa79f = await GreenMarkTrustULn5dg.approveAndCall.call(addressaNDrxCZ, uintcqlgVv, byteXGzKgwz, {from: accounts[0]});

		assert.equal(boolu9wQ4Vk, true)
		await expect(GreenMarkTrustULn5dg.approveAndCall.call(addressaNDrxCZ, uintcqlgVv, byteXGzKgwz, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GreenMarkTrust', async () => {
		const uintiUxDMh1 = BigInt("1098")
		const stringWPE9Gat = "GJwM5JAVHX7RDjTGEAKd8r4UR5d3RC6J5ed2vPGeW75TIZDCRqIOR5e"
		const stringm5B4gb = "i7trE1PlrKOJAnGSM2aRmXgejgmVovwyr1m86P1F7Jf5I7QZjLy8ZCCPksPspSnT"
		const GreenMarkTrustULn5dg = await GreenMarkTrust.new(uintiUxDMh1, stringWPE9Gat, stringm5B4gb, {from: accounts[0]});
		const uintNsFb77Y = BigInt("1676")
		const addressHDjFWOL = accounts[0]
		const uintQhVB9YJ = BigInt("413")
		const addressiUYAObo = accounts[3]
		const uintRMY6UYy = BigInt("1475")
//		const boolAwWTcx9 = await GreenMarkTrustULn5dg.burnFrom.call(addressHDjFWOL, uintNsFb77Y, {from: accounts[0]});
//		const boolMzXnuWt = await GreenMarkTrustULn5dg.burnFrom.call(addressiUYAObo, uintQhVB9YJ, {from: accounts[3]});
//		const boolbzmkUN8 = await GreenMarkTrustULn5dg.burn.call(uintRMY6UYy, {from: accounts[0]});

		await expect(GreenMarkTrustULn5dg.burnFrom.call(addressHDjFWOL, uintNsFb77Y, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})