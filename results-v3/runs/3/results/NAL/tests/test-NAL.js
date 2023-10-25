const NAL = artifacts.require("NAL");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('NAL', (accounts) => {
	it('test for NAL', async () => {
		const stringO57ehXp = "Z5KWie9BvsRbBbyhxgaGwlxrBhrknIizlmOvrv404rzR9nrxq2TUvvaZLQa0NdgC4IAZBPVdxue"
		const stringt6y37Me = "AtlhPKSn6pNaL4pz2WHsGmqQgt8Wo5ODSHAZjgv7P2IMhSQDZHt705bgT2c9Y56"
		const uintAUY7miB = BigInt("209")
		const NALDJoc2B = await NAL.new(stringO57ehXp, stringt6y37Me, uintAUY7miB, {from: accounts[3]});
		const uintK4o2t4p = BigInt("851")
		const addressEBGhBN6 = accounts[1]
		const addressyR7Nqmc = accounts[5]
		const addressfTnDDaQ = accounts[4]
		const uintGyqA0Ly = BigInt("1555")
		const addressakeL96u = accounts[2]
		const uintyuIwiCG = BigInt("1337")
		const uintGxF2zBD = BigInt("893")
		const addressuzhyaGD = accounts[0]
		const boolA2AYZ2 = await NALDJoc2B.increaseAllowance.call(addressEBGhBN6, uintK4o2t4p, {from: accounts[2]});
		await NALDJoc2B.whenPaused.call({from: accounts[5]});
		const addressUXBoiui = await NALDJoc2B.notFrozen.call(addressyR7Nqmc, {from: "0x0000000000000000000000000000000000000001"});
		const addressM9uxiKl = await NALDJoc2B.notFrozen.call(addressfTnDDaQ, {from: accounts[4]});
		const boolD0QPka = await NALDJoc2B.transfer.call(addressakeL96u, uintGyqA0Ly, {from: accounts[4]});
		const boolvOab8mn = await NALDJoc2B.transferWithLock.call(addressuzhyaGD, uintGxF2zBD, uintyuIwiCG, {from: accounts[1]});
	});

	it('test for NAL', async () => {
		const NALCbtYzUn = await NAL.new({from: accounts[3]});
		const addresspwUgBc = "0x0000000000000000000000000000000000000001"
		const addresswHfB4Nl = accounts[0]
		const addressRBKDNXL = await NALCbtYzUn.notFrozen.call(addresspwUgBc, {from: accounts[1]});
		await NALCbtYzUn.whenNotPaused.call({from: accounts[2]});
		await NALCbtYzUn.whenNotPaused.call({from: accounts[1]});
		const address9AHzXU = await NALCbtYzUn.removeAdmin.call(addresswHfB4Nl, {from: accounts[3]});

		await expect(NALCbtYzUn.notFrozen.call(addresspwUgBc, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALVZGiLFg = await NAL.new({from: accounts[4]});
		const uinthI4KNNP = BigInt("1038")
		const addressKmH0zra = accounts[0]
		const addressaFpcrRi = accounts[4]
		const uintaMk1Wa = BigInt("1186")
		const addressiucPQrk = accounts[1]
		const boolKULtiZh = await NALVZGiLFg.transfer.call(addressKmH0zra, uinthI4KNNP, {from: accounts[5]});
		const stringV9GzDMr = await NALVZGiLFg.name.call({from: accounts[2]});
		const boolVsUwsEJ = await NALVZGiLFg.freezeAccount.call(addressaFpcrRi, {from: accounts[0]});
		await NALVZGiLFg.renounceAdmin.call({from: accounts[1]});
		const addressgZpbwrZ = await NALVZGiLFg.burnFrom.call(addressiucPQrk, uintaMk1Wa, {from: accounts[4]});

		await expect(NALVZGiLFg.transfer.call(addressKmH0zra, uinthI4KNNP, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALU8CyBHr = await NAL.new({from: accounts[1]});
		const uintRwu96AV = BigInt("1150")
		const addresskW2BP4t = accounts[2]
		const addressAVXLP3A = accounts[3]
		const uintZMCI8i = BigInt("647")
		const addresswtATd4p = accounts[2]
		const addressETYE2L0 = accounts[4]
		const addressrPkvbF8 = accounts[3]
		const boolSQ3r2Nc = await NALU8CyBHr.transferFrom.call(addressAVXLP3A, addresskW2BP4t, uintRwu96AV, {from: accounts[4]});
		const boolUcJ497C = await NALU8CyBHr.transferFrom.call(addressETYE2L0, addresswtATd4p, uintZMCI8i, {from: accounts[5]});
		await NALU8CyBHr.unpause.call({from: accounts[3]});
		const uint256jRXiO06 = await NALU8CyBHr.totalSupply.call({from: accounts[2]});
		const booln0fvQsO = await NALU8CyBHr.isOwner.call(addressrPkvbF8, {from: accounts[0]});

		await expect(NALU8CyBHr.transferFrom.call(addressAVXLP3A, addresskW2BP4t, uintRwu96AV, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NAL0Lsezm = await NAL.new({from: accounts[4]});
		const uintt5mcNJX = BigInt("472")
		const uintry8AdiH = BigInt("1576")
		const addressXyW9SYy = accounts[5]
		const uintLtDWY1N = BigInt("1752")
		const uintlQgZ5Kh = BigInt("537")
		const addressYuoldlJ = accounts[0]
		const addresst6oJjUi = accounts[3]
		const stringGmd3CC9 = await NAL0Lsezm.symbol.call({from: accounts[2]});
		const boolmiObGe1 = await NAL0Lsezm.transferWithLock.call(addressXyW9SYy, uintry8AdiH, uintt5mcNJX, {from: accounts[4]});
		const boolvNWmKL = await NAL0Lsezm.transferWithLock.call(addressYuoldlJ, uintlQgZ5Kh, uintLtDWY1N, {from: "0x0000000000000000000000000000000000000001"});
		const stringQVha5L = await NAL0Lsezm.symbol.call({from: accounts[2]});
		const addressoSsQlc0 = await NAL0Lsezm.transferOwnership.call(addresst6oJjUi, {from: accounts[3]});

		assert.equal(boolmiObGe1, true)
		assert.equal(stringGmd3CC9, "NAL")
		await expect(NAL0Lsezm.transferWithLock.call(addressYuoldlJ, uintlQgZ5Kh, uintLtDWY1N, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NAL0Lsezm = await NAL.new({from: accounts[4]});
		const uintGjToSaQ = BigInt("472")
		const uintWiDi6V = BigInt("1576")
		const addressn0v2P6I = accounts[5]
		const uintDojX9A = BigInt("1752")
		const uintyAygNVA = BigInt("511")
		const addressuPTb6u = accounts[0]
		const addressBsHAef = accounts[3]
		const stringGmd3CC9 = await NAL0Lsezm.symbol.call({from: accounts[2]});
		const stringpAegaUD = await NAL0Lsezm.name.call({from: accounts[1]});
		const boolmiObGe1 = await NAL0Lsezm.transferWithLock.call(addressn0v2P6I, uintWiDi6V, uintGjToSaQ, {from: accounts[4]});
		const boolvNWmKL = await NAL0Lsezm.transferWithLock.call(addressuPTb6u, uintyAygNVA, uintDojX9A, {from: "0x0000000000000000000000000000000000000001"});
		const stringQVha5L = await NAL0Lsezm.symbol.call({from: accounts[2]});
		const addressoSsQlc0 = await NAL0Lsezm.transferOwnership.call(addressBsHAef, {from: accounts[3]});

		assert.equal(boolmiObGe1, true)
		assert.equal(stringGmd3CC9, "NAL")
		assert.equal(stringpAegaUD, "Personal Token")
		await expect(NAL0Lsezm.transferWithLock.call(addressuPTb6u, uintyAygNVA, uintDojX9A, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALU8CyBHr = await NAL.new({from: accounts[1]});
		const addressK8X0Ca0 = accounts[3]
		const addressRtD5Jzn = accounts[4]
		const uintrJcTcBX = BigInt("1150")
		const addresstv8o9EW = accounts[2]
		const addressS7xFR0b = accounts[3]
		const uintjWnSMow = BigInt("1466")
		const address968sei = accounts[0]
		const addressjVZMKIU = accounts[3]
		const uint256PJiN3dI = await NALU8CyBHr.allowance.call(addressRtD5Jzn, addressK8X0Ca0, {from: accounts[1]});
		const boolSQ3r2Nc = await NALU8CyBHr.transferFrom.call(addressS7xFR0b, addresstv8o9EW, uintrJcTcBX, {from: accounts[4]});
		await NALU8CyBHr.unpause.call({from: accounts[3]});
		const boolErDm4Vt = await NALU8CyBHr.transfer.call(address968sei, uintjWnSMow, {from: accounts[1]});
		const uint256jRXiO06 = await NALU8CyBHr.totalSupply.call({from: accounts[2]});
		const booln0fvQsO = await NALU8CyBHr.isOwner.call(addressjVZMKIU, {from: accounts[0]});

		assert.equal(uint256PJiN3dI, BigInt("0"))
		await expect(NALU8CyBHr.transferFrom.call(addressS7xFR0b, addresstv8o9EW, uintrJcTcBX, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NAL0Lsezm = await NAL.new({from: accounts[4]});
		const uintq2hwaSc = BigInt("472")
		const uintx0k0pbV = BigInt("1542")
		const addressfTW8ON = accounts[5]
		const uintLYxJYan = BigInt("385")
		const addressz8zyYC1 = accounts[2]
		const uintjIVFjBb = BigInt("1752")
		const uintWGjCM4 = BigInt("537")
		const address2W5X2m = accounts[0]
		const uintwU4js1 = BigInt("1443")
		const addressYAjsmP3 = accounts[1]
		const addressSrJzxi5 = accounts[1]
		const addresskHAXwhU = accounts[3]
		const addressjMAVR9I = accounts[4]
		const stringGmd3CC9 = await NAL0Lsezm.symbol.call({from: accounts[2]});
		const boolmiObGe1 = await NAL0Lsezm.transferWithLock.call(addressfTW8ON, uintx0k0pbV, uintq2hwaSc, {from: accounts[4]});
		const boolvWkrXmR = await NAL0Lsezm.increaseAllowance.call(addressz8zyYC1, uintLYxJYan, {from: accounts[0]});
		const boolvNWmKL = await NAL0Lsezm.transferWithLock.call(address2W5X2m, uintWGjCM4, uintjIVFjBb, {from: "0x0000000000000000000000000000000000000001"});
		const stringQVha5L = await NAL0Lsezm.symbol.call({from: accounts[2]});
		const booldq0DUXK = await NAL0Lsezm.transferFrom.call(addressSrJzxi5, addressYAjsmP3, uintwU4js1, {from: "0x0000000000000000000000000000000000000001"});
		const addressoSsQlc0 = await NAL0Lsezm.transferOwnership.call(addresskHAXwhU, {from: accounts[3]});
		const booloURCMQc = await NAL0Lsezm.isOwner.call(addressjMAVR9I, {from: accounts[0]});

		assert.equal(boolmiObGe1, true)
		assert.equal(boolvWkrXmR, true)
		assert.equal(stringGmd3CC9, "NAL")
		await expect(NAL0Lsezm.transferWithLock.call(address2W5X2m, uintWGjCM4, uintjIVFjBb, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NAL0Lsezm = await NAL.new({from: accounts[4]});
		const uintGFKCJq6 = BigInt("1421")
		const addresscorQDp = "0x0000000000000000000000000000000000000001"
		const uintolK8V6Y = BigInt("1752")
		const uint05S2SU = BigInt("537")
		const addressZZTLXiH = accounts[0]
		const addressTgJFLxw = accounts[3]
		const booln6GQUWu = await NAL0Lsezm.decreaseAllowance.call(addresscorQDp, uintGFKCJq6, {from: accounts[4]});
		const stringGmd3CC9 = await NAL0Lsezm.symbol.call({from: accounts[2]});
		const boolvNWmKL = await NAL0Lsezm.transferWithLock.call(addressZZTLXiH, uint05S2SU, uintolK8V6Y, {from: "0x0000000000000000000000000000000000000001"});
		const stringQVha5L = await NAL0Lsezm.symbol.call({from: accounts[2]});
		const addressoSsQlc0 = await NAL0Lsezm.transferOwnership.call(addressTgJFLxw, {from: accounts[3]});

		await expect(NAL0Lsezm.decreaseAllowance.call(addresscorQDp, uintGFKCJq6, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NAL0Lsezm = await NAL.new({from: accounts[4]});
		const uintB40Uoe4 = BigInt("472")
		const uintIk7w8jl = BigInt("1527")
		const addressjwdG3Sd = accounts[5]
		const uintHmK40G = BigInt("385")
		const addressIrKWzhF = accounts[2]
		const uintvFVsoT5 = BigInt("375")
		const addressx777B18 = accounts[2]
		const uintq6fm94 = BigInt("1752")
		const uintP4l7LtQ = BigInt("537")
		const addresscIPpmjs = accounts[0]
		const uintPkYS9FP = BigInt("1293")
		const addressa5g7U5o = accounts[0]
		const uintYsmid46 = BigInt("1443")
		const addressn68vfdf = accounts[1]
		const addressG8IqEQS = accounts[1]
		const uintKPSzA2R = BigInt("84")
		const addresslnghdV = "0x0000000000000000000000000000000000000001"
		const addressCnuU0f0 = accounts[3]
		const stringGmd3CC9 = await NAL0Lsezm.symbol.call({from: accounts[2]});
		const boolmiObGe1 = await NAL0Lsezm.transferWithLock.call(addressjwdG3Sd, uintIk7w8jl, uintB40Uoe4, {from: accounts[4]});
		const boolvWkrXmR = await NAL0Lsezm.increaseAllowance.call(addressIrKWzhF, uintHmK40G, {from: accounts[0]});
		const boolIYCPjAy = await NAL0Lsezm.approve.call(addressx777B18, uintvFVsoT5, {from: accounts[0]});
		const boolvNWmKL = await NAL0Lsezm.transferWithLock.call(addresscIPpmjs, uintP4l7LtQ, uintq6fm94, {from: "0x0000000000000000000000000000000000000001"});
		const stringQVha5L = await NAL0Lsezm.symbol.call({from: accounts[2]});
		const boolucD2v6g = await NAL0Lsezm.paused.call({from: accounts[3]});
		const boolY0YaXlJ = await NAL0Lsezm.transfer.call(addressa5g7U5o, uintPkYS9FP, {from: accounts[5]});
		const booldq0DUXK = await NAL0Lsezm.transferFrom.call(addressG8IqEQS, addressn68vfdf, uintYsmid46, {from: "0x0000000000000000000000000000000000000001"});
		const boolMofv4V4 = await NAL0Lsezm.transfer.call(addresslnghdV, uintKPSzA2R, {from: accounts[2]});
		const addressoSsQlc0 = await NAL0Lsezm.transferOwnership.call(addressCnuU0f0, {from: accounts[3]});

		assert.equal(boolIYCPjAy, true)
		assert.equal(boolmiObGe1, true)
		assert.equal(boolvWkrXmR, true)
		assert.equal(stringGmd3CC9, "NAL")
		await expect(NAL0Lsezm.transferWithLock.call(addresscIPpmjs, uintP4l7LtQ, uintq6fm94, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALVZGiLFg = await NAL.new({from: accounts[4]});
		const addressMBv7Cpz = accounts[4]
		const addresssmvrf85 = accounts[4]
		const uintkxZyplq = BigInt("475")
		const addressI61skro = accounts[2]
		const stringV9GzDMr = await NALVZGiLFg.name.call({from: accounts[2]});
		const boolnyCoYiM = await NALVZGiLFg.isOwner.call(addressMBv7Cpz, {from: "0x0000000000000000000000000000000000000001"});
		const boolVsUwsEJ = await NALVZGiLFg.freezeAccount.call(addresssmvrf85, {from: accounts[0]});
		const booluUFHxGU = await NALVZGiLFg.decreaseAllowance.call(addressI61skro, uintkxZyplq, {from: accounts[4]});
		await NALVZGiLFg.whenPaused.call({from: accounts[3]});
		await NALVZGiLFg.renounceAdmin.call({from: accounts[1]});

		assert.equal(boolnyCoYiM, true)
		assert.equal(stringV9GzDMr, "Personal Token")
		await expect(NALVZGiLFg.freezeAccount.call(addresssmvrf85, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALPcGOERB = await NAL.new({from: accounts[2]});
		const uintZEGkMXr = BigInt("503")
		const addressy8eySWr = accounts[2]
		const uints0TSTmA = BigInt("729")
		const addressDOFpXBm = accounts[1]
		const stringkljpnvm = await NALPcGOERB.name.call({from: accounts[0]});
		const boolDGJjAn = await NALPcGOERB.approve.call(addressy8eySWr, uintZEGkMXr, {from: accounts[0]});
		const addressC9fxFeX = await NALPcGOERB.burnFrom.call(addressDOFpXBm, uints0TSTmA, {from: accounts[2]});

		assert.equal(boolDGJjAn, true)
		assert.equal(stringkljpnvm, "Personal Token")
		await expect(NALPcGOERB.burnFrom.call(addressDOFpXBm, uints0TSTmA, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALVZGiLFg = await NAL.new({from: accounts[4]});
		const address4tlElR = accounts[1]
		const uintZcyAKw = BigInt("1038")
		const addressvSHRiC = accounts[0]
		const booljqIh5eC = await NALVZGiLFg.freezeAccount.call(address4tlElR, {from: accounts[4]});
		const boolKULtiZh = await NALVZGiLFg.transfer.call(addressvSHRiC, uintZcyAKw, {from: accounts[5]});
		await NALVZGiLFg.whenNotPaused.call({from: accounts[4]});
		const stringV9GzDMr = await NALVZGiLFg.name.call({from: accounts[2]});
		await NALVZGiLFg.renounceAdmin.call({from: accounts[1]});

		assert.equal(booljqIh5eC, true)
		await expect(NALVZGiLFg.transfer.call(addressvSHRiC, uintZcyAKw, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALVZGiLFg = await NAL.new({from: accounts[4]});
		const uintNuhNaEG = BigInt("230")
		const addressAV3IUMk = accounts[1]
		const addressQe52lCL = accounts[2]
		await NALVZGiLFg.renounceAdmin.call({from: accounts[1]});
		const boolqbo2b5h = await NALVZGiLFg.transfer.call(addressAV3IUMk, uintNuhNaEG, {from: accounts[5]});
		const uint256d2wb48H = await NALVZGiLFg.balanceOf.call(addressQe52lCL, {from: accounts[3]});

		await expect(NALVZGiLFg.renounceAdmin.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALU8CyBHr = await NAL.new({from: accounts[1]});
		const uintOvzA7Zj = BigInt("1150")
		const addressfMDueBQ = accounts[2]
		const addressLiti7B5 = accounts[3]
		const uintLBQxnFy = BigInt("647")
		const addressmHqWHHZ = accounts[2]
		const addressiGb5AD = accounts[4]
		const addressT8HS5fZ = accounts[1]
		const addressmp6hkrx = accounts[3]
		const uint8pXD5Olx = await NALU8CyBHr.decimals.call({from: accounts[4]});
		const boolSQ3r2Nc = await NALU8CyBHr.transferFrom.call(addressLiti7B5, addressfMDueBQ, uintOvzA7Zj, {from: accounts[4]});
		await NALU8CyBHr.whenPaused.call({from: accounts[5]});
		const stringU68Jvu = await NALU8CyBHr.symbol.call({from: accounts[3]});
		const boolUcJ497C = await NALU8CyBHr.transferFrom.call(addressiGb5AD, addressmHqWHHZ, uintLBQxnFy, {from: accounts[5]});
		await NALU8CyBHr.unpause.call({from: accounts[3]});
		const uint256jRXiO06 = await NALU8CyBHr.totalSupply.call({from: accounts[2]});
		await NALU8CyBHr.whenNotPaused.call({from: "0x0000000000000000000000000000000000000001"});
		const addressyKXdx6W = await NALU8CyBHr.addAdmin.call(addressT8HS5fZ, {from: accounts[0]});
		const booln0fvQsO = await NALU8CyBHr.isOwner.call(addressmp6hkrx, {from: accounts[0]});

		assert.equal(uint8pXD5Olx, BigInt("18"))
		await expect(NALU8CyBHr.transferFrom.call(addressLiti7B5, addressfMDueBQ, uintOvzA7Zj, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALU8CyBHr = await NAL.new({from: accounts[1]});
		const address5hXZTG = accounts[1]
		const addressRx2Dqd = accounts[2]
		const addressHCe4Jq2 = accounts[3]
		const addressjkTzqo = "0x0000000000000000000000000000000000000001"
		const addressqsscL9t = accounts[1]
		const uintJ4rfOim = BigInt("1532")
		const uint256AgDkCBj = await NALU8CyBHr.allowance.call(addressRx2Dqd, address5hXZTG, {from: accounts[2]});
		const booln0fvQsO = await NALU8CyBHr.isOwner.call(addressHCe4Jq2, {from: accounts[0]});
		const boolBqjdaEF = await NALU8CyBHr.isOwner.call(addressjkTzqo, {from: accounts[1]});
		const addressLmSNkL2 = await NALU8CyBHr.addAdmin.call(addressqsscL9t, {from: accounts[1]});
		const uint256wFpZTuo = await NALU8CyBHr.burn.call(uintJ4rfOim, {from: accounts[0]});

		assert.equal(boolBqjdaEF, false)
		assert.equal(booln0fvQsO, false)
		assert.equal(uint256AgDkCBj, BigInt("0"))
		await expect(NALU8CyBHr.addAdmin.call(addressqsscL9t, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALU8CyBHr = await NAL.new({from: accounts[1]});
		const addressoNCth58 = accounts[3]
		const uintfSyiwy0 = BigInt("1150")
		const addressFTnyTds = accounts[2]
		const addressCnAJhNc = accounts[3]
		const uintWK3MHgU = BigInt("1025")
		const addressMoYLEP = accounts[5]
		const addressyNjSOZu = accounts[3]
		const addresstWAfsfB = await NALU8CyBHr.transferOwnership.call(addressoNCth58, {from: accounts[1]});
		const boolSQ3r2Nc = await NALU8CyBHr.transferFrom.call(addressCnAJhNc, addressFTnyTds, uintfSyiwy0, {from: accounts[4]});
		const uint256jRXiO06 = await NALU8CyBHr.totalSupply.call({from: accounts[2]});
		const boolU6aUfXK = await NALU8CyBHr.increaseAllowance.call(addressMoYLEP, uintWK3MHgU, {from: accounts[2]});
		const booln0fvQsO = await NALU8CyBHr.isOwner.call(addressyNjSOZu, {from: accounts[0]});

		await expect(NALU8CyBHr.transferFrom.call(addressCnAJhNc, addressFTnyTds, uintfSyiwy0, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALkXSefMa = await NAL.new({from: accounts[0]});
		const uintgkBnrnz = BigInt("1690")
		const addressv3OF570 = accounts[2]
		const addressxojj5R0 = accounts[3]
		const uintDnKI1qW = BigInt("653")
		const addressx6IQJka = accounts[3]
		const boolZEuSJ9x = await NALkXSefMa.approve.call(addressv3OF570, uintgkBnrnz, {from: accounts[0]});
		const addressHEjGXl = await NALkXSefMa.removeAdmin.call(addressxojj5R0, {from: accounts[0]});
		const addressuQlTGfc = await NALkXSefMa.burnFrom.call(addressx6IQJka, uintDnKI1qW, {from: accounts[1]});
		const stringJMsHJHN = await NALkXSefMa.symbol.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256pSD9gCE = await NALkXSefMa.totalSupply.call({from: accounts[3]});

		assert.equal(boolZEuSJ9x, true)
		await expect(NALkXSefMa.removeAdmin.call(addressxojj5R0, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALU8CyBHr = await NAL.new({from: accounts[1]});
		const uintG1zENbF = BigInt("138")
		const addressej3aGU0 = "0x0000000000000000000000000000000000000001"
		const uinttt5L2Uy = BigInt("1120")
		const addressFUnyNu7 = accounts[2]
		const addressWhmYNkT = accounts[3]
		const boolWF6aWEt = await NALU8CyBHr.unlock.call(addressej3aGU0, uintG1zENbF, {from: accounts[1]});
		await NALU8CyBHr.whenPaused.call({from: accounts[4]});
		const boolSQ3r2Nc = await NALU8CyBHr.transferFrom.call(addressWhmYNkT, addressFUnyNu7, uinttt5L2Uy, {from: accounts[4]});

		await expect(NALU8CyBHr.unlock.call(addressej3aGU0, uintG1zENbF, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALVZGiLFg = await NAL.new({from: accounts[4]});
		const uintS7wsYA8 = BigInt("1426")
		const addressNJhcnf = accounts[0]
		const boolDLq9bNJ = await NALVZGiLFg.increaseAllowance.call(addressNJhcnf, uintS7wsYA8, {from: accounts[3]});
		await NALVZGiLFg.pause.call({from: accounts[4]});
		await NALVZGiLFg.onlyAdmin.call({from: accounts[0]});

		assert.equal(boolDLq9bNJ, true)
		await expect(NALVZGiLFg.pause.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALzqkWBwn = await NAL.new({from: accounts[2]});
		const uintxzhl1gi = BigInt("1810")
		const addresshlKAedF = accounts[5]
		const addressKjjH73i = accounts[2]
		const uintOpbdGA3 = BigInt("1025")
		const addressZ9knE4o = accounts[0]
		const addressH6Lq1EW = accounts[4]
		const boolrOkxE4F = await NALzqkWBwn.transfer.call(addresshlKAedF, uintxzhl1gi, {from: accounts[2]});
		const uint8UK0MnD = await NALzqkWBwn.decimals.call({from: accounts[4]});
		const boolULcjl50 = await NALzqkWBwn.unfreezeAccount.call(addressKjjH73i, {from: accounts[2]});
		await NALzqkWBwn.pause.call({from: accounts[0]});
		await NALzqkWBwn.whenPaused.call({from: accounts[4]});
		const boolxRR71ef = await NALzqkWBwn.transferFrom.call(addressH6Lq1EW, addressZ9knE4o, uintOpbdGA3, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolrOkxE4F, true)
		assert.equal(uint8UK0MnD, BigInt("18"))
		await expect(NALzqkWBwn.unfreezeAccount.call(addressKjjH73i, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALVZGiLFg = await NAL.new({from: accounts[4]});
		const addressqg69E2x = accounts[1]
		const uintk8VSGr = BigInt("1024")
		const addresspd0YC9o = accounts[0]
		const uintkcIocc2 = BigInt("1879")
		const addressRxD98zN = accounts[1]
		const uint256kUOqItS = await NALVZGiLFg.balanceOf.call(addressqg69E2x, {from: accounts[4]});
		const boolKULtiZh = await NALVZGiLFg.transfer.call(addresspd0YC9o, uintk8VSGr, {from: accounts[5]});
		const boolgwpUQsW = await NALVZGiLFg.decreaseAllowance.call(addressRxD98zN, uintkcIocc2, {from: accounts[0]});
		await NALVZGiLFg.renounceAdmin.call({from: accounts[1]});

		assert.equal(uint256kUOqItS, BigInt("0"))
		await expect(NALVZGiLFg.transfer.call(addresspd0YC9o, uintk8VSGr, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALU8CyBHr = await NAL.new({from: accounts[1]});
		const addressQBJDuXG = accounts[4]
		const uint256jRXiO06 = await NALU8CyBHr.totalSupply.call({from: accounts[2]});
		const booln0fvQsO = await NALU8CyBHr.isOwner.call(addressQBJDuXG, {from: accounts[0]});

		assert.equal(booln0fvQsO, false)
		assert.equal(uint256jRXiO06, BigInt("2000000000000000000000000000"))
	});

	it('test for NAL', async () => {
		const NALVZGiLFg = await NAL.new({from: accounts[4]});
		const boolpuekVlF = await NALVZGiLFg.paused.call({from: accounts[3]});

		assert.equal(boolpuekVlF, false)
	});

	it('test for NAL', async () => {
		const NALVZGiLFg = await NAL.new({from: accounts[4]});
		const uintmkooEPB = BigInt("1889")
		const uintWhzIlH2 = BigInt("1029")
		const addressndgdIcE = accounts[0]
		const uint256ydt6hqs = await NALVZGiLFg.burn.call(uintmkooEPB, {from: accounts[4]});
		await NALVZGiLFg.whenNotPaused.call({from: accounts[3]});
		const boolKULtiZh = await NALVZGiLFg.transfer.call(addressndgdIcE, uintWhzIlH2, {from: accounts[5]});

		await expect(NALVZGiLFg.whenNotPaused.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALU4iuXnC = await NAL.new({from: "0x0000000000000000000000000000000000000001"});
		const addressFvkJ9j7 = "0x0000000000000000000000000000000000000001"
		const addressYRXJKrz = accounts[2]
		const uintZhTXj9O = BigInt("79")
		const addressCriZ2MX = accounts[4]
		const addressscQJMJB = accounts[4]
		const boolZrjZn1e = await NALU4iuXnC.freezeAccount.call(addressFvkJ9j7, {from: accounts[0]});
		const uint256muTYK9a = await NALU4iuXnC.balanceOf.call(addressYRXJKrz, {from: accounts[3]});
		const boolliDRAy = await NALU4iuXnC.transferFrom.call(addressscQJMJB, addressCriZ2MX, uintZhTXj9O, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for NAL', async () => {
		const NALVZGiLFg = await NAL.new({from: accounts[4]});
		const addressTg4uNnC = accounts[5]
		const uint5N0mgr = BigInt("302")
		const addressLTsrEQX = accounts[0]
		const uint8kKN3YnP = await NALVZGiLFg.decimals.call({from: accounts[1]});
		const addressjvQM3dO = await NALVZGiLFg.upgradeTo.call(addressTg4uNnC, {from: accounts[4]});
		const boolKULtiZh = await NALVZGiLFg.transfer.call(addressLTsrEQX, uint5N0mgr, {from: accounts[5]});

		assert.equal(uint8kKN3YnP, BigInt("18"))
		await expect(NALVZGiLFg.transfer.call(addressLTsrEQX, uint5N0mgr, {from: accounts[5]})).to.be.rejectedWith(Error);
	});
})