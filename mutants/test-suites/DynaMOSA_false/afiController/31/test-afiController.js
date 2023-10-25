const afiController = artifacts.require("afiController");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('afiController', (accounts) => {
	it('test for afiController', async () => {
		const addressnVzm9PL = accounts[4]
		const afiControllerEYuLg9 = await afiController.new(addressnVzm9PL, {from: accounts[4]});
		const addressW36GGST = accounts[2]
		const addressEFTkj65 = accounts[4]
		const addressD9eUQh = accounts[5]
		const addresslysxI1a = accounts[1]
		const address2brCeq = "0x0000000000000000000000000000000000000001"
		const addressJv6hc7 = "0x0000000000000000000000000000000000000001"
//		const addressIVCsXd = await afiControllerEYuLg9.setRewards.call(addressW36GGST, {from: accounts[0]});
//		const addressWR5RIf = await afiControllerEYuLg9.withdrawAll.call(addressEFTkj65, {from: accounts[3]});
//		const addressSkmFx4l = await afiControllerEYuLg9.revokeStrategy.call(addresslysxI1a, addressD9eUQh, {from: accounts[0]});
//		const addressKnFzmbB = await afiControllerEYuLg9.approveStrategy.call(addressJv6hc7, address2brCeq, {from: accounts[5]});

		await expect(afiControllerEYuLg9.setRewards.call(addressW36GGST, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressHBBERLQ = accounts[2]
		const afiControllerZfaYlO = await afiController.new(addressHBBERLQ, {from: accounts[0]});
		const addressxflP3kV = accounts[4]
		const addressC8cae7W = accounts[3]
		const uintv1yp1O2 = BigInt("455")
		const addressUwOgUtT = accounts[1]
//		const addressgrvViRY = await afiControllerZfaYlO.inCaseStrategyTokenGetStuck.call(addressC8cae7W, addressxflP3kV, {from: accounts[3]});
//		const uint6eKQtk = await afiControllerZfaYlO.setSplit.call(uintv1yp1O2, {from: accounts[0]});
//		const addressKe2kiGY = await afiControllerZfaYlO.withdrawAll.call(addressUwOgUtT, {from: accounts[0]});

		await expect(afiControllerZfaYlO.inCaseStrategyTokenGetStuck.call(addressC8cae7W, addressxflP3kV, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressbwqhn2Y = accounts[3]
		const afiControllersVv68iD = await afiController.new(addressbwqhn2Y, {from: accounts[2]});
		const addressosYIqi4 = accounts[4]
		const uintM9eXr3E = BigInt("1541")
		const addressJp93A4A = accounts[3]
		const addressGKcV45o = accounts[2]
		const addressQNiTl6D = accounts[1]
		const uintgTyFfqy = BigInt("406")
		const addressJqRGpSQ = accounts[0]
		const addressXd8Ef4h = accounts[3]
		const addressrO992n7 = accounts[1]
		const addressCG2pOc7 = accounts[1]
//		const uinthZE0mwo = await afiControllersVv68iD.balanceOf.call(addressosYIqi4, {from: accounts[1]});
//		const uintOFL2Xrv = await afiControllersVv68iD.getExpectedReturn.call(addressGKcV45o, addressJp93A4A, uintM9eXr3E, {from: accounts[0]});
//		const addressyPgX1K = await afiControllersVv68iD.withdrawAll.call(addressQNiTl6D, {from: accounts[0]});
//		const addressEvIt9Zb = await afiControllersVv68iD.yearn.call(addressXd8Ef4h, addressJqRGpSQ, uintgTyFfqy, {from: accounts[0]});
//		const addressNvNnIHx = await afiControllersVv68iD.revokeStrategy.call(addressCG2pOc7, addressrO992n7, {from: accounts[5]});

		await expect(afiControllersVv68iD.balanceOf.call(addressosYIqi4, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressig9Ar79 = accounts[4]
		const afiControllerolhxTiu = await afiController.new(addressig9Ar79, {from: "0x0000000000000000000000000000000000000001"});
		const addressyQdM93 = accounts[3]
		const addressmDesBiu = accounts[3]
		const uint7kKQ7V = BigInt("1593")
		const addressCq9vkm8 = accounts[2]
		const addressDntRIqc = accounts[0]
		const uintH7yZ4r9 = BigInt("1480")
		const addressUTMMRr1 = accounts[5]
		const address64MBup = await afiControllerolhxTiu.setGovernance.call(addressyQdM93, {from: accounts[4]});
		const uintJpa2tSJ = await afiControllerolhxTiu.balanceOf.call(addressmDesBiu, {from: accounts[1]});
		const addressFfKvrLN = await afiControllerolhxTiu.yearn.call(addressDntRIqc, addressCq9vkm8, uint7kKQ7V, {from: accounts[4]});
		const address97afsX = await afiControllerolhxTiu.inCaseTokensGetStuck.call(addressUTMMRr1, uintH7yZ4r9, {from: accounts[1]});
	});

	it('test for afiController', async () => {
		const addressKiGjhul = accounts[1]
		const afiControllerlzLn4Rz = await afiController.new(addressKiGjhul, {from: accounts[2]});
		const addressMDD7c24 = accounts[0]
		const uintzcY1PXf = BigInt("1791")
		const addresscaf47Z2 = accounts[5]
		const addressHLZeyyO = accounts[0]
		const uintkLNSfhw = BigInt("1559")
		const addressUqMfZi7 = accounts[0]
//		const addressOfRZAYE = await afiControllerlzLn4Rz.setStrategist.call(addressMDD7c24, {from: accounts[0]});
//		const uintEcRpJZ2 = await afiControllerlzLn4Rz.getExpectedReturn.call(addressHLZeyyO, addresscaf47Z2, uintzcY1PXf, {from: "0x0000000000000000000000000000000000000001"});
//		const address7fpN6O = await afiControllerlzLn4Rz.inCaseTokensGetStuck.call(addressUqMfZi7, uintkLNSfhw, {from: accounts[3]});

		await expect(afiControllerlzLn4Rz.setStrategist.call(addressMDD7c24, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressnwsjKwJ = accounts[2]
		const afiControllerznZwFDk = await afiController.new(addressnwsjKwJ, {from: accounts[4]});
		const addressBVzG8v = accounts[1]
		const addressiG7dWEz = accounts[1]
		const addressoxLvcUe = accounts[1]
		const addressoeD9oNL = accounts[4]
		const addressghIDZGh = accounts[0]
		const addressXiNJKTU = accounts[5]
//		const addressrxuk2ND = await afiControllerznZwFDk.revokeStrategy.call(addressiG7dWEz, addressBVzG8v, {from: accounts[5]});
//		const addressUCOncHb = await afiControllerznZwFDk.setOneSplit.call(addressoxLvcUe, {from: accounts[3]});
//		const addressF83gT7u = await afiControllerznZwFDk.setStrategy.call(addressghIDZGh, addressoeD9oNL, {from: accounts[3]});
//		const uinthHjIyEw = await afiControllerznZwFDk.balanceOf.call(addressXiNJKTU, {from: accounts[0]});

		await expect(afiControllerznZwFDk.revokeStrategy.call(addressiG7dWEz, addressBVzG8v, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressY8IYtEp = accounts[4]
		const afiControllerHlfeM7g = await afiController.new(addressY8IYtEp, {from: accounts[1]});
		const addresszPwvXyy = accounts[3]
		const addressAW5bgvL = accounts[2]
		const uintopZwfIP = BigInt("1534")
		const addressf2z4O9X = accounts[4]
		const addressGNVqVT1 = accounts[1]
		const address4hCt4y = accounts[5]
//		const addressNV6qSLR = await afiControllerHlfeM7g.setVault.call(addressAW5bgvL, addresszPwvXyy, {from: accounts[4]});
//		const addressWMUVMBy = await afiControllerHlfeM7g.withdraw.call(addressf2z4O9X, uintopZwfIP, {from: accounts[0]});
//		const addressLra5jje = await afiControllerHlfeM7g.revokeStrategy.call(address4hCt4y, addressGNVqVT1, {from: accounts[3]});

		await expect(afiControllerHlfeM7g.setVault.call(addressAW5bgvL, addresszPwvXyy, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressUPQonSy = accounts[1]
		const afiControllerlzLn4Rz = await afiController.new(addressUPQonSy, {from: accounts[2]});
		const uintNjljot = BigInt("1791")
		const addressscONaIs = accounts[5]
		const addressxCj7gr7 = accounts[0]
		const uintLK1hLAe = BigInt("1553")
		const addresssefwx0 = accounts[0]
//		const uintEcRpJZ2 = await afiControllerlzLn4Rz.getExpectedReturn.call(addressxCj7gr7, addressscONaIs, uintNjljot, {from: "0x0000000000000000000000000000000000000001"});
//		const address7fpN6O = await afiControllerlzLn4Rz.inCaseTokensGetStuck.call(addresssefwx0, uintLK1hLAe, {from: accounts[3]});

		await expect(afiControllerlzLn4Rz.getExpectedReturn.call(addressxCj7gr7, addressscONaIs, uintNjljot, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressSFgcHYn = accounts[2]
		const afiControllerg1G7d0 = await afiController.new(addressSFgcHYn, {from: accounts[4]});
		const addressBfJ8rbF = accounts[3]
		const addressQeYQ7CL = accounts[1]
		const addressFu0in26 = accounts[0]
		const uintdO0BaZN = BigInt("2006")
		const addressvnEUmYP = accounts[0]
		const addressQjJQVD2 = accounts[4]
		const addresswMFX2U1 = accounts[1]
//		const addressI2yUAjb = await afiControllerg1G7d0.setStrategy.call(addressQeYQ7CL, addressBfJ8rbF, {from: accounts[1]});
//		const uintLxXO0oc = await afiControllerg1G7d0.balanceOf.call(addressFu0in26, {from: accounts[1]});
//		const addressp8JyvY = await afiControllerg1G7d0.earn.call(addressvnEUmYP, uintdO0BaZN, {from: accounts[3]});
//		const addressfLCzsmo = await afiControllerg1G7d0.setVault.call(addresswMFX2U1, addressQjJQVD2, {from: accounts[4]});

		await expect(afiControllerg1G7d0.setStrategy.call(addressQeYQ7CL, addressBfJ8rbF, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressdBSNd0X = accounts[3]
		const afiControllersVv68iD = await afiController.new(addressdBSNd0X, {from: accounts[2]});
		const addressS7RqyHU = accounts[3]
		const addressTKUG0rS = accounts[4]
		const addressrQL41n = accounts[0]
		const addressBXkDOUL = accounts[5]
		const addressjrYTvu3 = accounts[3]
		const uintVZkCE0 = BigInt("1541")
		const addressJ4CZwgt = accounts[3]
		const addressXpdg9HJ = accounts[2]
		const addressNMENlmM = accounts[2]
		const addressafCUjv = accounts[4]
		const uintzMbILUS = BigInt("406")
		const addressC57q3QM = accounts[0]
		const addressiipEWI = accounts[3]
		const addresslDoCnGt = accounts[1]
		const addressSJJgyyI = accounts[1]
//		const addresscLNgwae = await afiControllersVv68iD.setGovernance.call(addressS7RqyHU, {from: accounts[1]});
//		const uinthZE0mwo = await afiControllersVv68iD.balanceOf.call(addressTKUG0rS, {from: accounts[1]});
//		const addressZj1NXp6 = await afiControllersVv68iD.setRewards.call(addressrQL41n, {from: accounts[1]});
//		const addresscKwvq2S = await afiControllersVv68iD.inCaseStrategyTokenGetStuck.call(addressjrYTvu3, addressBXkDOUL, {from: "0x0000000000000000000000000000000000000001"});
//		const uintOFL2Xrv = await afiControllersVv68iD.getExpectedReturn.call(addressXpdg9HJ, addressJ4CZwgt, uintVZkCE0, {from: accounts[0]});
//		const addressyPgX1K = await afiControllersVv68iD.withdrawAll.call(addressNMENlmM, {from: accounts[0]});
//		const addressuSpPaBc = await afiControllersVv68iD.withdrawAll.call(addressafCUjv, {from: accounts[4]});
//		const addressEvIt9Zb = await afiControllersVv68iD.yearn.call(addressiipEWI, addressC57q3QM, uintzMbILUS, {from: accounts[0]});
//		const addressNvNnIHx = await afiControllersVv68iD.revokeStrategy.call(addressSJJgyyI, addresslDoCnGt, {from: accounts[5]});

		await expect(afiControllersVv68iD.setGovernance.call(addressS7RqyHU, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addresskhZOoCn = accounts[1]
		const afiControlleruXeq3MQ = await afiController.new(addresskhZOoCn, {from: accounts[1]});
		const uintCJolBSz = BigInt("1065")
		const addresss3rM5t9 = accounts[4]
		const addressaLmZEpo = accounts[4]
		const uinto6QWuKK = BigInt("138")
		const addressarychYa = accounts[3]
		const addressE7SDiws = "0x0000000000000000000000000000000000000001"
		const addressTM7o7UI = "0x0000000000000000000000000000000000000001"
//		const addressJNjjgIz = await afiControlleruXeq3MQ.yearn.call(addressaLmZEpo, addresss3rM5t9, uintCJolBSz, {from: accounts[1]});
//		const addressOuvxUVT = await afiControlleruXeq3MQ.earn.call(addressarychYa, uinto6QWuKK, {from: accounts[1]});
//		const addressAxzkfqy = await afiControlleruXeq3MQ.setStrategist.call(addressE7SDiws, {from: accounts[4]});
//		const addresszRliLJ = await afiControlleruXeq3MQ.withdrawAll.call(addressTM7o7UI, {from: accounts[1]});

		await expect(afiControlleruXeq3MQ.yearn.call(addressaLmZEpo, addresss3rM5t9, uintCJolBSz, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressK0keVDz = accounts[2]
		const afiControllerZfaYlO = await afiController.new(addressK0keVDz, {from: accounts[0]});
		const uintfbo0yv1 = BigInt("1374")
		const addressFJ96WNq = accounts[3]
		const addressUGBJRxE = accounts[4]
		const addressENjUqy = accounts[3]
		const addressoYrIIH7 = accounts[2]
		const addressTJ38BMY = accounts[3]
		const uintKATWK4k = BigInt("343")
		const addressMp7Gcue = accounts[2]
//		const addressDtdwia = await afiControllerZfaYlO.withdraw.call(addressFJ96WNq, uintfbo0yv1, {from: accounts[3]});
//		const addressgrvViRY = await afiControllerZfaYlO.inCaseStrategyTokenGetStuck.call(addressENjUqy, addressUGBJRxE, {from: accounts[3]});
//		const addressWJUW2P8 = await afiControllerZfaYlO.inCaseStrategyTokenGetStuck.call(addressTJ38BMY, addressoYrIIH7, {from: accounts[3]});
//		const uint6eKQtk = await afiControllerZfaYlO.setSplit.call(uintKATWK4k, {from: accounts[0]});
//		const addressKe2kiGY = await afiControllerZfaYlO.withdrawAll.call(addressMp7Gcue, {from: accounts[0]});

		await expect(afiControllerZfaYlO.withdraw.call(addressFJ96WNq, uintfbo0yv1, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressCJjQ2zU = accounts[0]
		const afiControllerIVf2we = await afiController.new(addressCJjQ2zU, {from: accounts[5]});
		const addressmJanQW = accounts[4]
		const addressDPGvyxn = accounts[3]
		const addressxjy01Q = accounts[4]
		const addressiMS9yQy = accounts[4]
		const address7rcXIs = accounts[5]
		const addressyI8yyjP = accounts[4]
		const addressow6hgH2 = accounts[3]
		const addressfd8MDvO = accounts[0]
		const uintGEYY7Ua = BigInt("1715")
		const addressicuyXNp = "0x0000000000000000000000000000000000000001"
		const addressaS0L5uB = accounts[3]
//		const addressRDfYBJj = await afiControllerIVf2we.setConverter.call(addressxjy01Q, addressDPGvyxn, addressmJanQW, {from: accounts[2]});
//		const addressX452srG = await afiControllerIVf2we.withdrawAll.call(addressiMS9yQy, {from: accounts[0]});
//		const addressIsr9alM = await afiControllerIVf2we.inCaseStrategyTokenGetStuck.call(addressyI8yyjP, address7rcXIs, {from: accounts[3]});
//		const addressRwiETKI = await afiControllerIVf2we.setVault.call(addressfd8MDvO, addressow6hgH2, {from: accounts[3]});
//		const addressIqfc0MZ = await afiControllerIVf2we.yearn.call(addressaS0L5uB, addressicuyXNp, uintGEYY7Ua, {from: accounts[0]});

		await expect(afiControllerIVf2we.setConverter.call(addressxjy01Q, addressDPGvyxn, addressmJanQW, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressSRCuYQ = accounts[2]
		const afiControllerZfaYlO = await afiController.new(addressSRCuYQ, {from: accounts[0]});
		const addresskfTHHlJ = "0x0000000000000000000000000000000000000001"
		const addressqySFdav = accounts[1]
		const addressiwp2M4t = accounts[3]
		const uintyThdx3s = BigInt("455")
		const addressdcXy6qM = accounts[1]
//		const addresslNfQHSZ = await afiControllerZfaYlO.withdrawAll.call(addresskfTHHlJ, {from: accounts[1]});
//		const addressgrvViRY = await afiControllerZfaYlO.inCaseStrategyTokenGetStuck.call(addressiwp2M4t, addressqySFdav, {from: accounts[3]});
//		const uint6eKQtk = await afiControllerZfaYlO.setSplit.call(uintyThdx3s, {from: accounts[0]});
//		const addressKe2kiGY = await afiControllerZfaYlO.withdrawAll.call(addressdcXy6qM, {from: accounts[0]});

		await expect(afiControllerZfaYlO.withdrawAll.call(addresskfTHHlJ, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressc4ozamD = accounts[1]
		const afiControlleruXeq3MQ = await afiController.new(addressc4ozamD, {from: accounts[1]});
		const uintdlQQkzT = BigInt("138")
		const addressw851gld = accounts[3]
		const addressvUdrX4L = "0x0000000000000000000000000000000000000001"
		const addressMTbAkBe = "0x0000000000000000000000000000000000000000"
		const uintoUllV14 = BigInt("1338")
		const addressjp7PLEY = accounts[4]
		const addressVeGhjoF = accounts[3]
		const addressR1pMmi = accounts[1]
		const addressMGKlbEF = accounts[3]
		const addressE76LMLG = accounts[3]
//		const addressOuvxUVT = await afiControlleruXeq3MQ.earn.call(addressw851gld, uintdlQQkzT, {from: accounts[1]});
//		const addressAxzkfqy = await afiControlleruXeq3MQ.setStrategist.call(addressvUdrX4L, {from: accounts[4]});
//		const addresszRliLJ = await afiControlleruXeq3MQ.withdrawAll.call(addressMTbAkBe, {from: accounts[1]});
//		const addressm0Joi6W = await afiControlleruXeq3MQ.earn.call(addressjp7PLEY, uintoUllV14, {from: accounts[4]});
//		const addressjiDPvoa = await afiControlleruXeq3MQ.withdrawAll.call(addressVeGhjoF, {from: accounts[5]});
//		const addressp9aaCF2 = await afiControlleruXeq3MQ.setConverter.call(addressE76LMLG, addressMGKlbEF, addressR1pMmi, {from: "0x0000000000000000000000000000000000000001"});

		await expect(afiControlleruXeq3MQ.earn.call(addressw851gld, uintdlQQkzT, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressYQmTvro = accounts[1]
		const afiControlleruXeq3MQ = await afiController.new(addressYQmTvro, {from: accounts[1]});
		const uintB449o9U = BigInt("1289")
		const addressYUw3HEq = accounts[1]
		const uintJw0XbIw = BigInt("1065")
		const addressXuJPMf = accounts[4]
		const addressNxFz65g = accounts[5]
		const addressTdHcZxf = accounts[2]
		const addressbkGE28z = accounts[3]
		const uintqr7gnc = BigInt("138")
		const addressVPKJ417 = accounts[3]
//		const addressM3B4Y1O = await afiControlleruXeq3MQ.inCaseTokensGetStuck.call(addressYUw3HEq, uintB449o9U, {from: accounts[2]});
//		const addressJNjjgIz = await afiControlleruXeq3MQ.yearn.call(addressNxFz65g, addressXuJPMf, uintJw0XbIw, {from: accounts[1]});
//		const addressmgzEm7d = await afiControlleruXeq3MQ.revokeStrategy.call(addressbkGE28z, addressTdHcZxf, {from: "0x0000000000000000000000000000000000000001"});
//		const addressOuvxUVT = await afiControlleruXeq3MQ.earn.call(addressVPKJ417, uintqr7gnc, {from: accounts[1]});

		await expect(afiControlleruXeq3MQ.inCaseTokensGetStuck.call(addressYUw3HEq, uintB449o9U, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressMKLVeI = accounts[1]
		const afiControlleruXeq3MQ = await afiController.new(addressMKLVeI, {from: accounts[1]});
		const addressHts8lCp = accounts[1]
		const addressDLPXeWf = accounts[3]
		const addresszfeaQlh = accounts[4]
		const addressUk3zvq = accounts[4]
		const addressYk73ATE = "0x0000000000000000000000000000000000000001"
		const addressx2fLCY0 = accounts[3]
		const address6ac3pk = accounts[0]
		const uintGPeSsPY = BigInt("1904")
		const uintdLzFMA = BigInt("741")
		const addressM7OlIy = accounts[0]
		const addressZiFqMMg = accounts[4]
		const addressUEd7beV = accounts[1]
		const uintGHIzLoh = BigInt("382")
		const addresskoq3xO3 = accounts[1]
		const addressikdbhho = accounts[3]
		const addressd4m9M3o = "0x0000000000000000000000000000000000000001"
//		const addresssAEdo29 = await afiControlleruXeq3MQ.approveStrategy.call(addressDLPXeWf, addressHts8lCp, {from: accounts[0]});
//		const addressTZ70nS = await afiControlleruXeq3MQ.setConverter.call(addressYk73ATE, addressUk3zvq, addresszfeaQlh, {from: accounts[0]});
//		const addressv9kBat = await afiControlleruXeq3MQ.setVault.call(address6ac3pk, addressx2fLCY0, {from: accounts[2]});
//		const uintAiLx5YF = await afiControlleruXeq3MQ.setSplit.call(uintGPeSsPY, {from: accounts[0]});
//		const addressEG99G0Y = await afiControlleruXeq3MQ.yearn.call(addressZiFqMMg, addressM7OlIy, uintdLzFMA, {from: accounts[1]});
//		const addressSu6LPY6 = await afiControlleruXeq3MQ.setGovernance.call(addressUEd7beV, {from: accounts[1]});
//		const uintKZqF8dX = await afiControlleruXeq3MQ.getExpectedReturn.call(addressikdbhho, addresskoq3xO3, uintGHIzLoh, {from: accounts[4]});
//		const addresszRliLJ = await afiControlleruXeq3MQ.withdrawAll.call(addressd4m9M3o, {from: accounts[1]});

		await expect(afiControlleruXeq3MQ.approveStrategy.call(addressDLPXeWf, addressHts8lCp, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressNdHVZ3x = accounts[1]
		const afiControlleruXeq3MQ = await afiController.new(addressNdHVZ3x, {from: accounts[1]});
		const addressK2qNSSs = "0x0000000000000000000000000000000000000001"
		const uintzmxh3m7 = BigInt("1065")
		const addressfLD9S4R = accounts[4]
		const addressYoSAXfo = accounts[4]
		const addressEGW8cd2 = "0x0000000000000000000000000000000000000000"
//		const addressR3J54jG = await afiControlleruXeq3MQ.setOneSplit.call(addressK2qNSSs, {from: accounts[2]});
//		const addressJNjjgIz = await afiControlleruXeq3MQ.yearn.call(addressYoSAXfo, addressfLD9S4R, uintzmxh3m7, {from: accounts[1]});
//		const addresszRliLJ = await afiControlleruXeq3MQ.withdrawAll.call(addressEGW8cd2, {from: accounts[1]});

		await expect(afiControlleruXeq3MQ.setOneSplit.call(addressK2qNSSs, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressgZsrv6V = accounts[1]
		const afiControlleruXeq3MQ = await afiController.new(addressgZsrv6V, {from: accounts[1]});
		const uintQdfIKq = BigInt("679")
		const uintMj56Ykr = BigInt("1936")
		const addressQStzPl = accounts[4]
		const addressPyAQKg = accounts[2]
		const uintbhpmv8P = BigInt("1065")
		const addressIUlRGeo = accounts[5]
		const addressJqh1eJZ = accounts[5]
//		const uintHuyZWa6 = await afiControlleruXeq3MQ.setSplit.call(uintQdfIKq, {from: accounts[2]});
//		const addressuzr4fSx = await afiControlleruXeq3MQ.withdraw.call(addressQStzPl, uintMj56Ykr, {from: accounts[2]});
//		const addressKVIxcr = await afiControlleruXeq3MQ.setOneSplit.call(addressPyAQKg, {from: accounts[4]});
//		const addressJNjjgIz = await afiControlleruXeq3MQ.yearn.call(addressJqh1eJZ, addressIUlRGeo, uintbhpmv8P, {from: accounts[1]});

		await expect(afiControlleruXeq3MQ.setSplit.call(uintQdfIKq, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addresspAK4mPd = accounts[1]
		const afiControlleruXeq3MQ = await afiController.new(addresspAK4mPd, {from: accounts[1]});
		const addresstSlUFNI = accounts[4]
		const addresskUVeh3w = accounts[0]
		const uintpUq3lEF = BigInt("405")
		const addressU6iAWBy = "0x0000000000000000000000000000000000000001"
		const addressWDQYDZp = accounts[4]
		const uintYNzPI81 = BigInt("1065")
		const addressb3gLBV6 = accounts[5]
		const addressjMcAzYB = accounts[6]
		const uintHee8RUs = BigInt("804")
		const addressqaQyOQl = accounts[3]
		const addressyoRjdLe = "0x0000000000000000000000000000000000000001"
//		const addressxku1nnt = await afiControlleruXeq3MQ.setStrategy.call(addresskUVeh3w, addresstSlUFNI, {from: accounts[1]});
//		const addressSmHjoTU = await afiControlleruXeq3MQ.earn.call(addressU6iAWBy, uintpUq3lEF, {from: accounts[0]});
//		const addressaw99m6c = await afiControlleruXeq3MQ.withdrawAll.call(addressWDQYDZp, {from: accounts[0]});
//		const addressJNjjgIz = await afiControlleruXeq3MQ.yearn.call(addressjMcAzYB, addressb3gLBV6, uintYNzPI81, {from: accounts[1]});
//		const address8qm7ie = await afiControlleruXeq3MQ.yearn.call(addressyoRjdLe, addressqaQyOQl, uintHee8RUs, {from: accounts[5]});

		await expect(afiControlleruXeq3MQ.setStrategy.call(addresskUVeh3w, addresstSlUFNI, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressLOul9cE = accounts[1]
		const afiControlleruXeq3MQ = await afiController.new(addressLOul9cE, {from: accounts[1]});
		const uintnfCDWxq = BigInt("695")
		const addressbc00NlN = accounts[2]
		const addressJjK7GX = accounts[3]
		const addressz52Wvji = accounts[5]
		const uintdpaur1x = BigInt("1065")
		const addressz91GA36 = accounts[5]
		const addressNc8smlR = accounts[5]
		const addressxPPkQd = accounts[2]
		const uintkp1xI26 = BigInt("1523")
		const addressCwH7kfv = accounts[4]
		const addressCNHNq6N = accounts[2]
//		const addressVNJtVg7 = await afiControlleruXeq3MQ.inCaseTokensGetStuck.call(addressbc00NlN, uintnfCDWxq, {from: accounts[1]});
//		const addressY5MTS9 = await afiControlleruXeq3MQ.setStrategy.call(addressz52Wvji, addressJjK7GX, {from: accounts[0]});
//		const addressJNjjgIz = await afiControlleruXeq3MQ.yearn.call(addressNc8smlR, addressz91GA36, uintdpaur1x, {from: accounts[1]});
//		const addressuIdu3rp = await afiControlleruXeq3MQ.setRewards.call(addressxPPkQd, {from: "0x0000000000000000000000000000000000000001"});
//		const addresswnF0DSo = await afiControlleruXeq3MQ.yearn.call(addressCNHNq6N, addressCwH7kfv, uintkp1xI26, {from: accounts[2]});

		await expect(afiControlleruXeq3MQ.inCaseTokensGetStuck.call(addressbc00NlN, uintnfCDWxq, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})