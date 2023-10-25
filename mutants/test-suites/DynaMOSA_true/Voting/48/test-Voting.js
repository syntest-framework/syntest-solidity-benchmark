const Voting = artifacts.require("Voting");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Voting', (accounts) => {
	it('test for Voting', async () => {
		const addressKF3dr8u = accounts[5]
		const VotingoosJgEr = await Voting.new(addressKF3dr8u, {from: accounts[2]});
		const addresscF3ZVW1 = accounts[3]
		const uintMsolW5O = BigInt("490")
		const uintHGG0HvS = BigInt("1808")
		const uintkRKNH7o = BigInt("835")
		const addressNkBZjVP = accounts[1]
		const boolt3gdke8 = await VotingoosJgEr.didAddressVote.call(uintMsolW5O, addresscF3ZVW1, {from: accounts[3]});
		await VotingoosJgEr.onlyRegistry.call({from: accounts[0]});
		await VotingoosJgEr.onlyExchangeFactoryOrVotingSystem.call({from: accounts[5]});
		const uint256GNrsHrI = await VotingoosJgEr.burn.call(uintHGG0HvS, {from: accounts[4]});
		const addressQ3SybFL = await VotingoosJgEr.burnFrom.call(addressNkBZjVP, uintkRKNH7o, {from: accounts[1]});
	});

	it('test for Voting', async () => {
		const addressxc3uhG = "0x0000000000000000000000000000000000000001"
		const VotingcLKBJSt = await Voting.new(addressxc3uhG, {from: accounts[5]});
		const addresstQm423 = accounts[4]
		const uints0S7jQM = BigInt("985")
		const addresshEcdPO = await VotingcLKBJSt.owner.call({from: accounts[3]});
		const boolLglfB6F = await VotingcLKBJSt.isExchangeFactory.call(addresstQm423, {from: accounts[2]});
		const uint256zBD5W4V = await VotingcLKBJSt.burn.call(uints0S7jQM, {from: accounts[2]});
		const addresskSbuCA = await VotingcLKBJSt.getRegistryAddress.call({from: accounts[1]});
	});

	it('test for Voting', async () => {
		const address1t1HPu = accounts[4]
		const VotingkrxfPLN = await Voting.new(address1t1HPu, {from: accounts[0]});
		const addressfUgAkMr = accounts[0]
		const addressxR3kGwJ = accounts[1]
		const addressNwWOURi = "0x0000000000000000000000000000000000000001"
		const addressuSRUAj9 = await VotingkrxfPLN.ownableUpgrade.call(addressfUgAkMr, {from: accounts[3]});
		const uint256QNEXHUG = await VotingkrxfPLN.balanceOf.call(addressxR3kGwJ, {from: accounts[2]});
		const addressLco7CyG = await VotingkrxfPLN.getRegistryAddress.call({from: accounts[5]});
		const boolBcnVP9I = await VotingkrxfPLN.isExchangeFactory.call(addressNwWOURi, {from: accounts[1]});
		await VotingkrxfPLN.onlyExchangeFactoryOrVotingSystem.call({from: accounts[1]});
	});

	it('test for Voting', async () => {
		const Votinge8mJ04Z = await Voting.new({from: accounts[4]});
		const addressPSX2JF = accounts[1]
		const addresskcvckb = accounts[4]
		const addressmZhaa2i = accounts[4]
		const uint256BLLPN6 = await Votinge8mJ04Z.snapshot.call({from: accounts[2]});
		const boolJqORnZD = await Votinge8mJ04Z.isValidOracleAddress.call(addressPSX2JF, {from: accounts[1]});
		const addresscWK8snO = await Votinge8mJ04Z.addMinter.call(addresskcvckb, {from: accounts[1]});
		const uint256cZu44Qi = await Votinge8mJ04Z.totalSupply.call({from: accounts[4]});
		const addresspsMR0Nl = await Votinge8mJ04Z.ownableUpgrade.call(addressmZhaa2i, {from: accounts[1]});
	});

	it('test for Voting', async () => {
		const addressVnQRGNY = accounts[4]
		const VotingjTx2CT7 = await Voting.new(addressVnQRGNY, {from: accounts[0]});
		const addressYrz1nwd = accounts[4]
		const stringpeZpoBc = "pqMmVrQPNXQhSGSFZBEVS8l7POirO"
		const stringBDySAgi = "WzMIuFHD8UXWQxipsDc71UCyuRJfWhDC9oF"
		const stringw1D2HzM = "8xjpDWTL7pTJrVGbOgvjMdJIr4ze85e6q2UCmJi6K7SR4NIWN8vwTmC"
		const byteBsws8GH = "0x1a1017040f0f0d1f1c1111130110131c04011a0f190b0f1a0f0c0912"
		const addressTbZwNX1 = accounts[0]
		const boolBy1RxaX = await VotingjTx2CT7.isValidVerifierAddress.call(addressYrz1nwd, {from: accounts[1]});
		await VotingjTx2CT7.onlyOracle.call({from: accounts[3]});
		const 
VRE1137 = await VotingjTx2CT7.createProposal.call(addressTbZwNX1, byteBsws8GH, stringw1D2HzM, stringBDySAgi, stringpeZpoBc, {from: accounts[0]});
		await VotingjTx2CT7.onlyMessageProcessor.call({from: accounts[4]});
	});

	it('test for Voting', async () => {
		const addressPt0aNF0 = accounts[4]
		const VotingCKvJk7W = await Voting.new(addressPt0aNF0, {from: accounts[3]});
		const booldD8Sfp = true
		const uintSupmxz1 = BigInt("1185")
		const addressg2k3POi = "0x0000000000000000000000000000000000000001"
		const uintu6uM6w = BigInt("557")
		const addressCPfkSet = accounts[2]
		const uint256frWVgff = await VotingCKvJk7W.vote.call(uintSupmxz1, booldD8Sfp, {from: accounts[0]});
		const booldfjFoFd = await VotingCKvJk7W.isMinter.call(addressg2k3POi, {from: accounts[0]});
		const booleeaETHD = await VotingCKvJk7W.approve.call(addressCPfkSet, uintu6uM6w, {from: accounts[4]});
		await VotingCKvJk7W.nonReentrant.call({from: accounts[5]});
		await VotingCKvJk7W.onlyOracle.call({from: accounts[0]});
		await VotingCKvJk7W.onlyExchange.call({from: accounts[4]});
		const stringddC7EAE = await VotingCKvJk7W.name.call({from: accounts[2]});
	});

	it('test for Voting', async () => {
		const addressixffwI9 = accounts[4]
		const VotingjTx2CT7 = await Voting.new(addressixffwI9, {from: accounts[0]});
		const uintXqWud3l = BigInt("1936")
		const uintLXhLX4J = BigInt("191")
		const addressunOYZLZ = "0x0000000000000000000000000000000000000001"
		const addressIqWiGPj = accounts[3]
		const uintVyHvMyR = BigInt("516")
		const addressj8MWE7q = accounts[1]
		const addressTr7KvgQ = accounts[2]
		const uint256cBSteXz = await VotingjTx2CT7.pause.call(uintXqWud3l, {from: accounts[2]});
		await VotingjTx2CT7.onlyOracle.call({from: accounts[3]});
		const bool99Hz1S = await VotingjTx2CT7.transferFrom.call(addressIqWiGPj, addressunOYZLZ, uintLXhLX4J, {from: accounts[5]});
		const boolTLGnX6N = await VotingjTx2CT7.mint.call(addressj8MWE7q, uintVyHvMyR, {from: accounts[1]});
		const boolLp6chAT = await VotingjTx2CT7.isExchangeFactory.call(addressTr7KvgQ, {from: accounts[1]});
	});

	it('test for Voting', async () => {
		const addresst5XEZhA = accounts[4]
		const VotingjTx2CT7 = await Voting.new(addresst5XEZhA, {from: accounts[0]});
		const uint4BygRR = BigInt("2029")
		const uintDKNIa8y = BigInt("1787")
		const uint256uteHLb = await VotingjTx2CT7.veto.call(uint4BygRR, {from: accounts[0]});
		await VotingjTx2CT7.onlyOracle.call({from: accounts[3]});
		const uint256kHUZIQD = await VotingjTx2CT7.pause.call(uintDKNIa8y, {from: accounts[1]});
		const bool0w57s4 = await VotingjTx2CT7.isOwner.call({from: accounts[0]});
	});

	it('test for Voting', async () => {
		const VotingA70LfbP = await Voting.new({from: accounts[5]});
		const uintUc00fi = BigInt("1542")
		const addresszpLYFSU = accounts[3]
		const uintyQrtXHM = BigInt("270")
		const addressMNIzjK9 = accounts[3]
		const addressF6P6GdO = accounts[3]
		const addressKAY9i3k = accounts[2]
		const boolt4E98Zo = await VotingA70LfbP.transfer.call(addresszpLYFSU, uintUc00fi, {from: accounts[2]});
		const booljO0OYKq = await VotingA70LfbP.transferFrom.call(addressF6P6GdO, addressMNIzjK9, uintyQrtXHM, {from: accounts[2]});
		const uint256Qk4qEsf = await VotingA70LfbP.balanceOf.call(addressKAY9i3k, {from: accounts[3]});
		await VotingA70LfbP.nonReentrant.call({from: accounts[0]});
		await VotingA70LfbP.renounceOwnership.call({from: accounts[0]});
		await VotingA70LfbP.onlyExchangeFactory.call({from: accounts[3]});
	});

	it('test for Voting', async () => {
		const addressujZCnHi = accounts[0]
		const Votingmhq17AV = await Voting.new(addressujZCnHi, {from: "0x0000000000000000000000000000000000000001"});
		const uintuHjMX7 = BigInt("449")
		const addresspNLOozG = accounts[4]
		await Votingmhq17AV.nonReentrant.call({from: accounts[4]});
		const stringsy1fIHY = await Votingmhq17AV.name.call({from: accounts[1]});
		const addressnuXt7vQ = await Votingmhq17AV.burnFrom.call(addresspNLOozG, uintuHjMX7, {from: accounts[1]});
	});

	it('test for Voting', async () => {
		const addressQ6DUljK = accounts[4]
		const VotingCKvJk7W = await Voting.new(addressQ6DUljK, {from: accounts[3]});
		const uintaz86MLl = BigInt("557")
		const addresse1gDqrP = accounts[4]
		const booleeaETHD = await VotingCKvJk7W.approve.call(addresse1gDqrP, uintaz86MLl, {from: accounts[4]});
		await VotingCKvJk7W.nonReentrant.call({from: accounts[5]});
		await VotingCKvJk7W.onlyOracle.call({from: accounts[0]});
		await VotingCKvJk7W.onlyExchange.call({from: accounts[4]});
		const stringddC7EAE = await VotingCKvJk7W.name.call({from: accounts[2]});
		await VotingCKvJk7W.nonReentrant.call({from: accounts[3]});
	});

	it('test for Voting', async () => {
		const addressWj3Fm6Z = accounts[4]
		const Votingc35cgen = await Voting.new(addressWj3Fm6Z, {from: accounts[4]});
		const uintK9LwCzE = BigInt("175")
		const uint9lL16k = BigInt("1034")
		const addressn8kJIn2 = accounts[0]
		const uintIDkwm7 = BigInt("1641")
		const addressGVMrfJe = "0x0000000000000000000000000000000000000001"
		const uint256x5iUhEs = await Votingc35cgen.resolve.call(uintK9LwCzE, {from: accounts[4]});
		const uint256hMOWTMc = await Votingc35cgen.totalSupplyAt.call(uint9lL16k, {from: accounts[3]});
		await Votingc35cgen.onlyMinter.call({from: accounts[2]});
		const uint8GE4uyBf = await Votingc35cgen.decimals.call({from: accounts[2]});
		const addressUiabpqB = await Votingc35cgen.addMinter.call(addressn8kJIn2, {from: accounts[3]});
		const boolZMMOQhX = await Votingc35cgen.approve.call(addressGVMrfJe, uintIDkwm7, {from: accounts[4]});
	});

	it('test for Voting', async () => {
		const addressBkkDEMq = accounts[5]
		const VotingZ4wRmsK = await Voting.new(addressBkkDEMq, {from: accounts[2]});
		const addressjs9hWGS = accounts[4]
		const addresswOVgjOc = accounts[5]
		const addressoTdRBIk = accounts[1]
		const addressqMZQjrP = accounts[1]
		const addressfP38dy7 = accounts[0]
		const boolu5sPFUr = await VotingZ4wRmsK.isVotingSystem.call(addressjs9hWGS, {from: accounts[0]});
		const uint256G4vkHu2 = await VotingZ4wRmsK.balanceOf.call(addresswOVgjOc, {from: accounts[2]});
		const uint256TeK8sLk = await VotingZ4wRmsK.allowance.call(addressqMZQjrP, addressoTdRBIk, {from: accounts[0]});
		const addressoNaZyd3 = await VotingZ4wRmsK.ownableUpgrade.call(addressfP38dy7, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for Voting', async () => {
		const VotingCXJ0vjc = await Voting.new({from: accounts[1]});
		const uintUHHGIBc = BigInt("1336")
		const addressBgF4I4 = accounts[0]
		const uintctWc35B = BigInt("106")
		const addressAbcHWdl = accounts[5]
		const addressqv6NOYN = accounts[4]
		const addressVh714SL = accounts[4]
		const addressZeQnIVY = await VotingCXJ0vjc.burnFrom.call(addressBgF4I4, uintUHHGIBc, {from: accounts[4]});
		const boolM8cVcP4 = await VotingCXJ0vjc.transferFrom.call(addressqv6NOYN, addressAbcHWdl, uintctWc35B, {from: accounts[1]});
		const addressyB4o38 = await VotingCXJ0vjc.ownableUpgrade.call(addressVh714SL, {from: accounts[5]});
	});

	it('test for Voting', async () => {
		const VotingMrzNtDh = await Voting.new({from: accounts[3]});
		const uintEdXMsnI = BigInt("456")
		const address0bCKBl = accounts[2]
		const addressEaldJk = accounts[0]
		const stringLqn4uWA = "izCJSS87gECBhoHkjqCLkk57qRJFFsO4u2Iks6aNc1AmY"
		const stringdQSLKPm = "IXgjCARSrRIqhwx0VBUBwctsVxiUtzYBxR7SQCG6UBundUaTwFJbVaux2Iiw5qvlBY16ptmlKqkSmToNV3uFjm3rpfpLBF"
		const stringB4hDxW = "peHPTABAzrzlBhu62yn2HsKE1RA4RRSGWYyxU83j9G87MnTEdYvVkOy394ogSlBDQbU7LU9D4olsTz8OZwknGo8"
		const bytevFGu0u6 = "0x100c04171012091c101d021f1e"
		const addresskQijdL9 = accounts[1]
		const addressJIxRGSL = accounts[1]
		const boolYNLE7ux = await VotingMrzNtDh.transferFrom.call(addressEaldJk, address0bCKBl, uintEdXMsnI, {from: accounts[2]});
		const 
mc22XjT = await VotingMrzNtDh.createProposal.call(addresskQijdL9, bytevFGu0u6, stringB4hDxW, stringdQSLKPm, stringLqn4uWA, {from: accounts[4]});
		const boolx7GUfM = await VotingMrzNtDh.isVotingSystem.call(addressJIxRGSL, {from: accounts[3]});
		const uint8cQOEqe = await VotingMrzNtDh.decimals.call({from: accounts[3]});
		await VotingMrzNtDh.onlyExchange.call({from: accounts[0]});
	});
})