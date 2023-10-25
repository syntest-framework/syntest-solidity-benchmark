const TokenDispatch = artifacts.require("TokenDispatch");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('TokenDispatch', (accounts) => {
	it('test for TokenDispatch', async () => {
		const TokenDispatchKNKcWF = await TokenDispatch.new({from: accounts[4]});
		const uinthRX7Rhz = BigInt("63")
		const uintzvzask = BigInt("10")
		const uintPk7R9E5 = BigInt("192")
		const uint256cO6ZHhS = await TokenDispatchKNKcWF.nextClaimHeightOf.call(uinthRX7Rhz, {from: accounts[1]});
		const uint256OhJTbp = await TokenDispatchKNKcWF.nextClaimHeightOf.call(uintzvzask, {from: accounts[3]});
		const 
TfDduQ = await TokenDispatchKNKcWF.teamOf.call(uintPk7R9E5, {from: accounts[2]});
	});

	it('test for TokenDispatch', async () => {
		const TokenDispatchE6vPOTR = await TokenDispatch.new({from: accounts[3]});
		const uinthGR1ae7 = BigInt("241")
		const uintesQ3CmZ = BigInt("19")
		const uintqbBW1L = BigInt("95")
		const uinttIcyhSW = BigInt("218")
		const uint2563dDacO = await TokenDispatchE6vPOTR.balanceOf.call(uinthGR1ae7, {from: accounts[3]});
		const uint256sQr0rHJ = await TokenDispatchE6vPOTR.claimedOf.call(uintesQ3CmZ, {from: accounts[4]});
		const uint8gAp8RwY = await TokenDispatchE6vPOTR.claim.call(uintqbBW1L, {from: accounts[1]});
		const uint8bAUkGbz = await TokenDispatchE6vPOTR.claim.call(uinttIcyhSW, {from: accounts[2]});
	});

	it('test for TokenDispatch', async () => {
		const TokenDispatchtdLFsXO = await TokenDispatch.new({from: "0x0000000000000000000000000000000000000001"});
		const uintoiOzitW = BigInt("32")
		const addressywAg3RR = accounts[4]
		const addressEofahva = accounts[1]
		const uintMgAr1Y3 = BigInt("176")
		const addressFL1Z0Hv = "0x0000000000000000000000000000000000000001"
		const addressF0QWNdC = accounts[0]
		const uintDGipanL = BigInt("169")
		const uint256krMG7Zw = await TokenDispatchtdLFsXO.nextClaimHeightOf.call(uintoiOzitW, {from: accounts[5]});
		const uint256zXRmuRI = await TokenDispatchtdLFsXO.updateTeam.call(uintMgAr1Y3, addressEofahva, addressywAg3RR, {from: accounts[3]});
		const uint256X4NM0e = await TokenDispatchtdLFsXO.updateTeam.call(uintDGipanL, addressF0QWNdC, addressFL1Z0Hv, {from: accounts[0]});
	});

	it('test for TokenDispatch', async () => {
		const TokenDispatchqq5MI9 = await TokenDispatch.new({from: accounts[3]});
		const uinth50yoAj = BigInt("48")
		const uintil585XN = BigInt("99")
		const uinthU0dFS8 = BigInt("788")
		const uintv2q3Ay1 = BigInt("210")
		const addressW1RqFKV = accounts[4]
		const addresssbrLkWW = accounts[1]
		const uintxaK1vWM = BigInt("222")
		const uint8I4P4Vur = await TokenDispatchqq5MI9.claim.call(uinth50yoAj, {from: accounts[3]});
		const 
wG7xlMB = await TokenDispatchqq5MI9.teamOf.call(uintil585XN, {from: accounts[4]});
		const uintajwehCw = await TokenDispatchqq5MI9.signTransaction.call(uinthU0dFS8, {from: accounts[0]});
		const uint256tto0p4w = await TokenDispatchqq5MI9.balanceOf.call(uintv2q3Ay1, {from: accounts[3]});
		const uint256ZYK2l3 = await TokenDispatchqq5MI9.updateTeam.call(uintxaK1vWM, addresssbrLkWW, addressW1RqFKV, {from: accounts[1]});
	});

	it('test for TokenDispatch', async () => {
		const TokenDispatchaxtr7wk = await TokenDispatch.new({from: accounts[4]});
		const uintGBndxJG = BigInt("250")
		const uintLVRzBN = BigInt("90")
		const uintJ1fmfIi = BigInt("127")
		const uint256qOoK6Vo = await TokenDispatchaxtr7wk.claimedOf.call(uintGBndxJG, {from: "0x0000000000000000000000000000000000000001"});
		const uint256e0FoDAR = await TokenDispatchaxtr7wk.balanceOf.call(uintLVRzBN, {from: accounts[3]});
		const 
Lynjw5Y = await TokenDispatchaxtr7wk.teamOf.call(uintJ1fmfIi, {from: accounts[4]});
	});

	it('test for TokenDispatch', async () => {
		const TokenDispatchWDmp2PZ = await TokenDispatch.new({from: accounts[2]});
		const addressHKR1o3I = accounts[4]
		const addressQYngeBG = accounts[1]
		const uintreINVKp = BigInt("62")
		const uintq4obWrD = BigInt("197")
		const uintWVQOtog = BigInt("41")
		const addressBJEI2iq = accounts[4]
		const addressSSMLXi = accounts[1]
		const uintsFCOvsU = BigInt("224")
		const uintMBuDFI = BigInt("119")
		const uint256xetZNKR = await TokenDispatchWDmp2PZ.updateTeam.call(uintreINVKp, addressQYngeBG, addressHKR1o3I, {from: accounts[1]});
		const 
O9qhVuP = await TokenDispatchWDmp2PZ.teamOf.call(uintq4obWrD, {from: accounts[1]});
		const uint8KiVZoVE = await TokenDispatchWDmp2PZ.claim.call(uintWVQOtog, {from: accounts[1]});
		const uint256XISFsoi = await TokenDispatchWDmp2PZ.updateTeam.call(uintsFCOvsU, addressSSMLXi, addressBJEI2iq, {from: accounts[2]});
		const 
oJWT5Py = await TokenDispatchWDmp2PZ.teamOf.call(uintMBuDFI, {from: accounts[0]});
	});

	it('test for TokenDispatch', async () => {
		const TokenDispatchN6rk0P7 = await TokenDispatch.new({from: accounts[1]});
		const uintqRGfCUd = BigInt("161")
		const uinteRSx3q2 = BigInt("154")
		const uint9grL3b = BigInt("154")
		const uintLnQQSy = BigInt("44")
		const addressxlPJ586 = accounts[0]
		const addressoEjeLoz = accounts[2]
		const uintB8r5hS0 = BigInt("65")
		const 
ybuJ9zy = await TokenDispatchN6rk0P7.teamOf.call(uintqRGfCUd, {from: accounts[0]});
		const uint256usxP0q = await TokenDispatchN6rk0P7.claimedOf.call(uinteRSx3q2, {from: accounts[3]});
		const uint256x6TYnmO = await TokenDispatchN6rk0P7.balanceOf.call(uint9grL3b, {from: "0x0000000000000000000000000000000000000001"});
		const uint8Au8j1r = await TokenDispatchN6rk0P7.claim.call(uintLnQQSy, {from: accounts[0]});
		const uint256wE5pq3a = await TokenDispatchN6rk0P7.updateTeam.call(uintB8r5hS0, addressoEjeLoz, addressxlPJ586, {from: accounts[3]});
	});

	it('test for TokenDispatch', async () => {
		const TokenDispatchN6rk0P7 = await TokenDispatch.new({from: accounts[1]});
		const uintwQoDi80 = BigInt("789")
		const addresszKqlNLh = accounts[5]
		const addressCemWCv = "0x0000000000000000000000000000000000000001"
		const uintX0oBNAo = BigInt("156")
		const uintcRp7RVv = BigInt("544")
		const addressTQCyES = await TokenDispatchN6rk0P7.approve.call(addressCemWCv, addresszKqlNLh, uintwQoDi80, {from: accounts[4]});
		const uint8Au8j1r = await TokenDispatchN6rk0P7.claim.call(uintX0oBNAo, {from: accounts[0]});
		const uinteaBRlZe = await TokenDispatchN6rk0P7.signTransaction.call(uintcRp7RVv, {from: accounts[4]});
	});

	it('test for TokenDispatch', async () => {
		const TokenDispatchN6rk0P7 = await TokenDispatch.new({from: accounts[1]});
		const uintvmeqQ5x = BigInt("351")
		const addresssmjhbQI = accounts[1]
		const addressnMTmz3n = accounts[0]
		const uintrjCamRd = BigInt("32")
		const uintp50H1rb = BigInt("201")
		const uintg3v0YIA = BigInt("34")
		const addressuT0dWy5 = await TokenDispatchN6rk0P7.approve.call(addressnMTmz3n, addresssmjhbQI, uintvmeqQ5x, {from: accounts[1]});
		const uint8Au8j1r = await TokenDispatchN6rk0P7.claim.call(uintrjCamRd, {from: accounts[0]});
		const uint256JDZdpdp = await TokenDispatchN6rk0P7.balanceOf.call(uintp50H1rb, {from: accounts[5]});
		const uint256FoRxPCy = await TokenDispatchN6rk0P7.balanceOf.call(uintg3v0YIA, {from: accounts[1]});
	});
})