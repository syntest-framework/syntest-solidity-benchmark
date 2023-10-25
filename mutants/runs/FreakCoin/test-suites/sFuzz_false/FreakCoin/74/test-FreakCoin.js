const FreakCoin = artifacts.require("FreakCoin");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('FreakCoin', (accounts) => {
	it('test for FreakCoin', async () => {
		const FreakCoing8K0wCC = await FreakCoin.new({from: accounts[2]});
		const addressMiUlPag = accounts[3]
		const addressLiVl70 = accounts[4]
		const addressXXaGtMb = accounts[2]
		const addressgxHMyv4 = "0x0000000000000000000000000000000000000001"
		const addressKmJ4h0 = accounts[0]
		const uint256C5Dbg39 = await FreakCoing8K0wCC.balanceOf.call(addressMiUlPag, {from: accounts[0]});
		const uint256kjrdEJk = await FreakCoing8K0wCC.allowance.call(addressXXaGtMb, addressLiVl70, {from: accounts[0]});
		const uint256ug1lQzQ = await FreakCoing8K0wCC.allowance.call(addressKmJ4h0, addressgxHMyv4, {from: accounts[0]});

		assert.equal(uint256C5Dbg39, BigInt("0"))
		assert.equal(uint256kjrdEJk, BigInt("0"))
		assert.equal(uint256ug1lQzQ, BigInt("0"))
	});

	it('test for FreakCoin', async () => {
		const FreakCoinV5ifvaF = await FreakCoin.new({from: accounts[3]});
		const addressIwGMqBj = accounts[3]
		const uintMGFpqQJ = BigInt("997")
		const addressMSRl31P = accounts[4]
		const addressEXRXI9j = accounts[5]
		const addressTpenl1X = accounts[5]
		const addressdl2QCxm = "0x0000000000000000000000000000000000000001"
		const uint256OQFKIcH = await FreakCoinV5ifvaF.balanceOf.call(addressIwGMqBj, {from: accounts[0]});
		const boolaNRQRl4 = await FreakCoinV5ifvaF.transferFrom.call(addressEXRXI9j, addressMSRl31P, uintMGFpqQJ, {from: accounts[3]});
		const uint256V3CIVgb = await FreakCoinV5ifvaF.allowance.call(addressdl2QCxm, addressTpenl1X, {from: accounts[0]});

		assert.equal(uint256OQFKIcH, BigInt("1000000"))
		await expect(FreakCoinV5ifvaF.transferFrom.call(addressEXRXI9j, addressMSRl31P, uintMGFpqQJ, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for FreakCoin', async () => {
		const FreakCoin1xsWNh = await FreakCoin.new({from: accounts[4]});
		const addresskyZYydm = accounts[0]
		const addressuyx1VU = accounts[1]
		const addressovVDvDT = accounts[2]
		const addressvwbMUrs = accounts[0]
		const addressKilSfrI = await FreakCoin1xsWNh.uniswapAddress.call({from: accounts[1]});
		const uint256ZWulQfi = await FreakCoin1xsWNh.allowance.call(addressuyx1VU, addresskyZYydm, {from: accounts[2]});
		const uint256mGDbuKJ = await FreakCoin1xsWNh.allowance.call(addressvwbMUrs, addressovVDvDT, {from: accounts[0]});

		assert.equal(addressKilSfrI, 0x0000000000000000000000000000000000000000)
		assert.equal(uint256ZWulQfi, BigInt("0"))
		assert.equal(uint256mGDbuKJ, BigInt("0"))
	});

	it('test for FreakCoin', async () => {
		const FreakCoinmWNW6MK = await FreakCoin.new({from: accounts[2]});
		const addressNWkNsHj = accounts[1]
		const uintyjt59rg = BigInt("1534")
		const addressIRmLdR5 = "0x0000000000000000000000000000000000000001"
		const addressfFhL20p = accounts[0]
		const addressBfcTvWS = accounts[3]
		const uint256dsDdwXT = await FreakCoinmWNW6MK.allUserBalances.call(addressNWkNsHj, {from: accounts[1]});
		const bool98yIar = await FreakCoinmWNW6MK.transfer.call(addressIRmLdR5, uintyjt59rg, {from: accounts[2]});
		const uint256dzLke5k = await FreakCoinmWNW6MK.allowance.call(addressBfcTvWS, addressfFhL20p, {from: accounts[5]});

		await expect(FreakCoinmWNW6MK.allUserBalances.call(addressNWkNsHj, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for FreakCoin', async () => {
		const FreakCoinSbRRsS4 = await FreakCoin.new({from: accounts[2]});
		const addressTrTZmEJ = accounts[0]
		const uintGXHjB5M = BigInt("607")
		const addressrlFuE6s = accounts[4]
		const uintRiBvgku = BigInt("844")
		const addresslhWkg8k = accounts[3]
		const uint256QBJDbBD = await FreakCoinSbRRsS4.balanceOf.call(addressTrTZmEJ, {from: "0x0000000000000000000000000000000000000001"});
		const bool4fRjGv = await FreakCoinSbRRsS4.transfer.call(addressrlFuE6s, uintGXHjB5M, {from: accounts[3]});
		const boolHcKvSVn = await FreakCoinSbRRsS4.approve.call(addresslhWkg8k, uintRiBvgku, {from: accounts[5]});

		assert.equal(uint256QBJDbBD, BigInt("0"))
		await expect(FreakCoinSbRRsS4.transfer.call(addressrlFuE6s, uintGXHjB5M, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for FreakCoin', async () => {
		const FreakCoini0H9Saz = await FreakCoin.new({from: accounts[0]});
		const addressHVeXSy = accounts[2]
		const addressKZRLOPE = accounts[2]
		const addressRIacoSA = accounts[4]
		const uint256iNLtFSS = await FreakCoini0H9Saz.allowance.call(addressKZRLOPE, addressHVeXSy, {from: "0x0000000000000000000000000000000000000001"});
		const addressUg0ukh2 = await FreakCoini0H9Saz.setUniswapAddress.call(addressRIacoSA, {from: accounts[0]});

		assert.equal(uint256iNLtFSS, BigInt("0"))
	});

	it('test for FreakCoin', async () => {
		const FreakCoinO1gjZA = await FreakCoin.new({from: accounts[4]});
		const uint2yiBuD = BigInt("1496")
		const addresskIFsOGe = accounts[1]
		const addressLFwxgR = accounts[3]
		const addressUG8Q2m6 = accounts[4]
		const boolLJhRwRB = await FreakCoinO1gjZA.approve.call(addresskIFsOGe, uint2yiBuD, {from: accounts[1]});
		const uint256xrWgVbe = await FreakCoinO1gjZA.allowance.call(addressUG8Q2m6, addressLFwxgR, {from: accounts[0]});

		assert.equal(boolLJhRwRB, true)
		assert.equal(uint256xrWgVbe, BigInt("0"))
	});

	it('test for FreakCoin', async () => {
		const FreakCoinO1gjZA = await FreakCoin.new({from: accounts[4]});
		const addressNHoX30Z = accounts[3]
		const addressefF54Tj = accounts[4]
		const uintX4RjNYF = BigInt("297")
		const addressdmMoReM = accounts[0]
		const uintqnfPZTG = BigInt("10")
		const addressEzzjnj6 = accounts[0]
		const uint256xrWgVbe = await FreakCoinO1gjZA.allowance.call(addressefF54Tj, addressNHoX30Z, {from: accounts[0]});
		const boolTGiBe53 = await FreakCoinO1gjZA.approve.call(addressdmMoReM, uintX4RjNYF, {from: accounts[3]});
		const boolHzmIzFR = await FreakCoinO1gjZA.transfer.call(addressEzzjnj6, uintqnfPZTG, {from: accounts[4]});

		assert.equal(boolHzmIzFR, true)
		assert.equal(boolTGiBe53, true)
		assert.equal(uint256xrWgVbe, BigInt("0"))
	});

	it('test for FreakCoin', async () => {
		const FreakCoinIaqIvT5 = await FreakCoin.new({from: "0x0000000000000000000000000000000000000001"});
		const uintW4I4WQJ = BigInt("72")
		const addressuDktOTu = accounts[2]
		const addressZHFd5EJ = accounts[4]
		const addresskX1k32F = accounts[2]
		const addressYdSCNjd = accounts[0]
		const boolwWWk7S = await FreakCoinIaqIvT5.transfer.call(addressuDktOTu, uintW4I4WQJ, {from: accounts[5]});
		const uint256eMw6eDn = await FreakCoinIaqIvT5.balanceOf.call(addressZHFd5EJ, {from: accounts[4]});
		const addressQLxyUZt = await FreakCoinIaqIvT5.uniswapAddress.call({from: accounts[3]});
		const uint256oPSZ0gu = await FreakCoinIaqIvT5.allUserBalances.call(addresskX1k32F, {from: accounts[4]});
		const addressWLhtfNV = await FreakCoinIaqIvT5.setUniswapAddress.call(addressYdSCNjd, {from: accounts[2]});
	});

	it('test for FreakCoin', async () => {
		const FreakCoinO1gjZA = await FreakCoin.new({from: accounts[4]});
		const uintPDnU0Mc = BigInt("1449")
		const addressiTNN5Fp = accounts[5]
		const uintokDRsiC = BigInt("10")
		const addressTooX2Dy = accounts[1]
		const uinte4cpUQM = BigInt("1239")
		const addressh4DfDPi = accounts[4]
		const bool1x1JdA = await FreakCoinO1gjZA.approve.call(addressiTNN5Fp, uintPDnU0Mc, {from: accounts[0]});
		const boolHzmIzFR = await FreakCoinO1gjZA.transfer.call(addressTooX2Dy, uintokDRsiC, {from: accounts[4]});
		const boolILb6udk = await FreakCoinO1gjZA.transfer.call(addressh4DfDPi, uinte4cpUQM, {from: accounts[4]});

		assert.equal(bool1x1JdA, true)
		assert.equal(boolHzmIzFR, true)
		assert.equal(boolILb6udk, true)
	});
})