const vnxManager = artifacts.require("vnxManager");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('vnxManager', (accounts) => {
	it('test for vnxManager', async () => {
		const vnxManagerNfy7fn0 = await vnxManager.new({from: "0x0000000000000000000000000000000000000001"});
		const uintmq2hozm = BigInt("494")
		const addressq7uIVdo = accounts[1]
		const uintC1QpHfi = BigInt("568")
		const stringPpRdo3 = "ZcVGHEljepqVjUpDOw1PwpQeQSaWYijLVqpOHLB6KHnqKhJYiE2Mqy1yEfwxhdItmSzaVkRUmyWIJm3uzNY8Wqagngo"
		const addresswyHlyZ = accounts[1]
		const addressDL5gNds = accounts[1]
		const addressb4vC161 = accounts[3]
		const addressrMRj3Wh = await vnxManagerNfy7fn0.addBearer.call(addressq7uIVdo, uintmq2hozm, {from: accounts[2]});
		const uint256kuI4TEf = await vnxManagerNfy7fn0.addRole.call(stringPpRdo3, uintC1QpHfi, {from: "0x0000000000000000000000000000000000000001"});
		const addressvNIxwyP = await vnxManagerNfy7fn0.transferOwnership.call(addresswyHlyZ, {from: accounts[5]});
		const boolZTTZvjA = await vnxManagerNfy7fn0.isOwner.call({from: accounts[4]});
		const boolX5JF3tV = await vnxManagerNfy7fn0.transferContractOwnership.call(addressb4vC161, addressDL5gNds, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for vnxManager', async () => {
		const vnxManagerjKYl3ba = await vnxManager.new({from: accounts[0]});
		const addressr4DLyA = accounts[2]
		const addressyGriXJl = accounts[2]
		const uintE1XAs1 = BigInt("1769")
		const addressvuPMEal = "0x0000000000000000000000000000000000000001"
		const uintBysDmH = BigInt("1006")
		const addressyuhf7HJ = accounts[1]
//		const boolkjsJNCk = await vnxManagerjKYl3ba.transferContractOwnership.call(addressyGriXJl, addressr4DLyA, {from: accounts[3]});
//		const boolG7GVUtt = await vnxManagerjKYl3ba.hasRole.call(addressvuPMEal, uintE1XAs1, {from: accounts[3]});
//		const boolnVgJQcO = await vnxManagerjKYl3ba.hasRole.call(addressyuhf7HJ, uintBysDmH, {from: accounts[2]});

		await expect(vnxManagerjKYl3ba.transferContractOwnership.call(addressyGriXJl, addressr4DLyA, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerxiaTWr = await vnxManager.new({from: accounts[4]});
		const uintxDOiKj8 = BigInt("712")
		const addressk5TKaGv = accounts[4]
		const stringZ2uln0u = "VCWTssjTydGmqXTapDst6j5yiSZS1u3Ct6ecyWLQDgoi7LLoRqd2R6LjOKV7vj4XNVEuiOQQPUOX"
//		await vnxManagerxiaTWr.onlyAdmin.call({from: accounts[0]});
//		const boolYQoIO5z = await vnxManagerxiaTWr.hasRole.call(addressk5TKaGv, uintxDOiKj8, {from: accounts[2]});
//		const uint256RHCKtts = await vnxManagerxiaTWr.addRootRole.call(stringZ2uln0u, {from: accounts[2]});
//		await vnxManagerxiaTWr.renounceOwnership.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256eT1ipHZ = await vnxManagerxiaTWr.totalRoles.call({from: accounts[3]});

		await expect(vnxManagerxiaTWr.onlyAdmin.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagertTSc2Zp = await vnxManager.new({from: accounts[0]});
		const uintWpUX0xM = BigInt("500")
		const stringHZUs6M1 = "Jw6lfyUMzgB5TcwJbADbbqxUW3UjIUyikaLChhB3xoJBsyioKa2FDVy"
		const addressji85HsW = accounts[5]
		const boolVfCJFL = await vnxManagertTSc2Zp.isAdmin.call({from: accounts[4]});
//		const uint256LyADrud = await vnxManagertTSc2Zp.addRole.call(stringHZUs6M1, uintWpUX0xM, {from: accounts[0]});
//		const addressBhq9TAi = await vnxManagertTSc2Zp.transferOwnership.call(addressji85HsW, {from: accounts[0]});

		assert.equal(boolVfCJFL, false)
		await expect(vnxManagertTSc2Zp.addRole.call(stringHZUs6M1, uintWpUX0xM, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerb7jqjoU = await vnxManager.new({from: accounts[4]});
		const uintts2Ex6E = BigInt("1644")
		const addressPO6uaPG = accounts[4]
//		const address1BlJpk = await vnxManagerb7jqjoU.addBearer.call(addressPO6uaPG, uintts2Ex6E, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256w3U9vrK = await vnxManagerb7jqjoU.totalRoles.call({from: accounts[3]});
//		await vnxManagerb7jqjoU.renounceOwnership.call({from: accounts[1]});
//		const uint256aux6d8K = await vnxManagerb7jqjoU.totalRoles.call({from: accounts[4]});

		await expect(vnxManagerb7jqjoU.addBearer.call(addressPO6uaPG, uintts2Ex6E, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerrMpb7sG = await vnxManager.new({from: accounts[5]});
		const stringVXpzgD0 = "NcvTrvtfurbd1rJTwXq5kuMjyYAob3pxPQAp512hr6GmQM51Bew4dCwrUma3cvOo"
		const addressV5Xdl1w = accounts[2]
		const uintBXCV8f = BigInt("345")
		const addresstYCrY1A = accounts[5]
//		await vnxManagerrMpb7sG.renounceOwnership.call({from: accounts[4]});
//		const uint25662L9vb = await vnxManagerrMpb7sG.addRootRole.call(stringVXpzgD0, {from: accounts[5]});
//		const addresslrxgxHG = await vnxManagerrMpb7sG.transferOwnership.call(addressV5Xdl1w, {from: accounts[2]});
//		await vnxManagerrMpb7sG.onlyOwner.call({from: accounts[0]});
//		const boolF61VJ30 = await vnxManagerrMpb7sG.hasRole.call(addresstYCrY1A, uintBXCV8f, {from: accounts[0]});

		await expect(vnxManagerrMpb7sG.renounceOwnership.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerwtUwPRE = await vnxManager.new({from: accounts[3]});
		const uintQRxQMxf = BigInt("348")
		const addressiebyPY0 = accounts[0]
		const uintFEkKFkv = BigInt("347")
		const addressO97NFZ1 = accounts[5]
		const boolKS4Zkhq = await vnxManagerwtUwPRE.isOwner.call({from: accounts[1]});
//		const addressJzGRnrQ = await vnxManagerwtUwPRE.removeBearer.call(addressiebyPY0, uintQRxQMxf, {from: accounts[5]});
//		const addressLBGoU0R = await vnxManagerwtUwPRE.addBearer.call(addressO97NFZ1, uintFEkKFkv, {from: accounts[4]});

		assert.equal(boolKS4Zkhq, false)
		await expect(vnxManagerwtUwPRE.removeBearer.call(addressiebyPY0, uintQRxQMxf, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerwtUwPRE = await vnxManager.new({from: accounts[3]});
		const boolKS4Zkhq = await vnxManagerwtUwPRE.isOwner.call({from: accounts[1]});
		const boolMuFbFMe = await vnxManagerwtUwPRE.isAdmin.call({from: accounts[0]});
		const uint256XsCHPZx = await vnxManagerwtUwPRE.totalRoles.call({from: accounts[2]});

		assert.equal(boolKS4Zkhq, false)
		assert.equal(boolMuFbFMe, false)
		assert.equal(uint256XsCHPZx, BigInt("1"))
	});

	it('test for vnxManager', async () => {
		const vnxManagerwtUwPRE = await vnxManager.new({from: accounts[3]});
		const uintlq8pjTO = BigInt("347")
		const addressaASEW0t = accounts[5]
//		await vnxManagerwtUwPRE.renounceOwnership.call({from: accounts[3]});
//		const addressLBGoU0R = await vnxManagerwtUwPRE.addBearer.call(addressaASEW0t, uintlq8pjTO, {from: accounts[4]});

		await expect(vnxManagerwtUwPRE.renounceOwnership.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerwtUwPRE = await vnxManager.new({from: accounts[3]});
		const uintWryciHY = BigInt("348")
		const addressT3BI30Y = accounts[1]
		const uintgchlxej = BigInt("347")
		const addresskOLsxGO = accounts[5]
		const boolKS4Zkhq = await vnxManagerwtUwPRE.isOwner.call({from: accounts[1]});
		const addresslhqOY9 = await vnxManagerwtUwPRE.owner.call({from: accounts[3]});
//		const addressJzGRnrQ = await vnxManagerwtUwPRE.removeBearer.call(addressT3BI30Y, uintWryciHY, {from: accounts[5]});
//		const booljuFA2H = await vnxManagerwtUwPRE.isAdmin.call({from: accounts[0]});
//		const addressLBGoU0R = await vnxManagerwtUwPRE.addBearer.call(addresskOLsxGO, uintgchlxej, {from: accounts[4]});

		assert.equal(addresslhqOY9, 0xf8A3924656386bC53A0C0b473C2Cc9790438eFeB)
		assert.equal(boolKS4Zkhq, false)
		await expect(vnxManagerwtUwPRE.removeBearer.call(addressT3BI30Y, uintWryciHY, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerwtUwPRE = await vnxManager.new({from: accounts[3]});
		const addressedWB3Zi = accounts[3]
		const addresspHHNOWr = accounts[1]
		const uintqeHGhY2 = BigInt("336")
		const addressUX22Xdh = accounts[4]
//		const boolzDTTzT = await vnxManagerwtUwPRE.transferContractOwnership.call(addresspHHNOWr, addressedWB3Zi, {from: accounts[3]});
//		const addressLBGoU0R = await vnxManagerwtUwPRE.addBearer.call(addressUX22Xdh, uintqeHGhY2, {from: accounts[4]});

		await expect(vnxManagerwtUwPRE.transferContractOwnership.call(addresspHHNOWr, addressedWB3Zi, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagergBN4yJB = await vnxManager.new({from: accounts[2]});
		const addressOiMbyQ = accounts[3]
		const uintTWo7WVq = BigInt("1540")
		const addressIeTb513 = accounts[1]
		const addressRmxzQc4 = await vnxManagergBN4yJB.transferOwnership.call(addressOiMbyQ, {from: accounts[2]});
		const boolTC2Xrs = await vnxManagergBN4yJB.isOwner.call({from: accounts[2]});
//		const addressV4gwUfS = await vnxManagergBN4yJB.addBearer.call(addressIeTb513, uintTWo7WVq, {from: accounts[0]});

		assert.equal(boolTC2Xrs, true)
		await expect(vnxManagergBN4yJB.addBearer.call(addressIeTb513, uintTWo7WVq, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})