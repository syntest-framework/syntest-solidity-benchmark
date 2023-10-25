const Voting = artifacts.require("Voting");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Voting', (accounts) => {
	it('test for Voting', async () => {
		const VotingwAPhZLt = await Voting.new({from: "0x0000000000000000000000000000000000000001"});
		const uintl1Hi3Wr = BigInt("654")
		await VotingwAPhZLt.onlyVotingSystem.call({from: accounts[0]});
		const stringm2MGXr6 = await VotingwAPhZLt.symbol.call({from: accounts[4]});
		const uint256C9hlM1W = await VotingwAPhZLt.resolve.call(uintl1Hi3Wr, {from: accounts[0]});
	});

	it('test for Voting', async () => {
		const addresspfszhdC = accounts[2]
		const VotingJvAKafi = await Voting.new(addresspfszhdC, {from: "0x0000000000000000000000000000000000000001"});
		const addressabq2Rm = accounts[2]
		const booluZJr5QW = true
		const uintlM1LkF = BigInt("507")
		const addressWr7UD66 = accounts[1]
		const stringaRkuRAN = "9i20xqCDDHjfXRGCXuMKVUkUvvbgdOsapRow5ZfIsaBWSQaJvNf0bLFhrsaFQXDaDOd"
		const stringGq6tco7 = "vWtepThBU80AE0BKEHeizXVyqcZ5IK5HtVHLAUAmWI0fn6sVx83cl6dj"
		const stringJvzIVGS = "L3lRxr1xdoYoGUHTXelLcYs44Whq18WKlx14tw5r4F"
		const byteZeUnzox = "0x0e14031b19041c06080508190a1a0a0e190107120b"
		const addressUaHxJX3 = "0x0000000000000000000000000000000000000001"
		await VotingJvAKafi.onRegistryRefresh.call({from: accounts[3]});
		const boolWVJONGh = await VotingJvAKafi.isVotingSystem.call(addressabq2Rm, {from: accounts[0]});
		const uint256S2O2ON1 = await VotingJvAKafi.vote.call(uintlM1LkF, booluZJr5QW, {from: accounts[4]});
		const boolOviCOaq = await VotingJvAKafi.isValidOracleAddress.call(addressWr7UD66, {from: accounts[1]});
		const 
caN7L43 = await VotingJvAKafi.createProposal.call(addressUaHxJX3, byteZeUnzox, stringJvzIVGS, stringGq6tco7, stringaRkuRAN, {from: accounts[4]});
		await VotingJvAKafi.onlyMessageProcessor.call({from: accounts[3]});
	});

	it('test for Voting', async () => {
		const addressrnCYg3d = accounts[4]
		const Votingc0EFHmf = await Voting.new(addressrnCYg3d, {from: accounts[2]});
		const addressoVHv68n = "0x0000000000000000000000000000000000000001"
		const uintmGIreLy = BigInt("1489")
		const addressQWJ81c1 = accounts[3]
		const bools8ZOalF = await Votingc0EFHmf.didAddressVote.call(uintmGIreLy, addressoVHv68n, {from: accounts[2]});
		await Votingc0EFHmf.onlyMessageProcessor.call({from: accounts[0]});
		const uint8AccTErx = await Votingc0EFHmf.decimals.call({from: accounts[0]});
		const boolZVi9WFb = await Votingc0EFHmf.isValidVerifierAddress.call(addressQWJ81c1, {from: accounts[5]});
	});

	it('test for Voting', async () => {
		const VotingMNBxyUF = await Voting.new({from: accounts[0]});
		const addressJs9EiSr = accounts[3]
		const addresspqOxdh6 = accounts[2]
		const addressO4A4nV9 = "0x0000000000000000000000000000000000000001"
		const uintuRJRWZN = BigInt("764")
		const uintL58KABt = BigInt("239")
		const addressWE503QA = accounts[2]
		const uint256HdrTLA = await VotingMNBxyUF.allowance.call(addresspqOxdh6, addressJs9EiSr, {from: "0x0000000000000000000000000000000000000001"});
		const booldlJaGny = await VotingMNBxyUF.isExchangeFactory.call(addressO4A4nV9, {from: accounts[4]});
		const uint256k99QcAJ = await VotingMNBxyUF.approve.call(uintuRJRWZN, {from: accounts[3]});
		const stringGxIRsgS = await VotingMNBxyUF.symbol.call({from: accounts[0]});
		const booltTdO8pz = await VotingMNBxyUF.increaseAllowance.call(addressWE503QA, uintL58KABt, {from: accounts[1]});
	});

	it('test for Voting', async () => {
		const addressIL98NwX = accounts[0]
		const Votingshg3icB = await Voting.new(addressIL98NwX, {from: accounts[5]});
		const boolVHQ4x0x = true
		const uinta0RGnVu = BigInt("270")
		const addressBFIlua8 = accounts[2]
		const uinth5tgcx5 = BigInt("809")
		const addressCMvKyZZ = accounts[4]
		const uint256IjGWU19 = await Votingshg3icB.vote.call(uinta0RGnVu, boolVHQ4x0x, {from: accounts[1]});
		const addressEydBjnw = await Votingshg3icB.updateRegistry.call(addressBFIlua8, {from: accounts[2]});
		await Votingshg3icB.onlyMinter.call({from: accounts[3]});
		const uint256qgeDTV = await Votingshg3icB.pause.call(uinth5tgcx5, {from: accounts[1]});
		const addressGkbelCs = await Votingshg3icB.updateRegistry.call(addressCMvKyZZ, {from: accounts[3]});
	});

	it('test for Voting', async () => {
		const addresssbCrotE = accounts[0]
		const Votingshg3icB = await Voting.new(addresssbCrotE, {from: accounts[5]});
		const addressw2NFTE3 = accounts[0]
		const uinthJq99km = BigInt("1790")
		const addressiPV0cS = accounts[5]
		const boolVHQ4x0x = true
		const uintj4lbspA = BigInt("270")
		const addressOL30WW6 = accounts[2]
		const addressn2XdPNg = accounts[1]
		const addressYu9qVON = accounts[1]
		const uintOX72rPP = BigInt("809")
		const addressobTsx32 = accounts[4]
		const addressmuRR2pJ = await Votingshg3icB.ownableUpgrade.call(addressw2NFTE3, {from: accounts[1]});
		await Votingshg3icB.requiresWalletAcccess.call({from: accounts[1]});
		const uint256mT0IhMJ = await Votingshg3icB.balanceOfAt.call(addressiPV0cS, uinthJq99km, {from: accounts[2]});
		const uint256IjGWU19 = await Votingshg3icB.vote.call(uintj4lbspA, boolVHQ4x0x, {from: accounts[1]});
		const addressEydBjnw = await Votingshg3icB.updateRegistry.call(addressOL30WW6, {from: accounts[2]});
		await Votingshg3icB.onlyMinter.call({from: accounts[3]});
		const uint256CPLsXQx = await Votingshg3icB.allowance.call(addressYu9qVON, addressn2XdPNg, {from: accounts[3]});
		const uint256qgeDTV = await Votingshg3icB.pause.call(uintOX72rPP, {from: accounts[1]});
		const addressGkbelCs = await Votingshg3icB.updateRegistry.call(addressobTsx32, {from: accounts[3]});
	});

	it('test for Voting', async () => {
		const addressGNPXuFc = accounts[0]
		const VotingcQMEPI = await Voting.new(addressGNPXuFc, {from: accounts[3]});
		const addressJv62Gh = accounts[4]
		const uintnxYuuB = BigInt("1114")
		const boolKmxn84f = await VotingcQMEPI.isExchangeFactory.call(addressJv62Gh, {from: accounts[3]});
		await VotingcQMEPI.requiresLiquidityTokenSnapshotAccess.call({from: accounts[0]});
		await VotingcQMEPI.onlyMessageProcessor.call({from: accounts[1]});
		await VotingcQMEPI.onlyOwner.call({from: accounts[1]});
		const uint256DJRkuv = await VotingcQMEPI.burn.call(uintnxYuuB, {from: accounts[1]});
	});

	it('test for Voting', async () => {
		const VotingZBkqRHd = await Voting.new({from: accounts[2]});
		const addressmAHDmdi = accounts[0]
		const uintUck8HR = BigInt("1986")
		const addressTobpgXI = accounts[3]
		const addressb5CNBgg = accounts[3]
		const addressm9t2gPQ = accounts[2]
		const boolVCVD9AR = await VotingZBkqRHd.isVotingSystem.call(addressmAHDmdi, {from: accounts[3]});
		const boolSgq4tRE = await VotingZBkqRHd.transfer.call(addressTobpgXI, uintUck8HR, {from: "0x0000000000000000000000000000000000000001"});
		const boolrxlRzKu = await VotingZBkqRHd.isMinter.call(addressb5CNBgg, {from: accounts[1]});
		const addresskiymuZ9 = await VotingZBkqRHd.addMinter.call(addressm9t2gPQ, {from: accounts[5]});
	});

	it('test for Voting', async () => {
		const VotingOTPQcF = await Voting.new({from: accounts[4]});
		const uintHSMDlG = BigInt("171")
		const addressDE1ug2b = accounts[4]
		const uintrwdkmCN = BigInt("65")
		const addresseeSwgE = accounts[0]
		const addressQATtYqH = accounts[3]
		const addressO7fFrXj = "0x0000000000000000000000000000000000000001"
		const uint256y7wShe8 = await VotingOTPQcF.burn.call(uintHSMDlG, {from: accounts[2]});
		const boolPCJ5dv = await VotingOTPQcF.isValidVerifierAddress.call(addressDE1ug2b, {from: accounts[3]});
		const booliPhPlZ = await VotingOTPQcF.increaseAllowance.call(addresseeSwgE, uintrwdkmCN, {from: accounts[1]});
		await VotingOTPQcF.onlyMessageProcessor.call({from: accounts[4]});
		const addresspwD0m2U = await VotingOTPQcF.updateRegistry.call(addressQATtYqH, {from: "0x0000000000000000000000000000000000000001"});
		const booldVigXrQ = await VotingOTPQcF.isMinter.call(addressO7fFrXj, {from: accounts[0]});
	});

	it('test for Voting', async () => {
		const addressaIK4zPl = accounts[0]
		const Votingn2OQuPH = await Voting.new(addressaIK4zPl, {from: accounts[1]});
		const addressfMydpmV = accounts[1]
		const uintUn2FYrG = BigInt("1729")
		const addressWJw88MM = accounts[4]
		const uintwOzsKAm = BigInt("901")
		const uintUGOxu3f = BigInt("164")
		const addressiA8wa2 = "0x0000000000000000000000000000000000000001"
		const boolF1Sc20 = await Votingn2OQuPH.isValidVerifierAddress.call(addressfMydpmV, {from: accounts[3]});
		const uint256myYFKRM = await Votingn2OQuPH.veto.call(uintUn2FYrG, {from: accounts[3]});
		const boolgxoFNnK = await Votingn2OQuPH.didAddressVote.call(uintwOzsKAm, addressWJw88MM, {from: accounts[5]});
		const addressIgKYRp = await Votingn2OQuPH.getRegistryAddress.call({from: accounts[4]});
		const uint256QjXqazO = await Votingn2OQuPH.veto.call(uintUGOxu3f, {from: accounts[2]});
		const boolf12vO8v = await Votingn2OQuPH.isMinter.call(addressiA8wa2, {from: accounts[3]});
	});
})