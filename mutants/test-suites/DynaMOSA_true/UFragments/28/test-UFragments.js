const UFragments = artifacts.require("UFragments");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('UFragments', (accounts) => {
	it('test for UFragments', async () => {
		const UFragmentsYbxjyRl = await UFragments.new({from: "0x0000000000000000000000000000000000000001"});
		const stringsg3pv6B = await UFragmentsYbxjyRl.symbol.call({from: accounts[0]});
		const boolobD38P = await UFragmentsYbxjyRl.rebaseTimeInfo.call({from: accounts[4]});
	});

	it('test for UFragments', async () => {
		const UFragmentsiWCc9e8 = await UFragments.new({from: accounts[2]});
		const uintDk5JszA = BigInt("553")
		const addressYMZbMPb = accounts[2]
		const uintUYwpUlP = BigInt("80")
		const stringxDPhjXh = "EGOlQJgvJzyqv8GYm1a45F6HbReOkTpGpetMQmN5AB0oEsI2eiAdm"
		const stringTpoy2S3 = "gHMs8h94wWctTWwJipd5mq4ifGb6SvfckKLSKdR"
		const addresszw74nno = accounts[2]
		const uintagcARyI = BigInt("705")
		const addressEFEvUN = accounts[1]
//		const addressObrTc9y = await UFragmentsiWCc9e8.initRebase.call(addressYMZbMPb, uintDk5JszA, {from: accounts[3]});
//		const stringwFrC5ic = await UFragmentsiWCc9e8.initialize.call(stringTpoy2S3, stringxDPhjXh, uintUYwpUlP, {from: accounts[4]});
//		const addressWMBtD5l = await UFragmentsiWCc9e8.transferOwnership.call(addresszw74nno, {from: accounts[5]});
//		const boolWFD2auQ = await UFragmentsiWCc9e8.transfer.call(addressEFEvUN, uintagcARyI, {from: accounts[4]});
//		const uint256HuLqxWl = await UFragmentsiWCc9e8.calRebase.call({from: accounts[1]});
//		const boollXiY6K4 = await UFragmentsiWCc9e8.isOwner.call({from: accounts[4]});

		await expect(UFragmentsiWCc9e8.initRebase.call(addressYMZbMPb, uintDk5JszA, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsQde27ag = await UFragments.new({from: accounts[0]});
		const addressBlsHliz = accounts[2]
		const addressEIWzlHn = accounts[3]
		const uintM0WQOIN = BigInt("173")
		const addressF53hUyU = accounts[0]
		const addressvNtH2tR = accounts[4]
		const intTZ76vUm = BigInt("1944")
		const intGdSHD67 = BigInt("1318")
		const intIzxK4Fp = BigInt("1381")
		const intcK0oHz = BigInt("-1299")
		const uintFzy3PTm = BigInt("1394")
		const addressOlMFZU = accounts[0]
		const uintzYHbIO4 = BigInt("1252")
		const addresssVNlcJc = accounts[3]
		const addressoQKHPpA = accounts[0]
		const uint256hPND55f = await UFragmentsQde27ag.allowance.call(addressEIWzlHn, addressBlsHliz, {from: accounts[5]});
//		const boolLPgZzCd = await UFragmentsQde27ag.transferFrom.call(addressvNtH2tR, addressF53hUyU, uintM0WQOIN, {from: accounts[3]});
//		const int256DYhXZgI = await UFragmentsQde27ag.sub.call(intGdSHD67, intTZ76vUm, {from: accounts[4]});
//		const int256ZGO8kkY = await UFragmentsQde27ag.add.call(intcK0oHz, intIzxK4Fp, {from: accounts[2]});
//		const addressYJcLxLv = await UFragmentsQde27ag.initRebase.call(addressOlMFZU, uintFzy3PTm, {from: accounts[4]});
//		const boolmckJbRu = await UFragmentsQde27ag.transferFrom.call(addressoQKHPpA, addresssVNlcJc, uintzYHbIO4, {from: accounts[0]});

		assert.equal(uint256hPND55f, BigInt("0"))
		await expect(UFragmentsQde27ag.transferFrom.call(addressvNtH2tR, addressF53hUyU, uintM0WQOIN, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsIQzu88u = await UFragments.new({from: accounts[1]});
		const uintL6zv1T = BigInt("868")
		const addressIO59GlZ = accounts[0]
		const uintv8yHUV5 = BigInt("19")
		const addressNvYqY0C = accounts[1]
		const uintuPb9Ndb = BigInt("797")
		const addressmq5teyV = accounts[4]
		const uintoypOVBz = BigInt("847")
		const addressGc9FMGV = accounts[5]
//		const boolqGCN04h = await UFragmentsIQzu88u.transfer.call(addressIO59GlZ, uintL6zv1T, {from: accounts[3]});
//		const boolFrcy7xG = await UFragmentsIQzu88u.approve.call(addressNvYqY0C, uintv8yHUV5, {from: accounts[1]});
//		const booldVygAcn = await UFragmentsIQzu88u.transfer.call(addressmq5teyV, uintuPb9Ndb, {from: accounts[0]});
//		const uint256URwBy3g = await UFragmentsIQzu88u.calRebase.call({from: accounts[5]});
//		const uint256tZwstGK = await UFragmentsIQzu88u.totalSupply.call({from: accounts[2]});
//		const boolyw8CGPE = await UFragmentsIQzu88u.transfer.call(addressGc9FMGV, uintoypOVBz, {from: accounts[4]});

		await expect(UFragmentsIQzu88u.transfer.call(addressIO59GlZ, uintL6zv1T, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsss3SL7r = await UFragments.new({from: accounts[4]});
		const addressRzRj9Ca = accounts[2]
		const uintGuPuXT4 = BigInt("863")
		const addressoNHjwgU = accounts[2]
		const addressziClUhX = accounts[2]
		const intygaWyon = BigInt("-1090")
		const uint256lSSCQB = await UFragmentsss3SL7r.balanceOf.call(addressRzRj9Ca, {from: accounts[5]});
		const boolvAmcuXG = await UFragmentsss3SL7r.approve.call(addressoNHjwgU, uintGuPuXT4, {from: accounts[1]});
//		const addressNHCnSEh = await UFragmentsss3SL7r.initialize.call(addressziClUhX, {from: accounts[2]});
//		await UFragmentsss3SL7r.renounceOwnership.call({from: accounts[4]});
//		const int256WMRiguV = await UFragmentsss3SL7r.abs.call(intygaWyon, {from: accounts[1]});

		assert.equal(boolvAmcuXG, true)
		assert.equal(uint256lSSCQB, BigInt("0"))
		await expect(UFragmentsss3SL7r.initialize.call(addressziClUhX, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsRNS1ecC = await UFragments.new({from: accounts[5]});
		const intVmngiCP = BigInt("237")
		const intc3XK9TN = BigInt("-1421")
		const addressAEDyWpo = accounts[2]
		const addressFcRZxOa = "0x0000000000000000000000000000000000000001"
//		const int256qFw5Gm = await UFragmentsRNS1ecC.mul.call(intc3XK9TN, intVmngiCP, {from: accounts[1]});
//		const uint256n35ziEs = await UFragmentsRNS1ecC.allowance.call(addressFcRZxOa, addressAEDyWpo, {from: "0x0000000000000000000000000000000000000001"});
//		const stringymF7luv = await UFragmentsRNS1ecC.name.call({from: accounts[4]});

		await expect(UFragmentsRNS1ecC.mul.call(intc3XK9TN, intVmngiCP, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsyQh87SV = await UFragments.new({from: accounts[1]});
		const uintx1P3Wmr = BigInt("124")
		const stringJ2NFxQz = "hUCujOwfCzawgYUHQdbgRMe582PVb07U3d1fmuEgRXnCgYSG5wJQj1EiQel1NzkUwRBbEpn2MoAnKi"
		const stringfWnwzh8 = "1DKIXw6yifVw4a"
		const intKSDfR4I = BigInt("1574")
		const intPFEeWTU = BigInt("-905")
		const intxE58oDd = BigInt("1957")
		const intLgi8Re8 = BigInt("941")
		const uintLacAMv6 = BigInt("1423")
		const addressW1u6GsR = accounts[5]
		const stringVYyJbZL = await UFragmentsyQh87SV.initialize.call(stringfWnwzh8, stringJ2NFxQz, uintx1P3Wmr, {from: accounts[3]});
		const booljJSGe6r = await UFragmentsyQh87SV.isOwner.call({from: accounts[2]});
//		const int256mKzdwTQ = await UFragmentsyQh87SV.sub.call(intPFEeWTU, intKSDfR4I, {from: accounts[3]});
//		const int256vPGY5sL = await UFragmentsyQh87SV.mul.call(intLgi8Re8, intxE58oDd, {from: accounts[2]});
//		const booljw1mFMZ = await UFragmentsyQh87SV.approve.call(addressW1u6GsR, uintLacAMv6, {from: accounts[2]});

		assert.equal(booljJSGe6r, false)
		await expect(UFragmentsyQh87SV.sub.call(intPFEeWTU, intKSDfR4I, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsss3SL7r = await UFragments.new({from: accounts[4]});
		const addressKHrByG3 = accounts[2]
		const uintYiy5YzK = BigInt("107")
		const addressbKEkH2C = accounts[1]
		const addressdrcSOVk = accounts[3]
		const uintgAkrNm = BigInt("863")
		const addressUXsTWc1 = accounts[2]
		const address2sOXbE = accounts[2]
		const intpF2ejZb = BigInt("1105")
		const uintKdRXpHv = BigInt("1142")
		const addressDEBvfZt = accounts[0]
		const intrb8OD0Q = BigInt("-1090")
		const uint256lSSCQB = await UFragmentsss3SL7r.balanceOf.call(addressKHrByG3, {from: accounts[5]});
		const stringiIXb9wb = await UFragmentsss3SL7r.symbol.call({from: accounts[3]});
//		const boolGkIsKPG = await UFragmentsss3SL7r.transferFrom.call(addressdrcSOVk, addressbKEkH2C, uintYiy5YzK, {from: accounts[2]});
//		const boolvAmcuXG = await UFragmentsss3SL7r.approve.call(addressUXsTWc1, uintgAkrNm, {from: accounts[1]});
//		const addressNHCnSEh = await UFragmentsss3SL7r.initialize.call(address2sOXbE, {from: accounts[2]});
//		await UFragmentsss3SL7r.renounceOwnership.call({from: accounts[4]});
//		const int256wDUq9ya = await UFragmentsss3SL7r.abs.call(intpF2ejZb, {from: accounts[1]});
//		const addressphikBFc = await UFragmentsss3SL7r.initRebase.call(addressDEBvfZt, uintKdRXpHv, {from: accounts[4]});
//		const int256WMRiguV = await UFragmentsss3SL7r.abs.call(intrb8OD0Q, {from: accounts[1]});

		assert.equal(stringiIXb9wb, "")
		assert.equal(uint256lSSCQB, BigInt("0"))
		await expect(UFragmentsss3SL7r.transferFrom.call(addressdrcSOVk, addressbKEkH2C, uintYiy5YzK, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsbsWxLrj = await UFragments.new({from: accounts[2]});
		const uintSYpKXU7 = BigInt("1248")
		const addressHwZ0Xc7 = accounts[0]
		const uintPv9J2KA = BigInt("1764")
		const addressNOu7bY = accounts[0]
		const addressACdrNaz = accounts[3]
		const intEDbOZ0 = BigInt("-211")
		const intYTV5k2V = BigInt("-679")
		const uint256YNqvIla = await UFragmentsbsWxLrj.totalSupply.call({from: accounts[0]});
		const booleePHhvu = await UFragmentsbsWxLrj.approve.call(addressHwZ0Xc7, uintSYpKXU7, {from: accounts[2]});
//		const boolGI8c39L = await UFragmentsbsWxLrj.transferFrom.call(addressACdrNaz, addressNOu7bY, uintPv9J2KA, {from: accounts[3]});
//		const int256dLu5xjz = await UFragmentsbsWxLrj.sub.call(intYTV5k2V, intEDbOZ0, {from: accounts[3]});

		assert.equal(booleePHhvu, true)
		assert.equal(uint256YNqvIla, BigInt("0"))
		await expect(UFragmentsbsWxLrj.transferFrom.call(addressACdrNaz, addressNOu7bY, uintPv9J2KA, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsPpqNdCb = await UFragments.new({from: accounts[4]});
		const intUEn16sL = BigInt("762")
		const intQ2lTmI4 = BigInt("-970")
		const intIb7LtXR = BigInt("-804")
		const int98t2ev = BigInt("309")
		const intQeFyG3j = BigInt("-1294")
		const stringey8CGUz = await UFragmentsPpqNdCb.name.call({from: accounts[2]});
//		const int256PGLDJtY = await UFragmentsPpqNdCb.abs.call(intUEn16sL, {from: accounts[3]});
//		const int256leSptNl = await UFragmentsPpqNdCb.sub.call(intIb7LtXR, intQ2lTmI4, {from: accounts[3]});
//		const int256QFBVhg = await UFragmentsPpqNdCb.add.call(intQeFyG3j, int98t2ev, {from: accounts[3]});

		assert.equal(stringey8CGUz, "")
		await expect(UFragmentsPpqNdCb.abs.call(intUEn16sL, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsFgNCIPM = await UFragments.new({from: accounts[4]});
		const addressi34BzHe = accounts[1]
		const addressfxlr8eJ = accounts[2]
		const addressKR6q6ub = accounts[2]
		const uint8pIYBz4O = await UFragmentsFgNCIPM.decimals.call({from: accounts[3]});
		const stringgWmD2Pl = await UFragmentsFgNCIPM.symbol.call({from: accounts[4]});
//		const addressvkHbjRb = await UFragmentsFgNCIPM.initialize.call(addressi34BzHe, {from: accounts[4]});
//		const uint256J5GdNel = await UFragmentsFgNCIPM.allowance.call(addressKR6q6ub, addressfxlr8eJ, {from: accounts[3]});

		assert.equal(stringgWmD2Pl, "")
		assert.equal(uint8pIYBz4O, BigInt("0"))
		await expect(UFragmentsFgNCIPM.initialize.call(addressi34BzHe, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsss3SL7r = await UFragments.new({from: accounts[4]});
		const addressUpXzfK2 = accounts[2]
		const uintjLv4SiE = BigInt("107")
		const addressKQEzb1w = accounts[1]
		const addressKvsaq4L = accounts[3]
		const addressgJnAEd9 = accounts[5]
		const addressWvutbS = accounts[2]
		const uintNim1JwH = BigInt("863")
		const addressoLcKnmC = accounts[3]
		const addressdOSfFLS = accounts[2]
		const intmQGe72O = BigInt("-1810")
		const uintFUOy2Xh = BigInt("1142")
		const addressMfWwKe = accounts[0]
		const intFDXmlCx = BigInt("-1090")
		const uint256lSSCQB = await UFragmentsss3SL7r.balanceOf.call(addressUpXzfK2, {from: accounts[5]});
		const addressWHtlhhw = await UFragmentsss3SL7r.owner.call({from: accounts[3]});
		const stringiIXb9wb = await UFragmentsss3SL7r.symbol.call({from: accounts[3]});
		const uint8SKq9QR = await UFragmentsss3SL7r.decimals.call({from: accounts[4]});
//		const boolGkIsKPG = await UFragmentsss3SL7r.transferFrom.call(addressKvsaq4L, addressKQEzb1w, uintjLv4SiE, {from: accounts[2]});
//		await UFragmentsss3SL7r.renounceOwnership.call({from: accounts[1]});
//		const uint256d6LwOLX = await UFragmentsss3SL7r.allowance.call(addressWvutbS, addressgJnAEd9, {from: "0x0000000000000000000000000000000000000001"});
//		const boolvAmcuXG = await UFragmentsss3SL7r.approve.call(addressoLcKnmC, uintNim1JwH, {from: accounts[1]});
//		const addressNHCnSEh = await UFragmentsss3SL7r.initialize.call(addressdOSfFLS, {from: accounts[2]});
//		await UFragmentsss3SL7r.renounceOwnership.call({from: accounts[4]});
//		const int256wDUq9ya = await UFragmentsss3SL7r.abs.call(intmQGe72O, {from: accounts[1]});
//		const addressphikBFc = await UFragmentsss3SL7r.initRebase.call(addressMfWwKe, uintFUOy2Xh, {from: accounts[4]});
//		const int256WMRiguV = await UFragmentsss3SL7r.abs.call(intFDXmlCx, {from: accounts[1]});

		assert.equal(addressWHtlhhw, 0x0000000000000000000000000000000000000000)
		assert.equal(stringiIXb9wb, "")
		assert.equal(uint256lSSCQB, BigInt("0"))
		assert.equal(uint8SKq9QR, BigInt("0"))
		await expect(UFragmentsss3SL7r.transferFrom.call(addressKvsaq4L, addressKQEzb1w, uintjLv4SiE, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsbsWxLrj = await UFragments.new({from: accounts[2]});
		const uintWeEHXFT = BigInt("1248")
		const addressWdqA49I = accounts[0]
		const uintpQ85Y5G = BigInt("480")
		const addresswSfh7Y = accounts[3]
		const uintD8eGETY = BigInt("1764")
		const addresswagwosx = accounts[0]
		const addressjJaSbKI = accounts[3]
		const intLzpGqGX = BigInt("-211")
		const intQ5hMHvv = BigInt("-676")
		const booleePHhvu = await UFragmentsbsWxLrj.approve.call(addressWdqA49I, uintWeEHXFT, {from: accounts[2]});
		const boolt3pVvHJ = await UFragmentsbsWxLrj.rebaseTimeInfo.call({from: accounts[4]});
		const boolxACJXC = await UFragmentsbsWxLrj.approve.call(addresswSfh7Y, uintpQ85Y5G, {from: accounts[3]});
//		const boolGI8c39L = await UFragmentsbsWxLrj.transferFrom.call(addressjJaSbKI, addresswagwosx, uintD8eGETY, {from: accounts[3]});
//		const int256dLu5xjz = await UFragmentsbsWxLrj.sub.call(intQ5hMHvv, intLzpGqGX, {from: accounts[3]});

		assert.equal(booleePHhvu, true)
		assert.equal(boolxACJXC, true)
		await expect(UFragmentsbsWxLrj.transferFrom.call(addressjJaSbKI, addresswagwosx, uintD8eGETY, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsY2nN4D = await UFragments.new({from: accounts[1]});
		const uintB3CUTMC = BigInt("29")
		const stringlKm90U9 = "bOnndE1WaRGgYR8y"
		const stringeEfu5Jn = "Ojepw3cjJTICaYPILkesDKGUoBjnrYREIu8rhPKhOYllVhaNKqU7yf2EI3UyuOe"
		const int62ZpS8 = BigInt("-175")
		const intCEduOmE = BigInt("-1438")
//		const uint256izJVlFk = await UFragmentsY2nN4D.calRebase.call({from: accounts[0]});
//		const stringnvzKy43 = await UFragmentsY2nN4D.initialize.call(stringeEfu5Jn, stringlKm90U9, uintB3CUTMC, {from: "0x0000000000000000000000000000000000000001"});
//		await UFragmentsY2nN4D.renounceOwnership.call({from: accounts[0]});
//		const int256KuhU3za = await UFragmentsY2nN4D.mul.call(intCEduOmE, int62ZpS8, {from: accounts[3]});
//		await UFragmentsY2nN4D.onlyOwner.call({from: accounts[3]});
//		const boolY0RE8W = await UFragmentsY2nN4D.isOwner.call({from: accounts[3]});

		await expect(UFragmentsY2nN4D.calRebase.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});
})