const YieldFarmLP2 = artifacts.require("YieldFarmLP2");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('YieldFarmLP2', (accounts) => {
	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2e2sqySO = await YieldFarmLP2.new({from: "0x0000000000000000000000000000000000000001"});
		const addresskQHRFS = accounts[0]
		const addressbudB2nl = accounts[0]
		const addressJ0Puq6X = accounts[1]
		const addressZUbLyMA = "0x0000000000000000000000000000000000000001"
		const uintoyMs7yD = BigInt("704")
		const addressIRyycwa = accounts[3]
		const uintxXdSmh9 = BigInt("1341")
		const addressqeKB3n0 = accounts[4]
		const uintA5fM8cq = BigInt("380")
		const addresszn88KMO = accounts[3]
		const address4swOlj = await YieldFarmLP2e2sqySO.initialize.call(addressZUbLyMA, addressJ0Puq6X, addressbudB2nl, addresskQHRFS, {from: accounts[1]});
		const uintCxutsLl = await YieldFarmLP2e2sqySO.massHarvest.call({from: accounts[2]});
		const uintcn29hJ5 = await YieldFarmLP2e2sqySO.harvest.call(uintoyMs7yD, {from: accounts[0]});
		const uintAx7YgHz = await YieldFarmLP2e2sqySO.claimable.call(addressIRyycwa, {from: accounts[5]});
		const uintQ58GZXU = await YieldFarmLP2e2sqySO.getEpochStake.call(addressqeKB3n0, uintxXdSmh9, {from: accounts[3]});
		const uintG7OmumI = await YieldFarmLP2e2sqySO.getEpochStake.call(addresszn88KMO, uintA5fM8cq, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2RDhTT0B = await YieldFarmLP2.new({from: accounts[3]});
		const uint9VmA5w = BigInt("10")
		const addressWpIU2l2 = accounts[1]
		const uintjirLDjL = BigInt("1514")
		const addressfRHF36H = accounts[1]
		const uintWykvAZp = BigInt("1028")
		const addressO67vqsv = accounts[2]
		const uintQPOJm6N = BigInt("90")
//		const uintfDmsf64 = await YieldFarmLP2RDhTT0B.harvest.call(uint9VmA5w, {from: accounts[0]});
//		const uintbas0g6S = await YieldFarmLP2RDhTT0B.getCurrentEpoch.call({from: "0x0000000000000000000000000000000000000001"});
//		const uintmMP7Ehl = await YieldFarmLP2RDhTT0B.claimable.call(addressWpIU2l2, {from: accounts[0]});
//		const uintoxSuSTp = await YieldFarmLP2RDhTT0B.getEpochStake.call(addressfRHF36H, uintjirLDjL, {from: accounts[0]});
//		const uintIUOIFLH = await YieldFarmLP2RDhTT0B.getEpochStake.call(addressO67vqsv, uintWykvAZp, {from: accounts[2]});
//		const uintznIpDvl = await YieldFarmLP2RDhTT0B.harvest.call(uintQPOJm6N, {from: accounts[4]});

		await expect(YieldFarmLP2RDhTT0B.harvest.call(uint9VmA5w, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2jK9rV3S = await YieldFarmLP2.new({from: accounts[4]});
		const addressIp5UKF6 = accounts[1]
		const uintREFSwXH = BigInt("1049")
		const addressofHFEmr = accounts[4]
//		const uintpIt2mU = await YieldFarmLP2jK9rV3S.massHarvest.call({from: "0x0000000000000000000000000000000000000001"});
//		const uintmxLM6KQ = await YieldFarmLP2jK9rV3S.claimable.call(addressIp5UKF6, {from: accounts[5]});
//		const uintVoroPIS = await YieldFarmLP2jK9rV3S.massHarvest.call({from: accounts[2]});
//		const uint2micFT = await YieldFarmLP2jK9rV3S.harvest.call(uintREFSwXH, {from: accounts[3]});
//		const uintrHhxsZG = await YieldFarmLP2jK9rV3S.claimable.call(addressofHFEmr, {from: accounts[1]});

		await expect(YieldFarmLP2jK9rV3S.massHarvest.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2mGBQeAE = await YieldFarmLP2.new({from: accounts[0]});
		const addressnO1hxRC = accounts[1]
		const uintrvgWKWR = BigInt("1421")
		const addresshyzKamb = accounts[3]
//		const uintHh0Whx2 = await YieldFarmLP2mGBQeAE.claimable.call(addressnO1hxRC, {from: accounts[2]});
//		const uintYyg4Uox = await YieldFarmLP2mGBQeAE.userLastEpochIdHarvested.call({from: accounts[5]});
//		const uintXybY37T = await YieldFarmLP2mGBQeAE.getCurrentEpoch.call({from: accounts[3]});
//		const uintTuRxTup = await YieldFarmLP2mGBQeAE.massHarvest.call({from: accounts[3]});
//		const uintgAqzpkk = await YieldFarmLP2mGBQeAE.getEpochStake.call(addresshyzKamb, uintrvgWKWR, {from: accounts[1]});
//		const uintKaLUTrE = await YieldFarmLP2mGBQeAE.massHarvest.call({from: accounts[5]});

		await expect(YieldFarmLP2mGBQeAE.claimable.call(addressnO1hxRC, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2ThLJbm5 = await YieldFarmLP2.new({from: accounts[0]});
		const uintHRuJqiB = BigInt("1968")
		const uintMWZErML = BigInt("874")
		const addressi2VTc4 = accounts[3]
		const addressZm0KOnj = accounts[1]
//		const uintXEAsEir = await YieldFarmLP2ThLJbm5.getPoolSize.call(uintHRuJqiB, {from: accounts[0]});
//		const uintS7K83hA = await YieldFarmLP2ThLJbm5.getEpochStake.call(addressi2VTc4, uintMWZErML, {from: accounts[1]});
//		const uintPXQAK5N = await YieldFarmLP2ThLJbm5.claimable.call(addressZm0KOnj, {from: "0x0000000000000000000000000000000000000001"});

		await expect(YieldFarmLP2ThLJbm5.getPoolSize.call(uintHRuJqiB, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2svfQnHA = await YieldFarmLP2.new({from: accounts[1]});
		const uintoMHtEGk = BigInt("688")
		const addressQAeiJG = accounts[2]
		const addresstcz3TkG = accounts[2]
//		const uintHscPQoj = await YieldFarmLP2svfQnHA.getEpochStake.call(addressQAeiJG, uintoMHtEGk, {from: accounts[3]});
//		const uintoMW2KY = await YieldFarmLP2svfQnHA.claimable.call(addresstcz3TkG, {from: accounts[4]});

		await expect(YieldFarmLP2svfQnHA.getEpochStake.call(addressQAeiJG, uintoMHtEGk, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2JZkW6ua = await YieldFarmLP2.new({from: accounts[4]});
		const addressZIMVWyy = accounts[4]
		const addressqbquiC6 = accounts[5]
		const addressemy4BUe = accounts[5]
		const addressvsSu6f6 = accounts[5]
		const uintOmiES9 = BigInt("1657")
		const uintqAiBeG0 = BigInt("1472")
		const addressHgzh9v4 = accounts[1]
//		const addressfX17hUJ = await YieldFarmLP2JZkW6ua.initialize.call(addressvsSu6f6, addressemy4BUe, addressqbquiC6, addressZIMVWyy, {from: accounts[3]});
//		const uintNgBC52 = await YieldFarmLP2JZkW6ua.getPoolSize.call(uintOmiES9, {from: accounts[1]});
//		const uintVTePyg = await YieldFarmLP2JZkW6ua.harvest.call(uintqAiBeG0, {from: accounts[3]});
//		const uintgyDZwBR = await YieldFarmLP2JZkW6ua.claimable.call(addressHgzh9v4, {from: accounts[1]});

		await expect(YieldFarmLP2JZkW6ua.initialize.call(addressvsSu6f6, addressemy4BUe, addressqbquiC6, addressZIMVWyy, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2V09ahfA = await YieldFarmLP2.new({from: accounts[0]});
		const uintZYx3x3P = BigInt("1913")
		const addressJKPr4gb = accounts[5]
		const uintXQgntaN = BigInt("1693")
		const addressMvhjytQ = accounts[1]
		const addressB5c3afy = accounts[2]
		const addresspMKSBcX = accounts[1]
		const addressZSz4j8 = accounts[4]
//		const uintmEDAfQy = await YieldFarmLP2V09ahfA.getCurrentEpoch.call({from: accounts[1]});
//		const uinteRvcIHR = await YieldFarmLP2V09ahfA.getEpochStake.call(addressJKPr4gb, uintZYx3x3P, {from: accounts[0]});
//		const uinttU576nc = await YieldFarmLP2V09ahfA.harvest.call(uintXQgntaN, {from: accounts[4]});
//		const addressahDLJA3 = await YieldFarmLP2V09ahfA.initialize.call(addressZSz4j8, addresspMKSBcX, addressB5c3afy, addressMvhjytQ, {from: accounts[5]});

		await expect(YieldFarmLP2V09ahfA.getCurrentEpoch.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2UUk1u47 = await YieldFarmLP2.new({from: accounts[0]});
		const addressvPSh0cG = accounts[2]
		const addressYMUMB8m = accounts[4]
		const addressxQHrpBI = accounts[1]
		const addressfJT7Rqf = accounts[4]
		const uintcDBNVn = BigInt("1944")
		const uintkGNpjH = BigInt("369")
		const uintLTtmcsV = await YieldFarmLP2UUk1u47.userLastEpochIdHarvested.call({from: accounts[5]});
//		const addressOzU9Sn0 = await YieldFarmLP2UUk1u47.initialize.call(addressfJT7Rqf, addressxQHrpBI, addressYMUMB8m, addressvPSh0cG, {from: accounts[3]});
//		const uintTexjr02 = await YieldFarmLP2UUk1u47.harvest.call(uintcDBNVn, {from: "0x0000000000000000000000000000000000000001"});
//		const uintJoKLuUq = await YieldFarmLP2UUk1u47.getPoolSize.call(uintkGNpjH, {from: accounts[3]});

		assert.equal(uintLTtmcsV, BigInt("0"))
		await expect(YieldFarmLP2UUk1u47.initialize.call(addressfJT7Rqf, addressxQHrpBI, addressYMUMB8m, addressvPSh0cG, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})