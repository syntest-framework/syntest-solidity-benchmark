const BAE = artifacts.require("BAE");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('BAE', (accounts) => {
	it('test for BAE', async () => {
		const addresseu6bpSs = accounts[0]
		const BAEWpvHjj = await BAE.new(addresseu6bpSs, {from: accounts[1]});
		const uintNNWHFD = BigInt("62")
		const uintWZHYRY = BigInt("2032")
		const uintn12cJuU = BigInt("65")
		const uintvASeKNp = BigInt("1983")
		const uintH5K90vU = BigInt("1443")
		const uintNHyVNj5 = BigInt("1528")
		const uintIYtOEU0 = BigInt("155")
		const uintOKGRIB7 = BigInt("475")
		const uintNbG5QoR = BigInt("344")
		const uintKzWxe94 = BigInt("1279")
		const uintFny6Uty = BigInt("429")
//		const uint256lRMBkU = await BAEWpvHjj.createAuction.call(uintvASeKNp, uintn12cJuU, uintWZHYRY, uintNNWHFD, {from: accounts[2]});
//		const uint2565WLBs8 = await BAEWpvHjj.createAuction.call(uintOKGRIB7, uintIYtOEU0, uintNHyVNj5, uintH5K90vU, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256Q3CtgSy = await BAEWpvHjj.buy.call(uintNbG5QoR, {from: accounts[4]});
//		const uint256PmuPuUW = await BAEWpvHjj.concludeAuction.call(uintKzWxe94, {from: accounts[0]});
//		const uint256UpFD4ga = await BAEWpvHjj.setAuctionFee.call(uintFny6Uty, {from: "0x0000000000000000000000000000000000000001"});

		await expect(BAEWpvHjj.createAuction.call(uintvASeKNp, uintn12cJuU, uintWZHYRY, uintNNWHFD, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for BAE', async () => {
		const addressOAsW9o3 = accounts[0]
		const BAEzUAOArr = await BAE.new(addressOAsW9o3, {from: accounts[3]});
		const uintRFd5fbE = BigInt("72")
		const uintnT2Yhla = BigInt("470")
//		const uint256fJuJtbX = await BAEzUAOArr.buy.call(uintRFd5fbE, {from: accounts[2]});
//		const uint256NyCAjWB = await BAEzUAOArr.concludeAuction.call(uintnT2Yhla, {from: accounts[0]});

		await expect(BAEzUAOArr.buy.call(uintRFd5fbE, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for BAE', async () => {
		const addressplMIUos = accounts[0]
		const BAESU6UH11 = await BAE.new(addressplMIUos, {from: accounts[4]});
		const uintybnmuT7 = BigInt("1875")
		const uintvpWacYc = BigInt("309")
		const uintDPHJplz = BigInt("909")
		const uintXXBbYl1 = BigInt("1878")
		const uintEDQfI9g = BigInt("108")
		const uintSZeTIYZ = BigInt("1640")
		const uintbcLpsB8 = BigInt("1615")
		const uintNDUPTFJ = BigInt("820")
		const uintGm6Aqmm = BigInt("406")
		const uintL5PW7fr = BigInt("281")
		const uintuTlZAp = BigInt("1028")
		const uintpGdTx3C = BigInt("81")
//		const uint256bww2GzZ = await BAESU6UH11.resetAuction.call(uintDPHJplz, uintvpWacYc, uintybnmuT7, {from: accounts[2]});
//		const uint256qOxXldc = await BAESU6UH11.resetAuction.call(uintSZeTIYZ, uintEDQfI9g, uintXXBbYl1, {from: accounts[4]});
//		const uint256al4wCe = await BAESU6UH11.concludeAuction.call(uintbcLpsB8, {from: accounts[3]});
//		const uint256L26XD7u = await BAESU6UH11.buy.call(uintNDUPTFJ, {from: accounts[0]});
//		const uint256PO0kRn3 = await BAESU6UH11.resetAuction.call(uintuTlZAp, uintL5PW7fr, uintGm6Aqmm, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256FLsVrTM = await BAESU6UH11.buy.call(uintpGdTx3C, {from: accounts[1]});

		await expect(BAESU6UH11.resetAuction.call(uintDPHJplz, uintvpWacYc, uintybnmuT7, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for BAE', async () => {
		const addressoAK2Bs = accounts[3]
		const BAECCL21D7 = await BAE.new(addressoAK2Bs, {from: accounts[1]});
		const uinta7WA1dY = BigInt("2002")
		const uintEavmfVd = BigInt("1105")
		const uintxocG77k = BigInt("466")
		const uintZeadTUm = BigInt("224")
		const uintCr0IHgq = BigInt("750")
		const uintQezgqzo = BigInt("1259")
//		const uint256ME3kQbg = await BAECCL21D7.concludeAuction.call(uinta7WA1dY, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256Ca3vYiv = await BAECCL21D7.buy.call(uintEavmfVd, {from: accounts[3]});
//		const uint256HQaAgbs = await BAECCL21D7.setAuctionFee.call(uintxocG77k, {from: accounts[5]});
//		const uint256RxiRLzs = await BAECCL21D7.resetAuction.call(uintQezgqzo, uintCr0IHgq, uintZeadTUm, {from: accounts[5]});

		await expect(BAECCL21D7.concludeAuction.call(uinta7WA1dY, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for BAE', async () => {
		const addressFxPDGKG = "0x0000000000000000000000000000000000000001"
		const BAEJrA7HLU = await BAE.new(addressFxPDGKG, {from: accounts[5]});
		const uintVyIAjfz = BigInt("1644")
		const uintN566WL = BigInt("1392")
		const uintwjQjsy1 = BigInt("122")
//		const uint256r93TU5X = await BAEJrA7HLU.setAuctionFee.call(uintVyIAjfz, {from: accounts[3]});
//		const uint256q44whve = await BAEJrA7HLU.changePrintFee.call(uintN566WL, {from: accounts[3]});
//		const uint256bcQ8xFe = await BAEJrA7HLU.bid.call(uintwjQjsy1, {from: accounts[4]});

		await expect(BAEJrA7HLU.setAuctionFee.call(uintVyIAjfz, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BAE', async () => {
		const addressMrOeVN5 = accounts[4]
		const BAEBVe64hC = await BAE.new(addressMrOeVN5, {from: accounts[3]});
		const uintCS8waa = BigInt("1412")
		const uintI6zfk97 = BigInt("1083")
		const uintUScgFX3 = BigInt("1876")
//		const uint256OYWjEpO = await BAEBVe64hC.bid.call(uintCS8waa, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256GYrG6Aa = await BAEBVe64hC.bid.call(uintI6zfk97, {from: accounts[3]});
//		const uint256I5yqJKA = await BAEBVe64hC.changePrintFee.call(uintUScgFX3, {from: accounts[3]});

		await expect(BAEBVe64hC.bid.call(uintCS8waa, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for BAE', async () => {
		const address0M8Jk0 = accounts[5]
		const BAE8Z2Hs6 = await BAE.new(address0M8Jk0, {from: "0x0000000000000000000000000000000000000001"});
		const uintMOd9Yld = BigInt("1946")
		const uintWL4r2C = BigInt("846")
		const uintq39deGp = BigInt("617")
		const uintFbRg3Ml = BigInt("1920")
		const uintAhQb2Qs = BigInt("1324")
		const uintOVnVa6a = BigInt("1511")
		const uintlgtNWL = BigInt("1388")
		const uintQrwN70k = BigInt("1718")
		const uintwcjje0d = BigInt("151")
		const uintixeWixE = BigInt("1711")
		const uintlcDNVSi = BigInt("256")
		const uint256ZAyJw08 = await BAE8Z2Hs6.resetAuction.call(uintq39deGp, uintWL4r2C, uintMOd9Yld, {from: accounts[0]});
		const uint256bchC63S = await BAE8Z2Hs6.bid.call(uintFbRg3Ml, {from: accounts[1]});
		const uint256uJRwFCf = await BAE8Z2Hs6.createAuction.call(uintQrwN70k, uintlgtNWL, uintOVnVa6a, uintAhQb2Qs, {from: accounts[4]});
		const uint256ZPe3v1R = await BAE8Z2Hs6.resetAuction.call(uintlcDNVSi, uintixeWixE, uintwcjje0d, {from: accounts[3]});
	});
})