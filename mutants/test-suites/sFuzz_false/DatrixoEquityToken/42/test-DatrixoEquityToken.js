const DatrixoEquityToken = artifacts.require("DatrixoEquityToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('DatrixoEquityToken', (accounts) => {
	it('test for DatrixoEquityToken', async () => {
		const address46EbAN = "0x0000000000000000000000000000000000000001"
		const uintDslWH6a = BigInt("1692")
		const DatrixoEquityTokenPn0tYCe = await DatrixoEquityToken.new(address46EbAN, uintDslWH6a, {from: accounts[4]});
		const uintxO7INp = BigInt("408")
		const addresslHVNmh = accounts[0]
		const addressXejt2zP = accounts[4]
		const uintbyyXSf = BigInt("22")
		const addresshmdn1sb = accounts[3]
		const uintLDQalOA = BigInt("1235")
		const addressGSpxZbP = accounts[0]
//		await DatrixoEquityTokenPn0tYCe.onlyOwner.call({from: accounts[4]});
//		const boolBlj79Yk = await DatrixoEquityTokenPn0tYCe.transferFrom.call(addressXejt2zP, addresslHVNmh, uintxO7INp, {from: accounts[0]});
//		const boolHgVuAkm = await DatrixoEquityTokenPn0tYCe.transfer.call(addresshmdn1sb, uintbyyXSf, {from: accounts[3]});
//		const boolh1P6CaD = await DatrixoEquityTokenPn0tYCe.transfer.call(addressGSpxZbP, uintLDQalOA, {from: accounts[3]});

		await expect(DatrixoEquityTokenPn0tYCe.onlyOwner.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addresss67wjCy = accounts[0]
		const uintNf5WMqw = BigInt("476")
		const DatrixoEquityTokeng1nKnye = await DatrixoEquityToken.new(addresss67wjCy, uintNf5WMqw, {from: accounts[2]});
		const uintGjhw4wj = BigInt("103")
		const uintuzb3bn = BigInt("1986")
//		const uintv2VeKFt = await DatrixoEquityTokeng1nKnye.setStart.call(uintGjhw4wj, {from: accounts[2]});
//		const uintEntAlxX = await DatrixoEquityTokeng1nKnye.setStart.call(uintuzb3bn, {from: "0x0000000000000000000000000000000000000001"});

		await expect(DatrixoEquityTokeng1nKnye.setStart.call(uintGjhw4wj, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addressU81CxM = accounts[0]
		const uintqXzbgdw = BigInt("380")
		const DatrixoEquityTokenpxBXXyL = await DatrixoEquityToken.new(addressU81CxM, uintqXzbgdw, {from: "0x0000000000000000000000000000000000000001"});
		const uintHeOsnPb = BigInt("652")
		const addressqfKWawt = accounts[4]
		const addressah0aAVu = accounts[4]
		const addressQD7vHf5 = accounts[2]
		await DatrixoEquityTokenpxBXXyL.afterStartTime.call({from: accounts[3]});
		await DatrixoEquityTokenpxBXXyL.afterStartTime.call({from: accounts[1]});
		const boolXqoatIn = await DatrixoEquityTokenpxBXXyL.transferFrom.call(addressah0aAVu, addressqfKWawt, uintHeOsnPb, {from: accounts[0]});
		const addressarrayZEpufB = await DatrixoEquityTokenpxBXXyL.getShareholdersArray.call({from: accounts[1]});
		const boolplJhsDY = await DatrixoEquityTokenpxBXXyL.removeShareholder.call(addressQD7vHf5, {from: accounts[4]});
		await DatrixoEquityTokenpxBXXyL.afterStartTime.call({from: accounts[4]});
	});

	it('test for DatrixoEquityToken', async () => {
		const addressAAGulOJ = accounts[3]
		const uintF0PoOoZ = BigInt("1950")
		const DatrixoEquityTokenzHwu8PY = await DatrixoEquityToken.new(addressAAGulOJ, uintF0PoOoZ, {from: accounts[3]});
		const uintmIWl3Hx = BigInt("973")
		const addressJjoEJvK = accounts[0]
		const addressUXKCUGI = accounts[4]
		const addressarrayH9Wb5su = await DatrixoEquityTokenzHwu8PY.getShareholdersArray.call({from: accounts[4]});
//		const boolGWTis2F = await DatrixoEquityTokenzHwu8PY.transferFrom.call(addressUXKCUGI, addressJjoEJvK, uintmIWl3Hx, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(addressarrayH9Wb5su, )
		await expect(DatrixoEquityTokenzHwu8PY.transferFrom.call(addressUXKCUGI, addressJjoEJvK, uintmIWl3Hx, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addressWWTUXxy = accounts[0]
		const uintr8FxeVK = BigInt("476")
		const DatrixoEquityTokeng1nKnye = await DatrixoEquityToken.new(addressWWTUXxy, uintr8FxeVK, {from: accounts[2]});
		const addressHxDx2lv = accounts[1]
		const uintvSzgZUS = BigInt("103")
		const uintWhClc0K = BigInt("11")
//		const boolmo59XSA = await DatrixoEquityTokeng1nKnye.removeShareholder.call(addressHxDx2lv, {from: accounts[0]});
//		const uintv2VeKFt = await DatrixoEquityTokeng1nKnye.setStart.call(uintvSzgZUS, {from: accounts[2]});
//		const uintEntAlxX = await DatrixoEquityTokeng1nKnye.setStart.call(uintWhClc0K, {from: "0x0000000000000000000000000000000000000001"});

		await expect(DatrixoEquityTokeng1nKnye.removeShareholder.call(addressHxDx2lv, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addressyhZSkd = accounts[0]
		const uintVwIxEuB = BigInt("476")
		const DatrixoEquityTokeng1nKnye = await DatrixoEquityToken.new(addressyhZSkd, uintVwIxEuB, {from: accounts[2]});
		const uintvqO8xt = BigInt("540")
		const addressFfDKYF = "0x0000000000000000000000000000000000000001"
		const uintspkfQLH = BigInt("925")
		const addressqUu1KKR = accounts[4]
		const addressqqHIhDc = "0x0000000000000000000000000000000000000001"
		const uinttJhc0zU = BigInt("1986")
		const boolnEdCk7P = await DatrixoEquityTokeng1nKnye.transfer.call(addressFfDKYF, uintvqO8xt, {from: accounts[0]});
//		const boollvhAEMt = await DatrixoEquityTokeng1nKnye.transferFrom.call(addressqqHIhDc, addressqUu1KKR, uintspkfQLH, {from: accounts[0]});
//		const uintEntAlxX = await DatrixoEquityTokeng1nKnye.setStart.call(uinttJhc0zU, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolnEdCk7P, true)
		await expect(DatrixoEquityTokeng1nKnye.transferFrom.call(addressqqHIhDc, addressqUu1KKR, uintspkfQLH, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addresslBt11Yw = accounts[0]
		const uintYidGI2H = BigInt("476")
		const DatrixoEquityTokeng1nKnye = await DatrixoEquityToken.new(addresslBt11Yw, uintYidGI2H, {from: accounts[2]});
		const uintaHegMuM = BigInt("540")
		const addresstE3ooe3 = accounts[0]
		const uinthpxe0s4 = BigInt("925")
		const addressn8dhwg1 = accounts[5]
		const addressIg0TDzp = "0x0000000000000000000000000000000000000001"
		const uintxtj91Rv = BigInt("1986")
//		const boolnEdCk7P = await DatrixoEquityTokeng1nKnye.transfer.call(addresstE3ooe3, uintaHegMuM, {from: accounts[0]});
//		const addressarrayVi0n0rw = await DatrixoEquityTokeng1nKnye.getShareholdersArray.call({from: accounts[0]});
//		const boollvhAEMt = await DatrixoEquityTokeng1nKnye.transferFrom.call(addressIg0TDzp, addressn8dhwg1, uinthpxe0s4, {from: accounts[0]});
//		const addressarrayg0WNSw7 = await DatrixoEquityTokeng1nKnye.getShareholdersArray.call({from: accounts[3]});
//		const uintEntAlxX = await DatrixoEquityTokeng1nKnye.setStart.call(uintxtj91Rv, {from: "0x0000000000000000000000000000000000000001"});

		await expect(DatrixoEquityTokeng1nKnye.transfer.call(addresstE3ooe3, uintaHegMuM, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addressmfGLYBB = accounts[0]
		const uintiQpV0vQ = BigInt("476")
		const DatrixoEquityTokeng1nKnye = await DatrixoEquityToken.new(addressmfGLYBB, uintiQpV0vQ, {from: accounts[2]});
		const uintVjntl4u = BigInt("880")
		const addressYo86voP = accounts[3]
		const addressWSqckud = accounts[0]
		const addressdsPITnZ = accounts[1]
		const boolzEk11hH = await DatrixoEquityTokeng1nKnye.transferFrom.call(addressWSqckud, addressYo86voP, uintVjntl4u, {from: accounts[0]});
//		const boolmo59XSA = await DatrixoEquityTokeng1nKnye.removeShareholder.call(addressdsPITnZ, {from: accounts[0]});

		assert.equal(boolzEk11hH, true)
		await expect(DatrixoEquityTokeng1nKnye.removeShareholder.call(addressdsPITnZ, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addressumIGdoV = accounts[0]
		const uintY3OvEbf = BigInt("476")
		const DatrixoEquityTokeng1nKnye = await DatrixoEquityToken.new(addressumIGdoV, uintY3OvEbf, {from: accounts[2]});
		const uintDmbNfVk = BigInt("2000")
		const addressRZnvKqt = accounts[1]
//		const uintAV6RNr = await DatrixoEquityTokeng1nKnye.setStart.call(uintDmbNfVk, {from: accounts[0]});
//		const boolmo59XSA = await DatrixoEquityTokeng1nKnye.removeShareholder.call(addressRZnvKqt, {from: accounts[0]});

		await expect(DatrixoEquityTokeng1nKnye.setStart.call(uintDmbNfVk, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})