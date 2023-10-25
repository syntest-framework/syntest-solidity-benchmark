const MetaCoin = artifacts.require("MetaCoin");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MetaCoin', (accounts) => {
	it('test for MetaCoin', async () => {
		const MetaCoinRcmXrQx = await MetaCoin.new({from: accounts[1]});
		const uintiXVJC4B = BigInt("160")
		const addressF41zIZV = accounts[0]
		const uintID5NL4i = BigInt("499")
		const addressAyhYHxF = accounts[0]
		const uintShMUnSF = BigInt("733")
		const addressdOnaUuf = accounts[2]
		const uintvyuDnLQ = BigInt("1811")
		const addressyUT5SOd = accounts[0]
		const uintHXokFRk = BigInt("1977")
		const addressFFO0GVG = accounts[5]
		const boolEDiBVB8 = await MetaCoinRcmXrQx.sendCoin.call(addressF41zIZV, uintiXVJC4B, {from: accounts[4]});
		const bool0aihZ2 = await MetaCoinRcmXrQx.sendCoin.call(addressAyhYHxF, uintID5NL4i, {from: accounts[3]});
		const booljsXiTdy = await MetaCoinRcmXrQx.sendCoin.call(addressdOnaUuf, uintShMUnSF, {from: accounts[1]});
		const boolWy6hTpc = await MetaCoinRcmXrQx.sendCoin.call(addressyUT5SOd, uintvyuDnLQ, {from: accounts[2]});
		const boolVkaMHtC = await MetaCoinRcmXrQx.sendCoin.call(addressFFO0GVG, uintHXokFRk, {from: accounts[3]});

		assert.equal(bool0aihZ2, false)
		assert.equal(boolEDiBVB8, false)
		assert.equal(boolVkaMHtC, false)
		assert.equal(boolWy6hTpc, false)
		assert.equal(booljsXiTdy, true)
	});

	it('test for MetaCoin', async () => {
		const MetaCoinDSYBrCw = await MetaCoin.new({from: "0x0000000000000000000000000000000000000001"});
		const uintCQavVKo = BigInt("1002")
		const addressreRhhgD = accounts[0]
		const uintfO3wPJJ = BigInt("1453")
		const addressySU58rW = accounts[0]
		const boolSCkb5e = await MetaCoinDSYBrCw.sendCoin.call(addressreRhhgD, uintCQavVKo, {from: accounts[4]});
		const boolSh8yS2r = await MetaCoinDSYBrCw.sendCoin.call(addressySU58rW, uintfO3wPJJ, {from: accounts[2]});
	});

	it('test for MetaCoin', async () => {
		const MetaCoinRcmXrQx = await MetaCoin.new({from: accounts[1]});
		const uintqZ1jNKB = BigInt("499")
		const addressYG7UsHz = accounts[0]
		const uintNW3xn88 = BigInt("1291")
		const addressVmpnBdW = accounts[1]
		const uintPeEqXdb = BigInt("1352")
		const addressTcy8Ya = accounts[3]
		const uinti2ZsKss = BigInt("155")
		const addressoyXeaN = accounts[4]
		const uinthPRHNVi = BigInt("318")
		const addressUwwt1lE = accounts[0]
		const uintre9MbR8 = BigInt("872")
		const addressLZPjcGX = accounts[2]
		const uintVXvyiW7 = BigInt("49")
		const addresstyNBRzo = accounts[0]
		const uintALqn82Y = BigInt("1320")
		const addressVNJUWL = accounts[5]
		const uintlKbizrk = BigInt("808")
		const addressB6Y8Lnw = accounts[1]
		const uintbR0R1JO = BigInt("1909")
		const addressYgaZNi9 = accounts[1]
		const uintovzGRMH = BigInt("5")
		const addressQioaSjn = accounts[5]
		const uintxpWXb1 = BigInt("64")
		const addressNi7YZQL = accounts[3]
		const uintpejUgT = BigInt("721")
		const addressACSNo3Z = accounts[3]
		const uintXwgH4I2 = BigInt("467")
		const addressT9HvcI = "0x0000000000000000000000000000000000000001"
		const uintvRbDbJJ = BigInt("1011")
		const addressO0zxWp = accounts[0]
		const uintaIqePvn = BigInt("957")
		const addressO8Upi1R = "0x0000000000000000000000000000000000000001"
		const uintQer3z3J = BigInt("1054")
		const addressBZi9CML = accounts[0]
		const uintlFwVUlB = BigInt("1401")
		const addressHuNVbZT = accounts[5]
		const uint0SmJ2U = BigInt("400")
		const addressZEKHGfb = accounts[0]
		const uintIJ3sIdj = BigInt("1")
		const addressUXC2Ps8 = accounts[3]
		const uintb6m6xZ1 = BigInt("679")
		const addressFdntFIs = accounts[1]
		const uintMV6SXQ = BigInt("1708")
		const addressmlQ5xJ1 = accounts[1]
		const uintQfdAQ5s = BigInt("1916")
		const addressBMj89Iw = accounts[1]
		const uintj4Jd6Y1 = BigInt("1977")
		const addressgHwl13v = accounts[5]
		const uintZaoK4J8 = BigInt("1966")
		const addresshEVh7fP = accounts[4]
		const bool0aihZ2 = await MetaCoinRcmXrQx.sendCoin.call(addressYG7UsHz, uintqZ1jNKB, {from: accounts[3]});
		const boolHSPEPGG = await MetaCoinRcmXrQx.sendCoin.call(addressVmpnBdW, uintNW3xn88, {from: accounts[1]});
		const boolMfjsser = await MetaCoinRcmXrQx.sendCoin.call(addressTcy8Ya, uintPeEqXdb, {from: accounts[3]});
		const boolEWYM61i = await MetaCoinRcmXrQx.sendCoin.call(addressoyXeaN, uinti2ZsKss, {from: accounts[3]});
		const boolHRtr4kj = await MetaCoinRcmXrQx.sendCoin.call(addressUwwt1lE, uinthPRHNVi, {from: accounts[3]});
		const boolJ0noxE = await MetaCoinRcmXrQx.sendCoin.call(addressLZPjcGX, uintre9MbR8, {from: accounts[2]});
		const boolidT9YK = await MetaCoinRcmXrQx.sendCoin.call(addresstyNBRzo, uintVXvyiW7, {from: accounts[0]});
		const boolmRJB12j = await MetaCoinRcmXrQx.sendCoin.call(addressVNJUWL, uintALqn82Y, {from: accounts[4]});
		const booltnr5LXq = await MetaCoinRcmXrQx.sendCoin.call(addressB6Y8Lnw, uintlKbizrk, {from: "0x0000000000000000000000000000000000000001"});
		const boolctWiUzd = await MetaCoinRcmXrQx.sendCoin.call(addressYgaZNi9, uintbR0R1JO, {from: accounts[4]});
		const boolS8QgzHQ = await MetaCoinRcmXrQx.sendCoin.call(addressQioaSjn, uintovzGRMH, {from: accounts[1]});
		const boolVqA5s47 = await MetaCoinRcmXrQx.sendCoin.call(addressNi7YZQL, uintxpWXb1, {from: accounts[3]});
		const booljsXiTdy = await MetaCoinRcmXrQx.sendCoin.call(addressACSNo3Z, uintpejUgT, {from: accounts[1]});
		const boolDMd3VT1 = await MetaCoinRcmXrQx.sendCoin.call(addressT9HvcI, uintXwgH4I2, {from: "0x0000000000000000000000000000000000000001"});
		const boolWy6hTpc = await MetaCoinRcmXrQx.sendCoin.call(addressO0zxWp, uintvRbDbJJ, {from: accounts[2]});
		const boolsO0eDG3 = await MetaCoinRcmXrQx.sendCoin.call(addressO8Upi1R, uintaIqePvn, {from: accounts[3]});
		const boolr4W0IU = await MetaCoinRcmXrQx.sendCoin.call(addressBZi9CML, uintQer3z3J, {from: "0x0000000000000000000000000000000000000001"});
		const boolavyekFD = await MetaCoinRcmXrQx.sendCoin.call(addressHuNVbZT, uintlFwVUlB, {from: accounts[1]});
		const boolz0vhVVY = await MetaCoinRcmXrQx.sendCoin.call(addressZEKHGfb, uint0SmJ2U, {from: accounts[1]});
		const booluDlVLt0 = await MetaCoinRcmXrQx.sendCoin.call(addressUXC2Ps8, uintIJ3sIdj, {from: accounts[1]});
		const boolAxfg6bN = await MetaCoinRcmXrQx.sendCoin.call(addressFdntFIs, uintb6m6xZ1, {from: accounts[3]});
		const boolnIRxSzx = await MetaCoinRcmXrQx.sendCoin.call(addressmlQ5xJ1, uintMV6SXQ, {from: accounts[4]});
		const booluIuiLw6 = await MetaCoinRcmXrQx.sendCoin.call(addressBMj89Iw, uintQfdAQ5s, {from: accounts[3]});
		const boolVkaMHtC = await MetaCoinRcmXrQx.sendCoin.call(addressgHwl13v, uintj4Jd6Y1, {from: accounts[3]});
		const boolRthhIVG = await MetaCoinRcmXrQx.sendCoin.call(addresshEVh7fP, uintZaoK4J8, {from: accounts[1]});

		assert.equal(bool0aihZ2, false)
		assert.equal(boolAxfg6bN, false)
		assert.equal(boolDMd3VT1, false)
		assert.equal(boolEWYM61i, false)
		assert.equal(boolHRtr4kj, false)
		assert.equal(boolHSPEPGG, true)
		assert.equal(boolJ0noxE, false)
		assert.equal(boolMfjsser, false)
		assert.equal(boolRthhIVG, true)
		assert.equal(boolS8QgzHQ, true)
		assert.equal(boolVkaMHtC, false)
		assert.equal(boolVqA5s47, false)
		assert.equal(boolWy6hTpc, false)
		assert.equal(boolavyekFD, true)
		assert.equal(boolctWiUzd, false)
		assert.equal(boolidT9YK, false)
		assert.equal(booljsXiTdy, true)
		assert.equal(boolmRJB12j, false)
		assert.equal(boolnIRxSzx, false)
		assert.equal(boolr4W0IU, false)
		assert.equal(boolsO0eDG3, false)
		assert.equal(booltnr5LXq, false)
		assert.equal(booluDlVLt0, true)
		assert.equal(booluIuiLw6, false)
		assert.equal(boolz0vhVVY, true)
	});

	it('test for MetaCoin', async () => {
		const MetaCoinijhwA6m = await MetaCoin.new({from: accounts[4]});
		const uintdztdIAP = BigInt("698")
		const addressthFna3q = accounts[4]
		const uintqDyWuW6 = BigInt("164")
		const addressoeBhIb = accounts[5]
		const uintvWX1zOM = BigInt("1488")
		const addressy8PDEpw = accounts[4]
		const uintZywz3pS = BigInt("2100")
		const addressPVZlNZ = accounts[2]
		const uintUylDyM = BigInt("1347")
		const addresszIp0W1 = accounts[2]
		const uintzO1VOlJ = BigInt("251")
		const addressaYrbmbZ = "0x0000000000000000000000000000000000000001"
		const uintTiiIGNV = BigInt("1884")
		const addressYmflUZw = accounts[3]
		const uintS8CTWOM = BigInt("1986")
		const addressnl2qPlc = "0x00000000000000000000000000000000000000-1"
		const uintQrqS3Uq = BigInt("1293")
		const addressrsAPMau = accounts[3]
		const uintoh6R60O = BigInt("245")
		const addressoSTShLO = accounts[3]
		const uintUJbdiqE = BigInt("1170")
		const addressOfLu6dD = accounts[1]
		const uintJRHN2o = BigInt("823")
		const address5T8JzS = accounts[1]
		const boolYwpRu9Q = await MetaCoinijhwA6m.sendCoin.call(addressthFna3q, uintdztdIAP, {from: accounts[2]});
		const boolxJT4y2A = await MetaCoinijhwA6m.sendCoin.call(addressoeBhIb, uintqDyWuW6, {from: accounts[1]});
		const boolROGZDGl = await MetaCoinijhwA6m.sendCoin.call(addressy8PDEpw, uintvWX1zOM, {from: accounts[0]});
		const boolrNgsCK3 = await MetaCoinijhwA6m.sendCoin.call(addressPVZlNZ, uintZywz3pS, {from: accounts[4]});
		const boolZyLQEBB = await MetaCoinijhwA6m.sendCoin.call(addresszIp0W1, uintUylDyM, {from: accounts[3]});
		const booltXNI5r9 = await MetaCoinijhwA6m.sendCoin.call(addressaYrbmbZ, uintzO1VOlJ, {from: accounts[0]});
		const booli57z6se = await MetaCoinijhwA6m.sendCoin.call(addressYmflUZw, uintTiiIGNV, {from: accounts[0]});
		const boolfB4nRib = await MetaCoinijhwA6m.sendCoin.call(addressnl2qPlc, uintS8CTWOM, {from: accounts[1]});
		const boolzTYwbg6 = await MetaCoinijhwA6m.sendCoin.call(addressrsAPMau, uintQrqS3Uq, {from: "0x0000000000000000000000000000000000000001"});
		const boolLAvdmJb = await MetaCoinijhwA6m.sendCoin.call(addressoSTShLO, uintoh6R60O, {from: accounts[1]});
		const boolM5Onuxy = await MetaCoinijhwA6m.sendCoin.call(addressOfLu6dD, uintUJbdiqE, {from: accounts[3]});
		const boola0fYCmk = await MetaCoinijhwA6m.sendCoin.call(address5T8JzS, uintJRHN2o, {from: accounts[4]});

		assert.equal(boolROGZDGl, false)
		assert.equal(boolYwpRu9Q, false)
		assert.equal(boolZyLQEBB, false)
		assert.equal(booli57z6se, false)
		assert.equal(boolrNgsCK3, true)
		assert.equal(booltXNI5r9, false)
		assert.equal(boolxJT4y2A, false)
		await expect(MetaCoinijhwA6m.sendCoin.call(addressnl2qPlc, uintS8CTWOM, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})