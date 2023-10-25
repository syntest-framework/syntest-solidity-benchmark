const OnXFinance = artifacts.require("OnXFinance");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('OnXFinance', (accounts) => {
	it('test for OnXFinance', async () => {
		const stringI156tu = "9m2C5IAOslcH48c7SVXBRbE5tCzCUIIhHq7jLVcc7XaeQtqrVaTMcVYOqNe4yc7RMUXbekbtYF1ArA"
		const stringtZX5t4l = "YoBN4PIAfB8714DXZLrnJr1k759t8WIpOQUvM7WLCJFD6xnCZcDKPY"
		const uintF0Ig8Zy = BigInt("43")
		const OnXFinanceHJ9II6I = await OnXFinance.new(stringI156tu, stringtZX5t4l, uintF0Ig8Zy, {from: accounts[3]});
		const uintmU8XcA = BigInt("377")
		const addressuj9Lyot = accounts[4]
		const uintioAyKAq = BigInt("1158")
		const addressJyFR9W2 = accounts[2]
		const addressRFLBN2z = accounts[3]
		const boolLh1Hzk4 = await OnXFinanceHJ9II6I.decreaseAllowance.call(addressuj9Lyot, uintmU8XcA, {from: accounts[3]});
		const uintWdnEJnA = await OnXFinanceHJ9II6I.totalSupply.call({from: accounts[3]});
		const boolLblxtAq = await OnXFinanceHJ9II6I.approveAndCall.call(addressJyFR9W2, uintioAyKAq, {from: accounts[3]});
		const boolzDhdRl = await OnXFinanceHJ9II6I.transferownership.call(addressRFLBN2z, {from: accounts[1]});

		await expect(OnXFinanceHJ9II6I.decreaseAllowance.call(addressuj9Lyot, uintmU8XcA, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for OnXFinance', async () => {
		const stringzkx9fWh = "vDu46TLlpwBjbIwm86gVqgaskjzl5pMRA6weWSi"
		const stringOmjwiDr = "wfoL2D9kt7llmhgP2MgMxjt9DVsbpG7TA3EQtH"
		const uintcKwjTNv = BigInt("152")
		const OnXFinanceN4ldJED = await OnXFinance.new(stringzkx9fWh, stringOmjwiDr, uintcKwjTNv, {from: accounts[0]});
		const uintHrfSv8W = BigInt("1587")
		const addressioEzBGA = accounts[0]
		const addressjCeohs = accounts[2]
		const uintHKicBH1 = BigInt("180")
		const addressJdPwwQ = accounts[2]
		const uintostQKxu = BigInt("1623")
		const addresssK8E2ZW = accounts[1]
		const addressNky3RAb = accounts[5]
		const addresszscukBD = accounts[3]
		const boolkRLCZPD = await OnXFinanceN4ldJED.transferFrom.call(addressjCeohs, addressioEzBGA, uintHrfSv8W, {from: accounts[0]});
		const boolwN8JCD = await OnXFinanceN4ldJED.approve.call(addressJdPwwQ, uintHKicBH1, {from: accounts[3]});
		const booldV1dwzH = await OnXFinanceN4ldJED.approve.call(addresssK8E2ZW, uintostQKxu, {from: accounts[5]});
		const uinthbsTOf = await OnXFinanceN4ldJED.totalSupply.call({from: accounts[2]});
		const uintpN2fRnX = await OnXFinanceN4ldJED.allowance.call(addresszscukBD, addressNky3RAb, {from: accounts[4]});

		await expect(OnXFinanceN4ldJED.transferFrom.call(addressjCeohs, addressioEzBGA, uintHrfSv8W, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for OnXFinance', async () => {
		const stringDdtirPd = "LTWlNOnbHZVYttuJXVk4WpweMdMxj8bO32LN9UINwhhwEA4c1HPLwEykyEySXSeUNuuXoPQrekXaT4fbrNCsz6kLJ1KwxT"
		const stringlUzaW9 = "P5sqHihBi9DaGzywR1IrW1YXgwJiPUkFFbpZg7ckDoWiXCtK"
		const uintW1FRB3 = BigInt("173")
		const OnXFinanceKYCWZOv = await OnXFinance.new(stringDdtirPd, stringlUzaW9, uintW1FRB3, {from: accounts[4]});
		const uintSIAe6vS = BigInt("452")
		const addresshqGMUvv = accounts[3]
		const uintK2uWHDQ = BigInt("1197")
		const addressnP8EEQa = accounts[0]
		const addressL5LJI5d = accounts[1]
		const boolvBbPHl = await OnXFinanceKYCWZOv.approve.call(addresshqGMUvv, uintSIAe6vS, {from: accounts[3]});
		const stringQAGOBTl = await OnXFinanceKYCWZOv.symbol.call({from: accounts[2]});
		const boolzTxl6cz = await OnXFinanceKYCWZOv.transferFrom.call(addressL5LJI5d, addressnP8EEQa, uintK2uWHDQ, {from: accounts[2]});

		assert.equal(boolvBbPHl, true)
		assert.equal(stringQAGOBTl, "P5sqHihBi9DaGzywR1IrW1YXgwJiPUkFFbpZg7ckDoWiXCtK")
		await expect(OnXFinanceKYCWZOv.transferFrom.call(addressL5LJI5d, addressnP8EEQa, uintK2uWHDQ, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for OnXFinance', async () => {
		const stringiX0Tvi6 = "l9h"
		const stringqThiI2Q = "m4vwyMhUqequmnJXukqQNRtila8skrwXEe"
		const uintGx1RoG9 = BigInt("121")
		const OnXFinanceRuiReaR = await OnXFinance.new(stringiX0Tvi6, stringqThiI2Q, uintGx1RoG9, {from: accounts[3]});
		const uintjCqLfY7 = BigInt("845")
		const addressXpUhGB0 = accounts[2]
		const uint1tP727 = BigInt("279")
		const addresssGDRttT = accounts[3]
		const uintj3zdLDd = BigInt("1103")
		const addressBvJLPCl = accounts[1]
		const addressm28TORf = accounts[1]
		const uintxv04lsa = BigInt("820")
		const addresssKFIRe4 = accounts[4]
		const booldNyuj4K = await OnXFinanceRuiReaR.transfer.call(addressXpUhGB0, uintjCqLfY7, {from: accounts[4]});
		const boolYjmCPk = await OnXFinanceRuiReaR.transfer.call(addresssGDRttT, uint1tP727, {from: accounts[0]});
		const boolcsD0GPj = await OnXFinanceRuiReaR.transferFrom.call(addressm28TORf, addressBvJLPCl, uintj3zdLDd, {from: accounts[2]});
		const boolFN8vmlK = await OnXFinanceRuiReaR.transfer.call(addresssKFIRe4, uintxv04lsa, {from: accounts[2]});

		await expect(OnXFinanceRuiReaR.transfer.call(addressXpUhGB0, uintjCqLfY7, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for OnXFinance', async () => {
		const stringbu79IIa = "cBaJeyG3JUQy7R57oeDIYkTiNTMhoBQNWlRSSxekH3RidCTVIIxgNiXRvbzwLPiSHXwTyl5GrByPE"
		const stringBBSRnai = "koadTe3AvR0GccBKgfPl5QaYvopaIHHdmc6k28hck8Qpjpl78dN5Kpc9"
		const uinthRo7eyW = BigInt("4")
		const OnXFinanceHFw1Auo = await OnXFinance.new(stringbu79IIa, stringBBSRnai, uinthRo7eyW, {from: accounts[1]});
		const addressPoGgmlX = accounts[2]
		const uintaiUwRP1 = BigInt("1947")
		const addressKU1gTo = "0x0000000000000000000000000000000000000001"
		const uintf448kE4 = BigInt("43")
		const addressIFwd4Km = accounts[1]
		const boolmbKpyCh = await OnXFinanceHFw1Auo.transferownership.call(addressPoGgmlX, {from: accounts[1]});
		const boolKyppWMd = await OnXFinanceHFw1Auo.approveAndCall.call(addressKU1gTo, uintaiUwRP1, {from: accounts[2]});
		const stringog1r2iB = await OnXFinanceHFw1Auo.symbol.call({from: accounts[0]});
		const boolnguuID = await OnXFinanceHFw1Auo.approveAndCall.call(addressIFwd4Km, uintf448kE4, {from: accounts[1]});
		const stringiwmqVf = await OnXFinanceHFw1Auo.symbol.call({from: accounts[1]});

		assert.equal(boolmbKpyCh, true)
		await expect(OnXFinanceHFw1Auo.approveAndCall.call(addressKU1gTo, uintaiUwRP1, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for OnXFinance', async () => {
		const stringq2uV8P1 = "36QB4AS2Y7rts2IGDZ8blCiik4Eq0TS8k3BIB9IyAoyVnti8UaO8TE47MAHhR0SqpR6NRrZUP9w8N"
		const stringlceyiD = "1njRA4Pf7un6l7FlXPPyocltl3WJKUZejvDne7SUYSZhLulbgabGvShJsrvFuDtyrmoiiA9n2spdEjppQSkPHgbnPSj9fczYPo"
		const uintfLEtDd6 = BigInt("161")
		const OnXFinanceqSHNguK = await OnXFinance.new(stringq2uV8P1, stringlceyiD, uintfLEtDd6, {from: "0x0000000000000000000000000000000000000001"});
		const addressrN84F5b = accounts[3]
		const addressiQkU6SE = accounts[1]
		const uintbZiNWHp = BigInt("1789")
		const addresslCcHPe = accounts[1]
		const uintR1Q20TI = await OnXFinanceqSHNguK.allowance.call(addressiQkU6SE, addressrN84F5b, {from: accounts[2]});
		const boolOlFjOLS = await OnXFinanceqSHNguK.decreaseAllowance.call(addresslCcHPe, uintbZiNWHp, {from: accounts[5]});
		const stringTTZ5RYn = await OnXFinanceqSHNguK.symbol.call({from: accounts[1]});
	});

	it('test for OnXFinance', async () => {
		const stringRoT1NBx = "r1jti19nOSXfBZKEBgw6MK5PENjP1WdL8A7KaXQMS6Un3QJEl7je6urfJl4V8rb2QrTPl1a8U5xDTvBnRImd"
		const stringpjfccr0 = "8nhgwkXbPGLWoVFEUeDYS9L6knmoPtDGMgmkyCMXSvVvT"
		const uintaMHzvGa = BigInt("2012")
		const OnXFinanceJecdavb = await OnXFinance.new(stringRoT1NBx, stringpjfccr0, uintaMHzvGa, {from: accounts[5]});
		const uintI7GUncN = BigInt("1628")
		const addressHprsBFd = accounts[0]
		const uint0gMLby = BigInt("770")
		const addressQMgvEQm = accounts[4]
		const boolFBBJaDU = await OnXFinanceJecdavb.approveAndCall.call(addressHprsBFd, uintI7GUncN, {from: accounts[5]});
		const uint8bFDjVfk = await OnXFinanceJecdavb.decimals.call({from: accounts[0]});
		const boolZwOXFxu = await OnXFinanceJecdavb.approve.call(addressQMgvEQm, uint0gMLby, {from: accounts[3]});

		assert.equal(boolFBBJaDU, true)
		assert.equal(boolZwOXFxu, true)
		assert.equal(uint8bFDjVfk, BigInt("18"))
	});

	it('test for OnXFinance', async () => {
		const stringRoT1NBx = "r1jti19nOSXfBZKEBgw6MK5PENjP1WdL8A7KaXQMS6Un3QJEl7je6urfJl4V8rb2QrTPl1a8U5xDTvBnRImd"
		const stringpjfccr0 = "8nhgwkXbPGLWoVFEUeDYS9L6knmoPtDGMgmkyCMXSvVvT"
		const uinttXiyBIr = BigInt("2012")
		const OnXFinanceJecdavb = await OnXFinance.new(stringRoT1NBx, stringpjfccr0, uinttXiyBIr, {from: accounts[5]});
		const uintT3OXYln = BigInt("254")
		const addresscUDDheD = accounts[5]
		const uintlzDZqWv = BigInt("655")
		const addressThcTGxO = accounts[3]
		const uinttnn8JoX = BigInt("1019")
		const addresswYJkVn1 = accounts[3]
		const boolBvtb7YN = await OnXFinanceJecdavb.transfer.call(addresscUDDheD, uintT3OXYln, {from: accounts[3]});
		const boolcROKx1U = await OnXFinanceJecdavb.decreaseAllowance.call(addressThcTGxO, uintlzDZqWv, {from: accounts[3]});
		const boolGblJM8t = await OnXFinanceJecdavb.approveAndCall.call(addresswYJkVn1, uinttnn8JoX, {from: accounts[1]});
		const uint8jy0kPMr = await OnXFinanceJecdavb.decimals.call({from: accounts[3]});

		await expect(OnXFinanceJecdavb.transfer.call(addresscUDDheD, uintT3OXYln, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for OnXFinance', async () => {
		const stringRoT1NBx = "r1jti19nOSXfBZKEBgw6MK5PENjP1WdL8A7KaXQMS6Un3QJEl7je6urfJl4V8rb2QrTPl1a8U5xDTvBnRImd"
		const stringpjfccr0 = "8nhgwkXbPGLWoVFEUeDYS9L6knmoPtDGMgmkyCMXSvVvT"
		const uintSyLay8o = BigInt("2012")
		const OnXFinanceJecdavb = await OnXFinance.new(stringRoT1NBx, stringpjfccr0, uintSyLay8o, {from: accounts[5]});
		const addressqEJYGFb = accounts[3]
		const uintmlknX89 = BigInt("1616")
		const addressOi5L9Mf = accounts[1]
		const uintUMr2oI = BigInt("770")
		const addressZUxBfgE = accounts[5]
		const uintWCUkRWR = BigInt("0")
		const addressJERYwFp = accounts[4]
		const addressBXfneFN = "0x0000000000000000000000000000000000000001"
		const addressffSPh6E = accounts[3]
		const addressT7oRK8j = accounts[3]
		const uintS95lcXI = BigInt("165")
		const addressY7e07P = accounts[0]
		const addresszvHFTfK = accounts[4]
		const uintKfQ0EG5 = await OnXFinanceJecdavb.balanceOf.call(addressqEJYGFb, {from: accounts[3]});
		const boolFBBJaDU = await OnXFinanceJecdavb.approveAndCall.call(addressOi5L9Mf, uintmlknX89, {from: accounts[5]});
		const boolZwOXFxu = await OnXFinanceJecdavb.approve.call(addressZUxBfgE, uintUMr2oI, {from: accounts[3]});
		const boolQkMFYz4 = await OnXFinanceJecdavb.transferFrom.call(addressBXfneFN, addressJERYwFp, uintWCUkRWR, {from: accounts[4]});
		const uint8qKclHU8 = await OnXFinanceJecdavb.decimals.call({from: accounts[2]});
		const uintj3rT3Ym = await OnXFinanceJecdavb.allowance.call(addressT7oRK8j, addressffSPh6E, {from: accounts[3]});
		const bool7gKf4k = await OnXFinanceJecdavb.transferFrom.call(addresszvHFTfK, addressY7e07P, uintS95lcXI, {from: accounts[3]});

		assert.equal(boolFBBJaDU, true)
		assert.equal(boolQkMFYz4, true)
		assert.equal(boolZwOXFxu, true)
		assert.equal(uint8qKclHU8, BigInt("18"))
		assert.equal(uintKfQ0EG5, BigInt("0"))
		assert.equal(uintj3rT3Ym, BigInt("0"))
		await expect(OnXFinanceJecdavb.transferFrom.call(addresszvHFTfK, addressY7e07P, uintS95lcXI, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for OnXFinance', async () => {
		const stringRoT1NBx = "r1jti19nOSXfBZKEBgw6MK5PENjP1WdL8A7KaXQMS6Un3QJEl7je6urfJl4V8rb2QrTPl1a8U5xDTvBnRImd"
		const stringpjfccr0 = "8nhgwkXbPGLWoVFEUeDYS9L6knmoPtDGMgmkyCMXSvVvT"
		const uintRPOumkz = BigInt("2012")
		const OnXFinanceJecdavb = await OnXFinance.new(stringRoT1NBx, stringpjfccr0, uintRPOumkz, {from: accounts[5]});
		const uintulXtPXQ = BigInt("0")
		const addressL8DDHrn = accounts[2]
		const addressQtBeMqC = accounts[3]
		const uintclJdh7X = BigInt("500")
		const addressraacYTl = accounts[4]
		const uintEk2huit = BigInt("1211")
		const addressE79XFNB = accounts[5]
		const boolFBBJaDU = await OnXFinanceJecdavb.approveAndCall.call(addressL8DDHrn, uintulXtPXQ, {from: accounts[5]});
		const uint8RwFqhLs = await OnXFinanceJecdavb.decimals.call({from: "0x0000000000000000000000000000000000000001"});
		const uints8VPD8o = await OnXFinanceJecdavb.balanceOf.call(addressQtBeMqC, {from: accounts[3]});
		const boolq71qchB = await OnXFinanceJecdavb.approve.call(addressraacYTl, uintclJdh7X, {from: accounts[2]});
		const boollO9QUDf = await OnXFinanceJecdavb.transfer.call(addressE79XFNB, uintEk2huit, {from: accounts[4]});

		assert.equal(boolFBBJaDU, true)
		assert.equal(boolq71qchB, true)
		assert.equal(uint8RwFqhLs, BigInt("18"))
		assert.equal(uints8VPD8o, BigInt("0"))
		await expect(OnXFinanceJecdavb.transfer.call(addressE79XFNB, uintEk2huit, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})