const Liquidity_v8 = artifacts.require("Liquidity_v8");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Liquidity_v8', (accounts) => {
	it('test for Liquidity_v8', async () => {
		const stringXTsHDGD = "M4iB8BknngA6t5zvhdn9Bd3yQ85uPO9Us7A1jyotBxT2jyhYEV4DzkiTqlXMlgreQpSka3WSYENndeezYFgNif"
		const addressGmMdloq = accounts[4]
		const addressmn0B7lk = accounts[4]
		const uintw9646Ro = BigInt("1525")
		const uint938paL = BigInt("809")
		const Liquidity_v8HOB3fq = await Liquidity_v8.new(stringXTsHDGD, addressGmMdloq, addressmn0B7lk, uintw9646Ro, uint938paL, {from: accounts[2]});
		const uintVfQzEuK = BigInt("854")
		const uintMoNuOQ = BigInt("1696")
		const uinteSUtdfT = BigInt("1894")
		const addressPc30cKu = accounts[3]
		const boolIc8SlKI = await Liquidity_v8HOB3fq.stake.call(uintVfQzEuK, {from: "0x0000000000000000000000000000000000000001"});
		const boolIMmFl6G = await Liquidity_v8HOB3fq.addReward.call(uintMoNuOQ, {from: accounts[1]});
		const boolFMEx9tf = await Liquidity_v8HOB3fq.addReward.call(uinteSUtdfT, {from: accounts[3]});
		const boolQrtGES6 = await Liquidity_v8HOB3fq.isOwner.call({from: accounts[1]});
		const 
JbqSGF = await Liquidity_v8HOB3fq.userDeposits.call(addressPc30cKu, {from: accounts[3]});
	});

	it('test for Liquidity_v8', async () => {
		const stringG9gUzAc = "JRRf2U3BCWyd05f6y"
		const addresspWhd66C = accounts[0]
		const addressD2wWXJr = accounts[5]
		const uintxu53vnl = BigInt("1398")
		const uinth7qu0hr = BigInt("1719")
		const Liquidity_v8YdrseA = await Liquidity_v8.new(stringG9gUzAc, addresspWhd66C, addressD2wWXJr, uintxu53vnl, uinth7qu0hr, {from: accounts[1]});
		const addressj6yPbfQ = await Liquidity_v8YdrseA.owner.call({from: accounts[2]});
		const boolYqGoNeC = await Liquidity_v8YdrseA.withdraw.call({from: accounts[0]});
		await Liquidity_v8YdrseA.renounceOwnership.call({from: accounts[0]});
	});

	it('test for Liquidity_v8', async () => {
		const stringn86ULJy = "m4Z71ZvWEDhqXxsBzBR"
		const addresskeSEcv = accounts[0]
		const addresschCIGqt = accounts[1]
		const uintXGSkgl8 = BigInt("448")
		const uintyYo5Y1G = BigInt("801")
		const Liquidity_v8vt9tuRS = await Liquidity_v8.new(stringn86ULJy, addresskeSEcv, addresschCIGqt, uintXGSkgl8, uintyYo5Y1G, {from: accounts[1]});
		const addressFhUKfFU = accounts[4]
		const addressQ98ZCxa = accounts[1]
		const uintXTvzvCN = BigInt("1180")
		const addressOdpDwN8 = accounts[4]
		const addressUzIC8GU = await Liquidity_v8vt9tuRS.transferOwnership.call(addressFhUKfFU, {from: accounts[3]});
		const uint256td95M3n = await Liquidity_v8vt9tuRS.calculate.call(addressQ98ZCxa, {from: "0x0000000000000000000000000000000000000001"});
		const boolpPl8hC2 = await Liquidity_v8vt9tuRS.addReward.call(uintXTvzvCN, {from: accounts[3]});
		const 
vMX43zB = await Liquidity_v8vt9tuRS.userDeposits.call(addressOdpDwN8, {from: accounts[3]});
	});

	it('test for Liquidity_v8', async () => {
		const stringWSvuX42 = "6wQSpTat38UFzMm3BgUb8M9F8P8FE30hBGfQEQoQwKUpnuXqxlwc0UMgaqAubicjw1HNfU6hezBunAedmtTmNHNUygjElAfhRCe"
		const addressDIf5N6 = accounts[0]
		const addressSO9bu1Q = accounts[3]
		const uintU18xxER = BigInt("1893")
		const uintGteQy7R = BigInt("1168")
		const Liquidity_v8J0BTRNM = await Liquidity_v8.new(stringWSvuX42, addressDIf5N6, addressSO9bu1Q, uintU18xxER, uintGteQy7R, {from: accounts[2]});
		const uintZpzF5XG = BigInt("113")
		const boolShh6Xi4 = await Liquidity_v8J0BTRNM.emergencyWithdraw.call({from: accounts[4]});
		const boolLwWSwHZ = await Liquidity_v8J0BTRNM.withdraw.call({from: accounts[1]});
		const uint256NWLBMYK = await Liquidity_v8J0BTRNM.changeLockDuration.call(uintZpzF5XG, {from: accounts[2]});
		const bool3Ukw07 = await Liquidity_v8J0BTRNM.emergencyWithdraw.call({from: accounts[5]});
	});

	it('test for Liquidity_v8', async () => {
		const stringFiV9Yg = "ZTfokYGRwBWZNdFoDh5t11d1m6yAo6cjvtd5u4k7Cfh4FzAxq97okNyud5OMfq"
		const addressoucjsKl = accounts[1]
		const addresspynci64 = accounts[0]
		const uintnYZMD8t = BigInt("1446")
		const uintC53XlaX = BigInt("357")
		const Liquidity_v8n4Xb03 = await Liquidity_v8.new(stringFiV9Yg, addressoucjsKl, addresspynci64, uintnYZMD8t, uintC53XlaX, {from: accounts[1]});
		const addressWnrMXfQ = "0x0000000000000000000000000000000000000001"
		const addressniD4FaT = accounts[2]
		const 
PiTtbC = await Liquidity_v8n4Xb03.userDeposits.call(addressWnrMXfQ, {from: accounts[2]});
		const 
b5ubbrG = await Liquidity_v8n4Xb03.userDeposits.call(addressniD4FaT, {from: accounts[0]});
	});

	it('test for Liquidity_v8', async () => {
		const stringFiV9Yg = "ZTfokYGRwBWZNdFoDh5t11d1m6yAo6cjvtd5u4k7Cfh4FzAxq97okNyud5OMfq"
		const addressu482ej = accounts[1]
		const addressmmqhQWc = accounts[0]
		const uintLEBJFMw = BigInt("1446")
		const uintzZSFbQd = BigInt("357")
		const Liquidity_v8n4Xb03 = await Liquidity_v8.new(stringFiV9Yg, addressu482ej, addressmmqhQWc, uintLEBJFMw, uintzZSFbQd, {from: accounts[1]});
		const addresso4XXEEh = "0x0000000000000000000000000000000000000002"
		const addressHaF1gcI = accounts[2]
		const 
PiTtbC = await Liquidity_v8n4Xb03.userDeposits.call(addresso4XXEEh, {from: accounts[2]});
		const 
b5ubbrG = await Liquidity_v8n4Xb03.userDeposits.call(addressHaF1gcI, {from: accounts[0]});
		await Liquidity_v8n4Xb03.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for Liquidity_v8', async () => {
		const stringFiV9Yg = "ZTfokYGRwBWZNdFoDh5t11d1m6yAo6cjvtd5u4k7Cfh4FzAxq97okNyud5OMfq"
		const addressZsRFCQQ = accounts[1]
		const addresswynYMFP = accounts[0]
		const uintn6MuDpu = BigInt("1446")
		const uintlaCrz9U = BigInt("357")
		const Liquidity_v8n4Xb03 = await Liquidity_v8.new(stringFiV9Yg, addressZsRFCQQ, addresswynYMFP, uintn6MuDpu, uintlaCrz9U, {from: accounts[1]});
		const addresselpKhb2 = accounts[4]
		const addressz7sHuss = accounts[0]
		const addressADskUy = "0x0000000000000000000000000000000000000000"
		const addressBZ2jImk = accounts[0]
		const uint256cZsCV9E = await Liquidity_v8n4Xb03.calculate.call(addresselpKhb2, {from: accounts[4]});
		const 
b5PVBox = await Liquidity_v8n4Xb03.userDeposits.call(addressz7sHuss, {from: accounts[2]});
		const 
PiTtbC = await Liquidity_v8n4Xb03.userDeposits.call(addressADskUy, {from: accounts[2]});
		const 
b5ubbrG = await Liquidity_v8n4Xb03.userDeposits.call(addressBZ2jImk, {from: accounts[0]});
	});

	it('test for Liquidity_v8', async () => {
		const stringxruZqz8 = "TD89ZOiG6c3RmwIWWAXumDcJ21MVcQhOdgu8OVXEuAkUpQOTm6h6FVt7A8dc2"
		const addressbqeSdEZ = accounts[2]
		const addresssA3yLpt = accounts[2]
		const uintuiGpxou = BigInt("1602")
		const uintmECcswO = BigInt("915")
		const Liquidity_v8tjCWjAb = await Liquidity_v8.new(stringxruZqz8, addressbqeSdEZ, addresssA3yLpt, uintuiGpxou, uintmECcswO, {from: "0x0000000000000000000000000000000000000001"});
		const addressbj3vTIV = accounts[2]
		const uintNXjRGs = BigInt("979")
		const boolNOCMdG3 = await Liquidity_v8tjCWjAb.emergencyWithdraw.call({from: accounts[1]});
		const 
g8HkHcX = await Liquidity_v8tjCWjAb.userDeposits.call(addressbj3vTIV, {from: accounts[0]});
		const uint256WTq8WdT = await Liquidity_v8tjCWjAb.changeLockDuration.call(uintNXjRGs, {from: accounts[3]});
	});

	it('test for Liquidity_v8', async () => {
		const stringammSF0q = "TrEha8Nk1BcsOxkPbQNWlnKzDR2cpzmmMBdfvvHigG9x9ywkIn5CtqjI4O"
		const addressciLYXRs = accounts[4]
		const addressOmPO2Ee = accounts[2]
		const uintc6BRwaM = BigInt("1430")
		const uintSHjpRxQ = BigInt("1858")
		const Liquidity_v8vt8Sm9v = await Liquidity_v8.new(stringammSF0q, addressciLYXRs, addressOmPO2Ee, uintc6BRwaM, uintSHjpRxQ, {from: accounts[4]});
		await Liquidity_v8vt8Sm9v.renounceOwnership.call({from: accounts[4]});
		await Liquidity_v8vt8Sm9v.renounceOwnership.call({from: accounts[2]});
	});

	it('test for Liquidity_v8', async () => {
		const stringXBOc1A = "qbBKaNFpCyNgYEF4UvqDyd4G7"
		const addressWPz9RoN = accounts[3]
		const addressyyzw6Z1 = accounts[2]
		const uintimIY41 = BigInt("1742")
		const uintqxfDCRf = BigInt("107")
		const Liquidity_v8DZViNnf = await Liquidity_v8.new(stringXBOc1A, addressWPz9RoN, addressyyzw6Z1, uintimIY41, uintqxfDCRf, {from: accounts[2]});
		const addressLDg2Vuz = accounts[4]
		const addressoVuOTQJ = accounts[5]
		const uintg76nYaa = BigInt("2016")
		const uintbOTqYG = BigInt("1682")
		const uint256Fgo5qy9 = await Liquidity_v8DZViNnf.calculate.call(addressLDg2Vuz, {from: "0x0000000000000000000000000000000000000001"});
		const addressZWIfQ9e = await Liquidity_v8DZViNnf.transferOwnership.call(addressoVuOTQJ, {from: accounts[2]});
		const boolNPaYpDp = await Liquidity_v8DZViNnf.isOwner.call({from: accounts[4]});
		const booliaVERU7 = await Liquidity_v8DZViNnf.addReward.call(uintg76nYaa, {from: "0x0000000000000000000000000000000000000001"});
		const uint256XP62G0u = await Liquidity_v8DZViNnf.changeLockDuration.call(uintbOTqYG, {from: accounts[3]});
		const boolNgn4Qxe = await Liquidity_v8DZViNnf.withdraw.call({from: accounts[0]});
	});

	it('test for Liquidity_v8', async () => {
		const stringFiV9Yg = "ZTfokYGRwBWZNdFoDh5t11d1m6yAo6cjvtd5u4k7Cfh4FzAxq97okNyud5OMfq"
		const addressbTbb9BO = accounts[1]
		const addressix0fQc = accounts[0]
		const uintfGHNxUk = BigInt("1446")
		const uintJWkxWCZ = BigInt("357")
		const Liquidity_v8n4Xb03 = await Liquidity_v8.new(stringFiV9Yg, addressbTbb9BO, addressix0fQc, uintfGHNxUk, uintJWkxWCZ, {from: accounts[1]});
		const addressxMAsrkV = accounts[2]
		const uintVVpk82 = BigInt("197")
		const 
PiTtbC = await Liquidity_v8n4Xb03.userDeposits.call(addressxMAsrkV, {from: accounts[2]});
		const uint256tBwCsmq = await Liquidity_v8n4Xb03.changeLockDuration.call(uintVVpk82, {from: accounts[1]});
		await Liquidity_v8n4Xb03.onlyOwner.call({from: accounts[4]});
	});

	it('test for Liquidity_v8', async () => {
		const stringammSF0q = "TrEha8Nk1BcsOxkPbQNWlnKzDR2cpzmmMBdfvvHigG9x9ywkIn5CtqjI4O"
		const addressHRwlE2V = accounts[4]
		const addressgKSENXz = accounts[2]
		const uintt98PBvY = BigInt("1430")
		const uintRXtMOyG = BigInt("1858")
		const Liquidity_v8vt8Sm9v = await Liquidity_v8.new(stringammSF0q, addressHRwlE2V, addressgKSENXz, uintt98PBvY, uintRXtMOyG, {from: accounts[4]});
		const uinta5ypmqJ = BigInt("759")
		const uint64V0CMOdV = await Liquidity_v8vt8Sm9v.setRate.call(uinta5ypmqJ, {from: accounts[4]});
		await Liquidity_v8vt8Sm9v.renounceOwnership.call({from: accounts[2]});
	});
})