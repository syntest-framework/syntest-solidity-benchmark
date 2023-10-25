const Rexona = artifacts.require("Rexona");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Rexona', (accounts) => {
	it('test for Rexona', async () => {
		const stringkxS58v = "PZptyYsvQmxIeXSuzTsrp5E7JUK4rLBvuKadvFLxyNS5QWyxtHKMdDvV85eh9CKujrOG5FkyxcRdPny2NEswRBj"
		const stringPkdIkem = "IS5Ecn4eUdFVpCaA0YSJUDxuqObpUayQxejLdg9KeUrcHq2wt2YEYcUIOlLGh8UN5WMWhbUKV"
		const uintEN3kA9 = BigInt("2004")
		const RexonaR2VaKRZ = await Rexona.new(stringkxS58v, stringPkdIkem, uintEN3kA9, {from: accounts[3]});
		const uintMB6Gw0t = BigInt("1048")
		const addressVZCXMSq = accounts[0]
		const uintnnmtB7L = BigInt("1460")
		const addressWnF0okB = accounts[1]
		const addressa7lNuga = accounts[0]
		const boolSIGYQT8 = await RexonaR2VaKRZ.approve.call(addressVZCXMSq, uintMB6Gw0t, {from: accounts[1]});
		const boolEK6ZNj = await RexonaR2VaKRZ.transfer.call(addressWnF0okB, uintnnmtB7L, {from: accounts[5]});
		const boolEHCq1yU = await RexonaR2VaKRZ.transferownership.call(addressa7lNuga, {from: accounts[5]});

		assert.equal(boolSIGYQT8, true)
		await expect(RexonaR2VaKRZ.transfer.call(addressWnF0okB, uintnnmtB7L, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Rexona', async () => {
		const stringrAYnLzW = "GUwXbhdbnjxQGhdOHD6fPpRLCgYylCr15LEBHGtkwn0FAr1gjJH"
		const stringRAzKNQ = "WfvtaGWhPmkL1yM48Ty4baJfkChfaluQFHlwBA6i4E6akpRks0X"
		const uintLGxTp5K = BigInt("1621")
		const Rexonahiu2Q1o = await Rexona.new(stringrAYnLzW, stringRAzKNQ, uintLGxTp5K, {from: accounts[2]});
		const addressn6nnld0 = accounts[3]
		const uintD0m6QUA = BigInt("393")
		const addressJ80aAM8 = accounts[5]
		const uintVsNWqH7 = BigInt("1672")
		const addressjibfil = accounts[2]
		const boolhugAqqV = await Rexonahiu2Q1o.transferownership.call(addressn6nnld0, {from: accounts[3]});
		const boolWIPVUx9 = await Rexonahiu2Q1o.approve.call(addressJ80aAM8, uintD0m6QUA, {from: accounts[0]});
		const boolsogwe4c = await Rexonahiu2Q1o.approve.call(addressjibfil, uintVsNWqH7, {from: accounts[4]});

		await expect(Rexonahiu2Q1o.transferownership.call(addressn6nnld0, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Rexona', async () => {
		const stringLnnndae = "Q6g8wUTF5300cgsJF55kQA6DB9jey8TmJmpqP"
		const stringDEQwJv = "KyW99XeipOiGTbnZrAXHSJ8qt"
		const uintKIS1qUn = BigInt("1289")
		const RexonaEsKDyID = await Rexona.new(stringLnnndae, stringDEQwJv, uintKIS1qUn, {from: accounts[3]});
		const uintJkazin = BigInt("859")
		const addressIM5QD0 = accounts[3]
		const uintazojvOD = BigInt("1566")
		const addressvUJ2jqx = accounts[2]
		const addressgc5kr1 = accounts[3]
		const uintSe68Ml = BigInt("1155")
		const addressDm8fE6X = accounts[0]
		const booljSSrj9W = await RexonaEsKDyID.approveAndCall.call(addressIM5QD0, uintJkazin, {from: accounts[4]});
		const boolLEWuQ35 = await RexonaEsKDyID.transferFrom.call(addressgc5kr1, addressvUJ2jqx, uintazojvOD, {from: accounts[2]});
		const boolnpCU86n = await RexonaEsKDyID.approveAndCall.call(addressDm8fE6X, uintSe68Ml, {from: accounts[5]});

		await expect(RexonaEsKDyID.approveAndCall.call(addressIM5QD0, uintJkazin, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Rexona', async () => {
		const stringvZXKju = "xg66cJ9IEaUKc5q"
		const stringcTsCl9n = "m2IxDkewerfv1cB38gxx62oRDQmrHPrBFjhK9wvuQN21hdgeBfebFq3MYAGnth8Xt5J6IV9H2tDtxmoe"
		const uintfnKhmRv = BigInt("1486")
		const Rexonan9PcxI = await Rexona.new(stringvZXKju, stringcTsCl9n, uintfnKhmRv, {from: accounts[2]});
		const uintzO3bWGs = BigInt("1151")
		const addressk6daQaj = accounts[1]
		const uintc2lUfBp = BigInt("1399")
		const addressFJBoGI = accounts[4]
		const addressqw2mwjI = accounts[0]
		const uintiFjsJ5q = BigInt("1547")
		const addressbVfEHq7 = accounts[4]
		const uintq29ayv1 = BigInt("361")
		const addressg7FL4zq = accounts[1]
		const uintSdAKTAc = BigInt("662")
		const addressobZ6ESG = accounts[1]
		const addressKLgCOn = accounts[4]
		const bool7Ce4j6 = await Rexonan9PcxI.approve.call(addressk6daQaj, uintzO3bWGs, {from: "0x0000000000000000000000000000000000000001"});
		const boolacN12iH = await Rexonan9PcxI.transferFrom.call(addressqw2mwjI, addressFJBoGI, uintc2lUfBp, {from: accounts[2]});
		const boolWSVVRmP = await Rexonan9PcxI.transfer.call(addressbVfEHq7, uintiFjsJ5q, {from: accounts[3]});
		const boolp4WzekJ = await Rexonan9PcxI.transfer.call(addressg7FL4zq, uintq29ayv1, {from: accounts[5]});
		const boolBfIhkTm = await Rexonan9PcxI.transferFrom.call(addressKLgCOn, addressobZ6ESG, uintSdAKTAc, {from: accounts[4]});

		assert.equal(bool7Ce4j6, true)
		await expect(Rexonan9PcxI.transferFrom.call(addressqw2mwjI, addressFJBoGI, uintc2lUfBp, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Rexona', async () => {
		const stringOCcSsxR = "38Nb9vXDqPUk43IXfPdhCfGJVdhKU5uWsVJNMCe2Wb2OYfd9FfID4wIuuBSLQLI"
		const stringufuCqoH = "04GtExlINV0nlk8o1xbdLGYVGRVA3I3MchTnlCRpsUolS"
		const uintAE6BPEf = BigInt("990")
		const RexonayMuYV2p = await Rexona.new(stringOCcSsxR, stringufuCqoH, uintAE6BPEf, {from: "0x0000000000000000000000000000000000000001"});
		const uintMT72uR3 = BigInt("1595")
		const addressEzU37D7 = accounts[0]
		const uintFFaC6bI = BigInt("1022")
		const addressYXcHQI7 = accounts[4]
		const uintm4DKM38 = BigInt("957")
		const addresswTX7bp = accounts[1]
		const boolEcEyc8R = await RexonayMuYV2p.approve.call(addressEzU37D7, uintMT72uR3, {from: "0x0000000000000000000000000000000000000001"});
		const booldpMD3dh = await RexonayMuYV2p.approveAndCall.call(addressYXcHQI7, uintFFaC6bI, {from: accounts[1]});
		const boolsYMruce = await RexonayMuYV2p.transfer.call(addresswTX7bp, uintm4DKM38, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for Rexona', async () => {
		const stringRHfKSU = "LASX9Bxn5FUYJJxD8zJXJ"
		const stringc7esXqW = "7c6HbnbpaGbUeeQdJcf8mDqqF1HLuvYjunV1vPbIWFT3Ubg8eoIUbak3adQMyQx8RWe33hWPJSFkPFbDctsLzmI19nuqhm"
		const uintX1IX43R = BigInt("1979")
		const Rexonazyjd3c4 = await Rexona.new(stringRHfKSU, stringc7esXqW, uintX1IX43R, {from: accounts[5]});
		const uintaTgG4te = BigInt("1772")
		const addressr9TMFQ0 = accounts[3]
		const uintqW3dEfv = BigInt("1679")
		const addresshJIyeE2 = accounts[4]
		const addressHjbC8Ar = accounts[0]
		const uintUAqBhx1 = BigInt("1515")
		const addressYYMAkE4 = accounts[3]
		const uintSJNX4GU = BigInt("1639")
		const addressvYZUCM0 = accounts[0]
		const uintQUrpsL0 = BigInt("472")
		const addressvMzIAar = "0x0000000000000000000000000000000000000001"
		const boolj06lASQ = await Rexonazyjd3c4.approveAndCall.call(addressr9TMFQ0, uintaTgG4te, {from: accounts[5]});
		const boolDLaCYkH = await Rexonazyjd3c4.transferFrom.call(addressHjbC8Ar, addresshJIyeE2, uintqW3dEfv, {from: accounts[1]});
		const boolesJPU06 = await Rexonazyjd3c4.approveAndCall.call(addressYYMAkE4, uintUAqBhx1, {from: accounts[3]});
		const boolPf5kS7b = await Rexonazyjd3c4.approveAndCall.call(addressvYZUCM0, uintSJNX4GU, {from: accounts[0]});
		const boolrhTDFHE = await Rexonazyjd3c4.approveAndCall.call(addressvMzIAar, uintQUrpsL0, {from: accounts[3]});

		assert.equal(boolj06lASQ, true)
		await expect(Rexonazyjd3c4.transferFrom.call(addressHjbC8Ar, addresshJIyeE2, uintqW3dEfv, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Rexona', async () => {
		const stringrAYnLzW = "GUwXbhdbnjxQGhdOHD6fPpRLCgYylCr15LEBHGtkwn0FAr1gjJH"
		const stringRAzKNQ = "WfvtaGWhPmkL1yM48Ty4baJfkChfaluQFHlwBA6i4E6akpRks0X"
		const uintjGdg1Od = BigInt("1621")
		const Rexonahiu2Q1o = await Rexona.new(stringrAYnLzW, stringRAzKNQ, uintjGdg1Od, {from: accounts[2]});
		const uintmiiIS7W = BigInt("1481")
		const addressBNySt4p = accounts[3]
		const addressKhbjF7U = accounts[2]
		const addressNPu3h6B = accounts[3]
		const uintPHlqJ9 = BigInt("1672")
		const addressN24F70U = accounts[3]
		const boolEeNjwAI = await Rexonahiu2Q1o.transferFrom.call(addressKhbjF7U, addressBNySt4p, uintmiiIS7W, {from: accounts[2]});
		const boolhugAqqV = await Rexonahiu2Q1o.transferownership.call(addressNPu3h6B, {from: accounts[3]});
		const boolsogwe4c = await Rexonahiu2Q1o.approve.call(addressN24F70U, uintPHlqJ9, {from: accounts[4]});

		assert.equal(boolEeNjwAI, true)
		await expect(Rexonahiu2Q1o.transferownership.call(addressNPu3h6B, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Rexona', async () => {
		const stringkxS58v = "PZptyYsvQmxIeXSuzTsrp5E7JUK4rLBvuKadvFLxyNS5QWyxtHKMdDvV85eh9CKujrOG5FkyxcRdPny2NEswRBj"
		const stringPkdIkem = "IS5Ecn4eUdFVpCaA0YSJUDxuqObpUayQxejLdg9KeUrcHq2wt2YEYcUIOlLGh8UN5WMWhbUKV"
		const uintRkXTWGV = BigInt("2004")
		const RexonaR2VaKRZ = await Rexona.new(stringkxS58v, stringPkdIkem, uintRkXTWGV, {from: accounts[3]});
		const addresse87SZDx = accounts[1]
		const uintd38omt1 = BigInt("1729")
		const addressjzwwKSv = accounts[2]
		const uintS8zH5Z = BigInt("1999")
		const addressQOJ9W7f = accounts[2]
		const uintEbzo2ps = BigInt("1436")
		const addressdthRzOh = accounts[1]
		const boolRPMF9hp = await RexonaR2VaKRZ.transferownership.call(addresse87SZDx, {from: accounts[3]});
		const boolnuXr2wJ = await RexonaR2VaKRZ.approveAndCall.call(addressjzwwKSv, uintd38omt1, {from: accounts[3]});
		const boolbR0hHc = await RexonaR2VaKRZ.approve.call(addressQOJ9W7f, uintS8zH5Z, {from: accounts[3]});
		const boolEK6ZNj = await RexonaR2VaKRZ.transfer.call(addressdthRzOh, uintEbzo2ps, {from: accounts[5]});

		assert.equal(boolRPMF9hp, true)
		assert.equal(boolbR0hHc, true)
		assert.equal(boolnuXr2wJ, true)
		await expect(RexonaR2VaKRZ.transfer.call(addressdthRzOh, uintEbzo2ps, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Rexona', async () => {
		const string2SavHT = "fJB3hRF1wwSsJSDoVVAiwq3P6BViUclM0NOZzcyOme7hL5qqYOug9a5yiK7y9Bw6EwjZeo9Oj3"
		const stringutQii3K = "RJymzWeZuqK1FJaYbK8nFWOEfO654x3HrnVAKwIWFzOJOuluBv7NhkQ60ya8pdfKYbIKKWxRDEhruWo7zVBR"
		const uintICy0Kd0 = BigInt("1826")
		const RexonaQDWuL4s = await Rexona.new(string2SavHT, stringutQii3K, uintICy0Kd0, {from: accounts[5]});
		const uintEmRyjI = BigInt("0")
		const addressEuG2x1L = accounts[4]
		const uinthGNTvX = BigInt("400")
		const addressvc19Mle = accounts[2]
		const uintzspMfO3 = BigInt("549")
		const addressjW2CFKX = accounts[0]
		const uintzRMLhI = BigInt("363")
		const addressp5JolZU = accounts[1]
		const boolMhcFKba = await RexonaQDWuL4s.transfer.call(addressEuG2x1L, uintEmRyjI, {from: accounts[1]});
		const boolm04RL4L = await RexonaQDWuL4s.approve.call(addressvc19Mle, uinthGNTvX, {from: accounts[0]});
		const boolUYjBJce = await RexonaQDWuL4s.approveAndCall.call(addressjW2CFKX, uintzspMfO3, {from: accounts[3]});
		const booli5asDkM = await RexonaQDWuL4s.approve.call(addressp5JolZU, uintzRMLhI, {from: accounts[4]});

		assert.equal(boolMhcFKba, true)
		assert.equal(boolm04RL4L, true)
		await expect(RexonaQDWuL4s.approveAndCall.call(addressjW2CFKX, uintzspMfO3, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Rexona', async () => {
		const string2SavHT = "fJB3hRF1wwSsJSDoVVAiwq3P6BViUclM0NOZzcyOme7hL5qqYOug9a5yiK7y9Bw6EwjZeo9Oj3"
		const stringutQii3K = "RJymzWeZuqK1FJaYbK8nFWOEfO654x3HrnVAKwIWFzOJOuluBv7NhkQ60ya8pdfKYbIKKWxRDEhruWo7zVBR"
		const uintD5y2cEu = BigInt("1826")
		const RexonaQDWuL4s = await Rexona.new(string2SavHT, stringutQii3K, uintD5y2cEu, {from: accounts[5]});
		const uintVH667xO = BigInt("0")
		const addressrN77vmj = accounts[0]
		const boolhBPlCxW = await RexonaQDWuL4s.approveAndCall.call(addressrN77vmj, uintVH667xO, {from: accounts[5]});

		assert.equal(boolhBPlCxW, true)
	});
})