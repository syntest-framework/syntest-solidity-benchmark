const Controller = artifacts.require("Controller");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Controller', (accounts) => {
	it('test for Controller', async () => {
		const addressHH36LyB = accounts[4]
		const ControllerL6W7M2n = await Controller.new(addressHH36LyB, {from: "0x0000000000000000000000000000000000000001"});
		const addressKvWAm47 = accounts[0]
		const addresssxLC9kQ = "0x0000000000000000000000000000000000000001"
		const addressrHyR4M = accounts[1]
		const addresspXF0LgB = accounts[3]
		const addressOcSnye0 = accounts[4]
		const addresswSVIbji = accounts[1]
		const addresstdGdfwi = accounts[0]
		const addressK0XsDHw = accounts[4]
		const addressei6H4bH = accounts[3]
		const addresseiG8YEJ = await ControllerL6W7M2n.revokeStrategy.call(addresssxLC9kQ, addressKvWAm47, {from: accounts[5]});
		const addressoKT8jLZ = await ControllerL6W7M2n.setStrategy.call(addresspXF0LgB, addressrHyR4M, {from: accounts[2]});
		const addresshB61XwD = await ControllerL6W7M2n.approveStrategy.call(addresswSVIbji, addressOcSnye0, {from: accounts[0]});
		const addressau90PAb = await ControllerL6W7M2n.withdrawAll.call(addresstdGdfwi, {from: accounts[1]});
		const addressGHBl8DR = await ControllerL6W7M2n.inCaseStrategyTokenGetStuck.call(addressei6H4bH, addressK0XsDHw, {from: accounts[2]});
	});

	it('test for Controller', async () => {
		const addressQVS04ty = accounts[2]
		const ControllerLhcvVUX = await Controller.new(addressQVS04ty, {from: accounts[0]});
		const uintsW5z7L1 = BigInt("1514")
		const addressZt6QSfu = accounts[1]
		const addressLZBe7c = accounts[4]
		const addressyNAtsxa = accounts[2]
		const addressI5rmPxS = accounts[4]
		const addresslyvsk9w = accounts[4]
		const uintXOV2mDG = await ControllerLhcvVUX.getExpectedReturn.call(addressLZBe7c, addressZt6QSfu, uintsW5z7L1, {from: accounts[3]});
		const addressERkgtTU = await ControllerLhcvVUX.revokeStrategy.call(addressI5rmPxS, addressyNAtsxa, {from: accounts[3]});
		const addressDK94QFG = await ControllerLhcvVUX.withdrawAll.call(addresslyvsk9w, {from: accounts[5]});

		await expect(ControllerLhcvVUX.getExpectedReturn.call(addressLZBe7c, addressZt6QSfu, uintsW5z7L1, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressidmIICt = accounts[4]
		const ControllerV1KKFVZ = await Controller.new(addressidmIICt, {from: accounts[4]});
		const addressvfAyF4O = accounts[4]
		const addressXqFwLlw = accounts[4]
		const addressAwTcHX = accounts[0]
		const addressHkuYj0r = accounts[3]
		const addressDYoJQ6h = await ControllerV1KKFVZ.setStrategy.call(addressXqFwLlw, addressvfAyF4O, {from: accounts[0]});
		const addresszsSvO8J = await ControllerV1KKFVZ.revokeStrategy.call(addressHkuYj0r, addressAwTcHX, {from: accounts[0]});

		await expect(ControllerV1KKFVZ.setStrategy.call(addressXqFwLlw, addressvfAyF4O, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressEFSHvpl = accounts[0]
		const ControlleriMa8l4e = await Controller.new(addressEFSHvpl, {from: accounts[3]});
		const addresse2tN5yh = accounts[4]
		const addressrsrtSCI = accounts[4]
		const addressnoa95vx = accounts[4]
		const addressZT5FSt7 = accounts[3]
		const addresstWifioe = accounts[3]
		const addressT3KeF5D = accounts[1]
		const addressv1ENvDe = await ControlleriMa8l4e.setStrategist.call(addresse2tN5yh, {from: accounts[0]});
		const addressWpB0iIw = await ControlleriMa8l4e.approveStrategy.call(addressnoa95vx, addressrsrtSCI, {from: accounts[0]});
		const addresslUsD71W = await ControlleriMa8l4e.setConverter.call(addressT3KeF5D, addresstWifioe, addressZT5FSt7, {from: accounts[1]});

		await expect(ControlleriMa8l4e.setStrategist.call(addresse2tN5yh, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addresszPkVQhc = accounts[3]
		const ControllerXwY0ekj = await Controller.new(addresszPkVQhc, {from: accounts[2]});
		const addressGxJmDG5 = accounts[4]
		const addressuuP1MFA = accounts[4]
		const addressuEbkjnT = accounts[3]
		const uintoVRWmKl = BigInt("23")
		const addressC4IF7u4 = accounts[0]
		const addressLxYIy4N = "0x0000000000000000000000000000000000000001"
		const addressfQu0SfV = accounts[0]
		const addresspQgUg6V = await ControllerXwY0ekj.withdrawAll.call(addressGxJmDG5, {from: accounts[5]});
		const addressLwidJUx = await ControllerXwY0ekj.revokeStrategy.call(addressuEbkjnT, addressuuP1MFA, {from: accounts[4]});
		const addressSzJ8qYa = await ControllerXwY0ekj.earn.call(addressC4IF7u4, uintoVRWmKl, {from: accounts[4]});
		const addressAohhSeg = await ControllerXwY0ekj.setStrategist.call(addressLxYIy4N, {from: accounts[0]});
		const uintEApQRe = await ControllerXwY0ekj.balanceOf.call(addressfQu0SfV, {from: accounts[1]});

		await expect(ControllerXwY0ekj.withdrawAll.call(addressGxJmDG5, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressJx9WdBG = accounts[0]
		const ControllerINCOtGB = await Controller.new(addressJx9WdBG, {from: accounts[3]});
		const addressSTKwGWE = accounts[3]
		const addressDhHH2Wp = accounts[0]
		const addressWtSL3z = accounts[3]
		const addressNbDRV87 = accounts[3]
		const addressT1obBA6 = await ControllerINCOtGB.setConverter.call(addressWtSL3z, addressDhHH2Wp, addressSTKwGWE, {from: accounts[0]});
		const addressxqcWQtX = await ControllerINCOtGB.setStrategist.call(addressNbDRV87, {from: accounts[3]});

		await expect(ControllerINCOtGB.setConverter.call(addressWtSL3z, addressDhHH2Wp, addressSTKwGWE, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressCymXhr = accounts[2]
		const ControllerFdOqxAr = await Controller.new(addressCymXhr, {from: accounts[1]});
		const uintORvcrLr = BigInt("689")
		const addresstiuzuPq = accounts[1]
		const addressmAsaB4V = accounts[4]
		const addresswamqaZV = accounts[2]
		const addresseJWysr6 = accounts[1]
		const addressqBfYlqC = "0x0000000000000000000000000000000000000001"
		const addressQdUClN = await ControllerFdOqxAr.earn.call(addresstiuzuPq, uintORvcrLr, {from: accounts[0]});
		const address1JJ6jn = await ControllerFdOqxAr.inCaseStrategyTokenGetStuck.call(addresswamqaZV, addressmAsaB4V, {from: accounts[1]});
		const addressZ8wIyim = await ControllerFdOqxAr.approveStrategy.call(addressqBfYlqC, addresseJWysr6, {from: accounts[0]});

		await expect(ControllerFdOqxAr.earn.call(addresstiuzuPq, uintORvcrLr, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addresszpgfWF = accounts[0]
		const ControllerbAroOYo = await Controller.new(addresszpgfWF, {from: accounts[0]});
		const addressG0bCgb = accounts[3]
		const addressEht34QN = accounts[0]
		const addressn3Q4u40 = accounts[2]
		const addressLAhFT0e = accounts[1]
		const addresseJ6w83b = accounts[4]
		const uintGCiLB5k = await ControllerbAroOYo.balanceOf.call(addressG0bCgb, {from: accounts[1]});
		const addressAIKgmNu = await ControllerbAroOYo.inCaseStrategyTokenGetStuck.call(addressn3Q4u40, addressEht34QN, {from: accounts[5]});
		const addressBpzMT0V = await ControllerbAroOYo.setRewards.call(addressLAhFT0e, {from: accounts[2]});
		const addressfJ33QBl = await ControllerbAroOYo.withdrawAll.call(addresseJ6w83b, {from: accounts[4]});

		await expect(ControllerbAroOYo.balanceOf.call(addressG0bCgb, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressnA1ZSd = accounts[0]
		const ControllerINCOtGB = await Controller.new(addressnA1ZSd, {from: accounts[3]});
		const addressLM1o4j8 = accounts[0]
		const addressWfdQBI4 = accounts[3]
		const addressTVUqYVM = accounts[0]
		const addresssugr6B = accounts[4]
		const addressIhscin = await ControllerINCOtGB.setOneSplit.call(addressLM1o4j8, {from: accounts[1]});
		const addressT1obBA6 = await ControllerINCOtGB.setConverter.call(addresssugr6B, addressTVUqYVM, addressWfdQBI4, {from: accounts[0]});

		await expect(ControllerINCOtGB.setOneSplit.call(addressLM1o4j8, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressQpv120 = accounts[2]
		const ControllerFdOqxAr = await Controller.new(addressQpv120, {from: accounts[1]});
		const addressMrDZCIM = accounts[4]
		const addresspsQ9XvK = "0x0000000000000000000000000000000000000001"
		const addressZ8wIyim = await ControllerFdOqxAr.approveStrategy.call(addresspsQ9XvK, addressMrDZCIM, {from: accounts[0]});

		await expect(ControllerFdOqxAr.approveStrategy.call(addresspsQ9XvK, addressMrDZCIM, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressJ5ZFs5H = accounts[0]
		const ControllersQaav4J = await Controller.new(addressJ5ZFs5H, {from: accounts[0]});
		const addressJkIAeAB = accounts[2]
		const addressbWSrGrJ = accounts[2]
		const addressartJd41 = accounts[4]
		const addressYgvXfCr = accounts[2]
		const uintkK365Bi = BigInt("814")
		const addressjOIvCUV = accounts[5]
		const addressjbvzGz = accounts[5]
		const addressXZmVshu = accounts[4]
		const addressBPGDcJS = "0x0000000000000000000000000000000000000001"
		const addressrjwODMQ = accounts[3]
		const addressvcpARy6 = await ControllersQaav4J.setRewards.call(addressJkIAeAB, {from: accounts[2]});
		const addressCt7Y9Ip = await ControllersQaav4J.setStrategist.call(addressbWSrGrJ, {from: accounts[0]});
		const addressuBmY5IK = await ControllersQaav4J.approveStrategy.call(addressYgvXfCr, addressartJd41, {from: accounts[4]});
		const addresszVS3lh9 = await ControllersQaav4J.inCaseTokensGetStuck.call(addressjOIvCUV, uintkK365Bi, {from: accounts[0]});
		const addressfTGwr6X = await ControllersQaav4J.revokeStrategy.call(addressXZmVshu, addressjbvzGz, {from: accounts[2]});
		const addressRZxthCN = await ControllersQaav4J.setStrategy.call(addressrjwODMQ, addressBPGDcJS, {from: accounts[1]});

		await expect(ControllersQaav4J.setRewards.call(addressJkIAeAB, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressBQ1wDW = accounts[4]
		const ControllerV1KKFVZ = await Controller.new(addressBQ1wDW, {from: accounts[4]});
		const addressTooPqfC = accounts[1]
		const addressUhywWs4 = accounts[3]
		const addresszsSvO8J = await ControllerV1KKFVZ.revokeStrategy.call(addressUhywWs4, addressTooPqfC, {from: accounts[0]});

		await expect(ControllerV1KKFVZ.revokeStrategy.call(addressUhywWs4, addressTooPqfC, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressGMGh4ou = accounts[2]
		const ControllerFdOqxAr = await Controller.new(addressGMGh4ou, {from: accounts[1]});
		const addressO3cCHbU = accounts[4]
		const addressjGR223U = accounts[2]
		const address1JJ6jn = await ControllerFdOqxAr.inCaseStrategyTokenGetStuck.call(addressjGR223U, addressO3cCHbU, {from: accounts[1]});

		await expect(ControllerFdOqxAr.inCaseStrategyTokenGetStuck.call(addressjGR223U, addressO3cCHbU, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressoC1Kvh1 = accounts[5]
		const ControllerUqFmVW8 = await Controller.new(addressoC1Kvh1, {from: accounts[1]});
		const addressjOGfLzP = accounts[5]
		const addressFHhPopC = accounts[1]
		const uintSqZRITL = BigInt("1203")
		const addressF19TsBY = accounts[0]
		const addressdsaB27f = accounts[2]
		const uintURXsLF8 = BigInt("1589")
		const addressMjvAcE2 = accounts[2]
		const uintzCl7K2w = BigInt("2000")
		const addressxlJToRj = accounts[3]
		const addressoCJe5lv = accounts[2]
		const addresspV0xYeo = await ControllerUqFmVW8.setVault.call(addressFHhPopC, addressjOGfLzP, {from: accounts[1]});
		const uintczG9e5s = await ControllerUqFmVW8.getExpectedReturn.call(addressdsaB27f, addressF19TsBY, uintSqZRITL, {from: accounts[2]});
		const addressjDWinUt = await ControllerUqFmVW8.earn.call(addressMjvAcE2, uintURXsLF8, {from: accounts[4]});
		const uintC2mFEVT = await ControllerUqFmVW8.getExpectedReturn.call(addressoCJe5lv, addressxlJToRj, uintzCl7K2w, {from: accounts[5]});

		await expect(ControllerUqFmVW8.getExpectedReturn.call(addressdsaB27f, addressF19TsBY, uintSqZRITL, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressnwGQcnf = accounts[4]
		const ControllerV1KKFVZ = await Controller.new(addressnwGQcnf, {from: accounts[4]});
		const uintYV5YTa = BigInt("1156")
		const addressl9c1bd0 = accounts[4]
		const addressDvwVUL8 = accounts[6]
		const addresssUlRsWx = accounts[4]
		const addressq1CDynV = await ControllerV1KKFVZ.withdraw.call(addressl9c1bd0, uintYV5YTa, {from: accounts[2]});
		const addressDYoJQ6h = await ControllerV1KKFVZ.setStrategy.call(addresssUlRsWx, addressDvwVUL8, {from: accounts[0]});

		await expect(ControllerV1KKFVZ.withdraw.call(addressl9c1bd0, uintYV5YTa, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressbJ9gtzP = accounts[4]
		const ControllerV1KKFVZ = await Controller.new(addressbJ9gtzP, {from: accounts[4]});
		const addressCQVgNQo = "0x0000000000000000000000000000000000000001"
		const addresskWtKKVl = accounts[2]
		const addresswr4wzHh = accounts[5]
		const addresspFEdTjp = accounts[4]
		const addressvQ5t2LE = await ControllerV1KKFVZ.setGovernance.call(addressCQVgNQo, {from: "0x0000000000000000000000000000000000000001"});
		const addressUx1hzaK = await ControllerV1KKFVZ.setStrategist.call(addresskWtKKVl, {from: accounts[1]});
		const addressDYoJQ6h = await ControllerV1KKFVZ.setStrategy.call(addresspFEdTjp, addresswr4wzHh, {from: accounts[0]});

		await expect(ControllerV1KKFVZ.setGovernance.call(addressCQVgNQo, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressRsxAsvZ = accounts[2]
		const ControllerFdOqxAr = await Controller.new(addressRsxAsvZ, {from: accounts[1]});
		const uintVkbYjz1 = BigInt("933")
		const addressm4HSYpp = accounts[0]
		const uintxw5doGs = BigInt("689")
		const addressOYHl9ZN = accounts[1]
		const addressG0bMMg = "0x0000000000000000000000000000000000000001"
		const addressOay7jEl = accounts[2]
		const uintdmJJ6rf = BigInt("1538")
		const addressTzZOkt8 = accounts[4]
		const addressGT4ze6g = accounts[2]
		const addressKn5U9LB = accounts[5]
		const addressrSXnGgF = accounts[4]
		const addressCKc4fk = accounts[2]
		const address3kPaxS = "0x0000000000000000000000000000000000000002"
		const addresstGshdVS = accounts[1]
		const addressLiDp2p6 = await ControllerFdOqxAr.inCaseTokensGetStuck.call(addressm4HSYpp, uintVkbYjz1, {from: accounts[0]});
		const addressQdUClN = await ControllerFdOqxAr.earn.call(addressOYHl9ZN, uintxw5doGs, {from: accounts[0]});
		const addressx5MBIzi = await ControllerFdOqxAr.setVault.call(addressOay7jEl, addressG0bMMg, {from: accounts[2]});
		const uintSC5gjRR = await ControllerFdOqxAr.setSplit.call(uintdmJJ6rf, {from: accounts[3]});
		const address1JJ6jn = await ControllerFdOqxAr.inCaseStrategyTokenGetStuck.call(addressGT4ze6g, addressTzZOkt8, {from: accounts[1]});
		const addressawowfx5 = await ControllerFdOqxAr.revokeStrategy.call(addressrSXnGgF, addressKn5U9LB, {from: accounts[4]});
		const addressZ8wIyim = await ControllerFdOqxAr.approveStrategy.call(address3kPaxS, addressCKc4fk, {from: accounts[0]});
		const addressqTcQE0G = await ControllerFdOqxAr.withdrawAll.call(addresstGshdVS, {from: accounts[4]});

		await expect(ControllerFdOqxAr.inCaseTokensGetStuck.call(addressm4HSYpp, uintVkbYjz1, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressKYUFMFs = accounts[3]
		const ControllerHWbVlqx = await Controller.new(addressKYUFMFs, {from: accounts[3]});
		const uintjEvm7hy = BigInt("1284")
		const addresslPVolp = accounts[1]
		const addresst4YW3z1 = accounts[1]
		const uintUxUokkQ = BigInt("1245")
		const addressTOOPqsn = accounts[2]
		const addressdKULoVF = accounts[1]
		const addressq3az0Pf = await ControllerHWbVlqx.yearn.call(addresst4YW3z1, addresslPVolp, uintjEvm7hy, {from: accounts[3]});
		const addressQgVCmd0 = await ControllerHWbVlqx.yearn.call(addressdKULoVF, addressTOOPqsn, uintUxUokkQ, {from: accounts[4]});

		await expect(ControllerHWbVlqx.yearn.call(addresst4YW3z1, addresslPVolp, uintjEvm7hy, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressonDzh0n = accounts[4]
		const ControllerV1KKFVZ = await Controller.new(addressonDzh0n, {from: accounts[4]});
		const uintPQovS2C = BigInt("1705")
		const addressty3fKvu = accounts[2]
		const addressCrHpEj4 = accounts[4]
		const addressjGEBaSs = accounts[6]
		const addressRNSv1dw = await ControllerV1KKFVZ.inCaseTokensGetStuck.call(addressty3fKvu, uintPQovS2C, {from: accounts[4]});
		const addressDYoJQ6h = await ControllerV1KKFVZ.setStrategy.call(addressjGEBaSs, addressCrHpEj4, {from: accounts[0]});

		await expect(ControllerV1KKFVZ.inCaseTokensGetStuck.call(addressty3fKvu, uintPQovS2C, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressAUW28Pg = accounts[2]
		const ControllerFdOqxAr = await Controller.new(addressAUW28Pg, {from: accounts[1]});
		const uint5LvguU = BigInt("1861")
		const uintSFf6BI6 = BigInt("689")
		const addressQytYMRC = accounts[3]
		const addressJ0JsMwI = accounts[0]
		const addressQxcZqa = accounts[3]
		const uintbPdGSEI = await ControllerFdOqxAr.setSplit.call(uint5LvguU, {from: accounts[0]});
		const addressQdUClN = await ControllerFdOqxAr.earn.call(addressQytYMRC, uintSFf6BI6, {from: accounts[0]});
		const address9HY5Kl = await ControllerFdOqxAr.inCaseStrategyTokenGetStuck.call(addressQxcZqa, addressJ0JsMwI, {from: accounts[3]});

		await expect(ControllerFdOqxAr.setSplit.call(uint5LvguU, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressRu5GJVg = accounts[2]
		const ControllerFdOqxAr = await Controller.new(addressRu5GJVg, {from: accounts[1]});
		const addressrXSVxdm = accounts[4]
		const addressfcbhoUs = accounts[2]
		const addressdamV3ZO = accounts[0]
		const uintaeFvQmB = BigInt("689")
		const addressZyMRZ6x = accounts[4]
		const address7c0NRZ = await ControllerFdOqxAr.setStrategy.call(addressfcbhoUs, addressrXSVxdm, {from: accounts[1]});
		const addressNZZXPjN = await ControllerFdOqxAr.setStrategist.call(addressdamV3ZO, {from: accounts[1]});
		const addressQdUClN = await ControllerFdOqxAr.earn.call(addressZyMRZ6x, uintaeFvQmB, {from: accounts[0]});

		await expect(ControllerFdOqxAr.setStrategy.call(addressfcbhoUs, addressrXSVxdm, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})