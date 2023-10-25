const CryptoSecureBankToken = artifacts.require("CryptoSecureBankToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('CryptoSecureBankToken', (accounts) => {
	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenn9L1vI = await CryptoSecureBankToken.new({from: accounts[4]});
		const uintuyhxM4 = BigInt("32")
		const addressYqVs1C7 = accounts[0]
		const uintAG7bI7U = BigInt("37")
		const addressFAR27m0 = accounts[0]
		const addresswWSUCyG = accounts[1]
//		const boolU6u5hME = await CryptoSecureBankTokenn9L1vI.transfer.call(addressYqVs1C7, uintuyhxM4, {from: accounts[1]});
//		await CryptoSecureBankTokenn9L1vI.unpause.call({from: accounts[0]});
//		await CryptoSecureBankTokenn9L1vI.pause.call({from: accounts[2]});
//		const boolrY9RQ3E = await CryptoSecureBankTokenn9L1vI.transfer.call(addressFAR27m0, uintAG7bI7U, {from: accounts[5]});
//		const addressqGdaZPR = await CryptoSecureBankTokenn9L1vI.transferOwnership.call(addresswWSUCyG, {from: accounts[5]});

		await expect(CryptoSecureBankTokenn9L1vI.transfer.call(addressYqVs1C7, uintuyhxM4, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokennPafaM = await CryptoSecureBankToken.new({from: accounts[5]});
		const addressuxWnHu = accounts[5]
		const uintJaQL5Ag = BigInt("836")
		const addressYxGfP36 = await CryptoSecureBankTokennPafaM.getOwner.call({from: accounts[2]});
//		await CryptoSecureBankTokennPafaM.whenNotPaused.call({from: accounts[5]});
//		await CryptoSecureBankTokennPafaM.whenNotPaused.call({from: accounts[0]});
//		const addressCvuR904 = await CryptoSecureBankTokennPafaM.setOwner2.call(addressuxWnHu, {from: accounts[3]});
//		const uintgHHV6hq = await CryptoSecureBankTokennPafaM.onlyPayloadSize.call(uintJaQL5Ag, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(addressYxGfP36, 0x8e920B0589c09391218dc1056fB03E8730785870)
		await expect(CryptoSecureBankTokennPafaM.whenNotPaused.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenVk3NDa = await CryptoSecureBankToken.new({from: accounts[2]});
		const uintzk1k2s = BigInt("1311")
		const addresshA68WDl = accounts[3]
		const uintFqzQojT = BigInt("1851")
		const addressq5aZSu = accounts[2]
		const addressF07dY7i = accounts[0]
		const addressga4RvAm = accounts[1]
		const boolLjdnABU = await CryptoSecureBankTokenVk3NDa.approve.call(addresshA68WDl, uintzk1k2s, {from: accounts[1]});
//		const boolHvvT9Qf = await CryptoSecureBankTokenVk3NDa.transferFrom.call(addressF07dY7i, addressq5aZSu, uintFqzQojT, {from: accounts[5]});
//		const addressoa8Kqw9 = await CryptoSecureBankTokenVk3NDa.destroyBlackFunds.call(addressga4RvAm, {from: "0x0000000000000000000000000000000000000001"});
//		await CryptoSecureBankTokenVk3NDa.whenPaused.call({from: accounts[5]});
//		await CryptoSecureBankTokenVk3NDa.pause.call({from: accounts[1]});

		assert.equal(boolLjdnABU, true)
		await expect(CryptoSecureBankTokenVk3NDa.transferFrom.call(addressF07dY7i, addressq5aZSu, uintFqzQojT, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenDerq0yp = await CryptoSecureBankToken.new({from: accounts[2]});
		const uintCi0OGRY = BigInt("1336")
		const addressowbIAm0 = accounts[1]
		const addressy2TCPzr = accounts[0]
		const boollzzVoiW = await CryptoSecureBankTokenDerq0yp.approve.call(addressowbIAm0, uintCi0OGRY, {from: accounts[0]});
		const uintqo46ca = await CryptoSecureBankTokenDerq0yp.balanceOf.call(addressy2TCPzr, {from: accounts[2]});
		const addresstWlhU3L = await CryptoSecureBankTokenDerq0yp.getOwner.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(addresstWlhU3L, 0xdda690e50E7360c55905dB3E3575FcEf845cBa2A)
		assert.equal(boollzzVoiW, true)
		assert.equal(uintqo46ca, BigInt("0"))
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokeny7BiVOu = await CryptoSecureBankToken.new({from: accounts[3]});
		const addressHS4AOkg = accounts[4]
		const addressCIvlLf = accounts[0]
		const uintX3Lmv7V = BigInt("1382")
		const addressGBA8DpG = accounts[0]
		const addressaBldWNw = accounts[4]
		const addressG1R6yKp = accounts[1]
		const boolFhwzrza = await CryptoSecureBankTokeny7BiVOu.getBlackListStatus.call(addressHS4AOkg, {from: accounts[3]});
		const boolwUW3UzW = await CryptoSecureBankTokeny7BiVOu.getBlackListStatus.call(addressCIvlLf, {from: "0x0000000000000000000000000000000000000001"});
//		await CryptoSecureBankTokeny7BiVOu.pause.call({from: accounts[3]});
//		await CryptoSecureBankTokeny7BiVOu.unpause.call({from: accounts[1]});
//		const booldaPTAK0 = await CryptoSecureBankTokeny7BiVOu.transfer.call(addressGBA8DpG, uintX3Lmv7V, {from: accounts[1]});
//		const uinta90GdUW = await CryptoSecureBankTokeny7BiVOu.allowance.call(addressG1R6yKp, addressaBldWNw, {from: accounts[2]});

		assert.equal(boolFhwzrza, false)
		assert.equal(boolwUW3UzW, false)
		await expect(CryptoSecureBankTokeny7BiVOu.pause.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenj2sw2UA = await CryptoSecureBankToken.new({from: accounts[2]});
		const addressyWdMVk = accounts[1]
		const addresssVfVlx9 = accounts[0]
		const addressPfcToV7 = accounts[3]
		const addressyt9Ckjj = accounts[4]
//		const addressCpb7j9l = await CryptoSecureBankTokenj2sw2UA.transferOwnership.call(addressyWdMVk, {from: accounts[4]});
//		const addressvnqKxh6 = await CryptoSecureBankTokenj2sw2UA.transferOwnership.call(addresssVfVlx9, {from: accounts[2]});
//		const uintYGu7wfl = await CryptoSecureBankTokenj2sw2UA.allowance.call(addressyt9Ckjj, addressPfcToV7, {from: accounts[4]});

		await expect(CryptoSecureBankTokenj2sw2UA.transferOwnership.call(addressyWdMVk, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenKEFZuql = await CryptoSecureBankToken.new({from: accounts[3]});
		const addressxwKAoe = accounts[1]
		const addressnVA313i = accounts[4]
		const addressdhYyNWG = accounts[3]
		const addressnAMcDk = accounts[2]
		const uintWpSRc6D = BigInt("1316")
		const addressYKMI6Z = accounts[3]
		const uintr15UN6g = await CryptoSecureBankTokenKEFZuql.allowance.call(addressnVA313i, addressxwKAoe, {from: accounts[3]});
		const uintc9znxRN = await CryptoSecureBankTokenKEFZuql.allowance.call(addressnAMcDk, addressdhYyNWG, {from: accounts[3]});
		const addressNdD5EoW = await CryptoSecureBankTokenKEFZuql.getOwner.call({from: accounts[4]});
		const boolNH92j7l = await CryptoSecureBankTokenKEFZuql.approve.call(addressYKMI6Z, uintWpSRc6D, {from: "0x0000000000000000000000000000000000000001"});
//		await CryptoSecureBankTokenKEFZuql.pause.call({from: accounts[5]});

		assert.equal(addressNdD5EoW, 0xC88AA99DFb8be7951C37f85B06a5b1993496A633)
		assert.equal(boolNH92j7l, true)
		assert.equal(uintc9znxRN, BigInt("0"))
		assert.equal(uintr15UN6g, BigInt("0"))
		await expect(CryptoSecureBankTokenKEFZuql.pause.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenj2sw2UA = await CryptoSecureBankToken.new({from: accounts[2]});
		const addressLcvjH3 = accounts[0]
		const addressxONgMk = accounts[3]
		const addressAM3Uiq5 = accounts[4]
		const addressvnqKxh6 = await CryptoSecureBankTokenj2sw2UA.transferOwnership.call(addressLcvjH3, {from: accounts[2]});
		const uintYGu7wfl = await CryptoSecureBankTokenj2sw2UA.allowance.call(addressAM3Uiq5, addressxONgMk, {from: accounts[4]});

		assert.equal(uintYGu7wfl, BigInt("0"))
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenQlVeiCr = await CryptoSecureBankToken.new({from: "0x0000000000000000000000000000000000000001"});
		const uintGThLeDN = BigInt("938")
		const addressgF3jKyJ = accounts[3]
		const uintWzKHOBG = BigInt("1999")
		const addressyuJ6NoL = accounts[4]
		const uintUCLKcV = BigInt("1809")
		const addresshIHTWxW = accounts[1]
		await CryptoSecureBankTokenQlVeiCr.whenPaused.call({from: accounts[0]});
		const boolKbKAyj = await CryptoSecureBankTokenQlVeiCr.approve.call(addressgF3jKyJ, uintGThLeDN, {from: accounts[1]});
		const boolqsqUu0w = await CryptoSecureBankTokenQlVeiCr.transfer.call(addressyuJ6NoL, uintWzKHOBG, {from: accounts[3]});
		const booljHCu12y = await CryptoSecureBankTokenQlVeiCr.approve.call(addresshIHTWxW, uintUCLKcV, {from: accounts[0]});
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenj2sw2UA = await CryptoSecureBankToken.new({from: accounts[2]});
		const addressp7gwZTo = accounts[0]
		const addressXpCbNNb = accounts[0]
		const addressYW5wvh = accounts[0]
		const addressF4xEsAJ = accounts[3]
		const addressFQNneUa = accounts[5]
		const addressvnqKxh6 = await CryptoSecureBankTokenj2sw2UA.transferOwnership.call(addressp7gwZTo, {from: accounts[2]});
		const addressvzGwdDA = await CryptoSecureBankTokenj2sw2UA.addBlackList.call(addressXpCbNNb, {from: accounts[2]});
//		const addressRmUPJCo = await CryptoSecureBankTokenj2sw2UA.setOwner2.call(addressYW5wvh, {from: accounts[3]});
//		const uintYGu7wfl = await CryptoSecureBankTokenj2sw2UA.allowance.call(addressFQNneUa, addressF4xEsAJ, {from: accounts[4]});

		await expect(CryptoSecureBankTokenj2sw2UA.setOwner2.call(addressYW5wvh, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenM2Yo9WG = await CryptoSecureBankToken.new({from: accounts[1]});
		const addressDnUtB3X = accounts[0]
		const addressCDvac6a = accounts[2]
		const uintzFS1Xth = BigInt("1824")
		const uintoy0gaGr = await CryptoSecureBankTokenM2Yo9WG.allowance.call(addressCDvac6a, addressDnUtB3X, {from: accounts[2]});
		const uintMzEoHLh = await CryptoSecureBankTokenM2Yo9WG.totalSupply.call({from: accounts[4]});
//		const boolnEh39Ka = await CryptoSecureBankTokenM2Yo9WG.redeem.call(uintzFS1Xth, {from: accounts[4]});

		assert.equal(uintMzEoHLh, BigInt("100000000000000000000000000"))
		assert.equal(uintoy0gaGr, BigInt("0"))
		await expect(CryptoSecureBankTokenM2Yo9WG.redeem.call(uintzFS1Xth, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenDerq0yp = await CryptoSecureBankToken.new({from: accounts[2]});
		const uintGxAgYse = BigInt("130")
		const uintAQSgFL = BigInt("589")
		const uintsfZZZ2V = BigInt("1336")
		const addressf1XPGnB = accounts[1]
		const addressEDeQfbq = accounts[0]
//		const uintRrRRfeo = await CryptoSecureBankTokenDerq0yp.setParams.call(uintAQSgFL, uintGxAgYse, {from: accounts[2]});
//		const boollzzVoiW = await CryptoSecureBankTokenDerq0yp.approve.call(addressf1XPGnB, uintsfZZZ2V, {from: accounts[0]});
//		const uintqo46ca = await CryptoSecureBankTokenDerq0yp.balanceOf.call(addressEDeQfbq, {from: accounts[2]});
//		const addresstWlhU3L = await CryptoSecureBankTokenDerq0yp.getOwner.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(CryptoSecureBankTokenDerq0yp.setParams.call(uintAQSgFL, uintGxAgYse, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenKhbsBVE = await CryptoSecureBankToken.new({from: accounts[2]});
		const addressHDSU9S = accounts[5]
		const addressKhxihj3 = accounts[4]
		const uintiisEjy = BigInt("1955")
		const addressrZdXMUU = "0x0000000000000000000000000000000000000001"
//		const addressCMEyyD = await CryptoSecureBankTokenKhbsBVE.destroyBlackFunds.call(addressHDSU9S, {from: accounts[2]});
//		const uintaHzaKYG = await CryptoSecureBankTokenKhbsBVE.balanceOf.call(addressKhxihj3, {from: accounts[3]});
//		const boolVQDXstG = await CryptoSecureBankTokenKhbsBVE.transfer.call(addressrZdXMUU, uintiisEjy, {from: accounts[1]});

		await expect(CryptoSecureBankTokenKhbsBVE.destroyBlackFunds.call(addressHDSU9S, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenF1TnYi = await CryptoSecureBankToken.new({from: accounts[2]});
		const uintZ2yrhJ2 = BigInt("881")
		const addressWa8SuAI = accounts[2]
		const addresswLxSQND = accounts[4]
		const boolfVzZUnQ = await CryptoSecureBankTokenF1TnYi.redeem.call(uintZ2yrhJ2, {from: accounts[2]});
		const uintl3Pzsj1 = await CryptoSecureBankTokenF1TnYi.balanceOf.call(addressWa8SuAI, {from: accounts[4]});
		const uintm1Hsc6S = await CryptoSecureBankTokenF1TnYi.totalSupply.call({from: accounts[3]});
		const addressKEzJUnK = await CryptoSecureBankTokenF1TnYi.getOwner.call({from: accounts[3]});
		const uintXYtLiJG = await CryptoSecureBankTokenF1TnYi.balanceOf.call(addresswLxSQND, {from: accounts[5]});

		assert.equal(addressKEzJUnK, 0xdda690e50E7360c55905dB3E3575FcEf845cBa2A)
		assert.equal(boolfVzZUnQ, true)
		assert.equal(uintXYtLiJG, BigInt("0"))
		assert.equal(uintl3Pzsj1, BigInt("100000000000000000000000000"))
		assert.equal(uintm1Hsc6S, BigInt("100000000000000000000000000"))
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenI11Ivl = await CryptoSecureBankToken.new({from: accounts[2]});
		const addressZcXXQUt = accounts[2]
		const addressdkkrJOG = accounts[3]
		const addressYP0BDsu = accounts[3]
		const addressW0TfRL = accounts[0]
		const uintWkG8pdA = BigInt("1026")
		const addressbSoPKqx = await CryptoSecureBankTokenI11Ivl.setOwner2.call(addressZcXXQUt, {from: accounts[2]});
		const uintSrOg0mv = await CryptoSecureBankTokenI11Ivl.balanceOf.call(addressdkkrJOG, {from: accounts[3]});
		const uintzYlwFzo = await CryptoSecureBankTokenI11Ivl.allowance.call(addressW0TfRL, addressYP0BDsu, {from: accounts[2]});
//		const uintgqvwWBy = await CryptoSecureBankTokenI11Ivl.onlyPayloadSize.call(uintWkG8pdA, {from: accounts[0]});

		assert.equal(uintSrOg0mv, BigInt("0"))
		assert.equal(uintzYlwFzo, BigInt("0"))
		await expect(CryptoSecureBankTokenI11Ivl.onlyPayloadSize.call(uintWkG8pdA, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenKyR7K6c = await CryptoSecureBankToken.new({from: accounts[4]});
		const addressFryGODI = accounts[2]
		const addressD69Oiz = accounts[2]
		const addressXjDc930 = accounts[4]
		const address4nxqQn = accounts[1]
		const boolie3VBBX = await CryptoSecureBankTokenKyR7K6c.getBlackListStatus.call(addressFryGODI, {from: accounts[3]});
		const boolQQxLVTK = await CryptoSecureBankTokenKyR7K6c.deprecate.call(addressD69Oiz, {from: accounts[4]});
//		const addresslfbb183 = await CryptoSecureBankTokenKyR7K6c.setOwner2.call(addressXjDc930, {from: accounts[1]});
//		const addressFAafmJt = await CryptoSecureBankTokenKyR7K6c.addBlackList.call(address4nxqQn, {from: accounts[4]});
//		await CryptoSecureBankTokenKyR7K6c.pause.call({from: accounts[2]});

		assert.equal(boolQQxLVTK, true)
		assert.equal(boolie3VBBX, false)
		await expect(CryptoSecureBankTokenKyR7K6c.setOwner2.call(addressXjDc930, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenn9L1vI = await CryptoSecureBankToken.new({from: accounts[4]});
		const uintxyNziN = BigInt("0")
		const addressx5hJoD2 = accounts[1]
		const uintAFsLk10 = BigInt("578")
		const addressSZ3gRI0 = accounts[1]
		const uintYO75GGO = BigInt("1691")
		const addresskTD7sJM = accounts[0]
		const boolU6u5hME = await CryptoSecureBankTokenn9L1vI.transfer.call(addressx5hJoD2, uintxyNziN, {from: accounts[1]});
//		const boolyxqwdl9 = await CryptoSecureBankTokenn9L1vI.transfer.call(addressSZ3gRI0, uintAFsLk10, {from: accounts[3]});
//		const booltdhmQs3 = await CryptoSecureBankTokenn9L1vI.approve.call(addresskTD7sJM, uintYO75GGO, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolU6u5hME, true)
		await expect(CryptoSecureBankTokenn9L1vI.transfer.call(addressSZ3gRI0, uintAFsLk10, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenn9L1vI = await CryptoSecureBankToken.new({from: accounts[4]});
		const addressSbQPgAR = accounts[4]
		const uinteHL5Nk1 = BigInt("32")
		const addressOgsNyCr = accounts[2]
		const addresssbVvbZk = await CryptoSecureBankTokenn9L1vI.removeBlackList.call(addressSbQPgAR, {from: accounts[4]});
//		await CryptoSecureBankTokenn9L1vI.pause.call({from: accounts[4]});
//		const boolU6u5hME = await CryptoSecureBankTokenn9L1vI.transfer.call(addressOgsNyCr, uinteHL5Nk1, {from: accounts[1]});

		await expect(CryptoSecureBankTokenn9L1vI.pause.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});
})