const Voting = artifacts.require("Voting");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Voting', (accounts) => {
	it('test for Voting', async () => {
		const addressQ23bV3X = accounts[0]
		const VotingzPrSdPO = await Voting.new(addressQ23bV3X, {from: accounts[1]});
		const uintiORY4Bz = BigInt("1473")
		const addresswsHnjef = accounts[1]
		const addressitoGSIq = accounts[0]
		const uint256rTPUBO = await VotingzPrSdPO.balanceOfAt.call(addresswsHnjef, uintiORY4Bz, {from: accounts[3]});
		const addresssApyaA6 = await VotingzPrSdPO.transferOwnership.call(addressitoGSIq, {from: accounts[2]});
		const boolw2d0Cc = await VotingzPrSdPO.isOwner.call({from: accounts[4]});
		await VotingzPrSdPO.onlyMessageProcessor.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256rJh2lQM = await VotingzPrSdPO.snapshot.call({from: accounts[3]});
	});

	it('test for Voting', async () => {
		const addressLeUItDe = "0x0000000000000000000000000000000000000001"
		const VotingeDieUCA = await Voting.new(addressLeUItDe, {from: accounts[3]});
		const addressjnd6TxG = accounts[2]
		const addressH6uz116 = accounts[2]
		const addressHw2BALf = "0x0000000000000000000000000000000000000001"
		const addresskKgX2nU = accounts[5]
		const boolK7SFXKj = await VotingeDieUCA.isValidStamperAddress.call(addressjnd6TxG, {from: accounts[1]});
		const boolTU5RvPy = await VotingeDieUCA.isExchangeFactory.call(addressH6uz116, {from: accounts[3]});
		await VotingeDieUCA.renounceMinter.call({from: accounts[1]});
		const boolEZ6TY9G = await VotingeDieUCA.isValidOracleAddress.call(addressHw2BALf, {from: accounts[4]});
		const boolQAkd8wB = await VotingeDieUCA.isMinter.call(addresskKgX2nU, {from: accounts[1]});
	});

	it('test for Voting', async () => {
		const VotingGSuGwRp = await Voting.new({from: accounts[1]});
		const uintgQyLLGu = BigInt("120")
		const addressP959N8n = accounts[4]
		const boolX9AeoOg = true
		const uintumeNT9F = BigInt("1199")
		const uintybHGQfV = BigInt("480")
		const addressLRocFs3 = accounts[1]
		await VotingGSuGwRp.onlyRegistry.call({from: accounts[2]});
		const addressE8hbUgL = await VotingGSuGwRp.burnFrom.call(addressP959N8n, uintgQyLLGu, {from: accounts[5]});
		const boolZ7Vu3DY = await VotingGSuGwRp.isOwner.call({from: accounts[3]});
		const uint256D6883Tg = await VotingGSuGwRp.vote.call(uintumeNT9F, boolX9AeoOg, {from: accounts[3]});
		const boolLRWNBXN = await VotingGSuGwRp.increaseAllowance.call(addressLRocFs3, uintybHGQfV, {from: accounts[0]});
	});

	it('test for Voting', async () => {
		const addressiglJ8zy = accounts[1]
		const VotingqF9wllh = await Voting.new(addressiglJ8zy, {from: accounts[3]});
		const addresshB9OKK9 = accounts[3]
		const uintXYUwpTr = BigInt("1392")
		const uintPHnuq36 = BigInt("663")
		const boolPS7u7F = await VotingqF9wllh.isExchangeFactory.call(addresshB9OKK9, {from: "0x0000000000000000000000000000000000000001"});
		await VotingqF9wllh.onlyVotingSystem.call({from: accounts[0]});
		const uint256Z1rjvxJ = await VotingqF9wllh.approve.call(uintXYUwpTr, {from: accounts[4]});
		const uint256n1LzC7t = await VotingqF9wllh.pause.call(uintPHnuq36, {from: accounts[0]});
		await VotingqF9wllh.onlyExchange.call({from: accounts[1]});
	});

	it('test for Voting', async () => {
		const addressYZNcHS0 = "0x0000000000000000000000000000000000000001"
		const VotingpLGt7fc = await Voting.new(addressYZNcHS0, {from: "0x0000000000000000000000000000000000000001"});
		const addressoFuzx6a = accounts[4]
		const addressHPaUvdw = accounts[1]
		const uintuUlfFD = BigInt("1115")
		const addressU7mQZWu = accounts[2]
		const uintFYb9fCn = BigInt("840")
		const addressVuEq1Du = accounts[4]
		const addressPgtV28A = await VotingpLGt7fc.updateRegistry.call(addressoFuzx6a, {from: accounts[3]});
		const booldih4ohb = await VotingpLGt7fc.isValidVerifierAddress.call(addressHPaUvdw, {from: accounts[1]});
		const booloQVBY2C = await VotingpLGt7fc.decreaseAllowance.call(addressU7mQZWu, uintuUlfFD, {from: accounts[5]});
		const stringRTUZSHb = await VotingpLGt7fc.name.call({from: accounts[5]});
		const boolQwaln9Q = await VotingpLGt7fc.transfer.call(addressVuEq1Du, uintFYb9fCn, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for Voting', async () => {
		const addressa7bgw4e = "0x0000000000000000000000000000000000000001"
		const VotingnIEwLd = await Voting.new(addressa7bgw4e, {from: accounts[0]});
		const uinttIO1FKH = BigInt("345")
		const addressSbRDpZ6 = accounts[2]
		const uintkaj08zK = BigInt("1334")
		const addressEVCA1Ms = accounts[1]
		const boolzs7U73 = await VotingnIEwLd.approve.call(addressSbRDpZ6, uinttIO1FKH, {from: accounts[5]});
		await VotingnIEwLd.onlyMessageProcessor.call({from: accounts[0]});
		const bool2Cx5gE = await VotingnIEwLd.decreaseAllowance.call(addressEVCA1Ms, uintkaj08zK, {from: "0x0000000000000000000000000000000000000001"});
		await VotingnIEwLd.requiresWalletAcccess.call({from: accounts[5]});
	});

	it('test for Voting', async () => {
		const addressBmkpvAI = accounts[4]
		const VotingcntNSa3 = await Voting.new(addressBmkpvAI, {from: accounts[1]});
		const boolhVgrwi2 = false
		const uint22Hkgp = BigInt("923")
		const uintZDt0XXs = BigInt("2031")
		const addresso5Aw6I = accounts[0]
		const addressU4ZIZy = accounts[0]
		const uintCUNrnqH = BigInt("1446")
		const uint256fI7l4OV = await VotingcntNSa3.vote.call(uint22Hkgp, boolhVgrwi2, {from: accounts[4]});
		const addressHka3Rbe = await VotingcntNSa3.burnFrom.call(addresso5Aw6I, uintZDt0XXs, {from: accounts[1]});
		await VotingcntNSa3.onlyVotingSystem.call({from: accounts[0]});
		const boolLbDDZyp = await VotingcntNSa3.isValidOracleAddress.call(addressU4ZIZy, {from: accounts[3]});
		const uint256EE5ilq = await VotingcntNSa3.pause.call(uintCUNrnqH, {from: accounts[2]});
	});

	it('test for Voting', async () => {
		const VotingBNV1pXJ = await Voting.new({from: "0x0000000000000000000000000000000000000001"});
		const uints4dN5XX = BigInt("575")
		const addressBCrTSzF = accounts[0]
		const addressohyzYze = accounts[2]
		const addresspPH1Kbb = accounts[2]
		const uintvxd1DoJ = BigInt("556")
		await VotingBNV1pXJ.requiresLiquidityTokenSnapshotAccess.call({from: accounts[5]});
		const boolRW8E7vf = await VotingBNV1pXJ.transferFrom.call(addressohyzYze, addressBCrTSzF, uints4dN5XX, {from: accounts[0]});
		const boolY98zzGm = await VotingBNV1pXJ.isMinter.call(addresspPH1Kbb, {from: accounts[3]});
		const uint256u0uR3xo = await VotingBNV1pXJ.pause.call(uintvxd1DoJ, {from: accounts[4]});
	});

	it('test for Voting', async () => {
		const addressngEWP7 = accounts[1]
		const VotingkYcM9oE = await Voting.new(addressngEWP7, {from: accounts[4]});
		const uintGj3CVlf = BigInt("669")
		const addressaOIQwGZ = accounts[3]
		const uintFAKh8jt = BigInt("889")
		const uint256JJ2IM0 = await VotingkYcM9oE.approve.call(uintGj3CVlf, {from: accounts[0]});
		const addressmgGAi1L = await VotingkYcM9oE.addMinter.call(addressaOIQwGZ, {from: accounts[4]});
		const uint256jS3NCC = await VotingkYcM9oE.totalSupplyAt.call(uintFAKh8jt, {from: accounts[1]});
	});

	it('test for Voting', async () => {
		const VotingHAPXlpK = await Voting.new({from: accounts[0]});
		const addressHOvCAuA = "0x0000000000000000000000000000000000000001"
		const uintwSlmm58 = BigInt("1729")
		const addressQYDUKXx = await VotingHAPXlpK.addMinter.call(addressHOvCAuA, {from: accounts[4]});
		const uint256SXpHODn = await VotingHAPXlpK.resolve.call(uintwSlmm58, {from: accounts[1]});
		await VotingHAPXlpK.onlyOracle.call({from: accounts[3]});
	});

	it('test for Voting', async () => {
		const addressVp1x58E = accounts[4]
		const VotingcntNSa3 = await Voting.new(addressVp1x58E, {from: accounts[1]});
		const uintj7HqTT5 = BigInt("471")
		const boolhVgrwi2 = false
		const uintxRTAtBh = BigInt("923")
		const uintim5EF1n = BigInt("2031")
		const addressvAZmPG2 = accounts[1]
		const uintdd81HyQ = BigInt("1446")
		const uint256YKPH81a = await VotingcntNSa3.pause.call(uintj7HqTT5, {from: accounts[0]});
		const uint256fI7l4OV = await VotingcntNSa3.vote.call(uintxRTAtBh, boolhVgrwi2, {from: accounts[4]});
		const addressHka3Rbe = await VotingcntNSa3.burnFrom.call(addressvAZmPG2, uintim5EF1n, {from: accounts[1]});
		await VotingcntNSa3.onlyVotingSystem.call({from: accounts[0]});
		const uint256EE5ilq = await VotingcntNSa3.pause.call(uintdd81HyQ, {from: accounts[2]});
	});

	it('test for Voting', async () => {
		const addressqvWIaJU = accounts[1]
		const VotingkYcM9oE = await Voting.new(addressqvWIaJU, {from: accounts[4]});
		const addressa1SQVoQ = accounts[5]
		const boolK5rwsE = await VotingkYcM9oE.isVotingSystem.call(addressa1SQVoQ, {from: accounts[3]});
		const boolDx1V33f = await VotingkYcM9oE.isOwner.call({from: accounts[0]});
	});

	it('test for Voting', async () => {
		const addressUvDDb8l = accounts[4]
		const VotingcntNSa3 = await Voting.new(addressUvDDb8l, {from: accounts[1]});
		const addressF6VXT02 = accounts[0]
		const uinth4dpw40 = BigInt("1800")
		const uintI8T6Qyz = BigInt("1408")
		const boolaHbRFZ5 = await VotingcntNSa3.didAddressVote.call(uinth4dpw40, addressF6VXT02, {from: "0x0000000000000000000000000000000000000001"});
		const uint256EE5ilq = await VotingcntNSa3.pause.call(uintI8T6Qyz, {from: accounts[2]});
	});

	it('test for Voting', async () => {
		const addressJlF4jjr = accounts[4]
		const Votingru7gCCL = await Voting.new(addressJlF4jjr, {from: accounts[2]});
		const addressnJFKy0H = accounts[4]
		const addressMKCRP5z = await Votingru7gCCL.owner.call({from: accounts[5]});
		const booltKNMgn7 = await Votingru7gCCL.isValidOracleAddress.call(addressnJFKy0H, {from: accounts[0]});
		await Votingru7gCCL.onlyOracle.call({from: accounts[5]});
		await Votingru7gCCL.onlyOracle.call({from: accounts[3]});
		await Votingru7gCCL.onlyRegistry.call({from: accounts[5]});
	});

	it('test for Voting', async () => {
		const VotingYilrsUA = await Voting.new({from: accounts[3]});
		const uintXAQS1Qd = BigInt("976")
		const addressFqDVJ05 = accounts[3]
		const uintlkk7kyZ = BigInt("1489")
		const addresszhHLHlv = accounts[1]
		const uint8uaXOC3q = await VotingYilrsUA.decimals.call({from: accounts[1]});
		const boolXXm7QTV = await VotingYilrsUA.transfer.call(addressFqDVJ05, uintXAQS1Qd, {from: accounts[2]});
		const addressyR94Rgb = await VotingYilrsUA.burnFrom.call(addresszhHLHlv, uintlkk7kyZ, {from: accounts[1]});
		await VotingYilrsUA.requiresWalletAcccess.call({from: accounts[3]});
		await VotingYilrsUA.onlyVotingSystem.call({from: accounts[0]});
	});

	it('test for Voting', async () => {
		const addressFIj0itX = accounts[4]
		const VotingcntNSa3 = await Voting.new(addressFIj0itX, {from: accounts[1]});
		const stringA81M8U7 = "ACgr2j3cWlEQSfFCRGvphRYc4RJ9qZ6QfOelDvsOVwGx7BqaNOu8TQ5PL8Su7hq8qQ8iLW1VSxdSEwdqwnzA1SiHgNhu2ph"
		const stringQVDCLaI = "nyMS0uUOjvdsaWZF3NGFIncI2Z18xVMmQrX1vpBqdufuVYV6midt"
		const stringkSlC9xp = "AmJlrHK94MI"
		const bytedtfOzLH = "0x0e04110f070f1a151f20090000000407090f101f"
		const addresshS9YMd = accounts[0]
		const uintFARvTll = BigInt("1446")
		const 
B6wcpTa = await VotingcntNSa3.createProposal.call(addresshS9YMd, bytedtfOzLH, stringkSlC9xp, stringQVDCLaI, stringA81M8U7, {from: accounts[0]});
		const uint256EE5ilq = await VotingcntNSa3.pause.call(uintFARvTll, {from: accounts[2]});
		await VotingcntNSa3.renounceOwnership.call({from: accounts[5]});
	});

	it('test for Voting', async () => {
		const addressYdvIIvE = accounts[1]
		const VotingkYcM9oE = await Voting.new(addressYdvIIvE, {from: accounts[4]});
		const uintd4JQNDJ = BigInt("1086")
		const uint256CaxGkGP = await VotingkYcM9oE.resolve.call(uintd4JQNDJ, {from: accounts[3]});
		await VotingkYcM9oE.renounceMinter.call({from: accounts[0]});
		const boolDx1V33f = await VotingkYcM9oE.isOwner.call({from: accounts[0]});
	});

	it('test for Voting', async () => {
		const addressAHre3Iv = accounts[4]
		const VotingcntNSa3 = await Voting.new(addressAHre3Iv, {from: accounts[1]});
		const uintN1macAT = BigInt("1009")
		const addressn8Vgbk = accounts[4]
		const uintITa47xe = BigInt("1463")
		const uint256QCKK1pk = await VotingcntNSa3.approve.call(uintN1macAT, {from: accounts[1]});
		const uint8rpecWB = await VotingcntNSa3.decimals.call({from: accounts[1]});
		const boolBIoflRb = await VotingcntNSa3.isVotingSystem.call(addressn8Vgbk, {from: accounts[0]});
		const uint256EE5ilq = await VotingcntNSa3.pause.call(uintITa47xe, {from: accounts[2]});
	});

	it('test for Voting', async () => {
		const VotingqgfTwtt = await Voting.new({from: accounts[4]});
		const uintv0QBlf = BigInt("14")
		const addressiRabwIy = accounts[4]
		const boolIbmCwUw = await VotingqgfTwtt.approve.call(addressiRabwIy, uintv0QBlf, {from: accounts[4]});
		await VotingqgfTwtt.renounceOwnership.call({from: accounts[5]});
		await VotingqgfTwtt.onlyOracle.call({from: accounts[4]});
	});

	it('test for Voting', async () => {
		const VotingZEjTuYi = await Voting.new({from: accounts[2]});
		const uintoDbv6Hr = BigInt("567")
		const addressdvvabRJ = accounts[3]
		const addressMQ4I9g9 = accounts[4]
		const addressml2EDY = accounts[5]
		const address1GO0YX = accounts[4]
		await VotingZEjTuYi.onlyRegistry.call({from: accounts[1]});
		const boolWwTvREr = await VotingZEjTuYi.increaseAllowance.call(addressdvvabRJ, uintoDbv6Hr, {from: accounts[1]});
		const uint256CaESsMD = await VotingZEjTuYi.allowance.call(addressml2EDY, addressMQ4I9g9, {from: accounts[3]});
		const addressogqXdxN = await VotingZEjTuYi.updateRegistry.call(address1GO0YX, {from: accounts[1]});
		const uint256Bh90dnp = await VotingZEjTuYi.totalSupply.call({from: accounts[3]});
	});
})