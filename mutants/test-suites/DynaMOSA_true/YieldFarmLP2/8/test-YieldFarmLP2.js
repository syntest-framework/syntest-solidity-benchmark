const YieldFarmLP2 = artifacts.require("YieldFarmLP2");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('YieldFarmLP2', (accounts) => {
	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2ZdvtE4 = await YieldFarmLP2.new({from: accounts[4]});
		const uintFBUw1TY = BigInt("769")
		const uintGhhpmJi = BigInt("1601")
		const uintSkXreLU = BigInt("927")
//		const uintV1sLakt = await YieldFarmLP2ZdvtE4.harvest.call(uintFBUw1TY, {from: accounts[2]});
//		const uintyoKb6w7 = await YieldFarmLP2ZdvtE4.getCurrentEpoch.call({from: accounts[2]});
//		const uintXc6tuAm = await YieldFarmLP2ZdvtE4.massHarvest.call({from: accounts[0]});
//		const uintEYJh6W2 = await YieldFarmLP2ZdvtE4.getPoolSize.call(uintGhhpmJi, {from: accounts[5]});
//		const uintP7Z8RxQ = await YieldFarmLP2ZdvtE4.getPoolSize.call(uintSkXreLU, {from: accounts[3]});
//		const uintXf6u6mC = await YieldFarmLP2ZdvtE4.getCurrentEpoch.call({from: accounts[1]});

		await expect(YieldFarmLP2ZdvtE4.harvest.call(uintFBUw1TY, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2UcLj3F6 = await YieldFarmLP2.new({from: "0x0000000000000000000000000000000000000001"});
		const uintBvPIGSl = BigInt("1351")
		const uintsjznXTP = BigInt("336")
		const addressiSaIQnM = accounts[1]
		const uintuxyaDzA = BigInt("219")
		const addressEjZbbgB = accounts[5]
		const uintULdRXFp = await YieldFarmLP2UcLj3F6.harvest.call(uintBvPIGSl, {from: accounts[1]});
		const uintsw3n0ZZ = await YieldFarmLP2UcLj3F6.getEpochStake.call(addressiSaIQnM, uintsjznXTP, {from: "0x0000000000000000000000000000000000000001"});
		const uintv07bbdp = await YieldFarmLP2UcLj3F6.getEpochStake.call(addressEjZbbgB, uintuxyaDzA, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2r5xH3RS = await YieldFarmLP2.new({from: accounts[0]});
		const uintmhCl4p7 = BigInt("335")
		const uintQifmj4F = BigInt("1195")
		const uinttkL9UA = BigInt("1565")
		const addressEr3oIVp = accounts[2]
//		const uintAiBMc5N = await YieldFarmLP2r5xH3RS.getPoolSize.call(uintmhCl4p7, {from: accounts[5]});
//		const uintNaHxiWv = await YieldFarmLP2r5xH3RS.getPoolSize.call(uintQifmj4F, {from: accounts[0]});
//		const uinthYb4mz = await YieldFarmLP2r5xH3RS.getCurrentEpoch.call({from: "0x0000000000000000000000000000000000000001"});
//		const uintMGCaStD = await YieldFarmLP2r5xH3RS.harvest.call(uinttkL9UA, {from: "0x0000000000000000000000000000000000000001"});
//		const uintsWqmQK = await YieldFarmLP2r5xH3RS.claimable.call(addressEr3oIVp, {from: accounts[3]});

		await expect(YieldFarmLP2r5xH3RS.getPoolSize.call(uintmhCl4p7, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2WierUz = await YieldFarmLP2.new({from: accounts[1]});
		const addressM3yZBki = accounts[0]
		const uintXDXAq6J = BigInt("1125")
		const addressiQI6utA = accounts[3]
		const uintXHJS4o8 = BigInt("365")
		const addressh11BBOL = accounts[2]
		const addressddH90M1 = accounts[3]
		const uintfhWax3B = BigInt("1507")
		const addressK5rSVT6 = accounts[0]
//		const uintxOiP4yw = await YieldFarmLP2WierUz.claimable.call(addressM3yZBki, {from: accounts[3]});
//		const uintMG0bL9p = await YieldFarmLP2WierUz.getEpochStake.call(addressiQI6utA, uintXDXAq6J, {from: accounts[3]});
//		const uintoJBkjvq = await YieldFarmLP2WierUz.getEpochStake.call(addressh11BBOL, uintXHJS4o8, {from: accounts[4]});
//		const uintQFYRBlg = await YieldFarmLP2WierUz.claimable.call(addressddH90M1, {from: accounts[1]});
//		const uintrhxUrYF = await YieldFarmLP2WierUz.getEpochStake.call(addressK5rSVT6, uintfhWax3B, {from: accounts[1]});

		await expect(YieldFarmLP2WierUz.claimable.call(addressM3yZBki, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2JNRaK82 = await YieldFarmLP2.new({from: accounts[3]});
		const addressn3Mct4Y = accounts[2]
		const addressxgtfgci = accounts[2]
		const uintzfbv5Wd = BigInt("243")
		const addressMPHwrc = accounts[3]
//		const uintuptkDYI = await YieldFarmLP2JNRaK82.massHarvest.call({from: accounts[3]});
//		const uintqN6yjBR = await YieldFarmLP2JNRaK82.claimable.call(addressn3Mct4Y, {from: accounts[4]});
//		const uintQTzT6R = await YieldFarmLP2JNRaK82.claimable.call(addressxgtfgci, {from: accounts[2]});
//		const uinty30G7Ac = await YieldFarmLP2JNRaK82.getCurrentEpoch.call({from: "0x0000000000000000000000000000000000000001"});
//		const uintfBYYzL2 = await YieldFarmLP2JNRaK82.userLastEpochIdHarvested.call({from: accounts[1]});
//		const uintEXk7v4B = await YieldFarmLP2JNRaK82.getEpochStake.call(addressMPHwrc, uintzfbv5Wd, {from: accounts[3]});

		await expect(YieldFarmLP2JNRaK82.massHarvest.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2vilzORD = await YieldFarmLP2.new({from: accounts[1]});
		const addressLhq7G8C = accounts[4]
		const addressD1l5HkZ = accounts[2]
		const addressidJ4Wl1 = accounts[4]
		const addresswJahPRy = accounts[3]
		const addressfdRy7Ne = accounts[2]
		const uintQSa2RdH = BigInt("507")
		const addressMzJyWzI = accounts[4]
//		const addressKt72yn3 = await YieldFarmLP2vilzORD.initialize.call(addresswJahPRy, addressidJ4Wl1, addressD1l5HkZ, addressLhq7G8C, {from: accounts[1]});
//		const uintSPLqm8r = await YieldFarmLP2vilzORD.massHarvest.call({from: accounts[3]});
//		const uintgaMKVNA = await YieldFarmLP2vilzORD.massHarvest.call({from: accounts[1]});
//		const uintfSjRYzP = await YieldFarmLP2vilzORD.claimable.call(addressfdRy7Ne, {from: accounts[3]});
//		const uint0KTEw7 = await YieldFarmLP2vilzORD.getEpochStake.call(addressMzJyWzI, uintQSa2RdH, {from: accounts[1]});

		await expect(YieldFarmLP2vilzORD.initialize.call(addresswJahPRy, addressidJ4Wl1, addressD1l5HkZ, addressLhq7G8C, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2hrqLUjC = await YieldFarmLP2.new({from: accounts[1]});
		const uintHv8xiXy = BigInt("1393")
		const addressqc0Sxt = accounts[1]
		const uinto8smswP = BigInt("1534")
		const uintT7IabZ6 = BigInt("1428")
//		const uintwcVGjmP = await YieldFarmLP2hrqLUjC.getEpochStake.call(addressqc0Sxt, uintHv8xiXy, {from: accounts[4]});
//		const uint35nzW5 = await YieldFarmLP2hrqLUjC.getPoolSize.call(uinto8smswP, {from: accounts[1]});
//		const uintgQ9GBw = await YieldFarmLP2hrqLUjC.harvest.call(uintT7IabZ6, {from: accounts[3]});

		await expect(YieldFarmLP2hrqLUjC.getEpochStake.call(addressqc0Sxt, uintHv8xiXy, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2kQvo56M = await YieldFarmLP2.new({from: accounts[4]});
		const uintbgG30Qi = BigInt("506")
		const addressafXLMgf = accounts[3]
		const uintpToWXYk = BigInt("1472")
		const addressopgNZ59 = accounts[1]
//		const uintsk0gsyn = await YieldFarmLP2kQvo56M.getCurrentEpoch.call({from: accounts[3]});
//		const uintZsIASqR = await YieldFarmLP2kQvo56M.massHarvest.call({from: accounts[1]});
//		const uintA1Aog3t = await YieldFarmLP2kQvo56M.userLastEpochIdHarvested.call({from: "0x0000000000000000000000000000000000000001"});
//		const uintigLFm84 = await YieldFarmLP2kQvo56M.getEpochStake.call(addressafXLMgf, uintbgG30Qi, {from: accounts[1]});
//		const uintpV0acxZ = await YieldFarmLP2kQvo56M.getEpochStake.call(addressopgNZ59, uintpToWXYk, {from: accounts[2]});
//		const uintMDmItff = await YieldFarmLP2kQvo56M.massHarvest.call({from: accounts[3]});

		await expect(YieldFarmLP2kQvo56M.getCurrentEpoch.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2ytlHQpg = await YieldFarmLP2.new({from: accounts[2]});
		const uintJ3ZEOoT = BigInt("288")
		const uintUxUiiJ9 = await YieldFarmLP2ytlHQpg.userLastEpochIdHarvested.call({from: accounts[2]});
//		const uintSVEEwM = await YieldFarmLP2ytlHQpg.massHarvest.call({from: accounts[4]});
//		const uintlpxrErr = await YieldFarmLP2ytlHQpg.harvest.call(uintJ3ZEOoT, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uintUxUiiJ9, BigInt("0"))
		await expect(YieldFarmLP2ytlHQpg.massHarvest.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2ytlHQpg = await YieldFarmLP2.new({from: accounts[2]});
		const addressPlmYlKR = "0x00000000000000000000000000000000000000-1"
		const uintFa9GwP0 = BigInt("528")
		const addressiP5J8qY = "0x0000000000000000000000000000000000000001"
//		const uintfvRESyo = await YieldFarmLP2ytlHQpg.claimable.call(addressPlmYlKR, {from: accounts[4]});
//		const uintCCwLYPE = await YieldFarmLP2ytlHQpg.userLastEpochIdHarvested.call({from: accounts[1]});
//		const uintjfKB82M = await YieldFarmLP2ytlHQpg.getEpochStake.call(addressiP5J8qY, uintFa9GwP0, {from: accounts[5]});

		await expect(YieldFarmLP2ytlHQpg.claimable.call(addressPlmYlKR, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})