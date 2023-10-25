const HungryHoody = artifacts.require("HungryHoody");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('HungryHoody', (accounts) => {
	it('test for HungryHoody', async () => {
		const HungryHoodyANe70JP = await HungryHoody.new({from: accounts[0]});
		const addressPoxksF = accounts[5]
		const uintOrUwTce = BigInt("1443")
		const uinthiPEv1j = BigInt("1099")
		const uintB1Pi471 = BigInt("49")
		const uintqEosu4X = BigInt("807")
		const addressbyfa2d = accounts[5]
		const uintLOuwTOe = BigInt("2047")
		const uintvcYO0Vy = BigInt("788")
		const uintdcQVxS = BigInt("1506")
		const uinto1ygwzx = BigInt("1862")
		const uinttJjUHp3 = await HungryHoodyANe70JP.balanceOf.call(addressPoxksF, {from: accounts[4]});
		const uintRm5a3cY = await HungryHoodyANe70JP.safeMul.call(uinthiPEv1j, uintOrUwTce, {from: accounts[0]});
		const uintVdcvMiJ = await HungryHoodyANe70JP.safeAdd.call(uintqEosu4X, uintB1Pi471, {from: accounts[2]});
		const uintuWe7XRs = await HungryHoodyANe70JP.balanceOf.call(addressbyfa2d, {from: accounts[1]});
		const uintU0ohuF = await HungryHoodyANe70JP.safeMul.call(uintvcYO0Vy, uintLOuwTOe, {from: accounts[0]});
		const uintdTKMODi = await HungryHoodyANe70JP.safeDiv.call(uinto1ygwzx, uintdcQVxS, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uintRm5a3cY, BigInt("1585857"))
		assert.equal(uintU0ohuF, BigInt("1613036"))
		assert.equal(uintVdcvMiJ, BigInt("856"))
		assert.equal(uintdTKMODi, BigInt("1"))
		assert.equal(uinttJjUHp3, BigInt("0"))
		assert.equal(uintuWe7XRs, BigInt("0"))
	});

	it('test for HungryHoody', async () => {
		const HungryHoodygw0gjCY = await HungryHoody.new({from: accounts[0]});
		const uintLvpz9LL = BigInt("252")
		const uintMMw7GXN = BigInt("1973")
		const uintlC9RVjU = BigInt("636")
		const uintOSaRmyu = BigInt("1836")
		const uintisspyjC = await HungryHoodygw0gjCY.safeSub.call(uintMMw7GXN, uintLvpz9LL, {from: "0x0000000000000000000000000000000000000001"});
		const uintAZ3ujzT = await HungryHoodygw0gjCY.safeDiv.call(uintOSaRmyu, uintlC9RVjU, {from: accounts[0]});

		assert.equal(uintAZ3ujzT, BigInt("2"))
		assert.equal(uintisspyjC, BigInt("1721"))
	});

	it('test for HungryHoody', async () => {
		const HungryHoodyyYjHdKM = await HungryHoody.new({from: accounts[4]});
		const uintNJA8b6N = BigInt("1520")
		const uintmYzZCqT = BigInt("849")
		const uintyFj3uFi = BigInt("67")
		const uintcy9iA2 = BigInt("1735")
		const uintY0dVUIa = BigInt("802")
		const uintqlAkqZ4 = BigInt("1410")
		const uinthNIdlMd = BigInt("1117")
		const uintJ8B4r56 = BigInt("515")
//		const uintCcnooPg = await HungryHoodyyYjHdKM.safeSub.call(uintmYzZCqT, uintNJA8b6N, {from: accounts[4]});
//		const uintgIIu8fS = await HungryHoodyyYjHdKM.safeDiv.call(uintcy9iA2, uintyFj3uFi, {from: accounts[1]});
//		const uintWTCnp8 = await HungryHoodyyYjHdKM.safeDiv.call(uintqlAkqZ4, uintY0dVUIa, {from: accounts[0]});
//		const uintpftsUyz = await HungryHoodyyYjHdKM.safeDiv.call(uintJ8B4r56, uinthNIdlMd, {from: accounts[2]});

		await expect(HungryHoodyyYjHdKM.safeSub.call(uintmYzZCqT, uintNJA8b6N, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for HungryHoody', async () => {
		const HungryHoody1WlJMQ = await HungryHoody.new({from: accounts[4]});
		const uintbhv6dLm = BigInt("1122")
		const uintCNC18qX = BigInt("1543")
		const uintdVGoq92 = BigInt("406")
		const addressKMfwgRl = accounts[2]
		const uintR83bzvx = BigInt("734")
		const uintee5TiWz = BigInt("1625")
		const uintJsKCmgK = BigInt("672")
		const uintrpPMAV4 = BigInt("1928")
		const uintlD9W9hY = await HungryHoody1WlJMQ.safeAdd.call(uintCNC18qX, uintbhv6dLm, {from: accounts[4]});
		const boolpRpYTV6 = await HungryHoody1WlJMQ.approve.call(addressKMfwgRl, uintdVGoq92, {from: accounts[1]});
		const uinta511888 = await HungryHoody1WlJMQ.safeMul.call(uintee5TiWz, uintR83bzvx, {from: accounts[0]});
		const uintGkJ7HGC = await HungryHoody1WlJMQ.safeDiv.call(uintrpPMAV4, uintJsKCmgK, {from: accounts[3]});

		assert.equal(boolpRpYTV6, true)
		assert.equal(uintGkJ7HGC, BigInt("2"))
		assert.equal(uinta511888, BigInt("1192750"))
		assert.equal(uintlD9W9hY, BigInt("2665"))
	});

	it('test for HungryHoody', async () => {
		const HungryHoodyHL5Y7c = await HungryHoody.new({from: accounts[4]});
		const uintP82b98S = BigInt("2043")
		const addresscfRsunD = accounts[0]
		const addressvJLRSy = accounts[5]
		const addressk2HS37K = accounts[0]
		const uintKg9g2yg = BigInt("1196")
		const addressEnbTrcB = accounts[4]
		const booldjTTKHd = await HungryHoodyHL5Y7c.approve.call(addresscfRsunD, uintP82b98S, {from: accounts[2]});
		const uintvVBggMF = await HungryHoodyHL5Y7c.allowance.call(addressk2HS37K, addressvJLRSy, {from: accounts[0]});
		const boolMP6Ujzr = await HungryHoodyHL5Y7c.transfer.call(addressEnbTrcB, uintKg9g2yg, {from: accounts[4]});

		assert.equal(boolMP6Ujzr, true)
		assert.equal(booldjTTKHd, true)
		assert.equal(uintvVBggMF, BigInt("0"))
	});

	it('test for HungryHoody', async () => {
		const HungryHoodyUf6SQqs = await HungryHoody.new({from: accounts[4]});
		const uintuYB3Y4Z = BigInt("1242")
		const addressXc5ws0H = accounts[1]
		const addresszSwBPAh = accounts[1]
		const uintfaSng1x = BigInt("1100")
		const uintuF3ddwI = BigInt("587")
		const uintLRYAktM = await HungryHoodyUf6SQqs.totalSupply.call({from: accounts[1]});
//		const boolelMkKkt = await HungryHoodyUf6SQqs.transferFrom.call(addresszSwBPAh, addressXc5ws0H, uintuYB3Y4Z, {from: accounts[2]});
//		const uintTYd4o2a = await HungryHoodyUf6SQqs.safeDiv.call(uintuF3ddwI, uintfaSng1x, {from: accounts[4]});
//		const uintL2EYFDo = await HungryHoodyUf6SQqs.totalSupply.call({from: accounts[3]});
//		const uintGUHycp9 = await HungryHoodyUf6SQqs.totalSupply.call({from: accounts[3]});

		assert.equal(uintLRYAktM, BigInt("25000000000000000000"))
		await expect(HungryHoodyUf6SQqs.transferFrom.call(addresszSwBPAh, addressXc5ws0H, uintuYB3Y4Z, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for HungryHoody', async () => {
		const HungryHoodytnZrnqO = await HungryHoody.new({from: "0x0000000000000000000000000000000000000001"});
		const uintc5A0LTp = BigInt("824")
		const addressIRgJOfQ = accounts[0]
		const addressDqoDtu = "0x0000000000000000000000000000000000000001"
		const uintoCGaZ8B = BigInt("991")
		const addressncOwIFF = accounts[4]
		const uintZyJ7BPn = BigInt("192")
		const uint7KlnsV = BigInt("2")
		const boolVFNg9n = await HungryHoodytnZrnqO.transferFrom.call(addressDqoDtu, addressIRgJOfQ, uintc5A0LTp, {from: accounts[4]});
		const boolnqc8l55 = await HungryHoodytnZrnqO.transfer.call(addressncOwIFF, uintoCGaZ8B, {from: accounts[3]});
		const uintQacTv9W = await HungryHoodytnZrnqO.safeSub.call(uint7KlnsV, uintZyJ7BPn, {from: accounts[3]});
	});
})