const NAL = artifacts.require("NAL");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('NAL', (accounts) => {
	it('test for NAL', async () => {
		const NALWzxybow = await NAL.new({from: accounts[4]});
		const addressDyb8X83 = accounts[0]
		const boolAaT5QPA = await NALWzxybow.unfreezeAccount.call(addressDyb8X83, {from: accounts[1]});
		await NALWzxybow.renounceAdmin.call({from: accounts[0]});
		const stringEegfYx4 = await NALWzxybow.symbol.call({from: accounts[3]});
		await NALWzxybow.onlyAdmin.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(NALWzxybow.unfreezeAccount.call(addressDyb8X83, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const stringW2y25C = "RT81c3x"
		const stringGzlo6ys = "xXcxqtZ2Ru9jWHjzAJiIDae6Q5cCJJFChjkzm8299I9adSWdgXbMoOROFCaQEc4BjjhSKpRzLOpAit7C"
		const uintrncZt0m = BigInt("71")
		const NALXtcTyfz = await NAL.new(stringW2y25C, stringGzlo6ys, uintrncZt0m, {from: accounts[1]});
		const addressa7y4FqP = accounts[5]
		const addressiFnQK2y = accounts[1]
		const addresszb9zf7i = accounts[2]
		const addresslpSWSFx = accounts[3]
		const uintGKE4c90 = BigInt("1049")
		const address0Pysbg = "0x0000000000000000000000000000000000000001"
		const booljbMLmAC = await NALXtcTyfz.freezeAccount.call(addressa7y4FqP, {from: accounts[0]});
		const uint256jU61kKK = await NALXtcTyfz.allowance.call(addresszb9zf7i, addressiFnQK2y, {from: accounts[3]});
		const addressAmLwu4B = await NALXtcTyfz.removeAdmin.call(addresslpSWSFx, {from: accounts[1]});
		const boolY3hkX0k = await NALXtcTyfz.decreaseAllowance.call(address0Pysbg, uintGKE4c90, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for NAL', async () => {
		const NALnw0pBIi = await NAL.new({from: accounts[1]});
		const uintgMQRLDJ = BigInt("792")
		const addresscMUCYRc = accounts[2]
		const uintqZUAs4 = BigInt("882")
		const addressP9MKLp = accounts[0]
		const boolWpAvQAA = await NALnw0pBIi.increaseAllowance.call(addresscMUCYRc, uintgMQRLDJ, {from: accounts[5]});
		const boolhE66QKO = await NALnw0pBIi.transfer.call(addressP9MKLp, uintqZUAs4, {from: accounts[0]});

		assert.equal(boolWpAvQAA, true)
		await expect(NALnw0pBIi.transfer.call(addressP9MKLp, uintqZUAs4, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALMslVNC = await NAL.new({from: accounts[0]});
		const addressvGK4OKN = accounts[4]
		const uintpGj8ZYV = BigInt("559")
		const addressvA1oTus = accounts[1]
		const boolb1SI2iC = await NALMslVNC.isAdmin.call(addressvGK4OKN, {from: accounts[2]});
		await NALMslVNC.whenNotPaused.call({from: accounts[3]});
		const uint8A9GstHv = await NALMslVNC.decimals.call({from: accounts[2]});
		const boolXg20UyO = await NALMslVNC.approve.call(addressvA1oTus, uintpGj8ZYV, {from: accounts[4]});
		await NALMslVNC.whenPaused.call({from: accounts[0]});

		assert.equal(boolb1SI2iC, false)
		await expect(NALMslVNC.whenNotPaused.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALnw0pBIi = await NAL.new({from: accounts[1]});
		const uintG3P8Ev = BigInt("792")
		const addressiIknVyg = accounts[2]
		const uintYOVe4u0 = BigInt("859")
		const addressjKIE8bh = accounts[2]
		const uintykqRC6n = BigInt("882")
		const addressVnbCYIl = accounts[1]
		const boolWpAvQAA = await NALnw0pBIi.increaseAllowance.call(addressiIknVyg, uintG3P8Ev, {from: accounts[5]});
		const boolWRlesZX = await NALnw0pBIi.decreaseAllowance.call(addressjKIE8bh, uintYOVe4u0, {from: accounts[3]});
		const boolhE66QKO = await NALnw0pBIi.transfer.call(addressVnbCYIl, uintykqRC6n, {from: accounts[0]});

		assert.equal(boolWpAvQAA, true)
		await expect(NALnw0pBIi.decreaseAllowance.call(addressjKIE8bh, uintYOVe4u0, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALnw0pBIi = await NAL.new({from: accounts[1]});
		const uintfb7whYB = BigInt("792")
		const addressGrfhDuv = accounts[2]
		const uintfA4Ds5L = BigInt("1249")
		const addressWZEwHTl = accounts[4]
		const addresssE2nmJT = accounts[4]
		const uintugjMAQ = BigInt("882")
		const addressvKaFav = accounts[1]
		const uintKTiPiie = BigInt("1844")
		const addressXp36Pvh = accounts[0]
		const boolWpAvQAA = await NALnw0pBIi.increaseAllowance.call(addressGrfhDuv, uintfb7whYB, {from: accounts[5]});
		const boolXqXT6la = await NALnw0pBIi.transferFrom.call(addresssE2nmJT, addressWZEwHTl, uintfA4Ds5L, {from: accounts[5]});
		const boolhE66QKO = await NALnw0pBIi.transfer.call(addressvKaFav, uintugjMAQ, {from: accounts[0]});
		const boolkrivLZk = await NALnw0pBIi.decreaseAllowance.call(addressXp36Pvh, uintKTiPiie, {from: accounts[3]});

		assert.equal(boolWpAvQAA, true)
		await expect(NALnw0pBIi.transferFrom.call(addresssE2nmJT, addressWZEwHTl, uintfA4Ds5L, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALnw0pBIi = await NAL.new({from: accounts[1]});
		const uintRwFdd5o = BigInt("792")
		const addresscUu6ef = accounts[2]
		const uintGRiaRgo = BigInt("882")
		const addressI42Ouoh = accounts[0]
		const boolWpAvQAA = await NALnw0pBIi.increaseAllowance.call(addresscUu6ef, uintRwFdd5o, {from: accounts[5]});
		const stringe8AMS9G = await NALnw0pBIi.symbol.call({from: accounts[4]});
		const boolhE66QKO = await NALnw0pBIi.transfer.call(addressI42Ouoh, uintGRiaRgo, {from: accounts[0]});

		assert.equal(boolWpAvQAA, true)
		assert.equal(stringe8AMS9G, "NAL")
		await expect(NALnw0pBIi.transfer.call(addressI42Ouoh, uintGRiaRgo, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALnw0pBIi = await NAL.new({from: accounts[1]});
		const uintIOTDc3D = BigInt("792")
		const addressbpzPPJg = accounts[2]
		const uintKn4vXYj = BigInt("1249")
		const addressxo4h4vu = accounts[4]
		const addressL2dqcWx = accounts[4]
		const uintSNUtT8w = BigInt("1483")
		const addressPh5fhy6 = accounts[5]
		const uintpXG0eTK = BigInt("882")
		const addressxRcnZq9 = accounts[1]
		const uintlNaKOM = BigInt("1844")
		const addresslMHjeDT = accounts[0]
		const boolWpAvQAA = await NALnw0pBIi.increaseAllowance.call(addressbpzPPJg, uintIOTDc3D, {from: accounts[5]});
		const uint8CY3S7pX = await NALnw0pBIi.decimals.call({from: accounts[4]});
		const boolXqXT6la = await NALnw0pBIi.transferFrom.call(addressL2dqcWx, addressxo4h4vu, uintKn4vXYj, {from: accounts[5]});
		const addressT5AS1BZ = await NALnw0pBIi.burnFrom.call(addressPh5fhy6, uintSNUtT8w, {from: accounts[2]});
		const boolhE66QKO = await NALnw0pBIi.transfer.call(addressxRcnZq9, uintpXG0eTK, {from: accounts[0]});
		const boolkrivLZk = await NALnw0pBIi.decreaseAllowance.call(addresslMHjeDT, uintlNaKOM, {from: accounts[3]});

		assert.equal(boolWpAvQAA, true)
		assert.equal(uint8CY3S7pX, BigInt("18"))
		await expect(NALnw0pBIi.transferFrom.call(addressL2dqcWx, addressxo4h4vu, uintKn4vXYj, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALnw0pBIi = await NAL.new({from: accounts[1]});
		const uintn1QQbc8 = BigInt("1226")
		const addressdeO3rPW = accounts[2]
		const uintaDQNMyv = BigInt("792")
		const addressJnE1JxU = accounts[2]
		const uintkptYc6M = BigInt("1249")
		const addressEsdwsyz = accounts[5]
		const addressbhOO1j = accounts[4]
		const addressvpoiqXn = accounts[0]
		const uintUTGH6Wx = BigInt("882")
		const addressQuFGjWt = accounts[1]
		const uint7m0hWi = BigInt("1844")
		const addressDyD8H0G = accounts[0]
		const addressrHLHTX8 = await NALnw0pBIi.burnFrom.call(addressdeO3rPW, uintn1QQbc8, {from: accounts[2]});
		const boolWpAvQAA = await NALnw0pBIi.increaseAllowance.call(addressJnE1JxU, uintaDQNMyv, {from: accounts[5]});
		const boolXqXT6la = await NALnw0pBIi.transferFrom.call(addressbhOO1j, addressEsdwsyz, uintkptYc6M, {from: accounts[5]});
		const addressDMgCaca = await NALnw0pBIi.notFrozen.call(addressvpoiqXn, {from: accounts[2]});
		const boolhE66QKO = await NALnw0pBIi.transfer.call(addressQuFGjWt, uintUTGH6Wx, {from: accounts[0]});
		const stringUMiKkN3 = await NALnw0pBIi.name.call({from: accounts[5]});
		const boolkrivLZk = await NALnw0pBIi.decreaseAllowance.call(addressDyD8H0G, uint7m0hWi, {from: accounts[3]});

		await expect(NALnw0pBIi.burnFrom.call(addressdeO3rPW, uintn1QQbc8, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALnw0pBIi = await NAL.new({from: accounts[1]});
		const addressBeBHTK = accounts[2]
		const uintQejuqB3 = BigInt("815")
		const addressJEv5D1 = accounts[2]
		const uint256KqqeubZ = await NALnw0pBIi.totalSupply.call({from: accounts[2]});
		const addressi8j3FFB = await NALnw0pBIi.removeAdmin.call(addressBeBHTK, {from: accounts[3]});
		const boolWpAvQAA = await NALnw0pBIi.increaseAllowance.call(addressJEv5D1, uintQejuqB3, {from: accounts[5]});

		assert.equal(uint256KqqeubZ, BigInt("2000000000000000000000000000"))
		await expect(NALnw0pBIi.removeAdmin.call(addressBeBHTK, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALnw0pBIi = await NAL.new({from: accounts[1]});
		const uintFrMGr74 = BigInt("1352")
		const addressYy6ZKD0 = accounts[5]
		const uintQvsKmpe = BigInt("1042")
		const addresse2QzROc = accounts[0]
		const uintdNQNXEP = BigInt("823")
		const addressOnsA2Oo = accounts[2]
		const boolUUErEEd = await NALnw0pBIi.approve.call(addressYy6ZKD0, uintFrMGr74, {from: accounts[1]});
		const boolbpPY6Ig = await NALnw0pBIi.increaseAllowance.call(addresse2QzROc, uintQvsKmpe, {from: accounts[4]});
		const boolWpAvQAA = await NALnw0pBIi.increaseAllowance.call(addressOnsA2Oo, uintdNQNXEP, {from: accounts[5]});

		assert.equal(boolUUErEEd, true)
		assert.equal(boolWpAvQAA, true)
		assert.equal(boolbpPY6Ig, true)
	});

	it('test for NAL', async () => {
		const NALQNReUzg = await NAL.new({from: "0x0000000000000000000000000000000000000001"});
		const uintHpYoZmm = BigInt("74")
		const addressPdJJurj = accounts[3]
		const addresssaxn59V = accounts[4]
		const addressTGjTih7 = accounts[2]
		const uintJ3C0688 = BigInt("333")
		const addressIpCWxfj = accounts[0]
		const uinttP0V0be = BigInt("56")
		const addressugZ4DZC = accounts[0]
		const boolkAl4LLT = await NALQNReUzg.transferFrom.call(addresssaxn59V, addressPdJJurj, uintHpYoZmm, {from: accounts[2]});
		const boolcz07Gp = await NALQNReUzg.isAdmin.call(addressTGjTih7, {from: accounts[3]});
		const boole6JUOqH = await NALQNReUzg.increaseAllowance.call(addressIpCWxfj, uintJ3C0688, {from: accounts[0]});
		await NALQNReUzg.onlyOwner.call({from: accounts[4]});
		const uint8jgM8286 = await NALQNReUzg.decimals.call({from: accounts[1]});
		const boolGFGyjK9 = await NALQNReUzg.transfer.call(addressugZ4DZC, uinttP0V0be, {from: accounts[3]});
	});

	it('test for NAL', async () => {
		const NALnw0pBIi = await NAL.new({from: accounts[1]});
		const addresscYnk404 = "0x0000000000000000000000000000000000000001"
		const addressZWgd31I = accounts[3]
		const uinttlTy3K = BigInt("823")
		const addressRIbu5gY = accounts[2]
		const uint256yap3NKd = await NALnw0pBIi.allowance.call(addressZWgd31I, addresscYnk404, {from: accounts[1]});
		const boolWpAvQAA = await NALnw0pBIi.increaseAllowance.call(addressRIbu5gY, uinttlTy3K, {from: accounts[5]});

		assert.equal(boolWpAvQAA, true)
		assert.equal(uint256yap3NKd, BigInt("0"))
	});

	it('test for NAL', async () => {
		const NALnw0pBIi = await NAL.new({from: accounts[1]});
		const uintZ3U1hHs = BigInt("792")
		const addressr6k2UUV = accounts[2]
		const boolWpAvQAA = await NALnw0pBIi.increaseAllowance.call(addressr6k2UUV, uintZ3U1hHs, {from: accounts[5]});
		const stringR22uibA = await NALnw0pBIi.name.call({from: accounts[4]});

		assert.equal(boolWpAvQAA, true)
		assert.equal(stringR22uibA, "Personal Token")
	});

	it('test for NAL', async () => {
		const NALnw0pBIi = await NAL.new({from: accounts[1]});
		const uintDctSIrG = BigInt("1825")
		const uintunlNQ9 = BigInt("792")
		const addressH4iILii = accounts[2]
		const uintYEuudW9 = BigInt("882")
		const addressaWROeOG = accounts[1]
		const uint256m53wSq = await NALnw0pBIi.burn.call(uintDctSIrG, {from: accounts[0]});
		const boolWpAvQAA = await NALnw0pBIi.increaseAllowance.call(addressH4iILii, uintunlNQ9, {from: accounts[5]});
		const boolhE66QKO = await NALnw0pBIi.transfer.call(addressaWROeOG, uintYEuudW9, {from: accounts[0]});

		await expect(NALnw0pBIi.burn.call(uintDctSIrG, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALnw0pBIi = await NAL.new({from: accounts[1]});
		const uintCKBNn6D = BigInt("830")
		const addresseUcPB4l = accounts[2]
		const uintCMYWBeX = BigInt("1574")
		const uintz9Wy1LZ = BigInt("1879")
		const addressUrmBeWT = accounts[0]
		await NALnw0pBIi.renounceAdmin.call({from: "0x0000000000000000000000000000000000000001"});
		const boolWpAvQAA = await NALnw0pBIi.increaseAllowance.call(addresseUcPB4l, uintCKBNn6D, {from: accounts[5]});
		const boolOivHe6P = await NALnw0pBIi.transferWithLock.call(addressUrmBeWT, uintz9Wy1LZ, uintCMYWBeX, {from: accounts[0]});

		await expect(NALnw0pBIi.renounceAdmin.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALnw0pBIi = await NAL.new({from: accounts[1]});
		const addressVTleEFP = accounts[0]
		const uintOTQ8Mux = BigInt("854")
		const addressUu2uNDv = accounts[2]
		const uint256I23G9eU = await NALnw0pBIi.balanceOf.call(addressVTleEFP, {from: accounts[5]});
		const boolWpAvQAA = await NALnw0pBIi.increaseAllowance.call(addressUu2uNDv, uintOTQ8Mux, {from: accounts[5]});

		assert.equal(boolWpAvQAA, true)
		assert.equal(uint256I23G9eU, BigInt("0"))
	});

	it('test for NAL', async () => {
		const NALnw0pBIi = await NAL.new({from: accounts[1]});
		const uintRKMzkuI = BigInt("882")
		const addressMxhjeFd = accounts[1]
		const bool6RYIFk = await NALnw0pBIi.paused.call({from: "0x0000000000000000000000000000000000000001"});
		const boolhE66QKO = await NALnw0pBIi.transfer.call(addressMxhjeFd, uintRKMzkuI, {from: accounts[0]});

		assert.equal(bool6RYIFk, false)
		await expect(NALnw0pBIi.transfer.call(addressMxhjeFd, uintRKMzkuI, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALnw0pBIi = await NAL.new({from: accounts[1]});
		const uintcE2YI7S = BigInt("826")
		const addressWRRSGtY = accounts[2]
		const uintatSw027 = BigInt("1258")
		const addressNN91cgu = accounts[1]
		const boolWpAvQAA = await NALnw0pBIi.increaseAllowance.call(addressWRRSGtY, uintcE2YI7S, {from: accounts[5]});
		const booln0L3DTj = await NALnw0pBIi.unlock.call(addressNN91cgu, uintatSw027, {from: accounts[1]});

		assert.equal(boolWpAvQAA, true)
		await expect(NALnw0pBIi.unlock.call(addressNN91cgu, uintatSw027, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALnw0pBIi = await NAL.new({from: accounts[1]});
		const uintRyCEkV6 = BigInt("711")
		const uintPFBraSL = BigInt("808")
		const addressJc3NN4u = accounts[0]
		const uintDWo1Bnx = BigInt("1249")
		const addresswOc85Ea = accounts[5]
		const addressoS8mKa = accounts[5]
		const boolrvgPeez = await NALnw0pBIi.lock.call(addressJc3NN4u, uintPFBraSL, uintRyCEkV6, {from: accounts[1]});
		await NALnw0pBIi.whenPaused.call({from: accounts[4]});
		const boolXqXT6la = await NALnw0pBIi.transferFrom.call(addressoS8mKa, addresswOc85Ea, uintDWo1Bnx, {from: accounts[5]});

		await expect(NALnw0pBIi.lock.call(addressJc3NN4u, uintPFBraSL, uintRyCEkV6, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALvdU62sr = await NAL.new({from: accounts[3]});
		const uintpcXBC0m = BigInt("479")
		const uintaW1QW7P = BigInt("570")
		const addressvUFMiuc = accounts[3]
		const uintBpVd5nK = BigInt("138")
		const uintQEM1FhG = BigInt("575")
		const addressYd4gGb9 = accounts[2]
		const uinthty4aur = BigInt("1636")
		const addressRMjwnfU = accounts[4]
		const addressE5CcOrr = accounts[2]
		const addressiAcbN8F = accounts[4]
		const boolX0cz9i9 = await NALvdU62sr.transferWithLock.call(addressvUFMiuc, uintaW1QW7P, uintpcXBC0m, {from: accounts[3]});
		const boolt1XZ5fM = await NALvdU62sr.lock.call(addressYd4gGb9, uintQEM1FhG, uintBpVd5nK, {from: accounts[3]});
		const boold3TQfGj = await NALvdU62sr.transferFrom.call(addressE5CcOrr, addressRMjwnfU, uinthty4aur, {from: accounts[4]});
		const boold3VugTZ = await NALvdU62sr.isOwner.call(addressiAcbN8F, {from: accounts[4]});

		assert.equal(boolX0cz9i9, true)
		await expect(NALvdU62sr.lock.call(addressYd4gGb9, uintQEM1FhG, uintBpVd5nK, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALnw0pBIi = await NAL.new({from: accounts[1]});
		const addresseYs2GUl = accounts[5]
		const uintLyCcZWc = BigInt("1268")
		const addressTycjP2 = accounts[4]
		const addressfymB9b = accounts[5]
		const uintpASxCed = BigInt("1572")
		const addressYkabjPD = accounts[5]
		const addresscFJxDE6 = accounts[2]
		const boolKmXiP4M = await NALnw0pBIi.unfreezeAccount.call(addresseYs2GUl, {from: accounts[1]});
		const boolXqXT6la = await NALnw0pBIi.transferFrom.call(addressfymB9b, addressTycjP2, uintLyCcZWc, {from: accounts[5]});
		await NALnw0pBIi.onlyAdmin.call({from: accounts[4]});
		const boolYhWnstv = await NALnw0pBIi.transferFrom.call(addresscFJxDE6, addressYkabjPD, uintpASxCed, {from: "0x0000000000000000000000000000000000000001"});

		await expect(NALnw0pBIi.unfreezeAccount.call(addresseYs2GUl, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALnw0pBIi = await NAL.new({from: accounts[1]});
		const addresstTnupYC = accounts[1]
		const addresswQkDNaW = accounts[2]
		const uint1TIoEg = BigInt("882")
		const addresscPgqE1 = accounts[1]
		const addressU0gDtrm = await NALnw0pBIi.addAdmin.call(addresstTnupYC, {from: accounts[1]});
		await NALnw0pBIi.pause.call({from: accounts[2]});
		const addressldpUYZ = await NALnw0pBIi.removeAdmin.call(addresswQkDNaW, {from: accounts[5]});
		const boolhE66QKO = await NALnw0pBIi.transfer.call(addresscPgqE1, uint1TIoEg, {from: accounts[0]});

		await expect(NALnw0pBIi.addAdmin.call(addresstTnupYC, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALnw0pBIi = await NAL.new({from: accounts[1]});
		const addressTiFYqrX = accounts[1]
		const addressPlgnuIM = accounts[5]
		const addresstKdnsF2 = accounts[2]
		const addressVTSXGPR = accounts[1]
		const uint256I23G9eU = await NALnw0pBIi.balanceOf.call(addressTiFYqrX, {from: accounts[5]});
		const uint256mywiLqo = await NALnw0pBIi.allowance.call(addresstKdnsF2, addressPlgnuIM, {from: accounts[4]});
		const boolp5PCzkZ = await NALnw0pBIi.isOwner.call(addressVTSXGPR, {from: accounts[0]});

		assert.equal(boolp5PCzkZ, true)
		assert.equal(uint256I23G9eU, BigInt("2000000000000000000000000000"))
		assert.equal(uint256mywiLqo, BigInt("0"))
	});

	it('test for NAL', async () => {
		const NALnw0pBIi = await NAL.new({from: accounts[1]});
		const addressyF4zxkf = accounts[3]
		const uintUMH7jQL = BigInt("1249")
		const addresshWft0T = accounts[4]
		const addressNLvHINR = accounts[5]
		const addressaw4xrDx = await NALnw0pBIi.upgradeTo.call(addressyF4zxkf, {from: accounts[1]});
		const boolXqXT6la = await NALnw0pBIi.transferFrom.call(addressNLvHINR, addresshWft0T, uintUMH7jQL, {from: accounts[5]});

		await expect(NALnw0pBIi.transferFrom.call(addressNLvHINR, addresshWft0T, uintUMH7jQL, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALnw0pBIi = await NAL.new({from: accounts[1]});
		const addressthpmu4R = accounts[2]
		const uintVNY5Du = BigInt("1897")
		const addressztlcVyA = accounts[0]
		const uintbCVKWXM = BigInt("802")
		const addressMJ8COjW = accounts[2]
		const addressRflE3dp = await NALnw0pBIi.removeAdmin.call(addressthpmu4R, {from: accounts[1]});
		const boolP88le6k = await NALnw0pBIi.decreaseAllowance.call(addressztlcVyA, uintVNY5Du, {from: "0x0000000000000000000000000000000000000001"});
		const boolWpAvQAA = await NALnw0pBIi.increaseAllowance.call(addressMJ8COjW, uintbCVKWXM, {from: accounts[5]});

		await expect(NALnw0pBIi.removeAdmin.call(addressthpmu4R, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})