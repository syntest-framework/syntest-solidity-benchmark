const GFC = artifacts.require("GFC");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('GFC', (accounts) => {
	it('test for GFC', async () => {
		const uinteE5R8Sy = BigInt("1090")
		const stringfd2Lpz2 = "JZXTHPqhSArReEqBV4enAdBJLnTN1jjgQt7oatQxCXz7Ze6xEe0z7aVFSN1GnOt2leP"
		const stringyDNl20i = "4WL4e7vrDStKUQW8HN2KJ3d7HdJ6Ge3PV"
		const GFCBfXEjth = await GFC.new(uinteE5R8Sy, stringfd2Lpz2, stringyDNl20i, {from: accounts[2]});
		const byteQRfzyT4 = "0x06161a1f1505180f1f1b0c1807021c1b1807191e12030e"
		const uintClrlYek = BigInt("1731")
		const addressvAiFuim = accounts[5]
		const uintJLIJpGL = BigInt("965")
		const addresso6c6hMk = accounts[4]
		const addressgXub4Fn = accounts[1]
		const byteuNY6X4 = "0x15030e04090b1e0b0d1c191a08051b1d0b0c"
		const uintoSB6JyR = BigInt("192")
		const addresslqxGf44 = accounts[3]
//		const boolWyEuqUS = await GFCBfXEjth.approveAndCall.call(addressvAiFuim, uintClrlYek, byteQRfzyT4, {from: accounts[4]});
//		const boolNtO0rf = await GFCBfXEjth.transferFrom.call(addressgXub4Fn, addresso6c6hMk, uintJLIJpGL, {from: accounts[1]});
//		const boolIdYBqoe = await GFCBfXEjth.approveAndCall.call(addresslqxGf44, uintoSB6JyR, byteuNY6X4, {from: accounts[4]});

		await expect(GFCBfXEjth.approveAndCall.call(addressvAiFuim, uintClrlYek, byteQRfzyT4, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for GFC', async () => {
		const uintKAracg = BigInt("897")
		const stringwxWJcA6 = "eadMlTXPm0yUMkyEilHqPMr2WL5VrmzNSqeGFaXxpd2jTl4RmTt9H0zpfCE0GYs9Rjz7u9I1VYDDfbj3Lx8Ljo"
		const stringebqrDIw = "wSl"
		const GFCnsIM1Ag = await GFC.new(uintKAracg, stringwxWJcA6, stringebqrDIw, {from: accounts[3]});
		const uintdoyUykq = BigInt("1265")
		const uintJ9gDNn = BigInt("1410")
		const addressI4n2qq = accounts[2]
		const uintmlP577Q = BigInt("1495")
		const addressl73uNdb = accounts[5]
		const addressQtB3ZQV = accounts[4]
		const uintQKQagq = BigInt("861")
		const addressiFOTKQo = accounts[1]
		const addressuXTmHFR = accounts[4]
//		const boolWptALPN = await GFCnsIM1Ag.burn.call(uintdoyUykq, {from: accounts[4]});
//		const boole60xzHC = await GFCnsIM1Ag.burnFrom.call(addressI4n2qq, uintJ9gDNn, {from: accounts[2]});
//		const booltNrXM3B = await GFCnsIM1Ag.transferFrom.call(addressQtB3ZQV, addressl73uNdb, uintmlP577Q, {from: accounts[3]});
//		const boolwG0gky = await GFCnsIM1Ag.transferFrom.call(addressuXTmHFR, addressiFOTKQo, uintQKQagq, {from: accounts[1]});

		await expect(GFCnsIM1Ag.burn.call(uintdoyUykq, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for GFC', async () => {
		const uintgd1OLXR = BigInt("35")
		const stringSweljFx = "Udau6HKgIQwwfCmjOs36oJrkHp8OvG0YU6ADr6SsO9K1dXCVMLNJ"
		const stringKrx8lx = "IJFyi0L1Ae"
		const GFCjRnJeag = await GFC.new(uintgd1OLXR, stringSweljFx, stringKrx8lx, {from: accounts[4]});
		const uintYyHnhjl = BigInt("1407")
		const addressDIdqPTX = accounts[4]
		const addressQ882f64 = accounts[2]
		const byteS1Vwd6y = "0x17190c130c"
		const uintJEaPdQ2 = BigInt("1251")
		const addressZLcBnhJ = accounts[1]
//		const boolOTFMsya = await GFCjRnJeag.transferFrom.call(addressQ882f64, addressDIdqPTX, uintYyHnhjl, {from: accounts[3]});
//		const boolxAZN9aZ = await GFCjRnJeag.approveAndCall.call(addressZLcBnhJ, uintJEaPdQ2, byteS1Vwd6y, {from: accounts[5]});

		await expect(GFCjRnJeag.transferFrom.call(addressQ882f64, addressDIdqPTX, uintYyHnhjl, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GFC', async () => {
		const uintIntA2OX = BigInt("965")
		const stringn0DK5Xi = "ii2eVEeGkyHk52KNRuuhmhyyUmLEEOhSZM42NCSqHVdOTsIAuUJyCiU0yUbrfudU1kmd3aHK"
		const stringLoBYhNM = "JyCXsRcYrW05BQWvSGLTM1SfenQDHK5yyreIQnzKLWy1G7gNKDOlhe"
		const GFCN3yy9pz = await GFC.new(uintIntA2OX, stringn0DK5Xi, stringLoBYhNM, {from: accounts[1]});
		const uintkM6vbxJ = BigInt("2025")
		const addressqN7JcZM = accounts[2]
		const uintkON9dJm = BigInt("383")
		const addressWJAnT90 = accounts[5]
//		const boolEgzV2G = await GFCN3yy9pz.transfer.call(addressqN7JcZM, uintkM6vbxJ, {from: "0x0000000000000000000000000000000000000001"});
//		const booldxWog59 = await GFCN3yy9pz.burnFrom.call(addressWJAnT90, uintkON9dJm, {from: accounts[4]});

		await expect(GFCN3yy9pz.transfer.call(addressqN7JcZM, uintkM6vbxJ, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for GFC', async () => {
		const uintXbxxKL7 = BigInt("492")
		const stringErCMHdz = "F1chFH9jEYcJRvXptiWD53r8bq04WE743Wp0fxfxayMxG8vOR57bviu82jo16KjRb93b3pqPt19LZCuXklsR2d7"
		const string3AOKLW = "rU"
		const GFCA0Ai8BY = await GFC.new(uintXbxxKL7, stringErCMHdz, string3AOKLW, {from: accounts[4]});
		const uintuxV9dHn = BigInt("521")
		const addressgbxrAZH = accounts[0]
		const uint2Lj0wd = BigInt("543")
		const uintWZxNFTQ = BigInt("449")
		const addressNLalIk = accounts[2]
//		const boolwITD9fw = await GFCA0Ai8BY.burnFrom.call(addressgbxrAZH, uintuxV9dHn, {from: accounts[3]});
//		const boolWKtEdxM = await GFCA0Ai8BY.burn.call(uint2Lj0wd, {from: accounts[2]});
//		const boolpqlvRWe = await GFCA0Ai8BY.burnFrom.call(addressNLalIk, uintWZxNFTQ, {from: accounts[3]});

		await expect(GFCA0Ai8BY.burnFrom.call(addressgbxrAZH, uintuxV9dHn, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GFC', async () => {
		const uintcXSsHzL = BigInt("1664")
		const stringghrfn6j = "7QCkGuFFhxu55OHe26F2DiQcbm8SPrKtVhXdphyJJNVxEXzpWqQa6inc3iVGc"
		const stringaV1IYkg = "FqnCODEIwBmQEW5zRuXgKTh2NfGIyo3oOe0cdKLQLEFY3FAC6mP469I9YkvsiEVxegKSFswauAPW"
		const GFCm5FLvTP = await GFC.new(uintcXSsHzL, stringghrfn6j, stringaV1IYkg, {from: "0x0000000000000000000000000000000000000001"});
		const byteVLib8Hr = "0x10011e0b011c1a1f151c0118191e0503061d131b1f1a0a0f040f060d0d10"
		const uintOdY1yh4 = BigInt("1808")
		const addressf9yz0rl = "0x0000000000000000000000000000000000000001"
		const uintyttBrg7 = BigInt("120")
		const byteJU9blml = "0x0e001c0b01011a1a"
		const uintBRBtMdQ = BigInt("1053")
		const addressbGOUTqM = accounts[1]
		const boolJ1J3VJg = await GFCm5FLvTP.approveAndCall.call(addressf9yz0rl, uintOdY1yh4, byteVLib8Hr, {from: accounts[4]});
		const boolKyXcGpo = await GFCm5FLvTP.burn.call(uintyttBrg7, {from: accounts[0]});
		const boolMXDfjB9 = await GFCm5FLvTP.approveAndCall.call(addressbGOUTqM, uintBRBtMdQ, byteJU9blml, {from: accounts[4]});
	});
})