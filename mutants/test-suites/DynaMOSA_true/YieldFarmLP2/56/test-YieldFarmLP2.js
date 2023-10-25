const YieldFarmLP2 = artifacts.require("YieldFarmLP2");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('YieldFarmLP2', (accounts) => {
	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2Pd1O3sB = await YieldFarmLP2.new({from: "0x0000000000000000000000000000000000000001"});
		const uintfPNMIw = BigInt("780")
		const uintY78Hy5X = BigInt("1021")
		const addressLg3a8vl = accounts[1]
		const uintEr50eqh = BigInt("463")
		const uintFqVgYl4 = await YieldFarmLP2Pd1O3sB.getPoolSize.call(uintfPNMIw, {from: accounts[2]});
		const uintL2o4cc = await YieldFarmLP2Pd1O3sB.harvest.call(uintY78Hy5X, {from: accounts[5]});
		const uintORuJOZi = await YieldFarmLP2Pd1O3sB.claimable.call(addressLg3a8vl, {from: accounts[2]});
		const uinthX7NLhH = await YieldFarmLP2Pd1O3sB.harvest.call(uintEr50eqh, {from: accounts[3]});
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2HgW4sHx = await YieldFarmLP2.new({from: accounts[4]});
		const addressdesPLnC = accounts[4]
		const address0tqWN4 = accounts[3]
		const addressq766yst = accounts[3]
		const addressPmkBvCJ = accounts[0]
		const uintE2QVqVK = BigInt("2036")
//		const uintDgDzh57 = await YieldFarmLP2HgW4sHx.massHarvest.call({from: accounts[3]});
//		const addressOc4zsnA = await YieldFarmLP2HgW4sHx.initialize.call(addressPmkBvCJ, addressq766yst, address0tqWN4, addressdesPLnC, {from: accounts[2]});
//		const uintIwi6ZUY = await YieldFarmLP2HgW4sHx.harvest.call(uintE2QVqVK, {from: accounts[5]});

		await expect(YieldFarmLP2HgW4sHx.massHarvest.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2UA7Ltns = await YieldFarmLP2.new({from: accounts[0]});
		const uintryU1yiw = BigInt("1783")
		const addresskD84VWq = accounts[2]
		const addresslj7aggX = accounts[3]
		const uintUfgj2JU = BigInt("58")
//		const uintGiXRaPs = await YieldFarmLP2UA7Ltns.getEpochStake.call(addresskD84VWq, uintryU1yiw, {from: accounts[3]});
//		const uintDYve4vu = await YieldFarmLP2UA7Ltns.claimable.call(addresslj7aggX, {from: accounts[2]});
//		const uintjKKhVDq = await YieldFarmLP2UA7Ltns.harvest.call(uintUfgj2JU, {from: "0x0000000000000000000000000000000000000001"});

		await expect(YieldFarmLP2UA7Ltns.getEpochStake.call(addresskD84VWq, uintryU1yiw, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2cHGMfuk = await YieldFarmLP2.new({from: accounts[4]});
		const addressbPFOQ1J = accounts[5]
		const addressVr5dCuw = accounts[2]
		const addressk1a6aBx = accounts[3]
		const addressP9R3j1P = accounts[4]
		const uintcjiivrM = BigInt("685")
		const addressjTfwhrR = accounts[4]
//		const uintWppU1bx = await YieldFarmLP2cHGMfuk.getCurrentEpoch.call({from: accounts[2]});
//		const addressKjCG2U9 = await YieldFarmLP2cHGMfuk.initialize.call(addressP9R3j1P, addressk1a6aBx, addressVr5dCuw, addressbPFOQ1J, {from: "0x0000000000000000000000000000000000000001"});
//		const uintcRqBF7 = await YieldFarmLP2cHGMfuk.getPoolSize.call(uintcjiivrM, {from: accounts[5]});
//		const uintJqPzKBU = await YieldFarmLP2cHGMfuk.getCurrentEpoch.call({from: accounts[4]});
//		const uintYK1LR4l = await YieldFarmLP2cHGMfuk.claimable.call(addressjTfwhrR, {from: accounts[2]});

		await expect(YieldFarmLP2cHGMfuk.getCurrentEpoch.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2vdOx1b = await YieldFarmLP2.new({from: accounts[2]});
		const uintumVYDmQ = await YieldFarmLP2vdOx1b.userLastEpochIdHarvested.call({from: "0x0000000000000000000000000000000000000001"});
//		const uintJ1uJnU6 = await YieldFarmLP2vdOx1b.massHarvest.call({from: accounts[3]});

		assert.equal(uintumVYDmQ, BigInt("0"))
		await expect(YieldFarmLP2vdOx1b.massHarvest.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2eiGuhez = await YieldFarmLP2.new({from: accounts[4]});
		const addressg7FsJOj = "0x0000000000000000000000000000000000000001"
		const addressQW2Vb5G = accounts[0]
		const addressJEuxxhN = accounts[0]
		const addressr56WDDq = accounts[1]
		const uintwZYiUQu = BigInt("1742")
		const addressWcyK4su = accounts[2]
		const uintT84E2Ws = BigInt("322")
		const addressgT7atvy = accounts[2]
		const addresseU6PYzL = accounts[4]
//		const addressYerqxSS = await YieldFarmLP2eiGuhez.initialize.call(addressr56WDDq, addressJEuxxhN, addressQW2Vb5G, addressg7FsJOj, {from: accounts[3]});
//		const uintxdMwDtz = await YieldFarmLP2eiGuhez.getCurrentEpoch.call({from: accounts[0]});
//		const uintCsyX7Je = await YieldFarmLP2eiGuhez.harvest.call(uintwZYiUQu, {from: accounts[1]});
//		const uintJXU0vkA = await YieldFarmLP2eiGuhez.claimable.call(addressWcyK4su, {from: accounts[3]});
//		const uintX3qbUMB = await YieldFarmLP2eiGuhez.getEpochStake.call(addressgT7atvy, uintT84E2Ws, {from: accounts[0]});
//		const uintleX0tg = await YieldFarmLP2eiGuhez.claimable.call(addresseU6PYzL, {from: accounts[1]});

		await expect(YieldFarmLP2eiGuhez.initialize.call(addressr56WDDq, addressJEuxxhN, addressQW2Vb5G, addressg7FsJOj, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2JKzyi6U = await YieldFarmLP2.new({from: accounts[1]});
		const uintj4l0N3P = BigInt("641")
		const uintXigx0zN = BigInt("1932")
		const addressMz7awe3 = accounts[1]
//		const uintQR4AzYO = await YieldFarmLP2JKzyi6U.getPoolSize.call(uintj4l0N3P, {from: accounts[3]});
//		const uintrdT9f8 = await YieldFarmLP2JKzyi6U.massHarvest.call({from: accounts[3]});
//		const uintMwDWr0 = await YieldFarmLP2JKzyi6U.getEpochStake.call(addressMz7awe3, uintXigx0zN, {from: accounts[2]});

		await expect(YieldFarmLP2JKzyi6U.getPoolSize.call(uintj4l0N3P, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2HgW4sHx = await YieldFarmLP2.new({from: accounts[4]});
		const uintnJlcBj8 = BigInt("2056")
//		const uintIwi6ZUY = await YieldFarmLP2HgW4sHx.harvest.call(uintnJlcBj8, {from: accounts[5]});

		await expect(YieldFarmLP2HgW4sHx.harvest.call(uintnJlcBj8, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for YieldFarmLP2', async () => {
		const YieldFarmLP2HgW4sHx = await YieldFarmLP2.new({from: accounts[4]});
		const addressiXThZqW = "0x0000000000000000000000000000000000000001"
		const uintAmgFzQf = BigInt("864")
		const addressxrt5m4g = "0x0000000000000000000000000000000000000001"
		const uintnnRjERL = BigInt("2056")
		const addresspOVBSbn = accounts[2]
		const addressIxOIfQj = accounts[1]
		const addressv8lH1gm = accounts[1]
		const addressRbu4x5l = accounts[5]
//		const uintGE08nVD = await YieldFarmLP2HgW4sHx.claimable.call(addressiXThZqW, {from: accounts[0]});
//		const uintFjkowfA = await YieldFarmLP2HgW4sHx.getEpochStake.call(addressxrt5m4g, uintAmgFzQf, {from: accounts[1]});
//		const uintIwi6ZUY = await YieldFarmLP2HgW4sHx.harvest.call(uintnnRjERL, {from: accounts[5]});
//		const addressZHWETQg = await YieldFarmLP2HgW4sHx.initialize.call(addressRbu4x5l, addressv8lH1gm, addressIxOIfQj, addresspOVBSbn, {from: accounts[3]});

		await expect(YieldFarmLP2HgW4sHx.claimable.call(addressiXThZqW, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})