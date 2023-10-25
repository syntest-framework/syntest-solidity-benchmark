const MARVELCOIN = artifacts.require("MARVELCOIN");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MARVELCOIN', (accounts) => {
	it('test for MARVELCOIN', async () => {
		const uintw9GpFUj = BigInt("56")
		const stringvgoh5vg = "N5vR6mlgiCHJWMCisHi1zzYNUmzQD6u8azjD8YvPC2Q8hBfFMmpL7x9KIL1Zby3kSaLPjCvdTQE5gfmALNItXvPU22P7Kv8zMB"
		const stringUIj2S7c = "9VKrpsHW95tCvR"
		const MARVELCOINftSB6Nh = await MARVELCOIN.new(uintw9GpFUj, stringvgoh5vg, stringUIj2S7c, {from: accounts[1]});
		const uintDLRKmQP = BigInt("1610")
		const addressF2yJMI5 = accounts[1]
		const byteS8jbKU7 = "0x0f021c0c070e150f10061701121d1404"
		const uintXeXXHCT = BigInt("1453")
		const addresstjqXLLA = accounts[1]
		const uintLFxLIt = BigInt("2041")
		const addresse0F1xLl = accounts[2]
		const uintCjf4Zo0 = BigInt("638")
		const boolf5tbdd4 = await MARVELCOINftSB6Nh.transfer.call(addressF2yJMI5, uintDLRKmQP, {from: accounts[3]});
		const boolAGFYe8k = await MARVELCOINftSB6Nh.approveAndCall.call(addresstjqXLLA, uintXeXXHCT, byteS8jbKU7, {from: accounts[2]});
		const boolJ54YXKi = await MARVELCOINftSB6Nh.approve.call(addresse0F1xLl, uintLFxLIt, {from: "0x0000000000000000000000000000000000000001"});
		const boolBN3FRxb = await MARVELCOINftSB6Nh.burn.call(uintCjf4Zo0, {from: accounts[0]});

		await expect(MARVELCOINftSB6Nh.transfer.call(addressF2yJMI5, uintDLRKmQP, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for MARVELCOIN', async () => {
		const uint0mZtFN = BigInt("880")
		const stringRAiWU2B = "Oj7EG4X2"
		const stringTdc5FKZ = "Q0RZfohOtj5cg4gxAoGTzqD6RMyJSxJ10TonkWESYKwd2pD"
		const MARVELCOINwmUgOeZ = await MARVELCOIN.new(uint0mZtFN, stringRAiWU2B, stringTdc5FKZ, {from: accounts[4]});
		const uintXKzt9C = BigInt("1015")
		const addressBx1IRKz = accounts[2]
		const uintJDrwb3r = BigInt("455")
		const addressga2G0GY = accounts[3]
		const uintrbAe7cK = BigInt("1097")
		const byteOGbpAvA = "0x0d0c"
		const uintwMwa4ZV = BigInt("932")
		const addressyoiY1ch = accounts[2]
		const uintMZ97gDU = BigInt("1023")
		const addressoTnrF5G = accounts[1]
		const addressM6mlW43 = accounts[2]
		const uintLrXLzof = BigInt("493")
		const addressgHSt6cY = accounts[5]
		const addressD90lwmP = accounts[1]
		const boolRtdjexn = await MARVELCOINwmUgOeZ.approve.call(addressBx1IRKz, uintXKzt9C, {from: accounts[2]});
		const boolNevZLQa = await MARVELCOINwmUgOeZ.approve.call(addressga2G0GY, uintJDrwb3r, {from: accounts[1]});
		const boolPD9Y0ND = await MARVELCOINwmUgOeZ.burn.call(uintrbAe7cK, {from: accounts[4]});
		const boolfTKEXDo = await MARVELCOINwmUgOeZ.approveAndCall.call(addressyoiY1ch, uintwMwa4ZV, byteOGbpAvA, {from: accounts[0]});
		const boolTX5S6n6 = await MARVELCOINwmUgOeZ.transferFrom.call(addressM6mlW43, addressoTnrF5G, uintMZ97gDU, {from: accounts[4]});
		const boolm9Cuvbp = await MARVELCOINwmUgOeZ.transferFrom.call(addressD90lwmP, addressgHSt6cY, uintLrXLzof, {from: accounts[0]});

		assert.equal(boolNevZLQa, true)
		assert.equal(boolPD9Y0ND, true)
		assert.equal(boolRtdjexn, true)
		await expect(MARVELCOINwmUgOeZ.approveAndCall.call(addressyoiY1ch, uintwMwa4ZV, byteOGbpAvA, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for MARVELCOIN', async () => {
		const uintCfteN8s = BigInt("584")
		const stringZvVmDSB = "xUK8PFIeIm6JWWX"
		const stringGqbdzXP = "Qjj1fXfk1CQ4fmmiBT5dmpjvw38dmanEREa5HcE8y5ErJyOy6KOY8RK7pFDMRXUW8mMLG1dBRTVNVYE2N4CY7rXQ3Dmfha"
		const MARVELCOINuwmvMHd = await MARVELCOIN.new(uintCfteN8s, stringZvVmDSB, stringGqbdzXP, {from: accounts[2]});
		const uintwweGFP3 = BigInt("88")
		const addressapvfN9w = accounts[0]
		const addressWAd7EDz = accounts[3]
		const uintUlrDCos = BigInt("1772")
		const addresspcWe8tt = "0x0000000000000000000000000000000000000001"
		const bytekZ7ltVS = "0x00081a1b1a09110913150801200c02"
		const uintXdNZJ2s = BigInt("68")
		const address5ptSQy = accounts[3]
		const boolua6T30O = await MARVELCOINuwmvMHd.transferFrom.call(addressWAd7EDz, addressapvfN9w, uintwweGFP3, {from: accounts[4]});
		const boolCduBwZ9 = await MARVELCOINuwmvMHd.approve.call(addresspcWe8tt, uintUlrDCos, {from: accounts[1]});
		const booljkPbTjJ = await MARVELCOINuwmvMHd.approveAndCall.call(address5ptSQy, uintXdNZJ2s, bytekZ7ltVS, {from: accounts[0]});

		await expect(MARVELCOINuwmvMHd.transferFrom.call(addressWAd7EDz, addressapvfN9w, uintwweGFP3, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for MARVELCOIN', async () => {
		const uintwoetQD = BigInt("1923")
		const stringNNGkowB = "LI4TWXG1uJ"
		const stringXmcTo5F = "P6f89tXmECeKcld6uuct2I"
		const MARVELCOINgfHalTS = await MARVELCOIN.new(uintwoetQD, stringNNGkowB, stringXmcTo5F, {from: "0x0000000000000000000000000000000000000001"});
		const byteEWI8vOP = "0x1606060d0702091b0c180401"
		const uintfLNOnnb = BigInt("1977")
		const addresseuYWKj9 = accounts[3]
		const uintWFvxYXi = BigInt("708")
		const addressTPk9VZ5 = accounts[4]
		const boolNtMx3D3 = await MARVELCOINgfHalTS.approveAndCall.call(addresseuYWKj9, uintfLNOnnb, byteEWI8vOP, {from: accounts[5]});
		const booloMnfj1d = await MARVELCOINgfHalTS.burnFrom.call(addressTPk9VZ5, uintWFvxYXi, {from: accounts[0]});
	});

	it('test for MARVELCOIN', async () => {
		const uintyehU2pu = BigInt("124")
		const string65QYFJ = "7OHb6FdAWAOaT522Q1UEKhMTwnaIvPAHii6TMIVkiiDxaDyweQpe"
		const stringMcC3Mh = "KhvhYPq2Uybul4JowTROIQZd7zzICt8pMN31jM8kKeWqk1P6zkImV7"
		const MARVELCOINhEATVXA = await MARVELCOIN.new(uintyehU2pu, string65QYFJ, stringMcC3Mh, {from: accounts[1]});
		const uintuglVB8J = BigInt("1017")
		const addresslyx4Z0r = accounts[1]
		const uintgHCX6Xt = BigInt("328")
		const addressHPQpRU7 = accounts[0]
		const uintPIqSt64 = BigInt("497")
		const addressPOvGBBa = accounts[2]
		const addressbnR61U = "0x0000000000000000000000000000000000000002"
		const uint69Wpd0 = BigInt("238")
		const addressqW8a0oP = accounts[3]
		const uintHEvzJiz = BigInt("1911")
		const addresstlqI458 = accounts[0]
		const boolopDUURv = await MARVELCOINhEATVXA.burnFrom.call(addresslyx4Z0r, uintuglVB8J, {from: accounts[3]});
		const boolyFIucGU = await MARVELCOINhEATVXA.approve.call(addressHPQpRU7, uintgHCX6Xt, {from: accounts[5]});
		const boolELo6tVh = await MARVELCOINhEATVXA.transferFrom.call(addressbnR61U, addressPOvGBBa, uintPIqSt64, {from: accounts[3]});
		const boolG26tsH = await MARVELCOINhEATVXA.approve.call(addressqW8a0oP, uint69Wpd0, {from: accounts[0]});
		const boolHzaFPuL = await MARVELCOINhEATVXA.approve.call(addresstlqI458, uintHEvzJiz, {from: accounts[4]});

		await expect(MARVELCOINhEATVXA.burnFrom.call(addresslyx4Z0r, uintuglVB8J, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})