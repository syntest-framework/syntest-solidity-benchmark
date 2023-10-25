const Fomp = artifacts.require("Fomp");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Fomp', (accounts) => {
	it('test for Fomp', async () => {
		const addressM8D0pxZ = accounts[1]
		const FompUdFK7i5 = await Fomp.new(addressM8D0pxZ, {from: "0x0000000000000000000000000000000000000001"});
		const uintKT1P9Dw = BigInt("1748")
		const addressJ14pWGU = accounts[0]
		const addressdJFl6TU = accounts[3]
		const addresshC30TLf = accounts[3]
		const uintrV1vb0T = BigInt("410")
		const addressSTQEELy = accounts[3]
		const byterldHAKa = "0x0c110e130106111a08021a011c020120190e0711061201170f1407171e192001"
		const bytepfMXCaf = "0x161c11090d081b01091e0c0c181e020c0f1c090d1910050c1e0a1f1e1f0f031f"
		const uintBCQa5aU = BigInt("167")
		const uintr8PUmzf = BigInt("132")
		const uintfB1c6SU = BigInt("67")
		const addressw8nM3oK = "0x0000000000000000000000000000000000000001"
		const boolIBjTcet = await FompUdFK7i5.approve.call(addressJ14pWGU, uintKT1P9Dw, {from: accounts[0]});
		const uintsV6XvPe = await FompUdFK7i5.allowance.call(addresshC30TLf, addressdJFl6TU, {from: accounts[3]});
		const boolCW5D5Oj = await FompUdFK7i5.transfer.call(addressSTQEELy, uintrV1vb0T, {from: accounts[4]});
		const addressbtTEFnq = await FompUdFK7i5.delegateBySig.call(addressw8nM3oK, uintfB1c6SU, uintr8PUmzf, uintBCQa5aU, bytepfMXCaf, byterldHAKa, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for Fomp', async () => {
		const addressYH9uTXA = accounts[4]
		const Fompzxd09gA = await Fomp.new(addressYH9uTXA, {from: accounts[0]});
		const uintOyrBs1t = BigInt("1818")
		const addressziqEl2D = accounts[3]
		const addressFCOVLNW = accounts[3]
		const uintuPLiq8O = BigInt("916")
		const addressLYxDxVS = accounts[4]
		const uint96JvMYj06 = await Fompzxd09gA.getPriorVotes.call(addressziqEl2D, uintOyrBs1t, {from: accounts[1]});
		const uint96soB1UtF = await Fompzxd09gA.getCurrentVotes.call(addressFCOVLNW, {from: accounts[2]});
		const uint96QNqNjD9 = await Fompzxd09gA.getPriorVotes.call(addressLYxDxVS, uintuPLiq8O, {from: accounts[4]});

		await expect(Fompzxd09gA.getPriorVotes.call(addressziqEl2D, uintOyrBs1t, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Fomp', async () => {
		const addresshF7fwHr = accounts[1]
		const FompLrAvZ82 = await Fomp.new(addresshF7fwHr, {from: accounts[1]});
		const uintdoUvej0 = BigInt("185")
		const addresso50ULIO = accounts[1]
		const addressHWzIwpl = "0x0000000000000000000000000000000000000001"
		const uints0WfNDJ = BigInt("883")
		const addressOzP0be = accounts[1]
		const addressX9oyTqA = accounts[4]
		const uintstBdhwK = BigInt("346")
		const addressUDaHaVA = accounts[4]
		const boolXq7PjVV = await FompLrAvZ82.approve.call(addresso50ULIO, uintdoUvej0, {from: accounts[4]});
		const addresspweQzaR = await FompLrAvZ82.delegate.call(addressHWzIwpl, {from: accounts[2]});
		const boolQ9MOBmt = await FompLrAvZ82.transferFrom.call(addressX9oyTqA, addressOzP0be, uints0WfNDJ, {from: accounts[4]});
		const uint96wVyd3V7 = await FompLrAvZ82.getPriorVotes.call(addressUDaHaVA, uintstBdhwK, {from: accounts[1]});

		assert.equal(boolXq7PjVV, true)
		await expect(FompLrAvZ82.transferFrom.call(addressX9oyTqA, addressOzP0be, uints0WfNDJ, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Fomp', async () => {
		const addressIFzNeIn = accounts[2]
		const FompX2Jlnk = await Fomp.new(addressIFzNeIn, {from: accounts[0]});
		const addressTsKwB9j = accounts[2]
		const address4NRKnZ = accounts[4]
		const byteYclqZ7e = "0x061514121d070b021c0b170c1b1d1e0511151c031a0d1e1c070c05120f1d0803"
		const bytejy1ZYBP = "0x1f070515190c1b001f1d110519061a081a12191f11171c000a1c1f0e161e0007"
		const uintotlderK = BigInt("44")
		const uintqH9hbV = BigInt("429")
		const uintmok3kZz = BigInt("1738")
		const addressKbJTeUh = accounts[5]
		const byteumEycVh = "0x0b1a1d160f0c08161303031d1f110d11171d10080a1d0e1f12000d0219161115"
		const byteOxm2Bg9 = "0x1d17181820121c1b0f15060e03030a140e121a1e0711060a1115181d0804030c"
		const uintr013eQv = BigInt("70")
		const uintLHBpMyh = BigInt("803")
		const uinto3ukyvr = BigInt("192")
		const addressbW8HiTs = accounts[4]
		const addressH5aifWp = accounts[1]
		const uintTWw2Bdf = await FompX2Jlnk.balanceOf.call(addressTsKwB9j, {from: accounts[4]});
		const addressjn03j3V = await FompX2Jlnk.delegate.call(address4NRKnZ, {from: accounts[0]});
		const addressBznal5v = await FompX2Jlnk.delegateBySig.call(addressKbJTeUh, uintmok3kZz, uintqH9hbV, uintotlderK, bytejy1ZYBP, byteYclqZ7e, {from: accounts[0]});
		const addressapBVc0F = await FompX2Jlnk.delegateBySig.call(addressbW8HiTs, uinto3ukyvr, uintLHBpMyh, uintr013eQv, byteOxm2Bg9, byteumEycVh, {from: accounts[0]});
		const addressuofPFG = await FompX2Jlnk.delegate.call(addressH5aifWp, {from: accounts[0]});

		assert.equal(uintTWw2Bdf, BigInt("1000000000000000000000000"))
		await expect(FompX2Jlnk.delegateBySig.call(addressKbJTeUh, uintmok3kZz, uintqH9hbV, uintotlderK, bytejy1ZYBP, byteYclqZ7e, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Fomp', async () => {
		const addresshINPW5s = accounts[0]
		const FompkWCO6eE = await Fomp.new(addresshINPW5s, {from: accounts[0]});
		const addressqTBzu6c = accounts[3]
		const addressbNT7FSg = accounts[1]
		const addressswnp9jL = await FompkWCO6eE.delegate.call(addressqTBzu6c, {from: accounts[0]});
		const uint96ji589pF = await FompkWCO6eE.getCurrentVotes.call(addressbNT7FSg, {from: accounts[4]});

		assert.equal(uint96ji589pF, BigInt("0"))
	});

	it('test for Fomp', async () => {
		const addressVL2E1fd = accounts[2]
		const FompGJj0dQa = await Fomp.new(addressVL2E1fd, {from: accounts[4]});
		const uintAb72GKl = BigInt("580")
		const addresslR5N3w = accounts[1]
		const byteA0IpCin = "0x200905171212031e181209200a1a1213040e1f1c0d091d030c1519150e091f14"
		const bytevuOnWmo = "0x190f090a17171b061e0b0f1a060a0a1e010219201b151b0f1d160b0d1f01051f"
		const uintF31NG1p = BigInt("212")
		const uintidG91T = BigInt("1138")
		const uintLfGdod = BigInt("961")
		const addressXmpKBC = accounts[3]
		const uint7JAJuv = BigInt("277")
		const addressqxkhzmW = accounts[0]
		const uintfHQ1ja = BigInt("2026")
		const addresski1Y1f = accounts[3]
		const boolxzp8tu = await FompGJj0dQa.transfer.call(addresslR5N3w, uintAb72GKl, {from: accounts[2]});
		const addressj31Yu5K = await FompGJj0dQa.delegateBySig.call(addressXmpKBC, uintLfGdod, uintidG91T, uintF31NG1p, bytevuOnWmo, byteA0IpCin, {from: accounts[1]});
		const boolbnumSF3 = await FompGJj0dQa.transfer.call(addressqxkhzmW, uint7JAJuv, {from: accounts[2]});
		const boolUU27MQ = await FompGJj0dQa.approve.call(addresski1Y1f, uintfHQ1ja, {from: accounts[2]});

		assert.equal(boolxzp8tu, true)
		await expect(FompGJj0dQa.delegateBySig.call(addressXmpKBC, uintLfGdod, uintidG91T, uintF31NG1p, bytevuOnWmo, byteA0IpCin, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Fomp', async () => {
		const addressz9EpBBD = accounts[1]
		const FompLrAvZ82 = await Fomp.new(addressz9EpBBD, {from: accounts[1]});
		const uintsMe83a3 = BigInt("185")
		const addressNRo7HP6 = accounts[1]
		const addressXAbVQMk = "0x0000000000000000000000000000000000000001"
		const uintp1bqFjP = BigInt("883")
		const addressyAFvOqz = accounts[4]
		const addresskBJJJE8 = accounts[5]
		const uintMPCnnD = BigInt("346")
		const addressFrtsVd = accounts[4]
		const boolXq7PjVV = await FompLrAvZ82.approve.call(addressNRo7HP6, uintsMe83a3, {from: accounts[4]});
		const addresspweQzaR = await FompLrAvZ82.delegate.call(addressXAbVQMk, {from: accounts[2]});
		const boolQ9MOBmt = await FompLrAvZ82.transferFrom.call(addresskBJJJE8, addressyAFvOqz, uintp1bqFjP, {from: accounts[4]});
		const uint96wVyd3V7 = await FompLrAvZ82.getPriorVotes.call(addressFrtsVd, uintMPCnnD, {from: accounts[1]});

		assert.equal(boolXq7PjVV, true)
		await expect(FompLrAvZ82.transferFrom.call(addresskBJJJE8, addressyAFvOqz, uintp1bqFjP, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Fomp', async () => {
		const addressFq1rUAS = accounts[4]
		const FompLs6JQ9C = await Fomp.new(addressFq1rUAS, {from: accounts[4]});
		const addressaAiS3by = "0x0000000000000000000000000000000000000001"
		const address3tcxHz = accounts[4]
		const addressI3xwAS3 = accounts[0]
		const addressd5aRpQ = accounts[2]
		const uintreWsgIR = BigInt("220")
		const addressV9zXnB8 = accounts[2]
		const bytejCuutcT = "0x08071c100a080d1b1212090c100d0b0116000b0603190a1a1a1a1e1207121a1f"
		const byteFsGNjO = "0x0802141d1013031f0c091313130f0c141f07061e0e0c11010105050a1f11180a"
		const uintvob4VXj = BigInt("19")
		const uintHXWAuxR = BigInt("1113")
		const uintYI8JX5K = BigInt("1233")
		const addressnjc0hfR = accounts[5]
		const addressDA2zvNY = accounts[0]
		const addressCquji9I = accounts[0]
		const uintKjuO8CV = BigInt("631")
		const addressVHYu6QR = accounts[0]
		const uintmz9yXZR = await FompLs6JQ9C.balanceOf.call(addressaAiS3by, {from: accounts[5]});
		const uint9rLMCB = await FompLs6JQ9C.allowance.call(addressI3xwAS3, address3tcxHz, {from: accounts[4]});
		const uint96SmlO3mc = await FompLs6JQ9C.getCurrentVotes.call(addressd5aRpQ, {from: accounts[0]});
		const boolifwVaUr = await FompLs6JQ9C.approve.call(addressV9zXnB8, uintreWsgIR, {from: accounts[4]});
		const addressrNpekT8 = await FompLs6JQ9C.delegateBySig.call(addressnjc0hfR, uintYI8JX5K, uintHXWAuxR, uintvob4VXj, byteFsGNjO, bytejCuutcT, {from: accounts[2]});
		const address4Hlgmm = await FompLs6JQ9C.delegate.call(addressDA2zvNY, {from: accounts[4]});
		const uint96h0LkD3G = await FompLs6JQ9C.getCurrentVotes.call(addressCquji9I, {from: accounts[4]});
		const uint96WjYENQr = await FompLs6JQ9C.getPriorVotes.call(addressVHYu6QR, uintKjuO8CV, {from: accounts[2]});

		assert.equal(boolifwVaUr, true)
		assert.equal(uint96SmlO3mc, BigInt("0"))
		assert.equal(uint9rLMCB, BigInt("0"))
		assert.equal(uintmz9yXZR, BigInt("0"))
		await expect(FompLs6JQ9C.delegateBySig.call(addressnjc0hfR, uintYI8JX5K, uintHXWAuxR, uintvob4VXj, byteFsGNjO, bytejCuutcT, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Fomp', async () => {
		const addressneskg8Y = accounts[4]
		const Fompzxd09gA = await Fomp.new(addressneskg8Y, {from: accounts[0]});
		const uintlneNuGh = BigInt("164")
		const addressIGx36NW = "0x0000000000000000000000000000000000000001"
		const uintjeZwMo1 = BigInt("252")
		const addressnuhkVMn = accounts[3]
		const uint96ALbLe8B = await Fompzxd09gA.getPriorVotes.call(addressIGx36NW, uintlneNuGh, {from: accounts[3]});
		const boolJGHqC22 = await Fompzxd09gA.transfer.call(addressnuhkVMn, uintjeZwMo1, {from: accounts[5]});

		assert.equal(uint96ALbLe8B, BigInt("0"))
		await expect(Fompzxd09gA.transfer.call(addressnuhkVMn, uintjeZwMo1, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Fomp', async () => {
		const addressgHVCAWR = accounts[1]
		const FompLrAvZ82 = await Fomp.new(addressgHVCAWR, {from: accounts[1]});
		const uintOG2Bvfw = BigInt("166")
		const addressKQlNzF9 = accounts[1]
		const addressiQRqiyU = accounts[5]
		const addressvwyVl4V = accounts[3]
		const addressgSVRvh = "0x00000000000000000000000000000000000000-1"
		const addressuuVDKdI = accounts[2]
		const uintH3LdFtC = BigInt("368")
		const addressBKcFBaM = accounts[1]
		const boolXq7PjVV = await FompLrAvZ82.approve.call(addressKQlNzF9, uintOG2Bvfw, {from: accounts[4]});
		const uintAoIVKm6 = await FompLrAvZ82.allowance.call(addressvwyVl4V, addressiQRqiyU, {from: accounts[5]});
		const addresspweQzaR = await FompLrAvZ82.delegate.call(addressgSVRvh, {from: accounts[2]});
		const addressezpfppK = await FompLrAvZ82.delegate.call(addressuuVDKdI, {from: accounts[1]});
		const uint96wVyd3V7 = await FompLrAvZ82.getPriorVotes.call(addressBKcFBaM, uintH3LdFtC, {from: accounts[1]});

		assert.equal(boolXq7PjVV, true)
		assert.equal(uintAoIVKm6, BigInt("0"))
		await expect(FompLrAvZ82.delegate.call(addressgSVRvh, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Fomp', async () => {
		const addressYnt8ID1 = accounts[3]
		const FompMt1Z2LP = await Fomp.new(addressYnt8ID1, {from: accounts[0]});
		const uintl3VpXY8 = BigInt("0")
		const addressI41q46E = accounts[3]
		const uintQZbeIMD = BigInt("1919")
		const addressyv0E1cF = "0x0000000000000000000000000000000000000000"
		const uintiLIlEY = BigInt("558")
		const addresspXI5oMz = accounts[2]
		const addressn51Seud = accounts[0]
		const uintRDBHqnd = BigInt("497")
		const addressBjqrNV = accounts[1]
		const uintpjDDstG = BigInt("430")
		const addressVIy0xC = accounts[5]
		const addressFaJRv97 = accounts[2]
		const uintcXws7I = BigInt("1011")
		const addressBNwSufm = accounts[2]
		const addressbXACBM5 = accounts[3]
		const uintOXs2DUm = BigInt("73")
		const addressjTL5cU8 = accounts[4]
		const boolBWJdHI = await FompMt1Z2LP.approve.call(addressI41q46E, uintl3VpXY8, {from: accounts[2]});
		const boolsCGnQQY = await FompMt1Z2LP.transfer.call(addressyv0E1cF, uintQZbeIMD, {from: accounts[3]});
		const boolKoJPf4o = await FompMt1Z2LP.approve.call(addresspXI5oMz, uintiLIlEY, {from: accounts[3]});
		const uint96l3AYlH = await FompMt1Z2LP.getCurrentVotes.call(addressn51Seud, {from: accounts[2]});
		const uint96U7qh2g = await FompMt1Z2LP.getPriorVotes.call(addressBjqrNV, uintRDBHqnd, {from: accounts[4]});
		const bool1wkWey = await FompMt1Z2LP.approve.call(addressVIy0xC, uintpjDDstG, {from: accounts[0]});
		const addressGq6EYd = await FompMt1Z2LP.delegate.call(addressFaJRv97, {from: accounts[3]});
		const boolh3uEsDY = await FompMt1Z2LP.approve.call(addressBNwSufm, uintcXws7I, {from: accounts[3]});
		const uint96T1DSi4 = await FompMt1Z2LP.getCurrentVotes.call(addressbXACBM5, {from: accounts[1]});
		const booleTDgoM = await FompMt1Z2LP.approve.call(addressjTL5cU8, uintOXs2DUm, {from: accounts[2]});

		assert.equal(boolBWJdHI, true)
		await expect(FompMt1Z2LP.transfer.call(addressyv0E1cF, uintQZbeIMD, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})