const QuickToken = artifacts.require("QuickToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('QuickToken', (accounts) => {
	it('test for QuickToken', async () => {
		const addressIUFNmGw = "0x0000000000000000000000000000000000000001"
		const addresslNt8sFc = accounts[1]
		const QuickTokenJ3KAbqE = await QuickToken.new(addressIUFNmGw, addresslNt8sFc, {from: accounts[3]});
		const addressOIEdVRM = accounts[3]
		const addressGYJlvLL = accounts[4]
		const addressn8BrfOL = accounts[3]
		const addressoqBgiO8 = accounts[4]
		const addressPTq1Dq9 = accounts[1]
		const addressWW3gJln = accounts[1]
		const addressJrGvmiC = accounts[3]
		const addressMsDoqDp = accounts[1]
		const addressZzazY3c = accounts[1]
		const uintWSbyuaw = await QuickTokenJ3KAbqE.balanceOf.call(addressOIEdVRM, {from: accounts[4]});
		const uintEQXG3oM = await QuickTokenJ3KAbqE.allowance.call(addressn8BrfOL, addressGYJlvLL, {from: accounts[2]});
		const uintF7UCUWc = await QuickTokenJ3KAbqE.allowance.call(addressPTq1Dq9, addressoqBgiO8, {from: accounts[2]});
		const uintuPLpzZ = await QuickTokenJ3KAbqE.allowance.call(addressJrGvmiC, addressWW3gJln, {from: accounts[5]});
		const uintPzLLzOX = await QuickTokenJ3KAbqE.allowance.call(addressZzazY3c, addressMsDoqDp, {from: accounts[2]});

		assert.equal(uintEQXG3oM, BigInt("0"))
		assert.equal(uintF7UCUWc, BigInt("0"))
		assert.equal(uintPzLLzOX, BigInt("0"))
		assert.equal(uintWSbyuaw, BigInt("0"))
		assert.equal(uintuPLpzZ, BigInt("0"))
	});

	it('test for QuickToken', async () => {
		const addressfsvj8nG = accounts[3]
		const addresspo7fAkG = accounts[2]
		const QuickTokenwCvJbuz = await QuickToken.new(addressfsvj8nG, addresspo7fAkG, {from: accounts[4]});
		const addresstARQQRU = accounts[0]
		const uintkXG2VZR = BigInt("1658")
		const addressPilYMcz = accounts[4]
		const uintCMSKx5N = BigInt("1650")
		const addressF8QYopo = accounts[5]
		const uintnt9HTBl = await QuickTokenwCvJbuz.balanceOf.call(addresstARQQRU, {from: accounts[2]});
		const addressKNSBFJs = await QuickTokenwCvJbuz.mint.call(addressPilYMcz, uintkXG2VZR, {from: accounts[1]});
		const boolckYFXBr = await QuickTokenwCvJbuz.transfer.call(addressF8QYopo, uintCMSKx5N, {from: accounts[1]});

		assert.equal(uintnt9HTBl, BigInt("0"))
		await expect(QuickTokenwCvJbuz.mint.call(addressPilYMcz, uintkXG2VZR, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for QuickToken', async () => {
		const addressekR5m63 = accounts[5]
		const addressQxXYBEr = "0x0000000000000000000000000000000000000001"
		const QuickTokenKFFwqbo = await QuickToken.new(addressekR5m63, addressQxXYBEr, {from: accounts[1]});
		const addressEUBovGy = accounts[4]
		const uintSn7mwyc = BigInt("1019")
		const addressRV5xIQf = accounts[1]
		const uintTrcZtv5 = BigInt("1775")
		const addressWTAktpA = accounts[0]
		const uintI1oofSg = await QuickTokenKFFwqbo.balanceOf.call(addressEUBovGy, {from: accounts[2]});
		const boolbwcWfla = await QuickTokenKFFwqbo.approve.call(addressRV5xIQf, uintSn7mwyc, {from: accounts[2]});
		const booleAtpl7R = await QuickTokenKFFwqbo.approve.call(addressWTAktpA, uintTrcZtv5, {from: accounts[5]});

		assert.equal(boolbwcWfla, true)
		assert.equal(booleAtpl7R, true)
		assert.equal(uintI1oofSg, BigInt("0"))
	});

	it('test for QuickToken', async () => {
		const addressKr6D8EX = accounts[3]
		const addressLNGoVRM = accounts[1]
		const QuickTokenVlbMkAs = await QuickToken.new(addressKr6D8EX, addressLNGoVRM, {from: accounts[3]});
		const uintagei9b = BigInt("439")
		const addressSAT9ut7 = accounts[2]
		const uintfaKrqA5 = BigInt("1481")
		const addresslJ89Rx3 = accounts[1]
		const addressyNhTkcX = accounts[0]
		const addressqWnmvvm = accounts[2]
		const booleUqeMq = await QuickTokenVlbMkAs.approve.call(addressSAT9ut7, uintagei9b, {from: accounts[4]});
		const boolfLkzSBJ = await QuickTokenVlbMkAs.transferFrom.call(addressyNhTkcX, addresslJ89Rx3, uintfaKrqA5, {from: accounts[0]});
		const uintwr4JT3i = await QuickTokenVlbMkAs.balanceOf.call(addressqWnmvvm, {from: accounts[3]});

		assert.equal(booleUqeMq, true)
		await expect(QuickTokenVlbMkAs.transferFrom.call(addressyNhTkcX, addresslJ89Rx3, uintfaKrqA5, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for QuickToken', async () => {
		const addressimHujt6 = accounts[0]
		const addresszDIcW1h = accounts[1]
		const QuickTokenqBJq0Aj = await QuickToken.new(addressimHujt6, addresszDIcW1h, {from: accounts[4]});
		const uint59IbDR = BigInt("1974")
		const addressvUBmxOU = accounts[4]
		const addresskD6TGzN = accounts[1]
		const addressSDXMDAd = accounts[4]
		const addressPvt7R0 = accounts[2]
		const uintoAqDd66 = BigInt("1320")
		const addressu1xTBeA = accounts[2]
		const uintdXPUuHw = BigInt("1087")
		const addressFFjTVoM = accounts[0]
		const uintZsfkbEl = BigInt("740")
		const addressJjv37xD = accounts[0]
		const boolGfLjaRS = await QuickTokenqBJq0Aj.transferFrom.call(addresskD6TGzN, addressvUBmxOU, uint59IbDR, {from: accounts[0]});
		const uintLVPkvWG = await QuickTokenqBJq0Aj.allowance.call(addressPvt7R0, addressSDXMDAd, {from: accounts[5]});
		const addressvgNb8ZQ = await QuickTokenqBJq0Aj.mint.call(addressu1xTBeA, uintoAqDd66, {from: accounts[2]});
		const boolRkSBMQD = await QuickTokenqBJq0Aj.transfer.call(addressFFjTVoM, uintdXPUuHw, {from: accounts[5]});
		const addressozYgSaD = await QuickTokenqBJq0Aj.mint.call(addressJjv37xD, uintZsfkbEl, {from: accounts[3]});

		await expect(QuickTokenqBJq0Aj.transferFrom.call(addresskD6TGzN, addressvUBmxOU, uint59IbDR, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for QuickToken', async () => {
		const addresscvPPkGI = accounts[5]
		const addressbxlu10v = accounts[3]
		const QuickTokenB7IKjow = await QuickToken.new(addresscvPPkGI, addressbxlu10v, {from: accounts[0]});
		const addressnKZVHdZ = accounts[2]
		const uintv8Ek9IW = BigInt("1562")
		const addressnfbHnye = accounts[2]
		const addressNaQTCKE = accounts[0]
		const addressMgAhCbO = accounts[1]
		const address6kZWZq = "0x0000000000000000000000000000000000000001"
		const addressuQltJ0G = accounts[0]
		const addressU7uQ2E = accounts[3]
		const uintB3aFGB = await QuickTokenB7IKjow.balanceOf.call(addressnKZVHdZ, {from: accounts[3]});
		const boolrORFo4T = await QuickTokenB7IKjow.transfer.call(addressnfbHnye, uintv8Ek9IW, {from: accounts[0]});
		const uintozz1kGU = await QuickTokenB7IKjow.allowance.call(addressMgAhCbO, addressNaQTCKE, {from: accounts[3]});
		const addressJO7sI3Z = await QuickTokenB7IKjow.setMinter.call(address6kZWZq, {from: accounts[2]});
		const uintxqb6m8 = await QuickTokenB7IKjow.allowance.call(addressU7uQ2E, addressuQltJ0G, {from: accounts[2]});

		assert.equal(uintB3aFGB, BigInt("0"))
		await expect(QuickTokenB7IKjow.transfer.call(addressnfbHnye, uintv8Ek9IW, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for QuickToken', async () => {
		const addressymADkeU = accounts[4]
		const addressLF6PBsX = accounts[4]
		const QuickTokenyOrJem = await QuickToken.new(addressymADkeU, addressLF6PBsX, {from: accounts[3]});
		const uintdPaWmVn = BigInt("1105")
		const addresse28eo5V = accounts[1]
		const uint7Zw9vU = BigInt("105")
		const addressCG50jf = accounts[1]
		const addresspAbadME = accounts[1]
		const addressR5WIwgZ = accounts[4]
		const addressXxsgcy6 = accounts[4]
		const uintV6VuAnk = BigInt("1070")
		const addressWq636At = accounts[4]
		const boolstk8eNE = await QuickTokenyOrJem.transfer.call(addresse28eo5V, uintdPaWmVn, {from: accounts[4]});
		const boolO9VJkr5 = await QuickTokenyOrJem.approve.call(addressCG50jf, uint7Zw9vU, {from: accounts[4]});
		const uintOYRbmGw = await QuickTokenyOrJem.allowance.call(addressR5WIwgZ, addresspAbadME, {from: accounts[4]});
		const uintwMVKdG = await QuickTokenyOrJem.balanceOf.call(addressXxsgcy6, {from: accounts[2]});
		const boolal5Ov5 = await QuickTokenyOrJem.transfer.call(addressWq636At, uintV6VuAnk, {from: accounts[2]});

		assert.equal(boolO9VJkr5, true)
		assert.equal(boolstk8eNE, true)
		assert.equal(uintOYRbmGw, BigInt("0"))
		assert.equal(uintwMVKdG, BigInt("2000000000000"))
		await expect(QuickTokenyOrJem.transfer.call(addressWq636At, uintV6VuAnk, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for QuickToken', async () => {
		const addressHRbDMGY = "0x0000000000000000000000000000000000000001"
		const addresspsN1fD4 = accounts[3]
		const QuickTokenYLvawhj = await QuickToken.new(addressHRbDMGY, addresspsN1fD4, {from: accounts[0]});
		const uintK1k1cEe = BigInt("153")
		const addressZwy9jjM = accounts[0]
		const addresscIUY8kt = accounts[1]
		const addressDCq9hSx = accounts[4]
		const addressMiyPoTe = accounts[2]
		const uintZRZUwKw = BigInt("1492")
		const addressbOxhsfk = accounts[3]
		const uintPd5hx3 = BigInt("880")
		const addressY2SD7Tb = "0x0000000000000000000000000000000000000001"
		const addressMMDDqDz = accounts[0]
		const addressrHMAGdd = accounts[1]
		const boolEIZP1T = await QuickTokenYLvawhj.approve.call(addressZwy9jjM, uintK1k1cEe, {from: accounts[3]});
		const uintSBPjVP = await QuickTokenYLvawhj.allowance.call(addressDCq9hSx, addresscIUY8kt, {from: accounts[0]});
		const addressOk7x6uk = await QuickTokenYLvawhj.setMinter.call(addressMiyPoTe, {from: "0x0000000000000000000000000000000000000001"});
		const boolwnaT9fi = await QuickTokenYLvawhj.approve.call(addressbOxhsfk, uintZRZUwKw, {from: accounts[2]});
		const boolTDb1lr1 = await QuickTokenYLvawhj.transferFrom.call(addressMMDDqDz, addressY2SD7Tb, uintPd5hx3, {from: accounts[1]});
		const addressCdjojrT = await QuickTokenYLvawhj.setMinter.call(addressrHMAGdd, {from: accounts[1]});

		assert.equal(boolEIZP1T, true)
		assert.equal(uintSBPjVP, BigInt("0"))
		await expect(QuickTokenYLvawhj.setMinter.call(addressMiyPoTe, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for QuickToken', async () => {
		const addressVccAbfj = accounts[3]
		const addresscshsny = accounts[2]
		const QuickTokenwCvJbuz = await QuickToken.new(addressVccAbfj, addresscshsny, {from: accounts[4]});
		const uintvSIwSx = BigInt("1651")
		const addressmtnsy3W = accounts[2]
		const addressMSL6EUF = accounts[5]
		const addressXooHDLY = accounts[0]
		const uintRNC8Sfs = BigInt("1638")
		const addressRqqNEQj = accounts[6]
		const addressZdczPsm = await QuickTokenwCvJbuz.mint.call(addressmtnsy3W, uintvSIwSx, {from: accounts[2]});
		const uintcz3Cai6 = await QuickTokenwCvJbuz.allowance.call(addressXooHDLY, addressMSL6EUF, {from: accounts[2]});
		const boolckYFXBr = await QuickTokenwCvJbuz.transfer.call(addressRqqNEQj, uintRNC8Sfs, {from: accounts[1]});

		assert.equal(uintcz3Cai6, BigInt("0"))
		await expect(QuickTokenwCvJbuz.transfer.call(addressRqqNEQj, uintRNC8Sfs, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for QuickToken', async () => {
		const addressR6YXHse = accounts[5]
		const addressbFvWZQR = accounts[2]
		const QuickTokenBILiY6F = await QuickToken.new(addressR6YXHse, addressbFvWZQR, {from: "0x0000000000000000000000000000000000000001"});
		const uintjBhdVPl = BigInt("875")
		const addressnrnnB76 = accounts[2]
		const uintT3H5O99 = BigInt("399")
		const addressRDlvDpG = accounts[4]
		const boolt9R7VhL = await QuickTokenBILiY6F.approve.call(addressnrnnB76, uintjBhdVPl, {from: accounts[2]});
		const boolvEsH1ac = await QuickTokenBILiY6F.approve.call(addressRDlvDpG, uintT3H5O99, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for QuickToken', async () => {
		const addressC4IJ4HV = accounts[3]
		const addressj1mFubZ = accounts[2]
		const QuickTokenwCvJbuz = await QuickToken.new(addressC4IJ4HV, addressj1mFubZ, {from: accounts[4]});
		const uintNKDCuVO = BigInt("0")
		const addressYDn1BX = "0x00000000000000000000000000000000000000-1"
		const uinthB5I0v = BigInt("1333")
		const addressNdKB9l6 = accounts[4]
		const uintDJggNd9 = BigInt("514")
		const addressmhHK7xt = accounts[0]
		const boolRElv0V = await QuickTokenwCvJbuz.approve.call(addressYDn1BX, uintNKDCuVO, {from: accounts[1]});
		const boolYqfJG36 = await QuickTokenwCvJbuz.transfer.call(addressNdKB9l6, uinthB5I0v, {from: accounts[2]});
		const boolu4MPMMN = await QuickTokenwCvJbuz.approve.call(addressmhHK7xt, uintDJggNd9, {from: accounts[4]});

		await expect(QuickTokenwCvJbuz.approve.call(addressYDn1BX, uintNKDCuVO, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})