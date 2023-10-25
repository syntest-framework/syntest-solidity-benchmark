const Controller = artifacts.require("Controller");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Controller', (accounts) => {
	it('test for Controller', async () => {
		const addressGR44q8R = accounts[4]
		const Controllerz0WTCqv = await Controller.new(addressGR44q8R, {from: accounts[0]});
		const addressemsxb4I = accounts[1]
		const addressPvBVOLq = accounts[1]
		const addresskXtI6zU = accounts[4]
		const addressMQ9l9C7 = accounts[0]
		const uintAmjrh2g = BigInt("321")
		const addressMCcTplL = accounts[3]
		const addressQnoAbj5 = accounts[1]
		const addressL856N2a = "0x0000000000000000000000000000000000000001"
		const addresspc4yI0 = accounts[1]
		const addressAuqimg = accounts[3]
		const addressrf5lx5W = await Controllerz0WTCqv.setStrategy.call(addressPvBVOLq, addressemsxb4I, {from: "0x0000000000000000000000000000000000000001"});
		const addressHPwSgfE = await Controllerz0WTCqv.inCaseStrategyTokenGetStuck.call(addressMQ9l9C7, addresskXtI6zU, {from: accounts[3]});
		const addressUOJMp6Q = await Controllerz0WTCqv.earn.call(addressMCcTplL, uintAmjrh2g, {from: accounts[0]});
		const addressoLojl8 = await Controllerz0WTCqv.setConverter.call(addresspc4yI0, addressL856N2a, addressQnoAbj5, {from: accounts[4]});
		const addressHePMVne = await Controllerz0WTCqv.withdrawAll.call(addressAuqimg, {from: accounts[3]});

		await expect(Controllerz0WTCqv.setStrategy.call(addressPvBVOLq, addressemsxb4I, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressEbufmpf = accounts[3]
		const ControllerCTzbiTr = await Controller.new(addressEbufmpf, {from: accounts[3]});
		const addresskFhYMrw = accounts[1]
		const addresstcOiPys = "0x0000000000000000000000000000000000000001"
		const addresscwZ7tVM = accounts[0]
		const addressnBFRFf9 = accounts[2]
		const addressaehI4yh = accounts[3]
		const uintas8WlWd = BigInt("1661")
		const addressdvEliib = accounts[1]
		const uintjMYv0QA = BigInt("1529")
		const addressA7XL7i3 = accounts[5]
		const addressuWzNmXj = accounts[4]
		const uintA8Q3J6z = BigInt("1034")
		const addressqLh46a = accounts[5]
		const addressvqBC5M = accounts[5]
		const addressftrvakQ = await ControllerCTzbiTr.setConverter.call(addresscwZ7tVM, addresstcOiPys, addresskFhYMrw, {from: "0x0000000000000000000000000000000000000001"});
		const addressVfT01wt = await ControllerCTzbiTr.inCaseStrategyTokenGetStuck.call(addressaehI4yh, addressnBFRFf9, {from: accounts[3]});
		const addressgaRq3GP = await ControllerCTzbiTr.earn.call(addressdvEliib, uintas8WlWd, {from: accounts[4]});
		const uintEJJVZBp = await ControllerCTzbiTr.getExpectedReturn.call(addressuWzNmXj, addressA7XL7i3, uintjMYv0QA, {from: accounts[5]});
		const uintZfexrFM = await ControllerCTzbiTr.getExpectedReturn.call(addressvqBC5M, addressqLh46a, uintA8Q3J6z, {from: accounts[1]});

		await expect(ControllerCTzbiTr.setConverter.call(addresscwZ7tVM, addresstcOiPys, addresskFhYMrw, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressNKmYaIK = accounts[2]
		const ControllerhTClVZo = await Controller.new(addressNKmYaIK, {from: accounts[1]});
		const addressXb4RZBG = accounts[3]
		const addresssJXLQpk = accounts[1]
		const addressRw8YBQ = accounts[0]
		const uintdsOGgl6 = await ControllerhTClVZo.balanceOf.call(addressXb4RZBG, {from: accounts[2]});
		const addresswOkXOaM = await ControllerhTClVZo.setStrategy.call(addressRw8YBQ, addresssJXLQpk, {from: "0x0000000000000000000000000000000000000001"});

		await expect(ControllerhTClVZo.balanceOf.call(addressXb4RZBG, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addresssLAPQPc = accounts[1]
		const ControllerbJvYtBb = await Controller.new(addresssLAPQPc, {from: accounts[4]});
		const uintZrZIFle = BigInt("1663")
		const addressZj95aGo = accounts[2]
		const addresshnuY2b7 = accounts[0]
		const addressSIKT3cM = accounts[0]
		const addressLkOpVN = await ControllerbJvYtBb.earn.call(addressZj95aGo, uintZrZIFle, {from: "0x0000000000000000000000000000000000000001"});
		const addressXg6Rb2k = await ControllerbJvYtBb.inCaseStrategyTokenGetStuck.call(addressSIKT3cM, addresshnuY2b7, {from: accounts[1]});

		await expect(ControllerbJvYtBb.earn.call(addressZj95aGo, uintZrZIFle, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressx1lIzt4 = accounts[0]
		const ControllerYhYDRnS = await Controller.new(addressx1lIzt4, {from: accounts[1]});
		const addressvPT6Uet = accounts[1]
		const uintYq6kDT4 = BigInt("1392")
		const addressEZZamg2 = accounts[3]
		const addressDfCyABL = await ControllerYhYDRnS.setGovernance.call(addressvPT6Uet, {from: accounts[2]});
		const addressdmN8iTT = await ControllerYhYDRnS.inCaseTokensGetStuck.call(addressEZZamg2, uintYq6kDT4, {from: accounts[5]});

		await expect(ControllerYhYDRnS.setGovernance.call(addressvPT6Uet, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressI621bKR = accounts[5]
		const ControllerzATX8qU = await Controller.new(addressI621bKR, {from: accounts[5]});
		const addressjMoEd9l = accounts[3]
		const addressnzx6DOe = accounts[3]
		const addressfuRJJQZ = accounts[4]
		const addressGtVIV7l = await ControllerzATX8qU.withdrawAll.call(addressjMoEd9l, {from: accounts[5]});
		const addresszOpGyhx = await ControllerzATX8qU.setGovernance.call(addressnzx6DOe, {from: accounts[5]});
		const addresstJjwtI5 = await ControllerzATX8qU.setStrategist.call(addressfuRJJQZ, {from: accounts[1]});

		await expect(ControllerzATX8qU.withdrawAll.call(addressjMoEd9l, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addresssx9MuBp = accounts[5]
		const ControllerWCr9CCu = await Controller.new(addresssx9MuBp, {from: accounts[1]});
		const uintg8Pouk = BigInt("1536")
		const addressEcsvdL2 = accounts[1]
		const addressMIXx5x = accounts[1]
		const addressrK7gQv = accounts[1]
		const addressBbTAQTj = accounts[3]
		const addressWMO3v8 = accounts[5]
		const addressgJka1Qr = await ControllerWCr9CCu.inCaseTokensGetStuck.call(addressEcsvdL2, uintg8Pouk, {from: accounts[0]});
		const addressRxLfQHE = await ControllerWCr9CCu.approveStrategy.call(addressrK7gQv, addressMIXx5x, {from: accounts[3]});
		const addressaehKY5A = await ControllerWCr9CCu.revokeStrategy.call(addressWMO3v8, addressBbTAQTj, {from: accounts[4]});

		await expect(ControllerWCr9CCu.inCaseTokensGetStuck.call(addressEcsvdL2, uintg8Pouk, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressiy2LHzw = "0x0000000000000000000000000000000000000001"
		const ControllerA7SVNBF = await Controller.new(addressiy2LHzw, {from: accounts[1]});
		const addressJJxXTTf = accounts[0]
		const uintN0mf63p = BigInt("1628")
		const addresscyvOQQR = accounts[1]
		const uintcaupUxf = BigInt("1459")
		const addressHMi8VnN = accounts[1]
		const addressGqI1kqW = accounts[0]
		const addresszJAkuy = await ControllerA7SVNBF.setRewards.call(addressJJxXTTf, {from: accounts[4]});
		const addressbz50ChQ = await ControllerA7SVNBF.earn.call(addresscyvOQQR, uintN0mf63p, {from: "0x0000000000000000000000000000000000000001"});
		const uintCQZTLnv = await ControllerA7SVNBF.getExpectedReturn.call(addressGqI1kqW, addressHMi8VnN, uintcaupUxf, {from: accounts[3]});

		await expect(ControllerA7SVNBF.setRewards.call(addressJJxXTTf, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressKWY0KQ = accounts[0]
		const Controllera6txHQB = await Controller.new(addressKWY0KQ, {from: accounts[2]});
		const uintfZZD794 = BigInt("1595")
		const uintnr89VKu = BigInt("46")
		const addressjGUBKRk = accounts[3]
		const addresstWuruFp = accounts[0]
		const uintpAuuIpa = BigInt("362")
		const addressakN9m5v = accounts[2]
		const uintuVM3fYR = await Controllera6txHQB.setSplit.call(uintfZZD794, {from: accounts[3]});
		const uintZni6tyF = await Controllera6txHQB.getExpectedReturn.call(addresstWuruFp, addressjGUBKRk, uintnr89VKu, {from: accounts[3]});
		const addressgLBqNaq = await Controllera6txHQB.inCaseTokensGetStuck.call(addressakN9m5v, uintpAuuIpa, {from: accounts[3]});

		await expect(Controllera6txHQB.setSplit.call(uintfZZD794, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressrgRYn3 = accounts[5]
		const ControllerWCr9CCu = await Controller.new(addressrgRYn3, {from: accounts[1]});
		const addressXvXdxah = accounts[1]
		const addressBNZaypY = accounts[1]
		const addressulFs8Du = accounts[4]
		const addressKIFIWRu = accounts[4]
		const addressXFUbup1 = accounts[0]
		const addressmDRxJhI = accounts[3]
		const addressE6raBbP = accounts[6]
		const addressRxLfQHE = await ControllerWCr9CCu.approveStrategy.call(addressBNZaypY, addressXvXdxah, {from: accounts[3]});
		const addressRKhEzfy = await ControllerWCr9CCu.setStrategist.call(addressulFs8Du, {from: accounts[2]});
		const addressIxBJ3DJ = await ControllerWCr9CCu.revokeStrategy.call(addressXFUbup1, addressKIFIWRu, {from: accounts[2]});
		const addressaehKY5A = await ControllerWCr9CCu.revokeStrategy.call(addressE6raBbP, addressmDRxJhI, {from: accounts[4]});

		await expect(ControllerWCr9CCu.approveStrategy.call(addressBNZaypY, addressXvXdxah, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addresseXmjSIF = accounts[1]
		const ControllerbJvYtBb = await Controller.new(addresseXmjSIF, {from: accounts[4]});
		const addressF0mGveQ = accounts[2]
		const uintOTbqy9l = BigInt("1663")
		const addressFvKYZgn = accounts[3]
		const addresshLiUdHK = accounts[0]
		const addressKRqaJsL = accounts[0]
		const addressTvYn9Ke = await ControllerbJvYtBb.setStrategist.call(addressF0mGveQ, {from: "0x0000000000000000000000000000000000000001"});
		const addressLkOpVN = await ControllerbJvYtBb.earn.call(addressFvKYZgn, uintOTbqy9l, {from: "0x0000000000000000000000000000000000000001"});
		const addressXg6Rb2k = await ControllerbJvYtBb.inCaseStrategyTokenGetStuck.call(addressKRqaJsL, addresshLiUdHK, {from: accounts[1]});

		await expect(ControllerbJvYtBb.setStrategist.call(addressF0mGveQ, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressobwGHKD = "0x0000000000000000000000000000000000000001"
		const ControllerA7SVNBF = await Controller.new(addressobwGHKD, {from: accounts[1]});
		const addressHYwmbD5 = accounts[2]
		const addressen10Q08 = accounts[0]
		const addressKt6HTUX = "0x0000000000000000000000000000000000000001"
		const addressT64tWw = accounts[3]
		const addressB8aODFd = accounts[1]
		const uintfDtE2pW = BigInt("1628")
		const addressqZvQzAM = accounts[1]
		const uintD9RxON3 = BigInt("247")
		const addressRt3VX6A = accounts[4]
		const addressGLOWhje = accounts[2]
		const uintoTYtE4k = BigInt("1459")
		const addressulBbmSd = "0x0000000000000000000000000000000000000001"
		const addressrxJLjqj = accounts[0]
		const addressdseVtAj = await ControllerA7SVNBF.revokeStrategy.call(addressen10Q08, addressHYwmbD5, {from: accounts[2]});
		const addressueDKG8Y = await ControllerA7SVNBF.approveStrategy.call(addressT64tWw, addressKt6HTUX, {from: accounts[3]});
		const addresszJAkuy = await ControllerA7SVNBF.setRewards.call(addressB8aODFd, {from: accounts[4]});
		const addressbz50ChQ = await ControllerA7SVNBF.earn.call(addressqZvQzAM, uintfDtE2pW, {from: "0x0000000000000000000000000000000000000001"});
		const uint44B921 = await ControllerA7SVNBF.getExpectedReturn.call(addressGLOWhje, addressRt3VX6A, uintD9RxON3, {from: accounts[4]});
		const uintCQZTLnv = await ControllerA7SVNBF.getExpectedReturn.call(addressrxJLjqj, addressulBbmSd, uintoTYtE4k, {from: accounts[3]});

		await expect(ControllerA7SVNBF.revokeStrategy.call(addressen10Q08, addressHYwmbD5, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addresswGbPyL = accounts[0]
		const ControllerEzsvAeb = await Controller.new(addresswGbPyL, {from: accounts[2]});
		const addressRJQ9W1h = accounts[0]
		const uintfVn2HXw = BigInt("1750")
		const addressag7Ugb = accounts[0]
		const addressBqtxZZD = accounts[0]
		const addressLYDscBC = await ControllerEzsvAeb.setOneSplit.call(addressRJQ9W1h, {from: accounts[1]});
		const uintHrr2pL = await ControllerEzsvAeb.setSplit.call(uintfVn2HXw, {from: accounts[1]});
		const addresswegpwvo = await ControllerEzsvAeb.setVault.call(addressBqtxZZD, addressag7Ugb, {from: accounts[1]});

		await expect(ControllerEzsvAeb.setOneSplit.call(addressRJQ9W1h, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addresscBJYGEW = accounts[0]
		const Controllera6txHQB = await Controller.new(addresscBJYGEW, {from: accounts[2]});
		const uintwdab4qu = BigInt("46")
		const address5ebK2o = accounts[0]
		const addressw4weOG8 = accounts[0]
		const uintH1YCYDF = BigInt("378")
		const addressZsVztrK = accounts[2]
		const uintZni6tyF = await Controllera6txHQB.getExpectedReturn.call(addressw4weOG8, address5ebK2o, uintwdab4qu, {from: accounts[3]});
		const addressgLBqNaq = await Controllera6txHQB.inCaseTokensGetStuck.call(addressZsVztrK, uintH1YCYDF, {from: accounts[3]});

		await expect(Controllera6txHQB.getExpectedReturn.call(addressw4weOG8, address5ebK2o, uintwdab4qu, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addresse1TUY6h = accounts[3]
		const ControllerCb4fOf9 = await Controller.new(addresse1TUY6h, {from: "0x0000000000000000000000000000000000000001"});
		const addressQH6tIMs = accounts[0]
		const addressLNCPPnr = accounts[5]
		const addressXhsbZt = accounts[4]
		const addressGXxUpwS = accounts[4]
		const addresskSneTJ = accounts[1]
		const addresssDKSNR3 = accounts[1]
		const addressSD0lxaB = accounts[3]
		const uintdrCbrTk = await ControllerCb4fOf9.balanceOf.call(addressQH6tIMs, {from: accounts[5]});
		const addressBctnbv0 = await ControllerCb4fOf9.setVault.call(addressXhsbZt, addressLNCPPnr, {from: "0x0000000000000000000000000000000000000001"});
		const addressHSxRd4f = await ControllerCb4fOf9.setStrategy.call(addresskSneTJ, addressGXxUpwS, {from: accounts[0]});
		const addressxzLB5iE = await ControllerCb4fOf9.setVault.call(addressSD0lxaB, addresssDKSNR3, {from: accounts[2]});
	});

	it('test for Controller', async () => {
		const addressLHwYtw = accounts[0]
		const ControllerYhYDRnS = await Controller.new(addressLHwYtw, {from: accounts[1]});
		const addressDEZcE7A = accounts[5]
		const addresshyS5kKL = accounts[4]
		const addressebHJUEf = accounts[4]
		const addressse8ZWEp = accounts[2]
		const uinthcHHh6X = BigInt("1392")
		const addresssQOb40i = accounts[3]
		const addressITGCuf = await ControllerYhYDRnS.inCaseStrategyTokenGetStuck.call(addresshyS5kKL, addressDEZcE7A, {from: accounts[0]});
		const addresswnFlpXw = await ControllerYhYDRnS.withdrawAll.call(addressebHJUEf, {from: accounts[5]});
		const addressDfCyABL = await ControllerYhYDRnS.setGovernance.call(addressse8ZWEp, {from: accounts[2]});
		const addressdmN8iTT = await ControllerYhYDRnS.inCaseTokensGetStuck.call(addresssQOb40i, uinthcHHh6X, {from: accounts[5]});

		await expect(ControllerYhYDRnS.inCaseStrategyTokenGetStuck.call(addresshyS5kKL, addressDEZcE7A, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressBL57x6E = accounts[2]
		const Controller2B4wWm = await Controller.new(addressBL57x6E, {from: accounts[2]});
		const addresswxejjlX = accounts[3]
		const addressagoVhP = accounts[3]
		const addressSNfLoO = accounts[2]
		const addressS1pENu4 = accounts[4]
		const addressKYicQJ = await Controller2B4wWm.setGovernance.call(addresswxejjlX, {from: accounts[2]});
		const addressWzJfLzJ = await Controller2B4wWm.approveStrategy.call(addressSNfLoO, addressagoVhP, {from: accounts[1]});
		const addressihAyVZd = await Controller2B4wWm.setStrategist.call(addressS1pENu4, {from: accounts[1]});

		await expect(Controller2B4wWm.approveStrategy.call(addressSNfLoO, addressagoVhP, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressMEhwIm = accounts[0]
		const Controllera6txHQB = await Controller.new(addressMEhwIm, {from: accounts[2]});
		const uintofEtS9Q = BigInt("267")
		const addressDx75z7C = accounts[4]
		const addressyssWLEJ = accounts[4]
		const uintvBRQ4K = BigInt("406")
		const addressws4lbIT = accounts[3]
		const address1pidfL = await Controllera6txHQB.yearn.call(addressyssWLEJ, addressDx75z7C, uintofEtS9Q, {from: accounts[5]});
		const addressgLBqNaq = await Controllera6txHQB.inCaseTokensGetStuck.call(addressws4lbIT, uintvBRQ4K, {from: accounts[3]});

		await expect(Controllera6txHQB.yearn.call(addressyssWLEJ, addressDx75z7C, uintofEtS9Q, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addresseamnZ7W = accounts[1]
		const ControllerDk7czE1 = await Controller.new(addresseamnZ7W, {from: accounts[3]});
		const addressxBkCgyo = accounts[0]
		const addressdSs0kzV = accounts[2]
		const addressbMduzCI = accounts[4]
		const addressrEi1ls0 = accounts[3]
		const addressZZ3XCSz = accounts[3]
		const addresseJv1v4x = accounts[0]
		const addressujhF7bT = accounts[0]
		const addresskAmh3QV = await ControllerDk7czE1.setVault.call(addressdSs0kzV, addressxBkCgyo, {from: accounts[4]});
		const addressv8kfd1W = await ControllerDk7czE1.setConverter.call(addressZZ3XCSz, addressrEi1ls0, addressbMduzCI, {from: accounts[3]});
		const addressCU5Yj3P = await ControllerDk7czE1.setStrategy.call(addressujhF7bT, addresseJv1v4x, {from: accounts[1]});

		await expect(ControllerDk7czE1.setVault.call(addressdSs0kzV, addressxBkCgyo, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addresskqTQ67Q = "0x0000000000000000000000000000000000000001"
		const ControllerA7SVNBF = await Controller.new(addresskqTQ67Q, {from: accounts[1]});
		const addressAqnMzb = accounts[2]
		const addressb2jSYi7 = accounts[0]
		const uintKCb2UxJ = BigInt("377")
		const addressOJEoxKB = accounts[4]
		const addressyOfydzS = accounts[4]
		const addressmidaXE = accounts[0]
		const addresssJUwnl = await ControllerA7SVNBF.inCaseStrategyTokenGetStuck.call(addressb2jSYi7, addressAqnMzb, {from: accounts[1]});
		const uintdH7Ypmd = await ControllerA7SVNBF.getExpectedReturn.call(addressyOfydzS, addressOJEoxKB, uintKCb2UxJ, {from: accounts[2]});
		const addresszJAkuy = await ControllerA7SVNBF.setRewards.call(addressmidaXE, {from: accounts[4]});

		await expect(ControllerA7SVNBF.inCaseStrategyTokenGetStuck.call(addressb2jSYi7, addressAqnMzb, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressQ0kxPyz = accounts[2]
		const Controllermda231 = await Controller.new(addressQ0kxPyz, {from: accounts[4]});
		const addressRBfBLeK = accounts[3]
		const addressS3yYJih = accounts[5]
		const addressULdf0Xr = accounts[3]
		const addressSRPxW1Z = accounts[3]
		const addressgiu6uBZ = "0x0000000000000000000000000000000000000001"
		const addressqdUZML7 = accounts[2]
		const addressOojaYPp = accounts[4]
		const addressS0Xyxf = accounts[4]
		const uintsV9Zs9 = BigInt("169")
		const addressFtfrzU = accounts[5]
		const addressTNBhVt7 = await Controllermda231.revokeStrategy.call(addressS3yYJih, addressRBfBLeK, {from: accounts[4]});
		const addressnjyq503 = await Controllermda231.inCaseStrategyTokenGetStuck.call(addressSRPxW1Z, addressULdf0Xr, {from: accounts[2]});
		const address6FBwgx = await Controllermda231.setVault.call(addressqdUZML7, addressgiu6uBZ, {from: accounts[2]});
		const address9B9G7Q = await Controllermda231.approveStrategy.call(addressS0Xyxf, addressOojaYPp, {from: accounts[0]});
		const addressP7uru5h = await Controllermda231.inCaseTokensGetStuck.call(addressFtfrzU, uintsV9Zs9, {from: "0x0000000000000000000000000000000000000001"});

		await expect(Controllermda231.inCaseStrategyTokenGetStuck.call(addressSRPxW1Z, addressULdf0Xr, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addresswADxA7Z = accounts[1]
		const ControllerbgGSc7c = await Controller.new(addresswADxA7Z, {from: accounts[3]});
		const uintQ0GSo5f = BigInt("770")
		const addressu1qQH5 = accounts[4]
		const uintOCidRvH = BigInt("48")
		const addresshGsYEB4 = accounts[1]
		const addressZIJEmiU = accounts[5]
		const addressOK0fDa1 = accounts[3]
		const uinttsd6mDg = BigInt("1131")
		const addresseDgount = accounts[0]
		const addressfVDIT29 = accounts[0]
		const addressWaMcaUp = accounts[2]
		const addressWO9XBjU = await ControllerbgGSc7c.withdraw.call(addressu1qQH5, uintQ0GSo5f, {from: accounts[4]});
		const addressftpSjy7 = await ControllerbgGSc7c.earn.call(addresshGsYEB4, uintOCidRvH, {from: accounts[1]});
		const addressGEOcqS4 = await ControllerbgGSc7c.withdrawAll.call(addressZIJEmiU, {from: accounts[3]});
		const addressf81kpCi = await ControllerbgGSc7c.setStrategist.call(addressOK0fDa1, {from: accounts[1]});
		const addresshm07Wmp = await ControllerbgGSc7c.earn.call(addresseDgount, uinttsd6mDg, {from: accounts[4]});
		const addressbg1ZWj = await ControllerbgGSc7c.approveStrategy.call(addressWaMcaUp, addressfVDIT29, {from: accounts[4]});

		await expect(ControllerbgGSc7c.withdraw.call(addressu1qQH5, uintQ0GSo5f, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressw33mXjC = accounts[1]
		const ControllerbJvYtBb = await Controller.new(addressw33mXjC, {from: accounts[4]});
		const addressdHYBVD2 = accounts[3]
		const addresssSQ681 = accounts[4]
		const addressZ1D0hf = accounts[2]
		const addressEG03YcE = accounts[2]
		const addressJKFrd8g = await ControllerbJvYtBb.setConverter.call(addressZ1D0hf, addresssSQ681, addressdHYBVD2, {from: accounts[4]});
		const addressTvYn9Ke = await ControllerbJvYtBb.setStrategist.call(addressEG03YcE, {from: "0x0000000000000000000000000000000000000001"});

		await expect(ControllerbJvYtBb.setStrategist.call(addressEG03YcE, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addresspvfdYGm = accounts[5]
		const ControllerWCr9CCu = await Controller.new(addresspvfdYGm, {from: accounts[1]});
		const addressgHTACub = accounts[2]
		const addressPtzFKf0 = accounts[1]
		const addressAfZbyXg = accounts[1]
		const addressDrlDQsw = accounts[2]
		const addressu7TYwBy = await ControllerWCr9CCu.setVault.call(addressPtzFKf0, addressgHTACub, {from: accounts[1]});
		const addressRxLfQHE = await ControllerWCr9CCu.approveStrategy.call(addressDrlDQsw, addressAfZbyXg, {from: accounts[3]});

		await expect(ControllerWCr9CCu.approveStrategy.call(addressDrlDQsw, addressAfZbyXg, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressJ4LCqTc = accounts[1]
		const ControllerbgGSc7c = await Controller.new(addressJ4LCqTc, {from: accounts[3]});
		const uintq6yukXD = BigInt("955")
		const addressCf4jpZD = accounts[3]
		const addressv3govZD = accounts[0]
		const uintZ3iWiwa = BigInt("770")
		const addressH6z2GFf = accounts[4]
		const uintcHrfcl9 = BigInt("48")
		const addresso31HgMB = accounts[1]
		const addresstQ8Xuyx = accounts[5]
		const addresshcChRrO = accounts[3]
		const addressPAJV2mG = accounts[0]
		const addressudYIUAR = accounts[2]
		const addressKq93t6J = await ControllerbgGSc7c.yearn.call(addressv3govZD, addressCf4jpZD, uintq6yukXD, {from: accounts[3]});
		const addressWO9XBjU = await ControllerbgGSc7c.withdraw.call(addressH6z2GFf, uintZ3iWiwa, {from: accounts[4]});
		const addressftpSjy7 = await ControllerbgGSc7c.earn.call(addresso31HgMB, uintcHrfcl9, {from: accounts[1]});
		const addressGEOcqS4 = await ControllerbgGSc7c.withdrawAll.call(addresstQ8Xuyx, {from: accounts[3]});
		const addressf81kpCi = await ControllerbgGSc7c.setStrategist.call(addresshcChRrO, {from: accounts[1]});
		const addressbg1ZWj = await ControllerbgGSc7c.approveStrategy.call(addressudYIUAR, addressPAJV2mG, {from: accounts[4]});

		await expect(ControllerbgGSc7c.yearn.call(addressv3govZD, addressCf4jpZD, uintq6yukXD, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressVRR8y4Q = "0x0000000000000000000000000000000000000001"
		const ControllerA7SVNBF = await Controller.new(addressVRR8y4Q, {from: accounts[1]});
		const addressVmsb47F = accounts[2]
		const addressGWMr3J = accounts[1]
		const addressTJiSXXq = await ControllerA7SVNBF.setOneSplit.call(addressVmsb47F, {from: accounts[1]});
		const addresszJAkuy = await ControllerA7SVNBF.setRewards.call(addressGWMr3J, {from: accounts[4]});

		await expect(ControllerA7SVNBF.setRewards.call(addressGWMr3J, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressNjnlt2 = accounts[3]
		const ControllerdN1Hphe = await Controller.new(addressNjnlt2, {from: accounts[1]});
		const uintdICqnTy = BigInt("1804")
		const addressJL78GA9 = accounts[2]
		const addresszg7ddZn = accounts[5]
		const addressgJG4r2v = accounts[1]
		const addressKkpNQ7J = accounts[1]
		const addressxbY5vdq = accounts[0]
		const addressgzIiGSF = accounts[3]
		const uintSUCEKJ = await ControllerdN1Hphe.setSplit.call(uintdICqnTy, {from: accounts[1]});
		const addressg2shr9v = await ControllerdN1Hphe.setRewards.call(addressJL78GA9, {from: accounts[0]});
		const addressBR8Otem = await ControllerdN1Hphe.approveStrategy.call(addressgJG4r2v, addresszg7ddZn, {from: accounts[1]});
		const addressy0MbWmn = await ControllerdN1Hphe.setRewards.call(addressKkpNQ7J, {from: accounts[5]});
		const addresseVoCqGk = await ControllerdN1Hphe.inCaseStrategyTokenGetStuck.call(addressgzIiGSF, addressxbY5vdq, {from: accounts[5]});

		await expect(ControllerdN1Hphe.setRewards.call(addressJL78GA9, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressGROMU8M = accounts[1]
		const ControllerbJvYtBb = await Controller.new(addressGROMU8M, {from: accounts[4]});
		const addressMO6Znm6 = accounts[3]
		const addressav7HPB5 = accounts[4]
		const addressz56GlWC = await ControllerbJvYtBb.setStrategist.call(addressMO6Znm6, {from: accounts[4]});
		const addressTvYn9Ke = await ControllerbJvYtBb.setStrategist.call(addressav7HPB5, {from: "0x0000000000000000000000000000000000000001"});

		await expect(ControllerbJvYtBb.setStrategist.call(addressav7HPB5, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressqUCjDfV = accounts[5]
		const ControllerWCr9CCu = await Controller.new(addressqUCjDfV, {from: accounts[1]});
		const addresshPCSfX = accounts[3]
		const addressPoVczvi = "0x0000000000000000000000000000000000000001"
		const addressd5jaEhU = accounts[1]
		const addressFxKjwej = accounts[1]
		const addresshqFGMPL = accounts[1]
		const addresskJFvQ7Q = accounts[3]
		const addressxoRzCP5 = await ControllerWCr9CCu.setStrategy.call(addressPoVczvi, addresshPCSfX, {from: accounts[1]});
		const addressRxLfQHE = await ControllerWCr9CCu.approveStrategy.call(addressFxKjwej, addressd5jaEhU, {from: accounts[3]});
		const addressIyQpbls = await ControllerWCr9CCu.setStrategy.call(addresskJFvQ7Q, addresshqFGMPL, {from: accounts[4]});

		await expect(ControllerWCr9CCu.setStrategy.call(addressPoVczvi, addresshPCSfX, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressQamnd9N = accounts[4]
		const Controllersv0mTsE = await Controller.new(addressQamnd9N, {from: accounts[3]});
		const addressuM1qZPy = accounts[3]
		const addressp3mM5C = accounts[2]
		const addresskCjdgQ3 = accounts[1]
		const addressZshxq6 = accounts[0]
		const addresswQPasBn = accounts[4]
		const addresslheKHR = "0x0000000000000000000000000000000000000001"
		const addressucYLzKm = accounts[4]
		const addresstPx05xJ = accounts[1]
		const addressAXqN6lE = accounts[3]
		const addressri1Pvra = accounts[3]
		const addressS4h74TT = "0x0000000000000000000000000000000000000001"
		const addressooWKgSM = accounts[1]
		const addressdTsSls5 = await Controllersv0mTsE.approveStrategy.call(addressp3mM5C, addressuM1qZPy, {from: accounts[3]});
		const addressTHP0jLy = await Controllersv0mTsE.setVault.call(addressZshxq6, addresskCjdgQ3, {from: "0x0000000000000000000000000000000000000001"});
		const addressCAnXFuV = await Controllersv0mTsE.setConverter.call(addressucYLzKm, addresslheKHR, addresswQPasBn, {from: accounts[2]});
		const addressXhDTwGV = await Controllersv0mTsE.setStrategist.call(addresstPx05xJ, {from: accounts[1]});
		const addressTBEE5sq = await Controllersv0mTsE.setStrategy.call(addressri1Pvra, addressAXqN6lE, {from: accounts[3]});
		const addressuTrF6VZ = await Controllersv0mTsE.approveStrategy.call(addressooWKgSM, addressS4h74TT, {from: accounts[3]});

		await expect(Controllersv0mTsE.setVault.call(addressZshxq6, addresskCjdgQ3, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressi2SyCTM = accounts[0]
		const Controllera6txHQB = await Controller.new(addressi2SyCTM, {from: accounts[2]});
		const addresskEmAbdu = accounts[5]
		const addressuZyAuad = accounts[1]
		const addressqsRRLd1 = accounts[0]
		const uintx1AnDBw = BigInt("378")
		const addresseRk7lMj = accounts[1]
		const addressYEVr20y = accounts[5]
		const addressTYBPVdz = accounts[1]
		const addressu1ioKb0 = await Controllera6txHQB.setRewards.call(addresskEmAbdu, {from: accounts[2]});
		const addressVE8tbja = await Controllera6txHQB.inCaseStrategyTokenGetStuck.call(addressqsRRLd1, addressuZyAuad, {from: accounts[4]});
		const addressgLBqNaq = await Controllera6txHQB.inCaseTokensGetStuck.call(addresseRk7lMj, uintx1AnDBw, {from: accounts[3]});
		const addressW74Zq8s = await Controllera6txHQB.revokeStrategy.call(addressTYBPVdz, addressYEVr20y, {from: "0x0000000000000000000000000000000000000001"});

		await expect(Controllera6txHQB.inCaseStrategyTokenGetStuck.call(addressqsRRLd1, addressuZyAuad, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressd79YBPZ = accounts[1]
		const ControllerbgGSc7c = await Controller.new(addressd79YBPZ, {from: accounts[3]});
		const uintp1PRkPX = BigInt("1915")
		const addressWH7ydp7 = accounts[1]
		const uintpvReOKf = BigInt("770")
		const addressri8vcrP = accounts[1]
		const uintjeIyHLT = BigInt("1113")
		const addressr68pwvL = accounts[2]
		const addressNAmJdtV = accounts[5]
		const addressqaFb2s = await ControllerbgGSc7c.inCaseTokensGetStuck.call(addressWH7ydp7, uintp1PRkPX, {from: accounts[3]});
		const addressWO9XBjU = await ControllerbgGSc7c.withdraw.call(addressri8vcrP, uintpvReOKf, {from: accounts[4]});
		const addressWdrGAL = await ControllerbgGSc7c.yearn.call(addressNAmJdtV, addressr68pwvL, uintjeIyHLT, {from: accounts[0]});

		await expect(ControllerbgGSc7c.inCaseTokensGetStuck.call(addressWH7ydp7, uintp1PRkPX, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})