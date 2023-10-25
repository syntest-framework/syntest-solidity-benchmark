const TokenDispatch = artifacts.require("TokenDispatch");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('TokenDispatch', (accounts) => {
	it('test for TokenDispatch', async () => {
		const TokenDispatchoT1Z3RE = await TokenDispatch.new({from: accounts[4]});
		const addressjQUWISR = "0x0000000000000000000000000000000000000001"
		const addressddlmSZa = accounts[0]
		const uintQryCkf9 = BigInt("160")
		const uintHdsCLGY = BigInt("1416")
		const uint256mOugRki = await TokenDispatchoT1Z3RE.updateTeam.call(uintQryCkf9, addressddlmSZa, addressjQUWISR, {from: accounts[0]});
		const uintYZMahhN = await TokenDispatchoT1Z3RE.signTransaction.call(uintHdsCLGY, {from: accounts[1]});
	});

	it('test for TokenDispatch', async () => {
		const TokenDispatchJua6T5C = await TokenDispatch.new({from: "0x0000000000000000000000000000000000000001"});
		const uintCFJ3Nup = BigInt("231")
		const addressfRFvm0h = "0x0000000000000000000000000000000000000001"
		const addressEgAjX8j = accounts[3]
		const uintIWv88ci = BigInt("108")
		const uintDKejWhz = BigInt("188")
		const uintdCNgDPP = BigInt("5")
		const 
IOzgIBy = await TokenDispatchJua6T5C.teamOf.call(uintCFJ3Nup, {from: accounts[0]});
		const uint2561Ef4pf = await TokenDispatchJua6T5C.updateTeam.call(uintIWv88ci, addressEgAjX8j, addressfRFvm0h, {from: accounts[3]});
		const uint256DWu9je = await TokenDispatchJua6T5C.balanceOf.call(uintDKejWhz, {from: accounts[1]});
		const 
YfruHBg = await TokenDispatchJua6T5C.teamOf.call(uintdCNgDPP, {from: accounts[0]});
	});

	it('test for TokenDispatch', async () => {
		const TokenDispatchI9nketk = await TokenDispatch.new({from: accounts[2]});
		const uintG9wePZl = BigInt("219")
		const uintgvpBlS1 = BigInt("1729")
		const addressBncURSR = accounts[1]
		const addressbnhsrrG = accounts[2]
		const uintKl6MhcV = BigInt("58")
		const uint8xtN2O32 = await TokenDispatchI9nketk.claim.call(uintG9wePZl, {from: accounts[0]});
		const addressM8TFdSt = await TokenDispatchI9nketk.approve.call(addressbnhsrrG, addressBncURSR, uintgvpBlS1, {from: accounts[1]});
		const uint256COKeNTY = await TokenDispatchI9nketk.balanceOf.call(uintKl6MhcV, {from: accounts[1]});
	});

	it('test for TokenDispatch', async () => {
		const TokenDispatchiAKC3lt = await TokenDispatch.new({from: accounts[3]});
		const uintOWqbfXp = BigInt("119")
		const uintvNiy2Z = BigInt("115")
		const addressIsknbO9 = accounts[2]
		const addressf7snPoZ = accounts[4]
		const uintGeZucJ6 = BigInt("63")
		const uintvle17VZ = BigInt("149")
		const uintPrTMOWe = BigInt("73")
		const 
LIbGFt = await TokenDispatchiAKC3lt.teamOf.call(uintOWqbfXp, {from: accounts[4]});
		const uint256Xna08TP = await TokenDispatchiAKC3lt.balanceOf.call(uintvNiy2Z, {from: accounts[0]});
		const uint256jOtQPl6 = await TokenDispatchiAKC3lt.updateTeam.call(uintGeZucJ6, addressf7snPoZ, addressIsknbO9, {from: accounts[1]});
		const uint2561Gtetm = await TokenDispatchiAKC3lt.claimedOf.call(uintvle17VZ, {from: accounts[4]});
		const uint256YR8DlWN = await TokenDispatchiAKC3lt.balanceOf.call(uintPrTMOWe, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for TokenDispatch', async () => {
		const TokenDispatchK3MrZ6S = await TokenDispatch.new({from: accounts[1]});
		const uintlMr4BnC = BigInt("205")
		const uintvAgjJH = BigInt("141")
		const uintkCMDB36 = BigInt("94")
		const uintl9NphPC = BigInt("1740")
		const addresspkBEnEZ = accounts[2]
		const addressmR6hcZl = accounts[4]
		const uint256ieXzQWz = await TokenDispatchK3MrZ6S.balanceOf.call(uintlMr4BnC, {from: accounts[2]});
		const uint256Zlv4b6S = await TokenDispatchK3MrZ6S.nextClaimHeightOf.call(uintvAgjJH, {from: accounts[2]});
		const 
deLEx0q = await TokenDispatchK3MrZ6S.teamOf.call(uintkCMDB36, {from: accounts[0]});
		const addressoC2tJQS = await TokenDispatchK3MrZ6S.approve.call(addressmR6hcZl, addresspkBEnEZ, uintl9NphPC, {from: accounts[4]});
	});

	it('test for TokenDispatch', async () => {
		const TokenDispatchDhcRmjd = await TokenDispatch.new({from: accounts[1]});
		const uintmkCnNT2 = BigInt("1928")
		const addressGnop7C = accounts[2]
		const addressUp8zWCK = accounts[0]
		const uinti7V8VOc = BigInt("1170")
		const addressQGL1JJB = accounts[4]
		const addressEd68SR0 = accounts[4]
		const uintXDgag3o = BigInt("95")
		const uintcY4DAR6 = BigInt("137")
		const uintl3QwgY1 = BigInt("105")
		const addressKtpswKu = await TokenDispatchDhcRmjd.approve.call(addressUp8zWCK, addressGnop7C, uintmkCnNT2, {from: accounts[0]});
		const uintbyqNp6 = await TokenDispatchDhcRmjd.signTransaction.call(uinti7V8VOc, {from: accounts[3]});
		const uint256E7aojiD = await TokenDispatchDhcRmjd.updateTeam.call(uintXDgag3o, addressEd68SR0, addressQGL1JJB, {from: accounts[0]});
		const uint256qZQYWnf = await TokenDispatchDhcRmjd.nextClaimHeightOf.call(uintcY4DAR6, {from: accounts[3]});
		const 
Rfq2OdT = await TokenDispatchDhcRmjd.teamOf.call(uintl3QwgY1, {from: accounts[1]});
	});

	it('test for TokenDispatch', async () => {
		const TokenDispatchiAKC3lt = await TokenDispatch.new({from: accounts[3]});
		const uintaUumjzz = BigInt("212")
		const uintN62eFb = BigInt("1895")
		const uintuPguYw7 = BigInt("98")
		const uintlwLeDAH = BigInt("115")
		const addresskWi1WqO = accounts[2]
		const addressfC0NVyz = accounts[4]
		const uintv5uDfPj = BigInt("63")
		const uintttwVtnA = BigInt("149")
		const uintyoxRgO4 = BigInt("661")
		const uinthtO5VLY = BigInt("73")
		const uint256gfOOwfQ = await TokenDispatchiAKC3lt.nextClaimHeightOf.call(uintaUumjzz, {from: accounts[3]});
		const uintyvVtqR5 = await TokenDispatchiAKC3lt.signTransaction.call(uintN62eFb, {from: accounts[2]});
		const 
LIbGFt = await TokenDispatchiAKC3lt.teamOf.call(uintuPguYw7, {from: accounts[4]});
		const uint256Xna08TP = await TokenDispatchiAKC3lt.balanceOf.call(uintlwLeDAH, {from: accounts[0]});
		const uint256jOtQPl6 = await TokenDispatchiAKC3lt.updateTeam.call(uintv5uDfPj, addressfC0NVyz, addresskWi1WqO, {from: accounts[1]});
		const uint2561Gtetm = await TokenDispatchiAKC3lt.claimedOf.call(uintttwVtnA, {from: accounts[4]});
		const uintvqMUQPh = await TokenDispatchiAKC3lt.signTransaction.call(uintyoxRgO4, {from: accounts[4]});
		const uint256YR8DlWN = await TokenDispatchiAKC3lt.balanceOf.call(uinthtO5VLY, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for TokenDispatch', async () => {
		const TokenDispatchztwj8gC = await TokenDispatch.new({from: accounts[1]});
		const uintxQ2QgX5 = BigInt("65")
		const addresswsUKYI = accounts[4]
		const address7Qu7bx = accounts[2]
		const uintD5mm8D = BigInt("36")
		const uintrTRlrp = BigInt("93")
		const uint256Q13g9Ph = await TokenDispatchztwj8gC.claimedOf.call(uintxQ2QgX5, {from: "0x0000000000000000000000000000000000000001"});
		const uint256CjM7Jwj = await TokenDispatchztwj8gC.updateTeam.call(uintD5mm8D, address7Qu7bx, addresswsUKYI, {from: accounts[0]});
		const uint256mbGMTQc = await TokenDispatchztwj8gC.nextClaimHeightOf.call(uintrTRlrp, {from: accounts[3]});
	});

	it('test for TokenDispatch', async () => {
		const TokenDispatchDKrCzIZ = await TokenDispatch.new({from: accounts[0]});
		const uinteCqqyM4 = BigInt("1441")
		const addressf1O2CkE = accounts[3]
		const addressOq0Q13 = accounts[1]
		const uintEp6MYOb = BigInt("185")
		const uintmDf0IyN = BigInt("51")
		const uintXs3qldR = BigInt("199")
		const addressiF4yZi = await TokenDispatchDKrCzIZ.approve.call(addressOq0Q13, addressf1O2CkE, uinteCqqyM4, {from: accounts[0]});
		const uint256Dk8K4d8 = await TokenDispatchDKrCzIZ.claimedOf.call(uintEp6MYOb, {from: accounts[1]});
		const 
cCukjuI = await TokenDispatchDKrCzIZ.teamOf.call(uintmDf0IyN, {from: accounts[2]});
		const 
lzZcq3m = await TokenDispatchDKrCzIZ.teamOf.call(uintXs3qldR, {from: accounts[4]});
	});
})