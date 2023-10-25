const QuickToken = artifacts.require("QuickToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('QuickToken', (accounts) => {
	it('test for QuickToken', async () => {
		const addresswAC7JWe = accounts[1]
		const addressVzIb9ou = accounts[4]
		const QuickTokenNkD7eu = await QuickToken.new(addresswAC7JWe, addressVzIb9ou, {from: accounts[4]});
		const addressV8hLUva = accounts[2]
		const uintZIX3jm = BigInt("554")
		const addressF90iVmp = accounts[4]
		const addresswnIapoq = accounts[4]
		const uintcWMnP2I = BigInt("456")
		const addressznXSbfR = accounts[4]
		const addressSIMUXzH = await QuickTokenNkD7eu.setMinter.call(addressV8hLUva, {from: accounts[4]});
		const boolCbib8VF = await QuickTokenNkD7eu.approve.call(addressF90iVmp, uintZIX3jm, {from: accounts[1]});
		const uintVEWHlid = await QuickTokenNkD7eu.balanceOf.call(addresswnIapoq, {from: accounts[5]});
		const boolYHHQf6D = await QuickTokenNkD7eu.approve.call(addressznXSbfR, uintcWMnP2I, {from: accounts[4]});

		assert.equal(boolCbib8VF, true)
		assert.equal(boolYHHQf6D, true)
		assert.equal(uintVEWHlid, BigInt("0"))
	});

	it('test for QuickToken', async () => {
		const addressLJdTTG1 = accounts[5]
		const addressXHILvCb = accounts[1]
		const QuickTokenTeW835x = await QuickToken.new(addressLJdTTG1, addressXHILvCb, {from: accounts[2]});
		const uint0ihjbb = BigInt("1352")
		const addressClw1Pw6 = accounts[0]
		const addressoc5fUJi = accounts[2]
		const addresskIXiqvJ = accounts[3]
		const addressvImGfWF = accounts[0]
		const uintxN2PQwB = BigInt("922")
		const addressqPZcs5m = accounts[2]
		const uintNd193CF = BigInt("847")
		const addressBQeCsyI = accounts[4]
		const addressqgSSKKT = accounts[4]
		const uinthBqosKU = BigInt("833")
		const addressYUpdYMw = accounts[5]
		const addresszC3haL8 = accounts[1]
		const addressJcp8icN = accounts[1]
		const boolZkbqpRJ = await QuickTokenTeW835x.transferFrom.call(addressoc5fUJi, addressClw1Pw6, uint0ihjbb, {from: accounts[1]});
		const uintTHSPeNb = await QuickTokenTeW835x.allowance.call(addressvImGfWF, addresskIXiqvJ, {from: accounts[3]});
		const booliWzUXDI = await QuickTokenTeW835x.transfer.call(addressqPZcs5m, uintxN2PQwB, {from: accounts[0]});
		const booltFVX1yW = await QuickTokenTeW835x.transferFrom.call(addressqgSSKKT, addressBQeCsyI, uintNd193CF, {from: accounts[2]});
		const addressW3N9PQH = await QuickTokenTeW835x.mint.call(addressYUpdYMw, uinthBqosKU, {from: accounts[2]});
		const uintuCjpnI = await QuickTokenTeW835x.allowance.call(addressJcp8icN, addresszC3haL8, {from: accounts[0]});

		await expect(QuickTokenTeW835x.transferFrom.call(addressoc5fUJi, addressClw1Pw6, uint0ihjbb, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for QuickToken', async () => {
		const addressxfUlOH = accounts[1]
		const addressMDyG0ez = accounts[0]
		const QuickTokenJY6R4U3 = await QuickToken.new(addressxfUlOH, addressMDyG0ez, {from: accounts[5]});
		const addresslPAxPap = accounts[5]
		const addresso9MPZTS = accounts[4]
		const addressqJc7rgs = accounts[1]
		const uintjVOQSLG = BigInt("582")
		const addressKKFwpaO = accounts[2]
		const uintCV4nfZH = BigInt("1873")
		const addresstlHIpfP = accounts[2]
		const uintEJUSGz4 = await QuickTokenJY6R4U3.balanceOf.call(addresslPAxPap, {from: "0x0000000000000000000000000000000000000001"});
		const uint4MHdHW = await QuickTokenJY6R4U3.allowance.call(addressqJc7rgs, addresso9MPZTS, {from: accounts[5]});
		const addressOvUQZ10 = await QuickTokenJY6R4U3.mint.call(addressKKFwpaO, uintjVOQSLG, {from: accounts[2]});
		const boolQrL1us = await QuickTokenJY6R4U3.approve.call(addresstlHIpfP, uintCV4nfZH, {from: accounts[1]});

		assert.equal(uint4MHdHW, BigInt("0"))
		assert.equal(uintEJUSGz4, BigInt("0"))
		await expect(QuickTokenJY6R4U3.mint.call(addressKKFwpaO, uintjVOQSLG, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for QuickToken', async () => {
		const addresso7UgRY8 = accounts[1]
		const addressj4iYeD = accounts[4]
		const QuickTokenTAQYSWk = await QuickToken.new(addresso7UgRY8, addressj4iYeD, {from: accounts[3]});
		const addressZZ4HMzI = accounts[3]
		const uintmTNIDPv = BigInt("79")
		const addressXqdo76f = accounts[0]
		const addressb6tTbW0 = accounts[1]
		const uintqrCXi9 = BigInt("1559")
		const addressLcKBtKX = accounts[1]
		const uintetmh8Cn = await QuickTokenTAQYSWk.balanceOf.call(addressZZ4HMzI, {from: accounts[1]});
		const bool0Lm8Su = await QuickTokenTAQYSWk.transfer.call(addressXqdo76f, uintmTNIDPv, {from: accounts[3]});
		const uintMcA3Hgo = await QuickTokenTAQYSWk.balanceOf.call(addressb6tTbW0, {from: accounts[0]});
		const addressLjfmVA = await QuickTokenTAQYSWk.mint.call(addressLcKBtKX, uintqrCXi9, {from: accounts[1]});

		assert.equal(uintetmh8Cn, BigInt("0"))
		await expect(QuickTokenTAQYSWk.transfer.call(addressXqdo76f, uintmTNIDPv, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for QuickToken', async () => {
		const addressgUDjsYN = accounts[2]
		const addressPjHCWxP = accounts[2]
		const QuickTokenjI6qiFo = await QuickToken.new(addressgUDjsYN, addressPjHCWxP, {from: "0x0000000000000000000000000000000000000001"});
		const address9DQES6 = accounts[3]
		const addresspiI63u8 = "0x0000000000000000000000000000000000000001"
		const uinteIuQUOf = BigInt("1186")
		const addressS4cLsf = accounts[4]
		const uintmy3j3fi = BigInt("1972")
		const addressnDyls9w = accounts[4]
		const addressSPyUhhX = accounts[0]
		const uintmjiz7m4 = await QuickTokenjI6qiFo.allowance.call(addresspiI63u8, address9DQES6, {from: accounts[4]});
		const addressfXIU02h = await QuickTokenjI6qiFo.mint.call(addressS4cLsf, uinteIuQUOf, {from: accounts[0]});
		const boolFpKnj8 = await QuickTokenjI6qiFo.transferFrom.call(addressSPyUhhX, addressnDyls9w, uintmy3j3fi, {from: accounts[5]});
	});

	it('test for QuickToken', async () => {
		const addresszYEEuaA = accounts[5]
		const addresskEwVXBm = accounts[4]
		const QuickTokencgUIXeM = await QuickToken.new(addresszYEEuaA, addresskEwVXBm, {from: accounts[1]});
		const uintPL5TUhY = BigInt("675")
		const addressgkORcx = accounts[4]
		const addressolqqOIk = accounts[5]
		const uintq1cZIj9 = BigInt("753")
		const addressD2veo7C = accounts[3]
		const addressh43YWv = accounts[3]
		const addressXU8CfNC = await QuickTokencgUIXeM.mint.call(addressgkORcx, uintPL5TUhY, {from: accounts[4]});
		const uintS8ALOZ0 = await QuickTokencgUIXeM.balanceOf.call(addressolqqOIk, {from: accounts[4]});
		const boolEHl1luU = await QuickTokencgUIXeM.approve.call(addressD2veo7C, uintq1cZIj9, {from: accounts[1]});
		const uint7qboNt = await QuickTokencgUIXeM.balanceOf.call(addressh43YWv, {from: accounts[5]});

		assert.equal(boolEHl1luU, true)
		assert.equal(uint7qboNt, BigInt("0"))
		assert.equal(uintS8ALOZ0, BigInt("2000000000000"))
	});

	it('test for QuickToken', async () => {
		const addressQfxwFRZ = accounts[4]
		const addressfHU4Cju = accounts[3]
		const QuickTokendvedlw = await QuickToken.new(addressQfxwFRZ, addressfHU4Cju, {from: accounts[1]});
		const uintQa38U87 = BigInt("296")
		const addressAc6H2q7 = accounts[6]
		const uintLVial1I = BigInt("377")
		const addressBXKorzn = accounts[1]
		const addresslxWrrgv = accounts[1]
		const addresskfxgfmV = accounts[5]
		const uintmauJcaJ = BigInt("108")
		const address8UlcRX = accounts[3]
		const address6CKrx9 = accounts[3]
		const uintTEVvH4G = BigInt("384")
		const addressKtM4dqO = accounts[5]
		const boolvV1j90t = await QuickTokendvedlw.approve.call(addressAc6H2q7, uintQa38U87, {from: accounts[3]});
		const boolRAVhjBP = await QuickTokendvedlw.approve.call(addressBXKorzn, uintLVial1I, {from: accounts[2]});
		const uintPKYv5rj = await QuickTokendvedlw.allowance.call(addresskfxgfmV, addresslxWrrgv, {from: accounts[5]});
		const boolwBDYTiP = await QuickTokendvedlw.approve.call(address8UlcRX, uintmauJcaJ, {from: accounts[2]});
		const addressNGyIiPU = await QuickTokendvedlw.setMinter.call(address6CKrx9, {from: accounts[2]});
		const boolOMW8Kqz = await QuickTokendvedlw.approve.call(addressKtM4dqO, uintTEVvH4G, {from: accounts[1]});

		assert.equal(boolRAVhjBP, true)
		assert.equal(boolvV1j90t, true)
		assert.equal(boolwBDYTiP, true)
		assert.equal(uintPKYv5rj, BigInt("0"))
		await expect(QuickTokendvedlw.setMinter.call(address6CKrx9, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for QuickToken', async () => {
		const addresst4swks = accounts[5]
		const addressEx1ce9v = accounts[3]
		const QuickTokenyanwWXz = await QuickToken.new(addresst4swks, addressEx1ce9v, {from: accounts[4]});
		const uintyqHjEq8 = BigInt("116")
		const addressEC6OOPJ = accounts[2]
		const uintgpXM9O6 = BigInt("34")
		const addressSwPZYUj = accounts[1]
		const uintjDFBuZ6 = BigInt("518")
		const addressT5mBHBe = "0x0000000000000000000000000000000000000001"
		const addressWTULCj9 = accounts[0]
		const uintev0Ot3w = BigInt("356")
		const addresshbqOy5R = accounts[3]
		const boolFFlsbqx = await QuickTokenyanwWXz.transfer.call(addressEC6OOPJ, uintyqHjEq8, {from: accounts[5]});
		const boolEDcwCsx = await QuickTokenyanwWXz.approve.call(addressSwPZYUj, uintgpXM9O6, {from: accounts[4]});
		const boolw84WhsK = await QuickTokenyanwWXz.transferFrom.call(addressWTULCj9, addressT5mBHBe, uintjDFBuZ6, {from: "0x0000000000000000000000000000000000000001"});
		const addresskgTrrt0 = await QuickTokenyanwWXz.mint.call(addresshbqOy5R, uintev0Ot3w, {from: accounts[0]});

		assert.equal(boolEDcwCsx, true)
		assert.equal(boolFFlsbqx, true)
		await expect(QuickTokenyanwWXz.transferFrom.call(addressWTULCj9, addressT5mBHBe, uintjDFBuZ6, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});
})