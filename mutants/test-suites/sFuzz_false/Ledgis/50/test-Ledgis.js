const Ledgis = artifacts.require("Ledgis");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Ledgis', (accounts) => {
	it('test for Ledgis', async () => {
		const LedgishHfLvkE = await Ledgis.new({from: accounts[0]});
		const uintwBH7OK0 = BigInt("1107")
		const uintFL6cTLp = BigInt("504")
		const addressNBdRQL = accounts[1]
		const uintTvNkLeX = BigInt("945")
		const addressKUFgHKv = accounts[0]
		const uintZHuHct1 = BigInt("0")
		const uintklWWR5y = BigInt("945")
		const addressHNctRzj = accounts[1]
//		const addressQbANGMy = await LedgishHfLvkE.lock.call(addressNBdRQL, uintFL6cTLp, uintwBH7OK0, {from: "0x0000000000000000000000000000000000000001"});
//		await LedgishHfLvkE.whenNotFrozen.call({from: accounts[3]});
//		const boolcqX4Qfv = await LedgishHfLvkE.mint.call(addressKUFgHKv, uintTvNkLeX, {from: accounts[1]});
//		await LedgishHfLvkE.pause.call({from: accounts[0]});
//		const addressSOYtN4V = await LedgishHfLvkE.lockAfter.call(addressHNctRzj, uintklWWR5y, uintZHuHct1, {from: accounts[3]});

		await expect(LedgishHfLvkE.lock.call(addressNBdRQL, uintFL6cTLp, uintwBH7OK0, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const Ledgisq94kzOk = await Ledgis.new({from: accounts[4]});
		const uintJK6dAs8 = BigInt("1507")
		const addresseUCtMmU = accounts[4]
		const uintXYvHsp1 = BigInt("1882")
		const addresso1CQriv = accounts[5]
		const uintp2KofM = BigInt("1102")
		const addresslCcoCd = "0x0000000000000000000000000000000000000001"
//		await Ledgisq94kzOk.renounceOwnership.call({from: accounts[4]});
//		const booly8o1Tnv = await Ledgisq94kzOk.decreaseAllowance.call(addresseUCtMmU, uintJK6dAs8, {from: accounts[4]});
//		const addressT5kw7wj = await Ledgisq94kzOk.burn.call(addresso1CQriv, uintXYvHsp1, {from: accounts[4]});
//		const boolgo7Fz25 = await Ledgisq94kzOk.transfer.call(addresslCcoCd, uintp2KofM, {from: accounts[4]});

		await expect(Ledgisq94kzOk.renounceOwnership.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisbDxCgb3 = await Ledgis.new({from: accounts[0]});
		const uintoUFRDd9 = BigInt("1350")
		const addressJQkJ1ZL = accounts[3]
		const addressOcEt0pq = accounts[1]
		const address5thQLU = accounts[5]
//		const boolj4qGrm1 = await LedgisbDxCgb3.transferFrom.call(addressOcEt0pq, addressJQkJ1ZL, uintoUFRDd9, {from: accounts[1]});
//		const boolIwrGAIA = await LedgisbDxCgb3.isFrozen.call(address5thQLU, {from: "0x0000000000000000000000000000000000000001"});

		await expect(LedgisbDxCgb3.transferFrom.call(addressOcEt0pq, addressJQkJ1ZL, uintoUFRDd9, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisfjlFp0U = await Ledgis.new({from: accounts[4]});
		const uintqtSfgQY = BigInt("330")
		const uintQ9OPozo = BigInt("1254")
		const addresshThjPn = accounts[4]
		const uintByO9Q9 = BigInt("644")
		const addressAWuEchq = accounts[0]
		const addressLrhASYV = accounts[3]
//		await LedgisfjlFp0U.onlyOwner.call({from: accounts[0]});
//		const boolWufBQ9 = await LedgisfjlFp0U.transferWithLockAfter.call(addresshThjPn, uintQ9OPozo, uintqtSfgQY, {from: accounts[0]});
//		await LedgisfjlFp0U.lockState.call(addressAWuEchq, uintByO9Q9, {from: accounts[5]});
//		const uint256H7fCN3S = await LedgisfjlFp0U.balanceOf.call(addressLrhASYV, {from: accounts[2]});

		await expect(LedgisfjlFp0U.onlyOwner.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisHAiTzCA = await Ledgis.new({from: accounts[4]});
		const uintYkCg6Az = BigInt("1077")
		const addressQNsqQe = accounts[3]
		const addressgnIUvg = accounts[4]
		const uintevqLWZe = BigInt("314")
		const addressx0Srarh = accounts[0]
		const uintBkUkSkN = BigInt("1995")
		const address3VmbSG = accounts[5]
//		const boolZ7alzXv = await LedgisHAiTzCA.transfer.call(addressQNsqQe, uintYkCg6Az, {from: accounts[3]});
//		await LedgisHAiTzCA.whenNotPaused.call({from: accounts[3]});
//		const uint256XaBwuh = await LedgisHAiTzCA.balanceOf.call(addressgnIUvg, {from: accounts[1]});
//		const uint256dK1eSJr = await LedgisHAiTzCA.afterTime.call(uintevqLWZe, {from: accounts[4]});
//		const addressjep7DGI = await LedgisHAiTzCA.transferOwnership.call(addressx0Srarh, {from: accounts[0]});
//		const boolERIQsvw = await LedgisHAiTzCA.transfer.call(address3VmbSG, uintBkUkSkN, {from: accounts[3]});

		await expect(LedgisHAiTzCA.transfer.call(addressQNsqQe, uintYkCg6Az, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisaCZv6HX = await Ledgis.new({from: accounts[0]});
		const uintF65DAQf = BigInt("2006")
		const addressaYoK7fP = accounts[1]
		const uintbusIsBN = BigInt("2011")
		const addressrMu4aBu = accounts[4]
		const addressjByUul2 = accounts[3]
		const uintrAEr3Z = BigInt("1589")
		const addressNcnAoy7 = "0x0000000000000000000000000000000000000001"
		const addressSXHNSNF = "0x0000000000000000000000000000000000000001"
		const uintHHgIiZq = BigInt("1903")
		const addresswWCDTI = accounts[0]
		const boolqem4y3p = await LedgisaCZv6HX.transfer.call(addressaYoK7fP, uintF65DAQf, {from: accounts[0]});
//		const addresshiGPd1v = await LedgisaCZv6HX.unlock.call(addressrMu4aBu, uintbusIsBN, {from: accounts[0]});
//		const uint256M1tVzHM = await LedgisaCZv6HX.balanceOf.call(addressjByUul2, {from: accounts[0]});
//		const boolo0PpXvb = await LedgisaCZv6HX.transferFrom.call(addressSXHNSNF, addressNcnAoy7, uintrAEr3Z, {from: accounts[2]});
//		const boolN7pi4UQ = await LedgisaCZv6HX.transfer.call(addresswWCDTI, uintHHgIiZq, {from: accounts[2]});

		assert.equal(boolqem4y3p, true)
		await expect(LedgisaCZv6HX.unlock.call(addressrMu4aBu, uintbusIsBN, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgistLrVcl4 = await Ledgis.new({from: accounts[2]});
		const uintlpASNEf = BigInt("1317")
		const addressecGol41 = accounts[1]
		const addressBd2yyNF = accounts[0]
		const boolUZRjpL5 = await LedgistLrVcl4.increaseAllowance.call(addressecGol41, uintlpASNEf, {from: accounts[5]});
		const uint256Jrfp9Aa = await LedgistLrVcl4.lockCount.call(addressBd2yyNF, {from: accounts[0]});
		const uint256hNjhN7R = await LedgistLrVcl4.currentTime.call({from: accounts[1]});

		assert.equal(boolUZRjpL5, true)
		assert.equal(uint256Jrfp9Aa, BigInt("0"))
		assert.equal(uint256hNjhN7R, BigInt("1630231956"))
	});

	it('test for Ledgis', async () => {
		const LedgistLrVcl4 = await Ledgis.new({from: accounts[2]});
		const uintRZXxrVY = BigInt("1317")
		const addressawjxp6W = accounts[1]
		const addressrQznYHS = accounts[3]
		const addresspDth6eN = accounts[0]
		const boolUZRjpL5 = await LedgistLrVcl4.increaseAllowance.call(addressawjxp6W, uintRZXxrVY, {from: accounts[5]});
		const boollR8Q5oD = await LedgistLrVcl4.isFrozen.call(addressrQznYHS, {from: accounts[0]});
		const uint256Jrfp9Aa = await LedgistLrVcl4.lockCount.call(addresspDth6eN, {from: accounts[0]});

		assert.equal(boolUZRjpL5, true)
		assert.equal(boollR8Q5oD, false)
		assert.equal(uint256Jrfp9Aa, BigInt("0"))
	});

	it('test for Ledgis', async () => {
		const LedgisbDxCgb3 = await Ledgis.new({from: accounts[0]});
		const addressrd2Gcbm = accounts[6]
		const addressrPtsv1l = accounts[3]
		const boolIwrGAIA = await LedgisbDxCgb3.isFrozen.call(addressrd2Gcbm, {from: "0x0000000000000000000000000000000000000001"});
		const uint256jTRXZIb = await LedgisbDxCgb3.balanceOf.call(addressrPtsv1l, {from: accounts[1]});
		const uint256O1Yvfy0 = await LedgisbDxCgb3.totalSupply.call({from: accounts[5]});

		assert.equal(boolIwrGAIA, false)
		assert.equal(uint256O1Yvfy0, BigInt("10000000000000"))
		assert.equal(uint256jTRXZIb, BigInt("0"))
	});

	it('test for Ledgis', async () => {
		const LedgisbDxCgb3 = await Ledgis.new({from: accounts[0]});
		const addressumyfUpI = accounts[4]
		const addressa5YEjxr = accounts[4]
		const uintwfYkL3p = BigInt("1374")
		const addressXB8MDbS = accounts[3]
		const addresslqi2dZ = accounts[1]
		const uint256ORYhaBh = await LedgisbDxCgb3.allowance.call(addressa5YEjxr, addressumyfUpI, {from: accounts[0]});
//		await LedgisbDxCgb3.whenNotFrozen.call({from: accounts[2]});
//		const boolj4qGrm1 = await LedgisbDxCgb3.transferFrom.call(addresslqi2dZ, addressXB8MDbS, uintwfYkL3p, {from: accounts[1]});

		assert.equal(uint256ORYhaBh, BigInt("0"))
		await expect(LedgisbDxCgb3.whenNotFrozen.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisbDxCgb3 = await Ledgis.new({from: accounts[0]});
		const uintJAaC1W = BigInt("1109")
		const uintXfONVkA = BigInt("1641")
		const addressLXdhnk = accounts[2]
		const uintysKIJ1N = BigInt("1374")
		const addressOhStjl = accounts[3]
		const addressNPgH7ec = accounts[2]
		const addressZq0TqTe = accounts[3]
		const addressCHuHLE5 = accounts[4]
//		const addresscrCGjQR = await LedgisbDxCgb3.lockAfter.call(addressLXdhnk, uintXfONVkA, uintJAaC1W, {from: accounts[0]});
//		const boolj4qGrm1 = await LedgisbDxCgb3.transferFrom.call(addressNPgH7ec, addressOhStjl, uintysKIJ1N, {from: accounts[1]});
//		const uint256FYlGzdD = await LedgisbDxCgb3.allowance.call(addressCHuHLE5, addressZq0TqTe, {from: accounts[3]});

		await expect(LedgisbDxCgb3.lockAfter.call(addressLXdhnk, uintXfONVkA, uintJAaC1W, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisbDxCgb3 = await Ledgis.new({from: accounts[0]});
		const uintIZ8vV52 = BigInt("1113")
		const addresscDkN2RV = accounts[2]
		const uintakfs285 = BigInt("1374")
		const addresseqkLtOi = accounts[4]
		const addressSDalI9m = accounts[1]
		const addresscL3306X = accounts[1]
		const boolA19p1H2 = await LedgisbDxCgb3.approve.call(addresscDkN2RV, uintIZ8vV52, {from: accounts[1]});
//		const boolj4qGrm1 = await LedgisbDxCgb3.transferFrom.call(addressSDalI9m, addresseqkLtOi, uintakfs285, {from: accounts[1]});
//		const uint256G3qf5X6 = await LedgisbDxCgb3.balanceOf.call(addresscL3306X, {from: accounts[1]});

		assert.equal(boolA19p1H2, true)
		await expect(LedgisbDxCgb3.transferFrom.call(addressSDalI9m, addresseqkLtOi, uintakfs285, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisbDxCgb3 = await Ledgis.new({from: accounts[0]});
		const addressaoZ6d53 = accounts[2]
		const uintO8eKrX = BigInt("1374")
		const addressVMQDXSk = accounts[3]
		const addresse7rC5Ym = accounts[2]
		const addressiEkBmjp = await LedgisbDxCgb3.freeze.call(addressaoZ6d53, {from: accounts[0]});
//		const boolj4qGrm1 = await LedgisbDxCgb3.transferFrom.call(addresse7rC5Ym, addressVMQDXSk, uintO8eKrX, {from: accounts[1]});

		await expect(LedgisbDxCgb3.transferFrom.call(addresse7rC5Ym, addressVMQDXSk, uintO8eKrX, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisHg7RV84 = await Ledgis.new({from: accounts[3]});
		const addressTQqXTZ = accounts[2]
		const uinteFUgdTR = BigInt("508")
		const addresstLoGrH = accounts[2]
		const uintzW15saz = BigInt("147")
		const uinteu0yMy2 = BigInt("165")
		const addressqaw3Uk2 = accounts[2]
		const uintBUUsWy = BigInt("351")
		const addressbnx4Mqj = accounts[2]
		const uint256sOL9ZC8 = await LedgisHg7RV84.balanceOf.call(addressTQqXTZ, {from: accounts[3]});
//		await LedgisHg7RV84.lockState.call(addresstLoGrH, uinteFUgdTR, {from: accounts[1]});
//		await LedgisHg7RV84.onlyOwner.call({from: accounts[4]});
//		const booldf9kT5D = await LedgisHg7RV84.transferWithLockAfter.call(addressqaw3Uk2, uinteu0yMy2, uintzW15saz, {from: accounts[4]});
//		const addressul58kT = await LedgisHg7RV84.burn.call(addressbnx4Mqj, uintBUUsWy, {from: accounts[2]});

		assert.equal(uint256sOL9ZC8, BigInt("0"))
		await expect(LedgisHg7RV84.lockState.call(addresstLoGrH, uinteFUgdTR, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisbDxCgb3 = await Ledgis.new({from: accounts[0]});
		const uintFxeTQxH = BigInt("1982")
		const addressNWOQIyx = accounts[4]
		const addressessod7C = accounts[6]
//		const addressDObjQSC = await LedgisbDxCgb3.burn.call(addressNWOQIyx, uintFxeTQxH, {from: accounts[0]});
//		const boolIwrGAIA = await LedgisbDxCgb3.isFrozen.call(addressessod7C, {from: "0x0000000000000000000000000000000000000001"});

		await expect(LedgisbDxCgb3.burn.call(addressNWOQIyx, uintFxeTQxH, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisbDxCgb3 = await Ledgis.new({from: accounts[0]});
		const addresssMnc6jE = accounts[5]
		const uintZDXVkVe = BigInt("1092")
		const uintcRDdT3 = BigInt("868")
		const addressQaSEpla = accounts[3]
		const boolIwrGAIA = await LedgisbDxCgb3.isFrozen.call(addresssMnc6jE, {from: "0x0000000000000000000000000000000000000001"});
		const booljCU51NN = await LedgisbDxCgb3.transferWithLockAfter.call(addressQaSEpla, uintcRDdT3, uintZDXVkVe, {from: accounts[0]});

		assert.equal(boolIwrGAIA, false)
		assert.equal(booljCU51NN, true)
	});

	it('test for Ledgis', async () => {
		const LedgiszO83OWO = await Ledgis.new({from: "0x0000000000000000000000000000000000000001"});
		const addresss3B8okx = accounts[1]
		const uintUouRiIS = BigInt("1610")
		const addressX1MR5aV = "0x0000000000000000000000000000000000000001"
		const uintwC55wuM = BigInt("2037")
		const addressRaXeRlH = accounts[2]
		const uintDodk98C = BigInt("474")
		const uintI98Cgcr = BigInt("1012")
		const addressm1jlk59 = accounts[3]
		const addressCmbOQfo = await LedgiszO83OWO.unfreeze.call(addresss3B8okx, {from: accounts[3]});
		const addresscAv2cOC = await LedgiszO83OWO.unlock.call(addressX1MR5aV, uintUouRiIS, {from: accounts[0]});
		const addressL2ZhDuF = await LedgiszO83OWO.unlock.call(addressRaXeRlH, uintwC55wuM, {from: "0x0000000000000000000000000000000000000001"});
		const addressIy7iPzh = await LedgiszO83OWO.lockAfter.call(addressm1jlk59, uintI98Cgcr, uintDodk98C, {from: accounts[4]});
	});

	it('test for Ledgis', async () => {
		const LedgisbDxCgb3 = await Ledgis.new({from: accounts[0]});
		const addressDXoNLq9 = accounts[6]
		const uintSOtht3 = BigInt("492")
		const uintW5wdIv5 = BigInt("1441")
		const addressQWagrGp = accounts[1]
		const boolIwrGAIA = await LedgisbDxCgb3.isFrozen.call(addressDXoNLq9, {from: "0x0000000000000000000000000000000000000001"});
		const boolkfsRo30 = await LedgisbDxCgb3.transferWithLock.call(addressQWagrGp, uintW5wdIv5, uintSOtht3, {from: accounts[0]});

		assert.equal(boolIwrGAIA, false)
		assert.equal(boolkfsRo30, true)
	});

	it('test for Ledgis', async () => {
		const LedgisbDxCgb3 = await Ledgis.new({from: accounts[0]});
		const addressmHpwAKL = accounts[2]
		const addressmhULytw = accounts[3]
		const addressQVzxt3Z = accounts[5]
		const uint256yLWszbu = await LedgisbDxCgb3.balanceOf.call(addressmHpwAKL, {from: accounts[0]});
		const addressahBconn = await LedgisbDxCgb3.unfreeze.call(addressmhULytw, {from: accounts[0]});
		const uint256Jgbow0 = await LedgisbDxCgb3.balanceOf.call(addressQVzxt3Z, {from: accounts[0]});

		assert.equal(uint256Jgbow0, BigInt("0"))
		assert.equal(uint256yLWszbu, BigInt("0"))
	});

	it('test for Ledgis', async () => {
		const LedgisbDxCgb3 = await Ledgis.new({from: accounts[0]});
		const addressXZPh3Ny = accounts[5]
		const uintvy4GxYN = BigInt("219")
		const uint256Jgbow0 = await LedgisbDxCgb3.balanceOf.call(addressXZPh3Ny, {from: accounts[0]});
		const uint256p7wqVF = await LedgisbDxCgb3.afterTime.call(uintvy4GxYN, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256Jgbow0, BigInt("0"))
		assert.equal(uint256p7wqVF, BigInt("1630232175"))
	});

	it('test for Ledgis', async () => {
		const LedgisbDxCgb3 = await Ledgis.new({from: accounts[0]});
		const addressmdM8RRp = accounts[2]
		const addressO6YNNGg = accounts[0]
		const addressVA6fGV8 = accounts[6]
		const addressQTt5jR1 = await LedgisbDxCgb3.transferOwnership.call(addressmdM8RRp, {from: accounts[0]});
//		const addressc7A0c0P = await LedgisbDxCgb3.freeze.call(addressO6YNNGg, {from: accounts[5]});
//		const uint256Jgbow0 = await LedgisbDxCgb3.balanceOf.call(addressVA6fGV8, {from: accounts[0]});

		await expect(LedgisbDxCgb3.freeze.call(addressO6YNNGg, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisbDxCgb3 = await Ledgis.new({from: accounts[0]});
		const uintL2RuAZp = BigInt("1884")
		const addressivOn5O = accounts[0]
		const addresskL2PxlZ = accounts[6]
//		await LedgisbDxCgb3.pause.call({from: accounts[0]});
//		const boolv0CMA08 = await LedgisbDxCgb3.decreaseAllowance.call(addressivOn5O, uintL2RuAZp, {from: accounts[5]});
//		const boolIwrGAIA = await LedgisbDxCgb3.isFrozen.call(addresskL2PxlZ, {from: "0x0000000000000000000000000000000000000001"});

		await expect(LedgisbDxCgb3.pause.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisbDxCgb3 = await Ledgis.new({from: accounts[0]});
		const uintRG8KlhR = BigInt("103")
		const uintb6kdr1J = BigInt("308")
		const addressIKIkS13 = accounts[1]
		const addressQKYhWKp = accounts[5]
//		const addressxH9eX0Q = await LedgisbDxCgb3.lock.call(addressIKIkS13, uintb6kdr1J, uintRG8KlhR, {from: accounts[0]});
//		const uint256Jgbow0 = await LedgisbDxCgb3.balanceOf.call(addressQKYhWKp, {from: accounts[0]});

		await expect(LedgisbDxCgb3.lock.call(addressIKIkS13, uintb6kdr1J, uintRG8KlhR, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisbDxCgb3 = await Ledgis.new({from: accounts[0]});
		const uintldwj8V4 = BigInt("1760")
		const uintQhRp7hk = BigInt("2034")
		const addressaECBltc = accounts[2]
		const addressIJUrQNB = accounts[6]
		const boolf15fdPE = await LedgisbDxCgb3.transferWithLockAfter.call(addressaECBltc, uintQhRp7hk, uintldwj8V4, {from: accounts[0]});
//		await LedgisbDxCgb3.unpause.call({from: accounts[0]});
//		const boolIwrGAIA = await LedgisbDxCgb3.isFrozen.call(addressIJUrQNB, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolf15fdPE, true)
		await expect(LedgisbDxCgb3.unpause.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisoawxMxZ = await Ledgis.new({from: accounts[4]});
		const uintCJB1OnW = BigInt("565")
		const addressJkGhnbX = accounts[4]
		const addressEIOXZPd = accounts[4]
		const boolaNHu8on = await LedgisoawxMxZ.mint.call(addressJkGhnbX, uintCJB1OnW, {from: accounts[4]});
//		await LedgisoawxMxZ.renounceOwnership.call({from: accounts[2]});
//		const addressPocecJX = await LedgisoawxMxZ.freeze.call(addressEIOXZPd, {from: accounts[1]});

		assert.equal(boolaNHu8on, true)
		await expect(LedgisoawxMxZ.renounceOwnership.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});
})