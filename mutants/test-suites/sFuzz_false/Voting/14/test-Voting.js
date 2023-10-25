const Voting = artifacts.require("Voting");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Voting', (accounts) => {
	it('test for Voting', async () => {
		const addressaNsQ0aY = accounts[2]
		const VotingQmuPL5g = await Voting.new(addressaNsQ0aY, {from: accounts[3]});
		const uintVcdN5tI = BigInt("1373")
		const addressnAVsoG8 = accounts[1]
		const addresstk2GC8Z = accounts[3]
		await VotingQmuPL5g.renounceMinter.call({from: "0x0000000000000000000000000000000000000001"});
		const boolHQemBaW = await VotingQmuPL5g.transferFrom.call(addresstk2GC8Z, addressnAVsoG8, uintVcdN5tI, {from: "0x0000000000000000000000000000000000000001"});
		await VotingQmuPL5g.renounceOwnership.call({from: accounts[4]});
	});

	it('test for Voting', async () => {
		const VotinguHa9W1j = await Voting.new({from: accounts[4]});
		const uintuZCcJB0 = BigInt("103")
		const addressr0IeHhd = accounts[4]
		const addressBdR3wye = "0x0000000000000000000000000000000000000001"
		const addressGFbnbtJ = accounts[5]
		const uint256e1ElanX = await VotinguHa9W1j.balanceOfAt.call(addressr0IeHhd, uintuZCcJB0, {from: accounts[3]});
		const addressU2xnw18 = await VotinguHa9W1j.ownableUpgrade.call(addressBdR3wye, {from: accounts[5]});
		const boolFKKbUHL = await VotinguHa9W1j.isValidOracleAddress.call(addressGFbnbtJ, {from: accounts[3]});
	});

	it('test for Voting', async () => {
		const addressUbCQ1vY = accounts[2]
		const Voting7JVdQZ = await Voting.new(addressUbCQ1vY, {from: accounts[2]});
		const addressQ8tNgqg = accounts[3]
		const addressRsQtQZ2 = accounts[1]
		const addressBjiMAQQ = await Voting7JVdQZ.transferOwnership.call(addressQ8tNgqg, {from: accounts[0]});
		const boolS1EYJGh = await Voting7JVdQZ.isVotingSystem.call(addressRsQtQZ2, {from: accounts[1]});
		const addressq7hzVJJ = await Voting7JVdQZ.getRegistryAddress.call({from: accounts[1]});
	});

	it('test for Voting', async () => {
		const addressfaMA24z = accounts[3]
		const VotingR7XZdGN = await Voting.new(addressfaMA24z, {from: "0x0000000000000000000000000000000000000001"});
		const addressAGcpIE = accounts[4]
		const addresskUTRCJc = accounts[0]
		const uintfhJzqa = BigInt("537")
		const boolhqUswVl = await VotingR7XZdGN.isValidStamperAddress.call(addressAGcpIE, {from: accounts[3]});
		await VotingR7XZdGN.onlyMinter.call({from: accounts[0]});
		await VotingR7XZdGN.onlyMessageProcessor.call({from: accounts[5]});
		const addressMLEhz6F = await VotingR7XZdGN.addMinter.call(addresskUTRCJc, {from: accounts[0]});
		const uint256uGPmfOD = await VotingR7XZdGN.totalSupplyAt.call(uintfhJzqa, {from: accounts[4]});
		await VotingR7XZdGN.nonReentrant.call({from: accounts[2]});
	});

	it('test for Voting', async () => {
		const addressw6WooaG = accounts[4]
		const VotinglX3fzhB = await Voting.new(addressw6WooaG, {from: accounts[1]});
		const addressANb971 = accounts[0]
		const addressJ4w2Ft = "0x0000000000000000000000000000000000000001"
		const boolOmTGjvt = await VotinglX3fzhB.isExchangeFactory.call(addressANb971, {from: accounts[4]});
		const addressoGcrb7 = await VotinglX3fzhB.getRegistryAddress.call({from: accounts[3]});
		await VotinglX3fzhB.onlyMessageProcessor.call({from: accounts[0]});
		await VotinglX3fzhB.onlyVotingSystem.call({from: accounts[4]});
		const addressQAlpGkm = await VotinglX3fzhB.transferOwnership.call(addressJ4w2Ft, {from: accounts[3]});
		await VotinglX3fzhB.renounceOwnership.call({from: accounts[1]});
	});

	it('test for Voting', async () => {
		const addressbRpNari = accounts[1]
		const VotingwXEAT2Y = await Voting.new(addressbRpNari, {from: accounts[3]});
		const uintt7vMua = BigInt("1651")
		const uintpdYXpN = BigInt("1046")
		const addressxzwc3xu = "0x0000000000000000000000000000000000000001"
		const uint256ksERkAK = await VotingwXEAT2Y.pause.call(uintt7vMua, {from: accounts[3]});
		await VotingwXEAT2Y.onlyMinter.call({from: accounts[2]});
		const boolbZxxdRO = await VotingwXEAT2Y.transfer.call(addressxzwc3xu, uintpdYXpN, {from: accounts[3]});
		await VotingwXEAT2Y.requiresLiquidityTokenSnapshotAccess.call({from: accounts[2]});
		const stringNJaXghX = await VotingwXEAT2Y.symbol.call({from: accounts[0]});
	});

	it('test for Voting', async () => {
		const VotingPCXCOd0 = await Voting.new({from: accounts[2]});
		const uintPFgHDRD = BigInt("456")
		const addressLnWNgAb = accounts[3]
		const address2v4l6e = await VotingPCXCOd0.owner.call({from: accounts[2]});
		const uint256ebNJYl = await VotingPCXCOd0.balanceOfAt.call(addressLnWNgAb, uintPFgHDRD, {from: "0x0000000000000000000000000000000000000001"});
		await VotingPCXCOd0.onlyExchange.call({from: accounts[4]});
	});

	it('test for Voting', async () => {
		const addresssImy7hM = accounts[1]
		const VotingXt5mEfP = await Voting.new(addresssImy7hM, {from: accounts[3]});
		const uintSz5zJes = BigInt("701")
		const uintgNQv3Ik = BigInt("2008")
		const addressfSEp7wH = accounts[0]
		const uint256Is9KI9B = await VotingXt5mEfP.approve.call(uintSz5zJes, {from: accounts[3]});
		await VotingXt5mEfP.onlyExchangeFactory.call({from: accounts[2]});
		const boolEDtk30z = await VotingXt5mEfP.transfer.call(addressfSEp7wH, uintgNQv3Ik, {from: accounts[0]});
		await VotingXt5mEfP.onlyMinter.call({from: accounts[0]});
	});

	it('test for Voting', async () => {
		const addresstYpWRoT = accounts[0]
		const VotingYy9r5HG = await Voting.new(addresstYpWRoT, {from: accounts[2]});
		const addressKdYR7XJ = accounts[1]
		const uintDRnqVFq = BigInt("1780")
		const addressoYX0aHS = accounts[1]
		const uintW3B58aZ = BigInt("2043")
		const boolUipfBq = true
		const uintCJiy3z5 = BigInt("1691")
		const boolfibrzVY = await VotingYy9r5HG.isValidStamperAddress.call(addressKdYR7XJ, {from: accounts[4]});
		const boolGb8cryT = await VotingYy9r5HG.decreaseAllowance.call(addressoYX0aHS, uintDRnqVFq, {from: accounts[4]});
		const uint256ND1b5ea = await VotingYy9r5HG.totalSupplyAt.call(uintW3B58aZ, {from: accounts[3]});
		const uint256hscqen = await VotingYy9r5HG.vote.call(uintCJiy3z5, boolUipfBq, {from: accounts[4]});
	});

	it('test for Voting', async () => {
		const addressK7SrJLU = accounts[1]
		const VotingXt5mEfP = await Voting.new(addressK7SrJLU, {from: accounts[3]});
		const addressS7CuieS = accounts[4]
		const uintBRXNovn = BigInt("113")
		const uintQWez48p = BigInt("650")
		const addressTCGsT0 = accounts[4]
		const boolYgWUJtW = await VotingXt5mEfP.didAddressVote.call(uintBRXNovn, addressS7CuieS, {from: accounts[4]});
		await VotingXt5mEfP.onlyOracle.call({from: accounts[0]});
		await VotingXt5mEfP.requiresLiquidityTokenSnapshotAccess.call({from: accounts[1]});
		await VotingXt5mEfP.onlyExchangeFactory.call({from: accounts[2]});
		const boolihexQur = await VotingXt5mEfP.transfer.call(addressTCGsT0, uintQWez48p, {from: accounts[4]});
	});

	it('test for Voting', async () => {
		const addressVxdMnYt = accounts[1]
		const VotingXt5mEfP = await Voting.new(addressVxdMnYt, {from: accounts[3]});
		const boolmlkNA6K = true
		const uintih9il0R = BigInt("74")
		const addresscrnc4PH = accounts[3]
		const uint256dUq0j70 = await VotingXt5mEfP.vote.call(uintih9il0R, boolmlkNA6K, {from: accounts[4]});
		const addressF6ScgK3 = await VotingXt5mEfP.updateRegistry.call(addresscrnc4PH, {from: accounts[4]});
		const boolOJgZYLb = await VotingXt5mEfP.isOwner.call({from: accounts[4]});
		await VotingXt5mEfP.onlyExchangeFactory.call({from: accounts[2]});
	});

	it('test for Voting', async () => {
		const addresswYvsP6g = accounts[1]
		const VotingXt5mEfP = await Voting.new(addresswYvsP6g, {from: accounts[3]});
		const addressJiKMqbd = accounts[3]
		const boolyvxUcm = await VotingXt5mEfP.isVotingSystem.call(addressJiKMqbd, {from: accounts[4]});
		await VotingXt5mEfP.onlyExchangeFactory.call({from: accounts[2]});
	});

	it('test for Voting', async () => {
		const addressnU9BD0I = accounts[1]
		const VotingXt5mEfP = await Voting.new(addressnU9BD0I, {from: accounts[3]});
		const stringwKBEkn = "tuabi3etwBNKVH5Cgv3NCBdwwlOKWF"
		const stringD1KgvB4 = "GBdYJfxL3dbniL6auSDJQqkgYDWr4ieEugu1HqAdSQQ6lC"
		const stringqmOsYBu = "dlkswP"
		const byteXrM72I = "0x1c0e02141f13"
		const addressvkbZ08 = accounts[5]
		const 
kaiNvhZ = await VotingXt5mEfP.createProposal.call(addressvkbZ08, byteXrM72I, stringqmOsYBu, stringD1KgvB4, stringwKBEkn, {from: accounts[2]});
		await VotingXt5mEfP.onlyExchangeFactory.call({from: accounts[2]});
	});

	it('test for Voting', async () => {
		const VotingrQWIW1 = await Voting.new({from: accounts[1]});
		const uintnHl2VR = BigInt("1609")
		const addressnu1dE7U = accounts[1]
		const uintkBeyiIH = BigInt("353")
		const addressjBE7bh = accounts[0]
		const addressmLtPJse = accounts[2]
		const uint256wP06MRT = await VotingrQWIW1.resolve.call(uintnHl2VR, {from: accounts[1]});
		const address7RjJAI = await VotingrQWIW1.updateRegistry.call(addressnu1dE7U, {from: accounts[4]});
		await VotingrQWIW1.renounceMinter.call({from: accounts[1]});
		const boollQkxmLL = await VotingrQWIW1.transferFrom.call(addressmLtPJse, addressjBE7bh, uintkBeyiIH, {from: accounts[0]});
		const uint256DlhiFdp = await VotingrQWIW1.snapshot.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for Voting', async () => {
		const addressh6Eq0c2 = accounts[1]
		const VotingXt5mEfP = await Voting.new(addressh6Eq0c2, {from: accounts[3]});
		const addresswHolN3C = accounts[4]
		const addressE9MOT4Z = await VotingXt5mEfP.owner.call({from: accounts[2]});
		const boolyvxUcm = await VotingXt5mEfP.isVotingSystem.call(addresswHolN3C, {from: accounts[4]});
	});

	it('test for Voting', async () => {
		const addressczpkaZ = accounts[0]
		const VotinghcQmkv7 = await Voting.new(addressczpkaZ, {from: accounts[5]});
		const uintdLutZRr = BigInt("1911")
		const addressdDZBOb = "0x0000000000000000000000000000000000000001"
		const uint256yOeXpiT = await VotinghcQmkv7.resolve.call(uintdLutZRr, {from: accounts[2]});
		const uint256QtbspzC = await VotinghcQmkv7.totalSupply.call({from: accounts[1]});
		await VotinghcQmkv7.nonReentrant.call({from: accounts[5]});
		await VotinghcQmkv7.renounceOwnership.call({from: accounts[1]});
		const uint256T1YWYKi = await VotinghcQmkv7.balanceOf.call(addressdDZBOb, {from: accounts[4]});
	});

	it('test for Voting', async () => {
		const addressd5eoMRI = accounts[1]
		const VotingXt5mEfP = await Voting.new(addressd5eoMRI, {from: accounts[3]});
		const addressECafrDB = "0x0000000000000000000000000000000000000001"
		const uintOFkrUJb = BigInt("1225")
		const addressf6gYI3h = accounts[2]
		const booluzRwANo = await VotingXt5mEfP.isValidVerifierAddress.call(addressECafrDB, {from: accounts[4]});
		const booleUSrxlW = await VotingXt5mEfP.mint.call(addressf6gYI3h, uintOFkrUJb, {from: accounts[5]});
		await VotingXt5mEfP.onlyExchangeFactory.call({from: accounts[2]});
	});

	it('test for Voting', async () => {
		const VotingP6rSBhB = await Voting.new({from: accounts[5]});
		const uintaADrBwU = BigInt("680")
		const addressC4damhp = accounts[0]
		const uintvNBkZwR = BigInt("443")
		const addressggOwb9j = accounts[1]
		const uintlKBRqpH = BigInt("513")
		const addresscu8MfLw = accounts[5]
		const addressdjqYLgf = await VotingP6rSBhB.burnFrom.call(addressC4damhp, uintaADrBwU, {from: accounts[3]});
		await VotingP6rSBhB.onlyExchangeFactory.call({from: accounts[1]});
		const boolODBWtL5 = await VotingP6rSBhB.transfer.call(addressggOwb9j, uintvNBkZwR, {from: accounts[4]});
		const boolzftInlU = await VotingP6rSBhB.transfer.call(addresscu8MfLw, uintlKBRqpH, {from: accounts[0]});
		await VotingP6rSBhB.onlyExchangeFactoryOrVotingSystem.call({from: accounts[0]});
	});

	it('test for Voting', async () => {
		const addressBqg51u7 = accounts[1]
		const VotingXt5mEfP = await Voting.new(addressBqg51u7, {from: accounts[3]});
		const uintXHUCydg = BigInt("1256")
		const addressw66hZXF = "0x0000000000000000000000000000000000000001"
		const addressRBodFs5 = accounts[1]
		const addresshTGAE5P = accounts[2]
		const boolUjHqNpQ = await VotingXt5mEfP.approve.call(addressw66hZXF, uintXHUCydg, {from: accounts[0]});
		const uint2564pieiU = await VotingXt5mEfP.balanceOf.call(addressRBodFs5, {from: "0x0000000000000000000000000000000000000001"});
		const boolyvxUcm = await VotingXt5mEfP.isVotingSystem.call(addresshTGAE5P, {from: accounts[4]});
	});

	it('test for Voting', async () => {
		const addressjBzIN5 = accounts[1]
		const VotingXt5mEfP = await Voting.new(addressjBzIN5, {from: accounts[3]});
		const addresszMDa0pm = accounts[2]
		await VotingXt5mEfP.renounceOwnership.call({from: accounts[3]});
		const boolyvxUcm = await VotingXt5mEfP.isVotingSystem.call(addresszMDa0pm, {from: accounts[4]});
	});
})