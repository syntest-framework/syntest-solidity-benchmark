const Voting = artifacts.require("Voting");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Voting', (accounts) => {
	it('test for Voting', async () => {
		const addressQGz0Q6O = accounts[4]
		const VotingsGSVauP = await Voting.new(addressQGz0Q6O, {from: "0x0000000000000000000000000000000000000001"});
		const addresscvxhONu = accounts[0]
		const uintxoIIk2T = BigInt("489")
		const addresszohRkq7 = accounts[2]
		const addressert2RYm = accounts[2]
		const addressNBEvwS = await VotingsGSVauP.owner.call({from: accounts[4]});
		await VotingsGSVauP.onlyMessageProcessor.call({from: accounts[4]});
		const addresssUipt9j = await VotingsGSVauP.ownableUpgrade.call(addresscvxhONu, {from: accounts[5]});
		const booljHnMY9x = await VotingsGSVauP.transferFrom.call(addressert2RYm, addresszohRkq7, uintxoIIk2T, {from: accounts[0]});
	});

	it('test for Voting', async () => {
		const VotingZFmPZQA = await Voting.new({from: accounts[2]});
		const addresshYN0rfO = accounts[1]
		const addressiFXOc0o = await VotingZFmPZQA.owner.call({from: accounts[2]});
		const addresstqqpM3b = await VotingZFmPZQA.addMinter.call(addresshYN0rfO, {from: accounts[1]});
		await VotingZFmPZQA.nonReentrant.call({from: accounts[3]});
	});

	it('test for Voting', async () => {
		const addressZD9Owid = accounts[3]
		const Votingz53SCsP = await Voting.new(addressZD9Owid, {from: accounts[3]});
		const uintLWPePpt = BigInt("93")
		const addressQKjPjOs = accounts[4]
//		await Votingz53SCsP.onlyExchange.call({from: accounts[0]});
//		await Votingz53SCsP.onlyExchange.call({from: accounts[3]});
//		const uint256urIcC0C = await Votingz53SCsP.totalSupplyAt.call(uintLWPePpt, {from: accounts[0]});
//		const addressTb5KIFB = await Votingz53SCsP.updateRegistry.call(addressQKjPjOs, {from: "0x0000000000000000000000000000000000000001"});

		await expect(Votingz53SCsP.onlyExchange.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Voting', async () => {
		const addressrywu9mm = accounts[3]
		const VotingRuiRYLp = await Voting.new(addressrywu9mm, {from: accounts[2]});
		const addressWdvI7hF = accounts[1]
		const addressFSQaoVh = accounts[3]
		const uintU3SckXc = BigInt("1630")
//		const boolMs8Mxa1 = await VotingRuiRYLp.isValidOracleAddress.call(addressWdvI7hF, {from: accounts[4]});
//		await VotingRuiRYLp.onlyVotingSystem.call({from: accounts[2]});
//		const bool44WdGB = await VotingRuiRYLp.isValidOracleAddress.call(addressFSQaoVh, {from: accounts[0]});
//		const uint256N56RbDs = await VotingRuiRYLp.approve.call(uintU3SckXc, {from: accounts[0]});

		await expect(VotingRuiRYLp.isValidOracleAddress.call(addressWdvI7hF, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Voting', async () => {
		const Votingq7f5iRP = await Voting.new({from: accounts[3]});
		const uintVgdEAE = BigInt("1753")
		const uintsXA8Cul = BigInt("676")
		const boolrtX9HR = await Votingq7f5iRP.isOwner.call({from: accounts[2]});
		const stringtzeW8B0 = await Votingq7f5iRP.name.call({from: accounts[2]});
		await Votingq7f5iRP.renounceOwnership.call({from: accounts[1]});
		const uint256p7nFin = await Votingq7f5iRP.pause.call(uintVgdEAE, {from: accounts[2]});
		await Votingq7f5iRP.onlyExchangeFactoryOrVotingSystem.call({from: accounts[2]});
		const uint256l31k5YK = await Votingq7f5iRP.veto.call(uintsXA8Cul, {from: accounts[3]});
	});

	it('test for Voting', async () => {
		const VotingxkJHysP = await Voting.new({from: "0x0000000000000000000000000000000000000001"});
		const addressUHErtmb = accounts[2]
		const uintXr1neAI = BigInt("839")
		const addressvG3Dccq = "0x0000000000000000000000000000000000000001"
		const uint9whQJm = BigInt("1114")
		await VotingxkJHysP.renounceMinter.call({from: accounts[3]});
		const addresshOJmys = await VotingxkJHysP.getRegistryAddress.call({from: accounts[0]});
		const addressnnXYjE = await VotingxkJHysP.updateRegistry.call(addressUHErtmb, {from: "0x0000000000000000000000000000000000000001"});
		const boolMr6Fje = await VotingxkJHysP.approve.call(addressvG3Dccq, uintXr1neAI, {from: accounts[4]});
		const uint256qXDH0h6 = await VotingxkJHysP.burn.call(uint9whQJm, {from: accounts[3]});
	});

	it('test for Voting', async () => {
		const addressxXMzpO2 = accounts[2]
		const VotingJZGB55 = await Voting.new(addressxXMzpO2, {from: accounts[3]});
		const uintBGRRisN = BigInt("1644")
		const uintVZIVM14 = BigInt("621")
		const uintk8LwnXB = BigInt("16")
		const addressoD6Vv2Q = "0x0000000000000000000000000000000000000001"
		const uintAFKYD0a = BigInt("170")
		const uintj4VcvvP = BigInt("482")
		const address6d5RDN = "0x0000000000000000000000000000000000000001"
//		const uint256nB5boHO = await VotingJZGB55.veto.call(uintBGRRisN, {from: accounts[0]});
//		await VotingJZGB55.onlyMessageProcessor.call({from: accounts[2]});
//		const uint256fKF5ubJ = await VotingJZGB55.resolve.call(uintVZIVM14, {from: accounts[1]});
//		const addressBL9hteR = await VotingJZGB55.burnFrom.call(addressoD6Vv2Q, uintk8LwnXB, {from: accounts[5]});
//		const uint256V0HmU2L = await VotingJZGB55.pause.call(uintAFKYD0a, {from: accounts[4]});
//		const boolq5Zny8g = await VotingJZGB55.mint.call(address6d5RDN, uintj4VcvvP, {from: accounts[5]});
//		const uint256UCzjQlM = await VotingJZGB55.totalSupply.call({from: accounts[2]});

		await expect(VotingJZGB55.veto.call(uintBGRRisN, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Voting', async () => {
		const addressJqS7gAa = accounts[3]
		const VotingRuiRYLp = await Voting.new(addressJqS7gAa, {from: accounts[2]});
		const addressVrisDVe = accounts[4]
		const addressGu9rck3 = accounts[4]
		const addressx3CiLab = accounts[3]
		const uintCsfOj5q = BigInt("1630")
//		const boolywSlfLF = await VotingRuiRYLp.isVotingSystem.call(addressVrisDVe, {from: accounts[1]});
//		const boolMs8Mxa1 = await VotingRuiRYLp.isValidOracleAddress.call(addressGu9rck3, {from: accounts[4]});
//		const stringZC1ZgyW = await VotingRuiRYLp.name.call({from: accounts[2]});
//		await VotingRuiRYLp.onlyVotingSystem.call({from: accounts[2]});
//		const bool44WdGB = await VotingRuiRYLp.isValidOracleAddress.call(addressx3CiLab, {from: accounts[0]});
//		const uint256N56RbDs = await VotingRuiRYLp.approve.call(uintCsfOj5q, {from: accounts[0]});

		await expect(VotingRuiRYLp.isVotingSystem.call(addressVrisDVe, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Voting', async () => {
		const addresstHzWkZl = "0x0000000000000000000000000000000000000001"
		const VotingUr3Q80r = await Voting.new(addresstHzWkZl, {from: accounts[4]});
		const addressAiYP0Xn = accounts[1]
		const uintYMu4grb = BigInt("985")
		const address4EFmeW = accounts[4]
		const addressnvOHc4z = accounts[2]
		const uintPtxWAk = BigInt("1205")
		const addressR12CBHj = accounts[0]
//		const booltnXW1Jz = await VotingUr3Q80r.isValidVerifierAddress.call(addressAiYP0Xn, {from: accounts[3]});
//		const address1Ixyvj = await VotingUr3Q80r.burnFrom.call(address4EFmeW, uintYMu4grb, {from: accounts[3]});
//		const addressx0NShkT = await VotingUr3Q80r.updateRegistry.call(addressnvOHc4z, {from: accounts[1]});
//		const stringOYD42B = await VotingUr3Q80r.name.call({from: accounts[2]});
//		const uint256DmNWT7 = await VotingUr3Q80r.balanceOfAt.call(addressR12CBHj, uintPtxWAk, {from: accounts[1]});

		await expect(VotingUr3Q80r.isValidVerifierAddress.call(addressAiYP0Xn, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Voting', async () => {
		const addressQLsCCIJ = accounts[4]
		const Votingk9eysZm = await Voting.new(addressQLsCCIJ, {from: accounts[3]});
		const addresss2ZbU85 = accounts[2]
		const uintyIJDdpD = BigInt("1952")
		const addresscD0zFmQ = accounts[2]
		const addressTshp5zS = accounts[5]
//		const boolVSYQQBX = await Votingk9eysZm.isValidStamperAddress.call(addresss2ZbU85, {from: accounts[3]});
//		const boolIM9oZZ3 = await Votingk9eysZm.transferFrom.call(addressTshp5zS, addresscD0zFmQ, uintyIJDdpD, {from: accounts[4]});
//		await Votingk9eysZm.onlyOwner.call({from: accounts[3]});

		await expect(Votingk9eysZm.isValidStamperAddress.call(addresss2ZbU85, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Voting', async () => {
		const VotingWI0kGU = await Voting.new({from: accounts[4]});
		const addressIyBORck = accounts[5]
		const uintxoUh2tG = BigInt("231")
		const addressZFRWJm = accounts[5]
		const uintG063kde = BigInt("1400")
		const addressdXgsa3f = accounts[3]
		const uintIVVfEK4 = BigInt("1179")
		const addressOdQCmEs = accounts[0]
		const addresseqqH77S = await VotingWI0kGU.ownableUpgrade.call(addressIyBORck, {from: accounts[2]});
		const address6RU5PT = await VotingWI0kGU.burnFrom.call(addressZFRWJm, uintxoUh2tG, {from: accounts[1]});
		const addressCbeSI05 = await VotingWI0kGU.burnFrom.call(addressdXgsa3f, uintG063kde, {from: accounts[0]});
		const uint256LoLsT5V = await VotingWI0kGU.balanceOfAt.call(addressOdQCmEs, uintIVVfEK4, {from: accounts[1]});
	});

	it('test for Voting', async () => {
		const addressqn4YKkM = accounts[1]
		const Votingq1BeW2t = await Voting.new(addressqn4YKkM, {from: accounts[2]});
		const booluZxAhnH = true
		const uintZvMNigI = BigInt("494")
		const uintZmc9pT = BigInt("48")
		const addressMGELp2B = accounts[4]
		const uintznouw3 = BigInt("204")
		const addressaeXo8V = accounts[5]
//		const uint256sFarMn5 = await Votingq1BeW2t.vote.call(uintZvMNigI, booluZxAhnH, {from: accounts[2]});
//		const uint256pVRi1t = await Votingq1BeW2t.balanceOfAt.call(addressMGELp2B, uintZmc9pT, {from: accounts[0]});
//		const boolFvdAV2E = await Votingq1BeW2t.mint.call(addressaeXo8V, uintznouw3, {from: accounts[2]});

		await expect(Votingq1BeW2t.vote.call(uintZvMNigI, booluZxAhnH, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Voting', async () => {
		const addresswtMPyzp = accounts[1]
		const Votingq1BeW2t = await Voting.new(addresswtMPyzp, {from: accounts[2]});
		const uintaGDBmCS = BigInt("709")
		const booluZxAhnH = true
		const uinttg6EJUo = BigInt("494")
		const uintU15siCL = BigInt("60")
		const addressOcQK8Of = accounts[4]
		const uintAqoevZ = BigInt("204")
		const addressiPFaUZQ = accounts[5]
		const uint256sLK5FDQ = await Votingq1BeW2t.veto.call(uintaGDBmCS, {from: accounts[2]});
//		const uint256sFarMn5 = await Votingq1BeW2t.vote.call(uinttg6EJUo, booluZxAhnH, {from: accounts[2]});
//		const uint256pVRi1t = await Votingq1BeW2t.balanceOfAt.call(addressOcQK8Of, uintU15siCL, {from: accounts[0]});
//		const boolFvdAV2E = await Votingq1BeW2t.mint.call(addressiPFaUZQ, uintAqoevZ, {from: accounts[2]});

		await expect(Votingq1BeW2t.vote.call(uinttg6EJUo, booluZxAhnH, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Voting', async () => {
		const addressDZLbCRC = accounts[1]
		const Votingq1BeW2t = await Voting.new(addressDZLbCRC, {from: accounts[2]});
		const uintXwH6Ad4 = BigInt("1240")
		const addressiYUUDaa = accounts[4]
		const booluZxAhnH = false
		const uintJcqgDM = BigInt("494")
		const uintRorDT6b = BigInt("48")
		const addresscHoT54 = accounts[4]
//		const boolwU7JyNI = await Votingq1BeW2t.approve.call(addressiYUUDaa, uintXwH6Ad4, {from: accounts[2]});
//		const uint256sFarMn5 = await Votingq1BeW2t.vote.call(uintJcqgDM, booluZxAhnH, {from: accounts[2]});
//		const uint256pVRi1t = await Votingq1BeW2t.balanceOfAt.call(addresscHoT54, uintRorDT6b, {from: accounts[0]});

		await expect(Votingq1BeW2t.approve.call(addressiYUUDaa, uintXwH6Ad4, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})