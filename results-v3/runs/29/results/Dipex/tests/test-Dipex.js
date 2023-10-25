const Dipex = artifacts.require("Dipex");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Dipex', (accounts) => {
	it('test for Dipex', async () => {
		const stringj4gfH1M = "5GBV6GYbD5p1JucRzWjyvR0d379NpmE9lx8W8OhJmsqBunbSJBWrw8EPisZmdNxD"
		const stringP0JasFS = "0uLRuWbZB2RCZJyjB6PxrscIQRhpYlXiouLKEzEcjzHzMBvkL9zIudKgCFrdNIhiWmnqsUTvVYID5yxX1ELRH"
		const uintvQSumUu = BigInt("1411")
		const DipexB5xFhil = await Dipex.new(stringj4gfH1M, stringP0JasFS, uintvQSumUu, {from: accounts[4]});
		const uintfL4YdQC = BigInt("322")
		const addressUSgh2hv = accounts[5]
		const addresswvZu3l1 = accounts[1]
		const uintqTDyOnd = BigInt("225")
		const addressVxYh479 = accounts[4]
		const uintmNiYi6K = BigInt("744")
		const addresscEnoHL0 = "0x0000000000000000000000000000000000000001"
		const boolHmuzsS = await DipexB5xFhil.transferFrom.call(addresswvZu3l1, addressUSgh2hv, uintfL4YdQC, {from: accounts[5]});
		const boolWh7spbD = await DipexB5xFhil.transfer.call(addressVxYh479, uintqTDyOnd, {from: accounts[2]});
		const boolyFhVlnl = await DipexB5xFhil.transfer.call(addresscEnoHL0, uintmNiYi6K, {from: accounts[0]});

		await expect(DipexB5xFhil.transferFrom.call(addresswvZu3l1, addressUSgh2hv, uintfL4YdQC, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const stringpKHS3V = "5yJJCyr9uYNW4t1P6jOyE6J"
		const stringTIsMnMC = "CqctkJjVLtQj2f6DLqE9HLIGUEfhHbaHi3LrsMsOtVGvwIGMvM6Ya7nd9bW4pu6YlbRhXUyK1Ms8SagNb9bWMldwStX7S"
		const uintVZz7zPk = BigInt("464")
		const DipexT7Qjssx = await Dipex.new(stringpKHS3V, stringTIsMnMC, uintVZz7zPk, {from: accounts[2]});
		const uintEEjY7DH = BigInt("884")
		const addressErK6x6e = accounts[1]
		const uintAtfOGR8 = BigInt("1977")
		const addressibCFlN4 = accounts[4]
		const uintdURifn8 = BigInt("441")
		const addressgigAbWp = accounts[2]
		const uintvibiIUD = BigInt("2032")
		const addressgrfQyun = accounts[1]
		const boolwVQat0o = await DipexT7Qjssx.approveAndCall.call(addressErK6x6e, uintEEjY7DH, {from: accounts[4]});
		const boollCx1evc = await DipexT7Qjssx.approve.call(addressibCFlN4, uintAtfOGR8, {from: accounts[0]});
		const boolvn4Zabt = await DipexT7Qjssx.approve.call(addressgigAbWp, uintdURifn8, {from: accounts[0]});
		const boolRdFl4jD = await DipexT7Qjssx.approveAndCall.call(addressgrfQyun, uintvibiIUD, {from: accounts[0]});

		await expect(DipexT7Qjssx.approveAndCall.call(addressErK6x6e, uintEEjY7DH, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const stringLMO7xv4 = "1QoN1AUOFHOQsbDKQnMr8gYR8yW"
		const stringi4LS6h = "elFpdA4IrdSwYymOAA16QQ1ONuWGer2JZh4RPic2tikeun4cQ07ZNAr7wdJZVRdlDd4mX4m0NHQC"
		const uintvDulFb1 = BigInt("1287")
		const DipexY0cXrV = await Dipex.new(stringLMO7xv4, stringi4LS6h, uintvDulFb1, {from: accounts[0]});
		const uintp4ChfC = BigInt("631")
		const addressHUKGoS = accounts[3]
		const uintA0soJ7a = BigInt("1421")
		const addresskGe5Von = accounts[4]
		const addressP7rxsnB = accounts[1]
		const boolBUtVqAM = await DipexY0cXrV.transfer.call(addressHUKGoS, uintp4ChfC, {from: accounts[1]});
		const boolKh92F2N = await DipexY0cXrV.transferFrom.call(addressP7rxsnB, addresskGe5Von, uintA0soJ7a, {from: accounts[3]});

		await expect(DipexY0cXrV.transfer.call(addressHUKGoS, uintp4ChfC, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const stringH2ioQY = "TsPHjjkt9AOmP2523l8xDc91IOEafQCdYOi4PxaOqnGYf25omXEvK2WnQmiUUvygI9ophS9SIKS7SHavA"
		const stringaEPniho = "yuNcODtZUXI2xy3xJmA2DLBa5sPf8oZ3rjIidnGFzr1KVQXNwqCW1Vz7vkXYumd3hlb9X6gkb7vIl6PYAJs5LHYdDIjwiX"
		const uintlb0X4SF = BigInt("837")
		const DipexUcxtp3V = await Dipex.new(stringH2ioQY, stringaEPniho, uintlb0X4SF, {from: "0x0000000000000000000000000000000000000001"});
		const uintvA7RkC = BigInt("453")
		const addresstXBbUzh = accounts[2]
		const addressNW4lvnH = accounts[5]
		const uintEJ5dqdc = BigInt("1646")
		const addressuSYpDSe = accounts[5]
		const uintGuZXUx = BigInt("701")
		const addressPwFwoXf = accounts[0]
		const uintly2tr2k = BigInt("1837")
		const addressUvSgAFd = "0x0000000000000000000000000000000000000001"
		const boolffiBrb = await DipexUcxtp3V.approveAndCall.call(addresstXBbUzh, uintvA7RkC, {from: "0x0000000000000000000000000000000000000001"});
		const boolagDtZGA = await DipexUcxtp3V.transferownership.call(addressNW4lvnH, {from: accounts[5]});
		const boolnU7JQnU = await DipexUcxtp3V.transfer.call(addressuSYpDSe, uintEJ5dqdc, {from: accounts[3]});
		const boolicHa0PS = await DipexUcxtp3V.transfer.call(addressPwFwoXf, uintGuZXUx, {from: accounts[1]});
		const boolpqeKqKw = await DipexUcxtp3V.approveAndCall.call(addressUvSgAFd, uintly2tr2k, {from: accounts[3]});
	});

	it('test for Dipex', async () => {
		const string6CRuXe = "Br76tJLsA5i1UWcY7wlLXmKivtwl6RcSauj0LmaFi"
		const stringDpE2xdP = "lJ2DY5dIf1VBUUKlRypA9TQCqRjruzwagabvv1xC7nAfGafwVcZu3vKBfQmirqKXJJ"
		const uintuGcWCiO = BigInt("290")
		const DipexeWulHu = await Dipex.new(string6CRuXe, stringDpE2xdP, uintuGcWCiO, {from: accounts[2]});
		const uintXKWDj16 = BigInt("100")
		const addressRr6qDt0 = accounts[2]
		const uintdDdsgTH = BigInt("1078")
		const addressx5CBmxl = "0x0000000000000000000000000000000000000001"
		const uinturL7H8Y = BigInt("1127")
		const addressq4Zk4S = accounts[3]
		const addresslFGYjBW = accounts[0]
		const boolje9qcXr = await DipexeWulHu.transfer.call(addressRr6qDt0, uintXKWDj16, {from: accounts[2]});
		const boollikAdx4 = await DipexeWulHu.transfer.call(addressx5CBmxl, uintdDdsgTH, {from: accounts[1]});
		const boolIxLYiea = await DipexeWulHu.transferFrom.call(addresslFGYjBW, addressq4Zk4S, uinturL7H8Y, {from: accounts[2]});

		assert.equal(boolje9qcXr, true)
		await expect(DipexeWulHu.transfer.call(addressx5CBmxl, uintdDdsgTH, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const stringav3qW2l = "SfgXbtWXXnXTWlHn21MdxeDzYd"
		const stringDe26qCn = "B2enKv9LaMYfOB3zaJwbsvoKvEppupsR6X2Y4d8JVDqaPUFIbeMJLiBSoStqPDdM2FzBTISiQqtJ"
		const uintHKSSX7 = BigInt("850")
		const DipexrF2hsUF = await Dipex.new(stringav3qW2l, stringDe26qCn, uintHKSSX7, {from: accounts[3]});
		const uintOpf5py7 = BigInt("1077")
		const addresstAizEcL = accounts[2]
		const uintopUasbQ = BigInt("543")
		const addresspsQ5pbA = "0x0000000000000000000000000000000000000001"
		const addresswP6RwPI = accounts[3]
		const boollZkYlig = await DipexrF2hsUF.approveAndCall.call(addresstAizEcL, uintOpf5py7, {from: accounts[3]});
		const boolY9Dv77T = await DipexrF2hsUF.transferFrom.call(addresswP6RwPI, addresspsQ5pbA, uintopUasbQ, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boollZkYlig, true)
		await expect(DipexrF2hsUF.transferFrom.call(addresswP6RwPI, addresspsQ5pbA, uintopUasbQ, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const string6CRuXe = "Br76tJLsA5i1UWcY7wlLXmKivtwl6RcSauj0LmaFi"
		const stringDpE2xdP = "lJ2DY5dIf1VBUUKlRypA9TQCqRjruzwagabvv1xC7nAfGafwVcZu3vKBfQmirqKXJJ"
		const uintrFNOCcc = BigInt("290")
		const DipexeWulHu = await Dipex.new(string6CRuXe, stringDpE2xdP, uintrFNOCcc, {from: accounts[2]});
		const uintlOhKbfz = BigInt("340")
		const addressYgoyLEn = accounts[3]
		const uintA42gyu = BigInt("100")
		const addressgInxKdD = accounts[2]
		const uintRgjBqv = BigInt("2011")
		const addressyEkcyJ = accounts[4]
		const uintwuULitI = BigInt("1127")
		const addressG7MXY2W = accounts[3]
		const addressGaRbp6b = accounts[0]
		const boolsMN3IV5 = await DipexeWulHu.approveAndCall.call(addressYgoyLEn, uintlOhKbfz, {from: accounts[2]});
		const boolje9qcXr = await DipexeWulHu.transfer.call(addressgInxKdD, uintA42gyu, {from: accounts[2]});
		const boolxcYwGwV = await DipexeWulHu.approve.call(addressyEkcyJ, uintRgjBqv, {from: accounts[2]});
		const boolIxLYiea = await DipexeWulHu.transferFrom.call(addressGaRbp6b, addressG7MXY2W, uintwuULitI, {from: accounts[2]});

		assert.equal(boolje9qcXr, true)
		assert.equal(boolsMN3IV5, true)
		assert.equal(boolxcYwGwV, true)
		await expect(DipexeWulHu.transferFrom.call(addressGaRbp6b, addressG7MXY2W, uintwuULitI, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const stringEh9mup5 = "2vVmLPIaL1XQeDm4bW4lb4ljn5eo3zkEBIsjBUxLVotqARn26tkO7xQ2FD1bGkBty4VIhM3VVWAV9ERXUQIy2mJ1x"
		const stringCeDIGu4 = "zMcFzivPWUfhM231HFe21LjERhCy2FViEtiUE"
		const uintcVuSeGG = BigInt("796")
		const Dipexgdi1RsN = await Dipex.new(stringEh9mup5, stringCeDIGu4, uintcVuSeGG, {from: accounts[1]});
		const uintn13T1It = BigInt("35")
		const addressbNufvw = accounts[2]
		const addressJqcR18u = accounts[3]
		const boolGYFAGZq = await Dipexgdi1RsN.approve.call(addressbNufvw, uintn13T1It, {from: "0x0000000000000000000000000000000000000001"});
		const boolYW0DT3y = await Dipexgdi1RsN.transferownership.call(addressJqcR18u, {from: accounts[3]});

		assert.equal(boolGYFAGZq, true)
		await expect(Dipexgdi1RsN.transferownership.call(addressJqcR18u, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const stringav3qW2l = "SfgXbtWXXnXTWlHn21MdxeDzYd"
		const stringDe26qCn = "B2enKv9LaMYfOB3zaJwbsvoKvEppupsR6X2Y4d8JVDqaPUFIbeMJLiBSoStqPDdM2FzBTISiQqtJ"
		const uintH8Y7dFp = BigInt("850")
		const DipexrF2hsUF = await Dipex.new(stringav3qW2l, stringDe26qCn, uintH8Y7dFp, {from: accounts[3]});
		const uintoQZnfgV = BigInt("199")
		const addressBf6j8Oo = accounts[3]
		const addresszhmNtzD = accounts[4]
		const uintmjbGDf8 = BigInt("262")
		const addressx9n1Yn2 = accounts[3]
		const boolBe1YL54 = await DipexrF2hsUF.approveAndCall.call(addressBf6j8Oo, uintoQZnfgV, {from: accounts[3]});
		const boolyGBo9l = await DipexrF2hsUF.transferownership.call(addresszhmNtzD, {from: accounts[3]});
		const boolhV7NTI1 = await DipexrF2hsUF.approveAndCall.call(addressx9n1Yn2, uintmjbGDf8, {from: accounts[1]});

		assert.equal(boolBe1YL54, true)
		assert.equal(boolyGBo9l, true)
		await expect(DipexrF2hsUF.approveAndCall.call(addressx9n1Yn2, uintmjbGDf8, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const stringLMO7xv4 = "1QoN1AUOFHOQsbDKQnMr8gYR8yW"
		const stringi4LS6h = "elFpdA4IrdSwYymOAA16QQ1ONuWGer2JZh4RPic2tikeun4cQ07ZNAr7wdJZVRdlDd4mX4m0NHQC"
		const uintMAwTrpt = BigInt("1287")
		const DipexY0cXrV = await Dipex.new(stringLMO7xv4, stringi4LS6h, uintMAwTrpt, {from: accounts[0]});
		const uinteAXR6uY = BigInt("0")
		const addressWlEsx4y = accounts[2]
		const addressXaM7QYG = accounts[2]
		const boolT3V6VDx = await DipexY0cXrV.transferFrom.call(addressXaM7QYG, addressWlEsx4y, uinteAXR6uY, {from: accounts[4]});

		assert.equal(boolT3V6VDx, true)
	});

	it('test for Dipex', async () => {
		const stringav3qW2l = "SfgXbtWXXnXTWlHn21MdxeDzYd"
		const stringDe26qCn = "B2enKv9LaMYfOB3zaJwbsvoKvEppupsR6X2Y4d8JVDqaPUFIbeMJLiBSoStqPDdM2FzBTISiQqtJ"
		const uintijv2nX = BigInt("850")
		const DipexrF2hsUF = await Dipex.new(stringav3qW2l, stringDe26qCn, uintijv2nX, {from: accounts[3]});
		const uintAKR9hJX = BigInt("0")
		const addressm2Wrknc = accounts[2]
		const uinta7foJd = BigInt("359")
		const addressWx7wcpp = accounts[2]
		const boolBe1YL54 = await DipexrF2hsUF.approveAndCall.call(addressm2Wrknc, uintAKR9hJX, {from: accounts[3]});
		const boolEwZKZlR = await DipexrF2hsUF.approve.call(addressWx7wcpp, uinta7foJd, {from: accounts[5]});

		assert.equal(boolBe1YL54, true)
		assert.equal(boolEwZKZlR, true)
	});
})