const YieldFarmLP2 = artifacts.require("YieldFarmLP2");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('YieldFarmLP2', (accounts) => {
	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2ENcvUb = await YieldFarmLP2.new({from: accounts[4]});
		const uintffPUW2S = BigInt("1270")
		const uinteg3YDsY = BigInt("1531")
		const addressQxnAbum = accounts[2]
		const uintydT74f3 = BigInt("984")
		const uintt4qmLp = BigInt("1396")
		const addressA4utO3T = accounts[3]
		const uintbMvzUrs = await YieldFarmLP2ENcvUb.getPoolSize.call(uintffPUW2S, {from: accounts[0]});
		const uintk2zeGzu = await YieldFarmLP2ENcvUb.getEpochStake.call(addressQxnAbum, uinteg3YDsY, {from: accounts[4]});
		const uintTKyPRtf = await YieldFarmLP2ENcvUb.harvest.call(uintydT74f3, {from: accounts[0]});
		const uintQTC57o = await YieldFarmLP2ENcvUb.getEpochStake.call(addressA4utO3T, uintt4qmLp, {from: accounts[3]});
		const uinteEV425Z = await YieldFarmLP2ENcvUb.getCurrentEpoch.call({from: accounts[2]});

		await expect(YieldFarmLP2ENcvUb.getPoolSize.call(uintffPUW2S, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2Oco5SWV = await YieldFarmLP2.new({from: accounts[3]});
		const uintFhrYGoi = BigInt("255")
		const uintQzoEq5K = BigInt("1474")
		const uintV9XY6hx = BigInt("152")
		const uintLjC5RcJ = BigInt("1265")
		const uintxv8WYaM = BigInt("1929")
		const uintrjZaIji = await YieldFarmLP2Oco5SWV.harvest.call(uintFhrYGoi, {from: accounts[2]});
		const uintGhhlL5i = await YieldFarmLP2Oco5SWV.getPoolSize.call(uintQzoEq5K, {from: accounts[5]});
		const uintIqSQ6Ql = await YieldFarmLP2Oco5SWV.getPoolSize.call(uintV9XY6hx, {from: accounts[1]});
		const uintbbzgJv3 = await YieldFarmLP2Oco5SWV.harvest.call(uintLjC5RcJ, {from: accounts[5]});
		const uintkF5dSs = await YieldFarmLP2Oco5SWV.getPoolSize.call(uintxv8WYaM, {from: accounts[4]});
		const uint5qLuZl = await YieldFarmLP2Oco5SWV.massHarvest.call({from: accounts[3]});

		await expect(YieldFarmLP2Oco5SWV.harvest.call(uintFhrYGoi, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2mZItNdD = await YieldFarmLP2.new({from: accounts[5]});
		const uintsaFuPmS = BigInt("212")
		const addressXvgl0GQ = accounts[2]
		const uinto7frtS = BigInt("1015")
		const uint7sushi = BigInt("13")
		const uintv6yWjZs = await YieldFarmLP2mZItNdD.getEpochStake.call(addressXvgl0GQ, uintsaFuPmS, {from: accounts[4]});
		const uintF406saQ = await YieldFarmLP2mZItNdD.getPoolSize.call(uinto7frtS, {from: accounts[3]});
		const uintoBJTkGU = await YieldFarmLP2mZItNdD.harvest.call(uint7sushi, {from: accounts[0]});

		await expect(YieldFarmLP2mZItNdD.getEpochStake.call(addressXvgl0GQ, uintsaFuPmS, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2LwHnVFD = await YieldFarmLP2.new({from: accounts[3]});
		const uintTY9hwoD = await YieldFarmLP2LwHnVFD.massHarvest.call({from: accounts[5]});
		const uintaHUhH0 = await YieldFarmLP2LwHnVFD.userLastEpochIdHarvested.call({from: accounts[3]});
		const uintCsCpnPL = await YieldFarmLP2LwHnVFD.massHarvest.call({from: accounts[0]});

		await expect(YieldFarmLP2LwHnVFD.massHarvest.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2cby6AvB = await YieldFarmLP2.new({from: accounts[2]});
		const addressVZInKMU = accounts[0]
		const address2lZlGa = accounts[4]
		const addressc2kwkd = accounts[2]
		const addresszpJUYbn = accounts[1]
		const addressVjn4NHG = await YieldFarmLP2cby6AvB.initialize.call(addresszpJUYbn, addressc2kwkd, address2lZlGa, addressVZInKMU, {from: accounts[0]});
		const uinttZ7UQMV = await YieldFarmLP2cby6AvB.userLastEpochIdHarvested.call({from: accounts[0]});

		await expect(YieldFarmLP2cby6AvB.initialize.call(addresszpJUYbn, addressc2kwkd, address2lZlGa, addressVZInKMU, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2JO1UsDu = await YieldFarmLP2.new({from: accounts[2]});
		const uintGIBexnC = BigInt("722")
		const uinteZzMLvD = BigInt("1620")
		const uintcAcsGx = await YieldFarmLP2JO1UsDu.getCurrentEpoch.call({from: accounts[1]});
		const uintDKN1je9 = await YieldFarmLP2JO1UsDu.getPoolSize.call(uintGIBexnC, {from: accounts[4]});
		const uintG59VX5 = await YieldFarmLP2JO1UsDu.massHarvest.call({from: accounts[1]});
		const uintuWZxf6X = await YieldFarmLP2JO1UsDu.massHarvest.call({from: accounts[1]});
		const uintgcu89N = await YieldFarmLP2JO1UsDu.harvest.call(uinteZzMLvD, {from: accounts[0]});

		await expect(YieldFarmLP2JO1UsDu.getCurrentEpoch.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2uVe48kK = await YieldFarmLP2.new({from: accounts[1]});
		const addressnQPnJKx = accounts[0]
		const uint41ygBO = BigInt("567")
		const addressB4pHQHu = accounts[2]
		const uintFzboYm7 = BigInt("1510")
		const uintouHgPV0 = await YieldFarmLP2uVe48kK.claimable.call(addressnQPnJKx, {from: accounts[1]});
		const uintPUFtRIo = await YieldFarmLP2uVe48kK.getEpochStake.call(addressB4pHQHu, uint41ygBO, {from: accounts[4]});
		const uintttNt9Le = await YieldFarmLP2uVe48kK.harvest.call(uintFzboYm7, {from: accounts[0]});

		await expect(YieldFarmLP2uVe48kK.claimable.call(addressnQPnJKx, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2BK4xV1n = await YieldFarmLP2.new({from: "0x0000000000000000000000000000000000000001"});
		const addressduCDuIJ = "0x0000000000000000000000000000000000000001"
		const addressjy70Tso = accounts[5]
		const addressbXxh2k = accounts[0]
		const addresskLw1t36 = accounts[2]
		const uintpEM3X5U = BigInt("388")
		const uintMcteZd = BigInt("1676")
		const addressdwdPULB = accounts[2]
		const addressvwlGzje = await YieldFarmLP2BK4xV1n.initialize.call(addresskLw1t36, addressbXxh2k, addressjy70Tso, addressduCDuIJ, {from: accounts[3]});
		const uintXYyGyPD = await YieldFarmLP2BK4xV1n.getPoolSize.call(uintpEM3X5U, {from: accounts[1]});
		const uintY3SM9mh = await YieldFarmLP2BK4xV1n.massHarvest.call({from: accounts[1]});
		const uintzUE9M3 = await YieldFarmLP2BK4xV1n.harvest.call(uintMcteZd, {from: accounts[3]});
		const uintKXB0U1q = await YieldFarmLP2BK4xV1n.claimable.call(addressdwdPULB, {from: accounts[2]});
		const uintJcljYRA = await YieldFarmLP2BK4xV1n.getCurrentEpoch.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2uVe48kK = await YieldFarmLP2.new({from: accounts[1]});
		const addressODrpZdU = accounts[4]
		const uintHT1wbL2 = await YieldFarmLP2uVe48kK.userLastEpochIdHarvested.call({from: accounts[3]});
		const uintccSHeFB = await YieldFarmLP2uVe48kK.claimable.call(addressODrpZdU, {from: accounts[2]});
		const uintrp5wrod = await YieldFarmLP2uVe48kK.getCurrentEpoch.call({from: accounts[3]});

		assert.equal(uintHT1wbL2, BigInt("0"))
		await expect(YieldFarmLP2uVe48kK.claimable.call(addressODrpZdU, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})