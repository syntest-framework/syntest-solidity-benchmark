const ANRXToken = artifacts.require("ANRXToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ANRXToken', (accounts) => {
	it('test for ANRXToken', async () => {
		const uintFEj7gt = BigInt("597")
		const stringJsdtbFd = "stAEVUM4cqlj7u8UOVj1Tbg2IXSD6TtyDRnm7zqmIl8i9k1tPoUrJkFlMWcw54"
		const stringzoBqngH = "jrXw1XRN82FQ2jI9cyRMTdNZF"
		const uintV19UZeE = BigInt("1224")
		const ANRXTokencOTZG7g = await ANRXToken.new(uintFEj7gt, stringJsdtbFd, stringzoBqngH, uintV19UZeE, {from: accounts[4]});
		const addressTCQcjQi = accounts[5]
		const uintZRan1Zt = BigInt("1417")
		const uintvBOavCE = BigInt("1493")
		const uintl1JTzmA = BigInt("1484")
		const uintJ9qzSeC = BigInt("1448")
		const addressNHbX8rZ = accounts[2]
		const addressMO7ASem = await ANRXTokencOTZG7g.deprecate.call(addressTCQcjQi, {from: accounts[4]});
		const uintxovmSXI = await ANRXTokencOTZG7g.issue.call(uintZRan1Zt, {from: "0x0000000000000000000000000000000000000001"});
		const uintvaAbaS4 = await ANRXTokencOTZG7g.redeem.call(uintvBOavCE, {from: accounts[0]});
		const uintKn8hVdI = await ANRXTokencOTZG7g.issue.call(uintl1JTzmA, {from: accounts[2]});
		const booltmoqam = await ANRXTokencOTZG7g.transfer.call(addressNHbX8rZ, uintJ9qzSeC, {from: accounts[0]});

		await expect(ANRXTokencOTZG7g.issue.call(uintZRan1Zt, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uintNVsmWTS = BigInt("444")
		const stringJaqwSED = "ZM"
		const stringK4QWn3X = "uPAIAHOFkQFp8MpzzF4D6UonKtswTMhMlkWthPCy4RELyKTy9yTxsqrwvbAHuzW1gKEtCVE9"
		const uintqidAEGG = BigInt("1799")
		const ANRXTokenJ3FXN3t = await ANRXToken.new(uintNVsmWTS, stringJaqwSED, stringK4QWn3X, uintqidAEGG, {from: accounts[0]});
		const uintosyfTcD = BigInt("902")
		const addresszMCLDo = accounts[0]
		const addressvP2epeH = accounts[2]
		const addressEpgbUF0 = accounts[3]
		const uintjIqgoz = BigInt("600")
		const uintDfpL4M0 = BigInt("2033")
		const addressxh15LOa = "0x0000000000000000000000000000000000000001"
		const addressmU344F = accounts[3]
		const uintI9t6ZJO = BigInt("1672")
		const boolzQQpNcG = await ANRXTokenJ3FXN3t.transferFrom.call(addressvP2epeH, addresszMCLDo, uintosyfTcD, {from: "0x0000000000000000000000000000000000000001"});
		const uintPaKJHjo = await ANRXTokenJ3FXN3t.balanceOf.call(addressEpgbUF0, {from: accounts[1]});
		const uinttRGQ6Vn = await ANRXTokenJ3FXN3t.redeem.call(uintjIqgoz, {from: accounts[0]});
		const boolL7ak9pf = await ANRXTokenJ3FXN3t.transferFrom.call(addressmU344F, addressxh15LOa, uintDfpL4M0, {from: accounts[2]});
		const uintnxKrl5 = await ANRXTokenJ3FXN3t.issue.call(uintI9t6ZJO, {from: accounts[2]});

		await expect(ANRXTokenJ3FXN3t.transferFrom.call(addressvP2epeH, addresszMCLDo, uintosyfTcD, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uintLrealM = BigInt("1469")
		const stringsD62MBs = "5DmLbeTSbP"
		const stringoeOiB7 = "dgdyWoxopN9fxHdRU4DbXg4PDdYKL"
		const uintaru6wL3 = BigInt("642")
		const ANRXTokenpfQq2Q8 = await ANRXToken.new(uintLrealM, stringsD62MBs, stringoeOiB7, uintaru6wL3, {from: accounts[3]});
		const addressbrBWG2M = accounts[2]
		const address7IePmX = accounts[1]
		const addressxDKd6Ev = accounts[1]
		const uintDjmeVCS = BigInt("1765")
		const addressCRDRKvv = accounts[3]
		const uintq85KyL = BigInt("447")
		const uintZZVOTj = await ANRXTokenpfQq2Q8.allowance.call(address7IePmX, addressbrBWG2M, {from: accounts[3]});
		const uintCnJ2qKa = await ANRXTokenpfQq2Q8.balanceOf.call(addressxDKd6Ev, {from: accounts[1]});
		const boold45Udb = await ANRXTokenpfQq2Q8.approve.call(addressCRDRKvv, uintDjmeVCS, {from: accounts[3]});
		const uintmJcUwJx = await ANRXTokenpfQq2Q8.redeem.call(uintq85KyL, {from: accounts[3]});

		assert.equal(boold45Udb, true)
		assert.equal(uintCnJ2qKa, BigInt("0"))
		assert.equal(uintZZVOTj, BigInt("0"))
	});

	it('test for ANRXToken', async () => {
		const uintlxibhSJ = BigInt("1682")
		const stringnFKrPzI = "GwdAcgBhYoGTmdzn57EcfconPUyDE133"
		const stringE4A2kdp = "BPQOSofHo22"
		const uintIS9ps3 = BigInt("76")
		const ANRXTokenW2k2gGs = await ANRXToken.new(uintlxibhSJ, stringnFKrPzI, stringE4A2kdp, uintIS9ps3, {from: accounts[4]});
		const addresscUCQG4T = accounts[0]
		const uintEtbCrbz = BigInt("1310")
		const uintEPqCzJU = BigInt("467")
		const uintig0Csbo = BigInt("141")
		const uintj9Lxcoc = await ANRXTokenW2k2gGs.balanceOf.call(addresscUCQG4T, {from: accounts[5]});
		const uintTLUyCX2 = await ANRXTokenW2k2gGs.setParams.call(uintEPqCzJU, uintEtbCrbz, {from: accounts[4]});
		const uintCMLQVh = await ANRXTokenW2k2gGs.redeem.call(uintig0Csbo, {from: accounts[0]});
		const uintzydAQT = await ANRXTokenW2k2gGs.totalSupply.call({from: accounts[4]});

		assert.equal(uintj9Lxcoc, BigInt("0"))
		await expect(ANRXTokenW2k2gGs.setParams.call(uintEPqCzJU, uintEtbCrbz, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uintiCkOFoP = BigInt("1335")
		const stringXStYk86 = "OFYtKQV1escVg9RolwmXBMisNa2ovvURYcUKcoSn3NKfJ8lVt2TTcDgsTmeV3yQg8F8GdVuzCyfIrzRdmLsciVMK02cIQ"
		const stringqF4xnU6 = "ZqbdzVplINOGYbmVlisqdrfpFnkYhWJCdApdSrTD0kYKTEV7Fzo"
		const uinto8LyMEQ = BigInt("1738")
		const ANRXTokenT6CnMqA = await ANRXToken.new(uintiCkOFoP, stringXStYk86, stringqF4xnU6, uinto8LyMEQ, {from: accounts[2]});
		const addressB4h5NnM = accounts[4]
		const addressm6HXq1z = accounts[1]
		const addresswcuQTdx = accounts[0]
		const addressJiejSj = accounts[1]
		const addresscaN2Yfg = accounts[4]
		const uintVUObNG = await ANRXTokenT6CnMqA.allowance.call(addressm6HXq1z, addressB4h5NnM, {from: accounts[2]});
		const addressuG0xkI = await ANRXTokenT6CnMqA.deprecate.call(addresswcuQTdx, {from: accounts[2]});
		const uintzemPZyA = await ANRXTokenT6CnMqA.totalSupply.call({from: accounts[3]});
		const uintVLi6AxX = await ANRXTokenT6CnMqA.allowance.call(addresscaN2Yfg, addressJiejSj, {from: accounts[1]});

		assert.equal(uintVLi6AxX, BigInt("0"))
		assert.equal(uintVUObNG, BigInt("0"))
		assert.equal(uintzemPZyA, BigInt("1335"))
	});

	it('test for ANRXToken', async () => {
		const uintCHcxJt = BigInt("1139")
		const stringFrP51Gm = "tFk6D2GVjGFhFBJPeVcuKzhQiCBS4jBebbJwYq"
		const stringywHnXC4 = "IAxc7RaoDZaVVpayv2byXuGYMiotq7xr8Di"
		const uintcoISCT3 = BigInt("2042")
		const ANRXTokenAxaE8xC = await ANRXToken.new(uintCHcxJt, stringFrP51Gm, stringywHnXC4, uintcoISCT3, {from: accounts[3]});
		const addressPncdrTw = accounts[3]
		const addressVdpT5sw = accounts[3]
		const addresshj6E3Kz = accounts[1]
		const addresskrtCytb = "0x0000000000000000000000000000000000000001"
		const uintQHk5d35 = BigInt("1691")
		const addressFN2kbFT = accounts[3]
		const uintlQ0u99z = await ANRXTokenAxaE8xC.allowance.call(addressVdpT5sw, addressPncdrTw, {from: accounts[5]});
		const uintAGjuCiV = await ANRXTokenAxaE8xC.allowance.call(addresskrtCytb, addresshj6E3Kz, {from: accounts[5]});
		const booljmEXALt = await ANRXTokenAxaE8xC.transfer.call(addressFN2kbFT, uintQHk5d35, {from: accounts[0]});

		assert.equal(uintAGjuCiV, BigInt("0"))
		assert.equal(uintlQ0u99z, BigInt("0"))
		await expect(ANRXTokenAxaE8xC.transfer.call(addressFN2kbFT, uintQHk5d35, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ANRXToken', async () => {
		const uintUJ5BwzZ = BigInt("1629")
		const stringfDDQN13 = "nXMdZIiG1QV67mHbiKq0narnRUqX"
		const stringPuaMYmX = "L7Qtiz1pCKGYO3Mg8Hoj92l9bLLeIQXKBgmQKBlqw7TEug15Pr7"
		const uintt8qrcp7 = BigInt("765")
		const ANRXTokennxRc4H = await ANRXToken.new(uintUJ5BwzZ, stringfDDQN13, stringPuaMYmX, uintt8qrcp7, {from: "0x0000000000000000000000000000000000000001"});
		const addressmA62ZXr = accounts[4]
		const uintc9jnSHv = BigInt("569")
		const addressO5IZGuY = accounts[3]
		const uintbOxsrV = await ANRXTokennxRc4H.balanceOf.call(addressmA62ZXr, {from: accounts[5]});
		const boolIQJmG4I = await ANRXTokennxRc4H.approve.call(addressO5IZGuY, uintc9jnSHv, {from: accounts[3]});
	});

	it('test for ANRXToken', async () => {
		const uintWp3z9Z3 = BigInt("1469")
		const stringsD62MBs = "5DmLbeTSbP"
		const stringoeOiB7 = "dgdyWoxopN9fxHdRU4DbXg4PDdYKL"
		const uintGtdI60Y = BigInt("642")
		const ANRXTokenpfQq2Q8 = await ANRXToken.new(uintWp3z9Z3, stringsD62MBs, stringoeOiB7, uintGtdI60Y, {from: accounts[3]});
		const addressjN81YVK = accounts[2]
		const addressUsTpie5 = accounts[4]
		const addressbQl76sI = accounts[0]
		const uintI5hpuMp = BigInt("1745")
		const addresskF0RPeq = accounts[3]
		const uintPQxEEjj = BigInt("1359")
		const uintCnJ2qKa = await ANRXTokenpfQq2Q8.balanceOf.call(addressjN81YVK, {from: accounts[1]});
		const uintlV3rSV = await ANRXTokenpfQq2Q8.allowance.call(addressbQl76sI, addressUsTpie5, {from: accounts[0]});
		const boold45Udb = await ANRXTokenpfQq2Q8.approve.call(addresskF0RPeq, uintI5hpuMp, {from: accounts[3]});
		const uintRHS3N7D = await ANRXTokenpfQq2Q8.issue.call(uintPQxEEjj, {from: accounts[3]});

		assert.equal(boold45Udb, true)
		assert.equal(uintCnJ2qKa, BigInt("0"))
		assert.equal(uintlV3rSV, BigInt("0"))
	});

	it('test for ANRXToken', async () => {
		const uintG2Y2WNT = BigInt("634")
		const stringCaIYc5 = "stRc3gbIdMlyBxSonNdpxgjvNfYeR0WA"
		const string8ivYMo = "nUxygTPeyKC6OAANmNlU9cHOqUkPhWzF9SSxyNLLWx1Bp8aSspbDY2tVNOQXfli1WdWDjI4mIit6LFCAlzi2Aq9n"
		const uintFjj3Wv2 = BigInt("405")
		const ANRXTokenGj26jmQ = await ANRXToken.new(uintG2Y2WNT, stringCaIYc5, string8ivYMo, uintFjj3Wv2, {from: accounts[3]});
		const uintGxw3wfr = BigInt("1963")
		const addresstaBKNnI = accounts[2]
		const addressrD95tgW = accounts[2]
		const uintAZnpSLw = BigInt("306")
		const addressWw8OktP = "0x00000000000000000000000000000000000000-1"
		const addressxfHHxJ = accounts[1]
		const boolk31A8vt = await ANRXTokenGj26jmQ.approve.call(addresstaBKNnI, uintGxw3wfr, {from: accounts[1]});
		const uintWPOSrU = await ANRXTokenGj26jmQ.totalSupply.call({from: accounts[2]});
		const uintXxVV3xs = await ANRXTokenGj26jmQ.balanceOf.call(addressrD95tgW, {from: accounts[2]});
		const boolBgvhJ8q = await ANRXTokenGj26jmQ.transferFrom.call(addressxfHHxJ, addressWw8OktP, uintAZnpSLw, {from: accounts[2]});

		assert.equal(boolk31A8vt, true)
		assert.equal(uintWPOSrU, BigInt("634"))
		assert.equal(uintXxVV3xs, BigInt("0"))
		await expect(ANRXTokenGj26jmQ.transferFrom.call(addressxfHHxJ, addressWw8OktP, uintAZnpSLw, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})