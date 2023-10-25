const Voting = artifacts.require("Voting");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Voting', (accounts) => {
	it('test for Voting', async () => {
		const VotingowjNsXf = await Voting.new({from: accounts[5]});
		const boolYaLATGY = false
		const uint7l7Jlm = BigInt("1916")
		const uintJlsduoP = BigInt("243")
		await VotingowjNsXf.onRegistryRefresh.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256L8hfE3L = await VotingowjNsXf.vote.call(uint7l7Jlm, boolYaLATGY, {from: accounts[1]});
		const uint256j7gByl = await VotingowjNsXf.pause.call(uintJlsduoP, {from: accounts[4]});
		const uint256BrUgW8X = await VotingowjNsXf.snapshot.call({from: "0x0000000000000000000000000000000000000001"});
		await VotingowjNsXf.onRegistryRefresh.call({from: accounts[0]});
	});

	it('test for Voting', async () => {
		const Votingao3DykZ = await Voting.new({from: accounts[3]});
		const addressTfUiUe5 = accounts[2]
		const uint256dDn5qfJ = await Votingao3DykZ.balanceOf.call(addressTfUiUe5, {from: accounts[0]});
		const stringUC5HQIF = await Votingao3DykZ.name.call({from: accounts[5]});
		await Votingao3DykZ.onlyOwner.call({from: accounts[5]});
	});

	it('test for Voting', async () => {
		const VotingYw2HEu9 = await Voting.new({from: accounts[1]});
		const uintm7rnKMP = BigInt("1285")
		const address3lVBJR = accounts[5]
		const boolLqFL8F3 = await VotingYw2HEu9.approve.call(address3lVBJR, uintm7rnKMP, {from: accounts[4]});
		await VotingYw2HEu9.onlyMessageProcessor.call({from: accounts[5]});
		await VotingYw2HEu9.onlyMinter.call({from: accounts[3]});
		await VotingYw2HEu9.requiresWalletAcccess.call({from: accounts[0]});
	});

	it('test for Voting', async () => {
		const VotingJUTOGLY = await Voting.new({from: accounts[2]});
		const addressgCY0kTx = accounts[4]
		const uintvh3P0Od = BigInt("424")
		const addressedWDWl8 = accounts[2]
		const addressvjEklTO = await VotingJUTOGLY.updateRegistry.call(addressgCY0kTx, {from: "0x0000000000000000000000000000000000000001"});
		await VotingJUTOGLY.renounceOwnership.call({from: accounts[2]});
		const boolaeDwU9A = await VotingJUTOGLY.approve.call(addressedWDWl8, uintvh3P0Od, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for Voting', async () => {
		const addressVmsBm10 = accounts[0]
		const Voting1tgxFq = await Voting.new(addressVmsBm10, {from: accounts[3]});
		const addressKZ4YvX = accounts[3]
		const uintAEszIaD = BigInt("1758")
		const addressvwb61C = "0x0000000000000000000000000000000000000001"
		const uint256G55TYG = await Voting1tgxFq.balanceOf.call(addressKZ4YvX, {from: accounts[1]});
		await Voting1tgxFq.onlyExchangeFactoryOrVotingSystem.call({from: accounts[2]});
		const boolWP38UF5 = await Voting1tgxFq.decreaseAllowance.call(addressvwb61C, uintAEszIaD, {from: accounts[1]});

		await expect(Voting1tgxFq.balanceOf.call(addressKZ4YvX, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Voting', async () => {
		const addressHXfV7aM = accounts[1]
		const VotingVide1oi = await Voting.new(addressHXfV7aM, {from: accounts[5]});
		const addressXJvpDRx = accounts[3]
		const uint3HRXkg = BigInt("41")
		const addressBHVo9TP = accounts[3]
		const boolj7EF65k = await VotingVide1oi.isValidStamperAddress.call(addressXJvpDRx, {from: accounts[1]});
		const boolixqhkEI = await VotingVide1oi.isOwner.call({from: accounts[0]});
		await VotingVide1oi.onlyVotingSystem.call({from: accounts[1]});
		const boolr1monI6 = await VotingVide1oi.transfer.call(addressBHVo9TP, uint3HRXkg, {from: accounts[1]});

		await expect(VotingVide1oi.isValidStamperAddress.call(addressXJvpDRx, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Voting', async () => {
		const VotingLQWBRrt = await Voting.new({from: accounts[4]});
		const uintxhYvAae = BigInt("19")
		const addressR7ReMUS = accounts[1]
		const uintYkvdmYL = BigInt("1837")
		const addresskcSpHT = accounts[1]
		const uintaTSVSmN = BigInt("114")
		const addressNAyvuV0 = accounts[1]
		const addressEqA3KFs = accounts[0]
		await VotingLQWBRrt.onlyOracle.call({from: accounts[1]});
		const uint256abmshNX = await VotingLQWBRrt.totalSupplyAt.call(uintxhYvAae, {from: accounts[4]});
		const addressnaRCge = await VotingLQWBRrt.addMinter.call(addressR7ReMUS, {from: accounts[0]});
		const boolHnO3A8 = await VotingLQWBRrt.decreaseAllowance.call(addresskcSpHT, uintYkvdmYL, {from: accounts[3]});
		const stringUzc4cHJ = await VotingLQWBRrt.symbol.call({from: accounts[1]});
		const boolOrzizKJ = await VotingLQWBRrt.transferFrom.call(addressEqA3KFs, addressNAyvuV0, uintaTSVSmN, {from: accounts[3]});
	});

	it('test for Voting', async () => {
		const addressdzWqNJV = accounts[0]
		const Voting1tgxFq = await Voting.new(addressdzWqNJV, {from: accounts[3]});
		const addressXda9Jl = "0x0000000000000000000000000000000000000001"
		const addressnBNSyQ9 = accounts[3]
		const uintfqdyBn4 = BigInt("1758")
		const addresssSdRSs = "0x0000000000000000000000000000000000000001"
		const uintxr6sKrI = BigInt("1083")
		const addresstlIIRpj = accounts[4]
		const addressboMRzay = await Voting1tgxFq.ownableUpgrade.call(addressXda9Jl, {from: accounts[2]});
		const uint256G55TYG = await Voting1tgxFq.balanceOf.call(addressnBNSyQ9, {from: accounts[1]});
		await Voting1tgxFq.onlyExchangeFactoryOrVotingSystem.call({from: accounts[2]});
		const boolWP38UF5 = await Voting1tgxFq.decreaseAllowance.call(addresssSdRSs, uintfqdyBn4, {from: accounts[1]});
		const boola52MR5E = await Voting1tgxFq.increaseAllowance.call(addresstlIIRpj, uintxr6sKrI, {from: accounts[1]});

		await expect(Voting1tgxFq.ownableUpgrade.call(addressXda9Jl, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Voting', async () => {
		const addressaATi2Ip = accounts[4]
		const VotingC1gDXLH = await Voting.new(addressaATi2Ip, {from: accounts[3]});
		const addressICog5nN = accounts[3]
		const boolluAjCXu = await VotingC1gDXLH.isExchangeFactory.call(addressICog5nN, {from: accounts[0]});
		await VotingC1gDXLH.onlyOracle.call({from: accounts[0]});

		await expect(VotingC1gDXLH.isExchangeFactory.call(addressICog5nN, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Voting', async () => {
		const addressDyKyGYH = accounts[3]
		const VotingPVRIH94 = await Voting.new(addressDyKyGYH, {from: "0x0000000000000000000000000000000000000001"});
		await VotingPVRIH94.renounceMinter.call({from: accounts[4]});
		await VotingPVRIH94.onlyVotingSystem.call({from: accounts[1]});
		await VotingPVRIH94.onlyExchangeFactoryOrVotingSystem.call({from: accounts[4]});
		await VotingPVRIH94.onlyExchange.call({from: accounts[3]});
	});

	it('test for Voting', async () => {
		const addressYzOJcE9 = accounts[4]
		const VotingvSRKou6 = await Voting.new(addressYzOJcE9, {from: accounts[4]});
		const addressyHm4sCX = accounts[4]
		const uintPV0CqIY = BigInt("1257")
		const addressrPczXxF = accounts[4]
		const uintOcZAZez = BigInt("1727")
		const addressIOdCqjX = accounts[1]
		const boolc6gncx6 = await VotingvSRKou6.isValidVerifierAddress.call(addressyHm4sCX, {from: accounts[5]});
		await VotingvSRKou6.onlyMessageProcessor.call({from: accounts[1]});
		const uint256FEg7P2J = await VotingvSRKou6.balanceOfAt.call(addressrPczXxF, uintPV0CqIY, {from: accounts[1]});
		const uint256EqOfvDf = await VotingvSRKou6.balanceOfAt.call(addressIOdCqjX, uintOcZAZez, {from: accounts[5]});

		await expect(VotingvSRKou6.isValidVerifierAddress.call(addressyHm4sCX, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Voting', async () => {
		const addressdiW6DI = accounts[4]
		const VotingWQREaBw = await Voting.new(addressdiW6DI, {from: accounts[1]});
		const uintHs27HQp = BigInt("1329")
		const addresscMJQqZn = accounts[3]
		const uint256U2ijIv5 = await VotingWQREaBw.pause.call(uintHs27HQp, {from: accounts[4]});
		await VotingWQREaBw.onlyMessageProcessor.call({from: accounts[1]});
		await VotingWQREaBw.onlyMinter.call({from: accounts[5]});
		const addressf5WBjkU = await VotingWQREaBw.getRegistryAddress.call({from: accounts[0]});
		const stringyFGg7LL = await VotingWQREaBw.symbol.call({from: accounts[3]});
		const addressq3tvKs3 = await VotingWQREaBw.updateRegistry.call(addresscMJQqZn, {from: accounts[0]});

		await expect(VotingWQREaBw.pause.call(uintHs27HQp, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})