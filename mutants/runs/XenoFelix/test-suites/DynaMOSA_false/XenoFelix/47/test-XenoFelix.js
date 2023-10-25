const XenoFelix = artifacts.require("XenoFelix");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('XenoFelix', (accounts) => {
	it('test for XenoFelix', async () => {
		const stringvd5DDHl = "fDxtMzabxs8CX12QQ4zUg2XQ41FY8wiDfaB0bPToOoBOoUAsUM2zfLafab9vACod2KQeG9oltLOROHnxiWg"
		const stringsgtmDpq = "NvnSC3DRVdT8typDxqGwI"
		const uinto6FKLNY = BigInt("653")
		const uintnscLiz5 = BigInt("106")
		const XenoFelixv46bkHs = await XenoFelix.new(stringvd5DDHl, stringsgtmDpq, uinto6FKLNY, uintnscLiz5, {from: accounts[2]});
		const addressvoGd7aX = accounts[2]
		const uintseFazTK = BigInt("128")
		const addressNOIgmOq = "0x0000000000000000000000000000000000000001"
		const boolFjR6iPP = await XenoFelixv46bkHs.paused.call({from: accounts[1]});
		const addresszbGTDgb = await XenoFelixv46bkHs.notFrozen.call(addressvoGd7aX, {from: accounts[4]});
		const boolQVPWvaR = await XenoFelixv46bkHs.approve.call(addressNOIgmOq, uintseFazTK, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolFjR6iPP, false)
		await expect(XenoFelixv46bkHs.notFrozen.call(addressvoGd7aX, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const XenoFelixeKbwTh = await XenoFelix.new({from: accounts[2]});
		const addressCISEsHR = "0x0000000000000000000000000000000000000001"
		const uint9a68Yf = BigInt("989")
		const addressUSGPBdc = accounts[0]
		const addresss7zv6h3 = accounts[0]
		const addresss9Nu89F = await XenoFelixeKbwTh.addPauser.call(addressCISEsHR, {from: accounts[2]});
		const boolcTOp8cH = await XenoFelixeKbwTh.transferFrom.call(addresss7zv6h3, addressUSGPBdc, uint9a68Yf, {from: accounts[3]});
		await XenoFelixeKbwTh.unpause.call({from: accounts[2]});
		await XenoFelixeKbwTh.onlyPauser.call({from: accounts[5]});
		await XenoFelixeKbwTh.onlyNewOwner.call({from: accounts[2]});
	});

	it('test for XenoFelix', async () => {
		const stringDrj5kqF = "qzxyUGvxzxsSodZfrxG56Bw6exwGCa7fb9xb"
		const stringgexioYy = "fTMwoYTTkk9F2IKAEzouwZ"
		const uintH2ZNfgZ = BigInt("120")
		const XenoFelixqUQOqRO = await XenoFelix.new(stringDrj5kqF, stringgexioYy, uintH2ZNfgZ, {from: accounts[0]});
		const addressuRTMV5h = accounts[0]
		const addressXJrSBOm = accounts[0]
		const address6WnpkN = accounts[4]
		const uint256jdTGMc4 = await XenoFelixqUQOqRO.allowance.call(addressXJrSBOm, addressuRTMV5h, {from: accounts[2]});
		await XenoFelixqUQOqRO.unpause.call({from: accounts[5]});
		const address43c7I8 = await XenoFelixqUQOqRO.removePauser.call(address6WnpkN, {from: accounts[0]});
	});

	it('test for XenoFelix', async () => {
		const stringV5rEnHK = "2j4xifq9g89UV4OfrqbucxxL3eU00GyJ3lCb4PPMqkwR4l4qrIr"
		const stringGMBrsIW = "Jy3kEYbVNUNi"
		const uintPCbWVcI = BigInt("210")
		const XenoFelixbgoNLG0 = await XenoFelix.new(stringV5rEnHK, stringGMBrsIW, uintPCbWVcI, {from: accounts[2]});
		const uintxGRDy2A = BigInt("2018")
		const addressqEQNlA = accounts[1]
		const uintjEWWPUh = BigInt("1776")
		const addressnBsMDO5 = accounts[4]
		const addresstrG1Nn3 = accounts[2]
		const addressxJyagUh = await XenoFelixbgoNLG0.burnFrom.call(addressqEQNlA, uintxGRDy2A, {from: accounts[3]});
		const boolpBSbhi = await XenoFelixbgoNLG0.transferFrom.call(addresstrG1Nn3, addressnBsMDO5, uintjEWWPUh, {from: accounts[5]});
	});

	it('test for XenoFelix', async () => {
		const stringHGXqJPC = "sLVlSnms95sgyev29xBQku9g"
		const stringNgLmwdl = "3rxe4EvdUjSW7cvMWpsIXixKXpX92aMhCx5rEWsTRh07YOmM"
		const uintR9sB2qj = BigInt("509")
		const uintF7qOn52 = BigInt("23")
		const XenoFelixzJN5m0p = await XenoFelix.new(stringHGXqJPC, stringNgLmwdl, uintR9sB2qj, uintF7qOn52, {from: accounts[3]});
		const uintusvTZN3 = BigInt("1392")
		const addressUN3vQq = accounts[3]
		const addressHwpSN5B = accounts[0]
		const uintp6oIe02 = BigInt("1493")
		const uinttAR9g8G = BigInt("1592")
		const address7Brl8L = accounts[5]
		const addressyFszjVS = accounts[4]
		const uintXbNTEt4 = BigInt("966")
		const addressPFIDs7c = "0x0000000000000000000000000000000000000001"
		await XenoFelixzJN5m0p.pause.call({from: accounts[1]});
		const booloMmjDbv = await XenoFelixzJN5m0p.transferFrom.call(addressHwpSN5B, addressUN3vQq, uintusvTZN3, {from: accounts[3]});
		const boolloM7cXx = await XenoFelixzJN5m0p.transferWithLock.call(address7Brl8L, uinttAR9g8G, uintp6oIe02, {from: accounts[3]});
		const uint256ixKi2gj = await XenoFelixzJN5m0p.balanceOf.call(addressyFszjVS, {from: accounts[0]});
		const boolBLIfUaM = await XenoFelixzJN5m0p.transfer.call(addressPFIDs7c, uintXbNTEt4, {from: accounts[1]});

		await expect(XenoFelixzJN5m0p.pause.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringHGXqJPC = "sLVlSnms95sgyev29xBQku9g"
		const stringNgLmwdl = "3rxe4EvdUjSW7cvMWpsIXixKXpX92aMhCx5rEWsTRh07YOmM"
		const uintajWJrJx = BigInt("509")
		const uintKiB6h7F = BigInt("23")
		const XenoFelixzJN5m0p = await XenoFelix.new(stringHGXqJPC, stringNgLmwdl, uintajWJrJx, uintKiB6h7F, {from: accounts[3]});
		const addressmWfo0mI = accounts[4]
		const uintMNXIvt9 = BigInt("568")
		const addresstYzDdpL = accounts[3]
		const uintzUql2P = BigInt("1980")
		const uintRAAQ6b = BigInt("449")
		const addresstVHW7Rh = "0x0000000000000000000000000000000000000001"
		const uintvJ3mtlP = BigInt("966")
		const addressYLITq0D = "0x0000000000000000000000000000000000000001"
		const uint256ixKi2gj = await XenoFelixzJN5m0p.balanceOf.call(addressmWfo0mI, {from: accounts[0]});
		const boolOIwBBHg = await XenoFelixzJN5m0p.transfer.call(addresstYzDdpL, uintMNXIvt9, {from: accounts[2]});
		const boolePxtc12 = await XenoFelixzJN5m0p.lock.call(addresstVHW7Rh, uintRAAQ6b, uintzUql2P, {from: accounts[1]});
		const boolBLIfUaM = await XenoFelixzJN5m0p.transfer.call(addressYLITq0D, uintvJ3mtlP, {from: accounts[1]});

		assert.equal(uint256ixKi2gj, BigInt("0"))
		await expect(XenoFelixzJN5m0p.transfer.call(addresstYzDdpL, uintMNXIvt9, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringwW9uMNe = "vWniU1Wyp8WXLa4ICpSbBB5QfSTLXvK"
		const stringXTg3EPq = "9CPlJOUTxif"
		const uintoura8Wb = BigInt("228")
		const XenoFelixuepeNy = await XenoFelix.new(stringwW9uMNe, stringXTg3EPq, uintoura8Wb, {from: "0x0000000000000000000000000000000000000001"});
		const uintEe5jzWo = BigInt("2040")
		const addressE6YGaaK = accounts[3]
		const addresst54xK5B = accounts[4]
		const uintf8G6P28 = BigInt("530")
		const uinteh2IHuq = BigInt("352")
		const addressZbk55d3 = accounts[2]
		const uintanJwWmr = BigInt("1904")
		const addressXP6Bvu2 = "0x0000000000000000000000000000000000000001"
		const addressRNG1x5V = accounts[4]
		const boolAcctMUj = await XenoFelixuepeNy.transfer.call(addressE6YGaaK, uintEe5jzWo, {from: "0x0000000000000000000000000000000000000001"});
		const address3Bmes2 = await XenoFelixuepeNy.notFrozen.call(addresst54xK5B, {from: accounts[2]});
		const boolreowlNt = await XenoFelixuepeNy.transferWithLock.call(addressZbk55d3, uinteh2IHuq, uintf8G6P28, {from: accounts[1]});
		const boolYgJ8CBf = await XenoFelixuepeNy.increaseAllowance.call(addressXP6Bvu2, uintanJwWmr, {from: accounts[1]});
		const addressUtaJCwn = await XenoFelixuepeNy.notFrozen.call(addressRNG1x5V, {from: accounts[0]});
		await XenoFelixuepeNy.whenNotPaused.call({from: accounts[0]});
	});

	it('test for XenoFelix', async () => {
		const stringHGXqJPC = "sLVlSnms95sgyev29xBQku9g"
		const stringNgLmwdl = "3rxe4EvdUjSW7cvMWpsIXixKXpX92aMhCx5rEWsTRh07YOmM"
		const uintbqlTXI = BigInt("509")
		const uintQOyy0R7 = BigInt("23")
		const XenoFelixzJN5m0p = await XenoFelix.new(stringHGXqJPC, stringNgLmwdl, uintbqlTXI, uintQOyy0R7, {from: accounts[3]});
		const uintHtIY1gx = BigInt("1019")
		const addressBPf9epT = accounts[4]
		const addresszws9UK = accounts[5]
		const uintK7yMQlZ = BigInt("966")
		const addressSIbj6Ld = "0x0000000000000000000000000000000000000001"
		const addressQ6eJbb = await XenoFelixzJN5m0p.burnFrom.call(addressBPf9epT, uintHtIY1gx, {from: accounts[4]});
		const uint256ixKi2gj = await XenoFelixzJN5m0p.balanceOf.call(addresszws9UK, {from: accounts[0]});
		const boolBLIfUaM = await XenoFelixzJN5m0p.transfer.call(addressSIbj6Ld, uintK7yMQlZ, {from: accounts[1]});

		await expect(XenoFelixzJN5m0p.burnFrom.call(addressBPf9epT, uintHtIY1gx, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringHGXqJPC = "sLVlSnms95sgyev29xBQku9g"
		const stringNgLmwdl = "3rxe4EvdUjSW7cvMWpsIXixKXpX92aMhCx5rEWsTRh07YOmM"
		const uintnSnhknv = BigInt("509")
		const uintZqP80jh = BigInt("23")
		const XenoFelixzJN5m0p = await XenoFelix.new(stringHGXqJPC, stringNgLmwdl, uintnSnhknv, uintZqP80jh, {from: accounts[3]});
		const addressWs4Kz1W = accounts[4]
		const uintZ8ILJS = BigInt("727")
		const addressZqefq1Q = "0x0000000000000000000000000000000000000001"
		const uintr9jS0zP = BigInt("11")
		const addressHz1eKzR = accounts[2]
		const uint256ixKi2gj = await XenoFelixzJN5m0p.balanceOf.call(addressWs4Kz1W, {from: accounts[0]});
		const boolbyYUWxG = await XenoFelixzJN5m0p.unlock.call(addressZqefq1Q, uintZ8ILJS, {from: accounts[3]});
		await XenoFelixzJN5m0p.unpause.call({from: accounts[4]});
		const addressY8mMGQ = await XenoFelixzJN5m0p.burnFrom.call(addressHz1eKzR, uintr9jS0zP, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256ixKi2gj, BigInt("0"))
		await expect(XenoFelixzJN5m0p.unlock.call(addressZqefq1Q, uintZ8ILJS, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringPKleDry = "a9JTdow5yZhwQR49GGLFerji56sXRjFAsyL7CsuyC9MKuisd"
		const stringQ2aAKEj = "AqcFjuzqyCVxMdnHex5iFOhuKqei26iHWR9daFXrO1Pf0UkBuJ2hMlL21eHXuG8kRt9CK7eyCXygWjWaxprnJ4SecVckkW1d6w"
		const uintdu76Gd = BigInt("77")
		const XenoFelixm0FALR = await XenoFelix.new(stringPKleDry, stringQ2aAKEj, uintdu76Gd, {from: accounts[5]});
		const uintN8mOD6u = BigInt("6")
		const addressqzF0Q6J = accounts[0]
		await XenoFelixm0FALR.onlyNewOwner.call({from: accounts[2]});
		const booly5GNoBC = await XenoFelixm0FALR.transfer.call(addressqzF0Q6J, uintN8mOD6u, {from: accounts[0]});
	});

	it('test for XenoFelix', async () => {
		const stringHGXqJPC = "sLVlSnms95sgyev29xBQku9g"
		const stringNgLmwdl = "3rxe4EvdUjSW7cvMWpsIXixKXpX92aMhCx5rEWsTRh07YOmM"
		const uintRw1wAks = BigInt("509")
		const uintmo6VLsC = BigInt("23")
		const XenoFelixzJN5m0p = await XenoFelix.new(stringHGXqJPC, stringNgLmwdl, uintRw1wAks, uintmo6VLsC, {from: accounts[3]});
		const addressoDGEmV7 = accounts[4]
		const uintMlhRwm5 = BigInt("700")
		const uintbIagA8 = BigInt("1805")
		const addressaBb1Nh2 = accounts[2]
		const uintWolkuLp = BigInt("568")
		const addressR91iM09 = accounts[3]
		const uinttaPDoY = BigInt("1980")
		const uint5L2vmr = BigInt("449")
		const addressILtfltq = "0x0000000000000000000000000000000000000001"
		const uint256ixKi2gj = await XenoFelixzJN5m0p.balanceOf.call(addressoDGEmV7, {from: accounts[0]});
		const boolStMqm3C = await XenoFelixzJN5m0p.transferWithLock.call(addressaBb1Nh2, uintbIagA8, uintMlhRwm5, {from: accounts[3]});
		const boolOIwBBHg = await XenoFelixzJN5m0p.transfer.call(addressR91iM09, uintWolkuLp, {from: accounts[2]});
		const boolePxtc12 = await XenoFelixzJN5m0p.lock.call(addressILtfltq, uint5L2vmr, uinttaPDoY, {from: accounts[1]});

		assert.equal(boolStMqm3C, true)
		assert.equal(uint256ixKi2gj, BigInt("0"))
		await expect(XenoFelixzJN5m0p.transfer.call(addressR91iM09, uintWolkuLp, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringHGXqJPC = "sLVlSnms95sgyev29xBQku9g"
		const stringNgLmwdl = "3rxe4EvdUjSW7cvMWpsIXixKXpX92aMhCx5rEWsTRh07YOmM"
		const uinttRR5Xz5 = BigInt("509")
		const uintiNB0f7m = BigInt("23")
		const XenoFelixzJN5m0p = await XenoFelix.new(stringHGXqJPC, stringNgLmwdl, uinttRR5Xz5, uintiNB0f7m, {from: accounts[3]});
		const addresstRhY7DU = accounts[5]
		const uints4kMoP = BigInt("11")
		const addressflWrkgy = accounts[2]
		const stringECdGhUS = await XenoFelixzJN5m0p.symbol.call({from: accounts[4]});
		const uint256ixKi2gj = await XenoFelixzJN5m0p.balanceOf.call(addresstRhY7DU, {from: accounts[0]});
		const addressY8mMGQ = await XenoFelixzJN5m0p.burnFrom.call(addressflWrkgy, uints4kMoP, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(stringECdGhUS, "3rxe4EvdUjSW7cvMWpsIXixKXpX92aMhCx5rEWsTRh07YOmM")
		assert.equal(uint256ixKi2gj, BigInt("0"))
		await expect(XenoFelixzJN5m0p.burnFrom.call(addressflWrkgy, uints4kMoP, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringbGpz29p = "Tqel7oFbWB3EWbqR4v9G72CzSGfaQMwHZFb6JMkTo"
		const stringNecUJSI = "FlYgY1YWkjh7zVUqFeyRYG77vt4V1DK7KbjAeFW"
		const uintsFeH73K = BigInt("244")
		const XenoFelixi5zMC3z = await XenoFelix.new(stringbGpz29p, stringNecUJSI, uintsFeH73K, {from: accounts[1]});
		const addressLEc65BR = accounts[5]
		const addressIX1HSsW = accounts[3]
		const uint1R3Lj1 = BigInt("728")
		const addressEi5AMF = "0x0000000000000000000000000000000000000001"
		const addressEtl8Gfb = accounts[3]
		await XenoFelixi5zMC3z.whenPaused.call({from: accounts[5]});
		const booloOFdxqg = await XenoFelixi5zMC3z.isPauser.call(addressLEc65BR, {from: accounts[2]});
		const addressdD5ueXY = await XenoFelixi5zMC3z.notFrozen.call(addressIX1HSsW, {from: accounts[1]});
		const boolY8PelV = await XenoFelixi5zMC3z.transferFrom.call(addressEtl8Gfb, addressEi5AMF, uint1R3Lj1, {from: accounts[1]});
	});

	it('test for XenoFelix', async () => {
		const stringHGXqJPC = "sLVlSnms95sgyev29xBQku9g"
		const stringNgLmwdl = "3rxe4EvdUjSW7cvMWpsIXixKXpX92aMhCx5rEWsTRh07YOmM"
		const uintMsHHdUm = BigInt("509")
		const uintBA9BBvA = BigInt("23")
		const XenoFelixzJN5m0p = await XenoFelix.new(stringHGXqJPC, stringNgLmwdl, uintMsHHdUm, uintBA9BBvA, {from: accounts[3]});
		const addressPus1vp8 = accounts[4]
		const addressXvZhLR = accounts[3]
		const addressj0WnSEc = accounts[5]
		const uintLBkvTWJ = BigInt("568")
		const addressOhX1JWh = accounts[3]
		const uintKaWb8v = BigInt("966")
		const addressl7CvMmK = "0x0000000000000000000000000000000000000001"
		const uint256YVcquOd = await XenoFelixzJN5m0p.allowance.call(addressXvZhLR, addressPus1vp8, {from: accounts[4]});
		const boolwhqrOLQ = await XenoFelixzJN5m0p.acceptOwnership.call({from: accounts[2]});
		const uint256ixKi2gj = await XenoFelixzJN5m0p.balanceOf.call(addressj0WnSEc, {from: accounts[0]});
		const boolOIwBBHg = await XenoFelixzJN5m0p.transfer.call(addressOhX1JWh, uintLBkvTWJ, {from: accounts[2]});
		const boolBLIfUaM = await XenoFelixzJN5m0p.transfer.call(addressl7CvMmK, uintKaWb8v, {from: accounts[1]});

		assert.equal(uint256YVcquOd, BigInt("0"))
		await expect(XenoFelixzJN5m0p.acceptOwnership.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringHGXqJPC = "sLVlSnms95sgyev29xBQku9g"
		const stringNgLmwdl = "3rxe4EvdUjSW7cvMWpsIXixKXpX92aMhCx5rEWsTRh07YOmM"
		const uintjOzeRUH = BigInt("509")
		const uintnrDavj = BigInt("23")
		const XenoFelixzJN5m0p = await XenoFelix.new(stringHGXqJPC, stringNgLmwdl, uintjOzeRUH, uintnrDavj, {from: accounts[3]});
		const addressuKwunVJ = accounts[4]
		const uintyDcmwsD = BigInt("676")
		const addressWqMlRmm = accounts[1]
		const uintFcdD83 = BigInt("1980")
		const uintrZbMDy0 = BigInt("1505")
		const addresshbL73ID = "0x0000000000000000000000000000000000000001"
		const uint8wQTN9lk = await XenoFelixzJN5m0p.decimals.call({from: accounts[0]});
		const uint256ixKi2gj = await XenoFelixzJN5m0p.balanceOf.call(addressuKwunVJ, {from: accounts[0]});
		const boolXHVPrRi = await XenoFelixzJN5m0p.transfer.call(addressWqMlRmm, uintyDcmwsD, {from: accounts[4]});
		const boolePxtc12 = await XenoFelixzJN5m0p.lock.call(addresshbL73ID, uintrZbMDy0, uintFcdD83, {from: accounts[1]});

		assert.equal(uint256ixKi2gj, BigInt("0"))
		assert.equal(uint8wQTN9lk, BigInt("23"))
		await expect(XenoFelixzJN5m0p.transfer.call(addressWqMlRmm, uintyDcmwsD, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringCsV3V3 = "LPrnkRegSSQ8rvTkZ6gJOJDjwJwHOv74sEQ3TnRxASM1OQiiJqTjCBkFHfMU4E4kNjqmsv76M6BzgLIUV"
		const stringsz7T4c = "DyFAWXeZdTeNRDuPR4t1qhpGwq7n6E1ODUE1b7nmoiChfrtY5DlN4yYxhSghIUB9sUfkgTZhyayN71XouHpSDxHlIRN"
		const uintozGTch2 = BigInt("133")
		const XenoFelixzvWL5h7 = await XenoFelix.new(stringCsV3V3, stringsz7T4c, uintozGTch2, {from: accounts[4]});
		const addresstE2kL6L = accounts[0]
		const addressLudGghH = accounts[2]
		const addressCgP4mSK = accounts[4]
		const addressKv2D9K7 = accounts[0]
		const addressqv2YnrX = accounts[2]
		const addressbOenQWh = "0x0000000000000000000000000000000000000001"
		const addressaQeWUT = accounts[5]
		const addresstSKkAow = await XenoFelixzvWL5h7.notFrozenAndTransaction.call(addressLudGghH, addresstE2kL6L, {from: accounts[4]});
		const uint256pSwjS8M = await XenoFelixzvWL5h7.allowance.call(addressKv2D9K7, addressCgP4mSK, {from: accounts[0]});
		const addressBhz3Xw = await XenoFelixzvWL5h7.notFrozenAndTransaction.call(addressbOenQWh, addressqv2YnrX, {from: accounts[3]});
		const uint256pKrDT6Z = await XenoFelixzvWL5h7.balanceOf.call(addressaQeWUT, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for XenoFelix', async () => {
		const stringHGXqJPC = "sLVlSnms95sgyev29xBQku9g"
		const stringNgLmwdl = "3rxe4EvdUjSW7cvMWpsIXixKXpX92aMhCx5rEWsTRh07YOmM"
		const uinttf5XtJD = BigInt("509")
		const uintVXUgOtQ = BigInt("23")
		const XenoFelixzJN5m0p = await XenoFelix.new(stringHGXqJPC, stringNgLmwdl, uinttf5XtJD, uintVXUgOtQ, {from: accounts[3]});
		const uintISADkkh = BigInt("1653")
		const addresswc45Gvs = accounts[4]
		const uintiSBbSBl = BigInt("1243")
		const addresss9zUtXH = "0x0000000000000000000000000000000000000001"
		const addressWffi74E = accounts[5]
		const uintfuul4L0 = BigInt("1980")
		const uintaLWkonV = BigInt("456")
		const addresskFyOlRT = "0x0000000000000000000000000000000000000001"
		const uintPNLWqDr = BigInt("11")
		const addresscxkZK8I = accounts[2]
		const uintPmS4c7j = BigInt("966")
		const addressN972b1 = "0x0000000000000000000000000000000000000001"
		const boolKdFPaez = await XenoFelixzJN5m0p.transfer.call(addresswc45Gvs, uintISADkkh, {from: accounts[3]});
		const boolvRHxZg = await XenoFelixzJN5m0p.increaseAllowance.call(addresss9zUtXH, uintiSBbSBl, {from: accounts[0]});
		const uint256ixKi2gj = await XenoFelixzJN5m0p.balanceOf.call(addressWffi74E, {from: accounts[0]});
		const boolePxtc12 = await XenoFelixzJN5m0p.lock.call(addresskFyOlRT, uintaLWkonV, uintfuul4L0, {from: accounts[1]});
		const addressY8mMGQ = await XenoFelixzJN5m0p.burnFrom.call(addresscxkZK8I, uintPNLWqDr, {from: "0x0000000000000000000000000000000000000001"});
		const boolBLIfUaM = await XenoFelixzJN5m0p.transfer.call(addressN972b1, uintPmS4c7j, {from: accounts[1]});

		assert.equal(boolKdFPaez, true)
		assert.equal(boolvRHxZg, true)
		assert.equal(uint256ixKi2gj, BigInt("0"))
		await expect(XenoFelixzJN5m0p.lock.call(addresskFyOlRT, uintaLWkonV, uintfuul4L0, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringHGXqJPC = "sLVlSnms95sgyev29xBQku9g"
		const stringNgLmwdl = "3rxe4EvdUjSW7cvMWpsIXixKXpX92aMhCx5rEWsTRh07YOmM"
		const uintpZdhrA9 = BigInt("509")
		const uintifLz7ln = BigInt("23")
		const XenoFelixzJN5m0p = await XenoFelix.new(stringHGXqJPC, stringNgLmwdl, uintpZdhrA9, uintifLz7ln, {from: accounts[3]});
		const addresspIAz03W = accounts[5]
		await XenoFelixzJN5m0p.renouncePauser.call({from: accounts[2]});
		const uint256ixKi2gj = await XenoFelixzJN5m0p.balanceOf.call(addresspIAz03W, {from: accounts[0]});

		await expect(XenoFelixzJN5m0p.renouncePauser.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringmvtW8H2 = "S3kBq1adKoxAhDCCK2Q2xtAKObpueeMjfmSfokgQcWhKMNJdR"
		const stringOtqiV0H = "BegqtiaaGMaYqPBoT285P9ptJgimaUDvaxdWGufDSGCf"
		const uintlo2DVVP = BigInt("2012")
		const uintbvQcRDL = BigInt("118")
		const XenoFelixTvaXEPa = await XenoFelix.new(stringmvtW8H2, stringOtqiV0H, uintlo2DVVP, uintbvQcRDL, {from: "0x0000000000000000000000000000000000000001"});
		const uintojuRJYm = BigInt("1849")
		const addressKSWJRQF = accounts[1]
		const addresspFWBh29 = accounts[2]
		const addressbmWV9Bg = "0x0000000000000000000000000000000000000001"
		const boolF4oM0tE = await XenoFelixTvaXEPa.transfer.call(addressKSWJRQF, uintojuRJYm, {from: accounts[2]});
		const boolsydKSBb = await XenoFelixTvaXEPa.isOwner.call(addresspFWBh29, {from: accounts[2]});
		const uint256BxcR44R = await XenoFelixTvaXEPa.totalSupply.call({from: accounts[2]});
		const addresskjwDS3D = await XenoFelixTvaXEPa.removePauser.call(addressbmWV9Bg, {from: accounts[0]});
	});

	it('test for XenoFelix', async () => {
		const stringHGXqJPC = "sLVlSnms95sgyev29xBQku9g"
		const stringNgLmwdl = "3rxe4EvdUjSW7cvMWpsIXixKXpX92aMhCx5rEWsTRh07YOmM"
		const uintKEDZHje = BigInt("509")
		const uintASRtNpD = BigInt("23")
		const XenoFelixzJN5m0p = await XenoFelix.new(stringHGXqJPC, stringNgLmwdl, uintKEDZHje, uintASRtNpD, {from: accounts[3]});
		const addressJPuhfqj = accounts[4]
		const uintcVBcxr5 = BigInt("973")
		const addressfGZAA5z = "0x0000000000000000000000000000000000000001"
		const addressXyELcsv = await XenoFelixzJN5m0p.addPauser.call(addressJPuhfqj, {from: accounts[3]});
		const boolBLIfUaM = await XenoFelixzJN5m0p.transfer.call(addressfGZAA5z, uintcVBcxr5, {from: accounts[1]});

		await expect(XenoFelixzJN5m0p.transfer.call(addressfGZAA5z, uintcVBcxr5, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringHGXqJPC = "sLVlSnms95sgyev29xBQku9g"
		const stringNgLmwdl = "3rxe4EvdUjSW7cvMWpsIXixKXpX92aMhCx5rEWsTRh07YOmM"
		const uintgIPitr = BigInt("509")
		const uintiTkihcy = BigInt("23")
		const XenoFelixzJN5m0p = await XenoFelix.new(stringHGXqJPC, stringNgLmwdl, uintgIPitr, uintiTkihcy, {from: accounts[3]});
		const uintvSXdp7R = BigInt("899")
		const addressQubrHLT = accounts[3]
		const addressZrBkLPI = "0x0000000000000000000000000000000000000001"
		const uinttXSG4Q = BigInt("1980")
		const uintgxoGced = BigInt("1505")
		const addressX3XsxA = "0x0000000000000000000000000000000000000001"
		const addressdN4xZmk = accounts[1]
		const boolZuC9nK = await XenoFelixzJN5m0p.transferFrom.call(addressZrBkLPI, addressQubrHLT, uintvSXdp7R, {from: accounts[5]});
		const boolePxtc12 = await XenoFelixzJN5m0p.lock.call(addressX3XsxA, uintgxoGced, uinttXSG4Q, {from: accounts[1]});
		await XenoFelixzJN5m0p.pause.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256a4GFG7o = await XenoFelixzJN5m0p.balanceOf.call(addressdN4xZmk, {from: accounts[4]});

		await expect(XenoFelixzJN5m0p.transferFrom.call(addressZrBkLPI, addressQubrHLT, uintvSXdp7R, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringHGXqJPC = "sLVlSnms95sgyev29xBQku9g"
		const stringNgLmwdl = "3rxe4EvdUjSW7cvMWpsIXixKXpX92aMhCx5rEWsTRh07YOmM"
		const uintsULuHP3 = BigInt("509")
		const uintKUd60pL = BigInt("23")
		const XenoFelixzJN5m0p = await XenoFelix.new(stringHGXqJPC, stringNgLmwdl, uintsULuHP3, uintKUd60pL, {from: accounts[3]});
		const uintFckVeRI = BigInt("1653")
		const addressmcZFqT = accounts[4]
		const uintgj2xbXG = BigInt("2013")
		const addressad9IGLz = accounts[0]
		const addressElvn36C = accounts[4]
		const uintKcZH7X = BigInt("1980")
		const uintryLxMq1 = BigInt("456")
		const addressWx2zTH2 = "0x0000000000000000000000000000000000000001"
		const uintlNiIblz = BigInt("11")
		const addresskP6KlOb = accounts[2]
		const uintFHSNza4 = BigInt("966")
		const addressXjaGP6J = "0x0000000000000000000000000000000000000001"
		const boolKdFPaez = await XenoFelixzJN5m0p.transfer.call(addressmcZFqT, uintFckVeRI, {from: accounts[3]});
		const boolb5vHIy = await XenoFelixzJN5m0p.increaseAllowance.call(addressad9IGLz, uintgj2xbXG, {from: accounts[3]});
		const uint256ixKi2gj = await XenoFelixzJN5m0p.balanceOf.call(addressElvn36C, {from: accounts[0]});
		const uint256f6LhoNC = await XenoFelixzJN5m0p.totalSupply.call({from: accounts[1]});
		await XenoFelixzJN5m0p.unpause.call({from: accounts[2]});
		const boolePxtc12 = await XenoFelixzJN5m0p.lock.call(addressWx2zTH2, uintryLxMq1, uintKcZH7X, {from: accounts[1]});
		const addressY8mMGQ = await XenoFelixzJN5m0p.burnFrom.call(addresskP6KlOb, uintlNiIblz, {from: "0x0000000000000000000000000000000000000001"});
		const boolBLIfUaM = await XenoFelixzJN5m0p.transfer.call(addressXjaGP6J, uintFHSNza4, {from: accounts[1]});

		assert.equal(boolKdFPaez, true)
		assert.equal(boolb5vHIy, true)
		assert.equal(uint256f6LhoNC, BigInt("50900000000000000000000000"))
		assert.equal(uint256ixKi2gj, BigInt("0"))
		await expect(XenoFelixzJN5m0p.unpause.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringHGXqJPC = "sLVlSnms95sgyev29xBQku9g"
		const stringNgLmwdl = "3rxe4EvdUjSW7cvMWpsIXixKXpX92aMhCx5rEWsTRh07YOmM"
		const uinteIqutVw = BigInt("509")
		const uintDNxzIxG = BigInt("23")
		const XenoFelixzJN5m0p = await XenoFelix.new(stringHGXqJPC, stringNgLmwdl, uinteIqutVw, uintDNxzIxG, {from: accounts[3]});
		const addressomN6Kz = accounts[5]
		const addressleqQllT = accounts[2]
		const addressY2CwfV9 = accounts[1]
		const uint256ixKi2gj = await XenoFelixzJN5m0p.balanceOf.call(addressomN6Kz, {from: accounts[0]});
		const boolJRF5C7I = await XenoFelixzJN5m0p.unfreezeAccount.call(addressleqQllT, {from: accounts[3]});
		const addressHGKV0ky = await XenoFelixzJN5m0p.notFrozen.call(addressY2CwfV9, {from: accounts[4]});
		const stringTeOw89k = await XenoFelixzJN5m0p.symbol.call({from: accounts[4]});

		assert.equal(uint256ixKi2gj, BigInt("0"))
		await expect(XenoFelixzJN5m0p.unfreezeAccount.call(addressleqQllT, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringqduXt3E = "zb9"
		const stringOjgqUlD = "Vgm7gLMH10IU21cPYTQJQty3C3vg9KsAFUK2sAc5wa"
		const uintov4js0 = BigInt("92")
		const XenoFelixfko8CT = await XenoFelix.new(stringqduXt3E, stringOjgqUlD, uintov4js0, {from: accounts[3]});
		const addressApoLsSz = accounts[1]
		const uinth0Ph7w5 = BigInt("1139")
		const addressJ3FHopI = accounts[4]
		const addressEyfpsty = accounts[0]
		await XenoFelixfko8CT.whenNotPaused.call({from: accounts[5]});
		const addressnuubbS6 = await XenoFelixfko8CT.addPauser.call(addressApoLsSz, {from: "0x0000000000000000000000000000000000000001"});
		const boolVp6udzZ = await XenoFelixfko8CT.approve.call(addressJ3FHopI, uinth0Ph7w5, {from: accounts[1]});
		const addressnT7yVfr = await XenoFelixfko8CT.transferOwnership.call(addressEyfpsty, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for XenoFelix', async () => {
		const stringHGXqJPC = "sLVlSnms95sgyev29xBQku9g"
		const stringNgLmwdl = "3rxe4EvdUjSW7cvMWpsIXixKXpX92aMhCx5rEWsTRh07YOmM"
		const uintnupuhq = BigInt("509")
		const uintlpqY0r0 = BigInt("23")
		const XenoFelixzJN5m0p = await XenoFelix.new(stringHGXqJPC, stringNgLmwdl, uintnupuhq, uintlpqY0r0, {from: accounts[3]});
		const uintdv4z0Ve = BigInt("1984")
		const addressXcTQDh = accounts[4]
		const uintyJeKz6b = BigInt("899")
		const addressM4U8i9Z = accounts[3]
		const addressNOCm7HV = "0x0000000000000000000000000000000000000001"
		const addressVbmE6fb = accounts[1]
		const bool1MkWhH = await XenoFelixzJN5m0p.approve.call(addressXcTQDh, uintdv4z0Ve, {from: accounts[3]});
		const boolZuC9nK = await XenoFelixzJN5m0p.transferFrom.call(addressNOCm7HV, addressM4U8i9Z, uintyJeKz6b, {from: accounts[5]});
		await XenoFelixzJN5m0p.pause.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256a4GFG7o = await XenoFelixzJN5m0p.balanceOf.call(addressVbmE6fb, {from: accounts[4]});

		assert.equal(bool1MkWhH, true)
		await expect(XenoFelixzJN5m0p.transferFrom.call(addressNOCm7HV, addressM4U8i9Z, uintyJeKz6b, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringHGXqJPC = "sLVlSnms95sgyev29xBQku9g"
		const stringNgLmwdl = "3rxe4EvdUjSW7cvMWpsIXixKXpX92aMhCx5rEWsTRh07YOmM"
		const uintfIB64E5 = BigInt("509")
		const uintc0xhZG = BigInt("23")
		const XenoFelixzJN5m0p = await XenoFelix.new(stringHGXqJPC, stringNgLmwdl, uintfIB64E5, uintc0xhZG, {from: accounts[3]});
		const uintfu7yh5C = BigInt("391")
		const addressO0PFs8p = accounts[3]
		const uinteUubRON = BigInt("935")
		const uintiEdadCN = BigInt("1505")
		const addressFMhwk89 = "0x0000000000000000000000000000000000000001"
		const uint256cNiqoCe = await XenoFelixzJN5m0p.burn.call(uintfu7yh5C, {from: accounts[1]});
		const addressZweapZi = await XenoFelixzJN5m0p.removePauser.call(addressO0PFs8p, {from: accounts[0]});
		const boolePxtc12 = await XenoFelixzJN5m0p.lock.call(addressFMhwk89, uintiEdadCN, uinteUubRON, {from: accounts[1]});

		await expect(XenoFelixzJN5m0p.burn.call(uintfu7yh5C, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringHGXqJPC = "sLVlSnms95sgyev29xBQku9g"
		const stringNgLmwdl = "3rxe4EvdUjSW7cvMWpsIXixKXpX92aMhCx5rEWsTRh07YOmM"
		const uintmc3iQd3 = BigInt("509")
		const uintsBgvg0T = BigInt("23")
		const XenoFelixzJN5m0p = await XenoFelix.new(stringHGXqJPC, stringNgLmwdl, uintmc3iQd3, uintsBgvg0T, {from: accounts[3]});
		const uintCg3bGZQ = BigInt("1653")
		const addressHjMBAie = accounts[4]
		const addressmbQSPW = accounts[4]
		const uintW2PpPc = BigInt("1398")
		const addressxv2dvOa = accounts[0]
		const uintTWszxE = BigInt("1980")
		const uintP5BOBq = BigInt("456")
		const addresswyKzXBH = "0x0000000000000000000000000000000000000001"
		const uintbkWbd8N = BigInt("11")
		const addressDIj7Ty = accounts[2]
		const uintL66gXG3 = BigInt("966")
		const addressME2Dqhg = "0x0000000000000000000000000000000000000001"
		const boolKdFPaez = await XenoFelixzJN5m0p.transfer.call(addressHjMBAie, uintCg3bGZQ, {from: accounts[3]});
		const uint256ixKi2gj = await XenoFelixzJN5m0p.balanceOf.call(addressmbQSPW, {from: accounts[0]});
		const boolhe4Dk1f = await XenoFelixzJN5m0p.decreaseAllowance.call(addressxv2dvOa, uintW2PpPc, {from: accounts[4]});
		const boolePxtc12 = await XenoFelixzJN5m0p.lock.call(addresswyKzXBH, uintP5BOBq, uintTWszxE, {from: accounts[1]});
		const addressY8mMGQ = await XenoFelixzJN5m0p.burnFrom.call(addressDIj7Ty, uintbkWbd8N, {from: "0x0000000000000000000000000000000000000001"});
		const boolBLIfUaM = await XenoFelixzJN5m0p.transfer.call(addressME2Dqhg, uintL66gXG3, {from: accounts[1]});

		assert.equal(boolKdFPaez, true)
		assert.equal(uint256ixKi2gj, BigInt("0"))
		await expect(XenoFelixzJN5m0p.decreaseAllowance.call(addressxv2dvOa, uintW2PpPc, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringHGXqJPC = "sLVlSnms95sgyev29xBQku9g"
		const stringNgLmwdl = "3rxe4EvdUjSW7cvMWpsIXixKXpX92aMhCx5rEWsTRh07YOmM"
		const uintXJKMPQH = BigInt("509")
		const uintaQ8uo0J = BigInt("23")
		const XenoFelixzJN5m0p = await XenoFelix.new(stringHGXqJPC, stringNgLmwdl, uintXJKMPQH, uintaQ8uo0J, {from: accounts[3]});
		const addressmjKwS0j = accounts[3]
		const uintTYdnXl = BigInt("447")
		const addresstNd7KKD = accounts[2]
		const addresslmOZmwd = accounts[2]
		const uintRmRHcxr = BigInt("1160")
		const uintQmYdZ2Y = BigInt("2013")
		const addressZYbYxNT = accounts[3]
		const addressLO7G7En = accounts[5]
		const uintcVjyyVF = BigInt("349")
		const addresseNFdKOw = accounts[3]
		const uintkjdQZOk = BigInt("627")
		const addressqbck4I = accounts[0]
		const uint256QbjX5XG = await XenoFelixzJN5m0p.balanceOf.call(addressmjKwS0j, {from: "0x0000000000000000000000000000000000000001"});
		const stringKs99yll = await XenoFelixzJN5m0p.name.call({from: accounts[1]});
		const boolJ4hCOS = await XenoFelixzJN5m0p.paused.call({from: accounts[2]});
		const booltMCsAEs = await XenoFelixzJN5m0p.transferFrom.call(addresslmOZmwd, addresstNd7KKD, uintTYdnXl, {from: accounts[1]});
		const boolC63X6ii = await XenoFelixzJN5m0p.lock.call(addressZYbYxNT, uintQmYdZ2Y, uintRmRHcxr, {from: "0x0000000000000000000000000000000000000001"});
		await XenoFelixzJN5m0p.pause.call({from: accounts[3]});
		const uint256ixKi2gj = await XenoFelixzJN5m0p.balanceOf.call(addressLO7G7En, {from: accounts[0]});
		const boolW10Gy4 = await XenoFelixzJN5m0p.approve.call(addresseNFdKOw, uintcVjyyVF, {from: accounts[2]});
		const addressHilPQ2E = await XenoFelixzJN5m0p.burnFrom.call(addressqbck4I, uintkjdQZOk, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolJ4hCOS, false)
		assert.equal(stringKs99yll, "sLVlSnms95sgyev29xBQku9g")
		assert.equal(uint256QbjX5XG, BigInt("50900000000000000000000000"))
		await expect(XenoFelixzJN5m0p.transferFrom.call(addresslmOZmwd, addresstNd7KKD, uintTYdnXl, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})