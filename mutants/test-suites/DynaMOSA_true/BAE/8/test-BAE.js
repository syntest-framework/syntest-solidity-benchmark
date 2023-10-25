const BAE = artifacts.require("BAE");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('BAE', (accounts) => {
	it('test for BAE', async () => {
		const addressCDfipVC = accounts[2]
		const BAEvHdAWqw = await BAE.new(addressCDfipVC, {from: accounts[1]});
		const uintiybyhRT = BigInt("1197")
		const uintQ9pvAg = BigInt("556")
		const uintyWFjCUf = BigInt("360")
		const uintFpD1I2m = BigInt("529")
		const uint7rVnXt = BigInt("1454")
		const uintHWKVaYD = BigInt("221")
		const uintj8XUmZN = BigInt("118")
		const uintfTnhIuO = BigInt("461")
		const uintv2DM1a = BigInt("851")
		const uintM4reztT = BigInt("1611")
		const uintsSljT2E = BigInt("839")
//		const uint256FeY7WU = await BAEvHdAWqw.setAuctionFee.call(uintiybyhRT, {from: accounts[1]});
//		const uint256MkCpfsl = await BAEvHdAWqw.createAuction.call(uint7rVnXt, uintFpD1I2m, uintyWFjCUf, uintQ9pvAg, {from: accounts[4]});
//		const uint256vJSZXlV = await BAEvHdAWqw.bid.call(uintHWKVaYD, {from: accounts[0]});
//		const uint256lniC6Hn = await BAEvHdAWqw.buy.call(uintj8XUmZN, {from: accounts[1]});
//		const uint256K3O9Tbm = await BAEvHdAWqw.resetAuction.call(uintM4reztT, uintv2DM1a, uintfTnhIuO, {from: accounts[0]});
//		const uint256jdXrOc2 = await BAEvHdAWqw.concludeAuction.call(uintsSljT2E, {from: accounts[4]});

		await expect(BAEvHdAWqw.setAuctionFee.call(uintiybyhRT, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for BAE', async () => {
		const addressqnOBhyD = accounts[4]
		const BAEonNVQig = await BAE.new(addressqnOBhyD, {from: accounts[0]});
		const uintppCzRp5 = BigInt("1829")
		const uinttlN1L6 = BigInt("1913")
		const uintgAz2JKE = BigInt("415")
		const uintbfQYzop = BigInt("332")
		const uintdpFP8KM = BigInt("718")
		const uintyr1JYAR = BigInt("1554")
		const uintkYuyGST = BigInt("225")
		const uintvEnJ5P = BigInt("976")
		const uintaMPC3xH = BigInt("2046")
//		const uint256XFMsSn5 = await BAEonNVQig.bid.call(uintppCzRp5, {from: accounts[5]});
//		const uint256hrxdJvP = await BAEonNVQig.changePrintFee.call(uinttlN1L6, {from: accounts[5]});
//		const uint256xUpShlE = await BAEonNVQig.concludeAuction.call(uintgAz2JKE, {from: accounts[3]});
//		const uint256SVA2IpL = await BAEonNVQig.bid.call(uintbfQYzop, {from: accounts[0]});
//		const uint256EqZYXcs = await BAEonNVQig.setAuctionFee.call(uintdpFP8KM, {from: accounts[3]});
//		const uint256NtWvXeS = await BAEonNVQig.createAuction.call(uintaMPC3xH, uintvEnJ5P, uintkYuyGST, uintyr1JYAR, {from: "0x0000000000000000000000000000000000000001"});

		await expect(BAEonNVQig.bid.call(uintppCzRp5, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for BAE', async () => {
		const addressQ5RL8Xm = accounts[0]
		const BAEM158FfP = await BAE.new(addressQ5RL8Xm, {from: accounts[4]});
		const uintyGYXid = BigInt("575")
		const uintlItCvU6 = BigInt("1340")
		const uintOxW3HFw = BigInt("2006")
		const uintvHGQbVJ = BigInt("782")
		const uintVx0j9t = BigInt("495")
		const uintoHDqdy = BigInt("149")
		const uintAQYXz8 = BigInt("806")
//		const uint256tXbslPZ = await BAEM158FfP.resetAuction.call(uintOxW3HFw, uintlItCvU6, uintyGYXid, {from: accounts[4]});
//		const uint256pDja8W2 = await BAEM158FfP.buy.call(uintvHGQbVJ, {from: accounts[4]});
//		const uint256Zdjswx8 = await BAEM158FfP.buy.call(uintVx0j9t, {from: accounts[4]});
//		const uint256CaenNBp = await BAEM158FfP.concludeAuction.call(uintoHDqdy, {from: accounts[1]});
//		const uint256GzgdBDi = await BAEM158FfP.setAuctionFee.call(uintAQYXz8, {from: accounts[4]});

		await expect(BAEM158FfP.resetAuction.call(uintOxW3HFw, uintlItCvU6, uintyGYXid, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for BAE', async () => {
		const addressqPzomxw = accounts[2]
		const BAEHbHRpNG = await BAE.new(addressqPzomxw, {from: accounts[1]});
		const uintLB00Cz = BigInt("58")
		const uintzZU41kp = BigInt("1258")
		const uintP8O8hA = BigInt("1592")
		const uintqvTxTyy = BigInt("61")
		const uintFHUco6b = BigInt("636")
		const uintBE0oESY = BigInt("1312")
		const uintcR1qpz4 = BigInt("1359")
		const uintVSUcGmW = BigInt("1390")
		const uinti1RCv1k = BigInt("630")
		const uintnmfZ58F = BigInt("47")
//		const uint256eEpRu2l = await BAEHbHRpNG.buy.call(uintLB00Cz, {from: accounts[2]});
//		const uint256wrNUiZr = await BAEHbHRpNG.setAuctionFee.call(uintzZU41kp, {from: accounts[2]});
//		const uint256bIVr33 = await BAEHbHRpNG.resetAuction.call(uintFHUco6b, uintqvTxTyy, uintP8O8hA, {from: accounts[2]});
//		const uint256SCRy1w6 = await BAEHbHRpNG.createAuction.call(uinti1RCv1k, uintVSUcGmW, uintcR1qpz4, uintBE0oESY, {from: accounts[4]});
//		const uint256gRdKmS = await BAEHbHRpNG.concludeAuction.call(uintnmfZ58F, {from: accounts[3]});

		await expect(BAEHbHRpNG.buy.call(uintLB00Cz, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for BAE', async () => {
		const addressmPeLkXg = accounts[3]
		const BAEWZGyu2H = await BAE.new(addressmPeLkXg, {from: "0x0000000000000000000000000000000000000001"});
		const uintS4fk3e = BigInt("622")
		const uintmf8IcM3 = BigInt("391")
		const uintUgMjLzJ = BigInt("166")
		const uintAEdjltz = BigInt("709")
		const uintuXJcHpi = BigInt("1072")
		const uintAe6pzMg = BigInt("1990")
		const uintuUSjPbZ = BigInt("1229")
		const uintgaQJ5FP = BigInt("644")
		const uintGrEFAlt = BigInt("1689")
		const uintGbDNVrJ = BigInt("1728")
		const uint256fDwJuf = await BAEWZGyu2H.createAuction.call(uintAEdjltz, uintUgMjLzJ, uintmf8IcM3, uintS4fk3e, {from: accounts[5]});
		const uint256iNKJuBl = await BAEWZGyu2H.bid.call(uintuXJcHpi, {from: accounts[4]});
		const uint256bIBTbPh = await BAEWZGyu2H.changePrintFee.call(uintAe6pzMg, {from: accounts[0]});
		const uint256dDir1NE = await BAEWZGyu2H.createAuction.call(uintGbDNVrJ, uintGrEFAlt, uintgaQJ5FP, uintuUSjPbZ, {from: accounts[1]});
	});

	it('test for BAE', async () => {
		const addressu042ILP = accounts[0]
		const BAEt9IRXsg = await BAE.new(addressu042ILP, {from: accounts[3]});
		const uintjVohnD1 = BigInt("1737")
		const uintgPpVSNh = BigInt("186")
		const uinthpXAbBr = BigInt("353")
		const uintSSfvteI = BigInt("18")
		const uintldK7ONs = BigInt("299")
		const uintTtX446E = BigInt("366")
		const uinttbohOgV = BigInt("23")
		const uintqNKnjqz = BigInt("1715")
		const uintviXdUHF = BigInt("141")
		const uintuHkyegc = BigInt("255")
		const uintoP1oezH = BigInt("160")
		const uintzVA3oa5 = BigInt("947")
		const uint5dCBdH = BigInt("1793")
		const uintk2yKmvC = BigInt("847")
		const uintnk5iBaw = BigInt("1857")
		const uintCIOs2qz = BigInt("1859")
		const uinthu0CdX = BigInt("1789")
//		const uint256UJtMlTH = await BAEt9IRXsg.createAuction.call(uintSSfvteI, uinthpXAbBr, uintgPpVSNh, uintjVohnD1, {from: accounts[0]});
//		const uint256L0tF4dt = await BAEt9IRXsg.createAuction.call(uintqNKnjqz, uinttbohOgV, uintTtX446E, uintldK7ONs, {from: accounts[1]});
//		const uint256yUmmNeF = await BAEt9IRXsg.buy.call(uintviXdUHF, {from: accounts[4]});
//		const uint256C5hBWOK = await BAEt9IRXsg.createAuction.call(uint5dCBdH, uintzVA3oa5, uintoP1oezH, uintuHkyegc, {from: accounts[1]});
//		const uint256SV2LX6j = await BAEt9IRXsg.createAuction.call(uinthu0CdX, uintCIOs2qz, uintnk5iBaw, uintk2yKmvC, {from: accounts[3]});

		await expect(BAEt9IRXsg.createAuction.call(uintSSfvteI, uinthpXAbBr, uintgPpVSNh, uintjVohnD1, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for BAE', async () => {
		const addressIfiXbH = accounts[3]
		const BAEPmlzJdl = await BAE.new(addressIfiXbH, {from: accounts[4]});
		const uintF3SdB5 = BigInt("1144")
		const uinthuHfxY = BigInt("335")
		const uintliGsIXa = BigInt("1153")
		const uintEhuNtCT = BigInt("923")
		const uintJe8NBBP = BigInt("1056")
		const uintShpPwiU = BigInt("23")
//		const uint256Y3XIcVW = await BAEPmlzJdl.concludeAuction.call(uintF3SdB5, {from: accounts[4]});
//		const uint256GJu30ya = await BAEPmlzJdl.buy.call(uinthuHfxY, {from: accounts[0]});
//		const uint256dGzRhI = await BAEPmlzJdl.createAuction.call(uintShpPwiU, uintJe8NBBP, uintEhuNtCT, uintliGsIXa, {from: accounts[1]});

		await expect(BAEPmlzJdl.concludeAuction.call(uintF3SdB5, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})