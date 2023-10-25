const Controller = artifacts.require("Controller");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Controller', (accounts) => {
	it('test for Controller', async () => {
		const addressuYMmONj = "0x0000000000000000000000000000000000000001"
		const ControllerRJmeld9 = await Controller.new(addressuYMmONj, {from: accounts[4]});
		const uintY4AAEY = BigInt("1297")
		const addressyPQ364Y = accounts[1]
		const uintBmFMkq = BigInt("1574")
		const addressd3y2e6A = accounts[3]
		const addressl8QSmK8 = await ControllerRJmeld9.withdraw.call(addressyPQ364Y, uintY4AAEY, {from: accounts[3]});
		const addressjSidQzJ = await ControllerRJmeld9.earn.call(addressd3y2e6A, uintBmFMkq, {from: accounts[3]});

		await expect(ControllerRJmeld9.withdraw.call(addressyPQ364Y, uintY4AAEY, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addresszutu5Rr = accounts[3]
		const ControllerUnlNKXo = await Controller.new(addresszutu5Rr, {from: accounts[0]});
		const addressa1AC2rn = accounts[0]
		const addressL34cuqj = accounts[2]
		const addressbC3JmGi = accounts[1]
		const addressMcxQAR = accounts[0]
		const addressM7Go86k = accounts[4]
		const addressBA4Umtw = accounts[4]
		const addressTyRO2ql = accounts[0]
		const addressojgfAj4 = accounts[0]
		const addressnNCjydB = "0x0000000000000000000000000000000000000001"
		const uintD1sJRbL = BigInt("1329")
		const addressv0KspDS = accounts[5]
		const addresscs39WYQ = await ControllerUnlNKXo.approveStrategy.call(addressL34cuqj, addressa1AC2rn, {from: accounts[2]});
		const uintBCKFcv = await ControllerUnlNKXo.balanceOf.call(addressbC3JmGi, {from: accounts[0]});
		const addressfeqxJVu = await ControllerUnlNKXo.setConverter.call(addressBA4Umtw, addressM7Go86k, addressMcxQAR, {from: accounts[2]});
		const uinto6Y61l9 = await ControllerUnlNKXo.balanceOf.call(addressTyRO2ql, {from: accounts[4]});
		const addressksR8FA = await ControllerUnlNKXo.setStrategy.call(addressnNCjydB, addressojgfAj4, {from: accounts[2]});
		const addressCtPPBoO = await ControllerUnlNKXo.earn.call(addressv0KspDS, uintD1sJRbL, {from: accounts[2]});

		await expect(ControllerUnlNKXo.approveStrategy.call(addressL34cuqj, addressa1AC2rn, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressj5jRzNo = accounts[2]
		const Controllered7LNgA = await Controller.new(addressj5jRzNo, {from: accounts[2]});
		const addresse1z32vy = accounts[4]
		const address5Cgn4w = accounts[3]
		const addressKAxuDz = accounts[2]
		const addressZTSC7RH = accounts[5]
		const addressDnO1mjb = accounts[0]
		const addressApaPs19 = accounts[0]
		const addressjVi01aI = accounts[2]
		const uintFFU7Oaz = BigInt("306")
		const addressyHIH9Jx = "0x0000000000000000000000000000000000000001"
		const addressCqt4XWa = accounts[4]
		const addressmLv3abv = accounts[2]
		const addressgmegoAy = await Controllered7LNgA.inCaseStrategyTokenGetStuck.call(address5Cgn4w, addresse1z32vy, {from: accounts[0]});
		const addressqotX49L = await Controllered7LNgA.setConverter.call(addressDnO1mjb, addressZTSC7RH, addressKAxuDz, {from: accounts[5]});
		const addressMEfIgMp = await Controllered7LNgA.setVault.call(addressjVi01aI, addressApaPs19, {from: accounts[3]});
		const addressvQD9oKw = await Controllered7LNgA.yearn.call(addressCqt4XWa, addressyHIH9Jx, uintFFU7Oaz, {from: accounts[3]});
		const addresseh4NZJg = await Controllered7LNgA.setGovernance.call(addressmLv3abv, {from: accounts[4]});

		await expect(Controllered7LNgA.inCaseStrategyTokenGetStuck.call(address5Cgn4w, addresse1z32vy, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressEzCitXm = accounts[0]
		const Controllermt2Jkqs = await Controller.new(addressEzCitXm, {from: accounts[0]});
		const uintCtaAazJ = BigInt("406")
		const addressV8Sefho = accounts[4]
		const addresslYyGXh = accounts[0]
		const addressLCUmOR = accounts[2]
		const addressYeDatdX = accounts[3]
		const addressw4dX7L = await Controllermt2Jkqs.inCaseTokensGetStuck.call(addressV8Sefho, uintCtaAazJ, {from: accounts[3]});
		const uintGUldfjq = await Controllermt2Jkqs.balanceOf.call(addresslYyGXh, {from: "0x0000000000000000000000000000000000000001"});
		const addressX86F4Tk = await Controllermt2Jkqs.inCaseStrategyTokenGetStuck.call(addressYeDatdX, addressLCUmOR, {from: accounts[2]});

		await expect(Controllermt2Jkqs.inCaseTokensGetStuck.call(addressV8Sefho, uintCtaAazJ, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressTs8Gh4k = accounts[5]
		const ControllerC9SMowQ = await Controller.new(addressTs8Gh4k, {from: accounts[2]});
		const addressrvo3S07 = accounts[1]
		const addressnhBui5t = accounts[2]
		const addresskmyEuqe = accounts[1]
		const addressTb0l4fS = accounts[5]
		const addresszwNhoO5 = accounts[3]
		const addressmDVsTFL = accounts[3]
		const addresscgLiLi9 = "0x0000000000000000000000000000000000000001"
		const uintgqxD3uT = BigInt("270")
		const addresstMvIXfS = "0x0000000000000000000000000000000000000001"
		const addresszMYOi3u = await ControllerC9SMowQ.setStrategy.call(addressnhBui5t, addressrvo3S07, {from: accounts[2]});
		const addresszGmL3Lo = await ControllerC9SMowQ.revokeStrategy.call(addressTb0l4fS, addresskmyEuqe, {from: accounts[4]});
		const addressZ9h3he = await ControllerC9SMowQ.setVault.call(addressmDVsTFL, addresszwNhoO5, {from: accounts[3]});
		const addresst7g1F6 = await ControllerC9SMowQ.setOneSplit.call(addresscgLiLi9, {from: accounts[0]});
		const addressEVq00EM = await ControllerC9SMowQ.withdraw.call(addresstMvIXfS, uintgqxD3uT, {from: accounts[4]});

		await expect(ControllerC9SMowQ.setStrategy.call(addressnhBui5t, addressrvo3S07, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addresstRQ8ogT = accounts[3]
		const ControllerCGUiz1f = await Controller.new(addresstRQ8ogT, {from: accounts[1]});
		const addressehUgR7V = accounts[3]
		const uintanwC9OR = BigInt("1192")
		const addressnmKPrO = accounts[5]
		const uintkDdK7xZ = BigInt("633")
		const addressKK2642q = accounts[0]
		const addressKo3F8lS = accounts[4]
		const addressKttnO9v = accounts[3]
		const addressae4S2Sl = "0x0000000000000000000000000000000000000001"
		const addressdOUTolj = await ControllerCGUiz1f.setRewards.call(addressehUgR7V, {from: "0x0000000000000000000000000000000000000001"});
		const addressdtsqwiB = await ControllerCGUiz1f.withdraw.call(addressnmKPrO, uintanwC9OR, {from: accounts[5]});
		const addresssN4RxqV = await ControllerCGUiz1f.yearn.call(addressKo3F8lS, addressKK2642q, uintkDdK7xZ, {from: accounts[3]});
		const address8dun4k = await ControllerCGUiz1f.setGovernance.call(addressKttnO9v, {from: accounts[4]});
		const addressgdq3vsK = await ControllerCGUiz1f.setStrategist.call(addressae4S2Sl, {from: accounts[0]});

		await expect(ControllerCGUiz1f.setRewards.call(addressehUgR7V, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressoKAWxrh = accounts[4]
		const ControllerzdteeCi = await Controller.new(addressoKAWxrh, {from: accounts[0]});
		const uintQNeRt3 = BigInt("113")
		const addresscbHXNf = "0x0000000000000000000000000000000000000001"
		const addressXcpsk4z = accounts[2]
		const addressLeTvN8v = accounts[0]
		const addressMUvJ1qh = accounts[2]
		const addressprI48cJ = await ControllerzdteeCi.yearn.call(addressXcpsk4z, addresscbHXNf, uintQNeRt3, {from: accounts[4]});
		const addressOX1cydn = await ControllerzdteeCi.setStrategy.call(addressMUvJ1qh, addressLeTvN8v, {from: accounts[4]});

		await expect(ControllerzdteeCi.yearn.call(addressXcpsk4z, addresscbHXNf, uintQNeRt3, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressmf2Zs40 = accounts[1]
		const Controllerw0qr5Ya = await Controller.new(addressmf2Zs40, {from: accounts[4]});
		const addressHJHthea = accounts[0]
		const addressU3QSMQI = accounts[0]
		const addressLjfAaAp = "0x0000000000000000000000000000000000000001"
		const addressIaDZ3Lh = accounts[0]
		const addresssKGScZ0 = "0x0000000000000000000000000000000000000001"
		const uintTfGomXo = BigInt("1928")
		const addressDnQ1I6 = accounts[1]
		const addressQAQabvo = accounts[0]
		const addressx2vvn5q = accounts[2]
		const address9bUCOq = accounts[1]
		const address85AsZG = accounts[4]
		const addressQVjV0Fc = accounts[2]
		const addressQos0UYy = await Controllerw0qr5Ya.setConverter.call(addressLjfAaAp, addressU3QSMQI, addressHJHthea, {from: accounts[1]});
		const addressQi33b1 = await Controllerw0qr5Ya.setStrategy.call(addresssKGScZ0, addressIaDZ3Lh, {from: accounts[2]});
		const addressrZPbV8r = await Controllerw0qr5Ya.inCaseTokensGetStuck.call(addressDnQ1I6, uintTfGomXo, {from: accounts[5]});
		const addressouH4x2L = await Controllerw0qr5Ya.approveStrategy.call(addressx2vvn5q, addressQAQabvo, {from: accounts[1]});
		const addressHVXkA9b = await Controllerw0qr5Ya.revokeStrategy.call(address85AsZG, address9bUCOq, {from: "0x0000000000000000000000000000000000000001"});
		const uintQw7zId6 = await Controllerw0qr5Ya.balanceOf.call(addressQVjV0Fc, {from: "0x0000000000000000000000000000000000000001"});

		await expect(Controllerw0qr5Ya.setConverter.call(addressLjfAaAp, addressU3QSMQI, addressHJHthea, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressJ5OzIY = accounts[0]
		const ControllerkMBHgUT = await Controller.new(addressJ5OzIY, {from: accounts[2]});
		const uinthGeDFo = BigInt("1315")
		const uintyaxVF0J = BigInt("682")
		const addressDCE0tm0 = accounts[0]
		const uintcT9hu3t = BigInt("1525")
		const addressmY9Un2b = accounts[0]
		const uintFR83gev = BigInt("1568")
		const addressi8fJAd4 = "0x0000000000000000000000000000000000000001"
		const addressBiWg1P5 = accounts[0]
		const addressVG4HLXB = accounts[2]
		const uintFZMY36V = await ControllerkMBHgUT.setSplit.call(uinthGeDFo, {from: accounts[3]});
		const addressObHXFLi = await ControllerkMBHgUT.earn.call(addressDCE0tm0, uintyaxVF0J, {from: accounts[3]});
		const addressh1jiPK = await ControllerkMBHgUT.earn.call(addressmY9Un2b, uintcT9hu3t, {from: accounts[4]});
		const addressSYqLFmF = await ControllerkMBHgUT.yearn.call(addressBiWg1P5, addressi8fJAd4, uintFR83gev, {from: accounts[1]});
		const addressg1U6nKE = await ControllerkMBHgUT.setStrategist.call(addressVG4HLXB, {from: "0x0000000000000000000000000000000000000001"});

		await expect(ControllerkMBHgUT.setSplit.call(uinthGeDFo, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addresshLmWaPx = accounts[2]
		const ControllerFr0nmxY = await Controller.new(addresshLmWaPx, {from: "0x0000000000000000000000000000000000000001"});
		const addressCfxV35 = accounts[1]
		const address4uxASj = accounts[1]
		const addressxAbClyx = accounts[1]
		const uintiXi3vcl = BigInt("186")
		const addressbdoptFK = accounts[1]
		const addressh1c1Tjb = accounts[2]
		const addressvavrVeF = accounts[4]
		const addressrvTgYSf = accounts[5]
		const addressawV05y9 = await ControllerFr0nmxY.setVault.call(address4uxASj, addressCfxV35, {from: accounts[3]});
		const addressWU2OmyF = await ControllerFr0nmxY.setOneSplit.call(addressxAbClyx, {from: accounts[5]});
		const uintn1ckfPC = await ControllerFr0nmxY.getExpectedReturn.call(addressh1c1Tjb, addressbdoptFK, uintiXi3vcl, {from: accounts[4]});
		const addressRO9HFWn = await ControllerFr0nmxY.setVault.call(addressrvTgYSf, addressvavrVeF, {from: accounts[1]});
	});

	it('test for Controller', async () => {
		const addressZl4xn2F = accounts[0]
		const ControllerkMBHgUT = await Controller.new(addressZl4xn2F, {from: accounts[2]});
		const uintrfZcjyA = BigInt("682")
		const addressRi0seuo = accounts[0]
		const uintu16ekxc = BigInt("1525")
		const addressSiv3wH1 = accounts[0]
		const addressjxn6ivw = accounts[3]
		const addressObHXFLi = await ControllerkMBHgUT.earn.call(addressRi0seuo, uintrfZcjyA, {from: accounts[3]});
		const addressh1jiPK = await ControllerkMBHgUT.earn.call(addressSiv3wH1, uintu16ekxc, {from: accounts[4]});
		const addressg1U6nKE = await ControllerkMBHgUT.setStrategist.call(addressjxn6ivw, {from: "0x0000000000000000000000000000000000000001"});

		await expect(ControllerkMBHgUT.earn.call(addressRi0seuo, uintrfZcjyA, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressNW4uJIr = accounts[4]
		const ControllerzdteeCi = await Controller.new(addressNW4uJIr, {from: accounts[0]});
		const addressB5C8wE5 = "0x0000000000000000000000000000000000000001"
		const addressx57UHXa = accounts[1]
		const addressqPdEhIi = accounts[5]
		const addresswooHWSw = "0x0000000000000000000000000000000000000001"
		const addressdccC7U6 = accounts[1]
		const uintbFPxIVn = BigInt("113")
		const addressTEihpwe = "0x0000000000000000000000000000000000000001"
		const addressBJ2MhRm = "0x0000000000000000000000000000000000000001"
		const addressB6TK7q = accounts[0]
		const addressndXrQeY = accounts[3]
		const addressbv8BtC5 = await ControllerzdteeCi.setVault.call(addressx57UHXa, addressB5C8wE5, {from: accounts[1]});
		const addresstyRwHj = await ControllerzdteeCi.approveStrategy.call(addresswooHWSw, addressqPdEhIi, {from: accounts[3]});
		const addressYgdbQwf = await ControllerzdteeCi.withdrawAll.call(addressdccC7U6, {from: accounts[4]});
		const addressprI48cJ = await ControllerzdteeCi.yearn.call(addressBJ2MhRm, addressTEihpwe, uintbFPxIVn, {from: accounts[4]});
		const addressOX1cydn = await ControllerzdteeCi.setStrategy.call(addressndXrQeY, addressB6TK7q, {from: accounts[4]});

		await expect(ControllerzdteeCi.setVault.call(addressx57UHXa, addressB5C8wE5, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressshLVIpt = accounts[5]
		const ControllerhaxEAQ = await Controller.new(addressshLVIpt, {from: accounts[1]});
		const addresspI11ew = accounts[4]
		const addressAnieyvI = accounts[2]
		const uintPNHucui = BigInt("1804")
		const addressOpMoteo = accounts[1]
		const addressaFLhWOC = accounts[1]
		const addresshDOH784 = accounts[5]
		const addressLiFEgnj = accounts[0]
		const uintyCkwPYg = BigInt("1526")
		const addressUisfItM = await ControllerhaxEAQ.revokeStrategy.call(addressAnieyvI, addresspI11ew, {from: accounts[5]});
		const addressy4yOxU = await ControllerhaxEAQ.yearn.call(addressaFLhWOC, addressOpMoteo, uintPNHucui, {from: accounts[4]});
		const addressQ9njc0y = await ControllerhaxEAQ.setGovernance.call(addresshDOH784, {from: accounts[3]});
		const addressswKhlba = await ControllerhaxEAQ.withdrawAll.call(addressLiFEgnj, {from: accounts[3]});
		const uintK5soV8O = await ControllerhaxEAQ.setSplit.call(uintyCkwPYg, {from: "0x0000000000000000000000000000000000000001"});

		await expect(ControllerhaxEAQ.revokeStrategy.call(addressAnieyvI, addresspI11ew, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressQZJrfoB = accounts[2]
		const ControllerVOF9Yc0 = await Controller.new(addressQZJrfoB, {from: accounts[3]});
		const addressD1AStmV = accounts[0]
		const addressFbh0kb = accounts[4]
		const addressZQv5ydG = accounts[4]
		const addressb9odoDW = await ControllerVOF9Yc0.setStrategist.call(addressD1AStmV, {from: accounts[2]});
		const addressRUXwQpY = await ControllerVOF9Yc0.setStrategist.call(addressFbh0kb, {from: accounts[4]});
		const addressxebzXP = await ControllerVOF9Yc0.withdrawAll.call(addressZQv5ydG, {from: accounts[4]});

		await expect(ControllerVOF9Yc0.setStrategist.call(addressD1AStmV, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressLYFXGV8 = accounts[1]
		const ControllerP6eNcsj = await Controller.new(addressLYFXGV8, {from: accounts[1]});
		const uintKjPjFqM = BigInt("1482")
		const addressSnnBhYC = accounts[2]
		const addressrMaFnoc = accounts[4]
		const addressguNlRbc = "0x0000000000000000000000000000000000000001"
		const addressoA6bfYL = accounts[3]
		const addressAdtjZy = accounts[2]
		const uintv4KZihx = BigInt("1957")
		const addressMgcHf9O = "0x0000000000000000000000000000000000000001"
		const uintHSsm6ku = BigInt("465")
		const addressmHfkomP = accounts[4]
		const addressGq2vlQL = accounts[5]
		const addressD4gNTI = accounts[2]
		const addressspMHqYS = accounts[1]
		const uintHTRqqn8 = await ControllerP6eNcsj.getExpectedReturn.call(addressrMaFnoc, addressSnnBhYC, uintKjPjFqM, {from: "0x0000000000000000000000000000000000000001"});
		const addressgRgZzh5 = await ControllerP6eNcsj.setVault.call(addressoA6bfYL, addressguNlRbc, {from: accounts[0]});
		const uintH9y9Wn1 = await ControllerP6eNcsj.balanceOf.call(addressAdtjZy, {from: accounts[4]});
		const addressLWINOQ = await ControllerP6eNcsj.inCaseTokensGetStuck.call(addressMgcHf9O, uintv4KZihx, {from: accounts[5]});
		const addressYI90bjd = await ControllerP6eNcsj.inCaseTokensGetStuck.call(addressmHfkomP, uintHSsm6ku, {from: accounts[3]});
		const addressVo6sjIq = await ControllerP6eNcsj.setConverter.call(addressspMHqYS, addressD4gNTI, addressGq2vlQL, {from: accounts[0]});

		await expect(ControllerP6eNcsj.getExpectedReturn.call(addressrMaFnoc, addressSnnBhYC, uintKjPjFqM, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressU010PZO = accounts[0]
		const Controllermt2Jkqs = await Controller.new(addressU010PZO, {from: accounts[0]});
		const addresslQ94VyK = accounts[1]
		const uintVHoxXLX = BigInt("406")
		const addressC73q6qC = accounts[4]
		const addresswD31lT = accounts[1]
		const addresshpMXSfF = accounts[2]
		const addressH6dgIb9 = accounts[3]
		const addresssLiooVQ = await Controllermt2Jkqs.setStrategist.call(addresslQ94VyK, {from: accounts[0]});
		const addressw4dX7L = await Controllermt2Jkqs.inCaseTokensGetStuck.call(addressC73q6qC, uintVHoxXLX, {from: accounts[3]});
		const uintGUldfjq = await Controllermt2Jkqs.balanceOf.call(addresswD31lT, {from: "0x0000000000000000000000000000000000000001"});
		const addressX86F4Tk = await Controllermt2Jkqs.inCaseStrategyTokenGetStuck.call(addressH6dgIb9, addresshpMXSfF, {from: accounts[2]});

		await expect(Controllermt2Jkqs.inCaseTokensGetStuck.call(addressC73q6qC, uintVHoxXLX, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressvFWxFaG = accounts[0]
		const Controllermt2Jkqs = await Controller.new(addressvFWxFaG, {from: accounts[0]});
		const address3yAYA3 = accounts[1]
		const addressz99NRi = accounts[2]
		const addressOsNTncU = accounts[3]
		const uintGUldfjq = await Controllermt2Jkqs.balanceOf.call(address3yAYA3, {from: "0x0000000000000000000000000000000000000001"});
		const addressX86F4Tk = await Controllermt2Jkqs.inCaseStrategyTokenGetStuck.call(addressOsNTncU, addressz99NRi, {from: accounts[2]});

		await expect(Controllermt2Jkqs.balanceOf.call(address3yAYA3, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressdcuMCsN = accounts[4]
		const ControllerzdteeCi = await Controller.new(addressdcuMCsN, {from: accounts[0]});
		const addressDCGSBiJ = accounts[4]
		const addressoLoVHqX = accounts[0]
		const addressQOxBJWw = accounts[4]
		const addressEVOJ1x = accounts[3]
		const address5fFa4G = accounts[1]
		const addressWO3Jkc9 = await ControllerzdteeCi.setOneSplit.call(addressDCGSBiJ, {from: accounts[2]});
		const addressOX1cydn = await ControllerzdteeCi.setStrategy.call(addressQOxBJWw, addressoLoVHqX, {from: accounts[4]});
		const addressAKCcSez = await ControllerzdteeCi.inCaseStrategyTokenGetStuck.call(address5fFa4G, addressEVOJ1x, {from: accounts[2]});

		await expect(ControllerzdteeCi.setOneSplit.call(addressDCGSBiJ, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressnJ1604w = "0x0000000000000000000000000000000000000001"
		const ControllerRJmeld9 = await Controller.new(addressnJ1604w, {from: accounts[4]});
		const addressR4CFivF = accounts[5]
		const uintk5lZLdy = BigInt("868")
		const uintsfcGYGa = BigInt("1575")
		const addresscdhCLrU = accounts[3]
		const uintfYzHFt = BigInt("869")
		const addresssoMPFa9 = accounts[1]
		const addressp8RZGcb = accounts[4]
		const uintvQM3X8g = BigInt("150")
		const addressd8kF1NW = accounts[2]
		const addressutNPpN2 = await ControllerRJmeld9.withdrawAll.call(addressR4CFivF, {from: accounts[3]});
		const uintXmVvQWO = await ControllerRJmeld9.setSplit.call(uintk5lZLdy, {from: accounts[2]});
		const addressjSidQzJ = await ControllerRJmeld9.earn.call(addresscdhCLrU, uintsfcGYGa, {from: accounts[3]});
		const uinteEtePnl = await ControllerRJmeld9.getExpectedReturn.call(addressp8RZGcb, addresssoMPFa9, uintfYzHFt, {from: accounts[2]});
		const addressHjZwEgx = await ControllerRJmeld9.earn.call(addressd8kF1NW, uintvQM3X8g, {from: accounts[3]});

		await expect(ControllerRJmeld9.withdrawAll.call(addressR4CFivF, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressfQNK241 = accounts[4]
		const ControllerT6nskPO = await Controller.new(addressfQNK241, {from: accounts[0]});
		const uintjc7JI2H = BigInt("1250")
		const addressqYffvr = accounts[3]
		const uintGMQwBKZ = BigInt("1281")
		const addressbJwnZVL = accounts[2]
		const addressyZZVqZl = accounts[4]
		const addresskY5Gbpa = accounts[0]
		const uintBmsy9DE = BigInt("462")
		const addressWgqNkOL = accounts[3]
		const addressbpzNyg7 = accounts[5]
		const addressh4HwEIi = accounts[4]
		const addresszActWY = "0x0000000000000000000000000000000000000001"
		const addressOEK83xL = await ControllerT6nskPO.inCaseTokensGetStuck.call(addressqYffvr, uintjc7JI2H, {from: accounts[0]});
		const addressHyMzKFX = await ControllerT6nskPO.inCaseTokensGetStuck.call(addressbJwnZVL, uintGMQwBKZ, {from: accounts[2]});
		const addresscSuPB4g = await ControllerT6nskPO.setVault.call(addresskY5Gbpa, addressyZZVqZl, {from: accounts[1]});
		const addressj7ZJlx9 = await ControllerT6nskPO.inCaseTokensGetStuck.call(addressWgqNkOL, uintBmsy9DE, {from: accounts[1]});
		const addressv8ygbp6 = await ControllerT6nskPO.withdrawAll.call(addressbpzNyg7, {from: accounts[4]});
		const addressrKM5VpY = await ControllerT6nskPO.approveStrategy.call(addresszActWY, addressh4HwEIi, {from: "0x0000000000000000000000000000000000000001"});

		await expect(ControllerT6nskPO.inCaseTokensGetStuck.call(addressqYffvr, uintjc7JI2H, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressninLSd = "0x0000000000000000000000000000000000000001"
		const ControllerRJmeld9 = await Controller.new(addressninLSd, {from: accounts[4]});
		const addressX1KbVeE = accounts[4]
		const uintDX9yR1c = BigInt("1587")
		const addressmaOqcqE = accounts[4]
		const addressqfjpVFr = await ControllerRJmeld9.setRewards.call(addressX1KbVeE, {from: accounts[4]});
		const addressjSidQzJ = await ControllerRJmeld9.earn.call(addressmaOqcqE, uintDX9yR1c, {from: accounts[3]});

		await expect(ControllerRJmeld9.earn.call(addressmaOqcqE, uintDX9yR1c, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressrTadPl1 = "0x0000000000000000000000000000000000000001"
		const ControllerRJmeld9 = await Controller.new(addressrTadPl1, {from: accounts[4]});
		const addressruXyq8 = accounts[3]
		const addressC8AJeI = accounts[1]
		const uintebZeOiK = BigInt("868")
		const addresskt56KyL = await ControllerRJmeld9.revokeStrategy.call(addressC8AJeI, addressruXyq8, {from: accounts[4]});
		const uintXmVvQWO = await ControllerRJmeld9.setSplit.call(uintebZeOiK, {from: accounts[2]});

		await expect(ControllerRJmeld9.setSplit.call(uintebZeOiK, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressvYwOaKy = "0x0000000000000000000000000000000000000001"
		const ControllerRJmeld9 = await Controller.new(addressvYwOaKy, {from: accounts[4]});
		const uintGTJiw7t = BigInt("492")
		const addressOyoEAaa = accounts[1]
		const addressmLkS0L8 = "0x0000000000000000000000000000000000000001"
		const uint89Y6uF = BigInt("1587")
		const addressU61yNNH = "0x0000000000000000000000000000000000000002"
		const addressZs4XPVg = await ControllerRJmeld9.yearn.call(addressmLkS0L8, addressOyoEAaa, uintGTJiw7t, {from: accounts[4]});
		const addressjSidQzJ = await ControllerRJmeld9.earn.call(addressU61yNNH, uint89Y6uF, {from: accounts[3]});

		await expect(ControllerRJmeld9.yearn.call(addressmLkS0L8, addressOyoEAaa, uintGTJiw7t, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressEJnUOMq = accounts[3]
		const ControllerdQOqhoQ = await Controller.new(addressEJnUOMq, {from: accounts[0]});
		const addressEKhBNg = accounts[4]
		const uintFPsuAbw = BigInt("1748")
		const addresso4ek2R9 = accounts[4]
		const addressPhhsP1 = accounts[5]
		const addressxqsRQ41 = accounts[1]
		const addressW7KdaRc = accounts[1]
		const addressi699mzb = accounts[0]
		const uintO4w5yQB = BigInt("1596")
		const addressah4BpBZ = accounts[4]
		const addresslW2Q2Og = accounts[0]
		const addressXxeIsl = await ControllerdQOqhoQ.setGovernance.call(addressEKhBNg, {from: accounts[4]});
		const addressDOL2JO2 = await ControllerdQOqhoQ.inCaseTokensGetStuck.call(addresso4ek2R9, uintFPsuAbw, {from: accounts[2]});
		const addressjFkP0kA = await ControllerdQOqhoQ.withdrawAll.call(addressPhhsP1, {from: accounts[0]});
		const addresspHwGyLD = await ControllerdQOqhoQ.setConverter.call(addressi699mzb, addressW7KdaRc, addressxqsRQ41, {from: accounts[2]});
		const addressuQKK4dq = await ControllerdQOqhoQ.yearn.call(addresslW2Q2Og, addressah4BpBZ, uintO4w5yQB, {from: accounts[4]});

		await expect(ControllerdQOqhoQ.setGovernance.call(addressEKhBNg, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressvmmmbEb = accounts[3]
		const ControllerUnlNKXo = await Controller.new(addressvmmmbEb, {from: accounts[0]});
		const uintGF6au0 = BigInt("1366")
		const addressYUlsxB8 = accounts[0]
		const addressPRc3fz7 = "0x0000000000000000000000000000000000000001"
		const uintdKFcejH = await ControllerUnlNKXo.setSplit.call(uintGF6au0, {from: accounts[0]});
		const addresscs39WYQ = await ControllerUnlNKXo.approveStrategy.call(addressPRc3fz7, addressYUlsxB8, {from: accounts[2]});

		await expect(ControllerUnlNKXo.approveStrategy.call(addressPRc3fz7, addressYUlsxB8, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressJuEVbY4 = accounts[3]
		const ControllerfdDyfCH = await Controller.new(addressJuEVbY4, {from: accounts[2]});
		const addressIQEBb8o = accounts[1]
		const addressGl5e8A = accounts[0]
		const addresscoqSYKP = accounts[4]
		const addressp6EhcUD = await ControllerfdDyfCH.setOneSplit.call(addressIQEBb8o, {from: accounts[2]});
		const addressZsm16rK = await ControllerfdDyfCH.revokeStrategy.call(addresscoqSYKP, addressGl5e8A, {from: accounts[2]});
	});

	it('test for Controller', async () => {
		const addresszP3Aar5 = accounts[4]
		const ControllerzdteeCi = await Controller.new(addresszP3Aar5, {from: accounts[0]});
		const addressmwVw9nQ = accounts[5]
		const addressZZYBtR7 = accounts[1]
		const addressEKzXJcA = accounts[2]
		const addressLXGzZPM = accounts[2]
		const addressJ7VEjGJ = accounts[4]
		const addressdYjfoCP = await ControllerzdteeCi.setGovernance.call(addressmwVw9nQ, {from: accounts[0]});
		const addressoXzViEp = await ControllerzdteeCi.setConverter.call(addressLXGzZPM, addressEKzXJcA, addressZZYBtR7, {from: accounts[5]});
		const addressiFmkRLj = await ControllerzdteeCi.withdrawAll.call(addressJ7VEjGJ, {from: "0x0000000000000000000000000000000000000001"});

		await expect(ControllerzdteeCi.setConverter.call(addressLXGzZPM, addressEKzXJcA, addressZZYBtR7, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressMJBef6f = accounts[4]
		const Controllerwf26bHO = await Controller.new(addressMJBef6f, {from: accounts[3]});
		const addressYM33q3m = accounts[2]
		const addressrtjhPdJ = accounts[5]
		const addressn6SeCor = "0x0000000000000000000000000000000000000001"
		const addressPiK45Km = accounts[4]
		const addresszsvTWu5 = accounts[5]
		const addressm4EB7eR = accounts[4]
		const uintbNLLWXD = BigInt("174")
		const addressvTx2q3Z = await Controllerwf26bHO.withdrawAll.call(addressYM33q3m, {from: accounts[3]});
		const addressjn6LcEo = await Controllerwf26bHO.setGovernance.call(addressrtjhPdJ, {from: accounts[5]});
		const addressalWxC76 = await Controllerwf26bHO.setOneSplit.call(addressn6SeCor, {from: "0x0000000000000000000000000000000000000001"});
		const addressV4lxgB = await Controllerwf26bHO.setStrategist.call(addressPiK45Km, {from: accounts[0]});
		const addressoEmOlos = await Controllerwf26bHO.setStrategy.call(addressm4EB7eR, addresszsvTWu5, {from: accounts[3]});
		const uintTD4F0c2 = await Controllerwf26bHO.setSplit.call(uintbNLLWXD, {from: accounts[4]});

		await expect(Controllerwf26bHO.withdrawAll.call(addressYM33q3m, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressVRLffed = "0x0000000000000000000000000000000000000001"
		const ControllerRJmeld9 = await Controller.new(addressVRLffed, {from: accounts[4]});
		const address8KO5NP = accounts[3]
		const addressdtPywu = accounts[2]
		const uintpkWhmyp = BigInt("1297")
		const addressbHV8Gm = accounts[1]
		const addressmN9Xsm = await ControllerRJmeld9.approveStrategy.call(addressdtPywu, address8KO5NP, {from: accounts[4]});
		const addressl8QSmK8 = await ControllerRJmeld9.withdraw.call(addressbHV8Gm, uintpkWhmyp, {from: accounts[3]});

		await expect(ControllerRJmeld9.withdraw.call(addressbHV8Gm, uintpkWhmyp, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressIVhtoCv = "0x0000000000000000000000000000000000000001"
		const ControllerRJmeld9 = await Controller.new(addressIVhtoCv, {from: accounts[4]});
		const addressh04HFLG = accounts[3]
		const addressupmqlG0 = accounts[2]
		const addressA8PGAj = accounts[1]
		const addressgbYK0G = accounts[3]
		const uintyJkYj9B = BigInt("444")
		const addresskWxXBis = accounts[1]
		const addressmN9Xsm = await ControllerRJmeld9.approveStrategy.call(addressupmqlG0, addressh04HFLG, {from: accounts[4]});
		const addressTHHSdod = await ControllerRJmeld9.inCaseStrategyTokenGetStuck.call(addressgbYK0G, addressA8PGAj, {from: accounts[4]});
		const addressl8QSmK8 = await ControllerRJmeld9.withdraw.call(addresskWxXBis, uintyJkYj9B, {from: accounts[3]});

		await expect(ControllerRJmeld9.inCaseStrategyTokenGetStuck.call(addressgbYK0G, addressA8PGAj, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressSzd69QC = "0x0000000000000000000000000000000000000001"
		const ControllerRJmeld9 = await Controller.new(addressSzd69QC, {from: accounts[4]});
		const addresszC7LrqP = accounts[0]
		const addressiGO1Dt = accounts[2]
		const addressBo9CmDT = "0x0000000000000000000000000000000000000001"
		const addressKernUqp = accounts[2]
		const uintmrHHct = BigInt("1323")
		const addressdMFAX35 = accounts[1]
		const addressCFqLsRV = await ControllerRJmeld9.setRewards.call(addresszC7LrqP, {from: accounts[4]});
		const addressWxJGrDv = await ControllerRJmeld9.setConverter.call(addressKernUqp, addressBo9CmDT, addressiGO1Dt, {from: accounts[4]});
		const addressl8QSmK8 = await ControllerRJmeld9.withdraw.call(addressdMFAX35, uintmrHHct, {from: accounts[3]});

		await expect(ControllerRJmeld9.withdraw.call(addressdMFAX35, uintmrHHct, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressdWchcQo = "0x0000000000000000000000000000000000000001"
		const ControllerRJmeld9 = await Controller.new(addressdWchcQo, {from: accounts[4]});
		const addressmIyhGj6 = accounts[0]
		const addressUbYJRy1 = accounts[0]
		const uintJs756zt = BigInt("1297")
		const addressfWy7JJc = accounts[1]
		const addressAE0roeR = await ControllerRJmeld9.setVault.call(addressUbYJRy1, addressmIyhGj6, {from: accounts[4]});
		const addressl8QSmK8 = await ControllerRJmeld9.withdraw.call(addressfWy7JJc, uintJs756zt, {from: accounts[3]});

		await expect(ControllerRJmeld9.withdraw.call(addressfWy7JJc, uintJs756zt, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})