const YieldFarmLP2 = artifacts.require("YieldFarmLP2");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('YieldFarmLP2', (accounts) => {
	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2zgzxybo = await YieldFarmLP2.new({from: accounts[4]});
		const uintAsZ0hJD = BigInt("87")
		const addressSR9b1Pl = accounts[3]
		const uintGSDsu8 = BigInt("306")
		const uinttKaT5QP = await YieldFarmLP2zgzxybo.userLastEpochIdHarvested.call({from: "0x0000000000000000000000000000000000000001"});
//		const uintBv2J3FX = await YieldFarmLP2zgzxybo.getEpochStake.call(addressSR9b1Pl, uintAsZ0hJD, {from: accounts[5]});
//		const uintRHPKMF = await YieldFarmLP2zgzxybo.getPoolSize.call(uintGSDsu8, {from: accounts[0]});

		assert.equal(uinttKaT5QP, BigInt("0"))
		await expect(YieldFarmLP2zgzxybo.getEpochStake.call(addressSR9b1Pl, uintAsZ0hJD, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2rXE23HB = await YieldFarmLP2.new({from: accounts[0]});
		const uintWQKE4c9 = BigInt("1737")
		const addressjcTyfzV = accounts[2]
		const addressrEMnutp = accounts[0]
		const addressatSsnKN = accounts[2]
		const addressreJT7sT = "0x0000000000000000000000000000000000000001"
		const addressX8MhZd9 = accounts[4]
//		const uintVi3hkX0 = await YieldFarmLP2rXE23HB.harvest.call(uintWQKE4c9, {from: accounts[3]});
//		const uintBW5fC7A = await YieldFarmLP2rXE23HB.claimable.call(addressjcTyfzV, {from: accounts[2]});
//		const uintcQzlo6y = await YieldFarmLP2rXE23HB.massHarvest.call({from: accounts[3]});
//		const uintcSTQ2uZ = await YieldFarmLP2rXE23HB.massHarvest.call({from: accounts[4]});
//		const uintCP8LwYy = await YieldFarmLP2rXE23HB.userLastEpochIdHarvested.call({from: accounts[4]});
//		const addresscRTUjWH = await YieldFarmLP2rXE23HB.initialize.call(addressX8MhZd9, addressreJT7sT, addressatSsnKN, addressrEMnutp, {from: "0x0000000000000000000000000000000000000001"});

		await expect(YieldFarmLP2rXE23HB.harvest.call(uintWQKE4c9, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2H5xT4Xg = await YieldFarmLP2.new({from: accounts[5]});
		const addressrq7ogS = accounts[1]
		const uintH7KhLGQ = BigInt("1770")
		const addresslPd15k7 = accounts[3]
		const uintlhOwMu0 = await YieldFarmLP2H5xT4Xg.userLastEpochIdHarvested.call({from: accounts[2]});
//		const uinttLDOPL9 = await YieldFarmLP2H5xT4Xg.claimable.call(addressrq7ogS, {from: accounts[4]});
//		const uintB4kkqaI = await YieldFarmLP2H5xT4Xg.getPoolSize.call(uintH7KhLGQ, {from: accounts[0]});
//		const uinto4FqPtb = await YieldFarmLP2H5xT4Xg.claimable.call(addresslPd15k7, {from: accounts[0]});
//		const uintdQK2ytU = await YieldFarmLP2H5xT4Xg.massHarvest.call({from: accounts[5]});

		assert.equal(uintlhOwMu0, BigInt("0"))
		await expect(YieldFarmLP2H5xT4Xg.claimable.call(addressrq7ogS, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2gZJaedN = await YieldFarmLP2.new({from: accounts[3]});
		const uintKWQMH5 = BigInt("1550")
		const uintoMrfgD1 = BigInt("266")
//		const uintdx0aAJV = await YieldFarmLP2gZJaedN.massHarvest.call({from: accounts[2]});
//		const uintEHN5ZYT = await YieldFarmLP2gZJaedN.harvest.call(uintKWQMH5, {from: accounts[0]});
//		const uintbceyYm0 = await YieldFarmLP2gZJaedN.getPoolSize.call(uintoMrfgD1, {from: accounts[1]});

		await expect(YieldFarmLP2gZJaedN.massHarvest.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2LTKfRX9 = await YieldFarmLP2.new({from: accounts[2]});
		const uintfsbSwV = BigInt("409")
		const uintbTHniee = await YieldFarmLP2LTKfRX9.userLastEpochIdHarvested.call({from: accounts[3]});
//		const uintPUAs4ar = await YieldFarmLP2LTKfRX9.getCurrentEpoch.call({from: "0x0000000000000000000000000000000000000001"});
//		const uintmaGHZI = await YieldFarmLP2LTKfRX9.userLastEpochIdHarvested.call({from: "0x0000000000000000000000000000000000000001"});
//		const uintRIJCBxw = await YieldFarmLP2LTKfRX9.harvest.call(uintfsbSwV, {from: accounts[4]});
//		const uintsvGAnPr = await YieldFarmLP2LTKfRX9.massHarvest.call({from: accounts[0]});

		assert.equal(uintbTHniee, BigInt("0"))
		await expect(YieldFarmLP2LTKfRX9.getCurrentEpoch.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2eWVKamP = await YieldFarmLP2.new({from: "0x0000000000000000000000000000000000000001"});
		const uintDe8G7L6 = BigInt("1758")
		const uintDuq6r7d = await YieldFarmLP2eWVKamP.getPoolSize.call(uintDe8G7L6, {from: accounts[2]});
		const uintaElKF8U = await YieldFarmLP2eWVKamP.getCurrentEpoch.call({from: accounts[4]});
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2UXkKoXR = await YieldFarmLP2.new({from: accounts[1]});
		const uintKdZ0pAe = BigInt("1135")
		const uintjLMqbAr = BigInt("754")
		const uintkpX2SMl = BigInt("884")
//		const uintDbZ1x8u = await YieldFarmLP2UXkKoXR.getPoolSize.call(uintKdZ0pAe, {from: "0x0000000000000000000000000000000000000001"});
//		const uintAENVjxi = await YieldFarmLP2UXkKoXR.getPoolSize.call(uintjLMqbAr, {from: accounts[3]});
//		const uintwagc1LI = await YieldFarmLP2UXkKoXR.getPoolSize.call(uintkpX2SMl, {from: accounts[0]});

		await expect(YieldFarmLP2UXkKoXR.getPoolSize.call(uintKdZ0pAe, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2F2JLNMf = await YieldFarmLP2.new({from: accounts[3]});
		const addressuEraMSn = accounts[1]
		const addressKfjvVdL = accounts[0]
		const addressKLcbNHa = accounts[4]
		const addresscbAVdQ9 = accounts[4]
//		const addressJEv5D1 = await YieldFarmLP2F2JLNMf.initialize.call(addresscbAVdQ9, addressKLcbNHa, addressKfjvVdL, addressuEraMSn, {from: accounts[2]});
//		const uintPSa2cb = await YieldFarmLP2F2JLNMf.userLastEpochIdHarvested.call({from: accounts[3]});

		await expect(YieldFarmLP2F2JLNMf.initialize.call(addresscbAVdQ9, addressKLcbNHa, addressKfjvVdL, addressuEraMSn, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})