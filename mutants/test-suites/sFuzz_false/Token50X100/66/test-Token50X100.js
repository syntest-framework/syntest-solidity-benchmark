const Token50X100 = artifacts.require("Token50X100");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Token50X100', (accounts) => {
	it('test for Token50X100', async () => {
		const Token50X100PdvtE4z = await Token50X100.new({from: accounts[2]});
		const uintRgB4xya = BigInt("123")
		const addressI36OjZb = accounts[5]
		const uintGPB32ml = BigInt("146")
		const uintyvfDK62 = BigInt("914")
		const addressIfyCwUF = accounts[2]
		const addressiLaktaG = accounts[4]
		const uinteKb6w7j = BigInt("1054")
		const addressIWuCt8 = "0x0000000000000000000000000000000000000001"
		const addresswtuAmI3 = accounts[2]
		const addressXpmJiwO = accounts[2]
		const uintaXreLUc = BigInt("837")
		const addresszI9lAjc = accounts[4]
		const addresswu6mCWA = accounts[2]
		const boolpAG507b = await Token50X100PdvtE4z.decreaseApproval.call(addressI36OjZb, uintRgB4xya, {from: accounts[2]});
//		const boolukecLj3 = await Token50X100PdvtE4z._transfer.call(addressiLaktaG, addressIfyCwUF, uintyvfDK62, uintGPB32ml, {from: "0x0000000000000000000000000000000000000001"});
//		const boolo2O905b = await Token50X100PdvtE4z.transferFrom.call(addresswtuAmI3, addressIWuCt8, uinteKb6w7j, {from: accounts[1]});
//		const addressOJh6W27 = await Token50X100PdvtE4z.transferOwnership.call(addressXpmJiwO, {from: accounts[3]});
//		const boolxZ8RxQq = await Token50X100PdvtE4z.transferFrom.call(addresswu6mCWA, addresszI9lAjc, uintaXreLUc, {from: accounts[4]});

		assert.equal(boolpAG507b, true)
		await expect(Token50X100PdvtE4z._transfer.call(addressiLaktaG, addressIfyCwUF, uintyvfDK62, uintGPB32ml, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100WsrQ8n5 = await Token50X100.new({from: accounts[2]});
		const uintSTUFwOV = BigInt("966")
		const addresseRYAApX = accounts[1]
		const boolGNBJAZT = false
		const addressOGgOZxP = accounts[3]
//		const boolzVL04rN = await Token50X100WsrQ8n5.transfer.call(addresseRYAApX, uintSTUFwOV, {from: accounts[5]});
//		await Token50X100WsrQ8n5.setWhiteListReceivers.call(addressOGgOZxP, boolGNBJAZT, {from: accounts[1]});
//		await Token50X100WsrQ8n5.release.call({from: accounts[0]});

		await expect(Token50X100WsrQ8n5.transfer.call(addresseRYAApX, uintSTUFwOV, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100Qifmj4F = await Token50X100.new({from: accounts[3]});
		const uintaw3OU5r = BigInt("622")
		const uintA1dlikz = BigInt("1025")
		const uintyGcuZd9 = BigInt("513")
		const uintXCl4p7K = BigInt("334")
		const uintAikJVm = BigInt("1608")
		const boolLT6phWa = await Token50X100Qifmj4F.setMaxLockPeriod.call(uintaw3OU5r, {from: accounts[4]});
//		const boolwVAWier = await Token50X100Qifmj4F.safeLock.call(uintyGcuZd9, uintA1dlikz, {from: accounts[1]});
//		const boolYBMc5N9 = await Token50X100Qifmj4F.safeLock.call(uintAikJVm, uintXCl4p7K, {from: accounts[1]});

		assert.equal(boolLT6phWa, false)
		await expect(Token50X100Qifmj4F.safeLock.call(uintyGcuZd9, uintA1dlikz, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100YRBlgP = await Token50X100.new({from: accounts[2]});
		const uintsVVkCvr = BigInt("1761")
		const addressXFNRavF = accounts[1]
		const addressoZBki7O = accounts[4]
		const addressq6JiWG = accounts[1]
		const address6utAhD = accounts[1]
		const addressI4o8LyJ = accounts[0]
		const addressrBBOLhH = accounts[4]
		const boolmTNRaK8 = await Token50X100YRBlgP.approve.call(addressXFNRavF, uintsVVkCvr, {from: accounts[4]});
//		const addressYP4ywlX = await Token50X100YRBlgP.setOriginalContract.call(addressoZBki7O, {from: accounts[0]});
//		await Token50X100YRBlgP.setLinkingAddresses.call(address6utAhD, addressq6JiWG, {from: accounts[0]});
//		await Token50X100YRBlgP.setLinkingAddresses.call(addressrBBOLhH, addressI4o8LyJ, {from: accounts[0]});

		assert.equal(boolmTNRaK8, true)
		await expect(Token50X100YRBlgP.setOriginalContract.call(addressoZBki7O, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100wJahPRy = await Token50X100.new({from: accounts[4]});
		const uintoq6cVGj = BigInt("1267")
		const uintntRv8xi = BigInt("782")
		const addresspUGqc0S = accounts[2]
		const uintsfy8sms = BigInt("1593")
		const uintmt5wyVS = BigInt("1023")
		const addresshFgQ9GB = accounts[5]
		const uintGrrqLUj = BigInt("73")
		const addressMdlJzyU = accounts[4]
		const addressE4xk9Qi = accounts[3]
		const uintXq7G8CU = BigInt("1509")
		const addressb5HkZ4V = accounts[4]
		const boolF1wsbaQ = await Token50X100wJahPRy.setVesting.call(addresspUGqc0S, uintntRv8xi, uintoq6cVGj, {from: accounts[4]});
//		const boolFuH35nz = await Token50X100wJahPRy.setVesting.call(addresshFgQ9GB, uintmt5wyVS, uintsfy8sms, {from: accounts[1]});
//		const boolOlcEzKS = await Token50X100wJahPRy.issueTokens.call(addressE4xk9Qi, addressMdlJzyU, uintGrrqLUj, {from: accounts[3]});
//		const boolx2yn3WI = await Token50X100wJahPRy.decreaseApproval.call(addressb5HkZ4V, uintXq7G8CU, {from: accounts[1]});

		assert.equal(boolF1wsbaQ, true)
		await expect(Token50X100wJahPRy.setVesting.call(addresshFgQ9GB, uintmt5wyVS, uintsfy8sms, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100Ud2yOb0 = await Token50X100.new({from: accounts[2]});
		const boolQcxZah8 = false
		const addressNYkszV0 = accounts[1]
		const uinttffrw7 = BigInt("831")
		const addresse64KWDm = accounts[3]
		const uintWxiYZPg = BigInt("1914")
		const uintKYGEuDI = BigInt("325")
		const addressE3wWRp3 = accounts[2]
		const addressV7igfFg = accounts[0]
		const uintLUfhBRA = BigInt("1200")
		const uints2jFhIV = BigInt("694")
		const addressCTGbodJ = accounts[0]
		const addressyQuNw2 = accounts[4]
		const addressyD0hwZG = accounts[5]
		const address96bzuv = accounts[3]
//		await Token50X100Ud2yOb0.setWhiteList.call(addressNYkszV0, boolQcxZah8, {from: accounts[2]});
//		const boolqvGz0Vy = await Token50X100Ud2yOb0.transfer.call(addresse64KWDm, uinttffrw7, {from: accounts[3]});
//		const boolOMHuuQv = await Token50X100Ud2yOb0._transfer.call(addressV7igfFg, addressE3wWRp3, uintKYGEuDI, uintWxiYZPg, {from: accounts[3]});
//		const booljMv1VK2 = await Token50X100Ud2yOb0._transfer.call(addressyQuNw2, addressCTGbodJ, uints2jFhIV, uintLUfhBRA, {from: accounts[5]});
//		await Token50X100Ud2yOb0.setLinkingAddresses.call(address96bzuv, addressyD0hwZG, {from: accounts[3]});

		await expect(Token50X100Ud2yOb0.setWhiteList.call(addressNYkszV0, boolQcxZah8, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100UStVSe = await Token50X100.new({from: accounts[0]});
		const uintm9nFuoG = BigInt("1607")
		const addresswn374AH = accounts[3]
		const addressTbu17FG = accounts[1]
		const uinteUMJMRw = BigInt("54")
		const uintdfR3h0Y = BigInt("523")
		const uintccSzbc7 = BigInt("264")
		const addressHT200nI = accounts[5]
		const addressMvIAQoI = "0x0000000000000000000000000000000000000001"
		const uintIREdGff = BigInt("709")
		const uint9cjotd = BigInt("1122")
		const addressuATjKx = accounts[2]
//		const boolaUOzqoN = await Token50X100UStVSe.transferFrom.call(addressTbu17FG, addresswn374AH, uintm9nFuoG, {from: accounts[5]});
//		const bool88Ypnh = await Token50X100UStVSe.setMaxLockPeriod.call(uinteUMJMRw, {from: accounts[2]});
//		const booleMuIYYn = await Token50X100UStVSe._transfer.call(addressMvIAQoI, addressHT200nI, uintccSzbc7, uintdfR3h0Y, {from: accounts[2]});
//		const booldu0hu24 = await Token50X100UStVSe.setVesting.call(addressuATjKx, uint9cjotd, uintIREdGff, {from: accounts[2]});

		await expect(Token50X100UStVSe.transferFrom.call(addressTbu17FG, addresswn374AH, uintm9nFuoG, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100WsrQ8n5 = await Token50X100.new({from: accounts[2]});
		const uintzQxFS83 = BigInt("1013")
		const addressa3KSKdh = accounts[2]
		const uintRMqTmmi = BigInt("968")
		const addresseuWgLpV = accounts[1]
		const boolGNBJAZT = false
		const address46JUpU = accounts[3]
		const booldTHKSs = await Token50X100WsrQ8n5.increaseApproval.call(addressa3KSKdh, uintzQxFS83, {from: accounts[4]});
//		const boolzVL04rN = await Token50X100WsrQ8n5.transfer.call(addresseuWgLpV, uintRMqTmmi, {from: accounts[5]});
//		await Token50X100WsrQ8n5.setWhiteListReceivers.call(address46JUpU, boolGNBJAZT, {from: accounts[1]});
//		await Token50X100WsrQ8n5.release.call({from: accounts[0]});

		assert.equal(booldTHKSs, true)
		await expect(Token50X100WsrQ8n5.transfer.call(addresseuWgLpV, uintRMqTmmi, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100PdvtE4z = await Token50X100.new({from: accounts[2]});
		const uintQsQtoH1 = BigInt("123")
		const addressBCCyvKw = accounts[5]
		const addressXZK5Q6a = accounts[0]
		const uintViYBvo = BigInt("146")
		const uintqlVu4dP = BigInt("914")
		const addressTqVDRJJ = accounts[3]
		const addressIssUfR = accounts[4]
		const address7pP9kF = accounts[2]
		const uintwWTsDwR = BigInt("1466")
		const uintpSMt3hu = BigInt("366")
		const uintjmcoebF = BigInt("837")
		const addressIVuzwml = accounts[4]
		const addresscGJtC6d = accounts[2]
		const boolpAG507b = await Token50X100PdvtE4z.decreaseApproval.call(addressBCCyvKw, uintQsQtoH1, {from: accounts[2]});
		const uint256YE1RZnF = await Token50X100PdvtE4z.balanceOf.call(addressXZK5Q6a, {from: accounts[4]});
//		const boolukecLj3 = await Token50X100PdvtE4z._transfer.call(addressIssUfR, addressTqVDRJJ, uintqlVu4dP, uintViYBvo, {from: "0x0000000000000000000000000000000000000001"});
//		const addressOJh6W27 = await Token50X100PdvtE4z.transferOwnership.call(address7pP9kF, {from: accounts[3]});
//		const boolSjq0eI = await Token50X100PdvtE4z.safeLock.call(uintpSMt3hu, uintwWTsDwR, {from: accounts[1]});
//		const boolxZ8RxQq = await Token50X100PdvtE4z.transferFrom.call(addresscGJtC6d, addressIVuzwml, uintjmcoebF, {from: accounts[4]});

		assert.equal(boolpAG507b, true)
		assert.equal(uint256YE1RZnF, BigInt("0"))
		await expect(Token50X100PdvtE4z._transfer.call(addressIssUfR, addressTqVDRJJ, uintqlVu4dP, uintViYBvo, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100PdvtE4z = await Token50X100.new({from: accounts[2]});
		const uintJAyL7f0 = BigInt("123")
		const addressMdqykwJ = accounts[5]
		const addressdLpDF2g = accounts[4]
		const addressz5kmMKm = accounts[5]
		const uintzBxwnKW = BigInt("146")
		const uintJE6WgTo = BigInt("889")
		const addressIuqBYNh = accounts[2]
		const addressYFUGxzJ = accounts[4]
		const addresst9QyPwo = accounts[2]
		const uintTueyqy7 = BigInt("837")
		const addressLG2booY = accounts[4]
		const addressglyRqx = accounts[2]
		const boolpAG507b = await Token50X100PdvtE4z.decreaseApproval.call(addressMdqykwJ, uintJAyL7f0, {from: accounts[2]});
		const uint256cfEHB0 = await Token50X100PdvtE4z.allowance.call(addressz5kmMKm, addressdLpDF2g, {from: accounts[2]});
//		const boolukecLj3 = await Token50X100PdvtE4z._transfer.call(addressYFUGxzJ, addressIuqBYNh, uintJE6WgTo, uintzBxwnKW, {from: "0x0000000000000000000000000000000000000001"});
//		const addressOJh6W27 = await Token50X100PdvtE4z.transferOwnership.call(addresst9QyPwo, {from: accounts[3]});
//		await Token50X100PdvtE4z.onlyOwner.call({from: accounts[4]});
//		const boolxZ8RxQq = await Token50X100PdvtE4z.transferFrom.call(addressglyRqx, addressLG2booY, uintTueyqy7, {from: accounts[4]});

		assert.equal(boolpAG507b, true)
		assert.equal(uint256cfEHB0, BigInt("0"))
		await expect(Token50X100PdvtE4z._transfer.call(addressYFUGxzJ, addressIuqBYNh, uintJE6WgTo, uintzBxwnKW, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100AWVHB0Y = await Token50X100.new({from: "0x0000000000000000000000000000000000000001"});
		const booljVLjEw = true
		const addressIo6KE7u = accounts[1]
		const uintbGMVzz3 = BigInt("1414")
		const uintRunjZEV = BigInt("1671")
		const addressEmlW3sE = accounts[3]
		const addressfjJkCEK = accounts[1]
		const addressgqzsiDe = accounts[1]
		const uintWzNRnu = BigInt("539")
		const uintULFqUyP = BigInt("1604")
		const uinttHNgfk = BigInt("108")
		const uinthXgrQrd = BigInt("1035")
		const addressSlrW0M = accounts[1]
		const uintGoEBufb = BigInt("337")
		await Token50X100AWVHB0Y.setWhiteListReceivers.call(addressIo6KE7u, booljVLjEw, {from: accounts[0]});
		const boolQY0FdeV = await Token50X100AWVHB0Y._transfer.call(addressfjJkCEK, addressEmlW3sE, uintRunjZEV, uintbGMVzz3, {from: accounts[3]});
		const addressF2KHDqW = await Token50X100AWVHB0Y.setOriginalContract.call(addressgqzsiDe, {from: accounts[5]});
		const boolapj75t = await Token50X100AWVHB0Y.safeLock.call(uintULFqUyP, uintWzNRnu, {from: accounts[2]});
		const boolFOQ158N = await Token50X100AWVHB0Y.setVesting.call(addressSlrW0M, uinthXgrQrd, uinttHNgfk, {from: accounts[0]});
		const booleb1GT91 = await Token50X100AWVHB0Y.setMaxLockPeriod.call(uintGoEBufb, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for Token50X100', async () => {
		const Token50X100kXoYPxU = await Token50X100.new({from: accounts[4]});
		const uint5DOKBq = BigInt("43")
		const stringkrHqfQ = "f5QuB2RjYT2pfHf"
		const stringfv1rfDG = "1bW4ARW2PvFA"
		const uintpXuRNB = BigInt("134")
		const uintyeteSRH = BigInt("1888")
		const addressmAy247J = accounts[2]
		const uintIROl6Qu = BigInt("179")
		const uintDaaUxa2 = BigInt("696")
		const addressEiXOK7 = accounts[2]
		const addressGjQuwjd = accounts[4]
//		await Token50X100kXoYPxU.setSymbolNameDecimals.call(stringfv1rfDG, stringkrHqfQ, uint5DOKBq, {from: accounts[4]});
//		const bools6nOHl5 = await Token50X100kXoYPxU.setMaxLockPeriod.call(uintpXuRNB, {from: accounts[4]});
//		const boolIlrkR6l = await Token50X100kXoYPxU.transfer.call(addressmAy247J, uintyeteSRH, {from: accounts[0]});
//		await Token50X100kXoYPxU.lock.call({from: accounts[4]});
//		const boolyIVZGl1 = await Token50X100kXoYPxU._transfer.call(addressGjQuwjd, addressEiXOK7, uintDaaUxa2, uintIROl6Qu, {from: accounts[1]});

		await expect(Token50X100kXoYPxU.setSymbolNameDecimals.call(stringfv1rfDG, stringkrHqfQ, uint5DOKBq, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100qYkuvhN = await Token50X100.new({from: accounts[3]});
		const addressmYlHyUe = accounts[4]
		const addresshHCqjxc = "0x0000000000000000000000000000000000000001"
		const addressFSrAAYm = accounts[2]
		const uintvcXa271 = BigInt("1262")
		const addressahQytqU = accounts[4]
//		await Token50X100qYkuvhN.release.call({from: accounts[3]});
//		await Token50X100qYkuvhN.lock.call({from: accounts[3]});
//		const uint256GlnKHmm = await Token50X100qYkuvhN.balanceOf.call(addressmYlHyUe, {from: accounts[5]});
//		const uint256pmuHvTH = await Token50X100qYkuvhN.balanceOf.call(addresshHCqjxc, {from: accounts[0]});
//		const addressLs6DEWv = await Token50X100qYkuvhN.transferOwnership.call(addressFSrAAYm, {from: accounts[1]});
//		const boolMFRbaIA = await Token50X100qYkuvhN.transfer.call(addressahQytqU, uintvcXa271, {from: "0x0000000000000000000000000000000000000001"});

		await expect(Token50X100qYkuvhN.release.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X1007L1bZk = await Token50X100.new({from: accounts[3]});
		const uintHBc6URi = BigInt("1653")
		const uintBaFmJNP = BigInt("1777")
		const uintCg7ABxB = BigInt("416")
		const addressU6sOjAF = accounts[4]
		const addressX8hSlcz = accounts[3]
		const booliDxPhOr = await Token50X1007L1bZk.setMaxLockPeriod.call(uintHBc6URi, {from: accounts[4]});
//		const booltpiVn91 = await Token50X1007L1bZk._transfer.call(addressX8hSlcz, addressU6sOjAF, uintCg7ABxB, uintBaFmJNP, {from: accounts[3]});

		assert.equal(booliDxPhOr, false)
		await expect(Token50X1007L1bZk._transfer.call(addressX8hSlcz, addressU6sOjAF, uintCg7ABxB, uintBaFmJNP, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100PdvtE4z = await Token50X100.new({from: accounts[2]});
		const uinttsLnRjL = BigInt("0")
		const addressO3eNq6D = accounts[7]
		const booln2VBphM = true
		const addressUzHqkVh = accounts[4]
		const uintTGE7Gj = BigInt("217")
		const stringF7aEOSA = "PSppB1gcMlgFsK6yTwZPnWcb6tuohqG8iu8hsS3ICJIhAQoynRxiKz2PjUlQ5WuabhUe7mpPJ4Aie"
		const stringryTA9Bu = "NyKg52vQzcNAEymzkZmeD4JZRQsiScnxsrrJ0uH3r7X"
		const boolpAG507b = await Token50X100PdvtE4z.decreaseApproval.call(addressO3eNq6D, uinttsLnRjL, {from: accounts[2]});
//		await Token50X100PdvtE4z.setWhiteListReceivers.call(addressUzHqkVh, booln2VBphM, {from: accounts[1]});
//		const boold6GNn4G = await Token50X100PdvtE4z.setSymbolNameDecimals.call(stringryTA9Bu, stringF7aEOSA, uintTGE7Gj, {from: accounts[3]});

		assert.equal(boolpAG507b, true)
		await expect(Token50X100PdvtE4z.setWhiteListReceivers.call(addressUzHqkVh, booln2VBphM, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100PdvtE4z = await Token50X100.new({from: accounts[2]});
		const addresse1ccUPJ = accounts[0]
		const uintNmjxO4Q = BigInt("28")
		const addressHJbKcP3 = accounts[7]
		const addressfpBf5L = accounts[2]
		const addressInQi1Kj = accounts[1]
		const uint256WNy8tyF = await Token50X100PdvtE4z.balanceOf.call(addresse1ccUPJ, {from: accounts[4]});
		const boolpAG507b = await Token50X100PdvtE4z.decreaseApproval.call(addressHJbKcP3, uintNmjxO4Q, {from: accounts[2]});
//		await Token50X100PdvtE4z.setLinkingAddresses.call(addressInQi1Kj, addressfpBf5L, {from: accounts[2]});

		assert.equal(boolpAG507b, true)
		assert.equal(uint256WNy8tyF, BigInt("0"))
		await expect(Token50X100PdvtE4z.setLinkingAddresses.call(addressInQi1Kj, addressfpBf5L, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100PdvtE4z = await Token50X100.new({from: accounts[2]});
		const uintvpcN8UT = BigInt("35")
		const addressPNRglDj = accounts[7]
		const addressH7kz9P = accounts[4]
		const addressTlQRiHF = accounts[3]
		const boolpAG507b = await Token50X100PdvtE4z.decreaseApproval.call(addressPNRglDj, uintvpcN8UT, {from: accounts[2]});
		const addressu6BmQJG = await Token50X100PdvtE4z.transferOwnership.call(addressH7kz9P, {from: accounts[2]});
//		const addressVBcldjQ = await Token50X100PdvtE4z.transferOwnership.call(addressTlQRiHF, {from: accounts[3]});

		assert.equal(boolpAG507b, true)
		await expect(Token50X100PdvtE4z.transferOwnership.call(addressTlQRiHF, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X1007L1bZk = await Token50X100.new({from: accounts[3]});
		const uintprh4TUK = BigInt("1651")
		const uintglHMSpO = BigInt("1076")
		const addressxjN5Sc = "0x0000000000000000000000000000000000000000"
		const addressKDq2AQu = accounts[4]
		const booliDxPhOr = await Token50X1007L1bZk.setMaxLockPeriod.call(uintprh4TUK, {from: accounts[4]});
//		const boolTc0Cv3X = await Token50X1007L1bZk.transfer.call(addressxjN5Sc, uintglHMSpO, {from: accounts[0]});
//		const addressBunS8Cd = await Token50X1007L1bZk.transferOwnership.call(addressKDq2AQu, {from: accounts[2]});

		assert.equal(booliDxPhOr, false)
		await expect(Token50X1007L1bZk.transfer.call(addressxjN5Sc, uintglHMSpO, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X1007L1bZk = await Token50X100.new({from: accounts[3]});
		const uintRxWZm4 = BigInt("1900")
		const addressz8ml5sB = accounts[4]
		const uintJYMfFg9 = BigInt("1793")
		const addressFmDrfG = accounts[3]
		const uintksTCV4h = BigInt("1076")
		const addressKnL9MTw = "0x0000000000000000000000000000000000000002"
		const boolYJk2Whe = await Token50X1007L1bZk.setMaxLockPeriod.call(uintRxWZm4, {from: accounts[0]});
//		await Token50X1007L1bZk.setTokenContract.call(addressz8ml5sB, {from: accounts[3]});
//		const boolG7wJ9B = await Token50X1007L1bZk.transfer.call(addressFmDrfG, uintJYMfFg9, {from: accounts[4]});
//		const boolTc0Cv3X = await Token50X1007L1bZk.transfer.call(addressKnL9MTw, uintksTCV4h, {from: accounts[0]});

		assert.equal(boolYJk2Whe, false)
		await expect(Token50X1007L1bZk.setTokenContract.call(addressz8ml5sB, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X1007L1bZk = await Token50X100.new({from: accounts[3]});
		const boolo4nhvXb = true
		const addressSyYrcVw = accounts[0]
		const uintPPcjnD = BigInt("1081")
		const addressm1fu6q = "0x0000000000000000000000000000000000000001"
//		await Token50X1007L1bZk.setWhiteListReceivers.call(addressSyYrcVw, boolo4nhvXb, {from: accounts[3]});
//		const boolTc0Cv3X = await Token50X1007L1bZk.transfer.call(addressm1fu6q, uintPPcjnD, {from: accounts[0]});

		await expect(Token50X1007L1bZk.setWhiteListReceivers.call(addressSyYrcVw, boolo4nhvXb, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100JJ7LGdW = await Token50X100.new({from: accounts[4]});
		const boolwoNQJ5a = false
		const addressbKPbExx = accounts[0]
		const addressXGdkz1y = accounts[3]
		const uint256llnkZq8 = await Token50X100JJ7LGdW.totalSupply.call({from: accounts[3]});
//		await Token50X100JJ7LGdW.setWhiteList.call(addressbKPbExx, boolwoNQJ5a, {from: accounts[3]});
//		const addresslPgexsH = await Token50X100JJ7LGdW.transferOwnership.call(addressXGdkz1y, {from: accounts[1]});

		assert.equal(uint256llnkZq8, BigInt("4714285714285710"))
		await expect(Token50X100JJ7LGdW.setWhiteList.call(addressbKPbExx, boolwoNQJ5a, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})