const CryptoSecureBankToken = artifacts.require("CryptoSecureBankToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('CryptoSecureBankToken', (accounts) => {
	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenFEj7gt = await CryptoSecureBankToken.new({from: accounts[1]});
		const addressm4Nx9q9 = accounts[4]
		const addressrXWHjaW = accounts[3]
		const addressQUTGeI5 = accounts[0]
//		const addresseBqngHf = await CryptoSecureBankTokenFEj7gt.addBlackList.call(addressm4Nx9q9, {from: accounts[4]});
//		await CryptoSecureBankTokenFEj7gt.unpause.call({from: "0x0000000000000000000000000000000000000001"});
//		await CryptoSecureBankTokenFEj7gt.whenNotPaused.call({from: accounts[3]});
//		const addressiVIRIUA = await CryptoSecureBankTokenFEj7gt.addBlackList.call(addressrXWHjaW, {from: accounts[2]});
//		const addresso6TA3LQ = await CryptoSecureBankTokenFEj7gt.setOwner2.call(addressQUTGeI5, {from: "0x0000000000000000000000000000000000000001"});

		await expect(CryptoSecureBankTokenFEj7gt.addBlackList.call(addressm4Nx9q9, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenyrZT9qz = await CryptoSecureBankToken.new({from: accounts[1]});
		const uintGiWO7AS = BigInt("1014")
		const uintsi6dCQc = BigInt("1168")
		const addressj5aAbaS = "0x0000000000000000000000000000000000000001"
		const addressiUn8hVd = "0x0000000000000000000000000000000000000001"
//		const uintc3VkgSN = await CryptoSecureBankTokenyrZT9qz.setParams.call(uintsi6dCQc, uintGiWO7AS, {from: accounts[1]});
//		await CryptoSecureBankTokenyrZT9qz.pause.call({from: accounts[1]});
//		const addressuLDj1eR = await CryptoSecureBankTokenyrZT9qz.transferOwnership.call(addressj5aAbaS, {from: accounts[2]});
//		const addressiwiPse = await CryptoSecureBankTokenyrZT9qz.removeBlackList.call(addressiUn8hVd, {from: "0x0000000000000000000000000000000000000001"});
//		await CryptoSecureBankTokenyrZT9qz.pause.call({from: accounts[4]});

		await expect(CryptoSecureBankTokenyrZT9qz.setParams.call(uintsi6dCQc, uintGiWO7AS, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenINB9xTa = await CryptoSecureBankToken.new({from: accounts[3]});
		const uintPJOyDnx = BigInt("340")
		const addressEouS9t6 = accounts[4]
		const addressjI7HQ3Z = accounts[4]
		const addresswoJU4QW = accounts[3]
		const addressk3iIi4h = accounts[2]
		const uint5YXudc = BigInt("1089")
		const addressmZjjqEn = accounts[0]
		const addresshzpU0pZ = accounts[3]
//		const boolhl5Z36b = await CryptoSecureBankTokenINB9xTa.transferFrom.call(addressjI7HQ3Z, addressEouS9t6, uintPJOyDnx, {from: accounts[2]});
//		const boold3X0idA = await CryptoSecureBankTokenINB9xTa.getBlackListStatus.call(addresswoJU4QW, {from: "0x0000000000000000000000000000000000000001"});
//		const uintSabgfLk = await CryptoSecureBankTokenINB9xTa.balanceOf.call(addressk3iIi4h, {from: accounts[3]});
//		const booltwRwVU6 = await CryptoSecureBankTokenINB9xTa.transferFrom.call(addresshzpU0pZ, addressmZjjqEn, uint5YXudc, {from: accounts[2]});

		await expect(CryptoSecureBankTokenINB9xTa.transferFrom.call(addressjI7HQ3Z, addressEouS9t6, uintPJOyDnx, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenL7ak9pf = await CryptoSecureBankToken.new({from: accounts[2]});
		const addressbzjBr1A = accounts[2]
		const addressIfVEJmC = "0x0000000000000000000000000000000000000001"
		const uintGQpNcGB = BigInt("1434")
		const addressofTcDb9 = accounts[3]
		const addressfgbUF0Z = accounts[0]
		const addressqgozS3 = accounts[2]
		const uintg7twK0j = await CryptoSecureBankTokenL7ak9pf.allowance.call(addressIfVEJmC, addressbzjBr1A, {from: accounts[0]});
		const boolpQHVTB9 = await CryptoSecureBankTokenL7ak9pf.approve.call(addressofTcDb9, uintGQpNcGB, {from: accounts[5]});
//		await CryptoSecureBankTokenL7ak9pf.unpause.call({from: accounts[0]});
//		const addressQKJHjoZ = await CryptoSecureBankTokenL7ak9pf.destroyBlackFunds.call(addressfgbUF0Z, {from: accounts[0]});
//		const addressHGQ6VnL = await CryptoSecureBankTokenL7ak9pf.setOwner2.call(addressqgozS3, {from: accounts[3]});

		assert.equal(boolpQHVTB9, true)
		assert.equal(uintg7twK0j, BigInt("0"))
		await expect(CryptoSecureBankTokenL7ak9pf.unpause.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenswzBCfl = await CryptoSecureBankToken.new({from: accounts[0]});
		const addressj2rqqVB = accounts[5]
		const uintcclExCQ = BigInt("1086")
		const addressymRk24S = accounts[3]
		const addressGsQued = accounts[3]
//		await CryptoSecureBankTokenswzBCfl.whenNotPaused.call({from: accounts[1]});
//		await CryptoSecureBankTokenswzBCfl.whenPaused.call({from: accounts[3]});
//		const uintQ3C2r7 = await CryptoSecureBankTokenswzBCfl.balanceOf.call(addressj2rqqVB, {from: accounts[0]});
//		const bool4oo2rQ = await CryptoSecureBankTokenswzBCfl.approve.call(addressymRk24S, uintcclExCQ, {from: accounts[4]});
//		const boolMgnIYia = await CryptoSecureBankTokenswzBCfl.getBlackListStatus.call(addressGsQued, {from: accounts[1]});
//		await CryptoSecureBankTokenswzBCfl.whenPaused.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(CryptoSecureBankTokenswzBCfl.whenNotPaused.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokend0D8EH = await CryptoSecureBankToken.new({from: accounts[2]});
		const uintB3rAYa9 = BigInt("647")
		const addressOgD7R5v = accounts[2]
		const addressr2hiMMF = accounts[3]
		const addressdSVnlNZ = accounts[4]
		const uintEmA9Zsm = BigInt("222")
		const addressQmfnnu = accounts[2]
		const addressyM9kTRO = accounts[5]
//		const boolpbMFAYI = await CryptoSecureBankTokend0D8EH.transfer.call(addressOgD7R5v, uintB3rAYa9, {from: accounts[1]});
//		const uintL2LgyoT = await CryptoSecureBankTokend0D8EH.allowance.call(addressdSVnlNZ, addressr2hiMMF, {from: accounts[1]});
//		const boolC3twGsj = await CryptoSecureBankTokend0D8EH.transferFrom.call(addressyM9kTRO, addressQmfnnu, uintEmA9Zsm, {from: accounts[3]});

		await expect(CryptoSecureBankTokend0D8EH.transfer.call(addressOgD7R5v, uintB3rAYa9, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenA6estA4 = await CryptoSecureBankToken.new({from: accounts[4]});
		const addressINQNi7Y = accounts[3]
		const addresshealMsG = accounts[0]
		const uintQJopDF = BigInt("1449")
		const addressz3c2i8Z = "0x0000000000000000000000000000000000000001"
		const addressbC15MQ7 = accounts[1]
//		const addressXYZyJPh = await CryptoSecureBankTokenA6estA4.transferOwnership.call(addressINQNi7Y, {from: accounts[3]});
//		const addressnWwLO4 = await CryptoSecureBankTokenA6estA4.setOwner2.call(addresshealMsG, {from: accounts[4]});
//		const boolVXQ1BvW = await CryptoSecureBankTokenA6estA4.transferFrom.call(addressbC15MQ7, addressz3c2i8Z, uintQJopDF, {from: "0x0000000000000000000000000000000000000001"});

		await expect(CryptoSecureBankTokenA6estA4.transferOwnership.call(addressINQNi7Y, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokentTzfQq2 = await CryptoSecureBankToken.new({from: accounts[1]});
		const uintcXalrBW = BigInt("214")
		const addressQSA7IeP = accounts[5]
		const addressGY7DKd6 = accounts[0]
		const uintlvNjmeV = BigInt("81")
		const uintJWpMRDR = BigInt("345")
		const addresssIq85Ky = accounts[2]
		const boolsMEZZVO = await CryptoSecureBankTokentTzfQq2.transfer.call(addressQSA7IeP, uintcXalrBW, {from: accounts[1]});
		const boolvMnJ2q = await CryptoSecureBankTokentTzfQq2.getBlackListStatus.call(addressGY7DKd6, {from: accounts[0]});
//		const uintI1Fd45U = await CryptoSecureBankTokentTzfQq2.setParams.call(uintJWpMRDR, uintlvNjmeV, {from: accounts[2]});
//		const addressBNwJcUw = await CryptoSecureBankTokentTzfQq2.setOwner2.call(addresssIq85Ky, {from: accounts[0]});

		assert.equal(boolsMEZZVO, true)
		assert.equal(boolvMnJ2q, false)
		await expect(CryptoSecureBankTokentTzfQq2.setParams.call(uintJWpMRDR, uintlvNjmeV, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokentTzfQq2 = await CryptoSecureBankToken.new({from: accounts[1]});
		const uintIwd7ZE = BigInt("214")
		const addressmjcpAd = accounts[5]
		const addressSs83YoW = accounts[0]
		const uintYzag0Xy = BigInt("81")
		const uintwPGn4Ev = BigInt("1522")
		const addresscbzW3P1 = accounts[2]
		const boolsMEZZVO = await CryptoSecureBankTokentTzfQq2.transfer.call(addressmjcpAd, uintIwd7ZE, {from: accounts[1]});
		const addressJrQmBJ2 = await CryptoSecureBankTokentTzfQq2.getOwner.call({from: accounts[0]});
		const boolvMnJ2q = await CryptoSecureBankTokentTzfQq2.getBlackListStatus.call(addressSs83YoW, {from: accounts[0]});
		const addressvqsNMDd = await CryptoSecureBankTokentTzfQq2.getOwner.call({from: accounts[0]});
//		const uintI1Fd45U = await CryptoSecureBankTokentTzfQq2.setParams.call(uintwPGn4Ev, uintYzag0Xy, {from: accounts[2]});
//		const addressBNwJcUw = await CryptoSecureBankTokentTzfQq2.setOwner2.call(addresscbzW3P1, {from: accounts[0]});

		assert.equal(addressJrQmBJ2, 0x8cAC1f3404146b214a79E41DAEEF6DAF6122622C)
		assert.equal(addressvqsNMDd, 0x8cAC1f3404146b214a79E41DAEEF6DAF6122622C)
		assert.equal(boolsMEZZVO, true)
		assert.equal(boolvMnJ2q, false)
		await expect(CryptoSecureBankTokentTzfQq2.setParams.call(uintwPGn4Ev, uintYzag0Xy, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenkpPkgTj = await CryptoSecureBankToken.new({from: accounts[4]});
		const addressCucpfCW = accounts[5]
		const uintQfoJCDc = BigInt("919")
		const addressLmYMr01 = accounts[2]
		const addresss5cs50B = accounts[5]
		const addresscnf0ASQ = "0x0000000000000000000000000000000000000001"
		const uintrejboBQ = await CryptoSecureBankTokenkpPkgTj.balanceOf.call(addressCucpfCW, {from: accounts[0]});
		const boolnXtZYJ = await CryptoSecureBankTokenkpPkgTj.approve.call(addressLmYMr01, uintQfoJCDc, {from: "0x0000000000000000000000000000000000000001"});
		const boolHCVHcS = await CryptoSecureBankTokenkpPkgTj.deprecate.call(addresss5cs50B, {from: accounts[4]});
//		const addressUosnipy = await CryptoSecureBankTokenkpPkgTj.setOwner2.call(addresscnf0ASQ, {from: accounts[5]});
//		await CryptoSecureBankTokenkpPkgTj.pause.call({from: accounts[2]});

		assert.equal(boolHCVHcS, true)
		assert.equal(boolnXtZYJ, true)
		assert.equal(uintrejboBQ, BigInt("0"))
		await expect(CryptoSecureBankTokenkpPkgTj.setOwner2.call(addresscnf0ASQ, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenL7ak9pf = await CryptoSecureBankToken.new({from: accounts[2]});
		const uintSYjv1YA = BigInt("1753")
		const addressnUTYBh5 = accounts[2]
		const addressGXzOVNw = "0x0000000000000000000000000000000000000001"
		const uintenRMHl3 = BigInt("1434")
		const addressEP1z1pg = accounts[3]
		const addressgpZIir = accounts[2]
		const uintLoMqejz = await CryptoSecureBankTokenL7ak9pf.totalSupply.call({from: accounts[3]});
//		const uintXORCAnJ = await CryptoSecureBankTokenL7ak9pf.onlyPayloadSize.call(uintSYjv1YA, {from: accounts[0]});
//		const uintg7twK0j = await CryptoSecureBankTokenL7ak9pf.allowance.call(addressGXzOVNw, addressnUTYBh5, {from: accounts[0]});
//		const boolpQHVTB9 = await CryptoSecureBankTokenL7ak9pf.approve.call(addressEP1z1pg, uintenRMHl3, {from: accounts[5]});
//		const addressHGQ6VnL = await CryptoSecureBankTokenL7ak9pf.setOwner2.call(addressgpZIir, {from: accounts[3]});

		assert.equal(uintLoMqejz, BigInt("100000000000000000000000000"))
		await expect(CryptoSecureBankTokenL7ak9pf.onlyPayloadSize.call(uintSYjv1YA, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenL7ak9pf = await CryptoSecureBankToken.new({from: accounts[2]});
		const addressFLOgCox = accounts[2]
		const addressRYUnQ3j = "0x0000000000000000000000000000000000000001"
		const uintkuhTAe = BigInt("1434")
		const addressKwoYz80 = accounts[3]
		const addressytMZliD = accounts[0]
		const addressa9n2cVY = accounts[2]
		const uintg7twK0j = await CryptoSecureBankTokenL7ak9pf.allowance.call(addressRYUnQ3j, addressFLOgCox, {from: accounts[0]});
		const boolpQHVTB9 = await CryptoSecureBankTokenL7ak9pf.approve.call(addressKwoYz80, uintkuhTAe, {from: accounts[5]});
		const addressla4HST1 = await CryptoSecureBankTokenL7ak9pf.setOwner2.call(addressytMZliD, {from: accounts[2]});
//		const addressHGQ6VnL = await CryptoSecureBankTokenL7ak9pf.setOwner2.call(addressa9n2cVY, {from: accounts[3]});

		assert.equal(boolpQHVTB9, true)
		assert.equal(uintg7twK0j, BigInt("0"))
		await expect(CryptoSecureBankTokenL7ak9pf.setOwner2.call(addressa9n2cVY, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenU2v9UOk = await CryptoSecureBankToken.new({from: accounts[2]});
		const addressW61FBVB = accounts[4]
		const address7WYzEL = accounts[2]
		const uints8jvfvb = BigInt("445")
		const addressnUtWlUl = accounts[3]
//		const addressbz2Lybe = await CryptoSecureBankTokenU2v9UOk.destroyBlackFunds.call(addressW61FBVB, {from: accounts[2]});
//		const addressiJrGUPP = await CryptoSecureBankTokenU2v9UOk.transferOwnership.call(address7WYzEL, {from: "0x0000000000000000000000000000000000000001"});
//		const boolBQIrEP8 = await CryptoSecureBankTokenU2v9UOk.redeem.call(uints8jvfvb, {from: accounts[5]});
//		const addresstVwHLyr = await CryptoSecureBankTokenU2v9UOk.addBlackList.call(addressnUtWlUl, {from: accounts[2]});

		await expect(CryptoSecureBankTokenU2v9UOk.destroyBlackFunds.call(addressW61FBVB, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenINB9xTa = await CryptoSecureBankToken.new({from: accounts[3]});
		const addressx3qObIA = "0x0000000000000000000000000000000000000001"
		const addressEdmGqJ2 = accounts[4]
		const addressM7V6Uqo = accounts[2]
		const uintvN3Yvs = BigInt("1089")
		const addressGngCVDm = accounts[0]
		const addresssRBuvq = accounts[4]
		const addressj0RUm0d = await CryptoSecureBankTokenINB9xTa.transferOwnership.call(addressx3qObIA, {from: accounts[3]});
		const uintjkYjzEW = await CryptoSecureBankTokenINB9xTa.allowance.call(addressM7V6Uqo, addressEdmGqJ2, {from: accounts[0]});
//		await CryptoSecureBankTokenINB9xTa.onlyOwner.call({from: accounts[4]});
//		const booltwRwVU6 = await CryptoSecureBankTokenINB9xTa.transferFrom.call(addresssRBuvq, addressGngCVDm, uintvN3Yvs, {from: accounts[2]});

		assert.equal(uintjkYjzEW, BigInt("0"))
		await expect(CryptoSecureBankTokenINB9xTa.onlyOwner.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenL7ak9pf = await CryptoSecureBankToken.new({from: accounts[2]});
		const addressI6umN2O = "0x0000000000000000000000000000000000000001"
		const addressF0fEuNU = accounts[2]
		const addressVE9Ltin = "0x0000000000000000000000000000000000000001"
		const uintFRlFGfA = BigInt("1469")
		const address4hwsTH = accounts[3]
		const addressA5NTieZ = await CryptoSecureBankTokenL7ak9pf.removeBlackList.call(addressI6umN2O, {from: accounts[2]});
		const uintg7twK0j = await CryptoSecureBankTokenL7ak9pf.allowance.call(addressVE9Ltin, addressF0fEuNU, {from: accounts[0]});
		const boolpQHVTB9 = await CryptoSecureBankTokenL7ak9pf.approve.call(address4hwsTH, uintFRlFGfA, {from: accounts[5]});

		assert.equal(boolpQHVTB9, true)
		assert.equal(uintg7twK0j, BigInt("0"))
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenUUqgKQ1 = await CryptoSecureBankToken.new({from: accounts[3]});
		const addresst0Bmr0O = accounts[4]
		const uint8h9H6o = BigInt("386")
		const addressFk1SAQE = accounts[1]
		const uinthdRmvr = BigInt("1478")
		const addressI5fjbA9 = accounts[4]
		const address11qACb = accounts[2]
//		await CryptoSecureBankTokenUUqgKQ1.pause.call({from: accounts[3]});
//		const addresspOEssAQ = await CryptoSecureBankTokenUUqgKQ1.removeBlackList.call(addresst0Bmr0O, {from: accounts[0]});
//		const boolVvCgu3 = await CryptoSecureBankTokenUUqgKQ1.transfer.call(addressFk1SAQE, uint8h9H6o, {from: accounts[2]});
//		const boolBIOJuQu = await CryptoSecureBankTokenUUqgKQ1.transferFrom.call(address11qACb, addressI5fjbA9, uinthdRmvr, {from: accounts[2]});

		await expect(CryptoSecureBankTokenUUqgKQ1.pause.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenu2bRQcv = await CryptoSecureBankToken.new({from: "0x0000000000000000000000000000000000000001"});
		const uinth6ujOL9 = BigInt("15")
		const addressU7gJVv6 = accounts[1]
		const addressOgDTGKK = accounts[3]
		const uintl1zr0W9 = BigInt("1763")
		const addressvyzW12W = accounts[5]
		const uintv8NSwR0 = BigInt("290")
		const addressODMV2gk = accounts[4]
		await CryptoSecureBankTokenu2bRQcv.whenNotPaused.call({from: accounts[4]});
		const boolmnZCC69 = await CryptoSecureBankTokenu2bRQcv.transferFrom.call(addressOgDTGKK, addressU7gJVv6, uinth6ujOL9, {from: accounts[4]});
		const boolwfPBglp = await CryptoSecureBankTokenu2bRQcv.transfer.call(addressvyzW12W, uintl1zr0W9, {from: accounts[3]});
		const boolR7tBTtu = await CryptoSecureBankTokenu2bRQcv.transfer.call(addressODMV2gk, uintv8NSwR0, {from: accounts[4]});
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokendYkuhQr = await CryptoSecureBankToken.new({from: accounts[1]});
		const addressRoBi7JT = accounts[1]
		const addressefftiX5 = accounts[1]
		const uintceQ8vCj = BigInt("2037")
		const addressW4k4iwe = accounts[2]
		const addressWitlGby = accounts[0]
		const addressBKPpqpA = await CryptoSecureBankTokendYkuhQr.addBlackList.call(addressRoBi7JT, {from: accounts[1]});
//		const addressTl8CTqs = await CryptoSecureBankTokendYkuhQr.transferOwnership.call(addressefftiX5, {from: accounts[2]});
//		const boolo7VIAYr = await CryptoSecureBankTokendYkuhQr.transferFrom.call(addressWitlGby, addressW4k4iwe, uintceQ8vCj, {from: accounts[3]});

		await expect(CryptoSecureBankTokendYkuhQr.transferOwnership.call(addressefftiX5, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokentTzfQq2 = await CryptoSecureBankToken.new({from: accounts[1]});
		const uintaC9QpOc = BigInt("93")
		const addressu7P0x1n = accounts[10]
//		const boolsMEZZVO = await CryptoSecureBankTokentTzfQq2.transfer.call(addressu7P0x1n, uintaC9QpOc, {from: accounts[1]});

		await expect(CryptoSecureBankTokentTzfQq2.transfer.call(addressu7P0x1n, uintaC9QpOc, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})