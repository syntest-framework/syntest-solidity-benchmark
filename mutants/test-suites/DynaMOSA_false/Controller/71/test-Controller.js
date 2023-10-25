const Controller = artifacts.require("Controller");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Controller', (accounts) => {
	it('test for Controller', async () => {
		const addressW6uBdNk = accounts[4]
		const ControllerAcHmd5i = await Controller.new(addressW6uBdNk, {from: accounts[2]});
		const addressjfWKh6L = accounts[2]
		const addressfybAyI = accounts[2]
		const addresszYC2A62 = accounts[0]
		const addressWFHt9pr = accounts[4]
		const uintkhNUmy8 = BigInt("687")
		const addressOesJrlk = accounts[1]
		const addressyRrnCku = accounts[3]
		const uintrgbiMKv = BigInt("1121")
		const uintdNn8G4q = BigInt("1500")
		const addressHulGL4T = accounts[3]
//		const addressZOLmKcc = await ControllerAcHmd5i.setVault.call(addressfybAyI, addressjfWKh6L, {from: accounts[4]});
//		const addressThvfNfL = await ControllerAcHmd5i.setStrategy.call(addressWFHt9pr, addresszYC2A62, {from: accounts[1]});
//		const uintLnGvKh = await ControllerAcHmd5i.getExpectedReturn.call(addressyRrnCku, addressOesJrlk, uintkhNUmy8, {from: accounts[0]});
//		const uintkPuCvxz = await ControllerAcHmd5i.setSplit.call(uintrgbiMKv, {from: accounts[0]});
//		const addressve6diYu = await ControllerAcHmd5i.inCaseTokensGetStuck.call(addressHulGL4T, uintdNn8G4q, {from: accounts[4]});

		await expect(ControllerAcHmd5i.setVault.call(addressfybAyI, addressjfWKh6L, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressQH09loS = "0x0000000000000000000000000000000000000001"
		const ControllerJpeuNWd = await Controller.new(addressQH09loS, {from: accounts[3]});
		const uintK5Zo3Fy = BigInt("67")
		const addressmwmuZtD = accounts[0]
		const addressHGrKrB5 = accounts[0]
		const addresspHGovl = accounts[4]
		const uintY7cp6Lg = BigInt("1640")
		const addresszfRC9f7 = accounts[5]
		const addressWaFWVBi = accounts[2]
//		const uintBxPkDqn = await ControllerJpeuNWd.getExpectedReturn.call(addressHGrKrB5, addressmwmuZtD, uintK5Zo3Fy, {from: accounts[1]});
//		const addressggQzVf = await ControllerJpeuNWd.setStrategist.call(addresspHGovl, {from: accounts[5]});
//		const addresstVzIHF1 = await ControllerJpeuNWd.yearn.call(addressWaFWVBi, addresszfRC9f7, uintY7cp6Lg, {from: accounts[3]});

		await expect(ControllerJpeuNWd.getExpectedReturn.call(addressHGrKrB5, addressmwmuZtD, uintK5Zo3Fy, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressAD5uVD9 = accounts[4]
		const Controllerg6pgtt = await Controller.new(addressAD5uVD9, {from: "0x0000000000000000000000000000000000000001"});
		const uintZSieQE = BigInt("407")
		const addresssefAeO = accounts[3]
		const addressRPu4WyI = "0x0000000000000000000000000000000000000001"
		const addressr8yRkCe = accounts[3]
		const addresszWXzdg = accounts[2]
		const uintfKKlMro = BigInt("1853")
		const addressLMVnKx1 = accounts[0]
		const addressrf8V82N = accounts[4]
		const addressY28ykyy = accounts[5]
		const uintyFbnUth = await Controllerg6pgtt.getExpectedReturn.call(addressRPu4WyI, addresssefAeO, uintZSieQE, {from: accounts[0]});
		const addressDSQs9sp = await Controllerg6pgtt.setOneSplit.call(addressr8yRkCe, {from: accounts[3]});
		const addressek46Kyf = await Controllerg6pgtt.setRewards.call(addresszWXzdg, {from: accounts[1]});
		const addressCJjeHnF = await Controllerg6pgtt.earn.call(addressLMVnKx1, uintfKKlMro, {from: accounts[4]});
		const addressJDbcJq = await Controllerg6pgtt.revokeStrategy.call(addressY28ykyy, addressrf8V82N, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for Controller', async () => {
		const addressUgVr0t6 = "0x0000000000000000000000000000000000000001"
		const ControllerbkUzkKJ = await Controller.new(addressUgVr0t6, {from: accounts[4]});
		const addressrg5ahpA = accounts[0]
		const addressBoUXyTo = accounts[3]
		const addressU4bHNZe = accounts[2]
		const addresszgAkiA6 = accounts[2]
		const addressjsvapqR = accounts[5]
//		const addresslt0wgK = await ControllerbkUzkKJ.setGovernance.call(addressrg5ahpA, {from: accounts[2]});
//		const addressdOuKceP = await ControllerbkUzkKJ.setStrategy.call(addressU4bHNZe, addressBoUXyTo, {from: accounts[5]});
//		const address9xZ3wL = await ControllerbkUzkKJ.approveStrategy.call(addressjsvapqR, addresszgAkiA6, {from: accounts[4]});

		await expect(ControllerbkUzkKJ.setGovernance.call(addressrg5ahpA, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressz6keiFy = "0x0000000000000000000000000000000000000001"
		const Controllerx8VSFTk = await Controller.new(addressz6keiFy, {from: accounts[0]});
		const uintG0kAm7w = BigInt("1823")
		const addressa46OHYX = accounts[4]
		const addressq5Xv6e = accounts[0]
		const uintljl7FRw = BigInt("758")
		const addressWzKOdd2 = accounts[4]
		const addresskTEgiYu = accounts[3]
		const addresso0TNsKh = accounts[5]
		const addressPDd8dfc = accounts[4]
		const addressE5VY0U = accounts[2]
		const addressMXkGe2e = accounts[1]
		const addressS55a6Bo = accounts[5]
		const addressnDuK7u = accounts[3]
//		const addressAXEWdIp = await Controllerx8VSFTk.inCaseTokensGetStuck.call(addressa46OHYX, uintG0kAm7w, {from: accounts[4]});
//		const addresssT9fYQ = await Controllerx8VSFTk.setGovernance.call(addressq5Xv6e, {from: accounts[2]});
//		const uintrDj5YwT = await Controllerx8VSFTk.getExpectedReturn.call(addresskTEgiYu, addressWzKOdd2, uintljl7FRw, {from: accounts[4]});
//		const addressovYTeo = await Controllerx8VSFTk.setConverter.call(addressE5VY0U, addressPDd8dfc, addresso0TNsKh, {from: accounts[0]});
//		const addressCbXBBVl = await Controllerx8VSFTk.setConverter.call(addressnDuK7u, addressS55a6Bo, addressMXkGe2e, {from: accounts[4]});

		await expect(Controllerx8VSFTk.inCaseTokensGetStuck.call(addressa46OHYX, uintG0kAm7w, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressd8a3pc1 = accounts[2]
		const ControllercpsAtgN = await Controller.new(addressd8a3pc1, {from: accounts[0]});
		const uintfqJPujs = BigInt("1028")
		const addressVWycBcY = accounts[1]
		const addressiUiZXD = accounts[2]
		const addressUpLpG1g = accounts[0]
		const uintpnVhTbI = BigInt("1447")
		const addressmXhrbS0 = accounts[0]
		const uintH8RGqit = BigInt("479")
		const addressm5xrCK = accounts[3]
//		const uintazf2n4 = await ControllercpsAtgN.setSplit.call(uintfqJPujs, {from: accounts[2]});
//		const addressXFUzWPa = await ControllercpsAtgN.approveStrategy.call(addressiUiZXD, addressVWycBcY, {from: accounts[0]});
//		const address44IjFU = await ControllercpsAtgN.withdrawAll.call(addressUpLpG1g, {from: accounts[3]});
//		const addresssacpV9R = await ControllercpsAtgN.inCaseTokensGetStuck.call(addressmXhrbS0, uintpnVhTbI, {from: accounts[0]});
//		const addressMjP68P = await ControllercpsAtgN.inCaseTokensGetStuck.call(addressm5xrCK, uintH8RGqit, {from: accounts[0]});

		await expect(ControllercpsAtgN.setSplit.call(uintfqJPujs, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressicdg5C8 = accounts[1]
		const ControllerCBwrkei = await Controller.new(addressicdg5C8, {from: accounts[3]});
		const uinttYxzURM = BigInt("1384")
		const addresstrq0gkj = accounts[1]
		const uintsj4oqsz = BigInt("1106")
		const addresscl3kC7 = accounts[0]
		const address9oOBF3 = accounts[4]
		const addressQIOEZEH = accounts[3]
//		const addresszCSRvar = await ControllerCBwrkei.earn.call(addresstrq0gkj, uinttYxzURM, {from: accounts[2]});
//		const addresswmwHFQt = await ControllerCBwrkei.earn.call(addresscl3kC7, uintsj4oqsz, {from: accounts[0]});
//		const addressa0Unpho = await ControllerCBwrkei.setStrategy.call(addressQIOEZEH, address9oOBF3, {from: accounts[3]});

		await expect(ControllerCBwrkei.earn.call(addresstrq0gkj, uinttYxzURM, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressMyoSOHM = accounts[4]
		const ControllerNvSqUAv = await Controller.new(addressMyoSOHM, {from: accounts[2]});
		const addresssM1ez0y = accounts[1]
		const addressCNw4Kkz = accounts[1]
		const addressbA09gap = accounts[0]
		const addressQfkcK1 = accounts[2]
		const addressa6ZkZSD = accounts[0]
		const addressjBvwwq = accounts[0]
//		const addressKNP46Kx = await ControllerNvSqUAv.setStrategy.call(addressCNw4Kkz, addresssM1ez0y, {from: accounts[0]});
//		const addresslZ9ynXJ = await ControllerNvSqUAv.setGovernance.call(addressbA09gap, {from: accounts[2]});
//		const addressYc4FTQS = await ControllerNvSqUAv.setConverter.call(addressjBvwwq, addressa6ZkZSD, addressQfkcK1, {from: accounts[3]});

		await expect(ControllerNvSqUAv.setStrategy.call(addressCNw4Kkz, addresssM1ez0y, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressZBm9Kvc = accounts[1]
		const ControllerpjtHDpS = await Controller.new(addressZBm9Kvc, {from: accounts[2]});
		const addressd65RjZn = accounts[0]
		const addressSqctjg = accounts[0]
		const addressIOwDAg = accounts[1]
		const uintlOlhmku = BigInt("1807")
		const addressrn5KQq1 = accounts[2]
		const uintW95771x = BigInt("1664")
		const addressGpwol2S = accounts[2]
		const addressbygMf5H = accounts[0]
		const addressep6lnM = accounts[0]
//		const addressSz3o0u = await ControllerpjtHDpS.setConverter.call(addressIOwDAg, addressSqctjg, addressd65RjZn, {from: accounts[0]});
//		const addressIr0MhWT = await ControllerpjtHDpS.withdraw.call(addressrn5KQq1, uintlOlhmku, {from: "0x0000000000000000000000000000000000000001"});
//		const uintmhFjfKV = await ControllerpjtHDpS.getExpectedReturn.call(addressbygMf5H, addressGpwol2S, uintW95771x, {from: accounts[1]});
//		const addressPuehScu = await ControllerpjtHDpS.withdrawAll.call(addressep6lnM, {from: accounts[4]});

		await expect(ControllerpjtHDpS.setConverter.call(addressIOwDAg, addressSqctjg, addressd65RjZn, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressOBhXwXA = accounts[1]
		const ControllerCBwrkei = await Controller.new(addressOBhXwXA, {from: accounts[3]});
		const addressYiy6PHx = accounts[2]
		const uintB9LG4Dw = BigInt("350")
		const addressxR7mp7p = accounts[3]
		const uintqCXyQvA = BigInt("1106")
		const addressgK5KiY3 = accounts[1]
		const addresskJZLR92 = accounts[4]
		const addressqWwSDMf = accounts[3]
		const addressNftkfrg = accounts[3]
		const addressx2S1eC1 = accounts[1]
//		const addressSksgejX = await ControllerCBwrkei.setStrategist.call(addressYiy6PHx, {from: accounts[0]});
//		const addressoLXDPS = await ControllerCBwrkei.earn.call(addressxR7mp7p, uintB9LG4Dw, {from: accounts[5]});
//		const addresswmwHFQt = await ControllerCBwrkei.earn.call(addressgK5KiY3, uintqCXyQvA, {from: accounts[0]});
//		const addressa0Unpho = await ControllerCBwrkei.setStrategy.call(addressqWwSDMf, addresskJZLR92, {from: accounts[3]});
//		const addressgcAkftb = await ControllerCBwrkei.setStrategy.call(addressx2S1eC1, addressNftkfrg, {from: "0x0000000000000000000000000000000000000001"});

		await expect(ControllerCBwrkei.setStrategist.call(addressYiy6PHx, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressxfFIBVm = accounts[4]
		const Controllerf6tBRmu = await Controller.new(addressxfFIBVm, {from: accounts[1]});
		const addressL1KsjKi = accounts[5]
		const uintIgjX0rR = BigInt("842")
		const addresskN6Bl1c = accounts[4]
		const addresspEXnDz9 = accounts[4]
		const addressqZQzQgK = accounts[0]
		const addressNcdIUtW = accounts[0]
		const addressTXj9Fw4 = accounts[3]
		const addressqWssdvg = accounts[5]
		const uintr8kn8NI = BigInt("47")
		const addressnf7apoL = accounts[2]
		const addresshvW35hn = accounts[3]
//		const uintcekGv02 = await Controllerf6tBRmu.balanceOf.call(addressL1KsjKi, {from: accounts[3]});
//		const addressBymqOHI = await Controllerf6tBRmu.yearn.call(addresspEXnDz9, addresskN6Bl1c, uintIgjX0rR, {from: accounts[3]});
//		const addressZXg8h5 = await Controllerf6tBRmu.withdrawAll.call(addressqZQzQgK, {from: "0x0000000000000000000000000000000000000001"});
//		const addressBCbBf1q = await Controllerf6tBRmu.setConverter.call(addressqWssdvg, addressTXj9Fw4, addressNcdIUtW, {from: accounts[5]});
//		const addressrtXq1vV = await Controllerf6tBRmu.yearn.call(addresshvW35hn, addressnf7apoL, uintr8kn8NI, {from: accounts[4]});

		await expect(Controllerf6tBRmu.balanceOf.call(addressL1KsjKi, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressAi5EihI = accounts[4]
		const ControllerNvSqUAv = await Controller.new(addressAi5EihI, {from: accounts[2]});
		const uintxWf54HI = BigInt("894")
		const addressl4gNv5M = "0x0000000000000000000000000000000000000001"
		const addressW6RQPBv = accounts[1]
		const addresswTHFO4 = accounts[2]
		const addressFejKnhf = accounts[4]
		const addresswrX5gMs = accounts[0]
//		const addressclJpcKJ = await ControllerNvSqUAv.inCaseTokensGetStuck.call(addressl4gNv5M, uintxWf54HI, {from: accounts[2]});
//		const addresslZ9ynXJ = await ControllerNvSqUAv.setGovernance.call(addressW6RQPBv, {from: accounts[2]});
//		const addressYc4FTQS = await ControllerNvSqUAv.setConverter.call(addresswrX5gMs, addressFejKnhf, addresswTHFO4, {from: accounts[3]});

		await expect(ControllerNvSqUAv.inCaseTokensGetStuck.call(addressl4gNv5M, uintxWf54HI, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressnPrXZqE = accounts[4]
		const ControllerAcHmd5i = await Controller.new(addressnPrXZqE, {from: accounts[2]});
		const addressCu41TPn = accounts[4]
		const addressC4Zztgd = accounts[3]
		const addressefnwsC = accounts[0]
		const addressyyTldxs = accounts[4]
		const uintDiWlYVk = BigInt("687")
		const addresssR8vAW = accounts[1]
		const addressoJBGq6s = accounts[3]
		const uintH7XY6YT = BigInt("1115")
		const uintqgWbN4 = BigInt("1500")
		const addresskSkjigD = accounts[3]
//		const addressE2UpMEz = await ControllerAcHmd5i.inCaseStrategyTokenGetStuck.call(addressC4Zztgd, addressCu41TPn, {from: accounts[3]});
//		const addressThvfNfL = await ControllerAcHmd5i.setStrategy.call(addressyyTldxs, addressefnwsC, {from: accounts[1]});
//		const uintLnGvKh = await ControllerAcHmd5i.getExpectedReturn.call(addressoJBGq6s, addresssR8vAW, uintDiWlYVk, {from: accounts[0]});
//		const uintkPuCvxz = await ControllerAcHmd5i.setSplit.call(uintH7XY6YT, {from: accounts[0]});
//		const addressve6diYu = await ControllerAcHmd5i.inCaseTokensGetStuck.call(addresskSkjigD, uintqgWbN4, {from: accounts[4]});

		await expect(ControllerAcHmd5i.inCaseStrategyTokenGetStuck.call(addressC4Zztgd, addressCu41TPn, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressMOIH1LA = accounts[4]
		const ControllerAcHmd5i = await Controller.new(addressMOIH1LA, {from: accounts[2]});
		const addressLf7VAM = accounts[1]
		const addressVgSquHV = accounts[0]
		const addressyOzICbt = accounts[4]
		const uintQkhpNtE = BigInt("687")
		const addressNtLlXua = accounts[1]
		const addressimpKGjr = accounts[3]
		const uintHiDliGi = BigInt("1308")
		const uintCEGfthV = BigInt("1500")
		const addressbCay3z = accounts[3]
//		const addressX1VdYEj = await ControllerAcHmd5i.setOneSplit.call(addressLf7VAM, {from: accounts[0]});
//		const addressThvfNfL = await ControllerAcHmd5i.setStrategy.call(addressyOzICbt, addressVgSquHV, {from: accounts[1]});
//		const uintLnGvKh = await ControllerAcHmd5i.getExpectedReturn.call(addressimpKGjr, addressNtLlXua, uintQkhpNtE, {from: accounts[0]});
//		const uintkPuCvxz = await ControllerAcHmd5i.setSplit.call(uintHiDliGi, {from: accounts[0]});
//		const addressve6diYu = await ControllerAcHmd5i.inCaseTokensGetStuck.call(addressbCay3z, uintCEGfthV, {from: accounts[4]});

		await expect(ControllerAcHmd5i.setOneSplit.call(addressLf7VAM, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressvO0Lc7w = accounts[1]
		const ControllerrgkOLl1 = await Controller.new(addressvO0Lc7w, {from: accounts[1]});
		const uintMu5sn5c = BigInt("1345")
		const addressO8O7r7M = accounts[3]
		const addressacc32x2 = accounts[0]
		const addressuHLH9o9 = accounts[5]
		const addressmNAeKm = accounts[4]
		const uinthXcfwA = BigInt("572")
		const addressBpa1O8 = accounts[0]
//		const addressgu7mBQo = await ControllerrgkOLl1.yearn.call(addressacc32x2, addressO8O7r7M, uintMu5sn5c, {from: accounts[3]});
//		const addressASjpKr = await ControllerrgkOLl1.approveStrategy.call(addressmNAeKm, addressuHLH9o9, {from: accounts[0]});
//		const addresslugpBz9 = await ControllerrgkOLl1.inCaseTokensGetStuck.call(addressBpa1O8, uinthXcfwA, {from: accounts[0]});

		await expect(ControllerrgkOLl1.yearn.call(addressacc32x2, addressO8O7r7M, uintMu5sn5c, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addresswd3jDyD = accounts[4]
		const ControllerNvSqUAv = await Controller.new(addresswd3jDyD, {from: accounts[2]});
		const addresszrXDUZB = "0x0000000000000000000000000000000000000001"
		const addressME3dokt = accounts[0]
//		const addresszxjs5td = await ControllerNvSqUAv.withdrawAll.call(addresszrXDUZB, {from: accounts[0]});
//		const addresslZ9ynXJ = await ControllerNvSqUAv.setGovernance.call(addressME3dokt, {from: accounts[2]});

		await expect(ControllerNvSqUAv.withdrawAll.call(addresszrXDUZB, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressqjPJH7P = accounts[4]
		const ControllerNvSqUAv = await Controller.new(addressqjPJH7P, {from: accounts[2]});
		const uintgk6HQ0G = BigInt("1470")
		const addressjqIYdR1 = accounts[1]
		const addressuMvIgXX = accounts[1]
		const addressxPyGTbb = accounts[1]
		const addresstszalXc = accounts[3]
		const addressf1qY0wk = accounts[0]
		const addressATGyzfd = accounts[0]
//		const addressDQkgtx = await ControllerNvSqUAv.withdraw.call(addressjqIYdR1, uintgk6HQ0G, {from: accounts[5]});
//		const addressKNP46Kx = await ControllerNvSqUAv.setStrategy.call(addressxPyGTbb, addressuMvIgXX, {from: accounts[0]});
//		const addressYc4FTQS = await ControllerNvSqUAv.setConverter.call(addressATGyzfd, addressf1qY0wk, addresstszalXc, {from: accounts[3]});

		await expect(ControllerNvSqUAv.withdraw.call(addressjqIYdR1, uintgk6HQ0G, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressroKvGPj = accounts[1]
		const ControllerrgkOLl1 = await Controller.new(addressroKvGPj, {from: accounts[1]});
		const addressaEVCj4o = accounts[5]
		const addressmf4tl58 = accounts[4]
		const uintPzTEMFL = BigInt("572")
		const addressjDlfNyU = accounts[0]
//		const addressASjpKr = await ControllerrgkOLl1.approveStrategy.call(addressmf4tl58, addressaEVCj4o, {from: accounts[0]});
//		const addresslugpBz9 = await ControllerrgkOLl1.inCaseTokensGetStuck.call(addressjDlfNyU, uintPzTEMFL, {from: accounts[0]});

		await expect(ControllerrgkOLl1.approveStrategy.call(addressmf4tl58, addressaEVCj4o, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressJ0MzBmR = accounts[1]
		const ControllerCBwrkei = await Controller.new(addressJ0MzBmR, {from: accounts[3]});
		const addressGIXl3pr = accounts[4]
		const addressyK4OKHd = accounts[3]
		const addressCfK53iQ = accounts[3]
		const addressbKXeykZ = "0x0000000000000000000000000000000000000001"
		const uintZCKP00y = BigInt("524")
		const addressArebDUb = accounts[4]
//		const addressa0Unpho = await ControllerCBwrkei.setStrategy.call(addressyK4OKHd, addressGIXl3pr, {from: accounts[3]});
//		const addressfCTmbEe = await ControllerCBwrkei.setStrategy.call(addressbKXeykZ, addressCfK53iQ, {from: accounts[5]});
//		const addressXE1ISEB = await ControllerCBwrkei.withdraw.call(addressArebDUb, uintZCKP00y, {from: accounts[1]});

		await expect(ControllerCBwrkei.setStrategy.call(addressyK4OKHd, addressGIXl3pr, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressMn6Bav = accounts[1]
		const ControllerrgkOLl1 = await Controller.new(addressMn6Bav, {from: accounts[1]});
		const addressJC6MlzU = "0x0000000000000000000000000000000000000001"
		const addressy9visH = accounts[3]
		const uintMlG4qEL = BigInt("913")
		const addressdtwQWc5 = accounts[1]
		const addresshaCtA8l = accounts[0]
		const uintHQYWkBg = BigInt("1345")
		const addressBR0oA2J = accounts[4]
		const addressjmCCyBM = accounts[0]
		const addresspnSiv0m = accounts[4]
		const addressCLKlS51 = accounts[5]
		const addressnZDzvMC = accounts[4]
		const addressMuYt4b4 = accounts[1]
		const addressz8DuDq = accounts[0]
		const uinteGuLUVL = BigInt("572")
		const addressB9zSqm0 = accounts[0]
//		const addressnYHAzby = await ControllerrgkOLl1.revokeStrategy.call(addressy9visH, addressJC6MlzU, {from: accounts[4]});
//		const addressymSIUtx = await ControllerrgkOLl1.yearn.call(addresshaCtA8l, addressdtwQWc5, uintMlG4qEL, {from: accounts[4]});
//		const addressgu7mBQo = await ControllerrgkOLl1.yearn.call(addressjmCCyBM, addressBR0oA2J, uintHQYWkBg, {from: accounts[3]});
//		const addressXHFNKvL = await ControllerrgkOLl1.setGovernance.call(addresspnSiv0m, {from: accounts[4]});
//		const addressASjpKr = await ControllerrgkOLl1.approveStrategy.call(addressnZDzvMC, addressCLKlS51, {from: accounts[0]});
//		const addressUU8zWZu = await ControllerrgkOLl1.inCaseStrategyTokenGetStuck.call(addressz8DuDq, addressMuYt4b4, {from: accounts[4]});
//		const addresslugpBz9 = await ControllerrgkOLl1.inCaseTokensGetStuck.call(addressB9zSqm0, uinteGuLUVL, {from: accounts[0]});

		await expect(ControllerrgkOLl1.revokeStrategy.call(addressy9visH, addressJC6MlzU, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressycqEwJ5 = accounts[1]
		const ControllerCBwrkei = await Controller.new(addressycqEwJ5, {from: accounts[3]});
		const addressC4z3WYf = "0x0000000000000000000000000000000000000001"
		const uintc2vX4x = BigInt("555")
		const addressXtVP4aJ = accounts[3]
		const addressv21riV5 = accounts[3]
		const addresscptdzCZ = accounts[5]
		const addressXJzotr = accounts[4]
//		const addresshXDsaPJ = await ControllerCBwrkei.setRewards.call(addressC4z3WYf, {from: accounts[5]});
//		const uintuf5G1vH = await ControllerCBwrkei.getExpectedReturn.call(addressv21riV5, addressXtVP4aJ, uintc2vX4x, {from: accounts[0]});
//		const addressa0Unpho = await ControllerCBwrkei.setStrategy.call(addressXJzotr, addresscptdzCZ, {from: accounts[3]});

		await expect(ControllerCBwrkei.setRewards.call(addressC4z3WYf, {from: accounts[5]})).to.be.rejectedWith(Error);
	});
})