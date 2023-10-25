const HungryHoody = artifacts.require("HungryHoody");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('HungryHoody', (accounts) => {
	it('test for HungryHoody', async () => {
		const HungryHoodyyKpJDG = await HungryHoody.new({from: accounts[4]});
		const addresstVrMprA = accounts[4]
		const addresseKilCe0 = "0x0000000000000000000000000000000000000001"
		const addresskjOYb9p = accounts[3]
		const uintEuSJkG = BigInt("1726")
		const uintTHRCHXI = BigInt("1555")
		const uintfxHCMYu = BigInt("223")
		const uintMJSPmMJ = BigInt("135")
		const uinteRuuwFn = await HungryHoodyyKpJDG.balanceOf.call(addresstVrMprA, {from: accounts[5]});
		const uintice5c0A = await HungryHoodyyKpJDG.allowance.call(addresskjOYb9p, addresseKilCe0, {from: accounts[2]});
		const uintAXKWvul = await HungryHoodyyKpJDG.safeSub.call(uintTHRCHXI, uintEuSJkG, {from: accounts[3]});
		const uintCq7F7m = await HungryHoodyyKpJDG.safeSub.call(uintMJSPmMJ, uintfxHCMYu, {from: accounts[3]});

		assert.equal(uinteRuuwFn, BigInt("25000000000000000000"))
		assert.equal(uintice5c0A, BigInt("0"))
		await expect(HungryHoodyyKpJDG.safeSub.call(uintTHRCHXI, uintEuSJkG, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for HungryHoody', async () => {
		const HungryHoodyOQDScwo = await HungryHoody.new({from: "0x0000000000000000000000000000000000000001"});
		const uinthYFgAzg = BigInt("1331")
		const uintiNJcikI = BigInt("1242")
		const uintpwXzAiP = BigInt("1851")
		const uintUEx4qwN = BigInt("1821")
		const uintwLIfUVd = BigInt("238")
		const uintv7diPJx = BigInt("1419")
		const addressCUnlxwu = accounts[0]
		const uintSeSWNsT = await HungryHoodyOQDScwo.safeMul.call(uintiNJcikI, uinthYFgAzg, {from: accounts[1]});
		const uintnH2eYdy = await HungryHoodyOQDScwo.safeSub.call(uintUEx4qwN, uintpwXzAiP, {from: accounts[2]});
		const uintAul6nfF = await HungryHoodyOQDScwo.safeSub.call(uintv7diPJx, uintwLIfUVd, {from: accounts[2]});
		const uintqQu4Voy = await HungryHoodyOQDScwo.balanceOf.call(addressCUnlxwu, {from: accounts[1]});
	});

	it('test for HungryHoody', async () => {
		const HungryHoodyyToGwc = await HungryHoody.new({from: accounts[3]});
		const uintIvF7xPN = BigInt("73")
		const addressPEBtjsm = accounts[0]
		const uintapox0nH = BigInt("432")
		const addressnQonOKJ = accounts[3]
		const uintKBD0G60 = await HungryHoodyyToGwc.totalSupply.call({from: accounts[1]});
		const boolNWi6iry = await HungryHoodyyToGwc.approve.call(addressPEBtjsm, uintIvF7xPN, {from: accounts[4]});
		const boolclLL2tv = await HungryHoodyyToGwc.approve.call(addressnQonOKJ, uintapox0nH, {from: accounts[5]});

		assert.equal(boolNWi6iry, true)
		assert.equal(boolclLL2tv, true)
		assert.equal(uintKBD0G60, BigInt("25000000000000000000"))
	});

	it('test for HungryHoody', async () => {
		const HungryHoodybpigfUL = await HungryHoody.new({from: accounts[4]});
		const uintGRaYEgT = BigInt("340")
		const addressncq8T3Y = accounts[0]
		const uintdaIbNic = BigInt("1144")
		const uintNI21nJ6 = BigInt("18")
		const boolYqHtHd = await HungryHoodybpigfUL.approve.call(addressncq8T3Y, uintGRaYEgT, {from: accounts[1]});
		const uintICH2lUX = await HungryHoodybpigfUL.safeDiv.call(uintNI21nJ6, uintdaIbNic, {from: accounts[1]});

		assert.equal(boolYqHtHd, true)
		assert.equal(uintICH2lUX, BigInt("0"))
	});

	it('test for HungryHoody', async () => {
		const HungryHoodyM7Cw1BJ = await HungryHoody.new({from: accounts[0]});
		const uintgnDEzQu = BigInt("1438")
		const addressElw7mJl = accounts[2]
		const addressCwUv6F = accounts[0]
		const uintRLIRtz0 = BigInt("14")
		const uintApOUXfg = BigInt("1205")
		const uintddstwQ2 = await HungryHoodyM7Cw1BJ.totalSupply.call({from: accounts[5]});
		const uintnHpRdNp = await HungryHoodyM7Cw1BJ.totalSupply.call({from: accounts[2]});
		const bools4lz4Fe = await HungryHoodyM7Cw1BJ.transferFrom.call(addressCwUv6F, addressElw7mJl, uintgnDEzQu, {from: accounts[4]});
		const uintiHe3o6L = await HungryHoodyM7Cw1BJ.safeDiv.call(uintApOUXfg, uintRLIRtz0, {from: accounts[4]});

		assert.equal(uintddstwQ2, BigInt("25000000000000000000"))
		assert.equal(uintnHpRdNp, BigInt("25000000000000000000"))
		await expect(HungryHoodyM7Cw1BJ.transferFrom.call(addressCwUv6F, addressElw7mJl, uintgnDEzQu, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for HungryHoody', async () => {
		const HungryHoodybpigfUL = await HungryHoody.new({from: accounts[4]});
		const uintYHTrnb = BigInt("340")
		const addressZN0yq2l = accounts[1]
		const uinteoqfjyB = BigInt("1144")
		const uintidX6Xw = BigInt("18")
		const addresse2oLlc2 = accounts[1]
		const uintB61LI0M = BigInt("808")
		const addressusvH9nF = accounts[0]
		const boolYqHtHd = await HungryHoodybpigfUL.approve.call(addressZN0yq2l, uintYHTrnb, {from: accounts[1]});
		const uintICH2lUX = await HungryHoodybpigfUL.safeDiv.call(uintidX6Xw, uinteoqfjyB, {from: accounts[1]});
		const uintovxeFR0 = await HungryHoodybpigfUL.balanceOf.call(addresse2oLlc2, {from: accounts[2]});
		const boolPGOKKg2 = await HungryHoodybpigfUL.transfer.call(addressusvH9nF, uintB61LI0M, {from: accounts[1]});

		assert.equal(boolYqHtHd, true)
		assert.equal(uintICH2lUX, BigInt("0"))
		assert.equal(uintovxeFR0, BigInt("0"))
		await expect(HungryHoodybpigfUL.transfer.call(addressusvH9nF, uintB61LI0M, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for HungryHoody', async () => {
		const HungryHoodybpigfUL = await HungryHoody.new({from: accounts[4]});
		const uintUFrunag = BigInt("1860")
		const uintl7ccE1 = BigInt("1457")
		const uintoIdNbuS = BigInt("318")
		const addressbWjJ5x9 = accounts[0]
		const uintbQKTRa0 = await HungryHoodybpigfUL.safeAdd.call(uintl7ccE1, uintUFrunag, {from: accounts[3]});
		const boolYqHtHd = await HungryHoodybpigfUL.approve.call(addressbWjJ5x9, uintoIdNbuS, {from: accounts[1]});

		assert.equal(boolYqHtHd, true)
		assert.equal(uintbQKTRa0, BigInt("3317"))
	});
})