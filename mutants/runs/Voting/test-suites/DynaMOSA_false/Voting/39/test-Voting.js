const Voting = artifacts.require("Voting");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Voting', (accounts) => {
	it('test for Voting', async () => {
		const addressvnhfgd4 = accounts[3]
		const VotingHbHFdMr = await Voting.new(addressvnhfgd4, {from: accounts[4]});
		const addressYCQFA7k = accounts[5]
		const uintzsvzCws = BigInt("1391")
		const stringA9Wobnd = await VotingHbHFdMr.name.call({from: accounts[0]});
		const addressQMjOGRy = await VotingHbHFdMr.ownableUpgrade.call(addressYCQFA7k, {from: accounts[1]});
		await VotingHbHFdMr.onlyExchangeFactory.call({from: accounts[3]});
		await VotingHbHFdMr.onlyOwner.call({from: accounts[2]});
		const uint256evzNOX = await VotingHbHFdMr.veto.call(uintzsvzCws, {from: accounts[3]});
	});

	it('test for Voting', async () => {
		const addressEbhNDOB = accounts[1]
		const Votingk46JpX = await Voting.new(addressEbhNDOB, {from: "0x0000000000000000000000000000000000000001"});
		const uintRT7PbBW = BigInt("1641")
		await Votingk46JpX.onlyVotingSystem.call({from: accounts[3]});
		const uint256c69tSwt = await Votingk46JpX.veto.call(uintRT7PbBW, {from: accounts[4]});
		const booldFLtK3 = await Votingk46JpX.isOwner.call({from: accounts[3]});
	});

	it('test for Voting', async () => {
		const VotingRGvdJSt = await Voting.new({from: accounts[4]});
		const uintYnceZyw = BigInt("1866")
		const addressFVFWUbu = accounts[1]
		const uintnIaUNJR = BigInt("1357")
		const addressG4ERHmI = accounts[5]
		const uint256JBqLLKh = await VotingRGvdJSt.totalSupplyAt.call(uintYnceZyw, {from: accounts[4]});
		const boolJ2al2Wz = await VotingRGvdJSt.isMinter.call(addressFVFWUbu, {from: accounts[4]});
		const uint8SHTD0Ek = await VotingRGvdJSt.decimals.call({from: accounts[0]});
		const uint256WGJaFN = await VotingRGvdJSt.balanceOfAt.call(addressG4ERHmI, uintnIaUNJR, {from: accounts[3]});
	});

	it('test for Voting', async () => {
		const addressrsjRjGn = accounts[3]
		const Votingt6HBzrT = await Voting.new(addressrsjRjGn, {from: accounts[4]});
		const address5ol0xr = accounts[3]
		const uinteZUVEXa = BigInt("1363")
		const addressVS3J3lm = accounts[1]
		const addressA8QW2PP = accounts[2]
		const addressVzJPbAM = accounts[1]
		const uintpFYxfQB = BigInt("171")
		const addresstY79F1S = await Votingt6HBzrT.ownableUpgrade.call(address5ol0xr, {from: accounts[4]});
		await Votingt6HBzrT.renounceOwnership.call({from: accounts[2]});
		const boolZ8Ctlba = await Votingt6HBzrT.transferFrom.call(addressA8QW2PP, addressVS3J3lm, uinteZUVEXa, {from: accounts[0]});
		const addresshLqe3p = await Votingt6HBzrT.addMinter.call(addressVzJPbAM, {from: accounts[0]});
		const uint256zYP9P7e = await Votingt6HBzrT.totalSupplyAt.call(uintpFYxfQB, {from: accounts[0]});
	});

	it('test for Voting', async () => {
		const addressQGMoKcZ = accounts[2]
		const VotingkgPeBrO = await Voting.new(addressQGMoKcZ, {from: accounts[2]});
		const uintHLDRPgu = BigInt("811")
		const uint256T8ZRHhN = await VotingkgPeBrO.approve.call(uintHLDRPgu, {from: accounts[4]});
		await VotingkgPeBrO.onlyExchangeFactoryOrVotingSystem.call({from: accounts[1]});
	});

	it('test for Voting', async () => {
		const addressSNPAVFP = accounts[3]
		const VotingrReXPxu = await Voting.new(addressSNPAVFP, {from: accounts[2]});
		const addressAlQ9Moj = accounts[1]
		const uintiXg65S = BigInt("1987")
		const addressIfUlSpl = accounts[3]
		const uint0N8EXS = BigInt("1912")
		const addresslq6sBho = accounts[3]
		const addresse3WaqgC = accounts[5]
		const uintRsN80O3 = BigInt("127")
		const addressqswsEJp = accounts[2]
		const addressE7sai5U = accounts[3]
		const addressoro0Gk1 = accounts[4]
		const uintOzpZuKx = BigInt("1186")
		const boolOrNRuv = await VotingrReXPxu.isVotingSystem.call(addressAlQ9Moj, {from: accounts[1]});
		const addressl66snrC = await VotingrReXPxu.burnFrom.call(addressIfUlSpl, uintiXg65S, {from: accounts[3]});
		const boolLtN563 = await VotingrReXPxu.decreaseAllowance.call(addresslq6sBho, uint0N8EXS, {from: accounts[1]});
		const addressmHltKhN = await VotingrReXPxu.addMinter.call(addresse3WaqgC, {from: accounts[3]});
		const boolnfZfXvO = await VotingrReXPxu.transfer.call(addressqswsEJp, uintRsN80O3, {from: accounts[1]});
		const boolfJWIEmP = await VotingrReXPxu.isExchangeFactory.call(addressE7sai5U, {from: accounts[1]});
		const boolIHEJwrV = await VotingrReXPxu.didAddressVote.call(uintOzpZuKx, addressoro0Gk1, {from: accounts[3]});
	});

	it('test for Voting', async () => {
		const addressYrd979r = accounts[2]
		const VotingqF6DkQp = await Voting.new(addressYrd979r, {from: accounts[0]});
		const addressymN25Cm = accounts[2]
		const uintthi8cAp = BigInt("1941")
		const addressnNzG6w4 = accounts[4]
		const addresstxCteHx = "0x0000000000000000000000000000000000000001"
		const uintoSjJ6gj = BigInt("442")
		const addressKs4D4S7 = accounts[0]
		const addressxohJAeK = accounts[2]
		const uint4UB8k7 = BigInt("1279")
		const addressKfRpKa = accounts[1]
		const boolqF2AuL = await VotingqF6DkQp.didAddressVote.call(uintthi8cAp, addressymN25Cm, {from: accounts[5]});
		const boolCEDsMLv = await VotingqF6DkQp.isVotingSystem.call(addressnNzG6w4, {from: accounts[0]});
		const addresskTLgEFg = await VotingqF6DkQp.updateRegistry.call(addresstxCteHx, {from: accounts[2]});
		const boolnDrABwv = await VotingqF6DkQp.transferFrom.call(addressxohJAeK, addressKs4D4S7, uintoSjJ6gj, {from: accounts[0]});
		const uint256hI8Qlld = await VotingqF6DkQp.balanceOfAt.call(addressKfRpKa, uint4UB8k7, {from: accounts[3]});
	});

	it('test for Voting', async () => {
		const addressE4tHYli = accounts[4]
		const VotingeE8pLLL = await Voting.new(addressE4tHYli, {from: accounts[3]});
		const uintdcRGyk6 = BigInt("2044")
		const addressu5aDJzJ = "0x0000000000000000000000000000000000000001"
		const uint256wUEjfpA = await VotingeE8pLLL.resolve.call(uintdcRGyk6, {from: "0x0000000000000000000000000000000000000001"});
		const uint256KVxjQhK = await VotingeE8pLLL.snapshot.call({from: accounts[3]});
		const boolTNJH9MW = await VotingeE8pLLL.isExchangeFactory.call(addressu5aDJzJ, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for Voting', async () => {
		const addressN9hT1Bz = accounts[4]
		const VotingelsewAv = await Voting.new(addressN9hT1Bz, {from: accounts[3]});
		const addressn4RIz5 = "0x0000000000000000000000000000000000000001"
		const uinto37DuG = BigInt("521")
		const addressIaLRZce = accounts[2]
		const booluY6ySAy = await VotingelsewAv.isValidStamperAddress.call(addressn4RIz5, {from: accounts[3]});
		const boolhI4iUGV = await VotingelsewAv.increaseAllowance.call(addressIaLRZce, uinto37DuG, {from: accounts[1]});
		const addressv6uC8nj = await VotingelsewAv.getRegistryAddress.call({from: accounts[4]});
		await VotingelsewAv.onlyMinter.call({from: accounts[5]});
	});

	it('test for Voting', async () => {
		const addressTAvQph = accounts[2]
		const VotingzY0viFY = await Voting.new(addressTAvQph, {from: accounts[5]});
		const stringJ1v5M7b = "8mSNj4BVGXYoMsJEyfYNwW4HsemQedIYtbs5L0WtIkGLJUUBvs96L2l8NFu74kFWWIqK8EymBnT"
		const stringsId4XnK = "VM95r5kbyjiCripSar3S87tNnG6HMTlTM"
		const stringhhFM9tj = "LiFBKyJgH2818Uc6aDqFiKi3sdKxOVzesGQamiwHUTWrYs2Cwhmx5mtz75gvA"
		const bytetdTsd69 = "0x1f0c060c0019121f1114010d0f1d141e1f1e0f051f"
		const addressZbiFsZn = accounts[4]
		const 
lXIePz = await VotingzY0viFY.createProposal.call(addressZbiFsZn, bytetdTsd69, stringhhFM9tj, stringsId4XnK, stringJ1v5M7b, {from: accounts[1]});
		await VotingzY0viFY.nonReentrant.call({from: accounts[0]});
		await VotingzY0viFY.requiresLiquidityTokenSnapshotAccess.call({from: accounts[2]});
	});

	it('test for Voting', async () => {
		const VotingQ1wlOQi = await Voting.new({from: accounts[1]});
		const uintAOJVKfX = BigInt("329")
		const addressQJ0H2gY = accounts[1]
		const uintR6t7QZ = BigInt("411")
		const addressFc7Vv2S = accounts[0]
		const addressrW8474D = accounts[4]
		const boolR4U9kPB = await VotingQ1wlOQi.approve.call(addressQJ0H2gY, uintAOJVKfX, {from: accounts[3]});
		const boolxUNNnKD = await VotingQ1wlOQi.approve.call(addressFc7Vv2S, uintR6t7QZ, {from: accounts[0]});
		const boolYjh0PVU = await VotingQ1wlOQi.isMinter.call(addressrW8474D, {from: "0x0000000000000000000000000000000000000001"});
		await VotingQ1wlOQi.requiresLiquidityTokenSnapshotAccess.call({from: accounts[3]});
	});

	it('test for Voting', async () => {
		const addressx95MMkX = accounts[4]
		const VotingeE8pLLL = await Voting.new(addressx95MMkX, {from: accounts[3]});
		const addresspsEcZ3Y = accounts[4]
		const uintYqmTxI4 = BigInt("1840")
		const addressofuUhh = accounts[3]
		const uintC06bdEm = BigInt("2074")
		const addressOguwdo = "0x0000000000000000000000000000000000000002"
		const boolO6gzlOV = await VotingeE8pLLL.isExchangeFactory.call(addresspsEcZ3Y, {from: accounts[1]});
		const boolk6Rel9 = await VotingeE8pLLL.mint.call(addressofuUhh, uintYqmTxI4, {from: "0x0000000000000000000000000000000000000001"});
		const uint256wUEjfpA = await VotingeE8pLLL.resolve.call(uintC06bdEm, {from: "0x0000000000000000000000000000000000000001"});
		const uint256KVxjQhK = await VotingeE8pLLL.snapshot.call({from: accounts[3]});
		const boolTNJH9MW = await VotingeE8pLLL.isExchangeFactory.call(addressOguwdo, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for Voting', async () => {
		const VotingMktCFWW = await Voting.new({from: "0x0000000000000000000000000000000000000001"});
		const addressANuTIa = "0x0000000000000000000000000000000000000001"
		await VotingMktCFWW.renounceMinter.call({from: accounts[1]});
		await VotingMktCFWW.onlyExchangeFactory.call({from: accounts[3]});
		const boolJP1PJOI = await VotingMktCFWW.isMinter.call(addressANuTIa, {from: accounts[3]});
	});

	it('test for Voting', async () => {
		const addresscdt9eF = accounts[4]
		const VotingeE8pLLL = await Voting.new(addresscdt9eF, {from: accounts[3]});
		const uintF60PLPs = BigInt("175")
		const addressKwHT2u = accounts[0]
		const uintAMPjnzD = BigInt("2044")
		const uintfGNnXMw = BigInt("1763")
		const addressoUT2vam = accounts[2]
		const addressiRKtv8E = "0x0000000000000000000000000000000000000001"
		const boolnOqUkb = await VotingeE8pLLL.approve.call(addressKwHT2u, uintF60PLPs, {from: "0x0000000000000000000000000000000000000001"});
		const uint256wUEjfpA = await VotingeE8pLLL.resolve.call(uintAMPjnzD, {from: "0x0000000000000000000000000000000000000001"});
		const boolY64EQF = await VotingeE8pLLL.increaseAllowance.call(addressoUT2vam, uintfGNnXMw, {from: accounts[0]});
		const boolTNJH9MW = await VotingeE8pLLL.isExchangeFactory.call(addressiRKtv8E, {from: "0x0000000000000000000000000000000000000001"});
	});
})