const MARVELCOIN = artifacts.require("MARVELCOIN");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MARVELCOIN', (accounts) => {
	it('test for MARVELCOIN', async () => {
		const uintPzQoWP = BigInt("1960")
		const stringiNX8w3c = "DbN6xhdjreBfuoxz8QDUxZnlJBPiV4RqKRPt3hcUB9yAVDGOVXYC6M3U9CN1LTc7"
		const stringxtcNgOo = "sEB7dyNIqh9aarfTJLryJFr3Jwxhys4DTxvQootwOqI3nZ1H4qRQBTugCHwjUZJtven6snt"
		const MARVELCOINn5Koirm = await MARVELCOIN.new(uintPzQoWP, stringiNX8w3c, stringxtcNgOo, {from: accounts[4]});
		const uintLcCQgDK = BigInt("1210")
		const addressHcLrWGZ = accounts[3]
		const uintZW4qBjh = BigInt("343")
		const bytekLYGEDx = "0x05171d1f02021e01"
		const uintdu7Lhti = BigInt("867")
		const addressXKGtp4 = "0x0000000000000000000000000000000000000001"
		const uintZnxZBnD = BigInt("228")
		const addresszVd2kt0 = accounts[3]
		const addressYeLuoCY = accounts[1]
		const uinty4njS1D = BigInt("359")
		const boollxtMJUP = await MARVELCOINn5Koirm.approve.call(addressHcLrWGZ, uintLcCQgDK, {from: accounts[1]});
		const boolfzJijs4 = await MARVELCOINn5Koirm.burn.call(uintZW4qBjh, {from: accounts[5]});
		const boolZyiE71 = await MARVELCOINn5Koirm.approveAndCall.call(addressXKGtp4, uintdu7Lhti, bytekLYGEDx, {from: accounts[3]});
		const boolB5GparE = await MARVELCOINn5Koirm.transferFrom.call(addressYeLuoCY, addresszVd2kt0, uintZnxZBnD, {from: "0x0000000000000000000000000000000000000001"});
		const boolcEDGzV = await MARVELCOINn5Koirm.burn.call(uinty4njS1D, {from: accounts[1]});

		assert.equal(boollxtMJUP, true)
		await expect(MARVELCOINn5Koirm.burn.call(uintZW4qBjh, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for MARVELCOIN', async () => {
		const uintFhDpHau = BigInt("1241")
		const stringyhh7Vi = "hq8QMQzg3fXfb9K3"
		const stringxLZtCXF = "TEPMO0hsfJd0AIUS5AlUXeHMwXYgHX3ctbf"
		const MARVELCOINo8uwOiD = await MARVELCOIN.new(uintFhDpHau, stringyhh7Vi, stringxLZtCXF, {from: accounts[0]});
		const uintR5CIRyf = BigInt("1846")
		const addressg6a3I9e = accounts[3]
		const uinthGiY3VY = BigInt("1757")
		const addressTpWtDn = accounts[2]
		const uintlaWOxxA = BigInt("168")
		const addressO3yvh4v = "0x0000000000000000000000000000000000000001"
		const addressdASIkKT = accounts[0]
		const boolAKlBeuZ = await MARVELCOINo8uwOiD.burnFrom.call(addressg6a3I9e, uintR5CIRyf, {from: accounts[1]});
		const boolXwv3vMm = await MARVELCOINo8uwOiD.transfer.call(addressTpWtDn, uinthGiY3VY, {from: accounts[5]});
		const boolCuNv6CD = await MARVELCOINo8uwOiD.transferFrom.call(addressdASIkKT, addressO3yvh4v, uintlaWOxxA, {from: "0x0000000000000000000000000000000000000001"});

		await expect(MARVELCOINo8uwOiD.burnFrom.call(addressg6a3I9e, uintR5CIRyf, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for MARVELCOIN', async () => {
		const uintNAkFlW8 = BigInt("1154")
		const stringlhebDyA = "Ff1waPUu9d3Yw6dsuiNLupt2"
		const stringKoqeQUX = "9D7pcDO1lduIr6HnlWb7ATF7S59EaXCn0vMPG4Aj3nLD"
		const MARVELCOINkaDTkuf = await MARVELCOIN.new(uintNAkFlW8, stringlhebDyA, stringKoqeQUX, {from: accounts[1]});
		const byteTcbTuo6 = "0x0917071d"
		const uintndNFeOb = BigInt("932")
		const addressQI7znSv = accounts[3]
		const uints7BxgpY = BigInt("1005")
		const uintWNcDEit = BigInt("629")
		const addressGH46YO9 = "0x0000000000000000000000000000000000000001"
		const uintztjxzie = BigInt("60")
		const boolcWmGNUc = await MARVELCOINkaDTkuf.approveAndCall.call(addressQI7znSv, uintndNFeOb, byteTcbTuo6, {from: accounts[5]});
		const boolpL2Do29 = await MARVELCOINkaDTkuf.burn.call(uints7BxgpY, {from: accounts[0]});
		const boolBXipjlA = await MARVELCOINkaDTkuf.transfer.call(addressGH46YO9, uintWNcDEit, {from: accounts[1]});
		const boolVFxmYBR = await MARVELCOINkaDTkuf.burn.call(uintztjxzie, {from: accounts[1]});

		await expect(MARVELCOINkaDTkuf.approveAndCall.call(addressQI7znSv, uintndNFeOb, byteTcbTuo6, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for MARVELCOIN', async () => {
		const uintBvvUo2 = BigInt("844")
		const stringEATJsRn = "pQSwnCPV1VatefiGwDOH3miyoc8bhWsoF5DiJUQRr5zRpYLJkHSyGiO8cyqNre"
		const stringIM8FMWe = "rjtPbQMFglqnMMOlkVTHjBcTSoPs3yajE32UardiHW0Kf1HhnUspTAn9Rs2tWD4UW4"
		const MARVELCOINAI4emGy = await MARVELCOIN.new(uintBvvUo2, stringEATJsRn, stringIM8FMWe, {from: accounts[0]});
		const uintABYdGoh = BigInt("479")
		const addressLYtdbov = accounts[1]
		const bytewWJaMqD = "0x031413161b1b0d131117080e1a0a131d2015"
		const uintAtdDAL = BigInt("1862")
		const addressrTLPqgx = accounts[3]
		const byteCSDecmY = "0x000409070f150d10031e1718"
		const uintOxx0Tz = BigInt("1648")
		const addresspXhHXuG = accounts[5]
		const boolWSvyVM = await MARVELCOINAI4emGy.transfer.call(addressLYtdbov, uintABYdGoh, {from: accounts[4]});
		const boolD5TZWP = await MARVELCOINAI4emGy.approveAndCall.call(addressrTLPqgx, uintAtdDAL, bytewWJaMqD, {from: accounts[4]});
		const boolOc7vMZ = await MARVELCOINAI4emGy.approveAndCall.call(addresspXhHXuG, uintOxx0Tz, byteCSDecmY, {from: accounts[4]});

		await expect(MARVELCOINAI4emGy.transfer.call(addressLYtdbov, uintABYdGoh, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for MARVELCOIN', async () => {
		const uintoVpkcU2 = BigInt("999")
		const stringne1zRTT = ""
		const stringnoVgqGd = "2LeiQ8aRWxvTpOLi"
		const MARVELCOINum7Eybs = await MARVELCOIN.new(uintoVpkcU2, stringne1zRTT, stringnoVgqGd, {from: accounts[2]});
		const uintKFHlKYE = BigInt("1369")
		const addressOYxv8wN = accounts[4]
		const uintqgVJiq6 = BigInt("757")
		const addresswF5LOje = accounts[4]
		const addressChPbBRU = accounts[1]
		const boolWbsmfOe = await MARVELCOINum7Eybs.approve.call(addressOYxv8wN, uintKFHlKYE, {from: accounts[3]});
		const boolSARvyIZ = await MARVELCOINum7Eybs.transferFrom.call(addressChPbBRU, addresswF5LOje, uintqgVJiq6, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolWbsmfOe, true)
		await expect(MARVELCOINum7Eybs.transferFrom.call(addressChPbBRU, addresswF5LOje, uintqgVJiq6, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for MARVELCOIN', async () => {
		const uintFjFGr1E = BigInt("999")
		const stringne1zRTT = ""
		const stringnoVgqGd = "2LeiQ8aRWxvTpOLi"
		const MARVELCOINum7Eybs = await MARVELCOIN.new(uintFjFGr1E, stringne1zRTT, stringnoVgqGd, {from: accounts[2]});
		const uintVT2dury = BigInt("1518")
		const addresszReWBO3 = accounts[3]
		const uintQMhMXde = BigInt("1376")
		const uintSfu0w2D = BigInt("1369")
		const addresst58t0FN = accounts[4]
		const boolQBQNbAl = await MARVELCOINum7Eybs.approve.call(addresszReWBO3, uintVT2dury, {from: accounts[5]});
		const booliDgKiob = await MARVELCOINum7Eybs.burn.call(uintQMhMXde, {from: accounts[2]});
		const boolWbsmfOe = await MARVELCOINum7Eybs.approve.call(addresst58t0FN, uintSfu0w2D, {from: accounts[3]});

		assert.equal(boolQBQNbAl, true)
		assert.equal(boolWbsmfOe, true)
		assert.equal(booliDgKiob, true)
	});

	it('test for MARVELCOIN', async () => {
		const uintsUNdGbk = BigInt("746")
		const stringv4xFEwt = "7JR17Ade8oiFhJl42lntvWTvt"
		const stringgbHhpeK = "CTnhTScufxy3T2s1EdGyLlCBLGNmVSqJm8174A8uW4HL7OFiOY3JvC1fD"
		const MARVELCOINeKcMnKT = await MARVELCOIN.new(uintsUNdGbk, stringv4xFEwt, stringgbHhpeK, {from: accounts[4]});
		const uintcCoiET6 = BigInt("1030")
		const addressuFmPEs9 = accounts[2]
		const uintyfXyDQt = BigInt("146")
		const addressMo7yOfh = accounts[6]
		const byteD91Rt6E = "0x08120313070709151c18"
		const uintmVa9mCG = BigInt("779")
		const addressjuWBVy = accounts[4]
		const booliOf5L7c = await MARVELCOINeKcMnKT.transfer.call(addressuFmPEs9, uintcCoiET6, {from: accounts[4]});
		const boolTS60kgW = await MARVELCOINeKcMnKT.transfer.call(addressMo7yOfh, uintyfXyDQt, {from: "0x0000000000000000000000000000000000000001"});
		const boolG03CFOI = await MARVELCOINeKcMnKT.approveAndCall.call(addressjuWBVy, uintmVa9mCG, byteD91Rt6E, {from: accounts[4]});

		assert.equal(booliOf5L7c, true)
		await expect(MARVELCOINeKcMnKT.transfer.call(addressMo7yOfh, uintyfXyDQt, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for MARVELCOIN', async () => {
		const uintjqTY3j2 = BigInt("1517")
		const stringHEorFAC = "2CgxQ9D8E"
		const stringFIcw2jk = "hn49CgQMe7lcORYwrJ8qa95NKE1c4F3zHiTqgTPwSicPE6ye6kvNPHpMiMZb8rAOhezg4cqQIeow9Z0JXy4s"
		const MARVELCOINsE0kxtk = await MARVELCOIN.new(uintjqTY3j2, stringHEorFAC, stringFIcw2jk, {from: "0x0000000000000000000000000000000000000001"});
		const uintsaOaAxl = BigInt("1482")
		const uintA8nb2YD = BigInt("319")
		const addressSBhJlwO = accounts[2]
		const booluo1PY7l = await MARVELCOINsE0kxtk.burn.call(uintsaOaAxl, {from: accounts[2]});
		const boolm10B90d = await MARVELCOINsE0kxtk.transfer.call(addressSBhJlwO, uintA8nb2YD, {from: accounts[0]});
	});

	it('test for MARVELCOIN', async () => {
		const uintxJYfySd = BigInt("1241")
		const stringyhh7Vi = "hq8QMQzg3fXfb9K3"
		const stringxLZtCXF = "TEPMO0hsfJd0AIUS5AlUXeHMwXYgHX3ctbf"
		const MARVELCOINo8uwOiD = await MARVELCOIN.new(uintxJYfySd, stringyhh7Vi, stringxLZtCXF, {from: accounts[0]});
		const uintJarurQV = BigInt("1087")
		const addressvbJa1na = accounts[0]
		const uintnAZ0RpD = BigInt("1846")
		const addressKJ5L6iW = accounts[5]
		const boolNZFNpwy = await MARVELCOINo8uwOiD.burnFrom.call(addressvbJa1na, uintJarurQV, {from: accounts[2]});
		const boolAKlBeuZ = await MARVELCOINo8uwOiD.burnFrom.call(addressKJ5L6iW, uintnAZ0RpD, {from: accounts[1]});

		await expect(MARVELCOINo8uwOiD.burnFrom.call(addressvbJa1na, uintJarurQV, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})