const Reentrance = artifacts.require("Reentrance");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Reentrance', (accounts) => {
	it('test for Reentrance', async () => {
		const ReentranceInMZ03y = await Reentrance.new({from: accounts[3]});
		const uintlkBaGD = BigInt("912")
		const uintYng8cTg = await ReentranceInMZ03y.withdraw.call(uintlkBaGD, {from: accounts[2]});
		await ReentranceInMZ03y.topup.call({from: accounts[4]});

		await expect(ReentranceInMZ03y.topup.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Reentrance', async () => {
		const Reentrancem5Gc3rH = await Reentrance.new({from: accounts[4]});
		const addressbicao0 = accounts[5]
		const addressv70O3p = accounts[2]
		const uintxUgnaqu = await Reentrancem5Gc3rH.balanceOf.call(addressbicao0, {from: accounts[1]});
		const uintKsyq31o = await Reentrancem5Gc3rH.balanceOf.call(addressv70O3p, {from: accounts[2]});

		assert.equal(uintKsyq31o, BigInt("0"))
		assert.equal(uintxUgnaqu, BigInt("0"))
	});

	it('test for Reentrance', async () => {
		const ReentrancekEzGrUC = await Reentrance.new({from: "0x0000000000000000000000000000000000000001"});
		const uintMsz924X = BigInt("304")
		const addressGrdDlzE = accounts[2]
		const uinthXm6KTT = BigInt("445")
		const addressSw33ab = accounts[0]
		const uintJWBQNnb = await ReentrancekEzGrUC.withdraw.call(uintMsz924X, {from: "0x0000000000000000000000000000000000000001"});
		const uintEJdX4v = await ReentrancekEzGrUC.balanceOf.call(addressGrdDlzE, {from: accounts[2]});
		const uintYWxF1W = await ReentrancekEzGrUC.withdraw.call(uinthXm6KTT, {from: accounts[1]});
		const uintebtZ9eo = await ReentrancekEzGrUC.balanceOf.call(addressSw33ab, {from: accounts[3]});
	});

	it('test for Reentrance', async () => {
		const ReentrancesOxQg9g = await Reentrance.new({from: accounts[0]});
		const addressah0EQZ = accounts[3]
		const addressL1Ylpau = accounts[5]
		const uinthYCgwgi = BigInt("0")
		const addressQ5Dd152 = accounts[4]
		const uintpjb4l0r = await ReentrancesOxQg9g.balanceOf.call(addressah0EQZ, {from: accounts[4]});
		await ReentrancesOxQg9g.topup.call({from: accounts[4]});
		const uintuv0YDiq = await ReentrancesOxQg9g.balanceOf.call(addressL1Ylpau, {from: accounts[2]});
		await ReentrancesOxQg9g.topup.call({from: accounts[3]});
		const uintB1CHwGh = await ReentrancesOxQg9g.withdraw.call(uinthYCgwgi, {from: accounts[1]});
		const uintROmJJ2L = await ReentrancesOxQg9g.balanceOf.call(addressQ5Dd152, {from: accounts[3]});

		assert.equal(uintpjb4l0r, BigInt("0"))
		await expect(ReentrancesOxQg9g.topup.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});
})