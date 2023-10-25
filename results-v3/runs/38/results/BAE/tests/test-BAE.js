const BAE = artifacts.require("BAE");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('BAE', (accounts) => {
	it('test for BAE', async () => {
		const addressEybcH2 = accounts[3]
		const BAELHqd18 = await BAE.new(addressEybcH2, {from: accounts[0]});
		const uintTyfEHA = BigInt("608")
		const uintq1l0j7k = BigInt("947")
		const uintu2l5UP = BigInt("83")
		const uintKLvx5IW = BigInt("211")
		const uintTx5B0YD = BigInt("1969")
		const uintC4SeSP3 = BigInt("1394")
		const uintT6o3pA = BigInt("896")
		const uint256zO0Uq3c = await BAELHqd18.buy.call(uintTyfEHA, {from: accounts[3]});
		const uint256r7EIP6t = await BAELHqd18.bid.call(uintq1l0j7k, {from: accounts[5]});
		const uint256Z8VgdB9 = await BAELHqd18.resetAuction.call(uintTx5B0YD, uintKLvx5IW, uintu2l5UP, {from: accounts[0]});
		const uint256IO3yZVQ = await BAELHqd18.setAuctionFee.call(uintC4SeSP3, {from: accounts[5]});
		const uint256fL0dbp0 = await BAELHqd18.buy.call(uintT6o3pA, {from: accounts[4]});

		await expect(BAELHqd18.buy.call(uintTyfEHA, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BAE', async () => {
		const addressOPDCyV = accounts[3]
		const BAEUC2t0f = await BAE.new(addressOPDCyV, {from: accounts[0]});
		const uint9Rn1qY = BigInt("122")
		const uintiFTicP3 = BigInt("272")
		const uintLOAtC5N = BigInt("1687")
		const uintc8A5v7 = BigInt("1438")
		const uintd8hEw7 = BigInt("102")
		const uintQj5lHHS = BigInt("482")
		const uinthJEFjo = BigInt("1243")
		const uintUYNNzg2 = BigInt("1696")
		const uinteuFgJj = BigInt("1423")
		const uintm6N13Bm = BigInt("1586")
		const uinteavMKQ5 = BigInt("555")
		const uint256wp8nLep = await BAEUC2t0f.createAuction.call(uintc8A5v7, uintLOAtC5N, uintiFTicP3, uint9Rn1qY, {from: accounts[3]});
		const uint256tYpXuB1 = await BAEUC2t0f.buy.call(uintd8hEw7, {from: "0x0000000000000000000000000000000000000001"});
		const uint256U2iElhx = await BAEUC2t0f.bid.call(uintQj5lHHS, {from: "0x0000000000000000000000000000000000000001"});
		const uint256rWaaGzu = await BAEUC2t0f.bid.call(uinthJEFjo, {from: accounts[1]});
		const uint256qftlIej = await BAEUC2t0f.createAuction.call(uinteavMKQ5, uintm6N13Bm, uinteuFgJj, uintUYNNzg2, {from: accounts[3]});

		await expect(BAEUC2t0f.createAuction.call(uintc8A5v7, uintLOAtC5N, uintiFTicP3, uint9Rn1qY, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BAE', async () => {
		const addressDSlbqpN = "0x0000000000000000000000000000000000000001"
		const BAEhKjalMs = await BAE.new(addressDSlbqpN, {from: accounts[2]});
		const uintR6j2UOx = BigInt("496")
		const uintxrmLzVa = BigInt("1358")
		const uintbjkmWtE = BigInt("599")
		const uintuRUlsU = BigInt("1305")
		const uintlK1jzDZ = BigInt("732")
		const uintNfSAzS4 = BigInt("1457")
		const uintMFhlXsb = BigInt("26")
		const uintETz1Byw = BigInt("937")
		const uintng4GwyJ = BigInt("1299")
		const uintSGKSGWA = BigInt("62")
		const uint256SJYRRKF = await BAEhKjalMs.resetAuction.call(uintbjkmWtE, uintxrmLzVa, uintR6j2UOx, {from: accounts[1]});
		const uint256RnjdyWe = await BAEhKjalMs.resetAuction.call(uintNfSAzS4, uintlK1jzDZ, uintuRUlsU, {from: accounts[2]});
		const uint256Ma0IoD = await BAEhKjalMs.createAuction.call(uintSGKSGWA, uintng4GwyJ, uintETz1Byw, uintMFhlXsb, {from: accounts[1]});

		await expect(BAEhKjalMs.resetAuction.call(uintbjkmWtE, uintxrmLzVa, uintR6j2UOx, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for BAE', async () => {
		const addresscyWdX8 = accounts[4]
		const BAEgpEAfhS = await BAE.new(addresscyWdX8, {from: accounts[2]});
		const uintDYIn3Ld = BigInt("238")
		const uintxzz5P8C = BigInt("1893")
		const uintaZuGzmD = BigInt("875")
		const uint256UuG8nRJ = await BAEgpEAfhS.setAuctionFee.call(uintDYIn3Ld, {from: accounts[2]});
		const uint256igxLjaw = await BAEgpEAfhS.changePrintFee.call(uintxzz5P8C, {from: "0x0000000000000000000000000000000000000001"});
		const uint256p78pnAR = await BAEgpEAfhS.changePrintFee.call(uintaZuGzmD, {from: accounts[0]});

		await expect(BAEgpEAfhS.setAuctionFee.call(uintDYIn3Ld, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for BAE', async () => {
		const addressZaeDwCF = accounts[0]
		const BAEokpAF7R = await BAE.new(addressZaeDwCF, {from: accounts[0]});
		const uintyQAkR6q = BigInt("108")
		const uintKkHxtZH = BigInt("1158")
		const uintRDFZOXP = BigInt("1714")
		const uintSj6zi3A = BigInt("71")
		const uintQtroEEW = BigInt("1667")
		const uintSiO5yI0 = BigInt("1609")
		const uintOaQfcI3 = BigInt("1085")
		const uintDkJWO65 = BigInt("1456")
		const uinte2xJ4Xd = BigInt("1398")
		const uint256XukH52r = await BAEokpAF7R.bid.call(uintyQAkR6q, {from: accounts[5]});
		const uint256ZtT2nfv = await BAEokpAF7R.changePrintFee.call(uintKkHxtZH, {from: accounts[4]});
		const uint256QZ1RCGT = await BAEokpAF7R.resetAuction.call(uintQtroEEW, uintSj6zi3A, uintRDFZOXP, {from: accounts[1]});
		const uint256GvGt7G6 = await BAEokpAF7R.resetAuction.call(uintDkJWO65, uintOaQfcI3, uintSiO5yI0, {from: accounts[2]});
		const uint256kZgXwc = await BAEokpAF7R.concludeAuction.call(uinte2xJ4Xd, {from: accounts[3]});

		await expect(BAEokpAF7R.bid.call(uintyQAkR6q, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for BAE', async () => {
		const addressWIC6pV = accounts[4]
		const BAEkWTOHSY = await BAE.new(addressWIC6pV, {from: "0x0000000000000000000000000000000000000001"});
		const uintqblnQHY = BigInt("397")
		const uintNbhzcf4 = BigInt("1839")
		const uintc7gkTAP = BigInt("1475")
		const uintmE8lAm = BigInt("202")
		const uintSloGxh3 = BigInt("758")
		const uintF59oZA = BigInt("1353")
		const uintHC1Mt1G = BigInt("392")
		const uintIVZQNfN = BigInt("649")
		const uint256uHJuElf = await BAEkWTOHSY.bid.call(uintqblnQHY, {from: accounts[0]});
		const uint256RsTeXOR = await BAEkWTOHSY.setAuctionFee.call(uintNbhzcf4, {from: "0x0000000000000000000000000000000000000001"});
		const uint256o8qq3BM = await BAEkWTOHSY.concludeAuction.call(uintc7gkTAP, {from: accounts[1]});
		const uint256kNc77B = await BAEkWTOHSY.bid.call(uintmE8lAm, {from: accounts[3]});
		const uint256FhjLay1 = await BAEkWTOHSY.createAuction.call(uintIVZQNfN, uintHC1Mt1G, uintF59oZA, uintSloGxh3, {from: accounts[0]});
	});

	it('test for BAE', async () => {
		const addresskdeXZZz = "0x0000000000000000000000000000000000000001"
		const BAEhKjalMs = await BAE.new(addresskdeXZZz, {from: accounts[2]});
		const uintoO7fx7a = BigInt("1122")
		const uintNblDnSM = BigInt("880")
		const uintqcoUvf = BigInt("496")
		const uintNb2wVCZ = BigInt("1358")
		const uinthKbWQQx = BigInt("599")
		const uint256FUpWnsh = await BAEhKjalMs.concludeAuction.call(uintoO7fx7a, {from: accounts[2]});
		const uint256oSwl4Hm = await BAEhKjalMs.changePrintFee.call(uintNblDnSM, {from: accounts[1]});
		const uint256SJYRRKF = await BAEhKjalMs.resetAuction.call(uinthKbWQQx, uintNb2wVCZ, uintqcoUvf, {from: accounts[1]});

		await expect(BAEhKjalMs.concludeAuction.call(uintoO7fx7a, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})