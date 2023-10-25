const LIBERAPAY = artifacts.require("LIBERAPAY");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('LIBERAPAY', (accounts) => {
	it('test for LIBERAPAY', async () => {
		const LIBERAPAYUSG4S0J = await LIBERAPAY.new({from: accounts[4]});
		const uintl0cvGYl = BigInt("624")
		const addressmusXiEI = accounts[2]
		const addressqHjm6qd = accounts[5]
		const uintKM4kcSM = BigInt("156")
		const addressrNg7Fe5 = "0x0000000000000000000000000000000000000001"
//		const boolRHi7O0J = await LIBERAPAYUSG4S0J.burn.call(uintl0cvGYl, {from: accounts[1]});
//		const boolEI14iS = await LIBERAPAYUSG4S0J.freezeAccount.call(addressmusXiEI, {from: accounts[5]});
//		const bool0eThuG = await LIBERAPAYUSG4S0J.freezeAccount.call(addressqHjm6qd, {from: accounts[4]});
//		const boolyFzfhBk = await LIBERAPAYUSG4S0J.approve.call(addressrNg7Fe5, uintKM4kcSM, {from: accounts[1]});

		await expect(LIBERAPAYUSG4S0J.burn.call(uintl0cvGYl, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYZdQa7f = await LIBERAPAY.new({from: accounts[3]});
		const addressLq8lQBR = accounts[5]
		const addressMO6iqDH = accounts[1]
		const addressSLQrFwp = accounts[3]
		const uinthANeTUs = BigInt("921")
		const addresstQAGGUD = "0x0000000000000000000000000000000000000001"
		const uint256sMLcoa3 = await LIBERAPAYZdQa7f.currentBalanceOf.call(addressLq8lQBR, {from: accounts[3]});
		const uint256VqSg2lO = await LIBERAPAYZdQa7f.balanceOf.call(addressMO6iqDH, {from: accounts[3]});
//		const addressG7FnVK2 = await LIBERAPAYZdQa7f.notFrozen.call(addressSLQrFwp, {from: accounts[1]});
//		await LIBERAPAYZdQa7f.unpause.call({from: accounts[0]});
//		const boolBuOrl7I = await LIBERAPAYZdQa7f.burnFrom.call(addresstQAGGUD, uinthANeTUs, {from: accounts[2]});

		assert.equal(uint256VqSg2lO, BigInt("0"))
		assert.equal(uint256sMLcoa3, BigInt("0"))
		await expect(LIBERAPAYZdQa7f.notFrozen.call(addressSLQrFwp, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYFRAl8Vb = await LIBERAPAY.new({from: accounts[1]});
		const uint256xvKbnJL = await LIBERAPAYFRAl8Vb.totalSupply.call({from: accounts[4]});
//		await LIBERAPAYFRAl8Vb.onlyOwner.call({from: accounts[4]});

		assert.equal(uint256xvKbnJL, BigInt("3000000000000000000000000000"))
		await expect(LIBERAPAYFRAl8Vb.onlyOwner.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYt29CJjR = await LIBERAPAY.new({from: "0x0000000000000000000000000000000000000001"});
		const addressxHwJ1DT = accounts[1]
		const uintoMmgh5G = BigInt("1378")
		const addressvr24fwX = accounts[4]
		await LIBERAPAYt29CJjR.pause.call({from: accounts[0]});
		await LIBERAPAYt29CJjR.onlyNewOwner.call({from: accounts[5]});
		const uint256GXR9JwG = await LIBERAPAYt29CJjR.currentBalanceOf.call(addressxHwJ1DT, {from: "0x0000000000000000000000000000000000000001"});
		const boolVV0trlz = await LIBERAPAYt29CJjR.decreaseAllowance.call(addressvr24fwX, uintoMmgh5G, {from: accounts[0]});
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYIPyOqKq = await LIBERAPAY.new({from: accounts[4]});
		const uintulAjgsS = BigInt("481")
		const addressQYJLUm = accounts[4]
		const boolu76Og72 = await LIBERAPAYIPyOqKq.approve.call(addressQYJLUm, uintulAjgsS, {from: accounts[1]});
//		await LIBERAPAYIPyOqKq.f.call({from: accounts[1]});

		assert.equal(boolu76Og72, true)
		await expect(LIBERAPAYIPyOqKq.f.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYubmMY9T = await LIBERAPAY.new({from: accounts[1]});
		const uintVrFiCZ2 = BigInt("1234")
		const uintbmRvlne = BigInt("1043")
		const addressLgyKnG0 = accounts[4]
		const addressX6K1FGd = accounts[3]
		const booli9QIxTO = await LIBERAPAYubmMY9T.burn.call(uintVrFiCZ2, {from: accounts[1]});
		const boolknqlM22 = await LIBERAPAYubmMY9T.increaseAllowance.call(addressLgyKnG0, uintbmRvlne, {from: accounts[4]});
		const uint256CJFZsjQ = await LIBERAPAYubmMY9T.balanceOf.call(addressX6K1FGd, {from: accounts[1]});
//		await LIBERAPAYubmMY9T.onlyNewOwner.call({from: accounts[4]});

		assert.equal(booli9QIxTO, true)
		assert.equal(boolknqlM22, true)
		assert.equal(uint256CJFZsjQ, BigInt("0"))
		await expect(LIBERAPAYubmMY9T.onlyNewOwner.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYbY46OnD = await LIBERAPAY.new({from: accounts[3]});
		const uint6Yt0Ph = BigInt("47")
		const addressg16GAh = accounts[2]
		const uintFibygcS = BigInt("798")
		const addressJNXIKzo = "0x0000000000000000000000000000000000000001"
		const addressEAcmoya = "0x0000000000000000000000000000000000000001"
//		await LIBERAPAYbY46OnD.showLockState.call(addressg16GAh, uint6Yt0Ph, {from: accounts[2]});
//		const boolZ1ehlD = await LIBERAPAYbY46OnD.burn.call(uintFibygcS, {from: accounts[0]});
//		const uint256FU5TgPf = await LIBERAPAYbY46OnD.allowance.call(addressEAcmoya, addressJNXIKzo, {from: "0x0000000000000000000000000000000000000001"});

		await expect(LIBERAPAYbY46OnD.showLockState.call(addressg16GAh, uint6Yt0Ph, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYZdQa7f = await LIBERAPAY.new({from: accounts[3]});
		const uintO2meOO5 = BigInt("2000")
		const addressxDO8TvD = "0x0000000000000000000000000000000000000001"
		const addressB4qMOWZ = accounts[5]
		const addresseq1T0fb = accounts[1]
		const addressprmT55N = accounts[4]
		const uintnzs6sq2 = BigInt("921")
		const addressBRHRGjG = "0x0000000000000000000000000000000000000001"
//		const boolmQfMcyi = await LIBERAPAYZdQa7f.transfer.call(addressxDO8TvD, uintO2meOO5, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256sMLcoa3 = await LIBERAPAYZdQa7f.currentBalanceOf.call(addressB4qMOWZ, {from: accounts[3]});
//		const uint256VqSg2lO = await LIBERAPAYZdQa7f.balanceOf.call(addresseq1T0fb, {from: accounts[3]});
//		const addressG7FnVK2 = await LIBERAPAYZdQa7f.notFrozen.call(addressprmT55N, {from: accounts[1]});
//		const uint256IWR9JBQ = await LIBERAPAYZdQa7f.getNowTime.call({from: accounts[5]});
//		await LIBERAPAYZdQa7f.unpause.call({from: accounts[0]});
//		const boolBuOrl7I = await LIBERAPAYZdQa7f.burnFrom.call(addressBRHRGjG, uintnzs6sq2, {from: accounts[2]});

		await expect(LIBERAPAYZdQa7f.transfer.call(addressxDO8TvD, uintO2meOO5, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYbY46OnD = await LIBERAPAY.new({from: accounts[3]});
		const uintCZwtV2I = BigInt("47")
		const addressuXrdndK = accounts[2]
		const uintzNUyJPV = BigInt("1294")
		const addressk5b7EoS = accounts[1]
		const addressNQEp2lw = "0x0000000000000000000000000000000000000001"
		const addressLMhuUGE = "0x0000000000000000000000000000000000000001"
//		await LIBERAPAYbY46OnD.showLockState.call(addressuXrdndK, uintCZwtV2I, {from: accounts[2]});
//		const boolZqzXPTE = await LIBERAPAYbY46OnD.increaseAllowance.call(addressk5b7EoS, uintzNUyJPV, {from: accounts[1]});
//		const uint256FU5TgPf = await LIBERAPAYbY46OnD.allowance.call(addressLMhuUGE, addressNQEp2lw, {from: "0x0000000000000000000000000000000000000001"});

		await expect(LIBERAPAYbY46OnD.showLockState.call(addressuXrdndK, uintCZwtV2I, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYZdQa7f = await LIBERAPAY.new({from: accounts[3]});
		const addressKeoOU9v = accounts[5]
		const addressSfIQbW3 = accounts[1]
		const uintEmoDez = BigInt("921")
		const addressJWPt9G = "0x0000000000000000000000000000000000000001"
		const uint256sMLcoa3 = await LIBERAPAYZdQa7f.currentBalanceOf.call(addressKeoOU9v, {from: accounts[3]});
		const uint256VqSg2lO = await LIBERAPAYZdQa7f.balanceOf.call(addressSfIQbW3, {from: accounts[3]});
//		const boolBuOrl7I = await LIBERAPAYZdQa7f.burnFrom.call(addressJWPt9G, uintEmoDez, {from: accounts[2]});

		assert.equal(uint256VqSg2lO, BigInt("0"))
		assert.equal(uint256sMLcoa3, BigInt("0"))
		await expect(LIBERAPAYZdQa7f.burnFrom.call(addressJWPt9G, uintEmoDez, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYubmMY9T = await LIBERAPAY.new({from: accounts[1]});
		const uintqxsVRRF = BigInt("1234")
		const uintmBSduWR = BigInt("1043")
		const addressWGpcJo = accounts[4]
		const addressjNzjGsp = accounts[5]
		const uintknputsy = BigInt("2008")
		const uintDK2FJ4S = BigInt("526")
		const addressxPXR9n7 = accounts[4]
		const booli9QIxTO = await LIBERAPAYubmMY9T.burn.call(uintqxsVRRF, {from: accounts[1]});
		const boolknqlM22 = await LIBERAPAYubmMY9T.increaseAllowance.call(addressWGpcJo, uintmBSduWR, {from: accounts[4]});
		const uint256yFaMQR = await LIBERAPAYubmMY9T.getNowTime.call({from: accounts[5]});
		const uint256CJFZsjQ = await LIBERAPAYubmMY9T.balanceOf.call(addressjNzjGsp, {from: accounts[1]});
//		const booljFBDSHD = await LIBERAPAYubmMY9T.burn.call(uintknputsy, {from: accounts[0]});
//		const boolbZjVrAJ = await LIBERAPAYubmMY9T.increaseAllowance.call(addressxPXR9n7, uintDK2FJ4S, {from: accounts[0]});
//		const uint256LiSEawx = await LIBERAPAYubmMY9T.getNowTime.call({from: accounts[2]});
//		await LIBERAPAYubmMY9T.onlyNewOwner.call({from: accounts[4]});

		assert.equal(booli9QIxTO, true)
		assert.equal(boolknqlM22, true)
		assert.equal(uint256CJFZsjQ, BigInt("0"))
		assert.equal(uint256yFaMQR, BigInt("1630229911"))
		await expect(LIBERAPAYubmMY9T.burn.call(uintknputsy, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYZdQa7f = await LIBERAPAY.new({from: accounts[3]});
		const addressQtsZEBL = accounts[6]
		const uintEPYjTo7 = BigInt("457")
		const addressArzOzlm = accounts[3]
		const addressPppLSF = accounts[1]
		const uintBlcXUUt = BigInt("921")
		const addressRk0RPD5 = "0x0000000000000000000000000000000000000001"
		const uint256sMLcoa3 = await LIBERAPAYZdQa7f.currentBalanceOf.call(addressQtsZEBL, {from: accounts[3]});
//		const boolzQQ861N = await LIBERAPAYZdQa7f.mint.call(addressArzOzlm, uintEPYjTo7, {from: accounts[3]});
//		const uint256VqSg2lO = await LIBERAPAYZdQa7f.balanceOf.call(addressPppLSF, {from: accounts[3]});
//		const boolBuOrl7I = await LIBERAPAYZdQa7f.burnFrom.call(addressRk0RPD5, uintBlcXUUt, {from: accounts[2]});

		assert.equal(uint256sMLcoa3, BigInt("0"))
		await expect(LIBERAPAYZdQa7f.mint.call(addressArzOzlm, uintEPYjTo7, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYZdQa7f = await LIBERAPAY.new({from: accounts[3]});
		const uintfu8MFTA = BigInt("1931")
		const addressKtcwtQM = accounts[2]
		const addressOQ4f8Uh = accounts[5]
		const uintNJDe40X = BigInt("921")
		const addressdxiN79E = "0x0000000000000000000000000000000000000001"
//		const boolcWSdqKm = await LIBERAPAYZdQa7f.decreaseAllowance.call(addressKtcwtQM, uintfu8MFTA, {from: accounts[5]});
//		const boolsYSJdzR = await LIBERAPAYZdQa7f.acceptOwnership.call({from: accounts[4]});
//		const uint256sMLcoa3 = await LIBERAPAYZdQa7f.currentBalanceOf.call(addressOQ4f8Uh, {from: accounts[3]});
//		const boolBuOrl7I = await LIBERAPAYZdQa7f.burnFrom.call(addressdxiN79E, uintNJDe40X, {from: accounts[2]});
//		await LIBERAPAYZdQa7f.unpause.call({from: accounts[3]});

		await expect(LIBERAPAYZdQa7f.decreaseAllowance.call(addressKtcwtQM, uintfu8MFTA, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYZdQa7f = await LIBERAPAY.new({from: accounts[3]});
		const addressMW5BhEn = accounts[5]
		const addressqWDSeKv = accounts[1]
		const uintFgUeJIu = BigInt("666")
		const addresss3Hv3kT = accounts[4]
		const addressrOGiyiZ = accounts[2]
		const uint256sMLcoa3 = await LIBERAPAYZdQa7f.currentBalanceOf.call(addressMW5BhEn, {from: accounts[3]});
		const uint256VqSg2lO = await LIBERAPAYZdQa7f.balanceOf.call(addressqWDSeKv, {from: accounts[3]});
//		const boolEs99MjF = await LIBERAPAYZdQa7f.transferFrom.call(addressrOGiyiZ, addresss3Hv3kT, uintFgUeJIu, {from: accounts[1]});
//		await LIBERAPAYZdQa7f.unpause.call({from: accounts[0]});

		assert.equal(uint256VqSg2lO, BigInt("0"))
		assert.equal(uint256sMLcoa3, BigInt("0"))
		await expect(LIBERAPAYZdQa7f.transferFrom.call(addressrOGiyiZ, addresss3Hv3kT, uintFgUeJIu, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYbY46OnD = await LIBERAPAY.new({from: accounts[3]});
		const addressx7oBAtO = "0x0000000000000000000000000000000000000001"
		const addresss3ZpD8g = "0x0000000000000000000000000000000000000000"
		const addressfxOeA0d = accounts[0]
		const uint256FU5TgPf = await LIBERAPAYbY46OnD.allowance.call(addresss3ZpD8g, addressx7oBAtO, {from: "0x0000000000000000000000000000000000000001"});
		const addressHxwcQB1 = await LIBERAPAYbY46OnD.upgradeTo.call(addressfxOeA0d, {from: accounts[3]});

		assert.equal(uint256FU5TgPf, BigInt("0"))
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYZdQa7f = await LIBERAPAY.new({from: accounts[3]});
		const addresszwuYElZ = accounts[5]
		const addresshdNctbM = accounts[0]
		const addressMV0FUVs = accounts[2]
		const uintFyGAysS = BigInt("921")
		const addressMvR5cra = "0x0000000000000000000000000000000000000001"
		const uint256sMLcoa3 = await LIBERAPAYZdQa7f.currentBalanceOf.call(addresszwuYElZ, {from: accounts[3]});
		const boolxh2dwRB = await LIBERAPAYZdQa7f.freezeAccount.call(addresshdNctbM, {from: accounts[3]});
		const uint256VqSg2lO = await LIBERAPAYZdQa7f.balanceOf.call(addressMV0FUVs, {from: accounts[3]});
//		const boolBuOrl7I = await LIBERAPAYZdQa7f.burnFrom.call(addressMvR5cra, uintFyGAysS, {from: accounts[2]});

		assert.equal(boolxh2dwRB, true)
		assert.equal(uint256VqSg2lO, BigInt("0"))
		assert.equal(uint256sMLcoa3, BigInt("0"))
		await expect(LIBERAPAYZdQa7f.burnFrom.call(addressMvR5cra, uintFyGAysS, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYbY46OnD = await LIBERAPAY.new({from: accounts[3]});
		const addressPBPX7BX = "0x0000000000000000000000000000000000000001"
		const addressLNwAPyg = "0x0000000000000000000000000000000000000000"
		const addresskEwW1zK = accounts[1]
		const addressWnyPDfo = accounts[2]
		const addressetaVCRD = accounts[2]
		const uint256FU5TgPf = await LIBERAPAYbY46OnD.allowance.call(addressLNwAPyg, addressPBPX7BX, {from: "0x0000000000000000000000000000000000000001"});
		const addressE6HUNY = await LIBERAPAYbY46OnD.transferOwnership.call(addresskEwW1zK, {from: accounts[3]});
		const uint2568Xnbsv = await LIBERAPAYbY46OnD.allowance.call(addressetaVCRD, addressWnyPDfo, {from: accounts[4]});

		assert.equal(uint2568Xnbsv, BigInt("0"))
		assert.equal(uint256FU5TgPf, BigInt("0"))
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYZdQa7f = await LIBERAPAY.new({from: accounts[3]});
		const uintT2F41pF = BigInt("1877")
		const addressApqnDCS = accounts[5]
		const addressHMOeDXg = accounts[2]
		const uintOLafEMj = BigInt("921")
		const address9xtWPB = "0x0000000000000000000000000000000000000001"
//		const boolcSJr8Rs = await LIBERAPAYZdQa7f.unlock.call(addressApqnDCS, uintT2F41pF, {from: accounts[3]});
//		const uint256VqSg2lO = await LIBERAPAYZdQa7f.balanceOf.call(addressHMOeDXg, {from: accounts[3]});
//		const boolBuOrl7I = await LIBERAPAYZdQa7f.burnFrom.call(address9xtWPB, uintOLafEMj, {from: accounts[2]});

		await expect(LIBERAPAYZdQa7f.unlock.call(addressApqnDCS, uintT2F41pF, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYZdQa7f = await LIBERAPAY.new({from: accounts[3]});
		const addressguCu6h = accounts[0]
		const uintmszLNqk = BigInt("1877")
		const addressnZ72NVU = accounts[5]
		const addressxgBS0Od = accounts[2]
		const uintHAWYWwI = BigInt("921")
		const addressLGVO0uR = "0x0000000000000000000000000000000000000001"
		const addressM8E0KU = accounts[2]
//		const boolUiK8X8 = await LIBERAPAYZdQa7f.unfreezeAccount.call(addressguCu6h, {from: accounts[3]});
//		const boolcSJr8Rs = await LIBERAPAYZdQa7f.unlock.call(addressnZ72NVU, uintmszLNqk, {from: accounts[3]});
//		const uint256VqSg2lO = await LIBERAPAYZdQa7f.balanceOf.call(addressxgBS0Od, {from: accounts[3]});
//		const boolBuOrl7I = await LIBERAPAYZdQa7f.burnFrom.call(addressLGVO0uR, uintHAWYWwI, {from: accounts[2]});
//		const uint256W44H7z = await LIBERAPAYZdQa7f.balanceOf.call(addressM8E0KU, {from: accounts[0]});

		await expect(LIBERAPAYZdQa7f.unfreezeAccount.call(addressguCu6h, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYbY46OnD = await LIBERAPAY.new({from: accounts[3]});
		const uintfq9EU4M = BigInt("59")
		const addressJpEsTBo = accounts[3]
		const addressqecuMpT = accounts[4]
//		await LIBERAPAYbY46OnD.showLockState.call(addressJpEsTBo, uintfq9EU4M, {from: accounts[2]});
//		await LIBERAPAYbY46OnD.pause.call({from: accounts[3]});
//		const uint256GjCY1v8 = await LIBERAPAYbY46OnD.currentBalanceOf.call(addressqecuMpT, {from: accounts[2]});

		await expect(LIBERAPAYbY46OnD.showLockState.call(addressJpEsTBo, uintfq9EU4M, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYZdQa7f = await LIBERAPAY.new({from: accounts[3]});
		const uintqPnETfP = BigInt("1775")
		const addressASvfLb = accounts[1]
		const uint43OY40 = BigInt("699")
		const addressXfW10QJ = accounts[3]
		const uintsXpZbjY = BigInt("666")
		const addressFiXDzoT = accounts[5]
		const addressKa6Akx5 = accounts[3]
		const boolXtgsn8z = await LIBERAPAYZdQa7f.distribute.call(addressASvfLb, uintqPnETfP, {from: accounts[3]});
//		const boolZIUAskk = await LIBERAPAYZdQa7f.distribute.call(addressXfW10QJ, uint43OY40, {from: "0x0000000000000000000000000000000000000001"});
//		const boolEs99MjF = await LIBERAPAYZdQa7f.transferFrom.call(addressKa6Akx5, addressFiXDzoT, uintsXpZbjY, {from: accounts[1]});

		assert.equal(boolXtgsn8z, true)
		await expect(LIBERAPAYZdQa7f.distribute.call(addressXfW10QJ, uint43OY40, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYZdQa7f = await LIBERAPAY.new({from: accounts[3]});
		const addressZzT8TAa = accounts[4]
		const uintSEBegBf = BigInt("1549")
		const uintqeEXtIK = BigInt("61")
		const addressCgg1eZR = accounts[1]
		const uintvDh9TpM = BigInt("1869")
		const addressN4dwIAq = accounts[6]
		const uint256QdVzzSq = await LIBERAPAYZdQa7f.currentBalanceOf.call(addressZzT8TAa, {from: accounts[0]});
//		const boolKwIx8xw = await LIBERAPAYZdQa7f.lock.call(addressCgg1eZR, uintqeEXtIK, uintSEBegBf, {from: accounts[3]});
//		await LIBERAPAYZdQa7f.unpause.call({from: accounts[2]});
//		const boolcSJr8Rs = await LIBERAPAYZdQa7f.unlock.call(addressN4dwIAq, uintvDh9TpM, {from: accounts[3]});

		assert.equal(uint256QdVzzSq, BigInt("0"))
		await expect(LIBERAPAYZdQa7f.lock.call(addressCgg1eZR, uintqeEXtIK, uintSEBegBf, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})