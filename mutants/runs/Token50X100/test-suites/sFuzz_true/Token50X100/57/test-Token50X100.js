const Token50X100 = artifacts.require("Token50X100");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Token50X100', (accounts) => {
	it('test for Token50X100', async () => {
		const Token50X100HT4QECx = await Token50X100.new({from: accounts[0]});
		const uintjrsKmFw = BigInt("1335")
		const uintbuiqgvV = BigInt("928")
		const addressulpvuBq = accounts[1]
		const addressYUCbkOx = accounts[2]
		const uintJYZgiho = BigInt("120")
		const stringLg7M9Gp = "hba1uW4pZtR1dZ7nXYWnrma29DUSpjcegB"
		const stringtLs5wWo = "Qmj6e3mh80W"
		const uinta9FnSUO = BigInt("55")
		const addressxfu4uPh = "0x0000000000000000000000000000000000000001"
		const booldzwPHrP = await Token50X100HT4QECx._transfer.call(addressYUCbkOx, addressulpvuBq, uintbuiqgvV, uintjrsKmFw, {from: accounts[0]});
		const boolUXGvVyL = await Token50X100HT4QECx.setSymbolNameDecimals.call(stringtLs5wWo, stringLg7M9Gp, uintJYZgiho, {from: accounts[2]});
		const boolTXt0DvR = await Token50X100HT4QECx.approve.call(addressxfu4uPh, uinta9FnSUO, {from: "0x0000000000000000000000000000000000000001"});

		await expect(Token50X100HT4QECx._transfer.call(addressYUCbkOx, addressulpvuBq, uintbuiqgvV, uintjrsKmFw, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100dyjE3dw = await Token50X100.new({from: accounts[1]});
		const uintdA2IbJI = BigInt("374")
		const addressQdmtqV6 = accounts[3]
		const uintjCJUMIn = BigInt("736")
		const uintQFOTlo7 = BigInt("1851")
		const addressS24pMoM = accounts[3]
		const addressgoZNdds = accounts[2]
		const uintRqr7ZGB = BigInt("703")
		const addressMrUb32D = accounts[1]
		const uintJjeRHjy = BigInt("1155")
		const uintOsjJeD7 = BigInt("1805")
		const boolbJK1yVc = await Token50X100dyjE3dw.increaseApproval.call(addressQdmtqV6, uintdA2IbJI, {from: accounts[0]});
		const booloDlH62m = await Token50X100dyjE3dw.setVesting.call(addressS24pMoM, uintQFOTlo7, uintjCJUMIn, {from: accounts[0]});
		const addressrfWmmdR = await Token50X100dyjE3dw.setOriginalContract.call(addressgoZNdds, {from: "0x0000000000000000000000000000000000000001"});
		const boolf2ZZ1Sg = await Token50X100dyjE3dw.transfer.call(addressMrUb32D, uintRqr7ZGB, {from: accounts[3]});
		const boolJglDr7o = await Token50X100dyjE3dw.safeLock.call(uintOsjJeD7, uintJjeRHjy, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolbJK1yVc, true)
		await expect(Token50X100dyjE3dw.setVesting.call(addressS24pMoM, uintQFOTlo7, uintjCJUMIn, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100aDUDk1D = await Token50X100.new({from: accounts[0]});
		const uinta5LR8p = BigInt("2016")
		const addressDMbKx8c = accounts[1]
		const addressuIgiZqv = accounts[5]
		const boolhQSfWU4 = await Token50X100aDUDk1D.transfer.call(addressDMbKx8c, uinta5LR8p, {from: accounts[1]});
		const uint256hGV3MO = await Token50X100aDUDk1D.totalSupply.call({from: accounts[1]});
		const addressGYyiKve = await Token50X100aDUDk1D.setOriginalContract.call(addressuIgiZqv, {from: accounts[0]});
		await Token50X100aDUDk1D.release.call({from: accounts[2]});

		await expect(Token50X100aDUDk1D.transfer.call(addressDMbKx8c, uinta5LR8p, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100P3o9mvB = await Token50X100.new({from: "0x0000000000000000000000000000000000000001"});
		const uintQRdHbo = BigInt("1058")
		const addressVENlce1 = accounts[0]
		const addressoQHyxOq = accounts[0]
		const addressRGf865k = accounts[3]
		const uintrbYemaU = BigInt("1284")
		const uintyf8s11f = BigInt("1708")
		const addressfyZ9agi = accounts[5]
		const addressFDAJcq9 = accounts[4]
		const boolG24GYvi = await Token50X100P3o9mvB.transferFrom.call(addressoQHyxOq, addressVENlce1, uintQRdHbo, {from: accounts[3]});
		await Token50X100P3o9mvB.release.call({from: accounts[4]});
		await Token50X100P3o9mvB.setTokenContract.call(addressRGf865k, {from: accounts[2]});
		const boolXi42p80 = await Token50X100P3o9mvB._transfer.call(addressFDAJcq9, addressfyZ9agi, uintyf8s11f, uintrbYemaU, {from: accounts[4]});
		await Token50X100P3o9mvB.onlyOwner.call({from: accounts[3]});
	});

	it('test for Token50X100', async () => {
		const Token50X100QRa13GM = await Token50X100.new({from: accounts[0]});
		const addressF9fS4Mq = accounts[1]
		const addressRkyn794 = accounts[1]
		const uint256hdNzpfe = await Token50X100QRa13GM.totalSupply.call({from: accounts[3]});
		await Token50X100QRa13GM.setLinkingAddresses.call(addressRkyn794, addressF9fS4Mq, {from: "0x0000000000000000000000000000000000000001"});
		await Token50X100QRa13GM.lock.call({from: accounts[2]});

		assert.equal(uint256hdNzpfe, BigInt("4714285714285710"))
		await expect(Token50X100QRa13GM.setLinkingAddresses.call(addressRkyn794, addressF9fS4Mq, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100QRa13GM = await Token50X100.new({from: accounts[0]});
		const uintatRY8fu = BigInt("1074")
		const addressvhLqYM = accounts[1]
		const addressYK8N40O = accounts[1]
		const boolNxWhHWE = await Token50X100QRa13GM.setMaxLockPeriod.call(uintatRY8fu, {from: accounts[1]});
		const uint256hdNzpfe = await Token50X100QRa13GM.totalSupply.call({from: accounts[3]});
		await Token50X100QRa13GM.setLinkingAddresses.call(addressYK8N40O, addressvhLqYM, {from: "0x0000000000000000000000000000000000000001"});
		await Token50X100QRa13GM.lock.call({from: accounts[2]});

		assert.equal(boolNxWhHWE, false)
		assert.equal(uint256hdNzpfe, BigInt("4714285714285710"))
		await expect(Token50X100QRa13GM.setLinkingAddresses.call(addressYK8N40O, addressvhLqYM, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100HT4QECx = await Token50X100.new({from: accounts[0]});
		const uinthJFwPaB = BigInt("1884")
		const uintjMkO49m = BigInt("1022")
		const addressstAg52j = accounts[4]
		const uintDoDNwJp = BigInt("1335")
		const uintbJ5enI6 = BigInt("928")
		const address4QCYpG = accounts[1]
		const addressyT9jmcA = accounts[2]
		const uintAWc2YOf = BigInt("120")
		const stringLg7M9Gp = "hba1uW4pZtR1dZ7nXYWnrma29DUSpjcegB"
		const stringtLs5wWo = "Qmj6e3mh88W"
		const uintmuLnW7W = BigInt("55")
		const addressXTfu6oR = "0x0000000000000000000000000000000000000001"
		const boolwockdmC = await Token50X100HT4QECx.setVesting.call(addressstAg52j, uintjMkO49m, uinthJFwPaB, {from: accounts[0]});
		const booldzwPHrP = await Token50X100HT4QECx._transfer.call(addressyT9jmcA, address4QCYpG, uintbJ5enI6, uintDoDNwJp, {from: accounts[0]});
		const boolUXGvVyL = await Token50X100HT4QECx.setSymbolNameDecimals.call(stringtLs5wWo, stringLg7M9Gp, uintAWc2YOf, {from: accounts[2]});
		const boolTXt0DvR = await Token50X100HT4QECx.approve.call(addressXTfu6oR, uintmuLnW7W, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolwockdmC, true)
		await expect(Token50X100HT4QECx._transfer.call(addressyT9jmcA, address4QCYpG, uintbJ5enI6, uintDoDNwJp, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100aDUDk1D = await Token50X100.new({from: accounts[0]});
		const uintonVzzvZ = BigInt("1554")
		const addressowmKDOv = accounts[1]
		const uintvif9Z5Z = BigInt("232")
		const uintevG18Iv = BigInt("779")
		const addresszadUqji = accounts[3]
		const addressbfnUwV = accounts[4]
		const booln1COctb = await Token50X100aDUDk1D.increaseApproval.call(addressowmKDOv, uintonVzzvZ, {from: accounts[3]});
		const boolb0S8rca = await Token50X100aDUDk1D.safeLock.call(uintevG18Iv, uintvif9Z5Z, {from: accounts[3]});
		const uint256hGV3MO = await Token50X100aDUDk1D.totalSupply.call({from: accounts[1]});
		await Token50X100aDUDk1D.setLinkingAddresses.call(addressbfnUwV, addresszadUqji, {from: accounts[2]});

		assert.equal(booln1COctb, true)
		await expect(Token50X100aDUDk1D.safeLock.call(uintevG18Iv, uintvif9Z5Z, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100aDUDk1D = await Token50X100.new({from: accounts[0]});
		const uintZS9oo9D = BigInt("1744")
		const addressatQLfnQ = accounts[5]
		const uintrSU2bIZ = BigInt("2016")
		const addresslwqBCHN = accounts[1]
		await Token50X100aDUDk1D.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"});
		const boolidOgNNk = await Token50X100aDUDk1D.approve.call(addressatQLfnQ, uintZS9oo9D, {from: accounts[0]});
		const boolhQSfWU4 = await Token50X100aDUDk1D.transfer.call(addresslwqBCHN, uintrSU2bIZ, {from: accounts[1]});
		await Token50X100aDUDk1D.release.call({from: accounts[2]});

		await expect(Token50X100aDUDk1D.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100aDUDk1D = await Token50X100.new({from: accounts[0]});
		const uintqFvum2W = BigInt("1917")
		const uintgSI6k0f = BigInt("0")
		const uintgD6XoD6 = BigInt("2016")
		const addresssKJNRs9 = accounts[2]
		const addressmpL4r5 = accounts[2]
		const boolfbk8D3j = await Token50X100aDUDk1D.safeLock.call(uintgSI6k0f, uintqFvum2W, {from: accounts[3]});
		const boolhQSfWU4 = await Token50X100aDUDk1D.transfer.call(addresssKJNRs9, uintgD6XoD6, {from: accounts[1]});
		const addresspY8U5Ug = await Token50X100aDUDk1D.setOriginalContract.call(addressmpL4r5, {from: "0x0000000000000000000000000000000000000001"});
		const uint256cDDcVba = await Token50X100aDUDk1D.totalSupply.call({from: accounts[3]});

		assert.equal(boolfbk8D3j, false)
		await expect(Token50X100aDUDk1D.transfer.call(addresssKJNRs9, uintgD6XoD6, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100aDUDk1D = await Token50X100.new({from: accounts[0]});
		const uintshtjrgB = BigInt("822")
		const addressBPapco = accounts[2]
		const addressfAnFRaj = accounts[3]
		const boolrwNqv4 = await Token50X100aDUDk1D.transferFrom.call(addressfAnFRaj, addressBPapco, uintshtjrgB, {from: accounts[1]});
		await Token50X100aDUDk1D.release.call({from: accounts[2]});

		await expect(Token50X100aDUDk1D.transferFrom.call(addressfAnFRaj, addressBPapco, uintshtjrgB, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100aDUDk1D = await Token50X100.new({from: accounts[0]});
		const uinteUY6Rea = BigInt("568")
		const addressv47iLxm = accounts[0]
		const uint9cFMav = BigInt("1735")
		const boolxhS85Tu = await Token50X100aDUDk1D.decreaseApproval.call(addressv47iLxm, uinteUY6Rea, {from: accounts[1]});
		await Token50X100aDUDk1D.release.call({from: accounts[2]});
		const boolQqPjXXv = await Token50X100aDUDk1D.setMaxLockPeriod.call(uint9cFMav, {from: accounts[3]});

		assert.equal(boolxhS85Tu, true)
		await expect(Token50X100aDUDk1D.release.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100aDUDk1D = await Token50X100.new({from: accounts[0]});
		const addressHqyzyux = accounts[2]
		const uintBIv9eG = BigInt("226")
		const addressw8xMFdC = accounts[0]
		const uint256ZNTa6qb = await Token50X100aDUDk1D.balanceOf.call(addressHqyzyux, {from: accounts[1]});
		const booleTnLoUx = await Token50X100aDUDk1D.transfer.call(addressw8xMFdC, uintBIv9eG, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256ZNTa6qb, BigInt("0"))
		await expect(Token50X100aDUDk1D.transfer.call(addressw8xMFdC, uintBIv9eG, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100aDUDk1D = await Token50X100.new({from: accounts[0]});
		const uintgNVtGQ8 = BigInt("568")
		const addressYxnYsXR = accounts[0]
		const addressOJDy5GX = accounts[4]
		const addresse1FZTgK = accounts[1]
		const uintDnQfJg2 = BigInt("1735")
		const boolxhS85Tu = await Token50X100aDUDk1D.decreaseApproval.call(addressYxnYsXR, uintgNVtGQ8, {from: accounts[1]});
		const uint256adbBiU6 = await Token50X100aDUDk1D.allowance.call(addresse1FZTgK, addressOJDy5GX, {from: "0x0000000000000000000000000000000000000001"});
		await Token50X100aDUDk1D.release.call({from: accounts[2]});
		const boolQqPjXXv = await Token50X100aDUDk1D.setMaxLockPeriod.call(uintDnQfJg2, {from: accounts[3]});

		assert.equal(boolxhS85Tu, true)
		assert.equal(uint256adbBiU6, BigInt("0"))
		await expect(Token50X100aDUDk1D.release.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100aDUDk1D = await Token50X100.new({from: accounts[0]});
		const uintesxiRL = BigInt("1917")
		const uintt4NiKzi = BigInt("0")
		await Token50X100aDUDk1D.lock.call({from: accounts[0]});
		const boolfbk8D3j = await Token50X100aDUDk1D.safeLock.call(uintt4NiKzi, uintesxiRL, {from: accounts[3]});

		await expect(Token50X100aDUDk1D.lock.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X1005BZNu7 = await Token50X100.new({from: accounts[2]});
		const uintcKcYfFE = BigInt("1544")
		const addressvTrQaqd = accounts[4]
		const addressSBxhgM = accounts[4]
		const addressHG7ayxd = accounts[4]
		const addressKxpt4CT = accounts[0]
		const boolv01JdQ = await Token50X1005BZNu7.approve.call(addressvTrQaqd, uintcKcYfFE, {from: accounts[0]});
		const uint256FZw6Oqo = await Token50X1005BZNu7.allowance.call(addressHG7ayxd, addressSBxhgM, {from: accounts[0]});
		const uint256nqEI7VX = await Token50X1005BZNu7.totalSupply.call({from: accounts[5]});
		const addressObYdSmK = await Token50X1005BZNu7.transferOwnership.call(addressKxpt4CT, {from: accounts[0]});

		assert.equal(boolv01JdQ, true)
		assert.equal(uint256FZw6Oqo, BigInt("0"))
		assert.equal(uint256nqEI7VX, BigInt("4714285714285710"))
		await expect(Token50X1005BZNu7.transferOwnership.call(addressKxpt4CT, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100aDUDk1D = await Token50X100.new({from: accounts[0]});
		const uinto4P1D6x = BigInt("2016")
		const addressMP7ihIQ = accounts[2]
		const uintOIyF5h9 = BigInt("1748")
		const addressTsC3tRQ = accounts[1]
		const addressBteiJGF = accounts[3]
		await Token50X100aDUDk1D.release.call({from: accounts[0]});
		const boolhQSfWU4 = await Token50X100aDUDk1D.transfer.call(addressMP7ihIQ, uinto4P1D6x, {from: accounts[1]});
		const boolh5yXcMa = await Token50X100aDUDk1D.transferFrom.call(addressBteiJGF, addressTsC3tRQ, uintOIyF5h9, {from: accounts[2]});

		await expect(Token50X100aDUDk1D.release.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100iISNrq4 = await Token50X100.new({from: accounts[1]});
		const uint4WbxNu = BigInt("1138")
		const uintiAS1QFI = BigInt("1310")
		const addresswgCvOi1 = accounts[2]
		const uintYb6GFxB = BigInt("1198")
		const addressTYW4DZl = accounts[4]
		const uintmcQKXye = BigInt("1915")
		const addressdHSS9qF = accounts[0]
		const uinthAjhFm8 = BigInt("1911")
		const uintyjL9Vxl = BigInt("1576")
		const addressiJn0oA8 = "0x0000000000000000000000000000000000000001"
		const addressFPMy3Kp = accounts[5]
		const uintJcDyzt4 = BigInt("211")
		const stringWW7UAUb = "HZSh7fecl3mBWAh"
		const stringrJZVdMb = "1OTU4v3MgU9KzUHxAck4MgqwQ8tfYoijHkxiFdbPhER4gorHvdYDM9ZASf1BgxXp"
		const boolDz7ghfK = await Token50X100iISNrq4.setVesting.call(addresswgCvOi1, uintiAS1QFI, uint4WbxNu, {from: accounts[1]});
		const boolrLINvpb = await Token50X100iISNrq4.setMaxLockPeriod.call(uintYb6GFxB, {from: accounts[1]});
		await Token50X100iISNrq4.setTokenContract.call(addressTYW4DZl, {from: accounts[1]});
		const boolQM1ntf = await Token50X100iISNrq4.transfer.call(addressdHSS9qF, uintmcQKXye, {from: accounts[0]});
		const boolDdCD2rf = await Token50X100iISNrq4._transfer.call(addressFPMy3Kp, addressiJn0oA8, uintyjL9Vxl, uinthAjhFm8, {from: accounts[0]});
		const boolL55wTmZ = await Token50X100iISNrq4.setSymbolNameDecimals.call(stringrJZVdMb, stringWW7UAUb, uintJcDyzt4, {from: accounts[5]});

		assert.equal(boolDz7ghfK, true)
		assert.equal(boolrLINvpb, false)
		await expect(Token50X100iISNrq4.setTokenContract.call(addressTYW4DZl, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100aDUDk1D = await Token50X100.new({from: accounts[0]});
		const booloNeFG43 = false
		const addressHRldsr9 = accounts[4]
		const addresso7MsLab = accounts[2]
		await Token50X100aDUDk1D.setWhiteList.call(addressHRldsr9, booloNeFG43, {from: accounts[0]});
		await Token50X100aDUDk1D.release.call({from: accounts[2]});
		const addressibt7la = await Token50X100aDUDk1D.setOriginalContract.call(addresso7MsLab, {from: accounts[1]});

		await expect(Token50X100aDUDk1D.setWhiteList.call(addressHRldsr9, booloNeFG43, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100aDUDk1D = await Token50X100.new({from: accounts[0]});
		const uinthqmgMQZ = BigInt("818")
		const addressPPu7xpo = "0x0000000000000000000000000000000000000000"
		const uintDZfiivC = BigInt("1131")
		const addressmPemnuz = "0x0000000000000000000000000000000000000001"
		const addressVngS3j7 = accounts[2]
		const boolTMEvk98 = false
		const addressumN7Cv2 = accounts[2]
		const uintNTk4tDN = BigInt("708")
		const addressfd5rFuR = accounts[4]
		const boolm717I0 = await Token50X100aDUDk1D.transfer.call(addressPPu7xpo, uinthqmgMQZ, {from: accounts[3]});
		const boolqnY2czX = await Token50X100aDUDk1D.transferFrom.call(addressVngS3j7, addressmPemnuz, uintDZfiivC, {from: accounts[4]});
		await Token50X100aDUDk1D.setWhiteListReceivers.call(addressumN7Cv2, boolTMEvk98, {from: accounts[3]});
		const boolDoapTcS = await Token50X100aDUDk1D.transfer.call(addressfd5rFuR, uintNTk4tDN, {from: "0x0000000000000000000000000000000000000001"});

		await expect(Token50X100aDUDk1D.transfer.call(addressPPu7xpo, uinthqmgMQZ, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100aDUDk1D = await Token50X100.new({from: accounts[0]});
		const uintRvmQ33x = BigInt("341")
		const addressftNmS14 = accounts[3]
		const addressgn18IY6 = accounts[3]
		const bool5aX7Q1 = await Token50X100aDUDk1D.decreaseApproval.call(addressftNmS14, uintRvmQ33x, {from: accounts[0]});
		const addressCCx6t8 = await Token50X100aDUDk1D.transferOwnership.call(addressgn18IY6, {from: accounts[0]});

		assert.equal(bool5aX7Q1, true)
	});

	it('test for Token50X100', async () => {
		const Token50X100PEMABL = await Token50X100.new({from: accounts[0]});
		const uintohkJVgh = BigInt("129")
		const stringuXE7CXF = "j86EmPWhdfuXlSEiCqNaEIoVQAoVhNqb6Wx7ju4iPe"
		const stringcGiowjF = "iBc"
		const uint8Xg6xk = BigInt("425")
		const uintrZfSPu5 = BigInt("847")
		const uintgwtfOXA = BigInt("1454")
		const addressDqxzDNt = accounts[5]
		const addresswuSpPy = accounts[1]
		const uintLS0TcHk = BigInt("175")
		const addressmBG6YIs = accounts[5]
		const addressJghDnwu = accounts[2]
		await Token50X100PEMABL.setSymbolNameDecimals.call(stringcGiowjF, stringuXE7CXF, uintohkJVgh, {from: accounts[0]});
		const boolp72acmt = await Token50X100PEMABL.safeLock.call(uintrZfSPu5, uint8Xg6xk, {from: accounts[3]});
		const boolIB9mer = await Token50X100PEMABL.issueTokens.call(addresswuSpPy, addressDqxzDNt, uintgwtfOXA, {from: accounts[1]});
		const boolSTsaPe = await Token50X100PEMABL.transfer.call(addressmBG6YIs, uintLS0TcHk, {from: accounts[1]});
		const uint256l16Ua2a = await Token50X100PEMABL.balanceOf.call(addressJghDnwu, {from: accounts[0]});

		await expect(Token50X100PEMABL.setSymbolNameDecimals.call(stringcGiowjF, stringuXE7CXF, uintohkJVgh, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})