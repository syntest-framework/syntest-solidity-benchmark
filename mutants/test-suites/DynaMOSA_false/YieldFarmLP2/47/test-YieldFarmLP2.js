const YieldFarmLP2 = artifacts.require("YieldFarmLP2");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('YieldFarmLP2', (accounts) => {
	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2KwvZZ8t = await YieldFarmLP2.new({from: accounts[1]});
		const addressHgWuwuE = accounts[3]
		const addressnM7SmIs = accounts[4]
		const addressn9Rt7m = accounts[5]
		const addressdnaydx8 = accounts[1]
		const addressbKcsAZ8 = accounts[5]
		const addresssGsc1vP = accounts[3]
		const addressm1smtPt = accounts[1]
		const addressqy8AbZE = accounts[3]
//		const uintLNMo9MI = await YieldFarmLP2KwvZZ8t.claimable.call(addressHgWuwuE, {from: accounts[1]});
//		const addressmcmyTZW = await YieldFarmLP2KwvZZ8t.initialize.call(addressbKcsAZ8, addressdnaydx8, addressn9Rt7m, addressnM7SmIs, {from: accounts[3]});
//		const uintiUCMoXl = await YieldFarmLP2KwvZZ8t.claimable.call(addresssGsc1vP, {from: accounts[3]});
//		const uintQu2BXKN = await YieldFarmLP2KwvZZ8t.claimable.call(addressm1smtPt, {from: accounts[4]});
//		const uintLjpT09R = await YieldFarmLP2KwvZZ8t.claimable.call(addressqy8AbZE, {from: accounts[3]});

		await expect(YieldFarmLP2KwvZZ8t.claimable.call(addressHgWuwuE, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP28r46lM = await YieldFarmLP2.new({from: accounts[1]});
		const addressvteBil = accounts[3]
//		const uintAc0Ir8y = await YieldFarmLP28r46lM.getCurrentEpoch.call({from: accounts[0]});
//		const uinttpn0ztB = await YieldFarmLP28r46lM.massHarvest.call({from: accounts[0]});
//		const uintA1jSqJ = await YieldFarmLP28r46lM.claimable.call(addressvteBil, {from: accounts[1]});

		await expect(YieldFarmLP28r46lM.getCurrentEpoch.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2yiFSz1A = await YieldFarmLP2.new({from: accounts[2]});
		const uint1KUtmn = BigInt("1654")
//		const uintcIskjI = await YieldFarmLP2yiFSz1A.massHarvest.call({from: accounts[0]});
//		const uintDXWd070 = await YieldFarmLP2yiFSz1A.getPoolSize.call(uint1KUtmn, {from: accounts[2]});
		const uintidtC1L = await YieldFarmLP2yiFSz1A.massHarvest.call({from: accounts[0]});
//		const uintDqNbYws = await YieldFarmLP2yiFSz1A.userLastEpochIdHarvested.call({from: accounts[0]});

		await expect(YieldFarmLP2yiFSz1A.massHarvest.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2uV4fh1z = await YieldFarmLP2.new({from: accounts[2]});
		const addressc6iBFcf = accounts[4]
		const addressRmyx2bZ = "0x0000000000000000000000000000000000000001"
		const addressRzzB46r = accounts[4]
		const addressqbkDryf = accounts[1]
//		const addressXm9lCQ = await YieldFarmLP2uV4fh1z.initialize.call(addressqbkDryf, addressRzzB46r, addressRmyx2bZ, addressc6iBFcf, {from: accounts[1]});
//		const uintMgXejam = await YieldFarmLP2uV4fh1z.userLastEpochIdHarvested.call({from: accounts[1]});

		await expect(YieldFarmLP2uV4fh1z.initialize.call(addressqbkDryf, addressRzzB46r, addressRmyx2bZ, addressc6iBFcf, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2lYEkxB9 = await YieldFarmLP2.new({from: accounts[3]});
		const uint4lIlDb = BigInt("1028")
		const addresseoyZnli = accounts[0]
//		const uintsvGR1vl = await YieldFarmLP2lYEkxB9.getPoolSize.call(uint4lIlDb, {from: accounts[2]});
//		const uintoHhXJNP = await YieldFarmLP2lYEkxB9.claimable.call(addresseoyZnli, {from: accounts[0]});

		await expect(YieldFarmLP2lYEkxB9.getPoolSize.call(uint4lIlDb, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP25aOACl = await YieldFarmLP2.new({from: accounts[0]});
		const uintjH0CJKJ = BigInt("242")
		const addressgM3yWda = accounts[4]
		const uintDEOqYhD = BigInt("955")
		const addressiL0vRd8 = accounts[3]
//		const uintmD3DlEL = await YieldFarmLP25aOACl.getEpochStake.call(addressgM3yWda, uintjH0CJKJ, {from: accounts[2]});
//		const uintmFw1X5k = await YieldFarmLP25aOACl.massHarvest.call({from: accounts[3]});
//		const uinto5POVfS = await YieldFarmLP25aOACl.harvest.call(uintDEOqYhD, {from: accounts[5]});
//		const uintwVrWveH = await YieldFarmLP25aOACl.claimable.call(addressiL0vRd8, {from: "0x0000000000000000000000000000000000000001"});

		await expect(YieldFarmLP25aOACl.getEpochStake.call(addressgM3yWda, uintjH0CJKJ, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP20hHCWH = await YieldFarmLP2.new({from: accounts[2]});
		const addressPeuCEfb = accounts[3]
		const uinteYIpLZq = BigInt("523")
		const addressvadnVlq = accounts[5]
		const uintSaNX9Ha = await YieldFarmLP20hHCWH.userLastEpochIdHarvested.call({from: accounts[1]});
//		const uintRE3zf8K = await YieldFarmLP20hHCWH.claimable.call(addressPeuCEfb, {from: accounts[5]});
//		const uintb3GbLHv = await YieldFarmLP20hHCWH.getEpochStake.call(addressvadnVlq, uinteYIpLZq, {from: accounts[4]});

		assert.equal(uintSaNX9Ha, BigInt("0"))
		await expect(YieldFarmLP20hHCWH.claimable.call(addressPeuCEfb, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2GxJWGF = await YieldFarmLP2.new({from: accounts[2]});
		const uintJrvp4BG = BigInt("1892")
		const uintemwI7N = BigInt("1015")
		const addresssiRwLL = accounts[2]
		const uintqJFozWz = BigInt("1943")
//		const uintBNw1V4J = await YieldFarmLP2GxJWGF.harvest.call(uintJrvp4BG, {from: accounts[0]});
//		const uintuPAqln = await YieldFarmLP2GxJWGF.getEpochStake.call(addresssiRwLL, uintemwI7N, {from: accounts[4]});
//		const uintEgccZjz = await YieldFarmLP2GxJWGF.getPoolSize.call(uintqJFozWz, {from: accounts[3]});

		await expect(YieldFarmLP2GxJWGF.harvest.call(uintJrvp4BG, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2lt2GNOQ = await YieldFarmLP2.new({from: "0x0000000000000000000000000000000000000001"});
		const uintIu9Id09 = BigInt("1699")
		const uintScElJrQ = BigInt("1984")
		const address7dDvVj = accounts[4]
		const uintDGvf97d = await YieldFarmLP2lt2GNOQ.massHarvest.call({from: accounts[0]});
		const uinthfYtIpT = await YieldFarmLP2lt2GNOQ.getPoolSize.call(uintIu9Id09, {from: accounts[3]});
		const uintN3NsAVb = await YieldFarmLP2lt2GNOQ.getEpochStake.call(address7dDvVj, uintScElJrQ, {from: accounts[4]});
	});
})