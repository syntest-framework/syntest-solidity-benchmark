const YieldFarmLP2 = artifacts.require("YieldFarmLP2");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('YieldFarmLP2', (accounts) => {
	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2DdfKKc = await YieldFarmLP2.new({from: accounts[2]});
		const addressfnkLoZ7 = accounts[4]
		const uintr0ouOb = BigInt("1210")
		const addresscMeeDCl = accounts[0]
		const addressnS2hF6B = accounts[0]
		const uintJK1q5jH = BigInt("836")
		const uinthPzvheN = await YieldFarmLP2DdfKKc.claimable.call(addressfnkLoZ7, {from: accounts[5]});
		const uintevECtod = await YieldFarmLP2DdfKKc.getEpochStake.call(addresscMeeDCl, uintr0ouOb, {from: accounts[0]});
		const uintBlfDx7A = await YieldFarmLP2DdfKKc.claimable.call(addressnS2hF6B, {from: accounts[4]});
		const uintCW2v5Dh = await YieldFarmLP2DdfKKc.getPoolSize.call(uintJK1q5jH, {from: accounts[3]});

		await expect(YieldFarmLP2DdfKKc.claimable.call(addressfnkLoZ7, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2aHSUVp = await YieldFarmLP2.new({from: "0x0000000000000000000000000000000000000001"});
		const uintYyCmNJ = BigInt("1374")
		const addressdSalWbq = accounts[0]
		const uintKQPXyKo = BigInt("759")
		const uintAVkZSSH = await YieldFarmLP2aHSUVp.getPoolSize.call(uintYyCmNJ, {from: accounts[4]});
		const uintpFSNxpw = await YieldFarmLP2aHSUVp.massHarvest.call({from: accounts[3]});
		const uint2fRttk = await YieldFarmLP2aHSUVp.claimable.call(addressdSalWbq, {from: accounts[3]});
		const uintOMotRUl = await YieldFarmLP2aHSUVp.harvest.call(uintKQPXyKo, {from: accounts[0]});
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2qGqUWZx = await YieldFarmLP2.new({from: accounts[1]});
		const addressKNGE7Lj = accounts[1]
		const addressJIjAs96 = accounts[3]
		const addressQEGMRaw = accounts[0]
		const addresszgBFL2B = accounts[4]
		const addressMZ8jaU = accounts[1]
		const uinteCygGIN = BigInt("1899")
		const uintlBlEbm = await YieldFarmLP2qGqUWZx.massHarvest.call({from: accounts[1]});
		const addressuyXK0pB = await YieldFarmLP2qGqUWZx.initialize.call(addresszgBFL2B, addressQEGMRaw, addressJIjAs96, addressKNGE7Lj, {from: accounts[1]});
		const uintRrlJ79f = await YieldFarmLP2qGqUWZx.claimable.call(addressMZ8jaU, {from: accounts[1]});
		const uintiQEzKOE = await YieldFarmLP2qGqUWZx.getCurrentEpoch.call({from: accounts[0]});
		const uintLnIneU = await YieldFarmLP2qGqUWZx.harvest.call(uinteCygGIN, {from: accounts[0]});

		await expect(YieldFarmLP2qGqUWZx.massHarvest.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2GGaSuK1 = await YieldFarmLP2.new({from: accounts[4]});
		const uintBtUFoNK = BigInt("692")
		const addressRAIlYUT = accounts[4]
		const addressYhnpvYD = accounts[2]
		const uintMjFtbWb = BigInt("1589")
		const addressCmPlt6C = accounts[4]
		const uintt8eOAh = BigInt("1023")
		const addressdb2b6s1 = accounts[2]
		const uintsVWBRI = await YieldFarmLP2GGaSuK1.getEpochStake.call(addressRAIlYUT, uintBtUFoNK, {from: accounts[0]});
		const uintZGiARLU = await YieldFarmLP2GGaSuK1.claimable.call(addressYhnpvYD, {from: accounts[1]});
		const uintNeQ9GKE = await YieldFarmLP2GGaSuK1.harvest.call(uintMjFtbWb, {from: accounts[0]});
		const uintlb5r2Xj = await YieldFarmLP2GGaSuK1.claimable.call(addressCmPlt6C, {from: accounts[3]});
		const uintfZg8y0F = await YieldFarmLP2GGaSuK1.getEpochStake.call(addressdb2b6s1, uintt8eOAh, {from: accounts[0]});

		await expect(YieldFarmLP2GGaSuK1.getEpochStake.call(addressRAIlYUT, uintBtUFoNK, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2QwkcMg7 = await YieldFarmLP2.new({from: accounts[3]});
		const uintDvxeWuR = BigInt("1562")
		const uintFB0MTno = BigInt("1194")
		const uintQguYKBg = await YieldFarmLP2QwkcMg7.harvest.call(uintDvxeWuR, {from: accounts[3]});
		const uintqRJi1F = await YieldFarmLP2QwkcMg7.getCurrentEpoch.call({from: accounts[0]});
		const uintlQrJk4f = await YieldFarmLP2QwkcMg7.getCurrentEpoch.call({from: accounts[0]});
		const uintbbuKklz = await YieldFarmLP2QwkcMg7.massHarvest.call({from: accounts[0]});
		const uintG1oBMVy = await YieldFarmLP2QwkcMg7.harvest.call(uintFB0MTno, {from: accounts[4]});

		await expect(YieldFarmLP2QwkcMg7.harvest.call(uintDvxeWuR, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2skIi9wd = await YieldFarmLP2.new({from: accounts[2]});
		const uintBSPLoRD = BigInt("1789")
		const uint2e2zSm = await YieldFarmLP2skIi9wd.getPoolSize.call(uintBSPLoRD, {from: accounts[4]});
		const uintOrJOwG = await YieldFarmLP2skIi9wd.massHarvest.call({from: accounts[2]});
		const uintBnX5oF = await YieldFarmLP2skIi9wd.getCurrentEpoch.call({from: accounts[3]});

		await expect(YieldFarmLP2skIi9wd.getPoolSize.call(uintBSPLoRD, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2usf4X6R = await YieldFarmLP2.new({from: accounts[1]});
		const addressJjNwgBH = accounts[1]
		const uintuicBvU5 = BigInt("602")
		const uintojBwZ0x = await YieldFarmLP2usf4X6R.getCurrentEpoch.call({from: accounts[4]});
		const uintokj8aaZ = await YieldFarmLP2usf4X6R.claimable.call(addressJjNwgBH, {from: accounts[2]});
		const uintjS78t3G = await YieldFarmLP2usf4X6R.massHarvest.call({from: accounts[4]});
		const uintEWPMrN = await YieldFarmLP2usf4X6R.getPoolSize.call(uintuicBvU5, {from: accounts[2]});
		const uintyYm2H9 = await YieldFarmLP2usf4X6R.userLastEpochIdHarvested.call({from: accounts[3]});

		await expect(YieldFarmLP2usf4X6R.getCurrentEpoch.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2M4ESvUg = await YieldFarmLP2.new({from: accounts[5]});
		const uint75gdm4 = BigInt("788")
		const uintjv6E3of = await YieldFarmLP2M4ESvUg.userLastEpochIdHarvested.call({from: accounts[0]});
		const uintGUl496O = await YieldFarmLP2M4ESvUg.getPoolSize.call(uint75gdm4, {from: accounts[5]});

		assert.equal(uintjv6E3of, BigInt("0"))
		await expect(YieldFarmLP2M4ESvUg.getPoolSize.call(uint75gdm4, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2M4ESvUg = await YieldFarmLP2.new({from: accounts[5]});
		const addresstAtISJC = accounts[0]
		const addressKSzi48 = accounts[2]
		const addressdCXwxht = accounts[1]
		const addressqu1FCi = accounts[0]
		const uintPGC1LCT = BigInt("112")
		const uintbhStfkU = BigInt("777")
		const addressTdoiRMv = accounts[4]
		const addressw0islZK = accounts[1]
		const addresse9uIvAl = accounts[1]
		const addresslitGM1r = accounts[3]
		const uintwtCEMuo = BigInt("1857")
		const addressTADcXT5 = accounts[3]
		const addressMOTMcZh = await YieldFarmLP2M4ESvUg.initialize.call(addressqu1FCi, addressdCXwxht, addressKSzi48, addresstAtISJC, {from: accounts[3]});
		const uintka8U0Lx = await YieldFarmLP2M4ESvUg.harvest.call(uintPGC1LCT, {from: accounts[1]});
		const uintGUl496O = await YieldFarmLP2M4ESvUg.getPoolSize.call(uintbhStfkU, {from: accounts[5]});
		const addressFbQgr2h = await YieldFarmLP2M4ESvUg.initialize.call(addresslitGM1r, addresse9uIvAl, addressw0islZK, addressTdoiRMv, {from: accounts[1]});
		const uintQ5EgGp1 = await YieldFarmLP2M4ESvUg.getEpochStake.call(addressTADcXT5, uintwtCEMuo, {from: "0x0000000000000000000000000000000000000001"});
		const uintx8uJ7RQ = await YieldFarmLP2M4ESvUg.massHarvest.call({from: accounts[2]});

		await expect(YieldFarmLP2M4ESvUg.initialize.call(addressqu1FCi, addressdCXwxht, addressKSzi48, addresstAtISJC, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})