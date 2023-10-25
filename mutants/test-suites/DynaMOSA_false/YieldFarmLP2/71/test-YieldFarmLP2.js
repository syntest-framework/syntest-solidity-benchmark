const YieldFarmLP2 = artifacts.require("YieldFarmLP2");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('YieldFarmLP2', (accounts) => {
	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2K1WjoN8 = await YieldFarmLP2.new({from: accounts[2]});
		const uintE9IV69c = BigInt("1819")
		const addressbtFtDG = accounts[5]
		const uintvdkH0ti = BigInt("710")
//		const uintUHk7r1u = await YieldFarmLP2K1WjoN8.harvest.call(uintE9IV69c, {from: accounts[3]});
//		const uintQ6mLgg3 = await YieldFarmLP2K1WjoN8.claimable.call(addressbtFtDG, {from: accounts[3]});
//		const uinthEtDGf = await YieldFarmLP2K1WjoN8.getPoolSize.call(uintvdkH0ti, {from: accounts[3]});

		await expect(YieldFarmLP2K1WjoN8.harvest.call(uintE9IV69c, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2zoJDT7F = await YieldFarmLP2.new({from: accounts[5]});
		const uintELc4f2i = BigInt("1253")
		const addresseUZV6ig = accounts[4]
		const uintyobj27K = BigInt("1348")
		const uintZ0l4VUm = BigInt("1939")
		const addressEz3ZBEG = accounts[1]
//		const uintZDFOwFj = await YieldFarmLP2zoJDT7F.getEpochStake.call(addresseUZV6ig, uintELc4f2i, {from: accounts[2]});
//		const uintLFhR4ta = await YieldFarmLP2zoJDT7F.harvest.call(uintyobj27K, {from: accounts[5]});
//		const uintlEjIYdT = await YieldFarmLP2zoJDT7F.getEpochStake.call(addressEz3ZBEG, uintZ0l4VUm, {from: accounts[2]});

		await expect(YieldFarmLP2zoJDT7F.getEpochStake.call(addresseUZV6ig, uintELc4f2i, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2dTo6Z3A = await YieldFarmLP2.new({from: accounts[3]});
		const addressm5PTyGu = accounts[1]
		const addresspzLYthU = accounts[1]
		const addressHbwLzAo = accounts[5]
		const addresss0Zr0OJ = accounts[5]
//		const addressrB8KLeO = await YieldFarmLP2dTo6Z3A.initialize.call(addresss0Zr0OJ, addressHbwLzAo, addresspzLYthU, addressm5PTyGu, {from: "0x0000000000000000000000000000000000000001"});
//		const uintboxmpac = await YieldFarmLP2dTo6Z3A.massHarvest.call({from: accounts[3]});
//		const uintYuuOnZ3 = await YieldFarmLP2dTo6Z3A.userLastEpochIdHarvested.call({from: accounts[1]});

		await expect(YieldFarmLP2dTo6Z3A.initialize.call(addresss0Zr0OJ, addressHbwLzAo, addresspzLYthU, addressm5PTyGu, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2TLmtNcD = await YieldFarmLP2.new({from: accounts[4]});
		const addressFdTDlya = "0x0000000000000000000000000000000000000001"
		const uinttNwrYcR = BigInt("1266")
		const uintNJDqe5 = BigInt("532")
		const uinteyL7Ssz = BigInt("205")
		const uintGkHBzyj = BigInt("2025")
		const address74tFNo = accounts[1]
//		const uintZuq1AM = await YieldFarmLP2TLmtNcD.claimable.call(addressFdTDlya, {from: accounts[0]});
//		const uintypFBieI = await YieldFarmLP2TLmtNcD.getPoolSize.call(uinttNwrYcR, {from: accounts[3]});
//		const uintH33wJpa = await YieldFarmLP2TLmtNcD.getPoolSize.call(uintNJDqe5, {from: accounts[4]});
//		const uintCpmO0tu = await YieldFarmLP2TLmtNcD.harvest.call(uinteyL7Ssz, {from: accounts[0]});
//		const uintmEb1tqp = await YieldFarmLP2TLmtNcD.getEpochStake.call(address74tFNo, uintGkHBzyj, {from: accounts[2]});

		await expect(YieldFarmLP2TLmtNcD.claimable.call(addressFdTDlya, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2sxtvsS = await YieldFarmLP2.new({from: accounts[2]});
		const addresswbQitFe = accounts[2]
		const uintSui0ksQ = BigInt("158")
//		const uint7H7qX6 = await YieldFarmLP2sxtvsS.massHarvest.call({from: accounts[4]});
//		const uintVg4Kt2n = await YieldFarmLP2sxtvsS.claimable.call(addresswbQitFe, {from: accounts[1]});
//		const uintDTyhxVX = await YieldFarmLP2sxtvsS.getPoolSize.call(uintSui0ksQ, {from: accounts[5]});
//		const uintw4dnMCQ = await YieldFarmLP2sxtvsS.getCurrentEpoch.call({from: accounts[1]});

		await expect(YieldFarmLP2sxtvsS.massHarvest.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2ucY70dz = await YieldFarmLP2.new({from: accounts[2]});
		const uintHOeowU = BigInt("535")
		const addressFKt6DIm = accounts[0]
		const uint8YSPZR = BigInt("689")
		const addressytZjWh3 = accounts[3]
		const addressmmqiZHd = accounts[4]
		const addressm4CrUq7 = accounts[1]
//		const uintHwvjQC0 = await YieldFarmLP2ucY70dz.getCurrentEpoch.call({from: accounts[0]});
//		const uintGd2boVI = await YieldFarmLP2ucY70dz.massHarvest.call({from: accounts[1]});
//		const uintaWPupPf = await YieldFarmLP2ucY70dz.getEpochStake.call(addressFKt6DIm, uintHOeowU, {from: accounts[3]});
//		const uintMvqvdZI = await YieldFarmLP2ucY70dz.getEpochStake.call(addressytZjWh3, uint8YSPZR, {from: accounts[4]});
//		const uinthcig660 = await YieldFarmLP2ucY70dz.claimable.call(addressmmqiZHd, {from: accounts[2]});
//		const uinthxlDkTx = await YieldFarmLP2ucY70dz.claimable.call(addressm4CrUq7, {from: accounts[4]});

		await expect(YieldFarmLP2ucY70dz.getCurrentEpoch.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2jf0Zk1t = await YieldFarmLP2.new({from: "0x0000000000000000000000000000000000000001"});
		const uinttZ8gkDI = BigInt("1124")
		const addressJbVyFIr = accounts[2]
		const uinttozIPDk = BigInt("1471")
		const uintU2Bb5tg = BigInt("1315")
		const uintwHbIHih = await YieldFarmLP2jf0Zk1t.getEpochStake.call(addressJbVyFIr, uinttZ8gkDI, {from: accounts[3]});
		const uintuUbSkPN = await YieldFarmLP2jf0Zk1t.getPoolSize.call(uinttozIPDk, {from: accounts[2]});
		const uintnUGSMyx = await YieldFarmLP2jf0Zk1t.getPoolSize.call(uintU2Bb5tg, {from: accounts[0]});
		const uintp6c1am4 = await YieldFarmLP2jf0Zk1t.massHarvest.call({from: accounts[3]});
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2vQcxqSn = await YieldFarmLP2.new({from: accounts[1]});
		const uintnnmwCVm = BigInt("380")
//		const uintUThpzmj = await YieldFarmLP2vQcxqSn.getPoolSize.call(uintnnmwCVm, {from: accounts[4]});
//		const uintxsc7XQq = await YieldFarmLP2vQcxqSn.massHarvest.call({from: accounts[0]});

		await expect(YieldFarmLP2vQcxqSn.getPoolSize.call(uintnnmwCVm, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2oGqZm9B = await YieldFarmLP2.new({from: accounts[2]});
		const uintp1jhkfA = BigInt("757")
		const addressrlEcXQN = accounts[3]
		const uintIzOj9kO = await YieldFarmLP2oGqZm9B.userLastEpochIdHarvested.call({from: accounts[2]});
//		const uintIsXyM1g = await YieldFarmLP2oGqZm9B.massHarvest.call({from: accounts[2]});
//		const uintTkfRcoi = await YieldFarmLP2oGqZm9B.getEpochStake.call(addressrlEcXQN, uintp1jhkfA, {from: accounts[0]});

		assert.equal(uintIzOj9kO, BigInt("0"))
		await expect(YieldFarmLP2oGqZm9B.massHarvest.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});
})