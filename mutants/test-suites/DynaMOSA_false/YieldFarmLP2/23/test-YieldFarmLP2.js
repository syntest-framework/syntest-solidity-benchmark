const YieldFarmLP2 = artifacts.require("YieldFarmLP2");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('YieldFarmLP2', (accounts) => {
	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2y2vr4Ky = await YieldFarmLP2.new({from: accounts[2]});
		const addressS2jVJjy = accounts[3]
		const uintTVJippa = BigInt("28")
		const addressYLxhzae = accounts[4]
		const addressqIrjZlH = accounts[5]
//		const uintBhcoIc = await YieldFarmLP2y2vr4Ky.claimable.call(addressS2jVJjy, {from: accounts[1]});
//		const uintBbq67qp = await YieldFarmLP2y2vr4Ky.getPoolSize.call(uintTVJippa, {from: accounts[1]});
//		const uinte1AANgE = await YieldFarmLP2y2vr4Ky.claimable.call(addressYLxhzae, {from: accounts[1]});
//		const uintnoTTmMW = await YieldFarmLP2y2vr4Ky.claimable.call(addressqIrjZlH, {from: accounts[4]});
//		const uintP9k4U2X = await YieldFarmLP2y2vr4Ky.massHarvest.call({from: accounts[0]});

		await expect(YieldFarmLP2y2vr4Ky.claimable.call(addressS2jVJjy, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2uirrDAi = await YieldFarmLP2.new({from: accounts[1]});
		const address5u8Buc = accounts[2]
//		const uintLFgSlfc = await YieldFarmLP2uirrDAi.massHarvest.call({from: accounts[3]});
//		const uintYfESYHA = await YieldFarmLP2uirrDAi.massHarvest.call({from: accounts[0]});
//		const uintDJT2TcV = await YieldFarmLP2uirrDAi.getCurrentEpoch.call({from: accounts[0]});
//		const uintEcOv0F = await YieldFarmLP2uirrDAi.claimable.call(address5u8Buc, {from: accounts[2]});

		await expect(YieldFarmLP2uirrDAi.massHarvest.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2KKczfhs = await YieldFarmLP2.new({from: "0x0000000000000000000000000000000000000001"});
		const uintDYsn3pk = BigInt("684")
		const addressdacEE1Q = accounts[3]
		const uintTSaZkdF = BigInt("1726")
		const addressCM4JxT = accounts[1]
		const uintJJ39y0 = BigInt("223")
		const addressGmBwKNZ = accounts[3]
		const uintkWiJOh0 = BigInt("1146")
		const uintq2blUq4 = BigInt("1192")
		const uint9lGMst = await YieldFarmLP2KKczfhs.getEpochStake.call(addressdacEE1Q, uintDYsn3pk, {from: accounts[5]});
		const uintfbAtYT2 = await YieldFarmLP2KKczfhs.getEpochStake.call(addressCM4JxT, uintTSaZkdF, {from: accounts[4]});
		const uintzJKg0Wn = await YieldFarmLP2KKczfhs.getEpochStake.call(addressGmBwKNZ, uintJJ39y0, {from: accounts[2]});
		const uintCqhQ4XK = await YieldFarmLP2KKczfhs.getPoolSize.call(uintkWiJOh0, {from: accounts[3]});
		const uintNgsXp0X = await YieldFarmLP2KKczfhs.getPoolSize.call(uintq2blUq4, {from: accounts[0]});
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2Ky03gFh = await YieldFarmLP2.new({from: accounts[0]});
		const uintZoRIpuD = BigInt("379")
		const uintIeA9cZA = BigInt("1611")
		const addresstAH44M = accounts[4]
//		const uintltlK8S = await YieldFarmLP2Ky03gFh.harvest.call(uintZoRIpuD, {from: accounts[4]});
//		const uintFscM8Lo = await YieldFarmLP2Ky03gFh.getEpochStake.call(addresstAH44M, uintIeA9cZA, {from: accounts[3]});
//		const uintl9MGVrv = await YieldFarmLP2Ky03gFh.getCurrentEpoch.call({from: accounts[4]});

		await expect(YieldFarmLP2Ky03gFh.harvest.call(uintZoRIpuD, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2bolXr3q = await YieldFarmLP2.new({from: accounts[2]});
		const uintEWri29V = BigInt("1324")
		const uintRfIpfVg = BigInt("1621")
		const uintcTJtn2L = BigInt("937")
		const addressAXyc9Fv = accounts[2]
		const uintuSDY6CE = await YieldFarmLP2bolXr3q.userLastEpochIdHarvested.call({from: accounts[2]});
//		const uintV1FKM56 = await YieldFarmLP2bolXr3q.getPoolSize.call(uintEWri29V, {from: accounts[5]});
//		const uintIgRr1bm = await YieldFarmLP2bolXr3q.getPoolSize.call(uintRfIpfVg, {from: accounts[2]});
//		const uinthYsqjv0 = await YieldFarmLP2bolXr3q.getEpochStake.call(addressAXyc9Fv, uintcTJtn2L, {from: accounts[3]});

		assert.equal(uintuSDY6CE, BigInt("0"))
		await expect(YieldFarmLP2bolXr3q.getPoolSize.call(uintEWri29V, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2uirrDAi = await YieldFarmLP2.new({from: accounts[1]});
//		const uintDJT2TcV = await YieldFarmLP2uirrDAi.getCurrentEpoch.call({from: accounts[0]});

		await expect(YieldFarmLP2uirrDAi.getCurrentEpoch.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2uirrDAi = await YieldFarmLP2.new({from: accounts[1]});
		const uint70kDyc = BigInt("1606")
		const addressJvn6IvE = accounts[2]
		const addressfuSvCl3 = accounts[3]
//		const uintCHoV1F5 = await YieldFarmLP2uirrDAi.getEpochStake.call(addressJvn6IvE, uint70kDyc, {from: accounts[4]});
//		const uintLFgSlfc = await YieldFarmLP2uirrDAi.massHarvest.call({from: accounts[3]});
//		const uintYfESYHA = await YieldFarmLP2uirrDAi.massHarvest.call({from: accounts[0]});
//		const uintDJT2TcV = await YieldFarmLP2uirrDAi.getCurrentEpoch.call({from: accounts[0]});
//		const uintnCOdspW = await YieldFarmLP2uirrDAi.claimable.call(addressfuSvCl3, {from: accounts[3]});

		await expect(YieldFarmLP2uirrDAi.getEpochStake.call(addressJvn6IvE, uint70kDyc, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2uFYc8Ox = await YieldFarmLP2.new({from: accounts[3]});
		const addressBVdmN4z = accounts[1]
		const addressTIlCfAy = accounts[3]
		const addressnY0aFO = accounts[2]
		const addressW8QchQ1 = accounts[2]
		const addressoTCC1jf = accounts[2]
//		const addressHiVtIUM = await YieldFarmLP2uFYc8Ox.initialize.call(addressW8QchQ1, addressnY0aFO, addressTIlCfAy, addressBVdmN4z, {from: accounts[0]});
//		const uintZLcUTNc = await YieldFarmLP2uFYc8Ox.claimable.call(addressoTCC1jf, {from: accounts[1]});

		await expect(YieldFarmLP2uFYc8Ox.initialize.call(addressW8QchQ1, addressnY0aFO, addressTIlCfAy, addressBVdmN4z, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})