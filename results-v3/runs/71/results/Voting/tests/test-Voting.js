const Voting = artifacts.require("Voting");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Voting', (accounts) => {
	it('test for Voting', async () => {
		const VotingUpWQshs = await Voting.new({from: accounts[3]});
		const addressOwAiRge = accounts[0]
		const addresswO2mcdj = accounts[3]
		const addressSqctrZ = accounts[2]
		const addressUoOI8BA = accounts[1]
		const addresss0XjTcE = accounts[3]
		await VotingUpWQshs.requiresLiquidityTokenSnapshotAccess.call({from: accounts[0]});
		const uint256hPIdfGE = await VotingUpWQshs.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
		const addressqQj1BKV = await VotingUpWQshs.transferOwnership.call(addressOwAiRge, {from: accounts[1]});
		const uint256PPBvk2O = await VotingUpWQshs.allowance.call(addressSqctrZ, addresswO2mcdj, {from: accounts[4]});
		const addressNxvQY95 = await VotingUpWQshs.addMinter.call(addressUoOI8BA, {from: accounts[3]});
		const boolBeiKHIJ = await VotingUpWQshs.isValidOracleAddress.call(addresss0XjTcE, {from: accounts[4]});
	});

	it('test for Voting', async () => {
		const addresstFcYMkD = accounts[1]
		const VotingC1ioNXW = await Voting.new(addresstFcYMkD, {from: accounts[3]});
		const uintbWGc9s9 = BigInt("422")
		const addressfeqviCA = accounts[3]
		const addressxvohXzU = accounts[2]
		const stringH4MnrPv = "BUdt7iSnBrzTlNR"
		const stringeWj5PJt = "J9Jjak6w54pREmqm"
		const stringQKxQXwr = "uIRAct8PAEsXnayR83wPnBUzF"
		const bytejufgsPb = "0x1f041b0b1e200f1b0717160a0411050f1b00040301132001160e13"
		const addressYVk7Tqe = accounts[4]
		const uintpzU156 = BigInt("450")
		const addressGI2Gn8A = accounts[3]
		const uintnRgMiP1 = BigInt("480")
		const uintKSFsznU = BigInt("55")
		const addressrWtIRmf = accounts[2]
		const boolitl6BKP = await VotingC1ioNXW.transferFrom.call(addressxvohXzU, addressfeqviCA, uintbWGc9s9, {from: accounts[5]});
		await VotingC1ioNXW.nonReentrant.call({from: accounts[5]});
		const 
YhfxhUL = await VotingC1ioNXW.createProposal.call(addressYVk7Tqe, bytejufgsPb, stringQKxQXwr, stringeWj5PJt, stringH4MnrPv, {from: "0x0000000000000000000000000000000000000001"});
		const boolRtBHwP = await VotingC1ioNXW.transfer.call(addressGI2Gn8A, uintpzU156, {from: accounts[0]});
		const uint25635nxrs = await VotingC1ioNXW.burn.call(uintnRgMiP1, {from: accounts[0]});
		const boolGxzGlc = await VotingC1ioNXW.decreaseAllowance.call(addressrWtIRmf, uintKSFsznU, {from: accounts[3]});
	});

	it('test for Voting', async () => {
		const addressY0HYxD = accounts[1]
		const VotingrOpSKpQ = await Voting.new(addressY0HYxD, {from: accounts[2]});
		const addressPLh6LXT = accounts[5]
		const uintNEH9m1U = BigInt("182")
		const addressDqUeNTp = accounts[4]
		const addressUSOAGwx = accounts[0]
		const uintn7u5Wzj = BigInt("1995")
		const address3iS34j = accounts[3]
		const boolHEfKwcP = await VotingrOpSKpQ.isOwner.call({from: "0x0000000000000000000000000000000000000001"});
		const booltNiY3Ux = await VotingrOpSKpQ.isMinter.call(addressPLh6LXT, {from: accounts[0]});
		const boolxhpmauJ = await VotingrOpSKpQ.transferFrom.call(addressUSOAGwx, addressDqUeNTp, uintNEH9m1U, {from: accounts[4]});
		const addressntqaVXl = await VotingrOpSKpQ.burnFrom.call(address3iS34j, uintn7u5Wzj, {from: accounts[1]});
		await VotingrOpSKpQ.onlyVotingSystem.call({from: accounts[2]});
	});

	it('test for Voting', async () => {
		const addressGb5rFJ3 = accounts[4]
		const Votingpx7wODm = await Voting.new(addressGb5rFJ3, {from: accounts[5]});
		const uintmebgGpJ = BigInt("1880")
		const addressHdIHmom = accounts[1]
		const addressxQPHUOX = accounts[2]
		const uint256rGBUWmQ = await Votingpx7wODm.approve.call(uintmebgGpJ, {from: accounts[3]});
		await Votingpx7wODm.onlyExchange.call({from: accounts[0]});
		const uint256NfvcNSZ = await Votingpx7wODm.allowance.call(addressxQPHUOX, addressHdIHmom, {from: accounts[4]});
		await Votingpx7wODm.onlyExchange.call({from: accounts[0]});
	});

	it('test for Voting', async () => {
		const VotingYIpiuD1 = await Voting.new({from: accounts[2]});
		const uintq15VBiw = BigInt("464")
		const addressqjIHhJJ = "0x0000000000000000000000000000000000000001"
		const addressO7hqacW = accounts[2]
		await VotingYIpiuD1.onlyExchangeFactoryOrVotingSystem.call({from: accounts[4]});
		const uint256cy3tHsh = await VotingYIpiuD1.burn.call(uintq15VBiw, {from: accounts[1]});
		const boolcJDFBe8 = await VotingYIpiuD1.isMinter.call(addressqjIHhJJ, {from: accounts[3]});
		const boolpbrzjP7 = await VotingYIpiuD1.isValidVerifierAddress.call(addressO7hqacW, {from: accounts[2]});
	});

	it('test for Voting', async () => {
		const addressVKEV2L0 = accounts[4]
		const VotingmONEuiB = await Voting.new(addressVKEV2L0, {from: accounts[1]});
		const stringooLJDfK = "X5hRTeAysHNJmnvr3ODM2LnjVutciqAMsxgwF6tgOe3mFJAz946KMKDmUOzan8Xs03W3vSrVA4UYLSy8S3si3SeD6V7Muczc"
		const stringjR2Wnh = "sXOFkOJra51PbR9UzJPrijEkc3DOK3lu47RXYNvnhk4P4fKerB4cQzKmu3MRVJe1RuPWh8XLGuIazfEXjwoL12Sat2W2aowMWM"
		const stringnq9Tw16 = "ooOL9kznYsgCXhhPluhsphDYQrpSxp2cvCLyDDK5Xeahv8xbR1BJbHGD0oqSghDuFrA2AcNqCcS8dkCzL57gM4daEkqSSx"
		const byteipNFYvI = "0x1e011a0314181a0401140b1e180914071517"
		const addressj6RBQ8d = accounts[3]
		const addressSoG66Sz = "0x0000000000000000000000000000000000000001"
		const booldNNyGJ5 = true
		const uintPRCW3MM = BigInt("347")
		const 
w7Ewzan = await VotingmONEuiB.createProposal.call(addressj6RBQ8d, byteipNFYvI, stringnq9Tw16, stringjR2Wnh, stringooLJDfK, {from: accounts[2]});
		await VotingmONEuiB.nonReentrant.call({from: accounts[1]});
		const uint256uITOrJj = await VotingmONEuiB.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
		const addressX6b9UJs = await VotingmONEuiB.updateRegistry.call(addressSoG66Sz, {from: "0x0000000000000000000000000000000000000001"});
		const uint256jEwBlH5 = await VotingmONEuiB.vote.call(uintPRCW3MM, booldNNyGJ5, {from: accounts[4]});
	});

	it('test for Voting', async () => {
		const addresseD2OFHv = accounts[1]
		const VotingC1ioNXW = await Voting.new(addresseD2OFHv, {from: accounts[3]});
		const addressqxCSlIK = accounts[2]
		const uintQwL5y5Z = BigInt("422")
		const addresszGvtBo9 = accounts[3]
		const addresscDOvv0C = accounts[2]
		const stringH4MnrPv = "BUdt7iSnBrzTlNR"
		const stringeWj5PJt = "J9Jjak6w54pREmqm"
		const stringQKxQXwr = "uIRAct8PAEsXnayR83wPnBUzF"
		const byteDLaK5BE = "0x1f041b0b1e200f1b0717160a0411050f1b00040301132001160e13"
		const addressn5cicEk = accounts[4]
		const uintcnV0Aef = BigInt("133")
		const addressfz9hGQd = accounts[2]
		const uintp9q8Gbr = BigInt("480")
		const uintQw7bNj8 = BigInt("55")
		const addressy2FceOA = accounts[2]
		const boolxriiLd4 = await VotingC1ioNXW.isVotingSystem.call(addressqxCSlIK, {from: accounts[5]});
		const boolitl6BKP = await VotingC1ioNXW.transferFrom.call(addresscDOvv0C, addresszGvtBo9, uintQwL5y5Z, {from: accounts[5]});
		await VotingC1ioNXW.nonReentrant.call({from: accounts[5]});
		const 
YhfxhUL = await VotingC1ioNXW.createProposal.call(addressn5cicEk, byteDLaK5BE, stringQKxQXwr, stringeWj5PJt, stringH4MnrPv, {from: "0x0000000000000000000000000000000000000001"});
		const uint256RhH4WXr = await VotingC1ioNXW.balanceOfAt.call(addressfz9hGQd, uintcnV0Aef, {from: "0x0000000000000000000000000000000000000001"});
		const uint25635nxrs = await VotingC1ioNXW.burn.call(uintp9q8Gbr, {from: accounts[0]});
		const boolGxzGlc = await VotingC1ioNXW.decreaseAllowance.call(addressy2FceOA, uintQw7bNj8, {from: accounts[3]});
	});

	it('test for Voting', async () => {
		const addressrUoRD0j = accounts[1]
		const VotingT9rmgmy = await Voting.new(addressrUoRD0j, {from: accounts[4]});
		const uintiBPmBP4 = BigInt("1525")
		const uintrtbgf6n = BigInt("1255")
		const addressEZMmZPk = accounts[4]
		const uint256aRzLfqZ = await VotingT9rmgmy.resolve.call(uintiBPmBP4, {from: accounts[1]});
		await VotingT9rmgmy.onlyMessageProcessor.call({from: accounts[4]});
		await VotingT9rmgmy.requiresLiquidityTokenSnapshotAccess.call({from: "0x0000000000000000000000000000000000000001"});
		await VotingT9rmgmy.requiresWalletAcccess.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256fCBc8lZ = await VotingT9rmgmy.balanceOfAt.call(addressEZMmZPk, uintrtbgf6n, {from: accounts[3]});
		await VotingT9rmgmy.onlyOwner.call({from: accounts[3]});
		await VotingT9rmgmy.onlyOracle.call({from: accounts[1]});
	});

	it('test for Voting', async () => {
		const addressGAplmU9 = accounts[1]
		const Voting3bNgoI = await Voting.new(addressGAplmU9, {from: accounts[1]});
		const addresshYN2eGJ = accounts[0]
		const uintJvcAg6y = BigInt("417")
		const addressrTtH7qm = accounts[3]
		const stringtXcvPhx = "9sq3cc2wrhQ7SGSgw2jRscekq9XviWHWA4TYEgPzQI2vYePChWONwrzobnxfqwndl"
		const stringd57sN2r = "gbBqln23opFgTbO"
		const stringQr4Nutb = "FmOmx4TEXveLLtQYc1c3ULy6JdTLESHwzHdy8q8JGe2b5n6wJ2jHFUCxyqBV9NOpZGyUd5"
		const byteBZogIEG = "0x111e1f"
		const addressSrUfVUV = accounts[1]
		const boolDMSOWDp = await Voting3bNgoI.didAddressVote.call(uintJvcAg6y, addresshYN2eGJ, {from: accounts[4]});
		const uint256tQtzBvC = await Voting3bNgoI.snapshot.call({from: accounts[0]});
		const booldgWdiri = await Voting3bNgoI.isMinter.call(addressrTtH7qm, {from: accounts[2]});
		const 
Mj2ptL2 = await Voting3bNgoI.createProposal.call(addressSrUfVUV, byteBZogIEG, stringQr4Nutb, stringd57sN2r, stringtXcvPhx, {from: accounts[3]});
	});

	it('test for Voting', async () => {
		const addressgvRj2kR = accounts[5]
		const VotingUFkAZLL = await Voting.new(addressgvRj2kR, {from: "0x0000000000000000000000000000000000000001"});
		const addressToX2DHt = accounts[3]
		const uintRQWDDlV = BigInt("1334")
		const addresskut5GI4 = accounts[3]
		const addressQacuplQ = accounts[0]
		const uintMaj73x = BigInt("229")
		const addressB3uVEaw = await VotingUFkAZLL.addMinter.call(addressToX2DHt, {from: accounts[1]});
		const booliqvykxe = await VotingUFkAZLL.transferFrom.call(addressQacuplQ, addresskut5GI4, uintRQWDDlV, {from: accounts[4]});
		const uint256dh4VBZJ = await VotingUFkAZLL.pause.call(uintMaj73x, {from: accounts[3]});
	});

	it('test for Voting', async () => {
		const VotingrCOrDHe = await Voting.new({from: accounts[1]});
		const uintXLIvYTu = BigInt("1564")
		const addressG1UO1db = accounts[1]
		const uintWtfeRgj = BigInt("1820")
		const addressQbANJoF = "0x0000000000000000000000000000000000000001"
		const addressyeWAvXZ = accounts[1]
		await VotingrCOrDHe.onlyOracle.call({from: accounts[0]});
		const boolk6SlBC = await VotingrCOrDHe.decreaseAllowance.call(addressG1UO1db, uintXLIvYTu, {from: accounts[0]});
		const addressrVnQrAP = await VotingrCOrDHe.burnFrom.call(addressQbANJoF, uintWtfeRgj, {from: accounts[2]});
		await VotingrCOrDHe.onlyOwner.call({from: accounts[1]});
		const boolaq3qBm = await VotingrCOrDHe.isExchangeFactory.call(addressyeWAvXZ, {from: accounts[1]});
	});

	it('test for Voting', async () => {
		const addressAm4VHVN = accounts[4]
		const VotingmONEuiB = await Voting.new(addressAm4VHVN, {from: accounts[1]});
		const uintN8RbGHR = BigInt("1397")
		const stringooLJDfK = "X5hRTeAysHNJmnvr3ODM2LnjVutciqAMsxgwF6tgOe3mFJAz946KMKDmUOzan8Xs03W3vSrVA4UYLSy8S3si3SeD6V7Muczc"
		const stringjR2Wnh = "sXOFkOJra51PbR9UzJPrijEkc3DOK3lu47RXYNvnhk4P4fKerB4cQzKmu3MRVJe1RuPWh8XLGuIazfEXjwoL12Sat2W2aowMWM"
		const stringnq9Tw16 = "ooOL9kznYsgCXhhPluhsphDYQrpSxp2cvCLyDDK5Xeahv8xbR1BJbHGD0oqSghDuFrA2AcNqCcS8dkCzL57gM4daEkqSSx"
		const byteLmKmgjU = "0x1e011a0314181a0401140b1e180914071517"
		const addressoyJkiql = accounts[3]
		const booldNNyGJ5 = true
		const uintnRZ02I4 = BigInt("347")
		const uint256q119OgN = await VotingmONEuiB.pause.call(uintN8RbGHR, {from: accounts[1]});
		const 
w7Ewzan = await VotingmONEuiB.createProposal.call(addressoyJkiql, byteLmKmgjU, stringnq9Tw16, stringjR2Wnh, stringooLJDfK, {from: accounts[2]});
		const uint256uITOrJj = await VotingmONEuiB.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256jEwBlH5 = await VotingmONEuiB.vote.call(uintnRZ02I4, booldNNyGJ5, {from: accounts[4]});
	});

	it('test for Voting', async () => {
		const addressZc4bt4I = accounts[4]
		const VotingmONEuiB = await Voting.new(addressZc4bt4I, {from: accounts[1]});
		const address9OgG4V = accounts[2]
		const addressqFTgAES = accounts[2]
		const stringooLJDfK = "X5hRTeAysHNJmnvr3ODM2LnjVutciqAMsxgwF6tgOe3mFJAz946KMKDmUOzan8Xs03W3vSrVA4UYLSy8S3si3SeD6V7Muczc"
		const stringjR2Wnh = "sXOFkOJra51PbR9UzJPrijEkc3DOFK3lu47RXYNvnhk4P4fKerB4cQzKmuMRVJe1RuPWh8XLGuIazfEXjwoL12Sat2W2aowMWM"
		const stringnq9Tw16 = "ooOL9kznYsgCXhhPluhsphDYQrpSxp2cvCLyDDK5Xeahv8xbR1BJbHGD0oqSghDuFrA2AcNqCcS8dkCzL57gM4daEkqSSx"
		const byteHldrBE = "0x1e011a0114181a0401140b1e180914071517"
		const addressDfSGqKu = accounts[3]
		const boolFkdiULY = await VotingmONEuiB.isValidStamperAddress.call(address9OgG4V, {from: "0x0000000000000000000000000000000000000001"});
		const booliVJCXHN = await VotingmONEuiB.isValidVerifierAddress.call(addressqFTgAES, {from: accounts[5]});
		const 
w7Ewzan = await VotingmONEuiB.createProposal.call(addressDfSGqKu, byteHldrBE, stringnq9Tw16, stringjR2Wnh, stringooLJDfK, {from: accounts[2]});
	});

	it('test for Voting', async () => {
		const VotingA8n1pr3 = await Voting.new({from: accounts[5]});
		const addressO4BuYxi = accounts[3]
		const addressZcaDqa = accounts[1]
		const uintyRGBLd = BigInt("1337")
		const addressutuwvpg = accounts[1]
		const uint256Z8sNlkJ = await VotingA8n1pr3.balanceOf.call(addressO4BuYxi, {from: accounts[3]});
		const booledQ6Bpi = await VotingA8n1pr3.isValidVerifierAddress.call(addressZcaDqa, {from: accounts[3]});
		const uint256LBKslq = await VotingA8n1pr3.pause.call(uintyRGBLd, {from: accounts[0]});
		const addresskTtIh0f = await VotingA8n1pr3.transferOwnership.call(addressutuwvpg, {from: accounts[3]});
	});

	it('test for Voting', async () => {
		const addressOJrU5OM = "0x0000000000000000000000000000000000000001"
		const VotingXkmJzrJ = await Voting.new(addressOJrU5OM, {from: accounts[4]});
		const uintIzwLR5r = BigInt("499")
		const uinta2ay8Ya = BigInt("73")
		const uint256FXC0QNv = await VotingXkmJzrJ.approve.call(uintIzwLR5r, {from: accounts[4]});
		const boolBmzsb50 = await VotingXkmJzrJ.isOwner.call({from: accounts[3]});
		const stringyu03Do = await VotingXkmJzrJ.symbol.call({from: accounts[3]});
		const uint256duPFeuz = await VotingXkmJzrJ.resolve.call(uinta2ay8Ya, {from: accounts[1]});
	});

	it('test for Voting', async () => {
		const addressJTnlFei = "0x0000000000000000000000000000000000000001"
		const VotingXkmJzrJ = await Voting.new(addressJTnlFei, {from: accounts[4]});
		const addressdEex6AE = accounts[3]
		const uintKWkgwtx = BigInt("878")
		const addressSlT4Vrk = accounts[3]
		const uintZQc9Pa = BigInt("34")
		const boolrMbE3ih = await VotingXkmJzrJ.isValidVerifierAddress.call(addressdEex6AE, {from: accounts[0]});
		const booldXOSVxJ = await VotingXkmJzrJ.approve.call(addressSlT4Vrk, uintKWkgwtx, {from: accounts[5]});
		const uint256duPFeuz = await VotingXkmJzrJ.resolve.call(uintZQc9Pa, {from: accounts[1]});
	});

	it('test for Voting', async () => {
		const addressGxzuE47 = accounts[4]
		const VotingmONEuiB = await Voting.new(addressGxzuE47, {from: accounts[1]});
		const boollvPPFTO = true
		const uintwtzn31T = BigInt("1508")
		const addressJeyEOQ = accounts[3]
		const stringooLJDfK = "X5hRTeAysHNJmnvr3ODM2LnjVutciqAMsxgwF6tgOe3mFJAz946KMKDmUOzan8Xs03W3vSrVA4UYLSy8S3si3SeD6V7Muczc"
		const stringjR2Wnh = "sXOFkOJra51PbR9UzJPrijEkc3DOFK3lu47RXYNvnhk4P4fKerB4cQzKmu3MRVJe1RuPWh8XLGuIazfEXjwoL12Sat2W2aowMWM"
		const stringnq9Tw16 = "ooOL9kznYsgCXhhPluhsphDYQrpSxp2cvCLyDDK5Xeahv8xbR1BJbHGD0oqSghDuFrA2AcNqCcS8dkCzL57gM4daDkqSSx"
		const byteXuZCCgO = "0x1e011a0314181a0401140b1e180914071517"
		const addressvDUka9 = "0x0000000000000000000000000000000000000001"
		const uint256sJq0EKL = await VotingmONEuiB.vote.call(uintwtzn31T, boollvPPFTO, {from: accounts[3]});
		const boolUFwVeVr = await VotingmONEuiB.isValidStamperAddress.call(addressJeyEOQ, {from: accounts[4]});
		const 
w7Ewzan = await VotingmONEuiB.createProposal.call(addressvDUka9, byteXuZCCgO, stringnq9Tw16, stringjR2Wnh, stringooLJDfK, {from: accounts[2]});
		await VotingmONEuiB.onlyExchange.call({from: accounts[2]});
	});

	it('test for Voting', async () => {
		const addressfjgqDZF = accounts[4]
		const VotingmONEuiB = await Voting.new(addressfjgqDZF, {from: accounts[1]});
		const uintXFl4Psm = BigInt("401")
		const stringooLJDfK = "X5hRTeAysHNJmnvr3ODM2LnKVutciqAMsxgwF6tgOe3mFJAz946KMKDmUOzan8Xs03W3vSrVA4UYLSy8S3si3SeD6V7Muczc"
		const stringjR2Wnh = "sXOFkOJra51PbR9UzJPrijEkc3DOFK3lu47RXYNvnhk4P4fKerB4cQzKmu3MRVJe1RuPWh8XLGuIazfEXjwoL12Sat2W2aowMWM"
		const stringnq9Tw16 = "ooOL9kznYsgCXhhPluhsphDYQrpSxp2cvCLyDDK5Xeahv8xbR1BJbHGD0oqSghDuFrA2AcNqCcS8dkCzL57gM4daDkqSSx"
		const byteQFimei0 = "0x1e011a0314181a0401140b1e180914071517"
		const addressxsGGGpz = "0x0000000000000000000000000000000000000001"
		const addressMid65Fb = await VotingmONEuiB.owner.call({from: accounts[4]});
		const uint256C6sTou = await VotingmONEuiB.totalSupplyAt.call(uintXFl4Psm, {from: accounts[3]});
		const 
w7Ewzan = await VotingmONEuiB.createProposal.call(addressxsGGGpz, byteQFimei0, stringnq9Tw16, stringjR2Wnh, stringooLJDfK, {from: accounts[2]});
	});

	it('test for Voting', async () => {
		const addressJOJw1q6 = accounts[4]
		const VotingmONEuiB = await Voting.new(addressJOJw1q6, {from: accounts[1]});
		const addressFiE1Vpl = accounts[0]
		const stringooLJDfK = "X5hRTeAysHNJmnvr3ODM2LnjVutciqAMsxgwF6tgOe3mFJAz946KMKDmUOzan8Xs03W3vSrVA4UYLSy8S3si3SeD6V7Muczc"
		const stringjR2Wnh = "sXOFkOJra51PbR9UzJPrijEkc3DOFK3lu47RXYNvnhk4P4fKerB4cQzKmu3MRVJe1RuPWh8XLGuIazfEXjwoL12Sat2W2aowMWM"
		const stringnq9Tw16 = "ooOL9kznYsgCXhhPluhsphDYQrpSxp2cvCLyDDK5Xeahv8xbR1BJbHGD0oqSghDuFrA2AcNqCcS8dkCzL57gM4daEkqSSx"
		const byteCd3BxqM = "0x1e011a0314181a0401140b1e180914071517"
		const address2BefZh = accounts[3]
		const boolEMZj8Zr = await VotingmONEuiB.isExchangeFactory.call(addressFiE1Vpl, {from: "0x0000000000000000000000000000000000000001"});
		const 
w7Ewzan = await VotingmONEuiB.createProposal.call(address2BefZh, byteCd3BxqM, stringnq9Tw16, stringjR2Wnh, stringooLJDfK, {from: accounts[2]});
	});
})