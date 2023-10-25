const BAE = artifacts.require("BAE");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('BAE', (accounts) => {
	it('test for BAE', async () => {
		const addressFCOt9Uo = accounts[2]
		const BAEKQhPne = await BAE.new(addressFCOt9Uo, {from: accounts[4]});
		const uintaoAeJ4H = BigInt("356")
		const uintpaBEJ71 = BigInt("1577")
		const uintTys9V8R = BigInt("101")
		const uintn4UXrlO = BigInt("897")
		const uintl0SHaX3 = BigInt("1837")
		const uintj5rBvyH = BigInt("1512")
		const uintyINRKFL = BigInt("376")
		const uintr0bD20f = BigInt("1365")
		const uintkXBsIF = BigInt("1507")
		const uintUsYiSV6 = BigInt("556")
//		const uint256jx2YMnL = await BAEKQhPne.createAuction.call(uintn4UXrlO, uintTys9V8R, uintpaBEJ71, uintaoAeJ4H, {from: accounts[3]});
//		const uint256HYkPjhC = await BAEKQhPne.changePrintFee.call(uintl0SHaX3, {from: accounts[4]});
//		const uint256t346cji = await BAEKQhPne.resetAuction.call(uintr0bD20f, uintyINRKFL, uintj5rBvyH, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256FNqbzgi = await BAEKQhPne.changePrintFee.call(uintkXBsIF, {from: accounts[3]});
//		const uint256U1XXIKx = await BAEKQhPne.setAuctionFee.call(uintUsYiSV6, {from: accounts[3]});

		await expect(BAEKQhPne.createAuction.call(uintn4UXrlO, uintTys9V8R, uintpaBEJ71, uintaoAeJ4H, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BAE', async () => {
		const addressOb4Nny4 = accounts[4]
		const BAEGAYt3s = await BAE.new(addressOb4Nny4, {from: accounts[1]});
		const uintMLEyOxu = BigInt("991")
		const uintjCDVizX = BigInt("526")
		const uintXik7gID = BigInt("1126")
		const uintm1NhbNi = BigInt("39")
		const uintU52WwRy = BigInt("699")
		const uintlVxM8Lz = BigInt("930")
		const uintKO1zvEH = BigInt("2013")
		const uintB3HIf1k = BigInt("11")
		const uintVZrnpFO = BigInt("502")
		const uintS1VAoSj = BigInt("641")
//		const uint256AOKB7Rs = await BAEGAYt3s.resetAuction.call(uintXik7gID, uintjCDVizX, uintMLEyOxu, {from: accounts[3]});
//		const uint256mkRDcum = await BAEGAYt3s.resetAuction.call(uintlVxM8Lz, uintU52WwRy, uintm1NhbNi, {from: accounts[5]});
//		const uint256yaC5vvq = await BAEGAYt3s.resetAuction.call(uintVZrnpFO, uintB3HIf1k, uintKO1zvEH, {from: accounts[0]});
//		const uint256jgQlj7i = await BAEGAYt3s.buy.call(uintS1VAoSj, {from: accounts[3]});

		await expect(BAEGAYt3s.resetAuction.call(uintXik7gID, uintjCDVizX, uintMLEyOxu, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BAE', async () => {
		const addressza1l59o = "0x0000000000000000000000000000000000000001"
		const BAEVOIfmCB = await BAE.new(addressza1l59o, {from: accounts[0]});
		const uintMw16at = BigInt("1560")
		const uinttXKnw1C = BigInt("974")
		const uintgpUzbf7 = BigInt("1617")
		const uintCtZFBg7 = BigInt("1775")
		const uintCjT8u8 = BigInt("867")
		const uintzWdBNGS = BigInt("1513")
		const uintBjBOTOe = BigInt("39")
//		const uint256sbbpyRo = await BAEVOIfmCB.setAuctionFee.call(uintMw16at, {from: accounts[1]});
//		const uint256nbRoaj = await BAEVOIfmCB.bid.call(uinttXKnw1C, {from: accounts[0]});
//		const uint256o6Furbj = await BAEVOIfmCB.resetAuction.call(uintCjT8u8, uintCtZFBg7, uintgpUzbf7, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256Xe3Kqfy = await BAEVOIfmCB.bid.call(uintzWdBNGS, {from: accounts[2]});
//		const uint256VhYqodt = await BAEVOIfmCB.buy.call(uintBjBOTOe, {from: accounts[3]});

		await expect(BAEVOIfmCB.setAuctionFee.call(uintMw16at, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for BAE', async () => {
		const addresshHOgScq = accounts[4]
		const BAEK3fam7m = await BAE.new(addresshHOgScq, {from: accounts[3]});
		const uintQGqjoMC = BigInt("1379")
		const uintHrc2Omu = BigInt("1081")
		const uintoC6zdI9 = BigInt("115")
		const uintSDZv8xj = BigInt("1075")
//		const uint256maXODAp = await BAEK3fam7m.concludeAuction.call(uintQGqjoMC, {from: accounts[1]});
//		const uint256aX9omL8 = await BAEK3fam7m.buy.call(uintHrc2Omu, {from: accounts[1]});
//		const uint256bVRE3g3 = await BAEK3fam7m.setAuctionFee.call(uintoC6zdI9, {from: accounts[0]});
//		const uint2569FcMHo = await BAEK3fam7m.buy.call(uintSDZv8xj, {from: accounts[4]});

		await expect(BAEK3fam7m.concludeAuction.call(uintQGqjoMC, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for BAE', async () => {
		const addressiL1UXIn = accounts[2]
		const BAECjxLOa2 = await BAE.new(addressiL1UXIn, {from: accounts[0]});
		const uintqG66l2J = BigInt("2006")
		const uintOCZ9HFv = BigInt("1556")
		const uintsxpCbT4 = BigInt("308")
		const uintT0lnL3 = BigInt("1715")
//		const uint256R50zPYK = await BAECjxLOa2.bid.call(uintqG66l2J, {from: accounts[4]});
//		const uint256u2P4WVg = await BAECjxLOa2.resetAuction.call(uintT0lnL3, uintsxpCbT4, uintOCZ9HFv, {from: "0x0000000000000000000000000000000000000001"});

		await expect(BAECjxLOa2.bid.call(uintqG66l2J, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for BAE', async () => {
		const addressEGEdUPb = accounts[2]
		const BAECjxLOa2 = await BAE.new(addressEGEdUPb, {from: accounts[0]});
		const uintYe214DL = BigInt("1422")
		const uintTULbd5K = BigInt("1556")
		const uintPImPz6O = BigInt("1607")
		const uintCPfwwD = BigInt("1715")
		const uintTjKCF0C = BigInt("647")
		const uint4zrbCM = BigInt("1398")
//		const uint256YAqsRt = await BAECjxLOa2.buy.call(uintYe214DL, {from: accounts[4]});
//		const uint256u2P4WVg = await BAECjxLOa2.resetAuction.call(uintCPfwwD, uintPImPz6O, uintTULbd5K, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256ulU0hSt = await BAECjxLOa2.setAuctionFee.call(uintTjKCF0C, {from: accounts[3]});
//		const uint256oeNzrP4 = await BAECjxLOa2.bid.call(uint4zrbCM, {from: accounts[1]});

		await expect(BAECjxLOa2.buy.call(uintYe214DL, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for BAE', async () => {
		const addressnc6IOMc = accounts[0]
		const BAEIEqevb3 = await BAE.new(addressnc6IOMc, {from: "0x0000000000000000000000000000000000000001"});
		const uintblIhcdC = BigInt("1325")
		const uintMYAMVg8 = BigInt("1003")
		const uintESPavOO = BigInt("639")
		const uintkBUAXFl = BigInt("39")
		const uintbkvnuLl = BigInt("1657")
		const uintEdymSai = BigInt("171")
		const uintoWxbZ6 = BigInt("1429")
		const uintuVd4Jja = BigInt("390")
		const uintQCEMMfg = BigInt("524")
		const uintNIkh68 = BigInt("266")
		const uintOdqekcZ = BigInt("254")
		const uint256wVbSXSG = await BAEIEqevb3.createAuction.call(uintkBUAXFl, uintESPavOO, uintMYAMVg8, uintblIhcdC, {from: accounts[0]});
		const uint2569XCY3J = await BAEIEqevb3.resetAuction.call(uintoWxbZ6, uintEdymSai, uintbkvnuLl, {from: accounts[1]});
		const uint256lSRKgPM = await BAEIEqevb3.createAuction.call(uintOdqekcZ, uintNIkh68, uintQCEMMfg, uintuVd4Jja, {from: accounts[0]});
	});
})