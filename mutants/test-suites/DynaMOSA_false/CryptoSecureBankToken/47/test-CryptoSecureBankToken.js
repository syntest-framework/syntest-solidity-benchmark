const CryptoSecureBankToken = artifacts.require("CryptoSecureBankToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('CryptoSecureBankToken', (accounts) => {
	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenfkrO11q = await CryptoSecureBankToken.new({from: accounts[2]});
		const uintFbguAhQ = BigInt("318")
		const addressc31bj69 = accounts[4]
		const addressaLDq4Le = accounts[3]
		const uintoLcFO5t = BigInt("945")
		const addressudh4ZcL = accounts[0]
		const uintEdimhAq = BigInt("934")
		const addressF718784 = accounts[3]
		const addressgyn7cJJ = accounts[1]
		const uintiQIcMZY = BigInt("702")
		const addressIpFLGDV = accounts[3]
		const uintXhgqYLG = BigInt("47")
		const addressWHcYWI = accounts[1]
//		const boolt8U8Nb7 = await CryptoSecureBankTokenfkrO11q.transferFrom.call(addressaLDq4Le, addressc31bj69, uintFbguAhQ, {from: accounts[0]});
//		await CryptoSecureBankTokenfkrO11q.unpause.call({from: accounts[2]});
//		const boolzvDMSFn = await CryptoSecureBankTokenfkrO11q.approve.call(addressudh4ZcL, uintoLcFO5t, {from: accounts[2]});
//		const bool378lQ1 = await CryptoSecureBankTokenfkrO11q.transferFrom.call(addressgyn7cJJ, addressF718784, uintEdimhAq, {from: accounts[3]});
//		const boolfWVTE6P = await CryptoSecureBankTokenfkrO11q.transfer.call(addressIpFLGDV, uintiQIcMZY, {from: accounts[4]});
//		const booljvfuXyG = await CryptoSecureBankTokenfkrO11q.transfer.call(addressWHcYWI, uintXhgqYLG, {from: accounts[2]});

		await expect(CryptoSecureBankTokenfkrO11q.transferFrom.call(addressaLDq4Le, addressc31bj69, uintFbguAhQ, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenaWYUC4R = await CryptoSecureBankToken.new({from: "0x0000000000000000000000000000000000000001"});
		const addressId8zIQ = accounts[1]
		const addressVPJh2kT = accounts[2]
		const uintQcGYxr = BigInt("1295")
		const addressDZ3AUeV = "0x0000000000000000000000000000000000000001"
		const address9kesNG = accounts[5]
		const boolTP1woOI = await CryptoSecureBankTokenaWYUC4R.getBlackListStatus.call(addressId8zIQ, {from: accounts[0]});
		const addressyGXlORD = await CryptoSecureBankTokenaWYUC4R.addBlackList.call(addressVPJh2kT, {from: accounts[0]});
		await CryptoSecureBankTokenaWYUC4R.onlyOwner.call({from: accounts[1]});
		await CryptoSecureBankTokenaWYUC4R.unpause.call({from: accounts[3]});
		const booljVN00rw = await CryptoSecureBankTokenaWYUC4R.transfer.call(addressDZ3AUeV, uintQcGYxr, {from: accounts[4]});
		const boolyftz3PP = await CryptoSecureBankTokenaWYUC4R.getBlackListStatus.call(address9kesNG, {from: accounts[1]});
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenGCyuxD0 = await CryptoSecureBankToken.new({from: accounts[5]});
		const addressoSv2lFO = accounts[5]
		const addresse2zM0z = "0x0000000000000000000000000000000000000001"
		const uintUWFPatn = BigInt("1138")
		const addresskX2s671 = accounts[4]
		const addressBOqWF6M = accounts[1]
		const addressp4xlRqO = accounts[1]
		const uintsKR1HKB = BigInt("905")
		const uintn90aCDe = await CryptoSecureBankTokenGCyuxD0.allowance.call(addresse2zM0z, addressoSv2lFO, {from: accounts[1]});
		const boolt82xZTb = await CryptoSecureBankTokenGCyuxD0.approve.call(addresskX2s671, uintUWFPatn, {from: accounts[4]});
//		const addressEO55taX = await CryptoSecureBankTokenGCyuxD0.transferOwnership.call(addressBOqWF6M, {from: accounts[2]});
//		const addressZml8bX1 = await CryptoSecureBankTokenGCyuxD0.transferOwnership.call(addressp4xlRqO, {from: accounts[4]});
//		const boolToLgnCX = await CryptoSecureBankTokenGCyuxD0.redeem.call(uintsKR1HKB, {from: accounts[4]});

		assert.equal(boolt82xZTb, true)
		assert.equal(uintn90aCDe, BigInt("0"))
		await expect(CryptoSecureBankTokenGCyuxD0.transferOwnership.call(addressBOqWF6M, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenwKIn1eX = await CryptoSecureBankToken.new({from: accounts[4]});
		const addressP8ytmns = accounts[2]
		const uintLHoJDD0 = BigInt("1557")
//		await CryptoSecureBankTokenwKIn1eX.whenPaused.call({from: accounts[2]});
//		const addressi0JJFLX = await CryptoSecureBankTokenwKIn1eX.setOwner2.call(addressP8ytmns, {from: accounts[3]});
//		const boolExO7ZPQ = await CryptoSecureBankTokenwKIn1eX.redeem.call(uintLHoJDD0, {from: accounts[5]});

		await expect(CryptoSecureBankTokenwKIn1eX.whenPaused.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenE1oQsqF = await CryptoSecureBankToken.new({from: accounts[0]});
		const addressN5ccMFm = accounts[3]
		const addressTb9zHF = accounts[3]
		const uintW7nNDKb = await CryptoSecureBankTokenE1oQsqF.balanceOf.call(addressN5ccMFm, {from: accounts[0]});
//		await CryptoSecureBankTokenE1oQsqF.whenPaused.call({from: accounts[3]});
//		await CryptoSecureBankTokenE1oQsqF.onlyOwner.call({from: accounts[1]});
//		const uintMqmefUX = await CryptoSecureBankTokenE1oQsqF.balanceOf.call(addressTb9zHF, {from: accounts[3]});

		assert.equal(uintW7nNDKb, BigInt("0"))
		await expect(CryptoSecureBankTokenE1oQsqF.whenPaused.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenUpgAHf1 = await CryptoSecureBankToken.new({from: accounts[4]});
		const addressUvmlnxf = accounts[4]
		const addressx2C1ICx = accounts[2]
		const addressXf7j2GG = accounts[0]
		const uintJhf0lrB = BigInt("569")
		const addressXlKKc7Q = accounts[5]
		const addressZBqraJH = accounts[0]
		const uintevmEzTY = BigInt("967")
		const addressIit2dqC = accounts[5]
		const addressB53dXs = await CryptoSecureBankTokenUpgAHf1.addBlackList.call(addressUvmlnxf, {from: accounts[4]});
		const uintAwhYxrg = await CryptoSecureBankTokenUpgAHf1.allowance.call(addressXf7j2GG, addressx2C1ICx, {from: accounts[0]});
//		const boolpy1jjzA = await CryptoSecureBankTokenUpgAHf1.transferFrom.call(addressZBqraJH, addressXlKKc7Q, uintJhf0lrB, {from: accounts[2]});
//		const boolCi9H3ZC = await CryptoSecureBankTokenUpgAHf1.approve.call(addressIit2dqC, uintevmEzTY, {from: accounts[0]});
//		const addressRdLMGaR = await CryptoSecureBankTokenUpgAHf1.getOwner.call({from: accounts[0]});

		assert.equal(uintAwhYxrg, BigInt("0"))
		await expect(CryptoSecureBankTokenUpgAHf1.transferFrom.call(addressZBqraJH, addressXlKKc7Q, uintJhf0lrB, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokennM7WzHd = await CryptoSecureBankToken.new({from: accounts[2]});
		const addresshRm7Yuu = accounts[5]
		const addressCTk2yaP = accounts[4]
		const addresscJtcMG8 = await CryptoSecureBankTokennM7WzHd.transferOwnership.call(addresshRm7Yuu, {from: accounts[2]});
//		const boolPOZjrY8 = await CryptoSecureBankTokennM7WzHd.deprecate.call(addressCTk2yaP, {from: accounts[4]});

		await expect(CryptoSecureBankTokennM7WzHd.deprecate.call(addressCTk2yaP, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenE1oQsqF = await CryptoSecureBankToken.new({from: accounts[0]});
		const uintclz88yJ = BigInt("2043")
		const addressEB5NcU = accounts[1]
		const addressciIpLpy = accounts[3]
		const addressPuoozQC = accounts[2]
		const addresssw9HWNv = accounts[3]
		const boolgWYZGZX = await CryptoSecureBankTokenE1oQsqF.approve.call(addressEB5NcU, uintclz88yJ, {from: accounts[2]});
		const uintW7nNDKb = await CryptoSecureBankTokenE1oQsqF.balanceOf.call(addressciIpLpy, {from: accounts[0]});
		const uintHA4yro = await CryptoSecureBankTokenE1oQsqF.balanceOf.call(addressPuoozQC, {from: accounts[1]});
		const uintocjsvR5 = await CryptoSecureBankTokenE1oQsqF.totalSupply.call({from: accounts[1]});
//		await CryptoSecureBankTokenE1oQsqF.whenPaused.call({from: accounts[3]});
//		const uintMqmefUX = await CryptoSecureBankTokenE1oQsqF.balanceOf.call(addresssw9HWNv, {from: accounts[3]});

		assert.equal(boolgWYZGZX, true)
		assert.equal(uintHA4yro, BigInt("0"))
		assert.equal(uintW7nNDKb, BigInt("0"))
		assert.equal(uintocjsvR5, BigInt("100000000000000000000000000"))
		await expect(CryptoSecureBankTokenE1oQsqF.whenPaused.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenE1oQsqF = await CryptoSecureBankToken.new({from: accounts[0]});
		const uintnJtVVkS = BigInt("2043")
		const addressBFgQCJq = accounts[1]
		const addressngfRdmn = accounts[3]
		const addressGVIaMYw = accounts[3]
		const boolgWYZGZX = await CryptoSecureBankTokenE1oQsqF.approve.call(addressBFgQCJq, uintnJtVVkS, {from: accounts[2]});
		const uintW7nNDKb = await CryptoSecureBankTokenE1oQsqF.balanceOf.call(addressngfRdmn, {from: accounts[0]});
		const addressHgfDDQ6 = await CryptoSecureBankTokenE1oQsqF.getOwner.call({from: accounts[5]});
//		await CryptoSecureBankTokenE1oQsqF.whenPaused.call({from: accounts[3]});
//		await CryptoSecureBankTokenE1oQsqF.whenNotPaused.call({from: accounts[3]});
//		const uintMqmefUX = await CryptoSecureBankTokenE1oQsqF.balanceOf.call(addressGVIaMYw, {from: accounts[3]});

		assert.equal(addressHgfDDQ6, 0xe6285436c8D9047fd1EeB23A3Be018A6794c4Caf)
		assert.equal(boolgWYZGZX, true)
		assert.equal(uintW7nNDKb, BigInt("0"))
		await expect(CryptoSecureBankTokenE1oQsqF.whenPaused.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokendZMqUTB = await CryptoSecureBankToken.new({from: accounts[2]});
		const addressHIHuD3 = accounts[3]
		const addresseGDv6b = accounts[5]
		const boolwr0s5cv = await CryptoSecureBankTokendZMqUTB.getBlackListStatus.call(addressHIHuD3, {from: accounts[5]});
		const boolFa2fjCU = await CryptoSecureBankTokendZMqUTB.getBlackListStatus.call(addresseGDv6b, {from: accounts[4]});

		assert.equal(boolFa2fjCU, false)
		assert.equal(boolwr0s5cv, false)
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenIYW8XHw = await CryptoSecureBankToken.new({from: accounts[3]});
		const uintQ8V0kF6 = BigInt("1757")
		const addressS2ZQc7X = accounts[1]
		const addresssL63QA4 = accounts[4]
		const addressdpKV5GU = accounts[2]
		const addresspKdsjt4 = accounts[4]
		const uintYufQYsu = BigInt("1609")
		const addressvBeHfD9 = accounts[0]
		const uintlcAxcN8 = BigInt("766")
		const addressOh646BO = accounts[5]
		const addressuLuo8w = "0x0000000000000000000000000000000000000001"
//		const boolzsZSfDm = await CryptoSecureBankTokenIYW8XHw.transfer.call(addressS2ZQc7X, uintQ8V0kF6, {from: accounts[4]});
//		const addresscOWbvL3 = await CryptoSecureBankTokenIYW8XHw.destroyBlackFunds.call(addresssL63QA4, {from: accounts[4]});
//		await CryptoSecureBankTokenIYW8XHw.whenPaused.call({from: accounts[4]});
//		const uintifI04O = await CryptoSecureBankTokenIYW8XHw.allowance.call(addresspKdsjt4, addressdpKV5GU, {from: accounts[4]});
//		const boolNUKAUiG = await CryptoSecureBankTokenIYW8XHw.transfer.call(addressvBeHfD9, uintYufQYsu, {from: accounts[1]});
//		const boolPA4szD = await CryptoSecureBankTokenIYW8XHw.transferFrom.call(addressuLuo8w, addressOh646BO, uintlcAxcN8, {from: accounts[2]});

		await expect(CryptoSecureBankTokenIYW8XHw.transfer.call(addressS2ZQc7X, uintQ8V0kF6, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenfkrO11q = await CryptoSecureBankToken.new({from: accounts[2]});
		const uintKrFQxMv = BigInt("47")
		const addressobunvLo = accounts[1]
		const booljvfuXyG = await CryptoSecureBankTokenfkrO11q.transfer.call(addressobunvLo, uintKrFQxMv, {from: accounts[2]});

		assert.equal(booljvfuXyG, true)
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenIGSeows = await CryptoSecureBankToken.new({from: accounts[3]});
		const addressB9zOBQG = accounts[3]
		const addressYxMJolU = accounts[4]
		const addressGHZKgBX = accounts[5]
		const uintc1OC7PQ = BigInt("1448")
		const addresswUEuSil = accounts[3]
		const boolDKQOGTj = await CryptoSecureBankTokenIGSeows.deprecate.call(addressB9zOBQG, {from: accounts[3]});
		const uinthZIacA = await CryptoSecureBankTokenIGSeows.allowance.call(addressGHZKgBX, addressYxMJolU, {from: accounts[3]});
//		const boolbhmne1D = await CryptoSecureBankTokenIGSeows.transfer.call(addresswUEuSil, uintc1OC7PQ, {from: accounts[2]});

		assert.equal(boolDKQOGTj, true)
		assert.equal(uinthZIacA, BigInt("0"))
		await expect(CryptoSecureBankTokenIGSeows.transfer.call(addresswUEuSil, uintc1OC7PQ, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenfkrO11q = await CryptoSecureBankToken.new({from: accounts[2]});
		const uintYbFHVat = BigInt("47")
		const addresspHWcPRN = accounts[2]
		const uintv77quKl = BigInt("42")
		const uint8rpMrx = BigInt("891")
		const addresskAJflpm = accounts[6]
		const addressvpmooFc = accounts[1]
		const booljvfuXyG = await CryptoSecureBankTokenfkrO11q.transfer.call(addresspHWcPRN, uintYbFHVat, {from: accounts[2]});
		const boolyc96XC = await CryptoSecureBankTokenfkrO11q.redeem.call(uintv77quKl, {from: accounts[2]});
		const boolFt3Bzu8 = await CryptoSecureBankTokenfkrO11q.approve.call(addresskAJflpm, uint8rpMrx, {from: "0x0000000000000000000000000000000000000001"});
		const uintPvJLwwv = await CryptoSecureBankTokenfkrO11q.balanceOf.call(addressvpmooFc, {from: accounts[3]});

		assert.equal(boolFt3Bzu8, true)
		assert.equal(booljvfuXyG, true)
		assert.equal(boolyc96XC, true)
		assert.equal(uintPvJLwwv, BigInt("0"))
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenE1oQsqF = await CryptoSecureBankToken.new({from: accounts[0]});
		const addressUQsuVsE = accounts[4]
		const addressuttQil = accounts[5]
		const uintTi0uqJL = BigInt("176")
		const addressIrJwr2v = accounts[0]
		const address23Sgl4 = "0x0000000000000000000000000000000000000001"
		const addressttl3zqK = accounts[3]
		const uintbLtxBv3 = BigInt("2043")
		const addressPkM1P71 = accounts[2]
		const addressBknLpj = accounts[3]
		const addressFXRR5up = "0x0000000000000000000000000000000000000000"
		const addressSUbvrYW = accounts[5]
		const uintuciKRUS = await CryptoSecureBankTokenE1oQsqF.totalSupply.call({from: accounts[4]});
//		await CryptoSecureBankTokenE1oQsqF.pause.call({from: accounts[0]});
//		const uintEkD22vv = await CryptoSecureBankTokenE1oQsqF.allowance.call(addressuttQil, addressUQsuVsE, {from: accounts[2]});
//		const boolS4ACLH3 = await CryptoSecureBankTokenE1oQsqF.transferFrom.call(address23Sgl4, addressIrJwr2v, uintTi0uqJL, {from: accounts[2]});
//		const addressF37VNUx = await CryptoSecureBankTokenE1oQsqF.addBlackList.call(addressttl3zqK, {from: "0x0000000000000000000000000000000000000001"});
//		const boolgWYZGZX = await CryptoSecureBankTokenE1oQsqF.approve.call(addressPkM1P71, uintbLtxBv3, {from: accounts[2]});
//		const uintW7nNDKb = await CryptoSecureBankTokenE1oQsqF.balanceOf.call(addressBknLpj, {from: accounts[0]});
//		await CryptoSecureBankTokenE1oQsqF.whenPaused.call({from: accounts[3]});
//		const uintWVl1LvI = await CryptoSecureBankTokenE1oQsqF.balanceOf.call(addressFXRR5up, {from: accounts[2]});
//		const uintgQNTsGZ = await CryptoSecureBankTokenE1oQsqF.balanceOf.call(addressSUbvrYW, {from: accounts[4]});

		assert.equal(uintuciKRUS, BigInt("100000000000000000000000000"))
		await expect(CryptoSecureBankTokenE1oQsqF.pause.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenGCyuxD0 = await CryptoSecureBankToken.new({from: accounts[5]});
		const uintlEyvBhs = BigInt("1147")
		const addressNsK3NHU = accounts[4]
		const addressCgWL6Lr = accounts[3]
		const addressLzVcdRq = accounts[0]
		const addressfT8kuor = accounts[1]
		const uintnWdClGs = BigInt("887")
		const boolt82xZTb = await CryptoSecureBankTokenGCyuxD0.approve.call(addressNsK3NHU, uintlEyvBhs, {from: accounts[4]});
		const addressxRmNaeX = await CryptoSecureBankTokenGCyuxD0.setOwner2.call(addressCgWL6Lr, {from: accounts[5]});
		const uintOZqekvW = await CryptoSecureBankTokenGCyuxD0.allowance.call(addressfT8kuor, addressLzVcdRq, {from: accounts[4]});
//		const boolToLgnCX = await CryptoSecureBankTokenGCyuxD0.redeem.call(uintnWdClGs, {from: accounts[4]});

		assert.equal(boolt82xZTb, true)
		assert.equal(uintOZqekvW, BigInt("0"))
		await expect(CryptoSecureBankTokenGCyuxD0.redeem.call(uintnWdClGs, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenE1oQsqF = await CryptoSecureBankToken.new({from: accounts[0]});
		const addressjL3smlq = accounts[3]
		const addressvtLNjtp = accounts[4]
		const addressF0fyxAE = accounts[5]
		const addressKSFSM6f = accounts[2]
		const uintDTguAFn = await CryptoSecureBankTokenE1oQsqF.allowance.call(addressvtLNjtp, addressjL3smlq, {from: accounts[0]});
		const uintW7nNDKb = await CryptoSecureBankTokenE1oQsqF.balanceOf.call(addressF0fyxAE, {from: accounts[0]});
//		const addressfhkxi49 = await CryptoSecureBankTokenE1oQsqF.destroyBlackFunds.call(addressKSFSM6f, {from: accounts[0]});

		assert.equal(uintDTguAFn, BigInt("0"))
		assert.equal(uintW7nNDKb, BigInt("0"))
		await expect(CryptoSecureBankTokenE1oQsqF.destroyBlackFunds.call(addressKSFSM6f, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenfkrO11q = await CryptoSecureBankToken.new({from: accounts[2]});
		const uintdUGVeb = BigInt("12")
		const addressveHltvC = accounts[1]
		const uintAdJH4lA = BigInt("926")
		const addressm71Sbfl = accounts[2]
		const addressCeEEfDp = accounts[4]
		const addressMMD4cBX = accounts[2]
		const addressYqgkeLf = accounts[3]
		const booljvfuXyG = await CryptoSecureBankTokenfkrO11q.transfer.call(addressveHltvC, uintdUGVeb, {from: accounts[2]});
		const boolLutYwwN = await CryptoSecureBankTokenfkrO11q.approve.call(addressm71Sbfl, uintAdJH4lA, {from: "0x0000000000000000000000000000000000000001"});
		const addressRzIzqbZ = await CryptoSecureBankTokenfkrO11q.removeBlackList.call(addressCeEEfDp, {from: accounts[2]});
		const uintxnh0xz4 = await CryptoSecureBankTokenfkrO11q.allowance.call(addressYqgkeLf, addressMMD4cBX, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolLutYwwN, true)
		assert.equal(booljvfuXyG, true)
		assert.equal(uintxnh0xz4, BigInt("0"))
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenfkrO11q = await CryptoSecureBankToken.new({from: accounts[2]});
		const uintOGOb7vT = BigInt("0")
		const addressHwN0kHs = accounts[1]
		const booljvfuXyG = await CryptoSecureBankTokenfkrO11q.transfer.call(addressHwN0kHs, uintOGOb7vT, {from: accounts[2]});

		assert.equal(booljvfuXyG, true)
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenGCyuxD0 = await CryptoSecureBankToken.new({from: accounts[5]});
		const uintWjWH4xU = BigInt("1147")
		const addressUi4xon = accounts[4]
		const uintl3MwMPt = BigInt("690")
		const uintJyBsUC = BigInt("1812")
		const boolt82xZTb = await CryptoSecureBankTokenGCyuxD0.approve.call(addressUi4xon, uintWjWH4xU, {from: accounts[4]});
//		const uintR6a4755 = await CryptoSecureBankTokenGCyuxD0.setParams.call(uintJyBsUC, uintl3MwMPt, {from: accounts[5]});

		assert.equal(boolt82xZTb, true)
		await expect(CryptoSecureBankTokenGCyuxD0.setParams.call(uintJyBsUC, uintl3MwMPt, {from: accounts[5]})).to.be.rejectedWith(Error);
	});
})