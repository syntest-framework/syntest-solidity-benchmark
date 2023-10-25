const LIBERAPAY = artifacts.require("LIBERAPAY");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('LIBERAPAY', (accounts) => {
	it('test for LIBERAPAY', async () => {
		const LIBERAPAYHB8BrEx = await LIBERAPAY.new({from: "0x0000000000000000000000000000000000000001"});
		const uintuiBaIM = BigInt("1234")
		const addressJxKME0Q = accounts[2]
		const addressDNVOA9B = accounts[0]
		await LIBERAPAYHB8BrEx.showLockState.call(addressJxKME0Q, uintuiBaIM, {from: accounts[1]});
		const boolshvxXKC = await LIBERAPAYHB8BrEx.unfreezeAccount.call(addressDNVOA9B, {from: accounts[4]});
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYssjSXT0 = await LIBERAPAY.new({from: accounts[2]});
		const uinteldEOGv = BigInt("456")
		const addressNzZZIzM = accounts[0]
		const addressU9VbS1k = accounts[1]
		const address8gQSCn = accounts[0]
		const addressnIOygla = "0x0000000000000000000000000000000000000001"
		const addressytreDxh = accounts[1]
		const boolbOMdWSa = await LIBERAPAYssjSXT0.transferFrom.call(addressU9VbS1k, addressNzZZIzM, uinteldEOGv, {from: accounts[0]});
		const boolegwfbqh = await LIBERAPAYssjSXT0.unfreezeAccount.call(address8gQSCn, {from: accounts[3]});
		const boolcLKQjmE = await LIBERAPAYssjSXT0.acceptOwnership.call({from: accounts[1]});
		const addresseMtpQYk = await LIBERAPAYssjSXT0.notFrozen.call(addressnIOygla, {from: accounts[4]});
		const uint256T0IgDtx = await LIBERAPAYssjSXT0.balanceOf.call(addressytreDxh, {from: accounts[1]});

		await expect(LIBERAPAYssjSXT0.transferFrom.call(addressU9VbS1k, addressNzZZIzM, uinteldEOGv, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYeAAgUe9 = await LIBERAPAY.new({from: accounts[3]});
		const addresswKlLk6n = accounts[1]
		const uintT5D3Idc = BigInt("1044")
		const addressslOZ6fR = accounts[1]
		const address3CbMUY = accounts[2]
		const addressSbdqUH7 = accounts[2]
		const uinttHGntqE = BigInt("1532")
		const addressthE8uxE = accounts[1]
		const addressLRcRJsY = await LIBERAPAYeAAgUe9.transferOwnership.call(addresswKlLk6n, {from: accounts[3]});
		const boolBEvtqRW = await LIBERAPAYeAAgUe9.decreaseAllowance.call(addressslOZ6fR, uintT5D3Idc, {from: accounts[4]});
		await LIBERAPAYeAAgUe9.f.call({from: accounts[5]});
		const uint256cGit0Ht = await LIBERAPAYeAAgUe9.currentBalanceOf.call(address3CbMUY, {from: "0x0000000000000000000000000000000000000001"});
		const boolwkyNS9 = await LIBERAPAYeAAgUe9.freezeAccount.call(addressSbdqUH7, {from: "0x0000000000000000000000000000000000000001"});
		const boolXDyYtK = await LIBERAPAYeAAgUe9.distribute.call(addressthE8uxE, uinttHGntqE, {from: accounts[2]});

		await expect(LIBERAPAYeAAgUe9.decreaseAllowance.call(addressslOZ6fR, uintT5D3Idc, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYC4JSDyu = await LIBERAPAY.new({from: accounts[3]});
		const uintCdMhUVQ = BigInt("1543")
		const addressx6Xtgy = accounts[2]
		const uintsv5ypel = BigInt("1333")
		const addressX4yqoNh = "0x0000000000000000000000000000000000000001"
		const uintoVFBAHF = BigInt("66")
		await LIBERAPAYC4JSDyu.whenPaused.call({from: accounts[4]});
		const boolR87Te1u = await LIBERAPAYC4JSDyu.burnFrom.call(addressx6Xtgy, uintCdMhUVQ, {from: accounts[5]});
		const boolKDPzR5x = await LIBERAPAYC4JSDyu.decreaseAllowance.call(addressX4yqoNh, uintsv5ypel, {from: accounts[2]});
		const boolrc6HB9 = await LIBERAPAYC4JSDyu.burn.call(uintoVFBAHF, {from: accounts[3]});

		await expect(LIBERAPAYC4JSDyu.whenPaused.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYjbzbnaS = await LIBERAPAY.new({from: accounts[4]});
		const addressInBhibN = accounts[4]
		const uintvfO8hxc = BigInt("70")
		const addressKcmRURI = accounts[2]
		const uintaKyVNv = BigInt("1272")
		const uintAwOwrh = BigInt("1720")
		const addressoANBULT = accounts[1]
		const addressPLY7ZrJ = accounts[1]
		const uint256EXW8F9Z = await LIBERAPAYjbzbnaS.currentBalanceOf.call(addressInBhibN, {from: accounts[3]});
		const booldeeWAPY = await LIBERAPAYjbzbnaS.transfer.call(addressKcmRURI, uintvfO8hxc, {from: accounts[3]});
		await LIBERAPAYjbzbnaS.whenNotPaused.call({from: accounts[0]});
		const uint2561T0rQx = await LIBERAPAYjbzbnaS.totalSupply.call({from: accounts[2]});
		const boolEcbR3H8 = await LIBERAPAYjbzbnaS.lock.call(addressoANBULT, uintAwOwrh, uintaKyVNv, {from: accounts[2]});
		const addressuewFnE8 = await LIBERAPAYjbzbnaS.upgradeTo.call(addressPLY7ZrJ, {from: accounts[3]});

		assert.equal(uint256EXW8F9Z, BigInt("3000000000000000000000000000"))
		await expect(LIBERAPAYjbzbnaS.transfer.call(addressKcmRURI, uintvfO8hxc, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYD1uFHBp = await LIBERAPAY.new({from: accounts[3]});
		const addressxRIrZ1H = accounts[0]
		const bool4hh16J = await LIBERAPAYD1uFHBp.freezeAccount.call(addressxRIrZ1H, {from: accounts[3]});
		await LIBERAPAYD1uFHBp.f.call({from: accounts[4]});
		await LIBERAPAYD1uFHBp.onlyOwner.call({from: accounts[5]});

		assert.equal(bool4hh16J, true)
		await expect(LIBERAPAYD1uFHBp.f.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYoNjneqo = await LIBERAPAY.new({from: accounts[2]});
		const addressAKUgvZY = accounts[1]
		const uint256jX87ff2 = await LIBERAPAYoNjneqo.getNowTime.call({from: accounts[1]});
		await LIBERAPAYoNjneqo.whenPaused.call({from: accounts[4]});
		await LIBERAPAYoNjneqo.pause.call({from: accounts[4]});
		const uint256Z7IYjgV = await LIBERAPAYoNjneqo.balanceOf.call(addressAKUgvZY, {from: accounts[4]});

		assert.equal(uint256jX87ff2, BigInt("1630229698"))
		await expect(LIBERAPAYoNjneqo.whenPaused.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYssjSXT0 = await LIBERAPAY.new({from: accounts[2]});
		const addressTrXMc0 = accounts[2]
		const uintHyRoH5p = BigInt("456")
		const addressIJz2upU = accounts[1]
		const addressSNgAr8U = accounts[1]
		const addressznSP1vH = accounts[2]
		const addressxXbmsfb = await LIBERAPAYssjSXT0.upgradeTo.call(addressTrXMc0, {from: accounts[2]});
		const boolbOMdWSa = await LIBERAPAYssjSXT0.transferFrom.call(addressSNgAr8U, addressIJz2upU, uintHyRoH5p, {from: accounts[0]});
		const uint256T0IgDtx = await LIBERAPAYssjSXT0.balanceOf.call(addressznSP1vH, {from: accounts[1]});

		await expect(LIBERAPAYssjSXT0.transferFrom.call(addressSNgAr8U, addressIJz2upU, uintHyRoH5p, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYssjSXT0 = await LIBERAPAY.new({from: accounts[2]});
		const addressdcTQxHO = accounts[2]
		const uintDi8HC24 = BigInt("1014")
		const addressctOfo79 = accounts[5]
		const uint256T0IgDtx = await LIBERAPAYssjSXT0.balanceOf.call(addressdcTQxHO, {from: accounts[1]});
		await LIBERAPAYssjSXT0.pause.call({from: "0x0000000000000000000000000000000000000001"});
		const boolCU15lsq = await LIBERAPAYssjSXT0.transfer.call(addressctOfo79, uintDi8HC24, {from: accounts[2]});

		assert.equal(uint256T0IgDtx, BigInt("3000000000000000000000000000"))
		await expect(LIBERAPAYssjSXT0.pause.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYFRIyD6k = await LIBERAPAY.new({from: accounts[4]});
		const addresscDdshXs = accounts[1]
		const addressHRp4Vv4 = accounts[3]
		const addressGC91kKF = accounts[1]
		const uintxM6fTOD = BigInt("1724")
		const addressLaQTGhx = accounts[0]
		const uint256N7wi7n = await LIBERAPAYFRIyD6k.allowance.call(addressHRp4Vv4, addresscDdshXs, {from: accounts[4]});
		const uint256BAcG93s = await LIBERAPAYFRIyD6k.getNowTime.call({from: accounts[1]});
		const uint256l5CeFxL = await LIBERAPAYFRIyD6k.currentBalanceOf.call(addressGC91kKF, {from: accounts[0]});
		await LIBERAPAYFRIyD6k.pause.call({from: accounts[4]});
		const boolAD9NNiq = await LIBERAPAYFRIyD6k.mint.call(addressLaQTGhx, uintxM6fTOD, {from: "0x0000000000000000000000000000000000000001"});
		await LIBERAPAYFRIyD6k.whenNotPaused.call({from: accounts[0]});

		assert.equal(uint256BAcG93s, BigInt("1630229694"))
		assert.equal(uint256N7wi7n, BigInt("0"))
		assert.equal(uint256l5CeFxL, BigInt("0"))
		await expect(LIBERAPAYFRIyD6k.pause.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYjbzbnaS = await LIBERAPAY.new({from: accounts[4]});
		const uint1n5Wna = BigInt("1796")
		const addresskKiGNTc = accounts[4]
		const uintFBZoCB = BigInt("70")
		const addressqFYFVXR = accounts[2]
		const boolHhNogHG = await LIBERAPAYjbzbnaS.approve.call(addresskKiGNTc, uint1n5Wna, {from: accounts[0]});
		const booldeeWAPY = await LIBERAPAYjbzbnaS.transfer.call(addressqFYFVXR, uintFBZoCB, {from: accounts[3]});

		assert.equal(boolHhNogHG, true)
		await expect(LIBERAPAYjbzbnaS.transfer.call(addressqFYFVXR, uintFBZoCB, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYjbzbnaS = await LIBERAPAY.new({from: accounts[4]});
		const uintVj7spRy = BigInt("622")
		const addressTVIG1QO = "0x0000000000000000000000000000000000000001"
		const addressDnQlciL = accounts[4]
		const uintF4mzmNs = BigInt("70")
		const addressMXFRBdM = accounts[2]
		const addressYV7VNya = accounts[1]
		const boolPBCp53R = await LIBERAPAYjbzbnaS.increaseAllowance.call(addressTVIG1QO, uintVj7spRy, {from: accounts[1]});
		const uint256EXW8F9Z = await LIBERAPAYjbzbnaS.currentBalanceOf.call(addressDnQlciL, {from: accounts[3]});
		const booldeeWAPY = await LIBERAPAYjbzbnaS.transfer.call(addressMXFRBdM, uintF4mzmNs, {from: accounts[3]});
		const uint2561T0rQx = await LIBERAPAYjbzbnaS.totalSupply.call({from: accounts[2]});
		const addressuewFnE8 = await LIBERAPAYjbzbnaS.upgradeTo.call(addressYV7VNya, {from: accounts[3]});

		assert.equal(boolPBCp53R, true)
		assert.equal(uint256EXW8F9Z, BigInt("3000000000000000000000000000"))
		await expect(LIBERAPAYjbzbnaS.transfer.call(addressMXFRBdM, uintF4mzmNs, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYjbzbnaS = await LIBERAPAY.new({from: accounts[4]});
		const addressJytAaUZ = accounts[4]
		const uintsUkYmKW = BigInt("53")
		const addressqtmn53A = accounts[1]
		const addressssLWGL4 = accounts[1]
		const addressiGrndfg = accounts[1]
		const uint256EXW8F9Z = await LIBERAPAYjbzbnaS.currentBalanceOf.call(addressJytAaUZ, {from: accounts[3]});
		const uint2561T0rQx = await LIBERAPAYjbzbnaS.totalSupply.call({from: accounts[2]});
		const boolIxnJ8kP = await LIBERAPAYjbzbnaS.transferFrom.call(addressssLWGL4, addressqtmn53A, uintsUkYmKW, {from: accounts[4]});
		const addressuewFnE8 = await LIBERAPAYjbzbnaS.upgradeTo.call(addressiGrndfg, {from: accounts[3]});

		assert.equal(uint2561T0rQx, BigInt("3000000000000000000000000000"))
		assert.equal(uint256EXW8F9Z, BigInt("3000000000000000000000000000"))
		await expect(LIBERAPAYjbzbnaS.transferFrom.call(addressssLWGL4, addressqtmn53A, uintsUkYmKW, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYssjSXT0 = await LIBERAPAY.new({from: accounts[2]});
		const uintdBMNDm = BigInt("1447")
		const addresse8V8dtp = accounts[0]
		const uintZI6pALZ = BigInt("456")
		const addresstUxJA0a = accounts[1]
		const addressy51o6jG = accounts[2]
		const addressm3YQnj = accounts[1]
		const addressZqzjaCN = accounts[0]
		const addressUmYb9P = accounts[2]
		const booljE76gAd = await LIBERAPAYssjSXT0.mint.call(addresse8V8dtp, uintdBMNDm, {from: accounts[2]});
		const boolbOMdWSa = await LIBERAPAYssjSXT0.transferFrom.call(addressy51o6jG, addresstUxJA0a, uintZI6pALZ, {from: accounts[0]});
		await LIBERAPAYssjSXT0.unpause.call({from: accounts[4]});
		const uint256T0IgDtx = await LIBERAPAYssjSXT0.balanceOf.call(addressm3YQnj, {from: accounts[1]});
		const uint256Y9wF8c = await LIBERAPAYssjSXT0.allowance.call(addressUmYb9P, addressZqzjaCN, {from: accounts[2]});

		await expect(LIBERAPAYssjSXT0.mint.call(addresse8V8dtp, uintdBMNDm, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYjbzbnaS = await LIBERAPAY.new({from: accounts[4]});
		const addressrPSm83r = accounts[5]
		const uintmhoPHwp = BigInt("1668")
		const addressdpK0XG = accounts[5]
		const uintEQCRVvG = BigInt("70")
		const addressUJFQhmW = accounts[2]
		const uint256EXW8F9Z = await LIBERAPAYjbzbnaS.currentBalanceOf.call(addressrPSm83r, {from: accounts[3]});
		await LIBERAPAYjbzbnaS.showLockState.call(addressdpK0XG, uintmhoPHwp, {from: accounts[3]});
		const booldeeWAPY = await LIBERAPAYjbzbnaS.transfer.call(addressUJFQhmW, uintEQCRVvG, {from: accounts[3]});

		assert.equal(uint256EXW8F9Z, BigInt("0"))
		await expect(LIBERAPAYjbzbnaS.showLockState.call(addressdpK0XG, uintmhoPHwp, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYjbzbnaS = await LIBERAPAY.new({from: accounts[4]});
		const uintf6VaXSZ = BigInt("1353")
		const uintnYrSuAJ = BigInt("65")
		const addressnGWfp7o = accounts[3]
		const boolLaxz6Be = await LIBERAPAYjbzbnaS.burn.call(uintf6VaXSZ, {from: accounts[4]});
		await LIBERAPAYjbzbnaS.whenNotPaused.call({from: accounts[1]});
		const booldeeWAPY = await LIBERAPAYjbzbnaS.transfer.call(addressnGWfp7o, uintnYrSuAJ, {from: accounts[3]});

		assert.equal(boolLaxz6Be, true)
		await expect(LIBERAPAYjbzbnaS.whenNotPaused.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYCqX72NQ = await LIBERAPAY.new({from: accounts[5]});
		const uintOFSTBg3 = BigInt("1637")
		const addresswpO1J3U = accounts[1]
		const uintnQNmqY9 = BigInt("249")
		const addressWVtG4t3 = "0x0000000000000000000000000000000000000001"
		const uint256KjTWkAW = await LIBERAPAYCqX72NQ.totalSupply.call({from: accounts[4]});
		const boolbDzu3Pp = await LIBERAPAYCqX72NQ.burnFrom.call(addresswpO1J3U, uintOFSTBg3, {from: accounts[2]});
		const boolAXECgtC = await LIBERAPAYCqX72NQ.transfer.call(addressWVtG4t3, uintnQNmqY9, {from: accounts[5]});

		assert.equal(uint256KjTWkAW, BigInt("3000000000000000000000000000"))
		await expect(LIBERAPAYCqX72NQ.burnFrom.call(addresswpO1J3U, uintOFSTBg3, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYssjSXT0 = await LIBERAPAY.new({from: accounts[2]});
		const uintisDM42w = BigInt("283")
		const uintCIysKw = BigInt("2026")
		const addressmVMja2 = accounts[0]
		const uintaZxwp6o = BigInt("1745")
		const addressAp5Humi = accounts[4]
		const uintJkZuQ1W = BigInt("471")
		const addresspUwt0qQ = accounts[1]
		const uintw0qCvn6 = BigInt("456")
		const addressAzh6oGi = accounts[3]
		const addressM6InnVJ = accounts[1]
		const boolovS6iPl = await LIBERAPAYssjSXT0.lock.call(addressmVMja2, uintCIysKw, uintisDM42w, {from: accounts[2]});
		await LIBERAPAYssjSXT0.showLockState.call(addressAp5Humi, uintaZxwp6o, {from: accounts[1]});
		await LIBERAPAYssjSXT0.showLockState.call(addresspUwt0qQ, uintJkZuQ1W, {from: "0x0000000000000000000000000000000000000001"});
		const boolbOMdWSa = await LIBERAPAYssjSXT0.transferFrom.call(addressM6InnVJ, addressAzh6oGi, uintw0qCvn6, {from: accounts[0]});

		await expect(LIBERAPAYssjSXT0.lock.call(addressmVMja2, uintCIysKw, uintisDM42w, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYoObStWY = await LIBERAPAY.new({from: accounts[3]});
		const uintwwsTkdV = BigInt("1718")
		const addressQZTIm0k = accounts[2]
		const uintq3IX9v8 = BigInt("1429")
		const addressv5kT4ff = accounts[3]
		const uintQCQnXM5 = BigInt("2034")
		const uintz6lP0FT = BigInt("1255")
		const addressu3j5Pkw = accounts[4]
		await LIBERAPAYoObStWY.pause.call({from: accounts[3]});
		const boolt5Cv9Vw = await LIBERAPAYoObStWY.distribute.call(addressQZTIm0k, uintwwsTkdV, {from: accounts[3]});
		const boolSFwiEM4 = await LIBERAPAYoObStWY.distribute.call(addressv5kT4ff, uintq3IX9v8, {from: accounts[0]});
		const booleo01RZb = await LIBERAPAYoObStWY.lock.call(addressu3j5Pkw, uintz6lP0FT, uintQCQnXM5, {from: accounts[0]});
		await LIBERAPAYoObStWY.whenNotPaused.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(LIBERAPAYoObStWY.pause.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYssjSXT0 = await LIBERAPAY.new({from: accounts[2]});
		const addresscDun1v = "0x0000000000000000000000000000000000000001"
		const uintNTid4sq = BigInt("456")
		const addresss0K0rin = accounts[3]
		const addressx15Yt7O = accounts[1]
		const uint256zwuVatP = await LIBERAPAYssjSXT0.totalSupply.call({from: accounts[4]});
		const boolrmll50o = await LIBERAPAYssjSXT0.unfreezeAccount.call(addresscDun1v, {from: accounts[2]});
		const boolbOMdWSa = await LIBERAPAYssjSXT0.transferFrom.call(addressx15Yt7O, addresss0K0rin, uintNTid4sq, {from: accounts[0]});

		assert.equal(uint256zwuVatP, BigInt("3000000000000000000000000000"))
		await expect(LIBERAPAYssjSXT0.unfreezeAccount.call(addresscDun1v, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})