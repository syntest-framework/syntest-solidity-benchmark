const EdenCoin = artifacts.require("EdenCoin");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('EdenCoin', (accounts) => {
	it('test for EdenCoin', async () => {
		const EdenCoinAeH3wwl = await EdenCoin.new({from: accounts[2]});
		const uintcEZEWbJ = BigInt("1488")
		const addressWEp7fZl = accounts[5]
		const addressycqrPLP = "0x0000000000000000000000000000000000000001"
		const addressKQlAuSF = accounts[2]
		const uint9yFQVs = BigInt("506")
		const addressxDcDyJ0 = "0x0000000000000000000000000000000000000001"
		const boolUKltNqa = await EdenCoinAeH3wwl.transfer.call(addressWEp7fZl, uintcEZEWbJ, {from: accounts[2]});
		const uint256a7luCZ0 = await EdenCoinAeH3wwl.allowance.call(addressKQlAuSF, addressycqrPLP, {from: accounts[1]});
		const boolcgc8zzO = await EdenCoinAeH3wwl.increaseApproval.call(addressxDcDyJ0, uint9yFQVs, {from: accounts[2]});

		assert.equal(boolUKltNqa, true)
		assert.equal(boolcgc8zzO, true)
		assert.equal(uint256a7luCZ0, BigInt("0"))
	});

	it('test for EdenCoin', async () => {
		const EdenCoinFiDaeN5 = await EdenCoin.new({from: accounts[2]});
		const uintMJKl9y = BigInt("1570")
		const addressuxnM9Lk = accounts[4]
		const uintP0vnsu1 = BigInt("1071")
		const addressWiGmLKb = accounts[2]
		const uintQV9Tylm = BigInt("223")
		const addressTJ52tz7 = accounts[2]
		const uintLuygQo2 = BigInt("1645")
		const addressyzcWaZs = "0x0000000000000000000000000000000000000001"
		const uintpbKIYKW = BigInt("177")
		const addressSrtznpv = accounts[3]
		const boolCu4FjVb = await EdenCoinFiDaeN5.increaseApproval.call(addressuxnM9Lk, uintMJKl9y, {from: accounts[0]});
		const boolJDxZsG8 = await EdenCoinFiDaeN5.approve.call(addressWiGmLKb, uintP0vnsu1, {from: accounts[0]});
		const boolJUutQqS = await EdenCoinFiDaeN5.approve.call(addressTJ52tz7, uintQV9Tylm, {from: accounts[2]});
		const boolA5uJWxd = await EdenCoinFiDaeN5.transfer.call(addressyzcWaZs, uintLuygQo2, {from: accounts[2]});
		const boolwjOXyjp = await EdenCoinFiDaeN5.increaseApproval.call(addressSrtznpv, uintpbKIYKW, {from: accounts[4]});

		assert.equal(boolA5uJWxd, true)
		assert.equal(boolCu4FjVb, true)
		assert.equal(boolJDxZsG8, true)
		assert.equal(boolJUutQqS, true)
		assert.equal(boolwjOXyjp, true)
	});

	it('test for EdenCoin', async () => {
		const EdenCoinOBHpYdl = await EdenCoin.new({from: accounts[2]});
		const uintl1RkTN = BigInt("443")
		const addressBydOHLa = accounts[1]
		const addressRrKVPdr = accounts[3]
		const addressGGNGPNT = accounts[0]
		const boolseVZSi7 = await EdenCoinOBHpYdl.transferFrom.call(addressRrKVPdr, addressBydOHLa, uintl1RkTN, {from: accounts[1]});
		const uint256RT4mpdE = await EdenCoinOBHpYdl.balanceOf.call(addressGGNGPNT, {from: accounts[3]});

		await expect(EdenCoinOBHpYdl.transferFrom.call(addressRrKVPdr, addressBydOHLa, uintl1RkTN, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for EdenCoin', async () => {
		const EdenCoinvhcrZs = await EdenCoin.new({from: accounts[5]});
		const addressTONs9PB = accounts[4]
		const addressZyYgKRK = accounts[3]
		const addressWJXHCX1 = accounts[0]
		const uintXn9uwET = BigInt("289")
		const addressuJq8R73 = accounts[3]
		const uintHyfA3zX = BigInt("276")
		const addressF96Z5U = accounts[4]
		const addressoJL5K0W = accounts[0]
		const uint256pcLWyJh = await EdenCoinvhcrZs.allowance.call(addressZyYgKRK, addressTONs9PB, {from: accounts[4]});
		const uint256ynHqcCJ = await EdenCoinvhcrZs.balanceOf.call(addressWJXHCX1, {from: "0x0000000000000000000000000000000000000001"});
		const boolDWO1TF9 = await EdenCoinvhcrZs.increaseApproval.call(addressuJq8R73, uintXn9uwET, {from: accounts[1]});
		const boolb8OuuxO = await EdenCoinvhcrZs.transferFrom.call(addressoJL5K0W, addressF96Z5U, uintHyfA3zX, {from: accounts[0]});

		assert.equal(boolDWO1TF9, true)
		assert.equal(uint256pcLWyJh, BigInt("0"))
		assert.equal(uint256ynHqcCJ, BigInt("0"))
		await expect(EdenCoinvhcrZs.transferFrom.call(addressoJL5K0W, addressF96Z5U, uintHyfA3zX, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for EdenCoin', async () => {
		const EdenCoinyUwGujL = await EdenCoin.new({from: "0x0000000000000000000000000000000000000001"});
		const uintcO2ldxv = BigInt("1997")
		const addressjJ1VVAg = accounts[2]
		const uintqZ6vHNn = BigInt("1776")
		const addressurXZtA = accounts[3]
		const addressf5f1mzO = accounts[5]
		const uintPzkWf4B = BigInt("879")
		const addressIp7B69i = accounts[0]
		const boolzBrxwTd = await EdenCoinyUwGujL.transfer.call(addressjJ1VVAg, uintcO2ldxv, {from: accounts[1]});
		const boolRN2pgDm = await EdenCoinyUwGujL.transferFrom.call(addressf5f1mzO, addressurXZtA, uintqZ6vHNn, {from: accounts[2]});
		const booltZcNhWk = await EdenCoinyUwGujL.transfer.call(addressIp7B69i, uintPzkWf4B, {from: accounts[1]});
	});

	it('test for EdenCoin', async () => {
		const EdenCoincewIQD = await EdenCoin.new({from: accounts[4]});
		const uintVUzFJSx = BigInt("293")
		const addressUlNK88 = accounts[5]
		const uintpBtwk6m = BigInt("365")
		const addressDBl4IPd = accounts[4]
		const addressNKGDcl = accounts[0]
		const addressqo9rYHS = accounts[5]
		const uintOLGm3Y = BigInt("1823")
		const addressW3OSE7w = "0x0000000000000000000000000000000000000001"
		const uintAtsRmef = BigInt("894")
		const addressG2xdayX = accounts[0]
		const boolrwhRzk8 = await EdenCoincewIQD.increaseApproval.call(addressUlNK88, uintVUzFJSx, {from: accounts[1]});
		const boolbxjKoq = await EdenCoincewIQD.transfer.call(addressDBl4IPd, uintpBtwk6m, {from: accounts[4]});
		const uint256D0OgxiP = await EdenCoincewIQD.allowance.call(addressqo9rYHS, addressNKGDcl, {from: accounts[1]});
		const boolJK0cxSD = await EdenCoincewIQD.decreaseApproval.call(addressW3OSE7w, uintOLGm3Y, {from: accounts[1]});
		const boolZ4OdRAr = await EdenCoincewIQD.increaseApproval.call(addressG2xdayX, uintAtsRmef, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolJK0cxSD, true)
		assert.equal(boolZ4OdRAr, true)
		assert.equal(boolbxjKoq, true)
		assert.equal(boolrwhRzk8, true)
		assert.equal(uint256D0OgxiP, BigInt("0"))
	});

	it('test for EdenCoin', async () => {
		const EdenCoinDy6KJD0 = await EdenCoin.new({from: accounts[3]});
		const uintyZXrPN = BigInt("817")
		const addressdKxmtHX = accounts[0]
		const uintykwJUUR = BigInt("179")
		const addressB5hpPnT = accounts[5]
		const uintBmXC0x2 = BigInt("840")
		const addressQhV2N9q = accounts[2]
		const uintqbeXWuG = BigInt("319")
		const addressr6mzyV = accounts[2]
		const uintpZYwdim = BigInt("0")
		const addressq7ccUw = "0x0000000000000000000000000000000000000001"
		const addressraL5Ngv = accounts[1]
		const addressPcyxUui = accounts[4]
		const addressh6YqGpX = accounts[3]
		const uintMg5KMHA = BigInt("213")
		const addressHqKztvM = accounts[2]
		const uintgkigqI5 = BigInt("813")
		const addressLqX4C1k = "0x0000000000000000000000000000000000000001"
		const uintQjmTfUV = BigInt("765")
		const addresscEfCDpR = accounts[3]
		const uinteWueKzG = BigInt("1898")
		const addressO4CraOi = accounts[0]
		const uintdZVjlhI = BigInt("664")
		const addressFcRSc3r = accounts[1]
		const uintOeINBv = BigInt("2030")
		const addressgtONiuT = accounts[1]
		const boolfYRL1tT = await EdenCoinDy6KJD0.decreaseApproval.call(addressdKxmtHX, uintyZXrPN, {from: accounts[4]});
		const bool516rTI = await EdenCoinDy6KJD0.decreaseApproval.call(addressB5hpPnT, uintykwJUUR, {from: accounts[1]});
		const boolsDofn5F = await EdenCoinDy6KJD0.increaseApproval.call(addressQhV2N9q, uintBmXC0x2, {from: accounts[3]});
		const boolTgyC82q = await EdenCoinDy6KJD0.increaseApproval.call(addressr6mzyV, uintqbeXWuG, {from: accounts[0]});
		const boolEk5oaML = await EdenCoinDy6KJD0.decreaseApproval.call(addressq7ccUw, uintpZYwdim, {from: accounts[4]});
		const uint256maRbFq2 = await EdenCoinDy6KJD0.balanceOf.call(addressraL5Ngv, {from: accounts[3]});
		const uint256Mrm7OOy = await EdenCoinDy6KJD0.allowance.call(addressh6YqGpX, addressPcyxUui, {from: accounts[2]});
		const boolVOlBQ0e = await EdenCoinDy6KJD0.transfer.call(addressHqKztvM, uintMg5KMHA, {from: accounts[3]});
		const boolmHSHuWK = await EdenCoinDy6KJD0.increaseApproval.call(addressLqX4C1k, uintgkigqI5, {from: accounts[2]});
		const booldlQgAVq = await EdenCoinDy6KJD0.decreaseApproval.call(addresscEfCDpR, uintQjmTfUV, {from: accounts[2]});
		const boolH08uHbd = await EdenCoinDy6KJD0.approve.call(addressO4CraOi, uinteWueKzG, {from: accounts[2]});
		const boolOEKi4xl = await EdenCoinDy6KJD0.transfer.call(addressFcRSc3r, uintdZVjlhI, {from: accounts[5]});
		const boolIni5pWm = await EdenCoinDy6KJD0.approve.call(addressgtONiuT, uintOeINBv, {from: accounts[1]});

		assert.equal(bool516rTI, true)
		assert.equal(boolEk5oaML, true)
		assert.equal(boolH08uHbd, true)
		assert.equal(boolTgyC82q, true)
		assert.equal(boolVOlBQ0e, true)
		assert.equal(booldlQgAVq, true)
		assert.equal(boolfYRL1tT, true)
		assert.equal(boolmHSHuWK, true)
		assert.equal(boolsDofn5F, true)
		assert.equal(uint256Mrm7OOy, BigInt("0"))
		assert.equal(uint256maRbFq2, BigInt("0"))
		await expect(EdenCoinDy6KJD0.transfer.call(addressFcRSc3r, uintdZVjlhI, {from: accounts[5]})).to.be.rejectedWith(Error);
	});
})