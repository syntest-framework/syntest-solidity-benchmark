const YieldFarmLP2 = artifacts.require("YieldFarmLP2");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('YieldFarmLP2', (accounts) => {
	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2Xp2fHm = await YieldFarmLP2.new({from: accounts[3]});
		const uintjTypuu0 = BigInt("580")
		const addressNdnUdn = accounts[0]
		const uintQeVWwGv = BigInt("751")
		const uintawmQfKH = await YieldFarmLP2Xp2fHm.getEpochStake.call(addressNdnUdn, uintjTypuu0, {from: accounts[1]});
		const uintObpJFUQ = await YieldFarmLP2Xp2fHm.harvest.call(uintQeVWwGv, {from: accounts[0]});
		const uintvLmj0t7 = await YieldFarmLP2Xp2fHm.getCurrentEpoch.call({from: accounts[1]});

		await expect(YieldFarmLP2Xp2fHm.getEpochStake.call(addressNdnUdn, uintjTypuu0, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2ajPSmVn = await YieldFarmLP2.new({from: accounts[3]});
		const addressKj3NCQe = accounts[1]
		const uintccsMQp = await YieldFarmLP2ajPSmVn.massHarvest.call({from: accounts[2]});
		const uinttw0yZOM = await YieldFarmLP2ajPSmVn.massHarvest.call({from: accounts[2]});
		const uintV5wv2CS = await YieldFarmLP2ajPSmVn.claimable.call(addressKj3NCQe, {from: accounts[3]});

		await expect(YieldFarmLP2ajPSmVn.massHarvest.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2e9N5FGr = await YieldFarmLP2.new({from: accounts[0]});
		const addressmFo8QII = accounts[4]
		const addressHD2ysYb = accounts[3]
		const addressygAC14J = "0x0000000000000000000000000000000000000001"
		const addressTgIf7U6 = accounts[3]
		const addressBQXtXdS = accounts[3]
		const uintkss7OEa = await YieldFarmLP2e9N5FGr.claimable.call(addressmFo8QII, {from: accounts[1]});
		const addressKCsRwY = await YieldFarmLP2e9N5FGr.initialize.call(addressBQXtXdS, addressTgIf7U6, addressygAC14J, addressHD2ysYb, {from: "0x0000000000000000000000000000000000000001"});

		await expect(YieldFarmLP2e9N5FGr.claimable.call(addressmFo8QII, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2IbANgHF = await YieldFarmLP2.new({from: accounts[1]});
		const uintk8xCVCI = BigInt("1002")
		const addressYVRstTj = accounts[4]
		const uintCcEESfl = BigInt("1095")
		const uintVmaXA2G = BigInt("901")
		const addressPo2Frjd = accounts[4]
		const addresspMPkqT7 = accounts[5]
		const uintRacFQsQ = await YieldFarmLP2IbANgHF.getCurrentEpoch.call({from: accounts[4]});
		const uintRw3ymps = await YieldFarmLP2IbANgHF.getEpochStake.call(addressYVRstTj, uintk8xCVCI, {from: accounts[4]});
		const uintn1D6nx9 = await YieldFarmLP2IbANgHF.harvest.call(uintCcEESfl, {from: accounts[2]});
		const uintoTzVb1h = await YieldFarmLP2IbANgHF.userLastEpochIdHarvested.call({from: accounts[2]});
		const uintu1uoOJl = await YieldFarmLP2IbANgHF.getEpochStake.call(addressPo2Frjd, uintVmaXA2G, {from: accounts[3]});
		const uintyBZTf8I = await YieldFarmLP2IbANgHF.claimable.call(addresspMPkqT7, {from: accounts[1]});

		await expect(YieldFarmLP2IbANgHF.getCurrentEpoch.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2mEcLen = await YieldFarmLP2.new({from: accounts[4]});
		const addressNkInKYL = accounts[3]
		const uintV791qa7 = BigInt("414")
		const uinto1Pespd = BigInt("106")
		const uintOhfyvpn = BigInt("1489")
		const addressGIbvQPr = accounts[3]
		const uintdIdVYA = await YieldFarmLP2mEcLen.userLastEpochIdHarvested.call({from: accounts[1]});
		const uintpKinarx = await YieldFarmLP2mEcLen.claimable.call(addressNkInKYL, {from: accounts[1]});
		const uintRI3LxAg = await YieldFarmLP2mEcLen.harvest.call(uintV791qa7, {from: accounts[1]});
		const uintZ1qiwWN = await YieldFarmLP2mEcLen.userLastEpochIdHarvested.call({from: accounts[2]});
		const uintASLwbZP = await YieldFarmLP2mEcLen.harvest.call(uinto1Pespd, {from: accounts[3]});
		const uintKO4D9h7 = await YieldFarmLP2mEcLen.getEpochStake.call(addressGIbvQPr, uintOhfyvpn, {from: accounts[1]});

		assert.equal(uintdIdVYA, BigInt("0"))
		await expect(YieldFarmLP2mEcLen.claimable.call(addressNkInKYL, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2U0T1ewI = await YieldFarmLP2.new({from: accounts[0]});
		const uintU0DWCb = BigInt("1412")
		const uintp7RIkpL = BigInt("55")
		const uint0HjgG4 = await YieldFarmLP2U0T1ewI.getPoolSize.call(uintU0DWCb, {from: accounts[1]});
		const uintuLG0P20 = await YieldFarmLP2U0T1ewI.massHarvest.call({from: accounts[3]});
		const uintbZv74g3 = await YieldFarmLP2U0T1ewI.getPoolSize.call(uintp7RIkpL, {from: accounts[0]});

		await expect(YieldFarmLP2U0T1ewI.getPoolSize.call(uintU0DWCb, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2tIF9omB = await YieldFarmLP2.new({from: accounts[3]});
		const uintbl0lLli = BigInt("451")
		const uintQFpsoyk = BigInt("1953")
		const uintjzKSh5v = await YieldFarmLP2tIF9omB.harvest.call(uintbl0lLli, {from: accounts[1]});
		const uintGmBRLjO = await YieldFarmLP2tIF9omB.harvest.call(uintQFpsoyk, {from: "0x0000000000000000000000000000000000000001"});
		const uintcbvSgWf = await YieldFarmLP2tIF9omB.massHarvest.call({from: accounts[2]});

		await expect(YieldFarmLP2tIF9omB.harvest.call(uintbl0lLli, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2e9N5FGr = await YieldFarmLP2.new({from: accounts[0]});
		const addressGt1ZBQ = "0x0000000000000000000000000000000000000001"
		const addresse1iGYSF = accounts[2]
		const addressWkwk6p = accounts[3]
		const addressI9Ol9Dk = accounts[5]
		const addressXcHbK8A = accounts[4]
		const addressUeGu4GD = accounts[3]
		const addressYyuu8ek = "0x0000000000000000000000000000000000000001"
		const addressH2S7pu = accounts[3]
		const addressD7Xdct = accounts[4]
		const addressdnQUEL = await YieldFarmLP2e9N5FGr.initialize.call(addressI9Ol9Dk, addressWkwk6p, addresse1iGYSF, addressGt1ZBQ, {from: "0x0000000000000000000000000000000000000001"});
		const uintkss7OEa = await YieldFarmLP2e9N5FGr.claimable.call(addressXcHbK8A, {from: accounts[1]});
		const addressKCsRwY = await YieldFarmLP2e9N5FGr.initialize.call(addressD7Xdct, addressH2S7pu, addressYyuu8ek, addressUeGu4GD, {from: "0x0000000000000000000000000000000000000001"});

		await expect(YieldFarmLP2e9N5FGr.initialize.call(addressI9Ol9Dk, addressWkwk6p, addresse1iGYSF, addressGt1ZBQ, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2r4GxnAT = await YieldFarmLP2.new({from: "0x0000000000000000000000000000000000000001"});
		const uintBok8Cyl = BigInt("1930")
		const uintPABy4WI = BigInt("1882")
		const uintPn4QhzM = await YieldFarmLP2r4GxnAT.getPoolSize.call(uintBok8Cyl, {from: accounts[3]});
		const uintmi3nwYF = await YieldFarmLP2r4GxnAT.getCurrentEpoch.call({from: "0x0000000000000000000000000000000000000001"});
		const uintvf1stpO = await YieldFarmLP2r4GxnAT.getPoolSize.call(uintPABy4WI, {from: accounts[4]});
	});
})