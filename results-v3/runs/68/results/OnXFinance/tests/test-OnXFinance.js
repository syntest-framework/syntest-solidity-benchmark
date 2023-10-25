const OnXFinance = artifacts.require("OnXFinance");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('OnXFinance', (accounts) => {
	it('test for OnXFinance', async () => {
		const stringPHk6vB = "dE3azRw8UxfIpBQAOSvPL8q3Jsvgr9jn2LlKpRei"
		const stringMTtdb1N = "DG5197E2eRHqcU1T9dBAmoejKzEvaqiRcWKyTlxuX"
		const uintvGcVRY1 = BigInt("392")
		const OnXFinanceHlHUov0 = await OnXFinance.new(stringPHk6vB, stringMTtdb1N, uintvGcVRY1, {from: accounts[3]});
		const addresssXzh3N5 = accounts[3]
		const uintXJLTt0z = BigInt("1958")
		const addressQrkydgP = accounts[3]
		const uintGdVNTPF = BigInt("1945")
		const addresscgWIBkg = accounts[0]
		const uintYW8Cy9n = BigInt("104")
		const addresspDakPi = accounts[4]
		const addressvwSAYUs = accounts[3]
		const stringOGEdvh = await OnXFinanceHlHUov0.name.call({from: accounts[5]});
		const uintDg4pMck = await OnXFinanceHlHUov0.balanceOf.call(addresssXzh3N5, {from: accounts[1]});
		const boolc26k24 = await OnXFinanceHlHUov0.increaseAllowance.call(addressQrkydgP, uintXJLTt0z, {from: accounts[4]});
		const boolCS5sXNk = await OnXFinanceHlHUov0.transfer.call(addresscgWIBkg, uintGdVNTPF, {from: accounts[3]});
		const boolppXXqQQ = await OnXFinanceHlHUov0.transferFrom.call(addressvwSAYUs, addresspDakPi, uintYW8Cy9n, {from: accounts[0]});

		assert.equal(stringOGEdvh, "dE3azRw8UxfIpBQAOSvPL8q3Jsvgr9jn2LlKpRei")
		assert.equal(uintDg4pMck, BigInt("392000000000000000000"))
		await expect(OnXFinanceHlHUov0.increaseAllowance.call(addressQrkydgP, uintXJLTt0z, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for OnXFinance', async () => {
		const stringJiWjLNf = "moOXL26VqvZNOJqS1qEJQrxxOWCxKwOLXAx7NCfml6gBs4MVm0vme2mF3i9gdEfl3VQv"
		const stringHSBh72m = "fvQsLWrskEdM8Ftlmtm3UqdEP98J5z189aPj36G9T5LcXfIWtlGcLcRD9"
		const uintr0y9kxG = BigInt("1665")
		const OnXFinanceqqdK5Op = await OnXFinance.new(stringJiWjLNf, stringHSBh72m, uintr0y9kxG, {from: accounts[5]});
		const uintxvh3Vbl = BigInt("1942")
		const addressYzWMcZx = accounts[5]
		const addressPGCKl6U = accounts[1]
		const boolyT1PeK = await OnXFinanceqqdK5Op.transfer.call(addressYzWMcZx, uintxvh3Vbl, {from: accounts[0]});
		const stringGtYXhB = await OnXFinanceqqdK5Op.name.call({from: accounts[2]});
		const uintzCrlMA = await OnXFinanceqqdK5Op.balanceOf.call(addressPGCKl6U, {from: accounts[2]});

		await expect(OnXFinanceqqdK5Op.transfer.call(addressYzWMcZx, uintxvh3Vbl, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for OnXFinance', async () => {
		const stringVxCz1Ne = "5VXzItPsEBFVX5KTOEK0dRtnaLREWPp6AAFYgMQLGKHccc1Ddu4R"
		const stringOxQJKDt = "bCzJcx28Y5zwjfOYyF90YIDwdQCjSWtY1hqAJm75"
		const uintKdLB86K = BigInt("1960")
		const OnXFinanceqWF76oD = await OnXFinance.new(stringVxCz1Ne, stringOxQJKDt, uintKdLB86K, {from: accounts[2]});
		const uintpTu1brR = BigInt("1850")
		const addressnEMdsc9 = accounts[4]
		const uintZKni90C = BigInt("1242")
		const address4FFnyG = accounts[2]
		const boolqtTeClE = await OnXFinanceqWF76oD.approveAndCall.call(addressnEMdsc9, uintpTu1brR, {from: accounts[2]});
		const boolQXBrO9 = await OnXFinanceqWF76oD.transfer.call(address4FFnyG, uintZKni90C, {from: accounts[0]});

		assert.equal(boolqtTeClE, true)
		await expect(OnXFinanceqWF76oD.transfer.call(address4FFnyG, uintZKni90C, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for OnXFinance', async () => {
		const stringlKO1lhn = "YGaap5jQr8YqkUitqRsFuIbwHLxTicX2cG8oOAeidpaBtAE05uUslHfFqYgh4GYM"
		const stringy7iun1W = "1V1ksNCF3hKrxFhfRJunje5z4dH6KRX5TMv3ow47ROqsdujLV2ZBGaViwBlqSPbOkbHm"
		const uintFVbQWju = BigInt("944")
		const OnXFinancexKhOBrg = await OnXFinance.new(stringlKO1lhn, stringy7iun1W, uintFVbQWju, {from: accounts[4]});
		const addresstl0DFSj = accounts[3]
		const addressy4XC9ZM = accounts[3]
		const uinttNcUjbM = BigInt("465")
		const addressCqqt83y = accounts[3]
		const addressw2YAPrh = accounts[5]
		const uintXyDQIZp = await OnXFinancexKhOBrg.allowance.call(addressy4XC9ZM, addresstl0DFSj, {from: accounts[3]});
		const uintMzbAbTB = await OnXFinancexKhOBrg.totalSupply.call({from: accounts[2]});
		const boolD7slReg = await OnXFinancexKhOBrg.transferFrom.call(addressw2YAPrh, addressCqqt83y, uinttNcUjbM, {from: accounts[4]});

		assert.equal(uintMzbAbTB, BigInt("944000000000000000000"))
		assert.equal(uintXyDQIZp, BigInt("0"))
		await expect(OnXFinancexKhOBrg.transferFrom.call(addressw2YAPrh, addressCqqt83y, uinttNcUjbM, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for OnXFinance', async () => {
		const stringPIWWSBt = "4cdX1pW2YDhCxxYQ4rfAWIC3QQTZrBtig195KN4tatyszUdUz4WilT"
		const stringX10Hdhq = "OghloIc9o8MRiMwywsM8gvqWY2GHXA62T7FkGMX1VQ26"
		const uintNUxnVba = BigInt("488")
		const OnXFinancep3tpgw7 = await OnXFinance.new(stringPIWWSBt, stringX10Hdhq, uintNUxnVba, {from: accounts[0]});
		const uintQhJ70Q1 = BigInt("1095")
		const addressUSzLlyE = accounts[2]
		const uintDEVyqJX = BigInt("430")
		const addresshv93GwG = accounts[5]
		const addressWwAjAm = accounts[4]
		const boolz6hjeSQ = await OnXFinancep3tpgw7.approve.call(addressUSzLlyE, uintQhJ70Q1, {from: accounts[4]});
		const boolQ6xOrRD = await OnXFinancep3tpgw7.transfer.call(addresshv93GwG, uintDEVyqJX, {from: accounts[0]});
		const uintPCO5cBu = await OnXFinancep3tpgw7.balanceOf.call(addressWwAjAm, {from: accounts[3]});

		assert.equal(boolQ6xOrRD, true)
		assert.equal(boolz6hjeSQ, true)
		assert.equal(uintPCO5cBu, BigInt("0"))
	});

	it('test for OnXFinance', async () => {
		const stringhLHW5p3 = "lodskvyuE5Kjh0uXuE686Dt0LhtwDlt6w5m78TQOUKbOrN9u"
		const string9kaJsd = "pMKnEhbzZ1t7Tj7GIJOcKyVGJgHPdOQxlrrLG03UlSGUFA9XXfDW1yypYncKL9"
		const uintR182udk = BigInt("304")
		const OnXFinancePn0xUN = await OnXFinance.new(stringhLHW5p3, string9kaJsd, uintR182udk, {from: accounts[1]});
		const uintmadjce7 = BigInt("1571")
		const addressi4XOOkQ = accounts[4]
		const uintjpw1JxT = BigInt("384")
		const addresssHDtQkQ = accounts[1]
		const uintJ8nRWCJ = BigInt("1855")
		const addressnObwCUq = "0x0000000000000000000000000000000000000001"
		const boolBPypqXw = await OnXFinancePn0xUN.transfer.call(addressi4XOOkQ, uintmadjce7, {from: accounts[3]});
		const boolkE7w7kM = await OnXFinancePn0xUN.approve.call(addresssHDtQkQ, uintjpw1JxT, {from: "0x0000000000000000000000000000000000000001"});
		const uint8ipFgp9E = await OnXFinancePn0xUN.decimals.call({from: accounts[0]});
		const booliR0siNS = await OnXFinancePn0xUN.transfer.call(addressnObwCUq, uintJ8nRWCJ, {from: accounts[4]});

		await expect(OnXFinancePn0xUN.transfer.call(addressi4XOOkQ, uintmadjce7, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for OnXFinance', async () => {
		const stringlKO1lhn = "YGaap5jQr8YqkUitqRsFuIbwHLxTicX2cG8oOAeidpaBtAE05uUslHfFqYgh4GYM"
		const stringy7iun1W = "1V1ksNCF3hKrxFhfRJunje5z4dH6KRX5TMv3ow47ROqsdujLV2ZBGaViwBlqSPbOkbHm"
		const uintGaYK9RY = BigInt("944")
		const OnXFinancexKhOBrg = await OnXFinance.new(stringlKO1lhn, stringy7iun1W, uintGaYK9RY, {from: accounts[4]});
		const addressNRARXic = accounts[1]
		const addressqSq7f9 = accounts[3]
		const addresshMPEHhe = accounts[3]
		const uintqxwLHv4 = BigInt("1860")
		const addresscSiB2fI = accounts[4]
		const uintbFPoC41 = BigInt("465")
		const addressQhbKxlw = accounts[3]
		const addressCr1HcOR = accounts[5]
		const boolISVSDrk = await OnXFinancexKhOBrg.transferownership.call(addressNRARXic, {from: accounts[2]});
		const uintXyDQIZp = await OnXFinancexKhOBrg.allowance.call(addresshMPEHhe, addressqSq7f9, {from: accounts[3]});
		const uintMzbAbTB = await OnXFinancexKhOBrg.totalSupply.call({from: accounts[2]});
		const boolgIMU07 = await OnXFinancexKhOBrg.approveAndCall.call(addresscSiB2fI, uintqxwLHv4, {from: accounts[4]});
		const boolD7slReg = await OnXFinancexKhOBrg.transferFrom.call(addressCr1HcOR, addressQhbKxlw, uintbFPoC41, {from: accounts[4]});

		await expect(OnXFinancexKhOBrg.transferownership.call(addressNRARXic, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for OnXFinance', async () => {
		const stringkHQbUg = "GES91tojiwxCIiEuTZbaADhat"
		const stringI6GMr7T = "pn0wKww60l5fitW51b1k"
		const uintssnwzAv = BigInt("141")
		const OnXFinanceOsslEp9 = await OnXFinance.new(stringkHQbUg, stringI6GMr7T, uintssnwzAv, {from: "0x0000000000000000000000000000000000000001"});
		const addressKvi8A0 = accounts[0]
		const uintbyElh4s = BigInt("276")
		const addressRuEaBDe = accounts[2]
		const uintVRwHEkn = BigInt("802")
		const addressRMjDm8c = accounts[3]
		const addressXViJLHO = "0x0000000000000000000000000000000000000001"
		const uintipnzgUI = BigInt("1854")
		const addressDdkGy0 = accounts[1]
		const uintqZYYqkY = BigInt("970")
		const addresslqFy1tR = "0x0000000000000000000000000000000000000001"
		const uintFIG2Krd = await OnXFinanceOsslEp9.balanceOf.call(addressKvi8A0, {from: accounts[3]});
		const boolp6U17XE = await OnXFinanceOsslEp9.transfer.call(addressRuEaBDe, uintbyElh4s, {from: accounts[2]});
		const booljR62Qdv = await OnXFinanceOsslEp9.transfer.call(addressRMjDm8c, uintVRwHEkn, {from: accounts[3]});
		const uintacKQmLd = await OnXFinanceOsslEp9.balanceOf.call(addressXViJLHO, {from: accounts[4]});
		const boolCz06Mex = await OnXFinanceOsslEp9.transfer.call(addressDdkGy0, uintipnzgUI, {from: "0x0000000000000000000000000000000000000001"});
		const boolSSkyb6n = await OnXFinanceOsslEp9.decreaseAllowance.call(addresslqFy1tR, uintqZYYqkY, {from: accounts[2]});
	});

	it('test for OnXFinance', async () => {
		const stringWtiYShM = "DbSSvmpZEP93EzttqriKgRuRzcOFPqZDs5OFdEfqAJsTLb9gAcZKQGiW9YWcoatdjDlGqjVqwHWNX6a1HPQKH"
		const stringNwv6BCb = "LDcJ7IKS3thjg6E5XpFOYHaUzB"
		const uintfYW8P9 = BigInt("1609")
		const OnXFinanceFoemTsR = await OnXFinance.new(stringWtiYShM, stringNwv6BCb, uintfYW8P9, {from: accounts[0]});
		const uintu2rnZQg = BigInt("578")
		const addressZlAaP9h = accounts[3]
		const addressp9dPqF8 = accounts[0]
		const uintKOTzQLV = BigInt("839")
		const addressaSEDThB = accounts[0]
		const uinttkOifOk = BigInt("1020")
		const addresshMCB6Jl = accounts[2]
		const uintZr9bZNO = BigInt("156")
		const addressIuY3eF7 = accounts[1]
		const boolbtrWHAT = await OnXFinanceFoemTsR.approveAndCall.call(addressZlAaP9h, uintu2rnZQg, {from: accounts[0]});
		const boolvMEPVot = await OnXFinanceFoemTsR.transferownership.call(addressp9dPqF8, {from: accounts[0]});
		const boolV8MxoCd = await OnXFinanceFoemTsR.decreaseAllowance.call(addressaSEDThB, uintKOTzQLV, {from: "0x0000000000000000000000000000000000000001"});
		const booloflRlgC = await OnXFinanceFoemTsR.approve.call(addresshMCB6Jl, uinttkOifOk, {from: accounts[1]});
		const boolsmNQ5bG = await OnXFinanceFoemTsR.decreaseAllowance.call(addressIuY3eF7, uintZr9bZNO, {from: accounts[2]});

		assert.equal(boolbtrWHAT, true)
		assert.equal(boolvMEPVot, true)
		await expect(OnXFinanceFoemTsR.decreaseAllowance.call(addressaSEDThB, uintKOTzQLV, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for OnXFinance', async () => {
		const stringWtiYShM = "DbSSvmpZEP93EzttqriKgRuRzcOFPqZDs5OFdEfqAJsTLb9gAcZKQGiW9YWcoatdjDlGqjVqwHWNX6a1HPQKH"
		const stringNwv6BCb = "LDcJ7IKS3thjg6E5XpFOYHaUzB"
		const uintWabFHyJ = BigInt("1609")
		const OnXFinanceFoemTsR = await OnXFinance.new(stringWtiYShM, stringNwv6BCb, uintWabFHyJ, {from: accounts[0]});
		const uintMyOc2u3 = BigInt("0")
		const addresspaYEp85 = accounts[1]
		const addressfNAjQDL = accounts[4]
		const addresskuTf6R3 = accounts[4]
		const boolEmroDz9 = await OnXFinanceFoemTsR.transferFrom.call(addressfNAjQDL, addresspaYEp85, uintMyOc2u3, {from: accounts[4]});
		const uintyONmPtI = await OnXFinanceFoemTsR.balanceOf.call(addresskuTf6R3, {from: accounts[4]});

		assert.equal(boolEmroDz9, true)
		assert.equal(uintyONmPtI, BigInt("0"))
	});

	it('test for OnXFinance', async () => {
		const stringlKO1lhn = "YGaap5jQr8YqkUitqRsFuIbwHLxTicX2cG8oOAeidpaBtAE05uUslHfFqYgh4GYM"
		const stringy7iun1W = "1V1ksNCF3hKrxFhfRJunje5z4dH6KRX5TMv3ow47ROqsdujLV2ZBGaViwBlqSPbOkbHm"
		const uintIbRH6cV = BigInt("944")
		const OnXFinancexKhOBrg = await OnXFinance.new(stringlKO1lhn, stringy7iun1W, uintIbRH6cV, {from: accounts[4]});
		const uintpj6AgUh = BigInt("0")
		const addressG6zmy1u = accounts[5]
		const uintcSDlHuM = BigInt("707")
		const addressczWVbtx = accounts[0]
		const uintaU1kQ3q = BigInt("69")
		const addressHqAqxa = accounts[3]
		const stringZYVR9Dx = await OnXFinancexKhOBrg.symbol.call({from: accounts[0]});
		const boolSLBGNHY = await OnXFinancexKhOBrg.approveAndCall.call(addressG6zmy1u, uintpj6AgUh, {from: accounts[4]});
		const bool8KIflV = await OnXFinancexKhOBrg.transfer.call(addressczWVbtx, uintcSDlHuM, {from: accounts[1]});
		const boolqKPYYi = await OnXFinancexKhOBrg.transfer.call(addressHqAqxa, uintaU1kQ3q, {from: accounts[4]});
		const stringoMbOn5 = await OnXFinancexKhOBrg.symbol.call({from: accounts[4]});

		assert.equal(boolSLBGNHY, true)
		assert.equal(stringZYVR9Dx, "1V1ksNCF3hKrxFhfRJunje5z4dH6KRX5TMv3ow47ROqsdujLV2ZBGaViwBlqSPbOkbHm")
		await expect(OnXFinancexKhOBrg.transfer.call(addressczWVbtx, uintcSDlHuM, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})