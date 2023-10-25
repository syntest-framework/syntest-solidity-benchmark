const Layerx = artifacts.require("Layerx");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Layerx', (accounts) => {
	it('test for Layerx', async () => {
		const addressVl3Z5kF = accounts[2]
		const Layerxotgugk3 = await Layerx.new(addressVl3Z5kF, {from: accounts[2]});
		const uintnYOVov8 = BigInt("640")
		const uintqFRgSrT = BigInt("1218")
//		const uintowFpNGc = await Layerxotgugk3.withdraw.call(uintnYOVov8, {from: accounts[4]});
//		await Layerxotgugk3.addStakePayment.call({from: accounts[0]});
//		const uintBCC7Px5 = await Layerxotgugk3.lock.call(uintqFRgSrT, {from: accounts[4]});
//		await Layerxotgugk3.addStakePayment.call({from: accounts[1]});

		await expect(Layerxotgugk3.withdraw.call(uintnYOVov8, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addresso04xlTM = accounts[3]
		const LayerxIEZqY1N = await Layerx.new(addresso04xlTM, {from: accounts[3]});
		const byteFuDGxh = "0x141f0b111313010905081b20200b"
		const uintJM0a6U7 = BigInt("1231")
		const addressPg8cAVG = accounts[0]
		const addressAH53Arv = "0x0000000000000000000000000000000000000001"
//		await LayerxIEZqY1N.addStakePayment.call({from: accounts[4]});
//		const boolgM6hdez = await LayerxIEZqY1N.approveAndCall.call(addressPg8cAVG, uintJM0a6U7, byteFuDGxh, {from: accounts[3]});
//		const addressZusIjWD = await LayerxIEZqY1N.transferOwnership.call(addressAH53Arv, {from: "0x0000000000000000000000000000000000000001"});

		await expect(LayerxIEZqY1N.addStakePayment.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressYHd1EHE = accounts[3]
		const LayerxVeEbDk = await Layerx.new(addressYHd1EHE, {from: accounts[1]});
		const uintyEo0jzM = BigInt("966")
		const addressm3bPsh = accounts[0]
		const uintA1uvFXz = await LayerxVeEbDk.getStakesNum.call({from: accounts[3]});
		const boolt48qqxW = await LayerxVeEbDk.approve.call(addressm3bPsh, uintyEo0jzM, {from: accounts[1]});

		assert.equal(boolt48qqxW, true)
		assert.equal(uintA1uvFXz, BigInt("1"))
	});

	it('test for Layerx', async () => {
		const addressolYm9n9 = accounts[4]
		const Layerxf1ozoZw = await Layerx.new(addressolYm9n9, {from: accounts[2]});
		const uintriwy97X = BigInt("670")
		const boolRd0Oxwd = false
//		const uintwfRDIiS = await Layerxf1ozoZw.lock.call(uintriwy97X, {from: accounts[4]});
//		await Layerxf1ozoZw.addStakePayment.call({from: accounts[0]});
//		const boolE3drJxu = await Layerxf1ozoZw.setIsPaused.call(boolRd0Oxwd, {from: "0x0000000000000000000000000000000000000001"});
//		await Layerxf1ozoZw.unlock.call({from: accounts[4]});
//		await Layerxf1ozoZw.paused.call({from: accounts[0]});

		await expect(Layerxf1ozoZw.lock.call(uintriwy97X, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressQmF98Ds = accounts[0]
		const LayerxYmg2r3U = await Layerx.new(addressQmF98Ds, {from: accounts[2]});
		const uintCCc2ZiO = BigInt("1628")
		const addressZ0msbHm = accounts[1]
		const uint63XRRz = BigInt("393")
		const uintqh5xLgp = BigInt("1305")
		const addressSf4lHYm = accounts[0]
		const uintptKm5Ce = BigInt("650")
		const addresshfgjn00 = accounts[0]
		const addressoR3RXd = accounts[5]
//		const booloo88IhE = await LayerxYmg2r3U.transfer.call(addressZ0msbHm, uintCCc2ZiO, {from: accounts[3]});
//		const uint256RfsKeex = await LayerxYmg2r3U.burn.call(uint63XRRz, {from: accounts[1]});
//		const booljyBHHY5 = await LayerxYmg2r3U.transfer.call(addressSf4lHYm, uintqh5xLgp, {from: accounts[5]});
//		const booltSlVsyS = await LayerxYmg2r3U.transferFrom.call(addressoR3RXd, addresshfgjn00, uintptKm5Ce, {from: accounts[4]});

		await expect(LayerxYmg2r3U.transfer.call(addressZ0msbHm, uintCCc2ZiO, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addresspf2Eiww = accounts[3]
		const LayerxwqcGfiz = await Layerx.new(addresspf2Eiww, {from: "0x0000000000000000000000000000000000000001"});
		const boolbntfHSS = false
		const uintbZda9qU = await LayerxwqcGfiz.totalSupply.call({from: accounts[5]});
		const uintwaVkWIQ = await LayerxwqcGfiz.totalSupply.call({from: accounts[3]});
		const boolBv42LPw = await LayerxwqcGfiz.setIsPaused.call(boolbntfHSS, {from: accounts[2]});
		await LayerxwqcGfiz.unlock.call({from: accounts[3]});
	});

	it('test for Layerx', async () => {
		const addressjMSYSOF = accounts[1]
		const LayerxQKOhrbr = await Layerx.new(addressjMSYSOF, {from: accounts[3]});
		const uintCikFjgQ = BigInt("65")
		const addressQ1akRB = accounts[2]
		const addressHyJIxNZ = accounts[2]
		const boolMPPUBjf = true
		const uintxskuhHO = BigInt("1757")
		const boolupCkqvc = await LayerxQKOhrbr.approve.call(addressQ1akRB, uintCikFjgQ, {from: accounts[1]});
		const uintbfHq7s = await LayerxQKOhrbr.balanceOf.call(addressHyJIxNZ, {from: accounts[1]});
//		const boolHHgI7Dn = await LayerxQKOhrbr.setIsPaused.call(boolMPPUBjf, {from: accounts[0]});
//		const uintGRy1DpB = await LayerxQKOhrbr.exist.call(uintxskuhHO, {from: accounts[2]});
//		await LayerxQKOhrbr.paused.call({from: accounts[1]});

		assert.equal(boolupCkqvc, true)
		assert.equal(uintbfHq7s, BigInt("0"))
		await expect(LayerxQKOhrbr.setIsPaused.call(boolMPPUBjf, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressGQY1Npk = accounts[2]
		const LayerxhhKGzJ2 = await Layerx.new(addressGQY1Npk, {from: accounts[0]});
		const uinturLlP40 = BigInt("822")
		const addressKVbz7EG = accounts[1]
		const addressKICJq5F = accounts[0]
		const addressCxPvFND = accounts[4]
//		await LayerxhhKGzJ2.paused.call({from: accounts[1]});
//		await LayerxhhKGzJ2.unlock.call({from: accounts[3]});
//		const boolCuS5Cw4 = await LayerxhhKGzJ2.transferFrom.call(addressKICJq5F, addressKVbz7EG, uinturLlP40, {from: accounts[0]});
//		await LayerxhhKGzJ2.addStakePayment.call({from: accounts[0]});
//		const addressoBOF0SZ = await LayerxhhKGzJ2.setNewStakeCreator.call(addressCxPvFND, {from: accounts[0]});

		await expect(LayerxhhKGzJ2.paused.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressQkrGoJf = accounts[5]
		const LayerxRR72Xuj = await Layerx.new(addressQkrGoJf, {from: accounts[4]});
		const uint7p8MSP = BigInt("1546")
		const addressb7PxlE = accounts[2]
		const addressik7S2SJ = "0x0000000000000000000000000000000000000001"
		const addressKdN2yxK = accounts[2]
		const uintvrGJ5D3 = BigInt("1532")
		const addresshp2t3H9 = accounts[4]
		const addressFEm1Iat = accounts[2]
//		const boolVARoiOh = await LayerxRR72Xuj.transferFrom.call(addressik7S2SJ, addressb7PxlE, uint7p8MSP, {from: accounts[1]});
//		const addressmzezLRQ = await LayerxRR72Xuj.transferOwnership.call(addressKdN2yxK, {from: accounts[1]});
//		await LayerxRR72Xuj.unlock.call({from: "0x0000000000000000000000000000000000000001"});
//		await LayerxRR72Xuj.paused.call({from: accounts[1]});
//		const boolqpi64cj = await LayerxRR72Xuj.transferFrom.call(addressFEm1Iat, addresshp2t3H9, uintvrGJ5D3, {from: "0x0000000000000000000000000000000000000001"});

		await expect(LayerxRR72Xuj.transferFrom.call(addressik7S2SJ, addressb7PxlE, uint7p8MSP, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressjkDxbFW = accounts[3]
		const LayerxIEZqY1N = await Layerx.new(addressjkDxbFW, {from: accounts[3]});
		const bytes51xIBV = "0x141f0b111313010905081b20200b"
		const uintwrBeu01 = BigInt("1231")
		const addresswd0HQtO = accounts[0]
//		await LayerxIEZqY1N.unlock.call({from: accounts[0]});
//		await LayerxIEZqY1N.unlock.call({from: accounts[4]});
//		await LayerxIEZqY1N.addStakePayment.call({from: accounts[4]});
//		const boolgM6hdez = await LayerxIEZqY1N.approveAndCall.call(addresswd0HQtO, uintwrBeu01, bytes51xIBV, {from: accounts[3]});

		await expect(LayerxIEZqY1N.unlock.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressNHaVLrX = accounts[1]
		const LayerxsQKWXfi = await Layerx.new(addressNHaVLrX, {from: accounts[2]});
		const addressWVg6qVG = accounts[0]
		const addressYV3jUOF = accounts[3]
		const uintkag7C0F = BigInt("1039")
		const addressioSwwkG = accounts[3]
		const addressTYeenYy = accounts[1]
		const addressFzboiIY = accounts[1]
		const uintVWpp7L = BigInt("1670")
		const addressyNbqDNQ = accounts[3]
		const uintWjfagvs = BigInt("1915")
		const addressFFOftgu = accounts[0]
		const uintVWFz6RP = BigInt("326")
		const uinth0hOB0s = await LayerxsQKWXfi.allowance.call(addressYV3jUOF, addressWVg6qVG, {from: accounts[2]});
//		const uintagoU8OD = await LayerxsQKWXfi.lock.call(uintkag7C0F, {from: accounts[2]});
//		const addresshcXgvaP = await LayerxsQKWXfi.setNewStakeCreator.call(addressioSwwkG, {from: accounts[0]});
//		const uintPaVOZwV = await LayerxsQKWXfi.allowance.call(addressFzboiIY, addressTYeenYy, {from: accounts[4]});
//		const uintw4smtP = await LayerxsQKWXfi.exist.call(uintVWpp7L, {from: accounts[1]});
//		const addressxTFdUD9 = await LayerxsQKWXfi.setNewStakeCreator.call(addressyNbqDNQ, {from: accounts[2]});
//		const boolUjoMopF = await LayerxsQKWXfi.transfer.call(addressFFOftgu, uintWjfagvs, {from: accounts[1]});
//		const uintV3FeEVh = await LayerxsQKWXfi.exist.call(uintVWFz6RP, {from: accounts[4]});

		assert.equal(uinth0hOB0s, BigInt("0"))
		await expect(LayerxsQKWXfi.lock.call(uintkag7C0F, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const address0U63va = accounts[3]
		const LayerxIEZqY1N = await Layerx.new(address0U63va, {from: accounts[3]});
		const byteXrToxUY = "0x141f0b111313010905081b20200b"
		const uintMEHuoNO = BigInt("1231")
		const addressrKQjlVk = accounts[3]
		const uintp1d3Jce = await LayerxIEZqY1N.getStakesNum.call({from: accounts[1]});
//		const boolgM6hdez = await LayerxIEZqY1N.approveAndCall.call(addressrKQjlVk, uintMEHuoNO, byteXrToxUY, {from: accounts[3]});
//		await LayerxIEZqY1N.unlock.call({from: accounts[3]});

		assert.equal(uintp1d3Jce, BigInt("1"))
		await expect(LayerxIEZqY1N.approveAndCall.call(addressrKQjlVk, uintMEHuoNO, byteXrToxUY, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressXk2Brt2 = accounts[3]
		const LayerxIEZqY1N = await Layerx.new(addressXk2Brt2, {from: accounts[3]});
		const uintjU8bg3y = BigInt("1955")
		const addressiRn42Vt = accounts[0]
		const booljb3UGde = await LayerxIEZqY1N.transfer.call(addressiRn42Vt, uintjU8bg3y, {from: accounts[3]});
//		await LayerxIEZqY1N.addStakePayment.call({from: accounts[4]});

		assert.equal(booljb3UGde, true)
		await expect(LayerxIEZqY1N.addStakePayment.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressmmgj4qR = accounts[3]
		const LayerxIEZqY1N = await Layerx.new(addressmmgj4qR, {from: accounts[3]});
		const uintfJXdxZ = BigInt("1064")
		const uintT0xwss = await LayerxIEZqY1N.totalSupply.call({from: accounts[4]});
//		await LayerxIEZqY1N.addStakePayment.call({from: accounts[4]});
//		const uintpltzBp9 = await LayerxIEZqY1N.lock.call(uintfJXdxZ, {from: accounts[0]});

		assert.equal(uintT0xwss, BigInt("40000000000000000000000"))
		await expect(LayerxIEZqY1N.addStakePayment.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressDMpEuar = accounts[3]
		const LayerxIEZqY1N = await Layerx.new(addressDMpEuar, {from: accounts[3]});
		const bytewSYOCsF = "0x0b0e03021f1d191d0114050118130a070b1705180e061201030f180b02"
		const uinteBHpMeL = BigInt("1945")
		const addressWo5nXC = accounts[3]
		const uintNnCzdCF = await LayerxIEZqY1N.totalSupply.call({from: accounts[3]});
//		await LayerxIEZqY1N.f.call({from: accounts[0]});
//		const boolEof5mv9 = await LayerxIEZqY1N.approveAndCall.call(addressWo5nXC, uinteBHpMeL, bytewSYOCsF, {from: accounts[2]});

		assert.equal(uintNnCzdCF, BigInt("40000000000000000000000"))
		await expect(LayerxIEZqY1N.f.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressfuPOMEz = accounts[3]
		const LayerxIEZqY1N = await Layerx.new(addressfuPOMEz, {from: accounts[3]});
		const addressxjfVwb3 = accounts[0]
		const uintv45WRdc = await LayerxIEZqY1N.getStakesNum.call({from: accounts[1]});
		const address4MApOB = await LayerxIEZqY1N.transferOwnership.call(addressxjfVwb3, {from: accounts[3]});
//		await LayerxIEZqY1N.addStakePayment.call({from: accounts[4]});

		assert.equal(uintv45WRdc, BigInt("1"))
		await expect(LayerxIEZqY1N.addStakePayment.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const address3N1lbX = accounts[3]
		const LayerxXLToZZ3 = await Layerx.new(address3N1lbX, {from: accounts[2]});
		const uintvSkjt0F = BigInt("833")
		const uintaVfBxOh = BigInt("14")
		const addressJTjy2B = accounts[2]
		const uintRPqXUJC = await LayerxXLToZZ3.totalSupply.call({from: accounts[2]});
		const uint256lklYFeg = await LayerxXLToZZ3.burn.call(uintvSkjt0F, {from: accounts[3]});
//		const boollrJP7o = await LayerxXLToZZ3.transfer.call(addressJTjy2B, uintaVfBxOh, {from: accounts[0]});

		assert.equal(uintRPqXUJC, BigInt("40000000000000000000000"))
		await expect(LayerxXLToZZ3.transfer.call(addressJTjy2B, uintaVfBxOh, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressk7PAodC = accounts[4]
		const LayerxFF9ywL8 = await Layerx.new(addressk7PAodC, {from: accounts[4]});
		const uintxWEAH2f = BigInt("0")
		const uintBm39Emc = BigInt("639")
		const uintuILxJ9x = BigInt("1425")
//		const uintit2KCY9 = await LayerxFF9ywL8.lock.call(uintxWEAH2f, {from: accounts[3]});
//		const uinthdqz0fv = await LayerxFF9ywL8.withdraw.call(uintBm39Emc, {from: accounts[1]});
//		await LayerxFF9ywL8.f.call({from: accounts[1]});
//		const uint256Z1r6uYQ = await LayerxFF9ywL8.burn.call(uintuILxJ9x, {from: accounts[5]});
//		await LayerxFF9ywL8.addStakePayment.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(LayerxFF9ywL8.lock.call(uintxWEAH2f, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressW0SN2B = accounts[0]
		const LayerxC1rpkP = await Layerx.new(addressW0SN2B, {from: accounts[1]});
		const uintFkF4LIU = BigInt("883")
//		await LayerxC1rpkP.addStakePayment.call({from: accounts[0]});
//		const uintl30xarx = await LayerxC1rpkP.exist.call(uintFkF4LIU, {from: accounts[3]});

		await expect(LayerxC1rpkP.addStakePayment.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressNPNdMcA = accounts[0]
		const LayerxPD8lDzK = await Layerx.new(addressNPNdMcA, {from: accounts[3]});
		const boollU7IgfP = false
		const booltLDXb9r = true
		const addressV5p6Lg = accounts[5]
		const boolh85XBQm = await LayerxPD8lDzK.setIsPaused.call(boollU7IgfP, {from: accounts[0]});
//		const boolhasJdv2 = await LayerxPD8lDzK.setIsPaused.call(booltLDXb9r, {from: accounts[1]});
//		const addressyPDPwBM = await LayerxPD8lDzK.setNewStakeCreator.call(addressV5p6Lg, {from: accounts[5]});

		await expect(LayerxPD8lDzK.setIsPaused.call(booltLDXb9r, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Layerx', async () => {
		const addressMvFNtyl = accounts[3]
		const LayerxIEZqY1N = await Layerx.new(addressMvFNtyl, {from: accounts[3]});
		const addresstCam1j2 = accounts[5]
		const addresspnKlcmP = accounts[1]
		const uintK5ynnC = BigInt("1598")
		const addressKojFmKg = accounts[3]
		const addressRvMZlH9 = "0x0000000000000000000000000000000000000001"
		const uintOvkHeS = BigInt("593")
		const uintV4hKx29 = await LayerxIEZqY1N.balanceOf.call(addresstCam1j2, {from: accounts[3]});
		const addressTJoyAL = await LayerxIEZqY1N.setNewStakeCreator.call(addresspnKlcmP, {from: accounts[3]});
//		const boolL1SQTul = await LayerxIEZqY1N.transferFrom.call(addressRvMZlH9, addressKojFmKg, uintK5ynnC, {from: accounts[2]});
//		const uintBKFv84L = await LayerxIEZqY1N.exist.call(uintOvkHeS, {from: accounts[0]});
//		await LayerxIEZqY1N.unlock.call({from: accounts[0]});

		assert.equal(uintV4hKx29, BigInt("0"))
		await expect(LayerxIEZqY1N.transferFrom.call(addressRvMZlH9, addressKojFmKg, uintK5ynnC, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})