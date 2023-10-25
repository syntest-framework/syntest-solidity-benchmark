const BAE = artifacts.require("BAE");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('BAE', (accounts) => {
	it('test for BAE', async () => {
		const addressQ3wfbyp = accounts[2]
		const BAERnQLEbg = await BAE.new(addressQ3wfbyp, {from: accounts[1]});
		const uintWZCFeRZ = BigInt("2027")
		const uintSKngDdP = BigInt("444")
		const uintoyoOHNp = BigInt("2003")
		const uintqXEIQgl = BigInt("1523")
		const uintEjsezJh = BigInt("1486")
//		const uint256DxxyrM = await BAERnQLEbg.buy.call(uintWZCFeRZ, {from: accounts[0]});
//		const uint256JgnXoH6 = await BAERnQLEbg.setAuctionFee.call(uintSKngDdP, {from: accounts[2]});
//		const uint256YuRMFHx = await BAERnQLEbg.resetAuction.call(uintEjsezJh, uintqXEIQgl, uintoyoOHNp, {from: accounts[2]});

		await expect(BAERnQLEbg.buy.call(uintWZCFeRZ, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for BAE', async () => {
		const addresscnkUfo6 = accounts[3]
		const BAER05cOc4 = await BAE.new(addresscnkUfo6, {from: accounts[2]});
		const uintW642oq = BigInt("1162")
		const uinteFff7sF = BigInt("57")
		const uintDr2ZGqw = BigInt("48")
		const uintp03qQ6 = BigInt("559")
		const uintwhtYgg = BigInt("677")
		const uintHetKcK0 = BigInt("1245")
		const uintugtOUTC = BigInt("1129")
//		const uint256xq3hKfP = await BAER05cOc4.bid.call(uintW642oq, {from: accounts[3]});
//		const uint256yosDXVq = await BAER05cOc4.changePrintFee.call(uinteFff7sF, {from: accounts[4]});
//		const uint256csVayto = await BAER05cOc4.createAuction.call(uintHetKcK0, uintwhtYgg, uintp03qQ6, uintDr2ZGqw, {from: accounts[5]});
//		const uint256YHtUJXj = await BAER05cOc4.buy.call(uintugtOUTC, {from: accounts[2]});

		await expect(BAER05cOc4.bid.call(uintW642oq, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BAE', async () => {
		const addressustXhV0 = accounts[1]
		const BAEerBSje = await BAE.new(addressustXhV0, {from: accounts[4]});
		const uintsHz1zbW = BigInt("974")
		const uintouFIf8t = BigInt("1674")
		const uintL8clQtb = BigInt("1118")
		const uintM6AtiQm = BigInt("379")
		const uintcvm7DEq = BigInt("193")
		const uintLJiK1xR = BigInt("597")
		const uintJ8f8n7h = BigInt("556")
		const uintyhNpkLZ = BigInt("256")
		const uintyvo1EO6 = BigInt("693")
		const uintbuBVKP = BigInt("203")
		const uintHMR2rz8 = BigInt("572")
		const uintxQFhWg1 = BigInt("107")
//		const uint256T2SmNC = await BAEerBSje.createAuction.call(uintM6AtiQm, uintL8clQtb, uintouFIf8t, uintsHz1zbW, {from: accounts[3]});
//		const uint256VTfjOk = await BAEerBSje.createAuction.call(uintyhNpkLZ, uintJ8f8n7h, uintLJiK1xR, uintcvm7DEq, {from: accounts[0]});
//		const uint256c0dHIOW = await BAEerBSje.buy.call(uintyvo1EO6, {from: accounts[0]});
//		const uint256RI6bngh = await BAEerBSje.resetAuction.call(uintxQFhWg1, uintHMR2rz8, uintbuBVKP, {from: accounts[2]});

		await expect(BAEerBSje.createAuction.call(uintM6AtiQm, uintL8clQtb, uintouFIf8t, uintsHz1zbW, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BAE', async () => {
		const addressIVeJJo0 = accounts[5]
		const BAE2FLwke = await BAE.new(addressIVeJJo0, {from: accounts[1]});
		const uintaPqyGzG = BigInt("1006")
		const uintvWFhZrW = BigInt("354")
		const uintoejUEko = BigInt("1344")
		const uinture4InU = BigInt("342")
		const uintL3dNkfx = BigInt("1044")
		const uintngbJa9A = BigInt("956")
		const uintkAFutG9 = BigInt("132")
		const uintQlp65mD = BigInt("342")
//		const uint256KEltvY6 = await BAE2FLwke.setAuctionFee.call(uintaPqyGzG, {from: accounts[5]});
//		const uint256hp1WR4E = await BAE2FLwke.changePrintFee.call(uintvWFhZrW, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256c1SaaOV = await BAE2FLwke.setAuctionFee.call(uintoejUEko, {from: accounts[3]});
//		const uint2564A9Nbw = await BAE2FLwke.createAuction.call(uintkAFutG9, uintngbJa9A, uintL3dNkfx, uinture4InU, {from: accounts[2]});
//		const uint256d1zc8pf = await BAE2FLwke.setAuctionFee.call(uintQlp65mD, {from: accounts[1]});

		await expect(BAE2FLwke.setAuctionFee.call(uintaPqyGzG, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for BAE', async () => {
		const addressENJ57b = "0x0000000000000000000000000000000000000001"
		const BAEfRJLjPI = await BAE.new(addressENJ57b, {from: "0x0000000000000000000000000000000000000001"});
		const uintjCH8pn = BigInt("1148")
		const uintwR0bj6s = BigInt("1992")
		const uintqruMspr = BigInt("192")
		const uintMADHrLc = BigInt("1532")
		const uintj5w00Bx = BigInt("422")
		const uint8OtdT7 = BigInt("944")
		const uintoLePTNr = BigInt("71")
		const uintdOiUhUT = BigInt("1790")
		const uint256XKXcKbR = await BAEfRJLjPI.resetAuction.call(uintqruMspr, uintwR0bj6s, uintjCH8pn, {from: accounts[5]});
		const uint256ukCZzNq = await BAEfRJLjPI.createAuction.call(uintoLePTNr, uint8OtdT7, uintj5w00Bx, uintMADHrLc, {from: accounts[0]});
		const uint256rIedmh = await BAEfRJLjPI.setAuctionFee.call(uintdOiUhUT, {from: accounts[3]});
	});

	it('test for BAE', async () => {
		const addresswUrPod = accounts[4]
		const BAEEEKIlX = await BAE.new(addresswUrPod, {from: accounts[0]});
		const uintTgTR5n = BigInt("1739")
		const uintfMKpjYk = BigInt("1048")
		const uintkw25nyi = BigInt("833")
		const uintqKSgmjs = BigInt("1136")
		const uintfVSkIcv = BigInt("1818")
		const uintSrtoXYy = BigInt("288")
		const uintkwB8V5Y = BigInt("1655")
		const uintwiTAMv = BigInt("2037")
//		const uint256gqSczKy = await BAEEEKIlX.resetAuction.call(uintkw25nyi, uintfMKpjYk, uintTgTR5n, {from: accounts[4]});
//		const uint256IK97FZn = await BAEEEKIlX.createAuction.call(uintkwB8V5Y, uintSrtoXYy, uintfVSkIcv, uintqKSgmjs, {from: accounts[3]});
//		const uint256VzPmGIp = await BAEEEKIlX.buy.call(uintwiTAMv, {from: accounts[2]});

		await expect(BAEEEKIlX.resetAuction.call(uintkw25nyi, uintfMKpjYk, uintTgTR5n, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for BAE', async () => {
		const addressesnfyC0 = accounts[3]
		const BAER05cOc4 = await BAE.new(addressesnfyC0, {from: accounts[2]});
		const uinth42U5n = BigInt("1152")
		const uintmOJEG5s = BigInt("1162")
		const uintqhV9452 = BigInt("1121")
		const uintv9MbcFM = BigInt("581")
		const uintjmu0dPU = BigInt("769")
		const uintm03zO0b = BigInt("220")
		const uintbOgfp5L = BigInt("762")
		const uintlWE8zAx = BigInt("1129")
//		const uint256uPl6wCA = await BAER05cOc4.concludeAuction.call(uinth42U5n, {from: accounts[0]});
//		const uint256xq3hKfP = await BAER05cOc4.bid.call(uintmOJEG5s, {from: accounts[3]});
//		const uint256cb31TAD = await BAER05cOc4.bid.call(uintqhV9452, {from: accounts[2]});
//		const uint256XnjzYru = await BAER05cOc4.createAuction.call(uintbOgfp5L, uintm03zO0b, uintjmu0dPU, uintv9MbcFM, {from: accounts[0]});
//		const uint256YHtUJXj = await BAER05cOc4.buy.call(uintlWE8zAx, {from: accounts[2]});

		await expect(BAER05cOc4.concludeAuction.call(uinth42U5n, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})