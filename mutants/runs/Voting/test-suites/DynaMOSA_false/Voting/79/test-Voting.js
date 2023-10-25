const Voting = artifacts.require("Voting");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Voting', (accounts) => {
	it('test for Voting', async () => {
		const VotingN7KoFXv = await Voting.new({from: accounts[0]});
		const addressZHhLW0A = accounts[2]
		const uintOKgvLDq = BigInt("440")
		const uintvsd3yjW = BigInt("1634")
		const addressEYxRGwq = accounts[1]
		const addresssXbjl8i = await VotingN7KoFXv.updateRegistry.call(addressZHhLW0A, {from: accounts[1]});
		const uint256k4KTisV = await VotingN7KoFXv.burn.call(uintOKgvLDq, {from: accounts[4]});
		await VotingN7KoFXv.onlyMessageProcessor.call({from: accounts[3]});
		const boole5UnPsU = await VotingN7KoFXv.decreaseAllowance.call(addressEYxRGwq, uintvsd3yjW, {from: accounts[3]});
	});

	it('test for Voting', async () => {
		const VotingFC24Dmg = await Voting.new({from: accounts[1]});
		const uintUGMtl0r = BigInt("1085")
		const addressD9UpPF6 = accounts[1]
		const uintTS0Hbme = BigInt("671")
		const addressiENfGF8 = accounts[3]
		const uint256iglW0aW = await VotingFC24Dmg.balanceOfAt.call(addressD9UpPF6, uintUGMtl0r, {from: accounts[4]});
		const uint256MN1TgC = await VotingFC24Dmg.resolve.call(uintTS0Hbme, {from: accounts[2]});
		const boolQZIpgSa = await VotingFC24Dmg.isValidOracleAddress.call(addressiENfGF8, {from: accounts[2]});
		const stringRN8iVCl = await VotingFC24Dmg.name.call({from: accounts[5]});
		await VotingFC24Dmg.onlyExchangeFactoryOrVotingSystem.call({from: accounts[5]});
	});

	it('test for Voting', async () => {
		const addressGMj9Ts = accounts[4]
		const VotingFhXQzxk = await Voting.new(addressGMj9Ts, {from: "0x0000000000000000000000000000000000000001"});
		const addressFaN10z4 = accounts[4]
		const boolJ2TGbER = true
		const uintXO3o1AE = BigInt("1146")
		const uintQ82z94s = BigInt("421")
		const addressM3rAsm = accounts[0]
		const boolrFt4A0X = await VotingFhXQzxk.isValidStamperAddress.call(addressFaN10z4, {from: accounts[1]});
		const uint256RhfrK9j = await VotingFhXQzxk.vote.call(uintXO3o1AE, boolJ2TGbER, {from: accounts[0]});
		await VotingFhXQzxk.onlyExchangeFactory.call({from: accounts[3]});
		const booliNyeGFd = await VotingFhXQzxk.approve.call(addressM3rAsm, uintQ82z94s, {from: accounts[0]});
	});

	it('test for Voting', async () => {
		const VotingrlaynGv = await Voting.new({from: accounts[3]});
		const uintsmaBQT = BigInt("1500")
		const addressYPOwMSt = accounts[1]
		const uintjtHYPT = BigInt("1084")
		const addressa9gyVs2 = accounts[2]
		const addressbs6Ant7 = accounts[3]
		const uintg8nWbA4 = BigInt("1774")
		const addressFaRPpY = accounts[3]
		const addresskqNeyF = accounts[1]
		const addresseYjCRE = accounts[0]
		const uintgJqPT2A = BigInt("1786")
		const boolR5bb8rK = await VotingrlaynGv.approve.call(addressYPOwMSt, uintsmaBQT, {from: accounts[4]});
		const boolqndntP = await VotingrlaynGv.transferFrom.call(addressbs6Ant7, addressa9gyVs2, uintjtHYPT, {from: accounts[4]});
		const boolnghlt3Q = await VotingrlaynGv.approve.call(addressFaRPpY, uintg8nWbA4, {from: accounts[1]});
		const boolzGAkn2 = await VotingrlaynGv.isValidVerifierAddress.call(addresskqNeyF, {from: accounts[1]});
		const uint256A9RI3s = await VotingrlaynGv.balanceOf.call(addresseYjCRE, {from: accounts[5]});
		const uint256Tbp5SpY = await VotingrlaynGv.pause.call(uintgJqPT2A, {from: accounts[5]});
	});

	it('test for Voting', async () => {
		const addresse3Q55tD = accounts[0]
		const VotingUkY3ivZ = await Voting.new(addresse3Q55tD, {from: accounts[2]});
		const uintzlYPZa = BigInt("212")
		const addresszDMfmN7 = accounts[3]
		const addressyQxWcR = accounts[0]
		const uintJOvuqN4 = BigInt("309")
		const uint8Upgrwg = await VotingUkY3ivZ.decimals.call({from: accounts[1]});
		const boolTdHLLag = await VotingUkY3ivZ.transferFrom.call(addressyQxWcR, addresszDMfmN7, uintzlYPZa, {from: accounts[5]});
		const uint256iXUAam = await VotingUkY3ivZ.veto.call(uintJOvuqN4, {from: accounts[2]});
		await VotingUkY3ivZ.onRegistryRefresh.call({from: accounts[3]});
		const stringHzRUDkg = await VotingUkY3ivZ.name.call({from: accounts[0]});
		await VotingUkY3ivZ.onlyVotingSystem.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(VotingUkY3ivZ.decimals.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Voting', async () => {
		const addressiGAqmDq = accounts[2]
		const Votingrvou0j = await Voting.new(addressiGAqmDq, {from: accounts[2]});
		const addressVVQg1yz = accounts[2]
		const boolPsw81YG = await Votingrvou0j.isExchangeFactory.call(addressVVQg1yz, {from: accounts[0]});
		await Votingrvou0j.onlyExchangeFactoryOrVotingSystem.call({from: accounts[3]});

		await expect(Votingrvou0j.isExchangeFactory.call(addressVVQg1yz, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Voting', async () => {
		const addressn007upm = accounts[2]
		const VotinguRDSP2k = await Voting.new(addressn007upm, {from: accounts[0]});
		const addressxt2WFV = "0x0000000000000000000000000000000000000001"
		const uintBhcnCRA = BigInt("948")
		const addressH6slIBU = accounts[1]
		await VotinguRDSP2k.renounceOwnership.call({from: accounts[1]});
		const uint256icOfUR0 = await VotinguRDSP2k.balanceOf.call(addressxt2WFV, {from: accounts[4]});
		const addressZksJNWk = await VotinguRDSP2k.burnFrom.call(addressH6slIBU, uintBhcnCRA, {from: accounts[3]});

		await expect(VotinguRDSP2k.renounceOwnership.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Voting', async () => {
		const addressD9bsiQ = accounts[3]
		const VotinghOQe4pT = await Voting.new(addressD9bsiQ, {from: accounts[4]});
		const addressfN5Bi6 = accounts[5]
		const addressAE9eIOa = accounts[1]
		const addressGQefXSw = accounts[3]
		const boolgI4fkBE = await VotinghOQe4pT.isVotingSystem.call(addressfN5Bi6, {from: accounts[2]});
		await VotinghOQe4pT.onlyExchange.call({from: accounts[2]});
		const uint256W0mzzBZ = await VotinghOQe4pT.allowance.call(addressGQefXSw, addressAE9eIOa, {from: accounts[0]});
		await VotinghOQe4pT.renounceMinter.call({from: accounts[0]});

		await expect(VotinghOQe4pT.isVotingSystem.call(addressfN5Bi6, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Voting', async () => {
		const VotingmwQSey3 = await Voting.new({from: accounts[2]});
		await VotingmwQSey3.onRegistryRefresh.call({from: accounts[0]});
		await VotingmwQSey3.onlyOwner.call({from: accounts[0]});
		await VotingmwQSey3.requiresWalletAcccess.call({from: accounts[1]});
	});

	it('test for Voting', async () => {
		const VotingVEiTkv = await Voting.new({from: accounts[5]});
		const addressuVHKxD = accounts[2]
		const boolAhObK8t = true
		const uintan8FmtO = BigInt("1295")
		const boolmEJuEMT = await VotingVEiTkv.isExchangeFactory.call(addressuVHKxD, {from: accounts[5]});
		await VotingVEiTkv.onlyVotingSystem.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256e0lfsNT = await VotingVEiTkv.vote.call(uintan8FmtO, boolAhObK8t, {from: accounts[3]});
		await VotingVEiTkv.onlyExchangeFactoryOrVotingSystem.call({from: accounts[0]});
	});

	it('test for Voting', async () => {
		const addressBDzZsYz = accounts[0]
		const VotingUkY3ivZ = await Voting.new(addressBDzZsYz, {from: accounts[2]});
		const uintJH9ZVAf = BigInt("759")
		const uintzQCTT6C = BigInt("212")
		const addressGhj1z27 = accounts[3]
		const addressB98XmZY = accounts[0]
		const uintTvp7guw = BigInt("289")
		const uint256l3dLMx = await VotingUkY3ivZ.resolve.call(uintJH9ZVAf, {from: accounts[0]});
		const uint8Upgrwg = await VotingUkY3ivZ.decimals.call({from: accounts[1]});
		const boolTdHLLag = await VotingUkY3ivZ.transferFrom.call(addressB98XmZY, addressGhj1z27, uintzQCTT6C, {from: accounts[5]});
		const uint256iXUAam = await VotingUkY3ivZ.veto.call(uintTvp7guw, {from: accounts[2]});
		await VotingUkY3ivZ.onRegistryRefresh.call({from: accounts[3]});
		const stringHzRUDkg = await VotingUkY3ivZ.name.call({from: accounts[0]});
		await VotingUkY3ivZ.onlyVotingSystem.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(VotingUkY3ivZ.resolve.call(uintJH9ZVAf, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})