const Voting = artifacts.require("Voting");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Voting', (accounts) => {
	it('test for Voting', async () => {
		const addresspxybow4 = accounts[2]
		const VotingoOlefHJ = await Voting.new(addresspxybow4, {from: accounts[2]});
		const addressDyb8X83 = accounts[0]
		const addresssJ3FX94 = accounts[4]
		const uint256AaT5QPA = await VotingoOlefHJ.allowance.call(addresssJ3FX94, addressDyb8X83, {from: accounts[1]});
		await VotingoOlefHJ.onlyExchange.call({from: accounts[0]});
		const addressHHPKMFF = await VotingoOlefHJ.owner.call({from: accounts[3]});
	});

	it('test for Voting', async () => {
		const addressQYLfXFK = accounts[3]
		const VotingMQMH5uO = await Voting.new(addressQYLfXFK, {from: accounts[0]});
		const addressfsbSwV = accounts[2]
		const addressYJOglUR = accounts[4]
		const addressJVg8f0 = accounts[2]
		const uintZaCJJnx = BigInt("1737")
		const boolCbIJCBx = await VotingMQMH5uO.isExchangeFactory.call(addressfsbSwV, {from: accounts[4]});
		await VotingMQMH5uO.requiresWalletAcccess.call({from: accounts[3]});
		const uint256LTKfRX9 = await VotingMQMH5uO.balanceOf.call(addressYJOglUR, {from: accounts[2]});
		const boolM2n92BL = await VotingMQMH5uO.didAddressVote.call(uintZaCJJnx, addressJVg8f0, {from: accounts[2]});
	});

	it('test for Voting', async () => {
		const Votingi4arE66 = await Voting.new({from: accounts[1]});
		await Votingi4arE66.renounceOwnership.call({from: "0x0000000000000000000000000000000000000001"});
		await Votingi4arE66.requiresWalletAcccess.call({from: accounts[1]});
	});

	it('test for Voting', async () => {
		const addresshWdC6yB = accounts[4]
		const VotingaPZwsSg = await Voting.new(addresshWdC6yB, {from: accounts[1]});
		const boolLhjtLMq = true
		const uintBIFUn2d = BigInt("1612")
		const addressHDoPppO = accounts[1]
		const uintW8P5HI = BigInt("410")
		const addressNhefdOD = accounts[3]
		const addressg6r7dgQ = accounts[4]
		const uintlKF8Uw = BigInt("1759")
		const addressBH7SDrk = accounts[1]
		const uintsjP7LLd = BigInt("240")
		const uintoP956vk = BigInt("230")
		const uint256rWKENV = await VotingaPZwsSg.vote.call(uintBIFUn2d, boolLhjtLMq, {from: accounts[2]});
		const boolIOlupX2 = await VotingaPZwsSg.isMinter.call(addressHDoPppO, {from: accounts[1]});
		const booliQ1sDC = await VotingaPZwsSg.transferFrom.call(addressg6r7dgQ, addressNhefdOD, uintW8P5HI, {from: accounts[3]});
		const boolcOCGqAh = await VotingaPZwsSg.approve.call(addressBH7SDrk, uintlKF8Uw, {from: accounts[0]});
		const uint256N9pEcLo = await VotingaPZwsSg.pause.call(uintsjP7LLd, {from: accounts[1]});
		const uint256pNkOSEy = await VotingaPZwsSg.veto.call(uintoP956vk, {from: accounts[2]});
	});

	it('test for Voting', async () => {
		const VotingCaK8fI6 = await Voting.new({from: accounts[4]});
		const addressNzavOGv = accounts[4]
		const addressgamfPZ = accounts[3]
		await VotingCaK8fI6.onlyExchangeFactoryOrVotingSystem.call({from: accounts[1]});
		const addressAuFK0wU = await VotingCaK8fI6.addMinter.call(addressNzavOGv, {from: accounts[2]});
		const addressEZj1WMb = await VotingCaK8fI6.updateRegistry.call(addressgamfPZ, {from: accounts[1]});
	});

	it('test for Voting', async () => {
		const Votingf1lX5qu = await Voting.new({from: accounts[3]});
		const addressWJuihjF = accounts[4]
		const uintnDGHyKs = BigInt("1211")
		const booltLtR9i4 = await Votingf1lX5qu.isMinter.call(addressWJuihjF, {from: accounts[3]});
		const uint256VSiIXeA = await Votingf1lX5qu.totalSupplyAt.call(uintnDGHyKs, {from: accounts[4]});
		await Votingf1lX5qu.requiresWalletAcccess.call({from: accounts[3]});
		await Votingf1lX5qu.onlyOwner.call({from: accounts[3]});
		const stringH5rQPuP = await Votingf1lX5qu.name.call({from: accounts[1]});
	});

	it('test for Voting', async () => {
		const VotingnA0sig7 = await Voting.new({from: accounts[5]});
		const addressDJQxzBa = accounts[5]
		const boolpJvGp6Y = true
		const uintLdxNWW8 = BigInt("189")
		const addressrjIL0QJ = await VotingnA0sig7.getRegistryAddress.call({from: accounts[2]});
		const addressqd74Jzu = await VotingnA0sig7.updateRegistry.call(addressDJQxzBa, {from: accounts[3]});
		const uint256T5Tmu5W = await VotingnA0sig7.vote.call(uintLdxNWW8, boolpJvGp6Y, {from: accounts[1]});
		await VotingnA0sig7.onlyExchangeFactory.call({from: accounts[0]});
	});

	it('test for Voting', async () => {
		const addressRCDBAV = accounts[3]
		const VotingRUh1VN7 = await Voting.new(addressRCDBAV, {from: accounts[0]});
		const uintwYX3U3u = BigInt("837")
		const addressXqXT6la = accounts[3]
		const uintbw2E2nm = BigInt("303")
		const addressIpSmta = accounts[0]
		const uintOF2RRH = BigInt("174")
		const boolfOcXXe5 = await VotingRUh1VN7.approve.call(addressXqXT6la, uintwYX3U3u, {from: accounts[3]});
		const boolJxgZEwH = await VotingRUh1VN7.decreaseAllowance.call(addressIpSmta, uintbw2E2nm, {from: accounts[1]});
		const uint256gneBtUo = await VotingRUh1VN7.approve.call(uintOF2RRH, {from: accounts[3]});
	});

	it('test for Voting', async () => {
		const addresswMFanRQ = "0x0000000000000000000000000000000000000001"
		const VotingW2y25C = await Voting.new(addresswMFanRQ, {from: accounts[4]});
		const addressW6IDZzd = accounts[1]
		const addressQQgdcC6 = accounts[3]
		const addressQkJFRcd = await VotingW2y25C.ownableUpgrade.call(addressW6IDZzd, {from: accounts[2]});
		const uint256qY0TTQE = await VotingW2y25C.balanceOf.call(addressQQgdcC6, {from: accounts[3]});
	});

	it('test for Voting', async () => {
		const VotingEgHf5ab = await Voting.new({from: accounts[0]});
		const uint8ibACHh8 = await VotingEgHf5ab.decimals.call({from: accounts[1]});
		await VotingEgHf5ab.onlyMessageProcessor.call({from: accounts[3]});
		await VotingEgHf5ab.onlyExchange.call({from: accounts[2]});
	});

	it('test for Voting', async () => {
		const addressWZuhmQ = "0x0000000000000000000000000000000000000001"
		const VotingW2y25C = await Voting.new(addressWZuhmQ, {from: accounts[4]});
		const uintG4L2Kr8 = BigInt("623")
		const booljSsnKNF = true
		const uintv7EXuQ5 = BigInt("1207")
		const addressEB0vtgM = await VotingW2y25C.owner.call({from: accounts[5]});
		const uint256Krj2t4s = await VotingW2y25C.pause.call(uintG4L2Kr8, {from: accounts[5]});
		const uint256Mnutpm = await VotingW2y25C.vote.call(uintv7EXuQ5, booljSsnKNF, {from: accounts[1]});
	});

	it('test for Voting', async () => {
		const addresss1EbWtp = accounts[4]
		const VotingLNlM3M2 = await Voting.new(addresss1EbWtp, {from: accounts[1]});
		const uintkOiRGds = BigInt("977")
		const addressHzYfTwO = accounts[3]
		const addresslxX4IUp = accounts[3]
		const addressPGxLXRP = accounts[1]
		const uint256Kk0oQnK = await VotingLNlM3M2.veto.call(uintkOiRGds, {from: accounts[1]});
		const addresstNwFME9 = await VotingLNlM3M2.transferOwnership.call(addressHzYfTwO, {from: accounts[4]});
		const addressEWglbFw = await VotingLNlM3M2.transferOwnership.call(addresslxX4IUp, {from: accounts[4]});
		const boolYHVMV2z = await VotingLNlM3M2.isValidOracleAddress.call(addressPGxLXRP, {from: accounts[5]});
	});

	it('test for Voting', async () => {
		const addressoN52maU = "0x0000000000000000000000000000000000000001"
		const VotingW2y25C = await Voting.new(addressoN52maU, {from: accounts[4]});
		const stringtlpN0Lm = "TAyrMFrXiVAXCRaQtAPPMFEvcEEUCGu0FPKqGsrcsXdqO2HwyDlGiqFMjhPeaX"
		const stringpRw9B7 = "Xknj5JkW1BhH7VqgEDVQOyXlzy2Ifu6LbOodxJP4cbaaECsyY8QRP2id"
		const stringRmVahVd = "vNiMBuQKuD4wRgxm8hx8pM800SCO5txJXTSCtqs4f7Sm2H8jEU9I5"
		const byteswU96Rp = "0x101b06180e170101"
		const addresssCaovlz = accounts[0]
		const booljSsnKNF = false
		const uinttIWt7ll = BigInt("1206")
		const 
a6mfOXs = await VotingW2y25C.createProposal.call(addresssCaovlz, byteswU96Rp, stringRmVahVd, stringpRw9B7, stringtlpN0Lm, {from: "0x0000000000000000000000000000000000000001"});
		const uint256Mnutpm = await VotingW2y25C.vote.call(uinttIWt7ll, booljSsnKNF, {from: accounts[1]});
	});

	it('test for Voting', async () => {
		const addressIlRhis9 = "0x0000000000000000000000000000000000000001"
		const VotingW2y25C = await Voting.new(addressIlRhis9, {from: accounts[4]});
		const addressRDoHwLQ = accounts[1]
		const uintlRDPBa5 = BigInt("1208")
		const booljSsnKNF = false
		const uintPAedFPh = BigInt("1183")
		const boolChIQBxJ = await VotingW2y25C.didAddressVote.call(uintlRDPBa5, addressRDoHwLQ, {from: accounts[4]});
		const uint256Mnutpm = await VotingW2y25C.vote.call(uintPAedFPh, booljSsnKNF, {from: accounts[1]});
	});

	it('test for Voting', async () => {
		const address0hMinR = accounts[0]
		const Votingmk8nw1o = await Voting.new(address0hMinR, {from: "0x0000000000000000000000000000000000000001"});
		const uintBkP0ifV = BigInt("27")
		const addressJz6absy = accounts[4]
		const addressXHund9O = accounts[4]
		const addressNKTxIno = accounts[1]
		const boolsWjb4RX = await Votingmk8nw1o.increaseAllowance.call(addressJz6absy, uintBkP0ifV, {from: accounts[4]});
		await Votingmk8nw1o.renounceMinter.call({from: accounts[1]});
		const addressQQS0sgB = await Votingmk8nw1o.transferOwnership.call(addressXHund9O, {from: accounts[2]});
		const addressUftjPIp = await Votingmk8nw1o.transferOwnership.call(addressNKTxIno, {from: accounts[5]});
	});

	it('test for Voting', async () => {
		const addressWiNx7da = "0x0000000000000000000000000000000000000001"
		const VotingW2y25C = await Voting.new(addressWiNx7da, {from: accounts[4]});
		const addressF4TFB20 = accounts[4]
		const booljSsnKNF = false
		const uintYSRW2tC = BigInt("1205")
		const addressw7s9EkT = accounts[2]
		const stringHXzmNNV = "9I7BCr4U34X81xToe1fjMjrAiiUNlvKSpmLq2u1vFRFxrDha2Vr"
		const stringJNMcPSH = "F0gUlUZYAOTSb8hiSfRNx28NkPces2fOjA"
		const stringJAJT7k7 = "QdR3aPPQjoRmGXAE3WdJRJ7"
		const byteeRqIq2h = "0x04171b190c020e0a041902180c0404090914081513070a191c110d080b13"
		const address4EHwGS = accounts[0]
		const boolxzFGB6 = await VotingW2y25C.isValidOracleAddress.call(addressF4TFB20, {from: accounts[0]});
		const uint256Mnutpm = await VotingW2y25C.vote.call(uintYSRW2tC, booljSsnKNF, {from: accounts[1]});
		const boolXavF1Zz = await VotingW2y25C.isValidOracleAddress.call(addressw7s9EkT, {from: accounts[4]});
		const 
SUmsNB = await VotingW2y25C.createProposal.call(address4EHwGS, byteeRqIq2h, stringJAJT7k7, stringJNMcPSH, stringHXzmNNV, {from: accounts[0]});
	});

	it('test for Voting', async () => {
		const addressCc91yw = "0x0000000000000000000000000000000000000001"
		const VotingW2y25C = await Voting.new(addressCc91yw, {from: accounts[4]});
		const addressAag9o6u = accounts[2]
		const uintRXkB9Lo = BigInt("404")
		const addressLwQHb1T = accounts[2]
		const addresspbKeJ30 = accounts[0]
		const booljSsnKNF = false
		const uintisarbUS = BigInt("1221")
		const boolGi8suKR = await VotingW2y25C.isVotingSystem.call(addressAag9o6u, {from: accounts[2]});
		const boolnVpoqwj = await VotingW2y25C.transferFrom.call(addresspbKeJ30, addressLwQHb1T, uintRXkB9Lo, {from: accounts[4]});
		const uint256Mnutpm = await VotingW2y25C.vote.call(uintisarbUS, booljSsnKNF, {from: accounts[1]});
	});

	it('test for Voting', async () => {
		const addresseoQutus = "0x0000000000000000000000000000000000000001"
		const VotingW2y25C = await Voting.new(addresseoQutus, {from: accounts[4]});
		const uintti5xxlp = BigInt("1678")
		const uint256xDJ1hlh = await VotingW2y25C.resolve.call(uintti5xxlp, {from: accounts[4]});
	});

	it('test for Voting', async () => {
		const VotingXL7NeFq = await Voting.new({from: accounts[2]});
		const addressYNyziQU = accounts[4]
		const uintYEHnrMD = BigInt("6")
		const uintCHtdqcI = BigInt("739")
		const boolIB7OiT = await VotingXL7NeFq.isOwner.call({from: accounts[1]});
		const addressB1mZ5U4 = await VotingXL7NeFq.updateRegistry.call(addressYNyziQU, {from: accounts[4]});
		const uint256HK1nNd = await VotingXL7NeFq.resolve.call(uintYEHnrMD, {from: accounts[1]});
		const uint8MwgiAGC = await VotingXL7NeFq.decimals.call({from: accounts[2]});
		const uint256CXP83yt = await VotingXL7NeFq.burn.call(uintCHtdqcI, {from: accounts[1]});
	});
})