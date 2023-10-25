const WheatFarm = artifacts.require("WheatFarm");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('WheatFarm', (accounts) => {
	it('test for WheatFarm', async () => {
		const stringI2a1HSE = "YlYlybPKFIaThhqoIoUWBaDChLGMkc9WJF6Zz4CDR8AXdKnNPxa8D4o1Pnd2dyIoomU5tBChTzvm9LLLCtnaEl"
		const stringAu8VoZh = "62XL8uknveCHl4kdSnutEyBEgCIND6S6Dsmsrgryqu9rKioeJo9DTEJVPvMJ8CKUhncM4zWxP44jIPUTc3i9GJ9FnlI"
		const uintQ78BWxI = BigInt("2020")
		const WheatFarmUT9n1e = await WheatFarm.new(stringI2a1HSE, stringAu8VoZh, uintQ78BWxI, {from: accounts[2]});
		const uintWcpNJF = BigInt("581")
		const addressW5O7L56 = accounts[5]
		const uintp9mtS7W = BigInt("998")
		const addressW30pEhY = accounts[3]
		const addressFlacUH4 = accounts[4]
		const boolDNHW0l9 = await WheatFarmUT9n1e.transfer.call(addressW5O7L56, uintWcpNJF, {from: accounts[3]});
		const boolFKh6op = await WheatFarmUT9n1e.increaseAllowance.call(addressW30pEhY, uintp9mtS7W, {from: accounts[0]});
		const uintnpPhvvb = await WheatFarmUT9n1e.balanceOf.call(addressFlacUH4, {from: accounts[4]});

		await expect(WheatFarmUT9n1e.transfer.call(addressW5O7L56, uintWcpNJF, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for WheatFarm', async () => {
		const stringuxEGGkM = "6rFyBKoVKzoZgwRP0FFPuxnNF23KJ4tdXgzSE0F1pu9pXgGUcVCGnyAz8T3J2eLclSqEm6ZOCv65jKS4ZMxYYa4TWyl4Kg5jk"
		const stringXWSbPBl = "CWSTUhrB5Fo35RvOyVpmtcbPbf9aEqDJA2Cpf5TJSBtWDxbfEU7EOopXlHeAj67Pu1x8Mlw69pzlCjPDQRf3Mw"
		const uintL1GIcN7 = BigInt("148")
		const WheatFarmQ23KVLY = await WheatFarm.new(stringuxEGGkM, stringXWSbPBl, uintL1GIcN7, {from: accounts[0]});
		const uintm4KysNl = BigInt("1758")
		const addressUZVOp2o = accounts[5]
		const uintCTmcsb4 = BigInt("42")
		const addressNhF8Y4i = accounts[1]
		const boolGUAXXbN = await WheatFarmQ23KVLY.transfer.call(addressUZVOp2o, uintm4KysNl, {from: accounts[0]});
		const boolPMINltT = await WheatFarmQ23KVLY.approveAndCall.call(addressNhF8Y4i, uintCTmcsb4, {from: accounts[4]});

		assert.equal(boolGUAXXbN, true)
		await expect(WheatFarmQ23KVLY.approveAndCall.call(addressNhF8Y4i, uintCTmcsb4, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for WheatFarm', async () => {
		const stringv8yb1bj = "kJwGNvvYVOkCtfoU7eO7c9ztBYzd"
		const stringnK6UPI1 = "zjUS5blPgxPJPKLXybOTCuVYb1R5rLHXlFdoCkHveRFj2LelW"
		const uintQCSKiE8 = BigInt("177")
		const WheatFarmNKjVMk6 = await WheatFarm.new(stringv8yb1bj, stringnK6UPI1, uintQCSKiE8, {from: accounts[0]});
		const uintNV9n64C = BigInt("1051")
		const addressFygoJtF = accounts[3]
		const uintudmQoJl = BigInt("1360")
		const addressuvFfUD9 = accounts[0]
		const addressaQHTmhn = accounts[3]
		const uintXcwo0rM = BigInt("1756")
		const addressjoAVmBf = accounts[1]
		const booln1o6nFU = await WheatFarmNKjVMk6.increaseAllowance.call(addressFygoJtF, uintNV9n64C, {from: accounts[2]});
		const boolXEyhdZH = await WheatFarmNKjVMk6.decreaseAllowance.call(addressuvFfUD9, uintudmQoJl, {from: accounts[1]});
		const uintn7VF6Op = await WheatFarmNKjVMk6.balanceOf.call(addressaQHTmhn, {from: accounts[4]});
		const boolcOtE80O = await WheatFarmNKjVMk6.approve.call(addressjoAVmBf, uintXcwo0rM, {from: accounts[4]});

		await expect(WheatFarmNKjVMk6.increaseAllowance.call(addressFygoJtF, uintNV9n64C, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for WheatFarm', async () => {
		const stringAEjAMv2 = "4saLNJ9Cg3JO86DCs9eX1S2MxKyCTh4ufvqXoiaxIR"
		const stringtjmgSP3 = "QaJO2fz6I1sk9WKHWxPVouPaHyUvCjFtv8PiNqdLSq4LIme0uAaygL19gVX5T6"
		const uintW7KICgZ = BigInt("29")
		const WheatFarmI2Smkx = await WheatFarm.new(stringAEjAMv2, stringtjmgSP3, uintW7KICgZ, {from: "0x0000000000000000000000000000000000000001"});
		const uintCh2ie2Q = BigInt("999")
		const addressqaZgRUr = accounts[4]
		const uintwat423u = BigInt("590")
		const addresssbJjymm = accounts[1]
		const addressJVdz3C7 = "0x0000000000000000000000000000000000000001"
		const uintAkP6zOc = BigInt("449")
		const addressnn0Ak1 = accounts[4]
		const boolruJC3yj = await WheatFarmI2Smkx.approveAndCall.call(addressqaZgRUr, uintCh2ie2Q, {from: accounts[5]});
		const boolh3b5812 = await WheatFarmI2Smkx.transfer.call(addresssbJjymm, uintwat423u, {from: accounts[4]});
		const uintJHXFDV6 = await WheatFarmI2Smkx.balanceOf.call(addressJVdz3C7, {from: "0x0000000000000000000000000000000000000001"});
		const boolkOZvvOj = await WheatFarmI2Smkx.approve.call(addressnn0Ak1, uintAkP6zOc, {from: accounts[0]});
	});

	it('test for WheatFarm', async () => {
		const stringgGaW2AY = "ZCuTL6abIjY9WsJyBVxOKO0f9f2bN1yIOMKcD4srj1i1vSjXS45yaBbVmM51B4tKO7FFtFK9lx"
		const stringXW4gjWR = "HGZ9OovKl1Wlv"
		const uintWM5RGZ1 = BigInt("230")
		const WheatFarmntmcMC3 = await WheatFarm.new(stringgGaW2AY, stringXW4gjWR, uintWM5RGZ1, {from: accounts[4]});
		const uinttNBUohx = BigInt("1969")
		const addressJtb4Jwr = accounts[0]
		const uintjtvtU4c = BigInt("243")
		const addresskOf8gKp = accounts[1]
		const uintvDG73ta = BigInt("867")
		const addressCbvW7wm = accounts[5]
		const uintwzCRsEp = BigInt("1835")
		const addresszVEcW8T = accounts[1]
		const uintqO0WsmD = BigInt("826")
		const addressxMUKj9a = accounts[3]
		const boolXnqkvIl = await WheatFarmntmcMC3.approve.call(addressJtb4Jwr, uinttNBUohx, {from: accounts[0]});
		const booltGwoevo = await WheatFarmntmcMC3.approve.call(addresskOf8gKp, uintjtvtU4c, {from: accounts[2]});
		const stringnRbZcqr = await WheatFarmntmcMC3.symbol.call({from: accounts[3]});
		const boolyIvnNG8 = await WheatFarmntmcMC3.increaseAllowance.call(addressCbvW7wm, uintvDG73ta, {from: accounts[4]});
		const boolHgLAFbb = await WheatFarmntmcMC3.transfer.call(addresszVEcW8T, uintwzCRsEp, {from: accounts[0]});
		const boolrYiuQPq = await WheatFarmntmcMC3.transfer.call(addressxMUKj9a, uintqO0WsmD, {from: accounts[4]});

		assert.equal(boolXnqkvIl, true)
		assert.equal(booltGwoevo, true)
		assert.equal(stringnRbZcqr, "HGZ9OovKl1Wlv")
		await expect(WheatFarmntmcMC3.increaseAllowance.call(addressCbvW7wm, uintvDG73ta, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for WheatFarm', async () => {
		const stringuxEGGkM = "6rFyBKoVKzoZgwRP0FFPuxnNF23KJ4tdXgzSE0F1pu9pXgGUcVCGnyAz8T3J2eLclSqEm6ZOCv65jKS4ZMxYYa4TWyl4Kg5jk"
		const stringXWSbPBl = "CWSTUhrB5Fo35RvOyVpmtcbPbf9aEqDJA2Cpf5TJSBtWDxbfEU7EOopXlHeAj67Pu1x8Mlw69pzlCjPDQRf3Mw"
		const uintxvzJrrO = BigInt("148")
		const WheatFarmQ23KVLY = await WheatFarm.new(stringuxEGGkM, stringXWSbPBl, uintxvzJrrO, {from: accounts[0]});
		const addressd7Njdv0 = accounts[1]
		const uintohyghwR = BigInt("1758")
		const addressS0W09eC = accounts[6]
		const boolO5KGlK = await WheatFarmQ23KVLY.transferownership.call(addressd7Njdv0, {from: accounts[1]});
		const boolGUAXXbN = await WheatFarmQ23KVLY.transfer.call(addressS0W09eC, uintohyghwR, {from: accounts[0]});

		await expect(WheatFarmQ23KVLY.transferownership.call(addressd7Njdv0, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for WheatFarm', async () => {
		const stringI2a1HSE = "YlYlybPKFIaThhqoIoUWBaDChLGMkc9WJF6Zz4CDR8AXdKnNPxa8D4o1Pnd2dyIoomU5tBChTzvm9LLLCtnaEl"
		const stringAu8VoZh = "62XL8uknveCHl4kdSnutEyBEgCIND6S6Dsmsrgryqu9rKioeJo9DTEJVPvMJ8CKUhncM4zWxP44jIPUTc3i9GJ9FnlI"
		const uintkuf8FK7 = BigInt("2020")
		const WheatFarmUT9n1e = await WheatFarm.new(stringI2a1HSE, stringAu8VoZh, uintkuf8FK7, {from: accounts[2]});
		const uintxrdHK3j = BigInt("400")
		const addressj4Jpi3O = accounts[0]
		const uintwTDkGOv = BigInt("33")
		const addressWNVL7hF = accounts[5]
		const addressXSHaqbk = accounts[4]
		const boolT8mywbg = await WheatFarmUT9n1e.approveAndCall.call(addressj4Jpi3O, uintxrdHK3j, {from: accounts[2]});
		const boolXfJYJoJ = await WheatFarmUT9n1e.transferFrom.call(addressXSHaqbk, addressWNVL7hF, uintwTDkGOv, {from: accounts[2]});
		const uint8NbaLqMD = await WheatFarmUT9n1e.decimals.call({from: accounts[4]});

		assert.equal(boolT8mywbg, true)
		await expect(WheatFarmUT9n1e.transferFrom.call(addressXSHaqbk, addressWNVL7hF, uintwTDkGOv, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for WheatFarm', async () => {
		const stringI2a1HSE = "YlYlybPKFIaThhqoIoUWBaDChLGMkc9WJF6Zz4CDR8AXdKnNPxa8D4o1Pnd2dyIoomU5tBChTzvm9LLLCtnaEl"
		const stringAu8VoZh = "62XL8uknveCHl4kdSnutEyBEgCIND6S6Dsmsrgryqu9rKioeJo9DTEJVPvMJ8CKUhncM4zWxP44jIPUTc3i9GJ9FnlI"
		const uintV6mE2fn = BigInt("2020")
		const WheatFarmUT9n1e = await WheatFarm.new(stringI2a1HSE, stringAu8VoZh, uintV6mE2fn, {from: accounts[2]});
		const uintTMUYNE3 = BigInt("0")
		const addresstUApoqz = accounts[5]
		const addressb60Y23F = accounts[4]
		const boolXfJYJoJ = await WheatFarmUT9n1e.transferFrom.call(addressb60Y23F, addresstUApoqz, uintTMUYNE3, {from: accounts[2]});

		assert.equal(boolXfJYJoJ, true)
	});

	it('test for WheatFarm', async () => {
		const stringI2a1HSE = "YlYlybPKFIaThhqoIoUWBaDChLGMkc9WJF6Zz4CDR8AXdKnNPxa8D4o1Pnd2dyIoomU5tBChTzvm9LLLCtnaEl"
		const stringAu8VoZh = "62XL8uknveCHl4kdSnutEyBEgCIND6S6Dsmsrgryqu9rKioeJo9DTEJVPvMJ8CKUhncM4zWxP44jIPUTc3i9GJ9FnlI"
		const uintQqrytIV = BigInt("2020")
		const WheatFarmUT9n1e = await WheatFarm.new(stringI2a1HSE, stringAu8VoZh, uintQqrytIV, {from: accounts[2]});
		const uintaElo43u = BigInt("0")
		const addressxbnwYwE = accounts[4]
		const boollOt93rf = await WheatFarmUT9n1e.approveAndCall.call(addressxbnwYwE, uintaElo43u, {from: accounts[2]});

		assert.equal(boollOt93rf, true)
	});
})