const YieldFarmLP2 = artifacts.require("YieldFarmLP2");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('YieldFarmLP2', (accounts) => {
	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP296KkGw = await YieldFarmLP2.new({from: accounts[2]});
		const uintZh4Sf9t = BigInt("1714")
		const uintO6nVFsi = BigInt("1289")
		const uintDqmfiOm = await YieldFarmLP296KkGw.massHarvest.call({from: "0x0000000000000000000000000000000000000001"});
		const uintqVxqnc7 = await YieldFarmLP296KkGw.getPoolSize.call(uintZh4Sf9t, {from: "0x0000000000000000000000000000000000000001"});
		const uintDcdIFbh = await YieldFarmLP296KkGw.getPoolSize.call(uintO6nVFsi, {from: accounts[2]});

		await expect(YieldFarmLP296KkGw.massHarvest.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2Sj9LExT = await YieldFarmLP2.new({from: accounts[1]});
		const uintrCkc5zr = BigInt("2039")
		const uintK43w7Rt = BigInt("1780")
		const uintoW8CxgP = await YieldFarmLP2Sj9LExT.getCurrentEpoch.call({from: accounts[1]});
		const uintplJlfge = await YieldFarmLP2Sj9LExT.massHarvest.call({from: "0x0000000000000000000000000000000000000001"});
		const uintf1IdtFb = await YieldFarmLP2Sj9LExT.getPoolSize.call(uintrCkc5zr, {from: accounts[2]});
		const uintLMP77gk = await YieldFarmLP2Sj9LExT.harvest.call(uintK43w7Rt, {from: accounts[1]});
		const uintFBRmPmY = await YieldFarmLP2Sj9LExT.getCurrentEpoch.call({from: accounts[3]});

		await expect(YieldFarmLP2Sj9LExT.getCurrentEpoch.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2BEsADpb = await YieldFarmLP2.new({from: accounts[0]});
		const addressmhq8mS5 = accounts[4]
		const addresseItRtAs = accounts[1]
		const uintBOM9oLQ = await YieldFarmLP2BEsADpb.claimable.call(addressmhq8mS5, {from: "0x0000000000000000000000000000000000000001"});
		const uintm9PY1uU = await YieldFarmLP2BEsADpb.claimable.call(addresseItRtAs, {from: accounts[4]});
		const uintlL4aikW = await YieldFarmLP2BEsADpb.getCurrentEpoch.call({from: accounts[1]});

		await expect(YieldFarmLP2BEsADpb.claimable.call(addressmhq8mS5, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2HvfGERf = await YieldFarmLP2.new({from: accounts[3]});
		const uintvjuUhXq = BigInt("1146")
		const addressQ8usLiR = accounts[3]
		const uintKJ50kqm = await YieldFarmLP2HvfGERf.getPoolSize.call(uintvjuUhXq, {from: accounts[3]});
		const uintm7qQYbs = await YieldFarmLP2HvfGERf.claimable.call(addressQ8usLiR, {from: accounts[3]});

		await expect(YieldFarmLP2HvfGERf.getPoolSize.call(uintvjuUhXq, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2zfF8ESs = await YieldFarmLP2.new({from: accounts[2]});
		const uintW3X4pLk = BigInt("1965")
		const addresswx4wETx = accounts[5]
		const uintBg7vzc7 = BigInt("357")
		const uintfwOTVKI = BigInt("1883")
		const uintf8Hhr8m = await YieldFarmLP2zfF8ESs.harvest.call(uintW3X4pLk, {from: accounts[5]});
		const uintsu0JWu6 = await YieldFarmLP2zfF8ESs.claimable.call(addresswx4wETx, {from: accounts[3]});
		const uintDFwzVnl = await YieldFarmLP2zfF8ESs.getPoolSize.call(uintBg7vzc7, {from: accounts[0]});
		const uintVvP3ust = await YieldFarmLP2zfF8ESs.harvest.call(uintfwOTVKI, {from: accounts[2]});

		await expect(YieldFarmLP2zfF8ESs.harvest.call(uintW3X4pLk, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2Udmq61y = await YieldFarmLP2.new({from: "0x0000000000000000000000000000000000000001"});
		const addressiDmqMT = accounts[2]
		const uintZbNvEfW = BigInt("696")
		const addressYAZss08 = accounts[4]
		const uintI78XrTa = await YieldFarmLP2Udmq61y.claimable.call(addressiDmqMT, {from: accounts[0]});
		const uintzxiP76I = await YieldFarmLP2Udmq61y.userLastEpochIdHarvested.call({from: accounts[5]});
		const uintmL5Pt12 = await YieldFarmLP2Udmq61y.getPoolSize.call(uintZbNvEfW, {from: accounts[1]});
		const uintWWu4pcQ = await YieldFarmLP2Udmq61y.claimable.call(addressYAZss08, {from: accounts[2]});
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2UBz539j = await YieldFarmLP2.new({from: accounts[1]});
		const uintiXAS8G4 = await YieldFarmLP2UBz539j.userLastEpochIdHarvested.call({from: accounts[4]});
		const uintdq545jA = await YieldFarmLP2UBz539j.massHarvest.call({from: accounts[1]});

		assert.equal(uintiXAS8G4, BigInt("0"))
		await expect(YieldFarmLP2UBz539j.massHarvest.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2HvfGERf = await YieldFarmLP2.new({from: accounts[3]});
		const uintbpdcIFw = BigInt("67")
		const addressyyTbyhe = accounts[5]
		const addressKNwUHFG = accounts[3]
		const uintNNcI5cw = await YieldFarmLP2HvfGERf.getEpochStake.call(addressyyTbyhe, uintbpdcIFw, {from: accounts[4]});
		const uintm7qQYbs = await YieldFarmLP2HvfGERf.claimable.call(addressKNwUHFG, {from: accounts[3]});

		await expect(YieldFarmLP2HvfGERf.getEpochStake.call(addressyyTbyhe, uintbpdcIFw, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2HvfGERf = await YieldFarmLP2.new({from: accounts[3]});
		const addressaqLaD2e = "0x0000000000000000000000000000000000000001"
		const addressi2zLZSc = accounts[3]
		const addressrVxHkre = accounts[0]
		const addressA5C7Cib = accounts[0]
		const addressyD4gPo = accounts[3]
		const addressnyZezoR = await YieldFarmLP2HvfGERf.initialize.call(addressA5C7Cib, addressrVxHkre, addressi2zLZSc, addressaqLaD2e, {from: accounts[3]});
		const uintm7qQYbs = await YieldFarmLP2HvfGERf.claimable.call(addressyD4gPo, {from: accounts[3]});

		await expect(YieldFarmLP2HvfGERf.initialize.call(addressA5C7Cib, addressrVxHkre, addressi2zLZSc, addressaqLaD2e, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})