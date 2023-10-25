const BAE = artifacts.require("BAE");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('BAE', (accounts) => {
	it('test for BAE', async () => {
		const addressCnG8oXD = accounts[0]
		const BAEl6JDWCK = await BAE.new(addressCnG8oXD, {from: accounts[0]});
		const uintWMUC0Zj = BigInt("399")
		const uintdU1AGZ = BigInt("1680")
		const uintoJ7iV49 = BigInt("748")
		const uintrpbOeQ = BigInt("1978")
		const uintvJ3Pfrz = BigInt("1356")
		const uintlpqOnbs = BigInt("1623")
		const uintxUjSqQ = BigInt("979")
		const uintx3HIAYU = BigInt("1188")
		const uintU0HIc7x = BigInt("1867")
//		const uint256ZLYX8C = await BAEl6JDWCK.resetAuction.call(uintoJ7iV49, uintdU1AGZ, uintWMUC0Zj, {from: accounts[3]});
//		const uint256uNifMM = await BAEl6JDWCK.bid.call(uintrpbOeQ, {from: accounts[0]});
//		const uint256b1OR7Yk = await BAEl6JDWCK.createAuction.call(uintx3HIAYU, uintxUjSqQ, uintlpqOnbs, uintvJ3Pfrz, {from: accounts[5]});
//		const uint256s44weRt = await BAEl6JDWCK.buy.call(uintU0HIc7x, {from: accounts[4]});

		await expect(BAEl6JDWCK.resetAuction.call(uintoJ7iV49, uintdU1AGZ, uintWMUC0Zj, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BAE', async () => {
		const addressNBXuDY0 = "0x0000000000000000000000000000000000000001"
		const BAEeFVwEiN = await BAE.new(addressNBXuDY0, {from: accounts[0]});
		const uintjoglzy = BigInt("1151")
		const uintU5FSqUD = BigInt("1911")
		const uinteSvChgQ = BigInt("933")
		const uintRyuHkSs = BigInt("409")
		const uintcyJE7X8 = BigInt("1686")
		const uinthXlmOnD = BigInt("106")
		const uintj1EiDK = BigInt("1763")
		const uintoQywc8U = BigInt("917")
//		const uint256RZOhtMc = await BAEeFVwEiN.bid.call(uintjoglzy, {from: accounts[2]});
//		const uint256f4T4bHe = await BAEeFVwEiN.bid.call(uintU5FSqUD, {from: accounts[0]});
//		const uint256jd1j0gT = await BAEeFVwEiN.concludeAuction.call(uinteSvChgQ, {from: accounts[3]});
//		const uint256eOGZznv = await BAEeFVwEiN.bid.call(uintRyuHkSs, {from: accounts[3]});
//		const uint256TgYyGm2 = await BAEeFVwEiN.createAuction.call(uintoQywc8U, uintj1EiDK, uinthXlmOnD, uintcyJE7X8, {from: accounts[2]});

		await expect(BAEeFVwEiN.bid.call(uintjoglzy, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for BAE', async () => {
		const addresseSb2edi = accounts[0]
		const BAEBcnupCi = await BAE.new(addresseSb2edi, {from: accounts[2]});
		const uintJ9rQG5s = BigInt("1384")
		const uintZSLJNrc = BigInt("181")
		const uintHJMqdck = BigInt("1023")
		const uintJ3tKhXa = BigInt("1693")
//		const uint256YeS4nn6 = await BAEBcnupCi.setAuctionFee.call(uintJ9rQG5s, {from: accounts[5]});
//		const uint256hBVScM8 = await BAEBcnupCi.resetAuction.call(uintJ3tKhXa, uintHJMqdck, uintZSLJNrc, {from: "0x0000000000000000000000000000000000000001"});

		await expect(BAEBcnupCi.setAuctionFee.call(uintJ9rQG5s, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for BAE', async () => {
		const addressR492lNg = accounts[4]
		const BAEe39XzA5 = await BAE.new(addressR492lNg, {from: accounts[5]});
		const uintImCetUB = BigInt("621")
		const uintSFN6LVy = BigInt("1122")
		const uintCCa0dUl = BigInt("1367")
		const uintcW19pRJ = BigInt("1374")
//		const uint256p36SLye = await BAEe39XzA5.concludeAuction.call(uintImCetUB, {from: accounts[5]});
//		const uint256GsQyjl0 = await BAEe39XzA5.resetAuction.call(uintcW19pRJ, uintCCa0dUl, uintSFN6LVy, {from: "0x0000000000000000000000000000000000000001"});

		await expect(BAEe39XzA5.concludeAuction.call(uintImCetUB, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for BAE', async () => {
		const addressqx6HA23 = "0x0000000000000000000000000000000000000001"
		const BAEQwQhcHL = await BAE.new(addressqx6HA23, {from: accounts[3]});
		const uintJ2lZGhG = BigInt("1932")
		const uintvkieFTJ = BigInt("702")
		const uintwSTvePV = BigInt("1135")
//		const uint256f2EOkg8 = await BAEQwQhcHL.buy.call(uintJ2lZGhG, {from: accounts[4]});
//		const uint256SjmhQUW = await BAEQwQhcHL.setAuctionFee.call(uintvkieFTJ, {from: accounts[4]});
//		const uint256KI5V3o = await BAEQwQhcHL.concludeAuction.call(uintwSTvePV, {from: accounts[4]});

		await expect(BAEQwQhcHL.buy.call(uintJ2lZGhG, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for BAE', async () => {
		const addresspnnON5d = accounts[2]
		const BAEFkwfEmK = await BAE.new(addresspnnON5d, {from: "0x0000000000000000000000000000000000000001"});
		const uint1YUfwH = BigInt("54")
		const uintUO4zXGt = BigInt("1218")
		const uintrOh0Wj = BigInt("1259")
		const uintas8rNOd = BigInt("39")
		const uintBGfQCsJ = BigInt("1360")
		const uint256hF7KyD = await BAEFkwfEmK.concludeAuction.call(uint1YUfwH, {from: accounts[0]});
		const uint256f22SBwd = await BAEFkwfEmK.createAuction.call(uintBGfQCsJ, uintas8rNOd, uintrOh0Wj, uintUO4zXGt, {from: accounts[4]});
	});

	it('test for BAE', async () => {
		const addressGOiXye8 = accounts[4]
		const BAEe39XzA5 = await BAE.new(addressGOiXye8, {from: accounts[5]});
		const uintRnYVU6H = BigInt("1360")
		const uinteAwhrUn = BigInt("298")
		const uintdmYLGt = BigInt("640")
		const uintr6riz5F = BigInt("867")
		const uintdZWHyE5 = BigInt("579")
		const uintEIov8lv = BigInt("1122")
		const uintMH0rBeQ = BigInt("1336")
		const uintHtspjkZ = BigInt("1403")
//		const uint256qYwVGHj = await BAEe39XzA5.createAuction.call(uintr6riz5F, uintdmYLGt, uinteAwhrUn, uintRnYVU6H, {from: accounts[2]});
//		const uint256RM1LZEf = await BAEe39XzA5.bid.call(uintdZWHyE5, {from: accounts[4]});
//		const uint256GsQyjl0 = await BAEe39XzA5.resetAuction.call(uintHtspjkZ, uintMH0rBeQ, uintEIov8lv, {from: "0x0000000000000000000000000000000000000001"});

		await expect(BAEe39XzA5.createAuction.call(uintr6riz5F, uintdmYLGt, uinteAwhrUn, uintRnYVU6H, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})