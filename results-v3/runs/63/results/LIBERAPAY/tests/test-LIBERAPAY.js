const LIBERAPAY = artifacts.require("LIBERAPAY");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('LIBERAPAY', (accounts) => {
	it('test for LIBERAPAY', async () => {
		const LIBERAPAYgo2MaM = await LIBERAPAY.new({from: accounts[4]});
		const uintkabf2Ai = BigInt("462")
		const addressHdG2Ddy = "0x0000000000000000000000000000000000000001"
		const addressrctuCIw = accounts[2]
		const addressUhNnsTP = accounts[5]
		const boolzDNLg9E = await LIBERAPAYgo2MaM.distribute.call(addressHdG2Ddy, uintkabf2Ai, {from: "0x0000000000000000000000000000000000000001"});
		const uint256aInWouo = await LIBERAPAYgo2MaM.allowance.call(addressUhNnsTP, addressrctuCIw, {from: "0x0000000000000000000000000000000000000001"});

		await expect(LIBERAPAYgo2MaM.distribute.call(addressHdG2Ddy, uintkabf2Ai, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYGEHE78 = await LIBERAPAY.new({from: "0x0000000000000000000000000000000000000001"});
		const addressJkGOAJA = "0x0000000000000000000000000000000000000001"
		const addressGzfmKeR = accounts[5]
		const uint256yubABRz = await LIBERAPAYGEHE78.getNowTime.call({from: accounts[4]});
		const boolAeTLCjS = await LIBERAPAYGEHE78.freezeAccount.call(addressJkGOAJA, {from: accounts[0]});
		await LIBERAPAYGEHE78.whenNotPaused.call({from: accounts[1]});
		const boolG1pgibe = await LIBERAPAYGEHE78.freezeAccount.call(addressGzfmKeR, {from: accounts[0]});
		await LIBERAPAYGEHE78.whenNotPaused.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAY3VYa4l = await LIBERAPAY.new({from: accounts[3]});
		const addressX5JXKwk = accounts[3]
		const addressDthtzf = accounts[0]
		const addressIxkRsRM = accounts[0]
		const uintwvPYrVo = BigInt("681")
		const addressmmkktwW = "0x0000000000000000000000000000000000000001"
		const uintfOLWBTM = BigInt("60")
		const uintZRStm3 = BigInt("849")
		const addressMlBqqIY = "0x0000000000000000000000000000000000000001"
		const uint2562uCi85 = await LIBERAPAY3VYa4l.balanceOf.call(addressX5JXKwk, {from: accounts[3]});
		const addressWUEeVx = await LIBERAPAY3VYa4l.transferOwnership.call(addressDthtzf, {from: accounts[3]});
		const addressbwZNaXg = await LIBERAPAY3VYa4l.upgradeTo.call(addressIxkRsRM, {from: accounts[2]});
		const boolpDvsBun = await LIBERAPAY3VYa4l.distribute.call(addressmmkktwW, uintwvPYrVo, {from: accounts[4]});
		await LIBERAPAY3VYa4l.f.call({from: accounts[4]});
		const boole6EHxpS = await LIBERAPAY3VYa4l.lock.call(addressMlBqqIY, uintZRStm3, uintfOLWBTM, {from: accounts[1]});

		assert.equal(uint2562uCi85, BigInt("3000000000000000000000000000"))
		await expect(LIBERAPAY3VYa4l.upgradeTo.call(addressIxkRsRM, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYOSvtRFy = await LIBERAPAY.new({from: accounts[4]});
		const addressKruI3J = accounts[2]
		await LIBERAPAYOSvtRFy.whenNotPaused.call({from: accounts[4]});
		const boolM73a8R = await LIBERAPAYOSvtRFy.unfreezeAccount.call(addressKruI3J, {from: accounts[4]});

		await expect(LIBERAPAYOSvtRFy.whenNotPaused.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYZl7WI8b = await LIBERAPAY.new({from: accounts[5]});
		const uinttINrcAX = BigInt("517")
		const addressO99MREx = accounts[2]
		const uintdAIV8Lx = BigInt("517")
		const addressXwqeeun = accounts[3]
		const addressYlbqRdG = accounts[4]
		const uint2S54Pc = BigInt("1711")
		const uintWo0bpU = BigInt("66")
		const addressuWJb7df = accounts[2]
		const boolk61OkhC = await LIBERAPAYZl7WI8b.decreaseAllowance.call(addressO99MREx, uinttINrcAX, {from: accounts[2]});
		const boolErD6wNi = await LIBERAPAYZl7WI8b.burnFrom.call(addressXwqeeun, uintdAIV8Lx, {from: "0x0000000000000000000000000000000000000001"});
		const boolzisIbow = await LIBERAPAYZl7WI8b.unfreezeAccount.call(addressYlbqRdG, {from: accounts[0]});
		const uint256QjZ0Ltn = await LIBERAPAYZl7WI8b.totalSupply.call({from: accounts[3]});
		const boolBxbAuu7 = await LIBERAPAYZl7WI8b.lock.call(addressuWJb7df, uintWo0bpU, uint2S54Pc, {from: accounts[3]});
		const boolSM9GNRp = await LIBERAPAYZl7WI8b.acceptOwnership.call({from: accounts[2]});

		await expect(LIBERAPAYZl7WI8b.decreaseAllowance.call(addressO99MREx, uinttINrcAX, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYhACA7cE = await LIBERAPAY.new({from: accounts[3]});
		const uintkVTEyen = BigInt("249")
		const addressErMjef = "0x0000000000000000000000000000000000000001"
		const uintuF6cfT6 = BigInt("573")
		const addresslcUWmGm = accounts[5]
		const addressY2ILvd9 = accounts[0]
		const addresswAg0D4s = accounts[3]
		const boolFEZ04lj = await LIBERAPAYhACA7cE.transfer.call(addressErMjef, uintkVTEyen, {from: accounts[0]});
		await LIBERAPAYhACA7cE.unpause.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256OsAoxo4 = await LIBERAPAYhACA7cE.totalSupply.call({from: accounts[1]});
		const boolTKPmRq1 = await LIBERAPAYhACA7cE.increaseAllowance.call(addresslcUWmGm, uintuF6cfT6, {from: accounts[1]});
		const addressdD2z1D = await LIBERAPAYhACA7cE.transferOwnership.call(addressY2ILvd9, {from: accounts[2]});
		const uint256mQ9FGo2 = await LIBERAPAYhACA7cE.balanceOf.call(addresswAg0D4s, {from: accounts[1]});

		await expect(LIBERAPAYhACA7cE.transfer.call(addressErMjef, uintkVTEyen, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYOSvtRFy = await LIBERAPAY.new({from: accounts[4]});
		const addressVz3gO8j = accounts[2]
		const boolM73a8R = await LIBERAPAYOSvtRFy.unfreezeAccount.call(addressVz3gO8j, {from: accounts[4]});

		await expect(LIBERAPAYOSvtRFy.unfreezeAccount.call(addressVz3gO8j, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYIuM4iV = await LIBERAPAY.new({from: accounts[1]});
		const uint256pLtEW3U = await LIBERAPAYIuM4iV.getNowTime.call({from: accounts[4]});
		await LIBERAPAYIuM4iV.pause.call({from: accounts[5]});
		await LIBERAPAYIuM4iV.onlyOwner.call({from: accounts[0]});
		await LIBERAPAYIuM4iV.f.call({from: "0x0000000000000000000000000000000000000001"});
		await LIBERAPAYIuM4iV.whenNotPaused.call({from: accounts[4]});
		await LIBERAPAYIuM4iV.unpause.call({from: accounts[0]});

		assert.equal(uint256pLtEW3U, BigInt("1630229974"))
		await expect(LIBERAPAYIuM4iV.pause.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYhACA7cE = await LIBERAPAY.new({from: accounts[3]});
		const addressnN68xqc = accounts[0]
		const addresszZny9P = accounts[3]
		const uintp07WxWh = BigInt("249")
		const addressGT9gMp = "0x0000000000000000000000000000000000000001"
		const uintxDshm2j = BigInt("573")
		const addressww0VsAO = accounts[5]
		const addresswKdpA7C = accounts[0]
		const addresswmG5Er0 = accounts[3]
		const uint256CCYyTi9 = await LIBERAPAYhACA7cE.allowance.call(addresszZny9P, addressnN68xqc, {from: accounts[5]});
		const boolFEZ04lj = await LIBERAPAYhACA7cE.transfer.call(addressGT9gMp, uintp07WxWh, {from: accounts[0]});
		await LIBERAPAYhACA7cE.unpause.call({from: "0x0000000000000000000000000000000000000001"});
		await LIBERAPAYhACA7cE.whenNotPaused.call({from: accounts[0]});
		const uint256OsAoxo4 = await LIBERAPAYhACA7cE.totalSupply.call({from: accounts[1]});
		const boolTKPmRq1 = await LIBERAPAYhACA7cE.increaseAllowance.call(addressww0VsAO, uintxDshm2j, {from: accounts[1]});
		const addressdD2z1D = await LIBERAPAYhACA7cE.transferOwnership.call(addresswKdpA7C, {from: accounts[2]});
		const uint256mQ9FGo2 = await LIBERAPAYhACA7cE.balanceOf.call(addresswmG5Er0, {from: accounts[1]});

		assert.equal(uint256CCYyTi9, BigInt("0"))
		await expect(LIBERAPAYhACA7cE.transfer.call(addressGT9gMp, uintp07WxWh, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYu7T0pAk = await LIBERAPAY.new({from: accounts[1]});
		const uintXtvwiAX = BigInt("729")
		const addressGu2LNZX = accounts[0]
		const uintTiTcmyF = BigInt("652")
		const addressKaYNQwn = accounts[0]
		const boolzzTXtBo = await LIBERAPAYu7T0pAk.increaseAllowance.call(addressGu2LNZX, uintXtvwiAX, {from: accounts[1]});
		const boolnZCJtwX = await LIBERAPAYu7T0pAk.transfer.call(addressKaYNQwn, uintTiTcmyF, {from: accounts[2]});

		assert.equal(boolzzTXtBo, true)
		await expect(LIBERAPAYu7T0pAk.transfer.call(addressKaYNQwn, uintTiTcmyF, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYUk9Pt8c = await LIBERAPAY.new({from: accounts[4]});
		const uintlsMSgNB = BigInt("1822")
		const addressm1LqXl8 = accounts[1]
		const uintqB1HG9H = BigInt("1905")
		const addresscLNiVzn = accounts[1]
		const boolSnzXZU7 = await LIBERAPAYUk9Pt8c.burnFrom.call(addressm1LqXl8, uintlsMSgNB, {from: accounts[3]});
		const uint256R2VPv8e = await LIBERAPAYUk9Pt8c.totalSupply.call({from: accounts[4]});
		const boolAjUMNIy = await LIBERAPAYUk9Pt8c.distribute.call(addresscLNiVzn, uintqB1HG9H, {from: accounts[3]});
		await LIBERAPAYUk9Pt8c.onlyOwner.call({from: accounts[4]});

		await expect(LIBERAPAYUk9Pt8c.burnFrom.call(addressm1LqXl8, uintlsMSgNB, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYephxKRu = await LIBERAPAY.new({from: accounts[0]});
		const uintxle0hYv = BigInt("448")
		const addressTyNn1gH = accounts[3]
		const addressgBsKYNQ = accounts[5]
		const uintAsxrXF3 = BigInt("1916")
		const addressFYfjHE4 = accounts[3]
		const boolroRjBV9 = await LIBERAPAYephxKRu.approve.call(addressTyNn1gH, uintxle0hYv, {from: accounts[3]});
		const boolz9PCKZ5 = await LIBERAPAYephxKRu.unfreezeAccount.call(addressgBsKYNQ, {from: accounts[4]});
		const boolqIY5xuy = await LIBERAPAYephxKRu.increaseAllowance.call(addressFYfjHE4, uintAsxrXF3, {from: accounts[4]});

		assert.equal(boolroRjBV9, true)
		await expect(LIBERAPAYephxKRu.unfreezeAccount.call(addressgBsKYNQ, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYVR4OR57 = await LIBERAPAY.new({from: accounts[2]});
		const uintEle2be7 = BigInt("1144")
		const addressTj5M6Ca = accounts[3]
		const addressbRxCmTf = accounts[1]
		const addressFZW7Dp = accounts[2]
		const addressZWyLBzf = accounts[1]
		const uintceLsRmm = BigInt("36")
		const addresslXlO1uC = "0x0000000000000000000000000000000000000001"
		const addressiEF3Rg1 = "0x0000000000000000000000000000000000000001"
		await LIBERAPAYVR4OR57.f.call({from: accounts[2]});
		const boolRUvY7tF = await LIBERAPAYVR4OR57.transferFrom.call(addressbRxCmTf, addressTj5M6Ca, uintEle2be7, {from: accounts[5]});
		const uint256tnRvBhf = await LIBERAPAYVR4OR57.allowance.call(addressZWyLBzf, addressFZW7Dp, {from: accounts[3]});
		const boolxE4qlYr = await LIBERAPAYVR4OR57.decreaseAllowance.call(addresslXlO1uC, uintceLsRmm, {from: accounts[4]});
		const uint256MMunB8o = await LIBERAPAYVR4OR57.currentBalanceOf.call(addressiEF3Rg1, {from: accounts[1]});

		await expect(LIBERAPAYVR4OR57.f.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYOSvtRFy = await LIBERAPAY.new({from: accounts[4]});
		const uintjF2VMEd = BigInt("229")
		const addressTWTvUJA = accounts[1]
		const addressPmiVyGM = accounts[1]
		const addressqTuDRCj = accounts[3]
		const booljXFd9PR = await LIBERAPAYOSvtRFy.transferFrom.call(addressPmiVyGM, addressTWTvUJA, uintjF2VMEd, {from: accounts[2]});
		const boolM73a8R = await LIBERAPAYOSvtRFy.unfreezeAccount.call(addressqTuDRCj, {from: accounts[4]});
		const boolX1I1tWA = await LIBERAPAYOSvtRFy.acceptOwnership.call({from: accounts[3]});

		await expect(LIBERAPAYOSvtRFy.transferFrom.call(addressPmiVyGM, addressTWTvUJA, uintjF2VMEd, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYvy8308o = await LIBERAPAY.new({from: accounts[1]});
		const uintrFIG5t = BigInt("1083")
		const addressVokkqjD = "0x0000000000000000000000000000000000000001"
		const uinth7n8NL = BigInt("1603")
		const addressHtUK3DV = accounts[3]
		const uintQeZV7Gz = BigInt("589")
		const addressnkn5AOZ = accounts[0]
		const boolJxv7R2Q = await LIBERAPAYvy8308o.approve.call(addressVokkqjD, uintrFIG5t, {from: accounts[1]});
		const uint256G1MLW7 = await LIBERAPAYvy8308o.totalSupply.call({from: accounts[1]});
		await LIBERAPAYvy8308o.showLockState.call(addressHtUK3DV, uinth7n8NL, {from: accounts[4]});
		const boolTy0TxCq = await LIBERAPAYvy8308o.burnFrom.call(addressnkn5AOZ, uintQeZV7Gz, {from: accounts[3]});
		await LIBERAPAYvy8308o.whenNotPaused.call({from: accounts[2]});

		assert.equal(boolJxv7R2Q, true)
		assert.equal(uint256G1MLW7, BigInt("3000000000000000000000000000"))
		await expect(LIBERAPAYvy8308o.showLockState.call(addressHtUK3DV, uinth7n8NL, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYUqmsIXp = await LIBERAPAY.new({from: accounts[4]});
		const addressorl4eO = accounts[3]
		const uintY9wzYPt = BigInt("1009")
		const addressH8TvuWT = accounts[3]
		const boolyttqOIr = await LIBERAPAYUqmsIXp.freezeAccount.call(addressorl4eO, {from: accounts[4]});
		const uint256iRkNolW = await LIBERAPAYUqmsIXp.totalSupply.call({from: accounts[2]});
		const booltlRxehh = await LIBERAPAYUqmsIXp.unlock.call(addressH8TvuWT, uintY9wzYPt, {from: accounts[4]});

		assert.equal(boolyttqOIr, true)
		assert.equal(uint256iRkNolW, BigInt("3000000000000000000000000000"))
		await expect(LIBERAPAYUqmsIXp.unlock.call(addressH8TvuWT, uintY9wzYPt, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYcnwGDuz = await LIBERAPAY.new({from: accounts[0]});
		const addressreG3nd = accounts[2]
		const uintX5q3hE7 = BigInt("664")
		const addressaZEqWoc = accounts[2]
		const uint256TWIyL7v = await LIBERAPAYcnwGDuz.currentBalanceOf.call(addressreG3nd, {from: accounts[2]});
		const boolBdMX4Vf = await LIBERAPAYcnwGDuz.transfer.call(addressaZEqWoc, uintX5q3hE7, {from: accounts[2]});

		assert.equal(uint256TWIyL7v, BigInt("0"))
		await expect(LIBERAPAYcnwGDuz.transfer.call(addressaZEqWoc, uintX5q3hE7, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYcnwGDuz = await LIBERAPAY.new({from: accounts[0]});
		const uintacfcJWo = BigInt("698")
		const address2qK18U = accounts[1]
		const addressVmINT9M = accounts[5]
		const uintufBYcHF = BigInt("242")
		const uintbG73NG = BigInt("592")
		const addressflEPlKY = accounts[5]
		const uintYpiyhUv = BigInt("477")
		const addressrrphnz3 = accounts[3]
		const uintRMv678l = BigInt("1944")
		const addressmkOLvYs = accounts[4]
		const bool97rKCx = await LIBERAPAYcnwGDuz.approve.call(address2qK18U, uintacfcJWo, {from: accounts[2]});
		const uint2565LwRmK = await LIBERAPAYcnwGDuz.balanceOf.call(addressVmINT9M, {from: accounts[2]});
		const boolTbHpDwM = await LIBERAPAYcnwGDuz.lock.call(addressflEPlKY, uintbG73NG, uintufBYcHF, {from: accounts[0]});
		const boolchMmu6J = await LIBERAPAYcnwGDuz.increaseAllowance.call(addressrrphnz3, uintYpiyhUv, {from: accounts[2]});
		await LIBERAPAYcnwGDuz.showLockState.call(addressmkOLvYs, uintRMv678l, {from: accounts[3]});

		assert.equal(bool97rKCx, true)
		assert.equal(uint2565LwRmK, BigInt("0"))
		await expect(LIBERAPAYcnwGDuz.lock.call(addressflEPlKY, uintbG73NG, uintufBYcHF, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAY3VYa4l = await LIBERAPAY.new({from: accounts[3]});
		const addressusL73CT = accounts[7]
		const uintQhbvGjR = BigInt("1785")
		const uintCB4yZz4 = BigInt("1663")
		const addressJhXLGvS = accounts[1]
		const uint2562uCi85 = await LIBERAPAY3VYa4l.balanceOf.call(addressusL73CT, {from: accounts[3]});
		const boolXsFSDqI = await LIBERAPAY3VYa4l.burn.call(uintQhbvGjR, {from: accounts[3]});
		const boolTYCKjdV = await LIBERAPAY3VYa4l.distribute.call(addressJhXLGvS, uintCB4yZz4, {from: accounts[1]});

		assert.equal(boolXsFSDqI, true)
		assert.equal(uint2562uCi85, BigInt("0"))
		await expect(LIBERAPAY3VYa4l.distribute.call(addressJhXLGvS, uintCB4yZz4, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYc6QLGLt = await LIBERAPAY.new({from: accounts[2]});
		const uinthFLuDHh = BigInt("752")
		const addressMs7fjY = accounts[0]
		const uintlmhPmdn = BigInt("1559")
		const uintg0HNCZs = BigInt("1093")
		const addressJHS7TfS = accounts[2]
		const addressndWESSK = accounts[0]
		const addressn7emJgJ = accounts[3]
		const uint8FhjG1 = BigInt("1837")
		const addresscmUTI80 = accounts[1]
		const boolM9B5gIi = await LIBERAPAYc6QLGLt.mint.call(addressMs7fjY, uinthFLuDHh, {from: accounts[2]});
		const boolMaQur41 = await LIBERAPAYc6QLGLt.lock.call(addressJHS7TfS, uintg0HNCZs, uintlmhPmdn, {from: accounts[2]});
		const addresseMo5trH = await LIBERAPAYc6QLGLt.upgradeTo.call(addressndWESSK, {from: accounts[3]});
		const booldqlmQf = await LIBERAPAYc6QLGLt.unfreezeAccount.call(addressn7emJgJ, {from: accounts[3]});
		const boolQgAxqqF = await LIBERAPAYc6QLGLt.distribute.call(addresscmUTI80, uint8FhjG1, {from: accounts[5]});

		await expect(LIBERAPAYc6QLGLt.mint.call(addressMs7fjY, uinthFLuDHh, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYcnwGDuz = await LIBERAPAY.new({from: accounts[0]});
		const addressQ9q64SY = accounts[2]
		const uintjqFjU8W = BigInt("1944")
		const addresstKsRQFt = accounts[4]
		const addressaJDk67m = accounts[2]
		const uint256wI5h8hI = await LIBERAPAYcnwGDuz.currentBalanceOf.call(addressQ9q64SY, {from: accounts[2]});
		await LIBERAPAYcnwGDuz.showLockState.call(addresstKsRQFt, uintjqFjU8W, {from: accounts[3]});
		const addresscHyItan = await LIBERAPAYcnwGDuz.upgradeTo.call(addressaJDk67m, {from: accounts[0]});

		assert.equal(uint256wI5h8hI, BigInt("0"))
		await expect(LIBERAPAYcnwGDuz.showLockState.call(addresstKsRQFt, uintjqFjU8W, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAY3VYa4l = await LIBERAPAY.new({from: accounts[3]});
		const addresst2c7y8R = accounts[3]
		const uintr9bn7vr = BigInt("62")
		const addressyIrLJEL = accounts[4]
		const addressgvJtbCy = accounts[7]
		const uintt8yrVB = BigInt("1215")
		const addressyBHDohk = accounts[5]
		const uint256rM9cwkA = await LIBERAPAY3VYa4l.currentBalanceOf.call(addresst2c7y8R, {from: accounts[1]});
		const boolRwLDx13 = await LIBERAPAY3VYa4l.distribute.call(addressyIrLJEL, uintr9bn7vr, {from: accounts[3]});
		const uint2562uCi85 = await LIBERAPAY3VYa4l.balanceOf.call(addressgvJtbCy, {from: accounts[3]});
		const boolv2X1ZWG = await LIBERAPAY3VYa4l.distribute.call(addressyBHDohk, uintt8yrVB, {from: accounts[4]});

		assert.equal(boolRwLDx13, true)
		assert.equal(uint2562uCi85, BigInt("0"))
		assert.equal(uint256rM9cwkA, BigInt("3000000000000000000000000000"))
		await expect(LIBERAPAY3VYa4l.distribute.call(addressyBHDohk, uintt8yrVB, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYyFwAJ1S = await LIBERAPAY.new({from: accounts[4]});
		const uinto2BHkrX = BigInt("1787")
		const addressYgIG2rT = accounts[2]
		const addresstuo1da = accounts[1]
		await LIBERAPAYyFwAJ1S.pause.call({from: accounts[4]});
		const boollLxfTV9 = await LIBERAPAYyFwAJ1S.distribute.call(addressYgIG2rT, uinto2BHkrX, {from: accounts[1]});
		await LIBERAPAYyFwAJ1S.whenPaused.call({from: accounts[5]});
		const addressGPA3GxQ = await LIBERAPAYyFwAJ1S.transferOwnership.call(addresstuo1da, {from: accounts[4]});
		await LIBERAPAYyFwAJ1S.unpause.call({from: accounts[2]});

		await expect(LIBERAPAYyFwAJ1S.pause.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAY3VYa4l = await LIBERAPAY.new({from: accounts[3]});
		const addressqaDACX2 = accounts[4]
		const uintWFQacG = BigInt("62")
		const addressLFwdU7T = accounts[4]
		const addresscHIhtAG = accounts[10]
		const uintdLYpAtb = BigInt("1215")
		const addressEnK5xR1 = accounts[5]
		const uint256rM9cwkA = await LIBERAPAY3VYa4l.currentBalanceOf.call(addressqaDACX2, {from: accounts[1]});
		const uint256UOoQav = await LIBERAPAY3VYa4l.getNowTime.call({from: accounts[0]});
		const boolRwLDx13 = await LIBERAPAY3VYa4l.distribute.call(addressLFwdU7T, uintWFQacG, {from: accounts[3]});
		const uint256OFzuOoC = await LIBERAPAY3VYa4l.totalSupply.call({from: accounts[3]});
		const uint2562uCi85 = await LIBERAPAY3VYa4l.balanceOf.call(addresscHIhtAG, {from: accounts[3]});
		const boolv2X1ZWG = await LIBERAPAY3VYa4l.distribute.call(addressEnK5xR1, uintdLYpAtb, {from: accounts[4]});

		assert.equal(boolRwLDx13, true)
		assert.equal(uint256OFzuOoC, BigInt("3000000000000000000000000000"))
		assert.equal(uint256UOoQav, BigInt("1630229976"))
		assert.equal(uint256rM9cwkA, BigInt("0"))
		await expect(LIBERAPAY3VYa4l.balanceOf.call(addresscHIhtAG, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})