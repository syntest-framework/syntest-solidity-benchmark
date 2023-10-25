const AntiBaseProtocol = artifacts.require("AntiBaseProtocol");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('AntiBaseProtocol', (accounts) => {
	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolsZ59DQt = await AntiBaseProtocol.new({from: accounts[3]});
		const uintN4ftc5 = BigInt("789")
		const boolShtpCIu = await AntiBaseProtocolsZ59DQt.isOwner.call({from: accounts[4]});
		const uint89NoB0J = await AntiBaseProtocolsZ59DQt.decimals.call({from: accounts[4]});
//		const uint256hmNRCNT = await AntiBaseProtocolsZ59DQt.burn.call(uintN4ftc5, {from: accounts[4]});

		assert.equal(boolShtpCIu, false)
		assert.equal(uint89NoB0J, BigInt("18"))
		await expect(AntiBaseProtocolsZ59DQt.burn.call(uintN4ftc5, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolxbQMaLb = await AntiBaseProtocol.new({from: accounts[2]});
		const uintadEEZKr = BigInt("11")
		const addresswZPqZXu = accounts[5]
		const uintBik3u4n = BigInt("1006")
		const addressCD0DrEc = "0x0000000000000000000000000000000000000001"
		const addressM2Bfq5h = accounts[4]
		const uintwS3d6Zt = BigInt("1115")
		const addressWknM2Z1 = accounts[3]
		const boolC9Vgag = await AntiBaseProtocolxbQMaLb.approve.call(addresswZPqZXu, uintadEEZKr, {from: accounts[2]});
//		const addressbtN9sb2 = await AntiBaseProtocolxbQMaLb._approve.call(addressM2Bfq5h, addressCD0DrEc, uintBik3u4n, {from: accounts[0]});
//		const boolRRrfnGr = await AntiBaseProtocolxbQMaLb.isOwner.call({from: accounts[0]});
//		const addressiH3Ppqe = await AntiBaseProtocolxbQMaLb._burn.call(addressWknM2Z1, uintwS3d6Zt, {from: accounts[0]});

		assert.equal(boolC9Vgag, true)
		await expect(AntiBaseProtocolxbQMaLb._approve.call(addressM2Bfq5h, addressCD0DrEc, uintBik3u4n, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const stringAxaBBni = "aPhF46nstHQnsQxS4RBM5pHvj1R7J9R"
		const stringi2pToee = "bsfkoYJijrqHOyDdIk9jVThDENLJBkLY"
		const uintAwlF7Zl = BigInt("102")
		const AntiBaseProtocolFUoarL = await AntiBaseProtocol.new(stringAxaBBni, stringi2pToee, uintAwlF7Zl, {from: accounts[5]});
		const uintW9Vs7b7 = BigInt("1939")
		const addressnWYqdjv = accounts[5]
		const addressVIZIOMm = accounts[3]
		const addresslTs48NH = accounts[1]
		const addressBZDjzst = await AntiBaseProtocolFUoarL.owner.call({from: accounts[1]});
		const addresssL4Twd = await AntiBaseProtocolFUoarL._mint.call(addressnWYqdjv, uintW9Vs7b7, {from: accounts[1]});
		const uint256RB9gtfJ = await AntiBaseProtocolFUoarL.allowance.call(addresslTs48NH, addressVIZIOMm, {from: accounts[0]});
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocoluDHSSvd = await AntiBaseProtocol.new({from: accounts[3]});
		const uintuZzum3W = BigInt("965")
		const addressEgJjmgH = accounts[2]
		const addressS41LRAS = accounts[0]
		const uintU8hs4Od = BigInt("274")
		const addressRjTfhda = "0x0000000000000000000000000000000000000001"
		const uinty3yYPN1 = BigInt("576")
		const addressIARdAVo = accounts[1]
		const addressOEYi1MV = await AntiBaseProtocoluDHSSvd.owner.call({from: accounts[2]});
		const uint8ROJ1RrE = await AntiBaseProtocoluDHSSvd.decimals.call({from: accounts[5]});
//		const addresshi51Sox = await AntiBaseProtocoluDHSSvd._approve.call(addressS41LRAS, addressEgJjmgH, uintuZzum3W, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256ITUd8oY = await AntiBaseProtocoluDHSSvd.totalSupply.call({from: accounts[2]});
//		const addressql9aOjq = await AntiBaseProtocoluDHSSvd._mint.call(addressRjTfhda, uintU8hs4Od, {from: accounts[3]});
//		const addressE16Q8tU = await AntiBaseProtocoluDHSSvd.burnFrom.call(addressIARdAVo, uinty3yYPN1, {from: accounts[4]});

		assert.equal(addressOEYi1MV, 0x34D09ccABb9A6Ae98d9D2e5F9358F1c18fA903B5)
		assert.equal(uint8ROJ1RrE, BigInt("18"))
		await expect(AntiBaseProtocoluDHSSvd._approve.call(addressS41LRAS, addressEgJjmgH, uintuZzum3W, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolOui2Uuj = await AntiBaseProtocol.new({from: accounts[0]});
		const uintFoAwZDG = BigInt("1299")
		const uintyuWbZuR = BigInt("539")
		const addressXy36qDt = accounts[4]
		const uintXaR0e7b = BigInt("265")
		const addressHF9Y5Eq = accounts[3]
		const uint256tomjCB = await AntiBaseProtocolOui2Uuj.findBurnFee.call(uintFoAwZDG, {from: accounts[1]});
//		const addressFHQpz4P = await AntiBaseProtocolOui2Uuj._mint.call(addressXy36qDt, uintyuWbZuR, {from: accounts[1]});
//		const addressjejjxeb = await AntiBaseProtocolOui2Uuj._burn.call(addressHF9Y5Eq, uintXaR0e7b, {from: accounts[2]});

		assert.equal(uint256tomjCB, BigInt("195"))
		await expect(AntiBaseProtocolOui2Uuj._mint.call(addressXy36qDt, uintyuWbZuR, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolDc4pswe = await AntiBaseProtocol.new({from: "0x0000000000000000000000000000000000000001"});
		const uintMGjAfI = BigInt("1722")
		const addressxcBJ1oC = accounts[0]
		const addressqhc73H = accounts[1]
		const uinthOSPAVN = BigInt("1681")
		const uint8fwuSi2d = await AntiBaseProtocolDc4pswe.decimals.call({from: accounts[1]});
		const boolGvfaluS = await AntiBaseProtocolDc4pswe.approve.call(addressxcBJ1oC, uintMGjAfI, {from: accounts[2]});
		const addressv0Jnlke = await AntiBaseProtocolDc4pswe.transferOwnership.call(addressqhc73H, {from: accounts[0]});
		const uint256oIQD04h = await AntiBaseProtocolDc4pswe.burn.call(uinthOSPAVN, {from: accounts[1]});
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolxbQMaLb = await AntiBaseProtocol.new({from: accounts[2]});
		const uintqo3Q1jn = BigInt("11")
		const addressyUHrZSM = accounts[5]
		const addressX64LKDC = "0x0000000000000000000000000000000000000001"
		const uintTHDpHHh = BigInt("1006")
		const addressblSpxs3 = "0x0000000000000000000000000000000000000001"
		const addressQ7csl0O = accounts[4]
		const uintwfFPeJL = BigInt("1115")
		const addressQkTU2NU = accounts[3]
		const boolC9Vgag = await AntiBaseProtocolxbQMaLb.approve.call(addressyUHrZSM, uintqo3Q1jn, {from: accounts[2]});
		const uint256lZ5Ovkw = await AntiBaseProtocolxbQMaLb.balanceOf.call(addressX64LKDC, {from: accounts[3]});
//		const addressbtN9sb2 = await AntiBaseProtocolxbQMaLb._approve.call(addressQ7csl0O, addressblSpxs3, uintTHDpHHh, {from: accounts[0]});
//		const boolRRrfnGr = await AntiBaseProtocolxbQMaLb.isOwner.call({from: accounts[0]});
//		const addressiH3Ppqe = await AntiBaseProtocolxbQMaLb._burn.call(addressQkTU2NU, uintwfFPeJL, {from: accounts[0]});

		assert.equal(boolC9Vgag, true)
		assert.equal(uint256lZ5Ovkw, BigInt("0"))
		await expect(AntiBaseProtocolxbQMaLb._approve.call(addressQ7csl0O, addressblSpxs3, uintTHDpHHh, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolqdJ4DDN = await AntiBaseProtocol.new({from: accounts[3]});
		const uintZAyJI5B = BigInt("1381")
		const addressTT5xH7h = accounts[2]
		const addresssTuNpXv = accounts[4]
		const uintCg9TWuv = BigInt("1278")
		const addressVKndpoX = accounts[0]
		const addressb8RKv3W = accounts[1]
		const uintyafgQRP = BigInt("658")
		const addressIhe7G5o = accounts[5]
		const boolWViuwxv = await AntiBaseProtocolqdJ4DDN.isOwner.call({from: accounts[1]});
//		const booluUu6be7 = await AntiBaseProtocolqdJ4DDN.transferFrom.call(addresssTuNpXv, addressTT5xH7h, uintZAyJI5B, {from: accounts[3]});
//		const addresslFgvHpK = await AntiBaseProtocolqdJ4DDN._approve.call(addressb8RKv3W, addressVKndpoX, uintCg9TWuv, {from: accounts[2]});
//		await AntiBaseProtocolqdJ4DDN.onlyOwner.call({from: accounts[2]});
//		const addressbC6vaj1 = await AntiBaseProtocolqdJ4DDN.burnFrom.call(addressIhe7G5o, uintyafgQRP, {from: accounts[1]});
//		await AntiBaseProtocolqdJ4DDN.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolWViuwxv, false)
		await expect(AntiBaseProtocolqdJ4DDN.transferFrom.call(addresssTuNpXv, addressTT5xH7h, uintZAyJI5B, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolBTa1Qv5 = await AntiBaseProtocol.new({from: accounts[1]});
		const uintG41yenF = BigInt("1951")
		const addressEVZzYPW = accounts[3]
		const boolPOqCD4u = await AntiBaseProtocolBTa1Qv5.increaseAllowance.call(addressEVZzYPW, uintG41yenF, {from: accounts[0]});
//		await AntiBaseProtocolBTa1Qv5.onlyOwner.call({from: accounts[1]});
//		await AntiBaseProtocolBTa1Qv5.onlyOwner.call({from: accounts[3]});
//		await AntiBaseProtocolBTa1Qv5.renounceOwnership.call({from: accounts[5]});
//		const addressjxQ87ZY = await AntiBaseProtocolBTa1Qv5.owner.call({from: accounts[2]});

		assert.equal(boolPOqCD4u, true)
		await expect(AntiBaseProtocolBTa1Qv5.onlyOwner.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolqdJ4DDN = await AntiBaseProtocol.new({from: accounts[3]});
		const uintU2LWXGD = BigInt("95")
		const addressqP629Jr = accounts[1]
		const addresslbsuSp = accounts[3]
		const uintuUVf7Hu = BigInt("1381")
		const addressl9FbHzx = accounts[2]
		const addressnyHTtZL = accounts[4]
		const uintUf40QwF = BigInt("1278")
		const addressXYegz7n = accounts[1]
		const addresshxtRInk = accounts[1]
		const uintjqJBTxV = BigInt("1208")
		const addressFvJlkhG = accounts[3]
		const uintHoEV0hK = BigInt("658")
		const address8wwVuL = accounts[5]
//		const boolTJGTZ8F = await AntiBaseProtocolqdJ4DDN.transferFrom.call(addresslbsuSp, addressqP629Jr, uintU2LWXGD, {from: accounts[2]});
//		const boolWViuwxv = await AntiBaseProtocolqdJ4DDN.isOwner.call({from: accounts[1]});
//		const booluUu6be7 = await AntiBaseProtocolqdJ4DDN.transferFrom.call(addressnyHTtZL, addressl9FbHzx, uintuUVf7Hu, {from: accounts[3]});
//		const addresslFgvHpK = await AntiBaseProtocolqdJ4DDN._approve.call(addresshxtRInk, addressXYegz7n, uintUf40QwF, {from: accounts[2]});
//		await AntiBaseProtocolqdJ4DDN.onlyOwner.call({from: accounts[2]});
//		const addressSNXsc0 = await AntiBaseProtocolqdJ4DDN.owner.call({from: accounts[5]});
//		const addressNs7iok = await AntiBaseProtocolqdJ4DDN._burn.call(addressFvJlkhG, uintjqJBTxV, {from: accounts[2]});
//		const addressbC6vaj1 = await AntiBaseProtocolqdJ4DDN.burnFrom.call(address8wwVuL, uintHoEV0hK, {from: accounts[1]});
//		await AntiBaseProtocolqdJ4DDN.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(AntiBaseProtocolqdJ4DDN.transferFrom.call(addresslbsuSp, addressqP629Jr, uintU2LWXGD, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolOui2Uuj = await AntiBaseProtocol.new({from: accounts[0]});
		const uintpLYnrDQ = BigInt("1496")
		const addressl87vwKq = accounts[2]
		const uintRip0RZ = BigInt("1274")
		const uintyWqC1gS = BigInt("265")
		const addressibvJmU = accounts[3]
//		const boolU8lnijs = await AntiBaseProtocolOui2Uuj.transfer.call(addressl87vwKq, uintpLYnrDQ, {from: accounts[1]});
//		const uint256tomjCB = await AntiBaseProtocolOui2Uuj.findBurnFee.call(uintRip0RZ, {from: accounts[1]});
//		const addressjejjxeb = await AntiBaseProtocolOui2Uuj._burn.call(addressibvJmU, uintyWqC1gS, {from: accounts[2]});
//		const boolI4B597H = await AntiBaseProtocolOui2Uuj.isOwner.call({from: accounts[5]});

		await expect(AntiBaseProtocolOui2Uuj.transfer.call(addressl87vwKq, uintpLYnrDQ, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolOui2Uuj = await AntiBaseProtocol.new({from: accounts[0]});
		const uinttHOp2lY = BigInt("1333")
		const addressgdHwR37 = accounts[5]
		const uintuKdrY3o = BigInt("1914")
		const addressnGiTyNz = accounts[0]
		const uint256tomjCB = await AntiBaseProtocolOui2Uuj.findBurnFee.call(uinttHOp2lY, {from: accounts[1]});
//		const addressAcGhqqA = await AntiBaseProtocolOui2Uuj.transferOwnership.call(addressgdHwR37, {from: accounts[4]});
//		const boolN5ll6iR = await AntiBaseProtocolOui2Uuj.transfer.call(addressnGiTyNz, uintuKdrY3o, {from: accounts[4]});

		assert.equal(uint256tomjCB, BigInt("210"))
		await expect(AntiBaseProtocolOui2Uuj.transferOwnership.call(addressgdHwR37, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolmtyXNOU = await AntiBaseProtocol.new({from: accounts[0]});
		const uintdWJGJwk = BigInt("1781")
		const uintTNc6j5w = BigInt("1479")
		const addressOrckCE3 = accounts[2]
		const stringVr1SRMr = await AntiBaseProtocolmtyXNOU.symbol.call({from: accounts[3]});
		const uint256tZtDDp0 = await AntiBaseProtocolmtyXNOU.findBurnFee.call(uintdWJGJwk, {from: accounts[3]});
		const strings0hWxH4 = await AntiBaseProtocolmtyXNOU.symbol.call({from: accounts[1]});
//		const addressdbrWBSx = await AntiBaseProtocolmtyXNOU._burn.call(addressOrckCE3, uintTNc6j5w, {from: accounts[0]});

		assert.equal(stringVr1SRMr, "ABASE")
		assert.equal(strings0hWxH4, "ABASE")
		assert.equal(uint256tZtDDp0, BigInt("270"))
		await expect(AntiBaseProtocolmtyXNOU._burn.call(addressOrckCE3, uintTNc6j5w, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolOui2Uuj = await AntiBaseProtocol.new({from: accounts[0]});
		const addressaYi8F7u = accounts[2]
		const uintcn9dHP = BigInt("1496")
		const addressDvZYJEN = accounts[2]
		const uintWzhIVGi = BigInt("909")
		const addressYzub1A = accounts[2]
		const address2mbaao = accounts[0]
		const uintNpCH3bf = BigInt("550")
		const uintsot3tby = BigInt("1012")
		const uintCg8rX3C = BigInt("233")
		const addressjbvG8Q = accounts[3]
		const addresspD6uQcr = await AntiBaseProtocolOui2Uuj.transferOwnership.call(addressaYi8F7u, {from: accounts[0]});
//		const boolU8lnijs = await AntiBaseProtocolOui2Uuj.transfer.call(addressDvZYJEN, uintcn9dHP, {from: accounts[1]});
//		await AntiBaseProtocolOui2Uuj.requestGas.call({from: accounts[2]});
//		const addressgwvMyw3 = await AntiBaseProtocolOui2Uuj._approve.call(address2mbaao, addressYzub1A, uintWzhIVGi, {from: accounts[2]});
//		const uint256tomjCB = await AntiBaseProtocolOui2Uuj.findBurnFee.call(uintNpCH3bf, {from: accounts[1]});
//		const uint256TtOeian = await AntiBaseProtocolOui2Uuj.burn.call(uintsot3tby, {from: accounts[4]});
//		const addressjejjxeb = await AntiBaseProtocolOui2Uuj._burn.call(addressjbvG8Q, uintCg8rX3C, {from: accounts[2]});
//		const boolI4B597H = await AntiBaseProtocolOui2Uuj.isOwner.call({from: accounts[5]});

		await expect(AntiBaseProtocolOui2Uuj.transfer.call(addressDvZYJEN, uintcn9dHP, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolOui2Uuj = await AntiBaseProtocol.new({from: accounts[0]});
		const uintwlleTTR = BigInt("1328")
		const addressnPzTJz4 = accounts[5]
		const addresshMyLtzo = accounts[3]
		const uint256tomjCB = await AntiBaseProtocolOui2Uuj.findBurnFee.call(uintwlleTTR, {from: accounts[1]});
		const uint256e1sCTzD = await AntiBaseProtocolOui2Uuj.allowance.call(addresshMyLtzo, addressnPzTJz4, {from: accounts[3]});

		assert.equal(uint256e1sCTzD, BigInt("0"))
		assert.equal(uint256tomjCB, BigInt("210"))
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolpTAgBGQ = await AntiBaseProtocol.new({from: accounts[4]});
		const uintl82lRak = BigInt("1823")
		const addresslyexlUU = accounts[5]
		const uintgZX7t3 = BigInt("758")
		const addressgkwWD7V = accounts[4]
//		const addressmasXRXs = await AntiBaseProtocolpTAgBGQ.burnFrom.call(addresslyexlUU, uintl82lRak, {from: accounts[1]});
//		const stringbcPvgzN = await AntiBaseProtocolpTAgBGQ.name.call({from: accounts[2]});
//		const addressSiQ0UM4 = await AntiBaseProtocolpTAgBGQ._burn.call(addressgkwWD7V, uintgZX7t3, {from: accounts[3]});
//		const addressNGdKZja = await AntiBaseProtocolpTAgBGQ.owner.call({from: accounts[2]});

		await expect(AntiBaseProtocolpTAgBGQ.burnFrom.call(addresslyexlUU, uintl82lRak, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolOui2Uuj = await AntiBaseProtocol.new({from: accounts[0]});
		const uintCkvJn1h = BigInt("306")
		const addressqGM8Mlo = accounts[0]
		const uintBe57Dqs = BigInt("340")
//		const addressuPcpD0A = await AntiBaseProtocolOui2Uuj.burnFrom.call(addressqGM8Mlo, uintCkvJn1h, {from: accounts[1]});
//		const uint256tomjCB = await AntiBaseProtocolOui2Uuj.findBurnFee.call(uintBe57Dqs, {from: accounts[1]});

		await expect(AntiBaseProtocolOui2Uuj.burnFrom.call(addressqGM8Mlo, uintCkvJn1h, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolaawDf9A = await AntiBaseProtocol.new({from: accounts[2]});
		const uintKLSvRd = BigInt("722")
		const addresscoIhHZE = accounts[4]
		const addressN4gkwbj = "0x0000000000000000000000000000000000000001"
		const addressqjwKdE = accounts[2]
		const uintJlXlx5D = BigInt("564")
		const addressPPw8uck = "0x0000000000000000000000000000000000000001"
		const boolIcshAc = await AntiBaseProtocolaawDf9A.approve.call(addresscoIhHZE, uintKLSvRd, {from: accounts[3]});
		const stringI0my8lT = await AntiBaseProtocolaawDf9A.symbol.call({from: accounts[3]});
		const uint256M8al7sO = await AntiBaseProtocolaawDf9A.allowance.call(addressqjwKdE, addressN4gkwbj, {from: accounts[0]});
		const uint256RDhV6vH = await AntiBaseProtocolaawDf9A.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
//		const addressLdfYUD7 = await AntiBaseProtocolaawDf9A._mint.call(addressPPw8uck, uintJlXlx5D, {from: accounts[2]});

		assert.equal(boolIcshAc, true)
		assert.equal(stringI0my8lT, "ABASE")
		assert.equal(uint256M8al7sO, BigInt("0"))
		assert.equal(uint256RDhV6vH, BigInt("31250000000000000000"))
		await expect(AntiBaseProtocolaawDf9A._mint.call(addressPPw8uck, uintJlXlx5D, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolOui2Uuj = await AntiBaseProtocol.new({from: accounts[0]});
		const uintNQqSY3 = BigInt("1294")
		const uint256tomjCB = await AntiBaseProtocolOui2Uuj.findBurnFee.call(uintNQqSY3, {from: accounts[1]});
//		await AntiBaseProtocolOui2Uuj.renounceOwnership.call({from: accounts[0]});

		assert.equal(uint256tomjCB, BigInt("195"))
		await expect(AntiBaseProtocolOui2Uuj.renounceOwnership.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolWss3NoE = await AntiBaseProtocol.new({from: accounts[1]});
		const uintg8hmMO1 = BigInt("1743")
		const addressaSbQbV = accounts[1]
		const uintjmKR8Nt = BigInt("1717")
		const addresseEB0FnK = accounts[0]
		const uintk87umdJ = BigInt("1717")
		const boolV416160 = await AntiBaseProtocolWss3NoE.approve.call(addressaSbQbV, uintg8hmMO1, {from: accounts[0]});
//		const boolcP3FT1K = await AntiBaseProtocolWss3NoE.decreaseAllowance.call(addresseEB0FnK, uintjmKR8Nt, {from: accounts[2]});
//		const uint256HI5An65 = await AntiBaseProtocolWss3NoE.findBurnFee.call(uintk87umdJ, {from: accounts[0]});
//		await AntiBaseProtocolWss3NoE.requestGas.call({from: accounts[1]});
//		const stringOw9kQxN = await AntiBaseProtocolWss3NoE.name.call({from: accounts[4]});

		assert.equal(boolV416160, true)
		await expect(AntiBaseProtocolWss3NoE.decreaseAllowance.call(addresseEB0FnK, uintjmKR8Nt, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolOui2Uuj = await AntiBaseProtocol.new({from: accounts[0]});
		const uintbvvKMer = BigInt("1634")
		const uinthnMNdbs = BigInt("1292")
		const uintCh3R7of = BigInt("921")
		const uintcg8SsNJ = BigInt("514")
		const addressLBbSnrc = accounts[4]
		const stringD26FYVh = await AntiBaseProtocolOui2Uuj.name.call({from: accounts[5]});
//		const uint256yrhBLOt = await AntiBaseProtocolOui2Uuj.burn.call(uintbvvKMer, {from: accounts[1]});
//		const uint256tomjCB = await AntiBaseProtocolOui2Uuj.findBurnFee.call(uinthnMNdbs, {from: accounts[1]});
//		const uint256ba8n5iT = await AntiBaseProtocolOui2Uuj.findRewardFee.call(uintCh3R7of, {from: accounts[3]});
//		const boolE1nIhWg = await AntiBaseProtocolOui2Uuj.transfer.call(addressLBbSnrc, uintcg8SsNJ, {from: accounts[3]});

		assert.equal(stringD26FYVh, "https://t.me/antibaseprotocol")
		await expect(AntiBaseProtocolOui2Uuj.burn.call(uintbvvKMer, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolOui2Uuj = await AntiBaseProtocol.new({from: accounts[0]});
		const uintI17V1qo = BigInt("0")
		const uintkCUWK8N = BigInt("70")
		const address7JGe0d = accounts[3]
		const stringkpBgSoN = await AntiBaseProtocolOui2Uuj.symbol.call({from: accounts[4]});
		const uint256EVQ0cNH = await AntiBaseProtocolOui2Uuj.findBurnFee.call(uintI17V1qo, {from: accounts[1]});
//		const boolU8lnijs = await AntiBaseProtocolOui2Uuj.transfer.call(address7JGe0d, uintkCUWK8N, {from: accounts[1]});

		assert.equal(stringkpBgSoN, "ABASE")
		assert.equal(uint256EVQ0cNH, BigInt("0"))
		await expect(AntiBaseProtocolOui2Uuj.transfer.call(address7JGe0d, uintkCUWK8N, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})