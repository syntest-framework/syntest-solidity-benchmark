const Voting = artifacts.require("Voting");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Voting', (accounts) => {
	it('test for Voting', async () => {
		const address9tpIGr = accounts[0]
		const VotingP2tcbf = await Voting.new(address9tpIGr, {from: accounts[2]});
		const addressudyDgza = accounts[4]
		const string4A5jEE = await VotingP2tcbf.name.call({from: accounts[4]});
		const addressmdcg46C = await VotingP2tcbf.ownableUpgrade.call(addressudyDgza, {from: accounts[4]});
		await VotingP2tcbf.onlyVotingSystem.call({from: accounts[4]});
	});

	it('test for Voting', async () => {
		const addressH0XOc7A = accounts[0]
		const VotingSxbbt8b = await Voting.new(addressH0XOc7A, {from: accounts[4]});
		const uintYyZUdgn = BigInt("1803")
		const uintDD3xV7S = BigInt("225")
		const uintoWta9A1 = BigInt("515")
		const uintmYwD1AW = BigInt("1903")
		const uint256Hl9XxK = await VotingSxbbt8b.approve.call(uintYyZUdgn, {from: accounts[1]});
		const uint256Swwtpdp = await VotingSxbbt8b.totalSupplyAt.call(uintDD3xV7S, {from: accounts[4]});
		const uint256qEpo0R4 = await VotingSxbbt8b.resolve.call(uintoWta9A1, {from: "0x0000000000000000000000000000000000000001"});
		const uint256cixO3F = await VotingSxbbt8b.resolve.call(uintmYwD1AW, {from: accounts[3]});
	});

	it('test for Voting', async () => {
		const Voting97Mr03 = await Voting.new({from: accounts[0]});
		const uinti2S5Iu9 = BigInt("1115")
		const uint5VhaAq = BigInt("1193")
		const uintOrIGjOH = BigInt("872")
		const addressEWp6vXJ = accounts[4]
		const uint256ofbPQdQ = await Voting97Mr03.totalSupplyAt.call(uinti2S5Iu9, {from: accounts[0]});
		const addressN6wsAtS = await Voting97Mr03.owner.call({from: accounts[2]});
		const uint256OH0TmgN = await Voting97Mr03.approve.call(uint5VhaAq, {from: accounts[1]});
		const uint2567DVdlR = await Voting97Mr03.balanceOfAt.call(addressEWp6vXJ, uintOrIGjOH, {from: accounts[1]});
	});

	it('test for Voting', async () => {
		const VotingQTbmqA = await Voting.new({from: accounts[2]});
		const uintrUSVLX7 = BigInt("1072")
		const addressizpwOYe = accounts[0]
		const addressYHxiFbR = await VotingQTbmqA.getRegistryAddress.call({from: accounts[3]});
		const uint256lxNEeGP = await VotingQTbmqA.balanceOfAt.call(addressizpwOYe, uintrUSVLX7, {from: accounts[0]});
		await VotingQTbmqA.onlyOracle.call({from: accounts[4]});
	});

	it('test for Voting', async () => {
		const addressGJ4x2nL = accounts[4]
		const VotingURoreLR = await Voting.new(addressGJ4x2nL, {from: accounts[4]});
		const uintVHIdF1v = BigInt("1912")
		const uintgGWQbfq = BigInt("520")
		const uintekSbCpB = BigInt("1541")
		const addressechs6jG = "0x0000000000000000000000000000000000000001"
		const addresstBWOuZp = accounts[3]
		const uint256wQyxCE = await VotingURoreLR.pause.call(uintVHIdF1v, {from: accounts[4]});
		const uint256OgHKY4M = await VotingURoreLR.burn.call(uintgGWQbfq, {from: accounts[1]});
		const boolcJGa9g6 = await VotingURoreLR.increaseAllowance.call(addressechs6jG, uintekSbCpB, {from: accounts[5]});
		const boolHIpWhIw = await VotingURoreLR.isMinter.call(addresstBWOuZp, {from: accounts[5]});
		await VotingURoreLR.onlyMessageProcessor.call({from: accounts[2]});
		await VotingURoreLR.onlyExchangeFactoryOrVotingSystem.call({from: accounts[2]});
	});

	it('test for Voting', async () => {
		const addressJ5Hf8RF = "0x0000000000000000000000000000000000000001"
		const VotingoFHUj7t = await Voting.new(addressJ5Hf8RF, {from: accounts[1]});
		const stringz1oiQ7h = "vqiB8nC911Nj6ht7IAFIzlcXi4pAD4AeDOM6gel8qNBRQ38TPNJeD"
		const stringib3TAgt = "NQEtvvEFDytM5cYZVQj47INe2u52VGcvyZY7dc0MvmCV3JDW1XUW3n9ewAt2IaCsz"
		const stringnzAQwzi = "zeCDcR"
		const byteJTKaTo = "0x1305071f09051a1a0713181706061e1b1c041d0c040b10"
		const addressMhjnOLt = accounts[4]
		const uintOmiE13P = BigInt("1869")
		const addressmaTddu = accounts[3]
		const uinth1RbxCe = BigInt("955")
		const 
HNQQbhO = await VotingoFHUj7t.createProposal.call(addressMhjnOLt, byteJTKaTo, stringnzAQwzi, stringib3TAgt, stringz1oiQ7h, {from: accounts[2]});
		const boolGG2PXEa = await VotingoFHUj7t.decreaseAllowance.call(addressmaTddu, uintOmiE13P, {from: accounts[5]});
		await VotingoFHUj7t.onlyExchangeFactoryOrVotingSystem.call({from: accounts[0]});
		await VotingoFHUj7t.onlyMessageProcessor.call({from: accounts[3]});
		const stringCuy0xsU = await VotingoFHUj7t.name.call({from: accounts[4]});
		const uint256nmdvgPN = await VotingoFHUj7t.approve.call(uinth1RbxCe, {from: accounts[3]});
	});

	it('test for Voting', async () => {
		const addressQVTz146 = accounts[0]
		const VotingP2tcbf = await Voting.new(addressQVTz146, {from: accounts[2]});
		const addressMWhiPRR = accounts[1]
		const uintWI5dF9U = BigInt("942")
		const boolyqiogCb = await VotingP2tcbf.isValidVerifierAddress.call(addressMWhiPRR, {from: "0x0000000000000000000000000000000000000001"});
		const string4A5jEE = await VotingP2tcbf.name.call({from: accounts[4]});
		const uint256q7Jhhg = await VotingP2tcbf.pause.call(uintWI5dF9U, {from: "0x0000000000000000000000000000000000000001"});
		await VotingP2tcbf.onlyVotingSystem.call({from: accounts[4]});
	});

	it('test for Voting', async () => {
		const addressZZLD5h0 = accounts[2]
		const VotingOAEb5Dh = await Voting.new(addressZZLD5h0, {from: accounts[0]});
		const addressqc7wy8R = accounts[1]
		const uintpIOOsQX = BigInt("1131")
		const booloDufnZV = await VotingOAEb5Dh.isVotingSystem.call(addressqc7wy8R, {from: accounts[0]});
		const uint256hSRWC82 = await VotingOAEb5Dh.snapshot.call({from: accounts[2]});
		const uint256pE0pgwJ = await VotingOAEb5Dh.pause.call(uintpIOOsQX, {from: accounts[4]});
	});

	it('test for Voting', async () => {
		const addressTeWHaSF = accounts[0]
		const VotingtYCIAWI = await Voting.new(addressTeWHaSF, {from: accounts[5]});
		const addressbFP0gln = accounts[3]
		const uintVxCT6Mq = BigInt("681")
		const addressn8C9yuA = accounts[4]
		const uintaXIrMe = BigInt("1878")
		const uintkLXHb6t = BigInt("1927")
		const addressA2DFQH3 = accounts[4]
		const boolMh2fuVj = await VotingtYCIAWI.didAddressVote.call(uintVxCT6Mq, addressbFP0gln, {from: accounts[3]});
		const boolijGXg7v = await VotingtYCIAWI.isValidOracleAddress.call(addressn8C9yuA, {from: accounts[1]});
		const uint256UKxhjKp = await VotingtYCIAWI.burn.call(uintaXIrMe, {from: accounts[5]});
		const uint256lMjemfe = await VotingtYCIAWI.veto.call(uintkLXHb6t, {from: accounts[0]});
		const addressbT9QlRb = await VotingtYCIAWI.updateRegistry.call(addressA2DFQH3, {from: accounts[0]});
	});

	it('test for Voting', async () => {
		const VotingtPXvPnh = await Voting.new({from: accounts[1]});
		await VotingtPXvPnh.onlyOracle.call({from: accounts[5]});
		const stringUZwYfmK = await VotingtPXvPnh.symbol.call({from: accounts[3]});
		const stringAsBq0Nk = await VotingtPXvPnh.name.call({from: accounts[0]});
	});

	it('test for Voting', async () => {
		const VotingeIda1pn = await Voting.new({from: accounts[5]});
		const addressvEBpZWb = "0x0000000000000000000000000000000000000001"
		const uintTvoSGFG = BigInt("1893")
		await VotingeIda1pn.onlyExchange.call({from: accounts[4]});
		const boolHeVyQVS = await VotingeIda1pn.isValidStamperAddress.call(addressvEBpZWb, {from: accounts[3]});
		const uint256RlFNh6B = await VotingeIda1pn.resolve.call(uintTvoSGFG, {from: accounts[3]});
	});

	it('test for Voting', async () => {
		const addressleKRoNm = accounts[0]
		const VotingRRuIVMk = await Voting.new(addressleKRoNm, {from: "0x0000000000000000000000000000000000000001"});
		const uintOzSO48r = BigInt("1800")
		const addressQp5StnF = accounts[1]
		const uint256Nmet9Wt = await VotingRRuIVMk.balanceOfAt.call(addressQp5StnF, uintOzSO48r, {from: accounts[4]});
		const stringEzbBpK6 = await VotingRRuIVMk.symbol.call({from: accounts[1]});
		await VotingRRuIVMk.onlyMessageProcessor.call({from: accounts[2]});
		await VotingRRuIVMk.onlyExchangeFactory.call({from: accounts[0]});
	});

	it('test for Voting', async () => {
		const addressSDW9Lav = accounts[0]
		const VotingP2tcbf = await Voting.new(addressSDW9Lav, {from: accounts[2]});
		const uintbif9eRF = BigInt("1340")
		const uint256C9IFyH = await VotingP2tcbf.resolve.call(uintbif9eRF, {from: accounts[4]});
		await VotingP2tcbf.onlyVotingSystem.call({from: accounts[4]});
	});
})