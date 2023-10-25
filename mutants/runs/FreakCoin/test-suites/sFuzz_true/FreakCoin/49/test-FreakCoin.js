const FreakCoin = artifacts.require("FreakCoin");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('FreakCoin', (accounts) => {
	it('test for FreakCoin', async () => {
		const FreakCoinZ8oJ1AV = await FreakCoin.new({from: accounts[3]});
		const uinty83R8sg = BigInt("302")
		const addressgUkvWIi = accounts[4]
		const addressTRrNgAM = accounts[3]
		const addresstm7tLcE = accounts[2]
		const addressXHvFZG5 = "0x0000000000000000000000000000000000000001"
		const addressBPj6jIK = accounts[4]
		const address2VQmiU = accounts[3]
		const addressLOunstA = "0x0000000000000000000000000000000000000001"
		const boolH36SDRJ = await FreakCoinZ8oJ1AV.approve.call(addressgUkvWIi, uinty83R8sg, {from: accounts[2]});
		const uint256N3pTOIZ = await FreakCoinZ8oJ1AV.balanceOf.call(addressTRrNgAM, {from: accounts[1]});
		const uint256NqPMD1j = await FreakCoinZ8oJ1AV.allowance.call(addressXHvFZG5, addresstm7tLcE, {from: accounts[3]});
		const uint256LvPKBeh = await FreakCoinZ8oJ1AV.balanceOf.call(addressBPj6jIK, {from: accounts[2]});
		const uint256XUR6O2W = await FreakCoinZ8oJ1AV.allowance.call(addressLOunstA, address2VQmiU, {from: accounts[4]});

		assert.equal(boolH36SDRJ, true)
		assert.equal(uint256LvPKBeh, BigInt("0"))
		assert.equal(uint256N3pTOIZ, BigInt("1000000"))
		assert.equal(uint256NqPMD1j, BigInt("0"))
		assert.equal(uint256XUR6O2W, BigInt("0"))
	});

	it('test for FreakCoin', async () => {
		const FreakCoinNoWFIp9 = await FreakCoin.new({from: accounts[0]});
		const addressITmNtH = accounts[0]
		const addressPRS57yS = accounts[1]
		const uinthLpIGE = BigInt("1247")
		const addressKSanWua = accounts[0]
		const addressn0UL536 = accounts[4]
		const addressyDH5Khr = "0x0000000000000000000000000000000000000001"
		const uintwNqNVi = BigInt("731")
		const addressHIzPyhj = accounts[1]
		const addressGqivhpE = accounts[4]
		const addressHBV8OTR = accounts[2]
		const uint256DubBnci = await FreakCoinNoWFIp9.allowance.call(addressPRS57yS, addressITmNtH, {from: accounts[0]});
		const boolJPlp9zX = await FreakCoinNoWFIp9.transferFrom.call(addressn0UL536, addressKSanWua, uinthLpIGE, {from: accounts[4]});
		const uint256Y5LerBO = await FreakCoinNoWFIp9.balanceOf.call(addressyDH5Khr, {from: accounts[4]});
		const boolEz7WAbD = await FreakCoinNoWFIp9.transferFrom.call(addressGqivhpE, addressHIzPyhj, uintwNqNVi, {from: accounts[1]});
		const uint256WUSXT3l = await FreakCoinNoWFIp9.allUserBalances.call(addressHBV8OTR, {from: accounts[1]});

		assert.equal(uint256DubBnci, BigInt("0"))
		await expect(FreakCoinNoWFIp9.transferFrom.call(addressn0UL536, addressKSanWua, uinthLpIGE, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for FreakCoin', async () => {
		const FreakCoinZ11hXiu = await FreakCoin.new({from: accounts[5]});
		const addressKGlvefQ = accounts[0]
		const uintNdezUvT = BigInt("1849")
		const addressF2EyyQn = accounts[2]
		const addressG89Sr1c = await FreakCoinZ11hXiu.setUniswapAddress.call(addressKGlvefQ, {from: accounts[1]});
		const boolFlB45Jo = await FreakCoinZ11hXiu.transfer.call(addressF2EyyQn, uintNdezUvT, {from: accounts[2]});

		await expect(FreakCoinZ11hXiu.setUniswapAddress.call(addressKGlvefQ, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for FreakCoin', async () => {
		const FreakCoinnXLSsF7 = await FreakCoin.new({from: accounts[1]});
		const addressg1Pa4RN = accounts[5]
		const uintNO2YqKz = BigInt("324")
		const addressGl5MEC9 = accounts[0]
		const addressqwx99lL = accounts[0]
		const addressGUdSWv = accounts[1]
		const uint256WYlx1yD = await FreakCoinnXLSsF7.allUserBalances.call(addressg1Pa4RN, {from: accounts[3]});
		const boolNucTSFk = await FreakCoinnXLSsF7.transferFrom.call(addressqwx99lL, addressGl5MEC9, uintNO2YqKz, {from: accounts[2]});
		const uint256IOr8Bc4 = await FreakCoinnXLSsF7.balanceOf.call(addressGUdSWv, {from: accounts[3]});

		await expect(FreakCoinnXLSsF7.allUserBalances.call(addressg1Pa4RN, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for FreakCoin', async () => {
		const FreakCoinjU6Ifo3 = await FreakCoin.new({from: accounts[1]});
		const addressOr17OL = accounts[4]
		const addresso7mLysv = accounts[2]
		const addressDsTMn9x = await FreakCoinjU6Ifo3.uniswapAddress.call({from: accounts[2]});
		const uint256u1WVEpu = await FreakCoinjU6Ifo3.allowance.call(addresso7mLysv, addressOr17OL, {from: accounts[0]});
		const addressGznS5TP = await FreakCoinjU6Ifo3.uniswapAddress.call({from: accounts[0]});
		const addressbJw1a6 = await FreakCoinjU6Ifo3.uniswapAddress.call({from: accounts[2]});

		assert.equal(addressDsTMn9x, 0x0000000000000000000000000000000000000000)
		assert.equal(addressGznS5TP, 0x0000000000000000000000000000000000000000)
		assert.equal(addressbJw1a6, 0x0000000000000000000000000000000000000000)
		assert.equal(uint256u1WVEpu, BigInt("0"))
	});

	it('test for FreakCoin', async () => {
		const FreakCointP11oaV = await FreakCoin.new({from: accounts[2]});
		const uinthc8zu2G = BigInt("398")
		const addressN6fDe8U = accounts[3]
		const addressvNqU3iY = "0x0000000000000000000000000000000000000001"
		const addressNZWboB4 = "0x0000000000000000000000000000000000000001"
		const uintp2gwP5H = BigInt("1747")
		const addressJz7NKBj = accounts[1]
		const addressoPKrMQn = accounts[0]
		const boolZYtn0Fv = await FreakCointP11oaV.transfer.call(addressN6fDe8U, uinthc8zu2G, {from: accounts[2]});
		const uint256a7Nqeqr = await FreakCointP11oaV.allowance.call(addressNZWboB4, addressvNqU3iY, {from: accounts[3]});
		const boolhnskZrs = await FreakCointP11oaV.transferFrom.call(addressoPKrMQn, addressJz7NKBj, uintp2gwP5H, {from: accounts[0]});

		assert.equal(boolZYtn0Fv, true)
		assert.equal(uint256a7Nqeqr, BigInt("0"))
		await expect(FreakCointP11oaV.transferFrom.call(addressoPKrMQn, addressJz7NKBj, uintp2gwP5H, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for FreakCoin', async () => {
		const FreakCointP11oaV = await FreakCoin.new({from: accounts[2]});
		const uintZhHUbUl = BigInt("414")
		const addresshR6mtEr = accounts[2]
		const uintbnF7P9 = BigInt("1747")
		const addressVAkya2c = accounts[1]
		const addressdy0tSpQ = accounts[0]
		const boolZYtn0Fv = await FreakCointP11oaV.transfer.call(addresshR6mtEr, uintZhHUbUl, {from: accounts[2]});
		const boolhnskZrs = await FreakCointP11oaV.transferFrom.call(addressdy0tSpQ, addressVAkya2c, uintbnF7P9, {from: accounts[0]});

		assert.equal(boolZYtn0Fv, true)
		await expect(FreakCointP11oaV.transferFrom.call(addressdy0tSpQ, addressVAkya2c, uintbnF7P9, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for FreakCoin', async () => {
		const FreakCoinWchpKPw = await FreakCoin.new({from: accounts[0]});
		const uintLhdcvOl = BigInt("1957")
		const addressPEhCOOu = "0x0000000000000000000000000000000000000001"
		const addressGFOVNjT = accounts[1]
		const uintmtfC8R = BigInt("1993")
		const addressRmWqS8 = "0x0000000000000000000000000000000000000001"
		const addressCqmffC1 = accounts[4]
		const addressLk1awoQ = accounts[1]
		const boolnTVPYY0 = await FreakCoinWchpKPw.approve.call(addressPEhCOOu, uintLhdcvOl, {from: accounts[1]});
		const uint256URJjmXB = await FreakCoinWchpKPw.totalSupply.call({from: accounts[3]});
		const addressJUmgQWC = await FreakCoinWchpKPw.uniswapAddress.call({from: accounts[1]});
		const addressNKU1ntp = await FreakCoinWchpKPw.setUniswapAddress.call(addressGFOVNjT, {from: accounts[0]});
		const boolb1xaHJz = await FreakCoinWchpKPw.transfer.call(addressRmWqS8, uintmtfC8R, {from: accounts[4]});
		const uint256wVZQhuo = await FreakCoinWchpKPw.allowance.call(addressLk1awoQ, addressCqmffC1, {from: accounts[5]});

		assert.equal(addressJUmgQWC, 0x0000000000000000000000000000000000000000)
		assert.equal(boolnTVPYY0, true)
		assert.equal(uint256URJjmXB, BigInt("1000000"))
		await expect(FreakCoinWchpKPw.transfer.call(addressRmWqS8, uintmtfC8R, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for FreakCoin', async () => {
		const FreakCoingspTbHJ = await FreakCoin.new({from: "0x0000000000000000000000000000000000000001"});
		const addressrh1WrG4 = accounts[5]
		const uintfwNgA1J = BigInt("362")
		const addressLmrEzj = accounts[4]
		const addressQdtdGIj = accounts[3]
		const uintC9iHXBO = BigInt("1091")
		const addressKKwKjPM = accounts[3]
		const uint256UnjXQGW = await FreakCoingspTbHJ.allUserBalances.call(addressrh1WrG4, {from: accounts[0]});
		const boolLnBdy6k = await FreakCoingspTbHJ.transferFrom.call(addressQdtdGIj, addressLmrEzj, uintfwNgA1J, {from: accounts[0]});
		const boolrQCtWfm = await FreakCoingspTbHJ.approve.call(addressKKwKjPM, uintC9iHXBO, {from: accounts[1]});
	});
})