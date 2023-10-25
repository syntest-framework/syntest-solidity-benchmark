const AntiBaseProtocol = artifacts.require("AntiBaseProtocol");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('AntiBaseProtocol', (accounts) => {
	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolE1TyV9B = await AntiBaseProtocol.new({from: accounts[0]});
		const uintrs8Udno = BigInt("126")
		const addressNqZWL0V = "0x0000000000000000000000000000000000000001"
		const addressNp74OFe = accounts[3]
		const uintcF757us = BigInt("1440")
		const addressFsWr9SC = accounts[4]
		const addressfQLzYuH = accounts[1]
		const uintvtkP7D = BigInt("1656")
		const addressiMc78hP = accounts[3]
		const uintEa1KdBC = BigInt("1725")
		const addressfMBGPwn = accounts[3]
		const addressLO01zp = accounts[3]
//		const uint256SAkCEzq = await AntiBaseProtocolE1TyV9B.burn.call(uintrs8Udno, {from: accounts[3]});
//		const uint2565nIPuh = await AntiBaseProtocolE1TyV9B.allowance.call(addressNp74OFe, addressNqZWL0V, {from: accounts[3]});
//		const addressd3FG1Y = await AntiBaseProtocolE1TyV9B._approve.call(addressfQLzYuH, addressFsWr9SC, uintcF757us, {from: accounts[0]});
//		await AntiBaseProtocolE1TyV9B.requestGas.call({from: accounts[1]});
//		const addressBa2if4K = await AntiBaseProtocolE1TyV9B.burnFrom.call(addressiMc78hP, uintvtkP7D, {from: accounts[4]});
//		const boolBIqjODO = await AntiBaseProtocolE1TyV9B.transferFrom.call(addressLO01zp, addressfMBGPwn, uintEa1KdBC, {from: accounts[0]});

		await expect(AntiBaseProtocolE1TyV9B.burn.call(uintrs8Udno, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const stringURkdoes = "TXe3B7ey"
		const stringVXtBh2z = "ogZfAoUguD5DxzStgqBWzkfp1s8tyozlG1JW0PF9lCSMAdKqiAFJmdWhepN6yBLFbCSuSgiDEXe3XgAe3Pogyc9jDF29QDeh"
		const uintoaa68Im = BigInt("157")
		const AntiBaseProtocolFmMwV7A = await AntiBaseProtocol.new(stringURkdoes, stringVXtBh2z, uintoaa68Im, {from: "0x0000000000000000000000000000000000000001"});
		const uintibMcWxM = BigInt("915")
		const addressj4qb43n = accounts[3]
		const uintlRz9eEC = BigInt("1876")
		const uintGLDQaBD = BigInt("1255")
		const booljRLBMba = await AntiBaseProtocolFmMwV7A.increaseAllowance.call(addressj4qb43n, uintibMcWxM, {from: accounts[5]});
		const uint256aqalPLu = await AntiBaseProtocolFmMwV7A.findBurnFee.call(uintlRz9eEC, {from: "0x0000000000000000000000000000000000000001"});
		const uint256QQRYEWP = await AntiBaseProtocolFmMwV7A.findBurnFee.call(uintGLDQaBD, {from: accounts[0]});
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolscJTfi = await AntiBaseProtocol.new({from: accounts[4]});
		const uintGOAseaQ = BigInt("1666")
		const addressCTD05tc = accounts[2]
//		await AntiBaseProtocolscJTfi.renounceOwnership.call({from: accounts[5]});
//		const uint8gqgnNtT = await AntiBaseProtocolscJTfi.decimals.call({from: accounts[2]});
//		const uint256liPIHCZ = await AntiBaseProtocolscJTfi.findBurnFee.call(uintGOAseaQ, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256uqPqkZy = await AntiBaseProtocolscJTfi.balanceOf.call(addressCTD05tc, {from: accounts[1]});

		await expect(AntiBaseProtocolscJTfi.renounceOwnership.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolPlx9hKj = await AntiBaseProtocol.new({from: accounts[2]});
		const uintzGvhPYJ = BigInt("1984")
		const addresslK50g2c = accounts[5]
		const uintwI8MdpI = BigInt("535")
		const addressUpXNvnX = accounts[3]
		const uintkVEWPg = BigInt("1203")
		const addressM2yXzEZ = accounts[1]
		const addresstM1wP7O = accounts[2]
		const uintcZ7bDI1 = BigInt("421")
//		const boolfDCpLa1 = await AntiBaseProtocolPlx9hKj.decreaseAllowance.call(addresslK50g2c, uintzGvhPYJ, {from: accounts[5]});
//		const booldLWx14w = await AntiBaseProtocolPlx9hKj.approve.call(addressUpXNvnX, uintwI8MdpI, {from: accounts[3]});
//		const boolzlxU6IN = await AntiBaseProtocolPlx9hKj.increaseAllowance.call(addressM2yXzEZ, uintkVEWPg, {from: accounts[3]});
//		const addressWg1RQvE = await AntiBaseProtocolPlx9hKj.transferOwnership.call(addresstM1wP7O, {from: accounts[5]});
//		const uint256JtmeIum = await AntiBaseProtocolPlx9hKj.burn.call(uintcZ7bDI1, {from: accounts[0]});

		await expect(AntiBaseProtocolPlx9hKj.decreaseAllowance.call(addresslK50g2c, uintzGvhPYJ, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolHEEXGCQ = await AntiBaseProtocol.new({from: accounts[2]});
		const uint6ZuSm5 = BigInt("55")
		const addressxoPK001 = accounts[3]
		const uintL4UrXI3 = BigInt("339")
		const uintgcMsa9s = BigInt("1629")
		const addresseAn7RTT = accounts[3]
		const address2flBTD = accounts[4]
		const boolibsCxR = await AntiBaseProtocolHEEXGCQ.isOwner.call({from: accounts[5]});
//		const addressqLgZJ5M = await AntiBaseProtocolHEEXGCQ._burnFrom.call(addressxoPK001, uint6ZuSm5, {from: accounts[2]});
//		const uint256OZsKDq = await AntiBaseProtocolHEEXGCQ.findRewardFee.call(uintL4UrXI3, {from: accounts[4]});
//		const stringLaEaYaf = await AntiBaseProtocolHEEXGCQ.symbol.call({from: accounts[3]});
//		const boolyzDfrLM = await AntiBaseProtocolHEEXGCQ.transferFrom.call(address2flBTD, addresseAn7RTT, uintgcMsa9s, {from: accounts[5]});

		assert.equal(boolibsCxR, false)
		await expect(AntiBaseProtocolHEEXGCQ._burnFrom.call(addressxoPK001, uint6ZuSm5, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolPlx9hKj = await AntiBaseProtocol.new({from: accounts[2]});
		const addressWcsToLH = accounts[4]
		const addressi6tuQg = accounts[0]
		const uintvTozVGH = BigInt("1984")
		const addressqXOchbt = accounts[5]
		const uintPf65XI3 = BigInt("535")
		const addressMu51YRu = accounts[3]
		const uintQwRSnV0 = BigInt("1203")
		const addressyFlJtEt = accounts[1]
		const uintgRZ1863 = BigInt("1997")
		const addressd5OSMWz = accounts[3]
		const uintVuOTNT = BigInt("562")
		const addressPjPrCrz = accounts[0]
		const addressjQBCmBi = accounts[3]
		const uintcNp4XdK = BigInt("421")
		const uint256OkqC7X = await AntiBaseProtocolPlx9hKj.allowance.call(addressi6tuQg, addressWcsToLH, {from: accounts[3]});
//		const boolfDCpLa1 = await AntiBaseProtocolPlx9hKj.decreaseAllowance.call(addressqXOchbt, uintvTozVGH, {from: accounts[5]});
//		const booldLWx14w = await AntiBaseProtocolPlx9hKj.approve.call(addressMu51YRu, uintPf65XI3, {from: accounts[3]});
//		const boolzlxU6IN = await AntiBaseProtocolPlx9hKj.increaseAllowance.call(addressyFlJtEt, uintQwRSnV0, {from: accounts[3]});
//		const boolJ8bGD4E = await AntiBaseProtocolPlx9hKj.increaseAllowance.call(addressd5OSMWz, uintgRZ1863, {from: accounts[3]});
//		const addressM4dyvEO = await AntiBaseProtocolPlx9hKj._burn.call(addressPjPrCrz, uintVuOTNT, {from: accounts[0]});
//		const addressWg1RQvE = await AntiBaseProtocolPlx9hKj.transferOwnership.call(addressjQBCmBi, {from: accounts[5]});
//		const uint256JtmeIum = await AntiBaseProtocolPlx9hKj.burn.call(uintcNp4XdK, {from: accounts[0]});

		assert.equal(uint256OkqC7X, BigInt("0"))
		await expect(AntiBaseProtocolPlx9hKj.decreaseAllowance.call(addressqXOchbt, uintvTozVGH, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolPlx9hKj = await AntiBaseProtocol.new({from: accounts[2]});
		const uintEQo3o4t = BigInt("1420")
		const addressV2y3twX = accounts[2]
		const uintm8Lhqn = BigInt("1984")
		const addressA6Y1Fur = accounts[5]
		const uintcuQXHVz = BigInt("519")
		const addressh8qvslP = accounts[3]
		const uintaiFRURd = BigInt("1203")
		const addressDpHerC = accounts[1]
		const uintORYxRVs = BigInt("421")
		const boolHrAfKeF = await AntiBaseProtocolPlx9hKj.approve.call(addressV2y3twX, uintEQo3o4t, {from: "0x0000000000000000000000000000000000000001"});
//		const boolfDCpLa1 = await AntiBaseProtocolPlx9hKj.decreaseAllowance.call(addressA6Y1Fur, uintm8Lhqn, {from: accounts[5]});
//		const booldLWx14w = await AntiBaseProtocolPlx9hKj.approve.call(addressh8qvslP, uintcuQXHVz, {from: accounts[3]});
//		const boolzlxU6IN = await AntiBaseProtocolPlx9hKj.increaseAllowance.call(addressDpHerC, uintaiFRURd, {from: accounts[3]});
//		const uint256JtmeIum = await AntiBaseProtocolPlx9hKj.burn.call(uintORYxRVs, {from: accounts[0]});

		assert.equal(boolHrAfKeF, true)
		await expect(AntiBaseProtocolPlx9hKj.decreaseAllowance.call(addressA6Y1Fur, uintm8Lhqn, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolPlx9hKj = await AntiBaseProtocol.new({from: accounts[2]});
		const uintCCUh2TQ = BigInt("1203")
		const addressCEbB2Pv = accounts[1]
		const uintt88A1NE = BigInt("439")
		const boolzlxU6IN = await AntiBaseProtocolPlx9hKj.increaseAllowance.call(addressCEbB2Pv, uintCCUh2TQ, {from: accounts[3]});
//		await AntiBaseProtocolPlx9hKj.requestGas.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256JtmeIum = await AntiBaseProtocolPlx9hKj.burn.call(uintt88A1NE, {from: accounts[0]});

		assert.equal(boolzlxU6IN, true)
		await expect(AntiBaseProtocolPlx9hKj.requestGas.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolPlx9hKj = await AntiBaseProtocol.new({from: accounts[2]});
		const uint0rk5ZJ = BigInt("1203")
		const addressIuJNEoc = accounts[1]
		const addressGI25xyo = accounts[5]
		const boolzlxU6IN = await AntiBaseProtocolPlx9hKj.increaseAllowance.call(addressIuJNEoc, uint0rk5ZJ, {from: accounts[3]});
		const uint256kAaCwXO = await AntiBaseProtocolPlx9hKj.totalSupply.call({from: accounts[3]});
//		const addressP1QSQIz = await AntiBaseProtocolPlx9hKj._transferOwnership.call(addressGI25xyo, {from: accounts[1]});

		assert.equal(boolzlxU6IN, true)
		assert.equal(uint256kAaCwXO, BigInt("31250000000000000000"))
		await expect(AntiBaseProtocolPlx9hKj._transferOwnership.call(addressGI25xyo, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolPlx9hKj = await AntiBaseProtocol.new({from: accounts[2]});
		const uintiKtHyCF = BigInt("1983")
		const addresse9bIAYP = accounts[5]
		const stringWn1tt6y = await AntiBaseProtocolPlx9hKj.name.call({from: accounts[0]});
//		const boolfDCpLa1 = await AntiBaseProtocolPlx9hKj.decreaseAllowance.call(addresse9bIAYP, uintiKtHyCF, {from: accounts[5]});
//		const stringmbvIoq = await AntiBaseProtocolPlx9hKj.name.call({from: accounts[4]});

		assert.equal(stringWn1tt6y, "https://t.me/antibaseprotocol")
		await expect(AntiBaseProtocolPlx9hKj.decreaseAllowance.call(addresse9bIAYP, uintiKtHyCF, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolNztJsrH = await AntiBaseProtocol.new({from: accounts[4]});
		const uintjqRUM2 = BigInt("818")
		const uintJiABrb = BigInt("8")
		const addresshNNSPB7 = accounts[3]
		const addressDZS8UJ = accounts[1]
		const uintgRAeRvB = BigInt("78")
		const uint256Vm8xUZy = await AntiBaseProtocolNztJsrH.findRewardFee.call(uintjqRUM2, {from: accounts[4]});
//		const addressnl2BjlS = await AntiBaseProtocolNztJsrH._approve.call(addressDZS8UJ, addresshNNSPB7, uintJiABrb, {from: accounts[1]});
//		const uint256dJCheTf = await AntiBaseProtocolNztJsrH.findRewardFee.call(uintgRAeRvB, {from: accounts[3]});

		assert.equal(uint256Vm8xUZy, BigInt("45"))
		await expect(AntiBaseProtocolNztJsrH._approve.call(addressDZS8UJ, addresshNNSPB7, uintJiABrb, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolNztJsrH = await AntiBaseProtocol.new({from: accounts[4]});
		const uintNL3j3xM = BigInt("818")
		const uintwhM9tae = BigInt("1657")
		const addressuZiwztx = accounts[3]
		const addressjAd79hP = accounts[1]
		const uintTgUDkAZ = BigInt("8")
		const addressHVWdWnz = accounts[3]
		const addresskwWjwNN = accounts[1]
		const uintiywS2bK = BigInt("46")
		const uint256Vm8xUZy = await AntiBaseProtocolNztJsrH.findRewardFee.call(uintNL3j3xM, {from: accounts[4]});
//		const boolM3msrOT = await AntiBaseProtocolNztJsrH.transferFrom.call(addressjAd79hP, addressuZiwztx, uintwhM9tae, {from: accounts[1]});
//		const addressnl2BjlS = await AntiBaseProtocolNztJsrH._approve.call(addresskwWjwNN, addressHVWdWnz, uintTgUDkAZ, {from: accounts[1]});
//		const uint256dJCheTf = await AntiBaseProtocolNztJsrH.findRewardFee.call(uintiywS2bK, {from: accounts[3]});
//		await AntiBaseProtocolNztJsrH.renounceOwnership.call({from: accounts[0]});

		assert.equal(uint256Vm8xUZy, BigInt("45"))
		await expect(AntiBaseProtocolNztJsrH.transferFrom.call(addressjAd79hP, addressuZiwztx, uintwhM9tae, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolNztJsrH = await AntiBaseProtocol.new({from: accounts[4]});
		const uinteXQRERV = BigInt("818")
		const uintzmREc24 = BigInt("952")
		const addressUtjEmoN = "0x0000000000000000000000000000000000000001"
		const uinthuFCWZ = BigInt("77")
		const addressS1SV9q = accounts[4]
		const uintICZ5if = BigInt("1225")
		const addressdfVHvt8 = accounts[0]
		const uintXv1ZHCz = BigInt("8")
		const addressqGq8JY5 = accounts[3]
		const addressHnSq0F4 = accounts[1]
		const uintii1R4Yf = BigInt("967")
		const uint256Vm8xUZy = await AntiBaseProtocolNztJsrH.findRewardFee.call(uinteXQRERV, {from: accounts[4]});
		const booleo7UFjz = await AntiBaseProtocolNztJsrH.approve.call(addressUtjEmoN, uintzmREc24, {from: accounts[3]});
		const boolr7DlYaC = await AntiBaseProtocolNztJsrH.approve.call(addressS1SV9q, uinthuFCWZ, {from: accounts[2]});
//		const addressUah9no9 = await AntiBaseProtocolNztJsrH.burnFrom.call(addressdfVHvt8, uintICZ5if, {from: accounts[0]});
//		const addressnl2BjlS = await AntiBaseProtocolNztJsrH._approve.call(addressHnSq0F4, addressqGq8JY5, uintXv1ZHCz, {from: accounts[1]});
//		const uint256dJCheTf = await AntiBaseProtocolNztJsrH.findRewardFee.call(uintii1R4Yf, {from: accounts[3]});

		assert.equal(booleo7UFjz, true)
		assert.equal(boolr7DlYaC, true)
		assert.equal(uint256Vm8xUZy, BigInt("45"))
		await expect(AntiBaseProtocolNztJsrH.burnFrom.call(addressdfVHvt8, uintICZ5if, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolNztJsrH = await AntiBaseProtocol.new({from: accounts[4]});
		const addressrkKJsU8 = accounts[2]
		const addressknpKuPl = accounts[5]
		const uintgUwVq2 = BigInt("818")
		const uintxiNaYFC = BigInt("8")
		const addressn761T3H = accounts[3]
		const addressNET2uhA = accounts[2]
		const uintHDNdyEo = BigInt("78")
		const uint256RHgQTOm = await AntiBaseProtocolNztJsrH.allowance.call(addressknpKuPl, addressrkKJsU8, {from: accounts[2]});
		const uint256Vm8xUZy = await AntiBaseProtocolNztJsrH.findRewardFee.call(uintgUwVq2, {from: accounts[4]});
		const uint256wxyBZww = await AntiBaseProtocolNztJsrH.totalSupply.call({from: accounts[0]});
		const stringZo3TG5z = await AntiBaseProtocolNztJsrH.symbol.call({from: accounts[4]});
//		const addressnl2BjlS = await AntiBaseProtocolNztJsrH._approve.call(addressNET2uhA, addressn761T3H, uintxiNaYFC, {from: accounts[1]});
//		const uint256dJCheTf = await AntiBaseProtocolNztJsrH.findRewardFee.call(uintHDNdyEo, {from: accounts[3]});

		assert.equal(stringZo3TG5z, "ABASE")
		assert.equal(uint256RHgQTOm, BigInt("0"))
		assert.equal(uint256Vm8xUZy, BigInt("45"))
		assert.equal(uint256wxyBZww, BigInt("31250000000000000000"))
		await expect(AntiBaseProtocolNztJsrH._approve.call(addressNET2uhA, addressn761T3H, uintxiNaYFC, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolNztJsrH = await AntiBaseProtocol.new({from: accounts[4]});
		const uintBCyK0C6 = BigInt("956")
		const uintC3e1XRA = BigInt("1257")
		const uintyKFEbEE = BigInt("1657")
		const address9Q4TRo = accounts[3]
		const addressGq8GqO = accounts[1]
		const uintDBm49eK = BigInt("8")
		const addressFImORV = accounts[3]
		const addressSkJEMp9 = accounts[1]
		const uintSHystB5 = BigInt("46")
		const uint256Vm8xUZy = await AntiBaseProtocolNztJsrH.findRewardFee.call(uintBCyK0C6, {from: accounts[4]});
		const uint256QMlVlWC = await AntiBaseProtocolNztJsrH.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256mdZyWVG = await AntiBaseProtocolNztJsrH.findBurnFee.call(uintC3e1XRA, {from: accounts[0]});
//		const boolM3msrOT = await AntiBaseProtocolNztJsrH.transferFrom.call(addressGq8GqO, address9Q4TRo, uintyKFEbEE, {from: accounts[1]});
//		const addressnl2BjlS = await AntiBaseProtocolNztJsrH._approve.call(addressSkJEMp9, addressFImORV, uintDBm49eK, {from: accounts[1]});
//		const uint256dJCheTf = await AntiBaseProtocolNztJsrH.findRewardFee.call(uintSHystB5, {from: accounts[3]});
//		await AntiBaseProtocolNztJsrH.renounceOwnership.call({from: accounts[0]});

		assert.equal(uint256QMlVlWC, BigInt("31250000000000000000"))
		assert.equal(uint256Vm8xUZy, BigInt("50"))
		assert.equal(uint256mdZyWVG, BigInt("195"))
		await expect(AntiBaseProtocolNztJsrH.transferFrom.call(addressGq8GqO, address9Q4TRo, uintyKFEbEE, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocoljL4SqH = await AntiBaseProtocol.new({from: accounts[3]});
		const addresszb1KaSj = accounts[4]
		const addressrjS2qHc = "0x0000000000000000000000000000000000000001"
		const addressUFafooA = accounts[1]
		const addressFxd8ozB = accounts[0]
		const addresstiHwvim = accounts[3]
		const uint256zgEbtvr = await AntiBaseProtocoljL4SqH.balanceOf.call(addresszb1KaSj, {from: accounts[3]});
		const uint256YcAn6sT = await AntiBaseProtocoljL4SqH.allowance.call(addressUFafooA, addressrjS2qHc, {from: accounts[2]});
//		const addressrV2qehc = await AntiBaseProtocoljL4SqH._transferOwnership.call(addressFxd8ozB, {from: accounts[2]});
//		const addresstBcsiHt = await AntiBaseProtocoljL4SqH._transferOwnership.call(addresstiHwvim, {from: accounts[1]});

		assert.equal(uint256YcAn6sT, BigInt("0"))
		assert.equal(uint256zgEbtvr, BigInt("0"))
		await expect(AntiBaseProtocoljL4SqH._transferOwnership.call(addressFxd8ozB, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolNztJsrH = await AntiBaseProtocol.new({from: accounts[4]});
		const uintBNeUBG7 = BigInt("627")
		const addressGA5Mmv = accounts[0]
		const uintCM8qNk = BigInt("1443")
		const addressBUEbM6 = accounts[3]
		const uintbFMgUZP = BigInt("112")
//		const boolSvebMIQ = await AntiBaseProtocolNztJsrH.transfer.call(addressGA5Mmv, uintBNeUBG7, {from: accounts[0]});
//		const addressCo1ji2f = await AntiBaseProtocolNztJsrH.burnFrom.call(addressBUEbM6, uintCM8qNk, {from: accounts[2]});
//		const uint256dJCheTf = await AntiBaseProtocolNztJsrH.findRewardFee.call(uintbFMgUZP, {from: accounts[3]});

		await expect(AntiBaseProtocolNztJsrH.transfer.call(addressGA5Mmv, uintBNeUBG7, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolY3KzRd = await AntiBaseProtocol.new({from: "0x0000000000000000000000000000000000000001"});
		const uintdd4gDl = BigInt("1774")
		const uintefeaR3G = BigInt("1890")
		const addressdV6fWph = accounts[1]
		const addressdqCR6G3 = "0x0000000000000000000000000000000000000001"
		const uint256rBXz4UC = await AntiBaseProtocolY3KzRd.findBurnFee.call(uintdd4gDl, {from: accounts[1]});
		const uint256b3xVffe = await AntiBaseProtocolY3KzRd.totalSupply.call({from: accounts[4]});
		const uint256IZse3fv = await AntiBaseProtocolY3KzRd.findRewardFee.call(uintefeaR3G, {from: accounts[4]});
		const uint256VqaMVIF = await AntiBaseProtocolY3KzRd.allowance.call(addressdqCR6G3, addressdV6fWph, {from: accounts[2]});
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolNztJsrH = await AntiBaseProtocol.new({from: accounts[4]});
		const addressYE9EYq = "0x0000000000000000000000000000000000000001"
		const uintubBIgO = BigInt("78")
		const uint256uOKja6u = await AntiBaseProtocolNztJsrH.balanceOf.call(addressYE9EYq, {from: accounts[4]});
		const addresslWnZhb7 = await AntiBaseProtocolNztJsrH.owner.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256dJCheTf = await AntiBaseProtocolNztJsrH.findRewardFee.call(uintubBIgO, {from: accounts[3]});
		const boolrt9n6h5 = await AntiBaseProtocolNztJsrH.isOwner.call({from: accounts[1]});

		assert.equal(addresslWnZhb7, 0xfbDDd1BAf9cEe43128D7Ed8FA9ed49Aa6fB38bee)
		assert.equal(boolrt9n6h5, false)
		assert.equal(uint256dJCheTf, BigInt("5"))
		assert.equal(uint256uOKja6u, BigInt("0"))
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolNztJsrH = await AntiBaseProtocol.new({from: accounts[4]});
		const uintunXdm1v = BigInt("80")
		const uintdQtfNf = BigInt("691")
		const addressJIwoyg = accounts[5]
		const uint256dJCheTf = await AntiBaseProtocolNztJsrH.findRewardFee.call(uintunXdm1v, {from: accounts[3]});
		const uint8tbrS7EQ = await AntiBaseProtocolNztJsrH.decimals.call({from: accounts[2]});
		const uint8FS7wPjV = await AntiBaseProtocolNztJsrH.decimals.call({from: accounts[2]});
//		const boolSVqpaJ3 = await AntiBaseProtocolNztJsrH.decreaseAllowance.call(addressJIwoyg, uintdQtfNf, {from: accounts[3]});

		assert.equal(uint256dJCheTf, BigInt("5"))
		assert.equal(uint8FS7wPjV, BigInt("18"))
		assert.equal(uint8tbrS7EQ, BigInt("18"))
		await expect(AntiBaseProtocolNztJsrH.decreaseAllowance.call(addressJIwoyg, uintdQtfNf, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolNztJsrH = await AntiBaseProtocol.new({from: accounts[4]});
		const uintfiLuAXH = BigInt("310")
		const addressxnzHoSf = accounts[3]
		const addressCT6ubN9 = accounts[4]
		const uintpYvqVi = BigInt("139")
		const addressx8VSrf = accounts[3]
//		const boolVaxdooF = await AntiBaseProtocolNztJsrH.transferFrom.call(addressCT6ubN9, addressxnzHoSf, uintfiLuAXH, {from: accounts[1]});
//		const boolNnu5xVC = await AntiBaseProtocolNztJsrH.transfer.call(addressx8VSrf, uintpYvqVi, {from: accounts[2]});

		await expect(AntiBaseProtocolNztJsrH.transferFrom.call(addressCT6ubN9, addressxnzHoSf, uintfiLuAXH, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolNztJsrH = await AntiBaseProtocol.new({from: accounts[4]});
		const addressVXscNY = accounts[3]
		const uintJcPwgAG = BigInt("90")
		const addressHXMcbIV = await AntiBaseProtocolNztJsrH.transferOwnership.call(addressVXscNY, {from: accounts[4]});
		const uint256dJCheTf = await AntiBaseProtocolNztJsrH.findRewardFee.call(uintJcPwgAG, {from: accounts[3]});

		assert.equal(uint256dJCheTf, BigInt("5"))
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolNztJsrH = await AntiBaseProtocol.new({from: accounts[4]});
		const uintXQez3jG = BigInt("1923")
		const addressHorCh6 = accounts[4]
		const uintoEZ0Vc = BigInt("139")
		const addresscK2qyan = accounts[3]
		const uint256kZ0WnV = await AntiBaseProtocolNztJsrH.totalSupply.call({from: accounts[4]});
//		const addressiYcO29I = await AntiBaseProtocolNztJsrH.burnFrom.call(addressHorCh6, uintXQez3jG, {from: accounts[0]});
//		const boolNnu5xVC = await AntiBaseProtocolNztJsrH.transfer.call(addresscK2qyan, uintoEZ0Vc, {from: accounts[2]});

		assert.equal(uint256kZ0WnV, BigInt("31250000000000000000"))
		await expect(AntiBaseProtocolNztJsrH.burnFrom.call(addressHorCh6, uintXQez3jG, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolNztJsrH = await AntiBaseProtocol.new({from: accounts[4]});
		const uintMqDFPVp = BigInt("78")
//		await AntiBaseProtocolNztJsrH.renounceOwnership.call({from: accounts[4]});
//		const uint256dJCheTf = await AntiBaseProtocolNztJsrH.findRewardFee.call(uintMqDFPVp, {from: accounts[3]});

		await expect(AntiBaseProtocolNztJsrH.renounceOwnership.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolvM09mfQ = await AntiBaseProtocol.new({from: accounts[2]});
		const uintMTGVbqK = BigInt("971")
		const address9gTpco = "0x0000000000000000000000000000000000000000"
//		const boolR1eJME1 = await AntiBaseProtocolvM09mfQ.transfer.call(address9gTpco, uintMTGVbqK, {from: accounts[2]});

		await expect(AntiBaseProtocolvM09mfQ.transfer.call(address9gTpco, uintMTGVbqK, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})