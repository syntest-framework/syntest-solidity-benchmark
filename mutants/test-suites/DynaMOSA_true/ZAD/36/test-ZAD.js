const ZAD = artifacts.require("ZAD");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ZAD', (accounts) => {
	it('test for ZAD', async () => {
		const ZADgM4hl6P = await ZAD.new({from: accounts[1]});
		const addresspgtPtfK = accounts[3]
		const addressN6hjQ1 = accounts[1]
		const uint0HTVTN = BigInt("1226")
		const uintdqXmwbj = BigInt("1767")
		const addressu693Zrk = accounts[0]
		const uint2vd2by = BigInt("207")
		const addressUZ1y6m = accounts[3]
		const uint256qAVTyw4 = await ZADgM4hl6P.allowance.call(addressN6hjQ1, addresspgtPtfK, {from: accounts[2]});
		const uint86h4eOt = await ZADgM4hl6P.decimals.call({from: accounts[1]});
//		const uint2566FdDl8 = await ZADgM4hl6P._burn.call(uint0HTVTN, {from: accounts[5]});
//		const boolXrZySIq = await ZADgM4hl6P.decreaseAllowance.call(addressu693Zrk, uintdqXmwbj, {from: accounts[2]});
//		const boolR2338G = await ZADgM4hl6P.decreaseAllowance.call(addressUZ1y6m, uint2vd2by, {from: accounts[3]});

		assert.equal(uint256qAVTyw4, BigInt("0"))
		assert.equal(uint86h4eOt, BigInt("18"))
		await expect(ZADgM4hl6P._burn.call(uint0HTVTN, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for ZAD', async () => {
		const ZADIQPdSdp = await ZAD.new({from: accounts[2]});
		const uintvIi2vQr = BigInt("1790")
		const addressXule67i = accounts[3]
		const uintjImJ2TC = BigInt("695")
		const addresszHzzDMM = accounts[1]
//		const boolB0z7xT = await ZADIQPdSdp.transfer.call(addressXule67i, uintvIi2vQr, {from: accounts[4]});
//		const stringaEDAnot = await ZADIQPdSdp.symbol.call({from: accounts[1]});
//		const boolHfTt6wU = await ZADIQPdSdp.decreaseAllowance.call(addresszHzzDMM, uintjImJ2TC, {from: accounts[1]});

		await expect(ZADIQPdSdp.transfer.call(addressXule67i, uintvIi2vQr, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ZAD', async () => {
		const ZADFuQn0yh = await ZAD.new({from: accounts[5]});
		const uintwONy4r = BigInt("555")
		const addressZJgBHfU = accounts[3]
		const addressmhQdpg4 = accounts[3]
		const uintYAqBs1 = BigInt("513")
		const addressyUSUT7Y = accounts[2]
		const addressrn1xyPx = "0x0000000000000000000000000000000000000001"
		const addresslKaQw7 = accounts[1]
		const addressfkWlgqE = accounts[4]
		const stringRdrn34r = await ZADFuQn0yh.symbol.call({from: accounts[5]});
		const boolsnWi8s1 = await ZADFuQn0yh.increaseAllowance.call(addressZJgBHfU, uintwONy4r, {from: accounts[2]});
		const uint256R2PeSLe = await ZADFuQn0yh.balanceOf.call(addressmhQdpg4, {from: "0x0000000000000000000000000000000000000001"});
//		const boolforyRtW = await ZADFuQn0yh.transferFrom.call(addressrn1xyPx, addressyUSUT7Y, uintYAqBs1, {from: accounts[0]});
//		const uint256J0rX37K = await ZADFuQn0yh.allowance.call(addressfkWlgqE, addresslKaQw7, {from: accounts[0]});

		assert.equal(boolsnWi8s1, true)
		assert.equal(stringRdrn34r, "ZAD")
		assert.equal(uint256R2PeSLe, BigInt("0"))
		await expect(ZADFuQn0yh.transferFrom.call(addressrn1xyPx, addressyUSUT7Y, uintYAqBs1, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ZAD', async () => {
		const ZADFVJ7l3v = await ZAD.new({from: accounts[1]});
		const uintFBEyFQV = BigInt("2008")
		const addressZavhPrH = accounts[0]
		const uint9JyNck = BigInt("1383")
		const addressckqoxjw = "0x0000000000000000000000000000000000000001"
		const uintdbiTIVs = BigInt("485")
		const addressa9yzM1 = accounts[4]
		const uinti2doLsB = BigInt("1489")
		const addressRsCXPyy = accounts[2]
		const addresszxebnea = accounts[4]
//		const boolejqNbT = await ZADFVJ7l3v.decreaseAllowance.call(addressZavhPrH, uintFBEyFQV, {from: accounts[2]});
//		const boolKVhHZ5 = await ZADFVJ7l3v.transfer.call(addressckqoxjw, uint9JyNck, {from: accounts[1]});
//		const boolGZQOrdK = await ZADFVJ7l3v.decreaseAllowance.call(addressa9yzM1, uintdbiTIVs, {from: accounts[1]});
//		const uint256xCYrkmD = await ZADFVJ7l3v._burn.call(uinti2doLsB, {from: accounts[0]});
//		const uint256g9U8NQT = await ZADFVJ7l3v.allowance.call(addresszxebnea, addressRsCXPyy, {from: accounts[1]});

		await expect(ZADFVJ7l3v.decreaseAllowance.call(addressZavhPrH, uintFBEyFQV, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ZAD', async () => {
		const ZADBZ62EdI = await ZAD.new({from: "0x0000000000000000000000000000000000000001"});
		const uintB3ue0N = BigInt("1048")
		const addressbeAi1cP = accounts[2]
		const addressV52g0IV = accounts[5]
		const addressP0CyBR = "0x0000000000000000000000000000000000000001"
		const uintAohijGi = BigInt("359")
		const addressWnuFoxx = accounts[1]
		const uintaDUgrz4 = BigInt("787")
		const addressIewlsmX = accounts[4]
		const addressTPwcN52 = accounts[2]
		const addressJzAZ9p2 = accounts[3]
		const boolxg7JC4R = await ZADBZ62EdI.decreaseAllowance.call(addressbeAi1cP, uintB3ue0N, {from: accounts[1]});
		const uint256WfiwQsh = await ZADBZ62EdI.allowance.call(addressP0CyBR, addressV52g0IV, {from: accounts[2]});
		const boolSXgD7ea = await ZADBZ62EdI.increaseAllowance.call(addressWnuFoxx, uintAohijGi, {from: accounts[3]});
		const boolojjlGUe = await ZADBZ62EdI.transfer.call(addressIewlsmX, uintaDUgrz4, {from: accounts[0]});
		const uint256rfHDYTt = await ZADBZ62EdI.allowance.call(addressJzAZ9p2, addressTPwcN52, {from: accounts[2]});
	});

	it('test for ZAD', async () => {
		const ZADIQPdSdp = await ZAD.new({from: accounts[2]});
		const uintBZIS3N = BigInt("744")
		const addresstH6KtPR = accounts[2]
		const uintMkeVq2W = BigInt("300")
		const addressC5Hcf6q = "0x0000000000000000000000000000000000000001"
		const uintot5n4E2 = BigInt("1703")
		const addressLhplKAT = accounts[1]
		const stringaEDAnot = await ZADIQPdSdp.symbol.call({from: accounts[1]});
		const uint256KzIxCTs = await ZADIQPdSdp.totalSupply.call({from: accounts[4]});
		const boolZiM2wBY = await ZADIQPdSdp.increaseAllowance.call(addresstH6KtPR, uintBZIS3N, {from: accounts[0]});
		const boolKoVO0JE = await ZADIQPdSdp.increaseAllowance.call(addressC5Hcf6q, uintMkeVq2W, {from: accounts[0]});
//		const boolHfTt6wU = await ZADIQPdSdp.decreaseAllowance.call(addressLhplKAT, uintot5n4E2, {from: accounts[1]});

		assert.equal(boolKoVO0JE, true)
		assert.equal(boolZiM2wBY, true)
		assert.equal(stringaEDAnot, "ZAD")
		assert.equal(uint256KzIxCTs, BigInt("100000000000000000000000000"))
		await expect(ZADIQPdSdp.decreaseAllowance.call(addressLhplKAT, uintot5n4E2, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ZAD', async () => {
		const ZADIQPdSdp = await ZAD.new({from: accounts[2]});
		const uintMFLnPfO = BigInt("1790")
		const addressLz5sHxO = accounts[3]
		const uint0b2eQd = BigInt("575")
		const addresst7A9CGs = accounts[2]
		const addressFy5nSJ6 = accounts[0]
		const addressOqU2LWc = "0x0000000000000000000000000000000000000001"
		const uintnvAnUuU = BigInt("42")
		const addressr30zq55 = accounts[3]
		const uintjJIYQV2 = BigInt("695")
		const addresssYyXYR = accounts[2]
		const stringiYRgwCT = await ZADIQPdSdp.name.call({from: accounts[0]});
		const stringIesHIyk = await ZADIQPdSdp.symbol.call({from: accounts[2]});
//		const boolB0z7xT = await ZADIQPdSdp.transfer.call(addressLz5sHxO, uintMFLnPfO, {from: accounts[4]});
//		const boolTweXu0J = await ZADIQPdSdp.transfer.call(addresst7A9CGs, uint0b2eQd, {from: accounts[2]});
//		const uint256hbEhjJ = await ZADIQPdSdp.allowance.call(addressOqU2LWc, addressFy5nSJ6, {from: accounts[3]});
//		const boolMLhodM = await ZADIQPdSdp.increaseAllowance.call(addressr30zq55, uintnvAnUuU, {from: accounts[3]});
//		const boolHfTt6wU = await ZADIQPdSdp.decreaseAllowance.call(addresssYyXYR, uintjJIYQV2, {from: accounts[1]});

		assert.equal(stringIesHIyk, "ZAD")
		assert.equal(stringiYRgwCT, "Zadkiel")
		await expect(ZADIQPdSdp.transfer.call(addressLz5sHxO, uintMFLnPfO, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ZAD', async () => {
		const ZADeE8dgK = await ZAD.new({from: accounts[4]});
		const uintH0Ag90U = BigInt("305")
		const addressIvCflf = accounts[4]
		const uint4oDLA4 = BigInt("1875")
		const addressS3nlpb0 = "0x0000000000000000000000000000000000000001"
		const uintyxSlzBq = BigInt("486")
		const addresszdYAvir = accounts[4]
		const uintKchaEqd = BigInt("1292")
		const addressoWlOLHP = accounts[4]
		const uintvRQpLCh = BigInt("705")
		const addressjDivSci = accounts[4]
		const addresst1jTnJv = accounts[4]
		const boolB9AGpz = await ZADeE8dgK.increaseAllowance.call(addressIvCflf, uintH0Ag90U, {from: accounts[4]});
		const boolpUqZN9M = await ZADeE8dgK.increaseAllowance.call(addressS3nlpb0, uint4oDLA4, {from: accounts[4]});
		const boolEVh5VpO = await ZADeE8dgK.approve.call(addresszdYAvir, uintyxSlzBq, {from: accounts[1]});
//		const boolO3j32Ge = await ZADeE8dgK.decreaseAllowance.call(addressoWlOLHP, uintKchaEqd, {from: accounts[4]});
//		const boollXlnmAI = await ZADeE8dgK.transfer.call(addressjDivSci, uintvRQpLCh, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256EtqUOqj = await ZADeE8dgK.balanceOf.call(addresst1jTnJv, {from: accounts[1]});

		assert.equal(boolB9AGpz, true)
		assert.equal(boolEVh5VpO, true)
		assert.equal(boolpUqZN9M, true)
		await expect(ZADeE8dgK.decreaseAllowance.call(addressoWlOLHP, uintKchaEqd, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ZAD', async () => {
		const ZADIQPdSdp = await ZAD.new({from: accounts[2]});
		const uintg8KMuu4 = BigInt("300")
		const addresstRle5Ev = "0x0000000000000000000000000000000000000000"
		const addressDX1brES = accounts[3]
		const uintxQGcOIT = BigInt("1641")
		const addressFLwo6ve = accounts[3]
		const uintg43V5Wt = BigInt("695")
		const addresszhywGba = accounts[1]
		const stringaEDAnot = await ZADIQPdSdp.symbol.call({from: accounts[1]});
//		const boolKoVO0JE = await ZADIQPdSdp.increaseAllowance.call(addresstRle5Ev, uintg8KMuu4, {from: accounts[0]});
//		const stringR27i8fx = await ZADIQPdSdp.symbol.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256h7WnzTY = await ZADIQPdSdp.balanceOf.call(addressDX1brES, {from: accounts[1]});
//		const boolo3fnjJx = await ZADIQPdSdp.decreaseAllowance.call(addressFLwo6ve, uintxQGcOIT, {from: accounts[0]});
//		const boolHfTt6wU = await ZADIQPdSdp.decreaseAllowance.call(addresszhywGba, uintg43V5Wt, {from: accounts[1]});

		assert.equal(stringaEDAnot, "ZAD")
		await expect(ZADIQPdSdp.increaseAllowance.call(addresstRle5Ev, uintg8KMuu4, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})