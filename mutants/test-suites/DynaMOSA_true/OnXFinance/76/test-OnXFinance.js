const OnXFinance = artifacts.require("OnXFinance");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('OnXFinance', (accounts) => {
	it('test for OnXFinance', async () => {
		const stringhjYErwA = "Tng6ZJdn5KCl9qnc1pRszpQcSj3nN1M8zfaOGwylhVnk5liye6nUfSFlN1EFq86jFSb"
		const string1z9drG = "RbUUfflm"
		const uint9hQ3OA = BigInt("1983")
		const OnXFinancebGsWG9Q = await OnXFinance.new(stringhjYErwA, string1z9drG, uint9hQ3OA, {from: accounts[2]});
		const uintXYqSKRv = BigInt("309")
		const addresseOYlKk = accounts[0]
		const uintv2T4t3G = BigInt("1097")
		const address5WtqyE = accounts[0]
		const uintjLrpgwh = BigInt("766")
		const addressEVcepJX = "0x0000000000000000000000000000000000000001"
		const uintZpb7rxd = BigInt("1540")
		const address8zzMaM = accounts[2]
		const uintxjLCLb2 = BigInt("1465")
		const addressz7x9mN5 = accounts[0]
		const uintYa4np05 = BigInt("1386")
		const addresslJ3kjSt = accounts[3]
//		const boolWwhn9IP = await OnXFinancebGsWG9Q.decreaseAllowance.call(addresseOYlKk, uintXYqSKRv, {from: accounts[1]});
//		const boolpDLqeLs = await OnXFinancebGsWG9Q.approve.call(address5WtqyE, uintv2T4t3G, {from: accounts[4]});
//		const boolTTr9FxM = await OnXFinancebGsWG9Q.increaseAllowance.call(addressEVcepJX, uintjLrpgwh, {from: accounts[2]});
//		const bool8ccuca = await OnXFinancebGsWG9Q.approve.call(address8zzMaM, uintZpb7rxd, {from: accounts[4]});
//		const boolTAehlCW = await OnXFinancebGsWG9Q.decreaseAllowance.call(addressz7x9mN5, uintxjLCLb2, {from: accounts[1]});
//		const boolbiOMGZf = await OnXFinancebGsWG9Q.approveAndCall.call(addresslJ3kjSt, uintYa4np05, {from: accounts[0]});

		await expect(OnXFinancebGsWG9Q.decreaseAllowance.call(addresseOYlKk, uintXYqSKRv, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for OnXFinance', async () => {
		const stringXpOH7tM = "EL"
		const stringNdzoGx6 = "YMs2E5y8R9HbNtJIEqWdzceYcZKii6BfXybHcVVDI"
		const uintCVzFvfw = BigInt("2001")
		const OnXFinancejOMPWy5 = await OnXFinance.new(stringXpOH7tM, stringNdzoGx6, uintCVzFvfw, {from: accounts[2]});
		const uintEyIQpVW = BigInt("1159")
		const addressTQ8MgNB = accounts[3]
		const uinttucWorv = BigInt("1334")
		const addressMrFtQKv = accounts[1]
		const boolrfkZV0f = await OnXFinancejOMPWy5.approve.call(addressTQ8MgNB, uintEyIQpVW, {from: accounts[2]});
//		const boolnZFW4D2 = await OnXFinancejOMPWy5.transfer.call(addressMrFtQKv, uinttucWorv, {from: accounts[1]});
//		const uint8qB4Z1Nt = await OnXFinancejOMPWy5.decimals.call({from: accounts[5]});

		assert.equal(boolrfkZV0f, true)
		await expect(OnXFinancejOMPWy5.transfer.call(addressMrFtQKv, uinttucWorv, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for OnXFinance', async () => {
		const stringEmT4p4M = "CLRprXwbg8TgaTFcCjqemf9iJbYnSPQUg3LjoPUoh8YIWKq"
		const stringAf4ybn = "D1XClf8FglzYrIEevvjzvXESvDsFdz92WqMXpJxDK"
		const uintO5Ibenu = BigInt("1473")
		const OnXFinanceHyaivf7 = await OnXFinance.new(stringEmT4p4M, stringAf4ybn, uintO5Ibenu, {from: accounts[4]});
		const uintlGzaHqT = BigInt("1891")
		const addressSDL5RVO = accounts[4]
		const uint6nT4Ia = BigInt("1959")
		const addressm7SMoh = accounts[4]
		const uinty9Q6wbb = BigInt("798")
		const addressCAygOJ7 = "0x0000000000000000000000000000000000000001"
//		const booliQ5Pf3F = await OnXFinanceHyaivf7.transfer.call(addressSDL5RVO, uintlGzaHqT, {from: accounts[0]});
//		const stringYjWnScH = await OnXFinanceHyaivf7.name.call({from: accounts[1]});
//		const bool28Iqzb = await OnXFinanceHyaivf7.decreaseAllowance.call(addressm7SMoh, uint6nT4Ia, {from: accounts[3]});
//		const booldrIvqS = await OnXFinanceHyaivf7.increaseAllowance.call(addressCAygOJ7, uinty9Q6wbb, {from: accounts[0]});

		await expect(OnXFinanceHyaivf7.transfer.call(addressSDL5RVO, uintlGzaHqT, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for OnXFinance', async () => {
		const stringOjaqQtG = "SsHmScEv4rAGFww9NPAnCuWnqTaBfC9rmKS8AwCqCK7yjLWSJDnij4mlPKrkBiqk6dRH5WkvyOeBf1ML2Rao2m1"
		const stringEK52qlH = "6kQWMvhYFz450JMoXvPRTkKv1mqmjNJqT7EWU9CJ0IXovwDV7l8w72VjzeEkBMpKirCeO2rz"
		const uintJMmUQfY = BigInt("153")
		const OnXFinancensz0dUM = await OnXFinance.new(stringOjaqQtG, stringEK52qlH, uintJMmUQfY, {from: accounts[5]});
		const addressRGsJtcP = accounts[2]
		const addressFHQFsoC = accounts[2]
		const addressv7gtJtM = accounts[3]
		const uinthoYI5Vk = BigInt("1613")
		const addressp2rHq6 = accounts[1]
		const stringyuLemBE = await OnXFinancensz0dUM.symbol.call({from: accounts[3]});
		const uintbVuOYVY = await OnXFinancensz0dUM.allowance.call(addressFHQFsoC, addressRGsJtcP, {from: "0x0000000000000000000000000000000000000001"});
//		const boolvNhMLM = await OnXFinancensz0dUM.transferownership.call(addressv7gtJtM, {from: accounts[0]});
//		const boolQoXiRzT = await OnXFinancensz0dUM.approve.call(addressp2rHq6, uinthoYI5Vk, {from: accounts[1]});

		assert.equal(stringyuLemBE, "6kQWMvhYFz450JMoXvPRTkKv1mqmjNJqT7EWU9CJ0IXovwDV7l8w72VjzeEkBMpKirCeO2rz")
		assert.equal(uintbVuOYVY, BigInt("0"))
		await expect(OnXFinancensz0dUM.transferownership.call(addressv7gtJtM, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for OnXFinance', async () => {
		const stringEXTZrpr = "Sld2tgvegFR3k232yXgd"
		const stringJAtRr43 = "J3tvyT9xLT71GWHZZwbGOfD1DYBJjwwIH3i82A2U7fKXEnzHqEcOccK84TXLnzHhpNReXxuSiUa1ucRJIrHQBRVFVrM9Hxj"
		const uintXvyvhRz = BigInt("1875")
		const OnXFinancem8Lmt8D = await OnXFinance.new(stringEXTZrpr, stringJAtRr43, uintXvyvhRz, {from: accounts[4]});
		const uintPaoXHki = BigInt("675")
		const addressuo1Xft7 = accounts[2]
		const addressSi5uV3T = accounts[0]
		const uintno8KsH5 = BigInt("1636")
		const addresspZSVGl6 = accounts[0]
		const addressleKtx1v = accounts[1]
		const addressmTEJ2dI = accounts[4]
		const addressrhPchFt = accounts[3]
		const uintQfF8SUh = BigInt("906")
		const addressiqjwIBR = accounts[4]
		const boolE3T5v2x = await OnXFinancem8Lmt8D.approve.call(addressuo1Xft7, uintPaoXHki, {from: accounts[3]});
		const uintrWvy69 = await OnXFinancem8Lmt8D.balanceOf.call(addressSi5uV3T, {from: accounts[5]});
//		const booluCONsJr = await OnXFinancem8Lmt8D.transferFrom.call(addressleKtx1v, addresspZSVGl6, uintno8KsH5, {from: accounts[0]});
//		const uintrwAjUQa = await OnXFinancem8Lmt8D.allowance.call(addressrhPchFt, addressmTEJ2dI, {from: accounts[0]});
//		const boolx9bGbio = await OnXFinancem8Lmt8D.approve.call(addressiqjwIBR, uintQfF8SUh, {from: accounts[3]});

		assert.equal(boolE3T5v2x, true)
		assert.equal(uintrWvy69, BigInt("0"))
		await expect(OnXFinancem8Lmt8D.transferFrom.call(addressleKtx1v, addresspZSVGl6, uintno8KsH5, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for OnXFinance', async () => {
		const stringWM9VAGb = "Tbqv3"
		const stringVeCyO34 = "XyNnzZb1p2PXOrBT4eaH8OZhBmURlMHqTAUXAWv5eU69Mn5RtGEsxK9Pq6hLA"
		const uintn0y0wv2 = BigInt("139")
		const OnXFinancexnl2LdQ = await OnXFinance.new(stringWM9VAGb, stringVeCyO34, uintn0y0wv2, {from: accounts[1]});
		const uintN2oTZC5 = BigInt("1955")
		const addressmJaiWvs = accounts[2]
		const uintY3xaMqg = BigInt("1999")
		const addressjdEyEVH = accounts[2]
		const addressrsAKPf7 = accounts[2]
		const addressuw5DrwI = accounts[1]
		const addressCiCUkSv = accounts[0]
		const addressPMCCS3D = accounts[4]
//		const boolxshM6Pe = await OnXFinancexnl2LdQ.approveAndCall.call(addressmJaiWvs, uintN2oTZC5, {from: accounts[0]});
//		const boolJopQA6h = await OnXFinancexnl2LdQ.transfer.call(addressjdEyEVH, uintY3xaMqg, {from: accounts[0]});
//		const uintERGRz8J = await OnXFinancexnl2LdQ.allowance.call(addressuw5DrwI, addressrsAKPf7, {from: accounts[4]});
//		const uint8PM0i08Q = await OnXFinancexnl2LdQ.decimals.call({from: accounts[3]});
//		const uint8bYRLGUD = await OnXFinancexnl2LdQ.decimals.call({from: accounts[5]});
//		const uintBWGCE8M = await OnXFinancexnl2LdQ.allowance.call(addressPMCCS3D, addressCiCUkSv, {from: accounts[0]});

		await expect(OnXFinancexnl2LdQ.approveAndCall.call(addressmJaiWvs, uintN2oTZC5, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for OnXFinance', async () => {
		const stringXpOH7tM = "EL"
		const stringNdzoGx6 = "YMs2E5y8R9HbNtJIEqWdzceYcZKii6BfXybHcVVDI"
		const uintR4GJPeB = BigInt("2001")
		const OnXFinancejOMPWy5 = await OnXFinance.new(stringXpOH7tM, stringNdzoGx6, uintR4GJPeB, {from: accounts[2]});
		const uintpGfmOUF = BigInt("2")
		const addressbw6m9Da = accounts[0]
		const uintGXZmn3b = BigInt("1159")
		const addresszJmtaAY = accounts[3]
		const uintfMmYU6A = BigInt("701")
		const addressOALvGio = accounts[1]
		const uintUaj0GVr = BigInt("1341")
		const addressR3lTycG = accounts[1]
		const boolrlXkSnS = await OnXFinancejOMPWy5.approveAndCall.call(addressbw6m9Da, uintpGfmOUF, {from: accounts[2]});
		const boolrfkZV0f = await OnXFinancejOMPWy5.approve.call(addresszJmtaAY, uintGXZmn3b, {from: accounts[2]});
//		const boolpPlfFGJ = await OnXFinancejOMPWy5.increaseAllowance.call(addressOALvGio, uintfMmYU6A, {from: "0x0000000000000000000000000000000000000001"});
//		const boolnZFW4D2 = await OnXFinancejOMPWy5.transfer.call(addressR3lTycG, uintUaj0GVr, {from: accounts[1]});
//		const uint8qB4Z1Nt = await OnXFinancejOMPWy5.decimals.call({from: accounts[5]});

		assert.equal(boolrfkZV0f, true)
		assert.equal(boolrlXkSnS, true)
		await expect(OnXFinancejOMPWy5.increaseAllowance.call(addressOALvGio, uintfMmYU6A, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for OnXFinance', async () => {
		const stringSLNg3QG = "NQQNdpTmw39bygh"
		const stringmo0MXVJ = "44Ip0OidhVyUAh5lMS"
		const uintTNuAKfO = BigInt("242")
		const OnXFinanceUvA9fPk = await OnXFinance.new(stringSLNg3QG, stringmo0MXVJ, uintTNuAKfO, {from: "0x0000000000000000000000000000000000000001"});
		const addressXaockW = accounts[0]
		const addressqM5O7O7 = accounts[0]
		const uintst31WcR = BigInt("1137")
		const addressKdVDRXR = accounts[2]
		const uintTmT0R6B = await OnXFinanceUvA9fPk.balanceOf.call(addressXaockW, {from: accounts[4]});
		const stringURhdbU = await OnXFinanceUvA9fPk.name.call({from: accounts[2]});
		const uintVVy80QL = await OnXFinanceUvA9fPk.balanceOf.call(addressqM5O7O7, {from: "0x0000000000000000000000000000000000000001"});
		const uint8kVmRMUW = await OnXFinanceUvA9fPk.decimals.call({from: accounts[4]});
		const boolL5OMgq2 = await OnXFinanceUvA9fPk.transfer.call(addressKdVDRXR, uintst31WcR, {from: accounts[3]});
		const stringSr4G4qq = await OnXFinanceUvA9fPk.symbol.call({from: accounts[1]});
	});

	it('test for OnXFinance', async () => {
		const stringK7Dj71Y = "GqRNS4WbA2XMziV4GVqh3IXz9rvXJ2FS4hECRv5UxzSDc5LmaaGSK89msf99RIVBJeAMqJ9rMCradcM"
		const string09jvdK = "PJCHBP5krFL0aIpbkgSHJcjxvQjTd1CUJLknApTRRdhKy"
		const uintVfYwUHU = BigInt("1803")
		const OnXFinanceNnB2DzH = await OnXFinance.new(stringK7Dj71Y, string09jvdK, uintVfYwUHU, {from: accounts[0]});
		const addressQoEaaI9 = accounts[4]
		const addressmQw3qrX = accounts[4]
		const addressIwPb81f = accounts[5]
		const addressfSU14vM = accounts[2]
		const addressoHzNNnK = accounts[0]
		const stringWaZbUYV = await OnXFinanceNnB2DzH.symbol.call({from: accounts[1]});
		const uintklg4R3n = await OnXFinanceNnB2DzH.allowance.call(addressmQw3qrX, addressQoEaaI9, {from: accounts[3]});
		const stringKn2Yfo = await OnXFinanceNnB2DzH.symbol.call({from: accounts[4]});
		const boolwYLAfg = await OnXFinanceNnB2DzH.transferownership.call(addressIwPb81f, {from: accounts[0]});
		const uintButesmy = await OnXFinanceNnB2DzH.allowance.call(addressoHzNNnK, addressfSU14vM, {from: accounts[1]});

		assert.equal(boolwYLAfg, true)
		assert.equal(stringKn2Yfo, "PJCHBP5krFL0aIpbkgSHJcjxvQjTd1CUJLknApTRRdhKy")
		assert.equal(stringWaZbUYV, "PJCHBP5krFL0aIpbkgSHJcjxvQjTd1CUJLknApTRRdhKy")
		assert.equal(uintButesmy, BigInt("0"))
		assert.equal(uintklg4R3n, BigInt("0"))
	});

	it('test for OnXFinance', async () => {
		const stringXpOH7tM = "EL"
		const stringNdzoGx6 = "YMs2E5y8R9HbNtJIEqWdzceYcZKii6BfXybHcVVDI"
		const uintktLpsDZ = BigInt("2001")
		const OnXFinancejOMPWy5 = await OnXFinance.new(stringXpOH7tM, stringNdzoGx6, uintktLpsDZ, {from: accounts[2]});
		const uintrgHeJAF = BigInt("0")
		const addressWVGbTJR = accounts[0]
		const uinturddG2c = BigInt("1159")
		const addressAEfY5Pi = accounts[3]
		const uintCgcHgpM = BigInt("1341")
		const addressqjRVj6g = accounts[1]
		const boolrlXkSnS = await OnXFinancejOMPWy5.approveAndCall.call(addressWVGbTJR, uintrgHeJAF, {from: accounts[2]});
		const boolrfkZV0f = await OnXFinancejOMPWy5.approve.call(addressAEfY5Pi, uinturddG2c, {from: accounts[2]});
//		const boolnZFW4D2 = await OnXFinancejOMPWy5.transfer.call(addressqjRVj6g, uintCgcHgpM, {from: accounts[1]});
//		const uint8qB4Z1Nt = await OnXFinancejOMPWy5.decimals.call({from: accounts[5]});

		assert.equal(boolrfkZV0f, true)
		assert.equal(boolrlXkSnS, true)
		await expect(OnXFinancejOMPWy5.transfer.call(addressqjRVj6g, uintCgcHgpM, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for OnXFinance', async () => {
		const stringEXTZrpr = "Sld2tgvegFR3k232yXgd"
		const stringJAtRr43 = "J3tvyT9xLT71GWHZZwbGOfD1DYBJjwwIH3i82A2U7fKXEnzHqEcOccK84TXLnzHhpNReXxuSiUa1ucRJIrHQBRVFVrM9Hxj"
		const uintxBrNS4k = BigInt("1875")
		const OnXFinancem8Lmt8D = await OnXFinance.new(stringEXTZrpr, stringJAtRr43, uintxBrNS4k, {from: accounts[4]});
		const uintHCsoAnC = BigInt("675")
		const addresslHd0HGt = accounts[3]
		const uintRK1ccD7 = BigInt("110")
		const address0LGh8s = "0x0000000000000000000000000000000000000001"
		const addresslwtTsF3 = accounts[2]
		const addressitdHXFw = accounts[2]
		const addressmjCt9D = accounts[0]
		const uintYOCJzvc = BigInt("0")
		const address8mbUVP = accounts[1]
		const uintTRI5ge2 = BigInt("279")
		const addressM8prAaW = accounts[0]
		const addressbWVCZ7 = accounts[1]
		const uintu9PY66 = BigInt("1925")
		const addressvw4vnXu = accounts[0]
		const addressxHKjd1i = accounts[2]
		const uint0aToa6 = BigInt("442")
		const addressCviVNIr = "0x0000000000000000000000000000000000000001"
		const uintK15ZCd = BigInt("1946")
		const addressFQ4HsL8 = accounts[0]
		const addresswPIVo5 = accounts[5]
		const addresslL1JCRi = accounts[6]
		const addressAjPlEgO = accounts[5]
		const uintlyLb66D = BigInt("906")
		const addressG8lAF8I = accounts[4]
		const boolE3T5v2x = await OnXFinancem8Lmt8D.approve.call(addresslHd0HGt, uintHCsoAnC, {from: accounts[3]});
		const boolkwZCXdK = await OnXFinancem8Lmt8D.transfer.call(address0LGh8s, uintRK1ccD7, {from: accounts[4]});
		const uintrTt4y3V = await OnXFinancem8Lmt8D.totalSupply.call({from: accounts[3]});
		const stringuJkR5J3 = await OnXFinancem8Lmt8D.symbol.call({from: accounts[0]});
		const uintLbsAHP = await OnXFinancem8Lmt8D.balanceOf.call(addresslwtTsF3, {from: accounts[0]});
		const uint8n01x3wK = await OnXFinancem8Lmt8D.decimals.call({from: accounts[3]});
		const uintHxaTPXo = await OnXFinancem8Lmt8D.allowance.call(addressmjCt9D, addressitdHXFw, {from: accounts[3]});
		const boolfLfGHEi = await OnXFinancem8Lmt8D.transfer.call(address8mbUVP, uintYOCJzvc, {from: accounts[4]});
//		const boolwCAVHdS = await OnXFinancem8Lmt8D.transferFrom.call(addressbWVCZ7, addressM8prAaW, uintTRI5ge2, {from: accounts[3]});
//		const boolFQHKwpK = await OnXFinancem8Lmt8D.approveAndCall.call(addressvw4vnXu, uintu9PY66, {from: accounts[2]});
//		const uintCWLqjNl = await OnXFinancem8Lmt8D.balanceOf.call(addressxHKjd1i, {from: accounts[4]});
//		const boolbbaFyMg = await OnXFinancem8Lmt8D.approve.call(addressCviVNIr, uint0aToa6, {from: "0x0000000000000000000000000000000000000001"});
//		const boolycH9L8A = await OnXFinancem8Lmt8D.transferFrom.call(addresswPIVo5, addressFQ4HsL8, uintK15ZCd, {from: accounts[0]});
//		const uintrwAjUQa = await OnXFinancem8Lmt8D.allowance.call(addressAjPlEgO, addresslL1JCRi, {from: accounts[0]});
//		const boolx9bGbio = await OnXFinancem8Lmt8D.approve.call(addressG8lAF8I, uintlyLb66D, {from: accounts[3]});

		assert.equal(boolE3T5v2x, true)
		assert.equal(boolfLfGHEi, true)
		assert.equal(boolkwZCXdK, true)
		assert.equal(stringuJkR5J3, "J3tvyT9xLT71GWHZZwbGOfD1DYBJjwwIH3i82A2U7fKXEnzHqEcOccK84TXLnzHhpNReXxuSiUa1ucRJIrHQBRVFVrM9Hxj")
		assert.equal(uint8n01x3wK, BigInt("18"))
		assert.equal(uintHxaTPXo, BigInt("0"))
		assert.equal(uintLbsAHP, BigInt("0"))
		assert.equal(uintrTt4y3V, BigInt("1875000000000000000000"))
		await expect(OnXFinancem8Lmt8D.transferFrom.call(addressbWVCZ7, addressM8prAaW, uintTRI5ge2, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})