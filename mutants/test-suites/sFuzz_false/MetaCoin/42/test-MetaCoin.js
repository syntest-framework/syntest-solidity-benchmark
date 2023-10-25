const MetaCoin = artifacts.require("MetaCoin");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MetaCoin', (accounts) => {
	it('test for MetaCoin', async () => {
		const MetaCoindwR6Iw = await MetaCoin.new({from: accounts[2]});
		const uintTaUy2pU = BigInt("38")
		const addresswAt8o7 = accounts[1]
		const uintheRFT9k = BigInt("544")
		const address8MJ4UI = accounts[3]
		const uintcSsrRoE = BigInt("1015")
		const addressiKFC6fv = accounts[2]
		const booluHiYwQ = await MetaCoindwR6Iw.sendCoin.call(addresswAt8o7, uintTaUy2pU, {from: accounts[1]});
		const boolijpP9wy = await MetaCoindwR6Iw.sendCoin.call(address8MJ4UI, uintheRFT9k, {from: accounts[1]});
		const boolig3ieBX = await MetaCoindwR6Iw.sendCoin.call(addressiKFC6fv, uintcSsrRoE, {from: accounts[2]});

		assert.equal(boolig3ieBX, true)
		assert.equal(boolijpP9wy, false)
		assert.equal(booluHiYwQ, false)
	});

	it('test for MetaCoin', async () => {
		const MetaCoiniL5gSAb = await MetaCoin.new({from: accounts[2]});
		const uintoWdh9Yc = BigInt("96")
		const addressbHLwZBq = accounts[2]
		const uintWFrhoYL = BigInt("1605")
		const addressRCK1P5 = accounts[1]
		const uintzXNZYzV = BigInt("1991")
		const addressE57zS1 = accounts[2]
		const uintIxmWkXn = BigInt("1742")
		const addresseBBc8Dh = accounts[0]
		const uinthyAvDm9 = BigInt("1784")
		const addressARvIds9 = accounts[2]
		const uintUMT8fTR = BigInt("2045")
		const addressjSf9x9P = accounts[3]
		const uint3AtBPa = BigInt("0")
		const addressCWikGj2 = accounts[1]
		const uintt5HWTLX = BigInt("2001")
		const addressmrvUXPG = accounts[4]
		const booltkGN2RF = await MetaCoiniL5gSAb.sendCoin.call(addressbHLwZBq, uintoWdh9Yc, {from: accounts[1]});
		const boolwv2Fiut = await MetaCoiniL5gSAb.sendCoin.call(addressRCK1P5, uintWFrhoYL, {from: accounts[5]});
		const boolfFYK4xX = await MetaCoiniL5gSAb.sendCoin.call(addressE57zS1, uintzXNZYzV, {from: accounts[2]});
		const boolYB7NE26 = await MetaCoiniL5gSAb.sendCoin.call(addresseBBc8Dh, uintIxmWkXn, {from: accounts[0]});
		const boolev8DCg = await MetaCoiniL5gSAb.sendCoin.call(addressARvIds9, uinthyAvDm9, {from: accounts[1]});
		const boolhej6cVI = await MetaCoiniL5gSAb.sendCoin.call(addressjSf9x9P, uintUMT8fTR, {from: accounts[2]});
		const boolsxj1U0F = await MetaCoiniL5gSAb.sendCoin.call(addressCWikGj2, uint3AtBPa, {from: accounts[2]});
		const boolzNwLDPM = await MetaCoiniL5gSAb.sendCoin.call(addressmrvUXPG, uintt5HWTLX, {from: accounts[1]});

		assert.equal(boolYB7NE26, false)
		assert.equal(boolev8DCg, false)
		assert.equal(boolfFYK4xX, true)
		assert.equal(boolhej6cVI, true)
		assert.equal(boolsxj1U0F, true)
		assert.equal(booltkGN2RF, false)
		assert.equal(boolwv2Fiut, false)
		assert.equal(boolzNwLDPM, false)
	});

	it('test for MetaCoin', async () => {
		const MetaCoinnuo9Yx4 = await MetaCoin.new({from: "0x0000000000000000000000000000000000000001"});
		const uintc5cNArI = BigInt("385")
		const addresskhiFJFE = accounts[1]
		const uintEoQRrM = BigInt("585")
		const addressCcwt6Br = accounts[3]
		const uintxv23i0G = BigInt("1720")
		const addressIHaBV1Z = accounts[3]
		const uintbM3nbL7 = BigInt("1241")
		const addressEhhEjN4 = "0x0000000000000000000000000000000000000001"
		const boolo56IFpr = await MetaCoinnuo9Yx4.sendCoin.call(addresskhiFJFE, uintc5cNArI, {from: accounts[4]});
		const boolQgYrm60 = await MetaCoinnuo9Yx4.sendCoin.call(addressCcwt6Br, uintEoQRrM, {from: accounts[1]});
		const booleYpoKXg = await MetaCoinnuo9Yx4.sendCoin.call(addressIHaBV1Z, uintxv23i0G, {from: accounts[3]});
		const boolZ0axsys = await MetaCoinnuo9Yx4.sendCoin.call(addressEhhEjN4, uintbM3nbL7, {from: accounts[5]});
	});
})