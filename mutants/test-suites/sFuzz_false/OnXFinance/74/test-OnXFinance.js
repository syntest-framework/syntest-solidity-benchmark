const OnXFinance = artifacts.require("OnXFinance");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('OnXFinance', (accounts) => {
	it('test for OnXFinance', async () => {
		const stringPaA87aq = "RxqJZU6MUN5MMjKk0lGL9lmQenr34ub"
		const stringAIkRfsm = "sdRMva3D2EALM"
		const uintFhXINVy = BigInt("1160")
		const OnXFinanceclJZFSB = await OnXFinance.new(stringPaA87aq, stringAIkRfsm, uintFhXINVy, {from: accounts[3]});
		const uintR584LbW = BigInt("1250")
		const addresscakMiO = accounts[2]
		const addresshyEn4HN = accounts[5]
		const uintrXzdbMa = BigInt("149")
		const addressS44qfvc = accounts[0]
		const uintryqaRaK = BigInt("1856")
		const addressc3izU9 = accounts[3]
		const addressDuf9pVd = accounts[3]
		const uintvx1jStq = BigInt("2002")
		const addressQMDNgw = accounts[1]
		const uintVxtFBdn = BigInt("977")
		const addressdJDNBgi = accounts[0]
//		const boolEh77WgN = await OnXFinanceclJZFSB.transferFrom.call(addresshyEn4HN, addresscakMiO, uintR584LbW, {from: accounts[4]});
//		const boolUYudln = await OnXFinanceclJZFSB.transfer.call(addressS44qfvc, uintrXzdbMa, {from: accounts[4]});
//		const boolgsOt3EW = await OnXFinanceclJZFSB.transferFrom.call(addressDuf9pVd, addressc3izU9, uintryqaRaK, {from: accounts[2]});
//		const boolkvJH1Ld = await OnXFinanceclJZFSB.approve.call(addressQMDNgw, uintvx1jStq, {from: accounts[3]});
//		const boolwirvBHa = await OnXFinanceclJZFSB.approve.call(addressdJDNBgi, uintVxtFBdn, {from: accounts[1]});

		await expect(OnXFinanceclJZFSB.transferFrom.call(addresshyEn4HN, addresscakMiO, uintR584LbW, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for OnXFinance', async () => {
		const stringkqKyNzr = "d3yqIMipdBaEAstSP7rL1vHzUbbgvzsnUlESwFh2EzWdQMRV0ps9gS7HpYmGfUjpy"
		const stringrKHua20 = "eh38id2j9GA8o9gQvD83wOPOMoPi5whfEtZF6hDm7rb87RLf5ICddLEHAKPCMvRCki2MPL24KJMrhvJV"
		const uintzN947t = BigInt("1070")
		const OnXFinanceShHAt83 = await OnXFinance.new(stringkqKyNzr, stringrKHua20, uintzN947t, {from: accounts[0]});
		const uint6V61MI = BigInt("55")
		const addressm8rUPl = accounts[0]
		const uintZYcDtML = BigInt("1311")
		const addressDD9WLpY = accounts[1]
		const uintKlbBcuL = BigInt("605")
		const addressTDz8Iiz = accounts[4]
		const stringygNDPef = await OnXFinanceShHAt83.symbol.call({from: accounts[2]});
//		const booldRpMHE2 = await OnXFinanceShHAt83.increaseAllowance.call(addressm8rUPl, uint6V61MI, {from: accounts[1]});
//		const boolajd2m54 = await OnXFinanceShHAt83.decreaseAllowance.call(addressDD9WLpY, uintZYcDtML, {from: accounts[0]});
//		const booluDNxG5a = await OnXFinanceShHAt83.transfer.call(addressTDz8Iiz, uintKlbBcuL, {from: accounts[0]});

		assert.equal(stringygNDPef, "eh38id2j9GA8o9gQvD83wOPOMoPi5whfEtZF6hDm7rb87RLf5ICddLEHAKPCMvRCki2MPL24KJMrhvJV")
		await expect(OnXFinanceShHAt83.increaseAllowance.call(addressm8rUPl, uint6V61MI, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for OnXFinance', async () => {
		const stringyFCiLve = "QVawoMif7sqy0SgQYEinscwQnn6kNgsF0lMCXc8Wda87olzdEYkilNLz3Q7kqEGvogQ2UEr1bBJWw"
		const stringCiyImSg = "C7E5LfYm0CfERc2lY68ZuNhHqQFMNAepPbs2vqp3sgs89ztxbgHCKARXspRz7rzvVSnch65WjEqIXZuVe0AhJAT7ajXq1"
		const uintGWzkS0D = BigInt("27")
		const OnXFinanceLZy7EtO = await OnXFinance.new(stringyFCiLve, stringCiyImSg, uintGWzkS0D, {from: accounts[1]});
		const uinthbSjcd8 = BigInt("2026")
		const addressntE1dJO = accounts[3]
		const addressBN1XdXX = accounts[1]
		const addressPNon7TD = accounts[1]
		const uintcDEsNeA = BigInt("1681")
		const addresstpDSqWh = accounts[0]
		const uinttf8pa4j = BigInt("27")
		const addressygE4kz = accounts[4]
		const addressgBRzenH = accounts[3]
		const addressUpUa6uW = "0x0000000000000000000000000000000000000001"
		const uintb9e0uJz = BigInt("1474")
		const addressAdImdN9 = accounts[0]
//		const boolgRM2vRL = await OnXFinanceLZy7EtO.approveAndCall.call(addressntE1dJO, uinthbSjcd8, {from: accounts[5]});
//		const uintS2SkcMw = await OnXFinanceLZy7EtO.allowance.call(addressPNon7TD, addressBN1XdXX, {from: accounts[0]});
//		const boolXrBaVQv = await OnXFinanceLZy7EtO.approve.call(addresstpDSqWh, uintcDEsNeA, {from: accounts[3]});
//		const boolqOoPj9G = await OnXFinanceLZy7EtO.decreaseAllowance.call(addressygE4kz, uinttf8pa4j, {from: accounts[4]});
//		const uintbTF45Qs = await OnXFinanceLZy7EtO.allowance.call(addressUpUa6uW, addressgBRzenH, {from: accounts[2]});
//		const boolHFsP3DC = await OnXFinanceLZy7EtO.approve.call(addressAdImdN9, uintb9e0uJz, {from: accounts[4]});

		await expect(OnXFinanceLZy7EtO.approveAndCall.call(addressntE1dJO, uinthbSjcd8, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for OnXFinance', async () => {
		const stringEN0zoY = "jY4s4T5HnTyywiAXMOQzUd1ZB2jBkf2gfWjlFxFaBn3rc5q8IR9bf9wHkBSrkb5XX225dlvacwJXV8SXvji"
		const stringqrNjCUI = "xrguU3gyG76AstLnrAdTmBi0JNXP74zcTXU7afzWWbKamSWaC"
		const uinteuhBgJH = BigInt("189")
		const OnXFinanceJGAd7b = await OnXFinance.new(stringEN0zoY, stringqrNjCUI, uinteuhBgJH, {from: accounts[2]});
		const addressdyoHlik = accounts[4]
		const addressxb2uZod = accounts[1]
		const uintZ2L26Dv = BigInt("32")
		const addressXROK5jJ = accounts[5]
		const addresskdEGi8Y = accounts[5]
		const addressKktdkib = accounts[3]
		const uint8wC4DDX4 = await OnXFinanceJGAd7b.decimals.call({from: accounts[4]});
		const uintaIMn4XA = await OnXFinanceJGAd7b.allowance.call(addressxb2uZod, addressdyoHlik, {from: accounts[1]});
		const stringDEXtAB = await OnXFinanceJGAd7b.symbol.call({from: "0x0000000000000000000000000000000000000001"});
		const boolEcIGF6r = await OnXFinanceJGAd7b.approve.call(addressXROK5jJ, uintZ2L26Dv, {from: accounts[2]});
		const uintsYQ1soN = await OnXFinanceJGAd7b.allowance.call(addressKktdkib, addresskdEGi8Y, {from: accounts[1]});

		assert.equal(boolEcIGF6r, true)
		assert.equal(stringDEXtAB, "xrguU3gyG76AstLnrAdTmBi0JNXP74zcTXU7afzWWbKamSWaC")
		assert.equal(uint8wC4DDX4, BigInt("18"))
		assert.equal(uintaIMn4XA, BigInt("0"))
		assert.equal(uintsYQ1soN, BigInt("0"))
	});

	it('test for OnXFinance', async () => {
		const stringhaVP3FV = "Ouxbcqtiruv1DIR5gFKWmnXKXvWbojzgkci4dV3LJC3PeSn8LQUbx"
		const stringvCHr9A3 = "AjfTtMFOPcSm3AetjDaHXgKR9SIQfr71BrsXiq3XcHttEnXFvs"
		const uinth1hH7LJ = BigInt("1120")
		const OnXFinanceXgxQ6Ku = await OnXFinance.new(stringhaVP3FV, stringvCHr9A3, uinth1hH7LJ, {from: accounts[2]});
		const uintdbC8JJ = BigInt("17")
		const addressnENs3vp = accounts[2]
		const uintYgWurVX = BigInt("187")
		const addressTvcqn7 = accounts[4]
		const addressX8894Ul = accounts[4]
		const uintxLnaZw4 = BigInt("357")
		const addresspweLRnd = accounts[4]
		const addressOp7kxwx = accounts[1]
		const addressLyr9CJ = accounts[5]
		const addressxw46dZL = accounts[2]
		const booluvSWfp8 = await OnXFinanceXgxQ6Ku.approve.call(addressnENs3vp, uintdbC8JJ, {from: "0x0000000000000000000000000000000000000001"});
//		const boolwtJKMyy = await OnXFinanceXgxQ6Ku.transferFrom.call(addressX8894Ul, addressTvcqn7, uintYgWurVX, {from: accounts[4]});
//		const stringk0cErn = await OnXFinanceXgxQ6Ku.name.call({from: accounts[2]});
//		const boolA79Cgc9 = await OnXFinanceXgxQ6Ku.approve.call(addresspweLRnd, uintxLnaZw4, {from: accounts[3]});
//		const uinttNxURfp = await OnXFinanceXgxQ6Ku.allowance.call(addressLyr9CJ, addressOp7kxwx, {from: accounts[3]});
//		const boolVC8dNez = await OnXFinanceXgxQ6Ku.transferownership.call(addressxw46dZL, {from: accounts[5]});

		assert.equal(booluvSWfp8, true)
		await expect(OnXFinanceXgxQ6Ku.transferFrom.call(addressX8894Ul, addressTvcqn7, uintYgWurVX, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for OnXFinance', async () => {
		const stringzxywY0A = "Ln9FUV1kCh6PHkrNNrNTwnEsxf8xvmTiVpwMAQejB2djkBkW3TPgnQ8xKV5s"
		const stringTQU38Tg = "Rl9DU9uvF1BBUVccX1knFyIhLhZDG4chf1U2tPSGoHrnXJw2GPcrnqVV72r6BHKeEmd4GYihk9mRiugnKXvcffWXjh94yh"
		const uintzkMBtPZ = BigInt("143")
		const OnXFinancepmltuSi = await OnXFinance.new(stringzxywY0A, stringTQU38Tg, uintzkMBtPZ, {from: accounts[4]});
		const uintRPOetDD = BigInt("1711")
		const addresswMLymFi = accounts[5]
		const stringdx9QLl = await OnXFinancepmltuSi.name.call({from: "0x0000000000000000000000000000000000000001"});
		const uintKZCp7xV = await OnXFinancepmltuSi.totalSupply.call({from: accounts[1]});
		const stringXv56M1C = await OnXFinancepmltuSi.symbol.call({from: accounts[2]});
//		const booleW1uYzT = await OnXFinancepmltuSi.transfer.call(addresswMLymFi, uintRPOetDD, {from: accounts[3]});

		assert.equal(stringXv56M1C, "Rl9DU9uvF1BBUVccX1knFyIhLhZDG4chf1U2tPSGoHrnXJw2GPcrnqVV72r6BHKeEmd4GYihk9mRiugnKXvcffWXjh94yh")
		assert.equal(stringdx9QLl, "Ln9FUV1kCh6PHkrNNrNTwnEsxf8xvmTiVpwMAQejB2djkBkW3TPgnQ8xKV5s")
		assert.equal(uintKZCp7xV, BigInt("143000000000000000000"))
		await expect(OnXFinancepmltuSi.transfer.call(addresswMLymFi, uintRPOetDD, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for OnXFinance', async () => {
		const stringtg4y5zu = "haLUVF80lyM8a1leRTCSKIZP"
		const stringhl4cH1o = "tbXDNBVAdq1twCZ"
		const uintJjV6jPS = BigInt("1029")
		const OnXFinancejngBaOx = await OnXFinance.new(stringtg4y5zu, stringhl4cH1o, uintJjV6jPS, {from: accounts[2]});
		const addressw3hpLwM = accounts[0]
		const uintiLtjnzb = BigInt("822")
		const addressz2Xxxvb = accounts[1]
		const addressrGSHVa0 = "0x0000000000000000000000000000000000000001"
//		const boolkQMC97M = await OnXFinancejngBaOx.transferownership.call(addressw3hpLwM, {from: "0x0000000000000000000000000000000000000001"});
//		const stringezj2f9 = await OnXFinancejngBaOx.symbol.call({from: accounts[0]});
//		const boolp5exH21 = await OnXFinancejngBaOx.decreaseAllowance.call(addressz2Xxxvb, uintiLtjnzb, {from: accounts[0]});
//		const stringaYzGKKC = await OnXFinancejngBaOx.symbol.call({from: accounts[0]});
//		const uintgTLoiA8 = await OnXFinancejngBaOx.balanceOf.call(addressrGSHVa0, {from: accounts[3]});

		await expect(OnXFinancejngBaOx.transferownership.call(addressw3hpLwM, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for OnXFinance', async () => {
		const stringhaVP3FV = "Ouxbcqtiruv1DIR5gFKWmnXKXvWbojzgkci4dV3LJC3PeSn8LQUbx"
		const stringvCHr9A3 = "AjfTtMFOPcSm3AetjDaHXgKR9SIQfr71BrsXiq3XcHttEnXFvs"
		const uintmddsvAx = BigInt("1120")
		const OnXFinanceXgxQ6Ku = await OnXFinance.new(stringhaVP3FV, stringvCHr9A3, uintmddsvAx, {from: accounts[2]});
		const uintAkaxrtB = BigInt("17")
		const addressUSAH4rk = accounts[3]
		const uintMym6Gxr = BigInt("759")
		const addressfE6VZ8f = accounts[4]
		const uintcaHMt4t = BigInt("187")
		const addressdYEOaP4 = accounts[4]
		const addressVytBGa1 = accounts[4]
		const uintRzEZ6rm = BigInt("357")
		const addressH72zmb4 = accounts[4]
		const addressYmTNscM = accounts[1]
		const addressfSLH9Ja = accounts[6]
		const booluvSWfp8 = await OnXFinanceXgxQ6Ku.approve.call(addressUSAH4rk, uintAkaxrtB, {from: "0x0000000000000000000000000000000000000001"});
		const booldIizx3 = await OnXFinanceXgxQ6Ku.approveAndCall.call(addressfE6VZ8f, uintMym6Gxr, {from: accounts[2]});
//		const boolwtJKMyy = await OnXFinanceXgxQ6Ku.transferFrom.call(addressVytBGa1, addressdYEOaP4, uintcaHMt4t, {from: accounts[4]});
//		const boolA79Cgc9 = await OnXFinanceXgxQ6Ku.approve.call(addressH72zmb4, uintRzEZ6rm, {from: accounts[3]});
//		const uinttNxURfp = await OnXFinanceXgxQ6Ku.allowance.call(addressfSLH9Ja, addressYmTNscM, {from: accounts[3]});

		assert.equal(booldIizx3, true)
		assert.equal(booluvSWfp8, true)
		await expect(OnXFinanceXgxQ6Ku.transferFrom.call(addressVytBGa1, addressdYEOaP4, uintcaHMt4t, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for OnXFinance', async () => {
		const stringeEf4zr7 = "Vw4kaaDXl2scoysYPEBTEvCjMOngCSdHGl9cKEQrhOPMoqykHbMDk4RvPyNQrCfGxtrlLHjA8EZLEOh9XeIrpK"
		const stringaEujZ9F = "q4wycuMUcafktOeQdu6"
		const uintSGtoB5P = BigInt("74")
		const OnXFinanceWyZMwQ = await OnXFinance.new(stringeEf4zr7, stringaEujZ9F, uintSGtoB5P, {from: "0x0000000000000000000000000000000000000001"});
		const uintD6dZcvm = BigInt("1053")
		const addressgR6CzJQ = accounts[4]
		const uintggUyUp = BigInt("1238")
		const addressMlxqBWH = accounts[4]
		const boolKNpNHsw = await OnXFinanceWyZMwQ.transfer.call(addressgR6CzJQ, uintD6dZcvm, {from: "0x0000000000000000000000000000000000000001"});
		const boolqIhUMhn = await OnXFinanceWyZMwQ.approveAndCall.call(addressMlxqBWH, uintggUyUp, {from: accounts[2]});
		const uintwT9BLjd = await OnXFinanceWyZMwQ.totalSupply.call({from: accounts[0]});
		const stringSOuc8Nx = await OnXFinanceWyZMwQ.symbol.call({from: accounts[4]});
	});

	it('test for OnXFinance', async () => {
		const stringXYdGFh = "Qeb15i2iFliS8eYTAbjdRsANIfq3JHB5Is6qeCVQgglTkpITuulc8DulMXhdTPaLir1j6UkY2LfDFU09ur0HrjUpwcED"
		const stringj2zJyN = "u4UijlDC2RYJh4vkviixGR1aOPbeA9ALfDkKKPo5eQaJ33XHUz"
		const uinta58HWJ4 = BigInt("127")
		const OnXFinanceUIAKieL = await OnXFinance.new(stringXYdGFh, stringj2zJyN, uinta58HWJ4, {from: accounts[1]});
		const uintEzOsTUS = BigInt("22")
		const addressxtAmidh = accounts[2]
		const uintLeKi38 = BigInt("1960")
		const addressTcysMj8 = accounts[5]
		const uintDJBP0J3 = BigInt("290")
		const addressc1xMpf = accounts[3]
		const boolsPh2SOK = await OnXFinanceUIAKieL.transfer.call(addressxtAmidh, uintEzOsTUS, {from: accounts[1]});
//		const boolPWipssa = await OnXFinanceUIAKieL.transfer.call(addressTcysMj8, uintLeKi38, {from: accounts[3]});
//		const boolnYsrZcA = await OnXFinanceUIAKieL.approve.call(addressc1xMpf, uintDJBP0J3, {from: accounts[3]});

		assert.equal(boolsPh2SOK, true)
		await expect(OnXFinanceUIAKieL.transfer.call(addressTcysMj8, uintLeKi38, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for OnXFinance', async () => {
		const stringXYdGFh = "Qeb15i2iFliS8eYTAbjdRsANIfq3JHB5Is6qeCVQgglTkpITuulc8DulMXhdTPaLir1j6UkY2LfDFU09ur0HrjUpwcED"
		const stringj2zJyN = "u4UijlDC2RYJh4vkviixGR1aOPbeA9ALfDkKKPo5eQaJ33XHUz"
		const uintPtBSDPX = BigInt("127")
		const OnXFinanceUIAKieL = await OnXFinance.new(stringXYdGFh, stringj2zJyN, uintPtBSDPX, {from: accounts[1]});
		const uintqyvtmNf = BigInt("1784")
		const addressCEMM4xw = accounts[3]
		const uintSmUSzEE = BigInt("0")
		const addressOQF37d8 = accounts[3]
		const uintOVU4BUh = BigInt("1925")
		const addressreOJFVM = accounts[4]
		const uinteQj9xfs = BigInt("1540")
		const addressDMFfuO2 = accounts[3]
		const boolzzd0Vah = await OnXFinanceUIAKieL.approve.call(addressCEMM4xw, uintqyvtmNf, {from: accounts[4]});
		const boolsPh2SOK = await OnXFinanceUIAKieL.transfer.call(addressOQF37d8, uintSmUSzEE, {from: accounts[1]});
//		const boolR8dxEI1 = await OnXFinanceUIAKieL.approveAndCall.call(addressreOJFVM, uintOVU4BUh, {from: accounts[3]});
//		const boolTRkWpn1 = await OnXFinanceUIAKieL.approveAndCall.call(addressDMFfuO2, uinteQj9xfs, {from: accounts[2]});

		assert.equal(boolsPh2SOK, true)
		assert.equal(boolzzd0Vah, true)
		await expect(OnXFinanceUIAKieL.approveAndCall.call(addressreOJFVM, uintOVU4BUh, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for OnXFinance', async () => {
		const stringhaVP3FV = "Ouxbcqtiruv1DIR5gFKWmnXKXvWbojzgkci4dV3LJC3PeSn8LQUbx"
		const stringvCHr9A3 = "AjfTtMFOPcSm3AetjDaHXgKR9SIQfr71BrsXiq3XcHttEnXFvs"
		const uintollgVdP = BigInt("1120")
		const OnXFinanceXgxQ6Ku = await OnXFinance.new(stringhaVP3FV, stringvCHr9A3, uintollgVdP, {from: accounts[2]});
		const addressn5OHeDG = accounts[5]
		const addressKRPJGe = accounts[3]
		const addressx7micf4 = accounts[2]
		const uintQpV98A = BigInt("0")
		const addressH3lpfoQ = accounts[4]
		const uintCYBOxZp = await OnXFinanceXgxQ6Ku.allowance.call(addressKRPJGe, addressn5OHeDG, {from: accounts[3]});
		const uintDWBx7c2 = await OnXFinanceXgxQ6Ku.balanceOf.call(addressx7micf4, {from: accounts[0]});
		const booldIizx3 = await OnXFinanceXgxQ6Ku.approveAndCall.call(addressH3lpfoQ, uintQpV98A, {from: accounts[2]});

		assert.equal(booldIizx3, true)
		assert.equal(uintCYBOxZp, BigInt("0"))
		assert.equal(uintDWBx7c2, BigInt("1120000000000000000000"))
	});
})