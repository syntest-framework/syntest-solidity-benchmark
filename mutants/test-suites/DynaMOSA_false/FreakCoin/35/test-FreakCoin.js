const FreakCoin = artifacts.require("FreakCoin");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('FreakCoin', (accounts) => {
	it('test for FreakCoin', async () => {
		const FreakCoinPNrbr2f = await FreakCoin.new({from: accounts[0]});
		const addressmRp8HEK = "0x0000000000000000000000000000000000000001"
		const addressNggRIoJ = accounts[0]
		const addressvd01nx = accounts[1]
		const uinthZVv6TM = BigInt("778")
		const addresslIXjfxB = accounts[2]
		const addressrLosFTy = accounts[4]
		const addressCnS1uKg = accounts[0]
//		const uint256ztL87aX = await FreakCoinPNrbr2f.allUserBalances.call(addressmRp8HEK, {from: accounts[2]});
//		const uint256Ps6Rsmp = await FreakCoinPNrbr2f.allUserBalances.call(addressNggRIoJ, {from: accounts[3]});
//		const uint256STm0lVv = await FreakCoinPNrbr2f.allUserBalances.call(addressvd01nx, {from: accounts[3]});
//		const boolZVRHkt4 = await FreakCoinPNrbr2f.transfer.call(addresslIXjfxB, uinthZVv6TM, {from: accounts[0]});
//		const uint256sF0PlrY = await FreakCoinPNrbr2f.balanceOf.call(addressrLosFTy, {from: accounts[5]});
//		const addressKeo6Y20 = await FreakCoinPNrbr2f.setUniswapAddress.call(addressCnS1uKg, {from: accounts[4]});

		await expect(FreakCoinPNrbr2f.allUserBalances.call(addressmRp8HEK, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for FreakCoin', async () => {
		const FreakCoinJF8xtlO = await FreakCoin.new({from: accounts[2]});
		const uintmpKkMSz = BigInt("1261")
		const addressf9Uck1Q = accounts[5]
		const addressHfohd35 = accounts[3]
		const addresss6M9qvP = accounts[4]
		const addressZuooiV4 = accounts[5]
		const uintPXUb8DR = BigInt("1594")
		const addressZN8LZd = accounts[5]
		const addressHBiGnmJ = accounts[2]
		const addressIyhUt2v = accounts[0]
		const addressBKrCogJ = accounts[0]
		const addressfRsK8KL = accounts[4]
//		const boolIE8BAQ9 = await FreakCoinJF8xtlO.transferFrom.call(addressHfohd35, addressf9Uck1Q, uintmpKkMSz, {from: accounts[1]});
//		const uint256ViAqL1Y = await FreakCoinJF8xtlO.allUserBalances.call(addresss6M9qvP, {from: accounts[1]});
//		const uint256GSQgnK = await FreakCoinJF8xtlO.allUserBalances.call(addressZuooiV4, {from: accounts[3]});
//		const boollnBAxfG = await FreakCoinJF8xtlO.transferFrom.call(addressHBiGnmJ, addressZN8LZd, uintPXUb8DR, {from: accounts[3]});
//		const uint256E7mRaAW = await FreakCoinJF8xtlO.allUserBalances.call(addressIyhUt2v, {from: accounts[0]});
//		const uint256oDNaTuc = await FreakCoinJF8xtlO.allowance.call(addressfRsK8KL, addressBKrCogJ, {from: accounts[0]});

		await expect(FreakCoinJF8xtlO.transferFrom.call(addressHfohd35, addressf9Uck1Q, uintmpKkMSz, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for FreakCoin', async () => {
		const FreakCoinEvTQI6G = await FreakCoin.new({from: accounts[3]});
		const addressdKphvcV = accounts[0]
		const addressisYqV7y = "0x0000000000000000000000000000000000000001"
		const addressFjnHvFr = accounts[2]
		const addresslJ9avx8 = accounts[2]
		const uint256yu0Yih = await FreakCoinEvTQI6G.allowance.call(addressisYqV7y, addressdKphvcV, {from: "0x0000000000000000000000000000000000000001"});
		const uint256nnvX5OC = await FreakCoinEvTQI6G.balanceOf.call(addressFjnHvFr, {from: accounts[4]});
//		const addressipckXVC = await FreakCoinEvTQI6G.setUniswapAddress.call(addresslJ9avx8, {from: accounts[5]});

		assert.equal(uint256nnvX5OC, BigInt("0"))
		assert.equal(uint256yu0Yih, BigInt("0"))
		await expect(FreakCoinEvTQI6G.setUniswapAddress.call(addresslJ9avx8, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for FreakCoin', async () => {
		const FreakCoinOjPJZxU = await FreakCoin.new({from: accounts[0]});
		const uintu90EGYb = BigInt("1118")
		const addressTR5EY3F = accounts[1]
		const uintfZnz1Ws = BigInt("1255")
		const addressZ0OdlOv = accounts[4]
		const addressXKiIMV2 = accounts[0]
		const boolQKipIwy = await FreakCoinOjPJZxU.approve.call(addressTR5EY3F, uintu90EGYb, {from: accounts[3]});
//		const boolNWBcWg = await FreakCoinOjPJZxU.transferFrom.call(addressXKiIMV2, addressZ0OdlOv, uintfZnz1Ws, {from: accounts[3]});

		assert.equal(boolQKipIwy, true)
		await expect(FreakCoinOjPJZxU.transferFrom.call(addressXKiIMV2, addressZ0OdlOv, uintfZnz1Ws, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for FreakCoin', async () => {
		const FreakCoinqQfjqxH = await FreakCoin.new({from: accounts[4]});
		const addressHYZZ5cT = accounts[0]
		const addressq6PGkd = accounts[2]
		const addressZEzX60r = accounts[4]
		const uintgl4iBT = BigInt("1243")
		const addressBFXIDF4 = accounts[5]
		const addressjheOuHx = accounts[2]
		const addressNj8QWG7 = await FreakCoinqQfjqxH.uniswapAddress.call({from: accounts[3]});
		const uint256kNiFlOS = await FreakCoinqQfjqxH.allowance.call(addressq6PGkd, addressHYZZ5cT, {from: accounts[3]});
		const uint256nY5F2na = await FreakCoinqQfjqxH.balanceOf.call(addressZEzX60r, {from: accounts[0]});
//		const boolS1PH4WI = await FreakCoinqQfjqxH.transferFrom.call(addressjheOuHx, addressBFXIDF4, uintgl4iBT, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(addressNj8QWG7, 0x0000000000000000000000000000000000000000)
		assert.equal(uint256kNiFlOS, BigInt("0"))
		assert.equal(uint256nY5F2na, BigInt("1000000"))
		await expect(FreakCoinqQfjqxH.transferFrom.call(addressjheOuHx, addressBFXIDF4, uintgl4iBT, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for FreakCoin', async () => {
		const FreakCoinzHBIua = await FreakCoin.new({from: accounts[5]});
		const uintUXZc4ax = BigInt("2006")
		const addressTpAgWTN = accounts[5]
		const addressn0wYiDq = accounts[4]
		const addressOADOahS = accounts[0]
		const addresskpDmIBe = accounts[1]
		const addressj647Xuu = accounts[4]
//		const boolXpuuXyz = await FreakCoinzHBIua.transfer.call(addressTpAgWTN, uintUXZc4ax, {from: accounts[0]});
//		const uint256YSdmzIw = await FreakCoinzHBIua.allowance.call(addressOADOahS, addressn0wYiDq, {from: accounts[3]});
//		const addressUqkrJO3 = await FreakCoinzHBIua.setUniswapAddress.call(addresskpDmIBe, {from: accounts[2]});
//		const addresszvxj4rb = await FreakCoinzHBIua.setUniswapAddress.call(addressj647Xuu, {from: accounts[3]});

		await expect(FreakCoinzHBIua.transfer.call(addressTpAgWTN, uintUXZc4ax, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for FreakCoin', async () => {
		const FreakCoinZYR8PeF = await FreakCoin.new({from: "0x0000000000000000000000000000000000000001"});
		const uintPWxHQIw = BigInt("1547")
		const addressY4bT00T = "0x0000000000000000000000000000000000000001"
		const uintzazx81 = BigInt("1485")
		const addressh674K8 = accounts[4]
		const addresszY9Uhkj = "0x0000000000000000000000000000000000000001"
		const addressBwSdJmr = accounts[0]
		const addressmuDirQ5 = await FreakCoinZYR8PeF.uniswapAddress.call({from: accounts[5]});
		const boolR3rBAcK = await FreakCoinZYR8PeF.transfer.call(addressY4bT00T, uintPWxHQIw, {from: "0x0000000000000000000000000000000000000001"});
		const boollQh2kX = await FreakCoinZYR8PeF.transferFrom.call(addresszY9Uhkj, addressh674K8, uintzazx81, {from: accounts[3]});
		const uint256jAypMii = await FreakCoinZYR8PeF.balanceOf.call(addressBwSdJmr, {from: accounts[4]});
		const addresslpCBhyd = await FreakCoinZYR8PeF.uniswapAddress.call({from: accounts[3]});
	});

	it('test for FreakCoin', async () => {
		const FreakCoinfYy9FNV = await FreakCoin.new({from: accounts[3]});
		const addressxf0mlDw = accounts[1]
		const uintgtJxh8b = BigInt("454")
		const addressweCJptg = accounts[0]
		const addressIwFJSMg = accounts[1]
		const addressDU2AP2d = accounts[3]
		const uintWkTq5BV = BigInt("1504")
		const addressICtgh9l = accounts[3]
		const uint256amIpNf = await FreakCoinfYy9FNV.balanceOf.call(addressxf0mlDw, {from: "0x0000000000000000000000000000000000000001"});
		const boolMtx2nPa = await FreakCoinfYy9FNV.approve.call(addressweCJptg, uintgtJxh8b, {from: accounts[5]});
		const uint256ToWNiZ = await FreakCoinfYy9FNV.allowance.call(addressDU2AP2d, addressIwFJSMg, {from: accounts[2]});
		const boolKaWcWR0 = await FreakCoinfYy9FNV.transfer.call(addressICtgh9l, uintWkTq5BV, {from: accounts[3]});
		const uint256Xra41B7 = await FreakCoinfYy9FNV.totalSupply.call({from: accounts[0]});

		assert.equal(boolKaWcWR0, true)
		assert.equal(boolMtx2nPa, true)
		assert.equal(uint256ToWNiZ, BigInt("0"))
		assert.equal(uint256Xra41B7, BigInt("1000000"))
		assert.equal(uint256amIpNf, BigInt("0"))
	});

	it('test for FreakCoin', async () => {
		const FreakCoinfYy9FNV = await FreakCoin.new({from: accounts[3]});
		const addressrQeXgb = accounts[1]
		const uintQqaAqiy = BigInt("454")
		const addressy4qAwe = accounts[1]
		const addressugjM7Ry = accounts[1]
		const addressuvN3TnL = accounts[3]
		const uintQr34Ixl = BigInt("1504")
		const addresswksqYX1 = accounts[4]
		const uintn95e37Q = BigInt("1954")
		const addressijFLfEV = accounts[0]
		const uint256amIpNf = await FreakCoinfYy9FNV.balanceOf.call(addressrQeXgb, {from: "0x0000000000000000000000000000000000000001"});
		const boolMtx2nPa = await FreakCoinfYy9FNV.approve.call(addressy4qAwe, uintQqaAqiy, {from: accounts[5]});
		const uint256ToWNiZ = await FreakCoinfYy9FNV.allowance.call(addressuvN3TnL, addressugjM7Ry, {from: accounts[2]});
		const boolKaWcWR0 = await FreakCoinfYy9FNV.transfer.call(addresswksqYX1, uintQr34Ixl, {from: accounts[3]});
//		const boolsCIMFuH = await FreakCoinfYy9FNV.transfer.call(addressijFLfEV, uintn95e37Q, {from: accounts[4]});
//		const uint256Xra41B7 = await FreakCoinfYy9FNV.totalSupply.call({from: accounts[0]});

		assert.equal(boolKaWcWR0, true)
		assert.equal(boolMtx2nPa, true)
		assert.equal(uint256ToWNiZ, BigInt("0"))
		assert.equal(uint256amIpNf, BigInt("0"))
		await expect(FreakCoinfYy9FNV.transfer.call(addressijFLfEV, uintn95e37Q, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})