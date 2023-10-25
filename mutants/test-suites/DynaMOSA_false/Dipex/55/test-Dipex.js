const Dipex = artifacts.require("Dipex");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Dipex', (accounts) => {
	it('test for Dipex', async () => {
		const stringVScbvls = "sm5bWSOxOlMoICP4wJ5naBn2UsDh39GQ7ofRukDSj38Vgl7HEstDlKEUbVVd"
		const stringVnKOFfe = "i6aec8cF8TJ3wDRSO"
		const uintTTmkZAD = BigInt("310")
		const DipextgYW0Ea = await Dipex.new(stringVScbvls, stringVnKOFfe, uintTTmkZAD, {from: accounts[3]});
		const uintp2MBNYB = BigInt("1654")
		const addressKbbvx8 = accounts[0]
		const addressPZwGQbd = "0x0000000000000000000000000000000000000001"
		const uintphjwYnQ = BigInt("355")
		const addressCks69gg = accounts[2]
		const uintLUVkZet = BigInt("164")
		const addressfYSNszL = "0x0000000000000000000000000000000000000001"
		const uintXlfT6VW = BigInt("1710")
		const addresstTWRCOn = accounts[3]
//		const boolJR9f4fg = await DipextgYW0Ea.transferFrom.call(addressPZwGQbd, addressKbbvx8, uintp2MBNYB, {from: accounts[2]});
//		const boolN7qKcWP = await DipextgYW0Ea.approveAndCall.call(addressCks69gg, uintphjwYnQ, {from: "0x0000000000000000000000000000000000000001"});
//		const boolYWXI8xT = await DipextgYW0Ea.approveAndCall.call(addressfYSNszL, uintLUVkZet, {from: accounts[1]});
//		const booluabW1En = await DipextgYW0Ea.approve.call(addresstTWRCOn, uintXlfT6VW, {from: accounts[2]});

		await expect(DipextgYW0Ea.transferFrom.call(addressPZwGQbd, addressKbbvx8, uintp2MBNYB, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const stringcWFFDkS = "4PYofA75"
		const stringbpWXnFQ = "H3DCZfzaUs7sQvFPhFdW7cLwzvpfGic0PMQYvUDBHogE6WRWfq1UfT2Eoku0dZBuduwBiMR8IqKup8weXa8MMmICa1WVI87"
		const uintdcNUmQJ = BigInt("1763")
		const DipexIMvxjyr = await Dipex.new(stringcWFFDkS, stringbpWXnFQ, uintdcNUmQJ, {from: accounts[3]});
		const uintyz20rEg = BigInt("750")
		const addressn6fMMdf = accounts[4]
		const uintjSxNmPg = BigInt("1923")
		const addressmp8Qvpj = "0x0000000000000000000000000000000000000001"
		const uintReSAOf3 = BigInt("1376")
		const addressCPXg6K3 = accounts[2]
//		const boolZce9gR6 = await DipexIMvxjyr.approveAndCall.call(addressn6fMMdf, uintyz20rEg, {from: accounts[0]});
//		const boolwVyJBMV = await DipexIMvxjyr.approve.call(addressmp8Qvpj, uintjSxNmPg, {from: "0x0000000000000000000000000000000000000001"});
//		const boolpMjIeQ = await DipexIMvxjyr.approveAndCall.call(addressCPXg6K3, uintReSAOf3, {from: accounts[2]});

		await expect(DipexIMvxjyr.approveAndCall.call(addressn6fMMdf, uintyz20rEg, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const string2ikUns = "CsSOvPnw12EMAVQDypCizLbs3Co1HjLYJzx8AyMiEFG5zMTJv0UkepmkhTkBwHFHnLdTcsPc"
		const stringte24SVf = "jyx"
		const uintHTGTQ7e = BigInt("1038")
		const Dipexw7cy728 = await Dipex.new(string2ikUns, stringte24SVf, uintHTGTQ7e, {from: accounts[5]});
		const uintj5q06r0 = BigInt("1735")
		const addressHPtyzZL = accounts[3]
		const uintYSNAfwG = BigInt("233")
		const addressvjcCivd = accounts[3]
		const uint0872T8 = BigInt("1640")
		const addressnGrrBrx = accounts[5]
		const uintZLbHyZK = BigInt("881")
		const addressP8Vlkpz = accounts[5]
		const boolyFSlEh = await Dipexw7cy728.approve.call(addressHPtyzZL, uintj5q06r0, {from: "0x0000000000000000000000000000000000000001"});
//		const boollFttfG0 = await Dipexw7cy728.approveAndCall.call(addressvjcCivd, uintYSNAfwG, {from: accounts[3]});
//		const boolKGBzfsK = await Dipexw7cy728.approveAndCall.call(addressnGrrBrx, uint0872T8, {from: accounts[1]});
//		const boolG6fbEQ2 = await Dipexw7cy728.approveAndCall.call(addressP8Vlkpz, uintZLbHyZK, {from: accounts[1]});

		assert.equal(boolyFSlEh, true)
		await expect(Dipexw7cy728.approveAndCall.call(addressvjcCivd, uintYSNAfwG, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const stringvxMvcZV = "RqPN5JrxsRhONsJjYEPo67wS5ZsVyMukCQcgpvvATQ3NNvOcuLimvT38P0MI"
		const stringMlxK9Mc = "RltsYpxfTAXtFdQN8ShwweuF35QtgglTNH8q854EJtyldnCDMrnOpVAMiUwgN8xG"
		const uinta2LutDY = BigInt("2040")
		const DipexE4rU4su = await Dipex.new(stringvxMvcZV, stringMlxK9Mc, uinta2LutDY, {from: accounts[3]});
		const uintoZUAmM1 = BigInt("1049")
		const addressWoqkKNV = "0x0000000000000000000000000000000000000001"
		const uintgLESwJa = BigInt("699")
		const addressqxHloR6 = "0x0000000000000000000000000000000000000001"
		const uintJUEO8Pf = BigInt("1134")
		const addressk2MXBLU = accounts[0]
		const uintwlzpsAO = BigInt("1755")
		const address7uj6GQ = accounts[5]
		const boolLrAA3ft = await DipexE4rU4su.approve.call(addressWoqkKNV, uintoZUAmM1, {from: accounts[4]});
//		const boolHzAFUCN = await DipexE4rU4su.transfer.call(addressqxHloR6, uintgLESwJa, {from: accounts[0]});
//		const boolYvkL3Wz = await DipexE4rU4su.approve.call(addressk2MXBLU, uintJUEO8Pf, {from: accounts[1]});
//		const boolOXbjYLI = await DipexE4rU4su.approveAndCall.call(address7uj6GQ, uintwlzpsAO, {from: accounts[1]});

		assert.equal(boolLrAA3ft, true)
		await expect(DipexE4rU4su.transfer.call(addressqxHloR6, uintgLESwJa, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const stringbOCbSc0 = "p32vPDYFFSlkxEaTdlTgA7iKhyxEG8LbtJLmafGuFB3qkme7CwlhMEoGaaNvcm3esT0mk3SRrEghdpbaGUc"
		const stringZzhE863 = "qXXRkW0kQLuTNSMBTFSl"
		const uintVr2V4PU = BigInt("1060")
		const DipexbxmDY1T = await Dipex.new(stringbOCbSc0, stringZzhE863, uintVr2V4PU, {from: accounts[3]});
		const addressJVKVoc = accounts[0]
		const uintKWsm3dV = BigInt("1918")
		const addressjs5HI0A = accounts[4]
		const uintYTASe2d = BigInt("40")
		const addresssvUVMS5 = accounts[4]
		const addressEqV4VT = accounts[2]
		const addresscccZ5gX = accounts[0]
		const boolSxmmKGP = await DipexbxmDY1T.transferownership.call(addressJVKVoc, {from: accounts[3]});
		const boolBinq9yH = await DipexbxmDY1T.approve.call(addressjs5HI0A, uintKWsm3dV, {from: "0x0000000000000000000000000000000000000001"});
//		const boolX6a3sBp = await DipexbxmDY1T.transferFrom.call(addressEqV4VT, addresssvUVMS5, uintYTASe2d, {from: accounts[3]});
//		const boolpMTo8iA = await DipexbxmDY1T.transferownership.call(addresscccZ5gX, {from: accounts[4]});

		assert.equal(boolBinq9yH, true)
		assert.equal(boolSxmmKGP, true)
		await expect(DipexbxmDY1T.transferFrom.call(addressEqV4VT, addresssvUVMS5, uintYTASe2d, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const stringCLW1iw0 = "xmICQG4jhmAMcgqW8HsWccL6rFDPDhQar5pHUVVRmWkZ9YHAPkYd4fuW7HCCFOvVjjGxwWcpDvuPlIsa4fDwNPC2CD"
		const stringFnsE2vM = "4z2idNbk1M0FUEbdUrForvC4FWUNVeaQqdB17YgIX242gNUEt3uAV9X8IBKLWU9Junr4y5BX57F"
		const uintkIprgCz = BigInt("1368")
		const Dipexim1To0B = await Dipex.new(stringCLW1iw0, stringFnsE2vM, uintkIprgCz, {from: accounts[2]});
		const uintU1IGsBO = BigInt("1477")
		const addressHRQy51j = accounts[2]
		const uintdIF2fwr = BigInt("1627")
		const addressOdJz9xI = accounts[2]
		const uint330njP = BigInt("1777")
		const addressaGWnhr3 = accounts[2]
		const boolsBIJx2v = await Dipexim1To0B.approve.call(addressHRQy51j, uintU1IGsBO, {from: accounts[1]});
		const boolNNJvupd = await Dipexim1To0B.approveAndCall.call(addressOdJz9xI, uintdIF2fwr, {from: accounts[2]});
//		const boolsW0aDIa = await Dipexim1To0B.approveAndCall.call(addressaGWnhr3, uint330njP, {from: accounts[0]});

		assert.equal(boolNNJvupd, true)
		assert.equal(boolsBIJx2v, true)
		await expect(Dipexim1To0B.approveAndCall.call(addressaGWnhr3, uint330njP, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const stringbOCbSc0 = "p32vPDYFFSlkxEaTdlTgA7iKhyxEG8LbtJLmafGuFB3qkme7CwlhMEoGaaNvcm3esT0mk3SRrEghdpbaGUc"
		const stringZzhE863 = "qXXRkW0kQLuTNSMBTFSl"
		const uintTuz39Tk = BigInt("1060")
		const DipexbxmDY1T = await Dipex.new(stringbOCbSc0, stringZzhE863, uintTuz39Tk, {from: accounts[3]});
		const addressZaeMpwb = accounts[0]
		const uintMG3sJYl = BigInt("1884")
		const addresscKG47nd = accounts[1]
		const uintfbzDRSC = BigInt("300")
		const addresszlzvCgJ = accounts[2]
		const addressV4TEWte = accounts[2]
		const uintU2Y3nTI = BigInt("85")
		const addressF0rz00d = accounts[1]
		const uintKS5efJq = BigInt("1905")
		const addressQktov3f = accounts[4]
		const uintYxM6rM = BigInt("40")
		const addressOFkdFvh = accounts[4]
		const addressSKIo1Uv = accounts[2]
		const addressDsRcKVb = accounts[0]
		const boolSxmmKGP = await DipexbxmDY1T.transferownership.call(addressZaeMpwb, {from: accounts[3]});
		const boolCnHvVsL = await DipexbxmDY1T.transfer.call(addresscKG47nd, uintMG3sJYl, {from: accounts[3]});
//		const booliBJPFet = await DipexbxmDY1T.transferFrom.call(addressV4TEWte, addresszlzvCgJ, uintfbzDRSC, {from: accounts[3]});
//		const boolXhiYZDx = await DipexbxmDY1T.approve.call(addressF0rz00d, uintU2Y3nTI, {from: accounts[1]});
//		const boolBinq9yH = await DipexbxmDY1T.approve.call(addressQktov3f, uintKS5efJq, {from: "0x0000000000000000000000000000000000000001"});
//		const boolX6a3sBp = await DipexbxmDY1T.transferFrom.call(addressSKIo1Uv, addressOFkdFvh, uintYxM6rM, {from: accounts[3]});
//		const boolpMTo8iA = await DipexbxmDY1T.transferownership.call(addressDsRcKVb, {from: accounts[4]});

		assert.equal(boolCnHvVsL, true)
		assert.equal(boolSxmmKGP, true)
		await expect(DipexbxmDY1T.transferFrom.call(addressV4TEWte, addresszlzvCgJ, uintfbzDRSC, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const stringRPI4uz9 = "bxKWuHD3Hr7sWbXDj9tHb5"
		const string0cBdei = "bHbHU7HeERvyspW1Os87o4CC89vFk86az7SbM8k1E"
		const uintxtiUKve = BigInt("34")
		const DipexKshOjbI = await Dipex.new(stringRPI4uz9, string0cBdei, uintxtiUKve, {from: "0x0000000000000000000000000000000000000001"});
		const uintAzEQair = BigInt("1846")
		const addressVqtGqQv = accounts[1]
		const uintgFp9xoT = BigInt("972")
		const addressQFzOT4P = "0x0000000000000000000000000000000000000001"
		const addressy9L44rw = accounts[2]
		const uintkDA0iEV = BigInt("772")
		const addressRm7GnDW = "0x0000000000000000000000000000000000000001"
		const addresstyHQk6d = accounts[2]
		const uintxLpH6Db = BigInt("489")
		const addresst3xKRc3 = accounts[2]
		const addressSGu1wf3 = accounts[2]
		const uintjmtaHg = BigInt("1574")
		const addressdUKlvwT = accounts[5]
		const addressx1tPZA6 = accounts[5]
		const boolp2nCVk5 = await DipexKshOjbI.approveAndCall.call(addressVqtGqQv, uintAzEQair, {from: accounts[0]});
		const boolAQog48Y = await DipexKshOjbI.transferFrom.call(addressy9L44rw, addressQFzOT4P, uintgFp9xoT, {from: accounts[0]});
		const boolBnQwH5l = await DipexKshOjbI.transferFrom.call(addresstyHQk6d, addressRm7GnDW, uintkDA0iEV, {from: accounts[1]});
		const boolBXGwM3C = await DipexKshOjbI.transferFrom.call(addressSGu1wf3, addresst3xKRc3, uintxLpH6Db, {from: "0x0000000000000000000000000000000000000001"});
		const boolaPz49VN = await DipexKshOjbI.transferFrom.call(addressx1tPZA6, addressdUKlvwT, uintjmtaHg, {from: accounts[1]});
	});

	it('test for Dipex', async () => {
		const stringL13ZEdL = "PeuYk5irK46RFOjvs4MbIjv3CL5vtIP45I4Ad5AqaihpMQV9zRQMcOC5Bi93kljJxGikUVaml7RrcpKa8rmjHaugvYIdGOoK"
		const stringSjc8rLK = "QDuas6oOyytYmRcmffxzxVHW2iqiQc8cONqNW7CovCVtVcLMayexayD7alIdgi7B"
		const uintloU3BeP = BigInt("422")
		const DipexLqOWoE2 = await Dipex.new(stringL13ZEdL, stringSjc8rLK, uintloU3BeP, {from: accounts[5]});
		const uintvZkG7sX = BigInt("223")
		const addressjvqjPm = "0x00000000000000000000000000000000000000-1"
		const uintsfgVuS = BigInt("1297")
		const addressqsITHkk = accounts[3]
		const uintgiqpX4V = BigInt("900")
		const addressc1aZvrY = accounts[0]
		const uintEF16Cud = BigInt("27")
		const address3fqtox = accounts[2]
		const addresshtPo0H = accounts[1]
		const uintLZPO8m5 = BigInt("270")
		const addressFlXsc5N = accounts[2]
		const uintkKHDgOw = BigInt("1585")
		const addressMS8OSge = accounts[2]
		const uintyQiSYiz = BigInt("126")
		const addressu2TQNWi = "0x0000000000000000000000000000000000000001"
		const addressvHfuZCf = accounts[5]
		const uintEzUaQz5 = BigInt("746")
		const addressAg3EjmA = accounts[3]
		const uintpA1rjJ = BigInt("498")
		const addressh52xRlI = accounts[5]
//		const boolKjx5yLU = await DipexLqOWoE2.approve.call(addressjvqjPm, uintvZkG7sX, {from: accounts[1]});
//		const boold6rQjHD = await DipexLqOWoE2.approve.call(addressqsITHkk, uintsfgVuS, {from: accounts[2]});
//		const booloAH6AZg = await DipexLqOWoE2.approveAndCall.call(addressc1aZvrY, uintgiqpX4V, {from: accounts[5]});
//		const boolH8D2bWN = await DipexLqOWoE2.transferFrom.call(addresshtPo0H, address3fqtox, uintEF16Cud, {from: accounts[1]});
//		const boolOjD71Z4 = await DipexLqOWoE2.approve.call(addressFlXsc5N, uintLZPO8m5, {from: accounts[1]});
//		const boolw0WrFAm = await DipexLqOWoE2.approveAndCall.call(addressMS8OSge, uintkKHDgOw, {from: accounts[3]});
//		const boolXh9xQM3 = await DipexLqOWoE2.transferFrom.call(addressvHfuZCf, addressu2TQNWi, uintyQiSYiz, {from: accounts[1]});
//		const boolky5vu7N = await DipexLqOWoE2.approve.call(addressAg3EjmA, uintEzUaQz5, {from: accounts[3]});
//		const boolKZzrNOy = await DipexLqOWoE2.approveAndCall.call(addressh52xRlI, uintpA1rjJ, {from: accounts[4]});

		await expect(DipexLqOWoE2.approve.call(addressjvqjPm, uintvZkG7sX, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const stringbOCbSc0 = "p32vPDYFFSlkxEaTdlTgA7iKhyxEG8LbtJLmafGuFB3qkme7CwlhMEoGaaNvcm3esT0mk3SRrEghdpbaGUc"
		const stringZzhE863 = "qXXRkW0kQLuTNSMBTFSl"
		const uintlFiNXF = BigInt("1060")
		const DipexbxmDY1T = await Dipex.new(stringbOCbSc0, stringZzhE863, uintlFiNXF, {from: accounts[3]});
		const uintp2jdoGK = BigInt("0")
		const addresszWJK0P = accounts[7]
		const addressHmaloKe = accounts[2]
		const boolX6a3sBp = await DipexbxmDY1T.transferFrom.call(addressHmaloKe, addresszWJK0P, uintp2jdoGK, {from: accounts[3]});

		assert.equal(boolX6a3sBp, true)
	});

	it('test for Dipex', async () => {
		const stringCLW1iw0 = "xmICQG4jhmAMcgqW8HsWccL6rFDPDhQar5pHUVVRmWkZ9YHAPkYd4fuW7HCCFOvVjjGxwWcpDvuPlIsa4fDwNPC2CD"
		const stringFnsE2vM = "4z2idNbk1M0FUEbdUrForvC4FWUNVeaQqdB17YgIX242gNUEt3uAV9X8IBKLWU9Junr4y5BX57F"
		const uintdWCP3e1 = BigInt("1368")
		const Dipexim1To0B = await Dipex.new(stringCLW1iw0, stringFnsE2vM, uintdWCP3e1, {from: accounts[2]});
		const uinttT7ArHO = BigInt("0")
		const addressOG44Fbh = accounts[3]
		const uintUkqWWs1 = BigInt("149")
		const addressRuCKPbh = accounts[4]
		const addresszOmWSqi = accounts[1]
		const uintHEFrb61 = BigInt("1360")
		const addressugggX7w = accounts[4]
		const uintHkr7Dbr = BigInt("17")
		const addressWKQFOT4 = accounts[2]
		const uintJzyizgA = BigInt("667")
		const addressflUxJO = "0x0000000000000000000000000000000000000000"
		const addressQaREhgG = accounts[2]
		const uintBqCvLzm = BigInt("1393")
		const addressvXf5XIU = accounts[4]
		const addressbHrcUPE = accounts[4]
		const uintBOjfyv1 = BigInt("1760")
		const addressXhsARPS = "0x0000000000000000000000000000000000000001"
		const address90ypLE = accounts[3]
		const boolNNJvupd = await Dipexim1To0B.approveAndCall.call(addressOG44Fbh, uinttT7ArHO, {from: accounts[2]});
		const boolSDMyGE = await Dipexim1To0B.approve.call(addressRuCKPbh, uintUkqWWs1, {from: accounts[0]});
//		const boollPVJ2l2 = await Dipexim1To0B.transferownership.call(addresszOmWSqi, {from: "0x0000000000000000000000000000000000000001"});
//		const boolF2UvfE = await Dipexim1To0B.approveAndCall.call(addressugggX7w, uintHEFrb61, {from: accounts[5]});
//		const boolNZ4vSo9 = await Dipexim1To0B.approveAndCall.call(addressWKQFOT4, uintHkr7Dbr, {from: accounts[2]});
//		const boolwiYrgqi = await Dipexim1To0B.transferFrom.call(addressQaREhgG, addressflUxJO, uintJzyizgA, {from: accounts[5]});
//		const boolJcsh5bM = await Dipexim1To0B.transferFrom.call(addressbHrcUPE, addressvXf5XIU, uintBqCvLzm, {from: accounts[0]});
//		const boolD82lGWH = await Dipexim1To0B.transferFrom.call(address90ypLE, addressXhsARPS, uintBOjfyv1, {from: accounts[3]});

		assert.equal(boolNNJvupd, true)
		assert.equal(boolSDMyGE, true)
		await expect(Dipexim1To0B.transferownership.call(addresszOmWSqi, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});
})