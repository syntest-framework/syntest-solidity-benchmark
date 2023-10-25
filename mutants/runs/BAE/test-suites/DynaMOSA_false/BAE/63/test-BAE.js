const BAE = artifacts.require("BAE");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('BAE', (accounts) => {
	it('test for BAE', async () => {
		const addressv5zl5mv = accounts[2]
		const BAEh3ARVZ = await BAE.new(addressv5zl5mv, {from: accounts[2]});
		const uintufV0MqA = BigInt("1316")
		const uintd44Yi39 = BigInt("1248")
		const uintcPGAP6p = BigInt("1487")
		const uintB7UJRH = BigInt("768")
		const uintTBOWmCL = BigInt("875")
		const uintf7oIhLv = BigInt("345")
		const uint256HvgvTw = await BAEh3ARVZ.bid.call(uintufV0MqA, {from: accounts[0]});
		const uint256l7Djsus = await BAEh3ARVZ.bid.call(uintd44Yi39, {from: accounts[2]});
		const uint256Rx0N23S = await BAEh3ARVZ.createAuction.call(uintf7oIhLv, uintTBOWmCL, uintB7UJRH, uintcPGAP6p, {from: accounts[0]});

		await expect(BAEh3ARVZ.bid.call(uintufV0MqA, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for BAE', async () => {
		const addressyJGTaYh = accounts[0]
		const BAEyHpOlph = await BAE.new(addressyJGTaYh, {from: accounts[1]});
		const uint7bJZiO = BigInt("632")
		const uintAj2UNtK = BigInt("584")
		const uintJ1ua8eO = BigInt("930")
		const uintAwCOszs = BigInt("951")
		const uintZh4mRjy = BigInt("820")
		const uintNKxgm1z = BigInt("1407")
		const uintlB2HJvY = BigInt("1210")
		const uintjBz074S = BigInt("746")
		const uintJCZx3D5 = BigInt("76")
		const uintdvL2P71 = BigInt("1187")
		const uintq4KMob4 = BigInt("1491")
		const uintrKC5NY1 = BigInt("1265")
		const uintAJ7YmP = BigInt("1193")
		const uintgnhzPrg = BigInt("674")
		const uint256PN74Vhj = await BAEyHpOlph.createAuction.call(uintAwCOszs, uintJ1ua8eO, uintAj2UNtK, uint7bJZiO, {from: accounts[3]});
		const uint256cF20h1g = await BAEyHpOlph.createAuction.call(uintjBz074S, uintlB2HJvY, uintNKxgm1z, uintZh4mRjy, {from: accounts[0]});
		const uint256QCE9DM = await BAEyHpOlph.buy.call(uintJCZx3D5, {from: accounts[2]});
		const uint256zwqSM3c = await BAEyHpOlph.createAuction.call(uintAJ7YmP, uintrKC5NY1, uintq4KMob4, uintdvL2P71, {from: accounts[1]});
		const uint256C1LY3Y2 = await BAEyHpOlph.bid.call(uintgnhzPrg, {from: accounts[3]});

		await expect(BAEyHpOlph.createAuction.call(uintAwCOszs, uintJ1ua8eO, uintAj2UNtK, uint7bJZiO, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BAE', async () => {
		const addressEl9Dlaf = accounts[3]
		const BAEfhu3Xh = await BAE.new(addressEl9Dlaf, {from: accounts[0]});
		const uintDwDmrYN = BigInt("1349")
		const uinthPE6cfz = BigInt("1719")
		const uint256SKmWeKr = await BAEfhu3Xh.concludeAuction.call(uintDwDmrYN, {from: accounts[1]});
		const uint256AOBJzdb = await BAEfhu3Xh.buy.call(uinthPE6cfz, {from: accounts[2]});

		await expect(BAEfhu3Xh.concludeAuction.call(uintDwDmrYN, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for BAE', async () => {
		const addressQPhgboT = accounts[3]
		const BAEErBpuO1 = await BAE.new(addressQPhgboT, {from: accounts[1]});
		const uintXTEhB4z = BigInt("359")
		const uintxWfQYEz = BigInt("1893")
		const uintXv1ckr7 = BigInt("1948")
		const uintOzttdc = BigInt("707")
		const uinthZLOzei = BigInt("571")
		const uint256GM8eYTI = await BAEErBpuO1.changePrintFee.call(uintXTEhB4z, {from: accounts[3]});
		const uint2562ahiDE = await BAEErBpuO1.buy.call(uintxWfQYEz, {from: accounts[2]});
		const uint256s10AsR5 = await BAEErBpuO1.bid.call(uintXv1ckr7, {from: accounts[3]});
		const uint256TaveENo = await BAEErBpuO1.bid.call(uintOzttdc, {from: accounts[2]});
		const uint256Z6f5CD2 = await BAEErBpuO1.setAuctionFee.call(uinthZLOzei, {from: "0x0000000000000000000000000000000000000001"});

		await expect(BAEErBpuO1.changePrintFee.call(uintXTEhB4z, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BAE', async () => {
		const addressYVn28hS = accounts[1]
		const BAEZJIMdOo = await BAE.new(addressYVn28hS, {from: accounts[4]});
		const uintgGQNxT3 = BigInt("634")
		const uintKZ0Huv2 = BigInt("68")
		const uintljXjdwg = BigInt("2003")
		const uintY23niHN = BigInt("1932")
		const uintPzFcUI = BigInt("275")
		const uintcMY531u = BigInt("1564")
		const uinteCSG42 = BigInt("1443")
		const uintGSwPfZ = BigInt("1473")
		const uintfetK6c = BigInt("1750")
		const uintDASgah = BigInt("604")
		const uintavYZtR = BigInt("976")
		const uint256lpFCzd = await BAEZJIMdOo.buy.call(uintgGQNxT3, {from: accounts[0]});
		const uint256ZglXosc = await BAEZJIMdOo.resetAuction.call(uintY23niHN, uintljXjdwg, uintKZ0Huv2, {from: accounts[0]});
		const uint256l78j4tb = await BAEZJIMdOo.concludeAuction.call(uintPzFcUI, {from: accounts[0]});
		const uint256Wh6c4X = await BAEZJIMdOo.createAuction.call(uintfetK6c, uintGSwPfZ, uinteCSG42, uintcMY531u, {from: accounts[5]});
		const uint256LaH0B3d = await BAEZJIMdOo.bid.call(uintDASgah, {from: accounts[1]});
		const uint256lqU27nh = await BAEZJIMdOo.setAuctionFee.call(uintavYZtR, {from: accounts[2]});

		await expect(BAEZJIMdOo.buy.call(uintgGQNxT3, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for BAE', async () => {
		const addressWa3TMi8 = accounts[1]
		const BAEEwxDlu9 = await BAE.new(addressWa3TMi8, {from: accounts[2]});
		const uintgFDdG1 = BigInt("586")
		const uinto506bfP = BigInt("1367")
		const uintz5bg9v9 = BigInt("1690")
		const uintfdSK9d = BigInt("665")
		const uintCGy5vFv = BigInt("600")
		const uintPYKzzGV = BigInt("1508")
		const uintVLgI4K6 = BigInt("1566")
		const uint256qx32VZu = await BAEEwxDlu9.resetAuction.call(uintz5bg9v9, uinto506bfP, uintgFDdG1, {from: accounts[5]});
		const uint256YCJEqFX = await BAEEwxDlu9.setAuctionFee.call(uintfdSK9d, {from: accounts[0]});
		const uint256BVNPHVY = await BAEEwxDlu9.concludeAuction.call(uintCGy5vFv, {from: accounts[4]});
		const uint256Eje2hCO = await BAEEwxDlu9.buy.call(uintPYKzzGV, {from: accounts[0]});
		const uint256zVYl53 = await BAEEwxDlu9.setAuctionFee.call(uintVLgI4K6, {from: accounts[3]});

		await expect(BAEEwxDlu9.resetAuction.call(uintz5bg9v9, uinto506bfP, uintgFDdG1, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for BAE', async () => {
		const addressoG8xWqd = accounts[4]
		const BAEcvFpLGe = await BAE.new(addressoG8xWqd, {from: "0x0000000000000000000000000000000000000001"});
		const uint7x7l1E = BigInt("1883")
		const uintWbCMP7o = BigInt("71")
		const uintzR3Vd8z = BigInt("1428")
		const uintz3IlsV4 = BigInt("1740")
		const uintwG0zjOu = BigInt("561")
		const uintTMQlIVq = BigInt("1043")
		const uintUUR9go8 = BigInt("1354")
		const uintgr7HY62 = BigInt("1726")
		const uintO4QTC3D = BigInt("422")
		const uintWINQ1CP = BigInt("1700")
		const uintw3tbbtw = BigInt("634")
		const uint256hPE0HUH = await BAEcvFpLGe.setAuctionFee.call(uint7x7l1E, {from: "0x0000000000000000000000000000000000000001"});
		const uint256BzBo7hg = await BAEcvFpLGe.resetAuction.call(uintz3IlsV4, uintzR3Vd8z, uintWbCMP7o, {from: accounts[0]});
		const uint256JsrrrLH = await BAEcvFpLGe.resetAuction.call(uintUUR9go8, uintTMQlIVq, uintwG0zjOu, {from: accounts[4]});
		const uint256AZE5HcD = await BAEcvFpLGe.resetAuction.call(uintWINQ1CP, uintO4QTC3D, uintgr7HY62, {from: accounts[0]});
		const uint256ZJIJqK = await BAEcvFpLGe.buy.call(uintw3tbbtw, {from: accounts[4]});
	});
})