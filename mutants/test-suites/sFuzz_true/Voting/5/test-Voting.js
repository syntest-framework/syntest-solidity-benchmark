const Voting = artifacts.require("Voting");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Voting', (accounts) => {
	it('test for Voting', async () => {
		const addressE0IURT2 = accounts[4]
		const Voting5X9Ht3 = await Voting.new(addressE0IURT2, {from: accounts[5]});
		const stringUwcuWQH = "6PLXdcyycE2OuANeVTuwblswGm"
		const stringRmgQ1t = "NMmkv6bD9shDvgE1Od5j03IxaUxfMnyzFYvHBXH0bHvWWTu5NSgsxK"
		const stringJMcfjsV = "JFkSFaHzxUKUtPX6wHyNAfBzOQWeb5AhAZ28LyVDjC15RSvoWwXPMVJfO9rFRFwCq1uhVqicXTvnc"
		const byteUxAMqHF = "0x1e040311021010141b0d0c131e041909071908181b0d021202011e1b1d1e0d"
		const addressJnb0UOn = accounts[0]
		const 
FoZWuH5 = await Voting5X9Ht3.createProposal.call(addressJnb0UOn, byteUxAMqHF, stringJMcfjsV, stringRmgQ1t, stringUwcuWQH, {from: accounts[5]});
		const addressqjpdvej = await Voting5X9Ht3.getRegistryAddress.call({from: accounts[3]});
		const uint256rxmnm2C = await Voting5X9Ht3.totalSupply.call({from: accounts[4]});
		await Voting5X9Ht3.onlyMinter.call({from: accounts[0]});
	});

	it('test for Voting', async () => {
		const addressWwgAJig = accounts[4]
		const VotingArDkv8v = await Voting.new(addressWwgAJig, {from: accounts[4]});
		const uintxRptvtt = BigInt("1458")
		const stringxWzqKLh = "YHfVt6yfDaXC5zKMVJepZiW7V1DWg"
		const stringQFcFAJ1 = "uxflhRLzCMu0C"
		const stringrV4wba3 = "7rnzCOYDpfQAiT4oVs"
		const byteZvGERPs = "0x1d04171c19121e0a0f0e0f161e1b1603051d0e101a1f10151a"
		const addressMgnSjca = accounts[1]
		const stringdzN5EeG = "dFuwm7N9PJ4q8hhUtTlRg54hCPxS"
		const stringTAzRC56 = "uYjo58CeJDsQpJ8eX4xFy30q9mdMgJ"
		const stringOSS0Evs = "DHbPqFMSlD92BluDhuXFVv5GJBicsgzGl2uvT7e84KGB9kCHmLdBrx9aFMkpzr9UaVOufURJ4MIFpmAqLbUAqdd2PAPBoF"
		const byteKx5Mm8T = "0x01161013121e0214160f"
		const addressuMmXIQr = accounts[0]
		const uint256CdAZiwD = await VotingArDkv8v.resolve.call(uintxRptvtt, {from: accounts[1]});
		await VotingArDkv8v.requiresLiquidityTokenSnapshotAccess.call({from: accounts[3]});
		const 
PVKUN9p = await VotingArDkv8v.createProposal.call(addressMgnSjca, byteZvGERPs, stringrV4wba3, stringQFcFAJ1, stringxWzqKLh, {from: accounts[0]});
		const 
i8yjdvJ = await VotingArDkv8v.createProposal.call(addressuMmXIQr, byteKx5Mm8T, stringOSS0Evs, stringTAzRC56, stringdzN5EeG, {from: accounts[2]});
	});

	it('test for Voting', async () => {
		const addresssU0Fw14 = accounts[4]
		const VotingguMw7tT = await Voting.new(addresssU0Fw14, {from: "0x0000000000000000000000000000000000000001"});
		const addressNJpAsh0 = accounts[3]
		const uintLPRym4Q = BigInt("148")
		const addressoqVnOIm = accounts[4]
		const addressqmXD50B = accounts[2]
		const uintiHxIvMh = BigInt("1114")
		const addressx0t6hS = accounts[5]
		const uintLvoFDYD = BigInt("565")
		const addresswTQUO26 = accounts[1]
		const addresstTh0lY = await VotingguMw7tT.ownableUpgrade.call(addressNJpAsh0, {from: accounts[3]});
		const boolfL7F2M = await VotingguMw7tT.transferFrom.call(addressqmXD50B, addressoqVnOIm, uintLPRym4Q, {from: accounts[3]});
		const boolTgW7zq4 = await VotingguMw7tT.transfer.call(addressx0t6hS, uintiHxIvMh, {from: accounts[5]});
		await VotingguMw7tT.onlyOwner.call({from: accounts[2]});
		await VotingguMw7tT.onlyExchangeFactoryOrVotingSystem.call({from: accounts[4]});
		const booltvAIHya = await VotingguMw7tT.increaseAllowance.call(addresswTQUO26, uintLvoFDYD, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for Voting', async () => {
		const addressnrebb3 = accounts[3]
		const VotingwTbDPLQ = await Voting.new(addressnrebb3, {from: accounts[0]});
		const uintcUllvwd = BigInt("791")
		const addressX5Fc3js = "0x0000000000000000000000000000000000000001"
		const boolP0dOY8Q = false
		const uintMDT2fke = BigInt("1888")
		const boolkIBTCbu = await VotingwTbDPLQ.transfer.call(addressX5Fc3js, uintcUllvwd, {from: accounts[2]});
		const uint256yGAcEhs = await VotingwTbDPLQ.vote.call(uintMDT2fke, boolP0dOY8Q, {from: accounts[4]});
		await VotingwTbDPLQ.onlyMinter.call({from: accounts[2]});
	});

	it('test for Voting', async () => {
		const addressr22xkaG = accounts[5]
		const VotingXJurMAu = await Voting.new(addressr22xkaG, {from: accounts[3]});
		const uintzazFfbK = BigInt("603")
		const uintmNkLM2O = BigInt("1545")
		const addressqPFLC5z = accounts[0]
		const uintzilm54Y = BigInt("379")
		const uint256MFYdPyU = await VotingXJurMAu.pause.call(uintzazFfbK, {from: accounts[2]});
		await VotingXJurMAu.requiresLiquidityTokenSnapshotAccess.call({from: accounts[2]});
		const boolbzGoIw0 = await VotingXJurMAu.decreaseAllowance.call(addressqPFLC5z, uintmNkLM2O, {from: accounts[5]});
		const addressmF2W2Pp = await VotingXJurMAu.getRegistryAddress.call({from: accounts[3]});
		const uint256hzYgxQ3 = await VotingXJurMAu.veto.call(uintzilm54Y, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for Voting', async () => {
		const VotingSRQP5lU = await Voting.new({from: accounts[4]});
		const uintRxyZKEH = BigInt("1476")
		await VotingSRQP5lU.renounceMinter.call({from: accounts[0]});
		const uint256XfxZiO = await VotingSRQP5lU.resolve.call(uintRxyZKEH, {from: accounts[1]});
	});

	it('test for Voting', async () => {
		const addressZQQxLFS = "0x0000000000000000000000000000000000000001"
		const VotingKsOsn2O = await Voting.new(addressZQQxLFS, {from: accounts[0]});
		const uintjhTtMZM = BigInt("1785")
		const addressCrDXeh1 = accounts[5]
		const uintFk2W17i = BigInt("1781")
		const addressHTJzjT = accounts[0]
		const addressZKf3Kc = accounts[3]
		const boolpkk9uj = await VotingKsOsn2O.approve.call(addressCrDXeh1, uintjhTtMZM, {from: accounts[1]});
		const boolA4HAras = await VotingKsOsn2O.transferFrom.call(addressZKf3Kc, addressHTJzjT, uintFk2W17i, {from: accounts[4]});
		await VotingKsOsn2O.requiresWalletAcccess.call({from: accounts[4]});
		const uint256YhFfqY = await VotingKsOsn2O.totalSupply.call({from: accounts[3]});
	});

	it('test for Voting', async () => {
		const addressdIOB0OJ = accounts[1]
		const VotingTkk5If7 = await Voting.new(addressdIOB0OJ, {from: accounts[2]});
		const addressPVDm7qB = accounts[2]
		const uintcpZAZ0J = BigInt("316")
		const boolfqcATT9 = await VotingTkk5If7.didAddressVote.call(uintcpZAZ0J, addressPVDm7qB, {from: accounts[1]});
		await VotingTkk5If7.renounceMinter.call({from: "0x0000000000000000000000000000000000000001"});
		await VotingTkk5If7.onlyMinter.call({from: accounts[5]});
		await VotingTkk5If7.renounceMinter.call({from: accounts[3]});
		await VotingTkk5If7.onRegistryRefresh.call({from: accounts[3]});
	});

	it('test for Voting', async () => {
		const addresshrje0LT = accounts[0]
		const VotingoJD5fv = await Voting.new(addresshrje0LT, {from: accounts[2]});
		const uintthJmzez = BigInt("496")
		const uint256HdD33K = await VotingoJD5fv.approve.call(uintthJmzez, {from: accounts[4]});
		await VotingoJD5fv.renounceMinter.call({from: accounts[3]});
		await VotingoJD5fv.onlyOwner.call({from: accounts[2]});
	});

	it('test for Voting', async () => {
		const addressGAmpoCg = accounts[5]
		const VotingSoenVmw = await Voting.new(addressGAmpoCg, {from: accounts[0]});
		const addressNLkseGU = accounts[0]
		const uintIaOdLGr = BigInt("1980")
		const boolBfDjQF = await VotingSoenVmw.isVotingSystem.call(addressNLkseGU, {from: accounts[5]});
		await VotingSoenVmw.onlyExchangeFactoryOrVotingSystem.call({from: accounts[3]});
		const uint256PPnfx9D = await VotingSoenVmw.burn.call(uintIaOdLGr, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for Voting', async () => {
		const addressHlg4lBU = accounts[5]
		const VotingXJurMAu = await Voting.new(addressHlg4lBU, {from: accounts[3]});
		const addressOWNB24q = accounts[0]
		const addressaDHlulU = accounts[3]
		const uintewSJpaE = BigInt("1545")
		const addressJtFnguL = accounts[6]
		const addresspmNwStQ = await VotingXJurMAu.transferOwnership.call(addressOWNB24q, {from: accounts[3]});
		await VotingXJurMAu.onRegistryRefresh.call({from: accounts[4]});
		const boolaMKNFF = await VotingXJurMAu.isValidOracleAddress.call(addressaDHlulU, {from: accounts[3]});
		const boolbzGoIw0 = await VotingXJurMAu.decreaseAllowance.call(addressJtFnguL, uintewSJpaE, {from: accounts[5]});
	});

	it('test for Voting', async () => {
		const VotingC2pbJfx = await Voting.new({from: accounts[3]});
		const uintO0NM5Da = BigInt("1907")
		const uintydY91z = BigInt("946")
		const addresszRM2X7c = accounts[1]
		const uintcpBk8E2 = BigInt("126")
		const addressUpyncWR = "0x0000000000000000000000000000000000000001"
		const uint256ULSEgLI = await VotingC2pbJfx.veto.call(uintO0NM5Da, {from: accounts[0]});
		const boolQCH5dOw = await VotingC2pbJfx.mint.call(addresszRM2X7c, uintydY91z, {from: accounts[1]});
		const booleJDEjt6 = await VotingC2pbJfx.increaseAllowance.call(addressUpyncWR, uintcpBk8E2, {from: accounts[3]});
	});

	it('test for Voting', async () => {
		const addresss29KxRq = accounts[2]
		const VotingilOPgaZ = await Voting.new(addresss29KxRq, {from: accounts[2]});
		const addressFYfa6ig = accounts[2]
		const uinthRLVwBi = BigInt("1807")
		const addressS9EikpA = accounts[1]
		const boolrHLB5XM = await VotingilOPgaZ.isExchangeFactory.call(addressFYfa6ig, {from: accounts[2]});
		await VotingilOPgaZ.onlyOwner.call({from: accounts[0]});
		const boolAUNT1GK = await VotingilOPgaZ.mint.call(addressS9EikpA, uinthRLVwBi, {from: accounts[3]});
	});

	it('test for Voting', async () => {
		const addressOUMtZ6v = accounts[5]
		const VotingXJurMAu = await Voting.new(addressOUMtZ6v, {from: accounts[3]});
		const uintUKFQvxe = BigInt("126")
		const uintCSbC2gF = BigInt("669")
		const addresshdPXHry = accounts[4]
		const uintkOT7UCu = BigInt("602")
		const uint256vUOw6UN = await VotingXJurMAu.approve.call(uintUKFQvxe, {from: accounts[3]});
		const uint256FcfhKTp = await VotingXJurMAu.resolve.call(uintCSbC2gF, {from: accounts[3]});
		const addressTJ1BxmA = await VotingXJurMAu.transferOwnership.call(addresshdPXHry, {from: accounts[4]});
		const uint256MFYdPyU = await VotingXJurMAu.pause.call(uintkOT7UCu, {from: accounts[2]});
	});

	it('test for Voting', async () => {
		const addressFvsxEkE = accounts[5]
		const VotingXJurMAu = await Voting.new(addressFvsxEkE, {from: accounts[3]});
		const addressMBpcOFS = accounts[3]
		const uintzz2ylWV = BigInt("625")
		const boolwo2JbP = await VotingXJurMAu.isValidVerifierAddress.call(addressMBpcOFS, {from: accounts[1]});
		const uint256MFYdPyU = await VotingXJurMAu.pause.call(uintzz2ylWV, {from: accounts[2]});
	});

	it('test for Voting', async () => {
		const addressqVkfvz = accounts[5]
		const VotingXJurMAu = await Voting.new(addressqVkfvz, {from: accounts[3]});
		const addressQMsbOUp = accounts[1]
		const uintl8Rcscq = BigInt("578")
		const boolsgm1uP = await VotingXJurMAu.isValidStamperAddress.call(addressQMsbOUp, {from: accounts[4]});
		const uint256MFYdPyU = await VotingXJurMAu.pause.call(uintl8Rcscq, {from: accounts[2]});
	});

	it('test for Voting', async () => {
		const VotingPAhYfcr = await Voting.new({from: accounts[1]});
		const uintomOZlPB = BigInt("342")
		const addresszOQ0Xwy = accounts[4]
		const uintBSIFmcz = BigInt("1905")
		const addressRiUSo2 = accounts[2]
		const uintjadzAw9 = BigInt("825")
		const addressTLyWw3N = accounts[5]
		const bools7RJJrt = await VotingPAhYfcr.isOwner.call({from: accounts[0]});
		const boolBCheOVa = await VotingPAhYfcr.decreaseAllowance.call(addresszOQ0Xwy, uintomOZlPB, {from: accounts[4]});
		const boolHpAw4Tw = await VotingPAhYfcr.decreaseAllowance.call(addressRiUSo2, uintBSIFmcz, {from: "0x0000000000000000000000000000000000000001"});
		const boolP7wPGcI = await VotingPAhYfcr.transfer.call(addressTLyWw3N, uintjadzAw9, {from: accounts[2]});
	});

	it('test for Voting', async () => {
		const addressxtmO6T = accounts[5]
		const VotingXJurMAu = await Voting.new(addressxtmO6T, {from: accounts[3]});
		const boolS8TSPG5 = false
		const uintJAktPST = BigInt("1380")
		const uintueC958m = BigInt("1178")
		const uintPfdBHzp = BigInt("621")
		const uint256hRcxwDn = await VotingXJurMAu.vote.call(uintJAktPST, boolS8TSPG5, {from: accounts[3]});
		const uint256xw4AUsh = await VotingXJurMAu.resolve.call(uintueC958m, {from: accounts[0]});
		const uint256MFYdPyU = await VotingXJurMAu.pause.call(uintPfdBHzp, {from: accounts[2]});
	});
})