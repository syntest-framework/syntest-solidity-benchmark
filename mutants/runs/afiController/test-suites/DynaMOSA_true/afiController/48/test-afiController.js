const afiController = artifacts.require("afiController");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('afiController', (accounts) => {
	it('test for afiController', async () => {
		const addressy6ZEy6i = accounts[0]
		const afiControllerZe47Twk = await afiController.new(addressy6ZEy6i, {from: accounts[4]});
		const addressRM6YHbP = accounts[2]
		const addressfvThCX = accounts[1]
		const addressWGI8uS8 = accounts[5]
		const addressJBnpxos = accounts[2]
		const addressi1X056f = accounts[5]
		const addressrwepkwa = accounts[0]
		const addressuozTc82 = accounts[4]
		const addresshtOpB3s = await afiControllerZe47Twk.setStrategy.call(addressfvThCX, addressRM6YHbP, {from: accounts[1]});
		const addressJMGThj = await afiControllerZe47Twk.inCaseStrategyTokenGetStuck.call(addressJBnpxos, addressWGI8uS8, {from: accounts[2]});
		const addressM0sRpmk = await afiControllerZe47Twk.setStrategy.call(addressrwepkwa, addressi1X056f, {from: accounts[1]});
		const addressWtGYNwL = await afiControllerZe47Twk.setRewards.call(addressuozTc82, {from: accounts[1]});

		await expect(afiControllerZe47Twk.setStrategy.call(addressfvThCX, addressRM6YHbP, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressJRC0VF = accounts[0]
		const afiControllerMzBAyqe = await afiController.new(addressJRC0VF, {from: accounts[4]});
		const addressgCyFuaD = accounts[3]
		const uintfz4x5sd = BigInt("1438")
		const addressPHatdus = accounts[4]
		const addressOsBTF8T = accounts[2]
		const addressA8yePxS = accounts[1]
		const addressppgPzew = await afiControllerMzBAyqe.setOneSplit.call(addressgCyFuaD, {from: accounts[1]});
		const addressnS7ZvGo = await afiControllerMzBAyqe.yearn.call(addressOsBTF8T, addressPHatdus, uintfz4x5sd, {from: accounts[3]});
		const uintI8QFuF1 = await afiControllerMzBAyqe.balanceOf.call(addressA8yePxS, {from: accounts[2]});

		await expect(afiControllerMzBAyqe.setOneSplit.call(addressgCyFuaD, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressDop8INA = accounts[3]
		const afiControllerr2peUWM = await afiController.new(addressDop8INA, {from: accounts[5]});
		const uintLEhSbi4 = BigInt("1234")
		const addressR5PLF5i = accounts[1]
		const addressHiCw58e = "0x0000000000000000000000000000000000000001"
		const addresstd9sLAQ = accounts[3]
		const addressWsJct6 = await afiControllerr2peUWM.earn.call(addressR5PLF5i, uintLEhSbi4, {from: accounts[2]});
		const addressnHC3sgi = await afiControllerr2peUWM.approveStrategy.call(addresstd9sLAQ, addressHiCw58e, {from: accounts[1]});

		await expect(afiControllerr2peUWM.earn.call(addressR5PLF5i, uintLEhSbi4, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressX0CsV1F = accounts[2]
		const afiControllerd8K6yAn = await afiController.new(addressX0CsV1F, {from: accounts[4]});
		const uintV7Zhi4x = BigInt("544")
		const addressSBrtfJH = accounts[0]
		const addressmu4VjxJ = accounts[3]
		const uintjAAkKAP = BigInt("954")
		const uintbnSR76v = BigInt("1713")
		const addressw0muYgQ = accounts[0]
		const addressbE4qA4E = accounts[5]
		const addressjs71aqi = accounts[3]
		const addresspICfcqP = await afiControllerd8K6yAn.inCaseTokensGetStuck.call(addressSBrtfJH, uintV7Zhi4x, {from: accounts[3]});
		const uintvg4vRdP = await afiControllerd8K6yAn.balanceOf.call(addressmu4VjxJ, {from: accounts[2]});
		const uintUdSXVF9 = await afiControllerd8K6yAn.setSplit.call(uintjAAkKAP, {from: accounts[0]});
		const address6dfu81 = await afiControllerd8K6yAn.yearn.call(addressbE4qA4E, addressw0muYgQ, uintbnSR76v, {from: accounts[1]});
		const addressH2bghq7 = await afiControllerd8K6yAn.withdrawAll.call(addressjs71aqi, {from: accounts[0]});

		await expect(afiControllerd8K6yAn.inCaseTokensGetStuck.call(addressSBrtfJH, uintV7Zhi4x, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressGVrbdxb = "0x0000000000000000000000000000000000000001"
		const afiControlleri5caiSL = await afiController.new(addressGVrbdxb, {from: accounts[2]});
		const uintmCZ88b = BigInt("1803")
		const addressXOyh3UZ = accounts[5]
		const addressggglktc = accounts[4]
		const addressIwMKyHi = accounts[1]
		const addresstGtIy5 = accounts[0]
		const addressPQsCxXV = accounts[4]
		const addresstWQGZDf = accounts[5]
		const addressSIcoD1U = await afiControlleri5caiSL.withdraw.call(addressXOyh3UZ, uintmCZ88b, {from: accounts[3]});
		const address5QkIJr = await afiControlleri5caiSL.setOneSplit.call(addressggglktc, {from: accounts[5]});
		const addressG1wx50h = await afiControlleri5caiSL.setStrategy.call(addresstGtIy5, addressIwMKyHi, {from: "0x0000000000000000000000000000000000000001"});
		const uintjgHj7M3 = await afiControlleri5caiSL.balanceOf.call(addressPQsCxXV, {from: accounts[1]});
		const addressJ8NeepC = await afiControlleri5caiSL.withdrawAll.call(addresstWQGZDf, {from: accounts[3]});

		await expect(afiControlleri5caiSL.withdraw.call(addressXOyh3UZ, uintmCZ88b, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressecQNRc = accounts[3]
		const afiControlleriaBG6PB = await afiController.new(addressecQNRc, {from: accounts[1]});
		const uintNMt2Fkz = BigInt("909")
		const addresszxGCdi6 = accounts[3]
		const addressr4uUhXI = accounts[4]
		const uintY3pQ4ks = BigInt("45")
		const addressapzLJD8 = accounts[4]
		const addressTYYyfev = accounts[0]
		const addresssiu7FNb = await afiControlleriaBG6PB.yearn.call(addressr4uUhXI, addresszxGCdi6, uintNMt2Fkz, {from: accounts[3]});
		const addressEMzFoJ2 = await afiControlleriaBG6PB.yearn.call(addressTYYyfev, addressapzLJD8, uintY3pQ4ks, {from: accounts[0]});

		await expect(afiControlleriaBG6PB.yearn.call(addressr4uUhXI, addresszxGCdi6, uintNMt2Fkz, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressIzvJKh = accounts[3]
		const afiControllerAQOEQL5 = await afiController.new(addressIzvJKh, {from: accounts[3]});
		const addresskYJ9GVz = accounts[0]
		const addressbpjJQT = accounts[0]
		const addressbsCYcd3 = accounts[5]
		const addresskEqVzng = accounts[2]
		const address3kpPs3 = accounts[3]
		const addressj2qe7tC = accounts[1]
		const addressiCWETOv = accounts[4]
		const addressnpWix01 = accounts[0]
		const addresspy94Tg = accounts[4]
		const uintvrMEIud = BigInt("859")
		const addressRmViWih = accounts[2]
		const addressp5XPEMs = await afiControllerAQOEQL5.inCaseStrategyTokenGetStuck.call(addressbpjJQT, addresskYJ9GVz, {from: accounts[3]});
		const addressNsL1YWw = await afiControllerAQOEQL5.revokeStrategy.call(addresskEqVzng, addressbsCYcd3, {from: accounts[1]});
		const addressd1yh02 = await afiControllerAQOEQL5.approveStrategy.call(addressj2qe7tC, address3kpPs3, {from: accounts[1]});
		const uintXSonRC = await afiControllerAQOEQL5.balanceOf.call(addressiCWETOv, {from: "0x0000000000000000000000000000000000000001"});
		const addressL81gVL8 = await afiControllerAQOEQL5.setStrategy.call(addresspy94Tg, addressnpWix01, {from: accounts[2]});
		const addressENFLpjC = await afiControllerAQOEQL5.earn.call(addressRmViWih, uintvrMEIud, {from: accounts[4]});

		await expect(afiControllerAQOEQL5.inCaseStrategyTokenGetStuck.call(addressbpjJQT, addresskYJ9GVz, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressh4JMiVx = accounts[4]
		const afiControllerM4RBkLe = await afiController.new(addressh4JMiVx, {from: accounts[4]});
		const addressJNGJ9nI = accounts[3]
		const addressbW82F1 = accounts[3]
		const uintIB8U55f = BigInt("1858")
		const addressIyVzso = accounts[0]
		const addressWuBPa7P = accounts[2]
		const addressqUrz1Yb = accounts[1]
		const addressowTswE5 = await afiControllerM4RBkLe.setVault.call(addressbW82F1, addressJNGJ9nI, {from: accounts[1]});
		const addressia5uEuI = await afiControllerM4RBkLe.yearn.call(addressWuBPa7P, addressIyVzso, uintIB8U55f, {from: accounts[5]});
		const addressQSdxAJ = await afiControllerM4RBkLe.withdrawAll.call(addressqUrz1Yb, {from: accounts[2]});

		await expect(afiControllerM4RBkLe.setVault.call(addressbW82F1, addressJNGJ9nI, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressM0KA7qa = accounts[3]
		const afiControllerr2peUWM = await afiController.new(addressM0KA7qa, {from: accounts[5]});
		const addresskFuldCf = accounts[3]
		const uintQpuGhsG = BigInt("1234")
		const addressAJp3lh7 = accounts[1]
		const addressmWjvgrV = "0x0000000000000000000000000000000000000001"
		const addressxPYiJZm = accounts[4]
		const addressj7g1GtQ = accounts[5]
		const addressXmOKdBl = await afiControllerr2peUWM.withdrawAll.call(addresskFuldCf, {from: accounts[2]});
		const addressWsJct6 = await afiControllerr2peUWM.earn.call(addressAJp3lh7, uintQpuGhsG, {from: accounts[2]});
		const addressnHC3sgi = await afiControllerr2peUWM.approveStrategy.call(addressxPYiJZm, addressmWjvgrV, {from: accounts[1]});
		const addressD1nHm5T = await afiControllerr2peUWM.setOneSplit.call(addressj7g1GtQ, {from: accounts[0]});

		await expect(afiControllerr2peUWM.withdrawAll.call(addresskFuldCf, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressAO814zp = accounts[3]
		const afiControlleriaBG6PB = await afiController.new(addressAO814zp, {from: accounts[1]});
		const addressUCGLlOX = accounts[1]
		const uintZtKtqRe = BigInt("909")
		const address5kQbJt = accounts[3]
		const addressC18e5N = accounts[4]
		const addressEQPNIuR = "0x0000000000000000000000000000000000000001"
		const addressaDe8SRK = await afiControlleriaBG6PB.setStrategist.call(addressUCGLlOX, {from: accounts[3]});
		const addresssiu7FNb = await afiControlleriaBG6PB.yearn.call(addressC18e5N, address5kQbJt, uintZtKtqRe, {from: accounts[3]});
		const addressKeCN6mq = await afiControlleriaBG6PB.setGovernance.call(addressEQPNIuR, {from: accounts[3]});

		await expect(afiControlleriaBG6PB.setStrategist.call(addressUCGLlOX, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressjitIBjt = accounts[3]
		const afiControllerWjFZwiU = await afiController.new(addressjitIBjt, {from: "0x0000000000000000000000000000000000000001"});
		const uintKA3J6Z = BigInt("1716")
		const addressZZjv2mB = accounts[1]
		const addressO0nIoKQ = accounts[4]
		const addresseq5V5ha = "0x0000000000000000000000000000000000000001"
		const uintbi35WUn = BigInt("1972")
		const addressNgUK3G = accounts[4]
		const uintajFCNSE = BigInt("642")
		const addressbxIJlKd = accounts[1]
		const addressYlbSPB = await afiControllerWjFZwiU.yearn.call(addressO0nIoKQ, addressZZjv2mB, uintKA3J6Z, {from: accounts[4]});
		const addressgvbW5y = await afiControllerWjFZwiU.setOneSplit.call(addresseq5V5ha, {from: accounts[2]});
		const uintXvxLMft = await afiControllerWjFZwiU.setSplit.call(uintbi35WUn, {from: accounts[0]});
		const addressrorHGSb = await afiControllerWjFZwiU.setStrategist.call(addressNgUK3G, {from: accounts[1]});
		const addressNHPXZV8 = await afiControllerWjFZwiU.earn.call(addressbxIJlKd, uintajFCNSE, {from: accounts[3]});
	});

	it('test for afiController', async () => {
		const addressKaVPuc7 = accounts[2]
		const afiControllerKqfHBLj = await afiController.new(addressKaVPuc7, {from: accounts[3]});
		const addresstxj9RRA = accounts[1]
		const addressROwgjs = accounts[4]
		const addressUDf3JOB = await afiControllerKqfHBLj.approveStrategy.call(addressROwgjs, addresstxj9RRA, {from: accounts[4]});

		await expect(afiControllerKqfHBLj.approveStrategy.call(addressROwgjs, addresstxj9RRA, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressfcrHLx6 = accounts[3]
		const afiControllerr2peUWM = await afiController.new(addressfcrHLx6, {from: accounts[5]});
		const uintFybM0WR = BigInt("378")
		const addressZ2zd1ge = accounts[3]
		const uintETjJWur = BigInt("1234")
		const addressnuBRO9n = accounts[2]
		const addressmOq3V9T = accounts[4]
		const addressib7K7kK = "0x0000000000000000000000000000000000000001"
		const addressB84qT6y = await afiControllerr2peUWM.inCaseTokensGetStuck.call(addressZ2zd1ge, uintFybM0WR, {from: accounts[5]});
		const addressWsJct6 = await afiControllerr2peUWM.earn.call(addressnuBRO9n, uintETjJWur, {from: accounts[2]});
		const addressqJoVTaa = await afiControllerr2peUWM.setVault.call(addressib7K7kK, addressmOq3V9T, {from: accounts[3]});

		await expect(afiControllerr2peUWM.inCaseTokensGetStuck.call(addressZ2zd1ge, uintFybM0WR, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressvk8UGia = accounts[0]
		const afiControllerMzBAyqe = await afiController.new(addressvk8UGia, {from: accounts[4]});
		const uintz2LZEI1 = BigInt("1568")
		const addressQO1sqJW = accounts[4]
		const addressh3TQ1TA = accounts[3]
		const addresshsi9Dra = accounts[2]
		const uintDDTkIvu = BigInt("1445")
		const addressGKiEHbT = accounts[4]
		const addressjqc5ngL = accounts[2]
		const addressU6RoJrS = accounts[1]
		const uintkglLR68 = await afiControllerMzBAyqe.getExpectedReturn.call(addressh3TQ1TA, addressQO1sqJW, uintz2LZEI1, {from: accounts[5]});
		const addressppgPzew = await afiControllerMzBAyqe.setOneSplit.call(addresshsi9Dra, {from: accounts[1]});
		const addressnS7ZvGo = await afiControllerMzBAyqe.yearn.call(addressjqc5ngL, addressGKiEHbT, uintDDTkIvu, {from: accounts[3]});
		const uintI8QFuF1 = await afiControllerMzBAyqe.balanceOf.call(addressU6RoJrS, {from: accounts[2]});

		await expect(afiControllerMzBAyqe.getExpectedReturn.call(addressh3TQ1TA, addressQO1sqJW, uintz2LZEI1, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const address93gSEt = accounts[2]
		const afiControllerKqfHBLj = await afiController.new(address93gSEt, {from: accounts[3]});
		const addressLU1N40u = accounts[4]
		const addressn86IqDu = accounts[2]
		const addressaQ9hToo = accounts[2]
		const addressQ3UfvFp = accounts[4]
		const addressOs15JBQ = accounts[1]
		const addressxPjJaTS = accounts[3]
		const addressdBZ11Fn = await afiControllerKqfHBLj.revokeStrategy.call(addressn86IqDu, addressLU1N40u, {from: accounts[3]});
		const addressMrUk8KB = await afiControllerKqfHBLj.setStrategy.call(addressQ3UfvFp, addressaQ9hToo, {from: accounts[1]});
		const addressUDf3JOB = await afiControllerKqfHBLj.approveStrategy.call(addressxPjJaTS, addressOs15JBQ, {from: accounts[4]});

		await expect(afiControllerKqfHBLj.setStrategy.call(addressQ3UfvFp, addressaQ9hToo, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressxzzUD0k = accounts[2]
		const afiControllerm1ix0N6 = await afiController.new(addressxzzUD0k, {from: accounts[2]});
		const addresseUWU3jD = accounts[0]
		const uintHizUt7x = BigInt("1856")
		const uintVW4rk2n = BigInt("761")
		const addressPcK4L0x = accounts[2]
		const addressmXulziV = accounts[4]
		const uintCQUVPgV = BigInt("1667")
		const addressEYIYJaw = accounts[1]
		const addressrnhXz0o = accounts[3]
		const addressZdr6MnL = "0x0000000000000000000000000000000000000001"
		const addresskr0ujGv = await afiControllerm1ix0N6.setStrategist.call(addresseUWU3jD, {from: accounts[2]});
		const uintJWoykzV = await afiControllerm1ix0N6.setSplit.call(uintHizUt7x, {from: accounts[3]});
		const addressBp5FPmj = await afiControllerm1ix0N6.yearn.call(addressmXulziV, addressPcK4L0x, uintVW4rk2n, {from: "0x0000000000000000000000000000000000000001"});
		const addressamXK4Rb = await afiControllerm1ix0N6.earn.call(addressEYIYJaw, uintCQUVPgV, {from: accounts[2]});
		const addressYryyjdz = await afiControllerm1ix0N6.setStrategist.call(addressrnhXz0o, {from: accounts[2]});
		const addressJyHGFTm = await afiControllerm1ix0N6.setOneSplit.call(addressZdr6MnL, {from: accounts[4]});

		await expect(afiControllerm1ix0N6.setSplit.call(uintHizUt7x, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressJplFQLP = "0x0000000000000000000000000000000000000001"
		const afiControlleri5caiSL = await afiController.new(addressJplFQLP, {from: accounts[2]});
		const addressfKJoLWE = "0x0000000000000000000000000000000000000001"
		const uintB5bH8sJ = BigInt("1803")
		const addressShp11kX = accounts[5]
		const addressPw7AdRj = accounts[5]
		const addressDNnhdrq = accounts[1]
		const addressTE0UJhH = accounts[0]
		const addressQsgDOfE = accounts[4]
		const addressNo8dvbA = accounts[5]
		const addressPm1lxOX = await afiControlleri5caiSL.setOneSplit.call(addressfKJoLWE, {from: accounts[2]});
		const addressSIcoD1U = await afiControlleri5caiSL.withdraw.call(addressShp11kX, uintB5bH8sJ, {from: accounts[3]});
		const address5QkIJr = await afiControlleri5caiSL.setOneSplit.call(addressPw7AdRj, {from: accounts[5]});
		const addressG1wx50h = await afiControlleri5caiSL.setStrategy.call(addressTE0UJhH, addressDNnhdrq, {from: "0x0000000000000000000000000000000000000001"});
		const uintjgHj7M3 = await afiControlleri5caiSL.balanceOf.call(addressQsgDOfE, {from: accounts[1]});
		const addressJ8NeepC = await afiControlleri5caiSL.withdrawAll.call(addressNo8dvbA, {from: accounts[3]});

		await expect(afiControlleri5caiSL.withdraw.call(addressShp11kX, uintB5bH8sJ, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressIWgkNlj = accounts[2]
		const afiControllerKqfHBLj = await afiController.new(addressIWgkNlj, {from: accounts[3]});
		const addressGUXUNXK = accounts[0]
		const addressSsCnkL7 = accounts[2]
		const addressJv2bD9P = accounts[4]
		const addressWDwwvnd = await afiControllerKqfHBLj.setRewards.call(addressGUXUNXK, {from: accounts[2]});
		const addressUDf3JOB = await afiControllerKqfHBLj.approveStrategy.call(addressJv2bD9P, addressSsCnkL7, {from: accounts[4]});

		await expect(afiControllerKqfHBLj.setRewards.call(addressGUXUNXK, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressMftbwH9 = accounts[2]
		const afiControllerm1ix0N6 = await afiController.new(addressMftbwH9, {from: accounts[2]});
		const addressR5n652h = accounts[0]
		const addressa4b8jhF = accounts[1]
		const uintVGqPFd5 = BigInt("1851")
		const uintvRlcNHl = BigInt("761")
		const addresskqNxSAd = accounts[2]
		const addressJdzvlrL = accounts[4]
		const uintRH0yEH = BigInt("173")
		const addressoi7llO0 = accounts[2]
		const uintQaScydi = BigInt("1667")
		const addressTRgxT1B = accounts[1]
		const addressLFqhuky = "0x0000000000000000000000000000000000000001"
		const addresso3QxQgt = await afiControllerm1ix0N6.setGovernance.call(addressR5n652h, {from: accounts[4]});
		const addresskr0ujGv = await afiControllerm1ix0N6.setStrategist.call(addressa4b8jhF, {from: accounts[2]});
		const uintJWoykzV = await afiControllerm1ix0N6.setSplit.call(uintVGqPFd5, {from: accounts[3]});
		const addressBp5FPmj = await afiControllerm1ix0N6.yearn.call(addressJdzvlrL, addresskqNxSAd, uintvRlcNHl, {from: "0x0000000000000000000000000000000000000001"});
		const addresssUJRg5q = await afiControllerm1ix0N6.inCaseTokensGetStuck.call(addressoi7llO0, uintRH0yEH, {from: accounts[0]});
		const addressamXK4Rb = await afiControllerm1ix0N6.earn.call(addressTRgxT1B, uintQaScydi, {from: accounts[2]});
		const addressJyHGFTm = await afiControllerm1ix0N6.setOneSplit.call(addressLFqhuky, {from: accounts[4]});

		await expect(afiControllerm1ix0N6.setGovernance.call(addressR5n652h, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressjPF985o = accounts[2]
		const afiControllerKqfHBLj = await afiController.new(addressjPF985o, {from: accounts[3]});
		const addressKblggd8 = accounts[2]
		const address5CHaZA = accounts[4]
		const addresskUL0sgl = accounts[3]
		const addressTCE2F7 = accounts[3]
		const addressnzDbKNt = accounts[4]
		const uintcSTMuJj = BigInt("1193")
		const addresshmeUpke = accounts[0]
		const addressSxXvHor = accounts[0]
		const addressAgxaswF = accounts[1]
		const addressmKPuQ3 = await afiControllerKqfHBLj.setConverter.call(addresskUL0sgl, address5CHaZA, addressKblggd8, {from: accounts[2]});
		const addressBKPdJRr = await afiControllerKqfHBLj.setStrategy.call(addressnzDbKNt, addressTCE2F7, {from: accounts[3]});
		const addressuCAeV9M = await afiControllerKqfHBLj.inCaseTokensGetStuck.call(addresshmeUpke, uintcSTMuJj, {from: accounts[2]});
		const addressjmlxwDf = await afiControllerKqfHBLj.approveStrategy.call(addressAgxaswF, addressSxXvHor, {from: "0x0000000000000000000000000000000000000001"});

		await expect(afiControllerKqfHBLj.setConverter.call(addresskUL0sgl, address5CHaZA, addressKblggd8, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressDSEd3YD = accounts[2]
		const afiControllerKqfHBLj = await afiController.new(addressDSEd3YD, {from: accounts[3]});
		const addresscyqgaS = accounts[2]
		const addresspfn9XJt = accounts[1]
		const addresshm1keN = accounts[1]
		const addressV4pij6g = "0x0000000000000000000000000000000000000001"
		const addressvJ9YFRv = "0x0000000000000000000000000000000000000001"
		const uintD7nT3G = await afiControllerKqfHBLj.balanceOf.call(addresscyqgaS, {from: accounts[4]});
		const addressWDwwvnd = await afiControllerKqfHBLj.setRewards.call(addresspfn9XJt, {from: accounts[2]});
		const addressgEvPHU5 = await afiControllerKqfHBLj.setConverter.call(addressvJ9YFRv, addressV4pij6g, addresshm1keN, {from: accounts[1]});

		await expect(afiControllerKqfHBLj.balanceOf.call(addresscyqgaS, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressCi4Hjc = accounts[2]
		const afiControllerKqfHBLj = await afiController.new(addressCi4Hjc, {from: accounts[3]});
		const addressIpWD8Kn = accounts[0]
		const addressKkbJcZI = await afiControllerKqfHBLj.setGovernance.call(addressIpWD8Kn, {from: accounts[3]});
	});

	it('test for afiController', async () => {
		const addressFgabk0C = accounts[2]
		const afiController47sQT8 = await afiController.new(addressFgabk0C, {from: accounts[4]});
		const uintF45qeVE = BigInt("415")
		const addressiwbLbSH = accounts[2]
		const addressHZqOlXB = accounts[4]
		const addressWvbwDkM = accounts[4]
		const addressoNZTher = accounts[4]
		const uinta6VIG9m = BigInt("131")
		const addressECsZ9X = "0x0000000000000000000000000000000000000001"
		const addressU01g5So = accounts[4]
		const addressEJGrcFM = await afiController47sQT8.yearn.call(addressHZqOlXB, addressiwbLbSH, uintF45qeVE, {from: accounts[4]});
		const addressTZsnI3q = await afiController47sQT8.setStrategy.call(addressoNZTher, addressWvbwDkM, {from: accounts[1]});
		const uintHOpXKzd = await afiController47sQT8.getExpectedReturn.call(addressU01g5So, addressECsZ9X, uinta6VIG9m, {from: accounts[1]});

		await expect(afiController47sQT8.yearn.call(addressHZqOlXB, addressiwbLbSH, uintF45qeVE, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addresszRx0obO = accounts[3]
		const afiControllerVDAH0Qu = await afiController.new(addresszRx0obO, {from: accounts[3]});
		const addressS6Wm67 = accounts[0]
		const addressObHst4U = accounts[2]
		const addressKc1iuCG = accounts[1]
		const addresspGMK30M = "0x0000000000000000000000000000000000000001"
		const addressEYXw89z = "0x0000000000000000000000000000000000000001"
		const addressEwtcVvQ = accounts[1]
		const uintcYYvbIr = BigInt("1438")
		const addresslflb00p = accounts[1]
		const addressx5cN3ea = accounts[5]
		const uintC3MAx67 = BigInt("1393")
		const addressU6sp6gc = accounts[4]
		const addressLKLM59t = "0x0000000000000000000000000000000000000001"
		const addressPz6qsn = await afiControllerVDAH0Qu.revokeStrategy.call(addressObHst4U, addressS6Wm67, {from: accounts[3]});
		const addresszQfHJTQ = await afiControllerVDAH0Qu.setVault.call(addresspGMK30M, addressKc1iuCG, {from: accounts[3]});
		const addresssJr6XP6 = await afiControllerVDAH0Qu.revokeStrategy.call(addressEwtcVvQ, addressEYXw89z, {from: accounts[3]});
		const uintKaxJi8j = await afiControllerVDAH0Qu.getExpectedReturn.call(addressx5cN3ea, addresslflb00p, uintcYYvbIr, {from: accounts[1]});
		const uintCYMIt78 = await afiControllerVDAH0Qu.getExpectedReturn.call(addressLKLM59t, addressU6sp6gc, uintC3MAx67, {from: accounts[4]});

		await expect(afiControllerVDAH0Qu.getExpectedReturn.call(addressx5cN3ea, addresslflb00p, uintcYYvbIr, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addresseQtYmt9 = accounts[2]
		const afiControllerKqfHBLj = await afiController.new(addresseQtYmt9, {from: accounts[3]});
		const addressvAtD31u = accounts[5]
		const addressIs1PN9s = accounts[4]
		const addressSSClGSs = accounts[2]
		const addressoHUz6u4 = accounts[4]
		const uintOralAG9 = BigInt("1816")
		const addressg4ptMX9 = accounts[5]
		const addressZv93N3Q = await afiControllerKqfHBLj.approveStrategy.call(addressIs1PN9s, addressvAtD31u, {from: accounts[3]});
		const addressMrUk8KB = await afiControllerKqfHBLj.setStrategy.call(addressoHUz6u4, addressSSClGSs, {from: accounts[1]});
		const addressXsqzbTS = await afiControllerKqfHBLj.earn.call(addressg4ptMX9, uintOralAG9, {from: "0x0000000000000000000000000000000000000001"});

		await expect(afiControllerKqfHBLj.setStrategy.call(addressoHUz6u4, addressSSClGSs, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressuSsl4Xk = "0x0000000000000000000000000000000000000001"
		const afiControlleri5caiSL = await afiController.new(addressuSsl4Xk, {from: accounts[2]});
		const addressOHcjuC = accounts[1]
		const addressVN9uZdL = accounts[1]
		const uintL7CnHsA = BigInt("1819")
		const addressNxzLX0 = "0x0000000000000000000000000000000000000001"
		const addressVKkF4s = "0x0000000000000000000000000000000000000001"
		const addressYxzg5UD = accounts[4]
		const addresscxhySkU = accounts[3]
		const addresssGpqY7F = await afiControlleri5caiSL.setStrategy.call(addressVN9uZdL, addressOHcjuC, {from: accounts[2]});
		const addressSIcoD1U = await afiControlleri5caiSL.withdraw.call(addressNxzLX0, uintL7CnHsA, {from: accounts[3]});
		const addresspKPzsLC = await afiControlleri5caiSL.setGovernance.call(addressVKkF4s, {from: accounts[5]});
		const uintjgHj7M3 = await afiControlleri5caiSL.balanceOf.call(addressYxzg5UD, {from: accounts[1]});
		const addressJ8NeepC = await afiControlleri5caiSL.withdrawAll.call(addresscxhySkU, {from: accounts[3]});

		await expect(afiControlleri5caiSL.setStrategy.call(addressVN9uZdL, addressOHcjuC, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressc7SH00o = accounts[2]
		const afiController47sQT8 = await afiController.new(addressc7SH00o, {from: accounts[4]});
		const addressjbX0jBa = accounts[3]
		const uintDa1CGPK = BigInt("415")
		const addressgOfIZ6 = accounts[3]
		const addressCQ4CPbc = accounts[3]
		const addressqtJSicd = await afiController47sQT8.withdrawAll.call(addressjbX0jBa, {from: accounts[4]});
		const addressEJGrcFM = await afiController47sQT8.yearn.call(addressCQ4CPbc, addressgOfIZ6, uintDa1CGPK, {from: accounts[4]});

		await expect(afiController47sQT8.withdrawAll.call(addressjbX0jBa, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressb8SfvQC = accounts[5]
		const afiControllerbn1i92B = await afiController.new(addressb8SfvQC, {from: accounts[1]});
		const addresspOq1yBQ = accounts[3]
		const addressICLQajU = accounts[4]
		const address5U2wWw = accounts[0]
		const addressmxqMQvy = accounts[0]
		const addresssE8STV9 = accounts[1]
		const addressunVMsjU = accounts[1]
		const addressie5DNuA = await afiControllerbn1i92B.setRewards.call(addresspOq1yBQ, {from: accounts[1]});
		const addressWW9qaeS = await afiControllerbn1i92B.setConverter.call(addressmxqMQvy, address5U2wWw, addressICLQajU, {from: accounts[0]});
		const addressPhG78po = await afiControllerbn1i92B.approveStrategy.call(addressunVMsjU, addresssE8STV9, {from: accounts[3]});

		await expect(afiControllerbn1i92B.setConverter.call(addressmxqMQvy, address5U2wWw, addressICLQajU, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addresst4jm6t5 = accounts[3]
		const afiControllerr2peUWM = await afiController.new(addresst4jm6t5, {from: accounts[5]});
		const uinthTsTGXv = BigInt("1017")
		const uintnBQH014 = BigInt("14")
		const addressk5ekCV5 = accounts[3]
		const addresskH3xiz1 = accounts[2]
		const addressNpzAkAC = accounts[1]
		const uintyWAxjql = BigInt("885")
		const addressSTR1Tte = "0x0000000000000000000000000000000000000001"
		const uinte1TAGiv = await afiControllerr2peUWM.setSplit.call(uinthTsTGXv, {from: accounts[5]});
		const addressB84qT6y = await afiControllerr2peUWM.inCaseTokensGetStuck.call(addressk5ekCV5, uintnBQH014, {from: accounts[5]});
		const addressDsdmh4Y = await afiControllerr2peUWM.revokeStrategy.call(addressNpzAkAC, addresskH3xiz1, {from: accounts[2]});
		const addressHef6PyI = await afiControllerr2peUWM.inCaseTokensGetStuck.call(addressSTR1Tte, uintyWAxjql, {from: accounts[3]});

		await expect(afiControllerr2peUWM.inCaseTokensGetStuck.call(addressk5ekCV5, uintnBQH014, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressVBFmipq = accounts[2]
		const afiControllerSvGvbi = await afiController.new(addressVBFmipq, {from: accounts[3]});
		const addressffXSnJr = accounts[4]
		const addressdgMpCzk = accounts[5]
		const addresshDPi0Ke = accounts[1]
		const uintTFnKTta = BigInt("1567")
		const addressdbjE3s1 = accounts[3]
		const addressbfq7BZE = accounts[0]
		const addresszwQJwo = accounts[2]
		const address4kTwaf = accounts[2]
		const addressLh9ASo5 = await afiControllerSvGvbi.setConverter.call(addresshDPi0Ke, addressdgMpCzk, addressffXSnJr, {from: accounts[3]});
		const addressxSxgCUj = await afiControllerSvGvbi.yearn.call(addressbfq7BZE, addressdbjE3s1, uintTFnKTta, {from: accounts[3]});
		const addressk5FzIQF = await afiControllerSvGvbi.setStrategist.call(addresszwQJwo, {from: accounts[0]});
		const addressCHFI8uN = await afiControllerSvGvbi.setStrategist.call(address4kTwaf, {from: accounts[1]});

		await expect(afiControllerSvGvbi.yearn.call(addressbfq7BZE, addressdbjE3s1, uintTFnKTta, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})