const YRX3 = artifacts.require("YRX3");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('YRX3', (accounts) => {
	it('test for YRX3', async () => {
		const YRX3v3g6uBd = await YRX3.new({from: accounts[0]});
		const addressrgbiMKv = accounts[0]
		const addressdNn8G4q = accounts[1]
//		await YRX3v3g6uBd.checkNextEpoch.call({from: accounts[2]});
//		const addressXuPuCvx = await YRX3v3g6uBd.emergencyDrain.call(addressrgbiMKv, {from: accounts[4]});
//		const addressj5e6diY = await YRX3v3g6uBd.emergencyDrain.call(addressdNn8G4q, {from: accounts[3]});
//		const uint256xDYHprk = await YRX3v3g6uBd.lastTimeRewardApplicable.call({from: accounts[4]});

		await expect(YRX3v3g6uBd.checkNextEpoch.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3glXKhi1 = await YRX3.new({from: accounts[2]});
		const addressn3VzIHF = accounts[2]
		const addresswegaFWV = accounts[0]
		const addressaH09lo = accounts[3]
		const addressRGXzIVc = "0x0000000000000000000000000000000000000001"
		const addressRAyIhtf = accounts[4]
		const addresssA62dhv = "0x0000000000000000000000000000000000000001"
//		const addressroIN5Gq = await YRX3glXKhi1.transferOwnership.call(addressn3VzIHF, {from: "0x0000000000000000000000000000000000000001"});
//		const addressi89fRC = await YRX3glXKhi1.toPayable.call(addresswegaFWV, {from: accounts[5]});
//		const addressITpeuNW = await YRX3glXKhi1.transferOwnership.call(addressaH09lo, {from: accounts[2]});
//		const uint256Z0N4WIa = await YRX3glXKhi1.earned.call(addressRGXzIVc, {from: accounts[1]});
//		const addressMKh6LjO = await YRX3glXKhi1.updateReward.call(addressRAyIhtf, {from: accounts[0]});
//		const uint256VNfLRI2 = await YRX3glXKhi1.balanceOf.call(addresssA62dhv, {from: accounts[1]});

		await expect(YRX3glXKhi1.transferOwnership.call(addressn3VzIHF, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3HGrKrB5 = await YRX3.new({from: accounts[0]});
		const uinttOAJyZ = BigInt("1884")
		const addresse3FyCLx = accounts[2]
		const uint2569Eg6pg = await YRX3HGrKrB5.totalSupply.call({from: accounts[3]});
//		const uint256ZJ3PGK = await YRX3HGrKrB5.withdraw.call(uinttOAJyZ, {from: accounts[3]});
//		const addressFkDqnWD = await YRX3HGrKrB5.emergencyDrain.call(addresse3FyCLx, {from: accounts[3]});

		assert.equal(uint2569Eg6pg, BigInt("0"))
		await expect(YRX3HGrKrB5.withdraw.call(uinttOAJyZ, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3JDbcJq = await YRX3.new({from: "0x0000000000000000000000000000000000000001"});
		const addressGs9spmZ = accounts[1]
		const uintjP84CfB = BigInt("1112")
		const addressCVnKx1p = accounts[1]
		const addressdmIpSO3 = await YRX3JDbcJq.toPayable.call(addressGs9spmZ, {from: "0x0000000000000000000000000000000000000001"});
		await YRX3JDbcJq.checkNextEpoch.call({from: accounts[3]});
		const uint256zWXzdg = await YRX3JDbcJq.withdraw.call(uintjP84CfB, {from: accounts[3]});
		const addressAKlMro4 = await YRX3JDbcJq.transferOwnership.call(addressCVnKx1p, {from: accounts[0]});
	});

	it('test for YRX3', async () => {
		const YRX3Y2PnS9U = await YRX3.new({from: accounts[4]});
		const uintAbKP2rF = BigInt("364")
		const addressa4E8mF = accounts[2]
		const uint256vVmb2gJ = await YRX3Y2PnS9U.totalSupply.call({from: accounts[3]});
//		await YRX3Y2PnS9U.exit.call({from: accounts[3]});
//		const uint256mA502Dv = await YRX3Y2PnS9U.withdraw.call(uintAbKP2rF, {from: accounts[2]});
//		await YRX3Y2PnS9U.renounceOwnership.call({from: accounts[2]});
//		const uint256d69uSwy = await YRX3Y2PnS9U.earned.call(addressa4E8mF, {from: accounts[4]});

		assert.equal(uint256vVmb2gJ, BigInt("0"))
		await expect(YRX3Y2PnS9U.exit.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3JWIRuSq = await YRX3.new({from: accounts[0]});
//		await YRX3JWIRuSq.getReward.call({from: accounts[2]});
//		const uint256xBzVHxM = await YRX3JWIRuSq.lastTimeRewardApplicable.call({from: accounts[4]});
//		const boolwxhoQ7 = await YRX3JWIRuSq.isOwner.call({from: accounts[2]});
//		await YRX3JWIRuSq.exit.call({from: accounts[3]});

		await expect(YRX3JWIRuSq.getReward.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3JWIRuSq = await YRX3.new({from: accounts[0]});
		const addressfMWqmsS = accounts[1]
//		await YRX3JWIRuSq.getReward.call({from: accounts[2]});
//		const addressl2MqQiL = await YRX3JWIRuSq.emergencyDrain.call(addressfMWqmsS, {from: accounts[3]});
//		const uint256xBzVHxM = await YRX3JWIRuSq.lastTimeRewardApplicable.call({from: accounts[4]});
//		const boolwxhoQ7 = await YRX3JWIRuSq.isOwner.call({from: accounts[2]});
//		await YRX3JWIRuSq.exit.call({from: accounts[3]});

		await expect(YRX3JWIRuSq.getReward.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3JWIRuSq = await YRX3.new({from: accounts[0]});
		const uintd9uDWrH = BigInt("1802")
//		await YRX3JWIRuSq.renounceOwnership.call({from: accounts[0]});
//		await YRX3JWIRuSq.exit.call({from: accounts[3]});
//		const uint256Do6BNM = await YRX3JWIRuSq.stake.call(uintd9uDWrH, {from: accounts[0]});

		await expect(YRX3JWIRuSq.renounceOwnership.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3JWIRuSq = await YRX3.new({from: accounts[0]});
		const uintGrZqqL = BigInt("1817")
//		const uint256KxDsv2s = await YRX3JWIRuSq.stake.call(uintGrZqqL, {from: "0x0000000000000000000000000000000000000001"});
//		await YRX3JWIRuSq.getReward.call({from: accounts[2]});

		await expect(YRX3JWIRuSq.stake.call(uintGrZqqL, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3wlSC8Q3 = await YRX3.new({from: accounts[5]});
		const addressZidjjKj = await YRX3wlSC8Q3.owner.call({from: accounts[1]});
//		await YRX3wlSC8Q3.renounceOwnership.call({from: accounts[2]});
//		await YRX3wlSC8Q3.onlyOwner.call({from: accounts[1]});
//		await YRX3wlSC8Q3.onlyRewardDistribution.call({from: accounts[3]});
//		const uint256WtseNC9 = await YRX3wlSC8Q3.lastTimeRewardApplicable.call({from: accounts[3]});
//		await YRX3wlSC8Q3.onlyOwner.call({from: accounts[1]});

		assert.equal(addressZidjjKj, 0x767a8601Cd7A57076d735f0adb3f69a28Df6556F)
		await expect(YRX3wlSC8Q3.renounceOwnership.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3JWIRuSq = await YRX3.new({from: accounts[0]});
		const addressfWxxm4S = accounts[3]
		const addresstqmkH7G = accounts[1]
		const addressASZuSav = await YRX3JWIRuSq.transferOwnership.call(addressfWxxm4S, {from: accounts[0]});
//		await YRX3JWIRuSq.getReward.call({from: accounts[2]});
//		const uint256dUX7STF = await YRX3JWIRuSq.earned.call(addresstqmkH7G, {from: accounts[1]});

		await expect(YRX3JWIRuSq.getReward.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3JWIRuSq = await YRX3.new({from: accounts[0]});
		const addresswawNNzc = accounts[1]
		const addressdBY8q3x = await YRX3JWIRuSq.setRewardDistribution.call(addresswawNNzc, {from: accounts[0]});
//		await YRX3JWIRuSq.exit.call({from: accounts[3]});

		await expect(YRX3JWIRuSq.exit.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});
})