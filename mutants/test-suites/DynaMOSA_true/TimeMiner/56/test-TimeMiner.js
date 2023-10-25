const TimeMiner = artifacts.require("TimeMiner");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('TimeMiner', (accounts) => {
	it('test for TimeMiner', async () => {
		const TimeMinerg4qBgJS = await TimeMiner.new({from: accounts[5]});
		const uintO7KS2dN = BigInt("1251")
		const uintvJdGdBX = BigInt("831")
		const uintezJAmN = BigInt("811")
		const addressTK1I7Iy = accounts[1]
		const addressjdNs4HK = accounts[2]
		const uintU7QILuY = BigInt("1556")
		const uintAkf7hQH = BigInt("1601")
		const uintqVK1ma = BigInt("1655")
		const addressno65UH9 = accounts[2]
//		const uint256qOlNEUO = await TimeMinerg4qBgJS.setPrizeFromNewAddress.call(uintvJdGdBX, uintO7KS2dN, {from: accounts[2]});
//		const boolmfvh1lk = await TimeMinerg4qBgJS.approve.call(addressTK1I7Iy, uintezJAmN, {from: accounts[5]});
//		const uint256bNagDd9 = await TimeMinerg4qBgJS.allInfoFor.call(addressjdNs4HK, {from: accounts[1]});
//		const uint256SJ3Fye1 = await TimeMinerg4qBgJS.setPrizeFromNewAddress.call(uintAkf7hQH, uintU7QILuY, {from: accounts[5]});
//		const boolm0maCd = await TimeMinerg4qBgJS.approve.call(addressno65UH9, uintqVK1ma, {from: accounts[4]});

		await expect(TimeMinerg4qBgJS.setPrizeFromNewAddress.call(uintvJdGdBX, uintO7KS2dN, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinernyBXR4u = await TimeMiner.new({from: accounts[2]});
		const addressTm78YHT = accounts[3]
		const uintImcpOR8 = BigInt("144")
		const addressWWXoaSB = accounts[1]
		const uintBoLfHD6 = BigInt("1644")
		const addressXkGpaQb = "0x0000000000000000000000000000000000000001"
		const address4VDQtX = accounts[5]
//		const uint256je3UtrN = await TimeMinernyBXR4u.tokensToClaim.call(addressTm78YHT, {from: "0x0000000000000000000000000000000000000001"});
//		const boolH8x90jh = await TimeMinernyBXR4u.transfer.call(addressWWXoaSB, uintImcpOR8, {from: accounts[5]});
//		const uintjwVBR3 = await TimeMinernyBXR4u.preSale.call(uintBoLfHD6, {from: "0x0000000000000000000000000000000000000001"});
//		await TimeMinernyBXR4u.preSaleFinished.call({from: accounts[1]});
//		const uint256LoqsY2Z = await TimeMinernyBXR4u.allowance.call(address4VDQtX, addressXkGpaQb, {from: accounts[4]});

		await expect(TimeMinernyBXR4u.tokensToClaim.call(addressTm78YHT, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerf7BCqM1 = await TimeMiner.new({from: accounts[5]});
		const addressocSiG5l = accounts[2]
		const uinteJxqym5 = BigInt("139")
		const addressjba8RyU = accounts[5]
		const boolI7KWjAG = await TimeMinerf7BCqM1.isWhitelisted.call(addressocSiG5l, {from: accounts[0]});
//		const boolztPJMqQ = await TimeMinerf7BCqM1.transfer.call(addressjba8RyU, uinteJxqym5, {from: accounts[4]});

		assert.equal(boolI7KWjAG, false)
		await expect(TimeMinerf7BCqM1.transfer.call(addressjba8RyU, uinteJxqym5, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerEVngZez = await TimeMiner.new({from: accounts[1]});
		const uintI6tgoH = BigInt("1846")
		const addressvzM8xm0 = accounts[0]
		const uintqRywWbj = BigInt("996")
		const uintzepZHNX = BigInt("1918")
		const uint99j3gL = BigInt("588")
		const addressxO21u8Z = accounts[1]
//		const uint256Io9Cvs7 = await TimeMinerEVngZez.changePreSalePriceIfToHigh.call(uintI6tgoH, {from: accounts[3]});
//		const uint256uMl7QnE = await TimeMinerEVngZez.balanceOfTokenCirculation.call(addressvzM8xm0, {from: accounts[3]});
//		const uint256Ue5TRjp = await TimeMinerEVngZez.setPrizeFromNewAddress.call(uintzepZHNX, uintqRywWbj, {from: "0x0000000000000000000000000000000000000001"});
//		const boolehvxIPV = await TimeMinerEVngZez.infoStableSystem.call({from: accounts[3]});
//		const boolKfJ8YTO = await TimeMinerEVngZez.approve.call(addressxO21u8Z, uint99j3gL, {from: accounts[0]});
//		await TimeMinerEVngZez.preSaleFinished.call({from: accounts[3]});

		await expect(TimeMinerEVngZez.changePreSalePriceIfToHigh.call(uintI6tgoH, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinergsjaY15 = await TimeMiner.new({from: accounts[1]});
		const boolTBja859 = true
		const addressENBltHK = accounts[3]
		const addressfqctX2 = accounts[2]
		const uintLBBoU6 = BigInt("956")
		const uintRMvPNVt = BigInt("1994")
//		const addressKOOZYqP = await TimeMinergsjaY15.whitelist.call(addressENBltHK, boolTBja859, {from: accounts[4]});
//		const uint2567JCf6e = await TimeMinergsjaY15.balanceOfTokenCirculation.call(addressfqctX2, {from: accounts[3]});
//		const uint256C5zIB6 = await TimeMinergsjaY15.setPrizeFromNewAddress.call(uintRMvPNVt, uintLBBoU6, {from: accounts[3]});
//		await TimeMinergsjaY15.preSaleFinished.call({from: accounts[4]});

		await expect(TimeMinergsjaY15.whitelist.call(addressENBltHK, boolTBja859, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMineri4X4E8H = await TimeMiner.new({from: accounts[1]});
		const addresske2g4eN = accounts[4]
		const addressn39WkD = accounts[4]
		const uintEnPPeid = BigInt("438")
		const addressPlOa7OL = accounts[0]
		const boolFECzR5b = true
		const boolNLt93pa = false
		const booldYPlsvH = true
		const addressNlgNzk = accounts[2]
		const uint25623gY80 = await TimeMineri4X4E8H.allowance.call(addressn39WkD, addresske2g4eN, {from: accounts[0]});
		const boolaypRZkb = await TimeMineri4X4E8H.approve.call(addressPlOa7OL, uintEnPPeid, {from: accounts[4]});
//		const boolXfkWik = await TimeMineri4X4E8H.setStableCoinSystem.call(boolFECzR5b, {from: accounts[0]});
//		const boolmm83Ur4 = await TimeMineri4X4E8H.setStableCoinSystem.call(boolNLt93pa, {from: accounts[0]});
//		await TimeMineri4X4E8H.preSaleFinished.call({from: accounts[2]});
//		const addressLOuoTyx = await TimeMineri4X4E8H.whitelist.call(addressNlgNzk, booldYPlsvH, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolaypRZkb, true)
		assert.equal(uint25623gY80, BigInt("0"))
		await expect(TimeMineri4X4E8H.setStableCoinSystem.call(boolFECzR5b, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerMD5fWKQ = await TimeMiner.new({from: accounts[3]});
		const uintAqPXeYA = BigInt("1930")
		const addressd7GCoPC = accounts[3]
		const addressd4542Aw = accounts[2]
		const addressQ11n22 = accounts[0]
		const addresswtdfpXS = accounts[1]
		const addressxWR5b1g = "0x0000000000000000000000000000000000000001"
		const addressoQIP2Er = accounts[1]
		const addressaA7BoWR = accounts[0]
		const uint256krliOaY = await TimeMinerMD5fWKQ.totalSupply.call({from: accounts[3]});
//		const boolnyXxNLp = await TimeMinerMD5fWKQ.transferFrom.call(addressd4542Aw, addressd7GCoPC, uintAqPXeYA, {from: accounts[0]});
//		const uint256FmkjoxR = await TimeMinerMD5fWKQ.balanceOf.call(addressQ11n22, {from: accounts[0]});
//		const uint256K4jL1t = await TimeMinerMD5fWKQ.allowance.call(addressxWR5b1g, addresswtdfpXS, {from: accounts[5]});
//		const uint256hudBJud = await TimeMinerMD5fWKQ.allowance.call(addressaA7BoWR, addressoQIP2Er, {from: accounts[4]});

		assert.equal(uint256krliOaY, BigInt("24000000"))
		await expect(TimeMinerMD5fWKQ.transferFrom.call(addressd4542Aw, addressd7GCoPC, uintAqPXeYA, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinern5A6Qi8 = await TimeMiner.new({from: "0x0000000000000000000000000000000000000001"});
		const addresstBLMhax = accounts[3]
		const addressmRcs60N = accounts[2]
		const addressA9OtRJh = accounts[3]
		const uint256ROREUe = await TimeMinern5A6Qi8.balanceOfTokenCirculation.call(addresstBLMhax, {from: accounts[4]});
		const uint256hwEwnGI = await TimeMinern5A6Qi8.allInfoFor.call(addressmRcs60N, {from: accounts[3]});
		const uint256tIWGe7L = await TimeMinern5A6Qi8.tokensToClaim.call(addressA9OtRJh, {from: accounts[0]});
	});

	it('test for TimeMiner', async () => {
		const TimeMinerMD5fWKQ = await TimeMiner.new({from: accounts[3]});
		const addressaUaAbLH = accounts[2]
		const uintVsfyHqJ = BigInt("1930")
		const addressEEVNca6 = accounts[3]
		const addressW5QGbhi = accounts[2]
		const address27SbFG = accounts[0]
		const addresscHJXSfr = accounts[1]
		const addressJgvulm = "0x0000000000000000000000000000000000000002"
		const addressbjJAt0V = accounts[1]
		const addresss0iDggr = accounts[0]
		const boolRPDLSEV = await TimeMinerMD5fWKQ.infoStableSystem.call({from: accounts[4]});
		const boolPwX7G3b = await TimeMinerMD5fWKQ.isWhitelisted.call(addressaUaAbLH, {from: accounts[1]});
		const uint256krliOaY = await TimeMinerMD5fWKQ.totalSupply.call({from: accounts[3]});
//		const boolnyXxNLp = await TimeMinerMD5fWKQ.transferFrom.call(addressW5QGbhi, addressEEVNca6, uintVsfyHqJ, {from: accounts[0]});
//		const uint256FmkjoxR = await TimeMinerMD5fWKQ.balanceOf.call(address27SbFG, {from: accounts[0]});
//		const uint256K4jL1t = await TimeMinerMD5fWKQ.allowance.call(addressJgvulm, addresscHJXSfr, {from: accounts[5]});
//		const uint256hudBJud = await TimeMinerMD5fWKQ.allowance.call(addresss0iDggr, addressbjJAt0V, {from: accounts[4]});

		assert.equal(boolPwX7G3b, false)
		assert.equal(uint256krliOaY, BigInt("24000000"))
		await expect(TimeMinerMD5fWKQ.transferFrom.call(addressW5QGbhi, addressEEVNca6, uintVsfyHqJ, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerg4qBgJS = await TimeMiner.new({from: accounts[5]});
		const addressmQWUAZt = accounts[4]
		const boolH41ey4h = true
		const addressyRb0GmK = accounts[0]
		const uintxYYqyMs = BigInt("811")
		const addresssH9DXhs = accounts[1]
		const addresslrMtsIT = accounts[3]
		const addressxrNTpms = accounts[3]
		const addressvdiht9y = accounts[2]
		const uintzG4eTWH = BigInt("1556")
		const uintfuHtS6F = BigInt("1601")
		const uintj32SPZH = BigInt("1655")
		const addresso63pSc5 = accounts[2]
//		const uint256iWhiJw = await TimeMinerg4qBgJS.allInfoFor.call(addressmQWUAZt, {from: accounts[1]});
//		const addressC0oAces = await TimeMinerg4qBgJS.whitelist.call(addressyRb0GmK, boolH41ey4h, {from: accounts[1]});
//		const boolmfvh1lk = await TimeMinerg4qBgJS.approve.call(addresssH9DXhs, uintxYYqyMs, {from: accounts[5]});
//		const uint256bNagDd9 = await TimeMinerg4qBgJS.allInfoFor.call(addresslrMtsIT, {from: accounts[1]});
//		const uint256BIXOGoB = await TimeMinerg4qBgJS.allowance.call(addressvdiht9y, addressxrNTpms, {from: accounts[0]});
//		const uint256SJ3Fye1 = await TimeMinerg4qBgJS.setPrizeFromNewAddress.call(uintfuHtS6F, uintzG4eTWH, {from: accounts[5]});
//		const boolm0maCd = await TimeMinerg4qBgJS.approve.call(addresso63pSc5, uintj32SPZH, {from: accounts[4]});

		await expect(TimeMinerg4qBgJS.allInfoFor.call(addressmQWUAZt, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerQIXfEjZ = await TimeMiner.new({from: accounts[4]});
		const uintwQPY2fr = BigInt("500")
		const addresss8OQFc = accounts[1]
//		const uintJ3Y3eHU = await TimeMinerQIXfEjZ.preSale.call(uintwQPY2fr, {from: accounts[2]});
//		const uint256Khr5MMw = await TimeMinerQIXfEjZ.tokensToClaim.call(addresss8OQFc, {from: accounts[4]});
//		const boole74xdrL = await TimeMinerQIXfEjZ.infoStableSystem.call({from: accounts[4]});

		await expect(TimeMinerQIXfEjZ.preSale.call(uintwQPY2fr, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerf7BCqM1 = await TimeMiner.new({from: accounts[5]});
		const addressSCZLOqH = accounts[3]
		const boolhAP2MxB = true
		const addresscAeOt7a = accounts[0]
		const uintnfbKUbk = BigInt("1606")
		const uintQPpnLsy = BigInt("1396")
		const addresshMYwM5d = accounts[5]
		const uintJmD3wkW = BigInt("126")
		const addressNQDa2r5 = accounts[5]
		const boolI7KWjAG = await TimeMinerf7BCqM1.isWhitelisted.call(addressSCZLOqH, {from: accounts[0]});
		const addressIerXdrL = await TimeMinerf7BCqM1.whitelist.call(addresscAeOt7a, boolhAP2MxB, {from: accounts[5]});
//		const uint256mruiBlX = await TimeMinerf7BCqM1.setPrizeFromNewAddress.call(uintQPpnLsy, uintnfbKUbk, {from: accounts[4]});
//		const uint256ittEjbv = await TimeMinerf7BCqM1.totalSupply.call({from: accounts[5]});
//		const uint256GqlaHnB = await TimeMinerf7BCqM1.balanceOf.call(addresshMYwM5d, {from: "0x0000000000000000000000000000000000000001"});
//		const boolztPJMqQ = await TimeMinerf7BCqM1.transfer.call(addressNQDa2r5, uintJmD3wkW, {from: accounts[4]});

		assert.equal(boolI7KWjAG, false)
		await expect(TimeMinerf7BCqM1.setPrizeFromNewAddress.call(uintQPpnLsy, uintnfbKUbk, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerOP7jvKJ = await TimeMiner.new({from: accounts[5]});
		const addressgISIBzJ = accounts[4]
		const addressXiXyp3d = accounts[0]
		const uintBCApq31 = BigInt("1884")
		const uintH98TUjQ = BigInt("802")
		const uintzpVw4uo = BigInt("1702")
		const addressYwaohPZ = accounts[2]
//		await TimeMinerOP7jvKJ.preSaleFinished.call({from: accounts[2]});
//		const uint256woamuP7 = await TimeMinerOP7jvKJ.balanceOfTokenCirculation.call(addressgISIBzJ, {from: accounts[3]});
//		const boolLEnouLQ = await TimeMinerOP7jvKJ.isWhitelisted.call(addressXiXyp3d, {from: accounts[3]});
//		const uint256oHUOVXN = await TimeMinerOP7jvKJ.setPrizeFromNewAddress.call(uintH98TUjQ, uintBCApq31, {from: accounts[3]});
//		const boolEeE1aMW = await TimeMinerOP7jvKJ.transfer.call(addressYwaohPZ, uintzpVw4uo, {from: accounts[2]});

		await expect(TimeMinerOP7jvKJ.preSaleFinished.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerg4qBgJS = await TimeMiner.new({from: accounts[5]});
		const boolJtEaYil = false
		const addressTqpR0Hc = accounts[0]
		const uintyXBLegW = BigInt("1243")
		const uintAAiXhMx = BigInt("831")
		const boolMXfoZi7 = await TimeMinerg4qBgJS.infoStableSystem.call({from: accounts[4]});
		const booljEkox4G = await TimeMinerg4qBgJS.setStableCoinSystem.call(boolJtEaYil, {from: accounts[5]});
//		const uint2565P1Fm1 = await TimeMinerg4qBgJS.tokensToClaim.call(addressTqpR0Hc, {from: accounts[2]});
//		const uint256qOlNEUO = await TimeMinerg4qBgJS.setPrizeFromNewAddress.call(uintAAiXhMx, uintyXBLegW, {from: accounts[2]});

		await expect(TimeMinerg4qBgJS.tokensToClaim.call(addressTqpR0Hc, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerlc2uJ64 = await TimeMiner.new({from: accounts[1]});
		const addressViBJvxV = accounts[1]
		const addressgjY9dWs = accounts[4]
		const boolIAJDcra = false
		const addressLPSQlqX = accounts[4]
		const addressLM9aLn = accounts[5]
//		await TimeMinerlc2uJ64.preSaleFinished.call({from: accounts[1]});
//		const uint256Z51vS5 = await TimeMinerlc2uJ64.balanceOf.call(addressViBJvxV, {from: accounts[5]});
//		const uint256mIzIs0p = await TimeMinerlc2uJ64.allInfoFor.call(addressgjY9dWs, {from: accounts[2]});
//		const addresssBuCv8a = await TimeMinerlc2uJ64.whitelist.call(addressLPSQlqX, boolIAJDcra, {from: accounts[3]});
//		const uint256NKtvDtT = await TimeMinerlc2uJ64.allInfoFor.call(addressLM9aLn, {from: accounts[4]});

		await expect(TimeMinerlc2uJ64.preSaleFinished.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerlc2uJ64 = await TimeMiner.new({from: accounts[1]});
		const addressCddicH5 = accounts[5]
		const addressCFcGRzi = accounts[1]
		const addressZAsp8wy = accounts[2]
		const addressiUiuzwq = accounts[0]
		const uintIlYwmV6 = BigInt("299")
		const addressl4Q4yVg = accounts[2]
		const addressSOIXF8j = accounts[4]
		const boolIAJDcra = false
		const addressgWNRiCS = accounts[4]
		const addressZLZewzU = accounts[5]
		const uint256wHNDfma = await TimeMinerlc2uJ64.balanceOfTokenCirculation.call(addressCddicH5, {from: accounts[0]});
//		await TimeMinerlc2uJ64.preSaleFinished.call({from: accounts[1]});
//		const uint256Z51vS5 = await TimeMinerlc2uJ64.balanceOf.call(addressCFcGRzi, {from: accounts[5]});
//		const uint256mdGz8sc = await TimeMinerlc2uJ64.allowance.call(addressiUiuzwq, addressZAsp8wy, {from: accounts[4]});
//		const booldY8hxQd = await TimeMinerlc2uJ64.transfer.call(addressl4Q4yVg, uintIlYwmV6, {from: accounts[1]});
//		const uint256mIzIs0p = await TimeMinerlc2uJ64.allInfoFor.call(addressSOIXF8j, {from: accounts[2]});
//		const addresssBuCv8a = await TimeMinerlc2uJ64.whitelist.call(addressgWNRiCS, boolIAJDcra, {from: accounts[3]});
//		const uint256NKtvDtT = await TimeMinerlc2uJ64.allInfoFor.call(addressZLZewzU, {from: accounts[4]});

		assert.equal(uint256wHNDfma, BigInt("0"))
		await expect(TimeMinerlc2uJ64.preSaleFinished.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinervMdusX1 = await TimeMiner.new({from: accounts[0]});
		const address0x2sWL = accounts[4]
		const addressKgJKy8p = accounts[3]
		const addressYMHik4L = accounts[2]
		const uintejEPa1R = BigInt("2045")
		const addressbceFT8 = accounts[3]
		const uintu2ial53 = BigInt("111")
		const addressRdjTARG = accounts[4]
		const addressLxNCE1P = accounts[1]
		const uint256I2DmVmK = await TimeMinervMdusX1.allowance.call(addressKgJKy8p, address0x2sWL, {from: accounts[2]});
		const uint256jMKcW1j = await TimeMinervMdusX1.balanceOfTokenCirculation.call(addressYMHik4L, {from: accounts[3]});
		const uint256hRFrQys = await TimeMinervMdusX1.changePreSalePriceIfToHigh.call(uintejEPa1R, {from: accounts[0]});
//		const uint256sIjEeE = await TimeMinervMdusX1.tokensToClaim.call(addressbceFT8, {from: accounts[1]});
//		const boolIlm7TtZ = await TimeMinervMdusX1.approve.call(addressRdjTARG, uintu2ial53, {from: accounts[5]});
//		const uint256Y2DZtij = await TimeMinervMdusX1.balanceOfTokenCirculation.call(addressLxNCE1P, {from: accounts[3]});

		assert.equal(uint256I2DmVmK, BigInt("0"))
		assert.equal(uint256jMKcW1j, BigInt("0"))
		await expect(TimeMinervMdusX1.tokensToClaim.call(addressbceFT8, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerlc2uJ64 = await TimeMiner.new({from: accounts[1]});
		const addresshh2nkRR = accounts[1]
		const uintQx28hP0 = BigInt("72")
		const uintINfzidO = BigInt("1671")
		const uintCk3oOtl = BigInt("921")
		const uintZBVeveY = BigInt("1576")
		const uintxUtFFfk = BigInt("1878")
		const uint256YKzCTou = await TimeMinerlc2uJ64.balanceOf.call(addresshh2nkRR, {from: accounts[5]});
//		await TimeMinerlc2uJ64.preSaleFinished.call({from: accounts[1]});
//		const uint256yBoPzdl = await TimeMinerlc2uJ64.setPrizeFromNewAddress.call(uintINfzidO, uintQx28hP0, {from: accounts[1]});
//		const uint256dmDnEPt = await TimeMinerlc2uJ64.setPrizeFromNewAddress.call(uintZBVeveY, uintCk3oOtl, {from: accounts[2]});
//		const uint2561svDBl = await TimeMinerlc2uJ64.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
//		const uintDozsr4 = await TimeMinerlc2uJ64.preSale.call(uintxUtFFfk, {from: accounts[3]});

		assert.equal(uint256YKzCTou, BigInt("12000000"))
		await expect(TimeMinerlc2uJ64.preSaleFinished.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});
})