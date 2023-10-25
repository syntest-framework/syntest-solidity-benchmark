const TokenDispatch = artifacts.require("TokenDispatch");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('TokenDispatch', (accounts) => {
	it('test for TokenDispatch', async () => {
		const TokenDispatchFro864j = await TokenDispatch.new({from: "0x0000000000000000000000000000000000000001"});
		const uintfYvMMPB = BigInt("1641")
		const uintpv8tuTq = BigInt("159")
		const uintrtfvz9H = BigInt("51")
		const uintkQzckti = BigInt("241")
		const uinteguwEW0 = BigInt("694")
		const uintQSXfR33 = await TokenDispatchFro864j.signTransaction.call(uintfYvMMPB, {from: accounts[4]});
		const uint256X8ZXY0t = await TokenDispatchFro864j.nextClaimHeightOf.call(uintpv8tuTq, {from: accounts[1]});
		const uint256COqIUYg = await TokenDispatchFro864j.nextClaimHeightOf.call(uintrtfvz9H, {from: accounts[2]});
		const 
zLgmfXU = await TokenDispatchFro864j.teamOf.call(uintkQzckti, {from: accounts[4]});
		const uintFq6nLa9 = await TokenDispatchFro864j.signTransaction.call(uinteguwEW0, {from: accounts[2]});
	});

	it('test for TokenDispatch', async () => {
		const TokenDispatchOgbUNv5 = await TokenDispatch.new({from: accounts[1]});
		const uintFpd0UB9 = BigInt("98")
		const uintWZ6gbmz = BigInt("62")
		const uintFLWHWvi = BigInt("770")
		const addressWaYMxnq = accounts[5]
		const addressgGTg1hb = accounts[3]
		const uintQ8rVJhd = BigInt("90")
		const uintxWhmSnw = BigInt("3")
		const uint256caqMiAe = await TokenDispatchOgbUNv5.balanceOf.call(uintFpd0UB9, {from: accounts[4]});
		const 
sn8Osaz = await TokenDispatchOgbUNv5.teamOf.call(uintWZ6gbmz, {from: accounts[2]});
		const uintb5zxlWc = await TokenDispatchOgbUNv5.signTransaction.call(uintFLWHWvi, {from: accounts[1]});
		const uint256WvG1v4S = await TokenDispatchOgbUNv5.updateTeam.call(uintQ8rVJhd, addressgGTg1hb, addressWaYMxnq, {from: accounts[2]});
		const uint256U9EZU7l = await TokenDispatchOgbUNv5.balanceOf.call(uintxWhmSnw, {from: accounts[4]});
	});

	it('test for TokenDispatch', async () => {
		const TokenDispatchg7fli9A = await TokenDispatch.new({from: accounts[1]});
		const uintP4pCiLh = BigInt("22")
		const addressekTy43 = accounts[5]
		const addressOFCQIFz = accounts[5]
		const uintEtgpXdB = BigInt("6")
		const uintUmpsov2 = BigInt("66")
		const uintiGoPPyx = BigInt("234")
		const uintgVJDnF = BigInt("35")
		const uint8GLhM5LU = await TokenDispatchg7fli9A.claim.call(uintP4pCiLh, {from: accounts[2]});
		const uint256ljMlyR8 = await TokenDispatchg7fli9A.updateTeam.call(uintEtgpXdB, addressOFCQIFz, addressekTy43, {from: "0x0000000000000000000000000000000000000001"});
		const uint256pvEQ15 = await TokenDispatchg7fli9A.nextClaimHeightOf.call(uintUmpsov2, {from: accounts[1]});
		const uint256kJV0Uti = await TokenDispatchg7fli9A.nextClaimHeightOf.call(uintiGoPPyx, {from: accounts[5]});
		const uint8EVjDCma = await TokenDispatchg7fli9A.claim.call(uintgVJDnF, {from: accounts[4]});
	});

	it('test for TokenDispatch', async () => {
		const TokenDispatchHrSHMgZ = await TokenDispatch.new({from: accounts[0]});
		const uintAneRDwC = BigInt("110")
		const uintuujc17v = BigInt("196")
		const uintj6qEmp8 = BigInt("59")
		const uintDPSDnn = BigInt("247")
		const uintXJyVn9L = BigInt("79")
		const uintpcrDAoY = BigInt("81")
		const uint256Otr1S7r = await TokenDispatchHrSHMgZ.nextClaimHeightOf.call(uintAneRDwC, {from: accounts[3]});
		const 
WeYg0BZ = await TokenDispatchHrSHMgZ.teamOf.call(uintuujc17v, {from: accounts[0]});
		const uint256dLNW6Am = await TokenDispatchHrSHMgZ.balanceOf.call(uintj6qEmp8, {from: accounts[2]});
		const uint256tObWa1 = await TokenDispatchHrSHMgZ.claimedOf.call(uintDPSDnn, {from: accounts[4]});
		const uint256dZpKP5d = await TokenDispatchHrSHMgZ.nextClaimHeightOf.call(uintXJyVn9L, {from: accounts[3]});
		const uint8vjrF6ew = await TokenDispatchHrSHMgZ.claim.call(uintpcrDAoY, {from: accounts[3]});
	});

	it('test for TokenDispatch', async () => {
		const TokenDispatchpeblR85 = await TokenDispatch.new({from: accounts[0]});
		const uintvigxAz = BigInt("11")
		const uintJQ8QaoH = BigInt("159")
		const uintBFzNLzM = BigInt("149")
		const uintoXlsXzT = BigInt("78")
		const uintkH9nyqs = BigInt("118")
		const uint256Yn9TNGg = await TokenDispatchpeblR85.claimedOf.call(uintvigxAz, {from: accounts[1]});
		const 
wYyJExf = await TokenDispatchpeblR85.teamOf.call(uintJQ8QaoH, {from: accounts[0]});
		const uint256JTOqPBu = await TokenDispatchpeblR85.balanceOf.call(uintBFzNLzM, {from: accounts[5]});
		const uint256GjV8Xqv = await TokenDispatchpeblR85.nextClaimHeightOf.call(uintoXlsXzT, {from: accounts[2]});
		const uint256CQMsnyx = await TokenDispatchpeblR85.balanceOf.call(uintkH9nyqs, {from: accounts[3]});
	});

	it('test for TokenDispatch', async () => {
		const TokenDispatchGiRYAoe = await TokenDispatch.new({from: accounts[5]});
		const uint8gOgiP = BigInt("243")
		const uintGKnWnkh = BigInt("63")
		const uintvf1MMH2 = BigInt("159")
		const uintRarB4D2 = BigInt("191")
		const addresshxnKnJ5 = accounts[3]
		const addressOoAaYsw = accounts[5]
		const uintfEOob0H = BigInt("148")
		const uintXFabpER = BigInt("44")
		const 
MQOPuDj = await TokenDispatchGiRYAoe.teamOf.call(uint8gOgiP, {from: "0x0000000000000000000000000000000000000001"});
		const uint256yeKCeHA = await TokenDispatchGiRYAoe.balanceOf.call(uintGKnWnkh, {from: accounts[4]});
		const uint8EngvWe2 = await TokenDispatchGiRYAoe.claim.call(uintvf1MMH2, {from: accounts[0]});
		const uint256nE55M7r = await TokenDispatchGiRYAoe.claimedOf.call(uintRarB4D2, {from: accounts[3]});
		const uint256MiSUaYa = await TokenDispatchGiRYAoe.updateTeam.call(uintfEOob0H, addressOoAaYsw, addresshxnKnJ5, {from: accounts[3]});
		const uint8IhIjE3q = await TokenDispatchGiRYAoe.claim.call(uintXFabpER, {from: accounts[4]});
	});

	it('test for TokenDispatch', async () => {
		const TokenDispatchFxsEZJN = await TokenDispatch.new({from: accounts[0]});
		const addressRtVLUnb = accounts[5]
		const addressBDfLlE = "0x0000000000000000000000000000000000000001"
		const uintruu4zNe = BigInt("67")
		const uintEkY4Vng = BigInt("25")
		const uintaxyRvy2 = BigInt("209")
		const uintOYQImDz = BigInt("188")
		const uint256boWZDNN = await TokenDispatchFxsEZJN.updateTeam.call(uintruu4zNe, addressBDfLlE, addressRtVLUnb, {from: accounts[2]});
		const uint256WPZKwe = await TokenDispatchFxsEZJN.nextClaimHeightOf.call(uintEkY4Vng, {from: accounts[0]});
		const 
mLo4j1 = await TokenDispatchFxsEZJN.teamOf.call(uintaxyRvy2, {from: accounts[3]});
		const 
VtROxgt = await TokenDispatchFxsEZJN.teamOf.call(uintOYQImDz, {from: accounts[3]});
	});

	it('test for TokenDispatch', async () => {
		const TokenDispatchIR4AhZw = await TokenDispatch.new({from: accounts[2]});
		const uintX6VvUsJ = BigInt("1131")
		const addressGLVbyf = "0x0000000000000000000000000000000000000001"
		const addresseNqVY4F = "0x0000000000000000000000000000000000000001"
		const uintJxbT8vv = BigInt("240")
		const addressJQGid3u = accounts[1]
		const addresspm4WTDn = "0x0000000000000000000000000000000000000001"
		const uintsTAE6f1 = BigInt("218")
		const uintS6MbR8 = BigInt("116")
		const addressV7o863O = await TokenDispatchIR4AhZw.approve.call(addresseNqVY4F, addressGLVbyf, uintX6VvUsJ, {from: accounts[4]});
		const uint256gk6dOon = await TokenDispatchIR4AhZw.claimedOf.call(uintJxbT8vv, {from: accounts[1]});
		const uint256Mil57oz = await TokenDispatchIR4AhZw.updateTeam.call(uintsTAE6f1, addresspm4WTDn, addressJQGid3u, {from: accounts[5]});
		const uint2560sFNrc = await TokenDispatchIR4AhZw.nextClaimHeightOf.call(uintS6MbR8, {from: accounts[0]});
	});

	it('test for TokenDispatch', async () => {
		const TokenDispatchg7fli9A = await TokenDispatch.new({from: accounts[1]});
		const uintZ0I8Kgr = BigInt("1388")
		const addressDAEHeBj = accounts[1]
		const addressYQoeAfX = accounts[1]
		const uintAwmagfa = BigInt("22")
		const addressIlp81C = accounts[4]
		const addressy4iY9Qi = accounts[2]
		const uintQ1bv3N4 = BigInt("10")
		const uintPj5Me7n = BigInt("22")
		const addressSycwFdK = accounts[1]
		const addressuqNVl1o = accounts[5]
		const uintTuONPyc = BigInt("32")
		const uinteGtYUCr = BigInt("173")
		const uintMQJbxQ5 = BigInt("240")
		const uintchvoxJ6 = BigInt("35")
		const addressw4vPMV3 = await TokenDispatchg7fli9A.approve.call(addressYQoeAfX, addressDAEHeBj, uintZ0I8Kgr, {from: accounts[1]});
		const uint8GLhM5LU = await TokenDispatchg7fli9A.claim.call(uintAwmagfa, {from: accounts[2]});
		const uint256rEnIf9 = await TokenDispatchg7fli9A.updateTeam.call(uintQ1bv3N4, addressy4iY9Qi, addressIlp81C, {from: accounts[3]});
		const uint256FZdx2fa = await TokenDispatchg7fli9A.nextClaimHeightOf.call(uintPj5Me7n, {from: accounts[0]});
		const uint256dlwoYCc = await TokenDispatchg7fli9A.updateTeam.call(uintTuONPyc, addressuqNVl1o, addressSycwFdK, {from: accounts[2]});
		const uint256pvEQ15 = await TokenDispatchg7fli9A.nextClaimHeightOf.call(uinteGtYUCr, {from: accounts[1]});
		const uint256kJV0Uti = await TokenDispatchg7fli9A.nextClaimHeightOf.call(uintMQJbxQ5, {from: accounts[5]});
		const uint8EVjDCma = await TokenDispatchg7fli9A.claim.call(uintchvoxJ6, {from: accounts[4]});
	});
})