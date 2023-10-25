const TimeMiner = artifacts.require("TimeMiner");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('TimeMiner', (accounts) => {
	it('test for TimeMiner', async () => {
		const TimeMinerPDLBRK5 = await TimeMiner.new({from: accounts[4]});
		const addressLqoP2Qa = accounts[2]
		const addressjnrO73 = accounts[4]
		const uint256fivd6Kl = await TimeMinerPDLBRK5.balanceOf.call(addressLqoP2Qa, {from: accounts[2]});
		const uint256QFoIQP8 = await TimeMinerPDLBRK5.totalSupply.call({from: accounts[0]});
		const uint256kG1qERQ = await TimeMinerPDLBRK5.balanceOfTokenCirculation.call(addressjnrO73, {from: accounts[3]});

		assert.equal(uint256QFoIQP8, BigInt("24000000"))
		assert.equal(uint256fivd6Kl, BigInt("0"))
		assert.equal(uint256kG1qERQ, BigInt("24000000"))
	});

	it('test for TimeMiner', async () => {
		const TimeMinerkYWiiLj = await TimeMiner.new({from: accounts[0]});
		const uintL12TGLp = BigInt("162")
		const addressuhmERem = accounts[2]
//		const uintXkOZvC = await TimeMinerkYWiiLj.preSale.call(uintL12TGLp, {from: accounts[5]});
//		const uint256XbcvzsX = await TimeMinerkYWiiLj.balanceOf.call(addressuhmERem, {from: accounts[4]});
//		const boolaLZg5iR = await TimeMinerkYWiiLj.infoStableSystem.call({from: accounts[3]});

		await expect(TimeMinerkYWiiLj.preSale.call(uintL12TGLp, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerpnTUvKV = await TimeMiner.new({from: accounts[5]});
		const uintKBg7Wu8 = BigInt("960")
		const addressPrfCiB = accounts[3]
		const addressQyJvi8j = accounts[4]
		const uintxFD9IkK = BigInt("313")
		const addresshcAcyPl = "0x0000000000000000000000000000000000000001"
//		const boolFgfo7ht = await TimeMinerpnTUvKV.transferFrom.call(addressQyJvi8j, addressPrfCiB, uintKBg7Wu8, {from: accounts[5]});
//		const boolRyBQbyW = await TimeMinerpnTUvKV.approve.call(addresshcAcyPl, uintxFD9IkK, {from: accounts[5]});
//		const boolJMpn0X = await TimeMinerpnTUvKV.infoStableSystem.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(TimeMinerpnTUvKV.transferFrom.call(addressQyJvi8j, addressPrfCiB, uintKBg7Wu8, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerb8w8cy = await TimeMiner.new({from: accounts[4]});
		const boolSH30aRB = true
		const addressIzHAVtH = accounts[4]
//		const addressxsUHE31 = await TimeMinerb8w8cy.whitelist.call(addressIzHAVtH, boolSH30aRB, {from: "0x0000000000000000000000000000000000000001"});
//		await TimeMinerb8w8cy.preSaleFinished.call({from: accounts[3]});
//		const boolfWs9VB = await TimeMinerb8w8cy.infoStableSystem.call({from: accounts[0]});

		await expect(TimeMinerb8w8cy.whitelist.call(addressIzHAVtH, boolSH30aRB, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMiner24XnkV = await TimeMiner.new({from: accounts[1]});
		const address6dd4gV = accounts[1]
		const addressfSlyJCb = accounts[1]
		const addressjaEWhPb = accounts[2]
		const addresslxfInKW = accounts[1]
		const boolsgWo0Ss = false
		const addressfeqw3B3 = accounts[3]
		const boole5ZYXNm = false
		const uint256ibWmyf = await TimeMiner24XnkV.allInfoFor.call(address6dd4gV, {from: accounts[0]});
		const uint256AQdbxJV = await TimeMiner24XnkV.allowance.call(addressjaEWhPb, addressfSlyJCb, {from: accounts[0]});
		const uint256wdVlfWA = await TimeMiner24XnkV.balanceOfTokenCirculation.call(addresslxfInKW, {from: accounts[4]});
//		const addressp4QOqvR = await TimeMiner24XnkV.whitelist.call(addressfeqw3B3, boolsgWo0Ss, {from: accounts[4]});
//		const boolFTpUjZc = await TimeMiner24XnkV.setStableCoinSystem.call(boole5ZYXNm, {from: accounts[2]});

		assert.equal(uint256AQdbxJV, BigInt("0"))
		assert.equal(uint256wdVlfWA, BigInt("24000000"))
		await expect(TimeMiner24XnkV.whitelist.call(addressfeqw3B3, boolsgWo0Ss, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerpMTh7SA = await TimeMiner.new({from: accounts[3]});
		const uint256WKUT3Hg = await TimeMinerpMTh7SA.totalSupply.call({from: accounts[1]});
		const boolyMyPNO = await TimeMinerpMTh7SA.infoStableSystem.call({from: accounts[2]});

		assert.equal(uint256WKUT3Hg, BigInt("24000000"))
	});

	it('test for TimeMiner', async () => {
		const TimeMinerQ4yqU4v = await TimeMiner.new({from: accounts[5]});
		const uintZyp5EFk = BigInt("180")
		const addressS6HDAXJ = accounts[1]
		const uintk870VG3 = BigInt("2023")
//		const uint256aKOiSJw = await TimeMinerQ4yqU4v.changePreSalePriceIfToHigh.call(uintZyp5EFk, {from: accounts[3]});
//		const uint256XwnfhWf = await TimeMinerQ4yqU4v.balanceOf.call(addressS6HDAXJ, {from: accounts[0]});
//		const uint256w5MztLt = await TimeMinerQ4yqU4v.changePreSalePriceIfToHigh.call(uintk870VG3, {from: accounts[2]});
//		await TimeMinerQ4yqU4v.preSaleFinished.call({from: accounts[2]});

		await expect(TimeMinerQ4yqU4v.changePreSalePriceIfToHigh.call(uintZyp5EFk, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerb8w8cy = await TimeMiner.new({from: accounts[4]});
		const uintX0dhipX = BigInt("451")
		const uintiFFjX5O = BigInt("1019")
		const addressvh6SZ1Y = accounts[1]
		const boolSH30aRB = true
		const addressoSslnPV = accounts[4]
//		const uint256TnbYPN6 = await TimeMinerb8w8cy.setPrizeFromNewAddress.call(uintiFFjX5O, uintX0dhipX, {from: accounts[3]});
//		const uint256mxFsdes = await TimeMinerb8w8cy.balanceOf.call(addressvh6SZ1Y, {from: accounts[2]});
//		const addressxsUHE31 = await TimeMinerb8w8cy.whitelist.call(addressoSslnPV, boolSH30aRB, {from: "0x0000000000000000000000000000000000000001"});
//		await TimeMinerb8w8cy.preSaleFinished.call({from: accounts[3]});
//		const boolfWs9VB = await TimeMinerb8w8cy.infoStableSystem.call({from: accounts[0]});

		await expect(TimeMinerb8w8cy.setPrizeFromNewAddress.call(uintiFFjX5O, uintX0dhipX, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerpnTUvKV = await TimeMiner.new({from: accounts[5]});
		const address2wafD2 = accounts[4]
		const addressBZ6uChF = "0x0000000000000000000000000000000000000001"
		const uints1Eikfa = BigInt("960")
		const addresslJCOMrE = accounts[3]
		const addresstDHk9zw = accounts[5]
		const uint256C3zjXGH = await TimeMinerpnTUvKV.balanceOfTokenCirculation.call(address2wafD2, {from: accounts[1]});
//		const uint256bLViTxf = await TimeMinerpnTUvKV.tokensToClaim.call(addressBZ6uChF, {from: "0x0000000000000000000000000000000000000001"});
//		const boolFgfo7ht = await TimeMinerpnTUvKV.transferFrom.call(addresstDHk9zw, addresslJCOMrE, uints1Eikfa, {from: accounts[5]});
//		const boolJMpn0X = await TimeMinerpnTUvKV.infoStableSystem.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256C3zjXGH, BigInt("0"))
		await expect(TimeMinerpnTUvKV.tokensToClaim.call(addressBZ6uChF, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerkYWiiLj = await TimeMiner.new({from: accounts[0]});
		const addresswjfbnA = accounts[2]
		const addresstC3n5wk = accounts[0]
		const addressb104INt = accounts[3]
		const uintybugIaO = BigInt("882")
		const addressxVUT0wc = accounts[2]
		const uint256XbcvzsX = await TimeMinerkYWiiLj.balanceOf.call(addresswjfbnA, {from: accounts[4]});
		const uint256sR1uIVJ = await TimeMinerkYWiiLj.allowance.call(addressb104INt, addresstC3n5wk, {from: accounts[1]});
//		const booluTVPC65 = await TimeMinerkYWiiLj.transfer.call(addressxVUT0wc, uintybugIaO, {from: accounts[5]});
//		const boolaLZg5iR = await TimeMinerkYWiiLj.infoStableSystem.call({from: accounts[3]});

		assert.equal(uint256XbcvzsX, BigInt("0"))
		assert.equal(uint256sR1uIVJ, BigInt("0"))
		await expect(TimeMinerkYWiiLj.transfer.call(addressxVUT0wc, uintybugIaO, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerpMTh7SA = await TimeMiner.new({from: accounts[3]});
//		await TimeMinerpMTh7SA.preSaleFinished.call({from: accounts[3]});
//		const boolyMyPNO = await TimeMinerpMTh7SA.infoStableSystem.call({from: accounts[2]});

		await expect(TimeMinerpMTh7SA.preSaleFinished.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerQ4yqU4v = await TimeMiner.new({from: accounts[5]});
		const boolPeblFQ = false
		const uintf3mAqJc = BigInt("155")
		const booljIpsIag = true
		const uintg9RORIa = BigInt("2023")
//		const boolbkvQvN9 = await TimeMinerQ4yqU4v.setStableCoinSystem.call(boolPeblFQ, {from: accounts[2]});
//		const uint256aKOiSJw = await TimeMinerQ4yqU4v.changePreSalePriceIfToHigh.call(uintf3mAqJc, {from: accounts[3]});
//		const boolHyrijxw = await TimeMinerQ4yqU4v.setStableCoinSystem.call(booljIpsIag, {from: accounts[2]});
//		const uint256w5MztLt = await TimeMinerQ4yqU4v.changePreSalePriceIfToHigh.call(uintg9RORIa, {from: accounts[2]});
//		await TimeMinerQ4yqU4v.preSaleFinished.call({from: accounts[2]});

		await expect(TimeMinerQ4yqU4v.setStableCoinSystem.call(boolPeblFQ, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerkYWiiLj = await TimeMiner.new({from: accounts[0]});
		const addressyA2oXL = accounts[5]
		const uintEv0pz5t = BigInt("925")
		const addressUCsK7gn = accounts[1]
		const addressJYQyjRj = accounts[2]
		const booleUL6G2H = await TimeMinerkYWiiLj.isWhitelisted.call(addressyA2oXL, {from: accounts[3]});
//		const uintXkOZvC = await TimeMinerkYWiiLj.preSale.call(uintEv0pz5t, {from: accounts[5]});
//		const uint256gHMyKDN = await TimeMinerkYWiiLj.allowance.call(addressJYQyjRj, addressUCsK7gn, {from: accounts[1]});

		assert.equal(booleUL6G2H, false)
		await expect(TimeMinerkYWiiLj.preSale.call(uintEv0pz5t, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerb8w8cy = await TimeMiner.new({from: accounts[4]});
		const addressP6ER12p = accounts[4]
		const uinti7rZNYt = BigInt("1809")
		const addressMQtpIU8 = accounts[1]
		const boolSH30aRB = true
		const addressQU6kwIZ = accounts[4]
		const boolxQtwyLu = await TimeMinerb8w8cy.isWhitelisted.call(addressP6ER12p, {from: accounts[2]});
		const boolXKYhP3h = await TimeMinerb8w8cy.approve.call(addressMQtpIU8, uinti7rZNYt, {from: accounts[2]});
//		const addressxsUHE31 = await TimeMinerb8w8cy.whitelist.call(addressQU6kwIZ, boolSH30aRB, {from: "0x0000000000000000000000000000000000000001"});
//		await TimeMinerb8w8cy.preSaleFinished.call({from: accounts[3]});
//		const boolfWs9VB = await TimeMinerb8w8cy.infoStableSystem.call({from: accounts[0]});

		assert.equal(boolXKYhP3h, true)
		assert.equal(boolxQtwyLu, true)
		await expect(TimeMinerb8w8cy.whitelist.call(addressQU6kwIZ, boolSH30aRB, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerQ4yqU4v = await TimeMiner.new({from: accounts[5]});
		const boolDHqBMAv = false
		const addressDbF62Nk = accounts[4]
		const boolPeblFQ = true
		const uint9Y9xLX = BigInt("186")
		const addressRKHvuWG = accounts[0]
		const uintY9x2aO = BigInt("155")
		const addressSlO9lXa = await TimeMinerQ4yqU4v.whitelist.call(addressDbF62Nk, boolDHqBMAv, {from: accounts[5]});
//		const boolbkvQvN9 = await TimeMinerQ4yqU4v.setStableCoinSystem.call(boolPeblFQ, {from: accounts[2]});
//		const boolkhFYFc2 = await TimeMinerQ4yqU4v.transfer.call(addressRKHvuWG, uint9Y9xLX, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256aKOiSJw = await TimeMinerQ4yqU4v.changePreSalePriceIfToHigh.call(uintY9x2aO, {from: accounts[3]});
//		await TimeMinerQ4yqU4v.preSaleFinished.call({from: accounts[2]});

		await expect(TimeMinerQ4yqU4v.setStableCoinSystem.call(boolPeblFQ, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerQ4yqU4v = await TimeMiner.new({from: accounts[5]});
		const uintOzgdanF = BigInt("1613")
		const uintRH21F5M = BigInt("864")
		const addresshExJqRA = accounts[3]
		const addressLTfWoO4 = "0x0000000000000000000000000000000000000001"
		const uintJx6v5qC = BigInt("146")
		const addressVGXesT4 = "0x0000000000000000000000000000000000000001"
		const uint256RBYvfK2 = await TimeMinerQ4yqU4v.setPrizeFromNewAddress.call(uintRH21F5M, uintOzgdanF, {from: accounts[5]});
		const uint256x2BSgu = await TimeMinerQ4yqU4v.allowance.call(addressLTfWoO4, addresshExJqRA, {from: accounts[4]});
//		const uint256aKOiSJw = await TimeMinerQ4yqU4v.changePreSalePriceIfToHigh.call(uintJx6v5qC, {from: accounts[3]});
//		const uint256orKMyit = await TimeMinerQ4yqU4v.allInfoFor.call(addressVGXesT4, {from: accounts[4]});

		assert.equal(uint256x2BSgu, BigInt("0"))
		await expect(TimeMinerQ4yqU4v.changePreSalePriceIfToHigh.call(uintJx6v5qC, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerpMTh7SA = await TimeMiner.new({from: accounts[3]});
		const address47hU69 = accounts[4]
		const uintUoXhJne = BigInt("1507")
		const uint256q1DOQWb = await TimeMinerpMTh7SA.balanceOf.call(address47hU69, {from: accounts[3]});
		const uint256OAayPgj = await TimeMinerpMTh7SA.changePreSalePriceIfToHigh.call(uintUoXhJne, {from: accounts[3]});
//		await TimeMinerpMTh7SA.preSaleFinished.call({from: accounts[3]});

		assert.equal(uint256q1DOQWb, BigInt("0"))
		await expect(TimeMinerpMTh7SA.preSaleFinished.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerpnTUvKV = await TimeMiner.new({from: accounts[5]});
		const uintcr3FXCG = BigInt("1726")
		const addressBQiGRJw = accounts[4]
		const uinttQUGHW = BigInt("209")
		const addressgWJMomU = accounts[2]
		const addressGVLoYHg = accounts[5]
		const uintUo4785U = BigInt("951")
		const addressbbKMA3u = accounts[3]
		const address98kO7q = accounts[4]
		const boolxdCMXJj = await TimeMinerpnTUvKV.transfer.call(addressBQiGRJw, uintcr3FXCG, {from: accounts[5]});
//		const booluMlR9oP = await TimeMinerpnTUvKV.transferFrom.call(addressGVLoYHg, addressgWJMomU, uinttQUGHW, {from: accounts[5]});
//		const boolFgfo7ht = await TimeMinerpnTUvKV.transferFrom.call(address98kO7q, addressbbKMA3u, uintUo4785U, {from: accounts[5]});

		assert.equal(boolxdCMXJj, true)
		await expect(TimeMinerpnTUvKV.transferFrom.call(addressGVLoYHg, addressgWJMomU, uinttQUGHW, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerRHYqJa = await TimeMiner.new({from: "0x0000000000000000000000000000000000000001"});
		const uintTDhqHp5 = BigInt("713")
		const addressyue4asO = "0x0000000000000000000000000000000000000001"
		const addressJIAPzvk = accounts[0]
		const uintWqcKcJf = BigInt("1325")
		const uint256X35xbnx = await TimeMinerRHYqJa.changePreSalePriceIfToHigh.call(uintTDhqHp5, {from: "0x0000000000000000000000000000000000000001"});
		const uint256HINvF1R = await TimeMinerRHYqJa.allowance.call(addressJIAPzvk, addressyue4asO, {from: "0x0000000000000000000000000000000000000001"});
		const uint256qeznGOo = await TimeMinerRHYqJa.totalSupply.call({from: accounts[1]});
		const uint256HO7x1Ub = await TimeMinerRHYqJa.changePreSalePriceIfToHigh.call(uintWqcKcJf, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for TimeMiner', async () => {
		const TimeMinerkYWiiLj = await TimeMiner.new({from: accounts[0]});
		const boolBsdBavE = false
		const uintnYyhpem = BigInt("628")
		const booloQmxOG3 = await TimeMinerkYWiiLj.setStableCoinSystem.call(boolBsdBavE, {from: accounts[0]});
//		const uintXkOZvC = await TimeMinerkYWiiLj.preSale.call(uintnYyhpem, {from: accounts[5]});

		await expect(TimeMinerkYWiiLj.preSale.call(uintnYyhpem, {from: accounts[5]})).to.be.rejectedWith(Error);
	});
})