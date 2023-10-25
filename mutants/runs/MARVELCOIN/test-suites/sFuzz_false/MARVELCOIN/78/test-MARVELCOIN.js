const MARVELCOIN = artifacts.require("MARVELCOIN");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MARVELCOIN', (accounts) => {
	it('test for MARVELCOIN', async () => {
		const uintVvFXvHj = BigInt("1752")
		const stringt2bkYbN = "FGUS48axJc5O1Jbw86YdW6JUJbqEoCoJHOZzXXzddntn"
		const stringLwdoGyd = "rXAIzv9Oskl2qXbfCYtKGVjDK"
		const MARVELCOINQtwWeS = await MARVELCOIN.new(uintVvFXvHj, stringt2bkYbN, stringLwdoGyd, {from: "0x0000000000000000000000000000000000000001"});
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
		const boolJjI4pvX = await MARVELCOINQtwWeS.transferFrom.call(addressZ3fYVea, addressvtGg0xA, uintPfl9nxp, {from: accounts[2]});
		const boolibAkQ9B = await MARVELCOINQtwWeS.burn.call(uintboFtytD, {from: accounts[3]});
		const boolD5tZnvl = await MARVELCOINQtwWeS.burn.call(uintEDQh2N, {from: accounts[1]});
		const boolkMFyCF = await MARVELCOINQtwWeS.burn.call(uintf2UMzDa, {from: accounts[4]});
		const boolceERXYi = await MARVELCOINQtwWeS.approveAndCall.call(addresspV08xkc, uintNe2Fj1v, bytectcXHQ, {from: accounts[2]});
		const boolz24OhSt = await MARVELCOINQtwWeS.burn.call(uintevTihCP, {from: accounts[2]});
	});

	it('test for MARVELCOIN', async () => {
		const uintAReGaAw = BigInt("1096")
		const stringAOQVc5t = "ncJjX9XY3OW46uCxgIJxbnvqFbbfjYz7WiFDglXYoF3BiiJOLLXB1Zocv3VjQkwEsvQPHa"
		const stringi0mJTE = "YUxeOnOJCLCE7bV8eDrSUhhYIWJ6SzcvOjLbxPGsr2mzIog1EbfQKBrmS9JG2Njx"
		const MARVELCOINlor8zFs = await MARVELCOIN.new(uintAReGaAw, stringAOQVc5t, stringi0mJTE, {from: accounts[3]});
		const uintctAjiAM = BigInt("1685")
		const addresshvCF5uz = accounts[5]
		const uintxo5Bcui = BigInt("782")
		const addressXBtegzp = accounts[1]
		const addressLKyg6b8 = "0x0000000000000000000000000000000000000001"
		const boolrzpjS7 = await MARVELCOINlor8zFs.transfer.call(addresshvCF5uz, uintctAjiAM, {from: "0x0000000000000000000000000000000000000001"});
		const boolSGdsOo = await MARVELCOINlor8zFs.transferFrom.call(addressLKyg6b8, addressXBtegzp, uintxo5Bcui, {from: accounts[2]});

		await expect(MARVELCOINlor8zFs.transfer.call(addresshvCF5uz, uintctAjiAM, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for MARVELCOIN', async () => {
		const uintGasHAqp = BigInt("660")
		const stringpxRobCx = "f2dRdIpBdiRVGDW6BOH6vXLRJjmUHrQGfWxfCI9a7blU7Qov"
		const stringoS9QHt = "kj3tbTYoHscf1pFI8z5V23ar9FrY2qB3e5GGBxRuc7xhluQuoQmbJaM1fux8y6jdFuhA3m9U3aTLoqt8xrMVA8"
		const MARVELCOINUAWRbr4 = await MARVELCOIN.new(uintGasHAqp, stringpxRobCx, stringoS9QHt, {from: accounts[0]});
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
		const booluJAo76g = await MARVELCOINUAWRbr4.approveAndCall.call(addresszbDUPbu, uintfgIYu2, byteLFSA7Of, {from: accounts[4]});
		const booldpUhVUm = await MARVELCOINUAWRbr4.transferFrom.call(addressEDouThC, addressoKA1fvH, uintEK6JEZY, {from: accounts[1]});
		const boolArnnQAN = await MARVELCOINUAWRbr4.transferFrom.call(addressZMVh3p, addressfT61QyH, uintrjeIv6N, {from: "0x0000000000000000000000000000000000000001"});
		const booliiywq1N = await MARVELCOINUAWRbr4.burn.call(uint8DHWT4, {from: accounts[5]});

		await expect(MARVELCOINUAWRbr4.approveAndCall.call(addresszbDUPbu, uintfgIYu2, byteLFSA7Of, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for MARVELCOIN', async () => {
		const uint78wST5 = BigInt("627")
		const stringXPKw1C = "Zk66U67FdNHB00vWeDjGsyapowhGK834v36N9VQdg2OpWf"
		const stringIePyrdl = "oOLL8aPOpIlvTTlOM6TIJw81JwNLL6LMiqvokuzxIDKjA8WrhbeAVjXzQVmfrN89IpHKyXPN2vfRgliwpik"
		const MARVELCOINnDT1tZ9 = await MARVELCOIN.new(uint78wST5, stringXPKw1C, stringIePyrdl, {from: accounts[1]});
		const uintuVYDNbJ = BigInt("1567")
		const addressSsY8cJy = accounts[2]
		const uintNyWC5nD = BigInt("270")
		const uintaoP5Y28 = BigInt("619")
		const addressxmWUu2G = accounts[4]
		const uintah0e3Ng = BigInt("660")
		const byteSQiFeC4 = "0x15030c091e1a0a1e101f1402081c061c1f09150a1806031c1c06140b111a09"
		const uintgKvefpE = BigInt("1356")
		const addresscyo6PxX = accounts[0]
		const boolaYYDwB = await MARVELCOINnDT1tZ9.approve.call(addressSsY8cJy, uintuVYDNbJ, {from: accounts[3]});
		const boolBkpjREa = await MARVELCOINnDT1tZ9.burn.call(uintNyWC5nD, {from: accounts[0]});
		const booleadtrSY = await MARVELCOINnDT1tZ9.transfer.call(addressxmWUu2G, uintaoP5Y28, {from: accounts[0]});
		const boolLFU4mHN = await MARVELCOINnDT1tZ9.burn.call(uintah0e3Ng, {from: accounts[2]});
		const booletzpODc = await MARVELCOINnDT1tZ9.approveAndCall.call(addresscyo6PxX, uintgKvefpE, byteSQiFeC4, {from: accounts[3]});

		assert.equal(boolaYYDwB, true)
		await expect(MARVELCOINnDT1tZ9.burn.call(uintNyWC5nD, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for MARVELCOIN', async () => {
		const uintUgIFU00 = BigInt("1968")
		const stringTe6YPrn = "cPDE6Jg3og3dRtooremXr0jFb6vA8Azau36HN4Esjn9IwuiSmVHClvAApynup6OIIdoWCwvKIYkIOp4Voi9mH5IwDU8kFX"
		const stringVTQzzS8 = "NOZjbw6s3FeNqj9Qm4aFYyObPqR4Ijpba3bio7vhNylhRDWiwlNRBCRAmQtUqE4kvppLmJdCLp5Hr8UH1G4k4reJEP"
		const MARVELCOINgyco9P1 = await MARVELCOIN.new(uintUgIFU00, stringTe6YPrn, stringVTQzzS8, {from: accounts[5]});
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
		const boolwM5Ewkd = await MARVELCOINgyco9P1.burnFrom.call(addresslO4W2BO, uinttPmHQgC, {from: accounts[4]});
		const boolCqsD5K5 = await MARVELCOINgyco9P1.approve.call(addressbJtxIca, uintEyS54w5, {from: accounts[1]});
		const boolLzMKzPR = await MARVELCOINgyco9P1.transfer.call(addressQrS2BAG, uintzF3kwDS, {from: accounts[1]});
		const boolnyk9nNG = await MARVELCOINgyco9P1.approveAndCall.call(addressUxo7zTE, uintwkmesUZ, byteeWRqiGj, {from: accounts[1]});
		const boolYADeBxc = await MARVELCOINgyco9P1.transfer.call(addressQZQXdDb, uintmril2Z, {from: accounts[3]});

		await expect(MARVELCOINgyco9P1.burnFrom.call(addresslO4W2BO, uinttPmHQgC, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for MARVELCOIN', async () => {
		const uintXUjFqmg = BigInt("1096")
		const stringAOQVc5t = "ncJjX9XY3OW46uCxgIJxbnvqFbbfjYz7WiFDglXYoF3BiiJOLLXB1Zocv3VjQkwEsvQPHa"
		const stringi0mJTE = "YUxeOnOJCLCE7bV8eDrSUhhYIWJ6SzcvOjLbxPGsr2mzIog1EbfQKBrmS9JG2Njx"
		const MARVELCOINlor8zFs = await MARVELCOIN.new(uintXUjFqmg, stringAOQVc5t, stringi0mJTE, {from: accounts[3]});
		const uintMgqJHmQ = BigInt("782")
		const addresswB9OZ2f = accounts[1]
		const addressLT0j77i = "0x0000000000000000000000000000000000000001"
		const boolSGdsOo = await MARVELCOINlor8zFs.transferFrom.call(addressLT0j77i, addresswB9OZ2f, uintMgqJHmQ, {from: accounts[2]});

		await expect(MARVELCOINlor8zFs.transferFrom.call(addressLT0j77i, addresswB9OZ2f, uintMgqJHmQ, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})