const Voting = artifacts.require("Voting");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Voting', (accounts) => {
	it('test for Voting', async () => {
		const addressg0aXGh = accounts[4]
		const VotingcgcLIIp = await Voting.new(addressg0aXGh, {from: accounts[3]});
		const uintgAdh6Cz = BigInt("43")
		const addressfMF9bGZ = accounts[3]
		const addressO5dcOuv = accounts[5]
		const uintW825tE = BigInt("1704")
		const addressruEz7u = accounts[3]
		const boolNvsbXp8 = await VotingcgcLIIp.transferFrom.call(addressO5dcOuv, addressfMF9bGZ, uintgAdh6Cz, {from: accounts[3]});
		const boolsk8McZ3 = await VotingcgcLIIp.transfer.call(addressruEz7u, uintW825tE, {from: accounts[0]});
		await VotingcgcLIIp.onlyRegistry.call({from: accounts[0]});
	});

	it('test for Voting', async () => {
		const VotingS0ab9Gt = await Voting.new({from: accounts[1]});
		const addressYQsyNZt = accounts[2]
		const uintlmPAW93 = BigInt("2021")
		const addressRyhG4lm = accounts[1]
		const addressECGYI8 = accounts[4]
		const uintIcxwIN4 = BigInt("449")
		const boolKGVoai0 = await VotingS0ab9Gt.didAddressVote.call(uintlmPAW93, addressYQsyNZt, {from: accounts[4]});
		const boolwqOq4jC = await VotingS0ab9Gt.isValidStamperAddress.call(addressRyhG4lm, {from: "0x0000000000000000000000000000000000000001"});
		const boolVqCASoG = await VotingS0ab9Gt.didAddressVote.call(uintIcxwIN4, addressECGYI8, {from: accounts[5]});
	});

	it('test for Voting', async () => {
		const addressveZV1sG = accounts[3]
		const VotingtJK7fbC = await Voting.new(addressveZV1sG, {from: accounts[2]});
		const addressoudg92i = accounts[0]
		const uintAkfz3SM = BigInt("521")
		const uintnesKVHy = BigInt("1997")
		const boolLp6pQqL = await VotingtJK7fbC.didAddressVote.call(uintAkfz3SM, addressoudg92i, {from: accounts[1]});
		const uint256oHfst8W = await VotingtJK7fbC.approve.call(uintnesKVHy, {from: accounts[3]});
		await VotingtJK7fbC.onlyExchangeFactoryOrVotingSystem.call({from: accounts[1]});
		await VotingtJK7fbC.requiresWalletAcccess.call({from: accounts[2]});
		const addressMyLn4BC = await VotingtJK7fbC.owner.call({from: accounts[2]});
	});

	it('test for Voting', async () => {
		const addressO9AfIK0 = accounts[1]
		const VotingKhb5v8w = await Voting.new(addressO9AfIK0, {from: accounts[1]});
		const stringsIGk076 = "b8BD98A20r0HzNltzemBSpYYErmrD90RvrtvG2RjnvpRoBPuMl8WJ4ELUx5Q1jcIYyVmMOdwdbXf6W"
		const stringFSrGvg = "QIsm86WT7CJp9Pbyxomsarw8UBnUdE4GN4MUfcw9zkJpgMGpvxAC6InEsdtcaUPwPo1sIwmgkAYZjwhr"
		const stringXSz3pka = "p41mzGyhx9HXE7kVy4xxOyiw6AoZ5ErkDV4LFBNOGL3XGlny59ADnWnSxarLq2xnOIqhL9iGkl2DgGF8I"
		const byteUV1LBq4 = "0x180f1213141b060620"
		const addressSsZmMU = accounts[5]
		const addressgvjRtt = accounts[0]
		const uintcHGSrai = BigInt("1313")
		const addressuHJsKJi = accounts[2]
		const 
J41YLiH = await VotingKhb5v8w.createProposal.call(addressSsZmMU, byteUV1LBq4, stringXSz3pka, stringFSrGvg, stringsIGk076, {from: accounts[5]});
		const boolGCY3BY1 = await VotingKhb5v8w.didAddressVote.call(uintcHGSrai, addressgvjRtt, {from: accounts[4]});
		const stringt7BL08e = await VotingKhb5v8w.name.call({from: accounts[4]});
		const addresstyJyF5d = await VotingKhb5v8w.transferOwnership.call(addressuHJsKJi, {from: "0x0000000000000000000000000000000000000001"});
		await VotingKhb5v8w.nonReentrant.call({from: accounts[1]});
	});

	it('test for Voting', async () => {
		const VotingTzwRSuI = await Voting.new({from: accounts[4]});
		const addressfUWc09g = accounts[2]
		const uintvdlbHjk = BigInt("1291")
		const uintn4Hkm8E = BigInt("647")
		const addressyKoHzZ = accounts[0]
		await VotingTzwRSuI.onlyRegistry.call({from: accounts[2]});
		await VotingTzwRSuI.requiresLiquidityTokenSnapshotAccess.call({from: accounts[1]});
		const boolJaU9fQN = await VotingTzwRSuI.isValidStamperAddress.call(addressfUWc09g, {from: "0x0000000000000000000000000000000000000001"});
		const uint256AlTdkO = await VotingTzwRSuI.pause.call(uintvdlbHjk, {from: accounts[4]});
		const uint256eXWqdYs = await VotingTzwRSuI.balanceOfAt.call(addressyKoHzZ, uintn4Hkm8E, {from: accounts[3]});
	});

	it('test for Voting', async () => {
		const addressrCd5riR = accounts[3]
		const Votingr9qcyLi = await Voting.new(addressrCd5riR, {from: accounts[3]});
		const uintOtVHN9z = BigInt("415")
		const uint256MyRDT0D = await Votingr9qcyLi.resolve.call(uintOtVHN9z, {from: accounts[2]});
		await Votingr9qcyLi.nonReentrant.call({from: accounts[4]});
		await Votingr9qcyLi.onlyExchangeFactory.call({from: "0x0000000000000000000000000000000000000001"});
		await Votingr9qcyLi.onlyMinter.call({from: accounts[5]});
	});

	it('test for Voting', async () => {
		const addressWpPev8C = accounts[3]
		const Votingr9qcyLi = await Voting.new(addressWpPev8C, {from: accounts[3]});
		const addressWHm90vP = accounts[1]
		const uintW56XzSg = BigInt("1834")
		const addresskQdL9pc = accounts[4]
		const uintolxnEKg = BigInt("1202")
		const addresswJaHEIl = accounts[2]
		const booli6sEIpG = await Votingr9qcyLi.didAddressVote.call(uintW56XzSg, addressWHm90vP, {from: accounts[2]});
		const addressxtwlcrl = await Votingr9qcyLi.transferOwnership.call(addresskQdL9pc, {from: accounts[3]});
		const boolnp6hWHk = await Votingr9qcyLi.approve.call(addresswJaHEIl, uintolxnEKg, {from: accounts[2]});
		await Votingr9qcyLi.nonReentrant.call({from: accounts[4]});
	});

	it('test for Voting', async () => {
		const addressFVBv6oy = accounts[3]
		const Votingr9qcyLi = await Voting.new(addressFVBv6oy, {from: accounts[3]});
		const addressLAZysV9 = accounts[5]
		const boolKrJYgDw = await Votingr9qcyLi.isValidOracleAddress.call(addressLAZysV9, {from: accounts[3]});
		await Votingr9qcyLi.nonReentrant.call({from: accounts[4]});
	});

	it('test for Voting', async () => {
		const addressiniSpd8 = accounts[1]
		const VotingEo6OFLH = await Voting.new(addressiniSpd8, {from: accounts[4]});
		const boolv0YPndv = true
		const uintqtJ2fX2 = BigInt("1184")
		const uintlEJtTNW = BigInt("1134")
		const addressCuSimsL = accounts[1]
		const uintsAxJKLc = BigInt("705")
		const addressLCmf7f9 = accounts[5]
		const addressq7swMnK = accounts[4]
		const uint256uc16li = await VotingEo6OFLH.vote.call(uintqtJ2fX2, boolv0YPndv, {from: accounts[1]});
		const boolzkfrpNf = await VotingEo6OFLH.transfer.call(addressCuSimsL, uintlEJtTNW, {from: accounts[3]});
		const uint256OSRQlHZ = await VotingEo6OFLH.approve.call(uintsAxJKLc, {from: accounts[3]});
		const boola3h0q39 = await VotingEo6OFLH.isVotingSystem.call(addressLCmf7f9, {from: accounts[2]});
		const boolG3gmUQc = await VotingEo6OFLH.isValidStamperAddress.call(addressq7swMnK, {from: accounts[3]});
		await VotingEo6OFLH.onlyVotingSystem.call({from: accounts[4]});
	});

	it('test for Voting', async () => {
		const addressyiTwJei = accounts[1]
		const VotinghElQrNQ = await Voting.new(addressyiTwJei, {from: "0x0000000000000000000000000000000000000001"});
		const addressP1XJdx3 = "0x0000000000000000000000000000000000000001"
		const uintS6BK0iK = BigInt("41")
		const addressiLU98C = await VotinghElQrNQ.addMinter.call(addressP1XJdx3, {from: accounts[0]});
		const stringe0qRjxc = await VotinghElQrNQ.symbol.call({from: accounts[1]});
		const uint256bYXI2Ct = await VotinghElQrNQ.pause.call(uintS6BK0iK, {from: accounts[0]});
	});

	it('test for Voting', async () => {
		const addressil4Zslo = accounts[3]
		const Votingr9qcyLi = await Voting.new(addressil4Zslo, {from: accounts[3]});
		const addressNh8d9wK = accounts[0]
		const uintgUF4tUf = BigInt("1154")
		const addressYcKmMCA = accounts[4]
		const addressYSKJv5Q = accounts[5]
		const bool75L9Bl = await Votingr9qcyLi.isValidStamperAddress.call(addressNh8d9wK, {from: accounts[4]});
		const boolJtAXNCJ = await Votingr9qcyLi.transferFrom.call(addressYSKJv5Q, addressYcKmMCA, uintgUF4tUf, {from: accounts[0]});
		await Votingr9qcyLi.nonReentrant.call({from: accounts[4]});
	});

	it('test for Voting', async () => {
		const addressMq7z27l = accounts[5]
		const Votingy1PP8J = await Voting.new(addressMq7z27l, {from: accounts[1]});
		const addressAhBJTMj = accounts[1]
		const addresscR1WQHE = accounts[5]
		const uintiu6atBK = BigInt("226")
		const uintP8gVNuW = BigInt("1398")
		const addressGxhZw5 = accounts[2]
		const addressLJs37UR = accounts[1]
		const bools5j4Um1 = await Votingy1PP8J.isVotingSystem.call(addressAhBJTMj, {from: accounts[1]});
		const boolyzhPJFv = await Votingy1PP8J.isValidOracleAddress.call(addresscR1WQHE, {from: accounts[2]});
		const uint256TeOqXUL = await Votingy1PP8J.veto.call(uintiu6atBK, {from: accounts[5]});
		const boolnwwO9ZF = await Votingy1PP8J.transfer.call(addressGxhZw5, uintP8gVNuW, {from: accounts[4]});
		const addressSvRaOqW = await Votingy1PP8J.addMinter.call(addressLJs37UR, {from: accounts[3]});
		await Votingy1PP8J.onlyExchangeFactoryOrVotingSystem.call({from: accounts[1]});
	});

	it('test for Voting', async () => {
		const VotingRRrKOcV = await Voting.new({from: accounts[2]});
		const addressOxzMdcM = accounts[0]
		const addressw4y1WT = accounts[5]
		const uint256PtBEN9u = await VotingRRrKOcV.totalSupply.call({from: accounts[2]});
		const addressVm3Pcq = await VotingRRrKOcV.transferOwnership.call(addressOxzMdcM, {from: accounts[5]});
		const uint256yKMXVqH = await VotingRRrKOcV.snapshot.call({from: accounts[4]});
		const boolD3iCm7X = await VotingRRrKOcV.isValidOracleAddress.call(addressw4y1WT, {from: accounts[4]});
	});

	it('test for Voting', async () => {
		const VotingBZZmJ38 = await Voting.new({from: accounts[3]});
		const addressQsPL7G5 = accounts[3]
		await VotingBZZmJ38.onlyRegistry.call({from: accounts[3]});
		const boolUDoCPAC = await VotingBZZmJ38.isValidVerifierAddress.call(addressQsPL7G5, {from: accounts[0]});
	});

	it('test for Voting', async () => {
		const addressC3V8LP = accounts[3]
		const Votingr9qcyLi = await Voting.new(addressC3V8LP, {from: accounts[3]});
		const addressSsVwDBL = accounts[4]
		const boolAuIXmWJ = await Votingr9qcyLi.isValidVerifierAddress.call(addressSsVwDBL, {from: accounts[4]});
		await Votingr9qcyLi.nonReentrant.call({from: accounts[4]});
		const stringsK3BP9B = await Votingr9qcyLi.name.call({from: accounts[0]});
	});

	it('test for Voting', async () => {
		const addressaj0Gub0 = accounts[2]
		const VotingeftxOpo = await Voting.new(addressaj0Gub0, {from: accounts[0]});
		const uintkd4lpDA = BigInt("1794")
		const addressEzfDk2E = accounts[4]
		const uint256a26NT6 = await VotingeftxOpo.veto.call(uintkd4lpDA, {from: accounts[0]});
		await VotingeftxOpo.onlyExchangeFactory.call({from: accounts[0]});
		const boolLe0KPu0 = await VotingeftxOpo.isMinter.call(addressEzfDk2E, {from: accounts[0]});
	});
})