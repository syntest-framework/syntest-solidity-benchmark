const Layerx = artifacts.require("Layerx");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Layerx', (accounts) => {
	it('test for Layerx', async () => {
		const addressSGaGb1Z = accounts[5]
		const LayerxRRm42mq = await Layerx.new(addressSGaGb1Z, {from: accounts[4]});
		const byteVmoqy7Y = "0x0e01111215121605070b041f0d1711150b04141d06"
		const uintKyBci4H = BigInt("1517")
		const addressXRPxX5b = accounts[2]
		const addressCbVdP0G = accounts[4]
		const uint0oF1pq = BigInt("979")
		const bytelCdIqsG = "0x1f1a"
		const uintUz7ui0R = BigInt("792")
		const addresslnT9jvm = accounts[2]
//		await LayerxRRm42mq.paused.call({from: "0x0000000000000000000000000000000000000001"});
//		const boolMuTLowQ = await LayerxRRm42mq.approveAndCall.call(addressXRPxX5b, uintKyBci4H, byteVmoqy7Y, {from: accounts[4]});
//		const addressjvgDupC = await LayerxRRm42mq.setNewStakeCreator.call(addressCbVdP0G, {from: accounts[1]});
//		const uintQL4VMF = await LayerxRRm42mq.exist.call(uint0oF1pq, {from: accounts[0]});
//		const boolYx9ZfNI = await LayerxRRm42mq.approveAndCall.call(addresslnT9jvm, uintUz7ui0R, bytelCdIqsG, {from: accounts[4]});
//		const uintfccRBNr = await LayerxRRm42mq.totalSupply.call({from: accounts[5]});

		await expect(LayerxRRm42mq.paused.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressUq8mL0e = accounts[0]
		const LayerxiY6OKik = await Layerx.new(addressUq8mL0e, {from: accounts[3]});
		const uintOSknbX8 = BigInt("112")
		const address0AWOVd = accounts[0]
		const uintDE0cXso = BigInt("441")
		const booldQAELVu = await LayerxiY6OKik.approve.call(address0AWOVd, uintOSknbX8, {from: accounts[2]});
//		await LayerxiY6OKik.unlock.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256goERQuE = await LayerxiY6OKik.burn.call(uintDE0cXso, {from: accounts[5]});
//		await LayerxiY6OKik.addStakePayment.call({from: accounts[5]});

		assert.equal(booldQAELVu, true)
		await expect(LayerxiY6OKik.unlock.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressLlSIDRX = accounts[3]
		const Layerxfo8Yby9 = await Layerx.new(addressLlSIDRX, {from: accounts[4]});
		const addressRieeziK = accounts[5]
		const boolr8BimzK = true
		const uints5kKelm = BigInt("1526")
		const addressuQdXYRm = accounts[1]
//		const addressT510iv7 = await Layerxfo8Yby9.transferOwnership.call(addressRieeziK, {from: accounts[5]});
//		const boolFYwrRME = await Layerxfo8Yby9.setIsPaused.call(boolr8BimzK, {from: accounts[4]});
//		const uintOwIuoDU = await Layerxfo8Yby9.exist.call(uints5kKelm, {from: accounts[1]});
//		await Layerxfo8Yby9.unlock.call({from: accounts[3]});
//		const addressV1EVO3n = await Layerxfo8Yby9.transferOwnership.call(addressuQdXYRm, {from: accounts[4]});

		await expect(Layerxfo8Yby9.transferOwnership.call(addressRieeziK, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressAfSVxfQ = accounts[0]
		const LayerxZBGe8hF = await Layerx.new(addressAfSVxfQ, {from: accounts[3]});
		const addressF9hlhS6 = "0x0000000000000000000000000000000000000001"
		const addresso9mW2xd = accounts[5]
		const uintOpTb0UX = BigInt("905")
		const uintidaSlqr = await LayerxZBGe8hF.balanceOf.call(addressF9hlhS6, {from: accounts[5]});
//		const addresszPsVf3h = await LayerxZBGe8hF.transferOwnership.call(addresso9mW2xd, {from: "0x0000000000000000000000000000000000000001"});
//		const uintPSfjSye = await LayerxZBGe8hF.exist.call(uintOpTb0UX, {from: accounts[1]});
//		await LayerxZBGe8hF.unlock.call({from: accounts[4]});

		assert.equal(uintidaSlqr, BigInt("0"))
		await expect(LayerxZBGe8hF.transferOwnership.call(addresso9mW2xd, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressZZAMH7x = accounts[4]
		const Layerxqrn7pIe = await Layerx.new(addressZZAMH7x, {from: accounts[3]});
		const addressviH4FUg = accounts[5]
		const addressAQ0wcIw = accounts[3]
		const uintvpCQGJI = await Layerxqrn7pIe.balanceOf.call(addressviH4FUg, {from: accounts[5]});
//		await Layerxqrn7pIe.f.call({from: accounts[1]});
//		const addressHoyM5Le = await Layerxqrn7pIe.transferOwnership.call(addressAQ0wcIw, {from: accounts[4]});
//		const uintd3vLXP = await Layerxqrn7pIe.totalSupply.call({from: accounts[4]});
//		await Layerxqrn7pIe.addStakePayment.call({from: accounts[0]});

		assert.equal(uintvpCQGJI, BigInt("0"))
		await expect(Layerxqrn7pIe.f.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressLlZH2BX = accounts[0]
		const LayerxW1606sv = await Layerx.new(addressLlZH2BX, {from: accounts[1]});
		const addressiuREmIm = accounts[2]
		const addressaTjw5d = accounts[4]
		const addressIklrngj = accounts[4]
		const addressWIByycP = accounts[0]
		const uinthGFKXrF = BigInt("1809")
		const byteGB5jAPE = "0x1607"
		const uintpYNsTZU = BigInt("1662")
		const addresscyu5gJJ = accounts[0]
		const uintuOY4z1t = BigInt("1417")
		const uintcUP4bOx = await LayerxW1606sv.allowance.call(addressaTjw5d, addressiuREmIm, {from: accounts[1]});
		const uintZ37UjBE = await LayerxW1606sv.allowance.call(addressWIByycP, addressIklrngj, {from: accounts[0]});
//		const uintGLoxNLq = await LayerxW1606sv.lock.call(uinthGFKXrF, {from: accounts[4]});
//		const bool2dm6Du = await LayerxW1606sv.approveAndCall.call(addresscyu5gJJ, uintpYNsTZU, byteGB5jAPE, {from: accounts[4]});
//		const uintUN0QTTT = await LayerxW1606sv.withdraw.call(uintuOY4z1t, {from: accounts[5]});
//		const uintH57E9WV = await LayerxW1606sv.getStakesNum.call({from: accounts[4]});

		assert.equal(uintZ37UjBE, BigInt("0"))
		assert.equal(uintcUP4bOx, BigInt("0"))
		await expect(LayerxW1606sv.lock.call(uinthGFKXrF, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressZJpULLh = accounts[2]
		const LayerxmE4sCh1 = await Layerx.new(addressZJpULLh, {from: accounts[1]});
		const byteSttguGG = "0x030c0e1d06191d010308050713101c11050d091e1b01040d13"
		const uintqOPgFJ4 = BigInt("68")
		const addressnSKPiuh = accounts[3]
		const uintBOEuscm = await LayerxmE4sCh1.getStakesNum.call({from: accounts[1]});
//		const boolY5lkUu8 = await LayerxmE4sCh1.approveAndCall.call(addressnSKPiuh, uintqOPgFJ4, byteSttguGG, {from: accounts[1]});

		assert.equal(uintBOEuscm, BigInt("1"))
		await expect(LayerxmE4sCh1.approveAndCall.call(addressnSKPiuh, uintqOPgFJ4, byteSttguGG, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressYZXstps = accounts[1]
		const LayerxiCPYYBF = await Layerx.new(addressYZXstps, {from: accounts[2]});
		const uintVRbTLcO = BigInt("62")
		const addressH60nkf = accounts[4]
//		const uintzatMIFL = await LayerxiCPYYBF.withdraw.call(uintVRbTLcO, {from: accounts[4]});
//		const uintGQivBBc = await LayerxiCPYYBF.getStakesNum.call({from: accounts[3]});
//		const uintlpbp2z2 = await LayerxiCPYYBF.balanceOf.call(addressH60nkf, {from: accounts[2]});
//		await LayerxiCPYYBF.addStakePayment.call({from: accounts[4]});

		await expect(LayerxiCPYYBF.withdraw.call(uintVRbTLcO, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressTz4ZvDm = accounts[2]
		const LayerxmE4sCh1 = await Layerx.new(addressTz4ZvDm, {from: accounts[1]});
		const boolEifQVUB = true
		const uintQ68nKV9 = BigInt("1824")
		const byteyQk57q1 = "0x030c0e1d06191d010308050713101c11050d091e1b01040d13"
		const uintSLRnJUw = BigInt("68")
		const addressxsxrA8K = accounts[2]
		const uintBOEuscm = await LayerxmE4sCh1.getStakesNum.call({from: accounts[1]});
		const boolqgC2h9H = await LayerxmE4sCh1.setIsPaused.call(boolEifQVUB, {from: accounts[2]});
//		const uint3FMThQ = await LayerxmE4sCh1.withdraw.call(uintQ68nKV9, {from: accounts[1]});
//		const boolY5lkUu8 = await LayerxmE4sCh1.approveAndCall.call(addressxsxrA8K, uintSLRnJUw, byteyQk57q1, {from: accounts[1]});

		assert.equal(uintBOEuscm, BigInt("1"))
		await expect(LayerxmE4sCh1.withdraw.call(uintQ68nKV9, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addresscKyAsmg = accounts[2]
		const LayerxmE4sCh1 = await Layerx.new(addresscKyAsmg, {from: accounts[1]});
		const uintPLFQDj = BigInt("404")
		const addressZjHzxDZ = accounts[5]
		const addressv8zGRP = accounts[2]
		const uintqWVe15M = BigInt("954")
		const addressDVZf7wB = accounts[1]
		const uintDnsB8Na = await LayerxmE4sCh1.getStakesNum.call({from: "0x0000000000000000000000000000000000000001"});
		const uintBOEuscm = await LayerxmE4sCh1.getStakesNum.call({from: accounts[1]});
//		const boolympCFHs = await LayerxmE4sCh1.transferFrom.call(addressv8zGRP, addressZjHzxDZ, uintPLFQDj, {from: accounts[1]});
//		const boolYU0TOxr = await LayerxmE4sCh1.approve.call(addressDVZf7wB, uintqWVe15M, {from: accounts[0]});

		assert.equal(uintBOEuscm, BigInt("1"))
		assert.equal(uintDnsB8Na, BigInt("1"))
		await expect(LayerxmE4sCh1.transferFrom.call(addressv8zGRP, addressZjHzxDZ, uintPLFQDj, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressTc8OtWH = accounts[2]
		const LayerxkiR2Pib = await Layerx.new(addressTc8OtWH, {from: accounts[0]});
		const uintUKIjpAd = BigInt("975")
		const addressn0w9r42 = accounts[3]
		const uint3GURu2 = BigInt("742")
		const addressDlLeMKe = accounts[5]
		const uintaKW2HAo = BigInt("1124")
//		const boolOnWWiN = await LayerxkiR2Pib.transfer.call(addressn0w9r42, uintUKIjpAd, {from: accounts[4]});
//		const boolsHayrK = await LayerxkiR2Pib.transfer.call(addressDlLeMKe, uint3GURu2, {from: accounts[0]});
//		const uintUIOd7wz = await LayerxkiR2Pib.withdraw.call(uintaKW2HAo, {from: accounts[3]});

		await expect(LayerxkiR2Pib.transfer.call(addressn0w9r42, uintUKIjpAd, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressVzuGQ4M = accounts[2]
		const LayerxmE4sCh1 = await Layerx.new(addressVzuGQ4M, {from: accounts[1]});
		const uintwDMWOlT = BigInt("130")
		const uintWfwCPB9 = BigInt("1674")
		const addressm9oN26U = accounts[4]
		const byteIoHa2Rb = "0x030c0e1d06191d010308050713101c11050d091e1b01040d13"
		const uintumxuqAu = BigInt("68")
		const addressTgCc1t3 = accounts[3]
		const uintRoSXoCz = BigInt("311")
		const uint256OJQpNn0 = await LayerxmE4sCh1.burn.call(uintwDMWOlT, {from: accounts[2]});
		const boolgSUth13 = await LayerxmE4sCh1.approve.call(addressm9oN26U, uintWfwCPB9, {from: accounts[0]});
//		const boolY5lkUu8 = await LayerxmE4sCh1.approveAndCall.call(addressTgCc1t3, uintumxuqAu, byteIoHa2Rb, {from: accounts[1]});
//		const uintspw0Mwk = await LayerxmE4sCh1.lock.call(uintRoSXoCz, {from: accounts[2]});

		assert.equal(boolgSUth13, true)
		await expect(LayerxmE4sCh1.approveAndCall.call(addressTgCc1t3, uintumxuqAu, byteIoHa2Rb, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressWGR3mCs = accounts[2]
		const LayerxmE4sCh1 = await Layerx.new(addressWGR3mCs, {from: accounts[1]});
		const addressxDPufHC = accounts[0]
		const uintR7vh8th = BigInt("881")
		const bytefGioBgn = "0x030c0e1d06191d010308050713101c11050d091e1b01040d13"
		const uintJBZ1bpz = BigInt("68")
		const addressqKVHhNU = accounts[4]
		const addressAnA6QK7 = await LayerxmE4sCh1.setNewStakeCreator.call(addressxDPufHC, {from: accounts[2]});
//		const uintyyJSWOo = await LayerxmE4sCh1.withdraw.call(uintR7vh8th, {from: accounts[4]});
//		const boolY5lkUu8 = await LayerxmE4sCh1.approveAndCall.call(addressqKVHhNU, uintJBZ1bpz, bytefGioBgn, {from: accounts[1]});

		await expect(LayerxmE4sCh1.withdraw.call(uintR7vh8th, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addresswjhhEou = accounts[2]
		const LayerxmE4sCh1 = await Layerx.new(addresswjhhEou, {from: accounts[1]});
		const addressFWWU6fV = accounts[3]
		const bytezHiA3XW = "0x030c0e1d06191d010308050713101c11050d091e1b01040d13"
		const uintSs5nV0R = BigInt("68")
		const addressUCq3o5b = accounts[2]
		const uintBCuRI53 = await LayerxmE4sCh1.balanceOf.call(addressFWWU6fV, {from: "0x0000000000000000000000000000000000000001"});
//		await LayerxmE4sCh1.addStakePayment.call({from: accounts[2]});
//		const boolY5lkUu8 = await LayerxmE4sCh1.approveAndCall.call(addressUCq3o5b, uintSs5nV0R, bytezHiA3XW, {from: accounts[1]});

		assert.equal(uintBCuRI53, BigInt("0"))
		await expect(LayerxmE4sCh1.addStakePayment.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressSz95jLi = accounts[1]
		const LayerxGchypZ = await Layerx.new(addressSz95jLi, {from: "0x0000000000000000000000000000000000000001"});
		const uintza4pkde = BigInt("1335")
		const addressiohSL79 = accounts[5]
		const addressvALczZZ = accounts[3]
		const uinth5FX9qb = BigInt("1411")
		const addressuXH7Ldo = accounts[3]
		const addresslG5ptgz = accounts[2]
		const uintNRtdLmo = BigInt("1783")
		const addressOJiNVd4 = accounts[5]
		await LayerxGchypZ.paused.call({from: accounts[4]});
		const uintntWYyZQ = await LayerxGchypZ.exist.call(uintza4pkde, {from: accounts[1]});
		const uintC7SlB8I = await LayerxGchypZ.allowance.call(addressvALczZZ, addressiohSL79, {from: accounts[5]});
		const boolrJy7mL6 = await LayerxGchypZ.transferFrom.call(addresslG5ptgz, addressuXH7Ldo, uinth5FX9qb, {from: accounts[1]});
		const boolMCvLd1 = await LayerxGchypZ.transfer.call(addressOJiNVd4, uintNRtdLmo, {from: accounts[2]});
		await LayerxGchypZ.unlock.call({from: accounts[3]});
	});
})