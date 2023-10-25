const Token50X100 = artifacts.require("Token50X100");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Token50X100', (accounts) => {
	it('test for Token50X100', async () => {
		const Token50X100TT5r9KP = await Token50X100.new({from: accounts[0]});
		const uintPQcz2JH = BigInt("1621")
		const uintBYFYIQB = BigInt("448")
		const addressPYtbvT1 = accounts[1]
		const addressi2FI0V = accounts[4]
		const uintgP84Xe5 = BigInt("659")
		const uintabr4mA0 = BigInt("706")
		const boolNUgwWTz = true
		const addresskyHwCBi = accounts[2]
		const uintJL9psqC = BigInt("1080")
		const addressghskDjm = accounts[3]
		const uintoyCHnHS = BigInt("561")
		const uintMcNVGq = BigInt("366")
		const addresshqEcHo9 = accounts[4]
		const addresswVlfDkG = "0x0000000000000000000000000000000000000001"
//		const boolQcxyq73 = await Token50X100TT5r9KP._transfer.call(addressi2FI0V, addressPYtbvT1, uintBYFYIQB, uintPQcz2JH, {from: accounts[2]});
//		const boolTR0EFf8 = await Token50X100TT5r9KP.safeLock.call(uintabr4mA0, uintgP84Xe5, {from: accounts[0]});
//		await Token50X100TT5r9KP.setWhiteList.call(addresskyHwCBi, boolNUgwWTz, {from: accounts[1]});
//		const booldQonNQT = await Token50X100TT5r9KP.transfer.call(addressghskDjm, uintJL9psqC, {from: accounts[2]});
//		const boolbSjhga2 = await Token50X100TT5r9KP._transfer.call(addresswVlfDkG, addresshqEcHo9, uintMcNVGq, uintoyCHnHS, {from: accounts[4]});

		await expect(Token50X100TT5r9KP._transfer.call(addressi2FI0V, addressPYtbvT1, uintBYFYIQB, uintPQcz2JH, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100iBqsZHg = await Token50X100.new({from: accounts[3]});
		const uint256zAAkWG5 = await Token50X100iBqsZHg.totalSupply.call({from: accounts[5]});
//		await Token50X100iBqsZHg.onlyOwner.call({from: accounts[2]});

		assert.equal(uint256zAAkWG5, BigInt("4714285714285710"))
		await expect(Token50X100iBqsZHg.onlyOwner.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100lF42U47 = await Token50X100.new({from: accounts[4]});
		const uintA6pNSn = BigInt("137")
		const addressLmXdbF = accounts[4]
		const addressKxtu3Lw = accounts[1]
		const addressKr2hmqc = accounts[0]
		const uint9cK8T4 = BigInt("1636")
		const uintgHjJg94 = BigInt("201")
//		const boolYT3T7nk = await Token50X100lF42U47.transferFrom.call(addressKxtu3Lw, addressLmXdbF, uintA6pNSn, {from: accounts[1]});
//		const addressJTLcJhP = await Token50X100lF42U47.setOriginalContract.call(addressKr2hmqc, {from: accounts[1]});
//		const boolKVfpyVh = await Token50X100lF42U47.safeLock.call(uintgHjJg94, uint9cK8T4, {from: accounts[0]});
//		await Token50X100lF42U47.release.call({from: accounts[2]});

		await expect(Token50X100lF42U47.transferFrom.call(addressKxtu3Lw, addressLmXdbF, uintA6pNSn, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100UHgfFrL = await Token50X100.new({from: accounts[0]});
		const uintlMN0NjG = BigInt("1593")
		const uintRNNvfCA = BigInt("71")
		const addressMJRKhBa = accounts[2]
		const addressUNjHz8Z = accounts[4]
		const addressR6CmIEm = accounts[3]
		const addressDqPRLs = accounts[4]
//		const boolRYcmopx = await Token50X100UHgfFrL.safeLock.call(uintRNNvfCA, uintlMN0NjG, {from: accounts[0]});
//		const uint256Xg59S08 = await Token50X100UHgfFrL.allowance.call(addressUNjHz8Z, addressMJRKhBa, {from: accounts[5]});
//		const uint256Tyuxn03 = await Token50X100UHgfFrL.allowance.call(addressDqPRLs, addressR6CmIEm, {from: accounts[3]});

		await expect(Token50X100UHgfFrL.safeLock.call(uintRNNvfCA, uintlMN0NjG, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100zrfW4z = await Token50X100.new({from: accounts[4]});
		const uintQUCkjhn = BigInt("603")
		const uintrqdagxa = BigInt("740")
		const addressy1BSHfh = accounts[2]
		const addressFr7zj2s = accounts[1]
		const uintRb8Xful = BigInt("1487")
		const addressD1w88l8 = accounts[0]
		const addressrWEHvS = accounts[5]
		const addresswLAOYT = accounts[3]
		const addressEj3ioJN = accounts[0]
		const addressEWxeRQV = accounts[5]
		const addressakoEtpj = accounts[4]
		const uintkqXCeC3 = BigInt("1860")
		const uintUQmTTjN = BigInt("1786")
//		const boolePXNpoE = await Token50X100zrfW4z._transfer.call(addressFr7zj2s, addressy1BSHfh, uintrqdagxa, uintQUCkjhn, {from: accounts[4]});
//		const boolX1RJDJ = await Token50X100zrfW4z.transferFrom.call(addressrWEHvS, addressD1w88l8, uintRb8Xful, {from: accounts[3]});
//		await Token50X100zrfW4z.lock.call({from: accounts[0]});
//		const uint25651uZWl = await Token50X100zrfW4z.allowance.call(addressEj3ioJN, addresswLAOYT, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256MeT6tOT = await Token50X100zrfW4z.allowance.call(addressakoEtpj, addressEWxeRQV, {from: accounts[4]});
//		const boolj2V3Jyb = await Token50X100zrfW4z.safeLock.call(uintUQmTTjN, uintkqXCeC3, {from: "0x0000000000000000000000000000000000000001"});

		await expect(Token50X100zrfW4z._transfer.call(addressFr7zj2s, addressy1BSHfh, uintrqdagxa, uintQUCkjhn, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100UHgfFrL = await Token50X100.new({from: accounts[0]});
		const addressOnoGnRq = accounts[2]
		const addressWgtNWQk = accounts[4]
		const addresszVU4jl9 = accounts[3]
		const addresshJ5QulU = accounts[4]
		const uint256Xg59S08 = await Token50X100UHgfFrL.allowance.call(addressWgtNWQk, addressOnoGnRq, {from: accounts[5]});
		const uint256Tyuxn03 = await Token50X100UHgfFrL.allowance.call(addresshJ5QulU, addresszVU4jl9, {from: accounts[3]});

		assert.equal(uint256Tyuxn03, BigInt("0"))
		assert.equal(uint256Xg59S08, BigInt("0"))
	});

	it('test for Token50X100', async () => {
		const Token50X100oiPsi7 = await Token50X100.new({from: accounts[3]});
		const uintueK4kET = BigInt("1525")
		const addressEoc3bWF = accounts[1]
		const uintAB5sbfF = BigInt("50")
		const stringJvI2Igi = "9IdzpPg"
		const stringpjPkqHJ = "gX4B1KF418lyG4DVi1ry3MT1dUUBhkb"
		const boolO6vSQnI = await Token50X100oiPsi7.approve.call(addressEoc3bWF, uintueK4kET, {from: accounts[4]});
//		await Token50X100oiPsi7.setSymbolNameDecimals.call(stringpjPkqHJ, stringJvI2Igi, uintAB5sbfF, {from: accounts[0]});

		assert.equal(boolO6vSQnI, true)
		await expect(Token50X100oiPsi7.setSymbolNameDecimals.call(stringpjPkqHJ, stringJvI2Igi, uintAB5sbfF, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100UHgfFrL = await Token50X100.new({from: accounts[0]});
		const uintD7pV13M = BigInt("1156")
		const addressTV235tq = accounts[5]
		const address5omaUY = accounts[2]
		const addressDb3tke = accounts[5]
		const addressulCj32H = accounts[3]
		const addressmSoTSRq = accounts[4]
		const uintzzHW2jF = BigInt("595")
		const addresscxO1MqB = accounts[2]
//		const boolAWBgt2o = await Token50X100UHgfFrL.transfer.call(addressTV235tq, uintD7pV13M, {from: accounts[1]});
//		const uint256Xg59S08 = await Token50X100UHgfFrL.allowance.call(addressDb3tke, address5omaUY, {from: accounts[5]});
//		const uint256Tyuxn03 = await Token50X100UHgfFrL.allowance.call(addressmSoTSRq, addressulCj32H, {from: accounts[3]});
//		const boolvPJ6bc4 = await Token50X100UHgfFrL.increaseApproval.call(addresscxO1MqB, uintzzHW2jF, {from: accounts[2]});

		await expect(Token50X100UHgfFrL.transfer.call(addressTV235tq, uintD7pV13M, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100UHgfFrL = await Token50X100.new({from: accounts[0]});
		const uintxwNq23b = BigInt("366")
		const addressrOSytev = accounts[2]
		const addressKqsAQ0i = accounts[2]
		const addresskAUEkw = accounts[4]
		const addressFGUDln2 = accounts[4]
		const addresswce14C = accounts[4]
		const boolT2XgIj = await Token50X100UHgfFrL.increaseApproval.call(addressrOSytev, uintxwNq23b, {from: accounts[1]});
		const uint256Xg59S08 = await Token50X100UHgfFrL.allowance.call(addresskAUEkw, addressKqsAQ0i, {from: accounts[5]});
		const uint256Tyuxn03 = await Token50X100UHgfFrL.allowance.call(addresswce14C, addressFGUDln2, {from: accounts[3]});

		assert.equal(boolT2XgIj, true)
		assert.equal(uint256Tyuxn03, BigInt("0"))
		assert.equal(uint256Xg59S08, BigInt("0"))
	});

	it('test for Token50X100', async () => {
		const Token50X100UHgfFrL = await Token50X100.new({from: accounts[0]});
		const uintH0erfiR = BigInt("1613")
		const uintr2aypX0 = BigInt("1593")
		const uintL5livtG = BigInt("71")
		const addresstEQAMv1 = accounts[2]
		const addressqd402h = accounts[4]
		const addressinwWHMp = accounts[3]
		const addresssySCloi = accounts[4]
		const booly8YDV5y = await Token50X100UHgfFrL.setMaxLockPeriod.call(uintH0erfiR, {from: accounts[1]});
//		const boolRYcmopx = await Token50X100UHgfFrL.safeLock.call(uintL5livtG, uintr2aypX0, {from: accounts[0]});
//		const uint256Xg59S08 = await Token50X100UHgfFrL.allowance.call(addressqd402h, addresstEQAMv1, {from: accounts[5]});
//		const uint256Tyuxn03 = await Token50X100UHgfFrL.allowance.call(addresssySCloi, addressinwWHMp, {from: accounts[3]});

		assert.equal(booly8YDV5y, false)
		await expect(Token50X100UHgfFrL.safeLock.call(uintL5livtG, uintr2aypX0, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100UHgfFrL = await Token50X100.new({from: accounts[0]});
		const addressF2CS0CD = accounts[0]
		const uintPHzKwK8 = BigInt("1593")
		const uintkwQesSD = BigInt("71")
		const uint7LJ2pa = BigInt("8")
		const stringU8e5OFu = "DHE3iurxgT4fungYkDY9ztx73zttpN5eXN"
		const stringKxuRpvQ = "nNp9oPK8yIeEqaQ7x6sHL2NGly5oSt1o2uMMbGbxOUJAqJVwY8etL778ygCgiKCQ3FnA3s7U1Lh7fRIRB3rJXC"
		const addressEVvWaIx = accounts[2]
		const addressvmS5S4q = accounts[1]
		const addressxs640ZV = accounts[3]
		const addressJHrVgg8 = accounts[4]
		const uint2566hYnLO = await Token50X100UHgfFrL.balanceOf.call(addressF2CS0CD, {from: accounts[3]});
//		const boolRYcmopx = await Token50X100UHgfFrL.safeLock.call(uintkwQesSD, uintPHzKwK8, {from: accounts[0]});
//		await Token50X100UHgfFrL.setSymbolNameDecimals.call(stringKxuRpvQ, stringU8e5OFu, uint7LJ2pa, {from: accounts[3]});
//		const uint256Xg59S08 = await Token50X100UHgfFrL.allowance.call(addressvmS5S4q, addressEVvWaIx, {from: accounts[5]});
//		const uint256Tyuxn03 = await Token50X100UHgfFrL.allowance.call(addressJHrVgg8, addressxs640ZV, {from: accounts[3]});

		assert.equal(uint2566hYnLO, BigInt("0"))
		await expect(Token50X100UHgfFrL.safeLock.call(uintkwQesSD, uintPHzKwK8, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100UHgfFrL = await Token50X100.new({from: accounts[0]});
		const uintvW92Iho = BigInt("1307")
		const addressndzhAb = "0x0000000000000000000000000000000000000000"
		const addressZNtdi8 = accounts[5]
		const uintipe8clE = BigInt("13")
		const stringti9Wejv = "6Mikf6YWAXH1rA5kIfJ9uE6q28X6R6d35WDOudGiYAt6jMa6gjgtzALOPg4wxVVT3cX9yMF57fpGsPWdbDDRsVnTxmZmm6HR"
		const stringXswG6E7 = "4OW4qGYisZnPiT"
		const addressBPqug6b = accounts[2]
		const addressZzU9uD = accounts[4]
//		const boolYD5YV2Z = await Token50X100UHgfFrL.transfer.call(addressndzhAb, uintvW92Iho, {from: accounts[2]});
//		const addressQIQENtD = await Token50X100UHgfFrL.setOriginalContract.call(addressZNtdi8, {from: accounts[0]});
//		const boolI8pUGj = await Token50X100UHgfFrL.setSymbolNameDecimals.call(stringXswG6E7, stringti9Wejv, uintipe8clE, {from: accounts[3]});
//		const uint256Xg59S08 = await Token50X100UHgfFrL.allowance.call(addressZzU9uD, addressBPqug6b, {from: accounts[5]});

		await expect(Token50X100UHgfFrL.transfer.call(addressndzhAb, uintvW92Iho, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100iBqsZHg = await Token50X100.new({from: accounts[3]});
		const addressFyiYI1R = accounts[3]
		const addressTr1sCXx = accounts[0]
		const uintDVor2Wf = BigInt("48")
		const addressul2EOL = accounts[0]
		const uintpmGNgkw = BigInt("2032")
		const addressJGZ3S8i = accounts[4]
		const uint256o4opJIs = await Token50X100iBqsZHg.allowance.call(addressTr1sCXx, addressFyiYI1R, {from: accounts[1]});
		const boolIIL6bEE = await Token50X100iBqsZHg.decreaseApproval.call(addressul2EOL, uintDVor2Wf, {from: accounts[2]});
		const uint256lOubBlS = await Token50X100iBqsZHg.totalSupply.call({from: accounts[2]});
		const booleFsFwrO = await Token50X100iBqsZHg.approve.call(addressJGZ3S8i, uintpmGNgkw, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolIIL6bEE, true)
		assert.equal(booleFsFwrO, true)
		assert.equal(uint256lOubBlS, BigInt("4714285714285710"))
		assert.equal(uint256o4opJIs, BigInt("0"))
	});

	it('test for Token50X100', async () => {
		const Token50X100ybf0EZG = await Token50X100.new({from: accounts[3]});
		const addressEjfYuQx = accounts[4]
		const uintRNPTsg = BigInt("85")
		const stringFN970w = "ujHStW6YwFDNhlg6rxN1y0K3Eee2icAXHTOvf7cIRxYoGaSKwjYeqVEcVamjjsQYcoO22sH8bFCzm8SAwI2thK6gQx72CRU"
		const stringWlvV7js = "NM1JQjVLT4egWhQfu6DNWnl7559U"
		const addressJTdKz7V = accounts[1]
		const addressXYXEuVj = "0x0000000000000000000000000000000000000001"
//		await Token50X100ybf0EZG.lock.call({from: accounts[3]});
//		const uint256P5MoWhP = await Token50X100ybf0EZG.balanceOf.call(addressEjfYuQx, {from: accounts[1]});
//		const boolXn3N50d = await Token50X100ybf0EZG.setSymbolNameDecimals.call(stringWlvV7js, stringFN970w, uintRNPTsg, {from: accounts[0]});
//		await Token50X100ybf0EZG.setLinkingAddresses.call(addressXYXEuVj, addressJTdKz7V, {from: accounts[1]});
//		await Token50X100ybf0EZG.lock.call({from: accounts[2]});

		await expect(Token50X100ybf0EZG.lock.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100SPvKNLa = await Token50X100.new({from: "0x0000000000000000000000000000000000000001"});
		const uinttPHGdqD = BigInt("1287")
		const uintHju9MPa = BigInt("1671")
		const addressOn3PUgN = accounts[5]
		const addressvQeklCj = accounts[4]
		const addressjtPTbr = accounts[3]
		const uintHhWbTKm = BigInt("1373")
		const uinttWIku7F = BigInt("481")
		const addressSYg0pp6 = accounts[2]
		const addressGDOf4Mi = accounts[0]
		const uintZt8Rwrf = BigInt("369")
		const addressRsNWAN1 = accounts[5]
		const addressEHKL3Xk = "0x0000000000000000000000000000000000000001"
		const boolWem0Z7b = await Token50X100SPvKNLa.setVesting.call(addressOn3PUgN, uintHju9MPa, uinttPHGdqD, {from: accounts[3]});
		const uint256rMxbaTt = await Token50X100SPvKNLa.allowance.call(addressjtPTbr, addressvQeklCj, {from: accounts[0]});
		const boolAPyRsCG = await Token50X100SPvKNLa._transfer.call(addressGDOf4Mi, addressSYg0pp6, uinttWIku7F, uintHhWbTKm, {from: accounts[3]});
		const booldt145CN = await Token50X100SPvKNLa.transferFrom.call(addressEHKL3Xk, addressRsNWAN1, uintZt8Rwrf, {from: accounts[4]});
	});

	it('test for Token50X100', async () => {
		const Token50X100ioU0cW = await Token50X100.new({from: accounts[1]});
		const addressvuVodQe = accounts[3]
		const uintdFoN37V = BigInt("1792")
		const addressZf6VgZr = accounts[4]
		const addressML8ihBU = accounts[3]
		const uintsU4mCpF = BigInt("1273")
		const addressN6Isjyw = accounts[3]
		const address6vYUGu = await Token50X100ioU0cW.transferOwnership.call(addressvuVodQe, {from: accounts[1]});
//		const boole2Wo1l7 = await Token50X100ioU0cW.transferFrom.call(addressML8ihBU, addressZf6VgZr, uintdFoN37V, {from: accounts[4]});
//		const booldTU6yEB = await Token50X100ioU0cW.transfer.call(addressN6Isjyw, uintsU4mCpF, {from: accounts[1]});

		await expect(Token50X100ioU0cW.transferFrom.call(addressML8ihBU, addressZf6VgZr, uintdFoN37V, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100oMAUK1C = await Token50X100.new({from: accounts[1]});
		const uintTOjFnZ6 = BigInt("525")
		const uintTqA5zdm = BigInt("306")
		const uintQBW731h = BigInt("101")
		const addressEjMmVWB = accounts[1]
		const addressEAUNOI = accounts[2]
		const uintmnveDNv = BigInt("1843")
		const addressVwldk1v = accounts[3]
//		await Token50X100oMAUK1C.release.call({from: accounts[1]});
//		const boolWQBzIq0 = await Token50X100oMAUK1C.setMaxLockPeriod.call(uintTOjFnZ6, {from: accounts[1]});
//		const boolyPNCSQS = await Token50X100oMAUK1C.setVesting.call(addressEjMmVWB, uintQBW731h, uintTqA5zdm, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256vRdIADs = await Token50X100oMAUK1C.balanceOf.call(addressEAUNOI, {from: accounts[5]});
//		const boolQg54lwW = await Token50X100oMAUK1C.decreaseApproval.call(addressVwldk1v, uintmnveDNv, {from: accounts[1]});

		await expect(Token50X100oMAUK1C.release.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100iBqsZHg = await Token50X100.new({from: accounts[3]});
		const addressRkfkWVf = accounts[4]
		const uintYgOKzpH = BigInt("347")
		const addresscxiiaI9 = accounts[0]
		const addressWAUZYYs = accounts[3]
//		await Token50X100iBqsZHg.setTokenContract.call(addressRkfkWVf, {from: accounts[3]});
//		const boolZmHuJsp = await Token50X100iBqsZHg.transferFrom.call(addressWAUZYYs, addresscxiiaI9, uintYgOKzpH, {from: accounts[4]});
//		const uint256zAAkWG5 = await Token50X100iBqsZHg.totalSupply.call({from: accounts[5]});

		await expect(Token50X100iBqsZHg.setTokenContract.call(addressRkfkWVf, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100iBqsZHg = await Token50X100.new({from: accounts[3]});
		const uinttY9aLXU = BigInt("169")
		const uintS2IkMcY = BigInt("1182")
		const addressmkL6nLF = accounts[4]
		const uint4ia9xM = BigInt("48")
		const addressRyyTLC8 = accounts[1]
//		await Token50X100iBqsZHg.lock.call({from: accounts[3]});
//		const boolc6SDG7 = await Token50X100iBqsZHg.setVesting.call(addressmkL6nLF, uintS2IkMcY, uinttY9aLXU, {from: accounts[3]});
//		const boolIIL6bEE = await Token50X100iBqsZHg.decreaseApproval.call(addressRyyTLC8, uint4ia9xM, {from: accounts[2]});

		await expect(Token50X100iBqsZHg.lock.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100UHgfFrL = await Token50X100.new({from: accounts[0]});
		const boolNRwFaxl = true
		const addressWouk0QY = accounts[4]
		const uintXyXvljB = BigInt("389")
		const addressH1DVQaS = accounts[2]
		const uintR8lI0ah = BigInt("1958")
		const addresssHTQCgR = accounts[3]
		const uintO54kSQ = BigInt("1593")
		const uintmraepQW = BigInt("201")
//		await Token50X100UHgfFrL.setWhiteList.call(addressWouk0QY, boolNRwFaxl, {from: accounts[0]});
//		const booloWkgZGI = await Token50X100UHgfFrL.decreaseApproval.call(addressH1DVQaS, uintXyXvljB, {from: accounts[3]});
//		const boolbEl23x = await Token50X100UHgfFrL.transfer.call(addresssHTQCgR, uintR8lI0ah, {from: accounts[0]});
//		const boolRYcmopx = await Token50X100UHgfFrL.safeLock.call(uintmraepQW, uintO54kSQ, {from: accounts[0]});

		await expect(Token50X100UHgfFrL.setWhiteList.call(addressWouk0QY, boolNRwFaxl, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100vX0emdC = await Token50X100.new({from: accounts[4]});
		const addressEIYgQR2 = accounts[0]
		const addressxEHycng = accounts[1]
		const addressJt4uvv0 = accounts[5]
		const addressWLvPGpO = accounts[0]
//		await Token50X100vX0emdC.setLinkingAddresses.call(addressxEHycng, addressEIYgQR2, {from: accounts[4]});
//		await Token50X100vX0emdC.onlyOwner.call({from: accounts[2]});
//		await Token50X100vX0emdC.setLinkingAddresses.call(addressWLvPGpO, addressJt4uvv0, {from: accounts[2]});

		await expect(Token50X100vX0emdC.setLinkingAddresses.call(addressxEHycng, addressEIYgQR2, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100iBqsZHg = await Token50X100.new({from: accounts[3]});
		const uintV1ljWuq = BigInt("0")
		const addresszNuFlpc = accounts[1]
		const boolIIL6bEE = await Token50X100iBqsZHg.decreaseApproval.call(addresszNuFlpc, uintV1ljWuq, {from: accounts[2]});
//		await Token50X100iBqsZHg.onlyOwner.call({from: accounts[5]});

		assert.equal(boolIIL6bEE, true)
		await expect(Token50X100iBqsZHg.onlyOwner.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100UHgfFrL = await Token50X100.new({from: accounts[0]});
		const uintuZaIx3x = BigInt("245")
		const stringIsZKKS = "Li2M1LOQycAj6JSaBuT5mBofJmld"
		const stringvScRmPb = "rCCR2KpyNUwJ4LBWgUH9tD2Ma7DN8CKeB"
		const addressoRuCAuR = accounts[1]
		const uintgPWPBwq = BigInt("1587")
		const uintLYI7Kk = BigInt("71")
//		await Token50X100UHgfFrL.setSymbolNameDecimals.call(stringvScRmPb, stringIsZKKS, uintuZaIx3x, {from: accounts[0]});
//		const uint256gqK4LxH = await Token50X100UHgfFrL.balanceOf.call(addressoRuCAuR, {from: accounts[1]});
//		const boolRYcmopx = await Token50X100UHgfFrL.safeLock.call(uintLYI7Kk, uintgPWPBwq, {from: accounts[0]});

		await expect(Token50X100UHgfFrL.setSymbolNameDecimals.call(stringvScRmPb, stringIsZKKS, uintuZaIx3x, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100vRB3aFz = await Token50X100.new({from: accounts[1]});
		const boolvzu3Vyr = false
		const addressYgBjid = accounts[3]
		const uint4sQp1g = BigInt("1820")
		const addressB7HZWdE = accounts[0]
		const uintw3myfgl = BigInt("1139")
		const uintOC2Z63V = BigInt("2000")
		const addressd4TjOpz = "0x0000000000000000000000000000000000000001"
//		await Token50X100vRB3aFz.setWhiteListReceivers.call(addressYgBjid, boolvzu3Vyr, {from: accounts[1]});
//		const boolWUWxqg = await Token50X100vRB3aFz.transfer.call(addressB7HZWdE, uint4sQp1g, {from: accounts[2]});
//		const boolrGrOCyR = await Token50X100vRB3aFz.setVesting.call(addressd4TjOpz, uintOC2Z63V, uintw3myfgl, {from: accounts[4]});

		await expect(Token50X100vRB3aFz.setWhiteListReceivers.call(addressYgBjid, boolvzu3Vyr, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})