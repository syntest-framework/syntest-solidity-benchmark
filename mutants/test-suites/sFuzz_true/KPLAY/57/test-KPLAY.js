const KPLAY = artifacts.require("KPLAY");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('KPLAY', (accounts) => {
	it('test for KPLAY', async () => {
		const KPLAYAqzxKiw = await KPLAY.new({from: accounts[1]});
		const addressA0wdiUb = accounts[2]
//		await KPLAYAqzxKiw.whenNotPaused.call({from: accounts[1]});
//		const uint256ICrHtcD = await KPLAYAqzxKiw.totalSupply.call({from: accounts[1]});
//		const uint256ap2WiRB = await KPLAYAqzxKiw.balanceOf.call(addressA0wdiUb, {from: accounts[1]});

		await expect(KPLAYAqzxKiw.whenNotPaused.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYGX8Yde = await KPLAY.new({from: accounts[4]});
		const uinth5f3EHK = BigInt("1816")
		const addresszukggLb = accounts[1]
		const uintuAAR0Xo = BigInt("1493")
		const addressU1bO3MF = accounts[1]
		const uintJvFZ51c = BigInt("874")
		const addressIUOgEvk = accounts[2]
//		await KPLAYGX8Yde.lockState.call(addresszukggLb, uinth5f3EHK, {from: accounts[4]});
//		const boolxIaLsTE = await KPLAYGX8Yde.increaseAllowance.call(addressU1bO3MF, uintuAAR0Xo, {from: accounts[3]});
//		const uint256v1pqry6 = await KPLAYGX8Yde.afterTime.call(uintJvFZ51c, {from: accounts[4]});
//		const uint256uUduuZX = await KPLAYGX8Yde.currentTime.call({from: accounts[5]});
//		const boolGZFBY3T = await KPLAYGX8Yde.isFrozen.call(addressIUOgEvk, {from: accounts[4]});
//		await KPLAYGX8Yde.whenNotPaused.call({from: accounts[2]});

		await expect(KPLAYGX8Yde.lockState.call(addresszukggLb, uinth5f3EHK, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYKvfK9fh = await KPLAY.new({from: "0x0000000000000000000000000000000000000001"});
		const addressUIIEwV7 = accounts[3]
		const uinta73Xc68 = BigInt("835")
		const addressSH6CuZL = accounts[3]
		const uintY6iLXwf = BigInt("946")
		const addressMFBGFF0 = accounts[3]
		await KPLAYKvfK9fh.whenPaused.call({from: accounts[2]});
		const uint256kcZ1Zw = await KPLAYKvfK9fh.lockCount.call(addressUIIEwV7, {from: accounts[2]});
		const boolXbY5KZY = await KPLAYKvfK9fh.increaseAllowance.call(addressSH6CuZL, uinta73Xc68, {from: accounts[3]});
		await KPLAYKvfK9fh.whenNotFrozen.call({from: accounts[1]});
		const boolHtwisbf = await KPLAYKvfK9fh.mint.call(addressMFBGFF0, uintY6iLXwf, {from: accounts[3]});
		await KPLAYKvfK9fh.whenPaused.call({from: accounts[0]});
	});

	it('test for KPLAY', async () => {
		const KPLAYdn2n5m5 = await KPLAY.new({from: accounts[4]});
		const uintEnhRhn = BigInt("1600")
		const addressoaXCTA = "0x0000000000000000000000000000000000000001"
		const addressWObwWT = accounts[4]
		const addressHpoKm0 = accounts[2]
//		const boolrA8Pr96 = await KPLAYdn2n5m5.decreaseAllowance.call(addressoaXCTA, uintEnhRhn, {from: accounts[4]});
//		const addressjlsGpQj = await KPLAYdn2n5m5.freeze.call(addressWObwWT, {from: accounts[3]});
//		const uint256eBKIcJ = await KPLAYdn2n5m5.balanceOf.call(addressHpoKm0, {from: accounts[0]});

		await expect(KPLAYdn2n5m5.decreaseAllowance.call(addressoaXCTA, uintEnhRhn, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYgpyUBz0 = await KPLAY.new({from: accounts[3]});
		const uintAOXWGD = BigInt("2024")
		const addresso7yWiet = accounts[2]
		const uintXURn1F6 = BigInt("1028")
		const addressCZNVdbP = accounts[4]
//		const boolra9UyJ = await KPLAYgpyUBz0.transfer.call(addresso7yWiet, uintAOXWGD, {from: accounts[1]});
//		await KPLAYgpyUBz0.onlyOwner.call({from: accounts[5]});
//		const addressvsK2LMu = await KPLAYgpyUBz0.unlock.call(addressCZNVdbP, uintXURn1F6, {from: accounts[3]});

		await expect(KPLAYgpyUBz0.transfer.call(addresso7yWiet, uintAOXWGD, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYJ1MSY23 = await KPLAY.new({from: accounts[1]});
		const uintexC2V0W = BigInt("1474")
		const addressNJFqGgs = accounts[4]
		const addressc1xjA87 = accounts[1]
		const uintBAochFT = BigInt("552")
		const addressDGU2qup = accounts[4]
		const addressThCz44t = accounts[3]
		const boolkbae5R2 = await KPLAYJ1MSY23.increaseAllowance.call(addressNJFqGgs, uintexC2V0W, {from: accounts[0]});
		const uint256xEfLwDG = await KPLAYJ1MSY23.lockCount.call(addressc1xjA87, {from: accounts[2]});
//		const boolvW8B86A = await KPLAYJ1MSY23.transferFrom.call(addressThCz44t, addressDGU2qup, uintBAochFT, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolkbae5R2, true)
		assert.equal(uint256xEfLwDG, BigInt("0"))
		await expect(KPLAYJ1MSY23.transferFrom.call(addressThCz44t, addressDGU2qup, uintBAochFT, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYweZlHg = await KPLAY.new({from: accounts[1]});
		const uintgDvWpNh = BigInt("961")
		const uintlY9LVRJ = BigInt("1592")
		const uint256ZHPRoIo = await KPLAYweZlHg.afterTime.call(uintgDvWpNh, {from: accounts[2]});
		const uint256vafojqr = await KPLAYweZlHg.afterTime.call(uintlY9LVRJ, {from: accounts[4]});
//		await KPLAYweZlHg.unpause.call({from: accounts[1]});
//		await KPLAYweZlHg.whenNotPaused.call({from: accounts[1]});

		assert.equal(uint256ZHPRoIo, BigInt("1630229176"))
		assert.equal(uint256vafojqr, BigInt("1630229807"))
		await expect(KPLAYweZlHg.unpause.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYdn2n5m5 = await KPLAY.new({from: accounts[4]});
		const uintW6Po2s7 = BigInt("1619")
		const uintko58ihv = BigInt("1190")
		const addressYEEgvnl = accounts[3]
		const uintID45Cr2 = BigInt("1602")
		const addressXtiz426 = "0x0000000000000000000000000000000000000001"
		const addressgKlUh7W = accounts[4]
		const addresskY4BLZ2 = accounts[2]
//		const addressunD3ZA4 = await KPLAYdn2n5m5.lock.call(addressYEEgvnl, uintko58ihv, uintW6Po2s7, {from: accounts[3]});
//		const boolrA8Pr96 = await KPLAYdn2n5m5.decreaseAllowance.call(addressXtiz426, uintID45Cr2, {from: accounts[4]});
//		const addressjlsGpQj = await KPLAYdn2n5m5.freeze.call(addressgKlUh7W, {from: accounts[3]});
//		const uint256eBKIcJ = await KPLAYdn2n5m5.balanceOf.call(addresskY4BLZ2, {from: accounts[0]});

		await expect(KPLAYdn2n5m5.lock.call(addressYEEgvnl, uintko58ihv, uintW6Po2s7, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYRTqdxsK = await KPLAY.new({from: accounts[3]});
		const addressV5aa5wh = accounts[3]
		const addressYIe0Uq = accounts[1]
		const uintGclz2t = BigInt("1144")
		const addressWFolyM5 = "0x0000000000000000000000000000000000000001"
		const uint256GiLCGv = await KPLAYRTqdxsK.balanceOf.call(addressV5aa5wh, {from: accounts[0]});
		const boolbhbbWwT = await KPLAYRTqdxsK.isFrozen.call(addressYIe0Uq, {from: accounts[0]});
//		const boolPG51tVi = await KPLAYRTqdxsK.mint.call(addressWFolyM5, uintGclz2t, {from: accounts[2]});
//		const uint256CN4zrM = await KPLAYRTqdxsK.currentTime.call({from: accounts[0]});

		assert.equal(boolbhbbWwT, false)
		assert.equal(uint256GiLCGv, BigInt("10000000000000000"))
		await expect(KPLAYRTqdxsK.mint.call(addressWFolyM5, uintGclz2t, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYdn2n5m5 = await KPLAY.new({from: accounts[4]});
		const uintUZD9nXh = BigInt("1600")
		const addressxpPeYcw = "0x00000000000000000000000000000000000000-1"
		const addressJ1iz88c = accounts[2]
		const uintwmR1ds3 = BigInt("327")
		const addressnu2beVO = accounts[2]
//		const boolrA8Pr96 = await KPLAYdn2n5m5.decreaseAllowance.call(addressxpPeYcw, uintUZD9nXh, {from: accounts[4]});
//		const uint256eBKIcJ = await KPLAYdn2n5m5.balanceOf.call(addressJ1iz88c, {from: accounts[0]});
//		const addressbmBCtlL = await KPLAYdn2n5m5.burn.call(addressnu2beVO, uintwmR1ds3, {from: accounts[0]});

		await expect(KPLAYdn2n5m5.decreaseAllowance.call(addressxpPeYcw, uintUZD9nXh, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYgpyUBz0 = await KPLAY.new({from: accounts[3]});
		const uintN0KeeZ = BigInt("447")
		const addressWQdsYG = accounts[2]
		const uintEyyn2nq = BigInt("2024")
		const addresseMFmn5H = accounts[3]
		const uintP1xRY4I = BigInt("1393")
		const addresslydyvU7 = accounts[5]
		const uintYzux9DH = BigInt("1028")
		const addressbm3e1SH = accounts[4]
		const boolOelrge = await KPLAYgpyUBz0.transfer.call(addressWQdsYG, uintN0KeeZ, {from: accounts[3]});
//		const boolra9UyJ = await KPLAYgpyUBz0.transfer.call(addresseMFmn5H, uintEyyn2nq, {from: accounts[1]});
//		const addresspXbbV1k = await KPLAYgpyUBz0.unlock.call(addresslydyvU7, uintP1xRY4I, {from: "0x0000000000000000000000000000000000000001"});
//		const addressvsK2LMu = await KPLAYgpyUBz0.unlock.call(addressbm3e1SH, uintYzux9DH, {from: accounts[3]});

		assert.equal(boolOelrge, true)
		await expect(KPLAYgpyUBz0.transfer.call(addresseMFmn5H, uintEyyn2nq, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYRTqdxsK = await KPLAY.new({from: accounts[3]});
		const addressu1p6IDV = accounts[3]
		const addressNhQpfN9 = accounts[1]
		const addressYobhVs7 = accounts[4]
		const addressHDhJ9Wq = accounts[2]
		const uintN6UJQTs = BigInt("1144")
		const addressTwCuVGa = "0x0000000000000000000000000000000000000001"
		const uint256GiLCGv = await KPLAYRTqdxsK.balanceOf.call(addressu1p6IDV, {from: accounts[0]});
		const boolbhbbWwT = await KPLAYRTqdxsK.isFrozen.call(addressNhQpfN9, {from: accounts[0]});
		const uint256efL9QOu = await KPLAYRTqdxsK.allowance.call(addressHDhJ9Wq, addressYobhVs7, {from: accounts[3]});
//		await KPLAYRTqdxsK.onlyOwner.call({from: accounts[1]});
//		const boolPG51tVi = await KPLAYRTqdxsK.mint.call(addressTwCuVGa, uintN6UJQTs, {from: accounts[2]});
//		const uint256CN4zrM = await KPLAYRTqdxsK.currentTime.call({from: accounts[0]});

		assert.equal(boolbhbbWwT, false)
		assert.equal(uint256GiLCGv, BigInt("10000000000000000"))
		assert.equal(uint256efL9QOu, BigInt("0"))
		await expect(KPLAYRTqdxsK.onlyOwner.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYgpyUBz0 = await KPLAY.new({from: accounts[3]});
		const uintEYBlh1W = BigInt("455")
		const addresst9QKd7v = accounts[1]
		const uintQ39mPv9 = BigInt("2052")
		const addressVir4BEU = accounts[2]
		const uintfAlCPcF = BigInt("1215")
		const addressyOu1Q3L = accounts[0]
//		const addressSMw0C1v = await KPLAYgpyUBz0.unlock.call(addresst9QKd7v, uintEYBlh1W, {from: accounts[3]});
//		const boolra9UyJ = await KPLAYgpyUBz0.transfer.call(addressVir4BEU, uintQ39mPv9, {from: accounts[1]});
//		const boolzw5TWzS = await KPLAYgpyUBz0.transfer.call(addressyOu1Q3L, uintfAlCPcF, {from: accounts[1]});
//		await KPLAYgpyUBz0.pause.call({from: accounts[2]});

		await expect(KPLAYgpyUBz0.unlock.call(addresst9QKd7v, uintEYBlh1W, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYEWYMpQ = await KPLAY.new({from: accounts[2]});
		const uintE3k9Qq = BigInt("1195")
		const addressTAQQk8s = accounts[4]
		const addressP6IrT1j = accounts[2]
		const uint256vR8NG9q = await KPLAYEWYMpQ.totalSupply.call({from: accounts[1]});
//		await KPLAYEWYMpQ.whenNotFrozen.call({from: accounts[5]});
//		const boolcKwdTDX = await KPLAYEWYMpQ.transferFrom.call(addressP6IrT1j, addressTAQQk8s, uintE3k9Qq, {from: accounts[1]});

		assert.equal(uint256vR8NG9q, BigInt("10000000000000000"))
		await expect(KPLAYEWYMpQ.whenNotFrozen.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYgpyUBz0 = await KPLAY.new({from: accounts[3]});
		const uintR0OkABU = BigInt("336")
		const uintzBKEcav = BigInt("692")
		const addressterVUPN = accounts[4]
		const addressSQ2JBKz = accounts[7]
		const uint2561oHl7X = await KPLAYgpyUBz0.currentTime.call({from: accounts[5]});
//		const addressqviq3Do = await KPLAYgpyUBz0.lock.call(addressterVUPN, uintzBKEcav, uintR0OkABU, {from: accounts[1]});
//		const uint256M5eqp1q = await KPLAYgpyUBz0.balanceOf.call(addressSQ2JBKz, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint2561oHl7X, BigInt("1630228196"))
		await expect(KPLAYgpyUBz0.lock.call(addressterVUPN, uintzBKEcav, uintR0OkABU, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYlDxcbH = await KPLAY.new({from: accounts[0]});
		const addressXlEBbdq = "0x0000000000000000000000000000000000000001"
		const addressYXbWxKr = await KPLAYlDxcbH.unfreeze.call(addressXlEBbdq, {from: accounts[0]});
//		await KPLAYlDxcbH.whenPaused.call({from: accounts[3]});

		await expect(KPLAYlDxcbH.whenPaused.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYgpyUBz0 = await KPLAY.new({from: accounts[3]});
		const addressPFNnPb = accounts[0]
		const uintw0fjh5q = BigInt("1401")
		const addressPyHB5ea = accounts[3]
		const uintwXHt9m = BigInt("1987")
		const addressW2mOWlX = accounts[2]
		const uint256i0GdiYj = await KPLAYgpyUBz0.lockCount.call(addressPFNnPb, {from: accounts[5]});
		const boolrJXjHDL = await KPLAYgpyUBz0.approve.call(addressPyHB5ea, uintw0fjh5q, {from: accounts[3]});
//		const boolra9UyJ = await KPLAYgpyUBz0.transfer.call(addressW2mOWlX, uintwXHt9m, {from: accounts[1]});

		assert.equal(boolrJXjHDL, true)
		assert.equal(uint256i0GdiYj, BigInt("0"))
		await expect(KPLAYgpyUBz0.transfer.call(addressW2mOWlX, uintwXHt9m, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYweZlHg = await KPLAY.new({from: accounts[1]});
		const addressGc6ig7w = accounts[0]
		const addressQKeHrEe = accounts[4]
		const uintGcBb1mt = BigInt("1008")
		const addressYGrAALJ = accounts[4]
		const addressmn8ME5P = await KPLAYweZlHg.freeze.call(addressGc6ig7w, {from: accounts[1]});
//		await KPLAYweZlHg.onlyOwner.call({from: accounts[0]});
//		const addressn1LG6nZ = await KPLAYweZlHg.unfreeze.call(addressQKeHrEe, {from: accounts[1]});
//		const boolbFuXOSr = await KPLAYweZlHg.mint.call(addressYGrAALJ, uintGcBb1mt, {from: accounts[3]});

		await expect(KPLAYweZlHg.onlyOwner.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYgpyUBz0 = await KPLAY.new({from: accounts[3]});
		const uinthJB0HG0 = BigInt("1553")
		const uintA563q3N = BigInt("1483")
		const addressk1KRP5M = "0x0000000000000000000000000000000000000001"
		const uintGku2lNm = BigInt("2001")
		const addressJiEQV33 = accounts[2]
		const uintOcnZGY7 = BigInt("1888")
		const uintVPPTguY = BigInt("1504")
		const addressbPWrXLq = accounts[1]
		const boolcQycXf0 = await KPLAYgpyUBz0.transferWithLock.call(addressk1KRP5M, uintA563q3N, uinthJB0HG0, {from: accounts[3]});
//		const boolra9UyJ = await KPLAYgpyUBz0.transfer.call(addressJiEQV33, uintGku2lNm, {from: accounts[1]});
//		const addressVWiBHHz = await KPLAYgpyUBz0.lock.call(addressbPWrXLq, uintVPPTguY, uintOcnZGY7, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolcQycXf0, true)
		await expect(KPLAYgpyUBz0.transfer.call(addressJiEQV33, uintGku2lNm, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYgpyUBz0 = await KPLAY.new({from: accounts[3]});
		const uintBTpCxCv = BigInt("1567")
		const uintYSKf8Y2 = BigInt("1307")
		const addressGpkaeUC = accounts[3]
		const uintELnMBZ = BigInt("2024")
		const addressRnWcC6B = accounts[3]
		const addressTCOgDGc = await KPLAYgpyUBz0.lock.call(addressGpkaeUC, uintYSKf8Y2, uintBTpCxCv, {from: accounts[3]});
//		const boolra9UyJ = await KPLAYgpyUBz0.transfer.call(addressRnWcC6B, uintELnMBZ, {from: accounts[1]});

		await expect(KPLAYgpyUBz0.transfer.call(addressRnWcC6B, uintELnMBZ, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYweZlHg = await KPLAY.new({from: accounts[1]});
		const uintSnSMSvz = BigInt("1696")
		const addressTHrWV1S = accounts[0]
//		const address0UCTGa = await KPLAYweZlHg.burn.call(addressTHrWV1S, uintSnSMSvz, {from: accounts[1]});
//		await KPLAYweZlHg.onlyOwner.call({from: accounts[0]});

		await expect(KPLAYweZlHg.burn.call(addressTHrWV1S, uintSnSMSvz, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYweZlHg = await KPLAY.new({from: accounts[1]});
		const addressntiOTIW = accounts[1]
//		await KPLAYweZlHg.pause.call({from: accounts[1]});
//		const uint256wVvPCiN = await KPLAYweZlHg.balanceOf.call(addressntiOTIW, {from: accounts[3]});
//		await KPLAYweZlHg.onlyOwner.call({from: accounts[0]});

		await expect(KPLAYweZlHg.pause.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYgpyUBz0 = await KPLAY.new({from: accounts[3]});
		const uintlowiGa = BigInt("713")
		const uintcmv55no = BigInt("300")
		const addressyHwCR4j = accounts[4]
		const uintsT1WgRB = BigInt("2024")
		const addressWUoda6q = accounts[2]
		const uint256x2Bn4BZ = await KPLAYgpyUBz0.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
//		const addresspdo5k9I = await KPLAYgpyUBz0.lockAfter.call(addressyHwCR4j, uintcmv55no, uintlowiGa, {from: accounts[3]});
//		const boolra9UyJ = await KPLAYgpyUBz0.transfer.call(addressWUoda6q, uintsT1WgRB, {from: accounts[1]});

		assert.equal(uint256x2Bn4BZ, BigInt("10000000000000000"))
		await expect(KPLAYgpyUBz0.lockAfter.call(addressyHwCR4j, uintcmv55no, uintlowiGa, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYweZlHg = await KPLAY.new({from: accounts[1]});
		const uintoGsJ9Vs = BigInt("183")
		const addressF9OWUMo = accounts[3]
		const boolOsxET7M = await KPLAYweZlHg.mint.call(addressF9OWUMo, uintoGsJ9Vs, {from: accounts[1]});
//		await KPLAYweZlHg.unpause.call({from: accounts[5]});
//		await KPLAYweZlHg.onlyOwner.call({from: accounts[0]});

		assert.equal(boolOsxET7M, true)
		await expect(KPLAYweZlHg.unpause.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYgpyUBz0 = await KPLAY.new({from: accounts[3]});
		const addressIczqP2V = accounts[5]
		const uintKhV2Rt = BigInt("865")
		const uintr57R7Jp = BigInt("1213")
		const addressrjTAVtV = accounts[4]
		const uintfFIPo6 = BigInt("2038")
		const addressSqQEBmY = accounts[2]
		const uint256cUnzy7Q = await KPLAYgpyUBz0.lockCount.call(addressIczqP2V, {from: "0x0000000000000000000000000000000000000001"});
		const booldVcUQEk = await KPLAYgpyUBz0.transferWithLockAfter.call(addressrjTAVtV, uintr57R7Jp, uintKhV2Rt, {from: accounts[3]});
//		const boolra9UyJ = await KPLAYgpyUBz0.transfer.call(addressSqQEBmY, uintfFIPo6, {from: accounts[1]});

		assert.equal(booldVcUQEk, true)
		assert.equal(uint256cUnzy7Q, BigInt("0"))
		await expect(KPLAYgpyUBz0.transfer.call(addressSqQEBmY, uintfFIPo6, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYssnQO6c = await KPLAY.new({from: accounts[0]});
		const addressERt0OM = accounts[4]
//		await KPLAYssnQO6c.renounceOwnership.call({from: accounts[0]});
//		await KPLAYssnQO6c.renounceOwnership.call({from: accounts[4]});
//		const uint256kel7cK = await KPLAYssnQO6c.lockCount.call(addressERt0OM, {from: accounts[3]});

		await expect(KPLAYssnQO6c.renounceOwnership.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYgpyUBz0 = await KPLAY.new({from: accounts[3]});
		const uintxZN8HEW = BigInt("284")
		const addressZ17MTbI = accounts[3]
		const uintDNdwxD1 = BigInt("504")
		const addressV5jhaBg = accounts[0]
		const addressoQYTrPU = accounts[7]
		const address5zpcTI = await KPLAYgpyUBz0.burn.call(addressZ17MTbI, uintxZN8HEW, {from: accounts[3]});
//		const boolIdZD9RP = await KPLAYgpyUBz0.transfer.call(addressV5jhaBg, uintDNdwxD1, {from: accounts[2]});
//		const uint256M5eqp1q = await KPLAYgpyUBz0.balanceOf.call(addressoQYTrPU, {from: "0x0000000000000000000000000000000000000001"});

		await expect(KPLAYgpyUBz0.transfer.call(addressV5jhaBg, uintDNdwxD1, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYgpyUBz0 = await KPLAY.new({from: accounts[3]});
		const addressIWDaBF9 = accounts[3]
		const uintt8HrNk = BigInt("1425")
		const uintVgY451i = BigInt("2024")
		const addresswHptiT = accounts[2]
		const addressEbJxcE6 = await KPLAYgpyUBz0.transferOwnership.call(addressIWDaBF9, {from: accounts[3]});
		const uint256pGJaSxE = await KPLAYgpyUBz0.afterTime.call(uintt8HrNk, {from: accounts[1]});
//		const boolra9UyJ = await KPLAYgpyUBz0.transfer.call(addresswHptiT, uintVgY451i, {from: accounts[1]});

		assert.equal(uint256pGJaSxE, BigInt("1630229631"))
		await expect(KPLAYgpyUBz0.transfer.call(addresswHptiT, uintVgY451i, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})