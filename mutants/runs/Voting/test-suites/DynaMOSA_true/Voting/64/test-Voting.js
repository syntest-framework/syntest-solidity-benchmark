const Voting = artifacts.require("Voting");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Voting', (accounts) => {
	it('test for Voting', async () => {
		const VotingV6JE4QH = await Voting.new({from: "0x0000000000000000000000000000000000000001"});
		const boolq6CERFi = false
		const uintzyYMzz9 = BigInt("1395")
		const uint256aVdsxD = await VotingV6JE4QH.vote.call(uintzyYMzz9, boolq6CERFi, {from: accounts[2]});
		await VotingV6JE4QH.onlyExchange.call({from: accounts[5]});
		await VotingV6JE4QH.onlyExchangeFactoryOrVotingSystem.call({from: accounts[1]});
	});

	it('test for Voting', async () => {
		const addressVdOeUcg = accounts[0]
		const VotingNSzvFFh = await Voting.new(addressVdOeUcg, {from: accounts[4]});
		const addressAXAme2W = accounts[2]
		const stringr6zdapI = "zR7MI7ErVlcTejENVizEgZxo9PVngu9X6aNcnKGhFz2soCyGYIePI8HjqluscrJMua3hLf4QpIiDxbKLShn7tbKQxt1T"
		const stringbRksTsk = "WQWlVdPnSxtCQw6CV61KcIqQuGRnEJWXzaEvbZHXTAxQPqBVS8hDzichRO"
		const stringPhhm70 = "SCBRSWjwnVs"
		const byteVkpYaYr = "0x0d100f0b10081b0405020d1a0e030a0d031a15110307161711150a0d021712"
		const addressM30dgGy = accounts[0]
		const boolD2nLJBp = await VotingNSzvFFh.isExchangeFactory.call(addressAXAme2W, {from: accounts[5]});
		const stringC6NdAZx = await VotingNSzvFFh.name.call({from: accounts[3]});
		await VotingNSzvFFh.onlyMinter.call({from: accounts[2]});
		const 
GHJ3Bgi = await VotingNSzvFFh.createProposal.call(addressM30dgGy, byteVkpYaYr, stringPhhm70, stringbRksTsk, stringr6zdapI, {from: accounts[0]});
	});

	it('test for Voting', async () => {
		const addressoFYbDN6 = accounts[1]
		const VotingOIzwCdu = await Voting.new(addressoFYbDN6, {from: accounts[3]});
		const addressIShYgS4 = accounts[0]
		const uintroDrOj7 = BigInt("364")
		const addresssAlXIsn = accounts[5]
		const addressRFcMtjn = accounts[2]
		const uint256WRjMjUu = await VotingOIzwCdu.balanceOf.call(addressIShYgS4, {from: accounts[4]});
		const uint256m06VMKO = await VotingOIzwCdu.resolve.call(uintroDrOj7, {from: accounts[3]});
		const uint256yqMhNP = await VotingOIzwCdu.balanceOf.call(addresssAlXIsn, {from: accounts[0]});
		const address8Ls024 = await VotingOIzwCdu.updateRegistry.call(addressRFcMtjn, {from: accounts[4]});
	});

	it('test for Voting', async () => {
		const addressXpeUznI = accounts[3]
		const VotingBjYL8Mo = await Voting.new(addressXpeUznI, {from: accounts[0]});
		const addressWk4om9J = accounts[2]
		const stringMvcaiM6 = "2AQbfW2ybsIaSwlXQ2wt"
		const stringUtwV8o9 = "ofLoxwVwFXpUfnl9th1mEJI9Czcf7R9JSJJt2w4i7gw2XxApyU77lizLaQguEa4tKBg"
		const stringzzyXqDk = "mj2PMM5PlPQxWjIaw5WabptPLSDLFy1pn1fNlMoQdkjyu7lgrRuvoQDujX8i5PcmcabcIhn69altlf8"
		const byteDVh6m0Q = "0x10"
		const addresswWsy38k = accounts[0]
		const addressVEvocra = accounts[0]
		const boolKev2TRN = await VotingBjYL8Mo.isVotingSystem.call(addressWk4om9J, {from: accounts[2]});
		const addressmE1xzKi = await VotingBjYL8Mo.getRegistryAddress.call({from: accounts[2]});
		await VotingBjYL8Mo.onlyOwner.call({from: accounts[3]});
		const 
V72IH5 = await VotingBjYL8Mo.createProposal.call(addresswWsy38k, byteDVh6m0Q, stringzzyXqDk, stringUtwV8o9, stringMvcaiM6, {from: accounts[2]});
		const boolP84JU9t = await VotingBjYL8Mo.isValidStamperAddress.call(addressVEvocra, {from: accounts[4]});
	});

	it('test for Voting', async () => {
		const VotingtHGcw8P = await Voting.new({from: accounts[3]});
		const addressqYahqF = accounts[3]
		const addressaIJpdEs = accounts[1]
		await VotingtHGcw8P.onlyMinter.call({from: accounts[1]});
		const boollEHsuXu = await VotingtHGcw8P.isVotingSystem.call(addressqYahqF, {from: accounts[4]});
		const boolTkxR6AK = await VotingtHGcw8P.isValidOracleAddress.call(addressaIJpdEs, {from: accounts[5]});
		await VotingtHGcw8P.onRegistryRefresh.call({from: accounts[0]});
		const addresslAvRm9M = await VotingtHGcw8P.owner.call({from: accounts[0]});
	});

	it('test for Voting', async () => {
		const VotingkFnm8Ou = await Voting.new({from: accounts[2]});
		const uintPWo234 = BigInt("970")
		const addressk9YCDCf = accounts[2]
		const addresshq69ZJR = accounts[1]
		const stringmavS94q = "Ugs5O9J67YSRTQzsiV2N1GAulVbBSzSQq4EGWxWCfqkETpXAqM9pLE7GP"
		const stringJFnHuzt = "rlGXudRrUvsom5Vrj4aDWwwNC9CUnYqmZmQKJpQNIsyuprITEq1E9EC1q1r8ShctWRY"
		const stringNt10URP = "TWrK87U1w7FUExRQE8qa7lfLuXILGyKLDExLDQltVqp"
		const byteB4JeP3 = "0x0b031703081e080f050d0a1806041314101a1d160f0415160118051d"
		const addressm9pfnZv = accounts[1]
		const booldIm1jLP = await VotingkFnm8Ou.transferFrom.call(addresshq69ZJR, addressk9YCDCf, uintPWo234, {from: accounts[4]});
		await VotingkFnm8Ou.renounceOwnership.call({from: accounts[5]});
		const 
xUG2f7r = await VotingkFnm8Ou.createProposal.call(addressm9pfnZv, byteB4JeP3, stringNt10URP, stringJFnHuzt, stringmavS94q, {from: accounts[4]});
		await VotingkFnm8Ou.renounceOwnership.call({from: accounts[2]});
		await VotingkFnm8Ou.onlyMessageProcessor.call({from: accounts[1]});
	});

	it('test for Voting', async () => {
		const addressnUKtt2N = accounts[3]
		const VotingjTcxkN = await Voting.new(addressnUKtt2N, {from: accounts[0]});
		const uintHobHC7 = BigInt("1230")
		const uintNyt613 = BigInt("1295")
		const addressiXNvB6d = accounts[3]
		const addressNhJlpdi = accounts[5]
		const uint256ppdjx5 = await VotingjTcxkN.approve.call(uintHobHC7, {from: accounts[3]});
		await VotingjTcxkN.onlyExchangeFactoryOrVotingSystem.call({from: accounts[5]});
		const uint256GZeMXC = await VotingjTcxkN.burn.call(uintNyt613, {from: "0x0000000000000000000000000000000000000001"});
		const uint256e6icg0j = await VotingjTcxkN.balanceOf.call(addressiXNvB6d, {from: accounts[3]});
		const bool887gOE = await VotingjTcxkN.isValidStamperAddress.call(addressNhJlpdi, {from: accounts[0]});
	});

	it('test for Voting', async () => {
		const addressVadIvvJ = accounts[3]
		const VotingjTcxkN = await Voting.new(addressVadIvvJ, {from: accounts[0]});
		const uintgEZEUbm = BigInt("1400")
		const addressPBnSJok = accounts[2]
		const uint1tXq4S = BigInt("1262")
		const uintTRibwvO = BigInt("1295")
		const addressaQWrtfj = accounts[0]
		const addressfUri3Kw = accounts[5]
		const uint256r4840A = await VotingjTcxkN.approve.call(uintgEZEUbm, {from: accounts[0]});
		const boolbGiJZdb = await VotingjTcxkN.isExchangeFactory.call(addressPBnSJok, {from: accounts[0]});
		const uint256ppdjx5 = await VotingjTcxkN.approve.call(uint1tXq4S, {from: accounts[3]});
		const uint256GZeMXC = await VotingjTcxkN.burn.call(uintTRibwvO, {from: "0x0000000000000000000000000000000000000001"});
		const uint256e6icg0j = await VotingjTcxkN.balanceOf.call(addressaQWrtfj, {from: accounts[3]});
		const bool887gOE = await VotingjTcxkN.isValidStamperAddress.call(addressfUri3Kw, {from: accounts[0]});
	});

	it('test for Voting', async () => {
		const VotingcgIINog = await Voting.new({from: accounts[4]});
		const uintskoNao = BigInt("1173")
		await VotingcgIINog.onlyMessageProcessor.call({from: accounts[5]});
		const uint256VMbEQJ = await VotingcgIINog.burn.call(uintskoNao, {from: accounts[1]});
		const stringeo6rTXe = await VotingcgIINog.name.call({from: accounts[1]});
		const stringA3bi1pZ = await VotingcgIINog.symbol.call({from: accounts[0]});
	});

	it('test for Voting', async () => {
		const addresslKi2Sns = accounts[3]
		const VotingFZ4RKGB = await Voting.new(addresslKi2Sns, {from: accounts[0]});
		const addressPlEk17r = accounts[1]
		const boolvI1hfGX = await VotingFZ4RKGB.isValidStamperAddress.call(addressPlEk17r, {from: accounts[0]});
		const uint8Q8KyD0 = await VotingFZ4RKGB.decimals.call({from: accounts[5]});
		await VotingFZ4RKGB.renounceMinter.call({from: accounts[4]});
	});

	it('test for Voting', async () => {
		const addressEZf9ilo = accounts[3]
		const VotingFZ4RKGB = await Voting.new(addressEZf9ilo, {from: accounts[0]});
		const uintwcuPUW = BigInt("187")
		const addressQC9VUzO = accounts[3]
		const uint256bqd3YR5 = await VotingFZ4RKGB.resolve.call(uintwcuPUW, {from: accounts[4]});
		await VotingFZ4RKGB.renounceMinter.call({from: accounts[4]});
		const addressQNHU9oN = await VotingFZ4RKGB.addMinter.call(addressQC9VUzO, {from: accounts[5]});
	});

	it('test for Voting', async () => {
		const VotingK4iI6bW = await Voting.new({from: accounts[0]});
		const uintl2h073T = BigInt("1403")
		const addressI6JeFNb = accounts[3]
		const stringRRVKCHU = "FG53J7r2Mm"
		const stringiKL3AHS = "UMPMr"
		const stringwHshTqu = "rNnwQlHmJpyNDhYpWX"
		const byteZmbPkGf = "0x180c041f010d1817140f19"
		const addressobBh2zG = accounts[0]
		const uintvKAefJV = BigInt("1929")
		const addresslhFzbYS = accounts[3]
		const uint256gipDwCE = await VotingK4iI6bW.resolve.call(uintl2h073T, {from: accounts[1]});
		const addressaRJiioL = await VotingK4iI6bW.transferOwnership.call(addressI6JeFNb, {from: accounts[5]});
		await VotingK4iI6bW.nonReentrant.call({from: accounts[4]});
		const 
coMyjVq = await VotingK4iI6bW.createProposal.call(addressobBh2zG, byteZmbPkGf, stringwHshTqu, stringiKL3AHS, stringRRVKCHU, {from: accounts[4]});
		const boolIocZ0aE = await VotingK4iI6bW.increaseAllowance.call(addresslhFzbYS, uintvKAefJV, {from: accounts[0]});
		await VotingK4iI6bW.renounceMinter.call({from: accounts[3]});
	});

	it('test for Voting', async () => {
		const addressTamBoOi = accounts[0]
		const Votingwfwoj8V = await Voting.new(addressTamBoOi, {from: "0x0000000000000000000000000000000000000001"});
		const uintZENzACn = BigInt("695")
		const address2EZO7c = accounts[1]
		const addresspUjPds5 = accounts[2]
		await Votingwfwoj8V.onlyOracle.call({from: accounts[4]});
		await Votingwfwoj8V.requiresLiquidityTokenSnapshotAccess.call({from: accounts[0]});
		const boolvf9Ko1 = await Votingwfwoj8V.transferFrom.call(addresspUjPds5, address2EZO7c, uintZENzACn, {from: accounts[5]});
		await Votingwfwoj8V.onlyMessageProcessor.call({from: accounts[1]});
		await Votingwfwoj8V.onlyVotingSystem.call({from: accounts[2]});
	});

	it('test for Voting', async () => {
		const addressYQsdFeX = accounts[3]
		const VotingFZ4RKGB = await Voting.new(addressYQsdFeX, {from: accounts[0]});
		const addresseQ9X8WN = accounts[0]
		const uintkrOmPr = BigInt("199")
		const addressXZm22oO = accounts[3]
		const boolP14XbCs = await VotingFZ4RKGB.isValidVerifierAddress.call(addresseQ9X8WN, {from: "0x0000000000000000000000000000000000000001"});
		const uint256bqd3YR5 = await VotingFZ4RKGB.resolve.call(uintkrOmPr, {from: accounts[4]});
		const uint256cbNMiCC = await VotingFZ4RKGB.balanceOf.call(addressXZm22oO, {from: accounts[2]});
	});

	it('test for Voting', async () => {
		const addressWkBJnU1 = accounts[3]
		const VotingFZ4RKGB = await Voting.new(addressWkBJnU1, {from: accounts[0]});
		const stringSeRsva = "VCn2xkcQd4fDuhKBNAIg5trrbto"
		const stringB6pQIUB = "HMnefw9u99keBg2cprvhJ7nC2pMyRVUC6BW3M50cR6GnYr6qV8BSlvdepf3p52l8a86pibDbxoc3BNlsBh"
		const stringybJYK7n = "UqjQKgxOurare49WjBcu8R55GvyGH5U4LqShTiYaMqsUMmZ31"
		const bytem69qLo3 = "0x05070b1a0b1c0400151c"
		const addressvbS0dnB = accounts[3]
		const address7pBRqN = accounts[0]
		const uintQUBT7lW = BigInt("1039")
		const uintyU1Zki = BigInt("199")
		const 
Wc81uXY = await VotingFZ4RKGB.createProposal.call(addressvbS0dnB, bytem69qLo3, stringybJYK7n, stringB6pQIUB, stringSeRsva, {from: "0x0000000000000000000000000000000000000001"});
		const boolFV2vo22 = await VotingFZ4RKGB.didAddressVote.call(uintQUBT7lW, address7pBRqN, {from: accounts[4]});
		const stringf8kaKf = await VotingFZ4RKGB.symbol.call({from: accounts[1]});
		const uint256bqd3YR5 = await VotingFZ4RKGB.resolve.call(uintyU1Zki, {from: accounts[4]});
	});

	it('test for Voting', async () => {
		const addressbKQOC5O = accounts[3]
		const VotingFZ4RKGB = await Voting.new(addressbKQOC5O, {from: accounts[0]});
		const uintMSTevtz = BigInt("187")
		await VotingFZ4RKGB.renounceOwnership.call({from: accounts[0]});
		const uint256bqd3YR5 = await VotingFZ4RKGB.resolve.call(uintMSTevtz, {from: accounts[4]});
	});
})