const FreakCoin = artifacts.require("FreakCoin");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('FreakCoin', (accounts) => {
	it('test for FreakCoin', async () => {
		const FreakCoinUxzp5bS = await FreakCoin.new({from: accounts[3]});
		const uintLZr9UY = BigInt("390")
		const addresssgzpK2v = accounts[1]
		const addresskh8lpQ6 = accounts[5]
		const addressO6GF9u = accounts[3]
		const addressSRnlojD = accounts[3]
		const addressXiB9Hi3 = accounts[2]
		const boole6SNKG1 = await FreakCoinUxzp5bS.transferFrom.call(addresskh8lpQ6, addresssgzpK2v, uintLZr9UY, {from: accounts[2]});
		const uint256r03xYbu = await FreakCoinUxzp5bS.allowance.call(addressSRnlojD, addressO6GF9u, {from: accounts[2]});
		const uint256Eum9CDu = await FreakCoinUxzp5bS.allUserBalances.call(addressXiB9Hi3, {from: accounts[3]});
		const addressIIK73LC = await FreakCoinUxzp5bS.uniswapAddress.call({from: accounts[0]});

		await expect(FreakCoinUxzp5bS.transferFrom.call(addresskh8lpQ6, addresssgzpK2v, uintLZr9UY, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for FreakCoin', async () => {
		const FreakCoingk0xZ7c = await FreakCoin.new({from: accounts[1]});
		const addressgrhwzSK = accounts[4]
		const addressl98DQc3 = accounts[1]
		const addressvCJQDFM = accounts[2]
		const uintseYTPtN = BigInt("1567")
		const addressOciYfkk = accounts[4]
		const uint256ybBJw29 = await FreakCoingk0xZ7c.allowance.call(addressl98DQc3, addressgrhwzSK, {from: accounts[2]});
		const uint256qChenX1 = await FreakCoingk0xZ7c.allUserBalances.call(addressvCJQDFM, {from: accounts[3]});
		const bool10FKIB = await FreakCoingk0xZ7c.transfer.call(addressOciYfkk, uintseYTPtN, {from: accounts[3]});

		assert.equal(uint256ybBJw29, BigInt("0"))
		await expect(FreakCoingk0xZ7c.allUserBalances.call(addressvCJQDFM, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for FreakCoin', async () => {
		const FreakCoinqfsjeJS = await FreakCoin.new({from: accounts[1]});
		const addresslgYlBL = accounts[1]
		const addresszV12eUo = accounts[2]
		const addressnTfG4q7 = "0x0000000000000000000000000000000000000001"
		const uinttfXE0ou = BigInt("751")
		const addressQeOlQon = accounts[0]
		const uint256KwmYarO = await FreakCoinqfsjeJS.allUserBalances.call(addresslgYlBL, {from: accounts[0]});
		const uint256XSE00JU = await FreakCoinqfsjeJS.balanceOf.call(addresszV12eUo, {from: accounts[1]});
		const uint256Nm26faf = await FreakCoinqfsjeJS.balanceOf.call(addressnTfG4q7, {from: "0x0000000000000000000000000000000000000001"});
		const boollmygR44 = await FreakCoinqfsjeJS.transfer.call(addressQeOlQon, uinttfXE0ou, {from: accounts[3]});

		assert.equal(uint256Nm26faf, BigInt("0"))
		assert.equal(uint256XSE00JU, BigInt("0"))
		await expect(FreakCoinqfsjeJS.transfer.call(addressQeOlQon, uinttfXE0ou, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for FreakCoin', async () => {
		const FreakCoinDoagKET = await FreakCoin.new({from: accounts[4]});
		const uint9M71yl = BigInt("1201")
		const addressRyTMlpJ = accounts[0]
		const uintNLEIcm1 = BigInt("1551")
		const addressZSNaLog = accounts[0]
		const addresstSntS0z = accounts[3]
		const boolVy7TGsd = await FreakCoinDoagKET.approve.call(addressRyTMlpJ, uint9M71yl, {from: accounts[4]});
		const addressDAgwcS = await FreakCoinDoagKET.uniswapAddress.call({from: accounts[0]});
		const boolW1IcIlI = await FreakCoinDoagKET.transfer.call(addressZSNaLog, uintNLEIcm1, {from: accounts[0]});
		const uint256at6fXhQ = await FreakCoinDoagKET.balanceOf.call(addresstSntS0z, {from: accounts[1]});

		assert.equal(addressDAgwcS, 0x0000000000000000000000000000000000000000)
		assert.equal(boolVy7TGsd, true)
		await expect(FreakCoinDoagKET.transfer.call(addressZSNaLog, uintNLEIcm1, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for FreakCoin', async () => {
		const FreakCoinQpAZlfl = await FreakCoin.new({from: accounts[1]});
		const uint1w3iqB = BigInt("1500")
		const addressBnDlvjF = accounts[1]
		const uintBeQvIi = BigInt("1772")
		const addressS4faHoU = accounts[3]
		const addresshrILmG = accounts[2]
		const addressQztH3NN = accounts[1]
		const addressim7C9Tc = accounts[0]
		const boolRCsFu9w = await FreakCoinQpAZlfl.transfer.call(addressBnDlvjF, uint1w3iqB, {from: accounts[1]});
		const booltfMPPHi = await FreakCoinQpAZlfl.transfer.call(addressS4faHoU, uintBeQvIi, {from: "0x0000000000000000000000000000000000000001"});
		const uint256dDKSM6T = await FreakCoinQpAZlfl.balanceOf.call(addresshrILmG, {from: accounts[1]});
		const uint256T6exM1o = await FreakCoinQpAZlfl.allowance.call(addressim7C9Tc, addressQztH3NN, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolRCsFu9w, true)
		await expect(FreakCoinQpAZlfl.transfer.call(addressS4faHoU, uintBeQvIi, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for FreakCoin', async () => {
		const FreakCoinQpAZlfl = await FreakCoin.new({from: accounts[1]});
		const uintvAJXaxp = BigInt("1500")
		const addresswzn8l8B = accounts[1]
		const addressepwnk1w = accounts[2]
		const addresscORU9I = accounts[0]
		const addressDKOOPIv = accounts[4]
		const addressM4dSXru = accounts[1]
		const addressBsXvoN = accounts[0]
		const boolRCsFu9w = await FreakCoinQpAZlfl.transfer.call(addresswzn8l8B, uintvAJXaxp, {from: accounts[1]});
		const uint256dDKSM6T = await FreakCoinQpAZlfl.balanceOf.call(addressepwnk1w, {from: accounts[1]});
		const addressOjLZCbC = await FreakCoinQpAZlfl.setUniswapAddress.call(addresscORU9I, {from: accounts[2]});
		const uint256qYO4I0v = await FreakCoinQpAZlfl.allUserBalances.call(addressDKOOPIv, {from: accounts[0]});
		const uint256T6exM1o = await FreakCoinQpAZlfl.allowance.call(addressBsXvoN, addressM4dSXru, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolRCsFu9w, true)
		assert.equal(uint256dDKSM6T, BigInt("0"))
		await expect(FreakCoinQpAZlfl.setUniswapAddress.call(addresscORU9I, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for FreakCoin', async () => {
		const FreakCoinJvKVvWo = await FreakCoin.new({from: "0x0000000000000000000000000000000000000001"});
		const addressqLONyYV = accounts[2]
		const addressYlIIs9o = accounts[1]
		const uintH96VS52 = BigInt("29")
		const addressrUKRa6F = accounts[3]
		const uintP7LwHG2 = BigInt("1517")
		const addresscE7eGS = "0x0000000000000000000000000000000000000001"
		const addressRwadxd8 = accounts[5]
		const uintiF2htyD = BigInt("690")
		const addressE0B0VDu = "0x0000000000000000000000000000000000000001"
		const addressarjOGMs = accounts[2]
		const uintT91wt4H = BigInt("438")
		const addresskQSZ6Zk = accounts[2]
		const addressTzQ1TCU = accounts[1]
		const uint256yfXs2kq = await FreakCoinJvKVvWo.allowance.call(addressYlIIs9o, addressqLONyYV, {from: accounts[3]});
		const boolXp7gnv5 = await FreakCoinJvKVvWo.approve.call(addressrUKRa6F, uintH96VS52, {from: accounts[3]});
		const boolj9v0Bun = await FreakCoinJvKVvWo.transferFrom.call(addressRwadxd8, addresscE7eGS, uintP7LwHG2, {from: accounts[4]});
		const boolBw2vNeH = await FreakCoinJvKVvWo.approve.call(addressE0B0VDu, uintiF2htyD, {from: accounts[3]});
		const uint256D4Nq4E6 = await FreakCoinJvKVvWo.balanceOf.call(addressarjOGMs, {from: "0x0000000000000000000000000000000000000001"});
		const boolPsWT4zf = await FreakCoinJvKVvWo.transferFrom.call(addressTzQ1TCU, addresskQSZ6Zk, uintT91wt4H, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for FreakCoin', async () => {
		const FreakCoinQpAZlfl = await FreakCoin.new({from: accounts[1]});
		const uintjRnLLDy = BigInt("1500")
		const addressEO4aDHD = accounts[2]
		const uintSLZH83Q = BigInt("1772")
		const addressF0jv7my = accounts[3]
		const addressCFb9yCD = accounts[2]
		const uinto2iUEF = BigInt("701")
		const addressMAQS5KA = accounts[2]
		const boolRCsFu9w = await FreakCoinQpAZlfl.transfer.call(addressEO4aDHD, uintjRnLLDy, {from: accounts[1]});
		const booltfMPPHi = await FreakCoinQpAZlfl.transfer.call(addressF0jv7my, uintSLZH83Q, {from: "0x0000000000000000000000000000000000000001"});
		const uint256dDKSM6T = await FreakCoinQpAZlfl.balanceOf.call(addressCFb9yCD, {from: accounts[1]});
		const boolVfcfIAV = await FreakCoinQpAZlfl.approve.call(addressMAQS5KA, uinto2iUEF, {from: accounts[2]});

		assert.equal(boolRCsFu9w, true)
		await expect(FreakCoinQpAZlfl.transfer.call(addressF0jv7my, uintSLZH83Q, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for FreakCoin', async () => {
		const FreakCoinlJoy8eY = await FreakCoin.new({from: accounts[2]});
		const addresskmC8U8y = accounts[0]
		const addresslrWbRVz = accounts[2]
		const addressme3z2Rw = accounts[1]
		const uintGr1gZLZ = BigInt("586")
		const addressY6b43bh = accounts[1]
		const address3ad8zl = "0x0000000000000000000000000000000000000001"
		const uint256wVs8cvO = await FreakCoinlJoy8eY.allowance.call(addresslrWbRVz, addresskmC8U8y, {from: accounts[3]});
		const addresseAzEol = await FreakCoinlJoy8eY.setUniswapAddress.call(addressme3z2Rw, {from: accounts[2]});
		const boolOrtQQoj = await FreakCoinlJoy8eY.transferFrom.call(address3ad8zl, addressY6b43bh, uintGr1gZLZ, {from: accounts[1]});

		assert.equal(uint256wVs8cvO, BigInt("0"))
		await expect(FreakCoinlJoy8eY.transferFrom.call(address3ad8zl, addressY6b43bh, uintGr1gZLZ, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for FreakCoin', async () => {
		const FreakCoinQpAZlfl = await FreakCoin.new({from: accounts[1]});
		const uintKuP1vwZ = BigInt("1500")
		const addressb2Bcpti = accounts[1]
		const addressgC3oXfC = accounts[2]
		const addressWzxhOVg = accounts[1]
		const uintekyPDM = BigInt("0")
		const addressZmjGK3V = accounts[4]
		const addressguNmq1Q = accounts[1]
		const addressgShfJta = accounts[0]
		const addressiB05DKd = accounts[4]
		const addressAeia7hR = accounts[1]
		const addresswqFuUJ3 = accounts[0]
		const boolRCsFu9w = await FreakCoinQpAZlfl.transfer.call(addressb2Bcpti, uintKuP1vwZ, {from: accounts[1]});
		const addressTdu9Ki4 = await FreakCoinQpAZlfl.uniswapAddress.call({from: accounts[1]});
		const uint256dDKSM6T = await FreakCoinQpAZlfl.balanceOf.call(addressgC3oXfC, {from: accounts[1]});
		const uint256uBRJfM2 = await FreakCoinQpAZlfl.allUserBalances.call(addressWzxhOVg, {from: accounts[0]});
		const boolWDelO4 = await FreakCoinQpAZlfl.transferFrom.call(addressguNmq1Q, addressZmjGK3V, uintekyPDM, {from: accounts[3]});
		const addressOjLZCbC = await FreakCoinQpAZlfl.setUniswapAddress.call(addressgShfJta, {from: accounts[2]});
		const uint256qYO4I0v = await FreakCoinQpAZlfl.allUserBalances.call(addressiB05DKd, {from: accounts[0]});
		const uint256T6exM1o = await FreakCoinQpAZlfl.allowance.call(addresswqFuUJ3, addressAeia7hR, {from: "0x0000000000000000000000000000000000000001"});
		const addressMhkkgRT = await FreakCoinQpAZlfl.uniswapAddress.call({from: accounts[5]});

		assert.equal(addressTdu9Ki4, 0x0000000000000000000000000000000000000000)
		assert.equal(boolRCsFu9w, true)
		assert.equal(boolWDelO4, true)
		assert.equal(uint256dDKSM6T, BigInt("0"))
		await expect(FreakCoinQpAZlfl.setUniswapAddress.call(addressgShfJta, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})