const SpiritCoin = artifacts.require("SpiritCoin");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('SpiritCoin', (accounts) => {
	it('test for SpiritCoin', async () => {
		const addresswUvkRid = accounts[3]
		const addressoRPj136 = accounts[0]
		const SpiritCoinlJWc5Pw = await SpiritCoin.new(addresswUvkRid, addressoRPj136, {from: "0x0000000000000000000000000000000000000001"});
		const addressgk3skEv = accounts[0]
		const addressr6mTpUS = accounts[1]
		const addressQY2E5L = "0x0000000000000000000000000000000000000001"
		const addressROmZ8r6 = accounts[0]
		const uintRP5tkxh = BigInt("1849")
		const addressaJXr5sK = accounts[0]
		const uintZitniMl = await SpiritCoinlJWc5Pw.allowance.call(addressr6mTpUS, addressgk3skEv, {from: accounts[4]});
		const uintMarzQ9y = await SpiritCoinlJWc5Pw.allowance.call(addressROmZ8r6, addressQY2E5L, {from: "0x0000000000000000000000000000000000000001"});
		const booln4OTNh = await SpiritCoinlJWc5Pw.approve.call(addressaJXr5sK, uintRP5tkxh, {from: accounts[5]});
	});

	it('test for SpiritCoin', async () => {
		const addressOM9Kc2D = accounts[3]
		const addresscaVsFM1 = accounts[4]
		const SpiritCoinuFhLsl = await SpiritCoin.new(addressOM9Kc2D, addresscaVsFM1, {from: accounts[4]});
		const uintSgQHyf3 = BigInt("1571")
		const addressxH9dbA3 = accounts[3]
		const uintpMzaA1 = BigInt("1786")
		const addressfPtGkys = accounts[1]
		const uintQ7595PJ = BigInt("1680")
		const addressQhTCaG1 = accounts[2]
//		const boolMwLqJxk = await SpiritCoinuFhLsl.transfer.call(addressxH9dbA3, uintSgQHyf3, {from: accounts[0]});
//		const boolUqraiYm = await SpiritCoinuFhLsl.transfer.call(addressfPtGkys, uintpMzaA1, {from: accounts[4]});
//		const boolGDmfrJ6 = await SpiritCoinuFhLsl.approve.call(addressQhTCaG1, uintQ7595PJ, {from: accounts[1]});

		await expect(SpiritCoinuFhLsl.transfer.call(addressxH9dbA3, uintSgQHyf3, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SpiritCoin', async () => {
		const addressShL2jDn = accounts[4]
		const addressoe3LLT = accounts[3]
		const SpiritCoinPYPSAZI = await SpiritCoin.new(addressShL2jDn, addressoe3LLT, {from: accounts[3]});
		const uintAUArbDh = BigInt("127")
		const addressjacJYHx = accounts[0]
		const uintzBR9fES = BigInt("918")
		const addressFFGCmGP = accounts[3]
		const uintPfoVxo0 = BigInt("1407")
		const addresso8BzBN3 = accounts[5]
		const boolpyW7SuH = await SpiritCoinPYPSAZI.approve.call(addressjacJYHx, uintAUArbDh, {from: accounts[0]});
//		const addressqtuXOTu = await SpiritCoinPYPSAZI.mint.call(addressFFGCmGP, uintzBR9fES, {from: "0x0000000000000000000000000000000000000001"});
//		const addressWM1aKaR = await SpiritCoinPYPSAZI.mint.call(addresso8BzBN3, uintPfoVxo0, {from: accounts[0]});

		assert.equal(boolpyW7SuH, true)
		await expect(SpiritCoinPYPSAZI.mint.call(addressFFGCmGP, uintzBR9fES, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for SpiritCoin', async () => {
		const addresspaBrEgD = accounts[5]
		const addressfEOzbgs = accounts[3]
		const SpiritCoint0rqUgV = await SpiritCoin.new(addresspaBrEgD, addressfEOzbgs, {from: accounts[3]});
		const uinthQ3DhjV = BigInt("1557")
		const addressSprABBp = accounts[2]
		const uintPNlT6nZ = BigInt("633")
		const addresskVzBrov = accounts[2]
		const addresspDWK856 = accounts[4]
		const addressOIllEwy = accounts[1]
		const addressixpdV8G = "0x0000000000000000000000000000000000000001"
		const addressQ0t3VsX = await SpiritCoint0rqUgV.mint.call(addressSprABBp, uinthQ3DhjV, {from: accounts[3]});
//		const boolDs4RNHs = await SpiritCoint0rqUgV.transferFrom.call(addresspDWK856, addresskVzBrov, uintPNlT6nZ, {from: accounts[2]});
//		const uintqcG0Vgg = await SpiritCoint0rqUgV.allowance.call(addressixpdV8G, addressOIllEwy, {from: accounts[2]});

		await expect(SpiritCoint0rqUgV.transferFrom.call(addresspDWK856, addresskVzBrov, uintPNlT6nZ, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for SpiritCoin', async () => {
		const addressngmsM6h = accounts[1]
		const addressiQTgtkS = accounts[1]
		const SpiritCoinlqsHSXe = await SpiritCoin.new(addressngmsM6h, addressiQTgtkS, {from: accounts[4]});
		const addresshw3346 = accounts[1]
		const addressHlQ1cQD = accounts[3]
		const address6OAueh = accounts[3]
		const uint9vVyU6 = BigInt("1269")
		const addressouqJLuP = accounts[4]
		const addressbHBFCzw = accounts[4]
		const uintBCkdo2X = BigInt("658")
		const addresscGWKNF9 = accounts[1]
		const uinthm3qGvy = BigInt("326")
		const addressH1u21Zt = accounts[4]
		const uintYLKJVMC = await SpiritCoinlqsHSXe.allowance.call(addressHlQ1cQD, addresshw3346, {from: accounts[0]});
		const uinthyAZ7ZZ = await SpiritCoinlqsHSXe.balanceOf.call(address6OAueh, {from: accounts[1]});
//		const boolTBjasl1 = await SpiritCoinlqsHSXe.transfer.call(addressouqJLuP, uint9vVyU6, {from: accounts[2]});
//		const uintLSp5hhs = await SpiritCoinlqsHSXe.balanceOf.call(addressbHBFCzw, {from: accounts[2]});
//		const boolBH8aoxe = await SpiritCoinlqsHSXe.transfer.call(addresscGWKNF9, uintBCkdo2X, {from: accounts[0]});
//		const boolpwEPGXc = await SpiritCoinlqsHSXe.transfer.call(addressH1u21Zt, uinthm3qGvy, {from: accounts[1]});

		assert.equal(uintYLKJVMC, BigInt("0"))
		assert.equal(uinthyAZ7ZZ, BigInt("0"))
		await expect(SpiritCoinlqsHSXe.transfer.call(addressouqJLuP, uint9vVyU6, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for SpiritCoin', async () => {
		const addressXsCpgGU = accounts[2]
		const addressUbtz5lH = accounts[3]
		const SpiritCoinWdYQn3q = await SpiritCoin.new(addressXsCpgGU, addressUbtz5lH, {from: accounts[2]});
		const addressytT3BVS = "0x0000000000000000000000000000000000000001"
		const addressr5bKJYF = accounts[1]
		const uintCbn6iUO = BigInt("1608")
		const addresszcfYKep = accounts[2]
		const uintKntv806 = BigInt("1744")
		const addresse14E1Ll = accounts[1]
//		const addressZRrX54b = await SpiritCoinWdYQn3q.setMinter.call(addressytT3BVS, {from: accounts[1]});
//		const uintejpaUHu = await SpiritCoinWdYQn3q.balanceOf.call(addressr5bKJYF, {from: "0x0000000000000000000000000000000000000001"});
//		const booldRIfFw = await SpiritCoinWdYQn3q.transfer.call(addresszcfYKep, uintCbn6iUO, {from: accounts[2]});
//		const boolGjwSdVj = await SpiritCoinWdYQn3q.approve.call(addresse14E1Ll, uintKntv806, {from: accounts[2]});

		await expect(SpiritCoinWdYQn3q.setMinter.call(addressytT3BVS, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for SpiritCoin', async () => {
		const addressODPPJl = accounts[5]
		const addressXwW2u5r = accounts[3]
		const SpiritCoint0rqUgV = await SpiritCoin.new(addressODPPJl, addressXwW2u5r, {from: accounts[3]});
		const addressRmLLy2 = accounts[3]
		const uintlgqZj4Y = BigInt("1557")
		const addressnKlisLu = accounts[2]
		const uintBTb9Xdm = BigInt("305")
		const addressUALlQ1c = accounts[2]
		const uinthxXVITD = BigInt("241")
		const addresscirvIeN = accounts[1]
		const addressPMb1uN = accounts[1]
		const addressTXLJeid = "0x00000000000000000000000000000000000000-1"
		const uint26pvrt = await SpiritCoint0rqUgV.balanceOf.call(addressRmLLy2, {from: accounts[2]});
		const addressQ0t3VsX = await SpiritCoint0rqUgV.mint.call(addressnKlisLu, uintlgqZj4Y, {from: accounts[3]});
		const booltEh2Mcr = await SpiritCoint0rqUgV.approve.call(addressUALlQ1c, uintBTb9Xdm, {from: "0x0000000000000000000000000000000000000001"});
		const boolAgriVTd = await SpiritCoint0rqUgV.approve.call(addresscirvIeN, uinthxXVITD, {from: accounts[3]});
//		const uintqcG0Vgg = await SpiritCoint0rqUgV.allowance.call(addressTXLJeid, addressPMb1uN, {from: accounts[2]});

		assert.equal(boolAgriVTd, true)
		assert.equal(booltEh2Mcr, true)
		assert.equal(uint26pvrt, BigInt("0"))
		await expect(SpiritCoint0rqUgV.allowance.call(addressTXLJeid, addressPMb1uN, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})