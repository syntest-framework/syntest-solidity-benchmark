const Layerx = artifacts.require("Layerx");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Layerx', (accounts) => {
	it('test for Layerx', async () => {
		const addressv8McilE = accounts[1]
		const Layerxm5eW9x = await Layerx.new(addressv8McilE, {from: accounts[2]});
		const uintOQClD6V = BigInt("270")
		const addressuTlpk2 = accounts[3]
		const addresslr3CDoD = accounts[4]
		const addressVIHoQKq = accounts[3]
		const uintmCQDsmi = await Layerxm5eW9x.exist.call(uintOQClD6V, {from: accounts[5]});
		await Layerxm5eW9x.unlock.call({from: accounts[1]});
		const uintsl71JBU = await Layerxm5eW9x.allowance.call(addresslr3CDoD, addressuTlpk2, {from: accounts[1]});
		const addressouhGDJ2 = await Layerxm5eW9x.setNewStakeCreator.call(addressVIHoQKq, {from: accounts[4]});

		await expect(Layerxm5eW9x.exist.call(uintOQClD6V, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressil4G7uY = accounts[1]
		const Layerxv0M7Rcj = await Layerx.new(addressil4G7uY, {from: accounts[1]});
		const byterclYaGD = "0x061f0310090312010c06041603111118151b061b001d050a"
		const uintqb094Nf = BigInt("845")
		const addresswHTnNhU = accounts[4]
		const uinttVefKse = BigInt("1895")
		const boolIjMzIe = await Layerxv0M7Rcj.approveAndCall.call(addresswHTnNhU, uintqb094Nf, byterclYaGD, {from: accounts[2]});
		const uintbblSIbw = await Layerxv0M7Rcj.totalSupply.call({from: accounts[3]});
		const uintD7hiWEM = await Layerxv0M7Rcj.exist.call(uinttVefKse, {from: accounts[2]});

		await expect(Layerxv0M7Rcj.approveAndCall.call(addresswHTnNhU, uintqb094Nf, byterclYaGD, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addresswDlGFUs = accounts[1]
		const LayerxfaKZDy = await Layerx.new(addresswDlGFUs, {from: accounts[1]});
		const uintvTNKlOJ = BigInt("466")
		const addressZenvd5C = accounts[3]
		const uintFz9O4iV = BigInt("968")
		const uintOJr60tz = await LayerxfaKZDy.getStakesNum.call({from: accounts[0]});
		const boolLudUXlu = await LayerxfaKZDy.approve.call(addressZenvd5C, uintvTNKlOJ, {from: accounts[1]});
		const uintjQtDr0t = await LayerxfaKZDy.totalSupply.call({from: accounts[2]});
		const uintCDRsN5H = await LayerxfaKZDy.lock.call(uintFz9O4iV, {from: accounts[0]});
		await LayerxfaKZDy.addStakePayment.call({from: accounts[1]});

		assert.equal(boolLudUXlu, true)
		assert.equal(uintOJr60tz, BigInt("1"))
		assert.equal(uintjQtDr0t, BigInt("40000000000000000000000"))
		await expect(LayerxfaKZDy.lock.call(uintFz9O4iV, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressjWZCzDL = accounts[4]
		const LayerxlBWDVoU = await Layerx.new(addressjWZCzDL, {from: accounts[0]});
		const uintXTKLbsG = BigInt("427")
		const uinti1MbLkV = BigInt("327")
		await LayerxlBWDVoU.f.call({from: accounts[0]});
		await LayerxlBWDVoU.paused.call({from: accounts[1]});
		await LayerxlBWDVoU.onlyOwner.call({from: accounts[0]});
		const uint256UKm0EXs = await LayerxlBWDVoU.burn.call(uintXTKLbsG, {from: accounts[1]});
		const uint256ybJx4r = await LayerxlBWDVoU.burn.call(uinti1MbLkV, {from: accounts[3]});

		await expect(LayerxlBWDVoU.f.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressLdMUeAk = accounts[4]
		const LayerxffEjwbh = await Layerx.new(addressLdMUeAk, {from: accounts[3]});
		const uintGdfFeD = BigInt("2036")
		const addresshEzzDaS = accounts[2]
		const uintD1IRaSZ = BigInt("1647")
		const addressf1qtFo = accounts[1]
		const addressrrEdyV = accounts[4]
		const boolgu6hGcD = await LayerxffEjwbh.transfer.call(addresshEzzDaS, uintGdfFeD, {from: accounts[1]});
		await LayerxffEjwbh.addStakePayment.call({from: accounts[2]});
		const booltwBfol = await LayerxffEjwbh.transferFrom.call(addressrrEdyV, addressf1qtFo, uintD1IRaSZ, {from: accounts[3]});
		const uintbUGxVvQ = await LayerxffEjwbh.totalSupply.call({from: accounts[2]});

		await expect(LayerxffEjwbh.transfer.call(addresshEzzDaS, uintGdfFeD, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addresssbCRSri = accounts[1]
		const LayerxHyoOvXR = await Layerx.new(addresssbCRSri, {from: accounts[2]});
		const byteQ9KcRl6 = "0x181410020e0d0d1e1215101c120a100c"
		const uintK89Qi8R = BigInt("82")
		const addressLwnl9DW = accounts[3]
		const uintRUjYMrA = BigInt("680")
		const addressTPq04CN = "0x0000000000000000000000000000000000000001"
		await LayerxHyoOvXR.unlock.call({from: accounts[5]});
		const boola39L3UH = await LayerxHyoOvXR.approveAndCall.call(addressLwnl9DW, uintK89Qi8R, byteQ9KcRl6, {from: accounts[4]});
		const uintgiGofLr = await LayerxHyoOvXR.lock.call(uintRUjYMrA, {from: accounts[3]});
		const uintJSzGJ7w = await LayerxHyoOvXR.balanceOf.call(addressTPq04CN, {from: accounts[4]});

		await expect(LayerxHyoOvXR.unlock.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addresst2HwQjo = accounts[5]
		const LayerxATj3Q0p = await Layerx.new(addresst2HwQjo, {from: accounts[0]});
		const uintSFwpwKE = BigInt("1482")
		const boolpMx9G1x = false
		const uintmPmyPlE = BigInt("1770")
		await LayerxATj3Q0p.f.call({from: accounts[5]});
		const uintxahMkTc = await LayerxATj3Q0p.withdraw.call(uintSFwpwKE, {from: accounts[5]});
		const booli0UC7CJ = await LayerxATj3Q0p.setIsPaused.call(boolpMx9G1x, {from: accounts[4]});
		const uintx0rrdBN = await LayerxATj3Q0p.getStakesNum.call({from: accounts[4]});
		const uint256oKpm60V = await LayerxATj3Q0p.burn.call(uintmPmyPlE, {from: accounts[3]});

		await expect(LayerxATj3Q0p.f.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addresst8dGN6Z = accounts[0]
		const LayerxNMoyylu = await Layerx.new(addresst8dGN6Z, {from: accounts[1]});
		const uinthZ3SVCw = BigInt("8")
		const addressVwFFWgT = accounts[1]
		const addressWN8sfuT = accounts[1]
		const uintnmekor = BigInt("536")
		const addressPO0YuG4 = "0x0000000000000000000000000000000000000001"
		const addressa97tlzN = accounts[0]
		const addresslLgmKwv = accounts[2]
		const boolqt4bMOK = await LayerxNMoyylu.transferFrom.call(addressWN8sfuT, addressVwFFWgT, uinthZ3SVCw, {from: accounts[1]});
		const booliYMBW9o = await LayerxNMoyylu.transfer.call(addressPO0YuG4, uintnmekor, {from: accounts[3]});
		const uintLOiP614 = await LayerxNMoyylu.allowance.call(addresslLgmKwv, addressa97tlzN, {from: accounts[2]});

		await expect(LayerxNMoyylu.transferFrom.call(addressWN8sfuT, addressVwFFWgT, uinthZ3SVCw, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addresswIcmAeA = accounts[4]
		const LayerxOtPK41X = await Layerx.new(addresswIcmAeA, {from: accounts[0]});
		const uintTXqpl4 = BigInt("1023")
		await LayerxOtPK41X.addStakePayment.call({from: accounts[5]});
		const uint8nhrnb = await LayerxOtPK41X.withdraw.call(uintTXqpl4, {from: accounts[3]});

		await expect(LayerxOtPK41X.addStakePayment.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressBc2GQow = accounts[3]
		const Layerx1wv6H3 = await Layerx.new(addressBc2GQow, {from: "0x0000000000000000000000000000000000000001"});
		const uintLgLHF6p = BigInt("1400")
		const addressq7YNwoH = accounts[5]
		const addressc9dgEKr = accounts[5]
		const bytefWakRKw = "0x1d1f1a071513071f11141c"
		const uintHBLhKDp = BigInt("1810")
		const addressHTY6DKp = accounts[3]
		const uintHpnum62 = BigInt("1108")
		const addressVoTT9MT = accounts[0]
		const addressYSKlqUk = accounts[0]
		const boolXx0wodM = await Layerx1wv6H3.transferFrom.call(addressc9dgEKr, addressq7YNwoH, uintLgLHF6p, {from: accounts[2]});
		await Layerx1wv6H3.unlock.call({from: accounts[5]});
		const boolXaj485r = await Layerx1wv6H3.approveAndCall.call(addressHTY6DKp, uintHBLhKDp, bytefWakRKw, {from: accounts[4]});
		const booldRl0q7p = await Layerx1wv6H3.approve.call(addressVoTT9MT, uintHpnum62, {from: accounts[2]});
		const addressGYFC9a = await Layerx1wv6H3.transferOwnership.call(addressYSKlqUk, {from: accounts[3]});
	});

	it('test for Layerx', async () => {
		const addresszDATdbw = accounts[2]
		const LayerxgZ5z6LV = await Layerx.new(addresszDATdbw, {from: accounts[2]});
		const addressCnk8XsR = accounts[0]
		const addresszx3sczz = accounts[4]
		const uintRrJYAfs = BigInt("175")
		const addresswFmUm8z = accounts[0]
		const uintMpyBGJp = await LayerxgZ5z6LV.allowance.call(addresszx3sczz, addressCnk8XsR, {from: accounts[2]});
		const uintSByghF = await LayerxgZ5z6LV.lock.call(uintRrJYAfs, {from: accounts[0]});
		await LayerxgZ5z6LV.paused.call({from: accounts[5]});
		const addressHoOcvfm = await LayerxgZ5z6LV.setNewStakeCreator.call(addresswFmUm8z, {from: accounts[1]});

		assert.equal(uintMpyBGJp, BigInt("0"))
		await expect(LayerxgZ5z6LV.lock.call(uintRrJYAfs, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressZgoiMu = accounts[0]
		const LayerxiLvliS = await Layerx.new(addressZgoiMu, {from: accounts[1]});
		const uintwMLIDeb = BigInt("1390")
		const addressrVB2gkC = accounts[3]
		const addressbLbbueb = accounts[3]
		const addressvtqcvvw = accounts[0]
		const uintA3ur3oZ = BigInt("1103")
		const addressHgQkVF = accounts[1]
		const addressjMoFSr = accounts[3]
		const boolkbfSXc = await LayerxiLvliS.approve.call(addressrVB2gkC, uintwMLIDeb, {from: accounts[5]});
		const uintnoMnJLJ = await LayerxiLvliS.balanceOf.call(addressbLbbueb, {from: accounts[2]});
		const uintZRvkUiX = await LayerxiLvliS.totalSupply.call({from: accounts[2]});
		const addressMTDABG = await LayerxiLvliS.transferOwnership.call(addressvtqcvvw, {from: accounts[1]});
		const boolofe49sv = await LayerxiLvliS.transferFrom.call(addressjMoFSr, addressHgQkVF, uintA3ur3oZ, {from: accounts[1]});

		assert.equal(boolkbfSXc, true)
		assert.equal(uintZRvkUiX, BigInt("40000000000000000000000"))
		assert.equal(uintnoMnJLJ, BigInt("0"))
		await expect(LayerxiLvliS.transferOwnership.call(addressvtqcvvw, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressvjBvvS = accounts[4]
		const LayerxOtPK41X = await Layerx.new(addressvjBvvS, {from: accounts[0]});
		const uintKrX7rU = BigInt("1277")
		const uintNWTrTBK = BigInt("745")
		const uintWloA4k7 = BigInt("315")
		await LayerxOtPK41X.f.call({from: accounts[0]});
		const uint256BhChSSJ = await LayerxOtPK41X.burn.call(uintKrX7rU, {from: accounts[4]});
		const uintbEvuPL1 = await LayerxOtPK41X.lock.call(uintNWTrTBK, {from: accounts[3]});
		const uintvw75vG = await LayerxOtPK41X.totalSupply.call({from: accounts[4]});
		await LayerxOtPK41X.paused.call({from: accounts[0]});
		const uint256drc8tm5 = await LayerxOtPK41X.burn.call(uintWloA4k7, {from: accounts[0]});

		await expect(LayerxOtPK41X.f.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressfSeYBNB = accounts[3]
		const LayerxqVyUe4A = await Layerx.new(addressfSeYBNB, {from: accounts[4]});
		const addressHORZjU6 = accounts[4]
		const uintPeXFND1 = BigInt("442")
		const addressWpHKStW = accounts[0]
		const addressE2MyQH = "0x0000000000000000000000000000000000000001"
		const addressKZW9SJw = await LayerxqVyUe4A.transferOwnership.call(addressHORZjU6, {from: accounts[3]});
		const boolD7TzGb = await LayerxqVyUe4A.transferFrom.call(addressE2MyQH, addressWpHKStW, uintPeXFND1, {from: accounts[2]});
		await LayerxqVyUe4A.unlock.call({from: accounts[4]});
		await LayerxqVyUe4A.addStakePayment.call({from: accounts[1]});

		await expect(LayerxqVyUe4A.transferFrom.call(addressE2MyQH, addressWpHKStW, uintPeXFND1, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressbql64RS = "0x0000000000000000000000000000000000000001"
		const LayerxjgcoPEt = await Layerx.new(addressbql64RS, {from: accounts[4]});
		const boolo3QSoDp = true
		const uintmTSZBBr = BigInt("748")
		const uintx1udp5 = BigInt("1620")
		const boolr90Oz2S = await LayerxjgcoPEt.setIsPaused.call(boolo3QSoDp, {from: "0x0000000000000000000000000000000000000001"});
		await LayerxjgcoPEt.paused.call({from: accounts[4]});
		const uintERfG1qv = await LayerxjgcoPEt.exist.call(uintmTSZBBr, {from: accounts[2]});
		const uintWpezhRE = await LayerxjgcoPEt.withdraw.call(uintx1udp5, {from: accounts[4]});
		const uintxpNiB1l = await LayerxjgcoPEt.getStakesNum.call({from: accounts[5]});

		await expect(LayerxjgcoPEt.paused.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressRlA7Nt8 = accounts[4]
		const LayerxOtPK41X = await Layerx.new(addressRlA7Nt8, {from: accounts[0]});
		await LayerxOtPK41X.addStakePayment.call({from: accounts[4]});
		await LayerxOtPK41X.addStakePayment.call({from: accounts[5]});

		await expect(LayerxOtPK41X.addStakePayment.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressZxaKFiL = accounts[4]
		const LayerxOtPK41X = await Layerx.new(addressZxaKFiL, {from: accounts[0]});
		const uintdphf4sD = BigInt("0")
		const uintD3ElTy7 = BigInt("167")
		const addressGYxKGje = accounts[4]
		const uintNemF4iX = await LayerxOtPK41X.lock.call(uintdphf4sD, {from: accounts[5]});
		await LayerxOtPK41X.addStakePayment.call({from: accounts[5]});
		const uintChFx8zv = await LayerxOtPK41X.withdraw.call(uintD3ElTy7, {from: accounts[0]});
		const addressQy9m1fN = await LayerxOtPK41X.transferOwnership.call(addressGYxKGje, {from: accounts[4]});
		const uintWsetZxw = await LayerxOtPK41X.getStakesNum.call({from: accounts[2]});

		await expect(LayerxOtPK41X.lock.call(uintdphf4sD, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressV0fHyJt = accounts[1]
		const LayerxHyoOvXR = await Layerx.new(addressV0fHyJt, {from: accounts[2]});
		const addressWvCppPf = accounts[1]
		const addressGXncXcq = await LayerxHyoOvXR.setNewStakeCreator.call(addressWvCppPf, {from: accounts[1]});
		await LayerxHyoOvXR.unlock.call({from: accounts[5]});

		await expect(LayerxHyoOvXR.unlock.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});
})