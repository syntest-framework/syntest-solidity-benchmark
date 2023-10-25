const BancorV2_ZapIn_General_V1_1 = artifacts.require("BancorV2_ZapIn_General_V1_1");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('BancorV2_ZapIn_General_V1_1', (accounts) => {
	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintl3376LQ = BigInt("1160")
		const BancorV2_ZapIn_General_V1_1Zvfh8I = await BancorV2_ZapIn_General_V1_1.new(uintl3376LQ, {from: accounts[3]});
		const addresseHdR73i = accounts[1]
//		await BancorV2_ZapIn_General_V1_1Zvfh8I.onlyOwner.call({from: accounts[3]});
//		const boolrTJvrEB = await BancorV2_ZapIn_General_V1_1Zvfh8I.isOwner.call({from: accounts[5]});
//		const addressiicPKq = await BancorV2_ZapIn_General_V1_1Zvfh8I.inCaseTokengetsStuck.call(addresseHdR73i, {from: accounts[4]});

		await expect(BancorV2_ZapIn_General_V1_1Zvfh8I.onlyOwner.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintdgYgqd4 = BigInt("1060")
		const BancorV2_ZapIn_General_V1_1rSZABym = await BancorV2_ZapIn_General_V1_1.new(uintdgYgqd4, {from: accounts[2]});
		const uintjdE0wdp = BigInt("1168")
		const uint16xlFWqt8 = await BancorV2_ZapIn_General_V1_1rSZABym.set_new_goodwill.call(uintjdE0wdp, {from: accounts[2]});
//		await BancorV2_ZapIn_General_V1_1rSZABym.toggleContractActive.call({from: accounts[5]});
//		await BancorV2_ZapIn_General_V1_1rSZABym.toggleContractActive.call({from: "0x0000000000000000000000000000000000000001"});
//		const boolxdA7UL2 = await BancorV2_ZapIn_General_V1_1rSZABym.isOwner.call({from: accounts[2]});
//		await BancorV2_ZapIn_General_V1_1rSZABym.onlyOwner.call({from: accounts[1]});

		await expect(BancorV2_ZapIn_General_V1_1rSZABym.toggleContractActive.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uint4kHdwX = BigInt("1687")
		const BancorV2_ZapIn_General_V1_1nUMn0dB = await BancorV2_ZapIn_General_V1_1.new(uint4kHdwX, {from: accounts[3]});
		const addressFT3EtM = accounts[4]
		const addressSDYOgj = accounts[1]
//		await BancorV2_ZapIn_General_V1_1nUMn0dB.toggleContractActive.call({from: accounts[3]});
//		const addressDaGWmqV = await BancorV2_ZapIn_General_V1_1nUMn0dB.inCaseTokengetsStuck.call(addressFT3EtM, {from: accounts[2]});
//		await BancorV2_ZapIn_General_V1_1nUMn0dB.stopInEmergency.call({from: accounts[4]});
//		await BancorV2_ZapIn_General_V1_1nUMn0dB.renounceOwnership.call({from: accounts[3]});
//		const addressBzUmQOL = await BancorV2_ZapIn_General_V1_1nUMn0dB.inCaseTokengetsStuck.call(addressSDYOgj, {from: accounts[4]});

		await expect(BancorV2_ZapIn_General_V1_1nUMn0dB.toggleContractActive.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uint0XpKu6 = BigInt("477")
		const BancorV2_ZapIn_General_V1_1arrQVD = await BancorV2_ZapIn_General_V1_1.new(uint0XpKu6, {from: accounts[0]});
		const addresso2do894 = await BancorV2_ZapIn_General_V1_1arrQVD.owner.call({from: accounts[1]});
//		await BancorV2_ZapIn_General_V1_1arrQVD.renounceOwnership.call({from: accounts[0]});
//		await BancorV2_ZapIn_General_V1_1arrQVD.onlyOwner.call({from: accounts[0]});
		await BancorV2_ZapIn_General_V1_1arrQVD.renounceOwnership.call({from: accounts[0]});
//		await BancorV2_ZapIn_General_V1_1arrQVD.nonReentrant.call({from: accounts[3]});

		assert.equal(addresso2do894, 0xE826E6Ec5816bF91c05E28E3DAe7A78f51035597)
		await expect(BancorV2_ZapIn_General_V1_1arrQVD.renounceOwnership.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintDoUgZTT = BigInt("1843")
		const BancorV2_ZapIn_General_V1_1iqSbavX = await BancorV2_ZapIn_General_V1_1.new(uintDoUgZTT, {from: accounts[4]});
		const addresstpthvLT = accounts[0]
		const addressSu65amI = accounts[4]
		const addressG0S2G0I = accounts[1]
//		const addressnmJFPhp = await BancorV2_ZapIn_General_V1_1iqSbavX.inCaseTokengetsStuck.call(addresstpthvLT, {from: accounts[4]});
//		const addresseirUh5Q = await BancorV2_ZapIn_General_V1_1iqSbavX.transferOwnership.call(addressSu65amI, {from: accounts[1]});
//		const addressLkOjpUd = await BancorV2_ZapIn_General_V1_1iqSbavX.owner.call({from: accounts[4]});
//		await BancorV2_ZapIn_General_V1_1iqSbavX.renounceOwnership.call({from: accounts[2]});
//		const addressMV6iHI7 = await BancorV2_ZapIn_General_V1_1iqSbavX.transferOwnership.call(addressG0S2G0I, {from: accounts[3]});

		await expect(BancorV2_ZapIn_General_V1_1iqSbavX.inCaseTokengetsStuck.call(addresstpthvLT, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintKYfIcp9 = BigInt("79")
		const BancorV2_ZapIn_General_V1_1RDT2Q2E = await BancorV2_ZapIn_General_V1_1.new(uintKYfIcp9, {from: accounts[3]});
		const bytemuJcvxa = "0x1b0b0b1601171609161c1e0c200917191a10020613"
		const addressSuK5DVY = accounts[3]
		const addressBp5JfdC = accounts[1]
		const uintBN7bBdm = BigInt("569")
		const uintFKXHlmq = BigInt("1266")
		const addressNncnlMk = accounts[3]
		const addresskGfWKiF = "0x0000000000000000000000000000000000000001"
		const addressUOSZAnn = accounts[0]
		const uintISGcmwa = BigInt("367")
//		const uint256sZL0V7W = await BancorV2_ZapIn_General_V1_1RDT2Q2E.ZapInSingleSided.call(addressUOSZAnn, addresskGfWKiF, addressNncnlMk, uintFKXHlmq, uintBN7bBdm, addressBp5JfdC, addressSuK5DVY, bytemuJcvxa, {from: accounts[3]});
//		const uint16GYKPkM6 = await BancorV2_ZapIn_General_V1_1RDT2Q2E.set_new_goodwill.call(uintISGcmwa, {from: accounts[1]});
//		const addressDS1rbeb = await BancorV2_ZapIn_General_V1_1RDT2Q2E.owner.call({from: accounts[5]});

		await expect(BancorV2_ZapIn_General_V1_1RDT2Q2E.ZapInSingleSided.call(addressUOSZAnn, addresskGfWKiF, addressNncnlMk, uintFKXHlmq, uintBN7bBdm, addressBp5JfdC, addressSuK5DVY, bytemuJcvxa, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintA3EG3AG = BigInt("79")
		const BancorV2_ZapIn_General_V1_1RDT2Q2E = await BancorV2_ZapIn_General_V1_1.new(uintA3EG3AG, {from: accounts[3]});
		const addressbBOju6 = accounts[2]
		const uintVfTeK4V = BigInt("390")
//		await BancorV2_ZapIn_General_V1_1RDT2Q2E.withdraw.call({from: accounts[3]});
//		const addresszRCbJcr = await BancorV2_ZapIn_General_V1_1RDT2Q2E.inCaseTokengetsStuck.call(addressbBOju6, {from: accounts[0]});
//		const addressz7DWmck = await BancorV2_ZapIn_General_V1_1RDT2Q2E.owner.call({from: accounts[4]});
//		const uint16GYKPkM6 = await BancorV2_ZapIn_General_V1_1RDT2Q2E.set_new_goodwill.call(uintVfTeK4V, {from: accounts[1]});
//		await BancorV2_ZapIn_General_V1_1RDT2Q2E.renounceOwnership.call({from: accounts[0]});

		await expect(BancorV2_ZapIn_General_V1_1RDT2Q2E.withdraw.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintt2CepLx = BigInt("79")
		const BancorV2_ZapIn_General_V1_1RDT2Q2E = await BancorV2_ZapIn_General_V1_1.new(uintt2CepLx, {from: accounts[3]});
		const addressLN4MCHl = "0x0000000000000000000000000000000000000001"
		const uintSNUiW3n = BigInt("346")
		const addressaVdGPzY = await BancorV2_ZapIn_General_V1_1RDT2Q2E.transferOwnership.call(addressLN4MCHl, {from: accounts[3]});
//		const uint16GYKPkM6 = await BancorV2_ZapIn_General_V1_1RDT2Q2E.set_new_goodwill.call(uintSNUiW3n, {from: accounts[1]});

		await expect(BancorV2_ZapIn_General_V1_1RDT2Q2E.set_new_goodwill.call(uintSNUiW3n, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintZelEkj = BigInt("95")
		const BancorV2_ZapIn_General_V1_10IqNtt = await BancorV2_ZapIn_General_V1_1.new(uintZelEkj, {from: "0x0000000000000000000000000000000000000001"});
		const uintnwp61ya = BigInt("765")
		await BancorV2_ZapIn_General_V1_10IqNtt.withdraw.call({from: accounts[1]});
		const uint16XctAkRo = await BancorV2_ZapIn_General_V1_10IqNtt.set_new_goodwill.call(uintnwp61ya, {from: accounts[1]});
		await BancorV2_ZapIn_General_V1_10IqNtt.renounceOwnership.call({from: accounts[4]});
		await BancorV2_ZapIn_General_V1_10IqNtt.toggleContractActive.call({from: accounts[4]});
	});
})