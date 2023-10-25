const TPA = artifacts.require("TPA");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('TPA', (accounts) => {
	it('test for TPA', async () => {
		const TPANqSlbPY = await TPA.new({from: accounts[3]});
		const uintjTQs9uV = BigInt("899")
		const addressJCnynE6 = accounts[3]
		await TPANqSlbPY.unpause.call({from: accounts[3]});
		await TPANqSlbPY.onlyAdmin.call({from: accounts[5]});
		const boolytBcVh7 = await TPANqSlbPY.approve.call(addressJCnynE6, uintjTQs9uV, {from: accounts[1]});

		await expect(TPANqSlbPY.unpause.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAXJrN5Y = await TPA.new({from: accounts[3]});
		const uintE10k6NW = BigInt("232")
		const addresscoGOKml = accounts[2]
		const uintPT7SY60 = BigInt("1445")
		const address9bYGCH = accounts[4]
		const addressW0c9OKV = "0x0000000000000000000000000000000000000001"
		const addressWnygow7 = accounts[5]
		const uintG4kXjqd = BigInt("1384")
		const addressG8ebuGS = accounts[0]
		const boolDyCa6A = await TPAXJrN5Y.transfer.call(addresscoGOKml, uintE10k6NW, {from: accounts[3]});
		const boolPgtXXR = await TPAXJrN5Y.decreaseAllowance.call(address9bYGCH, uintPT7SY60, {from: accounts[2]});
		const boolR3Qsyk = await TPAXJrN5Y.unfreezeAccount.call(addressW0c9OKV, {from: accounts[1]});
		const uint256pp1KAtY = await TPAXJrN5Y.balanceOf.call(addressWnygow7, {from: accounts[0]});
		const boolttM4LUf = await TPAXJrN5Y.decreaseAllowance.call(addressG8ebuGS, uintG4kXjqd, {from: accounts[3]});
		const stringILhRGak = await TPAXJrN5Y.name.call({from: accounts[5]});

		assert.equal(boolDyCa6A, true)
		await expect(TPAXJrN5Y.decreaseAllowance.call(address9bYGCH, uintPT7SY60, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const stringQM9ThN = "FVyXDDRiwVNRAESheDECoB2VZPaaa3JJXa4tCFz5rR4soxCrF72xViYFpCCSql5czRYik3H3PyllBQOo4oK"
		const stringgubh9YG = "ulbUW3Q0xLtzG8KiATcAQSA9mBKhNF3j9t0l6BMSZtXCUODsdVCL1IzF4OvMpVsX3tDdfvboQuhadJAfdPAYL7"
		const uintkJjHKpG = BigInt("253")
		const TPAeVksP8A = await TPA.new(stringQM9ThN, stringgubh9YG, uintkJjHKpG, {from: "0x0000000000000000000000000000000000000001"});
		const uintpOuTtkG = BigInt("1918")
		const addressQJLcDvu = accounts[3]
		const addressgTk2Tcx = accounts[3]
		const addressgw4WSxe = "0x0000000000000000000000000000000000000001"
		const boolUVpfwlE = await TPAeVksP8A.approve.call(addressQJLcDvu, uintpOuTtkG, {from: accounts[4]});
		const addressHI4wVuI = await TPAeVksP8A.addAdmin.call(addressgTk2Tcx, {from: accounts[5]});
		const addressF7puof = await TPAeVksP8A.addAdmin.call(addressgw4WSxe, {from: accounts[2]});
		const booltzKBrB = await TPAeVksP8A.paused.call({from: accounts[2]});
	});

	it('test for TPA', async () => {
		const TPAt23ubHH = await TPA.new({from: accounts[3]});
		const addressFoFZtuu = accounts[4]
		const addresspLpB8Xb = accounts[0]
		const addressOEu0aRP = accounts[2]
		const bool5os7Cs = await TPAt23ubHH.isOwner.call(addressFoFZtuu, {from: accounts[1]});
		const uint256tLVgLvE = await TPAt23ubHH.allowance.call(addressOEu0aRP, addresspLpB8Xb, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(bool5os7Cs, false)
		assert.equal(uint256tLVgLvE, BigInt("0"))
	});

	it('test for TPA', async () => {
		const TPAAlT5z9 = await TPA.new({from: accounts[2]});
		const uintGF3PHEp = BigInt("1668")
		const addressGByFk5t = "0x0000000000000000000000000000000000000001"
		const addressRDxUpdH = accounts[2]
		const uintMJh40vk = BigInt("1744")
		const addressIDhkqpK = accounts[0]
		const boolhhoRMzW = await TPAAlT5z9.increaseAllowance.call(addressGByFk5t, uintGF3PHEp, {from: accounts[0]});
		const uint256dw07oCw = await TPAAlT5z9.balanceOf.call(addressRDxUpdH, {from: accounts[5]});
		const addressrJpEK70 = await TPAAlT5z9.burnFrom.call(addressIDhkqpK, uintMJh40vk, {from: accounts[1]});

		assert.equal(boolhhoRMzW, true)
		assert.equal(uint256dw07oCw, BigInt("10000000000000000000000000000"))
		await expect(TPAAlT5z9.burnFrom.call(addressIDhkqpK, uintMJh40vk, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAWsP6heG = await TPA.new({from: accounts[2]});
		const uintMcy8max = BigInt("536")
		const address2Z58qz = accounts[5]
		const addressFPTomE = accounts[0]
		const uintaYIKws = BigInt("1306")
		const addresswYjQ1n = accounts[2]
		const addressyWgzJJU = accounts[4]
		const uintg884PWa = BigInt("1618")
		const addressRqoQ8Rw = accounts[3]
		const addresss2vcOUi = accounts[4]
		const booldIdjzOt = await TPAWsP6heG.transferFrom.call(addressFPTomE, address2Z58qz, uintMcy8max, {from: accounts[1]});
		const boolYfAo7kJ = await TPAWsP6heG.increaseAllowance.call(addresswYjQ1n, uintaYIKws, {from: accounts[5]});
		const addressI1BvhAy = await TPAWsP6heG.transferOwnership.call(addressyWgzJJU, {from: accounts[0]});
		await TPAWsP6heG.whenNotPaused.call({from: accounts[0]});
		const boolTSJDzzX = await TPAWsP6heG.transferFrom.call(addresss2vcOUi, addressRqoQ8Rw, uintg884PWa, {from: accounts[3]});

		await expect(TPAWsP6heG.transferFrom.call(addressFPTomE, address2Z58qz, uintMcy8max, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAAlT5z9 = await TPA.new({from: accounts[2]});
		const uintMISSrdR = BigInt("1668")
		const addresss5hwsvt = "0x0000000000000000000000000000000000000001"
		const addresstooRJfB = accounts[3]
		const uintPuSK3Nf = BigInt("1744")
		const addresszpg23aN = accounts[0]
		await TPAAlT5z9.whenPaused.call({from: "0x0000000000000000000000000000000000000001"});
		const boolhhoRMzW = await TPAAlT5z9.increaseAllowance.call(addresss5hwsvt, uintMISSrdR, {from: accounts[0]});
		const uint256dw07oCw = await TPAAlT5z9.balanceOf.call(addresstooRJfB, {from: accounts[5]});
		const addressrJpEK70 = await TPAAlT5z9.burnFrom.call(addresszpg23aN, uintPuSK3Nf, {from: accounts[1]});

		await expect(TPAAlT5z9.whenPaused.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAt23ubHH = await TPA.new({from: accounts[3]});
		const addressofyq2ld = accounts[5]
		const addressQahPHRh = accounts[0]
		const addressTHkPebY = accounts[2]
		const bool5os7Cs = await TPAt23ubHH.isOwner.call(addressofyq2ld, {from: accounts[1]});
		await TPAt23ubHH.pause.call({from: accounts[3]});
		const uint256tLVgLvE = await TPAt23ubHH.allowance.call(addressTHkPebY, addressQahPHRh, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(bool5os7Cs, false)
		await expect(TPAt23ubHH.pause.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAAlT5z9 = await TPA.new({from: accounts[2]});
		const uintxGjKdoT = BigInt("1350")
		const addressVjuwZB3 = accounts[0]
		const uintMSnxq2 = BigInt("1744")
		const addressHMbgoxS = accounts[0]
		const stringyw49pU0 = await TPAAlT5z9.symbol.call({from: accounts[4]});
		const stringKPZyQoy = await TPAAlT5z9.symbol.call({from: accounts[0]});
		const boolvpND9RI = await TPAAlT5z9.paused.call({from: accounts[1]});
		const boolbfQspS = await TPAAlT5z9.transfer.call(addressVjuwZB3, uintxGjKdoT, {from: accounts[2]});
		const addressrJpEK70 = await TPAAlT5z9.burnFrom.call(addressHMbgoxS, uintMSnxq2, {from: accounts[1]});

		assert.equal(boolbfQspS, true)
		assert.equal(boolvpND9RI, false)
		assert.equal(stringKPZyQoy, "TPA")
		assert.equal(stringyw49pU0, "TPA")
		await expect(TPAAlT5z9.burnFrom.call(addressHMbgoxS, uintMSnxq2, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAt23ubHH = await TPA.new({from: accounts[3]});
		const addressJOqikm = accounts[4]
		const addressYhcS51W = accounts[1]
		const addresswmj1gXU = accounts[2]
		const uintsEr8fgY = BigInt("322")
		const addresszQMcSUK = accounts[4]
		const bool5os7Cs = await TPAt23ubHH.isOwner.call(addressJOqikm, {from: accounts[1]});
		const uint8MoDpspf = await TPAt23ubHH.decimals.call({from: accounts[4]});
		const uint256tLVgLvE = await TPAt23ubHH.allowance.call(addresswmj1gXU, addressYhcS51W, {from: "0x0000000000000000000000000000000000000001"});
		const boolz6S2Dt = await TPAt23ubHH.transfer.call(addresszQMcSUK, uintsEr8fgY, {from: accounts[2]});

		assert.equal(bool5os7Cs, false)
		assert.equal(uint256tLVgLvE, BigInt("0"))
		assert.equal(uint8MoDpspf, BigInt("18"))
		await expect(TPAt23ubHH.transfer.call(addresszQMcSUK, uintsEr8fgY, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAAlT5z9 = await TPA.new({from: accounts[2]});
		const addressAyaO79 = accounts[5]
		const uintlHC3vhh = BigInt("1667")
		const addressTX94JbW = accounts[2]
		const uinttVchjCh = BigInt("1668")
		const addresscOE6ABR = "0x0000000000000000000000000000000000000001"
		const address0nB3Yb = accounts[2]
		const uintjIIs23 = BigInt("1744")
		const addressW1gdqSJ = accounts[0]
		const boolq4AmQBg = await TPAAlT5z9.freezeAccount.call(addressAyaO79, {from: accounts[2]});
		const bools7BBpqg = await TPAAlT5z9.transfer.call(addressTX94JbW, uintlHC3vhh, {from: accounts[4]});
		const boolhhoRMzW = await TPAAlT5z9.increaseAllowance.call(addresscOE6ABR, uinttVchjCh, {from: accounts[0]});
		const uint256dw07oCw = await TPAAlT5z9.balanceOf.call(address0nB3Yb, {from: accounts[5]});
		const addressrJpEK70 = await TPAAlT5z9.burnFrom.call(addressW1gdqSJ, uintjIIs23, {from: accounts[1]});

		assert.equal(boolq4AmQBg, true)
		await expect(TPAAlT5z9.transfer.call(addressTX94JbW, uintlHC3vhh, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAhnPuJCr = await TPA.new({from: accounts[3]});
		const uintKSjZPPu = BigInt("1080")
		const address5gDv23 = "0x0000000000000000000000000000000000000001"
		const boolsSxUYca = await TPAhnPuJCr.approve.call(address5gDv23, uintKSjZPPu, {from: accounts[1]});
		await TPAhnPuJCr.pause.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolsSxUYca, true)
		await expect(TPAhnPuJCr.pause.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAW7NXHI = await TPA.new({from: "0x0000000000000000000000000000000000000001"});
		const addressUJ4K4zq = "0x0000000000000000000000000000000000000001"
		const boollXpaaf1 = await TPAW7NXHI.isAdmin.call(addressUJ4K4zq, {from: accounts[5]});
		const boolgkrSMFq = await TPAW7NXHI.paused.call({from: "0x0000000000000000000000000000000000000001"});
		await TPAW7NXHI.whenPaused.call({from: accounts[3]});
	});

	it('test for TPA', async () => {
		const TPAhnPuJCr = await TPA.new({from: accounts[3]});
		await TPAhnPuJCr.renounceAdmin.call({from: accounts[3]});
		await TPAhnPuJCr.pause.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(TPAhnPuJCr.renounceAdmin.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAhnPuJCr = await TPA.new({from: accounts[3]});
		const uintknfodnv = BigInt("332")
		const addresseVY58y = accounts[5]
		const addressQMDdiBg = accounts[2]
		const uint256lOVXDkD = await TPAhnPuJCr.totalSupply.call({from: accounts[3]});
		const boolyquUwCx = await TPAhnPuJCr.transfer.call(addresseVY58y, uintknfodnv, {from: accounts[0]});
		const boolSRga9V = await TPAhnPuJCr.isOwner.call(addressQMDdiBg, {from: accounts[1]});

		assert.equal(uint256lOVXDkD, BigInt("10000000000000000000000000000"))
		await expect(TPAhnPuJCr.transfer.call(addresseVY58y, uintknfodnv, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAAlT5z9 = await TPA.new({from: accounts[2]});
		const addressvYvEYdr = accounts[4]
		const addressw1uNVg = accounts[3]
		const addressRIN39rv = accounts[1]
		const uint256NSPAx5v = await TPAAlT5z9.balanceOf.call(addressvYvEYdr, {from: accounts[4]});
		const uint256dw07oCw = await TPAAlT5z9.balanceOf.call(addressw1uNVg, {from: accounts[5]});
		const booltkojCsS = await TPAAlT5z9.unfreezeAccount.call(addressRIN39rv, {from: accounts[2]});

		assert.equal(uint256NSPAx5v, BigInt("0"))
		assert.equal(uint256dw07oCw, BigInt("0"))
		await expect(TPAAlT5z9.unfreezeAccount.call(addressRIN39rv, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAhnPuJCr = await TPA.new({from: accounts[3]});
		const uintE1uoxkS = BigInt("356")
		const addressmMToe6N = accounts[5]
		const uint8gGpxdZm = await TPAhnPuJCr.decimals.call({from: accounts[0]});
		const stringqQrjOVw = await TPAhnPuJCr.name.call({from: accounts[2]});
		const boolyquUwCx = await TPAhnPuJCr.transfer.call(addressmMToe6N, uintE1uoxkS, {from: accounts[0]});

		assert.equal(stringqQrjOVw, "TPA")
		assert.equal(uint8gGpxdZm, BigInt("18"))
		await expect(TPAhnPuJCr.transfer.call(addressmMToe6N, uintE1uoxkS, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAAlT5z9 = await TPA.new({from: accounts[2]});
		const addressdWDxNQw = accounts[2]
		const addressOKrun5f = accounts[2]
		const addressgT06scY = accounts[3]
		const uint256dw07oCw = await TPAAlT5z9.balanceOf.call(addressdWDxNQw, {from: accounts[5]});
		const addressPazB6Km = await TPAAlT5z9.removeAdmin.call(addressOKrun5f, {from: accounts[2]});
		const boolbR0Fmz = await TPAAlT5z9.isOwner.call(addressgT06scY, {from: accounts[0]});

		assert.equal(boolbR0Fmz, false)
		assert.equal(uint256dw07oCw, BigInt("10000000000000000000000000000"))
	});

	it('test for TPA', async () => {
		const TPAVnJdmmM = await TPA.new({from: accounts[1]});
		const uintC4neJOx = BigInt("2013")
		const uintFqz43wi = BigInt("224")
		const addressClEL6h7 = accounts[0]
		const uintgONxZo = BigInt("1618")
		const addresstcaObix = accounts[4]
		const uintSz1rOGX = BigInt("397")
		const uint256cqnUtFi = await TPAVnJdmmM.burn.call(uintC4neJOx, {from: accounts[1]});
		const boolcMHzzO = await TPAVnJdmmM.transfer.call(addressClEL6h7, uintFqz43wi, {from: accounts[4]});
		const boolEIJD93o = await TPAVnJdmmM.transfer.call(addresstcaObix, uintgONxZo, {from: "0x0000000000000000000000000000000000000001"});
		const uint256tTSskn = await TPAVnJdmmM.burn.call(uintSz1rOGX, {from: accounts[5]});

		await expect(TPAVnJdmmM.transfer.call(addressClEL6h7, uintFqz43wi, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAhnPuJCr = await TPA.new({from: accounts[3]});
		const uintASl3GII = BigInt("845")
		const addressx6SdFja = accounts[2]
		const uinth5jv4R = BigInt("1632")
		const uintNinTfpd = BigInt("332")
		const addressIgAw2lR = accounts[5]
		const boolyw2EyZ3 = await TPAhnPuJCr.unlock.call(addressx6SdFja, uintASl3GII, {from: accounts[3]});
		const uint256lFkgI9C = await TPAhnPuJCr.burn.call(uinth5jv4R, {from: "0x0000000000000000000000000000000000000001"});
		const boolyquUwCx = await TPAhnPuJCr.transfer.call(addressIgAw2lR, uintNinTfpd, {from: accounts[0]});
		const stringuCNm1GL = await TPAhnPuJCr.name.call({from: accounts[4]});

		await expect(TPAhnPuJCr.unlock.call(addressx6SdFja, uintASl3GII, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAhnPuJCr = await TPA.new({from: accounts[3]});
		const addresslvTSxDI = accounts[1]
		const uints1a0NuE = BigInt("1065")
		const addressaLzNwoN = accounts[5]
		const addressSjVn2GI = await TPAhnPuJCr.addAdmin.call(addresslvTSxDI, {from: accounts[3]});
		const boolyquUwCx = await TPAhnPuJCr.transfer.call(addressaLzNwoN, uints1a0NuE, {from: accounts[0]});

		await expect(TPAhnPuJCr.transfer.call(addressaLzNwoN, uints1a0NuE, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAAlT5z9 = await TPA.new({from: accounts[2]});
		const addresszBxG6hG = accounts[2]
		const addressdDeaDvz = accounts[3]
		const boolMGCRACC = await TPAAlT5z9.isOwner.call(addresszBxG6hG, {from: accounts[4]});
		const uint256dw07oCw = await TPAAlT5z9.balanceOf.call(addressdDeaDvz, {from: accounts[5]});

		assert.equal(boolMGCRACC, true)
		assert.equal(uint256dw07oCw, BigInt("0"))
	});

	it('test for TPA', async () => {
		const TPAAlT5z9 = await TPA.new({from: accounts[2]});
		const addressVIjFD4O = accounts[3]
		const addresscwX6Xn9 = accounts[3]
		const addressgDG2QP = await TPAAlT5z9.transferOwnership.call(addressVIjFD4O, {from: accounts[2]});
		const uint256dw07oCw = await TPAAlT5z9.balanceOf.call(addresscwX6Xn9, {from: accounts[5]});

		assert.equal(uint256dw07oCw, BigInt("0"))
	});

	it('test for TPA', async () => {
		const TPAhnPuJCr = await TPA.new({from: accounts[3]});
		const addressjpOhijQ = accounts[2]
		const uintRx3WXw8 = BigInt("332")
		const addresshuTeAez = accounts[6]
		const addresssMGyFP = await TPAhnPuJCr.upgradeTo.call(addressjpOhijQ, {from: accounts[3]});
		const boolyquUwCx = await TPAhnPuJCr.transfer.call(addresshuTeAez, uintRx3WXw8, {from: accounts[0]});

		await expect(TPAhnPuJCr.transfer.call(addresshuTeAez, uintRx3WXw8, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})