const Voting = artifacts.require("Voting");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Voting', (accounts) => {
	it('test for Voting', async () => {
		const addressXce2RB = accounts[4]
		const VotingnH0tYQ = await Voting.new(addressXce2RB, {from: accounts[1]});
		const addressMiTHKex = accounts[4]
		const uintrcPxt1P = BigInt("614")
		const addressUC7CiXt = accounts[5]
		const uintY0n3I3J = BigInt("42")
		const addressYoRy0jV = await VotingnH0tYQ.updateRegistry.call(addressMiTHKex, {from: accounts[3]});
		await VotingnH0tYQ.onlyMinter.call({from: accounts[4]});
		const uint256t6Vtk6v = await VotingnH0tYQ.pause.call(uintrcPxt1P, {from: accounts[3]});
		const uint256QZv9FQK = await VotingnH0tYQ.balanceOf.call(addressUC7CiXt, {from: accounts[4]});
		const uint256DIiRlsp = await VotingnH0tYQ.veto.call(uintY0n3I3J, {from: accounts[3]});
	});

	it('test for Voting', async () => {
		const addresswcX0CBt = accounts[4]
		const VotinguTwTMOR = await Voting.new(addresswcX0CBt, {from: accounts[4]});
		const stringN0vUXtW = "2SrWsxwNyxuTCempJsAqYMeK0NtGThy5qA4yfFp9WsUFUFVKEN6cnBLm4hhL6xu929HXjtSYwcK5WGkj3gNxi"
		const stringhZcrmWs = "iK0DAhYBrEhGFt9yKrRuNSmx7aSjMZB18iCRm9A6x53TYRE"
		const stringfljTWAw = "9EHZDhnAq9mQ2K2mMn5sKzBCAp5645SzIKFpxwCAHfvDo"
		const byteOqN7sft = "0x0a14051c0f10"
		const address9rLGnL = accounts[5]
		const uintn9I4qbd = BigInt("1875")
		const addressmv0KUGQ = "0x0000000000000000000000000000000000000001"
		const uintCKRQM8d = BigInt("1779")
		const addressiPXZtIR = accounts[5]
		const 
nW7IWgV = await VotinguTwTMOR.createProposal.call(address9rLGnL, byteOqN7sft, stringfljTWAw, stringhZcrmWs, stringN0vUXtW, {from: accounts[1]});
		const boolbUghKRc = await VotinguTwTMOR.increaseAllowance.call(addressmv0KUGQ, uintn9I4qbd, {from: accounts[4]});
		const boolg7g44Gh = await VotinguTwTMOR.approve.call(addressiPXZtIR, uintCKRQM8d, {from: accounts[3]});
	});

	it('test for Voting', async () => {
		const addressEKfOSrd = accounts[0]
		const VotingvCHoxTa = await Voting.new(addressEKfOSrd, {from: "0x0000000000000000000000000000000000000001"});
		const uintngNQFxF = BigInt("1759")
		const addresske0zcEx = accounts[0]
		await VotingvCHoxTa.onlyExchange.call({from: accounts[3]});
		const boolWCb61ar = await VotingvCHoxTa.increaseAllowance.call(addresske0zcEx, uintngNQFxF, {from: accounts[2]});
		await VotingvCHoxTa.onlyExchangeFactory.call({from: accounts[4]});
		const stringzsMF3c8 = await VotingvCHoxTa.name.call({from: accounts[5]});
		await VotingvCHoxTa.onlyExchange.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for Voting', async () => {
		const VotingkenbyOz = await Voting.new({from: accounts[4]});
		const addressy8TAHt = accounts[4]
		const addresswz8yDdf = accounts[4]
		const addresszgnFkRm = accounts[2]
		const addressJgKo7jE = accounts[2]
		const addressv3qtO7J = accounts[3]
		const addressGwdCO2 = accounts[3]
		const uintA3FeP47 = BigInt("243")
		const addressN22ojZ = accounts[4]
		const boolEDcNpoE = await VotingkenbyOz.isValidStamperAddress.call(addressy8TAHt, {from: accounts[1]});
		const addressqDZMePl = await VotingkenbyOz.transferOwnership.call(addresswz8yDdf, {from: accounts[4]});
		const addressdrskCI = await VotingkenbyOz.addMinter.call(addresszgnFkRm, {from: accounts[4]});
		const uint256lPgerXz = await VotingkenbyOz.allowance.call(addressv3qtO7J, addressJgKo7jE, {from: accounts[0]});
		const addressIZI2J2c = await VotingkenbyOz.transferOwnership.call(addressGwdCO2, {from: accounts[3]});
		const boolPDH9bSQ = await VotingkenbyOz.transfer.call(addressN22ojZ, uintA3FeP47, {from: accounts[1]});
	});

	it('test for Voting', async () => {
		const addressHazc2CZ = accounts[3]
		const VotingPPvb6bY = await Voting.new(addressHazc2CZ, {from: accounts[4]});
		const uintsAgnCK8 = BigInt("489")
		const uintDOr1oBT = BigInt("1023")
		const addressDIRdtd0 = accounts[3]
		const uintkPtO5Ni = BigInt("623")
		const addressC7MurS = accounts[5]
		await VotingPPvb6bY.renounceOwnership.call({from: accounts[1]});
		await VotingPPvb6bY.onlyMinter.call({from: accounts[2]});
		const uint256tCsV6FN = await VotingPPvb6bY.totalSupplyAt.call(uintsAgnCK8, {from: accounts[5]});
		const boolG0R9mTq = await VotingPPvb6bY.increaseAllowance.call(addressDIRdtd0, uintDOr1oBT, {from: "0x0000000000000000000000000000000000000001"});
		const boolrSWvuqI = await VotingPPvb6bY.transfer.call(addressC7MurS, uintkPtO5Ni, {from: accounts[2]});
	});

	it('test for Voting', async () => {
		const Votingz2YFXp = await Voting.new({from: accounts[0]});
		const addressyupml9K = accounts[5]
		const uintB0nPJJy = BigInt("1368")
		const addressa07tIcf = accounts[0]
		const uintZFqWIxX = BigInt("653")
		const addressUYEZWAU = "0x0000000000000000000000000000000000000001"
		await Votingz2YFXp.renounceOwnership.call({from: accounts[4]});
		const boolz6be8TB = await Votingz2YFXp.isValidStamperAddress.call(addressyupml9K, {from: accounts[4]});
		const boolQnyyuu = await Votingz2YFXp.transfer.call(addressa07tIcf, uintB0nPJJy, {from: accounts[4]});
		await Votingz2YFXp.onlyMessageProcessor.call({from: accounts[4]});
		const boolQidutAv = await Votingz2YFXp.increaseAllowance.call(addressUYEZWAU, uintZFqWIxX, {from: accounts[5]});
	});

	it('test for Voting', async () => {
		const VotingBR9EcoU = await Voting.new({from: accounts[2]});
		const uintpN1BDbP = BigInt("1742")
		const addressmjaQcm = accounts[0]
		const uintVBtaPY = BigInt("226")
		const uinteeJC8rL = BigInt("1065")
		const addressv0kEh61 = accounts[1]
		const address5yFglX = accounts[2]
		const addressTlwymzo = accounts[2]
		const boole53nmth = await VotingBR9EcoU.decreaseAllowance.call(addressmjaQcm, uintpN1BDbP, {from: accounts[2]});
		const uint256yn8Yn7L = await VotingBR9EcoU.veto.call(uintVBtaPY, {from: accounts[1]});
		await VotingBR9EcoU.requiresLiquidityTokenSnapshotAccess.call({from: accounts[1]});
		const boolrShgpjp = await VotingBR9EcoU.transferFrom.call(address5yFglX, addressv0kEh61, uinteeJC8rL, {from: accounts[3]});
		const addresszyRMrvn = await VotingBR9EcoU.addMinter.call(addressTlwymzo, {from: accounts[0]});
	});

	it('test for Voting', async () => {
		const addressHXWYNR2 = accounts[2]
		const Voting7kSXLC = await Voting.new(addressHXWYNR2, {from: accounts[1]});
		const uint9Wy5eZ = BigInt("1424")
		const uintrvXTAUn = BigInt("1908")
		const addresseP5yXpJ = accounts[0]
		const addressnbLxNI = accounts[2]
		const uint256nO8tCbQ = await Voting7kSXLC.resolve.call(uint9Wy5eZ, {from: accounts[0]});
		await Voting7kSXLC.onlyVotingSystem.call({from: accounts[4]});
		const boolkRaxtlV = await Voting7kSXLC.increaseAllowance.call(addresseP5yXpJ, uintrvXTAUn, {from: accounts[2]});
		const boolY388KQ = await Voting7kSXLC.isValidVerifierAddress.call(addressnbLxNI, {from: accounts[2]});
	});

	it('test for Voting', async () => {
		const addressTzZ9Sg4 = accounts[2]
		const Voting7kSXLC = await Voting.new(addressTzZ9Sg4, {from: accounts[1]});
		const addressL9irQ5B = accounts[5]
		const boolY388KQ = await Voting7kSXLC.isValidVerifierAddress.call(addressL9irQ5B, {from: accounts[2]});
	});

	it('test for Voting', async () => {
		const addressI3KIaKB = accounts[2]
		const VotingynnYsVT = await Voting.new(addressI3KIaKB, {from: accounts[0]});
		const addressO8J2jyR = accounts[4]
		const addressveiR1d3 = accounts[1]
		const uintvSQKLtJ = BigInt("1578")
		const addressjfQkhx6 = accounts[4]
		const boolbwhbD5v = await VotingynnYsVT.isExchangeFactory.call(addressO8J2jyR, {from: accounts[5]});
		await VotingynnYsVT.renounceMinter.call({from: accounts[5]});
		await VotingynnYsVT.onlyVotingSystem.call({from: accounts[2]});
		const stringPDKqffd = await VotingynnYsVT.symbol.call({from: accounts[4]});
		const boolxdZTAzY = await VotingynnYsVT.isVotingSystem.call(addressveiR1d3, {from: accounts[4]});
		const addresstgMwyw = await VotingynnYsVT.burnFrom.call(addressjfQkhx6, uintvSQKLtJ, {from: accounts[1]});
	});

	it('test for Voting', async () => {
		const addressY5bOIUx = accounts[2]
		const Voting7kSXLC = await Voting.new(addressY5bOIUx, {from: accounts[1]});
		const addressOSA6zf7 = accounts[4]
		const addressRy5xDQA = accounts[3]
		const booleub9VR5 = await Voting7kSXLC.isValidOracleAddress.call(addressOSA6zf7, {from: accounts[4]});
		const boolY388KQ = await Voting7kSXLC.isValidVerifierAddress.call(addressRy5xDQA, {from: accounts[2]});
	});

	it('test for Voting', async () => {
		const addresskbRjSGQ = accounts[1]
		const VotinggyUoDnF = await Voting.new(addresskbRjSGQ, {from: accounts[4]});
		const addressYCsRnS0 = accounts[0]
		const uintzmfwMem = BigInt("1610")
		const uintxRsRrVg = BigInt("1291")
		const boolqURB5xM = await VotinggyUoDnF.isValidStamperAddress.call(addressYCsRnS0, {from: accounts[4]});
		const uint256GtN1Q2 = await VotinggyUoDnF.veto.call(uintzmfwMem, {from: accounts[4]});
		const uint256N2y4Ln7 = await VotinggyUoDnF.approve.call(uintxRsRrVg, {from: accounts[4]});
	});

	it('test for Voting', async () => {
		const VotingWtIJe6V = await Voting.new({from: accounts[5]});
		const uintF3mMLXN = BigInt("282")
		const addressmCtiSj = accounts[0]
		const uint256rKsFA9l = await VotingWtIJe6V.totalSupply.call({from: accounts[2]});
		const uint256m6vYxU = await VotingWtIJe6V.veto.call(uintF3mMLXN, {from: accounts[4]});
		const addressjE8tSAn = await VotingWtIJe6V.addMinter.call(addressmCtiSj, {from: accounts[0]});
	});

	it('test for Voting', async () => {
		const addressMVf9VbD = accounts[2]
		const Voting7kSXLC = await Voting.new(addressMVf9VbD, {from: accounts[1]});
		const boolAommGFb = true
		const uintcJ5X5c = BigInt("1350")
		const uintU9D0zgO = BigInt("1490")
		const uint256bGMxbyC = await Voting7kSXLC.vote.call(uintcJ5X5c, boolAommGFb, {from: accounts[5]});
		const uint256EXvlKOL = await Voting7kSXLC.totalSupplyAt.call(uintU9D0zgO, {from: accounts[3]});
		await Voting7kSXLC.onlyOwner.call({from: accounts[0]});
		await Voting7kSXLC.onlyVotingSystem.call({from: accounts[4]});
	});

	it('test for Voting', async () => {
		const addressLTdM758 = accounts[4]
		const Votingr4jWzjw = await Voting.new(addressLTdM758, {from: accounts[3]});
		const addressQ6JIcz2 = accounts[0]
		const uintdYSLdZi = BigInt("1964")
		const addressdEvCcqX = accounts[4]
		const stringahCMTAb = "OZD8ij"
		const stringQ4T32Hg = "TxlVV8"
		const string7nS53w = "i2VdqZk4TVTorvoOQbSzGIiSyQtziwTjwiKA3q"
		const byteb0HjSve = "0x091e030e0411070612160f1c051a0e11191004040515"
		const addressOrWElr = accounts[2]
		const addresskAPtolM = await Votingr4jWzjw.owner.call({from: accounts[4]});
		const uint256iMCzCxG = await Votingr4jWzjw.snapshot.call({from: accounts[0]});
		const boolHsjwKSl = await Votingr4jWzjw.isExchangeFactory.call(addressQ6JIcz2, {from: accounts[4]});
		const boolGpDKVMF = await Votingr4jWzjw.increaseAllowance.call(addressdEvCcqX, uintdYSLdZi, {from: accounts[2]});
		const 
XWcyHY = await Votingr4jWzjw.createProposal.call(addressOrWElr, byteb0HjSve, string7nS53w, stringQ4T32Hg, stringahCMTAb, {from: accounts[1]});
		const uint256jBoLXK = await Votingr4jWzjw.snapshot.call({from: accounts[2]});
	});

	it('test for Voting', async () => {
		const addressTzFcqZv = accounts[2]
		const Voting7kSXLC = await Voting.new(addressTzFcqZv, {from: accounts[1]});
		await Voting7kSXLC.renounceOwnership.call({from: accounts[1]});
		await Voting7kSXLC.onRegistryRefresh.call({from: accounts[2]});
		await Voting7kSXLC.onlyVotingSystem.call({from: accounts[4]});
		await Voting7kSXLC.onlyMinter.call({from: accounts[2]});
	});

	it('test for Voting', async () => {
		const VotingzG887UM = await Voting.new({from: accounts[3]});
		const uintkrqfYmx = BigInt("1171")
		const addressQWszbxs = accounts[5]
		const boolXAQRGx8 = true
		const uintU99DpNa = BigInt("1335")
		const uint256QPkan1 = await VotingzG887UM.pause.call(uintkrqfYmx, {from: accounts[2]});
		const addresswxm0X0G = await VotingzG887UM.updateRegistry.call(addressQWszbxs, {from: accounts[4]});
		const uint256AUGxJ1u = await VotingzG887UM.vote.call(uintU99DpNa, boolXAQRGx8, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for Voting', async () => {
		const addresshzo6wuh = accounts[2]
		const Voting7kSXLC = await Voting.new(addresshzo6wuh, {from: accounts[1]});
		const addressrglFEW = accounts[5]
		const uintpFXPt8E = BigInt("160")
		const boolPEhu2yv = await Voting7kSXLC.didAddressVote.call(uintpFXPt8E, addressrglFEW, {from: accounts[4]});
		await Voting7kSXLC.onlyRegistry.call({from: accounts[0]});
		await Voting7kSXLC.onlyVotingSystem.call({from: accounts[4]});
	});

	it('test for Voting', async () => {
		const addressB7sOOzw = accounts[2]
		const Voting7kSXLC = await Voting.new(addressB7sOOzw, {from: accounts[1]});
		const uintytlafbG = BigInt("1557")
		const uint256uDlm2q = await Voting7kSXLC.pause.call(uintytlafbG, {from: accounts[5]});
		await Voting7kSXLC.onlyVotingSystem.call({from: accounts[4]});
	});

	it('test for Voting', async () => {
		const addressUtNaTw2 = accounts[2]
		const Voting7kSXLC = await Voting.new(addressUtNaTw2, {from: accounts[1]});
		const uintWLlFWM1 = BigInt("1881")
		const addressEzVw1QQ = accounts[6]
		const uintSzxpBet = BigInt("456")
		const addresssxvFSEd = accounts[2]
		const uint256iY3R0V6 = await Voting7kSXLC.veto.call(uintWLlFWM1, {from: accounts[1]});
		const boolY388KQ = await Voting7kSXLC.isValidVerifierAddress.call(addressEzVw1QQ, {from: accounts[2]});
		const addresszDAX4SX = await Voting7kSXLC.burnFrom.call(addresssxvFSEd, uintSzxpBet, {from: accounts[0]});
	});

	it('test for Voting', async () => {
		const addressMDnUCAk = accounts[2]
		const Voting7kSXLC = await Voting.new(addressMDnUCAk, {from: accounts[1]});
		const addresslzsMv75 = accounts[0]
		const addressMV4RrB4 = accounts[4]
		const boolZQdG0bQ = await Voting7kSXLC.isVotingSystem.call(addresslzsMv75, {from: accounts[4]});
		const addressieHs7Np = await Voting7kSXLC.updateRegistry.call(addressMV4RrB4, {from: accounts[0]});
		await Voting7kSXLC.onlyVotingSystem.call({from: accounts[4]});
		await Voting7kSXLC.requiresWalletAcccess.call({from: accounts[2]});
	});

	it('test for Voting', async () => {
		const VotingscCCMH7 = await Voting.new({from: accounts[1]});
		const addressxI2uXWM = accounts[2]
		const uintj7A6BIx = BigInt("40")
		const boolh8y8i9 = await VotingscCCMH7.didAddressVote.call(uintj7A6BIx, addressxI2uXWM, {from: accounts[5]});
		await VotingscCCMH7.renounceMinter.call({from: accounts[4]});
		await VotingscCCMH7.onlyVotingSystem.call({from: accounts[0]});
	});

	it('test for Voting', async () => {
		const addressCTfkWOc = accounts[2]
		const Voting7kSXLC = await Voting.new(addressCTfkWOc, {from: accounts[1]});
		const uintDvvOVyS = BigInt("230")
		const addressbH3qxjM = accounts[3]
		const addressZpPo6o = accounts[6]
		const boolcGKxEaT = await Voting7kSXLC.approve.call(addressbH3qxjM, uintDvvOVyS, {from: accounts[1]});
		const boolY388KQ = await Voting7kSXLC.isValidVerifierAddress.call(addressZpPo6o, {from: accounts[2]});
	});
})