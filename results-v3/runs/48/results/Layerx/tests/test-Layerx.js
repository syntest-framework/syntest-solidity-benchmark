const Layerx = artifacts.require("Layerx");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Layerx', (accounts) => {
	it('test for Layerx', async () => {
		const addressvysqBFp = accounts[2]
		const LayerxfGZOkF = await Layerx.new(addressvysqBFp, {from: "0x0000000000000000000000000000000000000001"});
		const addresswKRj7bC = accounts[1]
		const uintZLlEEEE = BigInt("1851")
		await LayerxfGZOkF.f.call({from: accounts[5]});
		await LayerxfGZOkF.addStakePayment.call({from: accounts[1]});
		const addressOv2gBk0 = await LayerxfGZOkF.transferOwnership.call(addresswKRj7bC, {from: accounts[2]});
		await LayerxfGZOkF.paused.call({from: accounts[5]});
		const uint256AJhANAa = await LayerxfGZOkF.burn.call(uintZLlEEEE, {from: accounts[0]});
	});

	it('test for Layerx', async () => {
		const addressc7KCpp = "0x0000000000000000000000000000000000000001"
		const LayerxUeDlCaB = await Layerx.new(addressc7KCpp, {from: accounts[2]});
		const addressHo5ehd8 = accounts[3]
		await LayerxUeDlCaB.paused.call({from: accounts[0]});
		const addressQEBbHuZ = await LayerxUeDlCaB.transferOwnership.call(addressHo5ehd8, {from: accounts[0]});

		await expect(LayerxUeDlCaB.paused.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressBLetzMK = accounts[2]
		const LayerxGVGLnvR = await Layerx.new(addressBLetzMK, {from: accounts[0]});
		const address0uj0tJ = accounts[4]
		const uintiWDWiJa = BigInt("1348")
		const addressqs2yecE = accounts[1]
		const uintrWl99Yg = BigInt("1421")
		const addressxFCTYpg = accounts[3]
		const uintGjmQYFx = await LayerxGVGLnvR.getStakesNum.call({from: accounts[2]});
		const uintCh73ZFV = await LayerxGVGLnvR.totalSupply.call({from: accounts[4]});
		const addressEYbnWOZ = await LayerxGVGLnvR.transferOwnership.call(address0uj0tJ, {from: accounts[4]});
		const booly6RiNyx = await LayerxGVGLnvR.approve.call(addressqs2yecE, uintiWDWiJa, {from: accounts[1]});
		const uintHpxfMBF = await LayerxGVGLnvR.getStakesNum.call({from: accounts[4]});
		const boolIPiw8b = await LayerxGVGLnvR.transfer.call(addressxFCTYpg, uintrWl99Yg, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uintCh73ZFV, BigInt("40000000000000000000000"))
		assert.equal(uintGjmQYFx, BigInt("1"))
		await expect(LayerxGVGLnvR.transferOwnership.call(address0uj0tJ, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addresss7coL90 = accounts[1]
		const LayerxiG6F6WD = await Layerx.new(addresss7coL90, {from: accounts[3]});
		const uintkTtX8Ox = BigInt("112")
		const addressmLaGUJh = accounts[0]
		const boolaoFCz3m = false
		const uintmAz839n = BigInt("71")
		const uintyqnWoZX = BigInt("2020")
		const addressFdGLNSR = accounts[1]
		const addressweAlwVv = accounts[2]
		const uintwWDs7E = await LayerxiG6F6WD.withdraw.call(uintkTtX8Ox, {from: accounts[3]});
		const addressNr8iEz = await LayerxiG6F6WD.transferOwnership.call(addressmLaGUJh, {from: accounts[2]});
		const boolITLFaMO = await LayerxiG6F6WD.setIsPaused.call(boolaoFCz3m, {from: "0x0000000000000000000000000000000000000001"});
		const uint256mbN1oe = await LayerxiG6F6WD.burn.call(uintmAz839n, {from: accounts[3]});
		const boolByjvwL8 = await LayerxiG6F6WD.transferFrom.call(addressweAlwVv, addressFdGLNSR, uintyqnWoZX, {from: accounts[1]});

		await expect(LayerxiG6F6WD.withdraw.call(uintkTtX8Ox, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressO29mFyE = accounts[4]
		const LayerxLo4qDPv = await Layerx.new(addressO29mFyE, {from: accounts[1]});
		const uintgf9GaSl = BigInt("1121")
		const addressFX2Okb8 = accounts[0]
		const byteTAA56I = "0x0f041c060b09000f0c170b17121b1418160b1719010e10"
		const uintjzEfvpw = BigInt("1928")
		const addressQmq153Q = accounts[5]
		const uintEkxYVSE = await LayerxLo4qDPv.lock.call(uintgf9GaSl, {from: accounts[4]});
		await LayerxLo4qDPv.unlock.call({from: accounts[3]});
		const uintoevLtr = await LayerxLo4qDPv.balanceOf.call(addressFX2Okb8, {from: "0x0000000000000000000000000000000000000001"});
		const boolBP02s2b = await LayerxLo4qDPv.approveAndCall.call(addressQmq153Q, uintjzEfvpw, byteTAA56I, {from: accounts[3]});
		await LayerxLo4qDPv.paused.call({from: accounts[0]});

		await expect(LayerxLo4qDPv.lock.call(uintgf9GaSl, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const address7lL534 = accounts[5]
		const LayerxpsmrjeA = await Layerx.new(address7lL534, {from: accounts[2]});
		const byteeO464Qi = "0x14120d1f1b1905150a191808070d1207120d1b1e0716"
		const uintGVDR75G = BigInt("1375")
		const addressJRQ8o1j = accounts[3]
		const uintln9o64 = BigInt("1187")
		const addresskQkw7T8 = accounts[2]
		const addressbeTtC8t = accounts[4]
		const uinty1cx4J3 = BigInt("796")
		const uintyoKprPL = BigInt("1345")
		const uintkEp10UG = BigInt("1157")
		const addressEPq3UYX = accounts[0]
		const boollram8lr = await LayerxpsmrjeA.approveAndCall.call(addressJRQ8o1j, uintGVDR75G, byteeO464Qi, {from: accounts[4]});
		const uintgSzMGhN = await LayerxpsmrjeA.exist.call(uintln9o64, {from: "0x0000000000000000000000000000000000000001"});
		const uintCKrt21S = await LayerxpsmrjeA.allowance.call(addressbeTtC8t, addresskQkw7T8, {from: accounts[0]});
		const uint256oTMrgRB = await LayerxpsmrjeA.burn.call(uinty1cx4J3, {from: accounts[0]});
		const uintCK6vqdd = await LayerxpsmrjeA.exist.call(uintyoKprPL, {from: accounts[5]});
		const boolgbYZ4Wx = await LayerxpsmrjeA.transfer.call(addressEPq3UYX, uintkEp10UG, {from: accounts[2]});

		await expect(LayerxpsmrjeA.approveAndCall.call(addressJRQ8o1j, uintGVDR75G, byteeO464Qi, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressEPCWIYx = accounts[2]
		const LayerxocjzcXu = await Layerx.new(addressEPCWIYx, {from: accounts[3]});
		const uintHJUOTbt = BigInt("2018")
		const address2RnihO = accounts[5]
		await LayerxocjzcXu.unlock.call({from: accounts[0]});
		const uintXEQhmhn = await LayerxocjzcXu.exist.call(uintHJUOTbt, {from: accounts[1]});
		const addressVRPBC9d = await LayerxocjzcXu.setNewStakeCreator.call(address2RnihO, {from: "0x0000000000000000000000000000000000000001"});
		await LayerxocjzcXu.addStakePayment.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(LayerxocjzcXu.unlock.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressggGCfK = accounts[4]
		const LayerxJVFWhC = await Layerx.new(addressggGCfK, {from: accounts[2]});
		const addressnS8e99U = "0x0000000000000000000000000000000000000001"
		const addressMRuvnPw = accounts[2]
		const uinti1gQVIf = BigInt("106")
		const addressYsDXmX = accounts[4]
		const uintysjVwRt = await LayerxJVFWhC.allowance.call(addressMRuvnPw, addressnS8e99U, {from: accounts[1]});
		const boolSD8UEcm = await LayerxJVFWhC.transfer.call(addressYsDXmX, uinti1gQVIf, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uintysjVwRt, BigInt("0"))
		await expect(LayerxJVFWhC.transfer.call(addressYsDXmX, uinti1gQVIf, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressscFiW2O = accounts[3]
		const LayerxsDzy8Tu = await Layerx.new(addressscFiW2O, {from: accounts[2]});
		const uintxOmRwBD = BigInt("495")
		const addressLCdf6pZ = accounts[0]
		const addresscWW63Pc = accounts[5]
		const addressipHoT9C = accounts[1]
		const uintD0P9DpS = BigInt("814")
		const address1wrMEa = accounts[2]
		const uintmi9qDe = BigInt("1305")
		const boololKOjer = await LayerxsDzy8Tu.approve.call(addressLCdf6pZ, uintxOmRwBD, {from: accounts[0]});
		const uintAJ2LgIb = await LayerxsDzy8Tu.allowance.call(addressipHoT9C, addresscWW63Pc, {from: accounts[3]});
		const boolQJRkIqo = await LayerxsDzy8Tu.transfer.call(address1wrMEa, uintD0P9DpS, {from: accounts[1]});
		const uintHTbtA4f = await LayerxsDzy8Tu.exist.call(uintmi9qDe, {from: accounts[4]});

		assert.equal(boololKOjer, true)
		assert.equal(uintAJ2LgIb, BigInt("0"))
		await expect(LayerxsDzy8Tu.transfer.call(address1wrMEa, uintD0P9DpS, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addresszUIPzux = accounts[4]
		const LayerxLo4qDPv = await Layerx.new(addresszUIPzux, {from: accounts[1]});
		const uintM7jd07 = BigInt("1694")
		const addressnBwIwLJ = accounts[4]
		const addressvDztXfv = accounts[3]
		const uintdt1AOg = BigInt("1121")
		const addressXAtYWbb = accounts[4]
		const uintNpBEN6E = await LayerxLo4qDPv.getStakesNum.call({from: accounts[2]});
		const boolA7jNpdD = await LayerxLo4qDPv.transferFrom.call(addressvDztXfv, addressnBwIwLJ, uintM7jd07, {from: accounts[1]});
		const uintEkxYVSE = await LayerxLo4qDPv.lock.call(uintdt1AOg, {from: accounts[4]});
		await LayerxLo4qDPv.unlock.call({from: accounts[3]});
		await LayerxLo4qDPv.addStakePayment.call({from: "0x0000000000000000000000000000000000000001"});
		const uintoevLtr = await LayerxLo4qDPv.balanceOf.call(addressXAtYWbb, {from: "0x0000000000000000000000000000000000000001"});
		await LayerxLo4qDPv.paused.call({from: accounts[0]});

		assert.equal(uintNpBEN6E, BigInt("1"))
		await expect(LayerxLo4qDPv.transferFrom.call(addressvDztXfv, addressnBwIwLJ, uintM7jd07, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressQ4rAxLe = accounts[2]
		const LayerxocjzcXu = await Layerx.new(addressQ4rAxLe, {from: accounts[3]});
		await LayerxocjzcXu.addStakePayment.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(LayerxocjzcXu.addStakePayment.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressCYhlTvW = accounts[2]
		const LayerxocjzcXu = await Layerx.new(addressCYhlTvW, {from: accounts[3]});
		const uintWoSPsaz = BigInt("475")
		const uintoleJqiB = BigInt("1931")
		const addressRgH1Ltk = accounts[3]
		const addressKeQDYaw = accounts[2]
		const uint256LDkttnt = await LayerxocjzcXu.burn.call(uintWoSPsaz, {from: accounts[2]});
		await LayerxocjzcXu.unlock.call({from: accounts[0]});
		const uintXEQhmhn = await LayerxocjzcXu.exist.call(uintoleJqiB, {from: accounts[1]});
		const uintmOogiKA = await LayerxocjzcXu.allowance.call(addressKeQDYaw, addressRgH1Ltk, {from: accounts[2]});
		const uintlKrilmI = await LayerxocjzcXu.getStakesNum.call({from: accounts[3]});

		await expect(LayerxocjzcXu.unlock.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressLaOaQ68 = accounts[2]
		const LayerxwLry8Ht = await Layerx.new(addressLaOaQ68, {from: accounts[4]});
		const addressPZjJsD0 = "0x0000000000000000000000000000000000000001"
		const uintEYUFWy1 = BigInt("346")
		const addressXHN5AM9 = await LayerxwLry8Ht.transferOwnership.call(addressPZjJsD0, {from: accounts[2]});
		const uint256YvF1shs = await LayerxwLry8Ht.burn.call(uintEYUFWy1, {from: accounts[0]});

		await expect(LayerxwLry8Ht.burn.call(uintEYUFWy1, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addresskkofrLY = accounts[2]
		const LayerxocjzcXu = await Layerx.new(addresskkofrLY, {from: accounts[3]});
		const uintwAG5yl = BigInt("969")
		const addressW7byZ5i = accounts[1]
		await LayerxocjzcXu.f.call({from: accounts[1]});
		const boolroZiDbI = await LayerxocjzcXu.approve.call(addressW7byZ5i, uintwAG5yl, {from: accounts[5]});
		await LayerxocjzcXu.addStakePayment.call({from: "0x0000000000000000000000000000000000000001"});
		await LayerxocjzcXu.unlock.call({from: accounts[0]});

		await expect(LayerxocjzcXu.f.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressMaNdtHs = accounts[2]
		const LayerxocjzcXu = await Layerx.new(addressMaNdtHs, {from: accounts[3]});
		const addresszjo1gsF = "0x0000000000000000000000000000000000000001"
		const uintizrEYZt = BigInt("969")
		const addressMkWiAkN = accounts[1]
		const addressNeGa0V = await LayerxocjzcXu.setNewStakeCreator.call(addresszjo1gsF, {from: accounts[2]});
		const boolroZiDbI = await LayerxocjzcXu.approve.call(addressMkWiAkN, uintizrEYZt, {from: accounts[5]});
		await LayerxocjzcXu.addStakePayment.call({from: "0x0000000000000000000000000000000000000001"});
		await LayerxocjzcXu.unlock.call({from: accounts[0]});

		assert.equal(boolroZiDbI, true)
		await expect(LayerxocjzcXu.addStakePayment.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressv84CLjX = accounts[5]
		const Layerxi5kHkPe = await Layerx.new(addressv84CLjX, {from: accounts[3]});
		const addressncpA1Gk = accounts[4]
		const addressfTuP3XH = accounts[1]
		const uintBQ8OFUK = await Layerxi5kHkPe.balanceOf.call(addressncpA1Gk, {from: accounts[1]});
		const addresspiS3KoZ = await Layerxi5kHkPe.setNewStakeCreator.call(addressfTuP3XH, {from: accounts[2]});
		await Layerxi5kHkPe.unlock.call({from: accounts[2]});

		assert.equal(uintBQ8OFUK, BigInt("0"))
		await expect(Layerxi5kHkPe.setNewStakeCreator.call(addressfTuP3XH, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressE5Gz4jb = accounts[2]
		const LayerxocjzcXu = await Layerx.new(addressE5Gz4jb, {from: accounts[3]});
		const addressFMgDLiy = accounts[3]
		const addressQHqKSh = accounts[2]
		const uinthbg7bn8 = BigInt("1538")
		const uintZ4vkIUn = BigInt("82")
		const byteGe11cvP = "0x1103090c120616021c1a071c171101120d111601070d090c110106050219"
		const uintqGr6IKA = BigInt("963")
		const addressHMvibgU = accounts[3]
		const uintd66aHS3 = BigInt("1000")
		const addressu90IK3N = accounts[1]
		const addressfOwKtwY = accounts[5]
		await LayerxocjzcXu.addStakePayment.call({from: accounts[2]});
		const uintLcBpQdO = await LayerxocjzcXu.allowance.call(addressQHqKSh, addressFMgDLiy, {from: accounts[0]});
		const uintvAWR4FT = await LayerxocjzcXu.exist.call(uinthbg7bn8, {from: accounts[4]});
		const uintVKWSc1Q = await LayerxocjzcXu.lock.call(uintZ4vkIUn, {from: accounts[1]});
		await LayerxocjzcXu.paused.call({from: "0x0000000000000000000000000000000000000001"});
		const boolm7Jmydv = await LayerxocjzcXu.approveAndCall.call(addressHMvibgU, uintqGr6IKA, byteGe11cvP, {from: accounts[5]});
		const bool16q7oF = await LayerxocjzcXu.transferFrom.call(addressfOwKtwY, addressu90IK3N, uintd66aHS3, {from: accounts[0]});

		await expect(LayerxocjzcXu.addStakePayment.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressofr2KRV = accounts[2]
		const LayerxocjzcXu = await Layerx.new(addressofr2KRV, {from: accounts[3]});
		const boolXbQZzls = false
		const uintpew9kng = BigInt("52")
		const address6CAAZz = "0x0000000000000000000000000000000000000001"
		const boolfVq9tmj = await LayerxocjzcXu.setIsPaused.call(boolXbQZzls, {from: accounts[2]});
		const uintVKWSc1Q = await LayerxocjzcXu.lock.call(uintpew9kng, {from: accounts[1]});
		const addressvxmJJnU = await LayerxocjzcXu.transferOwnership.call(address6CAAZz, {from: accounts[4]});
		const uint4OF1QH = await LayerxocjzcXu.totalSupply.call({from: accounts[0]});

		await expect(LayerxocjzcXu.lock.call(uintpew9kng, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressGyis5l = accounts[2]
		const LayerxocjzcXu = await Layerx.new(addressGyis5l, {from: accounts[3]});
		const uintOsj2Auc = BigInt("0")
		const byteOJBV1vL = "0x0e0f060c200a0109161202"
		const uintf2hFrp8 = BigInt("1396")
		const addressQZ52kID = accounts[1]
		const addressp9YzWxS = accounts[1]
		const uintVKWSc1Q = await LayerxocjzcXu.lock.call(uintOsj2Auc, {from: accounts[1]});
		const boolhRf2Eta = await LayerxocjzcXu.approveAndCall.call(addressQZ52kID, uintf2hFrp8, byteOJBV1vL, {from: accounts[0]});
		const addressnLvhvv6 = await LayerxocjzcXu.transferOwnership.call(addressp9YzWxS, {from: accounts[3]});

		await expect(LayerxocjzcXu.lock.call(uintOsj2Auc, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})