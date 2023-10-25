const Voting = artifacts.require("Voting");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Voting', (accounts) => {
	it('test for Voting', async () => {
		const VotingJZTLlaR = await Voting.new({from: accounts[2]});
		const addresswA9BIx6 = accounts[4]
		const uintQZ9G1kH = BigInt("638")
		const addresszQqkZqW = "0x0000000000000000000000000000000000000001"
		const addressxuspx73 = accounts[3]
		const addressKDTI0tV = accounts[3]
		const addressJmapcIl = await VotingJZTLlaR.updateRegistry.call(addresswA9BIx6, {from: "0x0000000000000000000000000000000000000001"});
		const booltpTgNgr = await VotingJZTLlaR.mint.call(addresszQqkZqW, uintQZ9G1kH, {from: accounts[3]});
		const boolOEOUEjT = await VotingJZTLlaR.isMinter.call(addressxuspx73, {from: accounts[3]});
		const boolXXqxZaC = await VotingJZTLlaR.isVotingSystem.call(addressKDTI0tV, {from: accounts[1]});
	});

	it('test for Voting', async () => {
		const VotingwU4AlZP = await Voting.new({from: accounts[4]});
		const stringOL0mUOm = await VotingwU4AlZP.name.call({from: accounts[1]});
		await VotingwU4AlZP.onlyMessageProcessor.call({from: accounts[0]});
	});

	it('test for Voting', async () => {
		const addressGk3rd9w = accounts[4]
		const VotingQa6eVcN = await Voting.new(addressGk3rd9w, {from: accounts[2]});
		const uintjLel6T = BigInt("55")
		const stringMtp7kTi = "dnV9TLrAWCqRdNEKu5kf3A3AMygHRmE1EB"
		const stringmw8bAw = "RxHWnaHXErhdxdXfj26XdBcSzU9JR6tOP7uOHMYyscpu9HRv"
		const stringnu0YrZ1 = "Q3kwQDcOomMtvyWlsYNlAK8RRY"
		const byteqV5sdAK = "0x03181c1915020d06151a0e1e0a1c031d0104131d1e03070c0a180a18110b1e"
		const address2p5mPE = accounts[2]
		const addressfPt8wBK = accounts[5]
		const uint256VIcGKp3 = await VotingQa6eVcN.totalSupplyAt.call(uintjLel6T, {from: accounts[5]});
		await VotingQa6eVcN.onlyExchange.call({from: accounts[4]});
		const 
TlJ5AJN = await VotingQa6eVcN.createProposal.call(address2p5mPE, byteqV5sdAK, stringnu0YrZ1, stringmw8bAw, stringMtp7kTi, {from: accounts[4]});
		const addressyvNdrT9 = await VotingQa6eVcN.updateRegistry.call(addressfPt8wBK, {from: accounts[3]});
	});

	it('test for Voting', async () => {
		const addresslHMAT7R = accounts[2]
		const VotingnRcII5v = await Voting.new(addresslHMAT7R, {from: accounts[2]});
		const addresskwi3Vem = accounts[2]
		const addressOr7fyqv = accounts[3]
		const addressDdjxDqg = accounts[3]
		const boolAwQK1VL = await VotingnRcII5v.isValidOracleAddress.call(addresskwi3Vem, {from: "0x0000000000000000000000000000000000000001"});
		const uint256bvDLmWO = await VotingnRcII5v.allowance.call(addressDdjxDqg, addressOr7fyqv, {from: "0x0000000000000000000000000000000000000001"});
		await VotingnRcII5v.onlyOracle.call({from: accounts[4]});
	});

	it('test for Voting', async () => {
		const VotingRgREqaa = await Voting.new({from: accounts[1]});
		const uintZfQQtg = BigInt("222")
		const addressk4i4suY = accounts[2]
		const uintZgDddwu = BigInt("1732")
		const uintoCOb25 = BigInt("1585")
		const addresseZiemmx = "0x0000000000000000000000000000000000000001"
		const booloDNN8gp = await VotingRgREqaa.increaseAllowance.call(addressk4i4suY, uintZfQQtg, {from: accounts[2]});
		const uint256zsN9Y6y = await VotingRgREqaa.pause.call(uintZgDddwu, {from: accounts[2]});
		const uint256D7EiBhP = await VotingRgREqaa.veto.call(uintoCOb25, {from: accounts[4]});
		const boolllozKB9 = await VotingRgREqaa.isOwner.call({from: accounts[5]});
		const addressUyDXSpa = await VotingRgREqaa.transferOwnership.call(addresseZiemmx, {from: accounts[3]});
	});

	it('test for Voting', async () => {
		const addressulcba71 = accounts[0]
		const VotingnrzNxw9 = await Voting.new(addressulcba71, {from: "0x0000000000000000000000000000000000000001"});
		const addressqwPLq6h = accounts[4]
		const uintCwWPvxq = BigInt("907")
		const addressJhcj14H = accounts[3]
		const address1GyM6L = accounts[2]
		const addresspCedeyC = await VotingnrzNxw9.transferOwnership.call(addressqwPLq6h, {from: accounts[1]});
		await VotingnrzNxw9.onlyOracle.call({from: accounts[4]});
		await VotingnrzNxw9.onlyExchangeFactoryOrVotingSystem.call({from: accounts[1]});
		const uint256ppHTamI = await VotingnrzNxw9.balanceOfAt.call(addressJhcj14H, uintCwWPvxq, {from: accounts[4]});
		const addressSZ7ezLq = await VotingnrzNxw9.addMinter.call(address1GyM6L, {from: accounts[1]});
	});

	it('test for Voting', async () => {
		const addressxmp3VZn = accounts[2]
		const VotingrvmgXGa = await Voting.new(addressxmp3VZn, {from: accounts[3]});
		const uintsvoF0Bl = BigInt("1278")
		const addressfpRMp7y = accounts[1]
		const uintchq0SGF = BigInt("1096")
		const addressSLoabg6 = accounts[4]
		const uint256HBJEOle = await VotingrvmgXGa.resolve.call(uintsvoF0Bl, {from: accounts[2]});
		const boolZUKyio = await VotingrvmgXGa.isVotingSystem.call(addressfpRMp7y, {from: accounts[0]});
		const uint256DpHFpwW = await VotingrvmgXGa.balanceOfAt.call(addressSLoabg6, uintchq0SGF, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for Voting', async () => {
		const addressuSZeAKF = accounts[4]
		const VotingojMjNEn = await Voting.new(addressuSZeAKF, {from: accounts[4]});
		const addressep2TS8k = accounts[1]
		const addressRGJd0eF = accounts[1]
		const addressSjy6EdA = accounts[0]
		const uintD4QdtyQ = BigInt("966")
		const addressdCd6NsN = accounts[4]
		const addressmmjfw63 = accounts[5]
		const addressGsXp5ef = accounts[1]
		const boolotbqeyg = await VotingojMjNEn.isValidVerifierAddress.call(addressep2TS8k, {from: accounts[1]});
		await VotingojMjNEn.onlyExchange.call({from: accounts[1]});
		const uint256cfeBL00 = await VotingojMjNEn.allowance.call(addressSjy6EdA, addressRGJd0eF, {from: accounts[1]});
		const bool5KSSko = await VotingojMjNEn.transferFrom.call(addressmmjfw63, addressdCd6NsN, uintD4QdtyQ, {from: accounts[2]});
		const addresso4HQLih = await VotingojMjNEn.addMinter.call(addressGsXp5ef, {from: accounts[1]});
	});

	it('test for Voting', async () => {
		const VotingHNaA4OA = await Voting.new({from: accounts[3]});
		const addressBYkVAo3 = accounts[2]
		const addresseEvNEpO = accounts[1]
		const addressGtj5l1G = accounts[0]
		const uintDxWSL3h = BigInt("1018")
		const booloLPkJ09 = await VotingHNaA4OA.isValidStamperAddress.call(addressBYkVAo3, {from: accounts[2]});
		const addressTHcg23Z = await VotingHNaA4OA.updateRegistry.call(addresseEvNEpO, {from: accounts[3]});
		await VotingHNaA4OA.onlyRegistry.call({from: accounts[5]});
		const addresswraXF5E = await VotingHNaA4OA.transferOwnership.call(addressGtj5l1G, {from: accounts[5]});
		const uint256lp1lC5F = await VotingHNaA4OA.veto.call(uintDxWSL3h, {from: accounts[4]});
	});

	it('test for Voting', async () => {
		const addressjL58PII = accounts[2]
		const VotingrvmgXGa = await Voting.new(addressjL58PII, {from: accounts[3]});
		const addresswzL5n4q = accounts[3]
		const uintrilQSS = BigInt("757")
		const boolIZemtfX = await VotingrvmgXGa.isExchangeFactory.call(addresswzL5n4q, {from: accounts[4]});
		const uint256HBJEOle = await VotingrvmgXGa.resolve.call(uintrilQSS, {from: accounts[2]});
	});

	it('test for Voting', async () => {
		const addressaW1iuUW = accounts[2]
		const VotingrvmgXGa = await Voting.new(addressaW1iuUW, {from: accounts[3]});
		const uintdU2iqll = BigInt("594")
		const addressC9fS0B4 = accounts[2]
		const uintjQ7qxFv = BigInt("1212")
		const uint256E3XrWtl = await VotingrvmgXGa.veto.call(uintdU2iqll, {from: accounts[3]});
		const boolW5hoS8D = await VotingrvmgXGa.isVotingSystem.call(addressC9fS0B4, {from: accounts[1]});
		const uint256HBJEOle = await VotingrvmgXGa.resolve.call(uintjQ7qxFv, {from: accounts[2]});
	});

	it('test for Voting', async () => {
		const addressHyDRu22 = accounts[2]
		const VotingrvmgXGa = await Voting.new(addressHyDRu22, {from: accounts[3]});
		const addressSazTgS6 = "0x0000000000000000000000000000000000000001"
		const uintZjKNV9U = BigInt("1259")
		const addressX3AjGII = await VotingrvmgXGa.transferOwnership.call(addressSazTgS6, {from: accounts[4]});
		const uint256HBJEOle = await VotingrvmgXGa.resolve.call(uintZjKNV9U, {from: accounts[2]});
	});

	it('test for Voting', async () => {
		const addressXOndO8d = accounts[2]
		const VotingrvmgXGa = await Voting.new(addressXOndO8d, {from: accounts[3]});
		const uintH6JOln0 = BigInt("9")
		const addressGHiN3b = accounts[0]
		const uintVxVufVU = BigInt("1260")
		const boolMpGKxJC = await VotingrvmgXGa.approve.call(addressGHiN3b, uintH6JOln0, {from: accounts[1]});
		const uint256HBJEOle = await VotingrvmgXGa.resolve.call(uintVxVufVU, {from: accounts[2]});
	});

	it('test for Voting', async () => {
		const addressnyLoyPN = accounts[2]
		const VotingrvmgXGa = await Voting.new(addressnyLoyPN, {from: accounts[3]});
		const boolyliTcUh = true
		const uintSQWwe3r = BigInt("1312")
		const uintnJdzLMT = BigInt("1260")
		const uintSiLGBBF = BigInt("771")
		const address4CPVa3 = accounts[3]
		const addressOV0HPVa = accounts[5]
		const uintUpzToj0 = BigInt("290")
		const addressGEAhpAf = accounts[4]
		const uint256vqAS3H = await VotingrvmgXGa.vote.call(uintSQWwe3r, boolyliTcUh, {from: accounts[0]});
		const uint256HBJEOle = await VotingrvmgXGa.resolve.call(uintnJdzLMT, {from: accounts[2]});
		const boolXl87Bu = await VotingrvmgXGa.transferFrom.call(addressOV0HPVa, address4CPVa3, uintSiLGBBF, {from: "0x0000000000000000000000000000000000000001"});
		const boolPk83PQM = await VotingrvmgXGa.transfer.call(addressGEAhpAf, uintUpzToj0, {from: accounts[0]});
	});

	it('test for Voting', async () => {
		const VotingA1fIef = await Voting.new({from: accounts[0]});
		const addressrBXfCF = accounts[5]
		const addressxUQMAe = accounts[4]
		const addressAHpbYgw = accounts[3]
		const addressMfxCSTk = accounts[2]
		const boolm4MnKiB = await VotingA1fIef.isValidOracleAddress.call(addressrBXfCF, {from: "0x0000000000000000000000000000000000000001"});
		const uint256gN1qAng = await VotingA1fIef.balanceOf.call(addressxUQMAe, {from: accounts[4]});
		const addressQHrgDsd = await VotingA1fIef.addMinter.call(addressAHpbYgw, {from: accounts[2]});
		const booltfAXSYI = await VotingA1fIef.isVotingSystem.call(addressMfxCSTk, {from: "0x0000000000000000000000000000000000000001"});
		const stringxTPUgfS = await VotingA1fIef.symbol.call({from: accounts[2]});
	});

	it('test for Voting', async () => {
		const addresslqWtckO = accounts[2]
		const VotingrvmgXGa = await Voting.new(addresslqWtckO, {from: accounts[3]});
		const boolQ6fMpSm = false
		const uintecPXfs6 = BigInt("69")
		await VotingrvmgXGa.renounceOwnership.call({from: accounts[3]});
		await VotingrvmgXGa.onlyMessageProcessor.call({from: accounts[4]});
		const uint256wKXHt6K = await VotingrvmgXGa.vote.call(uintecPXfs6, boolQ6fMpSm, {from: accounts[4]});
	});

	it('test for Voting', async () => {
		const addressWDdxBAb = accounts[2]
		const VotingrvmgXGa = await Voting.new(addressWDdxBAb, {from: accounts[3]});
		const addressACRUp11 = "0x0000000000000000000000000000000000000001"
		const uintxJEZRdz = BigInt("613")
		const addressdG41zb = accounts[1]
		const boolQ6fMpSm = true
		const uintg8HWurL = BigInt("69")
		const boolUadeq7E = await VotingrvmgXGa.isValidStamperAddress.call(addressACRUp11, {from: accounts[5]});
		const boolC3ChATO = await VotingrvmgXGa.decreaseAllowance.call(addressdG41zb, uintxJEZRdz, {from: accounts[4]});
		const uint256wKXHt6K = await VotingrvmgXGa.vote.call(uintg8HWurL, boolQ6fMpSm, {from: accounts[4]});
	});

	it('test for Voting', async () => {
		const address8lWszD = accounts[2]
		const VotingrvmgXGa = await Voting.new(address8lWszD, {from: accounts[3]});
		const addressBdWBYLz = accounts[4]
		const uintbWSY3zR = BigInt("111")
		const boolQ6fMpSm = true
		const uinttZsrMHF = BigInt("69")
		const boolQZoDxeN = await VotingrvmgXGa.isOwner.call({from: accounts[1]});
		const boolz6tmvUn = await VotingrvmgXGa.didAddressVote.call(uintbWSY3zR, addressBdWBYLz, {from: accounts[3]});
		const uint256wKXHt6K = await VotingrvmgXGa.vote.call(uinttZsrMHF, boolQ6fMpSm, {from: accounts[4]});
	});
})