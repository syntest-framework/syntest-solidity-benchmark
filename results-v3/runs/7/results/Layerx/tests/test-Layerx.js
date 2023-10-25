const Layerx = artifacts.require("Layerx");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Layerx', (accounts) => {
	it('test for Layerx', async () => {
		const addressuYMmONj = "0x0000000000000000000000000000000000000001"
		const LayerxRJmeld9 = await Layerx.new(addressuYMmONj, {from: accounts[4]});
		const boolx2eU663 = false
		const uintfn3y2e6 = BigInt("13")
		const boolH8PQ364 = await LayerxRJmeld9.setIsPaused.call(boolx2eU663, {from: accounts[1]});
		const uint256BmFMkq = await LayerxRJmeld9.burn.call(uintfn3y2e6, {from: accounts[4]});

		await expect(LayerxRJmeld9.setIsPaused.call(boolx2eU663, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressQlnPXE4 = accounts[4]
		const LayerxXmk81Og = await Layerx.new(addressQlnPXE4, {from: accounts[2]});
		const addressM7Go86k = accounts[4]
		const addressBA4Umtw = accounts[4]
		const addressTyRO2ql = accounts[0]
		const addressojgfAj4 = accounts[0]
		const addressjPPBoOd = accounts[0]
		const address3Ud89m = accounts[1]
		const addressbNKXoIi = accounts[3]
		const uintEHMcxQA = await LayerxXmk81Og.allowance.call(addressBA4Umtw, addressM7Go86k, {from: accounts[1]});
		const addresso6Y61l9 = await LayerxXmk81Og.setNewStakeCreator.call(addressTyRO2ql, {from: accounts[4]});
		const addressksR8FA = await LayerxXmk81Og.transferOwnership.call(addressojgfAj4, {from: accounts[2]});
		const addressMCQQyRn = await LayerxXmk81Og.setNewStakeCreator.call(addressjPPBoOd, {from: accounts[2]});
		const uinty50KspD = await LayerxXmk81Og.allowance.call(addressbNKXoIi, address3Ud89m, {from: accounts[1]});

		assert.equal(uintEHMcxQA, BigInt("0"))
		await expect(LayerxXmk81Og.transferOwnership.call(addressojgfAj4, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressSvISFLY = accounts[0]
		const LayerxYkViV3 = await Layerx.new(addressSvISFLY, {from: accounts[4]});
		const uintTWBVlsr = BigInt("1023")
		const addressfqznx3y = accounts[2]
		const addresshnms39W = accounts[4]
		const boolj5jRzNo = await LayerxYkViV3.transfer.call(addressfqznx3y, uintTWBVlsr, {from: accounts[3]});
		const addressOQdYogp = await LayerxYkViV3.transferOwnership.call(addresshnms39W, {from: accounts[3]});

		await expect(LayerxYkViV3.transfer.call(addressfqznx3y, uintTWBVlsr, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressgvS18S = accounts[1]
		const Layerxjrr52Mq = await Layerx.new(addressgvS18S, {from: accounts[3]});
		const addressr9WEfIg = accounts[3]
		const boolAwqEQuI = false
		const uintCpqMcG1 = await Layerxjrr52Mq.balanceOf.call(addressr9WEfIg, {from: accounts[1]});
		const boolKShtVi = await Layerxjrr52Mq.setIsPaused.call(boolAwqEQuI, {from: accounts[4]});
		await Layerxjrr52Mq.paused.call({from: accounts[0]});

		assert.equal(uintCpqMcG1, BigInt("0"))
		await expect(Layerxjrr52Mq.setIsPaused.call(boolAwqEQuI, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressQAazJMJ = accounts[3]
		const Layerxm4dX7Lp = await Layerx.new(addressQAazJMJ, {from: accounts[5]});
		const uintGc5Ea4H = BigInt("1435")
		const addressaM9SMow = accounts[4]
		const address7ds8Gh = accounts[5]
		const boolXz9E3Mv = await Layerxm4dX7Lp.transferFrom.call(address7ds8Gh, addressaM9SMow, uintGc5Ea4H, {from: accounts[0]});
		const uintMZQP8ot = await Layerxm4dX7Lp.totalSupply.call({from: accounts[4]});

		await expect(Layerxm4dX7Lp.transferFrom.call(address7ds8Gh, addressaM9SMow, uintGc5Ea4H, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressWLiLi9J = accounts[3]
		const Layerxj7g1F6H = await Layerx.new(addressWLiLi9J, {from: accounts[2]});
		const uintGbFAhhc = BigInt("1626")
		const uintR0l4fSY = BigInt("1548")
		const addressCmhfa4d = accounts[1]
		const addressX3hemjw = accounts[5]
		await Layerxj7g1F6H.f.call({from: accounts[0]});
		const uintOOi3uer = await Layerxj7g1F6H.totalSupply.call({from: accounts[4]});
		const uintXBui5tY = await Layerxj7g1F6H.lock.call(uintGbFAhhc, {from: accounts[4]});
		const boolcyEuqe9 = await Layerxj7g1F6H.transferFrom.call(addressX3hemjw, addressCmhfa4d, uintR0l4fSY, {from: accounts[0]});
		await Layerxj7g1F6H.unlock.call({from: accounts[5]});

		await expect(Layerxj7g1F6H.f.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressantsqwi = accounts[1]
		const Layerx5uC39O = await Layerx.new(addressantsqwi, {from: "0x0000000000000000000000000000000000000001"});
		const uinthZhAO4y = BigInt("355")
		const uintWxrh9d = await Layerx5uC39O.lock.call(uinthZhAO4y, {from: accounts[3]});
		await Layerx5uC39O.onlyOwner.call({from: accounts[2]});
		const uintLnOUTol = await Layerx5uC39O.getStakesNum.call({from: accounts[2]});
	});

	it('test for Layerx', async () => {
		const addresslYX1cyd = accounts[5]
		const LayerxdzUsfyj = await Layerx.new(addresslYX1cyd, {from: accounts[1]});
		const uinth5YavZe = BigInt("583")
		const addressPs4060q = accounts[4]
		const addresslmZrZwf = accounts[0]
		const uintoIRVuDn = BigInt("1972")
		const uintpCHcbHX = BigInt("437")
		await LayerxdzUsfyj.unlock.call({from: accounts[3]});
		const boolIOWv8pb = await LayerxdzUsfyj.transferFrom.call(addresslmZrZwf, addressPs4060q, uinth5YavZe, {from: accounts[2]});
		const uintH7B88dG = await LayerxdzUsfyj.exist.call(uintoIRVuDn, {from: accounts[3]});
		const uintVEQNeRt = await LayerxdzUsfyj.withdraw.call(uintpCHcbHX, {from: accounts[4]});

		await expect(LayerxdzUsfyj.unlock.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressKhvxoxG = accounts[1]
		const Layerxjrr52Mq = await Layerx.new(addressKhvxoxG, {from: accounts[3]});
		const addressUqEovze = accounts[5]
		const uintCpqMcG1 = await Layerxjrr52Mq.balanceOf.call(addressUqEovze, {from: accounts[1]});
		await Layerxjrr52Mq.paused.call({from: accounts[0]});

		assert.equal(uintCpqMcG1, BigInt("0"))
		await expect(Layerxjrr52Mq.paused.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressXUH7P2L = accounts[3]
		const Layerxj7g1F6H = await Layerx.new(addressXUH7P2L, {from: accounts[2]});
		const uintVK2eeOT = BigInt("1489")
		const addressa8dE7NY = "0x0000000000000000000000000000000000000001"
		const uintnafy6If = BigInt("347")
		const uintV1hhrx9 = BigInt("1548")
		const addressqKK2wrM = accounts[1]
		const addressYgdbQwf = accounts[5]
		await Layerxj7g1F6H.f.call({from: accounts[0]});
		const booljK13elA = await Layerxj7g1F6H.approve.call(addressa8dE7NY, uintVK2eeOT, {from: accounts[0]});
		const uintXBui5tY = await Layerxj7g1F6H.lock.call(uintnafy6If, {from: accounts[4]});
		const boolcyEuqe9 = await Layerxj7g1F6H.transferFrom.call(addressYgdbQwf, addressqKK2wrM, uintV1hhrx9, {from: accounts[0]});
		await Layerxj7g1F6H.unlock.call({from: accounts[5]});

		await expect(Layerxj7g1F6H.f.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressd24GhD2 = accounts[5]
		const LayerxZiA0XkP = await Layerx.new(addressd24GhD2, {from: accounts[0]});
		const uintktdDty = BigInt("1269")
		const addresschAdgse = "0x0000000000000000000000000000000000000001"
		const addressmVP4yv = accounts[2]
		const boolCnjfgjZ = true
		await LayerxZiA0XkP.addStakePayment.call({from: accounts[2]});
		const uinty5avmqz = await LayerxZiA0XkP.lock.call(uintktdDty, {from: accounts[3]});
		const addresseSav6Bo = await LayerxZiA0XkP.transferOwnership.call(addresschAdgse, {from: accounts[4]});
		const addresstWC3wX1 = await LayerxZiA0XkP.transferOwnership.call(addressmVP4yv, {from: accounts[0]});
		const boolQi7oGSx = await LayerxZiA0XkP.setIsPaused.call(boolCnjfgjZ, {from: accounts[4]});

		await expect(LayerxZiA0XkP.addStakePayment.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const address25Ff8x = accounts[2]
		const LayerxHkuo2hl = await Layerx.new(address25Ff8x, {from: accounts[3]});
		const uintpepgLX0 = BigInt("1980")
		const uinttE1Ywch = BigInt("293")
		const uintr74h5n = BigInt("869")
		const uintKLdaZXN = BigInt("1335")
		const addressrqwTb5F = accounts[5]
		const addressLxvMiBM = accounts[0]
		const addressjUDFtmc = accounts[4]
		const uint256y3LJ6Jx = await LayerxHkuo2hl.burn.call(uintpepgLX0, {from: accounts[2]});
		const uintZrSHLhl = await LayerxHkuo2hl.lock.call(uinttE1Ywch, {from: accounts[4]});
		const uintw8BmcTd = await LayerxHkuo2hl.lock.call(uintr74h5n, {from: accounts[2]});
		const boolTKGteB = await LayerxHkuo2hl.transferFrom.call(addressLxvMiBM, addressrqwTb5F, uintKLdaZXN, {from: accounts[1]});
		const addressMF5nHM7 = await LayerxHkuo2hl.setNewStakeCreator.call(addressjUDFtmc, {from: accounts[2]});

		await expect(LayerxHkuo2hl.lock.call(uinttE1Ywch, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressF519b8C = accounts[5]
		const LayerxdzUsfyj = await Layerx.new(addressF519b8C, {from: accounts[1]});
		const uintgsLXO6s = BigInt("1735")
		const addressfFDu4VY = accounts[4]
		const addressbCpbbko = accounts[4]
		const uintejaidy3 = BigInt("1972")
		const uintiBbH8Eq = await LayerxdzUsfyj.withdraw.call(uintgsLXO6s, {from: accounts[0]});
		await LayerxdzUsfyj.unlock.call({from: accounts[3]});
		const uintc1lep9d = await LayerxdzUsfyj.allowance.call(addressbCpbbko, addressfFDu4VY, {from: "0x0000000000000000000000000000000000000001"});
		const uintH7B88dG = await LayerxdzUsfyj.exist.call(uintejaidy3, {from: accounts[3]});

		await expect(LayerxdzUsfyj.withdraw.call(uintgsLXO6s, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressiOdXMt6 = accounts[2]
		const LayerxHkuo2hl = await Layerx.new(addressiOdXMt6, {from: accounts[3]});
		const uinteuDrs5n = BigInt("1980")
		const byteXvrNbTY = "0x1b1603110f12031b1a160e15041606111e0f1a0d1a1d020d0c1905050c00"
		const uintcLxwJVD = BigInt("1945")
		const addressU6sXmdw = accounts[3]
		const addressuQbMVfc = accounts[3]
		const uintVGXlEDY = BigInt("869")
		const uintG3VxDK7 = BigInt("1454")
		const addressbFNE5c = accounts[4]
		const uintP2ketyh = BigInt("1335")
		const addressTKmG7RO = accounts[5]
		const addressqyqthi = accounts[5]
		const addressFrATKh = accounts[4]
		const uint256y3LJ6Jx = await LayerxHkuo2hl.burn.call(uinteuDrs5n, {from: accounts[2]});
		const boolOCPihzH = await LayerxHkuo2hl.approveAndCall.call(addressU6sXmdw, uintcLxwJVD, byteXvrNbTY, {from: accounts[0]});
		const uintCBgwC6 = await LayerxHkuo2hl.balanceOf.call(addressuQbMVfc, {from: accounts[0]});
		const uintw8BmcTd = await LayerxHkuo2hl.lock.call(uintVGXlEDY, {from: accounts[2]});
		const boolNlFbfDl = await LayerxHkuo2hl.transfer.call(addressbFNE5c, uintG3VxDK7, {from: "0x0000000000000000000000000000000000000001"});
		const boolTKGteB = await LayerxHkuo2hl.transferFrom.call(addressqyqthi, addressTKmG7RO, uintP2ketyh, {from: accounts[1]});
		await LayerxHkuo2hl.f.call({from: accounts[2]});
		const addressJh8ANS = await LayerxHkuo2hl.transferOwnership.call(addressFrATKh, {from: "0x0000000000000000000000000000000000000001"});

		await expect(LayerxHkuo2hl.approveAndCall.call(addressU6sXmdw, uintcLxwJVD, byteXvrNbTY, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressYWV5wz = accounts[5]
		const LayerxoZ8Ab0v = await Layerx.new(addressYWV5wz, {from: accounts[0]});
		const uintJYETkPw = BigInt("1983")
		const addressC1sHLu5 = accounts[0]
		const addresszw31GXF = accounts[3]
		const addressOCdJTx7 = "0x0000000000000000000000000000000000000001"
		const uint4Nu1mv = BigInt("927")
		const addressVjvt1Us = "0x0000000000000000000000000000000000000001"
		const addressZPh11qd = accounts[1]
		const uintaiOFChN = BigInt("409")
		const uintePOtnZB = await LayerxoZ8Ab0v.getStakesNum.call({from: accounts[5]});
		const boolLTGawcq = await LayerxoZ8Ab0v.approve.call(addressC1sHLu5, uintJYETkPw, {from: accounts[4]});
		const uintP2CPhT = await LayerxoZ8Ab0v.allowance.call(addressOCdJTx7, addresszw31GXF, {from: accounts[3]});
		const boolCHOLld4 = await LayerxoZ8Ab0v.transferFrom.call(addressZPh11qd, addressVjvt1Us, uint4Nu1mv, {from: accounts[0]});
		const uint5lDytO = await LayerxoZ8Ab0v.withdraw.call(uintaiOFChN, {from: accounts[4]});

		assert.equal(boolLTGawcq, true)
		assert.equal(uintP2CPhT, BigInt("0"))
		assert.equal(uintePOtnZB, BigInt("1"))
		await expect(LayerxoZ8Ab0v.transferFrom.call(addressZPh11qd, addressVjvt1Us, uint4Nu1mv, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addresswxOerO2 = accounts[2]
		const LayerxHkuo2hl = await Layerx.new(addresswxOerO2, {from: accounts[3]});
		const uintZwk1phx = BigInt("1980")
		const uintkD9HSRc = BigInt("0")
		const uintOX8ezQF = BigInt("909")
		const addressDS2ZvmW = accounts[4]
		const addressuslIDT = accounts[5]
		const uintY9S9Nbg = BigInt("869")
		const addressKHLIUhH = accounts[3]
		const addresstonXYAH = "0x0000000000000000000000000000000000000001"
		const uintWDHmUe = BigInt("1454")
		const addresss4mHQvA = accounts[2]
		const uintgYOdMHZ = BigInt("1335")
		const addressr6VXAkb = accounts[5]
		const addressWnefqL0 = accounts[5]
		const address78fyG9 = accounts[4]
		const uint256y3LJ6Jx = await LayerxHkuo2hl.burn.call(uintZwk1phx, {from: accounts[2]});
		const uintZrSHLhl = await LayerxHkuo2hl.lock.call(uintkD9HSRc, {from: accounts[4]});
		const boolNMRRwdR = await LayerxHkuo2hl.transferFrom.call(addressuslIDT, addressDS2ZvmW, uintOX8ezQF, {from: accounts[3]});
		const uintw8BmcTd = await LayerxHkuo2hl.lock.call(uintY9S9Nbg, {from: accounts[2]});
		const uintvOsgWi = await LayerxHkuo2hl.allowance.call(addresstonXYAH, addressKHLIUhH, {from: accounts[4]});
		const boolNlFbfDl = await LayerxHkuo2hl.transfer.call(addresss4mHQvA, uintWDHmUe, {from: "0x0000000000000000000000000000000000000001"});
		const boolTKGteB = await LayerxHkuo2hl.transferFrom.call(addressWnefqL0, addressr6VXAkb, uintgYOdMHZ, {from: accounts[1]});
		await LayerxHkuo2hl.f.call({from: accounts[2]});
		const addressMF5nHM7 = await LayerxHkuo2hl.setNewStakeCreator.call(address78fyG9, {from: accounts[2]});

		await expect(LayerxHkuo2hl.lock.call(uintkD9HSRc, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressFwP9wK3 = accounts[1]
		const Layerx27HLhs = await Layerx.new(addressFwP9wK3, {from: accounts[3]});
		const uintuTHgNiJ = BigInt("527")
		await Layerx27HLhs.addStakePayment.call({from: accounts[1]});
		await Layerx27HLhs.unlock.call({from: "0x0000000000000000000000000000000000000001"});
		const uintCj7Txc = await Layerx27HLhs.withdraw.call(uintuTHgNiJ, {from: accounts[2]});

		await expect(Layerx27HLhs.addStakePayment.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressA8Dflzi = accounts[2]
		const LayerxpKIL6s = await Layerx.new(addressA8Dflzi, {from: accounts[2]});
		const addresscl6H1dx = "0x0000000000000000000000000000000000000001"
		const addressVrPjT1D = accounts[1]
		const uintOTXQGO = BigInt("1591")
		const addressTAO7Idb = accounts[4]
		const addressoEtYlxo = accounts[4]
		const uintWFNUcpl = BigInt("593")
		const addressQVpwJj = accounts[2]
		const uintPLJlAU2 = await LayerxpKIL6s.allowance.call(addressVrPjT1D, addresscl6H1dx, {from: accounts[4]});
		const booleN6pGz4 = await LayerxpKIL6s.approve.call(addressTAO7Idb, uintOTXQGO, {from: accounts[0]});
		const addressQt3pGo4 = await LayerxpKIL6s.transferOwnership.call(addressoEtYlxo, {from: accounts[2]});
		const uint256EGxBCvH = await LayerxpKIL6s.burn.call(uintWFNUcpl, {from: accounts[0]});
		const addressHKmWtV2 = await LayerxpKIL6s.transferOwnership.call(addressQVpwJj, {from: accounts[5]});

		assert.equal(booleN6pGz4, true)
		assert.equal(uintPLJlAU2, BigInt("0"))
		await expect(LayerxpKIL6s.burn.call(uintWFNUcpl, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressic9bb3u = accounts[2]
		const LayerxHkuo2hl = await Layerx.new(addressic9bb3u, {from: accounts[3]});
		const boolY45bygw = true
		const uintmJ3rF7N = BigInt("627")
		const uintOuZYRc = BigInt("0")
		const boolANI7h17 = await LayerxHkuo2hl.setIsPaused.call(boolY45bygw, {from: accounts[2]});
		const uintFzfdCT = await LayerxHkuo2hl.exist.call(uintmJ3rF7N, {from: accounts[3]});
		const uintZrSHLhl = await LayerxHkuo2hl.lock.call(uintOuZYRc, {from: accounts[4]});

		await expect(LayerxHkuo2hl.exist.call(uintmJ3rF7N, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})