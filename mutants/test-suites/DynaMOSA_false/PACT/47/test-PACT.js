const PACT = artifacts.require("PACT");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('PACT', (accounts) => {
	it('test for PACT', async () => {
		const PACTWF1lpv = await PACT.new({from: accounts[4]});
		const addresspLVa4Yw = accounts[2]
		const addressbMWNvQC = accounts[0]
		const addressC29i0IE = accounts[0]
		const addressuQCYqHS = accounts[4]
		const addresspD9YFY8 = accounts[0]
//		const boolI9TuSPK = await PACTWF1lpv.setupTeam.call(addresspLVa4Yw, {from: accounts[4]});
//		const boolwnzcYMB = await PACTWF1lpv.setupFarming.call(addressbMWNvQC, {from: accounts[4]});
//		const uint8sNdf2ej = await PACTWF1lpv.decimals.call({from: accounts[3]});
//		const uintUUXDqWy = await PACTWF1lpv.allowance.call(addressuQCYqHS, addressC29i0IE, {from: accounts[2]});
//		const boolt7HHVu = await PACTWF1lpv.setupRewards.call(addresspD9YFY8, {from: "0x0000000000000000000000000000000000000001"});

		await expect(PACTWF1lpv.setupTeam.call(addresspLVa4Yw, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTUSwdTAI = await PACT.new({from: accounts[4]});
		const uintnxUI2Jy = BigInt("1971")
		const addresseZYApH2 = accounts[2]
		const uintPrLvGi = BigInt("136")
		const addressNmBBmrw = accounts[1]
		const uint8NlIMz2e = await PACTUSwdTAI.decimals.call({from: accounts[4]});
		const boolApr7VMH = await PACTUSwdTAI.approve.call(addresseZYApH2, uintnxUI2Jy, {from: accounts[1]});
		const boolig7dfX2 = await PACTUSwdTAI.approve.call(addressNmBBmrw, uintPrLvGi, {from: accounts[0]});

		assert.equal(boolApr7VMH, true)
		assert.equal(boolig7dfX2, true)
		assert.equal(uint8NlIMz2e, BigInt("18"))
	});

	it('test for PACT', async () => {
		const PACTEdgqGtf = await PACT.new({from: accounts[3]});
		const uint5gVI8C = BigInt("369")
		const addressEcs0WWA = accounts[3]
		const addresso71Kg70 = accounts[3]
		const uint4jWtoj = BigInt("1104")
		const addressRZ8LDqt = accounts[4]
		const addressA09SdUD = "0x0000000000000000000000000000000000000001"
		const uintNfhGPOe = BigInt("916")
		const addressQpZmDj = accounts[1]
//		const boolXozPwas = await PACTEdgqGtf.transfer.call(addressEcs0WWA, uint5gVI8C, {from: accounts[0]});
//		const boolgGcPJif = await PACTEdgqGtf.setupReserve.call(addresso71Kg70, {from: accounts[2]});
//		const boolVsZFpXr = await PACTEdgqGtf.transferFrom.call(addressA09SdUD, addressRZ8LDqt, uint4jWtoj, {from: "0x0000000000000000000000000000000000000001"});
//		const boolHpiwGMr = await PACTEdgqGtf.transfer.call(addressQpZmDj, uintNfhGPOe, {from: accounts[4]});

		await expect(PACTEdgqGtf.transfer.call(addressEcs0WWA, uint5gVI8C, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTep0dBOQ = await PACT.new({from: accounts[0]});
		const uintxnwLPZr = BigInt("535")
		const addressXRe2pG = "0x0000000000000000000000000000000000000001"
		const addressgGz30KZ = accounts[3]
		const addressXeJ9lg = accounts[2]
		const uintdEV9S8d = BigInt("743")
		const addressMiBFYr = "0x0000000000000000000000000000000000000001"
		const boolLgKaYdM = await PACTep0dBOQ.approve.call(addressXRe2pG, uintxnwLPZr, {from: accounts[1]});
//		const boolJHOXnHX = await PACTep0dBOQ.setupBasePool.call(addressgGz30KZ, {from: accounts[0]});
//		const boolDq95GlB = await PACTep0dBOQ.setupRewards.call(addressXeJ9lg, {from: accounts[4]});
//		const boolfaSLXNy = await PACTep0dBOQ.approve.call(addressMiBFYr, uintdEV9S8d, {from: accounts[2]});

		assert.equal(boolLgKaYdM, true)
		await expect(PACTep0dBOQ.setupBasePool.call(addressgGz30KZ, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTS27tTNK = await PACT.new({from: accounts[4]});
		const addresszspPPg = accounts[0]
		const addressiGwj0oz = accounts[4]
		const addressfn6BtIH = accounts[2]
//		const booldX6wvCN = await PACTS27tTNK.setupFarming.call(addresszspPPg, {from: accounts[1]});
//		const boolacI9562 = await PACTS27tTNK.setupTeam.call(addressiGwj0oz, {from: accounts[0]});
//		const boolQuSQrhZ = await PACTS27tTNK.setupFarming.call(addressfn6BtIH, {from: accounts[2]});

		await expect(PACTS27tTNK.setupFarming.call(addresszspPPg, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTLyl8TzN = await PACT.new({from: accounts[4]});
		const addresshf2ytIU = accounts[4]
		const addresswRkpOM8 = accounts[2]
		const addressVxMXTHt = accounts[3]
		const uintbUr3BWZ = await PACTLyl8TzN.allowance.call(addresswRkpOM8, addresshf2ytIU, {from: accounts[3]});
		const uint8TcOKrPS = await PACTLyl8TzN.decimals.call({from: accounts[1]});
		const stringtjfOi0h = await PACTLyl8TzN.symbol.call({from: accounts[0]});
		const uint8Ey7scds = await PACTLyl8TzN.decimals.call({from: accounts[0]});
//		const boolpZ8tfiz = await PACTLyl8TzN.setupTeam.call(addressVxMXTHt, {from: accounts[4]});

		assert.equal(stringtjfOi0h, "PACT")
		assert.equal(uint8Ey7scds, BigInt("18"))
		assert.equal(uint8TcOKrPS, BigInt("18"))
		assert.equal(uintbUr3BWZ, BigInt("0"))
		await expect(PACTLyl8TzN.setupTeam.call(addressVxMXTHt, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTPtDcZJw = await PACT.new({from: accounts[0]});
		const addressQeIuUja = accounts[1]
		const addressslwXoHC = accounts[3]
//		const boolOVjGEh9 = await PACTPtDcZJw.setupReserve.call(addressQeIuUja, {from: accounts[3]});
//		const uinta4NQGK = await PACTPtDcZJw.balanceOf.call(addressslwXoHC, {from: accounts[3]});

		await expect(PACTPtDcZJw.setupReserve.call(addressQeIuUja, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTLkq8PIW = await PACT.new({from: accounts[5]});
		const uintjRtXbYt = BigInt("477")
		const addressSHAuVvN = accounts[4]
		const addressvuG6soG = accounts[2]
		const uintChl1gOI = BigInt("587")
		const addressfzy8gr = accounts[2]
		const addressGMjnXj7 = accounts[4]
//		const booleh0fvx2 = await PACTLkq8PIW.transferFrom.call(addressvuG6soG, addressSHAuVvN, uintjRtXbYt, {from: accounts[3]});
//		const boolZlHLdT = await PACTLkq8PIW.transferFrom.call(addressGMjnXj7, addressfzy8gr, uintChl1gOI, {from: accounts[2]});

		await expect(PACTLkq8PIW.transferFrom.call(addressvuG6soG, addressSHAuVvN, uintjRtXbYt, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTH3tf8iW = await PACT.new({from: accounts[0]});
		const addressTSbiq5O = "0x0000000000000000000000000000000000000001"
		const addressExMoFKM = accounts[2]
		const addresstHGGwdy = accounts[1]
		const uintnOPpEL = BigInt("504")
		const addressJ2IVbME = accounts[2]
		const uint8tY1D2YR = await PACTH3tf8iW.decimals.call({from: accounts[0]});
//		const boolCKpd1Db = await PACTH3tf8iW.setupRewards.call(addressTSbiq5O, {from: accounts[3]});
//		const uints1VIThj = await PACTH3tf8iW.balanceOf.call(addressExMoFKM, {from: accounts[5]});
//		const boolNDjPzQY = await PACTH3tf8iW.setupBasePool.call(addresstHGGwdy, {from: accounts[4]});
//		const boolIJEE5Zp = await PACTH3tf8iW.transfer.call(addressJ2IVbME, uintnOPpEL, {from: accounts[2]});

		assert.equal(uint8tY1D2YR, BigInt("18"))
		await expect(PACTH3tf8iW.setupRewards.call(addressTSbiq5O, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTEdgqGtf = await PACT.new({from: accounts[3]});
		const uintj6T1ibv = BigInt("369")
		const addressRpU9msS = accounts[4]
		const addressUoPIEQ = accounts[3]
		const uintlwIac6 = BigInt("1562")
		const addressOaNAUdu = accounts[3]
		const addressSc5gPjG = accounts[1]
		const uintocgWX9O = BigInt("1104")
		const addresstvL0nIe = accounts[4]
		const addressyG0uxj = "0x0000000000000000000000000000000000000001"
		const uintjbBJnf = BigInt("916")
		const addressCK9gEUy = accounts[1]
		const stringlmbzFGh = await PACTEdgqGtf.name.call({from: accounts[5]});
//		const boolXozPwas = await PACTEdgqGtf.transfer.call(addressRpU9msS, uintj6T1ibv, {from: accounts[0]});
//		const boolgGcPJif = await PACTEdgqGtf.setupReserve.call(addressUoPIEQ, {from: accounts[2]});
//		const boolnS0eI7u = await PACTEdgqGtf.transferFrom.call(addressSc5gPjG, addressOaNAUdu, uintlwIac6, {from: accounts[1]});
//		const boolVsZFpXr = await PACTEdgqGtf.transferFrom.call(addressyG0uxj, addresstvL0nIe, uintocgWX9O, {from: "0x0000000000000000000000000000000000000001"});
//		const boolHpiwGMr = await PACTEdgqGtf.transfer.call(addressCK9gEUy, uintjbBJnf, {from: accounts[4]});

		assert.equal(stringlmbzFGh, "P2PB2B community token")
		await expect(PACTEdgqGtf.transfer.call(addressRpU9msS, uintj6T1ibv, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTDCVKg0a = await PACT.new({from: accounts[3]});
		const addresslP3nPj = accounts[5]
		const addressKV7QqaZ = accounts[4]
		const uintLkC7fj = await PACTDCVKg0a.totalSupply.call({from: accounts[0]});
//		const boolF7hwUC = await PACTDCVKg0a.setupBasePool.call(addresslP3nPj, {from: accounts[5]});
//		const boolOaSVNhU = await PACTDCVKg0a.setupTeam.call(addressKV7QqaZ, {from: accounts[1]});

		assert.equal(uintLkC7fj, BigInt("1000000000000000000000000000"))
		await expect(PACTDCVKg0a.setupBasePool.call(addresslP3nPj, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTPtDcZJw = await PACT.new({from: accounts[0]});
		const addressJmjUrZr = accounts[4]
		const uinta4NQGK = await PACTPtDcZJw.balanceOf.call(addressJmjUrZr, {from: accounts[3]});

		assert.equal(uinta4NQGK, BigInt("0"))
	});

	it('test for PACT', async () => {
		const PACTu5Oj3Jp = await PACT.new({from: "0x0000000000000000000000000000000000000001"});
		const uintkRdXiP1 = BigInt("462")
		const addressC4ioFEi = accounts[1]
		const uint8J001nuJ = await PACTu5Oj3Jp.decimals.call({from: accounts[4]});
		const boolRsE96hw = await PACTu5Oj3Jp.approve.call(addressC4ioFEi, uintkRdXiP1, {from: accounts[5]});
		const uintoML4RsI = await PACTu5Oj3Jp.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
		const uint8uMgeHkQ = await PACTu5Oj3Jp.decimals.call({from: accounts[4]});
	});

	it('test for PACT', async () => {
		const PACTORIH6u0 = await PACT.new({from: accounts[1]});
		const uintrh02AN = BigInt("1097")
		const addressrNddK7I = accounts[0]
		const addressIBdwsyk = accounts[4]
		const addressFDeTEO7 = accounts[1]
//		const boolqqzTDDy = await PACTORIH6u0.burn.call(addressrNddK7I, uintrh02AN, {from: accounts[3]});
//		const boolk8ifFY = await PACTORIH6u0.setupBasePool.call(addressIBdwsyk, {from: accounts[2]});
//		const booljDslozH = await PACTORIH6u0.setupBasePool.call(addressFDeTEO7, {from: accounts[3]});

		await expect(PACTORIH6u0.burn.call(addressrNddK7I, uintrh02AN, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})