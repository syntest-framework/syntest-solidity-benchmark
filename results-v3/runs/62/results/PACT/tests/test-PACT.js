const PACT = artifacts.require("PACT");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('PACT', (accounts) => {
	it('test for PACT', async () => {
		const PACTHT4QECx = await PACT.new({from: accounts[0]});
		const addressMoVRKJA = accounts[4]
		const uintaplDMFj = BigInt("628")
		const addressNt0DvRE = accounts[2]
		const boolU6DZ9d1 = await PACTHT4QECx.setupRewards.call(addressMoVRKJA, {from: "0x0000000000000000000000000000000000000001"});
		const bool0WTFND = await PACTHT4QECx.burn.call(addressNt0DvRE, uintaplDMFj, {from: accounts[1]});
		const string7fu4uP = await PACTHT4QECx.symbol.call({from: accounts[2]});

		await expect(PACTHT4QECx.setupRewards.call(addressMoVRKJA, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTfTYZgih = await PACT.new({from: accounts[3]});
		const addresspwPHrPF = accounts[3]
		const addresshsKmFwo = accounts[3]
		const uintPiUCbkO = BigInt("1633")
		const addressKsOVa0e = accounts[0]
		const uintEeOPCV3 = await PACTfTYZgih.totalSupply.call({from: accounts[2]});
		const uint4CAW2G = await PACTfTYZgih.allowance.call(addresshsKmFwo, addresspwPHrPF, {from: accounts[1]});
		const boolI4lpvuB = await PACTfTYZgih.approve.call(addressKsOVa0e, uintPiUCbkO, {from: accounts[3]});

		assert.equal(boolI4lpvuB, true)
		assert.equal(uint4CAW2G, BigInt("0"))
		assert.equal(uintEeOPCV3, BigInt("1000000000000000000000000000"))
	});

	it('test for PACT', async () => {
		const PACTYTglDr7 = await PACT.new({from: accounts[3]});
		const addresslH62mO = accounts[4]
		const addressS24pMoM = accounts[3]
		const uintYqoZNdd = BigInt("1474")
		const addressiltSlMU = accounts[3]
		const addressMrUb32D = accounts[1]
		const uintHfBCMKg = await PACTYTglDr7.balanceOf.call(addresslH62mO, {from: accounts[0]});
		const boolQFOTlo7 = await PACTYTglDr7.setupTeam.call(addressS24pMoM, {from: accounts[4]});
		const boolrfWmmdR = await PACTYTglDr7.transfer.call(addressiltSlMU, uintYqoZNdd, {from: "0x0000000000000000000000000000000000000001"});
		const uintRqr7ZGB = await PACTYTglDr7.balanceOf.call(addressMrUb32D, {from: accounts[1]});

		assert.equal(uintHfBCMKg, BigInt("0"))
		await expect(PACTYTglDr7.setupTeam.call(addressS24pMoM, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTOkjyMHM = await PACT.new({from: accounts[4]});
		const addressDMbKx8c = accounts[1]
		const addressZ7YHAZX = accounts[0]
		const addressOyiKveI = accounts[1]
		const uintL5ITR03 = BigInt("909")
		const addresslHm0Rel = accounts[2]
		const uinta5LR8p = await PACTOkjyMHM.allowance.call(addressZ7YHAZX, addressDMbKx8c, {from: accounts[5]});
		const booly52frHJ = await PACTOkjyMHM.setupReserve.call(addressOyiKveI, {from: "0x0000000000000000000000000000000000000001"});
		const booldYoYOhL = await PACTOkjyMHM.approve.call(addresslHm0Rel, uintL5ITR03, {from: accounts[1]});
		const stringDIl4blw = await PACTOkjyMHM.name.call({from: accounts[2]});

		assert.equal(uinta5LR8p, BigInt("0"))
		await expect(PACTOkjyMHM.setupReserve.call(addressOyiKveI, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTVKVl8tO = await PACT.new({from: accounts[4]});
		const addressff0DZM5 = accounts[4]
		const boolsPDAJcq = await PACTVKVl8tO.setupBasePool.call(addressff0DZM5, {from: accounts[5]});
		const stringkTxqoex = await PACTVKVl8tO.name.call({from: accounts[1]});

		await expect(PACTVKVl8tO.setupBasePool.call(addressff0DZM5, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTjJsp9V = await PACT.new({from: accounts[2]});
		const addresscLiMe6G = accounts[3]
		const stringCHdlu7C = await PACTjJsp9V.name.call({from: "0x0000000000000000000000000000000000000001"});
		const booladxZtA = await PACTjJsp9V.setupRewards.call(addresscLiMe6G, {from: accounts[4]});

		assert.equal(stringCHdlu7C, "P2PB2B community token")
		await expect(PACTjJsp9V.setupRewards.call(addresscLiMe6G, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTVKVl8tO = await PACT.new({from: accounts[4]});
		const uintHmIE11N = BigInt("1972")
		const addressUxMr021 = accounts[4]
		const addressEaO0tdZ = accounts[4]
		const boolS0CrEbu = await PACTVKVl8tO.transfer.call(addressUxMr021, uintHmIE11N, {from: accounts[0]});
		const boolsPDAJcq = await PACTVKVl8tO.setupBasePool.call(addressEaO0tdZ, {from: accounts[5]});

		await expect(PACTVKVl8tO.transfer.call(addressUxMr021, uintHmIE11N, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTHgB3fZB = await PACT.new({from: accounts[1]});
		const uintbqKLW7R = BigInt("964")
		const addressSMsuyQ2 = accounts[1]
		const addressenTKfLU = "0x0000000000000000000000000000000000000001"
		const uintauee8kx = BigInt("1213")
		const addressE2TFmfE = accounts[1]
		const addressa5thBEn = accounts[4]
		const boolOwpAWiO = await PACTHgB3fZB.transferFrom.call(addressenTKfLU, addressSMsuyQ2, uintbqKLW7R, {from: accounts[5]});
		const boolUXB3QE3 = await PACTHgB3fZB.transferFrom.call(addressa5thBEn, addressE2TFmfE, uintauee8kx, {from: accounts[4]});

		await expect(PACTHgB3fZB.transferFrom.call(addressenTKfLU, addressSMsuyQ2, uintbqKLW7R, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTVKVl8tO = await PACT.new({from: accounts[4]});
		const addressoWZJdWi = accounts[3]
		const addressnpfkwsG = accounts[1]
		const uintUgOaCV = await PACTVKVl8tO.allowance.call(addressnpfkwsG, addressoWZJdWi, {from: accounts[4]});
		const stringQKgY91 = await PACTVKVl8tO.symbol.call({from: accounts[2]});

		assert.equal(stringQKgY91, "PACT")
		assert.equal(uintUgOaCV, BigInt("0"))
	});

	it('test for PACT', async () => {
		const PACTVKVl8tO = await PACT.new({from: accounts[4]});
		const uintyDNGIN6 = BigInt("1942")
		const addresstOkoqAZ = "0x0000000000000000000000000000000000000001"
		const stringkTxqoex = await PACTVKVl8tO.name.call({from: accounts[1]});
		const booliVNmC3R = await PACTVKVl8tO.burn.call(addresstOkoqAZ, uintyDNGIN6, {from: accounts[2]});

		assert.equal(stringkTxqoex, "P2PB2B community token")
		await expect(PACTVKVl8tO.burn.call(addresstOkoqAZ, uintyDNGIN6, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTVKVl8tO = await PACT.new({from: accounts[4]});
		const addresspfGqriZ = "0x0000000000000000000000000000000000000001"
		const stringkTxqoex = await PACTVKVl8tO.name.call({from: accounts[1]});
		const boolad4Bv7t = await PACTVKVl8tO.setupFarming.call(addresspfGqriZ, {from: accounts[4]});
		const stringYRI7xz = await PACTVKVl8tO.symbol.call({from: accounts[3]});

		assert.equal(stringkTxqoex, "P2PB2B community token")
		await expect(PACTVKVl8tO.setupFarming.call(addresspfGqriZ, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTVKVl8tO = await PACT.new({from: accounts[4]});
		const uint8Dpd0jE = await PACTVKVl8tO.decimals.call({from: accounts[4]});
		const stringkTxqoex = await PACTVKVl8tO.name.call({from: accounts[1]});

		assert.equal(stringkTxqoex, "P2PB2B community token")
		assert.equal(uint8Dpd0jE, BigInt("18"))
	});

	it('test for PACT', async () => {
		const PACTqbNnT76 = await PACT.new({from: "0x0000000000000000000000000000000000000001"});
		const uintFDcLRF6 = BigInt("823")
		const addresszb50ea = accounts[0]
		const stringNG3sgug = await PACTqbNnT76.name.call({from: accounts[4]});
		const bool7BHbT4 = await PACTqbNnT76.transfer.call(addresszb50ea, uintFDcLRF6, {from: accounts[2]});
	});
})