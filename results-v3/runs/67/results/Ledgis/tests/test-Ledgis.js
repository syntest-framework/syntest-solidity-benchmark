const Ledgis = artifacts.require("Ledgis");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Ledgis', (accounts) => {
	it('test for Ledgis', async () => {
		const LedgisYlrf3CM = await Ledgis.new({from: accounts[4]});
		const uinthMuGHrh = BigInt("2022")
		const uintbeDD3Pn = BigInt("1510")
		const addressJT9uHcn = accounts[2]
		const addressvpwKJs = accounts[4]
		const addressxx8WNOf = await LedgisYlrf3CM.lockAfter.call(addressJT9uHcn, uintbeDD3Pn, uinthMuGHrh, {from: accounts[4]});
		await LedgisYlrf3CM.pause.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256yIsffxF = await LedgisYlrf3CM.currentTime.call({from: accounts[4]});
		const boolmedDtF = await LedgisYlrf3CM.isFrozen.call(addressvpwKJs, {from: accounts[4]});

		await expect(LedgisYlrf3CM.lockAfter.call(addressJT9uHcn, uintbeDD3Pn, uinthMuGHrh, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisKevTNRy = await Ledgis.new({from: accounts[1]});
		const addressjWAk15B = accounts[2]
		const uintpu1cVft = BigInt("1740")
		const uintwVt2VdL = BigInt("385")
		const addressqXv1vos = accounts[1]
		const uint5mTkWV = BigInt("1871")
		const addressfS23aP = accounts[0]
		const addressmOS4clm = accounts[2]
		const uintoHjzPOx = BigInt("1440")
		const addressG1vbb0W = accounts[0]
		const uintvGHB2r = BigInt("981")
		const addressxf3724o = accounts[1]
		const uintalOPmpS = BigInt("1796")
		const uinthjmBoGw = BigInt("881")
		const addressFkxriwa = accounts[5]
		const boolgJvnZRS = await LedgisKevTNRy.isFrozen.call(addressjWAk15B, {from: accounts[3]});
		const boolkS07qms = await LedgisKevTNRy.transferWithLockAfter.call(addressqXv1vos, uintwVt2VdL, uintpu1cVft, {from: accounts[1]});
		const boolD59C0v6 = await LedgisKevTNRy.transferFrom.call(addressmOS4clm, addressfS23aP, uint5mTkWV, {from: accounts[5]});
		const boolF7VSUyj = await LedgisKevTNRy.transfer.call(addressG1vbb0W, uintoHjzPOx, {from: accounts[5]});
		const boolzTs2suq = await LedgisKevTNRy.increaseAllowance.call(addressxf3724o, uintvGHB2r, {from: "0x0000000000000000000000000000000000000001"});
		const boolNSaHiVE = await LedgisKevTNRy.transferWithLock.call(addressFkxriwa, uinthjmBoGw, uintalOPmpS, {from: accounts[2]});

		assert.equal(boolgJvnZRS, false)
		assert.equal(boolkS07qms, true)
		await expect(LedgisKevTNRy.transferFrom.call(addressmOS4clm, addressfS23aP, uint5mTkWV, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const Ledgisn6i15hC = await Ledgis.new({from: accounts[4]});
		const uintpq39XN = BigInt("648")
		const addressx3a2omu = accounts[1]
		const uintm3NLlR4 = BigInt("1069")
		const addressaNR3qKb = accounts[4]
		const addresszUyqnL6 = accounts[1]
		await Ledgisn6i15hC.pause.call({from: accounts[1]});
		const boolQHdsnz6 = await Ledgisn6i15hC.transfer.call(addressx3a2omu, uintpq39XN, {from: accounts[2]});
		const boolyKDHO9 = await Ledgisn6i15hC.transferFrom.call(addresszUyqnL6, addressaNR3qKb, uintm3NLlR4, {from: accounts[1]});

		await expect(Ledgisn6i15hC.pause.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisxZGKIvk = await Ledgis.new({from: accounts[2]});
		const addressTPbX7Ek = accounts[4]
		const uintHBnDX9 = BigInt("1417")
		const addresspchryxJ = accounts[4]
		const uintmVFBoNS = BigInt("457")
		const addressCOclqTK = accounts[0]
		const uintZ95SfGP = BigInt("903")
		const addressWODE4X = accounts[2]
		const addressJ2ofxHG = accounts[4]
		const uintMsBK0Ue = BigInt("1204")
		const uintN2AojWz = BigInt("1547")
		const addressgKY8nvV = accounts[0]
		const addressYtx9Hl = accounts[4]
		const uint256Q47gnkL = await LedgisxZGKIvk.lockCount.call(addressTPbX7Ek, {from: "0x0000000000000000000000000000000000000001"});
		const addresslUYD1Pd = await LedgisxZGKIvk.unlock.call(addresspchryxJ, uintHBnDX9, {from: accounts[3]});
		const boolUIO29F0 = await LedgisxZGKIvk.approve.call(addressCOclqTK, uintmVFBoNS, {from: accounts[5]});
		const boolBrCtKXO = await LedgisxZGKIvk.transferFrom.call(addressJ2ofxHG, addressWODE4X, uintZ95SfGP, {from: accounts[0]});
		const boolp3pvSmU = await LedgisxZGKIvk.transferWithLock.call(addressgKY8nvV, uintN2AojWz, uintMsBK0Ue, {from: accounts[1]});
		const addressaoc8E5l = await LedgisxZGKIvk.freeze.call(addressYtx9Hl, {from: accounts[0]});

		assert.equal(uint256Q47gnkL, BigInt("0"))
		await expect(LedgisxZGKIvk.unlock.call(addresspchryxJ, uintHBnDX9, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisLM7eMBC = await Ledgis.new({from: accounts[5]});
		const uintqdDokk = BigInt("906")
		const addressj99fiW7 = accounts[2]
		const addressbUarijQ = accounts[1]
		const boolz1kX47s = await LedgisLM7eMBC.approve.call(addressj99fiW7, uintqdDokk, {from: accounts[2]});
		const uint256KFSKm5b = await LedgisLM7eMBC.totalSupply.call({from: accounts[0]});
		const addressviOhBjB = await LedgisLM7eMBC.unfreeze.call(addressbUarijQ, {from: accounts[2]});

		assert.equal(boolz1kX47s, true)
		assert.equal(uint256KFSKm5b, BigInt("10000000000000"))
		await expect(LedgisLM7eMBC.unfreeze.call(addressbUarijQ, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgiseUSAEoe = await Ledgis.new({from: accounts[3]});
		const addressyKyFD9x = accounts[3]
		const addressigUgxT = accounts[3]
		const uintsNXFmvV = BigInt("1899")
		const uintZEb17M = BigInt("154")
		const addresshgG8ynT = accounts[0]
		const uintnlWrDfg = BigInt("619")
		const addressfZtmJDP = accounts[2]
		const uintTePUVbf = BigInt("629")
		const uintVE7Dd7 = BigInt("1717")
		const addressTEIpBMc = accounts[4]
		const addressSjDw5D = accounts[3]
		const uint256tiPMeF = await LedgiseUSAEoe.allowance.call(addressigUgxT, addressyKyFD9x, {from: accounts[5]});
		const addressAWJbtcN = await LedgiseUSAEoe.lockAfter.call(addresshgG8ynT, uintZEb17M, uintsNXFmvV, {from: "0x0000000000000000000000000000000000000001"});
		const boolNkSojNL = await LedgiseUSAEoe.transfer.call(addressfZtmJDP, uintnlWrDfg, {from: accounts[5]});
		const uint256h7ABO9k = await LedgiseUSAEoe.afterTime.call(uintTePUVbf, {from: accounts[2]});
		const bool1hQuG7 = await LedgiseUSAEoe.transferFrom.call(addressSjDw5D, addressTEIpBMc, uintVE7Dd7, {from: accounts[0]});
		await LedgiseUSAEoe.whenPaused.call({from: accounts[3]});

		assert.equal(uint256tiPMeF, BigInt("0"))
		await expect(LedgiseUSAEoe.lockAfter.call(addresshgG8ynT, uintZEb17M, uintsNXFmvV, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisxZGKIvk = await Ledgis.new({from: accounts[2]});
		const addressSLPzSWK = accounts[4]
		const uintcM5Jg6O = BigInt("1417")
		const addressL8vhaWK = accounts[4]
		const uintP445z3n = BigInt("829")
		const addresswNCHH4d = "0x0000000000000000000000000000000000000001"
		const uintfnc8ttQ = BigInt("1428")
		const addressGLNbzre = accounts[0]
		const uintMK3Dg8x = BigInt("903")
		const addresskpfXRFl = accounts[2]
		const addressF6NAnvP = accounts[4]
		const uintjfoSOvr = BigInt("1204")
		const uintZ1qINcu = BigInt("1547")
		const addressAZLkNq = accounts[0]
		const uintrjSFz7o = BigInt("1792")
		const addressvOH4nU7 = accounts[3]
		const addresshrJaNa = accounts[2]
		const addressgzEa58u = accounts[4]
		const uint256v1tUj1Q = await LedgisxZGKIvk.currentTime.call({from: accounts[5]});
		const uint256Q47gnkL = await LedgisxZGKIvk.lockCount.call(addressSLPzSWK, {from: "0x0000000000000000000000000000000000000001"});
		const addresslUYD1Pd = await LedgisxZGKIvk.unlock.call(addressL8vhaWK, uintcM5Jg6O, {from: accounts[3]});
		const boolAhuMiQ = await LedgisxZGKIvk.approve.call(addresswNCHH4d, uintP445z3n, {from: accounts[4]});
		const boolUIO29F0 = await LedgisxZGKIvk.approve.call(addressGLNbzre, uintfnc8ttQ, {from: accounts[5]});
		const boolBrCtKXO = await LedgisxZGKIvk.transferFrom.call(addressF6NAnvP, addresskpfXRFl, uintMK3Dg8x, {from: accounts[0]});
		const boolp3pvSmU = await LedgisxZGKIvk.transferWithLock.call(addressAZLkNq, uintZ1qINcu, uintjfoSOvr, {from: accounts[1]});
		const boolpgMDZgU = await LedgisxZGKIvk.transferFrom.call(addresshrJaNa, addressvOH4nU7, uintrjSFz7o, {from: accounts[1]});
		const addressaoc8E5l = await LedgisxZGKIvk.freeze.call(addressgzEa58u, {from: accounts[0]});

		assert.equal(uint256Q47gnkL, BigInt("0"))
		assert.equal(uint256v1tUj1Q, BigInt("1630231345"))
		await expect(LedgisxZGKIvk.unlock.call(addressL8vhaWK, uintcM5Jg6O, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisKaSuXah = await Ledgis.new({from: accounts[1]});
		const uintwZmkg58 = BigInt("846")
		const addressFsWUkxB = accounts[1]
		const uintwtMRDFu = BigInt("1324")
		const addressAoXAcyp = accounts[3]
		const addressRoYc6g = accounts[4]
		const addresszF2S342 = accounts[0]
		const uintGDV5Nr = BigInt("902")
		const uintwLjDzjq = BigInt("1592")
		const addressnsmPHfP = accounts[1]
		await LedgisKaSuXah.lockState.call(addressFsWUkxB, uintwZmkg58, {from: "0x0000000000000000000000000000000000000001"});
		const booljWhkwLQ = await LedgisKaSuXah.transferFrom.call(addressRoYc6g, addressAoXAcyp, uintwtMRDFu, {from: accounts[0]});
		const addressNxXxP6X = await LedgisKaSuXah.transferOwnership.call(addresszF2S342, {from: accounts[2]});
		const addresscnw81lr = await LedgisKaSuXah.lock.call(addressnsmPHfP, uintwLjDzjq, uintGDV5Nr, {from: accounts[2]});

		await expect(LedgisKaSuXah.lockState.call(addressFsWUkxB, uintwZmkg58, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisYEPxEJW = await Ledgis.new({from: accounts[2]});
		const addressUACJmQB = accounts[4]
		const uintkwl1bNr = BigInt("1235")
		const addressRalgZd = accounts[0]
		const uint256H5KfGQ1 = await LedgisYEPxEJW.balanceOf.call(addressUACJmQB, {from: accounts[4]});
		const boolunZRGUq = await LedgisYEPxEJW.increaseAllowance.call(addressRalgZd, uintkwl1bNr, {from: accounts[1]});

		assert.equal(boolunZRGUq, true)
		assert.equal(uint256H5KfGQ1, BigInt("0"))
	});

	it('test for Ledgis', async () => {
		const LedgisYEPxEJW = await Ledgis.new({from: accounts[2]});
		const addressmapG45w = accounts[4]
		const uintDp2XL1w = BigInt("1235")
		const addressMdkH7p9 = accounts[0]
		await LedgisYEPxEJW.onlyOwner.call({from: accounts[3]});
		const uint256H5KfGQ1 = await LedgisYEPxEJW.balanceOf.call(addressmapG45w, {from: accounts[4]});
		const boolunZRGUq = await LedgisYEPxEJW.increaseAllowance.call(addressMdkH7p9, uintDp2XL1w, {from: accounts[1]});

		await expect(LedgisYEPxEJW.onlyOwner.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisYEPxEJW = await Ledgis.new({from: accounts[2]});
		const addressoRMPEzn = accounts[5]
		const uintkWeTXnl = BigInt("1235")
		const address2fEoOL = accounts[1]
		const uintSgIwhRP = BigInt("219")
		const addressYxQjIoE = accounts[0]
		const uint256H5KfGQ1 = await LedgisYEPxEJW.balanceOf.call(addressoRMPEzn, {from: accounts[4]});
		const boolunZRGUq = await LedgisYEPxEJW.increaseAllowance.call(address2fEoOL, uintkWeTXnl, {from: accounts[1]});
		const booljsrEA4 = await LedgisYEPxEJW.decreaseAllowance.call(addressYxQjIoE, uintSgIwhRP, {from: accounts[2]});

		assert.equal(boolunZRGUq, true)
		assert.equal(uint256H5KfGQ1, BigInt("0"))
		await expect(LedgisYEPxEJW.decreaseAllowance.call(addressYxQjIoE, uintSgIwhRP, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisYEPxEJW = await Ledgis.new({from: accounts[2]});
		const addressNSgncwx = accounts[5]
		const addresscXNS7n3 = accounts[0]
		const uint7Ywabj = BigInt("1235")
		const addressLoEw2GY = accounts[1]
		const uintPAvCdpW = BigInt("219")
		const addressPOXTeJo = accounts[0]
		const uint256H5KfGQ1 = await LedgisYEPxEJW.balanceOf.call(addressNSgncwx, {from: accounts[4]});
		const addressIKqO5io = await LedgisYEPxEJW.freeze.call(addresscXNS7n3, {from: accounts[2]});
		const boolunZRGUq = await LedgisYEPxEJW.increaseAllowance.call(addressLoEw2GY, uint7Ywabj, {from: accounts[1]});
		await LedgisYEPxEJW.whenNotFrozen.call({from: accounts[5]});
		await LedgisYEPxEJW.whenNotFrozen.call({from: accounts[3]});
		const booljsrEA4 = await LedgisYEPxEJW.decreaseAllowance.call(addressPOXTeJo, uintPAvCdpW, {from: accounts[2]});

		assert.equal(boolunZRGUq, true)
		assert.equal(uint256H5KfGQ1, BigInt("0"))
		await expect(LedgisYEPxEJW.whenNotFrozen.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisKevTNRy = await Ledgis.new({from: accounts[1]});
		const addressKDoLKlc = accounts[2]
		const uintYdsk2J5 = BigInt("1740")
		const uintVI7FVCi = BigInt("385")
		const addressYomQF24 = accounts[1]
		const addressSQxVYiD = accounts[2]
		const uintUDU1gYt = BigInt("823")
		const addressLPGwNf0 = accounts[1]
		const uintWf1m6Lo = BigInt("1871")
		const addressTjqxTXr = accounts[0]
		const addresshJ440Fi = accounts[2]
		const uintq0qC18f = BigInt("981")
		const addressHA2tySY = accounts[1]
		const uintNIRLg25 = BigInt("1796")
		const uintxYsvtjc = BigInt("881")
		const addressteSTSbS = accounts[5]
		const boolgJvnZRS = await LedgisKevTNRy.isFrozen.call(addressKDoLKlc, {from: accounts[3]});
		const boolkS07qms = await LedgisKevTNRy.transferWithLockAfter.call(addressYomQF24, uintVI7FVCi, uintYdsk2J5, {from: accounts[1]});
		const uint256EDwxe14 = await LedgisKevTNRy.balanceOf.call(addressSQxVYiD, {from: accounts[1]});
		const boolQBxUvkf = await LedgisKevTNRy.mint.call(addressLPGwNf0, uintUDU1gYt, {from: accounts[1]});
		const boolD59C0v6 = await LedgisKevTNRy.transferFrom.call(addresshJ440Fi, addressTjqxTXr, uintWf1m6Lo, {from: accounts[5]});
		const boolzTs2suq = await LedgisKevTNRy.increaseAllowance.call(addressHA2tySY, uintq0qC18f, {from: "0x0000000000000000000000000000000000000001"});
		const boolNSaHiVE = await LedgisKevTNRy.transferWithLock.call(addressteSTSbS, uintxYsvtjc, uintNIRLg25, {from: accounts[2]});

		assert.equal(boolQBxUvkf, true)
		assert.equal(boolgJvnZRS, false)
		assert.equal(boolkS07qms, true)
		assert.equal(uint256EDwxe14, BigInt("0"))
		await expect(LedgisKevTNRy.transferFrom.call(addresshJ440Fi, addressTjqxTXr, uintWf1m6Lo, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisYEPxEJW = await Ledgis.new({from: accounts[2]});
		const addresscRfQ75v = accounts[5]
		const addressRBbNX0w = accounts[5]
		const addresssIKey9N = accounts[4]
		const uintRc1ltxx = BigInt("1235")
		const addresszzYaJW = accounts[1]
		const uint256H5KfGQ1 = await LedgisYEPxEJW.balanceOf.call(addresscRfQ75v, {from: accounts[4]});
		const boolC1CYcmL = await LedgisYEPxEJW.isFrozen.call(addressRBbNX0w, {from: accounts[1]});
		const addressI8B05A = await LedgisYEPxEJW.unfreeze.call(addresssIKey9N, {from: accounts[2]});
		const boolunZRGUq = await LedgisYEPxEJW.increaseAllowance.call(addresszzYaJW, uintRc1ltxx, {from: accounts[1]});

		assert.equal(boolC1CYcmL, false)
		assert.equal(boolunZRGUq, true)
		assert.equal(uint256H5KfGQ1, BigInt("0"))
	});

	it('test for Ledgis', async () => {
		const LedgisKaSuXah = await Ledgis.new({from: accounts[1]});
		const uintIkK7bhr = BigInt("1774")
		const addressO2Yt6V6 = accounts[3]
		const uintvsm3AGT = BigInt("1324")
		const addressepJG7Bs = accounts[2]
		const addressK0U9LgT = accounts[4]
		const addressCwEX6PO = await LedgisKaSuXah.unlock.call(addressO2Yt6V6, uintIkK7bhr, {from: accounts[1]});
		const booljWhkwLQ = await LedgisKaSuXah.transferFrom.call(addressK0U9LgT, addressepJG7Bs, uintvsm3AGT, {from: accounts[0]});

		await expect(LedgisKaSuXah.unlock.call(addressO2Yt6V6, uintIkK7bhr, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisKaSuXah = await Ledgis.new({from: accounts[1]});
		const addresstfPSpHo = accounts[2]
		const addressNYn3N7l = accounts[0]
		const uintDULMWIT = BigInt("1694")
		const addressh32s9aF = accounts[2]
		const uintXnP6C3A = BigInt("1324")
		const addressyyIRJ5Y = accounts[3]
		const addressa2hcQf9 = accounts[4]
		const uint256HfJtphQ = await LedgisKaSuXah.allowance.call(addressNYn3N7l, addresstfPSpHo, {from: accounts[3]});
		const addressbzDD0S = await LedgisKaSuXah.burn.call(addressh32s9aF, uintDULMWIT, {from: accounts[1]});
		const booljWhkwLQ = await LedgisKaSuXah.transferFrom.call(addressa2hcQf9, addressyyIRJ5Y, uintXnP6C3A, {from: accounts[0]});

		assert.equal(uint256HfJtphQ, BigInt("0"))
		await expect(LedgisKaSuXah.burn.call(addressh32s9aF, uintDULMWIT, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisfhLDMo6 = await Ledgis.new({from: accounts[3]});
		const uintVizMaJH = BigInt("1289")
		const addresseNqXvGN = accounts[1]
		const uintXvlQHre = BigInt("1008")
		const uintOcZl0sB = BigInt("1412")
		const addressFzruWIP = accounts[0]
		const uintyY9huKI = BigInt("44")
		const addressBr9HU0G = "0x0000000000000000000000000000000000000001"
		const boollZMQrcV = await LedgisfhLDMo6.transfer.call(addresseNqXvGN, uintVizMaJH, {from: accounts[3]});
		const uint256mO4utZZ = await LedgisfhLDMo6.totalSupply.call({from: accounts[0]});
		const uint256DaczMw = await LedgisfhLDMo6.totalSupply.call({from: accounts[5]});
		const addressbgMw6EX = await LedgisfhLDMo6.lockAfter.call(addressFzruWIP, uintOcZl0sB, uintXvlQHre, {from: accounts[4]});
		const booluX2a0w = await LedgisfhLDMo6.approve.call(addressBr9HU0G, uintyY9huKI, {from: accounts[3]});

		assert.equal(boollZMQrcV, true)
		assert.equal(uint256DaczMw, BigInt("10000000000000"))
		assert.equal(uint256mO4utZZ, BigInt("10000000000000"))
		await expect(LedgisfhLDMo6.lockAfter.call(addressFzruWIP, uintOcZl0sB, uintXvlQHre, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisYEPxEJW = await Ledgis.new({from: accounts[2]});
		const addressqCb7YER = accounts[5]
		await LedgisYEPxEJW.renounceOwnership.call({from: accounts[2]});
		const uint256H5KfGQ1 = await LedgisYEPxEJW.balanceOf.call(addressqCb7YER, {from: accounts[4]});

		await expect(LedgisYEPxEJW.renounceOwnership.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisYEPxEJW = await Ledgis.new({from: accounts[2]});
		const addressO1vqosL = accounts[5]
		const uintozLKn9G = BigInt("775")
		const uint256H5KfGQ1 = await LedgisYEPxEJW.balanceOf.call(addressO1vqosL, {from: accounts[4]});
		const uint256nauggs3 = await LedgisYEPxEJW.afterTime.call(uintozLKn9G, {from: accounts[4]});

		assert.equal(uint256H5KfGQ1, BigInt("0"))
		assert.equal(uint256nauggs3, BigInt("1630232114"))
	});

	it('test for Ledgis', async () => {
		const LedgisKaSuXah = await Ledgis.new({from: accounts[1]});
		const addressHrImXui = accounts[4]
		const addressuA8tOUu = accounts[1]
		const uintDbupKI3 = BigInt("1113")
		const addresshKKzT8A = accounts[1]
		const addresso2h0Esd = accounts[5]
		const uintIM9LRDF = BigInt("1781")
		const addressBEVGt7D = accounts[3]
		const uintfdYerJj = BigInt("1348")
		const uintRHZbSaF = BigInt("1393")
		const addressHNx45I = accounts[0]
		const uinthyYOWK0 = BigInt("863")
		const addressNXlKZxD = accounts[3]
		const uint256MZ4T8wS = await LedgisKaSuXah.balanceOf.call(addressHrImXui, {from: accounts[2]});
		const addressge9eHwB = await LedgisKaSuXah.transferOwnership.call(addressuA8tOUu, {from: accounts[1]});
		const boolmL9u3o4 = await LedgisKaSuXah.transferFrom.call(addresso2h0Esd, addresshKKzT8A, uintDbupKI3, {from: accounts[2]});
		const addressCwEX6PO = await LedgisKaSuXah.unlock.call(addressBEVGt7D, uintIM9LRDF, {from: accounts[1]});
		const booluIfNeM = await LedgisKaSuXah.transferWithLockAfter.call(addressHNx45I, uintRHZbSaF, uintfdYerJj, {from: accounts[3]});
		const addressKfTAGP7 = await LedgisKaSuXah.unlock.call(addressNXlKZxD, uinthyYOWK0, {from: accounts[3]});

		assert.equal(uint256MZ4T8wS, BigInt("0"))
		await expect(LedgisKaSuXah.transferFrom.call(addresso2h0Esd, addresshKKzT8A, uintDbupKI3, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisQRKhgCV = await Ledgis.new({from: "0x0000000000000000000000000000000000000001"});
		const uintxBniJi = BigInt("27")
		const uintPCiCxlT = BigInt("232")
		const addressSM8VhcM = accounts[4]
		const addresse26W4d2 = accounts[3]
		const uintXXTM2Lw = BigInt("177")
		const addressiKyAdQe = accounts[1]
		const addressxcwkWLg = accounts[0]
		const addressA96gSGf = accounts[2]
		const boolvT5f7aM = await LedgisQRKhgCV.transferWithLock.call(addressSM8VhcM, uintPCiCxlT, uintxBniJi, {from: "0x0000000000000000000000000000000000000001"});
		const addressvioOvLR = await LedgisQRKhgCV.freeze.call(addresse26W4d2, {from: accounts[0]});
		const booluDxSRuK = await LedgisQRKhgCV.decreaseAllowance.call(addressiKyAdQe, uintXXTM2Lw, {from: accounts[1]});
		const uint256iwGtR4 = await LedgisQRKhgCV.balanceOf.call(addressxcwkWLg, {from: accounts[0]});
		const addressz1WjIl = await LedgisQRKhgCV.unfreeze.call(addressA96gSGf, {from: accounts[1]});
	});

	it('test for Ledgis', async () => {
		const LedgisYEPxEJW = await Ledgis.new({from: accounts[2]});
		const uint7k4jgP = BigInt("881")
		const addressGvtEfpG = accounts[4]
		const addressZrtEj7 = accounts[1]
		const addressqT8e4R0 = accounts[6]
		const boolssHlNsT = await LedgisYEPxEJW.transfer.call(addressGvtEfpG, uint7k4jgP, {from: accounts[2]});
		await LedgisYEPxEJW.unpause.call({from: accounts[2]});
		const uint256q6i3YmU = await LedgisYEPxEJW.lockCount.call(addressZrtEj7, {from: accounts[5]});
		const uint256H5KfGQ1 = await LedgisYEPxEJW.balanceOf.call(addressqT8e4R0, {from: accounts[4]});
		await LedgisYEPxEJW.unpause.call({from: accounts[3]});

		assert.equal(boolssHlNsT, true)
		await expect(LedgisYEPxEJW.unpause.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisKaSuXah = await Ledgis.new({from: accounts[1]});
		const addressR9JhJHB = accounts[5]
		const uintFPQwaqk = BigInt("329")
		const uintmapLRxD = BigInt("369")
		const addressyNFA2t = accounts[3]
		const uintBjON9PL = BigInt("1470")
		const addressJ1D8HpA = accounts[2]
		const uintpbnUeQB = BigInt("1781")
		const addressNLrSv16 = accounts[3]
		const uintpUDrv8e = BigInt("863")
		const addressyDC2Iac = accounts[3]
		const uint256MZ4T8wS = await LedgisKaSuXah.balanceOf.call(addressR9JhJHB, {from: accounts[2]});
		const uint256jXCu8Pd = await LedgisKaSuXah.currentTime.call({from: accounts[3]});
		const addressUQ5ijz = await LedgisKaSuXah.lock.call(addressyNFA2t, uintmapLRxD, uintFPQwaqk, {from: accounts[1]});
		const boolGzBloZC = await LedgisKaSuXah.transfer.call(addressJ1D8HpA, uintBjON9PL, {from: accounts[1]});
		const addressCwEX6PO = await LedgisKaSuXah.unlock.call(addressNLrSv16, uintpbnUeQB, {from: accounts[1]});
		const addressKfTAGP7 = await LedgisKaSuXah.unlock.call(addressyDC2Iac, uintpUDrv8e, {from: accounts[3]});

		assert.equal(uint256MZ4T8wS, BigInt("0"))
		assert.equal(uint256jXCu8Pd, BigInt("1630231353"))
		await expect(LedgisKaSuXah.lock.call(addressyNFA2t, uintmapLRxD, uintFPQwaqk, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisKaSuXah = await Ledgis.new({from: accounts[1]});
		const uintbqTnXEz = BigInt("436")
		const uintrtjJYDP = BigInt("288")
		const addressFNaNujp = accounts[0]
		const uintUtfRRU7 = BigInt("1324")
		const addressEJjSLgn = accounts[3]
		const addressJz0BW7G = accounts[4]
		const uint256JN9PKE4 = await LedgisKaSuXah.totalSupply.call({from: accounts[0]});
		const boollstgz5l = await LedgisKaSuXah.transferWithLock.call(addressFNaNujp, uintrtjJYDP, uintbqTnXEz, {from: accounts[1]});
		const booljWhkwLQ = await LedgisKaSuXah.transferFrom.call(addressJz0BW7G, addressEJjSLgn, uintUtfRRU7, {from: accounts[0]});

		assert.equal(boollstgz5l, true)
		assert.equal(uint256JN9PKE4, BigInt("10000000000000"))
		await expect(LedgisKaSuXah.transferFrom.call(addressJz0BW7G, addressEJjSLgn, uintUtfRRU7, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisKaSuXah = await Ledgis.new({from: accounts[1]});
		const uintDprZUW9 = BigInt("1819")
		const addressqCCDHp = accounts[4]
		const addressspf5Iyc = accounts[5]
		const uintjsBBrfr = BigInt("1470")
		const addressRcVcjlA = accounts[2]
		const uintp0sOLHW = BigInt("1781")
		const addressLw7WFWT = accounts[3]
		const uintqRjMD1O = BigInt("863")
		const addressS4AGR0x = accounts[3]
		await LedgisKaSuXah.pause.call({from: accounts[1]});
		const boolnfyqO2X = await LedgisKaSuXah.mint.call(addressqCCDHp, uintDprZUW9, {from: accounts[1]});
		const uint256MZ4T8wS = await LedgisKaSuXah.balanceOf.call(addressspf5Iyc, {from: accounts[2]});
		const boolGzBloZC = await LedgisKaSuXah.transfer.call(addressRcVcjlA, uintjsBBrfr, {from: accounts[1]});
		const addressCwEX6PO = await LedgisKaSuXah.unlock.call(addressLw7WFWT, uintp0sOLHW, {from: accounts[1]});
		const addressKfTAGP7 = await LedgisKaSuXah.unlock.call(addressS4AGR0x, uintqRjMD1O, {from: accounts[3]});

		await expect(LedgisKaSuXah.pause.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});
})