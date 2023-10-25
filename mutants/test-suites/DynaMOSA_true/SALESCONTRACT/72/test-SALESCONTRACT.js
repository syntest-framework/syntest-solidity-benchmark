const SALESCONTRACT = artifacts.require("SALESCONTRACT");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('SALESCONTRACT', (accounts) => {
	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTvQXWEsY = await SALESCONTRACT.new({from: accounts[2]});
		const addressc380xN0 = accounts[2]
		const uintnoEPdXW = BigInt("1746")
		const addressAHVGTmg = accounts[5]
//		await SALESCONTRACTvQXWEsY.clearTokens.call({from: "0x0000000000000000000000000000000000000001"});
//		const boolWSPZevD = await SALESCONTRACTvQXWEsY.tokenSale.call(addressc380xN0, {from: accounts[4]});
//		const uinthI1gTyX = await SALESCONTRACTvQXWEsY._setStage.call(uintnoEPdXW, {from: accounts[3]});
//		const addresspzYVHH6 = await SALESCONTRACTvQXWEsY.setToken.call(addressAHVGTmg, {from: accounts[3]});
//		await SALESCONTRACTvQXWEsY.clearTokens.call({from: accounts[3]});

		await expect(SALESCONTRACTvQXWEsY.clearTokens.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACThH9UgtM = await SALESCONTRACT.new({from: "0x0000000000000000000000000000000000000001"});
		const uintmphbdbi = BigInt("816")
		const addressSa56muO = accounts[3]
		await SALESCONTRACThH9UgtM.clearETH.call({from: accounts[4]});
		const uintjoMOgkW = await SALESCONTRACThH9UgtM._setStage.call(uintmphbdbi, {from: accounts[4]});
		const boolvZ3n3O6 = await SALESCONTRACThH9UgtM.tokenSale.call(addressSa56muO, {from: accounts[1]});
		await SALESCONTRACThH9UgtM.ff.call({from: accounts[4]});
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTpYugJAz = await SALESCONTRACT.new({from: accounts[1]});
		const addressbM2GJv2 = accounts[0]
//		await SALESCONTRACTpYugJAz.ff.call({from: accounts[4]});
//		const boolgpjd5TO = await SALESCONTRACTpYugJAz.tokenSale.call(addressbM2GJv2, {from: accounts[5]});

		await expect(SALESCONTRACTpYugJAz.ff.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTFzJaSkj = await SALESCONTRACT.new({from: accounts[2]});
		const address43msLB = accounts[4]
		const addressj9HO0v4 = accounts[3]
		const uintm5ZNHqW = BigInt("1660")
		const addressA83D4bb = accounts[3]
		const uintMIBMZmf = BigInt("546")
		const addresszPeWv5x = accounts[5]
//		const boolK0hvQUA = await SALESCONTRACTFzJaSkj.tokenSale.call(address43msLB, {from: accounts[2]});
//		const boolZQ1SZ6a = await SALESCONTRACTFzJaSkj.tokenSale.call(addressj9HO0v4, {from: accounts[2]});
//		const addressLFLrg0E = await SALESCONTRACTFzJaSkj._setSalesPool.call(addressA83D4bb, uintm5ZNHqW, {from: accounts[3]});
//		const addressAwG5rnQ = await SALESCONTRACTFzJaSkj._setSalesPool.call(addresszPeWv5x, uintMIBMZmf, {from: "0x0000000000000000000000000000000000000001"});

		await expect(SALESCONTRACTFzJaSkj.tokenSale.call(address43msLB, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTcUkbiYO = await SALESCONTRACT.new({from: accounts[1]});
		const addressKNhqnOy = accounts[5]
		const addressP4w2iUw = accounts[3]
		const addressQeSTyhz = "0x0000000000000000000000000000000000000001"
		const addressqOxURkg = accounts[0]
		const addressER7KOea = await SALESCONTRACTcUkbiYO.setToken.call(addressKNhqnOy, {from: accounts[1]});
//		const boolzHLBrLY = await SALESCONTRACTcUkbiYO.tokenSale.call(addressP4w2iUw, {from: "0x0000000000000000000000000000000000000001"});
//		const boolD0ssX85 = await SALESCONTRACTcUkbiYO.tokenSale.call(addressQeSTyhz, {from: "0x0000000000000000000000000000000000000001"});
//		await SALESCONTRACTcUkbiYO.clearETH.call({from: "0x0000000000000000000000000000000000000001"});
//		const addressdHn8aY = await SALESCONTRACTcUkbiYO.setToken.call(addressqOxURkg, {from: accounts[5]});

		await expect(SALESCONTRACTcUkbiYO.tokenSale.call(addressP4w2iUw, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTpYugJAz = await SALESCONTRACT.new({from: accounts[1]});
		const address0c6lmR = accounts[2]
		const addressNRhdJh3 = accounts[0]
//		await SALESCONTRACTpYugJAz.clearETH.call({from: accounts[1]});
//		const addressVDIhJmA = await SALESCONTRACTpYugJAz.setToken.call(address0c6lmR, {from: "0x0000000000000000000000000000000000000001"});
//		const boolgpjd5TO = await SALESCONTRACTpYugJAz.tokenSale.call(addressNRhdJh3, {from: accounts[5]});

		await expect(SALESCONTRACTpYugJAz.clearETH.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTZHIo7wO = await SALESCONTRACT.new({from: accounts[4]});
		const uintrqmWkk4 = BigInt("474")
		const addresshkl3vQ0 = accounts[4]
		const addressnbIjFdv = accounts[3]
		const addressYdx0vxu = await SALESCONTRACTZHIo7wO._setSalesPool.call(addresshkl3vQ0, uintrqmWkk4, {from: accounts[4]});
//		const booloCacEpR = await SALESCONTRACTZHIo7wO.tokenSale.call(addressnbIjFdv, {from: accounts[2]});
//		await SALESCONTRACTZHIo7wO.clearETH.call({from: accounts[1]});
//		await SALESCONTRACTZHIo7wO.ff.call({from: accounts[2]});

		await expect(SALESCONTRACTZHIo7wO.tokenSale.call(addressnbIjFdv, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTWqA0G6 = await SALESCONTRACT.new({from: accounts[2]});
		const addressCdhwvZ7 = accounts[2]
//		await SALESCONTRACTWqA0G6.clearTokens.call({from: accounts[2]});
//		const boolPAr9WRn = await SALESCONTRACTWqA0G6.tokenSale.call(addressCdhwvZ7, {from: accounts[1]});

		await expect(SALESCONTRACTWqA0G6.clearTokens.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTpYugJAz = await SALESCONTRACT.new({from: accounts[1]});
		const uint1B962u = BigInt("1498")
		const addressQwdwy0T = accounts[4]
		const addresstvKbSX = accounts[3]
		const uintdqMVLwm = BigInt("870")
		const addressw1qi608 = accounts[0]
		const uintjEPROy = await SALESCONTRACTpYugJAz._setStage.call(uint1B962u, {from: accounts[1]});
//		const boolpbcIJwv = await SALESCONTRACTpYugJAz.tokenSale.call(addressQwdwy0T, {from: "0x0000000000000000000000000000000000000001"});
//		await SALESCONTRACTpYugJAz.ff.call({from: accounts[4]});
//		const boolrDwF5JG = await SALESCONTRACTpYugJAz.tokenSale.call(addresstvKbSX, {from: accounts[3]});
//		const uintWGfHBEH = await SALESCONTRACTpYugJAz._setStage.call(uintdqMVLwm, {from: accounts[2]});
//		const boolgpjd5TO = await SALESCONTRACTpYugJAz.tokenSale.call(addressw1qi608, {from: accounts[5]});

		await expect(SALESCONTRACTpYugJAz.tokenSale.call(addressQwdwy0T, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});
})