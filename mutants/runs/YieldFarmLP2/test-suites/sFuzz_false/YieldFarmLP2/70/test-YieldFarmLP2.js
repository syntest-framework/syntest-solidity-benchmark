const YieldFarmLP2 = artifacts.require("YieldFarmLP2");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('YieldFarmLP2', (accounts) => {
	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2gQVLZVh = await YieldFarmLP2.new({from: accounts[0]});
		const uintY3YUmy2 = BigInt("37")
		const addressi1SvueW = accounts[0]
		const addresswk0MSiH = accounts[2]
		const uintIihpxBE = BigInt("1611")
		const uintSOz0CiI = await YieldFarmLP2gQVLZVh.getEpochStake.call(addressi1SvueW, uintY3YUmy2, {from: accounts[0]});
		const uinthntIaZF = await YieldFarmLP2gQVLZVh.claimable.call(addresswk0MSiH, {from: accounts[0]});
		const uintIzwDAZB = await YieldFarmLP2gQVLZVh.harvest.call(uintIihpxBE, {from: accounts[2]});

		await expect(YieldFarmLP2gQVLZVh.getEpochStake.call(addressi1SvueW, uintY3YUmy2, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2GgciLCL = await YieldFarmLP2.new({from: accounts[1]});
		const addressCWjqctJ = accounts[1]
		const uinta2Cf8RH = BigInt("1510")
		const addressFaa3xzh = accounts[3]
		const uintaFu4GI = await YieldFarmLP2GgciLCL.claimable.call(addressCWjqctJ, {from: accounts[1]});
		const uintoQTkxNq = await YieldFarmLP2GgciLCL.getEpochStake.call(addressFaa3xzh, uinta2Cf8RH, {from: accounts[4]});

		await expect(YieldFarmLP2GgciLCL.claimable.call(addressCWjqctJ, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2kOaSQDF = await YieldFarmLP2.new({from: accounts[4]});
		const addressIeEjkOC = accounts[4]
		const addressHduR9AQ = "0x0000000000000000000000000000000000000001"
		const addresswq5eFdk = accounts[5]
		const addresslpEddqB = accounts[0]
		const addressHjG1Kgt = accounts[0]
		const addressfj9FKO = accounts[0]
		const addresstweUGjy = accounts[2]
		const addresszygoVX = accounts[1]
		const uintym0137b = BigInt("1989")
		const uintcMo6mLH = BigInt("1756")
		const uintIUmzAwf = await YieldFarmLP2kOaSQDF.getCurrentEpoch.call({from: accounts[4]});
		const addressVl2mxi = await YieldFarmLP2kOaSQDF.initialize.call(addresslpEddqB, addresswq5eFdk, addressHduR9AQ, addressIeEjkOC, {from: accounts[0]});
		const addressBQEqIk = await YieldFarmLP2kOaSQDF.initialize.call(addresszygoVX, addresstweUGjy, addressfj9FKO, addressHjG1Kgt, {from: accounts[4]});
		const uintkL6SCfx = await YieldFarmLP2kOaSQDF.getPoolSize.call(uintym0137b, {from: accounts[3]});
		const uinte1d6uq4 = await YieldFarmLP2kOaSQDF.getPoolSize.call(uintcMo6mLH, {from: accounts[2]});

		await expect(YieldFarmLP2kOaSQDF.getCurrentEpoch.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2cqW4ct = await YieldFarmLP2.new({from: accounts[0]});
		const uintBycAIf = BigInt("1046")
		const addresseGXUGL1 = accounts[1]
		const uintcyy2PMG = BigInt("1054")
		const uintAEzICyp = await YieldFarmLP2cqW4ct.massHarvest.call({from: accounts[3]});
		const uintyWjCNNK = await YieldFarmLP2cqW4ct.harvest.call(uintBycAIf, {from: accounts[3]});
		const uintPLPhUyX = await YieldFarmLP2cqW4ct.getCurrentEpoch.call({from: accounts[4]});
		const uintpnfJKBA = await YieldFarmLP2cqW4ct.claimable.call(addresseGXUGL1, {from: accounts[5]});
		const uintyiJWmFp = await YieldFarmLP2cqW4ct.harvest.call(uintcyy2PMG, {from: accounts[0]});

		await expect(YieldFarmLP2cqW4ct.massHarvest.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2ZrnRlLM = await YieldFarmLP2.new({from: "0x0000000000000000000000000000000000000001"});
		const uintvK52ibe = BigInt("202")
		const addressxK1Vr67 = accounts[0]
		const uintPdTA0nx = await YieldFarmLP2ZrnRlLM.getPoolSize.call(uintvK52ibe, {from: accounts[4]});
		const uintpQqvGAo = await YieldFarmLP2ZrnRlLM.massHarvest.call({from: accounts[1]});
		const uintlLYDmer = await YieldFarmLP2ZrnRlLM.claimable.call(addressxK1Vr67, {from: accounts[3]});
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2XDZ8aHc = await YieldFarmLP2.new({from: accounts[0]});
		const uintPBnnXww = BigInt("1637")
		const addressIcCgdQI = accounts[3]
		const uintlu93yPH = BigInt("85")
		const uintMosGgV6 = await YieldFarmLP2XDZ8aHc.harvest.call(uintPBnnXww, {from: accounts[2]});
		const uinttDwt6ON = await YieldFarmLP2XDZ8aHc.claimable.call(addressIcCgdQI, {from: "0x0000000000000000000000000000000000000001"});
		const uintMScwSCQ = await YieldFarmLP2XDZ8aHc.getCurrentEpoch.call({from: accounts[3]});
		const uintiXGbaxk = await YieldFarmLP2XDZ8aHc.harvest.call(uintlu93yPH, {from: accounts[4]});
		const uintofjmTPz = await YieldFarmLP2XDZ8aHc.getCurrentEpoch.call({from: accounts[4]});

		await expect(YieldFarmLP2XDZ8aHc.harvest.call(uintPBnnXww, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2GgciLCL = await YieldFarmLP2.new({from: accounts[1]});
		const addressjRGkm5I = accounts[1]
		const uintsBG1G1d = BigInt("1531")
		const addressdelQNE6 = accounts[3]
		const uintkF9fK3 = await YieldFarmLP2GgciLCL.userLastEpochIdHarvested.call({from: accounts[1]});
		const uintaFu4GI = await YieldFarmLP2GgciLCL.claimable.call(addressjRGkm5I, {from: accounts[1]});
		const uintoQTkxNq = await YieldFarmLP2GgciLCL.getEpochStake.call(addressdelQNE6, uintsBG1G1d, {from: accounts[4]});

		assert.equal(uintkF9fK3, BigInt("0"))
		await expect(YieldFarmLP2GgciLCL.claimable.call(addressjRGkm5I, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2wC3KUeR = await YieldFarmLP2.new({from: accounts[3]});
		const uintA6GWVCC = BigInt("1282")
		const uintnQ1ka97 = await YieldFarmLP2wC3KUeR.getPoolSize.call(uintA6GWVCC, {from: accounts[1]});

		await expect(YieldFarmLP2wC3KUeR.getPoolSize.call(uintA6GWVCC, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2wC3KUeR = await YieldFarmLP2.new({from: accounts[3]});
		const addressZyfL50 = accounts[0]
		const addressHtoKTgj = accounts[1]
		const addressRAhFQM = accounts[1]
		const addressE8qvKt = accounts[3]
		const uintkreWwQv = BigInt("832")
		const addressrawEaGc = accounts[2]
		const addressSkVki4b = await YieldFarmLP2wC3KUeR.initialize.call(addressE8qvKt, addressRAhFQM, addressHtoKTgj, addressZyfL50, {from: accounts[0]});
		const uintJiOLLxc = await YieldFarmLP2wC3KUeR.getEpochStake.call(addressrawEaGc, uintkreWwQv, {from: "0x0000000000000000000000000000000000000001"});
		const uintuuIetah = await YieldFarmLP2wC3KUeR.userLastEpochIdHarvested.call({from: accounts[3]});

		await expect(YieldFarmLP2wC3KUeR.initialize.call(addressE8qvKt, addressRAhFQM, addressHtoKTgj, addressZyfL50, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})