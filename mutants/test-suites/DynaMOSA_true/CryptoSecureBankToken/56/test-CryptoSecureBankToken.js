const CryptoSecureBankToken = artifacts.require("CryptoSecureBankToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('CryptoSecureBankToken', (accounts) => {
	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenZMeEZCm = await CryptoSecureBankToken.new({from: accounts[1]});
		const uintY3KWtcd = BigInt("690")
		const uintX92QhI = BigInt("211")
		const addressB8txEID = accounts[1]
//		await CryptoSecureBankTokenZMeEZCm.whenPaused.call({from: accounts[1]});
//		const uintymfsIRy = await CryptoSecureBankTokenZMeEZCm.onlyPayloadSize.call(uintY3KWtcd, {from: "0x0000000000000000000000000000000000000001"});
//		const boolqtqFWz8 = await CryptoSecureBankTokenZMeEZCm.transfer.call(addressB8txEID, uintX92QhI, {from: accounts[0]});

		await expect(CryptoSecureBankTokenZMeEZCm.whenPaused.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenEEd7EPs = await CryptoSecureBankToken.new({from: "0x0000000000000000000000000000000000000001"});
		const addressDhXy5v1 = accounts[1]
		const addressgWJrwgm = accounts[1]
		const addresspo5FOD = accounts[4]
		const addresso0eTC6R = accounts[3]
		const uintjMGoG75 = BigInt("553")
		const addressSXo0k4f = accounts[3]
		const booluIsoMg = await CryptoSecureBankTokenEEd7EPs.getBlackListStatus.call(addressDhXy5v1, {from: "0x0000000000000000000000000000000000000001"});
		const addressfzYPOvM = await CryptoSecureBankTokenEEd7EPs.transferOwnership.call(addressgWJrwgm, {from: accounts[4]});
		const addressTmblW7 = await CryptoSecureBankTokenEEd7EPs.getOwner.call({from: accounts[3]});
		const uintJ9k1pZq = await CryptoSecureBankTokenEEd7EPs.allowance.call(addresso0eTC6R, addresspo5FOD, {from: "0x0000000000000000000000000000000000000001"});
		const boolcd8WzTW = await CryptoSecureBankTokenEEd7EPs.redeem.call(uintjMGoG75, {from: accounts[2]});
		const uinto9iiR2j = await CryptoSecureBankTokenEEd7EPs.balanceOf.call(addressSXo0k4f, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenvYXMi4J = await CryptoSecureBankToken.new({from: accounts[4]});
		const addressjBWTQeP = accounts[2]
		const addressfjDxOsZ = accounts[3]
		const addresshEtcQG = accounts[4]
		const uintqN1Ujf1 = await CryptoSecureBankTokenvYXMi4J.balanceOf.call(addressjBWTQeP, {from: accounts[2]});
//		const addressXfGu76 = await CryptoSecureBankTokenvYXMi4J.destroyBlackFunds.call(addressfjDxOsZ, {from: accounts[0]});
//		const uintbCTJPm = await CryptoSecureBankTokenvYXMi4J.totalSupply.call({from: accounts[2]});
//		const addressz9Gzkc2 = await CryptoSecureBankTokenvYXMi4J.addBlackList.call(addresshEtcQG, {from: accounts[1]});

		assert.equal(uintqN1Ujf1, BigInt("0"))
		await expect(CryptoSecureBankTokenvYXMi4J.destroyBlackFunds.call(addressfjDxOsZ, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenN75Wqll = await CryptoSecureBankToken.new({from: accounts[4]});
		const uintzJeWZa6 = BigInt("1900")
		const addressEKLqEz9 = "0x0000000000000000000000000000000000000001"
		const uintgZrk7Al = BigInt("2028")
		const addresstKLqqGz = accounts[3]
		const uintOfgUw1W = BigInt("1203")
		const addressW3q8FPI = accounts[5]
		const addressTUOGn78 = accounts[1]
		const boolc8vQLhP = await CryptoSecureBankTokenN75Wqll.approve.call(addressEKLqEz9, uintzJeWZa6, {from: accounts[1]});
		const booln9cEm4 = await CryptoSecureBankTokenN75Wqll.approve.call(addresstKLqqGz, uintgZrk7Al, {from: accounts[0]});
//		const boolgM7FhXS = await CryptoSecureBankTokenN75Wqll.transferFrom.call(addressTUOGn78, addressW3q8FPI, uintOfgUw1W, {from: accounts[2]});

		assert.equal(boolc8vQLhP, true)
		assert.equal(booln9cEm4, true)
		await expect(CryptoSecureBankTokenN75Wqll.transferFrom.call(addressTUOGn78, addressW3q8FPI, uintOfgUw1W, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenfaalL2z = await CryptoSecureBankToken.new({from: accounts[2]});
		const uintS174zHv = BigInt("672")
		const addressJW4Fkg4 = accounts[2]
		const addressgXBRvbC = "0x0000000000000000000000000000000000000001"
		const uintJAAsz4 = BigInt("508")
		const addresstJLZwSx = accounts[4]
		const addressnbX7Ur8 = accounts[3]
		const boolB91FIQd = await CryptoSecureBankTokenfaalL2z.approve.call(addressJW4Fkg4, uintS174zHv, {from: accounts[0]});
		const addressHsJBIfw = await CryptoSecureBankTokenfaalL2z.removeBlackList.call(addressgXBRvbC, {from: accounts[2]});
//		const boolSgbkNhg = await CryptoSecureBankTokenfaalL2z.transferFrom.call(addressnbX7Ur8, addresstJLZwSx, uintJAAsz4, {from: accounts[0]});
//		await CryptoSecureBankTokenfaalL2z.whenPaused.call({from: accounts[4]});

		assert.equal(boolB91FIQd, true)
		await expect(CryptoSecureBankTokenfaalL2z.transferFrom.call(addressnbX7Ur8, addresstJLZwSx, uintJAAsz4, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenN75Wqll = await CryptoSecureBankToken.new({from: accounts[4]});
		const uintssUzS0r = BigInt("1915")
		const addresszEWPtmk = "0x0000000000000000000000000000000000000001"
		const uintsl8uE65 = BigInt("2028")
		const addressfgkX9zR = accounts[3]
		const uintOxOZXcN = BigInt("1203")
		const addressdKiwLa = accounts[5]
		const addressHlyeZqZ = accounts[1]
		const boolc8vQLhP = await CryptoSecureBankTokenN75Wqll.approve.call(addresszEWPtmk, uintssUzS0r, {from: accounts[1]});
		const booln9cEm4 = await CryptoSecureBankTokenN75Wqll.approve.call(addressfgkX9zR, uintsl8uE65, {from: accounts[0]});
		const uintdZQSfSh = await CryptoSecureBankTokenN75Wqll.totalSupply.call({from: accounts[0]});
//		const boolgM7FhXS = await CryptoSecureBankTokenN75Wqll.transferFrom.call(addressHlyeZqZ, addressdKiwLa, uintOxOZXcN, {from: accounts[2]});

		assert.equal(boolc8vQLhP, true)
		assert.equal(booln9cEm4, true)
		assert.equal(uintdZQSfSh, BigInt("100000000000000000000000000"))
		await expect(CryptoSecureBankTokenN75Wqll.transferFrom.call(addressHlyeZqZ, addressdKiwLa, uintOxOZXcN, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenN75Wqll = await CryptoSecureBankToken.new({from: accounts[4]});
		const uintiG58hNa = BigInt("1897")
		const addressR5q6TZS = "0x0000000000000000000000000000000000000001"
		const uintlNr59IZ = BigInt("2028")
		const addressWRAFzmc = accounts[3]
		const uintBzJY8EK = BigInt("1203")
		const addressfq7Imb = accounts[5]
		const addressLbeElYJ = accounts[1]
		const boolc8vQLhP = await CryptoSecureBankTokenN75Wqll.approve.call(addressR5q6TZS, uintiG58hNa, {from: accounts[1]});
		const booln9cEm4 = await CryptoSecureBankTokenN75Wqll.approve.call(addressWRAFzmc, uintlNr59IZ, {from: accounts[0]});
		const address39GfbJ = await CryptoSecureBankTokenN75Wqll.getOwner.call({from: accounts[4]});
		const uintdZQSfSh = await CryptoSecureBankTokenN75Wqll.totalSupply.call({from: accounts[0]});
//		const boolgM7FhXS = await CryptoSecureBankTokenN75Wqll.transferFrom.call(addressLbeElYJ, addressfq7Imb, uintBzJY8EK, {from: accounts[2]});

		assert.equal(address39GfbJ, 0x2498f41B386a5189B29309a1B7Af393E5585097f)
		assert.equal(boolc8vQLhP, true)
		assert.equal(booln9cEm4, true)
		assert.equal(uintdZQSfSh, BigInt("100000000000000000000000000"))
		await expect(CryptoSecureBankTokenN75Wqll.transferFrom.call(addressLbeElYJ, addressfq7Imb, uintBzJY8EK, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenvYXMi4J = await CryptoSecureBankToken.new({from: accounts[4]});
		const addressD2HuOJA = accounts[1]
		const addressshue2tu = accounts[2]
		const addressFTNzxfF = accounts[2]
		const addressiBv0H1T = accounts[0]
		const addressuiQb3Jr = accounts[4]
		const addressaL2ZyHG = accounts[5]
		const uintE78hIie = await CryptoSecureBankTokenvYXMi4J.allowance.call(addressshue2tu, addressD2HuOJA, {from: accounts[5]});
		const uintqN1Ujf1 = await CryptoSecureBankTokenvYXMi4J.balanceOf.call(addressFTNzxfF, {from: accounts[2]});
		const uintygACyP2 = await CryptoSecureBankTokenvYXMi4J.balanceOf.call(addressiBv0H1T, {from: accounts[3]});
//		await CryptoSecureBankTokenvYXMi4J.whenNotPaused.call({from: accounts[5]});
//		const addressgm3f6U6 = await CryptoSecureBankTokenvYXMi4J.setOwner2.call(addressuiQb3Jr, {from: accounts[0]});
//		const addressz9Gzkc2 = await CryptoSecureBankTokenvYXMi4J.addBlackList.call(addressaL2ZyHG, {from: accounts[1]});

		assert.equal(uintE78hIie, BigInt("0"))
		assert.equal(uintqN1Ujf1, BigInt("0"))
		assert.equal(uintygACyP2, BigInt("0"))
		await expect(CryptoSecureBankTokenvYXMi4J.whenNotPaused.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenvYXMi4J = await CryptoSecureBankToken.new({from: accounts[4]});
		const addresseM7FyAZ = accounts[1]
		const addresscMO8J0O = accounts[3]
		const addressX34Y6q = accounts[3]
		const addressOKTWokZ = accounts[1]
		const addressddRl1nf = accounts[4]
		const uintmSkCsdg = await CryptoSecureBankTokenvYXMi4J.allowance.call(addresscMO8J0O, addresseM7FyAZ, {from: "0x0000000000000000000000000000000000000001"});
		const uintqN1Ujf1 = await CryptoSecureBankTokenvYXMi4J.balanceOf.call(addressX34Y6q, {from: accounts[2]});
		const uintbCTJPm = await CryptoSecureBankTokenvYXMi4J.totalSupply.call({from: accounts[2]});
		const booleSrZItT = await CryptoSecureBankTokenvYXMi4J.getBlackListStatus.call(addressOKTWokZ, {from: accounts[4]});
//		const addressz9Gzkc2 = await CryptoSecureBankTokenvYXMi4J.addBlackList.call(addressddRl1nf, {from: accounts[1]});

		assert.equal(booleSrZItT, false)
		assert.equal(uintbCTJPm, BigInt("100000000000000000000000000"))
		assert.equal(uintmSkCsdg, BigInt("0"))
		assert.equal(uintqN1Ujf1, BigInt("0"))
		await expect(CryptoSecureBankTokenvYXMi4J.addBlackList.call(addressddRl1nf, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenvYXMi4J = await CryptoSecureBankToken.new({from: accounts[4]});
		const addressFwgYRxC = accounts[3]
		const addressxitcAt = accounts[3]
		const addressQ3hVssC = accounts[1]
		const addressu6jaasy = accounts[3]
		const addressAO2CNfl = accounts[3]
		const addresst3aLHFq = accounts[5]
		const uintqN1Ujf1 = await CryptoSecureBankTokenvYXMi4J.balanceOf.call(addressFwgYRxC, {from: accounts[2]});
		const uintFL7gpEG = await CryptoSecureBankTokenvYXMi4J.balanceOf.call(addressxitcAt, {from: accounts[2]});
		const uintyeyddW = await CryptoSecureBankTokenvYXMi4J.balanceOf.call(addressQ3hVssC, {from: accounts[2]});
		const addressI37D6KS = await CryptoSecureBankTokenvYXMi4J.setOwner2.call(addressu6jaasy, {from: accounts[4]});
//		const addressXfGu76 = await CryptoSecureBankTokenvYXMi4J.destroyBlackFunds.call(addressAO2CNfl, {from: accounts[0]});
//		const uintbCTJPm = await CryptoSecureBankTokenvYXMi4J.totalSupply.call({from: accounts[2]});
//		const addressz9Gzkc2 = await CryptoSecureBankTokenvYXMi4J.addBlackList.call(addresst3aLHFq, {from: accounts[1]});

		assert.equal(uintFL7gpEG, BigInt("0"))
		assert.equal(uintqN1Ujf1, BigInt("0"))
		assert.equal(uintyeyddW, BigInt("0"))
		await expect(CryptoSecureBankTokenvYXMi4J.destroyBlackFunds.call(addressAO2CNfl, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenFyNVm1 = await CryptoSecureBankToken.new({from: accounts[2]});
		const addressY88S3zs = accounts[4]
		const addressut7l75 = accounts[4]
		const addressG2xQ8xj = accounts[4]
		const addresspLqxPcq = accounts[4]
		const addressN8WlOo = await CryptoSecureBankTokenFyNVm1.getOwner.call({from: accounts[4]});
//		const addressFouOesD = await CryptoSecureBankTokenFyNVm1.transferOwnership.call(addressY88S3zs, {from: "0x0000000000000000000000000000000000000001"});
//		const boollznohh9 = await CryptoSecureBankTokenFyNVm1.getBlackListStatus.call(addressut7l75, {from: accounts[1]});
//		const addressAMi3NKE = await CryptoSecureBankTokenFyNVm1.removeBlackList.call(addressG2xQ8xj, {from: accounts[5]});
//		await CryptoSecureBankTokenFyNVm1.onlyOwner.call({from: accounts[0]});
//		const uintUSFKTUF = await CryptoSecureBankTokenFyNVm1.balanceOf.call(addresspLqxPcq, {from: accounts[5]});

		assert.equal(addressN8WlOo, 0x53c81aBd392cE6a264efE106526077f0816B9C26)
		await expect(CryptoSecureBankTokenFyNVm1.transferOwnership.call(addressY88S3zs, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokend8DsbgQ = await CryptoSecureBankToken.new({from: accounts[4]});
		const addressP2e5NUx = accounts[1]
		const address9kZjJA = accounts[0]
		const addressr3Q48v3 = accounts[3]
		const uintpq0fYrR = BigInt("230")
		const addressW8DYCZS = accounts[1]
		const uintQzw3Uj1 = await CryptoSecureBankTokend8DsbgQ.allowance.call(address9kZjJA, addressP2e5NUx, {from: accounts[4]});
		const boolCVI8T66 = await CryptoSecureBankTokend8DsbgQ.getBlackListStatus.call(addressr3Q48v3, {from: accounts[4]});
//		const boolegUHqWi = await CryptoSecureBankTokend8DsbgQ.transfer.call(addressW8DYCZS, uintpq0fYrR, {from: accounts[0]});

		assert.equal(boolCVI8T66, false)
		assert.equal(uintQzw3Uj1, BigInt("0"))
		await expect(CryptoSecureBankTokend8DsbgQ.transfer.call(addressW8DYCZS, uintpq0fYrR, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenfaalL2z = await CryptoSecureBankToken.new({from: accounts[2]});
		const addressstDQoYu = "0x0000000000000000000000000000000000000001"
		const uintpZxQ9C3 = BigInt("508")
		const addresswAITXhB = accounts[4]
		const addressvK2MAZu = accounts[3]
//		await CryptoSecureBankTokenfaalL2z.pause.call({from: accounts[2]});
//		const addressHsJBIfw = await CryptoSecureBankTokenfaalL2z.removeBlackList.call(addressstDQoYu, {from: accounts[2]});
//		const boolSgbkNhg = await CryptoSecureBankTokenfaalL2z.transferFrom.call(addressvK2MAZu, addresswAITXhB, uintpZxQ9C3, {from: accounts[0]});
//		await CryptoSecureBankTokenfaalL2z.whenPaused.call({from: accounts[4]});

		await expect(CryptoSecureBankTokenfaalL2z.pause.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenN75Wqll = await CryptoSecureBankToken.new({from: accounts[4]});
		const uintOySPpuI = BigInt("2028")
		const addressWmnrKU = accounts[3]
		const addressIBMxdiO = accounts[2]
		const uintYD1xAM5 = BigInt("152")
		const uintkpobQzK = BigInt("1203")
		const addressdqVDB5 = accounts[5]
		const addressTOZWaIo = accounts[2]
		const booln9cEm4 = await CryptoSecureBankTokenN75Wqll.approve.call(addressWmnrKU, uintOySPpuI, {from: accounts[0]});
		const boollkUuJtJ = await CryptoSecureBankTokenN75Wqll.getBlackListStatus.call(addressIBMxdiO, {from: accounts[4]});
		const boolXItCiLY = await CryptoSecureBankTokenN75Wqll.redeem.call(uintYD1xAM5, {from: accounts[4]});
//		await CryptoSecureBankTokenN75Wqll.whenPaused.call({from: "0x0000000000000000000000000000000000000001"});
//		const boolgM7FhXS = await CryptoSecureBankTokenN75Wqll.transferFrom.call(addressTOZWaIo, addressdqVDB5, uintkpobQzK, {from: accounts[2]});

		assert.equal(boolXItCiLY, true)
		assert.equal(boollkUuJtJ, false)
		assert.equal(booln9cEm4, true)
		await expect(CryptoSecureBankTokenN75Wqll.whenPaused.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenN75Wqll = await CryptoSecureBankToken.new({from: accounts[4]});
		const addressGWAiQl = accounts[4]
		const uintjdssnL8 = BigInt("2028")
		const addresskImKAwg = accounts[3]
		const addresss4LCWo3 = accounts[3]
		const addressvTOynkx = await CryptoSecureBankTokenN75Wqll.transferOwnership.call(addressGWAiQl, {from: accounts[4]});
		const booln9cEm4 = await CryptoSecureBankTokenN75Wqll.approve.call(addresskImKAwg, uintjdssnL8, {from: accounts[0]});
//		const boolKTQM9Vx = await CryptoSecureBankTokenN75Wqll.deprecate.call(addresss4LCWo3, {from: accounts[2]});

		assert.equal(booln9cEm4, true)
		await expect(CryptoSecureBankTokenN75Wqll.deprecate.call(addresss4LCWo3, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenMnYQdcK = await CryptoSecureBankToken.new({from: accounts[3]});
		const uintMyXGrX9 = BigInt("1317")
		const addressYEq6kCR = accounts[0]
		const addressFAYA16 = accounts[2]
		const addressWjNBbfa = accounts[4]
		const addressAAs1Pc3 = "0x0000000000000000000000000000000000000001"
		const addressDHsZCx = accounts[1]
		const boolIpNtZP = await CryptoSecureBankTokenMnYQdcK.transfer.call(addressYEq6kCR, uintMyXGrX9, {from: accounts[3]});
		const uintgZ8zk1b = await CryptoSecureBankTokenMnYQdcK.balanceOf.call(addressFAYA16, {from: accounts[4]});
		const uintuZfeYWn = await CryptoSecureBankTokenMnYQdcK.balanceOf.call(addressWjNBbfa, {from: accounts[4]});
		const uintBBbjaCO = await CryptoSecureBankTokenMnYQdcK.balanceOf.call(addressAAs1Pc3, {from: accounts[0]});
		const addressa2FRUaD = await CryptoSecureBankTokenMnYQdcK.removeBlackList.call(addressDHsZCx, {from: accounts[3]});

		assert.equal(boolIpNtZP, true)
		assert.equal(uintBBbjaCO, BigInt("0"))
		assert.equal(uintgZ8zk1b, BigInt("0"))
		assert.equal(uintuZfeYWn, BigInt("0"))
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokend8DsbgQ = await CryptoSecureBankToken.new({from: accounts[4]});
		const addressV4zpHnS = accounts[1]
		const addressTcdxcqh = accounts[1]
		const addressVwMTsX6 = accounts[4]
		const uintgUMpzFH = BigInt("230")
		const addressEjZEbKq = accounts[2]
		const addressLElvdG9 = accounts[0]
		const addressrMjALub = accounts[1]
		const uintQzw3Uj1 = await CryptoSecureBankTokend8DsbgQ.allowance.call(addressTcdxcqh, addressV4zpHnS, {from: accounts[4]});
		const boolXekSAvD = await CryptoSecureBankTokend8DsbgQ.deprecate.call(addressVwMTsX6, {from: accounts[4]});
//		const boolegUHqWi = await CryptoSecureBankTokend8DsbgQ.transfer.call(addressEjZEbKq, uintgUMpzFH, {from: accounts[0]});
//		const uintri1mRT1 = await CryptoSecureBankTokend8DsbgQ.allowance.call(addressrMjALub, addressLElvdG9, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolXekSAvD, true)
		assert.equal(uintQzw3Uj1, BigInt("0"))
		await expect(CryptoSecureBankTokend8DsbgQ.transfer.call(addressEjZEbKq, uintgUMpzFH, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenADtzh5 = await CryptoSecureBankToken.new({from: accounts[1]});
		const addressbTM6eOw = accounts[2]
		const addressS2E39GR = accounts[4]
		const addressuqWjpWH = "0x0000000000000000000000000000000000000001"
		const uintGhkdCg = BigInt("1222")
		const addressHruuI6n = accounts[3]
		const uintR4YBlBm = BigInt("515")
		const addressp0eQlJ = accounts[4]
		const addressuKaPaSS = await CryptoSecureBankTokenADtzh5.addBlackList.call(addressbTM6eOw, {from: accounts[1]});
//		await CryptoSecureBankTokenADtzh5.whenNotPaused.call({from: accounts[0]});
//		const uintGZLdLr = await CryptoSecureBankTokenADtzh5.balanceOf.call(addressS2E39GR, {from: accounts[0]});
//		const uintlzcDA1O = await CryptoSecureBankTokenADtzh5.balanceOf.call(addressuqWjpWH, {from: accounts[3]});
//		const boolagoKI2 = await CryptoSecureBankTokenADtzh5.approve.call(addressHruuI6n, uintGhkdCg, {from: accounts[4]});
//		const boolJj1CaFy = await CryptoSecureBankTokenADtzh5.transfer.call(addressp0eQlJ, uintR4YBlBm, {from: accounts[4]});

		await expect(CryptoSecureBankTokenADtzh5.whenNotPaused.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenN75Wqll = await CryptoSecureBankToken.new({from: accounts[4]});
		const uintgjikgld = BigInt("2028")
		const addressajMYoU = accounts[4]
		const addressRmrcf4x = "0x0000000000000000000000000000000000000001"
		const booln9cEm4 = await CryptoSecureBankTokenN75Wqll.approve.call(addressajMYoU, uintgjikgld, {from: accounts[0]});
//		const addresspkJlrhj = await CryptoSecureBankTokenN75Wqll.destroyBlackFunds.call(addressRmrcf4x, {from: accounts[4]});
//		const addressNAFJ1x0 = await CryptoSecureBankTokenN75Wqll.getOwner.call({from: accounts[1]});

		assert.equal(booln9cEm4, true)
		await expect(CryptoSecureBankTokenN75Wqll.destroyBlackFunds.call(addressRmrcf4x, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokend8DsbgQ = await CryptoSecureBankToken.new({from: accounts[4]});
		const uintHRUmq7Z = BigInt("506")
		const uintzxefsQA = BigInt("1230")
		const addressFaKPZKc = accounts[4]
		const addressTp3bR6 = accounts[3]
		const addressGJcxm1R = accounts[0]
//		const uintCCFVAVk = await CryptoSecureBankTokend8DsbgQ.setParams.call(uintzxefsQA, uintHRUmq7Z, {from: accounts[4]});
//		const addressfLPdeQ = await CryptoSecureBankTokend8DsbgQ.removeBlackList.call(addressFaKPZKc, {from: accounts[0]});
//		const uintQzw3Uj1 = await CryptoSecureBankTokend8DsbgQ.allowance.call(addressGJcxm1R, addressTp3bR6, {from: accounts[4]});

		await expect(CryptoSecureBankTokend8DsbgQ.setParams.call(uintzxefsQA, uintHRUmq7Z, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})