const TokenDispatch = artifacts.require("TokenDispatch");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('TokenDispatch', (accounts) => {
	it('test for TokenDispatch', async () => {
		const TokenDispatchyk9JxTV = await TokenDispatch.new({from: accounts[0]});
		const uintRxtCuN = BigInt("252")
		const address14vPNF = accounts[1]
		const addressDoeALqh = accounts[5]
		const uintuRXqhsD = BigInt("114")
		const uintAiWfUA4 = BigInt("132")
		const uintwA1hHDB = BigInt("195")
		const uintwGUIRn3 = BigInt("53")
		const addressMB0Xj37 = accounts[4]
		const addressosQ5W06 = accounts[2]
		const 
OQB6htd = await TokenDispatchyk9JxTV.teamOf.call(uintRxtCuN, {from: accounts[4]});
		const uint2568ztYmB = await TokenDispatchyk9JxTV.updateTeam.call(uintuRXqhsD, addressDoeALqh, address14vPNF, {from: accounts[0]});
		const uint256cZB2eb = await TokenDispatchyk9JxTV.nextClaimHeightOf.call(uintAiWfUA4, {from: accounts[4]});
		const uint8Yk7Of6 = await TokenDispatchyk9JxTV.claim.call(uintwA1hHDB, {from: accounts[2]});
		const addressrRUCf28 = await TokenDispatchyk9JxTV.approve.call(addressosQ5W06, addressMB0Xj37, uintwGUIRn3, {from: accounts[2]});
	});

	it('test for TokenDispatch', async () => {
		const TokenDispatchZ6W20FO = await TokenDispatch.new({from: accounts[1]});
		const uintKmTllBO = BigInt("119")
		const uintWKETPtH = BigInt("1090")
		const addresswqxkVNV = "0x0000000000000000000000000000000000000001"
		const addressu8PUQ8 = accounts[2]
		const uinti0YzpFK = BigInt("54")
		const uint256juXKBLn = await TokenDispatchZ6W20FO.balanceOf.call(uintKmTllBO, {from: accounts[2]});
		const addresslp1ae7W = await TokenDispatchZ6W20FO.approve.call(addressu8PUQ8, addresswqxkVNV, uintWKETPtH, {from: accounts[2]});
		const uint256hIa6QBn = await TokenDispatchZ6W20FO.balanceOf.call(uinti0YzpFK, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for TokenDispatch', async () => {
		const TokenDispatchcLadMZU = await TokenDispatch.new({from: accounts[0]});
		const uintZF3mTs9 = BigInt("1082")
		const uintthIUtLL = BigInt("113")
		const uinthL1gzMd = BigInt("138")
		const uintRZUG7O1 = BigInt("81")
		const uintsFrweJi = await TokenDispatchcLadMZU.signTransaction.call(uintZF3mTs9, {from: accounts[1]});
		const uint256jt4d7BA = await TokenDispatchcLadMZU.balanceOf.call(uintthIUtLL, {from: accounts[2]});
		const 
Mlc11f8 = await TokenDispatchcLadMZU.teamOf.call(uinthL1gzMd, {from: accounts[5]});
		const uint256xVPU3dZ = await TokenDispatchcLadMZU.nextClaimHeightOf.call(uintRZUG7O1, {from: accounts[4]});
	});

	it('test for TokenDispatch', async () => {
		const TokenDispatchIppbNdg = await TokenDispatch.new({from: accounts[2]});
		const uinta9f5vgt = BigInt("181")
		const uint1I7jVK = BigInt("174")
		const uintieSdw6S = BigInt("548")
		const addressoJQl646 = accounts[3]
		const addressMTnTicp = accounts[1]
		const uintE5v2bI3 = BigInt("111")
		const uintZUlwWIA = BigInt("106")
		const uint256HHuxFK9 = await TokenDispatchIppbNdg.claimedOf.call(uinta9f5vgt, {from: accounts[1]});
		const uint256qzYOvRL = await TokenDispatchIppbNdg.claimedOf.call(uint1I7jVK, {from: accounts[4]});
		const uintHVYzSoi = await TokenDispatchIppbNdg.signTransaction.call(uintieSdw6S, {from: accounts[1]});
		const uint256Vnvqf4f = await TokenDispatchIppbNdg.updateTeam.call(uintE5v2bI3, addressMTnTicp, addressoJQl646, {from: accounts[1]});
		const uint8RaDMnN = await TokenDispatchIppbNdg.claim.call(uintZUlwWIA, {from: accounts[2]});
	});

	it('test for TokenDispatch', async () => {
		const TokenDispatchrCrVOVx = await TokenDispatch.new({from: accounts[2]});
		const uintw3h1GHJ = BigInt("80")
		const uintblMEHem = BigInt("54")
		const uint256WuEy61i = await TokenDispatchrCrVOVx.nextClaimHeightOf.call(uintw3h1GHJ, {from: accounts[0]});
		const 
Xgxw5Tg = await TokenDispatchrCrVOVx.teamOf.call(uintblMEHem, {from: accounts[5]});
	});

	it('test for TokenDispatch', async () => {
		const TokenDispatchapCzyZK = await TokenDispatch.new({from: accounts[4]});
		const uintJCuxSTq = BigInt("129")
		const uintocqLvNU = BigInt("206")
		const uintBHhysV6 = BigInt("1338")
		const addressPBu4JGY = accounts[1]
		const addressoalCXgh = accounts[2]
		const uintc1jCqfS = BigInt("234")
		const uintUvRaJOU = BigInt("62")
		const uint8i10VyUk = await TokenDispatchapCzyZK.claim.call(uintJCuxSTq, {from: accounts[1]});
		const uint256V9PVXlp = await TokenDispatchapCzyZK.nextClaimHeightOf.call(uintocqLvNU, {from: accounts[0]});
		const addressAfvS5uP = await TokenDispatchapCzyZK.approve.call(addressoalCXgh, addressPBu4JGY, uintBHhysV6, {from: accounts[4]});
		const uint256LFRAjJL = await TokenDispatchapCzyZK.claimedOf.call(uintc1jCqfS, {from: accounts[1]});
		const uint2569fVGDU = await TokenDispatchapCzyZK.nextClaimHeightOf.call(uintUvRaJOU, {from: accounts[1]});
	});

	it('test for TokenDispatch', async () => {
		const TokenDispatchrCrVOVx = await TokenDispatch.new({from: accounts[2]});
		const uintsG9DGen = BigInt("838")
		const addressZSuDG2k = accounts[0]
		const address9oBvbl = accounts[2]
		const uintQQqUz4e = BigInt("80")
		const addressiKmTEsK = await TokenDispatchrCrVOVx.approve.call(address9oBvbl, addressZSuDG2k, uintsG9DGen, {from: accounts[1]});
		const uint256WuEy61i = await TokenDispatchrCrVOVx.nextClaimHeightOf.call(uintQQqUz4e, {from: accounts[0]});
	});

	it('test for TokenDispatch', async () => {
		const TokenDispatchJucc2Ts = await TokenDispatch.new({from: accounts[1]});
		const uintYF4bFP2 = BigInt("374")
		const addressW2d50Tw = accounts[0]
		const addressWLXiG06 = accounts[0]
		const uintEwIbFkC = BigInt("212")
		const uintuu0ElgG = BigInt("100")
		const uintOm0PXJs = BigInt("41")
		const uintlSZYXRn = BigInt("140")
		const addresstRP9xTp = await TokenDispatchJucc2Ts.approve.call(addressWLXiG06, addressW2d50Tw, uintYF4bFP2, {from: accounts[1]});
		const uint256Rn2SGXi = await TokenDispatchJucc2Ts.nextClaimHeightOf.call(uintEwIbFkC, {from: accounts[3]});
		const uint256kqbX0ry = await TokenDispatchJucc2Ts.claimedOf.call(uintuu0ElgG, {from: accounts[2]});
		const 
DknZSb = await TokenDispatchJucc2Ts.teamOf.call(uintOm0PXJs, {from: accounts[2]});
		const uint256YNxuy5W = await TokenDispatchJucc2Ts.balanceOf.call(uintlSZYXRn, {from: accounts[5]});
	});

	it('test for TokenDispatch', async () => {
		const TokenDispatchrhB2rs6 = await TokenDispatch.new({from: "0x0000000000000000000000000000000000000001"});
		const uintdVO4QWK = BigInt("88")
		const uintQJYqokk = BigInt("20")
		const uintUwzXaE = BigInt("1811")
		const uintRBA4p8L = BigInt("79")
		const uint256hIGNe8M = await TokenDispatchrhB2rs6.claimedOf.call(uintdVO4QWK, {from: accounts[0]});
		const 
q8E2jc7 = await TokenDispatchrhB2rs6.teamOf.call(uintQJYqokk, {from: accounts[1]});
		const uintDIoijEo = await TokenDispatchrhB2rs6.signTransaction.call(uintUwzXaE, {from: accounts[4]});
		const uintpCEQDbB = await TokenDispatchrhB2rs6.signTransaction.call(uintRBA4p8L, {from: accounts[3]});
	});
})