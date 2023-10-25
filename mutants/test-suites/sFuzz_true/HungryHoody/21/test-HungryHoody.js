const HungryHoody = artifacts.require("HungryHoody");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('HungryHoody', (accounts) => {
	it('test for HungryHoody', async () => {
		const HungryHoodyLbVCJyA = await HungryHoody.new({from: accounts[2]});
		const uintAMz8F9N = BigInt("1787")
		const addressWsVDCOB = accounts[4]
		const address4rnNQd = accounts[0]
		const boolMviNxyQ = await HungryHoodyLbVCJyA.approve.call(addressWsVDCOB, uintAMz8F9N, {from: "0x0000000000000000000000000000000000000001"});
		const uintNS3zyQ = await HungryHoodyLbVCJyA.totalSupply.call({from: accounts[1]});
		const uintnt6KXCJ = await HungryHoodyLbVCJyA.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
		const uintkNulD0 = await HungryHoodyLbVCJyA.totalSupply.call({from: accounts[4]});
		const uintl1Ut5Y = await HungryHoodyLbVCJyA.balanceOf.call(address4rnNQd, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolMviNxyQ, true)
		assert.equal(uintNS3zyQ, BigInt("25000000000000000000"))
		assert.equal(uintkNulD0, BigInt("25000000000000000000"))
		assert.equal(uintl1Ut5Y, BigInt("0"))
		assert.equal(uintnt6KXCJ, BigInt("25000000000000000000"))
	});

	it('test for HungryHoody', async () => {
		const HungryHoodyAvTvNw = await HungryHoody.new({from: accounts[5]});
		const uintRzQfZzW = BigInt("910")
		const uintwiH3Uyw = BigInt("913")
		const uintDBrTn7v = BigInt("449")
		const uintayvhFcP = BigInt("150")
		const uintd2rjXTH = await HungryHoodyAvTvNw.safeDiv.call(uintwiH3Uyw, uintRzQfZzW, {from: accounts[4]});
		const uintzfku0P5 = await HungryHoodyAvTvNw.totalSupply.call({from: accounts[0]});
		const uintujz2Uql = await HungryHoodyAvTvNw.safeDiv.call(uintayvhFcP, uintDBrTn7v, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uintd2rjXTH, BigInt("1"))
		assert.equal(uintujz2Uql, BigInt("0"))
		assert.equal(uintzfku0P5, BigInt("25000000000000000000"))
	});

	it('test for HungryHoody', async () => {
		const HungryHoody0MwU97 = await HungryHoody.new({from: accounts[2]});
		const uintwvohnK4 = BigInt("1139")
		const addressS0Gu0I = accounts[2]
		const uintEwjcOK = BigInt("808")
		const uintz60epaB = BigInt("212")
		const uintIMgpMj = BigInt("799")
		const uintr2dgvXo = BigInt("1")
		const uintMH3fyX = BigInt("1698")
		const uintaTCfo2o = BigInt("1020")
		const uintJg4kdgr = BigInt("282")
		const uinttBcCdZJ = BigInt("303")
//		const boolzaCTBlP = await HungryHoody0MwU97.transfer.call(addressS0Gu0I, uintwvohnK4, {from: accounts[0]});
//		const uint0rfxMn = await HungryHoody0MwU97.safeMul.call(uintz60epaB, uintEwjcOK, {from: accounts[2]});
//		const uintbizDqT4 = await HungryHoody0MwU97.safeSub.call(uintr2dgvXo, uintIMgpMj, {from: accounts[3]});
//		const uintub5EWHz = await HungryHoody0MwU97.safeMul.call(uintaTCfo2o, uintMH3fyX, {from: accounts[1]});
//		const uintpfdfH5F = await HungryHoody0MwU97.safeDiv.call(uinttBcCdZJ, uintJg4kdgr, {from: accounts[5]});

		await expect(HungryHoody0MwU97.transfer.call(addressS0Gu0I, uintwvohnK4, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for HungryHoody', async () => {
		const HungryHoodydh903UI = await HungryHoody.new({from: accounts[3]});
		const uintTxnUhNw = BigInt("1434")
		const addressowtWPy = accounts[0]
		const addressrfFuaPc = accounts[4]
		const uintad0db6 = BigInt("694")
		const uintI07bmF = BigInt("167")
		const uintsJXNGMr = BigInt("467")
		const uintf7IzyHV = BigInt("1066")
		const uintieMd7cA = BigInt("1451")
		const uinta1yVfSk = BigInt("1756")
		const uintB8yQbdm = BigInt("98")
		const uintmn91Cvb = BigInt("56")
		const addressKhx4zAs = accounts[0]
//		const boolSzSoJwh = await HungryHoodydh903UI.transferFrom.call(addressrfFuaPc, addressowtWPy, uintTxnUhNw, {from: accounts[0]});
//		const uintx3r62Cg = await HungryHoodydh903UI.safeDiv.call(uintI07bmF, uintad0db6, {from: accounts[2]});
//		const uintZIM886R = await HungryHoodydh903UI.safeSub.call(uintf7IzyHV, uintsJXNGMr, {from: accounts[3]});
//		const uintkXsSKU = await HungryHoodydh903UI.safeDiv.call(uinta1yVfSk, uintieMd7cA, {from: accounts[1]});
//		const uintgQv8afJ = await HungryHoodydh903UI.safeDiv.call(uintmn91Cvb, uintB8yQbdm, {from: accounts[3]});
//		const uintBn3MYsn = await HungryHoodydh903UI.balanceOf.call(addressKhx4zAs, {from: accounts[1]});

		await expect(HungryHoodydh903UI.transferFrom.call(addressrfFuaPc, addressowtWPy, uintTxnUhNw, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for HungryHoody', async () => {
		const HungryHoodyTCsT5hg = await HungryHoody.new({from: accounts[2]});
		const uinthjHfGHo = BigInt("1781")
		const addressEEEukSn = accounts[4]
		const addressp74mhWd = accounts[0]
		const addressaQItas = accounts[2]
		const uinty7ZHMW = BigInt("1669")
		const uintSglWhqX = BigInt("1418")
		const uintQLsFy2m = BigInt("881")
		const addressTpHBMwr = accounts[1]
		const boolDeyQE8 = await HungryHoodyTCsT5hg.approve.call(addressEEEukSn, uinthjHfGHo, {from: accounts[1]});
		const uintiXW197g = await HungryHoodyTCsT5hg.allowance.call(addressaQItas, addressp74mhWd, {from: accounts[0]});
		const uintzwvdlzp = await HungryHoodyTCsT5hg.safeMul.call(uintSglWhqX, uinty7ZHMW, {from: accounts[2]});
//		const booliNKfQ8g = await HungryHoodyTCsT5hg.transfer.call(addressTpHBMwr, uintQLsFy2m, {from: accounts[1]});

		assert.equal(boolDeyQE8, true)
		assert.equal(uintiXW197g, BigInt("0"))
		assert.equal(uintzwvdlzp, BigInt("2366642"))
		await expect(HungryHoodyTCsT5hg.transfer.call(addressTpHBMwr, uintQLsFy2m, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for HungryHoody', async () => {
		const HungryHoodyoDL7mjq = await HungryHoody.new({from: accounts[2]});
		const uintkOy7Lzi = BigInt("1159")
		const uinty85Hsyc = BigInt("993")
		const uintJFyUqzW = BigInt("506")
		const uintEKZrEVH = BigInt("107")
		const uintd2Q02KD = BigInt("983")
		const uintuhTVBi3 = BigInt("1651")
		const uintfv1F6mG = await HungryHoodyoDL7mjq.safeDiv.call(uinty85Hsyc, uintkOy7Lzi, {from: accounts[1]});
//		const uintVDrrMoh = await HungryHoodyoDL7mjq.safeSub.call(uintEKZrEVH, uintJFyUqzW, {from: accounts[0]});
//		const uintiTemKU6 = await HungryHoodyoDL7mjq.safeAdd.call(uintuhTVBi3, uintd2Q02KD, {from: accounts[3]});

		assert.equal(uintfv1F6mG, BigInt("0"))
		await expect(HungryHoodyoDL7mjq.safeSub.call(uintEKZrEVH, uintJFyUqzW, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for HungryHoody', async () => {
		const HungryHoodyhuJTXXY = await HungryHoody.new({from: accounts[4]});
		const uintGNlQAkW = BigInt("429")
		const addresstW5EfNm = accounts[3]
		const uintTgSbbm = BigInt("75")
		const uint4kEnXh = BigInt("759")
		const uintEgtEki5 = BigInt("1202")
		const uintq053tfk = BigInt("544")
		const uintH20iCBN = BigInt("1668")
		const uintKaBM6Th = BigInt("497")
		const boolsJyLZis = await HungryHoodyhuJTXXY.approve.call(addresstW5EfNm, uintGNlQAkW, {from: accounts[0]});
		const uintt6uFIPe = await HungryHoodyhuJTXXY.safeAdd.call(uint4kEnXh, uintTgSbbm, {from: accounts[2]});
		const uintDs1yenD = await HungryHoodyhuJTXXY.safeMul.call(uintq053tfk, uintEgtEki5, {from: accounts[5]});
//		const uintJ7C81xd = await HungryHoodyhuJTXXY.safeSub.call(uintKaBM6Th, uintH20iCBN, {from: accounts[1]});

		assert.equal(boolsJyLZis, true)
		assert.equal(uintDs1yenD, BigInt("653888"))
		assert.equal(uintt6uFIPe, BigInt("834"))
		await expect(HungryHoodyhuJTXXY.safeSub.call(uintKaBM6Th, uintH20iCBN, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for HungryHoody', async () => {
		const HungryHoodyzaUdVpV = await HungryHoody.new({from: "0x0000000000000000000000000000000000000001"});
		const uintRGQppxt = BigInt("1792")
		const uintmbkIcx = BigInt("1029")
		const uintGY7Ikt = BigInt("1455")
		const uintKtz1QvL = BigInt("577")
		const uintux3533Y = BigInt("904")
		const addressU6apEFv = accounts[4]
		const addressVRE7BK0 = accounts[1]
		const addressiWTs2cO = accounts[0]
		const uintcDUAPga = BigInt("604")
		const uintMeGyYOg = BigInt("757")
		const uintd2YMxNY = BigInt("1152")
		const uintuuLC0R8 = BigInt("926")
		const uintNtDF7yh = await HungryHoodyzaUdVpV.safeAdd.call(uintmbkIcx, uintRGQppxt, {from: accounts[3]});
		const uintzxVqokQ = await HungryHoodyzaUdVpV.safeDiv.call(uintKtz1QvL, uintGY7Ikt, {from: accounts[0]});
		const boolUZSJTXx = await HungryHoodyzaUdVpV.approve.call(addressU6apEFv, uintux3533Y, {from: accounts[2]});
		const uintatLqIxk = await HungryHoodyzaUdVpV.allowance.call(addressiWTs2cO, addressVRE7BK0, {from: accounts[5]});
		const uintS4Bng52 = await HungryHoodyzaUdVpV.safeAdd.call(uintMeGyYOg, uintcDUAPga, {from: accounts[2]});
		const uintaxJWtXJ = await HungryHoodyzaUdVpV.safeSub.call(uintuuLC0R8, uintd2YMxNY, {from: accounts[4]});
	});
})