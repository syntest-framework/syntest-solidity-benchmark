const TokenDispatch = artifacts.require("TokenDispatch");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('TokenDispatch', (accounts) => {
	it('test for TokenDispatch', async () => {
		const TokenDispatchth4iro0 = await TokenDispatch.new({from: accounts[1]});
		const uintSjBnT6p = BigInt("12")
		const uintuIFtUQ = BigInt("195")
		const uintNG0v6F = BigInt("222")
		const uintsHK1sQ8 = BigInt("108")
		const 
hHXXife = await TokenDispatchth4iro0.teamOf.call(uintSjBnT6p, {from: accounts[5]});
		const uint256vX7juso = await TokenDispatchth4iro0.claimedOf.call(uintuIFtUQ, {from: accounts[2]});
		const uint256d6LnNs = await TokenDispatchth4iro0.claimedOf.call(uintNG0v6F, {from: accounts[0]});
		const 
T9DzLfn = await TokenDispatchth4iro0.teamOf.call(uintsHK1sQ8, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for TokenDispatch', async () => {
		const TokenDispatchqhvjp6P = await TokenDispatch.new({from: accounts[1]});
		const uintpeZSI4F = BigInt("16")
		const uinta1jpEtq = BigInt("119")
		const uintLOHs9mY = BigInt("36")
		const addressNh6hMlB = accounts[1]
		const addressv3Blw3G = "0x0000000000000000000000000000000000000001"
		const uintLRvh5qF = BigInt("194")
		const uint8OAvDr9f = await TokenDispatchqhvjp6P.claim.call(uintpeZSI4F, {from: accounts[1]});
		const uint256bhgO7OR = await TokenDispatchqhvjp6P.nextClaimHeightOf.call(uinta1jpEtq, {from: accounts[3]});
		const 
J5c4Jkh = await TokenDispatchqhvjp6P.teamOf.call(uintLOHs9mY, {from: accounts[2]});
		const uint256kac6AmI = await TokenDispatchqhvjp6P.updateTeam.call(uintLRvh5qF, addressv3Blw3G, addressNh6hMlB, {from: accounts[4]});
	});

	it('test for TokenDispatch', async () => {
		const TokenDispatchHsXmfrG = await TokenDispatch.new({from: accounts[4]});
		const uintEpEOmXS = BigInt("228")
		const uintpUiEIM1 = BigInt("160")
		const uintaapOX4W = BigInt("181")
		const uintzsBzYL2 = BigInt("237")
		const uintx8pNAtO = BigInt("255")
		const addressoyDGMaN = accounts[0]
		const addressTX1SedG = "0x0000000000000000000000000000000000000001"
		const uint256A6ouLlA = await TokenDispatchHsXmfrG.balanceOf.call(uintEpEOmXS, {from: "0x0000000000000000000000000000000000000001"});
		const uint256cQWNsuI = await TokenDispatchHsXmfrG.claimedOf.call(uintpUiEIM1, {from: accounts[3]});
		const 
tSWX2e = await TokenDispatchHsXmfrG.teamOf.call(uintaapOX4W, {from: accounts[3]});
		const uint8H7NAX6L = await TokenDispatchHsXmfrG.claim.call(uintzsBzYL2, {from: accounts[1]});
		const addressizgkSrl = await TokenDispatchHsXmfrG.approve.call(addressTX1SedG, addressoyDGMaN, uintx8pNAtO, {from: accounts[1]});
	});

	it('test for TokenDispatch', async () => {
		const TokenDispatchcZDS5G8 = await TokenDispatch.new({from: accounts[2]});
		const uintLlzM9J8 = BigInt("170")
		const addressLyy7Njh = accounts[4]
		const addressmJS2gdX = accounts[1]
		const uintBN35DL = BigInt("169")
		const uint256NESdvuD = await TokenDispatchcZDS5G8.nextClaimHeightOf.call(uintLlzM9J8, {from: accounts[1]});
		const uint256AE1POyC = await TokenDispatchcZDS5G8.updateTeam.call(uintBN35DL, addressmJS2gdX, addressLyy7Njh, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for TokenDispatch', async () => {
		const TokenDispatchqPh87Uy = await TokenDispatch.new({from: accounts[4]});
		const uintWOMfwub = BigInt("2008")
		const addressw5OxYiw = accounts[0]
		const addressGyn6Kr = accounts[2]
		const uinttNMZQ0 = BigInt("252")
		const uintqXByxvU = BigInt("177")
		const uintodwGm4U = BigInt("120")
		const uintaZokZTV = BigInt("100")
		const addressQvKZBUD = accounts[0]
		const addressGZZ3Ud = accounts[2]
		const uintGZQL08l = BigInt("81")
		const addressf89LHFF = await TokenDispatchqPh87Uy.approve.call(addressGyn6Kr, addressw5OxYiw, uintWOMfwub, {from: accounts[5]});
		const uint256wmHeahg = await TokenDispatchqPh87Uy.nextClaimHeightOf.call(uinttNMZQ0, {from: accounts[2]});
		const 
SmgVqr = await TokenDispatchqPh87Uy.teamOf.call(uintqXByxvU, {from: accounts[0]});
		const 
oZFgyTQ = await TokenDispatchqPh87Uy.teamOf.call(uintodwGm4U, {from: accounts[0]});
		const 
Ngfcbxy = await TokenDispatchqPh87Uy.teamOf.call(uintaZokZTV, {from: "0x0000000000000000000000000000000000000001"});
		const uint256EEduJER = await TokenDispatchqPh87Uy.updateTeam.call(uintGZQL08l, addressGZZ3Ud, addressQvKZBUD, {from: accounts[1]});
	});

	it('test for TokenDispatch', async () => {
		const TokenDispatchdigjwFX = await TokenDispatch.new({from: accounts[2]});
		const uintK4PPXhj = BigInt("1442")
		const uints9Qd6rG = BigInt("109")
		const uintMKDbH3s = await TokenDispatchdigjwFX.signTransaction.call(uintK4PPXhj, {from: accounts[0]});
		const uint8RDolvhu = await TokenDispatchdigjwFX.claim.call(uints9Qd6rG, {from: accounts[2]});
	});

	it('test for TokenDispatch', async () => {
		const TokenDispatchHsXmfrG = await TokenDispatch.new({from: accounts[4]});
		const uintmaQn0Iq = BigInt("160")
		const uintCJV4DbQ = BigInt("181")
		const uint20q7F1 = BigInt("237")
		const uintgDKrPHj = BigInt("238")
		const uintuxW4M26 = BigInt("255")
		const addresso95tYyY = accounts[0]
		const addressfTP8M4N = "0x0000000000000000000000000000000000000001"
		const uint256cQWNsuI = await TokenDispatchHsXmfrG.claimedOf.call(uintmaQn0Iq, {from: accounts[3]});
		const 
tSWX2e = await TokenDispatchHsXmfrG.teamOf.call(uintCJV4DbQ, {from: accounts[3]});
		const uint8H7NAX6L = await TokenDispatchHsXmfrG.claim.call(uint20q7F1, {from: accounts[1]});
		const uint256G5jn6WE = await TokenDispatchHsXmfrG.claimedOf.call(uintgDKrPHj, {from: accounts[4]});
		const addressizgkSrl = await TokenDispatchHsXmfrG.approve.call(addressfTP8M4N, addresso95tYyY, uintuxW4M26, {from: accounts[1]});
	});

	it('test for TokenDispatch', async () => {
		const TokenDispatchmJg8mL2 = await TokenDispatch.new({from: "0x0000000000000000000000000000000000000001"});
		const uintFayiqIq = BigInt("70")
		const uintEnJHUqx = BigInt("216")
		const uintv31glJI = BigInt("191")
		const uintpjDCop = BigInt("55")
		const uintfffb9to = BigInt("108")
		const uintPaH2H1B = BigInt("17")
		const uint256G8Ruc9I = await TokenDispatchmJg8mL2.claimedOf.call(uintFayiqIq, {from: accounts[1]});
		const uint256J00Oeh = await TokenDispatchmJg8mL2.claimedOf.call(uintEnJHUqx, {from: accounts[3]});
		const uint256Iq3ZG4Q = await TokenDispatchmJg8mL2.nextClaimHeightOf.call(uintv31glJI, {from: accounts[1]});
		const 
pNNaBVu = await TokenDispatchmJg8mL2.teamOf.call(uintpjDCop, {from: accounts[3]});
		const uint256qSDCTQ = await TokenDispatchmJg8mL2.nextClaimHeightOf.call(uintfffb9to, {from: accounts[1]});
		const uint256HhaGMN1 = await TokenDispatchmJg8mL2.balanceOf.call(uintPaH2H1B, {from: accounts[4]});
	});

	it('test for TokenDispatch', async () => {
		const TokenDispatchwSJmYym = await TokenDispatch.new({from: accounts[3]});
		const uintJ9ZOcHg = BigInt("1023")
		const addresstLdVZF8 = accounts[0]
		const addressnxsFe50 = accounts[3]
		const uintjaqQw9y = BigInt("161")
		const addressMpy41Zd = await TokenDispatchwSJmYym.approve.call(addressnxsFe50, addresstLdVZF8, uintJ9ZOcHg, {from: accounts[3]});
		const 
AptcBT = await TokenDispatchwSJmYym.teamOf.call(uintjaqQw9y, {from: accounts[3]});
	});
})