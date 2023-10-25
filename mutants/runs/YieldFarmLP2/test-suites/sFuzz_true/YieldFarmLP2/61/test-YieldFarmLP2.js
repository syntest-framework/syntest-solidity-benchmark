const YieldFarmLP2 = artifacts.require("YieldFarmLP2");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('YieldFarmLP2', (accounts) => {
	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2QOKV35 = await YieldFarmLP2.new({from: accounts[0]});
		const uintXcEJIaN = BigInt("494")
		const uintug31FKC = await YieldFarmLP2QOKV35.massHarvest.call({from: accounts[2]});
		const uintpaV81Se = await YieldFarmLP2QOKV35.getPoolSize.call(uintXcEJIaN, {from: accounts[4]});
		const uintIBUUaXX = await YieldFarmLP2QOKV35.getCurrentEpoch.call({from: accounts[2]});
		const uintvdGUx89 = await YieldFarmLP2QOKV35.getCurrentEpoch.call({from: accounts[4]});

		await expect(YieldFarmLP2QOKV35.massHarvest.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2Wh9cve = await YieldFarmLP2.new({from: accounts[1]});
		const uintmp65rI2 = BigInt("942")
		const uintp5TEGDQ = await YieldFarmLP2Wh9cve.getPoolSize.call(uintmp65rI2, {from: accounts[5]});
		const uintBH23Gpb = await YieldFarmLP2Wh9cve.getCurrentEpoch.call({from: accounts[0]});

		await expect(YieldFarmLP2Wh9cve.getPoolSize.call(uintmp65rI2, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2ocenRt = await YieldFarmLP2.new({from: accounts[0]});
		const addresskoiNYMD = accounts[3]
		const addressdwnUgD4 = accounts[3]
		const addressmGtS1M5 = accounts[0]
		const addressCBJDeoy = accounts[2]
		const uintG1DGBor = BigInt("859")
		const addressbNq0vXc = accounts[5]
		const uinttfVGdRO = BigInt("231")
		const addressXwhp44K = await YieldFarmLP2ocenRt.initialize.call(addressCBJDeoy, addressmGtS1M5, addressdwnUgD4, addresskoiNYMD, {from: accounts[0]});
		const uintgSCfuhn = await YieldFarmLP2ocenRt.massHarvest.call({from: accounts[3]});
		const uintsegeVFJ = await YieldFarmLP2ocenRt.userLastEpochIdHarvested.call({from: accounts[5]});
		const uintWSWVXp = await YieldFarmLP2ocenRt.getEpochStake.call(addressbNq0vXc, uintG1DGBor, {from: accounts[3]});
		const uintiOo56U = await YieldFarmLP2ocenRt.harvest.call(uinttfVGdRO, {from: accounts[4]});

		await expect(YieldFarmLP2ocenRt.initialize.call(addressCBJDeoy, addressmGtS1M5, addressdwnUgD4, addresskoiNYMD, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2gcU5N3s = await YieldFarmLP2.new({from: accounts[4]});
		const uintKKjLnFP = BigInt("949")
		const uintZhxAfep = await YieldFarmLP2gcU5N3s.harvest.call(uintKKjLnFP, {from: accounts[1]});
		const uintwOAJBG = await YieldFarmLP2gcU5N3s.getCurrentEpoch.call({from: accounts[2]});
		const uintQ8JWJOM = await YieldFarmLP2gcU5N3s.massHarvest.call({from: accounts[2]});
		const uintVbcChJ6 = await YieldFarmLP2gcU5N3s.massHarvest.call({from: "0x0000000000000000000000000000000000000001"});
		const uintWvxnqxP = await YieldFarmLP2gcU5N3s.getCurrentEpoch.call({from: accounts[4]});

		await expect(YieldFarmLP2gcU5N3s.harvest.call(uintKKjLnFP, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2F1tETGH = await YieldFarmLP2.new({from: accounts[3]});
		const uintQL57tEl = BigInt("1856")
		const addresszplLhlN = accounts[4]
		const uintkJBF5xE = BigInt("1508")
		const uintffd2Zt = await YieldFarmLP2F1tETGH.getCurrentEpoch.call({from: accounts[2]});
		const uintyz2iZgL = await YieldFarmLP2F1tETGH.getEpochStake.call(addresszplLhlN, uintQL57tEl, {from: "0x0000000000000000000000000000000000000001"});
		const uintFi9pHkU = await YieldFarmLP2F1tETGH.massHarvest.call({from: accounts[0]});
		const uintz65857Z = await YieldFarmLP2F1tETGH.massHarvest.call({from: accounts[5]});
		const uint5pLBmu = await YieldFarmLP2F1tETGH.harvest.call(uintkJBF5xE, {from: accounts[1]});

		await expect(YieldFarmLP2F1tETGH.getCurrentEpoch.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2Dnv8gSm = await YieldFarmLP2.new({from: accounts[2]});
		const addressIuFnhp5 = accounts[4]
		const uintd1Ie7gm = BigInt("961")
		const addressU1zI87R = accounts[4]
		const uintbHeCDtI = BigInt("1930")
		const addressgHIPJZF = accounts[1]
		const uintxcf5lzU = await YieldFarmLP2Dnv8gSm.claimable.call(addressIuFnhp5, {from: accounts[2]});
		const uintGVfrsRU = await YieldFarmLP2Dnv8gSm.getPoolSize.call(uintd1Ie7gm, {from: accounts[5]});
		const uintznBaySr = await YieldFarmLP2Dnv8gSm.claimable.call(addressU1zI87R, {from: accounts[4]});
		const uintbN9JGVz = await YieldFarmLP2Dnv8gSm.getEpochStake.call(addressgHIPJZF, uintbHeCDtI, {from: accounts[5]});

		await expect(YieldFarmLP2Dnv8gSm.claimable.call(addressIuFnhp5, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2lIDr4wD = await YieldFarmLP2.new({from: accounts[1]});
		const uintdYlsTb = await YieldFarmLP2lIDr4wD.userLastEpochIdHarvested.call({from: accounts[5]});
		const uintcG3yHEm = await YieldFarmLP2lIDr4wD.getCurrentEpoch.call({from: accounts[0]});

		assert.equal(uintdYlsTb, BigInt("0"))
		await expect(YieldFarmLP2lIDr4wD.getCurrentEpoch.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2Wh9cve = await YieldFarmLP2.new({from: accounts[1]});
		const uintXb36ClT = BigInt("1042")
		const addressUNgsO44 = accounts[2]
		const uint0tddVk = await YieldFarmLP2Wh9cve.getEpochStake.call(addressUNgsO44, uintXb36ClT, {from: accounts[1]});
		const uintBH23Gpb = await YieldFarmLP2Wh9cve.getCurrentEpoch.call({from: accounts[0]});
		const uintz3hj0XH = await YieldFarmLP2Wh9cve.massHarvest.call({from: accounts[5]});

		await expect(YieldFarmLP2Wh9cve.getEpochStake.call(addressUNgsO44, uintXb36ClT, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2XjLlnB = await YieldFarmLP2.new({from: "0x0000000000000000000000000000000000000001"});
		const uintYwrtLQX = BigInt("494")
		const addressZmFhZaZ = accounts[1]
		const uintQ9onfME = BigInt("148")
		const uintzs9vBZX = await YieldFarmLP2XjLlnB.harvest.call(uintYwrtLQX, {from: accounts[4]});
		const uintFBOZQrs = await YieldFarmLP2XjLlnB.claimable.call(addressZmFhZaZ, {from: accounts[0]});
		const uintyygIVMo = await YieldFarmLP2XjLlnB.massHarvest.call({from: accounts[0]});
		const uintXocL3si = await YieldFarmLP2XjLlnB.getPoolSize.call(uintQ9onfME, {from: accounts[1]});
	});
})