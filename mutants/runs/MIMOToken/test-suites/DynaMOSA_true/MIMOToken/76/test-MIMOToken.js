const MIMOToken = artifacts.require("MIMOToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MIMOToken', (accounts) => {
	it('test for MIMOToken', async () => {
		const MIMOTokenPg7y2xe = await MIMOToken.new({from: accounts[4]});
		const uintSkObjOb = BigInt("923")
		const addressCAW4G2n = accounts[1]
		const addressuQHwdt = accounts[3]
		const addressJMXKg1u = accounts[2]
		const uint256lgbZVkb = await MIMOTokenPg7y2xe.setFeeRate.call(uintSkObjOb, {from: accounts[5]});
		const uintg4jgkbg = await MIMOTokenPg7y2xe.allowance.call(addressuQHwdt, addressCAW4G2n, {from: accounts[3]});
		const uintRSryXwG = await MIMOTokenPg7y2xe.balanceOf.call(addressJMXKg1u, {from: accounts[5]});

		assert.equal(uintRSryXwG, BigInt("0"))
		assert.equal(uintg4jgkbg, BigInt("0"))
	});

	it('test for MIMOToken', async () => {
		const MIMOTokenShgEk5Y = await MIMOToken.new({from: accounts[4]});
		const uintmlsm7jJ = BigInt("1638")
		const uintOBzenbO = BigInt("1424")
		const uint256mmrR96d = await MIMOTokenShgEk5Y.setMinFee.call(uintmlsm7jJ, {from: accounts[0]});
		const uint256Lg3uCAX = await MIMOTokenShgEk5Y.getFee.call(uintOBzenbO, {from: accounts[0]});

		assert.equal(uint256Lg3uCAX, BigInt("50000000000000000"))
	});

	it('test for MIMOToken', async () => {
		const MIMOTokenaeKXxfG = await MIMOToken.new({from: accounts[3]});
		const addresslxgOFqS = "0x0000000000000000000000000000000000000001"
		const uinth1QX9Og = BigInt("427")
		const addressyvWSHg = accounts[3]
		const uintWlaqXy = BigInt("412")
		const addressHctw8zc = accounts[5]
		const addressmXH8nv5 = accounts[2]
		const uintLTozide = BigInt("1673")
		const addressw2Gei0Z = accounts[0]
		const uintJcJZcYD = await MIMOTokenaeKXxfG.balanceOf.call(addresslxgOFqS, {from: accounts[4]});
		const uint256H8Pfzka = await MIMOTokenaeKXxfG.setFeeRate.call(uinth1QX9Og, {from: accounts[1]});
		const uintdonxZYu = await MIMOTokenaeKXxfG.balanceOf.call(addressyvWSHg, {from: accounts[1]});
		const uint256xLzLYHn = await MIMOTokenaeKXxfG.setFeeRate.call(uintWlaqXy, {from: accounts[4]});
		const uintVJybhJi = await MIMOTokenaeKXxfG.allowance.call(addressmXH8nv5, addressHctw8zc, {from: accounts[0]});
		const boolQcrIhiX = await MIMOTokenaeKXxfG.approve.call(addressw2Gei0Z, uintLTozide, {from: accounts[2]});

		assert.equal(boolQcrIhiX, true)
		assert.equal(uintJcJZcYD, BigInt("0"))
		assert.equal(uintVJybhJi, BigInt("0"))
		assert.equal(uintdonxZYu, BigInt("0"))
	});

	it('test for MIMOToken', async () => {
		const MIMOTokenJE3tnlL = await MIMOToken.new({from: accounts[4]});
		const uintFLkoNfx = BigInt("1486")
		const addressvPITNz = accounts[3]
		const uints4kUaaA = BigInt("1057")
		const addressTB1cRBK = "0x0000000000000000000000000000000000000001"
		const addressvCT3CXf = accounts[3]
		const addressQuqKtOo = accounts[4]
		const addressSlfGMK4 = accounts[0]
		const uintdjGoMKF = BigInt("1782")
		const boolFou7Ywo = await MIMOTokenJE3tnlL.approve.call(addressvPITNz, uintFLkoNfx, {from: accounts[2]});
		const boolZb3p6QR = await MIMOTokenJE3tnlL.transferFrom.call(addressvCT3CXf, addressTB1cRBK, uints4kUaaA, {from: "0x0000000000000000000000000000000000000001"});
		const uintTsTYXJk = await MIMOTokenJE3tnlL.allowance.call(addressSlfGMK4, addressQuqKtOo, {from: accounts[0]});
		const uint256kkeAYeV = await MIMOTokenJE3tnlL.getFee.call(uintdjGoMKF, {from: accounts[1]});

		assert.equal(boolFou7Ywo, true)
		await expect(MIMOTokenJE3tnlL.transferFrom.call(addressvCT3CXf, addressTB1cRBK, uints4kUaaA, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for MIMOToken', async () => {
		const MIMOTokenGFnLB2b = await MIMOToken.new({from: accounts[0]});
		const uintrYlIJN = BigInt("1990")
		const addresssihdUyo = accounts[2]
		const addressywVJfqC = accounts[0]
		const addressEuFESAm = accounts[1]
		const uintZMmxpFT = BigInt("1695")
		const uintUnRxjmO = BigInt("2018")
		const uintUiCFjyx = BigInt("1704")
		const boolNAGNAGz = await MIMOTokenGFnLB2b.transfer.call(addresssihdUyo, uintrYlIJN, {from: accounts[2]});
		const uintNwPj16P = await MIMOTokenGFnLB2b.allowance.call(addressEuFESAm, addressywVJfqC, {from: accounts[4]});
		const uintddDt6Mt = await MIMOTokenGFnLB2b.totalSupply.call({from: accounts[4]});
		const uint256W7vihQc = await MIMOTokenGFnLB2b.setFeeRate.call(uintZMmxpFT, {from: accounts[4]});
		const uint256Jb16TFV = await MIMOTokenGFnLB2b.getFee.call(uintUnRxjmO, {from: accounts[1]});
		const uint256JOCI9Fm = await MIMOTokenGFnLB2b.setFeeRate.call(uintUiCFjyx, {from: accounts[4]});

		await expect(MIMOTokenGFnLB2b.transfer.call(addresssihdUyo, uintrYlIJN, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for MIMOToken', async () => {
		const MIMOTokencXWNTzB = await MIMOToken.new({from: accounts[5]});
		const uintEaCbq5y = BigInt("1805")
		const uintc8zuE1i = BigInt("1081")
		const uint256FUVf0tN = await MIMOTokencXWNTzB.setFeeRate.call(uintEaCbq5y, {from: accounts[3]});
		const uint256CGPgDO1 = await MIMOTokencXWNTzB.getFee.call(uintc8zuE1i, {from: accounts[4]});
		const uintF7UZOe = await MIMOTokencXWNTzB.totalSupply.call({from: accounts[0]});

		assert.equal(uint256CGPgDO1, BigInt("50000000000000000"))
		assert.equal(uintF7UZOe, BigInt("16000000000000000000000000"))
	});

	it('test for MIMOToken', async () => {
		const MIMOTokenq7SgjSs = await MIMOToken.new({from: "0x0000000000000000000000000000000000000001"});
		const uintNqXGyQ = BigInt("383")
		const addressap1dY5B = accounts[2]
		const addressKbrSGFG = accounts[4]
		const uintHjwgnZB = BigInt("1602")
		const addressyYLc6I8 = accounts[3]
		const address76R0zi = accounts[4]
		const uinthSAZKg = BigInt("1572")
		const addressTxla4u4 = accounts[4]
		const addressvbZBmNM = accounts[0]
		const addressTd6D29w = accounts[0]
		const boolFcEAmd4 = await MIMOTokenq7SgjSs.transferFrom.call(addressKbrSGFG, addressap1dY5B, uintNqXGyQ, {from: "0x0000000000000000000000000000000000000001"});
		const boolSNUMAhm = await MIMOTokenq7SgjSs.transferFrom.call(address76R0zi, addressyYLc6I8, uintHjwgnZB, {from: accounts[0]});
		const boolZjEizt = await MIMOTokenq7SgjSs.approve.call(addressTxla4u4, uinthSAZKg, {from: accounts[1]});
		const uintxFhWg8U = await MIMOTokenq7SgjSs.allowance.call(addressTd6D29w, addressvbZBmNM, {from: accounts[3]});
	});

	it('test for MIMOToken', async () => {
		const MIMOTokenRuBbdP2 = await MIMOToken.new({from: accounts[3]});
		const uintebJIOXs = BigInt("528")
		const addressYeznkNV = "0x0000000000000000000000000000000000000000"
		const uintVIWR6OJ = BigInt("1572")
		const address1FoPU9 = "0x0000000000000000000000000000000000000001"
		const uintw1soVwS = BigInt("1853")
		const uintnRCJvMO = BigInt("1209")
		const addressOZlrrN6 = accounts[5]
		const addressBkuXRwV = accounts[2]
		const uintwSZTJrm = BigInt("402")
		const uintB2iZNk8 = BigInt("1985")
		const uintQGzBxES = BigInt("1297")
		const addressMxATpJl = accounts[2]
		const uintenNJJM2 = BigInt("487")
		const boolin6WNA1 = await MIMOTokenRuBbdP2.transfer.call(addressYeznkNV, uintebJIOXs, {from: accounts[4]});
		const boolKK0CzfI = await MIMOTokenRuBbdP2.transfer.call(address1FoPU9, uintVIWR6OJ, {from: accounts[1]});
		const uint256lqrlxQB = await MIMOTokenRuBbdP2.setFeeRate.call(uintw1soVwS, {from: accounts[2]});
		const boolkz2ViqS = await MIMOTokenRuBbdP2.transferFrom.call(addressBkuXRwV, addressOZlrrN6, uintnRCJvMO, {from: "0x0000000000000000000000000000000000000001"});
		const uint256pDneOS = await MIMOTokenRuBbdP2.setFeeRate.call(uintwSZTJrm, {from: accounts[3]});
		const uint256wv2aEA = await MIMOTokenRuBbdP2.setFeeRate.call(uintB2iZNk8, {from: accounts[0]});
		const uintNjqo9cK = await MIMOTokenRuBbdP2.totalSupply.call({from: accounts[5]});
		const booleIeFZWX = await MIMOTokenRuBbdP2.approve.call(addressMxATpJl, uintQGzBxES, {from: accounts[3]});
		const uint256QBEAFHt = await MIMOTokenRuBbdP2.getFee.call(uintenNJJM2, {from: accounts[0]});

		await expect(MIMOTokenRuBbdP2.transfer.call(addressYeznkNV, uintebJIOXs, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})