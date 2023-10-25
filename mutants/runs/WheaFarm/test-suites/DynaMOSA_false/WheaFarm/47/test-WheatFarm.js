const WheatFarm = artifacts.require("WheatFarm");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('WheatFarm', (accounts) => {
	it('test for WheatFarm', async () => {
		const stringnZFbFQW = "aDC9JqO0lxquYzcBl8xLOgxmvsCF0KggyvFQtSuGiBG5ER9mnUTWtDiP0QWIzTTC7GQgnvEeWtB5AXaKmM83E32q0yCa7"
		const stringrKpXX4C = "Yy5JbkmH2orHjg6Agkc711aFRly6oSD8elEAQlhht9Fma06M1Q"
		const uintHsTRIpV = BigInt("248")
		const WheatFarmGLRUKl = await WheatFarm.new(stringnZFbFQW, stringrKpXX4C, uintHsTRIpV, {from: accounts[2]});
		const addressrhv4xEk = accounts[3]
		const uintTLifO0M = BigInt("1972")
		const addressDhqQP84 = accounts[3]
		const addressQ0QgjhY = accounts[2]
		const addressXhZqVeO = accounts[4]
		const uintaVbHEO1 = BigInt("1929")
		const addressvTMElWV = accounts[3]
		const uintk28P4vc = await WheatFarmGLRUKl.balanceOf.call(addressrhv4xEk, {from: accounts[2]});
		const booleRaV7Uw = await WheatFarmGLRUKl.transfer.call(addressDhqQP84, uintTLifO0M, {from: accounts[4]});
		const uintKCj9Jhh = await WheatFarmGLRUKl.allowance.call(addressXhZqVeO, addressQ0QgjhY, {from: accounts[5]});
		const boolssdm4fu = await WheatFarmGLRUKl.decreaseAllowance.call(addressvTMElWV, uintaVbHEO1, {from: accounts[1]});
		const uint8AxlwGZA = await WheatFarmGLRUKl.decimals.call({from: accounts[0]});

		assert.equal(uintk28P4vc, BigInt("0"))
		await expect(WheatFarmGLRUKl.transfer.call(addressDhqQP84, uintTLifO0M, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for WheatFarm', async () => {
		const stringAs8I0yq = "eNTxCEdNX23wDiAj"
		const stringpwlK1L5 = "cxk733Dd2Lm6XrnyHzTauCR2d4j7sAlzGINNgMCtAkeiYIJSGjpGglcYyF7a1r5dy8zQ"
		const uinthTJgdy = BigInt("1483")
		const WheatFarmcciis8 = await WheatFarm.new(stringAs8I0yq, stringpwlK1L5, uinthTJgdy, {from: accounts[4]});
		const uinteJeYruD = BigInt("247")
		const addressSEQaLiM = accounts[3]
		const uintwBYW1Zb = BigInt("758")
		const addressJfGaN1U = accounts[1]
		const addressNgNCttx = accounts[3]
		const uintekTGPlE = BigInt("992")
		const addresssKac0MH = accounts[2]
		const boolHlXbLzd = await WheatFarmcciis8.increaseAllowance.call(addressSEQaLiM, uinteJeYruD, {from: accounts[0]});
		const boolKEhD0Tm = await WheatFarmcciis8.transferFrom.call(addressNgNCttx, addressJfGaN1U, uintwBYW1Zb, {from: accounts[3]});
		const boolrq16boD = await WheatFarmcciis8.approve.call(addresssKac0MH, uintekTGPlE, {from: accounts[3]});

		await expect(WheatFarmcciis8.increaseAllowance.call(addressSEQaLiM, uinteJeYruD, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for WheatFarm', async () => {
		const stringPnOypAx = "9MMhWfxntMfSfKcHFslzWIEEiXU1vJfen5zkMmOFjnZm7JWbsC5FJQXiTRKs7HSxY"
		const stringxRMJiat = "AbBqV5ekKHcXmr25gHSwlSMs9oReivjGSLlx8xBC8nh6QUAKmCFSwrCLz3vOp359UqHO"
		const uintCCfiHW2 = BigInt("1548")
		const WheatFarmN2gME1G = await WheatFarm.new(stringPnOypAx, stringxRMJiat, uintCCfiHW2, {from: accounts[4]});
		const addressKM0Zdq = accounts[3]
		const uintVkt2An9 = BigInt("658")
		const addressuScC0Ie = accounts[4]
		const uintuwUoID1 = BigInt("594")
		const addresstDMAfhb = "0x0000000000000000000000000000000000000001"
		const uintw36di5G = await WheatFarmN2gME1G.balanceOf.call(addressKM0Zdq, {from: accounts[4]});
		const uint8uq3IqVZ = await WheatFarmN2gME1G.decimals.call({from: accounts[3]});
		const bool8WSbIO = await WheatFarmN2gME1G.approveAndCall.call(addressuScC0Ie, uintVkt2An9, {from: accounts[3]});
		const boolYjcWS6D = await WheatFarmN2gME1G.transfer.call(addresstDMAfhb, uintuwUoID1, {from: accounts[5]});

		assert.equal(uint8uq3IqVZ, BigInt("18"))
		assert.equal(uintw36di5G, BigInt("0"))
		await expect(WheatFarmN2gME1G.approveAndCall.call(addressuScC0Ie, uintVkt2An9, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for WheatFarm', async () => {
		const stringrZ3wrdI = "BvvzJY8YqCtojmO26ClAs"
		const stringKLEOhc = "P"
		const uintEaf5D50 = BigInt("224")
		const WheatFarmBfsnIWa = await WheatFarm.new(stringrZ3wrdI, stringKLEOhc, uintEaf5D50, {from: "0x0000000000000000000000000000000000000001"});
		const uintoY0E3mv = BigInt("1219")
		const addresssO8ZtlU = accounts[0]
		const stringjbuSUos = await WheatFarmBfsnIWa.symbol.call({from: accounts[4]});
		const stringNkDDWWl = await WheatFarmBfsnIWa.symbol.call({from: accounts[3]});
		const boolRBuiEs8 = await WheatFarmBfsnIWa.transfer.call(addresssO8ZtlU, uintoY0E3mv, {from: accounts[4]});
		const uintGXsVBo = await WheatFarmBfsnIWa.totalSupply.call({from: accounts[2]});
		const uint8gP1UEVt = await WheatFarmBfsnIWa.decimals.call({from: accounts[1]});
	});

	it('test for WheatFarm', async () => {
		const stringkmQC07R = "QrgmoLIstKEyb9vWAt8rOd4"
		const stringuBOi8oy = "cWRSIfQVz66CwuqrbQFVodnwGwyu9awvbKBIxoyIeEwGKVJ69rUJb6yrSILMzm"
		const uintRbTeBEc = BigInt("1870")
		const WheatFarmDQnZgoV = await WheatFarm.new(stringkmQC07R, stringuBOi8oy, uintRbTeBEc, {from: accounts[4]});
		const uintzUBKMBN = BigInt("1846")
		const addressRZciARP = accounts[3]
		const uintRLNGht2 = BigInt("660")
		const addressfRWvkH7 = accounts[3]
		const addressHA6qb7P = accounts[3]
		const uintsnosDh4 = BigInt("731")
		const addressezF3B3a = accounts[0]
		const boolIh1BzbU = await WheatFarmDQnZgoV.approve.call(addressRZciARP, uintzUBKMBN, {from: accounts[2]});
		const boolvF36nRe = await WheatFarmDQnZgoV.transferFrom.call(addressHA6qb7P, addressfRWvkH7, uintRLNGht2, {from: "0x0000000000000000000000000000000000000001"});
		const uint8HHETHag = await WheatFarmDQnZgoV.decimals.call({from: accounts[0]});
		const boolRHWWXBb = await WheatFarmDQnZgoV.transfer.call(addressezF3B3a, uintsnosDh4, {from: accounts[2]});

		assert.equal(boolIh1BzbU, true)
		await expect(WheatFarmDQnZgoV.transferFrom.call(addressHA6qb7P, addressfRWvkH7, uintRLNGht2, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for WheatFarm', async () => {
		const stringkmQC07R = "QrgmoLIstKEyb9vWAt8rOd4"
		const stringuBOi8oy = "cWRSIfQVz66CwuqrbQFVodnwGwyu9awvbKBIxoyIeEwGKVJ69rUJb6yrSILMzm"
		const uintWmUdn0B = BigInt("1870")
		const WheatFarmDQnZgoV = await WheatFarm.new(stringkmQC07R, stringuBOi8oy, uintWmUdn0B, {from: accounts[4]});
		const uintWOjtSt4 = BigInt("2042")
		const addressQ9KZ1ey = accounts[2]
		const addressAGUOMc = accounts[4]
		const uintQjAE6ff = BigInt("633")
		const addressbWEuQN = accounts[2]
		const boolCzjPUQX = await WheatFarmDQnZgoV.approve.call(addressQ9KZ1ey, uintWOjtSt4, {from: accounts[0]});
		const boolu2TCCk = await WheatFarmDQnZgoV.transferownership.call(addressAGUOMc, {from: "0x0000000000000000000000000000000000000001"});
		const boolZBEY1JX = await WheatFarmDQnZgoV.increaseAllowance.call(addressbWEuQN, uintQjAE6ff, {from: accounts[4]});

		assert.equal(boolCzjPUQX, true)
		await expect(WheatFarmDQnZgoV.transferownership.call(addressAGUOMc, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for WheatFarm', async () => {
		const stringZf30KPt = "jkM7GhcL2siMALS39hL34kt3AuKTiENbz2FpY8kwkiFsAgvbI8ATSqmI5BcjFWJY2WMDdL3"
		const stringdcC1WFK = "wOO9lelJMuljNBO0qp"
		const uintGU8edqx = BigInt("879")
		const WheatFarmNP1DWdx = await WheatFarm.new(stringZf30KPt, stringdcC1WFK, uintGU8edqx, {from: accounts[4]});
		const uintdGRkDRN = BigInt("1342")
		const addressFWTBLYR = accounts[3]
		const uintU1cl2M = BigInt("1570")
		const addressEM84BdK = accounts[4]
		const uintRSn6IsW = BigInt("1608")
		const addressoCRbmw = "0x0000000000000000000000000000000000000001"
		const addressHTwzdxZ = accounts[3]
		const addresslyX3paC = accounts[5]
		const boolAZfTuP = await WheatFarmNP1DWdx.transfer.call(addressFWTBLYR, uintdGRkDRN, {from: accounts[4]});
		const boolcWli3Wz = await WheatFarmNP1DWdx.transfer.call(addressEM84BdK, uintU1cl2M, {from: accounts[2]});
		const boolOFYdQpE = await WheatFarmNP1DWdx.transfer.call(addressoCRbmw, uintRSn6IsW, {from: accounts[0]});
		const uintwWUWUyU = await WheatFarmNP1DWdx.totalSupply.call({from: accounts[3]});
		const uintsqJjkF = await WheatFarmNP1DWdx.allowance.call(addresslyX3paC, addressHTwzdxZ, {from: accounts[1]});

		assert.equal(boolAZfTuP, true)
		await expect(WheatFarmNP1DWdx.transfer.call(addressEM84BdK, uintU1cl2M, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for WheatFarm', async () => {
		const stringkmQC07R = "QrgmoLIstKEyb9vWAt8rOd4"
		const stringuBOi8oy = "cWRSIfQVz66CwuqrbQFVodnwGwyu9awvbKBIxoyIeEwGKVJ69rUJb6yrSILMzm"
		const uintFDMncLP = BigInt("1870")
		const WheatFarmDQnZgoV = await WheatFarm.new(stringkmQC07R, stringuBOi8oy, uintFDMncLP, {from: accounts[4]});
		const uintEdm2nWY = BigInt("93")
		const addressggvtfnh = "0x00000000000000000000000000000000000000-1"
		const uintbAQmFlu = await WheatFarmDQnZgoV.totalSupply.call({from: accounts[5]});
		const boolm2l7zHz = await WheatFarmDQnZgoV.transfer.call(addressggvtfnh, uintEdm2nWY, {from: accounts[0]});
		const stringMYnSIKO = await WheatFarmDQnZgoV.symbol.call({from: accounts[5]});

		assert.equal(uintbAQmFlu, BigInt("1870000000000000000000"))
		await expect(WheatFarmDQnZgoV.transfer.call(addressggvtfnh, uintEdm2nWY, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for WheatFarm', async () => {
		const stringPnOypAx = "9MMhWfxntMfSfKcHFslzWIEEiXU1vJfen5zkMmOFjnZm7JWbsC5FJQXiTRKs7HSxY"
		const stringxRMJiat = "AbBqV5ekKHcXmr25gHSwlSMs9oReivjGSLlx8xBC8nh6QUAKmCFSwrCLz3vOp359UqHO"
		const uintri0roLd = BigInt("1548")
		const WheatFarmN2gME1G = await WheatFarm.new(stringPnOypAx, stringxRMJiat, uintri0roLd, {from: accounts[4]});
		const uintMiHCuNi = BigInt("1114")
		const addressC4MaFqr = accounts[1]
		const uintiXF5LPr = BigInt("658")
		const addressu1MuWR9 = accounts[4]
		const uintvCuh18l = BigInt("628")
		const addressHqBfyoa = "0x0000000000000000000000000000000000000001"
		const uintKSEdBIE = BigInt("1179")
		const addressnLVmJus = accounts[4]
		const uintecZ7RS = BigInt("602")
		const addressDTbJ1aV = "0x0000000000000000000000000000000000000001"
		const boolwD4AfH = await WheatFarmN2gME1G.approveAndCall.call(addressC4MaFqr, uintMiHCuNi, {from: accounts[4]});
		const bool8WSbIO = await WheatFarmN2gME1G.approveAndCall.call(addressu1MuWR9, uintiXF5LPr, {from: accounts[3]});
		const boolXsycoVW = await WheatFarmN2gME1G.decreaseAllowance.call(addressHqBfyoa, uintvCuh18l, {from: accounts[3]});
		const boolcJl57FQ = await WheatFarmN2gME1G.transfer.call(addressnLVmJus, uintKSEdBIE, {from: accounts[2]});
		const boolYjcWS6D = await WheatFarmN2gME1G.transfer.call(addressDTbJ1aV, uintecZ7RS, {from: accounts[5]});

		assert.equal(boolwD4AfH, true)
		await expect(WheatFarmN2gME1G.approveAndCall.call(addressu1MuWR9, uintiXF5LPr, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for WheatFarm', async () => {
		const stringPnOypAx = "9MMhWfxntMfSfKcHFslzWIEEiXU1vJfen5zkMmOFjnZm7JWbsC5FJQXiTRKs7HSxY"
		const stringxRMJiat = "AbBqV5ekKHcXmr25gHSwlSMs9oReivjGSLlx8xBC8nh6QUAKmCFSwrCLz3vOp359UqHO"
		const uintqdnWq9l = BigInt("1548")
		const WheatFarmN2gME1G = await WheatFarm.new(stringPnOypAx, stringxRMJiat, uintqdnWq9l, {from: accounts[4]});
		const uintBwtWajM = BigInt("0")
		const addressjVl641j = accounts[1]
		const boolM5G077K = await WheatFarmN2gME1G.transfer.call(addressjVl641j, uintBwtWajM, {from: accounts[1]});

		assert.equal(boolM5G077K, true)
	});
})