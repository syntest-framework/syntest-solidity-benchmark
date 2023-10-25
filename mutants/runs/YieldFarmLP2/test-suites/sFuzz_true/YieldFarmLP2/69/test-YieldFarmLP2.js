const YieldFarmLP2 = artifacts.require("YieldFarmLP2");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('YieldFarmLP2', (accounts) => {
	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2pkBa4Ha = await YieldFarmLP2.new({from: accounts[4]});
		const uintVZYZJMU = BigInt("49")
		const addressUSOUgZI = "0x0000000000000000000000000000000000000001"
		const uintvXn4jvq = BigInt("1507")
		const addressRTA0qNV = accounts[2]
		const uintBLyo5hA = BigInt("1511")
		const uintvfh78Q = await YieldFarmLP2pkBa4Ha.getEpochStake.call(addressUSOUgZI, uintVZYZJMU, {from: accounts[2]});
		const uintX23G20h = await YieldFarmLP2pkBa4Ha.getEpochStake.call(addressRTA0qNV, uintvXn4jvq, {from: accounts[0]});
		const uintauL8fIF = await YieldFarmLP2pkBa4Ha.harvest.call(uintBLyo5hA, {from: accounts[1]});
		const uintCtbYgV = await YieldFarmLP2pkBa4Ha.userLastEpochIdHarvested.call({from: accounts[1]});

		await expect(YieldFarmLP2pkBa4Ha.getEpochStake.call(addressUSOUgZI, uintVZYZJMU, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2UDKLhqF = await YieldFarmLP2.new({from: accounts[2]});
		const uintNfWM3FC = BigInt("1921")
		const addressoL1bdZB = accounts[1]
		const uintplUiy72 = await YieldFarmLP2UDKLhqF.userLastEpochIdHarvested.call({from: accounts[4]});
		const uintL3v0vH = await YieldFarmLP2UDKLhqF.getEpochStake.call(addressoL1bdZB, uintNfWM3FC, {from: accounts[2]});
		const uintiGfv6Bw = await YieldFarmLP2UDKLhqF.massHarvest.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uintplUiy72, BigInt("0"))
		await expect(YieldFarmLP2UDKLhqF.getEpochStake.call(addressoL1bdZB, uintNfWM3FC, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2ddlmIR = await YieldFarmLP2.new({from: "0x0000000000000000000000000000000000000001"});
		const uintNRw9S2n = BigInt("411")
		const addressTDCLtaI = accounts[4]
		const uintb7lYx8E = BigInt("844")
		const uintGUgcKiu = BigInt("251")
		const uintTeceIYJ = await YieldFarmLP2ddlmIR.harvest.call(uintNRw9S2n, {from: accounts[0]});
		const uintXEDsKPz = await YieldFarmLP2ddlmIR.claimable.call(addressTDCLtaI, {from: accounts[5]});
		const uintCDtmJbF = await YieldFarmLP2ddlmIR.harvest.call(uintb7lYx8E, {from: accounts[1]});
		const uintv4EAvi = await YieldFarmLP2ddlmIR.harvest.call(uintGUgcKiu, {from: accounts[2]});
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2MEYGdng = await YieldFarmLP2.new({from: accounts[3]});
		const uint6vLm4J = BigInt("1807")
		const uintZ9gmaVO = await YieldFarmLP2MEYGdng.getCurrentEpoch.call({from: accounts[4]});
		const uintw98wtn6 = await YieldFarmLP2MEYGdng.getPoolSize.call(uint6vLm4J, {from: accounts[1]});

		await expect(YieldFarmLP2MEYGdng.getCurrentEpoch.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2hZrErz = await YieldFarmLP2.new({from: accounts[4]});
		const uintjQrKPJ = BigInt("1184")
		const uintKsoHwrJ = BigInt("575")
		const addressGyyjzSC = "0x0000000000000000000000000000000000000001"
		const uintqJqCDr = await YieldFarmLP2hZrErz.userLastEpochIdHarvested.call({from: accounts[1]});
		const uintrrEFH8 = await YieldFarmLP2hZrErz.massHarvest.call({from: accounts[2]});
		const uintyK3GIUE = await YieldFarmLP2hZrErz.massHarvest.call({from: accounts[3]});
		const uintaxxDMAU = await YieldFarmLP2hZrErz.getCurrentEpoch.call({from: accounts[3]});
		const uintCSUfyv4 = await YieldFarmLP2hZrErz.harvest.call(uintjQrKPJ, {from: accounts[3]});
		const uintKFGqXQR = await YieldFarmLP2hZrErz.getEpochStake.call(addressGyyjzSC, uintKsoHwrJ, {from: accounts[2]});

		assert.equal(uintqJqCDr, BigInt("0"))
		await expect(YieldFarmLP2hZrErz.massHarvest.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2MEYGdng = await YieldFarmLP2.new({from: accounts[3]});
		const addressG42uYon = accounts[2]
		const addressB3OQGNV = accounts[0]
		const addressFngHHne = accounts[5]
		const addressS4Pf9dq = accounts[0]
		const uintflOlaHe = BigInt("1815")
		const addressF2a6Wqo = await YieldFarmLP2MEYGdng.initialize.call(addressS4Pf9dq, addressFngHHne, addressB3OQGNV, addressG42uYon, {from: accounts[3]});
		const uintw98wtn6 = await YieldFarmLP2MEYGdng.getPoolSize.call(uintflOlaHe, {from: accounts[1]});

		await expect(YieldFarmLP2MEYGdng.initialize.call(addressS4Pf9dq, addressFngHHne, addressB3OQGNV, addressG42uYon, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2MEYGdng = await YieldFarmLP2.new({from: accounts[3]});
		const uintVJkCXdZ = BigInt("833")
		const uintuHjnW4E = BigInt("1805")
		const uintC54nOZ = BigInt("422")
		const uintEAPWEEC = BigInt("1807")
		const uintgclbKgu = await YieldFarmLP2MEYGdng.getPoolSize.call(uintVJkCXdZ, {from: accounts[0]});
		const uintZ9gmaVO = await YieldFarmLP2MEYGdng.getCurrentEpoch.call({from: accounts[4]});
		const uintjL3NB3B = await YieldFarmLP2MEYGdng.harvest.call(uintuHjnW4E, {from: accounts[1]});
		const uintmoBx5tu = await YieldFarmLP2MEYGdng.getPoolSize.call(uintC54nOZ, {from: accounts[0]});
		const uintw98wtn6 = await YieldFarmLP2MEYGdng.getPoolSize.call(uintEAPWEEC, {from: accounts[1]});

		await expect(YieldFarmLP2MEYGdng.getPoolSize.call(uintVJkCXdZ, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2baX7pc = await YieldFarmLP2.new({from: accounts[3]});
		const addressnzO6qoT = accounts[2]
		const uintYAFEjmH = BigInt("758")
		const addressrrb1MF6 = accounts[0]
		const uintP5bF4W8 = BigInt("510")
		const uintHOWzKx3 = await YieldFarmLP2baX7pc.claimable.call(addressnzO6qoT, {from: accounts[1]});
		const uintQyoXtOB = await YieldFarmLP2baX7pc.getEpochStake.call(addressrrb1MF6, uintYAFEjmH, {from: accounts[4]});
		const uintdatGxR = await YieldFarmLP2baX7pc.getPoolSize.call(uintP5bF4W8, {from: accounts[0]});
		const uintwugv6h6 = await YieldFarmLP2baX7pc.getCurrentEpoch.call({from: accounts[4]});

		await expect(YieldFarmLP2baX7pc.claimable.call(addressnzO6qoT, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2MEYGdng = await YieldFarmLP2.new({from: accounts[3]});
		const uintL3CovPK = BigInt("214")
		const addressJreyGi = accounts[2]
		const addressI027rGD = accounts[0]
		const addressbV2bvcJ = accounts[6]
		const addressU5MPfrz = accounts[0]
		const uintAldjmdb = BigInt("1815")
		const uintmg3xQSn = await YieldFarmLP2MEYGdng.harvest.call(uintL3CovPK, {from: accounts[1]});
		const uintNGh1lRe = await YieldFarmLP2MEYGdng.getCurrentEpoch.call({from: accounts[0]});
		const addressF2a6Wqo = await YieldFarmLP2MEYGdng.initialize.call(addressU5MPfrz, addressbV2bvcJ, addressI027rGD, addressJreyGi, {from: accounts[3]});
		const uintw98wtn6 = await YieldFarmLP2MEYGdng.getPoolSize.call(uintAldjmdb, {from: accounts[1]});

		await expect(YieldFarmLP2MEYGdng.harvest.call(uintL3CovPK, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})