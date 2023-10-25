const Voting = artifacts.require("Voting");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Voting', (accounts) => {
	it('test for Voting', async () => {
		const addressT75qvfD = "0x0000000000000000000000000000000000000001"
		const VotingnN4ebIc = await Voting.new(addressT75qvfD, {from: accounts[5]});
		const addressouXYb5j = accounts[3]
		const addressSlhp0gk = await VotingnN4ebIc.owner.call({from: accounts[0]});
		await VotingnN4ebIc.onlyMessageProcessor.call({from: accounts[5]});
		const stringGUfW6UM = await VotingnN4ebIc.symbol.call({from: accounts[0]});
		const addressxXiy6Gv = await VotingnN4ebIc.updateRegistry.call(addressouXYb5j, {from: accounts[0]});
	});

	it('test for Voting', async () => {
		const addressctfYXEy = "0x0000000000000000000000000000000000000001"
		const VotingoxbzMak = await Voting.new(addressctfYXEy, {from: accounts[1]});
		const addressjm7emNV = accounts[0]
		const boolUflmkAx = false
		const uintQkqIYYs = BigInt("803")
		const boolEMkO8k = await VotingoxbzMak.isValidStamperAddress.call(addressjm7emNV, {from: accounts[3]});
		const uint256K9H5NQJ = await VotingoxbzMak.vote.call(uintQkqIYYs, boolUflmkAx, {from: accounts[1]});
	});

	it('test for Voting', async () => {
		const addressVS8Rhs = accounts[1]
		const VotingnbmuZ8F = await Voting.new(addressVS8Rhs, {from: accounts[4]});
		const addressokTh4Y2 = accounts[0]
		const uintsK47lB4 = BigInt("1789")
		const uintCUjO1Vg = BigInt("1954")
		const boolmmCJpw = await VotingnbmuZ8F.isValidOracleAddress.call(addressokTh4Y2, {from: accounts[1]});
		const uint256oZOCMbo = await VotingnbmuZ8F.burn.call(uintsK47lB4, {from: "0x0000000000000000000000000000000000000001"});
		const uint256yCmCBWA = await VotingnbmuZ8F.approve.call(uintCUjO1Vg, {from: accounts[4]});
		const uint8CBTrDA = await VotingnbmuZ8F.decimals.call({from: accounts[3]});
	});

	it('test for Voting', async () => {
		const addressDaKwVZa = accounts[1]
		const VotingCcgbMH = await Voting.new(addressDaKwVZa, {from: accounts[5]});
		const uintWB4B82M = BigInt("1135")
		const addressesxl09G = accounts[2]
		const addressPdTu3kF = "0x0000000000000000000000000000000000000001"
		const uint256lK3pJ2r = await VotingCcgbMH.resolve.call(uintWB4B82M, {from: accounts[4]});
		const addresshPbc2AA = await VotingCcgbMH.addMinter.call(addressesxl09G, {from: accounts[3]});
		const address9NFK0I = await VotingCcgbMH.transferOwnership.call(addressPdTu3kF, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for Voting', async () => {
		const VotingLHR82k = await Voting.new({from: accounts[4]});
		const addressp1K3IX6 = accounts[2]
		const addressEhZIbK0 = accounts[2]
		await VotingLHR82k.onlyExchange.call({from: accounts[0]});
		const addressv24ZQn6 = await VotingLHR82k.addMinter.call(addressp1K3IX6, {from: accounts[2]});
		const boolskghbtS = await VotingLHR82k.isVotingSystem.call(addressEhZIbK0, {from: accounts[1]});
	});

	it('test for Voting', async () => {
		const addressEIYZqKH = accounts[1]
		const VotingPLP3fgI = await Voting.new(addressEIYZqKH, {from: "0x0000000000000000000000000000000000000001"});
		const stringDyzZ1wl = "HBHkPm"
		const stringELji0y6 = "KkZNs5FvwX4qcmGLqcaL3BUWqLQ2GtYuxWMYHLJcw2"
		const stringC2Xo8WG = "WEdY1werHMrC5OlBTmWtQ9h5acQtQJzx7rQtqyTuLew4Ky3HFRPBJnBhFqd0vUpLyKq3fpPPoTMHdTFsOEPlVo"
		const byteAXGiaYj = "0x11070917151802011e030f02"
		const addressacbzAkx = accounts[2]
		await VotingPLP3fgI.requiresWalletAcccess.call({from: accounts[5]});
		const 
QevnbFp = await VotingPLP3fgI.createProposal.call(addressacbzAkx, byteAXGiaYj, stringC2Xo8WG, stringELji0y6, stringDyzZ1wl, {from: accounts[1]});
		const boolDgQRn8l = await VotingPLP3fgI.isOwner.call({from: accounts[5]});
		await VotingPLP3fgI.onlyExchangeFactoryOrVotingSystem.call({from: accounts[3]});
		await VotingPLP3fgI.onlyVotingSystem.call({from: accounts[4]});
	});

	it('test for Voting', async () => {
		const addressnZV8iqf = accounts[1]
		const VotingCcgbMH = await Voting.new(addressnZV8iqf, {from: accounts[5]});
		const addressVLEFaAJ = accounts[3]
		const uintJBHAfh = BigInt("1135")
		const addressjGrRHbv = accounts[3]
		const addressdqATgpA = accounts[1]
		const address2se9ja = await VotingCcgbMH.ownableUpgrade.call(addressVLEFaAJ, {from: accounts[4]});
		const uint256lK3pJ2r = await VotingCcgbMH.resolve.call(uintJBHAfh, {from: accounts[4]});
		const uint8n1k2pJ = await VotingCcgbMH.decimals.call({from: accounts[1]});
		const addresshPbc2AA = await VotingCcgbMH.addMinter.call(addressjGrRHbv, {from: accounts[3]});
		const address9NFK0I = await VotingCcgbMH.transferOwnership.call(addressdqATgpA, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for Voting', async () => {
		const Votingt9ihwVZ = await Voting.new({from: accounts[1]});
		const uintiY1Y72 = BigInt("222")
		const addressPMjrAe = accounts[2]
		const addressU5l26Cg = accounts[1]
		await Votingt9ihwVZ.nonReentrant.call({from: accounts[5]});
		const boollSLg9WY = await Votingt9ihwVZ.mint.call(addressPMjrAe, uintiY1Y72, {from: accounts[0]});
		const uint256tXLEbR = await Votingt9ihwVZ.balanceOf.call(addressU5l26Cg, {from: accounts[4]});
	});

	it('test for Voting', async () => {
		const Votingke5Khcx = await Voting.new({from: accounts[5]});
		const uintn5kiN8I = BigInt("1654")
		const uint1uZQsZ = BigInt("250")
		const addressCsh12ky = accounts[1]
		const uintHPsQl6C = BigInt("1294")
		await Votingke5Khcx.onlyMessageProcessor.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256XsLQbNp = await Votingke5Khcx.totalSupplyAt.call(uintn5kiN8I, {from: accounts[4]});
		const uint256g1xp166 = await Votingke5Khcx.totalSupplyAt.call(uint1uZQsZ, {from: accounts[5]});
		const addresssKDZCYO = await Votingke5Khcx.updateRegistry.call(addressCsh12ky, {from: accounts[3]});
		const boolG6mXhJt = await Votingke5Khcx.isOwner.call({from: accounts[1]});
		const uint256I9o1pn = await Votingke5Khcx.pause.call(uintHPsQl6C, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for Voting', async () => {
		const Votingk2SV5GO = await Voting.new({from: accounts[0]});
		const uintwHLun0 = BigInt("1977")
		const addressu3bn6PW = accounts[1]
		const boolwq2tTk = false
		const uint7PiN8i = BigInt("1517")
		const uintpSBp0lJ = BigInt("2024")
		const addresss7iG2lk = accounts[1]
		const addressQPMl0Ce = accounts[0]
		await Votingk2SV5GO.onlyExchangeFactoryOrVotingSystem.call({from: accounts[1]});
		await Votingk2SV5GO.requiresWalletAcccess.call({from: accounts[1]});
		const uint256gvkSOut = await Votingk2SV5GO.balanceOfAt.call(addressu3bn6PW, uintwHLun0, {from: accounts[5]});
		const uint256qZ8BPAK = await Votingk2SV5GO.vote.call(uint7PiN8i, boolwq2tTk, {from: accounts[3]});
		const boolZtjWG0Q = await Votingk2SV5GO.transferFrom.call(addressQPMl0Ce, addresss7iG2lk, uintpSBp0lJ, {from: accounts[3]});
	});

	it('test for Voting', async () => {
		const addressmB9bhB = "0x0000000000000000000000000000000000000001"
		const VotingoxbzMak = await Voting.new(addressmB9bhB, {from: accounts[1]});
		const addressApwkilB = accounts[3]
		const uintB8RPhYr = BigInt("1502")
		const addresssy3U1wI = accounts[0]
		const addressMDIvEc = accounts[2]
		const addressXjOhOqV = accounts[0]
		const boolbyr9Wx = await VotingoxbzMak.didAddressVote.call(uintB8RPhYr, addressApwkilB, {from: accounts[4]});
		const uint256gjsUrjJ = await VotingoxbzMak.allowance.call(addressMDIvEc, addresssy3U1wI, {from: accounts[3]});
		const boolEMkO8k = await VotingoxbzMak.isValidStamperAddress.call(addressXjOhOqV, {from: accounts[3]});
	});

	it('test for Voting', async () => {
		const VotingDVTb1x6 = await Voting.new({from: accounts[3]});
		const addressNv7ERfH = accounts[1]
		const uintkDg9km = BigInt("1960")
		const addressNxotj2F = accounts[3]
		const stringHrHjLug = "WoM6HxNunE1hp9XaJ1284tth5H6pTya3vU1uTDnneP6TN2ArVMxl"
		const stringltP2mf = "GStOV3kgJ0eMPQdyqcD2FrnV03lnP6CuYoulmtiJOMTqeh4qreHGPvDijAUpHH5DUwq0GP6vJbOfoMyW"
		const stringJlGSbq = "GmFXWGL5CElSGfRwYMu0t5rWsHEsp5edh4hJtwHejk4yr8qKLH"
		const byteKmCG5OI = "0x191b200c141a111e041e1a0f1c0710031a0c0f16180a061a0c1e04121b"
		const addressDx26N0n = "0x0000000000000000000000000000000000000001"
		const uintJeyNSiI = BigInt("1843")
		const addressFxuDVph = accounts[4]
		const addressYWyZwjf = accounts[3]
		await VotingDVTb1x6.onlyVotingSystem.call({from: accounts[0]});
		const boolfAhkPZg = await VotingDVTb1x6.isValidOracleAddress.call(addressNv7ERfH, {from: "0x0000000000000000000000000000000000000001"});
		const boolqe4qgdv = await VotingDVTb1x6.decreaseAllowance.call(addressNxotj2F, uintkDg9km, {from: "0x0000000000000000000000000000000000000001"});
		const 
iVr3rJy = await VotingDVTb1x6.createProposal.call(addressDx26N0n, byteKmCG5OI, stringJlGSbq, stringltP2mf, stringHrHjLug, {from: accounts[2]});
		const boolOVrVF5r = await VotingDVTb1x6.decreaseAllowance.call(addressFxuDVph, uintJeyNSiI, {from: accounts[0]});
		const boolDYpzE4r = await VotingDVTb1x6.isVotingSystem.call(addressYWyZwjf, {from: accounts[4]});
	});

	it('test for Voting', async () => {
		const addressdYtwd3O = "0x0000000000000000000000000000000000000001"
		const VotingoxbzMak = await Voting.new(addressdYtwd3O, {from: accounts[1]});
		const addressGHCrAYf = accounts[3]
		const addressrWKXHq7 = accounts[1]
		const boolUqfZw0q = await VotingoxbzMak.isValidVerifierAddress.call(addressGHCrAYf, {from: accounts[1]});
		await VotingoxbzMak.onlyExchange.call({from: accounts[4]});
		const boolEMkO8k = await VotingoxbzMak.isValidStamperAddress.call(addressrWKXHq7, {from: accounts[3]});
	});

	it('test for Voting', async () => {
		const addressBDaZee7 = accounts[1]
		const VotingCcgbMH = await Voting.new(addressBDaZee7, {from: accounts[5]});
		const stringJG1htYg = "8tVGSwEna2GYUHD6eIYyUs6c4bsakq9Aai6RwQwQqT8bgpsHzDi54wBfgWyLG91H1F11ljBo0cOqKN4qGU61GthiwQl7Ppif"
		const stringGtDn41T = "XJXn1vUy9MtEHAlJYwd5oDrQugxPLhRduGGcdUjJcQRYy3XpGTugh1Iyr5RaEHllVzeIaxr65pNwTpCuxdkOc2eX"
		const stringX6wtQc5 = "49lTtSuMJp6BsRS4kQGYvoCpfVkQ"
		const bytesT9Nor9 = "0x04161d1f0b2020150307160611101e151d01081802"
		const addresskN0idtc = accounts[1]
		const addressSUD8WpW = accounts[0]
		const uintAteZZzB = BigInt("282")
		const 
vHcHw4b = await VotingCcgbMH.createProposal.call(addresskN0idtc, bytesT9Nor9, stringX6wtQc5, stringGtDn41T, stringJG1htYg, {from: "0x0000000000000000000000000000000000000001"});
		const addressGY6S4xY = await VotingCcgbMH.addMinter.call(addressSUD8WpW, {from: "0x0000000000000000000000000000000000000001"});
		const uint256lK3pJ2r = await VotingCcgbMH.resolve.call(uintAteZZzB, {from: accounts[4]});
	});

	it('test for Voting', async () => {
		const addressanfxOC = accounts[1]
		const VotingCcgbMH = await Voting.new(addressanfxOC, {from: accounts[5]});
		const uintLC5Yzyh = BigInt("1474")
		const uintPE9VGb9 = BigInt("265")
		const uint256WZbF8xR = await VotingCcgbMH.pause.call(uintLC5Yzyh, {from: accounts[0]});
		const uint256lK3pJ2r = await VotingCcgbMH.resolve.call(uintPE9VGb9, {from: accounts[4]});
		await VotingCcgbMH.onlyRegistry.call({from: accounts[2]});
	});

	it('test for Voting', async () => {
		const VotingbFfMkTb = await Voting.new({from: "0x0000000000000000000000000000000000000001"});
		const addressmGVaOlh = accounts[0]
		const addressKv6v2AF = accounts[2]
		const addressSvcL0vB = accounts[2]
		const uintmh8UqP0 = BigInt("1895")
		const addressn18LTrX = accounts[2]
		await VotingbFfMkTb.onlyExchange.call({from: accounts[2]});
		await VotingbFfMkTb.onlyMinter.call({from: accounts[2]});
		const addressK9fF72f = await VotingbFfMkTb.updateRegistry.call(addressmGVaOlh, {from: accounts[4]});
		const addressV4Cihsx = await VotingbFfMkTb.transferOwnership.call(addressKv6v2AF, {from: "0x0000000000000000000000000000000000000001"});
		const boolU1U7wpb = await VotingbFfMkTb.isValidStamperAddress.call(addressSvcL0vB, {from: accounts[3]});
		const boolr6IOMz = await VotingbFfMkTb.transfer.call(addressn18LTrX, uintmh8UqP0, {from: accounts[2]});
	});

	it('test for Voting', async () => {
		const addressMV0VDYv = "0x0000000000000000000000000000000000000001"
		const VotingoxbzMak = await Voting.new(addressMV0VDYv, {from: accounts[1]});
		const addressusQdRpG = "0x00000000000000000000000000000000000000-1"
		const uintbETOEzV = BigInt("1970")
		const boolEMkO8k = await VotingoxbzMak.isValidStamperAddress.call(addressusQdRpG, {from: accounts[3]});
		const uint256cph2M1a = await VotingoxbzMak.veto.call(uintbETOEzV, {from: accounts[2]});
	});

	it('test for Voting', async () => {
		const VotingGsUmJjl = await Voting.new({from: accounts[2]});
		const addressXRR9c0e = "0x0000000000000000000000000000000000000001"
		const uintNwgqDoC = BigInt("1353")
		const addresstlKCbO = accounts[1]
		const addressoECQLNe = "0x0000000000000000000000000000000000000001"
		const addressy8iq9tC = await VotingGsUmJjl.updateRegistry.call(addressXRR9c0e, {from: accounts[0]});
		const uint256ujGw7Ne = await VotingGsUmJjl.resolve.call(uintNwgqDoC, {from: accounts[2]});
		const boolh4wjTHD = await VotingGsUmJjl.isExchangeFactory.call(addresstlKCbO, {from: accounts[0]});
		const boolPbRDn08 = await VotingGsUmJjl.isOwner.call({from: accounts[4]});
		await VotingGsUmJjl.onlyMinter.call({from: accounts[3]});
		const addressvQF8tk = await VotingGsUmJjl.updateRegistry.call(addressoECQLNe, {from: accounts[3]});
	});
})