const FreakCoin = artifacts.require("FreakCoin");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('FreakCoin', (accounts) => {
	it('test for FreakCoin', async () => {
		const FreakCoinjTDm1JC = await FreakCoin.new({from: accounts[1]});
		const addressKe1GohV = accounts[3]
		const uintZXE8cfq = BigInt("1607")
		const addressFD2QcbJ = accounts[3]
		const addressJKINHid = await FreakCoinjTDm1JC.uniswapAddress.call({from: accounts[3]});
		const uint256HnYKv1t = await FreakCoinjTDm1JC.balanceOf.call(addressKe1GohV, {from: accounts[4]});
		const boolC752P9g = await FreakCoinjTDm1JC.approve.call(addressFD2QcbJ, uintZXE8cfq, {from: accounts[4]});

		assert.equal(addressJKINHid, 0x0000000000000000000000000000000000000000)
		assert.equal(boolC752P9g, true)
		assert.equal(uint256HnYKv1t, BigInt("0"))
	});

	it('test for FreakCoin', async () => {
		const FreakCoinGDs5lb = await FreakCoin.new({from: accounts[1]});
		const uintcBd1HfW = BigInt("435")
		const addresssT7md2l = accounts[2]
		const addressrl9USqF = accounts[1]
		const addresswz5yzwU = "0x0000000000000000000000000000000000000001"
		const booleAuXRvO = await FreakCoinGDs5lb.transfer.call(addresssT7md2l, uintcBd1HfW, {from: accounts[1]});
//		const addresssKNEQtJ = await FreakCoinGDs5lb.setUniswapAddress.call(addressrl9USqF, {from: accounts[2]});
//		const addresswkiDoPR = await FreakCoinGDs5lb.setUniswapAddress.call(addresswz5yzwU, {from: accounts[2]});

		assert.equal(booleAuXRvO, true)
		await expect(FreakCoinGDs5lb.setUniswapAddress.call(addressrl9USqF, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for FreakCoin', async () => {
		const FreakCoinpu36KIN = await FreakCoin.new({from: accounts[3]});
		const addressjTFeKuT = "0x0000000000000000000000000000000000000001"
		const uintdQU46vH = BigInt("1150")
		const addressx5swvp = accounts[0]
		const addresstdGunVL = "0x0000000000000000000000000000000000000001"
//		const uint256voX8e6Z = await FreakCoinpu36KIN.allUserBalances.call(addressjTFeKuT, {from: accounts[2]});
//		const bool64dpvR = await FreakCoinpu36KIN.approve.call(addressx5swvp, uintdQU46vH, {from: accounts[2]});
//		const uint256xVSgHNZ = await FreakCoinpu36KIN.allUserBalances.call(addresstdGunVL, {from: accounts[1]});

		await expect(FreakCoinpu36KIN.allUserBalances.call(addressjTFeKuT, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for FreakCoin', async () => {
		const FreakCoinzsYRciO = await FreakCoin.new({from: accounts[2]});
		const uintA3hqcIq = BigInt("1749")
		const addressEu9CPBy = accounts[5]
		const addressGFWV8cQ = accounts[1]
		const addresssjiRZjh = accounts[0]
		const addressBeuoUo5 = await FreakCoinzsYRciO.uniswapAddress.call({from: accounts[0]});
//		const boolFONuBFc = await FreakCoinzsYRciO.transferFrom.call(addressGFWV8cQ, addressEu9CPBy, uintA3hqcIq, {from: accounts[1]});
//		const uint256lLDzrO9 = await FreakCoinzsYRciO.allUserBalances.call(addresssjiRZjh, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256miUBwn0 = await FreakCoinzsYRciO.totalSupply.call({from: accounts[0]});
//		const uint256dUvUss6 = await FreakCoinzsYRciO.totalSupply.call({from: accounts[3]});

		assert.equal(addressBeuoUo5, 0x0000000000000000000000000000000000000000)
		await expect(FreakCoinzsYRciO.transferFrom.call(addressGFWV8cQ, addressEu9CPBy, uintA3hqcIq, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for FreakCoin', async () => {
		const FreakCoinBmlocqH = await FreakCoin.new({from: accounts[2]});
		const addressSaf2f4c = accounts[3]
		const addressv2NriY8 = "0x0000000000000000000000000000000000000001"
		const addressfmn43YQ = accounts[0]
		const addressXONjNl4 = accounts[4]
		const addressRWnYaAJ = accounts[2]
		const addressQJP7GZE = accounts[5]
		const addressjZkRpDk = accounts[3]
		const uint256W0uNlLY = await FreakCoinBmlocqH.allowance.call(addressv2NriY8, addressSaf2f4c, {from: accounts[1]});
		const uint256OjIE2wV = await FreakCoinBmlocqH.balanceOf.call(addressfmn43YQ, {from: accounts[2]});
		const uint256RloeGiW = await FreakCoinBmlocqH.balanceOf.call(addressXONjNl4, {from: accounts[5]});
		const uint256sx4vB1U = await FreakCoinBmlocqH.balanceOf.call(addressRWnYaAJ, {from: accounts[1]});
		const uint256ljaeOhx = await FreakCoinBmlocqH.allowance.call(addressjZkRpDk, addressQJP7GZE, {from: accounts[1]});

		assert.equal(uint256OjIE2wV, BigInt("0"))
		assert.equal(uint256RloeGiW, BigInt("0"))
		assert.equal(uint256W0uNlLY, BigInt("0"))
		assert.equal(uint256ljaeOhx, BigInt("0"))
		assert.equal(uint256sx4vB1U, BigInt("1000000"))
	});

	it('test for FreakCoin', async () => {
		const FreakCoinGDs5lb = await FreakCoin.new({from: accounts[1]});
		const uintZF8PwT1 = BigInt("435")
		const addressFV48lb9 = accounts[1]
		const booleAuXRvO = await FreakCoinGDs5lb.transfer.call(addressFV48lb9, uintZF8PwT1, {from: accounts[1]});
		const uint256xsYKPy = await FreakCoinGDs5lb.totalSupply.call({from: accounts[1]});

		assert.equal(booleAuXRvO, true)
		assert.equal(uint256xsYKPy, BigInt("1000000"))
	});

	it('test for FreakCoin', async () => {
		const FreakCoinGDs5lb = await FreakCoin.new({from: accounts[1]});
		const uintS9rPRRG = BigInt("435")
		const addresscB3Anww = accounts[2]
		const addressPNFzovL = accounts[4]
		const booleAuXRvO = await FreakCoinGDs5lb.transfer.call(addresscB3Anww, uintS9rPRRG, {from: accounts[1]});
		const addressFR3VdAP = await FreakCoinGDs5lb.setUniswapAddress.call(addressPNFzovL, {from: accounts[1]});

		assert.equal(booleAuXRvO, true)
	});

	it('test for FreakCoin', async () => {
		const FreakCoinSkJ8eXo = await FreakCoin.new({from: "0x0000000000000000000000000000000000000001"});
		const addressbkynyQz = accounts[0]
		const addressH7Z4Hni = accounts[1]
		const uintCwxM2GN = BigInt("1198")
		const addressenMLABf = accounts[4]
		const addressYxVaX1B = accounts[4]
		const addressFZQBJvV = accounts[1]
		const uintWxR4trp = BigInt("1100")
		const addressmllefZL = accounts[0]
		const uintdZNVD66 = BigInt("631")
		const addressrJNK0Py = accounts[2]
		const uint256x8bsd5u = await FreakCoinSkJ8eXo.allowance.call(addressH7Z4Hni, addressbkynyQz, {from: accounts[1]});
		const addresscdahU0W = await FreakCoinSkJ8eXo.uniswapAddress.call({from: accounts[0]});
		const booljrCE96K = await FreakCoinSkJ8eXo.transferFrom.call(addressYxVaX1B, addressenMLABf, uintCwxM2GN, {from: accounts[4]});
		const uint256Rgj31Sb = await FreakCoinSkJ8eXo.allUserBalances.call(addressFZQBJvV, {from: accounts[1]});
		const boolXDZ5bqH = await FreakCoinSkJ8eXo.approve.call(addressmllefZL, uintWxR4trp, {from: accounts[2]});
		const boolEQFmmCA = await FreakCoinSkJ8eXo.approve.call(addressrJNK0Py, uintdZNVD66, {from: accounts[1]});
	});
})