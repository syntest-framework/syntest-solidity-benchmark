const Revive = artifacts.require("Revive");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Revive', (accounts) => {
	it('test for Revive', async () => {
		const ReviveRcmXrQx = await Revive.new({from: accounts[1]});
		const addressXMUnSFW = accounts[2]
		const addressaaMHtCt = accounts[2]
		const addressjsXiTdy = await ReviveRcmXrQx.transferOwnership.call(addressXMUnSFW, {from: accounts[1]});
//		await ReviveRcmXrQx.renounceOwnership.call({from: accounts[1]});
//		await ReviveRcmXrQx.renounceOwnership.call({from: accounts[4]});
//		const uint256uInSeA8 = await ReviveRcmXrQx.getUnlockableTokens.call(addressaaMHtCt, {from: accounts[0]});
//		const addresszPFO0GV = await ReviveRcmXrQx.owner.call({from: accounts[0]});

		await expect(ReviveRcmXrQx.renounceOwnership.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveXZ2stkA = await Revive.new({from: accounts[1]});
		const uintIYBrCwD = BigInt("1617")
		const addressr21i5GN = accounts[4]
		const uintF8kcWlj = BigInt("1199")
		const byteMk5tpMG = "0x09111f190c0511140b0d190c1c1f140506091214080c19180a11081f1d1f0c14"
		const addressvG1kQH = accounts[4]
		const addressbXavZY = accounts[1]
		const addresspmeqM3W = accounts[2]
		const uintOjLlGKE = BigInt("577")
		const byteWC3rFxC = "0x0c14170a091a02181b0416150f0e1b160d180b0e0d0d0414170b0e0805100a19"
		const addressjtowyU = accounts[1]
		const uintF5YPPP = BigInt("312")
		const byteGVr6zz = "0x040d0b170c0b05011d0103080212010b011f1c0b081813001102181218060e02"
		const boolLk0z7vB = await ReviveXZ2stkA.approve.call(addressr21i5GN, uintIYBrCwD, {from: accounts[5]});
		const uint256yptsKW = await ReviveXZ2stkA.tokensLockedAtTime.call(addressvG1kQH, byteMk5tpMG, uintF8kcWlj, {from: accounts[2]});
		const uint256enGq3cd = await ReviveXZ2stkA.allowance.call(addresspmeqM3W, addressbXavZY, {from: accounts[2]});
		const uint256w33SWyB = await ReviveXZ2stkA.tokensLockedAtTime.call(addressjtowyU, byteWC3rFxC, uintOjLlGKE, {from: accounts[2]});
//		const boolylqBDx1 = await ReviveXZ2stkA.increaseLockAmount.call(byteGVr6zz, uintF5YPPP, {from: accounts[1]});

		assert.equal(boolLk0z7vB, true)
		assert.equal(uint256enGq3cd, BigInt("0"))
		assert.equal(uint256w33SWyB, BigInt("0"))
		assert.equal(uint256yptsKW, BigInt("0"))
		await expect(ReviveXZ2stkA.increaseLockAmount.call(byteGVr6zz, uintF5YPPP, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveORqQ8Ua = await Revive.new({from: accounts[2]});
		const uintOKkV1eM = BigInt("875")
		const uintAPEgxLs = BigInt("965")
		const bytecWQy9u = "0x1f0a18140714011519011612091403011c15100e111d0e110e05051d171a0a16"
		const address09N6fC = accounts[1]
		const uintop5J7Dt = BigInt("1243")
		const byteLS71z8T = "0x02121912000f0c010c10111819060b191c1e0e0e1b191a1b040d111d1f111804"
		const uintg1jPJP7 = BigInt("560")
		const byteygDHLL = "0x1e070408011b031a180c001914061d0f1a03200d1511091d1e1f1d120d0e1f1e"
		const addressPMm7rkz = accounts[3]
		const addressItdZAUv = accounts[3]
		const bytenKmJQVF = "0x1e050a150c1e1d1c1e080d16100a1e1e03190411031e1f1c04060a180b18030a"
		const addresszi5ut95 = accounts[0]
//		const boolzXRGKO3 = await ReviveORqQ8Ua.transferWithLock.call(address09N6fC, bytecWQy9u, uintAPEgxLs, uintOKkV1eM, {from: accounts[4]});
//		const booloVQkqc = await ReviveORqQ8Ua.increaseLockAmount.call(byteLS71z8T, uintop5J7Dt, {from: accounts[1]});
//		const uint256Nr14y3 = await ReviveORqQ8Ua.tokensLockedAtTime.call(addressPMm7rkz, byteygDHLL, uintg1jPJP7, {from: accounts[3]});
//		const uint256jXkuDY = await ReviveORqQ8Ua.totalBalanceOf.call(addressItdZAUv, {from: accounts[0]});
//		const uint256LRZn66B = await ReviveORqQ8Ua.tokensLocked.call(addresszi5ut95, bytenKmJQVF, {from: "0x0000000000000000000000000000000000000001"});

		await expect(ReviveORqQ8Ua.transferWithLock.call(address09N6fC, bytecWQy9u, uintAPEgxLs, uintOKkV1eM, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveiiYIvoN = await Revive.new({from: accounts[3]});
		const uintxGvoCls = BigInt("161")
		const uintsjg0N9P = BigInt("927")
		const byteBEiCD5h = "0x150108121707061e160411031d1919040011031c04131404191b0e0613150110"
		const addresslckLg2c = accounts[3]
		const uinttBY7dVD = BigInt("1182")
		const addressjWdNwKO = accounts[1]
		const uint256ozE3Muk = await ReviveiiYIvoN.totalSupply.call({from: accounts[2]});
		const booliePXwtN = await ReviveiiYIvoN.lock.call(byteBEiCD5h, uintsjg0N9P, uintxGvoCls, {from: accounts[3]});
		const uint256Hskywal = await ReviveiiYIvoN.balanceOf.call(addresslckLg2c, {from: accounts[0]});
//		await ReviveiiYIvoN.renounceOwnership.call({from: accounts[5]});
//		const boolNJNwT11 = await ReviveiiYIvoN.increaseAllowance.call(addressjWdNwKO, uinttBY7dVD, {from: accounts[5]});

		assert.equal(booliePXwtN, true)
		assert.equal(uint256Hskywal, BigInt("3000000000000000000000000000"))
		assert.equal(uint256ozE3Muk, BigInt("3000000000000000000000000000"))
		await expect(ReviveiiYIvoN.renounceOwnership.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveA0op8wv = await Revive.new({from: accounts[3]});
		const uintIAZb4J1 = BigInt("1324")
		const addressgp8AsfT = accounts[4]
		const uintduVQsmP = BigInt("86")
		const byteXC8sFO = "0x1a011d101b0b1c000b02011916020e1e120514151d18010806001b0102150a0a"
		const addressHkIY3G5 = accounts[3]
//		await ReviveA0op8wv.onlyOwner.call({from: accounts[2]});
//		const boolI5GSS7 = await ReviveA0op8wv.isOwner.call({from: accounts[1]});
//		const boolmYelP0J = await ReviveA0op8wv.decreaseAllowance.call(addressgp8AsfT, uintIAZb4J1, {from: accounts[4]});
//		const uint256u0Xyd6y = await ReviveA0op8wv.tokensLockedAtTime.call(addressHkIY3G5, byteXC8sFO, uintduVQsmP, {from: accounts[0]});

		await expect(ReviveA0op8wv.onlyOwner.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const Revivek4LUyRf = await Revive.new({from: accounts[0]});
		const uintd88Qrxh = BigInt("265")
		const addressQZg9Ndz = accounts[2]
		const addressUfEgjei = accounts[1]
		const addressjHuebW = accounts[1]
		const boolZ9CeMrj = await Revivek4LUyRf.approve.call(addressQZg9Ndz, uintd88Qrxh, {from: accounts[0]});
		const uint256NHF1XWb = await Revivek4LUyRf.totalBalanceOf.call(addressUfEgjei, {from: accounts[0]});
		const boolQcXghah = await Revivek4LUyRf.isOwner.call({from: accounts[1]});
		const uint256GfyjNVU = await Revivek4LUyRf.balanceOf.call(addressjHuebW, {from: accounts[2]});
		const addressoXci4B3 = await Revivek4LUyRf.owner.call({from: accounts[0]});

		assert.equal(addressoXci4B3, 0x65209aD398ad6230D70d34776a39B71cac651914)
		assert.equal(boolQcXghah, false)
		assert.equal(boolZ9CeMrj, true)
		assert.equal(uint256GfyjNVU, BigInt("0"))
		assert.equal(uint256NHF1XWb, BigInt("0"))
	});

	it('test for Revive', async () => {
		const RevivedTEwHjv = await Revive.new({from: accounts[5]});
		const addresstAjaXeR = accounts[0]
		const uintfC5DiH = BigInt("289")
		const bytezxKWOin = "0x070a0d12041d121906020f161a040f111d0b161b0f11160c080801141e1b1f0c"
		const uintBZO7viN = BigInt("1128")
		const byteFRFkC6b = "0x011d0210041e1c0c0113030e12081e1007111d191b1d1f14170c091d1b16011d"
		const uint256mbdiVcF = await RevivedTEwHjv.balanceOf.call(addresstAjaXeR, {from: accounts[4]});
//		const boolb2ghnSJ = await RevivedTEwHjv.extendLock.call(bytezxKWOin, uintfC5DiH, {from: accounts[4]});
//		const boolnZselfQ = await RevivedTEwHjv.extendLock.call(byteFRFkC6b, uintBZO7viN, {from: accounts[0]});

		assert.equal(uint256mbdiVcF, BigInt("0"))
		await expect(RevivedTEwHjv.extendLock.call(bytezxKWOin, uintfC5DiH, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const Reviveq7Zn6ad = await Revive.new({from: accounts[2]});
		const uintgfzer0 = BigInt("446")
		const byteITIDYTf = "0x140a1b08021e07151d1b090904051e0a1a1e1718140316101417191d14060d0a"
		const addressrWcBZJB = accounts[0]
		const addressxvTlvpQ = accounts[2]
		const uintEWtta6 = BigInt("735")
		const addressmIMvQmb = accounts[5]
		const uintHJ8J46 = BigInt("15")
		const uintbqzpVoO = BigInt("1827")
		const byteQe44aZC = "0x1d0e0c200e12120f1512180e1712111a07110601121e09121208021417190f14"
		const uint2566rmmaO = await Reviveq7Zn6ad.tokensLockedAtTime.call(addressrWcBZJB, byteITIDYTf, uintgfzer0, {from: accounts[3]});
		const uint256yaVZadR = await Reviveq7Zn6ad.balanceOf.call(addressxvTlvpQ, {from: "0x0000000000000000000000000000000000000001"});
		const boolxOM7nbP = await Reviveq7Zn6ad.increaseAllowance.call(addressmIMvQmb, uintEWtta6, {from: accounts[4]});
//		const booldq70C8a = await Reviveq7Zn6ad.lock.call(byteQe44aZC, uintbqzpVoO, uintHJ8J46, {from: accounts[1]});

		assert.equal(boolxOM7nbP, true)
		assert.equal(uint2566rmmaO, BigInt("0"))
		assert.equal(uint256yaVZadR, BigInt("3000000000000000000000000000"))
		await expect(Reviveq7Zn6ad.lock.call(byteQe44aZC, uintbqzpVoO, uintHJ8J46, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveXZ2stkA = await Revive.new({from: accounts[1]});
		const uintVqh8t7V = BigInt("1617")
		const addressosdVsQ = accounts[4]
		const uinthcWvSyB = BigInt("1199")
		const bytee5pdnNx = "0x09111f190c0511140b0d190c1c1f140506091214080c19180a11081f1d1f0c14"
		const addressepPS4Mw = accounts[4]
		const bytemVcL0zy = "0x0f1a1e141e05101c1a180f16150c121d171709090b01051d1e1e190d1506080f"
		const addressmXnsc4o = accounts[0]
		const addresshhEmjRI = accounts[1]
		const addressTJDvJM4 = accounts[2]
		const addressL4HvFYe = accounts[0]
		const uintRlmIliu = BigInt("312")
		const bytebRrzxEI = "0x040d0b170c0b05011d0103080212010b011f1c0b081813001102181218060e02"
		const boolLk0z7vB = await ReviveXZ2stkA.approve.call(addressosdVsQ, uintVqh8t7V, {from: accounts[5]});
		const uint256yptsKW = await ReviveXZ2stkA.tokensLockedAtTime.call(addressepPS4Mw, bytee5pdnNx, uinthcWvSyB, {from: accounts[2]});
		const uint256GRGAEUc = await ReviveXZ2stkA.tokensLocked.call(addressmXnsc4o, bytemVcL0zy, {from: "0x0000000000000000000000000000000000000001"});
		const uint256enGq3cd = await ReviveXZ2stkA.allowance.call(addressTJDvJM4, addresshhEmjRI, {from: accounts[2]});
		const uint256Xm1DkBE = await ReviveXZ2stkA.unlock.call(addressL4HvFYe, {from: accounts[3]});
//		const boolylqBDx1 = await ReviveXZ2stkA.increaseLockAmount.call(bytebRrzxEI, uintRlmIliu, {from: accounts[1]});

		assert.equal(boolLk0z7vB, true)
		assert.equal(uint256GRGAEUc, BigInt("0"))
		assert.equal(uint256Xm1DkBE, BigInt("0"))
		assert.equal(uint256enGq3cd, BigInt("0"))
		assert.equal(uint256yptsKW, BigInt("0"))
		await expect(ReviveXZ2stkA.increaseLockAmount.call(bytebRrzxEI, uintRlmIliu, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const RevivedTEwHjv = await Revive.new({from: accounts[5]});
		const addressQ7V6HbG = accounts[0]
		const uintijsiI25 = BigInt("227")
		const addressFBrhNQ = accounts[1]
		const uintm8qRCgn = BigInt("289")
		const bytegqDLPYd = "0x070a0d12041d121706020f161a040f111d0b161b0f11160c080801141e1b1f0c"
		const uintCJbY59n = BigInt("1128")
		const byteHPmX1l = "0x011d0210041e1c0c0113030e12081e1007111d191b1d1f14170c091d1b16011d"
		const uint256mbdiVcF = await RevivedTEwHjv.balanceOf.call(addressQ7V6HbG, {from: accounts[4]});
//		const boolZRYDJGi = await RevivedTEwHjv.decreaseAllowance.call(addressFBrhNQ, uintijsiI25, {from: accounts[0]});
//		const boolb2ghnSJ = await RevivedTEwHjv.extendLock.call(bytegqDLPYd, uintm8qRCgn, {from: accounts[4]});
//		const boolnZselfQ = await RevivedTEwHjv.extendLock.call(byteHPmX1l, uintCJbY59n, {from: accounts[0]});

		assert.equal(uint256mbdiVcF, BigInt("0"))
		await expect(RevivedTEwHjv.decreaseAllowance.call(addressFBrhNQ, uintijsiI25, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveORqQ8Ua = await Revive.new({from: accounts[2]});
		const byteij9P8TI = "0x150b0d051a0519110f1a0f0c0817180501180916101f0615130d141c0f0b0f0e"
		const addressXYKB5bP = accounts[2]
		const uintyyQafEK = BigInt("875")
		const uintLnoyHTf = BigInt("965")
		const bytedmdWd02 = "0x1f0a18140714011519011612091403011c15100e111d0e110e05051d171a0a16"
		const addressSXPm4No = accounts[2]
		const uintXTdgdS = BigInt("1402")
		const uintQsd6sk = BigInt("499")
		const byteh2meSZ7 = "0x0d1b0a140c1f041305120104120e11020c04160d01091909011119191116150d"
		const addressl8XvmSG = accounts[0]
		const uintScr5U8y = BigInt("560")
		const byteRpMf2n8 = "0x1e070408011b031a180c001914061d0f1a03200d1511091d1e1f1d120d0e1f1e"
		const addressyrfndm0 = accounts[3]
		const byteiBIgXPz = "0x1e050a150c1e1d1c1e080d16100a1e1e03190411031e1f1c04060a180b18030a"
		const addressk1w8zmn = accounts[0]
		const uint256rg2NxGl = await ReviveORqQ8Ua.tokensUnlockable.call(addressXYKB5bP, byteij9P8TI, {from: accounts[4]});
//		const boolzXRGKO3 = await ReviveORqQ8Ua.transferWithLock.call(addressSXPm4No, bytedmdWd02, uintLnoyHTf, uintyyQafEK, {from: accounts[4]});
//		const boolZtagW7K = await ReviveORqQ8Ua.transferWithLock.call(addressl8XvmSG, byteh2meSZ7, uintQsd6sk, uintXTdgdS, {from: accounts[0]});
//		const uint256Nr14y3 = await ReviveORqQ8Ua.tokensLockedAtTime.call(addressyrfndm0, byteRpMf2n8, uintScr5U8y, {from: accounts[3]});
//		const uint256LRZn66B = await ReviveORqQ8Ua.tokensLocked.call(addressk1w8zmn, byteiBIgXPz, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256rg2NxGl, BigInt("0"))
		await expect(ReviveORqQ8Ua.transferWithLock.call(addressSXPm4No, bytedmdWd02, uintLnoyHTf, uintyyQafEK, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveE9l9Wkt = await Revive.new({from: accounts[4]});
		const addresss1GbBzf = accounts[4]
		const addressVKsFOyS = accounts[1]
		const uintkPuiLH1 = BigInt("1865")
		const byteRNJKaj = "0x10091e0b051f01041c1f12170907041c1f101704161c1a0911151f04040a1b12"
		const addresswmcI6MT = accounts[2]
		const addressLF51pcZ = accounts[5]
		const uint2566CJOsT = await ReviveE9l9Wkt.getUnlockableTokens.call(addresss1GbBzf, {from: accounts[5]});
		const uint256vnqhdSV = await ReviveE9l9Wkt.balanceOf.call(addressVKsFOyS, {from: accounts[3]});
		const boolENibecA = await ReviveE9l9Wkt.isOwner.call({from: accounts[1]});
		const uint256wzV68eH = await ReviveE9l9Wkt.tokensLockedAtTime.call(addresswmcI6MT, byteRNJKaj, uintkPuiLH1, {from: accounts[1]});
		const uint256JUnhT3 = await ReviveE9l9Wkt.unlock.call(addressLF51pcZ, {from: accounts[4]});

		assert.equal(boolENibecA, false)
		assert.equal(uint2566CJOsT, BigInt("0"))
		assert.equal(uint256JUnhT3, BigInt("0"))
		assert.equal(uint256vnqhdSV, BigInt("0"))
		assert.equal(uint256wzV68eH, BigInt("0"))
	});

	it('test for Revive', async () => {
		const RevivekrZqMmL = await Revive.new({from: "0x0000000000000000000000000000000000000001"});
		const uintSbh570t = BigInt("1504")
		const addressdQCzXjw = accounts[3]
		const uintTgnsbfb = BigInt("629")
		const addressi9UrsYM = accounts[3]
		const boolxAeJl6s = await RevivekrZqMmL.transfer.call(addressdQCzXjw, uintSbh570t, {from: accounts[2]});
		const bools4MX5a = await RevivekrZqMmL.transfer.call(addressi9UrsYM, uintTgnsbfb, {from: accounts[3]});
	});

	it('test for Revive', async () => {
		const Reviveq7Zn6ad = await Revive.new({from: accounts[2]});
		const addressPNC8h9S = accounts[5]
		const uintidClCg6 = BigInt("427")
		const addressA2lzNFP = accounts[3]
		const uint1EPNGC = BigInt("15")
		const uintKQ1uvQM = BigInt("1827")
		const byteqw1ip7t = "0x1d0e0c200e12120f1512180e1712111a07110601121e09121208021417190f14"
		const uint256X5qkvxG = await Reviveq7Zn6ad.totalBalanceOf.call(addressPNC8h9S, {from: accounts[0]});
//		const uint256Y2EaBOq = await Reviveq7Zn6ad.recoverERC20.call(uintidClCg6, {from: accounts[3]});
//		const uint256yaVZadR = await Reviveq7Zn6ad.balanceOf.call(addressA2lzNFP, {from: "0x0000000000000000000000000000000000000001"});
//		const booldq70C8a = await Reviveq7Zn6ad.lock.call(byteqw1ip7t, uintKQ1uvQM, uint1EPNGC, {from: accounts[1]});

		assert.equal(uint256X5qkvxG, BigInt("0"))
		await expect(Reviveq7Zn6ad.recoverERC20.call(uintidClCg6, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveB9Ad6V6 = await Revive.new({from: accounts[3]});
		const uintOYwOVLO = BigInt("1739")
		const addressLcFthau = accounts[0]
		const uintTqowbmq = BigInt("1627")
		const byteR15hMfU = "0x180b1a09020f070c1a0d0703071f160a0815140519171d1400201b1f0e0f1d11"
		const addressvD6acnc = accounts[4]
		const boolt1VGQ0M = await ReviveB9Ad6V6.increaseAllowance.call(addressLcFthau, uintOYwOVLO, {from: accounts[5]});
//		const uint256HPRiA5N = await ReviveB9Ad6V6.recoverERC20.call(uintTqowbmq, {from: accounts[4]});
//		const uint256P1rfDgu = await ReviveB9Ad6V6.tokensLocked.call(addressvD6acnc, byteR15hMfU, {from: accounts[3]});

		assert.equal(boolt1VGQ0M, true)
		await expect(ReviveB9Ad6V6.recoverERC20.call(uintTqowbmq, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveIIKYUv7 = await Revive.new({from: accounts[3]});
		const byteVOo3Kx = "0x081a08130f081e0e1413181b0b09040a1a021e00170513020216030c1c160a1f"
		const addresss2EdIcR = accounts[0]
		const bytepDcLBYJ = "0x0d1a1219181a04041f121a11110c0f161c1002021e1112110920101e17020f18"
		const addressGRd9k6V = accounts[2]
		const uintE0PQ6Z9 = BigInt("1435")
		const addresstWlcjOU = accounts[1]
		const uint256y4zMJ9g = await ReviveIIKYUv7.tokensUnlockable.call(addresss2EdIcR, byteVOo3Kx, {from: accounts[5]});
		const uint256dlkB04o = await ReviveIIKYUv7.tokensLocked.call(addressGRd9k6V, bytepDcLBYJ, {from: accounts[1]});
//		const uint256AlhdyZ8 = await ReviveIIKYUv7.recoverERC20.call(uintE0PQ6Z9, {from: accounts[1]});
//		const addressUpW38RY = await ReviveIIKYUv7.transferOwnership.call(addresstWlcjOU, {from: accounts[0]});

		assert.equal(uint256dlkB04o, BigInt("0"))
		assert.equal(uint256y4zMJ9g, BigInt("0"))
		await expect(ReviveIIKYUv7.recoverERC20.call(uintE0PQ6Z9, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const RevivedTEwHjv = await Revive.new({from: accounts[5]});
		const addressLGx9ELp = accounts[5]
		const uintCJSlCDL = BigInt("582")
		const addresswIINa94 = accounts[4]
		const uintgsKgZn = BigInt("682")
		const addresslAPtdGE = "0x0000000000000000000000000000000000000001"
		const addressBxpLjf = accounts[0]
		const uint256VgKU6nN = await RevivedTEwHjv.getUnlockableTokens.call(addressLGx9ELp, {from: accounts[5]});
		const boolay2pROn = await RevivedTEwHjv.increaseAllowance.call(addresswIINa94, uintCJSlCDL, {from: accounts[4]});
//		const boolDputRnw = await RevivedTEwHjv.transferFrom.call(addressBxpLjf, addresslAPtdGE, uintgsKgZn, {from: accounts[3]});

		assert.equal(boolay2pROn, true)
		assert.equal(uint256VgKU6nN, BigInt("0"))
		await expect(RevivedTEwHjv.transferFrom.call(addressBxpLjf, addresslAPtdGE, uintgsKgZn, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveRG8Wum2 = await Revive.new({from: accounts[1]});
		const uintok6fpyU = BigInt("547")
		const addressBI7wQKr = accounts[3]
		const addressdFMXz26 = accounts[2]
		const uintW6mNBPg = BigInt("272")
		const uintfgNkxo = BigInt("1587")
		const byte0CTwmK = "0x0c00121c08190116141b1d1809120a061f14080203110d1c091f08150b1b1305"
		const addressfSot8il = accounts[1]
		const addressQWc4aRS = await ReviveRG8Wum2.owner.call({from: accounts[2]});
		const boolvhYpkxp = await ReviveRG8Wum2.increaseAllowance.call(addressBI7wQKr, uintok6fpyU, {from: accounts[3]});
		const uint256UsYWEVL = await ReviveRG8Wum2.totalBalanceOf.call(addressdFMXz26, {from: accounts[0]});
//		const uint256RSIOmgs = await ReviveRG8Wum2.recoverERC20.call(uintW6mNBPg, {from: accounts[3]});
//		const uint256lFS9ZMa = await ReviveRG8Wum2.tokensLockedAtTime.call(addressfSot8il, byte0CTwmK, uintfgNkxo, {from: accounts[1]});
//		const boolsUetGrp = await ReviveRG8Wum2.isOwner.call({from: accounts[4]});

		assert.equal(addressQWc4aRS, 0x41Cb9980d82c6000758f76EB07016727c2296104)
		assert.equal(boolvhYpkxp, true)
		assert.equal(uint256UsYWEVL, BigInt("0"))
		await expect(ReviveRG8Wum2.recoverERC20.call(uintW6mNBPg, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const Reviveq7Zn6ad = await Revive.new({from: accounts[2]});
		const addressu6EKEb7 = accounts[0]
		const uintfk0W03Z = BigInt("28")
		const addressGA0EEeT = accounts[2]
		const uintCfLybRP = BigInt("119")
		const bytelKamgw6 = "0x04011d13130d150c0b0910040903131c170b120d0605080f19071d1a14160a10"
		const addressAhR8hJ = accounts[4]
		const addressS3NReHX = accounts[1]
		const uintyLbDt2g = BigInt("440")
		const bytekhAvFQv = "0x140a1b08021e07151d1b090904051e0a1a1e1718140316101417191d14060d0a"
		const addressyJuMh1Q = accounts[1]
		const bytej0rLPZn = "0x120d0f02020b12090317050115010a030f04060d1b061b181b1617021e150705"
		const addressAPxHjqV = accounts[5]
		const addressIJYmup4 = accounts[3]
		const uint256sPo3zsT = await Reviveq7Zn6ad.balanceOf.call(addressu6EKEb7, {from: "0x0000000000000000000000000000000000000001"});
//		const addressPLesuT = await Reviveq7Zn6ad.recoverERC20.call(addressGA0EEeT, uintfk0W03Z, {from: accounts[2]});
//		const uint256UiLfmH = await Reviveq7Zn6ad.tokensLockedAtTime.call(addressAhR8hJ, bytelKamgw6, uintCfLybRP, {from: accounts[3]});
//		const uint256V5ssvZh = await Reviveq7Zn6ad.unlock.call(addressS3NReHX, {from: accounts[2]});
//		const uint2566rmmaO = await Reviveq7Zn6ad.tokensLockedAtTime.call(addressyJuMh1Q, bytekhAvFQv, uintyLbDt2g, {from: accounts[3]});
//		const uint256XgvUJu5 = await Reviveq7Zn6ad.tokensLocked.call(addressAPxHjqV, bytej0rLPZn, {from: accounts[3]});
//		const uint256d5HCZ1B = await Reviveq7Zn6ad.totalBalanceOf.call(addressIJYmup4, {from: accounts[0]});

		assert.equal(uint256sPo3zsT, BigInt("0"))
		await expect(Reviveq7Zn6ad.recoverERC20.call(addressGA0EEeT, uintfk0W03Z, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveE9l9Wkt = await Revive.new({from: accounts[4]});
		const addressQNPLCZx = accounts[4]
		const addressnCa0Ct1 = accounts[6]
		const uintyg18B81 = BigInt("1832")
		const uint256x8Rc0sp = await ReviveE9l9Wkt.unlock.call(addressQNPLCZx, {from: accounts[2]});
		const uint256JUnhT3 = await ReviveE9l9Wkt.unlock.call(addressnCa0Ct1, {from: accounts[4]});
//		const uint256ZhXbj9n = await ReviveE9l9Wkt.recoverERC20.call(uintyg18B81, {from: accounts[0]});

		assert.equal(uint256JUnhT3, BigInt("0"))
		assert.equal(uint256x8Rc0sp, BigInt("0"))
		await expect(ReviveE9l9Wkt.recoverERC20.call(uintyg18B81, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveE9l9Wkt = await Revive.new({from: accounts[4]});
		const uintRdT9rXc = BigInt("1887")
		const addressBpv81wu = accounts[7]
//		const uint256ML7xO2f = await ReviveE9l9Wkt.recoverERC20.call(uintRdT9rXc, {from: accounts[1]});
//		const uint256JUnhT3 = await ReviveE9l9Wkt.unlock.call(addressBpv81wu, {from: accounts[4]});

		await expect(ReviveE9l9Wkt.recoverERC20.call(uintRdT9rXc, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const Reviveq7Zn6ad = await Revive.new({from: accounts[2]});
		const uinttAkjvHH = BigInt("1348")
		const uintsh7Qxy = BigInt("15")
		const uintFiKpx77 = BigInt("85")
		const bytem7hI7pL = "0x1d0e0c200e12120f1512180e1712111a07110601121e09121208021417190f14"
//		const uint256lVMejqJ = await Reviveq7Zn6ad.recoverERC20.call(uinttAkjvHH, {from: accounts[3]});
//		const booldq70C8a = await Reviveq7Zn6ad.lock.call(bytem7hI7pL, uintFiKpx77, uintsh7Qxy, {from: accounts[1]});

		await expect(Reviveq7Zn6ad.recoverERC20.call(uinttAkjvHH, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveE9l9Wkt = await Revive.new({from: accounts[4]});
		const uintO4HyVVO = BigInt("1898")
		const addressKr07bbV = accounts[7]
		const uintuNkXFfe = BigInt("1703")
		const bytey7te3yl = "0x090a170211161f1b0515080a0c0a0a1c0a001c0c131d0b051800190209180d0f"
		const address7hT9J2 = accounts[1]
//		const uint256eSFYGal = await ReviveE9l9Wkt.recoverERC20.call(uintO4HyVVO, {from: accounts[1]});
//		const uint256JUnhT3 = await ReviveE9l9Wkt.unlock.call(addressKr07bbV, {from: accounts[4]});
//		const uint256KVw0uwR = await ReviveE9l9Wkt.tokensLockedAtTime.call(address7hT9J2, bytey7te3yl, uintuNkXFfe, {from: accounts[2]});

		await expect(ReviveE9l9Wkt.recoverERC20.call(uintO4HyVVO, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveE9l9Wkt = await Revive.new({from: accounts[4]});
		const uintcarP7NR = BigInt("764")
		const addressBobW7E4 = accounts[7]
		const byteJfLSFvG = "0x0609060217000f1c1c0312111e140e0918121911060b1d17051d1102180d031c"
		const addressiFS6QCk = accounts[0]
		const addressKpEOK8Q = accounts[1]
		const uint256d8s5PJw = await ReviveE9l9Wkt.totalSupply.call({from: accounts[2]});
//		const uint256XMN2RBX = await ReviveE9l9Wkt.recoverERC20.call(uintcarP7NR, {from: accounts[4]});
//		const uint256JUnhT3 = await ReviveE9l9Wkt.unlock.call(addressBobW7E4, {from: accounts[4]});
//		const uint256bijOJw7 = await ReviveE9l9Wkt.tokensUnlockable.call(addressiFS6QCk, byteJfLSFvG, {from: accounts[2]});
//		const uint256FZNqK0U = await ReviveE9l9Wkt.unlock.call(addressKpEOK8Q, {from: accounts[3]});

		assert.equal(uint256d8s5PJw, BigInt("3000000000000000000000000000"))
		await expect(ReviveE9l9Wkt.recoverERC20.call(uintcarP7NR, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveZRfzkTO = await Revive.new({from: accounts[4]});
		const uintJzqtvg = BigInt("399")
		const uintmZ40nfg = BigInt("1664")
		const uintPoq2cKv = BigInt("1511")
		const byteuNRpIci = "0x060b13030719071c130411120b1a1a021016190c091b020b0619110b0a1d1e1b"
		const addressFO93K98 = accounts[5]
//		const uint256tG9XmW = await ReviveZRfzkTO.recoverERC20.call(uintJzqtvg, {from: accounts[1]});
//		const boolBJPt0qh = await ReviveZRfzkTO.transferWithLock.call(addressFO93K98, byteuNRpIci, uintPoq2cKv, uintmZ40nfg, {from: accounts[4]});

		await expect(ReviveZRfzkTO.recoverERC20.call(uintJzqtvg, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const Reviveq7Zn6ad = await Revive.new({from: accounts[2]});
		const uintgAqOskf = BigInt("614")
		const addressxxcqyTY = accounts[5]
		const uintKeMFPpg = BigInt("266")
		const address9md1i8 = accounts[1]
//		const uint256ZQie1d = await Reviveq7Zn6ad.recoverERC20.call(uintgAqOskf, {from: accounts[0]});
//		const uint256d5HCZ1B = await Reviveq7Zn6ad.totalBalanceOf.call(addressxxcqyTY, {from: accounts[0]});
//		const boolYBKCA6 = await Reviveq7Zn6ad.transfer.call(address9md1i8, uintKeMFPpg, {from: accounts[2]});

		await expect(Reviveq7Zn6ad.recoverERC20.call(uintgAqOskf, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveZRfzkTO = await Revive.new({from: accounts[4]});
		const uintdvuihmT = BigInt("309")
		const uintIVV19P = BigInt("1385")
		const addressFNERUu = accounts[1]
		const uintA5oJYsB = BigInt("1664")
		const uintWLVTgQ1 = BigInt("1511")
		const byterQpYonA = "0x060b13020719071c130411120b1a1a021016190c091b020b0619110b0a1d1e1b"
		const addresslmjhBbw = accounts[5]
//		const uint256keMUOQY = await ReviveZRfzkTO.recoverERC20.call(uintdvuihmT, {from: accounts[0]});
//		const boolEBxxuRI = await ReviveZRfzkTO.transfer.call(addressFNERUu, uintIVV19P, {from: accounts[5]});
//		const boolBJPt0qh = await ReviveZRfzkTO.transferWithLock.call(addresslmjhBbw, byterQpYonA, uintWLVTgQ1, uintA5oJYsB, {from: accounts[4]});

		await expect(ReviveZRfzkTO.recoverERC20.call(uintdvuihmT, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const RevivedTEwHjv = await Revive.new({from: accounts[5]});
		const uintvbYXDRk = BigInt("1604")
		const uintUi2jJzl = BigInt("53")
		const byteC12jZZ = "0x180a010d03141a00131f1800110c051f1312040a08181b11021220121c111412"
		const addressawj66Q6 = accounts[3]
		const addresscVv7Su = accounts[6]
//		const uint256q4YaprC = await RevivedTEwHjv.recoverERC20.call(uintvbYXDRk, {from: accounts[4]});
//		const uint256wNjawX4 = await RevivedTEwHjv.tokensLockedAtTime.call(addressawj66Q6, byteC12jZZ, uintUi2jJzl, {from: accounts[3]});
//		const uint256p3amPWs = await RevivedTEwHjv.totalSupply.call({from: accounts[5]});
//		const uint256VgKU6nN = await RevivedTEwHjv.getUnlockableTokens.call(addresscVv7Su, {from: accounts[5]});

		await expect(RevivedTEwHjv.recoverERC20.call(uintvbYXDRk, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveUA9T4oI = await Revive.new({from: accounts[5]});
		const uintlLrThyz = BigInt("1586")
		const uintpSl4md = BigInt("330")
		const addresseRrbNw6 = accounts[0]
//		const uint256pmgMLTT = await ReviveUA9T4oI.recoverERC20.call(uintlLrThyz, {from: accounts[0]});
//		await ReviveUA9T4oI.renounceOwnership.call({from: accounts[0]});
//		const boolCxpVvmW = await ReviveUA9T4oI.approve.call(addresseRrbNw6, uintpSl4md, {from: accounts[3]});

		await expect(ReviveUA9T4oI.recoverERC20.call(uintlLrThyz, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const Reviveq7Zn6ad = await Revive.new({from: accounts[2]});
		const uintC8ehjeU = BigInt("1290")
		const uintutybOnX = BigInt("994")
		const uinte5DK0v = BigInt("558")
		const byteoPaouUe = "0x200516102004030e0610121219020d1d0311131502001c071b060a161019111d"
		const addresshwoV5D9 = accounts[0]
		const address44cvke = accounts[5]
//		const uint256suIkTZ0 = await Reviveq7Zn6ad.recoverERC20.call(uintC8ehjeU, {from: accounts[4]});
//		const boolhqL8z8U = await Reviveq7Zn6ad.transferWithLock.call(addresshwoV5D9, byteoPaouUe, uinte5DK0v, uintutybOnX, {from: accounts[2]});
//		const uint256d5HCZ1B = await Reviveq7Zn6ad.totalBalanceOf.call(address44cvke, {from: accounts[0]});

		await expect(Reviveq7Zn6ad.recoverERC20.call(uintC8ehjeU, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const RevivekXsWAPD = await Revive.new({from: accounts[2]});
		const uintRkn2ces = BigInt("977")
		const addressCCHPsf9 = accounts[0]
//		const uint256N3yaUdA = await RevivekXsWAPD.recoverERC20.call(uintRkn2ces, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256u1G5unv = await RevivekXsWAPD.totalSupply.call({from: accounts[4]});
//		const addressmgfQikZ = await RevivekXsWAPD.transferOwnership.call(addressCCHPsf9, {from: accounts[3]});
//		await RevivekXsWAPD.renounceOwnership.call({from: accounts[1]});

		await expect(RevivekXsWAPD.recoverERC20.call(uintRkn2ces, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});
})