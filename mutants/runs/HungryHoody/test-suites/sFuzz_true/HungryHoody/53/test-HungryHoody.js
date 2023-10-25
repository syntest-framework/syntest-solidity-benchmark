const HungryHoody = artifacts.require("HungryHoody");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('HungryHoody', (accounts) => {
	it('test for HungryHoody', async () => {
		const HungryHoodyycGaGb1 = await HungryHoody.new({from: accounts[1]});
		const uintYqJOWH7 = BigInt("845")
		const addressjobCgho = accounts[0]
		const uintVvK65P = BigInt("636")
		const uintqGtvgDu = BigInt("1369")
		const addressTDQL4VM = accounts[3]
		const addressG0oF1p = "0x0000000000000000000000000000000000000001"
		const addressxyvCdIq = "0x0000000000000000000000000000000000000001"
		const addressp7ui0RY = accounts[2]
		const uintfccRBNr = BigInt("1968")
		const uintOeFJAq2 = BigInt("381")
		const boolihoUIn4 = await HungryHoodyycGaGb1.transfer.call(addressjobCgho, uintYqJOWH7, {from: accounts[0]});
		const uinthjhRPx = await HungryHoodyycGaGb1.safeMul.call(uintqGtvgDu, uintVvK65P, {from: accounts[1]});
		const uintFpnMgk = await HungryHoodyycGaGb1.allowance.call(addressG0oF1p, addressTDQL4VM, {from: accounts[0]});
		const uintiGix9Zf = await HungryHoodyycGaGb1.allowance.call(addressp7ui0RY, addressxyvCdIq, {from: accounts[0]});
		const uintfKhBdyJ = await HungryHoodyycGaGb1.safeSub.call(uintOeFJAq2, uintfccRBNr, {from: accounts[2]});

		await expect(HungryHoodyycGaGb1.transfer.call(addressjobCgho, uintYqJOWH7, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for HungryHoody', async () => {
		const HungryHoodyLgE8zsj = await HungryHoody.new({from: accounts[2]});
		const uints6l4BUD = BigInt("856")
		const addressj20Wc0l = accounts[1]
		const uintIknbX8D = BigInt("1302")
		const uint0AWOVd = BigInt("805")
		const addresswQWjrxN = accounts[2]
		const addressRQuE6r = accounts[3]
		const uintZ9u0AI6 = BigInt("969")
		const uinth9KsMm1 = BigInt("1040")
		const addressbOU4He = accounts[0]
		const addresslNl2j9K = accounts[4]
		const uinto9yV0xs = await HungryHoodyLgE8zsj.totalSupply.call({from: accounts[1]});
		const boolv7DlVlS = await HungryHoodyLgE8zsj.approve.call(addressj20Wc0l, uints6l4BUD, {from: accounts[0]});
		const uintGAELVua = await HungryHoodyLgE8zsj.safeMul.call(uint0AWOVd, uintIknbX8D, {from: accounts[1]});
		const uintFR0JaJB = await HungryHoodyLgE8zsj.allowance.call(addressRQuE6r, addresswQWjrxN, {from: accounts[3]});
		const uintZoiT36j = await HungryHoodyLgE8zsj.safeMul.call(uinth9KsMm1, uintZ9u0AI6, {from: accounts[0]});
		const uintg8mL0es = await HungryHoodyLgE8zsj.allowance.call(addresslNl2j9K, addressbOU4He, {from: accounts[1]});

		assert.equal(boolv7DlVlS, true)
		assert.equal(uintFR0JaJB, BigInt("0"))
		assert.equal(uintGAELVua, BigInt("1048110"))
		assert.equal(uintZoiT36j, BigInt("1007760"))
		assert.equal(uintg8mL0es, BigInt("0"))
		assert.equal(uinto9yV0xs, BigInt("25000000000000000000"))
	});

	it('test for HungryHoody', async () => {
		const HungryHoodySXDS7sI = await HungryHoody.new({from: accounts[3]});
		const uintMc8KArf = BigInt("2008")
		const uintWkO8DQN = BigInt("227")
		const uintHIEQctE = BigInt("2006")
		const uintOwrRMEz = BigInt("1202")
		const uintmIuoDUT = BigInt("200")
		const addressaKelmuY = accounts[5]
		const uintRV1Prfg = await HungryHoodySXDS7sI.safeDiv.call(uintWkO8DQN, uintMc8KArf, {from: accounts[0]});
		const uintRieeziK = await HungryHoodySXDS7sI.safeMul.call(uintOwrRMEz, uintHIEQctE, {from: accounts[2]});
		const boolUlbIIhq = await HungryHoodySXDS7sI.transfer.call(addressaKelmuY, uintmIuoDUT, {from: accounts[4]});

		assert.equal(uintRV1Prfg, BigInt("0"))
		assert.equal(uintRieeziK, BigInt("2411212"))
		await expect(HungryHoodySXDS7sI.transfer.call(addressaKelmuY, uintmIuoDUT, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for HungryHoody', async () => {
		const HungryHoodyZyAajAo = await HungryHoody.new({from: accounts[4]});
		const uintTaSlqr6 = BigInt("1654")
		const uintF9hlhS6 = BigInt("1457")
		const addresszmW2xd9 = accounts[4]
		const addressSvhElB7 = accounts[0]
		const uinteFq82eV = await HungryHoodyZyAajAo.safeAdd.call(uintF9hlhS6, uintTaSlqr6, {from: accounts[5]});
		const uintFsVf3hB = await HungryHoodyZyAajAo.allowance.call(addressSvhElB7, addresszmW2xd9, {from: accounts[3]});
		const uintfTb0UXb = await HungryHoodyZyAajAo.totalSupply.call({from: accounts[1]});

		assert.equal(uintFsVf3hB, BigInt("0"))
		assert.equal(uinteFq82eV, BigInt("3111"))
		assert.equal(uintfTb0UXb, BigInt("25000000000000000000"))
	});

	it('test for HungryHoody', async () => {
		const HungryHoodyuCvFXa3 = await HungryHoody.new({from: accounts[0]});
		const uintJ1Eq3Y1 = BigInt("1884")
		const uintFYYBFbM = BigInt("1814")
		const addressRVekVnv = accounts[0]
		const uintA7LOEus = BigInt("931")
		const addressIusfKLO = accounts[5]
		const addressWKZS6zC = accounts[4]
		const uintZn9oz7x = await HungryHoodyuCvFXa3.safeAdd.call(uintFYYBFbM, uintJ1Eq3Y1, {from: accounts[3]});
		const uintNdAIz0W = await HungryHoodyuCvFXa3.balanceOf.call(addressRVekVnv, {from: accounts[2]});
		const boolcZWFNa0 = await HungryHoodyuCvFXa3.approve.call(addressIusfKLO, uintA7LOEus, {from: accounts[0]});
		const uintYlcttg = await HungryHoodyuCvFXa3.balanceOf.call(addressWKZS6zC, {from: accounts[4]});

		assert.equal(boolcZWFNa0, true)
		assert.equal(uintNdAIz0W, BigInt("25000000000000000000"))
		assert.equal(uintYlcttg, BigInt("0"))
		assert.equal(uintZn9oz7x, BigInt("3698"))
	});

	it('test for HungryHoody', async () => {
		const HungryHoodyJ8QQiv = await HungryHoody.new({from: "0x0000000000000000000000000000000000000001"});
		const uintQJdtWz = BigInt("1593")
		const uintTI9uIr = BigInt("1084")
		const uintTevONEt = BigInt("889")
		const uintfzVHqSt = BigInt("331")
		const addressV4YSEai = accounts[2]
		const uintD77oy6d = BigInt("626")
		const addresskvlIE1d = accounts[0]
		const addressj7bfbs = accounts[0]
		const uintEB9atMI = BigInt("183")
		const uintJ3fRbTL = BigInt("924")
		const uintVcKxhgZ = await HungryHoodyJ8QQiv.safeDiv.call(uintTI9uIr, uintQJdtWz, {from: accounts[3]});
		const uintkst47On = await HungryHoodyJ8QQiv.safeSub.call(uintfzVHqSt, uintTevONEt, {from: accounts[4]});
		const uintdwPNd3u = await HungryHoodyJ8QQiv.balanceOf.call(addressV4YSEai, {from: accounts[4]});
		const boolKDlqny8 = await HungryHoodyJ8QQiv.transferFrom.call(addressj7bfbs, addresskvlIE1d, uintD77oy6d, {from: accounts[4]});
		const uintBwUEsDu = await HungryHoodyJ8QQiv.safeMul.call(uintJ3fRbTL, uintEB9atMI, {from: accounts[0]});
	});

	it('test for HungryHoody', async () => {
		const HungryHoodyIKYJfeq = await HungryHoody.new({from: accounts[5]});
		const uintEwjuJM6 = BigInt("453")
		const uintAGDnnSL = BigInt("1961")
		const uintbSAPBfx = BigInt("95")
		const addressHWyjR9l = accounts[2]
		const uintvLVNrgH = BigInt("1713")
		const addressiLSgFo2 = accounts[0]
		const addressMtKvL7N = accounts[5]
		const addressW7qpdbx = accounts[3]
		const addressajd5iBU = accounts[4]
		const uintl83OTs = await HungryHoodyIKYJfeq.totalSupply.call({from: accounts[3]});
		const uintXZz7VSk = await HungryHoodyIKYJfeq.safeDiv.call(uintAGDnnSL, uintEwjuJM6, {from: accounts[2]});
		const uintNQ2GLyu = await HungryHoodyIKYJfeq.totalSupply.call({from: accounts[0]});
		const boolAivFrod = await HungryHoodyIKYJfeq.approve.call(addressHWyjR9l, uintbSAPBfx, {from: accounts[4]});
		const boolE1GPuDu = await HungryHoodyIKYJfeq.transferFrom.call(addressMtKvL7N, addressiLSgFo2, uintvLVNrgH, {from: accounts[0]});
		const uintuNKfVVZ = await HungryHoodyIKYJfeq.allowance.call(addressajd5iBU, addressW7qpdbx, {from: accounts[1]});

		assert.equal(boolAivFrod, true)
		assert.equal(uintNQ2GLyu, BigInt("25000000000000000000"))
		assert.equal(uintXZz7VSk, BigInt("4"))
		assert.equal(uintl83OTs, BigInt("25000000000000000000"))
		await expect(HungryHoodyIKYJfeq.transferFrom.call(addressMtKvL7N, addressiLSgFo2, uintvLVNrgH, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})