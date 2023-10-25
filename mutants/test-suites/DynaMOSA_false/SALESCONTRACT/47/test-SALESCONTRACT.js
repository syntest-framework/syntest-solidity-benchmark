const SALESCONTRACT = artifacts.require("SALESCONTRACT");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('SALESCONTRACT', (accounts) => {
	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTBfe6k4m = await SALESCONTRACT.new({from: accounts[4]});
		const uintWh71aB6 = BigInt("1929")
		const uintH4RfYT = BigInt("341")
		const addressOiYyHYa = accounts[5]
		const addressJeYFdYH = accounts[4]
//		const uintQUWfXdf = await SALESCONTRACTBfe6k4m._setStage.call(uintWh71aB6, {from: accounts[0]});
//		const addressuZacKeO = await SALESCONTRACTBfe6k4m._setSalesPool.call(addressOiYyHYa, uintH4RfYT, {from: accounts[2]});
//		await SALESCONTRACTBfe6k4m.clearTokens.call({from: accounts[4]});
//		await SALESCONTRACTBfe6k4m.clearTokens.call({from: accounts[1]});
//		const addresszlDUpQz = await SALESCONTRACTBfe6k4m.setToken.call(addressJeYFdYH, {from: accounts[0]});

		await expect(SALESCONTRACTBfe6k4m._setStage.call(uintWh71aB6, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTeTvCw3 = await SALESCONTRACT.new({from: accounts[2]});
		const addressOjKap3u = accounts[0]
		const uintsRrPaVL = BigInt("149")
		const addressTnoehZm = accounts[0]
//		await SALESCONTRACTeTvCw3.ff.call({from: accounts[3]});
//		const addressX4EhY32 = await SALESCONTRACTeTvCw3.setToken.call(addressOjKap3u, {from: accounts[1]});
//		await SALESCONTRACTeTvCw3.ff.call({from: accounts[1]});
//		const uintKLFPk0t = await SALESCONTRACTeTvCw3._setStage.call(uintsRrPaVL, {from: accounts[2]});
//		await SALESCONTRACTeTvCw3.clearTokens.call({from: accounts[1]});
//		const boolIvmu2zz = await SALESCONTRACTeTvCw3.tokenSale.call(addressTnoehZm, {from: accounts[4]});

		await expect(SALESCONTRACTeTvCw3.ff.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTbOj9jPH = await SALESCONTRACT.new({from: "0x0000000000000000000000000000000000000001"});
		const uintD74AhL5 = BigInt("1761")
		const addresszgbsMS = accounts[4]
		const uintWGYzwCq = BigInt("257")
		const addressZ0L6NPJ = accounts[1]
		const uintsX8dw07 = BigInt("1346")
		const addressM1N6cY = accounts[0]
		const addressOguUXH = await SALESCONTRACTbOj9jPH._setSalesPool.call(addresszgbsMS, uintD74AhL5, {from: accounts[4]});
		await SALESCONTRACTbOj9jPH.ff.call({from: accounts[2]});
		await SALESCONTRACTbOj9jPH.clearETH.call({from: accounts[4]});
		await SALESCONTRACTbOj9jPH.clearTokens.call({from: accounts[4]});
		const addressIKaI8BT = await SALESCONTRACTbOj9jPH._setSalesPool.call(addressZ0L6NPJ, uintWGYzwCq, {from: "0x0000000000000000000000000000000000000001"});
		const addressjqo8hM7 = await SALESCONTRACTbOj9jPH._setSalesPool.call(addressM1N6cY, uintsX8dw07, {from: accounts[0]});
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTVx8TrMO = await SALESCONTRACT.new({from: accounts[5]});
		const addressHYPNhtS = accounts[2]
		const addresslr2H82X = accounts[0]
		const addressvmAFb17 = accounts[2]
//		const boolJecposm = await SALESCONTRACTVx8TrMO.tokenSale.call(addressHYPNhtS, {from: accounts[3]});
//		const boolCBebggp = await SALESCONTRACTVx8TrMO.tokenSale.call(addresslr2H82X, {from: accounts[4]});
//		const addressCsCeGks = await SALESCONTRACTVx8TrMO.setToken.call(addressvmAFb17, {from: accounts[4]});
//		await SALESCONTRACTVx8TrMO.clearTokens.call({from: accounts[5]});

		await expect(SALESCONTRACTVx8TrMO.tokenSale.call(addressHYPNhtS, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTGGZalSz = await SALESCONTRACT.new({from: accounts[2]});
		const uintkYiEZjT = BigInt("1958")
		const addressQTHuzBO = "0x0000000000000000000000000000000000000001"
		const uintvBl4BuQ = await SALESCONTRACTGGZalSz._setStage.call(uintkYiEZjT, {from: accounts[2]});
//		const boolhoLJiQP = await SALESCONTRACTGGZalSz.tokenSale.call(addressQTHuzBO, {from: accounts[3]});

		await expect(SALESCONTRACTGGZalSz.tokenSale.call(addressQTHuzBO, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTGGZalSz = await SALESCONTRACT.new({from: accounts[2]});
		const uintr9VRabA = BigInt("1952")
		const addressTeqaWGC = "0x0000000000000000000000000000000000000001"
		const uintKbsVliu = BigInt("1711")
		const addressWOZglTd = accounts[2]
		const uintvBl4BuQ = await SALESCONTRACTGGZalSz._setStage.call(uintr9VRabA, {from: accounts[2]});
//		await SALESCONTRACTGGZalSz.clearTokens.call({from: accounts[2]});
//		const boolhoLJiQP = await SALESCONTRACTGGZalSz.tokenSale.call(addressTeqaWGC, {from: accounts[3]});
//		const addressCY9LoUh = await SALESCONTRACTGGZalSz._setSalesPool.call(addressWOZglTd, uintKbsVliu, {from: accounts[3]});

		await expect(SALESCONTRACTGGZalSz.clearTokens.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTGGZalSz = await SALESCONTRACT.new({from: accounts[2]});
		const uintu1XVGwW = BigInt("1958")
		const addressB1yXmLu = accounts[4]
		const addressOIZNgai = "0x0000000000000000000000000000000000000001"
		const uintvBl4BuQ = await SALESCONTRACTGGZalSz._setStage.call(uintu1XVGwW, {from: accounts[2]});
		const addressSogpwbU = await SALESCONTRACTGGZalSz.setToken.call(addressB1yXmLu, {from: accounts[2]});
//		const boolhoLJiQP = await SALESCONTRACTGGZalSz.tokenSale.call(addressOIZNgai, {from: accounts[3]});

		await expect(SALESCONTRACTGGZalSz.tokenSale.call(addressOIZNgai, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTeTvCw3 = await SALESCONTRACT.new({from: accounts[2]});
		const uintd0a47X = BigInt("1991")
		const addressPXd7JaL = accounts[0]
		const addresszpv78e = accounts[0]
		const addresswrOtpNN = accounts[0]
		const addressuFTyYe = await SALESCONTRACTeTvCw3._setSalesPool.call(addressPXd7JaL, uintd0a47X, {from: accounts[2]});
//		await SALESCONTRACTeTvCw3.ff.call({from: accounts[3]});
//		const addressX4EhY32 = await SALESCONTRACTeTvCw3.setToken.call(addresszpv78e, {from: accounts[1]});
//		await SALESCONTRACTeTvCw3.clearTokens.call({from: accounts[1]});
//		const boolIvmu2zz = await SALESCONTRACTeTvCw3.tokenSale.call(addresswrOtpNN, {from: accounts[4]});

		await expect(SALESCONTRACTeTvCw3.ff.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTeTvCw3 = await SALESCONTRACT.new({from: accounts[2]});
		const addressIgFblrz = accounts[0]
//		await SALESCONTRACTeTvCw3.clearETH.call({from: accounts[2]});
//		await SALESCONTRACTeTvCw3.ff.call({from: accounts[3]});
//		await SALESCONTRACTeTvCw3.clearTokens.call({from: accounts[1]});
//		const boolIvmu2zz = await SALESCONTRACTeTvCw3.tokenSale.call(addressIgFblrz, {from: accounts[4]});

		await expect(SALESCONTRACTeTvCw3.clearETH.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for SALESCONTRACT', async () => {
		const SALESCONTRACTGGZalSz = await SALESCONTRACT.new({from: accounts[2]});
		const addressep5h2HU = "0x00000000000000000000000000000000000000-1"
		const uintNKiiLJc = BigInt("1449")
		const addressf7qc7J2 = accounts[4]
		const addresslZR8Ih = accounts[1]
//		const boolhoLJiQP = await SALESCONTRACTGGZalSz.tokenSale.call(addressep5h2HU, {from: accounts[3]});
//		const addressepzxd5Q = await SALESCONTRACTGGZalSz._setSalesPool.call(addressf7qc7J2, uintNKiiLJc, {from: accounts[3]});
//		const addressFrNLOXM = await SALESCONTRACTGGZalSz.setToken.call(addresslZR8Ih, {from: accounts[2]});
//		await SALESCONTRACTGGZalSz.clearTokens.call({from: accounts[1]});

		await expect(SALESCONTRACTGGZalSz.tokenSale.call(addressep5h2HU, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})