const afiController = artifacts.require("afiController");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('afiController', (accounts) => {
	it('test for afiController', async () => {
		const addressvDSSscd = accounts[1]
		const afiControllerL9a5TuP = await afiController.new(addressvDSSscd, {from: accounts[1]});
		const addressOqDc9dr = accounts[0]
		const uintMFIVfc4 = BigInt("320")
		const addressDWXJ92p = accounts[0]
		const addressdr0R52r = accounts[0]
		const uinthXqpqo = BigInt("1936")
		const addressgDlwqBh = accounts[3]
		const addressq1sWr0m = accounts[0]
		const addressYUMh0KK = await afiControllerL9a5TuP.setOneSplit.call(addressOqDc9dr, {from: accounts[2]});
		const addressmfYGnX = await afiControllerL9a5TuP.inCaseTokensGetStuck.call(addressDWXJ92p, uintMFIVfc4, {from: accounts[2]});
		const addresstSFHEQ = await afiControllerL9a5TuP.setGovernance.call(addressdr0R52r, {from: accounts[0]});
		const addressQcjIMVj = await afiControllerL9a5TuP.yearn.call(addressq1sWr0m, addressgDlwqBh, uinthXqpqo, {from: accounts[2]});

		await expect(afiControllerL9a5TuP.setOneSplit.call(addressOqDc9dr, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addresssdCYLL1 = accounts[4]
		const afiControllerFAHEX4 = await afiController.new(addresssdCYLL1, {from: accounts[3]});
		const uintlTzXw5n = BigInt("128")
		const addressatS2Wz = "0x0000000000000000000000000000000000000001"
		const addressp0yRJn3 = accounts[3]
		const addresse2Z4mN7 = "0x0000000000000000000000000000000000000001"
		const addressCUlHrwZ = accounts[0]
		const addressx74rJF = accounts[0]
		const addressR7kF1zw = accounts[0]
		const uintNXhJVvb = BigInt("857")
		const addressbbR5dZ7 = accounts[0]
		const addressBoQxUBx = accounts[3]
		const uintw9qvPHS = BigInt("768")
		const uintHCz8aLG = await afiControllerFAHEX4.getExpectedReturn.call(addressp0yRJn3, addressatS2Wz, uintlTzXw5n, {from: accounts[4]});
		const addressGXmFCvS = await afiControllerFAHEX4.revokeStrategy.call(addressCUlHrwZ, addresse2Z4mN7, {from: accounts[1]});
		const addresszpXy0YJ = await afiControllerFAHEX4.setVault.call(addressR7kF1zw, addressx74rJF, {from: "0x0000000000000000000000000000000000000001"});
		const uintVGaVj3S = await afiControllerFAHEX4.getExpectedReturn.call(addressBoQxUBx, addressbbR5dZ7, uintNXhJVvb, {from: accounts[4]});
		const uinthuhtszX = await afiControllerFAHEX4.setSplit.call(uintw9qvPHS, {from: accounts[2]});

		await expect(afiControllerFAHEX4.getExpectedReturn.call(addressp0yRJn3, addressatS2Wz, uintlTzXw5n, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addresshjZqiX7 = accounts[0]
		const afiControllerx3Fcbh3 = await afiController.new(addresshjZqiX7, {from: accounts[1]});
		const uinta4MqCy = BigInt("1334")
		const addressuWzkpFv = accounts[1]
		const uintOmc6Q71 = BigInt("403")
		const addressISphVsk = accounts[2]
		const addressm6aykkZ = accounts[3]
		const addressZOviySr = accounts[0]
		const uintePAJIOz = BigInt("161")
		const addressTql19gO = "0x0000000000000000000000000000000000000001"
		const addressi5GGjh = accounts[4]
		const addressk5zcTV = await afiControllerx3Fcbh3.inCaseTokensGetStuck.call(addressuWzkpFv, uinta4MqCy, {from: accounts[0]});
		const uintqI51tyg = await afiControllerx3Fcbh3.setSplit.call(uintOmc6Q71, {from: accounts[4]});
		const addressyXQ7qy = await afiControllerx3Fcbh3.setStrategist.call(addressISphVsk, {from: accounts[1]});
		const addressgxgN85o = await afiControllerx3Fcbh3.setVault.call(addressZOviySr, addressm6aykkZ, {from: accounts[5]});
		const addresswYATwAl = await afiControllerx3Fcbh3.yearn.call(addressi5GGjh, addressTql19gO, uintePAJIOz, {from: accounts[0]});

		await expect(afiControllerx3Fcbh3.inCaseTokensGetStuck.call(addressuWzkpFv, uinta4MqCy, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addresso6WVmRF = accounts[2]
		const afiControllersKCD7kg = await afiController.new(addresso6WVmRF, {from: "0x0000000000000000000000000000000000000001"});
		const addressyqGh4S = accounts[0]
		const addressK0ZaxmF = accounts[0]
		const addressTlp7ZjK = "0x0000000000000000000000000000000000000001"
		const addresspVirs2H = accounts[0]
		const addressWNEcOGc = accounts[2]
		const addressieTa5eA = accounts[0]
		const addressl8M9AGa = accounts[1]
		const addresshgoaO8 = accounts[5]
		const addressKcSdVp = accounts[4]
		const addressj7oPoz = await afiControllersKCD7kg.setStrategy.call(addressK0ZaxmF, addressyqGh4S, {from: accounts[0]});
		const addressE71UzK8 = await afiControllersKCD7kg.approveStrategy.call(addresspVirs2H, addressTlp7ZjK, {from: accounts[1]});
		const addressx1NzvKl = await afiControllersKCD7kg.approveStrategy.call(addressieTa5eA, addressWNEcOGc, {from: accounts[3]});
		const addressGSUQ5P1 = await afiControllersKCD7kg.setConverter.call(addressKcSdVp, addresshgoaO8, addressl8M9AGa, {from: accounts[3]});
	});

	it('test for afiController', async () => {
		const addressDrBdnKX = accounts[4]
		const afiControllerZVISNHK = await afiController.new(addressDrBdnKX, {from: accounts[3]});
		const addressvvgoBX6 = accounts[0]
		const addressgE8c4Rg = accounts[3]
		const uintzMbitRA = BigInt("1088")
		const addressF86rOj4 = "0x0000000000000000000000000000000000000001"
		const addressWZbJfOQ = accounts[2]
		const addressDsMkd3k = accounts[1]
		const addressgFvy1c9 = accounts[0]
		const addressCUZ85Si = accounts[5]
		const addresskt8H4VI = await afiControllerZVISNHK.inCaseStrategyTokenGetStuck.call(addressgE8c4Rg, addressvvgoBX6, {from: accounts[2]});
		const addressaZ6xWdP = await afiControllerZVISNHK.yearn.call(addressWZbJfOQ, addressF86rOj4, uintzMbitRA, {from: accounts[2]});
		const addresstB9omkw = await afiControllerZVISNHK.setVault.call(addressgFvy1c9, addressDsMkd3k, {from: accounts[2]});
		const addressiFCTDwO = await afiControllerZVISNHK.setStrategist.call(addressCUZ85Si, {from: accounts[1]});

		await expect(afiControllerZVISNHK.inCaseStrategyTokenGetStuck.call(addressgE8c4Rg, addressvvgoBX6, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressTpYGSgT = accounts[4]
		const afiControllerV4KIP2J = await afiController.new(addressTpYGSgT, {from: accounts[1]});
		const addressBLrkiVi = accounts[5]
		const addressZdxPlDm = accounts[4]
		const addresssbEQL6j = "0x0000000000000000000000000000000000000001"
		const uintytMLlFN = BigInt("138")
		const addresstQgfLmI = accounts[1]
		const uintSWmHVr = await afiControllerV4KIP2J.balanceOf.call(addressBLrkiVi, {from: "0x0000000000000000000000000000000000000001"});
		const addressXNlmMap = await afiControllerV4KIP2J.inCaseStrategyTokenGetStuck.call(addresssbEQL6j, addressZdxPlDm, {from: accounts[2]});
		const addressgGB3Rtj = await afiControllerV4KIP2J.inCaseTokensGetStuck.call(addresstQgfLmI, uintytMLlFN, {from: accounts[1]});

		await expect(afiControllerV4KIP2J.balanceOf.call(addressBLrkiVi, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addresspyQTRHu = accounts[2]
		const afiControllercsk66Hc = await afiController.new(addresspyQTRHu, {from: accounts[1]});
		const addressq04AH38 = accounts[0]
		const addressjJjEkzk = accounts[3]
		const uintpsB1XI = BigInt("710")
		const addressxS7xedo = accounts[2]
		const addressSjDZGq = accounts[1]
		const addressSJvYPr3 = accounts[0]
		const addressPKxwDA0 = accounts[2]
		const uinteEFCsOE = BigInt("243")
		const addressv82C4zP = accounts[2]
		const addressu9OOEs = await afiControllercsk66Hc.setStrategist.call(addressq04AH38, {from: accounts[2]});
		const addressKblu5TS = await afiControllercsk66Hc.withdrawAll.call(addressjJjEkzk, {from: accounts[4]});
		const addressSc9EisG = await afiControllercsk66Hc.yearn.call(addressSjDZGq, addressxS7xedo, uintpsB1XI, {from: accounts[3]});
		const addressHE39Coo = await afiControllercsk66Hc.setVault.call(addressPKxwDA0, addressSJvYPr3, {from: accounts[0]});
		const addressP3RlO4s = await afiControllercsk66Hc.earn.call(addressv82C4zP, uinteEFCsOE, {from: accounts[3]});

		await expect(afiControllercsk66Hc.setStrategist.call(addressq04AH38, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressuXgbxc = accounts[4]
		const afiControllerAIQWmo = await afiController.new(addressuXgbxc, {from: accounts[1]});
		const addressAFBc5yP = accounts[0]
		const addressvdTKy17 = accounts[1]
		const addressMyCHwVu = "0x0000000000000000000000000000000000000001"
		const addressaQeOs7 = accounts[2]
		const addressURgDizK = accounts[4]
		const address0ovVm1 = await afiControllerAIQWmo.setStrategy.call(addressvdTKy17, addressAFBc5yP, {from: accounts[0]});
		const addressMNsj6T1 = await afiControllerAIQWmo.setOneSplit.call(addressMyCHwVu, {from: accounts[4]});
		const addressCQJMTmx = await afiControllerAIQWmo.withdrawAll.call(addressaQeOs7, {from: accounts[0]});
		const address04ALfw = await afiControllerAIQWmo.setGovernance.call(addressURgDizK, {from: accounts[1]});

		await expect(afiControllerAIQWmo.setStrategy.call(addressvdTKy17, addressAFBc5yP, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressBcaiseR = accounts[2]
		const afiControllercsk66Hc = await afiController.new(addressBcaiseR, {from: accounts[1]});
		const addressmcRwqn = accounts[0]
		const addressoVUByZs = accounts[0]
		const addressWDIk6qU = accounts[1]
		const addressaM98YqY = accounts[3]
		const addresswlfAO0p = accounts[4]
		const addressgZlF5aD = accounts[0]
		const uintuEJPdVV = BigInt("710")
		const addressLvAwLYQ = accounts[2]
		const addressKk3sept = accounts[1]
		const addressShOlXJm = accounts[0]
		const addressBOTlsEW = accounts[2]
		const uintySjQ7oi = BigInt("243")
		const addressaH6gMoZ = accounts[2]
		const addressgJZvvd0 = await afiControllercsk66Hc.setVault.call(addressoVUByZs, addressmcRwqn, {from: accounts[3]});
		const addressu9OOEs = await afiControllercsk66Hc.setStrategist.call(addressWDIk6qU, {from: accounts[2]});
		const addressKblu5TS = await afiControllercsk66Hc.withdrawAll.call(addressaM98YqY, {from: accounts[4]});
		const addressyhbR9sf = await afiControllercsk66Hc.approveStrategy.call(addressgZlF5aD, addresswlfAO0p, {from: accounts[1]});
		const addressSc9EisG = await afiControllercsk66Hc.yearn.call(addressKk3sept, addressLvAwLYQ, uintuEJPdVV, {from: accounts[3]});
		const addressHE39Coo = await afiControllercsk66Hc.setVault.call(addressBOTlsEW, addressShOlXJm, {from: accounts[0]});
		const addressP3RlO4s = await afiControllercsk66Hc.earn.call(addressaH6gMoZ, uintySjQ7oi, {from: accounts[3]});

		await expect(afiControllercsk66Hc.setVault.call(addressoVUByZs, addressmcRwqn, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressTSxs51 = accounts[4]
		const afiControllerFAHEX4 = await afiController.new(addressTSxs51, {from: accounts[3]});
		const addressoocoTKJ = accounts[3]
		const uintSUi6FR = BigInt("128")
		const addressXIft4Lw = "0x0000000000000000000000000000000000000001"
		const addressFpyzqG = accounts[1]
		const addresskzxbkvt = accounts[0]
		const addressfJC8ynd = accounts[3]
		const addressrHRHNR7 = accounts[1]
		const uintvJMYLW9 = BigInt("161")
		const addressJgx3PUD = accounts[2]
		const addressjXBCSh7 = accounts[2]
		const addressjZjBr2O = "0x0000000000000000000000000000000000000001"
		const addressitQLRck = accounts[1]
		const addressDa8BNyF = accounts[0]
		const addressijnZua = accounts[0]
		const uintkoj5weS = BigInt("857")
		const addressuNQjUr = accounts[0]
		const addressp0Dpqsa = accounts[3]
		const uinteNSYpLv = BigInt("768")
		const addressdvnXW7Y = await afiControllerFAHEX4.withdrawAll.call(addressoocoTKJ, {from: accounts[4]});
		const uintHCz8aLG = await afiControllerFAHEX4.getExpectedReturn.call(addressFpyzqG, addressXIft4Lw, uintSUi6FR, {from: accounts[4]});
		const addressM7qb7m = await afiControllerFAHEX4.setConverter.call(addressrHRHNR7, addressfJC8ynd, addresskzxbkvt, {from: accounts[4]});
		const uintuSAsEmU = await afiControllerFAHEX4.getExpectedReturn.call(addressjXBCSh7, addressJgx3PUD, uintvJMYLW9, {from: accounts[2]});
		const addressGXmFCvS = await afiControllerFAHEX4.revokeStrategy.call(addressitQLRck, addressjZjBr2O, {from: accounts[1]});
		const addresszpXy0YJ = await afiControllerFAHEX4.setVault.call(addressijnZua, addressDa8BNyF, {from: "0x0000000000000000000000000000000000000001"});
		const uintVGaVj3S = await afiControllerFAHEX4.getExpectedReturn.call(addressp0Dpqsa, addressuNQjUr, uintkoj5weS, {from: accounts[4]});
		const uinthuhtszX = await afiControllerFAHEX4.setSplit.call(uinteNSYpLv, {from: accounts[2]});

		await expect(afiControllerFAHEX4.withdrawAll.call(addressoocoTKJ, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressJACcTnI = accounts[0]
		const afiControllerUv1VFV = await afiController.new(addressJACcTnI, {from: accounts[4]});
		const uintkEzFYqy = BigInt("924")
		const uinty95megm = BigInt("121")
		const addressPQR6eVl = accounts[5]
		const addressjiKrYKz = accounts[4]
		const addressH4rhRyh = accounts[1]
		const addressaF4a561 = accounts[0]
		const addresskANCvq = accounts[2]
		const addressVJSlBTI = accounts[5]
		const addressaRVHMT = accounts[4]
		const addressvuiZCj = accounts[0]
		const uintupBPr2g = await afiControllerUv1VFV.setSplit.call(uintkEzFYqy, {from: accounts[2]});
		const addressayGDnrQ = await afiControllerUv1VFV.earn.call(addressPQR6eVl, uinty95megm, {from: accounts[4]});
		const addressMyquJ93 = await afiControllerUv1VFV.setStrategy.call(addressH4rhRyh, addressjiKrYKz, {from: accounts[1]});
		const addresseN6Wx03 = await afiControllerUv1VFV.setConverter.call(addressVJSlBTI, addresskANCvq, addressaF4a561, {from: accounts[0]});
		const addressxccx8mp = await afiControllerUv1VFV.setStrategy.call(addressvuiZCj, addressaRVHMT, {from: accounts[2]});

		await expect(afiControllerUv1VFV.setSplit.call(uintkEzFYqy, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressQkq7vvi = accounts[4]
		const afiControllerZVISNHK = await afiController.new(addressQkq7vvi, {from: accounts[3]});
		const uintRWPdBK1 = BigInt("1088")
		const addressDjVnp6S = "0x0000000000000000000000000000000000000001"
		const addresshMYN06P = accounts[2]
		const addresskFxamHv = accounts[1]
		const addressWAspdyl = accounts[1]
		const addressfG6NCc = accounts[5]
		const addressaZ6xWdP = await afiControllerZVISNHK.yearn.call(addresshMYN06P, addressDjVnp6S, uintRWPdBK1, {from: accounts[2]});
		const addresstB9omkw = await afiControllerZVISNHK.setVault.call(addressWAspdyl, addresskFxamHv, {from: accounts[2]});
		const addressiFCTDwO = await afiControllerZVISNHK.setStrategist.call(addressfG6NCc, {from: accounts[1]});

		await expect(afiControllerZVISNHK.yearn.call(addresshMYN06P, addressDjVnp6S, uintRWPdBK1, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressft8YoR = accounts[1]
		const afiControllerkAZopWW = await afiController.new(addressft8YoR, {from: accounts[4]});
		const addressLFoU11E = accounts[3]
		const addressk20dbds = accounts[4]
		const addressqnOtchE = accounts[0]
		const addresstFNM0MJ = accounts[4]
		const addressYGOqECf = accounts[1]
		const addresslqLrQYB = accounts[4]
		const addressWXhEOwj = accounts[0]
		const addressxidgaBH = accounts[4]
		const addressJojQIC8 = await afiControllerkAZopWW.setConverter.call(addressqnOtchE, addressk20dbds, addressLFoU11E, {from: accounts[1]});
		const uintGh4M9tG = await afiControllerkAZopWW.balanceOf.call(addresstFNM0MJ, {from: accounts[4]});
		const addressX4lA8Wt = await afiControllerkAZopWW.setStrategist.call(addressYGOqECf, {from: accounts[1]});
		const addressKL4lKe = await afiControllerkAZopWW.setStrategy.call(addressWXhEOwj, addresslqLrQYB, {from: accounts[4]});
		const uintu22sa8D = await afiControllerkAZopWW.balanceOf.call(addressxidgaBH, {from: accounts[4]});

		await expect(afiControllerkAZopWW.setConverter.call(addressqnOtchE, addressk20dbds, addressLFoU11E, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressJ3DVzTQ = accounts[4]
		const afiControllerV4KIP2J = await afiController.new(addressJ3DVzTQ, {from: accounts[1]});
		const uintvQ45MsI = BigInt("138")
		const addresshHC3ZJT = accounts[2]
		const addressgGB3Rtj = await afiControllerV4KIP2J.inCaseTokensGetStuck.call(addresshHC3ZJT, uintvQ45MsI, {from: accounts[1]});

		await expect(afiControllerV4KIP2J.inCaseTokensGetStuck.call(addresshHC3ZJT, uintvQ45MsI, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressMvsCrEw = accounts[4]
		const afiControllerZVISNHK = await afiController.new(addressMvsCrEw, {from: accounts[3]});
		const addressJBAMLw = accounts[4]
		const addressUaq9Gvg = accounts[5]
		const uintN6YgRVw = BigInt("1088")
		const addressS5Q7kR8 = "0x0000000000000000000000000000000000000002"
		const addressIQnY9T = accounts[4]
		const uintSdKPQVg = BigInt("142")
		const addresseDoGES = accounts[3]
		const addresss5vktoX = accounts[1]
		const uintIGLpDQp = BigInt("739")
		const addressxpPb5A = accounts[1]
		const addressV14LyW9 = accounts[2]
		const addressfr1rPYg = await afiControllerZVISNHK.approveStrategy.call(addressUaq9Gvg, addressJBAMLw, {from: accounts[4]});
		const addressaZ6xWdP = await afiControllerZVISNHK.yearn.call(addressIQnY9T, addressS5Q7kR8, uintN6YgRVw, {from: accounts[2]});
		const uintqHBhBuZ = await afiControllerZVISNHK.getExpectedReturn.call(addresss5vktoX, addresseDoGES, uintSdKPQVg, {from: accounts[4]});
		const uintDgDTxns = await afiControllerZVISNHK.setSplit.call(uintIGLpDQp, {from: accounts[2]});
		const addresstB9omkw = await afiControllerZVISNHK.setVault.call(addressV14LyW9, addressxpPb5A, {from: accounts[2]});

		await expect(afiControllerZVISNHK.approveStrategy.call(addressUaq9Gvg, addressJBAMLw, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressRJkgpL1 = accounts[4]
		const afiControllerZVISNHK = await afiController.new(addressRJkgpL1, {from: accounts[3]});
		const addressEpRjhlm = accounts[4]
		const addressllBG6va = accounts[3]
		const uintb52E0ck = BigInt("1128")
		const addressONkDwyR = "0x0000000000000000000000000000000000000001"
		const addressc35kMrg = accounts[2]
		const addressuPjvsZy = accounts[5]
		const addressxntdSbh = accounts[1]
		const addressRs0Jpaq = accounts[1]
		const addressL9bMSoc = accounts[0]
		const addressodqbess = accounts[0]
		const addressfZBG96F = await afiControllerZVISNHK.revokeStrategy.call(addressllBG6va, addressEpRjhlm, {from: accounts[4]});
		const addressaZ6xWdP = await afiControllerZVISNHK.yearn.call(addressc35kMrg, addressONkDwyR, uintb52E0ck, {from: accounts[2]});
		const addressXxFQvVF = await afiControllerZVISNHK.setRewards.call(addressuPjvsZy, {from: accounts[1]});
		const addresstB9omkw = await afiControllerZVISNHK.setVault.call(addressRs0Jpaq, addressxntdSbh, {from: accounts[2]});
		const addressPglg87l = await afiControllerZVISNHK.inCaseStrategyTokenGetStuck.call(addressodqbess, addressL9bMSoc, {from: accounts[1]});

		await expect(afiControllerZVISNHK.revokeStrategy.call(addressllBG6va, addressEpRjhlm, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressoYX2gGA = accounts[4]
		const afiControllerV4KIP2J = await afiController.new(addressoYX2gGA, {from: accounts[1]});
		const uintWTUQLfm = BigInt("70")
		const addressJnxzKF = accounts[3]
		const uintxIpMmL2 = BigInt("138")
		const addresstGS3E2L = accounts[4]
		const uintLGZZMVl = BigInt("1144")
		const addressHmbevG = await afiControllerV4KIP2J.earn.call(addressJnxzKF, uintWTUQLfm, {from: accounts[0]});
		const addressgGB3Rtj = await afiControllerV4KIP2J.inCaseTokensGetStuck.call(addresstGS3E2L, uintxIpMmL2, {from: accounts[1]});
		const uintYIJtSR = await afiControllerV4KIP2J.setSplit.call(uintLGZZMVl, {from: "0x0000000000000000000000000000000000000001"});

		await expect(afiControllerV4KIP2J.earn.call(addressJnxzKF, uintWTUQLfm, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressjYJlUUZ = accounts[0]
		const afiControllerUaIjPT9 = await afiController.new(addressjYJlUUZ, {from: accounts[1]});
		const address5Ylx4q = accounts[2]
		const addressskq9hfH = accounts[2]
		const addressldIlCAp = accounts[1]
		const addresszsCPsr = "0x0000000000000000000000000000000000000001"
		const addresstiou5jY = accounts[1]
		const address9SoE4h = accounts[4]
		const uintevA1njA = BigInt("557")
		const addressft0unYT = "0x0000000000000000000000000000000000000001"
		const addressAmt84uY = accounts[4]
		const addressbQOwAoa = accounts[3]
		const addressUhkDoec = await afiControllerUaIjPT9.setRewards.call(address5Ylx4q, {from: accounts[5]});
		const uintF4a9Aan = await afiControllerUaIjPT9.balanceOf.call(addressskq9hfH, {from: accounts[5]});
		const addressrFxBL2 = await afiControllerUaIjPT9.approveStrategy.call(addresszsCPsr, addressldIlCAp, {from: "0x0000000000000000000000000000000000000001"});
		const addresseNkC4a6 = await afiControllerUaIjPT9.setStrategy.call(address9SoE4h, addresstiou5jY, {from: accounts[1]});
		const addressgLulcHe = await afiControllerUaIjPT9.inCaseTokensGetStuck.call(addressft0unYT, uintevA1njA, {from: accounts[1]});
		const addressjYkx9GM = await afiControllerUaIjPT9.inCaseStrategyTokenGetStuck.call(addressbQOwAoa, addressAmt84uY, {from: accounts[2]});

		await expect(afiControllerUaIjPT9.setRewards.call(address5Ylx4q, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressoldefoa = accounts[3]
		const afiControllerLeJNOHS = await afiController.new(addressoldefoa, {from: accounts[1]});
		const addressfHDFpep = accounts[1]
		const addressqtDXQUr = accounts[1]
		const addressbnMvgN3 = accounts[2]
		const addressjWcdKjV = accounts[0]
		const addressI7nX3Pe = "0x0000000000000000000000000000000000000001"
		const addresstrueG0f = accounts[3]
		const addresstdCZSvk = accounts[0]
		const addressKzwfoQe = await afiControllerLeJNOHS.setStrategy.call(addressqtDXQUr, addressfHDFpep, {from: accounts[1]});
		const addressu3Ke97w = await afiControllerLeJNOHS.setStrategist.call(addressbnMvgN3, {from: accounts[4]});
		const addressBEU3E1v = await afiControllerLeJNOHS.setOneSplit.call(addressjWcdKjV, {from: accounts[0]});
		const addressZajs36Y = await afiControllerLeJNOHS.setConverter.call(addresstdCZSvk, addresstrueG0f, addressI7nX3Pe, {from: accounts[2]});

		await expect(afiControllerLeJNOHS.setStrategy.call(addressqtDXQUr, addressfHDFpep, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressDCskmKL = accounts[4]
		const afiControllerV4KIP2J = await afiController.new(addressDCskmKL, {from: accounts[1]});
		const addressbB7r5rk = accounts[2]
		const addressQDEcejh = "0x0000000000000000000000000000000000000001"
		const addressCGrkxH0 = accounts[2]
		const uintKypLPf = BigInt("1893")
		const addressC3HJfBj = accounts[5]
		const uintPDBQYn = BigInt("138")
		const addressTVAIIBS = accounts[2]
		const addressT3FTsE6 = await afiControllerV4KIP2J.setGovernance.call(addressbB7r5rk, {from: accounts[2]});
		const addresseKMVK7n = await afiControllerV4KIP2J.approveStrategy.call(addressCGrkxH0, addressQDEcejh, {from: accounts[4]});
		const uinthcsnEBF = await afiControllerV4KIP2J.setSplit.call(uintKypLPf, {from: accounts[2]});
		const addressejVPoFU = await afiControllerV4KIP2J.withdrawAll.call(addressC3HJfBj, {from: accounts[2]});
		const addressgGB3Rtj = await afiControllerV4KIP2J.inCaseTokensGetStuck.call(addressTVAIIBS, uintPDBQYn, {from: accounts[1]});

		await expect(afiControllerV4KIP2J.setGovernance.call(addressbB7r5rk, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressMNJDqzd = accounts[3]
		const afiControllerfb7DlTt = await afiController.new(addressMNJDqzd, {from: accounts[0]});
		const uintPcodC8X = BigInt("1861")
		const addressGoVbVn = accounts[3]
		const uintIuk74G = BigInt("1508")
		const addressTakHnvW = accounts[1]
		const uintndi3Oh = BigInt("700")
		const addressfY0LKsR = accounts[0]
		const addresspFANqcO = accounts[3]
		const addressM3Zxvl = accounts[0]
		const addresssFjU2wF = accounts[3]
		const addressUKaAeWF = accounts[4]
		const addressRAzhSea = await afiControllerfb7DlTt.withdraw.call(addressGoVbVn, uintPcodC8X, {from: accounts[3]});
		const addressOEF36vJ = await afiControllerfb7DlTt.withdraw.call(addressTakHnvW, uintIuk74G, {from: accounts[3]});
		const addressylGRCG4 = await afiControllerfb7DlTt.earn.call(addressfY0LKsR, uintndi3Oh, {from: accounts[1]});
		const uintoaCXNWU = await afiControllerfb7DlTt.balanceOf.call(addresspFANqcO, {from: accounts[2]});
		const addressKMWh7tq = await afiControllerfb7DlTt.setStrategy.call(addresssFjU2wF, addressM3Zxvl, {from: accounts[0]});
		const addressKb9GyJO = await afiControllerfb7DlTt.setGovernance.call(addressUKaAeWF, {from: accounts[1]});

		await expect(afiControllerfb7DlTt.withdraw.call(addressGoVbVn, uintPcodC8X, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})