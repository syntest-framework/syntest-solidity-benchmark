const Rexona = artifacts.require("Rexona");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Rexona', (accounts) => {
	it('test for Rexona', async () => {
		const stringFcqJBOI = "dS6Ca3MbQMabO6Wd8LBmrB3"
		const stringCZ1W1Ig = "SORwgJ6HyF1pXEhPIMY1DMgkJmOHPSs6AuMmHA2DYZSRpaxIGMlsxRKYwqMsBDfR8QHXlSCgy"
		const uintl6rDrOq = BigInt("879")
		const Rexonaizb0aey = await Rexona.new(stringFcqJBOI, stringCZ1W1Ig, uintl6rDrOq, {from: accounts[1]});
		const uintTdIwiEZ = BigInt("2015")
		const address0SbMfh = "0x0000000000000000000000000000000000000001"
		const addressLqMd6US = accounts[1]
		const uintcSkHlk4 = BigInt("1308")
		const addressGwOr8Eu = accounts[1]
		const uintMSnol5r = BigInt("963")
		const addressKtJtl1o = accounts[4]
		const uintgi8Baiy = BigInt("1049")
		const addressgmuN4To = "0x0000000000000000000000000000000000000001"
		const addressGPbjac = accounts[4]
		const uinttoEmTdB = BigInt("1397")
		const addressMYEFeW = accounts[0]
//		const boolwTjgzOw = await Rexonaizb0aey.transferFrom.call(addressLqMd6US, address0SbMfh, uintTdIwiEZ, {from: accounts[3]});
//		const boolfSPYE5M = await Rexonaizb0aey.transfer.call(addressGwOr8Eu, uintcSkHlk4, {from: accounts[1]});
//		const boolYJLYxdn = await Rexonaizb0aey.approve.call(addressKtJtl1o, uintMSnol5r, {from: accounts[1]});
//		const boolegt28K = await Rexonaizb0aey.approveAndCall.call(addressgmuN4To, uintgi8Baiy, {from: accounts[5]});
//		const booltMphdhI = await Rexonaizb0aey.transferownership.call(addressGPbjac, {from: accounts[3]});
//		const boolwcMDRlS = await Rexonaizb0aey.transfer.call(addressMYEFeW, uinttoEmTdB, {from: accounts[0]});

		await expect(Rexonaizb0aey.transferFrom.call(addressLqMd6US, address0SbMfh, uintTdIwiEZ, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Rexona', async () => {
		const stringSsw1NAM = "YaYjZwhCN2pfSDnasuynPd2hFacmDwRxl"
		const stringYZqVfTI = "4oOQgfNVAEmWOLqnRj"
		const uintu7mqFpz = BigInt("1636")
		const RexonaF5nQgbU = await Rexona.new(stringSsw1NAM, stringYZqVfTI, uintu7mqFpz, {from: accounts[4]});
		const address2k6V4F = accounts[1]
		const uintsfuzMX0 = BigInt("606")
		const addressjwYuUcJ = accounts[4]
		const uintLYbkYG = BigInt("308")
		const addresszJB0tN8 = accounts[1]
		const addressNyvFP0P = accounts[1]
//		const boollGecMgN = await RexonaF5nQgbU.transferownership.call(address2k6V4F, {from: accounts[2]});
//		const boolIVmgJtW = await RexonaF5nQgbU.approve.call(addressjwYuUcJ, uintsfuzMX0, {from: accounts[3]});
//		const boolXA2jKU3 = await RexonaF5nQgbU.transferFrom.call(addressNyvFP0P, addresszJB0tN8, uintLYbkYG, {from: accounts[2]});

		await expect(RexonaF5nQgbU.transferownership.call(address2k6V4F, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Rexona', async () => {
		const stringHSkehl7 = "95rm1F8pc9Pv3rq"
		const stringQUNnuIM = "Dd98BlCp54JOXH83CGtXgKXTOsIgqL2N8vNqZBdEN9AzNIleygV"
		const uintueODk9 = BigInt("1417")
		const RexonaI5KBBw7 = await Rexona.new(stringHSkehl7, stringQUNnuIM, uintueODk9, {from: "0x0000000000000000000000000000000000000001"});
		const uintnT9Chhx = BigInt("1945")
		const addressSh9gXSr = accounts[2]
		const uintdgmGXat = BigInt("473")
		const addressXI6q9Qq = accounts[3]
		const uintuAwy5Oo = BigInt("1441")
		const addressy41h9ZZ = accounts[1]
		const addressvQ2QGK = accounts[4]
		const uintmSeDJZN = BigInt("1843")
		const addressLBAVpV5 = accounts[0]
		const uintE7T3Rkl = BigInt("50")
		const addresspEyYp5W = accounts[0]
		const uintqf7EoWi = BigInt("231")
		const addresssduFHAM = accounts[3]
		const addresseBhdSPu = accounts[0]
		const boolqB3nt2 = await RexonaI5KBBw7.approve.call(addressSh9gXSr, uintnT9Chhx, {from: accounts[3]});
		const boolV3zxb3c = await RexonaI5KBBw7.approveAndCall.call(addressXI6q9Qq, uintdgmGXat, {from: accounts[3]});
		const boolYz6JKpo = await RexonaI5KBBw7.transferFrom.call(addressvQ2QGK, addressy41h9ZZ, uintuAwy5Oo, {from: "0x0000000000000000000000000000000000000001"});
		const boolRPnRTIa = await RexonaI5KBBw7.approve.call(addressLBAVpV5, uintmSeDJZN, {from: accounts[1]});
		const boolXj3rsIh = await RexonaI5KBBw7.approveAndCall.call(addresspEyYp5W, uintE7T3Rkl, {from: accounts[5]});
		const boolzQ9XWgO = await RexonaI5KBBw7.transferFrom.call(addresseBhdSPu, addresssduFHAM, uintqf7EoWi, {from: accounts[1]});
	});

	it('test for Rexona', async () => {
		const stringxyop52a = "LwalIHdAkixxq7"
		const string9fXdpB = "9B7MkeWFqlXd"
		const uintt2C00k = BigInt("24")
		const RexonaiRriUA = await Rexona.new(stringxyop52a, string9fXdpB, uintt2C00k, {from: accounts[3]});
		const uint2pG6ys = BigInt("1767")
		const addresshLwanl1 = accounts[2]
		const uintNfjZfK3 = BigInt("160")
		const addressmMpSgr1 = accounts[3]
		const uintQUNZHa = BigInt("372")
		const addressk7jtfzc = accounts[4]
		const addressjc7GUvY = accounts[3]
		const uintxdPpTRm = BigInt("651")
		const addressHndSd90 = accounts[2]
		const boolPbPelp = await RexonaiRriUA.approve.call(addresshLwanl1, uint2pG6ys, {from: accounts[2]});
//		const boolc70Mrzi = await RexonaiRriUA.approveAndCall.call(addressmMpSgr1, uintNfjZfK3, {from: "0x0000000000000000000000000000000000000001"});
//		const boolQXjE7Og = await RexonaiRriUA.approve.call(addressk7jtfzc, uintQUNZHa, {from: accounts[2]});
//		const boolmh4R2a = await RexonaiRriUA.transferownership.call(addressjc7GUvY, {from: accounts[3]});
//		const boolSlAKCb0 = await RexonaiRriUA.approveAndCall.call(addressHndSd90, uintxdPpTRm, {from: accounts[1]});

		assert.equal(boolPbPelp, true)
		await expect(RexonaiRriUA.approveAndCall.call(addressmMpSgr1, uintNfjZfK3, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Rexona', async () => {
		const stringWnsvXl6 = "H2e4VGVj3HcNe2IXbS2er3HOu4EmVKGmKYJO7n"
		const stringGraqvT9 = "oK6rejegmONs1zVk6mDH1iKREOwTSkoHPaL04l2Dln6zhsTu0JiYj"
		const uintanfpgH = BigInt("176")
		const RexonaVvU84ax = await Rexona.new(stringWnsvXl6, stringGraqvT9, uintanfpgH, {from: accounts[3]});
		const uintmehSk2E = BigInt("78")
		const addressdqjx3QD = accounts[5]
		const uintbhqcmsw = BigInt("896")
		const addressvhWDCPo = accounts[0]
		const addressKbwYIOs = accounts[3]
		const uintIgWqKzz = BigInt("1448")
		const addressInJVk0X = accounts[3]
		const uintkylCBnd = BigInt("1927")
		const addressJuwYuF = accounts[2]
		const uintEJbWMZF = BigInt("75")
		const addresse3jaug = accounts[0]
		const addressIAuUlSN = accounts[1]
//		const boolsUTRmAG = await RexonaVvU84ax.transfer.call(addressdqjx3QD, uintmehSk2E, {from: accounts[2]});
//		const boolW5HXj9 = await RexonaVvU84ax.transferFrom.call(addressKbwYIOs, addressvhWDCPo, uintbhqcmsw, {from: accounts[4]});
//		const boolbwQIaiU = await RexonaVvU84ax.approve.call(addressInJVk0X, uintIgWqKzz, {from: accounts[5]});
//		const boolzE23OAv = await RexonaVvU84ax.approve.call(addressJuwYuF, uintkylCBnd, {from: accounts[2]});
//		const boolrOLUWM = await RexonaVvU84ax.transferFrom.call(addressIAuUlSN, addresse3jaug, uintEJbWMZF, {from: accounts[4]});

		await expect(RexonaVvU84ax.transfer.call(addressdqjx3QD, uintmehSk2E, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Rexona', async () => {
		const stringV3N9pqf = "bs81bSvSaRywsKD"
		const stringFFiIvX1 = "O9vHujXc75GMI48pS3T3E5vKI"
		const uintm8am9mH = BigInt("49")
		const Rexonaq5bSWZ = await Rexona.new(stringV3N9pqf, stringFFiIvX1, uintm8am9mH, {from: accounts[1]});
		const uintpRRJ3t6 = BigInt("732")
		const addressG5R9KnH = accounts[3]
		const uintqH1SUoC = BigInt("1852")
		const addressRpKhkhT = accounts[4]
		const uintvFQEqXv = BigInt("1318")
		const addresspschBHF = accounts[2]
		const addressolpkwkA = accounts[4]
		const boolfYbsFCB = await Rexonaq5bSWZ.transfer.call(addressG5R9KnH, uintpRRJ3t6, {from: accounts[1]});
//		const boolzpmU9fp = await Rexonaq5bSWZ.transfer.call(addressRpKhkhT, uintqH1SUoC, {from: "0x0000000000000000000000000000000000000001"});
//		const boolyNt6ME = await Rexonaq5bSWZ.transferFrom.call(addressolpkwkA, addresspschBHF, uintvFQEqXv, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolfYbsFCB, true)
		await expect(Rexonaq5bSWZ.transfer.call(addressRpKhkhT, uintqH1SUoC, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Rexona', async () => {
		const stringWnsvXl6 = "H2e4VGVj3HcNe2IXbS2er3HOu4EmVKGmKYJO7n"
		const stringGraqvT9 = "oK6rejegmONs1zVk6mDH1iKREOwTSkoHPaL04l2Dln6zhsTu0JiYj"
		const uintK2p550U = BigInt("176")
		const RexonaVvU84ax = await Rexona.new(stringWnsvXl6, stringGraqvT9, uintK2p550U, {from: accounts[3]});
		const uintUbBABh = BigInt("1098")
		const addressIUMJPwh = accounts[4]
		const uintZ4XKKNO = BigInt("75")
		const addressbvFkDDW = accounts[5]
		const uintEzoqEDt = BigInt("122")
		const addressUWYzbn = accounts[1]
		const boolkdz1ki = await RexonaVvU84ax.approveAndCall.call(addressIUMJPwh, uintUbBABh, {from: accounts[3]});
//		const boolsUTRmAG = await RexonaVvU84ax.transfer.call(addressbvFkDDW, uintZ4XKKNO, {from: accounts[2]});
//		const boolTEFxvnF = await RexonaVvU84ax.approveAndCall.call(addressUWYzbn, uintEzoqEDt, {from: accounts[1]});

		assert.equal(boolkdz1ki, true)
		await expect(RexonaVvU84ax.transfer.call(addressbvFkDDW, uintZ4XKKNO, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Rexona', async () => {
		const stringWnsvXl6 = "H2e4VGVj3HcNe2IXbS2er3HOu4EmVKGmKYJO7n"
		const stringGraqvT9 = "oK6rejegmONs1zVk6mDH1iKREOwTSkoHPaL04l2Dln6zhsTu0JiYj"
		const uinteuNNTvX = BigInt("176")
		const RexonaVvU84ax = await Rexona.new(stringWnsvXl6, stringGraqvT9, uinteuNNTvX, {from: accounts[3]});
		const uintrLogUyC = BigInt("0")
		const addresszvVxE73 = accounts[5]
		const addressi9ObIgO = accounts[0]
		const uintA3a77sX = BigInt("462")
		const addressJmDE1T = accounts[4]
		const uintwviRCbh = BigInt("1154")
		const addressGhtGxNT = accounts[3]
		const boolNcLjl1x = await RexonaVvU84ax.transferFrom.call(addressi9ObIgO, addresszvVxE73, uintrLogUyC, {from: accounts[4]});
//		const boolnNPoeqG = await RexonaVvU84ax.approveAndCall.call(addressJmDE1T, uintA3a77sX, {from: accounts[4]});
//		const boolEkwrJr5 = await RexonaVvU84ax.transfer.call(addressGhtGxNT, uintwviRCbh, {from: accounts[2]});

		assert.equal(boolNcLjl1x, true)
		await expect(RexonaVvU84ax.approveAndCall.call(addressJmDE1T, uintA3a77sX, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Rexona', async () => {
		const stringybrAC9c = "5FTQ2OALLBhXThWzzbpMk"
		const stringooNkbhu = "l0OdcdLOnd8KfjGlOhdYuYj8TOap3xcz70VmCV72w706KpxhCpFlmt3Bj"
		const uintlGon5vv = BigInt("339")
		const RexonaRkSrZUP = await Rexona.new(stringybrAC9c, stringooNkbhu, uintlGon5vv, {from: accounts[2]});
		const uintPhJJPvW = BigInt("0")
		const addressPt4Lh7E = accounts[0]
		const uintwCy4udT = BigInt("784")
		const addressX6wRBFo = accounts[1]
		const addressRIdeSte = accounts[5]
		const boolEwRYBMM = await RexonaRkSrZUP.approveAndCall.call(addressPt4Lh7E, uintPhJJPvW, {from: accounts[2]});
//		const boolepWzsQf = await RexonaRkSrZUP.transferFrom.call(addressRIdeSte, addressX6wRBFo, uintwCy4udT, {from: accounts[5]});

		assert.equal(boolEwRYBMM, true)
		await expect(RexonaRkSrZUP.transferFrom.call(addressRIdeSte, addressX6wRBFo, uintwCy4udT, {from: accounts[5]})).to.be.rejectedWith(Error);
	});
})