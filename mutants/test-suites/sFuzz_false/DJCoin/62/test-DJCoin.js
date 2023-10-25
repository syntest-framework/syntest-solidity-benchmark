const DJCoin = artifacts.require("DJCoin");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('DJCoin', (accounts) => {
	it('test for DJCoin', async () => {
		const DJCoinV8LSFE5 = await DJCoin.new({from: "0x0000000000000000000000000000000000000001"});
		const uintovVbKaf = BigInt("84")
		const addressLKtcxL = accounts[1]
		const addresscM20FcX = "0x0000000000000000000000000000000000000001"
		const uint256sy7eDJM = await DJCoinV8LSFE5.totalSupply.call({from: accounts[3]});
		const boolQcPZi1 = await DJCoinV8LSFE5.approve.call(addressLKtcxL, uintovVbKaf, {from: accounts[1]});
		const addressW4ZtibX = await DJCoinV8LSFE5.transferOwnership.call(addresscM20FcX, {from: accounts[4]});
	});

	it('test for DJCoin', async () => {
		const DJCoincz5qrCY = await DJCoin.new({from: accounts[5]});
		const uintKtI90RN = BigInt("217")
		const addressZ88c0H5 = accounts[3]
		const addressaAJSPZV = accounts[0]
		const addressMmg6d6Z = accounts[0]
		const uintQSrOQDE = BigInt("1540")
		const addressog3ksvx = accounts[0]
		const addressXJ96Oh = accounts[1]
		const addressEgtFmi0 = accounts[0]
//		const booljFD4V2z = await DJCoincz5qrCY.transferFrom.call(addressaAJSPZV, addressZ88c0H5, uintKtI90RN, {from: accounts[4]});
//		const addressnHfL7jH = await DJCoincz5qrCY.transferOwnership.call(addressMmg6d6Z, {from: accounts[0]});
//		const boolwTPdIWz = await DJCoincz5qrCY.approve.call(addressog3ksvx, uintQSrOQDE, {from: accounts[1]});
//		const uint256Wd4U8JN = await DJCoincz5qrCY.allowance.call(addressEgtFmi0, addressXJ96Oh, {from: accounts[0]});

		await expect(DJCoincz5qrCY.transferFrom.call(addressaAJSPZV, addressZ88c0H5, uintKtI90RN, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinhOvTtPK = await DJCoin.new({from: accounts[3]});
		const uintN6z8uvZ = BigInt("365")
		const addressJevxC3 = accounts[4]
		const addressUrcnzup = accounts[1]
		const boolCrr7fiy = await DJCoinhOvTtPK.decreaseAllowance.call(addressJevxC3, uintN6z8uvZ, {from: accounts[1]});
		const uint256ZBxpnii = await DJCoinhOvTtPK.balanceOf.call(addressUrcnzup, {from: accounts[0]});

		assert.equal(boolCrr7fiy, true)
		assert.equal(uint256ZBxpnii, BigInt("0"))
	});

	it('test for DJCoin', async () => {
		const DJCoinQSgZA4K = await DJCoin.new({from: accounts[3]});
		const uintiopKr5 = BigInt("1478")
		const address2s2nu3 = accounts[4]
		const uintfbq9NWV = BigInt("975")
		const addressVUFGAZy = accounts[0]
		const bool0ap26s = await DJCoinQSgZA4K.approve.call(address2s2nu3, uintiopKr5, {from: accounts[0]});
		const addressyPSNQU = await DJCoinQSgZA4K.owner.call({from: accounts[5]});
		const boolFs6PZSY = await DJCoinQSgZA4K.approve.call(addressVUFGAZy, uintfbq9NWV, {from: accounts[0]});

		assert.equal(addressyPSNQU, 0x99598d7C00032403652A42C486641988a0Bda176)
		assert.equal(bool0ap26s, true)
		assert.equal(boolFs6PZSY, true)
	});

	it('test for DJCoin', async () => {
		const DJCoinTrNO2ru = await DJCoin.new({from: accounts[3]});
		const uintzI7F1u7 = BigInt("1055")
		const addressvYH95K1 = accounts[5]
		const addressIEL7jyn = accounts[3]
		const addressCxolW7D = accounts[3]
		const boolh5pSf0c = await DJCoinTrNO2ru.approve.call(addressvYH95K1, uintzI7F1u7, {from: accounts[3]});
		const uint256vGPXIT = await DJCoinTrNO2ru.allowance.call(addressCxolW7D, addressIEL7jyn, {from: accounts[1]});

		assert.equal(boolh5pSf0c, true)
		assert.equal(uint256vGPXIT, BigInt("0"))
	});

	it('test for DJCoin', async () => {
		const DJCoinUUKScty = await DJCoin.new({from: accounts[2]});
		const addressWKIlr3 = "0x0000000000000000000000000000000000000001"
//		await DJCoinUUKScty.renounceOwnership.call({from: accounts[1]});
//		const addressG4jBHo0 = await DJCoinUUKScty.validRecipient.call(addressWKIlr3, {from: accounts[4]});

		await expect(DJCoinUUKScty.renounceOwnership.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinRdaP2Eb = await DJCoin.new({from: accounts[0]});
		const addressDX6IH0T = accounts[0]
		const uintLBIGoqB = BigInt("750")
		const addressV96sSU = accounts[3]
		const uintMUWpRZp = BigInt("226")
		const addressD2J2Ouo = accounts[2]
		const uint256GnOJczd = await DJCoinRdaP2Eb.totalSupply.call({from: accounts[4]});
//		await DJCoinRdaP2Eb.onlyOwner.call({from: accounts[0]});
//		const addressqcJ4nJ9 = await DJCoinRdaP2Eb.validRecipient.call(addressDX6IH0T, {from: accounts[4]});
//		const boolb6zbHn2 = await DJCoinRdaP2Eb.decreaseAllowance.call(addressV96sSU, uintLBIGoqB, {from: accounts[3]});
//		const boolwHwYDO = await DJCoinRdaP2Eb.decreaseAllowance.call(addressD2J2Ouo, uintMUWpRZp, {from: accounts[0]});

		assert.equal(uint256GnOJczd, BigInt("2100000000000"))
		await expect(DJCoinRdaP2Eb.onlyOwner.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinhOvTtPK = await DJCoin.new({from: accounts[3]});
		const uintRs3EDXn = BigInt("365")
		const addressq03VWiY = accounts[5]
		const addressf0etyX7 = accounts[1]
		const uintFz2NBGL = BigInt("1085")
		const boolCrr7fiy = await DJCoinhOvTtPK.decreaseAllowance.call(addressq03VWiY, uintRs3EDXn, {from: accounts[1]});
		const uint2566hs53e = await DJCoinhOvTtPK.totalSupply.call({from: accounts[2]});
		const uint256ZBxpnii = await DJCoinhOvTtPK.balanceOf.call(addressf0etyX7, {from: accounts[0]});
		const boolZW91ud = await DJCoinhOvTtPK.changetokensPerBlock.call(uintFz2NBGL, {from: accounts[4]});

		assert.equal(boolCrr7fiy, true)
		assert.equal(boolZW91ud, true)
		assert.equal(uint2566hs53e, BigInt("2100000000000"))
		assert.equal(uint256ZBxpnii, BigInt("0"))
	});

	it('test for DJCoin', async () => {
		const DJCoinhOvTtPK = await DJCoin.new({from: accounts[3]});
		const uintALOFpMo = BigInt("365")
		const addressXSYUyRi = accounts[5]
		const addresstpFNSBl = accounts[1]
//		await DJCoinhOvTtPK.renounceOwnership.call({from: accounts[3]});
//		const boolCrr7fiy = await DJCoinhOvTtPK.decreaseAllowance.call(addressXSYUyRi, uintALOFpMo, {from: accounts[1]});
//		const uint256ZBxpnii = await DJCoinhOvTtPK.balanceOf.call(addresstpFNSBl, {from: accounts[0]});

		await expect(DJCoinhOvTtPK.renounceOwnership.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinhOvTtPK = await DJCoin.new({from: accounts[3]});
		const uintQQdnxu2 = BigInt("1700")
		const address6tBagC = accounts[4]
		const addressRv7wtmq = accounts[3]
		const boolFsribv1 = await DJCoinhOvTtPK.increaseAllowance.call(address6tBagC, uintQQdnxu2, {from: accounts[5]});
		const uint256ZBxpnii = await DJCoinhOvTtPK.balanceOf.call(addressRv7wtmq, {from: accounts[0]});

		assert.equal(boolFsribv1, true)
		assert.equal(uint256ZBxpnii, BigInt("2100000000000"))
	});

	it('test for DJCoin', async () => {
		const DJCoinhOvTtPK = await DJCoin.new({from: accounts[3]});
		const uintbMnspm = BigInt("1286")
		const addressSf1WIZ = accounts[4]
		const addressQjiZfUv = accounts[3]
//		const boolQr7PsfM = await DJCoinhOvTtPK.transfer.call(addressSf1WIZ, uintbMnspm, {from: accounts[5]});
//		const uint256ZBxpnii = await DJCoinhOvTtPK.balanceOf.call(addressQjiZfUv, {from: accounts[0]});

		await expect(DJCoinhOvTtPK.transfer.call(addressSf1WIZ, uintbMnspm, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinhOvTtPK = await DJCoin.new({from: accounts[3]});
		const addresscuMTKBA = accounts[3]
		const uintlQ3xsZr = BigInt("1249")
		const uintgeLPlV5 = BigInt("302")
		const uintn44EB56 = BigInt("46")
		const addressIKcFrGn = accounts[2]
		const uint256ZBxpnii = await DJCoinhOvTtPK.balanceOf.call(addresscuMTKBA, {from: accounts[0]});
		const uint256k6ZBFBF = await DJCoinhOvTtPK.burn.call(uintgeLPlV5, uintlQ3xsZr, {from: accounts[3]});
		const boolTVEAp1X = await DJCoinhOvTtPK.decreaseAllowance.call(addressIKcFrGn, uintn44EB56, {from: accounts[3]});

		assert.equal(boolTVEAp1X, true)
		assert.equal(uint256ZBxpnii, BigInt("2100000000000"))
		assert.equal(uint256k6ZBFBF, BigInt("1837710000000"))
	});

	it('test for DJCoin', async () => {
		const DJCoinNWDdZl = await DJCoin.new({from: accounts[4]});
		const uintledjTwL = BigInt("1948")
		const addressAhVRZkO = accounts[5]
		const addressOfmu99S = accounts[1]
		const addresslZiMlah = accounts[0]
		const boola7GGPyq = await DJCoinNWDdZl.changetokensPerBlock.call(uintledjTwL, {from: accounts[1]});
		const addressCNFkjzn = await DJCoinNWDdZl.transferOwnership.call(addressAhVRZkO, {from: accounts[4]});
		const uint256hPgH2cx = await DJCoinNWDdZl.balanceOf.call(addressOfmu99S, {from: accounts[0]});
		const uint256FpiLuIC = await DJCoinNWDdZl.balanceOf.call(addresslZiMlah, {from: accounts[0]});

		assert.equal(boola7GGPyq, true)
		assert.equal(uint256FpiLuIC, BigInt("0"))
		assert.equal(uint256hPgH2cx, BigInt("0"))
	});

	it('test for DJCoin', async () => {
		const DJCoinxgn2tBi = await DJCoin.new({from: accounts[0]});
		const uintwIrI7uW = BigInt("0")
		const addressECPmie3 = accounts[2]
		const boolSrK8OM = await DJCoinxgn2tBi.transfer.call(addressECPmie3, uintwIrI7uW, {from: accounts[4]});
		const uint2560AjfXv = await DJCoinxgn2tBi.totalSupply.call({from: accounts[0]});

		assert.equal(boolSrK8OM, true)
		assert.equal(uint2560AjfXv, BigInt("2100000000000"))
	});
})