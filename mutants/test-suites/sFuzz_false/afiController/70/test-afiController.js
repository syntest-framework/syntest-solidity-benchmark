const afiController = artifacts.require("afiController");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('afiController', (accounts) => {
	it('test for afiController', async () => {
		const addressSfCMmp = accounts[3]
		const afiControllerYctdGJl = await afiController.new(addressSfCMmp, {from: accounts[1]});
		const addressQlDtwO = accounts[1]
		const addressP3OMOts = accounts[3]
		const addressEJVbTU4 = accounts[1]
		const addressYUd4w6w = accounts[2]
		const uinta482PGF = BigInt("1231")
		const addressiYfRgjC = accounts[3]
		const addressYQigYsS = accounts[2]
		const addressMy9lxH6 = "0x0000000000000000000000000000000000000001"
//		const addressThTsI52 = await afiControllerYctdGJl.revokeStrategy.call(addressP3OMOts, addressQlDtwO, {from: accounts[5]});
//		const addressca9Ztjp = await afiControllerYctdGJl.revokeStrategy.call(addressYUd4w6w, addressEJVbTU4, {from: "0x0000000000000000000000000000000000000001"});
//		const addressj9rxWZw = await afiControllerYctdGJl.withdraw.call(addressiYfRgjC, uinta482PGF, {from: accounts[0]});
//		const addressl7abgBg = await afiControllerYctdGJl.revokeStrategy.call(addressMy9lxH6, addressYQigYsS, {from: accounts[4]});

		await expect(afiControllerYctdGJl.revokeStrategy.call(addressP3OMOts, addressQlDtwO, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressggPWwP = accounts[2]
		const afiControllercXcF6C9 = await afiController.new(addressggPWwP, {from: accounts[2]});
		const uintHfQLlD = BigInt("1369")
		const addresss439j4N = accounts[1]
		const addressmPMsQdb = accounts[2]
		const uintz1Ea2aJ = BigInt("1502")
		const addressVGUHiWN = accounts[2]
		const addresssiIo5EJ = accounts[5]
		const addressaLlqjSN = accounts[4]
		const addressPzdR60d = accounts[1]
		const addressk2FNBCH = accounts[2]
//		const addressdbZc3yU = await afiControllercXcF6C9.earn.call(addresss439j4N, uintHfQLlD, {from: accounts[3]});
//		const addressiWlzc9l = await afiControllercXcF6C9.setStrategist.call(addressmPMsQdb, {from: accounts[0]});
//		const address4O4HvF = await afiControllercXcF6C9.yearn.call(addresssiIo5EJ, addressVGUHiWN, uintz1Ea2aJ, {from: accounts[4]});
//		const addressl9vI68 = await afiControllercXcF6C9.setGovernance.call(addressaLlqjSN, {from: accounts[2]});
//		const addresskTjQbRy = await afiControllercXcF6C9.revokeStrategy.call(addressk2FNBCH, addressPzdR60d, {from: accounts[0]});

		await expect(afiControllercXcF6C9.earn.call(addresss439j4N, uintHfQLlD, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressD0QMRzW = accounts[3]
		const afiControllerDu40DLY = await afiController.new(addressD0QMRzW, {from: accounts[5]});
		const uinteqaAhqy = BigInt("1246")
		const uintxW0gqsr = BigInt("1725")
		const addressdbBuTVm = accounts[1]
		const addressZTrUMxj = accounts[1]
		const addressSKTqzgs = accounts[3]
		const addressetLd6V6 = accounts[3]
		const addressU2gZD8e = accounts[3]
		const addressuyj5W7 = accounts[4]
		const addressxFc84rO = accounts[2]
		const uintC3mAABQ = BigInt("1039")
		const addresshI6hx7z = "0x0000000000000000000000000000000000000001"
		const addressuvf0guF = accounts[4]
//		const uintWY9RU28 = await afiControllerDu40DLY.setSplit.call(uinteqaAhqy, {from: accounts[2]});
//		const addressNknx1DW = await afiControllerDu40DLY.yearn.call(addressZTrUMxj, addressdbBuTVm, uintxW0gqsr, {from: accounts[2]});
//		const addressCfJrJZE = await afiControllerDu40DLY.setVault.call(addressetLd6V6, addressSKTqzgs, {from: "0x0000000000000000000000000000000000000001"});
//		const addressp8RL3ZW = await afiControllerDu40DLY.setConverter.call(addressxFc84rO, addressuyj5W7, addressU2gZD8e, {from: accounts[2]});
//		const addressiNw0nCE = await afiControllerDu40DLY.earn.call(addresshI6hx7z, uintC3mAABQ, {from: accounts[4]});
//		const addressVlWpDPe = await afiControllerDu40DLY.setRewards.call(addressuvf0guF, {from: accounts[5]});

		await expect(afiControllerDu40DLY.setSplit.call(uinteqaAhqy, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addresse1Z39gO = accounts[1]
		const afiControllerek1guez = await afiController.new(addresse1Z39gO, {from: accounts[2]});
		const addressealG3SP = accounts[0]
		const addressRqZHJYH = accounts[0]
		const addressjNAX2KZ = accounts[5]
		const addressU0jtihS = accounts[0]
		const addresssAWntQt = accounts[5]
//		const uintJeSkhqw = await afiControllerek1guez.balanceOf.call(addressealG3SP, {from: accounts[3]});
//		const uintKCT0uop = await afiControllerek1guez.balanceOf.call(addressRqZHJYH, {from: accounts[1]});
//		const addressm5DcII2 = await afiControllerek1guez.withdrawAll.call(addressjNAX2KZ, {from: accounts[2]});
//		const addressCvmzSe = await afiControllerek1guez.setGovernance.call(addressU0jtihS, {from: accounts[3]});
//		const addresse8ovG6 = await afiControllerek1guez.setGovernance.call(addresssAWntQt, {from: accounts[2]});

		await expect(afiControllerek1guez.balanceOf.call(addressealG3SP, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addresstvEI863 = accounts[2]
		const afiControllerKQJsGpg = await afiController.new(addresstvEI863, {from: accounts[0]});
		const addressjrCj9f5 = accounts[2]
		const uintPr1ZySN = BigInt("520")
		const addressVkbUpvl = accounts[0]
//		const addressGgxxFs2 = await afiControllerKQJsGpg.setGovernance.call(addressjrCj9f5, {from: accounts[1]});
//		const addressoMXf6z7 = await afiControllerKQJsGpg.withdraw.call(addressVkbUpvl, uintPr1ZySN, {from: "0x0000000000000000000000000000000000000001"});

		await expect(afiControllerKQJsGpg.setGovernance.call(addressjrCj9f5, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressUb2HZaU = accounts[4]
		const afiControllerGzxZRhF = await afiController.new(addressUb2HZaU, {from: accounts[0]});
		const uintkTDbJdD = BigInt("737")
		const addressiS8ODDI = accounts[2]
		const addressXp5tsnt = accounts[1]
		const addressZe0C21M = accounts[2]
		const addressuHOazp1 = accounts[1]
//		const addressGIaD9T = await afiControllerGzxZRhF.inCaseTokensGetStuck.call(addressiS8ODDI, uintkTDbJdD, {from: accounts[1]});
//		const address19DmH6 = await afiControllerGzxZRhF.setStrategy.call(addressZe0C21M, addressXp5tsnt, {from: accounts[1]});
//		const addressc4b8Qly = await afiControllerGzxZRhF.setGovernance.call(addressuHOazp1, {from: accounts[3]});

		await expect(afiControllerGzxZRhF.inCaseTokensGetStuck.call(addressiS8ODDI, uintkTDbJdD, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressuQiauiD = accounts[0]
		const afiControllery4a6smi = await afiController.new(addressuQiauiD, {from: accounts[2]});
		const addressil2ETY8 = accounts[3]
		const addressrJWtazo = accounts[3]
		const uintvqfaLSV = BigInt("567")
		const addressjv4IU0h = accounts[3]
		const addressUZEKcW8 = accounts[4]
//		const addressVAKPyTi = await afiControllery4a6smi.setStrategy.call(addressrJWtazo, addressil2ETY8, {from: accounts[1]});
//		const addressXCpKJSt = await afiControllery4a6smi.yearn.call(addressUZEKcW8, addressjv4IU0h, uintvqfaLSV, {from: accounts[4]});

		await expect(afiControllery4a6smi.setStrategy.call(addressrJWtazo, addressil2ETY8, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addresssjJ1eqh = accounts[2]
		const afiControllerKQJsGpg = await afiController.new(addresssjJ1eqh, {from: accounts[0]});
		const uinto2WroLM = BigInt("520")
		const addresscUOdQkm = accounts[0]
//		const addressoMXf6z7 = await afiControllerKQJsGpg.withdraw.call(addresscUOdQkm, uinto2WroLM, {from: "0x0000000000000000000000000000000000000001"});

		await expect(afiControllerKQJsGpg.withdraw.call(addresscUOdQkm, uinto2WroLM, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressDNOoBGl = accounts[2]
		const afiControllerjp4gKP0 = await afiController.new(addressDNOoBGl, {from: "0x0000000000000000000000000000000000000001"});
		const uintqBmWWzw = BigInt("1608")
		const addressBxOzub9 = accounts[5]
		const addresskiHRSeY = accounts[2]
		const addressbo2Pm9q = "0x0000000000000000000000000000000000000001"
		const addressNcblWMk = accounts[2]
		const addressYvwgPF = accounts[4]
		const addressIfWLP8E = accounts[3]
		const addressEFCEJuo = accounts[1]
		const addressNktCPkj = accounts[1]
		const addressZ1aT8e6 = await afiControllerjp4gKP0.yearn.call(addresskiHRSeY, addressBxOzub9, uintqBmWWzw, {from: accounts[3]});
		const addresssZodqGo = await afiControllerjp4gKP0.approveStrategy.call(addressNcblWMk, addressbo2Pm9q, {from: accounts[1]});
		const addressyKWT3xB = await afiControllerjp4gKP0.revokeStrategy.call(addressIfWLP8E, addressYvwgPF, {from: accounts[0]});
		const addressqMK3vT = await afiControllerjp4gKP0.setVault.call(addressNktCPkj, addressEFCEJuo, {from: accounts[2]});
	});

	it('test for afiController', async () => {
		const addressikbNISQ = accounts[2]
		const afiControllerKQJsGpg = await afiController.new(addressikbNISQ, {from: accounts[0]});
		const addressfEV8k5q = accounts[0]
		const addressAM2OQ9Z = accounts[0]
		const uintO8u1zUM = BigInt("500")
		const addressr8HzIxc = accounts[2]
		const addressOd4GceA = accounts[1]
//		const addressEm7lx13 = await afiControllerKQJsGpg.approveStrategy.call(addressAM2OQ9Z, addressfEV8k5q, {from: accounts[2]});
//		const addressoMXf6z7 = await afiControllerKQJsGpg.withdraw.call(addressr8HzIxc, uintO8u1zUM, {from: "0x0000000000000000000000000000000000000001"});
//		const uintdzgIOph = await afiControllerKQJsGpg.balanceOf.call(addressOd4GceA, {from: accounts[4]});

		await expect(afiControllerKQJsGpg.approveStrategy.call(addressAM2OQ9Z, addressfEV8k5q, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addresszWXE1CH = accounts[2]
		const afiControllerKQJsGpg = await afiController.new(addresszWXE1CH, {from: accounts[0]});
		const addressXI5vPSo = accounts[1]
		const addressiJ1zzP6 = accounts[1]
		const addressIya2oVw = "0x0000000000000000000000000000000000000001"
		const uintFr0Aemi = BigInt("2035")
		const addressavoSzan = accounts[5]
		const addressZPbZ7kj = accounts[2]
		const uintplTMdUi = BigInt("520")
		const addressnkDcAO = accounts[3]
//		const addressnM8F0q = await afiControllerKQJsGpg.setConverter.call(addressIya2oVw, addressiJ1zzP6, addressXI5vPSo, {from: accounts[2]});
//		const uintO0Dn4z3 = await afiControllerKQJsGpg.getExpectedReturn.call(addressZPbZ7kj, addressavoSzan, uintFr0Aemi, {from: accounts[1]});
//		const addressoMXf6z7 = await afiControllerKQJsGpg.withdraw.call(addressnkDcAO, uintplTMdUi, {from: "0x0000000000000000000000000000000000000001"});

		await expect(afiControllerKQJsGpg.setConverter.call(addressIya2oVw, addressiJ1zzP6, addressXI5vPSo, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressbd9qCYP = accounts[2]
		const afiControllerKQJsGpg = await afiController.new(addressbd9qCYP, {from: accounts[0]});
		const addressKKto86O = accounts[3]
		const addressWxSVJXK = accounts[2]
		const addressWZOlFGG = accounts[0]
		const addressbEIMGrb = accounts[4]
		const uintQ2SHgIJ = BigInt("520")
		const addressg3c7qff = accounts[0]
//		const addressbn9etjv = await afiControllerKQJsGpg.withdrawAll.call(addressKKto86O, {from: accounts[3]});
//		const address6JJkY7 = await afiControllerKQJsGpg.approveStrategy.call(addressWZOlFGG, addressWxSVJXK, {from: "0x0000000000000000000000000000000000000001"});
//		const addressz5qeek1 = await afiControllerKQJsGpg.setOneSplit.call(addressbEIMGrb, {from: accounts[0]});
//		const addressoMXf6z7 = await afiControllerKQJsGpg.withdraw.call(addressg3c7qff, uintQ2SHgIJ, {from: "0x0000000000000000000000000000000000000001"});

		await expect(afiControllerKQJsGpg.withdrawAll.call(addressKKto86O, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressa4ov5a = accounts[2]
		const afiControllerKQJsGpg = await afiController.new(addressa4ov5a, {from: accounts[0]});
		const addressNrX3qIy = accounts[1]
		const addresse1rroc = accounts[5]
		const uintvZWvYdV = BigInt("520")
		const addressBKrG68j = accounts[0]
//		const addressUUX7cCZ = await afiControllerKQJsGpg.inCaseStrategyTokenGetStuck.call(addresse1rroc, addressNrX3qIy, {from: "0x0000000000000000000000000000000000000001"});
//		const addressoMXf6z7 = await afiControllerKQJsGpg.withdraw.call(addressBKrG68j, uintvZWvYdV, {from: "0x0000000000000000000000000000000000000001"});

		await expect(afiControllerKQJsGpg.inCaseStrategyTokenGetStuck.call(addresse1rroc, addressNrX3qIy, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressqCmMfa5 = accounts[1]
		const afiControllerx0pcZUB = await afiController.new(addressqCmMfa5, {from: accounts[3]});
		const addressJXz3Riu = accounts[0]
		const addressvqiqqgx = accounts[5]
		const addressdf5ugib = accounts[2]
		const addressZUe0a5w = "0x0000000000000000000000000000000000000001"
		const addressC7PrK1X = accounts[3]
		const addressJD8yBmW = accounts[4]
		const addresstjlrsIK = accounts[3]
		const addressslrKCE0 = await afiControllerx0pcZUB.setStrategist.call(addressJXz3Riu, {from: accounts[3]});
		const addressUamXqdd = await afiControllerx0pcZUB.setOneSplit.call(addressvqiqqgx, {from: accounts[3]});
//		const addressZFcnXl3 = await afiControllerx0pcZUB.inCaseStrategyTokenGetStuck.call(addressZUe0a5w, addressdf5ugib, {from: accounts[4]});
//		const addressesVZR52 = await afiControllerx0pcZUB.setStrategy.call(addressJD8yBmW, addressC7PrK1X, {from: "0x0000000000000000000000000000000000000001"});
//		const addressXfbtekp = await afiControllerx0pcZUB.setStrategist.call(addresstjlrsIK, {from: accounts[5]});

		await expect(afiControllerx0pcZUB.inCaseStrategyTokenGetStuck.call(addressZUe0a5w, addressdf5ugib, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressLwEwruT = accounts[2]
		const afiControllerKQJsGpg = await afiController.new(addressLwEwruT, {from: accounts[0]});
		const uintfAcf2XE = BigInt("1139")
		const addressBoN3zSN = accounts[3]
		const addressYZ2wTjF = accounts[3]
		const uintzzZ74se = BigInt("520")
		const addressH6RH5zU = accounts[1]
		const uintHvkrUXI = BigInt("1313")
		const addressC2W2nrH = accounts[0]
		const addressuS3kTTq = accounts[4]
//		const addressL8Gwwge = await afiControllerKQJsGpg.yearn.call(addressYZ2wTjF, addressBoN3zSN, uintfAcf2XE, {from: accounts[2]});
//		const addressoMXf6z7 = await afiControllerKQJsGpg.withdraw.call(addressH6RH5zU, uintzzZ74se, {from: "0x0000000000000000000000000000000000000001"});
//		const addressGoUIK6h = await afiControllerKQJsGpg.yearn.call(addressuS3kTTq, addressC2W2nrH, uintHvkrUXI, {from: accounts[2]});

		await expect(afiControllerKQJsGpg.yearn.call(addressYZ2wTjF, addressBoN3zSN, uintfAcf2XE, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressbIA6Y36 = accounts[2]
		const afiControllerKQJsGpg = await afiController.new(addressbIA6Y36, {from: accounts[0]});
		const addressew4rd7V = "0x0000000000000000000000000000000000000001"
		const uintrZzoYzC = BigInt("520")
		const addressscFuyYQ = accounts[1]
//		const addressp4EbVen = await afiControllerKQJsGpg.setRewards.call(addressew4rd7V, {from: accounts[3]});
//		const addressoMXf6z7 = await afiControllerKQJsGpg.withdraw.call(addressscFuyYQ, uintrZzoYzC, {from: "0x0000000000000000000000000000000000000001"});

		await expect(afiControllerKQJsGpg.setRewards.call(addressew4rd7V, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressDqd4cZP = accounts[2]
		const afiControllerKQJsGpg = await afiController.new(addressDqd4cZP, {from: accounts[0]});
		const uintT627m2N = BigInt("932")
		const addresscBnJtKA = accounts[4]
		const addressI8azkL = "0x0000000000000000000000000000000000000001"
		const uintQYoESCB = BigInt("987")
		const addressPdXiA0L = accounts[0]
		const uintmxnDOBq = BigInt("905")
		const addressZWvhoR7 = accounts[4]
//		const uintrhpkwUa = await afiControllerKQJsGpg.getExpectedReturn.call(addressI8azkL, addresscBnJtKA, uintT627m2N, {from: accounts[2]});
//		const addresstQMktM2 = await afiControllerKQJsGpg.inCaseTokensGetStuck.call(addressPdXiA0L, uintQYoESCB, {from: "0x0000000000000000000000000000000000000001"});
//		const addressir2agNP = await afiControllerKQJsGpg.earn.call(addressZWvhoR7, uintmxnDOBq, {from: accounts[4]});

		await expect(afiControllerKQJsGpg.getExpectedReturn.call(addressI8azkL, addresscBnJtKA, uintT627m2N, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressUS9nLPW = accounts[2]
		const afiControllerKQJsGpg = await afiController.new(addressUS9nLPW, {from: accounts[0]});
		const address6odWq6 = accounts[0]
		const addresslicAG9C = accounts[3]
		const uintoduPg5M = BigInt("520")
		const addressiYWVfOI = accounts[1]
		const addressdi2gg3Y = await afiControllerKQJsGpg.setVault.call(addresslicAG9C, address6odWq6, {from: accounts[0]});
//		const addressoMXf6z7 = await afiControllerKQJsGpg.withdraw.call(addressiYWVfOI, uintoduPg5M, {from: "0x0000000000000000000000000000000000000001"});

		await expect(afiControllerKQJsGpg.withdraw.call(addressiYWVfOI, uintoduPg5M, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressA107N6Y = accounts[2]
		const afiControllerKQJsGpg = await afiController.new(addressA107N6Y, {from: accounts[0]});
		const uintysGgWNB = BigInt("1580")
		const addressVcmp1fu = accounts[0]
		const uintkgc7cf = BigInt("829")
		const addressTo92lC9 = accounts[0]
//		const addresscLP4XHA = await afiControllerKQJsGpg.inCaseTokensGetStuck.call(addressVcmp1fu, uintysGgWNB, {from: accounts[0]});
//		const addressoMXf6z7 = await afiControllerKQJsGpg.withdraw.call(addressTo92lC9, uintkgc7cf, {from: "0x0000000000000000000000000000000000000001"});

		await expect(afiControllerKQJsGpg.inCaseTokensGetStuck.call(addressVcmp1fu, uintysGgWNB, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressTfePI14 = accounts[2]
		const afiControllerKQJsGpg = await afiController.new(addressTfePI14, {from: accounts[0]});
		const addressxMlXBbe = "0x0000000000000000000000000000000000000001"
		const addresskMBeSJp = accounts[2]
		const uintk661iq = BigInt("520")
		const addressb4BSQbz = accounts[0]
		const addressXkLtyGp = accounts[3]
//		const addressofjCDp7 = await afiControllerKQJsGpg.setStrategy.call(addresskMBeSJp, addressxMlXBbe, {from: accounts[0]});
//		const addressoMXf6z7 = await afiControllerKQJsGpg.withdraw.call(addressb4BSQbz, uintk661iq, {from: "0x0000000000000000000000000000000000000001"});
//		const uintUmm28fI = await afiControllerKQJsGpg.balanceOf.call(addressXkLtyGp, {from: "0x0000000000000000000000000000000000000001"});

		await expect(afiControllerKQJsGpg.setStrategy.call(addresskMBeSJp, addressxMlXBbe, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})