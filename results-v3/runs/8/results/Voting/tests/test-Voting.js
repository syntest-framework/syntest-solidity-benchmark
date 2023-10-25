const Voting = artifacts.require("Voting");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Voting', (accounts) => {
	it('test for Voting', async () => {
		const VotingXbvcBzB = await Voting.new({from: accounts[1]});
		const uintEsuTRrG = BigInt("1738")
		const addressifImq1X = accounts[3]
		const addressm27qoPt = accounts[0]
		const boolP4yMBfn = await VotingXbvcBzB.decreaseAllowance.call(addressifImq1X, uintEsuTRrG, {from: accounts[0]});
		const stringzYxcBJY = await VotingXbvcBzB.name.call({from: accounts[2]});
		const booliwxkQa = await VotingXbvcBzB.isExchangeFactory.call(addressm27qoPt, {from: accounts[2]});
		const uint256QK69WCH = await VotingXbvcBzB.totalSupply.call({from: accounts[4]});
	});

	it('test for Voting', async () => {
		const addressQ7RuBrD = accounts[0]
		const VotingGrMpWMB = await Voting.new(addressQ7RuBrD, {from: accounts[4]});
		const addresssdDioXN = accounts[2]
		const addressp8JvKXj = accounts[2]
		const addressiNf6r5q = "0x0000000000000000000000000000000000000001"
		const addressJQtSFM = await VotingGrMpWMB.ownableUpgrade.call(addresssdDioXN, {from: accounts[5]});
		await VotingGrMpWMB.requiresLiquidityTokenSnapshotAccess.call({from: accounts[0]});
		const bool02BQtK = await VotingGrMpWMB.isValidStamperAddress.call(addressp8JvKXj, {from: accounts[2]});
		const booloaR9OCT = await VotingGrMpWMB.isOwner.call({from: accounts[2]});
		const addressnfSQNPF = await VotingGrMpWMB.ownableUpgrade.call(addressiNf6r5q, {from: accounts[3]});
	});

	it('test for Voting', async () => {
		const addressIrkCD8C = accounts[1]
		const VotingqDxDidQ = await Voting.new(addressIrkCD8C, {from: accounts[1]});
		const uintOi68raK = BigInt("1205")
		const addressvXFBHr2 = accounts[4]
		const addressQ9p6s91 = "0x0000000000000000000000000000000000000001"
		await VotingqDxDidQ.onlyOracle.call({from: accounts[0]});
		const stringxW89gdy = await VotingqDxDidQ.symbol.call({from: accounts[3]});
		const boolh6CX1r = await VotingqDxDidQ.transferFrom.call(addressQ9p6s91, addressvXFBHr2, uintOi68raK, {from: accounts[4]});
		const boolBTLVBDe = await VotingqDxDidQ.isOwner.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for Voting', async () => {
		const addresstkyQQzC = accounts[2]
		const Votingzw8HG0p = await Voting.new(addresstkyQQzC, {from: accounts[2]});
		const addressU8eEjrb = accounts[4]
		const addressa7FlFwi = accounts[1]
		const stringK6SuWE = "EMKMvWN2WnepcIx3Gdu4oIw6y9t"
		const stringvlFgtOg = "teDNEQ1VIXwHiSoVzr13drmdcixIn3f34IJPbSRp6zLkRM"
		const stringnKLKxYz = "jX6xBUmMEYqIwh1mFhjl6te3ubjXeGM2st6KvsdgcG"
		const byteKLRu2G9 = "0x01171516130d041a11181a160f1e061c1402160c101a041c0e041f0d09"
		const addressnBgqteT = accounts[0]
		const boolE4swxDE = await Votingzw8HG0p.isValidStamperAddress.call(addressU8eEjrb, {from: accounts[2]});
		await Votingzw8HG0p.requiresWalletAcccess.call({from: accounts[2]});
		const booljuu6CB = await Votingzw8HG0p.isValidStamperAddress.call(addressa7FlFwi, {from: accounts[2]});
		const 
fFLx2mg = await Votingzw8HG0p.createProposal.call(addressnBgqteT, byteKLRu2G9, stringnKLKxYz, stringvlFgtOg, stringK6SuWE, {from: accounts[3]});
	});

	it('test for Voting', async () => {
		const addressxtzSWYH = "0x0000000000000000000000000000000000000001"
		const VotingdSdzfwk = await Voting.new(addressxtzSWYH, {from: accounts[1]});
		const addressgnkkz3 = accounts[0]
		const addressb5mBsX = accounts[3]
		const stringJ5Iko9 = "EMCGm1ev6wTPl2afVTzzdp9mo9MAOUxUtHITzxUhUU6682sBASxKu5HXWmzvSqxzyP049pvQ3wNztKrFPf6mLiv3F12mDkRz"
		const stringWGi8Frb = "ncHYvLrTMNWY4ePsZVQzzsSsNXz0zjsPUCk1U"
		const stringcvqd7Zh = "3hyGjU6mmuqn2tnjeMHhfpxCMOxEplM6FnLYXP5PGeGaAEltPx5uWszAOxOnejvJ4W8ziJ"
		const bytet09xx0S = "0x18110311140c150f090a1408"
		const addressliwHgo = accounts[0]
		const boolHoKsWjU = await VotingdSdzfwk.isVotingSystem.call(addressgnkkz3, {from: accounts[1]});
		const boolRShoHQ = await VotingdSdzfwk.isValidOracleAddress.call(addressb5mBsX, {from: accounts[3]});
		const 
xiuXfbn = await VotingdSdzfwk.createProposal.call(addressliwHgo, bytet09xx0S, stringcvqd7Zh, stringWGi8Frb, stringJ5Iko9, {from: accounts[1]});
	});

	it('test for Voting', async () => {
		const Votingu7LQlg = await Voting.new({from: accounts[2]});
		const uintbTyB6cK = BigInt("534")
		const addressuoKLgQU = accounts[3]
		const uintv3TQyKc = BigInt("1774")
		const stringeiTcniu = await Votingu7LQlg.symbol.call({from: accounts[4]});
		const uint2567pxBDZ = await Votingu7LQlg.resolve.call(uintbTyB6cK, {from: accounts[0]});
		const boolKXAHQ3p = await Votingu7LQlg.didAddressVote.call(uintv3TQyKc, addressuoKLgQU, {from: accounts[0]});
	});

	it('test for Voting', async () => {
		const addressq02DFYV = accounts[0]
		const VotingOYisYjM = await Voting.new(addressq02DFYV, {from: accounts[0]});
		const addressg7GZ9tf = "0x0000000000000000000000000000000000000001"
		const uintQu8YeV7 = BigInt("1948")
		const uintvYt289R = BigInt("256")
		const addressSQMzYV7 = accounts[3]
		const addressTltE1Pj = accounts[0]
		const booleBTGPQ2 = await VotingOYisYjM.didAddressVote.call(uintQu8YeV7, addressg7GZ9tf, {from: accounts[2]});
		const boolFWzuyVe = await VotingOYisYjM.transferFrom.call(addressTltE1Pj, addressSQMzYV7, uintvYt289R, {from: accounts[1]});
		await VotingOYisYjM.onlyVotingSystem.call({from: accounts[3]});
		await VotingOYisYjM.onlyMinter.call({from: accounts[4]});
	});

	it('test for Voting', async () => {
		const addressWpxuxJo = accounts[5]
		const VotingF45xXyC = await Voting.new(addressWpxuxJo, {from: accounts[4]});
		const stringviUNdDn = "dBQoGRLx2h58PX42m88Ms6TkEPljskS"
		const stringbgDxpj9 = "fjCt1ztoanKoeez4R6eo4pcYTivSw1CSFPISVaUq3Z"
		const stringDruR1Ri = "iDzF3EUnJHycuKmGwmnhfTcljElJUPStoii8o9xtMlx1YtBT6VKF54i"
		const byteeicewd = "0x0106090e161b08180d121f0a19120301031b031e"
		const addressyAZAj4B = accounts[5]
		const addressm4DXKBE = accounts[4]
		const uintV7USKMC = BigInt("1486")
		const addressdLCPUJf = accounts[4]
		const addressrVwnOM7 = accounts[5]
		const 
igdajDe = await VotingF45xXyC.createProposal.call(addressyAZAj4B, byteeicewd, stringDruR1Ri, stringbgDxpj9, stringviUNdDn, {from: accounts[4]});
		const boolAIFlJzK = await VotingF45xXyC.isValidVerifierAddress.call(addressm4DXKBE, {from: accounts[1]});
		const booldweRz83 = await VotingF45xXyC.transferFrom.call(addressrVwnOM7, addressdLCPUJf, uintV7USKMC, {from: "0x0000000000000000000000000000000000000001"});
		const uint256Do0Sfzx = await VotingF45xXyC.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for Voting', async () => {
		const addressawGGXZM = accounts[0]
		const VotingGrMpWMB = await Voting.new(addressawGGXZM, {from: accounts[4]});
		const uintWtaPsUt = BigInt("353")
		const addressP8lQFkt = accounts[2]
		const addressnhQhzqZ = accounts[0]
		const addressYYBbt6V = accounts[3]
		const addressKV5xGxK = "0x0000000000000000000000000000000000000001"
		const uint256NDeGWOk = await VotingGrMpWMB.pause.call(uintWtaPsUt, {from: accounts[5]});
		const addressJQtSFM = await VotingGrMpWMB.ownableUpgrade.call(addressP8lQFkt, {from: accounts[5]});
		await VotingGrMpWMB.requiresLiquidityTokenSnapshotAccess.call({from: accounts[0]});
		const boolVlNdZRT = await VotingGrMpWMB.isValidVerifierAddress.call(addressnhQhzqZ, {from: accounts[1]});
		const bool02BQtK = await VotingGrMpWMB.isValidStamperAddress.call(addressYYBbt6V, {from: accounts[2]});
		const booloaR9OCT = await VotingGrMpWMB.isOwner.call({from: accounts[2]});
		const addressnfSQNPF = await VotingGrMpWMB.ownableUpgrade.call(addressKV5xGxK, {from: accounts[3]});
	});

	it('test for Voting', async () => {
		const addressLJinEja = accounts[4]
		const VotingU03oAv = await Voting.new(addressLJinEja, {from: accounts[0]});
		const addresshlBHays = accounts[3]
		const uintXOBYO7 = BigInt("149")
		const uintvXGF3b8 = BigInt("25")
		const uintx5ItAun = BigInt("1426")
		const addressNKriByF = accounts[3]
		const boolvXJkSE1 = await VotingU03oAv.isValidOracleAddress.call(addresshlBHays, {from: accounts[2]});
		const uint256llhSuH6 = await VotingU03oAv.resolve.call(uintXOBYO7, {from: accounts[2]});
		const uint256ExuTG40 = await VotingU03oAv.pause.call(uintvXGF3b8, {from: "0x0000000000000000000000000000000000000001"});
		const boollqKRi93 = await VotingU03oAv.approve.call(addressNKriByF, uintx5ItAun, {from: accounts[4]});
	});

	it('test for Voting', async () => {
		const addressERpgZMW = accounts[1]
		const VotingqDxDidQ = await Voting.new(addressERpgZMW, {from: accounts[1]});
		const boolN05BwFR = false
		const uintj0h3L86 = BigInt("1146")
		const uintM0CAMU8 = BigInt("1205")
		const addresslQvMfuU = accounts[4]
		const addressXHMAEg2 = "0x0000000000000000000000000000000000000001"
		const uint256ish3gxU = await VotingqDxDidQ.vote.call(uintj0h3L86, boolN05BwFR, {from: accounts[1]});
		await VotingqDxDidQ.onlyOracle.call({from: accounts[0]});
		const stringxW89gdy = await VotingqDxDidQ.symbol.call({from: accounts[3]});
		const boolh6CX1r = await VotingqDxDidQ.transferFrom.call(addressXHMAEg2, addresslQvMfuU, uintM0CAMU8, {from: accounts[4]});
		const boolBTLVBDe = await VotingqDxDidQ.isOwner.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for Voting', async () => {
		const addresskUWKJsi = accounts[5]
		const VotingF45xXyC = await Voting.new(addresskUWKJsi, {from: accounts[4]});
		const addressprsxb45 = accounts[2]
		const uintCah388 = BigInt("1033")
		const boolvsiURly = await VotingF45xXyC.isExchangeFactory.call(addressprsxb45, {from: accounts[1]});
		const uint256NQJT1Kr = await VotingF45xXyC.pause.call(uintCah388, {from: accounts[5]});
		const uint256Do0Sfzx = await VotingF45xXyC.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for Voting', async () => {
		const addressvN6Ah4u = accounts[3]
		const VotingnZxgLYo = await Voting.new(addressvN6Ah4u, {from: accounts[2]});
		const uintoAZGEW = BigInt("1592")
		const uint256SlSPT6H = await VotingnZxgLYo.resolve.call(uintoAZGEW, {from: accounts[2]});
		const uint256LfKExiF = await VotingnZxgLYo.totalSupply.call({from: accounts[3]});
		await VotingnZxgLYo.onlyOwner.call({from: accounts[4]});
		await VotingnZxgLYo.requiresLiquidityTokenSnapshotAccess.call({from: accounts[4]});
	});

	it('test for Voting', async () => {
		const VotingCm6OQmK = await Voting.new({from: accounts[0]});
		const booli8ixLMh = await VotingCm6OQmK.isOwner.call({from: accounts[5]});
		await VotingCm6OQmK.onlyMinter.call({from: accounts[1]});
		const addressY1qJv6 = await VotingCm6OQmK.getRegistryAddress.call({from: accounts[4]});
		await VotingCm6OQmK.onlyOwner.call({from: accounts[2]});
	});

	it('test for Voting', async () => {
		const addressjtgUwF = accounts[3]
		const VotingnZxgLYo = await Voting.new(addressjtgUwF, {from: accounts[2]});
		const addressAF5D4DN = accounts[2]
		const uintBW62suC = BigInt("1592")
		const boolztdkHbU = await VotingnZxgLYo.isValidVerifierAddress.call(addressAF5D4DN, {from: accounts[0]});
		const uint256SlSPT6H = await VotingnZxgLYo.resolve.call(uintBW62suC, {from: accounts[2]});
		await VotingnZxgLYo.requiresLiquidityTokenSnapshotAccess.call({from: accounts[4]});
	});

	it('test for Voting', async () => {
		const addressJfm0WR5 = accounts[5]
		const VotingF45xXyC = await Voting.new(addressJfm0WR5, {from: accounts[4]});
		const uintW3gvJyL = BigInt("1595")
		const addressOfVxT9w = "0x0000000000000000000000000000000000000001"
		const stringviUNdDn = "dBQoGRLx2h58PX42m88Ms6TkEPljskS"
		const stringbgDxpj9 = "fjCt1ztoanKoeez4R6eo4pcYTivSw1CSFPISVaUq3Z"
		const stringDruR1Ri = "iDzF3EUnJHycuKmGwmnhfTcljElJUPStoii8o9xtMlx1YtBT6VKF54i"
		const bytenFghSSm = "0x0106090e161b08180d121f0a19120301031b031e"
		const addressMs7xsG = accounts[5]
		const booljYePiXW = await VotingF45xXyC.approve.call(addressOfVxT9w, uintW3gvJyL, {from: accounts[4]});
		const 
igdajDe = await VotingF45xXyC.createProposal.call(addressMs7xsG, bytenFghSSm, stringDruR1Ri, stringbgDxpj9, stringviUNdDn, {from: accounts[4]});
	});

	it('test for Voting', async () => {
		const VotingT7HJ0Q5 = await Voting.new({from: accounts[5]});
		const addresskl4FgId = accounts[2]
		const uintGDzlDLd = BigInt("912")
		const addressplAwETC = accounts[1]
		const addressFNCvVE2 = await VotingT7HJ0Q5.updateRegistry.call(addresskl4FgId, {from: accounts[5]});
		await VotingT7HJ0Q5.onlyVotingSystem.call({from: accounts[4]});
		const uint256TBQnr1x = await VotingT7HJ0Q5.pause.call(uintGDzlDLd, {from: accounts[2]});
		const boolaTOu0uN = await VotingT7HJ0Q5.isExchangeFactory.call(addressplAwETC, {from: accounts[4]});
	});
})