const Voting = artifacts.require("Voting");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Voting', (accounts) => {
	it('test for Voting', async () => {
		const addressZjEvjsh = accounts[3]
		const Votingql4rbL1 = await Voting.new(addressZjEvjsh, {from: accounts[3]});
		const stringO2FuoCM = "7bW40qR2Crgv"
		const stringDDQ4cX9 = "gZy3x1D5bi8nS82w4cLympQoN8oNiMcjdsSD3sVcQgkrp7JMcr9ByhBHB2VyUfW9amM5d7"
		const stringQXG4hBh = "GguBFKe8PsrzakuJXQQLZpxd74ciPmNesOsTq4tbaU7oS45L1WlCyq8Ce"
		const byte8EwMq4 = "0x0917"
		const addresspy2eBnH = accounts[0]
		const uinto5247vk = BigInt("364")
		const addressaxq2gkM = accounts[5]
		const addresssrj8PBg = accounts[4]
		await Votingql4rbL1.onlyOwner.call({from: accounts[4]});
		const 
pGkVgrh = await Votingql4rbL1.createProposal.call(addresspy2eBnH, byte8EwMq4, stringQXG4hBh, stringDDQ4cX9, stringO2FuoCM, {from: accounts[4]});
		const boolQX2Wf3 = await Votingql4rbL1.transferFrom.call(addresssrj8PBg, addressaxq2gkM, uinto5247vk, {from: accounts[5]});
	});

	it('test for Voting', async () => {
		const addressrO4KriT = accounts[4]
		const VotingbEoW6Jr = await Voting.new(addressrO4KriT, {from: accounts[4]});
		const uintDypalPn = BigInt("311")
		const uint2563vEARv = await VotingbEoW6Jr.veto.call(uintDypalPn, {from: accounts[2]});
		await VotingbEoW6Jr.onlyOwner.call({from: accounts[1]});
		await VotingbEoW6Jr.onlyRegistry.call({from: accounts[2]});
		await VotingbEoW6Jr.onlyExchangeFactory.call({from: accounts[5]});
	});

	it('test for Voting', async () => {
		const addressfWYaahR = accounts[0]
		const VotingQvE1tFi = await Voting.new(addressfWYaahR, {from: accounts[0]});
		const addressGyEZryd = accounts[1]
		const uintU6BBFEs = BigInt("955")
		const addressriIU44X = accounts[4]
		const addressprc3Frr = accounts[5]
		const boolBNW8ho9 = await VotingQvE1tFi.didAddressVote.call(uintU6BBFEs, addressGyEZryd, {from: accounts[1]});
		const addressKxdj4Mr = await VotingQvE1tFi.addMinter.call(addressriIU44X, {from: accounts[3]});
		const boolWd7L0hQ = await VotingQvE1tFi.isValidStamperAddress.call(addressprc3Frr, {from: accounts[3]});
	});

	it('test for Voting', async () => {
		const addressRgjm6US = accounts[3]
		const VotingVqLcXRv = await Voting.new(addressRgjm6US, {from: accounts[2]});
		const uintil53zGy = BigInt("920")
		const addressglFs86e = accounts[0]
		const uintUOpdw8c = BigInt("2047")
		const uintXxkB6Sl = BigInt("928")
		const addressfNCpMna = accounts[2]
		const addressG5EAd0g = accounts[1]
		const boolMVs2io9 = await VotingVqLcXRv.approve.call(addressglFs86e, uintil53zGy, {from: accounts[1]});
		const uint256r07icd4 = await VotingVqLcXRv.veto.call(uintUOpdw8c, {from: accounts[1]});
		const stringomE9Afs = await VotingVqLcXRv.symbol.call({from: accounts[4]});
		const uint256PoP0Kpl = await VotingVqLcXRv.balanceOfAt.call(addressfNCpMna, uintXxkB6Sl, {from: accounts[5]});
		const boolaKS8CY = await VotingVqLcXRv.isExchangeFactory.call(addressG5EAd0g, {from: accounts[2]});
	});

	it('test for Voting', async () => {
		const VotingAGwksc = await Voting.new({from: accounts[4]});
		const addressBgnGs0c = accounts[2]
		const uintuE0wowv = BigInt("334")
		const address0ZNH0a = accounts[5]
		const stringfVs6AaY = await VotingAGwksc.name.call({from: accounts[1]});
		await VotingAGwksc.onlyOracle.call({from: accounts[0]});
		const boolG3QQIOs = await VotingAGwksc.isExchangeFactory.call(addressBgnGs0c, {from: accounts[1]});
		const uint256LShd4S4 = await VotingAGwksc.burn.call(uintuE0wowv, {from: accounts[3]});
		const addresstdMmZeX = await VotingAGwksc.addMinter.call(address0ZNH0a, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for Voting', async () => {
		const addressy6xRhkZ = accounts[5]
		const Voting1Oe5lJ = await Voting.new(addressy6xRhkZ, {from: accounts[2]});
		const addresscc45xJx = accounts[5]
		const boolyETNUwW = await Voting1Oe5lJ.isValidStamperAddress.call(addresscc45xJx, {from: accounts[4]});
		await Voting1Oe5lJ.renounceOwnership.call({from: accounts[3]});
		await Voting1Oe5lJ.renounceMinter.call({from: accounts[0]});
	});

	it('test for Voting', async () => {
		const addressxgwrKqk = accounts[2]
		const VotingvTwjAvQ = await Voting.new(addressxgwrKqk, {from: "0x0000000000000000000000000000000000000001"});
		const addresso5Lrap = accounts[2]
		await VotingvTwjAvQ.onlyOwner.call({from: accounts[1]});
		const boolWWIOtt7 = await VotingvTwjAvQ.isVotingSystem.call(addresso5Lrap, {from: accounts[3]});
	});

	it('test for Voting', async () => {
		const addressoCZjZx = accounts[2]
		const VotingARfh2ht = await Voting.new(addressoCZjZx, {from: accounts[0]});
		const addressRQNE35Z = accounts[4]
		const uintAAFJPH9 = BigInt("1381")
		const addressoQjMKu = await VotingARfh2ht.ownableUpgrade.call(addressRQNE35Z, {from: accounts[0]});
		await VotingARfh2ht.renounceMinter.call({from: accounts[4]});
		const uint256eYFbRVf = await VotingARfh2ht.veto.call(uintAAFJPH9, {from: accounts[2]});
	});

	it('test for Voting', async () => {
		const VotingsBy2Wx7 = await Voting.new({from: accounts[5]});
		const uintNIQ8UAr = BigInt("203")
		const addressxNZQFGF = accounts[5]
		const addressqk7pHk = accounts[1]
		const uintHcMVTfB = BigInt("1068")
		const addresshlKX1ue = accounts[1]
		await VotingsBy2Wx7.onlyRegistry.call({from: accounts[0]});
		const booluoeI1CD = await VotingsBy2Wx7.transferFrom.call(addressqk7pHk, addressxNZQFGF, uintNIQ8UAr, {from: "0x0000000000000000000000000000000000000001"});
		const uint256leFAdCA = await VotingsBy2Wx7.burn.call(uintHcMVTfB, {from: accounts[3]});
		const bool0fBnbC = await VotingsBy2Wx7.isExchangeFactory.call(addresshlKX1ue, {from: accounts[0]});
	});

	it('test for Voting', async () => {
		const addressP80sriJ = accounts[3]
		const Votingql4rbL1 = await Voting.new(addressP80sriJ, {from: accounts[3]});
		const stringO2FuoCM = "7bW40qR2Crgv"
		const stringDDQ4cX9 = "gZy3x1D5bi8nS82w4cLympQoN8oNiMcjdsSD3sVcQgkrp7JMcr9ByhBHB2VyUfW9amM5d7"
		const stringQXG4hBh = "GguBFKe8PsrzakuJXQQLZpxd74ciPmNesOsTq4tbaU7oS45L1WlCyq8Ce"
		const bytekmJMPkK = "0x0817"
		const addressHMC4OrR = accounts[0]
		const uintFnq1Spx = BigInt("364")
		const addressh8U2xVm = accounts[4]
		const addresshEsWZN5 = accounts[4]
		const 
pGkVgrh = await Votingql4rbL1.createProposal.call(addressHMC4OrR, bytekmJMPkK, stringQXG4hBh, stringDDQ4cX9, stringO2FuoCM, {from: accounts[4]});
		const boolQX2Wf3 = await Votingql4rbL1.transferFrom.call(addresshEsWZN5, addressh8U2xVm, uintFnq1Spx, {from: accounts[5]});
	});

	it('test for Voting', async () => {
		const addressctJTJPJ = accounts[4]
		const VotingxnXzYLU = await Voting.new(addressctJTJPJ, {from: accounts[1]});
		const uintGF5R5Mm = BigInt("768")
		const uintPlDJjzm = BigInt("1673")
		const uintprFOE24 = BigInt("535")
		const addressZdQmuF = accounts[2]
		const uint256MgnJ6IF = await VotingxnXzYLU.resolve.call(uintGF5R5Mm, {from: accounts[0]});
		const uint256lSlMyu = await VotingxnXzYLU.resolve.call(uintPlDJjzm, {from: accounts[0]});
		const bool6Ts0qn = await VotingxnXzYLU.transfer.call(addressZdQmuF, uintprFOE24, {from: accounts[0]});
		const uint256IcP4VDt = await VotingxnXzYLU.snapshot.call({from: accounts[1]});
	});

	it('test for Voting', async () => {
		const addressNZlJE07 = accounts[3]
		const Votingql4rbL1 = await Voting.new(addressNZlJE07, {from: accounts[3]});
		const addressrMe7aFL = accounts[3]
		const uintgls4SRv = BigInt("1223")
		const addresskpRRDAu = accounts[2]
		const addressauwsnXa = accounts[2]
		const boolDssle6X = true
		const uintZHV88wC = BigInt("1177")
		const stringO2FuoCM = "7bW40qR2Crgv"
		const stringDDQ4cX9 = "gZy3x1D5bi8nS82w4cLympQoN8oNiMcjdsSD3sVcQgkrp7JMcr9ByhBHB2VyUfW9amM5d7"
		const stringQXG4hBh = "GgvBFKe8PsrzakuJXQQLZpxd74ciPmNesOsTq4tbaU7oS45L1WlCyq8Ce"
		const byteoO3EJl = "0x0817"
		const addressxcS2wdu = accounts[0]
		const boolC1ZjXAf = await Votingql4rbL1.isValidVerifierAddress.call(addressrMe7aFL, {from: accounts[2]});
		const boolJ44SDCT = await Votingql4rbL1.mint.call(addresskpRRDAu, uintgls4SRv, {from: accounts[2]});
		const addresskZBgFSo = await Votingql4rbL1.updateRegistry.call(addressauwsnXa, {from: accounts[5]});
		const uint256wxlIFcN = await Votingql4rbL1.vote.call(uintZHV88wC, boolDssle6X, {from: accounts[2]});
		const 
pGkVgrh = await Votingql4rbL1.createProposal.call(addressxcS2wdu, byteoO3EJl, stringQXG4hBh, stringDDQ4cX9, stringO2FuoCM, {from: accounts[4]});
	});

	it('test for Voting', async () => {
		const addresseWTpfAZ = accounts[3]
		const Votingql4rbL1 = await Voting.new(addresseWTpfAZ, {from: accounts[3]});
		const uintHstigcz = BigInt("1499")
		const stringO2FuoCM = "7bW40qRK2Crgv"
		const stringDDQ4cX9 = "gZy3x1D5bi8nS82w4cLympQoN8oNiMcjdsSD3sVcQgkrp7JMcr9ByhBHB2VyUfW9amM5d7"
		const stringQXG4hBh = "GguBFKe8PsrzakuJXQQLZpxd74ciPmNesOsTq4tbaU7oS45L1WlCyq8Ce"
		const bytejS8Wge6 = "0x0817"
		const addressXTTjdFZ = accounts[0]
		const uint256CF9ljfw = await Votingql4rbL1.pause.call(uintHstigcz, {from: accounts[3]});
		const 
pGkVgrh = await Votingql4rbL1.createProposal.call(addressXTTjdFZ, bytejS8Wge6, stringQXG4hBh, stringDDQ4cX9, stringO2FuoCM, {from: accounts[4]});
	});

	it('test for Voting', async () => {
		const addressO4YOodX = accounts[3]
		const Votingql4rbL1 = await Voting.new(addressO4YOodX, {from: accounts[3]});
		const boolJxkwCm7 = true
		const uintWBN6j3H = BigInt("953")
		const uintm8R0mtf = BigInt("384")
		const addressjKKiUVJ = accounts[4]
		const addressAASDw3 = accounts[4]
		const boolnKYt1j5 = true
		const uinttnVUXDt = BigInt("1757")
		const uint256PvbZzi9 = await Votingql4rbL1.vote.call(uintWBN6j3H, boolJxkwCm7, {from: accounts[0]});
		const boolQX2Wf3 = await Votingql4rbL1.transferFrom.call(addressAASDw3, addressjKKiUVJ, uintm8R0mtf, {from: accounts[5]});
		const uint256tpTIotn = await Votingql4rbL1.vote.call(uinttnVUXDt, boolnKYt1j5, {from: accounts[3]});
	});

	it('test for Voting', async () => {
		const addressgDqaNm = accounts[3]
		const Votingql4rbL1 = await Voting.new(addressgDqaNm, {from: accounts[3]});
		const address9xpB77 = accounts[2]
		const stringO2FuoCM = "7bW40qRK2Crgv"
		const stringDDQ4cX9 = "gZy3x1D5bi8nS82w4cLympQoN8oNiMcjdsSD3sVcQgkrp7JMcr9ByhBHB2VyUfW9amM5d7"
		const stringQXG4hBh = "GguBFKe8PsrakuJXQQLZpxd74ciPmNesOsTq4tbaU7oS45L1WlCyq8Ce"
		const byteIKcFfW4 = "0x0817"
		const addressbiobO5B = accounts[0]
		const boolKO4lHpj = await Votingql4rbL1.isExchangeFactory.call(address9xpB77, {from: accounts[0]});
		const 
pGkVgrh = await Votingql4rbL1.createProposal.call(addressbiobO5B, byteIKcFfW4, stringQXG4hBh, stringDDQ4cX9, stringO2FuoCM, {from: accounts[4]});
	});

	it('test for Voting', async () => {
		const addressHdygbW = accounts[3]
		const Votingql4rbL1 = await Voting.new(addressHdygbW, {from: accounts[3]});
		const stringO2FuoCM = "7bW40q4K2Crgv"
		const stringDDQ4cX9 = "gZy3x1D5bi8nS82w4cLympQoN8oNiMcjdsSD3sVcQgkrp7JMcr9ByhBHB2VyUfW9amM5d7"
		const stringQXG4hBh = "GguBFKe8PsrzakuJXQQLZpxd74ciPmNesOsTq4tbaU7oS45L1WlCyq8Ce"
		const bytez69np7V = "0x0817"
		const addressR8e4eJz = accounts[0]
		await Votingql4rbL1.renounceOwnership.call({from: accounts[3]});
		const 
pGkVgrh = await Votingql4rbL1.createProposal.call(addressR8e4eJz, bytez69np7V, stringQXG4hBh, stringDDQ4cX9, stringO2FuoCM, {from: accounts[4]});
		await Votingql4rbL1.requiresLiquidityTokenSnapshotAccess.call({from: accounts[0]});
	});

	it('test for Voting', async () => {
		const addressJ6J7MKK = accounts[3]
		const Votingql4rbL1 = await Voting.new(addressJ6J7MKK, {from: accounts[3]});
		const addressQN5TR86 = accounts[2]
		const stringO2FuoCM = "7bW40qRK2Crgv"
		const stringDDQ4cX9 = "gZy3x1D5bi8nS82w4cLympQoN8oNiMcjdsSD3sVcQgkrp7JMcr9ByhBHB2VyUfW9amM5d7"
		const stringQXG4hBh = "GguBFKe8PsrzakuJXQQLZpxd74cyiPmNesOsTq4tbaU7oS45L1WlCyq8Ce"
		const byteGos2biN = "0x0817"
		const addressQ98hGKt = accounts[4]
		const uintynaM9Yd = BigInt("557")
		const addressfriLrBo = accounts[5]
		const boolu5H5XeV = await Votingql4rbL1.isValidOracleAddress.call(addressQN5TR86, {from: accounts[3]});
		const 
pGkVgrh = await Votingql4rbL1.createProposal.call(addressQ98hGKt, byteGos2biN, stringQXG4hBh, stringDDQ4cX9, stringO2FuoCM, {from: accounts[4]});
		const uint256AMhbaX4 = await Votingql4rbL1.balanceOfAt.call(addressfriLrBo, uintynaM9Yd, {from: accounts[3]});
		await Votingql4rbL1.requiresWalletAcccess.call({from: accounts[3]});
	});

	it('test for Voting', async () => {
		const Voting2B9YSW = await Voting.new({from: accounts[3]});
		const addresskHArX3f = accounts[2]
		const uintNX6F2dH = BigInt("249")
		const boolxbYz5C = true
		const uintBUjT1V8 = BigInt("312")
		const boolux63Ydr = await Voting2B9YSW.isValidVerifierAddress.call(addresskHArX3f, {from: accounts[4]});
		const uint256cKaABoj = await Voting2B9YSW.totalSupplyAt.call(uintNX6F2dH, {from: accounts[2]});
		const uint256cVQ1pcJ = await Voting2B9YSW.vote.call(uintBUjT1V8, boolxbYz5C, {from: accounts[1]});
	});
})