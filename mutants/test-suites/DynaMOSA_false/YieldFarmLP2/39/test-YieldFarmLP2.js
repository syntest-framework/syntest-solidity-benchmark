const YieldFarmLP2 = artifacts.require("YieldFarmLP2");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('YieldFarmLP2', (accounts) => {
	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2tO35HyR = await YieldFarmLP2.new({from: "0x0000000000000000000000000000000000000001"});
		const uintLHNcw1F = BigInt("866")
		const uintbx6d607 = BigInt("936")
		const uintE3iAqm1 = await YieldFarmLP2tO35HyR.harvest.call(uintLHNcw1F, {from: accounts[0]});
		const uintLjOv3F6 = await YieldFarmLP2tO35HyR.massHarvest.call({from: accounts[3]});
		const uintR8paEhL = await YieldFarmLP2tO35HyR.getCurrentEpoch.call({from: accounts[1]});
		const uintbqx6oBe = await YieldFarmLP2tO35HyR.getPoolSize.call(uintbx6d607, {from: accounts[1]});
		const uintYqSFlDI = await YieldFarmLP2tO35HyR.getCurrentEpoch.call({from: accounts[1]});
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2MHmixiQ = await YieldFarmLP2.new({from: accounts[3]});
		const uintQ9fxX0 = BigInt("1514")
		const addressoDBJ4UK = "0x0000000000000000000000000000000000000001"
		const addressPl6sh0X = accounts[1]
//		const uintv8BF8DO = await YieldFarmLP2MHmixiQ.getEpochStake.call(addressoDBJ4UK, uintQ9fxX0, {from: accounts[3]});
//		const uinthi3JuTm = await YieldFarmLP2MHmixiQ.claimable.call(addressPl6sh0X, {from: accounts[1]});

		await expect(YieldFarmLP2MHmixiQ.getEpochStake.call(addressoDBJ4UK, uintQ9fxX0, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2slyTHbt = await YieldFarmLP2.new({from: accounts[4]});
		const addresstlvzak = accounts[4]
		const addressRjy6nL6 = accounts[0]
		const addressw8qbstl = accounts[1]
		const addressuXcL7WU = accounts[1]
		const uintsGkkDvR = BigInt("1271")
		const addressG5NOsv5 = accounts[2]
//		const addressB3NnBdW = await YieldFarmLP2slyTHbt.initialize.call(addressuXcL7WU, addressw8qbstl, addressRjy6nL6, addresstlvzak, {from: accounts[1]});
//		const uintXuxGTSg = await YieldFarmLP2slyTHbt.getCurrentEpoch.call({from: accounts[5]});
//		const uintfvsPlPG = await YieldFarmLP2slyTHbt.getEpochStake.call(addressG5NOsv5, uintsGkkDvR, {from: accounts[5]});

		await expect(YieldFarmLP2slyTHbt.initialize.call(addressuXcL7WU, addressw8qbstl, addressRjy6nL6, addresstlvzak, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2dBeHsoN = await YieldFarmLP2.new({from: accounts[2]});
		const uintyLmYrYW = BigInt("451")
		const uintBEF13wX = BigInt("1798")
//		const uintfm3brLv = await YieldFarmLP2dBeHsoN.getPoolSize.call(uintyLmYrYW, {from: accounts[5]});
//		const uintxNGHw1 = await YieldFarmLP2dBeHsoN.getPoolSize.call(uintBEF13wX, {from: accounts[2]});
//		const uinta2Zx2sv = await YieldFarmLP2dBeHsoN.getCurrentEpoch.call({from: accounts[0]});

		await expect(YieldFarmLP2dBeHsoN.getPoolSize.call(uintyLmYrYW, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2nTBld4X = await YieldFarmLP2.new({from: accounts[1]});
		const addressMn4CiSl = accounts[0]
		const uintO56CiwU = BigInt("319")
//		const uintYh6NOXV = await YieldFarmLP2nTBld4X.massHarvest.call({from: accounts[4]});
//		const uintutHry6D = await YieldFarmLP2nTBld4X.claimable.call(addressMn4CiSl, {from: accounts[2]});
//		const uintmH6tioB = await YieldFarmLP2nTBld4X.getPoolSize.call(uintO56CiwU, {from: accounts[0]});

		await expect(YieldFarmLP2nTBld4X.massHarvest.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2bKOJVlA = await YieldFarmLP2.new({from: accounts[1]});
		const uintEsdJf7a = BigInt("1509")
		const addressUnE77q = accounts[3]
		const uintQS3zgk1 = BigInt("1112")
		const addressxD5XGi = accounts[1]
//		const uintqHs7S7d = await YieldFarmLP2bKOJVlA.harvest.call(uintEsdJf7a, {from: accounts[3]});
//		const uintko33tvV = await YieldFarmLP2bKOJVlA.userLastEpochIdHarvested.call({from: "0x0000000000000000000000000000000000000001"});
//		const uintcMt42M3 = await YieldFarmLP2bKOJVlA.claimable.call(addressUnE77q, {from: accounts[4]});
//		const uint9eRFcK = await YieldFarmLP2bKOJVlA.harvest.call(uintQS3zgk1, {from: accounts[1]});
//		const uinthNe1Cq1 = await YieldFarmLP2bKOJVlA.claimable.call(addressxD5XGi, {from: accounts[4]});

		await expect(YieldFarmLP2bKOJVlA.harvest.call(uintEsdJf7a, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2MHmixiQ = await YieldFarmLP2.new({from: accounts[3]});
		const uintT0f9qr = BigInt("1514")
		const addresszNPGwQO = "0x0000000000000000000000000000000000000000"
		const addressSAdK9Ga = accounts[1]
//		const uintMltQiNq = await YieldFarmLP2MHmixiQ.getCurrentEpoch.call({from: accounts[2]});
//		const uintv8BF8DO = await YieldFarmLP2MHmixiQ.getEpochStake.call(addresszNPGwQO, uintT0f9qr, {from: accounts[3]});
//		const uinthi3JuTm = await YieldFarmLP2MHmixiQ.claimable.call(addressSAdK9Ga, {from: accounts[1]});

		await expect(YieldFarmLP2MHmixiQ.getCurrentEpoch.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2nq0qDkD = await YieldFarmLP2.new({from: accounts[2]});
		const addressHgTtykn = accounts[0]
//		const uintLzS5LOq = await YieldFarmLP2nq0qDkD.claimable.call(addressHgTtykn, {from: accounts[0]});
//		const uintpF7PAJA = await YieldFarmLP2nq0qDkD.massHarvest.call({from: accounts[3]});

		await expect(YieldFarmLP2nq0qDkD.claimable.call(addressHgTtykn, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2oi2Jal = await YieldFarmLP2.new({from: accounts[2]});
		const addresssfCQ8ve = accounts[4]
		const uintZdMJYaG = await YieldFarmLP2oi2Jal.userLastEpochIdHarvested.call({from: accounts[3]});
//		const uint8BWolc = await YieldFarmLP2oi2Jal.claimable.call(addresssfCQ8ve, {from: accounts[2]});

		assert.equal(uintZdMJYaG, BigInt("0"))
		await expect(YieldFarmLP2oi2Jal.claimable.call(addresssfCQ8ve, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})