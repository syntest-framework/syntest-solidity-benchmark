const YieldFarmLP2 = artifacts.require("YieldFarmLP2");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('YieldFarmLP2', (accounts) => {
	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2RrS3174 = await YieldFarmLP2.new({from: accounts[3]});
		const addresstpVeLh2 = accounts[5]
		const addressvf0JYeq = accounts[1]
		const addressIJjSl1l = accounts[1]
		const uintISco4In = await YieldFarmLP2RrS3174.claimable.call(addresstpVeLh2, {from: "0x0000000000000000000000000000000000000001"});
		const uintKVWBpzL = await YieldFarmLP2RrS3174.claimable.call(addressvf0JYeq, {from: "0x0000000000000000000000000000000000000001"});
		const uintK9ZqckP = await YieldFarmLP2RrS3174.claimable.call(addressIJjSl1l, {from: accounts[3]});

		await expect(YieldFarmLP2RrS3174.claimable.call(addresstpVeLh2, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2ko6aJqo = await YieldFarmLP2.new({from: accounts[3]});
		const addressVbe2PXu = accounts[0]
		const addressJiOTmfw = accounts[4]
		const addresscNazFm6 = "0x0000000000000000000000000000000000000001"
		const addresshd3UTGR = accounts[4]
		const addresswgfK1bR = accounts[0]
		const addressDzrr8g = accounts[2]
		const addressbLvYFEb = accounts[5]
		const addressX8zpkR = accounts[3]
		const uintnqVi9lM = BigInt("1285")
		const addressd70rnIr = "0x0000000000000000000000000000000000000001"
		const uintqlLr9Fa = BigInt("1285")
		const addressvQ39f6S = await YieldFarmLP2ko6aJqo.initialize.call(addresshd3UTGR, addresscNazFm6, addressJiOTmfw, addressVbe2PXu, {from: accounts[3]});
		const addresskxPVKky = await YieldFarmLP2ko6aJqo.initialize.call(addressX8zpkR, addressbLvYFEb, addressDzrr8g, addresswgfK1bR, {from: accounts[3]});
		const uintxVAuT1o = await YieldFarmLP2ko6aJqo.getEpochStake.call(addressd70rnIr, uintnqVi9lM, {from: accounts[1]});
		const uintWHw7Aiv = await YieldFarmLP2ko6aJqo.harvest.call(uintqlLr9Fa, {from: accounts[0]});
		const uintQR670JO = await YieldFarmLP2ko6aJqo.getCurrentEpoch.call({from: accounts[1]});

		await expect(YieldFarmLP2ko6aJqo.initialize.call(addresshd3UTGR, addresscNazFm6, addressJiOTmfw, addressVbe2PXu, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2lkfAUg4 = await YieldFarmLP2.new({from: accounts[3]});
		const addresskB4IzqI = accounts[1]
		const uintfh1ZGd0 = BigInt("1541")
		const uintEb6i87u = BigInt("1823")
		const uintBbbjEy = await YieldFarmLP2lkfAUg4.getCurrentEpoch.call({from: "0x0000000000000000000000000000000000000001"});
		const uintz2cLFaa = await YieldFarmLP2lkfAUg4.claimable.call(addresskB4IzqI, {from: accounts[5]});
		const uintaNz8QPZ = await YieldFarmLP2lkfAUg4.harvest.call(uintfh1ZGd0, {from: accounts[3]});
		const uintQpe5oTy = await YieldFarmLP2lkfAUg4.harvest.call(uintEb6i87u, {from: accounts[4]});

		await expect(YieldFarmLP2lkfAUg4.getCurrentEpoch.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2G65n1V5 = await YieldFarmLP2.new({from: accounts[4]});
		const uintzYODZVv = BigInt("1426")
		const addressuejYvfX = accounts[3]
		const uintpSFHSg1 = BigInt("231")
		const uintwtBOW0z = await YieldFarmLP2G65n1V5.getEpochStake.call(addressuejYvfX, uintzYODZVv, {from: accounts[0]});
		const uintgJTSZwO = await YieldFarmLP2G65n1V5.getPoolSize.call(uintpSFHSg1, {from: accounts[0]});
		const uintsmMI1rQ = await YieldFarmLP2G65n1V5.getCurrentEpoch.call({from: accounts[4]});
		const uintEZ8rfMa = await YieldFarmLP2G65n1V5.massHarvest.call({from: accounts[1]});

		await expect(YieldFarmLP2G65n1V5.getEpochStake.call(addressuejYvfX, uintzYODZVv, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2vWwfSq7 = await YieldFarmLP2.new({from: "0x0000000000000000000000000000000000000001"});
		const uintdRcobCK = BigInt("1178")
		const addressDwZNXC = accounts[1]
		const uintshR9zhz = BigInt("200")
		const uintTPazGS8 = await YieldFarmLP2vWwfSq7.getCurrentEpoch.call({from: accounts[1]});
		const uintBMNAOiT = await YieldFarmLP2vWwfSq7.getCurrentEpoch.call({from: accounts[2]});
		const uintp5ueMrS = await YieldFarmLP2vWwfSq7.getEpochStake.call(addressDwZNXC, uintdRcobCK, {from: accounts[4]});
		const uintk6sQbsI = await YieldFarmLP2vWwfSq7.getPoolSize.call(uintshR9zhz, {from: accounts[1]});
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2X1lC3W7 = await YieldFarmLP2.new({from: accounts[4]});
		const uintc412hRL = BigInt("474")
		const uintlmEXvtB = BigInt("1542")
		const addressPvdQVhR = accounts[5]
		const uintEh8LTjA = BigInt("1868")
		const uintkt1Hcky = await YieldFarmLP2X1lC3W7.harvest.call(uintc412hRL, {from: accounts[0]});
		const uintbv5Cd4D = await YieldFarmLP2X1lC3W7.getEpochStake.call(addressPvdQVhR, uintlmEXvtB, {from: accounts[4]});
		const uintljOZoGP = await YieldFarmLP2X1lC3W7.getPoolSize.call(uintEh8LTjA, {from: accounts[2]});
		const uintiJuz7vp = await YieldFarmLP2X1lC3W7.userLastEpochIdHarvested.call({from: accounts[5]});

		await expect(YieldFarmLP2X1lC3W7.harvest.call(uintc412hRL, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2y1dv445 = await YieldFarmLP2.new({from: accounts[4]});
		const addressv4QS1Es = accounts[4]
		const addressu5eEZYl = accounts[1]
		const addressJujT3S = accounts[1]
		const addressbb7XpV = accounts[4]
		const uintuC5lKWk = BigInt("1828")
		const uintvuQOMoi = await YieldFarmLP2y1dv445.massHarvest.call({from: accounts[2]});
		const addressnbS5ZAL = await YieldFarmLP2y1dv445.initialize.call(addressbb7XpV, addressJujT3S, addressu5eEZYl, addressv4QS1Es, {from: accounts[1]});
		const uintnKuww8 = await YieldFarmLP2y1dv445.harvest.call(uintuC5lKWk, {from: accounts[4]});

		await expect(YieldFarmLP2y1dv445.massHarvest.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2rHvQtAd = await YieldFarmLP2.new({from: accounts[2]});
		const uintIPWqyl = BigInt("1572")
		const uintSqvCxkE = BigInt("1436")
		const addressWQMRZJZ = accounts[2]
		const uintU5maWkw = await YieldFarmLP2rHvQtAd.getPoolSize.call(uintIPWqyl, {from: accounts[1]});
		const uintJgM4hSV = await YieldFarmLP2rHvQtAd.userLastEpochIdHarvested.call({from: accounts[4]});
		const uintinMW0q = await YieldFarmLP2rHvQtAd.getEpochStake.call(addressWQMRZJZ, uintSqvCxkE, {from: accounts[0]});

		await expect(YieldFarmLP2rHvQtAd.getPoolSize.call(uintIPWqyl, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2RrS3174 = await YieldFarmLP2.new({from: accounts[3]});
		const addresspGFTEbx = accounts[7]
		const uintzDMzOD = await YieldFarmLP2RrS3174.userLastEpochIdHarvested.call({from: accounts[2]});
		const uintISco4In = await YieldFarmLP2RrS3174.claimable.call(addresspGFTEbx, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uintzDMzOD, BigInt("0"))
		await expect(YieldFarmLP2RrS3174.claimable.call(addresspGFTEbx, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});
})