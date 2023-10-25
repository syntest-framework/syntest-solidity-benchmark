const HungryHoody = artifacts.require("HungryHoody");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('HungryHoody', (accounts) => {
	it('test for HungryHoody', async () => {
		const HungryHoodytSZgJqT = await HungryHoody.new({from: accounts[2]});
		const uintkxnk1J = BigInt("1536")
		const uintDCEviri = BigInt("1926")
		const uint1DnFsG = BigInt("1867")
		const addressJKHjC1Z = accounts[1]
		const uintjuXat5i = BigInt("1218")
		const uintiJtQw1s = BigInt("1800")
		const uintgDbDhc5 = await HungryHoodytSZgJqT.totalSupply.call({from: accounts[5]});
		const uintvkQiufg = await HungryHoodytSZgJqT.safeAdd.call(uintDCEviri, uintkxnk1J, {from: accounts[3]});
		const boolyFknXc4 = await HungryHoodytSZgJqT.approve.call(addressJKHjC1Z, uint1DnFsG, {from: accounts[1]});
		const uint2dpblL = await HungryHoodytSZgJqT.safeSub.call(uintiJtQw1s, uintjuXat5i, {from: accounts[1]});

		assert.equal(boolyFknXc4, true)
		assert.equal(uint2dpblL, BigInt("582"))
		assert.equal(uintgDbDhc5, BigInt("25000000000000000000"))
		assert.equal(uintvkQiufg, BigInt("3462"))
	});

	it('test for HungryHoody', async () => {
		const HungryHoodygWdhI0n = await HungryHoody.new({from: accounts[2]});
		const addressHnj37Rd = accounts[5]
		const addresstHul2VI = accounts[0]
		const uintMOUTlLK = BigInt("1305")
		const uintSWA5CfH = BigInt("1227")
		const uintznHoNl1 = await HungryHoodygWdhI0n.balanceOf.call(addressHnj37Rd, {from: accounts[3]});
		const uintO74T5Z9 = await HungryHoodygWdhI0n.totalSupply.call({from: accounts[4]});
		const uintVpVe68o = await HungryHoodygWdhI0n.balanceOf.call(addresstHul2VI, {from: accounts[1]});
		const uinton0qnra = await HungryHoodygWdhI0n.safeMul.call(uintSWA5CfH, uintMOUTlLK, {from: accounts[0]});

		assert.equal(uintO74T5Z9, BigInt("25000000000000000000"))
		assert.equal(uintVpVe68o, BigInt("0"))
		assert.equal(uinton0qnra, BigInt("1601235"))
		assert.equal(uintznHoNl1, BigInt("0"))
	});

	it('test for HungryHoody', async () => {
		const HungryHoodynXr2uB3 = await HungryHoody.new({from: accounts[3]});
		const uintbFeRot = BigInt("323")
		const uintc8zD8My = BigInt("772")
		const uintxNjxlXR = BigInt("1607")
		const uintSGMnkk = BigInt("735")
		const uintTAWOZKr = BigInt("1562")
		const uintMLbXAIX = BigInt("2030")
		const uintDcD50cR = BigInt("810")
		const uintbLTEhPn = BigInt("1598")
		const uintARb8DkZ = await HungryHoodynXr2uB3.safeDiv.call(uintc8zD8My, uintbFeRot, {from: accounts[4]});
//		const uintfcQgrPp = await HungryHoodynXr2uB3.safeSub.call(uintSGMnkk, uintxNjxlXR, {from: accounts[3]});
//		const uintTwg4l11 = await HungryHoodynXr2uB3.safeAdd.call(uintMLbXAIX, uintTAWOZKr, {from: accounts[3]});
//		const uintNVV2doI = await HungryHoodynXr2uB3.safeMul.call(uintbLTEhPn, uintDcD50cR, {from: accounts[2]});

		assert.equal(uintARb8DkZ, BigInt("2"))
		await expect(HungryHoodynXr2uB3.safeSub.call(uintSGMnkk, uintxNjxlXR, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for HungryHoody', async () => {
		const HungryHoodyLCm3ec = await HungryHoody.new({from: accounts[3]});
		const addressM3HD1eW = "0x0000000000000000000000000000000000000001"
		const addresszZcT6d8 = accounts[1]
		const uintyhVcjTO = BigInt("596")
		const uintzWetWcV = BigInt("170")
		const uintZGiAjWl = BigInt("606")
		const addressQWwyy1q = accounts[4]
		const uintoMPDPy = BigInt("466")
		const uintfwnTygK = BigInt("360")
		const uintigcRV8h = await HungryHoodyLCm3ec.allowance.call(addresszZcT6d8, addressM3HD1eW, {from: accounts[2]});
		const uintFdJDFin = await HungryHoodyLCm3ec.safeMul.call(uintzWetWcV, uintyhVcjTO, {from: accounts[0]});
//		const boolAS6jJN = await HungryHoodyLCm3ec.transfer.call(addressQWwyy1q, uintZGiAjWl, {from: accounts[4]});
//		const uintobAayP = await HungryHoodyLCm3ec.safeDiv.call(uintfwnTygK, uintoMPDPy, {from: accounts[2]});

		assert.equal(uintFdJDFin, BigInt("101320"))
		assert.equal(uintigcRV8h, BigInt("0"))
		await expect(HungryHoodyLCm3ec.transfer.call(addressQWwyy1q, uintZGiAjWl, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for HungryHoody', async () => {
		const HungryHoodyjVzIhUP = await HungryHoody.new({from: accounts[4]});
		const uintvZyE6rA = BigInt("432")
		const addressdkylLDi = accounts[5]
		const addressvqh4G1 = accounts[2]
		const uintC22bAAY = BigInt("636")
		const uintY8tsZH7 = BigInt("397")
		const uintfMUlXuY = BigInt("793")
		const addressyq3KIgh = accounts[1]
		const uintIWZZlB = BigInt("533")
		const uintvKoqo6n = BigInt("167")
		const addressrhsaAD0 = accounts[4]
//		const boolF3JEgsz = await HungryHoodyjVzIhUP.transferFrom.call(addressvqh4G1, addressdkylLDi, uintvZyE6rA, {from: "0x0000000000000000000000000000000000000001"});
//		const uintKu68CdG = await HungryHoodyjVzIhUP.safeMul.call(uintY8tsZH7, uintC22bAAY, {from: accounts[4]});
//		const boolTKbxlNe = await HungryHoodyjVzIhUP.approve.call(addressyq3KIgh, uintfMUlXuY, {from: accounts[1]});
//		const uintQzUfsZq = await HungryHoodyjVzIhUP.safeMul.call(uintvKoqo6n, uintIWZZlB, {from: "0x0000000000000000000000000000000000000001"});
//		const uintZ3FVWKN = await HungryHoodyjVzIhUP.balanceOf.call(addressrhsaAD0, {from: accounts[3]});

		await expect(HungryHoodyjVzIhUP.transferFrom.call(addressvqh4G1, addressdkylLDi, uintvZyE6rA, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for HungryHoody', async () => {
		const HungryHoodyAnoPMTE = await HungryHoody.new({from: "0x0000000000000000000000000000000000000001"});
		const uintxyH9o11 = BigInt("85")
		const uintyGZlvOc = BigInt("1313")
		const uintgXrauY9 = BigInt("338")
		const addresswRv3VMx = accounts[1]
		const uintzQ7R2JE = BigInt("1941")
		const addressquHp4ca = accounts[0]
		const uintl30tZPl = await HungryHoodyAnoPMTE.safeDiv.call(uintyGZlvOc, uintxyH9o11, {from: accounts[0]});
		const booluIYlt2j = await HungryHoodyAnoPMTE.approve.call(addresswRv3VMx, uintgXrauY9, {from: accounts[4]});
		const boolid24Vu = await HungryHoodyAnoPMTE.approve.call(addressquHp4ca, uintzQ7R2JE, {from: accounts[3]});
	});
})