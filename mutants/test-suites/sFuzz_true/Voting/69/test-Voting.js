const Voting = artifacts.require("Voting");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Voting', (accounts) => {
	it('test for Voting', async () => {
		const addressegufGY = accounts[2]
		const VotinguoEm5Kz = await Voting.new(addressegufGY, {from: accounts[4]});
		const addressWvM3bGz = accounts[1]
		const uintDHqcLnW = BigInt("393")
		const addressdPnGW4X = accounts[2]
		const addressRMJqo9g = accounts[0]
		const addressVw0bIWo = await VotinguoEm5Kz.updateRegistry.call(addressWvM3bGz, {from: accounts[5]});
		const boolTUktdFJ = await VotinguoEm5Kz.transferFrom.call(addressRMJqo9g, addressdPnGW4X, uintDHqcLnW, {from: accounts[1]});
		await VotinguoEm5Kz.nonReentrant.call({from: accounts[2]});
		await VotinguoEm5Kz.onRegistryRefresh.call({from: accounts[1]});
	});

	it('test for Voting', async () => {
		const addressuPJBMag = accounts[4]
		const VotingiM8etZ9 = await Voting.new(addressuPJBMag, {from: "0x0000000000000000000000000000000000000001"});
		const addressRSTuP2f = accounts[4]
		await VotingiM8etZ9.onlyMinter.call({from: accounts[4]});
		const uint256vn8t11 = await VotingiM8etZ9.balanceOf.call(addressRSTuP2f, {from: accounts[1]});
		await VotingiM8etZ9.nonReentrant.call({from: accounts[0]});
		const stringRIe4W2O = await VotingiM8etZ9.symbol.call({from: accounts[5]});
	});

	it('test for Voting', async () => {
		const VotingGDLx8d1 = await Voting.new({from: accounts[1]});
		const uintGKIUHVn = BigInt("479")
		const addressbmK1CgM = "0x0000000000000000000000000000000000000001"
		const booljeCsnBe = false
		const uintkE5x0uT = BigInt("200")
		const boolCjahm0H = true
		const uintyJD0JUT = BigInt("143")
		const uintZxaCinH = BigInt("1185")
		await VotingGDLx8d1.onlyExchangeFactoryOrVotingSystem.call({from: accounts[5]});
		const addresshRZdmYq = await VotingGDLx8d1.burnFrom.call(addressbmK1CgM, uintGKIUHVn, {from: accounts[5]});
		const uint256pkVrx03 = await VotingGDLx8d1.vote.call(uintkE5x0uT, booljeCsnBe, {from: accounts[0]});
		const uint256PLs9Yo5 = await VotingGDLx8d1.vote.call(uintyJD0JUT, boolCjahm0H, {from: accounts[4]});
		const uint256qr0RVat = await VotingGDLx8d1.approve.call(uintZxaCinH, {from: accounts[0]});
	});

	it('test for Voting', async () => {
		const VotingOOWPs2w = await Voting.new({from: accounts[5]});
		const uintJSSq7c8 = BigInt("1587")
		const address7DAbE3 = accounts[3]
		const addresspKXBlCR = accounts[4]
		const uintqxfyjAJ = BigInt("916")
		await VotingOOWPs2w.nonReentrant.call({from: accounts[4]});
		const boolVZdCJO1 = await VotingOOWPs2w.increaseAllowance.call(address7DAbE3, uintJSSq7c8, {from: accounts[0]});
		await VotingOOWPs2w.onlyRegistry.call({from: accounts[4]});
		await VotingOOWPs2w.onlyRegistry.call({from: accounts[2]});
		const boolRzIMJSq = await VotingOOWPs2w.didAddressVote.call(uintqxfyjAJ, addresspKXBlCR, {from: accounts[3]});
		const uint256GdwAhlx = await VotingOOWPs2w.snapshot.call({from: accounts[4]});
	});

	it('test for Voting', async () => {
		const addresslmvYzWw = accounts[2]
		const VotingeW1jk0y = await Voting.new(addresslmvYzWw, {from: accounts[4]});
		const boold2f5X0x = false
		const uintEMAf5mm = BigInt("58")
		const uint256YdFBhv1 = await VotingeW1jk0y.vote.call(uintEMAf5mm, boold2f5X0x, {from: accounts[3]});
		await VotingeW1jk0y.onlyExchangeFactory.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for Voting', async () => {
		const addresswsuJEu0 = accounts[2]
		const VotingeW1jk0y = await Voting.new(addresswsuJEu0, {from: accounts[4]});
		const boolgHtrjTK = await VotingeW1jk0y.isOwner.call({from: accounts[3]});
		await VotingeW1jk0y.onlyExchangeFactory.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for Voting', async () => {
		const addressGGGyCYU = accounts[2]
		const VotingeW1jk0y = await Voting.new(addressGGGyCYU, {from: accounts[4]});
		const addressAeOJeD = accounts[3]
		const uintjX031Lu = BigInt("804")
		const addressYpgbuM3 = accounts[0]
		const addressloYPNH = accounts[4]
		const boold2f5X0x = true
		const uintiJ7TAD1 = BigInt("58")
		const addresstshMXLc = await VotingeW1jk0y.transferOwnership.call(addressAeOJeD, {from: accounts[2]});
		const boolbvjhnnE = await VotingeW1jk0y.transferFrom.call(addressloYPNH, addressYpgbuM3, uintjX031Lu, {from: accounts[2]});
		const uint256YdFBhv1 = await VotingeW1jk0y.vote.call(uintiJ7TAD1, boold2f5X0x, {from: accounts[3]});
		await VotingeW1jk0y.onlyExchangeFactory.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for Voting', async () => {
		const addressfaShZJD = accounts[2]
		const VotingeW1jk0y = await Voting.new(addressfaShZJD, {from: accounts[4]});
		const address38RDGP = accounts[4]
		const uintaLBHvP9 = BigInt("336")
		const boola7WrObN = await VotingeW1jk0y.isValidVerifierAddress.call(address38RDGP, {from: accounts[0]});
		await VotingeW1jk0y.onlyExchangeFactory.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256mAZBDr = await VotingeW1jk0y.pause.call(uintaLBHvP9, {from: accounts[3]});
	});

	it('test for Voting', async () => {
		const addressa0JMg0Z = accounts[2]
		const VotingeW1jk0y = await Voting.new(addressa0JMg0Z, {from: accounts[4]});
		const addressWCHAzIQ = accounts[1]
		const boolFSOHDNy = await VotingeW1jk0y.isVotingSystem.call(addressWCHAzIQ, {from: "0x0000000000000000000000000000000000000001"});
		await VotingeW1jk0y.onlyExchangeFactory.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for Voting', async () => {
		const VotingcEVtbsu = await Voting.new({from: accounts[3]});
		const uintboRMN1x = BigInt("1956")
		const addresseL42s17 = accounts[2]
		const uintABLaOmY = BigInt("1785")
		const addressDaODrC = accounts[1]
		await VotingcEVtbsu.onlyExchange.call({from: accounts[2]});
		const addressvXdsMgk = await VotingcEVtbsu.getRegistryAddress.call({from: accounts[0]});
		const address7dbzKp = await VotingcEVtbsu.burnFrom.call(addresseL42s17, uintboRMN1x, {from: accounts[0]});
		await VotingcEVtbsu.onlyOwner.call({from: accounts[2]});
		const boolrUcpYF = await VotingcEVtbsu.transfer.call(addressDaODrC, uintABLaOmY, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for Voting', async () => {
		const addressQ5I7C4R = accounts[2]
		const VotingeW1jk0y = await Voting.new(addressQ5I7C4R, {from: accounts[4]});
		const uintRC4aRzl = BigInt("563")
		const addresshAa5HPC = "0x0000000000000000000000000000000000000001"
		const uintGuWIH0c = BigInt("1278")
		const boold2f5X0x = false
		const uintISEQpSX = BigInt("53")
		const uint256m0esPcG = await VotingeW1jk0y.pause.call(uintRC4aRzl, {from: accounts[4]});
		const booljgYDloK = await VotingeW1jk0y.didAddressVote.call(uintGuWIH0c, addresshAa5HPC, {from: accounts[3]});
		const uint256YdFBhv1 = await VotingeW1jk0y.vote.call(uintISEQpSX, boold2f5X0x, {from: accounts[3]});
	});

	it('test for Voting', async () => {
		const addressV92epDE = accounts[2]
		const VotingeW1jk0y = await Voting.new(addressV92epDE, {from: accounts[4]});
		const addressSKa1rC = accounts[2]
		const boolqEPS4nI = await VotingeW1jk0y.isValidStamperAddress.call(addressSKa1rC, {from: accounts[3]});
		await VotingeW1jk0y.onlyExchangeFactory.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for Voting', async () => {
		const addressqeQ1SQ0 = accounts[0]
		const VotingpkijvZ6 = await Voting.new(addressqeQ1SQ0, {from: accounts[0]});
		const uintxh49twV = BigInt("1398")
		const uintnjgDIGm = BigInt("1877")
		const addressVJDArdg = accounts[3]
		const uint256vQPAH6O = await VotingpkijvZ6.resolve.call(uintxh49twV, {from: accounts[0]});
		const uint256kou8ou8 = await VotingpkijvZ6.veto.call(uintnjgDIGm, {from: accounts[0]});
		const booldV2G9D0 = await VotingpkijvZ6.isOwner.call({from: accounts[1]});
		const boolrG2QINT = await VotingpkijvZ6.isExchangeFactory.call(addressVJDArdg, {from: accounts[0]});
		await VotingpkijvZ6.onlyOracle.call({from: accounts[0]});
	});

	it('test for Voting', async () => {
		const addressSL4DpmB = accounts[2]
		const VotingeW1jk0y = await Voting.new(addressSL4DpmB, {from: accounts[4]});
		const addressxbI62HW = "0x0000000000000000000000000000000000000001"
		const addressq43jdiK = await VotingeW1jk0y.transferOwnership.call(addressxbI62HW, {from: accounts[4]});
		await VotingeW1jk0y.onlyExchangeFactory.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for Voting', async () => {
		const VotinggWYkXyg = await Voting.new({from: accounts[0]});
		const addressHUs8xV = accounts[2]
		const uintDmeiWPy = BigInt("286")
		const addressW40W6k = accounts[1]
		const boolqFzOTHn = await VotinggWYkXyg.isVotingSystem.call(addressHUs8xV, {from: accounts[0]});
		const uint256eSHDOL9 = await VotinggWYkXyg.balanceOfAt.call(addressW40W6k, uintDmeiWPy, {from: accounts[1]});
		await VotinggWYkXyg.nonReentrant.call({from: accounts[1]});
	});

	it('test for Voting', async () => {
		const addressgP1NsUm = accounts[2]
		const VotingeW1jk0y = await Voting.new(addressgP1NsUm, {from: accounts[4]});
		const uintPoiP4S = BigInt("250")
		const addressuT26cYU = accounts[3]
		const boold2f5X0x = false
		const uintm8vlZZ = BigInt("58")
		const booll2HfmZJ = await VotingeW1jk0y.approve.call(addressuT26cYU, uintPoiP4S, {from: "0x0000000000000000000000000000000000000001"});
		const uint256YdFBhv1 = await VotingeW1jk0y.vote.call(uintm8vlZZ, boold2f5X0x, {from: accounts[3]});
	});

	it('test for Voting', async () => {
		const address8GBco2 = accounts[2]
		const VotingeW1jk0y = await Voting.new(address8GBco2, {from: accounts[4]});
		const uintYlYcXc = BigInt("1727")
		const uint256MrgZgV = await VotingeW1jk0y.veto.call(uintYlYcXc, {from: accounts[4]});
		await VotingeW1jk0y.onlyExchangeFactory.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for Voting', async () => {
		const addressW8jeHY = accounts[2]
		const VotingeW1jk0y = await Voting.new(addressW8jeHY, {from: accounts[4]});
		const addressfj4S95Y = accounts[3]
		const boold2f5X0x = false
		const uintFg0Mnss = BigInt("957")
		const addressEmJ4zT9 = accounts[5]
		const boolIbyYRbm = await VotingeW1jk0y.isExchangeFactory.call(addressfj4S95Y, {from: accounts[2]});
		await VotingeW1jk0y.requiresWalletAcccess.call({from: accounts[4]});
		const uint256YdFBhv1 = await VotingeW1jk0y.vote.call(uintFg0Mnss, boold2f5X0x, {from: accounts[3]});
		const booluHYBhts = await VotingeW1jk0y.isValidOracleAddress.call(addressEmJ4zT9, {from: accounts[4]});
	});

	it('test for Voting', async () => {
		const Votingcy4pP9E = await Voting.new({from: accounts[4]});
		const addressfISCB28 = accounts[1]
		const uintubuVR2F = BigInt("642")
		const addressIxlbWae = accounts[2]
		const addressnUfgCP = accounts[0]
		const boolJ9zGWMD = await Votingcy4pP9E.isOwner.call({from: accounts[2]});
		const addresspwFIQj = await Votingcy4pP9E.transferOwnership.call(addressfISCB28, {from: accounts[2]});
		await Votingcy4pP9E.onRegistryRefresh.call({from: accounts[4]});
		const uint8MHr1W6 = await Votingcy4pP9E.decimals.call({from: "0x0000000000000000000000000000000000000001"});
		const boolGXPMSiH = await Votingcy4pP9E.transferFrom.call(addressnUfgCP, addressIxlbWae, uintubuVR2F, {from: accounts[0]});
	});

	it('test for Voting', async () => {
		const addressyUl1XRz = accounts[2]
		const VotingeW1jk0y = await Voting.new(addressyUl1XRz, {from: accounts[4]});
		const stringhAcqX0N = "igZJ"
		const stringPCsOk8I = "RduiaO170gaVkmuwRdx05mWCPWciYBtLl5LDhTn15NaQ6iD5BTVUn50z5CF1lJB"
		const string4OzINi = "9Tx8SrVa7sJijaEwAjp5D6riygoBSTfNoodGSEvMa12"
		const bytees4CKzF = "0x1b0901060a060a061c050c1d070406151a151b1f1b0c"
		const addressjHuaim = accounts[1]
		const addressWjZPk5Z = accounts[1]
		const uintFfooKTU = BigInt("1199")
		const addressAdwomi = accounts[3]
		const addressHpYdqoF = accounts[2]
		const 
XUNgISu = await VotingeW1jk0y.createProposal.call(addressjHuaim, bytees4CKzF, string4OzINi, stringPCsOk8I, stringhAcqX0N, {from: "0x0000000000000000000000000000000000000001"});
		const addressOpmP1U5 = await VotingeW1jk0y.updateRegistry.call(addressWjZPk5Z, {from: accounts[3]});
		await VotingeW1jk0y.onlyExchangeFactory.call({from: "0x0000000000000000000000000000000000000001"});
		const boollhuu3XN = await VotingeW1jk0y.transferFrom.call(addressHpYdqoF, addressAdwomi, uintFfooKTU, {from: accounts[1]});
	});

	it('test for Voting', async () => {
		const addressj2fjAL9 = accounts[2]
		const VotingeW1jk0y = await Voting.new(addressj2fjAL9, {from: accounts[4]});
		const address5F7zkB = accounts[3]
		const boold2f5X0x = false
		const uintHJMCM6X = BigInt("58")
		const addressWfjUjPe = await VotingeW1jk0y.owner.call({from: accounts[3]});
		const addressPH2dBfs = await VotingeW1jk0y.addMinter.call(address5F7zkB, {from: accounts[0]});
		const uint256YdFBhv1 = await VotingeW1jk0y.vote.call(uintHJMCM6X, boold2f5X0x, {from: accounts[3]});
	});

	it('test for Voting', async () => {
		const addressy2DCXp = accounts[2]
		const VotingeW1jk0y = await Voting.new(addressy2DCXp, {from: accounts[4]});
		const addressxl9U0Uj = accounts[3]
		const addressDVJ3xbC = accounts[2]
		const boolbrZjBw8 = await VotingeW1jk0y.isValidOracleAddress.call(addressxl9U0Uj, {from: accounts[0]});
		const boolMe53qw5 = await VotingeW1jk0y.isValidStamperAddress.call(addressDVJ3xbC, {from: accounts[1]});
		await VotingeW1jk0y.onlyExchangeFactory.call({from: "0x0000000000000000000000000000000000000001"});
	});
})