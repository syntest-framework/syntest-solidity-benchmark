const AntiBaseProtocol = artifacts.require("AntiBaseProtocol");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('AntiBaseProtocol', (accounts) => {
	it('test for AntiBaseProtocol', async () => {
		const stringLvPKBeh = "YE9R0lEpDgINkdEl1leKDIJ0C1RlgCykxkhWeRmPpTGJG3GdLcfzWz9a"
		const stringhNgAMX3 = "f01doJXl2x7L5p6VqSBWJbs5nGfd4RzJeFCvAldhHth"
		const uintfTOIZZo = BigInt("38")
		const AntiBaseProtocolLsVjm4 = await AntiBaseProtocol.new(stringLvPKBeh, stringhNgAMX3, uintfTOIZZo, {from: accounts[3]});
		const uintXjIwNqN = BigInt("705")
		const uintDXoWFIp = BigInt("2020")
		const addressDrRyn3q = accounts[2]
		const uintIDRJilc = BigInt("201")
		const addressysgJR36 = accounts[1]
		const stringTQC8DH5 = await AntiBaseProtocolLsVjm4.name.call({from: accounts[0]});
		const uint256YWOz7WA = await AntiBaseProtocolLsVjm4.findBurnFee.call(uintXjIwNqN, {from: accounts[2]});
		const stringJ23Qqiv = await AntiBaseProtocolLsVjm4.symbol.call({from: accounts[2]});
		const stringJRgUSXT = await AntiBaseProtocolLsVjm4.name.call({from: accounts[4]});
		const addressCrlu07b = await AntiBaseProtocolLsVjm4._burn.call(addressDrRyn3q, uintDXoWFIp, {from: accounts[5]});
		const addressvVyAhFB = await AntiBaseProtocolLsVjm4._mint.call(addressysgJR36, uintIDRJilc, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolOHRIPtk = await AntiBaseProtocol.new({from: accounts[4]});
		const uintCQLkQhn = BigInt("1592")
		const addressGznS5TP = accounts[0]
		const address9cf9ew = accounts[2]
		const uintg5Z9m4l = BigInt("467")
		const addressAKQTqww = accounts[2]
		const addressXTY38yP = accounts[5]
		const stringB41WVEp = await AntiBaseProtocolOHRIPtk.name.call({from: accounts[4]});
//		const addressQay7mLy = await AntiBaseProtocolOHRIPtk._approve.call(address9cf9ew, addressGznS5TP, uintCQLkQhn, {from: accounts[3]});
//		const uint256mom78Kf = await AntiBaseProtocolOHRIPtk.totalSupply.call({from: accounts[2]});
//		const addressM8B9MX8 = await AntiBaseProtocolOHRIPtk._approve.call(addressXTY38yP, addressAKQTqww, uintg5Z9m4l, {from: accounts[3]});

		assert.equal(stringB41WVEp, "https://t.me/antibaseprotocol")
		await expect(AntiBaseProtocolOHRIPtk._approve.call(address9cf9ew, addressGznS5TP, uintCQLkQhn, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolKAl7B9o = await AntiBaseProtocol.new({from: accounts[0]});
		const uintA2XgZXi = BigInt("466")
		const addressBqzXAIy = accounts[4]
		const uint256tiUwae5 = await AntiBaseProtocolKAl7B9o.findBurnFee.call(uintA2XgZXi, {from: accounts[3]});
//		const addresscsnLw1s = await AntiBaseProtocolKAl7B9o._transferOwnership.call(addressBqzXAIy, {from: accounts[2]});
//		const stringf6PO9gk = await AntiBaseProtocolKAl7B9o.name.call({from: accounts[4]});
//		await AntiBaseProtocolKAl7B9o.renounceOwnership.call({from: accounts[1]});
//		const stringFqmnd6k = await AntiBaseProtocolKAl7B9o.symbol.call({from: accounts[4]});

		assert.equal(uint256tiUwae5, BigInt("75"))
		await expect(AntiBaseProtocolKAl7B9o._transferOwnership.call(addressBqzXAIy, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolnnZGPAm = await AntiBaseProtocol.new({from: "0x0000000000000000000000000000000000000001"});
		const addressP4xG6ym = accounts[3]
		const uintQ7rnY8y = BigInt("895")
		const addressmMIoVlZ = accounts[2]
		await AntiBaseProtocolnnZGPAm.requestGas.call({from: accounts[5]});
		const uint8IcadPLh = await AntiBaseProtocolnnZGPAm.decimals.call({from: accounts[5]});
		const addressZcnoPVk = await AntiBaseProtocolnnZGPAm._transferOwnership.call(addressP4xG6ym, {from: accounts[3]});
		const addresswfd5beF = await AntiBaseProtocolnnZGPAm._mint.call(addressmMIoVlZ, uintQ7rnY8y, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolWn3N8bg = await AntiBaseProtocol.new({from: accounts[2]});
		const uintADtUYWM = BigInt("1840")
		const uintRVuhrSt = BigInt("1147")
		const addressBpgnlXi = accounts[5]
		const addressHyBCMHR = "0x0000000000000000000000000000000000000001"
//		const uint256ibDrBvF = await AntiBaseProtocolWn3N8bg.burn.call(uintADtUYWM, {from: accounts[4]});
//		const boollMju5rH = await AntiBaseProtocolWn3N8bg.transferFrom.call(addressHyBCMHR, addressBpgnlXi, uintRVuhrSt, {from: accounts[0]});
//		await AntiBaseProtocolWn3N8bg.requestGas.call({from: accounts[1]});

		await expect(AntiBaseProtocolWn3N8bg.burn.call(uintADtUYWM, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolTLd0bvV = await AntiBaseProtocol.new({from: accounts[2]});
		const uintRdMWuEu = BigInt("98")
		const addressd0C31U6 = accounts[5]
		const uintAfZ9Pa = BigInt("1573")
		const addressPbugIXf = accounts[2]
		const addressjfg7Ay = accounts[3]
		const addressP8wtSSp = await AntiBaseProtocolTLd0bvV.owner.call({from: accounts[0]});
//		const addressKNHHGY7 = await AntiBaseProtocolTLd0bvV.burnFrom.call(addressd0C31U6, uintRdMWuEu, {from: accounts[0]});
//		const boolV57fcLR = await AntiBaseProtocolTLd0bvV.transfer.call(addressPbugIXf, uintAfZ9Pa, {from: accounts[0]});
//		const addressIYtY37h = await AntiBaseProtocolTLd0bvV.transferOwnership.call(addressjfg7Ay, {from: accounts[4]});

		assert.equal(addressP8wtSSp, 0x8A08C30CC1Aad25f8F92Aa0a95275713D9C3B30b)
		await expect(AntiBaseProtocolTLd0bvV.burnFrom.call(addressd0C31U6, uintRdMWuEu, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolWn3N8bg = await AntiBaseProtocol.new({from: accounts[2]});
		const uintkBbd2O3 = BigInt("1297")
		const addressimn1geL = accounts[3]
		const uintqwlNvaR = BigInt("1840")
		const uintEWhyAxt = BigInt("1147")
		const addressCHlXm4b = accounts[5]
		const addressYEVgSgN = "0x0000000000000000000000000000000000000001"
		const boolHg8Sbf = await AntiBaseProtocolWn3N8bg.increaseAllowance.call(addressimn1geL, uintkBbd2O3, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256ibDrBvF = await AntiBaseProtocolWn3N8bg.burn.call(uintqwlNvaR, {from: accounts[4]});
//		const boollMju5rH = await AntiBaseProtocolWn3N8bg.transferFrom.call(addressYEVgSgN, addressCHlXm4b, uintEWhyAxt, {from: accounts[0]});
//		const addressOdyeJM = await AntiBaseProtocolWn3N8bg.owner.call({from: accounts[1]});
//		await AntiBaseProtocolWn3N8bg.requestGas.call({from: accounts[1]});

		assert.equal(boolHg8Sbf, true)
		await expect(AntiBaseProtocolWn3N8bg.burn.call(uintqwlNvaR, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolKAl7B9o = await AntiBaseProtocol.new({from: accounts[0]});
		const uintIqW8u3f = BigInt("474")
		const uint256tiUwae5 = await AntiBaseProtocolKAl7B9o.findBurnFee.call(uintIqW8u3f, {from: accounts[3]});
		const stringf6PO9gk = await AntiBaseProtocolKAl7B9o.name.call({from: accounts[4]});
//		await AntiBaseProtocolKAl7B9o.renounceOwnership.call({from: accounts[1]});
//		const stringFqmnd6k = await AntiBaseProtocolKAl7B9o.symbol.call({from: accounts[4]});

		assert.equal(stringf6PO9gk, "https://t.me/antibaseprotocol")
		assert.equal(uint256tiUwae5, BigInt("75"))
		await expect(AntiBaseProtocolKAl7B9o.renounceOwnership.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolOHRIPtk = await AntiBaseProtocol.new({from: accounts[4]});
		const addressbw07NvR = accounts[2]
		const uintjNhzZZW = BigInt("1592")
		const addressnp9wK29 = accounts[1]
		const addressiqU1vmn = accounts[2]
		const uintpgshGZa = BigInt("467")
		const addressLb0vpVK = accounts[2]
		const addressDtMXYJa = accounts[5]
		const stringB41WVEp = await AntiBaseProtocolOHRIPtk.name.call({from: accounts[4]});
		const boolWBpnCtm = await AntiBaseProtocolOHRIPtk.isOwner.call({from: accounts[2]});
		const uint256NbBisEX = await AntiBaseProtocolOHRIPtk.balanceOf.call(addressbw07NvR, {from: accounts[0]});
//		const addressQay7mLy = await AntiBaseProtocolOHRIPtk._approve.call(addressiqU1vmn, addressnp9wK29, uintjNhzZZW, {from: accounts[3]});
//		const addressM8B9MX8 = await AntiBaseProtocolOHRIPtk._approve.call(addressDtMXYJa, addressLb0vpVK, uintpgshGZa, {from: accounts[3]});

		assert.equal(boolWBpnCtm, false)
		assert.equal(stringB41WVEp, "https://t.me/antibaseprotocol")
		assert.equal(uint256NbBisEX, BigInt("0"))
		await expect(AntiBaseProtocolOHRIPtk._approve.call(addressiqU1vmn, addressnp9wK29, uintjNhzZZW, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolKAl7B9o = await AntiBaseProtocol.new({from: accounts[0]});
		const uintlQNe4x9 = BigInt("474")
		const uint256tiUwae5 = await AntiBaseProtocolKAl7B9o.findBurnFee.call(uintlQNe4x9, {from: accounts[3]});
		const stringf6PO9gk = await AntiBaseProtocolKAl7B9o.name.call({from: accounts[4]});
		const stringFqmnd6k = await AntiBaseProtocolKAl7B9o.symbol.call({from: accounts[4]});

		assert.equal(stringFqmnd6k, "ABASE")
		assert.equal(stringf6PO9gk, "https://t.me/antibaseprotocol")
		assert.equal(uint256tiUwae5, BigInt("75"))
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolKAl7B9o = await AntiBaseProtocol.new({from: accounts[0]});
		const uintqrHzGlm = BigInt("466")
		const uintzcqLKQq = BigInt("342")
		const addressInG9C4H = accounts[4]
		const uintdCKcle = BigInt("600")
		const addressXDd47l5 = accounts[1]
		const addresst9DoBp = accounts[4]
		const uintf6xX7bN = BigInt("1172")
		const addressFwTyx9g = accounts[5]
		const uintokl4JPE = BigInt("667")
		const addressv1CL1Vd = accounts[2]
		const uint256tiUwae5 = await AntiBaseProtocolKAl7B9o.findBurnFee.call(uintqrHzGlm, {from: accounts[3]});
		const uint256ChL249 = await AntiBaseProtocolKAl7B9o.findRewardFee.call(uintzcqLKQq, {from: accounts[0]});
//		const addresscsnLw1s = await AntiBaseProtocolKAl7B9o._transferOwnership.call(addressInG9C4H, {from: accounts[2]});
//		const stringf6PO9gk = await AntiBaseProtocolKAl7B9o.name.call({from: accounts[4]});
//		await AntiBaseProtocolKAl7B9o.renounceOwnership.call({from: accounts[3]});
//		await AntiBaseProtocolKAl7B9o.renounceOwnership.call({from: accounts[1]});
//		const boolZDEfB4e = await AntiBaseProtocolKAl7B9o.increaseAllowance.call(addressXDd47l5, uintdCKcle, {from: "0x0000000000000000000000000000000000000001"});
//		const addresss6tRxK7 = await AntiBaseProtocolKAl7B9o.transferOwnership.call(addresst9DoBp, {from: accounts[4]});
//		const boolv83MikY = await AntiBaseProtocolKAl7B9o.transfer.call(addressFwTyx9g, uintf6xX7bN, {from: accounts[2]});
//		const booln8JUl3q = await AntiBaseProtocolKAl7B9o.approve.call(addressv1CL1Vd, uintokl4JPE, {from: accounts[1]});
//		const stringFqmnd6k = await AntiBaseProtocolKAl7B9o.symbol.call({from: accounts[4]});

		assert.equal(uint256ChL249, BigInt("20"))
		assert.equal(uint256tiUwae5, BigInt("75"))
		await expect(AntiBaseProtocolKAl7B9o._transferOwnership.call(addressInG9C4H, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolKAl7B9o = await AntiBaseProtocol.new({from: accounts[0]});
		const uintGTYCcHM = BigInt("474")
		const uintPamIjCG = BigInt("761")
		const addressVM5ecEO = accounts[1]
		const uinthmcAmTQ = BigInt("1953")
		const addressUDwWIlJ = accounts[2]
		const uint256tiUwae5 = await AntiBaseProtocolKAl7B9o.findBurnFee.call(uintGTYCcHM, {from: accounts[3]});
		const uint8qBBVKYl = await AntiBaseProtocolKAl7B9o.decimals.call({from: accounts[0]});
		const boolcM6uuYz = await AntiBaseProtocolKAl7B9o.approve.call(addressVM5ecEO, uintPamIjCG, {from: "0x0000000000000000000000000000000000000001"});
		const boolXGiDnI = await AntiBaseProtocolKAl7B9o.increaseAllowance.call(addressUDwWIlJ, uinthmcAmTQ, {from: accounts[4]});
		const stringf6PO9gk = await AntiBaseProtocolKAl7B9o.name.call({from: accounts[4]});
		const stringFqmnd6k = await AntiBaseProtocolKAl7B9o.symbol.call({from: accounts[4]});

		assert.equal(boolXGiDnI, true)
		assert.equal(boolcM6uuYz, true)
		assert.equal(stringFqmnd6k, "ABASE")
		assert.equal(stringf6PO9gk, "https://t.me/antibaseprotocol")
		assert.equal(uint256tiUwae5, BigInt("75"))
		assert.equal(uint8qBBVKYl, BigInt("18"))
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolKAl7B9o = await AntiBaseProtocol.new({from: accounts[0]});
		const uint5rIhcm = BigInt("1539")
		const addresso1gRaoT = accounts[1]
		const addressxwIMcWE = accounts[3]
		const uinttX5qBxR = BigInt("511")
		const addressMFm7EWr = accounts[3]
		const uinti4bmH1 = BigInt("474")
//		const boolsX6eRj = await AntiBaseProtocolKAl7B9o.transferFrom.call(addressxwIMcWE, addresso1gRaoT, uint5rIhcm, {from: accounts[4]});
//		const addressZueTajD = await AntiBaseProtocolKAl7B9o._mint.call(addressMFm7EWr, uinttX5qBxR, {from: accounts[2]});
//		const uint8ErwFMkE = await AntiBaseProtocolKAl7B9o.decimals.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256tiUwae5 = await AntiBaseProtocolKAl7B9o.findBurnFee.call(uinti4bmH1, {from: accounts[3]});
//		const stringf6PO9gk = await AntiBaseProtocolKAl7B9o.name.call({from: accounts[4]});
//		const stringFqmnd6k = await AntiBaseProtocolKAl7B9o.symbol.call({from: accounts[4]});

		await expect(AntiBaseProtocolKAl7B9o.transferFrom.call(addressxwIMcWE, addresso1gRaoT, uint5rIhcm, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolKAl7B9o = await AntiBaseProtocol.new({from: accounts[0]});
		const addressv9TJqlm = accounts[0]
		const addressdgLAivq = accounts[4]
		const uintGzXJsU4 = BigInt("466")
		const uintHMyFLy5 = BigInt("342")
		const addressZO6k6AO = accounts[4]
		const uintVjCJk0d = BigInt("600")
		const addresseQr01SX = accounts[1]
		const uinthElx57e = BigInt("662")
		const addressTbbK4bI = accounts[2]
		const uint256GdXMhuG = await AntiBaseProtocolKAl7B9o.allowance.call(addressdgLAivq, addressv9TJqlm, {from: accounts[3]});
		const uint256tiUwae5 = await AntiBaseProtocolKAl7B9o.findBurnFee.call(uintGzXJsU4, {from: accounts[3]});
		const uint256ChL249 = await AntiBaseProtocolKAl7B9o.findRewardFee.call(uintHMyFLy5, {from: accounts[0]});
//		const addresscsnLw1s = await AntiBaseProtocolKAl7B9o._transferOwnership.call(addressZO6k6AO, {from: accounts[2]});
//		const stringf6PO9gk = await AntiBaseProtocolKAl7B9o.name.call({from: accounts[4]});
//		await AntiBaseProtocolKAl7B9o.renounceOwnership.call({from: accounts[3]});
//		await AntiBaseProtocolKAl7B9o.renounceOwnership.call({from: accounts[1]});
//		const boolmL8Bn32 = await AntiBaseProtocolKAl7B9o.isOwner.call({from: accounts[1]});
//		const boolZDEfB4e = await AntiBaseProtocolKAl7B9o.increaseAllowance.call(addresseQr01SX, uintVjCJk0d, {from: "0x0000000000000000000000000000000000000001"});
//		const booln8JUl3q = await AntiBaseProtocolKAl7B9o.approve.call(addressTbbK4bI, uinthElx57e, {from: accounts[1]});
//		const stringFqmnd6k = await AntiBaseProtocolKAl7B9o.symbol.call({from: accounts[4]});

		assert.equal(uint256ChL249, BigInt("20"))
		assert.equal(uint256GdXMhuG, BigInt("0"))
		assert.equal(uint256tiUwae5, BigInt("75"))
		await expect(AntiBaseProtocolKAl7B9o._transferOwnership.call(addressZO6k6AO, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolf76BL7 = await AntiBaseProtocol.new({from: accounts[4]});
		const uintgAd5whr = BigInt("1223")
		const addressFD7bDgr = accounts[1]
		const uintNUw8rYr = BigInt("115")
		const addressk7Zeqn3 = accounts[3]
		const addressbJcjXtA = accounts[2]
		const uint8HIG359Z = await AntiBaseProtocolf76BL7.decimals.call({from: "0x0000000000000000000000000000000000000001"});
		const boolWWgys1R = await AntiBaseProtocolf76BL7.isOwner.call({from: "0x0000000000000000000000000000000000000001"});
//		const boolch0Huh = await AntiBaseProtocolf76BL7.transfer.call(addressFD7bDgr, uintgAd5whr, {from: accounts[3]});
//		const booluEBJLAr = await AntiBaseProtocolf76BL7.transferFrom.call(addressbJcjXtA, addressk7Zeqn3, uintNUw8rYr, {from: accounts[4]});

		assert.equal(boolWWgys1R, false)
		assert.equal(uint8HIG359Z, BigInt("18"))
		await expect(AntiBaseProtocolf76BL7.transfer.call(addressFD7bDgr, uintgAd5whr, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolZtJE3s4 = await AntiBaseProtocol.new({from: accounts[4]});
		const uintAQlHKtB = BigInt("1373")
		const addressmdvHPUX = accounts[5]
		const uintKlClOq = BigInt("1540")
		const addressPQ4KIS8 = accounts[4]
		const uintZ7oUY2r = BigInt("1511")
		const uintJTL0hwI = BigInt("103")
		const addressfI04pEK = accounts[4]
		const uintykHO5lK = BigInt("356")
		const addressfwjyWT9 = accounts[4]
		const boolXHPt0XX = await AntiBaseProtocolZtJE3s4.approve.call(addressmdvHPUX, uintAQlHKtB, {from: accounts[0]});
		const booleIR06qL = await AntiBaseProtocolZtJE3s4.transfer.call(addressPQ4KIS8, uintKlClOq, {from: accounts[4]});
		const uint256zbBL7MM = await AntiBaseProtocolZtJE3s4.findRewardFee.call(uintZ7oUY2r, {from: "0x0000000000000000000000000000000000000001"});
		const boolC2r6Lrv = await AntiBaseProtocolZtJE3s4.increaseAllowance.call(addressfI04pEK, uintJTL0hwI, {from: accounts[0]});
		const boolZBGGyRR = await AntiBaseProtocolZtJE3s4.increaseAllowance.call(addressfwjyWT9, uintykHO5lK, {from: accounts[2]});
//		await AntiBaseProtocolZtJE3s4.renounceOwnership.call({from: accounts[3]});

		assert.equal(boolC2r6Lrv, true)
		assert.equal(boolXHPt0XX, true)
		assert.equal(boolZBGGyRR, true)
		assert.equal(booleIR06qL, true)
		assert.equal(uint256zbBL7MM, BigInt("80"))
		await expect(AntiBaseProtocolZtJE3s4.renounceOwnership.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolKAl7B9o = await AntiBaseProtocol.new({from: accounts[0]});
		const uintbYIn1Jt = BigInt("750")
		const addressbl86UDD = accounts[1]
		const uintvz3HsZZ = BigInt("466")
		const uintEkX72aV = BigInt("342")
		const uintNzMMD7L = BigInt("600")
		const addressijVyd0 = accounts[1]
		const uintMUOcXSP = BigInt("533")
		const uintVSD88r = BigInt("662")
		const addressGRarzjf = accounts[2]
//		const boolCoLGuT8 = await AntiBaseProtocolKAl7B9o.decreaseAllowance.call(addressbl86UDD, uintbYIn1Jt, {from: accounts[3]});
//		const uint256tiUwae5 = await AntiBaseProtocolKAl7B9o.findBurnFee.call(uintvz3HsZZ, {from: accounts[3]});
//		const uint256ChL249 = await AntiBaseProtocolKAl7B9o.findRewardFee.call(uintEkX72aV, {from: accounts[0]});
//		const stringf6PO9gk = await AntiBaseProtocolKAl7B9o.name.call({from: accounts[4]});
//		await AntiBaseProtocolKAl7B9o.renounceOwnership.call({from: accounts[1]});
//		const boolZDEfB4e = await AntiBaseProtocolKAl7B9o.increaseAllowance.call(addressijVyd0, uintNzMMD7L, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256SToXKj = await AntiBaseProtocolKAl7B9o.findRewardFee.call(uintMUOcXSP, {from: accounts[0]});
//		const booln8JUl3q = await AntiBaseProtocolKAl7B9o.approve.call(addressGRarzjf, uintVSD88r, {from: accounts[1]});
//		const stringFqmnd6k = await AntiBaseProtocolKAl7B9o.symbol.call({from: accounts[4]});

		await expect(AntiBaseProtocolKAl7B9o.decreaseAllowance.call(addressbl86UDD, uintbYIn1Jt, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolf76BL7 = await AntiBaseProtocol.new({from: accounts[4]});
		const uintzuFVaeU = BigInt("1194")
		const uintsTW0JZW = BigInt("431")
		const addressAk4MX3T = accounts[0]
		const addressAKzR4aM = accounts[4]
		const uintljAuu2r = BigInt("115")
		const addresszW0ODjJ = accounts[3]
		const addressThQdJJc = accounts[2]
		const uint8HIG359Z = await AntiBaseProtocolf76BL7.decimals.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256pMum3DN = await AntiBaseProtocolf76BL7.findBurnFee.call(uintzuFVaeU, {from: accounts[3]});
		const uint256gNVbXiH = await AntiBaseProtocolf76BL7.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
//		const addressT82E2Ol = await AntiBaseProtocolf76BL7._approve.call(addressAKzR4aM, addressAk4MX3T, uintsTW0JZW, {from: accounts[4]});
//		const booluEBJLAr = await AntiBaseProtocolf76BL7.transferFrom.call(addressThQdJJc, addresszW0ODjJ, uintljAuu2r, {from: accounts[4]});

		assert.equal(uint256gNVbXiH, BigInt("31250000000000000000"))
		assert.equal(uint256pMum3DN, BigInt("180"))
		assert.equal(uint8HIG359Z, BigInt("18"))
		await expect(AntiBaseProtocolf76BL7._approve.call(addressAKzR4aM, addressAk4MX3T, uintsTW0JZW, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolZtJE3s4 = await AntiBaseProtocol.new({from: accounts[4]});
		const uintRt9IdKL = BigInt("1373")
		const addressJCMS3EG = accounts[5]
		const addressvqLlkk0 = accounts[3]
		const addressDibcdIb = accounts[2]
		const uintaJSPWBb = BigInt("1553")
		const address8DX8vn = accounts[4]
		const uintOg9DNnI = BigInt("1094")
		const addresskR0gp3M = accounts[0]
		const addressSPgBQmB = accounts[4]
		const uintFQO8s0F = BigInt("706")
		const addressrctdpO = accounts[3]
		const addressRdhRBG3 = accounts[2]
		const uintHYSIOFo = BigInt("164")
		const uintQHEUAnW = BigInt("642")
		const addressZHFdwv = accounts[2]
		const uintraZjCj4 = BigInt("1509")
		const addressk1rp0lQ = accounts[2]
		const uintVGP2RmE = BigInt("356")
		const addressBXSFLO7 = accounts[5]
		const boolXHPt0XX = await AntiBaseProtocolZtJE3s4.approve.call(addressJCMS3EG, uintRt9IdKL, {from: accounts[0]});
		const stringfDHNo6k = await AntiBaseProtocolZtJE3s4.name.call({from: accounts[0]});
		const uint256BcTPved = await AntiBaseProtocolZtJE3s4.allowance.call(addressDibcdIb, addressvqLlkk0, {from: accounts[3]});
		const boolUPPzW3e = await AntiBaseProtocolZtJE3s4.isOwner.call({from: "0x0000000000000000000000000000000000000001"});
		const booleIR06qL = await AntiBaseProtocolZtJE3s4.transfer.call(address8DX8vn, uintaJSPWBb, {from: accounts[4]});
//		const boolLayyKGk = await AntiBaseProtocolZtJE3s4.transferFrom.call(addressSPgBQmB, addresskR0gp3M, uintOg9DNnI, {from: accounts[5]});
//		const uint256NRjdhXN = await AntiBaseProtocolZtJE3s4.findRewardFee.call(uintFQO8s0F, {from: accounts[3]});
//		await AntiBaseProtocolZtJE3s4.requestGas.call({from: accounts[3]});
//		const uint256a1gMpm6 = await AntiBaseProtocolZtJE3s4.allowance.call(addressRdhRBG3, addressrctdpO, {from: accounts[4]});
//		const uint256mPFOR26 = await AntiBaseProtocolZtJE3s4.findRewardFee.call(uintHYSIOFo, {from: accounts[1]});
//		const boolcfRYGkX = await AntiBaseProtocolZtJE3s4.isOwner.call({from: accounts[1]});
//		const boolyKBbt4 = await AntiBaseProtocolZtJE3s4.transfer.call(addressZHFdwv, uintQHEUAnW, {from: accounts[4]});
//		const addressJ1TLVB = await AntiBaseProtocolZtJE3s4._mint.call(addressk1rp0lQ, uintraZjCj4, {from: accounts[4]});
//		const boolZBGGyRR = await AntiBaseProtocolZtJE3s4.increaseAllowance.call(addressBXSFLO7, uintVGP2RmE, {from: accounts[2]});

		assert.equal(boolUPPzW3e, false)
		assert.equal(boolXHPt0XX, true)
		assert.equal(booleIR06qL, true)
		assert.equal(stringfDHNo6k, "https://t.me/antibaseprotocol")
		assert.equal(uint256BcTPved, BigInt("0"))
		await expect(AntiBaseProtocolZtJE3s4.transferFrom.call(addressSPgBQmB, addresskR0gp3M, uintOg9DNnI, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolZtJE3s4 = await AntiBaseProtocol.new({from: accounts[4]});
		const uintxTtI6j = BigInt("1562")
		const addressdrpi4z = accounts[4]
		const uintDVSauiz = BigInt("1705")
		const addressXNMtw8g = accounts[4]
		const stringuoZYbk = await AntiBaseProtocolZtJE3s4.symbol.call({from: accounts[2]});
		const booleIR06qL = await AntiBaseProtocolZtJE3s4.transfer.call(addressdrpi4z, uintxTtI6j, {from: accounts[4]});
//		const addressRBo8dRH = await AntiBaseProtocolZtJE3s4.burnFrom.call(addressXNMtw8g, uintDVSauiz, {from: accounts[4]});

		assert.equal(booleIR06qL, true)
		assert.equal(stringuoZYbk, "ABASE")
		await expect(AntiBaseProtocolZtJE3s4.burnFrom.call(addressXNMtw8g, uintDVSauiz, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolZtJE3s4 = await AntiBaseProtocol.new({from: accounts[4]});
		const addresseie1ilu = accounts[4]
		const uintina3MNF = BigInt("1562")
		const addressACtz9bM = accounts[5]
		const uintvBOasIp = BigInt("1511")
		const addressBEhRYlG = await AntiBaseProtocolZtJE3s4.transferOwnership.call(addresseie1ilu, {from: accounts[4]});
		const uint8LTzTzLV = await AntiBaseProtocolZtJE3s4.decimals.call({from: accounts[4]});
		const booleIR06qL = await AntiBaseProtocolZtJE3s4.transfer.call(addressACtz9bM, uintina3MNF, {from: accounts[4]});
		const uint256zbBL7MM = await AntiBaseProtocolZtJE3s4.findRewardFee.call(uintvBOasIp, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(booleIR06qL, true)
		assert.equal(uint256zbBL7MM, BigInt("80"))
		assert.equal(uint8LTzTzLV, BigInt("18"))
	});
})