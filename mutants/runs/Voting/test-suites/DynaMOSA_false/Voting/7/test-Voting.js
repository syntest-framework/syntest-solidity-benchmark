const Voting = artifacts.require("Voting");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Voting', (accounts) => {
	it('test for Voting', async () => {
		const VotingcoeD7U = await Voting.new({from: accounts[1]});
		const addressQMfsaU = "0x0000000000000000000000000000000000000001"
		const uintj4rhSih = BigInt("1581")
		const addressScU2TFz = accounts[3]
		const uintiw9e19 = BigInt("1768")
		const uint256Wwuo4RB = await VotingcoeD7U.snapshot.call({from: accounts[2]});
		const boolwdSqaL1 = await VotingcoeD7U.isValidStamperAddress.call(addressQMfsaU, {from: accounts[3]});
		const boolevnsAgo = await VotingcoeD7U.decreaseAllowance.call(addressScU2TFz, uintj4rhSih, {from: accounts[3]});
		const uint2569HZcHS = await VotingcoeD7U.veto.call(uintiw9e19, {from: accounts[3]});
	});

	it('test for Voting', async () => {
		const Votingci68DNx = await Voting.new({from: accounts[3]});
		const uint3G8oSK = BigInt("560")
		const addressJ2ZIZtn = accounts[5]
		const uintT3CLgTD = BigInt("1808")
		await Votingci68DNx.onlyVotingSystem.call({from: accounts[0]});
		await Votingci68DNx.onlyMinter.call({from: accounts[2]});
		const addressL1saG1y = await Votingci68DNx.owner.call({from: accounts[2]});
		await Votingci68DNx.onlyExchange.call({from: accounts[4]});
		const addressRwmRZhd = await Votingci68DNx.burnFrom.call(addressJ2ZIZtn, uint3G8oSK, {from: accounts[1]});
		const uint256h8uGN9D = await Votingci68DNx.veto.call(uintT3CLgTD, {from: accounts[1]});
	});

	it('test for Voting', async () => {
		const Voting3xBzWE = await Voting.new({from: "0x0000000000000000000000000000000000000001"});
		const uintJhZBy6t = BigInt("729")
		const addresskBPeyKW = accounts[2]
		const uint256PKQnfzq = await Voting3xBzWE.totalSupply.call({from: accounts[0]});
		await Voting3xBzWE.onlyOwner.call({from: accounts[0]});
		const uint256jKUPguy = await Voting3xBzWE.resolve.call(uintJhZBy6t, {from: accounts[2]});
		const addressStngRIX = await Voting3xBzWE.getRegistryAddress.call({from: accounts[3]});
		await Voting3xBzWE.onlyMinter.call({from: accounts[1]});
		const addressfRhWPza = await Voting3xBzWE.addMinter.call(addresskBPeyKW, {from: accounts[4]});
	});

	it('test for Voting', async () => {
		const addressTIeMl5C = accounts[2]
		const Votingzn6Mjzh = await Voting.new(addressTIeMl5C, {from: accounts[0]});
		const addressEu0J2jm = accounts[1]
		const uintyMGD1i0 = BigInt("648")
		const addresssnkcLoE = await Votingzn6Mjzh.getRegistryAddress.call({from: accounts[2]});
		await Votingzn6Mjzh.onlyMinter.call({from: accounts[3]});
		await Votingzn6Mjzh.requiresWalletAcccess.call({from: accounts[3]});
		const bool4alOR7 = await Votingzn6Mjzh.didAddressVote.call(uintyMGD1i0, addressEu0J2jm, {from: accounts[3]});
		await Votingzn6Mjzh.requiresWalletAcccess.call({from: accounts[1]});
	});

	it('test for Voting', async () => {
		const addressxLCv7xu = accounts[2]
		const VotingTa8h3m = await Voting.new(addressxLCv7xu, {from: accounts[4]});
		const addressLYbpCzY = accounts[4]
		const addressaFeFFsj = await VotingTa8h3m.transferOwnership.call(addressLYbpCzY, {from: accounts[5]});
		const uint256MizSsQ5 = await VotingTa8h3m.totalSupply.call({from: accounts[2]});
	});

	it('test for Voting', async () => {
		const addressP7mZArK = accounts[2]
		const VotingBRcXpl = await Voting.new(addressP7mZArK, {from: accounts[1]});
		const uint5NOP1N = BigInt("980")
		const addresshF6otbU = accounts[0]
		const uint2hIiVW = BigInt("1186")
		const uintiIrBrPZ = BigInt("843")
		const boolMO49Wy = await VotingBRcXpl.approve.call(addresshF6otbU, uint5NOP1N, {from: accounts[2]});
		const uint256MCAiYvE = await VotingBRcXpl.burn.call(uint2hIiVW, {from: accounts[2]});
		const uint256EzIz0v5 = await VotingBRcXpl.totalSupplyAt.call(uintiIrBrPZ, {from: accounts[3]});
		await VotingBRcXpl.requiresLiquidityTokenSnapshotAccess.call({from: accounts[2]});
		await VotingBRcXpl.requiresLiquidityTokenSnapshotAccess.call({from: accounts[0]});
	});

	it('test for Voting', async () => {
		const addressbmTAWJD = "0x0000000000000000000000000000000000000001"
		const Votinghl17hV6 = await Voting.new(addressbmTAWJD, {from: accounts[2]});
		const addressKbtWEyI = accounts[2]
		const uintdOitfAL = BigInt("2037")
		const boolUvADfpJ = await Votinghl17hV6.isValidVerifierAddress.call(addressKbtWEyI, {from: accounts[2]});
		await Votinghl17hV6.onlyVotingSystem.call({from: accounts[4]});
		const uint256L3kCvWi = await Votinghl17hV6.totalSupplyAt.call(uintdOitfAL, {from: accounts[5]});
	});

	it('test for Voting', async () => {
		const VotingRklVS9 = await Voting.new({from: accounts[2]});
		const boolpS1s9KT = await VotingRklVS9.isOwner.call({from: accounts[5]});
		await VotingRklVS9.onlyOwner.call({from: accounts[2]});
		await VotingRklVS9.onlyRegistry.call({from: accounts[5]});
	});

	it('test for Voting', async () => {
		const addressuoZLJ7 = accounts[2]
		const VotingBRcXpl = await Voting.new(addressuoZLJ7, {from: accounts[1]});
		const addressji6giRg = accounts[1]
		const uintIXvT7Q = BigInt("1225")
		const addressykv0tby = accounts[4]
		const uintPyV0R72 = BigInt("980")
		const addressp6LnFzS = accounts[0]
		const uint3HS1Ly = BigInt("1186")
		const uintuRwzZs = BigInt("843")
		const addressydfvoDQ = await VotingBRcXpl.transferOwnership.call(addressji6giRg, {from: accounts[1]});
		const boolfLvjOKJ = await VotingBRcXpl.decreaseAllowance.call(addressykv0tby, uintIXvT7Q, {from: accounts[1]});
		const boolMO49Wy = await VotingBRcXpl.approve.call(addressp6LnFzS, uintPyV0R72, {from: accounts[2]});
		const uint256MCAiYvE = await VotingBRcXpl.burn.call(uint3HS1Ly, {from: accounts[2]});
		const uint256EzIz0v5 = await VotingBRcXpl.totalSupplyAt.call(uintuRwzZs, {from: accounts[3]});
		await VotingBRcXpl.requiresLiquidityTokenSnapshotAccess.call({from: accounts[2]});
	});

	it('test for Voting', async () => {
		const addresso9tr8Dg = accounts[1]
		const VotingQaCR2pC = await Voting.new(addresso9tr8Dg, {from: accounts[2]});
		const uint7E30qY = BigInt("2028")
		const addressk1wFAgK = accounts[3]
		const addressfNsrYu = accounts[4]
		const uint256LzckOkJ = await VotingQaCR2pC.veto.call(uint7E30qY, {from: accounts[2]});
		const bool17mLHg = await VotingQaCR2pC.isVotingSystem.call(addressk1wFAgK, {from: accounts[3]});
		const addressS0ZL7vf = await VotingQaCR2pC.updateRegistry.call(addressfNsrYu, {from: accounts[0]});
	});

	it('test for Voting', async () => {
		const VotingxwMFnb9 = await Voting.new({from: accounts[4]});
		const addressChXVFsc = accounts[2]
		const addressYFwS3A = accounts[3]
		const uintXUeAJuD = BigInt("1317")
		const addressiq6Ev89 = await VotingxwMFnb9.transferOwnership.call(addressChXVFsc, {from: "0x0000000000000000000000000000000000000001"});
		await VotingxwMFnb9.nonReentrant.call({from: "0x0000000000000000000000000000000000000001"});
		const booliq2esbS = await VotingxwMFnb9.isMinter.call(addressYFwS3A, {from: accounts[1]});
		const uint256juLiyxH = await VotingxwMFnb9.veto.call(uintXUeAJuD, {from: accounts[3]});
	});

	it('test for Voting', async () => {
		const addressuzhbnke = accounts[1]
		const VotingkAvNKMG = await Voting.new(addressuzhbnke, {from: accounts[2]});
		const addressFDpxKuQ = accounts[1]
		const uintowco7GF = BigInt("669")
		const addressugERMR1 = accounts[1]
		const addresshG0W0Y = await VotingkAvNKMG.ownableUpgrade.call(addressFDpxKuQ, {from: accounts[2]});
		const uint8VUd1PE = await VotingkAvNKMG.decimals.call({from: accounts[3]});
		await VotingkAvNKMG.nonReentrant.call({from: accounts[5]});
		await VotingkAvNKMG.requiresLiquidityTokenSnapshotAccess.call({from: accounts[2]});
		const address6jy9U9 = await VotingkAvNKMG.burnFrom.call(addressugERMR1, uintowco7GF, {from: accounts[1]});
	});

	it('test for Voting', async () => {
		const VotingCXFomAH = await Voting.new({from: accounts[0]});
		const stringZCMnzRe = "CpADMaZiE8kGwS3hNQ8Qx81amlQ4SjBMBe58I3Wo"
		const stringJwfrM5Z = "sYpgzgedJcxE6k7LVgq9nKpqS8RgB5SsDTeFhD9qLICQ7MJw8YuJiWx1R5RIMGDmlVV6Nsk5SgumgnFTYhEiA92RVciOFY"
		const stringkwANF4V = "h43CskO1xzzeUwBbbjQ0ORwPk6RLrgp8O77C4mbv6sFMdqOa4NAMOvngyWCh8XAA2p3YMwObaozT6Eu9UfoVXUOhcsFX9EHTH"
		const byteqRtOjp7 = "0x1215090d0506170804060a070c090900141f1201061e"
		const addressr2vwyLg = accounts[0]
		const uintcPbSZAg = BigInt("978")
		const addresshlTQtdg = "0x0000000000000000000000000000000000000001"
		await VotingCXFomAH.onlyVotingSystem.call({from: accounts[4]});
		await VotingCXFomAH.onlyMinter.call({from: "0x0000000000000000000000000000000000000001"});
		const 
rJmKCs = await VotingCXFomAH.createProposal.call(addressr2vwyLg, byteqRtOjp7, stringkwANF4V, stringJwfrM5Z, stringZCMnzRe, {from: accounts[2]});
		const boolxS6LjSF = await VotingCXFomAH.decreaseAllowance.call(addresshlTQtdg, uintcPbSZAg, {from: accounts[4]});
		const uint256jJPou2A = await VotingCXFomAH.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
		await VotingCXFomAH.requiresWalletAcccess.call({from: accounts[4]});
	});

	it('test for Voting', async () => {
		const addressTT14pgL = accounts[2]
		const VotingTa8h3m = await Voting.new(addressTT14pgL, {from: accounts[4]});
		await VotingTa8h3m.renounceOwnership.call({from: accounts[4]});
		const uint256MizSsQ5 = await VotingTa8h3m.totalSupply.call({from: accounts[2]});
	});

	it('test for Voting', async () => {
		const addresswCJwhG8 = accounts[2]
		const VotingTa8h3m = await Voting.new(addresswCJwhG8, {from: accounts[4]});
		const uintIH81zB = BigInt("571")
		const uint256gounQte = await VotingTa8h3m.pause.call(uintIH81zB, {from: accounts[0]});
		const uint256MizSsQ5 = await VotingTa8h3m.totalSupply.call({from: accounts[2]});
	});

	it('test for Voting', async () => {
		const addressVa79ji1 = accounts[2]
		const Votingzn6Mjzh = await Voting.new(addressVa79ji1, {from: accounts[0]});
		const addresshl99ycI = accounts[0]
		const addressFoGwgv = accounts[1]
		const uintBtSjeZd = BigInt("648")
		const boolGHoY3JE = await Votingzn6Mjzh.isValidStamperAddress.call(addresshl99ycI, {from: accounts[2]});
		const addresssnkcLoE = await Votingzn6Mjzh.getRegistryAddress.call({from: accounts[2]});
		await Votingzn6Mjzh.onlyMinter.call({from: accounts[3]});
		await Votingzn6Mjzh.requiresWalletAcccess.call({from: accounts[3]});
		const bool4alOR7 = await Votingzn6Mjzh.didAddressVote.call(uintBtSjeZd, addressFoGwgv, {from: accounts[3]});
		await Votingzn6Mjzh.requiresWalletAcccess.call({from: accounts[1]});
		await Votingzn6Mjzh.onlyExchangeFactoryOrVotingSystem.call({from: accounts[3]});
	});

	it('test for Voting', async () => {
		const addressn3XfJsO = accounts[2]
		const Votingzn6Mjzh = await Voting.new(addressn3XfJsO, {from: accounts[0]});
		const addressHqouReU = accounts[1]
		const uintWWPWusO = BigInt("648")
		const addressgx8KZYG = await Votingzn6Mjzh.owner.call({from: accounts[5]});
		const addresssnkcLoE = await Votingzn6Mjzh.getRegistryAddress.call({from: accounts[2]});
		await Votingzn6Mjzh.onlyMinter.call({from: accounts[3]});
		await Votingzn6Mjzh.requiresWalletAcccess.call({from: accounts[3]});
		const bool4alOR7 = await Votingzn6Mjzh.didAddressVote.call(uintWWPWusO, addressHqouReU, {from: accounts[3]});
		await Votingzn6Mjzh.requiresWalletAcccess.call({from: accounts[1]});
	});
})