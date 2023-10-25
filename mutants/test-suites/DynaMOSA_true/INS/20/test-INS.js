const INS = artifacts.require("INS");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('INS', (accounts) => {
	it('test for INS', async () => {
		const uintVvFXvHj = BigInt("1752")
		const stringt2bkYbN = "FGUS48axJc5O1Jbw86YdW6JUJbqEoCoJHOZzXXzddntn"
		const stringLwdoGyd = "rXAIzv9Oskl2qXbfCYtKGVjDK"
		const INSQtwWeS = await INS.new(uintVvFXvHj, stringt2bkYbN, stringLwdoGyd, {from: "0x0000000000000000000000000000000000000001"});
		const uintPfl9nxp = BigInt("563")
		const addressvtGg0xA = "0x0000000000000000000000000000000000000001"
		const addressZ3fYVea = accounts[2]
		const uintboFtytD = BigInt("659")
		const uintEDQh2N = BigInt("540")
		const uintf2UMzDa = BigInt("584")
		const bytectcXHQ = "0x1f0d011c16120716160a121f021f080a0b1b130d1f100d0f17141f"
		const uintNe2Fj1v = BigInt("867")
		const addresspV08xkc = "0x0000000000000000000000000000000000000001"
		const uintevTihCP = BigInt("1384")
		const boolJjI4pvX = await INSQtwWeS.transferFrom.call(addressZ3fYVea, addressvtGg0xA, uintPfl9nxp, {from: accounts[2]});
		const boolibAkQ9B = await INSQtwWeS.burn.call(uintboFtytD, {from: accounts[3]});
		const boolD5tZnvl = await INSQtwWeS.burn.call(uintEDQh2N, {from: accounts[1]});
		const boolkMFyCF = await INSQtwWeS.burn.call(uintf2UMzDa, {from: accounts[4]});
		const boolceERXYi = await INSQtwWeS.approveAndCall.call(addresspV08xkc, uintNe2Fj1v, bytectcXHQ, {from: accounts[2]});
		const boolz24OhSt = await INSQtwWeS.burn.call(uintevTihCP, {from: accounts[2]});
	});

	it('test for INS', async () => {
		const uintAReGaAw = BigInt("1096")
		const stringAOQVc5t = "ncJjX9XY3OW46uCxgIJxbnvqFbbfjYz7WiFDglXYoF3BiiJOLLXB1Zocv3VjQkwEsvQPHa"
		const stringi0mJTE = "YUxeOnOJCLCE7bV8eDrSUhhYIWJ6SzcvOjLbxPGsr2mzIog1EbfQKBrmS9JG2Njx"
		const INSlor8zFs = await INS.new(uintAReGaAw, stringAOQVc5t, stringi0mJTE, {from: accounts[3]});
		const uintctAjiAM = BigInt("1685")
		const addresshvCF5uz = accounts[5]
		const uintxo5Bcui = BigInt("782")
		const addressXBtegzp = accounts[1]
		const addressLKyg6b8 = "0x0000000000000000000000000000000000000001"
//		const boolrzpjS7 = await INSlor8zFs.transfer.call(addresshvCF5uz, uintctAjiAM, {from: "0x0000000000000000000000000000000000000001"});
//		const boolSGdsOo = await INSlor8zFs.transferFrom.call(addressLKyg6b8, addressXBtegzp, uintxo5Bcui, {from: accounts[2]});

		await expect(INSlor8zFs.transfer.call(addresshvCF5uz, uintctAjiAM, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for INS', async () => {
		const uintGasHAqp = BigInt("660")
		const stringpxRobCx = "f2dRdIpBdiRVGDW6BOH6vXLRJjmUHrQGfWxfCI9a7blU7Qov"
		const stringoS9QHt = "kj3tbTYoHscf1pFI8z5V23ar9FrY2qB3e5GGBxRuc7xhluQuoQmbJaM1fux8y6jdFuhA3m9U3aTLoqt8xrMVA8"
		const INSUAWRbr4 = await INS.new(uintGasHAqp, stringpxRobCx, stringoS9QHt, {from: accounts[0]});
		const byteLFSA7Of = "0x1d1306"
		const uintfgIYu2 = BigInt("1773")
		const addresszbDUPbu = accounts[0]
		const uintEK6JEZY = BigInt("17")
		const addressoKA1fvH = accounts[1]
		const addressEDouThC = accounts[0]
		const uintrjeIv6N = BigInt("1980")
		const addressfT61QyH = accounts[5]
		const addressZMVh3p = accounts[0]
		const uint8DHWT4 = BigInt("835")
//		const booluJAo76g = await INSUAWRbr4.approveAndCall.call(addresszbDUPbu, uintfgIYu2, byteLFSA7Of, {from: accounts[4]});
//		const booldpUhVUm = await INSUAWRbr4.transferFrom.call(addressEDouThC, addressoKA1fvH, uintEK6JEZY, {from: accounts[1]});
//		const boolArnnQAN = await INSUAWRbr4.transferFrom.call(addressZMVh3p, addressfT61QyH, uintrjeIv6N, {from: "0x0000000000000000000000000000000000000001"});
//		const booliiywq1N = await INSUAWRbr4.burn.call(uint8DHWT4, {from: accounts[5]});

		await expect(INSUAWRbr4.approveAndCall.call(addresszbDUPbu, uintfgIYu2, byteLFSA7Of, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for INS', async () => {
		const uint78wST5 = BigInt("627")
		const stringXPKw1C = "Zk66U67FdNHB00vWeDjGsyapowhGK834v36N9VQdg2OpWf"
		const stringIePyrdl = "oOLL8aPOpIlvTTlOM6TIJw81JwNLL6LMiqvokuzxIDKjA8WrhbeAVjXzQVmfrN89IpHKyXPN2vfRgliwpik"
		const INSnDT1tZ9 = await INS.new(uint78wST5, stringXPKw1C, stringIePyrdl, {from: accounts[1]});
		const uintuVYDNbJ = BigInt("1567")
		const addressSsY8cJy = accounts[2]
		const uintNyWC5nD = BigInt("270")
		const uintaoP5Y28 = BigInt("619")
		const addressxmWUu2G = accounts[4]
		const uintah0e3Ng = BigInt("660")
		const byteSQiFeC4 = "0x15030c091e1a0a1e101f1402081c061c1f09150a1806031c1c06140b111a09"
		const uintgKvefpE = BigInt("1356")
		const addresscyo6PxX = accounts[0]
		const boolaYYDwB = await INSnDT1tZ9.approve.call(addressSsY8cJy, uintuVYDNbJ, {from: accounts[3]});
//		const boolBkpjREa = await INSnDT1tZ9.burn.call(uintNyWC5nD, {from: accounts[0]});
//		const booleadtrSY = await INSnDT1tZ9.transfer.call(addressxmWUu2G, uintaoP5Y28, {from: accounts[0]});
//		const boolLFU4mHN = await INSnDT1tZ9.burn.call(uintah0e3Ng, {from: accounts[2]});
//		const booletzpODc = await INSnDT1tZ9.approveAndCall.call(addresscyo6PxX, uintgKvefpE, byteSQiFeC4, {from: accounts[3]});

		assert.equal(boolaYYDwB, true)
		await expect(INSnDT1tZ9.burn.call(uintNyWC5nD, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for INS', async () => {
		const uintUgIFU00 = BigInt("1968")
		const stringTe6YPrn = "cPDE6Jg3og3dRtooremXr0jFb6vA8Azau36HN4Esjn9IwuiSmVHClvAApynup6OIIdoWCwvKIYkIOp4Voi9mH5IwDU8kFX"
		const stringVTQzzS8 = "NOZjbw6s3FeNqj9Qm4aFYyObPqR4Ijpba3bio7vhNylhRDWiwlNRBCRAmQtUqE4kvppLmJdCLp5Hr8UH1G4k4reJEP"
		const INSgyco9P1 = await INS.new(uintUgIFU00, stringTe6YPrn, stringVTQzzS8, {from: accounts[5]});
		const uinttPmHQgC = BigInt("234")
		const addresslO4W2BO = accounts[5]
		const uintEyS54w5 = BigInt("1267")
		const addressbJtxIca = "0x0000000000000000000000000000000000000001"
		const uintzF3kwDS = BigInt("164")
		const addressQrS2BAG = "0x0000000000000000000000000000000000000001"
		const byteeWRqiGj = "0x02040f0b17070e0e1c1b1a"
		const uintwkmesUZ = BigInt("904")
		const addressUxo7zTE = accounts[0]
		const uintmril2Z = BigInt("482")
		const addressQZQXdDb = accounts[2]
//		const boolwM5Ewkd = await INSgyco9P1.burnFrom.call(addresslO4W2BO, uinttPmHQgC, {from: accounts[4]});
//		const boolCqsD5K5 = await INSgyco9P1.approve.call(addressbJtxIca, uintEyS54w5, {from: accounts[1]});
//		const boolLzMKzPR = await INSgyco9P1.transfer.call(addressQrS2BAG, uintzF3kwDS, {from: accounts[1]});
//		const boolnyk9nNG = await INSgyco9P1.approveAndCall.call(addressUxo7zTE, uintwkmesUZ, byteeWRqiGj, {from: accounts[1]});
//		const boolYADeBxc = await INSgyco9P1.transfer.call(addressQZQXdDb, uintmril2Z, {from: accounts[3]});

		await expect(INSgyco9P1.burnFrom.call(addresslO4W2BO, uinttPmHQgC, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for INS', async () => {
		const uintH4sIv2d = BigInt("1215")
		const stringu7vSqap = "IBLmauKpCTrDQC7ofSO2N4s4Q9ytrqBGUaDEfqddYJgKkOyAkLfTsBdy3Hn1Tv3SJu"
		const stringWOEjF3k = "X4ByyflQHU7mWc7XVK8DLGqHIEtKM1iOTsNNOkE6TCduUmCyk62YihPMeUuoYQqSvADBBuukjq8oD8rN"
		const INSz229PHE = await INS.new(uintH4sIv2d, stringu7vSqap, stringWOEjF3k, {from: accounts[4]});
		const uintqWECAhK = BigInt("1060")
		const addresslNuktQG = accounts[2]
		const uintPkZkM9 = BigInt("453")
		const addressnTrsSb = accounts[4]
		const addressJLXCMr = accounts[4]
		const uintKhogE08 = BigInt("759")
		const uintxCCS07G = BigInt("956")
		const addressvfXeu5v = accounts[4]
		const uintrKNbf1k = BigInt("1135")
		const addressmceEip = accounts[5]
		const addressx2Ostlu = accounts[3]
		const uintrmkdoFZ = BigInt("663")
		const uintssedugY = BigInt("624")
		const boolr89RsAS = await INSz229PHE.approve.call(addresslNuktQG, uintqWECAhK, {from: accounts[5]});
//		const boolEUC7yFJ = await INSz229PHE.transferFrom.call(addressJLXCMr, addressnTrsSb, uintPkZkM9, {from: accounts[0]});
//		const boolq9Q1EEI = await INSz229PHE.burn.call(uintKhogE08, {from: accounts[0]});
//		const booldn9MwSS = await INSz229PHE.approve.call(addressvfXeu5v, uintxCCS07G, {from: accounts[3]});
//		const boolmET1jTA = await INSz229PHE.transferFrom.call(addressx2Ostlu, addressmceEip, uintrKNbf1k, {from: accounts[1]});
//		const boolFodw89p = await INSz229PHE.burn.call(uintrmkdoFZ, {from: "0x0000000000000000000000000000000000000001"});
//		const boolAaPWBN5 = await INSz229PHE.burn.call(uintssedugY, {from: accounts[0]});

		assert.equal(boolr89RsAS, true)
		await expect(INSz229PHE.transferFrom.call(addressJLXCMr, addressnTrsSb, uintPkZkM9, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for INS', async () => {
		const uintcUJrxWx = BigInt("1096")
		const stringAOQVc5t = "ncJjX9XY3OW46uCxgIJxbnvqFbbfjYz7WiFDglXYoF3BiiJOLLXB1Zocv3VjQkwEsvQPHa"
		const stringi0mJTE = "YUxeOnOJCLCE7bV8eDrSUhhYIWJ6SzcvOjLbxPGsr2mzIog1EbfQKBrmS9JG2Njx"
		const INSlor8zFs = await INS.new(uintcUJrxWx, stringAOQVc5t, stringi0mJTE, {from: accounts[3]});
		const uintwYRknD3 = BigInt("1583")
		const addresscLZm1Q = accounts[3]
		const uintI9p8yS9 = BigInt("1685")
		const address9Ygugn = accounts[5]
		const uintLLzAlVl = BigInt("157")
		const boolNpFg3R = await INSlor8zFs.transfer.call(addresscLZm1Q, uintwYRknD3, {from: accounts[3]});
//		const boolrzpjS7 = await INSlor8zFs.transfer.call(address9Ygugn, uintI9p8yS9, {from: "0x0000000000000000000000000000000000000001"});
//		const boolBkkgdRo = await INSlor8zFs.burn.call(uintLLzAlVl, {from: accounts[1]});

		assert.equal(boolNpFg3R, true)
		await expect(INSlor8zFs.transfer.call(address9Ygugn, uintI9p8yS9, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for INS', async () => {
		const uintn5f7Voj = BigInt("222")
		const stringoDyP5j8 = "weqCs4UJt3l4WoPUNl9YcfTyPoIKGAnfywuIyHqBZOK3ThFJNsFoof5MrazVQX8PrFHjDRqsDxTJN3EKSfke"
		const stringvnumTxY = "WStBUnaBilcHKCepsLDaRVnCCkqA3nNPaWuETPsfWI86DN1SojLV0prw1"
		const INS0frkSv = await INS.new(uintn5f7Voj, stringoDyP5j8, stringvnumTxY, {from: accounts[4]});
		const uintI0tcHfi = BigInt("1296")
		const addressCL49KFp = accounts[4]
		const uinty3ZKB8n = BigInt("1340")
		const uintnGdQNa7 = BigInt("1501")
		const addressCJjmY6f = accounts[5]
		const booloIniRlT = await INS0frkSv.approve.call(addressCL49KFp, uintI0tcHfi, {from: accounts[4]});
		const booli7bVJTv = await INS0frkSv.burn.call(uinty3ZKB8n, {from: accounts[4]});
		const boolMQ2u0MK = await INS0frkSv.approve.call(addressCJjmY6f, uintnGdQNa7, {from: accounts[3]});

		assert.equal(boolMQ2u0MK, true)
		assert.equal(booli7bVJTv, true)
		assert.equal(booloIniRlT, true)
	});
})