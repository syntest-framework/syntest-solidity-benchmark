const TokenDispatch = artifacts.require("TokenDispatch");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('TokenDispatch', (accounts) => {
	it('test for TokenDispatch', async () => {
		const TokenDispatchspDJpgU = await TokenDispatch.new({from: accounts[3]});
		const uintbm61XK = BigInt("120")
		const uintBELAUJK = BigInt("1545")
		const addressEzh32u6 = accounts[0]
		const addressHpAhxw5 = accounts[2]
		const uintAZ0ab7D = BigInt("141")
		const uint256sfu4WDm = await TokenDispatchspDJpgU.nextClaimHeightOf.call(uintbm61XK, {from: accounts[0]});
		const addresswrdgvPB = await TokenDispatchspDJpgU.approve.call(addressHpAhxw5, addressEzh32u6, uintBELAUJK, {from: accounts[0]});
		const uint256eon8wtX = await TokenDispatchspDJpgU.claimedOf.call(uintAZ0ab7D, {from: accounts[3]});
	});

	it('test for TokenDispatch', async () => {
		const TokenDispatchWmOEmrl = await TokenDispatch.new({from: accounts[3]});
		const addressDCLQgvr = accounts[1]
		const addressjq8vPxk = accounts[2]
		const uintxQjKWVn = BigInt("195")
		const uintX86lwfQ = BigInt("66")
		const uintarE7nQK = BigInt("94")
		const uint256dco4YZF = await TokenDispatchWmOEmrl.updateTeam.call(uintxQjKWVn, addressjq8vPxk, addressDCLQgvr, {from: accounts[3]});
		const uint256giKc5rJ = await TokenDispatchWmOEmrl.nextClaimHeightOf.call(uintX86lwfQ, {from: "0x0000000000000000000000000000000000000001"});
		const uint8J3Y7PxV = await TokenDispatchWmOEmrl.claim.call(uintarE7nQK, {from: accounts[3]});
	});

	it('test for TokenDispatch', async () => {
		const TokenDispatchwDwzUcW = await TokenDispatch.new({from: accounts[2]});
		const uintwd3EPX3 = BigInt("140")
		const addressKTCXCzt = "0x0000000000000000000000000000000000000001"
		const addressJRFIDvU = accounts[0]
		const uintmIxIlmu = BigInt("109")
		const addressALo0Wj = accounts[4]
		const addressF1tGWhs = "0x0000000000000000000000000000000000000001"
		const uintn9crPfG = BigInt("171")
		const uintynPRoe = BigInt("9")
		const uintp847tEM = BigInt("93")
		const uint8YohOiFN = await TokenDispatchwDwzUcW.claim.call(uintwd3EPX3, {from: accounts[3]});
		const uint256kkiHJpy = await TokenDispatchwDwzUcW.updateTeam.call(uintmIxIlmu, addressJRFIDvU, addressKTCXCzt, {from: "0x0000000000000000000000000000000000000001"});
		const uint256dpliBol = await TokenDispatchwDwzUcW.updateTeam.call(uintn9crPfG, addressF1tGWhs, addressALo0Wj, {from: accounts[1]});
		const uint256obLnUt = await TokenDispatchwDwzUcW.claimedOf.call(uintynPRoe, {from: accounts[0]});
		const uint8BoymNt4 = await TokenDispatchwDwzUcW.claim.call(uintp847tEM, {from: accounts[4]});
	});

	it('test for TokenDispatch', async () => {
		const TokenDispatchyKGPshr = await TokenDispatch.new({from: accounts[2]});
		const uintOmiCIwX = BigInt("95")
		const addressjWH2zFd = accounts[3]
		const addressDGxcsEH = accounts[0]
		const uintAGzRGz4 = BigInt("45")
		const addressYeM01Wy = accounts[4]
		const addressXOqD1Gn = accounts[2]
		const uintg22bCMx = BigInt("34")
		const 
lHoJI70 = await TokenDispatchyKGPshr.teamOf.call(uintOmiCIwX, {from: "0x0000000000000000000000000000000000000001"});
		const uint256Nzk0OLz = await TokenDispatchyKGPshr.updateTeam.call(uintAGzRGz4, addressDGxcsEH, addressjWH2zFd, {from: accounts[5]});
		const uint256Wu5WtkX = await TokenDispatchyKGPshr.updateTeam.call(uintg22bCMx, addressXOqD1Gn, addressYeM01Wy, {from: accounts[0]});
	});

	it('test for TokenDispatch', async () => {
		const TokenDispatchhMbAt5B = await TokenDispatch.new({from: "0x0000000000000000000000000000000000000001"});
		const uintWPNwLCR = BigInt("161")
		const uintKTrJ4An = BigInt("165")
		const uintnCgqS9N = BigInt("123")
		const uintAcI0XzM = BigInt("306")
		const uintwO6iRNF = BigInt("192")
		const uint256gxDPtu0 = await TokenDispatchhMbAt5B.nextClaimHeightOf.call(uintWPNwLCR, {from: accounts[5]});
		const 
HzTjl6n = await TokenDispatchhMbAt5B.teamOf.call(uintKTrJ4An, {from: accounts[2]});
		const uint256f5br2nP = await TokenDispatchhMbAt5B.nextClaimHeightOf.call(uintnCgqS9N, {from: "0x0000000000000000000000000000000000000001"});
		const uintLHWSOgd = await TokenDispatchhMbAt5B.signTransaction.call(uintAcI0XzM, {from: accounts[5]});
		const uint256CBLLYJo = await TokenDispatchhMbAt5B.nextClaimHeightOf.call(uintwO6iRNF, {from: accounts[0]});
	});

	it('test for TokenDispatch', async () => {
		const TokenDispatchWn8uJlY = await TokenDispatch.new({from: accounts[0]});
		const uintcUNqoW = BigInt("107")
		const uinteryNsdG = BigInt("105")
		const addressSt2PDGQ = accounts[5]
		const addressF8X00Dn = accounts[1]
		const uintDqpkPVT = BigInt("206")
		const uint256T9FrD5D = await TokenDispatchWn8uJlY.claimedOf.call(uintcUNqoW, {from: accounts[1]});
		const uint8SLyTi0Q = await TokenDispatchWn8uJlY.claim.call(uinteryNsdG, {from: accounts[0]});
		const uint256qHAo24 = await TokenDispatchWn8uJlY.updateTeam.call(uintDqpkPVT, addressF8X00Dn, addressSt2PDGQ, {from: accounts[3]});
	});

	it('test for TokenDispatch', async () => {
		const TokenDispatchiOd0oNW = await TokenDispatch.new({from: accounts[0]});
		const uints5RX473 = BigInt("212")
		const uintznXkLH = BigInt("57")
		const uintXwiIzP6 = BigInt("52")
		const uintcRminCk = BigInt("60")
		const uintrEhArN = BigInt("103")
		const uintwgpNoLk = BigInt("217")
		const uint256rqm8jOz = await TokenDispatchiOd0oNW.balanceOf.call(uints5RX473, {from: accounts[1]});
		const uint256I1apwJJ = await TokenDispatchiOd0oNW.claimedOf.call(uintznXkLH, {from: accounts[0]});
		const uint8VabuuiT = await TokenDispatchiOd0oNW.claim.call(uintXwiIzP6, {from: accounts[2]});
		const uintOOdxBv1 = await TokenDispatchiOd0oNW.signTransaction.call(uintcRminCk, {from: accounts[4]});
		const uint256lRBmo7 = await TokenDispatchiOd0oNW.claimedOf.call(uintrEhArN, {from: accounts[0]});
		const uint256XlzqlAh = await TokenDispatchiOd0oNW.claimedOf.call(uintwgpNoLk, {from: accounts[0]});
	});

	it('test for TokenDispatch', async () => {
		const TokenDispatchnNYSdnZ = await TokenDispatch.new({from: accounts[5]});
		const uintGSL2pLi = BigInt("1004")
		const addressOlGi65K = accounts[2]
		const addressA3XpxN = accounts[0]
		const uintDzXbPU = BigInt("119")
		const addressyFhX9gd = accounts[4]
		const addressj9BKrra = accounts[4]
		const uintZjtc09Y = BigInt("96")
		const uintumCybb5 = BigInt("1713")
		const addressWmXGknl = accounts[1]
		const addressblcpvLG = accounts[2]
		const addresssGYBPE = await TokenDispatchnNYSdnZ.approve.call(addressA3XpxN, addressOlGi65K, uintGSL2pLi, {from: accounts[4]});
		const uint256UJT96dC = await TokenDispatchnNYSdnZ.balanceOf.call(uintDzXbPU, {from: accounts[2]});
		const uint256I3j53Rg = await TokenDispatchnNYSdnZ.updateTeam.call(uintZjtc09Y, addressj9BKrra, addressyFhX9gd, {from: accounts[3]});
		const addressf2N8H7m = await TokenDispatchnNYSdnZ.approve.call(addressblcpvLG, addressWmXGknl, uintumCybb5, {from: accounts[3]});
	});

	it('test for TokenDispatch', async () => {
		const TokenDispatchWn8uJlY = await TokenDispatch.new({from: accounts[0]});
		const uintDeybnDl = BigInt("71")
		const addressIHrJY7f = accounts[0]
		const addressbrRj9Ws = accounts[0]
		const uintF8oR3w1 = BigInt("140")
		const uintpZ92OT1 = BigInt("105")
		const uintZs4sveh = BigInt("97")
		const addressGwQKWIt = accounts[5]
		const addressp341EAx = accounts[1]
		const uintSEfqYOj = BigInt("206")
		const addressnee8Pr3 = await TokenDispatchWn8uJlY.approve.call(addressbrRj9Ws, addressIHrJY7f, uintDeybnDl, {from: accounts[0]});
		const uint256NK2l7zH = await TokenDispatchWn8uJlY.claimedOf.call(uintF8oR3w1, {from: accounts[0]});
		const uint8SLyTi0Q = await TokenDispatchWn8uJlY.claim.call(uintpZ92OT1, {from: accounts[0]});
		const uint256db5rv43 = await TokenDispatchWn8uJlY.balanceOf.call(uintZs4sveh, {from: accounts[1]});
		const uint256qHAo24 = await TokenDispatchWn8uJlY.updateTeam.call(uintSEfqYOj, addressp341EAx, addressGwQKWIt, {from: accounts[3]});
	});
})