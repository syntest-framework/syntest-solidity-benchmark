const Fomp = artifacts.require("Fomp");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Fomp', (accounts) => {
	it('test for Fomp', async () => {
		const addressIUFNmGw = "0x0000000000000000000000000000000000000001"
		const FompKvNt8sF = await Fomp.new(addressIUFNmGw, {from: accounts[2]});
		const uintdXJ3VuR = BigInt("1248")
		const addressGXG3oMd = accounts[0]
		const addressB18tRiT = accounts[4]
		const addressPTq1Dq9 = accounts[1]
		const uintJgW3gJl = BigInt("1310")
		const addressJrGvmiC = accounts[3]
		const addresstivX8NT = accounts[1]
		const uintMjzazY3 = BigInt("946")
		const address3Vz1oS = accounts[2]
		const booleYIEdVR = await FompKvNt8sF.approve.call(addressGXG3oMd, uintdXJ3VuR, {from: accounts[0]});
		const addresscx8BrfO = await FompKvNt8sF.delegate.call(addressB18tRiT, {from: accounts[0]});
		const uintoyqBgiO = await FompKvNt8sF.balanceOf.call(addressPTq1Dq9, {from: accounts[5]});
		const booluPLpzZ = await FompKvNt8sF.transferFrom.call(addresstivX8NT, addressJrGvmiC, uintJgW3gJl, {from: accounts[5]});
		const boolLWsDoqD = await FompKvNt8sF.transfer.call(address3Vz1oS, uintMjzazY3, {from: accounts[3]});

		assert.equal(booleYIEdVR, true)
		assert.equal(uintoyqBgiO, BigInt("0"))
		await expect(FompKvNt8sF.transferFrom.call(addresstivX8NT, addressJrGvmiC, uintJgW3gJl, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Fomp', async () => {
		const addressrOP91xb = accounts[3]
		const Fompapsvj8n = await Fomp.new(addressrOP91xb, {from: accounts[0]});
		const byteNYBErUF = "0x111c160c0e150604001101150e1e0d1508150c2011201513091e141e1d030e19"
		const byteV4mx2cZ = "0x0b0709010305170b1d1d0b1806111d15081d00090908090a1a1720040a011311"
		const uintkXG2VZR = BigInt("207")
		const uintlZilYMc = BigInt("1696")
		const uintNqN3h1b = BigInt("310")
		const addressaYFXBrQ = accounts[3]
		const uintiL2wFFV = BigInt("1736")
		const addresslJbuz3O = "0x0000000000000000000000000000000000000001"
		const addresswqboVO = await Fompapsvj8n.delegateBySig.call(addressaYFXBrQ, uintNqN3h1b, uintlZilYMc, uintkXG2VZR, byteV4mx2cZ, byteNYBErUF, {from: accounts[0]});
		const uint96uP8QYop = await Fompapsvj8n.getPriorVotes.call(addresslJbuz3O, uintiL2wFFV, {from: accounts[3]});

		await expect(Fompapsvj8n.delegateBySig.call(addressaYFXBrQ, uintNqN3h1b, uintlZilYMc, uintkXG2VZR, byteV4mx2cZ, byteNYBErUF, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Fomp', async () => {
		const addressMG4jBt4 = accounts[4]
		const FompPI09WuD = await Fomp.new(addressMG4jBt4, {from: accounts[5]});
		const addressR1D3ccY = accounts[1]
		const addressEUG59Ib = accounts[4]
		const addresssC9eaua = await FompPI09WuD.delegate.call(addressR1D3ccY, {from: accounts[4]});
		const addressR7QfLj = await FompPI09WuD.delegate.call(addressEUG59Ib, {from: accounts[2]});
	});

	it('test for Fomp', async () => {
		const addressmFXJSSn = accounts[3]
		const FompSlxYsAU = await Fomp.new(addressmFXJSSn, {from: accounts[5]});
		const addressP2iCEV = accounts[3]
		const addressxgj1HMZ = accounts[1]
		const addressOR7cPL1 = accounts[4]
		const bytejytjxK = "0x190f0a1a131a100e04141a101e1f021320040c181c080903151d0a041d1b091d"
		const byteUl0IMY = "0x1d0d12160e131f1f1d20090c0c110011020e07040c0e080a0105021a1a1b1c13"
		const uintMZqTO7s = BigInt("33")
		const uintZFCAH6k = BigInt("845")
		const uintc8a1FO7 = BigInt("2031")
		const addressqGDxqb6 = accounts[0]
		const addresslGji1B7 = await FompSlxYsAU.delegate.call(addressP2iCEV, {from: accounts[1]});
		const uint96WLs0UMc = await FompSlxYsAU.getCurrentVotes.call(addressxgj1HMZ, {from: accounts[1]});
		const uint96fCfNSTL = await FompSlxYsAU.getCurrentVotes.call(addressOR7cPL1, {from: accounts[0]});
		const addressPVHdZBB = await FompSlxYsAU.delegateBySig.call(addressqGDxqb6, uintc8a1FO7, uintZFCAH6k, uintMZqTO7s, byteUl0IMY, bytejytjxK, {from: accounts[4]});

		assert.equal(uint96WLs0UMc, BigInt("0"))
		assert.equal(uint96fCfNSTL, BigInt("0"))
		await expect(FompSlxYsAU.delegateBySig.call(addressqGDxqb6, uintc8a1FO7, uintZFCAH6k, uintMZqTO7s, byteUl0IMY, bytejytjxK, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Fomp', async () => {
		const addressGOXXrW = accounts[2]
		const FompxjLGLu = await Fomp.new(addressGOXXrW, {from: accounts[0]});
		const byteW6C6PBx = "0x191f1d200e1d1b1816070e020c20011b0b0912110a160c1311031e1a1e20181b"
		const byteT62r4cC = "0x14160b1810180b0f051b1c1a061a150a0111121d13201c0315180d131b061f0c"
		const uintybXYcg7 = BigInt("27")
		const uintcErjMHJ = BigInt("1617")
		const uintPnJTVoL = BigInt("1060")
		const addresshCz4VUX = accounts[2]
		const uintFHkGcYe = BigInt("1572")
		const addressJbzl2pA = accounts[0]
		const addresssFQNTGj = await FompxjLGLu.delegateBySig.call(addresshCz4VUX, uintPnJTVoL, uintcErjMHJ, uintybXYcg7, byteT62r4cC, byteW6C6PBx, {from: "0x0000000000000000000000000000000000000001"});
		const boolJaMrLHd = await FompxjLGLu.transfer.call(addressJbzl2pA, uintFHkGcYe, {from: accounts[0]});

		await expect(FompxjLGLu.delegateBySig.call(addresshCz4VUX, uintPnJTVoL, uintcErjMHJ, uintybXYcg7, byteT62r4cC, byteW6C6PBx, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Fomp', async () => {
		const addressWq636At = accounts[4]
		const FompV6VuAnk = await Fomp.new(addressWq636At, {from: accounts[2]});
		const addressfyGdybd = accounts[2]
		const addressu2QMxZ0 = accounts[0]
		const uintQzB3Xam = BigInt("222")
		const addresss5GUPkS = accounts[4]
		const byteZdUCCi = "0x14080e0b140b14111c17131f10070219160d0e110b1c1b141c07050020160210"
		const bytee28eo5V = "0x0001031e1b1210051f0d1920190b020d200b0513161e1b0f131618101f071b09"
		const uintneIgYGf = BigInt("96")
		const uintORbmGw4 = BigInt("162")
		const uintpAbadME = BigInt("798")
		const addressvWIwgZQ = accounts[2]
		const uintXxsgcy6 = BigInt("124")
		const addressmK4Pdmy = accounts[3]
		const uintem2px3 = await FompV6VuAnk.allowance.call(addressu2QMxZ0, addressfyGdybd, {from: accounts[0]});
		const boolkgCCNm1 = await FompV6VuAnk.approve.call(addresss5GUPkS, uintQzB3Xam, {from: accounts[4]});
		const addressGtICc9H = await FompV6VuAnk.delegateBySig.call(addressvWIwgZQ, uintpAbadME, uintORbmGw4, uintneIgYGf, bytee28eo5V, byteZdUCCi, {from: accounts[2]});
		const boolmMVKdGi = await FompV6VuAnk.transfer.call(addressmK4Pdmy, uintXxsgcy6, {from: accounts[3]});

		assert.equal(boolkgCCNm1, true)
		assert.equal(uintem2px3, BigInt("0"))
		await expect(FompV6VuAnk.delegateBySig.call(addressvWIwgZQ, uintpAbadME, uintORbmGw4, uintneIgYGf, bytee28eo5V, byteZdUCCi, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Fomp', async () => {
		const addressXfSB2jW = "0x0000000000000000000000000000000000000001"
		const FompdlIYmXx = await Fomp.new(addressXfSB2jW, {from: accounts[4]});
		const uintbZbDlkU = BigInt("392")
		const addressoQaqyG0 = accounts[5]
		const addressQFB9iNo = accounts[5]
		const addressWIIoaOa = accounts[4]
		const uintGr6Ddha = BigInt("15")
		const address9Xuxko = accounts[0]
		const byteo4B0dVH = "0x1f1c1905100a05050311170911080f11050c1b1611190d10130f1e140a080707"
		const bytetbMrdQY = "0x12081d090d1216070c10020e12061d0201101f1a171c1c15151b060e1b120517"
		const uintSDmKnYZ = BigInt("160")
		const uintPZoIcxs = BigInt("1737")
		const uintFkH2m7N = BigInt("490")
		const addressscTtSzR = accounts[3]
		const boolOhMmUOl = await FompdlIYmXx.approve.call(addressoQaqyG0, uintbZbDlkU, {from: accounts[5]});
		const uintx5KRf88 = await FompdlIYmXx.balanceOf.call(addressQFB9iNo, {from: accounts[2]});
		const addressggtl91h = await FompdlIYmXx.delegate.call(addressWIIoaOa, {from: accounts[2]});
		const uint96NH7MWct = await FompdlIYmXx.getPriorVotes.call(address9Xuxko, uintGr6Ddha, {from: accounts[5]});
		const addresslPO2Td5 = await FompdlIYmXx.delegateBySig.call(addressscTtSzR, uintFkH2m7N, uintPZoIcxs, uintSDmKnYZ, bytetbMrdQY, byteo4B0dVH, {from: accounts[5]});

		assert.equal(boolOhMmUOl, true)
		assert.equal(uint96NH7MWct, BigInt("0"))
		assert.equal(uintx5KRf88, BigInt("0"))
		await expect(FompdlIYmXx.delegateBySig.call(addressscTtSzR, uintFkH2m7N, uintPZoIcxs, uintSDmKnYZ, bytetbMrdQY, byteo4B0dVH, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Fomp', async () => {
		const addressyEb1gD = accounts[4]
		const FompV6VuAnk = await Fomp.new(addressyEb1gD, {from: accounts[2]});
		const addresss1zGgHr = accounts[2]
		const addressbn6an7D = accounts[0]
		const uintSA8kf3o = BigInt("222")
		const addressaXI8Diu = accounts[4]
		const uintIbBX3Yi = BigInt("124")
		const addressj3kNkqO = accounts[3]
		const uintem2px3 = await FompV6VuAnk.allowance.call(addressbn6an7D, addresss1zGgHr, {from: accounts[0]});
		const boolkgCCNm1 = await FompV6VuAnk.approve.call(addressaXI8Diu, uintSA8kf3o, {from: accounts[4]});
		const boolmMVKdGi = await FompV6VuAnk.transfer.call(addressj3kNkqO, uintIbBX3Yi, {from: accounts[3]});

		assert.equal(boolkgCCNm1, true)
		assert.equal(uintem2px3, BigInt("0"))
		await expect(FompV6VuAnk.transfer.call(addressj3kNkqO, uintIbBX3Yi, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Fomp', async () => {
		const addressKCZE1bn = accounts[4]
		const FompPI09WuD = await Fomp.new(addressKCZE1bn, {from: accounts[5]});
		const addressN1PEMWq = accounts[1]
		const uintWbbQAyb = BigInt("5")
		const addressasLnga7 = accounts[3]
		const address2354sW = "0x0000000000000000000000000000000000000001"
		const addresspS6oDuM = "0x0000000000000000000000000000000000000001"
		const address6mD9sf = accounts[0]
		const addresssC9eaua = await FompPI09WuD.delegate.call(addressN1PEMWq, {from: accounts[4]});
		const uint96Ihe6mvE = await FompPI09WuD.getPriorVotes.call(addressasLnga7, uintWbbQAyb, {from: accounts[1]});
		const uintwmin4R = await FompPI09WuD.balanceOf.call(address2354sW, {from: accounts[2]});
		const addressR7QfLj = await FompPI09WuD.delegate.call(addresspS6oDuM, {from: accounts[2]});
		const uint96RemZf6k = await FompPI09WuD.getCurrentVotes.call(address6mD9sf, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint96Ihe6mvE, BigInt("0"))
		assert.equal(uint96RemZf6k, BigInt("0"))
		assert.equal(uintwmin4R, BigInt("0"))
	});

	it('test for Fomp', async () => {
		const addressrI1SxQ9 = accounts[4]
		const FompPI09WuD = await Fomp.new(addressrI1SxQ9, {from: accounts[5]});
		const addresssXU7DW = "0x0000000000000000000000000000000000000002"
		const addressoAQ4SI = accounts[4]
		const uintjYueEtn = BigInt("507")
		const addresscUKiTbe = "0x0000000000000000000000000000000000000001"
		const bytehIkqNoq = "0x010b0d1b1101051d101d101e1a0007100d010e100c071b0802010b1c0c0a061d"
		const bytexYnFYT1 = "0x060c20111b081b0b041e0c021e1404090210190e0f0d1e0b0e020f160117190c"
		const uintLD6l8r = BigInt("195")
		const uintf3ghbBq = BigInt("337")
		const uintFmbxR6K = BigInt("1850")
		const addressGx6l0YY = accounts[2]
		const addresscn0S60h = accounts[2]
		const addressR7QfLj = await FompPI09WuD.delegate.call(addresssXU7DW, {from: accounts[2]});
		const uintVnfYMvI = await FompPI09WuD.balanceOf.call(addressoAQ4SI, {from: accounts[0]});
		const boollInoF5X = await FompPI09WuD.transfer.call(addresscUKiTbe, uintjYueEtn, {from: accounts[4]});
		const addressIs927I3 = await FompPI09WuD.delegateBySig.call(addressGx6l0YY, uintFmbxR6K, uintf3ghbBq, uintLD6l8r, bytexYnFYT1, bytehIkqNoq, {from: accounts[3]});
		const addressCqrS8Jf = await FompPI09WuD.delegate.call(addresscn0S60h, {from: accounts[4]});

		assert.equal(boollInoF5X, true)
		assert.equal(uintVnfYMvI, BigInt("1000000000000000000000000"))
		await expect(FompPI09WuD.delegateBySig.call(addressGx6l0YY, uintFmbxR6K, uintf3ghbBq, uintLD6l8r, bytexYnFYT1, bytehIkqNoq, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Fomp', async () => {
		const addressAaTYMEo = accounts[1]
		const FomphR8hmL = await Fomp.new(addressAaTYMEo, {from: "0x0000000000000000000000000000000000000001"});
		const uintPT7asTM = BigInt("1274")
		const addressopUT4Tc = accounts[4]
		const addressPMflK0H = accounts[3]
		const uintpspb4t6 = BigInt("331")
		const addressh9hIYPN = accounts[1]
		const uintRLjJpgD = BigInt("983")
		const addressNPhpCii = accounts[4]
		const uintJa8lwMp = BigInt("425")
		const addressC3DfHWG = accounts[2]
		const addressYhArIrE = accounts[5]
		const bytexU8P8Z1 = "0x120304060f0c1f13191e1e0309132012081c0f13141f201a2008010419181f17"
		const byteer2drsR = "0x02020f03181114190403190e0a0c15001b1e0004000c10130d14111c081e0d10"
		const uintfMZHGVy = BigInt("196")
		const uintVtNSNg9 = BigInt("807")
		const uintar9wFe9 = BigInt("945")
		const addressak0YUgb = accounts[0]
		const boolxsukpkO = await FomphR8hmL.transferFrom.call(addressPMflK0H, addressopUT4Tc, uintPT7asTM, {from: accounts[3]});
		const booltuL1fBW = await FomphR8hmL.approve.call(addressh9hIYPN, uintpspb4t6, {from: accounts[0]});
		const bools8nbppF = await FomphR8hmL.approve.call(addressNPhpCii, uintRLjJpgD, {from: "0x0000000000000000000000000000000000000001"});
		const boolXqiZbEI = await FomphR8hmL.transferFrom.call(addressYhArIrE, addressC3DfHWG, uintJa8lwMp, {from: accounts[0]});
		const addressGG9pzO4 = await FomphR8hmL.delegateBySig.call(addressak0YUgb, uintar9wFe9, uintVtNSNg9, uintfMZHGVy, byteer2drsR, bytexU8P8Z1, {from: accounts[2]});
	});
})