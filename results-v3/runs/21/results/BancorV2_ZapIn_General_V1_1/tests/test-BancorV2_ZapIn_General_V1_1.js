const BancorV2_ZapIn_General_V1_1 = artifacts.require("BancorV2_ZapIn_General_V1_1");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('BancorV2_ZapIn_General_V1_1', (accounts) => {
	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintJ5FK3v5 = BigInt("535")
		const BancorV2_ZapIn_General_V1_1MBgYTB7 = await BancorV2_ZapIn_General_V1_1.new(uintJ5FK3v5, {from: accounts[3]});
		const addressgGJ8So8 = accounts[1]
		const uintPzAvsKw = BigInt("1482")
		const addressbzbtecO = accounts[2]
		const addressUIVzJiJ = await BancorV2_ZapIn_General_V1_1MBgYTB7.inCaseTokengetsStuck.call(addressgGJ8So8, {from: accounts[0]});
		await BancorV2_ZapIn_General_V1_1MBgYTB7.onlyOwner.call({from: accounts[0]});
		const uint16xwdM69q = await BancorV2_ZapIn_General_V1_1MBgYTB7.set_new_goodwill.call(uintPzAvsKw, {from: accounts[5]});
		const addressifPxokL = await BancorV2_ZapIn_General_V1_1MBgYTB7.transferOwnership.call(addressbzbtecO, {from: accounts[2]});

		await expect(BancorV2_ZapIn_General_V1_1MBgYTB7.inCaseTokengetsStuck.call(addressgGJ8So8, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uint87HXza = BigInt("1952")
		const BancorV2_ZapIn_General_V1_1PnDfOhp = await BancorV2_ZapIn_General_V1_1.new(uint87HXza, {from: accounts[3]});
		const byterLTp1vP = "0x091f1d0f030e0114021b141a1206091d051612161a041402050612"
		const addressNFJsMxg = accounts[0]
		const addressqpZiQFZ = accounts[2]
		const uintg5r7SGm = BigInt("1662")
		const uintwCUceXl = BigInt("143")
		const addressudzNXB8 = accounts[2]
		const addressQUKAul = accounts[4]
		const addresslMCxUM = "0x0000000000000000000000000000000000000001"
		const uintpxDTZzB = BigInt("804")
		const addressybTAHrA = "0x0000000000000000000000000000000000000001"
		const uint256GStfcgg = await BancorV2_ZapIn_General_V1_1PnDfOhp.ZapInSingleSided.call(addresslMCxUM, addressQUKAul, addressudzNXB8, uintwCUceXl, uintg5r7SGm, addressqpZiQFZ, addressNFJsMxg, byterLTp1vP, {from: accounts[4]});
		const uint16weCXuue = await BancorV2_ZapIn_General_V1_1PnDfOhp.set_new_goodwill.call(uintpxDTZzB, {from: accounts[1]});
		await BancorV2_ZapIn_General_V1_1PnDfOhp.toggleContractActive.call({from: accounts[0]});
		await BancorV2_ZapIn_General_V1_1PnDfOhp.nonReentrant.call({from: accounts[1]});
		const addressjIdlHj = await BancorV2_ZapIn_General_V1_1PnDfOhp.owner.call({from: accounts[4]});
		const addressGpLlPBG = await BancorV2_ZapIn_General_V1_1PnDfOhp.transferOwnership.call(addressybTAHrA, {from: accounts[2]});

		await expect(BancorV2_ZapIn_General_V1_1PnDfOhp.ZapInSingleSided.call(addresslMCxUM, addressQUKAul, addressudzNXB8, uintwCUceXl, uintg5r7SGm, addressqpZiQFZ, addressNFJsMxg, byterLTp1vP, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintemm0cfP = BigInt("1840")
		const BancorV2_ZapIn_General_V1_1klxoGPZ = await BancorV2_ZapIn_General_V1_1.new(uintemm0cfP, {from: accounts[1]});
		const uintpJDn7pC = BigInt("480")
		const bytetaOqgit = "0x081d07030c0613130f17051e0d09190702100d1f1a16110d0d"
		const addresspBDSGYx = accounts[3]
		const addressYa1YCtF = accounts[1]
		const uintBCWVVqu = BigInt("688")
		const uintvvsjYl7 = BigInt("1871")
		const addressMpwTefE = accounts[3]
		const addressaIHBpOW = accounts[5]
		const addresslXQjWb = accounts[1]
		await BancorV2_ZapIn_General_V1_1klxoGPZ.nonReentrant.call({from: accounts[4]});
		const uint163YKDk3 = await BancorV2_ZapIn_General_V1_1klxoGPZ.set_new_goodwill.call(uintpJDn7pC, {from: "0x0000000000000000000000000000000000000001"});
		const uint256SHVQ1km = await BancorV2_ZapIn_General_V1_1klxoGPZ.ZapInSingleSided.call(addresslXQjWb, addressaIHBpOW, addressMpwTefE, uintvvsjYl7, uintBCWVVqu, addressYa1YCtF, addresspBDSGYx, bytetaOqgit, {from: accounts[4]});
		await BancorV2_ZapIn_General_V1_1klxoGPZ.stopInEmergency.call({from: accounts[0]});

		await expect(BancorV2_ZapIn_General_V1_1klxoGPZ.nonReentrant.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintxXCbCqS = BigInt("552")
		const BancorV2_ZapIn_General_V1_1LwpfMds = await BancorV2_ZapIn_General_V1_1.new(uintxXCbCqS, {from: "0x0000000000000000000000000000000000000001"});
		await BancorV2_ZapIn_General_V1_1LwpfMds.toggleContractActive.call({from: accounts[3]});
		await BancorV2_ZapIn_General_V1_1LwpfMds.stopInEmergency.call({from: accounts[2]});
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintrWFIXjS = BigInt("67")
		const BancorV2_ZapIn_General_V1_1WzXia4 = await BancorV2_ZapIn_General_V1_1.new(uintrWFIXjS, {from: accounts[3]});
		await BancorV2_ZapIn_General_V1_1WzXia4.toggleContractActive.call({from: accounts[3]});
		await BancorV2_ZapIn_General_V1_1WzXia4.stopInEmergency.call({from: accounts[4]});

		await expect(BancorV2_ZapIn_General_V1_1WzXia4.toggleContractActive.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintDESjxXx = BigInt("67")
		const BancorV2_ZapIn_General_V1_1WzXia4 = await BancorV2_ZapIn_General_V1_1.new(uintDESjxXx, {from: accounts[3]});
		const addressQDdpaF5 = accounts[0]
		const addressphZKyXn = accounts[4]
		const addressvk794DK = await BancorV2_ZapIn_General_V1_1WzXia4.transferOwnership.call(addressQDdpaF5, {from: accounts[3]});
		const addressqryQZHf = await BancorV2_ZapIn_General_V1_1WzXia4.inCaseTokengetsStuck.call(addressphZKyXn, {from: accounts[2]});

		await expect(BancorV2_ZapIn_General_V1_1WzXia4.inCaseTokengetsStuck.call(addressphZKyXn, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintG3B1fT9 = BigInt("67")
		const BancorV2_ZapIn_General_V1_1WzXia4 = await BancorV2_ZapIn_General_V1_1.new(uintG3B1fT9, {from: accounts[3]});
		const addresshOo8N8 = accounts[4]
		await BancorV2_ZapIn_General_V1_1WzXia4.renounceOwnership.call({from: accounts[3]});
		const addressqryQZHf = await BancorV2_ZapIn_General_V1_1WzXia4.inCaseTokengetsStuck.call(addresshOo8N8, {from: accounts[2]});

		await expect(BancorV2_ZapIn_General_V1_1WzXia4.renounceOwnership.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintYrPMti8 = BigInt("67")
		const BancorV2_ZapIn_General_V1_1WzXia4 = await BancorV2_ZapIn_General_V1_1.new(uintYrPMti8, {from: accounts[3]});
		const addressAR9fvUP = accounts[3]
		const addresshwANEdk = await BancorV2_ZapIn_General_V1_1WzXia4.owner.call({from: accounts[2]});
		const addressqryQZHf = await BancorV2_ZapIn_General_V1_1WzXia4.inCaseTokengetsStuck.call(addressAR9fvUP, {from: accounts[2]});

		assert.equal(addresshwANEdk, 0x3c7A140534E07fb363F18f587632B751f3102914)
		await expect(BancorV2_ZapIn_General_V1_1WzXia4.inCaseTokengetsStuck.call(addressAR9fvUP, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintgIHeUmD = BigInt("67")
		const BancorV2_ZapIn_General_V1_1WzXia4 = await BancorV2_ZapIn_General_V1_1.new(uintgIHeUmD, {from: accounts[3]});
		const addressRMigeDF = "0x0000000000000000000000000000000000000001"
		const addressnFWtjov = accounts[4]
		const addressmyPCsxm = accounts[2]
		const addressr97abH9 = await BancorV2_ZapIn_General_V1_1WzXia4.inCaseTokengetsStuck.call(addressRMigeDF, {from: accounts[3]});
		const addressqryQZHf = await BancorV2_ZapIn_General_V1_1WzXia4.inCaseTokengetsStuck.call(addressnFWtjov, {from: accounts[2]});
		const addressSfzPIZ2 = await BancorV2_ZapIn_General_V1_1WzXia4.inCaseTokengetsStuck.call(addressmyPCsxm, {from: accounts[4]});

		await expect(BancorV2_ZapIn_General_V1_1WzXia4.inCaseTokengetsStuck.call(addressRMigeDF, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintoXUgbs = BigInt("67")
		const BancorV2_ZapIn_General_V1_1WzXia4 = await BancorV2_ZapIn_General_V1_1.new(uintoXUgbs, {from: accounts[3]});
		const addressWSOH84Q = accounts[4]
		const addressmWtozRx = accounts[4]
		const addressrd1Us4D = await BancorV2_ZapIn_General_V1_1WzXia4.owner.call({from: accounts[0]});
		await BancorV2_ZapIn_General_V1_1WzXia4.withdraw.call({from: accounts[3]});
		const addressqryQZHf = await BancorV2_ZapIn_General_V1_1WzXia4.inCaseTokengetsStuck.call(addressWSOH84Q, {from: accounts[2]});
		const addressz1TVlRm = await BancorV2_ZapIn_General_V1_1WzXia4.transferOwnership.call(addressmWtozRx, {from: accounts[2]});

		assert.equal(addressrd1Us4D, 0x3c7A140534E07fb363F18f587632B751f3102914)
		await expect(BancorV2_ZapIn_General_V1_1WzXia4.withdraw.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintDK2IfQc = BigInt("67")
		const BancorV2_ZapIn_General_V1_1WzXia4 = await BancorV2_ZapIn_General_V1_1.new(uintDK2IfQc, {from: accounts[3]});
		const uintgFFRdzx = BigInt("1969")
		const byteI4RLGKT = "0x1b15180611200805071b1b060c100a050d011119170e0a020119040f0b1509"
		const addressM0GwqRg = accounts[3]
		const addressWQP2LLZ = accounts[2]
		const uint3QeZp3 = BigInt("1463")
		const uintJ6UscrS = BigInt("1622")
		const addressdrtbjMt = accounts[2]
		const addresslPiehtc = accounts[3]
		const addressT5ciyX = accounts[0]
		const uint16ljS2q40 = await BancorV2_ZapIn_General_V1_1WzXia4.set_new_goodwill.call(uintgFFRdzx, {from: accounts[3]});
		const uint256oZF95bq = await BancorV2_ZapIn_General_V1_1WzXia4.ZapInSingleSided.call(addressT5ciyX, addresslPiehtc, addressdrtbjMt, uintJ6UscrS, uint3QeZp3, addressWQP2LLZ, addressM0GwqRg, byteI4RLGKT, {from: "0x0000000000000000000000000000000000000001"});
		await BancorV2_ZapIn_General_V1_1WzXia4.stopInEmergency.call({from: accounts[5]});

		await expect(BancorV2_ZapIn_General_V1_1WzXia4.ZapInSingleSided.call(addressT5ciyX, addresslPiehtc, addressdrtbjMt, uintJ6UscrS, uint3QeZp3, addressWQP2LLZ, addressM0GwqRg, byteI4RLGKT, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});
})