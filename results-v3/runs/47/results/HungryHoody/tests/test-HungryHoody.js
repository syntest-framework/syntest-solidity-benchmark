const HungryHoody = artifacts.require("HungryHoody");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('HungryHoody', (accounts) => {
	it('test for HungryHoody', async () => {
		const HungryHoodyDeUzal = await HungryHoody.new({from: accounts[0]});
		const addresswsjDk2c = accounts[3]
		const addressA1tDTBl = accounts[0]
		const uintTNOa0z5 = BigInt("772")
		const addressIVGw8XU = accounts[1]
		const addressizIeAH7 = accounts[3]
		const uintGZ9rph = await HungryHoodyDeUzal.allowance.call(addressA1tDTBl, addresswsjDk2c, {from: accounts[2]});
		const boolUmyegRy = await HungryHoodyDeUzal.transferFrom.call(addressizIeAH7, addressIVGw8XU, uintTNOa0z5, {from: accounts[1]});

		assert.equal(uintGZ9rph, BigInt("0"))
		await expect(HungryHoodyDeUzal.transferFrom.call(addressizIeAH7, addressIVGw8XU, uintTNOa0z5, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for HungryHoody', async () => {
		const HungryHoodygw5GATu = await HungryHoody.new({from: accounts[5]});
		const addressUz91dtY = accounts[3]
		const addresswPkoEaa = accounts[2]
		const addressq3BR3iw = accounts[3]
		const addressmk3ABr = accounts[1]
		const uintmc6GrTM = BigInt("710")
		const addressfZPxDO = accounts[1]
		const uintaeuuTSG = await HungryHoodygw5GATu.allowance.call(addresswPkoEaa, addressUz91dtY, {from: accounts[3]});
		const uintjiv9Ehc = await HungryHoodygw5GATu.allowance.call(addressmk3ABr, addressq3BR3iw, {from: accounts[1]});
		const boolA0caZvS = await HungryHoodygw5GATu.transfer.call(addressfZPxDO, uintmc6GrTM, {from: accounts[0]});

		assert.equal(uintaeuuTSG, BigInt("0"))
		assert.equal(uintjiv9Ehc, BigInt("0"))
		await expect(HungryHoodygw5GATu.transfer.call(addressfZPxDO, uintmc6GrTM, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for HungryHoody', async () => {
		const HungryHoodyum0A1dJ = await HungryHoody.new({from: accounts[1]});
		const uintSnFHtI = BigInt("503")
		const uintHF0cwRS = BigInt("1283")
		const uintcRvV6l5 = BigInt("1673")
		const addressfquTT2g = accounts[4]
		const uintCxfchw2 = await HungryHoodyum0A1dJ.totalSupply.call({from: accounts[4]});
		const uintHB9k1lV = await HungryHoodyum0A1dJ.safeDiv.call(uintHF0cwRS, uintSnFHtI, {from: accounts[1]});
		const booliYjffy = await HungryHoodyum0A1dJ.transfer.call(addressfquTT2g, uintcRvV6l5, {from: accounts[3]});

		assert.equal(uintCxfchw2, BigInt("25000000000000000000"))
		assert.equal(uintHB9k1lV, BigInt("2"))
		await expect(HungryHoodyum0A1dJ.transfer.call(addressfquTT2g, uintcRvV6l5, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for HungryHoody', async () => {
		const HungryHoodyLTXlLA9 = await HungryHoody.new({from: "0x0000000000000000000000000000000000000001"});
		const uintw9luEt4 = BigInt("989")
		const uinto2WEtsx = BigInt("402")
		const uintYBKKV5 = BigInt("1698")
		const uintRDRtNIt = BigInt("927")
		const uintfLxkR9K = BigInt("1004")
		const uintSYEDzhR = BigInt("834")
		const uintjz1S7TK = BigInt("120")
		const uintO8qpAHv = BigInt("927")
		const addressOZZnOfQ = "0x0000000000000000000000000000000000000001"
		const uintpir23Lb = await HungryHoodyLTXlLA9.safeDiv.call(uinto2WEtsx, uintw9luEt4, {from: accounts[5]});
		const uintbLrKM6L = await HungryHoodyLTXlLA9.safeMul.call(uintRDRtNIt, uintYBKKV5, {from: accounts[5]});
		const uintCHWpcbl = await HungryHoodyLTXlLA9.safeDiv.call(uintSYEDzhR, uintfLxkR9K, {from: accounts[0]});
		const uintJ2SVJxP = await HungryHoodyLTXlLA9.safeDiv.call(uintO8qpAHv, uintjz1S7TK, {from: accounts[3]});
		const uintU6rDGJ = await HungryHoodyLTXlLA9.balanceOf.call(addressOZZnOfQ, {from: accounts[5]});
	});

	it('test for HungryHoody', async () => {
		const HungryHoodyeFnCEHe = await HungryHoody.new({from: accounts[1]});
		const addressw7LCYRL = "0x0000000000000000000000000000000000000001"
		const uintdYQFMH = BigInt("195")
		const addressdaAWETE = accounts[5]
		const uintqyh4Bsq = BigInt("394")
		const uintIdciXGv = BigInt("790")
		const uintq1ZxHot = BigInt("634")
		const uintF9Rrx1O = BigInt("1691")
		const uintMS5Yy3H = await HungryHoodyeFnCEHe.balanceOf.call(addressw7LCYRL, {from: accounts[0]});
		const booldwZ2X6n = await HungryHoodyeFnCEHe.transfer.call(addressdaAWETE, uintdYQFMH, {from: accounts[2]});
		const uintzjh6hgR = await HungryHoodyeFnCEHe.safeAdd.call(uintIdciXGv, uintqyh4Bsq, {from: accounts[4]});
		const uintunwKIpm = await HungryHoodyeFnCEHe.safeMul.call(uintF9Rrx1O, uintq1ZxHot, {from: accounts[0]});

		assert.equal(uintMS5Yy3H, BigInt("0"))
		await expect(HungryHoodyeFnCEHe.transfer.call(addressdaAWETE, uintdYQFMH, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for HungryHoody', async () => {
		const HungryHoodyYjcIVXs = await HungryHoody.new({from: accounts[0]});
		const uintXg3rVJV = BigInt("1318")
		const uintMwngu8 = BigInt("924")
		const uintqxcIkP = BigInt("1566")
		const uintlR0JvPP = BigInt("178")
		const uintR5PQBgn = await HungryHoodyYjcIVXs.safeAdd.call(uintMwngu8, uintXg3rVJV, {from: accounts[1]});
		const uintvWvccRJ = await HungryHoodyYjcIVXs.safeMul.call(uintlR0JvPP, uintqxcIkP, {from: accounts[1]});

		assert.equal(uintR5PQBgn, BigInt("2242"))
		assert.equal(uintvWvccRJ, BigInt("278748"))
	});

	it('test for HungryHoody', async () => {
		const HungryHoodyzANIElO = await HungryHoody.new({from: accounts[4]});
		const uintHvLa8s = BigInt("1445")
		const addressSmOppK7 = accounts[5]
		const addressCaXJ7OB = accounts[3]
		const uintFoLksOe = BigInt("1115")
		const uintjofkD7j = BigInt("1631")
		const addressMvwcajx = "0x0000000000000000000000000000000000000001"
		const uintLLGEuKj = BigInt("1895")
		const uintPkiOuqH = BigInt("1991")
		const addresstt2toL6 = accounts[3]
		const addressVowwfS = accounts[3]
		const boolhMDXrUp = await HungryHoodyzANIElO.approve.call(addressSmOppK7, uintHvLa8s, {from: accounts[1]});
		const uintCtUeGd3 = await HungryHoodyzANIElO.balanceOf.call(addressCaXJ7OB, {from: accounts[0]});
		const uintvnAooT3 = await HungryHoodyzANIElO.safeSub.call(uintjofkD7j, uintFoLksOe, {from: accounts[1]});
		const uintR3fAug = await HungryHoodyzANIElO.balanceOf.call(addressMvwcajx, {from: "0x0000000000000000000000000000000000000001"});
		const uintJokK6pi = await HungryHoodyzANIElO.safeDiv.call(uintPkiOuqH, uintLLGEuKj, {from: accounts[2]});
		const uintaIwggnv = await HungryHoodyzANIElO.allowance.call(addressVowwfS, addresstt2toL6, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolhMDXrUp, true)
		assert.equal(uintCtUeGd3, BigInt("0"))
		assert.equal(uintJokK6pi, BigInt("1"))
		assert.equal(uintR3fAug, BigInt("0"))
		assert.equal(uintaIwggnv, BigInt("0"))
		assert.equal(uintvnAooT3, BigInt("516"))
	});
})