const Layerx = artifacts.require("Layerx");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Layerx', (accounts) => {
	it('test for Layerx', async () => {
		const addressZ1iW80d = accounts[3]
		const LayerxOAzHeBf = await Layerx.new(addressZ1iW80d, {from: accounts[1]});
		const uintNrUR4Xh = BigInt("1553")
		const addresskPGzssV = accounts[5]
		const addressIaDd0Yp = accounts[3]
		const addresstrKBh5j = accounts[3]
		const uintKWrW4a9 = BigInt("648")
		const boolu4HgVHn = await LayerxOAzHeBf.transfer.call(addresskPGzssV, uintNrUR4Xh, {from: "0x0000000000000000000000000000000000000001"});
		const uintw7okeS1 = await LayerxOAzHeBf.allowance.call(addresstrKBh5j, addressIaDd0Yp, {from: accounts[3]});
		await LayerxOAzHeBf.addStakePayment.call({from: accounts[1]});
		const uintgPO8ADk = await LayerxOAzHeBf.lock.call(uintKWrW4a9, {from: accounts[1]});

		await expect(LayerxOAzHeBf.transfer.call(addresskPGzssV, uintNrUR4Xh, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressNmeTqj = accounts[2]
		const LayerxYi5TxO = await Layerx.new(addressNmeTqj, {from: accounts[0]});
		const uintDSfOpuX = BigInt("1365")
		const addresspiuHEtt = accounts[2]
		const addressfwItIBX = accounts[5]
		const addresshBTNqw8 = accounts[5]
		const addressxgLGfx = accounts[1]
		const addressCU3Z7K1 = accounts[4]
		const boolmhjps34 = await LayerxYi5TxO.transferFrom.call(addressfwItIBX, addresspiuHEtt, uintDSfOpuX, {from: accounts[2]});
		const uintEckP2FA = await LayerxYi5TxO.allowance.call(addressxgLGfx, addresshBTNqw8, {from: "0x0000000000000000000000000000000000000001"});
		const addressrZvwIBx = await LayerxYi5TxO.setNewStakeCreator.call(addressCU3Z7K1, {from: accounts[1]});

		await expect(LayerxYi5TxO.transferFrom.call(addressfwItIBX, addresspiuHEtt, uintDSfOpuX, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressE5fvq0M = accounts[1]
		const LayerxYRMdhvm = await Layerx.new(addressE5fvq0M, {from: "0x0000000000000000000000000000000000000001"});
		const uintrZUxzcn = BigInt("1072")
		const addressrdPgATc = accounts[2]
		const addressjYRRFI3 = accounts[4]
		const uintmRk3nUl = BigInt("1394")
		const addressEGYthgP = accounts[2]
		const uintuYXkysQ = await LayerxYRMdhvm.exist.call(uintrZUxzcn, {from: accounts[4]});
		const uintnQx8toF = await LayerxYRMdhvm.allowance.call(addressjYRRFI3, addressrdPgATc, {from: accounts[4]});
		const boolL1opvfR = await LayerxYRMdhvm.transfer.call(addressEGYthgP, uintmRk3nUl, {from: accounts[4]});
		await LayerxYRMdhvm.onlyOwner.call({from: accounts[3]});
	});

	it('test for Layerx', async () => {
		const addressrH3ybSX = accounts[1]
		const Layerx0G0c1y = await Layerx.new(addressrH3ybSX, {from: accounts[4]});
		const uintLFW25TW = BigInt("190")
		const addressbC8K0hu = accounts[3]
		const uintmXihewD = BigInt("700")
		const uintQIlhpRG = BigInt("1928")
		await Layerx0G0c1y.unlock.call({from: "0x0000000000000000000000000000000000000001"});
		await Layerx0G0c1y.paused.call({from: accounts[1]});
		const boolE5rb8UH = await Layerx0G0c1y.transfer.call(addressbC8K0hu, uintLFW25TW, {from: accounts[4]});
		const uintY32IOLd = await Layerx0G0c1y.lock.call(uintmXihewD, {from: accounts[2]});
		const uintPxonaU = await Layerx0G0c1y.lock.call(uintQIlhpRG, {from: accounts[1]});

		await expect(Layerx0G0c1y.unlock.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressHPQs6ix = "0x0000000000000000000000000000000000000001"
		const Layerxfix6Yc3 = await Layerx.new(addressHPQs6ix, {from: accounts[4]});
		const addressPI3F58k = accounts[2]
		const uintcmIMSvp = BigInt("1057")
		const addressEFTYoQ9 = accounts[0]
		const uintg2X4YkO = await Layerxfix6Yc3.balanceOf.call(addressPI3F58k, {from: accounts[4]});
		await Layerxfix6Yc3.paused.call({from: accounts[2]});
		const uint256VJxSx9J = await Layerxfix6Yc3.burn.call(uintcmIMSvp, {from: accounts[0]});
		const addressAkbP8Ki = await Layerxfix6Yc3.setNewStakeCreator.call(addressEFTYoQ9, {from: accounts[3]});

		assert.equal(uintg2X4YkO, BigInt("0"))
		await expect(Layerxfix6Yc3.paused.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressQVbeUpM = accounts[2]
		const LayerxwzxAvFG = await Layerx.new(addressQVbeUpM, {from: accounts[0]});
		const addressD57B9hi = accounts[2]
		const addressZeyctE = accounts[0]
		const addressX9VI4si = accounts[0]
		const addressU4i7z3x = accounts[2]
		const address5pUm7e = await LayerxwzxAvFG.setNewStakeCreator.call(addressD57B9hi, {from: accounts[4]});
		const uintPzbzYDi = await LayerxwzxAvFG.getStakesNum.call({from: accounts[0]});
		await LayerxwzxAvFG.paused.call({from: accounts[2]});
		const uintCjX89We = await LayerxwzxAvFG.balanceOf.call(addressZeyctE, {from: accounts[0]});
		const uintZo7Vxz2 = await LayerxwzxAvFG.allowance.call(addressU4i7z3x, addressX9VI4si, {from: accounts[3]});
		await LayerxwzxAvFG.f.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(LayerxwzxAvFG.setNewStakeCreator.call(addressD57B9hi, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressyymKf1R = accounts[2]
		const LayerxYi5TxO = await Layerx.new(addressyymKf1R, {from: accounts[0]});
		const uint0fyzFg = BigInt("77")
		const addressUjsR3BZ = accounts[5]
		const addressC4AsCb8 = accounts[1]
		const addressVEjxbib = accounts[5]
		const uintnvcyXhE = BigInt("1621")
		const uintGyRs6qK = await LayerxYi5TxO.lock.call(uint0fyzFg, {from: accounts[2]});
		const uintEckP2FA = await LayerxYi5TxO.allowance.call(addressC4AsCb8, addressUjsR3BZ, {from: "0x0000000000000000000000000000000000000001"});
		const addressrZvwIBx = await LayerxYi5TxO.setNewStakeCreator.call(addressVEjxbib, {from: accounts[1]});
		const uintJlWSAJu = await LayerxYi5TxO.withdraw.call(uintnvcyXhE, {from: accounts[4]});

		await expect(LayerxYi5TxO.lock.call(uint0fyzFg, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressIaoORDK = accounts[0]
		const LayerxeWFRTyp = await Layerx.new(addressIaoORDK, {from: accounts[0]});
		const uintWR9sILg = BigInt("1011")
		const addressbJMN9RB = accounts[5]
		const addressmXIggmj = accounts[0]
		const boolTg7SOMc = await LayerxeWFRTyp.transferFrom.call(addressmXIggmj, addressbJMN9RB, uintWR9sILg, {from: accounts[3]});

		await expect(LayerxeWFRTyp.transferFrom.call(addressmXIggmj, addressbJMN9RB, uintWR9sILg, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressWQaaYxT = accounts[2]
		const LayerxSFc0Jfv = await Layerx.new(addressWQaaYxT, {from: accounts[3]});
		const uintRhiEdo = await LayerxSFc0Jfv.getStakesNum.call({from: accounts[1]});
		await LayerxSFc0Jfv.paused.call({from: accounts[5]});

		assert.equal(uintRhiEdo, BigInt("1"))
		await expect(LayerxSFc0Jfv.paused.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressTvInsy7 = accounts[0]
		const LayerxeWFRTyp = await Layerx.new(addressTvInsy7, {from: accounts[0]});
		const uintk7iLqkb = BigInt("1853")
		const uintup6t3u7 = BigInt("1011")
		const addresskT8HXuD = accounts[0]
		const addressxhHbYD0 = accounts[0]
		const uintQ6SMLWm = await LayerxeWFRTyp.withdraw.call(uintk7iLqkb, {from: accounts[2]});
		const boolTg7SOMc = await LayerxeWFRTyp.transferFrom.call(addressxhHbYD0, addresskT8HXuD, uintup6t3u7, {from: accounts[3]});

		await expect(LayerxeWFRTyp.withdraw.call(uintk7iLqkb, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressklcdOUI = accounts[0]
		const LayerxeWFRTyp = await Layerx.new(addressklcdOUI, {from: accounts[0]});
		const uintITGobFA = BigInt("1011")
		const addressxtuTL8d = accounts[5]
		const addressrlXJQ2f = accounts[0]
		await LayerxeWFRTyp.addStakePayment.call({from: accounts[0]});
		const boolTg7SOMc = await LayerxeWFRTyp.transferFrom.call(addressrlXJQ2f, addressxtuTL8d, uintITGobFA, {from: accounts[3]});

		await expect(LayerxeWFRTyp.addStakePayment.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressSCRlOY = accounts[0]
		const LayerxeWFRTyp = await Layerx.new(addressSCRlOY, {from: accounts[0]});
		const uintgho03tS = BigInt("1007")
		const addressD6YvfNB = accounts[5]
		const addresstQ4TWb4 = accounts[0]
		const uintQr5SAU4 = await LayerxeWFRTyp.getStakesNum.call({from: accounts[2]});
		await LayerxeWFRTyp.addStakePayment.call({from: accounts[4]});
		const boolTg7SOMc = await LayerxeWFRTyp.transferFrom.call(addresstQ4TWb4, addressD6YvfNB, uintgho03tS, {from: accounts[3]});

		assert.equal(uintQr5SAU4, BigInt("1"))
		await expect(LayerxeWFRTyp.addStakePayment.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressoUco1E7 = accounts[0]
		const LayerxeWFRTyp = await Layerx.new(addressoUco1E7, {from: accounts[0]});
		const uintJLV9b9 = BigInt("1011")
		const addressGSjGm9E = accounts[5]
		const addressGidyiM = accounts[1]
		const uintkNWsehL = await LayerxeWFRTyp.totalSupply.call({from: accounts[2]});
		const uintnghj3Ur = await LayerxeWFRTyp.totalSupply.call({from: accounts[1]});
		const boolTg7SOMc = await LayerxeWFRTyp.transferFrom.call(addressGidyiM, addressGSjGm9E, uintJLV9b9, {from: accounts[3]});

		assert.equal(uintkNWsehL, BigInt("40000000000000000000000"))
		assert.equal(uintnghj3Ur, BigInt("40000000000000000000000"))
		await expect(LayerxeWFRTyp.transferFrom.call(addressGidyiM, addressGSjGm9E, uintJLV9b9, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addresszK5IpRN = accounts[0]
		const LayerxeWFRTyp = await Layerx.new(addresszK5IpRN, {from: accounts[0]});
		const uintIo0JM0E = BigInt("1011")
		const addressXq7R4Yf = accounts[5]
		const addressWHGTLI = accounts[0]
		const uintfPx9i8o = await LayerxeWFRTyp.totalSupply.call({from: accounts[1]});
		await LayerxeWFRTyp.f.call({from: accounts[1]});
		const boolTg7SOMc = await LayerxeWFRTyp.transferFrom.call(addressWHGTLI, addressXq7R4Yf, uintIo0JM0E, {from: accounts[3]});

		assert.equal(uintfPx9i8o, BigInt("40000000000000000000000"))
		await expect(LayerxeWFRTyp.f.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressH5lczdT = accounts[4]
		const LayerxcdXxLpS = await Layerx.new(addressH5lczdT, {from: accounts[0]});
		const addresse1OAJlQ = "0x0000000000000000000000000000000000000001"
		const addressMwGTB1 = accounts[1]
		const addressD2FCjux = accounts[5]
		const addressxVB67Yi = accounts[3]
		const uintuOtvUcO = await LayerxcdXxLpS.allowance.call(addressMwGTB1, addresse1OAJlQ, {from: accounts[0]});
		const addressxfhlNCF = await LayerxcdXxLpS.setNewStakeCreator.call(addressD2FCjux, {from: accounts[2]});
		const uintlAH2jf5 = await LayerxcdXxLpS.getStakesNum.call({from: accounts[0]});
		const addressW2xchT = await LayerxcdXxLpS.setNewStakeCreator.call(addressxVB67Yi, {from: accounts[1]});
		await LayerxcdXxLpS.unlock.call({from: accounts[4]});

		assert.equal(uintuOtvUcO, BigInt("0"))
		await expect(LayerxcdXxLpS.setNewStakeCreator.call(addressD2FCjux, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressqE1T4Ke = accounts[0]
		const LayerxeWFRTyp = await Layerx.new(addressqE1T4Ke, {from: accounts[0]});
		const byteiQXwaC = "0x031b1809030120031e1a08"
		const uintIIYgo9z = BigInt("1730")
		const addressj0gacdI = accounts[3]
		const uintBZYqExx = BigInt("1011")
		const addressopNrI8d = accounts[5]
		const addressh6MT4F = accounts[1]
		const boolw8riswj = await LayerxeWFRTyp.approveAndCall.call(addressj0gacdI, uintIIYgo9z, byteiQXwaC, {from: accounts[5]});
		const boolTg7SOMc = await LayerxeWFRTyp.transferFrom.call(addressh6MT4F, addressopNrI8d, uintBZYqExx, {from: accounts[3]});
		const uinted92n0 = await LayerxeWFRTyp.getStakesNum.call({from: accounts[5]});

		await expect(LayerxeWFRTyp.approveAndCall.call(addressj0gacdI, uintIIYgo9z, byteiQXwaC, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressc0EUzeg = accounts[0]
		const LayerxeWFRTyp = await Layerx.new(addressc0EUzeg, {from: accounts[0]});
		const uintulCxidL = BigInt("982")
		const uintfIrzrxz = BigInt("1011")
		const addressvOI8MoK = accounts[5]
		const addressOZIdEWl = accounts[0]
		const uint256oGrZyRk = await LayerxeWFRTyp.burn.call(uintulCxidL, {from: accounts[0]});
		const boolTg7SOMc = await LayerxeWFRTyp.transferFrom.call(addressOZIdEWl, addressvOI8MoK, uintfIrzrxz, {from: accounts[3]});

		await expect(LayerxeWFRTyp.transferFrom.call(addressOZIdEWl, addressvOI8MoK, uintfIrzrxz, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressJIvM6Bb = accounts[0]
		const LayerxeWFRTyp = await Layerx.new(addressJIvM6Bb, {from: accounts[0]});
		const uintsnVhnz6 = BigInt("1385")
		const addressdNmlJAT = "0x0000000000000000000000000000000000000001"
		const boolY0CuLss = await LayerxeWFRTyp.approve.call(addressdNmlJAT, uintsnVhnz6, {from: accounts[1]});
		await LayerxeWFRTyp.addStakePayment.call({from: accounts[0]});

		assert.equal(boolY0CuLss, true)
		await expect(LayerxeWFRTyp.addStakePayment.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressEorUUKQ = accounts[0]
		const LayerxeWFRTyp = await Layerx.new(addressEorUUKQ, {from: accounts[0]});
		const uintKXARJba = BigInt("1178")
		const addresskzfvo8q = accounts[2]
		const boolIR1jMu = true
		const boolNIE5ZXa = await LayerxeWFRTyp.approve.call(addresskzfvo8q, uintKXARJba, {from: accounts[0]});
		const uintHSMGLt = await LayerxeWFRTyp.getStakesNum.call({from: accounts[4]});
		const boolnWOA7F = await LayerxeWFRTyp.setIsPaused.call(boolIR1jMu, {from: accounts[0]});
		await LayerxeWFRTyp.addStakePayment.call({from: accounts[0]});

		assert.equal(boolNIE5ZXa, true)
		assert.equal(uintHSMGLt, BigInt("1"))
		await expect(LayerxeWFRTyp.addStakePayment.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressxV1wlJH = accounts[0]
		const LayerxeWFRTyp = await Layerx.new(addressxV1wlJH, {from: accounts[0]});
		const addressfh8OCZo = accounts[2]
		await LayerxeWFRTyp.addStakePayment.call({from: accounts[0]});
		const addressTyUM67N = await LayerxeWFRTyp.setNewStakeCreator.call(addressfh8OCZo, {from: accounts[0]});

		await expect(LayerxeWFRTyp.addStakePayment.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressLAF0ire = accounts[3]
		const LayerxOoSOkpl = await Layerx.new(addressLAF0ire, {from: accounts[2]});
		const addressu9jAwwz = "0x0000000000000000000000000000000000000001"
		const addressVOTR1De = accounts[3]
		const addressAwZVOCc = accounts[2]
		const uinty5Huwr0 = BigInt("907")
		const boolD5LEeCo = true
		const bytefaa083V = "0x05150e1b070b030e041f1e19171b08130a04121d0d170b13130e180313"
		const uintpEzynvU = BigInt("1719")
		const addressdOThEux = accounts[3]
		const addressaDJerpK = await LayerxOoSOkpl.transferOwnership.call(addressu9jAwwz, {from: accounts[3]});
		const uintFhhbl6v = await LayerxOoSOkpl.allowance.call(addressAwZVOCc, addressVOTR1De, {from: accounts[3]});
		const uintoOzvtXJ = await LayerxOoSOkpl.exist.call(uinty5Huwr0, {from: accounts[3]});
		const boolbFuAPtT = await LayerxOoSOkpl.setIsPaused.call(boolD5LEeCo, {from: accounts[3]});
		const boolXjLACPe = await LayerxOoSOkpl.approveAndCall.call(addressdOThEux, uintpEzynvU, bytefaa083V, {from: accounts[1]});

		assert.equal(uintFhhbl6v, BigInt("0"))
		await expect(LayerxOoSOkpl.exist.call(uinty5Huwr0, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})