const EdenCoin = artifacts.require("EdenCoin");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('EdenCoin', (accounts) => {
	it('test for EdenCoin', async () => {
		const EdenCoinqYEoLXA = await EdenCoin.new({from: accounts[0]});
		const uintKoDccI5 = BigInt("849")
		const addressY7qeSeU = accounts[2]
		const uinty8bHifX = BigInt("168")
		const address6PxMIN = accounts[1]
		const uintapp7Wv4 = BigInt("656")
		const addressDKD8kbF = accounts[1]
		const addresspGMeGuc = "0x0000000000000000000000000000000000000001"
		const uintHn8evBz = BigInt("1033")
		const addressTMTCzTq = accounts[3]
		const uintRSudavA = BigInt("513")
		const addressbmFXiGp = accounts[1]
		const boolVMYiAW0 = await EdenCoinqYEoLXA.increaseApproval.call(addressY7qeSeU, uintKoDccI5, {from: accounts[3]});
		const boolU1cG6xn = await EdenCoinqYEoLXA.transfer.call(address6PxMIN, uinty8bHifX, {from: accounts[0]});
//		const booliLr1tI = await EdenCoinqYEoLXA.transferFrom.call(addresspGMeGuc, addressDKD8kbF, uintapp7Wv4, {from: accounts[4]});
//		const booldCiXzGZ = await EdenCoinqYEoLXA.decreaseApproval.call(addressTMTCzTq, uintHn8evBz, {from: accounts[0]});
//		const boolJqyhmdp = await EdenCoinqYEoLXA.transfer.call(addressbmFXiGp, uintRSudavA, {from: accounts[2]});

		assert.equal(boolU1cG6xn, true)
		assert.equal(boolVMYiAW0, true)
		await expect(EdenCoinqYEoLXA.transferFrom.call(addresspGMeGuc, addressDKD8kbF, uintapp7Wv4, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for EdenCoin', async () => {
		const EdenCoinJst1Cyz = await EdenCoin.new({from: accounts[2]});
		const uintkjxKzJ = BigInt("1455")
		const addressSEA4yFJ = accounts[3]
		const uintux3fjIP = BigInt("1569")
		const addressqVbpBE0 = accounts[0]
		const uintS8C00Jd = BigInt("1147")
		const addressOvPa2tg = accounts[4]
		const uintuWbFDiJ = BigInt("424")
		const addresszAuqi9P = "0x0000000000000000000000000000000000000001"
		const uintWqIoosM = BigInt("63")
		const addressEWYfDH9 = accounts[2]
		const uintW1dvZyg = BigInt("912")
		const addressTbHTdWr = "0x0000000000000000000000000000000000000001"
		const addressmeY9WcD = accounts[1]
		const booli01Ajp4 = await EdenCoinJst1Cyz.approve.call(addressSEA4yFJ, uintkjxKzJ, {from: accounts[5]});
//		const boolTnAPa9J = await EdenCoinJst1Cyz.transfer.call(addressqVbpBE0, uintux3fjIP, {from: "0x0000000000000000000000000000000000000001"});
//		const boolU2dr81i = await EdenCoinJst1Cyz.increaseApproval.call(addressOvPa2tg, uintS8C00Jd, {from: accounts[5]});
//		const boolEaArHXN = await EdenCoinJst1Cyz.transfer.call(addresszAuqi9P, uintuWbFDiJ, {from: accounts[3]});
//		const boolEG0P8Cd = await EdenCoinJst1Cyz.approve.call(addressEWYfDH9, uintWqIoosM, {from: accounts[1]});
//		const boolJGPALxK = await EdenCoinJst1Cyz.transferFrom.call(addressmeY9WcD, addressTbHTdWr, uintW1dvZyg, {from: accounts[5]});

		assert.equal(booli01Ajp4, true)
		await expect(EdenCoinJst1Cyz.transfer.call(addressqVbpBE0, uintux3fjIP, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for EdenCoin', async () => {
		const EdenCoinRV33w7C = await EdenCoin.new({from: accounts[1]});
		const addressQ16HRnv = accounts[3]
		const addressuTFB6SX = accounts[0]
		const addressFAjaZ5O = accounts[3]
		const uintVdzsdA = BigInt("1109")
		const addresshyKP3TO = accounts[0]
		const addressLQJXGAd = accounts[2]
		const uint256f0khVzX = await EdenCoinRV33w7C.balanceOf.call(addressQ16HRnv, {from: accounts[1]});
		const uint256Ryo81mS = await EdenCoinRV33w7C.allowance.call(addressFAjaZ5O, addressuTFB6SX, {from: accounts[1]});
//		const boolNXD0Ukv = await EdenCoinRV33w7C.transferFrom.call(addressLQJXGAd, addresshyKP3TO, uintVdzsdA, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256Ryo81mS, BigInt("0"))
		assert.equal(uint256f0khVzX, BigInt("0"))
		await expect(EdenCoinRV33w7C.transferFrom.call(addressLQJXGAd, addresshyKP3TO, uintVdzsdA, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for EdenCoin', async () => {
		const EdenCoinT7Grz8 = await EdenCoin.new({from: accounts[5]});
		const uintro9Rxrt = BigInt("1766")
		const addressMYX3ShE = "0x0000000000000000000000000000000000000001"
		const uintgRITrE = BigInt("1149")
		const addressKt8Z5kb = accounts[0]
		const uintmgMcsu = BigInt("464")
		const addressZqDbWNl = "0x0000000000000000000000000000000000000001"
		const uint2odPwN = BigInt("1749")
		const addressJJZSdg = accounts[2]
		const boolGPAZ3JF = await EdenCoinT7Grz8.approve.call(addressMYX3ShE, uintro9Rxrt, {from: "0x0000000000000000000000000000000000000001"});
		const boolML8TN1T = await EdenCoinT7Grz8.decreaseApproval.call(addressKt8Z5kb, uintgRITrE, {from: accounts[1]});
//		const boolWQoxIJu = await EdenCoinT7Grz8.transfer.call(addressZqDbWNl, uintmgMcsu, {from: accounts[1]});
//		const boolbXT9C3r = await EdenCoinT7Grz8.transfer.call(addressJJZSdg, uint2odPwN, {from: accounts[4]});

		assert.equal(boolGPAZ3JF, true)
		assert.equal(boolML8TN1T, true)
		await expect(EdenCoinT7Grz8.transfer.call(addressZqDbWNl, uintmgMcsu, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for EdenCoin', async () => {
		const EdenCoinA2SQ0x = await EdenCoin.new({from: accounts[4]});
		const addressmomAlj = accounts[2]
		const addressP2OK46s = "0x0000000000000000000000000000000000000001"
		const uinteY8I1Ia = BigInt("976")
		const addressfc1fE3q = accounts[5]
		const addressa0J9tG = accounts[4]
		const uintAyzWtgd = BigInt("1222")
		const addressrfuMYik = accounts[2]
		const uint256zMxCFrN = await EdenCoinA2SQ0x.allowance.call(addressP2OK46s, addressmomAlj, {from: accounts[3]});
//		const booloVv2f4 = await EdenCoinA2SQ0x.transferFrom.call(addressa0J9tG, addressfc1fE3q, uinteY8I1Ia, {from: accounts[5]});
//		const boolDBMW0rt = await EdenCoinA2SQ0x.decreaseApproval.call(addressrfuMYik, uintAyzWtgd, {from: accounts[0]});

		assert.equal(uint256zMxCFrN, BigInt("0"))
		await expect(EdenCoinA2SQ0x.transferFrom.call(addressa0J9tG, addressfc1fE3q, uinteY8I1Ia, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for EdenCoin', async () => {
		const EdenCoinT4AgwEI = await EdenCoin.new({from: "0x0000000000000000000000000000000000000001"});
		const uintM73nqAR = BigInt("831")
		const addressiuJQGgo = accounts[2]
		const uintTOLcyfx = BigInt("673")
		const addressJ1Et0nh = accounts[5]
		const uint6k0WFh = BigInt("663")
		const addressrNB9LW4 = accounts[1]
		const uinto1md2io = BigInt("1348")
		const addressfC4BmwH = accounts[5]
		const uintIl5WVn = BigInt("270")
		const addressEVtjGL0 = accounts[3]
		const uintJVFMdLR = BigInt("442")
		const addressMLF181U = accounts[0]
		const boolXTr53I = await EdenCoinT4AgwEI.transfer.call(addressiuJQGgo, uintM73nqAR, {from: accounts[3]});
		const boolbmVZFqn = await EdenCoinT4AgwEI.transfer.call(addressJ1Et0nh, uintTOLcyfx, {from: accounts[3]});
		const boolUvGkSzq = await EdenCoinT4AgwEI.transfer.call(addressrNB9LW4, uint6k0WFh, {from: "0x0000000000000000000000000000000000000001"});
		const boolrwuVe4Z = await EdenCoinT4AgwEI.increaseApproval.call(addressfC4BmwH, uinto1md2io, {from: accounts[3]});
		const boolekkId3u = await EdenCoinT4AgwEI.approve.call(addressEVtjGL0, uintIl5WVn, {from: accounts[5]});
		const boolyyb7ndK = await EdenCoinT4AgwEI.decreaseApproval.call(addressMLF181U, uintJVFMdLR, {from: accounts[3]});
	});

	it('test for EdenCoin', async () => {
		const EdenCoinX0AS4i = await EdenCoin.new({from: accounts[5]});
		const uintlwotAI5 = BigInt("1801")
		const addressmAh86QA = accounts[3]
		const uintvueunsf = BigInt("1380")
		const addressJ8Dy1lm = accounts[3]
		const uintMqrksYk = BigInt("0")
		const addressRdn2kqe = accounts[5]
		const boolJ9IjxYK = await EdenCoinX0AS4i.increaseApproval.call(addressmAh86QA, uintlwotAI5, {from: accounts[0]});
		const boolz86YDf = await EdenCoinX0AS4i.approve.call(addressJ8Dy1lm, uintvueunsf, {from: accounts[4]});
		const booltL89pbl = await EdenCoinX0AS4i.decreaseApproval.call(addressRdn2kqe, uintMqrksYk, {from: accounts[5]});

		assert.equal(boolJ9IjxYK, true)
		assert.equal(booltL89pbl, true)
		assert.equal(boolz86YDf, true)
	});
})