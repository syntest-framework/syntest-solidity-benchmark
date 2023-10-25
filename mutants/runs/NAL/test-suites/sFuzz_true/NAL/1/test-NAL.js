const NAL = artifacts.require("NAL");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('NAL', (accounts) => {
	it('test for NAL', async () => {
		const NALEX50uIB = await NAL.new({from: accounts[4]});
		const uintU1hQk2Q = BigInt("943")
		const addressd1QJR9 = accounts[0]
		const uintI5jrFP = BigInt("1215")
		const addresshrB4GlK = accounts[2]
		const uintYR9vRg1 = BigInt("710")
		const addressZclO0ie = accounts[4]
		const boolvq7rKpR = await NALEX50uIB.decreaseAllowance.call(addressd1QJR9, uintU1hQk2Q, {from: accounts[2]});
		const boolSAPUa1q = await NALEX50uIB.approve.call(addresshrB4GlK, uintI5jrFP, {from: "0x0000000000000000000000000000000000000001"});
		const booldcnVMy8 = await NALEX50uIB.transfer.call(addressZclO0ie, uintYR9vRg1, {from: accounts[0]});

		await expect(NALEX50uIB.decreaseAllowance.call(addressd1QJR9, uintU1hQk2Q, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const stringmFnmQiD = "9AwEXNTXDEP2tgYvFZR"
		const stringm79BpS1 = "t"
		const uintPoLChzw = BigInt("61")
		const NALywl4Bnr = await NAL.new(stringmFnmQiD, stringm79BpS1, uintPoLChzw, {from: "0x0000000000000000000000000000000000000001"});
		const addressA8H6GK = "0x0000000000000000000000000000000000000001"
		const uintehiCZAJ = BigInt("1654")
		const uintDsFnyeP = BigInt("1165")
		const addressyPTCzZq = accounts[1]
		const boolfBJI916 = await NALywl4Bnr.isAdmin.call(addressA8H6GK, {from: accounts[5]});
		const stringv9UAHsA = await NALywl4Bnr.symbol.call({from: accounts[2]});
		const boolCVk0K1S = await NALywl4Bnr.lock.call(addressyPTCzZq, uintDsFnyeP, uintehiCZAJ, {from: accounts[1]});
	});

	it('test for NAL', async () => {
		const NALf1znxN1 = await NAL.new({from: accounts[2]});
		const uintXJIv2pz = BigInt("695")
		const addressXLnY0m3 = accounts[0]
		const addresseHwaUwv = accounts[0]
		const uintfOfeMJp = BigInt("1024")
		const addressJAcaPcC = accounts[5]
		const addressOLGLiD0 = await NALf1znxN1.burnFrom.call(addressXLnY0m3, uintXJIv2pz, {from: accounts[3]});
		const stringSYpQr8I = await NALf1znxN1.symbol.call({from: accounts[0]});
		const addressR8B4ZF = await NALf1znxN1.notFrozen.call(addresseHwaUwv, {from: accounts[2]});
		const boolfVCDmeh = await NALf1znxN1.approve.call(addressJAcaPcC, uintfOfeMJp, {from: "0x0000000000000000000000000000000000000001"});

		await expect(NALf1znxN1.burnFrom.call(addressXLnY0m3, uintXJIv2pz, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALtm32bx = await NAL.new({from: "0x0000000000000000000000000000000000000001"});
		const uintoVcpQA2 = BigInt("227")
		const addressdLV37Ob = accounts[1]
		const uints1iBtDY = BigInt("1855")
		const addressGITt2C8 = accounts[0]
		await NALtm32bx.onlyOwner.call({from: accounts[4]});
		const booldJ7m5Vu = await NALtm32bx.approve.call(addressdLV37Ob, uintoVcpQA2, {from: accounts[0]});
		const boolR79O0qb = await NALtm32bx.approve.call(addressGITt2C8, uints1iBtDY, {from: accounts[3]});
	});

	it('test for NAL', async () => {
		const NALf1znxN1 = await NAL.new({from: accounts[2]});
		const addressyKnTyQ4 = accounts[0]
		const uintHds9Oi7 = BigInt("1024")
		const addressxFOyKu6 = accounts[5]
		const stringSYpQr8I = await NALf1znxN1.symbol.call({from: accounts[0]});
		const addressR8B4ZF = await NALf1znxN1.notFrozen.call(addressyKnTyQ4, {from: accounts[2]});
		const boolfVCDmeh = await NALf1znxN1.approve.call(addressxFOyKu6, uintHds9Oi7, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(stringSYpQr8I, "NAL")
		await expect(NALf1znxN1.notFrozen.call(addressyKnTyQ4, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALf1znxN1 = await NAL.new({from: accounts[2]});
		const uintqTUXtZ2 = BigInt("695")
		const addressygclpzO = accounts[0]
		const addressGfqG5GI = accounts[2]
		const addressl8JDyZ0 = accounts[0]
		const uintFp7RhTP = BigInt("1024")
		const addresstbnJuTZ = accounts[6]
		const stringwZUlmz = await NALf1znxN1.name.call({from: accounts[2]});
		const addressOLGLiD0 = await NALf1znxN1.burnFrom.call(addressygclpzO, uintqTUXtZ2, {from: accounts[3]});
		const addresslOYF1l5 = await NALf1znxN1.notFrozen.call(addressGfqG5GI, {from: accounts[2]});
		const addressR8B4ZF = await NALf1znxN1.notFrozen.call(addressl8JDyZ0, {from: accounts[2]});
		const boolfVCDmeh = await NALf1znxN1.approve.call(addresstbnJuTZ, uintFp7RhTP, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(stringwZUlmz, "Personal Token")
		await expect(NALf1znxN1.burnFrom.call(addressygclpzO, uintqTUXtZ2, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALf1znxN1 = await NAL.new({from: accounts[2]});
		const uintXrRPGNN = BigInt("695")
		const addressjKwMwUY = accounts[0]
		const uintvDBk4xn = BigInt("910")
		const addressGxlO5KO = accounts[5]
		const boolwcKurJc = await NALf1znxN1.paused.call({from: accounts[2]});
		const addressOLGLiD0 = await NALf1znxN1.burnFrom.call(addressjKwMwUY, uintXrRPGNN, {from: accounts[3]});
		const boolfVCDmeh = await NALf1znxN1.approve.call(addressGxlO5KO, uintvDBk4xn, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolwcKurJc, false)
		await expect(NALf1znxN1.burnFrom.call(addressjKwMwUY, uintXrRPGNN, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALf1znxN1 = await NAL.new({from: accounts[2]});
		const uintlcpJERS = BigInt("1024")
		const addressBpTUfGi = accounts[5]
		const boolfVCDmeh = await NALf1znxN1.approve.call(addressBpTUfGi, uintlcpJERS, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolfVCDmeh, true)
	});

	it('test for NAL', async () => {
		const NALOhrMtLu = await NAL.new({from: accounts[4]});
		const uintE7g0bKc = BigInt("1777")
		const addressa7RH7uZ = accounts[3]
		const address2uUZsN = accounts[4]
		const addressrxUX8sP = accounts[5]
		const boolEx560at = await NALOhrMtLu.transferFrom.call(address2uUZsN, addressa7RH7uZ, uintE7g0bKc, {from: "0x0000000000000000000000000000000000000001"});
		const boolhF45m3U = await NALOhrMtLu.isAdmin.call(addressrxUX8sP, {from: "0x0000000000000000000000000000000000000001"});
		const stringaFLaFa = await NALOhrMtLu.name.call({from: accounts[0]});

		await expect(NALOhrMtLu.transferFrom.call(address2uUZsN, addressa7RH7uZ, uintE7g0bKc, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALOhrMtLu = await NAL.new({from: accounts[4]});
		const addressFmQmuGI = accounts[5]
		const boolhF45m3U = await NALOhrMtLu.isAdmin.call(addressFmQmuGI, {from: "0x0000000000000000000000000000000000000001"});
		const stringaFLaFa = await NALOhrMtLu.name.call({from: accounts[0]});

		assert.equal(boolhF45m3U, false)
		assert.equal(stringaFLaFa, "Personal Token")
	});

	it('test for NAL', async () => {
		const NALf1znxN1 = await NAL.new({from: accounts[2]});
		const addressZ0IRtEw = accounts[4]
		const uintO54IBhN = BigInt("690")
		const addressJCGw3Ah = accounts[1]
		const boolX8xQ15l = await NALf1znxN1.freezeAccount.call(addressZ0IRtEw, {from: accounts[4]});
		const addressOLGLiD0 = await NALf1znxN1.burnFrom.call(addressJCGw3Ah, uintO54IBhN, {from: accounts[3]});

		await expect(NALf1znxN1.freezeAccount.call(addressZ0IRtEw, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALf1znxN1 = await NAL.new({from: accounts[2]});
		const uintySwzp0Q = BigInt("1445")
		const addressM4M8tWJ = accounts[3]
		const uintJy753s5 = BigInt("662")
		const addressGvK7PvM = accounts[1]
		const boolxr6rFbi = await NALf1znxN1.transfer.call(addressM4M8tWJ, uintySwzp0Q, {from: accounts[3]});
		const addressOLGLiD0 = await NALf1znxN1.burnFrom.call(addressGvK7PvM, uintJy753s5, {from: accounts[3]});

		await expect(NALf1znxN1.transfer.call(addressM4M8tWJ, uintySwzp0Q, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALf1znxN1 = await NAL.new({from: accounts[2]});
		const uintAxzIZVy = BigInt("662")
		const addressoDVw4qR = accounts[0]
		await NALf1znxN1.renounceAdmin.call({from: "0x0000000000000000000000000000000000000001"});
		const addressOLGLiD0 = await NALf1znxN1.burnFrom.call(addressoDVw4qR, uintAxzIZVy, {from: accounts[3]});

		await expect(NALf1znxN1.renounceAdmin.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALf1znxN1 = await NAL.new({from: accounts[2]});
		const addressAbQxr0R = accounts[2]
		const addressQrBKNxV = accounts[5]
		const uintxe2ADd = BigInt("690")
		const addressSoLNCdE = accounts[1]
		const uint256uTZ4EKW = await NALf1znxN1.allowance.call(addressQrBKNxV, addressAbQxr0R, {from: accounts[0]});
		const addressOLGLiD0 = await NALf1znxN1.burnFrom.call(addressSoLNCdE, uintxe2ADd, {from: accounts[3]});

		assert.equal(uint256uTZ4EKW, BigInt("0"))
		await expect(NALf1znxN1.burnFrom.call(addressSoLNCdE, uintxe2ADd, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALOhrMtLu = await NAL.new({from: accounts[4]});
		const uintOwi2Tay = BigInt("1391")
		const uintb88dcGi = BigInt("1777")
		const addressqtrtKlI = accounts[3]
		const addressdLXDbex = accounts[4]
		const addressbLEkXi5 = accounts[6]
		const uint256ZhyPbyN = await NALOhrMtLu.burn.call(uintOwi2Tay, {from: accounts[4]});
		const boolEx560at = await NALOhrMtLu.transferFrom.call(addressdLXDbex, addressqtrtKlI, uintb88dcGi, {from: "0x0000000000000000000000000000000000000001"});
		const boolhF45m3U = await NALOhrMtLu.isAdmin.call(addressbLEkXi5, {from: "0x0000000000000000000000000000000000000001"});
		const stringaFLaFa = await NALOhrMtLu.name.call({from: accounts[0]});

		await expect(NALOhrMtLu.transferFrom.call(addressdLXDbex, addressqtrtKlI, uintb88dcGi, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALf1znxN1 = await NAL.new({from: accounts[2]});
		const uintwVxM9Kj = BigInt("662")
		const addressJbGJa7L = accounts[1]
		const stringR1UsYKX = await NALf1znxN1.name.call({from: accounts[1]});
		const uint256cjbTiW = await NALf1znxN1.totalSupply.call({from: accounts[2]});
		const addressOLGLiD0 = await NALf1znxN1.burnFrom.call(addressJbGJa7L, uintwVxM9Kj, {from: accounts[3]});

		assert.equal(stringR1UsYKX, "Personal Token")
		assert.equal(uint256cjbTiW, BigInt("2000000000000000000000000000"))
		await expect(NALf1znxN1.burnFrom.call(addressJbGJa7L, uintwVxM9Kj, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALf1znxN1 = await NAL.new({from: accounts[2]});
		const uintXLsqTyI = BigInt("273")
		const addressi0e8387 = accounts[4]
		const uintlaCWAN = BigInt("1674")
		const addressUJYGSCO = accounts[0]
		const addressROCSByN = accounts[2]
		const uintL274t2b = BigInt("658")
		const addressffHqGN7 = accounts[0]
		const boolIR7oq3K = await NALf1znxN1.increaseAllowance.call(addressi0e8387, uintXLsqTyI, {from: accounts[0]});
		const booljGDqQou = await NALf1znxN1.transfer.call(addressUJYGSCO, uintlaCWAN, {from: accounts[4]});
		const boolgTJSixs = await NALf1znxN1.isAdmin.call(addressROCSByN, {from: accounts[0]});
		await NALf1znxN1.onlyAdmin.call({from: "0x0000000000000000000000000000000000000001"});
		const addressOLGLiD0 = await NALf1znxN1.burnFrom.call(addressffHqGN7, uintL274t2b, {from: accounts[3]});

		assert.equal(boolIR7oq3K, true)
		await expect(NALf1znxN1.transfer.call(addressUJYGSCO, uintlaCWAN, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALf1znxN1 = await NAL.new({from: accounts[2]});
		const uintKJq7N3c = BigInt("662")
		const addressLpOSGgp = accounts[0]
		const uint8kuRwLp4 = await NALf1znxN1.decimals.call({from: accounts[2]});
		await NALf1znxN1.renounceAdmin.call({from: "0x0000000000000000000000000000000000000001"});
		const addressOLGLiD0 = await NALf1znxN1.burnFrom.call(addressLpOSGgp, uintKJq7N3c, {from: accounts[3]});

		assert.equal(uint8kuRwLp4, BigInt("18"))
		await expect(NALf1znxN1.renounceAdmin.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALf1znxN1 = await NAL.new({from: accounts[2]});
		const addressofD49yP = accounts[1]
		const uintvtEdRqy = BigInt("662")
		const addressE0GryP = accounts[1]
		const boolty2HPoI = await NALf1znxN1.unfreezeAccount.call(addressofD49yP, {from: accounts[2]});
		const addressOLGLiD0 = await NALf1znxN1.burnFrom.call(addressE0GryP, uintvtEdRqy, {from: accounts[3]});

		await expect(NALf1znxN1.unfreezeAccount.call(addressofD49yP, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALvZa97m = await NAL.new({from: accounts[0]});
		const addressU8tuH9b = accounts[2]
		const addresscx5U2sH = "0x0000000000000000000000000000000000000001"
		const addressu56x0b4 = accounts[5]
		const addressOIosAE1 = accounts[1]
		const boolKCquyN3 = await NALvZa97m.freezeAccount.call(addressU8tuH9b, {from: accounts[0]});
		const stringeeqgRu = await NALvZa97m.symbol.call({from: accounts[3]});
		const boolAGoQkkJ = await NALvZa97m.isAdmin.call(addresscx5U2sH, {from: accounts[3]});
		const uint256bb3u1Y7 = await NALvZa97m.balanceOf.call(addressu56x0b4, {from: "0x0000000000000000000000000000000000000001"});
		const addressrr7wYFJ = await NALvZa97m.notFrozen.call(addressOIosAE1, {from: accounts[2]});

		assert.equal(boolAGoQkkJ, false)
		assert.equal(boolKCquyN3, true)
		assert.equal(stringeeqgRu, "NAL")
		assert.equal(uint256bb3u1Y7, BigInt("0"))
		await expect(NALvZa97m.notFrozen.call(addressOIosAE1, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALOhrMtLu = await NAL.new({from: accounts[4]});
		const addressprFQZ2 = accounts[1]
		const addressesVEAmD = accounts[2]
		const uintQBa75zT = BigInt("1777")
		const addressXop7ui7 = accounts[3]
		const addressNe6JqbX = accounts[5]
		const uint256BTi7tXT = await NALOhrMtLu.balanceOf.call(addressprFQZ2, {from: accounts[0]});
		const addresstUdUZi = await NALOhrMtLu.removeAdmin.call(addressesVEAmD, {from: accounts[4]});
		await NALOhrMtLu.pause.call({from: accounts[5]});
		await NALOhrMtLu.renounceAdmin.call({from: "0x0000000000000000000000000000000000000001"});
		const boolEx560at = await NALOhrMtLu.transferFrom.call(addressNe6JqbX, addressXop7ui7, uintQBa75zT, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256BTi7tXT, BigInt("0"))
		await expect(NALOhrMtLu.removeAdmin.call(addressesVEAmD, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALOhrMtLu = await NAL.new({from: accounts[4]});
		const addressAx7gkr = accounts[4]
		const uintB7OpSbY = BigInt("1777")
		const addressn6ffSnZ = accounts[3]
		const addressoLhE33c = accounts[5]
		const addressLXzMGgj = accounts[3]
		const boolQ7199K0 = await NALOhrMtLu.isOwner.call(addressAx7gkr, {from: accounts[3]});
		const boolEx560at = await NALOhrMtLu.transferFrom.call(addressoLhE33c, addressn6ffSnZ, uintB7OpSbY, {from: "0x0000000000000000000000000000000000000001"});
		const addressyN2QBor = await NALOhrMtLu.transferOwnership.call(addressLXzMGgj, {from: accounts[1]});

		assert.equal(boolQ7199K0, true)
		await expect(NALOhrMtLu.transferFrom.call(addressoLhE33c, addressn6ffSnZ, uintB7OpSbY, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALf1znxN1 = await NAL.new({from: accounts[2]});
		const addressPk7BYxp = accounts[2]
		const uintj01YqXF = BigInt("8")
		const addressR2QBoUd = accounts[3]
		const addressdmPOfwS = accounts[4]
		const addressjX0xd9y = accounts[1]
		const addressA9JKcV = await NALf1znxN1.removeAdmin.call(addressPk7BYxp, {from: accounts[2]});
		const addressSZE5tye = await NALf1znxN1.burnFrom.call(addressR2QBoUd, uintj01YqXF, {from: accounts[1]});
		await NALf1znxN1.renounceAdmin.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256l2vcH7 = await NALf1znxN1.allowance.call(addressjX0xd9y, addressdmPOfwS, {from: accounts[2]});

		await expect(NALf1znxN1.burnFrom.call(addressR2QBoUd, uintj01YqXF, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALOhrMtLu = await NAL.new({from: accounts[4]});
		const addressajhW5rQ = accounts[2]
		const address85nwyi = "0x0000000000000000000000000000000000000001"
		const uintsUV8oFV = BigInt("1777")
		const addressAucQQyV = accounts[4]
		const addressPfhQIhN = accounts[4]
		const addressEssWD4S = await NALOhrMtLu.addAdmin.call(addressajhW5rQ, {from: accounts[4]});
		const addressopMTp1r = await NALOhrMtLu.transferOwnership.call(address85nwyi, {from: accounts[1]});
		const boolEx560at = await NALOhrMtLu.transferFrom.call(addressPfhQIhN, addressAucQQyV, uintsUV8oFV, {from: "0x0000000000000000000000000000000000000001"});

		await expect(NALOhrMtLu.transferOwnership.call(address85nwyi, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})