const MetaCoin = artifacts.require("MetaCoin");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MetaCoin', (accounts) => {
	it('test for MetaCoin', async () => {
		const MetaCoinOMfvCu = await MetaCoin.new({from: accounts[1]});
		const uintjk2WYnR = BigInt("632")
		const addressQkmGyer = accounts[0]
		const uintSDRo0Uh = BigInt("810")
		const addressVsDobZD = accounts[0]
		const uintEwakb3P = BigInt("1152")
		const addressHH44zOx = accounts[3]
		const bool5nG3iX = await MetaCoinOMfvCu.sendCoin.call(addressQkmGyer, uintjk2WYnR, {from: accounts[1]});
		const boolISYDMxo = await MetaCoinOMfvCu.sendCoin.call(addressVsDobZD, uintSDRo0Uh, {from: accounts[0]});
		const boolij09uo = await MetaCoinOMfvCu.sendCoin.call(addressHH44zOx, uintEwakb3P, {from: accounts[3]});

		assert.equal(bool5nG3iX, true)
		assert.equal(boolISYDMxo, false)
		assert.equal(boolij09uo, false)
	});

	it('test for MetaCoin', async () => {
		const MetaCoindIXkPD7 = await MetaCoin.new({from: "0x0000000000000000000000000000000000000001"});
		const uintEUDJEV = BigInt("1497")
		const addresssAfKXxH = "0x0000000000000000000000000000000000000001"
		const uintxqU7zDm = BigInt("1542")
		const addresszGbhsQ = accounts[2]
		const uintjm1XATG = BigInt("550")
		const addressNacpwwX = accounts[5]
		const boolpQMggMb = await MetaCoindIXkPD7.sendCoin.call(addresssAfKXxH, uintEUDJEV, {from: accounts[3]});
		const boolBfkpJjr = await MetaCoindIXkPD7.sendCoin.call(addresszGbhsQ, uintxqU7zDm, {from: accounts[0]});
		const boolyHrinh9 = await MetaCoindIXkPD7.sendCoin.call(addressNacpwwX, uintjm1XATG, {from: accounts[4]});
	});

	it('test for MetaCoin', async () => {
		const MetaCoinIV9aEHy = await MetaCoin.new({from: accounts[3]});
		const uintAi9fIvX = BigInt("518")
		const addresstIaIyvb = "0x0000000000000000000000000000000000000001"
		const uintGeCQSxZ = BigInt("0")
		const addressVdSsXPT = accounts[2]
		const uintZPM8GPj = BigInt("1857")
		const addressw6my5Cw = accounts[4]
		const boollvP2lvw = await MetaCoinIV9aEHy.sendCoin.call(addresstIaIyvb, uintAi9fIvX, {from: accounts[0]});
		const boolBcc6mDf = await MetaCoinIV9aEHy.sendCoin.call(addressVdSsXPT, uintGeCQSxZ, {from: accounts[4]});
		const boolPWq5JoI = await MetaCoinIV9aEHy.sendCoin.call(addressw6my5Cw, uintZPM8GPj, {from: accounts[1]});

		assert.equal(boolBcc6mDf, true)
		assert.equal(boolPWq5JoI, false)
		assert.equal(boollvP2lvw, false)
	});

	it('test for MetaCoin', async () => {
		const MetaCoinxQstwZ = await MetaCoin.new({from: accounts[0]});
		const uintxp6dbUV = BigInt("368")
		const addressC3PsOnr = accounts[0]
		const uintfsflIj7 = BigInt("16")
		const addressYCK9Lh = accounts[0]
		const uintv1WvHH1 = BigInt("1027")
		const addressMfx7Yog = accounts[2]
		const uintW6cCtjh = BigInt("1588")
		const addressCYEY70S = accounts[4]
		const uintGgP27S = BigInt("521")
		const addressYNQBIih = accounts[5]
		const uintLvKeQvs = BigInt("1794")
		const addresszR3pKBq = accounts[4]
		const uintH6eA1A = BigInt("350")
		const addressjjxFHnn = accounts[1]
		const uintyXvilkX = BigInt("2168")
		const addressA0QaSSr = accounts[10]
		const uintkuJTVlD = BigInt("601")
		const addressTgcFOHX = accounts[1]
		const uintM9hQhKw = BigInt("85")
		const addressBnFdGmi = accounts[4]
		const uinthUHYK8o = BigInt("631")
		const addresskiezQI5 = accounts[4]
		const uintQFPCptk = BigInt("1899")
		const addressyZYWwFe = accounts[0]
		const uintB6rKUty = BigInt("1729")
		const addressPJTuM47 = accounts[0]
		const uintZgBG5gT = BigInt("681")
		const addressal9yvWW = accounts[4]
		const uintAcxIHd = BigInt("110")
		const addressQ7FXtxx = accounts[4]
		const uintoW1bQTh = BigInt("685")
		const addressxvAqNlF = accounts[1]
		const uintB0GJyZj = BigInt("1492")
		const addressDCHEqS = accounts[2]
		const boolNhuLj7 = await MetaCoinxQstwZ.sendCoin.call(addressC3PsOnr, uintxp6dbUV, {from: accounts[3]});
		const booleT2CvBD = await MetaCoinxQstwZ.sendCoin.call(addressYCK9Lh, uintfsflIj7, {from: accounts[2]});
		const boolTPNUqOu = await MetaCoinxQstwZ.sendCoin.call(addressMfx7Yog, uintv1WvHH1, {from: accounts[2]});
		const booloFYp6bF = await MetaCoinxQstwZ.sendCoin.call(addressCYEY70S, uintW6cCtjh, {from: accounts[4]});
		const boolb967aEE = await MetaCoinxQstwZ.sendCoin.call(addressYNQBIih, uintGgP27S, {from: accounts[3]});
		const boolJmBYx5c = await MetaCoinxQstwZ.sendCoin.call(addresszR3pKBq, uintLvKeQvs, {from: accounts[0]});
		const boolE0SB8W = await MetaCoinxQstwZ.sendCoin.call(addressjjxFHnn, uintH6eA1A, {from: accounts[0]});
//		const boolmJPHYH0 = await MetaCoinxQstwZ.sendCoin.call(addressA0QaSSr, uintyXvilkX, {from: accounts[0]});
//		const boolq4Gpr3d = await MetaCoinxQstwZ.sendCoin.call(addressTgcFOHX, uintkuJTVlD, {from: accounts[2]});
//		const boolMvanaGa = await MetaCoinxQstwZ.sendCoin.call(addressBnFdGmi, uintM9hQhKw, {from: accounts[1]});
//		const booloX04ndZ = await MetaCoinxQstwZ.sendCoin.call(addresskiezQI5, uinthUHYK8o, {from: accounts[4]});
//		const boolysHCyVX = await MetaCoinxQstwZ.sendCoin.call(addressyZYWwFe, uintQFPCptk, {from: accounts[1]});
//		const boolr0lqp0I = await MetaCoinxQstwZ.sendCoin.call(addressPJTuM47, uintB6rKUty, {from: accounts[3]});
//		const boolGvsfIXL = await MetaCoinxQstwZ.sendCoin.call(addressal9yvWW, uintZgBG5gT, {from: accounts[5]});
//		const boolsCGcnG = await MetaCoinxQstwZ.sendCoin.call(addressQ7FXtxx, uintAcxIHd, {from: accounts[3]});
//		const boolw41S3RK = await MetaCoinxQstwZ.sendCoin.call(addressxvAqNlF, uintoW1bQTh, {from: accounts[0]});
//		const boolxAnwIgY = await MetaCoinxQstwZ.sendCoin.call(addressDCHEqS, uintB0GJyZj, {from: accounts[2]});

		assert.equal(boolE0SB8W, true)
		assert.equal(boolJmBYx5c, true)
		assert.equal(boolNhuLj7, false)
		assert.equal(boolTPNUqOu, false)
		assert.equal(boolb967aEE, false)
		assert.equal(booleT2CvBD, false)
		assert.equal(booloFYp6bF, false)
		await expect(MetaCoinxQstwZ.sendCoin.call(addressA0QaSSr, uintyXvilkX, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})