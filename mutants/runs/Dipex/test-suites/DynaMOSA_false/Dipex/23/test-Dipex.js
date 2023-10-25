const Dipex = artifacts.require("Dipex");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Dipex', (accounts) => {
	it('test for Dipex', async () => {
		const stringDPMDp9X = "Ikea8YteVYk7YL44vQOsNrUILuK3isp9z15FELwq2cICXvoXjghkHJ9s9RctrwfwsK"
		const stringfrUJzn = "hnZNuWuLjGTrSw9mo5RgPQxbiB3IDFR27eepqme39fe7F1tcImF1L5xyHvSodb6a5ZkC92N"
		const uintHcYkheO = BigInt("1629")
		const DipexjcOpUP1 = await Dipex.new(stringDPMDp9X, stringfrUJzn, uintHcYkheO, {from: accounts[4]});
		const uintDkR5z2Z = BigInt("1610")
		const addressnTAvMD = accounts[4]
		const uintKIkX484 = BigInt("487")
		const addressiRZ49Oz = accounts[0]
		const uintcSzLVkz = BigInt("1326")
		const addressUlDNIR6 = accounts[4]
		const addressTKIhkqQ = accounts[4]
		const uintYkm6iJ5 = BigInt("163")
		const addressxfHkUO = accounts[0]
		const addressDqYIwha = accounts[4]
		const boolqNZcJsq = await DipexjcOpUP1.approve.call(addressnTAvMD, uintDkR5z2Z, {from: accounts[0]});
		const boolOCWX1Jr = await DipexjcOpUP1.approve.call(addressiRZ49Oz, uintKIkX484, {from: "0x0000000000000000000000000000000000000001"});
		const boolLGCpAie = await DipexjcOpUP1.transferFrom.call(addressTKIhkqQ, addressUlDNIR6, uintcSzLVkz, {from: accounts[4]});
		const boolQdf1NM = await DipexjcOpUP1.transferFrom.call(addressDqYIwha, addressxfHkUO, uintYkm6iJ5, {from: accounts[2]});

		assert.equal(boolLGCpAie, true)
		assert.equal(boolOCWX1Jr, true)
		assert.equal(boolqNZcJsq, true)
		await expect(DipexjcOpUP1.transferFrom.call(addressDqYIwha, addressxfHkUO, uintYkm6iJ5, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const stringaJM5QDU = "6dP"
		const stringVfoDfNq = "kBpsmiBaX"
		const uintl3JgIK = BigInt("556")
		const DipexfM86FtU = await Dipex.new(stringaJM5QDU, stringVfoDfNq, uintl3JgIK, {from: accounts[2]});
		const addressdYWN6D = "0x0000000000000000000000000000000000000001"
		const uintqViNiN6 = BigInt("1543")
		const addressblz14Ok = accounts[1]
		const addressDVTgQaB = "0x0000000000000000000000000000000000000001"
		const uintjvMDQNW = BigInt("1961")
		const addressLNcKHnX = accounts[4]
		const uintT5p32ll = BigInt("215")
		const addresspMgPf4g = accounts[5]
		const uintDIz4UKL = BigInt("1223")
		const addressAiFb8C3 = accounts[4]
		const bool1rwJls = await DipexfM86FtU.transferownership.call(addressdYWN6D, {from: accounts[3]});
		const boolNwasDLD = await DipexfM86FtU.approveAndCall.call(addressblz14Ok, uintqViNiN6, {from: accounts[0]});
		const boolpdCFyGN = await DipexfM86FtU.transferownership.call(addressDVTgQaB, {from: accounts[1]});
		const boolWO45o3B = await DipexfM86FtU.approveAndCall.call(addressLNcKHnX, uintjvMDQNW, {from: accounts[5]});
		const boolhm0ya8Y = await DipexfM86FtU.approveAndCall.call(addresspMgPf4g, uintT5p32ll, {from: accounts[0]});
		const boolRQIOsQY = await DipexfM86FtU.approveAndCall.call(addressAiFb8C3, uintDIz4UKL, {from: accounts[5]});

		await expect(DipexfM86FtU.transferownership.call(addressdYWN6D, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const stringr8cTBJC = "vWZwNoOBoK2UJtNHKT3oGdTbzYB3lWWwJwjHwqkTUnWxD"
		const stringvl5sQBh = "KAUCs2hmwYETmj9ry4ds8sXxSoFr1GVV5OsfLtVKLIMNI27jmGuSAaSdfX54JfrYtwp7wVFqANAhEqLmR8"
		const uintnH32Um5 = BigInt("688")
		const DipexY8PUsU0 = await Dipex.new(stringr8cTBJC, stringvl5sQBh, uintnH32Um5, {from: accounts[4]});
		const uintFYnYyqO = BigInt("47")
		const addressEXQr9lC = accounts[3]
		const uintwc2yArU = BigInt("671")
		const addressI8o2DRZ = accounts[3]
		const uintfyfYFhM = BigInt("1887")
		const addresstuY8We0 = accounts[2]
		const boolb9Kg8Vi = await DipexY8PUsU0.approve.call(addressEXQr9lC, uintFYnYyqO, {from: accounts[1]});
		const boolXiMbJTV = await DipexY8PUsU0.approveAndCall.call(addressI8o2DRZ, uintwc2yArU, {from: accounts[2]});
		const boolJKPAI4D = await DipexY8PUsU0.approve.call(addresstuY8We0, uintfyfYFhM, {from: accounts[3]});

		assert.equal(boolb9Kg8Vi, true)
		await expect(DipexY8PUsU0.approveAndCall.call(addressI8o2DRZ, uintwc2yArU, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const stringMLilrkl = "vqD3tuBEet3Fld6rcAxKijLdlcmVlCllNkRU5XMMICpI1C1DFS68HTp4vvJKF1UksGbyq2djfA84"
		const stringJ9jfSDh = "uQM2dHQo1rXtd5ERdvzjBN"
		const uintjIULx7g = BigInt("1303")
		const DipexiDtUxvC = await Dipex.new(stringMLilrkl, stringJ9jfSDh, uintjIULx7g, {from: accounts[3]});
		const uintrkwnkxT = BigInt("1249")
		const addressmRWalFd = accounts[0]
		const addressDgraVAI = accounts[1]
		const uintqdjZGnQ = BigInt("204")
		const addresslKFSWmg = accounts[4]
		const addressmp7sDae = "0x0000000000000000000000000000000000000001"
		const uintYSCqWvn = BigInt("1315")
		const addressPUoSxvt = accounts[1]
		const uintwZDGkbZ = BigInt("1525")
		const addressVplATEU = accounts[4]
		const addresshoiN4Cz = accounts[5]
		const booljxuTW9K = await DipexiDtUxvC.transferFrom.call(addressDgraVAI, addressmRWalFd, uintrkwnkxT, {from: accounts[1]});
		const boolpOPVfiP = await DipexiDtUxvC.transferFrom.call(addressmp7sDae, addresslKFSWmg, uintqdjZGnQ, {from: accounts[4]});
		const boolYGg3BK = await DipexiDtUxvC.approveAndCall.call(addressPUoSxvt, uintYSCqWvn, {from: accounts[0]});
		const boolz5YztMA = await DipexiDtUxvC.approve.call(addressVplATEU, uintwZDGkbZ, {from: accounts[2]});
		const boolVVV3qFL = await DipexiDtUxvC.transferownership.call(addresshoiN4Cz, {from: accounts[4]});

		await expect(DipexiDtUxvC.transferFrom.call(addressDgraVAI, addressmRWalFd, uintrkwnkxT, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const stringwnpot7c = "zrQVlPnUCoSkBFYBufWFnlyicLiqgvd4VTG"
		const stringvjYtYVw = "yB26lgsQEFcYXnUsoZe7wdjlVm24VVaVUNo8O92FK9eCDfxrDWsiAvqJcL"
		const uintyg4MaPy = BigInt("1318")
		const DipexeANpF4L = await Dipex.new(stringwnpot7c, stringvjYtYVw, uintyg4MaPy, {from: accounts[5]});
		const uintoQX5hnH = BigInt("47")
		const addressjhSz85s = accounts[4]
		const uintrg880Nj = BigInt("1898")
		const addressmvhMZIc = accounts[3]
		const addressyKJPjFI = accounts[1]
		const uintxgiBqz = BigInt("1056")
		const addresssUOiLej = accounts[2]
		const boolsSK2XU = await DipexeANpF4L.transfer.call(addressjhSz85s, uintoQX5hnH, {from: accounts[4]});
		const boolxXnh35O = await DipexeANpF4L.transferFrom.call(addressyKJPjFI, addressmvhMZIc, uintrg880Nj, {from: accounts[2]});
		const boolcHHOLl = await DipexeANpF4L.transfer.call(addresssUOiLej, uintxgiBqz, {from: accounts[4]});

		await expect(DipexeANpF4L.transfer.call(addressjhSz85s, uintoQX5hnH, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const stringr8cTBJC = "vWZwNoOBoK2UJtNHKT3oGdTbzYB3lWWwJwjHwqkTUnWxD"
		const stringvl5sQBh = "KAUCs2hmwYETmj9ry4ds8sXxSoFr1GVV5OsfLtVKLIMNI27jmGuSAaSdfX54JfrYtwp7wVFqANAhEqLmR8"
		const uintz0BwQqX = BigInt("688")
		const DipexY8PUsU0 = await Dipex.new(stringr8cTBJC, stringvl5sQBh, uintz0BwQqX, {from: accounts[4]});
		const uintRtAlg5e = BigInt("355")
		const addressJu5ymly = accounts[2]
		const uintlDdHGwB = BigInt("47")
		const addressowseJ2p = accounts[3]
		const uintM7YPNMQ = BigInt("671")
		const addressyocF3Gj = accounts[3]
		const uintHe4aCN = BigInt("1887")
		const addresscxRUR53 = accounts[3]
		const boolJB0QcWQ = await DipexY8PUsU0.approveAndCall.call(addressJu5ymly, uintRtAlg5e, {from: accounts[4]});
		const boolb9Kg8Vi = await DipexY8PUsU0.approve.call(addressowseJ2p, uintlDdHGwB, {from: accounts[1]});
		const boolXiMbJTV = await DipexY8PUsU0.approveAndCall.call(addressyocF3Gj, uintM7YPNMQ, {from: accounts[2]});
		const boolJKPAI4D = await DipexY8PUsU0.approve.call(addresscxRUR53, uintHe4aCN, {from: accounts[3]});

		assert.equal(boolJB0QcWQ, true)
		assert.equal(boolb9Kg8Vi, true)
		await expect(DipexY8PUsU0.approveAndCall.call(addressyocF3Gj, uintM7YPNMQ, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const stringIkYIbem = "7j5H4YUkiElpVcU2CnsRede"
		const stringkjzMFPm = "9eehIaNzpRSVEyegGDbvGLyvY"
		const uintYscrpZa = BigInt("1341")
		const DipexjkRic94 = await Dipex.new(stringIkYIbem, stringkjzMFPm, uintYscrpZa, {from: "0x0000000000000000000000000000000000000001"});
		const uintupBDAsD = BigInt("992")
		const addresstdTsKkz = accounts[3]
		const uints2IYubF = BigInt("749")
		const addressZlecflR = accounts[1]
		const uintGRGhUlm = BigInt("1769")
		const addressBgjF5Ti = accounts[1]
		const addressGU9vc1t = accounts[0]
		const uinthB96zUa = BigInt("89")
		const addressXfmbx0 = accounts[2]
		const uintQyCUK4 = BigInt("1758")
		const addresshJFrzBM = accounts[3]
		const uintMp54v3k = BigInt("1651")
		const addressTqc34U9 = accounts[2]
		const boolTahM7R4 = await DipexjkRic94.approveAndCall.call(addresstdTsKkz, uintupBDAsD, {from: "0x0000000000000000000000000000000000000001"});
		const boolTskVfH = await DipexjkRic94.transfer.call(addressZlecflR, uints2IYubF, {from: accounts[5]});
		const boolcu5kX6 = await DipexjkRic94.transferFrom.call(addressGU9vc1t, addressBgjF5Ti, uintGRGhUlm, {from: accounts[1]});
		const boolaqRpqlg = await DipexjkRic94.approveAndCall.call(addressXfmbx0, uinthB96zUa, {from: "0x0000000000000000000000000000000000000001"});
		const boollgPQvJh = await DipexjkRic94.transfer.call(addresshJFrzBM, uintQyCUK4, {from: accounts[4]});
		const boolnWIWa2V = await DipexjkRic94.approve.call(addressTqc34U9, uintMp54v3k, {from: accounts[5]});
	});

	it('test for Dipex', async () => {
		const stringH4Mi5R2 = "bH6Hq6V9AWleZRvMrdW9r5TKZzyobVHe0F0XzI8pkwm6CNbUOdp2e34nMylPoH5MIXbB8tr1a1BWezM"
		const stringgMXmXk = "XyAEA6y25bkzEfZVilwrCTHmmF1AlJ7OL4AteLJGAX27ZBYDoP1mfk2i5G"
		const uintkJuQZrh = BigInt("826")
		const DipexkSO6Hi0 = await Dipex.new(stringH4Mi5R2, stringgMXmXk, uintkJuQZrh, {from: accounts[1]});
		const uintiYGoK80 = BigInt("0")
		const addressgn3SGtL = "0x0000000000000000000000000000000000000001"
		const addressumgGQy5 = accounts[0]
		const booltTEGaYL = await DipexkSO6Hi0.transferFrom.call(addressumgGQy5, addressgn3SGtL, uintiYGoK80, {from: accounts[4]});

		assert.equal(booltTEGaYL, true)
	});

	it('test for Dipex', async () => {
		const stringr8cTBJC = "vWZwNoOBoK2UJtNHKT3oGdTbzYB3lWWwJwjHwqkTUnWxD"
		const stringvl5sQBh = "KAUCs2hmwYETmj9ry4ds8sXxSoFr1GVV5OsfLtVKLIMNI27jmGuSAaSdfX54JfrYtwp7wVFqANAhEqLmR8"
		const uintnCoaaVO = BigInt("688")
		const DipexY8PUsU0 = await Dipex.new(stringr8cTBJC, stringvl5sQBh, uintnCoaaVO, {from: accounts[4]});
		const uintt6PiqD3 = BigInt("1759")
		const addressudLTneP = accounts[2]
		const uintSyKuKs = BigInt("0")
		const addressP0eK6Sl = accounts[3]
		const uintKr3eff = BigInt("1736")
		const addressR92GvC6 = accounts[6]
		const addressBu9r43 = accounts[4]
		const uintavjDncM = BigInt("1852")
		const addressnHZmDIB = accounts[1]
		const uintoznq9wx = BigInt("498")
		const addressKehMxJP = "0x0000000000000000000000000000000000000001"
		const uintGCjO6hI = BigInt("817")
		const addressgHLOoWg = accounts[1]
		const uintloKFMOG = BigInt("482")
		const addressh8tYfS8 = accounts[1]
		const uintu50HNtn = BigInt("1037")
		const addressGbhNpTy = accounts[4]
		const uintumaHKLt = BigInt("1949")
		const addressTdK6qXf = accounts[3]
		const boolbJBXApV = await DipexY8PUsU0.approve.call(addressudLTneP, uintt6PiqD3, {from: accounts[3]});
		const booln0qxw2u = await DipexY8PUsU0.approveAndCall.call(addressP0eK6Sl, uintSyKuKs, {from: accounts[4]});
		const boolVWZmExM = await DipexY8PUsU0.transferFrom.call(addressBu9r43, addressR92GvC6, uintKr3eff, {from: accounts[4]});
		const boolgaeQFPP = await DipexY8PUsU0.approveAndCall.call(addressnHZmDIB, uintavjDncM, {from: accounts[3]});
		const boolMEL3EzH = await DipexY8PUsU0.approve.call(addressKehMxJP, uintoznq9wx, {from: accounts[5]});
		const boolS4VIAj9 = await DipexY8PUsU0.approve.call(addressgHLOoWg, uintGCjO6hI, {from: accounts[0]});
		const boolzTHwba5 = await DipexY8PUsU0.approve.call(addressh8tYfS8, uintloKFMOG, {from: accounts[2]});
		const boolJKPAI4D = await DipexY8PUsU0.approve.call(addressGbhNpTy, uintu50HNtn, {from: accounts[3]});
		const boolX1Lde6p = await DipexY8PUsU0.approve.call(addressTdK6qXf, uintumaHKLt, {from: accounts[2]});

		assert.equal(boolVWZmExM, true)
		assert.equal(boolbJBXApV, true)
		assert.equal(booln0qxw2u, true)
		await expect(DipexY8PUsU0.approveAndCall.call(addressnHZmDIB, uintavjDncM, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})