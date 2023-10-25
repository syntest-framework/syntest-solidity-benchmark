const Liquidity_v8 = artifacts.require("Liquidity_v8");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Liquidity_v8', (accounts) => {
	it('test for Liquidity_v8', async () => {
		const stringVQb4FpP = "Dz6luBfI8JKjrrOp9J8yEf4jGlmTCIE4lba9Uv"
		const addressFFrpwur = accounts[3]
		const addressSPc7j3Z = accounts[0]
		const uintYKDhuVm = BigInt("1772")
		const uintQhOXwx5 = BigInt("315")
		const Liquidity_v8vbhh4VR = await Liquidity_v8.new(stringVQb4FpP, addressFFrpwur, addressSPc7j3Z, uintYKDhuVm, uintQhOXwx5, {from: accounts[1]});
		const addressNsU50fJ = "0x0000000000000000000000000000000000000001"
		const uintQk0Xbjg = BigInt("27")
		const addressfc1Vp5Z = accounts[1]
		const uintEOmb8sR = BigInt("1156")
		const 
BjdtsQq = await Liquidity_v8vbhh4VR.userDeposits.call(addressNsU50fJ, {from: accounts[2]});
		const booloyD3OGy = await Liquidity_v8vbhh4VR.stake.call(uintQk0Xbjg, {from: accounts[3]});
		const boolhAVf07W = await Liquidity_v8vbhh4VR.withdraw.call({from: accounts[3]});
		const addressfanZQz6 = await Liquidity_v8vbhh4VR.transferOwnership.call(addressfc1Vp5Z, {from: accounts[3]});
		const uint256P5IZH6 = await Liquidity_v8vbhh4VR.changeLockDuration.call(uintEOmb8sR, {from: accounts[5]});
	});

	it('test for Liquidity_v8', async () => {
		const stringqYuJvZc = "Ga9CjTpXhro3wzrypDXCl8OVNrxKak5DrJ48dH3C7Kx4IYmN8hUKRg36VqgRM1wS6mhCRQDryuMD8sPNGUSsU7L"
		const addressxrzqoOC = accounts[3]
		const addressgHPx4jH = accounts[3]
		const uintPgXpbUK = BigInt("1727")
		const uint3rrA0L = BigInt("227")
		const Liquidity_v8dzmsY5I = await Liquidity_v8.new(stringqYuJvZc, addressxrzqoOC, addressgHPx4jH, uintPgXpbUK, uint3rrA0L, {from: "0x0000000000000000000000000000000000000001"});
		const addressx2GYMy9 = accounts[1]
		const addressEpSK5Ru = accounts[2]
		const 
APIo8y = await Liquidity_v8dzmsY5I.userDeposits.call(addressx2GYMy9, {from: accounts[4]});
		await Liquidity_v8dzmsY5I.onlyOwner.call({from: accounts[0]});
		const boolbYaWl7M = await Liquidity_v8dzmsY5I.withdraw.call({from: accounts[2]});
		const 
hjys4GN = await Liquidity_v8dzmsY5I.userDeposits.call(addressEpSK5Ru, {from: accounts[3]});
	});

	it('test for Liquidity_v8', async () => {
		const stringEiEq0t = "myEyRre5xZRpkJFfd"
		const addressHC5ooHi = accounts[4]
		const addressLnxeBv5 = accounts[0]
		const uintz9rOpSi = BigInt("989")
		const uintgb5Ntyd = BigInt("1898")
		const Liquidity_v8AkmoOoQ = await Liquidity_v8.new(stringEiEq0t, addressHC5ooHi, addressLnxeBv5, uintz9rOpSi, uintgb5Ntyd, {from: accounts[0]});
		const addressGanXL83 = accounts[1]
		const uintvco1OSP = BigInt("1643")
		const addresscNayN1e = await Liquidity_v8AkmoOoQ.transferOwnership.call(addressGanXL83, {from: accounts[0]});
		const boolOXE0ixW = await Liquidity_v8AkmoOoQ.withdraw.call({from: accounts[4]});
		const addresskl07epL = await Liquidity_v8AkmoOoQ.owner.call({from: accounts[2]});
		const uint64X3ammpv = await Liquidity_v8AkmoOoQ.setRate.call(uintvco1OSP, {from: accounts[3]});
	});

	it('test for Liquidity_v8', async () => {
		const stringEKQIrDd = "vIp23"
		const addressLq4NoEa = accounts[3]
		const addressG4jSx2Q = accounts[4]
		const uintT8aQGBY = BigInt("884")
		const uintz1NMyEK = BigInt("898")
		const Liquidity_v8BjrtUTH = await Liquidity_v8.new(stringEKQIrDd, addressLq4NoEa, addressG4jSx2Q, uintT8aQGBY, uintz1NMyEK, {from: accounts[0]});
		const uintvFOJlOc = BigInt("1086")
		const addressF5Fe1Vy = await Liquidity_v8BjrtUTH.owner.call({from: accounts[3]});
		const uint64oYdYxFC = await Liquidity_v8BjrtUTH.setRate.call(uintvFOJlOc, {from: accounts[4]});
		const boolcQHL343 = await Liquidity_v8BjrtUTH.emergencyWithdraw.call({from: accounts[0]});
	});

	it('test for Liquidity_v8', async () => {
		const stringlXi26QP = "J3gxQdbJcVtt2jKoladwLbqzS24QVw0R2y9SrXr7okucQC2DhSKEIyptsc"
		const addresslRhcGQl = accounts[2]
		const addressimXf7n = accounts[5]
		const uintq0KR1AM = BigInt("896")
		const uintTkw6ZF = BigInt("1068")
		const Liquidity_v8ieAC5k = await Liquidity_v8.new(stringlXi26QP, addresslRhcGQl, addressimXf7n, uintq0KR1AM, uintTkw6ZF, {from: accounts[5]});
		const address7qj9o2 = accounts[1]
		const addressCjQrYl = accounts[0]
		const uint256SsgK4E2 = await Liquidity_v8ieAC5k.calculate.call(address7qj9o2, {from: accounts[3]});
		const boolZCXe9bf = await Liquidity_v8ieAC5k.isOwner.call({from: "0x0000000000000000000000000000000000000001"});
		const 
CHKVog9 = await Liquidity_v8ieAC5k.userDeposits.call(addressCjQrYl, {from: accounts[4]});
		await Liquidity_v8ieAC5k.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for Liquidity_v8', async () => {
		const stringbRgeixW = "kjrnfP41M"
		const addresswpPs1jM = accounts[0]
		const addresss4pTEX = accounts[4]
		const uinttI2jxuR = BigInt("354")
		const uinthPKvBlS = BigInt("6")
		const Liquidity_v8fPsJbT9 = await Liquidity_v8.new(stringbRgeixW, addresswpPs1jM, addresss4pTEX, uinttI2jxuR, uinthPKvBlS, {from: accounts[5]});
		const addressUtStgOD = accounts[2]
		const addresslGSoCc = "0x0000000000000000000000000000000000000001"
		const addressOWZT472 = accounts[1]
		const 
DTanL64 = await Liquidity_v8fPsJbT9.userDeposits.call(addressUtStgOD, {from: accounts[4]});
		const 
XmZaIeC = await Liquidity_v8fPsJbT9.userDeposits.call(addresslGSoCc, {from: accounts[1]});
		const uint256pFRZCb7 = await Liquidity_v8fPsJbT9.calculate.call(addressOWZT472, {from: accounts[0]});
		const boolzkDNmpg = await Liquidity_v8fPsJbT9.emergencyWithdraw.call({from: accounts[4]});
	});

	it('test for Liquidity_v8', async () => {
		const stringIq801c0 = "xvHBGXdsl6YJXWswVwELal3h4TfnaGfpB"
		const addressmsfH8Lh = accounts[4]
		const addressTKl7ymI = accounts[2]
		const uintscoxZjU = BigInt("221")
		const uintP4PERr0 = BigInt("646")
		const Liquidity_v8Mh7Vn9L = await Liquidity_v8.new(stringIq801c0, addressmsfH8Lh, addressTKl7ymI, uintscoxZjU, uintP4PERr0, {from: accounts[1]});
		const addressPwxWy16 = accounts[4]
		const uintKwVofON = BigInt("1837")
		const uintEVe21T = BigInt("393")
		const uintxxIDdd8 = BigInt("1759")
		const uintRXUz2Ca = BigInt("756")
		const 
QfPtG63 = await Liquidity_v8Mh7Vn9L.userDeposits.call(addressPwxWy16, {from: accounts[3]});
		const uint64UPDfAVP = await Liquidity_v8Mh7Vn9L.setRate.call(uintKwVofON, {from: accounts[1]});
		const uint64HXGvsH = await Liquidity_v8Mh7Vn9L.setRate.call(uintEVe21T, {from: accounts[3]});
		const uint256eQ3nibf = await Liquidity_v8Mh7Vn9L.changeLockDuration.call(uintxxIDdd8, {from: accounts[1]});
		const uint64GXqIn94 = await Liquidity_v8Mh7Vn9L.setRate.call(uintRXUz2Ca, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for Liquidity_v8', async () => {
		const stringIq801c0 = "xvHBGXdsl6YJXWswVwELal3h4TfnaGfpB"
		const addressN3MtHHs = accounts[4]
		const addressgJFODhx = accounts[2]
		const uintdlZmhgj = BigInt("221")
		const uintci47G4J = BigInt("646")
		const Liquidity_v8Mh7Vn9L = await Liquidity_v8.new(stringIq801c0, addressN3MtHHs, addressgJFODhx, uintdlZmhgj, uintci47G4J, {from: accounts[1]});
		const uintlNJFwQR = BigInt("1355")
		const uintdBCVYYD = BigInt("424")
		const uint256LWl9Mub = await Liquidity_v8Mh7Vn9L.changeLockDuration.call(uintlNJFwQR, {from: accounts[1]});
		await Liquidity_v8Mh7Vn9L.onlyOwner.call({from: accounts[2]});
		const uint64HXGvsH = await Liquidity_v8Mh7Vn9L.setRate.call(uintdBCVYYD, {from: accounts[3]});
	});

	it('test for Liquidity_v8', async () => {
		const stringIq801c0 = "xvHBGXdsl6YJXWswVwELal3h4TfnaGfpB"
		const addressjG7gDeg = accounts[4]
		const addressfYmZjCo = accounts[2]
		const uintWTvQkzS = BigInt("221")
		const uintk5jDhMM = BigInt("646")
		const Liquidity_v8Mh7Vn9L = await Liquidity_v8.new(stringIq801c0, addressjG7gDeg, addressfYmZjCo, uintWTvQkzS, uintk5jDhMM, {from: accounts[1]});
		const addressyWQQRLF = accounts[5]
		const uintqtg4jez = BigInt("1364")
		await Liquidity_v8Mh7Vn9L.renounceOwnership.call({from: accounts[1]});
		const 
QfPtG63 = await Liquidity_v8Mh7Vn9L.userDeposits.call(addressyWQQRLF, {from: accounts[3]});
		const uint64spgCtSF = await Liquidity_v8Mh7Vn9L.setRate.call(uintqtg4jez, {from: accounts[3]});
	});
})