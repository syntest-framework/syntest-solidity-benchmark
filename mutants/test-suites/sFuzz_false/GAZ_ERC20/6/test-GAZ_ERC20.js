const GAZ_ERC20 = artifacts.require("GAZ_ERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('GAZ_ERC20', (accounts) => {
	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20d6PdqhD = await GAZ_ERC20.new({from: "0x0000000000000000000000000000000000000001"});
		const uintVJ8ceky = BigInt("1475")
		const addressXVrUKQa = accounts[4]
		const uintZANQ7rg = BigInt("535")
		const addressWajmWc = accounts[0]
		const addressEW27ogb = accounts[4]
		const uintznYhvpN = BigInt("1363")
		const addressZ9R5Ccw = accounts[2]
		const boolwdTRaZ = await GAZ_ERC20d6PdqhD.transfer.call(addressXVrUKQa, uintVJ8ceky, {from: accounts[0]});
		const boolPvsPU9 = await GAZ_ERC20d6PdqhD.transferFrom.call(addressEW27ogb, addressWajmWc, uintZANQ7rg, {from: accounts[0]});
		const boolGDbtgwF = await GAZ_ERC20d6PdqhD.approve.call(addressZ9R5Ccw, uintznYhvpN, {from: accounts[1]});
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20n4YNzw8 = await GAZ_ERC20.new({from: accounts[2]});
		const uintY7LJj8G = BigInt("1762")
		const addresslmg9HL = accounts[1]
		const addressc7ZVh8U = accounts[4]
		const uintK4O3jWf = BigInt("1439")
		const addressq7orKRV = "0x0000000000000000000000000000000000000001"
		const uintfh3C5Xw = BigInt("1879")
		const addressfPcmD5N = accounts[3]
		const uintx0VH30z = BigInt("1338")
		const addresstataUw4 = accounts[1]
//		const boolVDnK1sa = await GAZ_ERC20n4YNzw8.transferFrom.call(addressc7ZVh8U, addresslmg9HL, uintY7LJj8G, {from: accounts[0]});
//		const boolX1xwzP9 = await GAZ_ERC20n4YNzw8.transfer.call(addressq7orKRV, uintK4O3jWf, {from: accounts[0]});
//		const boolouFZer = await GAZ_ERC20n4YNzw8.approve.call(addressfPcmD5N, uintfh3C5Xw, {from: accounts[2]});
//		const boolOohhct = await GAZ_ERC20n4YNzw8.transfer.call(addresstataUw4, uintx0VH30z, {from: accounts[4]});

		await expect(GAZ_ERC20n4YNzw8.transferFrom.call(addressc7ZVh8U, addresslmg9HL, uintY7LJj8G, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20sHQCy0z = await GAZ_ERC20.new({from: accounts[0]});
		const uinteZdz7mt = BigInt("1856")
		const addressw3JKMz = accounts[0]
		const uintNWRTToq = BigInt("489")
		const addressSxhwadv = accounts[3]
		const uintZ3sKAe7 = BigInt("933")
		const addressHTnRsJs = accounts[5]
		const boolCemlqCr = await GAZ_ERC20sHQCy0z.approve.call(addressw3JKMz, uinteZdz7mt, {from: accounts[3]});
//		const boolF09lued = await GAZ_ERC20sHQCy0z.transfer.call(addressSxhwadv, uintNWRTToq, {from: accounts[1]});
//		const boolEtp3GKo = await GAZ_ERC20sHQCy0z.approve.call(addressHTnRsJs, uintZ3sKAe7, {from: accounts[1]});

		assert.equal(boolCemlqCr, true)
		await expect(GAZ_ERC20sHQCy0z.transfer.call(addressSxhwadv, uintNWRTToq, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20ZchS4aN = await GAZ_ERC20.new({from: accounts[1]});
		const uintCbZgFfE = BigInt("889")
		const addressSTR5PId = accounts[3]
		const uint23n5yF = BigInt("2046")
		const addressUZmg2U2 = accounts[1]
		const uintFgq6ZZ8 = BigInt("512")
		const addressZSgvj2O = accounts[5]
		const boolWygizav = await GAZ_ERC20ZchS4aN.transfer.call(addressSTR5PId, uintCbZgFfE, {from: accounts[1]});
//		const boolu6x9qt5 = await GAZ_ERC20ZchS4aN.transfer.call(addressUZmg2U2, uint23n5yF, {from: accounts[5]});
//		const boolgVtKu5c = await GAZ_ERC20ZchS4aN.approve.call(addressZSgvj2O, uintFgq6ZZ8, {from: accounts[2]});

		assert.equal(boolWygizav, true)
		await expect(GAZ_ERC20ZchS4aN.transfer.call(addressUZmg2U2, uint23n5yF, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20IDzjWIu = await GAZ_ERC20.new({from: accounts[2]});
		const uintbSUGEZs = BigInt("1836")
		const addressMM0qCNt = accounts[2]
		const uintMgdf3fn = BigInt("1457")
		const addressFEni4DR = accounts[0]
		const addressE06vte0 = accounts[2]
		const uintl9DW5Ex = BigInt("239")
		const addressyiAjWJv = accounts[5]
		const uintFQtEcc = BigInt("802")
		const addressFcZeXFH = accounts[2]
		const addressDcGazmt = accounts[4]
		const boolXYGae8j = await GAZ_ERC20IDzjWIu.transfer.call(addressMM0qCNt, uintbSUGEZs, {from: accounts[2]});
		const boolAp9xHVC = await GAZ_ERC20IDzjWIu.approve.call(addressFEni4DR, uintMgdf3fn, {from: accounts[4]});
//		const boolg6u2eU8 = await GAZ_ERC20IDzjWIu.approve.call(addressE06vte0, {from: accounts[0]});
//		const boolbntWuV = await GAZ_ERC20IDzjWIu.transfer.call(addressyiAjWJv, uintl9DW5Ex, {from: accounts[5]});
//		const boolHdOcPFI = await GAZ_ERC20IDzjWIu.transferFrom.call(addressDcGazmt, addressFcZeXFH, uintFQtEcc, {from: accounts[3]});

		assert.equal(boolAp9xHVC, true)
		assert.equal(boolXYGae8j, true)
		await expect(GAZ_ERC20IDzjWIu.approve.call(addressE06vte0, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20dgzjbsA = await GAZ_ERC20.new({from: accounts[4]});
		const uintiugmX6H = BigInt("1213")
		const addresshLUcM3U = accounts[1]
		const uintDnIWo8P = BigInt("1725")
		const addressVC92bKt = accounts[4]
		const addressMLsCRWB = accounts[4]
		const uintbkc57Dj = BigInt("496")
		const addresssUjBx8Z = accounts[1]
		const addressDcoF6E = accounts[2]
		const uintZn9stcR = BigInt("1604")
		const addressZAxIylh = accounts[0]
		const boolhwEzzuk = await GAZ_ERC20dgzjbsA.approve.call(addresshLUcM3U, uintiugmX6H, {from: accounts[0]});
		const boolNBVKtNs = await GAZ_ERC20dgzjbsA.transferFrom.call(addressMLsCRWB, addressVC92bKt, uintDnIWo8P, {from: accounts[4]});
		const boolVS3TvMA = await GAZ_ERC20dgzjbsA.approve.call(addresssUjBx8Z, uintbkc57Dj, {from: accounts[3]});
//		const boolo6oOvhr = await GAZ_ERC20dgzjbsA.approve.call(addressDcoF6E, {from: accounts[2]});
//		const boolwucG8m = await GAZ_ERC20dgzjbsA.approve.call(addressZAxIylh, uintZn9stcR, {from: accounts[1]});

		assert.equal(boolNBVKtNs, true)
		assert.equal(boolVS3TvMA, true)
		assert.equal(boolhwEzzuk, true)
		await expect(GAZ_ERC20dgzjbsA.approve.call(addressDcoF6E, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20Z9yzTub = await GAZ_ERC20.new({from: accounts[2]});
		const addressuwBOlwA = accounts[2]
		const uintWcDTeTC = BigInt("1921")
		const addressoGLRvAF = accounts[3]
//		const boolhR7fn2n = await GAZ_ERC20Z9yzTub.approve.call(addressuwBOlwA, {from: accounts[3]});
//		const boolw0MgjAv = await GAZ_ERC20Z9yzTub.transfer.call(addressoGLRvAF, uintWcDTeTC, {from: accounts[1]});

		await expect(GAZ_ERC20Z9yzTub.approve.call(addressuwBOlwA, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20chJSR9Q = await GAZ_ERC20.new({from: accounts[3]});
		const addressWmKUAN2 = accounts[0]
		const addressx0SCAr = accounts[1]
//		const boolJCH3m5f = await GAZ_ERC20chJSR9Q.approve.call(addressWmKUAN2, {from: accounts[1]});
//		const booll8Zqevk = await GAZ_ERC20chJSR9Q.approve.call(addressx0SCAr, {from: accounts[0]});

		await expect(GAZ_ERC20chJSR9Q.approve.call(addressWmKUAN2, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20Z9yzTub = await GAZ_ERC20.new({from: accounts[2]});
		const addressjfzV3ak = accounts[3]
		const uintiNp2nPx = BigInt("1929")
		const addressywPZABg = accounts[3]
//		const booljDun50U = await GAZ_ERC20Z9yzTub.approve.call(addressjfzV3ak, {from: accounts[5]});
//		const boolw0MgjAv = await GAZ_ERC20Z9yzTub.transfer.call(addressywPZABg, uintiNp2nPx, {from: accounts[1]});

		await expect(GAZ_ERC20Z9yzTub.approve.call(addressjfzV3ak, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20Z9yzTub = await GAZ_ERC20.new({from: accounts[2]});
		const uintdhQmmtB = BigInt("1989")
		const addressb45HjmO = accounts[4]
		const addressaCnI920 = accounts[4]
		const uintCUJvT9 = BigInt("817")
		const addressj68C3Vj = "0x0000000000000000000000000000000000000001"
		const uintPxnQPr = BigInt("1923")
		const addresscsvtbsV = accounts[3]
		const boolT47GE3D = await GAZ_ERC20Z9yzTub.approve.call(addressb45HjmO, uintdhQmmtB, {from: accounts[4]});
//		const boole3ljaix = await GAZ_ERC20Z9yzTub.approve.call(addressaCnI920, {from: accounts[4]});
//		const booldwxsYip = await GAZ_ERC20Z9yzTub.transfer.call(addressj68C3Vj, uintCUJvT9, {from: "0x0000000000000000000000000000000000000001"});
//		const boolw0MgjAv = await GAZ_ERC20Z9yzTub.transfer.call(addresscsvtbsV, uintPxnQPr, {from: accounts[1]});

		assert.equal(boolT47GE3D, true)
		await expect(GAZ_ERC20Z9yzTub.approve.call(addressaCnI920, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20Z9yzTub = await GAZ_ERC20.new({from: accounts[2]});
		const addressoXXruzP = accounts[2]
		const uintv7BLhKt = BigInt("1924")
		const addressBbgutmX = accounts[3]
//		const boolM5mu96 = await GAZ_ERC20Z9yzTub.approve.call(addressoXXruzP, {from: "0x0000000000000000000000000000000000000001"});
//		const boolw0MgjAv = await GAZ_ERC20Z9yzTub.transfer.call(addressBbgutmX, uintv7BLhKt, {from: accounts[1]});

		await expect(GAZ_ERC20Z9yzTub.approve.call(addressoXXruzP, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});
})