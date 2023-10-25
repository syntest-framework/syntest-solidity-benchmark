const afiController = artifacts.require("afiController");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('afiController', (accounts) => {
	it('test for afiController', async () => {
		const addresssIMuQBc = accounts[0]
		const afiControllerST3zmzr = await afiController.new(addresssIMuQBc, {from: accounts[4]});
		const addressmnCgsk = accounts[3]
		const addressDNLCMbe = accounts[2]
		const uintWvMwXr6 = BigInt("258")
		const addressaJVWWzL = accounts[5]
		const addressUdiObpe = "0x0000000000000000000000000000000000000001"
		const uintAQTtfZg = BigInt("235")
//		const uintkcxVRMh = await afiControllerST3zmzr.balanceOf.call(addressmnCgsk, {from: accounts[4]});
//		const uintuy8itLq = await afiControllerST3zmzr.balanceOf.call(addressDNLCMbe, {from: accounts[3]});
//		const uintuFpnO21 = await afiControllerST3zmzr.getExpectedReturn.call(addressUdiObpe, addressaJVWWzL, uintWvMwXr6, {from: accounts[0]});
//		const uintOvLq9c6 = await afiControllerST3zmzr.setSplit.call(uintAQTtfZg, {from: accounts[0]});

		await expect(afiControllerST3zmzr.balanceOf.call(addressmnCgsk, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressLbFhgC = accounts[1]
		const afiControllerYkFWX84 = await afiController.new(addressLbFhgC, {from: accounts[4]});
		const addressrbIj5d = "0x0000000000000000000000000000000000000001"
		const addressxAUGol = accounts[3]
		const addressGS6aMmB = accounts[2]
		const uintM8iD6NW = BigInt("1783")
		const addressU5slmWp = accounts[3]
		const addressuyg4Ii = accounts[1]
		const addresswuOxWpd = accounts[2]
//		const addressfWmTULj = await afiControllerYkFWX84.setStrategy.call(addressxAUGol, addressrbIj5d, {from: accounts[4]});
//		const address0SqH0n = await afiControllerYkFWX84.setOneSplit.call(addressGS6aMmB, {from: accounts[1]});
//		const addressrfezq1S = await afiControllerYkFWX84.yearn.call(addressuyg4Ii, addressU5slmWp, uintM8iD6NW, {from: accounts[0]});
//		const addressTHhfbMl = await afiControllerYkFWX84.withdrawAll.call(addresswuOxWpd, {from: accounts[4]});

		await expect(afiControllerYkFWX84.setStrategy.call(addressxAUGol, addressrbIj5d, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addresshoQ6C10 = accounts[4]
		const afiControllerRsOuzqS = await afiController.new(addresshoQ6C10, {from: accounts[2]});
		const addressyY36ArB = "0x0000000000000000000000000000000000000001"
		const addressVbNX1oM = accounts[2]
		const uintG0vJ5Ta = BigInt("2009")
		const addressGQUPHbu = accounts[3]
		const addresswH7iMHI = accounts[5]
		const uint5Whpo6 = BigInt("1823")
		const addressmhIJR0q = accounts[5]
		const addressx5UGuOL = accounts[5]
		const addressUkuQHA = accounts[4]
		const addresssrufuN = accounts[0]
//		const addressjLaenEk = await afiControllerRsOuzqS.inCaseStrategyTokenGetStuck.call(addressVbNX1oM, addressyY36ArB, {from: accounts[4]});
//		const uintBxNdKNT = await afiControllerRsOuzqS.setSplit.call(uintG0vJ5Ta, {from: accounts[3]});
//		const addressffohxNA = await afiControllerRsOuzqS.approveStrategy.call(addresswH7iMHI, addressGQUPHbu, {from: accounts[1]});
//		const uintynPHgOa = await afiControllerRsOuzqS.getExpectedReturn.call(addressx5UGuOL, addressmhIJR0q, uint5Whpo6, {from: accounts[0]});
//		const addresspMg286 = await afiControllerRsOuzqS.setStrategy.call(addresssrufuN, addressUkuQHA, {from: accounts[0]});

		await expect(afiControllerRsOuzqS.inCaseStrategyTokenGetStuck.call(addressVbNX1oM, addressyY36ArB, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressbvMIWyr = accounts[0]
		const afiControllerBge5MkW = await afiController.new(addressbvMIWyr, {from: "0x0000000000000000000000000000000000000001"});
		const uintFdM31p0 = BigInt("1587")
		const uintCXwI6tp = BigInt("1691")
		const addressaR8YUgo = accounts[0]
		const addressCyTNHNY = accounts[3]
		const addressoermrDU = accounts[4]
		const addressueG5kcP = accounts[4]
		const uintbARJ4ZF = await afiControllerBge5MkW.setSplit.call(uintFdM31p0, {from: accounts[0]});
		const addressrcz5ptk = await afiControllerBge5MkW.inCaseTokensGetStuck.call(addressaR8YUgo, uintCXwI6tp, {from: accounts[0]});
		const addressyUCsvy6 = await afiControllerBge5MkW.setConverter.call(addressueG5kcP, addressoermrDU, addressCyTNHNY, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for afiController', async () => {
		const addressXJ0itB = accounts[5]
		const afiControllerP9zLTl = await afiController.new(addressXJ0itB, {from: accounts[0]});
		const addressdWGks1t = accounts[0]
		const addressdOvwGRZ = accounts[1]
		const address73A7eL = accounts[4]
		const addressp1U1wSc = "0x0000000000000000000000000000000000000001"
//		const addressAm9yOb3 = await afiControllerP9zLTl.revokeStrategy.call(addressdOvwGRZ, addressdWGks1t, {from: accounts[1]});
//		const addressp1dEAX1 = await afiControllerP9zLTl.setOneSplit.call(address73A7eL, {from: accounts[2]});
//		const addressdGKtQWu = await afiControllerP9zLTl.setOneSplit.call(addressp1U1wSc, {from: accounts[1]});

		await expect(afiControllerP9zLTl.revokeStrategy.call(addressdOvwGRZ, addressdWGks1t, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressuuScxlu = accounts[2]
		const afiControllerT1uRm3W = await afiController.new(addressuuScxlu, {from: accounts[1]});
		const addressbcT4v2p = accounts[5]
		const addressNpZioXB = accounts[3]
		const address0QjFm8 = accounts[0]
		const addressG89X8tA = accounts[3]
		const addressJEwc57J = "0x0000000000000000000000000000000000000001"
//		const addressGInDlSg = await afiControllerT1uRm3W.setGovernance.call(addressbcT4v2p, {from: accounts[0]});
//		const addresslWxOiFA = await afiControllerT1uRm3W.setConverter.call(addressG89X8tA, address0QjFm8, addressNpZioXB, {from: accounts[0]});
//		const addressrTwf39F = await afiControllerT1uRm3W.setOneSplit.call(addressJEwc57J, {from: "0x0000000000000000000000000000000000000001"});

		await expect(afiControllerT1uRm3W.setGovernance.call(addressbcT4v2p, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressvKT18i = accounts[0]
		const afiControllerYDCNvNk = await afiController.new(addressvKT18i, {from: accounts[1]});
		const uintEHcClek = BigInt("1421")
		const addressSWESJps = accounts[5]
		const addressBzaeq0y = accounts[1]
		const uintHnenHgV = BigInt("528")
		const addresst24YhJ = accounts[4]
		const addressmsXNP71 = "0x0000000000000000000000000000000000000001"
		const addressym6bCv5 = accounts[2]
		const addressWbxvjJf = accounts[2]
		const addressgu6OgRO = accounts[0]
//		const uint2Xffij = await afiControllerYDCNvNk.getExpectedReturn.call(addressBzaeq0y, addressSWESJps, uintEHcClek, {from: accounts[4]});
//		const addresshL7Tks5 = await afiControllerYDCNvNk.earn.call(addresst24YhJ, uintHnenHgV, {from: accounts[1]});
//		const addresseT92KLa = await afiControllerYDCNvNk.revokeStrategy.call(addressym6bCv5, addressmsXNP71, {from: accounts[0]});
//		const addressNej448p = await afiControllerYDCNvNk.inCaseStrategyTokenGetStuck.call(addressgu6OgRO, addressWbxvjJf, {from: accounts[4]});

		await expect(afiControllerYDCNvNk.getExpectedReturn.call(addressBzaeq0y, addressSWESJps, uintEHcClek, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressjEdm2Fd = accounts[1]
		const afiControllerCuS2icy = await afiController.new(addressjEdm2Fd, {from: accounts[2]});
		const addressnYQgb6 = "0x0000000000000000000000000000000000000001"
		const addressFhbzMSQ = accounts[1]
		const addressTgByzyT = accounts[3]
		const addressg4xx6vi = accounts[0]
		const addressp5Kr6mV = accounts[0]
		const addressStlxpeY = await afiControllerCuS2icy.approveStrategy.call(addressFhbzMSQ, addressnYQgb6, {from: accounts[2]});
//		const addressaEUUfsW = await afiControllerCuS2icy.setGovernance.call(addressTgByzyT, {from: accounts[4]});
//		const addressSWpOmyC = await afiControllerCuS2icy.revokeStrategy.call(addressp5Kr6mV, addressg4xx6vi, {from: accounts[2]});

		await expect(afiControllerCuS2icy.setGovernance.call(addressTgByzyT, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressKhOk806 = accounts[4]
		const afiControllerUdTUSNw = await afiController.new(addressKhOk806, {from: accounts[5]});
		const addressxfQuug6 = accounts[4]
		const addresshO3Uq57 = accounts[2]
		const addressPPW7mfV = accounts[1]
		const addresslrHau8M = accounts[1]
		const addressLmGH94r = accounts[1]
		const addressgbhzC0l = accounts[3]
		const addressmP4JkPs = accounts[0]
		const addressAkejvbc = accounts[1]
//		const addressdqX5Qfb = await afiControllerUdTUSNw.setStrategy.call(addresshO3Uq57, addressxfQuug6, {from: accounts[0]});
//		const addressF7EIfvi = await afiControllerUdTUSNw.setConverter.call(addressLmGH94r, addresslrHau8M, addressPPW7mfV, {from: accounts[3]});
//		const addressg7IDpw = await afiControllerUdTUSNw.revokeStrategy.call(addressmP4JkPs, addressgbhzC0l, {from: accounts[4]});
//		const addressHLwkAMu = await afiControllerUdTUSNw.setStrategist.call(addressAkejvbc, {from: accounts[5]});

		await expect(afiControllerUdTUSNw.setStrategy.call(addresshO3Uq57, addressxfQuug6, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressa1PQiAq = accounts[5]
		const afiControllerP9zLTl = await afiController.new(addressa1PQiAq, {from: accounts[0]});
		const addressxgvJxd = accounts[5]
		const addressKkLkacM = "0x0000000000000000000000000000000000000001"
//		const addressp1dEAX1 = await afiControllerP9zLTl.setOneSplit.call(addressxgvJxd, {from: accounts[2]});
//		const addressdGKtQWu = await afiControllerP9zLTl.setOneSplit.call(addressKkLkacM, {from: accounts[1]});

		await expect(afiControllerP9zLTl.setOneSplit.call(addressxgvJxd, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressWOPyVVU = accounts[2]
		const afiControllerT1uRm3W = await afiController.new(addressWOPyVVU, {from: accounts[1]});
		const addressA4LcalW = accounts[2]
		const addressiHDn0ze = accounts[0]
		const addressT9Er9qr = accounts[3]
		const addressk67UZN = "0x0000000000000000000000000000000000000001"
//		const addresslWxOiFA = await afiControllerT1uRm3W.setConverter.call(addressT9Er9qr, addressiHDn0ze, addressA4LcalW, {from: accounts[0]});
//		const addressrTwf39F = await afiControllerT1uRm3W.setOneSplit.call(addressk67UZN, {from: "0x0000000000000000000000000000000000000001"});

		await expect(afiControllerT1uRm3W.setConverter.call(addressT9Er9qr, addressiHDn0ze, addressA4LcalW, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressmDTTik4 = accounts[2]
		const afiControllerT1uRm3W = await afiController.new(addressmDTTik4, {from: accounts[1]});
		const uintTObwh4X = BigInt("339")
		const addresswcSsXXA = accounts[2]
		const addresstqpUsBR = accounts[4]
		const addresss0lALTk = accounts[6]
		const addressGa0KWEG = "0x0000000000000000000000000000000000000001"
		const uintbQvr8AY = BigInt("1772")
		const addressxwyNh5 = accounts[2]
//		const addressos1pyRa = await afiControllerT1uRm3W.yearn.call(addresstqpUsBR, addresswcSsXXA, uintTObwh4X, {from: accounts[3]});
//		const addressGInDlSg = await afiControllerT1uRm3W.setGovernance.call(addresss0lALTk, {from: accounts[0]});
//		const addressrTwf39F = await afiControllerT1uRm3W.setOneSplit.call(addressGa0KWEG, {from: "0x0000000000000000000000000000000000000001"});
//		const uintiwuqCU = await afiControllerT1uRm3W.setSplit.call(uintbQvr8AY, {from: accounts[2]});
//		const addressgOSgv4w = await afiControllerT1uRm3W.setStrategist.call(addressxwyNh5, {from: accounts[5]});

		await expect(afiControllerT1uRm3W.yearn.call(addresstqpUsBR, addresswcSsXXA, uintTObwh4X, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressexpbUNx = accounts[5]
		const afiControllerP9zLTl = await afiController.new(addressexpbUNx, {from: accounts[0]});
		const addressExWJqQ3 = accounts[0]
		const addressUWtDRtB = accounts[0]
		const addressRtLAJjT = accounts[5]
		const addressY8tCBCj = accounts[5]
		const addresso97k21e = accounts[5]
		const addressAhVEIXt = await afiControllerP9zLTl.setVault.call(addressUWtDRtB, addressExWJqQ3, {from: accounts[0]});
//		const addressp1dEAX1 = await afiControllerP9zLTl.setOneSplit.call(addressRtLAJjT, {from: accounts[2]});
//		const addressiEtcCpy = await afiControllerP9zLTl.setRewards.call(addressY8tCBCj, {from: accounts[1]});
//		const addressdGKtQWu = await afiControllerP9zLTl.setOneSplit.call(addresso97k21e, {from: accounts[1]});

		await expect(afiControllerP9zLTl.setOneSplit.call(addressRtLAJjT, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressNv5T52h = accounts[2]
		const afiControllerT1uRm3W = await afiController.new(addressNv5T52h, {from: accounts[1]});
		const uintqwpvo2X = BigInt("445")
		const addressNUtCpO9 = accounts[1]
		const addressUeoh20p = accounts[3]
		const addressFKtcSVp = "0x0000000000000000000000000000000000000001"
		const addressKp0aa6U = accounts[6]
		const addressfrHCJhq = accounts[0]
		const addressJZmOKYD = accounts[5]
		const addresst4VLX1B = accounts[3]
		const addressBLeJe8v = accounts[0]
		const addressmzNTFaK = accounts[3]
		const addressHJhYOZn = "0x0000000000000000000000000000000000000001"
//		const addressNez7jiz = await afiControllerT1uRm3W.inCaseTokensGetStuck.call(addressNUtCpO9, uintqwpvo2X, {from: accounts[0]});
//		const addressMZL22Wy = await afiControllerT1uRm3W.setVault.call(addressFKtcSVp, addressUeoh20p, {from: accounts[5]});
//		const addressGInDlSg = await afiControllerT1uRm3W.setGovernance.call(addressKp0aa6U, {from: accounts[0]});
//		const addresslEFeOsr = await afiControllerT1uRm3W.setVault.call(addressJZmOKYD, addressfrHCJhq, {from: accounts[2]});
//		const addresslWxOiFA = await afiControllerT1uRm3W.setConverter.call(addressmzNTFaK, addressBLeJe8v, addresst4VLX1B, {from: accounts[0]});
//		const addressrTwf39F = await afiControllerT1uRm3W.setOneSplit.call(addressHJhYOZn, {from: "0x0000000000000000000000000000000000000001"});

		await expect(afiControllerT1uRm3W.inCaseTokensGetStuck.call(addressNUtCpO9, uintqwpvo2X, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressravSsBk = accounts[2]
		const afiControllerT1uRm3W = await afiController.new(addressravSsBk, {from: accounts[1]});
		const uintErLQpPy = BigInt("1201")
		const addresszPJMA4 = accounts[3]
		const addressI6znKss = accounts[3]
		const addressjseg82G = accounts[5]
		const addressppWsckh = "0x0000000000000000000000000000000000000001"
//		const addressyEqC2Ww = await afiControllerT1uRm3W.yearn.call(addressI6znKss, addresszPJMA4, uintErLQpPy, {from: accounts[1]});
//		const addressGInDlSg = await afiControllerT1uRm3W.setGovernance.call(addressjseg82G, {from: accounts[0]});
//		const addressrTwf39F = await afiControllerT1uRm3W.setOneSplit.call(addressppWsckh, {from: "0x0000000000000000000000000000000000000001"});

		await expect(afiControllerT1uRm3W.yearn.call(addressI6znKss, addresszPJMA4, uintErLQpPy, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressfeAdy1G = accounts[5]
		const afiControllerP9zLTl = await afiController.new(addressfeAdy1G, {from: accounts[0]});
		const addressAYNnYOV = accounts[1]
		const addressYghStig = accounts[0]
		const addressgrLxLaK = accounts[5]
		const uintopXS93t = BigInt("1634")
		const addressq4Bq1al = accounts[3]
		const addressWHJKwhq = accounts[5]
		const addressi79W8B8 = accounts[0]
		const addressS4aD2sl = accounts[4]
//		const addressaKeZxn = await afiControllerP9zLTl.setStrategist.call(addressAYNnYOV, {from: accounts[4]});
//		const addressAm9yOb3 = await afiControllerP9zLTl.revokeStrategy.call(addressgrLxLaK, addressYghStig, {from: accounts[1]});
//		const addressmAr7JO7 = await afiControllerP9zLTl.earn.call(addressq4Bq1al, uintopXS93t, {from: accounts[1]});
//		const addressp1dEAX1 = await afiControllerP9zLTl.setOneSplit.call(addressWHJKwhq, {from: accounts[2]});
//		const addressjs0Vii4 = await afiControllerP9zLTl.setStrategy.call(addressS4aD2sl, addressi79W8B8, {from: accounts[2]});

		await expect(afiControllerP9zLTl.setStrategist.call(addressAYNnYOV, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressoY18uqo = accounts[5]
		const afiControllerP9zLTl = await afiController.new(addressoY18uqo, {from: accounts[0]});
		const addressqoYw6RI = accounts[4]
		const addressKwsjPky = "0x0000000000000000000000000000000000000000"
		const uintcZwfr60 = BigInt("381")
		const addressUDbqSWo = accounts[0]
		const addresslUpcpE = await afiControllerP9zLTl.setRewards.call(addressqoYw6RI, {from: accounts[0]});
//		const addressdGKtQWu = await afiControllerP9zLTl.setOneSplit.call(addressKwsjPky, {from: accounts[1]});
//		const addressmdPRI2v = await afiControllerP9zLTl.inCaseTokensGetStuck.call(addressUDbqSWo, uintcZwfr60, {from: accounts[3]});

		await expect(afiControllerP9zLTl.setOneSplit.call(addressKwsjPky, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addresshV2Paug = accounts[5]
		const afiControllerP9zLTl = await afiController.new(addresshV2Paug, {from: accounts[0]});
		const uintuxMX4t = BigInt("1205")
		const addressdjuKcy7 = accounts[5]
		const addressKCoJY4 = accounts[0]
		const addressjJX5Vvd = accounts[3]
		const addressMMgZMz = accounts[4]
//		const addresslxHQ67L = await afiControllerP9zLTl.earn.call(addressdjuKcy7, uintuxMX4t, {from: accounts[1]});
//		const addressAm9yOb3 = await afiControllerP9zLTl.revokeStrategy.call(addressjJX5Vvd, addressKCoJY4, {from: accounts[1]});
//		const addressp1dEAX1 = await afiControllerP9zLTl.setOneSplit.call(addressMMgZMz, {from: accounts[2]});

		await expect(afiControllerP9zLTl.earn.call(addressdjuKcy7, uintuxMX4t, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addresstC53O8R = accounts[2]
		const afiControllerT1uRm3W = await afiController.new(addresstC53O8R, {from: accounts[1]});
		const addressJWmWeKC = "0x0000000000000000000000000000000000000001"
		const addressygI86Rk = accounts[5]
//		const addressLCPD4uN = await afiControllerT1uRm3W.withdrawAll.call(addressJWmWeKC, {from: accounts[3]});
//		const addressGInDlSg = await afiControllerT1uRm3W.setGovernance.call(addressygI86Rk, {from: accounts[0]});

		await expect(afiControllerT1uRm3W.withdrawAll.call(addressJWmWeKC, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressgkqZexP = accounts[2]
		const afiControllerT1uRm3W = await afiController.new(addressgkqZexP, {from: accounts[1]});
		const uintdhGZhsh = BigInt("956")
		const addressCvkbIMJ = accounts[6]
//		const uinttYvMA6K = await afiControllerT1uRm3W.setSplit.call(uintdhGZhsh, {from: accounts[4]});
//		const addressGInDlSg = await afiControllerT1uRm3W.setGovernance.call(addressCvkbIMJ, {from: accounts[0]});

		await expect(afiControllerT1uRm3W.setSplit.call(uintdhGZhsh, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressLogyNYM = accounts[5]
		const afiControllerP9zLTl = await afiController.new(addressLogyNYM, {from: accounts[0]});
		const addressubVE1M = "0x00000000000000000000000000000000000000-1"
		const addressdHrGPTK = accounts[5]
		const addressApmwqh = accounts[0]
//		const addressdGKtQWu = await afiControllerP9zLTl.setOneSplit.call(addressubVE1M, {from: accounts[1]});
//		const addressrI0sah9 = await afiControllerP9zLTl.inCaseStrategyTokenGetStuck.call(addressApmwqh, addressdHrGPTK, {from: accounts[5]});

		await expect(afiControllerP9zLTl.setOneSplit.call(addressubVE1M, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressnB5qGdU = accounts[5]
		const afiControllerFY5FjPR = await afiController.new(addressnB5qGdU, {from: accounts[1]});
		const uintji6c6BF = BigInt("887")
		const addressPKnUiR = accounts[1]
		const uintmAh3e0h = BigInt("1986")
		const uintyujNBlp = BigInt("414")
		const addressCCdDZu5 = accounts[5]
		const addressnrjSHSG = accounts[4]
//		const address2TcP5n = await afiControllerFY5FjPR.inCaseTokensGetStuck.call(addressPKnUiR, uintji6c6BF, {from: accounts[1]});
//		const uintTKXJQWy = await afiControllerFY5FjPR.setSplit.call(uintmAh3e0h, {from: accounts[3]});
//		const addressPk7JIqz = await afiControllerFY5FjPR.withdraw.call(addressCCdDZu5, uintyujNBlp, {from: accounts[1]});
//		const addressLK9dc1i = await afiControllerFY5FjPR.setStrategist.call(addressnrjSHSG, {from: accounts[2]});

		await expect(afiControllerFY5FjPR.inCaseTokensGetStuck.call(addressPKnUiR, uintji6c6BF, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressD1Xw31m = accounts[2]
		const afiControllerT1uRm3W = await afiController.new(addressD1Xw31m, {from: accounts[1]});
		const addressOQOG5HP = accounts[1]
		const addressWtX5D5w = accounts[4]
		const addressUj77kqF = accounts[2]
		const addressww9c3Hr = accounts[6]
		const uintdLwXfSu = BigInt("1549")
		const addressHhBshvN = accounts[3]
		const addressyKX0eIO = await afiControllerT1uRm3W.setConverter.call(addressUj77kqF, addressWtX5D5w, addressOQOG5HP, {from: accounts[1]});
//		const addressGInDlSg = await afiControllerT1uRm3W.setGovernance.call(addressww9c3Hr, {from: accounts[0]});
//		const addressTnpJ2Te = await afiControllerT1uRm3W.earn.call(addressHhBshvN, uintdLwXfSu, {from: accounts[0]});

		await expect(afiControllerT1uRm3W.setGovernance.call(addressww9c3Hr, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressUNYh1q9 = accounts[5]
		const afiControllerP9zLTl = await afiController.new(addressUNYh1q9, {from: accounts[0]});
		const addressbxDyLz8 = accounts[0]
		const addresscg6y2T5 = accounts[1]
		const addressD0daso2 = accounts[3]
		const addressrzgKz8u = await afiControllerP9zLTl.setOneSplit.call(addressbxDyLz8, {from: accounts[0]});
//		const addressAm9yOb3 = await afiControllerP9zLTl.revokeStrategy.call(addressD0daso2, addresscg6y2T5, {from: accounts[1]});

		await expect(afiControllerP9zLTl.revokeStrategy.call(addressD0daso2, addresscg6y2T5, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressUZU2Wh4 = accounts[2]
		const afiControllerT1uRm3W = await afiController.new(addressUZU2Wh4, {from: accounts[1]});
		const addresscieSpMk = "0x0000000000000000000000000000000000000001"
		const addressq5hs45J = accounts[1]
		const uintuigPxO = BigInt("1180")
		const address2or8j0 = accounts[1]
		const addressNm6smZ = accounts[3]
		const uintpTbr5lc = BigInt("1910")
		const addressjnOciP = accounts[6]
		const addressgU7nPE = await afiControllerT1uRm3W.setGovernance.call(addresscieSpMk, {from: accounts[1]});
//		const addresskRElyYi = await afiControllerT1uRm3W.setOneSplit.call(addressq5hs45J, {from: accounts[5]});
//		const addressJ4osfoy = await afiControllerT1uRm3W.yearn.call(addressNm6smZ, address2or8j0, uintuigPxO, {from: accounts[4]});
//		const uinttYvMA6K = await afiControllerT1uRm3W.setSplit.call(uintpTbr5lc, {from: accounts[4]});
//		const addressGInDlSg = await afiControllerT1uRm3W.setGovernance.call(addressjnOciP, {from: accounts[0]});

		await expect(afiControllerT1uRm3W.setOneSplit.call(addressq5hs45J, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressnqwmM72 = accounts[4]
		const afiControllerW0Jg0e2 = await afiController.new(addressnqwmM72, {from: accounts[3]});
		const addresspw7Su4B = accounts[3]
		const addressQnlbW7v = accounts[4]
		const uintsq2g8b5 = BigInt("326")
		const addresstjzoDmM = await afiControllerW0Jg0e2.setStrategist.call(addresspw7Su4B, {from: accounts[3]});
		const addressMJMdkmV = await afiControllerW0Jg0e2.setStrategist.call(addressQnlbW7v, {from: accounts[3]});
//		const uintbnREL6e = await afiControllerW0Jg0e2.setSplit.call(uintsq2g8b5, {from: accounts[1]});

		await expect(afiControllerW0Jg0e2.setSplit.call(uintsq2g8b5, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addresssE5H7fC = accounts[5]
		const afiControllerP9zLTl = await afiController.new(addresssE5H7fC, {from: accounts[0]});
		const addressIjDnprP = "0x0000000000000000000000000000000000000001"
		const addressgve2slX = accounts[0]
		const addressT7SysCs = accounts[0]
		const addressPlykA4I = "0x0000000000000000000000000000000000000001"
		const addressE1g93aa = await afiControllerP9zLTl.setRewards.call(addressIjDnprP, {from: accounts[0]});
//		const addressiOqq1Yt = await afiControllerP9zLTl.inCaseStrategyTokenGetStuck.call(addressT7SysCs, addressgve2slX, {from: accounts[0]});
//		const addressdGKtQWu = await afiControllerP9zLTl.setOneSplit.call(addressPlykA4I, {from: accounts[1]});

		await expect(afiControllerP9zLTl.inCaseStrategyTokenGetStuck.call(addressT7SysCs, addressgve2slX, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressSOruAii = accounts[3]
		const afiControllerUCgmJd3 = await afiController.new(addressSOruAii, {from: accounts[1]});
		const uintrgk3YnH = BigInt("470")
		const addressnKgXGTV = accounts[4]
		const uintDTFvhrA = BigInt("319")
		const addressJ8Zmbnq = accounts[1]
		const addresscGu2Uyj = accounts[2]
		const uintIWsjvFL = BigInt("508")
		const addressHI1Dhm9 = accounts[3]
		const uintWLJFfSG = await afiControllerUCgmJd3.setSplit.call(uintrgk3YnH, {from: accounts[1]});
//		const uintZEc8it = await afiControllerUCgmJd3.balanceOf.call(addressnKgXGTV, {from: accounts[2]});
//		const addressbqzpSin = await afiControllerUCgmJd3.yearn.call(addresscGu2Uyj, addressJ8Zmbnq, uintDTFvhrA, {from: "0x0000000000000000000000000000000000000001"});
//		const addressUk67A5H = await afiControllerUCgmJd3.inCaseTokensGetStuck.call(addressHI1Dhm9, uintIWsjvFL, {from: accounts[2]});

		await expect(afiControllerUCgmJd3.balanceOf.call(addressnKgXGTV, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressRMxhDb6 = accounts[5]
		const afiControllerP9zLTl = await afiController.new(addressRMxhDb6, {from: accounts[0]});
		const uintpFEsGB5 = BigInt("1338")
		const addressacgxbq = accounts[4]
		const addressKqiqRQZ = accounts[6]
		const addressN21bji0 = accounts[1]
//		const addressdrk0O3Q = await afiControllerP9zLTl.withdraw.call(addressacgxbq, uintpFEsGB5, {from: accounts[3]});
//		const addressAm9yOb3 = await afiControllerP9zLTl.revokeStrategy.call(addressN21bji0, addressKqiqRQZ, {from: accounts[1]});

		await expect(afiControllerP9zLTl.withdraw.call(addressacgxbq, uintpFEsGB5, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressFefCXM = accounts[5]
		const afiControllerP9zLTl = await afiController.new(addressFefCXM, {from: accounts[0]});
		const addressQkqZpZ5 = accounts[4]
		const addressfZVytV9 = accounts[0]
		const uintVg8jmIY = BigInt("338")
		const addressL9GfRBO = accounts[5]
		const addressBrT0Lz2 = accounts[2]
		const uintKbCj9h = BigInt("1338")
		const addressBUbLflF = accounts[5]
		const addressR2qgwXq = accounts[5]
		const addressWnijoZ = accounts[1]
		const addressdZ7bxhC = await afiControllerP9zLTl.revokeStrategy.call(addressfZVytV9, addressQkqZpZ5, {from: accounts[0]});
//		const addresskzXeHdl = await afiControllerP9zLTl.yearn.call(addressBrT0Lz2, addressL9GfRBO, uintVg8jmIY, {from: accounts[3]});
//		const addressdrk0O3Q = await afiControllerP9zLTl.withdraw.call(addressBUbLflF, uintKbCj9h, {from: accounts[3]});
//		const addressAm9yOb3 = await afiControllerP9zLTl.revokeStrategy.call(addressWnijoZ, addressR2qgwXq, {from: accounts[1]});

		await expect(afiControllerP9zLTl.yearn.call(addressBrT0Lz2, addressL9GfRBO, uintVg8jmIY, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressghKj4sv = accounts[5]
		const afiControllerP9zLTl = await afiController.new(addressghKj4sv, {from: accounts[0]});
		const addressV8HJ0SW = accounts[0]
		const addressoXYh92 = accounts[1]
		const addressWrdqo26 = accounts[1]
		const addressCw03fvs = accounts[2]
//		const addressvEUdkoa = await afiControllerP9zLTl.withdrawAll.call(addressV8HJ0SW, {from: accounts[0]});
//		const addressN3WSN56 = await afiControllerP9zLTl.setOneSplit.call(addressoXYh92, {from: accounts[3]});
//		const addressAm9yOb3 = await afiControllerP9zLTl.revokeStrategy.call(addressCw03fvs, addressWrdqo26, {from: accounts[1]});

		await expect(afiControllerP9zLTl.withdrawAll.call(addressV8HJ0SW, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})