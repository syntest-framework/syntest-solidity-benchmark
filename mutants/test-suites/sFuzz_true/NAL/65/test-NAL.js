const NAL = artifacts.require("NAL");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('NAL', (accounts) => {
	it('test for NAL', async () => {
		const NALC86RFWS = await NAL.new({from: "0x0000000000000000000000000000000000000001"});
		const uintr4iAPI = BigInt("94")
		const addressG1zB1ST = accounts[0]
		const addressaQLjVL = accounts[3]
		const uintlP12eQ0 = BigInt("128")
		const boolyKI4JJ = await NALC86RFWS.transferFrom.call(addressaQLjVL, addressG1zB1ST, uintr4iAPI, {from: "0x0000000000000000000000000000000000000001"});
		await NALC86RFWS.whenPaused.call({from: accounts[2]});
		await NALC86RFWS.unpause.call({from: accounts[3]});
		const uint256QlXildV = await NALC86RFWS.totalSupply.call({from: accounts[4]});
		const uint256VoQRDXs = await NALC86RFWS.burn.call(uintlP12eQ0, {from: accounts[0]});
	});

	it('test for NAL', async () => {
		const stringgwBttrT = "zO59IEP9VZ797QWyFAvpAup8QQFCoy3R6p6gfaugGT5pMWBu"
		const stringQlfUUwp = "AtbnqjieJc3CbLM7ZCDvrVyOujPAcUZ"
		const uintgy20sTu = BigInt("106")
		const NALXFPRfmY = await NAL.new(stringgwBttrT, stringQlfUUwp, uintgy20sTu, {from: accounts[1]});
		const addressdC3IWMS = accounts[2]
		const addresswHRfZeu = accounts[2]
		const uintHOqtBh = BigInt("2006")
		const addressbgC1KqO = accounts[2]
		const uintLvLmq9f = BigInt("660")
		const addressVT6bAZn = "0x0000000000000000000000000000000000000001"
		const uint256LwZGlOR = await NALXFPRfmY.allowance.call(addresswHRfZeu, addressdC3IWMS, {from: accounts[0]});
		const booliOa6r1A = await NALXFPRfmY.increaseAllowance.call(addressbgC1KqO, uintHOqtBh, {from: accounts[2]});
		const uint256Yg0mAm9 = await NALXFPRfmY.burn.call(uintLvLmq9f, {from: accounts[4]});
		const addressmHoKoOp = await NALXFPRfmY.notFrozen.call(addressVT6bAZn, {from: accounts[5]});
		const stringwMumkTa = await NALXFPRfmY.name.call({from: accounts[1]});
		await NALXFPRfmY.renounceAdmin.call({from: accounts[5]});
	});

	it('test for NAL', async () => {
		const NALaHTvaxb = await NAL.new({from: accounts[3]});
		const addressCNvccSE = accounts[2]
//		await NALaHTvaxb.renounceAdmin.call({from: "0x0000000000000000000000000000000000000001"});
//		const addresscA8ND9x = await NALaHTvaxb.notFrozen.call(addressCNvccSE, {from: accounts[3]});

		await expect(NALaHTvaxb.renounceAdmin.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALdcOtuch = await NAL.new({from: accounts[4]});
		const uintPEJ8odj = BigInt("1369")
		const addressXSb0g60 = accounts[5]
		const addressFlMa7Hl = accounts[4]
		const uintTwxmHh = BigInt("509")
		const addressgiusKfB = accounts[1]
		const uint8Y19nUK = await NALdcOtuch.decimals.call({from: accounts[1]});
//		const boolIX6qlPu = await NALdcOtuch.transferFrom.call(addressFlMa7Hl, addressXSb0g60, uintPEJ8odj, {from: accounts[5]});
//		const boolXqRU8k = await NALdcOtuch.approve.call(addressgiusKfB, uintTwxmHh, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint8Y19nUK, BigInt("18"))
		await expect(NALdcOtuch.transferFrom.call(addressFlMa7Hl, addressXSb0g60, uintPEJ8odj, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALaHTvaxb = await NAL.new({from: accounts[3]});
		const addressRFYPi1 = accounts[3]
		const stringejMWfij = await NALaHTvaxb.name.call({from: accounts[2]});
//		await NALaHTvaxb.renounceAdmin.call({from: "0x0000000000000000000000000000000000000001"});
//		await NALaHTvaxb.renounceAdmin.call({from: accounts[1]});
//		const addresscA8ND9x = await NALaHTvaxb.notFrozen.call(addressRFYPi1, {from: accounts[3]});

		assert.equal(stringejMWfij, "Personal Token")
		await expect(NALaHTvaxb.renounceAdmin.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALdcOtuch = await NAL.new({from: accounts[4]});
		const uintIYWqNn = BigInt("509")
		const addressgM2Voyd = accounts[1]
		const addressBVjmG59 = accounts[5]
		const uint8Y19nUK = await NALdcOtuch.decimals.call({from: accounts[1]});
		const uint256ZukLj1i = await NALdcOtuch.totalSupply.call({from: accounts[2]});
		const boolXqRU8k = await NALdcOtuch.approve.call(addressgM2Voyd, uintIYWqNn, {from: "0x0000000000000000000000000000000000000001"});
		const uint256d2yLX1p = await NALdcOtuch.balanceOf.call(addressBVjmG59, {from: accounts[5]});

		assert.equal(boolXqRU8k, true)
		assert.equal(uint256ZukLj1i, BigInt("2000000000000000000000000000"))
		assert.equal(uint256d2yLX1p, BigInt("0"))
		assert.equal(uint8Y19nUK, BigInt("18"))
	});

	it('test for NAL', async () => {
		const NALaHTvaxb = await NAL.new({from: accounts[3]});
		const addressk3Y84CU = accounts[5]
		const addressJYmFb8o = accounts[1]
		const addressIGoNRV6 = accounts[2]
		const boolORdd2KN = await NALaHTvaxb.isAdmin.call(addressk3Y84CU, {from: "0x0000000000000000000000000000000000000001"});
//		await NALaHTvaxb.renounceAdmin.call({from: "0x0000000000000000000000000000000000000001"});
//		const addresscooLgt = await NALaHTvaxb.addAdmin.call(addressJYmFb8o, {from: accounts[0]});
//		const addresscA8ND9x = await NALaHTvaxb.notFrozen.call(addressIGoNRV6, {from: accounts[3]});
//		await NALaHTvaxb.whenNotPaused.call({from: accounts[3]});

		assert.equal(boolORdd2KN, false)
		await expect(NALaHTvaxb.renounceAdmin.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALdcOtuch = await NAL.new({from: accounts[4]});
		const addresslFwW2VX = accounts[5]
		const uintrJikVc = BigInt("1369")
		const addressQvB8pxU = accounts[5]
		const addressxdTT1S1 = accounts[4]
		const uintM2BOzjx = BigInt("509")
		const addressJfOzSUC = accounts[1]
		const uintWarF1Rq = BigInt("53")
		const addresssPWp6Yf = accounts[1]
		const boolFHVm22w = await NALdcOtuch.isOwner.call(addresslFwW2VX, {from: accounts[0]});
		const uint8Y19nUK = await NALdcOtuch.decimals.call({from: accounts[1]});
//		const boolIX6qlPu = await NALdcOtuch.transferFrom.call(addressxdTT1S1, addressQvB8pxU, uintrJikVc, {from: accounts[5]});
//		const boolXqRU8k = await NALdcOtuch.approve.call(addressJfOzSUC, uintM2BOzjx, {from: "0x0000000000000000000000000000000000000001"});
//		const booloDRhVWq = await NALdcOtuch.increaseAllowance.call(addresssPWp6Yf, uintWarF1Rq, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolFHVm22w, false)
		assert.equal(uint8Y19nUK, BigInt("18"))
		await expect(NALdcOtuch.transferFrom.call(addressxdTT1S1, addressQvB8pxU, uintrJikVc, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALaHTvaxb = await NAL.new({from: accounts[3]});
		const addressMTX5BxS = accounts[3]
//		const addresscA8ND9x = await NALaHTvaxb.notFrozen.call(addressMTX5BxS, {from: accounts[3]});

		await expect(NALaHTvaxb.notFrozen.call(addressMTX5BxS, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALdcOtuch = await NAL.new({from: accounts[4]});
		const uintpxLz8s5 = BigInt("509")
		const addresshUiJfUz = accounts[1]
		const addresso8ukCxs = accounts[5]
		const uintJlopzHM = BigInt("1032")
		const addressTaYfVOI = accounts[1]
		const uint8Y19nUK = await NALdcOtuch.decimals.call({from: accounts[1]});
		const uint256ZukLj1i = await NALdcOtuch.totalSupply.call({from: accounts[2]});
		const boolXqRU8k = await NALdcOtuch.approve.call(addresshUiJfUz, uintpxLz8s5, {from: "0x0000000000000000000000000000000000000001"});
		const uint256d2yLX1p = await NALdcOtuch.balanceOf.call(addresso8ukCxs, {from: accounts[5]});
		const bool3NUcWR = await NALdcOtuch.increaseAllowance.call(addressTaYfVOI, uintJlopzHM, {from: accounts[3]});

		assert.equal(bool3NUcWR, true)
		assert.equal(boolXqRU8k, true)
		assert.equal(uint256ZukLj1i, BigInt("2000000000000000000000000000"))
		assert.equal(uint256d2yLX1p, BigInt("0"))
		assert.equal(uint8Y19nUK, BigInt("18"))
	});

	it('test for NAL', async () => {
		const NALdcOtuch = await NAL.new({from: accounts[4]});
		const addressu8en7D9 = accounts[2]
		const uintVOsUbo = BigInt("509")
		const addressDtKcah4 = accounts[1]
		const addressSR1lIH2 = accounts[5]
		const uint8Y19nUK = await NALdcOtuch.decimals.call({from: accounts[1]});
		const uint256ZukLj1i = await NALdcOtuch.totalSupply.call({from: accounts[2]});
		const addressrWjPaLs = await NALdcOtuch.addAdmin.call(addressu8en7D9, {from: accounts[4]});
		const boolXqRU8k = await NALdcOtuch.approve.call(addressDtKcah4, uintVOsUbo, {from: "0x0000000000000000000000000000000000000001"});
		const uint256d2yLX1p = await NALdcOtuch.balanceOf.call(addressSR1lIH2, {from: accounts[5]});

		assert.equal(boolXqRU8k, true)
		assert.equal(uint256ZukLj1i, BigInt("2000000000000000000000000000"))
		assert.equal(uint256d2yLX1p, BigInt("0"))
		assert.equal(uint8Y19nUK, BigInt("18"))
	});

	it('test for NAL', async () => {
		const NALaHTvaxb = await NAL.new({from: accounts[3]});
		const uintZa9aVAs = BigInt("1907")
		const addressgTOZLE = accounts[0]
//		const boolkEb1QPC = await NALaHTvaxb.decreaseAllowance.call(addressgTOZLE, uintZa9aVAs, {from: "0x0000000000000000000000000000000000000001"});
//		await NALaHTvaxb.renounceAdmin.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(NALaHTvaxb.decreaseAllowance.call(addressgTOZLE, uintZa9aVAs, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALaHTvaxb = await NAL.new({from: accounts[3]});
		const addressBHEQy7 = accounts[3]
		const boolHKkfa13 = await NALaHTvaxb.isOwner.call(addressBHEQy7, {from: accounts[1]});
		const stringl45SVeL = await NALaHTvaxb.name.call({from: accounts[1]});
//		await NALaHTvaxb.renounceAdmin.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolHKkfa13, true)
		assert.equal(stringl45SVeL, "Personal Token")
		await expect(NALaHTvaxb.renounceAdmin.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALaHTvaxb = await NAL.new({from: accounts[3]});
		const uintTyGRLcQ = BigInt("273")
		const addressUgK9B8p = accounts[4]
//		const addressyf0Jqd = await NALaHTvaxb.burnFrom.call(addressUgK9B8p, uintTyGRLcQ, {from: accounts[1]});
//		await NALaHTvaxb.renounceAdmin.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(NALaHTvaxb.burnFrom.call(addressUgK9B8p, uintTyGRLcQ, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALaHTvaxb = await NAL.new({from: accounts[3]});
		const uintghfs22N = BigInt("1640")
//		const uint256JlGkMUP = await NALaHTvaxb.burn.call(uintghfs22N, {from: accounts[2]});
//		await NALaHTvaxb.whenPaused.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(NALaHTvaxb.burn.call(uintghfs22N, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALdcOtuch = await NAL.new({from: accounts[4]});
		const uintilUZF0B = BigInt("509")
		const addressASd977M = accounts[1]
		const addressYakKgO1 = accounts[5]
		const uint8Y19nUK = await NALdcOtuch.decimals.call({from: accounts[1]});
		const boolXqRU8k = await NALdcOtuch.approve.call(addressASd977M, uintilUZF0B, {from: "0x0000000000000000000000000000000000000001"});
//		await NALdcOtuch.pause.call({from: accounts[4]});
//		const uint256d2yLX1p = await NALdcOtuch.balanceOf.call(addressYakKgO1, {from: accounts[5]});

		assert.equal(boolXqRU8k, true)
		assert.equal(uint8Y19nUK, BigInt("18"))
		await expect(NALdcOtuch.pause.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALdcOtuch = await NAL.new({from: accounts[4]});
		const uintuiqH70v = BigInt("1777")
		const addressn04lrA3 = accounts[4]
//		const boolGdakq1I = await NALdcOtuch.transfer.call(addressn04lrA3, uintuiqH70v, {from: accounts[0]});
//		const stringk1EZd4U = await NALdcOtuch.name.call({from: accounts[3]});
//		const uint8gaxBub9 = await NALdcOtuch.decimals.call({from: accounts[2]});

		await expect(NALdcOtuch.transfer.call(addressn04lrA3, uintuiqH70v, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALdcOtuch = await NAL.new({from: accounts[4]});
		const addresso4X3Vtq = accounts[5]
		const uintRSAmKzE = BigInt("897")
		const addresso3MC3gN = accounts[0]
		const uint256d2yLX1p = await NALdcOtuch.balanceOf.call(addresso4X3Vtq, {from: accounts[5]});
//		const boolXGXbGOP = await NALdcOtuch.unlock.call(addresso3MC3gN, uintRSAmKzE, {from: accounts[4]});
//		await NALdcOtuch.onlyOwner.call({from: accounts[2]});

		assert.equal(uint256d2yLX1p, BigInt("0"))
		await expect(NALdcOtuch.unlock.call(addresso3MC3gN, uintRSAmKzE, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALaHTvaxb = await NAL.new({from: accounts[3]});
		const boolUVAZRIK = await NALaHTvaxb.paused.call({from: accounts[2]});
//		await NALaHTvaxb.renounceAdmin.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolUVAZRIK, false)
		await expect(NALaHTvaxb.renounceAdmin.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALaHTvaxb = await NAL.new({from: accounts[3]});
		const addressu4YMdIt = accounts[3]
		const addressMqxpJVc = accounts[0]
		const uintH1rwpMr = BigInt("1458")
		const addressv9vxXBu = accounts[2]
		const uintcCUKFq0 = BigInt("1311")
		const addressd4rDIF7 = accounts[1]
		const addressixnTGoA = accounts[3]
		const uint256ibp2WA4 = await NALaHTvaxb.allowance.call(addressMqxpJVc, addressu4YMdIt, {from: accounts[1]});
		const stringaqMCEcM = await NALaHTvaxb.name.call({from: accounts[3]});
//		const boolEg4VMrI = await NALaHTvaxb.decreaseAllowance.call(addressv9vxXBu, uintH1rwpMr, {from: accounts[1]});
//		await NALaHTvaxb.unpause.call({from: accounts[2]});
//		const boolnuB57MS = await NALaHTvaxb.transferFrom.call(addressixnTGoA, addressd4rDIF7, uintcCUKFq0, {from: accounts[0]});

		assert.equal(stringaqMCEcM, "Personal Token")
		assert.equal(uint256ibp2WA4, BigInt("0"))
		await expect(NALaHTvaxb.decreaseAllowance.call(addressv9vxXBu, uintH1rwpMr, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALaHTvaxb = await NAL.new({from: accounts[3]});
		const addressoXLnOIh = accounts[5]
		const addressZpRwFyK = accounts[4]
		const addressOBAr6tr = await NALaHTvaxb.upgradeTo.call(addressoXLnOIh, {from: accounts[3]});
//		await NALaHTvaxb.renounceAdmin.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256Hs9bAb8 = await NALaHTvaxb.balanceOf.call(addressZpRwFyK, {from: accounts[0]});
//		await NALaHTvaxb.unpause.call({from: accounts[3]});

		await expect(NALaHTvaxb.renounceAdmin.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALaHTvaxb = await NAL.new({from: accounts[3]});
		const uintNMGeJfv = BigInt("1311")
		const addressSSqByiL = accounts[2]
		const addresso2JdxBV = accounts[2]
		const stringvM0VulI = await NALaHTvaxb.symbol.call({from: accounts[1]});
//		const boolnuB57MS = await NALaHTvaxb.transferFrom.call(addresso2JdxBV, addressSSqByiL, uintNMGeJfv, {from: accounts[0]});

		assert.equal(stringvM0VulI, "NAL")
		await expect(NALaHTvaxb.transferFrom.call(addresso2JdxBV, addressSSqByiL, uintNMGeJfv, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALdcOtuch = await NAL.new({from: accounts[4]});
		const uintRu3cHZ6 = BigInt("1777")
		const addressJRi0Zt8 = accounts[5]
//		await NALdcOtuch.renounceAdmin.call({from: accounts[4]});
//		const boolGdakq1I = await NALdcOtuch.transfer.call(addressJRi0Zt8, uintRu3cHZ6, {from: accounts[0]});

		await expect(NALdcOtuch.renounceAdmin.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALscoJMPs = await NAL.new({from: accounts[0]});
		const addressr2Nsn6F = accounts[2]
		const uintMIJt9AP = BigInt("1520")
		const addresso6ArdIL = accounts[4]
		const addressXGJqyOx = accounts[5]
		const uintunDIlVn = BigInt("714")
		const addressPrDal0 = "0x0000000000000000000000000000000000000001"
//		const boolFTl9NB = await NALscoJMPs.unfreezeAccount.call(addressr2Nsn6F, {from: accounts[0]});
//		const uint256bfDeJVL = await NALscoJMPs.totalSupply.call({from: accounts[5]});
//		const boolBrzbxCJ = await NALscoJMPs.transferFrom.call(addressXGJqyOx, addresso6ArdIL, uintMIJt9AP, {from: accounts[1]});
//		const boolT7lXeWE = await NALscoJMPs.approve.call(addressPrDal0, uintunDIlVn, {from: accounts[4]});

		await expect(NALscoJMPs.unfreezeAccount.call(addressr2Nsn6F, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})