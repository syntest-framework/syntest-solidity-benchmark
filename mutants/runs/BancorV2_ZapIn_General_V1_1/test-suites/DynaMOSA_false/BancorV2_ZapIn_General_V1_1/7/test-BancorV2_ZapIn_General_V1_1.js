const BancorV2_ZapIn_General_V1_1 = artifacts.require("BancorV2_ZapIn_General_V1_1");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('BancorV2_ZapIn_General_V1_1', (accounts) => {
	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintwu9ImmD = BigInt("236")
		const BancorV2_ZapIn_General_V1_1avkJ3j2 = await BancorV2_ZapIn_General_V1_1.new(uintwu9ImmD, {from: accounts[3]});
		const uintkO2y19b = BigInt("1610")
		const uintt6hki3c = BigInt("937")
		const addressdYS08U = accounts[2]
		const uint165y4Fd1 = await BancorV2_ZapIn_General_V1_1avkJ3j2.set_new_goodwill.call(uintkO2y19b, {from: accounts[5]});
		const uint16YfOaBS = await BancorV2_ZapIn_General_V1_1avkJ3j2.set_new_goodwill.call(uintt6hki3c, {from: accounts[4]});
		const addressSKAv9SW = await BancorV2_ZapIn_General_V1_1avkJ3j2.transferOwnership.call(addressdYS08U, {from: accounts[0]});
		await BancorV2_ZapIn_General_V1_1avkJ3j2.onlyOwner.call({from: accounts[0]});
		await BancorV2_ZapIn_General_V1_1avkJ3j2.toggleContractActive.call({from: accounts[2]});

		await expect(BancorV2_ZapIn_General_V1_1avkJ3j2.set_new_goodwill.call(uintkO2y19b, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintGNSYIpQ = BigInt("519")
		const BancorV2_ZapIn_General_V1_1RmfE64n = await BancorV2_ZapIn_General_V1_1.new(uintGNSYIpQ, {from: accounts[2]});
		const byteKN4leB8 = "0x1c0f1d1f1901101009070516161101"
		const addressIJtlBXl = accounts[5]
		const addressqodpY4P = accounts[4]
		const uintMpXMAgb = BigInt("665")
		const uintM2aCykq = BigInt("597")
		const addresszDHHJ1 = "0x0000000000000000000000000000000000000001"
		const addressJTvFT4 = accounts[4]
		const addressW3EqlPK = accounts[4]
		const addresslTufYui = accounts[4]
		const booljcKBlIk = await BancorV2_ZapIn_General_V1_1RmfE64n.isOwner.call({from: accounts[2]});
		await BancorV2_ZapIn_General_V1_1RmfE64n.onlyOwner.call({from: accounts[2]});
		const uint256uzbymy = await BancorV2_ZapIn_General_V1_1RmfE64n.ZapInSingleSided.call(addressW3EqlPK, addressJTvFT4, addresszDHHJ1, uintM2aCykq, uintMpXMAgb, addressqodpY4P, addressIJtlBXl, byteKN4leB8, {from: accounts[1]});
		const addressyiaFOqw = await BancorV2_ZapIn_General_V1_1RmfE64n.owner.call({from: accounts[4]});
		const addressOhmYno1 = await BancorV2_ZapIn_General_V1_1RmfE64n.inCaseTokengetsStuck.call(addresslTufYui, {from: accounts[2]});

		assert.equal(booljcKBlIk, true)
		await expect(BancorV2_ZapIn_General_V1_1RmfE64n.onlyOwner.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintIM5G6Ug = BigInt("709")
		const BancorV2_ZapIn_General_V1_1VYzkSCe = await BancorV2_ZapIn_General_V1_1.new(uintIM5G6Ug, {from: "0x0000000000000000000000000000000000000001"});
		const addressRKHkkh = accounts[3]
		const addressPwuWiP = accounts[0]
		const boolHmIX2yd = await BancorV2_ZapIn_General_V1_1VYzkSCe.isOwner.call({from: accounts[5]});
		const addressv2Wez6N = await BancorV2_ZapIn_General_V1_1VYzkSCe.inCaseTokengetsStuck.call(addressRKHkkh, {from: accounts[0]});
		const addressXFxCRhL = await BancorV2_ZapIn_General_V1_1VYzkSCe.transferOwnership.call(addressPwuWiP, {from: accounts[5]});
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintWVesex = BigInt("463")
		const BancorV2_ZapIn_General_V1_104QHxH = await BancorV2_ZapIn_General_V1_1.new(uintWVesex, {from: accounts[2]});
		const addressbRibsML = accounts[4]
		const boolf7TO2sp = await BancorV2_ZapIn_General_V1_104QHxH.isOwner.call({from: accounts[0]});
		const addresshkmxE2 = await BancorV2_ZapIn_General_V1_104QHxH.inCaseTokengetsStuck.call(addressbRibsML, {from: accounts[2]});
		const addressbUtPvFs = await BancorV2_ZapIn_General_V1_104QHxH.owner.call({from: accounts[2]});
		await BancorV2_ZapIn_General_V1_104QHxH.withdraw.call({from: accounts[1]});

		assert.equal(boolf7TO2sp, false)
		await expect(BancorV2_ZapIn_General_V1_104QHxH.inCaseTokengetsStuck.call(addressbRibsML, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintha4syx = BigInt("1683")
		const BancorV2_ZapIn_General_V1_1Wdy8qaj = await BancorV2_ZapIn_General_V1_1.new(uintha4syx, {from: accounts[2]});
		const bytevNFY9Od = "0x1d0c081b11090b100b1101"
		const addressYHJ0efc = "0x0000000000000000000000000000000000000001"
		const addressGtUSzXm = accounts[5]
		const uintMKjeCxe = BigInt("521")
		const uintFXHZUD = BigInt("359")
		const addressY879PAO = accounts[0]
		const addressElgMIpM = accounts[4]
		const addressJmwyd9Q = accounts[1]
		const uintJUYpDES = BigInt("2047")
		const addressmEQWaPP = accounts[1]
		const uint256cF0TXEl = await BancorV2_ZapIn_General_V1_1Wdy8qaj.ZapInSingleSided.call(addressJmwyd9Q, addressElgMIpM, addressY879PAO, uintFXHZUD, uintMKjeCxe, addressGtUSzXm, addressYHJ0efc, bytevNFY9Od, {from: accounts[3]});
		const uint16YSYutCY = await BancorV2_ZapIn_General_V1_1Wdy8qaj.set_new_goodwill.call(uintJUYpDES, {from: accounts[2]});
		await BancorV2_ZapIn_General_V1_1Wdy8qaj.onlyOwner.call({from: accounts[1]});
		const boolBUZY0Z = await BancorV2_ZapIn_General_V1_1Wdy8qaj.isOwner.call({from: accounts[2]});
		const addressUDOJyJ7 = await BancorV2_ZapIn_General_V1_1Wdy8qaj.toPayable.call(addressmEQWaPP, {from: "0x0000000000000000000000000000000000000001"});
		await BancorV2_ZapIn_General_V1_1Wdy8qaj.stopInEmergency.call({from: accounts[3]});

		await expect(BancorV2_ZapIn_General_V1_1Wdy8qaj.ZapInSingleSided.call(addressJmwyd9Q, addressElgMIpM, addressY879PAO, uintFXHZUD, uintMKjeCxe, addressGtUSzXm, addressYHJ0efc, bytevNFY9Od, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintHBd7gUA = BigInt("410")
		const BancorV2_ZapIn_General_V1_1d4Nmi0f = await BancorV2_ZapIn_General_V1_1.new(uintHBd7gUA, {from: accounts[1]});
		const addresstsCGYUq = accounts[4]
		const addressYZPMCPM = accounts[0]
		const addressVh6A0yJ = await BancorV2_ZapIn_General_V1_1d4Nmi0f.transferOwnership.call(addresstsCGYUq, {from: accounts[1]});
		await BancorV2_ZapIn_General_V1_1d4Nmi0f.nonReentrant.call({from: accounts[1]});
		await BancorV2_ZapIn_General_V1_1d4Nmi0f.renounceOwnership.call({from: accounts[4]});
		const addressxwxMQAE = await BancorV2_ZapIn_General_V1_1d4Nmi0f.transferOwnership.call(addressYZPMCPM, {from: accounts[4]});

		await expect(BancorV2_ZapIn_General_V1_1d4Nmi0f.nonReentrant.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintbjBKdC6 = BigInt("426")
		const BancorV2_ZapIn_General_V1_1T89ptUN = await BancorV2_ZapIn_General_V1_1.new(uintbjBKdC6, {from: accounts[1]});
		const byteuS7z1Wi = "0x0a0f1c1614091c0c1310061112010815030210101d1f020c0d2008"
		const addresseXFxQeP = accounts[2]
		const addresslQjq2c4 = accounts[2]
		const uintC8TRCt2 = BigInt("418")
		const uintRwSZAhP = BigInt("1496")
		const addressMHAizYQ = accounts[3]
		const addresstzlVR7c = accounts[0]
		const addresscTAYCTW = accounts[0]
		const addresstzx1aKG = accounts[1]
		const byteYBYf6ip = "0x1d0d1e1f1b1d0f09170c0c070910041e111f1f0a01081f201300"
		const addresscYeaQl0 = accounts[1]
		const addresshHrTy1h = accounts[0]
		const uintpm8zDTB = BigInt("975")
		const uintQQDbT1j = BigInt("641")
		const addressFtbmjrz = accounts[0]
		const addressXzkOQND = accounts[2]
		const addressJ0cLHO7 = accounts[2]
		const addressnkybAVZ = await BancorV2_ZapIn_General_V1_1T89ptUN.owner.call({from: "0x0000000000000000000000000000000000000001"});
		await BancorV2_ZapIn_General_V1_1T89ptUN.stopInEmergency.call({from: "0x0000000000000000000000000000000000000001"});
		const uint25604CyPn = await BancorV2_ZapIn_General_V1_1T89ptUN.ZapInSingleSided.call(addresscTAYCTW, addresstzlVR7c, addressMHAizYQ, uintRwSZAhP, uintC8TRCt2, addresslQjq2c4, addresseXFxQeP, byteuS7z1Wi, {from: accounts[0]});
		const addressRw83mdK = await BancorV2_ZapIn_General_V1_1T89ptUN.transferOwnership.call(addresstzx1aKG, {from: accounts[1]});
		const uint256nc73Ant = await BancorV2_ZapIn_General_V1_1T89ptUN.ZapInSingleSided.call(addressJ0cLHO7, addressXzkOQND, addressFtbmjrz, uintQQDbT1j, uintpm8zDTB, addresshHrTy1h, addresscYeaQl0, byteYBYf6ip, {from: accounts[0]});
		await BancorV2_ZapIn_General_V1_1T89ptUN.renounceOwnership.call({from: accounts[1]});

		assert.equal(addressnkybAVZ, 0xA2aD8bD1C2951B691c84cfc4B366038972E47aa7)
		await expect(BancorV2_ZapIn_General_V1_1T89ptUN.stopInEmergency.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintNt5sKvp = BigInt("1683")
		const BancorV2_ZapIn_General_V1_1Wdy8qaj = await BancorV2_ZapIn_General_V1_1.new(uintNt5sKvp, {from: accounts[2]});
		const uintvc8a9y = BigInt("2058")
		const uint6UnfF1 = BigInt("886")
		const addressChRZt2g = accounts[1]
		const addresspB6vWoY = accounts[0]
		const uint16YSYutCY = await BancorV2_ZapIn_General_V1_1Wdy8qaj.set_new_goodwill.call(uintvc8a9y, {from: accounts[2]});
		await BancorV2_ZapIn_General_V1_1Wdy8qaj.onlyOwner.call({from: accounts[1]});
		await BancorV2_ZapIn_General_V1_1Wdy8qaj.renounceOwnership.call({from: accounts[0]});
		const boolBUZY0Z = await BancorV2_ZapIn_General_V1_1Wdy8qaj.isOwner.call({from: accounts[2]});
		const uint16r6xIJkF = await BancorV2_ZapIn_General_V1_1Wdy8qaj.set_new_goodwill.call(uint6UnfF1, {from: accounts[4]});
		await BancorV2_ZapIn_General_V1_1Wdy8qaj.toggleContractActive.call({from: accounts[0]});
		const addressUDOJyJ7 = await BancorV2_ZapIn_General_V1_1Wdy8qaj.toPayable.call(addressChRZt2g, {from: "0x0000000000000000000000000000000000000001"});
		const addressbHdNlx = await BancorV2_ZapIn_General_V1_1Wdy8qaj.transferOwnership.call(addresspB6vWoY, {from: accounts[3]});
		await BancorV2_ZapIn_General_V1_1Wdy8qaj.stopInEmergency.call({from: accounts[3]});
		await BancorV2_ZapIn_General_V1_1Wdy8qaj.nonReentrant.call({from: accounts[0]});
		await BancorV2_ZapIn_General_V1_1Wdy8qaj.renounceOwnership.call({from: accounts[0]});

		await expect(BancorV2_ZapIn_General_V1_1Wdy8qaj.onlyOwner.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintA4r8U7x = BigInt("1683")
		const BancorV2_ZapIn_General_V1_1Wdy8qaj = await BancorV2_ZapIn_General_V1_1.new(uintA4r8U7x, {from: accounts[2]});
		const uintx0Vdta = BigInt("2047")
		const uint16YSYutCY = await BancorV2_ZapIn_General_V1_1Wdy8qaj.set_new_goodwill.call(uintx0Vdta, {from: accounts[2]});
		await BancorV2_ZapIn_General_V1_1Wdy8qaj.renounceOwnership.call({from: accounts[2]});
		const boolBUZY0Z = await BancorV2_ZapIn_General_V1_1Wdy8qaj.isOwner.call({from: accounts[2]});
		const booltqtrc7V = await BancorV2_ZapIn_General_V1_1Wdy8qaj.isOwner.call({from: accounts[2]});
		await BancorV2_ZapIn_General_V1_1Wdy8qaj.stopInEmergency.call({from: accounts[3]});

		await expect(BancorV2_ZapIn_General_V1_1Wdy8qaj.renounceOwnership.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintaT5kXU0 = BigInt("395")
		const BancorV2_ZapIn_General_V1_1uKM7jW3 = await BancorV2_ZapIn_General_V1_1.new(uintaT5kXU0, {from: accounts[2]});
		const addressFiiZ1eB = accounts[4]
		const bytekeGHADq = "0x17091a071d0510181f0a0415160a060c0802141e1a19160b19070f12011c"
		const addressf3AsvJ = accounts[2]
		const addressw6GDItK = accounts[0]
		const uintU84A343 = BigInt("1612")
		const uintgOC70a = BigInt("42")
		const address8LszR7 = accounts[1]
		const addresstOxRm7b = accounts[0]
		const addressYaPuYJU = accounts[1]
		const addressQlZX27b = accounts[1]
		const bytesBjHDsa = "0x201d1706000717050d000c1513"
		const addressOWMaeE = accounts[5]
		const addressK32VSj = "0x0000000000000000000000000000000000000001"
		const uintaoaArTY = BigInt("1214")
		const uintNs5pnwH = BigInt("1938")
		const addressLAxB2p1 = accounts[1]
		const addressjsxkBQX = accounts[1]
		const addressTgT16Us = accounts[1]
		await BancorV2_ZapIn_General_V1_1uKM7jW3.withdraw.call({from: accounts[2]});
		const addressmigX7BC = await BancorV2_ZapIn_General_V1_1uKM7jW3.inCaseTokengetsStuck.call(addressFiiZ1eB, {from: accounts[1]});
		const uint256AF2LgJ6 = await BancorV2_ZapIn_General_V1_1uKM7jW3.ZapInSingleSided.call(addressYaPuYJU, addresstOxRm7b, address8LszR7, uintgOC70a, uintU84A343, addressw6GDItK, addressf3AsvJ, bytekeGHADq, {from: accounts[5]});
		const addressqEdCg3S = await BancorV2_ZapIn_General_V1_1uKM7jW3.transferOwnership.call(addressQlZX27b, {from: "0x0000000000000000000000000000000000000001"});
		await BancorV2_ZapIn_General_V1_1uKM7jW3.renounceOwnership.call({from: accounts[3]});
		const uint256Y1r1t7 = await BancorV2_ZapIn_General_V1_1uKM7jW3.ZapInSingleSided.call(addressTgT16Us, addressjsxkBQX, addressLAxB2p1, uintNs5pnwH, uintaoaArTY, addressK32VSj, addressOWMaeE, bytesBjHDsa, {from: accounts[3]});

		await expect(BancorV2_ZapIn_General_V1_1uKM7jW3.withdraw.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintov2fxFQ = BigInt("1683")
		const BancorV2_ZapIn_General_V1_1Wdy8qaj = await BancorV2_ZapIn_General_V1_1.new(uintov2fxFQ, {from: accounts[2]});
		const byteM9IV2S = "0x1d0c081b11090b100b1101"
		const addressWpaq2rS = "0x0000000000000000000000000000000000000001"
		const addressRuZ9vFY = accounts[5]
		const uintJ74LRqd = BigInt("521")
		const uintQPcxSjm = BigInt("359")
		const addressRWkVCTi = accounts[0]
		const addresskJoZvrj = accounts[4]
		const addressq8qsFCc = accounts[1]
		const uintx7R51Br = BigInt("2047")
		await BancorV2_ZapIn_General_V1_1Wdy8qaj.toggleContractActive.call({from: accounts[2]});
		const uint256cF0TXEl = await BancorV2_ZapIn_General_V1_1Wdy8qaj.ZapInSingleSided.call(addressq8qsFCc, addresskJoZvrj, addressRWkVCTi, uintQPcxSjm, uintJ74LRqd, addressRuZ9vFY, addressWpaq2rS, byteM9IV2S, {from: accounts[3]});
		const uint16YSYutCY = await BancorV2_ZapIn_General_V1_1Wdy8qaj.set_new_goodwill.call(uintx7R51Br, {from: accounts[2]});
		const boolBUZY0Z = await BancorV2_ZapIn_General_V1_1Wdy8qaj.isOwner.call({from: accounts[2]});
		await BancorV2_ZapIn_General_V1_1Wdy8qaj.stopInEmergency.call({from: accounts[3]});

		await expect(BancorV2_ZapIn_General_V1_1Wdy8qaj.toggleContractActive.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});
})