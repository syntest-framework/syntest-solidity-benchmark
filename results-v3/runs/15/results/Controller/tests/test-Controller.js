const Controller = artifacts.require("Controller");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Controller', (accounts) => {
	it('test for Controller', async () => {
		const addressQaxNppU = accounts[3]
		const ControllerAB7UzBv = await Controller.new(addressQaxNppU, {from: accounts[5]});
		const addressnAfqzLL = accounts[4]
		const addresslnq0qnn = accounts[2]
		const uint8uWT2d = BigInt("1524")
		const addressmKrpKw5 = accounts[4]
		const addresssWwMYAd = await ControllerAB7UzBv.revokeStrategy.call(addresslnq0qnn, addressnAfqzLL, {from: accounts[0]});
		const addressyTcX0sy = await ControllerAB7UzBv.earn.call(addressmKrpKw5, uint8uWT2d, {from: accounts[3]});

		await expect(ControllerAB7UzBv.revokeStrategy.call(addresslnq0qnn, addressnAfqzLL, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressoL8XjUq = accounts[5]
		const ControllerEguXMJq = await Controller.new(addressoL8XjUq, {from: accounts[4]});
		const addressB8mRx30 = accounts[5]
		const addressrrUl0tw = accounts[3]
		const uintHQQCf6K = BigInt("1295")
		const addresssfQ0ehq = "0x0000000000000000000000000000000000000001"
		const uintofIKfVH = BigInt("862")
		const addresskzygXn5 = accounts[1]
		const addressXcqqMRE = await ControllerEguXMJq.withdrawAll.call(addressB8mRx30, {from: accounts[2]});
		const addressKgLTHzc = await ControllerEguXMJq.setRewards.call(addressrrUl0tw, {from: accounts[0]});
		const address9HwSEw = await ControllerEguXMJq.inCaseTokensGetStuck.call(addresssfQ0ehq, uintHQQCf6K, {from: accounts[5]});
		const addressmE7qX0R = await ControllerEguXMJq.earn.call(addresskzygXn5, uintofIKfVH, {from: accounts[0]});

		await expect(ControllerEguXMJq.withdrawAll.call(addressB8mRx30, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressilEvlKL = accounts[4]
		const ControllerCuUyMhP = await Controller.new(addressilEvlKL, {from: accounts[4]});
		const addressORKovKU = accounts[0]
		const addressPadsy8B = accounts[1]
		const addressnha9ymJ = accounts[3]
		const uintlNtj5P = BigInt("659")
		const addressIFTkKu = accounts[2]
		const addressiQ5K21O = accounts[0]
		const uintwgqFMaG = BigInt("463")
		const addressJTHi6yB = accounts[2]
		const addressibje8C = accounts[0]
		const addressgfp4Pcu = accounts[5]
		const addressSQQ7HBD = accounts[0]
		const addressnjSPTl = await ControllerCuUyMhP.setStrategist.call(addressORKovKU, {from: accounts[0]});
		const addressg7vdWLI = await ControllerCuUyMhP.approveStrategy.call(addressnha9ymJ, addressPadsy8B, {from: accounts[2]});
		const addressMNCpU3 = await ControllerCuUyMhP.yearn.call(addressiQ5K21O, addressIFTkKu, uintlNtj5P, {from: accounts[3]});
		const addressp1fx1QD = await ControllerCuUyMhP.inCaseTokensGetStuck.call(addressJTHi6yB, uintwgqFMaG, {from: accounts[4]});
		const addressJT4pjCZ = await ControllerCuUyMhP.setVault.call(addressgfp4Pcu, addressibje8C, {from: "0x0000000000000000000000000000000000000001"});
		const addressgdWvsKz = await ControllerCuUyMhP.setRewards.call(addressSQQ7HBD, {from: accounts[3]});

		await expect(ControllerCuUyMhP.setStrategist.call(addressORKovKU, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressIVzniBt = accounts[4]
		const ControllerdoYlAdo = await Controller.new(addressIVzniBt, {from: accounts[3]});
		const addressvL5OpeI = accounts[2]
		const addresswLCZz40 = accounts[0]
		const address6VLcxl = accounts[0]
		const addressif4YNf = "0x0000000000000000000000000000000000000001"
		const addressMwCiilM = accounts[5]
		const addressAJhrDzk = accounts[3]
		const addressFbnJgFX = accounts[1]
		const addressgqNpSYR = "0x0000000000000000000000000000000000000001"
		const addressshevVwm = accounts[3]
		const addressaFqoHJR = accounts[0]
		const addressThTTwnY = accounts[5]
		const addressU7YIdok = "0x0000000000000000000000000000000000000001"
		const addressMkT1Y8S = accounts[1]
		const addressIQUTMZE = await ControllerdoYlAdo.approveStrategy.call(addresswLCZz40, addressvL5OpeI, {from: accounts[5]});
		const addressYqAwhp8 = await ControllerdoYlAdo.inCaseStrategyTokenGetStuck.call(addressif4YNf, address6VLcxl, {from: "0x0000000000000000000000000000000000000001"});
		const addresslD63oMK = await ControllerdoYlAdo.setConverter.call(addressFbnJgFX, addressAJhrDzk, addressMwCiilM, {from: accounts[0]});
		const addressBIi941u = await ControllerdoYlAdo.setStrategy.call(addressshevVwm, addressgqNpSYR, {from: "0x0000000000000000000000000000000000000001"});
		const addresswoQaKl = await ControllerdoYlAdo.approveStrategy.call(addressThTTwnY, addressaFqoHJR, {from: accounts[1]});
		const addressOO1BMj4 = await ControllerdoYlAdo.approveStrategy.call(addressMkT1Y8S, addressU7YIdok, {from: accounts[5]});

		await expect(ControllerdoYlAdo.approveStrategy.call(addresswLCZz40, addressvL5OpeI, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressAo1lDTs = accounts[0]
		const ControllerGEosC3 = await Controller.new(addressAo1lDTs, {from: "0x0000000000000000000000000000000000000001"});
		const uintqq5O9kV = BigInt("1914")
		const addressEh86gHl = accounts[2]
		const addressWsCSjY = accounts[1]
		const uintUJO6GjG = BigInt("1731")
		const addressiLgl1xT = accounts[4]
		const addressdPrVwAO = accounts[3]
		const addressRGUWN9f = accounts[2]
		const addressJlBzIX = await ControllerGEosC3.inCaseTokensGetStuck.call(addressEh86gHl, uintqq5O9kV, {from: accounts[4]});
		const addressnRBdA3a = await ControllerGEosC3.withdrawAll.call(addressWsCSjY, {from: accounts[4]});
		const uintWu4g8N = await ControllerGEosC3.getExpectedReturn.call(addressdPrVwAO, addressiLgl1xT, uintUJO6GjG, {from: accounts[1]});
		const addresshRtMbDO = await ControllerGEosC3.withdrawAll.call(addressRGUWN9f, {from: accounts[4]});
	});

	it('test for Controller', async () => {
		const addresszRowPsg = "0x0000000000000000000000000000000000000001"
		const ControllereYLUjC = await Controller.new(addresszRowPsg, {from: accounts[3]});
		const addressx8bjdxy = accounts[2]
		const addressT2dMnds = accounts[1]
		const addressoo8xjKe = accounts[5]
		const addressFjYxsov = await ControllereYLUjC.setVault.call(addressT2dMnds, addressx8bjdxy, {from: "0x0000000000000000000000000000000000000001"});
		const addressTy9SLF = await ControllereYLUjC.setStrategist.call(addressoo8xjKe, {from: accounts[5]});

		await expect(ControllereYLUjC.setVault.call(addressT2dMnds, addressx8bjdxy, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressDL24Cgi = accounts[2]
		const ControllertLSTjv4 = await Controller.new(addressDL24Cgi, {from: accounts[3]});
		const addressv6qPnp3 = accounts[0]
		const uintKHJXsGK = BigInt("620")
		const uintjYuSyv7 = BigInt("1006")
		const addressV5JYS4M = accounts[1]
		const addressluFUa0o = accounts[4]
		const addressa8yeyNo = accounts[0]
		const uintuisd8F = BigInt("53")
		const addressnsFMOD = accounts[4]
		const uintX1c5zX = await ControllertLSTjv4.balanceOf.call(addressv6qPnp3, {from: "0x0000000000000000000000000000000000000001"});
		const uintZPKOUMf = await ControllertLSTjv4.setSplit.call(uintKHJXsGK, {from: accounts[2]});
		const addressroCMFNE = await ControllertLSTjv4.yearn.call(addressluFUa0o, addressV5JYS4M, uintjYuSyv7, {from: accounts[0]});
		const addressK9ECwQQ = await ControllertLSTjv4.setRewards.call(addressa8yeyNo, {from: accounts[0]});
		const addresssyXtIg9 = await ControllertLSTjv4.earn.call(addressnsFMOD, uintuisd8F, {from: "0x0000000000000000000000000000000000000001"});

		await expect(ControllertLSTjv4.balanceOf.call(addressv6qPnp3, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addresswrcPs4n = accounts[1]
		const ControllerVdwALMZ = await Controller.new(addresswrcPs4n, {from: accounts[0]});
		const uintUn9cIAj = BigInt("80")
		const addressgMNlOY2 = "0x0000000000000000000000000000000000000001"
		const addressfJi7Kz = accounts[4]
		const addressuQ2GHX1 = accounts[2]
		const uintlYCjfa0 = BigInt("1810")
		const addressxl7WkJx = accounts[1]
		const uintF7wi4wO = BigInt("1784")
		const addressljtuzIR = accounts[1]
		const addressMMBu3WJ = accounts[1]
		const addressEC88orH = accounts[1]
		const uintrcoVfEY = await ControllerVdwALMZ.setSplit.call(uintUn9cIAj, {from: accounts[1]});
		const addressd9z8fx = await ControllerVdwALMZ.setVault.call(addressfJi7Kz, addressgMNlOY2, {from: accounts[0]});
		const addresswslfj3T = await ControllerVdwALMZ.setOneSplit.call(addressuQ2GHX1, {from: accounts[2]});
		const addressAZLnfSe = await ControllerVdwALMZ.earn.call(addressxl7WkJx, uintlYCjfa0, {from: accounts[2]});
		const uintHmbdRV8 = await ControllerVdwALMZ.getExpectedReturn.call(addressMMBu3WJ, addressljtuzIR, uintF7wi4wO, {from: accounts[4]});
		const addressKdUWQeK = await ControllerVdwALMZ.setRewards.call(addressEC88orH, {from: accounts[3]});

		await expect(ControllerVdwALMZ.setSplit.call(uintUn9cIAj, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressLT4DaDx = accounts[4]
		const ControllerEyzQKES = await Controller.new(addressLT4DaDx, {from: accounts[5]});
		const uintuUD26fj = BigInt("238")
		const addressNUu6YO6 = accounts[3]
		const addressFgRnCHJ = accounts[2]
		const addressDk0wClO = accounts[2]
		const addressGteH6rm = "0x0000000000000000000000000000000000000001"
		const uintCc5WFBY = BigInt("970")
		const addressyoeVhzi = accounts[4]
		const addressflZhsqJ = accounts[2]
		const addressgGGhcVQ = accounts[3]
		const addressHStQkYI = await ControllerEyzQKES.earn.call(addressNUu6YO6, uintuUD26fj, {from: accounts[0]});
		const addressuWvXBlB = await ControllerEyzQKES.withdrawAll.call(addressFgRnCHJ, {from: accounts[3]});
		const addressAafVbBJ = await ControllerEyzQKES.setOneSplit.call(addressDk0wClO, {from: accounts[2]});
		const addressdL9CdlV = await ControllerEyzQKES.setStrategist.call(addressGteH6rm, {from: accounts[1]});
		const addressG9zkT6 = await ControllerEyzQKES.earn.call(addressyoeVhzi, uintCc5WFBY, {from: accounts[4]});
		const addressVH5WeH = await ControllerEyzQKES.approveStrategy.call(addressgGGhcVQ, addressflZhsqJ, {from: accounts[2]});

		await expect(ControllerEyzQKES.earn.call(addressNUu6YO6, uintuUD26fj, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressz9JOpf = "0x0000000000000000000000000000000000000001"
		const ControllereYLUjC = await Controller.new(addressz9JOpf, {from: accounts[3]});
		const addresshVrA0h1 = accounts[3]
		const addressUjJFzwH = accounts[2]
		const addresso04JNK = accounts[1]
		const addressa6fEpA2 = accounts[5]
		const addressitfubsb = accounts[5]
		const addressLng6yLJ = accounts[2]
		const addressrg2FCQ = await ControllereYLUjC.setGovernance.call(addresshVrA0h1, {from: accounts[0]});
		const addressFjYxsov = await ControllereYLUjC.setVault.call(addresso04JNK, addressUjJFzwH, {from: "0x0000000000000000000000000000000000000001"});
		const uintmHOCRtG = await ControllereYLUjC.balanceOf.call(addressa6fEpA2, {from: accounts[1]});
		const addressTy9SLF = await ControllereYLUjC.setStrategist.call(addressitfubsb, {from: accounts[5]});
		const addressdD9dcJX = await ControllereYLUjC.setGovernance.call(addressLng6yLJ, {from: accounts[4]});

		await expect(ControllereYLUjC.setGovernance.call(addresshVrA0h1, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addresskBfJtjb = accounts[5]
		const ControllerEguXMJq = await Controller.new(addresskBfJtjb, {from: accounts[4]});
		const addressbxcqm1z = accounts[3]
		const uinteiLFmqU = BigInt("1295")
		const addressLtCFYsx = "0x0000000000000000000000000000000000000000"
		const uintIcnEvh = BigInt("862")
		const addresswTed6d0 = accounts[1]
		const addressKgLTHzc = await ControllerEguXMJq.setRewards.call(addressbxcqm1z, {from: accounts[0]});
		const address9HwSEw = await ControllerEguXMJq.inCaseTokensGetStuck.call(addressLtCFYsx, uinteiLFmqU, {from: accounts[5]});
		const addressmE7qX0R = await ControllerEguXMJq.earn.call(addresswTed6d0, uintIcnEvh, {from: accounts[0]});

		await expect(ControllerEguXMJq.setRewards.call(addressbxcqm1z, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addresshaYSH15 = accounts[4]
		const ControllerEyzQKES = await Controller.new(addresshaYSH15, {from: accounts[5]});
		const addresssvMp7pJ = accounts[1]
		const addresslnyKx0U = accounts[0]
		const uintvUc2hkB = BigInt("663")
		const addressdllWVad = accounts[0]
		const address5ESOVa = accounts[1]
		const uintE9Jl2Fs = BigInt("238")
		const addressRkPiFJY = accounts[3]
		const addressiJDk8or = accounts[2]
		const addressBzqLbdE = accounts[1]
		const addressHTvZm1D = accounts[2]
		const addressPJzU8ff = "0x0000000000000000000000000000000000000001"
		const uintbzkbGZC = BigInt("970")
		const addressQGOgSYp = accounts[4]
		const addresspVOItrr = accounts[2]
		const addressw9D6P5p = accounts[3]
		const addressp8jrtM7 = await ControllerEyzQKES.approveStrategy.call(addresslnyKx0U, addresssvMp7pJ, {from: accounts[5]});
		const uintXWirXd = await ControllerEyzQKES.getExpectedReturn.call(address5ESOVa, addressdllWVad, uintvUc2hkB, {from: accounts[3]});
		const addressHStQkYI = await ControllerEyzQKES.earn.call(addressRkPiFJY, uintE9Jl2Fs, {from: accounts[0]});
		const addressuWvXBlB = await ControllerEyzQKES.withdrawAll.call(addressiJDk8or, {from: accounts[3]});
		const addresscAWsjZi = await ControllerEyzQKES.setOneSplit.call(addressBzqLbdE, {from: accounts[1]});
		const addressAafVbBJ = await ControllerEyzQKES.setOneSplit.call(addressHTvZm1D, {from: accounts[2]});
		const addressdL9CdlV = await ControllerEyzQKES.setStrategist.call(addressPJzU8ff, {from: accounts[1]});
		const addressG9zkT6 = await ControllerEyzQKES.earn.call(addressQGOgSYp, uintbzkbGZC, {from: accounts[4]});
		const addressVH5WeH = await ControllerEyzQKES.approveStrategy.call(addressw9D6P5p, addresspVOItrr, {from: accounts[2]});

		await expect(ControllerEyzQKES.getExpectedReturn.call(address5ESOVa, addressdllWVad, uintvUc2hkB, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressGEmIl3L = accounts[4]
		const ControllerEyzQKES = await Controller.new(addressGEmIl3L, {from: accounts[5]});
		const addresslxAbeN1 = accounts[5]
		const addressva4keaS = accounts[3]
		const uintcoVy7QB = BigInt("238")
		const addressP3L7225 = accounts[3]
		const addressgCXxOuP = accounts[2]
		const addressnzLa1wc = accounts[2]
		const addressu2deXMv = "0x0000000000000000000000000000000000000001"
		const uintCvPZ4aY = BigInt("970")
		const addressOooZT1v = accounts[4]
		const addressBRKUe1 = accounts[2]
		const addressMl4RYEv = accounts[3]
		const addresstFAAscI = await ControllerEyzQKES.setStrategy.call(addressva4keaS, addresslxAbeN1, {from: accounts[3]});
		const addressHStQkYI = await ControllerEyzQKES.earn.call(addressP3L7225, uintcoVy7QB, {from: accounts[0]});
		const addressuWvXBlB = await ControllerEyzQKES.withdrawAll.call(addressgCXxOuP, {from: accounts[3]});
		const addressAafVbBJ = await ControllerEyzQKES.setOneSplit.call(addressnzLa1wc, {from: accounts[2]});
		const addressdL9CdlV = await ControllerEyzQKES.setStrategist.call(addressu2deXMv, {from: accounts[1]});
		const addressG9zkT6 = await ControllerEyzQKES.earn.call(addressOooZT1v, uintCvPZ4aY, {from: accounts[4]});
		const addressVH5WeH = await ControllerEyzQKES.approveStrategy.call(addressMl4RYEv, addressBRKUe1, {from: accounts[2]});

		await expect(ControllerEyzQKES.setStrategy.call(addressva4keaS, addresslxAbeN1, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressoRqmwsE = accounts[3]
		const ControllerAB7UzBv = await Controller.new(addressoRqmwsE, {from: accounts[5]});
		const addressKPaFHWy = accounts[4]
		const addressBW44vN = accounts[0]
		const uintLkKs4zd = BigInt("1524")
		const addresswDYIU2e = accounts[6]
		const addressKJXf18a = await ControllerAB7UzBv.inCaseStrategyTokenGetStuck.call(addressBW44vN, addressKPaFHWy, {from: accounts[3]});
		const addressyTcX0sy = await ControllerAB7UzBv.earn.call(addresswDYIU2e, uintLkKs4zd, {from: accounts[3]});

		await expect(ControllerAB7UzBv.inCaseStrategyTokenGetStuck.call(addressBW44vN, addressKPaFHWy, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressNpUazZ = accounts[0]
		const Controller9F1135 = await Controller.new(addressNpUazZ, {from: accounts[1]});
		const uintpUdJutx = BigInt("1885")
		const addressjxgI0OD = accounts[4]
		const addressul6sUl = accounts[4]
		const addresse9RhIK = accounts[3]
		const address3RztR8 = await Controller9F1135.inCaseTokensGetStuck.call(addressjxgI0OD, uintpUdJutx, {from: "0x0000000000000000000000000000000000000001"});
		const addressmIjDxH = await Controller9F1135.setStrategy.call(addresse9RhIK, addressul6sUl, {from: accounts[4]});

		await expect(Controller9F1135.inCaseTokensGetStuck.call(addressjxgI0OD, uintpUdJutx, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressoTSNmk = accounts[0]
		const ControllerBfwn8MC = await Controller.new(addressoTSNmk, {from: accounts[4]});
		const addresswPNLqjd = accounts[4]
		const addressD7u39uF = accounts[0]
		const uintxzSkOJp = BigInt("1594")
		const addressmRTM3v = accounts[1]
		const addressKEL9ipz = accounts[1]
		const addressQBorIYj = "0x0000000000000000000000000000000000000001"
		const addressESMeqfZ = accounts[0]
		const addressWgcdoXM = accounts[2]
		const addressOU4k95d = await ControllerBfwn8MC.setOneSplit.call(addresswPNLqjd, {from: accounts[2]});
		const addressLjVKAVz = await ControllerBfwn8MC.setOneSplit.call(addressD7u39uF, {from: accounts[2]});
		const uintd6CHW7N = await ControllerBfwn8MC.getExpectedReturn.call(addressKEL9ipz, addressmRTM3v, uintxzSkOJp, {from: accounts[1]});
		const addressd7rXarK = await ControllerBfwn8MC.setGovernance.call(addressQBorIYj, {from: accounts[4]});
		const addresslV7udxZ = await ControllerBfwn8MC.inCaseStrategyTokenGetStuck.call(addressWgcdoXM, addressESMeqfZ, {from: accounts[3]});

		await expect(ControllerBfwn8MC.setOneSplit.call(addresswPNLqjd, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressDdkBnvX = accounts[0]
		const Controller9F1135 = await Controller.new(addressDdkBnvX, {from: accounts[1]});
		const addressKWl16y6 = accounts[3]
		const addresssrdAykv = accounts[4]
		const addresskhI8JBd = accounts[5]
		const addressIKBIvP5 = await Controller9F1135.setConverter.call(addresskhI8JBd, addresssrdAykv, addressKWl16y6, {from: accounts[2]});

		await expect(Controller9F1135.setConverter.call(addresskhI8JBd, addresssrdAykv, addressKWl16y6, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressU74BNvF = accounts[2]
		const ControllerzXs06mA = await Controller.new(addressU74BNvF, {from: accounts[0]});
		const uintRxA4soo = BigInt("1763")
		const addressjIgPMBo = accounts[5]
		const addressOsrZNb = accounts[1]
		const addresscQy1m3p = accounts[1]
		const uintswKXeEz = BigInt("59")
		const addressusEDCof = accounts[3]
		const uintB1gufNP = BigInt("567")
		const addresskfCECc = accounts[5]
		const addressbl9HcRK = accounts[3]
		const addressc1Yn1qj = await ControllerzXs06mA.yearn.call(addressOsrZNb, addressjIgPMBo, uintRxA4soo, {from: accounts[4]});
		const addressC7noQmd = await ControllerzXs06mA.setStrategist.call(addresscQy1m3p, {from: accounts[5]});
		const addressS6ZDYzT = await ControllerzXs06mA.earn.call(addressusEDCof, uintswKXeEz, {from: accounts[0]});
		const uintiQo6KTp = await ControllerzXs06mA.getExpectedReturn.call(addressbl9HcRK, addresskfCECc, uintB1gufNP, {from: accounts[2]});

		await expect(ControllerzXs06mA.yearn.call(addressOsrZNb, addressjIgPMBo, uintRxA4soo, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressSzD71mU = accounts[3]
		const ControllerAB7UzBv = await Controller.new(addressSzD71mU, {from: accounts[5]});
		const uintJhTqqqH = BigInt("1552")
		const addressgul7dAy = accounts[2]
		const addressOsT1as5 = accounts[2]
		const addressphuZ81i = accounts[1]
		const addressM4Jfa46 = "0x0000000000000000000000000000000000000001"
		const uintjg07OLR = BigInt("1524")
		const addressvd0kJz = accounts[5]
		const addressWwHy3ND = await ControllerAB7UzBv.withdraw.call(addressgul7dAy, uintJhTqqqH, {from: accounts[1]});
		const addressYlbkujb = await ControllerAB7UzBv.setStrategist.call(addressOsT1as5, {from: accounts[3]});
		const addressFqPjvHA = await ControllerAB7UzBv.approveStrategy.call(addressM4Jfa46, addressphuZ81i, {from: accounts[4]});
		const addressyTcX0sy = await ControllerAB7UzBv.earn.call(addressvd0kJz, uintjg07OLR, {from: accounts[3]});

		await expect(ControllerAB7UzBv.withdraw.call(addressgul7dAy, uintJhTqqqH, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addresszoz2KEb = accounts[2]
		const ControllerzXs06mA = await Controller.new(addresszoz2KEb, {from: accounts[0]});
		const addressjfkyy4F = accounts[0]
		const addressHHj0Uq = accounts[0]
		const addressvRKy5p = "0x0000000000000000000000000000000000000001"
		const addresse9JusY8 = accounts[0]
		const addressX9Xms4i = accounts[3]
		const uintTLDXAkF = BigInt("1731")
		const addressw2pV2Mz = accounts[5]
		const addressGjvXXBQ = accounts[1]
		const uintv82eyet = BigInt("567")
		const addressYAujtRp = accounts[5]
		const address6RNVP0 = accounts[4]
		const addressGYWFJ7F = await ControllerzXs06mA.setVault.call(addressHHj0Uq, addressjfkyy4F, {from: accounts[0]});
		const addressV4VVbeT = await ControllerzXs06mA.setStrategy.call(addresse9JusY8, addressvRKy5p, {from: accounts[0]});
		const addressjTpXCNC = await ControllerzXs06mA.setGovernance.call(addressX9Xms4i, {from: accounts[0]});
		const addressc1Yn1qj = await ControllerzXs06mA.yearn.call(addressGjvXXBQ, addressw2pV2Mz, uintTLDXAkF, {from: accounts[4]});
		const uintiQo6KTp = await ControllerzXs06mA.getExpectedReturn.call(address6RNVP0, addressYAujtRp, uintv82eyet, {from: accounts[2]});

		await expect(ControllerzXs06mA.setStrategy.call(addresse9JusY8, addressvRKy5p, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addresslUXm4N = accounts[2]
		const ControllerzXs06mA = await Controller.new(addresslUXm4N, {from: accounts[0]});
		const uintWLATKp3 = BigInt("420")
		const addresszQq1emJ = accounts[1]
		const addressmt6NAX = accounts[1]
		const addressyDkuo38 = accounts[2]
		const addresslQAxGN2 = await ControllerzXs06mA.inCaseTokensGetStuck.call(addresszQq1emJ, uintWLATKp3, {from: accounts[0]});
		const addressWi3cz2s = await ControllerzXs06mA.revokeStrategy.call(addressyDkuo38, addressmt6NAX, {from: accounts[5]});

		await expect(ControllerzXs06mA.inCaseTokensGetStuck.call(addresszQq1emJ, uintWLATKp3, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})