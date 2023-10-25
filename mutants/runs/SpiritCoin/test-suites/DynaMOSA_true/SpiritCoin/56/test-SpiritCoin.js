const SpiritCoin = artifacts.require("SpiritCoin");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('SpiritCoin', (accounts) => {
	it('test for SpiritCoin', async () => {
		const addressfkuFYL7 = accounts[0]
		const addressRNLR0Ep = accounts[4]
		const SpiritCoinhIvXKUg = await SpiritCoin.new(addressfkuFYL7, addressRNLR0Ep, {from: accounts[0]});
		const addressNySCuLJ = accounts[0]
		const addressoB3Ujj = accounts[0]
		const uinttDxhpv = BigInt("1370")
		const addressZdpYAEx = accounts[0]
		const uintEOV8lIW = await SpiritCoinhIvXKUg.allowance.call(addressoB3Ujj, addressNySCuLJ, {from: accounts[5]});
		const boolYogACen = await SpiritCoinhIvXKUg.transfer.call(addressZdpYAEx, uinttDxhpv, {from: accounts[0]});

		assert.equal(boolYogACen, true)
		assert.equal(uintEOV8lIW, BigInt("0"))
	});

	it('test for SpiritCoin', async () => {
		const addressYSaUk81 = accounts[2]
		const addressg16wVU = accounts[2]
		const SpiritCoinLs3DlmC = await SpiritCoin.new(addressYSaUk81, addressg16wVU, {from: accounts[1]});
		const address7pSYyi = accounts[3]
		const addressy6QmbzG = accounts[1]
		const addressGjN5yV4 = accounts[1]
		const uintdlQo7W0 = BigInt("1970")
		const addressmlqgW3t = accounts[4]
		const uintPk38Vv7 = await SpiritCoinLs3DlmC.allowance.call(addressy6QmbzG, address7pSYyi, {from: accounts[2]});
		const uintZZYpbW = await SpiritCoinLs3DlmC.balanceOf.call(addressGjN5yV4, {from: accounts[4]});
		const boolxKfiJ96 = await SpiritCoinLs3DlmC.transfer.call(addressmlqgW3t, uintdlQo7W0, {from: accounts[0]});

		assert.equal(uintPk38Vv7, BigInt("0"))
		assert.equal(uintZZYpbW, BigInt("0"))
		await expect(SpiritCoinLs3DlmC.transfer.call(addressmlqgW3t, uintdlQo7W0, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SpiritCoin', async () => {
		const addressyDGX1u = accounts[1]
		const addressZ6KeruT = accounts[0]
		const SpiritCoinIacqGlV = await SpiritCoin.new(addressyDGX1u, addressZ6KeruT, {from: accounts[1]});
		const addressW8oxK9X = accounts[2]
		const addressmWaroWj = accounts[4]
		const uintE8DCW6 = BigInt("2001")
		const addressmBU1gpn = accounts[0]
		const addresslQ3UlTH = accounts[4]
		const addressgwpP4Sx = accounts[3]
		const addressZ1YGc9 = accounts[5]
		const addressP9S4ano = accounts[4]
		const uintln5uZBV = BigInt("750")
		const addressXKSDEAh = "0x0000000000000000000000000000000000000001"
		const addressuHlWQPU = accounts[0]
		const addressy3Xo6D9 = accounts[3]
		const uintsOj6dqe = await SpiritCoinIacqGlV.allowance.call(addressmWaroWj, addressW8oxK9X, {from: accounts[4]});
		const addressTUFIdnP = await SpiritCoinIacqGlV.mint.call(addressmBU1gpn, uintE8DCW6, {from: accounts[0]});
		const uintTaPHgEi = await SpiritCoinIacqGlV.allowance.call(addressgwpP4Sx, addresslQ3UlTH, {from: accounts[0]});
		const uintGYQuLO = await SpiritCoinIacqGlV.allowance.call(addressP9S4ano, addressZ1YGc9, {from: accounts[2]});
		const addressKlWlku = await SpiritCoinIacqGlV.mint.call(addressXKSDEAh, uintln5uZBV, {from: accounts[3]});
		const uinthkRd6Dd = await SpiritCoinIacqGlV.allowance.call(addressy3Xo6D9, addressuHlWQPU, {from: accounts[0]});

		assert.equal(uintGYQuLO, BigInt("0"))
		assert.equal(uintTaPHgEi, BigInt("0"))
		assert.equal(uintsOj6dqe, BigInt("0"))
		await expect(SpiritCoinIacqGlV.mint.call(addressXKSDEAh, uintln5uZBV, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for SpiritCoin', async () => {
		const addressJcPSciv = accounts[3]
		const addressV0qeQI4 = accounts[3]
		const SpiritCoinjiwLqm = await SpiritCoin.new(addressJcPSciv, addressV0qeQI4, {from: accounts[3]});
		const uintkT3gRDc = BigInt("1355")
		const addressdW2sw21 = accounts[5]
		const uint7CbhqU = BigInt("1460")
		const addressKgBnp0w = accounts[5]
		const boolka0igoF = await SpiritCoinjiwLqm.approve.call(addressdW2sw21, uintkT3gRDc, {from: accounts[0]});
		const booliB6xziY = await SpiritCoinjiwLqm.transfer.call(addressKgBnp0w, uint7CbhqU, {from: accounts[4]});

		assert.equal(boolka0igoF, true)
		await expect(SpiritCoinjiwLqm.transfer.call(addressKgBnp0w, uint7CbhqU, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for SpiritCoin', async () => {
		const addressMGB5Fx = accounts[3]
		const addressUhBJgJM = accounts[3]
		const SpiritCoinUU6ihv5 = await SpiritCoin.new(addressMGB5Fx, addressUhBJgJM, {from: "0x0000000000000000000000000000000000000001"});
		const uintUXbYhrK = BigInt("307")
		const addresswW3KEOU = accounts[3]
		const addressA8ix2vW = accounts[0]
		const uintQ7LNvvB = BigInt("985")
		const addressztAaWf = "0x0000000000000000000000000000000000000001"
		const uintWQiYGs = BigInt("1018")
		const addressDKCRzkl = accounts[3]
		const addressB8owQqw = await SpiritCoinUU6ihv5.mint.call(addresswW3KEOU, uintUXbYhrK, {from: accounts[1]});
		const uintfkjOdls = await SpiritCoinUU6ihv5.balanceOf.call(addressA8ix2vW, {from: accounts[4]});
		const boolAu00h7U = await SpiritCoinUU6ihv5.approve.call(addressztAaWf, uintQ7LNvvB, {from: accounts[0]});
		const boolHIl6P6n = await SpiritCoinUU6ihv5.transfer.call(addressDKCRzkl, uintWQiYGs, {from: accounts[2]});
	});

	it('test for SpiritCoin', async () => {
		const address9Uaj2S = accounts[0]
		const addressZcu8fhC = accounts[0]
		const SpiritCoinw4WafS = await SpiritCoin.new(address9Uaj2S, addressZcu8fhC, {from: accounts[2]});
		const addressI3hO8Zr = accounts[1]
		const addressE3xcNQ8 = accounts[5]
		const addressT3fJuMj = accounts[2]
		const uinto8knehU = BigInt("410")
		const addressljNZV4Z = accounts[0]
		const uintsjCGKpX = await SpiritCoinw4WafS.allowance.call(addressE3xcNQ8, addressI3hO8Zr, {from: "0x0000000000000000000000000000000000000001"});
		const addressLjwREt = await SpiritCoinw4WafS.setMinter.call(addressT3fJuMj, {from: accounts[3]});
		const boolYfc6RdX = await SpiritCoinw4WafS.transfer.call(addressljNZV4Z, uinto8knehU, {from: accounts[3]});

		assert.equal(uintsjCGKpX, BigInt("0"))
		await expect(SpiritCoinw4WafS.setMinter.call(addressT3fJuMj, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for SpiritCoin', async () => {
		const addresstohfQh5 = accounts[0]
		const addressGuMSmyQ = accounts[4]
		const SpiritCoinhIvXKUg = await SpiritCoin.new(addresstohfQh5, addressGuMSmyQ, {from: accounts[0]});
		const uint0wGuD4 = BigInt("1370")
		const addressDXCH7Yh = "0x0000000000000000000000000000000000000000"
		const uintuRxhfrB = BigInt("404")
		const addressi2p3H07 = accounts[1]
		const uintRO5nBKX = BigInt("587")
		const addressA6Dzojc = accounts[3]
		const addressNqDahS = accounts[2]
		const boolYogACen = await SpiritCoinhIvXKUg.transfer.call(addressDXCH7Yh, uint0wGuD4, {from: accounts[0]});
		const boolZ7WpotU = await SpiritCoinhIvXKUg.approve.call(addressi2p3H07, uintuRxhfrB, {from: accounts[1]});
		const bool6hiDRz = await SpiritCoinhIvXKUg.transferFrom.call(addressNqDahS, addressA6Dzojc, uintRO5nBKX, {from: accounts[3]});

		await expect(SpiritCoinhIvXKUg.transfer.call(addressDXCH7Yh, uint0wGuD4, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SpiritCoin', async () => {
		const addressZwfzbu1 = "0x0000000000000000000000000000000000000001"
		const addressipDaY13 = accounts[0]
		const SpiritCoinNKAVsBW = await SpiritCoin.new(addressZwfzbu1, addressipDaY13, {from: accounts[5]});
		const uintEMZ58jc = BigInt("543")
		const addressPaM3ccU = "0x0000000000000000000000000000000000000001"
		const uintqoDTHyi = BigInt("318")
		const address2Jw9NX = accounts[2]
		const addressDkvJbX5 = accounts[2]
		const addressuMkkH65 = accounts[2]
		const addressGPv3M4h = accounts[5]
		const addresshbrE73Q = await SpiritCoinNKAVsBW.mint.call(addressPaM3ccU, uintEMZ58jc, {from: accounts[0]});
		const boolKi05YzD = await SpiritCoinNKAVsBW.transferFrom.call(addressDkvJbX5, address2Jw9NX, uintqoDTHyi, {from: accounts[1]});
		const uintLkYeWLD = await SpiritCoinNKAVsBW.allowance.call(addressGPv3M4h, addressuMkkH65, {from: accounts[0]});

		await expect(SpiritCoinNKAVsBW.transferFrom.call(addressDkvJbX5, address2Jw9NX, uintqoDTHyi, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for SpiritCoin', async () => {
		const addressAWvVxx0 = "0x0000000000000000000000000000000000000001"
		const addressVVacVqB = accounts[0]
		const SpiritCoinNKAVsBW = await SpiritCoin.new(addressAWvVxx0, addressVVacVqB, {from: accounts[5]});
		const uint5K6kNA = BigInt("554")
		const addresshksITA8 = "0x0000000000000000000000000000000000000000"
		const uintGmzhdyD = BigInt("694")
		const addressWnYCG2d = accounts[3]
		const addressVjnVXqf = accounts[2]
		const addressDNvfamg = accounts[5]
		const addresshbrE73Q = await SpiritCoinNKAVsBW.mint.call(addresshksITA8, uint5K6kNA, {from: accounts[0]});
		const boolgC14eC = await SpiritCoinNKAVsBW.approve.call(addressWnYCG2d, uintGmzhdyD, {from: accounts[4]});
		const uintLkYeWLD = await SpiritCoinNKAVsBW.allowance.call(addressDNvfamg, addressVjnVXqf, {from: accounts[0]});

		await expect(SpiritCoinNKAVsBW.mint.call(addresshksITA8, uint5K6kNA, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SpiritCoin', async () => {
		const addressmknNMqk = accounts[3]
		const addressDmBC5Lq = accounts[3]
		const SpiritCoinjiwLqm = await SpiritCoin.new(addressmknNMqk, addressDmBC5Lq, {from: accounts[3]});
		const addressHkLasP = accounts[3]
		const addressUc7iF9g = accounts[3]
		const addressv8HXPaQ = accounts[1]
		const addressGpxdOw = accounts[0]
		const addressoqlhoQ8 = accounts[4]
		const uintKPGQ4O8 = BigInt("1355")
		const addresswIZVp2W = accounts[0]
		const addressVx6iEKT = accounts[3]
		const uinttzAtui9 = BigInt("24")
		const addresspzjYpUs = accounts[3]
		const uintoG2Tz1 = BigInt("1431")
		const addresse0Q2ePp = accounts[4]
		const uinth3w8Bvm = BigInt("1404")
		const addressVe8IvYs = accounts[3]
		const addressby2P3qx = "0x0000000000000000000000000000000000000001"
		const addressbYz0Qy = accounts[3]
		const uintkg6jqM2 = await SpiritCoinjiwLqm.allowance.call(addressUc7iF9g, addressHkLasP, {from: accounts[4]});
		const addressWsyVrd9 = await SpiritCoinjiwLqm.setMinter.call(addressv8HXPaQ, {from: accounts[3]});
		const uintJHIBj2p = await SpiritCoinjiwLqm.allowance.call(addressoqlhoQ8, addressGpxdOw, {from: accounts[5]});
		const boolka0igoF = await SpiritCoinjiwLqm.approve.call(addresswIZVp2W, uintKPGQ4O8, {from: accounts[0]});
		const uintz2iLbl = await SpiritCoinjiwLqm.balanceOf.call(addressVx6iEKT, {from: accounts[0]});
		const boolu6UH3j9 = await SpiritCoinjiwLqm.approve.call(addresspzjYpUs, uinttzAtui9, {from: accounts[4]});
		const booliB6xziY = await SpiritCoinjiwLqm.transfer.call(addresse0Q2ePp, uintoG2Tz1, {from: accounts[4]});
		const booly2M6Ynr = await SpiritCoinjiwLqm.transferFrom.call(addressby2P3qx, addressVe8IvYs, uinth3w8Bvm, {from: accounts[2]});
		const uintwspg4i = await SpiritCoinjiwLqm.balanceOf.call(addressbYz0Qy, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolka0igoF, true)
		assert.equal(boolu6UH3j9, true)
		assert.equal(uintJHIBj2p, BigInt("0"))
		assert.equal(uintkg6jqM2, BigInt("0"))
		assert.equal(uintz2iLbl, BigInt("10000000000000000000000000"))
		await expect(SpiritCoinjiwLqm.transfer.call(addresse0Q2ePp, uintoG2Tz1, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})