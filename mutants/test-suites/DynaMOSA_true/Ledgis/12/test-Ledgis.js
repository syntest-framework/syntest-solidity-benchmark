const Ledgis = artifacts.require("Ledgis");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Ledgis', (accounts) => {
	it('test for Ledgis', async () => {
		const Ledgissxek9ja = await Ledgis.new({from: accounts[0]});
		const addresspjlXbOU = accounts[4]
		const addressa4VpjN = accounts[2]
		const addressEBst4to = accounts[0]
		const uintVhZdZHT = BigInt("1737")
		const addressYy6X8Yh = accounts[5]
//		const addressaPdC5Y2 = await Ledgissxek9ja.unfreeze.call(addresspjlXbOU, {from: accounts[1]});
//		const uint256ir5EKq = await Ledgissxek9ja.allowance.call(addressEBst4to, addressa4VpjN, {from: accounts[4]});
//		const boolr0aa1K = await Ledgissxek9ja.increaseAllowance.call(addressYy6X8Yh, uintVhZdZHT, {from: accounts[0]});

		await expect(Ledgissxek9ja.unfreeze.call(addresspjlXbOU, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgiswMDcPo = await Ledgis.new({from: accounts[4]});
		const uintn2kS8kr = BigInt("933")
		const addressPaTEUdY = accounts[1]
		const uintZyPaSGM = BigInt("935")
		const addressXzB0DJy = accounts[3]
		const uintN5EPk0 = BigInt("1920")
		const addressojdYi2 = accounts[1]
		const addressCNOe8kP = accounts[1]
		const addressaHqV1GR = accounts[3]
		const uintf14v7LJ = BigInt("12")
		const addressPgEaPtA = accounts[0]
//		const addressQRnNh3y = await LedgiswMDcPo.unlock.call(addressPaTEUdY, uintn2kS8kr, {from: accounts[4]});
//		const boolcFHkS7t = await LedgiswMDcPo.increaseAllowance.call(addressXzB0DJy, uintZyPaSGM, {from: accounts[5]});
//		const boolV22FrYe = await LedgiswMDcPo.transferFrom.call(addressCNOe8kP, addressojdYi2, uintN5EPk0, {from: accounts[1]});
//		const boolEAv0lP7 = await LedgiswMDcPo.isFrozen.call(addressaHqV1GR, {from: accounts[2]});
//		const boolgP2vulK = await LedgiswMDcPo.decreaseAllowance.call(addressPgEaPtA, uintf14v7LJ, {from: accounts[5]});

		await expect(LedgiswMDcPo.unlock.call(addressPaTEUdY, uintn2kS8kr, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgismbCe1YU = await Ledgis.new({from: accounts[5]});
		const addresspFMdse3 = accounts[0]
		const addressNE1boHb = accounts[1]
		const uintrndhKBf = BigInt("1223")
		const addresspRXLXHH = accounts[5]
//		await LedgismbCe1YU.whenPaused.call({from: accounts[5]});
//		await LedgismbCe1YU.pause.call({from: accounts[2]});
//		const uint256UXTTKYY = await LedgismbCe1YU.allowance.call(addressNE1boHb, addresspFMdse3, {from: accounts[1]});
//		const boolMwsVUKi = await LedgismbCe1YU.transfer.call(addresspRXLXHH, uintrndhKBf, {from: accounts[4]});

		await expect(LedgismbCe1YU.whenPaused.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisDFuWTkI = await Ledgis.new({from: accounts[0]});
		const addressATwhN2 = "0x0000000000000000000000000000000000000001"
		const uinttzxAdOd = BigInt("1454")
		const uintkllNZPU = BigInt("892")
		const addressGndg2Tw = accounts[1]
		const addressGE5Hsmu = accounts[5]
		const uinteusm7G = BigInt("1824")
		const addressxzcWhBF = accounts[1]
		const boolZmEWfHx = await LedgisDFuWTkI.isFrozen.call(addressATwhN2, {from: "0x0000000000000000000000000000000000000001"});
//		const boolX70iGem = await LedgisDFuWTkI.transferWithLockAfter.call(addressGndg2Tw, uintkllNZPU, uinttzxAdOd, {from: accounts[1]});
//		const addressct8Ty6m = await LedgisDFuWTkI.unfreeze.call(addressGE5Hsmu, {from: "0x0000000000000000000000000000000000000001"});
//		const boolkxXXEVf = await LedgisDFuWTkI.approve.call(addressxzcWhBF, uinteusm7G, {from: accounts[5]});

		assert.equal(boolZmEWfHx, false)
		await expect(LedgisDFuWTkI.transferWithLockAfter.call(addressGndg2Tw, uintkllNZPU, uinttzxAdOd, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisDIasDFI = await Ledgis.new({from: accounts[4]});
		const uintf6QqmpZ = BigInt("194")
		const addressWFSU3i6 = accounts[2]
		const uintNPwLfcz = BigInt("2007")
		const uintHzaWoi4 = BigInt("529")
		const addressQerzBZj = accounts[0]
		const uintWoUDdB3 = BigInt("1996")
		const uintuBOSi7w = BigInt("300")
		const addressvyT9OgY = accounts[4]
//		await LedgisDIasDFI.lockState.call(addressWFSU3i6, uintf6QqmpZ, {from: accounts[0]});
//		const addressRHqOe6k = await LedgisDIasDFI.lock.call(addressQerzBZj, uintHzaWoi4, uintNPwLfcz, {from: accounts[2]});
//		const addressrE5tdOk = await LedgisDIasDFI.lock.call(addressvyT9OgY, uintuBOSi7w, uintWoUDdB3, {from: accounts[0]});
//		await LedgisDIasDFI.onlyOwner.call({from: accounts[1]});

		await expect(LedgisDIasDFI.lockState.call(addressWFSU3i6, uintf6QqmpZ, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisAfDvxbW = await Ledgis.new({from: accounts[2]});
		const uintv0fh2Lx = BigInt("308")
		const addressHzwFz5 = accounts[2]
		const uintkref1Qp = BigInt("1359")
		const addressT98JjFG = "0x0000000000000000000000000000000000000001"
		const uintacgIQje = BigInt("1594")
		const addresskhyLLPi = accounts[5]
		const addressavDv3Q = accounts[1]
//		const boolAb6Phty = await LedgisAfDvxbW.transfer.call(addressHzwFz5, uintv0fh2Lx, {from: accounts[0]});
//		const addressuvTaUL = await LedgisAfDvxbW.burn.call(addressT98JjFG, uintkref1Qp, {from: accounts[0]});
//		const boolBKaOMD3 = await LedgisAfDvxbW.transferFrom.call(addressavDv3Q, addresskhyLLPi, uintacgIQje, {from: accounts[0]});

		await expect(LedgisAfDvxbW.transfer.call(addressHzwFz5, uintv0fh2Lx, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgiskMjSSDq = await Ledgis.new({from: accounts[0]});
		const uintG5RKjSz = BigInt("951")
		const addressNlUsQK5 = accounts[3]
		const uintLcUEfi7 = BigInt("1112")
		const addressgaMSkIS = accounts[1]
		const uintfaAAzR6 = BigInt("786")
		const addresszcn43V = accounts[5]
		const addressK6XpjS = accounts[2]
		const uintRWsgMLk = BigInt("503")
		const addressoyESaSK = accounts[0]
		const addresszEfv2wG = accounts[3]
		const boolrpyK48N = await LedgiskMjSSDq.approve.call(addressNlUsQK5, uintG5RKjSz, {from: accounts[5]});
//		const boolPrRh5tH = await LedgiskMjSSDq.mint.call(addressgaMSkIS, uintLcUEfi7, {from: accounts[3]});
//		const boolxgUo7Lf = await LedgiskMjSSDq.transferFrom.call(addressK6XpjS, addresszcn43V, uintfaAAzR6, {from: accounts[3]});
//		const boolrZOWorT = await LedgiskMjSSDq.transfer.call(addressoyESaSK, uintRWsgMLk, {from: accounts[3]});
//		const addressi2xRhL = await LedgiskMjSSDq.freeze.call(addresszEfv2wG, {from: accounts[4]});

		assert.equal(boolrpyK48N, true)
		await expect(LedgiskMjSSDq.mint.call(addressgaMSkIS, uintLcUEfi7, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const Ledgissxek9ja = await Ledgis.new({from: accounts[0]});
		const addressVljMRxr = accounts[2]
		const addressy9QIof = accounts[0]
		const uintt23Mxa1 = BigInt("1737")
		const addressTHNALCf = accounts[5]
		const uint256ir5EKq = await Ledgissxek9ja.allowance.call(addressy9QIof, addressVljMRxr, {from: accounts[4]});
		const boolr0aa1K = await Ledgissxek9ja.increaseAllowance.call(addressTHNALCf, uintt23Mxa1, {from: accounts[0]});

		assert.equal(boolr0aa1K, true)
		assert.equal(uint256ir5EKq, BigInt("0"))
	});

	it('test for Ledgis', async () => {
		const LedgiswMDcPo = await Ledgis.new({from: accounts[4]});
		const addressDiOjRE = accounts[3]
		const uintWuuImEx = BigInt("933")
		const addressA6h0jEz = accounts[1]
		const uintZXwQpFw = BigInt("935")
		const addressW7S0ONt = accounts[4]
		const uintPMr0doW = BigInt("1920")
		const addressHaRZvui = accounts[1]
		const addressRNv9sOK = accounts[1]
		const addressTdBwdC = accounts[3]
		const uintUoOKa5w = BigInt("16")
		const addresskNOiPMR = accounts[0]
		const uintcVxBt9Z = BigInt("417")
		const addressVeTOeWC = accounts[0]
		const addressqlTa5O4 = await LedgiswMDcPo.transferOwnership.call(addressDiOjRE, {from: accounts[4]});
//		const addressQRnNh3y = await LedgiswMDcPo.unlock.call(addressA6h0jEz, uintWuuImEx, {from: accounts[4]});
//		const boolcFHkS7t = await LedgiswMDcPo.increaseAllowance.call(addressW7S0ONt, uintZXwQpFw, {from: accounts[5]});
//		const boolV22FrYe = await LedgiswMDcPo.transferFrom.call(addressRNv9sOK, addressHaRZvui, uintPMr0doW, {from: accounts[1]});
//		const boolEAv0lP7 = await LedgiswMDcPo.isFrozen.call(addressTdBwdC, {from: accounts[2]});
//		const boolgP2vulK = await LedgiswMDcPo.decreaseAllowance.call(addresskNOiPMR, uintUoOKa5w, {from: accounts[5]});
//		const boolvmT1AO4 = await LedgiswMDcPo.decreaseAllowance.call(addressVeTOeWC, uintcVxBt9Z, {from: accounts[4]});
//		await LedgiswMDcPo.whenNotPaused.call({from: accounts[4]});

		await expect(LedgiswMDcPo.unlock.call(addressA6h0jEz, uintWuuImEx, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisAfDvxbW = await Ledgis.new({from: accounts[2]});
		const uintv6bmHZQ = BigInt("1594")
		const addressYOpfMAE = accounts[5]
		const addressYqbjlq6 = accounts[1]
//		const boolBKaOMD3 = await LedgisAfDvxbW.transferFrom.call(addressYqbjlq6, addressYOpfMAE, uintv6bmHZQ, {from: accounts[0]});

		await expect(LedgisAfDvxbW.transferFrom.call(addressYqbjlq6, addressYOpfMAE, uintv6bmHZQ, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisAfDvxbW = await Ledgis.new({from: accounts[2]});
		const addressIpMVYi4 = accounts[4]
		const uintpnvOV7 = BigInt("363")
		const addressmrbTIEc = accounts[2]
		const addressAsJaWxY = accounts[5]
		const uintv2QK7N = BigInt("1594")
		const addressw5TjQ7d = accounts[5]
		const addressykw2nxV = accounts[1]
		const uintp2nt2c8 = BigInt("1319")
		const addressxw0gxJl = accounts[5]
		const address3FNdOA = await LedgisAfDvxbW.freeze.call(addressIpMVYi4, {from: accounts[2]});
//		const boolAb6Phty = await LedgisAfDvxbW.transfer.call(addressmrbTIEc, uintpnvOV7, {from: accounts[0]});
//		const boolRTg1hsd = await LedgisAfDvxbW.isFrozen.call(addressAsJaWxY, {from: "0x0000000000000000000000000000000000000001"});
//		const boolBKaOMD3 = await LedgisAfDvxbW.transferFrom.call(addressykw2nxV, addressw5TjQ7d, uintv2QK7N, {from: accounts[0]});
//		const boolE6Qwxmk = await LedgisAfDvxbW.approve.call(addressxw0gxJl, uintp2nt2c8, {from: accounts[1]});

		await expect(LedgisAfDvxbW.transfer.call(addressmrbTIEc, uintpnvOV7, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisIPTLs5 = await Ledgis.new({from: accounts[4]});
		const uintxVyGF2 = BigInt("653")
		const addressEk255mJ = accounts[3]
		const addresskSVIjfM = accounts[4]
		const addressnUIQsT2 = "0x0000000000000000000000000000000000000001"
//		const boolSxZApDq = await LedgisIPTLs5.decreaseAllowance.call(addressEk255mJ, uintxVyGF2, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256y7WymnB = await LedgisIPTLs5.balanceOf.call(addresskSVIjfM, {from: accounts[1]});
//		await LedgisIPTLs5.whenNotFrozen.call({from: accounts[2]});
//		const boolZ3xiURa = await LedgisIPTLs5.isFrozen.call(addressnUIQsT2, {from: "0x0000000000000000000000000000000000000001"});

		await expect(LedgisIPTLs5.decreaseAllowance.call(addressEk255mJ, uintxVyGF2, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisAfDvxbW = await Ledgis.new({from: accounts[2]});
		const addressPtFbwhq = accounts[5]
		const addressvtpB3IP = accounts[5]
		const uinthy3mfOr = BigInt("1594")
		const addressIKGJzr4 = accounts[5]
		const addressb5kvate = accounts[2]
		const uintmJDL7xr = BigInt("536")
		const addressk11KcGp = accounts[1]
		const uintmiJDIS6 = BigInt("1319")
		const addressHzve4Ub = accounts[5]
		const address3FNdOA = await LedgisAfDvxbW.freeze.call(addressPtFbwhq, {from: accounts[2]});
		const boolRTg1hsd = await LedgisAfDvxbW.isFrozen.call(addressvtpB3IP, {from: "0x0000000000000000000000000000000000000001"});
		const uint256Oe5ylTG = await LedgisAfDvxbW.totalSupply.call({from: accounts[0]});
//		const boolBKaOMD3 = await LedgisAfDvxbW.transferFrom.call(addressb5kvate, addressIKGJzr4, uinthy3mfOr, {from: accounts[0]});
//		const boolfh5gPe = await LedgisAfDvxbW.transfer.call(addressk11KcGp, uintmJDL7xr, {from: accounts[1]});
//		const boolE6Qwxmk = await LedgisAfDvxbW.approve.call(addressHzve4Ub, uintmiJDIS6, {from: accounts[1]});

		assert.equal(boolRTg1hsd, false)
		assert.equal(uint256Oe5ylTG, BigInt("10000000000000"))
		await expect(LedgisAfDvxbW.transferFrom.call(addressb5kvate, addressIKGJzr4, uinthy3mfOr, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisJj9N6y = await Ledgis.new({from: accounts[4]});
		const uintrfxuUae = BigInt("1567")
		const uintLGyyWz = BigInt("1968")
		const address2yZrSy = accounts[3]
		const addressEosI70c = accounts[2]
		const uintCZy9HyX = BigInt("1547")
		const addressqDwobLh = "0x0000000000000000000000000000000000000001"
		const boolFksVskZ = await LedgisJj9N6y.transferWithLockAfter.call(address2yZrSy, uintLGyyWz, uintrfxuUae, {from: accounts[4]});
//		const addressDkzJJLu = await LedgisJj9N6y.transferOwnership.call(addressEosI70c, {from: accounts[3]});
//		await LedgisJj9N6y.unpause.call({from: accounts[2]});
//		const boolkSSfvgD = await LedgisJj9N6y.increaseAllowance.call(addressqDwobLh, uintCZy9HyX, {from: accounts[5]});

		assert.equal(boolFksVskZ, true)
		await expect(LedgisJj9N6y.transferOwnership.call(addressEosI70c, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisAfDvxbW = await Ledgis.new({from: accounts[2]});
		const addressXlbi1ec = accounts[5]
		const addressneIi6pK = accounts[5]
		const uinthVd9ueb = BigInt("1594")
		const address56jmIA = accounts[7]
		const addresssIYENST = accounts[1]
		const uintMKib0w4 = BigInt("1319")
		const addressbam8GH6 = accounts[5]
		const address3FNdOA = await LedgisAfDvxbW.freeze.call(addressXlbi1ec, {from: accounts[2]});
//		await LedgisAfDvxbW.renounceOwnership.call({from: accounts[2]});
//		const boolRTg1hsd = await LedgisAfDvxbW.isFrozen.call(addressneIi6pK, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256RhLvVkh = await LedgisAfDvxbW.currentTime.call({from: accounts[3]});
//		const boolBKaOMD3 = await LedgisAfDvxbW.transferFrom.call(addresssIYENST, address56jmIA, uinthVd9ueb, {from: accounts[0]});
//		const boolE6Qwxmk = await LedgisAfDvxbW.approve.call(addressbam8GH6, uintMKib0w4, {from: accounts[1]});

		await expect(LedgisAfDvxbW.renounceOwnership.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisjDXPI2Z = await Ledgis.new({from: "0x0000000000000000000000000000000000000001"});
		const addressdNqlEOU = accounts[4]
		const uintOoPejnE = BigInt("208")
		const addressIkMuL6d = accounts[1]
		const addressdEIIJwu = await LedgisjDXPI2Z.unfreeze.call(addressdNqlEOU, {from: accounts[4]});
		const addresszjAuU7s = await LedgisjDXPI2Z.burn.call(addressIkMuL6d, uintOoPejnE, {from: accounts[3]});
	});

	it('test for Ledgis', async () => {
		const LedgisAfDvxbW = await Ledgis.new({from: accounts[2]});
		const addressB64kfXv = accounts[5]
		const uintJj532Ji = BigInt("961")
		const addressMiksMOg = accounts[1]
		const addressIsNZK5C = accounts[5]
		const uintrrYXIa8 = BigInt("1319")
		const addressb9qn7eW = accounts[5]
		const address3FNdOA = await LedgisAfDvxbW.freeze.call(addressB64kfXv, {from: accounts[2]});
//		await LedgisAfDvxbW.unpause.call({from: accounts[2]});
//		const boolY4I9ih = await LedgisAfDvxbW.decreaseAllowance.call(addressMiksMOg, uintJj532Ji, {from: accounts[4]});
//		const boolRTg1hsd = await LedgisAfDvxbW.isFrozen.call(addressIsNZK5C, {from: "0x0000000000000000000000000000000000000001"});
//		const boolE6Qwxmk = await LedgisAfDvxbW.approve.call(addressb9qn7eW, uintrrYXIa8, {from: accounts[1]});

		await expect(LedgisAfDvxbW.unpause.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisAfDvxbW = await Ledgis.new({from: accounts[2]});
		const addressV5jSY6E = accounts[5]
		const addressSwSHbxZ = accounts[5]
		const addressEQR3dcu = accounts[0]
		const uint0RfOqH = BigInt("1594")
		const addressoFa0B6T = accounts[5]
		const addressYRC1SFL = accounts[2]
		const uintxmu7aFq = BigInt("536")
		const addressUC885X8 = accounts[1]
		const uint0SzoF2 = BigInt("1319")
		const addressvuHr79L = accounts[5]
		const address3FNdOA = await LedgisAfDvxbW.freeze.call(addressV5jSY6E, {from: accounts[2]});
		const boolRTg1hsd = await LedgisAfDvxbW.isFrozen.call(addressSwSHbxZ, {from: "0x0000000000000000000000000000000000000001"});
		const uint256m1ZMYCU = await LedgisAfDvxbW.balanceOf.call(addressEQR3dcu, {from: accounts[2]});
//		await LedgisAfDvxbW.whenPaused.call({from: "0x0000000000000000000000000000000000000001"});
//		const boolBKaOMD3 = await LedgisAfDvxbW.transferFrom.call(addressYRC1SFL, addressoFa0B6T, uint0RfOqH, {from: accounts[0]});
//		await LedgisAfDvxbW.onlyOwner.call({from: accounts[2]});
//		const boolfh5gPe = await LedgisAfDvxbW.transfer.call(addressUC885X8, uintxmu7aFq, {from: accounts[1]});
//		const boolE6Qwxmk = await LedgisAfDvxbW.approve.call(addressvuHr79L, uint0SzoF2, {from: accounts[1]});

		assert.equal(boolRTg1hsd, false)
		assert.equal(uint256m1ZMYCU, BigInt("0"))
		await expect(LedgisAfDvxbW.whenPaused.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisSoWBHgI = await Ledgis.new({from: accounts[0]});
		const uintODz7wEQ = BigInt("661")
		const addressoNN5a12 = accounts[1]
		const addressdjWX5No = accounts[3]
		const boola7EWlR = await LedgisSoWBHgI.increaseAllowance.call(addressoNN5a12, uintODz7wEQ, {from: accounts[3]});
		const uint256juViSO0 = await LedgisSoWBHgI.lockCount.call(addressdjWX5No, {from: accounts[0]});
//		await LedgisSoWBHgI.whenPaused.call({from: accounts[0]});

		assert.equal(boola7EWlR, true)
		assert.equal(uint256juViSO0, BigInt("0"))
		await expect(LedgisSoWBHgI.whenPaused.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgiswMDcPo = await Ledgis.new({from: accounts[4]});
		const addressShfw3N9 = accounts[3]
		const uintvJiMUsU = BigInt("943")
		const addressAnstW75 = accounts[1]
		const addressOWwBP2j = accounts[5]
		const addressOQkvrE = await LedgiswMDcPo.unfreeze.call(addressShfw3N9, {from: accounts[4]});
//		await LedgiswMDcPo.whenPaused.call({from: accounts[2]});
//		const addressQRnNh3y = await LedgiswMDcPo.unlock.call(addressAnstW75, uintvJiMUsU, {from: accounts[4]});
//		const boolEAv0lP7 = await LedgiswMDcPo.isFrozen.call(addressOWwBP2j, {from: accounts[2]});

		await expect(LedgiswMDcPo.whenPaused.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisAfDvxbW = await Ledgis.new({from: accounts[2]});
		const uintROrAMe = BigInt("1045")
		const uintuE8COM6 = BigInt("1594")
		const addressEiBW7xB = accounts[6]
		const addressl7Nu13 = accounts[1]
		const uint256yL1Q8Hb = await LedgisAfDvxbW.afterTime.call(uintROrAMe, {from: "0x0000000000000000000000000000000000000001"});
		const uint256oUQHtRI = await LedgisAfDvxbW.currentTime.call({from: accounts[3]});
//		const boolBKaOMD3 = await LedgisAfDvxbW.transferFrom.call(addressl7Nu13, addressEiBW7xB, uintuE8COM6, {from: accounts[0]});

		assert.equal(uint256oUQHtRI, BigInt("1630233517"))
		assert.equal(uint256yL1Q8Hb, BigInt("1630234562"))
		await expect(LedgisAfDvxbW.transferFrom.call(addressl7Nu13, addressEiBW7xB, uintuE8COM6, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisWShl6tj = await Ledgis.new({from: accounts[5]});
		const uintd27Tyf = BigInt("205")
		const addressERZuIVP = accounts[2]
		const uintkJviX5N = BigInt("869")
		const addressoR9Kazz = accounts[0]
		const addressuEQ1i88 = accounts[0]
		const uintVBB3OVG = BigInt("998")
		const addressDB0rmWv = "0x0000000000000000000000000000000000000001"
		const addressp2hSW0A = accounts[3]
		const uintk3DDlm9 = BigInt("1699")
		const addresswZFr1ZY = accounts[0]
//		const addresskPMEBFk = await LedgisWShl6tj.burn.call(addressERZuIVP, uintd27Tyf, {from: accounts[5]});
//		const boolnkxh1a6 = await LedgisWShl6tj.transferFrom.call(addressuEQ1i88, addressoR9Kazz, uintkJviX5N, {from: "0x0000000000000000000000000000000000000001"});
//		const boolPyHUrM7 = await LedgisWShl6tj.transferFrom.call(addressp2hSW0A, addressDB0rmWv, uintVBB3OVG, {from: accounts[5]});
//		const boolxow3WNz = await LedgisWShl6tj.approve.call(addresswZFr1ZY, uintk3DDlm9, {from: accounts[1]});

		await expect(LedgisWShl6tj.burn.call(addressERZuIVP, uintd27Tyf, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgiswMDcPo = await Ledgis.new({from: accounts[4]});
		const uintP30lHS = BigInt("1659")
		const uintRdQ8exU = BigInt("1387")
		const addressqmvL6J = accounts[3]
		const uintgiYy2SQ = BigInt("943")
		const addressp6TFxkQ = accounts[1]
		const addressYynRgdb = accounts[4]
//		const addressBZcIlA = await LedgiswMDcPo.lockAfter.call(addressqmvL6J, uintRdQ8exU, uintP30lHS, {from: accounts[4]});
//		const addressQRnNh3y = await LedgiswMDcPo.unlock.call(addressp6TFxkQ, uintgiYy2SQ, {from: accounts[4]});
//		const boolEAv0lP7 = await LedgiswMDcPo.isFrozen.call(addressYynRgdb, {from: accounts[2]});

		await expect(LedgiswMDcPo.lockAfter.call(addressqmvL6J, uintRdQ8exU, uintP30lHS, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisAfDvxbW = await Ledgis.new({from: accounts[2]});
		const addresslAz2MV0 = accounts[1]
		const uintsidAhHP = BigInt("1017")
		const addressejUTsoI = "0x0000000000000000000000000000000000000001"
		const uintASbgkjD = BigInt("1594")
		const addressJ9a1Xcv = accounts[5]
		const addressH4iJs0o = accounts[1]
//		await LedgisAfDvxbW.pause.call({from: accounts[2]});
//		const addressubfQ4R8 = await LedgisAfDvxbW.freeze.call(addresslAz2MV0, {from: accounts[3]});
//		const boolNkIqTN5 = await LedgisAfDvxbW.transfer.call(addressejUTsoI, uintsidAhHP, {from: accounts[0]});
//		const boolBKaOMD3 = await LedgisAfDvxbW.transferFrom.call(addressH4iJs0o, addressJ9a1Xcv, uintASbgkjD, {from: accounts[0]});

		await expect(LedgisAfDvxbW.pause.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisAfDvxbW = await Ledgis.new({from: accounts[2]});
		const addresskwPbdaz = accounts[0]
		const uintL0FlnpN = BigInt("1151")
		const uintcKbmljx = BigInt("716")
		const addressdLdCFJ3 = accounts[4]
		const uintmU2Xlt0 = BigInt("542")
		const uintX5dqmGt = BigInt("1231")
		const addresssdnunCC = accounts[2]
		const uint256blGQgOH = await LedgisAfDvxbW.balanceOf.call(addresskwPbdaz, {from: accounts[3]});
//		const addressACTbHoV = await LedgisAfDvxbW.lock.call(addressdLdCFJ3, uintcKbmljx, uintL0FlnpN, {from: accounts[2]});
//		const addresstSNmeLI = await LedgisAfDvxbW.lock.call(addresssdnunCC, uintX5dqmGt, uintmU2Xlt0, {from: accounts[1]});

		assert.equal(uint256blGQgOH, BigInt("0"))
		await expect(LedgisAfDvxbW.lock.call(addressdLdCFJ3, uintcKbmljx, uintL0FlnpN, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgiswMDcPo = await Ledgis.new({from: accounts[4]});
		const addressZlzzdfE = accounts[1]
		const uintTPP7eDC = BigInt("871")
		const addressI4dTrto = "0x0000000000000000000000000000000000000001"
		const uintKvNRF0X = BigInt("1271")
		const addresskhsCPVm = accounts[4]
		const uintSeu8lo7 = BigInt("943")
		const addressQzyieq = accounts[1]
		const boolgq4Nlxs = await LedgiswMDcPo.isFrozen.call(addressZlzzdfE, {from: accounts[2]});
		const boolIWuf8Ue = await LedgiswMDcPo.transfer.call(addressI4dTrto, uintTPP7eDC, {from: accounts[4]});
		const boolyIGm9RW = await LedgiswMDcPo.mint.call(addresskhsCPVm, uintKvNRF0X, {from: accounts[4]});
//		const addressQRnNh3y = await LedgiswMDcPo.unlock.call(addressQzyieq, uintSeu8lo7, {from: accounts[4]});

		assert.equal(boolIWuf8Ue, true)
		assert.equal(boolgq4Nlxs, false)
		assert.equal(boolyIGm9RW, true)
		await expect(LedgiswMDcPo.unlock.call(addressQzyieq, uintSeu8lo7, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgiswMDcPo = await Ledgis.new({from: accounts[4]});
		const uintQzkLXdG = BigInt("1283")
		const addressxDyVt1v = accounts[1]
		const uintvx9Izf = BigInt("1525")
		const addressbYGrrtn = "0x0000000000000000000000000000000000000001"
		const addressE77g8lm = accounts[4]
		const uintV4eIAE = BigInt("517")
		const addressFtyqwdn = accounts[4]
		const uintXAXEq1U = BigInt("988")
		const uinto9Bw6x2 = BigInt("318")
		const addresszWsVV5f = accounts[2]
		const uintwM1RgL1 = BigInt("933")
		const addressxJdMtPe = accounts[1]
		const addresszFeAikP = accounts[2]
		const addresscVsJUj0 = "0x0000000000000000000000000000000000000001"
		const boolcVoCc25 = await LedgiswMDcPo.transfer.call(addressxDyVt1v, uintQzkLXdG, {from: accounts[4]});
		const boolp3b4Bwi = await LedgiswMDcPo.increaseAllowance.call(addressbYGrrtn, uintvx9Izf, {from: accounts[4]});
		const uint256XA19oyx = await LedgiswMDcPo.balanceOf.call(addressE77g8lm, {from: accounts[1]});
		const boolNThRzXn = await LedgiswMDcPo.approve.call(addressFtyqwdn, uintV4eIAE, {from: accounts[2]});
		const booliOi5jFv = await LedgiswMDcPo.transferWithLock.call(addresszWsVV5f, uinto9Bw6x2, uintXAXEq1U, {from: accounts[4]});
//		const addressQRnNh3y = await LedgiswMDcPo.unlock.call(addressxJdMtPe, uintwM1RgL1, {from: accounts[4]});
//		const addressiTLpU1v = await LedgiswMDcPo.transferOwnership.call(addresszFeAikP, {from: accounts[4]});
//		const addressgYmJfHP = await LedgiswMDcPo.transferOwnership.call(addresscVsJUj0, {from: accounts[5]});

		assert.equal(boolNThRzXn, true)
		assert.equal(boolcVoCc25, true)
		assert.equal(booliOi5jFv, true)
		assert.equal(boolp3b4Bwi, true)
		assert.equal(uint256XA19oyx, BigInt("10000000000000"))
		await expect(LedgiswMDcPo.unlock.call(addressxJdMtPe, uintwM1RgL1, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})