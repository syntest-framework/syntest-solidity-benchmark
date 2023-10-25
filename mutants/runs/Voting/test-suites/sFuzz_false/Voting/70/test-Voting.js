const Voting = artifacts.require("Voting");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Voting', (accounts) => {
	it('test for Voting', async () => {
		const VotingDWgEJE = await Voting.new({from: accounts[4]});
		const uintMD5fXwy = BigInt("1600")
		const addressJswnlTv = accounts[4]
		const uintHmt0DTZ = BigInt("1091")
		const addressQ20ra6e = accounts[3]
		const addressaIjcUr0 = accounts[4]
		await VotingDWgEJE.onlyExchangeFactoryOrVotingSystem.call({from: accounts[3]});
		const boolGADuZDe = await VotingDWgEJE.decreaseAllowance.call(addressJswnlTv, uintMD5fXwy, {from: accounts[3]});
		const stringcgEAlve = await VotingDWgEJE.name.call({from: "0x0000000000000000000000000000000000000001"});
		const boolOspVR3S = await VotingDWgEJE.decreaseAllowance.call(addressQ20ra6e, uintHmt0DTZ, {from: accounts[5]});
		const addressCC2O8OY = await VotingDWgEJE.ownableUpgrade.call(addressaIjcUr0, {from: accounts[0]});
	});

	it('test for Voting', async () => {
		const Votingt09FYF = await Voting.new({from: accounts[2]});
		const addressmgui3Nc = accounts[1]
		const addresscbI5gTy = accounts[3]
		await Votingt09FYF.onlyExchangeFactoryOrVotingSystem.call({from: accounts[3]});
		await Votingt09FYF.requiresWalletAcccess.call({from: accounts[5]});
		const addressn0d8bQL = await Votingt09FYF.ownableUpgrade.call(addressmgui3Nc, {from: accounts[2]});
		await Votingt09FYF.onlyOwner.call({from: accounts[4]});
		const boolzJjsPpe = await Votingt09FYF.isExchangeFactory.call(addresscbI5gTy, {from: accounts[1]});
	});

	it('test for Voting', async () => {
		const addressruIMWPC = accounts[1]
		const VotinghwwoWc7 = await Voting.new(addressruIMWPC, {from: accounts[3]});
		const uintNSGGuta = BigInt("109")
		const addressTr0foaI = accounts[1]
		const addressgdDMx56 = accounts[4]
		const uintYtMFLj5 = BigInt("1249")
		const addressbpssYRm = accounts[3]
		const boolbSzGFIH = await VotinghwwoWc7.decreaseAllowance.call(addressTr0foaI, uintNSGGuta, {from: accounts[0]});
		await VotinghwwoWc7.onlyOwner.call({from: accounts[2]});
		const addressdkIshQ1 = await VotinghwwoWc7.addMinter.call(addressgdDMx56, {from: accounts[4]});
		const boolZaYOPMq = await VotinghwwoWc7.transfer.call(addressbpssYRm, uintYtMFLj5, {from: accounts[3]});
	});

	it('test for Voting', async () => {
		const VotingANbpl0 = await Voting.new({from: accounts[0]});
		const addresspSO9U4r = accounts[2]
		const address9o9Tva = accounts[0]
		const uintiRjW6Q = BigInt("1335")
		const addressdhM9Bgz = accounts[4]
		const uintXVPKL4 = BigInt("1917")
		const addressLFzAD6 = accounts[3]
		const boolY5nhqtz = await VotingANbpl0.isExchangeFactory.call(addresspSO9U4r, {from: accounts[2]});
		const boolhYl2unk = await VotingANbpl0.didAddressVote.call(uintiRjW6Q, address9o9Tva, {from: accounts[5]});
		const boolA4ldwam = await VotingANbpl0.isMinter.call(addressdhM9Bgz, {from: accounts[3]});
		const boolR0AgGW = await VotingANbpl0.approve.call(addressLFzAD6, uintXVPKL4, {from: accounts[4]});
	});

	it('test for Voting', async () => {
		const VotingzZFO0n = await Voting.new({from: "0x0000000000000000000000000000000000000001"});
		const uintcBA4jmx = BigInt("1116")
		const addressKRvIk39 = accounts[3]
		const uintCpTtZyM = BigInt("980")
		await VotingzZFO0n.renounceOwnership.call({from: "0x0000000000000000000000000000000000000001"});
		const boolADzlG6Z = await VotingzZFO0n.transfer.call(addressKRvIk39, uintcBA4jmx, {from: accounts[1]});
		const uint256Lh51ZjF = await VotingzZFO0n.approve.call(uintCpTtZyM, {from: accounts[1]});
		await VotingzZFO0n.renounceOwnership.call({from: accounts[5]});
	});

	it('test for Voting', async () => {
		const VotingL4leOR4 = await Voting.new({from: accounts[3]});
		const uintWUTqfJK = BigInt("314")
		const addressYVrdyZf = accounts[2]
		const addressJ52cD2e = accounts[1]
		const boolheT0Oll = await VotingL4leOR4.transfer.call(addressYVrdyZf, uintWUTqfJK, {from: "0x0000000000000000000000000000000000000001"});
		const boolmIywBx1 = await VotingL4leOR4.isExchangeFactory.call(addressJ52cD2e, {from: accounts[1]});
		const boolYW0okIH = await VotingL4leOR4.isOwner.call({from: accounts[0]});
		const addressWOOnQG0 = await VotingL4leOR4.getRegistryAddress.call({from: accounts[2]});
		await VotingL4leOR4.onlyOwner.call({from: accounts[2]});
	});

	it('test for Voting', async () => {
		const addressSsvsGu = accounts[2]
		const VotingvX53b46 = await Voting.new(addressSsvsGu, {from: accounts[2]});
		const addresssK6QJu = accounts[2]
		const uintwzRzrXL = BigInt("1182")
		const addressyjI6GjF = accounts[2]
		const uintnWFIrta = BigInt("1930")
		const addressr2azum1 = accounts[6]
		const boolJpEAHz = await VotingvX53b46.isValidStamperAddress.call(addresssK6QJu, {from: accounts[4]});
		const boolbcWouhr = await VotingvX53b46.increaseAllowance.call(addressyjI6GjF, uintwzRzrXL, {from: accounts[3]});
		const uint256z17Rw5R = await VotingvX53b46.resolve.call(uintnWFIrta, {from: accounts[2]});
		const addressvFvIv6X = await VotingvX53b46.addMinter.call(addressr2azum1, {from: accounts[3]});
	});

	it('test for Voting', async () => {
		const addressiIVJ5MT = accounts[2]
		const VotingvX53b46 = await Voting.new(addressiIVJ5MT, {from: accounts[2]});
		const uintI1irPxj = BigInt("1182")
		const addresszX39YIC = accounts[3]
		const addressAzvCr7a = accounts[5]
		const addresszx0VXL7 = await VotingvX53b46.owner.call({from: accounts[4]});
		const boolbcWouhr = await VotingvX53b46.increaseAllowance.call(addresszX39YIC, uintI1irPxj, {from: accounts[3]});
		const addressvFvIv6X = await VotingvX53b46.addMinter.call(addressAzvCr7a, {from: accounts[3]});
	});

	it('test for Voting', async () => {
		const addressbQ774q5 = accounts[2]
		const VotingvX53b46 = await Voting.new(addressbQ774q5, {from: accounts[2]});
		const addressmD0tGw7 = accounts[2]
		const uintNr2GqHX = BigInt("1182")
		const addressvub1TtR = accounts[2]
		const addressvyLGNUH = accounts[5]
		const booljqiSG6y = await VotingvX53b46.isVotingSystem.call(addressmD0tGw7, {from: accounts[0]});
		const boolbcWouhr = await VotingvX53b46.increaseAllowance.call(addressvub1TtR, uintNr2GqHX, {from: accounts[3]});
		const uint8MhTZy15 = await VotingvX53b46.decimals.call({from: accounts[3]});
		const addressvFvIv6X = await VotingvX53b46.addMinter.call(addressvyLGNUH, {from: accounts[3]});
	});

	it('test for Voting', async () => {
		const addressuKbJmHH = accounts[3]
		const Voting1ayH3o = await Voting.new(addressuKbJmHH, {from: accounts[5]});
		const uinto4b5v4Y = BigInt("1120")
		const uint256Gunl3O = await Voting1ayH3o.pause.call(uinto4b5v4Y, {from: accounts[2]});
		await Voting1ayH3o.onlyOracle.call({from: accounts[0]});
		await Voting1ayH3o.onlyMinter.call({from: accounts[3]});
	});

	it('test for Voting', async () => {
		const addressJtbkY7A = accounts[2]
		const VotingvX53b46 = await Voting.new(addressJtbkY7A, {from: accounts[2]});
		const addressAtl5FAI = accounts[5]
		await VotingvX53b46.renounceOwnership.call({from: accounts[1]});
		const addressvFvIv6X = await VotingvX53b46.addMinter.call(addressAtl5FAI, {from: accounts[3]});
	});

	it('test for Voting', async () => {
		const address5TMtNf = accounts[2]
		const VotingvX53b46 = await Voting.new(address5TMtNf, {from: accounts[2]});
		const uintNycy8ip = BigInt("822")
		const addressWQxOQw = accounts[6]
		const uint256iSBAi4a = await VotingvX53b46.resolve.call(uintNycy8ip, {from: accounts[3]});
		const addressvFvIv6X = await VotingvX53b46.addMinter.call(addressWQxOQw, {from: accounts[3]});
	});

	it('test for Voting', async () => {
		const addresscB07jyB = accounts[2]
		const VotingvX53b46 = await Voting.new(addresscB07jyB, {from: accounts[2]});
		const addressk8m2mLy = accounts[2]
		const addressCmXPWly = accounts[2]
		const boolODj5Kqz = await VotingvX53b46.isExchangeFactory.call(addressk8m2mLy, {from: "0x0000000000000000000000000000000000000001"});
		const addressvFvIv6X = await VotingvX53b46.addMinter.call(addressCmXPWly, {from: accounts[3]});
		await VotingvX53b46.onRegistryRefresh.call({from: accounts[4]});
	});

	it('test for Voting', async () => {
		const addressETGdlzS = accounts[2]
		const VotingDofovfV = await Voting.new(addressETGdlzS, {from: accounts[4]});
		const addressuUUOfZm = accounts[2]
		const uintrthj7sW = BigInt("165")
		const addressWRDclPp = accounts[4]
		const addressv7Iuwv8 = "0x0000000000000000000000000000000000000001"
		const uintioMSOoh = BigInt("294")
		const addressR8moJyy = accounts[1]
		const boolNwUmbMZ = await VotingDofovfV.isValidVerifierAddress.call(addressuUUOfZm, {from: accounts[1]});
		const booln8RGL0P = await VotingDofovfV.transferFrom.call(addressv7Iuwv8, addressWRDclPp, uintrthj7sW, {from: accounts[4]});
		const uint256wpt3GQ = await VotingDofovfV.burn.call(uintioMSOoh, {from: accounts[1]});
		const addressfYBmkPR = await VotingDofovfV.addMinter.call(addressR8moJyy, {from: accounts[4]});
	});

	it('test for Voting', async () => {
		const addressTlyVofH = accounts[2]
		const VotingvX53b46 = await Voting.new(addressTlyVofH, {from: accounts[2]});
		const uintCkR48Af = BigInt("1200")
		const boolKq8ZRNj = false
		const uintCvbERnW = BigInt("1062")
		const addressGZ9PySy = accounts[7]
		const addressqWpz8Wl = accounts[3]
		const uint256W5pzrVn = await VotingvX53b46.veto.call(uintCkR48Af, {from: accounts[2]});
		const uint256Dc5ZWmt = await VotingvX53b46.vote.call(uintCvbERnW, boolKq8ZRNj, {from: accounts[4]});
		const addressvFvIv6X = await VotingvX53b46.addMinter.call(addressGZ9PySy, {from: accounts[3]});
		const boolcEfuFhS = await VotingvX53b46.isMinter.call(addressqWpz8Wl, {from: accounts[4]});
	});

	it('test for Voting', async () => {
		const Votingl1ILYP = await Voting.new({from: accounts[1]});
		const addressKXpLnQ = accounts[2]
		const addressbACMzT9 = accounts[4]
		const addressFUPML3w = accounts[2]
		const addressS0QFX8j = accounts[2]
		const addressEUm4VZS = accounts[0]
		const addressYlmCRB4 = await Votingl1ILYP.ownableUpgrade.call(addressKXpLnQ, {from: accounts[4]});
		const addressxjl81Cp = await Votingl1ILYP.addMinter.call(addressbACMzT9, {from: accounts[4]});
		const boolekuU7Si = await Votingl1ILYP.isMinter.call(addressFUPML3w, {from: accounts[1]});
		const uint256p4ALCa = await Votingl1ILYP.allowance.call(addressEUm4VZS, addressS0QFX8j, {from: accounts[1]});
	});

	it('test for Voting', async () => {
		const addressXwKL5pa = accounts[2]
		const VotingvX53b46 = await Voting.new(addressXwKL5pa, {from: accounts[2]});
		const uintEuPOwEb = BigInt("1291")
		const addressk67KBfG = accounts[3]
		const addressS5BBQE = accounts[1]
		const addressu9XxGaV = accounts[8]
		const boolJacBPyd = await VotingvX53b46.approve.call(addressk67KBfG, uintEuPOwEb, {from: accounts[2]});
		const boolujpiIAM = await VotingvX53b46.isExchangeFactory.call(addressS5BBQE, {from: accounts[3]});
		const addressvFvIv6X = await VotingvX53b46.addMinter.call(addressu9XxGaV, {from: accounts[3]});
	});

	it('test for Voting', async () => {
		const VotingSjgSjVA = await Voting.new({from: accounts[5]});
		const uintYCmEbta = BigInt("466")
		const addressVQdJmko = accounts[4]
		const addresswyJeJnF = accounts[4]
		const uint256BHWiMC9 = await VotingSjgSjVA.approve.call(uintYCmEbta, {from: accounts[5]});
		const addressDspJXm9 = await VotingSjgSjVA.updateRegistry.call(addressVQdJmko, {from: accounts[2]});
		const addresspaEbzbu = await VotingSjgSjVA.ownableUpgrade.call(addresswyJeJnF, {from: accounts[4]});
	});

	it('test for Voting', async () => {
		const addressdY4ANCQ = accounts[2]
		const VotingvX53b46 = await Voting.new(addressdY4ANCQ, {from: accounts[2]});
		const stringrCGtCpF = "nkI6ERwPIIqSVRd7OauQ2fPizTBU"
		const stringaPye25R = "MQSY4TBh3ADV2"
		const stringZxCEnOe = "bjPQm45S5YYCmSrH8ODk2OdU7gcavpQWMaenmncRqd6Fdi7J1zHuMmqY1URRhlRPZRcWLM6KqQA8bPUeS0Gt"
		const byteqxiWjpZ = "0x1a091a14"
		const addressbV1nCF = accounts[1]
		const addresspK7dPaB = accounts[3]
		const 
kGCAJJ6 = await VotingvX53b46.createProposal.call(addressbV1nCF, byteqxiWjpZ, stringZxCEnOe, stringaPye25R, stringrCGtCpF, {from: accounts[4]});
		const addressvFvIv6X = await VotingvX53b46.addMinter.call(addresspK7dPaB, {from: accounts[3]});
	});
})