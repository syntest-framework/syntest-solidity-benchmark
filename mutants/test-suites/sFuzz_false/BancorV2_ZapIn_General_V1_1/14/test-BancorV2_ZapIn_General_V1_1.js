const BancorV2_ZapIn_General_V1_1 = artifacts.require("BancorV2_ZapIn_General_V1_1");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('BancorV2_ZapIn_General_V1_1', (accounts) => {
	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uinttFJhrbG = BigInt("1126")
		const BancorV2_ZapIn_General_V1_1ydA0gap = await BancorV2_ZapIn_General_V1_1.new(uinttFJhrbG, {from: accounts[0]});
		const addressOcPHO5s = "0x0000000000000000000000000000000000000001"
		const byteeGVvWid = "0x1b1a0a0608150216"
		const addressyB3cRYK = accounts[2]
		const addressAzwu9DR = accounts[2]
		const uintFykWOGZ = BigInt("70")
		const uintpltnTU = BigInt("1040")
		const addressi5r5vMz = accounts[0]
		const addressdMxeYFy = accounts[4]
		const addresstxxMktI = accounts[2]
		const addressNML39nO = await BancorV2_ZapIn_General_V1_1ydA0gap.transferOwnership.call(addressOcPHO5s, {from: accounts[0]});
//		const uint256eevlUHh = await BancorV2_ZapIn_General_V1_1ydA0gap.ZapInSingleSided.call(addresstxxMktI, addressdMxeYFy, addressi5r5vMz, uintpltnTU, uintFykWOGZ, addressAzwu9DR, addressyB3cRYK, byteeGVvWid, {from: accounts[2]});
//		await BancorV2_ZapIn_General_V1_1ydA0gap.toggleContractActive.call({from: accounts[5]});
//		await BancorV2_ZapIn_General_V1_1ydA0gap.onlyOwner.call({from: accounts[1]});
//		await BancorV2_ZapIn_General_V1_1ydA0gap.nonReentrant.call({from: accounts[3]});
//		await BancorV2_ZapIn_General_V1_1ydA0gap.toggleContractActive.call({from: accounts[0]});

		await expect(BancorV2_ZapIn_General_V1_1ydA0gap.ZapInSingleSided.call(addresstxxMktI, addressdMxeYFy, addressi5r5vMz, uintpltnTU, uintFykWOGZ, addressAzwu9DR, addressyB3cRYK, byteeGVvWid, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintJWi67Nc = BigInt("962")
		const BancorV2_ZapIn_General_V1_1s9t9Rk = await BancorV2_ZapIn_General_V1_1.new(uintJWi67Nc, {from: accounts[5]});
		const uintcoFQpYv = BigInt("819")
//		const uint16mz3giJ = await BancorV2_ZapIn_General_V1_1s9t9Rk.set_new_goodwill.call(uintcoFQpYv, {from: accounts[2]});
//		await BancorV2_ZapIn_General_V1_1s9t9Rk.nonReentrant.call({from: accounts[2]});

		await expect(BancorV2_ZapIn_General_V1_1s9t9Rk.set_new_goodwill.call(uintcoFQpYv, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintG24Bokg = BigInt("1717")
		const BancorV2_ZapIn_General_V1_1d8n65SI = await BancorV2_ZapIn_General_V1_1.new(uintG24Bokg, {from: accounts[4]});
		const boolGNrGNui = await BancorV2_ZapIn_General_V1_1d8n65SI.isOwner.call({from: accounts[3]});
//		await BancorV2_ZapIn_General_V1_1d8n65SI.stopInEmergency.call({from: accounts[3]});

		assert.equal(boolGNrGNui, false)
		await expect(BancorV2_ZapIn_General_V1_1d8n65SI.stopInEmergency.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintkiO9c7T = BigInt("297")
		const BancorV2_ZapIn_General_V1_1lAAXUZq = await BancorV2_ZapIn_General_V1_1.new(uintkiO9c7T, {from: accounts[1]});
		const addressgvBooO = "0x0000000000000000000000000000000000000001"
		const addressf8c9Dve = accounts[5]
		const boolDC7uHs0 = await BancorV2_ZapIn_General_V1_1lAAXUZq.isOwner.call({from: accounts[5]});
		const boolt4QDg5b = await BancorV2_ZapIn_General_V1_1lAAXUZq.isOwner.call({from: accounts[3]});
		const addressYYCRuw2 = await BancorV2_ZapIn_General_V1_1lAAXUZq.owner.call({from: accounts[0]});
		const booleXHsZx = await BancorV2_ZapIn_General_V1_1lAAXUZq.isOwner.call({from: accounts[2]});
//		const addressKOt7OSQ = await BancorV2_ZapIn_General_V1_1lAAXUZq.toPayable.call(addressgvBooO, {from: accounts[0]});
//		const addressiEc3G9m = await BancorV2_ZapIn_General_V1_1lAAXUZq.inCaseTokengetsStuck.call(addressf8c9Dve, {from: accounts[4]});

		assert.equal(addressYYCRuw2, 0x6F46D7408d1D365221A5873Fc6840fD8Aa82Dcb0)
		assert.equal(boolDC7uHs0, false)
		assert.equal(booleXHsZx, false)
		assert.equal(boolt4QDg5b, false)
		await expect(BancorV2_ZapIn_General_V1_1lAAXUZq.toPayable.call(addressgvBooO, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintFxizDVx = BigInt("298")
		const BancorV2_ZapIn_General_V1_1gpZP2VM = await BancorV2_ZapIn_General_V1_1.new(uintFxizDVx, {from: accounts[0]});
		const addresshdp37lS = accounts[4]
		const addressb6dE8D9 = accounts[0]
		const addressUHtgOH = accounts[0]
//		const addressgJg9yU7 = await BancorV2_ZapIn_General_V1_1gpZP2VM.inCaseTokengetsStuck.call(addresshdp37lS, {from: accounts[0]});
//		await BancorV2_ZapIn_General_V1_1gpZP2VM.nonReentrant.call({from: "0x0000000000000000000000000000000000000001"});
//		const address4jKfPy = await BancorV2_ZapIn_General_V1_1gpZP2VM.inCaseTokengetsStuck.call(addressb6dE8D9, {from: accounts[0]});
//		await BancorV2_ZapIn_General_V1_1gpZP2VM.onlyOwner.call({from: accounts[1]});
//		const address3KAhsh = await BancorV2_ZapIn_General_V1_1gpZP2VM.toPayable.call(addressUHtgOH, {from: accounts[2]});

		await expect(BancorV2_ZapIn_General_V1_1gpZP2VM.inCaseTokengetsStuck.call(addresshdp37lS, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintiw4mfpy = BigInt("962")
		const BancorV2_ZapIn_General_V1_1s9t9Rk = await BancorV2_ZapIn_General_V1_1.new(uintiw4mfpy, {from: accounts[5]});
		const uintP0NwaEF = BigInt("555")
//		await BancorV2_ZapIn_General_V1_1s9t9Rk.withdraw.call({from: accounts[5]});
//		const uint16mz3giJ = await BancorV2_ZapIn_General_V1_1s9t9Rk.set_new_goodwill.call(uintP0NwaEF, {from: accounts[2]});

		await expect(BancorV2_ZapIn_General_V1_1s9t9Rk.withdraw.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintEjXGCq = BigInt("576")
		const BancorV2_ZapIn_General_V1_1fXAWUc = await BancorV2_ZapIn_General_V1_1.new(uintEjXGCq, {from: accounts[3]});
		const addressAON19R = accounts[0]
//		await BancorV2_ZapIn_General_V1_1fXAWUc.renounceOwnership.call({from: accounts[3]});
//		await BancorV2_ZapIn_General_V1_1fXAWUc.nonReentrant.call({from: accounts[1]});
//		await BancorV2_ZapIn_General_V1_1fXAWUc.nonReentrant.call({from: "0x0000000000000000000000000000000000000001"});
//		const addressFFZ9Dhs = await BancorV2_ZapIn_General_V1_1fXAWUc.inCaseTokengetsStuck.call(addressAON19R, {from: "0x0000000000000000000000000000000000000001"});

		await expect(BancorV2_ZapIn_General_V1_1fXAWUc.renounceOwnership.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uinte5zjGhA = BigInt("962")
		const BancorV2_ZapIn_General_V1_1s9t9Rk = await BancorV2_ZapIn_General_V1_1.new(uinte5zjGhA, {from: accounts[5]});
		const uintexbvug = BigInt("2031")
		const uintEkDQOdF = BigInt("819")
		const uint16RfoSxDJ = await BancorV2_ZapIn_General_V1_1s9t9Rk.set_new_goodwill.call(uintexbvug, {from: accounts[5]});
//		await BancorV2_ZapIn_General_V1_1s9t9Rk.renounceOwnership.call({from: accounts[0]});
//		const uint16mz3giJ = await BancorV2_ZapIn_General_V1_1s9t9Rk.set_new_goodwill.call(uintEkDQOdF, {from: accounts[2]});

		await expect(BancorV2_ZapIn_General_V1_1s9t9Rk.renounceOwnership.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintLjg2AE5 = BigInt("1347")
		const BancorV2_ZapIn_General_V1_1StKasvi = await BancorV2_ZapIn_General_V1_1.new(uintLjg2AE5, {from: "0x0000000000000000000000000000000000000001"});
		const addressaGGjGeq = accounts[5]
		await BancorV2_ZapIn_General_V1_1StKasvi.renounceOwnership.call({from: accounts[1]});
		const addressN4VEDAP = await BancorV2_ZapIn_General_V1_1StKasvi.transferOwnership.call(addressaGGjGeq, {from: accounts[1]});
		await BancorV2_ZapIn_General_V1_1StKasvi.stopInEmergency.call({from: accounts[1]});
	});
})