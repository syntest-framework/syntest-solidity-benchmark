const DSP = artifacts.require("DSP");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('DSP', (accounts) => {
	it('test for DSP', async () => {
		const DSPdOnJHdJ = await DSP.new({from: accounts[4]});
		const addressvHP4AN8 = accounts[1]
		const addressFDgpAAm = accounts[0]
		const addressn3qVlDT = await DSPdOnJHdJ.upgradeTo.call(addressvHP4AN8, {from: accounts[1]});
		const boolklLbwAo = await DSPdOnJHdJ.unfreezeAccount.call(addressFDgpAAm, {from: accounts[0]});

		await expect(DSPdOnJHdJ.upgradeTo.call(addressvHP4AN8, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPuYhCwjK = await DSP.new({from: "0x0000000000000000000000000000000000000001"});
		const uintfQMXjuU = BigInt("1561")
		const addressrbQkDrJ = accounts[1]
		const addressJYcR4Xm = accounts[2]
		const addressjfeJBh9 = accounts[0]
		await DSPuYhCwjK.whenNotPaused.call({from: "0x0000000000000000000000000000000000000001"});
		const boolmZSdSnf = await DSPuYhCwjK.transfer.call(addressrbQkDrJ, uintfQMXjuU, {from: accounts[3]});
		const stringCGpXepm = await DSPuYhCwjK.symbol.call({from: accounts[1]});
		const addressVFmnavD = await DSPuYhCwjK.removePauser.call(addressJYcR4Xm, {from: accounts[2]});
		const addressOqlEK6i = await DSPuYhCwjK.upgradeTo.call(addressjfeJBh9, {from: accounts[4]});
	});

	it('test for DSP', async () => {
		const stringzdd5Sij = "zahpPxNsbsmmQmVl3JXKfKirZINx1h8uafo1kWpyID8fwwbfEjTwPyLxi9kF8jWmFJPZkUMOy30ouFlJg8OjeuGSzeJHAuZam"
		const stringyuNv1wl = "wgPyAJ2Ctck9T18njCsJqqDNU8Wu6PD"
		const uintnFdjkLh = BigInt("152")
		const DSPAWCCY9 = await DSP.new(stringzdd5Sij, stringyuNv1wl, uintnFdjkLh, {from: accounts[4]});
		const addressIsnmE9X = accounts[4]
		const addressCAy2tLJ = accounts[4]
		const addressZ7z0E4g = accounts[4]
		const addressNPUKC1S = accounts[3]
		const boolLxz0PuF = await DSPAWCCY9.isOwner.call(addressIsnmE9X, {from: accounts[0]});
		const uint256KZfuDd6 = await DSPAWCCY9.allowance.call(addressZ7z0E4g, addressCAy2tLJ, {from: accounts[1]});
		const uint256NxhUAFP = await DSPAWCCY9.totalSupply.call({from: accounts[2]});
		const boolF1s3X7H = await DSPAWCCY9.isOwner.call(addressNPUKC1S, {from: accounts[2]});
	});

	it('test for DSP', async () => {
		const DSPDpJz9Zg = await DSP.new({from: accounts[3]});
		const addressi5AhH4r = accounts[3]
		const uintC9yCQTv = BigInt("514")
		const uintKhjTESf = BigInt("1781")
		const addressbdsTbgk = accounts[1]
		const uintyWywXJW = BigInt("945")
		const addressCXIy9DM = accounts[3]
		await DSPDpJz9Zg.pause.call({from: accounts[0]});
		const boolwKFbopR = await DSPDpJz9Zg.isOwner.call(addressi5AhH4r, {from: accounts[1]});
		await DSPDpJz9Zg.onlyPauser.call({from: "0x0000000000000000000000000000000000000001"});
		const boolUitphJq = await DSPDpJz9Zg.lock.call(addressbdsTbgk, uintKhjTESf, uintC9yCQTv, {from: accounts[3]});
		const boolE3whzr8 = await DSPDpJz9Zg.transfer.call(addressCXIy9DM, uintyWywXJW, {from: accounts[0]});
		const stringXUZgsZg = await DSPDpJz9Zg.symbol.call({from: accounts[1]});

		await expect(DSPDpJz9Zg.pause.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPzNn5A6s = await DSP.new({from: accounts[2]});
		const addressrUaEaK = accounts[3]
		const addressZoJgn9M = accounts[2]
		const uintmtHHtKJ = BigInt("501")
		const addressIQXrEME = accounts[2]
		await DSPzNn5A6s.whenNotPaused.call({from: accounts[5]});
		const boolqp2y6kp = await DSPzNn5A6s.acceptOwnership.call({from: "0x0000000000000000000000000000000000000001"});
		const boola4WuXhP = await DSPzNn5A6s.unfreezeAccount.call(addressrUaEaK, {from: accounts[1]});
		const boolRFzeuds = await DSPzNn5A6s.isOwner.call(addressZoJgn9M, {from: "0x0000000000000000000000000000000000000001"});
		const boolxaAnxZn = await DSPzNn5A6s.transfer.call(addressIQXrEME, uintmtHHtKJ, {from: accounts[1]});

		await expect(DSPzNn5A6s.whenNotPaused.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPrveTHJ = await DSP.new({from: accounts[3]});
		const uintE0IOMWR = BigInt("1865")
		const addressPOA1Obi = accounts[2]
		const addressSkPiVs7 = accounts[4]
		const addressXmrEq4A = accounts[0]
		const addressehFR5h = accounts[2]
		const boolxununyM = await DSPrveTHJ.transfer.call(addressPOA1Obi, uintE0IOMWR, {from: "0x0000000000000000000000000000000000000001"});
		await DSPrveTHJ.renouncePauser.call({from: accounts[4]});
		const uint256N7GEmFR = await DSPrveTHJ.allowance.call(addressXmrEq4A, addressSkPiVs7, {from: "0x0000000000000000000000000000000000000001"});
		const boolEP5IWv = await DSPrveTHJ.unfreezeAccount.call(addressehFR5h, {from: "0x0000000000000000000000000000000000000001"});
		await DSPrveTHJ.whenPaused.call({from: accounts[0]});

		await expect(DSPrveTHJ.transfer.call(addressPOA1Obi, uintE0IOMWR, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPWNqqij = await DSP.new({from: accounts[4]});
		const uintTMWOwTb = BigInt("450")
		const addressN1UEC5a = accounts[5]
		const addressxg7OWxY = accounts[3]
		const boolRbuMgcS = await DSPWNqqij.approve.call(addressN1UEC5a, uintTMWOwTb, {from: accounts[1]});
		const addressbl67eVw = await DSPWNqqij.removePauser.call(addressxg7OWxY, {from: accounts[4]});
		await DSPWNqqij.unpause.call({from: accounts[1]});

		assert.equal(boolRbuMgcS, true)
		await expect(DSPWNqqij.removePauser.call(addressxg7OWxY, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPWNqqij = await DSP.new({from: accounts[4]});
		const uint1zxr9z = BigInt("450")
		const addressIGVi5lI = accounts[5]
		const addresssYMiZha = accounts[1]
		const addressaotVGks = "0x0000000000000000000000000000000000000001"
		const address1a9tkw = accounts[3]
		const boolRbuMgcS = await DSPWNqqij.approve.call(addressIGVi5lI, uint1zxr9z, {from: accounts[1]});
		const boolfF1BjuJ = await DSPWNqqij.paused.call({from: "0x0000000000000000000000000000000000000001"});
		const uint2564gumIW = await DSPWNqqij.allowance.call(addressaotVGks, addresssYMiZha, {from: accounts[4]});
		const addressbl67eVw = await DSPWNqqij.removePauser.call(address1a9tkw, {from: accounts[4]});
		await DSPWNqqij.unpause.call({from: accounts[1]});

		assert.equal(boolRbuMgcS, true)
		assert.equal(boolfF1BjuJ, false)
		assert.equal(uint2564gumIW, BigInt("0"))
		await expect(DSPWNqqij.removePauser.call(address1a9tkw, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPrveTHJ = await DSP.new({from: accounts[3]});
		const addressy2yj84B = accounts[5]
		const addressqd3o5rU = accounts[0]
		const uinta99GnMf = BigInt("1989")
		const addressSlQocGp = accounts[1]
		const addressdywWAk4 = accounts[2]
		await DSPrveTHJ.renouncePauser.call({from: accounts[4]});
		const uint256N7GEmFR = await DSPrveTHJ.allowance.call(addressqd3o5rU, addressy2yj84B, {from: "0x0000000000000000000000000000000000000001"});
		const boolPMK4bWy = await DSPrveTHJ.burnFrombyOwner.call(addressSlQocGp, uinta99GnMf, {from: accounts[1]});
		const boolEP5IWv = await DSPrveTHJ.unfreezeAccount.call(addressdywWAk4, {from: "0x0000000000000000000000000000000000000001"});
		await DSPrveTHJ.whenPaused.call({from: accounts[0]});

		await expect(DSPrveTHJ.renouncePauser.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPWNqqij = await DSP.new({from: accounts[4]});
		const uintIn6rFu = BigInt("450")
		const addresskjcJrL = accounts[5]
		const address0NZ4AS = accounts[4]
		const boolRbuMgcS = await DSPWNqqij.approve.call(addresskjcJrL, uintIn6rFu, {from: accounts[1]});
		const boolfF1BjuJ = await DSPWNqqij.paused.call({from: "0x0000000000000000000000000000000000000001"});
		const addressbl67eVw = await DSPWNqqij.removePauser.call(address0NZ4AS, {from: accounts[4]});
		await DSPWNqqij.unpause.call({from: accounts[1]});

		assert.equal(boolRbuMgcS, true)
		assert.equal(boolfF1BjuJ, false)
		await expect(DSPWNqqij.unpause.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPrveTHJ = await DSP.new({from: accounts[3]});
		const uintVHSuaX1 = BigInt("456")
		const addressaVWiyXy = accounts[3]
		const booluqhngxG = await DSPrveTHJ.burnFrombyOwner.call(addressaVWiyXy, uintVHSuaX1, {from: accounts[3]});

		assert.equal(booluqhngxG, true)
	});

	it('test for DSP', async () => {
		const DSPrveTHJ = await DSP.new({from: accounts[3]});
		const uintulvbDZa = BigInt("156")
		const addressK9JNv38 = accounts[4]
		const addressv02h7fg = accounts[3]
		const addressrtBy81v = accounts[4]
		const addressJ812kyt = accounts[0]
		const addressIkpPxSa = accounts[2]
		const boolLsMQsG = await DSPrveTHJ.transferFrom.call(addressv02h7fg, addressK9JNv38, uintulvbDZa, {from: accounts[2]});
		const uint256N7GEmFR = await DSPrveTHJ.allowance.call(addressJ812kyt, addressrtBy81v, {from: "0x0000000000000000000000000000000000000001"});
		const boolEP5IWv = await DSPrveTHJ.unfreezeAccount.call(addressIkpPxSa, {from: "0x0000000000000000000000000000000000000001"});

		await expect(DSPrveTHJ.transferFrom.call(addressv02h7fg, addressK9JNv38, uintulvbDZa, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPrveTHJ = await DSP.new({from: accounts[3]});
		const uintTzFOYG = BigInt("742")
		const addressyvnNPKL = accounts[2]
		const uintEfx1kpe = BigInt("156")
		const addressRaseALs = accounts[4]
		const addressq4Wv6N9 = accounts[3]
		const addressaIX1r9z = accounts[4]
		const addresshbQj89r = accounts[1]
		const boolgEgR9VQ = await DSPrveTHJ.unlock.call(addressyvnNPKL, uintTzFOYG, {from: accounts[3]});
		const boolLsMQsG = await DSPrveTHJ.transferFrom.call(addressq4Wv6N9, addressRaseALs, uintEfx1kpe, {from: accounts[2]});
		const uint256N7GEmFR = await DSPrveTHJ.allowance.call(addresshbQj89r, addressaIX1r9z, {from: "0x0000000000000000000000000000000000000001"});

		await expect(DSPrveTHJ.unlock.call(addressyvnNPKL, uintTzFOYG, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPrveTHJ = await DSP.new({from: accounts[3]});
		const addresszvmtv1i = accounts[1]
		const uintNZ4E28u = BigInt("592")
		const addressqfqDk7w = "0x0000000000000000000000000000000000000001"
		const addressp0dg9Lj = accounts[3]
		const boolXG0SzQ = await DSPrveTHJ.isOwner.call(addresszvmtv1i, {from: accounts[5]});
		const uint256B0FPx9y = await DSPrveTHJ.totalSupply.call({from: accounts[2]});
		const boolcWldIaj = await DSPrveTHJ.transfer.call(addressqfqDk7w, uintNZ4E28u, {from: accounts[3]});
		const boolEP5IWv = await DSPrveTHJ.unfreezeAccount.call(addressp0dg9Lj, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolXG0SzQ, false)
		assert.equal(boolcWldIaj, true)
		assert.equal(uint256B0FPx9y, BigInt("100000000000000000000000000000"))
		await expect(DSPrveTHJ.unfreezeAccount.call(addressp0dg9Lj, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPrveTHJ = await DSP.new({from: accounts[3]});
		const uintuPlLWK6 = BigInt("1335")
		const addressBUtK0Lf = accounts[0]
		const addressh4NP2Sx = accounts[0]
		const uint9IECGd = BigInt("1866")
		const addressbPZYR3D = accounts[2]
		const addressWSDGgx = accounts[4]
		const addressv9cv2aR = accounts[0]
		const uintq2Z9FhS = BigInt("408")
		const addressvxFkzRW = accounts[2]
		const addressvJAVNE = accounts[3]
		const uint8Ihms7V = await DSPrveTHJ.decimals.call({from: accounts[4]});
		const boolgB8auR7 = await DSPrveTHJ.transferFrom.call(addressh4NP2Sx, addressBUtK0Lf, uintuPlLWK6, {from: accounts[3]});
		const boolxununyM = await DSPrveTHJ.transfer.call(addressbPZYR3D, uint9IECGd, {from: "0x0000000000000000000000000000000000000001"});
		const uint256N7GEmFR = await DSPrveTHJ.allowance.call(addressv9cv2aR, addressWSDGgx, {from: "0x0000000000000000000000000000000000000001"});
		await DSPrveTHJ.onlyNewOwner.call({from: accounts[1]});
		const boolARNZsr = await DSPrveTHJ.transferFrom.call(addressvJAVNE, addressvxFkzRW, uintq2Z9FhS, {from: accounts[0]});

		assert.equal(uint8Ihms7V, BigInt("18"))
		await expect(DSPrveTHJ.transferFrom.call(addressh4NP2Sx, addressBUtK0Lf, uintuPlLWK6, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPrveTHJ = await DSP.new({from: accounts[3]});
		const uintc2YrybH = BigInt("156")
		const addressk3KJ2E5 = accounts[4]
		const addressJL0wj4G = accounts[3]
		const addressLX2Jg1g = accounts[4]
		const addressAerzJlP = accounts[0]
		const addressDqckKXv = accounts[2]
		const stringC3Uu5Jo = await DSPrveTHJ.symbol.call({from: accounts[0]});
		const boolLsMQsG = await DSPrveTHJ.transferFrom.call(addressJL0wj4G, addressk3KJ2E5, uintc2YrybH, {from: accounts[2]});
		const uint256N7GEmFR = await DSPrveTHJ.allowance.call(addressAerzJlP, addressLX2Jg1g, {from: "0x0000000000000000000000000000000000000001"});
		const boolEP5IWv = await DSPrveTHJ.unfreezeAccount.call(addressDqckKXv, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(stringC3Uu5Jo, "DSP")
		await expect(DSPrveTHJ.transferFrom.call(addressJL0wj4G, addressk3KJ2E5, uintc2YrybH, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPrveTHJ = await DSP.new({from: accounts[3]});
		const addressKzbvR3K = accounts[1]
		const uinthBHBEvB = BigInt("1104")
		const addressrIsJkWf = accounts[3]
		const uintdYJHYR = BigInt("227")
		const addressTiKPA6v = accounts[2]
		const addressf5uPJqG = accounts[4]
		const uintuzPPlKO = BigInt("608")
		const addresslfeGyWD = "0x0000000000000000000000000000000000000000"
		const boolXG0SzQ = await DSPrveTHJ.isOwner.call(addressKzbvR3K, {from: accounts[5]});
		const boolCMtrRJG = await DSPrveTHJ.increaseAllowance.call(addressrIsJkWf, uinthBHBEvB, {from: accounts[4]});
		const booltX4vZ6F = await DSPrveTHJ.transferFrom.call(addressf5uPJqG, addressTiKPA6v, uintdYJHYR, {from: accounts[1]});
		const boolcWldIaj = await DSPrveTHJ.transfer.call(addresslfeGyWD, uintuzPPlKO, {from: accounts[3]});

		assert.equal(boolCMtrRJG, true)
		assert.equal(boolXG0SzQ, false)
		await expect(DSPrveTHJ.transferFrom.call(addressf5uPJqG, addressTiKPA6v, uintdYJHYR, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPrveTHJ = await DSP.new({from: accounts[3]});
		const addressWzPVDz = accounts[2]
		const uintIFeA26L = BigInt("592")
		const addressqb1NbMf = "0x0000000000000000000000000000000000000001"
		const addressDj7NdLD = accounts[0]
		const addressef1rdsi = accounts[5]
		const addressDhB48Zd = accounts[3]
		const boolXG0SzQ = await DSPrveTHJ.isOwner.call(addressWzPVDz, {from: accounts[5]});
		const uint256B0FPx9y = await DSPrveTHJ.totalSupply.call({from: accounts[2]});
		const boolcWldIaj = await DSPrveTHJ.transfer.call(addressqb1NbMf, uintIFeA26L, {from: accounts[3]});
		const uint256lgYw42Y = await DSPrveTHJ.balanceOf.call(addressDj7NdLD, {from: accounts[3]});
		const boolAuGISX0 = await DSPrveTHJ.isOwner.call(addressef1rdsi, {from: accounts[0]});
		const boolEP5IWv = await DSPrveTHJ.unfreezeAccount.call(addressDhB48Zd, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolAuGISX0, false)
		assert.equal(boolXG0SzQ, false)
		assert.equal(boolcWldIaj, true)
		assert.equal(uint256B0FPx9y, BigInt("100000000000000000000000000000"))
		assert.equal(uint256lgYw42Y, BigInt("0"))
		await expect(DSPrveTHJ.unfreezeAccount.call(addressDhB48Zd, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPrveTHJ = await DSP.new({from: accounts[3]});
		const uintWbhfVkK = BigInt("583")
		const addressO9yUQHm = accounts[3]
		const uintpsi7Ney = BigInt("1720")
		const addresslcdByf = accounts[0]
		const addresshBUdODc = accounts[4]
		const addressdB37GUQ = accounts[0]
		const boolMuClRXg = await DSPrveTHJ.mint.call(addressO9yUQHm, uintWbhfVkK, {from: accounts[3]});
		const boolTBtvzas = await DSPrveTHJ.mint.call(addresslcdByf, uintpsi7Ney, {from: accounts[1]});
		const uint256N7GEmFR = await DSPrveTHJ.allowance.call(addressdB37GUQ, addresshBUdODc, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolMuClRXg, true)
		await expect(DSPrveTHJ.mint.call(addresslcdByf, uintpsi7Ney, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPrveTHJ = await DSP.new({from: accounts[3]});
		const uintbxjgA3r = BigInt("594")
		const addressTZ7fTeD = "0x0000000000000000000000000000000000000001"
		const addressDjB48JA = accounts[5]
		const uintTv8ww2A = BigInt("791")
		const addressy7D11eP = accounts[5]
		const addressy49QeI = accounts[3]
		const addresssryeut8 = accounts[3]
		const boolcWldIaj = await DSPrveTHJ.transfer.call(addressTZ7fTeD, uintbxjgA3r, {from: accounts[3]});
		const uint256lTQZCDn = await DSPrveTHJ.balanceOf.call(addressDjB48JA, {from: accounts[1]});
		const boolOJLf9t5 = await DSPrveTHJ.decreaseAllowance.call(addressy7D11eP, uintTv8ww2A, {from: accounts[0]});
		const boolEP5IWv = await DSPrveTHJ.unfreezeAccount.call(addressy49QeI, {from: "0x0000000000000000000000000000000000000001"});
		const addressokZIHdd = await DSPrveTHJ.upgradeTo.call(addresssryeut8, {from: "0x0000000000000000000000000000000000000001"});
		await DSPrveTHJ.onlyOwner.call({from: accounts[2]});

		assert.equal(boolcWldIaj, true)
		assert.equal(uint256lTQZCDn, BigInt("0"))
		await expect(DSPrveTHJ.decreaseAllowance.call(addressy7D11eP, uintTv8ww2A, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPrveTHJ = await DSP.new({from: accounts[3]});
		const uintp8W28iY = BigInt("594")
		const addresstLgxfis = "0x0000000000000000000000000000000000000001"
		const addressqY4WjIq = accounts[4]
		const addresszgf9AoP = accounts[3]
		const boolcWldIaj = await DSPrveTHJ.transfer.call(addresstLgxfis, uintp8W28iY, {from: accounts[3]});
		const uint256lTQZCDn = await DSPrveTHJ.balanceOf.call(addressqY4WjIq, {from: accounts[1]});
		await DSPrveTHJ.f.call({from: accounts[4]});
		const boolEP5IWv = await DSPrveTHJ.unfreezeAccount.call(addresszgf9AoP, {from: "0x0000000000000000000000000000000000000001"});
		await DSPrveTHJ.onlyOwner.call({from: accounts[2]});

		assert.equal(boolcWldIaj, true)
		assert.equal(uint256lTQZCDn, BigInt("0"))
		await expect(DSPrveTHJ.f.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPrveTHJ = await DSP.new({from: accounts[3]});
		const addressQ4RJISo = accounts[2]
		const uintqgnbkDv = BigInt("1285")
		const addressFeM79Rh = "0x0000000000000000000000000000000000000001"
		const uintQrMnHdc = BigInt("592")
		const addressXKTlk3f = "0x0000000000000000000000000000000000000001"
		const addressFW2rYau = accounts[0]
		const addressZIwMhMK = accounts[6]
		const uintOH2Q5zV = BigInt("887")
		const addressdBuzvTs = accounts[1]
		const addressXUgKkLs = accounts[5]
		const boolXG0SzQ = await DSPrveTHJ.isOwner.call(addressQ4RJISo, {from: accounts[5]});
		const uint256B0FPx9y = await DSPrveTHJ.totalSupply.call({from: accounts[2]});
		const boolvqLBqDS = await DSPrveTHJ.approve.call(addressFeM79Rh, uintqgnbkDv, {from: "0x0000000000000000000000000000000000000001"});
		const boolcWldIaj = await DSPrveTHJ.transfer.call(addressXKTlk3f, uintQrMnHdc, {from: accounts[3]});
		const uint256lgYw42Y = await DSPrveTHJ.balanceOf.call(addressFW2rYau, {from: accounts[3]});
		const stringCG9uP5t = await DSPrveTHJ.name.call({from: accounts[4]});
		const boolAuGISX0 = await DSPrveTHJ.isOwner.call(addressZIwMhMK, {from: accounts[0]});
		const boolX9uaF02 = await DSPrveTHJ.transferFrom.call(addressXUgKkLs, addressdBuzvTs, uintOH2Q5zV, {from: accounts[1]});
		await DSPrveTHJ.onlyOwner.call({from: accounts[4]});

		assert.equal(boolAuGISX0, false)
		assert.equal(boolXG0SzQ, false)
		assert.equal(boolcWldIaj, true)
		assert.equal(boolvqLBqDS, true)
		assert.equal(stringCG9uP5t, "DSP")
		assert.equal(uint256B0FPx9y, BigInt("100000000000000000000000000000"))
		assert.equal(uint256lgYw42Y, BigInt("0"))
		await expect(DSPrveTHJ.transferFrom.call(addressXUgKkLs, addressdBuzvTs, uintOH2Q5zV, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPrveTHJ = await DSP.new({from: accounts[3]});
		const addressWXWmPP = accounts[4]
		const addressSFu0W7 = accounts[1]
		const uintmo1xLGP = BigInt("1806")
		const addressCHDVvqc = accounts[2]
		const addressLZnEUwU = accounts[4]
		const addressKgCEhV8 = accounts[1]
		const addressHN5DbGO = accounts[6]
		const uintee2n2ar = BigInt("943")
		const addressS7AIuRJ = accounts[0]
		const addressrQfXcdH = accounts[2]
		const uint256y8BLPw = await DSPrveTHJ.balanceOf.call(addressWXWmPP, {from: accounts[3]});
		const boolV2njXaT = await DSPrveTHJ.unfreezeAccount.call(addressSFu0W7, {from: accounts[3]});
		const boolgEgR9VQ = await DSPrveTHJ.unlock.call(addressCHDVvqc, uintmo1xLGP, {from: accounts[3]});
		const uint256N7GEmFR = await DSPrveTHJ.allowance.call(addressKgCEhV8, addressLZnEUwU, {from: "0x0000000000000000000000000000000000000001"});
		const boolbT2HUPB = await DSPrveTHJ.freezeAccount.call(addressHN5DbGO, {from: accounts[0]});
		const boolTKON5gL = await DSPrveTHJ.approve.call(addressS7AIuRJ, uintee2n2ar, {from: accounts[2]});
		const addressdVyJArs = await DSPrveTHJ.upgradeTo.call(addressrQfXcdH, {from: accounts[3]});

		assert.equal(uint256y8BLPw, BigInt("0"))
		await expect(DSPrveTHJ.unfreezeAccount.call(addressSFu0W7, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPrveTHJ = await DSP.new({from: accounts[3]});
		const addressRLFbYBG = accounts[3]
		const uintMlmwodr = BigInt("1254")
		const addressap2pkF1 = "0x0000000000000000000000000000000000000001"
		const uintbOKR725 = BigInt("592")
		const addressfJZCj1d = "0x0000000000000000000000000000000000000001"
		const addressTu8B5dU = accounts[0]
		const addressLfy8hXk = accounts[6]
		const uintI8PACSI = BigInt("887")
		const addressVMOGZIz = accounts[1]
		const addressf0ATRxJ = accounts[5]
		const addresszixiMet = accounts[3]
		const boolXG0SzQ = await DSPrveTHJ.isOwner.call(addressRLFbYBG, {from: accounts[5]});
		const uint256B0FPx9y = await DSPrveTHJ.totalSupply.call({from: accounts[2]});
		const boolvqLBqDS = await DSPrveTHJ.approve.call(addressap2pkF1, uintMlmwodr, {from: "0x0000000000000000000000000000000000000001"});
		const boolcWldIaj = await DSPrveTHJ.transfer.call(addressfJZCj1d, uintbOKR725, {from: accounts[3]});
		const uint256lgYw42Y = await DSPrveTHJ.balanceOf.call(addressTu8B5dU, {from: accounts[3]});
		const boolAuGISX0 = await DSPrveTHJ.isOwner.call(addressLfy8hXk, {from: accounts[0]});
		const boolX9uaF02 = await DSPrveTHJ.transferFrom.call(addressf0ATRxJ, addressVMOGZIz, uintI8PACSI, {from: accounts[1]});
		const boolEP5IWv = await DSPrveTHJ.unfreezeAccount.call(addresszixiMet, {from: "0x0000000000000000000000000000000000000001"});
		await DSPrveTHJ.onlyOwner.call({from: accounts[4]});

		assert.equal(boolAuGISX0, false)
		assert.equal(boolXG0SzQ, true)
		assert.equal(boolcWldIaj, true)
		assert.equal(boolvqLBqDS, true)
		assert.equal(uint256B0FPx9y, BigInt("100000000000000000000000000000"))
		assert.equal(uint256lgYw42Y, BigInt("0"))
		await expect(DSPrveTHJ.transferFrom.call(addressf0ATRxJ, addressVMOGZIz, uintI8PACSI, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPrveTHJ = await DSP.new({from: accounts[3]});
		const addressuVF9qSn = accounts[2]
		const uintAzYYLg = BigInt("1254")
		const addressJel3v7I = "0x0000000000000000000000000000000000000001"
		const uintlxDJ8lv = BigInt("592")
		const address6d2e20 = "0x0000000000000000000000000000000000000001"
		const addressKRdSFNB = accounts[1]
		const addressrwpcYcM = accounts[2]
		const addresswu1uqfJ = accounts[0]
		const addressNu9dtQg = accounts[6]
		const uintKlDlla2 = BigInt("887")
		const addressgT9VnA9 = accounts[1]
		const addressg96oMMN = accounts[5]
		const address9dZPGR = accounts[3]
		const boolXG0SzQ = await DSPrveTHJ.isOwner.call(addressuVF9qSn, {from: accounts[5]});
		const uint256B0FPx9y = await DSPrveTHJ.totalSupply.call({from: accounts[2]});
		const boolvqLBqDS = await DSPrveTHJ.approve.call(addressJel3v7I, uintAzYYLg, {from: "0x0000000000000000000000000000000000000001"});
		const boolcWldIaj = await DSPrveTHJ.transfer.call(address6d2e20, uintlxDJ8lv, {from: accounts[3]});
		const addressnDtEcD1 = await DSPrveTHJ.upgradeTo.call(addressKRdSFNB, {from: accounts[3]});
		const boolwvsJJju = await DSPrveTHJ.isPauser.call(addressrwpcYcM, {from: accounts[4]});
		const uint256lgYw42Y = await DSPrveTHJ.balanceOf.call(addresswu1uqfJ, {from: accounts[3]});
		const boolAuGISX0 = await DSPrveTHJ.isOwner.call(addressNu9dtQg, {from: accounts[0]});
		const boolX9uaF02 = await DSPrveTHJ.transferFrom.call(addressg96oMMN, addressgT9VnA9, uintKlDlla2, {from: accounts[1]});
		const booljqSHRtZ = await DSPrveTHJ.paused.call({from: accounts[3]});
		const boolEP5IWv = await DSPrveTHJ.unfreezeAccount.call(address9dZPGR, {from: "0x0000000000000000000000000000000000000001"});
		await DSPrveTHJ.onlyOwner.call({from: accounts[4]});

		assert.equal(boolAuGISX0, false)
		assert.equal(boolXG0SzQ, false)
		assert.equal(boolcWldIaj, true)
		assert.equal(boolvqLBqDS, true)
		assert.equal(boolwvsJJju, false)
		assert.equal(uint256B0FPx9y, BigInt("100000000000000000000000000000"))
		assert.equal(uint256lgYw42Y, BigInt("0"))
		await expect(DSPrveTHJ.transferFrom.call(addressg96oMMN, addressgT9VnA9, uintKlDlla2, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPrveTHJ = await DSP.new({from: accounts[3]});
		const addressZItM6se = accounts[2]
		const addressvuJmuOc = accounts[3]
		const uintw136aro = BigInt("1254")
		const addresswsCVr01 = "0x0000000000000000000000000000000000000001"
		const uintaQCb1X = BigInt("592")
		const addressp4JoXjb = "0x0000000000000000000000000000000000000001"
		const addressFd6R89C = accounts[0]
		const address2lbGbo = accounts[6]
		const uintCU3wlp = BigInt("887")
		const addressea3ZUeb = accounts[1]
		const addressosv9Y7t = accounts[5]
		const addresso8wXe1Y = accounts[4]
		const boolXG0SzQ = await DSPrveTHJ.isOwner.call(addressZItM6se, {from: accounts[5]});
		const addressCGNUaUJ = await DSPrveTHJ.transferOwnership.call(addressvuJmuOc, {from: accounts[3]});
		const uint256B0FPx9y = await DSPrveTHJ.totalSupply.call({from: accounts[2]});
		const boolvqLBqDS = await DSPrveTHJ.approve.call(addresswsCVr01, uintw136aro, {from: "0x0000000000000000000000000000000000000001"});
		const boolcWldIaj = await DSPrveTHJ.transfer.call(addressp4JoXjb, uintaQCb1X, {from: accounts[3]});
		const uint256lgYw42Y = await DSPrveTHJ.balanceOf.call(addressFd6R89C, {from: accounts[3]});
		const boolAuGISX0 = await DSPrveTHJ.isOwner.call(address2lbGbo, {from: accounts[0]});
		const boolX9uaF02 = await DSPrveTHJ.transferFrom.call(addressosv9Y7t, addressea3ZUeb, uintCU3wlp, {from: accounts[1]});
		const boolEP5IWv = await DSPrveTHJ.unfreezeAccount.call(addresso8wXe1Y, {from: "0x0000000000000000000000000000000000000001"});
		await DSPrveTHJ.onlyOwner.call({from: accounts[4]});

		assert.equal(boolAuGISX0, false)
		assert.equal(boolXG0SzQ, false)
		assert.equal(boolcWldIaj, true)
		assert.equal(boolvqLBqDS, true)
		assert.equal(uint256B0FPx9y, BigInt("100000000000000000000000000000"))
		assert.equal(uint256lgYw42Y, BigInt("0"))
		await expect(DSPrveTHJ.transferFrom.call(addressosv9Y7t, addressea3ZUeb, uintCU3wlp, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPrveTHJ = await DSP.new({from: accounts[3]});
		const addressuy6ABI9 = accounts[2]
		const addressXUv8MW = accounts[4]
		const addressa4ktkt8 = accounts[1]
		const addressXBDnmu0 = accounts[4]
		const addresssMh8JtG = accounts[2]
		const addresslCXzgzI = accounts[6]
		const uintpRE0tuV = BigInt("943")
		const addressy2tosyB = accounts[0]
		const addressdZKO1gA = accounts[2]
		const uintpctOgy2 = BigInt("1472")
		const addressHMFt9Dl = accounts[5]
		const addressbQGWEke = await DSPrveTHJ.addPauser.call(addressuy6ABI9, {from: accounts[3]});
		const uint256y8BLPw = await DSPrveTHJ.balanceOf.call(addressXUv8MW, {from: accounts[3]});
		await DSPrveTHJ.whenPaused.call({from: accounts[3]});
		const boolV2njXaT = await DSPrveTHJ.unfreezeAccount.call(addressa4ktkt8, {from: accounts[3]});
		const uint256N7GEmFR = await DSPrveTHJ.allowance.call(addresssMh8JtG, addressXBDnmu0, {from: "0x0000000000000000000000000000000000000001"});
		const boolbT2HUPB = await DSPrveTHJ.freezeAccount.call(addresslCXzgzI, {from: accounts[0]});
		const boolTKON5gL = await DSPrveTHJ.approve.call(addressy2tosyB, uintpRE0tuV, {from: accounts[2]});
		const addressdVyJArs = await DSPrveTHJ.upgradeTo.call(addressdZKO1gA, {from: accounts[3]});
		const boolMQh1AgZ = await DSPrveTHJ.unlock.call(addressHMFt9Dl, uintpctOgy2, {from: accounts[1]});

		assert.equal(uint256y8BLPw, BigInt("0"))
		await expect(DSPrveTHJ.whenPaused.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPI6DTRJs = await DSP.new({from: accounts[3]});
		const addressUS3Gklv = accounts[2]
		const addressnfgPDxe = accounts[0]
		const uintJzlCWHx = BigInt("1915")
		const addressNJUo0u = accounts[0]
		const addressHQLRIwP = accounts[1]
		const booltUQW58J = await DSPI6DTRJs.freezeAccount.call(addressUS3Gklv, {from: accounts[3]});
		const addressKlu3Od = await DSPI6DTRJs.upgradeTo.call(addressnfgPDxe, {from: accounts[5]});
		const stringaUbBPlQ = await DSPI6DTRJs.name.call({from: accounts[1]});
		const boolzm0tqEI = await DSPI6DTRJs.mint.call(addressNJUo0u, uintJzlCWHx, {from: accounts[1]});
		const addressZmGifOQ = await DSPI6DTRJs.removePauser.call(addressHQLRIwP, {from: accounts[1]});

		assert.equal(booltUQW58J, true)
		await expect(DSPI6DTRJs.upgradeTo.call(addressnfgPDxe, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPrveTHJ = await DSP.new({from: accounts[3]});
		const uintO5HRDbn = BigInt("91")
		const uintMqEjjZl = BigInt("1233")
		const addressLa0cgFy = accounts[3]
		const uintqrfRtxT = BigInt("748")
		const addressenQ51ND = accounts[2]
		const booli5gSs8o = await DSPrveTHJ.lock.call(addressLa0cgFy, uintMqEjjZl, uintO5HRDbn, {from: accounts[3]});
		const boolgEgR9VQ = await DSPrveTHJ.unlock.call(addressenQ51ND, uintqrfRtxT, {from: accounts[3]});

		assert.equal(booli5gSs8o, true)
		await expect(DSPrveTHJ.unlock.call(addressenQ51ND, uintqrfRtxT, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPrveTHJ = await DSP.new({from: accounts[3]});
		const uintdcMLiKK = BigInt("1583")
		const uint3Kutxi = BigInt("1297")
		const addressLXb5ycS = accounts[1]
		const uintco2gbeC = BigInt("769")
		const addresszyHXgC7 = accounts[2]
		const boolSUiz3uE = await DSPrveTHJ.lock.call(addressLXb5ycS, uint3Kutxi, uintdcMLiKK, {from: accounts[3]});
		const boolgEgR9VQ = await DSPrveTHJ.unlock.call(addresszyHXgC7, uintco2gbeC, {from: accounts[3]});

		await expect(DSPrveTHJ.lock.call(addressLXb5ycS, uint3Kutxi, uintdcMLiKK, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})