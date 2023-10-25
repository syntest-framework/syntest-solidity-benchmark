const WOLF = artifacts.require("WOLF");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('WOLF', (accounts) => {
	it('test for WOLF', async () => {
		const stringud9ZjK = "ThWcdfjl4H7LON0XCM8ARwWXXZ3qB9ejX0H5Ds6ifWd0SdJS1G"
		const stringWDVmw1s = "uVUz1NdVf9fpZsTkDqfCoeTCoGlR9IphKCsStVcAGVoI1wwjuAO6dZEaDYAAo1"
		const uintngBZgES = BigInt("1823")
		const WOLFUdBYeKO = await WOLF.new(stringud9ZjK, stringWDVmw1s, uintngBZgES, {from: accounts[0]});
		const addressGWr2I0K = accounts[2]
		const uintJcRCFAT = BigInt("130")
		const addressPDREBEe = accounts[5]
		const uintRYVGCk = BigInt("1888")
		const addressvipYH9H = accounts[1]
//		const boolrarZkfQ = await WOLFUdBYeKO.transferownership.call(addressGWr2I0K, {from: accounts[2]});
//		const boolAEJrlBe = await WOLFUdBYeKO.approveAndCall.call(addressPDREBEe, uintJcRCFAT, {from: accounts[3]});
//		const boolR8UlExO = await WOLFUdBYeKO.transfer.call(addressvipYH9H, uintRYVGCk, {from: accounts[2]});

		await expect(WOLFUdBYeKO.transferownership.call(addressGWr2I0K, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for WOLF', async () => {
		const stringguOdx0r = "losnBc2DyV3w7M2mkojNyEmm2bw52sXrV9W3fx73NwGRLPLXxzfMY"
		const stringqFnzbnX = "sgo5Et931Qzo"
		const uintHqzm1Vz = BigInt("537")
		const WOLFaj5dnu5 = await WOLF.new(stringguOdx0r, stringqFnzbnX, uintHqzm1Vz, {from: accounts[0]});
		const uint5LnnjM = BigInt("1345")
		const addressdsqAtD = accounts[0]
		const uintfttvaVm = BigInt("1129")
		const addressksuHM2r = accounts[4]
		const addressIqsA9Q = accounts[3]
		const uintF80f5Ll = BigInt("1167")
		const addressENXlt7O = accounts[0]
		const uintHCWkqfr = BigInt("627")
		const addressru5zCiv = accounts[0]
		const uinttFNgJy = BigInt("1468")
		const addressbCTPVeD = "0x0000000000000000000000000000000000000001"
		const boolIwZl5s2 = await WOLFaj5dnu5.approve.call(addressdsqAtD, uint5LnnjM, {from: accounts[1]});
//		const bool6YUhjE = await WOLFaj5dnu5.transferFrom.call(addressIqsA9Q, addressksuHM2r, uintfttvaVm, {from: accounts[0]});
//		const boolrN51wjL = await WOLFaj5dnu5.approveAndCall.call(addressENXlt7O, uintF80f5Ll, {from: accounts[3]});
//		const boolUuHz6Fx = await WOLFaj5dnu5.approve.call(addressru5zCiv, uintHCWkqfr, {from: accounts[2]});
//		const boolJqQSZn7 = await WOLFaj5dnu5.approveAndCall.call(addressbCTPVeD, uinttFNgJy, {from: accounts[2]});

		assert.equal(boolIwZl5s2, true)
		await expect(WOLFaj5dnu5.transferFrom.call(addressIqsA9Q, addressksuHM2r, uintfttvaVm, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for WOLF', async () => {
		const stringzcR22gK = "pSILO5hgk3J8cU5Ust892ksDJzgeP9lcvVBfSLAhi2zNBoe0L6jutCa3kuHzG6"
		const stringgIsnNT7 = "TD4GvHK7tMDs2s3cKysejSIzrjNPi5STTu"
		const uintMBYs1RE = BigInt("953")
		const WOLFzND6J0 = await WOLF.new(stringzcR22gK, stringgIsnNT7, uintMBYs1RE, {from: "0x0000000000000000000000000000000000000001"});
		const addressC868zqJ = accounts[4]
		const uintHvINiuO = BigInt("281")
		const addressu8wat9A = accounts[4]
		const uintokGmnY1 = BigInt("1800")
		const addressK9Xs13 = accounts[3]
		const uintT5NkoEV = BigInt("435")
		const addresscillpW1 = accounts[3]
		const uintwBQD6X5 = BigInt("519")
		const addressN0cxhPi = accounts[4]
		const addressVUCnYkG = accounts[1]
		const boolQrQOiFZ = await WOLFzND6J0.transferownership.call(addressC868zqJ, {from: accounts[0]});
		const bool7g6b1t = await WOLFzND6J0.approve.call(addressu8wat9A, uintHvINiuO, {from: accounts[0]});
		const bool8o9b8S = await WOLFzND6J0.approveAndCall.call(addressK9Xs13, uintokGmnY1, {from: accounts[3]});
		const boolW500FeJ = await WOLFzND6J0.approve.call(addresscillpW1, uintT5NkoEV, {from: accounts[0]});
		const boolSUbLlPa = await WOLFzND6J0.transferFrom.call(addressVUCnYkG, addressN0cxhPi, uintwBQD6X5, {from: accounts[2]});
	});

	it('test for WOLF', async () => {
		const stringMaPspW = "RmRvGsAVpahVyzxGvCj4OkDjbhFqhbdcvY4Wp3USrVeXsvJU06LN51sUrfpqVJY9BTE96"
		const stringpf85i3w = "8plIfSrHd"
		const uintOtvEqkj = BigInt("52")
		const WOLFcDs8bLL = await WOLF.new(stringMaPspW, stringpf85i3w, uintOtvEqkj, {from: accounts[0]});
		const uintK37nUi = BigInt("1464")
		const addressothNWvG = accounts[1]
		const uintC5SM5f = BigInt("1442")
		const addressu70kAx = accounts[2]
//		const boolyNqRpRe = await WOLFcDs8bLL.approveAndCall.call(addressothNWvG, uintK37nUi, {from: accounts[3]});
//		const boolMrT8sUg = await WOLFcDs8bLL.approve.call(addressu70kAx, uintC5SM5f, {from: accounts[3]});

		await expect(WOLFcDs8bLL.approveAndCall.call(addressothNWvG, uintK37nUi, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for WOLF', async () => {
		const stringsnBnL9 = "xjVvcRGCA6ejWUbObnWRB1T2E12HIGSgWi0y7R0M0eJbje3RL4NYPGlc5MhZTSz96fLNAUCQW5PUq8C"
		const stringAjbi56z = ""
		const uintLjRvK3H = BigInt("12")
		const WOLFedX3Ejv = await WOLF.new(stringsnBnL9, stringAjbi56z, uintLjRvK3H, {from: accounts[1]});
		const uintkuzdVPz = BigInt("308")
		const addressm1jiXHK = "0x0000000000000000000000000000000000000001"
		const addressRrhA2O = "0x0000000000000000000000000000000000000001"
		const uintIroakNP = BigInt("1067")
		const addressacutWn3 = accounts[5]
		const uintdx7p3EV = BigInt("894")
		const addressXlGEIK = accounts[4]
		const addresspURBvX9 = accounts[2]
//		const boolh18edXX = await WOLFedX3Ejv.transferFrom.call(addressRrhA2O, addressm1jiXHK, uintkuzdVPz, {from: "0x0000000000000000000000000000000000000001"});
//		const boolggE09dP = await WOLFedX3Ejv.approveAndCall.call(addressacutWn3, uintIroakNP, {from: accounts[0]});
//		const boolK3uqtiO = await WOLFedX3Ejv.transferFrom.call(addresspURBvX9, addressXlGEIK, uintdx7p3EV, {from: accounts[2]});

		await expect(WOLFedX3Ejv.transferFrom.call(addressRrhA2O, addressm1jiXHK, uintkuzdVPz, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for WOLF', async () => {
		const stringMaPspW = "RmRvGsAVpahVyzxGvCj4OkDjbhFqhbdcvY4Wp3USrVeXsvJU06LN51sUrfpqVJY9BTE96"
		const stringpf85i3w = "8plIfSrHd"
		const uintXNRrgIV = BigInt("52")
		const WOLFcDs8bLL = await WOLF.new(stringMaPspW, stringpf85i3w, uintXNRrgIV, {from: accounts[0]});
		const uintucjdnKs = BigInt("2041")
		const addressAOX2M72 = accounts[0]
		const uintpRgT2m = BigInt("1459")
		const addressxu7Gh5j = accounts[1]
		const addressDog7tcj = accounts[3]
		const uintT3D5YcS = BigInt("1442")
		const addressdZLR6Wg = accounts[2]
		const boolYThJv6L = await WOLFcDs8bLL.approveAndCall.call(addressAOX2M72, uintucjdnKs, {from: accounts[0]});
//		const boolyNqRpRe = await WOLFcDs8bLL.approveAndCall.call(addressxu7Gh5j, uintpRgT2m, {from: accounts[3]});
//		const boolFSzGVcZ = await WOLFcDs8bLL.transferownership.call(addressDog7tcj, {from: accounts[2]});
//		const boolMrT8sUg = await WOLFcDs8bLL.approve.call(addressdZLR6Wg, uintT3D5YcS, {from: accounts[3]});

		assert.equal(boolYThJv6L, true)
		await expect(WOLFcDs8bLL.approveAndCall.call(addressxu7Gh5j, uintpRgT2m, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for WOLF', async () => {
		const stringkmlVtM = "GwBeIy8SUGGOmOKwd7ehsjIomNNdC2IZs1Y4SeTaBlDhhBeT"
		const stringUFqhK2l = "bAGptsWh1fi25sxispAz6MflE2k6RELPKxbHk3h6rQlHj6C"
		const uintyToCrzA = BigInt("1197")
		const WOLFOFA09lF = await WOLF.new(stringkmlVtM, stringUFqhK2l, uintyToCrzA, {from: accounts[2]});
		const uintKoPnnZt = BigInt("1869")
		const addressH6tE9v7 = accounts[2]
		const uintZh5rFX8 = BigInt("260")
		const addressKMGJNl7 = accounts[3]
		const uintaRhgjQM = BigInt("164")
		const addressNSNxezT = accounts[5]
		const uintouQynQq = BigInt("1512")
		const addressJjJUa9U = accounts[2]
		const addressVpbfgqf = accounts[1]
		const uintqK2oWyj = BigInt("211")
		const addressodw7PEt = "0x0000000000000000000000000000000000000001"
//		const boolDh5hYf2 = await WOLFOFA09lF.transfer.call(addressH6tE9v7, uintKoPnnZt, {from: "0x0000000000000000000000000000000000000001"});
//		const boolvQK5Cpl = await WOLFOFA09lF.approveAndCall.call(addressKMGJNl7, uintZh5rFX8, {from: "0x0000000000000000000000000000000000000001"});
//		const boolbgE3ZsK = await WOLFOFA09lF.transfer.call(addressNSNxezT, uintaRhgjQM, {from: accounts[3]});
//		const boolCkblvu = await WOLFOFA09lF.transferFrom.call(addressVpbfgqf, addressJjJUa9U, uintouQynQq, {from: accounts[1]});
//		const boolRRhG7kh = await WOLFOFA09lF.approveAndCall.call(addressodw7PEt, uintqK2oWyj, {from: accounts[1]});

		await expect(WOLFOFA09lF.transfer.call(addressH6tE9v7, uintKoPnnZt, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for WOLF', async () => {
		const stringG8yTWC = "ApGVb8B4gw88oRjMYl3YyEI8NU91ogyG6sknmR7H1CpiWvrSc1IihSFU2K3VxxFNCVugD8CTm"
		const stringS30Yoq = "dFxsuJ47vEKYgE3y7ssCwnxMVC2coYGrq61h"
		const uintwYhapid = BigInt("51")
		const WOLFOyTzLB0 = await WOLF.new(stringG8yTWC, stringS30Yoq, uintwYhapid, {from: accounts[4]});
		const uintY6zC2Q8 = BigInt("0")
		const addressucIVEkK = accounts[4]
		const addressiIbuILo = accounts[1]
		const uintQv0Z0Wl = BigInt("235")
		const addressZaKCaV3 = accounts[2]
		const uintFOQRvN5 = BigInt("1489")
		const addressjEeZcmk = accounts[3]
		const addressHMie27W = accounts[2]
		const boolsSEtG0K = await WOLFOyTzLB0.transferFrom.call(addressiIbuILo, addressucIVEkK, uintY6zC2Q8, {from: accounts[3]});
//		const boolWJ5EDh = await WOLFOyTzLB0.transfer.call(addressZaKCaV3, uintQv0Z0Wl, {from: accounts[3]});
//		const boolLeb0j6 = await WOLFOyTzLB0.approveAndCall.call(addressjEeZcmk, uintFOQRvN5, {from: accounts[0]});
//		const boolCglMR0j = await WOLFOyTzLB0.transferownership.call(addressHMie27W, {from: accounts[1]});

		assert.equal(boolsSEtG0K, true)
		await expect(WOLFOyTzLB0.transfer.call(addressZaKCaV3, uintQv0Z0Wl, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for WOLF', async () => {
		const stringWZ3dQse = "kV95ezXLrPwb94QKGiwMABU9MC6pyH5ljmq9wUbpWa5mbLwkVN7C8CWInm9m0Rxq2uyUB6CouRupjLyH1LW8q"
		const stringeiSfHvA = "dnDgIYFyY0yEsVy95SAPNq5LjTLYLzMVsMxQkoIUO3d4t2Kp"
		const uintBIs7QP5 = BigInt("1587")
		const WOLFBSpwNb = await WOLF.new(stringWZ3dQse, stringeiSfHvA, uintBIs7QP5, {from: accounts[1]});
		const uintAoWuqPB = BigInt("1752")
		const addressO13D47H = accounts[2]
		const uint8FWytH = BigInt("0")
		const addressQvTLPaY = accounts[5]
		const uintP3sD0iT = BigInt("1005")
		const addresssn7nq0 = accounts[2]
		const uintUlj3GhO = BigInt("1835")
		const addressx2tW7O8 = accounts[4]
		const uintx9ZKGpQ = BigInt("1815")
		const addressUmOFamj = accounts[2]
		const uintn81ldvh = BigInt("1531")
		const addressbngvGH2 = accounts[4]
		const uintA82ueWK = BigInt("1884")
		const addressqoiaPRe = accounts[4]
		const boolileZpQE = await WOLFBSpwNb.approve.call(addressO13D47H, uintAoWuqPB, {from: accounts[2]});
		const bool9mMH9x = await WOLFBSpwNb.approveAndCall.call(addressQvTLPaY, uint8FWytH, {from: accounts[1]});
//		const boolAs76yhD = await WOLFBSpwNb.transfer.call(addresssn7nq0, uintP3sD0iT, {from: accounts[0]});
//		const boolF9Kjdse = await WOLFBSpwNb.approve.call(addressx2tW7O8, uintUlj3GhO, {from: accounts[4]});
//		const boolZW0w5Z = await WOLFBSpwNb.transfer.call(addressUmOFamj, uintx9ZKGpQ, {from: accounts[0]});
//		const boolFTqdq0X = await WOLFBSpwNb.approveAndCall.call(addressbngvGH2, uintn81ldvh, {from: accounts[4]});
//		const boolXYuRy3q = await WOLFBSpwNb.approve.call(addressqoiaPRe, uintA82ueWK, {from: accounts[2]});

		assert.equal(bool9mMH9x, true)
		assert.equal(boolileZpQE, true)
		await expect(WOLFBSpwNb.transfer.call(addresssn7nq0, uintP3sD0iT, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})