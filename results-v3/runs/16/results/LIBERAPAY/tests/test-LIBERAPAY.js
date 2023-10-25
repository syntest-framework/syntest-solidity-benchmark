const LIBERAPAY = artifacts.require("LIBERAPAY");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('LIBERAPAY', (accounts) => {
	it('test for LIBERAPAY', async () => {
		const LIBERAPAYugfBp30 = await LIBERAPAY.new({from: accounts[0]});
		const uintixSKVqQ = BigInt("171")
		const addressuLwPJtk = accounts[0]
		const uintVBKfd7O = BigInt("1601")
		const addressFB5iWCN = accounts[4]
		const addressqCtbFU4 = "0x0000000000000000000000000000000000000001"
		const boolOqwQALk = await LIBERAPAYugfBp30.unlock.call(addressuLwPJtk, uintixSKVqQ, {from: accounts[4]});
		const uint256zN9g2MM = await LIBERAPAYugfBp30.getNowTime.call({from: accounts[2]});
		const boolNpDlONt = await LIBERAPAYugfBp30.transfer.call(addressFB5iWCN, uintVBKfd7O, {from: accounts[3]});
		const boolCBkmORr = await LIBERAPAYugfBp30.unfreezeAccount.call(addressqCtbFU4, {from: accounts[3]});

		await expect(LIBERAPAYugfBp30.unlock.call(addressuLwPJtk, uintixSKVqQ, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYMM8ass = await LIBERAPAY.new({from: accounts[5]});
		const address4ubdg2 = "0x0000000000000000000000000000000000000001"
		const uintC92x9lt = BigInt("1979")
		const addressJi9Os2m = accounts[2]
		const uintCBriRA = BigInt("1490")
		const uint256CXltKWF = await LIBERAPAYMM8ass.currentBalanceOf.call(address4ubdg2, {from: accounts[3]});
		const boolAk7ZnX4 = await LIBERAPAYMM8ass.burnFrom.call(addressJi9Os2m, uintC92x9lt, {from: accounts[3]});
		await LIBERAPAYMM8ass.onlyNewOwner.call({from: "0x0000000000000000000000000000000000000001"});
		const boolzx1yb5n = await LIBERAPAYMM8ass.burn.call(uintCBriRA, {from: accounts[5]});
		await LIBERAPAYMM8ass.f.call({from: accounts[1]});

		assert.equal(uint256CXltKWF, BigInt("0"))
		await expect(LIBERAPAYMM8ass.burnFrom.call(addressJi9Os2m, uintC92x9lt, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYvOxjO5t = await LIBERAPAY.new({from: accounts[2]});
		const uintDPsMyud = BigInt("1566")
		const addressRHwyEfl = "0x0000000000000000000000000000000000000001"
		const uintqGCiyo = BigInt("1321")
		const addressAdBNrVR = "0x0000000000000000000000000000000000000001"
		const uintUGTu76v = BigInt("817")
		const uintntiuK9r = BigInt("1054")
		const addressoqb84W3 = accounts[2]
		const uinte5JohX = BigInt("1812")
		const addressjCTtDqB = accounts[1]
		const boolbyQCcEr = await LIBERAPAYvOxjO5t.transfer.call(addressRHwyEfl, uintDPsMyud, {from: accounts[4]});
		const boolzevgX6L = await LIBERAPAYvOxjO5t.transfer.call(addressAdBNrVR, uintqGCiyo, {from: accounts[1]});
		await LIBERAPAYvOxjO5t.whenPaused.call({from: accounts[0]});
		const boolO0iViYQ = await LIBERAPAYvOxjO5t.lock.call(addressoqb84W3, uintntiuK9r, uintUGTu76v, {from: accounts[4]});
		const uint256ajRhdtn = await LIBERAPAYvOxjO5t.totalSupply.call({from: accounts[1]});
		const boolsREG8SO = await LIBERAPAYvOxjO5t.increaseAllowance.call(addressjCTtDqB, uinte5JohX, {from: accounts[2]});

		await expect(LIBERAPAYvOxjO5t.transfer.call(addressRHwyEfl, uintDPsMyud, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYb2CQe4 = await LIBERAPAY.new({from: accounts[3]});
		const uintuoQw4b2 = BigInt("1555")
		const addressI9zNJBo = accounts[4]
		const addresseMNz6Xd = accounts[2]
		const uintBMCAELJ = BigInt("1334")
		const uintx0EhKjt = BigInt("43")
		const addressArokN6O = accounts[4]
		await LIBERAPAYb2CQe4.onlyNewOwner.call({from: accounts[4]});
		const boolpT8EpWU = await LIBERAPAYb2CQe4.mint.call(addressI9zNJBo, uintuoQw4b2, {from: "0x0000000000000000000000000000000000000001"});
		const uint256EOC1uXZ = await LIBERAPAYb2CQe4.currentBalanceOf.call(addresseMNz6Xd, {from: "0x0000000000000000000000000000000000000001"});
		await LIBERAPAYb2CQe4.pause.call({from: accounts[4]});
		const boolkFIuvS = await LIBERAPAYb2CQe4.lock.call(addressArokN6O, uintx0EhKjt, uintBMCAELJ, {from: accounts[3]});

		await expect(LIBERAPAYb2CQe4.onlyNewOwner.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYKSIfs4i = await LIBERAPAY.new({from: accounts[2]});
		const uintlMbEJiJ = BigInt("163")
		const addressXU0b4lR = accounts[0]
		const uintmiqa6my = BigInt("1688")
		const addressMylUbV3 = accounts[2]
		const addressP2syLOD = accounts[4]
		const addressQiPrlt = accounts[3]
		const addressVzxvfm = accounts[3]
		const boolonv68m = await LIBERAPAYKSIfs4i.approve.call(addressXU0b4lR, uintlMbEJiJ, {from: accounts[0]});
		const boolz1J7J3n = await LIBERAPAYKSIfs4i.transferFrom.call(addressP2syLOD, addressMylUbV3, uintmiqa6my, {from: accounts[4]});
		const addressNr5POIq = await LIBERAPAYKSIfs4i.transferOwnership.call(addressQiPrlt, {from: accounts[3]});
		const uint256moGP5R = await LIBERAPAYKSIfs4i.balanceOf.call(addressVzxvfm, {from: accounts[2]});

		assert.equal(boolonv68m, true)
		await expect(LIBERAPAYKSIfs4i.transferFrom.call(addressP2syLOD, addressMylUbV3, uintmiqa6my, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYJJyAAr = await LIBERAPAY.new({from: "0x0000000000000000000000000000000000000001"});
		const uintZuyJfS3 = BigInt("2027")
		const addressbQjsEA0 = accounts[0]
		const addressTIIA5cr = "0x0000000000000000000000000000000000000001"
		const addressPbNzlK = accounts[5]
		const uintGNcAa7 = BigInt("1437")
		const addressI3Ln3w6 = accounts[0]
		const addressi1bR45x = accounts[4]
		const addressXv3UOm1 = accounts[0]
		const addressTKRgG18 = accounts[0]
		const uintpB0JFK = BigInt("819")
		const addressHZEElgf = accounts[3]
		const boolHk6bCo = await LIBERAPAYJJyAAr.unlock.call(addressbQjsEA0, uintZuyJfS3, {from: accounts[0]});
		const uint256kCJfm1i = await LIBERAPAYJJyAAr.allowance.call(addressPbNzlK, addressTIIA5cr, {from: accounts[0]});
		const booljhbYYgG = await LIBERAPAYJJyAAr.increaseAllowance.call(addressI3Ln3w6, uintGNcAa7, {from: accounts[1]});
		const uint256kcw1KG4 = await LIBERAPAYJJyAAr.allowance.call(addressXv3UOm1, addressi1bR45x, {from: accounts[5]});
		const uint256D2ratZ = await LIBERAPAYJJyAAr.balanceOf.call(addressTKRgG18, {from: accounts[0]});
		const boolefwFgOX = await LIBERAPAYJJyAAr.increaseAllowance.call(addressHZEElgf, uintpB0JFK, {from: accounts[3]});
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYgpFNm0T = await LIBERAPAY.new({from: accounts[2]});
		const uintmJPHYHE = BigInt("1719")
		const addressoMEfTpl = accounts[0]
		const uintSIW36p5 = BigInt("870")
		const addressrGTAFlH = accounts[4]
		const uintEZKqf8Z = BigInt("541")
		const uintYTlDwrL = BigInt("1891")
		const addressqrS9Zla = accounts[2]
		const uint256FhYnshh = await LIBERAPAYgpFNm0T.getNowTime.call({from: accounts[4]});
		const booltIk0EHD = await LIBERAPAYgpFNm0T.burnFrom.call(addressoMEfTpl, uintmJPHYHE, {from: accounts[5]});
		const boolV2CebbV = await LIBERAPAYgpFNm0T.approve.call(addressrGTAFlH, uintSIW36p5, {from: accounts[4]});
		const boolWEs7aS = await LIBERAPAYgpFNm0T.lock.call(addressqrS9Zla, uintYTlDwrL, uintEZKqf8Z, {from: accounts[2]});

		assert.equal(uint256FhYnshh, BigInt("1630231577"))
		await expect(LIBERAPAYgpFNm0T.burnFrom.call(addressoMEfTpl, uintmJPHYHE, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYKSIfs4i = await LIBERAPAY.new({from: accounts[2]});
		const addressbNskyG9 = accounts[4]
		const uintJVLxBok = BigInt("1866")
		const addressLUTDRQM = accounts[5]
		const uintXPTA6wS = BigInt("1590")
		const addressnByT075 = accounts[0]
		const uintLZ01CqE = BigInt("1619")
		const addressWhLwuht = accounts[2]
		const uintb8rqOx = BigInt("1688")
		const addressznQmQbC = accounts[2]
		const addressTVMgOsp = accounts[4]
		const addressrU0BJJx = accounts[4]
		const addresscXe96yU = accounts[3]
		const uint256No2U8mn = await LIBERAPAYKSIfs4i.currentBalanceOf.call(addressbNskyG9, {from: accounts[0]});
		const booluyWel2 = await LIBERAPAYKSIfs4i.decreaseAllowance.call(addressLUTDRQM, uintJVLxBok, {from: accounts[5]});
		const boolonv68m = await LIBERAPAYKSIfs4i.approve.call(addressnByT075, uintXPTA6wS, {from: accounts[0]});
		const boolgjPIld6 = await LIBERAPAYKSIfs4i.transfer.call(addressWhLwuht, uintLZ01CqE, {from: accounts[4]});
		const boolz1J7J3n = await LIBERAPAYKSIfs4i.transferFrom.call(addressTVMgOsp, addressznQmQbC, uintb8rqOx, {from: accounts[4]});
		const addressNr5POIq = await LIBERAPAYKSIfs4i.transferOwnership.call(addressrU0BJJx, {from: accounts[3]});
		const uint256moGP5R = await LIBERAPAYKSIfs4i.balanceOf.call(addresscXe96yU, {from: accounts[2]});

		assert.equal(uint256No2U8mn, BigInt("0"))
		await expect(LIBERAPAYKSIfs4i.decreaseAllowance.call(addressLUTDRQM, uintJVLxBok, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYT92bYBj = await LIBERAPAY.new({from: accounts[2]});
		const uintUJ4pL28 = BigInt("1542")
		const addressI3XkE2j = accounts[0]
		const boolma6SGf0 = await LIBERAPAYT92bYBj.increaseAllowance.call(addressI3XkE2j, uintUJ4pL28, {from: accounts[1]});
		const boolNckyGy = await LIBERAPAYT92bYBj.acceptOwnership.call({from: accounts[0]});

		assert.equal(boolma6SGf0, true)
		await expect(LIBERAPAYT92bYBj.acceptOwnership.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYwZVOwR8 = await LIBERAPAY.new({from: accounts[2]});
		const uintr4k8c7a = BigInt("183")
		const addresssT5zm0M = accounts[1]
		const uintWpWYFLn = BigInt("1576")
		const addressm8hCQ2q = accounts[1]
		const boolQDulxCZ = await LIBERAPAYwZVOwR8.distribute.call(addresssT5zm0M, uintr4k8c7a, {from: accounts[2]});
		const boolEjY3HFS = await LIBERAPAYwZVOwR8.burnFrom.call(addressm8hCQ2q, uintWpWYFLn, {from: accounts[2]});

		assert.equal(boolQDulxCZ, true)
		await expect(LIBERAPAYwZVOwR8.burnFrom.call(addressm8hCQ2q, uintWpWYFLn, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYiPiwJH2 = await LIBERAPAY.new({from: accounts[1]});
		const uintX1isqyz = BigInt("1367")
		const addresslIzxnc5 = accounts[4]
		const uintagZQ3k = BigInt("521")
		const addressbTx6h7o = accounts[5]
		const addressuLmxOcZ = accounts[2]
		const boolMuJiW0B = await LIBERAPAYiPiwJH2.approve.call(addresslIzxnc5, uintX1isqyz, {from: "0x0000000000000000000000000000000000000001"});
		const uint256AKDzmdn = await LIBERAPAYiPiwJH2.totalSupply.call({from: accounts[5]});
		const boolJ37xcFg = await LIBERAPAYiPiwJH2.transfer.call(addressbTx6h7o, uintagZQ3k, {from: accounts[1]});
		const uint256UWz1emf = await LIBERAPAYiPiwJH2.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
		const addressb4wZs5c = await LIBERAPAYiPiwJH2.upgradeTo.call(addressuLmxOcZ, {from: accounts[0]});

		assert.equal(boolJ37xcFg, true)
		assert.equal(boolMuJiW0B, true)
		assert.equal(uint256AKDzmdn, BigInt("3000000000000000000000000000"))
		assert.equal(uint256UWz1emf, BigInt("3000000000000000000000000000"))
		await expect(LIBERAPAYiPiwJH2.upgradeTo.call(addressuLmxOcZ, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYiPiwJH2 = await LIBERAPAY.new({from: accounts[1]});
		const uintwbmGrIc = BigInt("1367")
		const addressYI3Ak64 = accounts[4]
		const uintslHG55 = BigInt("665")
		const uintImoe4Wt = BigInt("1347")
		const addressLcn7g8N = accounts[4]
		const uintb1vmnDy = BigInt("521")
		const addresswiLrmL = accounts[5]
		const addressNw7jS8p = accounts[2]
		const boolMuJiW0B = await LIBERAPAYiPiwJH2.approve.call(addressYI3Ak64, uintwbmGrIc, {from: "0x0000000000000000000000000000000000000001"});
		const boolj4kAltK = await LIBERAPAYiPiwJH2.lock.call(addressLcn7g8N, uintImoe4Wt, uintslHG55, {from: accounts[1]});
		const uint256AKDzmdn = await LIBERAPAYiPiwJH2.totalSupply.call({from: accounts[5]});
		const boolJ37xcFg = await LIBERAPAYiPiwJH2.transfer.call(addresswiLrmL, uintb1vmnDy, {from: accounts[1]});
		const addressb4wZs5c = await LIBERAPAYiPiwJH2.upgradeTo.call(addressNw7jS8p, {from: accounts[0]});

		assert.equal(boolMuJiW0B, true)
		await expect(LIBERAPAYiPiwJH2.lock.call(addressLcn7g8N, uintImoe4Wt, uintslHG55, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYKSIfs4i = await LIBERAPAY.new({from: accounts[2]});
		const addressxzlOtDn = accounts[3]
		const uint256moGP5R = await LIBERAPAYKSIfs4i.balanceOf.call(addressxzlOtDn, {from: accounts[2]});

		assert.equal(uint256moGP5R, BigInt("0"))
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYiPiwJH2 = await LIBERAPAY.new({from: accounts[1]});
		const uintDIaNmGX = BigInt("1367")
		const addresshOGkvTu = accounts[4]
		const uintUfwSYHz = BigInt("521")
		const addressmrgAeP = accounts[5]
		const addresstg4i964 = accounts[0]
		const uintqWH3MS = BigInt("945")
		const addressqTAirXa = accounts[4]
		const addressQpRg7oR = accounts[3]
		const boolMuJiW0B = await LIBERAPAYiPiwJH2.approve.call(addresshOGkvTu, uintDIaNmGX, {from: "0x0000000000000000000000000000000000000001"});
		const uint256AKDzmdn = await LIBERAPAYiPiwJH2.totalSupply.call({from: accounts[5]});
		const boolJ37xcFg = await LIBERAPAYiPiwJH2.transfer.call(addressmrgAeP, uintUfwSYHz, {from: accounts[1]});
		const addressa4Xy6pG = await LIBERAPAYiPiwJH2.upgradeTo.call(addresstg4i964, {from: accounts[1]});
		const uint256UWz1emf = await LIBERAPAYiPiwJH2.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
		const boolA2RyXu = await LIBERAPAYiPiwJH2.distribute.call(addressqTAirXa, uintqWH3MS, {from: accounts[5]});
		const addressb4wZs5c = await LIBERAPAYiPiwJH2.upgradeTo.call(addressQpRg7oR, {from: accounts[0]});

		assert.equal(boolJ37xcFg, true)
		assert.equal(boolMuJiW0B, true)
		assert.equal(uint256AKDzmdn, BigInt("3000000000000000000000000000"))
		assert.equal(uint256UWz1emf, BigInt("3000000000000000000000000000"))
		await expect(LIBERAPAYiPiwJH2.distribute.call(addressqTAirXa, uintqWH3MS, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYiPiwJH2 = await LIBERAPAY.new({from: accounts[1]});
		const uintDujyNgX = BigInt("1367")
		const addressXgjuPB = accounts[4]
		const uintH2Px92q = BigInt("521")
		const addressCPPmfZ = accounts[5]
		const addresslqPhuSi = accounts[2]
		const boolMuJiW0B = await LIBERAPAYiPiwJH2.approve.call(addressXgjuPB, uintDujyNgX, {from: "0x0000000000000000000000000000000000000001"});
		await LIBERAPAYiPiwJH2.f.call({from: accounts[3]});
		const uint256AKDzmdn = await LIBERAPAYiPiwJH2.totalSupply.call({from: accounts[5]});
		const boolJ37xcFg = await LIBERAPAYiPiwJH2.transfer.call(addressCPPmfZ, uintH2Px92q, {from: accounts[1]});
		await LIBERAPAYiPiwJH2.onlyNewOwner.call({from: accounts[4]});
		const uint256UWz1emf = await LIBERAPAYiPiwJH2.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
		const addressb4wZs5c = await LIBERAPAYiPiwJH2.upgradeTo.call(addresslqPhuSi, {from: accounts[0]});

		assert.equal(boolMuJiW0B, true)
		await expect(LIBERAPAYiPiwJH2.f.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYKSIfs4i = await LIBERAPAY.new({from: accounts[2]});
		const addressUbvItSA = accounts[5]
		const uintTEeLFp = BigInt("948")
		const addressC2rjx7U = accounts[1]
		const uintsyRaOmf = BigInt("796")
		const addressFLz9V9q = accounts[3]
		const uintVNgkw6V = BigInt("1688")
		const addresshLDsXw9 = accounts[3]
		const addressKjddHO3 = accounts[4]
		const addressF8xGPnJ = accounts[3]
		const uint256No2U8mn = await LIBERAPAYKSIfs4i.currentBalanceOf.call(addressUbvItSA, {from: accounts[0]});
		await LIBERAPAYKSIfs4i.showLockState.call(addressC2rjx7U, uintTEeLFp, {from: accounts[4]});
		const boolas76efM = await LIBERAPAYKSIfs4i.distribute.call(addressFLz9V9q, uintsyRaOmf, {from: accounts[4]});
		const boolz1J7J3n = await LIBERAPAYKSIfs4i.transferFrom.call(addressKjddHO3, addresshLDsXw9, uintVNgkw6V, {from: accounts[4]});
		const addressNr5POIq = await LIBERAPAYKSIfs4i.transferOwnership.call(addressF8xGPnJ, {from: accounts[3]});

		assert.equal(uint256No2U8mn, BigInt("0"))
		await expect(LIBERAPAYKSIfs4i.showLockState.call(addressC2rjx7U, uintTEeLFp, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYiPiwJH2 = await LIBERAPAY.new({from: accounts[1]});
		const uintlamQbrr = BigInt("1367")
		const addresszmGbycS = accounts[4]
		const uint8KhQSX = BigInt("1218")
		const uinteJ45umQ = BigInt("520")
		const addressodTeoG5 = accounts[5]
		const uintBZPoJZc = BigInt("2016")
		const addressBjLCZ7Y = accounts[2]
		const addressiyZR5da = "0x0000000000000000000000000000000000000001"
		const addressgeC0tmK = accounts[2]
		const boolMuJiW0B = await LIBERAPAYiPiwJH2.approve.call(addresszmGbycS, uintlamQbrr, {from: "0x0000000000000000000000000000000000000001"});
		const boolJDTgVVe = await LIBERAPAYiPiwJH2.burn.call(uint8KhQSX, {from: accounts[1]});
		const uint256AKDzmdn = await LIBERAPAYiPiwJH2.totalSupply.call({from: accounts[5]});
		const boolJ37xcFg = await LIBERAPAYiPiwJH2.transfer.call(addressodTeoG5, uinteJ45umQ, {from: accounts[1]});
		const booljxIFy0s = await LIBERAPAYiPiwJH2.transferFrom.call(addressiyZR5da, addressBjLCZ7Y, uintBZPoJZc, {from: accounts[1]});
		const addressb4wZs5c = await LIBERAPAYiPiwJH2.upgradeTo.call(addressgeC0tmK, {from: accounts[0]});

		assert.equal(boolJ37xcFg, true)
		assert.equal(boolJDTgVVe, true)
		assert.equal(boolMuJiW0B, true)
		assert.equal(uint256AKDzmdn, BigInt("3000000000000000000000000000"))
		await expect(LIBERAPAYiPiwJH2.transferFrom.call(addressiyZR5da, addressBjLCZ7Y, uintBZPoJZc, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYKSIfs4i = await LIBERAPAY.new({from: accounts[2]});
		const addressLYZMajV = accounts[6]
		const addressiq10Msc = accounts[3]
		const uint256No2U8mn = await LIBERAPAYKSIfs4i.currentBalanceOf.call(addressLYZMajV, {from: accounts[0]});
		const addressCAIcYe6 = await LIBERAPAYKSIfs4i.transferOwnership.call(addressiq10Msc, {from: accounts[2]});

		assert.equal(uint256No2U8mn, BigInt("0"))
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYKSIfs4i = await LIBERAPAY.new({from: accounts[2]});
		const addressCKzmWAG = "0x0000000000000000000000000000000000000001"
		const uintwpKNM0O = BigInt("1688")
		const addresssiYxqD = accounts[2]
		const addressxSuIC5m = accounts[5]
		const uint256cLm4tbf = await LIBERAPAYKSIfs4i.getNowTime.call({from: accounts[0]});
		const boolGlKsZ9 = await LIBERAPAYKSIfs4i.freezeAccount.call(addressCKzmWAG, {from: accounts[2]});
		const boolz1J7J3n = await LIBERAPAYKSIfs4i.transferFrom.call(addressxSuIC5m, addresssiYxqD, uintwpKNM0O, {from: accounts[4]});

		assert.equal(boolGlKsZ9, true)
		assert.equal(uint256cLm4tbf, BigInt("1630231572"))
		await expect(LIBERAPAYKSIfs4i.transferFrom.call(addressxSuIC5m, addresssiYxqD, uintwpKNM0O, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYKSIfs4i = await LIBERAPAY.new({from: accounts[2]});
		const addressUZ8Oqgy = accounts[4]
		const uintW6oX2FH = BigInt("584")
		const addressXMipARU = accounts[2]
		const uintw1peKwZ = BigInt("599")
		const addressHnTYHW5 = accounts[4]
		const uint256moGP5R = await LIBERAPAYKSIfs4i.balanceOf.call(addressUZ8Oqgy, {from: accounts[2]});
		const boole6ECZzB = await LIBERAPAYKSIfs4i.unlock.call(addressXMipARU, uintW6oX2FH, {from: accounts[2]});
		const bool0o0rSF = await LIBERAPAYKSIfs4i.transfer.call(addressHnTYHW5, uintw1peKwZ, {from: accounts[4]});

		assert.equal(uint256moGP5R, BigInt("0"))
		await expect(LIBERAPAYKSIfs4i.unlock.call(addressXMipARU, uintW6oX2FH, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYKSIfs4i = await LIBERAPAY.new({from: accounts[2]});
		const uintxRKWlQN = BigInt("1105")
		const addressYppZ4Zo = "0x00000000000000000000000000000000000000-1"
		const uintlzb4cq = BigInt("111")
		const addressG1r26P0 = accounts[4]
		const addressLUOq4zX = accounts[4]
		const boolXLeQZxr = await LIBERAPAYKSIfs4i.transfer.call(addressYppZ4Zo, uintxRKWlQN, {from: accounts[3]});
		const boolLIHvhpI = await LIBERAPAYKSIfs4i.transferFrom.call(addressLUOq4zX, addressG1r26P0, uintlzb4cq, {from: accounts[1]});

		await expect(LIBERAPAYKSIfs4i.transfer.call(addressYppZ4Zo, uintxRKWlQN, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYKSIfs4i = await LIBERAPAY.new({from: accounts[2]});
		const addressnofcyJd = accounts[4]
		const uintF9CelTB = BigInt("1555")
		const addressoqj8D1l = "0x0000000000000000000000000000000000000001"
		const addressBdATn5D = accounts[2]
		const addressZtdkFkw = accounts[6]
		const uint256alzS0X5 = await LIBERAPAYKSIfs4i.currentBalanceOf.call(addressnofcyJd, {from: accounts[0]});
		const boolqapt9Pn = await LIBERAPAYKSIfs4i.transferFrom.call(addressBdATn5D, addressoqj8D1l, uintF9CelTB, {from: accounts[0]});
		const uint256No2U8mn = await LIBERAPAYKSIfs4i.currentBalanceOf.call(addressZtdkFkw, {from: accounts[0]});

		assert.equal(uint256alzS0X5, BigInt("0"))
		await expect(LIBERAPAYKSIfs4i.transferFrom.call(addressBdATn5D, addressoqj8D1l, uintF9CelTB, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYKSIfs4i = await LIBERAPAY.new({from: accounts[2]});
		const addressV7QNejC = accounts[3]
		const uinttxIDLA = BigInt("1925")
		const addressaZAY0K3 = accounts[1]
		const boolu7OxJGd = await LIBERAPAYKSIfs4i.unfreezeAccount.call(addressV7QNejC, {from: accounts[2]});
		await LIBERAPAYKSIfs4i.showLockState.call(addressaZAY0K3, uinttxIDLA, {from: accounts[4]});

		await expect(LIBERAPAYKSIfs4i.unfreezeAccount.call(addressV7QNejC, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYKSIfs4i = await LIBERAPAY.new({from: accounts[2]});
		const addresscUtI8kZ = accounts[5]
		const uintiz1ENH0 = BigInt("1332")
		const addressHn2sODt = accounts[4]
		const uintmOLPGvw = BigInt("966")
		const addressl76I51 = accounts[2]
		const uint256No2U8mn = await LIBERAPAYKSIfs4i.currentBalanceOf.call(addresscUtI8kZ, {from: accounts[0]});
		const boolmyIF6k9 = await LIBERAPAYKSIfs4i.mint.call(addressHn2sODt, uintiz1ENH0, {from: accounts[2]});
		const boolCv7iLDP = await LIBERAPAYKSIfs4i.unlock.call(addressl76I51, uintmOLPGvw, {from: accounts[0]});

		assert.equal(uint256No2U8mn, BigInt("0"))
		await expect(LIBERAPAYKSIfs4i.mint.call(addressHn2sODt, uintiz1ENH0, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})