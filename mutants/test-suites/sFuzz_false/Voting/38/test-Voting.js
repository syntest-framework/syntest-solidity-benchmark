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
		const addressvwcHbu = "0x0000000000000000000000000000000000000001"
		const VotingoxbzMak = await Voting.new(addressvwcHbu, {from: accounts[1]});
		const uintvR30z6 = BigInt("446")
		const addressIzrEmiT = "0x0000000000000000000000000000000000000000"
		const addresssBQUQUo = accounts[1]
		const uint256HelAICl = await VotingoxbzMak.pause.call(uintvR30z6, {from: accounts[3]});
		const boolEMkO8k = await VotingoxbzMak.isValidStamperAddress.call(addressIzrEmiT, {from: accounts[3]});
		const boolsU5dVdI = await VotingoxbzMak.isVotingSystem.call(addresssBQUQUo, {from: accounts[4]});
	});

	it('test for Voting', async () => {
		const VotingxIOh4LV = await Voting.new({from: accounts[2]});
		const uintyi10PHz = BigInt("1650")
		const addressUdthUrr = accounts[0]
		const addressZcM55V = accounts[2]
		const uintQYEl6K = BigInt("2039")
		const addressSW1tSpo = accounts[4]
		const boolk73HLaE = await VotingxIOh4LV.approve.call(addressUdthUrr, uintyi10PHz, {from: accounts[3]});
		const addressbgyu9Cl = await VotingxIOh4LV.ownableUpgrade.call(addressZcM55V, {from: accounts[3]});
		await VotingxIOh4LV.nonReentrant.call({from: accounts[0]});
		const boolq16Oltn = await VotingxIOh4LV.decreaseAllowance.call(addressSW1tSpo, uintQYEl6K, {from: accounts[2]});
	});

	it('test for Voting', async () => {
		const addressPBorbG = "0x0000000000000000000000000000000000000001"
		const VotingoxbzMak = await Voting.new(addressPBorbG, {from: accounts[1]});
		const uintHB9x6IB = BigInt("524")
		const addresszqvkEE2 = accounts[4]
		const uintEvNHGXr = BigInt("517")
		const addressWbKHKCE = accounts[2]
		const addressMyGnljD = accounts[0]
		const boolRtzxAur = await VotingoxbzMak.approve.call(addresszqvkEE2, uintHB9x6IB, {from: accounts[1]});
		const boolx0SPNJU = await VotingoxbzMak.approve.call(addressWbKHKCE, uintEvNHGXr, {from: accounts[2]});
		const boolEMkO8k = await VotingoxbzMak.isValidStamperAddress.call(addressMyGnljD, {from: accounts[3]});
	});

	it('test for Voting', async () => {
		const addressATAVOYg = "0x0000000000000000000000000000000000000001"
		const VotingoxbzMak = await Voting.new(addressATAVOYg, {from: accounts[1]});
		const addresskAxr8ha = accounts[0]
		const uintqdfk6SU = BigInt("225")
		const addressWgAbX71 = accounts[0]
		const boolODCDJMH = await VotingoxbzMak.didAddressVote.call(uintqdfk6SU, addresskAxr8ha, {from: accounts[4]});
		const boolEMkO8k = await VotingoxbzMak.isValidStamperAddress.call(addressWgAbX71, {from: accounts[3]});
	});

	it('test for Voting', async () => {
		const addressmKbtXzZ = "0x0000000000000000000000000000000000000001"
		const VotingoxbzMak = await Voting.new(addressmKbtXzZ, {from: accounts[1]});
		const address2jUN6E = accounts[1]
		const addressg5q2dH2 = accounts[1]
		const boolS65Vo7l = await VotingoxbzMak.isVotingSystem.call(address2jUN6E, {from: accounts[1]});
		const boolEMkO8k = await VotingoxbzMak.isValidStamperAddress.call(addressg5q2dH2, {from: accounts[3]});
	});

	it('test for Voting', async () => {
		const addressnZ4oRkr = "0x0000000000000000000000000000000000000001"
		const VotingoxbzMak = await Voting.new(addressnZ4oRkr, {from: accounts[1]});
		const stringjbfiRNh = "GvYD"
		const stringhurab79 = "bzDl5yOQgFNQqtPP20bQSO2bo3VDBVjEO8BjJASPzrKgvaFv9TGq98o2sSQ8jn9VqXJPKQxHsmx7JtRXuCh"
		const stringopDU6HS = "M4Rmx5bqmWyon4MAlhS2q"
		const byteyO3fQFt = "0x0e10091b06031e1a0b191d01070c0b11080e00"
		const address5vYj7L = accounts[3]
		const addressVXgQQd = accounts[5]
		const addressq0kpwJV = accounts[0]
		const addressuCulmSN = accounts[0]
		const 
Gm2jWUl = await VotingoxbzMak.createProposal.call(address5vYj7L, byteyO3fQFt, stringopDU6HS, stringhurab79, stringjbfiRNh, {from: accounts[1]});
		const uint256PfTXZJo = await VotingoxbzMak.allowance.call(addressq0kpwJV, addressVXgQQd, {from: accounts[1]});
		const boolEMkO8k = await VotingoxbzMak.isValidStamperAddress.call(addressuCulmSN, {from: accounts[3]});
	});

	it('test for Voting', async () => {
		const VotingjfpYywS = await Voting.new({from: accounts[3]});
		const uintLntajx = BigInt("887")
		const uintR4glQ7B = BigInt("538")
		const addresslRjrm93 = accounts[4]
		const addresspLACEeM = accounts[3]
		const uintDenGNP4 = BigInt("1896")
		const uint256a4yTQ8m = await VotingjfpYywS.pause.call(uintLntajx, {from: accounts[5]});
		await VotingjfpYywS.onlyOwner.call({from: accounts[1]});
		const booliwXV50z = await VotingjfpYywS.transferFrom.call(addresspLACEeM, addresslRjrm93, uintR4glQ7B, {from: accounts[4]});
		const uint256itwqM9p = await VotingjfpYywS.resolve.call(uintDenGNP4, {from: accounts[3]});
	});

	it('test for Voting', async () => {
		const addressz6Abwww = accounts[4]
		const VotingDpSHDYq = await Voting.new(addressz6Abwww, {from: accounts[1]});
		const addressHggc1f = accounts[1]
		const uintRUCuO3 = BigInt("1247")
		const uintZefosqt = BigInt("79")
		const boolB5m2fU8 = await VotingDpSHDYq.didAddressVote.call(uintRUCuO3, addressHggc1f, {from: accounts[5]});
		const uint256xzBzJs = await VotingDpSHDYq.veto.call(uintZefosqt, {from: accounts[1]});
		const addressnq26tQW = await VotingDpSHDYq.getRegistryAddress.call({from: accounts[2]});
	});

	it('test for Voting', async () => {
		const addressTGrCuqO = "0x0000000000000000000000000000000000000001"
		const VotingoxbzMak = await Voting.new(addressTGrCuqO, {from: accounts[1]});
		const uintNL5AC7s = BigInt("1024")
		const addressA0FdsVB = accounts[1]
		const uint256e07bMvN = await VotingoxbzMak.approve.call(uintNL5AC7s, {from: accounts[1]});
		const boolEMkO8k = await VotingoxbzMak.isValidStamperAddress.call(addressA0FdsVB, {from: accounts[3]});
	});

	it('test for Voting', async () => {
		const VotingNljhFR0 = await Voting.new({from: accounts[0]});
		const uinttOqLniO = BigInt("1481")
		const addressZOhOqV4 = accounts[2]
		const addressDAFAnn = accounts[4]
		const addressyq3B9h5 = accounts[1]
		await VotingNljhFR0.onlyExchangeFactory.call({from: accounts[4]});
		await VotingNljhFR0.onlyMinter.call({from: accounts[2]});
		const boolkXPMMBm = await VotingNljhFR0.transferFrom.call(addressDAFAnn, addressZOhOqV4, uinttOqLniO, {from: "0x0000000000000000000000000000000000000001"});
		const boolboyIdv1 = await VotingNljhFR0.isValidOracleAddress.call(addressyq3B9h5, {from: accounts[1]});
	});

	it('test for Voting', async () => {
		const addressxfFCgcj = "0x0000000000000000000000000000000000000001"
		const VotingoxbzMak = await Voting.new(addressxfFCgcj, {from: accounts[1]});
		const addressIDpIaa4 = accounts[1]
		const addressQZW3MJy = accounts[2]
		const boolnXsWWMv = await VotingoxbzMak.isExchangeFactory.call(addressIDpIaa4, {from: accounts[3]});
		const boolEMkO8k = await VotingoxbzMak.isValidStamperAddress.call(addressQZW3MJy, {from: accounts[3]});
	});

	it('test for Voting', async () => {
		const addressIYWYxqq = "0x0000000000000000000000000000000000000001"
		const VotingoxbzMak = await Voting.new(addressIYWYxqq, {from: accounts[1]});
		const boolTdX1F7 = true
		const uintx4l4te4 = BigInt("1347")
		const addressm6k4e0Z = accounts[1]
		const uint256P1SXdK0 = await VotingoxbzMak.vote.call(uintx4l4te4, boolTdX1F7, {from: accounts[3]});
		const boolEMkO8k = await VotingoxbzMak.isValidStamperAddress.call(addressm6k4e0Z, {from: accounts[3]});
	});

	it('test for Voting', async () => {
		const Voting0SQyZq = await Voting.new({from: "0x0000000000000000000000000000000000000001"});
		const uintuq6fdbw = BigInt("67")
		const addressTrVLuXm = accounts[4]
		const uintNPIIF5X = BigInt("1155")
		await Voting0SQyZq.onlyExchange.call({from: accounts[3]});
		const boolUTojhH = await Voting0SQyZq.transfer.call(addressTrVLuXm, uintuq6fdbw, {from: accounts[1]});
		await Voting0SQyZq.onRegistryRefresh.call({from: accounts[4]});
		const uint256tBOXmUW = await Voting0SQyZq.veto.call(uintNPIIF5X, {from: accounts[4]});
		await Voting0SQyZq.onlyExchangeFactoryOrVotingSystem.call({from: accounts[1]});
	});

	it('test for Voting', async () => {
		const addressZLD4J0S = "0x0000000000000000000000000000000000000001"
		const VotingoxbzMak = await Voting.new(addressZLD4J0S, {from: accounts[1]});
		const addressZujKEuD = accounts[5]
		const addresscyWjJm9 = accounts[2]
		const uintdX3n9fh = BigInt("1558")
		const boolJ8ATxQg = await VotingoxbzMak.isOwner.call({from: accounts[0]});
		const boolykGlGNF = await VotingoxbzMak.isValidVerifierAddress.call(addressZujKEuD, {from: accounts[1]});
		const boolEMkO8k = await VotingoxbzMak.isValidStamperAddress.call(addresscyWjJm9, {from: accounts[3]});
		const uint256S7GQ9x = await VotingoxbzMak.burn.call(uintdX3n9fh, {from: accounts[3]});
	});
})