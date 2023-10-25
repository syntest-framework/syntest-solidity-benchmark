const SpiritCoin = artifacts.require("SpiritCoin");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('SpiritCoin', (accounts) => {
	it('test for SpiritCoin', async () => {
		const addressUqoPE1U = accounts[0]
		const addressr4emqIR = accounts[2]
		const SpiritCoinpRqsDo1 = await SpiritCoin.new(addressUqoPE1U, addressr4emqIR, {from: accounts[5]});
		const addressJoEk3D9 = accounts[1]
		const address5nR2SL = accounts[3]
		const addresswwFEsF = accounts[4]
		const addressqscA16r = accounts[0]
		const uintXvvxrWS = BigInt("773")
		const addressm2BpRyL = accounts[5]
		const addressmDjGomY = accounts[0]
		const uintGc2FZjb = await SpiritCoinpRqsDo1.balanceOf.call(addressJoEk3D9, {from: accounts[3]});
//		const addressQsjWlyk = await SpiritCoinpRqsDo1.setMinter.call(address5nR2SL, {from: accounts[0]});
//		const uint66nzZa = await SpiritCoinpRqsDo1.allowance.call(addressqscA16r, addresswwFEsF, {from: accounts[5]});
//		const boolk91tVYI = await SpiritCoinpRqsDo1.transfer.call(addressm2BpRyL, uintXvvxrWS, {from: accounts[4]});
//		const uintyhsoCV = await SpiritCoinpRqsDo1.balanceOf.call(addressmDjGomY, {from: accounts[0]});

		assert.equal(uintGc2FZjb, BigInt("0"))
		await expect(SpiritCoinpRqsDo1.setMinter.call(address5nR2SL, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SpiritCoin', async () => {
		const addresszvaCxJm = accounts[5]
		const addressy3ZGWTz = accounts[5]
		const SpiritCoinhXBGu8w = await SpiritCoin.new(addresszvaCxJm, addressy3ZGWTz, {from: accounts[0]});
		const uintjKkqVF6 = BigInt("2031")
		const addressazDRSQK = accounts[0]
		const addressg1bzfH = "0x0000000000000000000000000000000000000001"
		const addressSIwCXqX = accounts[5]
		const address3U5ldL = "0x0000000000000000000000000000000000000001"
		const uintTVUttwt = BigInt("1153")
		const addresszvk42bI = accounts[5]
		const addressxHm0L4 = accounts[3]
		const boolIPG6ccI = await SpiritCoinhXBGu8w.approve.call(addressazDRSQK, uintjKkqVF6, {from: accounts[0]});
		const uinth8yhXNs = await SpiritCoinhXBGu8w.allowance.call(addressSIwCXqX, addressg1bzfH, {from: accounts[3]});
//		const addressyU2emPW = await SpiritCoinhXBGu8w.setMinter.call(address3U5ldL, {from: accounts[3]});
//		const boolbRtDZtG = await SpiritCoinhXBGu8w.approve.call(addresszvk42bI, uintTVUttwt, {from: accounts[2]});
//		const addressJjHdcj = await SpiritCoinhXBGu8w.setMinter.call(addressxHm0L4, {from: accounts[0]});

		assert.equal(boolIPG6ccI, true)
		assert.equal(uinth8yhXNs, BigInt("0"))
		await expect(SpiritCoinhXBGu8w.setMinter.call(address3U5ldL, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for SpiritCoin', async () => {
		const addressBRkhurS = accounts[4]
		const addresspUegH6b = accounts[3]
		const SpiritCoingYosrI = await SpiritCoin.new(addressBRkhurS, addresspUegH6b, {from: accounts[3]});
		const uint4KB17T = BigInt("1576")
		const addressJnECaz = accounts[2]
		const uintFqApFre = BigInt("1477")
		const addressJGf6tdu = accounts[5]
//		const bool6VVJvx = await SpiritCoingYosrI.transfer.call(addressJnECaz, uint4KB17T, {from: accounts[3]});
//		const boolreEmqMc = await SpiritCoingYosrI.approve.call(addressJGf6tdu, uintFqApFre, {from: accounts[4]});

		await expect(SpiritCoingYosrI.transfer.call(addressJnECaz, uint4KB17T, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for SpiritCoin', async () => {
		const addressknMjub0 = accounts[2]
		const addressTXQ9wyx = accounts[0]
		const SpiritCoinoT86Daz = await SpiritCoin.new(addressknMjub0, addressTXQ9wyx, {from: accounts[2]});
		const uintcbnFPoL = BigInt("531")
		const addresscV7rrFV = accounts[3]
		const addressJcjVrFV = accounts[1]
		const addressiWoLymj = accounts[1]
		const uintGJFvz3M = BigInt("1804")
		const addressqsAP07J = accounts[4]
		const addresseFROaX3 = "0x0000000000000000000000000000000000000001"
		const uintbo49Ppk = BigInt("216")
		const addressuS8Q1b = accounts[5]
		const addressl7xrfeG = accounts[1]
//		const addressZreL3fQ = await SpiritCoinoT86Daz.mint.call(addresscV7rrFV, uintcbnFPoL, {from: accounts[5]});
//		const uintnCCnf7F = await SpiritCoinoT86Daz.allowance.call(addressiWoLymj, addressJcjVrFV, {from: accounts[0]});
//		const boolOwDxWNi = await SpiritCoinoT86Daz.transfer.call(addressqsAP07J, uintGJFvz3M, {from: accounts[3]});
//		const uintlTOKKat = await SpiritCoinoT86Daz.balanceOf.call(addresseFROaX3, {from: accounts[0]});
//		const boolhY4tQd = await SpiritCoinoT86Daz.transferFrom.call(addressl7xrfeG, addressuS8Q1b, uintbo49Ppk, {from: accounts[0]});

		await expect(SpiritCoinoT86Daz.mint.call(addresscV7rrFV, uintcbnFPoL, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for SpiritCoin', async () => {
		const addressRBHQkrW = accounts[5]
		const addresskHsgO8 = accounts[3]
		const SpiritCoinzlimyBf = await SpiritCoin.new(addressRBHQkrW, addresskHsgO8, {from: "0x0000000000000000000000000000000000000001"});
		const addressac429Yj = accounts[0]
		const addressdDNeD3 = accounts[3]
		const addressaVwHD29 = accounts[0]
		const uintYcF7LKq = BigInt("106")
		const addressSc3hPTQ = accounts[3]
		const addressAuw3C1h = accounts[2]
		const uinttMu4ZCY = await SpiritCoinzlimyBf.balanceOf.call(addressac429Yj, {from: accounts[3]});
		const uintXJxQTEi = await SpiritCoinzlimyBf.allowance.call(addressaVwHD29, addressdDNeD3, {from: accounts[5]});
		const boolKNDdop6 = await SpiritCoinzlimyBf.approve.call(addressSc3hPTQ, uintYcF7LKq, {from: accounts[4]});
		const uintVy9fnsc = await SpiritCoinzlimyBf.balanceOf.call(addressAuw3C1h, {from: accounts[1]});
	});

	it('test for SpiritCoin', async () => {
		const addressZvUvOjb = accounts[2]
		const addresstcP2yUl = "0x0000000000000000000000000000000000000001"
		const SpiritCoinzCBHCoN = await SpiritCoin.new(addressZvUvOjb, addresstcP2yUl, {from: accounts[4]});
		const uintqsbVYAO = BigInt("1455")
		const addressPnXPw1P = "0x0000000000000000000000000000000000000001"
		const uintHjF9OfO = BigInt("1707")
		const addressNa4rq9F = accounts[0]
		const uintsZd8gJU = BigInt("170")
		const addressO6Eeftu = accounts[0]
		const boolaYE19P5 = await SpiritCoinzCBHCoN.transfer.call(addressPnXPw1P, uintqsbVYAO, {from: accounts[2]});
		const boolkxWAFeH = await SpiritCoinzCBHCoN.approve.call(addressNa4rq9F, uintHjF9OfO, {from: accounts[2]});
		const boolK2rIZ2k = await SpiritCoinzCBHCoN.approve.call(addressO6Eeftu, uintsZd8gJU, {from: accounts[0]});

		assert.equal(boolK2rIZ2k, true)
		assert.equal(boolaYE19P5, true)
		assert.equal(boolkxWAFeH, true)
	});

	it('test for SpiritCoin', async () => {
		const addresspqBtHN = accounts[2]
		const addressBhIvHov = accounts[2]
		const SpiritCoinEiCRIC = await SpiritCoin.new(addresspqBtHN, addressBhIvHov, {from: accounts[4]});
		const uintdUFGPS = BigInt("873")
		const addressjpsWXzi = "0x0000000000000000000000000000000000000001"
		const addressgqrWtT = accounts[0]
		const uintYAJeqo2 = BigInt("969")
		const addressrTNpXqH = accounts[1]
		const uintJVjm9h4 = BigInt("1589")
		const addressQcpE93R = accounts[3]
		const addressE1vqGOV = accounts[0]
		const addressi3aqUPQ = accounts[0]
		const addressnIxOVXx = accounts[1]
		const uintPuBk4Zq = BigInt("672")
		const addressLJKwZ2v = accounts[2]
		const addressDd77f5Q = "0x0000000000000000000000000000000000000001"
//		const boolbuplL0 = await SpiritCoinEiCRIC.transferFrom.call(addressgqrWtT, addressjpsWXzi, uintdUFGPS, {from: accounts[1]});
//		const addressFFK9kD6 = await SpiritCoinEiCRIC.mint.call(addressrTNpXqH, uintYAJeqo2, {from: accounts[4]});
//		const boolGTYT9mV = await SpiritCoinEiCRIC.transfer.call(addressQcpE93R, uintJVjm9h4, {from: accounts[3]});
//		const uintbbhuhNF = await SpiritCoinEiCRIC.allowance.call(addressi3aqUPQ, addressE1vqGOV, {from: accounts[4]});
//		const addressOLQVcyc = await SpiritCoinEiCRIC.setMinter.call(addressnIxOVXx, {from: accounts[3]});
//		const boolB46p64o = await SpiritCoinEiCRIC.transferFrom.call(addressDd77f5Q, addressLJKwZ2v, uintPuBk4Zq, {from: accounts[0]});

		await expect(SpiritCoinEiCRIC.transferFrom.call(addressgqrWtT, addressjpsWXzi, uintdUFGPS, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for SpiritCoin', async () => {
		const addressM5DU8C = "0x0000000000000000000000000000000000000001"
		const addressJDHGgD = accounts[4]
		const SpiritCoinUPTlMc6 = await SpiritCoin.new(addressM5DU8C, addressJDHGgD, {from: accounts[0]});
		const uintIf2oP5Z = BigInt("400")
		const addressHz1OUGm = accounts[3]
		const addressI66fVjS = accounts[3]
		const addressp6J7I9c = await SpiritCoinUPTlMc6.mint.call(addressHz1OUGm, uintIf2oP5Z, {from: accounts[4]});
		const uint9v9zqb = await SpiritCoinUPTlMc6.balanceOf.call(addressI66fVjS, {from: accounts[0]});

		assert.equal(uint9v9zqb, BigInt("0"))
	});

	it('test for SpiritCoin', async () => {
		const address9uPP44 = accounts[2]
		const address8kjOIb = accounts[2]
		const SpiritCoinEiCRIC = await SpiritCoin.new(address9uPP44, address8kjOIb, {from: accounts[4]});
		const addressxgPL2Ca = accounts[3]
		const addressSPSOoel = accounts[1]
		const addressA0I9ngG = await SpiritCoinEiCRIC.setMinter.call(addressxgPL2Ca, {from: accounts[2]});
//		const addressOLQVcyc = await SpiritCoinEiCRIC.setMinter.call(addressSPSOoel, {from: accounts[3]});

		await expect(SpiritCoinEiCRIC.setMinter.call(addressSPSOoel, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})