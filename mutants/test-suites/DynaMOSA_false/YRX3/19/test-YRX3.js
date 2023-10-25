const YRX3 = artifacts.require("YRX3");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('YRX3', (accounts) => {
	it('test for YRX3', async () => {
		const YRX3I2PUExm = await YRX3.new({from: accounts[3]});
		const uinto2tIx7D = BigInt("825")
		const addressSzpuOEF = accounts[3]
//		const uint256GQzyiSs = await YRX3I2PUExm.withdraw.call(uinto2tIx7D, {from: accounts[3]});
//		const addressIWLWC8z = await YRX3I2PUExm.transferOwnership.call(addressSzpuOEF, {from: accounts[3]});
//		const uint256XbqDHcK = await YRX3I2PUExm.lastTimeRewardApplicable.call({from: accounts[1]});
//		const boolRgjRREg = await YRX3I2PUExm.isOwner.call({from: accounts[4]});

		await expect(YRX3I2PUExm.withdraw.call(uinto2tIx7D, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3HBoD8rG = await YRX3.new({from: accounts[3]});
		const addressm6kONaF = accounts[0]
//		await YRX3HBoD8rG.exit.call({from: accounts[4]});
//		const addressN3yIB0u = await YRX3HBoD8rG.setRewardDistribution.call(addressm6kONaF, {from: accounts[2]});

		await expect(YRX3HBoD8rG.exit.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3aPQXvLZ = await YRX3.new({from: accounts[2]});
		const uintfgNDXH = BigInt("1351")
		const uintaJ3CULP = BigInt("1570")
//		await YRX3aPQXvLZ.renounceOwnership.call({from: accounts[4]});
//		const uint256Ml9DNGG = await YRX3aPQXvLZ.stake.call(uintfgNDXH, {from: accounts[3]});
//		const uint256nLaH2gL = await YRX3aPQXvLZ.stake.call(uintaJ3CULP, {from: accounts[4]});
//		await YRX3aPQXvLZ.notifyRewardAmount.call({from: accounts[0]});
//		const bool4kNaFg = await YRX3aPQXvLZ.isOwner.call({from: accounts[4]});

		await expect(YRX3aPQXvLZ.renounceOwnership.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3J8MBJL1 = await YRX3.new({from: accounts[1]});
		const addressAFKPhon = accounts[3]
		const addressZM4jBnQ = accounts[0]
		const addressEwqAofc = await YRX3J8MBJL1.setRewardDistribution.call(addressAFKPhon, {from: accounts[1]});
		const uint256S0QOBME = await YRX3J8MBJL1.earned.call(addressZM4jBnQ, {from: accounts[1]});
//		await YRX3J8MBJL1.onlyOwner.call({from: accounts[2]});
//		await YRX3J8MBJL1.exit.call({from: accounts[3]});

		assert.equal(uint256S0QOBME, BigInt("0"))
		await expect(YRX3J8MBJL1.onlyOwner.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3smYr2fa = await YRX3.new({from: accounts[0]});
		const addressW5FQ6OI = accounts[0]
		const addressbwnJvmw = accounts[3]
		const addressbTTovT0 = accounts[4]
		const uint256drck1rn = await YRX3smYr2fa.earned.call(addressW5FQ6OI, {from: accounts[2]});
		const addresswgyNKKk = await YRX3smYr2fa.transferOwnership.call(addressbwnJvmw, {from: accounts[0]});
//		const addressTH29W1J = await YRX3smYr2fa.transferOwnership.call(addressbTTovT0, {from: accounts[2]});
//		const boolesCKg6X = await YRX3smYr2fa.isOwner.call({from: accounts[2]});

		assert.equal(uint256drck1rn, BigInt("0"))
		await expect(YRX3smYr2fa.transferOwnership.call(addressbTTovT0, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3jEP5N6 = await YRX3.new({from: accounts[0]});
		const uintU05XTr8 = BigInt("1052")
		const addressuoS4qYV = "0x0000000000000000000000000000000000000001"
		const addressu9qBzX = accounts[1]
		const addresswQRZlgZ = await YRX3jEP5N6.owner.call({from: accounts[2]});
//		const uint256DHoEcgq = await YRX3jEP5N6.stake.call(uintU05XTr8, {from: accounts[2]});
//		const uint256lQfzI6q = await YRX3jEP5N6.balanceOf.call(addressuoS4qYV, {from: accounts[2]});
//		const addressxK8uNfJ = await YRX3jEP5N6.emergencyDrain.call(addressu9qBzX, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(addresswQRZlgZ, 0x205b84344b8014cA1524c0e3DDC6a1a3eEa3520B)
		await expect(YRX3jEP5N6.stake.call(uintU05XTr8, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3zZXJkS = await YRX3.new({from: accounts[5]});
		const addressqyh6IlJ = "0x0000000000000000000000000000000000000001"
//		const addresseWpsxq = await YRX3zZXJkS.emergencyDrain.call(addressqyh6IlJ, {from: accounts[2]});
//		const uint256wu1aK49 = await YRX3zZXJkS.totalSupply.call({from: accounts[2]});
//		const uint256zvhcTLk = await YRX3zZXJkS.totalSupply.call({from: accounts[3]});

		await expect(YRX3zZXJkS.emergencyDrain.call(addressqyh6IlJ, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3JJpiQrp = await YRX3.new({from: "0x0000000000000000000000000000000000000001"});
		const uinti7JhGkr = BigInt("1796")
		const addressa8tnDm = accounts[0]
		const uintQPxaLLW = BigInt("2000")
		const addressg2mc9kn = accounts[1]
		const addressnRFn47Y = accounts[0]
		const uint256vir8s3T = await YRX3JJpiQrp.stake.call(uinti7JhGkr, {from: accounts[0]});
		const uint256Go15sZL = await YRX3JJpiQrp.balanceOf.call(addressa8tnDm, {from: accounts[2]});
		const uint256k2usMB7 = await YRX3JJpiQrp.withdraw.call(uintQPxaLLW, {from: accounts[0]});
		await YRX3JJpiQrp.exit.call({from: accounts[2]});
		const uint256XUWnSqx = await YRX3JJpiQrp.balanceOf.call(addressg2mc9kn, {from: accounts[3]});
		const addressK4zabwd = await YRX3JJpiQrp.emergencyDrain.call(addressnRFn47Y, {from: accounts[3]});
	});

	it('test for YRX3', async () => {
		const YRX3aPQXvLZ = await YRX3.new({from: accounts[2]});
		const uintH43p4te = BigInt("1555")
		const uintJC5mIMp = BigInt("1351")
//		await YRX3aPQXvLZ.getReward.call({from: accounts[0]});
//		const uint256Zmb2Er8 = await YRX3aPQXvLZ.withdraw.call(uintH43p4te, {from: accounts[3]});
//		const uint256Ml9DNGG = await YRX3aPQXvLZ.stake.call(uintJC5mIMp, {from: accounts[3]});
//		const bool4kNaFg = await YRX3aPQXvLZ.isOwner.call({from: accounts[4]});

		await expect(YRX3aPQXvLZ.getReward.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3jEP5N6 = await YRX3.new({from: accounts[0]});
		const uintDOdNrar = BigInt("1052")
		const addresswfPxgSw = "0x0000000000000000000000000000000000000001"
		const addressCcsI2hB = accounts[1]
//		await YRX3jEP5N6.getReward.call({from: accounts[4]});
//		const addresswQRZlgZ = await YRX3jEP5N6.owner.call({from: accounts[2]});
//		await YRX3jEP5N6.renounceOwnership.call({from: accounts[0]});
//		const uint256DHoEcgq = await YRX3jEP5N6.stake.call(uintDOdNrar, {from: accounts[2]});
//		const uint256lQfzI6q = await YRX3jEP5N6.balanceOf.call(addresswfPxgSw, {from: accounts[2]});
//		const addressxK8uNfJ = await YRX3jEP5N6.emergencyDrain.call(addressCcsI2hB, {from: "0x0000000000000000000000000000000000000001"});

		await expect(YRX3jEP5N6.getReward.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});
})