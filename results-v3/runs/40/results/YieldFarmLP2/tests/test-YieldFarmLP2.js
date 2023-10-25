const YieldFarmLP2 = artifacts.require("YieldFarmLP2");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('YieldFarmLP2', (accounts) => {
	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2vlAnqiu = await YieldFarmLP2.new({from: accounts[5]});
		const uintTNQULZs = await YieldFarmLP2vlAnqiu.getCurrentEpoch.call({from: accounts[3]});
		const uintXnUFY6f = await YieldFarmLP2vlAnqiu.massHarvest.call({from: accounts[3]});
		const uintxdZOmTs = await YieldFarmLP2vlAnqiu.userLastEpochIdHarvested.call({from: "0x0000000000000000000000000000000000000001"});
		const uintYDM6GHt = await YieldFarmLP2vlAnqiu.massHarvest.call({from: accounts[1]});

		await expect(YieldFarmLP2vlAnqiu.getCurrentEpoch.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2Kp8a26h = await YieldFarmLP2.new({from: accounts[1]});
		const addressE8tuZAL = accounts[3]
		const uintyj2lxP2 = BigInt("967")
		const uintfK1k3DD = BigInt("1626")
		const uintGHCRR93 = await YieldFarmLP2Kp8a26h.massHarvest.call({from: accounts[0]});
		const uintdnpEQK = await YieldFarmLP2Kp8a26h.claimable.call(addressE8tuZAL, {from: accounts[4]});
		const uintmiGYBwq = await YieldFarmLP2Kp8a26h.harvest.call(uintyj2lxP2, {from: "0x0000000000000000000000000000000000000001"});
		const uintOFJ7x1T = await YieldFarmLP2Kp8a26h.harvest.call(uintfK1k3DD, {from: "0x0000000000000000000000000000000000000001"});
		const uintGXoVNKC = await YieldFarmLP2Kp8a26h.massHarvest.call({from: accounts[0]});

		await expect(YieldFarmLP2Kp8a26h.massHarvest.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2HMVP8br = await YieldFarmLP2.new({from: accounts[2]});
		const uintFXgCNkP = BigInt("921")
		const uintHaGhoqy = BigInt("483")
		const addressYJ2hgV = accounts[1]
		const uintbCJ9sZ = await YieldFarmLP2HMVP8br.getPoolSize.call(uintFXgCNkP, {from: accounts[2]});
		const uintXbXOLxU = await YieldFarmLP2HMVP8br.getEpochStake.call(addressYJ2hgV, uintHaGhoqy, {from: accounts[5]});
		const uintEygB6z8 = await YieldFarmLP2HMVP8br.userLastEpochIdHarvested.call({from: accounts[0]});
		const uintpO2Y2zu = await YieldFarmLP2HMVP8br.massHarvest.call({from: accounts[0]});

		await expect(YieldFarmLP2HMVP8br.getPoolSize.call(uintFXgCNkP, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2m4cZGLX = await YieldFarmLP2.new({from: accounts[0]});
		const uintfDCuJG = BigInt("1624")
		const addresskrrYJQE = accounts[0]
		const uintSJG5Hd = BigInt("899")
		const uintMYY0w3X = await YieldFarmLP2m4cZGLX.getEpochStake.call(addresskrrYJQE, uintfDCuJG, {from: accounts[0]});
		const uintdmZpbcJ = await YieldFarmLP2m4cZGLX.massHarvest.call({from: accounts[0]});
		const uintuiky3j = await YieldFarmLP2m4cZGLX.getPoolSize.call(uintSJG5Hd, {from: accounts[1]});
		const uintbSt2FT = await YieldFarmLP2m4cZGLX.getCurrentEpoch.call({from: accounts[3]});

		await expect(YieldFarmLP2m4cZGLX.getEpochStake.call(addresskrrYJQE, uintfDCuJG, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2VtATfjh = await YieldFarmLP2.new({from: "0x0000000000000000000000000000000000000001"});
		const uintXZVlCkt = BigInt("364")
		const uintvQaLO2S = BigInt("87")
		const addressbB9fNKy = accounts[2]
		const uintVwh9gNS = await YieldFarmLP2VtATfjh.getPoolSize.call(uintXZVlCkt, {from: accounts[1]});
		const uintV3l45eF = await YieldFarmLP2VtATfjh.getEpochStake.call(addressbB9fNKy, uintvQaLO2S, {from: accounts[4]});
		const uintpRTZ0am = await YieldFarmLP2VtATfjh.getCurrentEpoch.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2oymyB6Z = await YieldFarmLP2.new({from: accounts[3]});
		const uinthU7AZOZ = BigInt("853")
		const uintXpRCSYy = BigInt("1012")
		const uintS6GRQS = await YieldFarmLP2oymyB6Z.harvest.call(uinthU7AZOZ, {from: accounts[3]});
		const uintoR5y6gM = await YieldFarmLP2oymyB6Z.getPoolSize.call(uintXpRCSYy, {from: accounts[2]});
		const uintZ465iir = await YieldFarmLP2oymyB6Z.massHarvest.call({from: accounts[0]});
		const uinttwdc0Ky = await YieldFarmLP2oymyB6Z.getCurrentEpoch.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(YieldFarmLP2oymyB6Z.harvest.call(uinthU7AZOZ, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2Kp8a26h = await YieldFarmLP2.new({from: accounts[1]});
		const addresscUi4IsF = accounts[4]
		const addressNhDFCPS = accounts[1]
		const addresssTGrEg = accounts[3]
		const addressaNl6LTH = accounts[2]
		const addressFdoFyX = accounts[3]
		const uintDAM7c6Z = BigInt("967")
		const uintmr7I6SX = BigInt("1650")
		const addressOcvBkIi = await YieldFarmLP2Kp8a26h.initialize.call(addressaNl6LTH, addresssTGrEg, addressNhDFCPS, addresscUi4IsF, {from: accounts[3]});
		const uintpsZ6ugl = await YieldFarmLP2Kp8a26h.getCurrentEpoch.call({from: accounts[1]});
		const uintGHCRR93 = await YieldFarmLP2Kp8a26h.massHarvest.call({from: accounts[0]});
		const uintdnpEQK = await YieldFarmLP2Kp8a26h.claimable.call(addressFdoFyX, {from: accounts[4]});
		const uintmiGYBwq = await YieldFarmLP2Kp8a26h.harvest.call(uintDAM7c6Z, {from: "0x0000000000000000000000000000000000000001"});
		const uintGpOcQY4 = await YieldFarmLP2Kp8a26h.massHarvest.call({from: accounts[2]});
		const uintOFJ7x1T = await YieldFarmLP2Kp8a26h.harvest.call(uintmr7I6SX, {from: "0x0000000000000000000000000000000000000001"});
		const uintGXoVNKC = await YieldFarmLP2Kp8a26h.massHarvest.call({from: accounts[0]});

		await expect(YieldFarmLP2Kp8a26h.initialize.call(addressaNl6LTH, addresssTGrEg, addressNhDFCPS, addresscUi4IsF, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2X0MbW65 = await YieldFarmLP2.new({from: accounts[4]});
		const addresspCSuB4n = accounts[0]
		const uintZZ5OLcZ = BigInt("736")
		const addressLvtlQen = "0x0000000000000000000000000000000000000001"
		const addressMlN908u = "0x0000000000000000000000000000000000000001"
		const addresslzmFpww = accounts[3]
		const addresszc0tvgU = accounts[3]
		const uinta5m3JiW = await YieldFarmLP2X0MbW65.claimable.call(addresspCSuB4n, {from: accounts[1]});
		const uintBxZoaHL = await YieldFarmLP2X0MbW65.getPoolSize.call(uintZZ5OLcZ, {from: accounts[4]});
		const addressTac890t = await YieldFarmLP2X0MbW65.initialize.call(addresszc0tvgU, addresslzmFpww, addressMlN908u, addressLvtlQen, {from: accounts[1]});

		await expect(YieldFarmLP2X0MbW65.claimable.call(addresspCSuB4n, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2X0MbW65 = await YieldFarmLP2.new({from: accounts[4]});
		const uintr5AFxM = await YieldFarmLP2X0MbW65.userLastEpochIdHarvested.call({from: accounts[1]});
		const uintVMI1Uxv = await YieldFarmLP2X0MbW65.massHarvest.call({from: "0x0000000000000000000000000000000000000001"});
		const uint0Dqolm = await YieldFarmLP2X0MbW65.getCurrentEpoch.call({from: accounts[0]});

		assert.equal(uintr5AFxM, BigInt("0"))
		await expect(YieldFarmLP2X0MbW65.massHarvest.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});
})