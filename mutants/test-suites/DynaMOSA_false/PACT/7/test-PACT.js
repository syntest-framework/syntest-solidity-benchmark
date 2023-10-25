const PACT = artifacts.require("PACT");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('PACT', (accounts) => {
	it('test for PACT', async () => {
		const PACTP7aAd0 = await PACT.new({from: accounts[1]});
		const addressT6oRgrh = accounts[1]
		const addressdoneDwc = "0x0000000000000000000000000000000000000001"
		const stringlCtgEGv = await PACTP7aAd0.symbol.call({from: accounts[0]});
//		const boolcHojGD = await PACTP7aAd0.setupRewards.call(addressT6oRgrh, {from: accounts[1]});
//		const boolg2OKrI0 = await PACTP7aAd0.setupRewards.call(addressdoneDwc, {from: accounts[4]});

		assert.equal(stringlCtgEGv, "PACT")
		await expect(PACTP7aAd0.setupRewards.call(addressT6oRgrh, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTNHiM3zL = await PACT.new({from: accounts[4]});
		const addressyJxhJbK = accounts[2]
		const addressvWvUt6E = accounts[0]
		const addresslFUDiMn = accounts[0]
		const addresspqVjyC = accounts[3]
		const uintJfD63D7 = await PACTNHiM3zL.allowance.call(addressvWvUt6E, addressyJxhJbK, {from: accounts[1]});
//		const boolO1SGECy = await PACTNHiM3zL.setupReserve.call(addresslFUDiMn, {from: accounts[0]});
//		const stringz0mR2C5 = await PACTNHiM3zL.name.call({from: accounts[4]});
//		const boolxNAFQE1 = await PACTNHiM3zL.setupFarming.call(addresspqVjyC, {from: accounts[5]});

		assert.equal(uintJfD63D7, BigInt("0"))
		await expect(PACTNHiM3zL.setupReserve.call(addresslFUDiMn, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTkQD2aTg = await PACT.new({from: accounts[3]});
		const addressEiMzEJX = accounts[0]
		const addressjNqGtOw = accounts[0]
		const uint8qpnezAh = await PACTkQD2aTg.decimals.call({from: accounts[2]});
//		const boolHtikofx = await PACTkQD2aTg.setupBasePool.call(addressEiMzEJX, {from: accounts[3]});
//		const uintpxP9qa7 = await PACTkQD2aTg.totalSupply.call({from: accounts[1]});
//		const booldCVCwlF = await PACTkQD2aTg.setupRewards.call(addressjNqGtOw, {from: accounts[0]});

		assert.equal(uint8qpnezAh, BigInt("18"))
		await expect(PACTkQD2aTg.setupBasePool.call(addressEiMzEJX, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACToS5WQye = await PACT.new({from: accounts[3]});
		const addressPQ5E3Rh = accounts[0]
		const addressZgFwkLo = accounts[3]
//		const boolk8Vht1 = await PACToS5WQye.setupTeam.call(addressPQ5E3Rh, {from: accounts[0]});
//		const boolEiZvVC3 = await PACToS5WQye.setupRewards.call(addressZgFwkLo, {from: accounts[1]});

		await expect(PACToS5WQye.setupTeam.call(addressPQ5E3Rh, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTx1TuVr = await PACT.new({from: "0x0000000000000000000000000000000000000001"});
		const addresstoueV2r = accounts[5]
		const uintI8MqZgh = BigInt("1634")
		const addressDd97dpF = accounts[3]
		const addressaUur80 = accounts[2]
		const addressNzSoXve = accounts[1]
		const boolfAHM6CL = await PACTx1TuVr.setupTeam.call(addresstoueV2r, {from: "0x0000000000000000000000000000000000000001"});
		const uintKY9YKfU = await PACTx1TuVr.totalSupply.call({from: accounts[4]});
		const booldjkc68G = await PACTx1TuVr.approve.call(addressDd97dpF, uintI8MqZgh, {from: accounts[2]});
		const boolN91oeIu = await PACTx1TuVr.setupTeam.call(addressaUur80, {from: accounts[2]});
		const boolujtaxYx = await PACTx1TuVr.setupRewards.call(addressNzSoXve, {from: accounts[5]});
	});

	it('test for PACT', async () => {
		const PACTIzz9trk = await PACT.new({from: accounts[1]});
		const uintOj0gguB = BigInt("1505")
		const addressPWY0Vm1 = accounts[0]
		const addressEgmq0F5 = accounts[2]
		const addressnN75hpa = accounts[0]
//		const boolYe26T4Q = await PACTIzz9trk.transferFrom.call(addressEgmq0F5, addressPWY0Vm1, uintOj0gguB, {from: accounts[3]});
//		const boolYftUcK = await PACTIzz9trk.setupRewards.call(addressnN75hpa, {from: accounts[2]});

		await expect(PACTIzz9trk.transferFrom.call(addressEgmq0F5, addressPWY0Vm1, uintOj0gguB, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTTpsKZKw = await PACT.new({from: accounts[1]});
		const addressHE1dkM8 = accounts[2]
		const addressk4OYRF = accounts[4]
		const addressYUDsE9 = accounts[3]
		const addresskiucVz9 = accounts[4]
		const stringOT95XW0 = await PACTTpsKZKw.name.call({from: accounts[3]});
		const uintZmkoOE7 = await PACTTpsKZKw.allowance.call(addressk4OYRF, addressHE1dkM8, {from: accounts[2]});
//		const boolsxnIBis = await PACTTpsKZKw.setupRewards.call(addressYUDsE9, {from: accounts[1]});
//		const uint8nUH7DfG = await PACTTpsKZKw.decimals.call({from: accounts[2]});
//		const boolmMApZ5J = await PACTTpsKZKw.setupReserve.call(addresskiucVz9, {from: accounts[1]});

		assert.equal(stringOT95XW0, "P2PB2B community token")
		assert.equal(uintZmkoOE7, BigInt("0"))
		await expect(PACTTpsKZKw.setupRewards.call(addressYUDsE9, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTC0PXwDD = await PACT.new({from: accounts[3]});
		const uintODWJEmE = BigInt("1450")
		const addressUvikdi0 = accounts[3]
		const uintXnJ9sfI = BigInt("103")
		const addressFEVWlRF = accounts[3]
		const addressP5wD42F = accounts[3]
//		const boolGZjRK7q = await PACTC0PXwDD.transfer.call(addressUvikdi0, uintODWJEmE, {from: accounts[2]});
//		const stringsr9oSfP = await PACTC0PXwDD.symbol.call({from: accounts[4]});
//		const boolwCUJ3bQ = await PACTC0PXwDD.approve.call(addressFEVWlRF, uintXnJ9sfI, {from: "0x0000000000000000000000000000000000000001"});
//		const booldwNPbad = await PACTC0PXwDD.setupRewards.call(addressP5wD42F, {from: accounts[1]});
//		const stringDrEhWd = await PACTC0PXwDD.symbol.call({from: accounts[4]});

		await expect(PACTC0PXwDD.transfer.call(addressUvikdi0, uintODWJEmE, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTC0PXwDD = await PACT.new({from: accounts[3]});
		const addressqrRxRIe = accounts[3]
		const stringsr9oSfP = await PACTC0PXwDD.symbol.call({from: accounts[4]});
		const uintVEPIgrF = await PACTC0PXwDD.totalSupply.call({from: accounts[0]});
//		const booldwNPbad = await PACTC0PXwDD.setupRewards.call(addressqrRxRIe, {from: accounts[1]});

		assert.equal(stringsr9oSfP, "PACT")
		assert.equal(uintVEPIgrF, BigInt("1000000000000000000000000000"))
		await expect(PACTC0PXwDD.setupRewards.call(addressqrRxRIe, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTyj61DyS = await PACT.new({from: accounts[1]});
		const addressLWgYr5x = accounts[3]
		const addressJHFQzZf = accounts[2]
		const uinty9onqkB = BigInt("1198")
		const addresszOES7XD = "0x0000000000000000000000000000000000000001"
		const uintI8cimcK = BigInt("892")
		const addressff5yNpK = accounts[1]
//		const boolF2WFycd = await PACTyj61DyS.setupFarming.call(addressLWgYr5x, {from: accounts[1]});
//		const boolRGqUpI = await PACTyj61DyS.setupBasePool.call(addressJHFQzZf, {from: accounts[3]});
//		const string3hxh91 = await PACTyj61DyS.name.call({from: accounts[5]});
//		const boolVjZQ2xB = await PACTyj61DyS.approve.call(addresszOES7XD, uinty9onqkB, {from: accounts[0]});
//		const boolaRcG3lK = await PACTyj61DyS.approve.call(addressff5yNpK, uintI8cimcK, {from: accounts[3]});

		await expect(PACTyj61DyS.setupFarming.call(addressLWgYr5x, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTTpsKZKw = await PACT.new({from: accounts[1]});
		const addressghx6JRt = accounts[2]
		const addressncrDbEX = accounts[5]
		const uintb1D9lW = BigInt("1145")
		const addressF49iQ7s = accounts[3]
		const addressK3E9vXR = accounts[1]
		const addressYxEcsox = accounts[3]
		const uintZmkoOE7 = await PACTTpsKZKw.allowance.call(addressncrDbEX, addressghx6JRt, {from: accounts[2]});
		const boolyDqZo75 = await PACTTpsKZKw.approve.call(addressF49iQ7s, uintb1D9lW, {from: accounts[2]});
		const uintEUje95n = await PACTTpsKZKw.balanceOf.call(addressK3E9vXR, {from: accounts[4]});
//		const boolsxnIBis = await PACTTpsKZKw.setupRewards.call(addressYxEcsox, {from: accounts[1]});
//		const uint8nUH7DfG = await PACTTpsKZKw.decimals.call({from: accounts[2]});

		assert.equal(boolyDqZo75, true)
		assert.equal(uintEUje95n, BigInt("0"))
		assert.equal(uintZmkoOE7, BigInt("0"))
		await expect(PACTTpsKZKw.setupRewards.call(addressYxEcsox, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTP7aAd0 = await PACT.new({from: accounts[1]});
		const addressz4REdc = accounts[1]
		const addresslAaLHVt = "0x0000000000000000000000000000000000000001"
		const uintCQElBXX = BigInt("727")
		const addressZsNiNq = accounts[3]
		const addressI0hfACt = accounts[2]
		const addressvLC9jrp = "0x0000000000000000000000000000000000000001"
		const stringlCtgEGv = await PACTP7aAd0.symbol.call({from: accounts[0]});
		const uintmH8GDDz = await PACTP7aAd0.allowance.call(addresslAaLHVt, addressz4REdc, {from: accounts[3]});
//		const boolmZOwik9 = await PACTP7aAd0.burn.call(addressZsNiNq, uintCQElBXX, {from: accounts[0]});
//		const boolcHojGD = await PACTP7aAd0.setupRewards.call(addressI0hfACt, {from: accounts[1]});
//		const boolg2OKrI0 = await PACTP7aAd0.setupRewards.call(addressvLC9jrp, {from: accounts[4]});

		assert.equal(stringlCtgEGv, "PACT")
		assert.equal(uintmH8GDDz, BigInt("0"))
		await expect(PACTP7aAd0.burn.call(addressZsNiNq, uintCQElBXX, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTtZfF6I3 = await PACT.new({from: accounts[2]});
		const uintGlIq6Jj = BigInt("1234")
		const addressEZgflET = accounts[1]
		const uintOFLnvrG = BigInt("0")
		const addressyDXuDPU = "0x0000000000000000000000000000000000000001"
		const addressRqfKAVv = accounts[2]
		const stringljamxH5 = await PACTtZfF6I3.symbol.call({from: accounts[0]});
		const stringtnVZ5Ed = await PACTtZfF6I3.name.call({from: accounts[4]});
		const booliSDJQgs = await PACTtZfF6I3.approve.call(addressEZgflET, uintGlIq6Jj, {from: accounts[2]});
		const boolZqjwmQ = await PACTtZfF6I3.transferFrom.call(addressRqfKAVv, addressyDXuDPU, uintOFLnvrG, {from: accounts[4]});

		assert.equal(boolZqjwmQ, true)
		assert.equal(booliSDJQgs, true)
		assert.equal(stringljamxH5, "PACT")
		assert.equal(stringtnVZ5Ed, "P2PB2B community token")
	});
})