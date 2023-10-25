const Weedburn = artifacts.require("Weedburn");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Weedburn', (accounts) => {
	it('test for Weedburn', async () => {
		const stringPZElbq1 = "40p18yQxfMygpkKdUHrKjFU5lV2SzghAEPEvvW56B"
		const stringPss3hhp = "Oof4UwvqkABzGr9vAaGuQfKeSpqAi5YDxJObTaGnkA7dJbe1BuLYDmLMVeXBCl2XeNYVmJKl3GugJrzUNpNREOPIilyG"
		const uintbrO0qU2 = BigInt("175")
		const WeedburnVYjsbP6 = await Weedburn.new(stringPZElbq1, stringPss3hhp, uintbrO0qU2, {from: accounts[2]});
		const uintUGlMbe7 = BigInt("1426")
		const uintLHJfOTl = BigInt("188")
		const addressSV1Xrp0 = accounts[1]
		const uint256EOK76uY = await WeedburnVYjsbP6.burn.call(uintUGlMbe7, {from: accounts[0]});
		const stringxnbTDEV = await WeedburnVYjsbP6.symbol.call({from: accounts[0]});
		const bool1RMcwO = await WeedburnVYjsbP6.increaseAllowance.call(addressSV1Xrp0, uintLHJfOTl, {from: accounts[4]});
	});

	it('test for Weedburn', async () => {
		const WeedburnKl0gvlw = await Weedburn.new({from: accounts[4]});
		const addressCyAVT4h = accounts[2]
		const uint256gVEORy7 = await WeedburnKl0gvlw.totalSupply.call({from: accounts[3]});
		const uint256YHNMxq1 = await WeedburnKl0gvlw.balanceOf.call(addressCyAVT4h, {from: accounts[1]});
		await WeedburnKl0gvlw.enableLimitMode.call({from: accounts[5]});

		assert.equal(uint256YHNMxq1, BigInt("0"))
		assert.equal(uint256gVEORy7, BigInt("100000000000000000000000"))
		await expect(WeedburnKl0gvlw.enableLimitMode.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const Weedburngy1cbS9 = await Weedburn.new({from: accounts[1]});
		const uintNERqqnf = BigInt("208")
		const addressUDvo8S = accounts[0]
		const addressnny3abu = accounts[1]
		const addressEWc4VRP = accounts[3]
		const boolLHggoVl = await Weedburngy1cbS9.transfer.call(addressUDvo8S, uintNERqqnf, {from: accounts[3]});
		const uint256tosootq = await Weedburngy1cbS9.balanceOf.call(addressnny3abu, {from: accounts[3]});
		const uint256cGGA4F = await Weedburngy1cbS9.balanceOf.call(addressEWc4VRP, {from: accounts[1]});
		const stringNVAsuSq = await Weedburngy1cbS9.symbol.call({from: accounts[1]});

		await expect(Weedburngy1cbS9.transfer.call(addressUDvo8S, uintNERqqnf, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnERzLJNP = await Weedburn.new({from: "0x0000000000000000000000000000000000000001"});
		const addressjAczRTL = accounts[4]
		const uint256V2IPlVe = await WeedburnERzLJNP.balanceOf.call(addressjAczRTL, {from: accounts[5]});
		await WeedburnERzLJNP.disableLimitMode.call({from: accounts[5]});
	});

	it('test for Weedburn', async () => {
		const WeedburnH2TQ1DU = await Weedburn.new({from: accounts[0]});
		const uintkTfAS9x = BigInt("399")
		const addressJeEmwis = accounts[5]
		const uintMCA2KmY = BigInt("1166")
		const addressd0kVFAF = accounts[1]
		const addressOCScB0n = "0x0000000000000000000000000000000000000001"
		const uint8wpW0QiD = await WeedburnH2TQ1DU.decimals.call({from: accounts[4]});
		const addressHoIZERe = await WeedburnH2TQ1DU.burnFrom.call(addressJeEmwis, uintkTfAS9x, {from: accounts[1]});
		const booloqmt7Zw = await WeedburnH2TQ1DU.transfer.call(addressd0kVFAF, uintMCA2KmY, {from: accounts[3]});
		const uint256tC0Efdj = await WeedburnH2TQ1DU.balanceOf.call(addressOCScB0n, {from: accounts[0]});

		assert.equal(uint8wpW0QiD, BigInt("18"))
		await expect(WeedburnH2TQ1DU.burnFrom.call(addressJeEmwis, uintkTfAS9x, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const Weedburn6DafwO = await Weedburn.new({from: accounts[3]});
		const uintmQByxIw = BigInt("232")
		const addressaIB3aGj = accounts[1]
		const addresshijEK1 = accounts[1]
		const uintGZ4B3vN = BigInt("434")
		const addressRsG99m3 = accounts[4]
		const addressRZm2hIC = accounts[0]
		const boolAwdHri0 = await Weedburn6DafwO.transferFrom.call(addresshijEK1, addressaIB3aGj, uintmQByxIw, {from: accounts[2]});
		const uint8e5yzUZ6 = await Weedburn6DafwO.decimals.call({from: accounts[2]});
		const boolDu94LKP = await Weedburn6DafwO.decreaseAllowance.call(addressRsG99m3, uintGZ4B3vN, {from: accounts[4]});
		await Weedburn6DafwO.enableLimitMode.call({from: accounts[1]});
		const uint256ql5FBct = await Weedburn6DafwO.balanceOf.call(addressRZm2hIC, {from: accounts[0]});

		await expect(Weedburn6DafwO.transferFrom.call(addresshijEK1, addressaIB3aGj, uintmQByxIw, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnH2TQ1DU = await Weedburn.new({from: accounts[0]});
		const uintBZTHYAw = BigInt("1942")
		const addresspyJc6YB = accounts[5]
		const addressBiHCecm = accounts[0]
		const uintAMbQ6iN = BigInt("151")
		const addressCFEXQZ = "0x0000000000000000000000000000000000000001"
		const uintks17Vbq = BigInt("399")
		const addressbKMevpP = accounts[5]
		const uintXWRN2jZ = BigInt("1166")
		const addressfr5IYir = accounts[1]
		const addresshUL91yn = "0x0000000000000000000000000000000000000001"
		const uint8wpW0QiD = await WeedburnH2TQ1DU.decimals.call({from: accounts[4]});
		const boolO8miOM3 = await WeedburnH2TQ1DU.transferFrom.call(addressBiHCecm, addresspyJc6YB, uintBZTHYAw, {from: accounts[2]});
		const boolAgnWxFw = await WeedburnH2TQ1DU.decreaseAllowance.call(addressCFEXQZ, uintAMbQ6iN, {from: accounts[3]});
		const addressHoIZERe = await WeedburnH2TQ1DU.burnFrom.call(addressbKMevpP, uintks17Vbq, {from: accounts[1]});
		const booloqmt7Zw = await WeedburnH2TQ1DU.transfer.call(addressfr5IYir, uintXWRN2jZ, {from: accounts[3]});
		const uint256tC0Efdj = await WeedburnH2TQ1DU.balanceOf.call(addresshUL91yn, {from: accounts[0]});

		assert.equal(uint8wpW0QiD, BigInt("18"))
		await expect(WeedburnH2TQ1DU.transferFrom.call(addressBiHCecm, addresspyJc6YB, uintBZTHYAw, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnkmukZnf = await Weedburn.new({from: accounts[4]});
		const uintzGxgyf5 = BigInt("259")
		const addresspHqLqTg = accounts[3]
		const addressCPJXmEr = accounts[1]
		const stringMFmmPuT = await WeedburnkmukZnf.name.call({from: accounts[1]});
		const booldFCKLJd = await WeedburnkmukZnf.transferFrom.call(addressCPJXmEr, addresspHqLqTg, uintzGxgyf5, {from: "0x0000000000000000000000000000000000000001"});
		await WeedburnkmukZnf.disableDevMode.call({from: accounts[3]});

		assert.equal(stringMFmmPuT, "t.me/burnweed1")
		await expect(WeedburnkmukZnf.transferFrom.call(addressCPJXmEr, addresspHqLqTg, uintzGxgyf5, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnTJ9j9WS = await Weedburn.new({from: accounts[4]});
		const uint8el05H = BigInt("646")
		const addresseqzuYI8 = accounts[4]
		const uintFRyQ5bJ = BigInt("729")
		const addressXD7LzvV = accounts[3]
		await WeedburnTJ9j9WS.disableDevMode.call({from: accounts[4]});
		const boolvybqxJT = await WeedburnTJ9j9WS.approve.call(addresseqzuYI8, uint8el05H, {from: accounts[0]});
		const addressfpF7RLW = await WeedburnTJ9j9WS.burnFrom.call(addressXD7LzvV, uintFRyQ5bJ, {from: accounts[2]});

		await expect(WeedburnTJ9j9WS.disableDevMode.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const Weedburnpns2N8Q = await Weedburn.new({from: accounts[1]});
		const uintbWoBoMw = BigInt("1072")
		const addressTiWLfwE = accounts[0]
		const uintNeBgDUU = BigInt("1724")
		const addressIsSIKo1 = accounts[1]
		await Weedburnpns2N8Q.enableDevMode.call({from: accounts[2]});
		const boolZJPTR7L = await Weedburnpns2N8Q.decreaseAllowance.call(addressTiWLfwE, uintbWoBoMw, {from: accounts[2]});
		const booliGhyuFq = await Weedburnpns2N8Q.transfer.call(addressIsSIKo1, uintNeBgDUU, {from: "0x0000000000000000000000000000000000000001"});
		await Weedburnpns2N8Q.enableLimitMode.call({from: accounts[2]});

		await expect(Weedburnpns2N8Q.enableDevMode.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnTJ9j9WS = await Weedburn.new({from: accounts[4]});
		const uintW3K5rf = BigInt("1972")
		const addressh3UWy3C = accounts[3]
		const uintPJ5MnZ9 = BigInt("646")
		const addressQ7Hd7b = accounts[5]
		const uintf1l3GDs = BigInt("729")
		const addresstt7AGUh = accounts[3]
		const uintPr7yHiz = BigInt("456")
		const addresscHbc9K = accounts[5]
		const addresspwKQlIg = accounts[0]
		const boolKZOiil8 = await WeedburnTJ9j9WS.increaseAllowance.call(addressh3UWy3C, uintW3K5rf, {from: "0x0000000000000000000000000000000000000001"});
		await WeedburnTJ9j9WS.disableDevMode.call({from: accounts[4]});
		const boolvybqxJT = await WeedburnTJ9j9WS.approve.call(addressQ7Hd7b, uintPJ5MnZ9, {from: accounts[0]});
		const addressfpF7RLW = await WeedburnTJ9j9WS.burnFrom.call(addresstt7AGUh, uintf1l3GDs, {from: accounts[2]});
		const boolckZrQ5I = await WeedburnTJ9j9WS.transferFrom.call(addresspwKQlIg, addresscHbc9K, uintPr7yHiz, {from: accounts[5]});

		assert.equal(boolKZOiil8, true)
		await expect(WeedburnTJ9j9WS.disableDevMode.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnH2TQ1DU = await Weedburn.new({from: accounts[0]});
		const uinty8WuMiZ = BigInt("1344")
		const addresschsBRC = "0x0000000000000000000000000000000000000001"
		const uintBpkNmiX = BigInt("399")
		const addressHyqKP8R = accounts[5]
		const uintPHCkPjS = BigInt("1166")
		const addressrqYdbWu = accounts[2]
		const addresstt4Pr5 = "0x0000000000000000000000000000000000000001"
		await WeedburnH2TQ1DU.disableLimitMode.call({from: accounts[1]});
		const boolsC0Udni = await WeedburnH2TQ1DU.approve.call(addresschsBRC, uinty8WuMiZ, {from: accounts[1]});
		const uint8wpW0QiD = await WeedburnH2TQ1DU.decimals.call({from: accounts[4]});
		const addressHoIZERe = await WeedburnH2TQ1DU.burnFrom.call(addressHyqKP8R, uintBpkNmiX, {from: accounts[1]});
		const uint8iKBwBTL = await WeedburnH2TQ1DU.decimals.call({from: accounts[5]});
		const booloqmt7Zw = await WeedburnH2TQ1DU.transfer.call(addressrqYdbWu, uintPHCkPjS, {from: accounts[3]});
		const uint256tC0Efdj = await WeedburnH2TQ1DU.balanceOf.call(addresstt4Pr5, {from: accounts[0]});

		await expect(WeedburnH2TQ1DU.disableLimitMode.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnH2TQ1DU = await Weedburn.new({from: accounts[0]});
		const uintWldcUkD = BigInt("1942")
		const addresstaT4M3 = accounts[5]
		const addressk5eluyU = accounts[0]
		const uintBiteatq = BigInt("151")
		const addressNsCGwAz = "0x0000000000000000000000000000000000000001"
		const uintCiAhOV = BigInt("396")
		const addressB8SfLb1 = accounts[5]
		const uinttpokLgZ = BigInt("1166")
		const addressXmfwFoM = accounts[1]
		const addressMZZOXh = "0x0000000000000000000000000000000000000001"
		const addressGB6Kse5 = accounts[5]
		const addresshiYKOQR = "0x0000000000000000000000000000000000000002"
		const uint8wpW0QiD = await WeedburnH2TQ1DU.decimals.call({from: accounts[4]});
		const stringiA3d0v2 = await WeedburnH2TQ1DU.symbol.call({from: accounts[3]});
		const boolO8miOM3 = await WeedburnH2TQ1DU.transferFrom.call(addressk5eluyU, addresstaT4M3, uintWldcUkD, {from: accounts[2]});
		const boolAgnWxFw = await WeedburnH2TQ1DU.decreaseAllowance.call(addressNsCGwAz, uintBiteatq, {from: accounts[3]});
		const addressHoIZERe = await WeedburnH2TQ1DU.burnFrom.call(addressB8SfLb1, uintCiAhOV, {from: accounts[1]});
		const booloqmt7Zw = await WeedburnH2TQ1DU.transfer.call(addressXmfwFoM, uinttpokLgZ, {from: accounts[3]});
		await WeedburnH2TQ1DU.enableLimitMode.call({from: accounts[2]});
		const uint256ycXy36c = await WeedburnH2TQ1DU.allowance.call(addressGB6Kse5, addressMZZOXh, {from: accounts[5]});
		const uint256tC0Efdj = await WeedburnH2TQ1DU.balanceOf.call(addresshiYKOQR, {from: accounts[0]});

		assert.equal(stringiA3d0v2, "Weedburn")
		assert.equal(uint8wpW0QiD, BigInt("18"))
		await expect(WeedburnH2TQ1DU.transferFrom.call(addressk5eluyU, addresstaT4M3, uintWldcUkD, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnH2TQ1DU = await Weedburn.new({from: accounts[0]});
		const uintcQKLhju = BigInt("151")
		const addressT2PT958 = "0x0000000000000000000000000000000000000001"
		const uintgAMD5qi = BigInt("399")
		const addressrZEjFtm = accounts[5]
		const uintnhylY2z = BigInt("1166")
		const addressM2gzqC8 = accounts[1]
		const addressBWys8W4 = "0x0000000000000000000000000000000000000002"
		const uint8wpW0QiD = await WeedburnH2TQ1DU.decimals.call({from: accounts[4]});
		const boolAgnWxFw = await WeedburnH2TQ1DU.decreaseAllowance.call(addressT2PT958, uintcQKLhju, {from: accounts[3]});
		const addressHoIZERe = await WeedburnH2TQ1DU.burnFrom.call(addressrZEjFtm, uintgAMD5qi, {from: accounts[1]});
		const booloqmt7Zw = await WeedburnH2TQ1DU.transfer.call(addressM2gzqC8, uintnhylY2z, {from: accounts[3]});
		const uint256tC0Efdj = await WeedburnH2TQ1DU.balanceOf.call(addressBWys8W4, {from: accounts[0]});

		assert.equal(uint8wpW0QiD, BigInt("18"))
		await expect(WeedburnH2TQ1DU.decreaseAllowance.call(addressT2PT958, uintcQKLhju, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnTJ9j9WS = await Weedburn.new({from: accounts[4]});
		const uints3ucHKX = BigInt("878")
		const uintzX0zFj4 = BigInt("662")
		const addressqBkYz2y = accounts[4]
		const uintsdgCO9o = BigInt("729")
		const addressNxHqCL2 = accounts[3]
		await WeedburnTJ9j9WS.disableDevMode.call({from: accounts[4]});
		const uint256TVdn3Fg = await WeedburnTJ9j9WS.burn.call(uints3ucHKX, {from: "0x0000000000000000000000000000000000000001"});
		const boolvybqxJT = await WeedburnTJ9j9WS.approve.call(addressqBkYz2y, uintzX0zFj4, {from: accounts[0]});
		await WeedburnTJ9j9WS.disableLimitMode.call({from: accounts[3]});
		const addressfpF7RLW = await WeedburnTJ9j9WS.burnFrom.call(addressNxHqCL2, uintsdgCO9o, {from: accounts[2]});

		await expect(WeedburnTJ9j9WS.disableDevMode.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnTJ9j9WS = await Weedburn.new({from: accounts[4]});
		const addressqy5QPVp = accounts[1]
		const addressu6TrL2E = accounts[2]
		const uinttzhLtxP = BigInt("878")
		const uintaTEX0Jo = BigInt("729")
		const address4jHQz3 = accounts[3]
		const uint256Jgv560R = await WeedburnTJ9j9WS.allowance.call(addressu6TrL2E, addressqy5QPVp, {from: accounts[5]});
		await WeedburnTJ9j9WS.disableDevMode.call({from: accounts[4]});
		await WeedburnTJ9j9WS.disableDevMode.call({from: accounts[4]});
		const uint256TVdn3Fg = await WeedburnTJ9j9WS.burn.call(uinttzhLtxP, {from: "0x0000000000000000000000000000000000000001"});
		await WeedburnTJ9j9WS.disableLimitMode.call({from: accounts[3]});
		await WeedburnTJ9j9WS.enableLimitMode.call({from: accounts[1]});
		const addressfpF7RLW = await WeedburnTJ9j9WS.burnFrom.call(address4jHQz3, uintaTEX0Jo, {from: accounts[2]});

		assert.equal(uint256Jgv560R, BigInt("0"))
		await expect(WeedburnTJ9j9WS.disableDevMode.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnJUKS9jA = await Weedburn.new({from: accounts[3]});
		const uinttLxlpIc = BigInt("485")
		const addressvOAnKFB = accounts[2]
		const boolZoCW4JW = await WeedburnJUKS9jA.transfer.call(addressvOAnKFB, uinttLxlpIc, {from: accounts[3]});

		assert.equal(boolZoCW4JW, true)
	});

	it('test for Weedburn', async () => {
		const WeedburnTJ9j9WS = await Weedburn.new({from: accounts[4]});
		const uintro223C = BigInt("923")
		const uintqSnYAa = BigInt("723")
		const addressk2OqocU = accounts[4]
		const uint256RX3Lw8t = await WeedburnTJ9j9WS.burn.call(uintro223C, {from: accounts[4]});
		const addressfpF7RLW = await WeedburnTJ9j9WS.burnFrom.call(addressk2OqocU, uintqSnYAa, {from: accounts[2]});

		await expect(WeedburnTJ9j9WS.burnFrom.call(addressk2OqocU, uintqSnYAa, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})